'use strict';
// Gauss's law boundary cases and lab controls in a real browser. Serves the demo from DEMO_REF (a git ref or tree)
// when set, else the working file. setMaxPanels is a test API that forces the quadrature flag; it is not a student control.
// PLAYWRIGHT_MODULE=/path/to/playwright node curriculum/validation/test_gauss_law_browser.cjs
const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http');
const {readDemo,readLib}=require('./demo_source.cjs');
const pw=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const K=1e-9/8.8541878188e-12;
const server=http.createServer((req,res)=>{const l=req.url.match(/^\/demos\/lib\/(vd\.(css|js))$/);if(l){try{res.setHeader('Content-Type',l[2]==='css'?'text/css':'text/javascript');res.end(readLib(l[1]));}catch(e){res.writeHead(404).end();}return;}const m=req.url.match(/^\/demos\/([a-z-]+)\.html$/);if(!m){res.writeHead(404).end();return;}try{res.setHeader('Content-Type','text/html');res.end(readDemo(m[1]));}catch(e){res.writeHead(500).end(String(e));}});
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));const browser=await pw[process.env.BROWSER||'chromium'].launch();
console.log('Source',process.env.DEMO_REF||'working tree','browser',await browser.version());
try{for(const [width,scheme] of [[1440,'light'],[390,'dark']]){
  const page=await browser.newPage({viewport:{width,height:900},colorScheme:scheme,reducedMotion:'reduce',acceptDownloads:true}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));await page.route('https://fonts.**',r=>r.abort());
  await page.goto(`http://127.0.0.1:${server.address().port}/demos/gauss-law.html`);await page.evaluate(()=>document.querySelectorAll('details').forEach(d=>{d.open=true;}));/* the readouts sit in closed folds since the layout redesign; open them so innerText reads them */await page.waitForFunction(()=>window.__gl&&window.__gl.num);
  const text=id=>page.locator('#'+id).innerText(),gl=f=>page.evaluate(f);
  const setXY=async(x,y)=>{if(x!==undefined){await page.fill('#qX',String(x));await page.press('#qX','Enter');}if(y!==undefined){await page.fill('#qY',String(y));await page.press('#qY','Enter');}await page.evaluate(()=>window.__gl.computeNum());};
  await page.click('[data-p="inside"]');await page.evaluate(()=>window.__gl.setRunning(false));await page.click('#qList li');
  // exact entry: the charge lands where typed, and the flux is computed there
  await setXY(1.23,-0.45);let c=await gl(()=>window.__gl.F.charges[0]);assert.equal(c.x,1.23);assert.equal(c.y,-0.45);
  assert(Math.abs(await gl(()=>window.__gl.num.total)-2*K)<1e-6*K);
  // exactly on the surface: undefined, no numerical flux
  await setXY(6,0);assert.equal(await gl(()=>window.__gl.bnd),'on');assert.equal(await gl(()=>window.__gl.num),null);
  assert.match(await text('onFlag'),/on the surface/);assert.match(await text('headline'),/undefined/);
  // inside the 0.03 cm exclusion zone: labelled as numerical, the prediction still shown
  await setXY(5.98);assert.equal(await gl(()=>window.__gl.bnd),'zone');assert.match(await text('onFlag'),/0\.02 cm from the surface.*exclusion zone/s);
  assert.match(await text('onFlag'),/only a charge exactly on the surface/);assert.equal(await text('mN'),'not computed');assert.match(await text('headline'),/225\.9/);
  await page.click('#capture');assert.match(await text('capMsg'),/Not captured/);assert.equal(await gl(()=>window.__gl.rows().length),0);
  // just outside the zone the integral runs again and is converged
  await setXY(5.97);assert.equal(await gl(()=>window.__gl.bnd),'clear');assert(await gl(()=>window.__gl.num.converged));
  assert(Math.abs(await gl(()=>window.__gl.num.total)-2*K)<1e-9*K);assert(await page.locator('#tolFlag').isHidden());
  // drag on the slice: drag snaps to 0.1 cm, so a charge dragged onto the circle sits exactly on it
  await page.evaluate(()=>window.__gl.setView3d(false));await setXY(4,0);await page.locator('#dCan').scrollIntoViewIfNeeded();await page.waitForTimeout(100);
  const box=await page.locator('#dCan').boundingBox(),P=await gl(()=>[window.__gl.X(4),window.__gl.Y(0),window.__gl.X(6),window.__gl.Y(0)]);
  await page.mouse.move(box.x+P[0],box.y+P[1]);await page.mouse.down();for(let i=1;i<=8;i++)await page.mouse.move(box.x+P[0]+(P[2]-P[0])*i/8,box.y+P[1]);await page.mouse.up();
  await page.waitForTimeout(100);c=await gl(()=>window.__gl.F.charges[0]);assert.equal(c.x,6);assert.equal(await gl(()=>window.__gl.bnd),'on');
  // capture and export, with and without the predicted flux
  await setXY(3,0.5);await page.click('#capture');await page.click('[data-s="box"]');await page.evaluate(()=>window.__gl.computeNum());await page.click('#capture');
  assert.equal(await page.locator('#tbl tbody tr').count(),2);assert.match(await page.locator("#tbl tbody").innerText(),/225\.8818/);
  /* Export to worksheet hands the CSV to the worksheet through localStorage (a download only when storage is blocked) */const exp=async()=>{await page.click('#expTab');return page.evaluate(()=>JSON.parse(localStorage.getItem('vd-handoff:gauss-law')).csv);};let csv=await exp();
  let lines=csv.trim().split('\n').filter(l=>!l.startsWith('#')),head=lines[0].split(',');assert.equal(lines.length,3);
  const col=(row,name)=>row.match(/("[^"]*"|[^,]*)(,|$)/g).map(s=>s.replace(/,$/,''))[head.indexOf(name)];
  assert(head.includes('flux_predicted_Q_enc_over_eps0_N_m2_per_C'));assert.equal(col(lines[1],'radius_m'),'0.06');assert.equal(col(lines[1],'tolerance_met'),'yes');
  assert(Math.abs(+col(lines[1],'flux_numerical_N_m2_per_C')-2*K)<1e-9*K);assert.equal(col(lines[1],'charges_q_C_x_m_y_m'),'"2.000e-9 0.03 0.005"');
  assert.equal(col(lines[2],'surface'),'box');assert(Math.abs(+col(lines[2],'flux_numerical_N_m2_per_C')-2*K)<1e-9*K);assert.match(csv,/not a rigorous bound/);assert.match(csv,/0\.0003 m/);
  await page.uncheck('#tPred');assert(await page.locator('#mGrow').isHidden());assert.doesNotMatch(await text('headline'),/Φ/);assert(await page.locator('#tbl th.pred').isHidden());
  csv=await exp();assert.doesNotMatch(csv.split('\n').find(l=>l.startsWith('row,')),/predicted|residual/);
  await page.check('#tPred');
  // an exhausted panel budget is reported in the rail, the table and the CSV
  await page.click('[data-s="sphere"]');await setXY(5.9,0);await page.evaluate(()=>window.__gl.setMaxPanels(10));
  assert.equal(await gl(()=>window.__gl.num.converged),false);assert(await page.locator('#tolFlag').isVisible());assert.match(await text('tolFlag'),/tolerance not met/);
  await page.click('#capture');assert.equal(await page.locator('#tbl tbody tr.warn').count(),1);
  lines=(await exp()).trim().split('\n').filter(l=>!l.startsWith('#'));assert.equal(col(lines[3],'tolerance_met'),'no');
  await page.evaluate(()=>window.__gl.setMaxPanels(300));assert(await page.locator('#tolFlag').isHidden());
  // symmetry: field at the center of a ball and on a charged conductor's surface
  await page.click('[data-p="ball"]');await page.evaluate(()=>{window.__gl.setRunning(false);window.__gl.setSym('r',0);});
  assert.equal(await gl(()=>window.__gl.symE(0)),0);assert.match(await text('steps'),/At the center/);assert.match(await text('headline'),/E = 0/);
  await page.click('#sphSeg [data-v="shell"]');await page.evaluate(()=>{window.__gl.setSym('R',4.9);window.__gl.setSym('r',4.9);});
  assert.match(await text('headline'),/jumps from 0 to/);assert.match(await text('steps'),/just inside: E = 0/);assert(await gl(()=>Number.isNaN(window.__gl.symE(4.9))));
  await page.evaluate(()=>window.__gl.setSym('r',5));assert.doesNotMatch(await text('headline'),/jumps/);
  await page.click('#sphSeg [data-v="point"]');assert(await gl(()=>window.__gl.sym.r>=0.2));
  await page.waitForTimeout(300);
  assert.deepEqual(errors,[]);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'horizontal overflow');
  console.log('PASS Gauss boundary cases, exact entry, readings and CSV',width,scheme);await page.close();}
}finally{await browser.close();server.close();}})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
