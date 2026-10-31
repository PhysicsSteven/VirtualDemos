'use strict';
/* Standing Waves, two single pulses (2026-10-31): each pulse keeps its shape, they add where they overlap, and they come out unchanged. */
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
let n=0;const test=(name,fn)=>{fn();n++;console.log('PASS',name);};
const close=(a,b,r=1e-9,abs=1e-12)=>assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+r*Math.abs(b),`expected ${b}, got ${a}`);
const w=core('standing-waves','pulseHump,twoPulses,pulsePass');
const v=12,xL=0,xR=6,A1=1.5,A2=1,f1=1,f2=1.5;
test('each pulse is one hump, half a wavelength wide, traveling at v without changing shape',()=>{
 const w1=v/(2*f1),w2=v/(2*f2);
 for(const u of [-0.1,0,w1,w1+0.2])close(w.pulseHump(u,A1,w1),0);
 close(w.pulseHump(w1/2,A1,w1),A1);
 for(const t of [0.05,0.2,0.31])for(const s of [0.1,0.37,0.8]){
  close(w.twoPulses(xL+v*t-s*w1,t,A1,A2,f1,f2,v,xL,xR,1)[0],A1*Math.sin(Math.PI*s));
  close(w.twoPulses(xR-v*t+s*w2,t,A1,A2,f1,f2,v,xL,xR,1)[1],A2*Math.sin(Math.PI*s));
  close(w.twoPulses(xR-v*t+s*w2,t,A1,A2,f1,f2,v,xL,xR,-1)[1],-A2*Math.sin(Math.PI*s));
 }
});
test('each part solves the wave equation, the sum meets in the middle, and both pulses leave by pulsePass',()=>{
 const h=1e-4,y=(x,t,s)=>{const p=w.twoPulses(x,t,A1,A2,f1,f2,v,xL,xR,s);return p[0]+p[1];};
 for(const [x,t] of [[2.1,0.3],[3.3,0.27],[4.4,0.4]])for(const s of [1,-1]){
  const ytt=(y(x,t+h,s)-2*y(x,t,s)+y(x,t-h,s))/(h*h),yxx=(y(x+h,t,s)-2*y(x,t,s)+y(x-h,t,s))/(h*h);
  close(ytt,v*v*yxx,1e-4,1e-3);
 }
 /* the two pulse centers meet at the same x at the same time; with equal widths the peaks add to A1 + A2 or A1 − A2 */
 const fe=1,we=v/(2*fe),tm=((xR-xL)+we)/(2*v),xm=(xL+xR)/2;
 const up=w.twoPulses(xm,tm,A1,A2,fe,fe,v,xL,xR,1),dn=w.twoPulses(xm,tm,A1,A2,fe,fe,v,xL,xR,-1);
 close(up[0]+up[1],A1+A2);close(dn[0]+dn[1],A1-A2);
 const T=w.pulsePass(f1,f2,v,xL,xR);close(T,(xR-xL+v/(2*f1))/v);
 for(let x=xL;x<=xR;x+=0.05){const p=w.twoPulses(x,T+1e-9,A1,A2,f1,f2,v,xL,xR,1);close(p[0]+p[1],0);}
});
console.log(`${n} standing waves pulse groups passed`);
