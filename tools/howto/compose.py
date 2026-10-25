"""Turns a recorded take (frames + timeline.json from record.cjs) into the finished video: zooms, arrows, pointer and captions
are all drawn from the timeline, so a new recording regenerates the whole video.  python3 compose.py take out.mp4"""
import json, subprocess, sys, math
from PIL import Image, ImageDraw, ImageFont

TAKE, OUT = sys.argv[1], sys.argv[2]
D = json.load(open(f'{TAKE}/timeline.json'))
W, H, DSF, FPS = D['W'], D['H'], D['DSF'], D['FPS']
OW, OH, SS = 1280, 720, 2                      # output size, and supersampling for the overlay
ACC = (249, 115, 22)                           # arrow and highlight: orange, clear against the blue interface in both themes
INK = (17, 24, 39)
FONT = '/usr/share/fonts/opentype/inter/Inter-SemiBold.otf'
fcap = ImageFont.truetype(FONT, 27 * SS)
fnum = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Bold.otf', 20 * SS)
fhead = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Bold.otf', 17 * SS)
frames = D['frames']
N = len(frames)


def ease(u):
    u = max(0.0, min(1.0, u))
    return u * u * (3 - 2 * u)


# view rectangle per frame: eased moves of 0.55 s between the full page and each zoom
FULL = [0, 0, W, H]
views, cur, frm, to, k0 = [], FULL[:], FULL[:], FULL[:], -999
MOVE = int(0.55 * FPS)
for i, fr in enumerate(frames):
    tgt = fr['zoom'] or FULL
    if fr['zoom']:                                    # keep a zoom inside the page
        tgt = [min(max(tgt[0], 0), W - tgt[2]), min(max(tgt[1], 0), H - tgt[3]), tgt[2], tgt[3]]
    if tgt != to:
        frm, to, k0 = cur[:], tgt[:], i
    e = ease((i - k0) / MOVE)
    cur = [a + (b - a) * e for a, b in zip(frm, to)]
    views.append(cur)

# caption runs, numbered as steps after the opening line
caps, steps = [], {}
for i, fr in enumerate(frames):
    c = fr['caption']
    if not caps or caps[-1][0] != c:
        caps.append([c, i, i])
    caps[-1][2] = i
for n, (c, a, b) in enumerate(caps):
    steps[c] = n


def to_out(v, x, y):
    return ((x - v[0]) / v[2] * OW, (y - v[1]) / v[3] * OH)


def pointer(d, x, y, s):
    """a plain arrow pointer, white with a dark edge, tip at (x, y)"""
    pts = [(0, 0), (0, 17), (4.2, 13.2), (7.2, 20), (10, 18.8), (7.1, 12.2), (12.4, 12.2)]
    p = [(x + px * s, y + py * s) for px, py in pts]
    d.polygon(p, fill=(255, 255, 255, 255), outline=(20, 20, 20, 255), width=max(1, int(1.6 * s / 1.4)))


def arrow_to(d, rect, v, age):
    """ring around the target and an arrow pointing at it from the side with room; it draws itself in over 0.3 s and bobs gently"""
    x0, y0 = to_out(v, rect[0], rect[1])
    x1, y1 = to_out(v, rect[0] + rect[2], rect[1] + rect[3])
    pad = 9
    x0, y0, x1, y1 = x0 - pad, y0 - pad, x1 + pad, y1 + pad
    grow = ease(age / (0.3 * FPS))
    if grow <= 0:
        return
    a = int(255 * grow)
    S = SS
    # a thin white halo just outside the orange ring, so the ring never covers the value it marks
    d.rounded_rectangle([(x0 - 3) * S, (y0 - 3) * S, (x1 + 3) * S, (y1 + 3) * S], radius=11 * S, outline=(255, 255, 255, a), width=3 * S)
    d.rounded_rectangle([x0 * S, y0 * S, x1 * S, y1 * S], radius=9 * S, outline=ACC + (a,), width=4 * S)
    # the arrow comes from below left, or from the left when the target is low on the screen
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    low = cy > OH * 0.62
    ux, uy = (1, 0) if low else (0.62, -0.78)        # direction the arrow points
    tip = (x0 - 4, cy) if low else (cx - 0.35 * (x1 - x0), y1 + 4)
    if tip[0] < 140:                                  # no room on the left: come from the right instead
        ux, tip = -1, (x1 + 4, cy)
        uy = 0
    bob = 5 * math.sin(age / FPS * 2 * math.pi * 1.1)
    L = 92 * grow
    tx, ty = tip[0] - ux * (6 + bob), tip[1] - uy * (6 + bob)
    bx, by = tx - ux * L, ty - uy * L
    hx, hy = tx - ux * 24, ty - uy * 24
    nx, ny = -uy, ux
    head = [(tx, ty), (hx + nx * 15, hy + ny * 15), (hx - nx * 15, hy - ny * 15)]
    for col, w in (((255, 255, 255, a), 15), (ACC + (a,), 9)):
        d.line([bx * S, by * S, hx * S, hy * S], fill=col, width=w * S)
    d.polygon([(px * S, py * S) for px, py in head], fill=ACC + (a,), outline=(255, 255, 255, a), width=3 * S)


def caption(d, i):
    for n, (c, a, b) in enumerate(caps):
        if a <= i <= b:
            break
    fade = 6
    al = min(1, (i - a + 1) / fade, (b - i + 1) / fade) if n > 0 else min(1, (b - i + 1) / fade)
    if n == len(caps) - 1:
        al = min(1, (i - a + 1) / fade)
    al = max(0, al)
    S = SS
    tw = d.textlength(c, font=fcap)
    numw = 44 * S if n > 0 else 0
    pw, ph = tw + numw + 48 * S, 58 * S
    x0, y0 = (OW * S - pw) / 2, OH * S - ph - 26 * S
    if n > 0 and frames[i].get('capTop'):              # r.state.capTop: the caption at the top, when what the step shows sits at the page bottom
        y0 = 26 * S
    if n == 0:                                        # the opening line gets a heading above it
        hdr = ('HOW THIS WORKS  ·  ' + D.get('title', '')).upper().rstrip(' ·')
        hw = d.textlength(hdr, font=fhead)
        d.rounded_rectangle([(OW * S - hw) / 2 - 16 * S, y0 - 44 * S, (OW * S + hw) / 2 + 16 * S, y0 - 10 * S], radius=17 * S, fill=ACC + (int(245 * al),))
        d.text((OW * S / 2, y0 - 27 * S), hdr, font=fhead, fill=(255, 255, 255, int(255 * al)), anchor='mm')
    d.rounded_rectangle([x0, y0, x0 + pw, y0 + ph], radius=16 * S, fill=INK + (int(228 * al),))
    tx = x0 + 24 * S
    if n > 0:
        r = 15 * S
        d.ellipse([tx, y0 + ph / 2 - r, tx + 2 * r, y0 + ph / 2 + r], fill=ACC + (int(255 * al),))
        d.text((tx + r, y0 + ph / 2 + 1 * S), str(n), font=fnum, fill=(255, 255, 255, int(255 * al)), anchor='mm')
        tx += numw
    d.text((tx, y0 + ph / 2), c, font=fcap, fill=(255, 255, 255, int(255 * al)), anchor='lm')


ff = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{OW}x{OH}', '-r', str(FPS), '-i', '-',
                       '-c:v', 'libx264', '-preset', 'veryslow', '-crf', sys.argv[3] if len(sys.argv) > 3 else '24', '-tune', 'animation',
                       '-pix_fmt', 'yuv420p', '-movflags', '+faststart', OUT], stdin=subprocess.PIPE)
arrow_since, last_arrow = 0, None
for i, fr in enumerate(frames):
    v = views[i]
    src = Image.open(f"{TAKE}/frames/{fr['name']}").convert('RGB')
    img = src.crop(tuple(round(c * DSF) for c in (v[0], v[1], v[0] + v[2], v[1] + v[3]))).resize((OW, OH), Image.LANCZOS)
    ov = Image.new('RGBA', (OW * SS, OH * SS), (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)
    a = fr['arrow']
    if json.dumps(a) != json.dumps(last_arrow):
        arrow_since, last_arrow = i, a
    if a:
        arrow_to(d, a['rect'], v, i - arrow_since)
    # pointer, a soft ring while pressed, and a ripple on each click
    px, py = to_out(v, *fr['ptr'])
    if fr['down']:
        d.ellipse([(px - 17) * SS, (py - 17) * SS, (px + 17) * SS, (py + 17) * SS], fill=ACC + (90,), outline=ACC + (220,), width=2 * SS)
    ck = i - fr['click']
    if 0 <= ck < 14 and fr['click'] >= 0:
        r = 10 + ck * 2.4
        d.ellipse([(px - r) * SS, (py - r) * SS, (px + r) * SS, (py + r) * SS], outline=ACC + (int(255 * (1 - ck / 14)),), width=3 * SS)
    pointer(d, px * SS, py * SS, 1.25 * SS)
    caption(d, i)
    ov = ov.resize((OW, OH), Image.LANCZOS)
    img.paste(ov, (0, 0), ov)
    if i < 8:                                          # fade in from the page colour
        img = Image.blend(Image.new('RGB', (OW, OH), img.getpixel((4, 4))), img, (i + 1) / 8)
    ff.stdin.write(img.tobytes())
ff.stdin.close()
ff.wait()
print(OUT, N, 'frames', round(N / FPS, 1), 's')
