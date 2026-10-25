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
