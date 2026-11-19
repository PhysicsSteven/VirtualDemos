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
/* Typed field mode: the divergence theorem with fields typed by the student (here plain functions; the page compiles them with vdmath) */
const fv=(fx,fy,fz)=>(x,y,z,o)=>{o[0]=fx(x,y,z);o[1]=fy(x,y,z);o[2]=fz(x,y,z);return o;};
const rel=(a,b,t=1e-9)=>assert(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),`expected ${b}, got ${a}`);
const PL=[[-6,-5],[7,-4],[5,6],[-4,7]],TRI=g.triangulate(PL);
const SH={sphere:{kind:'sphere',cx:-2,cy:1,R:6},box:{kind:'box',cx:1,cy:2,w:16,h:10,d:12},cyl:{kind:'cyl',cx:1,cy:2,w:16,h:10},prism:{kind:'prism',P:PL,d:12,tris:TRI}};
const VOL={sphere:4/3*Math.PI*216,box:16*10*12,cyl:Math.PI*25*16,prism:g.signedArea(PL)*12};
test('typed field: F = (x, y, z) gives flux = 3V = triple integral of div F on every shape',()=>{
  for(const [k,S] of Object.entries(SH)){const r=g.fieldFlux(fv((x)=>x,(x,y)=>y,(x,y,z)=>z),()=>3,S);assert(!r.error,k);rel(r.total,3*VOL[k]);rel(r.vol,3*VOL[k]);assert(r.converged);
    rel(r.pieces.reduce((a,p)=>a+p.flux,0),r.total,1e-12);assert(r.pieces.some(p=>p.key===g.OPEN_PIECE[k]),k+' has its open piece');}
});
test('typed field: divergence theorem for smooth fields that are not polynomials',()=>{
  const F1=fv(Math.sin,(x,y)=>Math.exp(-y*y/20),(x,y,z)=>Math.cos(z)*x),d1=(x,y)=>Math.cos(x)-y/10*Math.exp(-y*y/20);
  const F2=fv((x,y,z)=>x*x/10,(x,y)=>y*y/10,(x,y,z)=>z*z/10),d2=(x,y,z)=>(x+y+z)/5;
  for(const [k,S] of Object.entries(SH)){for(const [Fv,dv] of [[F1,d1],[F2,d2]]){const r=g.fieldFlux(Fv,dv,S);assert(!r.error&&r.converged,k);assert(Math.abs(r.total-r.vol)<=1e-9*r.scale,`${k}: ${r.total} vs ${r.vol}`);}}
  /* (x², y², z²)/10 over a box centered at (cx, cy, 0): the triple integral is V(cx + cy)/5 */
  rel(g.fieldFlux(F2,d2,SH.box).total,VOL.box*(1+2)/5);
});
test('typed field: an open hemisphere from the closed sphere less its lower half',()=>{
  /* F = (xz, y + x², z), div F = z + 2, ball of radius 5 at the origin: closed flux 2V = 1000π/3; the upper half alone,
     closed by the disk z = 0 (where F·n = −z = 0), is ∫∫∫ over the half ball = (2/3)πR³·2 + πR⁴/4 */
  const R=5,r=g.fieldFlux(fv((x,y,z)=>x*z,(x,y)=>y+x*x,(x,y,z)=>z),(x,y,z)=>z+2,{kind:'sphere',cx:0,cy:0,R});
  rel(r.total,1000*Math.PI/3);rel(r.vol,1000*Math.PI/3);
  const up=r.pieces.find(p=>p.key==='zPos').flux,down=r.pieces.find(p=>p.key==='zNeg').flux;
  rel(up,4/3*Math.PI*R**3+Math.PI*R**4/4);rel(up+down,r.vol);assert.equal(g.OPEN_PIECE.sphere,'zNeg');
});
test('typed field: zero divergence and the inverse square field',()=>{
  const r0=g.fieldFlux(fv((x,y)=>x*x-y*y,(x,y)=>-2*x*y,()=>0),()=>0,{kind:'box',cx:1,cy:0,w:14,h:10,d:10});
  assert(Math.abs(r0.total)<1e-9*r0.scale);assert(r0.out>1000);rel(r0.out,-r0.inw);
  const inv=fv((x,y,z)=>x/(x*x+y*y+z*z)**1.5,(x,y,z)=>y/(x*x+y*y+z*z)**1.5,(x,y,z)=>z/(x*x+y*y+z*z)**1.5);
  const div=(x,y,z)=>{const r2=x*x+y*y+z*z;return 3/r2**1.5-3*r2/r2**2.5;};
  const a=g.fieldFlux(inv,div,{kind:'sphere',cx:1.5,cy:0.5,R:5});rel(a.total,4*Math.PI,1e-8);assert(Math.abs(a.vol)<1e-6,'div F = 0 away from the origin');
  const b=g.fieldFlux(inv,div,{kind:'sphere',cx:9,cy:0.5,R:5});assert(Math.abs(b.total)<1e-9&&Math.abs(b.vol)<1e-9,'origin outside: both 0');
});
test('typed field: a field that blows up ends with an error, not a hang',()=>{
  const t0=Date.now(),r=g.fieldFlux(fv((x)=>1/x,()=>0,()=>0),(x)=>-1/(x*x),{kind:'box',cx:0,cy:0,w:4,h:4,d:4});
  assert(r.error==='nonfinite'||r.error==='budget',JSON.stringify(r));assert(Date.now()-t0<20000);
  const s=g.fieldFlux(fv((x)=>1/(x-0.3),()=>0,()=>0),(x)=>-1/((x-0.3)**2),{kind:'box',cx:0,cy:0,w:4,h:4,d:4});
  assert(s.error==='nonfinite'||s.error==='budget',JSON.stringify(s));
});
test('typed field mode keeps every existing control and loads vdmath',()=>{
  for(const id of ['modeSeg','viewSeg','play','reset','drawBtn','surfSeg','sR','sW','sH','sD','addPos','addNeg','delQ','sQ','qX','qY','tLines','tArrows','tCross','tGrid','tPatch','tReduce','sDen','capture','expTab','clearTab','tPred','symSeg','sphSeg','yQ','yR','yL','yS','yr','yLen'])assert.match(src,new RegExp(`id="${id}"`),id);
  for(const m of ['flux','sym','field'])assert.match(src,new RegExp(`data-m="${m}"`));
  assert.match(src,/<script src="lib\/vdmath\.js"><\/script>/);
  for(const p of ['fSource','fNone','fGrow','fOpen','fPoint'])assert.match(src,new RegExp(`data-p="${p}"`));
});
console.log(`Completed ${count} Gauss-law test groups.`);
console.log(`${count} gauss-law test groups passed`);
