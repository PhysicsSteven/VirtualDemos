# Lenses and Optical Instruments
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §2.4 and §2.6 to §2.8. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/optics-bench.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Where it is in the demo:** the Optics Bench, with the Converging lens, Magnifier, Microscope and Telescope setups.

**Using the demo.** An object arrow (or, for the telescope, a parallel beam) sends rays through one or two lenses. Click a lens to open its editor: converging or diverging, focal length and aperture. Drag an element to move it; with it selected, the arrow keys move it 0.5 cm, or 0.1 cm with Shift. With one lens, the Image section gives the object distance, the image distance and magnification found from the traced rays, and the image's kind. With two converging lenses on one axis, the Microscope or Telescope section follows the rays through both and gives the angular magnification measured from the rays, with the eye relaxed (final image at infinity) and the near point at 25 cm.

**What the demo models.** Each lens is an ideal thin lens: it bends every ray by the thin lens rule exactly, so it has no aberrations, and its traced images agree with the thin lens equation. The microscope's magnification is the angle of the rays leaving the eyepiece divided by the angle the object would fill at the near point; the telescope's is the angle of the beam leaving the eyepiece divided by the angle it comes in at (as tangents). Simulated data.

</details>

## Goal

Measure where thin lenses form images, then use one lens as a magnifier and two lenses as a microscope and a telescope, and measure how much each magnifies.

## Background

A thin lens of focal length $$f$$ ($$f > 0$$ converging, $$f < 0$$ diverging) forms the image of an object a distance $$d_o$$ away at $$d_i$$, with

$$\frac{1}{d_o} + \frac{1}{d_i} = \frac{1}{f}, \qquad m = -\frac{d_i}{d_o}.$$

$$d_i > 0$$ is a real image on the far side of the lens; $$d_i < 0$$ is a virtual image on the object's side. A camera is a converging lens that makes a real image on a sensor; to focus on a nearer object, the lens moves farther from the sensor.

**Magnifier.** The eye sees an object best at its near point, taken as 25 cm, where it fills an angle $$\theta_o = h/(25\ \mathrm{cm})$$. A converging lens held at the eye, with the object inside its focal length, makes an upright virtual image. That image fills the angle $$\theta_i = h_i/\lvert d_i\rvert = h/d_o$$, so the angular magnification is

$$M = \frac{\theta_i}{\theta_o} = \frac{25\ \mathrm{cm}}{d_o}.$$

With the image at the near point ($$d_i = -25$$ cm) this is $$M = 1 + (25\ \mathrm{cm})/f$$; with the image at infinity (object at $$f$$, eye relaxed) it is $$M = (25\ \mathrm{cm})/f$$.

**Microscope.** The objective makes a real, enlarged image with $$m_{\text{obj}} = -d_i/d_o$$, and the eyepiece is a magnifier for that image, $$M_{\text{eye}} = (25\ \mathrm{cm})/f_{\text{eye}}$$ with the eye relaxed. The net magnification is $$M_{\text{net}} = m_{\text{obj}} M_{\text{eye}}$$.

**Telescope.** For a distant object, the objective's image forms at its focal point, which is also the eyepiece's focal point, so the lenses are $$f_{\text{obj}} + f_{\text{eye}}$$ apart. The angular magnification is

$$M = -\frac{f_{\text{obj}}}{f_{\text{eye}}}.$$

## Before the lab

1. A converging lens has $$f = 10$$ cm. Find the image distance and magnification for an object 15 cm from it, and for one 5.0 cm from it. Describe each image.
2. A diverging lens has $$f = -10$$ cm. Find the image distance and magnification for an object 20 cm from it.
3. A magnifier has $$f = 12$$ cm. Find $$M$$ with the image at the near point and with the image at infinity. Where must the object be for the image to be at the near point?
4. A microscope has $$f_{\text{obj}} = 2.0$$ cm and $$f_{\text{eye}} = 5.0$$ cm, with the object 2.25 cm from the objective. Find $$d_i$$, $$m_{\text{obj}}$$ and $$M_{\text{net}}$$. A telescope has $$f_{\text{obj}} = 16$$ cm and $$f_{\text{eye}} = 5.0$$ cm. Find $$M$$ and the lens separation.

## Safety

There are no hazards in the simulation. Never look at the Sun through a lens, telescope or camera viewfinder.

## Procedure

Before each part, predict what you will see. Then measure.

**Part 1: converging lens.** In the Converging lens setup ($$f = 10$$ cm), record with the object about 30, 25, 20, 15, 12, 11, 8 and 5 cm from the lens.

**Part 2: focusing a camera.** With the object about 30 cm from the lens, move the screen until the picture on it is sharpest, and write the distance from the lens to the screen in the Notes for Part 1. Repeat with the object about 20 cm away. (Nothing new is recorded.)

**Part 3: diverging lens.** Make the lens diverging with $$f = -10$$ cm. Record with the object about 30, 20, 10 and 5 cm from it.

**Part 4: magnifier.** In the Magnifier setup ($$f = 12$$ cm), record with the object about 4, 6, 8, 10 and 11 cm from the lens. Then find the object distance that puts the image 25 cm from the lens (within 0.5 cm) and record.

**Part 5: microscope.** Record the Microscope setup as it opens ($$f_{\text{obj}} = 2.0$$ cm, $$f_{\text{eye}} = 5.0$$ cm). Then change the eyepiece to $$f_{\text{eye}} = 2.5$$ cm, move it until the final image is at infinity, and record. Then put the eyepiece back to 5.0 cm, move the object to 2.20 cm from the objective, move the eyepiece until the final image is at infinity again, and record.

**Part 6: telescope.** Record the Telescope setup as it opens ($$f_{\text{obj}} = 16$$ cm, $$f_{\text{eye}} = 5.0$$ cm). Then record with eyepieces of 4.0 and 8.0 cm, and with a 20 cm objective and the 5.0 cm eyepiece, each time with the lenses $$f_{\text{obj}} + f_{\text{eye}}$$ apart.

**Using the virtual apparatus.** A microscope or telescope reading needs the rays leaving the eyepiece to be parallel; the section's last line says when they are. Changing a focal length does not move the lens, so move it afterward. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table. The last two columns are for you to fill in.

## Data

| Trial | Setup | Focal length f, or objective f (cm) | Eyepiece focal length (cm) | Lens separation (cm) | Object distance dₒ (cm) | Image distance dᵢ (cm) | Magnification m | Angular magnification M | Image | 1/dₒ (1/cm) | 1/dᵢ (1/cm) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |

## Analysis

1. For Part 1, fill in $$1/d_o$$ and $$1/d_i$$ and graph $$1/d_i$$ against $$1/d_o$$. Find $$f$$ from the intercept and say what the slope should be. Check $$m = -d_i/d_o$$. Describe the image when the object is beyond $$2f$$, between $$2f$$ and $$f$$, and inside $$f$$.
2. For Part 2, compare the screen distances with $$d_i$$. Which way did the screen move as the object came closer? Explain how a camera focuses, and why a camera cannot focus on an object closer than $$f$$.
3. For Part 3, make the same graph and find $$f$$. Why does a diverging lens always give a virtual, upright, smaller image?
4. For Part 4, find $$M = 25\ \mathrm{cm}/d_o$$ for each row. Compare the near point row with $$1 + (25\ \mathrm{cm})/f$$, and the rows near $$d_o = f$$ with $$(25\ \mathrm{cm})/f$$. Why can a magnifier not be made arbitrarily strong just by moving the object?
5. For Part 5, compare each traced $$M$$ with $$m_{\text{obj}} \times (25\ \mathrm{cm})/f_{\text{eye}}$$. Find the tube length $$L$$ (the lens separation minus $$f_{\text{obj}}$$ and $$f_{\text{eye}}$$) for each row and compare $$M$$ with $$-L\,(25\ \mathrm{cm})/(f_{\text{obj}} f_{\text{eye}})$$. Why is the image inverted?
6. For Part 6, compare each traced $$M$$ with $$-f_{\text{obj}}/f_{\text{eye}}$$. What sets the magnification, and why must the lenses be $$f_{\text{obj}} + f_{\text{eye}}$$ apart?

## Uncertainty

The model has no noise, and its lenses are ideal thin lenses, so the traced image distances agree with the thin lens equation to the 0.01 cm they are given to. Your own uncertainty is in where you put the object and the lenses. The demo calls the rays leaving an eyepiece parallel when their slopes agree to within 0.002, which sets how well a microscope or telescope must be adjusted. Real lenses have thickness, spherical aberration and dispersion (color fringes), and a real eye's near point varies from person to person.

## Questions

1. A phone camera lens has $$f = 4.0$$ mm. How far must it move to change focus from a distant scene to an object 10 cm away?
2. Why does a jeweler choose a magnifier with a short focal length? What limits how short it can be?
3. A telescope for looking at the Moon has $$f_{\text{obj}} = 1.0$$ m. Which eyepiece gives 50×, and how long is the telescope?
4. A microscope's objective is marked 40× and its eyepiece 10×. What is the net magnification, and what does each number mean?

## What to hand in

Prelab answers, a Data table copy for each part, the graphs and fits, the camera screen distances, the magnification comparisons, and answers to the questions. Identify simulated data.
