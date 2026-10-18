'use strict';
const assert=require('node:assert/strict'),c=require('./demo_source.cjs').core('circuit-builder','solveCircuit,eqResistance,kclResiduals,powerBalance,buildPreset,normalize');
let n=0;const test=(s,f)=>{f();n++;console.log('PASS',s);},close=(a,b,rel=1e-9,abs=1e-11)=>assert(Math.abs(a-b)<=abs+rel*Math.abs(b),`expected ${b}, got ${a}`);
const preset=name=>{const els=c.buildPreset(name).els;return {els,s:c.solveCircuit(els)};};
test('series and parallel currents, equivalent resistance and source power',()=>{
 for(const name of ['series','parallel']){const {els,s}=preset(name),bat=els.find(e=>e.type==='bat'),I=name==='series'?.3:1.2;
 close(s.res.get(bat.id).I,-I);close(c.eqResistance(els,bat),name==='series'?20:5);
 for(const e of els.filter(e=>e.type==='bulb'))close(Math.abs(s.res.get(e.id).I),name==='series'?.3:.6);
 close(c.powerBalance(els,s).src,6*I);}
});
test('unloaded divider and balanced bridge independently calculated',()=>{
 const d=preset('divider'),vm=d.els.find(e=>e.type==='vm');close(d.s.res.get(vm.id).V,12*1000/3200);close(d.s.res.get(vm.id).I,0);
 const b=preset('bridge'),g=b.els.find(e=>e.name==='G');close(b.s.res.get(g.id).I,0);close(c.eqResistance(b.els,b.els.find(e=>e.type==='bat')),1/(1/320+1/480));
});
test('internal resistance terminal voltage and shorted load',()=>{
 const {els,s}=preset('internal'),bat=els.find(e=>e.type==='bat');close(s.res.get(bat.id).I,-9/11);close(s.res.get(bat.id).V,90/11);
 els.find(e=>e.type==='sw').closed=true;const short=c.solveCircuit(els);close(short.res.get(bat.id).I,-9);close(short.res.get(bat.id).V,0);
 close(c.powerBalance(els,short).diss,81);
});
test('KCL and independent signed terminal-power sums for all presets',()=>{
 for(const name of ['series','parallel','compare','divider','bridge','internal']){const {els,s}=preset(name);assert(s.parts.every(p=>p.status==='ok'));
 for(const value of c.kclResiduals(els,s).values())close(value,0);
 let power=0;for(const e of els){const r=s.res.get(e.id);if(Number.isFinite(r.V))power+=r.V*r.I;}close(power,0);
 const b=c.powerBalance(els,s);close(b.src,b.diss);}
});
test('open switch, ideal battery short and disconnected meters',()=>{
 const bat={id:1,type:'bat',a:[0,0],b:[0,1],emf:6,rOn:false},sw={id:2,type:'sw',a:[0,0],b:[0,1],closed:false};
 let s=c.solveCircuit([bat,sw]);close(s.res.get(1).I,0);assert.equal(c.eqResistance([bat,sw],bat),Infinity);
 s=c.solveCircuit([bat,{...sw,closed:true}]);assert(s.parts.some(p=>p.status!=='ok'));
 s=c.solveCircuit([bat,{id:3,type:'vm',a:[0,0],b:[8,8]}]);assert(Number.isNaN(s.res.get(3).V));
});
test('UI resistor extremes agree with Ohm law including battery resistance',()=>{
 for(const R of [1,1e6])for(const ri of [.1,100]){const els=[{id:1,type:'bat',a:[0,0],b:[0,1],emf:12,rOn:true,r:ri},{id:2,type:'res',a:[0,0],b:[0,1],R}],s=c.solveCircuit(els);close(s.res.get(2).I,12/(R+ri));}
});
console.log(`Completed ${n} circuit-builder groups.`);
