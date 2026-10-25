import json, math, xraylib as x
import os
HERE = os.path.dirname(os.path.abspath(__file__))
X = json.load(open(os.path.join(HERE, 'xcom_all.json')))
T1 = [l.split() for l in open(os.path.join(HERE, 'srd126', 'tab1.txt'))]
sym = {int(r[0]): r[1] for r in T1}
def m4(v):
    """4 significant figures as mantissa+exponent: 1.501E+00 -> '1501-3'"""
    if v == 0: return '0'
    e = math.floor(math.log10(abs(v))) - 3
    m = round(v / 10**e)
    if m >= 10000: m //= 10; e += 1
    # strip trailing zeros of mantissa
    while m % 10 == 0 and m != 0: m //= 10; e += 1
    return f'{m}' + (f'e{e}' if e else '')
# standard energy grid (MeV) up to 100 MeV
STD = sorted(set(e for a in X.values() for e in a['MeV'] if e <= 100.0001))
out = {}
for Z in range(1, 93):
    a = X[sym[Z].upper()]
    n = len(a['TotAttn'])
    rows = []
    for i in range(n):
        E = a['MeV'][i]
        if E > 100.0001: break
        rows.append(','.join([m4(E*1000)] + [m4(a[k][i]) for k in ['Coh', 'Incoh', 'PE', 'PrProdN', 'PrProdE']]))
    out[Z] = ';'.join(rows)
s = json.dumps(out, separators=(',', ':'))
print('xcom bytes', len(s))
json.dump(out, open(os.path.join(HERE, 'xcom_packed.json'), 'w'), separators=(',', ':'))

# ---- SRD 126 mu_en tables (energy MeV, mu, mu_en), validated above against XCOM mixtures ----
def rd(f):
    rows=[l.replace(',',' ').split() for l in open(os.path.join(HERE, 'srd126', f)) if l.strip()]
    return ';'.join(','.join([m4(float(r[0])*1000), m4(float(r[1])), m4(float(r[2]))]) for r in rows)
MAT = [
 # key, name, file, density, composition (Z: weight fraction), from SRD 126 Table 2 / Table 1
 ('water','Water, liquid','water',1.000,{1:0.111898,8:0.888102}),
 ('tissue','Soft tissue (ICRU 44)','soft',1.060,{1:.102,6:.143,7:.034,8:.708,11:.002,15:.003,16:.003,17:.002,19:.003}),
 ('muscle','Skeletal muscle (ICRU 44)','muscle',1.050,{1:.102,6:.143,7:.034,8:.710,11:.001,15:.002,16:.003,17:.001,19:.004}),
 ('adipose','Adipose tissue (ICRU 44)','adipose',0.950,{1:.114,6:.598,7:.007,8:.278,11:.001,16:.001,17:.001}),
 ('lung','Lung tissue (ICRU 44)','lung',1.050,{1:.103,6:.105,7:.031,8:.749,11:.002,15:.002,16:.003,17:.003,19:.002}),
 ('bone','Cortical bone (ICRU 44)','bone',1.920,{1:.034,6:.155,7:.042,8:.435,11:.001,12:.002,15:.103,16:.003,20:.225}),
 ('air','Air, dry (near sea level)','air',1.205e-3,{6:0.000124,7:0.755268,8:0.231781,18:0.012827}),
 ('pmma','PMMA (acrylic)','pmma.csv',1.190,{1:.080541,6:.599846,8:.319613}),
 ('lif','Lithium fluoride (TLD)','lif.csv',2.635,{3:.267585,9:.732415}),
 ('concrete','Ordinary concrete','concrete.csv',2.300,{1:.0221,6:.002484,8:.57493,11:.015208,12:.001266,13:.019953,14:.304627,19:.010045,20:.042951,26:.006435}),
 ('c','Graphite (carbon)','c.txt',1.700,{6:1}),
 ('al','Aluminum','al.txt',2.699,{13:1}),
 ('cu','Copper','cu.txt',8.960,{29:1}),
 ('w','Tungsten','w.txt',19.30,{74:1}),
 ('pb','Lead','pb.txt',11.35,{82:1}),
]
mats=[{'key':k,'name':n,'rho':r,'w':{str(z):f for z,f in w.items()},'en':rd(f)} for k,n,f,r,w in MAT]
tab1={int(r[0]):[r[1],float(r[2]),float(r[3]),float(r[4])] for r in T1}

# ---- atomic data for fluorescence (all Z) and form factors (MC elements) from xraylib 4.3 ----
def safe(fn,*a):
    try: return fn(*a)
    except Exception: return 0.0
atom={}
for Z in range(1,93):
    EK=safe(x.EdgeEnergy,Z,x.K_SHELL); EL3=safe(x.EdgeEnergy,Z,x.L3_SHELL)
    wK=safe(x.FluorYield,Z,x.K_SHELL); wL3=safe(x.FluorYield,Z,x.L3_SHELL)
    lines=[]
    for ln in (x.KL3_LINE,x.KL2_LINE,x.KM3_LINE,x.KM2_LINE,x.KN3_LINE,x.KN2_LINE):
        r=safe(x.RadRate,Z,ln); e=safe(x.LineEnergy,Z,ln)
        if r>0 and e>0: lines.append([round(e,4),round(r,5)])
    La=safe(x.LineEnergy,Z,x.LA1_LINE)
    atom[Z]=[round(EK,4),round(wK,4),lines,round(EL3,4),round(wL3,4),round(La,4)]
XG=[0]+[round(10**(-2+i*0.125),6) for i in range(41)]   # x = sin(θ/2)/λ in 1/Å, 0 and 0.01 to 1000
ffz={}
for Z in [1,3,6,7,8,9,11,12,13,14,15,16,17,18,19,20,26,29,74,82]:
    F=[m4(safe(x.FF_Rayl,Z,q)) if q>0 else m4(Z) for q in XG]
    S=[m4(safe(x.SF_Compt,Z,q)) if q>0 else '0' for q in XG]
    ffz[Z]=[','.join(F),','.join(S)]

# ---- SpekPy tube spectra ----
import spekpy as sp
spec={}
for kvp in range(50,151,10):
    s=sp.Spek(kvp=kvp,th=12,dk=1); s.filter('Be',0.8)
    k,f=s.get_spectrum()
    spec[kvp]=','.join(m4(v) if v>1e-30 else '0' for v in f)
    spec[str(kvp)+'k']=round(s.get_kerma(),5)  # air kerma uGy per mAs at 1 m, SpekPy's own
json.dump({'mats':mats,'tab1':tab1,'atom':atom,'xg':XG,'ff':ffz,'spec':spec},open(os.path.join(HERE, 'other.json'),'w'),separators=(',',':'))
print('other bytes',len(json.dumps({'mats':mats,'tab1':tab1,'atom':atom,'xg':XG,'ff':ffz,'spec':spec},separators=(',',':'))))
print(atom[82], atom[8], atom[53])
