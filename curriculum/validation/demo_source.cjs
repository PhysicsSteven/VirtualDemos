'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),cp=require('node:child_process');
const root=path.resolve(__dirname,'../..');
function readDemo(name){
 const file=`demos/${name}.html`;
 return process.env.DEMO_REF?cp.execFileSync('git',['show',`${process.env.DEMO_REF}:${file}`],{cwd:root,encoding:'utf8',maxBuffer:8e6}):fs.readFileSync(path.join(root,file),'utf8');
}
/* a file of the shared demo library (demos/lib/vd.css, vd.js), from DEMO_REF when set, for the test servers */
function readLib(file){
 const rel=`demos/lib/${file}`;
 return process.env.DEMO_REF?cp.execFileSync('git',['show',`${process.env.DEMO_REF}:${rel}`],{cwd:root,encoding:'utf8',maxBuffer:8e6}):fs.readFileSync(path.join(root,rel),'utf8');
}
function core(name,names){
 const src=readDemo(name),match=src.match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/);
 if(!match)throw Error(`Missing core boundary: ${name}`);
 const ctx={};vm.runInNewContext(match[1]+`\nglobalThis.result={${names}};`,ctx,{timeout:5000});return ctx.result;
}
/* for a demo without core markers: declarations taken by name, in the order given, and run together, so a test still runs
   the page's own code. A name is a one line `const NAME = ...;` (or `const A = 1, NAME = 2;`) or a `function NAME(...) { ... }`
   of any length (taken to its matching brace). `prelude` is code run first, for state the functions read (const S = {...}). */
function pick(name,names,prelude=''){
 const src=readDemo(name),list=names.split(',').map((s)=>s.trim()),out=[];
 for(const k of list){
  if(out.some((l)=>new RegExp(`(^|[ ,])${k} = `).test(l)))continue;   /* declared on a line already taken */
  const m=src.match(new RegExp(`^[ \\t]*(const (?:[A-Za-z_$][\\w$]* = [^,;]+, )*${k} = .*;).*$`,'m'));
  if(m){out.push(m[1]);continue;}
  const f=src.search(new RegExp(`^[ \\t]*function ${k}\\(`,'m'));
  if(f<0)throw Error(`${name}: no declaration of ${k}`);
  let i=src.indexOf('{',f),depth=0;
  for(;i<src.length;i++){const ch=src[i];if(ch==='{')depth++;else if(ch==='}'&&--depth===0)break;}
  out.push(src.slice(f,i+1));
 }
 const ctx={};vm.runInNewContext(prelude+'\n'+out.join('\n')+`\nglobalThis.result={${list.join(',')}};`,ctx,{timeout:5000});return ctx.result;
}
module.exports={readDemo,readLib,core,pick};
