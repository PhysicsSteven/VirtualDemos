# Normal Modes of a Chain and a Grid
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§15.1 and 16.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/springs.html?rig=hzChain)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** this worksheet uses the Sandbox of the Springs and Oscillations demo. Between two walls, on a level track: One block; Two blocks; Side by side; Chain of ten; Empty track. On an air table, in a plane: 3 by 3 grid; 5 by 5 grid (the number of pucks along each side can be set from 2 to 6). The link above opens the Sandbox on Chain of ten.

**Using the demo.**

- Chain of ten: ten 100 g blocks and eleven 20 N/m springs between two walls, the same as ten beads on a stretched string. The blocks slide on the track without friction.
- The lower pane shows Normal modes: for each mode its frequency, its shape (how far and which way each block moves) and how much of the motion is in it now. Clicking a mode, or pressing its number (0 for mode 10) with the pane in focus, starts the chain in that mode alone.
- 3 by 3 grid: nine 100 g pucks on an air table, each tied to its neighbors and to the frame by 20 N/m springs stretched to 10 cm. The motion along x and the motion along y go on separately, so the pane shows nine modes along x and nine along y, each labeled $$(p, q)$$. Clicking a square starts that mode alone. A puck can also be dragged and let go, which starts a mix.
- Press Stopwatch (or W on the drawing) as a block or puck passes a mark you choose, count $$N$$ full oscillations, and press it again as it passes the same mark going the same way. The stopwatch runs on simulation time and reads to 0.01 s. Starting a mode sets it back to 0.00 s. The slower playback rates make fast modes easier to time.
- Record reading stores the rig, the mode you started (or "a mix" after you pulled a block yourself), your $$N$$ and the stopwatch time $$t$$, as displayed; $$T = t/N$$. Export to worksheet sends the readings here.
- Blind: hide the mode frequencies hides each mode's frequency in the lower pane, in the readouts and in what is read aloud. The shapes, the shares of the motion and the stopwatch stay.
- The motion is the exact solution of the linear equations of motion. On the air table the springs are taken as stretched so far past their natural length that it counts as zero; then each pulls with exactly $$k$$ times the vector from one end to the other, so the x and y motions do not mix for any swing.

</details>

## Goal

Measure the frequencies of the normal modes of a chain of ten blocks and of a square grid of pucks, compare them with the exact formulas, and see how a chain of beads differs from a smooth string.

## Background

**Normal modes (§16.6).** A system of coupled oscillators has special motions, its normal modes, in which every part moves at one frequency, all in step: each part reaches its largest displacement at the same moment. A system with $$N$$ masses moving along one line has $$N$$ normal modes. Any motion is a sum of normal modes, each going on at its own frequency, so a general motion does not repeat simply.

**A chain of beads.** $$N$$ equal blocks of mass $$m$$ joined by $$N + 1$$ equal springs of constant $$k$$ between two fixed walls. Block $$j$$ ($$j = 1, \dots, N$$) moves in mode $$n$$ ($$n = 1, \dots, N$$) as

$$x_j = A\sin\frac{jn\pi}{N+1}\cos(\omega_n t),\qquad \omega_n = 2\sqrt{\frac{k}{m}}\,\sin\frac{n\pi}{2(N+1)}.$$

So with $$f_n = \omega_n/2\pi$$, for the chain of ten ($$N = 10$$),

$$f_n = \frac{1}{\pi}\sqrt{\frac{k}{m}}\,\sin\frac{n\pi}{22}.$$

The shape is a sine wave sampled at the blocks, with $$n$$ half wavelengths between the walls: the wavelength is $$22/n$$ block spacings. For small $$n$$ the sine is close to its angle, $$f_n \approx n f_1$$, as on a smooth string (§16.6). For large $$n$$ the frequencies crowd together below the largest possible frequency $$(1/\pi)\sqrt{k/m}$$, reached when neighboring blocks move exactly opposite. A wave whose speed $$v = \lambda f$$ depends on its wavelength is called *dispersive*.

**A grid of pucks.** $$N \times N$$ equal pucks, each tied to its four neighbors and the pucks at the edge to a square frame. Along each axis the modes are numbered by two whole numbers $$p$$ and $$q$$ from 1 to $$N$$, the number of half waves across and up the grid, and

$$f_{pq} = \frac{1}{\pi}\sqrt{\frac{k}{m}}\,\sqrt{s_p^2 + s_q^2},\qquad s_p = \sin\frac{p\pi}{2(N+1)}.$$

For the 3 by 3 grid, $$s_p = \sin(p\pi/8)$$. Two different modes with the same frequency are called *degenerate*.

## Before the lab

1. For the chain of ten with $$k = 20.0$$ N/m and $$m = 0.100$$ kg, find $$f_1$$ and the largest possible frequency $$(1/\pi)\sqrt{k/m}$$.
2. For the 3 by 3 grid, show that modes $$(1, 3)$$, $$(3, 1)$$ and $$(2, 2)$$ have the same frequency, and find it for $$k = 20.0$$ N/m and $$m = 0.100$$ kg.
3. On a smooth string, mode 10 vibrates at 10 times the frequency of mode 1. What do you expect for the chain of ten blocks: is $$f_{10}$$ 10 times $$f_1$$, more than that or less?

## Safety

No physical hazards in the simulation. In a real air table or air track, keep fingers clear of moving carts and do not block the air supply holes.

## Procedure

**Using the virtual apparatus.** To time a mode: click it in the Normal modes pane (this starts it alone and sets the stopwatch to 0.00 s, so start the mode first), press **Stopwatch** (or W on the drawing) as your block or puck passes a mark you choose, count $$N$$ full oscillations, and press it again as it passes the same mark going the same way. Type your count in **Oscillations counted, N** (under Readings) and press **Record reading**. A puck at the center does not move in modes with an even $$p$$ or $$q$$, and in each chain mode some blocks swing far less than others: pick one that swings well. The **Playback rate** slider (under Time and plots) slows the fast modes down; the stopwatch runs on simulation time. Turn Blind off at the end to check your frequencies.

**Chain of ten.** Open the Sandbox on Chain of ten with the springs at 20 N/m and the blocks at 100 g, as it opens. Check **Blind: hide the mode frequencies** (under Readings). Start mode 1 alone, choose one block that swings well, and time at least 10 full oscillations of it; capture the reading. Repeat for modes 2, 3, 5, 7 and 10 only. From mode 5 on each oscillation lasts under 0.35 s, so time 20 oscillations and slow the playback down. Press **Export to worksheet**, then **Clear**.

**Grid of pucks.** Press **3 by 3 grid** (under Sandbox); Blind stays on. Start each of the modes $$(1, 1)$$, $$(1, 2)$$, $$(2, 1)$$, $$(1, 3)$$, $$(3, 1)$$, $$(2, 2)$$ and $$(3, 3)$$ along x alone (the squares labeled along x in the lower pane), and time at least 10 full oscillations of one puck that moves well in that mode; capture each. Then start $$(1, 2)$$ along y and time it the same way. Press **Export to worksheet**: the grid readings go to the Grid of pucks table.

## Data

**Chain of ten.** $$f = 1/T$$. Work out the last three columns yourself.

| Reading | Rig | Mode $$n$$ | Oscillations $$N$$ | Time $$t$$ (s) | Period $$T$$ (s) | Measured $$f$$ (Hz) | $$\sin(n\pi/22)$$ | Predicted $$f_n$$ (Hz) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

**Grid of pucks.** $$s_p = \sin(p\pi/8)$$ and $$s_q = \sin(q\pi/8)$$ for the 3 by 3 grid.

| Reading | Grid | Mode $$(p, q)$$ | Along | Oscillations $$N$$ | Time $$t$$ (s) | Period $$T$$ (s) | Measured $$f$$ (Hz) | $$\sqrt{s_p^2 + s_q^2}$$ | Predicted $$f_{pq}$$ (Hz) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

## Analysis

1. Graph the measured $$f$$ against $$\sin(n\pi/22)$$ for the chain, with a free intercept. Is it a straight line through the origin? From the slope, which should be $$(1/\pi)\sqrt{k/m}$$, find $$k/m$$ and compare it with the settings.
2. In your table, compare each measured $$f$$ with $$n f_1$$, using your measured $$f_1$$. At which $$n$$ do your points fall 10% below $$n f_1$$?
3. For each mode find the wave speed in block spacings per second, $$v_n = (22/n) f_n$$. How does it change with $$n$$?
4. Compare your $$f_{10}$$ with the largest possible frequency $$(1/\pi)\sqrt{k/m}$$. Describe how neighboring blocks move in mode 10.
5. Graph the measured $$f$$ against $$\sqrt{s_p^2 + s_q^2}$$ for the grid. Compare the slope with the chain's slope in Analysis 1 and explain why they should agree.
6. Which of your grid modes have the same frequency within your uncertainty? Separate those that share it because the grid looks the same turned through 90° from those that share it for another reason. Compare $$(1, 2)$$ along x with $$(1, 2)$$ along y.

## Uncertainty

Each press of the stopwatch can be early or late by your reaction time, about 0.1 to 0.2 s at real time and less in slow motion, so the time of $$N$$ oscillations has an uncertainty of about $$\sqrt2$$ times that if the two errors are independent, and $$T$$ and $$f$$ have a fractional uncertainty smaller by the factor $$N$$. The display truncates $$t$$ to 0.01 s. State the uncertainty of each measured $$f$$ and use it in judging Analysis 1 and 6. The model has no friction and ideal springs, so the scatter comes from your timing.

## Questions

1. Two degenerate modes started together make a pattern that moves across the grid or turns. Is that pattern itself a normal mode? Explain.
2. From your chain of ten readings, give $$f_{10}$$ and $$10 f_1$$. Which answer to Before the lab 3 do they bear out? Explain from the shapes of the modes why the high modes do not follow $$n f_1$$, and why that makes the chain dispersive while an ideal smooth string is not.

## What to hand in

Prelab answers, both tables with your uncertainties, the graphs of Analysis 1 and 5 with their fits, your $$k/m$$ values, the list of degenerate modes, and answers to the questions. Identify simulated data.
