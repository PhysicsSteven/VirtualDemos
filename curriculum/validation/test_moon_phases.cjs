'use strict';
// Moon Phases: the month lengths, the lit fraction, rise and set times, the Moon's latitude, and the eclipse limits.
// The page has no core markers, so pick() takes its one line declarations by name and runs them.
const assert = require('node:assert');
const { pick } = require('./demo_source.cjs');
const c = pick('moon-phases', 'P_SYN,P_SID,YEAR,P_NODE,EC_YEAR,INC,R_EARTH_DEG,R_MOON_DEG,UMBRA_DEG,PENUMBRA_DEG,SOLAR_LIMIT_BETA,UMBRAL_LIMIT_BETA,PEN_LIMIT_BETA,rad,mod,angDist,litFrac,beta,riseH,transitH,setH');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300), `${w || ''}: expected ${b}, got ${a}`);
const close = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('synodic month from the sidereal month and year: 1/P_syn = 1/P_sid − 1/P_year = 29.5306 d', () => {
  near(1 / (1 / c.P_SID - 1 / c.YEAR), c.P_SYN, 2e-6);
  // eclipse year (the Sun's return to the same node) 346.62 d (Meeus, Astronomical Algorithms ch. 54)
  near(c.EC_YEAR, 346.620, 1e-4);   /* the page gets 346.633 d (sidereal year with the node period against the equinox), 0.004% long */
});

group('lit fraction (1 − cos E)/2: new 0, quarters ½, full 1', () => {
  close(c.litFrac(0), 0, 1e-16); close(c.litFrac(90), 0.5, 1e-15); close(c.litFrac(180), 1, 1e-15); close(c.litFrac(270), 0.5, 1e-15);
  close(c.litFrac(60), 0.25, 1e-15, 'crescent at 60°');
});

group('rise, transit and set run 50 minutes later per day; full moon rises at sunset, first quarter is highest at sunset', () => {
  close(c.riseH(180), 18, 1e-12); close(c.transitH(90), 18, 1e-12); close(c.setH(0), 18, 1e-12); close(c.transitH(0), 12, 1e-12);
  const perDay = 360 / c.P_SYN / 15 * 60; near(perDay, 48.76, 1e-3, 'minutes per day (the 50 minute rule)');
  close(c.mod(c.riseH(360 / c.P_SYN) - c.riseH(0), 24) * 60, perDay, 1e-9);
});

group('the Moon’s latitude β = i sin(E − node) peaks at the 5.145° tilt; zero at a node', () => {
  close(c.beta(90, 0), c.INC, 1e-12); close(c.beta(40, 40), 0, 1e-12); close(c.beta(220, 40), 0, 1e-12);
});

group('eclipse limits from the shadow geometry (Meeus ch. 54): umbra and penumbra at the Moon’s distance with the usual 2% atmosphere enlargement', () => {
  const piM = c.R_EARTH_DEG, piS = 8.794 / 3600, sS = 0.2666;                       // lunar and solar parallax, Sun’s semidiameter (°)
  near(c.UMBRA_DEG, 1.02 * (piM + piS - sS), 0.03, 'umbra radius');
  near(c.PENUMBRA_DEG, 1.02 * (piM + piS + sS), 0.03, 'penumbra radius');
  near(c.R_MOON_DEG, 0.2725 * c.R_EARTH_DEG, 2e-3, 'Moon radius / Earth radius = 0.2725');
  // a lunar eclipse needs |β| < umbra + Moon; a solar eclipse |β| < π_M + s_S + s_M
  near(c.UMBRAL_LIMIT_BETA, c.UMBRA_DEG + c.R_MOON_DEG, 1e-15); near(c.SOLAR_LIMIT_BETA, piM + sS + c.R_MOON_DEG, 2e-3);
  assert(c.PEN_LIMIT_BETA > c.UMBRAL_LIMIT_BETA && c.SOLAR_LIMIT_BETA > c.UMBRAL_LIMIT_BETA, 'solar eclipses are commoner than umbral lunar ones');
  // ecliptic limits in elongation from the node: β = i sin(Δ) → Δ = asin(limit / i)
  const lunar = Math.asin(c.UMBRAL_LIMIT_BETA / c.INC) * 180 / Math.PI, solar = Math.asin(c.SOLAR_LIMIT_BETA / c.INC) * 180 / Math.PI;
  assert(lunar > 9 && lunar < 12 && solar > 15 && solar < 18.5, `limits ${lunar}°, ${solar}°`);
  // a solar eclipse season (2 × solar limit) is longer than a synodic month, so every season has at least one
  assert(2 * solar / (360 / c.EC_YEAR) > c.P_SYN);
});

console.log(`${n} moon phases test groups passed`);
