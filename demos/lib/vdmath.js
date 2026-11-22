/* © 2026 Steven Anderson. All rights reserved. Not licensed for copying or reuse; terms at https://physicssteven.github.io/VirtualDemos/LICENSE.html
   VirtualDemos math library (demos/lib/vdmath.js; window.VDMATH, in Node globalThis.VDMATH), 2026-11-19, for the calculus demos.
   The small computer algebra system of Functions and Their Derivatives (demos/derivatives.html), made to take any number of
   variables. parse(text, { vars }) reads what a student types into an expression tree without ever running the text as code
   (implied multiplication, sin 2x, sin^2 x, |x|, pasted "dy/dt =", Unicode signs and superscripts, θ typed as theta or θ).
   The tree is built by simplifying constructors (like terms and factors combined, exact fractions kept), so
   derivative(tree, v) gives a readable partial derivative, subst(tree, v, value) puts in a value, compile(tree, vars) gives a
   fast numeric function, text(tree) prints the formula, and integral(f, a, b) is adaptive Simpson (NaN at a pole).
   Tests: curriculum/validation/test_vdmath.cjs. */
var VDMATH = (function () {
  'use strict';

  /* A small computer algebra system for one variable, runnable in Node (curriculum/validation/test_derivatives.cjs).
     parse(text) reads what a student types into an expression tree, without ever running the text as code. The tree is built
     through simplifying constructors (sums and products are flattened, like terms and like factors combined, numbers kept as
     exact fractions where they can be), so derivative(tree) applies the rules of calculus and stays readable. compile(tree)
     gives a fast function of x, text(tree) the formula as it is printed, and integral() the area by adaptive Simpson's rule. */
  const FN = {
    sin: Math.sin, cos: Math.cos, tan: Math.tan, sec: (u) => 1 / Math.cos(u), csc: (u) => 1 / Math.sin(u), cot: (u) => Math.cos(u) / Math.sin(u),
    asin: Math.asin, acos: Math.acos, atan: Math.atan, sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh,
    exp: Math.exp, ln: Math.log, log: Math.log10, abs: Math.abs, sign: Math.sign,
    fact: (u) => factorial(u),
  };
  /* n! for the series demo (typed as n! or fact(n)): exact products for whole numbers up to 170 (Infinity past that), Γ(u + 1) by
     Lanczos (g = 7, 9 terms, about 15 figures) between them, NaN at negative whole numbers. Added 2026-11-19. */
  const LANCZOS = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059,
    12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  function gamma(z) {
    if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
    z -= 1; let x = LANCZOS[0]; for (let i = 1; i < 9; i++) x += LANCZOS[i] / (z + i);
    const t = z + 7.5; return Math.sqrt(2 * Math.PI) * Math.pow(t, z + 0.5) * Math.exp(-t) * x;
  }
  function factorial(u) {
    if (u === Math.floor(u)) { if (u < 0) return NaN; if (u > 170) return Infinity; let p = 1; for (let k = 2; k <= u; k++) p *= k; return p; }
    return u < 0 && u === Math.round(u) ? NaN : gamma(u + 1);
  }
  const ALIAS = { arcsin: 'asin', arccos: 'acos', arctan: 'atan', sgn: 'sign', sqrt: 'sqrt', cbrt: 'cbrt', factorial: 'fact' };
  const INVERSE = { sin: 'asin', cos: 'acos', tan: 'atan' };
  const BASE = [...Object.keys(FN), ...Object.keys(ALIAS), 'pi', 'e'];
  const namesFor = (vars) => [...BASE, ...vars].sort((a, b) => b.length - a.length);
  const FNAMES = new Set([...Object.keys(FN), ...Object.keys(ALIAS)]);
  const PRINT = { asin: 'arcsin', acos: 'arccos', atan: 'arctan' };

  /* numbers: exact fractions p/q while they fit, else floats; dec marks a number that came from a decimal, so it prints as one */
  const gcd = (a, b) => { while (b) [a, b] = [b, a % b]; return a; };
  function rat(p, q, dec) {
    if (q < 0) { p = -p; q = -q; }
    if (!Number.isSafeInteger(p) || !Number.isSafeInteger(q) || q === 0 || Math.abs(p) > 1e15 || q > 1e15) return { k: 'n', v: p / q, dec: true };
    const g = gcd(Math.abs(p), q) || 1;
    return { k: 'n', v: p / g / (q / g), p: p / g, q: q / g, dec: !!dec };
  }
  const flt = (v) => (Number.isInteger(v) && Math.abs(v) < 1e15 ? rat(v, 1, true) : { k: 'n', v, dec: true });
  const exact = (a) => a.p !== undefined;
  const ONE = rat(1, 1), ZERO = rat(0, 1), MINUS1 = rat(-1, 1), TWO = rat(2, 1), HALF = rat(1, 2), THIRD = rat(1, 3);
  const nadd = (a, b) => (exact(a) && exact(b) ? rat(a.p * b.q + b.p * a.q, a.q * b.q, a.dec || b.dec) : flt(a.v + b.v));
  const nmul = (a, b) => (exact(a) && exact(b) ? rat(a.p * b.p, a.q * b.q, a.dec || b.dec) : flt(a.v * b.v));
  function npowInt(a, n) {
    if (!exact(a)) return flt(Math.pow(a.v, n));
    if (a.p === 0 && n < 0) return null;
    let r = ONE; for (let i = 0; i < Math.abs(n); i++) r = nmul(r, rat(a.p, a.q, a.dec));
    return n < 0 ? rat(r.q, r.p, r.dec) : r;
  }
  function numLit(s) {
    const v = parseFloat(s);
    if (/e/i.test(s)) return flt(v);
    const dot = s.indexOf('.');
    if (dot < 0) return Number.isSafeInteger(+s) ? rat(+s, 1) : flt(v);
    const frac = s.slice(dot + 1);
    if (frac.length > 9) return flt(v);
    return rat(parseInt((s.slice(0, dot) || '0') + frac, 10), Math.pow(10, frac.length), true);
  }
  const isNum = (a, v) => a.k === 'n' && (v === undefined || a.v === v);

  /* a canonical key, so like terms and like factors can be found whatever order they were typed in */
  function key(n) {
    switch (n.k) {
      case 'n': return exact(n) ? n.p + '/' + n.q : 'f' + n.v;
      case 'c': return n.name;
      case 'v': return 'v:' + n.n;
      case 'add': return '+(' + n.a.map(key).sort().join(',') + ')';
      case 'mul': return '*(' + n.a.map(key).sort().join(',') + ')';
      case 'pow': return '^(' + key(n.a) + ',' + key(n.b) + ')';
      case 'fn': return n.f + '(' + key(n.a) + ')';
    }
    return '?';
  }
  /* does n depend on the variable v (on any variable when v is left out) */
  const hasV = (n, v) => (n.k === 'v' ? v === undefined || n.n === v : n.k === 'add' || n.k === 'mul' ? n.a.some((m) => hasV(m, v)) : n.k === 'pow' ? hasV(n.a, v) || hasV(n.b, v) : n.k === 'fn' ? hasV(n.a, v) : false);
  const size = (n) => 1 + (n.k === 'add' || n.k === 'mul' ? n.a.reduce((s, m) => s + size(m), 0) : n.k === 'pow' ? size(n.a) + size(n.b) : n.k === 'fn' ? size(n.a) : 0);
  function degree(n) {   /* for ordering a sum: c·x^k sorts by k, highest first; numbers last */
    if (n.k === 'n') return -Infinity;
    if (n.k === 'mul' && n.a[0].k === 'n' && n.a.length === 2) n = n.a[1];
    if (n.k === 'v') return 1;
    if (n.k === 'pow' && n.a.k === 'v' && n.b.k === 'n') return n.b.v;
    return -1e9;
  }
  function rank(f) { return f.k === 'c' ? 0 : f.k === 'v' || (f.k === 'pow' && f.a.k === 'v') ? 1 : f.k === 'fn' || f.k === 'pow' ? 2 : 3; }

  function mkAdd(list) {
    const flat = [];
    for (const t of list) if (t.k === 'add') flat.push(...t.a); else flat.push(t);
    let c = ZERO; const groups = new Map(), order = [];
    for (const t of flat) {
      if (t.k === 'n') { c = nadd(c, t); continue; }
      let coef = ONE, rest = t;
      if (t.k === 'mul' && t.a[0].k === 'n') { coef = t.a[0]; rest = t.a.length === 2 ? t.a[1] : { k: 'mul', a: t.a.slice(1) }; }
      const k = key(rest);
      if (groups.has(k)) groups.get(k).coef = nadd(groups.get(k).coef, coef);
      else { groups.set(k, { coef, rest }); order.push(k); }
    }
    const out = [];
    for (const k of order) {
      const g = groups.get(k);
      if (g.coef.v === 0) continue;
      out.push(g.coef.v === 1 ? g.rest : { k: 'mul', a: [g.coef, ...(g.rest.k === 'mul' ? g.rest.a : [g.rest])] });
    }
    if (c.v !== 0) out.push(c);
    if (!out.length) return ZERO;
    if (out.length === 1) return out[0];
    out.sort((p, q) => { const dp = degree(p), dq = degree(q); return dp > -1e9 && dq > -1e9 ? dq - dp : dp === -Infinity ? 1 : dq === -Infinity ? -1 : 0; });
    return { k: 'add', a: out };
  }
  function mkMul(list) {
    const flat = [];
    for (const f of list) if (f.k === 'mul') flat.push(...f.a); else flat.push(f);
    let c = ONE; const groups = new Map(), order = [];
    for (const f of flat) {
      if (f.k === 'n') { c = nmul(c, f); continue; }
      const base = f.k === 'pow' ? f.a : f, ex = f.k === 'pow' ? f.b : ONE, k = key(base);
      if (groups.has(k)) groups.get(k).ex.push(ex);
      else { groups.set(k, { base, ex: [ex] }); order.push(k); }
    }
    /* 0 times 1/0 (typed 0/0) has no value; any other 0 times something is 0 (2026-11-22) */
    if (c.v === 0 && flat.some((f) => f.k === 'pow' && isNum(f.a, 0) && f.b.k === 'n' && f.b.v < 0)) return flt(NaN);
    if (c.v === 0 && isFinite(c.v)) return ZERO;
    const out = []; let again = false;
    for (const k of order) {
      const g = groups.get(k), f = mkPow(g.base, g.ex.length === 1 ? g.ex[0] : mkAdd(g.ex));
      if (f.k === 'n') c = nmul(c, f); else { if (f.k === 'mul') again = true; out.push(f); }
    }
    if (again) return mkMul([c, ...out]);
    if (!out.length) return c;
    out.sort((p, q) => rank(p) - rank(q));
    if (c.v === 1 && out.length === 1) return out[0];
    return { k: 'mul', a: c.v === 1 ? out : [c, ...out] };
  }
  function mkPow(a, b) {
    if (isNum(b, 0)) return ONE;
    if (isNum(b, 1)) return a;
    const intExp = b.k === 'n' && exact(b) && b.q === 1;
    if (a.k === 'n') {
      if (a.v === 1) return ONE;
      if (intExp && Math.abs(b.p) <= 64) { const r = npowInt(a, b.p); if (r) return r; }
      if (a.v === 0 && b.k === 'n' && b.v > 0) return ZERO;
    }
    if (a.k === 'c' && a.name === 'e') return mkFn('exp', b);
    if (a.k === 'fn' && a.f === 'exp') return mkFn('exp', mkMul([a.a, b]));
    if (a.k === 'pow' && intExp && a.b.k === 'n' && exact(a.b) && a.b.q === 1) return mkPow(a.a, mkMul([a.b, b]));
    if (a.k === 'mul' && intExp) return mkMul(a.a.map((f) => mkPow(f, b)));
    return { k: 'pow', a, b };
  }
  function mkFn(f, u) {
    f = ALIAS[f] || f;
    if (f === 'sqrt') return mkPow(u, HALF);
    if (f === 'cbrt') return mkPow(u, THIRD);
    if (isNum(u, 0)) {
      if (['sin', 'tan', 'asin', 'atan', 'sinh', 'tanh', 'abs', 'sign'].includes(f)) return ZERO;
      if (['cos', 'cosh', 'exp'].includes(f)) return ONE;
    }
    if (f === 'ln' && isNum(u, 1)) return ZERO;
    if (f === 'log' && isNum(u, 1)) return ZERO;
    if (f === 'log' && isNum(u, 10)) return ONE;
    if (f === 'ln' && u.k === 'c' && u.name === 'e') return ONE;
    if (f === 'ln' && u.k === 'fn' && u.f === 'exp') return u.a;
    if ((f === 'abs' || f === 'sign') && u.k === 'n') return flt(FN[f](u.v));
    return { k: 'fn', f, a: u };
  }
  const neg = (a) => mkMul([MINUS1, a]);
  const sub = (a, b) => mkAdd([a, neg(b)]);
  const div = (a, b) => mkMul([a, mkPow(b, MINUS1)]);

  /* d/dv by the rules: sum, product, power (with the general a^b case), chain; every other variable is held fixed (a partial
     derivative). v defaults to the only variable in n, else x. */
  function derivative(n, v) {
    if (v === undefined) v = firstVar(n) || 'x';
    const D = (m) => derivative(m, v);
    switch (n.k) {
      case 'n': case 'c': return ZERO;
      case 'v': return n.n === v ? ONE : ZERO;
      case 'add': return mkAdd(n.a.map(D));
      case 'mul': {
        const terms = [];
        n.a.forEach((f, i) => { const d = D(f); if (!isNum(d, 0)) terms.push(mkMul(n.a.map((g, j) => (j === i ? d : g)))); });
        return mkAdd(terms);
      }
      case 'pow': {
        const va = hasV(n.a, v), vb = hasV(n.b, v);
        if (!va && !vb) return ZERO;
        if (!vb) return mkMul([n.b, mkPow(n.a, mkAdd([n.b, MINUS1])), D(n.a)]);
        if (!va) return mkMul([n, mkFn('ln', n.a), D(n.b)]);
        return mkMul([n, mkAdd([mkMul([D(n.b), mkFn('ln', n.a)]), mkMul([n.b, D(n.a), mkPow(n.a, MINUS1)])])]);
      }
      case 'fn': {
        const du = D(n.a);
        return isNum(du, 0) ? ZERO : mkMul([outer(n.f, n.a), du]);
      }
    }
    return ZERO;
  }
  function outer(f, u) {
    const F = (g) => mkFn(g, u), sq = (a) => mkPow(a, TWO);
    switch (f) {
      case 'sin': return F('cos');
      case 'cos': return neg(F('sin'));
      case 'tan': return sq(F('sec'));
      case 'sec': return mkMul([F('sec'), F('tan')]);
      case 'csc': return neg(mkMul([F('csc'), F('cot')]));
      case 'cot': return neg(sq(F('csc')));
      case 'asin': return mkPow(sub(ONE, sq(u)), rat(-1, 2));
      case 'acos': return neg(mkPow(sub(ONE, sq(u)), rat(-1, 2)));
      case 'atan': return mkPow(mkAdd([ONE, sq(u)]), MINUS1);
      case 'sinh': return F('cosh');
      case 'cosh': return F('sinh');
      case 'tanh': return mkPow(F('cosh'), rat(-2, 1));
      case 'exp': return F('exp');
      case 'ln': return mkPow(u, MINUS1);
      case 'log': return mkPow(mkMul([u, mkFn('ln', rat(10, 1))]), MINUS1);
      case 'abs': return F('sign');
      case 'sign': return ZERO;
      case 'fact': return flt(NaN);   /* the slope of n! needs the digamma function: not by the basic rules */
    }
    return ZERO;
  }

  /* compile(tree, vars) gives a fast function of the variables, taken in the order of vars (default ['x'] or the tree's one
     variable): compile(parse('x^2 y', {vars:['x','y']}).node, ['x','y'])(2, 3) = 12. A variable not in vars gives NaN.
     One variable trees get f(x); more get f(a, b, ...). Inside, the values ride in one array. Also: an odd root of a negative number is real (x^(1/3), cbrt), an even root is not */
  function comp(n, ix) {
    const C = (m) => comp(m, ix);
    switch (n.k) {
      case 'n': { const v = n.v; return () => v; }
      case 'c': { const v = n.name === 'pi' ? Math.PI : Math.E; return () => v; }
      case 'v': { const j = ix[n.n]; return j === undefined ? () => NaN : (A) => A[j]; }
      case 'add': { const fs = n.a.map(C); return (A) => { let s = 0; for (let i = 0; i < fs.length; i++) s += fs[i](A); return s; }; }
      case 'mul': { const fs = n.a.map(C); return (A) => { let s = 1; for (let i = 0; i < fs.length; i++) s *= fs[i](A); return s; }; }
      case 'pow': {
        const fa = C(n.a), b = n.b;
        if (b.k === 'n') {
          const e = b.v;
          if (exact(b) && b.q % 2 === 1 && b.q !== 1) { const odd = Math.abs(b.p) % 2 === 1; return (A) => { const v = fa(A); return v < 0 ? (odd ? -1 : 1) * Math.pow(-v, e) : Math.pow(v, e); }; }
          if (e === 2) return (A) => { const v = fa(A); return v * v; };
          return (A) => Math.pow(fa(A), e);
        }
        const fb = C(b); return (A) => Math.pow(fa(A), fb(A));
      }
      case 'fn': { const g = FN[n.f], fa = C(n.a); return (A) => g(fa(A)); }
    }
    return () => NaN;
  }

  function compile(n, vars) {
    if (!Array.isArray(vars)) vars = [firstVar(n) || 'x'];   /* also when called as arr.map(compile) */
    const ix = {}; vars.forEach((v, i) => { ix[v] = i; });
    const f = comp(n, ix);
    if (vars.length === 1) { const A = [0]; return (x) => { A[0] = x; return f(A); }; }
    if (vars.length === 2) { const A = [0, 0]; return (a, b) => { A[0] = a; A[1] = b; return f(A); }; }
    if (vars.length === 3) { const A = [0, 0, 0]; return (a, b, c) => { A[0] = a; A[1] = b; A[2] = c; return f(A); }; }
    return function () { return f(Array.prototype.slice.call(arguments)); };
  }
  /* the variables a tree uses, in first appearance order */
  function varsOf(n, out) {
    out = out || [];
    if (n.k === 'v') { if (!out.includes(n.n)) out.push(n.n); } else if (n.k === 'add' || n.k === 'mul') n.a.forEach((m) => varsOf(m, out));
    else if (n.k === 'pow') { varsOf(n.a, out); varsOf(n.b, out); } else if (n.k === 'fn') varsOf(n.a, out);
    return out;
  }
  const firstVar = (n) => varsOf(n)[0];
  /* put a value (a number or another tree) in for a variable, simplifying as it goes */
  function subst(n, v, val) {
    if (typeof val === 'number') val = flt(val);
    switch (n.k) {
      case 'v': return n.n === v ? val : n;
      case 'add': return mkAdd(n.a.map((m) => subst(m, v, val)));
      case 'mul': return mkMul(n.a.map((m) => subst(m, v, val)));
      case 'pow': return mkPow(subst(n.a, v, val), subst(n.b, v, val));
      case 'fn': return mkFn(n.f, subst(n.a, v, val));
    }
    return n;
  }

  /* reading the box */
  const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', '-': '⁻' };
  const UNSUP = Object.fromEntries(Object.entries(SUP).map(([a, b]) => [b, a]));
  function clean(s) {
    s = String(s).replace(/[−–—]/g, '-').replace(/[×·⋅∙]/g, '*').replace(/÷/g, '/').replace(/\*\*/g, '^')
      .replace(/π/g, 'pi').replace(/√/g, 'sqrt').replace(/∛/g, 'cbrt').replace(/[[{]/g, '(').replace(/[\]}]/g, ')')
      .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+/g, (m) => '^(' + [...m].map((c) => UNSUP[c]).join('') + ')');
    /* a pasted left side goes: "y =", "f(x) =", "F(x, y) =", "dy/dt =", "y' =" */
    return s.replace(/^\s*(?:d[A-Za-z]+\s*\/\s*d[A-Za-z]+|[A-Za-z]\w*'*\s*(?:\(\s*[A-Za-z]+(?:\s*,\s*[A-Za-z]+)*\s*\))?)\s*=\s*/, '');
  }
  function perr(code, at, name) { const e = new Error(code); e.code = code; e.at = at; e.name2 = name; return e; }
  function tokenize(s, NAMES) {
    const toks = []; let i = 0;
    while (i < s.length) {
      const ch = s[i];
      if (/\s/.test(ch)) { i++; continue; }
      if (/[0-9.]/.test(ch)) {
        const m = /^(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i.exec(s.slice(i));
        if (!m) throw perr(i === s.length - 1 ? 'end' : 'char', i, ch);
        toks.push({ t: 'num', s: m[0], i }); i += m[0].length; continue;
      }
      if (/[A-Za-z]/.test(ch)) {
        const run = /^[A-Za-z]+/.exec(s.slice(i))[0];
        let j = 0;
        while (j < run.length) {
          const nm = NAMES.find((n) => run.startsWith(n, j));
          if (!nm) throw perr('name', i + j, run.slice(j));
          toks.push({ t: 'name', s: nm, i: i + j }); j += nm.length;
        }
        i += run.length; continue;
      }
      if ('+-*/^(),|!'.includes(ch)) { toks.push({ t: 'op', s: ch, i }); i++; continue; }
      throw perr('char', i, ch);
    }
    return toks;
  }
  function parseTokens(toks, len, vars) {
    const names = new Set(toks.filter((t) => t.t === 'name').map((t) => t.s));
    let v = null, VARS;
    if (!vars) {   /* one variable, x or t, as the derivatives grapher reads it */
      if (names.has('x') && names.has('t')) throw perr('twovars', toks.find((t) => t.s === 't').i);
      v = names.has('t') ? 't' : 'x'; VARS = new Set([v]);
    } else VARS = new Set(vars);
    let p = 0, absDepth = 0;
    const peek = () => toks[p], next = () => toks[p++];
    const isOp = (tk, s) => tk && tk.t === 'op' && tk.s === s;
    const fail = (tk) => (tk ? perr(tk.s === ')' ? 'close' : 'unexpected', tk.i, tk.s) : perr('end', len));
    const starts = (tk) => tk && (tk.t === 'num' || tk.t === 'name' || isOp(tk, '(') || (isOp(tk, '|') && absDepth === 0));
    function expr() {
      let a = term();
      for (;;) {
        const tk = peek();
        if (isOp(tk, '+')) { next(); a = mkAdd([a, term()]); } else if (isOp(tk, '-')) { next(); a = sub(a, term()); } else return a;
      }
    }
    function term() {
      let a = unary();
      for (;;) {
        const tk = peek();
        if (isOp(tk, '*')) { next(); a = mkMul([a, unary()]); } else if (isOp(tk, '/')) { next(); a = div(a, unary()); } else if (starts(tk)) a = mkMul([a, power()]); else return a;
      }
    }
    function unary() {
      const tk = peek();
      if (isOp(tk, '-')) { next(); return neg(unary()); }
      if (isOp(tk, '+')) { next(); return unary(); }
      return power();
    }
    function power() {
      let b = primary();
      while (isOp(peek(), '!')) { next(); b = mkFn('fact', b); }   /* n!, (2n)!: the factorial binds tighter than ^ */
      if (isOp(peek(), '^')) { next(); return mkPow(b, unary()); }
      return b;
    }
    function closeParen() { const tk = peek(); if (isOp(tk, ',')) throw perr('comma', tk.i); if (!isOp(tk, ')')) throw fail(tk); next(); }
    function tight() {   /* sin 2x, ln x: a function written without parentheses takes the product that follows it */
      if (isOp(peek(), '-')) { next(); return neg(tight()); }
      let a = power();
      while (peek() && (peek().t === 'num' || (peek().t === 'name' && !FNAMES.has(peek().s)))) a = mkMul([a, power()]);
      return a;
    }
    function primary() {
      const tk = next();
      if (!tk) throw perr('end', len);
      if (tk.t === 'num') return numLit(tk.s);
      if (isOp(tk, '(')) { const e = expr(); closeParen(); return e; }
      if (isOp(tk, '|')) {
        absDepth++; const e = expr(); absDepth--;
        if (!isOp(peek(), '|')) throw peek() ? fail(peek()) : perr('end', len);
        next(); return mkFn('abs', e);
      }
      if (tk.t === 'name') {
        if (tk.s === 'pi' || tk.s === 'e') return { k: 'c', name: tk.s };
        if (VARS.has(tk.s)) return { k: 'v', n: tk.s };
        if (!FNAMES.has(tk.s)) throw perr('name', tk.i, tk.s);
        let ex = null;
        if (isOp(peek(), '^')) { next(); ex = unary(); }
        let arg;
        if (isOp(peek(), '(')) { next(); arg = expr(); closeParen(); } else if (starts(peek()) || isOp(peek(), '-')) arg = tight(); else throw peek() ? perr('arg', tk.i, tk.s) : perr('end', len);
        if (ex && isNum(ex, -1) && INVERSE[tk.s]) return mkFn(INVERSE[tk.s], arg);
        const f = mkFn(tk.s, arg);
        return ex ? mkPow(f, ex) : f;
      }
      throw fail(tk);
    }
    if (!toks.length) throw perr('empty', 0);
    const node = expr();
    if (p < toks.length) throw fail(toks[p]);
    return { node, v: v || firstVar(node) || vars[0], vars: vars || [v] };
  }
  /* parse(text, { vars }): vars lists the variable names allowed (default: one variable, x or t). Greek names can be typed as
     words (theta) or letters (θ). A name that is neither a variable nor a function is an error ('name'). */
  const GREEK = { 'θ': 'theta', 'φ': 'phi', 'ω': 'omega', 'α': 'alpha', 'τ': 'tau', 'ρ': 'rho' };   /* ρ added 2026-11-19 for spherical coordinates */
  const greek = (s) => s.replace(/[θφωατρ]/g, (c) => GREEK[c]);
  function parse(src, o) {
    const vars = o && o.vars, s = greek(clean(src, o));
    return parseTokens(tokenize(s, namesFor(vars || ['x', 't'])), s.length, vars);
  }
  /* while typing: when the text simply stops early ("x^2 + ", "sin(x"), graph what is finished, closing open parentheses */
  function parseLive(src, o) {
    const vars = o && o.vars, s = greek(clean(src, o));
    if (!s.trim()) return { empty: true };
    let first;
    try { return Object.assign(parse(s, o), { partial: false }); } catch (e) { if (!e.code) throw e; first = e; }
    if (first.code !== 'end') return { error: first };
    let toks;
    try { toks = tokenize(s.replace(/\.\s*$/, ''), namesFor(vars || ['x', 't'])); } catch (e) { return { error: first }; }
    for (let drop = 0; drop <= 6 && drop < toks.length; drop++) {
      const t = toks.slice(0, toks.length - drop);
      let depth = 0, bars = 0;
      for (const tk of t) { if (tk.s === '(') depth++; else if (tk.s === ')') depth = Math.max(0, depth - 1); else if (tk.s === '|') bars++; }
      const fixed = t.concat(Array(depth).fill({ t: 'op', s: ')', i: s.length }), bars % 2 ? [{ t: 'op', s: '|', i: s.length }] : []);
      try { return Object.assign(parseTokens(fixed, s.length, vars), { partial: true, error: first }); } catch (e) { if (!e.code) throw e; }
    }
    return { error: first };
  }

  /* printing a formula: fractions over a slash, superscript whole powers, √ for square roots, implied multiplication after a number */
  const sup = (s) => [...String(s)].map((c) => SUP[c] || c).join('');
  function fmt(v) {
    if (!isFinite(v)) return isNaN(v) ? 'undefined' : v > 0 ? '∞' : '−∞';
    let s = String(Number(v.toPrecision(8)));
    if (s.includes('e')) { const [m, e] = s.split('e'); s = m + '×10' + sup(+e); }
    return s.replace('-', '−');
  }
  const numStr = (n) => (exact(n) && !n.dec ? (n.q === 1 ? String(n.p) : n.p + '/' + n.q) : fmt(n.v)).replace('-', '−');
  const isNeg = (t) => (t.k === 'n' && t.v < 0) || (t.k === 'mul' && t.a[0].k === 'n' && t.a[0].v < 0);
  const SHOW = { theta: 'θ', phi: 'φ', omega: 'ω', alpha: 'α', tau: 'τ', rho: 'ρ' };
  function text(node) {
    const wrap = (r, min) => (r[1] < min ? '(' + r[0] + ')' : r[0]);
    function join(coef, list) {
      let s = coef, onlyCoef = !!coef;
      for (const f of list) {
        const r = P(f), piece = r[1] <= 2 ? '(' + r[0] + ')' : r[0];
        if (!s) s = piece;
        else if (onlyCoef) s += /^[a-z]{2,}/.test(piece) ? ' ' + piece : /^[0-9.]/.test(piece) ? '·' + piece : piece;
        else s += '·' + piece;
        onlyCoef = false;
      }
      return { s, n: list.length + (coef ? 1 : 0) };
    }
    function P(n) {
      switch (n.k) {
        case 'n': { const s = numStr(n); return [s, n.v < 0 || s.includes('/') ? 2 : 4]; }
        case 'c': return [n.name === 'pi' ? 'π' : 'e', 4];
        case 'v': return [SHOW[n.n] || n.n, 4];
        case 'add': {
          let s = '';
          n.a.forEach((t, i) => { if (!i) s = P(t)[0]; else if (isNeg(t)) s += ' − ' + wrap(P(neg(t)), 2); else s += ' + ' + P(t)[0]; });
          return [s, 1];
        }
        case 'mul': {
          let c = n.a[0].k === 'n' ? n.a[0] : null, minus = false;
          const fs = c ? n.a.slice(1) : n.a;
          if (c && c.v < 0) { minus = true; c = nmul(c, MINUS1); }
          const num = [], den = [];
          for (const f of fs) if (f.k === 'pow' && f.b.k === 'n' && f.b.v < 0) den.push(mkPow(f.a, nmul(f.b, MINUS1))); else num.push(f);
          let cn = '', cd = '';
          if (c) { if (exact(c) && !c.dec && c.q !== 1) { cn = c.p === 1 ? '' : String(c.p); cd = String(c.q); } else if (c.v !== 1) cn = numStr(c); }
          const top = join(cn, num), bot = join(cd, den);
          let s = top.s || '1';
          if (bot.s) {
            const single = bot.n === 1;
            s += '/' + (single ? bot.s : '(' + bot.s + ')');
          }
          return [(minus ? '−' : '') + s, 2];
        }
        case 'pow': {
          const b = n.b;
          if (b.k === 'n' && b.v < 0) return P({ k: 'mul', a: [n] });
          if (b.k === 'n' && exact(b) && b.p === 1 && (b.q === 2 || b.q === 3)) return [(b.q === 2 ? '√' : '∛') + wrap(P(n.a), 4), 3];
          const base = wrap(P(n.a), 4);
          if (b.k === 'n' && exact(b) && b.q === 1 && !b.dec) return [base + sup(b.p), 3];
          return [base + '^' + wrap(P(b), 4), 3];
        }
        case 'fn': {
          if (n.f === 'exp') return ['e^' + wrap(P(n.a), 4), 3];
          if (n.f === 'abs') return ['|' + P(n.a)[0] + '|', 4];
          if (n.f === 'fact') return [wrap(P(n.a), 4) + '!', 4];
          return [(PRINT[n.f] || n.f) + '(' + P(n.a)[0] + ')', 4];
        }
      }
      return ['?', 4];
    }
    return P(node)[0];
  }

  /* the area under f from a to b by adaptive Simpson's rule; NaN where it does not converge (a pole such as 1/x at 0) */
  function simpson(f, a, b, fa, fm, fb, whole, eps, depth) {
    const m = (a + b) / 2, lm = (a + m) / 2, rm = (m + b) / 2, flm = f(lm), frm = f(rm);
    const left = (m - a) / 6 * (fa + 4 * flm + fm), right = (b - m) / 6 * (fm + 4 * frm + fb), s = left + right;
    if (!isFinite(s)) return NaN;
    if (Math.abs(s - whole) <= 15 * eps) return s + (s - whole) / 15;
    if (depth <= 0) {
      const big = Math.max(Math.abs(fa), Math.abs(fm), Math.abs(fb), Math.abs(flm), Math.abs(frm));
      return big * Math.abs(b - a) < 1e-7 * (1 + Math.abs(s)) ? s : NaN;
    }
    return simpson(f, a, m, fa, flm, fm, left, eps / 2, depth - 1) + simpson(f, m, b, fm, frm, fb, right, eps / 2, depth - 1);
  }
  function integral(f, a, b, scale) {
    if (a === b) return 0;
    const n = 16, h = (b - a) / n; let s = 0;
    const eps0 = 1e-10 * (1 + (scale || 0)) * Math.abs(b - a) / n;
    for (let i = 0; i < n && isFinite(s); i++) {
      const x0 = a + i * h, x1 = i === n - 1 ? b : x0 + h, xm = (x0 + x1) / 2, f0 = f(x0), fm = f(xm), f1 = f(x1);
      if (!isFinite(f0) || !isFinite(fm) || !isFinite(f1)) return NaN;
      s += simpson(f, x0, x1, f0, fm, f1, (x1 - x0) / 6 * (f0 + 4 * fm + f1), eps0, 40);
    }
    return s;
  }
  /* F(x_i) = ∫ from a to x_i of f for each grid point, outward from a; once it fails to converge it stays undefined beyond */
  function cumulative(f, xs, a, scale) {
    const F = new Float64Array(xs.length).fill(NaN);
    let k = 0; while (k < xs.length && xs[k] < a) k++;
    let prev = a, acc = 0;
    for (let i = k; i < xs.length && isFinite(acc); i++) { acc += integral(f, prev, xs[i], scale); prev = xs[i]; F[i] = acc; }
    prev = a; acc = 0;
    for (let i = k - 1; i >= 0 && isFinite(acc); i--) { acc += integral(f, prev, xs[i], scale); prev = xs[i]; F[i] = acc; }
    return F;
  }

  /* antiderivative(tree, v): one antiderivative by the basic rules (OpenStax Calculus Vol 1 5.4 and 5.5), with the constant 0:
     sums, constant multiples, powers u^k (k ≠ −1) and 1/u → ln|u|, e^u, a^u, sin, cos, tan, sinh, cosh, ln u and sec(u)², csc(u)²,
     where the inner u is linear in v (u = αv + β, so the substitution only divides by α). null when it needs more (integration
     by parts, a product of two functions of v, a quotient): the caller then integrates numerically. Added 2026-11-19 for
     Riemann Sums and Integrals; tested in test_vdmath.cjs. */
  function antiderivative(n, v) {
    if (v === undefined) v = firstVar(n) || 'x';
    const V = { k: 'v', n: v }, A = (m) => antiderivative(m, v);
    if (!hasV(n, v)) return mkMul([n, V]);
    const lin = (u) => { const d = derivative(u, v); return !hasV(d, v) && !isNum(d, 0) ? d : null; };
    switch (n.k) {
      case 'v': return mkMul([HALF, mkPow(V, TWO)]);
      case 'add': { const parts = n.a.map(A); return parts.some((q) => !q) ? null : mkAdd(parts); }
      case 'mul': {
        const c = n.a.filter((f) => !hasV(f, v)), r = n.a.filter((f) => hasV(f, v));
        if (r.length !== 1) return null;
        const q = A(r[0]); return q ? mkMul([...c, q]) : null;
      }
      case 'pow': {
        if (!hasV(n.b, v)) {
          if (n.a.k === 'fn' && isNum(n.b, 2) && (n.a.f === 'sec' || n.a.f === 'csc')) {
            const al = lin(n.a.a); if (!al) return null;
            return div(n.a.f === 'sec' ? mkFn('tan', n.a.a) : neg(mkFn('cot', n.a.a)), al);
          }
          const al = lin(n.a); if (!al) return null;
          if (isNum(n.b, -1)) return div(mkFn('ln', mkFn('abs', n.a)), al);
          const e1 = mkAdd([n.b, ONE]);
          return div(mkPow(n.a, e1), mkMul([al, e1]));
        }
        if (!hasV(n.a, v)) { const al = lin(n.b); return al ? div(n, mkMul([al, mkFn('ln', n.a)])) : null; }
        return null;
      }
      case 'fn': {
        const u = n.a, al = lin(u); if (!al) return null;
        const F = (g) => mkFn(g, u);
        const r = { sin: () => neg(F('cos')), cos: () => F('sin'), exp: () => F('exp'), sinh: () => F('cosh'), cosh: () => F('sinh'),
          tan: () => neg(mkFn('ln', mkFn('abs', F('cos')))), ln: () => sub(mkMul([u, F('ln')]), u) }[n.f];
        return r ? div(r(), al) : null;
      }
    }
    return null;
  }
    return { parse, parseLive, derivative, compile, subst, varsOf, hasV, text, fmt, sup, integral, cumulative, simpson,
    mkAdd, mkMul, mkPow, mkFn, num: flt, rat, ZERO, ONE, isNum, antiderivative };
})();
if (typeof window !== 'undefined') window.VDMATH = VDMATH;
