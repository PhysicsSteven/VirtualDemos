/* What's new: the popup on the home page (Steve, 2026-10-25).
   The first time someone opens the home page after an entry is added, a popup lists what changed since their last visit.
   It closes with ✕, Esc or a click outside, and remembers the newest entry seen in localStorage (vd-whats-new). Someone
   with nothing remembered (a first visit, or a cleared browser) sees only entries from the last 14 days. The "What's new"
   button at the top of the home page (and the footer link) opens it again with every entry.

   TO ADD AN ENTRY: put it at the TOP of the list below, newest first. Write for students and TAs in plain language: what
   they can now do and where, not how it was built. Leave out fixes nobody would notice and anything from the answer keys.
     id     short and unique, never reused (the date and a word or two)
     date   YYYY-MM-DD
     title  a few words
     text   one or two sentences
     link   (optional) { href: 'path from the site root', text: 'link words' } */
window.VD_WHATS_NEW = [
  { id: '2026-10-25-inside-a-planet', date: '2026-10-25', title: 'Inside a Planet',
    text: 'A new Astro 2203 demo with its own worksheet: weigh the iron cores of Mercury, Venus, Earth, the Moon and Mars from their mean densities and how they spin, watch a real model of a churning mantle break into plates on Earth or stay one stiff lid on Venus, and float continents on the mantle.', link: { href: 'demos/inside-a-planet.html', text: 'Open Inside a Planet' } },
  { id: '2026-10-25-craters', date: '2026-10-25', title: 'Craters, Cooling and Surface Ages',
    text: 'Drop an asteroid on the Moon, Mercury, Venus, Earth or Mars and watch the crater form, from a small bowl to a basin with a ring of peaks, sized by the scaling law impact scientists use. Count the craters on simulated patches of the Moon and Mars to date them with the crater clock, and cool a Moon, a Mars and an Earth side by side to see why small worlds go quiet first. Two new Astro 2203 worksheets: Craters and the Ages of the Moon\'s Surface, and Dating the Surface of Mars.', link: { href: 'demos/craters.html', text: 'Open the demo' } },
  { id: '2026-10-25-solar-system-formation', date: '2026-10-25', title: 'Building a Solar System',
    text: 'A new Astro 2203 demo and worksheet for Topic 5: watch a spinning cloud collapse into a disk, find the frost line where water ice can form, grow planets from 900 planetesimals and see which become giants, and melt an early planetesimal so its iron sinks to a core. Each stage has a 3D and a flat view, and a How this works video.', link: { href: 'demos/solar-system-formation.html', text: 'Open Building a Solar System' } },
  { id: '2026-10-25-laptop-controls', date: '2026-10-25', title: 'Every control on a laptop screen',
    text: 'On laptop sized windows (and in Projector on a short screen) some demos cut off the controls at the bottom of the picture, such as the particle filters, the Michelson fine moves and the Pendulum mass rack. The picture now grows to show them all, and the page scrolls to reach them.' },
  { id: '2026-10-25-resonances', date: '2026-10-25', title: 'Orbital Resonances',
    text: 'A new Astro 2203 demo with its own worksheet: watch Jupiter tug an asteroid at the same place orbit after orbit until its path crosses Mars\'s, beside the real counts of 881,333 asteroids that show the Kirkwood gaps. See why Pluto never meets Neptune though their orbits cross, and find Neptune from its pull on Uranus as Le Verrier did in 1846.', link: { href: 'demos/resonances.html', text: 'Open Orbital Resonances' } },
  { id: '2026-10-25-celestial-sphere', date: '2026-10-25', title: 'The Sky and the Celestial Sphere',
    text: 'A new astronomy demo with an Astro 2203 worksheet: the real night sky for any place and date from 3000 BC to AD 15000, seen from outside as a sphere around you and from the ground. See why the stars circle Polaris, why its height is your latitude, which stars never set, how the Sun and Moon move among the stars, the eclipses of 2024 and 2025, and how the pole star changes over thousands of years.', link: { href: 'demos/celestial-sphere.html', text: 'Open The Sky and the Celestial Sphere' } },
  { id: '2026-10-25-retrograde', date: '2026-10-25', title: 'Retrograde Motion and World Models',
    text: 'A new astronomy demo with an Astro 2203 worksheet: watch Earth pass Mars from above while Mars loops backward against the real stars, then run the same sky through Ptolemy\'s epicycles, Copernicus\'s circles and Kepler\'s ellipses, and test them with the phases of Venus as Galileo did. Jump to any opposition, stationary point or greatest elongation from 1800 to 2050.', link: { href: 'demos/retrograde-motion.html', text: 'Open Retrograde Motion' } },
  { id: '2026-10-25-planet-temperatures', date: '2026-10-25', title: 'Planet Temperatures and Habitable Zones',
    text: 'A new Astro 2203 demo with its own worksheet: move a planet closer to its star or farther away, change its albedo and greenhouse, and see its temperature from a balance of sunlight and heat radiation. Match the measured temperatures of Venus, Earth and Mars, find the habitable zone around the Sun, Proxima Centauri and TRAPPIST-1, and see why the Moon and Mercury kept no air.', link: { href: 'demos/planet-temperatures.html', text: 'Open Planet Temperatures' } },
  { id: '2026-10-25-how-this-works-p2-thermo', date: '2026-10-25', title: 'How this works videos: Physics II and Thermo',
    text: 'The Physics II and Thermo demos now have a How this works button under the handout button: a short video, under 30 seconds, of one sample reading with arrows and zooms on each step. A demo with several worksheets plays the video for the worksheet of the setup or view you are in.', link: { href: 'thermo.html', text: 'Open Thermo' } },
  { id: '2026-10-25-astro-2203-light', date: '2026-10-25', title: 'Astro 2203: telescopes and light',
    text: 'Six new worksheets for Astro 2203, Topic 4: build a telescope and measure its magnification and light gathering, the finest detail a mirror or radio dish can see, why mirrors beat lenses for color, star colors and temperatures, the fingerprints of the elements, and the electromagnetic spectrum. New in the demos: Build a Microscope or Telescope records readings and shows the light it gathers from a star, Optics Bench lenses can be crown or flint glass (with Lens in white light and Mirror in white light setups), and Spectra Explorer shows a continuous spectrum beside emission and absorption.', link: { href: 'astro-2203.html', text: 'Open Astro 2203' } },
  { id: '2026-10-25-astro-2203-sky-scale', date: '2026-10-25', title: 'Astro 2203: sky and scale worksheets',
    text: 'Four new worksheets for Astro 2203, Topics 1 and 2: the size of the solar system in au and light travel times, the phases of the Moon and eclipse seasons, why Earth\'s axis slowly circles the sky (with the gyroscope), and reading the sky in the free Stellarium planetarium. The planets in the Units, Scales and Estimates zoom now show their average distance from the Sun.', link: { href: 'astro-2203.html', text: 'Open Astro 2203' } },
  { id: '2026-10-25-astro-2203', date: '2026-10-25', title: 'Astro 2203 course page',
    text: 'A new course page follows Astro 2203, Solar System Astronomy, topic by topic, with worksheets written for it: Why We Have Seasons, Kepler\'s Laws from Mercury to Pluto, and Gravity from the Ground to Orbit. Kepler\'s Laws also has new orbits to try: the asteroids Vesta, Ceres and Apophis, and the dwarf planet Pluto.', link: { href: 'astro-2203.html', text: 'Open Astro 2203' } },
  { id: '2026-10-25-ripple-tank', date: '2026-10-25', title: 'Ripple Tank',
    text: 'A new demo with its own worksheet: a tank of water with a straight bar, one dipper or two. Draw your own walls and shallow plates, then watch waves pass through one or two slits, reflect, bend where the water gets shallower and focus. Measure the wavelength, the speed and the angles of the quiet lines, in a flat view or in 3D.', link: { href: 'demos/ripple-tank.html', text: 'Open Ripple Tank' } },
  { id: '2026-10-25-instrument-builder', date: '2026-10-25', title: 'Build a microscope or telescope',
    text: 'A new Physics II demo: put lenses and stops on an optical rail and look through them with an eye or a camera. It shows each image the lenses make, the magnification, the exit pupil and the field of view, and pictures what the eye sees with and without your instrument. Start from a magnifier, a microscope or three kinds of telescope, or from an empty rail.', link: { href: 'demos/instrument-builder.html', text: 'Open Build a Microscope or Telescope' } },
  { id: '2026-10-25-energy-phase', date: '2026-10-25', title: 'Energy bars and a phase plot',
    text: 'Projectile Range and Kepler\'s Laws have Energy bars in the sidebar: kinetic, potential, and for the ball the energy drag has taken, with a total that never changes. Springs has a Phase plot of velocity against position: an ellipse without damping, a spiral with it.', link: { href: 'demos/springs.html', text: 'Open Springs' } },
  { id: '2026-10-25-links-picture', date: '2026-10-25', title: 'Links keep what you built',
    text: 'Copy link now also keeps what you placed or drew in the picture: charges in Coulomb Sandbox and Gauss\'s Law, your circuit in Circuits, the vectors in Vectors, and a curve you drew in Potential Energy Curves.' },
  { id: '2026-10-25-how-this-works-p1-acoustics', date: '2026-10-25', title: 'How this works videos',
    text: 'Every Physics I and Acoustics demo now has a How this works button under the handout button: a short video, under 30 seconds, of one sample reading with arrows and zooms on each step. It adds to the worksheet procedure and does not replace it.', link: { href: 'physics-1.html', text: 'Open Physics I' } },
  { id: '2026-10-25-watch-molecules', date: '2026-10-25', title: 'Watch molecules share energy',
    text: 'Heat Capacities of Gases has a new Watch the molecules view: 125 simulated molecules start moving but not spinning, and collisions set them turning until motion and rotation reach the same temperature. It shows why a gas like nitrogen has C_V = 5/2 R while argon has 3/2 R.', link: { href: 'demos/gas-heat-capacity.html?setup=molNoSpin', text: 'Open Heat Capacities of Gases' } },
  { id: '2026-10-25-gas-walls', date: '2026-10-25', title: 'Walls with a temperature',
    text: 'In Gas in a Box each wall can now be insulated or held at a temperature of its own, so the gas cools or warms toward the walls, or carries heat from a hot wall to a cold one. Try the Cold walls and Hot wall, cold wall setups.', link: { href: 'demos/ideal-gas.html', text: 'Open Gas in a Box' } },
  { id: '2026-10-25-dark-default', date: '2026-10-25', title: 'Dark by default',
    text: 'The site now opens in Dark the first time you visit. Use the theme switch at the top of any page for Light, or Browser default to follow your device; your choice is remembered.' },
  { id: '2026-10-25-share-keys', date: '2026-10-25', title: 'Share a setup, fullscreen, shortcuts',
    text: 'Every demo has Copy link, which makes a link that opens the demo with your current settings, and a Fullscreen button. Keys: Space plays or pauses, R resets, P switches Projector, F switches fullscreen.' },
  { id: '2026-10-25-theme', date: '2026-10-25', title: 'Light or dark',
    text: 'Every page has a theme switch at the top: Light, Dark, or Browser default, which follows your device. The choice carries across the whole site, handouts and worksheets included; printed worksheets stay black on white.' },
  { id: '2026-10-25-course-nav', date: '2026-10-25', title: 'Step through a course',
    text: 'Every demo now shows its course and unit above the title, with links to the previous and next demo in that course, so you can work through a unit in order.' },
  { id: '2026-10-25-quadratic-fit', date: '2026-10-25', title: 'Quadratic fits on worksheet graphs',
    text: 'Worksheet graphs have a new Fit choice: a straight line or a quadratic, with the curve, the residuals and each coefficient with its uncertainty.' },
  { id: '2026-10-25-3d-four', date: '2026-10-25', title: 'Four demos in 3D',
    text: 'Static Equilibrium, Kepler’s Laws, Fluids and Potential Energy Curves now open in 3D, with a 3D | Flat switch.' },
  { id: '2026-10-25-tools', date: '2026-10-25', title: 'Stopwatch and ruler',
    text: 'Many demos have a Tools button with a stopwatch that runs on the demo’s own clock and a ruler on the picture’s own scale.' },
  { id: '2026-10-25-diffusion', date: '2026-10-25', title: 'Diffusion in Gas in a Box',
    text: 'Gas in a Box has a diffusion mode: two gases, a divider with a hole, and a worksheet on Graham’s law.', link: { href: 'demos/ideal-gas.html', text: 'Open Gas in a Box' } },
  { id: '2026-10-25-search', date: '2026-10-25', title: 'Search the whole site',
    text: 'The search box on the home page and every course page finds any demo or worksheet by name, topic or textbook section (try 3.2).' },
];

(() => {
  const ALL = window.VD_WHATS_NEW || [], KEY = 'vd-whats-new', FRESH_DAYS = 14, MAX = 6;
  if (!ALL.length) return;
  const get = () => { try { return localStorage.getItem(KEY); } catch (_) { return null; } };
  const put = () => { try { localStorage.setItem(KEY, ALL[0].id); } catch (_) {} };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const when = (d) => new Date(d + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const css = `
.vd-new { width: min(560px, calc(100vw - 32px)); max-height: min(80vh, 640px); padding: 0; border: 1px solid var(--line); border-radius: 14px;
  background: var(--surface); color: var(--ink); box-shadow: var(--shadow); }
.vd-new::backdrop { background: rgb(13 18 24 / 0.45); }
.vd-new .in { padding: 20px 22px 18px; }
.vd-new header { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
.vd-new h2 { margin: 0; font-size: 1.35rem; letter-spacing: -0.01em; }
.vd-new .x { flex: none; width: 40px; height: 40px; margin: -8px -10px 0 0; border: 0; border-radius: 8px; background: none; color: var(--muted); font: inherit; font-size: 1.25rem; cursor: pointer; }
.vd-new .x:hover, .vd-new .x:focus-visible { background: var(--canvas); color: var(--ink); }
.vd-new ul { margin: 10px 0 0; padding: 0; list-style: none; }
.vd-new li { padding: 10px 0; }
.vd-new li + li { border-top: 1px solid var(--line); }
.vd-new h3 { margin: 0; font-size: 1rem; }
.vd-new time { display: block; font-family: var(--font-mono); font-size: 0.72rem; color: var(--muted); }
.vd-new p { margin: 3px 0 0; color: var(--muted); font-size: 0.93rem; }
.vd-new p a { color: var(--accent); font-weight: 700; text-underline-offset: 3px; }
.vd-new .foot { margin: 6px 0 0; font-size: 0.82rem; }
@media (prefers-reduced-motion: no-preference) { .vd-new[open] { animation: vd-new-in 0.18s ease-out; } }
@keyframes vd-new-in { from { opacity: 0; translate: 0 8px; } }`;

  const open = (items) => {
    if (!document.getElementById('vd-new-css')) { const st = document.createElement('style'); st.id = 'vd-new-css'; st.textContent = css; document.head.appendChild(st); }
    const d = document.createElement('dialog');
    d.className = 'vd-new'; d.setAttribute('aria-labelledby', 'vd-new-h');
    d.innerHTML = `<div class="in"><header><h2 id="vd-new-h">What’s new</h2><button type="button" class="x" aria-label="Close">✕</button></header><ul>`
      + items.map((e) => `<li><time datetime="${esc(e.date)}">${esc(when(e.date))}</time><h3>${esc(e.title)}</h3><p>${esc(e.text)}`
        + (e.link ? ` <a href="${esc(e.link.href)}">${esc(e.link.text)}</a>` : '') + '</p></li>').join('')
      + '</ul><p class="foot">Open this list again any time with <b>What’s new</b> at the top of the home page.</p></div>';
    const close = () => d.close();
    d.querySelector('.x').addEventListener('click', close);
    d.addEventListener('click', (e) => { if (e.target === d) close(); });   /* a click on the backdrop lands on the dialog itself */
    d.addEventListener('close', () => d.remove());
    document.body.appendChild(d);
    d.showModal();
    put();
  };

  const seen = get(), at = ALL.findIndex((e) => e.id === seen);
  let items;
  if (at >= 0) items = ALL.slice(0, at);
  else { const cut = Date.now() - FRESH_DAYS * 864e5; items = ALL.filter((e) => new Date(e.date + 'T23:59:59').getTime() >= cut); }
  const go = () => {
    document.querySelectorAll('[data-whats-new]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); open(ALL); }));   /* the button and footer link show every entry */
    if (items.length) open(items.slice(0, MAX)); else put();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
})();
