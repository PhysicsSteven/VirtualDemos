'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const f=require('./demo_source.cjs').core('faraday','MU0,MAG,ellipKE,ringFlux,ringField,cylFluxUnit,cylFieldUnit,coilFlux,dipoleFlux,magMoment,tiltFluxUnit,flipSeries,seriesEval,circuitStep,makeCircuit,runMove,magnetForce,genPhi,genEmf,railsPhi,coast,gaussLegendre,RHO_CU,WIRE_D,R_SRC,windC,wireR,selfL,diskRule,bundleM,minSep,coilSystem,coilPhasor,coilExp,coilStepper,coilOut,coilStep,coilOpen,solenoidL,toroidL,nagaokaK,selfSystem,selfFieldEnergy,selfWave,rampAt,selfCirc,selfStep,selfStart,FD_VERSION,csvHeader,tableRows');let count=0;
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
// ---------- self inductance (OpenStax University Physics Vol 2, §14.2) ----------
test('solenoid L = μ0 N² A/ℓ: value, scaling with N², A, 1/ℓ and μr',()=>{
 close(f.solenoidL(500,.2,.02,1),f.MU0*500*500*Math.PI*.0004/.2,1e-14);
 close(f.solenoidL(500,.2,.02,1),1.97392088e-3,1e-8);   // μ0 × 250000 × π(0.02)² / 0.2
 const L0=f.solenoidL(300,.15,.01,1);
 close(f.solenoidL(600,.15,.01,1),4*L0,1e-14);close(f.solenoidL(300,.3,.01,1),L0/2,1e-14);close(f.solenoidL(300,.15,.02,1),4*L0,1e-14);close(f.solenoidL(300,.15,.01,200),200*L0,1e-14);
 const s=f.selfSystem({shape:'sol',N:300,l:.15,r:.01,mur:1});close(s.L,L0,1e-14);close(s.L,s.mu*s.N*s.N*s.A/s.l,1e-14);
 assert.throws(()=>f.selfSystem({shape:'sol',N:300,l:0,r:.01,mur:1}),/Invalid/);assert.throws(()=>f.selfSystem({shape:'tor',N:3,a:.05,b:.04,h:.01,mur:1}),/Invalid/);
});
test('Nagaoka coefficient: tabulated values, the long coil limit, and a direct current sheet integral',()=>{
 // Grover (1946) Table 36: 2r/ℓ = 1 gives K = 0.6884; 2r/ℓ = 0.1 gives 0.9588; 2r/ℓ = 2 gives 0.5255
 close(f.nagaokaK(.5,1),.6884,1e-4);close(f.nagaokaK(.05,1),.9588,1e-4);close(f.nagaokaK(1,1),.5255,2e-4);
 // long coil: K = 1 − 4k/(3π) + O(k²) with k = 2r/√(4r²+ℓ²)
 for(const l of [50,200]){const k=2/Math.hypot(2,l);assert(Math.abs(f.nagaokaK(1,l)-(1-4*k/(3*Math.PI)))<k*k);}
 assert(f.nagaokaK(.01,.2)<1&&f.nagaokaK(.01,.2)>f.nagaokaK(.02,.2));
 // independent: L of a uniform current sheet = (N/ℓ)² ∫∫ M_ring(z1 − z2) dz1 dz2 = 2(N/ℓ)² ∫₀^ℓ (ℓ − u) M(u) du,
 // M(u) from Maxwell's ring formula; graded composite Gauss-Legendre for the log singularity at u = 0
 const G=f.gaussLegendre(16);
 for(const [r,l] of [[.02,.2],[.05,.1],[.01,.5]]){
  let sum=0;const P=60;
  for(let p=0;p<P;p++){const lo=l*Math.pow(p/P,4),hi=l*Math.pow((p+1)/P,4);for(let i=0;i<16;i++){const u=lo+(hi-lo)*(G.x[i]+1)/2;sum+=G.w[i]/2*(hi-lo)*(l-u)*f.ringFlux(r,r,u);}}
  const Lsheet=2*sum/(l*l),Kn=Lsheet/(f.MU0*Math.PI*r*r/l);
  console.log('   Nagaoka 2r/l',(2*r/l).toFixed(2),'closed form',f.nagaokaK(r,l).toFixed(8),'integral',Kn.toFixed(8));
  close(f.nagaokaK(r,l),Kn,2e-6);
 }
});
test('flux linkage NΦ_B = LI for the solenoid and the toroid (toroid flux by direct radial integral)',()=>{
 const s=f.selfSystem({shape:'sol',N:500,l:.2,r:.02,mur:50}),c=f.selfCirc(s.N,s.L,0);
 for(const I of [.3,-1.7,2.5]){f.selfStep(c,I,1e-3);close(s.N*c.phi,s.L*I,1e-14);close(c.link,s.L*I,1e-14);close(c.phi,s.Bin*I*s.A,1e-12);}
 const t=f.selfSystem({shape:'tor',N:400,a:.04,b:.06,h:.02,mur:1});
 close(t.L,f.MU0*400*400*.02*Math.log(1.5)/(2*Math.PI),1e-14);close(t.L,f.toroidL(400,.04,.06,.02,1),1e-14);
 // Φ per turn = ∫_a^b B(ρ) h dρ with B = μ0 N I/(2πρ), midpoint rule with many slices
 const I=1.3,n=200000;let phi=0;for(let j=0;j<n;j++){const rho=.04+.02*(j+.5)/n;phi+=f.MU0*400*I/(2*Math.PI*rho)*.02*.02/n;}
 close(t.phiA*I,phi,1e-9);close(400*phi,t.L*I,1e-9);
 // a thin toroid is a solenoid bent round: ℓ = 2πR, A = h(b − a)
 const thin=f.selfSystem({shape:'tor',N:400,a:.099,b:.101,h:.02,mur:1});close(thin.L,f.MU0*400*400*.02*.002/(2*Math.PI*.1),1e-4);
});
test('back EMF ε = −L dI/dt is exact for linear ramps, with the sign set by the change, not the current',()=>{
 const s=f.selfSystem({shape:'sol',N:500,l:.2,r:.02,mur:1}),L=s.L,dt=1e-3;
 for(const kind of ['trap','tri']){
  const I0=2,T=.5,c=f.selfCirc(s.N,L,0);
  for(let i=1;i<=4000;i++){
   const t=i*dt,I=f.selfWave(kind,I0,T,t);f.selfStep(c,I,dt);
   const u=((t-dt/2)%2+2)%2;   // phase of the step midpoint in the 4T = 2 s period; no corner lies inside a 1 ms step here
   const slope=kind==='trap'?(u<T?I0/T:u<2*T?0:u<3*T?-I0/T:0):(u<T||u>3*T?I0/T:-I0/T);
   close(c.emf,-L*slope,1e-9,1e-15);
  }
 }
 // triangle: while I > 0 and falling, ε > 0 (pushes along I); while I < 0 and falling, ε > 0 too: ε follows −dI/dt, not −I
 const c=f.selfCirc(s.N,L,0);let sawPosIfalling=false,sawNegIfalling=false;
 for(let i=1;i<=2000;i++){const t=i*dt;f.selfStep(c,f.selfWave('tri',2,.5,t),dt);if(t>.6&&t<.9){assert(c.I>0&&c.emf>0);sawPosIfalling=true;}if(t>1.1&&t<1.4){assert(c.I<0&&c.emf>0);sawNegIfalling=true;}}
 assert(sawPosIfalling&&sawNegIfalling);
 // sine: the step average is −LωI0 cos(ω t_mid) × sin(ω dt/2)/(ω dt/2)
 const w=2*Math.PI/2,cs=f.selfCirc(s.N,L,0);for(let i=1;i<=900;i++){const t=i*dt;f.selfStep(cs,f.selfWave('sine',2,.5,t),dt);close(cs.emf,-L*w*2*Math.cos(w*(t-dt/2))*Math.sin(w*dt/2)/(w*dt/2),1e-9,1e-15);}
 // by hand: a 5 ms switch from 0 to 2 A gives ε = −L × 400 A/s for exactly five steps
 const rp={I1:0,I2:2,t0:0,dur:.005},ch=f.selfCirc(s.N,L,0);const e=[];for(let i=1;i<=8;i++){f.selfStep(ch,f.rampAt(rp,i*dt),dt);e.push(ch.emf);}
 for(let i=0;i<5;i++)close(e[i],-L*400,1e-9);for(let i=5;i<8;i++)close(e[i],0,0,1e-18);
 // waves are continuous and periodic
 for(const k of ['trap','tri','sine'])for(const t of [.5,1,1.5,2]){close(f.selfWave(k,2,.5,t+1e-9),f.selfWave(k,2,.5,t-1e-9),1e-6,1e-7);close(f.selfWave(k,2,.5,t+.3),f.selfWave(k,2,.5,t+2.3),1e-9,1e-12);}
});
test('∫ε dt = −NΔΦ_B = −LΔI, and the source work equals Δ(½LI²) exactly',()=>{
 const s=f.selfSystem({shape:'tor',N:400,a:.04,b:.06,h:.02,mur:200}),c=f.selfStart(f.selfCirc(s.N,s.L,.4)),dt=1e-3;
 for(let i=1;i<=1733;i++)f.selfStep(c,.4+f.selfWave('sine',1.5,.37,i*dt),dt);
 close(c.intEmf,-s.N*(c.phi-c.phi0),1e-9,1e-15);close(c.intEmf,-s.L*(c.I-.4),1e-9,1e-15);
 close(c.Wsrc,c.U-c.U0,1e-9,1e-18);close(c.U,.5*s.L*c.I*c.I,1e-14);
 // ramp up then all the way down: the source gets back every joule it put in
 const d=f.selfStart(f.selfCirc(s.N,s.L,0));for(let i=1;i<=2000;i++)f.selfStep(d,f.selfWave('trap',2,.5,i*dt),dt);
 close(d.I,0,0,1e-12);assert(Math.abs(d.Wsrc)<1e-15);
});
test('energy density: ∫B²/(2μ) dV = ½LI² for the solenoid and the toroid',()=>{
 for(const p of [{shape:'sol',N:500,l:.2,r:.02,mur:1},{shape:'sol',N:1000,l:.05,r:.05,mur:1000},{shape:'tor',N:400,a:.04,b:.06,h:.02,mur:1},{shape:'tor',N:900,a:.01,b:.12,h:.05,mur:20}]){
  const s=f.selfSystem(p),I=1.7;close(f.selfFieldEnergy(s,I),.5*s.L*I*I,1e-12);
  if(p.shape==='tor'){   // independent: midpoint rule over the radius
   let U=0;const n=100000;for(let j=0;j<n;j++){const rho=p.a+(p.b-p.a)*(j+.5)/n,B=s.mu*p.N*I/(2*Math.PI*rho);U+=B*B/(2*s.mu)*p.h*2*Math.PI*rho*(p.b-p.a)/n;}
   close(U,.5*s.L*I*I,1e-8);
  }
 }
});
// ---------- lab data helpers ----------
test('CSV header: every line a comment, version line, SI parameters exact, no stray line breaks',()=>{
 assert.match(f.FD_VERSION,/^faraday@\d{4}-\d{2}-\d{2}\.\d+$/);
 const L=f.csvHeader({title:"Faraday's and Lenz's Laws",version:f.FD_VERSION,setup:'Generator\n(apparatus: gen)',params:[['coil_turns_N',100],['coil_area_A_m2',100*1e-4],['field_B_T',.2],['motor','on']],model:'Phi = B A cos(theta)',rounding:'none',seed:null,notes:['two\nlines']});
 for(const l of L){assert(l.startsWith('# '),l);assert(!/[\r\n]/.test(l));}
 assert.equal(L[0],"# Faraday's and Lenz's Laws (simulated data)");assert.equal(L[1],'# demo version,'+f.FD_VERSION);
 assert.equal(L[2],'# setup,Generator (apparatus: gen)');
 // 100 cm² is 0.01 m² exactly in the header, not 0.010000000000000002
 assert(L.includes('# coil_area_A_m2,0.01'));assert(L.includes('# field_B_T,0.2'));assert(L.includes('# motor,on'));
 assert(L.includes('# seed,none'));assert(L.includes('# two lines'));assert(L.some(l=>l.startsWith('# model,'))&&L.some(l=>l.startsWith('# rounding,')));
});
test('plot table rows: window, thinning, first and last kept, never more than asked',()=>{
 const ts=Array.from({length:2001},(_,i)=>i*1e-3);
 let r=f.tableRows(ts,.5,1.5,120);assert.equal(r.idx[0],500);assert.equal(r.idx[r.idx.length-1],1500);assert(r.idx.length<=121);
 for(let j=1;j<r.idx.length;j++)assert(r.idx[j]>r.idx[j-1]);
 assert.equal(r.every,Math.ceil(1000/119));
 r=f.tableRows(ts,0,.01,120);assert.equal(r.every,1);assert.deepEqual([...r.idx],Array.from({length:11},(_,i)=>i));
 assert.equal(f.tableRows(ts,3,4,10).idx.length,0);assert.equal(f.tableRows([],0,1,10).idx.length,0);
});
console.log(`Completed ${count} Faraday test groups.`);
console.log(`${count} faraday test groups passed`);
