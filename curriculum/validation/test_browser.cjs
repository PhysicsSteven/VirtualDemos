/* Real browser smoke/workflow checks. npm install --no-save playwright@1.51.1; npx playwright install chromium firefox
   BROWSER=firefox node curriculum/validation/test_browser.cjs
   Screenshots/CSV are temporary evidence, not fixtures. */
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),http=require('node:http');
const playwright=require(process.env.PLAYWRIGHT_MODULE||(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES?path.join(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES,'playwright'):'playwright')); 
const root=path.resolve(__dirname,'../..'),out=process.env.EVIDENCE_DIR||'/tmp/virtualdemos-browser';fs.mkdirSync(out,{recursive:true});
const server=http.createServer((req,res)=>{
  const file=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]));
  if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
  fs.readFile(file,(err,b)=>{if(err){res.writeHead(404).end();return;}res.setHeader('Content-Type',file.endsWith('.html')?'text/html':'text/plain');res.end(b);});
});
(async()=>{
  await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=`http://127.0.0.1:${server.address().port}`;
  const name=process.env.BROWSER||'firefox',browser=await playwright[name].launch({headless:true});
  console.log('Browser',name,await browser.version());
  try{
    for(const mobile of [false,true]){
      console.log('Opening',mobile?'phone':'desktop');const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1440,height:1000},colorScheme:mobile?'dark':'light',reducedMotion:'reduce'}),errors=[];
      page.on('pageerror',e=>errors.push(e.message));
      // Fonts are decorative; avoid dependence on an external font server.
      await page.route('https://fonts.**',r=>r.abort());
      await page.goto(base+'/demos/transient-circuits.html');
      assert.equal(await page.locator('#motion').isChecked(),false);
      for(const mode of ['RC','RL','LC','RLC']){
        await page.selectOption('#mode',mode);
        await page.locator('#timeNumber').fill(mode==='RL'?'1':'3');await page.locator('#timeNumber').press('Tab');
        await page.click('#capture');
        assert(!/NaN|Infinity/.test(await page.locator('#metrics').innerText()));
      }
      assert.equal(await page.locator('#rows tr').count(),4);
      await page.click('#critical');await page.uncheck('#blind');assert.match(await page.locator('#theory').innerText(),/critically damped/);
      for(const span of ['.1','.25','.5','1'])await page.selectOption('#scopeScale',span);
      await page.uncheck('#chI');await page.check('#chI');
      await page.locator('#time').focus();const before=await page.locator('#time').inputValue();await page.keyboard.press('ArrowRight');assert.notEqual(await page.locator('#time').inputValue(),before);
      const [download]=await Promise.all([page.waitForEvent('download'),page.click('#export')]);
      const csv=fs.readFileSync(await download.path(),'utf8').trim().split('\n');assert.equal(csv.length,5);
      const header=csv[0].split(','),records=csv.slice(1).map(l=>Object.fromEntries(l.split(',').map((v,i)=>[header[i],v])));
      for(const r of records){assert(Math.abs(+r.UC_J + +r.UL_J - +r.U_J)<1e-12);assert(Math.abs(+r.VC_V + +r.VR_V + +r.VL_V)<1e-9);}
      const [trace]=await Promise.all([page.waitForEvent('download'),page.click('#exportTrace')]);assert.equal(fs.readFileSync(await trace.path(),'utf8').trim().split('\n').length,1002);
      await page.click('#reset');assert.equal(await page.locator('#rows tr').count(),0);
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'horizontal overflow');
      assert.deepEqual(errors,[]);
      await page.screenshot({path:path.join(out,`${name}-rlc-${mobile?'phone':'desktop'}.png`),fullPage:true});
      console.log('PASS RLC controls, keyboard, notebook, CSV, trace export, layout',mobile?'phone dark':'desktop light');
      await page.goto(base+'/demos/gauss-law.html');
      await page.waitForFunction(()=>window.__gl&&window.__gl.num!==null);
      assert.equal(await page.evaluate(()=>window.__gl.running),false);
      for(const shape of ['sphere','box','cyl','free']){
        await page.click(`[data-s="${shape}"]`);
        await page.waitForFunction(()=>window.__gl.num&&Math.abs(window.__gl.num.total-2e-9/8.8541878188e-12)<1e-4);
      }
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Gauss horizontal overflow');
      assert.deepEqual(errors,[]);await page.screenshot({path:path.join(out,`${name}-gauss-${mobile?'phone':'desktop'}.png`),fullPage:true});
      console.log('PASS existing Gauss shape controls, numerical readout and layout',mobile?'phone dark':'desktop light');
      await page.goto(base+'/demos/faraday.html');await page.waitForFunction(()=>window.__fd&&window.__fd.circ);
      assert.equal(await page.evaluate(()=>window.__fd.running),false);
      await page.click('[data-p="gen"]');await page.click('#labStep');
      await page.fill('#labDuration','0.1');await page.click('#labAdvance');await page.click('#labCapture');
      const fg=await page.evaluate(()=>({t:window.__fd.W.t,phi:window.__fd.circ.phi,emf:window.__fd.circ.emf,ke:window.__fd.W.ke}));
      assert(Math.abs(fg.t-.101)<1e-12);assert(Math.abs(fg.phi-.002*Math.cos(6.3*fg.t))<1e-12);
      const expected=-100*.002*(Math.cos(6.3*fg.t)-Math.cos(6.3*(fg.t-.001)))/.001;
      assert(Math.abs(fg.emf-expected)<1e-10);
      const [ftrace]=await Promise.all([page.waitForEvent('download'),page.click('#labTrace')]);
      const ftext=fs.readFileSync(await ftrace.path(),'utf8');assert.equal(ftext.trim().split('\n').filter(l=>!l.startsWith('#')).length,103);assert.match(ftext,/^# demo version,faraday@/m);assert(ftext.includes('interval_midpoint_s'));
      await page.click('[data-p="rails"]');await page.fill('#labDuration','0.3');await page.click('#labAdvance');await page.click('#labCapture');
      const rail=await page.evaluate(()=>({emf:window.__fd.circ.emf,I:window.__fd.circ.I}));assert(Math.abs(rail.emf+.2)<1e-10);assert(Math.abs(rail.I+.2/.47)<1e-10);
      const [fcsv]=await Promise.all([page.waitForEvent('download'),page.click('#labExport')]);assert.equal(fs.readFileSync(await fcsv.path(),'utf8').trim().split('\n').filter(l=>!l.startsWith('#')).length,3);
      await page.click('[data-p="gen"]');assert.equal(await page.evaluate(()=>window.__fd.W.ke),0);
      assert.equal(await page.locator('#mPk').isVisible(),false);await page.uncheck('#labBlind');assert.equal(await page.locator('#mPk').isVisible(),true);
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Faraday horizontal overflow');assert.deepEqual(errors,[]);
      await page.screenshot({path:path.join(out,`${name}-faraday-${mobile?'phone':'desktop'}.png`),fullPage:true});
      console.log('PASS Faraday deterministic stepping, generator/rail readings, CSV, reset, theory hiding and layout',mobile?'phone dark':'desktop light');
      await page.goto(base+'/demos/capacitors.html');await page.waitForFunction(()=>window.__cap);
      await page.click('[data-p="apartV"]');await page.evaluate(()=>window.__cap.setRunning(false));
      const cap0=await page.evaluate(()=>window.__cap.state());
      await page.locator('#sD').evaluate(el=>{el.value='2';el.dispatchEvent(new Event('input',{bubbles:true}));});
      const cap1=await page.evaluate(()=>window.__cap.state());
      assert(Math.abs(cap1.C/cap0.C-.5)<1e-10);assert.equal(cap1.V,cap0.V);
      await page.click('[data-p="apartQ"]');await page.evaluate(()=>window.__cap.setRunning(false));
      await page.locator('#sD').evaluate(el=>{el.value='2';el.dispatchEvent(new Event('input',{bubbles:true}));});
      const capQ=await page.evaluate(()=>window.__cap.state());assert(Math.abs(capQ.V-200)<1e-8);
      assert(!/NaN|Infinity/.test(await page.locator('#meas').innerText()));
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));assert.deepEqual(errors,[]);
      console.log('PASS capacitor fixed voltage/charge controls and layout',mobile?'phone':'desktop');
      await page.goto(base+'/demos/ac-circuits.html');await page.waitForFunction(()=>window.__ac);
      assert.equal(await page.evaluate(()=>window.__ac.running),false);
      await page.click('[data-p="below"]');await page.click('#toF0');
      const ac=await page.evaluate(()=>({Z:window.__ac.c.Z,R:window.__ac.c.R,phi:window.__ac.c.phi}));
      assert(Math.abs(ac.Z-ac.R)<1e-8);assert(Math.abs(ac.phi)<1e-8);
      await page.click('#modeSeg [data-m="trans"]');
      const initial=await page.evaluate(()=>window.__ac.stateNow());assert(Math.abs(initial.i)<1e-8);
      assert(!/NaN|Infinity/.test(await page.locator('#mZ').innerText()));
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));assert.deepEqual(errors,[]);
      console.log('PASS AC exact resonance and transient controls and layout',mobile?'phone':'desktop');
      await page.close();
    }
  }finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
