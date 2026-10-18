# Faraday Induction: Measuring Flux Change and Induced Voltage
Student laboratory · 120 minutes · Calculus-based Physics II

[Open simulation](https://physicssteven.github.io/VirtualDemos/demos/faraday.html). New laboratory controls require the feature-branch version until deployment.

## Objectives and prerequisites
Measure flux and induced EMF, test the sign and integral forms of Faraday's law, determine generator amplitude scaling, and account for mechanical energy converted into heat. Prerequisites: magnetic flux, derivatives and integrals, Ohm's law, work/energy, and spreadsheet or Python plotting.

## Model and prelab
For N identical turns, flux per turn Φ=∫B·dA and flux linkage is NΦ. EMF ε=−N dΦ/dt; the circuit neglects self-inductance so I=ε/R. For a rotating coil, Φ=BA cos θ. For a sliding bar of length L at position x in uniform perpendicular B, Φ=BLx. Derive the rotating-coil EMF and the bar's magnetic drag force. Explain why Φ and NΦ have different roles.

The magnet is a uniformly magnetized finite cylinder; it is not a point dipole close to the coil. The generator motor prescribes angular speed. The rails are frictionless, the load provides the total resistance, and a bumper stops the bar at the rail end. Numerical EMF is the **average over the previous 1 ms interval**, whereas flux is evaluated at the interval endpoint.

## Controls and data
Use the **Generator** or **Sliding bar** preset. Press **Pause** before preparing a run if animation is active. **Step 1 ms** advances one physics step; **Advance by (s)** plus **Advance and pause** advances an exact multiple of 1 ms, independently of playback speed. **Capture measurement** pauses and records the last interval. **Export notebook CSV** exports captured rows; **Export current run CSV** exports every retained step of the current move (at most 60001 samples). Reset returns to the selected preset defaults; set your parameters afterward.

Keep **Hide predicted amplitudes and integral checks** selected during analysis. Each CSV row contains settings in SI JSON, run ID, time, interval duration and midpoint, flux before/after the interval, EMF, current, cumulative charge and heat. A zero-duration initial row has no measured interval EMF: omit it from EMF fits. Changing apparatus settings begins a new run; changing speed can occur within a run, so keep speed fixed during each experiment and inspect row settings.

## Part A: Rotating generator (40 minutes)
1. Select Generator. Use N=100, B=0.20 T, A=100 cm², R=100 Ω and ω=6.3 rad/s. Record the unit conversion for area. Predict the period and peak EMF before revealing theory.
2. Advance 2 s, export the run and plot endpoint flux against endpoint time. Plot interval EMF against **interval midpoint time**.
3. Fit Φ(t)=a cos(ωt)+b sin(ωt) and ε(t)=c cos(ωt)+d sin(ωt), or use a sinusoidal fit in your analysis software. Infer amplitude and relative phase; explain the quarter-cycle shift.
4. From adjacent flux samples calculate −NΔΦ/Δt. Compare this with exported EMF. Explain why their agreement is an implementation consistency check rather than independent evidence for Faraday's law.
5. Reset and repeat for ω=3.0 and 12.0 rad/s, reapplying other settings. Fit peak EMF against ω. Infer NBA from the slope and compare with your geometry.
6. Double N for one additional run. Predict and measure what happens to flux per turn, EMF and current.

| N | B (T) | A (m²) | ω (rad/s) | Period (s) | Flux amplitude (Wb) | EMF amplitude (V) | Phase difference |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Part B: Motional EMF and energy (35 minutes)
1. Select **Sliding bar**. Set B=1.0 T, L=20 cm, v=1.0 m/s, R=0.47 Ω, m=20 g. The initial preset waits 0.2 s before pulling. Advance 0.3 s and capture a measurement while the bar is moving.
2. Predict the signs of EMF and current using the displayed normal (into the page) and positive loop direction (clockwise). Compare with your sample.
3. Compute F=ILB, electrical heating I²R and external mechanical power −Fv. Explain their equality at constant speed.
4. Reset and use v=0.5, 1.0 and 1.5 m/s in separate runs. Capture during uniform motion, away from starting/stopping intervals. Plot EMF versus v and use the slope to infer B.
5. Press **Push and let go**, immediately pause, then advance in fixed increments. Fit ln(v) versus time using differences of exported positions. Avoid the bumper. Derive the predicted time constant from m dv/dt=−B²L²v/R and compare. For the default settings, the limiting travel distance after release fits within the rail.
6. Compare kinetic-energy loss with exported heat. Identify time-averaging error and exclude bumper impacts, whose dissipated mechanical energy is not resistor heat.

| v (m/s) | EMF (V) | I (A) | F (N) | I²R (W) | −Fv (W) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Part C: Moving magnet and integrated flux (25 minutes)
1. Select **Push the magnet in** preset; pause, set speed to 0.10 m/s, then advance sufficiently to complete the move (2 s is sufficient). Export the run.
2. Reset, set speed to 0.40 m/s and repeat to the same final position. Keep N, R, magnet strength and coil radius fixed.
3. Sum interval EMF×Δt and current×Δt. Compare the two runs' peak voltages and total transported charge. Predict which depends on speed and why.
4. Use **Pull out** to reverse the move. Explain the reversal in EMF sign and why the magnetic force still opposes motion.

## Uncertainty and interpretation (20 minutes, including discussion)
Use finite sampling as a resolution limit. Flux is exact within the model's spatial quadrature, but differenced EMF is interval-averaged: a sinusoid's amplitude is multiplied by sin(ωΔt/2)/(ωΔt/2). Estimate this bias before comparing a fitted amplitude with the instantaneous formula. Do not invent random measurement noise. For the magnet, distinguish spatial quadrature error from time averaging. Cumulative identities built from the same flux differences are not independent physics tests.

Questions: Why is current zero for constant flux? Why does doubling N leave flux per turn unchanged? Why does faster magnet motion change voltage but not total charge for identical endpoints? Where does the heat energy come from? When would neglected self-inductance invalidate I=ε/R?

## Submission and rubric
Prelab 15; generator fits and scaling 30; rails signs, inferred B and energy 25; magnet integral comparison 15; uncertainty and conceptual interpretation 15. Submit CSVs, settings, units, plots, fitted coefficients, residuals and conclusions.
