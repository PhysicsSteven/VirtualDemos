'use strict';
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
let n=0;const test=(name,fn)=>{fn();n++;console.log('PASS',name);};
const close=(a,b,r=1e-9,abs=1e-12)=>assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+r*Math.abs(b),`expected ${b}, got ${a}`);
const s=core('sound-intensity','I0,POWERS,intensity,levelOf,intensityOf,addLevels,pressureAmp,meterLevel,fitLine,readingsCSV');
test('sound intensity: inverse square law, 6.02 dB per doubling',()=>{
 close(s.intensity(1,1),1/(4*Math.PI));close(s.levelOf(1e-12),0,0,1e-12);close(s.levelOf(1),120);
 for(const P of s.POWERS)for(const r of [0.5,1,2,4,8,16]){close(s.levelOf(s.intensity(P,r))-s.levelOf(s.intensity(P,2*r)),20*Math.log10(2));close(s.intensity(P,r)*4*Math.PI*r*r,P);}
 assert.equal(s.meterLevel(0.01,0,0,1),89.0);
 const rs=[0.5,1,2,4,8,16,32],L=rs.map(r=>s.meterLevel(0.01,0,0,r)),F=s.fitLine(rs.map(Math.log2),L);close(F.b,-20*Math.log10(2),0,0.03);close(F.a,89.0,0,0.05);
});
test('sound intensity: incoherent levels add as intensities',()=>{
 close(s.addLevels(80,80),80+10*Math.log10(2));close(s.addLevels(80,70),80+10*Math.log10(1.1));close(s.addLevels(60,60,60,60),66.0206,1e-5);
 const r=4,LA=s.levelOf(s.intensity(0.01,r));assert.equal(s.meterLevel(0.01,0.01,0,r),Math.round((LA+10*Math.log10(2))*10)/10);
 assert.equal(s.meterLevel(0.01,0,55,32),Math.round(s.addLevels(s.levelOf(s.intensity(0.01,32)),55)*10)/10);
 assert(s.meterLevel(0.01,0,55,1000)-55<0.01);
});
test('sound intensity: pressure amplitude and CSV',()=>{
 close(s.pressureAmp(1),Math.sqrt(2*1.20*343));close(s.pressureAmp(s.I0),2.869e-5,1e-3);
 const csv=s.readingsCSV([{r:'1.0',pA:'0.01',pB:'',bg:'',L:'89.0'}],{version:'x'}).trim().split('\n');assert.equal(csv.at(-1),'1,1.0,0.01,,,89.0');assert.equal(csv.at(-2),'row,r_m,source_A_W,source_B_W,background_dB,L_dB');
});
console.log(`${n} test groups passed`);
