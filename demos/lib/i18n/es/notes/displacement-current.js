/* notes/displacement-current in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'notes/displacement-current', {
"Displacement Current: teaching notes":
  "Corriente de desplazamiento: notas para el docente",
"Displacement Current":
  "Corriente de desplazamiento",
"Ampère's law with only conduction current gives two different answers for the same loop around a charging capacitor's wire, depending on which surface you choose.":
  "La ley de Ampère con solo la corriente de conducción da dos respuestas distintas para la misma espira alrededor del cable de un capacitor que se carga, según la superficie que elijas.",
"Maxwell's fix: a changing electric field counts as a current, I_d = ε₀ dΦ_E/dt. Between the plates it equals the wire's current exactly.":
  "La corrección de Maxwell: un campo eléctrico que cambia cuenta como una corriente, I_d = ε₀ dΦ_E/dt. Entre las placas es exactamente igual a la corriente del cable.",
"So there is a magnetic field between the plates, circling the axis, even though no charge crosses the gap.":
  "Así que hay un campo magnético entre las placas, que circula alrededor del eje, aunque ninguna carga cruce el hueco.",
"<strong>Loop around the wire.</strong> Flat disk: the wire carries I through it; ∮B·dl = μ₀I.":
  "<strong>Espira alrededor del cable.</strong> Disco plano: el cable lleva I a través de él; ∮B·dl = μ₀I.",
"<strong>Same loop, surface through the gap.</strong> No wire crosses the bag; without displacement current ∮B·dl would be zero for the same loop. With it, I_d through the bag equals I.":
  "<strong>Misma espira, superficie a través del hueco.</strong> Ningún cable cruza la bolsa; sin corriente de desplazamiento ∮B·dl sería cero para la misma espira. Con ella, I_d a través de la bolsa es igual a I.",
"<strong>Loop in the gap.</strong> A {#} cm loop between {#} cm plates encloses all the displacement current: B = μ₀I/({#}πr), the same as around the wire at that radius.":
  "<strong>Espira en el hueco.</strong> Una espira de {#} cm entre placas de {#} cm encierra toda la corriente de desplazamiento: B = μ₀I/({#}πr), igual que alrededor del cable a ese radio.",
"<strong>Small loop inside the plates.</strong> It encloses only r²/R² of I_d, so B grows in proportion to r inside, like inside a thick wire.":
  "<strong>Espira pequeña dentro de las placas.</strong> Encierra solo r²/R² de I_d, así que B crece en proporción a r dentro, como dentro de un cable grueso.",
"Press <strong>Charge</strong> and watch everything fall as the current dies away with τ = RC = {#} µs (slowed about {#}⁵ times).":
  "Oprime <strong>Cargar</strong> y observa cómo todo disminuye mientras la corriente se apaga con τ = RC = {#} µs (ralentizado unas {#}⁵ veces).",
"<strong>Q1.</strong> Explain the contradiction Maxwell faced: for one loop around the wire, a flat disk is crossed by the current but a bag reaching between the plates is not. What does Ampère's law (without I_d) predict for each?":
  "<strong>P1.</strong> Explica la contradicción que enfrentó Maxwell: para una espira alrededor del cable, un disco plano es atravesado por la corriente pero una bolsa que llega entre las placas no. ¿Qué predice la ley de Ampère (sin I_d) para cada una?",
"<strong>Q2.</strong> Show that ε₀ dΦ_E/dt between ideal parallel plates equals the current in the wire.":
  "<strong>P2.</strong> Muestra que ε₀ dΦ_E/dt entre placas paralelas ideales es igual a la corriente en el cable.",
"<strong>Q3.</strong> With I = {#} µA, find B on a {#} cm loop around the wire and on a {#} cm loop between the {#} cm plates. Find B on a {#} cm loop between the plates.":
  "<strong>P3.</strong> Con I = {#} µA, encuentra B en una espira de {#} cm alrededor del cable y en una espira de {#} cm entre las placas de {#} cm. Encuentra B en una espira de {#} cm entre las placas.",
"<strong>Q4.</strong> Why is it hard to measure this field in a classroom capacitor?":
  "<strong>P4.</strong> ¿Por qué es difícil medir este campo en un capacitor del salón de clases?",
"<strong>\"Displacement current is charge moving across the gap.\"</strong> No charge crosses; it is the changing E field.":
  "<strong>\"La corriente de desplazamiento es carga que se mueve a través del hueco.\"</strong> Ninguna carga cruza; es el campo E que cambia.",
"<strong>\"Ampère's law applies only to the wire.\"</strong> It applies to any loop; the trouble is which surface to count through.":
  "<strong>\"La ley de Ampère se aplica solo al cable.\"</strong> Se aplica a cualquier espira; el problema es a través de qué superficie contar.",
"<strong>\"There's no B field between the plates.\"</strong> There is, circling the axis.":
  "<strong>\"No hay campo B entre las placas.\"</strong> Sí lo hay, y circula alrededor del eje.",
"Ideal circular plates (R = {#} cm, gap {#} mm, C = {#} pF) with uniform E between them and no fringing; long straight wire of radius {#} mm; quasistatic fields; RC charging I = (V/R)e^(−t/RC).":
  "Placas circulares ideales (R = {#} cm, separación {#} mm, C = {#} pF) con E uniforme entre ellas y sin efectos de borde; cable largo y recto de radio {#} mm; campos cuasiestáticos; carga RC I = (V/R)e^(−t/RC).",
"B from Ampère–Maxwell with the enclosed conduction and displacement currents; around the wire B = μ₀I/({#}πr), between the plates μ₀I_d,enc/({#}πr) with I_d,enc = I r²/R² inside the plates.":
  "B a partir de Ampère–Maxwell con las corrientes de conducción y de desplazamiento encerradas; alrededor del cable B = μ₀I/({#}πr), entre las placas μ₀I_d,enc/({#}πr) con I_d,enc = I r²/R² dentro de las placas.",
"The gap is drawn much wider than to scale. Real fields here are picotesla.":
  "El hueco se dibuja mucho más ancho que a escala. Los campos reales aquí son de picoteslas."
});
