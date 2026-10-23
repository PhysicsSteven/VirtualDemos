#!/usr/bin/env python3
"""Render card thumbnails for index.html.

Opens every demos/*.html in headless Chromium at 1440 x 900, lets it draw (and
run for a moment if it animates), crops the demo's main stage, and saves
thumbs/<name>-light.webp and thumbs/<name>-dark.webp at 640 x 400.

Usage:
    python3 tools/thumbs.py                     # every demo
    python3 tools/thumbs.py rutherford tides    # only these
    python3 tools/thumbs.py --three path/to/three.min.js   # serve three.js locally

Needs: pip install playwright pillow, and a Chromium for Playwright.
The --three option is for machines that cannot reach cdnjs; requests for
three.min.js are answered from the local file instead.
"""
import argparse
import io
import sys
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
DEMOS = ROOT / "demos"
OUT = ROOT / "thumbs"

W, H = 640, 400          # thumbnail size (16:10, matches the card in index.html)
QUALITY = 80
MAX_BYTES = 60_000       # lower the quality step by step until under this
VIEW = {"width": 1440, "height": 900}

# Per demo overrides. Keys:
#   wait     ms to let the demo run after load (default 1500)
#   crop     CSS selector of the element to crop (default: the .stage, else the largest canvas)
#   click    list of CSS selectors to click in order before waiting
#   anchor   "center" (default), "top" or "bottom": where to keep when trimming to 16:10
#   js       script to evaluate after the clicks
#   keep_controls  True to leave buttons inside the stage visible
OVERRIDES = {
    "spectra": {"crop": "main.bench > :first-child", "anchor": "top"},
    "photoelectric": {"anchor": "top"},
    "star-slice": {"wait": 9000,
                   "js": "setTimeout(() => { const m = document.getElementById('mass'); m.value = 1000; m.dispatchEvent(new Event('input', { bubbles: true })); "
                         "setTimeout(() => { const b = [...document.querySelectorAll('#presets button')].find((x) => x.textContent === 'Onion shells'); if (b) b.click(); }, 3500); }, 1500)"},
    "hydrogen-orbitals": {"wait": 2500},
    "pendulum": {"wait": 2600, "js": "const s = document.getElementById('sA'); s.value = 35; s.dispatchEvent(new Event('input')); document.getElementById('go').click();"},
    "rotational-dynamics": {"wait": 1800, "js": "document.querySelector('#objSeg [data-o=pair]').click(); document.getElementById('go').click();"},
    "gyroscope": {"wait": 1500, "js": "document.getElementById('go').click();"},
    "viscometer": {"wait": 1500, "js": "document.querySelector('#speedSeg [data-s=\"10\"]').click(); document.getElementById('go').click();"},
    "cart-launch": {"wait": 1500, "js": "document.getElementById('go').click();"},
    "elevator": {"wait": 1200, "js": "document.querySelector('#trips [data-to=\"10\"]').click();"},
    "gravity-near-earth": {"wait": 600, "js": "const s = document.getElementById('sL'); s.value = 40; s.dispatchEvent(new Event('input'));"},
    "gps-clocks": {"wait": 1500, "js": "document.getElementById('go').click();"},
    "impulse": {"wait": 2600, "js": "document.getElementById('go').click();"},
    "center-of-mass": {"wait": 600, "js": ""},
    "units": {"wait": 600, "js": "const s = document.getElementById('sZoom'); s.value = 20.6; s.dispatchEvent(new Event('input'));"},
    "energy-sources": {"wait": 600, "js": ""},
    "household-wiring": {"wait": 800, "js": "document.querySelector('[data-p=wet]').click()"},
    "magnetism-in-matter": {"wait": 10500, "js": "document.querySelector('[data-p=loop]').click()"},
    "induced-electric-field": {"wait": 700, "js": "document.querySelector('[data-p=outside]').click(); document.getElementById('playBtn').click();"},
    "induction-at-work": {"wait": 2500, "js": "document.querySelector('[data-p=tablet]').click()"},
    "huygens": {"wait": 2500, "js": "document.querySelector('[data-p=refract]').click()"},
    "electrostatics-at-work": {"wait": 3500, "js": "document.getElementById('motor').click()"},
    "eddy-currents": {"wait": 3500, "js": "document.getElementById('drop').click();"},
    "wire-force": {"wait": 2500, "js": "document.querySelector('#presets button[data-p=\"motor\"]').click(); document.getElementById('spin').click();"},
    "induction": {"wait": 500, "js": "document.getElementById('next').click();"},
    "resistivity": {"wait": 500, "js": "const s = document.getElementById('sL'); s.value = 0.62; s.dispatchEvent(new Event('input'));"},
    "equilibrium": {"wait": 500, "js": "document.querySelector('#presets button[data-p=\"ladder\"]').click();"},
    "stress-strain": {"wait": 600, "js": "const s = document.getElementById('sL'); for (const m of [7, 4, 7.6]) { s.value = m; s.dispatchEvent(new Event('input')); }"},
    "rocket": {"wait": 6000, "js": "document.querySelector('#presets button[data-p=\"earth\"]').click(); document.getElementById('go').click();"},
    "circular-motion": {"wait": 1200, "js": "document.querySelector('#presets button[data-p=\"bank\"]').click();"},
    "displacement-current": {"wait": 600, "js": "document.querySelector('#presets button[data-p=\"bag\"]').click();"},
    "forces": {"wait": 1200, "js": "document.querySelector('#presets button[data-p=\"rampm\"]').click();"},
    "vectors": {"wait": 500, "js": "document.querySelector('#presets button[data-p=\"add\"]').click();"},
    "motion-graphs": {"wait": 600, "js": "document.querySelector('#presets button[data-p=\"stopgo\"]').click(); const c = document.getElementById('can'); c.focus(); for (let i = 0; i < 45; i++) c.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));"},
    "bz-reaction": {"click": ['[data-p="spiral"]'], "wait": 800,
                    "js": "__bz.setPlaying(false); for (let i = 0; i < 45; i++) __bz.dsAdvance(100); __bz.dirtyAll(); __bz.setPlaying(true)"},
    "coulomb-sandbox": {"wait": 1500},
    "double-slit": {"wait": 4000},
    "radioactive-decay": {"wait": 3000},
    "rutherford": {"click": ['[data-p="gm"]'], "wait": 6000},
    "lasers": {"wait": 3500},
    "white-dwarf-cooling": {"click": ['[data-p="cryst"]'], "wait": 1500},
    "ideal-gas": {"wait": 2500},
    "magnetic-force": {"wait": 5000},
    "quantum-waves": {"click": ['[data-p="barrier"]'], "wait": 3000},
    "circuit-builder": {"click": ['[data-v="bench"]', '[data-p="compare"]'], "wait": 1500},
    "gauss-law": {"click": ['[data-p="outside"]', '#tPatch'], "wait": 1500},
    "black-holes": {"click": ['[data-p="ring"]'], "wait": 2500},
    "doppler": {"click": ['[data-p="jet"]'], "wait": 9000},
    "ising": {"crop": "#pLat", "wait": 2500},
    "polarization": {"click": ['[data-p="three"]'], "wait": 1500},
    "collisions": {"click": ['[data-p="glance"]'], "wait": 1300},
    "double-pendulum": {"click": ['[data-p="fly"]'], "wait": 9000},
    "fluids": {"crop": "#sPane", "anchor": "bottom", "wait": 2500},
    "franck-hertz": {"click": ['[data-p="ne"]'], "wait": 9500},
    "projectile-drag": {"click": ['[data-p="heavy"]'], "wait": 6500},
    "diffraction-grating": {"click": ['[data-p="hydrogen"]'], "wait": 1500},
    "circuits": {"click": ['#modeSeg button[data-m="ac"]'], "wait": 2000},
    "resonators": {"click": ['[data-p="guitar"]'], "wait": 900},
    "chladni": {"click": ['[data-p="star"]'], "js": "__ch.tick(240)", "wait": 800},
    "capacitors": {"click": ['[data-p="energy"]'], "wait": 1500, "crop": "#dPane",
                   "js": "__cap.setRunning(false); __cap.setGeom({ A: 0.0225 }); __cap.setClean(true)"},
}

DEFAULT_CROP = """() => {
  const vis = el => { const r = el.getBoundingClientRect(); return r.width > 50 && r.height > 50 ? r : null; };
  const stages = [...document.querySelectorAll('.stage')].map(el => [el, vis(el)]).filter(x => x[1]);
  let list = stages.length ? stages : [...document.querySelectorAll('canvas')].map(el => [el, vis(el)]).filter(x => x[1]);
  list.sort((a, b) => b[1].width * b[1].height - a[1].width * a[1].height);
  if (!list.length) return null;
  const r = list[0][1];
  // Leave out a row of buttons along the top of the stage.
  const ctl = list[0][0].querySelector(':scope > .stage-ctl, :scope > .stage-top');
  const top = ctl ? ctl.getBoundingClientRect().bottom : r.y;
  return { x: r.x, y: top, width: r.width, height: r.bottom - top };
}"""

SELECTOR_CROP = """(sel) => {
  const el = document.querySelector(sel);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return { x: r.x, y: r.y, width: r.width, height: r.height };
}"""


def fit_box(box, anchor):
    """Trim the box to the thumbnail aspect ratio."""
    x, y, w, h = box["x"], box["y"], box["width"], box["height"]
    # stay inside the viewport
    x0, y0 = max(x, 0), max(y, 0)
    x1, y1 = min(x + w, VIEW["width"]), min(y + h, VIEW["height"])
    x, y, w, h = x0, y0, x1 - x0, y1 - y0
    target = W / H
    if w / h > target:            # too wide: trim the sides
        nw = h * target
        x += (w - nw) / 2
        w = nw
    else:                         # too tall: trim top and bottom
        nh = w / target
        if anchor == "top":
            pass
        elif anchor == "bottom":
            y += h - nh
        else:
            y += (h - nh) / 2
        h = nh
    return {"x": round(x), "y": round(y), "width": round(w), "height": round(h)}


def save_webp(png_bytes, path):
    img = Image.open(io.BytesIO(png_bytes)).convert("RGB").resize((W, H), Image.LANCZOS)
    q = QUALITY
    while True:
        buf = io.BytesIO()
        img.save(buf, "WEBP", quality=q, method=6)
        if buf.tell() <= MAX_BYTES or q <= 40:
            break
        q -= 8
    path.write_bytes(buf.getvalue())
    return buf.tell(), q


def render(browser, demo, scheme, three_js):
    name = demo.stem
    opt = OVERRIDES.get(name, {})
    ctx = browser.new_context(viewport=VIEW, device_scale_factor=1, color_scheme=scheme,
                              reduced_motion="no-preference")
    # A stored theme or projector choice would override the scheme; start clean.
    ctx.add_init_script("try { localStorage.clear(); } catch (e) {}")
    page = ctx.new_page()
    errors = []
    page.on("pageerror", lambda e: errors.append(str(e)))
    if three_js:
        body = Path(three_js).read_bytes()
        page.route("**/three.min.js", lambda route: route.fulfill(
            status=200, body=body, content_type="application/javascript"))
    page.goto(demo.as_uri(), wait_until="load", timeout=60_000)
    page.evaluate("() => document.fonts ? document.fonts.ready.then(() => true) : true")
    for sel in opt.get("click", []):
        page.click(sel)
    if opt.get("js"):
        page.evaluate(opt["js"])
    page.wait_for_timeout(opt.get("wait", 1500))
    if not opt.get("keep_controls"):
        # Buttons floating over the stage are noise in a small picture.
        page.add_style_tag(content=".stage button, .stage select, .stage input, .stage .seg, .stage .chips"
                                   " { visibility: hidden !important; }")
        page.wait_for_timeout(100)
    box = (page.evaluate(SELECTOR_CROP, opt["crop"]) if opt.get("crop")
           else page.evaluate(DEFAULT_CROP))
    if not box:
        ctx.close()
        raise RuntimeError("no stage or canvas found")
    clip = fit_box(box, opt.get("anchor", "center"))
    png = page.screenshot(clip=clip)
    ctx.close()
    return png, errors


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("names", nargs="*", help="demo names without .html (default: all)")
    ap.add_argument("--three", help="local three.min.js to serve in place of the CDN copy")
    args = ap.parse_args()

    demos = sorted(DEMOS.glob("*.html"))
    if args.names:
        demos = [d for d in demos if d.stem in args.names]
    OUT.mkdir(exist_ok=True)

    flags = ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader",
             "--ignore-gpu-blocklist"]
    total, failed = 0, []
    with sync_playwright() as p:
        # software WebGL only for the three.js demos: it slows 2D animation to a few frames per second
        browser_gl = p.chromium.launch(args=flags)
        browser_2d = p.chromium.launch()
        for demo in demos:
            text = demo.read_text(encoding="utf-8", errors="replace")
            if "</html>" not in text[-2000:]:
                print(f"skip {demo.name}: looks unfinished")
                continue
            browser = browser_gl if "three" in text and "cdnjs" in text else browser_2d
            for scheme in ("light", "dark"):
                out = OUT / f"{demo.stem}-{scheme}.webp"
                try:
                    png, errors = render(browser, demo, scheme, args.three)
                except Exception as e:  # keep going with the other demos
                    print(f"FAIL {demo.stem} {scheme}: {e}")
                    failed.append(demo.stem)
                    continue
                size, q = save_webp(png, out)
                total += size
                note = f"  page errors: {errors[0][:80]}" if errors else ""
                print(f"{out.name:34s} {size/1000:5.1f} kB  q{q}{note}")
        browser_gl.close()
        browser_2d.close()
    print(f"total {total/1000:.0f} kB")
    if failed:
        print("failed:", " ".join(sorted(set(failed))))
        sys.exit(1)


if __name__ == "__main__":
    main()
