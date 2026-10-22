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
    close(r.total,ref,2e-8);assert(r.converged,'default tolerance should be met');
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
test('regular symmetry fields vanish at the origin',()=>{
  // uniform ball: E = kQr/R^3 -> 0; conductor: E = 0 everywhere inside, center included
  assert.equal(g.Esphere('ball',1e-9,.05,0),0);assert.equal(g.Esphere('shell',1e-9,.05,0),0);assert.equal(g.Esphere('ball',-3e-9,.05,0),0);
  close(g.Esphere('ball',1e-9,.05,1e-6),g.KC*1e-9*1e-6/.05**3);
  assert.equal(g.Esphere('point',1e-9,.05,0),Infinity);
});
test('conducting shell surface: one sided limits, no value on the surface',()=>{
  const Q=2e-9,R=.05,out=g.KC*Q/R**2;
  assert(Number.isNaN(g.Esphere('shell',Q,R,R)),'E on the ideal charged surface must be undefined');
  assert(Number.isNaN(g.enclosedSphere('shell',Q,R,R)));
  assert.equal(g.Esphere('shell',Q,R,R,-1),0);close(g.Esphere('shell',Q,R,R,1),out);
  assert.equal(g.enclosedSphere('shell',Q,R,R,-1),0);assert.equal(g.enclosedSphere('shell',Q,R,R,1),Q);
  // the limits agree with the field just inside and just outside
  assert.equal(g.Esphere('shell',Q,R,R*(1-1e-9)),0);close(g.Esphere('shell',Q,R,R*(1+1e-9)),out,1e-6);
  const L=g.EsphereLimits('shell',Q,R,R);assert.equal(L.inside,0);close(L.outside,out);
  close(L.outside-L.inside,Q/(4*Math.PI*R*R)/g.EPS0);   // jump = sigma/eps0
  // a radius snapped in floating point (49 x 0.1 cm) still counts as the surface
  assert(g.onShell('shell',4.9*.01,49*.1*.01));assert(Number.isNaN(g.Esphere('shell',Q,4.9*.01,49*.1*.01)));
  // the ball has no surface charge: E is continuous at R
  const B=g.EsphereLimits('ball',Q,R,R);assert.equal(B.inside,B.outside);close(B.inside,out);
});
test('boundary exclusion zone is numerical, only distance zero is singular',()=>{
  assert.equal(g.EXCL_CM,.03);
  for(const [d,c] of [[0,'on'],[1e-12,'on'],[.001,'zone'],[.02,'zone'],[.0299,'zone'],[.03,'clear'],[.5,'clear']])assert.equal(g.boundaryClass(d),c,`distance ${d} cm`);
  // just outside the zone (0.03 cm) on either side the flux is still exactly Q_enc/eps0 and the quadrature converges
  for(const side of [-1,1]){const r=g.sphereFlux([charge(.06+side*.0003)],0,0,.06);close(r.total,side<0?k:0,1e-12);assert(r.converged);assert.equal(r.unmet,0);}
});
test('integrate reports an unmet tolerance',()=>{
  const smooth=g.integrate(x=>[Math.cos(x)],[0,1],1,1e-14,1e-14,300);assert(smooth.ok);assert.equal(smooth.stop,'');assert(Math.abs(smooth.v[0]-Math.sin(1))<1e-13);
  const u0=g.stats.unmet,peak=g.integrate(x=>[1/Math.sqrt(Math.abs(x-.3)+1e-12)],[0,1],1,1e-14,1e-14,4);
  assert.equal(peak.ok,false);assert.equal(peak.stop,'panels');assert.equal(peak.panels,4);assert.equal(g.stats.unmet,u0+1);
  // a small panel budget near the boundary: the flux result carries the flag, counting nested inner integrals
  g.setMaxPanels(10);
  try{const r=g.sphereFlux([charge(.0597)],0,0,.06);assert.equal(r.converged,false);assert(r.unmet>1);console.log('  10 panel budget: unmet integrals',r.unmet,'scaled error',Math.abs(r.total-k)/k);}
  finally{g.setMaxPanels(300);}
  const r=g.sphereFlux([charge(.0597)],0,0,.06);assert(r.converged);close(r.total,k,1e-12);
});
test('CSV carries the demo version line',()=>{
 assert.match(g.GL_VERSION,/^gauss-law@\d{4}-\d{2}-\d{2}\.\d+$/);
 // the export writes it as the second comment line, right after the title
 assert.match(src,/\[\'# Gauss\\'s Law: numerical flux readings \(simulated data;[^\n]*\n\s*`# demo version,\$\{GL_VERSION\}`,/);
});
console.log(`Completed ${count} Gauss-law test groups.`);
console.log(`${count} gauss-law test groups passed`);
