'use strict';
// Topics (curriculum/topics.json, 2026-10-28): every catalog demo sits in at least one topic, topic ids are unique and safe
// for topics/<id>.html, and each topic page tools/courses.py writes is there.
const assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path');
const root = path.resolve(__dirname, '../..');
const topics = JSON.parse(fs.readFileSync(path.join(root, 'curriculum/topics.json'), 'utf8'));
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'curriculum/catalog.json'), 'utf8')).subjects.flatMap(s => s.demos.map(d => d.demo));
const ids = [], placed = new Set();
for (const f of topics.families) {
  assert(f.id && f.title && f.topics.length, `family ${f.id}`);
  for (const t of f.topics) {
    assert.match(t.id, /^[a-z0-9-]+$/, `topic id ${t.id}`);
    assert(t.title && t.blurb && t.demos.length, `topic ${t.id}`);
    assert.equal(new Set(t.demos).size, t.demos.length, `repeated demo in ${t.id}`);
    for (const d of t.demos) { assert(catalog.includes(d), `${t.id}: ${d} is not in the catalog`); placed.add(d); }
    assert(fs.existsSync(path.join(root, 'topics', `${t.id}.html`)), `topics/${t.id}.html missing (run tools/courses.py)`);
    ids.push(t.id);
  }
}
assert.equal(new Set(ids).size, ids.length, 'repeated topic id');
assert.deepEqual(catalog.filter(d => !placed.has(d)), [], 'demos in no topic');
console.log(`topics: ${ids.length} topics in ${topics.families.length} families, all ${catalog.length} demos placed`);
