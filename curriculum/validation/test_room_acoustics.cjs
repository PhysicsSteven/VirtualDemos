'use strict';
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
let n=0;const test=(name,fn)=>{fn();n++;console.log('PASS',name);};
const close=(a,b,r=1e-9,abs=1e-12)=>assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+r*Math.abs(b),`expected ${b}, got ${a}`);
const R=core('room-acoustics','C_AIR,BANDS,MATERIALS,roomModel,placePanels,sabineT,eyringT,wedgeCutoff,wedgeR,wedgeAlpha,traceRoom,schroeder,decayT,splFromW,steadyLevel,directDose,diffuseLevel,raysFor,PANEL_W,PANEL_H');
const box=(L,W,H,a)=>({L,W,H,V:L*W*H,S:2*(L*W+L*H+W*H),aWall:a,aFloor:a,aPanel:0,panels:[]});
test('room acoustics: Sabine constant, Eyring limits and the wedge rule',()=>{
 close(R.sabineT(1,1),24*Math.log(10)/343);assert.equal(R.sabineT(1,1).toFixed(3),'0.161');
 close(R.eyringT(100,130,1e-4)/R.sabineT(100,130*1e-4),1,1e-4);assert(R.eyringT(100,130,0.999999)<0.01);
 for(const d of [0.1,0.3,0.5,1,1.5]){const fc=R.wedgeCutoff(d);close(fc*4*d,343);close(R.wedgeR(fc,d),0.1);close(R.wedgeAlpha(fc,d),0.99);assert(R.wedgeAlpha(2*fc,d)>0.99&&R.wedgeAlpha(fc/2,d)<0.99);}
 assert.equal(R.wedgeR(1,1),0.9);
 for(const k of Object.keys(R.MATERIALS)){const a=R.MATERIALS[k].a;assert.equal(a.length,R.BANDS.length);for(const v of a)assert(v>=0&&v<=1);}
});
test('room acoustics: model areas, absorption and panels',()=>{
 const o={L:9,W:7,H:3,band:500,walls:'hard',floor:'concrete',panel:'foam',nPanels:0,wedge:0.5},m=R.roomModel(o);
 close(m.V,189);close(m.S,222);close(m.A,(222-63)*0.02+63*0.05);
 for(const nP of [1,10,20,40]){const q=R.roomModel({...o,walls:'panels',nPanels:nP});assert.equal(q.panels.length,nP);close(q.Sp,nP*R.PANEL_W*R.PANEL_H);
  for(const p of q.panels){const len=p.wall%2?q.W:q.L;assert(p.u0>=0&&p.u1<=len&&p.z0>=0&&p.z1<=q.H);}
  for(let i=0;i<q.panels.length;i++)for(let j=i+1;j<q.panels.length;j++){const a=q.panels[i],b=q.panels[j];if(a.wall===b.wall)assert(a.u1<=b.u0+1e-9||b.u1<=a.u0+1e-9||a.z1<=b.z0+1e-9||b.z1<=a.z0+1e-9,'panels overlap');}
  close(q.A,m.A+q.Sp*(0.83-0.02));}
 const w=R.roomModel({...o,L:8,W:6,H:5,walls:'wedges',wedge:0.5});close(w.V,7*5*4);close(w.aWall,R.wedgeAlpha(500,0.5));close(w.A,w.S*w.aWall);
});
/* with diffuse reflections the free paths vary, which slows the decay a little below Eyring's rate (Kuttruff); at α = 0.1 that is about 2 % */
test('room acoustics: ray tracing gives the mean free path 4V/S and an Eyring decay with uniform absorption',()=>{
 const m=box(6,5,3,0.1),tr=R.traceRoom(m,[1.5,2.5,1.5],[4,2.5,1.5],{N:6000,rr:0.5,seed:11,tMax:4});
 close(tr.mfp,4*m.V/m.S,0.03);
 const sc=R.schroeder(tr.bins,tr.dt,2.5),T=R.decayT(sc.db,tr.dt).T;close(T,R.eyringT(m.V,m.S,0.1),0.05);
});
test('room acoustics: anechoic chamber follows 1/r², a hard room reaches a reverberant plateau',()=>{
 const o={L:8,W:6,H:5,band:500,walls:'wedges',floor:'concrete',panel:'foam',nPanels:0,wedge:0.5},m=R.roomModel(o),L=[];
 for(const r of [0.5,1,2,4]){const tr=R.traceRoom(m,[1.5,m.W/2,1.5],[1.5+r,m.W/2,1.5],{N:4000,rr:0.5,seed:3,tMax:1});let s=0;for(const b of tr.bins)s+=b;L.push(R.steadyLevel(0.01,r,s));close(L.at(-1),R.splFromW(0.01*R.directDose(r)),0,0.02);}
 for(let i=1;i<L.length;i++)close(L[i-1]-L[i],20*Math.log10(2),0,0.03);
 const h=box(6,5,3,0.15),P=[];for(const r of [2,3.5]){const tr=R.traceRoom(h,[1,2.5,1.5],[1+r,2.5,1.5],{N:4000,rr:0.5,seed:5,tMax:4});let s=0;for(const b of tr.bins)s+=b;P.push(R.steadyLevel(0.01,r,s));close(P.at(-1),R.diffuseLevel(0.01,r,h.S,0.15),0,1.0);}
 assert(Math.abs(P[0]-P[1])<1.5,'hard room level should level off beyond the critical distance');
});
console.log(`${n} test groups passed`);
