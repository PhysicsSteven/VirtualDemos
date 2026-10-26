# photondata: the data behind demos/lib/photondata.js

`demos/lib/photondata.js` (window.VDPHOTON) holds the photon cross sections, the NIST SRD 126 tables, atomic data and X-ray tube spectra used by the Photon Interactions in Matter demo. It is generated here; rebuild it and it comes out byte for byte the same.

    git clone https://github.com/LazzyIzzi/MuMassCalculator   (MIT license; "Tabulated XCOM data used with permission")
    MMC=./MuMassCalculator python3 parse_mmc.py     writes xcom_all.json (already here, so this step is only to check it)
    pip install xraylib==4.3.0 spekpy==2.5.4
    python3 build_data.py                            writes xcom_packed.json and other.json
    python3 emit_js.py                               writes ../../demos/lib/photondata.js

Sources:
- `xcom_all.json`: NIST XCOM (Berger, Hubbell, Seltzer, Chang, Coursey, Sukumar, Zucker and Olsen, SRD 8) for Z = 1 to 92, from MuMassCalculator's tables: energies (MeV), coherent, incoherent, photoelectric, pair in the nuclear field, pair in the electron field, total. Magnesium's energy list there has 7 extra entries at the end; it is cut to the length of its value lists.
- `srd126/`: Hubbell and Seltzer, NIST SRD 126. Table 1 (`tab1.txt`: Z, Z/A, I, density) and Table 4 (μ/ρ and μ_en/ρ, energy in MeV) for water, ICRU 44 soft tissue (`soft`), muscle, adipose, lung, cortical bone, dry air, PMMA, LiF, ordinary concrete, graphite, aluminum, copper, tungsten and lead, copied from the NIST pages; the water, air and ICRU 44 tissue files were checked against the copies in J. Fessler's MIRT (`ct/xray-mass-atten`), which match exactly. Compositions in `build_data.py` are SRD 126 Table 2.
- Form factors and incoherent scattering functions (Hubbell and others 1975), K and L3 fluorescence yields (Krause 1979) and line energies (Deslattes and others 2003): xraylib (Schoonjans and others 2011). xraylib's CS_ cross sections are not used; they disagree with XCOM.
- Spectra: SpekPy 2.5.4 (Poludniowski and others 2021), tungsten anode at 12°, 0.8 mm Be, dk = 1 keV, every 0.5 kVp from 20 to 100 kVp (the X-ray tube in Shells and X-rays) and 110 to 150 kVp in steps of 10 (Photon Interactions); each spectrum's last bin ends at its kVp. `char` holds the line (K and L) part of each bin, total minus `char=False`. SpekPy's own air kerma per mAs at 1 m is kept as `spec['<kVp>k']` for each 10 kVp from 50, for comparison.

Checks (curriculum/validation/test_photon-interactions.cjs): the XCOM sums match SRD 126 μ/ρ to a median of 0.01 % for every material (water and air within 0.1 % at every non edge energy); half value layers computed from the spectra match SpekPy's to 0.2 %.
