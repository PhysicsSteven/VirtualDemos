/* vd-gear: shared canvas drawing for lab equipment (Acoustics visual pass, 2026-10-23). Pictures only: no physics here.
   Light comes from the top left. Every helper takes the 2D context first; sizes are in CSS pixels. */
window.VDGear = (function () {
  const dark = () => { const t = document.documentElement.getAttribute('data-theme');
    return t === 'dark' || (t !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches); };
  const mix = (a, b, t) => { const p = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)); const A = p(a), B = p(b);
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
  /* quiet annotation: small, muted, never bold; o.c overrides the colour */
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
  return { dark, mix, backdrop, bench, shadow, rod, box, screw, lcd, pulley, clamp, slotted, speaker, label, plate, cable };
})();
