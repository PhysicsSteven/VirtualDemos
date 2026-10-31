#!/usr/bin/env python3
"""Build the site's index pages from curriculum/textbook-map.json, curriculum/catalog.json and curriculum/topics.json:
the course pages (physics-1.html, physics-2.html, astro-2203.html and the acoustics, thermo, modern, astro and medical-physics
modules), one page per topic (topics/<id>.html), openstax.html (every textbook section with its demos), the home page below
its hero (Courses, All demos by topic, OpenStax by section), search.js, 404.html, misc.html (a redirect) and demos/lib/nav.js.

    python3 tools/courses.py          # write the pages and update index.html
    python3 tools/courses.py --check  # exit 1 if any output is out of date

Titles and descriptions come from curriculum/catalog.json, the list of every demo on the
site; thumbnails are thumbs/<demo>-light.webp and -dark.webp. Demo URLs are unchanged: every page only links to demos/<name>.html.
"""
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MAP = ROOT / 'curriculum' / 'textbook-map.json'
INDEX = ROOT / 'index.html'
CATALOG = ROOT / 'curriculum' / 'catalog.json'
BOOK = {1: 'University Physics Volume 1', 2: 'University Physics Volume 2', 3: 'University Physics Volume 3'}
BOOK_URL = {1: 'https://openstax.org/details/books/university-physics-volume-1',
            2: 'https://openstax.org/details/books/university-physics-volume-2',
            3: 'https://openstax.org/details/books/university-physics-volume-3'}
BLURB = {
    'physics-1': ('Mechanics and oscillations', 'Measurement and vectors through oscillations, in the order of the course schedule. OpenStax University Physics Volume 1.'),
    'physics-2': ('Electricity and magnetism', 'Charges and fields through Maxwell’s equations and electromagnetic waves, then AC circuits, light and geometric optics, and wave optics. OpenStax University Physics Volume 2, and Volume 3 for optics.'),
    'acoustics': ('Waves and sound', 'Waves on strings, the speed of sound, resonance, musical tones and the Doppler effect, then two demos beyond the textbook. OpenStax University Physics Volume 1, chapters 16 and 17.'),
    'thermo': ('Heat and the laws of thermodynamics', 'Temperature and heat, phase changes, the kinetic theory of gases, and the first and second laws with engines and entropy. OpenStax University Physics Volume 2, chapters 1 to 4.'),
    'modern': ('Relativity, quanta, atoms and nuclei', 'Relativity, photons and matter waves, quantum mechanics, atoms, solids, nuclei, particles and cosmology. OpenStax University Physics Volume 3, chapters 5 to 11.'),
    'astro': ('Sky, planets, stars and galaxies', 'Seasons and the Moon, gravitation and orbits, how stars shine and age, and galaxies, dark matter and the expanding universe. OpenStax University Physics Volume 1, chapter 13, and Volume 3, chapters 10 and 11, where they apply.'),
    'astro+2203': ('Sky, planets, stars and galaxies', 'The sky from Earth, gravitation and orbits, telescopes and light, how stars shine and age, galaxies and the expanding universe, and the planets and their surfaces, with the Astro 2203 schedule at the bottom and its introductory worksheets on every card. OpenStax University Physics Volume 1, chapter 13, and Volume 3, chapters 10 and 11, where they apply.'),
    'astro+incl': ('Sky, planets, stars and galaxies', 'Every astronomy demo on the site: the sky from Earth, gravitation and orbits, telescopes and light, how stars shine and age, galaxies and the expanding universe, and the planets and their surfaces. Each card lists the Astro 2203 introductory worksheets too. OpenStax University Physics Volume 1, chapter 13, and Volume 3, chapters 10 and 11, where they apply.'),
    'astro-2203': ('Solar system astronomy', 'From naked eye observations of the sky to the planets, their moons, the small bodies and planets around other stars, week by week through the Winter Quarter, with a review before each of the three tests and one required worksheet most weeks. The worksheets are written for an introductory class: algebra, ratios and short graphs.'),
    'medical-physics': ('Radiation physics and proton therapy', 'For the junior and senior medical physics track, beside the radiation physics class and ahead of the seniors\u2019 lab at the proton therapy center: sources and decay, photon interactions, charged particles in matter, dosimetry, radiobiology, shielding, proton therapy and imaging. Calculus throughout; the upper level worksheets read cited data tables and carry uncertainties, and the other worksheets on each card work as warm ups.'),
}
# A course with no textbook (Astro 2203, 2026-10-25): its units list demos only, and its worksheets are its own intro level
# handouts. COURSE_HANDOUTS[course] is the set of handouts written for that course: its page shows only those on each demo card
# (with any whose second line names the course), and the other course pages leave them out. See course_handouts.
COURSE_HANDOUTS = {'astro-2203': {'intro-seasons', 'intro-solar-system-formation', 'intro-kepler', 'intro-gravity', 'intro-scale', 'intro-moon', 'intro-precession', 'intro-celestial-sphere',
                                'intro-telescope', 'intro-resolution', 'intro-mirrors', 'intro-blackbody', 'intro-spectra', 'intro-em-spectrum', 'intro-planet-temperatures',
                                'intro-retrograde', 'intro-resonances', 'intro-craters', 'intro-mars-ages', 'intro-giant-planets'}}
COURSE_HANDOUTS['astro-2203'].add('intro-inside-a-planet')
COURSE_HANDOUTS['astro-2203'] |= {'intro-exoplanets', 'intro-tides', 'intro-lagrange', 'intro-parallax', 'intro-atmospheres'}
COURSE_HANDOUTS['astro-2203'].add('intro-sidereal-day')   # Reasons for Seasons, Sidereal and solar days and Sundial and clock, 2026-10-31
COURSE_HANDOUTS['astro-2203'].add('intro-constellations-3d')   # The Sky and the Celestial Sphere, Real distances, 2026-10-31
COURSE_HANDOUTS['medical-physics'] = {'mp-kerma-equilibrium', 'mp-proton-calibration', 'mp-technetium-generator', 'mp-x-ray-filtration', 'mp-shielding-barrier', 'mp-ultrasound-attenuation'}
COURSE_HANDOUTS['medical-physics'].add('mp-photon-interactions')
COURSE_HANDOUTS['medical-physics'] |= {'mp-charged-particles', 'mp-bragg-peak', 'mp-proton-qa', 'mp-shielding-rooms', 'mp-ct-range'}
COURSE_HANDOUTS['medical-physics'].add('mp-radiobiology')
# Medical Physics (2026-10-25) is upper level: its page lists its own worksheets first, then the demo's other worksheets as warm ups.
WARM_UPS = {'medical-physics'}
NO_BOOK = {'astro-2203', 'medical-physics'}
# Two ways one course can sit inside another (tools read the map through load_map, which applies them):
# MERGED folds a course into another: one page whose units take in its demos (MERGE_PLACE) and whose cards list both courses'
# worksheets, then its schedule at the bottom, topic by topic; <src>.html redirects there. Astro 2203 was folded into Astronomy
# 2026-10-25 ("for now combine them") and split again 2026-10-26.
# INCLUDED (Steve, 2026-10-26): the target holds every demo and worksheet of the source the same way (MERGE_PLACE, cards list
# both courses' worksheets), and the source keeps its own page, tile and Canvas file, listing only its subset in schedule order.
# Astronomy (general) holds every astronomy demo; Astro 2203 is the course's own page. Old links to the folded page's schedule
# (astro.html#astro-2203, #a2203-<topic>) are sent to astro-2203.html by a line on the Astronomy page (OLD_ANCHORS).
MERGED = {}
INCLUDED = {'astro-2203': 'astro'}
MERGE_PLACE = {'units': 'sky', 'gyroscope': 'sky', 'rotation': 'gravitation',
               'instrument-builder': 'telescopes-light', 'optics-bench': 'telescopes-light', 'resolution': 'telescopes-light',
               'em-waves': 'telescopes-light', 'blackbody': 'telescopes-light', 'spectra': 'telescopes-light',
               'radioactive-decay': 'planets', 'fluids': 'planets', 'ideal-gas': 'planets'}
MERGE_UNITS = {'telescopes-light': ('gravitation', {'id': 'telescopes-light', 'title': 'Telescopes and light', 'short': 'Telescopes and light',
                                                     'requirement': 'required', 'sections': [], 'demos': []})}   # new unit, after the named one
SCHEDULE_PREFIX = 'a2203-'
BLURB['astro'] = (BLURB['astro+2203'] if MERGED.get('astro-2203') == 'astro' else BLURB['astro+incl'] if INCLUDED.get('astro-2203') == 'astro'
                  else BLURB['astro'])
MODULES = {'acoustics', 'thermo', 'modern', 'astro'}   # modules follow the textbook chapters, not a course schedule
TILE_START, TILE_END = '<!-- COURSES START (tools/courses.py) -->', '<!-- COURSES END -->'
esc = html.escape


def load_map():
    """curriculum/textbook-map.json with each MERGED course folded into its target and each INCLUDED course's demos added to its
    target (see MERGED). Demos keep their own course list as '_course', which course_handouts uses to list both courses'
    worksheets on the target's cards."""
    m = json.loads(MAP.read_text())
    fold = {**MERGED, **INCLUDED}
    if not fold:
        return m
    by_id = {c['id']: c for c in m['courses']}
    for d in m['demos']:
        d['_course'] = list(d['course'])
    for src, dst in fold.items():
        tgt = by_id[dst]
        for key, (after, unit) in MERGE_UNITS.items():
            if not any(u['id'] == key for u in tgt['units']):
                i = next(i for i, u in enumerate(tgt['units']) if u['id'] == after)
                tgt['units'].insert(i + 1, json.loads(json.dumps(unit)))
        units = {u['id']: u for u in tgt['units']}
        have = {d['demo'] for d in m['demos'] if dst in d['course']}
        for d in m['demos']:
            if src in d['course'] and d['demo'] not in have:
                units[MERGE_PLACE[d['demo']]].setdefault('demos', []).append(d['demo'])   # a new Astro 2203 demo needs a MERGE_PLACE entry
        if src in MERGED:
            for u in by_id[src]['units']:   # the schedule, at the bottom of the page
                tgt['units'].append(dict(u, id=SCHEDULE_PREFIX + u['id'], schedule=src,
                                         review=[SCHEDULE_PREFIX + r for r in u.get('review', [])] or None))
        for d in m['demos']:
            if src in d['course']:
                d['course'] = list(dict.fromkeys(dst if c == src and src in MERGED else c for c in d['course'] + [dst]))
        if src in MERGED:
            for a in m.get('activities', []):
                a['course'] = list(dict.fromkeys(MERGED.get(c, c) for c in a['course']))
    m['_merged_from'] = [by_id[src] for src in MERGED]
    m['courses'] = [c for c in m['courses'] if c['id'] not in MERGED]
    return m


def index_cards():
    """demo name -> title, description (inline HTML allowed), from curriculum/catalog.json"""
    return {d['demo']: d for sub in CATALOG_DATA()['subjects'] for d in sub['demos']}


def index_subjects():
    """[(subject title, [demo names])] in catalog order"""
    return [(sub['title'], [d['demo'] for d in sub['demos']]) for sub in CATALOG_DATA()['subjects']]


def CATALOG_DATA():
    return json.loads(CATALOG.read_text())


def sec_key(s):
    return (s['vol'], [int(x) for x in s['sec'].split('.')])


def chapters_of(secs):
    by_vol = {}
    for s in secs:
        by_vol.setdefault(s['vol'], set()).add(int(s['sec'].split('.')[0]))
    out = []
    for v, chs in sorted(by_vol.items()):
        chs = sorted(chs)
        runs, a = [], chs[0]
        for p, q in zip(chs, chs[1:] + [None]):
            if q != p + 1:
                runs.append(f'{a}' if a == p else f'{a}–{p}'); a = q
        out.append(f'Vol {v} · Ch. {", ".join(runs)}')
    return ' · '.join(out)


def thumb(name, alt, lazy=True):
    return (f'<picture class="thumb"><source srcset="thumbs/{name}-dark.webp" media="(prefers-color-scheme: dark)">'
            f'<img src="thumbs/{name}-light.webp" alt="{esc(alt)}" width="640" height="400"{" loading=\"lazy\"" if lazy else ""} decoding="async"></picture>')


DEMO_NOTE = {'needs-handout': 'Student handout being revised', 'needs-feature': 'Some parts still to come'}

# Link label for each student handout: "Worksheet: <topic>", or "Worksheet <n>: <topic>" when a demo has several
# (numbered in the map's order). Add an entry here when a handout is added to the map.
HANDOUT_TOPIC = {
    'sound-waves': 'Speed of Sound by Time of Flight', 'kundts-tube': "Kundt's Tube", 'wave-power': 'Power Carried by a Wave',
    'two-speaker': 'Two Speaker Interference', 'ultrasound': 'Ultrasound Echoes and Doppler Flow', 'sound-intensity': 'Sound Intensity and Decibels',
    'room-acoustics': 'Reverberation Time', 'anechoic-chamber': 'Anechoic Chamber',
    'force-table': 'Force Table',
    'vectors': 'Components, Sums and Products',
    'static-equilibrium': 'Support Forces and Cable Tension', 'catenary': 'Tension in a Hanging Chain',
    'double-pendulum': 'Normal Modes and Chaos', 'eddy-currents': 'Eddy Current Braking',
    'heating-curve': 'Heating Curve and Latent Heat', 'bonds-and-latent-heat': 'Bonds, Temperature and Latent Heat',
    'thermal-equilibrium': 'Thermal Equilibrium', 'gas-thermometer': 'Gas Thermometer and Absolute Zero', 'thermal-expansion': 'Thermal Expansion',
    'heat-conduction': 'Heat Conduction Through Layers', 'heat-capacities-of-gases': 'Heat Capacities of Gases', 'ruchardt': "Rüchardt's Ball",
    'free-expansion': 'Free Expansion', 'einstein-solids': 'Einstein Solids', 'second-law': 'Testing the Second Law',
    'ideal-gas': 'Gas in a Box', 'diffusion': "Diffusion and Graham's Law", 'heat-engines': 'Heat Engine Cycles', 'blackbody': 'Blackbody Radiation', 'convection': 'Cooling by Convection and Radiation',
    'velocity-addition': 'Adding Velocities Near c', 'relativistic-momentum': 'Momentum Under a Steady Force', 'relativistic-energy': "Bertozzi's Electrons",
    'photoelectric': "Photoelectric Effect and Planck's Constant",
    'compton': 'Compton Scattering',
    'franck-hertz': 'Franck–Hertz Experiment',
    'spacetime': 'Spacetime Diagrams and the Lorentz Transformation',
    'speed-of-light': 'Speed of Light with a Rotating Mirror',
    'rutherford': 'Rutherford Scattering',
    'spectra': 'The Hydrogen Spectrum and the Rydberg Constant',
    'wave-particle-duality': 'Wave and Particle Duality',
    'relativity-em': 'Magnetism from Relativity',
    'doppler-light': 'Doppler Effect for Light',
    'e-over-m': 'Charge to Mass Ratio of the Electron',
    'household-wiring': 'Household Wiring and Electrical Safety',
    'van-de-graaff': 'Van de Graaff Generator',
    'ink-jet-printer': 'Ink Jet Printer',
    'precipitator': 'Electrostatic Precipitator',
    'magnets-oersted': "Magnets and Oersted's Compass",
    'straight-wire-fields': 'Fields and Forces of Straight Wires', 'loops-solenoids': 'Fields of Loops and Solenoids',
    'magnetism-in-matter': 'Magnetism in Matter',
    'induced-electric-field': 'Induced Electric Fields',
    'induction-at-work': 'Induction at Work',
    'transformers': 'Transformers and Power Lines',
    'displacement-current': 'Displacement Current',
    'huygens': "Huygens's Principle", 'ripple-tank': 'Ripple Tank: Wavelength, Refraction and Interference',
    'dispersion': 'Dispersion',
    'mirrors-refraction': 'Mirrors and Refracting Surfaces', 'lenses-instruments': 'Lenses and Optical Instruments',
    'the-eye': 'The Eye', 'camera': 'The Camera',
    'resolution': 'Circular Apertures and Resolution',
    'double-slit': "Young's Double Slit", 'diffraction-grating': 'Diffraction Grating', 'single-slit': 'Single Slit Diffraction',
    'thin-films': 'Thin Film Interference', 'electron-diffraction': 'Electron Diffraction and de Broglie Waves',
    'x-ray-diffraction': 'X-Ray Diffraction', 'em-waves': 'Electromagnetic Waves: Fields, Intensity and Pressure',
    'motion-graphs': 'Motion Graphs', 'projectile-drag': 'Projectiles and Air Resistance', 'forces': 'Friction and Work',
    'potential-curves': 'Potential Energy Diagrams', 'impulse': 'Impulse and Momentum', 'collisions': 'Momentum and Collisions',
    'rotation': 'Torque and Angular Momentum', 'kepler-orbits': "Kepler's Third Law", 'stress-strain': "Young's Modulus", 'shear-bulk': 'Shear and Bulk Moduli',
    'fluids': 'Pressure, Buoyancy and Flow', 'viscometer': 'Viscosity', 'pipe-flow': 'Pipe Flow and Turbulence', 'cavendish': 'Measuring G', 'terminal-velocity': 'Terminal Velocity', 'springs': 'Spring Constant', 'normal-modes': 'Normal Modes',
    'pendulum': 'Measuring g', 'atwood': "Atwood's Machine", 'rotational-dynamics': 'Rotational Inertia', 'gyroscope': 'Gyroscope Precession', 'circular-motion': 'Speed Limits on Curves and Loops', 'rocket': 'The Rocket Equation', 'induction': 'Charging by Induction', 'neutral-attraction': 'Attracting a Neutral Insulator',
    'michelson': 'Michelson Interferometer',
    'holography': 'Holography: Fringes and Images',
    'gravity-near-earth': 'How g Changes with Height and Latitude', 'tides': 'Tidal Forces', 'gps-clocks': 'GPS Clocks and Relativity',
    'relative-motion': 'Relative Motion', 'apparent-weight': 'Apparent Weight', 'center-of-mass': 'Center of Mass',
    'coulomb-sandbox': 'Electric Field and Potential', 'gauss-law': "Gauss's Law", 'capacitors': 'Capacitance and Dielectrics',
    'resistivity': 'Resistivity', 'dc-circuits': "Kirchhoff's Rules", 'rc-circuits': 'RC Time Constant',
    'rlc-transients': 'RLC Oscillations', 'ac-circuits': 'AC Resonance', 'ac-reactance': 'Reactance and Phase', 'ac-power': 'Power in an AC Circuit',
    'magnetic-force': 'Particle Orbits and the Hall Effect', 'wire-force': 'Magnetic Force on a Wire', 'faraday': "Faraday's Law",
    'string-density': 'Linear Density of a String', 'standing-waves': 'Standing Waves on a String', 'polarization': 'Polarization',
    # standalone activities
    'measurement-and-units': 'Units and Dimensions', 'estimation-and-evidence': 'Estimates and Uncertainty',
    # acoustics
    'resonators': 'Speed of Sound', 'timbre': 'Timbre and Harmonics', 'acoustic-levitation': 'Acoustic Levitation',
    'chladni': 'Chladni Plates', 'doppler': 'Doppler Effect and Shock Waves',
    # modern, Vol. 3 ch. 9 to 11
    'radioactive-decay': 'Measuring a Half Life', 'decay-chains': 'Parent and Daughter',
    'binding-energy': 'The Curve of Binding Energy',
    'gamma-spectroscopy': 'Calibrating a Detector', 'gamma-absorption': 'Absorbing Gamma Rays',
    'hubble-law': 'Measuring the Hubble Constant',
    'nuclear-reactions': 'Nuclear Reactions', 'critical-mass': 'Chain Reactions and Critical Size', 'fusion-gamow': 'Fusion and the Gamow Peak',
    'radiation-dose': 'Radiation Dose and Shielding',
    'particle-reactions': 'Conservation Laws for Particle Reactions', 'quark-model': 'Building Hadrons from Quarks', 'invariant-mass': 'Invariant Mass in a Bubble Chamber',
    'lattice-energy': 'Lattice Energy of Ionic Crystals', 'energy-bands': 'Energy Bands', 'semiconductor-doping': 'Carriers in Doped Silicon',
    'pn-junction': 'The pn Junction and LEDs',
    'junction-transistor': 'A Real Diode and the Junction Transistor',
    'cosmic-expansion': "Hubble's Law and the Age of the Universe", 'thermal-history': 'Thermal History of the Universe', 'big-bang-helium': 'Helium from the First Three Minutes',
    'molecular-bonds': 'Ionic and Covalent Bonds', 'hcl-spectrum': 'The Infrared Spectrum of HCl',
    # modern, Vol. 3 ch. 7 and 8
    'orbital-magnetic-moment': 'The Orbital Magnetic Moment', 'stern-gerlach': 'The Stern–Gerlach Experiment', 'zeeman-effect': 'The Zeeman Effect',
    'periodic-table': 'Shells and the Periodic Table', 'x-ray-spectra': "X-Ray Spectra and Moseley's Law",
    'meissner-effect': 'The Meissner Effect and the Critical Field',
    'exoplanets': 'Finding Exoplanets',
    # astro, 2026-10-24
    'seasons': 'Sunlight Through the Year', 'moon-phases': 'Phases and the Lunar Month', 'lagrange-points': 'Orbits Near the Lagrange Points',
    'rotation-curves': 'Weighing a Galaxy',
    'black-holes': 'Black Holes and Lensing', 'hr-diagram': 'Stellar Lives and Cluster Ages', 'nearest-brightest': 'The Nearest Stars and the Brightest Stars',
    'ubv-colors': 'Star Colors Through U, B and V Filters', 'main-sequence-fitting': 'Distances from the Main Sequence',
    'cepheid-photometry': 'Measuring a Cepheid on CCD Images', 'galactic-habitable-zone': 'The Galactic Habitable Zone', 'eclipsing-binary': 'Eclipsing Binary Stars', 'hydrogen-in-stars': 'Why Balmer Lines Peak in A Stars', 'white-dwarf-cooling': 'White Dwarf Cooling and Crystallization',
    'ising': 'The Ising Phase Transition',
    # Astro 2203 intro worksheets (COURSE_HANDOUTS), 2026-10-25
    'intro-seasons': 'Why We Have Seasons (Astro 2203)',
    'intro-sidereal-day': 'Sidereal Days, Solar Days and Sundials (Astro 2203)',
    'intro-constellations-3d': 'Constellations in 3D (Astro 2203)',
    'intro-solar-system-formation': 'Building a Solar System (Astro 2203)',
    'intro-craters': 'Craters and the Ages of the Moon\'s Surface (Astro 2203)',
    'intro-mars-ages': 'Dating the Surface of Mars (Astro 2203)',
    'intro-kepler': "Kepler's Laws from Mercury to Pluto (Astro 2203)",
    'intro-gravity': 'Gravity from the Ground to Orbit (Astro 2203)',
    'intro-scale': 'How Big Is the Solar System? (Astro 2203)',
    'intro-moon': 'Phases of the Moon and Eclipse Seasons (Astro 2203)', 'intro-precession': 'A Spinning Top and the Wandering Pole Star (Astro 2203)',
    'intro-stellarium-sky': 'Reading the Sky with Stellarium (Astro 2203)',
    'intro-celestial-sphere': 'The Sky and the Celestial Sphere (Astro 2203)',
    'intro-telescope': 'Building a Telescope (Astro 2203)', 'intro-resolution': 'Seeing Fine Detail (Astro 2203)',
    'intro-mirrors': 'Lenses, Mirrors and Color (Astro 2203)', 'intro-blackbody': 'Star Colors and Temperatures (Astro 2203)',
    'intro-spectra': 'Fingerprints of the Elements (Astro 2203)', 'intro-em-spectrum': 'The Electromagnetic Spectrum (Astro 2203)',
    'intro-planet-temperatures': 'Planet Temperatures and Habitable Zones (Astro 2203)',
    'intro-retrograde': 'Retrograde Motion and World Models (Astro 2203)',
    'intro-giant-planets': 'Giant Planets, Rings and Moons (Astro 2203)',
    'mp-photon-interactions': 'Photon Interactions in Matter',
    'mp-radiobiology': 'Radiobiology: Cell Survival and Fractionation',
    'intro-resonances': 'Orbital Resonances (Astro 2203)',
    'intro-inside-a-planet': 'Inside a Planet (Astro 2203)',
    'mp-kerma-equilibrium': 'Kerma, Dose and Charged Particle Equilibrium (Medical Physics)', 'mp-proton-calibration': 'Calibrating a Proton Beam: TRS-398 Step by Step (Medical Physics)',
    'mp-technetium-generator': 'A Technetium Generator (Medical Physics)', 'mp-x-ray-filtration': 'Filtration and Half Value Layer (Medical Physics)',
    'mp-shielding-barrier': 'Shielding a PET Uptake Room (Medical Physics)', 'mp-ultrasound-attenuation': 'Attenuation in Tissue (Medical Physics)',
    'mp-charged-particles': 'Stopping Power, Range and the Bragg Peak (Medical Physics)',
    'mp-bragg-peak': 'The Bragg Peak and the Spread Out Bragg Peak (Medical Physics)',
    'mp-proton-qa': 'Proton Therapy QA: Morning Checks, Drift and Patient Plans (Medical Physics)',
    'mp-shielding-rooms': 'Shielding Rooms: CT, Linac Vault and Proton Room (Medical Physics)',
    'color-vision': 'Cones, Mixing and Filters', 'galton-board': 'Chance, the Binomial and the Bell Curve', 'quantum-coin': 'Superposition and Measurement',
    'intro-exoplanets': 'Finding Planets Around Other Stars (Astro 2203)', 'intro-tides': 'Tides: Two Bulges, the Moon and the Sun (Astro 2203)',
    'intro-lagrange': 'Lagrange Points: Trojan Asteroids and Parking Spots in Space (Astro 2203)',
    'intro-parallax': 'Parallax: Measuring the Distance to a Star (Astro 2203)',
    'intro-atmospheres': 'Why Small, Hot Planets Lose Their Air (Astro 2203)',
    'mp-ct-range': 'CT Numbers and Proton Range: Calibration, Stopping Power and Margins (Medical Physics)',
    'quantum-tunneling': 'Quantum Tunneling', 'energy-levels': 'Energy Levels in a Box and a Spring', 'uncertainty-principle': 'The Uncertainty Principle', 'hydrogen-atom': 'The Hydrogen Atom', 'laser-threshold': 'Laser Threshold, Efficiency and Cavity Modes', 'spin-resonance': 'Spin Resonance',
}


def handout_courses(h):
    """The courses a handout was written for: the course titles named after the · on its second line ("Student laboratory ·
    Physics II and Modern Physics"), matched against the titles in the map, so a new course is picked up by its title; plus
    any course whose COURSE_HANDOUTS lists it."""
    if h not in _OWNERS:
        titles = {c['title']: c['id'] for c in json.loads(MAP.read_text())['courses']}
        p = ROOT / 'curriculum' / 'labs' / 'students' / f'{h}.md'
        lines = p.read_text().split('\n') if p.exists() else []
        line = lines[1].split('·', 1)[1] if len(lines) > 1 and '·' in lines[1] else ''
        out = set()
        for t in sorted(titles, key=len, reverse=True):   # longest first: Physics II before Physics I
            if re.search(re.escape(t) + r'(?!\w)', line):
                out.add(titles[t]); line = line.replace(t, '')
        _OWNERS[h] = out | {c for c, hs in COURSE_HANDOUTS.items() if h in hs}
    return _OWNERS[h]


_OWNERS = {}


def course_handouts(cid, demo):
    """As _course_handouts; a course that MERGED folds others into (or INCLUDED adds others to) lists each such course's
    worksheets on the card in turn (its own first), without repeats."""
    fold = {**MERGED, **INCLUDED}
    if '_course' in demo and cid in fold.values():
        out = []
        for c in [cid] + [s for s, t in fold.items() if t == cid]:
            if c in demo['_course']:
                out += [h for h in _course_handouts(c, demo) if h not in out]
        return out
    return _course_handouts(cid, demo)


def _course_handouts(cid, demo):
    """The demo's handouts (with a students/<h>.md) that course cid shows (Steve, 2026-10-25): the ones written for that course
    (handout_courses). A course with none of its own on this demo shows them all, except those written only for a course
    in COURSE_HANDOUTS (Astro 2203's intro worksheets); a course in COURSE_HANDOUTS never borrows another course's, unless it is
    in WARM_UPS (Medical Physics), which lists its own and then the rest as warm ups.
    The demo's Handout and worksheet menu shows the same list when the demo was opened from that course (demos/lib/nav.js)."""
    hs = [h for h in demo.get('handouts') or [] if (ROOT / 'curriculum' / 'labs' / 'students' / f'{h}.md').exists()]
    own = [h for h in hs if cid in handout_courses(h)]
    rest = [h for h in hs if h not in own and not (handout_courses(h) and handout_courses(h) <= set(COURSE_HANDOUTS))]
    if cid in WARM_UPS:   # its own first, then the rest as warm ups
        return own + rest
    return own if own or cid in COURSE_HANDOUTS else rest


def handout_label(h, i=None):
    return f'Worksheet{f" {i}" if i else ""}: {HANDOUT_TOPIC[h]}'


def course_label(cid, h, i=None):
    """handout_label, marked (warm up) where a WARM_UPS course borrows another course's worksheet."""
    return handout_label(h, i) + (' (warm up)' if cid in WARM_UPS and cid not in handout_courses(h) else '')


def unit_dates(cid, u):
    """A course week's class days and its required worksheet (unit 'dates', 'required'; Astro 2203, 2026-10-26), for the meta row."""
    out = f'<span>{esc(u["dates"])}</span>' if u.get('dates') else ''
    if u.get('required'):
        out += f'<span>Required: {esc(course_label(cid, u["required"]))}</span>'
    elif u.get('dates') and not u.get('review'):
        out += '<span>No required worksheet</span>'
    return out


def card(name, demo, unit_secs, cards, notes, cid=None, required=None):
    """required: the handout this unit requires (a course week, unit 'required'): listed first and marked Required."""
    c = cards[name]
    q = f'?course={cid}' if cid else ''   # the demo shows this course's worksheets and steps through this course (nav.js)
    secs = sorted([s for s in demo['sections'] if (s['vol'], s['sec']) in unit_secs], key=sec_key)
    chips = ''.join(f'<li><span class="sec">{s["vol"]}:{s["sec"]}</span> {esc(s["title"])}</li>' for s in secs)
    links = [f'<a class="go" href="demos/{name}.html{q}">Open demo</a>']
    hs = course_handouts(cid, demo)
    for i, h in sorted(enumerate(hs, 1), key=lambda x: x[1] != required):
        tag = '<strong class="req">Required</strong> ' if h == required else ''
        links.append(f'<a href="curriculum/labs/students/{h}.html">{tag}{esc(course_label(cid, h, i if len(hs) > 1 else None))}</a>')
    if name in notes:
        links.append(f'<a href="notes/{name}.html">Notes</a>')
    role = 'Lab' if demo['role'] == 'lab' else 'Demo'
    flag = DEMO_NOTE.get(demo['status'])
    return f'''      <li class="item">
        <a class="pic" href="demos/{name}.html{q}" tabindex="-1" aria-hidden="true">{thumb(name, '')}</a>
        <div class="body">
          <p class="kind"><span class="role role-{demo['role']}">{role}</span>{f'<span class="flag">{flag}</span>' if flag else ''}</p>
          <h3><a href="demos/{name}.html{q}">{esc(c['title'])}</a></h3>
          <p>{c['desc']}</p>{f'{chr(10)}          <ul class="secs" aria-label="Textbook sections">{chips}</ul>' if chips else ''}
          <p class="links">{' '.join(links)}</p>
        </div>
      </li>'''


def activity_card(activity, unit_secs):
    """Standalone worksheet or reading (GPT's renderer patch, 2026-10-22): no demo or thumbnail."""
    secs = sorted([s for s in activity['sections'] if (s['vol'], s['sec']) in unit_secs], key=sec_key)
    chips = ''.join(f'<li><span class="sec">{s["vol"]}:{s["sec"]}</span> {esc(s["title"])}</li>' for s in secs)
    href = activity['url'].removesuffix('.md') + '.html'
    role = 'Worksheet' if activity['kind'] == 'worksheet' else 'Reading and data activity'
    label = handout_label(activity['id']) if activity['kind'] == 'worksheet' else f'Reading: {HANDOUT_TOPIC[activity["id"]]}'
    return f'''      <li class="item">
        <div class="body" style="grid-column: 1 / -1">
          <p class="kind"><span class="role">{role}</span></p>
          <h3><a href="{esc(href)}">{esc(activity['title'])}</a></h3>
          <p>{esc(activity['description'])}</p>
          {f'<ul class="secs" aria-label="Textbook sections">{chips}</ul>' if chips else ''}
          <p class="links"><a class="go" href="{esc(href)}">{esc(label)}</a></p>
        </div>
      </li>'''


def course_page(course, m, cards, notes):
    secs = {(s['vol'], s['sec']): s for s in m['sections']}
    demos = {d['demo']: d for d in m['demos']}
    activities = {a['id']: a for a in m.get('activities', [])}
    cid = course['id']
    title, lede = course['title'], BLURB[cid][1]
    jump, units = [], []
    n_demo, n_activity = set(), set()
    # each demo gets one full card, in the unit that holds it (card_homes); other units link to it in one line
    first_unit = home = card_homes(course, m, cards)
    # a standalone worksheet already linked from a demo card on this page gets no second card of its own (units, 2026-10-24)
    on_cards = {h for u in course['units'] for x in u['sections'] for d in secs[(x['vol'], x['sec'])]['demos']
                if d in demos and cid in demos[d]['course'] and d in cards for h in demos[d].get('handouts', [])}
    sched = [u for u in course['units'] if u.get('schedule')]
    for u in [u for u in course['units'] if not u.get('schedule')]:
        us = [secs[(x['vol'], x['sec'])] for x in u['sections']]
        ukeys = {(s['vol'], s['sec']) for s in us}
        names = []
        for d in [d for s in sorted(us, key=sec_key) for d in s['demos']] + u.get('demos', []):   # unit.demos: demos with no textbook section
            if d not in names and d in demos and cid in demos[d]['course'] and d in cards:
                names.append(d)
        activity_names = list(dict.fromkeys(a for a in [a for s in sorted(us, key=sec_key) for a in s.get('activities', [])] + u.get('activities', [])
                                            if a in activities and cid in activities[a]['course']
                                            and not set(activities[a].get('handouts', [])) <= on_cards))
        n_demo.update(names)
        n_activity.update(activity_names)
        covered = sum(1 for s in us if s['status'] == 'usable')
        gaps = [s for s in sorted(us, key=sec_key) if s['status'] != 'usable']
        opt = u['requirement'] == 'optional'
        jump.append(f'<li><a href="#{u["id"]}"{" class=\"opt\"" if opt else ""}>{esc(u.get("short", u["title"]))}</a></li>')   # short: a shorter jump label
        fresh = [n for n in names if home[n] is u]
        seen = [n for n in names if home[n] is not u]
        items = [card(n, demos[n], ukeys, cards, notes, cid, u.get('required')) for n in fresh]
        items.extend(activity_card(activities[a], ukeys) for a in activity_names)
        if seen:
            def where(n):
                refs = ', '.join(f'{s["vol"]}:{s["sec"]}' for s in sorted([x for x in demos[n]['sections'] if (x['vol'], x['sec']) in ukeys], key=sec_key))
                return f'(card under <a href="#{first_unit[n]["id"]}">{esc(first_unit[n]["title"])}</a>{"; " + refs if refs else ""})'
            def sheets(n):   # unit.worksheets: a worksheet on a demo carded elsewhere that this unit is about, named on the line
                hs = [h for h in course_handouts(cid, demos[n]) if h in u.get('worksheets', [])]
                return ''.join(f' with <a href="curriculum/labs/students/{h}.html">{esc(course_label(cid, h))}</a>' for h in hs)
            links = ' · '.join(f'<a href="demos/{n}.html?course={cid}">{esc(cards[n]["title"])}</a>{sheets(n)} <span class="where">{where(n)}</span>' for n in seen)
            items.append(f'      <li class="also">Also used in this unit: {links}</li>')
        if u.get('review'):   # a test week: link back to the demos of the units it covers
            rev = [x for x in course['units'] if x['id'] in u['review']]
            rlinks = ' · '.join(f'<a href="#{x["id"]}">{esc(x["title"])}</a>' for x in rev)
            back = list(dict.fromkeys(n for x in rev for n in x.get('demos', []) if n in cards and n in demos and cid in demos[n]['course']))
            items.append(f'      <li class="also">Review the units {rlinks}. Their demos: '
                         + ' · '.join(f'<a href="demos/{n}.html?course={cid}">{esc(cards[n]["title"])}</a>' for n in back) + '</li>')
        grid = '\n'.join(items) if items else '      <li class="none">No activity for this unit yet.</li>'
        gap_html = ''
        if gaps:
            rows = ''.join(f'<li><span class="sec">{s["vol"]}:{s["sec"]}</span> {esc(s["title"])}'
                           f'<span class="st st-{s["status"]}">{"partly covered" if s["status"] == "needs-feature" else "no activity yet"}</span></li>' for s in gaps)
            gap_html = f'''
    <details class="gaps">
      <summary>Sections without a full activity <span class="n">{len(gaps)}</span></summary>
      <ul>{rows}</ul>
    </details>'''
        units.append(f'''  <section class="unit{" optional" if opt else ""}" id="{u['id']}" aria-labelledby="{u['id']}-h">
    {'<p class="optnote">Optional, after the required sequence</p>' if opt else ''}
    <h2 id="{u['id']}-h">{esc(u['title'])}</h2>
    <p class="meta">{f'<span>{chapters_of(us)}</span><span>{covered} of {len(us)} sections with an activity</span>' if us else ('<span>Test review</span>' if u.get('review') else '' if cid in NO_BOOK else '<span>Not in the textbook</span>')}{unit_dates(cid, u)}</p>{f'{chr(10)}    <p class="unote">{esc(u["note"])}</p>' if u.get('note') else ''}
    <ul class="list">
{grid}
    </ul>{gap_html}
  </section>''')
    if sched:
        jump.append(f'<li><a href="#{sched[0]["schedule"]}">{esc(TITLE[sched[0]["schedule"]])} schedule</a></li>')
        units.append(schedule_section(sched, demos, cards, first_unit))
    vols = sorted({x['vol'] for u in course['units'] for x in u['sections']})
    books = ' · '.join(f'<a href="{BOOK_URL[v]}">{BOOK[v]}</a>' for v in vols)
    weeks = [u for u in course['units'] if u.get('dates') and not u.get('review')]
    first = (f'<li><span><strong>{len(weeks)}</strong> weeks</span></li><li><span><strong>{sum(1 for u in course["units"] if u.get("review"))}</strong> tests</span></li>'
             if weeks else f'<li><span><strong>{len(course["units"]) - len(sched)}</strong> units</span></li>')
    facts = (first + f'<li><span><strong>{len(n_demo)}</strong> demos and labs</span></li>'
             + (f'<li><span>Free textbook: {books}</span></li>' if vols else ''))
    if cid in NO_BOOK:   # no textbook readings: count the worksheets on its cards (and any standalone ones)
        n_activity = n_activity | {h for d in n_demo for h in course_handouts(cid, demos[d])}
    if n_activity:
        facts += (f'<li><span><strong>{len(n_activity)}</strong> worksheet{"s" if len(n_activity) != 1 else ""}'
                  f'{"" if cid in NO_BOOK else " and readings"}</span></li>')
    how = ('Units follow the course schedule, one per topic, with a review unit before each test. A demo can appear in more than one unit: '
           'it has one card, in the first unit that uses it, and later units link to it.') if cid in NO_BOOK else None
    if cid == 'medical-physics':
        how = ('Units follow the radiation physics topics, from sources to imaging. A demo can appear in more than one unit: it has one card, in the first '
               'unit that uses it, and later units link to it. Cards marked Coming are demos being built for this module.')
    inc = [x for x, t in INCLUDED.items() if t == cid]
    if inc:
        how = ('Units follow the topics, and a demo from another course or module is listed where it fits. Each card lists this module’s '
               'worksheets, then the introductory ' + ' and '.join(f'<a href="{x}.html">{esc(TITLE[x])}</a>' for x in inc) + ' worksheets. '
               'Section numbers are volume:section in OpenStax University Physics.')
    if any(u.get('required') for u in course['units']):   # a course laid out by weeks (Astro 2203, 2026-10-26)
        how = ('Units follow the weeks of the course, with each test where it falls. Each week\u2019s required worksheet is marked Required and '
               'comes first; it is the one you hand in. The other demos and worksheets are supplementary. A demo can appear in more than one '
               'week: it has one card, in the week that needs it most, and other weeks link to it.')
    if cid in INCLUDED:
        t = next(x['title'] for x in m['courses'] if x['id'] == INCLUDED[cid])
        how = (how or ('Units follow the course schedule, one per topic, with a review unit before each test. A demo can appear in more than one unit: '
               'it has one card, in the first unit that uses it, and later units link to it.')) + (
               f' Every demo here is also on the <a href="{INCLUDED[cid]}.html">{esc(t)}</a> page, with the other astronomy demos.')
    if sched:
        how = (f'Units follow the topics, and a demo from another course or module is listed where it fits. At the bottom, the '
               f'{TITLE[sched[0]["schedule"]]} schedule lists the same demos topic by topic with that course\u2019s introductory worksheets. '
               'Section numbers are volume:section in OpenStax University Physics.')
    return page_shell(title, BLURB[cid][0], lede, facts, ''.join(jump), '\n'.join(units), (how or
                      ('Units follow the textbook chapters.' if cid in MODULES else 'Units follow the course schedule.')
                      + ' Section numbers are volume:section in OpenStax University Physics. A demo can appear in more than one unit. Sections with no activity yet are listed under each unit.')
                      + ' Looking for one subject? Every demo is also under <a href="index.html#topics">All demos by topic</a>.')


TITLE = {'astro-2203': 'Astro 2203'}   # a folded course's name on the page it was folded into


def schedule_section(sched, demos, cards, first_unit):
    """A folded course's schedule (MERGED): one row per topic with each demo, opened with ?course=<folded course> so it steps
    through the schedule and picks that course's worksheets (nav.js, COURSE_WS), and that course's worksheets on it."""
    src = sched[0]['schedule']
    rows = []
    for u in sched:
        if u.get('review'):
            rev = [x for x in sched if x['id'] in u['review']]
            body = '<p class="unote">Review the topics ' + ' · '.join(f'<a href="#{x["id"]}">{esc(x["title"])}</a>' for x in rev) + '.</p>'
        else:
            parts = []
            for n in dict.fromkeys(u.get('demos', [])):
                if n not in demos or n not in cards:
                    continue
                hs = _course_handouts(src, demos[n])
                ws = ''.join(f' <a class="ws" href="curriculum/labs/students/{h}.html">{esc(handout_label(h, i if len(hs) > 1 else None))}</a>'
                             for i, h in enumerate(hs, 1))
                where = (f' <span class="where">(card under <a href="#{first_unit[n]["id"]}">{esc(first_unit[n]["title"])}</a>)</span>'
                         if n in first_unit else '')
                parts.append(f'<li><a href="demos/{n}.html?course={src}">{esc(cards[n]["title"])}</a>{ws}{where}</li>')
            body = f'<ul>{"".join(parts)}</ul>' if parts else '<p class="unote">No activity for this topic yet.</p>'
        note = f'<p class="unote">{esc(u["note"])}</p>' if u.get('note') else ''
        rows.append(f'    <li class="topic" id="{u["id"]}"><h3>{esc(u["title"])}</h3>{note}{body}</li>')
    n_rev = sum(1 for u in sched if u.get('review'))
    return (f'  <section class="unit schedule" id="{src}" aria-labelledby="{src}-h">\n'
            f'    <h2 id="{src}-h">{esc(TITLE[src])} schedule</h2>\n'
            f'    <p class="meta"><span>{len(sched) - n_rev} topics</span><span>{n_rev} test reviews</span></p>\n'
            f'    <p class="unote">For the {esc(TITLE[src])} class: the topics in the order of the course, each with its demos and the introductory '
            f'worksheets written for it. These links open the demos with the {esc(TITLE[src])} worksheets.</p>\n'
            f'    <ol class="topics">\n' + '\n'.join(rows) + '\n    </ol>\n  </section>')


# Topics and the textbook (Steve, 2026-10-28): besides the courses, the home page lists every demo by subject (curriculum/topics.json,
# one page per topic in topics/) and every OpenStax section with the demos that serve it (openstax.html). A demo lives once, at
# demos/<name>.html; courses, topics and the textbook only point at it. Opened from a topic page, a demo steps through that topic
# (nav.js) and keeps every worksheet; course pages, ?course= links and Canvas are unchanged.
TOPICS = ROOT / 'curriculum' / 'topics.json'
# The courses listed on the home page (Steve, 2026-10-28: "in courses we only have Astro 2203 right now", the rest is covered by the
# topics; new courses get added here as he adds them). The other course pages stay online, unlisted, for Canvas and old links.
LISTED = ['astro-2203']
VOL_ABOUT = {1: 'Mechanics, waves and sound', 2: 'Thermodynamics, electricity and magnetism', 3: 'Optics and modern physics'}


def load_topics(cards):
    """curriculum/topics.json, checked: every catalog demo in at least one topic, every topic demo in the catalog, ids unique."""
    t = json.loads(TOPICS.read_text())
    ids = [x['id'] for f in t['families'] for x in f['topics']]
    placed = {d for f in t['families'] for x in f['topics'] for d in x['demos']}
    missing, unknown = [n for n in cards if n not in placed], sorted(placed - set(cards))
    if missing or unknown or len(ids) != len(set(ids)):
        raise SystemExit(f'curriculum/topics.json: in no topic {missing}; not in the catalog {unknown}; repeated ids {sorted({i for i in ids if ids.count(i) > 1})}')
    return t


def topics_of(t):
    """{demo: [(family, topic)]} in topics.json order."""
    out = {}
    for f in t['families']:
        for x in f['topics']:
            for d in x['demos']:
                out.setdefault(d, []).append((f, x))
    return out


def all_handouts(demo):
    return [h for h in demo.get('handouts') or [] if (ROOT / 'curriculum' / 'labs' / 'students' / f'{h}.md').exists()]


def topic_card(name, demo, topic, where, cards, notes, ctitle):
    """A demo card on a topic page: every worksheet (as the demo's own Handout and worksheet menu has them), the courses and
    modules that use it, and the other topics it is in. Its links open the demo with ?topic= so it steps through this topic."""
    c, q = cards[name], f'?topic={topic["id"]}'
    hs = all_handouts(demo)
    links = [f'<a class="go" href="demos/{name}.html{q}">Open demo</a>']
    links += [f'<a href="curriculum/labs/students/{h}.html">{esc(handout_label(h, i if len(hs) > 1 else None))}</a>' for i, h in enumerate(hs, 1)]
    if name in notes:
        links.append(f'<a href="notes/{name}.html">Notes</a>')
    used = [x for x in demo['course'] if x in ctitle]
    rows = []
    if used:
        rows.append('In ' + ' · '.join(f'<a href="{x}.html">{esc(ctitle[x])}</a>' for x in used))
    others = [x for _, x in where if x['id'] != topic['id']]
    if others:
        rows.append('Also under ' + ' · '.join(f'<a href="topics/{x["id"]}.html">{esc(x["title"])}</a>' for x in others))
    secs = sorted(demo['sections'], key=sec_key)
    if secs:
        rows.append('OpenStax ' + ' '.join(f'<span class="sec">{s["vol"]}:{s["sec"]}</span>' for s in secs[:6]) + (' …' if len(secs) > 6 else ''))
    role = 'Lab' if demo['role'] == 'lab' else 'Demo'
    flag = DEMO_NOTE.get(demo['status'])
    return f'''      <li class="item">
        <a class="pic" href="demos/{name}.html{q}" tabindex="-1" aria-hidden="true">{thumb(name, '')}</a>
        <div class="body">
          <p class="kind"><span class="role role-{demo['role']}">{role}</span>{f'<span class="flag">{flag}</span>' if flag else ''}</p>
          <h3><a href="demos/{name}.html{q}">{esc(c['title'])}</a></h3>
          <p>{c['desc']}</p>
          {''.join(f'<p class="used">{r}</p>' for r in rows)}
          <p class="links">{' '.join(links)}</p>
        </div>
      </li>'''


def topic_page(fam, topic, t, m, cards, notes):
    demos = {d['demo']: d for d in m['demos']}
    where = topics_of(t)
    ctitle = {c['id']: c['title'] for c in m['courses']}
    names = topic['demos']
    n_ws = len({h for n in names for h in all_handouts(demos[n])})
    secs = [s for n in names for s in demos[n]['sections']]
    facts = (f'<li><span><strong>{len(names)}</strong> demos</span></li><li><span><strong>{n_ws}</strong> worksheet{"s" if n_ws != 1 else ""}</span></li>'
             + (f'<li><span>OpenStax {chapters_of(secs)}</span></li>' if secs else ''))
    jump = ''.join(f'<li><a href="topics/{x["id"]}.html"{" aria-current=\"page\"" if x is topic else ""}>{esc(x["title"])}</a></li>' for x in fam['topics'])
    items = '\n'.join(topic_card(n, demos[n], topic, where[n], cards, notes, ctitle) for n in names)
    body = f'''  <section class="unit" aria-label="{esc(topic['title'])} demos">
    <ul class="list">
{items}
    </ul>
  </section>'''
    how = ('Every demo on this subject, from every course and module, with all of its worksheets. Opened from here, a demo steps through '
           'this topic with its previous and next links. The other topics in ' + esc(fam['title']) + ' are in the bar above; the '
           '<a href="index.html#topics">home page</a> lists them all.')
    return page_shell(topic['title'], fam['title'], topic['blurb'], facts, jump, body, how, base=True, back=('index.html#topics', 'Back to all topics'))


def openstax_page(m, cards, notes):
    demos = {d['demo']: d for d in m['demos']}
    activities = {a['id']: a for a in m.get('activities', [])}
    vols, jump = [], []
    for v in (1, 2, 3):
        ss = sorted((s for s in m['sections'] if s['vol'] == v), key=sec_key)
        chs = list(dict.fromkeys(s['chapter'] for s in ss))
        rows = []
        for ch in chs:
            cs = [s for s in ss if s['chapter'] == ch]
            lines, n_d = [], set()
            for s in cs:
                ds = [d for d in s['demos'] if d in cards and d in demos]
                n_d.update(ds)
                links = [f'<a href="demos/{d}.html">{esc(html.unescape(re.sub(r"<[^>]+>", "", cards[d]["title"])))}</a>' for d in ds]
                for a in s.get('activities', []):
                    if a in activities and activities[a].get('kind') and not set(activities[a].get('handouts', [])) & {h for d in ds for h in demos[d].get('handouts') or []}:
                        href = activities[a]['url'].removesuffix('.md') + '.html'
                        links.append(f'<a class="ws" href="{esc(href)}">{"Worksheet" if activities[a]["kind"] == "worksheet" else "Reading"}: {esc(activities[a]["title"])}</a>')
                st = '' if s['status'] == 'usable' else f'<span class="st st-{s["status"]}">{"partly covered" if s["status"] == "needs-feature" else "no activity yet"}</span>'
                sid = f's{v}-{s["sec"].replace(".", "-")}'
                lines.append(f'<li id="{sid}"><span class="sec">{v}:{s["sec"]}</span><span class="stitle">{esc(s["title"])}{st}</span>'
                             f'<span class="sdemos">{" · ".join(links)}</span></li>')
            rows.append(f'''    <details class="ch" id="v{v}-ch{ch}">
      <summary><span class="chn">Chapter {ch}</span> {esc(cs[0]['chapter_title'])} <span class="n">{len(cs)} sections · {len(n_d)} demo{"s" if len(n_d) != 1 else ""}</span></summary>
      <ol class="srows">{''.join(lines)}</ol>
    </details>''')
        jump.append(f'<li><a href="#vol-{v}">Volume {v}</a></li>')
        vols.append(f'''  <section class="unit" id="vol-{v}" aria-labelledby="vol-{v}-h">
    <h2 id="vol-{v}-h">Volume {v}: {VOL_ABOUT[v]}</h2>
    <p class="meta"><span>Ch. {chs[0]}–{chs[-1]}</span><span>{len(ss)} sections</span><span>{sum(1 for s in ss if s['status'] == 'usable')} with an activity</span><span><a href="{BOOK_URL[v]}">Free textbook: {BOOK[v]}</a></span></p>
{chr(10).join(rows)}
  </section>''')
    n = len(m['sections'])
    facts = (f'<li><span><strong>3</strong> volumes</span></li><li><span><strong>{n}</strong> sections</span></li>'
             f'<li><span><strong>{sum(1 for s in m["sections"] if s["status"] == "usable")}</strong> with an activity</span></li>')
    how = ('Every section of OpenStax University Physics with the demos that serve it, chapter by chapter. Open a chapter to see its sections; '
           'search for a section number such as 3.2 to jump straight to its demos. Section numbers match the book.')
    page = page_shell('OpenStax University Physics', 'By textbook section', 'The free OpenStax textbook, section by section, with the demos for each.',
                      facts, ''.join(jump), '\n'.join(vols), how)
    # a link to a chapter or section (#v1-ch3, #s1-3-2) opens its chapter
    return page.replace('<script src="search.js" defer></script>', '<script src="search.js" defer></script>\n' + OPEN_HASH, 1)


OPEN_HASH = ("<script>/* open the chapter a link points into (#v1-ch3, #s1-3-2) */ (function () { function go() { var e = location.hash.length > 1 && "
             "document.getElementById(decodeURIComponent(location.hash.slice(1))); if (!e) return; var d = e.closest('details'); if (d) { d.open = true; e.scrollIntoView(); } } "
             "addEventListener('hashchange', go); if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go(); })();</script>")

TOPIC_CSS = '''
/* topic and textbook pages (tools/courses.py) */
.jump a[aria-current] { background: var(--accent); border-color: var(--accent); color: var(--canvas); }
.item .used { font-size: 0.84rem; }
.item .used a { color: var(--accent); font-weight: 700; text-underline-offset: 3px; }
.item .used .sec { margin-right: 0; }
.ch { margin-top: 10px; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; }
.ch summary { cursor: pointer; padding: 10px 14px; font-weight: 700; display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 10px; min-height: 44px; }
.ch .chn { font-family: var(--font-mono); font-size: 0.78rem; font-weight: 600; color: var(--accent); }
.ch .n { margin-left: auto; font-family: var(--font-mono); font-size: 0.74rem; font-weight: 400; color: var(--muted); }
.srows { margin: 0; padding: 0 14px 12px; list-style: none; display: grid; gap: 0; }
.srows li { display: grid; grid-template-columns: 4.2em minmax(0, 16em) minmax(0, 1fr); gap: 2px 14px; padding: 7px 0; border-top: 1px solid var(--line); font-size: 0.9rem; align-items: baseline; }
.srows li:target { background: var(--canvas); }
.srows .stitle { display: flex; flex-wrap: wrap; gap: 2px 8px; align-items: baseline; }
.srows .st { margin-left: 0; padding-left: 0; }
.srows .sdemos a { color: var(--accent); font-weight: 700; text-underline-offset: 3px; }
.srows .sdemos a.ws { font-weight: 400; }
@media (max-width: 700px) {
  .srows li { grid-template-columns: 3.6em minmax(0, 1fr); }
  .srows .sdemos { grid-column: 2; }
  .ch .n { margin-left: 0; flex-basis: 100%; }
}
'''


def page_shell(title, sub, lede, facts, jump, body, how, base=False, back=('index.html', 'Back to the home page')):
    """base: the page sits one folder down (topics/<id>.html), so a <base> makes every link resolve from the site root; such a
    page has no #anchor links of its own, since they would resolve against the root too."""
    return f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">{chr(10) + '<base href="../">' if base else ''}
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<script src="demos/lib/theme.js"></script>
<title>{esc(title)} · Virtual Physics Demos</title>
<meta name="description" content="{esc(title)}: {esc(lede)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=JetBrains+Mono:wght@400;600&display=swap">
<style>
{shared_css()}
{COURSE_CSS}
{TOPIC_CSS}
{SEARCH_CSS}
</style>
</head>
<body>
<!-- Generated by tools/courses.py from curriculum/textbook-map.json. Edit the map or the script, not this file. -->
<header class="hero">
  <div class="wrap">
    <p class="eyebrow"><a href="index.html">Virtual Physics Demos</a> · <b>{esc(sub)}</b></p>
    <h1>{esc(title)}</h1>
    <p class="lede">{esc(lede)}</p>
    <ul class="facts">{facts}</ul>
  </div>
</header>
<nav class="tools" aria-label="Sections">
  <div class="wrap">{SEARCH_BOX}<ul class="jump">{jump}</ul></div>
</nav>
<main class="wrap">
  <p class="how">{how}</p>
{body}
  <p class="more"><a href="{back[0]}">{esc(back[1])}</a></p>
</main>
<footer>
  <div class="wrap">
    <p>© 2026 Steven Anderson. All rights reserved. Free to use for teaching and learning; see the <a href="LICENSE.html">terms of use</a>.</p>
    <p><a href="https://github.com/PhysicsSteven/VirtualDemos">Source on GitHub</a></p>
  </div>
</footer>
<script src="search.js" defer></script>
</body>
</html>
'''


def shared_css():
    """The token, layout, hero, toolbar and footer rules from index.html, so both look alike."""
    css = re.search(r'<style>\n(.*?)\n</style>', INDEX.read_text(), re.S).group(1)
    return css.split('\n/* course tiles (tools/courses.py) */')[0]


COURSE_CSS = '''
/* course pages */
.eyebrow a { color: var(--accent); font-weight: 600; text-underline-offset: 3px; }
.jump a.opt { border-style: dashed; }
.how { margin: 22px 0 0; max-width: 75ch; color: var(--muted); font-size: 0.92rem; }
.unit { padding-top: 34px; }
.unit h2 { display: flex; align-items: baseline; gap: 10px; margin: 0; font-size: 1.4rem; letter-spacing: -0.01em; }
.unit h2::after { content: ""; flex: 1; align-self: center; height: 1px; background: var(--line); }
.meta { display: flex; flex-wrap: wrap; gap: 4px 18px; margin: 4px 0 14px; font-family: var(--font-mono); font-size: 0.78rem; color: var(--muted); }
.meta:empty { display: none; }
.unote { margin: 4px 0 14px; max-width: 75ch; color: var(--muted); }
.unit.optional { margin-top: 30px; padding: 24px 18px 18px; border: 1px dashed var(--line); border-radius: 14px; }
.optnote { margin: 0 0 4px; font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--equi); }
.list { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 520px), 1fr)); gap: 14px; margin: 0; padding: 0; list-style: none; }
.item { display: grid; grid-template-columns: 1fr; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; overflow: hidden; }
.item .pic { display: block; border-bottom: 1px solid var(--line); }
.item .thumb { border-bottom: 0; }
.item .body { padding: 12px 14px 14px; gap: 5px; }
.item h3 { margin: 0; font-size: 1.08rem; line-height: 1.25; }
.item h3 a { text-decoration: none; }
.item h3 a:hover { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }
.item p { margin: 0; color: var(--muted); font-size: 0.9rem; text-wrap: pretty; }
.kind { display: flex; flex-wrap: wrap; gap: 6px; }
.role, .flag { font-family: var(--font-mono); font-size: 0.68rem; font-weight: 600; letter-spacing: 0.03em; text-transform: uppercase; border-radius: 5px; padding: 1px 6px; }
.role-lab { background: var(--accent); color: var(--canvas); }
.role-demo { border: 1px solid var(--line); color: var(--muted); }
.flag { border: 1px dashed var(--equi); color: var(--equi); text-transform: none; letter-spacing: 0; }
.secs { display: flex; flex-direction: column; gap: 2px; margin: 4px 0 0; padding: 0; list-style: none; font-size: 0.82rem; }
.sec { font-family: var(--font-mono); font-size: 0.74rem; color: var(--accent); margin-right: 4px; }
.links { display: flex; flex-wrap: wrap; gap: 6px 14px; margin-top: auto !important; padding-top: 8px; font-size: 0.88rem; }
.links a { color: var(--accent); font-weight: 700; text-underline-offset: 3px; min-height: 28px; display: inline-flex; align-items: center; }
.links a.go { color: var(--canvas); background: var(--accent); border-radius: 7px; padding: 4px 12px; text-decoration: none; min-height: 36px; }
.links a .req { margin-right: 6px; padding: 1px 7px; border: 1px solid currentColor; border-radius: 999px; font-size: 0.72rem; letter-spacing: 0.04em; text-transform: uppercase; }
.also { grid-column: 1 / -1; color: var(--muted); font-size: 0.92rem; padding: 4px 2px; }
.also a { font-weight: 700; }
.also .where, .also .where a { font-weight: 400; }
.item.coming { border-style: dashed; background: transparent; }
.item.coming h3 { color: var(--muted); }
.none { color: var(--muted); padding: 18px; border: 1px dashed var(--line); border-radius: 12px; }
.gaps { margin-top: 12px; font-size: 0.9rem; }
.gaps summary { cursor: pointer; color: var(--muted); font-weight: 700; min-height: 32px; display: flex; align-items: center; gap: 8px; }
.gaps ul { margin: 6px 0 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 380px), 1fr)); gap: 3px 22px; }
.gaps li { display: flex; align-items: baseline; gap: 4px; }
.st { margin-left: auto; padding-left: 10px; white-space: nowrap; font-family: var(--font-mono); font-size: 0.7rem; color: var(--muted); }
.st-needs-feature { color: var(--equi); }
.topics { margin: 0; padding: 0; list-style: none; display: grid; gap: 10px; }
.topic { background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 12px 14px; }
.topic h3 { margin: 0 0 2px; font-size: 1.02rem; }
.topic .unote { margin: 0 0 6px; font-size: 0.9rem; }
.topic ul { margin: 0; padding-left: 18px; display: grid; gap: 3px; font-size: 0.92rem; }
.topic a { color: var(--accent); font-weight: 700; text-underline-offset: 3px; }
.topic a.ws { margin-left: 8px; font-weight: 400; }
.topic .where, .topic .where a { color: var(--muted); font-weight: 400; font-size: 0.85rem; }
.more { margin: 40px 0 0; color: var(--muted); }
.more a { color: var(--accent); font-weight: 700; }
@media (max-width: 700px) {
  html { scroll-padding-top: 64px; }
  .jump { flex-basis: 100%; flex-wrap: nowrap; overflow-x: auto; scrollbar-width: none; margin: 0 -16px; padding: 0 16px; }
  .gaps li { flex-wrap: wrap; }
  .st { margin-left: 0; }
}
'''

TILE_CSS = '''
/* course tiles (tools/courses.py) */
.courses { padding-top: 30px; }
.courses h2 { margin: 0 0 14px; font-size: 1.35rem; letter-spacing: -0.01em; }
.ctiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr)); gap: 18px; margin: 0; padding: 0; list-style: none; }
.ctile { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto auto; height: 100%; text-decoration: none; color: inherit;
  background: var(--surface); border: 1px solid var(--line); border-radius: 14px; overflow: hidden; transition: border-color 0.15s, box-shadow 0.2s, translate 0.2s; }
.ctile .mosaic { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-bottom: 1px solid var(--line); background: var(--canvas); }
.ctile .mosaic { height: 92px; overflow: hidden; }
.ctile .mosaic .thumb { border-bottom: 0; height: 92px; aspect-ratio: auto; }
.ctile .mosaic .thumb img { height: 92px; }
.ctile .cbody { grid-column: 1 / -1; padding: 14px 18px 18px; }
.ctile h3 { margin: 0; font-size: 1.45rem; }
.ctile .sub { margin: 2px 0 6px; font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent); }
.ctile p { margin: 0; color: var(--muted); font-size: 0.93rem; }
.ctile:hover { border-color: var(--accent); box-shadow: var(--shadow); translate: 0 -2px; }
.ctile:hover h3 { color: var(--accent); }
.ctile:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
.allnote { margin: -6px 0 14px; color: var(--muted); font-size: 0.92rem; }
.fams { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 270px), 1fr)); gap: 18px; margin: 0; padding: 0; list-style: none; }
.fam { background: var(--surface); border: 1px solid var(--line); border-radius: 14px; overflow: hidden; scroll-margin-top: 20px; }
.fam .mosaic { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); height: 72px; overflow: hidden; border-bottom: 1px solid var(--line); background: var(--canvas); }
.fam .mosaic .thumb { border-bottom: 0; height: 72px; aspect-ratio: auto; }
.fam .mosaic .thumb img { height: 72px; }
.fam .fbody { padding: 12px 16px 16px; }
.fam h3 { margin: 0; font-size: 1.25rem; }
.fam .sub { margin: 2px 0 10px; font-family: var(--font-mono); font-size: 0.78rem; color: var(--accent); }
.tlinks { display: flex; flex-wrap: wrap; gap: 6px; margin: 0; padding: 0; list-style: none; }
.tlinks a { display: inline-flex; align-items: center; gap: 6px; min-height: 34px; padding: 4px 11px; border: 1px solid var(--line); border-radius: 999px;
  background: var(--canvas); color: var(--ink); font-size: 0.88rem; font-weight: 700; text-decoration: none; }
.tlinks a .n { font-family: var(--font-mono); font-size: 0.7rem; font-weight: 400; color: var(--muted); }
.tlinks a:hover { border-color: var(--accent); color: var(--accent); }
.tlinks a:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) { .ctile { transition: none; } .ctile:hover { translate: none; } }
'''


def tiles(m, cards, t):
    """The home page below the hero (Steve, 2026-10-28): search, Courses (LISTED), OpenStax University Physics by section and
    All demos by topic (topics.json families)."""
    out, m_demos = {}, {d['demo']: d for d in m['demos']}
    for c in m['courses']:
        names = []
        for u in c['units']:
            for x in u['sections']:
                s = next(s for s in m['sections'] if s['vol'] == x['vol'] and s['sec'] == x['sec'])
                for d in s['demos']:
                    if d not in names and d in cards and c['id'] in m_demos[d]['course']: names.append(d)
            for d in u.get('demos', []):
                if d not in names and d in cards: names.append(d)
        weeks = [u for u in c['units'] if u.get('dates') and not u.get('review')]   # a course laid out by weeks
        count = (f"{len(weeks)} weeks · {sum(1 for u in c['units'] if u.get('review'))} tests" if weeks
                 else f"{sum(1 for u in c['units'] if not u.get('schedule'))} units")
        out[c['id']] = tile(c['id'], c['title'], BLURB[c['id']][0], f"{count} · {len(names)} demos", BLURB[c['id']][1], names)
    listed = [out[c] for c in LISTED if c in out]
    fams = []
    for f in t['families']:
        n = len({d for x in f['topics'] for d in x['demos']})
        firsts = [x['demos'][0] for x in f['topics']] + [d for x in f['topics'] for d in x['demos']]   # each topic's first demo, then the rest
        pics = ''.join(thumb(d, '') for d in list(dict.fromkeys(firsts))[:4])
        links = ''.join(f'<li><a href="topics/{x["id"]}.html">{esc(x["title"])} <span class="n">{len(x["demos"])}</span></a></li>' for x in f['topics'])
        fams.append(f'''      <li class="fam" id="{f['id']}">
        <div class="mosaic" aria-hidden="true">{pics}</div>
        <div class="fbody"><h3>{esc(f['title'])}</h3><p class="sub">{len(f['topics'])} topic{"s" if len(f['topics']) != 1 else ""} · {n} demos</p>
        <ul class="tlinks">{links}</ul></div>
      </li>''')
    vols = []
    for v in (1, 2, 3):
        ss = [s for s in m['sections'] if s['vol'] == v]
        chs = sorted({s['chapter'] for s in ss})
        # four pictures spread through the volume: its demos in section order, each first met in this volume, evenly sampled
        seen = list(dict.fromkeys(d for s in sorted(ss, key=sec_key) for d in s['demos'] if d in cards))
        pick = [seen[round(i * (len(seen) - 1) / 3)] for i in range(4)] if len(seen) >= 4 else seen
        vols.append(tile(f'vol-{v}', f'Volume {v}', VOL_ABOUT[v], f'{len(chs)} chapters · {len(ss)} sections',
                         f'{BOOK[v]}, chapter by chapter, with the demos for each section.', pick, href=f'openstax.html#vol-{v}'))
    return f'''{TILE_START}
<section class="wrap find" aria-labelledby="find-h">
  <h2 id="find-h">Find a demo</h2>
  {SEARCH_BOX}
</section>
<section class="wrap courses" id="courses" aria-labelledby="courses-h">
  <h2 id="courses-h">Courses</h2>
  <ul class="ctiles">
{chr(10).join(listed)}
  </ul>
</section>
<section class="wrap courses" id="openstax" aria-labelledby="openstax-h">
  <h2 id="openstax-h">OpenStax University Physics by section</h2>
  <p class="allnote">Every section of the free textbook with the demos that serve it.</p>
  <ul class="ctiles">
{chr(10).join(vols)}
  </ul>
</section>
<section class="wrap courses" id="topics" aria-labelledby="topics-h">
  <h2 id="topics-h">All demos by topic</h2>
  <p class="allnote">Every demo on the site, sorted by subject. A demo can be under more than one topic.</p>
  <ul class="fams">
{chr(10).join(fams)}
  </ul>
</section>
<script src="search.js" defer></script>
{TILE_END}'''


def tile(cid, title, sub, count, lede, names, href=None):
    pics = ''.join(thumb(n, '') for n in names[:4])
    return (f'''      <li><a class="ctile" href="{href or cid + '.html'}">
        <div class="mosaic" aria-hidden="true">{pics}</div>
        <div class="cbody"><h3>{esc(title)}</h3><p class="sub">{esc(sub)} · {count}</p><p>{esc(lede)}</p></div>
      </a></li>''')


# Site search (Steve, 2026-10-25): one box on the home page and every course page that finds any demo or standalone
# worksheet by title, description, tags, worksheet label, course or OpenStax section ("3.2", "1:3.2" or a whole chapter, "13").
# The index is search.js, written from the catalog and the map; the box and its styles are here.
SEARCH_BOX = ('<div class="filter" role="search">'
              '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" stroke-width="1.8"/>'
              '<path d="M11 11l3.5 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
              '<input type="search" id="q" placeholder="Search all demos" aria-label="Search all demos by name, topic or textbook section" '
              'autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-controls="hits" aria-expanded="false"><kbd>/</kbd>'
              '<button type="button" class="clear" hidden aria-label="Clear search">✕</button>'
              '<div class="hits" id="hits" hidden><p class="hn" aria-live="polite"></p><ul></ul></div></div>')

SEARCH_CSS = '''
/* site search (tools/courses.py) */
.find { padding-top: 30px; }
.find h2 { margin: 0 0 10px; font-size: 1.35rem; letter-spacing: -0.01em; }
.find .filter { max-width: 620px; }
.find .filter input { padding-top: 11px; padding-bottom: 11px; font-size: 1rem; }
.hits { position: absolute; top: calc(100% + 6px); left: 0; z-index: 20; width: min(620px, calc(100vw - 32px)); max-height: min(70vh, 560px); overflow: auto;
  overscroll-behavior: contain; background: var(--surface); border: 1px solid var(--line); border-radius: 10px; box-shadow: var(--shadow); padding: 4px 6px 6px; }
.find .hits { width: 100%; }
.hits .hn { margin: 4px 8px 2px; font-family: var(--font-mono); font-size: 0.74rem; color: var(--muted); }
.hits ul { margin: 0; padding: 0; list-style: none; }
.hit { padding: 8px 8px 9px; border-radius: 7px; }
.hit + .hit { border-top: 1px solid var(--line); }
.hit:hover, .hit.on { background: var(--canvas); }
.hit .ht { font-weight: 700; color: var(--ink); text-decoration: none; }
.hit .ht:hover, .hit.on .ht { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }
.hit .hk { margin-left: 6px; font-family: var(--font-mono); font-size: 0.66rem; text-transform: uppercase; letter-spacing: 0.03em; color: var(--muted); }
.hit p { margin: 2px 0 0; font-size: 0.85rem; color: var(--muted); }
.hit .hd { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.hit .hm { display: flex; flex-wrap: wrap; gap: 2px 12px; font-size: 0.8rem; }
.hit .hm a { color: var(--accent); font-weight: 700; text-underline-offset: 3px; }
.hit .hm a.tp { color: var(--ink); font-weight: 400; }
.hit .hm .sec { margin: 0; }
@media (hover: none) { .filter kbd { display: none; } .filter input { font-size: 16px; } }
@media (max-width: 700px) {
  .tools .wrap { flex-wrap: wrap; }
  .tools .filter { flex: 1 1 100%; }
  html:has(.tools .filter) { scroll-padding-top: 108px; }
}
'''

SEARCH_JS = r'''/* Site search. Generated by tools/courses.py from curriculum/catalog.json and curriculum/textbook-map.json: edit the script, not this file. */
(() => {
  const ITEMS = __ITEMS__;
  const COURSE = __COURSES__;
  const TOPIC = __TOPICS__;
  const box = document.querySelector('.filter[role=search]');
  if (!box) return;
  const q = box.querySelector('input'), panel = box.querySelector('.hits'), list = panel.querySelector('ul'), count = panel.querySelector('.hn'), clear = box.querySelector('.clear');
  const norm = (s) => ' ' + s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[’'`]/g, '')
    .replace(/[^a-z0-9.:]+/g, ' ').split(' ').map((w) => w.replace(/^[.:]+|[.:]+$/g, '')).filter(Boolean).join(' ') + ' ';
  for (const it of ITEMS) {
    it.T = norm(it.t);
    it.O = norm([it.n.replace(/-/g, ' '), it.g.join(' '), it.d, it.c.map((c) => COURSE[c]).join(' '), it.p.map((p) => TOPIC[p]).join(' '), it.s.map((x) => x[1]).join(' '), it.w.map((x) => x[1]).join(' ')].join(' '));
  }
  /* a number is a textbook section ("3.2", "1:3.2") or a whole chapter ("13", "3:6"); a word scores most in the title, most of all at a word start */
  const score = (it, w) => {
    const m = /^(?:([123]):)?(\d+)(?:\.(\d+))?$/.exec(w);
    if (m) return it.s.some(([id]) => { const [v, sec] = id.split(':'); return (!m[1] || m[1] === v) && (m[3] ? sec === m[2] + '.' + m[3] : sec.split('.')[0] === m[2]); }) ? 6 : 0;
    if (w.length < 3) return it.T.includes(` ${w} `) ? 10 : it.O.includes(` ${w} `) ? 3 : 0;   /* "g", "k", "pn": whole words only */
    return it.T.includes(' ' + w) ? 10 : it.T.includes(w) ? 5 : it.O.includes(' ' + w) ? 3 : it.O.includes(w) ? 1 : 0;
  };
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  let hits = [], on = -1;
  const show = (open) => { panel.hidden = !open; q.setAttribute('aria-expanded', open); };
  const render = () => {
    const words = norm(q.value.replace(/§/g, ' ')).trim().split(' ').filter(Boolean);
    clear.hidden = !q.value;
    if (!words.length) { hits = []; show(false); return; }
    hits = ITEMS.map((it) => { let t = 0; for (const w of words) { const s = score(it, w); if (!s) return null; t += s; } return [t, it]; })
      .filter(Boolean).sort((a, b) => b[0] - a[0] || a[1].t.localeCompare(b[1].t)).map((x) => x[1]);
    on = -1;
    count.textContent = hits.length ? `${hits.length} match${hits.length === 1 ? '' : 'es'}` : 'Nothing matches. Try a topic, a word from the title or a section number such as 3.2.';
    list.innerHTML = hits.slice(0, 60).map((it) => `<li class="hit"><a class="ht" href="${it.h}">${esc(it.t)}</a><span class="hk">${it.k}</span>`
      + `<p class="hd">${esc(it.d)}</p><p class="hm">${it.c.map((c) => `<a href="${c}.html">${esc(COURSE[c])}</a>`).join('')}`
      + it.p.map((p) => `<a class="tp" href="topics/${p}.html">${esc(TOPIC[p])}</a>`).join('')
      + it.w.map(([h, l]) => `<a href="${h}">${esc(l)}</a>`).join('')
      + (it.s.length ? `<span>${it.s.slice(0, 4).map(([id]) => `<span class="sec">${id}</span>`).join(' ')}${it.s.length > 4 ? ' …' : ''}</span>` : '') + '</p></li>').join('');
    show(true);
  };
  const mark = (i) => {
    const li = list.children; if (!li.length) return;
    if (li[on]) li[on].classList.remove('on');
    on = (i + li.length) % li.length; li[on].classList.add('on'); li[on].scrollIntoView({ block: 'nearest' });
  };
  q.addEventListener('input', render);
  q.addEventListener('focus', () => { if (q.value) render(); });
  q.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { if (!panel.hidden) { e.preventDefault(); mark(on + (e.key === 'ArrowDown' ? 1 : -1)); } }
    else if (e.key === 'Enter' && hits.length) location.href = hits[Math.max(on, 0)].h;
    else if (e.key === 'Escape') { if (q.value) { q.value = ''; render(); } else q.blur(); }
  });
  clear.addEventListener('click', () => { q.value = ''; render(); q.focus(); });
  document.addEventListener('pointerdown', (e) => { if (!box.contains(e.target)) show(false); });
  box.addEventListener('focusout', (e) => { if (!box.contains(e.relatedTarget)) show(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey && !/^(input|textarea|select)$/i.test(document.activeElement.tagName)) { e.preventDefault(); q.focus(); }
  });
})();
'''


def search_js(m, cards, t):
    """Every catalog demo (with its sections, courses and worksheets from the map) and every standalone activity whose handout no demo carries."""
    plain = lambda s: html.unescape(re.sub(r'<[^>]+>', '', s))
    demos = {d['demo']: d for d in m['demos']}
    secs = {(s['vol'], s['sec']): s['title'] for s in m['sections']}
    exists = lambda h: (ROOT / 'curriculum' / 'labs' / 'students' / f'{h}.md').exists()
    on_demos, items = set(), []
    where = topics_of(t)
    for _, names in index_subjects():
        for n in names:
            d, c = demos.get(n, {}), cards[n]
            hs = [h for h in d.get('handouts') or [] if exists(h)]
            on_demos.update(hs)
            items.append({'n': n, 't': plain(c['title']), 'd': plain(c['desc']), 'g': c.get('tags', []), 'k': 'Lab' if d.get('role') == 'lab' else 'Demo',
                          'h': f'demos/{n}.html', 'c': [x for x in d.get('course', []) if x != 'later'], 'p': [x['id'] for _, x in where.get(n, [])],
                          's': [[f'{s["vol"]}:{s["sec"]}', secs.get((s['vol'], s['sec']), s.get('title', ''))] for s in sorted(d.get('sections', []), key=sec_key)],
                          'w': [[f'curriculum/labs/students/{h}.html', handout_label(h, i if len(hs) > 1 else None)] for i, h in enumerate(hs, 1)]})
    for a in m.get('activities', []):
        if set(a.get('handouts', [])) <= on_demos:
            continue
        reading = a['kind'] != 'worksheet'
        items.append({'n': a['id'], 't': a['title'], 'd': a['description'], 'g': [], 'k': 'Reading' if reading else 'Worksheet',
                      'h': a['url'].removesuffix('.md') + '.html', 'c': [x for x in a['course'] if x != 'later'], 'p': [],
                      's': [[f'{s["vol"]}:{s["sec"]}', secs.get((s['vol'], s['sec']), s.get('title', ''))] for s in sorted(a['sections'], key=sec_key)],
                      'w': [] if reading else [[a['url'].removesuffix('.md') + '.html', handout_label(a['id'])]]})
    courses = {c['id']: c['title'] for c in m['courses']}
    topics = {x['id']: x['title'] for f in t['families'] for x in f['topics']}
    dump = lambda x: json.dumps(x, ensure_ascii=False, separators=(',', ':'))
    return SEARCH_JS.replace('__ITEMS__', dump(items)).replace('__COURSES__', dump(courses)).replace('__TOPICS__', dump(topics))


# Course navigation (Steve, 2026-10-25): every demo gets a breadcrumb (Home, course, unit, demo) and previous and next links
# that step through its course in the order of the course page. demos/lib/vd.js loads demos/lib/nav.js, written here.
def unit_demos(course, u, m, cards):
    """The demos unit u of course uses, in order: its sections' demos, then unit.demos (demos with no textbook section)."""
    secs = {(s['vol'], s['sec']): s for s in m['sections']}
    demos = {d['demo']: d for d in m['demos']}
    us = sorted((secs[(x['vol'], x['sec'])] for x in u['sections']), key=sec_key)
    return list(dict.fromkeys(d for d in [d for s in us for d in s['demos']] + u.get('demos', [])
                              if d in demos and course['id'] in demos[d]['course'] + demos[d].get('_course', []) and d in cards))


def card_homes(course, m, cards):
    """{demo: unit} where each demo has its one full card: the unit whose `cards` names it (a unit can claim the card of a demo an
    earlier unit also uses, as Medical Physics shielding does for Nuclear Reactions, 2026-10-26), else the first unit that uses it."""
    units = [u for u in course['units'] if not u.get('schedule')]
    home = {}
    for u in units:
        for d in u.get('cards', []):
            home.setdefault(d, u)
    for u in units:
        for d in unit_demos(course, u, m, cards):
            home.setdefault(d, u)
    return home


def course_order(course, m, cards):
    """[(demo, unit)] in the order of the demo cards on the course page: each demo once, in the unit that holds its card."""
    home, out = card_homes(course, m, cards), []
    for u in course['units']:
        for d in unit_demos(course, u, m, cards):
            if home.get(d, u) is u and d not in {x for x, _ in out}:
                out.append((d, u))
    return out


def nav_js(m, cards, t):
    plain = lambda s: html.unescape(re.sub(r'<[^>]+>', '', s))
    courses = {}
    for c in m['courses']:
        order = course_order(c, m, cards)
        courses[c['id']] = {'t': c['title'], 'u': {u['id']: u['title'] for _, u in order},
                            'o': [[d, u['id']] for d, u in order]}
    for c in m.get('_merged_from', []):   # a folded course (MERGED): its schedule, on the page it was folded into
        p, order = MERGED[c['id']], course_order(c, m, cards)
        courses[c['id']] = {'t': TITLE[c['id']], 'p': p, 'u': {SCHEDULE_PREFIX + u['id']: u['title'] for _, u in order},
                            'o': [[d, SCHEDULE_PREFIX + u['id']] for d, u in order]}
    topics = {x['id']: {'t': x['title'], 'o': [d for d in x['demos'] if d in cards]} for f in t['families'] for x in f['topics']}
    titles = {n: plain(c['title']) for n, c in cards.items()}
    # each course's own worksheets on a demo whose Handout and worksheet menu (tools/handout_button.py, every handout) lists more
    sheets = {}
    for d in m['demos']:
        every = [h for h in d.get('handouts') or [] if (ROOT / 'curriculum' / 'labs' / 'students' / f'{h}.md').exists()]
        for c in dict.fromkeys(d['course'] + d.get('_course', [])):
            hs = course_handouts(c, d)
            mine = [[h, course_label(c, h, i if len(hs) > 1 else None)] for i, h in enumerate(hs, 1)]
            if c in courses and d['demo'] in titles and mine != [[h, handout_label(h, i if len(every) > 1 else None)] for i, h in enumerate(every, 1)]:
                sheets.setdefault(c, {})[d['demo']] = mine
    dump = lambda x: json.dumps(x, ensure_ascii=False, separators=(',', ':'))
    return (NAV_JS.replace('__COURSES__', dump(courses)).replace('__TOPICS__', dump(topics)).replace('__TITLES__', dump(titles))
            .replace('__SHEETS__', dump(sheets)))


def course_ws_js(m, cards):
    """demos/lib/vd.js with its COURSE_WS table: for each course in COURSE_HANDOUTS, the demos whose list for that course is one
    worksheet of the course's own, so ?course=<id> sends Export to worksheet (and How this works) there as ?ws=<slug> would."""
    t = {}
    for d in m['demos']:
        for c in dict.fromkeys(d['course'] + d.get('_course', [])):
            hs = course_handouts(c, d)
            folded = {s for s, x in {**MERGED, **INCLUDED}.items() if x == c}   # a course with others folded in (or included) answers their single worksheet too
            if (c in COURSE_HANDOUTS or folded) and d['demo'] in cards and len(hs) == 1 and ({c} | folded) & handout_courses(hs[0]) \
                    and (c in COURSE_HANDOUTS or hs[0] in set().union(*(COURSE_HANDOUTS.get(x, set()) for x in folded))):
                t.setdefault(c, {})[d['demo']] = hs[0]
    p = ROOT / 'demos' / 'lib' / 'vd.js'
    table = json.dumps(t, separators=(',', ':'), sort_keys=True)
    return re.sub(r'/\* COURSE_WS START \*/.*?/\* COURSE_WS END \*/', lambda _: f'/* COURSE_WS START */ var COURSE_WS = {table}; /* COURSE_WS END */',
                  p.read_text(), count=1)


NAV_JS = r'''/* Course navigation for the demos. Generated by tools/courses.py from curriculum/textbook-map.json and curriculum/catalog.json:
   edit the script, not this file. demos/lib/vd.js loads it on every demo that uses the shared library.
   Above the demo's title: Home › course › unit › demo, and the previous and next demo in that course, in course page order.
   A demo in several courses follows the course the student came from (the course page, or the course of the demo they stepped
   from, kept for the tab in sessionStorage vd-course); opened any other way it uses the first course in its list.
   ?course=<id> in the address (course page and Canvas links, previous and next) names the course outright.
   Topics (Steve, 2026-10-28): opened from a topic page (topics/<id>.html, or ?topic=<id>), the breadcrumb is Home › topic › demo
   and previous and next step through that topic; the Handout and worksheet menu keeps every worksheet. sessionStorage keeps
   a topic as t:<id>. A demo in no course (BZ, DNA) follows its first topic.
   A course folded into another (tools/courses.py MERGED; none since 2026-10-26) keeps its schedule order here, with p the
   page it now lives on. 
   Worksheets (Steve, 2026-10-25): opened from a course, the Handout and worksheet menu lists only that course's worksheets
   (SHEETS, the same list as the demo's card on the course page, so none for a demo that course uses without a worksheet);
   opened directly, it keeps every worksheet. The demo is the same. */
(() => {
  const COURSES = __COURSES__;
  const TOPICS = __TOPICS__;
  const TITLES = __TITLES__;
  const SHEETS = __SHEETS__;
  const run = () => {
  const bar = document.querySelector('header.bar > div:first-child'), h1 = bar && bar.querySelector('h1');
  const here = location.pathname.split('/').pop().replace(/\.html$/, '');
  if (!h1 || !TITLES[here] || bar.querySelector('.vd-crumbs')) return;
  /* where the student came from, as c:<course> or t:<topic>, first match wins */
  const mine = Object.keys(COURSES).filter((c) => COURSES[c].o.some((x) => x[0] === here)).map((c) => 'c:' + c)
    .concat(Object.keys(TOPICS).filter((t) => TOPICS[t].o.includes(here)).map((t) => 't:' + t));
  let from = null, kept = null;
  const P = new URLSearchParams(location.search), asked = P.get('course') && 'c:' + P.get('course'), askedT = P.get('topic') && 't:' + P.get('topic');
  try {
    const r = new URL(document.referrer), f = r.pathname.split('/').pop().replace(/\.html$/, '');
    if (r.origin === location.origin && f) from = (/\/topics\/[^/]*$/.test(r.pathname) ? 't:' : 'c:') + f;
  } catch (_) {}
  try { kept = sessionStorage.getItem('vd-course'); if (kept && !/^t:/.test(kept)) kept = 'c:' + kept; } catch (_) {}
  const pick = [asked, askedT, from, kept].find((c) => c && mine.includes(c)) || mine[0] || null;
  const chosen = pick && pick[0] === 'c' && [asked, from, kept].includes(pick) ? pick.slice(2) : null;
  const cid = pick && pick[0] === 'c' ? pick.slice(2) : null, tid = pick && pick[0] === 't' ? pick.slice(2) : null;
  if (pick) try { sessionStorage.setItem('vd-course', cid || pick); } catch (_) {}
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const crumbs = ['<li><a href="../index.html">Home</a></li>'];
  let step = '';
  if (tid) {
    const t = TOPICS[tid], i = t.o.indexOf(here);
    crumbs.push(`<li><a href="../topics/${tid}.html">${esc(t.t)}</a></li>`);
    const link = (j, rel, arrow) => {
      const d = t.o[j]; if (!d) return '';
      const n = esc(TITLES[d]), say = rel === 'prev' ? 'Previous' : 'Next';
      return `<a class="vd-${rel}" rel="${rel}" href="${d}.html?topic=${tid}" title="${say} in ${esc(t.t)}: ${n}" aria-label="${say} in ${esc(t.t)}: ${n}">`
        + (rel === 'prev' ? `<span aria-hidden="true">${arrow}</span> <span class="vd-t">${n}</span>` : `<span class="vd-t">${n}</span> <span aria-hidden="true">${arrow}</span>`) + '</a>';
    };
    step = link(i - 1, 'prev', '←') + link(i + 1, 'next', '→');
  }
  if (cid) {
    const c = COURSES[cid], i = c.o.findIndex((x) => x[0] === here), unit = c.o[i][1];
    crumbs.push(`<li><a href="../${c.p || cid}.html${c.p ? '#' + cid : ''}">${esc(c.t)}</a></li>`);
    if (unit) crumbs.push(`<li class="vd-unit"><a href="../${c.p || cid}.html#${unit}">${esc(c.u[unit])}</a></li>`);
    const link = (j, rel, arrow) => {
      const d = c.o[j] && c.o[j][0]; if (!d) return '';
      const t = esc(TITLES[d]), say = rel === 'prev' ? 'Previous' : 'Next';
      return `<a class="vd-${rel}" rel="${rel}" href="${d}.html?course=${cid}" title="${say} in ${esc(c.t)}: ${t}" aria-label="${say} in ${esc(c.t)}: ${t}">`
        + (rel === 'prev' ? `<span aria-hidden="true">${arrow}</span> <span class="vd-t">${t}</span>` : `<span class="vd-t">${t}</span> <span aria-hidden="true">${arrow}</span>`) + '</a>';
    };
    step = link(i - 1, 'prev', '←') + link(i + 1, 'next', '→');
  }
  crumbs.push(`<li class="vd-here" aria-current="page">${esc(TITLES[here])}</li>`);
  const nav = document.createElement('nav');
  nav.className = 'vd-crumbs'; nav.setAttribute('aria-label', 'Course navigation');
  nav.innerHTML = `<ol>${crumbs.join('')}</ol>` + (step ? `<span class="vd-step">${step}</span>` : '');
  bar.insertBefore(nav, bar.firstChild);
  const ws = chosen && SHEETS[chosen] && SHEETS[chosen][here], old = ws && document.querySelector('.rail .handout-menu, .rail a.handout');
  if (old && !ws.length) old.remove();   /* a course with no worksheet on this demo (its course page card has none either) */
  else if (old) {
    const icon = old.querySelector('svg'), svg = icon ? icon.outerHTML : '', url = (h) => `../curriculum/labs/students/${h}.html`;
    const box = document.createElement('div');
    box.innerHTML = ws.length === 1
      ? `<a class="handout" href="${url(ws[0][0])}" target="${ws[0][0]}-worksheet">${svg}Handout and worksheet</a>`
      : `<details class="handout-menu"><summary>${svg}Handouts and worksheets</summary><ul>${ws.map(([h, t]) => `<li><a href="${url(h)}" target="${h}-worksheet">${esc(t)}</a></li>`).join('')}</ul></details>`;
    old.replaceWith(box.firstChild);
  }
  window.dispatchEvent(new Event('resize'));   /* the header grew by a line: let the demo fit its picture again */
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
'''


# Friendly 404 (Steve, 2026-10-25): GitHub Pages serves 404.html at whatever address was missing, so its links resolve from
# a <base> set to the site root first. The search box is the site search, started with the words of the missing address.
NOTFOUND_CSS = '''
/* 404 page */
.lost { padding-top: 30px; padding-bottom: 10px; }
.lost h2 { margin: 0 0 10px; font-size: 1.35rem; letter-spacing: -0.01em; }
.lost .filter { max-width: 620px; }
.lost .filter input { padding-top: 11px; padding-bottom: 11px; font-size: 1rem; }
.lost .hits { width: 100%; }
.lost .clinks { display: flex; flex-wrap: wrap; gap: 8px; margin: 0; padding: 0; list-style: none; }
.lost .clinks a { display: inline-flex; align-items: center; min-height: 40px; padding: 6px 14px; border: 1px solid var(--line); border-radius: 8px;
  background: var(--surface); color: var(--accent); font-weight: 700; text-decoration: none; }
.lost .clinks a:hover { border-color: var(--accent); }
#where { margin: 12px 0 0; font-family: var(--font-mono); font-size: 0.85rem; color: var(--muted); overflow-wrap: anywhere; }
'''


def notfound_page(m):
    links = ''.join(f'<li><a href="{c["id"]}.html">{esc(c["title"])}</a></li>' for c in m['courses'] if c['id'] in LISTED)
    links += '<li><a href="index.html#topics">All demos by topic</a></li><li><a href="openstax.html">OpenStax by section</a></li>'
    return f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<script>(function () {{ var m = location.pathname.match(/^(.*?\\/VirtualDemos\\/)/i); document.write('<base href="' + (m ? m[1] : '/') + '">'); }})();</script>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<script src="demos/lib/theme.js"></script>
<meta name="robots" content="noindex">
<title>Page not found · Virtual Physics Demos</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=JetBrains+Mono:wght@400;600&display=swap">
<style>
{shared_css()}
{COURSE_CSS}
{SEARCH_CSS}
{NOTFOUND_CSS}
</style>
</head>
<body>
<!-- Generated by tools/courses.py. Edit the script, not this file. -->
<header class="hero">
  <div class="wrap">
    <p class="eyebrow"><a href="index.html">Virtual Physics Demos</a> · <b>Page not found</b></p>
    <h1>That page isn’t here</h1>
    <p class="lede">The link may be old, or a demo may have a new name. Search for it below, or start from a course or topic.</p>
    <p class="where" id="where"></p>
  </div>
</header>
<main class="wrap">
  <section class="lost" aria-labelledby="find-h">
    <h2 id="find-h">Find a demo</h2>
    {SEARCH_BOX}
  </section>
  <section class="lost" aria-labelledby="courses-h">
    <h2 id="courses-h">Courses</h2>
    <ul class="clinks">{links}</ul>
  </section>
  <p class="more"><a href="index.html">Go to the home page</a></p>
</main>
<footer>
  <div class="wrap">
    <p>© 2026 Steven Anderson. All rights reserved. Free to use for teaching and learning; see the <a href="LICENSE.html">terms of use</a>.</p>
    <p><a href="https://github.com/PhysicsSteven/VirtualDemos">Source on GitHub</a></p>
  </div>
</footer>
<script src="search.js"></script>
<script>
(function () {{
  /* the missing address, and its last part as words in the search box ("demos/projectile-drag.html" searches "projectile drag") */
  var path = decodeURIComponent(location.pathname), where = document.getElementById('where');
  where.textContent = 'Not found: ' + path;
  var words = path.split('/').filter(Boolean).pop() || '';
  words = words.replace(/\\.(html?|md|pdf)$/i, '').replace(/[-_.+]+/g, ' ').split(' ').filter(function (w) {{ return w.length > 3 || /\\d/.test(w); }}).join(' ');
  var q = document.getElementById('q');
  if (q && words && !/^virtualdemos$/i.test(words)) {{ q.value = words; q.dispatchEvent(new Event('input')); }}
}})();
</script>
</body>
</html>
'''


REDIRECT = '''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<!-- Generated by tools/courses.py: __SRC__ is now part of __DST__.html (MERGED). Old links land on its schedule. -->
<title>__TITLE__ · Virtual Physics Demos</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="__DST__.html#__SRC__">
<script>location.replace('__DST__.html' + (location.hash.length > 1 ? '#__PREFIX__' + location.hash.slice(1) : '#__SRC__'));</script>
<meta http-equiv="refresh" content="0; url=__DST__.html#__SRC__">
</head>
<body>
<p>__TITLE__ is now part of <a href="__DST__.html#__SRC__">__DTITLE__</a>.</p>
</body>
</html>
'''


MISC_REDIRECT = '''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<!-- Generated by tools/courses.py: Misc became the Chemistry and biology topic (2026-10-28). -->
<title>Misc · Virtual Physics Demos</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="topics/chemistry-biology.html">
<script>location.replace('topics/chemistry-biology.html');</script>
<meta http-equiv="refresh" content="0; url=topics/chemistry-biology.html">
</head>
<body>
<p>These demos are now under <a href="topics/chemistry-biology.html">Chemistry and biology</a>, with every other demo in <a href="index.html#topics">All demos by topic</a>.</p>
</body>
</html>
'''


ALIASES = ("<script>/* old unit addresses (tools/courses.py, unit aliases) */ (function () { var a = __MAP__, h = location.hash.slice(1); "
           "if (a[h]) document.addEventListener('DOMContentLoaded', function () { location.replace('#' + a[h]); }); })();</script>")
OLD_ANCHORS = ("<script>/* __SRC__ was folded into this page 2026-10-25: its old schedule links (#__SRC__, #__PREFIX__<topic>) open "
               "__SRC__.html (tools/courses.py INCLUDED) */ (function () { var h = location.hash.slice(1), p = '__PREFIX__'; "
               "if (h === '__SRC__' || h.indexOf(p) === 0) location.replace('__SRC__.html' + (h.indexOf(p) === 0 ? '#' + h.slice(p.length) : '')); })();</script>")


def build():
    m = load_map()
    cards = index_cards()
    notes = {p.stem for p in (ROOT / 'notes').glob('*.html')}
    out = {}
    for c in m['courses']:
        out[ROOT / f'{c["id"]}.html'] = course_page(c, m, cards, notes)
    for c in m['courses']:   # unit 'aliases': old unit ids (Astro 2203's topics before the weeks, 2026-10-26) still land on their unit
        al = {a: u['id'] for u in c['units'] for a in u.get('aliases', [])}
        if al:
            f = ROOT / f'{c["id"]}.html'
            out[f] = out[f].replace('<script src="demos/lib/theme.js"></script>\n', '<script src="demos/lib/theme.js"></script>\n'
                                    + ALIASES.replace('__MAP__', json.dumps(al, separators=(',', ':'))) + '\n', 1)
    for src, dst in INCLUDED.items():   # old links to the schedule on the folded page (2026-10-25 to 26) go to the course's own page
        f = ROOT / f'{dst}.html'
        out[f] = out[f].replace('<script src="demos/lib/theme.js"></script>\n', '<script src="demos/lib/theme.js"></script>\n'
                                + OLD_ANCHORS.replace('__SRC__', src).replace('__PREFIX__', SCHEDULE_PREFIX) + '\n', 1)
    for c in m.get('_merged_from', []):
        dst = MERGED[c['id']]
        out[ROOT / f'{c["id"]}.html'] = (REDIRECT.replace('__SRC__', c['id']).replace('__DST__', dst).replace('__PREFIX__', SCHEDULE_PREFIX)
                                          .replace('__TITLE__', esc(c['title'])).replace('__DTITLE__', esc(next(x['title'] for x in m['courses'] if x['id'] == dst))))
    t = load_topics(cards)
    for f in t['families']:
        for x in f['topics']:
            out[ROOT / 'topics' / f'{x["id"]}.html'] = topic_page(f, x, t, m, cards, notes)
    out[ROOT / 'openstax.html'] = openstax_page(m, cards, notes)
    # Misc became the Chemistry and biology topic (2026-10-28); old links land there
    out[ROOT / 'misc.html'] = MISC_REDIRECT
    idx = INDEX.read_text()
    block = tiles(m, cards, t)
    # the homepage is the hero, the course tiles and the footer
    idx = re.sub(re.escape(TILE_START) + '.*?<footer>', lambda _: block + '\n\n<footer>', idx, count=1, flags=re.S)
    idx = re.sub(r'\n<script>.*?</script>', '', idx, count=1, flags=re.S)
    n_all = sum(len(sub['demos']) for sub in CATALOG_DATA()['subjects'])
    n_topics = sum(len(f['topics']) for f in t['families'])
    idx = re.sub(r'<li><span><strong>\d+</strong> demos</span></li>\s*<li><span><strong>\d+</strong> (subjects|courses?)</span></li>(\s*<li><span><strong>\d+</strong> topics</span></li>)?',
                 f'<li><span><strong>{n_all}</strong> demos</span></li>\n      <li><span><strong>{len(LISTED)}</strong> course{"s" if len(LISTED) != 1 else ""}</span></li>'
                 f'\n      <li><span><strong>{n_topics}</strong> topics</span></li>', idx, count=1)
    idx = re.sub(r'\n/\* course tiles \(tools/courses.py\) \*/.*?\n</style>', '\n</style>', idx, count=1, flags=re.S)
    idx = idx.replace('\n</style>', TILE_CSS.rstrip() + '\n' + SEARCH_CSS.strip('\n') + '\n</style>', 1)
    out[INDEX] = idx
    out[ROOT / 'search.js'] = search_js(m, cards, t)
    out[ROOT / 'demos' / 'lib' / 'nav.js'] = nav_js(m, cards, t)
    out[ROOT / 'demos' / 'lib' / 'vd.js'] = course_ws_js(m, cards)
    out[ROOT / '404.html'] = notfound_page(m)
    return out


def main():
    out = build()
    stale = [p for p, t in out.items() if not p.exists() or p.read_text() != t]
    if '--check' in sys.argv:
        for p in stale: print('out of date:', p.relative_to(ROOT))
        sys.exit(1 if stale else 0)
    for p in stale:
        p.parent.mkdir(parents=True, exist_ok=True); p.write_text(out[p]); print('wrote', p.relative_to(ROOT))


if __name__ == '__main__':
    main()
