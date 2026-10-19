'use strict';
// Rutherford core: the exact Coulomb orbit for both signs of zZ (alpha, repelled; antialpha, attracted),
// checked against direct numerical integration of m d²r/dt² = zZe²/(4πε₀) r̂/r² and against the textbook formulas.
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS',name);};
function close(a,b,rel=1e-10,abs=1e-15){assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+rel*Math.abs(b),`expected ${b}, got ${a}`);}
const R=core('rutherford','KC,MA,ZA,AMU,R0,headOn,deflect,rMin,bOf,turnSign,nucR,bTouch,recoil,orbit,integrate,plumExact,plumKick,sampleB,binFrac,dsdo');
const D0=R.headOn(79,7.69);                 // gold, 7.69 MeV alpha
const BS=[0.02,0.1,0.3,0.5,1,2,5,20];       // b in units of |D|

test('rutherford: D for gold at 7.69 MeV and its sign',()=>{
 close(D0,2*79*1.439964/7.69);close(D0,29.585,2e-4);
 close(R.headOn(79,7.69,-2),-D0);assert.equal(R.turnSign(D0),1);assert.equal(R.turnSign(-D0),-1);
});

test('rutherford: same θ(b) for both signs, from the formula and from integration; exit side flips',()=>{
 let worst=0;
 for(const s of [1,-1])for(const bD of BS)for(const sb of [1,-1]){
  const D=s*D0,b=sb*bD*D0,th=R.deflect(b,D);
  close(th,R.deflect(b,-D),0,0);close(th,2*Math.atan(D0/(2*bD*D0)),1e-14);
  const it=R.integrate(b,D,{eps:5e-4});
  // integrated exit direction: +θ means turned toward +y. Repulsion turns away from the side passed, attraction toward it.
  const want=sb*s*th;worst=Math.max(worst,Math.abs(it.theta-want));
  assert(Math.abs(it.theta-want)<5e-5,`b=${b} D=${D}: integrated ${it.theta}, expected ${want}`);
  assert.equal(R.orbit(b,D).side,sb*s);
 }
 console.log('   worst |θ_int − θ_formula| =',worst.toExponential(2),'rad');
});

test('rutherford: r_min from both formulas and from integration',()=>{
 let worst=0;
 for(const s of [1,-1])for(const bD of BS){
  const D=s*D0,b=bD*D0,th=R.deflect(b,D),rm=R.rMin(b,D);
  // (d/2)(1/sin(θ/2) ± 1), d = |D|: + for repulsion, − for attraction
  close(rm,D0/2*(1/Math.sin(th/2)+s),1e-12);
  close(rm,D0/2*(Math.sqrt(1+(2*b/D0)**2)+s),1e-12);
  const it=R.integrate(b,D,{eps:5e-4}),e=Math.abs(it.rmin-rm)/rm;worst=Math.max(worst,e);
  assert(e<2e-5,`b=${b} D=${D}: integrated r_min ${it.rmin}, formula ${rm}`);
 }
 // attraction comes much closer: at b = |D|/2 (θ = 90°) the ratio is (√2 − 1)/(√2 + 1) = 0.172
 close(R.rMin(D0/2,-D0)/R.rMin(D0/2,D0),(Math.SQRT2-1)/(Math.SQRT2+1),1e-12);
 close(R.rMin(0,D0),D0);close(R.rMin(0,-D0),0,0,1e-12);
 console.log('   worst relative r_min error =',worst.toExponential(2));
});

test('rutherford: orbit() geometry and Kepler timing match integration for both signs',()=>{
 const acc=(D,x,y)=>{const r=Math.hypot(x,y);return[D/2*x/r**3,D/2*y/r**3];};
 let worst=0;
 for(const s of [1,-1])for(const bD of [0.1,0.4,1,3])for(const sb of [1,-1]){
  const D=s*D0,b=sb*bD*D0,o=R.orbit(b,D),th=R.deflect(b,D);
  // incoming along y = b from x → −∞, r(w) = |pos(w)|, periapsis at r_min, outgoing direction θ on o.side
  const far=o.pos(-14);assert(far[0]<0&&Math.abs(far[1]-b)<1e-4*D0,`incoming offset ${far}`);
  for(const w of [-3,-0.7,0,0.4,2.5])close(Math.hypot(...o.pos(w)),o.r(w),1e-12,1e-12);
  close(Math.hypot(...o.pos(0)),R.rMin(b,D),1e-12);
  const p1=o.pos(14),p2=o.pos(14.001),dir=Math.atan2(p2[1]-p1[1],p2[0]-p1[0]);
  assert(Math.abs(dir-o.side*th)<1e-5,`exit direction ${dir} vs ${o.side*th}`);
  // timing: start on the orbit at w0 with its velocity, integrate (RK4, fixed step) for t(w1) − t(w0), compare with pos(w1)
  const w0=-2,w1=1.5,h=1e-6,pa=o.pos(w0-h),pb=o.pos(w0+h),dt=o.t(w0+h)-o.t(w0-h);
  let x=o.pos(w0)[0],y=o.pos(w0)[1],vx=(pb[0]-pa[0])/dt,vy=(pb[1]-pa[1])/dt;
  close(vx*vx+vy*vy+D/Math.hypot(x,y),1,1e-7);           // energy, units v₀ = 1
  const T=o.t(w1)-o.t(w0),n=40000,k=T/n;
  for(let i=0;i<n;i++){
   const f=(X,Y,VX,VY)=>{const a=acc(D,X,Y);return[VX,VY,a[0],a[1]];};
   const k1=f(x,y,vx,vy),k2=f(x+k/2*k1[0],y+k/2*k1[1],vx+k/2*k1[2],vy+k/2*k1[3]);
   const k3=f(x+k/2*k2[0],y+k/2*k2[1],vx+k/2*k2[2],vy+k/2*k2[3]),k4=f(x+k*k3[0],y+k*k3[1],vx+k*k3[2],vy+k*k3[3]);
   x+=k/6*(k1[0]+2*k2[0]+2*k3[0]+k4[0]);y+=k/6*(k1[1]+2*k2[1]+2*k3[1]+k4[1]);vx+=k/6*(k1[2]+2*k2[2]+2*k3[2]+k4[2]);vy+=k/6*(k1[3]+2*k2[3]+2*k3[3]+k4[3]);
  }
  const q=o.pos(w1),err=Math.hypot(x-q[0],y-q[1])/D0;worst=Math.max(worst,err);
  assert(err<1e-6,`timing check b=${b} D=${D}: off by ${err} D`);
  // t(w) inverts
  for(const t of [-500,-3,0,0.2,40])close(o.t(o.wOfT(t)),t,1e-10,1e-9);
 }
 console.log('   worst Kepler timing error =',worst.toExponential(2),'|D|');
});

test('rutherford: attraction crosses the axis behind the nucleus, repulsion never does',()=>{
 for(const bD of [0.05,0.5,2,10])for(const sb of [1,-1]){
  const b=sb*bD*D0;
  for(const [D,cross] of [[D0,false],[-D0,true]]){
   const o=R.orbit(b,D);let n=0,xc=null,prev=o.pos(-20)[1];
   for(let i=1;i<=4000;i++){const p=o.pos(-20+40*i/4000);if(Math.sign(p[1])!==Math.sign(prev)){n++;xc=p[0];}prev=p[1];}
   assert.equal(n,cross?1:0,`b=${b} D=${D}: ${n} axis crossings`);
   if(cross)assert(xc>0,`crossing at x = ${xc}`);
   const it=R.integrate(b,D,{eps:1e-3});assert.equal(Math.sign(it.y),cross?-sb:sb);
  }
 }
 // head on attraction: the limit b → 0 is θ = π, falling to the center and back out
 const o=R.orbit(0,-D0);close(o.theta,Math.PI);close(Math.hypot(...o.pos(0)),0,0,1e-12);close(o.t(o.wOfT(-7)),-7,1e-10);
});

test('rutherford: the cross section and the beam histogram are the same for both signs',()=>{
 for(const th of [0.05,0.5,1,Math.PI/2,2.5,3.1]){close(R.dsdo(th,-D0),R.dsdo(th,D0),0,0);
  // dσ/dΩ = (b/sin θ)|db/dθ| from θ(b), numerically
  const b=R.bOf(th,-D0),h=1e-6,db=(R.bOf(th+h,-D0)-R.bOf(th-h,-D0))/(2*h);close(b/Math.sin(th)*Math.abs(db),R.dsdo(th,D0),1e-6);}
 const bm=D0*Math.pow(10,0.756);let sum=0;
 for(let i=0;i<36;i++){const a=i*Math.PI/36,c=(i+1)*Math.PI/36,f=R.binFrac(a,c,D0,bm);close(R.binFrac(a,c,-D0,bm),f,0,0);sum+=f;}
 close(sum,1,1e-12);
 // the angles from integrated orbits for sampled b agree between signs
 for(const u of [0.001,0.03,0.2,0.6,0.97]){const b=R.sampleB(bm,u),ta=Math.abs(R.integrate(b,D0).theta),tb=Math.abs(R.integrate(b,-D0).theta);assert(Math.abs(ta-tb)<1e-4,`${ta} vs ${tb}`);}
});

test('rutherford: contact b and recoil for both signs',()=>{
 const Rt=R.nucR(197)+R.nucR(4);
 assert.equal(R.bTouch(D0,Rt),0);                                    // gold, 7.69 MeV alpha: never touches
 const bt=R.bTouch(-D0,Rt);close(R.rMin(bt,-D0),Rt,1e-12);close(bt,Math.sqrt(Rt*(Rt+D0)),1e-12);
 console.log(`   antialpha on gold at 7.69 MeV reaches contact ${Rt.toFixed(2)} fm for b < ${bt.toFixed(2)} fm, θ > ${(R.deflect(bt,D0)*180/Math.PI).toFixed(1)}°`);
 const Da=R.headOn(13,10),Ra=R.nucR(27)+R.nucR(4),ba=R.bTouch(Da,Ra);close(R.rMin(ba,Da),Ra,1e-12);   // aluminum, 10 MeV alpha: touches
 for(const b of [0,5,25,80]){const p=R.recoil(b,79,197,7.69),m=R.recoil(b,79,197,7.69,-2);
  close(m.Dcm,-p.Dcm);close(m.th,p.th,0,0);close(m.rmin,R.rMin(b,m.Dcm));}
});

test('rutherford: plum pudding sphere, attraction turns toward the axis by the same small angle',()=>{
 const Rat=1.57e5;   // atom radius, fm
 for(const s of [0.1,0.5,0.7071,0.95]){
  const b=s*Rat,tp=R.plumExact(b,D0,Rat),tn=R.plumExact(b,-D0,Rat),kick=R.plumKick(s,D0,Rat);
  assert(tp>0&&tn<0);close(Math.abs(tn),kick,2e-4);close(tp,kick,2e-4);close(R.plumKick(s,-D0,Rat),kick,0,0);
 }
 // exact check against RK4 inside a strongly charged sphere, where the small angle form fails
 for(const D of [0.3,-0.3])for(const s of [0.3,0.8]){
  const Rs=1,acc=(x,y)=>[D/2*x/Rs**3,D/2*y/Rs**3];let x=-Math.sqrt(1-s*s),y=s,vx=1,vy=0;const k=1e-5;
  for(let i=0;i<1e6;i++){const a=acc(x,y),xm=x+k/2*vx,ym=y+k/2*vy,am=acc(xm,ym),vxm=vx+k/2*a[0],vym=vy+k/2*a[1];
   x+=k*vxm;y+=k*vym;vx+=k*am[0];vy+=k*am[1];if(x*x+y*y>=1&&x>0)break;}
  close(R.plumExact(s,D,1),Math.atan2(vy,vx),1e-3,1e-5);
 }
});

test('rutherford: drawing samples of a tight attractive turn are smooth',()=>{
 const o=R.orbit(0.03*D0,-D0),ws=o.ws(-12,12,64);let turn=0;
 for(let i=2;i<ws.length;i++){const a=o.pos(ws[i-2]),b=o.pos(ws[i-1]),c=o.pos(ws[i]);
  const d1=Math.atan2(b[1]-a[1],b[0]-a[0]),d2=Math.atan2(c[1]-b[1],c[0]-b[0]);let d=Math.abs(d2-d1);if(d>Math.PI)d=2*Math.PI-d;turn=Math.max(turn,d);}
 assert(turn<0.12,`largest bend between segments ${turn} rad`);
});
console.log(`${count} rutherford tests passed`);
