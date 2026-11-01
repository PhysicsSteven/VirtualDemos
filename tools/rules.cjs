#!/usr/bin/env node
/* House rules as checks (Steve, 2026-11-01): the written rules in CLAUDE.md that a script can test, so they hold without anyone
   having to remember them. Fast (a few seconds), no browser, no packages. Run before every commit:

     node tools/rules.cjs                      every rule on the working tree
     node tools/rules.cjs --keys ../teacherkeys  also look for key answers copied into this repo (needs a TeacherKeys clone)
     node tools/rules.cjs --only hyphens,optional
     node tools/rules.cjs --list               the rules and what each one reads

   Exit 1 when anything fails. Every failure prints file:line and the text. The .githooks/pre-commit hook and the House rules
   workflow run it. To allow a real exception, add it to the ALLOW list of that rule below with the reason, never a blanket skip.

   Student facing text means what a student or TA reads on the site: the English strings harvested from every page
   (demos/lib/i18n/en/, see demos/lib/i18n.md), the worksheets (curriculum/labs/students/*.md), the teaching notes
   (notes/src/*.md) and the What's new entries (whats-new.js). Code, file names, links and math are left out. */
'use strict';
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const opt = (k) => { const i = args.indexOf(k); return i < 0 ? null : args[i + 1]; };
const ONLY = opt('--only') ? new Set(opt('--only').split(',')) : null, KEYS = opt('--keys');
const rel = (p) => path.relative(ROOT, p);
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const tracked = execFileSync('git', ['ls-files', '-z'], { cwd: ROOT, encoding: 'utf8' }).split('\0').filter(Boolean)
  .filter((f) => fs.existsSync(path.join(ROOT, f)));

/* ---------- student facing text, as [file, line, text] ---------- */
const DEMOS = fs.readdirSync(path.join(ROOT, 'demos')).filter((f) => f.endsWith('.html')).map((f) => f.slice(0, -5));
const SHEETS = fs.readdirSync(path.join(ROOT, 'curriculum/labs/students')).filter((f) => f.endsWith('.md')).map((f) => f.slice(0, -3));
const SLUGS = new Set([...DEMOS, ...SHEETS]);
function catalogs() {
  const out = [], walk = (d) => { for (const f of fs.readdirSync(path.join(ROOT, d))) {
    const p = d + '/' + f; if (fs.statSync(path.join(ROOT, p)).isDirectory()) walk(p); else if (f.endsWith('.js')) {
      const src = read(p), lines = src.split('\n');
      let arr = null; const VDI18N = { add: (_l, _p, a) => { arr = a; } };
      try { new Function('VDI18N', src)(VDI18N); } catch (e) { out.push([p, 1, null, 'cannot read: ' + e.message]); continue; }
      for (const s of arr || []) { const i = lines.findIndex((l) => l.includes(JSON.stringify(s).slice(1, 40))); out.push([p, i + 1, String(s)]); }
    } } };
  walk('demos/lib/i18n/en');
  return out;
}
function markdown(dir) {
  const out = [];
  for (const f of fs.readdirSync(path.join(ROOT, dir)).filter((f) => f.endsWith('.md'))) {
    let t = read(dir + '/' + f);
    t = t.replace(/^---\n[\s\S]*?\n---\n/, (m) => m.replace(/[^\n]/g, ''))         /* front matter */
      .replace(/```[\s\S]*?```/g, (m) => m.replace(/[^\n]/g, ' '))
      .replace(/\$\$[\s\S]*?\$\$/g, (m) => m.replace(/[^\n]/g, ' '));               /* display math, kept line count */
    t.split('\n').forEach((l, i) => out.push([dir + '/' + f, i + 1, l]));
  }
  return out;
}
function whatsNew() {
  const src = read('whats-new.js'), lines = src.split('\n'), window = {};
  const document = { readyState: 'loading', addEventListener() {} };
  new Function('window', 'document', src)(window, document);
  return window.VD_WHATS_NEW.flatMap((e) => [e.title, e.text, e.link && e.link.text].filter(Boolean)
    .map((s) => [ 'whats-new.js', lines.findIndex((l) => l.includes("'" + e.id + "'")) + 1, s ]));
}
let PROSE = null;
function prose() {
  if (PROSE) return PROSE;
  PROSE = [...catalogs(), ...markdown('curriculum/labs/students'), ...markdown('notes/src'), ...whatsNew()];
  return PROSE;
}
/* the words of a line: no tags, links, URLs, code, inline math or placeholders */
const words = (s) => s.replace(/<[^>]*>/g, ' ').replace(/\]\([^)]*\)/g, '] ').replace(/`[^`]*`/g, ' ')
  .replace(/\$[^$\n]*\$/g, ' ').replace(/\\\(.*?\\\)/g, ' ').replace(/\{#\d*\}|\{\w+\}/g, ' ')
  .replace(/\b(?:https?:\/\/)?[\w-]+(?:\.[\w-]+)*\.(?:org|com|edu|gov|io|net)\b\S*/g, ' ');

/* ---------- the rules ---------- */
const RULES = [];
const rule = (id, what, reads, run) => RULES.push({ id, what, reads, run });

rule('liquid', 'No brace next to a percent sign, and no double brace, in any Markdown file: GitHub Pages runs Liquid on every .md, '
  + 'so {% breaks the site build and {{ }} silently disappears.', 'every tracked .md', () => {
  const bad = [];
  for (const f of tracked.filter((f) => /\.(md|markdown)$/.test(f))) read(f).split('\n').forEach((l, i) => {
    const m = l.match(/\{%|%\}|\{\{/); if (m) bad.push([f, i + 1, l.trim().slice(0, 160), 'contains ' + m[0]]);
  });
  return bad;
});

const KEY_DIRS = /(^|\/)(answers|keys?|demo-keys|lab-guides|practice-exams|ta-guides|worksheet-keys|instructors?|key-audit[\w-]*)(\/|$)/i;
rule('no-keys', 'No answer keys, TA guides or instructor guides in this public repo (they live in the private TeacherKeys). Checks '
  + 'paths and page titles; with --keys <TeacherKeys clone> also looks for any key answer copied into a public file.',
'every tracked path; titles and headings of site pages', () => {
  const bad = [];
  for (const f of tracked) {
    if (KEY_DIRS.test(f) || /instructor|answer.?key|(^|[_-])key\.(md|html|pdf)$|\.tex$/i.test(path.basename(f))) bad.push([f, 0, f, 'key or guide path']);
  }
  const site = tracked.filter((f) => /\.(md|html)$/.test(f) && /^(demos|notes|curriculum\/labs|topics)\/|^[^/]+\.html$/.test(f));
  for (const f of site) read(f).split('\n').forEach((l, i) => {
    if (/^#+ .*(instructor (key|guide)|answer key|TA guide)|<title>[^<]*(answer key|instructor|TA guide)/i.test(l)) bad.push([f, i + 1, l.trim().slice(0, 160), 'key or guide title']);
  });
  if (KEYS) {
    const answers = new Map(), dir = path.join(KEYS, 'demo-keys/answers');
    if (!fs.existsSync(dir)) bad.push([KEYS, 0, '', 'no demo-keys/answers here: is this a TeacherKeys clone?']);
    else for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) for (const l of fs.readFileSync(path.join(dir, f), 'utf8').split('\n')) {
      const t = l.replace(/^\*\*Q\d+\w*\.\*\*\s*/, '').replace(/\s+/g, ' ').trim();
      if (t.length >= 120) answers.set(t.slice(0, 120), f);
    }
    for (const f of tracked.filter((f) => /\.(md|html|js|json|txt)$/.test(f))) {
      const t = read(f).replace(/\s+/g, ' ');
      for (const [a, k] of answers) if (t.includes(a)) bad.push([f, 0, a.slice(0, 100) + '…', 'copied from TeacherKeys demo-keys/answers/' + k]);
    }
  }
  return bad;
});

/* Allowed hyphenated words in student text. Not flagged at all: a part of one letter (X-ray, f-number, n-type, e-folding,
   H-alpha, U-235), every part capitalized (names and titles: Rayleigh-Jeans, Gell-Mann, OpenStax "Free-Body Diagrams"),
   file and demo names. */
const HYPHEN_ALLOW = new Set([      /* lower case; matched ignoring case */
  'yo-yo', 'yo-yos',                    /* the toy's name */
  'blu-ray',                            /* product name */
  'astronomy-engine', 'stellarium-web', 'hyg-nearby',  /* names of software and data sets, credited as published */
]);
rule('hyphens', 'No hyphens in compound modifiers in student facing text ("time constant", "white dwarf", "nonrotating"). '
  + 'Exceptions: a one letter part (X-ray, f-number), capitalized names and titles, and the ALLOW list.', 'student facing text', () => {
  const bad = [];
  for (const [f, n, s, err] of prose()) {
    if (err) { bad.push([f, n, '', err]); continue; }
    for (const m of words(s).matchAll(/(?<![\w/.@#'’-])([A-Za-z]+(?:-[A-Za-z]+)+)(?![\w/@-])/g)) {
      const w = m[1], parts = w.split('-');
      if (parts.some((p) => p.length === 1) || parts.every((p) => /^[A-Z]/.test(p)) || HYPHEN_ALLOW.has(w.toLowerCase()) || SLUGS.has(w)
        || [...SLUGS].some((g) => g.includes(w))) continue;
      bad.push([f, n, s.trim().slice(0, 160), w]);
    }
  }
  return bad;
});

rule('optional', 'Nothing is "optional" (Steve, 2026-10-24): the site supplements whatever the course does, so no part, unit or '
  + 'step is labeled optional. Say what it is instead ("can be switched on", "supplementary").', 'student facing text', () =>
  prose().filter(([, , s]) => s && /\boptional/i.test(words(s))).map(([f, n, s]) => [f, n, s.trim().slice(0, 160), 'optional']));

const BRITISH = ['colour', 'colours', 'coloured', 'behaviour', 'behaviours', 'centre', 'centres', 'centred', 'metre', 'metres',
  'centimetre', 'centimetres', 'millimetre', 'millimetres', 'micrometre', 'micrometres', 'nanometre', 'nanometres', 'kilometre',
  'kilometres', 'litre', 'litres', 'favour', 'labour', 'neighbour', 'vapour', 'analyse', 'analysed', 'analysing', 'organise',
  'organised', 'realise', 'recognise', 'optimise', 'normalise', 'normalised', 'minimise', 'maximise', 'ionise', 'ionised',
  'ionising', 'polarise', 'polarised', 'magnetise', 'magnetised', 'catalogue', 'catalogues', 'grey', 'aluminium', 'sulphur', 'fibre',
  'fibres', 'modelling', 'modelled', 'labelled', 'labelling', 'travelled', 'travelling', 'cancelled', 'signalled', 'programme',
  'defence', 'licence', 'whilst', 'judgement', 'ageing', 'calibre', 'focussed', 'tonne'];
const BRITISH_RE = new RegExp('\\b(' + BRITISH.join('|') + ')\\b', 'i');
/* published titles keep their own spelling */
const TITLES = /Bright Star Catalogue|Spectrum Catalogue/g;
rule('spelling', 'American spelling in student facing text (color, center, meter, labeled, catalog, analyze, ionized).',
  'student facing text', () => prose().filter(([, , s]) => s && BRITISH_RE.test(words(s).replace(TITLES, '')))
    .map(([f, n, s]) => [f, n, s.trim().slice(0, 160), words(s).replace(TITLES, '').match(BRITISH_RE)[1]]));

rule('harvest', 'Every demo has its English strings harvested (demos/lib/i18n/en/demo/<demo>.js), so it can be translated. '
  + 'A redirect page needs none.', 'demos/*.html', () => DEMOS.filter((d) => !fs.existsSync(path.join(ROOT, 'demos/lib/i18n/en/demo', d + '.js'))
    && !/http-equiv="refresh"/.test(read('demos/' + d + '.html'))).map((d) => ['demos/' + d + '.html', 0, '', 'no harvest: tools/i18n.cjs harvest ' + d]));

const NO_VIDEO = { 'intro-stellarium-sky': 'uses Stellarium, no demo of ours to film (2026-10-30)' };
rule('howto-video', 'Every worksheet has its How this works video: demos/media/how-this-works/<slug>.mp4, or a HOWTO_VIDEO entry in '
  + 'curriculum/labs/worksheet.js naming the demo\'s video.', 'curriculum/labs/students, worksheet.js', () => {
  const m = read('curriculum/labs/worksheet.js').match(/const HOWTO_VIDEO = (\{[\s\S]*?\});/);
  const map = m ? new Function('return ' + m[1])() : {};
  const have = new Set(fs.readdirSync(path.join(ROOT, 'demos/media/how-this-works')).filter((f) => f.endsWith('.mp4')).map((f) => f.slice(0, -4)));
  return SHEETS.filter((s) => !NO_VIDEO[s] && !have.has(map[s] || s)).map((s) => ['curriculum/labs/students/' + s + '.md', 0, '', 'no video ' + (map[s] || s) + '.mp4']);
});

/* Constants: demos/lib/constants.js holds every physical constant the demos use. A number in demo code that is close to one of
   them but is neither that value nor that value rounded (6.674e-11 is fine for G, 1.989e30 is not for the solar mass) is a stale or
   mistyped copy. Only numbers with 4 or more significant figures are compared, on code lines (strings and comments left out);
   data tables (the files below, and lines over 1500 characters) are not constants. */
const CONST_DATA = new Set(['lib/sky-bsc.js', 'lib/sky-dist.js', 'lib/nubase.js', 'lib/photondata.js', 'lib/earth.js', 'lib/i18n.js', 'star-slice.html']);
const CONST_ALLOW = {      /* 'file literal': reason */
  'dosimetry.html 273.2': 'AAPM TG-51 writes the temperature correction with 273.2',
  'giant-planets.html 1898.13e24': 'NASA Planetary Fact Sheet value, cited on the page',
};
/* Too close to everyday numbers to compare (they stay in the file to be used): */
const CONST_SKIP = new Set(['g', 'g0', 'T0', 'Tsun', 'Ssun', 'MbolSun', 'MVsun', 'yrSid', 'yrDays', 'day', 'daySid', 'dayStel', 'sound20']);
rule('constants', 'Physical constants in demo code match demos/lib/constants.js (CODATA 2022, IAU, cited values), exactly or rounded.',
  'demos/*.html and demos/lib/*.js code', () => {
  const VDC = require(path.join(ROOT, 'demos/lib/constants.js')), T = Object.entries(VDC.table).filter(([k]) => !CONST_SKIP.has(k));
  const trunc = (v, n) => { const p = Math.pow(10, n - 1 - Math.floor(Math.log10(Math.abs(v)))); return Number((Math.trunc(v * p) / p).toPrecision(n)); };
  const sig = (s) => s.toLowerCase().replace(/e.*/, '').replace('.', '').replace(/^0+/, '').length;
  const rnd = (v, n) => Number(v.toPrecision(n));
  const bad = [], files = [...DEMOS.map((d) => 'demos/' + d + '.html'),
    ...fs.readdirSync(path.join(ROOT, 'demos/lib')).filter((f) => f.endsWith('.js') && f !== 'constants.js').map((f) => 'demos/lib/' + f)];
  for (const f of files) {
    const short = f.replace(/^demos\//, '');
    if (CONST_DATA.has(short)) continue;
    let src = read(f);
    if (f.endsWith('.html')) src = src.replace(/<script\b[^>]*\bsrc=[^>]*>\s*<\/script>/g, '').replace(/^[\s\S]*?(?=<script)|<\/script>[\s\S]*?(?=<script|$)/g, (m) => m.replace(/[^\n]/g, ' '));
    src = src.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' ')).replace(/(^|[^:\\])\/\/.*$/gm, '$1')
      .replace(/'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"|`(?:[^`\\]|\\.)*`/g, (m) => m.replace(/[^\n]/g, ' '));
    src.split('\n').forEach((line, i) => {
      if (line.length > 1500) return;
      for (const m of line.matchAll(/(?<![\w.$])(\d+(?:\.\d+)?(?:e[-+]?\d+)?)(?![\w.])/gi)) {
        const s = m[1], x = +s, n = sig(s);
        if (!x || n < 4 || CONST_ALLOW[short + ' ' + s]) continue;
        let ok = false, near = null;
        for (const [k, [v]] of T) {
          const nv = Math.min(15, sig(String(v)));
          if (x === v || rnd(v, n) === x || trunc(v, n) === x || rnd(x, nv) === v) { ok = true; break; }
          if (Math.abs(x - v) / Math.abs(v) < 3 * Math.pow(10, 1 - Math.min(n, nv))) near = near || k;
        }
        if (!ok && near) bad.push([f, i + 1, line.trim().slice(0, 140), s + ' is near VDC.' + near + ' = ' + VDC[near]]);
      }
    });
  }
  return bad;
});

/* ---------- run ---------- */
if (args.includes('--list')) { for (const r of RULES) console.log(r.id.padEnd(12) + r.what + '\n' + ' '.repeat(12) + 'reads: ' + r.reads + '\n'); process.exit(0); }
let fails = 0;
for (const r of RULES) {
  if (ONLY && !ONLY.has(r.id)) continue;
  const bad = r.run();
  fails += bad.length;
  console.log((bad.length ? '✗ ' : '✓ ') + r.id + (bad.length ? ': ' + bad.length : ''));
  for (const [f, n, s, why] of bad.slice(0, 200)) console.log('    ' + f + (n ? ':' + n : '') + '  [' + why + ']' + (s ? '  ' + s : ''));
  if (bad.length > 200) console.log('    … and ' + (bad.length - 200) + ' more');
}
if (fails) { console.log('\n' + fails + ' house rule failure(s). See the rule text with --list; fix the source, or add a reasoned ALLOW entry.'); process.exit(1); }
