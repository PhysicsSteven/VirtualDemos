#!/usr/bin/env python3
"""Put a Readings section (Record reading, Export to worksheet, Clear and a table of the rows) in a demo's sidebar.

    python3 tools/readings_panel.py <demo> <worksheet slug> "<Demo title>"

The demo supplies the readings: its script sets
    window.vdReadingRow = () => ({ column: value, ... })   the current reading, or a string to show instead (why nothing can be recorded)
and may set
    window.vdShowCols = ['column' or ['column', 'label'], ...]   the columns the sidebar table shows (default: the first four)
    window.vdWorksheet = () => 'slug'                      a different worksheet for the current reading (default: the one given here)
    window.vdVersion = 'demo@date'                         written into the CSV
The CSV columns are 'row' and then every key the rows use, in the order they first appear; the worksheet's FROM_DEMO map picks
them by name. Clear starts a new series, so the next export goes into a new copy of the worksheet's table. The section goes before
the Lab section (or at the end of the sidebar), between <!-- vd-readings --> markers, and running the tool again replaces it.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

SCRIPT = r"""(function(sec){var ws=sec.dataset.ws,title=sec.dataset.title,demo=sec.dataset.demo,rows=[],series=0,q=function(s){return sec.querySelector(s);};
function cols(){var c=[];rows.forEach(function(r){Object.keys(r).forEach(function(k){if(c.indexOf(k)<0)c.push(k);});});return c;}
function cell(v){var s=v==null?'':String(v);return /[",\n]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s;}
function csv(){var c=cols(),L=['# '+title+' virtual apparatus: recorded readings (simulated data)','# demo version,'+(window.vdVersion||'')];L.push(['row'].concat(c).join(','));rows.forEach(function(r,i){L.push([i+1].concat(c.map(function(k){return r[k];})).map(cell).join(','));});return L.join('\n')+'\n';}
function say(m){q('.status').textContent=m;}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(ch){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch];});}
function render(){var show=(window.vdShowCols||cols().slice(0,4)).map(function(k){return typeof k==='string'?[k,k]:k;}),t=q('table');t.tHead.innerHTML='<tr><th>#</th>'+show.map(function(k){return'<th>'+esc(k[1])+'</th>';}).join('')+'<th><span class="sr">Delete</span></th></tr>';
t.tBodies[0].innerHTML=rows.length?rows.map(function(r,i){return'<tr><td>'+(i+1)+'</td>'+show.map(function(k){return'<td>'+esc(r[k[0]])+'</td>';}).join('')+'<td><button type="button" class="vd-del" data-del="'+i+'" aria-label="Delete row '+(i+1)+'">×</button></td></tr>';}).join(''):'<tr><td colspan="'+(show.length+2)+'">No readings yet.</td></tr>';}
q('.vd-rec').addEventListener('click',function(){var r=typeof window.vdReadingRow==='function'?window.vdReadingRow():null;if(!r){say('Nothing to record here.');return;}if(typeof r==='string'){say(r);return;}if(!series)series=Date.now();rows.push(r);render();say('Row '+rows.length+' recorded.');});
q('.vd-clear').addEventListener('click',function(){rows=[];series=Date.now();render();say('Readings cleared.');});
q('table').addEventListener('click',function(e){var b=e.target.closest('[data-del]');if(b){rows.splice(+b.dataset.del,1);render();}});
q('.vd-export').addEventListener('click',function(){if(!rows.length){say('No readings to export.');return;}var slug=typeof window.vdWorksheet==='function'?window.vdWorksheet():ws,txt=csv(),name=slug+'-readings.csv',c=cols();
var hand={v:1,demo:demo,series:series,sent:new Date().toISOString(),columns:['row'].concat(c),rows:rows.map(function(r,i){return[String(i+1)].concat(c.map(function(k){return r[k]==null?'':String(r[k]);}));}),note:'Simulated data from the '+title+' demo.',csv:txt,csvName:name};
try{localStorage.setItem('vd-handoff:'+slug,JSON.stringify(hand));}catch(_){try{var u=URL.createObjectURL(new Blob([txt],{type:'text/csv'})),a=document.createElement('a');a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u);},1000);}catch(_){}say('This browser blocks storage, so the readings were saved as a CSV file instead.');return;}
say(rows.length+' reading'+(rows.length===1?'':'s')+' sent to the worksheet. ');var l=document.createElement('a');l.href='../curriculum/labs/students/'+slug+'.html';l.target=slug+'-worksheet';l.textContent='Open the worksheet';l.style.color='var(--accent)';q('.status').appendChild(l);});
window.vdReadings=function(){return rows.length;};render();})(document.currentScript.previousElementSibling);"""

STYLE = ('<style>.vd-readings .vd-del{font:inherit;background:none;border:0;color:var(--muted);cursor:pointer;padding:0 4px}'
         '.vd-readings .twrap{margin-top:6px}</style>')


def block(ws, title, demo):
    return (f'<!-- vd-readings --><section class="vd-readings" data-ws="{ws}" data-title="{title}" data-demo="{demo}">\n'
            '        <h2>Readings</h2>\n'
            '        <div class="btnrow"><button type="button" class="btn primary vd-rec">Record reading</button>'
            '<button type="button" class="btn vd-export">Export to worksheet</button><button type="button" class="btn vd-clear">Clear</button></div>\n'
            '        <p class="status" aria-live="polite"></p>\n'
            '        <div class="twrap"><table class="rows"><caption class="sr">Recorded readings</caption><thead></thead><tbody></tbody></table></div>\n'
            f'      </section><script>{SCRIPT}</script>{STYLE}<!-- /vd-readings -->\n')


def main():
    demo, ws, title = sys.argv[1], sys.argv[2], sys.argv[3]
    p = ROOT / 'demos' / f'{demo}.html'
    s = p.read_text()
    s = re.sub(r'      <!-- vd-readings -->.*?<!-- /vd-readings -->\n', '', s, flags=re.S)
    new = '      ' + block(ws, title, demo)
    lab = re.search(r'\n(      <section>\s*(<details class="fold"><summary>Lab</summary>|<h2>Lab</h2>))', s)
    at = lab.start(1) if lab else s.index('    </aside>')
    s = s[:at] + new + s[at:]
    p.write_text(s)
    print(demo, '->', ws, 'before Lab' if lab else 'at the end of the sidebar')


if __name__ == '__main__':
    main()
