/* vd-gear: shared canvas drawing for lab equipment (Acoustics visual pass, 2026-10-23). Pictures only: no physics here.
   Light comes from the top left. Every helper takes the 2D context first; sizes are in CSS pixels. */
window.VDGear = (function () {
  const dark = () => { const t = document.documentElement.getAttribute('data-theme');
    return t === 'dark' || (t !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches); };
  /* blends two #rrggbb colors; anything else (a token written as rgb() or a name) comes back unchanged */
  const mix = (a, b, t) => { if (!/^#[0-9a-f]{6}$/i.test(a) || !/^#[0-9a-f]{6}$/i.test(b)) return a; const p = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)); const A = p(a), B = p(b);
    return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join(''); };
  /* the room behind the apparatus: a wall that darkens a little towards the top and a soft floor glow */
  function backdrop(ctx, w, h, o = {}) {
    const d = dark(), g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, d ? '#0f151d' : '#eef1f5'); g.addColorStop(o.horizon || 0.7, d ? '#141b25' : '#f8f9fb'); g.addColorStop(1, d ? '#10161e' : '#eceff3');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    const r = ctx.createRadialGradient(w * 0.45, h * 0.35, 0, w * 0.45, h * 0.35, Math.max(w, h) * 0.75);
    r.addColorStop(0, d ? 'rgba(120,150,190,0.06)' : 'rgba(255,255,255,0.55)'); r.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = r; ctx.fillRect(0, 0, w, h);
  }
  /* a lab bench top seen slightly from above: top face, front edge with grain, and a shadow under the lip */
  function bench(ctx, x, y, w, depth, edge, o = {}) {
    const d = dark(), top = o.top || (d ? '#3a3229' : '#d9c3a0'), front = o.front || (d ? '#2a241d' : '#b99a6e');
    let g = ctx.createLinearGradient(0, y - depth, 0, y); g.addColorStop(0, mix(top, d ? '#000000' : '#ffffff', 0.12)); g.addColorStop(1, top);
    ctx.fillStyle = g; ctx.fillRect(x, y - depth, w, depth);
    g = ctx.createLinearGradient(0, y, 0, y + edge); g.addColorStop(0, front); g.addColorStop(1, mix(front, '#000000', 0.25));
    ctx.fillStyle = g; ctx.fillRect(x, y, w, edge);
    ctx.save(); ctx.globalAlpha = d ? 0.12 : 0.16; ctx.strokeStyle = mix(front, '#000000', 0.4); ctx.lineWidth = 1;
    for (let i = 1; i < 4; i++) { const yy = y + edge * i / 4; ctx.beginPath(); ctx.moveTo(x, yy); for (let xx = x; xx <= x + w; xx += 40) ctx.lineTo(xx, yy + Math.sin(xx * 0.013 + i * 1.7) * 1.2); ctx.stroke(); }
    ctx.restore();
    ctx.fillStyle = d ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.45)'; ctx.fillRect(x, y, w, 1);
    g = ctx.createLinearGradient(0, y + edge, 0, y + edge + 14); g.addColorStop(0, d ? 'rgba(0,0,0,0.45)' : 'rgba(30,25,15,0.18)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(x, y + edge, w, 14);
  }
  /* soft contact shadow: an ellipse under an object resting at y */
  function shadow(ctx, cx, y, rx, ry, a = 1) {
    const d = dark(); ctx.save(); ctx.translate(cx, y); ctx.scale(1, ry / rx);
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rx); g.addColorStop(0, `rgba(0,0,0,${(d ? 0.5 : 0.22) * a})`); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, rx, 0, 7); ctx.fill(); ctx.restore();
  }
  /* metal: a cylinder between two points (rod, post, axle), shaded across its width */
  function rod(ctx, x1, y1, x2, y2, r, o = {}) {
    const base = o.color || '#9aa4b0', L = Math.hypot(x2 - x1, y2 - y1) || 1, nx = -(y2 - y1) / L, ny = (x2 - x1) / L;
    const g = ctx.createLinearGradient(x1 - nx * r, y1 - ny * r, x1 + nx * r, y1 + ny * r);
    g.addColorStop(0, mix(base, '#000000', 0.35)); g.addColorStop(0.35, mix(base, '#ffffff', 0.45)); g.addColorStop(0.55, base); g.addColorStop(1, mix(base, '#000000', 0.45));
    ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(x1 + nx * r, y1 + ny * r); ctx.lineTo(x2 + nx * r, y2 + ny * r); ctx.lineTo(x2 - nx * r, y2 - ny * r); ctx.lineTo(x1 - nx * r, y1 - ny * r); ctx.closePath(); ctx.fill();
  }
  /* a box (instrument case, driver housing): vertical gradient, bevel highlight, dark rim */
  function box(ctx, x, y, w, h, o = {}) {
    const d = dark(), base = o.color || (d ? '#3a4552' : '#3f4a58'), r = o.r == null ? Math.min(8, w / 6, h / 6) : o.r;
    if (o.shadow !== false) shadow(ctx, x + w / 2, y + h, w * 0.6, Math.max(3, w * 0.06), 0.9);
    const g = ctx.createLinearGradient(0, y, 0, y + h); g.addColorStop(0, mix(base, '#ffffff', 0.16)); g.addColorStop(1, mix(base, '#000000', 0.22));
    ctx.fillStyle = g; ctx.beginPath(); ctx.roundRect(x, y, w, h, r); ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.35)'; ctx.lineWidth = 1; ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.14)'; ctx.beginPath(); ctx.roundRect(x + 1, y + 1, w - 2, h - 2, Math.max(0, r - 1)); ctx.stroke();
  }
  function screw(ctx, x, y, r) {
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r); g.addColorStop(0, '#e9edf2'); g.addColorStop(1, '#7c8794');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.45)'; ctx.lineWidth = Math.max(0.8, r * 0.3); ctx.beginPath(); ctx.moveTo(x - r * 0.6, y + r * 0.2); ctx.lineTo(x + r * 0.6, y - r * 0.2); ctx.stroke();
  }
  /* an LCD window with glowing digits */
  function lcd(ctx, x, y, w, h, text, o = {}) {
    ctx.fillStyle = '#081109'; ctx.beginPath(); ctx.roundRect(x, y, w, h, 3); ctx.fill();
    const g = ctx.createLinearGradient(0, y, 0, y + h); g.addColorStop(0, 'rgba(255,255,255,0.06)'); g.addColorStop(0.5, 'rgba(255,255,255,0)'); ctx.fillStyle = g; ctx.fill();
    ctx.save(); ctx.font = o.font || `600 ${Math.round(h * 0.62)}px "JetBrains Mono", ui-monospace, monospace`; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(142,240,176,0.55)'; ctx.shadowBlur = h * 0.35; ctx.fillStyle = o.color || '#8ef0b0'; ctx.fillText(text, x + w - h * 0.3, y + h / 2 + 1); ctx.restore();
  }
  /* a pulley wheel with spokes, on its axle */
  function pulley(ctx, x, y, r, o = {}) {
    const g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.35, r * 0.1, x, y, r); g.addColorStop(0, '#dfe4ea'); g.addColorStop(0.7, '#9ba5b1'); g.addColorStop(1, '#5c6674');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.35)'; ctx.lineWidth = Math.max(1, r * 0.12); ctx.beginPath(); ctx.arc(x, y, r * 0.82, 0, 7); ctx.stroke();
    ctx.lineWidth = Math.max(1, r * 0.08); for (let i = 0; i < 4; i++) { const a = (o.angle || 0) + i * Math.PI / 4; ctx.beginPath(); ctx.moveTo(x - Math.cos(a) * r * 0.7, y - Math.sin(a) * r * 0.7); ctx.lineTo(x + Math.cos(a) * r * 0.7, y + Math.sin(a) * r * 0.7); ctx.stroke(); }
    screw(ctx, x, y, r * 0.22);
  }
  /* a C clamp holding something to the bench edge at (x, y): jaw on the top, screw under the lip */
  function clamp(ctx, x, y, w, edge, o = {}) {
    const c = o.color || '#5b6e8c';
    box(ctx, x - w / 2, y - 6, w, 8, { color: c, r: 2, shadow: false });
    box(ctx, x + w / 2 - 6, y - 6, 6, edge + 16, { color: c, r: 2, shadow: false });
    box(ctx, x - w / 2, y + edge, w, 6, { color: c, r: 2, shadow: false });
    rod(ctx, x - w / 4, y + edge + 6, x - w / 4, y + edge + 18, 2.2, { color: '#b8c0ca' });
  }
  /* a slotted mass seen from the side: a flat disc with a bevel, brass or steel */
  function slotted(ctx, cx, y, w, t, o = {}) {
    const base = o.brass ? '#c9a24a' : '#a9b2bd', g = ctx.createLinearGradient(cx - w / 2, 0, cx + w / 2, 0);
    g.addColorStop(0, mix(base, '#000000', 0.35)); g.addColorStop(0.3, mix(base, '#ffffff', 0.35)); g.addColorStop(0.6, base); g.addColorStop(1, mix(base, '#000000', 0.4));
    ctx.fillStyle = g; ctx.beginPath(); ctx.roundRect(cx - w / 2, y, w, t, Math.min(2, t / 3)); ctx.fill();
    ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.fillRect(cx - w / 2, y + t - 0.8, w, 0.8);
  }
  /* a loudspeaker cabinet facing right (or left with o.flip): box, cone and dust cap */
  function speaker(ctx, x, y, w, h, o = {}) {
    box(ctx, x, y, w, h, { color: o.color || '#2e353f', r: Math.min(6, w / 8) });
    const r = Math.min(w, h) * 0.36, cx = x + w / 2, cy = y + h / 2;
    let g = ctx.createRadialGradient(cx - r * 0.2, cy - r * 0.25, r * 0.1, cx, cy, r);
    g.addColorStop(0, '#5b6370'); g.addColorStop(0.6, '#262b33'); g.addColorStop(1, '#14181d'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.fill();
    ctx.strokeStyle = '#4b535f'; ctx.lineWidth = Math.max(1, r * 0.08); ctx.beginPath(); ctx.arc(cx, cy, r * 0.95, 0, 7); ctx.stroke();
    g = ctx.createRadialGradient(cx - r * 0.1, cy - r * 0.12, 0, cx, cy, r * 0.3); g.addColorStop(0, '#8a929e'); g.addColorStop(1, '#2b3139'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, r * 0.3, 0, 7); ctx.fill();
  }
  /* quiet annotation: small, muted, never bold; o.c overrides the color */
  function label(ctx, s, x, y, o = {}) {
    const cs = getComputedStyle(document.documentElement), muted = o.c || cs.getPropertyValue('--muted').trim() || '#5a6575';
    ctx.save(); ctx.fillStyle = muted; ctx.globalAlpha = o.alpha == null ? 0.9 : o.alpha;
    ctx.font = `${o.w || 400} ${o.s || 10.5}px ${o.m ? cs.getPropertyValue('--font-mono') : cs.getPropertyValue('--font-ui')}`;
    ctx.textAlign = o.a || 'left'; ctx.textBaseline = o.bl || 'middle'; ctx.fillText(s, x, y); ctx.restore();
  }
  /* a small engraved name plate on an instrument */
  function plate(ctx, s, cx, cy, o = {}) {
    ctx.save(); ctx.font = `700 ${o.s || 8}px ${getComputedStyle(document.documentElement).getPropertyValue('--font-ui')}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillText(s.toUpperCase(), cx, cy + 0.8); ctx.fillStyle = o.c || 'rgba(230,236,243,0.78)'; ctx.fillText(s.toUpperCase(), cx, cy); ctx.restore();
  }
  /* a cable from (x1, y1) to (x2, y2), sagging */
  function cable(ctx, x1, y1, x2, y2, sag, o = {}) {
    ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = o.color || '#20262e'; ctx.lineWidth = o.w || 3;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.bezierCurveTo(x1 + (o.dx1 || 0), y1 + sag, x2 + (o.dx2 || 0), y2 + sag, x2, y2); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = Math.max(1, (o.w || 3) * 0.3); ctx.stroke(); ctx.restore();
  }
  /* ---- added for the site wide visual pass (2026-10-24): mechanics apparatus. Pictures only. ---- */
  /* a shaded sphere lit from the top left: diffuse body, soft terminator, a small specular glint and a rim of bounce light.
     o.glint (0 to 1) scales the highlight; o.matte drops it (wood, rubber). */
  function ball(ctx, x, y, r, color, o = {}) {
    if (r <= 0) return;
    const d = dark(), base = /^#[0-9a-f]{6}$/i.test(color) ? color : '#2b60b5';
    let g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.4, r * 0.05, x, y, r * 1.02);
    g.addColorStop(0, mix(base, '#ffffff', o.matte ? 0.25 : 0.42)); g.addColorStop(0.45, base); g.addColorStop(0.9, mix(base, '#000000', 0.45)); g.addColorStop(1, mix(base, '#000000', 0.55));
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
    /* bounce light from the bench below */
    g = ctx.createRadialGradient(x + r * 0.2, y + r * 0.75, 0, x + r * 0.2, y + r * 0.75, r * 0.6);
    g.addColorStop(0, d ? 'rgba(255,220,180,0.10)' : 'rgba(255,230,200,0.22)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
    if (!o.matte) { const k = o.glint == null ? 1 : o.glint;
      g = ctx.createRadialGradient(x - r * 0.38, y - r * 0.42, 0, x - r * 0.38, y - r * 0.42, r * 0.32);
      g.addColorStop(0, `rgba(255,255,255,${0.85 * k})`); g.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); }
  }
  /* a painted lab wall from y0 to y1: light falls from the top left, a faint tile or block grid (o.tile = [w, h] px, 0 for none) */
  function wall(ctx, x, y0, w, y1, o = {}) {
    const d = dark(), h = y1 - y0, c0 = o.color || (d ? '#151c25' : '#eef1f5');
    let g = ctx.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, mix(c0, '#000000', d ? 0.25 : 0.05)); g.addColorStop(1, mix(c0, d ? '#2a3442' : '#ffffff', 0.35));
    ctx.fillStyle = g; ctx.fillRect(x, y0, w, h);
    g = ctx.createRadialGradient(x + w * 0.3, y0 + h * 0.15, 0, x + w * 0.3, y0 + h * 0.15, Math.max(w, h) * 0.9);
    g.addColorStop(0, d ? 'rgba(140,170,210,0.07)' : 'rgba(255,255,255,0.6)'); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(x, y0, w, h);
    const t = o.tile === undefined ? [64, 32] : o.tile;
    if (t && t[0] > 4) { ctx.save(); ctx.beginPath(); ctx.rect(x, y0, w, h); ctx.clip(); ctx.lineWidth = 1;
      ctx.strokeStyle = o.line || (d ? 'rgba(255,255,255,0.025)' : 'rgba(40,60,90,0.055)');
      for (let r = 0, yy = y1 - t[1]; yy > y0 - t[1]; yy -= t[1], r++) { ctx.beginPath(); ctx.moveTo(x, Math.round(yy) + 0.5); ctx.lineTo(x + w, Math.round(yy) + 0.5);
        for (let xx = x + (r % 2) * t[0] / 2; xx < x + w; xx += t[0]) { ctx.moveTo(Math.round(xx) + 0.5, yy); ctx.lineTo(Math.round(xx) + 0.5, yy + t[1]); } ctx.stroke(); }
      ctx.restore(); }
    /* the room darkens just above the bench (ambient occlusion) */
    g = ctx.createLinearGradient(0, y1 - Math.min(40, h * 0.2), 0, y1); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, d ? 'rgba(0,0,0,0.35)' : 'rgba(30,40,55,0.08)');
    ctx.fillStyle = g; ctx.fillRect(x, y1 - Math.min(40, h * 0.2), w, Math.min(40, h * 0.2));
  }
  /* a retort stand: a cast base resting on the bench at y (center x), and an upright rod up to top. o.side: which way the base extends (1 right, -1 left) */
  function stand(ctx, x, y, top, o = {}) {
    const s = o.s || 1, side = o.side || 0, bw = 64 * s, bx = x - bw / 2 + side * bw * 0.3;
    shadow(ctx, bx + bw / 2, y, bw * 0.62, 5 * s, 1);
    const base = o.color || (dark() ? '#2b3440' : '#3a4553');
    ctx.save(); let g = ctx.createLinearGradient(0, y - 9 * s, 0, y); g.addColorStop(0, mix(base, '#ffffff', 0.2)); g.addColorStop(1, mix(base, '#000000', 0.25));
    ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(bx + 4 * s, y - 9 * s); ctx.lineTo(bx + bw - 4 * s, y - 9 * s); ctx.quadraticCurveTo(bx + bw, y - 9 * s, bx + bw, y - 4 * s);
    ctx.lineTo(bx + bw, y); ctx.lineTo(bx, y); ctx.lineTo(bx, y - 4 * s); ctx.quadraticCurveTo(bx, y - 9 * s, bx + 4 * s, y - 9 * s); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.18)'; ctx.fillRect(bx + 4 * s, y - 9 * s, bw - 8 * s, 1); ctx.restore();
    rod(ctx, x, y - 8 * s, x, top, 3.2 * s, { color: o.rod || '#b4bcc6' });
    ctx.fillStyle = mix(o.rod || '#b4bcc6', '#ffffff', 0.4); ctx.beginPath(); ctx.ellipse(x, top, 3.2 * s, 1.2 * s, 0, 0, 7); ctx.fill();
  }
  /* a boss head clamp at (x, y) on an upright, with its thumb screw towards o.side (default right) */
  function boss(ctx, x, y, s = 1, o = {}) {
    const side = o.side || 1;
    box(ctx, x - 8 * s, y - 9 * s, 16 * s, 18 * s, { color: o.color || '#59687c', r: 2.5 * s, shadow: false });
    rod(ctx, x + side * 8 * s, y, x + side * 15 * s, y, 1.6 * s, { color: '#c0c7d0' });
    const kx = x + side * 17 * s; let g = ctx.createRadialGradient(kx - 1.5 * s, y - 2 * s, 0, kx, y, 5 * s); g.addColorStop(0, '#5a6372'); g.addColorStop(1, '#14181e');
    ctx.fillStyle = g; ctx.beginPath(); ctx.roundRect(kx - 2.5 * s, y - 5 * s, 5 * s, 10 * s, 1.5 * s); ctx.fill();
  }
  /* a photogate: a U frame opening upward, its infrared beam across the gap at (cx, beamY). on: the beam is blocked (LED lit).
     w is the gap; the arms reach h below the beam. */
  function gate(ctx, cx, beamY, w, h, on, o = {}) {
    const s = o.s || 1, arm = 9 * s, top = beamY - 10 * s, bot = beamY + h, col = o.color || (dark() ? '#3b4654' : '#2f3945');
    shadow(ctx, cx, bot + 2 * s, w * 0.75, 3 * s, 0.7);
    box(ctx, cx - w / 2 - arm, top, arm, bot - top, { color: col, r: 2.5 * s, shadow: false });
    box(ctx, cx + w / 2, top, arm, bot - top, { color: col, r: 2.5 * s, shadow: false });
    box(ctx, cx - w / 2 - arm, bot - 8 * s, w + 2 * arm, 8 * s, { color: col, r: 2.5 * s, shadow: false });
    /* emitter and detector windows */
    ctx.fillStyle = '#0b0f14'; ctx.fillRect(cx - w / 2 - 2 * s, beamY - 3 * s, 2 * s, 6 * s); ctx.fillRect(cx + w / 2, beamY - 3 * s, 2 * s, 6 * s);
    /* the beam (infrared, drawn faint red) */
    ctx.save(); const bc = o.beam || '#ff5a3c'; ctx.strokeStyle = bc; ctx.lineWidth = 1.2 * s; ctx.globalAlpha = on ? 0.95 : 0.28;
    if (on) { ctx.shadowColor = bc; ctx.shadowBlur = 8 * s; } ctx.beginPath(); ctx.moveTo(cx - w / 2, beamY); ctx.lineTo(cx + w / 2, beamY); ctx.stroke(); ctx.restore();
    /* status LED on the left arm */
    const lx = cx - w / 2 - arm / 2, ly = top + 5 * s; ctx.save(); ctx.fillStyle = on ? '#ff5a3c' : '#4a1f1a'; if (on) { ctx.shadowColor = '#ff5a3c'; ctx.shadowBlur = 6 * s; }
    ctx.beginPath(); ctx.arc(lx, ly, 1.8 * s, 0, 7); ctx.fill(); ctx.restore();
  }
  /* a frosted panel drawn on the canvas (for a trace or graph that sits in the picture) */
  function panel(ctx, x, y, w, h, o = {}) {
    const d = dark(), r = o.r == null ? 10 : o.r;
    ctx.save(); ctx.shadowColor = d ? 'rgba(0,0,0,0.5)' : 'rgba(20,30,45,0.14)'; ctx.shadowBlur = 18; ctx.shadowOffsetY = 4;
    ctx.fillStyle = o.fill || (d ? 'rgba(20,27,36,0.88)' : 'rgba(255,255,255,0.9)'); ctx.beginPath(); ctx.roundRect(x, y, w, h, r); ctx.fill(); ctx.restore();
    ctx.save(); ctx.strokeStyle = d ? 'rgba(255,255,255,0.08)' : 'rgba(20,30,45,0.10)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.roundRect(x + 0.5, y + 0.5, w - 1, h - 1, r); ctx.stroke(); ctx.restore();
  }
  /* a helical coil spring from (x1, y1) to (x2, y2): n turns of radius r, wire width wd; the back of each turn is darker */
  function spring(ctx, x1, y1, x2, y2, n, r, o = {}) {
    const L = Math.hypot(x2 - x1, y2 - y1) || 1, ux = (x2 - x1) / L, uy = (y2 - y1) / L, nx = -uy, ny = ux, wd = o.w || 2, c = o.color || '#9aa4b0';
    const lead = Math.min(o.lead == null ? 8 : o.lead, L * 0.2), a = lead, b = L - lead, steps = Math.max(24, Math.round(n * 24));
    const P = (t, ph) => { const s = a + (b - a) * t + Math.cos(ph) * r * 0.18 * (o.pitch || 1); return [x1 + ux * s + nx * Math.sin(ph) * r, y1 + uy * s + ny * Math.sin(ph) * r]; };
    ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    for (const back of [true, false]) {
      ctx.strokeStyle = back ? mix(c, '#000000', 0.5) : c; ctx.lineWidth = back ? wd * 0.85 : wd;
      for (let i = 0; i < steps; i++) { const t0 = i / steps, t1 = (i + 1) / steps, ph0 = t0 * n * 2 * Math.PI, ph1 = t1 * n * 2 * Math.PI, isBack = Math.cos((ph0 + ph1) / 2) < 0;
        if (isBack !== back) continue; const [ax, ay] = P(t0, ph0), [bx, by] = P(t1, ph1); ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke(); }
      if (!back) { ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.lineWidth = Math.max(0.6, wd * 0.3);
        for (let i = 0; i < steps; i++) { const t0 = i / steps, t1 = (i + 1) / steps, ph0 = t0 * n * 2 * Math.PI, ph1 = t1 * n * 2 * Math.PI; if (Math.cos((ph0 + ph1) / 2) < 0.3) continue;
          const [ax, ay] = P(t0, ph0), [bx, by] = P(t1, ph1); ctx.beginPath(); ctx.moveTo(ax - nx * wd * 0.25, ay - ny * wd * 0.25); ctx.lineTo(bx - nx * wd * 0.25, by - ny * wd * 0.25); ctx.stroke(); } }
    }
    ctx.strokeStyle = c; ctx.lineWidth = wd; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(...P(0, 0)); ctx.moveTo(...P(1, n * 2 * Math.PI)); ctx.lineTo(x2, y2); ctx.stroke();
    ctx.restore();
  }
  /* sky and ground for outdoor scenes: sky gradient down to the horizon at y, then ground to h */
  function outdoors(ctx, w, h, y, o = {}) {
    const d = dark(); let g = ctx.createLinearGradient(0, 0, 0, y);
    g.addColorStop(0, d ? '#0b1626' : '#7fb2e5'); g.addColorStop(0.7, d ? '#13233a' : '#bcd8f1'); g.addColorStop(1, d ? '#1c2e45' : '#e3eef8');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, y);
    const sx = w * (o.sun == null ? 0.12 : o.sun), sy = y * 0.18;
    g = ctx.createRadialGradient(sx, sy, 0, sx, sy, Math.max(w, y) * 0.5); g.addColorStop(0, d ? 'rgba(200,215,255,0.10)' : 'rgba(255,248,225,0.75)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, y);
    g = ctx.createLinearGradient(0, y, 0, h); g.addColorStop(0, d ? '#24331f' : '#9cc27a'); g.addColorStop(1, d ? '#18231a' : '#6f9a52');
    ctx.fillStyle = g; ctx.fillRect(0, y, w, h - y);
    ctx.fillStyle = d ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.35)'; ctx.fillRect(0, y, w, 1);
  }
  return { dark, mix, backdrop, bench, shadow, rod, box, screw, lcd, pulley, clamp, slotted, speaker, label, plate, cable, ball, wall, stand, boss, gate, panel, spring, outdoors };
})();
