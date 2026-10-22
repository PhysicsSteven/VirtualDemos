'use strict';
// Contract checks protect course rendering from dangling links and false coverage labels.
const assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path');
const root = path.resolve(__dirname, '../..'), map = JSON.parse(fs.readFileSync(path.join(root, 'curriculum/textbook-map.json')));
const status = new Set(['usable', 'needs-handout', 'needs-feature', 'missing']);
const key = s => `${s.vol}:${s.sec}`, sections = new Map(map.sections.map(s => [key(s), s]));
const demos = new Map(map.demos.map(d => [d.demo, d]));
const catalogData = JSON.parse(fs.readFileSync(path.join(root, 'curriculum/catalog.json'), 'utf8'));
const catalog = catalogData.subjects.flatMap(subject => subject.demos.map(d => d.demo));
assert.equal(new Set(catalog).size, catalog.length, 'duplicate catalog entry');
assert.equal(map.schema_version, 1); assert.equal(demos.size, map.demos.length);
assert.deepEqual([...demos.keys()].sort(), catalog.sort());
assert.equal(sections.size, map.sections.length);
for (const d of map.demos) {
 assert(status.has(d.status)); assert(['lab', 'demo'].includes(d.role));
 assert(d.course.length && d.course.every(c => ['physics-1', 'physics-2', 'later'].includes(c)));
 assert.equal(d.url, `demos/${d.demo}.html`); assert(fs.existsSync(path.join(root, d.url)));
 assert.equal(typeof d.beyond_book, 'boolean');
 for (const r of d.sections) { assert(sections.has(key(r))); assert.equal(r.title, sections.get(key(r)).title); }
}
for (const s of map.sections) {
 assert(status.has(s.status)); assert.equal(s.demos.length === 0, s.status === 'missing');
 for (const name of s.demos) { const d = demos.get(name); assert(d); assert(d.sections.some(r => key(r) === key(s))); }
}
for (const c of map.courses) {
 assert(!('exam_boundaries' in c.metadata));
 for (const u of c.units) for (const r of u.sections) { const s = sections.get(key(r)); assert(s); assert(s.course.includes(c.id)); assert.equal(s.unit, u.id); }
}
const p1 = map.courses.find(c => c.id === 'physics-1');
assert(p1.units.findIndex(u => u.id === 'gravitation') < p1.units.findIndex(u => u.id === 'equilibrium-elasticity'));
const p2 = map.courses.find(c => c.id === 'physics-2');
assert.equal(p2.units.at(-2).id, 'maxwell-waves'); assert.equal(p2.units.at(-1).requirement, 'optional');
assert(p2.units.at(-1).sections.every(r => r.vol === 3));
assert(demos.get('magnetic-force').sections.some(s => s.vol === 2 && s.sec === '11.6'));
assert(['needs-handout', 'usable'].includes(demos.get('springs').status));
for (const name of ['currents-fields', 'em-waves', 'catenary', 'relativity-em']) assert.equal(demos.get(name).role, 'demo');
for (const [vol, count] of [[1, 99], [2, 95], [3, 15]]) assert.equal(map.sections.filter(s => s.vol === vol).length, count);
console.log(`PASS textbook map contract: ${demos.size} catalog entries, ${sections.size} sections, ordered course units and explicit gaps`);
