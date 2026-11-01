/* English strings of notes/displacement-current, harvested by tools/i18n.cjs (do not edit by hand: harvest again) */
VDI18N.add('en', 'notes/displacement-current', [
"Displacement Current: teaching notes",
"Displacement Current",
"Ampère's law with only conduction current gives two different answers for the same loop around a charging capacitor's wire, depending on which surface you choose.",
"Maxwell's fix: a changing electric field counts as a current, I_d = ε₀ dΦ_E/dt. Between the plates it equals the wire's current exactly.",
"So there is a magnetic field between the plates, circling the axis, even though no charge crosses the gap.",
"<strong>Loop around the wire.</strong> Flat disk: the wire carries I through it; ∮B·dl = μ₀I.",
"<strong>Same loop, surface through the gap.</strong> No wire crosses the bag; without displacement current ∮B·dl would be zero for the same loop. With it, I_d through the bag equals I.",
"<strong>Loop in the gap.</strong> A {#} cm loop between {#} cm plates encloses all the displacement current: B = μ₀I/({#}πr), the same as around the wire at that radius.",
"<strong>Small loop inside the plates.</strong> It encloses only r²/R² of I_d, so B grows in proportion to r inside, like inside a thick wire.",
"Press <strong>Charge</strong> and watch everything fall as the current dies away with τ = RC = {#} µs (slowed about {#}⁵ times).",
"<strong>Q1.</strong> Explain the contradiction Maxwell faced: for one loop around the wire, a flat disk is crossed by the current but a bag reaching between the plates is not. What does Ampère's law (without I_d) predict for each?",
"<strong>Q2.</strong> Show that ε₀ dΦ_E/dt between ideal parallel plates equals the current in the wire.",
"<strong>Q3.</strong> With I = {#} µA, find B on a {#} cm loop around the wire and on a {#} cm loop between the {#} cm plates. Find B on a {#} cm loop between the plates.",
"<strong>Q4.</strong> Why is it hard to measure this field in a classroom capacitor?",
"<strong>\"Displacement current is charge moving across the gap.\"</strong> No charge crosses; it is the changing E field.",
"<strong>\"Ampère's law applies only to the wire.\"</strong> It applies to any loop; the trouble is which surface to count through.",
"<strong>\"There's no B field between the plates.\"</strong> There is, circling the axis.",
"Ideal circular plates (R = {#} cm, gap {#} mm, C = {#} pF) with uniform E between them and no fringing; long straight wire of radius {#} mm; quasistatic fields; RC charging I = (V/R)e^(−t/RC).",
"B from Ampère–Maxwell with the enclosed conduction and displacement currents; around the wire B = μ₀I/({#}πr), between the plates μ₀I_d,enc/({#}πr) with I_d,enc = I r²/R² inside the plates.",
"The gap is drawn much wider than to scale. Real fields here are picotesla."
]);
