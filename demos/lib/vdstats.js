/* © 2026 Steven Anderson. All rights reserved. Not licensed for copying or reuse; terms at https://physicssteven.github.io/VirtualDemos/LICENSE.html
   VirtualDemos statistics library (demos/lib/vdstats.js; window.VDSTATS, in Node globalThis.VDSTATS), 2026-11-19, for the
   OpenStax Introductory Statistics demos. Runs in Node. Tests: curriculum/validation/test_vdstats.cjs (checked against the
   printed tables of the book and standard values).
   - rng(seed): seeded mulberry32 (same as measurement-uncertainty and radioactive-decay), with .normal(), .exp(rate),
     .poisson(mean), .binomial(n, p), .int(n), .shuffle(a).
   - Special functions: lgamma, gammaP / gammaQ (regularized incomplete gamma), betaI (regularized incomplete beta), erf.
   - Distributions: dist.<name>(params) returns { pdf | pmf, cdf, inv, mean, sd, discrete, lo, hi } for binomial, geometric
     (trials to first success, x = 1, 2, ...), hypergeometric, poisson, uniform, exponential, normal, t, chisq, f.
     inv(p) is the smallest x with cdf(x) >= p for discrete ones.
   - Describing data: mean, median, fiveNum (the book's quartiles: the median of each half, the TI method), quantile (the k-th
     percentile at position k(n + 1)/100, interpolated between neighbors; the book's 2.3 averages the two neighbors instead),
     percentileRank, sd (sample, n - 1), variance, iqrFences, skew.
   - Regression: linreg(x, y) gives slope, intercept, r, r2, s (standard error of estimate), SE of slope and intercept,
     t for r and its two sided p value, df = n - 2, and residuals.
   - Tests: tTest1, zTest1, propTest1, tTest2 (Welch, unpooled as the book does), zTest2s (two means, sigmas known), propTest2, pairedT, chisqGOF, chisqIndep,
     anova1, fTest2 (two variances), chisqVar (one variance). Each returns its statistic, df and p value (tail 'two', 'left' or 'right').
   - Intervals: zInterval, tInterval, propInterval (the book's normal approximation), plusFourInterval (8.3, added 2026-11-19). */
var VDSTATS = (function () {
  'use strict';

  /* ---------- random numbers ---------- */
  function rng(seed) {
    let a = (seed >>> 0) || 1;
    const u = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    let spare = null;
    u.normal = (mu = 0, sd = 1) => {
      if (spare !== null) { const z = spare; spare = null; return mu + sd * z; }
      let x, y, s; do { x = 2 * u() - 1; y = 2 * u() - 1; s = x * x + y * y; } while (s >= 1 || s === 0);
      const m = Math.sqrt(-2 * Math.log(s) / s); spare = y * m; return mu + sd * x * m;
    };
    u.exp = (rate) => -Math.log(1 - u()) / rate;
    u.int = (n) => Math.floor(u() * n);
    u.poisson = (mean) => {
      if (mean < 30) { const L = Math.exp(-mean); let k = 0, p = 1; do { k++; p *= u(); } while (p > L); return k - 1; }
      /* large mean: invert the exact cdf from the mode outward (exact, not an approximation) */
      const P = dist.poisson(mean); return P.inv(u());
    };
    u.binomial = (n, p) => { if (n <= 60) { let k = 0; for (let i = 0; i < n; i++) if (u() < p) k++; return k; } return dist.binomial(n, p).inv(u()); };
    u.shuffle = (arr) => { for (let i = arr.length - 1; i > 0; i--) { const j = u.int(i + 1); const t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; };
    return u;
  }

  /* ---------- special functions ---------- */
  const LG = [676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905,
    -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  function lgamma(x) {
    if (x < 0.5) return Math.log(Math.PI / Math.abs(Math.sin(Math.PI * x))) - lgamma(1 - x);
    x -= 1; let a = 0.99999999999980993; const t = x + 7.5;
    for (let i = 0; i < 8; i++) a += LG[i] / (x + i + 1);
    return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
  }
  const lchoose = (n, k) => lgamma(n + 1) - lgamma(k + 1) - lgamma(n - k + 1);
  /* regularized lower incomplete gamma P(a, x), series or continued fraction (Numerical Recipes 6.2) */
  function gammaP(a, x) {
    if (x <= 0) return 0;
    if (x < a + 1) {
      let ap = a, sum = 1 / a, del = sum;
      for (let n = 0; n < 1000; n++) { ap++; del *= x / ap; sum += del; if (Math.abs(del) < Math.abs(sum) * 1e-15) break; }
      return sum * Math.exp(-x + a * Math.log(x) - lgamma(a));
    }
    return 1 - gammaQcf(a, x);
  }
  function gammaQcf(a, x) {
    const FP = 1e-300; let b = x + 1 - a, c = 1 / FP, d = 1 / b, h = d;
    for (let i = 1; i < 1000; i++) {
      const an = -i * (i - a); b += 2; d = an * d + b; if (Math.abs(d) < FP) d = FP; c = b + an / c; if (Math.abs(c) < FP) c = FP;
      d = 1 / d; const del = d * c; h *= del; if (Math.abs(del - 1) < 1e-15) break;
    }
    return Math.exp(-x + a * Math.log(x) - lgamma(a)) * h;
  }
  const gammaQ = (a, x) => (x <= 0 ? 1 : x < a + 1 ? 1 - gammaP(a, x) : gammaQcf(a, x));
  /* regularized incomplete beta I_x(a, b) (Numerical Recipes 6.4) */
  function betacf(a, b, x) {
    const FP = 1e-300; const qab = a + b, qap = a + 1, qam = a - 1; let c = 1, d = 1 - qab * x / qap;
    if (Math.abs(d) < FP) d = FP; d = 1 / d; let h = d;
    for (let m = 1; m < 1000; m++) {
      const m2 = 2 * m; let aa = m * (b - m) * x / ((qam + m2) * (a + m2));
      d = 1 + aa * d; if (Math.abs(d) < FP) d = FP; c = 1 + aa / c; if (Math.abs(c) < FP) c = FP; d = 1 / d; h *= d * c;
      aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
      d = 1 + aa * d; if (Math.abs(d) < FP) d = FP; c = 1 + aa / c; if (Math.abs(c) < FP) c = FP; d = 1 / d;
      const del = d * c; h *= del; if (Math.abs(del - 1) < 1e-15) break;
    }
    return h;
  }
  function betaI(x, a, b) {
    if (x <= 0) return 0; if (x >= 1) return 1;
    const bt = Math.exp(lgamma(a + b) - lgamma(a) - lgamma(b) + a * Math.log(x) + b * Math.log(1 - x));
    return x < (a + 1) / (a + b + 2) ? bt * betacf(a, b, x) / a : 1 - bt * betacf(b, a, 1 - x) / b;
  }
  const erf = (x) => (x >= 0 ? gammaP(0.5, x * x) : -gammaP(0.5, x * x));

  /* invert a continuous cdf by bracketing and bisection (to 1e-12 relative) */
  function invert(cdf, p, lo, hi) {
    if (p <= 0) return lo; if (p >= 1) return hi;
    let a = lo, b = hi;
    if (!isFinite(a)) { a = -1; while (cdf(a) > p) a *= 2; }
    if (!isFinite(b)) { b = 1; while (cdf(b) < p) b *= 2; }
    for (let i = 0; i < 200; i++) { const m = (a + b) / 2; if (cdf(m) < p) a = m; else b = m; if (b - a < 1e-12 * Math.abs(m) + 1e-16) break; } /* relative, so small quantiles (chi-square 1 df at 0.005) keep their digits */
    return (a + b) / 2;
  }
  function discreteInv(cdf, p, lo, hi) { let k = lo; while (k < hi && cdf(k) < p - 1e-12) k++; return k; }

  /* ---------- distributions ---------- */
  const dist = {
    binomial(n, p) {
      const pmf = (k) => (k < 0 || k > n || k !== Math.floor(k) ? 0 : p === 0 ? (k === 0 ? 1 : 0) : p === 1 ? (k === n ? 1 : 0) : Math.exp(lchoose(n, k) + k * Math.log(p) + (n - k) * Math.log(1 - p)));
      const cdf = (k) => (k < 0 ? 0 : k >= n ? 1 : 1 - betaI(p, Math.floor(k) + 1, n - Math.floor(k)));
      return { discrete: true, pmf, cdf, inv: (q) => discreteInv(cdf, q, 0, n), mean: n * p, sd: Math.sqrt(n * p * (1 - p)), lo: 0, hi: n };
    },
    geometric(p) { /* number of trials up to and including the first success */
      const pmf = (k) => (k < 1 || k !== Math.floor(k) ? 0 : Math.pow(1 - p, k - 1) * p);
      const cdf = (k) => (k < 1 ? 0 : 1 - Math.pow(1 - p, Math.floor(k)));
      return { discrete: true, pmf, cdf, inv: (q) => Math.max(1, Math.ceil(Math.log(1 - q) / Math.log(1 - p) - 1e-12)), mean: 1 / p, sd: Math.sqrt(1 - p) / p, lo: 1, hi: Infinity };
    },
    hypergeometric(N, K, n) { /* population N with K successes, n drawn without replacement */
      const lo = Math.max(0, n - (N - K)), hi = Math.min(n, K);
      const pmf = (k) => (k < lo || k > hi || k !== Math.floor(k) ? 0 : Math.exp(lchoose(K, k) + lchoose(N - K, n - k) - lchoose(N, n)));
      const cdf = (k) => { let s = 0; for (let i = lo; i <= Math.min(hi, Math.floor(k)); i++) s += pmf(i); return Math.min(1, s); };
      const mean = n * K / N;
      return { discrete: true, pmf, cdf, inv: (q) => discreteInv(cdf, q, lo, hi), mean, sd: Math.sqrt(mean * (1 - K / N) * (N - n) / (N - 1)), lo, hi };
    },
    poisson(m) {
      const pmf = (k) => (k < 0 || k !== Math.floor(k) ? 0 : Math.exp(k * Math.log(m) - m - lgamma(k + 1)));
      const cdf = (k) => (k < 0 ? 0 : gammaQ(Math.floor(k) + 1, m));
      return { discrete: true, pmf, cdf, inv: (q) => discreteInv(cdf, q, 0, Math.ceil(m + 40 * Math.sqrt(m) + 40)), mean: m, sd: Math.sqrt(m), lo: 0, hi: Infinity };
    },
    uniform(a, b) {
      return { pdf: (x) => (x < a || x > b ? 0 : 1 / (b - a)), cdf: (x) => (x <= a ? 0 : x >= b ? 1 : (x - a) / (b - a)), inv: (q) => a + q * (b - a),
        mean: (a + b) / 2, sd: (b - a) / Math.sqrt(12), lo: a, hi: b };
    },
    exponential(rate) {
      return { pdf: (x) => (x < 0 ? 0 : rate * Math.exp(-rate * x)), cdf: (x) => (x <= 0 ? 0 : 1 - Math.exp(-rate * x)), inv: (q) => -Math.log(1 - q) / rate,
        mean: 1 / rate, sd: 1 / rate, lo: 0, hi: Infinity };
    },
    normal(mu = 0, s = 1) {
      const cdf = (x) => { const z = (x - mu) / (s * Math.SQRT2); return z < 0 ? 0.5 * gammaQ(0.5, z * z) : 1 - 0.5 * gammaQ(0.5, z * z); }; /* lower tail kept to full relative precision */
      return { pdf: (x) => Math.exp(-0.5 * ((x - mu) / s) ** 2) / (s * Math.sqrt(2 * Math.PI)), cdf, inv: (q) => invert(cdf, q, -Infinity, Infinity),
        mean: mu, sd: s, lo: -Infinity, hi: Infinity };
    },
    t(df) {
      /* near x = 0 the form in x² / (df + x²) keeps full precision (the other form loses it to 1 − ε, so the median came out at −2e−7) */
      const cdf = (x) => { const x2 = x * x;
        if (x2 < df) { const h = betaI(x2 / (df + x2), 0.5, df / 2) / 2; return x >= 0 ? 0.5 + h : 0.5 - h; }
        const ib = betaI(df / (df + x2), df / 2, 0.5); return x >= 0 ? 1 - ib / 2 : ib / 2; };
      const lc = lgamma((df + 1) / 2) - lgamma(df / 2) - 0.5 * Math.log(df * Math.PI);
      return { pdf: (x) => Math.exp(lc - (df + 1) / 2 * Math.log(1 + x * x / df)), cdf, inv: (q) => invert(cdf, q, -Infinity, Infinity),
        mean: df > 1 ? 0 : NaN, sd: df > 2 ? Math.sqrt(df / (df - 2)) : Infinity, lo: -Infinity, hi: Infinity };
    },
    chisq(df) {
      const cdf = (x) => gammaP(df / 2, x / 2);
      return { pdf: (x) => (x < 0 ? 0 : x === 0 ? (df === 2 ? 0.5 : df < 2 ? Infinity : 0) : Math.exp((df / 2 - 1) * Math.log(x) - x / 2 - (df / 2) * Math.LN2 - lgamma(df / 2))),
        cdf, inv: (q) => invert(cdf, q, 0, Infinity), mean: df, sd: Math.sqrt(2 * df), lo: 0, hi: Infinity };
    },
    f(d1, d2) {
      const cdf = (x) => (x <= 0 ? 0 : betaI(d1 * x / (d1 * x + d2), d1 / 2, d2 / 2));
      const lc = lgamma((d1 + d2) / 2) - lgamma(d1 / 2) - lgamma(d2 / 2) + (d1 / 2) * Math.log(d1 / d2);
      return { pdf: (x) => (x <= 0 ? 0 : Math.exp(lc + (d1 / 2 - 1) * Math.log(x) - (d1 + d2) / 2 * Math.log(1 + d1 * x / d2))),
        cdf, inv: (q) => invert(cdf, q, 0, Infinity), mean: d2 > 2 ? d2 / (d2 - 2) : NaN,
        sd: d2 > 4 ? Math.sqrt(2 * d2 * d2 * (d1 + d2 - 2) / (d1 * (d2 - 2) ** 2 * (d2 - 4))) : NaN, lo: 0, hi: Infinity };
    },
  };
  /* p value from a cdf for an observed statistic */
  function pval(D, x, tail = 'two') {
    if (tail === 'left') return D.cdf(x);
    if (tail === 'right') return 1 - D.cdf(x);
    const c = D.cdf(x); return Math.min(1, 2 * Math.min(c, 1 - c));
  }

  /* ---------- describing data ---------- */
  const sum = (a) => a.reduce((s, v) => s + v, 0);
  const mean = (a) => sum(a) / a.length;
  const sorted = (a) => a.slice().sort((x, y) => x - y);
  function median(a) { const s = sorted(a), n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; }
  function variance(a) { const m = mean(a); return a.reduce((s, v) => s + (v - m) ** 2, 0) / (a.length - 1); }
  const sd = (a) => Math.sqrt(variance(a));
  /* the book's quartiles (Introductory Statistics 2.3): Q1 and Q3 are the medians of the lower and upper halves, the middle
     value left out of both halves when n is odd (the TI-83/84 method) */
  function fiveNum(a) {
    const s = sorted(a), n = s.length, h = Math.floor(n / 2);
    const lower = s.slice(0, h), upper = s.slice(n % 2 ? h + 1 : h);
    return { min: s[0], q1: n > 1 ? median(lower) : s[0], med: median(s), q3: n > 1 ? median(upper) : s[0], max: s[n - 1] };
  }
  /* the k-th percentile: position i = k (n + 1) / 100 as in the book (2.3), interpolated between ordered values (the book itself
     averages the values at the two positions next to i when i is not whole, Example 2.16: i = 24.9 gives their average) */
  function quantile(a, k) {
    const s = sorted(a), n = s.length, i = k * (n + 1) / 100;
    if (i <= 1) return s[0]; if (i >= n) return s[n - 1];
    const lo = Math.floor(i); return s[lo - 1] + (i - lo) * (s[lo] - s[lo - 1]);
  }
  /* percentile of a value by the book's formula (x + 0.5 y) / n × 100: x values below, y values equal */
  function percentileRank(a, v) { let x = 0, y = 0; for (const u of a) { if (u < v) x++; else if (u === v) y++; } return (x + 0.5 * y) / a.length * 100; }
  function iqrFences(a) { const f = fiveNum(a), iqr = f.q3 - f.q1; return { iqr, lo: f.q1 - 1.5 * iqr, hi: f.q3 + 1.5 * iqr }; }
  /* sample skewness, the adjusted Fisher-Pearson coefficient (what spreadsheets call SKEW) */
  function skew(a) { const n = a.length, m = mean(a), s = sd(a); return n < 3 ? 0 : n / ((n - 1) * (n - 2)) * a.reduce((t, v) => t + ((v - m) / s) ** 3, 0); }

  /* ---------- regression ---------- */
  function linreg(x, y) {
    const n = x.length, mx = mean(x), my = mean(y);
    let sxx = 0, syy = 0, sxy = 0;
    for (let i = 0; i < n; i++) { sxx += (x[i] - mx) ** 2; syy += (y[i] - my) ** 2; sxy += (x[i] - mx) * (y[i] - my); }
    const b = sxy / sxx, a = my - b * mx, r = sxy / Math.sqrt(sxx * syy);
    const res = y.map((v, i) => v - (a + b * x[i])), sse = sum(res.map((e) => e * e)), df = n - 2;
    const s = df > 0 ? Math.sqrt(sse / df) : NaN;
    const seB = s / Math.sqrt(sxx), seA = s * Math.sqrt(1 / n + mx * mx / sxx);
    const t = r * Math.sqrt(df / (1 - r * r));
    return { n, slope: b, intercept: a, r, r2: r * r, s, sse, seSlope: seB, seIntercept: seA, df, t, p: df > 0 ? pval(dist.t(df), t) : NaN,
      mx, my, sxx, residuals: res, predict: (v) => a + b * v };
  }

  /* ---------- tests and intervals ---------- */
  function zTest1(xbar, mu0, sigma, n, tail) { const z = (xbar - mu0) / (sigma / Math.sqrt(n)); return { z, p: pval(dist.normal(), z, tail) }; }
  function tTest1(data, mu0, tail) { const n = data.length, m = mean(data), s = sd(data), t = (m - mu0) / (s / Math.sqrt(n)); return { mean: m, sd: s, t, df: n - 1, p: pval(dist.t(n - 1), t, tail) }; }
  function tTest1s(xbar, s, n, mu0, tail) { const t = (xbar - mu0) / (s / Math.sqrt(n)); return { t, df: n - 1, p: pval(dist.t(n - 1), t, tail) }; }
  function propTest1(x, n, p0, tail) { const ph = x / n, z = (ph - p0) / Math.sqrt(p0 * (1 - p0) / n); return { phat: ph, z, p: pval(dist.normal(), z, tail) }; }
  /* two means, population sigmas unknown and not pooled; Welch-Satterthwaite df as the book uses (10.1) */
  function tTest2s(m1, s1, n1, m2, s2, n2, tail) {
    const v1 = s1 * s1 / n1, v2 = s2 * s2 / n2, se = Math.sqrt(v1 + v2), t = (m1 - m2) / se;
    const df = (v1 + v2) ** 2 / (v1 * v1 / (n1 - 1) + v2 * v2 / (n2 - 1));
    return { t, df, se, p: pval(dist.t(df), t, tail) };
  }
  const tTest2 = (a, b, tail) => tTest2s(mean(a), sd(a), a.length, mean(b), sd(b), b.length, tail);
  /* two means, population sigmas known (10.2): z = ((x̄1 − x̄2) − d0) / √(σ1²/n1 + σ2²/n2), d0 the hypothesized difference */
  function zTest2s(m1, sig1, n1, m2, sig2, n2, tail, d0 = 0) {
    const se = Math.sqrt(sig1 * sig1 / n1 + sig2 * sig2 / n2), z = (m1 - m2 - d0) / se;
    return { z, se, p: pval(dist.normal(), z, tail) };
  }
  function propTest2(x1, n1, x2, n2, tail) {
    const pc = (x1 + x2) / (n1 + n2), z = (x1 / n1 - x2 / n2) / Math.sqrt(pc * (1 - pc) * (1 / n1 + 1 / n2));
    return { pooled: pc, z, p: pval(dist.normal(), z, tail) };
  }
  function pairedT(a, b, tail) { return tTest1(a.map((v, i) => v - b[i]), 0, tail); }
  function chisqGOF(obs, exp) {
    let c = 0; const cells = obs.map((o, i) => { const e = exp[i], k = (o - e) ** 2 / e; c += k; return k; });
    const df = obs.length - 1; return { chi2: c, df, cells, p: 1 - dist.chisq(df).cdf(c) };
  }
  function chisqIndep(table) {
    const R = table.length, C = table[0].length, rs = table.map(sum), cs = table[0].map((_, j) => sum(table.map((r) => r[j]))), N = sum(rs);
    const exp = table.map((r, i) => r.map((_, j) => rs[i] * cs[j] / N)); let c = 0;
    table.forEach((r, i) => r.forEach((o, j) => { c += (o - exp[i][j]) ** 2 / exp[i][j]; }));
    const df = (R - 1) * (C - 1); return { chi2: c, df, expected: exp, p: 1 - dist.chisq(df).cdf(c) };
  }
  function anova1(groups) {
    const all = groups.flat(), N = all.length, k = groups.length, gm = mean(all);
    const ssb = sum(groups.map((g) => g.length * (mean(g) - gm) ** 2)), ssw = sum(groups.map((g) => { const m = mean(g); return sum(g.map((v) => (v - m) ** 2)); }));
    const dfb = k - 1, dfw = N - k, msb = ssb / dfb, msw = ssw / dfw, F = msb / msw;
    return { ssb, ssw, dfb, dfw, msb, msw, F, p: 1 - dist.f(dfb, dfw).cdf(F) };
  }
  function fTest2(a, b, tail = 'two') { const F = variance(a) / variance(b), d1 = a.length - 1, d2 = b.length - 1; return { F, d1, d2, p: pval(dist.f(d1, d2), F, tail) }; }
  /* test of a single variance (Introductory Statistics 11.6): chi2 = (n - 1) s^2 / sigma0^2 with n - 1 df */
  function chisqVar(s, n, sigma0, tail = 'right') { const c = (n - 1) * s * s / (sigma0 * sigma0), df = n - 1; return { chi2: c, df, p: pval(dist.chisq(df), c, tail) }; }
  function zInterval(xbar, sigma, n, cl) { const z = dist.normal().inv(1 - (1 - cl) / 2), E = z * sigma / Math.sqrt(n); return { lo: xbar - E, hi: xbar + E, E, crit: z }; }
  function tInterval(xbar, s, n, cl) { const t = dist.t(n - 1).inv(1 - (1 - cl) / 2), E = t * s / Math.sqrt(n); return { lo: xbar - E, hi: xbar + E, E, crit: t }; }
  function propInterval(x, n, cl) { const ph = x / n, z = dist.normal().inv(1 - (1 - cl) / 2), E = z * Math.sqrt(ph * (1 - ph) / n); return { lo: ph - E, hi: ph + E, E, crit: z, phat: ph }; }
  /* the book's "plus four" interval for a proportion (8.3): add two successes and two failures, p′ = (x + 2)/(n + 4), then the
     same normal approximation with n + 4 (the book uses it for confidence levels of 90 % or more and n of 10 or more) */
  const plusFourInterval = (x, n, cl) => propInterval(x + 2, n + 4, cl);

  /* bin values into a histogram: edges from lo by width; returns counts and edges */
  function histogram(a, lo, width, nbins) { const c = new Array(nbins).fill(0); for (const v of a) { const i = Math.floor((v - lo) / width); if (i >= 0 && i < nbins) c[i]++; else if (i === nbins && v === lo + nbins * width) c[nbins - 1]++; } return { counts: c, edges: Array.from({ length: nbins + 1 }, (_, i) => lo + i * width) }; }

  return { rng, lgamma, lchoose, gammaP, gammaQ, betaI, erf, invert, dist, pval, sum, mean, median, variance, sd, sorted, fiveNum,
    quantile, percentileRank, iqrFences, skew, linreg, zTest1, tTest1, tTest1s, propTest1, tTest2, tTest2s, zTest2s, propTest2, pairedT,
    chisqGOF, chisqIndep, chisqVar, anova1, fTest2, zInterval, tInterval, propInterval, histogram, plusFourInterval };
})();
if (typeof window !== 'undefined') window.VDSTATS = VDSTATS;
if (typeof globalThis !== 'undefined') globalThis.VDSTATS = VDSTATS;
