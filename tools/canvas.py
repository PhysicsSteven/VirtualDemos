#!/usr/bin/env python3
"""Build Canvas course import files (IMS Common Cartridge 1.3, .imscc), one per course or module, from
curriculum/textbook-map.json and curriculum/catalog.json, the same data as the course pages (tools/courses.py).

    python3 tools/canvas.py                 # write _build/canvas/<course>.imscc for every course and module
    python3 tools/canvas.py --out DIR       # write them to DIR instead
    python3 tools/canvas.py --only thermo   # one course

Each file holds one Canvas module per unit, in course page order, and in each module, for every demo card on that unit
of the course page: a link to the demo, a link to each of its handouts ("Worksheet: <topic>", as on the course page),
an assignment for each handout ("Hand in: <topic>") that takes the PDF and CSV the worksheet exports, and a link to the demo's notes.
A demo that the course page shows as a card in an earlier unit gets only its demo link in a later one, so each
worksheet assignment appears once. Everything points to the public site: no keys, guides or other TeacherKeys material.

Identifiers come from the course, unit and demo names, so a rebuilt file imported again into the same Canvas course
updates the items it imported before instead of adding copies, and the archive is byte for byte the same when the
data has not changed. Assignments import unpublished, with 10 points (Steve sets the points and publishes in Canvas).
"""
import argparse
import hashlib
import html
import io
import json
import re
import sys
import zipfile
from pathlib import Path
from xml.sax.saxutils import escape, quoteattr

sys.path.insert(0, str(Path(__file__).resolve().parent))
import courses as C   # noqa: E402  (course data helpers: HANDOUT_TOPIC, handout_label, index_cards, sec_key, ...)

ROOT = C.ROOT
SITE = 'https://physicssteven.github.io/VirtualDemos/'
POINTS = 10
EXTENSIONS = 'pdf,csv'   # the worksheet's exports: "Print or save as PDF" and the data tables as CSV
STAMP = (2026, 1, 1, 0, 0, 0)   # fixed zip entry time, so an unchanged course rebuilds to the same bytes

NS_CP = 'http://www.imsglobal.org/xsd/imsccv1p3/imscp_v1p1'
NS_LOMM = 'http://ltsc.ieee.org/xsd/imsccv1p3/LOM/manifest'
NS_WL = 'http://www.imsglobal.org/xsd/imsccv1p3/imswl_v1p3'
NS_AS = 'http://www.imsglobal.org/xsd/imscc_extensions/assignment'
NS_CANVAS = 'http://canvas.instructure.com/xsd/cccv1p0'
NS_XSI = 'http://www.w3.org/2001/XMLSchema-instance'
SCHEMAS = {
    NS_CP: 'http://www.imsglobal.org/profile/cc/ccv1p3/ccv1p3_imscp_v1p2_v1p0.xsd',
    NS_LOMM: 'http://www.imsglobal.org/profile/cc/ccv1p3/LOM/ccv1p3_lommanifest_v1p0.xsd',
    NS_WL: 'http://www.imsglobal.org/profile/cc/ccv1p3/ccv1p3_imswl_v1p3.xsd',
    NS_AS: 'http://www.imsglobal.org/profile/cc/cc_extensions/cc_extresource_assignmentv1p0_v1p0.xsd',
}
WL_TYPE, AS_TYPE = 'imswl_xmlv1p3', 'assignment_xmlv1p0'
HEAD = '<?xml version="1.0" encoding="UTF-8"?>\n'


def ident(*parts):
    """A stable XML ID (an NCName) for a course item."""
    return 'i' + hashlib.sha1('/'.join(parts).encode()).hexdigest()[:24]


def plain(s):
    return html.unescape(re.sub(r'<[^>]+>', '', s))


def course_items(course, m, cards, notes):
    """[(unit, [item])] for one course in course page order. An item is ('link', title, url) or
    ('assignment', title, handout, demo title, demo url)."""
    secs = {(s['vol'], s['sec']): s for s in m['sections']}
    demos = {d['demo']: d for d in m['demos']}
    activities = {a['id']: a for a in m.get('activities', [])}
    cid = course['id']
    # as on the course page: a standalone worksheet already linked from a demo card gets no item of its own
    on_cards = {h for u in course['units'] for x in u['sections'] for d in secs[(x['vol'], x['sec'])]['demos']
                if d in demos and cid in demos[d]['course'] and d in cards for h in demos[d].get('handouts', [])}
    seen, out = set(), []
    for u in [u for u in course['units'] if not u.get('schedule')]:   # a folded course's schedule has its own file (build)
        us = sorted((secs[(x['vol'], x['sec'])] for x in u['sections']), key=C.sec_key)
        names = []
        for d in [d for s in us for d in s['demos']] + u.get('demos', []):
            if d not in names and d in demos and cid in demos[d]['course'] and d in cards:
                names.append(d)
        items = []
        for n in names:
            title, url = plain(cards[n]['title']), f'{SITE}demos/{n}.html?course={cid}'   # the demo lists this course's worksheets
            items.append(('link', f'Demo: {title}', url))
            if n in seen:
                continue
            seen.add(n)
            hs = C.course_handouts(cid, demos[n])
            for i, h in enumerate(hs, 1):
                label = C.handout_label(h, i if len(hs) > 1 else None)
                items.append(('link', label, f'{SITE}curriculum/labs/students/{h}.html'))
                items.append(('assignment', label, h, title, url))   # titled "Hand in: <topic>", so it differs from the link
            if n in notes:
                items.append(('link', f'Notes: {title}', f'{SITE}notes/{n}.html'))
        for a in dict.fromkeys([a for s in us for a in s.get('activities', [])] + u.get('activities', [])):   # unit.activities: no textbook section
            act = activities.get(a)
            if not act or cid not in act['course'] or set(act.get('handouts', [])) <= on_cards or a in seen:
                continue
            seen.add(a)
            href = SITE + act['url'].removesuffix('.md') + '.html'
            if act['kind'] == 'worksheet':
                label = C.handout_label(a)
                items.append(('link', label, href))
                items.append(('assignment', label, a, None, None))
            else:
                items.append(('link', f'Reading: {C.HANDOUT_TOPIC[a]}', href))
        out.append((u, items))
    return out


def weblink_xml(title, url):
    return (HEAD + f'<webLink xmlns="{NS_WL}" xmlns:xsi="{NS_XSI}" xsi:schemaLocation="{NS_WL} {SCHEMAS[NS_WL]}">\n'
            f'  <title>{escape(title)}</title>\n'
            f'  <url href={quoteattr(url)} target="_blank"/>\n</webLink>\n')


def assignment_xml(aid, label, handout, demo_title, demo_url):
    name = f'Hand in: {C.HANDOUT_TOPIC[handout]}'
    sheet = f'{SITE}curriculum/labs/students/{handout}.html'
    steps = [f'Open the handout and worksheet, <a href="{esc(sheet)}">{esc(label)}</a>.']
    if demo_url:
        steps.append(f'Do the procedure in the demo, <a href="{esc(demo_url)}">{esc(demo_title)}</a>, and send the readings to the '
                     'worksheet with Export to worksheet, or type your data into the tables.')
    else:
        steps.append('Type your data into the tables.')
    steps += ['Answer the questions on the worksheet. It saves in your browser as you type.',
              'Under Save and export, use Print or save as PDF and save a PDF, then download the data tables as CSV.',
              'Upload the PDF and the CSV here.']
    text = '<p>' + esc(label) + '</p>\n<ol>\n' + ''.join(f'<li>{s}</li>\n' for s in steps) + '</ol>'
    return (HEAD + f'<assignment xmlns="{NS_AS}" xmlns:xsi="{NS_XSI}" xsi:schemaLocation="{NS_AS} {SCHEMAS[NS_AS]}" identifier="{aid}">\n'
            f'  <title>{escape(name)}</title>\n'
            f'  <text texttype="text/html">{escape(text)}</text>\n'
            f'  <gradable points_possible="{POINTS}">true</gradable>\n'
            '  <submission_formats>\n    <format type="file"/>\n  </submission_formats>\n'
            '  <extensions>\n'
            f'    <assignment xmlns="{NS_CANVAS}" identifier="{aid}">\n'
            f'      <title>{escape(name)}</title>\n'
            '      <workflow_state>unpublished</workflow_state>\n'
            f'      <points_possible>{POINTS}</points_possible>\n'
            '      <grading_type>points</grading_type>\n'
            '      <submission_types>online_upload</submission_types>\n'
            f'      <allowed_extensions>{EXTENSIONS}</allowed_extensions>\n'
            '    </assignment>\n  </extensions>\n</assignment>\n')


def esc(s):
    return html.escape(s, quote=True)


def cartridge(course, m, cards, notes):
    """{path in the archive: text} for one course."""
    cid, title = course['id'], course['title']
    sub, lede = C.BLURB[cid]
    files, org, res = {}, [], []

    def link(key, label, url):
        rid = ident(cid, 'wl', key)
        if rid not in seen_res:
            seen_res.add(rid)
            files[f'links/{rid}.xml'] = weblink_xml(label, url)
            res.append(f'    <resource identifier="{rid}" type="{WL_TYPE}">\n      <file href="links/{rid}.xml"/>\n    </resource>')
        return rid

    seen_res = set()
    vols = sorted({x['vol'] for u in course['units'] for x in u['sections']})
    start = [(link('course-page', f'{title} course page', f'{SITE}{cid}.html'), f'{title} course page')]
    start += [(link(f'book-{v}', f'Free textbook: OpenStax {C.BOOK[v]}', C.BOOK_URL[v]), f'Free textbook: OpenStax {C.BOOK[v]}') for v in vols]
    modules = [('start', f'{title}: start here', start)]
    for u, items in course_items(course, m, cards, notes):
        rows = []
        for it in items:
            if it[0] == 'link':
                rows.append((link(it[2], it[1], it[2]), it[1]))
            else:
                _, label, h, dt, du = it
                aid = ident(cid, 'as', h)
                files[f'{aid}/assignment.xml'] = assignment_xml(aid, label, h, dt, du)
                res.append(f'    <resource identifier="{aid}" type="{AS_TYPE}">\n      <file href="{aid}/assignment.xml"/>\n    </resource>')
                rows.append((aid, f'Hand in: {C.HANDOUT_TOPIC[h]}'))
        modules.append((u['id'], u['title'], rows))

    for key, mtitle, rows in modules:
        mid = ident(cid, 'module', key)
        kids = ''.join(f'        <item identifier="{ident(cid, "item", key, str(i), rid)}" identifierref="{rid}">\n'
                       f'          <title>{escape(t)}</title>\n        </item>\n' for i, (rid, t) in enumerate(rows))
        org.append(f'      <item identifier="{mid}">\n        <title>{escape(mtitle)}</title>\n{kids}      </item>')

    loc = ' '.join(f'{ns} {SCHEMAS[ns]}' for ns in (NS_CP, NS_LOMM))
    files['imsmanifest.xml'] = (HEAD +
        f'<manifest identifier="{ident(cid, "manifest")}" xmlns="{NS_CP}" xmlns:lomimscc="{NS_LOMM}" xmlns:xsi="{NS_XSI}" xsi:schemaLocation="{loc}">\n'
        '  <metadata>\n    <schema>IMS Common Cartridge</schema>\n    <schemaversion>1.3.0</schemaversion>\n'
        '    <lomimscc:lom>\n      <lomimscc:general>\n'
        f'        <lomimscc:title><lomimscc:string language="en-US">{escape(f"{title}: Virtual Physics Demos")}</lomimscc:string></lomimscc:title>\n'
        f'        <lomimscc:description><lomimscc:string language="en-US">{escape(f"{sub}. {lede} Links to the demos, handouts and worksheets at {SITE}")}</lomimscc:string></lomimscc:description>\n'
        '      </lomimscc:general>\n'
        '      <lomimscc:rights>\n        <lomimscc:copyrightAndOtherRestrictions><lomimscc:value>yes</lomimscc:value></lomimscc:copyrightAndOtherRestrictions>\n'
        '        <lomimscc:description><lomimscc:string language="en-US">Copyright © 2026 Steven Anderson. All rights reserved.</lomimscc:string></lomimscc:description>\n'
        '      </lomimscc:rights>\n    </lomimscc:lom>\n  </metadata>\n'
        f'  <organizations>\n    <organization identifier="{ident(cid, "org")}" structure="rootcollection">\n'
        f'      <item identifier="{ident(cid, "root")}">\n'
        + '\n'.join('  ' + line for blk in org for line in blk.split('\n')) +
        '\n      </item>\n    </organization>\n  </organizations>\n'
        '  <resources>\n' + '\n'.join(res) + '\n  </resources>\n</manifest>\n')
    return files


def zip_bytes(files):
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, 'w', zipfile.ZIP_DEFLATED) as z:
        for name in ['imsmanifest.xml'] + sorted(n for n in files if n != 'imsmanifest.xml'):   # manifest first
            info = zipfile.ZipInfo(name, STAMP)
            info.compress_type, info.external_attr = zipfile.ZIP_DEFLATED, 0o644 << 16
            z.writestr(info, files[name].encode())
    return buf.getvalue()


def verify(cid, files):
    """Structure checks on one cartridge: XML parses, IDs are unique, every item points to a resource and every resource
    to a file in the archive and is used, each module has a title, and every site link names a file in this repo."""
    import xml.etree.ElementTree as ET
    errs = []
    for name, text in files.items():
        try:
            ET.fromstring(text.encode())
        except ET.ParseError as e:
            errs.append(f'{name}: {e}')
    if errs:
        return errs
    man = ET.fromstring(files['imsmanifest.xml'].encode())
    q = lambda t: f'{{{NS_CP}}}{t}'
    ids = [e.get('identifier') for e in man.iter() if e.get('identifier') and e.tag in (q('item'), q('resource'), q('organization'), q('manifest'))]
    errs += [f'duplicate identifier {i}' for i in sorted({i for i in ids if ids.count(i) > 1})]
    errs += [f'identifier not an NCName: {i}' for i in ids if not re.fullmatch(r'[A-Za-z_][\w.-]*', i)]
    if man.findtext(f'{q("metadata")}/{q("schema")}') != 'IMS Common Cartridge' or man.findtext(f'{q("metadata")}/{q("schemaversion")}') != '1.3.0':
        errs.append('metadata does not declare IMS Common Cartridge 1.3.0')
    res = {r.get('identifier'): r for r in man.iter(q('resource'))}
    used = set()
    org = man.find(f'{q("organizations")}/{q("organization")}')
    root = org.findall(q('item'))
    if org.get('structure') != 'rootcollection' or len(root) != 1:
        errs.append('organization must be a rootcollection with one root item')
    for mod in root[0].findall(q('item')):
        if mod.get('identifierref') or not mod.findtext(q('title')):
            errs.append(f'module {mod.get("identifier")} has no title or points to a resource')
        for it in mod.findall(q('item')):
            ref = it.get('identifierref')
            if ref not in res:
                errs.append(f'item {it.get("identifier")} points to missing resource {ref}')
            if not it.findtext(q('title')):
                errs.append(f'item {it.get("identifier")} has no title')
            used.add(ref)
    for rid, r in res.items():
        fs = [f.get('href') for f in r.findall(q('file'))]
        if r.get('type') not in (WL_TYPE, AS_TYPE) or len(fs) != 1 or fs[0] not in files:
            errs.append(f'resource {rid}: bad type or file')
        if rid not in used:
            errs.append(f'resource {rid} is not in any module')
    for name, text in files.items():
        for url in re.findall(r'(?:href=|&lt;a href=&quot;|href=")["\']?(https?://[^"\'&<> ]+)', text):
            url = url.split('?')[0]
            if url.startswith(SITE) and not (ROOT / url[len(SITE):]).with_suffix('').with_suffix('.html').exists() \
                    and not (ROOT / url[len(SITE):].removesuffix('.html')).with_suffix('.md').exists():
                errs.append(f'{name}: link to a page that is not in the repo: {url}')
    return errs


def build(only=None):
    m = C.load_map()
    cards = C.index_cards()
    notes = {p.stem for p in (ROOT / 'notes').glob('*.html')}
    out = {c['id']: cartridge(c, m, cards, notes) for c in m['courses'] if not only or c['id'] in only}
    # a course folded into another on the site (courses.py MERGED: Astro 2203 into Astronomy) keeps its own file, in its own
    # schedule order, for importing into that class's Canvas course; its links still open the demos with ?course=<its id>
    orig = json.loads(C.MAP.read_text())
    for c in m.get('_merged_from', []):
        if not only or c['id'] in only:
            out[c['id']] = cartridge(c, orig, cards, notes)
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n\n')[0])
    ap.add_argument('--out', default=str(ROOT / '_build' / 'canvas'))
    ap.add_argument('--only', nargs='*')
    a = ap.parse_args()
    out = Path(a.out)
    out.mkdir(parents=True, exist_ok=True)
    for cid, files in build(a.only).items():
        p = out / f'virtualdemos-{cid}.imscc'
        errs = verify(cid, files)
        if errs:
            sys.exit('\n'.join([f'{cid}: {e}' for e in errs]))
        p.write_bytes(zip_bytes(files))
        n_as = sum(1 for k in files if k.endswith('/assignment.xml'))
        print(f'wrote {p}  ({n_as} worksheet assignments, {len(files) - n_as - 1} links)')


if __name__ == '__main__':
    main()
