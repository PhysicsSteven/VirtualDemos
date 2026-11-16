'use strict';
/* Real meters in Circuits: an ammeter with Real meter ticked is a resistance R_m in series, a voltmeter or probe a resistance
   R_m across the points it reads (OpenStax University Physics Vol. 2 §10.4). Checked against series and parallel resistance
   by hand, in DC, AC and time, with power and energy balances, and the ideal meters as the limit. */
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
const c=core('circuits','solveDC,powerBalance,kclResiduals,solveAC,buildTransient,propagator,stepWith,zeroState,storedC,buildPreset,PRESETS,dot,hasRm,METER_R,RM_VALUES');
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS',name);};
const close=(a,b,r=1e-9,abs=1e-12)=>assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+r*Math.abs(b),`expected ${b}, got ${a}`);
const part=(id,type,a,b,props={})=>({id,type,a:[a,0],b:[b,0],...props});
const par=(a,b)=>a*b/(a+b);
test('Meter loading setup: the numbers its hint gives',()=>{
 const els=c.buildPreset('loading').els,sol=c.solveDC(els),vm=els.find(e=>e.type==='vm'),am=els.find(e=>e.type==='am'),bat=els.find(e=>e.type==='bat');
 assert.equal(c.PRESETS.loading.mode,'dc');assert(c.hasRm(vm)&&c.hasRm(am));assert.equal(vm.r,1e7);assert.equal(am.r,1);assert.equal(am.name,'A1');assert.equal(vm.name,'V_out');
 const Rp=par(1e6,1e7),I=12/(1+1e6+Rp);
 close(sol.res.get(vm.id).V,I*Rp);close(sol.res.get(am.id).I,I);close(-sol.res.get(bat.id).I,I);
 close(Number((sol.res.get(vm.id).V).toFixed(3)),5.714,0,1e-12);close(12*10/21,sol.res.get(vm.id).V,2e-6);   /* 12 V × 10/21, the 1 Ω ammeter changes the 4th digit only past 5.714 */
 close(sol.res.get(vm.id).I,I*Rp/1e7);
 const p=c.powerBalance(els,sol);close(p.src,p.diss);
 for(const v of c.kclResiduals(sol.brs,id=>sol.res.get(id)?.I).values())close(v,0,0,1e-9*I);   /* rounding, against a current of 6 µA */
 /* R1 = R2 = 10 Ω: the ammeter loads, the voltmeter barely does */
 for(const e of els)if(e.type==='res')e.R=10;
 const s2=c.solveDC(els),Rp2=par(10,1e7),I2=12/(1+10+Rp2);close(s2.res.get(am.id).I,I2);close(Number(I2.toFixed(3)),0.571,0,1e-12);close((0.6-I2)/0.6,1/21,2e-5);   /* 4.8 % low; the 10 MΩ voltmeter changes the 6th digit */
});
test('Ideal meters are the limit: untick, or R_m very large (voltmeter) or very small (ammeter)',()=>{
 const els=c.buildPreset('loading').els,vm=els.find(e=>e.type==='vm'),am=els.find(e=>e.type==='am');
 vm.rOn=false;am.rOn=false;close(c.solveDC(els).res.get(vm.id).V,6);
 vm.rOn=true;am.rOn=true;vm.r=1e12;am.r=1e-6;close(c.solveDC(els).res.get(vm.id).V,6,1e-6);
 assert.equal(c.RM_VALUES[0],0.001);assert.equal(c.RM_VALUES[c.RM_VALUES.length-1],1e8);assert.equal(c.RM_VALUES.length,133);
 assert(c.RM_VALUES.includes(1)&&c.RM_VALUES.includes(1e7)&&c.RM_VALUES.includes(1e6));
});
test('A real ammeter alone across a battery is a resistor, not a short',()=>{
 const els=[part(1,'bat',0,1,{emf:1.5}),part(2,'am',0,1,{rOn:true,r:0.5})],sol=c.solveDC(els);
 close(sol.res.get(2).I,3);close(c.powerBalance(els,sol).diss,4.5);
});
test('AC: a real probe across a resistor of a divider',()=>{
 const els=[part(1,'ac',0,1,{V0:10,f:1000}),part(2,'res',0,2,{R:1000}),part(3,'res',2,1,{R:1000}),part(4,'probe',2,1,{rOn:true,r:1000})],s=c.solveAC(els,1000);
 const want=10*500/1500,v=s.res.get(4).V;close(Math.hypot(v[0],v[1]),want);close(Math.hypot(...s.res.get(4).I),want/1000);
});
test('Time: RC charging read by a real voltmeter across the capacitor',()=>{
 const R=1e4,Rm=1e4,C=1e-4,V=12;
 const els=[part(1,'bat',0,1,{emf:V}),part(2,'res',0,2,{R}),part(3,'cap',2,1,{C}),part(4,'vm',2,1,{rOn:true,r:Rm})],sys=c.buildTransient(els);assert(sys.ok);
 const tau=par(R,Rm)*C,Vf=V*Rm/(R+Rm);
 for(const f of [.1,1,5]){
  const out=c.stepWith(c.propagator(sys,f*tau),c.zeroState(sys)),x=out.x;
  close(c.dot(sys.Vrow.get(4),x),Vf*(1-Math.exp(-f)));close(c.dot(sys.Irow.get(4),x),Vf*(1-Math.exp(-f))/Rm);
  const src=out.dE.reduce((a,v,i)=>a+(sys.forms[i].key==='src'?v:0),0),heat=out.dE.reduce((a,v,i)=>a+(sys.forms[i].key==='heat'?v:0),0);
  close(src,heat+c.storedC(sys,x),1e-8);
  assert(sys.forms.some(F=>F.id===4&&F.key==='heat'));
 }
 /* the ideal voltmeter: the plain RC curve */
 els[3].rOn=false;const s0=c.buildTransient(els),x0=c.stepWith(c.propagator(s0,R*C),c.zeroState(s0)).x;close(c.dot(s0.Vrow.get(4),x0),V*(1-Math.exp(-1)));
});
test('Time with a diode: a real probe joins the stepped equations as a resistor',()=>{
 const els=c.buildPreset('rectifier').els,pr=els.find(e=>e.type==='probe');pr.rOn=true;pr.r=1e6;
 const sys=c.buildTransient(els);assert(sys.nl);const F=sys.forms.find(F=>F.id===pr.id);assert(F&&F.key==='heat'&&F.internal);
 pr.rOn=false;assert(!c.buildTransient(els).forms.some(F=>F.id===pr.id));
});
test('Default meter resistances',()=>{assert.deepEqual({...c.METER_R},{am:1,vm:1e7,probe:1e6});});
console.log(`${count} groups passed`);
