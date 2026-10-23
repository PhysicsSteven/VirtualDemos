# The Eye
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §2.5. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/the-eye.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Normal eye, near point; Nearsighted (Example 2.8); Nearsighted, with glasses; Farsighted (Example 2.9); Farsighted, with glasses; Older eye, reading.

**Using the demo.** An eye looks at an object, with or without glasses. Eye chooses a normal, nearsighted, farsighted or older eye. Object distance from the eye moves the object from 10 cm to 10 m on a log scale, and then far away (arrow keys on the picture move it too). Glasses: Wear glasses, Power of the glasses, and two buttons that set the prescription for distance or for reading at 25 cm. Readouts say whether the object is seen sharp or blurred (with the size of the blur spot on the retina), the near and far points, the eye's range of power, the power it uses now, where the image forms, and the two prescriptions. Blind hides whether it is sharp, the power used, the image and the prescriptions.

**What the demo models.** The eye is one thin lens with the retina 1.80 cm behind it (OpenStax Example 2.7); it can change its power over a range set by its near and far points. The normal eye sees from 25 cm to infinity; the nearsighted eye's far point is 30 cm (Example 2.8), the farsighted eye's near point is 1.00 m (Example 2.9), and the older eye's near point is 2.00 m with only 0.5 D of accommodation (chosen). Glasses are a thin lens 1.50 cm in front of the eye. The blur spot is the size of the out of focus image of a point, for a 4.0 mm pupil. Simulated data.

</details>

## Goal

Use the thin lens equation to find how the eye focuses at different distances, and design and test glasses for nearsighted, farsighted and older eyes.

## Background

The eye's lens (with the cornea) forms a real image on the retina, a fixed distance $$d_i$$ behind it. For an object at $$d_o$$ the power needed is

$$P = \frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i},$$

in diopters ($$\mathrm{D} = \mathrm{m^{-1}}$$). The eye changes its power by accommodation, from its least power (relaxed, focused on its far point) to its greatest (focused on its near point). A normal eye's near point is about 25 cm and its far point is at infinity. A nearsighted eye has too much power: its far point is closer than infinity. A farsighted eye has too little: its near point is farther than 25 cm. With age the range of accommodation shrinks.

Glasses a distance $$s$$ in front of the eye form an image the eye can see. To see far objects, a nearsighted eye with far point $$FP$$ needs glasses that put the image of a far object at its far point:

$$P_{\text{far}} = -\frac{1}{FP - s}.$$

To read at 25 cm, an eye with near point $$NP$$ needs glasses that put the image of the page at its near point:

$$P_{\text{read}} = \frac{1}{0.25\ \mathrm{m} - s} - \frac{1}{NP - s}.$$

## Before the lab

1. With the retina 1.80 cm behind the lens, find the power a normal eye needs to see an object far away, and one 25 cm away. What is its range of accommodation?
2. OpenStax Example 2.8: a nearsighted person's far point is 30.0 cm. Find the power of glasses worn 1.50 cm from the eye.
3. OpenStax Example 2.9: a farsighted person's near point is 1.00 m. Find the power of reading glasses worn 1.50 cm from the eye.
4. An older eye has its near point at 2.00 m and only 0.5 D of accommodation. What reading glasses does it need? With them on, about how far away can it still see sharply?

## Safety

There are no hazards in the simulation. Never look at the Sun, and never wear someone else's prescription glasses for long.

## Procedure

Before each part, predict what you will see. Then measure.

**Part 1: the normal eye.** Record the readings with the object far away, and at about 10 m, 1 m, 50 cm, 25 cm, 20 cm and 15 cm.

**Part 2: the nearsighted eye.** Without glasses, record with the object far away, at about 1 m and at about 30 cm. Then wear the glasses prescribed for distance and record the same three distances.

**Part 3: the farsighted eye.** Without glasses, record with the object at about 25 cm, 1 m and far away. Then wear the glasses prescribed for reading and record the same three distances.

**Part 4: the older eye.** Without glasses, record at about 25 cm, 1 m and 2 m. Then wear the reading glasses and record at about 25 cm, 30 cm, 40 cm, 50 cm and 1 m.

**Using the virtual apparatus.** The object distance moves in small steps on a log scale, so it may not land on a round number: record the distance the demo shows. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Trial | Eye | Glasses (D) | Object distance (cm) | Seen | Blur spot (mm) | Near point (cm) | Far point (cm) | Power the eye uses (D) | Image behind the lens (cm) | For distance (D) | For reading at 25 cm (D) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |

## Analysis

1. For Part 1, graph the power the eye uses against $$1/d_o$$ for the objects it sees sharply. Find the slope and intercept, and compare them with the thin lens equation and $$d_i = 1.80$$ cm. What happens for objects nearer than the near point?
2. For Part 2, explain why the nearsighted eye blurs far objects, and show from your readings that its glasses fix them. Compare the prescription with Example 2.8. Can it still see the 30 cm object with the glasses on? Why?
3. For Part 3, compare the reading prescription with Example 2.9. Explain why the farsighted eye with reading glasses may blur far objects.
4. For Part 4, find the range of distances the older eye sees sharply with its reading glasses. Explain why the range is so short, and why such a person might choose bifocals or progressive lenses.

## Uncertainty

The model is exact; the blur spot and image distance are geometric results for a thin lens, and an object counts as sharp when its blur spot is under 0.02 mm (a chosen limit, several cone cells across). A real eye is a thick, multi surface system with aberrations, its pupil changes with the light, and its near and far points vary from person to person and from day to day.

## Questions

1. Why do glasses for nearsighted people make their eyes look smaller to someone else, and glasses for farsighted people make them look larger?
2. A contact lens sits on the eye, with $$s = 0$$. Would a nearsighted person's contact lens prescription be stronger or weaker than their glasses prescription? Why?
3. Why can you not see clearly under water without goggles?

## What to hand in

Prelab answers, a Data table copy for each part, the graph and fit for Part 1, your prescriptions and their checks, and answers to the questions. Identify simulated data.
