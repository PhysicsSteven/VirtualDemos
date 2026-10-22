'use strict';
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
const m=core('coulomb-sandbox','DEMO_VERSION,C_V,C_E,CORE_R,potentialAt,fieldAt,coreAt,viewBounds,snap01,roundV,roundE,fmtV,fmtE,dirDeg,probeReading,fieldGrid,chargeKey,cmToM,readingsCsv');
// the demo's own pure functions take the charge list; this shim keeps the original test groups unchanged
let charges=[];
const c={potential:(x,y)=>m.potentialAt(charges,x,y),field:(x,y)=>m.fieldAt(charges,x,y),inCore:(x,y)=>m.coreAt(charges,x,y),CORE_R:m.CORE_R,set:q=>{charges=q;}};const k=8.98755e9;let n=0;
const close=(a,b,rel=1e-8,abs=1e-6)=>assert(Math.abs(a-b)<=abs+rel*Math.abs(b),`expected ${b}, got ${a}`),test=(name,f)=>{f();n++;console.log('PASS',name);};
test('SI units and inverse distance / inverse square for isolated charges',()=>{
 for(const q of [-3,1,5]){c.set([{x:0,y:0,q}]);for(const r of [.2,1,3,10]){close(c.potential(r,0),k*q*1e-9/(r*.01));close(c.field(r,0)[0],k*q*1e-9/(r*.01)**2);close(c.field(r,0)[1],0);}}
});
test('superposition and dipole cancellation',()=>{
 const charges=[{x:-3,y:0,q:2},{x:3,y:0,q:-2}];c.set(charges);close(c.potential(0,0),0);close(c.field(0,0)[0],2*k*2e-9/.03**2);
 const p=[1,2];c.set(charges);const v=c.potential(...p),E=c.field(...p);let vs=0,ex=0,ey=0;
 for(const q of charges){c.set([q]);vs+=c.potential(...p);const e=c.field(...p);ex+=e[0];ey+=e[1];}close(v,vs);close(E[0],ex);close(E[1],ey);
});
test('field equals independent numerical negative potential gradient away from cores',()=>{
 c.set([{x:-3,y:0,q:2},{x:3,y:1,q:-1}]);for(const [x,y] of [[0,0],[1,2],[-4,3]]){const h=1e-4,e=c.field(x,y);
 close(e[0],-(c.potential(x+h,y)-c.potential(x-h,y))/(2*h*.01),1e-7);close(e[1],-(c.potential(x,y+h)-c.potential(x,y-h))/(2*h*.01),1e-7);}
});
test('closed path work is zero outside softened charge cores',()=>{
 c.set([{x:0,y:0,q:1}]);let work=0;const N=10000;
 for(let j=0;j<N;j++){const a=2*Math.PI*(j+.5)/N,x=3+Math.cos(a),y=2+Math.sin(a),e=c.field(x,y);work+=(e[0]*-Math.sin(a)+e[1]*Math.cos(a))*.01*2*Math.PI/N;}close(work,0,0,1e-9);
});
test('zero charges and distant dipole scaling',()=>{
 c.set([{x:0,y:0,q:0}]);close(c.potential(0,0),0);close(c.field(0,0)[0],0);
 c.set([{x:-1,y:0,q:1},{x:1,y:0,q:-1}]);const a=Math.abs(c.field(0,1000)[0]),b=Math.abs(c.field(0,2000)[0]);close(a/b,8,2e-6);
});
test('core model: uniformly charged ball, E = -grad V inside, continuous at r = a',()=>{
 const a=c.CORE_R;assert.equal(a,.12);
 for(const q of [1,-3]){c.set([{x:0,y:0,q}]);
  close(c.potential(0,0),1.5*k*q*1e-9/(a*.01));close(c.field(0,0)[0],0);
  for(const r of [.01,.05,.09,.1199]){const rm=r*.01,am=a*.01;
   close(c.potential(r,0),k*q*1e-9*(3*am*am-rm*rm)/(2*am**3));close(c.field(r,0)[0],k*q*1e-9*rm/am**3);
   const h=1e-6,g=-(c.potential(r+h,0)-c.potential(r-h,0))/(2*h*.01);close(c.field(r,0)[0],g,1e-6);}
  const e=1e-9;close(c.potential(a-e,0),c.potential(a+e,0),1e-7);close(c.field(a-e,0)[0],c.field(a+e,0)[0],1e-7);
  assert(c.inCore(.05,0)&&!c.inCore(.13,0));}
});
test('E = -grad V on a grid crossing two cores (2D, both components)',()=>{
 c.set([{x:0,y:0,q:2},{x:.3,y:.1,q:-1}]);const h=1e-6;
 for(let i=-20;i<=20;i++)for(let j=-10;j<=10;j++){const x=i*.0173,y=j*.0191,E=c.field(x,y);
  if([[0,0],[.3,.1]].some(([X,Y])=>Math.abs(Math.hypot(x-X,y-Y)-.12)<1e-5))continue;
  close(E[0],-(c.potential(x+h,y)-c.potential(x-h,y))/(2*h*.01),1e-5,1e-3);close(E[1],-(c.potential(x,y+h)-c.potential(x,y-h))/(2*h*.01),1e-5,1e-3);}
});
test('readings: capture rounds as displayed, CSV carries the charges and parses back to the core values',()=>{
 assert.match(m.DEMO_VERSION,/^coulomb-sandbox@\d{4}-\d{2}-\d{2}$/);
 // display rounding and its text agree
 const vNum=t=>{t=t.replace('−','-');return t.endsWith(' kV')?parseFloat(t)*1e3:parseFloat(t);};
 const eNum=t=>t.endsWith(' MV/m')?parseFloat(t)*1e6:t.endsWith(' kV/m')?parseFloat(t)*1e3:parseFloat(t);
 for(const v of [0,-0.4,12.6,-999.4,1234.5,-23456,5e5,7777.77])close(vNum(m.fmtV(v)),m.roundV(v),0,1e-6);
 for(const e of [0,3.4,999.4,1234,45678,123456,987654,2.345e6,9.99e7])close(eNum(m.fmtE(e)),m.roundE(e),0,1e-6);
 for(const v of [-12345,-50,0,7,999,1000,4321])assert(Math.abs(m.roundV(v)-v)<=(Math.abs(v)>=1000?5:0.5));
 assert.equal(m.dirDeg(1,0),0);assert.equal(m.dirDeg(0,1),90);assert.equal(m.dirDeg(-1,-1e-9),180);assert.equal(m.dirDeg(1,-1e-9),0);assert.equal(m.dirDeg(0,0),null);
 // dipole reading at (0, 2.5) cm: V = 0 and E along +x with |E| = 2kq d/(d^2+h^2)^(3/2)
 const dip=[{x:-3,y:0,q:2},{x:3,y:0,q:-2}],r=m.probeReading(dip,0,2.5),Ex=2*k*2e-9*.03/(.03**2+.025**2)**1.5;
 assert.equal(r.V,0);assert.equal(r.dir,0);assert.equal(r.E,m.roundE(Ex));assert.equal(r.E,18100);assert.equal(r.inCore,false);
 assert.equal(m.probeReading(dip,-3,0.05).inCore,true);
 // CSV: header comments, charges in SI, rows parse back within display rounding of the core values
 const pts=[[0,2.5],[1.3,-0.7],[-4.2,3.1],[2.9,0.1]],rows=pts.map(([x,y])=>{const q=m.probeReading(dip,x,y);return {config:1,x:q.x.toFixed(1),y:q.y.toFixed(1),V:String(q.V),E:String(q.E),dir:q.dir===null?'':String(q.dir),inCore:q.inCore};});
 rows.push({config:2,x:'0.5',y:'0',V:'edited, by hand',E:'',dir:'',inCore:false});
 const csv=m.readingsCsv(rows,[{name:'Dipole',charges:dip},{name:'Like pair',charges:[{x:-3,y:0,q:2},{x:3,y:0,q:2}]}]),L=csv.trim().split('\n');
 assert.equal(L[0],'# Coulomb Sandbox probe readings (simulated data)');assert.equal(L[1],'# demo version,'+m.DEMO_VERSION);
 assert(L.includes('# config 1 charge 1,x_m,-0.03,y_m,0,q_C,2e-9'));assert(L.includes('# config 1 charge 2,x_m,0.03,y_m,0,q_C,-2e-9'));assert(L.includes('# config 2,Like pair'));
 const hi=L.indexOf('row,config,x_m,y_m,V_volts,E_V_per_m,E_direction_deg,inside_charge_ball');assert(hi>0&&L.slice(0,hi).every(l=>l.startsWith('# ')));
 const data=L.slice(hi+1);assert.equal(data.length,5);
 data.slice(0,4).forEach((line,i)=>{const f=line.split(','),x=+f[2]*100,y=+f[3]*100;close(x,pts[i][0],0,1e-9);close(y,pts[i][1],0,1e-9);
  const V=m.potentialAt(dip,x,y),[ex,ey]=m.fieldAt(dip,x,y),E=Math.hypot(ex,ey);
  assert(Math.abs(+f[4]-V)<=(Math.abs(V)>=1000?5:0.5)+1e-9,`V row ${i+1}`);assert(Math.abs(+f[5]-E)<=0.005*E+0.5,`E row ${i+1}`);
  const d=Math.atan2(ey,ex)*180/Math.PI,dd=Math.abs(((+f[6]-d)%360+540)%360-180);assert(dd<=0.5+1e-9,`direction row ${i+1}`);});
 assert.equal(data[4],'5,2,0.005,0,"edited, by hand",,,0');
 assert.equal(m.cmToM('−2.5'),'-0.025');assert.equal(m.cmToM('abc'),'abc');assert.equal(m.snap01(-0.04),0);
 // field map table covers the region on a 2 cm grid and agrees with probe readings
 const g=m.fieldGrid(dip,{x0:-9.7,x1:9.7,y0:-5.7,y1:5.7},2);assert.equal(g.length,9*5);assert(g.every(p=>p.x%2===0&&p.y%2===0));
 assert.equal(JSON.stringify(g.find(p=>p.x===0&&p.y===0)),JSON.stringify(m.probeReading(dip,0,0)));
 const b=m.viewBounds(800,600,400,300,40);assert.equal(JSON.stringify(b),JSON.stringify({x0:-10,x1:10,y0:-7.5,y1:7.5}));
 assert.equal(m.chargeKey(dip),'-3,0,2;3,0,-2');
});
if(process.argv.includes('--strict-core')){
 // Independent check at a point inside the core: the field must equal the numerical -dV/dx there.
 c.set([{x:0,y:0,q:1}]);const x=.05,h=1e-5,expected=-(c.potential(x+h,0)-c.potential(x-h,0))/(2*h*.01);
 console.log('Core consistency probe (cm)',{x,field:c.field(x,0)[0],negativeGradient:expected});close(c.field(x,0)[0],expected);
}
console.log(`${n} coulomb-sandbox test groups passed`);
