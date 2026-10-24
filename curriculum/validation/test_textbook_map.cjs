'use strict';
// Contract checks protect course rendering from dangling links and false coverage labels.
const assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path');
const root = path.resolve(__dirname, '../..'), map = JSON.parse(fs.readFileSync(path.join(root, 'curriculum/textbook-map.json')));
const status = new Set(['usable', 'needs-handout', 'needs-feature', 'missing']);
const key = s => `${s.vol}:${s.sec}`, sections = new Map(map.sections.map(s => [key(s), s]));
const demos = new Map(map.demos.map(d => [d.demo, d]));
const activities = new Map((map.activities || []).map(a => [a.id, a]));
assert.equal(activities.size, (map.activities || []).length, 'duplicate standalone activity');
for (const a of activities.values()) {
 assert(status.has(a.status)); assert(['worksheet', 'reading'].includes(a.kind));
 assert(a.course.length && a.course.every(c => ['physics-1', 'physics-2', 'acoustics', 'thermo', 'modern', 'astro', 'later'].includes(c)));
 assert.equal(a.url, `curriculum/labs/students/${a.id}.md`); assert(fs.existsSync(path.join(root, a.url)));
 assert(a.handouts.includes(a.id));
 for (const r of a.sections) { assert(sections.has(key(r))); assert.equal(r.title, sections.get(key(r)).title); assert((sections.get(key(r)).activities || []).includes(a.id)); }
 for (const file of a.data || []) assert(fs.existsSync(path.join(root, file)));
}
const catalogData = JSON.parse(fs.readFileSync(path.join(root, 'curriculum/catalog.json'), 'utf8'));
const catalog = catalogData.subjects.flatMap(subject => subject.demos.map(d => d.demo));
assert.equal(new Set(catalog).size, catalog.length, 'duplicate catalog entry');
assert.equal(map.schema_version, 1); assert.equal(demos.size, map.demos.length);
assert.deepEqual([...demos.keys()].sort(), catalog.sort());
assert.equal(sections.size, map.sections.length);
for (const d of map.demos) {
 assert(status.has(d.status)); assert(['lab', 'demo'].includes(d.role));
 assert(d.course.length && d.course.every(c => ['physics-1', 'physics-2', 'acoustics', 'thermo', 'modern', 'astro', 'later'].includes(c)));
 assert.equal(d.url, `demos/${d.demo}.html`); assert(fs.existsSync(path.join(root, d.url)));
 assert.equal(typeof d.beyond_book, 'boolean');
 for (const r of d.sections) { assert(sections.has(key(r))); assert.equal(r.title, sections.get(key(r)).title); }
}
for (const s of map.sections) {
 assert(status.has(s.status)); assert.equal(s.demos.length + (s.activities || []).length === 0, s.status === 'missing');
 for (const id of s.activities || []) { const a = activities.get(id); assert(a); assert(a.sections.some(r => key(r) === key(s))); }
 for (const name of s.demos) { const d = demos.get(name); assert(d); assert(d.sections.some(r => key(r) === key(s))); }
}
for (const c of map.courses) {
 assert(!('exam_boundaries' in c.metadata));
 for (const u of c.units) for (const r of u.sections) { const s = sections.get(key(r)); assert(s); assert(s.course.includes(c.id)); assert.equal((s.unit_in || {})[c.id] || s.unit, u.id); }
 for (const u of c.units) for (const name of u.demos || []) { const d = demos.get(name); assert(d); assert(d.course.includes(c.id)); assert(!d.sections.some(r => c.units.some(v => v.sections.some(x => key(x) === key(r))))); }   // unit.demos: no section in this course (e-over-m's sections are Physics II)
}
const p1 = map.courses.find(c => c.id === 'physics-1');
assert(p1.units.findIndex(u => u.id === 'gravitation') < p1.units.findIndex(u => u.id === 'equilibrium-elasticity'));
const p2 = map.courses.find(c => c.id === 'physics-2');
const p2opt = p2.units.slice(p2.units.findIndex(u => u.id === 'maxwell-waves') + 1);   /* optics, then wave optics; nothing optional (Steve, 2026-10-24) */
assert.deepEqual(p2opt.map(u => u.id), ['optics', 'wave-optics']);
assert(p2opt.every(u => u.requirement === 'required' && u.sections.every(r => r.vol === 3)));
assert(map.courses.every(c => c.units.every(u => u.requirement !== 'optional')));
assert(p2.units.findIndex(u => u.id === 'ac-circuits') === p2.units.findIndex(u => u.id === 'maxwell-waves') - 1);
assert(demos.get('magnetic-force').sections.some(s => s.vol === 2 && s.sec === '11.6'));
assert(['needs-handout', 'usable'].includes(demos.get('springs').status));
for (const name of ['currents-fields', 'em-waves', 'catenary', 'relativity-em']) assert.equal(demos.get(name).role, 'demo');
for (const [vol, count] of [[1, 99], [2, 95], [3, 76]]) /* Vol 3: chapters 1 to 11, every section (chapters 3 to 11 mapped 2026-10-24) */ assert.equal(map.sections.filter(s => s.vol === vol).length, count);
console.log(`PASS textbook map contract: ${demos.size} catalog entries, ${sections.size} sections, ordered course units and explicit gaps`);
