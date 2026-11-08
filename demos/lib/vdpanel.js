/* © 2026 Steven Anderson. All rights reserved. Not licensed for copying or reuse; terms at https://physicssteven.github.io/VirtualDemos/LICENSE.html */
/* VD.panel: the same control panel on every running demo (Steve, 2026-11-08: "consistent across every demo ... a centralized
   panel"). Link it after vd.js: <script src="lib/vdpanel.js"></script>, then call it once the demo has wired its buttons.

   It takes the strip of controls across the top of the picture (.stage-ctl or .viewbar) and lays it out the same way everywhere:
     [ Play/Pause | Step | Reset | Speed ... | clock ]   the demo's own controls ...   3D | Flat   Tools
   The time controls sit together in one framed group on the left; the demo's own switches (scene, camera, setups) follow;
   the 3D | Flat switch and the Tools button sit at the right end. Nothing is renamed and no handler changes: the demo's own
   buttons, selects and sliders are moved into place with their ids, labels and listeners, so keys, captures, Copy link and the
   Space and R shortcuts keep working. Play shows a play or pause mark from its own label (a label saying Pause or Stop means
   the run is going), so the demo keeps setting its text as before.

   VD.panel({
     play:  '#play'            the Play/Pause (or Launch, Release, Start) button; default #play
     reset: '#reset'           the demo's own run reset; default #reset when there is one
     speed: '#speed'           its speed control (a .seg of buttons, a select or a range), labeled Speed in the panel
     speedLabel: 'Speed'       the word before it
     speedOut: '#rateOut'      a readout of the speed to move along with it (a slider's own output moves by itself)
     step:  { run, label, title }   adds a Step button: pauses a running demo (presses Play) and calls run() once, for one
                               frame or one natural unit (a day, an orbit step). Or an array of these; { back: true } puts one
                               before Play (step back).
     steps: ['#back', '#fwd']  the demo's own step buttons, moved into the group (back ones before Play by { back } order:
                               an element whose label starts with − or ◀ goes before Play)
     also:  ['#pause']         more of the demo's run buttons that belong beside Play (a separate Pause after Launch)
     clock: '#tclock'          the time readout, shown at the end of the group
     end:   ['#viewSeg']       more controls for the right end (the .seg holding [data-dim] buttons goes there by itself)
     cls:   'sysonly'          classes for the group, so a demo that hides its time controls in some view by class still does
     span:  true               a strip floating in a corner of the picture (.viewbar) spans its top instead (only where the
                               demo draws nothing there: Kepler moves its clock under the strip)
     make:  '#stage'           no strip holds Play (it sat in the rail): make one floating at the top left of this picture
     bar:   '.stage-ctl'       the strip to use; default the .stage-ctl or .viewbar that holds Play
     group: '#ctlBox'          an element of the demo's to use as the group (a demo with a second set of time controls for
                               another mode calls VD.panel once per set; the demo still shows and hides each set)
   }) returns { bar, group, step: [buttons] }, or null when there is no strip.
   An older cached vd.js is fine: this file needs nothing from it. A demo calls it as `if (window.VD && VD.panel) VD.panel({...})`
   so a stale cached copy of this file (GitHub Pages caches about 10 minutes) leaves the old strip as it was. */
(function () {
  'use strict';
  var VD = window.VD = window.VD || {};
  var CSS = [
    '.vd-panel { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 8px; }',
    '.vd-panel > * { order: 1; }',
    '.vd-panel > .vd-tg { order: 0; display: inline-flex; flex-wrap: wrap; align-items: center; gap: 2px; padding: 2px;',
    '  border: 1px solid var(--line); border-radius: 9px; background: var(--surface, var(--canvas)); }',
    '.vd-panel > .vd-end { order: 20; margin-left: auto; display: inline-flex; flex-wrap: wrap; align-items: center; gap: 6px; }',
    '.vd-panel > #vdTools { order: 21; }',
    '.viewbar.vd-made { position: absolute; top: 10px; left: 10px; z-index: 3; max-width: calc(100% - 20px); }',
    '.vd-panel > .vd-tg.vd-empty, .vd-tg .vd-speed.vd-off { display: none; }',
    '.vd-panel:not(:has(> .vd-end)) > #vdTools { margin-left: auto; }',
    /* the buttons of the group: flat inside the frame, Play filled */
    '.vd-tg .btn { min-width: 0; margin: 0; border: 0; border-radius: 7px; background: none; color: var(--ink);',
    '  display: inline-flex; align-items: center; justify-content: center; gap: 7px; font-weight: 700; padding: 5px 10px; min-height: 32px; }',
    '.vd-tg .btn:hover:not(:disabled) { background: color-mix(in srgb, var(--ink) 10%, transparent); }',
    '.vd-tg .btn.vd-play { background: var(--ink); color: var(--canvas); min-width: 6.4em; }',
    /* a demo that marks Play to be pressed first (.attn) keeps that color */
    '.vd-tg .btn.vd-play.attn { background: var(--accent); color: var(--canvas); }',
    '.vd-tg .btn.vd-play:hover:not(:disabled) { background: color-mix(in srgb, var(--ink) 85%, var(--canvas)); }',
    '.vd-tg .btn::before { flex: none; }',
    /* marks drawn as masks so they look the same on every system (no emoji) */
    ".vd-tg .vd-play::before, .vd-tg .vd-step::before, .vd-tg .vd-reset::before { content: ''; width: 0.8em; height: 0.8em; background: currentColor;",
    "  -webkit-mask: var(--vd-ic) center / contain no-repeat; mask: var(--vd-ic) center / contain no-repeat; }",
    ".vd-tg .vd-play { --vd-ic: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M1.5 0.5 9.5 5 1.5 9.5z'/%3E%3C/svg%3E\"); }",
    ".vd-tg .vd-play[data-vd-run='on'] { --vd-ic: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M1.5 0.5h2.6v9H1.5zM5.9 0.5h2.6v9H5.9z'/%3E%3C/svg%3E\"); }",
    ".vd-tg .vd-step { --vd-ic: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M0.5 1 6.5 5 0.5 9zM7.3 1h2v8h-2z'/%3E%3C/svg%3E\"); }",
    ".vd-tg .vd-step.vd-back { --vd-ic: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M9.5 1 3.5 5 9.5 9zM0.7 1h2v8h-2z'/%3E%3C/svg%3E\"); }",
    ".vd-tg .vd-reset { --vd-ic: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10' fill='none' stroke='black' stroke-width='1.4' stroke-linecap='round'%3E%3Cpath d='M2.2 3.2A3.6 3.6 0 1 1 1.4 5.6'/%3E%3Cpath d='M1.6 0.9v2.6h2.6' stroke-linejoin='round'/%3E%3C/svg%3E\"); }",
    '.vd-tg .vd-sep { width: 1px; align-self: stretch; margin: 4px 4px; background: var(--line); }',
    '.vd-tg .vd-speed { display: inline-flex; flex-wrap: wrap; align-items: center; gap: 4px; min-width: 0; }',
    '.vd-panel > .vd-tg { max-width: 100%; box-sizing: border-box; }',
    '.vd-tg .vd-lab { font-size: 0.78rem; font-weight: 700; color: var(--muted); padding: 0 2px 0 4px; }',
    '.vd-panel > .vd-end > *, .vd-tg .seg { position: static; inset: auto; }',
    '.vd-tg .seg { border: 0; background: none; padding: 0; width: auto; display: inline-flex; flex-wrap: wrap; }',
    '.vd-tg .seg .seglabel { padding-left: 0; }',
    '.vd-tg select { font: inherit; font-size: 0.86rem; }',
    '.vd-tg input[type="range"] { width: 7.5em; }',
    '.vd-tg .vd-out { font-family: var(--font-mono, ui-monospace, monospace); font-size: 0.8rem; color: var(--muted); padding-right: 6px; white-space: nowrap; cursor: text; }',
    /* a strip that floated in a corner of the picture spans its top instead, still over the picture; only its controls take the pointer */
    '.viewbar.vd-panel.vd-span { left: 10px; right: 10px; justify-content: flex-start; pointer-events: none; }',
    '.viewbar.vd-panel.vd-span > * { pointer-events: auto; }',
    '.vd-tg .btn, .vd-tg .seg button { white-space: nowrap; }',
    '.vd-tg .vd-clock { font-family: var(--font-mono, ui-monospace, monospace); font-size: 0.84rem; color: var(--muted);',
    '  padding: 0 8px; white-space: nowrap; position: static; inset: auto; background: none; border: 0; }',
    ':root[data-projector="on"] .vd-tg .btn { min-height: 40px; }',
    '@media (max-width: 820px) { .vd-tg .btn { min-height: 36px; } .vd-panel > .vd-end { margin-left: 0; } }',
    '@media print { .vd-panel { display: none; } }'
  ].join('\n');

  function $(x) { return typeof x === 'string' ? document.querySelector(x) : (x || null); }
  function mk(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function style() {
    if (document.getElementById('vd-panel-css')) return;
    var s = mk('style'); s.id = 'vd-panel-css'; s.textContent = CSS; document.head.appendChild(s);
  }
  /* a Play button whose label says Pause, Stop or Hold is running */
  function running(b) { return /^\s*(pause|stop|hold|freeze)/i.test(b.textContent || ''); }
  function mark(b) { b.setAttribute('data-vd-run', running(b) ? 'on' : 'off'); }

  /* every button in the group takes the shared button look; a step button's own arrow glyphs give way to the panel's mark
     (its aria-label, title and id stay) */
  function adopt(b, step) {
    if (!b.classList.contains('btn')) b.classList.add('btn');
    if (step) for (var n = b.firstChild; n; n = n.nextSibling) if (n.nodeType === 3) n.nodeValue = n.nodeValue.replace(/^\s*[◀▶◂▸←→⏮⏭]\s*|\s*[◀▶◂▸←→⏮⏭]\s*$/g, '');
  }
  function panel(o) {
    o = o || {};
    var play = $(o.play || '#play');
    var bar = $(o.bar) || (play && play.closest('.stage-ctl, .viewbar'));
    /* a demo whose Play sat in the rail gets a strip floating at the top left of its picture (make: the picture) */
    var from = null;
    if (!bar && o.make && $(o.make) && play) {
      from = play.parentElement;
      bar = mk('div', 'viewbar vd-made'); $(o.make).insertBefore(bar, $(o.make).firstChild);
    }
    if (!bar) return null;
    /* called twice (a demo that sends a second load event): the first panel stands */
    if (play && play.parentElement && play.parentElement.classList.contains('vd-tg') && !o.group) return { bar: bar, group: play.parentElement, step: [] };
    style();
    bar.classList.add('vd-panel');
    if (o.span) bar.classList.add('vd-span');
    var g = $(o.group) || mk('div');
    g.classList.add('vd-tg');
    if (o.cls) String(o.cls).split(/\s+/).forEach(function (c) { if (c) g.classList.add(c); });
    g.setAttribute('role', 'group'); g.setAttribute('aria-label', 'Time controls');
    bar.insertBefore(g, bar.firstChild);
    var made = [];

    var stepEls = [].concat(o.steps || []).map($).filter(Boolean);
    var backs = stepEls.filter(function (e) { return /^\s*[−\-◀←]/.test(e.textContent || '') || e.hasAttribute('data-vd-back'); });
    var fwds = stepEls.filter(function (e) { return backs.indexOf(e) < 0; });
    /* step: true (or { ms }) runs the demo for a short burst of playback, a tenth of a second by default, and pauses again:
       the same Step on any demo whose clock only Play moves. A demo with a natural unit (a day, one frame of its own) passes run. */
    var specs = (o.step ? [].concat(o.step) : []).map(function (s) {
      if (s !== true && s.run) return s;
      var ms = (s && s.ms) || 100, busy = false;
      return { label: s.label, title: s.title || 'Run for a moment and pause again', pause: true, run: function () {
        if (!play || busy) return; busy = true; play.click();
        setTimeout(function () { busy = false; if (running(play)) play.click(); }, ms);
      } };
    });
    function stepBtn(s) {
      var b = mk('button', 'btn vd-step' + (s.back ? ' vd-back' : ''), s.label || (s.back ? 'Back' : 'Step'));
      b.type = 'button'; if (s.id) b.id = s.id;
      b.title = s.title || (s.back ? 'Step back' : 'Step forward one frame');
      b.addEventListener('click', function () {
        if (play && running(play) && s.pause !== false) play.click();
        s.run();
      });
      made.push(b); return b;
    }
    specs.filter(function (s) { return s.back; }).forEach(function (s) { g.appendChild(stepBtn(s)); });
    backs.forEach(function (e) { adopt(e, true); e.classList.add('vd-step', 'vd-back'); g.appendChild(e); });
    if (play) {
      adopt(play); play.classList.add('vd-play'); g.appendChild(play); mark(play);
      new MutationObserver(function () { mark(play); }).observe(play, { childList: true, characterData: true, subtree: true });
    }
    [].concat(o.also || []).map($).filter(Boolean).forEach(function (e) { adopt(e); g.appendChild(e); });
    fwds.forEach(function (e) { adopt(e, true); e.classList.add('vd-step'); g.appendChild(e); });
    specs.filter(function (s) { return !s.back; }).forEach(function (s) { g.appendChild(stepBtn(s)); });
    var reset = o.reset === false ? null : $(o.reset || '#reset');
    if (reset && reset.id !== 'vdReset' && (o.reset || !reset.closest('.rail, aside, header'))) { adopt(reset); reset.classList.add('vd-reset'); g.appendChild(reset); }
    var speed = $(o.speed);
    if (speed) {
      g.appendChild(mk('span', 'vd-sep'));
      var w = mk('span', 'vd-speed');
      var name = o.speedLabel || 'Speed', out = null;
      /* a speed control kept elsewhere (the rail) moves here, a slider with its readout, under its own label or aria-label;
         its old row is hidden when nothing else is left in it */
      if (!bar.contains(speed)) {
        if (!o.speedLabel && speed.labels && speed.labels[0]) name = speed.labels[0].textContent.trim();
        else if (!o.speedLabel && speed.getAttribute('aria-label')) name = speed.getAttribute('aria-label');
        out = $(o.speedOut) || (speed.id && speed.tagName === 'INPUT' ? document.querySelector('output[for~="' + speed.id + '"]') : null);
        var row = speed.parentElement;
        if (row && row !== document.body) row.setAttribute('data-vd-moved', '');
        w.classList.add('vd-range');
      }
      var lab = mk('span', 'vd-lab', name);
      /* a short word just before the control in the strip ("Speed") is its label: it moves with it */
      var prev = speed.previousElementSibling;
      var prevLab = prev && bar.contains(speed) && /^(SPAN|LABEL)$/.test(prev.tagName) && !prev.querySelector('input, select, button') &&
        (prev.textContent || '').trim().length < 24;
      if (prevLab && !o.speedLabel) { lab = prev; lab.classList.add('vd-lab'); }
      else if (speed.id && /^(INPUT|SELECT)$/.test(speed.tagName)) {
        /* the demo's own label in the strip moves with it, so its words stay */
        var own = speed.labels && speed.labels[0];
        if (own && bar.contains(own)) { lab = own; lab.classList.add('vd-lab'); }
        else { lab = mk('label', 'vd-lab', name); lab.htmlFor = speed.id; }
      }
      w.appendChild(lab); w.appendChild(speed); if (out) { out.classList.add('vd-out'); w.appendChild(out); }
      g.appendChild(w);
      if (row && !row.querySelector('input, select, button, textarea')) row.hidden = true;
    }
    var clock = $(o.clock);
    if (clock) { g.appendChild(mk('span', 'vd-sep')); clock.classList.add('vd-clock'); g.appendChild(clock); }

    if (from && !from.children.length) from.hidden = true;
    /* a demo that hides its Play (a view with no clock) hides the panel's Step with it, and an empty group hides its frame */
    function sync() {
      if (play) made.forEach(function (b) { if (b.hidden !== play.hidden) b.hidden = play.hidden; });
      [].forEach.call(g.querySelectorAll('.vd-speed'), function (w) {
        var c = w.querySelector('.seg, select, input, button'), off = !c || c.hidden || getComputedStyle(c).display === 'none';
        if (w.classList.contains('vd-off') !== off) w.classList.toggle('vd-off', off);
      });
      var any = [].some.call(g.children, function (c) { return !c.classList.contains('vd-sep') && !c.hidden && getComputedStyle(c).display !== 'none'; });
      g.classList.toggle('vd-empty', !any);
    }
    sync();
    new MutationObserver(sync).observe(g, { attributes: true, attributeFilter: ['hidden', 'style', 'class'], subtree: true });

    var ends = [].concat(o.end || []).map($).filter(Boolean);
    var dim = bar.querySelector('[data-dim]');
    if (dim) { var seg = dim.closest('.seg'); if (seg && ends.indexOf(seg) < 0) ends.unshift(seg); }
    if (ends.length) {
      var end = bar.querySelector(':scope > .vd-end') || mk('div', 'vd-end');
      ends.forEach(function (e) { end.appendChild(e); });
      bar.appendChild(end);
    }
    return { bar: bar, group: g, step: made };
  }
  VD.panel = panel;
})();
