'use strict';
const assert=require('node:assert/strict'),g=require('./demo_source.cjs').core('diffraction-grating','dOf,sinThetaM,orderRange,orderInfo,gratingFactor,sinc2,intensity,envelope,isMissing,lamFromSpot,dFromSpot,slitBeta,darkRange,slitMaxBeta');
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
test('single slit (N = 1): intensity is [sin β/β]², an independent Huygens sum agrees',()=>{
 const lam=632.8e-9,a=5e-6,M=4000;
 for(const sd of [0,.01,.05,.1265,.2,.37,.6,.95]){
 let re=0,im=0;for(let j=0;j<M;j++){const s=(j+.5)/M*a-a/2,ph=2*Math.PI*s*sd/lam;re+=Math.cos(ph);im+=Math.sin(ph);}
 const huy=(re*re+im*im)/(M*M),b=g.slitBeta(sd,lam,a),exact=b===0?1:(Math.sin(b)/b)**2;
 close(g.intensity(sd,lam,a,a,1),exact,1e-12,1e-15);close(huy,exact,2e-6,2e-7);close(g.gratingFactor(.37,1),1);}
});
test('single slit dark fringes at a sin θ = mλ, none when a < λ, slit width recovered from a fringe',()=>{
 for(const lam of [405e-9,532e-9,632.8e-9])for(const a of [1e-6,2.5e-6,5e-6,20e-6])for(const alpha of [0,.15]){
 const r=g.darkRange(lam,a,alpha);assert.equal(r.hi,Math.floor((1+Math.sin(alpha))*a/lam+1e-9));
 for(let m=r.lo;m<=r.hi;m++){if(!m)continue;const z=g.orderInfo(m,lam,a,alpha,1);close(a*(Math.sin(z.th)+Math.sin(alpha)),m*lam);
 close(g.intensity(Math.sin(z.th)+Math.sin(alpha),lam,a,a,1),0,0,1e-24);}}
 const nod=g.darkRange(632.8e-9,0.6e-6,0);assert.equal(nod.hi,0);assert.equal(nod.lo,0);
 const lam=632.8e-9,a=5e-6,L=1;for(const m of [1,2,3,5]){const z=g.orderInfo(m,lam,a,0,L);close(g.dFromSpot(z.y,L,m,lam).exact,a);close(g.lamFromSpot(z.y,L,m,a).exact,lam);}
 close(g.orderInfo(1,lam,a,0,L).y,L*Math.tan(Math.asin(lam/a)));
});
test('single slit side maxima: tan β = β, heights 0.0472, 0.0165, 0.0083',()=>{
 const tab=[[4.493409457909064,.04719045],[7.725251836937707,.01648003],[10.904121659428899,.00834029]];
 tab.forEach(([b,I],i)=>{const k=i+1,x=g.slitMaxBeta(k);close(x,b,1e-12);close(Math.tan(x),x,1e-9);assert(x>k*Math.PI&&x<(k+.5)*Math.PI);
 const sd=x*632.8e-9/(Math.PI*5e-6);close(g.intensity(sd,632.8e-9,5e-6,5e-6,1),I,2e-6);
 const h=1e-6,f=(y)=>g.sinc2(y);assert(f(x)>f(x-h)&&f(x)>f(x+h));});
 for(let k=4;k<30;k++){const x=g.slitMaxBeta(k);assert(Math.abs(Math.sin(x)-x*Math.cos(x))<1e-9);assert(x>k*Math.PI&&x<(k+.5)*Math.PI);}
});
console.log(`Completed ${n} diffraction-grating groups. Spectral colour rendering is outside this physics suite.`);
