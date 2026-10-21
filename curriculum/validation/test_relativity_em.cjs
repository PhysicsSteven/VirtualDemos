'use strict';
// Magnetism from Relativity core: Purcell's wire in two frames, the exact field transformation and the
// field of a uniformly moving point charge, each checked against an independent derivation.
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS',name);};
function close(a,b,rel=1e-12,abs=0){assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+rel*Math.abs(b),`expected ${b}, got ${a}`);}
const R=core('relativity-em','C0,EPS0,MU0,QE,N_CU,K2,KC,gammaOf,gm1,relVel,wireInFrame,wireForce,labForce,copperWire,boostFields,invariants,coulomb,movingCharge,movingFromCoulomb,lineAngle,isoRadius');
const c=299792458,eps0=8.8541878128e-12,mu0=1/(eps0*c*c),e=1.602176634e-19;
const g=(b)=>1/Math.sqrt(1-b*b);
const SPEEDS=[[0.5,0.5],[0.8,-0.6],[0.9,0.9],[-0.9,0.9],[0.3,0.7],[0.01,0.02],[0.9,0.1]];

test('constants: SI values, μ₀ from ε₀ and c, copper electron density',()=>{
 assert.equal(R.C0,c);close(R.EPS0,eps0);close(R.MU0,1.25663706212e-6,1e-10);close(R.QE,e);
 close(R.N_CU,8960/0.063546*6.02214076e23);close(R.N_CU,8.491e28,1e-3);
});

test('γ − 1 is accurate at drift speeds and agrees with γ − 1 at moderate speeds',()=>{
 for(const b of [0.1,0.5,0.9])close(R.gm1(b),g(b)-1,1e-12);
 const b=2.45e-13;close(R.gm1(b),b*b/2,1e-12);   // series: β²/2 + 3β⁴/8
});

test('lab frame: B = μ₀I/(2πr), F = quB, and the wire is neutral',()=>{
 const lam0=1e-6,q=1e-9,r=0.02;
 for(const [v,u] of SPEEDS){
  const L=R.labForce(lam0,v,u,q,r),I=-lam0*v*c,B=mu0*Math.abs(I)/(2*Math.PI*r);
  close(L.I,I);close(L.B,B,1e-12);
  const W=R.wireForce(lam0,v,u,q,r,0);
  assert(W.Ez===0);close(W.lamSum,0,0,1e-21);close(Math.abs(W.By),B,1e-12);assert(W.FE===0);
  // u × B: q moving along +x above the wire, current −λ₀vc along x. Same direction of motion as the electrons (uv > 0) pushes + charge away.
  close(W.F,q*u*c*B*Math.sign(v),1e-12);close(L.F,W.F,1e-12);
 }
 // textbook number: 1 A at 1 cm gives 20 μT
 close(mu0*1/(2*Math.PI*0.01),2e-5,1e-9);
});

test("charge's frame: densities from velocity addition and contraction of rest densities",()=>{
 const lam0=1;
 for(const [v,u] of SPEEDS){
  const W=R.wireInFrame(lam0,v,u);
  const w=(v-u)/(1-u*v);close(W.w,w,1e-13);close(R.relVel(v,u),w,1e-13);
  assert(Math.abs(w)<1);
  // ions: rest density λ₀, move at −u → γ_u λ₀. Electrons: rest density λ₀/γ_v, move at w → γ_w λ₀/γ_v
  close(W.lamIon,g(u)*lam0,1e-13);close(W.lamEl,-g(w)*lam0/g(v),1e-12);
  close(W.dIon,g(u)-1,1e-10,1e-15);close(W.dEl,g(w)/g(v)-1,1e-9,1e-13);
 }
 // the 0.8c / −0.6c case: 0.946c, not 1.4c
 close(R.relVel(0.8,-0.6),1.4/1.48,1e-14);
});

test("λ′ = γᵤλ₀uv/c²: closed form, direct sum, and the transformed 4-current (cλ, I)",()=>{
 const lam0=1e-6;
 for(const [v,u] of SPEEDS){
  const W=R.wireInFrame(lam0,v,u),exact=g(u)*lam0*u*v;
  close(W.lamNet,exact,1e-13);close(W.lamSum,exact,1e-9,1e-20);
  // independent: (cλ, I) is a 4-vector. Lab: λ = 0, I = −λ₀vc. Boost by u: λ′ = γ(λ − uI/c), I′ = γ(I − ucλ)
  const I=-lam0*v*c,lp=g(u)*(0-u*I/c),Ip=g(u)*(I-0);
  close(W.lamNet,lp,1e-13);close(W.I,Ip,1e-13);close(W.Isum,Ip,1e-9);
 }
});

test("B′ is not zero in the charge's frame, and E² − c²B² matches the lab",()=>{
 const lam0=1e-6,q=1e-9,r=0.02;
 for(const [v,u] of SPEEDS){
  const L=R.wireForce(lam0,v,u,q,r,0),Q=R.wireForce(lam0,v,u,q,r,u);
  close(Math.abs(Q.By),g(u)*Math.abs(L.By),1e-12);assert(Math.abs(Q.By)>0);
  close(Q.FM,0,0,1e-30);   // q at rest
  const iL=L.Ez**2-L.cBy**2,iQ=Q.Ez**2-Q.cBy**2;close(iQ,iL,1e-11);assert(iL<0);
  // and from the general field transformation
  const [Ep,cBp]=R.boostFields([0,0,L.Ez],[0,L.cBy,0],u);close(Ep[2],Q.Ez,1e-12,1e-9);close(cBp[1],Q.cBy,1e-12);
 }
});

test("F′ = γᵤF at all speeds, including 0.9c and the low speed limit",()=>{
 const lam0=1e-6,q=1e-9,r=0.02;let worst=0;
 for(const [v,u] of [...SPEEDS,[1e-6,1e-6],[0.9,0.9]]){
  const L=R.wireForce(lam0,v,u,q,r,0),Q=R.wireForce(lam0,v,u,q,r,u);
  close(Q.F,g(u)*L.F,1e-12);worst=Math.max(worst,Math.abs(Q.F/L.F/g(u)-1));
  assert(L.FE===0);close(Q.F,Q.FE,1e-14);
  // in every intermediate frame f the transverse force is F_rest/γ of q's speed there
  for(const f of [-0.5,0.1,0.3,0.6,0.85]){const W=R.wireForce(lam0,v,u,q,r,f);close(W.F,Q.F/g(W.uq),1e-9);}
 }
 // 0.9c: γ = 2.294
 close(g(0.9),2.294157338705618,1e-14);
 // low speed: F′/F − 1 → u²/2
 const u=1e-4;close(R.gm1(u),u*u/2,1e-7);
 console.log('   worst |F′/(γF) − 1| =',worst.toExponential(2));
});

test('real copper wire: 1 A in 1 mm²',()=>{
 const W=R.copperWire(1,1e-6),n=8960/0.063546*6.02214076e23;
 close(W.lam0,n*e*1e-6);close(W.vd,1/(n*e*1e-6));close(W.vd,7.351e-5,1e-3);close(W.b,W.vd/c);
 const r=0.01,L=R.wireForce(W.lam0,W.b,W.b,-e,r,0),Q=R.wireForce(W.lam0,W.b,W.b,-e,r,W.b);
 assert(L.F<0&&Q.F<0);   // pulled toward the wire: parallel currents attract
 close(Q.lamNet,W.lam0*W.b*W.b,1e-12);
 // per meter of the second wire: N × F = μ₀I²/(2πr)
 close(W.perMeter*Math.abs(L.F),mu0/(2*Math.PI*r),1e-12);
 console.log('   v_d =',W.vd.toExponential(4),'m/s; γ−1 =',R.gm1(W.b).toExponential(3),'; λ′ =',Q.lamNet.toExponential(3),'C/m; one e per',(e/Q.lamNet).toFixed(1),'m');
});

test('field transformation: round trip, invariants, composition of boosts',()=>{
 let seed=7;const rnd=()=>{seed=(seed*16807)%2147483647;return seed/2147483647*2-1;};
 for(let k=0;k<200;k++){
  const E=[rnd()*300,rnd()*300,rnd()*300],B=[rnd()*300,rnd()*300,rnd()*300],b=rnd()*0.95;
  const [E1,B1]=R.boostFields(E,B,b),[E2,B2]=R.boostFields(E1,B1,-b);
  for(let i=0;i<3;i++){close(E2[i],E[i],1e-9,1e-9);close(B2[i],B[i],1e-9,1e-9);}
  const i0=R.invariants(E,B),i1=R.invariants(E1,B1);close(i1.dot,i0.dot,1e-9,1e-7);close(i1.diff,i0.diff,1e-9,1e-6);
  // two boosts compose by velocity addition
  const b2=rnd()*0.9,[E3,B3]=R.boostFields(E1,B1,b2),[E4,B4]=R.boostFields(E,B,(b+b2)/(1+b*b2));
  for(let i=0;i<3;i++){close(E3[i],E4[i],1e-9,1e-8);close(B3[i],B4[i],1e-9,1e-8);}
 }
 // pure B (1 mT along z), boost 0.6c: E′y = −γβcB, B′z = γB
 const cB=c*1e-3,[E,B]=R.boostFields([0,0,0],[0,0,cB],0.6);
 close(E[1],-1.25*0.6*cB);close(B[2],1.25*cB);
 // crossed fields with E = βcB: E′ vanishes
 const [Ex]=R.boostFields([0,0.5*cB,0],[0,0,cB],0.5);close(Ex[1],0,0,1e-9);
});

test('moving point charge: Heaviside equals the boosted Coulomb field; pancake ratios',()=>{
 const q=1e-9;let worst=0;
 for(const b of [0,0.3,0.8,0.95,-0.7])for(const [x,y,z] of [[1,0,0],[0,1,0],[0.6,0.8,0],[-0.3,0.2,0.9],[2,-1,0.5]]){
  const h=R.movingCharge(q,b,x,y,z),t=R.movingFromCoulomb(q,b,x,y,z);
  for(let i=0;i<3;i++){const s=Math.hypot(...h.E);worst=Math.max(worst,Math.abs(h.E[i]-t.E[i])/s,Math.abs(h.cB[i]-t.cB[i])/s);}
  // independent: rest frame coordinate x_rest = γx at lab time 0, Coulomb there, then E⊥ ×γ, E∥ same, cB = −(−β) x̂ × E... built by hand
  const G=g(b),xr=G*x,r3=Math.pow(xr*xr+y*y+z*z,1.5),k=R.KC*q/r3,E=[k*xr,G*k*y,G*k*z];
  for(let i=0;i<3;i++)close(h.E[i],E[i],1e-12,1e-15);
  close(h.cB[1],-b*E[2],1e-12,1e-15);close(h.cB[2],b*E[1],1e-12,1e-15);
 }
 assert(worst<1e-13);
 const b=0.8,G=g(b),EC=R.KC*q;
 close(Math.hypot(...R.movingCharge(q,b,1,0,0).E),EC/G**2,1e-12);
 close(Math.hypot(...R.movingCharge(q,b,0,1,0).E),G*EC,1e-12);
 close(Math.hypot(...R.movingCharge(q,b,0,1,0).cB)/c,b*G*EC/c,1e-12);
 close(EC,8.987551792,1e-9);
 // isoRadius: |E| there equals the rest field at R0
 for(const th of [0,0.4,1,Math.PI/2,2.5]){const r=R.isoRadius(th,b,2),f=R.movingCharge(q,b,r*Math.cos(th),r*Math.sin(th),0);close(Math.hypot(...f.E),R.KC*q/4,1e-12);}
});

test('field lines: flux inside the cone θ equals the rest frame flux inside θ₀ (tan θ = γ tan θ₀)',()=>{
 for(const b of [0.5,0.9])for(const th0 of [0.3,0.8,1.2]){
  const th=R.lineAngle(th0,b);close(Math.tan(th),g(b)*Math.tan(th0),1e-12);
  // flux of E through a sphere cap, unit charge, kq = 1: ∫ (1−β²)/(1−β²sin²)^{3/2} 2π sin dθ, compared to 2π(1 − cos θ₀)
  let s=0;const N=20000;for(let i=0;i<N;i++){const a=(i+0.5)/N*th,sn=Math.sin(a);s+=(1-b*b)/Math.pow(1-b*b*sn*sn,1.5)*2*Math.PI*sn*th/N;}
  close(s,2*Math.PI*(1-Math.cos(th0)),1e-7);
 }
});


// ---------- Einstein's magnet and loop ----------
const M=core('relativity-em','ellipKE,loopField,gaussLegendre,magnetQuad,magnetField,mutual,magnetFlux,motionalEMF,loopFrameEMF,fluxRateLoopFrame');
const MAG={a:0.01,L:0.04,M:1.2/mu0},QD=M.magnetQuad(MAG,10,12),RING=0.02;

test('elliptic integrals against direct quadrature',()=>{
 for(const m of [0,0.1,0.5,0.9,0.999]){
  let K=0,E=0;const N=200000;for(let i=0;i<N;i++){const t=(i+0.5)/N*Math.PI/2,s2=Math.sin(t)**2;K+=1/Math.sqrt(1-m*s2);E+=Math.sqrt(1-m*s2);}
  K*=Math.PI/2/N;E*=Math.PI/2/N;const [k,e]=M.ellipKE(m);close(k,K,1e-8);close(e,E,1e-9);
 }
});

test('loop field: on axis μ₀IR²/(2(R²+z²)^3/2), off axis against direct Biot–Savart',()=>{
 const R0=0.02,I=3;
 for(const z of [0,0.005,-0.01,0.05])close(M.loopField(R0,I,z,0)[0],mu0*I*R0*R0/(2*(R0*R0+z*z)**1.5),1e-14);
 close(M.loopField(R0,I,0.01,1e-12)[0],mu0*I*R0*R0/(2*(R0*R0+1e-4)**1.5),1e-12);
 const bs=(x,rho)=>{let bx=0,by=0;const N=20000;for(let j=0;j<N;j++){const p=2*Math.PI*(j+0.5)/N,dl=[0,-Math.sin(p)*R0*2*Math.PI/N,Math.cos(p)*R0*2*Math.PI/N],r=[x,rho-R0*Math.cos(p),-R0*Math.sin(p)],r3=Math.hypot(...r)**3;
  // dB = μ₀I/4π dl × r / r³
  bx+=(dl[1]*r[2]-dl[2]*r[1])/r3;by+=(dl[2]*r[0]-dl[0]*r[2])/r3;}return [mu0*I/(4*Math.PI)*bx/1,mu0*I/(4*Math.PI)*by];};
 for(const [x,rho] of [[0.01,0.01],[0.003,0.035],[-0.02,0.015],[0.04,0.001],[0,0.03]]){
  const f=M.loopField(R0,I,x,rho),b=bs(x,rho);close(f[0],b[0],1e-7,1e-13);close(f[1],b[1]/1,1e-7,1e-13);
 }
});

test('magnet: center field of a uniformly magnetized cylinder, quadrature converged, flux by mutual inductance = ∫B·dA',()=>{
 close(M.magnetField(MAG,QD,0,0)[0],1.2*0.02/Math.hypot(0.02,0.01),1e-12);
 const Q2=M.magnetQuad(MAG,40,16);
 for(const [x,rho] of [[0.015,0.02],[0.022,0.02],[0.05,0.02],[0,0.02]]){const a=M.magnetField(MAG,QD,x,rho),b=M.magnetField(MAG,Q2,x,rho);close(a[0],b[0],1e-9,1e-14);close(a[1],b[1],1e-9,1e-14);}
 for(const x of [0,0.018,0.03,0.06]){
  let f=0;const N=4000;for(let i=0;i<N;i++){const r=(i+0.5)/N*RING;f+=M.magnetField(MAG,QD,x,r)[0]*2*Math.PI*r*RING/N;}
  close(M.magnetFlux(MAG,QD,RING,x),f,1e-6);
 }
});

test('EMF: ∮(v × B)·dl in the magnet frame, ∮E′·dl in the loop frame, and −dΦ′/dt′ agree',()=>{
 for(const beta of [1/c,10/c,0.3,0.6,0.9])for(const x of [-0.06,-0.021,-0.01,0.004,0.0185,0.03,0.1]){
  const e=M.motionalEMF(MAG,QD,RING,x,beta,48),ep=M.loopFrameEMF(MAG,QD,RING,x,beta,48),fr=M.fluxRateLoopFrame(MAG,QD,RING,x,beta,2e-6);
  close(ep,g(beta)*e,1e-13,1e-30);
  close(fr,ep,2e-7,1e-12*Math.abs(beta)*c*1e-3);
  // magnet frame Faraday: −dΦ/dt = −v dΦ/dx
  close(-beta*c*(M.magnetFlux(MAG,QD,RING,x+2e-6)-M.magnetFlux(MAG,QD,RING,x-2e-6))/4e-6,e,2e-7,1e-12*Math.abs(beta)*c*1e-3);
 }
 const e1=M.motionalEMF(MAG,QD,RING,0.02,1/c,48);console.log('   1 m/s, ring at the N end face + 0:',(e1*1e3).toFixed(4),'mV');
});

test('Lenz: the induced current makes a field through the ring that opposes the change in flux',()=>{
 for(const beta of [1/c,-1/c,0.5])for(const x of [-0.05,-0.019,0.012,0.03,0.07]){
  const e=M.motionalEMF(MAG,QD,RING,x,beta,48),dPhi=beta*(M.magnetFlux(MAG,QD,RING,x+1e-5)-M.magnetFlux(MAG,QD,RING,x-1e-5));
  if(Math.abs(e)<1e-12)continue;
  const Bself=M.loopField(RING,Math.sign(e),0,0)[0];   // current along φ̂ makes +x field at the center
  assert(Math.sign(Bself)===-Math.sign(dPhi),`x=${x} β=${beta}`);
 }
});

// ---------- the test charge set free near the wire ----------
const Fl=core('relativity-em','ME,wireFields,flyCharge,eventToFrame,atTau');
const OPT={dt:2e-13,nmax:40000,rMin:0.005,rMax:0.07,xMax:0.3,tMax:3e-9};

test('released charge: the lab path, Lorentz transformed, is the path integrated in the charge frame; r(τ) agrees',()=>{
 for(const [v,u,q] of [[0.5,0.5,-e],[0.5,0.5,e],[0.8,-0.6,-e],[0.9,0.9,-e],[0.3,0.6,e]]){
  const lab=Fl.flyCharge(1e-6,v,0,q,Fl.ME,0.02,u,OPT),tauEnd=lab[lab.length-1].tau;
  const chg=Fl.flyCharge(1e-6,v,u,q,Fl.ME,0.02,0,Object.assign({},OPT,{tMax:1,xMax:1,tauMax:tauEnd}));
  let worst=0;
  for(let i=0;i<chg.length;i+=50){
   const c=chg[i];if(c.tau>tauEnd)break;const l=Fl.eventToFrame(Fl.atTau(lab,c.tau),u);
   worst=Math.max(worst,Math.abs(l.z-c.z)/0.02,Math.abs(l.x-c.x)/0.02,Math.abs(l.t-c.t)/1e-9);
  }
  assert(worst<1e-6,`v=${v} u=${u}: worst ${worst}`);
  // lab: E = 0, so the speed does not change
  const sp=lab.map((p)=>Math.hypot(p.bx,p.bz));close(Math.max(...sp),Math.abs(u),1e-9);close(Math.min(...sp),Math.abs(u),1e-9);
  console.log(`   v=${v} u=${u} q=${q>0?'+':'−'}e: run τ = ${(tauEnd*1e9).toFixed(4)} ns, lab t = ${(lab[lab.length-1].t*1e9).toFixed(4)} ns, r end = ${(lab[lab.length-1].z*100).toFixed(3)} cm, worst mismatch ${worst.toExponential(1)}`);
 }
});

test('released charge: initial accelerations match F′/m in its rest frame and F/(γm) across the motion in the lab',()=>{
 const v=0.5,u=0.5,q=-e,lam0=1e-6,r0=0.02,h=1e-15,o=Object.assign({},OPT,{dt:h,nmax:3});
 const chg=Fl.flyCharge(lam0,v,u,q,Fl.ME,r0,0,o),lab=Fl.flyCharge(lam0,v,0,q,Fl.ME,r0,u,o);
 const Fp=q*Fl.wireFields(lam0,v,u,r0)[0],F=R.wireForce(lam0,v,u,q,r0,0).F;
 close(chg[1].bz*c/h,Fp/Fl.ME,1e-6);close(lab[1].bz*c/h,F/(g(u)*Fl.ME),1e-6);close(Fp,g(u)*F,1e-12);
 // the electron moving with the electrons is pulled in (parallel currents attract)
 assert(F<0&&Fp<0);
});
console.log(`${count} tests passed`);
