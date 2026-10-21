'use strict';
// Gamma spectroscopy core: decay data against ENSDF, attenuation coefficients against NIST tables and the ORTEC manual,
// the 38 mm × 38 mm crystal, the 2048 channel MCA mapping, and activity against a reference standard (ORTEC Exp. 3.5).
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS',name);};
function close(a,b,rel=1e-10,abs=1e-15){assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+rel*Math.abs(b),`expected ${b}, got ${a}`);}
const C=core('gamma-spectroscopy','GSCORE').GSCORE();

// ENSDF via NNDC, retrieved 2026-10-21 (keV, photons per 100 decays)
const ENSDF={
 cd109:{ref:'Kumar, Chen, Kondev, NDS 137, 1 (2016); Ag K x-rays from NuDat 3',lines:[[21.990,29.8],[22.163,56.1],[24.912,4.80],[24.943,9.3],[25.455,2.31],[88.0336,3.644]]},
 co57:{ref:'Bhat, NDS 85, 415 (1998)',lines:[[14.4129,9.16],[122.06065,85.60],[136.47356,10.68]]},
 zn65:{ref:'Chen, NDS 202, 59 (2025)',lines:[[511.0,2.842],[1115.539,50.12]]},
 cs137:{ref:'Browne, Tuli, NDS 108, 2173 (2007)',lines:[[661.657,85.10]]},
 co60:{ref:'Browne, Tuli, NDS 114, 1849 (2013)',lines:[[1173.228,99.85],[1332.492,99.9826]]},
 na22:{ref:'Basunia, NDS 127, 69 (2015)',lines:[[511.0,2*(89.90+0.055)],[1274.537,99.940]]},
 mn54:{ref:'Dong, Huo, NDS 121, 1 (2014)',lines:[[834.848,99.976]]},
 ba133:{ref:'Khazov, Rodionov, Kondev, NDS 112, 855 (2011)',lines:[[53.1622,2.14],[79.6142,2.65],[80.9979,32.9],[160.612,0.638],[223.2368,0.453],[276.3989,7.16],[302.8508,18.34],[356.0129,62.05],[383.8485,8.94]]},
};
test('gamma: decay lines and intensities match ENSDF',()=>{
 for(const [id,{lines}] of Object.entries(ENSDF)){
  const got=C.SRC[id].lines;
  for(const [E,I] of lines){const g=got.find((l)=>Math.abs(l[0]-E)<1e-6);assert(g,`${id} ${E} keV missing`);close(100*g[1],I,0.0015,1e-9);}
 }
 assert.equal(C.SRC.cd109.half,'461.9 d');assert.equal(C.SRC.co57.half,'271.74 d');assert.equal(C.SRC.zn65.half,'243.93 d');
});
test('gamma: intensity sums are physical',()=>{
 const sum=(id,f)=>C.SRC[id].lines.filter(f).reduce((s,l)=>s+l[1],0);
 close(sum('cd109',([E])=>E<30),1.0231,1e-9);                       // Ag K x-rays per decay (81% K capture plus K conversion of the 88 keV E3)
 assert(sum('co57',([E])=>E>100)<=0.998);                            // both lines leave the 136.5 keV level (fed in 99.8% of decays)
 close(C.SRC.zn65.lines[0][1],2*0.01421,0.001);                      // two annihilation photons per β+ (1.421 per 100 decays)
 close(C.SRC.na22.lines[0][1],2*C.SRC.na22.fb,1e-12);
 for(const s of Object.values(C.SRC))for(const [,I] of s.lines)assert(I>0&&I<2);
});
test('gamma: mixed source and kit activities',()=>{
 const m=C.mixSource([['cs137',0.5*C.UCI],['zn65',1*C.UCI]]);
 close(m.A,1.5*C.UCI);
 // photons per second of each line equal the component's activity times its intensity
 close(m.A*m.lines.find((l)=>l[0]===661.657)[1],0.5*C.UCI*0.851,1e-12);
 close(m.A*m.lines.find((l)=>l[0]===1115.539)[1],1*C.UCI*0.5012,1e-12);
 assert.equal(C.KIT.csref.parts[0][1],5);assert.equal(C.KIT.csref.cert,0.05);assert.equal(C.KIT.co57h.parts[0][1],20);
 assert.equal(JSON.stringify(C.KIT.cszn.parts),JSON.stringify([['cs137',0.5],['zn65',1]]));
});

// Hubbell & Seltzer (NIST SRD 126) nodes, cm²/g, and the ORTEC manual's Table 3.4 values at 122 keV
test('gamma: Mo, Sn, Ta coefficients at table energies and edges (Hubbell and Seltzer)',()=>{
 for(const [m,E,v] of [['mo',100,1.096],['mo',600,0.07851],['mo',30,28.10],['sn',100,1.676],['sn',661.657*0+600,0.08113],['sn',40,19.42],['ta',100,4.302],['ta',150,1.531],['ta',1000,0.06567]])close(C.muMass(m,E),v,1e-9);
 close(C.muMass('ta',67.4164+1e-9),11.80,1e-6);close(C.muMass('ta',67.4164-1e-6),2.652,1e-4);   // K edge
 close(C.muMass('sn',29.2001+1e-9),43.60,1e-6);close(C.muMass('mo',19.9995+1e-9),80.55,1e-4);
});
test('gamma: log–log interpolation reproduces the ORTEC Table 3.4 values at 122 keV',()=>{
 for(const [m,v] of [['mo',0.685],['sn',1.020],['ta',2.592]])close(C.muMass(m,122),v,0.001);
 // log–log between the 100 and 150 keV nodes, by hand
 const ll=(y0,y1)=>Math.exp(Math.log(y0)+(Math.log(y1)-Math.log(y0))*Math.log(1.22)/Math.log(1.5));
 close(C.muMass('ta',122),ll(4.302,1.531),1e-12);
 // the XCOM fine grid values for the elements already in the demo (manual: 0.154, 0.272, 0.321, 3.376)
 for(const [m,v] of [['al',0.1522],['fe',0.2633],['cu',0.3113],['pb',3.3656]])close(C.muMass(m,122),v,0.001);
 // XCOM nodes
 for(const [m,E,v] of [['pb',600,0.1248],['al',600,0.07802],['cu',600,0.07625],['fe',600,0.07704]])close(C.muMass(m,E),v,1e-9);
});
test('gamma: foil sets and RAS20 lead thicknesses',()=>{
 for(const [m,mils] of [['al',30],['fe',5],['cu',10],['mo',3],['sn',4],['ta',5]])close(C.foilCm(m),mils*0.00254,1e-12);
 close(C.RAS20_PB[0],0.039*2.54*11.35*1000,1e-12);assert.equal(JSON.stringify(C.RAS20_PB.slice(1)),'[2066,3448,7367]');
 // transmission of 4 Ta foils at 122.06 keV
 const t=4*C.foilCm('ta');close(Math.exp(-C.muLin('ta',122.06065)*t),Math.exp(-C.muMass('ta',122.06065)*16.654*t),1e-12);
});
test('gamma: K x-rays from a foil (thin limit and edge)',()=>{
 assert.equal(C.foilXrays('ta',0.01,60,0.1),0);assert.equal(C.foilXrays('al',0.1,662,0.1),0);
 const t=1e-7,E=122,K=C.KSH.ta,y=C.foilXrays('ta',t,E,0.1);
 close(y,0.5*K.w*C.photoMass('ta',E)*(1-1/K.J)*16.654*0.1*t,1e-5);
 close(K.lines.reduce((s,l)=>s+l[1],0),1,1e-12);
});

// crystal geometry
test('gamma: 38 mm × 38 mm crystal geometry and first interaction probability',()=>{
 const s=C.SIZES.s15;close(s.R,1.9);close(s.H,3.8);close(s.vol,Math.pow(3.8/5.08,3));
 for(const d of [2,10,25])close(C.omegaFrac(d,1.9),0.5*(1-d/Math.hypot(d,1.9)),1e-14);
 const N=100000;
 for(const [E,d] of [[122.06065,10],[661.657,10],[1332.492,4]]){
  const r=C.respLine(E,s.R,s.H,d,N,C.mulberry(4242)),mu=C.muNaI(E),c0=d/Math.hypot(d,s.R),n=40000;let q=0;
  for(let i=0;i<n;i++){const c=c0+(1-c0)*(i+.5)/n,sn=Math.sqrt(1-c*c),rr=d*sn/c;q+=-Math.expm1(-mu*Math.min(s.H/c,sn?Math.max(0,(s.R-rr)/sn):Infinity));}
  q/=n;const se=Math.sqrt(q*(1-q)/N);assert(Math.abs(r.inter-q)<4*se+1e-4,`E ${E}: MC ${r.inter} vs quadrature ${q}`);
  assert(r.peak<r.inter);
 }
});

// MCA mapping
test('gamma: 2048 channel mapping at the ORTEC Exp. 3.1 gain',()=>{
 const e={N:2048,hv:900,coarse:10,fine:1.39,res:0.07,lld:0,uld:100,noise:false};
 const kg=C.chanGain(e),c0=C.chanOffset(e);
 close(kg,2048/10*2.5e-4*13.9,1e-12);close(c0,0.018/10*2048,1e-12);
 close(kg*661.657+c0,474.57,1e-4);                                  // manual: channel 238 of 1024
 close((2048-c0)/kg,2872.5,1e-3);                                    // full scale energy, keV
 assert(kg*2505.72+c0<2048);                                         // the ⁶⁰Co sum peak stays on scale
 const dep=new Float64Array(C.NB);dep[Math.floor(661.657/C.BW)]=1;const ch=C.channelRates(dep,e);
 let s0=0,s1=0;for(let j=0;j<ch.length;j++){s0+=ch[j];s1+=ch[j]*(j+0.5);}
 close(s0,1,1e-6);close(s1/s0,kg*(Math.floor(661.657/C.BW)+0.5)*C.BW+c0,1e-5);
 const e1={...e,N:1024};close(C.chanGain(e1)*661.657+C.chanOffset(e1),474.57/2,1e-4);
});

// ORTEC Exp. 3.5: activity against the standard, using the demo's own transport, electronics and ROI method
function spectrum(id,factor,d,seed){
 const cache=spectrum.cache||(spectrum.cache=new Map());
 const parts=C.KIT[id].parts.map(([n,a])=>[n,a*C.UCI*factor]),so=C.mixSource(parts),sz=C.SIZES.s15;
 const cfg={src:id,srcObj:so,size:'s15',d,A:so.A,mat:'none',t:0,bg:true,back:'pb'};
 const items=C.needed(cfg).filter((it)=>!cache.has(it.key));for(const o of C.computeJob({R:sz.R,H:sz.H,seed,items}))cache.set(o.key,o);
 return C.channelRates(C.depositRates(cfg,(k)=>cache.get(k)||null,new Map()),{N:2048,hv:900,coarse:10,fine:1.39,res:0.07,lld:1,uld:100});
}
test('gamma: activity against the 5 µCi standard recovers the true activity',()=>{
 const f=0.87,rs=spectrum('csref',1,4,11),ru=spectrum('cs137',f,4,11),a=Math.round(0.71168*600+3.19),b=Math.round(0.71168*728+3.19);
 // expected counts (no noise): the ratio of net rates is the ratio of activities, apart from the small room background left under the line
 const T=1000,ns=C.roiStats(Array.from(rs,(v)=>v*T),a,b).net,nu=C.roiStats(Array.from(ru,(v)=>v*T),a,b).net;
 close(C.activityRatio(nu/T,0,ns/T,0,5,0.05).A,f,0.005);
 // Poisson counts for 60 s live each, several seeds: within 3.5 σ (counting) of the truth
 const rnd=C.mulberry(77);
 for(let k=0;k<5;k++){
  const cnt=(r)=>{const s={counts:new Float64Array(2048),live:0,real:0,total:0};let n=0;for(const v of r)n+=v;C.acquire(s,r,n,60*(1+n*C.TAU),rnd,60);return s;};
  const S=cnt(rs),U=cnt(ru),st=C.roiStats(S.counts,a,b),ut=C.roiStats(U.counts,a,b);
  const r=C.activityRatio(ut.net/U.live,ut.snet/U.live,st.net/S.live,st.snet/S.live,5,0.05);
  assert(Math.abs(r.A-f)<3.5*r.stat,`run ${k}: ${r.A} ± ${r.stat} vs ${f}`);close(r.cert,0.05*r.A,1e-12);close(r.err,Math.hypot(r.stat,r.cert),1e-12);
 }
});
console.log(`${count} gamma test groups passed`);
