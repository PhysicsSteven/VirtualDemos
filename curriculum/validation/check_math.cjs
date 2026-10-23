// Math check for Markdown handouts and guides. Needs: npm install --no-save mathjax-full@3.2.2
//   node curriculum/validation/check_math.cjs curriculum/labs/students/*.md          (site handouts: $$...$$ only)
//   node curriculum/validation/check_math.cjs --github <TeacherKeys>/.../*.md       (GitHub files: $...$ inline, $$ display)
//   UNI=1 node ...   also lists lines that still carry Unicode math outside the math (for review, not failure).
// Typesets every expression with MathJax (TeX errors fail), flags single $ in site mode, | inside table math, unbalanced delimiters.
const fs = require('fs');
const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { SVG } = require('mathjax-full/js/output/svg.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');
const { AllPackages } = require('mathjax-full/js/input/tex/AllPackages.js');
const adaptor = liteAdaptor(); RegisterHTMLHandler(adaptor);
let err = null;
const tex = new TeX({ packages: AllPackages, formatError: (jax, e) => { err = e.message; return jax.formatError(e); } });
const doc = mathjax.document('', { InputJax: tex, OutputJax: new SVG() });
const UNI = /[²³⁴⁻⁺⁰¹₀₁₂₃ₓᵢₙ√×·−Δθωπλμρτσφαβγεη∝≈≤≥±∫∑ΣΩ]/;
const gh = process.argv.includes('--github');
let bad = 0, n = 0;
for (const f of process.argv.slice(2).filter((a) => a !== '--github')) {
  const s = fs.readFileSync(f, 'utf8'), lines = s.split('\n');
  const parts = s.split('$$');
  if (parts.length % 2 === 0) { console.log(`${f}: odd number of $$`); bad++; }
  const exprs = parts.filter((_, i) => i % 2);
  if (gh) for (let i = 0; i < parts.length; i += 2) {
    const q = parts[i].replace(/`[^`]*`/g, '').split(/(?<!\\)\$/);
    if (q.length % 2 === 0) { console.log(`${f}: odd number of single $ (outside $$)`); bad++; }
    for (let k = 1; k < q.length; k += 2) exprs.push(q[k]);
  }
  for (const e of exprs) {
    n++; err = null; doc.convert(e, { display: false });
    if (err) { console.log(`${f}: TeX error "${err}" in ${e}`); bad++; }
  }
  lines.forEach((L, k) => {
    const out = L.split('$$').filter((_, i) => i % 2 === 0).join(' ').replace(gh ? /\$[^$]*\$/g : /^\b$/, ' ');
    if (!gh && /(^|[^$\\])\$(?!\$)/.test(L.replace(/\$\$/g, ''))) { console.log(`${f}:${k + 1}: single $`); bad++; }
    if (L.trim().startsWith('|') && L.split('$$').some((p, i) => i % 2 && p.includes('|'))) { console.log(`${f}:${k + 1}: | inside table math`); bad++; }
    if (UNI.test(out) && process.env.UNI) console.log(`${f}:${k + 1}: unicode left: ${out.match(new RegExp(UNI.source, 'g')).join('')} :: ${L.slice(0, 140)}`);
  });
}
console.log(`${n} expressions, ${bad} problems`); process.exit(bad ? 1 : 0);
