# How g Changes with Height and Latitude
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §13.2. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/gravity-near-earth.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Places in the demo:** Sea level; Top of Everest; Airliner, 11 km; Space station, about 400 km; GPS, r = 26,560 km; Geostationary, r = 42,164 km. Any other height from 0 to 40,000 km can be set, at any latitude, on Earth, the Moon or Mars.

**Using the demo.**

- A 1.000 kg mass hangs from a spring scale at the chosen height and latitude. If the height is above the ground, imagine the scale held up on a tall tower that turns with the planet. The picture shows the gravity arrow and the centrifugal term (drawn up to 100 times longer so it shows; its label gives the factor; far from the planet both arrows are drawn longer still, and the gravity label gives that factor too), and a graph of g against height.
- The readouts give the distance from the center r, gravity alone $$GM/r^2$$, and, with the planet's rotation included, the centrifugal term, the effective g (what the scale feels) and the tilt of a plumb line. At sea level on Earth they also give the real Earth's value from the WGS 84 standard formula.
- Readouts are to 0.0001 m/s². Record reading stores the planet, height, latitude, r and both values of g; Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides g, the scale reading and the percentages. Nothing can be recorded while Blind is on.

**What the demo models.**

- Each planet is a uniform sphere with the measured GM and mean radius: Earth GM = 3.986004 × 10¹⁴ m³/s², R = 6371 km; Moon GM = 4.902800 × 10¹² m³/s², R = 1737.4 km; Mars GM = 4.282837 × 10¹³ m³/s², R = 3389.5 km. Each turns once per sidereal day (Earth: ω = 7.292116 × 10⁻⁵ rad/s, one turn in 23 h 56 min).
- The scale is at rest relative to the ground, so it reads the vector sum of gravity and the centrifugal term $$\omega^2 r\cos\lambda$$ directed away from the axis, where $$\lambda$$ is the latitude. The real Earth is also flattened at the poles, which a sphere leaves out; the WGS 84 value includes it.

</details>

## Goal

Measure how the acceleration due to gravity falls off with distance from Earth's center, find GM from it, and measure how Earth's rotation lowers the effective g toward the equator.

## Background

Outside a spherical planet of mass $$M$$, gravity is the same as if all the mass were at the center (§13.2):

$$g = \frac{GM}{r^2}, \qquad r = R + h.$$

So a graph of $$g$$ against $$1/r^2$$ is a straight line through the origin with slope $$GM$$. Close to the surface, where $$h \ll R$$,

$$g \approx g_0\left(1 - \frac{2h}{R}\right), \qquad g_0 = \frac{GM}{R^2}.$$

A body at rest on the turning Earth moves in a circle of radius $$r\cos\lambda$$ about the axis. Part of gravity supplies the centripetal acceleration, so a scale reads less than $$mg$$. At sea level the effective g is

$$g_\text{eff} \approx \frac{GM}{R^2} - \omega^2 R\cos^2\lambda,$$

which drops a term of order $$(\omega^2 R)^2/g$$, smaller than 0.00002 m/s² on Earth. So a graph of $$g_\text{eff}$$ against $$\cos^2\lambda$$ is a straight line with slope $$-\omega^2 R$$.

## Before the lab

1. At what height above Earth's surface, in Earth radii, is g one quarter of its value at the surface?
2. The space station flies about 400 km up. Estimate g there as a fraction of g at the surface. Is the crew weightless because gravity is small there?
3. Why does Earth's rotation lower a scale reading most at the equator and not at all at the poles?

## Safety

No physical apparatus is used. On a real bench, a precision spring scale or gravimeter must be leveled and handled gently; do not drop masses onto it.

## Procedure

**Height scan.** Press **Earth**, set the **Latitude** slider to 0° and leave **Include the planet's rotation** checked. Press each of the six place buttons in turn (Sea level to Geostationary) and press **Record reading** at each. Then drag the **Height above the surface h** slider (arrow keys fine tune it) to three more heights, about 2000, 10,000 and 30,000 km, and record each. The height is shown beside the slider. Press **Export to worksheet**.

**Latitude scan.** Press **Clear**, then **Sea level**. Set the **Latitude** slider to 0°, 15°, 30°, 45°, 60°, 75° and 90° in turn and press **Record reading** at each. The Real Earth at sea level column fills only at sea level on Earth. Press **Export to worksheet**; the scan goes into a new copy of the table.

**Mars.** Press **Clear**, then press the **Mars** button:

1. Press **Sea level**, latitude 0°, rotation included, and record a reading.
2. Uncheck **Include the planet's rotation** and record a reading (its Planet column says "not rotating"). Check the box again.
3. Drag the height slider as close to one planet radius as it goes (the radius, 3389.5 km, is in the line at the top; the nearest setting is about 3387 km) and record a reading.

Press **Export to worksheet** to send these three readings to a third copy of the table.

## Data

| Reading | Planet | Height h (km) | Latitude (°) | r (Mm) | Gravity alone GM/r² (m/s²) | Effective g (m/s²) | Real Earth at sea level (m/s²) | 1/r² (1/Mm²) | cos² of latitude |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

1 Mm = 1000 km = 10⁶ m. Fill in the last two columns yourself. Keep the height scan, the latitude scan and the Mars readings in separate copies of the table.

## Analysis

1. Fit gravity alone against $$1/r^2$$ for the height scan. From the slope find GM in m³/s² (remember that r is in Mm) and compare it with the value in About the demo. What should the intercept be?
2. For the readings up to 400 km, compare gravity alone with $$g_0(1 - 2h/R)$$. Where does the near surface line's error pass 1%? (Drag the height slider below 1000 km and watch the **Its error** readout to find it.)
3. In the height scan, the difference between gravity alone and the effective g is $$\omega^2 r$$ at the equator. Check this at three heights. What is the effective g at the geostationary radius, and why?
4. Fit the effective g against $$\cos^2\lambda$$ for the latitude scan. From the slope find $$\omega$$, then the time Earth takes to turn once. Compare it with 24 h and explain the difference.
5. In the same table copy, compare the Real Earth at sea level values at 0° and 90° with your model's effective g at those latitudes. What does the uniform sphere leave out, and which way does it push g at the poles?
6. For Mars, compare the surface value with the value about one planet radius up, and compare the ratio with $$(R/r)^2$$. What ratio would a height of exactly one radius give? How much does its rotation change its surface g?

## Uncertainty

The readouts are rounded to 0.0001 m/s²; heights and latitudes are exact settings of the model, so the scatter about your fits comes only from rounding. Use the standard error of each slope for the uncertainty in GM and $$\omega$$. The straight line in Analysis 4 drops a term smaller than 0.00002 m/s²; say whether your residuals can show it. The bigger question is the model: compare it with the WGS 84 values and say which effect limits how well a uniform turning sphere describes the real Earth.

## Questions

1. A plumb line points straight at Earth's center only at the equator and the poles. Why does it tilt everywhere else?

## What to hand in

Prelab answers, the three table copies with their graphs and fits, GM and $$\omega$$ with uncertainties and comparisons, the near surface line check, the Mars comparison and answers to the questions. Identify simulated data.
