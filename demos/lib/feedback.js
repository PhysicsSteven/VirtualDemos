/* VirtualDemos student feedback (demos/lib/feedback.js). © 2026 Steven Anderson. All rights reserved.
   Steve 2026-11-20, for his Astro class from Dec 2: a small Feedback button on every demo and student worksheet. It opens Steve's
   own Google Form in a new tab, with the page, the language and the kind of device already filled in, so a student types only
   what confused them or what broke. Answers go to a Google Sheet in Steve's Drive; nothing is stored on this site.
   Loaded by demos/lib/theme.js on demo pages (demos/<name>.html) and student worksheets (curriculum/labs/students/), nowhere else.
     demos       a "Feedback" link in the course line on top, beside Previous and Next (a speech bubble icon on phones)
     worksheets  a "Feedback" link at the right of the site line on top, and one line at the end of the worksheet
   With no form address below, nothing is shown. ?feedback=preview shows the button with a stand in address, to check the layout. */
(function () {
  'use strict';

  /* ===== Steve's Google Form: the one place to change =====
     url: the form's address, ending in /viewform.
     page, lang, device: the entry numbers of the three questions filled in for the student, from the form's prefilled link
     (in the form's ⋮ menu, Get prefilled link; each answer shows up in the link as entry.<number>=<answer>). */
  var FORM = {
    url: '',
    page: '',
    lang: '',
    device: ''
  };

  if (window.VDFeedback) return;
  var path = location.pathname.replace(/\/index\.html$/, '/');
  var demo = /\/demos\/([\w-]+)\.html$/.exec(path), sheet = /\/curriculum\/labs\/students\/([\w-]+)(?:\.html)?\/?$/.exec(path);
  if (!demo && !sheet) return;
  var preview = /[?&]feedback=preview\b/.test(location.search);
  if (!FORM.url && !preview) return;
  var form = FORM.url ? FORM : { url: 'https://docs.google.com/forms/d/e/PREVIEW/viewform', page: 'entry.1', lang: 'entry.2', device: 'entry.3' };
  /* text goes through VDI18N.t so tools/i18n.cjs common finds it (demos/lib/i18n.md); without i18n.js, the English as it is */
  var VDI18N = window.VDI18N && window.VDI18N.t ? window.VDI18N : { t: function (s) { return s; } };

  /* what is filled in: the page as the site names it (with its setup in the address, without the language), its title, the
     language shown, and the device in a few words. No name, address or anything else about the student. */
  function pageName() {
    var q = location.search.replace(/^\?/, '').split('&').filter(function (x) { return x && !/^(lang|feedback)=/.test(x); }).join('&');
    var where = demo ? 'demos/' + demo[1] + '.html' : 'worksheet ' + sheet[1];
    var title = (document.querySelector('h1') || {}).textContent || document.title || '';
    return (title.trim() ? title.trim().replace(/\s+/g, ' ') + ' (' + where + ')' : where) + (q ? ' ?' + q : '');
  }
  function device() {
    var ua = navigator.userAgent || '', mm = function (q) { return !!(window.matchMedia && matchMedia(q).matches); };
    var touch = mm('(pointer: coarse)'), fine = mm('(any-pointer: fine)'), small = Math.min(screen.width || 0, screen.height || 0);
    var ipad = /iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
    var kind = /iPhone|Android.+Mobile/.test(ua) || (touch && small && small < 600) ? 'Phone' : ipad || /Android/.test(ua) || (touch && !fine) ? 'Tablet' : 'Computer';
    var os = /iPhone|iPod/.test(ua) ? 'iOS' : ipad ? 'iPadOS' : /Android/.test(ua) ? 'Android' : /CrOS/.test(ua) ? 'ChromeOS' : /Windows/.test(ua) ? 'Windows'
      : /Mac OS X/.test(ua) ? 'macOS' : /Linux/.test(ua) ? 'Linux' : 'other system';
    var br = /Edg(e|A|iOS)?\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /Firefox|FxiOS/.test(ua) ? 'Firefox' : /SamsungBrowser/.test(ua) ? 'Samsung Internet'
      : /Chrome|CriOS/.test(ua) ? 'Chrome' : /Safari/.test(ua) ? 'Safari' : 'other browser';
    return kind + ', ' + os + ', ' + br + ', window ' + window.innerWidth + ' × ' + window.innerHeight +
      (location.protocol === 'file:' ? ', offline copy' : '');
  }
  function lang() { return (window.VDI18N && VDI18N.lang) || document.documentElement.lang || 'en'; }
  function href() {
    var p = [['usp', 'pp_url'], [form.page, pageName()], [form.lang, lang()], [form.device, device()]].filter(function (x) { return x[0]; });
    return form.url + (form.url.indexOf('?') < 0 ? '?' : '&') + p.map(function (x) { return x[0] + '=' + encodeURIComponent(x[1]); }).join('&');
  }
  /* a plain link, so it opens in a new tab and works with the keyboard; its address is worked out when it is pressed */
  function link(cls, text, title) {
    var a = document.createElement('a');
    a.className = cls; a.target = '_blank'; a.rel = 'noopener'; a.href = form.url;
    a.title = title; a.setAttribute('data-vd-noshare', '');
    var fresh = function () { a.href = href(); };
    ['pointerdown', 'focus', 'click', 'contextmenu'].forEach(function (e) { a.addEventListener(e, fresh); });
    if (text) a.appendChild(document.createTextNode(text));
    return a;
  }
  var BUBBLE = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 3.5h11v7h-6l-3 2.6v-2.6h-2z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M5.5 6.4h5M5.5 8.2h3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>';
  var TITLE = VDI18N.t('Tell us what was confusing or what did not work on this page (opens a short form)');

  /* on a demo: a text link in the course line on top (beside Previous and Next), where there is room on every demo; the header
     row of buttons is full on many demos, and one more button there pushed the picture down. A demo with no course line gets an
     icon with the header icons instead. */
  function demoButton() {
    if (document.getElementById('vdFeedback')) return;
    var nav = document.querySelector('nav.vd-crumbs'), a;
    if (nav) {
      a = link('vd-feedback-nav', '', TITLE); a.id = 'vdFeedback';
      a.innerHTML = BUBBLE + '<span class="vd-fb-t">' + VDI18N.t('Feedback') + '</span>';
      var step = nav.querySelector('.vd-step');
      if (step) step.insertBefore(a, step.firstChild); else nav.appendChild(a);
    } else {
      var proj = document.getElementById('proj'); if (!proj) return;
      a = link('proj vd-hbtn vd-icon vd-feedback', '', TITLE); a.id = 'vdFeedback';
      a.innerHTML = BUBBLE;
      var at = document.getElementById('vdDownload') || document.getElementById('vdPrefs');
      if (at) at.insertAdjacentElement('beforebegin', a); else proj.insertAdjacentElement('afterend', a);
    }
    a.setAttribute('aria-label', VDI18N.t('Feedback (opens a form in a new tab)'));
  }
  function sheetLinks() {
    var md = document.querySelector('.markdown-body'); if (!md || document.getElementById('vdFeedback')) return;
    var top = link('vd-feedback-ws', '', TITLE); top.id = 'vdFeedback';
    top.innerHTML = BUBBLE + '<span>' + VDI18N.t('Feedback') + '</span>';
    top.setAttribute('aria-label', VDI18N.t('Feedback (opens a form in a new tab)'));
    var site = md.querySelector('p.ws-site');
    if (site) site.appendChild(top); else { var p = document.createElement('p'); p.className = 'ws-site'; p.appendChild(top); md.insertBefore(p, md.firstChild); }
    var end = document.createElement('p'); end.className = 'vd-feedback-end';
    end.appendChild(document.createTextNode(VDI18N.t('Is something on this worksheet or its demo confusing, or not working?') + ' '));
    end.appendChild(link('', VDI18N.t('Tell us in a short form'), TITLE));
    end.appendChild(document.createTextNode('.'));
    md.appendChild(end);
  }
  var CSS = '.proj.vd-feedback{text-decoration:none;color:inherit}' +
    '.vd-crumbs a.vd-feedback-nav{display:inline-flex;align-items:center;gap:4px;white-space:nowrap}.vd-crumbs a.vd-feedback-nav svg{width:14px;height:14px;flex:none;margin:-3px 0}' +
    '@media (max-width:640px){.vd-crumbs a.vd-feedback-nav{padding:8px;margin:-8px -4px}.vd-crumbs a.vd-feedback-nav .vd-fb-t{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}}' +
    '.markdown-body a.vd-feedback-ws{margin-left:1.2em;display:inline-flex;white-space:nowrap;vertical-align:baseline;align-items:center;gap:5px;font-weight:600;font-size:0.95em;line-height:1}' +
    '.markdown-body a.vd-feedback-ws svg{width:15px;height:15px;margin:-3px 0}' +
    '.markdown-body p.vd-feedback-end{margin-top:2em;padding-top:0.8em;border-top:1px solid var(--hd-line,#d0d7de);font-size:0.95em}' +
    '@media print{.proj.vd-feedback,a.vd-feedback-ws,p.vd-feedback-end{display:none!important}}';
  function style() {
    if (document.getElementById('vd-feedback-css')) return;
    var s = document.createElement('style'); s.id = 'vd-feedback-css'; s.textContent = CSS; document.head.appendChild(s);
  }
  function start() {
    style();
    if (sheet) { sheetLinks(); return; }
    /* nav.js writes the course line while the page loads; after the load event it is there if the demo has one */
    if (document.readyState === 'complete') demoButton(); else window.addEventListener('load', function () { setTimeout(demoButton, 0); });
  }
  window.VDFeedback = { href: href, form: FORM };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(start, 0); }); else setTimeout(start, 0);
})();
