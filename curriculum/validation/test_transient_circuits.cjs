/* Run: node curriculum/validation/test_transient_circuits.cjs
   Read-only test: extracts the DOM-independent physics core from the demo source. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const src=fs.readFileSync(path.resolve(__dirname,'../../demos/transient-circuits.html'),'utf8');
const start=src.indexOf('const MODEL_VERSION'),end=src.indexOf('const $=id=>',start);
assert(start>=0&&end>start,'Could not locate standalone physics core');
const context={module:{exports:{}},Math,Number,Error};vm.runInNewContext(src.slice(start,end),context,{timeout:1000});
const {state}=context.module.exports;
const close=(actual,expected,rel=1e-9,abs=1e-12)=>assert(Math.abs(actual-expected)<=abs+rel*Math.abs(expected),`expected ${expected}, got ${actual}`);
let n=0;const test=(name,fn)=>{fn();n++;console.log('PASS',name)};
const L=.1,C=1e-4,V=10,Q0=C*V,w=1/Math.sqrt(L*C),T=2*Math.PI/w,E0=.5*C*V*V;
test('LC quarter-cycle energy transfer',()=>{const z=state('LC',0,L,C,V,1,T/4);close(z.q,0,1e-8);close(z.i,-Q0*w);close(z.U,E0);close(z.H,0);});
test('LC full cycle, no numerical damping',()=>{const z=state('LC',0,L,C,V,1,1000*T);close(z.q,Q0,1e-8);close(z.i,0,1e-7,1e-10);close(z.U,E0);});
test('RLC R=0 matches LC',()=>{for(const t of [0,.003,.01,.1]){const a=state('LC',0,L,C,V,0,t),b=state('RLC',0,L,C,V,0,t);close(a.q,b.q);close(a.i,b.i);}});
test('RLC underdamped energy',()=>{for(const R of [5,10,20,50])for(const t of [0,.001,.005,.01,.05]){const z=state('RLC',R,L,C,V,0,t);close(z.U+z.H,E0);assert(z.H>=0);}});
test('RLC critical damping',()=>{const R=2*Math.sqrt(L/C),t=.01,z=state('RLC',R,L,C,V,0,t),a=R/(2*L);close(z.q,Q0*Math.exp(-a*t)*(1+a*t));close(z.i,-Q0*a*a*t*Math.exp(-a*t));});
test('RLC overdamped energy',()=>{for(const t of [0,.001,.01,.1,1]){const z=state('RLC',100,L,C,V,0,t);close(z.U+z.H,E0);assert(z.H>=0);}});
test('RC exponential discharge',()=>{const R=100,t=R*C;const z=state('RC',R,L,C,V,0,t);close(z.q,Q0/Math.E);close(z.i,-Q0/(Math.E*R*C));close(z.U+z.H,E0);});
test('RL exponential discharge',()=>{const R=100,I0=1,t=L/R;const z=state('RL',R,L,C,V,I0,t);close(z.i,I0/Math.E);close(z.U+z.H,.5*L*I0*I0);});
test('RL zero resistance constant current',()=>{const z=state('RL',0,L,C,V,1,100);close(z.i,1);close(z.H,0);});
test('RC zero resistance rejected',()=>{assert.throws(()=>state('RC',0,L,C,V,0,.01),/impulsive/);});
test('invalid parameters rejected',()=>{assert.throws(()=>state('RLC',-1,L,C,V,0,0),/Invalid/);});
console.log(`Completed ${n} transient circuit tests.`);

// Independent RK4 integration of the differential equation, not the closed form.
function rk4(R,L,C,q,i,t,n=20000){
  const h=t/n;
  const f=(q,i)=>[i,-(R*i+q/C)/L];
  for(let j=0;j<n;j++){
    const a=f(q,i),b=f(q+h*a[0]/2,i+h*a[1]/2),c=f(q+h*b[0]/2,i+h*b[1]/2),d=f(q+h*c[0],i+h*c[1]);
    q+=h*(a[0]+2*b[0]+2*c[0]+d[0])/6;i+=h*(a[1]+2*b[1]+2*c[1]+d[1])/6;
  }
  return {q,i};
}
function simpson(f,T,n=20000){let a=f(0)+f(T);for(let j=1;j<n;j++)a+=(j%2?4:2)*f(T*j/n);return a*T/(3*n);}
const core=context.module.exports;
test('independent ODE reference across damping transition and UI extremes',()=>{
  for(const [l,c,r] of [[.1,1e-4,0],[.1,1e-4,20],[.1,1e-4,2*Math.sqrt(1000)],[.1,1e-4,80],[.01,5e-4,150],[.5,1e-5,.1]]){
    const t=3*Math.sqrt(l*c),z=state('RLC',r,l,c,10,0,t),ref=rk4(r,l,c,c*10,0,t);
    close(z.q,ref.q,2e-8,1e-13);close(z.i,ref.i,2e-8,1e-11);
  }
});
test('critical continuity from both sides without cancellation',()=>{
  const rc=2*Math.sqrt(L/C);
  for(const eps of [-1e-6,-1e-10,-1e-14,0,1e-14,1e-10,1e-6])for(const x of [0,1e-8,.1,1,5,20]){
    const r=rc*(1+eps),t=x/w,z=state('RLC',r,L,C,V,0,t),ref=rk4(r,L,C,Q0,0,t);
    close(z.q,ref.q,1e-7,1e-13);close(z.i,ref.i,1e-7,1e-11);
  }
});
test('independent integral of Joule power equals heat',()=>{
  for(const mode of ['RC','RL','LC','RLC'])for(const r of [0,5,63.245553203367585,150]){
    if(mode==='RC'&&r===0)continue;
    const R=mode==='LC'?0:r,t=mode==='RC'?2*R*C:mode==='RL'?(R?2*L/R:.01):.02;
    const z=state(mode,R,L,C,V,1,t),heat=simpson(u=>R*state(mode,R,L,C,V,1,u).i**2,t);
    close(z.H,heat,2e-8,1e-12);
  }
});
test('differentiated charge, current and energy satisfy physical laws',()=>{
  for(const mode of ['RC','RL','LC','RLC'])for(const R of [5,20,80,150]){
    const r=mode==='LC'?0:R,t=.0007,h=1e-8,z=state(mode,r,L,C,V,1,t),a=state(mode,r,L,C,V,1,t-h),b=state(mode,r,L,C,V,1,t+h);
    if(mode!=='RL')close((b.q-a.q)/(2*h),z.i,1e-6);
    close((b.U-a.U)/(2*h),-r*z.i*z.i,1e-6,1e-9);
    const vc=mode==='RL'?0:z.q/C,vl=mode==='RC'?0:L*(b.i-a.i)/(2*h);
    close(vc+r*z.i+vl,0,1e-6,2e-7);
  }
});
test('all UI parameter corners remain finite, passive, and start correctly',()=>{
  for(const mode of ['RC','RL','LC','RLC'])for(const r of [.1,150])for(const l of [.01,.5])for(const c of [1e-5,5e-4]){
    const s={mode,R:mode==='LC'?0:r,L:l,C:c,V0:20,I0:2},T=core.horizon(s);
    for(let k=0;k<=100;k++){
      const z=core.measurement(s,T*k/100);
      for(const key of ['q','i','U','H','UC','UL','VC','VR','VL'])assert(Number.isFinite(z[key]),key);
      assert(z.U<=z.E0*(1+1e-12));close(z.UC+z.UL,z.U);close(z.U+z.H,z.E0);
      close(z.VC+z.VR+z.VL,0,1e-8,1e-10);
    }
  }
});
test('zero excitation and invalid topology',()=>{
  for(const mode of ['RC','RL','LC','RLC']){const z=state(mode,20,L,C,0,0,1);close(z.U,0);close(z.i,0);}
  assert.throws(()=>state('typo',20,L,C,V,1,0),/Invalid/);
});
test('CSV round trip preserves signed SI readings and initial conditions',()=>{
  const s={mode:'RLC',R:20,L,C,V0:V,I0:1},r=core.measurement(s,.003),lines=core.csvText([r]).split('\n'),vals=lines[1].split(',');
  assert.equal(vals.length,lines[0].split(',').length);assert.equal(vals[1],'RLC');
  ['t','R','L','C','V0','I0','q','i','U','H','E0','UC','UL','VC','VR','VL'].forEach((k,j)=>assert.equal(+vals[j+2],r[k]));
});
console.log(`Completed ${n} transient circuit tests including independent numerical references.`);
