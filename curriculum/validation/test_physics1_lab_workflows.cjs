'use strict';
// Execute the shipped fit functions with output stubs. --strict-mystery checks unresolved disclosure.
const assert=require('node:assert/strict'),vm=require('node:vm');
const {core,readDemo}=require('./demo_source.cjs');let n=0;
function harness(name,S){
 const source=readDemo(name),start=source.indexOf('  function fit() {'),end=source.indexOf('  function drawFit(',start);assert(start>=0&&end>start);
 const result={html:'',pts:null,fit:null},ctx={S,$:()=>({set innerHTML(v){result.html=v;}}),f:(v,d=3)=>v.toFixed(d),sci:v=>String(v),drawFit:(pts,F)=>{result.pts=pts;result.fit=F;}};
 const names=name==='viscometer'?'cellNum,fitOrigin,fitLine,G':name==='pendulum'?'cellNum,fitLine':'cellNum,fitLine,fromRow';Object.assign(ctx,core(name,names));
 ctx.hideG=()=>S.blind||!!S.mystery;ctx.hidden=()=>S.blind||S.obj==='mystery'||!!S.myst;
 if(name==='viscometer'){Object.assign(ctx,core(name,'cellNum,fitOrigin,fitLine,G,FLUIDS,BALLS'));ctx.FL=()=>S.myst||ctx.FLUIDS[S.fluid];ctx.rhoB=()=>ctx.BALLS[S.ball].rho;ctx.g3=String;}
 let prefix='';if(name==='rotational-dynamics'||name==='viscometer'){const a=source.indexOf(name==='viscometer'?'  const key =':'  const loadKey ='),b=source.indexOf("  $('capture')",a);assert(a>=0&&b>a);prefix=source.slice(a,b);}
 vm.runInNewContext(prefix+source.slice(start,end)+'\nfit();',ctx,{timeout:2000});return result;
}
function group(name,f){f();n++;console.log('PASS',name);}
const near=(a,b)=>assert(Math.abs(a-b)<1e-10,`${a} != ${b}`);
const ps=()=>({plot:'TL',L:1,rod:false,gKey:'mystery',mystery:8,blind:true,rows:[.5,1,1.5].map(L=>({type:'bob',A:'5',gKey:'mystery',L:L.toFixed(2),T:String(Math.sqrt(4*L))}))});
const rs=()=>({obj:'mystery',d:.08,fric:true,blind:true,rows:[.02,.06,.1].map(m=>{const r=.02,I=.006,tf=.0004,a=(m*9.81*r-tf)*r/(I+m*r*r);return {load:'mystery, friction',m:String(m),r:String(r),t:String(Math.sqrt(1/a))};})});
group('pendulum length fit excludes rods, large angles and other planets; amplitude plot selects current L/type',()=>{
 const S=ps();S.rows.push({type:'rod',A:'5',gKey:'mystery',L:'1.00',T:'99'},{type:'bob',A:'15',gKey:'mystery',L:'1.00',T:'99'},{type:'bob',A:'5',gKey:'9.81',L:'1.00',T:'99'});
 let z=harness('pendulum',S);assert.equal(z.pts.length,3);near(z.fit.b,4);assert.match(z.html,/hidden in Blind/);
 S.plot='TA';z=harness('pendulum',S);assert.equal(z.pts.length,2);assert.equal(z.fit,null);assert.match(z.html,/curve is hidden/);
});
group('rotational fit separates loads and friction state, returning total inertia and friction intercept',()=>{
 const S=rs();S.rows.push({load:'none, friction',m:'.05',r:'.02',t:'.1'},{load:'mystery',m:'.05',r:'.02',t:'.1'});
 const z=harness('rotational-dynamics',S);assert.equal(z.pts.length,3);near(z.fit.b,.006);near(z.fit.a,.0004);assert.match(z.html,/hidden in Blind/);
});
group('viscometer fit uses current liquid/ball/tube, SI diameter squared and raw speed; Mystery hides eta',()=>{
 const S={fluid:'glycerol',ball:'glass',D:.1,myst:{rho:1261,eta:1.41},blind:false,rows:[1,1.5,2].map(d=>({key:'mystery|glass|0.1',d:String(d),t:String(.2/(5000*(d/1000)**2))}))};
 S.rows.push({key:'mystery|glass|0.04',d:'2',t:'.1'},{key:'mystery|glass|0.1',d:'2',t:'0'});
 const z=harness('viscometer',S);assert.equal(z.pts.length,3);near(z.fit.b,5000);assert.match(z.html,/hidden: work it out/);
});
if(process.argv.includes('--strict-mystery'))group('Mystery alone suppresses fitted gravity and inertia',()=>{
 const states=[['pendulum',ps()],['rotational-dynamics',rs()]],leaks=[];
 for(const [name,S] of states){S.blind=false;const z=harness(name,S);if(!z.html.includes('hidden'))leaks.push(name);}
 assert.deepEqual(leaks,[],`Calculated answer disclosed without Blind: ${leaks.join(', ')}`);
});
console.log(`${n} Physics I lab workflow groups passed (source functions with stubs)`);
