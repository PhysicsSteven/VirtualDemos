'use strict';
// Electromagnetic Waves core, In a plane view: the 2D Yee (FDTD) solver for currents along z (TM) and, by duality, TE.
// Checks: energy kept in a closed metal box, Ez = 0 in metal, a pulse front arriving at d/c, the absorbing border,
// the 1/r fall of ⟨E²⟩ from one wire (energy through circles), and two wires in phase giving four times one wire broadside.
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS',name);};
const R=core('em-waves','FD_S,FD_NL,FD_NT,FD_PAD,FD_SLOW,fdLoss,fdtdMake,fdRamp,fdtdStep,fdtdE2,fdtdEnergy');

test('constants: Courant 1/2, 20 cells per wavelength, 40 steps per period, the grid speed error',()=>{
 assert.equal(R.FD_S,0.5);assert.equal(R.FD_NL,20);assert.equal(R.FD_NT,R.FD_NL/R.FD_S);
 assert(R.FD_S<1/Math.SQRT2);
 // dispersion relation along an axis: sin(ωΔt/2) = S sin(kΔx/2)
 const w=2*Math.PI/R.FD_NT,k=2*Math.asin(Math.sin(w/2)/R.FD_S);
 assert(Math.abs(R.FD_SLOW-(1-(2*Math.PI/R.FD_NL)/k))<1e-15);assert(R.FD_SLOW>0.0030&&R.FD_SLOW<0.0032);
 assert.equal(R.fdRamp(0),0);assert.equal(R.fdRamp(2*R.FD_NT),1);assert(Math.abs(R.fdRamp(R.FD_NT)-0.5)<1e-15);
});

test('closed metal box, no border: the field energy stays the same (within the leapfrog wobble)',()=>{
 const n=64,F=R.fdtdMake(n,n,0);
 for(let j=0;j<n;j++)for(let i=0;i<n;i++){const k=j*n+i;if(i<2||j<2||i>n-3||j>n-3)F.metal[k]=1;else F.Ez[k]=Math.exp(-((i-30)**2+(j-34)**2)/12);}
 const u0=R.fdtdEnergy(F);let lo=Infinity,hi=0;
 for(let s=0;s<3000;s++){R.fdtdStep(F);if(s>20){const u=R.fdtdEnergy(F);lo=Math.min(lo,u);hi=Math.max(hi,u);}}
 assert(hi/u0<1.1&&lo/u0>0.9,`energy ${lo/u0} to ${hi/u0}`);
 assert((hi-lo)/u0<0.1);
});

test('Ez is exactly zero in metal, and a closed box keeps an outside wave out exactly',()=>{
 const nx=120,ny=80,F=R.fdtdMake(nx,ny,20);
 for(let j=30;j<=50;j++)for(let i=70;i<=90;i++)if(j<32||j>48||i<72||i>88)F.metal[j*nx+i]=1;
 const src=[{k:40*nx+40,a:20}];
 for(let s=0;s<600;s++)R.fdtdStep(F,src);
 let inside=0,outside=0;
 for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){const k=j*nx+i,e=Math.abs(F.Ez[k]);if(F.metal[k])assert.equal(F.Ez[k],0);else if(i>72&&i<88&&j>32&&j<48)inside=Math.max(inside,e);else if(i>25&&i<60)outside=Math.max(outside,e);}
 assert.equal(inside,0);assert(outside>0.1);
});

test('a pulse travels at c: its peak moves from 2 λ to 5 λ in 3 λ/c (to within 1 %)',()=>{
 const n=300,F=R.fdtdMake(n,n,30),c=150,L=R.FD_NL,peak={},best={};
 for(let s=1;s<=520;s++){
  R.fdtdStep(F);if(s<160)F.Ez[c*n+c]+=Math.exp(-(((s-60)/12)**2));   /* a smooth pulse, about a wavelength long */
  for(const m of [2,5]){const v=Math.abs(F.Ez[c*n+c+m*L]);if(!(v<=best[m])){best[m]=v;peak[m]=s;}}
 }
 const steps=peak[5]-peak[2],ideal=3*L/R.FD_S;   // 120 steps
 assert(Math.abs(steps/ideal-1)<0.01,`peak moved in ${steps} steps, 3 λ/c = ${ideal}`);
});

test('the absorbing border takes up an outgoing pulse (under 1e-5 of the energy left)',()=>{
 const pad=R.FD_PAD,nx=200+2*pad,ny=120+2*pad,F=R.fdtdMake(nx,ny,pad);
 for(let j=0;j<ny;j++)for(let i=0;i<nx;i++)F.Ez[j*nx+i]=Math.exp(-((i-nx/2)**2+(j-ny/2)**2)/18);
 const u0=R.fdtdEnergy(F);for(let s=0;s<1500;s++)R.fdtdStep(F);
 assert(R.fdtdEnergy(F)/u0<1e-5);
 assert.equal(R.fdLoss(0,pad),0);assert(R.fdLoss(pad,pad)>R.fdLoss(pad/2,pad));
});

function avgE2(F,srcs,steps){
 for(let s=0;s<steps;s++)R.fdtdStep(F,srcs);
 const a=new Float64Array(F.Ez.length);
 for(let s=0;s<R.FD_NT;s++){R.fdtdStep(F,srcs);for(let k=0;k<a.length;k++)a[k]+=F.Ez[k]**2/R.FD_NT;}
 return a;
}
test('one wire: r⟨E²⟩ is the same from 1 λ to 4 λ (energy spreads over circles), within 3 %',()=>{
 const pad=R.FD_PAD,nx=200+2*pad,ny=120+2*pad,F=R.fdtdMake(nx,ny,pad),cy=ny/2,cx=nx/2,k0=cy*nx+cx;
 const a=avgE2(F,[{k:k0,a:20}],700),L=R.FD_NL;
 const re=[1,2,3,4].map((m)=>m*a[k0+m*L]),mean=re.reduce((p,q)=>p+q)/re.length;
 for(const v of re)assert(Math.abs(v/mean-1)<0.03,`r<E2> ${re}`);
 // a wire of strength 20 gives an E amplitude of about 1 at 1 λ (the picture's color scale)
 assert(Math.abs(Math.sqrt(2*a[k0+L])-1)<0.05);
});

test('two wires in phase, 1.5 λ apart: broadside ⟨E²⟩ about four times one wire; opposite phase cancels there',()=>{
 const pad=R.FD_PAD,nx=200+2*pad,ny=120+2*pad,L=R.FD_NL,cy=ny/2,cx=nx/2-40;
 const run=(srcs)=>avgE2(R.fdtdMake(nx,ny,pad),srcs,700);
 const k1=(cy-15)*nx+cx,k2=(cy+15)*nx+cx,probe=cy*nx+cx+4*L;
 const one=run([{k:k1,a:20}])[probe],two=run([{k:k1,a:20},{k:k2,a:20}])[probe],anti=run([{k:k1,a:20},{k:k2,a:20,ph:Math.PI}])[probe];
 assert(Math.abs(two/one-4)<0.4,`ratio ${two/one}`);
 assert(anti/one<0.02,`opposite phase ${anti/one}`);
});
test('TE by duality: with no metal a TE grid runs the very same numbers as a TM grid (η₀Hz = Ez of TM)',()=>{
 const n=80,A=R.fdtdMake(n,n,20),B=R.fdtdMake(n,n,20,true),src=[{k:40*n+40,a:20}];
 for(let s=0;s<200;s++){R.fdtdStep(A,src);R.fdtdStep(B,src);}
 for(let k=0;k<n*n;k++){assert.equal(A.Ez[k],B.Ez[k]);assert.equal(A.Hx[k],B.Hx[k]);}
 assert(B.te&&!A.te);
});
test('TE metal: E along every metal edge is exactly zero, H inside the metal is zero, and a closed box keeps its energy',()=>{
 const nx=120,ny=80,F=R.fdtdMake(nx,ny,20,true);
 for(let j=30;j<=50;j++)for(let i=70;i<=90;i++)if(j<32||j>48||i<72||i>88)F.metal[j*nx+i]=1;
 const src=[{k:40*nx+40,a:20}];for(let s=0;s<600;s++)R.fdtdStep(F,src);
 let touched=0;
 for(let j=0;j<ny-1;j++)for(let i=0;i<nx-1;i++){const k=j*nx+i;if(F.metal[k]||F.metal[k+nx]){assert.equal(F.Hx[k],0);touched++;}if(F.metal[k]||F.metal[k+1])assert.equal(F.Hy[k],0);if(F.metal[k])assert.equal(F.Ez[k],0);}
 assert(touched>100);
 let inside=0;for(let j=33;j<48;j++)for(let i=73;i<88;i++)inside=Math.max(inside,Math.abs(F.Ez[j*nx+i]),R.fdtdE2(F,j*nx+i));assert.equal(inside,0,'nothing gets into a closed box');
 const n=64,G=R.fdtdMake(n,n,0,true);
 for(let j=0;j<n;j++)for(let i=0;i<n;i++){const k=j*n+i;if(i<2||j<2||i>n-3||j>n-3)G.metal[k]=1;else G.Ez[k]=Math.exp(-((i-30)**2+(j-34)**2)/12);}
 const u0=R.fdtdEnergy(G);let lo=Infinity,hi=0;for(let s=0;s<3000;s++){R.fdtdStep(G);if(s>20){const u=R.fdtdEnergy(G);lo=Math.min(lo,u);hi=Math.max(hi,u);}}
 assert(hi/u0<1.1&&lo/u0>0.9,`TE box energy ${lo/u0} to ${hi/u0}`);
});
test('polarizers: a wire grid (λ/10 rods, λ/4 apart) and a λ/4 slit in a 0.3 λ wall pass TE and stop TM',()=>{
 function run(te,kind){const nx=260,ny=180,F=R.fdtdMake(nx,ny,30,te),NT=R.FD_NT;
  if(kind==='grid')for(let j=0;j<ny-1;j+=5)for(const d of [0,1,nx,nx+1])F.metal[j*nx+120+d]=1;
  if(kind==='slit')for(let j=0;j<ny;j++)if(!(j>=88&&j<=92))for(let a=0;a<6;a++)F.metal[j*nx+120+a]=1;
  const src=[];for(let j=0;j<ny;j++)src.push({k:j*nx+40,a:Math.exp(-(((j-90)/60)**2))});
  let t=0;for(let s=0;s<NT*14;s++){R.fdtdStep(F,src);if(s>=NT*13)for(let j=60;j<120;j++)t+=R.fdtdE2(F,j*nx+190)/NT;}return t;}
 const tm0=run(false,''),te0=run(true,'');
 assert(Math.abs(te0/tm0-1)<0.05,'with no metal both polarizations carry the same intensity');
 const gTM=run(false,'grid')/tm0,gTE=run(true,'grid')/te0,sTM=run(false,'slit')/tm0,sTE=run(true,'slit')/te0;
 assert(gTM<0.05,`grid TM ${gTM}`);assert(gTE>0.7,`grid TE ${gTE}`);
 assert(sTM<0.002,`slit TM ${sTM}`);assert(sTE>40*sTM,`slit TE ${sTE} against TM ${sTM}`);
});
console.log(`${count} em-waves tests passed`);
