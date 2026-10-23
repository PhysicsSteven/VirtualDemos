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
module.exports={readDemo,readLib,core};
