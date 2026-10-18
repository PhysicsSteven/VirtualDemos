'use strict';
const assert=require('node:assert/strict'),g=require('./demo_source.cjs').core('diffraction-grating','dOf,sinThetaM,orderRange,orderInfo,gratingFactor,sinc2,intensity,envelope,isMissing,lamFromSpot,dFromSpot');
let n=0;const test=(s,f)=>{f();n++;console.log('PASS',s);},close=(a,b,rel=1e-8,abs=1e-12)=>assert(Math.abs(a-b)<=abs+rel*Math.abs(b),`expected ${b}, got ${a}`);
test('order geometry from phase difference at normal and oblique incidence',()=>{
 for(const lines of [100,600,1200])for(const lam of [405e-9,532e-9,650e-9])for(const alpha of [0,.2,-.3]){
 const d=g.dOf(lines),range=g.orderRange(lam,d,alpha);
 for(let m=range.lo-1;m<=range.hi+1;m++){const z=g.orderInfo(m,lam,d,alpha,1),s=-Math.sin(alpha)+m*lam/d;assert.equal(z.exists,Math.abs(s)<=1+1e-12);
 if(z.exists){close(d*(Math.sin(z.th)+Math.sin(alpha)),m*lam);if(z.onScreen)close(z.y,Math.tan(z.th+alpha));}}
 close(g.orderInfo(0,lam,d,alpha,1).y,0);}
});
test('grating factor agrees with independent complex phasor sum',()=>{
 for(const N of [1,2,5,20,100])for(const phi of [0,1e-9,.07,.3,Math.PI-.001,Math.PI,2*Math.PI+.01]){
 let re=0,im=0;for(let j=0;j<N;j++){re+=Math.cos(2*j*phi);im+=Math.sin(2*j*phi);}close(g.gratingFactor(phi,N),re*re+im*im,1e-8,1e-8);}
});
test('interference zeros and missing orders from finite slit width',()=>{
 const N=10;for(let j=1;j<N;j++)close(g.gratingFactor(j*Math.PI/N,N),0);
 for(const ratio of [2,3,5]){assert(g.isMissing(ratio,ratio));assert(!g.isMissing(0,ratio));close(g.envelope(ratio,ratio),0);close(g.intensity(ratio*500e-9/2e-6,500e-9,2e-6,2e-6/ratio,N),0);}
 close(g.intensity(0,500e-9,2e-6,1e-6,N),N*N);
});
test('wavelength and grating spacing recovery plus small-angle bias',()=>{
 const lam=632.8e-9,d=1e-3/600,L=1;
 for(const m of [-2,-1,1,2]){const z=g.orderInfo(m,lam,d,0,L),r=g.lamFromSpot(z.y,L,m,d);close(r.exact,lam);close(g.dFromSpot(z.y,L,m,lam).exact,d);assert(r.small>r.exact);close(r.small/r.exact,1/Math.cos(z.th));}
});
test('grazing order exists but has no finite forward screen intersection',()=>{
 const z=g.orderInfo(1,500e-9,500e-9,0,1);assert(z.exists);assert(!z.onScreen);assert(!Number.isFinite(z.y));assert(!g.orderInfo(2,500e-9,500e-9,0,1).exists);
});
console.log(`Completed ${n} diffraction-grating groups. Spectral colour rendering is outside this physics suite.`);
