'use strict';
// Extract actual pure cores. References below use energy, torque, ray and diffraction equations.
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS',name);};
function close(a,b,rel=1e-10,abs=1e-15){assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+rel*Math.abs(b),`expected ${b}, got ${a}`);}
const s=core('spin-resonance','H_PLANCK,MU_B,G_DPPH,GAMMA_H,GAMMA_F,BMAX,FAST,TRIG,esrField,zeemanField,nmrField,resonances,rampFast,rampSlow,resonanceTime,fieldFromVoltage,fieldFromTime,lorentz,oscillator,fastSample,fitOrigin,gFromSlope,gammaFromSlope,instrument,psrFreq,psrDial');
test('spin: Zeeman energy and fitted ESR g, proton/fluorine gamma',()=>{
 const frequencies=[45e6,60e6,75e6],B=frequencies.map(f=>s.esrField(f));
 for(let i=0;i<B.length;i++)close(s.G_DPPH*s.MU_B*B[i],s.H_PLANCK*frequencies[i],1e-12,1e-40);
 close(s.gFromSlope(s.fitOrigin(frequencies,B).k),2.0036);
 for(const [spin,gamma,sample] of [['H',42.577478e6,'gly'],['F',40.0776e6,'ptfe']]){
  const nu=[12.8e6,13e6,13.2e6],b=nu.map(f=>s.nmrField(f,gamma));close(s.gammaFromSlope(s.fitOrigin(nu,b).k),gamma);
  close(s.resonances('psr',sample,nu[1],.3)[0].B0,b[1]-.3);
 }
 assert.equal(s.resonances('esr','water',60e6,0).length,0);
});
test('spin: scan calibration, periodic trigger and half-maximum linewidth',()=>{
 const Bmax=s.BMAX.esr,b=s.esrField(60e6),t=s.resonanceTime(b,Bmax,s.FAST.ramp);
 close(s.rampFast(t,Bmax).B,b);close(s.fieldFromTime(t,s.FAST.ramp,Bmax),b);close(s.fieldFromVoltage(b/Bmax,Bmax),b);
 close(s.rampFast(t+s.FAST.period,Bmax).B,b);close(s.rampSlow(100,Bmax),Bmax);assert.equal(s.resonanceTime(-1,Bmax,1),null);
 close(s.lorentz(b,b,.00025),1);close(s.lorentz(b+.000125,b,.00025),.5);
 const trace=s.fastSample(t-s.TRIG,Bmax,s.resonances('esr','dpph',60e6,0),s.oscillator(3,7),.1);close(trace[0],b/Bmax);
 assert.equal(s.oscillator(7,7).on,false);close(s.zeemanField(.3,30),.3*(1-10*.00075));
});
test('spin: seeded bench and PSR dial round trip',()=>{
 assert.equal(JSON.stringify(s.instrument(12)),JSON.stringify(s.instrument(12)));const inst=s.instrument(12);
 for(const band of ['LO','MID','HI'])for(const dial of [0,5,10])close(s.psrDial(band,s.psrFreq(band,dial,inst),inst),dial,1e-10,1e-12);
 assert.equal(s.fitOrigin([],[]),null);
});
const l=core('speed-of-light','C_LIGHT,F2,focusA,flightTime,mirrorTurn,imageShift,cFromShift,cFromPair,cFromSlope,fitLine,tachReading,spotJitter,slowFactor,slowTarget');
test('light: lens equation and independently constructed reflected-ray shift',()=>{
 for(const D of [3,10,20])for(const B of [.3,.6,.9])for(const rev of [-1000,0,700]){
  const A=l.focusA(D,B);close(1/A+1/(D+B),1/l.F2);
  const dt=2*D/l.C_LIGHT,angle=2*Math.PI*rev*dt,ref=2*angle*D*A/(D+B);
  close(l.flightTime(D),dt);close(l.mirrorTurn(D,rev),angle);close(l.imageShift(A,B,D,rev),ref);
  if(rev)close(l.cFromShift(A,B,D,rev,ref),l.C_LIGHT);
 }
});
test('light: pair cancels zero offset, slope fit and air propagation',()=>{
 const D=10,B=.5,A=l.focusA(D,B),x=[-900,-600,-300,0,300,600,900],offset=.0053;
 const y=x.map(f=>offset+l.imageShift(A,B,D,f)),fit=l.fitLine(x,y);close(fit.a,offset);close(l.cFromSlope(A,B,D,fit.k),l.C_LIGHT);
 close(l.cFromPair(A,B,D,700,900,offset+l.imageShift(A,B,D,700),offset+l.imageShift(A,B,D,-900)),l.C_LIGHT);
 close(l.imageShift(A,B,D,700,l.C_LIGHT/1.00029)/l.imageShift(A,B,D,700),1.00029);
 assert.equal(l.fitLine([1,1],[2,3]),null);assert.equal(l.tachReading(0,4,1),0);
 assert.equal(l.tachReading(500,4,1),l.tachReading(500,4,1));assert.equal(l.spotJitter(3,2),l.spotJitter(3,2));
 for(const B of [.3,.9]){const angle=l.mirrorTurn(20,1000),target=l.slowTarget(B);assert(angle*l.slowFactor(angle,target)<=target*(1+1e-12));}
});
const e=core('e-over-m','EM,MU0,N_TURNS,A_TRUE,GEOM,bCenter,speed,radiusUniform,emFrom,coilField,trace,onScale,reflOnScale,meterV,meterI,flicker');
// Direct midpoint vector Biot-Savart integral, separate from the demo's elliptic and numeric functions.
function fieldReference(p,I,a,N){const b=[0,0,0],n=12000,h=2*Math.PI/n;for(const y of [-a/2,a/2])for(let j=0;j<n;j++){
 const t=(j+.5)*h,r=[p[0]-a*Math.cos(t),p[1]-y,p[2]-a*Math.sin(t)],dl=[-a*Math.sin(t)*h,0,a*Math.cos(t)*h],f=e.MU0*N*I/(4*Math.PI*Math.hypot(...r)**3);
 b[0]+=-dl[2]*r[1]*f;b[1]+=(dl[2]*r[0]-dl[0]*r[2])*f;b[2]+=dl[0]*r[1]*f;
}return b;}
test('e/m: Helmholtz center and independent off-axis Biot-Savart',()=>{
 close(e.coilField([0,0,0],1.5,.15,130)[1],-Math.pow(.8,1.5)*e.MU0*130*1.5/.15);
 for(const p of [[.02,.01,-.04],[0,.03,0],[.04,0,.02]]){const a=e.coilField(p,1.5,.15,130),b=fieldReference(p,1.5,.15,130);a.forEach((v,i)=>close(v,b[i],2e-9,1e-13));}
});
test('e/m: Lorentz circular orbit, kinetic-energy speed and polarity',()=>{
 const V=150,I=1.5,B=e.bCenter(130,I,e.A_TRUE),r=Math.sqrt(2*V/e.EM)/B,path=e.trace({V,I,uniform:true,earth:0});
 close(e.speed(V)**2,2*e.EM*V);close(e.emFrom(V,B,r),e.EM);close(e.radiusUniform(V,B),r);assert(!path.hit);assert(path.turns>.9);
 for(const p of path.pts)close(Math.hypot(p[0],p[2]-(e.GEOM.z0+r)),r,2e-7,1e-10);
 const reversed=e.trace({V,I:-I,uniform:true});assert(reversed.pts[1][2]<e.GEOM.z0);assert(path.pts[1][2]>e.GEOM.z0);
 const straight=e.trace({V,I:0,uniform:true});assert(straight.hit);close(straight.pts.at(-1)[2],e.GEOM.z0);close(Math.hypot(...straight.pts.at(-1)),e.GEOM.Rb);
});
test('e/m: mirror parallax alignment and deterministic instrument precision',()=>{
 const xb=.02,yb=.01;close(e.onScale(xb,yb,xb),xb);close(e.reflOnScale(xb,yb,xb),xb);
 assert(Math.abs(e.onScale(xb,yb,-.02)-e.reflOnScale(xb,yb,-.02))>0);
 close(e.meterV(150,3,4)*10,Math.round(e.meterV(150,3,4)*10));close(e.meterI(1.5,3,4)*1000,Math.round(e.meterI(1.5,3,4)*1000));
 for(const t of [0,.1,10,100])assert(Math.abs(e.flicker(3,0,t))<=.001);
});
const d=core('electron-diffraction','H_PLANCK,Q_E,M_E,C_LIGHT,D_ACC,TUBE,lambdaDB,twoTheta,hitSphere,ringDiameter,twoThetaFromD,dFromReading,fitRing,magnetTilt,instrument,simulatedRows');
test('diffraction: relativistic momentum, Bragg angle and sphere intersections',()=>{
 for(const V of [2500,4000,5000]){
  const E=d.Q_E*V,p=Math.sqrt(E*(E+2*d.M_E*d.C_LIGHT**2))/d.C_LIGHT;
  close(d.lambdaDB(V),d.H_PLANCK/p,1e-12,1e-25);assert(d.lambdaDB(V)<d.lambdaDB(V,false));
  for(const spacing of d.D_ACC){const lam=d.lambdaDB(V),phi=d.twoTheta(spacing,lam);close(2*spacing*Math.sin(phi/2),lam,1e-12,1e-25);
   const hit=d.hitSphere(phi,125,65);close(hit.x**2+hit.y**2,65**2);close(Math.atan2(hit.y,hit.x+60),phi);
  }
 }
});
test('diffraction: arc/chord inversions and six-voltage fit recover lattice spacings',()=>{
 for(const tool of ['arc','chord']){
  const rows=[2500,3000,3500,4000,4500,5000].map(V=>({V:V/1000,D:d.D_ACC.map(spacing=>d.ringDiameter(V,spacing,tool)),tool}));
  for(let i=0;i<2;i++){for(const row of rows){const lam=d.lambdaDB(row.V*1000);close(d.dFromReading(row.D[i],lam,tool,'exact',125,65),d.D_ACC[i],1e-10,1e-24);}
   close(d.fitRing(rows,i,'exact',true,125,65).d,d.D_ACC[i],1e-10,1e-24);
  }
 }
 const arc=d.ringDiameter(4000,d.D_ACC[0],'arc'),chord=d.ringDiameter(4000,d.D_ACC[0],'chord');assert(arc>chord);
 assert(Number.isNaN(d.twoTheta(1,3)));assert(Number.isNaN(d.dFromReading(0,1,'arc','exact',125,65)));
});
test('diffraction: magnet reversal/scaling and seeded readings',()=>{
 close(d.magnetTilt(25,'N',4000),-d.magnetTilt(25,'S',4000));close(d.magnetTilt(50,'N',4000)/d.magnetTilt(25,'N',4000),1/8);
 close(d.magnetTilt(25,'N',4000)/d.magnetTilt(25,'N',1000),.5);assert.equal(d.magnetTilt(120,'N',4000),0);
 assert.equal(JSON.stringify(d.simulatedRows(d.instrument(3),'arc')),JSON.stringify(d.simulatedRows(d.instrument(3),'arc')));
});
console.log(`Completed ${count} modern bench core groups. UI, exports and apparatus calibration are outside this suite.`);
