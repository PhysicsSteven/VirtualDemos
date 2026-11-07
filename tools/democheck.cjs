#!/usr/bin/env node
/* Everything a new or changed demo needs, in one command (2026-11-01). Run it before pushing a demo change:

   NODE_PATH=/opt/node-tools/node_modules node tools/democheck.cjs pendulum [more demos] [--fast]
   In the cloud container set VD_THREE to a local three.min.js r128 (cdnjs is blocked).

   1. House rules: tools/rules.cjs (with --keys when a TeacherKeys clone sits next to this repo or TEACHERKEYS names one,
      which adds the copied answers and stale key PDF checks).
   2. Map: the demo is in curriculum/catalog.json, curriculum/textbook-map.json and at least one topic in curriculum/topics.json.
   3. Tests: every curriculum/validation/test_<demo>*.cjs that runs in Node.
   4. Translation: when the demo changed against origin/main, its harvest (demos/lib/i18n/en/demo/<demo>.js) changed too, and
      tools/i18n.cjs leaks <demo> finds no English left showing.
   5. What's new: when the demo changed, whats-new.js changed too (a warning only: invisible fixes need no entry). Keys: when the
      demo changed, the TeacherKeys captures that load it are named, to rerun and compare with the keys (a warning).
   6. Page checks: tools/vdcheck.cjs --only after (page errors, sideways scroll) and --only clip (controls cut off).
   7. Opening state: tools/opencheck.cjs (the first Play or Release press visibly does something).
   --fast skips 4's leak check, 6 and 7 (the browser steps). Exit 1 when any step fails; warnings don't fail. */
'use strict';
const fs = require('node:fs'), path = require('node:path'), cp = require('node:child_process');
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2), FAST = args.includes('--fast'), demos = args.filter((a) => !a.startsWith('--'));
if (!demos.length) { console.error('usage: node tools/democheck.cjs demo... [--fast]'); process.exit(2); }
const KEYS = process.env.TEACHERKEYS || ['../teacherkeys', '../TeacherKeys'].map((d) => path.resolve(ROOT, d)).find((d) => fs.existsSync(path.join(d, 'worksheet-keys')));
const results = [];
const step = (demo, name, status, note) => { results.push([demo, name, status, note || '']); console.log(status.padEnd(5) + ' ' + (demo || '(site)').padEnd(24) + name.padEnd(14) + (note || '')); };
const run = (cmd, a) => { try { return { ok: true, out: cp.execFileSync(cmd, a, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64e6 }) }; }
  catch (e) { return { ok: false, out: (e.stdout || '') + (e.stderr || '') }; } };
const changed = (rel) => { const r = run('git', ['diff', '--quiet', 'origin/main', '--', rel]); return !r.ok; };
const tail = (s, n = 6) => s.trim().split('\n').filter((l) => !/^✓/.test(l)).slice(-n).join(' | ');

/* 1 */
const rr = run('node', ['tools/rules.cjs', ...(KEYS ? ['--keys', KEYS] : [])]);
step(null, 'rules', rr.ok ? 'pass' : 'FAIL', rr.ok ? (KEYS ? 'with TeacherKeys' : 'no TeacherKeys clone: key checks skipped') : tail(rr.out, 12));

const catalog = JSON.stringify(JSON.parse(fs.readFileSync(path.join(ROOT, 'curriculum/catalog.json'), 'utf8')));
const map = JSON.parse(fs.readFileSync(path.join(ROOT, 'curriculum/textbook-map.json'), 'utf8'));
const topics = JSON.stringify(JSON.parse(fs.readFileSync(path.join(ROOT, 'curriculum/topics.json'), 'utf8')));
const whatsNewChanged = changed('whats-new.js');
for (const d of demos) {
  if (!fs.existsSync(path.join(ROOT, 'demos', d + '.html'))) { step(d, 'file', 'FAIL', 'no demos/' + d + '.html'); continue; }
  /* 2 */
  const quoted = '"' + d + '"', inMap = JSON.stringify(map).includes('"demo":' + quoted);
  const miss = [catalog.includes(quoted) ? null : 'catalog.json', inMap ? null : 'textbook-map.json', topics.includes(quoted) ? null : 'topics.json'].filter(Boolean);
  step(d, 'map', miss.length ? 'FAIL' : 'pass', miss.length ? 'missing from ' + miss.join(', ') : '');
  /* 3 */
  /* test_<demo>.cjs and test_<demo>_<part>.cjs, but not the tests of a longer demo name (test_pendulum_wave is pendulum-wave's) */
  /* (many tests keep the demo's hyphens, test_giant-planets.cjs, so both spellings count) */
  const stem = 'test_' + d.replace(/-/g, '_'), stemH = 'test_' + d;
  const tests = fs.readdirSync(path.join(ROOT, 'curriculum/validation')).filter((f) => /\.cjs$/.test(f) && (f === stem + '.cjs' || f === stemH + '.cjs' || f.startsWith(stem + '_') || (stemH !== stem && f.startsWith(stemH + '_'))))
    .filter((f) => !fs.existsSync(path.join(ROOT, 'demos', f.slice(5, -4).replace(/_/g, '-') + '.html')) || f === stem + '.cjs' || f === stemH + '.cjs')
    .filter((f) => !/playwright|chromium/.test(fs.readFileSync(path.join(ROOT, 'curriculum/validation', f), 'utf8')));
  if (!tests.length) step(d, 'tests', 'warn', 'no Node test for this demo');
  for (const t of tests) { const r = run('node', ['curriculum/validation/' + t]); step(d, 'tests', r.ok ? 'pass' : 'FAIL', t + (r.ok ? '' : ': ' + tail(r.out))); }
  /* 4, 5 */
  const demoChanged = changed('demos/' + d + '.html');
  if (demoChanged && !changed('demos/lib/i18n/en/demo/' + d + '.js')) step(d, 'harvest', 'warn', 'demo changed but its harvest did not: node tools/i18n.cjs harvest ' + d);
  /* keys captured from this demo: a model or text change can move the numbers a key quotes (stale key numbers recurred:
     physics audit 10-25, overnight recheck 10-25, GPT findings 10-26), so name the captures to rerun and compare */
  const capDir = KEYS && path.join(KEYS, 'worksheet-keys/tools/capture');
  if (demoChanged && capDir && fs.existsSync(capDir)) {
    const caps = fs.readdirSync(capDir).filter((f) => f.endsWith('.cjs') && new RegExp("['\"/]" + d.replace(/[.-]/g, '\\$&') + "\\.html['\"?#]").test(fs.readFileSync(path.join(capDir, f), 'utf8')));
    if (caps.length) step(d, 'keys', 'warn', 'demo changed: rerun ' + caps.join(', ') + ' (TeacherKeys worksheet-keys/tools/capture) and compare with the keys');
  }
  if (demoChanged && !whatsNewChanged) step(d, 'whats-new', 'warn', 'demo changed and whats-new.js did not: add an entry if students would notice');
  if (FAST) continue;
  const lk = run('node', ['tools/i18n.cjs', 'leaks', d]);
  step(d, 'leaks', lk.ok ? 'pass' : 'FAIL', lk.ok ? '' : tail(lk.out));   /* i18n.cjs exits 1 when English shows or the test language errs */
  /* 6 */
  for (const only of ['after', 'clip']) { const r = run('node', ['tools/vdcheck.cjs', '--only', only, d]); step(d, 'vdcheck ' + only, r.ok ? 'pass' : 'FAIL', r.ok ? '' : tail(r.out)); }
  /* 7 */
  const oc = run('node', ['tools/opencheck.cjs', d]); step(d, 'opening', oc.ok ? 'pass' : 'FAIL', tail(oc.out, 1).replace(/^\S+\s+\S+\s+/, ''));
}
const fails = results.filter((r) => r[2] === 'FAIL').length, warns = results.filter((r) => r[2] === 'warn').length;
console.log('\n' + (fails ? fails + ' failed' : 'all passed') + (warns ? ', ' + warns + ' warning(s)' : ''));
process.exit(fails ? 1 : 0);
