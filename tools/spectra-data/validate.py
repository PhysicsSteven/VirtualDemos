import csv, glob, io, json, re, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))

# Well known lines (air, Angstrom) that must be present if the element was collected.
REFS = {
    'H': [6562.85, 4861.36, 4340.46, 4101.74],
    'He': [5875.62, 6678.15, 4471.48, 5015.68],
    'Li': [6707.8, 6103.6],
    'C': [4267.0, 6578.05],
    'N': [7468.31, 8680.28],
    'O': [7771.94, 8446.36],
    'Ne': [5852.49, 6402.25, 7032.41],
    'Na': [5889.95, 5895.92],
    'Mg': [5183.60, 5172.68, 5167.32],
    'Al': [3961.52, 3944.01],
    'Si': [6347.10, 6371.36],
    'Ar': [8115.31, 7503.87, 6965.43],
    'K': [7664.90, 7698.96, 4044.14],
    'Ca': [3933.66, 3968.47, 4226.73],
    'Fe': [3820.43, 4045.81, 4383.54, 5269.54],
    'Cu': [3247.54, 3273.96, 5105.54, 5218.20],
    'Sr': [4607.33, 4077.71, 4215.52],
    'Ba': [5535.48, 4554.03],
    'Hg': [4358.33, 5460.73, 4046.56, 5769.60, 5790.66],
    'Kr': [5870.92, 5570.29],
    'Xe': [8231.63, 8280.12],
    'Rb': [7800.27, 7947.60],
    'Cs': [8521.13, 8943.47, 4555.28],
    'Zn': [4810.53, 4722.16, 6362.35],
    'Cd': [6438.47, 5085.82, 4799.91],
    'Tl': [5350.46, 3775.72],
    'Li_': [],
}

def num(s):
    m = re.match(r'\s*([0-9.]+)', s)
    return float(m.group(1)) if m else None

def load():
    data = {}
    for f in sorted(glob.glob(os.path.join(HERE, '*.csv'))):
        cur = None
        for raw in open(f, encoding='utf-8'):
            line = raw.strip()
            if not line:
                continue
            if line.startswith('## '):
                cur = line[3:].strip()
                data.setdefault(cur, [])
                continue
            row = next(csv.reader(io.StringIO(line)))
            if len(row) != 3:
                raise SystemExit(f'{f}: bad row for {cur}: {line}')
            inten, wl, ion = row
            if num(inten) is not None and num(inten) >= 2000 and num(wl) is not None and num(wl) < 2000:
                inten, wl = wl, inten               # columns came back swapped (wavelength first)
            ion = ion.strip().split()[-1]          # "Ti II" -> "II"
            if ion not in ('I', 'II', 'III', 'IV'):
                ion = '?'                          # NIST left the ionization stage unassigned
            inten = inten.strip() or '0'           # NIST leaves some intensities blank
            data[cur].append((inten, float(wl), ion))
    return data

def main():
    data = load()
    problems = 0
    for el, rows in data.items():
        wls = [r[1] for r in rows]
        if not rows:
            print(f'{el}: EMPTY'); continue
        bad_order = [(a, b) for a, b in zip(wls, wls[1:]) if b < a]
        out_range = [w for w in wls if w < 2990 or w > 10010]
        bad_int = [r[0] for r in rows if num(r[0]) is None]
        bad_ion = sorted({r[2] for r in rows if not re.fullmatch(r'(I|II|III|IV|\?)', r[2])})
        missing = []
        for ref in REFS.get(el, []):
            if not any(abs(w - ref) < 0.1 for w in wls):
                missing.append(ref)
        flag = bad_order or out_range or bad_int or bad_ion or missing
        if flag:
            problems += 1
            print(f'{el}: {len(rows)} rows  ORDER {bad_order[:3]}  RANGE {out_range[:3]}  INT {bad_int[:3]}  ION {bad_ion}  MISSING {missing}')
        elif '-v' in sys.argv:
            print(f'{el}: {len(rows)} rows ok')
    print(f'{len(data)} elements, {sum(len(r) for r in data.values())} lines, {problems} with problems')

if __name__ == '__main__':
    main()
