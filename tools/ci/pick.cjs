#!/usr/bin/env node
/* Picks the demos the GitHub "Demo checks" workflow tests, and splits them into jobs (2026-11-15).
   node tools/ci/pick.cjs                       demos changed between $BASE and $HEAD (default origin/main and HEAD)
   node tools/ci/pick.cjs --all                 every demo
   node tools/ci/pick.cjs pendulum forces       just these
   A demo counts as changed when demos/<demo>.html, its break-it file, its Node tests or its English strings changed. A change
   to the shared library (demos/lib/*.js or *.css, not the translations) or to the check scripts themselves checks every demo,
   and a change to the workflow or this script tries three demos.
   Prints JSON for the workflow: {"mode":"changed|all|none","demos":[...],"jobs":[{"kind","name","demos"}]}. */
'use strict';
const fs = require('fs'), path = require('path'), cp = require('child_process');
const ROOT = path.resolve(__dirname, '../..');
const args = process.argv.slice(2).flatMap((a) => a.split(/[\s,]+/)).filter(Boolean);
const isRedirect = (d) => /http-equiv="refresh"/i.test(fs.readFileSync(path.join(ROOT, 'demos', d + '.html'), 'utf8'));
const ALL = fs.readdirSync(path.join(ROOT, 'demos')).filter((f) => f.endsWith('.html')).map((f) => f.slice(0, -5)).filter((d) => !isRedirect(d)).sort();
const SHARED = [/^demos\/lib\/[^/]+\.(js|css)$/, /^tools\/(breakit|perfcheck|opencheck|vdcheck|democheck)\.cjs$/, /^tools\/vdcheck\//];

let mode = 'changed', demos = [];
if (args.includes('--all') || args.includes('all')) { mode = 'all'; demos = ALL; }
else if (args.length) { demos = args.filter((d) => ALL.includes(d)); const bad = args.filter((d) => !ALL.includes(d)); if (bad.length) console.error('not a demo: ' + bad.join(' ')); }
else {
  const base = process.env.BASE && !/^0+$/.test(process.env.BASE) ? process.env.BASE : 'origin/main', head = process.env.HEAD_SHA || 'HEAD';
  let files = [];
  try { files = cp.execFileSync('git', ['diff', '--name-only', base + '...' + head], { cwd: ROOT, encoding: 'utf8' }).split('\n').filter(Boolean); }
  catch (e) { console.error('git diff failed (' + e.message.split('\n')[0] + '): checking every demo'); mode = 'all'; }
  if (mode !== 'all' && files.some((f) => SHARED.some((re) => re.test(f)))) mode = 'all';
  if (mode === 'all') demos = ALL;
  else {
    const set = new Set();
    for (const f of files) {
      let m = f.match(/^demos\/([^/]+)\.html$/) || f.match(/^tools\/breakit\/([^/]+)\.cjs$/) || f.match(/^demos\/lib\/i18n\/en\/demo\/([^/]+)\.js$/);
      if (m && ALL.includes(m[1])) { set.add(m[1]); continue; }
      m = f.match(/^curriculum\/validation\/test_(.+?)\.cjs$/);
      if (m) { const stem = m[1]; const d = ALL.filter((x) => stem === x || stem === x.replace(/-/g, '_') || stem.startsWith(x + '_') || stem.startsWith(x.replace(/-/g, '_') + '_'));
        d.sort((a, b) => b.length - a.length); if (d[0]) set.add(d[0]); }
    }
    /* a change to this workflow or this script tries it on three demos: a 2D one, a 3D one and a busy one */
    if (files.some((f) => /^(\.github\/workflows\/demo-checks\.yml|tools\/ci\/)/.test(f))) ['pendulum', 'celestial-sphere', 'charged-particles'].forEach((d) => ALL.includes(d) && set.add(d));
    demos = [...set].sort();
  }
}
if (!demos.length && mode !== 'all') mode = 'none';

/* break-it takes about 30 s a demo and perfcheck about 70 s, democheck about 3 min; GitHub gives a public repo 20 jobs at once */
const split = (list, per) => { const n = Math.max(1, Math.ceil(list.length / per)), out = Array.from({ length: n }, () => []); list.forEach((d, i) => out[i % n].push(d)); return out; };
const jobs = [];
if (demos.length) {
  const add = (kind, per) => split(demos, per).forEach((g, i, all) => jobs.push({ kind, name: kind + (all.length > 1 ? ' ' + (i + 1) + ' of ' + all.length : ''), demos: g.join(' ') }));
  if (mode === 'all') { add('breakit', 14); add('perfcheck', 20); }   /* 11 and 8 jobs, each about 20 to 30 minutes */
  else { add('democheck', 8); add('breakit', 30); add('perfcheck', 20); }
}
process.stdout.write(JSON.stringify({ mode, demos, jobs }) + '\n');
