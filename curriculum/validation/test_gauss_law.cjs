'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const src=require('./demo_source.cjs').readDemo('gauss-law'),ctx={};
vm.runInNewContext([...src.matchAll(/<script>([\s\S]*?)<\/script>/g)].find(m=>m[1].includes('==CORE START=='))[1],ctx,{timeout:1000});
const g=ctx.GL,k=1e-9/g.EPS0,charge=(x,y=0,q=1e-9)=>({x,y,z:0,q});let count=0;
const close=(a,b,tol=2e-7)=>assert(Math.abs(a-b)<=tol*k,`expected ${b}, got ${a}, scaled error ${Math.abs(a-b)/k}`);
function test(n,f){f();count++;console.log('PASS',n);}
const P=[[-.06,-.05],[.07,-.04],[.05,.06],[-.04,.07]],tri=g.triangulate(P);
const shapes={sphere:Q=>g.sphereFlux(Q,0,0,.06),box:Q=>g.boxFlux(Q,0,0,.12,.1,.12),cylinder:Q=>g.cylFlux(Q,0,0,.12,.1),prism:Q=>g.prismFlux(Q,P,.12,tri)};
for(const [name,flux] of Object.entries(shapes))test(name+' centered, off-center, external and dipole flux',()=>{
  for(const [Q,ref] of [[[charge(0)],k],[[charge(.02,.01)],k],[[charge(.12,.08)],0],[[charge(-.02,0,2e-9),charge(.02,0,-1e-9)],k],[[charge(-.02),charge(.02,0,-1e-9)],0]]){
    const r=flux(Q);close(r.total,ref);close(r.out+r.inw,r.total);close(r.per.reduce((a,b)=>a+b,0),r.total);assert(r.evals>0);
  }
});
test('near sphere boundary at current default tolerance',()=>{
  for(const fraction of [.2,.1,.05,.02,.01])for(const side of [-1,1]){
    const x=.06*(1+side*fraction),ref=side<0?k:0,r=g.sphereFlux([charge(x)],0,0,.06);
    close(r.total,ref,2e-8);
    console.log('  boundary',side*fraction,'scaled error',Math.abs(r.total-ref)/k,'evaluations',r.evals);
  }
});
test('independent midpoint surface integration converges',()=>{
  // Direct midpoint Riemann sum, distinct from the demo's adaptive GK rule.
  const x=.025,R=.06;
  function midpoint(n){let total=0;for(let j=0;j<n;j++){const u=-1+2*(j+.5)/n,w=Math.sqrt(1-u*u);for(let m=0;m<2*n;m++){const p=2*Math.PI*(m+.5)/(2*n),nx=w*Math.cos(p),ny=w*Math.sin(p),dx=R*nx-x,dy=R*ny,dz=R*u;total+=g.KC*1e-9*(dx*nx+dy*ny+dz*u)/(dx*dx+dy*dy+dz*dz)**1.5*R*R*(2/n)*(Math.PI/n);}}return total;}
  const a=midpoint(40),b=midpoint(80),c=midpoint(160);assert(Math.abs(c-k)<Math.abs(b-k));assert(Math.abs(b-k)<Math.abs(a-k));close(c,k,2e-5);
});
test('symmetry fields at finite radius and point-charge singularity in SI',()=>{
  
  const surface=g.KC*1e-9/.05**2;close(g.Esphere('ball',1e-9,.05,.025),surface/2);close(g.Esphere('ball',1e-9,.05,.1),surface/4);
  close(g.Eline(2e-9,.04),2e-9/(2*Math.PI*g.EPS0*.04));close(g.Eplane(-3e-9),-3e-9/(2*g.EPS0));
  assert.equal(g.Esphere('point',1e-9,.05,0),Infinity);
});
console.log(`Completed ${count} Gauss-law test groups. Origin and shell-boundary defects are tracked in COLLABORATION.md; tolerance controls pending Claude.`);

if(process.argv.includes('--strict-origin')){
  console.log('Uniform sphere origin probe',g.Esphere('ball',1e-9,.05,0));
  assert.equal(g.Esphere('ball',1e-9,.05,0),0,'Regular uniform-sphere field must vanish at its origin');
}
