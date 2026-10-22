'use strict';
// Legacy physics boundary extracted in memory; no demo HTML modifications.
const assert=require('node:assert/strict'),vm=require('node:vm');const {readDemo}=require('./demo_source.cjs');
const source=readDemo('tides').match(/\/\/ PHYSICS-BEGIN([\s\S]*?)\/\/ PHYSICS-END/);assert(source);
const ctx={};vm.runInNewContext(source[1]+'\nglobalThis.c={G,M_MOON,M_SUN,M_EARTH,R_EARTH,D_MOON,D_SUN,pullAt,tidalAt,tidalAxial,tidalPerp,tideAmp,height,dailyRange};',ctx);const c=ctx.c;let n=0;
function group(name,f){f();n++;console.log('PASS',name);}
const near=(a,b,t=1e-10)=>assert(Math.abs(a-b)<=t*Math.max(1e-12,Math.abs(b)),`${a} != ${b}`);
group('tidal acceleration is Newtonian acceleration minus the center acceleration, with axial stretch/transverse compression',()=>{
 const M=c.M_MOON,d=c.D_MOON,R=c.R_EARTH;
 for(const [x,y] of [[0,0],[R,0],[-R,0],[0,R],[R/2,-R/2]]){
  const dx=d-x,rr=Math.sqrt(dx*dx+y*y),a=c.tidalAt(M,d,x,y);
  near(a[0],c.G*M*dx/rr**3-c.G*M/d**2);near(a[1],-c.G*M*y/rr**3);
 }
 assert(c.tidalAt(M,d,R,0)[0]>0);assert(c.tidalAt(M,d,-R,0)[0]<0);assert(c.tidalAt(M,d,0,R)[1]<0);
});
group('far-field tide has axial/transverse ratio two, linear mass and inverse-cube distance scaling',()=>{
 const M=c.M_MOON,d=10000*c.R_EARTH;
 near(c.tidalAxial(M,d),2*c.tidalPerp(M,d));near(c.tidalAxial(2*M,d),2*c.tidalAxial(M,d));near(c.tidalAxial(M,2*d),c.tidalAxial(M,d)/8);
 near(c.tidalAt(M,d,c.R_EARTH,0)[0],c.tidalAxial(M,d),2e-4);
 near(c.tideAmp(M,2*d),c.tideAmp(M,d)/8);
});
group('ideal equilibrium ocean harmonic gives spring/neap ranges and agrees with angular extrema',()=>{
 const Am=c.tideAmp(c.M_MOON,c.D_MOON),As=c.tideAmp(c.M_SUN,c.D_SUN);
 near(c.dailyRange(0,Am,As),1.5*(Am+As));near(c.dailyRange(Math.PI/2,Am,As),1.5*Math.abs(Am-As));
 for(const phi of [0,.3,1.1,Math.PI/2]){let lo=Infinity,hi=-Infinity;for(let i=0;i<50000;i++){const h=c.height(i*2*Math.PI/50000,phi,Am,As);lo=Math.min(lo,h);hi=Math.max(hi,h);}near(hi-lo,c.dailyRange(phi,Am,As),1e-7);}
});
console.log(`${n} tides test groups passed (ideal equilibrium model, not coastal predictions)`);
