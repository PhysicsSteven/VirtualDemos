/* Known values for the break-it test (tools/breakit.cjs), rhythm-pitch. Hook: window.vdDemo (S, omEff, interval, noteOf, ...).
   Whatever the setup, speed or wheels: the axle speed stays inside 0.02 turns a second and the speed where the wheel with the most teeth hits 4,400 times a second, there are 1 to 8 wheels of 1 to 24 teeth,
   each wheel's readout says n × Ω hits a second (or Hz), and the 4 : 5 : 6 interval readout says 386.3 cents for the major third. */
const pre = `const D = window.vdDemo; if (!D) return true; const S = D.S;`;
module.exports = {
  checks: [
    { name: 'axle speed and wheels inside their ranges', fn: `(() => { ${pre}
      if (!(S.om >= 0.02 - 1e-12 && S.om * (S.song ? 1.5 : 1) <= 4400 / Math.max(...S.wheels.map((w) => w.n)) + 1e-9)) return 'axle speed ' + S.om;
      if (S.wheels.length < 1 || S.wheels.length > 8) return S.wheels.length + ' wheels';
      for (const w of S.wheels) if (!(w.n >= 1 && w.n <= 24 && Number.isInteger(w.n))) return 'a wheel with ' + w.n + ' teeth';
      return true; })()` },
    { name: 'each wheel reads n × Ω hits a second', fn: `(() => { ${pre} if (S.blind || S.glide) return true;   /* readouts refresh 5 times a second, so skip while the axle glides */
      const om = D.omEff(), rows = [...document.querySelectorAll('#out > div')];
      for (const w of S.wheels) { const r = w.n * om, row = rows.find((d) => new RegExp('Wheel, ' + w.n + ' teeth?$').test(d.querySelector('dt').textContent.trim()));
        if (!row) return 'no readout for the ' + w.n + ' tooth wheel';
        const got = parseFloat(row.querySelector('dd').textContent.replace(/,/g, ''));
        if (Math.abs(got - r) > 0.006 * r + 1e-9) return 'the ' + w.n + ' tooth wheel reads ' + got + ', should be ' + r; }
      return true; })()` },
    { name: '4 : 5 : 6 shows the 386.3 cent major third', fn: `(() => { ${pre}
      if (S.blind || S.song || S.preset !== 'major') return true;
      const row = [...document.querySelectorAll('#out > div')].find((d) => d.querySelector('dt').textContent.trim() === '4 to 5 teeth');
      if (!row) return 'no 4 to 5 readout'; return /386\\.3 cents/.test(row.querySelector('dd').textContent) ? true : row.querySelector('dd').textContent; })()` },
  ],
};
