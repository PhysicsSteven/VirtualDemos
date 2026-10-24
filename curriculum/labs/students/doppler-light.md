# Doppler Effect for Light
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §5.7. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/doppler.html)

## Goal

Measure the wavelength of light received from a fast moving source, test the relativistic Doppler formula against the classical one, and measure the time dilation factor $$\gamma$$ from the redshift seen when the source moves across the line of sight.

## Background

Light needs no medium and travels at $$c$$ in every inertial frame, so its Doppler shift can depend only on the relative velocity of the source and the observer. Work in the observer's frame, with the source moving at speed $$v = \beta c$$. Let $$\theta$$ be the angle, at the moment the light was emitted, between the source's velocity and the line from the source to the observer: $$\theta = 0$$ when it heads straight at the observer, $$90^\circ$$ when it moves across the line of sight and $$180^\circ$$ when it heads straight away.

Two effects combine. Between one crest and the next, the source moves toward the observer by $$v\cos\theta$$ times the period, which crowds the crests (the classical effect, as for sound). And the source's clock runs slow by the factor

$$\gamma = \frac{1}{\sqrt{1 - \beta^2}},$$

so in the observer's frame it emits its crests $$\gamma$$ times less often. Together, with $$\lambda$$ the wavelength in the source's own frame and $$\lambda'$$ the wavelength received,

$$\frac{\lambda'}{\lambda} = \gamma\,(1 - \beta\cos\theta).$$

Straight away from the observer ($$\theta = 180^\circ$$) this is the formula of §5.7, $$\lambda'/\lambda = \sqrt{(1 + \beta)/(1 - \beta)}$$, a redshift; straight toward ($$\theta = 0$$) it is the inverse, a blueshift. Across the line of sight ($$\theta = 90^\circ$$) the classical factor is 1 and only time dilation is left: $$\lambda'/\lambda = \gamma$$, the **transverse Doppler effect**, a redshift with no classical counterpart. Astronomers report the shift as $$z = \lambda'/\lambda - 1$$; for $$\beta \ll 1$$, $$z \approx -\beta\cos\theta$$, the radial velocity over $$c$$.

Rearranged, a measured $$\lambda'/\lambda$$ at a known $$\beta$$ and $$\theta$$ gives $$\gamma$$ from the data:

$$\gamma = \frac{\lambda'/\lambda}{1 - \beta\cos\theta},\qquad \frac{1}{\gamma^2} = 1 - \beta^2.$$

## Before the lab

1. A source of 500 nm light moves at $$\beta = 0.60$$. Find $$\gamma$$, and the received wavelength when it heads straight toward the observer, straight away, and across the line of sight.
2. What does the classical formula $$\lambda'/\lambda = 1 - \beta\cos\theta$$ predict for the three cases of item 1?
3. Show that $$\gamma(1 - \beta) = \sqrt{(1 - \beta)/(1 + \beta)}$$.

## Safety

No hazards in the virtual lab.

## Procedure

**Passing source.** Use light, with the source passing the observer in a straight line (the Transverse Doppler setup) and an emitted wavelength of 500 nm. Set the source's speed to $$\beta = 0.30$$ and run the pass from the start. Pause three times: when the light arriving left the source at about $$45^\circ$$, at $$90^\circ$$, and at about $$135^\circ$$. At each pause record the angle at emission and the received wavelength, as shown. The exact angle does not matter, as long as you record the one shown with its wavelength. Repeat at $$\beta = 0.60$$ and $$\beta = 0.90$$.

**Using the virtual apparatus.** Choose Light, not Sound. Readings record sound only, so type the light values into the Data table. Slow the time down if the pass is too quick to pause where you want. Compute each prediction yourself before you look at the formula the demo shows.

## Data

| Run | $$\beta$$ | $$\theta$$ at emission (°) | $$\lambda$$ (nm) | $$\lambda'$$ (nm) | $$\lambda'/\lambda$$ | $$1 - \beta\cos\theta$$ | $$\gamma$$ from data | $$1/\gamma^2$$ | $$\beta^2$$ |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

## Analysis

1. For each row, compute the classical prediction $$\lambda(1 - \beta\cos\theta)$$ and the relativistic one $$\lambda\gamma(1 - \beta\cos\theta)$$ with $$\gamma = 1/\sqrt{1 - \beta^2}$$, and compare both with $$\lambda'$$. By what factor is the classical prediction off, and does that factor depend on $$\theta$$?
2. Plot $$1/\gamma^2$$ (from your data) against $$\beta^2$$. What slope and intercept does relativity predict? Fit a line and compare.
3. At $$\theta = 90^\circ$$, what does the classical formula predict, and what did you see? Explain the shift in terms of the source's clock.
4. At what angle is there no shift at all for $$\beta = 0.60$$? Show that it is where $$\cos\theta = (1 - 1/\gamma)/\beta$$, and say whether your readings at $$45^\circ$$ and $$90^\circ$$ are on either side of it.

## Uncertainty

The angle is shown to 0.1° and the wavelength to 0.1 nm. Because each row uses the angle shown at the same moment as its wavelength, when you pause does not add any error. Estimate how much a 0.1° error in $$\theta$$ changes $$1 - \beta\cos\theta$$ at $$45^\circ$$ and $$\beta = 0.90$$, and so $$\gamma$$ from data. With real light from stars, wavelengths are measured from spectral lines, and the source's own motion must be separated from Earth's orbital motion and the expansion of the universe.

## Questions

1. Sound needs air, and its Doppler shift is different for a moving source and a moving observer. Why is there only one formula for light, depending only on the relative velocity?
2. Show that for $$\beta \ll 1$$, $$z \approx -\beta\cos\theta$$, so a small redshift measures the radial velocity. A star's hydrogen line at 656.3 nm is received at 656.4 nm. How fast is it receding?
3. Why does a source moving across the line of sight give a redshift, never a blueshift?
4. A clock carried by the source would show less time between two crests than the observer's clock. How large is the difference at $$\beta = 0.90$$, and how does your data show it?

## What to hand in

Prelab answers, the completed Data table, the comparison of the two predictions, the plot of $$1/\gamma^2$$ against $$\beta^2$$ with its fit, and answers to the questions. Identify simulated data.
