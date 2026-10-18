'use strict';
const assert=require('node:assert/strict'),r=require('./demo_source.cjs').core('rc-circuits','R_VALUES,C_VALUES,makeRC,rcEvent,stateAt,totals,lastSeg,segEnergy,loopResidual');
let n=0;const test=(s,f)=>{f();n++;console.log('PASS',s);},close=(a,b,rel=1e-9,abs=1e-14)=>assert(Math.abs(a-b)<=abs+rel*Math.abs(b),`expected ${b}, got ${a}`);
const p={eps:12,R1:1e4,R2:10,C:1e-4,flash:false};
test('charging and discharging against independent integrating-factor solution',()=>{
 for(const R of [1e3,1e4,1e6])for(const C of [1e-6,1e-4,1e-3])for(const mode of ['charge','discharge']){
  const pp={...p,R1:R,C},q0=mode==='charge'?0:C*12,sim=r.makeRC(pp,mode,q0),target=mode==='charge'?12:0;
  for(const x of [0,.01,.5,1,5,50]){const t=x*R*C,s=r.stateAt(sim,t),v=target+(q0/C-target)*Math.exp(-x);close(s.VC,v);close(s.Q,C*v);close(s.I,(target-v)/R);close(r.loopResidual(sim,t),0);}
 }
});
test('independent midpoint power quadrature and complete charge energy split',()=>{
 const sim=r.makeRC(p,'charge',0),T=5,N=100000,h=T/N;let work=0,heat=0;
 for(let j=0;j<N;j++){const i=12/p.R1*Math.exp(-(j+.5)*h);work+=12*i*h;heat+=p.R1*i*i*h;}
 const e=r.totals(sim,T);close(e.W,work,2e-9);close(e.H,heat,2e-9);close(e.check,0);
 const end=r.totals(sim,50);close(end.W,p.C*144);close(end.U,.5*p.C*144);close(end.H,end.U);
});
test('switching preserves charge and selects separate discharge resistor',()=>{
 const pp={...p,flash:true},sim=r.makeRC(pp,'charge',0),q=r.stateAt(sim,1).Q;
 r.rcEvent(sim,1,pp,'discharge','switch');close(r.stateAt(sim,1).Q,q);close(r.lastSeg(sim).tau,.001);
 close(r.stateAt(sim,1.001).Q,q/Math.E);close(r.stateAt(sim,1).I,-q/(p.C*10));close(r.totals(sim,1.01).check,0);
});
test('capacitance change preserves charge and records mechanical work',()=>{
 const sim=r.makeRC(p,'charge',0),t=2,q=r.stateAt(sim,t).Q,old=r.totals(sim,t),pp={...p,C:p.C/2};
 r.rcEvent(sim,t,pp,'charge','component');close(r.stateAt(sim,t).Q,q);close(r.stateAt(sim,t).VC,2*q/p.C);
 close(r.totals(sim,t).M,q*q/(2*pp.C)-old.U);close(r.totals(sim,3).check,0);
});
test('same-time successive events and historical states preserve ledger',()=>{
 const sim=r.makeRC(p,'charge',0),earlier=r.stateAt(sim,.5),q=r.stateAt(sim,1).Q;
 r.rcEvent(sim,1,p,'discharge','switch');r.rcEvent(sim,1,{...p,C:2*p.C},'discharge','component');r.rcEvent(sim,1,{...p,C:2*p.C,R1:20000},'discharge','component');
 close(r.stateAt(sim,.5).Q,earlier.Q);close(r.stateAt(sim,1).Q,q);close(r.totals(sim,2).check,0);
});
test('UI range corners remain finite and passive',()=>{
 for(const R of [r.R_VALUES[0],r.R_VALUES.at(-1)])for(const C of [r.C_VALUES[0],r.C_VALUES.at(-1)]){
 const sim=r.makeRC({...p,R1:R,C},'charge',0);for(const x of [0,1e-8,1,100]){const e=r.totals(sim,x*R*C);for(const v of Object.values(e))assert(Number.isFinite(v));assert(e.H>=0);close(e.check,0);}}
});
console.log(`Completed ${n} RC circuit groups.`);
