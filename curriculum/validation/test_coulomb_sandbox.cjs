'use strict';
const assert=require('node:assert/strict'),vm=require('node:vm'),{readDemo}=require('./demo_source.cjs');
const src=readDemo('coulomb-sandbox'),start=src.indexOf('  function potential('),end=src.indexOf('  function bounds(',start);
assert(start>=0&&end>start,'source extraction boundaries changed');
const constants=src.match(/  const C_V =[^\n]+\n  const C_E =[^\n]+/);assert(constants);
const ctx={};vm.runInNewContext(constants[0]+'\nlet charges=[];\n'+src.slice(start,end)+'\nglobalThis.model={potential,field,set:q=>{charges=q;}};',ctx);
const c=ctx.model,k=8.98755e9;let n=0;
const close=(a,b,rel=1e-8,abs=1e-6)=>assert(Math.abs(a-b)<=abs+rel*Math.abs(b),`expected ${b}, got ${a}`),test=(name,f)=>{f();n++;console.log('PASS',name);};
test('SI units and inverse distance / inverse square for isolated charges',()=>{
 for(const q of [-3,1,5]){c.set([{x:0,y:0,q}]);for(const r of [.2,1,3,10]){close(c.potential(r,0),k*q*1e-9/(r*.01));close(c.field(r,0)[0],k*q*1e-9/(r*.01)**2);close(c.field(r,0)[1],0);}}
});
test('superposition and dipole cancellation',()=>{
 const charges=[{x:-3,y:0,q:2},{x:3,y:0,q:-2}];c.set(charges);close(c.potential(0,0),0);close(c.field(0,0)[0],2*k*2e-9/.03**2);
 const p=[1,2];c.set(charges);const v=c.potential(...p),E=c.field(...p);let vs=0,ex=0,ey=0;
 for(const q of charges){c.set([q]);vs+=c.potential(...p);const e=c.field(...p);ex+=e[0];ey+=e[1];}close(v,vs);close(E[0],ex);close(E[1],ey);
});
test('field equals independent numerical negative potential gradient away from cores',()=>{
 c.set([{x:-3,y:0,q:2},{x:3,y:1,q:-1}]);for(const [x,y] of [[0,0],[1,2],[-4,3]]){const h=1e-4,e=c.field(x,y);
 close(e[0],-(c.potential(x+h,y)-c.potential(x-h,y))/(2*h*.01),1e-7);close(e[1],-(c.potential(x,y+h)-c.potential(x,y-h))/(2*h*.01),1e-7);}
});
test('closed path work is zero outside softened charge cores',()=>{
 c.set([{x:0,y:0,q:1}]);let work=0;const N=10000;
 for(let j=0;j<N;j++){const a=2*Math.PI*(j+.5)/N,x=3+Math.cos(a),y=2+Math.sin(a),e=c.field(x,y);work+=(e[0]*-Math.sin(a)+e[1]*Math.cos(a))*.01*2*Math.PI/N;}close(work,0,0,1e-9);
});
test('zero charges and distant dipole scaling',()=>{
 c.set([{x:0,y:0,q:0}]);close(c.potential(0,0),0);close(c.field(0,0)[0],0);
 c.set([{x:-1,y:0,q:1},{x:1,y:0,q:-1}]);const a=Math.abs(c.field(0,1000)[0]),b=Math.abs(c.field(0,2000)[0]);close(a/b,8,2e-6);
});
console.log(`Completed ${n} Coulomb groups outside softened cores.`);
if(process.argv.includes('--strict-core')){
 // Deliberately checks a known failure; do not replace this reference with the demo's clamp.
 c.set([{x:0,y:0,q:1}]);const x=.05,h=1e-5,expected=-(c.potential(x+h,0)-c.potential(x-h,0))/(2*h*.01);
 console.log('Core consistency probe (cm)',{x,field:c.field(x,0)[0],negativeGradient:expected});close(c.field(x,0)[0],expected);
}
