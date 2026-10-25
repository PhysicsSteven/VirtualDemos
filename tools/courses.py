#!/usr/bin/env python3
"""Build the course pages (physics-1.html, physics-2.html, and the acoustics.html, thermo.html, modern.html and astro.html modules), misc.html and the course tiles on index.html
from curriculum/textbook-map.json.

    python3 tools/courses.py          # write the pages and update index.html
    python3 tools/courses.py --check  # exit 1 if any output is out of date

Titles and descriptions come from curriculum/catalog.json, the list of every demo on the
site; thumbnails are thumbs/<demo>-light.webp and -dark.webp. Demo URLs are unchanged: course pages only link to demos/<name>.html.
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
}
MODULES = {'acoustics', 'thermo', 'modern', 'astro'}   # modules follow the textbook chapters, not a course schedule
TILE_START, TILE_END = '<!-- COURSES START (tools/courses.py) -->', '<!-- COURSES END -->'
esc = html.escape


def index_cards():
    """demo name -> title, description (inline HTML allowed), from curriculum/catalog.json"""
    return {d['demo']: d for sub in CATALOG_DATA()['subjects'] for d in sub['demos']}


def index_subjects():
    """[(subject title, [demo names])] in catalog order"""
    return [(sub['title'], [d['demo'] for d in sub['demos']]) for sub in CATALOG_DATA()['subjects']]


def CATALOG_DATA():
    return json.loads(CATALOG.read_text())


MISC = {'id': 'misc', 'title': 'Misc.', 'sub': 'Everything else',
        'lede': 'Demos that are not part of a course or module: for now a chemical reaction that makes patterns and a molecule in 3D.'}


def misc_names(m):
    return [d['demo'] for d in m['demos'] if 'later' in d['course']]


def misc_page(m, cards, notes):
    keep = set(misc_names(m))
    groups = [('Misc', [n for _, names in index_subjects() for n in names if n in keep])]   # one heading (Steve, 2026-10-24)
    jump, secs = [], []
    for t, ns in groups:
        sid = re.sub(r'[^a-z]+', '-', t.lower()).strip('-')
        jump.append(f'<li><a href="#{sid}">{esc(t)} <span class="n">{len(ns)}</span></a></li>')
        items = []
        for n in ns:
            c = cards[n]
            links = [f'<a class="go" href="demos/{n}.html">Open demo</a>'] + ([f'<a href="notes/{n}.html">Notes</a>'] if n in notes else [])
            items.append(f'''      <li class="item">
        <a class="pic" href="demos/{n}.html" tabindex="-1" aria-hidden="true">{thumb(n, '')}</a>
        <div class="body">
          <h3><a href="demos/{n}.html">{esc(c['title'])}</a></h3>
          <p>{c['desc']}</p>
          <p class="links">{' '.join(links)}</p>
        </div>
      </li>''')
        secs.append(f'''  <section class="unit" id="{sid}" aria-labelledby="{sid}-h">
    <h2 id="{sid}-h">{esc(t)}</h2>
    <p class="meta"><span>{len(ns)} demo{'s' if len(ns) != 1 else ''}</span></p>
    <ul class="list">
{chr(10).join(items)}
    </ul>
  </section>''')
    return page_shell(MISC['title'], MISC['sub'], MISC['lede'],
                      f'<li><span><strong>{len(keep)}</strong> demos</span></li>',
                      ''.join(jump), '\n'.join(secs), 'Astronomy, e/m and the Ising model moved into the Astronomy, Modern Physics and Thermodynamics modules.')


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
    'fluids': 'Pressure, Buoyancy and Flow', 'viscometer': 'Viscosity', 'pipe-flow': 'Pipe Flow and Turbulence', 'cavendish': 'Measuring G', 'terminal-velocity': 'Terminal Velocity', 'springs': 'Spring Constant',
    'pendulum': 'Measuring g', 'rotational-dynamics': 'Rotational Inertia', 'gyroscope': 'Gyroscope Precession', 'circular-motion': 'Speed Limits on Curves and Loops', 'rocket': 'The Rocket Equation', 'induction': 'Charging by Induction', 'neutral-attraction': 'Attracting a Neutral Insulator',
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
    'black-holes': 'Black Holes and Lensing', 'hr-diagram': 'Stellar Lives and Cluster Ages', 'white-dwarf-cooling': 'White Dwarf Cooling and Crystallization',
    'ising': 'The Ising Phase Transition',
    'quantum-tunneling': 'Quantum Tunneling', 'energy-levels': 'Energy Levels in a Box and a Spring', 'uncertainty-principle': 'The Uncertainty Principle', 'hydrogen-atom': 'The Hydrogen Atom', 'laser-threshold': 'Laser Threshold, Efficiency and Cavity Modes', 'spin-resonance': 'Spin Resonance',
}


def handout_label(h, i=None):
    return f'Worksheet{f" {i}" if i else ""}: {HANDOUT_TOPIC[h]}'


def card(name, demo, unit_secs, cards, notes):
    c = cards[name]
    secs = sorted([s for s in demo['sections'] if (s['vol'], s['sec']) in unit_secs], key=sec_key)
    chips = ''.join(f'<li><span class="sec">{s["vol"]}:{s["sec"]}</span> {esc(s["title"])}</li>' for s in secs)
    links = [f'<a class="go" href="demos/{name}.html">Open demo</a>']
    hs = [h for h in demo.get('handouts') or [] if (ROOT / 'curriculum' / 'labs' / 'students' / f'{h}.md').exists()]
    for i, h in enumerate(hs, 1):
        links.append(f'<a href="curriculum/labs/students/{h}.html">{esc(handout_label(h, i if len(hs) > 1 else None))}</a>')
    if name in notes:
        links.append(f'<a href="notes/{name}.html">Notes</a>')
    role = 'Lab' if demo['role'] == 'lab' else 'Demo'
    flag = DEMO_NOTE.get(demo['status'])
    return f'''      <li class="item">
        <a class="pic" href="demos/{name}.html" tabindex="-1" aria-hidden="true">{thumb(name, '')}</a>
        <div class="body">
          <p class="kind"><span class="role role-{demo['role']}">{role}</span>{f'<span class="flag">{flag}</span>' if flag else ''}</p>
          <h3><a href="demos/{name}.html">{esc(c['title'])}</a></h3>
          <p>{c['desc']}</p>
          <ul class="secs" aria-label="Textbook sections">{chips}</ul>
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
          <ul class="secs" aria-label="Textbook sections">{chips}</ul>
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
    first_unit = {}   # each demo gets one full card, in the first unit that uses it; later units link to it in one line
    # a standalone worksheet already linked from a demo card on this page gets no second card of its own (units, 2026-10-24)
    on_cards = {h for u in course['units'] for x in u['sections'] for d in secs[(x['vol'], x['sec'])]['demos']
                if d in demos and cid in demos[d]['course'] and d in cards for h in demos[d].get('handouts', [])}
    for u in course['units']:
        us = [secs[(x['vol'], x['sec'])] for x in u['sections']]
        ukeys = {(s['vol'], s['sec']) for s in us}
        names = []
        for d in [d for s in sorted(us, key=sec_key) for d in s['demos']] + u.get('demos', []):   # unit.demos: demos with no textbook section
            if d not in names and d in demos and cid in demos[d]['course'] and d in cards:
                names.append(d)
        activity_names = list(dict.fromkeys(a for s in sorted(us, key=sec_key) for a in s.get('activities', [])
                                            if a in activities and cid in activities[a]['course']
                                            and not set(activities[a].get('handouts', [])) <= on_cards))
        n_demo.update(names)
        n_activity.update(activity_names)
        covered = sum(1 for s in us if s['status'] == 'usable')
        gaps = [s for s in sorted(us, key=sec_key) if s['status'] != 'usable']
        opt = u['requirement'] == 'optional'
        jump.append(f'<li><a href="#{u["id"]}"{" class=\"opt\"" if opt else ""}>{esc(u["title"])}</a></li>')
        fresh = [n for n in names if n not in first_unit]
        seen = [n for n in names if n in first_unit]
        for n in fresh: first_unit[n] = u
        items = [card(n, demos[n], ukeys, cards, notes) for n in fresh]
        items.extend(activity_card(activities[a], ukeys) for a in activity_names)
        if seen:
            links = ' · '.join(f'<a href="demos/{n}.html">{esc(cards[n]["title"])}</a> <span class="where">(card under <a href="#{first_unit[n]["id"]}">{esc(first_unit[n]["title"])}</a>; '
                               + ', '.join(f'{s["vol"]}:{s["sec"]}' for s in sorted([x for x in demos[n]['sections'] if (x['vol'], x['sec']) in ukeys], key=sec_key)) + ')</span>' for n in seen)
            items.append(f'      <li class="also">Also used in this unit: {links}</li>')
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
    <p class="meta">{f'<span>{chapters_of(us)}</span><span>{covered} of {len(us)} sections with an activity</span>' if us else '<span>Not in the textbook</span>'}</p>
    <ul class="list">
{grid}
    </ul>{gap_html}
  </section>''')
    vols = sorted({x['vol'] for u in course['units'] for x in u['sections']})
    books = ' · '.join(f'<a href="{BOOK_URL[v]}">{BOOK[v]}</a>' for v in vols)
    facts = (f'<li><span><strong>{len(course["units"])}</strong> units</span></li><li><span><strong>{len(n_demo)}</strong> demos and labs</span></li>'
             f'<li><span>Free textbook: {books}</span></li>')
    if n_activity:
        facts += f'<li><span><strong>{len(n_activity)}</strong> worksheets and readings</span></li>'
    return page_shell(title, BLURB[cid][0], lede, facts, ''.join(jump), '\n'.join(units),
                      ('Units follow the textbook chapters.' if cid in MODULES else 'Units follow the course schedule.')
                      + ' Section numbers are volume:section in OpenStax University Physics. A demo can appear in more than one unit. Sections with no activity yet are listed under each unit.')


def page_shell(title, sub, lede, facts, jump, body, how):
    return f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
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
  <p class="more"><a href="index.html">Back to all courses</a></p>
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
.also { grid-column: 1 / -1; color: var(--muted); font-size: 0.92rem; padding: 4px 2px; }
.also a { font-weight: 700; }
.also .where, .also .where a { font-weight: 400; }
.none { color: var(--muted); padding: 18px; border: 1px dashed var(--line); border-radius: 12px; }
.gaps { margin-top: 12px; font-size: 0.9rem; }
.gaps summary { cursor: pointer; color: var(--muted); font-weight: 700; min-height: 32px; display: flex; align-items: center; gap: 8px; }
.gaps ul { margin: 6px 0 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 380px), 1fr)); gap: 3px 22px; }
.gaps li { display: flex; align-items: baseline; gap: 4px; }
.st { margin-left: auto; padding-left: 10px; white-space: nowrap; font-family: var(--font-mono); font-size: 0.7rem; color: var(--muted); }
.st-needs-feature { color: var(--equi); }
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
.allnote { margin: 14px 0 0; color: var(--muted); font-size: 0.92rem; }
@media (prefers-reduced-motion: reduce) { .ctile { transition: none; } .ctile:hover { translate: none; } }
'''


def tiles(m, cards):
    out, m_demos = [], {d['demo']: d for d in m['demos']}
    for c in m['courses']:
        names = []
        for u in c['units']:
            for x in u['sections']:
                s = next(s for s in m['sections'] if s['vol'] == x['vol'] and s['sec'] == x['sec'])
                for d in s['demos']:
                    if d not in names and d in cards and c['id'] in m_demos[d]['course']: names.append(d)
            for d in u.get('demos', []):
                if d not in names and d in cards: names.append(d)
        out.append(tile(c['id'], c['title'], BLURB[c['id']][0], f"{len(c['units'])} units · {len(names)} demos", BLURB[c['id']][1], names))
    mn = misc_names(m)
    out.append(tile('misc', MISC['title'], MISC['sub'], f'{len(mn)} demos', MISC['lede'], [n for n in ['star-slice', 'hydrogen-orbitals', 'ising', 'black-holes'] if n in mn] or mn))
    return f'''{TILE_START}
<section class="wrap find" aria-labelledby="find-h">
  <h2 id="find-h">Find a demo</h2>
  {SEARCH_BOX}
</section>
<section class="wrap courses" aria-labelledby="courses-h">
  <h2 id="courses-h">Courses</h2>
  <ul class="ctiles">
{chr(10).join(out)}
  </ul>
</section>
<script src="search.js" defer></script>
{TILE_END}'''


def tile(cid, title, sub, count, lede, names):
    pics = ''.join(thumb(n, '') for n in names[:4])
    return (f'''      <li><a class="ctile" href="{cid}.html">
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
  const box = document.querySelector('.filter[role=search]');
  if (!box) return;
  const q = box.querySelector('input'), panel = box.querySelector('.hits'), list = panel.querySelector('ul'), count = panel.querySelector('.hn'), clear = box.querySelector('.clear');
  const norm = (s) => ' ' + s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[’'`]/g, '')
    .replace(/[^a-z0-9.:]+/g, ' ').split(' ').map((w) => w.replace(/^[.:]+|[.:]+$/g, '')).filter(Boolean).join(' ') + ' ';
  for (const it of ITEMS) {
    it.T = norm(it.t);
    it.O = norm([it.n.replace(/-/g, ' '), it.g.join(' '), it.d, it.c.map((c) => COURSE[c]).join(' '), it.s.map((x) => x[1]).join(' '), it.w.map((x) => x[1]).join(' ')].join(' '));
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


def search_js(m, cards):
    """Every catalog demo (with its sections, courses and worksheets from the map) and every standalone activity whose handout no demo carries."""
    plain = lambda s: html.unescape(re.sub(r'<[^>]+>', '', s))
    demos = {d['demo']: d for d in m['demos']}
    secs = {(s['vol'], s['sec']): s['title'] for s in m['sections']}
    exists = lambda h: (ROOT / 'curriculum' / 'labs' / 'students' / f'{h}.md').exists()
    on_demos, items = set(), []
    for _, names in index_subjects():
        for n in names:
            d, c = demos.get(n, {}), cards[n]
            hs = [h for h in d.get('handouts') or [] if exists(h)]
            on_demos.update(hs)
            items.append({'n': n, 't': plain(c['title']), 'd': plain(c['desc']), 'g': c.get('tags', []), 'k': 'Lab' if d.get('role') == 'lab' else 'Demo',
                          'h': f'demos/{n}.html', 'c': [('misc' if x == 'later' else x) for x in d.get('course', [])],
                          's': [[f'{s["vol"]}:{s["sec"]}', secs.get((s['vol'], s['sec']), s.get('title', ''))] for s in sorted(d.get('sections', []), key=sec_key)],
                          'w': [[f'curriculum/labs/students/{h}.html', handout_label(h, i if len(hs) > 1 else None)] for i, h in enumerate(hs, 1)]})
    for a in m.get('activities', []):
        if set(a.get('handouts', [])) <= on_demos:
            continue
        reading = a['kind'] != 'worksheet'
        items.append({'n': a['id'], 't': a['title'], 'd': a['description'], 'g': [], 'k': 'Reading' if reading else 'Worksheet',
                      'h': a['url'].removesuffix('.md') + '.html', 'c': a['course'],
                      's': [[f'{s["vol"]}:{s["sec"]}', secs.get((s['vol'], s['sec']), s.get('title', ''))] for s in sorted(a['sections'], key=sec_key)],
                      'w': [] if reading else [[a['url'].removesuffix('.md') + '.html', handout_label(a['id'])]]})
    courses = {c['id']: c['title'] for c in m['courses']} | {'misc': MISC['title'].rstrip('.')}
    dump = lambda x: json.dumps(x, ensure_ascii=False, separators=(',', ':'))
    return SEARCH_JS.replace('__ITEMS__', dump(items)).replace('__COURSES__', dump(courses))


# Course navigation (Steve, 2026-10-25): every demo gets a breadcrumb (Home, course, unit, demo) and previous and next links
# that step through its course in the order of the course page. demos/lib/vd.js loads demos/lib/nav.js, written here.
def course_order(course, m, cards):
    """[(demo, unit)] in the order of the demo cards on the course page: each demo once, in the first unit that uses it."""
    secs = {(s['vol'], s['sec']): s for s in m['sections']}
    demos = {d['demo']: d for d in m['demos']}
    out, seen = [], set()
    for u in course['units']:
        us = sorted((secs[(x['vol'], x['sec'])] for x in u['sections']), key=sec_key)
        for d in [d for s in us for d in s['demos']] + u.get('demos', []):
            if d not in seen and d in demos and course['id'] in demos[d]['course'] and d in cards:
                seen.add(d); out.append((d, u))
    return out


def nav_js(m, cards):
    plain = lambda s: html.unescape(re.sub(r'<[^>]+>', '', s))
    courses = {}
    for c in m['courses']:
        order = course_order(c, m, cards)
        courses[c['id']] = {'t': c['title'], 'u': {u['id']: u['title'] for _, u in order},
                            'o': [[d, u['id']] for d, u in order]}
    courses['misc'] = {'t': MISC['title'].rstrip('.'), 'u': {}, 'o': [[n, None] for _, names in index_subjects() for n in names if n in set(misc_names(m))]}
    titles = {n: plain(c['title']) for n, c in cards.items()}
    dump = lambda x: json.dumps(x, ensure_ascii=False, separators=(',', ':'))
    return NAV_JS.replace('__COURSES__', dump(courses)).replace('__TITLES__', dump(titles))


NAV_JS = r'''/* Course navigation for the demos. Generated by tools/courses.py from curriculum/textbook-map.json and curriculum/catalog.json:
   edit the script, not this file. demos/lib/vd.js loads it on every demo that uses the shared library.
   Above the demo's title: Home › course › unit › demo, and the previous and next demo in that course, in course page order.
   A demo in several courses follows the course the student came from (the course page, or the course of the demo they stepped
   from, kept for the tab in sessionStorage vd-course); opened any other way it uses the first course in its list. */
(() => {
  const COURSES = __COURSES__;
  const TITLES = __TITLES__;
  const run = () => {
  const bar = document.querySelector('header.bar > div:first-child'), h1 = bar && bar.querySelector('h1');
  const here = location.pathname.split('/').pop().replace(/\.html$/, '');
  if (!h1 || !TITLES[here] || bar.querySelector('.vd-crumbs')) return;
  const mine = Object.keys(COURSES).filter((c) => COURSES[c].o.some((x) => x[0] === here));
  let from = null, kept = null;
  try { const r = new URL(document.referrer); if (r.origin === location.origin) from = r.pathname.split('/').pop().replace(/\.html$/, ''); } catch (_) {}
  try { kept = sessionStorage.getItem('vd-course'); } catch (_) {}
  const cid = mine.includes(from) ? from : mine.includes(kept) ? kept : mine[0];
  if (cid) try { sessionStorage.setItem('vd-course', cid); } catch (_) {}
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const crumbs = ['<li><a href="../index.html">Home</a></li>'];
  let step = '';
  if (cid) {
    const c = COURSES[cid], i = c.o.findIndex((x) => x[0] === here), unit = c.o[i][1];
    crumbs.push(`<li><a href="../${cid}.html">${esc(c.t)}</a></li>`);
    if (unit) crumbs.push(`<li class="vd-unit"><a href="../${cid}.html#${unit}">${esc(c.u[unit])}</a></li>`);
    const link = (j, rel, arrow) => {
      const d = c.o[j] && c.o[j][0]; if (!d) return '';
      const t = esc(TITLES[d]), say = rel === 'prev' ? 'Previous' : 'Next';
      return `<a class="vd-${rel}" rel="${rel}" href="${d}.html" title="${say} in ${esc(c.t)}: ${t}" aria-label="${say} in ${esc(c.t)}: ${t}">`
        + (rel === 'prev' ? `<span aria-hidden="true">${arrow}</span> <span class="vd-t">${t}</span>` : `<span class="vd-t">${t}</span> <span aria-hidden="true">${arrow}</span>`) + '</a>';
    };
    step = link(i - 1, 'prev', '←') + link(i + 1, 'next', '→');
  }
  crumbs.push(`<li class="vd-here" aria-current="page">${esc(TITLES[here])}</li>`);
  const nav = document.createElement('nav');
  nav.className = 'vd-crumbs'; nav.setAttribute('aria-label', 'Course navigation');
  nav.innerHTML = `<ol>${crumbs.join('')}</ol>` + (step ? `<span class="vd-step">${step}</span>` : '');
  bar.insertBefore(nav, bar.firstChild);
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
    links = ''.join(f'<li><a href="{c["id"]}.html">{esc(c["title"])}</a></li>' for c in m['courses'])
    links += f'<li><a href="misc.html">{esc(MISC["title"].rstrip("."))}</a></li>'
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
    <p class="lede">The link may be old, or a demo may have a new name. Search for it below, or start from a course.</p>
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


def build():
    m = json.loads(MAP.read_text())
    cards = index_cards()
    notes = {p.stem for p in (ROOT / 'notes').glob('*.html')}
    out = {}
    for c in m['courses']:
        out[ROOT / f'{c["id"]}.html'] = course_page(c, m, cards, notes)
    out[ROOT / 'misc.html'] = misc_page(m, cards, notes)
    idx = INDEX.read_text()
    block = tiles(m, cards)
    # the homepage is the hero, the course tiles and the footer
    idx = re.sub(re.escape(TILE_START) + '.*?<footer>', lambda _: block + '\n\n<footer>', idx, count=1, flags=re.S)
    idx = re.sub(r'\n<script>.*?</script>', '', idx, count=1, flags=re.S)
    n_all = sum(len(sub['demos']) for sub in CATALOG_DATA()['subjects'])
    idx = re.sub(r'<li><span><strong>\d+</strong> demos</span></li>\s*<li><span><strong>\d+</strong> (subjects|courses)</span></li>',
                 f'<li><span><strong>{n_all}</strong> demos</span></li>\n      <li><span><strong>{len(m["courses"]) + 1}</strong> courses</span></li>', idx, count=1)
    idx = re.sub(r'\n/\* course tiles \(tools/courses.py\) \*/.*?\n</style>', '\n</style>', idx, count=1, flags=re.S)
    idx = idx.replace('\n</style>', TILE_CSS.rstrip() + '\n' + SEARCH_CSS.strip('\n') + '\n</style>', 1)
    out[INDEX] = idx
    out[ROOT / 'search.js'] = search_js(m, cards)
    out[ROOT / 'demos' / 'lib' / 'nav.js'] = nav_js(m, cards)
    out[ROOT / '404.html'] = notfound_page(m)
    return out


def main():
    out = build()
    stale = [p for p, t in out.items() if not p.exists() or p.read_text() != t]
    if '--check' in sys.argv:
        for p in stale: print('out of date:', p.relative_to(ROOT))
        sys.exit(1 if stale else 0)
    for p in stale:
        p.write_text(out[p]); print('wrote', p.relative_to(ROOT))


if __name__ == '__main__':
    main()
