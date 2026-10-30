'use strict';
// Worksheet formulas and curve fits (curriculum/labs/worksheet.js, between ==FORMULAS START== and ==FORMULAS END==): cell
// formulas against hand results, and every fit recovering known parameters from points made with them.
const assert = require('node:assert/strict');
const fs = require('fs'), path = require('path');
const src = fs.readFileSync(path.join(__dirname, '../labs/worksheet.js'), 'utf8');
const a = src.indexOf('/* ==FORMULAS START== */'), b = src.indexOf('/* ==FORMULAS END== */');
assert(a > 0 && b > a, 'formula block markers not found');
const WSF = new Function(src.slice(a, b) + '\nreturn WSF;')();
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const rel = (x, y, tol, msg) => assert(Math.abs(x - y) <= tol * Math.max(Math.abs(y), 1e-300), `${msg || ''} expected ${y}, got ${x}`);

/* a table as rows of raw text; returns what each cell shows */
const sheet = (rows) => {
  const calc = WSF.sheet((r, c) => (r >= 0 && r < rows.length && c >= 0 && c < rows[0].length ? rows[r][c] : undefined));
  return (name) => { const c = WSF.colIndex(name.match(/[A-Z]+/)[0]), r = +name.match(/\d+/)[0] - 1, x = calc(r, c); return x.err ? x.err.code : WSF.show(x.v); };
};

test('cell names and column letters', () => {
  assert.equal(WSF.colName(0), 'A'); assert.equal(WSF.colName(25), 'Z'); assert.equal(WSF.colName(26), 'AA'); assert.equal(WSF.colIndex('AB'), 27);
});
test('arithmetic, precedence, powers and the algebra sign rule (−2^2 = −4)', () => {
  const s = sheet([['2', '3', '=A1+B1*2', '=(A1+B1)*2', '=-2^2', '=2^3^2', '=A1/B1', '=2^-1', '=1.5e3*2', '=0.1+0.2']]);
  assert.deepEqual(['C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1'].map(s), ['8', '10', '-4', '512', '0.6666666667', '0.5', '3000', '0.3']);
});
test('pendulum: 4π²L/T² from a row, filled down', () => {
  const rows = [['0.5', '1.419', '=4*PI()^2*A1/B1^2'], ['1.0', '2.006', '']];
  rows[1][2] = WSF.shift(rows[0][2], 1, 0);
  assert.equal(rows[1][2], '=4*PI()^2*A2/B2^2');
  const s = sheet(rows);
  rel(+s('C1'), 4 * Math.PI ** 2 * 0.5 / 1.419 ** 2, 1e-9); rel(+s('C2'), 4 * Math.PI ** 2 * 1 / 2.006 ** 2, 1e-9);
});
test('fill down keeps $ names fixed and moves the others', () => {
  assert.equal(WSF.shift('=A1*$B$1+B$1+$C2+SUM(A1:A3)+LOG10(C1)', 2, 0), '=A3*$B$1+B$1+$C4+SUM(A3:A5)+LOG10(C3)');
});
test('ranges: SUM, AVERAGE, COUNT, MIN, MAX, MEDIAN, STDEV, STDEV.P skip text and empty cells', () => {
  const s = sheet([['2', '', '=SUM(A1:A5)', '=AVERAGE(A1:A5)', '=COUNT(A1:A5)', '=MEDIAN(A1:A5)', '=STDEV(A1:A5)', '=STDEV.P(A1:A5)', '=MIN(A1:A5)', '=MAX(A1:A5,10)'],
    ['4', '', '', '', '', '', '', '', '', ''], ['x', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''], ['9', '', '', '', '', '', '', '', '', '']]);
  assert.equal(s('C1'), '15'); assert.equal(s('D1'), '5'); assert.equal(s('E1'), '3'); assert.equal(s('F1'), '4');
  rel(+s('G1'), Math.sqrt(((2 - 5) ** 2 + (4 - 5) ** 2 + (9 - 5) ** 2) / 2), 1e-9); rel(+s('H1'), Math.sqrt(26 / 3), 1e-9);
  assert.equal(s('I1'), '2'); assert.equal(s('J1'), '10');
});
test('functions: SQRT, LN, LOG, trig in radians, ATAN2(x, y), ROUND halves away from zero', () => {
  const s = sheet([['=SQRT(2)', '=LN(EXP(1))', '=LOG(1000)', '=LOG(8,2)', '=SIN(RADIANS(30))', '=DEGREES(ATAN2(1,1))', '=ROUND(1.005,2)', '=ROUND(-2.5)', '=ROUND(1234.5,-2)', '=ABS(-3)']]);
  assert.deepEqual(['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1'].map(s), ['1.414213562', '1', '3', '3', '0.5', '45', '1.01', '-3', '1200', '3']);
});
test('empty cells: a formula that uses one is empty; a range with no numbers is empty except COUNT', () => {
  const s = sheet([['', '=A1*2', '=SUM(A1:A2)', '=COUNT(A1:A2)'], ['', '', '', '']]);
  assert.equal(s('B1'), ''); assert.equal(s('C1'), ''); assert.equal(s('D1'), '0');
});
test('errors: divide by zero, domain, text, outside the table, unknown function, syntax, loops', () => {
  const s = sheet([['=1/0', '=SQRT(-1)', 'abc', '=C1*2', '=Z9', '=FOO(1)', '=2+', '=I1+1', '=H1', '=LN(0)', '=A1+1']]);
  assert.deepEqual(['A1', 'B1', 'D1', 'E1', 'F1', 'G1', 'H1', 'J1', 'K1'].map(s), ['#DIV/0!', '#NUM!', '#VALUE!', '#REF!', '#NAME?', '#ERROR!', '#CIRC!', '#NUM!', '#DIV/0!']);
});
test('no eval: anything outside the grammar is refused', () => {
  const s = sheet([['=alert(1)', '=constructor', '="a"', '=A1;B1']]);
  assert.deepEqual(['A1', 'B1', 'C1', 'D1'].map(s), ['#NAME?', '#ERROR!', '#ERROR!', '#ERROR!']);
});

/* points from a known curve with a small fixed wobble, so the fit must land within a few of its own standard errors */
const pts = (f, x0, x1, N) => { const xs = [], ys = []; for (let i = 0; i < N; i++) { const x = x0 + (x1 - x0) * i / (N - 1); xs.push(x); ys.push(f(x) + 0.01 * Math.sin(12.9898 * i * i + 3)); } return [xs, ys]; };
const near = (fit, want, k) => want.forEach((w, i) => assert(Math.abs(fit.p[i] - w) <= Math.max(5 * fit.se[i], 1e-9) && Math.abs(fit.p[i] - w) <= k * Math.abs(w || 1),
  `${fit.kind} ${fit.names[i]}: expected ${w}, got ${fit.p[i]} ± ${fit.se[i]}`));
const CASES = [
  ['power', (x) => 1.5 * x ** 2.5, [1.5, 2.5], 0.2, 3, 30],
  ['exp', (x) => 1 + 4 * Math.exp(-x / 0.7), [4, 0.7, 1], 0, 3, 30],
  ['rise', (x) => 0.5 + 5 * (1 - Math.exp(-x / 1.3)), [5, 1.3, 0.5], 0, 6, 30],
  ['log', (x) => 2 + 3 * Math.log(x), [2, 3], 0.2, 5, 25],
  ['sine', (x) => 0.2 + 3 * Math.sin(2 * Math.PI * 1.7 * x + 1), [3, 1.7, 1, 0.2], 0, 3, 60],
  ['damped', (x) => 0.2 + 3 * Math.exp(-x / 1.5) * Math.sin(2 * Math.PI * 1.7 * x + 1), [3, 1.5, 1.7, 1, 0.2], 0, 3, 80],
  ['resonance', (x) => 2 / Math.sqrt((1 - (x / 5) ** 2) ** 2 + (x / (10 * 5)) ** 2), [2, 5, 10], 1, 9, 80],
  ['gauss', (x) => 0.3 + 4 * Math.exp(-(((x - 1.2) / 0.3) ** 2) / 2), [4, 1.2, 0.3, 0.3], 0, 3, 40],
  ['slit', (x) => { const u = Math.PI * (x - 0.2) / 0.8; return 0.1 + 5 * (u ? Math.sin(u) / u : 1) ** 2; }, [5, 0.2, 0.8, 0.1], -3, 3, 120],
];
CASES.forEach(([kind, f, want, x0, x1, N]) => test(`fit ${kind}: ${WSF.MODELS[kind].form} recovers its parameters`, () => {
  const [xs, ys] = pts(f, x0, x1, N), fit = WSF.fit(kind, xs, ys);
  assert(fit && !fit.bad, kind + ' did not fit'); near(fit, want, 0.02);
  assert.equal(fit.res.length, N); assert.equal(fit.npar, want.length);
}));
test('fit: capacitor charging, V = V₀(1 − e^(−t/RC)) with no noise, is exact', () => {
  const xs = [0, 1, 2, 3, 4, 5, 6, 8, 10], ys = xs.map((t) => 9 * (1 - Math.exp(-t / 2.2))), fit = WSF.fit('rise', xs, ys);
  rel(fit.p[0], 9, 1e-9); rel(fit.p[1], 2.2, 1e-9); assert.equal(fit.p[2], 0); assert(fit.exact);
});
test('fit: AC voltage at 60 Hz sampled every 1 ms', () => {
  const xs = Array.from({ length: 40 }, (_, i) => i * 1e-3), ys = xs.map((t) => 170 * Math.sin(2 * Math.PI * 60 * t - 0.4)), fit = WSF.fit('sine', xs, ys);
  rel(fit.p[0], 170, 1e-8); rel(fit.p[1], 60, 1e-8); rel(fit.p[2], -0.4, 1e-7);
});
test('fit: a growing exponential gives a negative τ', () => {
  const [xs, ys] = pts((x) => 2 + Math.exp(x / 0.8), 0, 3, 30), fit = WSF.fit('exp', xs, ys);
  near(fit, [1, -0.8, 2], 0.02);
});
test('fit: refuses x ≤ 0 for a power law or a logarithm, and too few distinct x', () => {
  assert.equal(WSF.fit('power', [0, 1, 2], [0, 1, 4]).bad, 'positive'); assert.equal(WSF.fit('log', [-1, 1, 2], [0, 1, 2]).bad, 'positive');
  assert.equal(WSF.fit('sine', [0, 1, 2, 2], [0, 1, 0, 0]).bad, 'few');
});
console.log(`${n} tests passed`);
