# Apparent Weight in an Elevator
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§5.2 and 5.4. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/elevator.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Rides in the demo:** Up to floor 10; Down to the ground; Up one floor; Down one floor; and Cable snaps during a ride.

**Using the demo.**

- A person stands on a bathroom scale in an elevator car. The Set up card on the picture sets **Your mass m**, the **Elevator acceleration (starting and stopping)**, the **Top speed** and the **Jerk** (how fast the acceleration changes); it fades away during a ride and comes back when you pause.
- The readouts give what the car is doing, its height, velocity and acceleration (up is positive), your weight $$mg$$, the scale's normal force $$N$$, the scale reading $$N/g$$ in kilograms, the net force and the ratio of apparent to true weight. Graphs show the scale reading and the velocity against time.
- **Instant starts and stops** is the textbook model: the acceleration jumps straight to its set value and holds. Without it the acceleration ramps up and down at the set jerk, as in a real elevator, so the scale reading changes gradually.
- **Cable snaps** during a ride: up to one second of free fall (less near the bottom of the shaft), then the safety brakes stop the car.
- Record reading stores the readouts at that moment (pause the ride to read a stage). Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the scale reading, the $$N$$ arrow and the scale graph, so you can predict each stage of a ride first. Nothing can be recorded while Blind is on.

**What the demo models.**

- $$g = 9.81\ \text{m/s}^2$$ and floors 3.0 m apart. The scale is massless and reads instantly; it shows $$N/g$$ in kilograms. A scale can only push, so it reads zero, not a negative number, if the car accelerates down faster than $$g$$.
- With the safety brakes on after the cable snaps, the car slows at a constant rate of at least $$g$$, more if that is needed to stop above the pit.

</details>

## Goal

Find out what a bathroom scale really measures, use its readings in an accelerating elevator to find your mass and $$g$$, and see why the reading at constant speed is the same as at rest.

## Background

A scale measures the normal force $$N$$ it exerts on you, not your weight $$mg$$ (§5.4). With up as positive, Newton's second law for you in the car is

$$N - mg = ma \quad\Rightarrow\quad N = m(g + a),$$

where $$a$$ is the car's acceleration (and yours, since you move with it). A bathroom scale is marked in kilograms: it shows $$N/g$$, so its reading is

$$R = \frac{N}{g} = m + \frac{m}{g}\,a.$$

A graph of the reading against the acceleration is a straight line with intercept $$m$$ and slope $$m/g$$. Only the acceleration matters, not the velocity: at rest and at any constant velocity there is no net force and the scale reads $$m$$ (Newton's first law, §5.2). In free fall, $$a = -g$$ and the scale reads zero.

## Before the lab

1. A 60 kg person stands on a scale in an elevator that speeds up going up at 1.5 m/s². Predict the normal force and the scale reading in kilograms.
2. For a ride from the ground to the top floor, predict whether the scale reads more than, less than or the same as at rest while the car speeds up, moves at constant speed and slows down. Repeat for a ride down.
3. The elevator slows down while going down. Is that like speeding up going up, or like speeding up going down? Explain using the direction of the acceleration.
4. What will the scale read if the cable snaps? Explain.

## Safety

There is no hazard in the simulation. In a real elevator stay clear of the doors and never try a test that involves the car's safety equipment.

## Procedure

**One ride.** Set the mass to 60 kg, the elevator acceleration to 1.5 m/s², the top speed to 3.0 m/s and use instant starts and stops. Ride up to floor 10 and back down to the ground. Record the scale reading at rest and at each stage of each ride: speeding up, constant speed and slowing down.

**Acceleration scan.** Keep 60 kg, instant starts and stops and the 3.0 m/s top speed. For elevator accelerations of 0.5, 1.0, 1.5, 2.0, 2.5 and 3.0 m/s², ride up to floor 10 and record the reading while the car speeds up and while it slows down. Ride back down to the ground between settings; a new acceleration applies from the next ride. Add one reading at rest.

**A second mass.** Set the mass to 90 kg and repeat the scan for accelerations of 1.0, 2.0 and 3.0 m/s², with one reading at rest.

**Cable snaps.** With 60 kg, ride down from floor 10 and let the cable snap while the car moves at constant speed. Record the scale during the free fall and while the safety brakes stop the car.

**Using the virtual apparatus.** Pause the ride to read a stage, record, then resume. Blind must be off to record. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Reading | Stage of the ride | Mass $$m$$ (kg) | Acceleration $$a$$, up + (m/s²) | Velocity $$v$$, up + (m/s) | Normal force $$N$$ (N) | Scale reading $$R$$ (kg) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Keep the one ride, the two scans and the cable snap readings in separate copies of the table.

## Analysis

1. From the one ride, compare the readings at rest and at constant speed, going up and going down. What does the scale tell you about the car's velocity?
2. Graph the scale reading $$R$$ against the acceleration $$a$$ for the 60 kg scan and fit a line. From the intercept find $$m$$, and from the intercept and the slope find $$g$$. Inspect the residuals.
3. Do the same for the 90 kg scan. How do the slopes of the two lines compare, and why?
4. For the cable snap readings, compare the scale reading in free fall and during braking with $$N = m(g + a)$$. How many times your true weight did the scale show during braking?
5. Find two stages of the one ride, one going up and one going down, that gave the same reading. Explain why they agree.

## Uncertainty

The scale reads to 0.1 kg and the acceleration readout to 0.01 m/s²; the mass is an exact setting. Estimate how the 0.1 kg rounding limits $$g$$ from your fit, and compare with the standard errors of the slope and intercept. With gradual starts and stops the reading changes during each stage, so a reading and an acceleration taken at different moments would not match. On a real scale add its response time, the springiness of the floor and the car's vibration.

## Questions

1. Does your weight change in an accelerating elevator? What does the scale's reading measure, and what is meant by apparent weight?
2. Why can a scale in a closed elevator not tell rest from motion at constant velocity, but can tell when the car accelerates?
3. Astronauts in an orbiting space station float, although gravity there is about 90% as strong as at the ground. Use your free fall reading to explain why.
4. In a real elevator the scale reading changes gradually at the start and end of a ride. What about the motion makes that happen?

## What to hand in

Prelab answers, the four table copies with the graphs and fits for both scans, $$m$$ and $$g$$ from each scan with uncertainties, the cable snap comparison, the uncertainty discussion and answers to the questions. Identify simulated data.
