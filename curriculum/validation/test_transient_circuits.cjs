/* Run: node curriculum/validation/test_transient_circuits.cjs
   Read-only test: extracts the DOM-independent physics core from the demo source. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const src=fs.readFileSync(path.resolve(__dirname,'../../demos/transient-circuits.html'),'utf8');
const start=src.indexOf('function state('),end=src.indexOf('const $=id=>',start);
assert(start>=0&&end>start,'Could not locate standalone physics core');
const context={module:{exports:{}},Math,Number,Error};vm.runInNewContext(src.slice(start,end),context,{timeout:1000});
const {state}=context.module.exports;
const close=(actual,expected,rel=1e-9,abs=1e-12)=>assert(Math.abs(actual-expected)<=abs+rel*Math.abs(expected),`expected ${expected}, got ${actual}`);
let n=0;const test=(name,fn)=>{fn();n++;console.log('PASS',name)};
const L=.1,C=1e-4,V=10,Q0=C*V,w=1/Math.sqrt(L*C),T=2*Math.PI/w,E0=.5*C*V*V;
test('LC quarter-cycle energy transfer',()=>{const z=state('LC',0,L,C,V,1,T/4);close(z.q,0,1e-8);close(z.i,-Q0*w);close(z.U,E0);close(z.H,0);});
test('LC full cycle, no numerical damping',()=>{const z=state('LC',0,L,C,V,1,1000*T);close(z.q,Q0,1e-8);close(z.i,0,1e-7,1e-10);close(z.U,E0);});
test('RLC R=0 matches LC',()=>{for(const t of [0,.003,.01,.1]){const a=state('LC',0,L,C,V,0,t),b=state('RLC',0,L,C,V,0,t);close(a.q,b.q);close(a.i,b.i);}});
test('RLC underdamped energy',()=>{for(const R of [5,10,20,50])for(const t of [0,.001,.005,.01,.05]){const z=state('RLC',R,L,C,V,0,t);close(z.U+z.H,E0);assert(z.H>=0);}});
test('RLC critical damping',()=>{const R=2*Math.sqrt(L/C),t=.01,z=state('RLC',R,L,C,V,0,t),a=R/(2*L);close(z.q,Q0*Math.exp(-a*t)*(1+a*t));close(z.i,-Q0*a*a*t*Math.exp(-a*t));});
test('RLC overdamped energy',()=>{for(const t of [0,.001,.01,.1,1]){const z=state('RLC',100,L,C,V,0,t);close(z.U+z.H,E0);assert(z.H>=0);}});
test('RC exponential discharge',()=>{const R=100,t=R*C;const z=state('RC',R,L,C,V,0,t);close(z.q,Q0/Math.E);close(z.i,-Q0/(Math.E*R*C));close(z.U+z.H,E0);});
test('RL exponential discharge',()=>{const R=100,I0=1,t=L/R;const z=state('RL',R,L,C,V,I0,t);close(z.i,I0/Math.E);close(z.U+z.H,.5*L*I0*I0);});
test('RL zero resistance constant current',()=>{const z=state('RL',0,L,C,V,1,100);close(z.i,1);close(z.H,0);});
test('RC zero resistance rejected',()=>{assert.throws(()=>state('RC',0,L,C,V,0,.01),/impulsive/);});
test('invalid parameters rejected',()=>{assert.throws(()=>state('RLC',-1,L,C,V,0,0),/Invalid/);});
console.log(`Completed ${n} transient circuit tests.`);
