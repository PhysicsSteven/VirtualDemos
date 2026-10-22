'use strict';
// AC frequency response readings in demos/circuits.html: acReading against the analytic series RLC,
// and roundSI against the readout rounding (fmtSI with an SI prefix and n significant figures).
// Lab tools: the CSV helpers (comment block, quoting, version), the time cursor grid and the Step forward sizes.
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
const c=core('circuits','acReading,roundSI,buildPreset,resonance,VERSION,csvCell,buildCSV,nice125Down,cursorGrid,snapTime,stepOptions');
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS',name);};
const close=(a,b,r=1e-10,abs=1e-14)=>assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+r*Math.abs(b),`expected ${b}, got ${a}`);
test('roundSI: prefix and significant figures as the readouts print them',()=>{
 for(const [v,sig,want] of [[0.32142857,4,0.3214],[321.42857,4,321.4],[1591.549,3,1590],[999.96,4,1000],[999.4,4,999.4],[-0.0123456,4,-0.01235],
  [7.0710678,4,7.071],[1.23456e-7,3,1.23e-7],[0,4,0],[4e-16,4,0],[12345678,4,12350000],[0.00099996,4,0.001]])
  assert.equal(c.roundSI(v,sig),want,`roundSI(${v}, ${sig})`);
 assert.equal(c.roundSI(Infinity,4),Infinity);
});
test('acReading: series RLC presets match I = V0/(sqrt2 |Z|), phase atan(X/R) and P = Irms^2 R',()=>{
 for(const name of ['acR','acC','acL','below','reso','hiQ']){
  const {els}=c.buildPreset(name),src=els.find(e=>e.type==='ac');
  const R=els.filter(e=>e.type==='res').reduce((a,e)=>a+e.R,0),ind=els.find(e=>e.type==='ind'),cap=els.find(e=>e.type==='cap');
  for(const f of [0.5*src.f,src.f,1.7*src.f]){
   const s={...src,f},E=els.map(e=>e.id===src.id?s:e),w=2*Math.PI*f,XL=ind?w*ind.L:0,XC=cap?1/(w*cap.C):0,X=XL-XC,Z=Math.hypot(R,X);
   const r=c.acReading(E,s);
   close(r.f,f);close(r.Vrms,src.V0/Math.SQRT2);close(r.Z,Z);close(r.phi,Math.atan2(X,R));
   close(r.Irms,src.V0/(Math.SQRT2*Z));close(r.I0,src.V0/Z);close(r.P,r.Irms**2*R,1e-10,1e-14);
   const V=(n)=>r.parts.find(q=>q.name===n);
   if(ind)close(V(ind.name).Vrms,r.Irms*XL);
   if(cap)close(V(cap.name).Vrms,r.Irms*XC);
   for(const e of els.filter(e=>e.type==='res'))close(V(e.name).Vrms,r.Irms*e.R);
  }
 }
});
test('acReading at resonance: current peaks at V0/(sqrt2 R), phase 0, VL = VC = Q V',()=>{
 const {els}=c.buildPreset('reso'),src=els.find(e=>e.type==='ac'),R=els.find(e=>e.type==='res').R,L=els.find(e=>e.type==='ind').L,C=els.find(e=>e.type==='cap').C;
 const r=c.acReading(els,src),Q=Math.sqrt(L/C)/R;
 close(r.Irms,src.V0/(Math.SQRT2*R));close(r.phi,0,1e-9,1e-9);close(r.P,src.V0**2/(2*R));
 const VL=r.parts.find(q=>q.type==='ind').Vrms,VC=r.parts.find(q=>q.type==='cap').Vrms;
 close(VL,Q*r.Vrms,1e-9);close(VC,Q*r.Vrms,1e-9);
});
test('CSV helpers: comment block, header row, quoting and the demo version',()=>{
 assert.match(c.VERSION,/^circuits@\d{4}-\d{2}-\d{2}$/);
 assert.equal(c.csvCell('plain'),'plain');assert.equal(c.csvCell(0.000682),'0.000682');assert.equal(c.csvCell(null),'');
 assert.equal(c.csvCell('a,b'),'"a,b"');assert.equal(c.csvCell('say "hi"'),'"say ""hi"""');assert.equal(c.csvCell('x\ny'),'"x\ny"');
 const text=c.buildCSV(['Circuits virtual apparatus, In time mode (simulated data)',['demo version',c.VERSION],['setup','RC charging'],['part','R1','resistor','R',10000,'ohm'],['note','a, b']],['row','t_s','V_C1_V'],[[1,0.5,4.722],[2,'1.0','7.585']]);
 const L=text.split('\n');
 assert.equal(L[0],'# Circuits virtual apparatus, In time mode (simulated data)');
 assert.equal(L[1],`# demo version,${c.VERSION}`);assert.equal(L[3],'# part,R1,resistor,R,10000,ohm');assert.equal(L[4],'# note,"a, b"');
 assert.equal(L[5],'row,t_s,V_C1_V');assert.equal(L[6],'1,0.5,4.722');assert.equal(L[7],'2,1.0,7.585');assert.equal(L[8],'');assert.equal(L.length,9);
 const body=L.filter(l=>l&&!l.startsWith('# '));assert.equal(body[0],'row,t_s,V_C1_V');
});
test('time cursor grid: steps of 1, 2 or 5 x 10^k <= L/1000, and the printed time is the time read',()=>{
 for(const [x,want] of [[1,1],[0.99,0.5],[3,2],[4.99,2],[5,5],[0.0012,0.001],[7e-6,5e-6],[2.0000001,2]])assert.equal(c.nice125Down(x),want,`nice125Down(${x})`);
 const FINE=[1,1.2,1.5,2,2.5,3,4,5,6,8];
 for(let e=-6;e<=3;e++)for(const m of FINE){
  const L=10*m*10**e,g=c.cursorGrid(L);
  assert(g.res<=L/1000*(1+1e-9)&&g.res>L/2500,`res ${g.res} for L ${L}`);
  assert.deepEqual([g.tf,g.unit],L<2e-3?[1e-6,'µs']:L<2?[1e-3,'ms']:[1,'s']);
  for(const k of [0,1,7,123,999,1000,4321,98765]){
   const t=c.snapTime(k*g.res+0.4*g.res,g.res),shown=(t/g.tf).toFixed(g.dec);
   close(t,k*g.res,1e-12,1e-300);
   close(Number(shown)*g.tf,t,1e-12,1e-300);
  }
 }
 const g=c.cursorGrid(6);assert.deepEqual([g.res,g.unit,g.dec],[0.005,'s',3]);
 const h=c.cursorGrid(0.04);assert.deepEqual([h.res,h.unit,h.dec],[2e-5,'ms',2]);
});
test('Step forward sizes: 1, 2, 5 x 10^k from L/200 to L/2, each a whole number of cursor steps',()=>{
 assert.deepEqual([...c.stepOptions(6)],[0.05,0.1,0.2,0.5,1,2]);
 const FINE=[1,1.2,1.5,2,2.5,3,4,5,6,8];
 for(let e=-6;e<=3;e++)for(const m of FINE){
  const L=10*m*10**e,o=c.stepOptions(L),res=c.cursorGrid(L).res;
  assert(o.length>=5&&o.length<=7,`${o.length} options for L ${L}`);
  for(let i=0;i<o.length;i++){
   const v=o[i];assert(v>=L/200*(1-1e-9)&&v<=L/2*(1+1e-9),`option ${v} for L ${L}`);
   const k=v/res;assert(Math.abs(k-Math.round(k))<1e-9,`option ${v} is ${k} cursor steps`);
   const lead=v/10**Math.floor(Math.log10(v)+1e-12);assert([1,2,5].some(q=>Math.abs(lead-q)<1e-9),`option ${v}`);
   if(i)assert(v>o[i-1]);
  }
 }
});
console.log(`${count} circuits readings test groups passed`);
