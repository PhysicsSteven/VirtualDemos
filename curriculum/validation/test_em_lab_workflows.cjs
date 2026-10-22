'use strict';
// Execute the actual fit functions with minimal DOM/output stubs; no demo modification.
// --strict-mystery additionally gates the reported answer-disclosure defects.
const assert=require('node:assert/strict'),vm=require('node:vm');
const {core,readDemo}=require('./demo_source.cjs');let n=0;
function fitHarness(name,S){
 const source=readDemo(name),start=source.indexOf('  function fit() {'),end=source.indexOf('  function drawFit(',start);
 assert(start>=0&&end>start,'fit source boundary');
 const nodes={}; const $=id=>nodes[id]||(nodes[id]={innerHTML:'',querySelector:sel=>$(id+sel)});
 const common={S,$,drawFit:(pts,fit)=>{common.output={pts,fit};},f:(v,d=2)=>Number.isFinite(v)?v.toFixed(d):'—',sci:v=>String(v)};
 if(name==='resistivity'){Object.assign(common,core(name,'cellNum,area,sig,fitLine'));common.d=()=>S.d;common.hidden=()=>S.blind||S.mat==='mystery';}
 else {Object.assign(common,core(name,'cellNum,G,fitLine'));common.hideB=()=>S.blind||!!S.mystery;}
 vm.runInNewContext(source.slice(start,end)+'\nfit();',common,{timeout:2000});return {...common.output,html:nodes.fitOut.innerHTML};
}
function group(name,f){f();n++;console.log('PASS',name);}
const near=(a,b,t=1e-10)=>assert(Math.abs(a-b)<t,`${a} != ${b}`);
group('resistivity fit selects material, gauge and fixed T or L; temperature coefficient uses R at 20 C',()=>{
 const rows=[0.1,0.3,0.5].map(L=>({key:'mystery',d:'0.405',T:'20',L:L.toFixed(3),I:'0.2',V:String(.2*(2+10*L))}));
 rows.push({key:'copper',d:'0.405',T:'20',L:'.3',I:'.2',V:'99'},{key:'mystery',d:'0.255',T:'20',L:'.3',I:'.2',V:'99'});
 const S={mat:'mystery',d:.405,T:20,L:.5,blind:true,plot:'RL',rows};let z=fitHarness('resistivity',S);
 assert.equal(z.pts.length,3);near(z.fit.b,10);near(z.fit.a,2);assert.match(z.html,/hidden in Blind/);
 S.plot='RT';S.rows=[0,20,40,80].map(T=>({key:'mystery',d:'0.405',T:String(T),L:'0.500',I:'.2',V:String(.2*(8+.1*T))}));
 S.rows.push({key:'mystery',d:'0.405',T:'60',L:'0.400',I:'.2',V:'99'});
 z=fitHarness('resistivity',S);assert.equal(z.pts.length,4);near(z.fit.b,.1);near(z.fit.b/(z.fit.a+20*z.fit.b),.01);
});
group('wire-force fit selects length/angle and converts grams to newtons with signed current',()=>{
 const S={L:4,th:90,blind:true,mystery:.2,rows:[-2,0,2].map(I=>({I:String(I),L:'4.0',th:'90',dm:String(-2*I)}))};
 S.rows.push({I:'1',L:'6.0',th:'90',dm:'99'},{I:'1',L:'4.0',th:'30',dm:'99'});
 const z=fitHarness('wire-force',S);assert.equal(z.pts.length,3);near(z.fit.b,-.01962);near(z.fit.a,0);assert.match(z.html,/hidden in Blind/);
});
if(process.argv.includes('--strict-mystery'))group('Mystery alone suppresses calculated answers in both fit readouts',()=>{
 const states=[['resistivity',{mat:'mystery',d:.405,T:20,L:.5,blind:false,plot:'RL',rows:[.1,.5].map(L=>({key:'mystery',d:'0.405',T:'20',L:L.toFixed(3),I:'.2',V:String(L)}))}],['wire-force',{L:4,th:90,blind:false,mystery:.2,rows:[0,2].map(I=>({I:String(I),L:'4.0',th:'90',dm:String(-I)}))}]];
 const leaks=states.filter(([name,S])=>!fitHarness(name,S).html.includes('hidden')).map(([name])=>name);
 assert.deepEqual(leaks,[],`Calculated answer disclosed without Blind: ${leaks.join(', ')}`);
});
console.log(`${n} E&M lab workflow groups passed (source functions with stubs; not browser tests)`);
