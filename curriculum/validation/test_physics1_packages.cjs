'use strict';
// Public package contract: all current Physics I labs have complete student structure.
// Worksheets may have more than one data table (a part with its own table) and longer lists since the 2026-10-24 worksheet additions.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'../..'),map=JSON.parse(fs.readFileSync(path.join(root,'curriculum/textbook-map.json'),'utf8'));
const demos=map.demos.filter(d=>d.course.includes('physics-1')),labs=demos.filter(d=>d.role==='lab');
const expected=['Goal','Background','Before the lab','Safety','Procedure','Data','Analysis','Uncertainty','Questions','What to hand in'];
let labels=0;
for(const d of labs){
 assert(d.handouts?.length,`${d.demo}: no handout mapped`);
 for(const h of d.handouts){const text=fs.readFileSync(path.join(root,'curriculum/labs/students',h+'.md'),'utf8');
  assert.deepEqual([...text.matchAll(/^## (.+)$/gm)].map(m=>m[1]),expected,h);
  assert((text.match(/^\|---/gm)||[]).length>=1,`${h}: a data table`);
  for(const [head,lo,hi] of [['Before the lab',2,6],['Questions',3,8]]){const part=text.split('## '+head+'\n')[1].split('\n## ')[0],n=(part.match(/^\d+\./gm)||[]).length;assert(n>=lo&&n<=hi,`${h}: ${head}`);}
  assert(!/^# .*Instructor Guide/m.test(text),`${h}: private guide heading in student file`);
  if(['pendulum','rotational-dynamics','viscometer','impulse'].includes(d.demo)&&text.includes('**Using the virtual apparatus.**')){   /* the pendulum demo's second handout (double pendulum, merged 2026-10-24) has no such paragraph */
   const para=text.split('**Using the virtual apparatus.**')[1].split('\n## Data')[0];
   const src=fs.readFileSync(path.join(root,d.url),'utf8').replace(/<\/?(?:sub|sup|span|b|strong|em|i)(?:\s[^>]*)?>/g,'');
   for(const [,label] of para.matchAll(/\*\*(.*?)\*\*/g)){assert(src.includes(label),`${h}: control ${label}`);labels++;}
  }
 }
 assert(fs.existsSync(path.join(root,'notes/src',d.demo+'.md')),`${d.demo}: teaching notes missing`);
}
for(const d of demos) assert(fs.existsSync(path.join(root,'notes/src',d.demo+'.md')),`${d.demo}: missing teaching notes`);
const activities=(map.activities||[]).filter(a=>a.course.includes('physics-1'));
for(const a of activities){
 const text=fs.readFileSync(path.join(root,a.url),'utf8'),headings=[...text.matchAll(/^## (.+)$/gm)].map(m=>m[1]);
 assert.deepEqual(headings,expected.map(h=>h==='Before the lab'?'Before the activity':h),a.id);
 assert((text.match(/^\|---/gm)||[]).length>=1,`${a.id}: a data table`);
 for(const [head,lo,hi] of [['Before the activity',2,6],['Questions',3,8]]){const part=text.split('## '+head+'\n')[1].split('\n## ')[0],n=(part.match(/^\d+\./gm)||[]).length;assert(n>=lo&&n<=hi,`${a.id}: ${head}`);}
}
console.log(`PASS Physics I package contract: ${labs.length} lab packages, complete student sections and ${labels} new exact control labels; ${activities.length} standalone activities`);
