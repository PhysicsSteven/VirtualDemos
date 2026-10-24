'use strict';
/* Diode, LED and junction transistor in circuits.html: Shockley and Ebers–Moll checks, Newton solve, small signal AC and the nonlinear time stepper. */
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
const c=core('circuits','solveDC,solveAC,kclResiduals,powerBalance,buildTransient,propagator,stepWith,zeroState,storedC,sysV,buildPreset,PRESETS,DIODE,LEDS,BJT,VT,GMIN,diodeModel,hasNonlinear');
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS',name);};
const close=(a,b,r=2e-8,abs=1e-12)=>assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+r*Math.abs(b),`expected ${b}, got ${a}`);
const W=(id,a,b)=>({id,type:'wire',a,b});
const kcl=(s)=>{for(const v of c.kclResiduals(s.brs,id=>s.res.get(id)?.I).values())close(v,0,0,1e-12);};
test('devices: part data and thermal voltage',()=>{
 close(c.VT,1.380649e-23*300.15/1.602176634e-19,1e-12);
 close(c.DIODE.Is,4.352e-9);close(c.DIODE.n,1.906);close(c.DIODE.Rs,.6458);
 for(const [k,V] of [['red',1.85],['green',3.2],['blue',3.3]]){const m=c.diodeModel({type:'led',color:k});close(c.LEDS[k].VF,V);close(m.Is*Math.expm1(V/(m.n*c.VT)),.020,1e-9);}
});
test('devices: diode with resistor obeys Shockley, KCL and power balance',()=>{
 for(const emf of [.3,1,5,12]){
  const els=[{id:1,type:'bat',a:[0,0],b:[0,2],emf},{id:2,type:'res',a:[0,0],b:[2,0],R:1000},{id:3,type:'diode',a:[2,0],b:[2,2]},W(4,[2,2],[0,2])],s=c.solveDC(els);
  assert(s.conv);const d=c.DIODE,r=s.res.get(3),Vj=r.V-d.Rs*r.I;
  close(r.I,d.Is*Math.expm1(Vj/(d.n*c.VT))+c.GMIN*Vj,1e-9,1e-15);close(r.I,(emf-r.V)/1000,1e-9,1e-15);
  const p=c.powerBalance(els,s);close(p.src,p.diss,1e-9,1e-15);kcl(s);
 }
 const rev=c.solveDC([{id:1,type:'bat',a:[0,0],b:[0,2],emf:-5},{id:2,type:'res',a:[0,0],b:[2,0],R:1000},{id:3,type:'diode',a:[2,0],b:[2,2]},W(4,[2,2],[0,2])]);
 assert(rev.conv);assert(Math.abs(rev.res.get(3).I)<1e-8);
});
const ce=(RB,pnp=false)=>[{id:1,type:'bat',a:[0,0],b:[0,4],emf:pnp?-9:9},W(2,[0,0],[4,0]),{id:3,type:'res',a:[4,0],b:[4,1],R:1000},{id:4,type:'res',a:[0,0],b:[1,2],R:RB},
 {id:5,type:'bjt',a:[1,2],b:[2,1],c:[2,3],beta:100,pnp},W(6,[2,1],[4,1]),W(7,[2,3],[2,4]),W(8,[2,4],[0,4])];
test('devices: transistor gain in the active region, saturation, KCL, power and PNP mirror',()=>{
 const s=c.solveDC(ce(1e6));assert(s.conv);const IC=s.res.get(5).I,IB=s.res.get(-5).I;
 close(IC/IB,100,2e-3);assert(s.res.get(5).V>1);kcl(s);const p=c.powerBalance(ce(1e6),s);close(p.src,p.diss,1e-9,1e-15);
 const t=c.solveDC(ce(10e3));assert(t.conv&&t.res.get(5).V<.2&&t.res.get(5).I/t.res.get(-5).I<20);
 const m=c.solveDC(ce(1e6,true));assert(m.conv);close(m.res.get(5).I,-IC,1e-7);close(m.res.get(-5).I,-IB,1e-7);close(m.res.get(5).V,-s.res.get(5).V,1e-7);
});
test('devices: small signal AC gain equals the DC slope',()=>{
 const mk=(vb)=>[{id:1,type:'bat',a:[0,0],b:[0,6],emf:9},W(2,[0,0],[6,0]),{id:3,type:'res',a:[6,0],b:[6,2],R:2200},
  {id:10,type:'bat',a:[2,6],b:[2,5],emf:-vb},{id:11,type:'ac',a:[2,5],b:[2,4],V0:.01,f:1000},{id:4,type:'res',a:[2,4],b:[3,3],R:47e3},
  {id:5,type:'bjt',a:[3,3],b:[4,2],c:[4,4],beta:150},W(6,[4,2],[6,2]),{id:7,type:'res',a:[4,4],b:[4,6],R:220},W(8,[4,6],[0,6]),W(9,[2,6],[4,6])];
 const d=1e-4,fd=(c.solveDC(mk(2+d)).res.get(3).V-c.solveDC(mk(2-d)).res.get(3).V)/(2*d),ac=c.solveAC(mk(2),1000).res.get(3).V;
 close(Math.hypot(ac[0],ac[1])/.01,Math.abs(fd),1e-6);
});
test('devices: nonlinear stepper matches the exact linear propagator and conserves energy',()=>{
 const extra=[{id:901,type:'bat',a:[20,0],b:[20,2],emf:3},{id:902,type:'res',a:[20,0],b:[21,0],R:100},{id:903,type:'diode',a:[21,0],b:[21,2]},W(904,[21,2],[20,2])];
 const base=c.buildPreset('rc').els,L=c.buildTransient(base),N=c.buildTransient([...base,...extra]);assert(N.nl&&!L.nl);
 const id=base.find(e=>e.type==='cap').id,h=.05,PL=c.propagator(L,h),PN=c.propagator(N,h);let xl=c.zeroState(L,0),xn=c.zeroState(N,0),dv=0;
 for(let k=0;k<80;k++){xl=c.stepWith(PL,xl).x;xn=c.stepWith(PN,xn).x;dv=Math.max(dv,Math.abs(c.sysV(L,id,xl)-c.sysV(N,id,xn)));}
 assert(dv<1e-3,`drift ${dv}`);
 const els=[{id:1,type:'ac',a:[0,0],b:[0,2],V0:10,f:60},{id:2,type:'diode',a:[0,0],b:[1,0]},{id:3,type:'res',a:[1,0],b:[1,2],R:1000},{id:4,type:'cap',a:[1,0],b:[2,0],C:100e-6},W(5,[2,0],[2,2]),W(6,[2,2],[1,2]),W(7,[1,2],[0,2])];
 const S=c.buildTransient(els),P=c.propagator(S,1/6000);let x=c.zeroState(S,0),Wsrc=0,H=0;
 for(let k=0;k<300;k++){const r=c.stepWith(P,x);x=r.x;S.forms.forEach((F,i)=>{if(F.key==='src')Wsrc+=r.dE[i];else H+=r.dE[i];});}
 const U=c.storedC(S,x);assert(U>.003);close(Wsrc-H-U,0,0,1e-4*Wsrc);
});
test('devices: every starter setup solves',()=>{
 for(const name of ['ohm','diodeIV','leds','rectifier','tswitch','amp']){
  assert(c.PRESETS[name]);const els=c.buildPreset(name).els,s=c.solveDC(els);assert(s.conv,name);kcl(s);
  if(name!=='ohm')assert(c.hasNonlinear(els));
 }
 const t=c.buildPreset('tswitch').els,q=t.find(e=>e.type==='bjt'),s=c.solveDC(t);assert(s.res.get(q.id).V<.1);
 const a=c.buildPreset('amp').els,qa=a.find(e=>e.type==='bjt'),sa=c.solveDC(a);close(sa.res.get(qa.id).I,9e-4,.1);
});
console.log(`${count} circuit device groups passed`);
