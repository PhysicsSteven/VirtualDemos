---
title: Taylor Polynomials and Series
level: Calculus II (OpenStax Calculus Vol 2 6.1 to 6.4, Vol 1 4.2) for physics students; Physics I (Vol 1 13.2, 15.4) for the small angle and g(h) approximations
time: 15 to 30 minutes
---
## What students should come away with

- A Taylor polynomial matches f and its first n derivatives at the center a, so it hugs f near a and drifts away further out. Each added term makes the fit good over a wider range, up to a limit.
- "Small" in a physics approximation has a size: sin θ ≈ θ is within 1% only out to 0.244 rad (14°); θ − θ³/6 is within 1% out to 1.008 rad (58°). The first term left out estimates the error, and Lagrange's remainder bounds it.
- A series converges only within a radius R of the center, and R is the distance to the nearest point where f stops being analytic, even when that point is off the real axis: 1/(1 + x²) is smooth for every real x, but its poles at ±i stop its series at |x| = 1.
- New series come from known ones: substitute, differentiate or integrate term by term. arctan x comes from the geometric series in two steps.

## Before class

Nothing to install. Projector mode enlarges the curves and labels. The opening setup is the pendulum, sin θ against θ: the green column is where the polynomial is within 1%. Blind (Lab fold) hides the polynomial, its coefficients and the error readouts so students can work them out first.

## Running it in class

1. **How small is small?** Press Pendulum: sin θ ≈ θ. Ask how far the straight line θ stays within 1% of sin θ before anyone looks at the green column (Q1). Press + twice to add −θ³/6.
2. **Play.** Press Play: a term every second. Ask why the polynomial jumps only at odd orders, and what each new term does to the green column.
3. **The mystery of 1/(1 + x²).** Press 1/(1 + x²): poles at ±i and Play up to order 24. The polynomials fail at |x| = 1 every time. Ask why, before pointing to the complex plane card (Q2). Drag the center a to 1 and watch the disk grow to √2.
4. **Physics checks.** Relativistic kinetic energy (Q3), Gravity above Earth (Q4), Field of a dipole: in each, read off where the first term is good to 1%.
5. **Build a series.** Press Build arctan x and step through 1/(1 − x) → x → −x² → ∫₀ˣ (Q5).

## Questions

**Q1.** Up to what angle is sin θ ≈ θ good to 1%? Estimate it from the first term left out, then check it in the demo. How much further does θ − θ³/6 go?

**Q2.** 1/(1 + x²) is smooth and bounded for every real x. Why does its Taylor series about 0 diverge at x = 1.2, however many terms you add? What is the radius of convergence about a = 1, and why?

**Q3.** For a particle moving at v, the kinetic energy is (γ − 1)mc². Up to what speed is Newton's ½mv² within 1% of it? What does the next term, 3mv⁴/8c², tell you about the size of that error?

**Q4.** Use g ≈ g₀(1 − 2h/R) to estimate g at 400 km. How far off is it, and why does the series for g(h) converge only for h < R?

**Q5.** Build the arctan series from the geometric series. What happens at x = 1, and how many terms would you need to get π/4 to three decimal places this way?

## Common misconceptions

- **"More terms always make it better."** Inside the radius of convergence, yes; outside it, more terms make it worse. ln(1 + x) at x = 2 and 1/(1 + x²) at x = 1.5 show the polynomials swinging wider with each term.
- **"If f is smooth everywhere on the real line, its series converges everywhere."** 1/(1 + x²) and arctan x are smooth on the whole line, but their series stop at |x| = 1 because of ±i.
- **"The approximation sin θ ≈ θ needs θ in degrees to be small."** It needs θ in radians; in degrees the series does not even have this form.
- **"An approximation good to 1% in sin θ gives a period good to 1%."** The period depends on sin θ over the whole swing; at 14° the period is only 0.37% longer than 2π√(L/g).

## How the demo works

- The box is read by the site's parser (demos/lib/vdmath.js), never run as code. Each derivative is worked out exactly by the rules of calculus, so every coefficient c_k = f⁽ᵏ⁾(a)/k! is exact; it prints as a fraction when it is one.
- The error band is Lagrange's bound M|x − a|ⁿ⁺¹/(n + 1)!, with M the largest |f⁽ⁿ⁺¹⁾| between a and x (on the pixel grid for the band, 400 steps for the readout). The green column is found by stepping out from a and bisecting where |f − Tₙ| = tolerance × |f|.
- R is the distance from a to the nearest pole, branch point or corner, found by Newton's method in the complex plane on the zeros of denominators and of the insides of ln, roots, tan, arcsin and arctan; each point is checked with a small loop around it, so a removable point (sin x/x at 0) does not count. The root test |c_n|^(−1/n) is shown beside it and tends to R.
- In Build a series the coefficients are exact fractions carried through each step; x → s·xᵐ changes R to (R/|s|)^(1/m), and d/dx and ∫₀ˣ keep R.
