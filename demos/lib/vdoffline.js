/* VirtualDemos offline copies (demos/lib/vdoffline.js). © 2026 Steven Anderson. All rights reserved.
   Download for offline use (Steve 2026-11-16): one zip file that runs with no internet, from a double click once it is unzipped.
   Nothing is stored or built ahead of time: the zip is put together in the browser from the site as it is at that moment, so
   every later change to a demo, worksheet or video is in the next download by itself.

     VDOffline.demo()              the zip for the demo on this page: the demo, its worksheets, their How this works videos
     VDOffline.course(title)       the zip for the course page this is on: every demo, worksheet and notes page it links to
     VDOffline.dialog(kind)        the popup with the explanation and the Download button (vd.js opens it from the header
                                   button on a demo, a course page from its "Download this course" button)
     VDOffline.pack(entries, o)    the engine, for tests: resolves to { name, files: [{ path, data }] }; VDOffline.zip(files) is the Blob

   What goes in. From each page it follows (the demo or course page, then the worksheets and notes pages they link to; never
   anything else, and never a key: keys are not on the site): every script, style sheet, picture and video the HTML names, the
   files a script names in quotes (vd.js loads vdtools.js that way, Solar System Formation its data), 'folder/' + name + '.js'
   data a script loads by name (Star Slice), the How this works video and still of the demo and of each worksheet (and the
   worksheet.js HOWTO_VIDEO names), each language's catalogs for each page (demos/lib/i18n/<lang>/...), and the outside
   libraries pages load from cdnjs or jsdelivr (three.js, MathJax, anchor-js), kept under vendor/. MathJax is swapped for its
   full SVG build, which needs no font files and no extension loads (a browser will not load fonts from a file:// page). Google Fonts stay online: offline
   the text falls back to the system fonts.
   The zip keeps the site's own folders, so every relative link works; links to pages not in the zip go to the live site. Each
   page gets a small script at the top of its head (OFFLINE_SHIM below): it answers the worksheet probes (fetch HEAD) that a
   file:// page cannot make, sends clicks on links to pages left out to the live site, and hides the download buttons.
   Start here.html at the top opens the demo or course page, and says to unzip first when it is opened from inside the zip.
   tools/offlinecheck.cjs builds each zip from the local site, unzips it and opens every page from file:// with the network off. */
(function () {
  'use strict';
  if (window.VDOffline) return;
  var me = document.currentScript && document.currentScript.src;
  var SITE = me ? me.replace(/demos\/lib\/vdoffline\.js([?#].*)?$/, '') : '';
  var LIVE = 'https://physicssteven.github.io/VirtualDemos/';
  var CDN = /^https:\/\/(cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net)\//;
  var RES = /\.(js|css|mp4|webm|jpg|jpeg|png|webp|svg|gif|json)$/i;
  var PAGE_PATH = /^(demos\/[a-z0-9-]+\.html|curriculum\/labs\/students\/[a-z0-9-]+\.html|notes\/[a-z0-9-]+\.html)$/;
  var t = function (s, v) { return window.VDI18N && VDI18N.t ? VDI18N.t(s, v) : s.replace(/\{(\w+)\}/g, function (m, k) { return v && k in v ? v[k] : m; }); };

  /* ---------- site paths ---------- */
  /* the path of an address inside the site ('demos/lib/vd.js'), or null for anything outside it; query and hash dropped */
  function sitePath(url) {
    var u = String(url).split('#')[0].split('?')[0];
    if (u.indexOf(SITE) === 0) return decodeURIComponent(u.slice(SITE.length)) || 'index.html';
    return null;
  }
  function vendorPath(url) { var m = String(url).split('#')[0].match(CDN); return m ? 'vendor/' + url.replace(/^https:\/\//, '').split('?')[0] : null; }
  /* MathJax's CommonHTML build loads font files, and TeX extensions (\boldsymbol) as they are met, which a file:// page cannot;
     its full SVG build draws the same math with every extension inside and no font files */
  function vendorFetch(url) { return url.replace(/(mathjax@[\d.]+\/es5\/)tex-mml-chtml\.js$/, '$1tex-svg-full.js'); }
  function rel(from, to) {
    var a = from.split('/'); a.pop(); var b = to.split('/'), i = 0;
    while (i < a.length && i < b.length - 1 && a[i] === b[i]) i++;
    var up = ''; for (var j = i; j < a.length; j++) up += '../';
    return up + b.slice(i).join('/');
  }
  function depth(path) { var n = path.split('/').length - 1, s = ''; while (n-- > 0) s += '../'; return s; }
  /* the i18n.js page name of a page (its catalogs are demos/lib/i18n/<lang>/<name>.js) */
  function pageName(path) {
    var m;
    if ((m = path.match(/^demos\/([a-z0-9-]+)\.html$/))) return 'demo/' + m[1];
    if ((m = path.match(/^curriculum\/labs\/students\/([a-z0-9-]+)\.html$/))) return 'ws/' + m[1];
    if ((m = path.match(/^notes\/([a-z0-9-]+)\.html$/)) && m[1] !== 'index') return 'notes/' + m[1];
    return 'site';
  }

  /* ---------- fetching ---------- */
  function fetcher(onProgress) {
    var got = Object.create(null), seen = Object.create(null), active = 0, waiting = [], done = 0, asked = 0;
    function slot(fn) {
      return new Promise(function (ok, no) {
        var go = function () { active++; fn().then(ok, no).then(function () { active--; if (waiting.length) waiting.shift()(); }); };
        if (active < 6) go(); else waiting.push(go);
      });
    }
    function get(url, kind) {
      if (got[url]) return got[url];
      asked++; if (onProgress) onProgress(done, asked);
      return (got[url] = slot(function () {
        return fetch(url, { credentials: 'omit' }).then(function (r) {
          if (!r.ok) return null;
          return kind === 'text' ? r.text() : r.arrayBuffer();
        }).catch(function () { return null; });
      }).then(function (v) { done++; if (onProgress) onProgress(done, asked); return v; }));
    }
    /* does a file exist? (a GET: GitHub Pages and the local server answer HEAD too, but the GET is kept for the zip anyway) */
    function exists(url) {
      if (seen[url] !== undefined) return seen[url];
      return (seen[url] = slot(function () {
        return fetch(url, { method: 'HEAD', credentials: 'omit' }).then(function (r) { return r.ok; }).catch(function () { return false; });
      }));
    }
    return { get: get, exists: exists };
  }

  /* ---------- reading a page or a script for the files it uses ---------- */
  var ATTRS = [['script', 'src'], ['link', 'href'], ['img', 'src'], ['img', 'srcset'], ['source', 'srcset'], ['source', 'src'],
    ['video', 'src'], ['video', 'poster'], ['audio', 'src'], ['image', 'href'], ['use', 'href'], ['a', 'href'], ['iframe', 'src'], ['object', 'data']];
  function srcsetUrls(v) { return v.split(',').map(function (s) { return s.trim().split(/\s+/)[0]; }).filter(Boolean); }
  function cssUrls(text) {
    var out = [], re = /url\(\s*(['"]?)([^'")]+)\1\s*\)|@import\s+(['"])([^'"]+)\3/g, m;
    while ((m = re.exec(text))) out.push(m[2] || m[4]);
    return out.filter(function (u) { return !/^(data:|#)/.test(u); });
  }
  /* names in quotes that look like files ('vdtools.js', 'solar-system-formation-data/moon.js', a CDN address), and
     'folder/' + name + '.js' loads with every quoted name in the file that could fill the gap */
  function scriptUrls(text) {
    var out = [], re = /(['"`])((?:https?:\/\/[^'"`\s]+|[\w.\/-]*[\w-]\.(?:js|css|mp4|webm|jpg|jpeg|png|webp|svg|gif|json)))\1/g, m;
    while ((m = re.exec(text))) if (!/\$\{/.test(m[2])) out.push(m[2]);
    var pre = /(['"])([\w.-]+(?:\/[\w.-]+)*\/)\1\s*\+\s*[\w$.]+(?:\([^()]*\))?\s*\+\s*(['"])(\.\w+)\3/g, names = null;
    while ((m = pre.exec(text))) {
      if (!RES.test(m[4]) || /\.html$/.test(m[4])) continue;
      if (!names) { names = []; var nr = /(['"])([\w-]*[._][\w.-]*)\1/g, n; while ((n = nr.exec(text))) if (n[2].length <= 48 && /[a-z]/i.test(n[2])) names.push(n[2]); }
      names.forEach(function (nm) { out.push(m[2] + nm + m[4]); out.push(m[2] + nm); });
    }
    return out;
  }

  /* ---------- the engine ---------- */
  /* entries: site paths of the pages to start from. o.follow(path, fromPath): whether to take a linked page in too.
     o.onProgress(done, total). Resolves to { files: [{ path, data }], pages: [paths] }. */
  function pack(entries, o) {
    o = o || {};
    var F = fetcher(o.onProgress), files = Object.create(null), pages = Object.create(null), order = [];
    var langs = Object.keys((window.VDI18N && VDI18N.langs) || {}).filter(function (l) { return l !== 'en' && l !== 'qps'; });
    var vids = null, embeds = Object.create(null);
    function add(path, data) { if (!(path in files)) order.push(path); files[path] = data; }
    function want(path) { return !(path in files) && !(path in pending); }
    var pending = Object.create(null), jobs = [];
    function job(p) { jobs.push(p); return p; }

    /* a file of the site (or of a CDN) that a page or script uses: fetch it, and read it in turn if it is a script or style sheet */
    function resource(abs) {
      var p = sitePath(abs), v = p ? null : vendorPath(vendorFetch(abs));
      var key = p || v; if (!key || !want(key)) return;
      pending[key] = 1;
      var url = p ? abs.split('#')[0].split('?')[0] : vendorFetch(abs.split('#')[0]);
      var text = /\.(js|css)$/i.test(key);
      job(F.get(url, text ? 'text' : 'bin').then(function (d) {
        delete pending[key]; if (d == null) return;
        add(key, d);
        if (/\.css$/i.test(key)) cssUrls(d).forEach(function (u) { resource(new URL(u, url).href); });
        if (/\.js$/i.test(key) && p && !/vdoffline\.js$/.test(key)) scanScript(d, url);   /* (not this file: its comments name files as examples) */
      }));
    }
    /* a quoted name in a script may be relative to the script (vd.js's 'vdtools.js') or to the page that runs it (a demo's
       'star-slice-data/x.js'); keep whichever exists */
    var docBases = [];
    function scanScript(text, base) {
      scriptUrls(text).forEach(function (u) {
        if (/^https?:/.test(u)) { if (CDN.test(u)) resource(u); return; }
        [base].concat(docBases).forEach(function (b) {
          var abs; try { abs = new URL(u, b).href; } catch (_) { return; }
          var p = sitePath(abs); if (!p || !want(p) || p.indexOf('..') >= 0) return;
          job(F.exists(abs).then(function (ok) { if (ok) resource(abs); }));
        });
      });
    }
    function page(path, from) {
      if (path in pages) return; pages[path] = 1; pending[path] = 1;
      var url = SITE + path;
      var dir = url.replace(/[^/]*$/, ''); if (docBases.indexOf(dir) < 0) docBases.push(dir);
      job(F.get(url, 'text').then(function (html) {
        delete pending[path];
        if (html == null) { delete pages[path]; return; }
        add(path, html);
        var doc = new DOMParser().parseFromString(html, 'text/html');
        ATTRS.forEach(function (ta) {
          doc.querySelectorAll(ta[0] + '[' + ta[1] + ']').forEach(function (el) {
            var v = el.getAttribute(ta[1]); if (!v || /^(#|data:|mailto:|javascript:)/.test(v)) return;
            var us = /srcset/.test(ta[1]) ? srcsetUrls(v) : [v];
            us.forEach(function (u) {
              var abs; try { abs = new URL(u, url).href; } catch (_) { return; }
              var p = sitePath(abs);
              if (ta[0] === 'a') {
                if (p && PAGE_PATH.test(p) && o.follow && o.follow(p, path)) page(p, path);
                else if (p && /\.(mp4|pdf|csv|png|jpg|webp)$/i.test(p) && o.follow && o.follow(p, path)) resource(abs);
                return;
              }
              if (ta[0] === 'link' && !/stylesheet|icon/.test(el.getAttribute('rel') || '')) return;
              resource(abs);
            });
          });
        });
        doc.querySelectorAll('style').forEach(function (s) { cssUrls(s.textContent).forEach(function (u) { resource(new URL(u, url).href); }); });
        doc.querySelectorAll('script:not([src])').forEach(function (s) { scanScript(s.textContent, url); });
        /* catalogs of every language that has this page */
        var name = pageName(path);
        langs.forEach(function (l) {
          var info = VDI18N.langs[l] || {}, pg = info.pages || [];
          resource(SITE + 'demos/lib/i18n/' + l + '/common.js');
          if (pg.indexOf('site') >= 0) resource(SITE + 'demos/lib/i18n/' + l + '/site.js');
          if (pg.indexOf(name) >= 0) resource(SITE + 'demos/lib/i18n/' + l + '/' + name + '.js');
        });
        /* data a page's script fetches, which a file:// page cannot: carried inside the page (VD_OFFLINE.data). The symbol
           meanings of a worksheet or notes page (curriculum/labs/symbols.js) */
        var sm = path.match(/^(?:curriculum\/labs\/students|notes)\/([a-z0-9-]+)\.html$/);
        if (sm) {
          var sj = SITE + 'curriculum/labs/symbols/' + sm[1] + '.json';
          job(F.get(sj, 'text').then(function (d) { if (d != null) (embeds[path] = embeds[path] || {})['curriculum/labs/symbols/' + sm[1] + '.json'] = d; }));
        }
        /* How this works videos: the demo's own, each worksheet's, and the worksheet.js names that differ */
        var m = path.match(/^(?:demos|curriculum\/labs\/students)\/([a-z0-9-]+)\.html$/);
        if (m) job(videos().then(function (map) {
          [m[1], map[m[1]]].filter(Boolean).forEach(function (n) {
            ['mp4', 'jpg'].forEach(function (x) {
              var abs = SITE + 'demos/media/how-this-works/' + n + '.' + x;
              job(F.exists(abs).then(function (ok) { if (ok) resource(abs); }));
            });
          });
        }));
      }));
    }
    function videos() {
      return vids || (vids = F.get(SITE + 'curriculum/labs/worksheet.js', 'text').then(function (s) {
        var m = s && s.match(/HOWTO_VIDEO = (\{[\s\S]*?\});/), map = {};
        if (m) m[1].replace(/'([a-z0-9-]+)':\s*'([a-z0-9-]+)'/g, function (_, k, v) { map[k] = v; });
        return map;
      }));
    }
    entries.forEach(function (p) { page(p, null); });
    /* wait until no new file turns up */
    function drain() { var n = jobs.length; return Promise.all(jobs.slice()).then(function () { return jobs.length > n ? drain() : null; }); }
    return drain().then(function () {
      var pageList = order.filter(function (p) { return p in pages; });
      var out = order.map(function (p) {
        var d = files[p];
        if (p in pages) d = rewrite(d, p, files, pageList, embeds[p]);
        else if (/\.js$/.test(p)) d = rewriteScript(d);
        return { path: p, data: d };
      });
      return { files: out, pages: pageList };
    });
  }

  /* ---------- making the copies work from file:// ---------- */
  function rewriteScript(text) {
    /* an outside library a script loads by address ('https://cdnjs.../three.min.js') comes from vendor/ instead, found
       from the page through VD_OFFLINE.root (a dynamic script's address is read against the page, not the script) */
    return text.replace(/(['"])(https:\/\/(?:cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net)\/[^'"\s]+)\1/g, function (m, q, u) {
      return '((window.VD_OFFLINE && VD_OFFLINE.root) || "") + ' + q + vendorPath(u) + q;
    });
  }
  function rewrite(html, path, files, pageList, data) {
    var url = SITE + path;
    var fix = function (u, isLink) {
      if (!u || /^(#|data:|mailto:|javascript:|blob:)/.test(u)) return u;
      var abs; try { abs = new URL(u, url).href; } catch (_) { return u; }
      var hash = abs.indexOf('#') >= 0 ? abs.slice(abs.indexOf('#')) : '', q = (abs.split('#')[0].split('?')[1] || '');
      var p = sitePath(abs), v = p ? null : vendorPath(abs);
      if (v && !isLink) { v = vendorPath(vendorFetch(abs)); if (v in files) return rel(path, v); return u; }
      if (!p) return u;
      if (p in files) return rel(path, p) + (q && isLink ? '?' + q : '') + hash;
      if (p === path && hash) return hash;
      return LIVE + p + (q ? '?' + q : '') + hash;   /* not in the zip: the live site */
    };
    var swap = function (attr, isLink, multi) {
      return function (m, pre, q, v) {
        var nv = multi ? v.split(',').map(function (s) { var a = s.trim().split(/\s+/); a[0] = fix(a[0], false); return a.join(' '); }).join(', ') : fix(v.replace(/&amp;/g, '&'), isLink).replace(/&/g, '&amp;');
        return pre + q + nv + q;
      };
    };
    var out = html
      .replace(/(<a\b[^>]*?\shref=)(["'])([^"']*)\2/gi, swap('href', true))
      .replace(/(<(?:script|img|source|video|audio|iframe)\b[^>]*?\ssrc=)(["'])([^"']*)\2/gi, swap('src', false))
      .replace(/(<link\b[^>]*?\shref=)(["'])([^"']*)\2/gi, swap('href', false))
      .replace(/(<(?:img|source)\b[^>]*?\ssrcset=)(["'])([^"']*)\2/gi, swap('srcset', false, true))
      .replace(/(<video\b[^>]*?\sposter=)(["'])([^"']*)\2/gi, swap('poster', false))
      /* the theme's absolute links to the live site's own pages (Open the virtual apparatus) */
      .replace(/(\shref=)(["'])(https:\/\/physicssteven\.github\.io\/VirtualDemos\/[^"']*)\2/gi, function (m, pre, q, v) {
        var p = v.slice(LIVE.length).split(/[?#]/)[0];
        return p in files ? pre + q + rel(path, p) + v.slice(LIVE.length + p.length) + q : m;
      });
    /* a copy loads its own files: a check that the file came from the CDN unchanged (integrity, crossorigin) would block it */
    out = out.replace(/<(script|link)\b[^>]*>/gi, function (tag) {
      var m = tag.match(/\s(?:src|href)=["']([^"']*)["']/i);
      return m && !/^https?:/.test(m[1]) ? tag.replace(/\s+integrity=(["'])[^"']*\1/i, '').replace(/\s+crossorigin(=(["'])[^"']*\2)?/i, '') : tag;
    });
    var listed = Object.keys(files).filter(function (f) { return !/^demos\/lib\/i18n\//.test(f); });
    var shim = '<script>window.VD_OFFLINE = ' + JSON.stringify({ root: depth(path), live: LIVE, path: path, made: today(), pages: pageList, files: listed, data: data || {} }).replace(/<\//g, '<\\/') + ';\n' + OFFLINE_SHIM + '</script>';
    return /<head[^>]*>/i.test(out) ? out.replace(/<head[^>]*>/i, function (h) { return h + shim; }) : shim + out;
  }
  /* runs first on every page of an offline copy (it is not run on the site) */
  var OFFLINE_SHIM = '(' + function () {
    var O = window.VD_OFFLINE, base = location.href.replace(/[?#].*$/, '').replace(/[^/]*$/, '');
    var root = new URL(O.root, base).href;
    var inside = function (abs) { var p = abs.split(/[?#]/)[0]; return p.indexOf(root) === 0 ? decodeURIComponent(p.slice(root.length)) : null; };
    var inZip = function (abs) { var p = inside(abs); return p != null && O.pages.indexOf(p) >= 0; };
    /* a file:// page cannot fetch: a demo asks whether its worksheet is posted and a worksheet whether its video is there
       (fetch HEAD), answered from the list of files in the zip; data a page fetches (symbol meanings) is carried in VD_OFFLINE.data */
    if (location.protocol === 'file:' && window.fetch) {
      var f0 = window.fetch;
      window.fetch = function (u, init) {
        var abs; try { abs = new URL(typeof u === 'string' ? u : u.url, location.href).href; } catch (_) { return f0.apply(this, arguments); }
        var p = abs.indexOf('file:') === 0 ? inside(abs) : null;
        if (p != null && init && init.method === 'HEAD') return Promise.resolve(new Response(null, { status: O.files.indexOf(p) >= 0 || O.pages.indexOf(p) >= 0 ? 200 : 404 }));
        if (p != null && O.data[p] != null) return Promise.resolve(new Response(O.data[p], { status: 200, headers: { 'Content-Type': 'application/json' } }));
        return f0.apply(this, arguments);
      };
    }
    /* a link to a page that is not in this copy (another course's demo, the home page) opens it on the live site */
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest && e.target.closest('a[href]'); if (!a) return;
      var abs = a.href; if (abs.indexOf(root) !== 0 || inZip(abs) || /\.(mp4|jpg|png|webp|csv|pdf|js|css)([?#]|$)/.test(abs.split('#')[0])) return;
      if (abs.split('#')[0] === location.href.split('#')[0]) return;
      e.preventDefault(); var live = O.live + decodeURIComponent(abs.slice(root.length));
      if (a.target) window.open(live, a.target); else location.href = live;
    }, true);
    var st = document.createElement('style'); st.textContent = '#vdDownload, .vd-dl-course { display: none !important; }';
    (document.head || document.documentElement).appendChild(st);
  }.toString() + ')();';
  function today() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }

  /* ---------- Start here.html ---------- */
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function startHere(o) {
    var lang = (window.VDI18N && VDI18N.lang) || 'en';
    var li = function (p, label) { return '<li><a href="' + esc(p) + '">' + esc(label) + '</a></li>'; };
    return '<!DOCTYPE html>\n<html lang="' + lang + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
      '<title>' + esc(o.title) + ' (' + esc(t('offline copy')) + ')</title>' +
      '<style>:root { color-scheme: light dark; --bg: #f7f3ea; --ink: #2a241b; --muted: #6b6152; --accent: #a34a12; --line: #d9cfbd; }' +
      '@media (prefers-color-scheme: dark) { :root { --bg: #17140f; --ink: #ece4d6; --muted: #b3a891; --accent: #f0a060; --line: #3d352a; } }' +
      'body { margin: 0; padding: 32px 16px; font: 17px/1.5 system-ui, sans-serif; color: var(--ink); background: var(--bg); }' +
      'main { max-width: 680px; margin: 0 auto; } h1 { font-size: 1.6rem; margin: 0 0 4px; } .sub { color: var(--muted); margin: 0 0 24px; }' +
      'a { color: var(--accent); } .go { display: inline-block; padding: 12px 22px; border-radius: 10px; background: var(--accent); color: var(--bg); font-weight: 700; text-decoration: none; font-size: 1.1rem; }' +
      'ul { padding-left: 1.2em; } li { margin: 4px 0; } .note { color: var(--muted); font-size: 0.92rem; border-top: 1px solid var(--line); margin-top: 28px; padding-top: 12px; }' +
      '.warn { display: none; padding: 12px 16px; border: 2px solid var(--accent); border-radius: 10px; margin: 0 0 20px; font-weight: 600; } .unzip .warn { display: block; }</style></head>' +
      '<body><main><p class="warn">' + esc(t('Unzip this download first: right click the zip file and pick Extract All (Windows) or double click it (Mac), then open Start here.html in the new folder.')) + '</p>' +
      '<h1>' + esc(o.title) + '</h1><p class="sub">' + esc(t('VirtualDemos, offline copy saved {date}', { date: today() })) + '</p>' +
      '<p><a class="go" href="' + esc(o.open) + '">' + esc(o.openLabel) + '</a></p>' +
      (o.list.length ? '<h2>' + esc(t('In this copy')) + '</h2><ul>' + o.list.map(function (x) { return li(x[0], x[1]); }).join('') + '</ul>' : '') +
      '<p class="note">' + esc(t('Everything here works without the internet. Links to pages that are not in this copy open the live site, which also has the newest version:')) +
      ' <a href="' + LIVE + '">' + LIVE.replace(/^https:\/\//, '').replace(/\/$/, '') + '</a></p>' +
      '<p class="note">' + esc(t('© Steven Anderson. All rights reserved. You may use this copy in your own classes and give it, unchanged, to your own students. Please do not change it or pass it on to anyone else. Terms of use:')) + ' <a href="' + LIVE + 'LICENSE.html">' + esc(t('terms of use')) + '</a></p></main>' +
      /* opened from inside the zip (Windows copies just this one file out), the folders beside it are missing */
      '<script src="demos/lib/theme.js" onerror="document.documentElement.className += \' unzip\'"></script></body></html>\n';
  }

  /* ---------- zip (stored, no compression: the videos and pictures are compressed already) ---------- */
  var CRC = null;
  function crc32(u8) {
    if (!CRC) { CRC = new Uint32Array(256); for (var n = 0; n < 256; n++) { var c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; CRC[n] = c >>> 0; } }
    var x = 0xFFFFFFFF; for (var i = 0; i < u8.length; i++) x = CRC[(x ^ u8[i]) & 0xFF] ^ (x >>> 8);
    return (x ^ 0xFFFFFFFF) >>> 0;
  }
  function zip(files) {
    var enc = new TextEncoder(), parts = [], central = [], off = 0, d = new Date();
    var time = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1), date = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
    files.forEach(function (f) {
      var name = enc.encode(f.path), data = typeof f.data === 'string' ? enc.encode(f.data) : new Uint8Array(f.data), crc = crc32(data);
      var h = new DataView(new ArrayBuffer(30));
      h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true); h.setUint16(8, 0, true);
      h.setUint16(10, time, true); h.setUint16(12, date, true); h.setUint32(14, crc, true); h.setUint32(18, data.length, true);
      h.setUint32(22, data.length, true); h.setUint16(26, name.length, true); h.setUint16(28, 0, true);
      parts.push(h.buffer, name, data);
      var c = new DataView(new ArrayBuffer(46));
      c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true); c.setUint16(10, 0, true);
      c.setUint16(12, time, true); c.setUint16(14, date, true); c.setUint32(16, crc, true); c.setUint32(20, data.length, true); c.setUint32(24, data.length, true);
      c.setUint16(28, name.length, true); c.setUint32(38, 0, true); c.setUint32(42, off, true);
      central.push(c.buffer, name);
      off += 30 + name.length + data.length;
    });
    var csize = central.reduce(function (s, b) { return s + b.byteLength; }, 0);
    var e = new DataView(new ArrayBuffer(22));
    e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true);
    e.setUint32(12, csize, true); e.setUint32(16, off, true);
    return new Blob(parts.concat(central, [e.buffer]), { type: 'application/zip' });
  }

  /* ---------- the two kinds of copy ---------- */
  function here() { return sitePath(location.href) || ''; }
  /* a page's own title: the h1 with an id (a worksheet's theme puts the site name in an h1 above it), else the first h1 */
  function titleOf(html, fallback) { var m = html && (html.match(/<h1\s[^>]*\bid=[^>]*>([\s\S]*?)<\/h1>/i) || html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || html.match(/<title>([\s\S]*?)<\/title>/i)); return m ? m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/\s+/g, ' ').trim() : fallback; }
  function finish(r, folder, title, open, openLabel) {
    var byPath = {}; r.files.forEach(function (f) { byPath[f.path] = f.data; });
    var list = r.pages.filter(function (p) { return p !== open; }).map(function (p) {
      var name = titleOf(byPath[p], p);
      if (/^curriculum\//.test(p) && !/^Worksheet/.test(name)) name = t('Worksheet: {title}', { title: name });
      return [p, name];
    });
    var files = [{ path: 'Start here.html', data: startHere({ title: title, open: open, openLabel: openLabel, list: list }) }].concat(r.files);
    return { name: folder, files: files.map(function (f) { return { path: folder + '/' + f.path, data: f.data }; }) };
  }
  function slugOf(p) { return p.replace(/^.*\//, '').replace(/\.html$/, ''); }
  function demo(onProgress) {
    var p = here();
    return pack([p], { onProgress: onProgress, follow: function (q, from) { return from === p && /^curriculum\/labs\/students\//.test(q); } }).then(function (r) {
      var title = (document.querySelector('h1') || {}).textContent || document.title;
      return finish(r, 'VirtualDemos-' + slugOf(p), title.trim(), p, t('Open the demo'));
    });
  }
  function course(onProgress) {
    var p = here();
    return pack([p], { onProgress: onProgress, follow: function (q, from) {
      if (from === p) return PAGE_PATH.test(q);
      return /^demos\//.test(from) && /^curriculum\/labs\/students\//.test(q);
    } }).then(function (r) {
      var title = ((document.querySelector('main h1, h1') || {}).textContent || document.title).trim();
      var first = r.pages.filter(function (x) { return x !== p; });
      return finish({ files: r.files, pages: [p].concat(first) }, 'VirtualDemos-' + slugOf(p), title, p, t('Open the course page'));
    });
  }
  function save(pk) {
    var blob = zip(pk.files), a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = pk.name + '.zip';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 60000);
    return blob.size;
  }

  /* ---------- the popup ---------- */
  var CSS = '.vd-dl { width: min(94vw, 560px); padding: 0; color: var(--ink); background: var(--surface, var(--paper, #fff)); border: 1px solid var(--line, #ccc); border-radius: 12px; box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35); }' +
    '.vd-dl::backdrop { background: rgba(21, 17, 11, 0.66); }' +
    '.vd-dl-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 10px 14px 0; } .vd-dl-head h2 { margin: 0; font-size: 1.05rem; }' +
    '.vd-dl-x { font: inherit; font-size: 1.1rem; line-height: 1; color: var(--muted); background: none; border: 0; border-radius: 6px; padding: 6px 8px; cursor: pointer; }' +
    '.vd-dl-x:hover, .vd-dl-x:focus-visible { color: var(--ink); background: color-mix(in srgb, var(--ink) 10%, transparent); }' +
    '.vd-dl-body { padding: 4px 14px 12px; font-size: 0.95rem; line-height: 1.45; } .vd-dl-body p { margin: 8px 0; }' +
    '.vd-dl-go { font: inherit; font-weight: 700; padding: 9px 18px; color: var(--canvas, #fff); background: var(--accent); border: 0; border-radius: 9px; cursor: pointer; }' +
    '.vd-dl-go:disabled { opacity: 0.6; cursor: progress; } .vd-dl-go:focus-visible, .vd-dl-x:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }' +
    '.vd-dl-status { min-height: 1.4em; color: var(--muted); } @media print { .vd-dl { display: none; } }';
  var dlg = null;
  function dialog(kind) {
    if (!dlg) {
      var st0 = document.createElement('style'); st0.id = 'vd-dl-css'; st0.textContent = CSS; document.head.appendChild(st0);
      dlg = document.createElement('dialog'); dlg.className = 'vd-dl';
      dlg.innerHTML = '<div class="vd-dl-head"><h2></h2><button type="button" class="vd-dl-x" aria-label="Close">✕</button></div>' +
        '<div class="vd-dl-body"><p class="vd-dl-what"></p>' +
        '<p>To use it, unzip the file (on Windows, right click it and pick Extract All), then open <b>Start here.html</b> in the new folder. Nothing needs installing.</p>' +
        '<p><button type="button" class="vd-dl-go">Download</button></p><p class="vd-dl-status" role="status" aria-live="polite"></p></div>';
      dlg.querySelector('.vd-dl-x').addEventListener('click', function () { dlg.close(); });
      dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
      document.body.appendChild(dlg);
    }
    var go = dlg.querySelector('.vd-dl-go'), st = dlg.querySelector('.vd-dl-status');
    dlg.querySelector('h2').textContent = kind === 'course' ? 'Download this course' : 'Download for offline use';
    dlg.querySelector('.vd-dl-what').textContent = kind === 'course'
      ? 'Saves every demo, worksheet and notes page on this course page, with the How this works videos, in one zip file that works without the internet. It is a large file: it can take a few minutes.'
      : 'Saves this demo, its worksheets and their How this works videos in one zip file that works without the internet.';
    go.onclick = function () {
      go.disabled = true; st.textContent = 'Collecting the files…';
      (kind === 'course' ? course : demo)(function (d, n) { st.textContent = t('Collecting the files: {done} of {total}', { done: d, total: n }); }).then(function (pk) {
        var mb = save(pk) / 1048576;
        st.textContent = t('Done ({size} MB). Look in your Downloads folder.', { size: window.VDI18N ? VDI18N.num(mb, 1) : mb.toFixed(1) });
        go.disabled = false;
      }).catch(function (e) {
        if (window.console) console.error(e);
        st.textContent = 'The download did not finish. Check the connection and try again.'; go.disabled = false;
      });
    };
    st.textContent = ''; dlg.showModal();
  }

  window.VDOffline = { demo: demo, course: course, dialog: dialog, pack: pack, zip: zip, crc32: crc32, rel: rel, scriptUrls: scriptUrls };
  /* a page that asked before this file arrived (vd.js loads it on the first press) */
  if (window.VDOfflineAsk) { var k = window.VDOfflineAsk; window.VDOfflineAsk = null; dialog(k); }
})();
