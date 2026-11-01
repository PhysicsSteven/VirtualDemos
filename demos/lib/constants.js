/* Physical constants for every demo, in one place (Steve, 2026-11-01). SI units unless the name says otherwise.
   Sources: CODATA 2022 (NIST, https://physics.nist.gov/cuu/Constants/), exact where the 2019 SI fixes them; IAU 2012 B2 (au),
   IAU 2015 B2 and B3 (nominal solar and planetary values, bolometric magnitude); Willmer 2018 (ApJS 236, 47) for the Sun's
   absolute V magnitude; the site's own conventions (g, the speed of sound) as stated in CLAUDE.md.

   Use:  in a demo, <script src="lib/constants.js"></script> then VDC.c, VDC.G ...; in Node, require('../../demos/lib/constants.js').
   A CORE block that must run on its own may keep a literal, but it must equal the value here: `node tools/rules.cjs` (constants)
   flags any literal in demo code that is close to one of these values without being equal to it.
   To add a constant: give the value, its unit and its source. Only values used by a demo belong here. */
(function (root) {
  const pi = Math.PI;
  const T = {
    /* exact (2019 SI) */
    c:      [299792458, 'm/s', 'speed of light in vacuum', 'exact'],
    h:      [6.62607015e-34, 'J s', 'Planck constant', 'exact'],
    e:      [1.602176634e-19, 'C', 'elementary charge', 'exact'],
    kB:     [1.380649e-23, 'J/K', 'Boltzmann constant', 'exact'],
    NA:     [6.02214076e23, '1/mol', 'Avogadro constant', 'exact'],
    /* derived from exact constants (computed, so exact to double precision) */
    hbar:   [6.62607015e-34 / (2 * pi), 'J s', 'reduced Planck constant h/2π', 'exact (derived)'],
    R:      [6.02214076e23 * 1.380649e-23, 'J/(mol K)', 'molar gas constant N_A k', 'exact (derived)'],
    F:      [6.02214076e23 * 1.602176634e-19, 'C/mol', 'Faraday constant N_A e', 'exact (derived)'],
    sigma:  [5.670374419e-8, 'W/(m² K⁴)', 'Stefan–Boltzmann constant', 'CODATA 2022 (exact, rounded to 10 digits)'],
    wienB:  [2.897771955e-3, 'm K', 'Wien wavelength displacement constant', 'CODATA 2022 (exact, rounded to 10 digits)'],
    eV:     [1.602176634e-19, 'J', 'electron volt', 'exact'],
    /* measured, CODATA 2022 */
    G:      [6.67430e-11, 'm³/(kg s²)', 'Newtonian constant of gravitation', 'CODATA 2022'],
    eps0:   [8.8541878188e-12, 'F/m', 'vacuum electric permittivity', 'CODATA 2022'],
    mu0:    [1.25663706127e-6, 'N/A²', 'vacuum magnetic permeability', 'CODATA 2022'],
    ke:     [8.9875517862e9, 'N m²/C²', 'Coulomb constant 1/(4π ε0)', 'CODATA 2022'],
    me:     [9.1093837139e-31, 'kg', 'electron mass', 'CODATA 2022'],
    mp:     [1.67262192595e-27, 'kg', 'proton mass', 'CODATA 2022'],
    mn:     [1.67492750056e-27, 'kg', 'neutron mass', 'CODATA 2022'],
    u:      [1.66053906892e-27, 'kg', 'atomic mass constant', 'CODATA 2022'],
    meMeV:  [0.51099895069, 'MeV', 'electron rest energy', 'CODATA 2022'],
    mpMeV:  [938.27208943, 'MeV', 'proton rest energy', 'CODATA 2022'],
    mnMeV:  [939.56542194, 'MeV', 'neutron rest energy', 'CODATA 2022'],
    uMeV:   [931.49410372, 'MeV', 'atomic mass constant energy equivalent', 'CODATA 2022'],
    a0:     [5.29177210544e-11, 'm', 'Bohr radius', 'CODATA 2022'],
    alpha:  [7.2973525643e-3, '', 'fine structure constant', 'CODATA 2022'],
    Rinf:   [10973731.568157, '1/m', 'Rydberg constant', 'CODATA 2022'],
    RyeV:   [13.605693122990, 'eV', 'Rydberg energy', 'CODATA 2022'],
    RH:     [10967758.34, '1/m', 'Rydberg constant for hydrogen R∞/(1 + m_e/m_p)', 'from CODATA 2022'],
    lambdaC:[2.42631023538e-12, 'm', 'electron Compton wavelength', 'CODATA 2022'],
    /* site conventions and standard values */
    g:      [9.81, 'm/s²', 'free fall acceleration (site convention, textbook value)', 'OpenStax'],
    g0:     [9.80665, 'm/s²', 'standard gravity (ISA atmosphere model only)', 'exact (CGPM 1901)'],
    atm:    [101325, 'Pa', 'standard atmosphere', 'exact'],
    T0:     [273.15, 'K', '0 °C', 'exact'],
    sound20:[343.2, 'm/s', 'speed of sound in dry air at 20 °C (c = 331.3 √(1 + t/273.15))', 'site convention'],
    Mair:   [0.0289647, 'kg/mol', 'molar mass of dry air', 'CRC Handbook'],
    MairStd:[0.0289644, 'kg/mol', 'molar mass of air in the US Standard Atmosphere 1976 (ISA model only)', 'US Standard Atmosphere 1976'],
    RStd:   [8.31432, 'J/(mol K)', 'gas constant as defined in the US Standard Atmosphere 1976 (ISA model only)', 'US Standard Atmosphere 1976'],
    /* astronomy */
    au:     [149597870700, 'm', 'astronomical unit', 'exact (IAU 2012 B2)'],
    pc:     [149597870700 * 648000 / pi, 'm', 'parsec', 'exact (IAU 2015 B2)'],
    yr:     [31557600, 's', 'Julian year', 'exact (IAU)'],
    yrDays: [365.25, 'd', 'Julian year in days', 'exact (IAU)'],
    ly:     [299792458 * 31557600, 'm', 'light year (Julian)', 'exact (IAU)'],
    day:    [86400, 's', 'mean solar day', 'exact (definition)'],
    daySid: [86164.0905, 's', 'sidereal day (rotation relative to the equinox)', 'IERS'],
    dayStel:[86164.0989, 's', 'stellar day (rotation relative to the stars)', 'IERS'],
    yrGreg: [31556952, 's', 'Gregorian year (365.2425 d)', 'exact (calendar)'],
    yrSid:  [365.256363004, 'd', 'sidereal year', 'IERS'],
    GMsun:  [1.3271244e20, 'm³/s²', 'solar mass parameter (nominal)', 'IAU 2015 B3'],
    Msun:   [1.3271244e20 / 6.67430e-11, 'kg', 'solar mass, GM/G', 'IAU 2015 B3 with CODATA 2022 G'],
    Rsun:   [6.957e8, 'm', 'solar radius (nominal)', 'IAU 2015 B3'],
    Lsun:   [3.828e26, 'W', 'solar luminosity (nominal)', 'IAU 2015 B3'],
    Tsun:   [5772, 'K', 'solar effective temperature (nominal)', 'IAU 2015 B3'],
    Ssun:   [1361, 'W/m²', 'total solar irradiance at 1 au (nominal)', 'IAU 2015 B3'],
    MbolSun:[4.74, 'mag', 'solar absolute bolometric magnitude', 'IAU 2015 B2'],
    MVsun:  [4.81, 'mag', 'solar absolute V magnitude', 'Willmer 2018'],
    GMearth:[3.986004e14, 'm³/s²', 'Earth mass parameter (nominal)', 'IAU 2015 B3'],
    Mearth: [3.986004e14 / 6.67430e-11, 'kg', 'Earth mass, GM/G', 'IAU 2015 B3 with CODATA 2022 G'],
    RearthMean:[6.3710088e6, 'm', 'Earth mean radius', 'IUGG (Moritz 2000)'],
    Rearth: [6.3781e6, 'm', 'Earth equatorial radius (nominal)', 'IAU 2015 B3'],
    RearthP:[6.3568e6, 'm', 'Earth polar radius (nominal)', 'IAU 2015 B3'],
    GMjup:  [1.2668653e17, 'm³/s²', 'Jupiter mass parameter (nominal)', 'IAU 2015 B3'],
    Mjup:   [1.2668653e17 / 6.67430e-11, 'kg', 'Jupiter mass, GM/G', 'IAU 2015 B3 with CODATA 2022 G'],
    Rjup:   [7.1492e7, 'm', 'Jupiter equatorial radius (nominal)', 'IAU 2015 B3'],
  };
  const VDC = {};
  for (const k in T) VDC[k] = T[k][0];
  VDC.table = T;   /* [value, unit, name, source] for each, for notes and checks */
  if (typeof module !== 'undefined' && module.exports) module.exports = VDC;
  else root.VDC = VDC;
})(typeof window !== 'undefined' ? window : globalThis);
