'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const src=require('./demo_source.cjs').readDemo('capacitors'),ctx={};
vm.runInNewContext([...src.matchAll(/<script>([\s\S]*?)<\/script>/g)].find(m=>m[1].includes('==CORE START=='))[1],ctx,{timeout:1000});
const c=ctx.CAP,eps=c.EPS0;let n=0;
const close=(a,b,rel=1e-9,abs=1e-20)=>assert(Math.abs(a-b)<=abs+rel*Math.abs(b),`expected ${b}, got ${a}`);
const test=(name,fn)=>{fn();n++;console.log('PASS',name);};
const g={A:.0144,d:.01,t:.01,kap:4.7,f:0},V=100,C0=eps*g.A/g.d,Q0=C0*V;
test('vacuum, full dielectric, partial area and air-gap series model',()=>{
 close(c.capOf(g).C,C0);close(c.capOf({...g,f:1}).C,4.7*C0);close(c.capOf({...g,f:.5}).C,2.85*C0);
 close(c.capOf({...g,d:.02,f:1}).C,eps*g.A/(.01+.01/4.7));
 for(const f of [0,.3,1])close(c.capOf({...g,f,kap:1}).C,C0);
});
test('fixed voltage and fixed charge separation experiments',()=>{
 const a=c.stateOf(g,'battery',V,Q0),b=c.stateOf({...g,d:.02},'battery',V,Q0),q=c.stateOf({...g,d:.02},'iso',V,Q0);
 close(b.C,a.C/2);close(b.Q,a.Q/2);close(b.U,a.U/2);close(q.Q,a.Q);close(q.V,2*V);close(q.U,2*a.U);close(q.Ee,a.Ee);
});
test('independently integrated field energy equals capacitor energy',()=>{
 for(const f of [0,.25,1])for(const kap of [1,4.7,80.1])for(const d of [.01,.02,.04])for(const mode of ['battery','iso']){
  const z=c.stateOf({...g,f,kap,d},mode,V,Q0),ref=.5*eps*((1-f)*g.A*d*z.Ee**2+f*g.A*(d-g.t)*z.Ea**2+kap*f*g.A*g.t*z.Ed**2);
  close(z.U,ref);close(z.Ufield,ref);close(z.Ea,kap*z.Ed);
 }
});
test('force agrees with independent numerical energy derivative',()=>{
 const base={...g,f:.4,d:.02},h=1e-7;
 for(const mode of ['battery','iso']){
  const z=c.stateOf(base,mode,V,Q0),lo=c.stateOf({...base,f:base.f-h/Math.sqrt(g.A)},mode,V,Q0),hi=c.stateOf({...base,f:base.f+h/Math.sqrt(g.A)},mode,V,Q0);
  // At fixed V the relevant mechanical potential includes battery work: -CV²/2.
  const sign=mode==='battery'?1:-1;close(z.Fslab,sign*(hi.U-lo.U)/(2*h),1e-7);
 }
});
test('independent plate-force work integral matches ledger at fixed V',()=>{
 let work=0;const steps=20000,h=.01/steps;
 for(let j=0;j<steps;j++){const d=.01+(j+.5)*h;work+=.5*eps*g.A*V*V/(d*d)*h;}
 const ledger=c.newLedger();c.moveStep(ledger,g,{...g,d:.02},'battery',V,Q0);close(ledger.Wh,work,1e-9);close(ledger.Wb,-.5*C0*V*V);close(ledger.H,0);
});
test('reconnection heat and complete energy ledger',()=>{
 const end={...g,d:.02},cap=c.capOf(end).C,l=c.newLedger();c.moveStep(l,g,end,'iso',V,Q0);const q=c.connectStep(l,cap,Q0,V);
 close(q,cap*V);close(l.H,.5*cap*(200-100)**2);close(l.Wb,-cap*V*V);
 const initial=.5*C0*V*V,final=.5*cap*V*V;close(final-initial,l.Wh+l.Wb-l.H);
});
test('series parallel mixed networks conserve charge, voltage and energy',()=>{
 const caps=[10e-12,22e-12,47e-12];
 for(const top of ['series','parallel','mixed']){
  const z=c.combo(top,3,caps,V);close(z.U,z.caps.reduce((a,x)=>a+x.U,0));
  if(top==='series'){close(z.Ceq,1/caps.reduce((a,x)=>a+1/x,0));close(z.caps.reduce((a,x)=>a+x.V,0),V);for(const x of z.caps)close(x.Q,z.Q);}
  if(top==='parallel'){close(z.Ceq,79e-12);close(z.caps.reduce((a,x)=>a+x.Q,0),z.Q);}
  if(top==='mixed'){close(z.caps[0].Q,z.caps[1].Q+z.caps[2].Q);close(z.caps[0].V+z.caps[1].V,V);close(z.caps[1].V,z.caps[2].V);}
 }
});
// ---- lab kit: readings, CSV and fit helpers, imported from the CORE block alone ----
const k=require('./demo_source.cjs').core('capacitors','EPS0,stateOf,newLedger,moveStep,connectStep,capOf,fmtSI,fmtE,parseSI,scaleStr,readingOf,readingsCSV,CSV_COLS,fitPoints,fitLine,fmtPM');
const half=(v)=>0.5*Math.pow(10,Math.floor(Math.log10(Math.abs(v))+1e-12)-2);   // half the last displayed digit at 3 significant figures
test('least squares line with intercept against a hand calculation',()=>{
 // x = 1..4, y = 2.1, 3.9, 6.2, 7.8: Sxx = 5, Sxy = 9.7, b = 1.94, a = 0.15, residuals 0.01, −0.13, 0.23, −0.11,
 // SS = 0.082, s² = 0.041, SE(b) = √(0.041/5), SE(a) = √(0.041(1/4 + 2.5²/5))
 const f=k.fitLine([1,2,3,4],[2.1,3.9,6.2,7.8]);
 close(f.b,1.94,1e-12);close(f.a,0.15,1e-11);close(f.seB,Math.sqrt(0.041/5),1e-10);close(f.seA,Math.sqrt(0.041*1.5),1e-10);
 [0.01,-0.13,0.23,-0.11].forEach((r,i)=>close(f.res[i],r,1e-9,1e-12));
 const e=k.fitLine([1,2,3],[5,7,9]);close(e.b,2);close(e.a,3);assert.equal(e.seB,0);
 const two=k.fitLine([1,2],[1,3]);close(two.b,2);assert(Number.isNaN(two.seB));
 assert.equal(k.fitLine([2,2,2],[1,2,3]),null);assert.equal(k.fitLine([1],[1]),null);
});
test('displayed values parse back to SI and the plus or minus format',()=>{
 close(k.parseSI('12.8 pF','F'),12.8e-12);close(k.parseSI('−3.20 nJ','J'),-3.2e-9);close(k.parseSI('5.00 kV/m','V/m'),5000);close(k.parseSI('500 V/m','V/m'),500);
 close(k.parseSI('0 J','J'),0);assert(Number.isNaN(k.parseSI('—','J')));
 for(const v of [1.2345e-11,9.9996e-12,6.38e-8,-1.234e-9,123.456,0.0555])close(k.parseSI(k.fmtSI(v,'F'),'F'),v,0.5e-2);
 assert.equal(k.fmtPM(1.2750e-13,3.2e-16,'F·m'),'(1.2750 ± 0.0032) × 10⁻¹³ F·m');
 assert.equal(k.fmtPM(12.34,0.56,'V'),'(1.234 ± 0.056) × 10¹ V');assert.equal(k.fmtPM(2.5,0.13,'V'),'2.50 ± 0.13 V');
 assert.equal(k.fmtPM(-0.5,0.02,'F'),'(−5.00 ± 0.20) × 10⁻¹ F');
 assert.equal(k.scaleStr('12.8',1e-12),'1.28e-11');assert.equal(k.scaleStr('abc',1e-12),'abc');assert.equal(k.scaleStr('',2),'');
});
// a simulated lab session: Mark start at the preset, then readings at the handout's separations or insertions
function session(g0,mode,targets,key,blind){
 const V=100,Q=k.capOf(g0).C*V,L=k.newLedger(),start=k.stateOf(g0,mode,V,Q),rows=[];let g=g0;
 for(const v of targets){const g2={...g,[key]:v};k.moveStep(L,g,g2,mode,V,Q);g=g2;
  rows.push({row:k.readingOf({g,mode,Vb:V,Q:mode==='battery'?k.capOf(g).C*V:Q,L:{...L},start,blind,preset:'Pull apart, connected',mat:'Pyrex glass'}),st:k.stateOf(g,mode,V,Q),L:{...L},g});}
 return rows;
}
test('captured readings are the model rounded as displayed, energies included',()=>{
 const s=session({A:.0144,d:.01,t:.01,kap:1,f:0},'battery',[.01,.015,.02,.025,.03],'d',false);
 for(const {row,st,L,g} of s){
  close(Number(row.d)/100,g.d);assert.equal(row.f,'0');assert.equal(row.battery,'connected');assert.equal(row.A,'144');
  for(const [key,sc,tv] of [['C',1e-12,st.C],['Q',1e-9,st.Q],['V',1,st.V],['E',1,st.Ee],['U',1,st.U],['Wh',1,L.Wh],['Wb',1,L.Wb]]){
   const shown=Number(row[key])*sc;assert(Math.abs(shown-tv)<=half(tv)*(1+1e-9)+1e-30,`${key}: ${shown} vs ${tv}`);
  }
 }
 // d = 2 cm at fixed V: C halves, W_battery = −2|ΔU| (the notes quote 63.8 → 31.9 nJ and 63.8 nJ into the battery)
 const r2=s[2].row;assert.equal(r2.U,'3.19e-8');assert.equal(r2.dU,'-3.19e-8');assert.equal(r2.Wb,'-6.38e-8');assert.equal(r2.Wh,'3.19e-8');assert.equal(r2.H,'0');
 const iso=session({A:.0144,d:.01,t:.01,kap:1,f:0},'iso',[.02],'d',true)[0].row;assert.equal(iso.V,'200');assert.equal(iso.kap,'');assert.equal(iso.battery,'isolated');
});
test('CSV: metadata, SI columns, quoting, edited cells and Blind',()=>{
 const rows=session({A:.0144,d:.01,t:.01,kap:1,f:0},'battery',[.01,.02],'d',false).map((x)=>x.row);
 rows[1]={...rows[1],V:'99.5'};rows.push({...rows[0],C:'about 13'});
 const txt=k.readingsCSV(rows,{version:'capacitors@test',setup:'Pull apart, connected',blind:false}),lines=txt.trim().split('\n');
 const meta=lines.filter((l)=>l.startsWith('#')),body=lines.filter((l)=>!l.startsWith('#'));
 assert(meta[0].includes('(simulated data)'));assert(meta.some((l)=>l==='# demo version,capacitors@test'));assert(meta.some((l)=>l==='# setup at export,"Pull apart, connected"'));
 assert(meta.some((l)=>l==='# eps0_F_per_m,'+k.EPS0));assert(meta.some((l)=>l.startsWith('# rounding,')));assert(meta.some((l)=>l.startsWith('# model,')));
 const head=body[0].split(',');assert.deepEqual(head,['row',...k.CSV_COLS.map((c)=>c[0])]);
 const parse=(l)=>{const out=[];let cur='',q=false;for(const ch of l){if(ch==='"'){q=!q;continue;}if(ch===','&&!q){out.push(cur);cur='';}else cur+=ch;}out.push(cur);return out;};
 const r1=Object.fromEntries(parse(body[1]).map((v,i)=>[head[i],v])),r2=Object.fromEntries(parse(body[2]).map((v,i)=>[head[i],v])),r3=Object.fromEntries(parse(body[3]).map((v,i)=>[head[i],v]));
 assert.equal(body.length,4);assert.equal(r1.preset,'Pull apart, connected');assert.equal(r1.d_m,'0.01');assert.equal(r1.A_m2,'0.0144');assert.equal(r1.insertion_fraction,'0');
 const C0=k.EPS0*.0144/.01;assert(Math.abs(Number(r1.C_F)-C0)<=half(C0));assert.equal(r1.C_F,'1.28e-11');assert.equal(r1.Q_C,'1.28e-9');
 assert.equal(r2.V_volts,'99.5');assert.equal(r3.C_F,'about 13');assert.equal(r2.d_m,'0.02');
 const b=k.readingsCSV(rows,{version:'v',setup:'s',blind:true});assert(!b.includes('eps0_F_per_m,'));assert(b.includes('# blind,on'));
});
// worst case change of the fitted slope and intercept when each y may be off by up to h[i] (the display rounding)
function fitBounds(x,h){const n=x.length,mx=x.reduce((p,v)=>p+v,0)/n,sxx=x.reduce((p,v)=>p+(v-mx)**2,0);
 return {db:x.reduce((p,v,i)=>p+Math.abs(v-mx)*h[i],0)/sxx,da:x.reduce((p,v,i)=>p+Math.abs(1/n-mx*(v-mx)/sxx)*h[i],0)};}
test('fits of simulated readings recover ε0 and κ within the bound set by the display rounding',()=>{
 const A=.0144,s=session({A,d:.01,t:.01,kap:1,f:0},'battery',[.01,.015,.02,.025,.03],'d',false);
 let P=k.fitPoints(s.map((x)=>x.row),'Cd'),f=k.fitLine(P.x,P.y),B=fitBounds(P.x,s.map((x)=>half(x.st.C)));assert.equal(P.x.length,5);
 assert(Math.abs(f.b-k.EPS0*A)<=B.db*1.000001,`C vs 1/d slope ${f.b} vs ${k.EPS0*A} ± ${B.db}`);assert(Math.abs(f.a)<=B.da*1.000001);
 assert(B.db/(k.EPS0*A)<0.01);    // 3 significant figures limit ε0 from this sweep to about 1%
 const iso=session({A,d:.01,t:.01,kap:1,f:0},'iso',[.01,.015,.02,.025,.03],'d',false);
 P=k.fitPoints(iso.map((x)=>x.row),'Vd');f=k.fitLine(P.x,P.y);B=fitBounds(P.x,iso.map((x)=>half(x.st.V)));
 const Qt=iso[0].st.Q,Qs=Number(iso[0].row.Q)*1e-9;assert(Math.abs(Qs-Qt)<=half(Qt));
 assert(Math.abs(f.b-Qt/(k.EPS0*A))<=B.db*1.000001+1e-9);assert(Math.abs(f.a)<=B.da*1.000001+1e-9);
 assert(Math.abs(Qs/(A*f.b)/k.EPS0-1)<=half(Qt)/Qt+B.db/f.b+1e-9);
 // Pyrex filling the gap (d = t = 1.5 cm): C = C0[1 + (κ − 1)f], so 1 + b/a = κ
 const sl=session({A,d:.015,t:.015,kap:5.6,f:0},'iso',[0,.25,.5,.75,1],'f',false);
 P=k.fitPoints(sl.map((x)=>x.row),'Cf');f=k.fitLine(P.x,P.y);B=fitBounds(P.x,sl.map((x)=>half(x.st.C)));
 const kb=B.db/Math.abs(f.a)+Math.abs(f.b)*B.da/(f.a*f.a);
 assert(Math.abs(1+f.b/f.a-5.6)<=kb*1.01,`kappa ${1+f.b/f.a} vs 5.6 ± ${kb}`);
 // a non numeric cell drops that row from the fit only
 P=k.fitPoints([...sl.map((x)=>x.row),{...sl[0].row,C:'x'}],'Cf');assert.equal(P.x.length,5);
 console.log(`   from rounded readings: eps0 ${(k.fitLine(...(()=>{const q=k.fitPoints(s.map((x)=>x.row),'Cd');return[q.x,q.y];})()).b/A).toExponential(4)} F/m, kappa ${(1+f.b/f.a).toFixed(4)}`);
});
console.log('Qualitative fringe-field grid is not certified by these ideal-model checks.');
console.log(`${n} capacitors test groups passed`);
