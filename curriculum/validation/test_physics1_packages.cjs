'use strict';
// Public package contract: all current Physics I labs have complete student structure.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'../..'),map=JSON.parse(fs.readFileSync(path.join(root,'curriculum/textbook-map.json'),'utf8'));
const demos=map.demos.filter(d=>d.course.includes('physics-1')),labs=demos.filter(d=>d.role==='lab');
const expected=['Goal','Background','Before the lab','Safety','Procedure','Data','Analysis','Uncertainty','Questions','What to hand in'];
let labels=0;
for(const d of labs){
 assert(d.handouts?.length,`${d.demo}: no handout mapped`);
 for(const h of d.handouts){const text=fs.readFileSync(path.join(root,'curriculum/labs/students',h+'.md'),'utf8');
  assert.deepEqual([...text.matchAll(/^## (.+)$/gm)].map(m=>m[1]),expected,h);
  assert.equal((text.match(/^\|---/gm)||[]).length,1,`${h}: one data table`);
  for(const [head,lo,hi] of [['Before the lab',2,3],['Questions',3,4]]){const part=text.split('## '+head+'\n')[1].split('\n## ')[0],n=(part.match(/^\d+\./gm)||[]).length;assert(n>=lo&&n<=hi,`${h}: ${head}`);}
  assert(!/^# .*Instructor Guide/m.test(text),`${h}: private guide heading in student file`);
  if(['pendulum','rotational-dynamics','viscometer'].includes(d.demo)){
   const para=text.split('**Using the virtual apparatus.**')[1].split('\n## Data')[0];
   const src=fs.readFileSync(path.join(root,d.url),'utf8').replace(/<\/?(?:sub|sup|span|b|strong|em|i)(?:\s[^>]*)?>/g,'');
   for(const [,label] of para.matchAll(/\*\*(.*?)\*\*/g)){assert(src.includes(label),`${h}: control ${label}`);labels++;}
  }
 }
 assert(fs.existsSync(path.join(root,'notes/src',d.demo+'.md')),`${d.demo}: teaching notes missing`);
}
for(const d of demos) assert(fs.existsSync(path.join(root,'notes/src',d.demo+'.md')),`${d.demo}: missing teaching notes`);
console.log(`PASS Physics I package contract: ${labs.length} lab packages, complete student sections and ${labels} new exact control labels`);
