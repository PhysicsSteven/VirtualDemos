# Faraday Induction: Measuring Flux Change and Induced Voltage
Student laboratory · 120 minutes · Calculus-based Physics II

[Open simulation](https://physicssteven.github.io/VirtualDemos/demos/faraday.html). This procedure supports main at bc0485a. A feature-branch CSV extension is described at the end.

## Objectives and prerequisites
Measure magnetic flux and induced EMF; test sign and integral forms of Faraday's law; infer generator amplitude scaling and magnetic field from motional EMF; account for mechanical energy converted into heat. Prerequisites: magnetic flux, derivatives/integrals, Ohm's law, work/energy and spreadsheet graphing.

## Model and prelab
For N turns, flux per turn Φ=∫B·dA, flux linkage NΦ, EMF ε=−N dΦ/dt and I=ε/R when self-inductance is negligible. Derive ε for Φ=BA cos(ωt). For a sliding bar of length L at x in uniform perpendicular B, use Φ=BLx to derive the EMF, magnetic drag and mechanical power. Derive the coasting decay from m dv/dt=−B²L²v/R.

The magnet is a uniformly magnetized finite cylinder, not a point dipole near the coil. The generator motor prescribes angular speed. Rails are frictionless; a bumper terminates travel. Numerical EMF/current are averages over a preceding 1 ms interval, whereas flux is an endpoint value. Distinguish a model prediction from an experimental measurement.

## Current-main controls and recording
Use **Generator**, **Sliding bar** and **Push the magnet in** presets. Press **Pause** when preparing each run. Main offers playback and apparatus controls but no numerical time entry, single-step button, notebook or CSV. Sample with Play/Pause and slow playback; record actual displayed time, never an intended exact time. Make manual tables and screenshots. Presets/reset restore settings, so reapply changes afterward. Theoretical amplitudes/integral checks are visible: write predictions before consulting them. Use the actual trace amplitude for your measurement, not a theoretical peak label.

## A. Generator (40 minutes)
1. Select Generator; set N=100, B=0.20 T, A=100 cm², R=100 Ω, ω=6.3 rad/s. Record unit conversions and predict period and amplitude.
2. Record at least twelve tuples (t, Φ, ε, I) over two cycles. Use repeated runs if needed; the motion is deterministic. Screenshot the trace and time scale.
3. Plot flux and EMF versus actual time. Estimate period, amplitudes and relative phase. If timing/readout precision permits, fit a sinusoid; otherwise use bracketed peaks and report resolution rather than claiming a precise fit.
4. Repeat at ω=3.0 and 12.0 rad/s. Plot measured EMF amplitude versus ω; infer NBA from the slope. Double N for an additional run and compare flux per turn, EMF and current.
5. Compare finite differences −NΔΦ/Δt with the EMF at each interval midpoint. With coarse manually sampled flux, the finite difference is an interval average and need not match an endpoint readout.

| N | B (T) | A (m²) | ω (rad/s) | Period (s) | Flux amplitude (Wb) | EMF amplitude (V) | Phase |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Also submit your twelve-row raw table for each run, including actual time and units.

## B. Sliding bar (35 minutes)
1. Select Sliding bar: B=1 T, L=20 cm, v=1 m/s, R=0.47 Ω, m=20 g. Play and pause during uniform motion, away from the initial 0.2 s delay and the bumper.
2. Using the displayed normal into the page and positive clockwise loop direction, predict the signs of ε and I. Record x, Φ, ε, I and velocity.
3. Calculate F=ILB, I²R and −Fv; compare electrical and mechanical power. Repeat at v=0.5 and 1.5 m/s, keeping other settings fixed. Fit ε versus v and infer B from its slope.
4. Select **Push and let go** from a reset starting position. Sample velocity and actual elapsed time since release at least six times before reaching the bumper. Plot ln|v| versus time and infer the coasting time constant. Record the uncertainty in release time; an unknown common time offset affects the intercept rather than the slope.
5. Compare resistor heat with (m/2)(v0²−v²), computing kinetic energy yourself from the same velocity convention. Main's kinetic-energy readout uses interval-average velocity; the feature branch corrects it to endpoint energy. Finite-step heat also has averaging error. Exclude bumper losses from the electrical heat balance. Keep B nonzero: main's zero-field coasting core is defective.

| v (m/s) | ε (V) | I (A) | F (N) | I²R (W) | −Fv (W) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## C. Magnet (25 minutes)
1. Select Push the magnet in, pause, set speed 0.10 m/s, then complete the move. Keep coil radius, N, R and magnet strength fixed. Record initial/final flux and the displayed cumulative EMF integral and charge since the move began.
2. Repeat from the same reset position at 0.40 m/s. Record peak EMF from the trace with an uncertainty interval. Compare duration, peak and total transported charge.
3. Predict −N(Φ_final−Φ_initial) and divide by R to predict charge. Compare with the cumulative displays, identifying this as an internal consistency check because both use the same flux differences.
4. Use **Pull out** to reverse the move. Explain the changed EMF sign and why the induced force opposes motion in both directions.

| Speed (m/s) | Initial/final position (m) | Φ_initial (Wb) | Φ_final (Wb) | Peak ε (V) | ∫εdt (V s) | Q (C) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |

## Uncertainty and questions (20 minutes)
Use half the last displayed digit as a rounding bound and bracket paused times/trace peaks. Report time-axis resolution and how it affects periods and slopes. For a sinusoid sampled in intervals Δt, EMF amplitude is multiplied by sin(ωΔt/2)/(ωΔt/2). Distinguish this time averaging from spatial quadrature of the magnet field. Do not invent random noise or treat cumulative identities as independent validation.

Why can nonzero B give zero current? Why does N not change flux per turn? Why does faster motion change peak voltage but not total charge for matched endpoints? Where does heat energy come from? When would neglected inductance invalidate I=ε/R?

## Optional feature-branch instrumentation
On the curriculum branch only, **Step 1 ms**, **Advance by (s)** / **Advance and pause**, **Capture measurement**, and notebook/run CSV provide precise samples. Keep **Hide predicted amplitudes and integral checks** selected; some theoretical plot overlays remain. Exported flux belongs at endpoint t, while ε/I belong at the recorded interval midpoint. Exclude the zero-duration initial row from fits. A run retains at most 60001 samples; parameter changes start a new run and speed changes are recorded per row. Generator runs of 2 s and default magnet runs of 2 s are sufficient for the prescribed measurements. Submit raw CSV and independently fitted results if using this extension.

## Submission
Submit settings, raw manual tables or branch CSV, screenshots, plots, fit coefficients or bracketed estimates, and conclusions.
