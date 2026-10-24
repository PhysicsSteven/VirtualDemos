'use strict';
/* AC power in circuits.html (Vol. 2 §§15.1, 15.2, 15.4): the Wall outlet and Power factor setups against the textbook formulas,
   the reactances of the single part setups, and the readings' average power against ½V0·I0·cos φ. */
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
const c=core('circuits','buildPreset,acReading,specRms,spectrum,PRESETS');
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS',name);};
const close=(a,b,r=1e-12,abs=1e-12)=>assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+r*Math.abs(b),`expected ${b}, got ${a}`);
const read=(name,edit)=>{const P=c.buildPreset(name),els=P.els;if(edit)edit(els);const src=els.find(e=>e.type==='ac');return{els,src,r:c.acReading(els,src)};};
const by=(els,n)=>els.find(e=>e.name===n);
test('wall outlet: 120 V rms at 60 Hz into a 144 Ω bulb gives 0.8333 A and 100 W, in phase',()=>{
 const{src,r}=read('outlet');close(src.f,60);close(r.Vrms,120);close(r.Irms,120/144);close(r.P,100);close(r.phi,0,0,1e-12);
});
test('power factor: coil load alone, and corrected by 100 µF and by the exact capacitance',()=>{
 const w=2*Math.PI*60,R=10,X=w*.05,Z=Math.hypot(R,X);
 const open=read('pfactor');close(open.r.Irms,120/Z);close(open.r.phi,Math.atan2(X,R));close(open.r.P,(120/Z)**2*R);close(Math.cos(open.r.phi),R/Z);
 for(const C of [22e-6,100e-6,220e-6,X/(w*(R*R+X*X))]){
  const k=read('pfactor',els=>{by(els,'S1').closed=true;by(els,'C1').C=C;});
  const g=R/(R*R+X*X),b=w*C-X/(R*R+X*X);
  close(k.r.Irms,120*Math.hypot(g,b),1e-11);close(k.r.P,open.r.P,1e-11);close(k.r.phi,Math.atan2(-b,g),1e-11,1e-12);
  /* the reactive current is linear in C: I sin φ = V X/(R² + X²) − ωCV */
  close(k.r.Irms*Math.sin(k.r.phi),120*X/(R*R+X*X)-w*C*120,1e-10,1e-12);
 }
});
test('single parts: V_rms/I_rms is 1/(2πfC), 2πfL and R, with phases −90°, +90° and 0',()=>{
 for(const f of [50,200,2000]){
  const C=read('acC',els=>{els.find(e=>e.type==='ac').f=f;}),L=read('acL',els=>{els.find(e=>e.type==='ac').f=f;}),Rr=read('acR',els=>{els.find(e=>e.type==='ac').f=f;});
  close(C.r.Vrms/C.r.Irms,1/(2*Math.PI*f*10e-6),1e-12);close(C.r.phi,-Math.PI/2,1e-12);
  close(L.r.Vrms/L.r.Irms,2*Math.PI*f*.1,1e-12);close(L.r.phi,Math.PI/2,1e-12);
  close(Rr.r.Vrms/Rr.r.Irms,100,1e-12);close(Rr.r.phi,0,0,1e-12);
 }
});
test('average power in every AC setup is ½V0·I0·cos φ = I_rms² × (resistance) summed over the parts',()=>{
 for(const n of ['acR','acC','acL','below','reso','hiQ','outlet','pfactor']){
  const{els,r}=read(n),sp=c.spectrum(els);let heat=0;
  for(const e of els)if(e.type==='res'||e.type==='bulb')heat+=c.specRms(sp,e.id,'I')**2*e.R;
  close(r.P,heat,1e-10,1e-12);close(r.P,.5*r.V0*r.I0*Math.cos(r.phi),1e-12,1e-12);
 }
});
console.log(`${count} AC power groups passed`);
