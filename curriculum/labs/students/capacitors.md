# Capacitors and Dielectrics: Charge, Energy and Work
Student laboratory · 100 minutes · Physics II

[Open simulation](https://physicssteven.github.io/VirtualDemos/demos/capacitors.html)

## Objectives and prerequisites
Infer capacitance from geometry; distinguish fixed-charge and fixed-voltage processes; test a complete energy ledger; measure dielectric effects; compare series and parallel networks. Prerequisites: electric potential, parallel-plate fields, work, and basic graphing.

## Model and prelab
Ideal parallel plates obey C=ε₀A/d, Q=CV, U=CV²/2. A partially inserted slab divides the area into parallel regions. If the slab thickness is t, relative permittivity κ and inserted area fraction f, derive

C=ε₀A[(1−f)/d+f/(d−t+t/κ)].

The inserted region itself contains air and dielectric in series. Explain why changing C has different consequences at fixed Q and fixed V. Derive the energy balance ΔU=W_hand+W_battery−H, taking work **on** the capacitor as positive. The ideal quantitative model neglects fringing; the drawn fringe-field grid is a separate qualitative aid, not a numerical capacitance measurement.

## Controls and recording
Select the named preset and press **Pause** immediately if the automatic sweep is running. **Mark start** establishes the energy-ledger reference. Use **Separation d**, **Plate area A**, **Battery voltage Vb**, **Connected**, **Isolated**, and dielectric controls. Record actual displayed settings rather than assuming defaults survived animation. Keyboard arrows adjust sliders; Home/End reach their limits.

This demo currently has no measurement CSV notebook. Record tables manually and enter them in a spreadsheet. Preserve units and screenshot settings. Quantities already shown as theoretical readouts are model predictions; calculate your own predictions before reading them. Instrument-style theory hiding and export remain future work.

## A. Fixed voltage (25 minutes)
1. Select **Pull apart, connected**, pause, set A=144 cm², d=1.00 cm and Vb=100 V, then **Mark start**.
2. Record C, Q, V, E and U at d=1.00, 1.50, 2.00, 2.50 and 3.00 cm. Record hand and battery work relative to the initial state; do not mark start again between points.
3. Plot C versus 1/d in SI units. Use the slope to infer ε₀ and compare with the model's constant. Explain why this is a consistency test of an ideal simulation, not an experimental determination of a new physical constant.
4. Verify the energy ledger at each point. Explain how your hand can do positive work while stored energy decreases.

| d (m) | C (F) | Q (C) | V (V) | E (V/m) | U (J) | W_hand (J) | W_battery (J) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## B. Fixed charge and reconnection (25 minutes)
1. Select **Pull apart, isolated**, pause and confirm A=144 cm², d=1.00 cm, initially charged to 100 V. Mark start.
2. Repeat the five separations, recording the same quantities. Plot V versus d and U versus d. Which quantities remain constant?
3. At d=2.00 cm, reconnect using **Connected** with the battery at 100 V. Record the charge change and heat. Compare the ledger before/after reconnection. Explain why an instantaneous ideal connection can release finite heat even though no resistance value is specified.
4. Compute the attractive plate force from Q²/(2ε₀A) and compare force×displacement with hand work while isolated.

## C. Dielectric insertion (25 minutes)
1. Select **Slide in a dielectric**, pause, and confirm Pyrex κ=5.6, d=t=1.50 cm, A=144 cm², initial V=100 V and **Isolated**. Set insertion to 0%, then mark start.
2. Record f, C, V, Q, U and hand work for f=0, 0.25, 0.50, 0.75 and 1.00. Fit C versus f and infer κ from the slope/intercept ratio.
3. Reset the preset, pause, return insertion to 0%, select **Connected**, and mark start. Repeat. Explain the direction of the dielectric force in both modes.
4. At full insertion, increase the gap to 2.00 cm. The slab thickness remains fixed. Compare the series air/dielectric formula with the incorrect formula κε₀A/d.

## D. Networks (15 minutes)
Select **Series and parallel** with three capacitors, C1=10 pF, C2=22 pF, C3=47 pF and V=100 V. Record equivalent capacitance and each capacitor's Q, V and U for **Series**, **Parallel**, and **Mixed**. Mixed means C1 in series with C2 parallel to C3. Test charge/voltage constraints and sum component energies.

## Uncertainty and questions (10 minutes)
Use half the last displayed digit as a rounding bound; the slider step is a setting resolution, not random noise. Propagate bounds through fitted slopes and energy differences. Do not treat an exact built-in ledger residual as independent validation: calculate force work and component field energies separately.

1. Why does U increase on separation only in the isolated case?
2. Why is the slab pulled inward even when fixed-V stored energy rises?
3. Why is the smallest series capacitor at the largest voltage?
4. What approximations fail when d is comparable with plate size or the dielectric conducts?

Submission: raw tables, settings, graphs, fits, work/heat calculations, uncertainty and answers. Rubric: prelab 15; fixed-V experiment 20; fixed-Q/reconnection 25; dielectric study 25; networks and interpretation 15.
