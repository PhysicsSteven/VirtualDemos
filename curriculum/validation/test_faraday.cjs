'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const f=require('./demo_source.cjs').core('faraday','MU0,MAG,ellipKE,ringFlux,ringField,cylFluxUnit,cylFieldUnit,coilFlux,dipoleFlux,magMoment,tiltFluxUnit,flipSeries,seriesEval,circuitStep,makeCircuit,runMove,magnetForce,genPhi,genEmf,railsPhi,coast,gaussLegendre,RHO_CU,WIRE_D,R_SRC,windC,wireR,selfL,diskRule,bundleM,minSep,coilSystem,coilPhasor,coilExp,coilStepper,coilOut,coilStep,coilOpen');let count=0;
const close=(a,b,rel=1e-8,abs=1e-12)=>assert(Math.abs(a-b)<=abs+rel*Math.abs(b),`expected ${b}, got ${a}`);
const test=(name,fn)=>{try{fn();count++;console.log('PASS',name);}catch(e){process.exitCode=1;console.error('FAIL',name,e.message);}};
test('ring field agrees with independent on-axis Biot-Savart formula',()=>{
 for(const b of [.01,.03])for(const z of [0,.02,.1]){const [Bz,Br]=f.ringField(b,0,z);close(Bz,f.MU0*b*b/(2*(b*b+z*z)**1.5));close(Br,0);}
});
test('ring mutual flux agrees with independent Neumann integral',()=>{
 for(const [a,b,z] of [[.025,.01,0],[.015,.01,.02],[.05,.01,.12]]){
  let sum=0;const n=20000;for(let j=0;j<n;j++){const p=2*Math.PI*(j+.5)/n;sum+=Math.cos(p)/Math.sqrt(a*a+b*b+z*z-2*a*b*Math.cos(p));}
  const ref=f.MU0*a*b/2*sum*2*Math.PI/n;close(f.ringFlux(a,b,z),ref,2e-8,1e-16);
 }
});
test('finite magnet field and flux convergence',()=>{
 for(const z of [0,.04,.12]){
  const h=f.MAG.len/2,b=f.MAG.b,ref=.5*((z+h)/Math.sqrt((z+h)**2+b*b)-(z-h)/Math.sqrt((z-h)**2+b*b));
  close(f.cylFieldUnit(0,z,32)[0],ref,1e-8);
  for(const a of [.015,.025,.05])close(f.cylFluxUnit(a,z,16),f.cylFluxUnit(a,z,32),1e-8);
 }
});
test('magnet reversal, linearity, Faraday integral and speed invariance',()=>{
 const p={N:400,R:100,Br:1.2,a:.025,pol:1};
 const slow=f.runMove(p,-.12,0,.1,.001),fast=f.runMove(p,-.12,0,.4,.001),rev=f.runMove(p,0,-.12,.1,.001);
 close(slow.c.Q,fast.c.Q);close(slow.c.Q,-rev.c.Q);assert(slow.c.Q<0);assert(rev.c.Q>0);
 close(slow.c.intEmf,-p.N*(slow.c.phi-slow.c.phi0));
 close(f.coilFlux(2*p.Br,p.a,.04),2*f.coilFlux(p.Br,p.a,.04));
 const i=slow.out.find(row=>row[0]===.1)[3];assert(f.magnetForce(p,-.11,i)<0);
});
test('generator exact interval average, phase and step refinement',()=>{
 const N=100,B=.2,A=.01,w=6.3,R=100,t=.25;
 function error(dt){const c=f.makeCircuit(N,R,f.genPhi(B,A,w*(t-dt)));f.circuitStep(c,f.genPhi(B,A,w*t),dt);const mid=f.genEmf(N,B,A,w,w*(t-dt/2));close(c.emf,mid*Math.sin(w*dt/2)/(w*dt/2));return Math.abs(c.emf-mid);}
 const a=error(.004),b=error(.002),c=error(.001);assert(a/b>3.9&&b/c>3.9);
 close(f.genEmf(N,B,A,w,0),0);close(f.genEmf(N,B,A,w,Math.PI/2),1.26);
});
test('rails sign, electromagnetic drag and mechanical power',()=>{
 const B=1,L=.2,v=1,R=.47,dt=.001,c=f.makeCircuit(1,R,f.railsPhi(B,L,.1));
 f.circuitStep(c,f.railsPhi(B,L,.1+v*dt),dt);close(c.emf,-B*L*v);assert(c.I<0);
 close(-(c.I*L*B)*v,c.I*c.I*R);close(c.heat,c.I*c.I*R*dt);
});
test('coasting energy converges and zero field remains ballistic',()=>{
 const p={B:1,L:.2,m:.02,R:.47},v0=1,T=.2;
 function error(dt){const n=Math.round(T/dt),c=f.makeCircuit(1,p.R,0);for(let j=1;j<=n;j++)f.circuitStep(c,f.railsPhi(p.B,p.L,f.coast(p,v0,j*dt).dx),dt);const exact=.5*p.m*(v0*v0-f.coast(p,v0,T).v**2);return Math.abs(c.heat-exact);}
 const a=error(.004),b=error(.002),c=error(.001);assert(a/b>3.9&&b/c>3.9);
 const z=f.coast({...p,B:0},2,3);close(z.v,2);close(z.dx,6);assert.equal(z.tau,Infinity);
});
test('invalid time step and resistance rejected',()=>{
 assert.throws(()=>f.makeCircuit(1,0,0),/Invalid/);assert.throws(()=>f.circuitStep(f.makeCircuit(1,1,0),1,0),/Invalid/);
});
// ---------- two coils: mutual induction ----------
const C=(re,im)=>[re,im],cmul=(a,b)=>[a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]],cdiv=(a,b)=>{const q=b[0]*b[0]+b[1]*b[1];return [(a[0]*b[0]+a[1]*b[1])/q,(a[1]*b[0]-a[0]*b[1])/q];},cabs=a=>Math.hypot(a[0],a[1]);
const sysOf=(o)=>f.coilSystem({N1:200,N2:200,a1:.04,a2:.04,d:.025,RL:.47,...o});
test('mutual inductance is symmetric for coils of different radii and turns',()=>{
 for(const [a,b,z] of [[.04,.03,.02],[.04,.06,.05],[.03,.055,.11]])close(f.ringFlux(a,b,z),f.ringFlux(b,a,z),1e-12);
 const c1=f.windC(200),c2=f.windC(80);
 for(const d of [.025,.06,.15])close(f.bundleM(.04,c1,.055,c2,d),f.bundleM(.055,c2,.04,c1,d),1e-12);
 const s12=f.coilSystem({N1:200,N2:80,a1:.04,a2:.055,d:.04,RL:1}),s21=f.coilSystem({N1:80,N2:200,a1:.055,a2:.04,d:.04,RL:1});close(s12.M,s21.M,1e-12);
});
test('ring mutual inductance equals the flux of the ring field integrated over the disk',()=>{
 // independent: Φ = ∫₀^r 2πρ B_z(ρ, z) dρ with B_z from the Biot-Savart field of the other ring, composite Gauss-Legendre
 const G=f.gaussLegendre(16);
 for(const [r,b,z] of [[.04,.04,.025],[.055,.04,.04],[.03,.06,.1]]){
  let sum=0;const P=200;for(let p=0;p<P;p++)for(let i=0;i<16;i++){const rho=r*(p+(G.x[i]+1)/2)/P;sum+=G.w[i]/2*r/P*2*Math.PI*rho*f.ringField(b,rho,z)[0];}
  close(f.ringFlux(r,b,z),sum,2e-6);
 }
});
test('bundle mutual inductance converges in the cross section quadrature, including the closest allowed spacing',()=>{
 for(const N of [20,200,300]){const c=f.windC(N),d=f.minSep(c,c);
  const a=f.bundleM(.04,c,.04,c,d),b=f.bundleM(.04,c,.04,c,d,f.diskRule(12,24));close(a,b,2e-5);
  assert(d>=2*c+.003-1e-12);}
 // far apart M ∝ a1²a2²: averaging (a + c x)² over each section gives the factor (1 + c²/4a²) per coil
 const c=f.windC(200),q=1+c*c/(4*.0016);close(f.bundleM(.04,c,.04,c,1),f.ringFlux(.04,.04,1)*q*q,2e-4);
});
test('self inductance formula agrees with a direct integral over the winding cross section',()=>{
 // L/N² = mean over two points of the bundle section of the ring mutual inductance (uniform current density).
 // The inner integral is done in polar coordinates about the outer point, which tames the logarithmic singularity.
 const G=f.gaussLegendre(24),G2=f.gaussLegendre(48);
 for(const [N,a] of [[200,.04],[300,.03],[20,.06]]){
  const c=f.windC(N),outer=f.diskRule(8,16);let tot=0;
  for(const [x1,y1,w1] of outer){
   const r1=a+c*x1;let inner=0;
   for(let k=0;k<48;k++){const th=Math.PI*(G2.x[k]+1),wt=G2.w[k]*Math.PI,ux=Math.cos(th),uy=Math.sin(th);
    // distance from (x1,y1) to the unit circle along (ux,uy)
    const bq=x1*ux+y1*uy,rmax=-bq+Math.sqrt(bq*bq-(x1*x1+y1*y1-1));
    for(let i=0;i<24;i++){const rr=rmax*(G.x[i]+1)/2,wr=G.w[i]/2*rmax*rr;inner+=wt*wr*f.ringFlux(r1,a+c*(x1+rr*ux),c*rr*uy);}
   }
   tot+=w1*inner/Math.PI;
  }
  const L=N*N*tot,Lf=f.selfL(N,a,c);
  console.log('   L check N',N,'a',a,'c/a',(c/a).toFixed(3),'formula',Lf.toExponential(6),'integral',L.toExponential(6),'rel',((Lf-L)/L).toExponential(2));
  close(Lf,L,1e-4);
 }
});
test('coupling coefficient is below 1 and falls with distance',()=>{
 let last=1;
 for(const d of [.025,.03,.05,.1,.2]){const s=sysOf({d});assert(s.k>0&&s.k<1);assert(s.k<last);last=s.k;}
 for(const [N1,N2,a2] of [[300,300,.03],[300,20,.06],[20,300,.03]]){const d=f.minSep(f.windC(N1),f.windC(N2));const s=f.coilSystem({N1,N2,a1:.04,a2,d,RL:.1});assert(s.k<1,`k=${s.k}`);
  // L1L2 − M² > 0: the inductance matrix is positive definite
  assert(s.L1*s.L2-s.M*s.M>0);}
});
test('wire resistance and Maxwell formula values',()=>{
 close(f.wireR(200,.04),1.68e-8*200*2*Math.PI*.04/(Math.PI*.25e-6),1e-12);
 const c=f.windC(200);close(c,1e-3*Math.sqrt(200/Math.PI),1e-12);
 close(f.selfL(1,.04,c),f.MU0*.04*((1+c*c/(8*.0016))*Math.log(8*.04/c)-1.75+c*c/(24*.0016)),1e-12);
});
function stepTo(k,st,T){const n=Math.round(T/k.h);let E={src:0,q1:0,q2:0};for(let i=0;i<n;i++){const e=f.coilStep(k,st);E.src+=e.src;E.q1+=e.q1;E.q2+=e.q2;}return E;}
test('the exact stepper agrees with an independent fourth order Runge-Kutta integration through the start-up transient',()=>{
 for(const closed of [true,false]){
  const s=sysOf({}),w=2*Math.PI*200,V0=5,k=f.coilStepper(s,w,V0,closed,1/(200*200)),st={t:0,I1:0,I2:0,th:0};
  stepTo(k,st,.006);
  // RK4 of L dI/dt = V − R I with a much finer step
  const D=s.L1*s.L2-s.M*s.M,rhs=(t,I)=>{const V=V0*Math.sin(w*t),r1=V-s.R1*I[0],r2=-s.R2*I[1];return closed?[(s.L2*r1-s.M*r2)/D,(s.L1*r2-s.M*r1)/D]:[r1/s.L1,0];};
  let I=[0,0],t=0;const h=2e-7;for(let i=0;i<30000;i++){const k1=rhs(t,I),k2=rhs(t+h/2,I.map((v,j)=>v+h/2*k1[j])),k3=rhs(t+h/2,I.map((v,j)=>v+h/2*k2[j])),k4=rhs(t+h,I.map((v,j)=>v+h*k3[j]));I=I.map((v,j)=>v+h/6*(k1[j]+2*k2[j]+2*k3[j]+k4[j]));t+=h;}
  close(st.I1,I[0],1e-9,1e-12);close(st.I2,I[1],1e-9,1e-12);
 }
});
test('time stepping converges to the phasor steady state, for any step size',()=>{
 const s=sysOf({}),w=2*Math.PI*200,V0=5;
 for(const closed of [true,false])for(const h of [1/(200*200),1e-3/7]){
  const k=f.coilStepper(s,w,V0,closed,h),st={t:0,I1:0,I2:0,th:0},ph=f.coilPhasor(s,w,V0,closed);
  stepTo(k,st,.2);   // 80 primary time constants
  close(st.I1,ph.X1[0]*Math.sin(st.th)+ph.X1[1]*Math.cos(st.th),1e-9,1e-12);
  close(st.I2,ph.X2[0]*Math.sin(st.th)+ph.X2[1]*Math.cos(st.th),1e-9,1e-12);
  // and the stepper reproduces the exact transient: compare the two step sizes at a common time
 }
 const a=f.coilStepper(s,w,V0,true,1e-4),b=f.coilStepper(s,w,V0,true,1e-6),sa={t:0,I1:0,I2:0,th:0},sb={t:0,I1:0,I2:0,th:0};
 stepTo(a,sa,.003);stepTo(b,sb,.003);close(sa.I1,sb.I1,1e-9,1e-12);close(sa.I2,sb.I2,1e-9,1e-12);
});
test('open circuit EMF amplitude equals ωM times the primary current amplitude',()=>{
 for(const fr of [50,200,1000]){
  const s=sysOf({d:.04}),w=2*Math.PI*fr,k=f.coilStepper(s,w,5,false,1/(fr*400)),st={t:0,I1:0,I2:0,th:0};
  stepTo(k,st,40*s.L1/s.R1);let emax=0,imax=0;const n=400;
  for(let i=0;i<n;i++){f.coilStep(k,st);const o=f.coilOut(k,st);emax=Math.max(emax,Math.abs(o.emf2));imax=Math.max(imax,Math.abs(o.I1));close(o.emf2,-s.M*o.dI1,1e-12);}
  close(emax,w*s.M*imax,2e-4);   // sampled maxima, 400 samples per period
  const ph=f.coilPhasor(s,w,5,false);close(cabs(ph.E2),w*s.M*cabs(ph.X1),1e-12);
 }
});
test('energy balance: source energy = heat in R1 and R2 + change in magnetic energy',()=>{
 for(const closed of [true,false]){
  const s=sysOf({}),w=2*Math.PI*200,V0=5,k=f.coilStepper(s,w,V0,closed,1/(200*200)),st={t:0,I1:0,I2:0,th:0};
  const E=stepTo(k,st,.0123),W=f.coilOut(k,st).Wm;close(E.src,E.q1+E.q2+W,1e-9);
  // steady state: one period of power in equals one period of I²R, and both equal the phasor averages
  stepTo(k,st,.2-.0123);const P=stepTo(k,st,1/200),ph=f.coilPhasor(s,w,V0,closed);
  close(P.src*200,P.q1*200+P.q2*200,1e-9);close(P.src*200,ph.Pin,1e-9);close(ph.Pin,ph.P1+ph.P2,1e-12);
  if(!closed)assert.equal(P.q2,0);
 }
});
test('reflected impedance: closing the secondary adds ω²M²/(R2 + iωL2) to the primary',()=>{
 const s=sysOf({d:.03}),w=2*Math.PI*300,V0=5;
 // independent: solve the 2 × 2 complex system by Cramer's rule
 const Z11=C(s.R1,w*s.L1),Z22=C(s.R2,w*s.L2),Z12=C(0,w*s.M),det=[cmul(Z11,Z22)[0]-cmul(Z12,Z12)[0],cmul(Z11,Z22)[1]-cmul(Z12,Z12)[1]];
 const X1=cdiv(cmul(C(V0,0),Z22),det),X2=cdiv(cmul(C(-V0,0),Z12),det),ph=f.coilPhasor(s,w,V0,true);
 close(ph.X1[0],X1[0],1e-12);close(ph.X1[1],X1[1],1e-12);close(ph.X2[0],X2[0],1e-12);close(ph.X2[1],X2[1],1e-12);
 const Zin=cdiv(C(V0,0),X1),Zref=cdiv(C(w*w*s.M*s.M,0),Z22);close(Zin[0],s.R1+Zref[0],1e-12);close(Zin[1],w*s.L1+Zref[1],1e-12);
 // the reflected resistance is positive and the reflected reactance negative: the primary looks less inductive
 assert(Zref[0]>0&&Zref[1]<0);
 // time stepping: the primary current amplitude changes by exactly the predicted ratio
 const amp=(closed)=>{const k=f.coilStepper(s,w,V0,closed,1/(300*400)),st={t:0,I1:0,I2:0,th:0};stepTo(k,st,.2);let m=0;for(let i=0;i<400;i++){f.coilStep(k,st);m=Math.max(m,Math.abs(st.I1));}return m;};
 close(amp(true)/amp(false),cabs(cdiv(C(s.R1,w*s.L1),Zin)),1e-4);
});
test('average force: the closed secondary is repelled, and opening the switch keeps the primary flux linkage',()=>{
 const s=sysOf({}),ph=f.coilPhasor(s,2*Math.PI*200,5,true);assert(s.dM<0);assert(ph.Favg>0);
 const st={t:0,I1:.7,I2:-.4,th:0},l1=s.L1*st.I1+s.M*st.I2;f.coilOpen(s,st);close(s.L1*st.I1,l1,1e-14);assert.equal(st.I2,0);
 assert.throws(()=>f.coilSystem({N1:300,N2:300,a1:.04,a2:.04,d:.01,RL:1}),/overlap/);
});
console.log(`Completed ${count} Faraday test groups.`);
