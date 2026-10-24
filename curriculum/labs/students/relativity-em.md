# Magnetism from Relativity
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§5.4 and 5.5 (with Vol. 2, §§11.2 and 12.2). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/relativity-em.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Wire, lab frame; Fast charges; Real copper wire; Magnet and loop; Moving point charge; Field transformation. This worksheet uses the Wire view.

**Using the demo.**

- The wire is two long, thin lines of charge: positive ions with density $$+\lambda_0 = 1\ \mu\text{C/m}$$ at rest in the lab, and electrons with density $$-\lambda_0$$ drifting along the wire at $$v = \beta_v c$$, so the wire is neutral in the lab and carries a current. A test charge (an electron or a positron) starts a distance $$r$$ from the wire, moving along it at $$u = \beta_u c$$.
- With Speeds near c, $$\beta_v$$ and $$\beta_u$$ run from −0.9 to 0.9, and "u = v" makes the charge move with the electrons. Real copper wire shows the same wire at a true drift speed instead.
- The two cards give, in the lab frame and in the charge's frame, each line's density, the net line charge, the fields $$E$$ and $$B$$ at the charge and the force on it, all at the moment the charge is let go. Lab frame and Charge's frame switch the picture between the two observers.
- Record reading stores the speeds, $$r$$, the force in each frame and the net line charge in the charge's frame. Export to worksheet sends the readings to the Data table below; Clear (under Readings) starts a new series, which goes into a new copy of the table. A force is positive when it pushes the charge away from the wire.
- Blind (under Do the frames agree?) hides the ratio of the two forces, $$\gamma_u$$ and the note on the densities.

**What the demo models.** Exact special relativity at any speed: each line of charge has its own rest frame density, and in any other frame its density is that times its $$\gamma$$ in that frame. The fields come from the line charge and the current in each frame. The drawing exaggerates the contraction (a slider sets how much); the numbers do not.

</details>

## Goal

Show that the magnetic force on a charge moving beside a current is, in the charge's own frame, an electric force from a wire that length contraction has charged, and test the relation between the forces in the two frames.

## Background

A moving line of charge is shorter, so denser, than in its own rest frame: a line with rest density $$\lambda_\mathrm{rest}$$ moving at speed $$w$$ has density $$\gamma_w \lambda_\mathrm{rest}$$ (length contraction, §5.4). In the lab the electrons, moving at $$v$$, have density $$\lambda_0$$, so in their own frame their density is $$\lambda_0/\gamma_v$$.

**Lab frame.** The wire is neutral, so there is no electric field. Its current $$I = \lambda_0 v$$ makes $$B = \mu_0 I/2\pi r$$, and the charge feels the magnetic force

$$F = quB = \frac{q\lambda_0}{2\pi\varepsilon_0 r}\,\beta_u\beta_v ,$$

using $$\mu_0\varepsilon_0 = 1/c^2$$.

**The charge's frame.** Here the charge is at rest, so a magnetic force cannot act on it. The ions move at $$-u$$ and are denser, $$\gamma_u\lambda_0$$. The electrons move at the relativistic difference of $$v$$ and $$u$$ (§5.5), and the two densities no longer cancel. The net line charge works out to

$$\lambda' = \lambda_0\,\gamma_u\beta_u\beta_v ,$$

which gives an electric field $$E' = \lambda'/2\pi\varepsilon_0 r$$ and an electric force $$F' = qE'$$. Comparing with $$F$$,

$$F' = \gamma_u F .$$

The sideways momentum the charge receives is the same in both frames, but its clock runs slow in the lab, so the lab sees that momentum delivered over a time $$\gamma_u$$ times longer and measures a smaller force.

## Before the lab

1. For $$\beta = 0.6$$, find $$\gamma$$. In the electrons' own frame, what is their line density if it is $$\lambda_0 = 1.000\ \mu\text{C/m}$$ in the lab?
2. A charge moves with the electrons, $$u = v = 0.6c$$. In its frame, find the density of the ions, the density of the electrons and the net line charge. Check your answer against $$\lambda_0\gamma_u\beta_u\beta_v$$.
3. Find the force on an electron 2.0 cm from the wire in the lab, for $$u = v = 0.6c$$. Is it toward the wire or away from it?
4. Would the force be toward or away from the wire if the electron moved at $$u = -0.6c$$, against the electrons in the wire? Explain from the charge's frame.

## Safety

None.

## Procedure

Choose the Wire, lab frame setup with Speeds near c, an electron as the test charge and $$r = 2.0$$ cm, and turn Blind on.

**Moving with the electrons.** With $$u = v$$, record a reading at $$\beta_v$$ = 0.1, 0.3, 0.5, 0.6, 0.7, 0.8 and 0.9. Switch to the charge's frame at least once and watch the two lines of charge. Send the readings to the worksheet.

**Other speeds.** Clear the readings and let the charge's speed be set on its own. Keep $$\beta_v = 0.5$$ and record at $$\beta_u$$ = −0.8, −0.5, −0.2, 0.2, 0.5 and 0.8. Send these to a new copy of the table.

**Fields in both frames.** At $$\beta_u = \beta_v = 0.5$$, write down $$E$$ and $$B$$ at the charge in each frame below Analysis 4.

**A real wire.** Switch to the real copper wire at $$r = 2.0$$ cm and a current of 10 A. Write down the drift speed, the net line charge the electron sees, how much wire carries one extra elementary charge, and the force per meter below Analysis 5.

## Data

| Reading | Setup | Electron drift βᵥ | Charge speed βᵤ | F in the lab (N) | F′ in the charge's frame (N) | Net λ′ in the charge's frame (µC/m) | γᵤ | γᵤβᵤβᵥ | F′/F |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

## Analysis

1. For the first run, find $$\gamma_u$$ and $$\gamma_u\beta_u\beta_v$$, graph $$\lambda'$$ against $$\gamma_u\beta_u\beta_v$$ and fit a straight line. Compare the slope with $$\lambda_0$$ and the intercept with zero.
2. Find $$F'/F$$ for each reading of the first run and graph it against $$\gamma_u$$. Give the slope and the intercept and compare with $$F' = \gamma_u F$$.
3. Do the same two graphs for the second run. For which speeds is the electron pushed away from the wire, and why, in each frame?
4. From your fields at $$\beta_u = \beta_v = 0.5$$, find $$E^2 - c^2B^2$$ in each frame. What do you notice? Is there a magnetic field in the charge's frame, and why?
5. For the copper wire at 10 A, compare the force per meter with $$\mu_0 I^2/2\pi r$$ for two wires carrying the same current. How can a net charge this small give a force you could measure?

## Uncertainty

The demo gives each force and density to four significant figures. How large an uncertainty does that rounding put on $$F'/F$$ and on $$\gamma_u\beta_u\beta_v$$? Compare it with the residuals of your fits and with the uncertainties of the slopes.

## Questions

1. The wire is neutral in the lab and charged in the charge's frame. Is electric charge still conserved? Where is the opposite charge in a complete circuit?
2. A charge at rest beside a current carrying wire feels no force. Explain this in the lab frame and in a frame moving with the electrons.
3. With no current ($$\beta_v = 0$$) a charge moving along the wire feels no force. Show this from the densities in the charge's frame.
4. Why is the force in the charge's frame larger than in the lab, and not smaller?
5. Drift speeds in copper are a fraction of a millimeter per second. Why can a relativistic effect of order $$(v/c)^2$$ still give the everyday force between two currents?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the slopes and intercepts with uncertainties, the fields and invariant in both frames, the copper wire numbers, and answers to the questions. Identify simulated data.
