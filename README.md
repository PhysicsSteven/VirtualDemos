# Virtual Physics Demos

Interactive physics demonstrations for introductory courses. Each demo is a single self-contained HTML file in `demos/` that runs in any modern browser with nothing to install.

## Demos

| Demo | Subject | Topic |
| --- | --- | --- |
| [Projectile Range](demos/projectile-drag.html) | Mechanics | Projectile motion with and without quadratic air drag |
| [Gas in a Box](demos/ideal-gas.html) | Thermodynamics | Kinetic theory of a 2D gas: pressure, temperature, Maxwell-Boltzmann speeds, adiabatic compression |
| [Coulomb Sandbox](demos/coulomb-sandbox.html) | Electricity and magnetism | Electric field and potential of point charges, as a 2D map and a 3D potential landscape |
| [Optics Bench](demos/optics-bench.html) | Optics | Ray tracing through lenses, mirrors and glass, with image formation, total internal reflection and dispersion |

## Viewing

Open any file in `demos/` directly in a browser, or enable GitHub Pages (Settings → Pages → deploy from the `main` branch) and visit the site's `index.html`, which links to every demo.

## Adding a demo

1. Put the new demo in `demos/` as a single HTML file.
2. Add a card for it in `index.html` and a row in the table above.
