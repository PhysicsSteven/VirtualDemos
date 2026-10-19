# Transient Circuits — Relaxation, Oscillation and Critical Damping
Student laboratory ·120 minutes ·calculus-based Physics II

[Open Circuits: In time](https://physicssteven.github.io/VirtualDemos/demos/circuits.html#transients)

## Objectives and prelab
Infer circuit parameters from time traces; compare RC/RL relaxation with LC/RLC energy transfer; determine damping from peaks and distinguish a physical limit from a sampling limit. Derive LQ″+RQ′+Q/C=0 for a free series loop, α=R/(2L), ω0=1/√LC, Rcrit=2√(L/C), and ωd=√(ω0²−α²). For Q(0)=CV0,I_loop(0)=0 derive Q=Q0exp(−αt)[cosωdt+(α/ωd)sinωdt] and d[Q²/(2C)+LI_loop²/2]/dt=−RI_loop². Establish the RC and RL decay solutions and their continuity conditions.

## Apparatus and signs
Use **In time**, **LC oscillation**, **RLC damping**, **RC charging**, **Flip mid way** and **RL rise and decay** on unified Circuits. Select a part and enter its value in **Selected**. Use **Scope V/I**, **Pause**, **Reset**, **Whole run**, **Fit last change**, **Keep trace** and **Export scope CSV**. CSV exports the scope's selected channels and visible time interval; settings, heat and energy must be logged separately. There is no exact-time cursor or complete Blind control here; predict before consulting **Natural response**.

Capacitor current is defined into its marked positive-voltage terminal, I_C=C dV_C/dt. In the free loop the inductor's drawn current direction can be opposite I_C. Identify the loop on the drawing, use KCL to map signs, and square dimensional currents for energy. Do not assume every displayed component current equals dQ/dt with the same sign.

## A. LC energy transfer (25 minutes)
1. Select **LC oscillation**; record default L1=100 mH,C1=10 µF and precharge source10 V. The preset starts with a charged capacitor connected to the inductor. Pause, Reset, then predict period and initial stored energy before running.
2. Add C1 voltage/current and L1 current as needed. Run more than one period, pause, use Whole run and export. Identify positive voltage maxima and infer T and L from known C. Interpolate/export actual sample times near0,T/4,T/2,3T/4,T.
3. Calculate Q=CV_C, U_C=CV_C²/2 and U_L=LI_L²/2. Test U_C+U_L against measured initial stored energy and explain current-sign conventions at quarter cycles.

## B. RLC damping and decrement (30 minutes)
1. Select **RLC damping**. Keep L1=.100 H,C1=10 µF and precharge10 V. Change R2 to20 Ω, then Reset. Run enough time for at least three same-sign voltage maxima to be resolvable. Export before changing values.
2. Repeat at R2=50 and100 Ω. Estimate damped period and δ=ln(|V_n|/|V_n+1|) from same-sign peaks; infer α=δ/Td and R_fit=2Lα. State when late peaks are below sampling/readout resolution rather than inventing them.
3. Compare measured ωd with prediction. Record U_C,U_L,H and U0 from the energy panel and test U0−U_C−U_L−H for each free run. If source work, sparks/contact loss or editing work is nonzero, include the displayed term and explain why the simplified residual no longer applies.

| R2 (Ω) | Peak times (s) | Peak voltages (V) | Td (s) | δ | R_fit (Ω) | Resolution |
|---|---|---|---|---|---|---|
| | | | | | | |

## C. Critical and overdamped response (25 minutes)
Predict Rcrit before opening Natural response. Use the selected resistor's numeric value to enter0.95,0.99,1,1.01 and1.05 times that value, Reset after each edit, and retain separate exports. Compare full curves with under/critical/overdamped predictions. At critical damping Q=Q0(1+αt)exp(−αt). The absence of a visible crossing alone does not prove critical damping: a near-critical underdamped tail can reverse too late and too weakly to observe. Compare to R2=1000 Ω and explain which return is fastest without overshoot for these initial conditions.

The old [standalone transient page](https://physicssteven.github.io/VirtualDemos/demos/transient-circuits.html) is an optional precision comparison, because it has an exact sample-time entry and fixed full-trace export not present on unified Circuits. If used, match L,C,R,V0 manually and label its data separately. The primary lab uses Circuits; do not transfer its old defaults or control labels automatically.

## D. RC and RL (20 minutes)
Use **Flip mid way** to fit capacitor discharge after the switch. Use **RL rise and decay** to fit current decay after its automatic battery-to-short switch. Record component values, switch time and actual state at switching; fit elapsed time relative to that event. Compare τ_RC=RC and τ_RL=L/R, and the stored-energy expressions. Explain why a zero-resistance ideal RL loop maintains current rather than oscillating.

## Uncertainty and submission
Inspect actual exported timestamps; scope playback is not physical sampling resolution. Use peak-time brackets and repeat fitting after changing the included time range. For L inferred from period, derive relative sensitivity2δT/T−δC/C; for R=2Lδ/Td include peak-amplitude and period uncertainty. Distinguish independent standard uncertainties from worst-case bounds and shared component values. Deterministic simulation does not include experimental random noise unless explicitly modeled.

Submit prelab, raw CSV/settings/sign map, LC energy table, damping fits/residuals, critical curves, RC/RL comparison and uncertainty. State ideal lumped-element assumptions, finite sampling, and any contact/spark regularization invoked by topology. Do not use a displayed theoretical parameter as an independently measured result.
