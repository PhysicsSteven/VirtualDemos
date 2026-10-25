import re,glob,json,os
import os
HERE = os.path.dirname(os.path.abspath(__file__))
D=os.environ.get('MMC', os.path.join(HERE, 'MuMassCalculator')) + '/JHD_XRAY-MassAttenuationLibJ8V5/src/nist/MuMassData/'
out={}
for f in glob.glob(D+'MassAttenuation*.java'):
    sym=os.path.basename(f)[15:-5]
    t=open(f).read()
    arr={}
    for name in ['MeV','Coh','Incoh','PE','PrProdN','PrProdE','TotAttn']:
        m=re.search(r'double\[\]\s*'+name+r'\s*=\s*\{([^}]*)\}',t)
        arr[name]=[float(v) for v in m.group(1).split(',')]
    out[sym]=arr
json.dump(out,open(os.path.join(HERE, 'xcom_all.json'),'w'))
print(len(out))
# check sums
bad=0
for s,a in out.items():
    for i in range(len(a['MeV'])):
        sm=a['Coh'][i]+a['Incoh'][i]+a['PE'][i]+a['PrProdN'][i]+a['PrProdE'][i]
        if abs(sm/a['TotAttn'][i]-1)>2e-3: bad+=1
print('sum mismatches',bad)
