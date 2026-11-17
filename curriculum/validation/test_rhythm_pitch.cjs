'use strict';
// From Rhythm to Pitch: hit counting on one axle, note names (A4 = 440 Hz, the piano's A0 and C8), just intervals with octaves
// taken out and their cents against equal temperament, the click's peak, dip and spectrum against a numerical Fourier transform,
// the Fourier lines of a click train, the loudness hold, the Song's bars, and the synth itself: the right number of clicks at a
// slow speed, a pitch at n·Ω with harmonics only at its multiples at a fast one, a chord's waveform repeating once a turn, and a
// peak that stays under full scale.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('rhythm-pitch', 'A4,COUNT_MAX,PITCH_MIN,TAU,R_HOLD,RATE_MAX,CLICK_FC,SONG,gcd,hitRate,hitsBetween,pulse,pulsePeak,pulseDip,pulseSpec,level,lineAmp,regime,noteOf,keyFreq,cents,interval,songAt,Synth');
const close = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);
function group(name, f) { f(); console.log('PASS', name); }
const SR = 48000;
function run(teeth, om, seconds, opts = {}) {
  const s = new c.Synth(SR), N = Math.round(seconds * SR), L = new Float32Array(N), R = new Float32Array(N);
  s.set({ wheels: teeth.map((n, i) => ({ id: i + 1, n, on: true, fc: c.CLICK_FC[i], tau: c.TAU, pan: 0 })), omT: om, om, th: opts.th == null ? 0.5 / Math.max(...teeth) / 2 : opts.th });
  s.render(L, R, N); return L;
}
function dft(x, f) { let re = 0, im = 0; for (let i = 0; i < x.length; i++) { const a = 2 * Math.PI * f * i / SR; re += x[i] * Math.cos(a); im -= x[i] * Math.sin(a); } return 2 * Math.hypot(re, im) / x.length; }

group('Hits: an n tooth wheel turning Ω times a second hits n·Ω times a second; one turn gives exactly n hits from any start', () => {
  assert.strictEqual(c.hitRate(4, 0.5), 2);
  for (const n of [1, 4, 5, 6, 7, 15, 16, 24]) for (const th0 of [0, 0.013, -0.02, 0.5, 3.999]) assert.strictEqual(c.hitsBetween(n, th0, th0 + 1), n, `n ${n} from ${th0}`);
  assert.strictEqual(c.hitsBetween(4, -0.02, 0.01), 1); assert.strictEqual(c.hitsBetween(4, 0.01, 0.24), 0);
  assert.strictEqual(c.gcd(12, 18), 6); assert.strictEqual(c.gcd(15, 16), 1);
});

group('Notes: A4 = 440 Hz, middle C 261.63 Hz, the piano runs from A0 (key 1, 27.5 Hz) to C8 (key 88); cents off the nearest note', () => {
  const a = c.noteOf(440); assert.strictEqual(`${a.name}${a.oct}`, 'A4'); close(a.cents, 0, 1e-9); assert.strictEqual(a.key, 49);
  const m = c.noteOf(261.6256); assert.strictEqual(`${m.name}${m.oct}`, 'C4'); assert.strictEqual(m.key, 40);
  assert.strictEqual(c.noteOf(27.5).key, 1); assert.strictEqual(c.noteOf(4186.009).key, 88); close(c.keyFreq(88), 4186.009, 1e-3);
  const t = c.noteOf(275); assert.strictEqual(`${t.name}${t.oct}`, 'C♯4'); close(t.cents, -13.686, 1e-3, '5/4 above A3 is a just C♯');
  const e = c.noteOf(330); assert.strictEqual(`${e.name}${e.oct}`, 'E4'); close(e.cents, 1.955, 1e-3);
});

group('Intervals: just names with octaves taken out, cents = 1200 log2(ratio), the nearest equal tempered step', () => {
  const t = c.interval(4, 5); assert.deepStrictEqual([t.a, t.b, t.name, t.et, t.etName], [4, 5, 'major third', 4, 'major third']); close(t.cents, 386.3137, 1e-4); close(t.dev, -13.6863, 1e-4);
  const f = c.interval(10, 15); assert.deepStrictEqual([f.a, f.b, f.name], [2, 3, 'perfect fifth']); close(f.cents, 701.955, 1e-3);
  assert.strictEqual(c.interval(10, 12).name, 'minor third'); assert.strictEqual(c.interval(3, 4).name, 'perfect fourth');
  const s7 = c.interval(4, 7); assert.strictEqual(s7.name, 'harmonic seventh'); close(s7.cents, 968.826, 1e-3); assert.strictEqual(s7.etName, 'minor seventh');
  const st = c.interval(15, 16); assert.strictEqual(st.name, 'minor second'); close(st.cents, 111.731, 1e-3);
  const tw = c.interval(2, 6); assert.deepStrictEqual([tw.name, tw.oct], ['perfect fifth', 1]);
  const o2 = c.interval(1, 4); assert.deepStrictEqual([o2.name, o2.oct], ['octave', 1]); close(o2.cents, 2400, 1e-9);
  assert.strictEqual(c.interval(5, 11).name, null);
  close(c.cents(Math.pow(2, 1 / 12)), 100, 1e-9);
});

group('Regimes: rhythm below 10 hits a second, flutter to 30, pitch above', () => {
  assert.strictEqual(c.regime(2), 'rhythm'); assert.strictEqual(c.regime(9.99), 'rhythm'); assert.strictEqual(c.regime(10), 'flutter');
  assert.strictEqual(c.regime(29.9), 'flutter'); assert.strictEqual(c.regime(30), 'pitch'); assert.strictEqual(c.regime(220), 'pitch');
});

group('One click: peak 1 at t* = atan(ωτ)/ω, dip −e^(−1/(2fτ)); its spectrum matches a numerical Fourier transform', () => {
  for (const fc of [900, 2000, 3000]) {
    const w = 2 * Math.PI * fc, ts = Math.atan(w * c.TAU) / w; close(c.pulse(ts, fc, c.TAU), 1, 1e-12);
    let mx = -9, mn = 9; for (let t = 0; t < 20 * c.TAU; t += c.TAU / 2000) { const v = c.pulse(t, fc, c.TAU); mx = Math.max(mx, v); mn = Math.min(mn, v); }
    close(mx, 1, 1e-5); close(mn, c.pulseDip(fc, c.TAU), 1e-5);
    for (const f of [0, 220, fc, 2.5 * fc]) {
      let re = 0, im = 0; const dt = c.TAU / 400; for (let t = 0; t < 40 * c.TAU; t += dt) { const v = c.pulse(t, fc, c.TAU); re += v * Math.cos(2 * Math.PI * f * t) * dt; im -= v * Math.sin(2 * Math.PI * f * t) * dt; }
      close(Math.hypot(re, im), c.pulseSpec(f, fc, c.TAU), 2e-3 * c.pulseSpec(f, fc, c.TAU) + 1e-9, `|H(${f})| at fc ${fc}`);
    }
  }
});

group('Loudness hold: click size 1 up to 40 hits a second; faster, the harmonics below Nyquist carry the power 40 E (Parseval)', () => {
  assert.strictEqual(c.R_HOLD, 40); assert.strictEqual(c.level(2), 1); assert.strictEqual(c.level(40), 1);
  for (const fc of [900, 3000]) {
    /* the click's energy, analytic against a sum */
    let E = 0; const dt = c.TAU / 2000; for (let t = 0; t < 30 * c.TAU; t += dt) E += c.pulse(t, fc, c.TAU) ** 2 * dt;
    close(c.Synth.energy(fc, c.TAU), E, 1e-4 * E, 'energy of one click');
    for (const r of [41, 220, 1000, 4186]) {
      let sum = 0; for (let m = 1; m * r < 24000; m++) sum += c.pulseSpec(m * r, fc, c.TAU) ** 2;
      const g = c.level(r, fc); close(2 * r * r * sum * g * g, 40 * E, 1e-3 * 40 * E, `power at ${r} hits/s`);
    }
    close(c.level(41, fc), 1, 0.03, 'no jump at 40 hits a second');
  }
});

group('Fourier lines of a click train: 2 a r |H(m r)|, the same as the DFT of the train', () => {
  const r = 220, a = 0.5, fc = 900, N = SR, x = new Float32Array(N), per = 1 / r;
  for (let i = 0; i < N; i++) { const t = i / SR; let v = 0; for (let k = Math.floor(t / per); t - k * per < 12 * c.TAU; k--) v += a * c.pulse(t - k * per, fc, c.TAU); x[i] = v; }
  for (const m of [1, 2, 4, 9]) close(dft(x, m * r), c.lineAmp(m, r, fc, c.TAU, a), 0.01 * c.lineAmp(m, r, fc, c.TAU, a), `harmonic ${m}`);
  close(dft(x, 1.5 * r), 0, 1e-4, 'nothing between the harmonics');
});

group('Synth, slow: 4 teeth at 0.5 turns a second gives 2 clicks a second, at the right times', () => {
  const x = run([4], 0.5, 4.2, { th: -0.02 }), starts = [];
  for (let i = 1; i < x.length; i++) if (Math.abs(x[i]) > 0.05 && Math.max(...Array.from(x.slice(Math.max(0, i - 2400), i)).map(Math.abs)) < 0.01) starts.push(i / SR);
  assert.strictEqual(starts.length, 9, `clicks in 4.2 s: ${starts.map((t) => t.toFixed(3))}`);
  starts.forEach((t, k) => close(t, 0.04 + 0.5 * k, 0.002, `click ${k}`));
});

group('Synth, fast: 4 teeth at 55 turns a second is a tone at 220 Hz with harmonics only at its multiples', () => {
  const x = run([4], 55, 1).slice(4800);
  const h1 = dft(x, 220); assert(h1 > 0.01, 'a strong 220 Hz line');
  for (const f of [55, 110, 165, 330, 550]) assert(dft(x, f) < 0.02 * h1, `nothing at ${f} Hz`);
  for (const m of [2, 3, 4]) assert(dft(x, 220 * m) > 0.2 * h1, `harmonic ${m}`);
  let pk = 0; for (const v of x) pk = Math.max(pk, Math.abs(v)); assert(pk < 0.95, 'under full scale');
});

group('Synth, chord: 4 : 5 : 6 at 55 turns a second has lines at 220, 275 and 330 Hz and repeats once a turn (55 Hz)', () => {
  const x = run([4, 5, 6], 55, 1).slice(4800);
  const a = dft(x, 220), b = dft(x, 275), d = dft(x, 330);
  for (const v of [a, b, d]) assert(v > 0.005, 'each note sounds');
  const per = SR / 55; let err = 0, ref = 0; for (let i = 0; i + 11 * per + 1 < x.length; i += 7) { err = Math.max(err, Math.abs(x[i + Math.round(per * 11)] - x[i])); ref = Math.max(ref, Math.abs(x[i])); }
  /* 11 turns are 9,600 samples exactly at 48 kHz, so the waveform must repeat to rounding */
  assert(err < 1e-3 * ref, `repeats every turn: ${err} of ${ref}`);
  let pk = 0; for (const v of x) pk = Math.max(pk, Math.abs(v)); assert(pk < 0.96, 'under full scale with three wheels');
});

group('Synth, top of the piano: 1 tooth at 4,186 turns a second is C8 at the same power as A3, and every wheel can reach it', () => {
  assert(c.RATE_MAX >= 4186.01 && c.RATE_MAX < 5000);
  const rms = (x) => Math.sqrt(x.reduce((a, v) => a + v * v, 0) / x.length);
  const lo = run([4], 55, 0.6).slice(4800), hi = run([1], 4186.009, 0.6).slice(4800);
  assert(dft(hi, 4186.009) > 0.5 * Math.sqrt(2) * rms(hi), 'mostly the fundamental');
  const db = 20 * Math.log10(rms(hi) / rms(lo)); assert(Math.abs(db) < 1, `C8 is ${db.toFixed(2)} dB from A3`);
  let pk = 0; for (const v of hi) pk = Math.max(pk, Math.abs(v)); assert(pk < 0.95, 'under full scale');
});

group('Song: four bars of four half second beats, chords I, IV, V, I at 1, 4/3, 3/2 and 1; bass and chord always on', () => {
  assert.deepStrictEqual(Array.from(c.SONG.bars, (b) => b.f), [1, 4 / 3, 3 / 2, 1]);
  const s0 = c.songAt(0); assert.deepStrictEqual([s0.bar, s0.beat, s0.chord, s0.mel], [0, 0, 'I', 10]); assert(s0.on.includes(10));
  const s1 = c.songAt(2.1); assert.deepStrictEqual([s1.bar, s1.beat, s1.chord], [1, 0, 'IV']);
  assert(!c.songAt(0.47).on.includes(10), 'the tune card lifts before the next beat');
  const r = c.songAt(7.6); assert.deepStrictEqual([r.bar, r.beat, r.mel], [3, 3, 0]); assert.deepStrictEqual(Array.from(r.on), [2, 4, 5, 6]);
  assert.strictEqual(c.songAt(8.1).bar, 0, 'loops after 8 s');
  /* at the top speed the song is in A: root 220 Hz, IV on D, V on E */
  for (const [bar, name] of [[0, 'A'], [1, 'D'], [2, 'E']]) assert.strictEqual(c.noteOf(4 * 55 * c.SONG.bars[bar].f).name, name);
});
