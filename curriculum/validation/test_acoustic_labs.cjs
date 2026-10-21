'use strict';
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
let n=0;const test=(name,fn)=>{fn();n++;console.log('PASS',name);};
const close=(a,b,r=1e-9,abs=1e-14)=>assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+r*Math.abs(b),`expected ${b}, got ${a}`);
const t=core('timbre','idealSeries,idealWave,seriesAt,fourier,periodInfo,rmsOf,partialFreq,toDb,modeShape');
test('timbre: independent Fourier quadrature and Parseval rms including phase',()=>{
 for(const kind of ['saw','square','triangle']){
  const s=t.idealSeries(kind,16),num=t.fourier(x=>t.idealWave(kind,x),16,32768);
  for(let j=1;j<=16;j++)close(num.a[j],s.a[j],2e-6,1e-10);
  const ph=s.ph.map((v,i)=>v+i*.37);let sum=0;const M=8192;for(let i=0;i<M;i++){const y=t.seriesAt(2*Math.PI*(i+.5)/M,s.a,ph);sum+=y*y/M;}
  close(Math.sqrt(sum),t.rmsOf(s.a));
 }
});
test('timbre: missing fundamental, harmonic gcd, detuning and stiffness invariants',()=>{
 close(t.periodInfo([2,3,4,5],220,0,3,0).T,1/220);close(t.periodInfo([2,4,6,8],220,0,3,0).T,1/440);
 close(t.partialFreq(3,220,0,3,1.5),661.5);close(t.periodInfo([1,2,3],220,0,3,1.5).Tshape,2/3);
 for(const B of [0,.005,.01,.02]){close(t.partialFreq(1,220,B,3,0),220);for(const j of [3,5])close(t.partialFreq(j,220,B,0,0),j*220*Math.sqrt((1+B*j*j)/(1+B)));}
 close(t.toDb(1/3),20*Math.log10(1/3));assert.equal(t.modeShape('closed',2,.5),null);
});
const r=core('resonators','soundSpeed,tubeResonances,tubeFit,spacingSpeeds,tubeResponse,tubeX,pipeFreq,pipeShape,pluckCoeffs,stringF1,neckLeff,helmholtzF,readingScatter');
test('resonance tube: multi-frequency speed/end correction fit and skipped-order spacing',()=>{
 const c=331.3*Math.sqrt(293.15/273.15),a=.016,rows=[];close(r.soundSpeed(20),c);
 for(const f of [512,640])for(const p of r.tubeResonances(f,c,a,.98)){close(p.L,(2*p.k-1)*c/(4*f)-.6133*a);rows.push({f,k:p.k,L:p.L});}
 const fit=r.tubeFit(rows);close(fit.c,c);close(fit.dL,.6133*a);
 for(const speed of r.spacingSpeeds(rows.filter(x=>x.k!==2)))close(speed,c);
 close(r.soundSpeed(30)/r.soundSpeed(20),Math.sqrt(303.15/293.15));
});
test('resonators: boundary families, pluck zeros, string and Helmholtz scaling',()=>{
 const c=r.soundSpeed(20);for(const k of [1,2,3]){
  close(r.pipeFreq('open',k,.6,.015,c),k*c/(2*(.6+2*.6133*.015)));
  close(r.pipeFreq('closed',k,.6,.015,c),(2*k-1)*c/(4*(.6+.6133*.015)));
 }
 for(const p of [.5,1/3]){const b=r.pluckCoeffs(p,0,16);for(let k=1;k<=16;k++)if(Math.abs(Math.sin(k*Math.PI*p))<1e-12)close(b[k],0);}
 close(r.stringF1(.648,72.6,.000398),Math.sqrt(72.6/.000398)/(2*.648));
 const le=r.neckLeff(.08,.0095),A=Math.PI*.0095**2,f=r.helmholtzF(c,A,.00075,le);close(r.helmholtzF(c,A,.00075/4,le),2*f);
 for(let i=0;i<30;i++){assert.equal(r.readingScatter(2718,i),r.readingScatter(2718,i));assert(Math.abs(r.readingScatter(2718,i))<=.0045);}
});
test('resonance tube: finite-Q maximum differs from lossless quarter-wave point',()=>{
 const c=r.soundSpeed(20),f=512,a=.016,L0=c/(4*f)-.6133*a,Q=10,h=1e-6;
 // derivative of cos²(z)+sinh²(z/2Q) at z=pi/2 is positive: amplitude maximum is slightly earlier.
 assert(r.tubeResponse(L0-h,f,c,a,Q)>r.tubeResponse(L0+h,f,c,a,Q));
});
const l=core('acoustic-levitation','C0,K0,LAMBDA,RHO0,OMEGA,G_N,bowl,kAxis,phaseShift,fieldAt,gorkovK,beadWeight,planeF0,beadDrag,axisTraps');
test('levitation: independent source-field gradient and coherent amplitude superposition',()=>{
 const src=[{x:0,y:0,z:-.06,nx:0,ny:0,nz:1,A:1,ph:.3}],p=[.004,.002,.001],h=1e-7,v=l.fieldAt(src,...p,{exact:true});
 for(let j=0;j<3;j++){const lo=p.slice(),hi=p.slice();lo[j]-=h;hi[j]+=h;const a=l.fieldAt(src,...lo,{exact:true}),b=l.fieldAt(src,...hi,{exact:true});for(let c=0;c<2;c++)close(v[2+2*j+c],(b[c]-a[c])/(2*h),2e-7,1e-7);}
 const doubled=l.fieldAt([...src,...src],...p,{exact:true});v.forEach((x,i)=>close(doubled[i],2*x));
});
test('levitation: plane-wave force from potential, radius cancellation and drive squared',()=>{
 for(const a of [.0002,.0003,.0005]){
  const k=l.gorkovK(a,998,2.19e9),p0=1000,z=.0005,h=1e-8;
  const U=z=>k.K1*p0*p0*Math.cos(l.K0*z)**2-k.K2*(l.K0*p0)**2*Math.sin(l.K0*z)**2;
  close(-(U(z+h)-U(z-h))/(2*h),l.planeF0(a,p0,k.Phi)*Math.sin(2*l.K0*z),2e-8,1e-15);
  const ratio=l.planeF0(a,p0,k.Phi)/l.beadWeight(a,998),ref=l.planeF0(.0003,p0,k.Phi)/l.beadWeight(.0003,998);close(ratio,ref);
  close(l.planeF0(a,2*p0,k.Phi),4*l.planeF0(a,p0,k.Phi));
 }
});
test('levitation: bowl phase gradient/spacing, gravitational trap and drag sign',()=>{
 const source=l.bowl(-1),weightedCos=(6*Math.cos(10.5*Math.PI/180)+12*Math.cos(21*Math.PI/180)+18*Math.cos(31.5*Math.PI/180))/36;
 close(l.kAxis(source,0),l.K0*weightedCos,2e-6);close(l.phaseShift(2*Math.PI,l.K0),l.LAMBDA/2);
 const zs=Array.from({length:401},(_,i)=>(i-200)*1e-5),K=.02,W=1e-6,U=zs.map(z=>K*z*z/2+W*z),tr=l.axisTraps(zs,U);assert.equal(tr.length,1);close(tr[0].z,-W/K,1e-7,1e-12);assert(tr[0].stiff>0);
 for(const v of [-1,-.01,.01,1])assert(l.beadDrag(v,.0003)*v<0);
});
const g=core('acoustic-levitation','LAMBDA,bowl,fieldAt,gridAxis,gridJob,mirrorZ,pressureAt,K0');
test('levitation: 3D grid samples equal the source sum, mirrored top bowl, and λ/2 nodes on the grid axis',()=>{
 const B=g.bowl(-1),T=g.bowl(1),xs=g.gridAxis(-.032,.032,1e-3),zs=g.gridAxis(-.004,.004,1e-3),job=g.gridJob(B,xs,xs,zs,8);while(!job.step(700));
 const Tm=g.mirrorZ(job.out,xs.length,xs.length,zs.length,8);
 for(let t=0;t<300;t++){const i=(t*37)%xs.length,j=(t*53+11)%xs.length,k=t%zs.length,n=(k*xs.length+j)*xs.length+i;
  const fb=g.fieldAt(B,xs[i],xs[j],zs[k]),ft=g.fieldAt(T,xs[i],xs[j],zs[k]);
  for(let c=0;c<8;c++){const sc=c<2?1:100;close(job.out[8*n+c],fb[c],2e-7,1e-6*sc);close(Tm[8*n+c],ft[c],2e-7,1e-6*sc);}}
 const S2=[{x:0,y:0,z:-10,nx:0,ny:0,nz:1,A:1,ph:0},{x:0,y:0,z:10,nx:0,ny:0,nz:-1,A:1,ph:0}],ax=g.gridAxis(-.002,.002,1e-3),az=g.gridAxis(-.02,.02,2.5e-5),j2=g.gridJob(S2,ax,ax,az,2);j2.step(1e9);
 const a=Array.from(az,(_,k)=>{const n=(k*ax.length+2)*ax.length+2;return j2.out[2*n]**2+j2.out[2*n+1]**2;}),nd=[];
 for(let k=1;k<az.length-1;k++)if(a[k]<a[k-1]&&a[k]<=a[k+1])nd.push(az[k]+.5*(a[k-1]-a[k+1])/(a[k-1]-2*a[k]+a[k+1])*(az[1]-az[0]));
 assert.equal(nd.length,10);for(let i=1;i<nd.length;i++)close(nd[i]-nd[i-1],g.LAMBDA/2,0,5e-7);
 close(g.pressureAt(Math.cos(.7),Math.sin(.7),.7),1);
});
console.log(`Completed ${n} acoustics lab groups. Sound hardware, perception, real force calibration and browser controls are not certified.`);
