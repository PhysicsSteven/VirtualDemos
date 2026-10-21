'use strict';
// Ising Model core: exact results (Onsager, Yang, Kaufman) against independent computations, the update rules
// (detailed balance, bookkeeping, seeded behavior) and the statistics, and Monte Carlo on a 4 × 4 lattice
// against exact enumeration of all 65 536 states.
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS',name);};
function close(a,b,rel=1e-10,abs=1e-15,what=''){assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+rel*Math.abs(b),`${what} expected ${b}, got ${a}`);}
const R=core('ising','TC,rngFrom,nextU32,makeLattice,totals,recount,fillSpins,ePerSpin,dEflip,metropolisProb,heatBathProb,thresholds,sweepMetropolis,sweepHeatBath,wolffCluster,sweepWolff,wolffPerSweep,ellipKE,onsagerM,onsagerE,onsagerC,kaufmanLnZ,exactFinite,blocking,analyzeRun');

// ---------- independent references ----------
// Onsager's free energy as a double integral: ln Z / N = ln 2 + (1/8π²) ∬ ln[cosh² 2β − sinh 2β (cos a + cos b)] da db.
// The energy is its β derivative, taken inside the integral; the midpoint rule converges fast for a periodic smooth integrand.
function eIntegral(T,n=400){
 const b=1/T,ch=Math.cosh(2*b),sh=Math.sinh(2*b);let s=0;const cs=[];
 for(let i=0;i<n;i++)cs.push(Math.cos((i+0.5)*2*Math.PI/n));
 for(let i=0;i<n;i++)for(let j=0;j<n;j++){const q=cs[i]+cs[j];s+=(4*ch*sh-2*ch*q)/(ch*ch-sh*q);}
 return -0.5*s/(n*n);
}
// row to row transfer matrix for an L × L periodic lattice at h = 0: Z = Tr V^L
function tmLnZ(L,b){
 const n=1<<L,V=new Float64Array(n*n),sp=(c,j)=>((c>>j)&1)?1:-1;
 for(let a=0;a<n;a++){let row=0;for(let j=0;j<L;j++)row+=sp(a,j)*sp(a,(j+1)%L);
  for(let c=0;c<n;c++){let v=0;for(let j=0;j<L;j++)v+=sp(a,j)*sp(c,j);V[a*n+c]=Math.exp(b*(row+v));}}
 const mul=(A,B)=>{const C=new Float64Array(n*n);for(let i=0;i<n;i++)for(let k=0;k<n;k++){const x=A[i*n+k];for(let j=0;j<n;j++)C[i*n+j]+=x*B[k*n+j];}return C;};
 let P=Float64Array.from(V),ls=0;
 for(let k=1;k<L;k++){P=mul(P,V);let mx=0;for(const v of P)mx=Math.max(mx,v);for(let i=0;i<P.length;i++)P[i]/=mx;ls+=Math.log(mx);}
 let tr=0;for(let i=0;i<n;i++)tr+=P[i*n+i];return Math.log(tr)+ls;
}
// exact enumeration of the 4 × 4 periodic lattice: density of states in (bond sum B, magnetization M)
const ENUM=(()=>{const L=4,N=16,g=new Map();
 for(let c=0;c<1<<N;c++){let B=0,M=0;const s=(i)=>((c>>i)&1)?1:-1;
  for(let y=0;y<L;y++)for(let x=0;x<L;x++){const v=s(y*L+x);B+=v*(s(y*L+(x+1)%L)+s(((y+1)%L)*L+x));M+=v;}
  const k=B+','+M;g.set(k,(g.get(k)||0)+1);}
 return [...g].map(([k,n])=>{const [B,M]=k.split(',').map(Number);return {B,M,n};});})();
function exact4(T,J,h){
 // averages per spin: e, e², |m|, m², then c and χ as the demo defines them
 let Z=0,se=0,see=0,sa=0,smm=0,shift=Infinity;const N=16;
 for(const r of ENUM)shift=Math.min(shift,-J*r.B-h*r.M);
 for(const r of ENUM){const E=-J*r.B-h*r.M,w=r.n*Math.exp(-(E-shift)/T),e=E/N,m=r.M/N;Z+=w;se+=w*e;see+=w*e*e;sa+=w*Math.abs(m);smm+=w*m*m;}
 const e=se/Z,a=sa/Z;return {e,c:N*(see/Z-e*e)/(T*T),absm:a,chi:N*(smm/Z-a*a)/T};
}
function runMC(L,T,J,h,method,eq,n,seed,stagger,start){
 const lat=R.makeLattice(L),st=R.rngFrom(seed);R.fillSpins(lat,start||'random',st);
 const tm=R.thresholds(R.metropolisProb(T,J,h)),th=R.thresholds(R.heatBathProb(T,J,h));
 // Wolff: during equilibration measure the mean cluster size, then hold the clusters per sweep fixed, as the demo does
 let nc=1,mean=0;
 const sweep=()=>method==='wolff'?R.sweepWolff(lat,T,J,st,nc):method==='heat'?R.sweepHeatBath(lat,th,st):R.sweepMetropolis(lat,tm,st);
 for(let i=0;i<eq;i++){const f=sweep();if(method==='wolff'){mean=mean?0.9*mean+0.1*f/nc:f/nc;nc=R.wolffPerSweep(mean,lat.N);}}
 const e=new Float64Array(n),q=new Float64Array(n);
 for(let i=0;i<n;i++){sweep();e[i]=R.ePerSpin(lat,J,h);q[i]=(stagger?lat.Ms:lat.M)/lat.N;}
 return {lat,r:R.analyzeRun(e,q,n,lat.N,T,20)};
}

// ---------- exact results ----------
test('ising: T_c = 2/ln(1 + √2) and the self dual point sinh(2/T_c) = 1',()=>{
 close(R.TC,2.269185314213022,1e-15);close(Math.sinh(2/R.TC),1,1e-14);
});
test('ising: elliptic integrals K(k), E(k) against direct quadrature',()=>{
 const q=(f)=>{const n=20000;let s=0;for(let i=0;i<n;i++)s+=f((i+0.5)*Math.PI/2/n);return s*Math.PI/2/n;};
 for(const k of [0,0.2,0.7,0.95,0.999]){const r=R.ellipKE(k);
  close(r.K,q((p)=>1/Math.sqrt(1-k*k*Math.sin(p)**2)),k>0.99?2e-8:1e-11,0,`K(${k})`);
  close(r.E,q((p)=>Math.sqrt(1-k*k*Math.sin(p)**2)),1e-11,0,`E(${k})`);}
});
test('ising: spontaneous magnetization m(T) against the low temperature series and the critical amplitude',()=>{
 // low temperature series (Domb): m = 1 − 2u² − 8u³ − 34u⁴ − 152u⁵ − 714u⁶ − 3472u⁷ − 17318u⁸ − 88048u⁹ ...; tolerance covers the u⁹ term, u = e^(−4/T)
 for(const T of [0.6,0.8,1.0,1.2]){const u=Math.exp(-4/T);
  const ser=1-2*u**2-8*u**3-34*u**4-152*u**5-714*u**6-3472*u**7-17318*u**8;
  close(R.onsagerM(T),ser,0,2e5*u**9+1e-15,`m(${T})`);}
 // near T_c, m → A (1 − T/T_c)^(1/8): sinh(2/T) ≈ 1 + √2 (2/T_c) t gives m⁸ ≈ 4√2 (2/T_c) t, A = (8√2/T_c)^(1/8) = 1.2224
 const A=(t)=>R.onsagerM(R.TC*(1-t))/Math.pow(t,1/8);
 close(A(1e-7),Math.pow(8*Math.SQRT2/R.TC,1/8),1e-6);
 assert.equal(R.onsagerM(R.TC),0);assert.equal(R.onsagerM(3),0);
 console.log('   m(1) =',R.onsagerM(1).toFixed(8),' m(1.5) =',R.onsagerM(1.5).toFixed(6),' m(2) =',R.onsagerM(2).toFixed(6));
});
test('ising: Onsager energy e(T) against the β derivative of the double integral; e(T_c) = −√2',()=>{
 for(const T of [1.0,1.5,2.0,2.2,2.4,3.0,4.0]){close(R.onsagerE(T),eIntegral(T),T>2.1&&T<2.5?2e-6:1e-10,0,`e(${T})`);}
 close(R.onsagerE(R.TC),-Math.SQRT2,1e-14);
 close(R.onsagerE(R.TC*(1-1e-6)),-Math.SQRT2,1e-4);close(R.onsagerE(R.TC*(1+1e-6)),-Math.SQRT2,1e-4);
});
test('ising: Onsager heat capacity c(T) against the temperature derivative of the integral energy',()=>{
 for(const T of [1.0,1.5,2.0,2.6,3.0,4.0]){const d=1e-4;close(R.onsagerC(T),(eIntegral(T+d)-eIntegral(T-d))/(2*d),2e-6,0,`c(${T})`);}
 // logarithmic divergence: c ≈ −(8/π)(1/T_c)² ln|1 − T/T_c| + const, so c rises by (8/π)/T_c² ln 10 per decade
 const slope=(R.onsagerC(R.TC*(1-1e-6))-R.onsagerC(R.TC*(1-1e-5)))/Math.LN10;close(slope,8/Math.PI/(R.TC*R.TC),1e-3);
});
test('ising: Kaufman ln Z of the L × L lattice equals the transfer matrix result, L = 4, 6, 8',()=>{
 let worst=0;
 for(const L of [4,6,8])for(const T of [1.2,2.0,R.TC,2.5,3.5,5]){const a=R.kaufmanLnZ(L,1/T),b=tmLnZ(L,1/T);worst=Math.max(worst,Math.abs(a-b)/Math.abs(b));close(a,b,1e-12);}
 console.log('   worst relative difference',worst.toExponential(1));
});
test('ising: Kaufman e and c for 4 × 4 equal exact enumeration; large L approaches Onsager',()=>{
 for(const T of [1.0,1.8,2.27,3.0,4.5]){const k=R.exactFinite(4,T),x=exact4(T,1,0);close(k.e,x.e,1e-9,0,`e4(${T})`);close(k.c,x.c,1e-6,0,`c4(${T})`);}
 for(const T of [1.5,2.0,3.0]){const k=R.exactFinite(256,T);close(k.e,R.onsagerE(T),1e-8);close(k.c,R.onsagerC(T),1e-5);}
 // finite size rounding: the heat capacity peak of L = 32 is finite, shifted above T_c
 let best=0,tp=0;for(let T=2.2;T<2.4;T+=0.0005){const c=R.exactFinite(32,T).c;if(c>best){best=c;tp=T;}}
 assert(best>1.5&&best<2.5&&tp>R.TC&&tp<2.32,`L=32 peak ${best} at ${tp}`);
 console.log('   L = 32: c peak',best.toFixed(3),'at T =',tp.toFixed(4),' (T_c =',R.TC.toFixed(4)+')');
});

// ---------- update rules ----------
test('ising: detailed balance of the Metropolis and heat bath rules, as probabilities and as 32 bit thresholds',()=>{
 for(const J of [1,-1])for(const T of [0.5,1.3,R.TC,4.7])for(const h of [0,0.37,-1]){
  const pm=R.metropolisProb(T,J,h),tm=R.thresholds(pm),ph=R.heatBathProb(T,J,h),th=R.thresholds(ph);
  for(let k=0;k<5;k++){const S=2*k-4,dE=R.dEflip(1,S,J,h);   // flipping +1 → −1 costs dE; the reverse costs −dE
   // π(+) P(+→−) = π(−) P(−→+)  ⇔  P(+→−)/P(−→+) = exp(−dE/T)
   close(pm[5+k]/pm[k],Math.exp(-dE/T),1e-12);
   // the 32 bit thresholds used in the sweeps differ from the probabilities by less than 2⁻³² (a u32 below the threshold accepts)
   for(const i of [k,5+k])assert(Math.abs(Math.min(tm[i],2**32)/2**32-pm[i])<2**-32,`threshold ${i}`);
   // heat bath: P(up)/P(down) = exp(2(JS + h)/T) = π(+)/π(−) = exp(+dE/T)
   close(ph[k]/(1-ph[k]),Math.exp(dE/T),1e-8);   // 1 − p loses digits when p is near 1
   assert(Math.abs(th[k]/2**32-ph[k])<2**-32);
   assert(pm[k]<=1&&pm[5+k]<=1&&Math.max(pm[k],pm[5+k])===1);
  }}
});
test('ising: energy and magnetization bookkeeping after every update rule equals a full recount',()=>{
 for(const [L,J,h] of [[8,1,0],[16,-1,0],[32,1,0.4],[16,-1,-0.25]]){
  const lat=R.makeLattice(L),st=R.rngFrom(99+L);R.fillSpins(lat,'random',st);
  for(const T of [1.0,2.3,4.0]){
   const tm=R.thresholds(R.metropolisProb(T,J,h)),th=R.thresholds(R.heatBathProb(T,J,h));
   for(let i=0;i<30;i++){
    R.sweepMetropolis(lat,tm,st);R.sweepHeatBath(lat,th,st);if(h===0){R.wolffCluster(lat,T,J,st);R.sweepWolff(lat,T,J,st,3);}
    const t=R.totals(lat);assert.equal(lat.B,t.B);assert.equal(lat.M,t.M);assert.equal(lat.Ms,t.Ms);
   }
   // and the energy formula itself: E = −J Σ s_i s_j − h Σ s_i over the 2N distinct bonds
   let E=0;for(let y=0;y<L;y++)for(let x=0;x<L;x++){const s=lat.s[y*L+x];E+=-J*s*(lat.s[y*L+(x+1)%L]+lat.s[((y+1)%L)*L+x])-h*s;}
   close(R.ePerSpin(lat,J,h),E/lat.N,1e-12);
  }}
});
test('ising: seeded runs are reproducible; T = 1 stays ordered, T = 5 is disordered',()=>{
 const a=runMC(32,2.0,1,0,'metropolis',50,10,7),b=runMC(32,2.0,1,0,'metropolis',50,10,7);
 assert.deepEqual([...a.lat.s],[...b.lat.s]);
 const lat=R.makeLattice(64),st=R.rngFrom(11);R.fillSpins(lat,'up',st);const tm=R.thresholds(R.metropolisProb(1,1,0));
 let minM=1;for(let i=0;i<500;i++){R.sweepMetropolis(lat,tm,st);minM=Math.min(minM,lat.M/lat.N);}
 assert(minM>0.99,`T = 1 dropped to m = ${minM}`);
 const hot=runMC(64,5,1,0,'metropolis',200,1000,12);
 assert(hot.r.absq<0.05,`T = 5: ⟨|m|⟩ = ${hot.r.absq}`);
 console.log('   T = 1, L = 64: min m over 500 sweeps',minM.toFixed(4),'; T = 5: ⟨|m|⟩ =',hot.r.absq.toFixed(4));
});

// ---------- statistics ----------
test('ising: blocking recovers τ_int and the error of the mean for an AR(1) series',()=>{
 const st=R.rngFrom(5),g=()=>{let u=0;while(!u)u=R.nextU32(st)/2**32;return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*R.nextU32(st)/2**32);};
 for(const phi of [0,0.8,0.95]){
  const n=1<<19,x=new Float64Array(n);let v=0;for(let i=0;i<n;i++){v=phi*v+Math.sqrt(1-phi*phi)*g();x[i]=v;}
  const b=R.blocking(x),tau=(1+phi)/(2*(1-phi)),err=Math.sqrt(2*tau/n);
  // the largest error over the levels is slightly conservative: it may overestimate, by noise at the deep levels, but should not underestimate
  assert(b.err/err>0.95&&b.err/err<1.2,`φ=${phi}: err ${b.err} vs ${err}`);assert(b.tau/tau>0.9&&b.tau/tau<1.45,`φ=${phi}: τ ${b.tau} vs ${tau}`);
  console.log(`   φ = ${phi}: τ_int ${b.tau.toFixed(2)} (exact ${tau.toFixed(2)}), error ${b.err.toExponential(2)} (exact ${err.toExponential(2)})`);
 }
});

// ---------- Monte Carlo against exact results ----------
test('ising: 4 × 4 Monte Carlo ⟨e⟩, c, ⟨|m|⟩, χ agree with exact enumeration within the stated errors',()=>{
 let worst=0;
 const cases=[['metropolis',1,0],['heat',1,0],['wolff',1,0],['metropolis',-1,0],['wolff',-1,0],['metropolis',1,0.3],['heat',-1,0.5]];
 // with h ≠ 0 at T = 1.5 the reversed state is metastable: a run may never visit it in 2×10⁵ sweeps, and no error analysis
 // can see weight it never samples, so the field cases start at T = 2.27
 let ncmp=0;
 for(const [m,J,h] of cases)for(const T of [1.5,2.27,3.2]){
  if(h!==0&&T<2)continue;
  const {r}=runMC(4,T,J,h,m,2000,200000,1000+Math.round(T*100),J<0&&h===0);
  // with J = −1 and h = 0 the staggered magnetization of the antiferromagnet equals m of the ferromagnet
  const x=J<0&&h===0?exact4(T,1,0):exact4(T,J,h),xe=exact4(T,J,h).e;
  for(const [k,ek,want] of [['e','eErr',xe],['c','cErr',x.c],['absq','absqErr',J<0&&h!==0?null:x.absm],['chi','chiErr',J<0&&h!==0?null:x.chi]]){
   if(want===null)continue;
   const z=Math.abs(r[k]-want)/r[ek];worst=Math.max(worst,z);ncmp++;
   assert(z<4,`${m} J=${J} h=${h} T=${T} ${k}: MC ${r[k]} ± ${r[ek]}, exact ${want} (${z.toFixed(1)}σ)`);
  }
 }
 console.log('   worst deviation',worst.toFixed(2),'standard errors over',ncmp,'comparisons');
});
test('ising: L = 64 Wolff at T = 2 matches Kaufman e and c and Onsager m; Metropolis agrees',()=>{
 const T=2,ex=R.exactFinite(64,T);
 for(const m of ['wolff','metropolis']){
  // start ordered: from a random start, domains on 64 × 64 take of order 1000 sweeps to coarsen away
  const {r}=runMC(64,T,1,0,m,500,m==='wolff'?20000:40000,77,false,'up');
  const z=[(r.e-ex.e)/r.eErr,(r.c-ex.c)/r.cErr,(r.absq-R.onsagerM(T))/r.absqErr];
  // at T = 2 the correlation length is about 1 lattice spacing, so finite size effects in m are far below the errors
  assert(z.every((v)=>Math.abs(v)<4),`${m}: z = ${z.map((v)=>v.toFixed(2))}`);
  console.log(`   ${m}: e ${r.e.toFixed(5)} ± ${r.eErr.toFixed(5)} (exact ${ex.e.toFixed(5)}), c ${r.c.toFixed(3)} ± ${r.cErr.toFixed(3)} (exact ${ex.c.toFixed(3)}), ⟨|m|⟩ ${r.absq.toFixed(5)} ± ${r.absqErr.toFixed(5)} (Onsager ${R.onsagerM(T).toFixed(5)}), τ ${r.tau.toFixed(1)}`);
 }
});
test('ising: at T_c, L = 32 Wolff matches the exact Kaufman e and c of that lattice',()=>{
 const ex=R.exactFinite(32,R.TC),{r}=runMC(32,R.TC,1,0,'wolff',1000,40000,321,false,'up');
 const z=[(r.e-ex.e)/r.eErr,(r.c-ex.c)/r.cErr];
 assert(z.every((v)=>Math.abs(v)<4)&&r.reliable,`z = ${z}`);
 console.log(`   e ${r.e.toFixed(5)} ± ${r.eErr.toFixed(5)} (exact ${ex.e.toFixed(5)}), c ${r.c.toFixed(3)} ± ${r.cErr.toFixed(3)} (exact ${ex.c.toFixed(3)}), τ ${r.tau.toFixed(1)} sweeps`);
});
console.log(`\n${count} test groups passed`);
