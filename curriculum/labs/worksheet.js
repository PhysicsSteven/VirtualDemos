/* Interactive worksheets (Claude, tools side; the handouts themselves are GPT's Markdown and are not edited).
   Loaded by _includes/head-custom.html on every Markdown page, before MathJax, so it runs on the parsed page before any math is
   typeset. It does nothing unless the page is a student worksheet listed in ENABLED. On those pages it:
   - turns every empty cell of the data tables into a text field, with Add a row and Add another copy of the table;
   - puts an answer box under each numbered item in Before the lab / Before the activity, Analysis and Questions, and one under
     Uncertainty;
   - saves everything in this browser (localStorage) as the student types;
   - exports: Print or save as PDF, the data tables as CSV, and a save file (JSON) that can be opened again on another computer.
   Nothing on the page is changed except what is added here. The demos are not touched. */
(function () {
  'use strict';
  /* Physics I worksheets (physics-1.html). Add a worksheet's file name here to make it interactive. */
  const PHYSICS_I = ['collisions', 'energy-sources', 'estimation-and-evidence', 'fluids', 'forces', 'impulse', 'kepler-orbits',
    'measurement-and-units', 'motion-graphs', 'pendulum', 'potential-curves', 'projectile-drag', 'rotation', 'rotational-dynamics',
    'springs', 'stress-strain', 'viscometer', 'force-table', 'gyroscope', 'circular-motion', 'rocket',
    'gravity-near-earth', 'tides', 'gps-clocks' /* gravitation, Vol. 1 ch. 13, 2026-10-24 */,
    'relative-motion', 'apparent-weight', 'center-of-mass' /* cart launch, elevator, center of mass demos, 2026-10-24 */,
    'static-equilibrium', 'catenary', 'double-pendulum' /* Static Equilibrium, Hanging Chains and Arches, Pendulums and Chaos demos, 2026-10-24 */];
  const ENABLED = PHYSICS_I.slice();
  /* Readings a demo hands over with its Export to worksheet button (localStorage key vd-handoff:<worksheet>). For each worksheet:
     the demo's name and, for each column of the worksheet's first data table, what fills it: a column of the demo's CSV, '#name' for
     a value from the CSV's header lines, a function of the row (r, keyed by CSV column) and those values (h), or null (left alone).
     Every value is the demo's own, in the units of the worksheet's column; nothing is converted except where a function says so. */
  const both = (...ks) => (r) => ks.map((k) => r[k]).filter((v) => v !== '' && v != null).join(', ');
  const sig = (v) => (isFinite(v) && v !== '' ? String(+(+v).toPrecision(6)) : '');
  const FROM_DEMO = {
    pendulum: { demo: 'Pendulum', cols: ['row', 'type', 'L_m', 'theta0_deg', 'm_kg', 'T_s', 'T2_s2', null] },
    collisions: { demo: 'Collisions', cols: [both('row', 'bumper'), 'm1_kg', 'm2_kg', 'u1_m_per_s', 'u2_m_per_s', 'v1_after_m_per_s', 'v2_after_m_per_s'] },
    fluids: { demo: 'Fluids', cols: [(r) => [r.scene, r.liquid].concat(r.depth_d_m ? [`d = ${r.depth_d_m} m`] : []).filter(Boolean).join(', '),
      both('depth_h_m', 'D1_m', 'D2_m'), both('P_Pa', 'h1_m', 'h2_m'),
      (r) => (r.block_edge_L_m !== '' && r.block_edge_L_m != null ? sig(Math.pow(+r.block_edge_L_m, 3)) : ''), /* block volume L³ from its edge */
      'scale_in_air_W_N', 'scale_T_N', 'Q_m3_s'] },
    forces: { demo: 'Forces and Friction', cols: ['row', 'm_kg', 'theta_deg', null, (r, h) => (r.t_gate_s ? h.gate_distance_m || '' : ''), 't_gate_s', 'a_m_per_s2', null] },
    'kepler-orbits': { demo: 'Kepler Orbits', cols: [both('row', 'preset'), 'M_Msun', 'ruler_d12_AU', 'a_AU', 'timer_T_yr', 'a3_AU3', 'T2_yr2'] },
    /* Reading | Planet | Height h (km) | Latitude (°) | r (Mm) | Gravity alone GM/r² (m/s²) | Effective g (m/s²) | Real Earth at sea level (m/s²) | 1/r² (1/Mm²) | cos² of latitude */
    'gravity-near-earth': { demo: 'Gravity Near Earth', cols: ['row', (r) => r.planet + (r.rotation === 'off' ? ', not rotating' : ''), 'h_km', 'lat_deg', 'r_Mm', 'g_grav_m_s2', 'g_eff_m_s2', 'g_wgs84_m_s2', null, null] },
    /* Reading | Moon's distance d (Earth radii) | Pull at Earth's centre (μm/s²) | Tidal pull, near side (μm/s²) | Tidal pull, far side (μm/s²) | Mean of near and far (μm/s²) | 1/d² (d in Earth radii) | 1/d³ (d in Earth radii) */
    tides: { demo: 'Tides', cols: ['row', 'd_RE', 'pull_um_s2', 'tidal_near_um_s2', 'tidal_far_um_s2', null, null, null] },
    /* Reading | Second clock | r (km) | Speed v (km/s) | Gravity part (μs/day) | Speed part (μs/day) | Net gain (μs/day) | 1/r (1/Mm) | v² (km²/s²) */
    'gps-clocks': { demo: 'GPS Clocks and Relativity', cols: ['row', (r) => r.second_clock + (r.ground_turns === 'no' ? ', ground clock at rest' : ''), 'r_km', 'v_km_s', 'grav_us_per_day', 'speed_us_per_day', 'net_us_per_day', null, null] },
    'motion-graphs': { demo: 'Motion Graphs', cols: ['row', 't_s', 'x_m', null, null] },
    'projectile-drag': { demo: 'Projectile Range', cols: ['shot', 'v0_m_per_s', 'launch_angle_deg', 'launch_height_m', 'air_resistance', 't_s', 'x_m', 'y_m', 'range_m'] },
    'rotational-dynamics': { demo: 'Rotational Dynamics', cols: ['load', 'm_kg', 'r_m', '#drop_height_m', 't_s', 'a_m_per_s2', 'alpha_rad_per_s2', 'tau_N_m'] },
    springs: { demo: 'Springs', cols: ['row', 'm_kg', 'A_m', 'T_zero_crossings_s', 'N_oscillations', 't_stopwatch_s', 'T_squared_s2'] },
    'stress-strain': { demo: 'Stress and Strain', cols: ['row', 'd_mm', '#wire_length_m', 'm_kg', 'dL_mm', null, null] },
    /* Force table setup of the Vectors demo. The handout's first data table is expected to have these columns in this order:
       Trial | m₁ (kg) | θ₁ (°) | m₂ (kg) | θ₂ (°) | m₃ (kg) | θ₃ (°) | m₄ (kg) | θ₄ (°) | Ring centered?  (more columns may follow). */
    'force-table': { demo: 'Vectors (Force table)', cols: ['trial', 'm1_kg', 'theta1_deg', 'm2_kg', 'theta2_deg', 'm3_kg', 'theta3_deg', 'm4_kg', 'theta4_deg', 'ring'] },
    /* Trial | Wheel | Start | Tilt (°) | Spin (rpm) | d (m) | P (s) | Ω (rad/s) | 1/ω_s (s) */
    gyroscope: { demo: 'Gyroscope Precession', cols: ['row', 'wheel', 'start', 'tilt_deg', 'spin_rpm', 'd_m', 'P_s', 'Omega_rad_per_s', 'inv_spin_s'] },
    /* Trial | Setup | r (m) | μs | θ (°) | tan θ | m (kg) | v (m/s) | v² (m²/s²) | Outcome */
    'circular-motion': { demo: 'Circular Motion', cols: ['row', 'setup', 'r_m', 'mu_s', 'bank_deg', 'tan_theta', 'm_kg', 'v_m_s', 'v2_m2_s2', 'outcome'] },
    /* Trial | Gravity | m_dry (kg) | m_fuel (kg) | u (m/s) | Burn rate (kg/s) | Burn time (s) | ln(m0/m_dry) | Lift off at (s) | v at cutoff (m/s) | Height at cutoff (m) */
    rocket: { demo: 'Rocket Propulsion', cols: ['row', 'gravity', 'm_dry_kg', 'm_fuel_kg', 'u_m_s', 'b_kg_s', 't_burn_s', 'ln_m0_over_mdry', 't_liftoff_s', 'v_cutoff_m_s', 'y_cutoff_m'] },
    viscometer: { demo: 'Falling Ball Viscometer', cols: ['row', (r) => [r.liquid, r.ball].filter(Boolean).join(' / '), (r) => [r.rho_liquid_kg_m3, r.rho_ball_kg_m3].filter(Boolean).join(' / '), 'tube_D_mm', 'd_mm', 't_s', 'v_m_per_s', null, null, null] },
    /* Trial | Track | v (m/s) | u (m/s) | a (m/s²) | θ (°) | Time in the air t (s) | Ball moves (m) | Cart moves (m) | Δx (cm) | Lands */
    'relative-motion': { demo: 'Ball Launched from a Moving Cart', cols: ['row', 'track', 'v_m_s', 'u_m_s', 'a_cart_m_s2', 'incline_deg', 't_air_s', 'ball_moves_m', 'cart_moves_m', 'dx_cm', 'lands'] },
    /* Reading | Stage of the ride | m (kg) | a, up + (m/s²) | v, up + (m/s) | N (N) | Scale reading R (kg) */
    'apparent-weight': { demo: 'Elevator: Apparent Weight', cols: ['row', 'stage', 'm_kg', 'a_m_s2', 'v_m_s', 'N_N', 'scale_kg'] },
    /* Reading | Setup and masses | f | t (s) | CM x (m) | CM y (m) | Unexploded x (m) | Unexploded y (m) | Walked (m) | Boat moved (m) */
    'center-of-mass': { demo: 'Center of Mass', cols: ['row', (r) => (r.masses ? `${r.setup}: ${r.masses}` : r.setup), 'f', 't_s', 'x_cm_m', 'y_cm_m', 'x_whole_m', 'y_whole_m', 'walked_m', 'boat_m'] },
    /* Trial | Setup | Load position x (m) | Cable height h (m) | Cable angle θ (°) | 1/sin θ | F₁ (N) | F₂ (N) | T (N) | H_x (N) | H_y (N) */
    'static-equilibrium': { demo: 'Static Equilibrium', cols: ['row',
      (r) => (r.setup === 'plank' ? `plank${r.tips ? ', ' + r.tips : ''}` : r.setup === 'sign' ? 'sign'
        : r.setup === 'ladder' ? `ladder at ${r.theta_deg}°, person ${r.f_up} of the way up: ${r.slips}`
        : `seesaw: ${r.m1_kg} kg at ${r.x1_m} m, ${r.m2_kg} kg at ${r.x2_m} m`),
      'x_m', 'h_m', (r) => (r.setup === 'sign' ? r.theta_deg : ''), null, 'F1_N', 'F2_N', 'T_N', 'Hx_N', 'Hy_N'] },
    /* Reading | S (m) | y_A (m) | y_B (m) | Sag d (m) | H (N) | T_A (N) | T_B (N) | 1/d | y_A − y_B | T_A − T_B */
    catenary: { demo: 'Hanging Chains and Arches', cols: [(r) => `${r.row}${r.shape === 'arch' ? ', arch' : ''}`,
      'S_m', 'yA_m', 'yB_m', 'sag_m', 'H_N', 'TA_N', 'TB_N', null, null, null] },
    /* Trial | Start | L (m) | Measured period T (s) | 1/L | ω² | log₁₀ δ | Time to separate t_d (s) */
    'double-pendulum': { demo: 'Pendulums and Chaos', cols: ['row',
      (r) => (r.start === 'simple pendulum' ? `simple pendulum, θ₀ = ${r.theta1_0_deg}°` : `${r.start}, θ₁ = ${r.theta1_0_deg}°, θ₂ = ${r.theta2_0_deg}°`
        + (+r.m1_kg !== 1 || +r.m2_kg !== 1 ? `, m₁ = ${r.m1_kg} kg, m₂ = ${r.m2_kg} kg` : '') + (+r.copies > 1 ? `, ${r.copies} copies` : '')),
      (r) => (r.L2_m === '' || r.L2_m == null || +r.L2_m === +r.L1_m ? r.L1_m : `${r.L1_m} and ${r.L2_m}`), 'T_s', null, null, 'log10_delta', 't_sep_s'] },
  };
  /* ==PHYSICS II START== Physics II worksheets (physics-2.html) and their demo column maps, kept in one block. */
  const PHYSICS_II = ['ac-circuits', 'capacitors', 'coulomb-sandbox', 'dc-circuits', 'faraday', 'gauss-law', 'magnetic-force', 'rc-circuits',
    'resistivity', 'rlc-transients', 'wire-force',
    'string-density' /* first PHYS 202 lab */, 'polarization', 'standing-waves',
    /* Physics II demos with the shared Readings section (tools/readings_panel.py) */
    'household-wiring', 'van-de-graaff', 'ink-jet-printer', 'precipitator' /* the last three: Electrostatics at Work */,
    'magnetism-in-matter', 'induced-electric-field', 'induction-at-work', 'magnets-oersted', 'huygens', 'dispersion', 'the-eye',
    'induction' /* Charging by Induction, 2026-10-24 */,
    'eddy-currents' /* Eddy Currents: Magnet in a Pipe, 2026-10-24 */,
    'michelson' /* Michelson Interferometer, 2026-10-24 */,
    'transformers', 'displacement-current' /* 2026-10-24 */,
    'resolution' /* Circular Apertures and Resolution, 2026-10-24 */,
    'holography' /* Holography, 2026-10-24 */,
    'thin-films', 'electron-diffraction', 'x-ray-diffraction' /* the last two: Electron Diffraction demo */, 'em-waves' /* 2026-10-24 */,
    'double-slit', 'diffraction-grating', 'single-slit' /* the last two: Diffraction Grating demo (grating, Single slit aperture), 2026-10-24 */];
  ENABLED.push(...PHYSICS_II);
  /* Helpers for the Physics II maps. parts: the part values a Circuits row carries (R1_ohm, C1_F, L1_H, B1_emf_V, B1_r_ohm, S1_state),
     optionally only those whose column matches a pattern. pick: the first column matching a pattern that has a value in this row
     (the Circuits channel columns are named after the parts, V_C1_V, I_L1_A, ...). Faraday values are rounded to 6 significant
     figures, as the demo's notebook shows them; everything else is the demo's text as exported. */
  const PART_UNIT = { ohm: 'Ω', F: 'F', H: 'H', emf_V: 'V' };
  const parts = (r, only) => Object.keys(r).map((k) => /^([A-Za-z]+\d+)_(r_ohm|emf_V|ohm|F|H|state)$/.exec(k))
    .filter((x) => x && r[x[0]] !== '' && r[x[0]] != null && (!only || only.test(x[0])))
    .map(([k, n, u]) => (u === 'state' ? `${n} ${r[k]}` : u === 'r_ohm' ? `${n} r = ${r[k]} Ω` : `${n} = ${r[k]} ${PART_UNIT[u]}`)).join(', ');
  const pick = (re) => (r) => { const k = Object.keys(r).find((c) => re.test(c) && r[c] !== '' && r[c] != null); return k ? r[k] : ''; };
  const json = (t) => { try { return JSON.parse(t) || {}; } catch (_) { return {}; } };
  const FD_MODE = { magnet: 'magnet and coil', gen: 'generator', coils: 'two coils', rails: 'sliding bar', self: 'self inductance' };
  Object.assign(FROM_DEMO, {
    'dc-circuits': { demo: 'Circuits', cols: [(r) => [r.reading, r.setup, parts(r)].filter(Boolean).join(', '), 'meter', 'I_A', 'V_V', null, null] },
    'rc-circuits': { demo: 'Circuits', cols: ['t_s', pick(/^V_C\d+_V$/), pick(/^I_.+_A$/), 'W_sources_J', 'U_C_J', 'heat_J'] },
    'rlc-transients': { demo: 'Circuits', cols: [(r) => [r.row, r.setup, parts(r, /_ohm$/)].filter(Boolean).join(', '), 't_s', pick(/^V_C\d+_V$/), pick(/^I_L\d+_A$/), 'U_C_J', 'U_L_J', 'heat_J'] },
    'ac-circuits': { demo: 'Circuits', cols: [(r) => [r.row, parts(r)].filter(Boolean).join(', '), 'f_Hz', 'V0_peak_V', 'Irms_A', 'phase_deg', 'P_avg_W'] },
    capacitors: { demo: 'Capacitors and Dielectrics', cols: [(r) => [r.row, r.preset, r.battery && String(r.preset).indexOf(r.battery) < 0 ? r.battery : ''].filter(Boolean).join(', '), 'd_m', 'A_m2', 'insertion_fraction', 'C_F', 'Q_C', 'V_volts', 'U_J'] },
    'coulomb-sandbox': { demo: 'Coulomb Sandbox', cols: [(r, h) => [r.row, h['config ' + r.config], h['config ' + r.config + ' charges']].filter(Boolean).join(', '),
      'x_m', 'y_m', null, 'V_volts', 'E_V_per_m', 'E_direction_deg'] },
    faraday: { demo: "Faraday's Law", cols: [(r) => [r.run ? 'run ' + r.run : '', FD_MODE[r.mode] || r.mode, r.N ? 'N = ' + r.N : '', r.R_ohm ? `R = ${sig(r.R_ohm)} Ω` : ''].filter(Boolean).join(', '),
      (r) => sig(r.t_s), (r) => sig(r.flux_Wb), (r) => sig(r.interval_EMF_V), (r) => sig(r.interval_I_A), (r) => sig(r.primary_I1_A),
      (r) => { const o = json(r.settings_SI_json); return o.speed_m_s != null ? `v = ${o.speed_m_s} m/s` : o.omega_rad_s != null ? `ω = ${sig(o.omega_rad_s)} rad/s` : o.f_Hz != null ? `f = ${sig(o.f_Hz)} Hz` : ''; }] },
    'gauss-law': { demo: "Gauss's Law", cols: [
      (r) => [r.row, r.surface, r.radius_m && `R = ${r.radius_m} m`, r.width_x_m && `width ${r.width_x_m} m`, r.height_y_m && `height ${r.height_y_m} m`,
        r.depth_z_m && `depth ${r.depth_z_m} m`, `centre (${r.center_x_m}, ${r.center_y_m}) m`].filter(Boolean).join(', '),
      (r) => String(r.charges_q_C_x_m_y_m || '').split(';').map((c) => c.trim().split(/\s+/)).filter((c) => c.length === 3).map(([q, x, y]) => `q = ${q} C at (${x}, ${y}) m`).join('; '),
      'Q_enc_C', 'flux_numerical_N_m2_per_C', 'flux_predicted_Q_enc_over_eps0_N_m2_per_C', null,
      (r) => `${r.tolerance_met === 'yes' ? 'tolerance met' : 'tolerance not met'}, ${r.field_evaluations} evaluations`] },
    'magnetic-force': { demo: 'Charges in Magnetic Fields', cols: [both('row', 'particle'), 'v_perp_m_per_s', (r) => (r.B_tesla !== '' && r.B_tesla != null ? `${r.B_tesla} T${r.B_direction ? ', ' + r.B_direction : ''}` : ''),
      'r_measured_m', 'turns_timed', 'timer_s', 'T_measured_s'] },
    resistivity: { demo: 'Resistivity of a Wire', cols: ['row', 'material', 'd_mm', 'T_C', 'L_m', 'I_A', 'V_V', 'R_ohm'] },
    'wire-force': { demo: 'Force on a Current', cols: ['row', 'I_A', 'L_cm', 'theta_deg', 'dm_g', 'F_N', null] },
    'string-density': { demo: 'Linear Density of a String', cols: ['row', '#string', 'L_m', 'm_kg', 'T_N', 'n', 'inv_n2', 'f_Hz'] },
    /* Trial | Setup | Rod charge (nC) | d (cm) | Radius of B (cm) | Gap (cm) | Connections | Q_A (nC) | Q_B (nC) | R/(R + d) */
    induction: { demo: 'Charging by Induction', cols: ['row', (r) => `${r.setup}, rod ${r.rod}`, 'q_rod_nC', 'd_cm', 'rB_cm', 'gap_cm', 'connections', 'QA_nC', 'QB_nC', 'R_over_R_plus_d'] },
    /* Reading | Setup | λ₀ (nm) | Thickness t (nm) | Reflectance R (%) | Probe x (mm) | Order m (typed) */
    'thin-films': { demo: 'Thin Film Interference', cols: ['row', (r) => `${r.view}, n ${r.n1} / ${r.nf} / ${r.n2}${+r.theta_deg ? `, θ₁ = ${r.theta_deg}°` : ''}${r.h_um ? `, spacer ${r.h_um} µm` : ''}${r.lens_R_m ? `, lens R = ${r.lens_R_m} m` : ''}`,
      'lambda_nm', 't_nm', 'R_pct', (r) => r.x_mm || r.r_mm || '', null] },
    /* Reading | Tool | Meter reading V (kV) | Wavelength λ (pm) | D₁ (mm) | D₂ (mm) */
    'electron-diffraction': { demo: 'Electron Diffraction', cols: [(r) => (r.simulated === 'yes' ? `${r.row} (simulated)` : r.row), (r) => (r.tool === 'arc' ? 'ruler (arc)' : 'caliper (chord)'), 'meter_kV', 'lambda_pm', 'D1_mm', 'D2_mm'] },
    /* Reading | Tube and crystal | Crystal angle θ (°) | Count rate (1/s) | Line, Order m, sin θ (typed) */
    'x-ray-diffraction': { demo: 'Electron Diffraction (X ray Bragg spectrometer)', cols: ['row', (r) => `${r.tube} tube, ${r.crystal} crystal`, 'theta_deg', 'rate_per_s', null, null, null] },
    /* Reading | f (Hz) | E₀ (V/m) | B₀ (T) | E₀² (typed) | I (W/m²) | pressure absorbed (Pa) | pressure reflected (Pa) */
    'em-waves': { demo: 'Electromagnetic Waves', cols: [both('row', 'setup'), 'f_Hz', 'E0_V_per_m', 'B0_T', null, 'I_W_per_m2', 'p_abs_Pa', 'p_refl_Pa'] },
    /* Trial | Setup | Hot current (A) | Neutral current (A) | Ground current (A) | Current through the person (mA) | Outlet voltage (V) | Power (W) | Wire heat (W/m) | Protection */
    'household-wiring': { demo: 'Household Wiring', cols: ['row', 'setup', 'I_hot_A', 'I_neutral_A', 'I_ground_A', 'I_body_mA', 'V_outlet_V', 'P_W', 'heat_W_per_m', 'protection'] },
    /* Trial | Dome radius R (cm) | Belt current I (μA) | Capacitance C (pF) | Highest voltage (kV) | Time to spark (s) | Spark energy (J) | Sparks counted | Running time (s) */
    'van-de-graaff': { demo: 'Electrostatics at Work', cols: ['row', 'R_cm', 'I_uA', 'C_pF', 'Vmax_kV', 't_spark_s', 'E_spark_J', 'sparks', 'run_s'] },
    /* Trial | Drop diameter (μm) | Drop speed v (m/s) | Charge q (pC) | Plate voltage V (V) | Drop mass (ng) | Height on the paper y (mm) | Gravity's part (μm) */
    'ink-jet-printer': { demo: 'Electrostatics at Work', cols: ['row', 'd_um', 'v_m_s', 'q_pC', 'V_plates_V', 'm_ng', 'y_paper_mm', 'y_grav_um'] },
    /* Trial | Particle diameter (μm) | Particles | Field (kV/cm) | Gas speed u (m/s) | Plate length L (m) | Drift speed w (cm/s) | Predicted efficiency (%) | Caught | Through | Measured efficiency (%) */
    precipitator: { demo: 'Electrostatics at Work', cols: ['row', 'dp_um', 'particles', 'E_kV_cm', 'u_m_s', 'L_m', 'w_cm_s', 'eff_pred_pct', 'caught', 'through', 'eff_meas_pct'] },
    /* Trial | Core | Turns per cm | Current I (A) | B₀ (T) | B (T) | B − B₀ (T) | Notes */
    'magnetism-in-matter': { demo: 'Magnetism in Matter', cols: ['row', 'material', 'n_per_cm', 'I_A', 'B0_T', 'B_T', 'Bm_T', 'notes'] },
    /* Trial | Current | Time t (ms) | dB/dt (T/s) | Path radius (cm) | Centre from the axis (cm) | Flux Φ (Wb) | −dΦ/dt (V) | ∮E·dl (V) | E on the path (V/m) */
    'induced-electric-field': { demo: 'Induced Electric Field', cols: ['row', 'current', 't_ms', 'dBdt_T_s', 'path_r_cm', 'path_d_cm', 'Phi_Wb', 'emf_V', 'circ_V', 'E_V_per_m'] },
    'induction-at-work': { demo: 'Induction at Work', cols: ['row', 'f_Hz', 'stroke_cm', 'C_F', 'light', 't_s', 'emf_peak_V', 'Vc_V', 'E_hand_J', 'E_cap_J', 'E_heat_J', 'E_diode_J', 'E_led_J'] },
    'magnets-oersted': { demo: 'Magnetic Fields of Currents', cols: ['row', 'experiment', 'gap_cm', 'facing', 'force', 'F_rel', 'I_A', 'h_cm', 'BE_uT', 'Bw_uT', 'angle_deg', 'tan'] },
    'huygens': { demo: "Huygens's Principle", cols: ['row', 'view', 'medium1', 'n1', 'medium2', 'n2', 'L_m', 't_ns', 'th1_deg', 'th2_deg', 's1v1', 's2v2', 'a_lambda', 'dark_deg'] },
    dispersion: { demo: 'Optics Bench', cols: ['row', 'element', 'material', 'lam_nm', 'n', 'dev_deg'] },
    'the-eye': { demo: 'The Eye', cols: ['row', 'eye', 'glasses_D', 'd_cm', 'seen', 'blur_mm', 'NP_cm', 'FP_cm', 'P_D', 'di_cm', 'rx_far_D', 'rx_near_D'] },
    /* Reading | Setup | λ (nm) | D (mm) | Screen distance L (m) | Cursor x (mm) | Separation Δθ (µrad) | Intensity at the cursor I/I₀ | θ₁ = x/L (µrad) | λ/D (µrad) | 1/D (1/mm) */
    resolution: { demo: 'Circular Apertures and Resolution', cols: ['row', 'setup', 'lam_nm', 'D_mm', 'L_m', 'x_mm', 'sep_urad', 'I_rel', null, null, null] },
    /* Reading | λ (nm) | a (mm) | d (mm) | L (m) | Hits | Cursor B − A (mm) | Spacings n, Δy, 1/d, λL/d (typed) */
    'double-slit': { demo: 'Double Slit', cols: ['row', 'lam_nm', 'a_mm', 'd_mm', 'L_m', 'hits', 'BA_mm', null, null, null, null] },
    /* Reading | Source | λ (nm) | Lines per mm | Order m | L (m) | y (cm) | sin θ, mλ (typed) */
    'diffraction-grating': { demo: 'Diffraction Grating', cols: ['row', 'source', 'lam_nm', 'lines_per_mm', 'm', 'L_m', 'y_cm', null, null] },
    /* Reading | λ (nm) | a (µm) | L (m) | Dark fringe m | y (cm) | I/I₀ at B | sin θ, 1/a, β, (sin β/β)² (typed) */
    'single-slit': { demo: 'Diffraction Grating (single slit)', cols: ['row', 'lam_nm', 'a_um', 'L_m', 'm', 'y_cm', 'I_rel', null, null, null, null] },
    /* Trial | View | Light in | Elements | θ (°) | I/I₀ after each element | I/I₀ out | Light out | θᵢ (°) | n₁ | n₂ | R_s | R_p | R */
    polarization: { demo: 'Polarization', cols: ['row', 'view', 'light_in', 'elements', 'theta_deg', 'I_each', 'I_out', 'light_out', 'thi_deg', 'n1', 'n2', 'Rs', 'Rp', 'R'] },
    /* Scan | Harmonic n | f (Hz) | Amplitude (mm) | L (m) | T (N) | μ (g/m); the harmonic number of a driven peak is the student's */
    'standing-waves': { demo: 'Standing Waves', cols: [both('row', 'mode'), 'n', 'f_Hz', 'amp_mm', 'L_m', 'T_N', 'mu_g_per_m'] },
    /* Reading | Setup | λ₁ (nm) | Angle between the beams θ (°) | Fringe periods N | Span Δx (μm) | d (μm) | 1/sin(θ/2) | λ₂ (nm) | Image beam angle (°) | sin of it | Sharpest image z (mm) | 1/λ₂ (1/μm) */
    holography: { demo: 'Holography', cols: ['row', (r) => `${String(r.object).replace('plane wave at ', 'plane ').replace(', middle at', ', middle')}, ref ${r.thr_deg}°${r.view === 'reconstruct' ? `, lit ${r.thi_deg}°` : ''}`.replace(/-/g, '−'),
      'lam1_nm', 'angle_between_deg', 'N_periods', 'span_um', null, null, 'lam2_nm', (r) => (r.view === 'reconstruct' && r.object && /plane/.test(r.object) ? r.det_deg : ''), null,
      (r) => (r.view === 'reconstruct' && r.object && !/plane/.test(r.object) ? r.z_screen_mm : ''), null] },
    /* Trial | Pipe | T (°C) | m (A·m²) | m² (typed) | w (mm) | σ (MS/m) | Fall time t (s) */
    'eddy-currents': { demo: 'Eddy Currents: Magnet in a Pipe', cols: ['row', 'pipe', 'T_C', 'm_A_m2', null, 'w_mm', 'sigma_MS_m', 't_s'] },
    /* Reading | Light source | Micrometer reading (μm) | Mirror displacement Δd (μm, typed) | Cell pressure P (kPa) | Fringe count N */
    michelson: { demo: 'Michelson Interferometer', cols: ['row', 'source', 'reading_um', null, 'P_kPa', 'N'] },
    /* Reading | Setup | N_P | N_S | V_P (V) | V_S (V) | I_P (A) | I_S (A) | Load or line R (Ω) | Power in (W) | Power out (W) | Line loss (W) | 1/V_S² (typed) */
    transformers: { demo: 'Transformers', cols: ['row', (r) => (r.view === 'power line' ? 'power line' : [r.model, r.k !== '' && r.k != null ? `k = ${r.k}` : '', `${r.f_Hz} Hz`, `${r.core} core`].filter(Boolean).join(', ')),
      'Np', 'Ns', 'Vp_V', 'Vs_V', 'Ip_A', 'Is_A', 'R_ohm', 'Pin_W', 'Pout_W', 'P_loss_W', null] },
    /* Reading | t (µs) | I (µA) | E (V/m) | r (cm) | Where | Surface | I_c (µA) | I_d (µA) | B (pT) | 2πrB (T·m) | 1/r (1/m) (typed) */
    'displacement-current': { demo: 'Displacement Current', cols: ['row', 't_us', 'I_uA', 'E_V_per_m', 'r_cm', 'where', 'surface', 'Ic_uA', 'Id_uA', 'B_pT', 'circ_T_m', null] },
  });
  /* ==PHYSICS II END== */
  /* ==ACOUSTICS START== Acoustics worksheets (acoustics.html) and their demo column maps. */
  const ACOUSTICS = ['resonators', 'timbre', 'acoustic-levitation', 'chladni', 'doppler',
    'sound-waves', 'kundts-tube', 'wave-power', 'two-speaker', 'ultrasound', 'sound-intensity',
    'room-acoustics' /* Room Acoustics demo, Reverberation time */, 'anechoic-chamber' /* Room Acoustics demo, Level against distance */];
  ENABLED.push(...ACOUSTICS);
  /* Room Acoustics rows: the walls (and the floor, unless the room is lined with wedges) in words */
  const roomWalls = (r) => (r.walls === 'panels' ? `${r.panels_n} ${r.panel_material} panels` : r.walls === 'wedges' ? `wedges ${r.wedge_depth_m} m deep` : 'hard walls')
    + (r.floor && r.floor !== 'wedges' ? `, ${r.floor} floor` : '');
  Object.assign(FROM_DEMO, {
    resonators: { demo: 'Resonators', cols: ['f_Hz', 'k', null, null, 'L_read_cm', 'spacing_cm'] },
    timbre: { demo: 'Timbre and Harmonics', cols: [(r) => `run ${r.run}, ${r.preset}`, 'n', 'f_Hz', 'rel_amplitude', 'level_dB', 'phase_deg', 'notes'] },
    'acoustic-levitation': { demo: 'Acoustic Levitation', cols: ['setup_material', 'radius_mm', 'drive_Vpp', 'phase_deg', 'tracked_trap_z_mm', 'Fmax_over_W', 'notes'] },
    /* Scan | Shape | Material | Thickness h (mm) | Mode/pattern | Frequency f (Hz) | Nodal sketch or description */
    chladni: { demo: 'Chladni Patterns', cols: [(r) => `${r.row}, ${r.drive} drive, ${r.driver}, Q = ${r.Q}`, 'shape', 'material', 'h_mm', 'mode', 'f_Hz', null] },
    /* Scan | Motion | Emitted f₀ (Hz) | Speed (m/s) | Direction | Observed f (Hz) | f/f₀; Speed is the part along the line of sight */
    doppler: { demo: 'Doppler Effect', cols: ['row', (r) => (r.motion === 'both' ? `both: source ${r.vs_line_m_s} m/s, observer ${r.vo_line_m_s} m/s along the line` : r.motion),
      'f0_Hz', 'speed_m_s', 'direction', 'f_obs_Hz', 'ratio'] },
    /* Trial | Gas | T (°C) | d (m) | Δt (ms) | Observation */
    'sound-waves': { demo: 'Sound Waves and the Speed of Sound', cols: ['row', 'gas', 'T_C', 'd_m', 'dt_ms', null] },
    /* Heap j | x (cm) | Rod | L_rod (m) | Mode n | f (Hz) | Gas | T (°C) */
    'kundts-tube': { demo: "Kundt's Tube", cols: ['pile', 'x_cm', 'rod', 'L_rod_m', 'n', 'f_Hz', 'gas', 'T_C'] },
    /* Trial | f (Hz) | A (mm) | T (N) | P (mW) | A² (mm²) | f² (Hz²) | Observation */
    'wave-power': { demo: 'Energy and Power of a Wave', cols: ['row', 'f_Hz', 'A_mm', 'T_N', 'P_mW', 'A2_mm2', 'f2_Hz2', null] },
    /* Trial | x (m) | y (m) | r₁ (m) | r₂ (m) | Level (dB) | Loud or quiet */
    'two-speaker': { demo: 'Two Speaker Interference', cols: [(r) => `${r.row}, ${r.f_Hz} Hz, d = ${r.d_m} m${r.speaker2 === 'in phase' ? '' : ', speaker 2 ' + r.speaker2}`, 'x_m', 'y_m', 'r1_m', 'r2_m', 'level_dB', null] },
    /* Trial | Setup | Known depth (cm) | Echo time t (μs) | Angle θ (°) | Doppler shift Δf (Hz) | Notes */
    ultrasound: { demo: 'Ultrasound: Echoes and Blood Flow', cols: ['row', (r) => `${r.setup}, ${r.f0_MHz} MHz${r.profile ? ', ' + r.profile : ''}`, 'known_depth_cm', 'cursor_time_us', 'angle_deg', 'cursor_shift_Hz', null] },
    /* Reading | Distance r (m) | Sources | Sound level β (dB) | log₂ r | Intensity I (W/m²) */
    'sound-intensity': { demo: 'Sound Intensity and Decibels', cols: ['row', 'r_m', (r) => [r.source_A_W === 'mystery' ? 'A mystery' : r.source_A_W && `A ${r.source_A_W} W`,
      r.source_B_W && `B ${r.source_B_W} W`, r.background_dB && `background ${r.background_dB} dB`].filter(Boolean).join(', '), 'L_dB', null, null] },
    /* Reading | Band (Hz) | Room L × W × H (m) | Walls and floor | Volume V (m³) | Surface S (m²) | Measured T (s) | Absorption A (m²) | 1/A (1/m²) | Sabine T (s) */
    'room-acoustics': { demo: 'Room Acoustics', cols: ['row', 'band_Hz', (r) => `${r.room_L_m} × ${r.room_W_m} × ${r.room_H_m}`, roomWalls, 'V_m3', 'S_m2', 'T_measured_s', null, null, null] },
    /* Reading | Walls | Band (Hz) | Distance r (m) | log₂ r | Level L (dB) */
    'anechoic-chamber': { demo: 'Room Acoustics', cols: ['row', roomWalls, 'band_Hz', 'r_m', null, 'L_dB'] },
  });
  /* ==ACOUSTICS END== */
  /* ==THERMO START== Thermodynamics worksheets (thermo.html) and their demo column maps. */
  const THERMO = ['heating-curve' /* States of Matter demo, Beaker view */, 'bonds-and-latent-heat' /* States of Matter demo, Atoms view */,
    'thermal-equilibrium', 'gas-thermometer', 'thermal-expansion', 'heat-conduction' /* Temperature and Heat demo, one per view */,
    'heat-capacities-of-gases', 'ruchardt' /* Heat Capacities of Gases demo */, 'free-expansion', 'einstein-solids', 'second-law' /* Entropy demo */,
    'ideal-gas', 'heat-engines', 'blackbody'];
  ENABLED.push(...THERMO);
  Object.assign(FROM_DEMO, {
    /* Reading | Time t (s) | Temperature T (°C) | Balance m (g) | Stage */
    'heating-curve': { demo: 'States of Matter (Beaker)', cols: ['row', 't_s', 'T_C', 'm_g', null] },
    /* Reading | Heat added Q (kJ/mol) | Temperature T (K) | Bond energy U (kJ/mol) | Solid (%) | Liquid (%) | Vapor (%) */
    'bonds-and-latent-heat': { demo: 'States of Matter (Atoms)', cols: ['row', 'Q_kJ_per_mol', 'T_K', 'U_kJ_per_mol', 'solid_pct', 'liquid_pct', 'vapor_pct'] },
    /* Reading | Time t (s) | T_A (°C) | T_B (°C) | T_A − T_B (°C) | ln[(T_A − T_B)/(1 °C)] */
    'thermal-equilibrium': { demo: 'Temperature and Heat (Equilibrium)', cols: ['row', 't_s', 'T_A_C', 'T_B_C', null, null] },
    /* Reading | Bath | Bath temperature T (°C) | Gas n (mmol) | Pressure P (kPa) */
    'gas-thermometer': { demo: 'Temperature and Heat (Thermometer)', cols: ['row', 'bath', 'bath_T_C', 'n_mmol', 'P_kPa'] },
    /* Reading | Setup and material | Temperature T (°C) | Gauge or level reading (mm) | ΔT (°C) | ΔL/L₀ or ΔV/V₀ */
    'thermal-expansion': { demo: 'Temperature and Heat (Expansion)', cols: ['row', (r) => `${r.setup}, ${r.material}`, 'T_C', 'reading_mm', null, null] },
    /* Reading | Build and layers | Position x (mm) | Temperature T (°C) | Heat flow P (W) */
    'heat-conduction': { demo: 'Temperature and Heat (Conduction)', cols: ['row', (r) => `${r.build}: ${r.layers}`, 'x_mm', 'T_probe_C', 'P_W'] },
    /* Reading | Gas and piston | Heat Q (J) | Temperature T (°C) | Volume V (L) | Pressure P (kPa) */
    'heat-capacities-of-gases': { demo: 'Heat Capacities of Gases', cols: ['row', (r) => `${r.gas}, ${r.n_mol} mol, piston ${r.piston}`, 'Q_J', 'T_C', 'V_L', 'P_kPa'] },
    /* Reading | Gas | Flask volume V (L) | Period T (s) | T² (s²) */
    ruchardt: { demo: "Heat Capacities of Gases (Rüchardt's ball)", cols: ['row', 'gas', 'V_L', 'period_s', null] },
    /* Count on the left n | Time at n (s) | Share of time | Ways C(N, n) | Predicted share */
    'free-expansion': { demo: 'Entropy and the Second Law (Free expansion)', cols: ['n_left', 'time_s', 'share', null, null] },
    /* Reading | Exchanges tried | q_A | q_B | Ω_A | Ω_B | Ω_A Ω_B */
    'einstein-solids': { demo: 'Entropy and the Second Law (Einstein solids)', cols: ['row', 'steps', 'q_A', 'q_B', null, null, null] },
    /* Reading | Device | T_h (K) | T_c (K) | Q_h (J) | Q_c (J) | W (J) | ΔS universe (J/K) | Allowed? */
    'second-law': { demo: 'Entropy and the Second Law (Second law)', cols: ['row', 'device', 'T_h_K', 'T_c_K', 'Q_h_J', 'Q_c_J', 'W_J', null, null] },
    /* Reading | Atoms N | Temperature T (K) | Area A (nm²) | 1/A (1/nm²) | Pressure P (mN/m) | NkT/A (mN/m) | rms speed (m/s) | v_rms² (m²/s²) */
    'ideal-gas': { demo: 'Gas in a Box', cols: ['row', 'N', 'T_K', 'A_nm2', null, 'P_mN_per_m', null, 'rms_m_s', null] },
    /* Reading | Cycle and gas | Setting | Q_in (J) | Q_out (J) | W_net (J) | η = W/Q_in or COP | Formula η or COP | 1/T_h or ln r | ln(1 − η) */
    'heat-engines': { demo: 'Heat Engine Cycles', cols: ['row', (r) => `${r.cycle}, ${r.gas}${r.run === 'backward' ? ', backward' : ''}${r.regenerator ? ', regenerator ' + r.regenerator : ''}`,
      (r) => [r.T_h_K !== '' && `T_h ${r.T_h_K} K`, r.T_c_K !== '' && `T_c ${r.T_c_K} K`, r.r !== '' && `r ${r.r}`, r.r_c !== '' && `r_c ${r.r_c}`, r.r_p !== '' && `r_p ${r.r_p}`].filter(Boolean).join(', '),
      'Q_in_J', 'Q_out_J', 'W_net_J', null, null, null, null] },
    /* Reading | Temperature T (K) | Peak wavelength (nm) | Flux F (W/m²) | 1/T | ln T | ln F */
    blackbody: { demo: 'Blackbody Radiation', cols: ['row', 'T_K', 'peak_nm', 'flux_W_m2', null, null, null] },
  });
  /* ==THERMO END== */
  /* ==MODERN START== Modern Physics worksheets (modern.html) and their demo column maps. Threads for other chapters push into MODERN. */
  const MODERN = [];
  /* Vol. 3 ch. 5 (relativity) and ch. 6 (photons and matter waves) */
  MODERN.push('velocity-addition', 'relativistic-momentum', 'relativistic-energy' /* Velocity, Momentum and Energy Near c demo, one per view */);
  MODERN.push('photoelectric', 'compton');
  Object.assign(FROM_DEMO, {
    /* Reading | Launch speed u′ (c) | Probe time A to B Δt (s) | Ground speed u (c) | u − u′ (c) | 1 − uu′/c² */
    'velocity-addition': { demo: 'Velocity, Momentum and Energy Near c (Adding velocities)', cols: ['row', 'u_prime_c', 'probe_dt_s', null, null, null] },
    /* Reading | Time t (ns) | Distance x (m) | Speed v (c) | γ | γv (c) */
    'relativistic-momentum': { demo: 'Velocity, Momentum and Energy Near c (Steady force)', cols: ['row', 't_ns', 'x_m', 'v_c', null, null] },
    /* Reading | Voltage V (MV) | Flight time t (ns) | Bend radius r (cm) | Speed v (c) | v² (c²) | γ | pc (MeV) */
    'relativistic-energy': { demo: 'Velocity, Momentum and Energy Near c (Electron flight)', cols: ['row', 'V_MV', 't_ns', 'r_cm', null, null, null, null] },
    /* Reading | Metal | Wavelength λ (nm) | Frequency f (10¹⁴ Hz) | Stopping voltage V₀ (V) | Meter at V₀ (nA) */
    photoelectric: { demo: 'Photoelectric Effect', cols: ['row', 'metal', 'wavelength_nm', (r) => (+r.frequency_Hz / 1e14).toFixed(4), 'stopping_voltage_V', 'meter_reading_nA'] },
    /* Reading | Angle θ (°) | 1 − cos θ | Scattered wavelength λ′ (pm) | Shift Δλ (pm) | Electron energy T (keV) | Electron angle φ (°) */
    compton: { demo: 'Compton Scattering', cols: ['row', 'theta_deg', null, 'lamP_pm', null, 'T_keV', 'phi_deg'] },
  });
  ENABLED.push(...MODERN);
  Object.assign(FROM_DEMO, {
  });
  /* Vol. 3 ch. 9 to 11 (condensed matter, nuclear, particles and cosmology), kept in its own list so the chapter threads don't collide */
  const MODERN_9_11 = ['radioactive-decay', 'decay-chains' /* Radioactive Decay demo: one step setups, chains */, 'binding-energy',
    'gamma-spectroscopy', 'gamma-absorption' /* Gamma Spectroscopy demo */, 'hubble-law' /* Cosmic Distance Ladder, rung 4 */,
    'molecular-bonds', 'hcl-spectrum' /* Molecules: Bonds and Spectra demo */,
    'cosmic-expansion', 'thermal-history', 'big-bang-helium' /* The Big Bang and the Early Universe demo */,
    'lattice-energy', 'energy-bands', 'semiconductor-doping', 'pn-junction' /* Crystals, Bands and Semiconductors demo */,
    'particle-reactions', 'quark-model', 'invariant-mass' /* Particles, Quarks and Conservation Laws demo */];
  MODERN.push(...MODERN_9_11); ENABLED.push(...MODERN_9_11);
  Object.assign(FROM_DEMO, {
    /* Reading | Setup and N₀ | Time t | Parents left N | N/N₀ | ln(N/N₀) */
    'radioactive-decay': { demo: 'Radioactive Decay', cols: ['row', (r) => `${r.setup}, N₀ = ${r.N0}, t in ${r.unit}`, 't', 'parent', null, null] },
    /* Reading | Setup and N₀ | Time t | Parents N_P | Daughters N_D | Stable N_S | Activity ratio R_D/R_P */
    'decay-chains': { demo: 'Radioactive Decay (chains)', cols: ['row', (r) => `${r.setup}, N₀ = ${r.N0}, t in ${r.unit}`, 't', 'parent', 'daughter', 'stable', null] },
    /* Reading | Nuclide | Z | N | A | Mass excess Δ (MeV) | B (MeV) | B/A (MeV) | B/A liquid drop (MeV) */
    'binding-energy': { demo: 'Nuclear Binding Energy', cols: ['row', 'nuclide', 'Z', 'N', 'A', 'dm_MeV', 'B_MeV', 'BA_MeV', 'BA_ldm_MeV'] },
    /* Reading | Source | Centroid (channel) | Centroid uncertainty (channel) | Known energy E (keV) | Net counts | FWHM (channel) | Energy from the demo's calibration (keV) */
    'gamma-spectroscopy': { demo: 'Gamma Spectroscopy', cols: ['row', 'source', 'centroid_ch', 'centroid_unc', null, 'net', 'fwhm_ch', 'E_keV'] },
    /* Reading | Distance d (cm) | Absorber | Mass thickness x (g/cm²) | Live time (s) | Net counts | Net rate R (1/s) | Rate uncertainty (1/s) | ln R | 1/√R (√s) */
    'gamma-absorption': { demo: 'Gamma Spectroscopy (absorption)', cols: ['row', 'd_cm', 'absorber', 'x_g_cm2', 'live_s', 'net', 'rate_per_s', 'rate_unc', null, null] },
    /* Reading | Galaxy | Distance indicator | Calibration a, M (mag) | Distance d (Mpc) | Distance uncertainty (%) | Your redshift z | Recession velocity v = cz (km/s) */
    'hubble-law': { demo: 'Cosmic Distance Ladder', cols: ['row', 'galaxy', 'indicator', (r) => `a = ${r.a}, M = ${r.M_Ia}`.replace(/-/g, '−'), 'd_Mpc', 'd_unc_pct', 'z_comb', null] },
    /* Reading | Molecule and state | Separation r (nm) | Energy U (eV) | 1/r (1/nm) */
    'molecular-bonds': { demo: 'Molecules: Bonds and Spectra (Ionic and Covalent bond)', cols: ['row', 'molecule', 'r_nm', 'U_eV', null] },
    /* Reading | Wavenumber (cm⁻¹) | Relative absorbance | Line | m | Spacing to the next line (cm⁻¹) */
    'hcl-spectrum': { demo: 'Molecules: Bonds and Spectra (HCl spectrum)', cols: ['row', 'nu_cm', 'absorbance', null, null, null] },
    /* Reading | Model | Time from today t (Gyr) | Galaxy | Distance d (Mpc) | Speed v (km/s) */
    'cosmic-expansion': { demo: 'The Big Bang and the Early Universe (Expansion)', cols: ['row', 'model', 't_Gyr', 'galaxy', 'd_Mpc', null] },
    /* Reading | Time t (s) | Temperature T (K) | kT (eV) | log₁₀ t | log₁₀ T */
    'thermal-history': { demo: 'The Big Bang and the Early Universe (Thermal history)', cols: ['row', 't_s', 'T_K', 'kT_eV', null, null] },
    /* Reading | Freeze out kT_f (MeV) | Lifetime τ (s) | Deuterium time t_D (s) | Neutrons at freeze out | Neutrons left at t_D | Helium nuclei | 1/kT_f | ln(n/p) | Y */
    'big-bang-helium': { demo: 'The Big Bang and the Early Universe (Helium)', cols: ['row', 'kTf_MeV', 'tau_s', 'tD_s', 'n_f', 'n_D', 'He', null, null, null] },
    /* Reading | Salt | Structure | r0 (nm) | n | α | Table U (kJ/mol) | U per ion pair (eV) | (1 − 1/n)/r0 (1/nm) */
    'lattice-energy': { demo: 'Crystals, Bands and Semiconductors (Crystal)', cols: ['row', 'salt', 'structure', 'r0_nm', 'n', 'alpha', 'U_table_kJ_mol', null, null] },
    /* Reading | Atoms N | Spacing d (nm) | Lowest s level (eV) | Highest s level (eV) | Lowest p level (eV) | Width w (eV) | Gap (eV) | ln(w / 1 eV) */
    'energy-bands': { demo: 'Crystals, Bands and Semiconductors (Bands)', cols: ['row', 'N', 'd_nm', 's_low_eV', 's_high_eV', 'p_low_eV', null, null, null] },
    /* Reading | Sample | T (K) | n (cm⁻³) | p (cm⁻³) | 1/T (1/K) | ln(n / 1 cm⁻³) | ln n − 1.5 ln T */
    'semiconductor-doping': { demo: 'Crystals, Bands and Semiconductors (Doping)', cols: ['row', (r) => [r.material, +r.ND_cm3 ? `${r.donor} ${r.ND_cm3} cm⁻³` : '', +r.NA_cm3 ? `${r.acceptor} ${r.NA_cm3} cm⁻³` : ''].filter(Boolean).join(', ') + (+r.ND_cm3 || +r.NA_cm3 ? '' : ', undoped'),
      'T_K', 'n_cm3', 'p_cm3', null, null, null] },
    /* Reading | T (K) | V (V) | I (A) | ln(I / 1 A) */
    'pn-junction': { demo: 'Crystals, Bands and Semiconductors (Junction)', cols: ['row', 'T_K', 'V_V', 'I_A', null] },
    /* Reading | Reaction | Beam | Charge Q before → after | Baryon number B | L_e | L_μ | L_τ | Strangeness S | Energy to spare (MeV) | My prediction | Verdict */
    'particle-reactions': { demo: 'Particles, Quarks and Conservation Laws (Reactions)', cols: ['row', 'reaction', 'beam', 'Q', 'B', 'Le', 'Lmu', 'Ltau', 'S', 'spare_MeV', 'prediction', 'verdict'] },
    /* Reading | Quarks | Spin J | Charge Q (e) | Baryon number B | Strangeness S | Isospin I₃ | Hadron | Mass (MeV/c²) */
    'quark-model': { demo: 'Particles, Quarks and Conservation Laws (Quarks)', cols: ['row', 'quarks', 'J', 'Q', 'B', 'S', 'I3', 'hadron', 'mass_MeV'] },
    /* Reading | Event | B (T) | r₊ (cm) | r₋ (cm) | Opening angle θ (°) | p₊ (MeV/c) | p₋ (MeV/c) | M if π⁺π⁻ (MeV/c²) | M if pπ⁻ (MeV/c²) | Parent */
    'invariant-mass': { demo: 'Particles, Quarks and Conservation Laws (Detector)', cols: ['row', 'event', 'B_T', 'r_plus_cm', 'r_minus_cm', 'theta_deg', null, null, null, null, null] },
  });
  /* ==MODERN END== */
  /* Worksheets with a live graph under each copy of the first data table. The student chooses which column goes on each axis; the
     graph shows the points, a least squares line (free intercept, equal weights), its residuals, and the slope and intercept with
     their standard errors. Anything computed from the slope (g, k, ...) is left to the student. */
  const GRAPHS = PHYSICS_I.slice();
  GRAPHS.push(...PHYSICS_II, ...ACOUSTICS, ...THERMO, ...MODERN); /* Physics II: the same graph on every worksheet (list in the PHYSICS II block above) */
  /* a column heading split into its name and the unit in its last parentheses: "Full period T (s)" -> ["Full period T", "s"] */
  const SUB = '₀₁₂₃₄₅₆₇₈₉', SUP = { 2: '²', 3: '³' };
  const pretty = (h) => String(h || '').replace(/\^([23])/g, (m, d) => SUP[d]).replace(/_(\d)/g, (m, d) => SUB[d]);
  /* a heading such as "Pressure (Pa) or head (m)" names two quantities with different units: keep it whole, with no unit (null) */
  const nameUnit = (h) => {
    const t = pretty(h), m = t.match(/^(.*?)\s*\(([^()]*)\)\s*$/), us = new Set((t.match(/\(([^()]*)\)/g) || []));
    return !m ? [String(h || ''), ''] : us.size > 1 ? [t, null] : [m[1] || h, m[2]];
  };
  const ANSWER_LISTS = /^(before-the-lab|before-the-activity|analysis|questions)$/, ONE_BOX = /^uncertainty$/;
  const m = location.pathname.match(/\/curriculum\/labs\/students\/([a-z0-9-]+?)(?:\.html)?$/);
  if (!m || ENABLED.indexOf(m[1]) < 0) return;
  const SLUG = m[1], KEY = 'vd-worksheet:' + SLUG, VERSION = 1;
  const body = document.querySelector('.markdown-body') || document.body;
  const h1 = body.querySelector('h1[id]') || body.querySelector('h1');
  const TITLE = h1 ? h1.textContent.trim() : SLUG;

  /* ---------- small helpers ---------- */
  const el = (tag, attrs, kids) => {
    const e = document.createElement(tag);
    for (const k in attrs || {}) {
      if (k === 'text') e.textContent = attrs[k];
      else if (k === 'on') for (const ev in attrs.on) e.addEventListener(ev, attrs.on[ev]);
      else if (attrs[k] != null && attrs[k] !== false) e.setAttribute(k, attrs[k] === true ? '' : attrs[k]);
    }
    (kids || []).forEach((c) => c != null && e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c));
    return e;
  };
  const blank = (s) => !String(s || '').replace(/[\s ]/g, '');
  const GREEK = { alpha: 'α', beta: 'β', gamma: 'γ', Gamma: 'Γ', delta: 'δ', Delta: 'Δ', epsilon: 'ε', varepsilon: 'ε', eta: 'η',
    theta: 'θ', Theta: 'Θ', kappa: 'κ', lambda: 'λ', Lambda: 'Λ', mu: 'μ', nu: 'ν', pi: 'π', rho: 'ρ', sigma: 'σ', Sigma: 'Σ',
    tau: 'τ', phi: 'φ', varphi: 'φ', Phi: 'Φ', omega: 'ω', Omega: 'Ω', times: '×', cdot: '·', circ: '°', pm: '±', le: '≤', leq: '≤',
    ge: '≥', geq: '≥', approx: '≈', propto: '∝', infty: '∞', to: '→', ell: 'ℓ', sqrt: '√', degree: '°' };
  /* Plain text for CSV column names and answer keys: TeX between \( \) or \[ \] becomes readable Unicode. */
  const plainTeX = (t) => t.replace(/\\(?:mathrm|text|rm|mathbf|operatorname)\s*\{([^{}]*)\}/g, '$1')
    .replace(/\\t?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, '($1)/($2)').replace(/\\tfrac\s*(\d)(\d)/g, '$1/$2')
    .replace(/\\([A-Za-z]+)/g, (s, w) => GREEK[w] != null ? GREEK[w] : (w === 'rm' || w === 'left' || w === 'right' ? '' : w))
    .replace(/\\[ ,;!]/g, ' ').replace(/[{}]/g, '').replace(/\s+/g, ' ').trim();
  const plain = (node) => plainTeX(String(node.textContent || '').replace(/\\[()[\]]/g, ''));
  const csvCell = (v) => { const s = v == null ? '' : String(v); return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const download = (name, text, type) => {
    try {
      const u = URL.createObjectURL(new Blob([text], { type })), a = el('a', { href: u, download: name });
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 1000);
    } catch (_) { alert('This browser would not save the file.'); }
  };
  const grow = (ta) => { ta.style.height = 'auto'; ta.style.height = (ta.scrollHeight + 2) + 'px'; };
  const typeset = (node) => { try { if (window.MathJax && MathJax.typesetPromise && MathJax.startup && MathJax.startup.document) MathJax.typesetPromise([node]); } catch (_) {} };

  /* ---------- styles (the page uses the GitHub Pages Primer theme, light only) ---------- */
  document.head.appendChild(el('style', { text: `
.ws-panel { border: 1px solid #d0d7de; border-radius: 8px; background: #f6f8fa; padding: 12px 14px; margin: 18px 0 22px; }
.ws-panel h2 { margin: 0 0 8px; padding: 0; border: 0; font-size: 1.1em; }
details.about { margin: 12px 0; padding: 8px 12px; border: 1px solid #d0d7de; border-radius: 8px; }
details.about > summary { cursor: pointer; font-weight: 700; }
details.about[open] > summary { margin-bottom: 8px; }
.ws-who { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 8px 12px; margin-bottom: 10px; }
.ws-who label { display: flex; flex-direction: column; font-size: 0.85em; font-weight: 600; color: #24292f; gap: 3px; }
.ws input.ws-f, .ws-panel input, .ws textarea.ws-f { font: inherit; font-size: 15px; color: #1f2328; background: #fff; border: 1px solid #8c959f;
  border-radius: 5px; padding: 5px 7px; box-sizing: border-box; width: 100%; }
.ws input.ws-f:focus, .ws-panel input:focus, .ws textarea.ws-f:focus { outline: 2px solid #0969da; outline-offset: 0; border-color: #0969da; }
.ws-btns { display: flex; flex-wrap: wrap; gap: 6px; margin: 6px 0; }
.ws-btn { font: inherit; font-size: 14px; padding: 5px 11px; border-radius: 6px; border: 1px solid #8c959f; background: #fff; color: #1f2328; cursor: pointer; }
.ws-btn:hover { background: #eef1f4; } .ws-btn:focus-visible { outline: 2px solid #0969da; outline-offset: 1px; }
.ws-btn.ws-main { background: #1f6feb; border-color: #1f6feb; color: #fff; } .ws-btn.ws-main:hover { background: #1a5fd0; }
.ws-btn.ws-quiet { border-color: #d0d7de; color: #57606a; }
.ws-status { font-size: 0.85em; color: #57606a; margin: 4px 0 0; } .ws-status.ws-warn { color: #9a6700; font-weight: 600; }
.ws-note { font-size: 0.85em; color: #57606a; margin: 6px 0 0; }
.markdown-body table.ws-table td { padding: 3px 4px; vertical-align: top; } .markdown-body table.ws-table td.ws-fixed { padding: 6px 10px; }
.markdown-body table.ws-table input.ws-f { min-width: 6.5em; border-color: #c4ccd5; padding: 4px 6px; }
.ws-tablebox { margin: 0 0 16px; } .ws-tablebox .ws-copyhead { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 14px 0 6px; font-weight: 600; }
.ws-tablebox .ws-copyhead input { max-width: 26em; font-weight: 400; }
.ws-notes { margin: 4px 0 6px; } .ws-notes label { font-size: 0.85em; font-weight: 600; color: #24292f; display: block; margin-bottom: 3px; }
.ws textarea.ws-f { min-height: 3.4em; resize: vertical; line-height: 1.45; display: block; margin: 6px 0 4px; overflow: hidden; }
.ws-answer-one { margin: 6px 0 14px; } .ws-answer-one label { font-size: 0.85em; font-weight: 600; color: #24292f; }
.ws-print { display: none; }
.ws-plot { margin: 10px 0 4px; } .ws-plot h3 { font-size: 1em; margin: 0 0 4px; } .ws-plot svg { width: 100%; height: auto; display: block; max-width: 640px; }
.ws-axes { display: flex; flex-wrap: wrap; gap: 6px 16px; margin: 0 0 6px; } .ws-axes label { font-size: 0.9em; font-weight: 600; display: flex; align-items: center; gap: 6px; }
.ws select.ws-sel { width: auto; max-width: 15em; padding: 4px 6px; font-weight: 400; }
@media print { .ws-axes { display: none; } }
.ws-plot .ws-res { font-size: 0.95em; margin: 6px 0 2px; } .ws-plot .ws-res b { font-weight: 600; }
.ws-plot .ws-warn2 { color: #9a6700; font-weight: 600; font-size: 0.9em; margin: 4px 0; } .ws-plot .ws-pnote { font-size: 0.85em; color: #57606a; margin: 2px 0; }
.ws-hand { border: 1px solid #54aeff; background: #ddf4ff; border-radius: 8px; padding: 8px 12px; margin: 0 0 12px; } .ws-hand p { margin: 2px 0; }
.ws-left { border: 1px solid #d4a72c; background: #fff8c5; border-radius: 8px; padding: 10px 14px; margin: 18px 0; }
.ws-left h2 { margin-top: 0; border: 0; font-size: 1.05em; } .ws-left p { margin: 4px 0; white-space: pre-wrap; }
@media (max-width: 480px) { .ws-btn { font-size: 13px; padding: 5px 9px; } }
@media print {
  .ws-btns, .ws-btn, .ws-status, .ws-note, .ws-noprint { display: none !important; }
  .ws-panel { border: 0; background: none; padding: 0; margin: 8px 0 14px; }
  .ws-panel h2 { display: none; }
  .ws-who label { flex-direction: row; gap: 6px; font-size: 0.95em; }
  .ws input.ws-f, .ws textarea.ws-f, .ws-panel input { display: none !important; }
  .ws-print { display: block; white-space: pre-wrap; min-height: 1.2em; }
  td .ws-print, .ws-who .ws-print, .ws-copyhead .ws-print { display: inline; font-weight: 400; }
  .ws-answer .ws-print { border-left: 3px solid #8c959f; padding: 2px 0 2px 8px; margin: 4px 0 8px; }
  .ws-answer .ws-print:empty::before { content: "(no answer)"; color: #8c959f; }
  .ws-tablebox, .ws-answer { break-inside: avoid; }
  .markdown-body table.ws-table { display: table; } .markdown-body > h1:first-child { display: none; }
}` }));

  /* ---------- a field that saves and prints ---------- */
  let saveTimer = 0, plotFrame = 0;
  const changed = () => { clearTimeout(saveTimer); saveTimer = setTimeout(save, 300); setStatus('Saving…'); replot(); };
  function field(kind, label, cls) {
    const f = kind === 'area' ? el('textarea', { class: 'ws-f ' + (cls || ''), rows: 2, 'aria-label': label, spellcheck: 'true' })
      : el('input', { class: 'ws-f ' + (cls || ''), type: 'text', 'aria-label': label, autocomplete: 'off' });
    const p = el('span', { class: 'ws-print tex2jax_ignore', 'aria-hidden': 'true' });
    f.addEventListener('input', () => { p.textContent = f.value; if (kind === 'area') grow(f); changed(); });
    f.wsSet = (v) => { f.value = v == null ? '' : String(v); p.textContent = f.value; if (kind === 'area') requestAnimationFrame(() => grow(f)); };
    f.wsPrint = p;
    return f;
  }
  const withPrint = (f) => { const s = document.createDocumentFragment(); s.appendChild(f); s.appendChild(f.wsPrint); return s; };

  /* ---------- the student panel ---------- */
  const who = {}, statusEls = [];
  const WHO = [['name', 'Name'], ['partners', 'Lab partners'], ['section', 'Section'], ['date', 'Date']];
  function setStatus(t, warn) { statusEls.forEach((s) => { s.textContent = t; s.classList.toggle('ws-warn', !!warn); }); }
  function buttons(where) {
    const fileIn = el('input', { type: 'file', accept: '.json,application/json', hidden: true, on: { change: (e) => openFile(e.target) } });
    const box = el('div', { class: 'ws-btns' }, [
      el('button', { type: 'button', class: 'ws-btn ws-main', text: 'Print or save as PDF', on: { click: () => { save(); window.print(); } } }),
      el('button', { type: 'button', class: 'ws-btn', text: 'Download data tables (CSV)', on: { click: exportCSV } }),
      el('button', { type: 'button', class: 'ws-btn', text: 'Save to a file', on: { click: exportJSON } }),
      el('button', { type: 'button', class: 'ws-btn', text: 'Open a saved file', on: { click: () => fileIn.click() } }),
      el('button', { type: 'button', class: 'ws-btn ws-quiet', text: 'Clear my answers', on: { click: clearAll } }),
      fileIn]);
    const st = el('p', { class: 'ws-status', role: where === 'top' ? 'status' : null });
    statusEls.push(st);
    return [box, st];
  }
  const panel = el('section', { class: 'ws ws-panel tex2jax_ignore', 'aria-labelledby': 'ws-panel-h' }, [el('h2', { id: 'ws-panel-h', text: 'Your worksheet' })]);
  const whoBox = el('div', { class: 'ws-who' });
  WHO.forEach(([k, label]) => { const f = field('input', label); who[k] = f; whoBox.appendChild(el('label', {}, [label, withPrint(f)])); });
  panel.appendChild(whoBox);
  buttons('top').forEach((x) => panel.appendChild(x));
  panel.appendChild(el('p', { class: 'ws-note', text: 'Type your data into the tables and your answers under each question. Everything is saved in this browser on this computer as you type. Before you move to another computer, use Save to a file, then Open a saved file there. Hand in the PDF and the CSV.' }));

  /* ---------- sections: walk the h2 headings ---------- */
  const sections = [];
  body.querySelectorAll('h2').forEach((h) => {
    const nodes = [];
    for (let n = h.nextElementSibling; n && n.tagName !== 'H2'; n = n.nextElementSibling) nodes.push(n);
    sections.push({ id: h.id || '', h, nodes });
  });
  const firstH2 = sections.length ? sections[0].h : null;
  if (firstH2) firstH2.parentNode.insertBefore(panel, firstH2); else body.appendChild(panel);

  /* ---------- data tables ---------- */
  const tables = [];
  body.querySelectorAll('table').forEach((t, ti) => {
    if (t.closest('.ws')) return;
    const head = t.tHead && t.tHead.rows[0];
    const cols = head ? [...head.cells].map((c) => plain(c)) : [];
    const sec = sections.find((s) => s.nodes.indexOf(t) >= 0);
    const tpl = [...(t.tBodies[0] ? t.tBodies[0].rows : [])].map((r) => [...r.cells].map((c) => (blank(c.textContent) ? null : { html: c.innerHTML, text: plain(c) })));
    const ncol = Math.max(cols.length, ...tpl.map((r) => r.length), 1);
    const T = { index: ti, cols, ncol, tpl, heading: sec ? plain(sec.h) : 'Data', headHTML: t.tHead ? t.tHead.innerHTML : '', runs: [] };
    const box = el('div', { class: 'ws ws-tablebox' });
    t.parentNode.insertBefore(box, t.nextSibling);
    T.box = box; T.first = t;
    T.copies = el('div');
    T.bringBack = el('button', { type: 'button', class: 'ws-btn ws-quiet', text: 'Bring back the first table', hidden: true, on: { click: () => { showOriginal(T, true); changed(); } } });
    T.tools = el('div', { class: 'ws-btns' }, [T.bringBack, 
      el('button', { type: 'button', class: 'ws-btn', text: 'Add another copy of this table', on: { click: () => { const r = addRun(T); r.label.focus(); changed(); } } })]);
    box.appendChild(T.copies); box.appendChild(T.tools);
    tables.push(T);
    addRun(T, t);
  });

  /* A run is one copy of a table: the original on the page, or a copy added below it. */
  function addRun(T, existing) {
    const n = T.runs.length + 1;
    const R = { rows: [], extra: 0 };
    let t = existing;
    if (!t) {
      t = el('table');
      if (T.headHTML) { const th = el('thead'); th.innerHTML = T.headHTML; t.appendChild(th); }
      t.appendChild(el('tbody'));
      T.tpl.forEach((r) => { const tr = el('tr'); r.forEach((c) => { const td = el('td'); if (c) td.innerHTML = c.html; tr.appendChild(td); }); for (let i = r.length; i < T.ncol; i++) tr.appendChild(el('td')); t.tBodies[0].appendChild(tr); });
      R.label = field('input', `Label for copy ${n} of the ${T.heading} table`);
      const rm = el('button', { type: 'button', class: 'ws-btn ws-quiet', text: 'Remove this copy', on: { click: () => removeRun(T, R) } });
      R.wrap = el('div', {}, [el('div', { class: 'ws-copyhead' }, [`Copy ${n}:`, withPrint(R.label), rm]), t]);
      T.copies.appendChild(R.wrap);
      R.wrap.dataset.copy = n;
      typeset(t.tHead || t);
    } else {
      R.label = null;
    }
    t.classList.add('ws', 'ws-table');
    R.table = t;
    [...t.tBodies[0].rows].forEach((tr, i) => R.rows.push(wireRow(T, R, tr, T.tpl[i] || [])));
    R.notes = field('area', `Settings and notes for ${R.label ? 'copy ' + n + ' of ' : ''}the ${T.heading} table`);
    const addRow = el('button', { type: 'button', class: 'ws-btn', text: 'Add a row', on: { click: () => { const row = newRow(T, R); row.cells[0] && row.cells[0].focus(); changed(); } } });
    R.removeRow = el('button', { type: 'button', class: 'ws-btn ws-quiet', text: 'Remove the last added row', hidden: true, on: { click: () => { dropRow(R); changed(); } } });
    const after = el('div', { class: 'ws tex2jax_ignore' }, [el('div', { class: 'ws-btns' }, [addRow, R.removeRow]),
      el('div', { class: 'ws-notes' }, [el('label', { text: R.label ? 'Settings and notes for this copy' : 'Settings and notes for this table' }), withPrint(R.notes)])]);
    if (GRAPHS.indexOf(SLUG) >= 0 && T.index === 0) graphBox(T, R, after);
    if (existing) {
      /* the original table can go once a copy exists (when a later copy is the one to keep) */
      R.after = after;
      R.dropSelf = el('button', { type: 'button', class: 'ws-btn ws-quiet', text: 'Remove this table', hidden: true, on: { click: () => dropOriginal(T, R) } });
      after.firstChild.appendChild(R.dropSelf);
      T.box.insertBefore(after, T.copies);
    } else R.wrap.appendChild(after);
    T.runs.push(R);
    syncOriginal(T);
    replot();
    return R;
  }
  function wireRow(T, R, tr, tplRow) {
    const row = { tr, cells: [], added: false };
    for (let c = tr.cells.length; c < T.ncol; c++) tr.appendChild(el('td'));
    [...tr.cells].forEach((td, c) => {
      if (tplRow[c]) { td.classList.add('ws-fixed'); row.cells.push(null); return; }
      td.textContent = '';
      const f = field('input', `${T.cols[c] || 'Column ' + (c + 1)}, row ${R.rows.length + 1}`);
      f.size = 6; /* a small intrinsic width, so the columns share the page instead of each taking 20 characters */
      f.addEventListener('keydown', (e) => moveKey(e, R, row, c));
      td.appendChild(withPrint(f)); row.cells.push(f);
    });
    return row;
  }
  function newRow(T, R) {
    const tr = el('tr'); for (let c = 0; c < T.ncol; c++) tr.appendChild(el('td'));
    R.table.tBodies[0].appendChild(tr);
    const row = wireRow(T, R, tr, []); row.added = true; R.rows.push(row); R.extra++; R.removeRow.hidden = false;
    return row;
  }
  function dropRow(R) {
    if (!R.extra) return;
    const row = R.rows[R.rows.length - 1];
    if (row.cells.some((f) => f && f.value) && !confirm('That row has entries. Remove it anyway?')) return;
    R.rows.pop(); row.tr.remove(); R.extra--; R.removeRow.hidden = !R.extra;
  }
  function removeRun(T, R) {
    const filled = R.rows.some((r) => r.cells.some((f) => f && f.value)) || R.notes.value || R.label.value;
    if (filled && !confirm('Remove this copy of the table and everything typed in it?')) return;
    R.wrap.remove(); T.runs.splice(T.runs.indexOf(R), 1);
    if (T.runs[0].removed && T.runs.length === 1) showOriginal(T, true);
    syncOriginal(T); changed();
  }
  function syncOriginal(T) {
    const R = T.runs[0]; if (!R || !R.dropSelf) return;
    R.dropSelf.hidden = R.removed || T.runs.length < 2;
    T.bringBack.hidden = !R.removed;
  }
  function showOriginal(T, on) {
    const R = T.runs[0]; R.removed = !on;
    R.table.hidden = !on; R.after.hidden = !on;
    syncOriginal(T);
  }
  function dropOriginal(T, R) {
    const filled = R.rows.some((r) => r.cells.some((f) => f && f.value)) || R.notes.value;
    if (filled && !confirm('Remove the first table and everything typed in it? Your copies stay.')) return;
    R.rows.forEach((r) => r.cells.forEach((f) => f && f.wsSet(''))); R.notes.wsSet(''); R.source = null;
    while (R.extra) { R.rows.pop().tr.remove(); R.extra--; } R.removeRow.hidden = true;
    showOriginal(T, false); changed();
  }
  /* Enter moves down a row; arrow keys move between cells when the caret is at the edge of the text. */
  function moveKey(e, R, row, c) {
    const i = R.rows.indexOf(row), f = e.target;
    let to = null;
    if (e.key === 'Enter' || (e.key === 'ArrowDown' && !e.shiftKey)) to = R.rows[i + 1] && R.rows[i + 1].cells[c];
    else if (e.key === 'ArrowUp') to = R.rows[i - 1] && R.rows[i - 1].cells[c];
    else if (e.key === 'ArrowRight' && f.selectionStart === f.value.length && f.selectionEnd === f.value.length) to = row.cells.slice(c + 1).find(Boolean);
    else if (e.key === 'ArrowLeft' && f.selectionStart === 0 && f.selectionEnd === 0) to = row.cells.slice(0, c).reverse().find(Boolean);
    if (e.key === 'Enter') e.preventDefault();
    if (to) { e.preventDefault(); to.focus(); to.select(); }
  }

  /* ---------- answer boxes ---------- */
  const answers = [];
  sections.forEach((s) => {
    if (ANSWER_LISTS.test(s.id)) {
      s.nodes.filter((n) => n.tagName === 'OL').forEach((ol) => {
        const start = parseInt(ol.getAttribute('start') || '1', 10);
        [...ol.children].filter((li) => li.tagName === 'LI').forEach((li, i) => {
          const num = start + i, label = `Answer to ${plain(s.h)} ${num}`;
          const f = field('area', label);
          li.appendChild(el('div', { class: 'ws ws-answer tex2jax_ignore' }, [withPrint(f)]));
          answers.push({ key: `${s.id}-${num}`, q: plain(li).slice(0, 90), f, where: `${plain(s.h)} ${num}` });
        });
      });
    } else if (ONE_BOX.test(s.id)) {
      const f = field('area', `Your ${plain(s.h).toLowerCase()} analysis`);
      const last = s.nodes[s.nodes.length - 1] || s.h;
      const box = el('div', { class: 'ws ws-answer ws-answer-one tex2jax_ignore' }, [el('label', { text: 'Your ' + plain(s.h).toLowerCase() + ' analysis' }), withPrint(f)]);
      last.parentNode.insertBefore(box, last.nextSibling);
      answers.push({ key: s.id, q: plain(s.h), f, where: plain(s.h) });
    }
  });

  /* Export buttons again at the end of the worksheet. */
  const lastSec = sections[sections.length - 1];
  const endBox = el('section', { class: 'ws ws-panel ws-noprint tex2jax_ignore', 'aria-label': 'Save and export' }, [el('h2', { text: 'Save and export' })]);
  buttons('end').forEach((x) => endBox.appendChild(x));
  if (lastSec) { const ln = lastSec.nodes[lastSec.nodes.length - 1] || lastSec.h; ln.parentNode.insertBefore(endBox, ln.nextSibling); } else body.appendChild(endBox);
  const leftBox = el('section', { class: 'ws ws-left tex2jax_ignore', hidden: true });
  endBox.parentNode.insertBefore(leftBox, endBox);

  /* ---------- state ---------- */
  function collect() {
    const S = { worksheet: SLUG, title: TITLE, version: VERSION, saved: new Date().toISOString(), student: {}, tables: [], answers: {}, unplaced: leftovers, received };
    WHO.forEach(([k]) => { S.student[k] = who[k].value; });
    tables.forEach((T) => S.tables.push({ columns: T.cols, runs: T.runs.map((R) => ({ label: R.label ? R.label.value : null, notes: R.notes.value, source: R.source || null,
      removed: R.removed || undefined, axes: R.axes, rows: R.rows.map((r) => r.cells.map((f) => (f ? f.value : null))) })) }));
    answers.forEach((a) => { if (a.f.value) S.answers[a.key] = { q: a.q, text: a.f.value }; });
    return S;
  }
  let leftovers = [], storageOK = true, received = null;
  function save() {
    clearTimeout(saveTimer);
    const S = collect();
    try { localStorage.setItem(KEY, JSON.stringify(S)); storageOK = true; }
    catch (_) { storageOK = false; }
    const t = new Date(S.saved).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    if (storageOK) setStatus(`Saved in this browser at ${t}.`);
    else setStatus('Not saved: this browser is blocking storage (a private window?). Use Save to a file before you leave.', true);
  }
  function apply(S) {
    if (!S || typeof S !== 'object') return;
    WHO.forEach(([k]) => who[k].wsSet((S.student || {})[k] || ''));
    received = S.received || null;
    const warn = [];
    (S.tables || []).forEach((st, ti) => {
      const T = tables[ti];
      if (!T) { (st.runs || []).forEach((r, ri) => leftTable(`Table ${ti + 1}, copy ${ri + 1}`, st.columns, r)); return; }
      if ((st.columns || []).join('|') !== T.cols.join('|')) warn.push(T.heading);
      (st.runs || []).forEach((sr, ri) => {
        const R = T.runs[ri] || addRun(T);
        if (R.label) R.label.wsSet(sr.label || '');
        R.source = sr.source || null;
        if (ri === 0 && R.dropSelf) showOriginal(T, !sr.removed);
        setAxes(R, sr.axes);
        R.notes.wsSet(sr.notes || '');
        (sr.rows || []).forEach((cells, i) => {
          const row = R.rows[i] || newRow(T, R);
          (cells || []).forEach((v, c) => { if (v != null && v !== '') { if (row.cells[c]) row.cells[c].wsSet(v); else warn.push(T.heading); } });
        });
      });
    });
    /* Answers: same place and same question first, then the same question moved, then the same place. */
    const saved = Object.entries(S.answers || {}).map(([key, a]) => ({ key, q: (a && a.q) || '', text: (a && a.text) || '' })).filter((a) => a.text);
    const free = new Set(answers);
    const place = (test) => saved.filter((a) => !a.done).forEach((a) => {
      const box = answers.find((b) => free.has(b) && test(a, b));
      if (box) { box.f.wsSet(a.text); free.delete(box); a.done = true; }
    });
    answers.forEach((b) => b.f.wsSet(''));
    place((a, b) => a.key === b.key && a.q === b.q);
    place((a, b) => a.q && a.q === b.q);
    place((a, b) => a.key === b.key);
    leftovers = (S.unplaced || []).concat(saved.filter((a) => !a.done).map((a) => ({ q: a.q, text: a.text })));
    showLeftovers(warn);
  }
  function leftTable(name, cols, r) {
    const lines = (r.rows || []).filter((row) => row.some((v) => v)).map((row) => row.map((v) => v || '').join(' | '));
    if (lines.length || r.notes) leftovers.push({ q: `${name} (${(cols || []).join(' | ')})`, text: lines.concat(r.notes ? ['Notes: ' + r.notes] : []).join('\n') });
  }
  function showLeftovers(warn) {
    leftBox.innerHTML = '';
    const uniq = [...new Set(warn || [])];
    if (!leftovers.length && !uniq.length) { leftBox.hidden = true; return; }
    leftBox.hidden = false;
    leftBox.appendChild(el('h2', { text: 'This worksheet changed since you saved' }));
    if (uniq.length) leftBox.appendChild(el('p', { text: `The columns of the ${uniq.join(' and ')} table changed. Your entries were put back by position: check that each is in the right column.` }));
    if (leftovers.length) {
      leftBox.appendChild(el('p', { text: 'These answers no longer match a question on the page. They are kept here (and in your save file and PDF) so nothing is lost; copy them where they belong.' }));
      leftovers.forEach((a) => leftBox.appendChild(el('p', {}, [el('strong', { text: a.q + ': ' }), a.text])));
      leftBox.appendChild(el('div', { class: 'ws-btns' }, [el('button', { type: 'button', class: 'ws-btn ws-quiet', text: 'Dismiss these', on: { click: () => { if (confirm('Delete these unplaced answers?')) { leftovers = []; showLeftovers(); save(); } } } })]));
    }
  }

  /* ---------- export ---------- */
  const stamp = () => { const d = new Date(), p = (x) => String(x).padStart(2, '0'); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`; };
  const fileBase = () => { const n = (who.name.value || '').trim().replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, ''); return SLUG + (n ? '-' + n : ''); };
  function exportCSV() {
    save();
    const L = [`# ${TITLE}: worksheet data tables`];
    WHO.forEach(([k, label]) => L.push(['# ' + label, who[k].value].map(csvCell).join(',')));
    L.push(`# exported,${new Date().toISOString()}`);
    tables.forEach((T, ti) => T.runs.forEach((R, ri) => {
      if (R.removed) return;
      L.push('');
      const name = `${T.heading}${tables.length > 1 ? ' table ' + (ti + 1) : ''}, copy ${ri + 1}${R.label && R.label.value ? ': ' + R.label.value : ''}`;
      L.push('# ' + name.replace(/[\r\n]+/g, ' '));
      if (R.notes.value) L.push(['# notes', R.notes.value].map(csvCell).join(','));
      L.push(Array.from({ length: T.ncol }, (_, c) => csvCell(T.cols[c] || 'Column ' + (c + 1))).join(','));
      R.rows.forEach((r, i) => {
        const vals = r.cells.map((f, c) => (f ? f.value : (T.tpl[i] && T.tpl[i][c] ? T.tpl[i][c].text : '')));
        if (r.cells.some((f) => f && f.value)) L.push(vals.map(csvCell).join(','));
      });
    }));
    download(fileBase() + '-data.csv', L.join('\r\n') + '\r\n', 'text/csv');
  }
  function exportJSON() { save(); download(fileBase() + '-' + stamp() + '.json', JSON.stringify(collect(), null, 1), 'application/json'); setStatus('Save file downloaded. Open it with Open a saved file on any computer.'); }
  function openFile(input) {
    const file = input.files && input.files[0]; input.value = '';
    if (!file) return;
    file.text().then((txt) => {
      let S; try { S = JSON.parse(txt); } catch (_) { alert('That file is not a worksheet save file.'); return; }
      if (!S || !S.worksheet) { alert('That file is not a worksheet save file.'); return; }
      if (S.worksheet !== SLUG && !confirm(`That file is for a different worksheet ("${S.title || S.worksheet}"). Open it here anyway?`)) return;
      if (!confirm('Replace what is on this page with the saved file?')) return;
      reset(); apply(S); save(); replot(); setStatus(`Opened ${file.name}.`);
    }, () => alert('The file could not be read.'));
  }
  function reset() {
    tables.forEach((T) => { T.runs.slice(1).forEach((R) => R.wrap.remove()); T.runs.length = 1; const R = T.runs[0]; while (R.extra) { R.rows.pop().tr.remove(); R.extra--; } R.removeRow.hidden = true; showOriginal(T, true); });
    leftovers = [];
  }
  function clearAll() {
    if (!confirm('Clear your name, data and answers from this worksheet? Save to a file first if you might need them.')) return;
    reset(); apply({ student: {}, tables: tables.map(() => ({ runs: [] })), answers: {} });
    tables.forEach((T) => T.runs.forEach((R) => { R.source = null; setAxes(R, null); }));
    tables.forEach((T) => T.runs.forEach((R) => { R.rows.forEach((r) => r.cells.forEach((f) => f && f.wsSet(''))); R.notes.wsSet(''); }));
    try { localStorage.removeItem(KEY); } catch (_) {}
    setStatus('Cleared.'); checkHand(); replot();
  }

  /* ---------- graphs ---------- */
  addEventListener('resize', () => replot());
  function replot() { if (GRAPHS.indexOf(SLUG) < 0 || plotFrame) return; plotFrame = requestAnimationFrame(() => { plotFrame = 0; tables[0] && tables[0].runs.forEach((R) => R.graph && drawPlot(tables[0], R)); }); }
  function graphBox(T, R, after) {
    R.axes = { x: '', y: '' };
    const pick = (k, label) => {
      const s = el('select', { class: 'ws-f ws-sel', 'aria-label': label, on: { change: () => { R.axes[k] = s.value; changed(); } } },
        [el('option', { value: '', text: 'choose a column' })].concat(T.cols.map((c, i) => el('option', { value: String(i), text: pretty(c) || 'Column ' + (i + 1) }))));
      R.axesSel = R.axesSel || {}; R.axesSel[k] = s; return s;
    };
    R.graph = el('div');
    const box = el('div', { class: 'ws-plot' }, [el('h3', { text: 'Graph' }),
      el('div', { class: 'ws-axes' }, [el('label', {}, ['Vertical axis (y) ', pick('y', 'Column for the vertical axis')]), el('label', {}, ['Horizontal axis (x) ', pick('x', 'Column for the horizontal axis')])]),
      R.graph]);
    after.appendChild(box);
  }
  const setAxes = (R, a) => { if (!R.axesSel) return; R.axes = { x: (a && a.x) || '', y: (a && a.y) || '' }; R.axesSel.x.value = R.axes.x; R.axesSel.y.value = R.axes.y; };
  const numOf = (f) => { if (!f) return NaN; const t = String(f.value).trim().replace('−', '-').replace(/,/g, ''); return t && /^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(t) ? +t : NaN; };
  function fitLine(xs, ys) {
    const n = xs.length; if (n < 2) return null;
    const mx = xs.reduce((a, b) => a + b, 0) / n, my = ys.reduce((a, b) => a + b, 0) / n;
    let sxx = 0, sxy = 0; xs.forEach((x, i) => { sxx += (x - mx) * (x - mx); sxy += (x - mx) * (ys[i] - my); });
    if (!(sxx > 0)) return null;
    const b = sxy / sxx, res = xs.map((x, i) => ys[i] - (my - b * mx) - b * x), ss = res.reduce((q, r) => q + r * r, 0), s2 = n > 2 ? ss / (n - 2) : NaN;
    const ymax = Math.max(...ys.map(Math.abs)), exact = n > 2 && ss <= 1e-24 * n * ymax * ymax;    /* on the line to rounding error */
    let a = my - b * mx; if (exact && Math.abs(a) < 1e-9 * ymax) a = 0;
    return { b, a, res, n, exact, seB: Math.sqrt(s2 / sxx), seA: Math.sqrt(s2 * (1 / n + mx * mx / sxx)) };
  }
  /* value ± uncertainty: the uncertainty to 2 significant figures and the value to the same decimal place; powers of ten below
     0.001 and from 100000 up. exact: the points lie on the line to rounding error, so the standard error is zero */
  const SUPD = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  const sup = (k) => (k < 0 ? '⁻' : '') + String(Math.abs(k)).split('').map((c) => SUPD[+c]).join('');
  function pm(v, e, unit, n, exact) {
    const u = unit ? ' ' + unit : '', ok = n >= 3 && !exact && e > 0 && isFinite(e);
    const p = ok ? Math.floor(Math.log10(e)) - 1 : 0, vr = ok ? Math.round(v / Math.pow(10, p)) * Math.pow(10, p) : +v.toPrecision(exact ? 6 : 4);
    const big = Math.max(Math.abs(vr), ok ? e : 0);
    const k = big > 0 && (big < 1e-3 || big >= 1e5) ? +big.toExponential(3).split('e')[1] : 0, sc = Math.pow(10, k), tail = k ? ` × 10${sup(k)}` : '';
    if (!ok) return `${+(vr / sc).toPrecision(exact ? 6 : 4)}${tail}${u} ${exact ? '± 0 (the points lie exactly on the line)' : '(uncertainty needs at least 3 points)'}`;
    const d = Math.max(0, k - p), r = (x) => (x / sc).toFixed(d);
    return `(${r(vr)} ± ${r(Math.round(e / Math.pow(10, p)) * Math.pow(10, p))})${tail}${u}`;
  }
  function ticks(lo, hi, n) {
    const span = hi - lo || Math.abs(hi) || 1, step0 = span / n, mag = Math.pow(10, Math.floor(Math.log10(step0))), f = step0 / mag;
    const step = (f >= 5 ? 10 : f >= 2 ? 5 : f >= 1 ? 2 : 1) * mag, out = [];
    for (let v = Math.ceil(lo / step) * step; v <= hi + step * 1e-9; v += step) out.push(+v.toPrecision(12));
    return out;
  }
  const NS = 'http://www.w3.org/2000/svg';
  const sv = (tag, a, txt) => { const e = document.createElementNS(NS, tag); for (const k in a) e.setAttribute(k, a[k]); if (txt != null) e.textContent = txt; return e; };
  function axes(svg, box, xr, yr, xl, yl, nTy) {
    const X = (v) => box.x + (v - xr[0]) / (xr[1] - xr[0]) * box.w, Y = (v) => box.y + box.h - (v - yr[0]) / (yr[1] - yr[0]) * box.h;
    svg.appendChild(sv('rect', { x: box.x, y: box.y, width: box.w, height: box.h, fill: '#fff', stroke: '#8c959f' }));
    ticks(xr[0], xr[1], 6).forEach((v) => { svg.appendChild(sv('line', { x1: X(v), x2: X(v), y1: box.y, y2: box.y + box.h, stroke: '#eaeef2' }));
      svg.appendChild(sv('text', { x: X(v), y: box.y + box.h + 14, 'text-anchor': 'middle', 'font-size': 11, fill: '#57606a' }, String(v))); });
    ticks(yr[0], yr[1], nTy).forEach((v) => { svg.appendChild(sv('line', { x1: box.x, x2: box.x + box.w, y1: Y(v), y2: Y(v), stroke: '#eaeef2' }));
      svg.appendChild(sv('text', { x: box.x - 5, y: Y(v) + 4, 'text-anchor': 'end', 'font-size': 11, fill: '#57606a' }, String(v))); });
    if (xl) svg.appendChild(sv('text', { x: box.x + box.w / 2, y: box.y + box.h + 30, 'text-anchor': 'middle', 'font-size': 12, fill: '#1f2328' }, xl));
    svg.appendChild(sv('text', { x: 12, y: box.y + box.h / 2, 'text-anchor': 'middle', 'font-size': 12, fill: '#1f2328', transform: `rotate(-90 12 ${box.y + box.h / 2})` }, yl));
    return { X, Y };
  }
  const pad = (lo, hi, inc0) => { if (inc0) { lo = Math.min(lo, 0); hi = Math.max(hi, 0); } const d = (hi - lo) || Math.abs(hi) || 1; return [lo - 0.08 * d, hi + 0.08 * d]; };
  function drawPlot(T, R) {
    const box = R.graph; box.innerHTML = '';
    if (box.parentNode) box.parentNode.classList.toggle('ws-noprint', R.axes.x === '' || R.axes.y === '');   /* no axes chosen: nothing to print */
    if (R.axes.x === '' || R.axes.y === '') { box.appendChild(el('p', { class: 'ws-pnote', text: 'Choose a column for each axis to draw a graph of your data.' })); return; }
    const cx = +R.axes.x, cy = +R.axes.y, [xName, xUnit] = nameUnit(T.cols[cx]), [yName, yUnit] = nameUnit(T.cols[cy]);
    const P = { xName, xUnit, yName, yUnit, title: `${yName} against ${xName}` };
    const pts = [];
    R.rows.forEach((r, i) => {
      const val = (c) => (r.cells[c] ? numOf(r.cells[c]) : numOf({ value: T.tpl[i] && T.tpl[i][c] ? T.tpl[i][c].text : '' }));
      const x = val(cx), y = val(cy);
      if (isFinite(x) && isFinite(y)) pts.push([x, y]);
    });
    if (!pts.length) { box.appendChild(el('p', { class: 'ws-pnote', text: `No row has a number in both columns yet. Each row with a number for ${xName} and for ${yName} is a point.` })); return; }
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    const sameX = xs.every((x) => x === xs[0]);
    const f = sameX ? null : fitLine(xs, ys);
    const W = Math.round(Math.min(640, Math.max(330, R.graph.parentNode.clientWidth || 640))), H = f ? 380 : 270, /* drawn at the page's width so the labels stay readable on a phone */ svg = sv('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': `${P.title}, ${pts.length} points` });
    const xr = pad(Math.min(...xs), Math.max(...xs), true), yr = pad(Math.min(...ys), Math.max(...ys), true);
    const lab = (n, u) => (u ? `${n} (${u})` : n);
    const A = axes(svg, { x: 62, y: 10, w: W - 80, h: 210 }, xr, yr, f ? '' : lab(P.xName, P.xUnit), lab(P.yName, P.yUnit), 5);
    if (f) svg.appendChild(sv('line', { x1: A.X(xr[0]), y1: A.Y(f.a + f.b * xr[0]), x2: A.X(xr[1]), y2: A.Y(f.a + f.b * xr[1]), stroke: '#1f6feb', 'stroke-width': 2 }));
    pts.forEach(([x, y]) => svg.appendChild(sv('circle', { cx: A.X(x), cy: A.Y(y), r: 4.5, fill: '#cf222e', stroke: '#fff', 'stroke-width': 1 })));
    if (f) {
      const m = Math.max(...f.res.map(Math.abs)) || 1, B = axes(svg, { x: 62, y: 250, w: W - 80, h: 90 }, xr, [-1.25 * m, 1.25 * m], lab(P.xName, P.xUnit), lab('residual', P.yUnit), 4);
      svg.appendChild(sv('line', { x1: B.X(xr[0]), x2: B.X(xr[1]), y1: B.Y(0), y2: B.Y(0), stroke: '#1f6feb', 'stroke-width': 1.5 }));
      xs.forEach((x, i) => svg.appendChild(sv('circle', { cx: B.X(x), cy: B.Y(f.res[i]), r: 3.5, fill: '#cf222e' })));
    }
    box.appendChild(svg);
    if (sameX) { box.appendChild(el('p', { class: 'ws-warn2', text: `Every point has the same ${P.xName} (${xs[0]}${P.xUnit ? ' ' + P.xUnit : ''}), so there is no slope to fit. Use rows where ${P.xName} changes, or choose another column.` })); return; }
    if (!f) return;
    const wrap = (u) => (/[\/\s]/.test(u) ? `(${u})` : u); /* (m/s)/kg, AU/(solar masses) */
    const su = P.yUnit === null || P.xUnit === null ? '' : P.yUnit && P.xUnit ? `${wrap(P.yUnit)}/${wrap(P.xUnit)}` : P.yUnit || (P.xUnit ? `1/${wrap(P.xUnit)}` : '');
    const lines = [['slope', f.b, f.seB, su], ['intercept', f.a, f.seA, P.yUnit]];
    const res = el('p', { class: 'ws-res' });
    lines.forEach(([name, v, e, u], i) => { if (i) res.appendChild(el('br')); res.appendChild(el('b', { text: name + ': ' })); res.appendChild(document.createTextNode(pm(v, e, u, f.n, f.exact))); });
    box.appendChild(res);
    box.appendChild(el('p', { class: 'ws-pnote', text: `${f.n} points. Least squares line with a free intercept and equal weights; uncertainties are standard errors from the scatter about the line (n − 2 degrees of freedom). What the slope tells you is for you to work out.` }));
  }

  /* ---------- readings from the demo ---------- */
  const HKEY = 'vd-handoff:' + SLUG, MAP = FROM_DEMO[SLUG], dT = MAP && tables[0];
  const handBox = el('div', { class: 'ws ws-hand ws-noprint tex2jax_ignore', role: 'status', hidden: true });
  if (dT) dT.first.parentNode.insertBefore(handBox, dT.first);
  let handHidden = null;
  function readHand() { try { const h = JSON.parse(localStorage.getItem(HKEY) || 'null'); return h && h.sent && Array.isArray(h.rows) && Array.isArray(h.columns) ? h : null; } catch (_) { return null; } }
  function checkHand() {
    if (!dT) return;
    const h = readHand();
    if (!h || h.sent === received || h.sent === handHidden) { handBox.hidden = true; return; }
    const t = new Date(h.sent).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }), n = h.rows.length;
    const src = h.demo + ':' + (h.series || ''), target = dT.runs.find((R) => R.source === src);
    handBox.innerHTML = '';
    handBox.appendChild(el('p', {}, [el('strong', { text: `New readings from the ${MAP.demo} demo: ` }), `${n} row${n === 1 ? '' : 's'}, sent ${t}.`]));
    handBox.appendChild(el('div', { class: 'ws-btns' }, [
      el('button', { type: 'button', class: 'ws-btn ws-main', text: target ? 'Update my table with these readings' : 'Put these readings in my table', on: { click: () => takeHand(h) } }),
      el('button', { type: 'button', class: 'ws-btn', text: 'Download them as CSV', on: { click: () => download(h.csvName || SLUG + '-readings.csv', h.csv || '', 'text/csv') } }),
      el('button', { type: 'button', class: 'ws-btn ws-quiet', text: 'Not now', on: { click: () => { handHidden = h.sent; handBox.hidden = true; } } })]));
    if (target) handBox.appendChild(el('p', { class: 'ws-note', text: `Updating replaces the demo's columns in ${target.label ? 'copy ' + (dT.runs.indexOf(target) + 1) : 'the table'} with these readings; your other columns and notes stay.` }));
    handBox.hidden = false;
  }
  /* The demo sends every reading of its current series (it starts a new series at Clear), so a later export of the same series
     replaces the earlier one in the same table instead of adding duplicates, and a new series goes into a new copy of the table. */
  function takeHand(h) {
    const src = h.demo + ':' + (h.series || '');
    const meta = h.meta || {};
    const get = MAP.cols.map((m) => (m == null ? null : typeof m === 'function' ? m : m[0] === '#' ? () => meta[m.slice(1)] : (r) => r[m]));
    const filled = (R) => R.source || R.rows.some((r) => get.some((g, c) => g && r.cells[c] && r.cells[c].value)); /* the demo's columns already used */
    let R = dT.runs.find((x) => x.source === src);
    if (!R) {
      R = dT.runs[0].removed || filled(dT.runs[0]) ? addRun(dT) : dT.runs[0];
      if (R.label && !R.label.value) R.label.wsSet(`Readings from the ${MAP.demo} demo`);
      R.source = src;
      if (R.wrap) typeset(R.wrap);
    }
    h.rows.forEach((vals, i) => {
      const row = R.rows[i] || newRow(dT, R), rec = {};
      h.columns.forEach((name, k) => { rec[name] = vals[k] == null ? '' : vals[k]; });
      get.forEach((g, c) => { if (g && row.cells[c]) { let v; try { v = g(rec, meta); } catch (_) { v = ''; } row.cells[c].wsSet(v == null ? '' : v); } });
    });
    for (let i = h.rows.length; i < R.rows.length; i++) get.forEach((g, c) => { if (g && R.rows[i].cells[c]) R.rows[i].cells[c].wsSet(''); });
    if (h.note && R.notes.value.indexOf(h.note) < 0) R.notes.wsSet(R.notes.value ? R.notes.value + '\n' + h.note : h.note);
    received = h.sent; handBox.hidden = true; save(); replot();
    setStatus(`${h.rows.length} readings from the ${MAP.demo} demo are in your table.`);
    (R.wrap || R.table).scrollIntoView({ block: 'nearest' });
  }
  window.addEventListener('storage', (e) => { if (e.key === HKEY) checkHand(); });

  /* ---------- start ---------- */
  let stored = null;
  try { stored = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (_) { storageOK = false; }
  if (stored) { apply(stored); setStatus(`Your work from ${new Date(stored.saved).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })} is back.`); }
  else if (!storageOK) setStatus('This browser is blocking storage (a private window?), so nothing is saved as you type. Use Save to a file.', true);
  else setStatus('Nothing typed yet. Your work saves in this browser as you type.');
  checkHand(); replot();
  window.addEventListener('pagehide', () => { if (saveTimer) save(); });
  window.addEventListener('beforeprint', () => document.querySelectorAll('.ws textarea.ws-f').forEach((t) => { t.wsPrint.textContent = t.value; }));
})();
