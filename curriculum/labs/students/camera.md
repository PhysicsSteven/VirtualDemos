# The Camera
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §2.6 (the camera) and §2.4 (thin lenses). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/the-eye.html)

The demo opens as the eye. Choose **Camera** under **Instrument** to work with the camera; you can switch back to the eye at any time.

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- Choose Camera at the top of the panel. Pick the 50 mm lens or the phone camera, the aperture (f-number, 50 mm lens only), the object distance, and the distance from the lens to the sensor. Arrow keys on the picture move the object.
- The top strip shows the object on a log scale of distance, with the range of distances that are in focus. The enlarged camera below is to scale; the rays come from the point of the object on the axis, and the colored mark on the sensor is the blur spot. The photo on the right is what the sensor records, reduced to fit, with a 1:1 crop of the center of the star (one screen pixel per sensor pixel).
- The readouts give the blur spot's size on the sensor in micrometers and in pixels. Record reading stores the camera, the f-number, the object distance, the lens to sensor distance and the blur; Export to worksheet sends the readings here.
- Blind hides the image distance from the lens equation, the range in focus and the sharp or blurred label, and turns off Autofocus, leaving the blur readings and the photo.

**What the demo models.**

- A single thin lens of focal length $$f$$ with a round aperture of diameter $$f/N$$, focused by changing the lens to sensor distance $$d_s$$. Light from an object point converges to $$d_i$$ given by the thin lens equation; on a sensor at $$d_s \neq d_i$$ it makes a blur spot.
- The 50 mm lens has a full frame sensor 36 mm wide with 6.0 µm pixels. The phone camera has $$f = 5.00$$ mm, as in the textbook, at f/1.8, with a sensor 5.6 mm wide and 1.4 µm pixels. These sensor and aperture values are typical ones, not from the textbook.
- The picture counts as sharp when the blur spot is at most two pixels across. Aberrations and diffraction are left out, and the photo blurs the scene by about the spot's size with a smooth blur, not the exact disk.

</details>

## Goal

Focus a camera by moving its lens, check the thin lens equation with the distances you find, see why a phone camera needs to move its lens only a few hundredths of a millimeter, and measure how the aperture controls which distances are in focus.

## Background

A camera's lens makes a real, inverted image of the scene on its sensor. For an object a distance $$d$$ in front of a thin lens of focal length $$f$$, the image forms a distance $$d_i$$ behind it, where

$$\frac{1}{d} + \frac{1}{d_i} = \frac{1}{f}.$$

For a distant object $$d_i = f$$, and as the object comes closer $$d_i$$ grows. The eye focuses by changing its focal length; a camera keeps $$f$$ and focuses by moving the lens, so that the lens to sensor distance $$d_s$$ equals $$d_i$$. A graph of $$1/d_s$$ against $$1/d$$ for a focused camera is a straight line of slope $$-1$$ and intercept $$1/f$$.

If the sensor is not at the image, the cone of light from each object point meets the sensor as a disk, the **blur spot**. The cone fills the aperture, of diameter $$A = f/N$$ where $$N$$ is the **f-number** (written f/2, f/8, ...), and narrows to a point at $$d_i$$. By similar triangles the blur spot's diameter on a sensor at $$d_s$$ is

$$b = A\,\frac{\lvert d_s - d_i \rvert}{d_i} = \frac{f}{N}\,\Bigl\lvert 1 - \frac{d_s}{d_i} \Bigr\rvert.$$

A picture looks sharp as long as $$b$$ is no bigger than a pixel or two. So a smaller aperture (a larger $$N$$) keeps a wider range of distances sharp at once: this range is the **depth of field**. A camera focused at infinity ($$d_s = f$$) keeps everything sharp from the **hyperfocal distance** $$H \approx f^2/(Nb_{\max})$$ out to infinity, where $$b_{\max}$$ is the largest acceptable blur.

The textbook's example: a phone lens with $$f = 5$$ mm focuses a selfie at 50 cm at $$d_i = 5.05$$ mm and a person 5 m away at 5.005 mm. The whole range of focus is a few hundredths of a millimeter.

## Before the lab

1. The 50 mm lens photographs an object 2.00 m away. Where must the sensor be? How far has the lens moved from its position for a distant object?
2. The 50 mm lens is focused on a distant object ($$d_s = 50.000$$ mm) at f/2, and the object is moved to 5.00 m. Predict the blur spot's diameter in micrometers and in pixels (6.0 µm each). Is the picture sharp?
3. Estimate the phone camera's hyperfocal distance at f/1.8 with $$b_{\max}$$ = 2 pixels = 2.8 µm.

## Safety

Never point a camera, or look through any lens, at the Sun. The simulation has no hazards.

## Procedure

**Part 1: focusing the 50 mm lens.** At f/2, for objects at 0.50, 0.75, 1.00, 2.00, 5.00 and 10.0 m and far away, adjust the lens to sensor distance until the blur spot is as small as you can make it, and record.

**Part 2: focusing the phone camera.** Do the same with the phone camera for objects at 0.25, 0.50, 1.00 and 5.00 m and far away.

**Part 3: a fixed focus phone.** Set the phone's lens to sensor distance to 5.0000 mm, as for a distant object, and leave it there. Record the blur with the object at 0.25, 0.50, 1.00, 2.00, 5.00 and 10.0 m and far away.

**Part 4: aperture and depth of field.** With the 50 mm lens at f/2, focus on an object 2.00 m away and leave the focus there. Move the object to 1.00 m and record the blur at f/2, f/4, f/8 and f/16.

**Using the virtual apparatus.** Turn Blind on before you start; it also turns Autofocus off, so focus by hand by watching the blur readout and the 1:1 crop. Send each part's readings to the worksheet, then clear them before the next part; each part gets its own copy of the Data table.

## Data

| Reading | Camera | f-number $$N$$ | Object $$d$$ (cm) | Lens to sensor $$d_s$$ (mm) | Blur (µm) | Blur (pixels) | $$1/d$$ (1/m) | $$1/d_s$$ (1/m) | $$d_i$$ from the lens equation (mm) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Use $$1/d = 0$$ for an object far away.

## Analysis

1. For Part 1, graph $$1/d_s$$ against $$1/d$$. Find the slope and intercept, and from the intercept the focal length. Is the slope $$-1$$? How far does the lens move between focusing far away and at 50 cm?
2. For Part 2, compare your $$d_s$$ at 50 cm and at 5.00 m with the textbook's 5.05 mm and 5.005 mm. What is the phone lens's whole focusing travel from 25 cm to far away, and how does it compare with the 50 mm lens's travel over the same range? Explain the difference using the lens equation.
3. For Part 3, compute $$b$$ for each reading from the formula in the Background and compare with the demo's blur. From which distance outward is the picture sharp (blur at most 2 pixels)? Compare with your estimate of the hyperfocal distance.
4. For Part 4, graph the blur against $$1/N$$. Is the blur proportional to the aperture diameter $$A = f/N$$? Which f-numbers make the object at 1.00 m sharp while the camera is focused at 2.00 m?
5. Is the textbook right that a phone camera can keep its sensor in one place? Use Part 3 to say for which distances that works with this sensor, and what a phone must do to take a sharp selfie.

## Uncertainty

The lens to sensor distance moves in steps of 1 µm for the 50 mm lens and 0.1 µm for the phone, so a hand focused $$d_s$$ is within half a step of the best one, and the smallest blur you can reach is not quite zero. The demo's blur is exact for its thin lens; a real lens has aberrations and diffraction, which make a blur spot of a few micrometers even in perfect focus (at f/16 diffraction alone gives a spot about 20 µm across), so real cameras cannot use very small apertures to make everything sharp.

## Questions

1. Why does a camera move its lens away from the sensor to focus on a nearby object, while the eye makes its lens fatter?
2. A camera cannot focus on an object closer than its focal length. Why not, using the lens equation?
3. Portrait photographers use a large aperture (small $$N$$) to blur the background. Explain with your Part 4 results.
4. A 35 mm frame at 6.0 µm per pixel has 6000 pixels across, while the phone's sensor has 4000 across at 1.4 µm. Which camera's blur limit, in micrometers, is stricter, and how does that affect its depth of field?
5. The phone in Part 2 needs to move its lens by only a few hundredths of a millimeter. Why does such a short focal length make focusing so easy?

## What to hand in

Answers to Before the lab, a copy of the Data table for each part, the graph and fit for Part 1, the comparisons for Parts 2 to 4, and answers to the questions. Identify simulated data.
