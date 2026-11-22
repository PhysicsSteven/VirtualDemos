---
title: Limits
level: Calculus I (OpenStax Calculus Vol 1 2.1 to 2.5, 4.6, 4.8) and Physics I (University Physics Vol 1 3.2)
time: 15 to 40 minutes
---
## What students should come away with

- The limit of f as x → a is the value f closes in on near a, never what f does at a. A hole, an undefined f(a) or a different f(a) does not change the limit.
- The limit exists only if both one sided limits exist and agree. A jump has two different one sided limits; 1/x blows up to −∞ and +∞; sin(1/x) never settles.
- The precise definition is a game: for every ε band about L there must be a δ window about a whose points (except a itself) all land in the band. The demo finds the largest δ, so "δ = ε/2 for 2x + 1" can be checked, not just claimed.
- Limits at infinity give horizontal asymptotes (the ratio of leading terms for a rational function); f(x) − (mx + b) → 0 gives a slant one; a bottom going to 0 with the top not gives a vertical one.
- L'Hôpital's rule: a 0/0 quotient has the same limit as f′/g′, applied again if that is 0/0 too.
- Physics is full of limits: the instantaneous velocity is the limit of average velocities, (1 − cos θ)/θ² → ½ is the small angle approximation of a pendulum's height, and terminal velocity is a limit at infinity.

## Before class

Nothing to install. Projector mode enlarges the picture and labels. Blind (Lab fold) hides the limits and δ so students can predict them first. Type any f and any point a (a number, pi/2, inf or -inf). Play zooms in toward the point ten times every 1.5 s (or out toward infinity). The lower graph shows the values as x closes in from each side, or L'Hôpital's f/g beside f′/g′.

## Running it in class

1. **sin x / x.** The opening setup. Ask what f(0) is (undefined, 0/0), then press Play. The curve flattens onto the hole at (0, 1).
2. **ε and δ.** Press ε and δ for a line. Drag ε and ask for the largest δ before reading it (Q1).
3. **A hole and a jump.** Press A hole, then A jump: a switch closes. Switch From the left and From the right and read the two sides (Q2, Q3).
4. **Blow ups and no limit.** Press 1/x, sin(1/x) and x sin(1/x). Ask which ones have a limit, and why the squeeze one does.
5. **Infinity.** Press Out to infinity, then Vertical asymptotes and A slant asymptote. Ask for N for a given ε (Q4).
6. **L'Hôpital.** Press L'Hôpital twice and open the lower graph's L'Hôpital tab (Q5).
7. **Physics.** Press Average velocity → instantaneous velocity, then (1 − cos θ)/θ², γ as v → c and Terminal velocity (Q6, Q7).

## Questions

**Q1.** For f(x) = 2x + 1 at a = 1, what is L? Find the largest δ for ε = 0.5 and for ε = 0.01, and explain why δ = ε/2 for every ε.

**Q2.** What is the limit of (x² − 1)/(x − 1) as x → 1, and what is f(1)? What is the largest δ for ε = 0.3? How could f be fixed so that it is continuous at 1?

**Q3.** For the switch, V = 5(1 + sign t)/2 volts, give the limits from the left and from the right at t = 0 and the value V(0). Why does no L work for any ε of 2.5 V or less?

**Q4.** Find the limit of (3x² + 1)/(x² − 4) as x → ∞ and the smallest N for ε = 0.1. Where are its vertical asymptotes, and what are the one sided limits at x = 2?

**Q5.** Use L'Hôpital's rule to find the limit of (eˣ − 1 − x)/x² as x → 0. How many times must it be applied, and why? Check sin x / x the same way.

**Q6.** A ball falls from rest, y = ½gt². Write its average velocity from t = 2 s to 2 s + Δt and simplify. What is it for Δt = 0.1 s, what is its limit as Δt → 0, and what is the largest δ (in seconds) for ε = 1 m/s?

**Q7.** A pendulum of length 1.0 m swings to θ = 0.20 rad. Compare its height h = L(1 − cos θ) with ½Lθ². Why does (1 − cos θ)/θ² → ½ justify the small angle energy? For the falling body with terminal speed 50 m/s, how long until v stays within 1 m/s of it?

## Common misconceptions

- **"The limit is f(a)."** Only when f is continuous at a. sin x / x has no value at 0 and still has limit 1; the limit never looks at a itself.
- **"If f(a) is undefined, there is no limit."** A hole has a limit; a vertical asymptote or a jump does not.
- **"∞ is the limit of 1/x²."** It is shorthand: the values grow past every bound, so the limit does not exist as a number.
- **"A function never crosses its horizontal asymptote."** It can, many times: sin x / x crosses y = 0 at every multiple of π and still → 0 as x → ∞.
- **"0/0 = 1" or "0/0 = 0."** 0/0 is a form with no value of its own; the limit depends on how fast the top and bottom go to 0.
- **"L'Hôpital means the derivative of the quotient."** It is the quotient of the derivatives, f′/g′, and only for 0/0 or ∞/∞.

## How the demo works

- The function box is read by the shared parser (demos/lib/vdmath.js); nothing typed is run as code. The parser simplifies as it reads, so x/x becomes 1 before it is evaluated: a hole typed that way is gone.
- One sided limits are found by closing in: f at a ± h for h halved again and again down to rounding, with Aitken Δ² extrapolation and a settle test. A settled value is checked on a second run with h₀/√2 in place of h₀, because halving alone lands only on the zeros of sin(π/x) (and doubling only on those of sin(πx) toward infinity). Values that grow without settling blow up; values that keep turning back oscillate. Where f is continuous at a the limit is f(a), and where f is a 0/0 quotient L'Hôpital's rule is applied exactly by the derivative rules.
- The largest δ comes from a scan of each side at 2,000 points and halvings, refined by bisection, out to the view's half width and in to 10⁻⁵ × max(1, |a|) from a, where rounding starts to take the digits of x − a. Toward infinity, N is scanned inward from 10¹⁵.
- Zoomed in far, differences of nearly equal numbers (1 − cos θ, (2 + Δt)² − 4) turn to noise: that is the computer's rounding, shown on the values graph, not the function.
- g = 9.81 m/s² comes from constants.js; the terminal speed of 50 m/s is a chosen value.
