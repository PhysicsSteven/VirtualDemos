# Blender equirect (center +x, top +z, u = 0.5 - atan2(y, x)/2pi) -> three.js r128 equirect for a z up scene
# (three samples u = atan2(d.z, d.x)/2pi + 0.5, top row = +y of its lookup vector, which is world +y; our scenes are z up).
import sys, numpy as np
from PIL import Image
src, dst = sys.argv[1], sys.argv[2]
a = np.asarray(Image.open(src).convert('RGB')).astype(np.float32); H, W, _ = a.shape
v, u = np.mgrid[0:H, 0:W].astype(np.float32); u = (u + 0.5) / W; v = (v + 0.5) / H
lat = np.pi * (0.5 - v); phi = (u - 0.5) * 2 * np.pi
dx, dy, dz = np.cos(phi) * np.cos(lat), np.sin(lat), np.sin(phi) * np.cos(lat)   # three lookup vector = world vector
ub = (0.5 - np.arctan2(dy, dx) / (2 * np.pi)) % 1.0; vb = 0.5 - np.arcsin(np.clip(dz, -1, 1)) / np.pi
x = ub * W - 0.5; y = np.clip(vb * H - 0.5, 0, H - 1)
x0 = np.floor(x).astype(int); y0 = np.floor(y).astype(int); fx = (x - x0)[..., None]; fy = (y - y0)[..., None]
x1 = (x0 + 1) % W; x0 %= W; y1 = np.minimum(y0 + 1, H - 1)
o = (a[y0, x0] * (1 - fx) + a[y0, x1] * fx) * (1 - fy) + (a[y1, x0] * (1 - fx) + a[y1, x1] * fx) * fy
Image.fromarray(np.clip(o, 0, 255).astype(np.uint8)).save(dst, quality=82, optimize=True, progressive=True)
