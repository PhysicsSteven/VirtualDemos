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
    re:     [2.8179403205e-15, 'm', 'classical electron radius', 'CODATA 2022'],
    hc_eVnm:[1239.841984332, 'eV nm', 'hc (the same number in keV pm)', 'exact (derived)'],
    mmuMeV: [105.6583755, 'MeV', 'muon rest energy', 'CODATA 2022'],
    mdMeV:  [1875.612945, 'MeV', 'deuteron rest energy', 'CODATA 2022'],
    maMeV:  [3727.3794118, 'MeV', 'alpha particle rest energy', 'CODATA 2022'],
    tauMu:  [2.1969811e-6, 's', 'muon mean life', 'PDG 2024'],
    /* atomic masses, AME2020 (Wang et al. 2021, Chinese Phys. C 45, 030003), rounded to 7 or 8 figures; used by Bose–Einstein Condensation */
    mRb87u: [86.909181, 'u', 'atomic mass of rubidium 87', 'AME2020'],
    mNa23u: [22.989769, 'u', 'atomic mass of sodium 23', 'AME2020'],
    mLi7u:  [7.0160034, 'u', 'atomic mass of lithium 7', 'AME2020'],
    mH1u:   [1.0078250, 'u', 'atomic mass of hydrogen 1', 'AME2020'],
    mHe4u:  [4.0026033, 'u', 'atomic mass of helium 4', 'AME2020'],
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
    GMmoon: [4.9028001e12, 'm³/s²', 'Moon mass parameter', 'JPL DE430 (Folkner et al. 2014)'],
    GMearth:[3.986004e14, 'm³/s²', 'Earth mass parameter (nominal)', 'IAU 2015 B3'],
    GMearthWGS:[3.986004418e14, 'm³/s²', 'Earth mass parameter with the atmosphere, the value GPS orbits use', 'WGS 84 (NGA.STND.0036, 2014)'],
    Mearth: [3.986004e14 / 6.67430e-11, 'kg', 'Earth mass, GM/G', 'IAU 2015 B3 with CODATA 2022 G'],
    RearthMean:[6.3710088e6, 'm', 'Earth mean radius', 'IUGG (Moritz 2000)'],
    Rearth: [6.3781e6, 'm', 'Earth equatorial radius (nominal)', 'IAU 2015 B3'],
    RearthP:[6.3568e6, 'm', 'Earth polar radius (nominal)', 'IAU 2015 B3'],
    GMjup:  [1.2668653e17, 'm³/s²', 'Jupiter mass parameter (nominal)', 'IAU 2015 B3'],
    Mjup:   [1.2668653e17 / 6.67430e-11, 'kg', 'Jupiter mass, GM/G', 'IAU 2015 B3 with CODATA 2022 G'],
    Rjup:   [7.1492e7, 'm', 'Jupiter equatorial radius (nominal)', 'IAU 2015 B3'],
    /* the galaxy (Milky Way, Galaxy Collisions, Active Galaxies, Galaxy Clusters; 2026-11-17) */
    sigmaT: [6.6524587051e-29, 'm²', 'Thomson cross section', 'CODATA 2022'],
    R0gal:  [8.178, 'kpc', "the Sun's distance from the Galactic center", 'GRAVITY Collaboration 2019 (A&A 625, L10)'],
    vcSun:  [229.0, 'km/s', 'circular speed of the Galaxy at the Sun', 'Eilers et al. 2019 (ApJ 871, 120)'],
    Zsun:   [0.0134, '', "the Sun's present day metal mass fraction", 'Asplund et al. 2009 (ARA&A 47, 481)'],
    H0:     [67.4, 'km/s/Mpc', 'Hubble constant, base ΛCDM', 'Planck Collaboration 2018 VI (A&A 641, A6)'],
    Om0:    [0.315, '', 'matter density parameter today, base ΛCDM', 'Planck Collaboration 2018 VI (A&A 641, A6)'],
    muICM:  [0.6, 'u', 'mean mass per particle of the hot gas in galaxy clusters (ionized, solar mix)', 'Sarazin 1988, X-ray Emission from Clusters of Galaxies'],
    /* the Sun and starlight (Inside the Sun, The Sun: Surface and Cycle, Starlight, Spectral Classes; 2026-11-17) */
    TcSun:  [1.571e7, 'K', "the Sun's central temperature (standard solar model)", 'NASA GSFC Sun Fact Sheet (D. R. Williams)'],
    rhocSun:[1.622e5, 'kg/m³', "the Sun's central density (standard solar model)", 'NASA GSFC Sun Fact Sheet (D. R. Williams)'],
    mVmoon: [-12.74, 'mag', 'apparent V magnitude of the full Moon at mean opposition', 'NASA GSFC Moon Fact Sheet (D. R. Williams)'],
    mVvenus:[-4.92, 'mag', 'apparent V magnitude of Venus at its brightest', 'Mallama and Hilton 2018, Astronomy and Computing 25, 10'],
    /* mean molecular weights of planetary atmospheres (Finding Exoplanets transmission spectra, 2026-11-15). Molecules from the
       CIAAW 2021 standard atomic weights (H 1.008, C 12.011, N 14.007, O 15.999); solar H2 + He gas from the present day solar mass
       fractions X = 0.7381, Y = 0.2485, Z = 0.0134 (Asplund et al. 2009, ARA&A 47, 481), hydrogen as H2: 1/(X/2.016 + Y/4.0026 + Z/17) */
    muSolarH2:[2.33, 'u', 'mean molecular weight of solar composition H2 + He gas', 'Asplund et al. 2009 mass fractions'],
    MH2Ou:  [18.015, 'u', 'molecular weight of water', 'CIAAW 2021'],
    MN2u:   [28.014, 'u', 'molecular weight of nitrogen N2', 'CIAAW 2021'],
    MCO2u:  [44.009, 'u', 'molecular weight of carbon dioxide', 'CIAAW 2021'],
    /* the interstellar medium (Between the Stars, 2026-11-17) */
    fHI:    [1420405751.768, 'Hz', 'hydrogen 21 cm hyperfine (spin flip) frequency', 'Hellwig et al. 1970 (IEEE Trans. Instrum. Meas. 19, 200)'],
    A21:    [2.8843e-15, '1/s', 'spontaneous emission rate of the 21 cm line', 'Gould 1994 (ApJ 423, 522)'],
    alphaB: [2.59e-13, 'cm³/s', 'case B hydrogen recombination coefficient at 10,000 K', 'Osterbrock and Ferland 2006, Table 2.1'],
    NHperAV:[2.21e21, 'cm⁻²/mag', 'hydrogen column per magnitude of visual extinction, N_H/A_V', 'Güver and Özel 2009 (MNRAS 400, 2050)'],
    /* gravity and relativity (Gravitational Waves, Equivalence and Tests of Gravity; 2026-11-17) */
    rp:     [8.4075e-16, 'm', 'proton rms charge radius', 'CODATA 2022'],
    Larm:   [3994.5, 'm', 'LIGO arm length (Hanford and Livingston)', 'Aasi et al. 2015, Advanced LIGO (CQG 32, 074001)'],
    dHL:    [3.002e6, 'm', 'straight line distance between the LIGO Hanford and Livingston sites', 'LIGO Laboratory (Abbott et al. 2016, PRL 116, 061102: 10 ms light travel time)'],
    aMerc:  [0.38709927, 'au', "Mercury's semimajor axis (J2000)", 'Standish, JPL Keplerian elements for 1800 to 2050'],
    eMerc:  [0.20563593, '', "Mercury's orbital eccentricity (J2000)", 'Standish, JPL Keplerian elements for 1800 to 2050'],
    PMerc:  [87.969, 'd', "Mercury's sidereal orbital period", 'NASA GSFC Mercury Fact Sheet (D. R. Williams)'],
    lb:     [0.45359237, 'kg', 'international avoirdupois pound', 'exact (1959 international yard and pound agreement)'],
    OmStar: [0.0027, '', 'density of stars and stellar remnants today as a share of the critical density', 'Fukugita and Peebles 2004 (ApJ 616, 643), Table 2'],
    /* liquids (Surface Tension and Capillarity, Diffusion and Osmosis; 2026-11-19). Surface tensions: OpenStax College Physics 2e
       Table 11.3, at 20 °C unless stated; contact angles: Table 11.4; diffusion constants: Table 12.2, at 20 °C and 1 atm */
    gamWater0:  [0.0756, 'N/m', 'surface tension of water at 0 °C', 'OpenStax College Physics 2e, Table 11.3'],
    gamWater20: [0.0728, 'N/m', 'surface tension of water at 20 °C', 'OpenStax College Physics 2e, Table 11.3'],
    gamWater100:[0.0589, 'N/m', 'surface tension of water at 100 °C', 'OpenStax College Physics 2e, Table 11.3'],
    gamSoap:    [0.0370, 'N/m', 'surface tension of soapy water (typical)', 'OpenStax College Physics 2e, Table 11.3'],
    gamEthanol: [0.0223, 'N/m', 'surface tension of ethyl alcohol', 'OpenStax College Physics 2e, Table 11.3'],
    gamGlycerin:[0.0631, 'N/m', 'surface tension of glycerin', 'OpenStax College Physics 2e, Table 11.3'],
    gamHg:      [0.465, 'N/m', 'surface tension of mercury', 'OpenStax College Physics 2e, Table 11.3'],
    gamOlive:   [0.032, 'N/m', 'surface tension of olive oil', 'OpenStax College Physics 2e, Table 11.3'],
    gamTissue:  [0.050, 'N/m', 'surface tension of tissue fluids (typical)', 'OpenStax College Physics 2e, Table 11.3'],
    gamBlood:   [0.058, 'N/m', 'surface tension of whole blood at 37 °C', 'OpenStax College Physics 2e, Table 11.3'],
    gamPlasma:  [0.073, 'N/m', 'surface tension of blood plasma at 37 °C', 'OpenStax College Physics 2e, Table 11.3'],
    thHgGlass:  [140, '°', 'contact angle of mercury on glass', 'OpenStax College Physics 2e, Table 11.4'],
    thWaterParaffin:[107, '°', 'contact angle of water on paraffin', 'OpenStax College Physics 2e, Table 11.4'],
    thWaterSilver:[90, '°', 'contact angle of water on silver', 'OpenStax College Physics 2e, Table 11.4'],
    DH2air:     [6.4e-5, 'm²/s', 'diffusion constant of hydrogen in air', 'OpenStax College Physics 2e, Table 12.2'],
    DO2air:     [1.8e-5, 'm²/s', 'diffusion constant of oxygen in air', 'OpenStax College Physics 2e, Table 12.2'],
    DO2water:   [1.0e-9, 'm²/s', 'diffusion constant of oxygen in water', 'OpenStax College Physics 2e, Table 12.2'],
    DGlucose:   [6.7e-10, 'm²/s', 'diffusion constant of glucose in water', 'OpenStax College Physics 2e, Table 12.2'],
    DHemoglobin:[6.9e-11, 'm²/s', 'diffusion constant of hemoglobin in water', 'OpenStax College Physics 2e, Table 12.2'],
    DDNA:       [1.3e-12, 'm²/s', 'diffusion constant of DNA in water', 'OpenStax College Physics 2e, Table 12.2'],
    mmHg:       [133.322387415, 'Pa', 'conventional millimeter of mercury (13.5951 g/cm³ × 9.80665 m/s² × 1 mm)', 'exact (definition, BIPM SI Brochure)'],
    rhoBlood:   [1050, 'kg/m³', 'density of whole blood', 'OpenStax College Physics 2e, 11.9 (Pressures in the Body) and Table 11.1'],
    /* hearing (Hearing and the Ear, 2026-11-19) */
    Iref:       [1e-12, 'W/m²', 'reference intensity I₀ of the sound intensity level in decibels', 'definition (OpenStax University Physics 17.3)'],
  };
  const VDC = {};
  for (const k in T) VDC[k] = T[k][0];
  VDC.table = T;   /* [value, unit, name, source] for each, for notes and checks */
  if (typeof module !== 'undefined' && module.exports) module.exports = VDC;
  else root.VDC = VDC;
})(typeof window !== 'undefined' ? window : globalThis);
