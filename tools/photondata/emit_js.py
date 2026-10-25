import json
import os
HERE = os.path.dirname(os.path.abspath(__file__))
xc=json.load(open(os.path.join(HERE, 'xcom_packed.json')))
o=json.load(open(os.path.join(HERE, 'other.json')))
hdr='''/* © 2026 Steven Anderson. All rights reserved. Not licensed for copying or reuse; terms at https://physicssteven.github.io/VirtualDemos/LICENSE.html
   Photon interaction data shared by the photon demos (window.VDPHOTON; in Node, globalThis.VDPHOTON). Built by tools/photondata (README.md there).
   xcom[Z]: rows "E,coh,incoh,photo,pairN,pairE" for Z = 1 to 92, 1 keV to 100 MeV. E in keV, the rest in cm²/g, each written as a
     mantissa and a power of ten (1501e-3 = 1.501). Berger, Hubbell, Seltzer, Chang, Coursey, Sukumar, Zucker and Olsen, XCOM: Photon
     Cross Sections Database, NIST Standard Reference Database 8 (doi:10.18434/T48G6X), standard grid with the absorption edges
     (an edge is two rows at the same energy: below, then above). Taken from the XCOM tables in MuMassCalculator (J. H. Dunsmuir,
     github.com/LazzyIzzi/MuMassCalculator, "tabulated XCOM data used with permission"); every total checked against the XCOM total
     column and against the μ/ρ of NIST SRD 126 below (water and air agree to 0.05 %).
   mats: materials with their density (g/cm³) and composition by weight from Hubbell and Seltzer, NIST Standard Reference Database 126,
     Tables 1 and 2 (doi:10.18434/T4D01F), and en: rows "E,mu,mu_en" (keV, cm²/g) of that database's Tables 3 and 4, 1 keV to 20 MeV.
   tab1[Z]: symbol, Z/A, mean excitation energy I (eV), density (g/cm³), SRD 126 Table 1.
   atom[Z]: K edge (keV), K fluorescence yield, K lines [keV, relative rate], L3 edge (keV), L3 fluorescence yield, Lα1 (keV), as
     tabulated in xraylib 4.3 (Schoonjans et al. 2011, Spectrochim. Acta B 66, 776): yields from Krause 1979 (J. Phys. Chem. Ref. Data
     8, 307), line energies from Deslattes et al. 2003 (Rev. Mod. Phys. 75, 35), radiative rates as xraylib lists them.
   ff[Z]: [atomic form factor F, incoherent scattering function S] at x = sin(θ/2)/λ (1/Å) on the grid xg, Hubbell et al. 1975
     (J. Phys. Chem. Ref. Data 4, 471), the functions XCOM itself uses, as tabulated in xraylib 4.3.
   spec[kVp]: tungsten anode X-ray spectra, 12° anode angle, 0.8 mm beryllium window, fluence per keV per mAs at 1 m (photons/cm²),
     1 keV bins centered at 1.5, 2.5, ... keV, from SpekPy 2.5.4 (Poludniowski et al. 2021, Med. Phys. 48, 3630) with its default
     physics; spec['80k'] is SpekPy's own air kerma (µGy per mAs at 1 m), kept to check the kerma computed here. */
'''
body='(function (g) { g.VDPHOTON = '+json.dumps({'xcom':xc,**o},separators=(',',':'),ensure_ascii=False)+'; })(typeof window !== \'undefined\' ? window : globalThis);\n'
open(os.path.join(HERE, '..', '..', 'demos', 'lib', 'photondata.js'),'w').write(hdr+body)
print(len(hdr+body))
