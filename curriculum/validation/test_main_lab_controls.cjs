'use strict';
// Serves exact git-ref demo HTML. Test APIs advance time only where noted; they are not student controls.
const assert=require('node:assert/strict'),http=require('node:http'),path=require('node:path');
process.env.DEMO_REF=process.env.DEMO_REF||'origin/main';
const {readDemo}=require('./demo_source.cjs');
const pw=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const server=http.createServer((req,res)=>{const m=req.url.match(/^\/demos\/([a-z-]+)\.html$/);if(!m){res.writeHead(404).end();return;}try{res.setHeader('Content-Type','text/html');res.end(readDemo(m[1]));}catch(e){res.writeHead(500).end(String(e));}});
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));const browser=await pw[process.env.BROWSER||'chromium'].launch();console.log('Source',process.env.DEMO_REF,'browser',await browser.version());
try{for(const width of [1440,390]){
const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route('https://fonts.**',r=>r.abort());
const open=slug=>page.goto(`http://127.0.0.1:${server.address().port}/demos/${slug}.html`),slider=async(id,v)=>page.locator('#'+id).evaluate((el,v)=>{el.value=String(v);el.dispatchEvent(new Event('input',{bubbles:true}));},v);
const check=async(name)=>{assert.deepEqual(errors,[]);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));console.log('PASS',name,width);};
await open('rc-circuits');await page.click('[data-p="charge"]');await slider('sEps',10);await page.click('#reset');await page.uncheck('#tMarks');await page.uncheck('#tPred');
await page.evaluate(()=>{window.__rc.setRunning(false);window.__rc.go(1);}); // deterministic test sampling, absent from student UI
let rc=await page.evaluate(()=>window.__rc.state());assert(Math.abs(rc.VC-10*(1-Math.exp(-1)))<1e-10);assert.match(await page.locator('#mVC').innerText(),/6.321/);
await page.click('#swSeg [data-m="discharge"]');const after=await page.evaluate(()=>window.__rc.state());assert.equal(after.Q,rc.Q);assert(after.I<0);await check('RC controls/readout and charge continuity');
await open('faraday');await page.click('[data-p="gen"]');assert.equal(await page.locator('#labStep').count(),1);
await page.evaluate(()=>{window.__fd.setRunning(false);window.__fd.go(.101);});const fg=await page.evaluate(()=>({phi:window.__fd.circ.phi,t:window.__fd.W.t}));assert(Math.abs(fg.phi-.002*Math.cos(6.3*fg.t))<1e-12);
await page.click('[data-p="rails"]');await page.evaluate(()=>{window.__fd.setRunning(false);window.__fd.go(.3);});assert(Math.abs(await page.evaluate(()=>window.__fd.circ.emf)+.2)<1e-10);await check('Faraday generator/rails readings with merged lab controls');
await open('capacitors');await page.click('[data-p="apartV"]');await page.evaluate(()=>window.__cap.setRunning(false));await slider('sD',2);let cap=await page.evaluate(()=>window.__cap.state());assert(Math.abs(cap.V-100)<1e-8);
await page.click('[data-p="apartQ"]');await page.evaluate(()=>window.__cap.setRunning(false));await slider('sD',2);cap=await page.evaluate(()=>window.__cap.state());assert(Math.abs(cap.V-200)<1e-8);await check('main capacitor separation workflows');
await open('photoelectric');await page.click('#metals [data-m="Cs"]');await page.click('#clear');await page.uncheck('#tTheory');await slider('lam',400);await slider('volt',-.95);
assert(parseFloat(await page.locator('#rI').innerText())>0);await slider('volt',-.96);assert.equal(await page.locator('#rI').innerText(),'0 nA');
await page.check('#tTheory');await slider('lam',579);await slider('volt',0);assert.notEqual(await page.locator('#rV0').innerText(),'none');await slider('lam',580);assert.equal(await page.locator('#rV0').innerText(),'none');
for(const lam of [250,300,350,400,450,500]){await slider('lam',lam);await slider('volt',-Math.ceil((1239.84/lam-2.14)*100)/100);await page.click('#record');}assert.match(await page.locator('#rH').innerText(),/J·s/);await check('photoelectric Cs threshold, current bracket and Record controls');
await open('gauss-law');await page.click('[data-p="inside"]');await page.waitForFunction(()=>window.__gl.num);await page.click('#qList li');await slider('sQ',1);
await page.waitForFunction(()=>Math.abs(window.__gl.num.total-1e-9/8.8541878188e-12)<1e-5);await check('main Gauss charge setting and numerical flux');
await page.close();}
}finally{await browser.close();server.close();}})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
