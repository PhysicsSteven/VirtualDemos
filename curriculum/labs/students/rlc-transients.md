# Transient Circuits: From RC Decay to RLC Oscillations
**Student experiment · 120 minutes (or two 60-minute sessions) · Calculus-based Physics II**

[Open the new simulation](https://physicssteven.github.io/VirtualDemos/demos/transient-circuits.html) — *this GitHub Pages link will work only after the feature branch is merged and deployed.* Until then, use the branch's `demos/transient-circuits.html` locally.

## Objectives and prerequisites
Use RC/RL decay and LC/RLC oscillations to infer circuit parameters, test energy transfer, and quantify measurement resolution. Prerequisites: Kirchhoff’s voltage law, exponential functions, second-order differential equations, and spreadsheet or Python plotting.

## Research questions
How does an electrical system transition from exponential decay to oscillation? Can an unknown L, C, and R be inferred from the observed time series? Where does energy go when the oscillation damps?

## Theory / prelab
For series RLC free response after disconnecting the battery, use Q as the capacitor charge and I=dQ/dt:
```
L Q'' + R Q' + Q/C = 0
omega_0 = 1/sqrt(LC)
alpha = R/(2L)
R_crit = 2 sqrt(L/C)
omega_d = sqrt(omega_0^2 - alpha^2) [underdamped]
```
With Q(0)=CV0 and I(0)=0, the underdamped solution is
```
Q(t) = Q0 exp(-alpha t)[cos(omega_d t)+(alpha/omega_d)sin(omega_d t)]
I(t) = -(Q0 omega_0^2/omega_d)exp(-alpha t)sin(omega_d t).
```
In the ideal LC limit (R=0), Q=Q0 cos(omega0 t), I=−Q0 omega0 sin(omega0 t). In RL decay, I=I0 exp(−Rt/L). In RC decay, Q=Q0 exp(−t/RC). Derive the energy equation d[Q²/(2C)+LI²/2]/dt=−RI².

**Before opening the simulation:** Derive R_crit and explain why R=0 is a special case. Explain why energy oscillates between electric and magnetic storage without decreasing.

## Part A — LC oscillator (25 minutes)
1. Choose LC, L=100 mH, C=100 µF, V0=10 V.
2. Predict frequency f0 and initial energy. Determine the first charge zero, first negative maximum and next positive maximum.
3. Sample charge, current and stored energy at approximately 0, T/4, T/2, 3T/4 and T using the time cursor and Capture measurement.
4. Export CSV. Plot Q and I against time. Determine T from the measured charge peaks and infer L=1/[(2π/T)²C].
5. Calculate U_C=Q²/(2C), U_L=LI²/2 at each sample and verify U_C+U_L≈U_initial.

Record your predictions before revealing theory; retain units throughout.

## Part B — Damped RLC oscillator (30 minutes)
1. Choose RLC, keep L=100 mH, C=100 µF. Begin at R=5 Ω and record four same-sign positive charge maxima, counting the initial maximum at t=0. Use **Export full trace** to obtain 1001 samples and locate peaks in your own plot.
2. Repeat at R=10 Ω and R=20 Ω. Export each run separately or retain the notebook with settings in every row.
3. Estimate the logarithmic decrement δ=ln(Q_n/Q_(n+1)). From the period T_d, infer α=δ/T_d and R_fit=2Lα.
4. Compare measured damped frequency with ω_d. Explain why the oscillation frequency decreases as R increases.
5. For each setting, compute stored energy U and cumulative heat H; check U+H=U_initial.

| R (Ω) | T_d (ms) | Q_peak1 (mC) | Q_peak2 (mC) | δ | R inferred (Ω) |
|---|---|---|---|---|---|
| 5 | | | | | |
| 10 | | | | | |
| 20 | | | | | |

## Part C — Critical damping (20 minutes)
1. Predict R_crit from L and C before viewing theoretical parameters.
2. Use **Exact resistance (Ω)** to enter five settings at 0.95, 0.99, 1, 1.01 and 1.05 times your predicted R_crit. After recording your prediction, **Set critical resistance** supplies the exact model value.
3. Search the exported trace for a charge sign change and record the smallest magnitude you can resolve. Near critical damping, the first reversal may be too late and too small to observe. Do not infer critical damping solely from the absence of a visible crossing. Compare the complete curve with the predicted solutions.
4. Reveal theory, compare R_crit, and discuss what makes the critical case the fastest nonoscillatory return to equilibrium under these initial conditions.
5. Repeat after doubling L. Predict how R_crit changes.

## Part D — RC versus RL relaxation (20 minutes)
1. Choose RC with R=100 Ω, C=100 µF. Measure charge at t≈RC and determine τ_RC.
2. Choose RL with R=100 Ω, L=100 mH, I0=1 A. Measure current at t≈L/R and determine τ_RL.
3. Compare the differential equations, stored-energy expressions and continuity constraints: capacitor voltage and inductor current cannot jump under finite ordinary excitation.
4. For RL with R=0, verify that ideal current remains constant, rather than oscillating.

## Measurement and analysis notes
**Exact sample time (ms)** accepts a time within the displayed response window; the slider has 1000 intervals. Changing a circuit parameter resets time to zero. **Export CSV** exports notebook rows; **Export full trace** exports a uniformly sampled response for fitting. Columns include signed VC, VR, VL, SI units and a model version. For a fixed parameter set, the time step of that trace is the full response duration divided by 1000.

The simulation's theoretical parameter panel can be hidden using **Hide theoretical parameters**. Capture rows record actual t, R, L, C, initial settings, Q, I, U and H. The energy and charge curves are normalized for comparison; use the table for dimensional values. Time sampling is deterministic and cursor-limited, so quantify resolution instead of inventing statistical error.

## Uncertainty analysis
For slider or full-trace peaks use half a sample interval as a resolution bound, not a random standard deviation. Bound the period from the two endpoint times; propagate to L with |ΔL/L| ≈ 2|ΔT/T| + |ΔC/C| for worst-case bounds. Use the observed charge rounding or sampling sensitivity to bound δ=ln(Qn/Qn+1), then propagate to R=2Lδ/Td. Re-sample with exact times to assess peak-location bias. No random instrument noise is included.

## Questions
1. Why does the oscillation frequency depend on R even though the undamped natural frequency does not?
2. At what point is magnetic energy maximal in an ideal LC cycle?
3. Why does stored energy decay faster than the charge envelope?
4. Why does an ideal LC oscillator have no steady-state decay?
5. Why does R=0 in RL not imply oscillation?
6. Explain the difference between an analytic model, a numerical integrator and a real circuit with parasitic resistance.

## Submission
Submit prelab derivations, LC measurements and energy calculations, the RLC damping fit, critical damping study, RC/RL comparison, uncertainty analysis and conclusions.

**Instructor note:** The new standalone demo is on the curriculum branch and is not published to GitHub Pages until deployed. All quantitative readings should be validated before graded classroom use.
