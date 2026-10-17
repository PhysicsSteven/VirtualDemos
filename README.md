# Virtual Physics Demos

Interactive physics demonstrations for introductory courses. Each demo is a single self-contained HTML file in `demos/` that runs in any modern browser with nothing to install.

## Demos

| Demo | Subject | Topic |
| --- | --- | --- |
| [Blackbody Radiation](demos/blackbody.html) | Astronomy | Planck curves, Wien's law, Stefan-Boltzmann luminosity and the colors of stars |
| [Reasons for Seasons](demos/seasons.html) | Astronomy | Axial tilt, Sun paths, day length and insolation through the year, and the distance misconception |
| [Moon Phases](demos/moon-phases.html) | Astronomy | Phases from orbit geometry, Moon rise and set times, sidereal and synodic months, and eclipse seasons |
| [Kepler's Laws](demos/kepler-orbits.html) | Astronomy | Orbits from a launch velocity, equal areas in equal times, and P² = a³/M against the solar system |
| [Stellar Evolution](demos/hr-diagram.html) | Astronomy | Evolution tracks on the HR diagram, white dwarf cooling, and cluster turnoff ages |
| [Finding Exoplanets](demos/exoplanets.html) | Astronomy | Transit light curves and radial velocity curves, side by side |
| [Star Slice](demos/star-slice.html) | Astronomy | Cross section of a MESA stellar model: composition, convection, burning shells and white dwarf crystallization (data tools in `tools/star-slice`) |
| [Spectra Explorer](demos/spectra.html) | Modern physics and astronomy | Emission and absorption lines of 99 elements from NIST data, the Bohr model of hydrogen, and a mystery spectrum game |
| [Spacetime Diagrams](demos/spacetime.html) | Modern physics | Minkowski diagrams: light cones, the interval, Lorentz boosts, simultaneity, time dilation, length contraction and the twin paradox |
| [Quantum Wave Packets](demos/quantum-waves.html) | Modern physics | The 1D time dependent Schrödinger equation for an electron: spreading, tunneling, bound states, superpositions, uncertainty and measurement |
| [Hydrogen Orbitals](demos/hydrogen-orbitals.html) | Modern physics | Exact hydrogen wave functions: 3D probability clouds, slices with nodes, radial probability, real and complex orbitals, and a 1s + 2p superposition |
| [Photoelectric Effect](demos/photoelectric.html) | Modern physics | Photon energy, work function, stopping voltage, and measuring Planck's constant |
| [Projectile Range](demos/projectile-drag.html) | Mechanics | Projectile motion with and without quadratic air drag |
| [Gas in a Box](demos/ideal-gas.html) | Thermodynamics | Kinetic theory of a 2D gas: pressure, temperature, Maxwell-Boltzmann speeds, adiabatic compression |
| [Coulomb Sandbox](demos/coulomb-sandbox.html) | Electricity and magnetism | Electric field and potential of point charges, as a 2D map and a 3D potential landscape |
| [Optics Bench](demos/optics-bench.html) | Optics | Ray tracing through lenses, mirrors and glass, with image formation, total internal reflection and dispersion |

## Viewing

Open any file in `demos/` directly in a browser, or enable GitHub Pages (Settings → Pages → deploy from the `main` branch) and visit the site's `index.html`, which links to every demo.

## Adding a demo

1. Put the new demo in `demos/` as a single HTML file.
2. Add a card for it in `index.html` and a row in the table above.
