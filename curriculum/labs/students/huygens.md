# Huygens's Principle
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §1.6 (and §1.1 to §1.4). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/huygens.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Light in matter: a race; Huygens's construction; Reflection; Refraction into glass; From glass into air; Sound through a doorway.

**Using the demo.** Four views. Race: light pulses cross lanes of the materials of OpenStax Table 1.1, all starting together; Length of each lane sets the distance. Construction: a straight or curved wavefront sends out wavelets, and the new front is drawn tangent to them; Wavelets along the front sets how many. Boundary: a plane wave meets the boundary between an upper and a lower medium (or a mirror) at the angle of incidence $$\theta_1$$; wavelets grow from each point of the boundary as the front reaches it, and the new fronts are drawn tangent to them. Opening: a plane wave meets a wall with an opening a set number of wavelengths wide, and the wavelets from the opening add up beyond it. Play, Pause, Step and Reset control time. Blind keeps the wavelets but hides the new fronts, the angle of refraction, the race times and the first dark direction.

**What the demo models.** Light moves at $$v = c/n$$, with $$n$$ from OpenStax Table 1.1 at 589 nm. Each wavelet grows at the speed of the medium it is in, and the new front is their common tangent, which gives Snell's law, $$\sin\theta_2/v_2 = \sin\theta_1/v_1$$, and the law of reflection. The opening is a row of point sources whose waves are added (the Huygens and Fresnel sum); far away the first dark direction is at $$\sin\theta = \lambda/a$$. Simulated data.

</details>

## Goal

Use Huygens's principle to explain how light slows down in matter, and to derive the laws of reflection and refraction, total internal reflection and the spreading of waves through an opening; then test each with measurements.

## Background

Light moves at $$c = 2.998\times10^8$$ m/s in vacuum and at $$v = c/n$$ in a material of index $$n$$, so a distance $$L$$ takes $$t = nL/c$$. Huygens's principle says every point on a wavefront is a source of wavelets that spread at the wave's speed; after a time $$t$$ the new wavefront is the surface tangent to all the wavelets.

When a plane front meets a boundary at the angle $$\theta_1$$, it reaches different points of the boundary at different times. Wavelets grow into the lower medium at $$v_2$$; their tangent is the refracted front, at an angle $$\theta_2$$ with

$$\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2},\qquad\text{so}\qquad n_1\sin\theta_1 = n_2\sin\theta_2.$$

Wavelets growing back into the upper medium at $$v_1$$ give the reflected front, at an angle equal to $$\theta_1$$. If light speeds up ($$n_2 < n_1$$), no tangent exists above the critical angle $$\theta_c$$, with $$\sin\theta_c = n_2/n_1$$, and all the light is reflected. Behind an opening of width $$a$$, the wavelets from the opening cancel in the direction where $$\sin\theta = \lambda/a$$, so a wave spreads strongly when the opening is only a few wavelengths wide.

## Before the lab

1. How long does light take to cross 1.00 m of vacuum? Of diamond ($$n = 2.419$$)? How far behind the vacuum pulse is the diamond pulse?
2. Light in air meets crown glass ($$n = 1.52$$) at 40°. Find the angle of refraction.
3. Find the critical angle for light going from crown glass into air.
4. Sound at 1000 Hz ($$\lambda = 0.343$$ m, with sound at 343.2 m/s) passes through a doorway 1.0 m wide. In what direction is the first dark (quiet) direction? Why does light through the same door not spread noticeably?

## Safety

There are no hazards in the simulation. In a real optics lab, never look into a laser beam or its reflection from a shiny surface.

## Procedure

Before each part, predict what you will see. Then measure.

**Part 1: the race.** Choose the setup Light in matter: a race. Set the Length of each lane slider to 1.0 m and press Record reading: one press records a row for every lane, with the lane's material in the Upper medium or lane column and its index in $$n_1$$. Press Export to worksheet, then Clear.

**Part 2: refraction into glass.** Choose the setup Refraction into glass (Upper medium Air, Lower medium Crown glass). For each angle of incidence of 0, 20, 40, 60 and 80°, set the Angle of incidence θ₁ slider and press Record reading; the angle of refraction goes in the $$\theta_2$$ column. Then set θ₁ to 40°, pick Water and then Diamond in the Lower medium menu, and record each. Export to worksheet, then Clear.

**Part 3: from glass into air.** Choose the setup From glass into air (Upper medium Crown glass, Lower medium Air, Show the reflected wave on). Set θ₁ to 10, 30, 41, 42 and 50° and press Record reading at each; where there is no refracted wave the $$\theta_2$$ column reads total internal reflection. Watch the reflected wave too. Export to worksheet, then Clear.

**Part 4: reflection.** Choose the setup Reflection (Lower medium Mirror). Set θ₁ to 40° and press Record reading; the angle of reflection goes in the $$\theta_2$$ column. Export to worksheet, then Clear.

**Part 5: the opening.** Choose the setup Sound through a doorway. Set the Width of the opening, in wavelengths slider to 0.8, 1.5, 3, 5 and 12 and press Record reading at each; the angle goes in the First dark direction column. Export to worksheet.

**Using the virtual apparatus.** The angle sliders move in 1° steps and the opening slider in 0.1 steps: drag close, then use the arrow keys. In the race, one reading records every lane. Record with Blind off, or turn it on to predict first: it leaves the hidden values blank. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Trial | View | Upper medium or lane | $$n_1$$ | Lower medium | $$n_2$$ | Lane length (m) | Time (ns) | $$\theta_1$$ (°) | $$\theta_2$$ (°) | $$\sin\theta_1/v_1$$ (ns/m) | $$\sin\theta_2/v_2$$ (ns/m) | Opening (wavelengths) | First dark direction (°) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |

## Analysis

1. For Part 1, graph Time (ns) against $$n_1$$ for the seven lanes. From the slope, find $$c$$ (the lanes are 1.0 m long). How far behind the vacuum pulse is the air pulse after 1.0 m, and why is it so hard to see?
2. For Part 2, graph $$\sin\theta_2$$ (vertical) against $$\sin\theta_1$$ (horizontal) for the five crown glass rows. Is it a straight line through the origin? From the slope, find the index of crown glass. Do the $$\sin\theta_1/v_1$$ and $$\sin\theta_2/v_2$$ columns agree in the 20°, 40° and 60° rows? Which lower medium bends the light most, and why?
3. For Part 3, from the $$\theta_2$$ column, find the angle above which there is no refracted wave and compare it with $$\arcsin(n_2/n_1)$$. Use the wavelets to explain why no refracted front can form above it.
4. For Part 4, compare the angle of reflection with the angle of incidence, and explain the law of reflection from the wavelets.
5. For Part 5, graph $$\sin\theta$$ of the first dark direction (vertical) against 1/(Opening in wavelengths), which is $$\lambda/a$$ (horizontal). What is the slope? Why is there no dark direction for the 0.8 wavelength opening?

## Uncertainty

The model is exact, and the angles are given to 0.01°, so the scatter is negligible; the angle of incidence is set in whole degrees. The indices are those of Table 1.1 at 589 nm; real indices change with the wavelength (dispersion), with temperature and, for gases, with pressure. The opening model is two dimensional (a slit, not a round hole) and the first dark direction is the far field result.

## Questions

1. A beam of light crosses a thick glass plate at an angle and leaves it parallel to its original direction. Why?
2. Optical fibers guide light by total internal reflection. Which must have the higher index, the core or the cladding, and why?

## What to hand in

Prelab answers, a Data table copy for each part, the graphs and fits, your values of $$c$$ and the index of crown glass, the critical angle, and answers to the questions. Identify simulated data.
