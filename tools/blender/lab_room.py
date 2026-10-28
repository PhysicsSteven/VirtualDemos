# Lab room for VirtualDemos 3D views: rendered as a 360 degree panorama seen from the bench, used only as reflections and soft fill light.
import bpy, math, sys
theme = sys.argv[sys.argv.index('--')+1]
dark = theme == 'dark'
bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene; sc.render.engine = 'CYCLES'; sc.cycles.samples = 256; sc.cycles.use_denoising = True
sc.render.resolution_x, sc.render.resolution_y = 1024, 512
sc.view_settings.view_transform = 'Standard'; sc.view_settings.look = 'None'
sc.world = bpy.data.worlds.new('w'); sc.world.use_nodes = True
sc.world.node_tree.nodes['Background'].inputs[0].default_value = (0, 0, 0, 1)
def mat(name, col, rough=0.8, emit=None, strength=0):
    m = bpy.data.materials.new(name); m.use_nodes = True; nt = m.node_tree; nt.nodes.clear()
    out = nt.nodes.new('ShaderNodeOutputMaterial')
    if emit:
        e = nt.nodes.new('ShaderNodeEmission'); e.inputs[0].default_value = emit + (1,); e.inputs[1].default_value = strength; nt.links.new(e.outputs[0], out.inputs[0])
    else:
        b = nt.nodes.new('ShaderNodeBsdfPrincipled'); b.inputs['Base Color'].default_value = col + (1,); b.inputs['Roughness'].default_value = rough; nt.links.new(b.outputs[0], out.inputs[0])
    return m
def box(sx, sy, sz, x, y, z, m):
    bpy.ops.mesh.primitive_cube_add(size=1, location=(x, y, z)); o = bpy.context.object; o.scale = (sx, sy, sz); o.data.materials.append(m); return o
L, W, H, Z0 = 9.0, 7.0, 3.2, -1.0   # room length (x), width (y), height; floor 1 m below the bench
wall = mat('wall', (0.30, 0.33, 0.38) if dark else (0.80, 0.82, 0.84))
floor = mat('floor', (0.12, 0.12, 0.14) if dark else (0.42, 0.42, 0.43), 0.5)
ceil = mat('ceil', (0.22, 0.24, 0.28) if dark else (0.85, 0.85, 0.85))
board = mat('board', (0.03, 0.06, 0.05), 0.4)
cab = mat('cab', (0.20, 0.22, 0.26) if dark else (0.55, 0.58, 0.62), 0.5)
wood = mat('wood', (0.18, 0.12, 0.07) if dark else (0.55, 0.40, 0.25), 0.6)
box(L, W, 0.1, 0, 0, Z0 - 0.05, floor); box(L, W, 0.1, 0, 0, Z0 + H + 0.05, ceil)
box(0.1, W, H, L/2 + 0.05, 0, Z0 + H/2, wall); box(0.1, W, H, -L/2 - 0.05, 0, Z0 + H/2, wall)
box(L, 0.1, H, 0, W/2 + 0.05, Z0 + H/2, wall); box(L, 0.1, H, 0, -W/2 - 0.05, Z0 + H/2, wall)
box(3.6, 0.04, 1.2, 0.5, W/2 - 0.02, Z0 + 1.7, board)                     # board on the far wall
for i in range(5): box(0.9, 0.6, 2.0, -3.6 + i * 0.95, -W/2 + 0.3, Z0 + 1.0, cab)   # tall cabinets on the near wall
for x in (-2.5, 2.5): box(1.8, 0.9, 0.06, x, 1.6, Z0 + 0.9, wood)          # other benches
# windows on the +x wall: daylight for the light room, a night sky for the dark one
win = mat('win', None, emit=(0.06, 0.09, 0.16) if dark else (0.85, 0.92, 1.0), strength=1.5 if dark else 6)
for y in (-2.0, 0.0, 2.0): box(0.02, 1.4, 1.5, L/2 - 0.01, y, Z0 + 1.8, win)
# ceiling panels: on in the light room; in the dark room two warm lamps instead
if not dark:
    pm = mat('panel', None, emit=(1.0, 0.98, 0.94), strength=9)
    for x in (-3, 0, 3):
        for y in (-1.6, 1.6): box(1.2, 0.6, 0.02, x, y, Z0 + H - 0.01, pm)
else:
    lm = mat('lamp', None, emit=(1.0, 0.72, 0.42), strength=18)
    for x, y in ((-1.8, 1.4), (2.2, -1.2)): box(0.9, 0.9, 0.02, x, y, Z0 + 2.2, lm)
cd = bpy.data.cameras.new('c'); cd.type = 'PANO'
try: cd.panorama_type = 'EQUIRECTANGULAR'
except Exception: cd.cycles.panorama_type = 'EQUIRECTANGULAR'
c = bpy.data.objects.new('c', cd); sc.collection.objects.link(c); sc.camera = c
c.location = (0, 0, 0.15); c.rotation_euler = (math.pi / 2, 0, -math.pi / 2)   # image center +x, top +z
sc.render.image_settings.file_format = 'PNG'; sc.render.filepath = f'/tmp/claude-0/blend/room-{theme}-blender.png'
bpy.ops.render.render(write_still=True)
