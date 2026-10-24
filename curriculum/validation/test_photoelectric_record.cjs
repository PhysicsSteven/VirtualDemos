'use strict';
// Execute source functions with small DOM/download adapters; this is not a browser test.
const assert=require('node:assert/strict'),vm=require('node:vm'),{readDemo}=require('./demo_source.cjs');
const src=readDemo('photoelectric');
function body(name){const start=src.indexOf(`  function ${name}(`);assert(start>=0);let pos=src.indexOf('{',start),depth=1,end=pos+1;while(depth&&end<src.length){if(src[end]==='{')depth++;if(src[end]==='}')depth--;end++;}assert.equal(depth,0);return src.slice(start,end);}
const msg={textContent:''},downloads=[],blobs=[],ctx={console,Math,URL:{createObjectURL:b=>{blobs.push(b);return 'blob:test';}},Blob:class{constructor(parts){this.text=parts.join('');}},document:{body:{appendChild(){}},createElement:()=>({click(){downloads.push(this.download);},remove(){}})}};
vm.runInNewContext(`const S={lam:400,pow:40,metal:'Cs',V:-.95},points=[];let wsSeries=1;const $=()=>msg,changed=()=>{},fmtI=x=>String(x),freq=()=>299792458/(S.lam*1e-9),Kmax=()=>Math.max(0,1239.84/S.lam-2.14),Isat=()=>.001*S.pow*1e-6/(1239.84/S.lam);\n${body('current')}\n${body('record')}\n${body('measuredStop')}\n${body('exportCSV')}\nglobalThis.api={S,points,record,measuredStop,exportCSV};`,Object.assign(ctx,{msg}));
const a=ctx.api;a.record();assert.equal(a.points[0].k,.95);assert(a.points[0].I>=.005);assert.match(msg.textContent,/not reached zero/);
a.S.V=-.96;a.record();assert.equal(a.points[1].k,.96);assert.equal(a.points[1].I,0);a.record();assert.equal(JSON.stringify(a.points[1]),JSON.stringify(a.points[2]));assert.equal(a.measuredStop(),-.96);
a.S.V=0;const n=a.points.length;a.record();assert.equal(a.points.length,n);
a.exportCSV();assert.equal(downloads[0],'photoelectric-stopping-voltages.csv');const rows=blobs[0].text.trim().split('\n').filter(l=>l[0]!=='#');assert.equal(rows.length,4);assert.equal(rows[0],'row,wavelength_nm,frequency_Hz,stopping_voltage_V,metal,light_power_uW,meter_reading_nA');assert.equal(rows[2].split(',')[3],'0.96');assert.equal(rows[2].split(',')[6],'0.00');assert.match(msg.textContent,/blocks storage/);
console.log('PASS selected voltage, nonzero-current warning, repeat determinism, stopping search and the CSV a blocked browser downloads instead of the worksheet handoff (source functions; DOM adapters)');
