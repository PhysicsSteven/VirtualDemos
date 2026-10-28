/* VirtualDemos shared 3D kit (window.VD3K), built on vd3.js for the deeper visual passes (2026-10-24). Lifted from the 3D views of
   resistivity, wire-force, string-density, doppler and tides, so a new 3D view starts from the same scene, theme, props and 3D | Flat
   switch instead of a fresh copy. Pictures only: no physics here. Scenes are z up and in meters unless a demo chooses otherwise.
   Link it after vd3.js:  <script src="lib/vd3.js"></script><script src="lib/vd3kit.js"></script>
   Every helper except VD3K.view needs window.THREE, so call them from the init function that VD3K.view runs after three.js loads.
   Never change what an existing helper does: add an option or a new helper instead (see demos/lib/README.md).

   Switch and scene
   VD3K.view({ seg, init, change, status, start })   the 3D | Flat switch. seg: the .seg holding buttons with data-dim="3d" and "flat".
                       init(): build the scene, return false when it cannot (no WebGL). change(on3d): show the right canvas and redraw.
                       status(msg): where to say that 3D is not available. start: '3d' (default) or 'flat'. ?view=flat or ?view=3d
                       in the URL wins, and a low power device opens flat. Returns { set(v), is3d() }.
   VD3K.stage(host, { before, fov, near, far, shadow, alpha })   renderer, scene, camera, hemisphere light and a sun (shadows when
                       shadow is a box half width in m). The canvas goes into host (before the element given), aria hidden.
                       Returns S with: r, el, scene, cam, hemi, sun, size(w, h), render(), project([x, y, z]) -> [px, py, depth],
                       place(o, target, dist) (VD3.place), fit(dist, ref) (dist backed off when the picture is taller than ref wide), orbit(el, o, onChange, opt) (VD3.orbit), theme(force), onTheme(fn), dispose(obj).
   VD3K.token(name, fallback)   a CSS color token of the page (--canvas, --accent, ...) as a THREE.Color.
   S.theme(force)      reapplies the page theme: background and fog from --canvas, light levels for light or dark, then every onTheme(fn)
                       (fn(dark)). Cheap to call each frame: it only works when the theme or the tokens changed, or force is true.
   S.fog(near, far)    fog in the background color, so a far edge fades into the page (or pass fog: [near, far] to stage,
                       or fogAt: [1.25, 2.6] for fog that starts and ends at those multiples of the camera distance, set by S.place). No fog otherwise.
                       opt.sky: a fixed background color (space scenes) instead of the page's --canvas.

   Lab props (each returns a THREE object; materials follow the theme)
   VD3K.bench(S, { w, d, x, y, z })              wooden bench top that takes shadows
   VD3K.backdrop(S, { r, h, x, y, arc })         a curved lab wall behind the apparatus (inside of a cylinder part), lit softly
   VD3K.box(w, d, h, mat, x, y, z)               a box sitting on z (its base at z)
   VD3K.rod(a, b, rad, mat)                      a cylinder from point a to point b ([x, y, z])
   VD3K.cable(a, b, { sag, rad, color, mat, via })   a lead from a to b that sags (or passes through the points in via)
   VD3K.meter(S, { w, h, label, sub, kind, digits })  an instrument face on a case: kind 'lcd' (default) or 'needle'. .set(text) for lcd,
                       .set(fraction 0..1, text) for a needle; it redraws only when the value changes.
   VD3K.ruler(S, { len, from, to, unit, step, w, wood })  a steel (or wooden) rule along x from 0 to len, printed from..to in unit
   VD3K.glass(S, { r, len, axis, ends, tint, opacity })   a glass tube (closed ends unless ends: false) along axis 'x', 'y' or 'z'
   VD3K.bulb(S, { r, tint, opacity })            a glass sphere
   VD3K.label(text, { size, color, bg, font, weight })  a text sprite size m tall that always faces the camera; .set(text)

   Particles and sky
   VD3K.particles(S, { n, r, color, seg, emissive })   an InstancedMesh pool of spheres. .put(i, x, y, z, color?), .show(count),
                       .done() after a frame of puts. color is anything THREE.Color takes, or a number from VD3K.heat.
   VD3K.heat(t)        a THREE.Color on a cold blue to hot red ramp, t from 0 to 1 (speed, energy)
   VD3K.marker(S, { r, color })                 a ring that sits round one particle to follow it; .at(x, y, z)
   VD3K.follow(o)      smooth camera target: f = VD3K.follow({ x, y, z }); f.to(x, y, z) each frame; f.at is the eased point
   VD3K.sky(S, { n, r, seed, milky })           a star sphere (points, brightness spread like naked eye stars); same in both themes
   VD3K.star(S, { r, color, glow })             an emissive sphere with a soft glow sprite (the Sun, a star); .tint(color)
   VD3K.planet(S, { r, color, tex, night, tilt, seg })   a lit sphere; tex is an image URL or data URL; z is its spin axis tilted by tilt (rad)
   VD3K.earth(S, { r, tilt }, cb)               loads lib/earth.js once (NASA Blue Marble) and calls cb(planet)
   VD3K.ring(r, { color, dashed, opacity, seg })     a circle in the xy plane (an orbit)

   Room reflections (Blender pilot, 2026-10-28)
   VD3K.room(S, { hemi, strength })             a lab room rendered in Blender (tools/blender/lab_room.py, 360 degree panoramas
                       lib/env/lab-light.jpg and lab-dark.jpg, about 20 kB each) set as scene.environment, so metal and glass
                       reflect a real room. Follows the theme. Call it after the demo's own onTheme that sets the lights: it then
                       scales hemi.intensity by hemi (default 0.85). When a map arrives, every standard material in the scene gets
                       envMapIntensity metal (default 1) when its metalness is 0.2 or more, else matte (default 0.15), so wood and walls
                       keep their color. Skipped on a low power device. S.onRoom(), when set, runs after a map arrives. Pictures only. */
(function () {
  'use strict';
  var K = window.VD3K = window.VD3K || {};
  var SRC = (document.currentScript && document.currentScript.src) || '';
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var css = function (name) { try { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); } catch (_) { return ''; } };
  K.token = function (name, fb) { var s = css(name.charAt(0) === '-' ? name : '--' + name); try { return new THREE.Color(s || fb); } catch (_) { return new THREE.Color(fb); } };
  var V = function (q) { return q instanceof THREE.Vector3 ? q : new THREE.Vector3(q[0], q[1], q[2]); };

  /* ---------- the 3D | Flat switch ---------- */
  K.view = function (o) {
    var seg = typeof o.seg === 'string' ? document.querySelector(o.seg) : o.seg, st = { on: false, ok: false, tried: false, loading: false };
    var NO = o.noText || 'The 3D view needs WebGL, which this browser does not offer here: showing the flat view.';
    var mark = function (v) { if (seg) seg.querySelectorAll('button[data-dim]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.dim === v)); }); };
    var say = function () { if (o.status) o.status(NO); };
    var set = function (v) {
      if (v === '3d' && !st.ok) {
        if (st.tried || !window.VD3) { say(); v = 'flat'; }
        else {
          if (!st.loading) { st.loading = true; VD3.load(function (ok) { st.loading = false; st.tried = true; st.ok = !!(ok && o.init() !== false); if (!st.ok) say(); set(st.ok ? '3d' : 'flat'); }); }
          return;
        }
      }
      st.on = v === '3d'; mark(v); if (o.change) o.change(st.on);
    };
    if (seg) seg.addEventListener('click', function (e) { var b = e.target.closest('[data-dim]'); if (b) set(b.dataset.dim); });
    var q = null; try { q = new URLSearchParams(location.search).get('view'); } catch (_) {}
    var first = q === 'flat' || q === '3d' ? q : (o.start === 'flat' || (window.VD3 && VD3.lowPower()) ? 'flat' : '3d');
    set(first);
    return { set: set, is3d: function () { return st.on; } };
  };

  /* ---------- the stage ---------- */
  K.stage = function (host, opt) {
    opt = opt || {};
    var r = VD3.renderer({ alpha: !!opt.alpha }); if (!r) return null;
    var el = r.domElement; el.setAttribute('aria-hidden', 'true');
    if (opt.before) host.insertBefore(el, opt.before); else host.appendChild(el);
    var scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(opt.fov || 30, 1, opt.near || 0.02, opt.far || 20);
    var hemi = new THREE.HemisphereLight(0xffffff, 0x888888, 0.7), sun = new THREE.DirectionalLight(0xffffff, 0.7);
    sun.position.set(0.4, -1.2, 2.6); scene.add(hemi, sun, sun.target);
    if (opt.shadow) {
      var b = opt.shadow; r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap; sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
      Object.assign(sun.shadow.camera, { left: -b, right: b, top: b, bottom: -b, near: 0.1, far: 10 * b + 4 }); sun.shadow.radius = 3;
    }
    var S = { r: r, el: el, scene: scene, cam: cam, hemi: hemi, sun: sun, w: 0, h: 0, fns: [], key: '', fogNF: null };
    S.size = function (w, h) { w = Math.max(1, Math.round(w)); h = Math.max(1, Math.round(h)); if (S.w === w && S.h === h) return; S.w = w; S.h = h; r.setSize(w, h); cam.aspect = w / h; cam.updateProjectionMatrix(); };
    S.onTheme = function (fn) { S.fns.push(fn); if (S.key) fn(VD3.dark()); return fn; };
    S.fog = function (n, f) { S.fogNF = [n, f]; if (scene.fog) { scene.fog.near = n; scene.fog.far = f; } else S.key = ''; };
    S.theme = function (force) {
      var dk = VD3.dark(), bgs = css('--canvas') || css('--bg') || (dk ? '#121820' : '#fbfcfd'), k = dk + '|' + bgs + '|' + css('--accent');
      if (!force && k === S.key) return; S.key = k;
      var bg = (opt.sky ? null : K.token('--canvas', dk ? '#121820' : '#fbfcfd'));
      if (opt.sky) bg = new THREE.Color(opt.sky); scene.background = bg;
      var nf = S.fogNF || opt.fog || (opt.fogAt ? [10, 20] : null); scene.fog = nf ? new THREE.Fog(bg, nf[0], nf[1]) : null;
      hemi.intensity = dk ? 0.9 : 0.62; sun.intensity = dk ? 0.8 : 0.62; hemi.groundColor = new THREE.Color(dk ? '#2a241d' : '#8c7a60');
      S.fns.forEach(function (fn) { fn(dk); });
    };
    S.render = function () { S.theme(); scene.updateMatrixWorld(); r.render(scene, cam); };
    var tmp = new THREE.Vector3();
    S.project = function (q) { tmp.copy(V(q)).project(cam); return [(tmp.x + 1) / 2 * S.w, (1 - tmp.y) / 2 * S.h, tmp.z]; };
    S.place = function (o, t, d) { VD3.place(cam, o, V(t), d); if (opt.fogAt && scene.fog) { scene.fog.near = opt.fogAt[0] * d / o.zoom; scene.fog.far = opt.fogAt[1] * d / o.zoom; } };
    S.fit = function (d, ref) { return d * Math.max(1, (ref || 1.4) / (S.w / Math.max(1, S.h))); };   /* back the camera off on a tall (phone) picture */
    S.orbit = function (target, o, onChange, oo) { return VD3.orbit(target, o, onChange, oo); };
    S.dispose = function (obj) { obj.traverse(function (x) { if (x.geometry) x.geometry.dispose(); }); if (obj.parent) obj.parent.remove(obj); };
    return S;
  };

  var std = function (o) { return new THREE.MeshStandardMaterial(o); };
  /* a material whose color follows the theme: c is [light, dark] */
  var themed = function (S, o, c) { var m = std(o); S.onTheme(function (dk) { m.color.set(dk ? c[1] : c[0]); }); return m; };
  K.material = function (S, o, c) { return themed(S, o || {}, c); };

  /* ---------- lab props ---------- */
  K.bench = function (S, o) {
    o = o || {}; var m = themed(S, { roughness: 0.85, metalness: 0 }, ['#cdbb9d', '#3a3229']);
    var top = new THREE.Mesh(new THREE.PlaneGeometry(o.w || 5, o.d || 4), m); top.position.set(o.x || 0, o.y || 0, o.z || 0); top.receiveShadow = true; return top;
  };
  K.backdrop = function (S, o) {
    o = o || {}; var r = o.r || 2.4, h = o.h || 1.6, arc = o.arc || Math.PI * 0.7;
    var g = new THREE.CylinderGeometry(r, r, h, 48, 1, true, -arc / 2, arc); g.rotateX(Math.PI / 2); g.translate(0, 0, h / 2);
    var m = themed(S, { roughness: 1, metalness: 0, side: THREE.BackSide }, ['#e9edf2', '#18202a']), wall = new THREE.Mesh(g, m);
    wall.rotation.z = Math.PI; wall.position.set(o.x || 0, o.y || 0, 0); wall.receiveShadow = true; return wall;
  };
  K.box = function (w, d, h, mat, x, y, z) { var b = new THREE.Mesh(new THREE.BoxGeometry(w, d, h), mat); b.position.set(x || 0, y || 0, (z || 0) + h / 2); b.castShadow = true; b.receiveShadow = true; return b; };
  K.rod = function (a, b, rad, mat) {
    a = V(a); b = V(b); var d = new THREE.Vector3().subVectors(b, a), len = d.length() || 1e-6;
    var m = new THREE.Mesh(new THREE.CylinderGeometry(rad, rad, len, 16), mat); m.position.copy(a).addScaledVector(d, 0.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); m.castShadow = true; return m;
  };
  K.cable = function (a, b, o) {
    o = o || {}; a = V(a); b = V(b); var pts = [a];
    if (o.via) o.via.forEach(function (q) { pts.push(V(q)); });
    else { var span = a.distanceTo(b), sag = o.sag == null ? 0.25 * span : o.sag; for (var i = 1; i < 4; i++) { var t = i / 4, p = new THREE.Vector3().lerpVectors(a, b, t); p.z = Math.max(o.floor || 0.003, p.z - sag * 4 * t * (1 - t)); pts.push(p); } }
    pts.push(b);
    var mat = o.mat || std({ roughness: 0.6, color: o.color || 0x23282f }), c = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 48, o.rad || 0.0022, 8, false), mat);
    c.castShadow = true; return c;
  };
  var canvasTex = function (S, w, h) { var cv = document.createElement('canvas'); cv.width = w; cv.height = h; var t = new THREE.CanvasTexture(cv); t.anisotropy = S.r.capabilities.getMaxAnisotropy(); return { cv: cv, tex: t }; };
  var FONT = '"Atkinson Hyperlegible", system-ui, sans-serif', MONO = '"JetBrains Mono", ui-monospace, monospace';
  K.meter = function (S, o) {
    o = o || {}; var w = o.w || 0.16, h = o.h || 0.095, kind = o.kind || 'lcd', T = canvasTex(S, 512, Math.round(512 * h / w)), cw = 512, ch = T.cv.height;
    var body = themed(S, { roughness: 0.55, metalness: 0.1 }, ['#2f3a46', '#2a333e']), face = new THREE.MeshStandardMaterial({ map: T.tex, roughness: 0.5, metalness: 0.05 });
    var g = new THREE.Group(), box = new THREE.Mesh(new THREE.BoxGeometry(w, 0.035, h), body), pl = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.94, h * 0.93), face);
    box.castShadow = true; pl.rotation.x = Math.PI / 2; pl.position.y = -0.0181; g.add(box, pl); g.rotation.x = o.tilt == null ? -0.55 : o.tilt; g.position.z = h / 2;
    var last = null, c = T.cv.getContext('2d');
    var foot = function () {
      c.fillStyle = 'rgba(230,236,243,0.85)'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.font = '700 30px ' + FONT;
      if (o.label) c.fillText(o.label, cw / 2, ch * 0.7);
      if (o.sub) { c.font = '22px ' + FONT; c.fillStyle = 'rgba(230,236,243,0.6)'; c.fillText(o.sub, cw / 2, ch * 0.82); }
    };
    g.set = function (a, b) {
      var k = a + '|' + b; if (k === last) return; last = k; c.fillStyle = '#2f3a46'; c.fillRect(0, 0, cw, ch);
      if (kind === 'needle') {
        var cx = cw / 2, cy = ch * 0.58, R = ch * 0.44; c.fillStyle = '#f3efe4'; c.beginPath(); c.roundRect(24, 18, cw - 48, ch * 0.5, 8); c.fill();
        c.strokeStyle = '#3a3a3a'; c.lineWidth = 2; c.beginPath(); c.arc(cx, cy, R, Math.PI * 1.2, Math.PI * 1.8); c.stroke();
        for (var i = 0; i <= 10; i++) { var t = Math.PI * (1.2 + 0.06 * i), l = i % 5 ? 10 : 20; c.beginPath(); c.moveTo(cx + R * Math.cos(t), cy + R * Math.sin(t)); c.lineTo(cx + (R - l) * Math.cos(t), cy + (R - l) * Math.sin(t)); c.stroke(); }
        var an = Math.PI * (1.2 + 0.6 * clamp(+a || 0, 0, 1)); c.strokeStyle = '#b8382a'; c.lineWidth = 4; c.beginPath(); c.moveTo(cx, cy); c.lineTo(cx + (R + 4) * Math.cos(an), cy + (R + 4) * Math.sin(an)); c.stroke();
        if (b != null) { c.fillStyle = '#2a2a2a'; c.font = '600 26px ' + MONO; c.textAlign = 'center'; c.fillText(String(b), cx, ch * 0.45); }
      } else {
        var t2 = String(a); if (window.VDGear) VDGear.lcd(c, 28, 24, cw - 56, ch * 0.42, t2, { font: '600 ' + Math.round(ch * 0.27) + 'px ' + MONO });
        else { c.fillStyle = '#081109'; c.fillRect(28, 24, cw - 56, ch * 0.42); c.fillStyle = '#8ef0b0'; c.font = '600 ' + Math.round(ch * 0.27) + 'px monospace'; c.textAlign = 'right'; c.textBaseline = 'middle'; c.fillText(t2, cw - 44, 24 + ch * 0.21); }
      }
      foot(); T.tex.needsUpdate = true;
    };
    g.set(kind === 'needle' ? 0 : (o.text || ''), kind === 'needle' ? (o.text || null) : undefined);
    return g;
  };
  K.ruler = function (S, o) {
    o = o || {}; var len = o.len || 1, w = o.w || 0.036, from = o.from || 0, to = o.to == null ? len * 100 : o.to, unit = o.unit || 'cm', step = o.step || (to - from) / 100;
    var T = canvasTex(S, 2048, Math.round(2048 * w / len) || 64), side = themed(S, { roughness: 0.4, metalness: 0.5 }, o.wood ? ['#c9a46a', '#6b5434'] : ['#b9c1ca', '#59626e']);
    var top = std({ map: T.tex, roughness: 0.45, metalness: o.wood ? 0 : 0.25 }), rule = new THREE.Mesh(new THREE.BoxGeometry(len, w, 0.003), [side, side, side, side, top, side]);
    rule.position.set(len / 2, 0, 0.0015); rule.receiveShadow = true;
    S.onTheme(function (dk) {
      var c = T.cv.getContext('2d'), W = T.cv.width, H = T.cv.height, n = Math.round((to - from) / step);
      c.fillStyle = o.wood ? (dk ? '#4d4630' : '#f1e3b5') : (dk ? '#59626e' : '#e4e8ec'); c.fillRect(0, 0, W, H);
      c.fillStyle = dk ? '#e9edf2' : '#1f262f'; c.font = '600 ' + Math.round(H * 0.3) + 'px ' + MONO; c.textAlign = 'center'; c.textBaseline = 'bottom';
      for (var i = 0; i <= n; i++) { var x = i / n * W, big = i % 10 === 0, mid = i % 5 === 0; c.fillRect(clamp(x - (big ? 1.4 : 0.8), 0, W - 3), 0, big ? 2.8 : 1.6, H * (big ? 0.42 : mid ? 0.3 : 0.18)); if (big && i > 0 && i < n) c.fillText(String(+(from + i * step).toPrecision(6)), x, H - 4); }
      c.textAlign = 'right'; c.fillText(unit, W - 6, H - 4); T.tex.needsUpdate = true;
    });
    return rule;
  };
  var glassMat = function (S, o) { return themed(S, { transparent: true, opacity: o.opacity || 0.22, roughness: 0.08, metalness: 0.1, side: THREE.DoubleSide, depthWrite: false }, o.tint ? [o.tint, o.tint] : ['#cfe3f0', '#9fc4dc']); };
  K.glass = function (S, o) {
    o = o || {}; var r = o.r || 0.02, len = o.len || 0.2, m = glassMat(S, o), g = new THREE.Group();
    g.add(new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 48, 1, true), m));
    if (o.ends !== false) [-1, 1].forEach(function (s) { var e = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 12, 0, Math.PI * 2, 0, Math.PI / 2), m); e.position.y = s * len / 2; if (s < 0) e.rotation.x = Math.PI; g.add(e); });
    if (o.axis === 'x') g.rotation.z = Math.PI / 2; else if (o.axis !== 'y') g.rotation.x = Math.PI / 2;
    g.renderOrder = 2; return g;
  };
  K.bulb = function (S, o) { o = o || {}; var b = new THREE.Mesh(new THREE.SphereGeometry(o.r || 0.05, 48, 24), glassMat(S, o)); b.renderOrder = 2; return b; };
  K.label = function (text, o) {
    o = o || {}; var cv = document.createElement('canvas'), c = cv.getContext('2d'), tex = new THREE.CanvasTexture(cv), H = 64;
    var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthWrite: false, transparent: true })), last = null;
    sp.set = function (t) {
      if (t === last) return; last = t; var f = (o.weight || 600) + ' ' + H * 0.62 + 'px ' + (o.font || FONT); c.font = f;
      var w = Math.ceil(c.measureText(t).width) + (o.bg ? 28 : 8); cv.width = w; cv.height = H; c.font = f; c.textBaseline = 'middle';
      if (o.bg) { c.fillStyle = o.bg; c.beginPath(); c.roundRect(0, 4, w, H - 8, 10); c.fill(); }
      c.fillStyle = o.color || '#1f262f'; c.fillText(t, o.bg ? 14 : 4, H / 2 + 2); tex.needsUpdate = true;
      var s = o.size || 0.03; sp.scale.set(s * w / H, s, 1);
    };
    sp.set(String(text)); sp.renderOrder = 5; return sp;
  };

  /* ---------- particles ---------- */
  K.heat = function (t) { t = clamp(t, 0, 1); var c = new THREE.Color(); c.setHSL(0.66 - 0.66 * t, 0.75, 0.5 + 0.08 * Math.sin(t * Math.PI)); return c; };
  K.particles = function (S, o) {
    o = o || {}; var n = o.n || 500, seg = o.seg || 10;
    var m = std({ roughness: 0.35, metalness: 0.1, color: 0xffffff }), mesh = new THREE.InstancedMesh(new THREE.SphereGeometry(o.r || 0.003, seg, Math.max(6, seg - 2)), m, n);
    mesh.frustumCulled = false; var M = new THREE.Matrix4(), C = new THREE.Color(o.color || '#2b60b5'), used = false;
    for (var i = 0; i < n; i++) mesh.setColorAt(i, C);   /* before count = 0: r128 sizes instanceColor from count */
    mesh.count = 0;
    if (o.emissive) m.emissive = new THREE.Color(o.emissive);
    mesh.put = function (i, x, y, z, col) { if (i >= n) return; M.makeTranslation(x, y, z); mesh.setMatrixAt(i, M); if (col != null) { mesh.setColorAt(i, col instanceof THREE.Color ? col : C.set(col)); used = true; } };
    mesh.show = function (k) { mesh.count = Math.min(n, k); };
    mesh.done = function () { mesh.instanceMatrix.needsUpdate = true; if (used && mesh.instanceColor) mesh.instanceColor.needsUpdate = true; used = false; };
    return mesh;
  };
  K.marker = function (S, o) {
    o = o || {}; var m = new THREE.MeshBasicMaterial({ color: o.color || '#e0a020', depthTest: false, transparent: true }), r = o.r || 0.01;
    var ring = new THREE.Mesh(new THREE.TorusGeometry(r, r * 0.12, 8, 40), m); ring.renderOrder = 6;
    var q = new THREE.Quaternion(); ring.at = function (x, y, z) { ring.position.set(x, y, z); ring.quaternion.copy(S.cam.quaternion); };
    void q; return ring;
  };
  K.follow = function (p, k) {
    var f = { at: new THREE.Vector3(p.x || 0, p.y || 0, p.z || 0), k: k || 0.12 };
    f.to = function (x, y, z, snap) { if (snap) f.at.set(x, y, z); else f.at.lerp(new THREE.Vector3(x, y, z), f.k); return f.at; };
    return f;
  };

  /* ---------- sky ---------- */
  K.sky = function (S, o) {
    o = o || {}; var n = o.n || 2500, R = o.r || 500, sd = o.seed || 7, rn = function () { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
    var pos = new Float32Array(n * 3), col = new Float32Array(n * 3), c = new THREE.Color();
    for (var i = 0; i < n; i++) {
      var z = 2 * rn() - 1, ph = 2 * Math.PI * rn();
      if (o.milky && rn() < 0.45) z = (rn() - 0.5) * 0.25;   /* crowd a band, like the Milky Way */
      var s = Math.sqrt(1 - z * z); pos.set([R * s * Math.cos(ph), R * s * Math.sin(ph), R * z], i * 3);
      var b = Math.pow(rn(), 3) * 0.85 + 0.15, tc = rn(); c.setRGB(b * (tc < 0.2 ? 1 : 0.85 + 0.15 * tc), b * 0.92, b * (tc > 0.8 ? 1 : 0.8 + 0.2 * tc)); col.set([c.r, c.g, c.b], i * 3);
    }
    var g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    var pts = new THREE.Points(g, new THREE.PointsMaterial({ size: o.size || 1.6, sizeAttenuation: false, vertexColors: true, fog: false, depthWrite: false }));
    pts.renderOrder = -1; return pts;
  };
  var glowTex = null;
  var glow = function () {
    if (glowTex) return glowTex; var cv = document.createElement('canvas'); cv.width = cv.height = 128; var c = cv.getContext('2d'), g = c.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,0.45)'); g.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = g; c.fillRect(0, 0, 128, 128);
    return (glowTex = new THREE.CanvasTexture(cv));
  };
  K.star = function (S, o) {
    o = o || {}; var r = o.r || 1, col = new THREE.Color(o.color || '#ffd27a'), g = new THREE.Group();
    var ball = new THREE.Mesh(new THREE.SphereGeometry(r, 48, 24), new THREE.MeshBasicMaterial({ color: col, fog: false }));
    var halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow(), color: col, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false }));
    halo.scale.setScalar(r * (o.glow || 6)); g.add(ball, halo);
    g.tint = function (c) { col.set(c); ball.material.color.copy(col); halo.material.color.copy(col); };
    return g;
  };
  K.planet = function (S, o) {
    o = o || {}; var m = std({ roughness: 0.9, metalness: 0, color: o.tex ? 0xffffff : (o.color || '#6d8fb3') });
    if (o.tex) new THREE.TextureLoader().load(o.tex, function (t) { m.map = t; m.needsUpdate = true; });
    if (o.night) new THREE.TextureLoader().load(o.night, function (t) { m.emissiveMap = t; m.emissive = new THREE.Color(o.nightLevel || 0.7, o.nightLevel || 0.7, o.nightLevel || 0.7); m.needsUpdate = true; });
    var ball = new THREE.Mesh(new THREE.SphereGeometry(o.r || 1, o.seg || 64, Math.round((o.seg || 64) / 2)), m);
    ball.rotation.x = Math.PI / 2;   /* the sphere's poles on z: equirectangular images wrap round z with north up */
    var spin = new THREE.Group(); spin.add(ball); var tilt = new THREE.Group(); tilt.add(spin); tilt.rotation.y = o.tilt || 0;
    tilt.spin = function (a) { spin.rotation.z = a; }; tilt.ball = ball; return tilt;
  };
  var earthWait = null;
  K.earth = function (S, o, cb) {
    var go = function () { var E = window.VD_EARTH; cb(K.planet(S, Object.assign({ tex: E.day, night: o && o.night ? E.night : null }, o || {}))); };
    if (window.VD_EARTH) { go(); return; }
    if (earthWait) { earthWait.push(go); return; } earthWait = [go];
    var s = document.createElement('script'); s.src = SRC ? SRC.replace(/vd3kit\.js(\?.*)?$/, 'earth.js') : 'lib/earth.js';
    s.onload = function () { var w = earthWait; earthWait = null; w.forEach(function (f) { f(); }); }; document.head.appendChild(s);
  };
  K.ring = function (r, o) {
    o = o || {}; var n = o.seg || 128, pts = []; for (var i = 0; i <= n; i++) pts.push(new THREE.Vector3(r * Math.cos(i / n * 2 * Math.PI), r * Math.sin(i / n * 2 * Math.PI), 0));
    var g = new THREE.BufferGeometry().setFromPoints(pts), m = o.dashed ? new THREE.LineDashedMaterial({ color: o.color || '#8090a0', dashSize: r * 0.04, gapSize: r * 0.03, transparent: true, opacity: o.opacity || 0.7 })
      : new THREE.LineBasicMaterial({ color: o.color || '#8090a0', transparent: true, opacity: o.opacity || 0.7 });
    var l = new THREE.Line(g, m); if (o.dashed) l.computeLineDistances(); return l;
  };

  /* ---------- room reflections from a Blender render ---------- */
  K.room = function (S, o) {
    o = o || {}; if (VD3.lowPower()) return null;
    var base = SRC.replace(/[^\/]*$/, '') + 'env/lab-', maps = {}, want = null, pm = new THREE.PMREMGenerator(S.r), hemi = o.hemi == null ? 0.85 : o.hemi;
    var metal = o.metal == null ? 1 : o.metal, matte = o.matte == null ? 0.15 : o.matte;
    var use = function (dk) {
      var k = dk ? 'dark' : 'light'; want = k;
      if (maps[k]) { S.scene.environment = maps[k]; return; }
      if (maps[k] === null) return; maps[k] = null;
      new THREE.TextureLoader().load(base + k + '.jpg', function (t) {
        maps[k] = pm.fromEquirectangular(t).texture; t.dispose();
        if (want === k) { S.scene.environment = maps[k]; S.scene.traverse(function (x) { [].concat(x.material || []).forEach(function (m) { if (m.isMeshStandardMaterial) m.envMapIntensity = m.metalness >= 0.2 ? metal : matte; }); }); S.key = ''; if (S.onRoom) S.onRoom(); }
      }, undefined, function () { maps[k] = undefined; });
    };
    S.onTheme(function (dk) { S.hemi.intensity *= hemi; use(dk); });
    return { use: use };
  };
})();
