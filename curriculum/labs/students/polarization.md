# Polarization: Student Lab Starter

**Simulation:** [Open](../../demos/polarization.html) (from curriculum/labs/students use repository link instead: https://physicssteven.github.io/VirtualDemos/demos/polarization.html)

**Research question:** Test Malus's law and the effect of crossed polarizers.

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Malus's law; Crossed polarizers; Three polarizer surprise; Quarter wave plate makes circular light; Half wave plate rotates polarization; Brewster's angle and glare.

**Using the demo.**

- The angle is the transmission axis for a polarizer and the fast axis for a wave plate. Drag a disk on the drawing to turn it; click a disk or its number to plot it.
- Each step passes cos²(90°/N). The loss per step falls as 1/N², faster than the number of steps grows, so the total climbs toward 1: cos²ᴺ(π/2N) ≈ e^(−π²/4N), the dashed curve. N = 1 is crossed polarizers; N = 2 is the three polarizer surprise.

**What the demo models.**

- r<sub>s</sub> = (n₁cos θ<sub>i</sub> − n₂cos θ<sub>t</sub>)/(n₁cos θ<sub>i</sub> + n₂cos θ<sub>t</sub>) r<sub>p</sub> = (n₂cos θ<sub>i</sub> − n₁cos θ<sub>t</sub>)/(n₂cos θ<sub>i</sub> + n₁cos θ<sub>t</sub>) R = \|r\|², T = 1 − R, tan θ<sub>B</sub> = n₂/n₁

</details>

## Model

$$I=I_0\cos^2\theta$$

## Procedure (50–75 minutes)
1. Begin with linearly polarized light of fixed intensity and two ideal polarizers. Record the reference transmitted intensity when their axes are aligned.
2. Measure transmitted intensity at relative axis angles of 0°, 15°, 30°, 45°, 60°, 75° and 90°, without changing the incident light.
3. Calculate $$\cos^2\theta$$ for each angle and plot transmitted intensity divided by the aligned reference intensity against $$\cos^2\theta$$.
4. Check the aligned and crossed limits and compare the data with Malus's law. Keep the light source and all other optical elements unchanged.
5. As a separate comparison, begin with unpolarized light and examine the intensity after the first ideal polarizer. Distinguish this initial factor of one half from the transmission law for the relative angle.
6. If assigned, add a third polarizer between two crossed polarizers, vary its orientation and explain why the transmitted intensity can increase.
7. Record instrument precision and discuss departures from the ideal polarizer model; do not invent repeated random trials for deterministic model readings.

## Raw data
| Trial | Controlled setting (units) | Measured response (units) | Uncertainty / notes |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

## Analysis questions
1. Derive or justify the model equation.
2. What does the graph slope represent?
3. What limiting case can you test?
4. How would measurement uncertainty propagate to your result?
5. What assumptions would fail in a real experiment?

**Caution:** Unpolarized incident light introduces a factor of 1/2 through the first ideal polarizer.

**Submit:** Data table, graph, calculations, units and a short conclusion.
