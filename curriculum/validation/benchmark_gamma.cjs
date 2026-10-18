'use strict';
// Read-only seeded transport benchmark; writes JSON to stdout. No fitted detector parameters.
const {core,readDemo}=require('./demo_source.cjs'),crypto=require('node:crypto');
const g=core('gamma-spectroscopy','GSCORE').GSCORE(),N=+(process.env.GAMMA_HISTORIES||200000);
function totalReference(E,R,H,d){
 // Independent angular midpoint quadrature of probability of first interaction.
 const c0=d/Math.hypot(d,R),mu=g.muNaI(E),n=100000;let sum=0;
 for(let i=0;i<n;i++){const c=c0+(1-c0)*(i+.5)/n,s=Math.sqrt(1-c*c),r=d*s/c;const chord=Math.min(H/c,s?Math.max(0,(R-r)/s):Infinity);sum+=-Math.expm1(-mu*chord);}
 return sum/n;
}
const runs=[];let seed=1732026;
for(const size of ['s2','s3'])for(const E of [320,661.657,1173.228,1332.492])for(const d of [10,25]){
 const {R,H}=g.SIZES[size],s=seed++,r=g.respLine(E,R,H,d,N,g.mulberry(s)),ratio=r.peak/r.inter,geo=g.omegaFrac(d,R);
 runs.push({size,E_keV:E,d_cm:d,N,seed:s,interaction:r.inter,peak:r.peak,peak_to_total:ratio,pt_se:Math.sqrt(ratio*(1-ratio)/(N*r.inter)),geometry:geo,total_absolute:geo*r.inter,peak_absolute:geo*r.peak,first_interaction_quadrature:totalReference(E,R,H,d)});
 console.error('done',size,E,d);
}
// Heath Appendix III Table I: use unambiguous 10 cm integration rows only.
// Omit the printed Co-60 energy (1.382 MeV), which needs source clarification.
const heath=[];
for(const [E,measured] of [[323,.820],[478,.668],[661.6,.536],[766,.500],[835,.474],[1114,.395],[1780,.290],[1837,.280]]){
 const {R,H}=g.SIZES.s3,s=seed++,r=g.respLine(E,R,H,10,N,g.mulberry(s)),pt=r.peak/r.inter;
 heath.push({E_keV:E,measured,N,seed:s,simulated:pt,mc_se:Math.sqrt(pt*(1-pt)/(N*r.inter)),relative_difference:pt/measured-1});
}
const distance=[];
for(const d of [2,5,10,20,40,80,160]){
 const {R,H}=g.SIZES.s3,s=seed++,r=g.respLine(661.657,R,H,d,N,g.mulberry(s)),geo=g.omegaFrac(d,R);
 distance.push({d_cm:d,N,seed:s,geometry:geo,far_geometry:R*R/(4*d*d),total_absolute:geo*r.inter,peak_absolute:geo*r.peak,peak:r.peak,interaction:r.inter,first_interaction_quadrature:totalReference(661.657,R,H,d)});
 console.error('distance',d);
}
console.log(JSON.stringify({source_sha256:crypto.createHash('sha256').update(readDemo('gamma-spectroscopy')).digest('hex'),runtime:process.version,N,definitions:'Intrinsic fractions conditional on photons entering face; monoenergetic, bare crystal; deposited energy, no threshold/window/background/electronics. P/T=full deposit/interacting histories.',runs,heath,distance},null,2));
