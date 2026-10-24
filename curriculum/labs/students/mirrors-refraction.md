# Images in Mirrors and Refracting Surfaces
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §2.1 to §2.3. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/optics-bench.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Where it is in the demo:** the Optics Bench, with the Concave mirror, Refracting surface and Apparent depth setups.

**Using the demo.** An object arrow sends a fan of rays toward a mirror or a refracting surface. Click an element to open its editor: a mirror can be concave, convex or plane with a radius $$R$$; a refracting surface has indices $$n_1$$ (object side) and $$n_2$$ (far side), a radius and an aperture. The object's editor sets its height and the half angle and aim of its fan of rays. Drag the object to change its distance. The Image section gives the object distance, the image distance and magnification found from the traced rays, and the image's kind; it uses the signs below.

**What the demo models.** Every ray obeys the law of reflection or Snell's law exactly, at the true spherical (or flat) surface. The image is where the traced rays from the tip of the arrow cross (a least squares fit), and the magnification compares the image of the tip with the image of the base. So the demo shows the real behavior of spherical surfaces, including the blur of rays far from the axis, and the mirror and surface equations below hold only for rays near the axis. Simulated data.

</details>

## Goal

Find where mirrors and curved glass surfaces form images, test the mirror equation and the equation for a refracting surface, and see where these equations stop working.

## Background

A plane mirror forms a virtual image as far behind the mirror as the object is in front of it, upright and the same size.

A spherical mirror of radius $$R$$ has focal length $$f = R/2$$. For rays close to the axis, an object a distance $$d_o$$ in front of the mirror has its image at $$d_i$$, with

$$\frac{1}{d_o} + \frac{1}{d_i} = \frac{1}{f}, \qquad m = -\frac{d_i}{d_o}.$$

Signs (OpenStax): $$d_o > 0$$ for a real object; $$d_i > 0$$ for a real image, in front of the mirror, and $$d_i < 0$$ for a virtual image behind it; $$f$$ and $$R$$ are positive for a concave mirror and negative for a convex one; $$m < 0$$ means the image is inverted.

A single spherical surface of radius $$R$$ between media of indices $$n_1$$ (the object's side) and $$n_2$$ forms an image with

$$\frac{n_1}{d_o} + \frac{n_2}{d_i} = \frac{n_2 - n_1}{R}, \qquad m = -\frac{n_1 d_i}{n_2 d_o},$$

where $$R > 0$$ when the center of curvature is on the far side, and $$d_i > 0$$ for a real image on the far side. For a flat surface, $$R \to \infty$$ and $$d_i = -(n_2/n_1)\,d_o$$: an object under water looks closer to the surface than it is. This is apparent depth.

All of these equations are paraxial: they assume every ray stays close to the axis and makes a small angle with it.

## Before the lab

1. You stand 2.0 m in front of a plane mirror. Where is your image, and how far is it from you? Why do you need a mirror only half your height to see all of yourself?
2. A concave mirror has $$R = 24$$ cm. Find the image distance and magnification for an object 30 cm from it, and for an object 8.0 cm from it. Describe each image.
3. A convex mirror has $$R = 24$$ cm. Find the image distance and magnification for an object 20 cm from it.
4. A glass rod ($$n = 1.50$$) has an end ground to a convex sphere of radius 4.0 cm. Where is the image of an object in air 16 cm from the end? A coin lies 12 cm under water ($$n = 1.33$$); how deep does it look from above?

## Safety

There are no hazards in the simulation. A concave mirror facing the Sun focuses enough light to burn; never leave one in sunlight.

## Procedure

Before each part, predict what you will see. Then measure.

**Part 1: plane mirror.** In the Concave mirror setup, make the mirror plane. Record with the object about 5, 10 and 20 cm from the mirror.

**Part 2: concave mirror.** Make the mirror concave with $$R = 24$$ cm. Keep the rays close to the axis: make the object 0.5 cm tall with a fan half angle of 4°. Record with the object about 34, 30, 24, 18, 15, 9 and 6 cm from the mirror.

**Part 3: convex mirror.** Make the mirror convex with $$R = 24$$ cm. Record with the object about 30, 20, 10 and 5 cm from it.

**Part 4: rays far from the axis.** Make the mirror concave again ($$R = 24$$ cm), with the object 30 cm away and the same 4° fan. Record with the object 0.5, 1.0, 2.0 and 3.0 cm tall.

**Part 5: refracting surface.** In the Refracting surface setup (air to glass, $$n_2 = 1.50$$, $$R = +4.0$$ cm), make the aperture 1.0 cm and the object 0.5 cm tall. Record with the object about 20, 16, 12, 10 and 6 cm from the surface. Then, with the object 16 cm away, record with the aperture 2.0 and 3.0 cm.

**Part 6: apparent depth.** In the Apparent depth setup (water, $$n_1 = 1.33$$, under air), keep the rays close to the axis: make the object 0.5 cm tall with a fan half angle of 4°. Record with the object 4, 8 and 12 cm from the surface. Then make the object's medium glass ($$n_1 = 1.50$$) and record at 12 cm.

**Using the virtual apparatus.** If the Image section asks for more rays, aim the object's fan at the mirror or surface. Distances are recorded as the demo measures them, so "about 30 cm" is fine; use the recorded value. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table. The last two columns are for you to fill in.

## Data

| Trial | Element | Index n₁ | Index n₂ | Radius R (cm) | Focal length f (cm) | Object distance dₒ (cm) | Image distance dᵢ (cm) | Magnification m | Image | 1/dₒ (1/cm) | 1/dᵢ (1/cm) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |

## Analysis

1. For Part 1, compare $$d_i$$ with $$d_o$$, and $$m$$ with 1. Explain with a ray diagram why the image is virtual.
2. For Part 2, fill in $$1/d_o$$ and $$1/d_i$$ and graph $$1/d_i$$ against $$1/d_o$$. What slope does the mirror equation predict? From the intercept, find $$f$$ and compare with $$R/2$$. Check $$m = -d_i/d_o$$ for each row. Describe the image when the object is beyond $$R$$, at $$R$$, between $$R$$ and $$f$$, and inside $$f$$.
3. For Part 3, make the same graph and find $$f$$. Why is the image of a convex mirror always virtual, upright and smaller? Why are convex mirrors used on cars and in shops?
4. For Part 4, how does the image distance change as the object gets taller? Compare each with the mirror equation's value. Which assumption of the mirror equation fails, and why does a smaller object fix it? (Large telescope mirrors are made parabolic for this reason.)
5. For Part 5, graph $$1/d_i$$ against $$1/d_o$$ for the 1.0 cm aperture rows. Show that the equation for a refracting surface predicts a slope of $$-n_1/n_2$$ and an intercept of $$(n_2 - n_1)/(n_2 R)$$, and compare with your fit. Where must the object be for the image to be at infinity? What did the larger apertures do?
6. For Part 6, compare $$d_i/d_o$$ with $$-n_2/n_1$$ for each row. Why does a swimming pool look shallower than it is?

## Uncertainty

The model has no noise, but the image distance depends on which rays are used: the demo traces exact rays, and rays far from the axis cross at a different place from rays near it. With the object 0.5 cm tall and a narrow fan, the traced image of a mirror is within about 1% of the mirror equation, and that of the refracting surface within a few percent, more near a focal point, where the image moves fast; with tall objects, wide fans or large apertures it is not, and that difference is real physics (spherical aberration), not error. Distances are given to 0.01 cm. A real mirror or lens surface is also not a perfect sphere, and a real image is blurred by diffraction.

## Questions

1. Two plane mirrors meet at 90°. How many images of an object between them do you see, and why?
2. A dentist's mirror makes an upright image twice the size of a tooth 1.5 cm away. Is it concave or convex, and what is its radius?
3. Why does a fish in a round bowl look larger than it is? Use the refracting surface equation with the bowl's surface.
4. Why do the rays far from the axis of a concave spherical mirror cross closer to the mirror than the focal point?

## What to hand in

Prelab answers, a Data table copy for each part, the graphs and fits, your values of $$f$$, and answers to the questions. Identify simulated data.
