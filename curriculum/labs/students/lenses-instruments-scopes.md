# Magnifiers, Microscopes and Telescopes
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §2.7 and §2.8. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/optics-bench.html?ws=lenses-instruments-scopes)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Where it is in the demo:** the Optics Bench, with the Magnifier, Microscope and Telescope setups. Thin lenses and the depth of an image have their own worksheet, Thin Lenses and the Depth of an Image.

**Using the demo.** An object arrow (or, for the telescope, a parallel beam) sends rays through one or two lenses. Click a lens to open its editor: converging or diverging, focal length and aperture. Drag an element to move it; with it selected, the arrow keys move it 0.5 cm, or 0.1 cm with Shift. With one lens, the Image section gives the object distance, the image distance and magnification found from the traced rays, and the image's kind. With two converging lenses on one axis, the Microscope or Telescope section follows the rays through both and gives the angular magnification measured from the rays, with the eye relaxed (final image at infinity) and the near point at 25 cm.

**What the demo models.** Each lens is an ideal thin lens: it bends every ray by the thin lens rule exactly, so it has no aberrations, and its traced images agree with the thin lens equation. The microscope's magnification is the angle of the rays leaving the eyepiece divided by the angle the object would fill at the near point; the telescope's is the angle of the beam leaving the eyepiece divided by the angle it comes in at (as tangents). Simulated data.

</details>

## Goal

Use one lens as a magnifier and two lenses as a microscope and a telescope, and measure how much each magnifies.

## Background

A thin lens of focal length $$f$$ ($$f > 0$$ converging) forms the image of an object a distance $$d_o$$ away at $$d_i$$, with

$$\frac{1}{d_o} + \frac{1}{d_i} = \frac{1}{f}, \qquad m = -\frac{d_i}{d_o}.$$

$$d_i > 0$$ is a real image on the far side of the lens; $$d_i < 0$$ is a virtual image on the object's side.

**Magnifier.** The eye sees an object best at its near point, taken as 25 cm, where it fills an angle $$\theta_o = h/(25\ \mathrm{cm})$$. A converging lens held at the eye, with the object inside its focal length, makes an upright virtual image. That image fills the angle $$\theta_i = h_i/\lvert d_i\rvert = h/d_o$$, so the angular magnification is

$$M = \frac{\theta_i}{\theta_o} = \frac{25\ \mathrm{cm}}{d_o}.$$

With the image at the near point ($$d_i = -25$$ cm) this is $$M = 1 + (25\ \mathrm{cm})/f$$; with the image at infinity (object at $$f$$, eye relaxed) it is $$M = (25\ \mathrm{cm})/f$$.

**Microscope.** The objective makes a real, enlarged image with $$m_{\text{obj}} = -d_i/d_o$$, and the eyepiece is a magnifier for that image, $$M_{\text{eye}} = (25\ \mathrm{cm})/f_{\text{eye}}$$ with the eye relaxed. The net magnification is $$M_{\text{net}} = m_{\text{obj}} M_{\text{eye}}$$.

**Telescope.** For a distant object, the objective's image forms at its focal point, which is also the eyepiece's focal point, so the lenses are $$f_{\text{obj}} + f_{\text{eye}}$$ apart. The angular magnification is

$$M = -\frac{f_{\text{obj}}}{f_{\text{eye}}}.$$

## Before the lab

1. A magnifier has $$f = 12$$ cm. Find $$M$$ with the image at the near point and with the image at infinity. Where must the object be for the image to be at the near point?
2. A microscope has $$f_{\text{obj}} = 2.0$$ cm and $$f_{\text{eye}} = 5.0$$ cm, with the object 2.25 cm from the objective. Find $$d_i$$, $$m_{\text{obj}}$$ and $$M_{\text{net}}$$. A telescope has $$f_{\text{obj}} = 16$$ cm and $$f_{\text{eye}} = 5.0$$ cm. Find $$M$$ and the lens separation.

## Safety

There are no hazards in the simulation. Never look at the Sun through a lens, telescope or camera viewfinder.

## Procedure

Before each part, predict what you will see. Then measure.

**Part 1: magnifier.** Choose the setup Magnifier ($$f = 12$$ cm). Move the object to about 4, 6, 8, 10 and 11 cm from the lens and record at each. Then move it (Shift with the arrow keys moves 0.1 cm) until the Image distance dᵢ readout is −25 cm within 0.5 cm, and record. Export to worksheet, then Clear.

**Part 2: microscope.** Choose the setup Microscope ($$f_{\text{obj}} = 2.0$$ cm, $$f_{\text{eye}} = 5.0$$ cm) and record it as it opens. Then click the eyepiece (the right lens), set its Focal length slider to 2.5 cm, and move it with the arrow keys until the Final image line of the Microscope section reads At infinity (eye relaxed); record. Then set the eyepiece back to 5.0 cm, move the object (Shift with the arrow keys) until Objective dₒ reads 2.20 cm, move the eyepiece until the final image is at infinity again, and record. Export to worksheet, then Clear.

**Part 3: telescope.** Choose the setup Telescope ($$f_{\text{obj}} = 16$$ cm, $$f_{\text{eye}} = 5.0$$ cm, 21 cm apart) and record it as it opens. Then set the eyepiece's Focal length to 4.0 and then 8.0 cm, and set the objective (the left lens) to 20 cm with the 5.0 cm eyepiece; each time move the eyepiece with the arrow keys until the Lens separation readout of the Telescope section equals the $$f_{\text{obj}} + f_{\text{eye}}$$ shown beside it and the section's last line starts with At infinity, then record. Export to worksheet, then Clear.

**Using the virtual apparatus.** A microscope or telescope reading needs the rays leaving the eyepiece to be parallel; the section's last line says when they are. Changing a focal length does not move the lens, so move it afterward. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Trial | Setup | Focal length f, or objective f (cm) | Eyepiece focal length (cm) | Lens separation (cm) | Object distance dₒ (cm) | Image distance dᵢ (cm) | Magnification m | Angular magnification M | Image |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

## Analysis

1. For Part 1, find $$M = 25\ \mathrm{cm}/d_o$$ for each row. Compare the near point row with $$1 + (25\ \mathrm{cm})/f$$, and the rows near $$d_o = f$$ with $$(25\ \mathrm{cm})/f$$. Why can a magnifier not be made arbitrarily strong just by moving the object?
2. For Part 2, compare each traced $$M$$ with $$m_{\text{obj}} \times (25\ \mathrm{cm})/f_{\text{eye}}$$. Find the tube length $$L$$ (the lens separation minus $$f_{\text{obj}}$$ and $$f_{\text{eye}}$$) for each row and compare $$M$$ with $$-L\,(25\ \mathrm{cm})/(f_{\text{obj}} f_{\text{eye}})$$. Why is the image inverted?
3. For Part 3, compare each traced $$M$$ with $$-f_{\text{obj}}/f_{\text{eye}}$$. What sets the magnification, and why must the lenses be $$f_{\text{obj}} + f_{\text{eye}}$$ apart?

## Uncertainty

The model has no noise, and its lenses are ideal thin lenses, so the traced image distances agree with the thin lens equation to the 0.01 cm they are given to. Your own uncertainty is in where you put the object and the lenses. The demo calls the rays leaving an eyepiece parallel when their slopes agree to within 0.002, which sets how well a microscope or telescope must be adjusted. Real lenses have thickness, spherical aberration and dispersion (color fringes), and a real eye's near point varies from person to person.

## Questions

1. A telescope for looking at the Moon has $$f_{\text{obj}} = 1.0$$ m. Which eyepiece gives 50×, and how long is the telescope?

## What to hand in

Prelab answers, a Data table copy for each part, the magnification comparisons and the answer to the question. Identify simulated data.
