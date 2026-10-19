'use strict';
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
const f=core('franck-hertz','GAS,HG,HC_EVNM,CM_PER_EV,eVof,pHg,tubeParams,envelope,electron,current,mulberry,linfit,snapPeak');
const close=(a,b,r=1e-10,abs=1e-12)=>assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+r*Math.abs(b),`expected ${b}, got ${a}`);let n=0;const test=(s,fn)=>{fn();n++;console.log('PASS',s);};
test('Franck-Hertz: wavenumber/energy/wavelength and vapor-density trends',()=>{
 const E=6.62607015e-34*299792458*(39412.300*100)/1.602176634e-19;close(f.eVof(39412.300),E,2e-10);
 close(f.HC_EVNM/f.eVof(39412.300),1e7/39412.300,5e-10);let prev=0;
 for(const T of [100,140,180,210]){const tp=f.tubeParams(f.GAS.hg,T);assert(tp.p>prev);prev=tp.p;close(tp.lam*tp.n*f.GAS.hg.sigX,1);assert(tp.trans>0&&tp.trans<=1);}
});
test('Franck-Hertz: each electron obeys kinetic energy accounting and collection threshold',()=>{
 for(const g of [f.GAS.hg,f.GAS.ne]){const tp=f.tubeParams(g,180),rng=f.mulberry(1234);for(const U of [0,8,g.Umax])for(let k=0;k<2000;k++){
  const e=f.electron(g,tp,U,g.Ur,g.Uc,rng,true);close(e.Er,e.E0+e.W-e.lost);close(e.lost,e.exc.reduce((s,x)=>s+x.dE,0));assert.equal(e.nx,e.exc.length);assert.equal(e.col,e.Ea>g.Ur&&e.Er>0);assert(e.Ea>=0&&e.Ea<=Math.max(e.Er,0));
  for(const x of e.exc){assert(x.x>=0&&x.x<=1);assert(x.E+1e-10>=x.dE);}
 }}
});
test('Franck-Hertz: seeded collector sampling bounds and offset-independent peak fit',()=>{
 const g=f.GAS.hg,tp=f.tubeParams(g,180),a=f.current(g,tp,20,1.5,2,2000,f.mulberry(32),0),b=f.current(g,tp,20,1.5,2,2000,f.mulberry(32),0);assert.equal(JSON.stringify(a),JSON.stringify(b));assert(a.I>=0&&a.I<=g.Isat*f.envelope(g,18)*tp.trans);
 const x=[1,2,3,4,5,6],y=x.map(k=>2+4.887*k),fit=f.linfit(x,y,.1);close(fit.b,4.887);close(fit.a,2);assert(fit.sb>0);
 const I=Array.from({length:801},(_,i)=>Math.exp(-(((i*.05-12.3)/.4)**2)));close(f.snapPeak(I,.05,12.2,1,.1),12.3,1e-10);
});
console.log(`Completed ${n} Franck-Hertz groups. Full stochastic curve shape, cross sections and real apparatus calibration remain unvalidated.`);
