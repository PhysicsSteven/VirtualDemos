/* demo/wire-force in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'demo/wire-force', {
"Seen from above. B points from N to S (to the right).":
  "Visto desde arriba. B apunta de N a S (hacia la derecha).",
"F on the wire = {#} mN, down (into the page)":
  "F sobre el alambre = {#} mN, hacia abajo (hacia dentro de la página)",
"balance under the magnet (zeroed at I = {#})":
  "balanza bajo el imán (en cero con I = {#})",
"Force on a Current":
  "Fuerza sobre una corriente",
"A current in a magnetic field feels a force F = IL × B. Weigh that force on a balance to measure B, then put a loop of wire in the field: the forces on its sides make a torque, and with a commutator the loop becomes a motor.":
  "Una corriente en un campo magnético siente una fuerza F = IL × B. Pesa esa fuerza en una balanza para medir B, luego pon una espira de alambre en el campo: las fuerzas sobre sus lados producen una torca, y con un conmutador la espira se convierte en un motor.",
"Current balance: a wire between magnet poles on an electronic balance, shown in 3D (drag to turn) or flat from above. Loop: a coil seen from above between the poles, with the forces on its sides and its magnetic moment. Space starts or stops the loop.":
  "Balanza de corriente: un alambre entre los polos de un imán sobre una balanza electrónica, en 3D (arrastra para girar) o plano visto desde arriba. Espira: una bobina vista desde arriba entre los polos, con las fuerzas sobre sus lados y su momento magnético. Espacio inicia o detiene la espira.",
"Release the loop":
  "Soltar la espira",
"Supply and apparatus":
  "Fuente y aparato",
"Current I: click, or press Enter, to type a value":
  "Corriente I: haz clic, o pulsa Enter, para escribir un valor",
"Length of wire in the field L":
  "Longitud de alambre en el campo L",
"Length of wire in the field L: click, or press Enter, to type a value":
  "Longitud de alambre en el campo L: haz clic, o pulsa Enter, para escribir un valor",
"Angle between the wire and B":
  "Ángulo entre el alambre y B",
"Angle between the wire and B: click, or press Enter, to type a value":
  "Ángulo entre el alambre y B: haz clic, o pulsa Enter, para escribir un valor",
"Turns N":
  "Espiras N",
"Turns N: click, or press Enter, to type a value":
  "Vueltas N: haz clic, o pulsa Enter, para escribir un valor",
"Magnet field B":
  "Campo del imán B",
"Magnet field B: click, or press Enter, to type a value":
  "Campo del imán B: haz clic, o pulsa Enter, para escribir un valor",
"Current balance":
  "Balanza de corriente",
"Wire at an angle to B":
  "Alambre en ángulo con B",
"Loop: torque":
  "Espira: torca",
"DC motor":
  "Motor de CD",
"A wire runs between the poles of a magnet sitting on a balance. The magnetic force on the wire is matched by an equal and opposite force on the magnet, which the balance weighs. Step the current and record the reading: the slope of F against I is BL.":
  "Un alambre pasa entre los polos de un imán colocado sobre una balanza. La fuerza magnética sobre el alambre se equilibra con una fuerza igual y opuesta sobre el imán, que la balanza pesa. Cambia la corriente por pasos y registra la lectura: la pendiente de F en función de I es BL.",
"Settings":
  "Ajustes",
"Turn the knobs on the panel in the picture (or focus one and use the arrow keys).":
  "Gira las perillas del panel de la imagen (o enfoca una y usa las flechas).",
"<span>Mystery magnet: hide B</span>":
  "<span>Imán misterioso: ocultar B</span>",
"<span>Commutator (reverse the current every half turn)</span>":
  "<span>Conmutador (invierte la corriente cada media vuelta)</span>",
"Balance reading Δm":
  "Lectura de la balanza Δm",
"Wire in the field L":
  "Alambre en el campo L",
"Angle θ":
  "Ángulo θ",
"Predicted F = ILB sin θ":
  "F predicha = ILB sin θ",
"F = I L B sin θ · Δm = F/g":
  "F = I L B sin θ · Δm = F/g",
"Δm (g)":
  "Δm (g)",
"No readings yet. Set a current, then capture.":
  "Aún no hay lecturas. Fija una corriente y luego captura.",
"The balance was zeroed with no current, so it reads the magnet's apparent change in mass Δm = F/g (to {#} g). Record reading stores I, L and the reading; the fit is F = Δm g against I, |slope| = BL sin θ.":
  "La balanza se puso en cero sin corriente, así que lee el cambio aparente de masa del imán Δm = F/g (a {#} g). Registrar lectura guarda I, L y la lectura; el ajuste es F = Δm g en función de I, |pendiente| = BL sin θ.",
"Force against current for the captured rows, with a least squares line and residuals.":
  "Fuerza en función de la corriente para las filas capturadas, con una recta de mínimos cuadrados y residuos.",
"Record at least two currents with L = {#} cm and θ = {#}°.":
  "Registra al menos dos corrientes con L = {#} cm y θ = {#}°.",
"Blind hides the predicted force, torque and B from the fit, and draws arrows equal length. The balance reading, the meters and the settings stay.":
  "A ciegas oculta la fuerza predicha, la torca y la B del ajuste, y dibuja las flechas de igual longitud. La lectura de la balanza, los medidores y los ajustes se quedan.",
"Model: uniform field between the poles and zero outside (no fringing); the balance sees the reaction force on the magnet, which equals the force on the wire (Newton's third law). The loop is rectangular, {#} cm by {#} cm, mass {#} g, with a little friction at its axle; the supply holds the current fixed, so back emf is ignored (a real motor's speed is limited mainly by back emf). The loop is shown {#} times slower than real, the motor about {#} times slower; the rotation rate readout is real.":
  "Modelo: campo uniforme entre los polos y cero afuera (sin efectos de borde); la balanza registra la fuerza de reacción sobre el imán, que es igual a la fuerza sobre el alambre (tercera ley de Newton). La espira es rectangular, de {#} cm por {#} cm, masa {#} g, con un poco de fricción en su eje; la fuente mantiene fija la corriente, así que se ignora la fem inversa (la rapidez de un motor real está limitada sobre todo por la fem inversa). La espira se muestra {#} veces más lenta que en la realidad y el motor unas {#} veces más lento; la lectura de la frecuencia de giro es real.",
"<a>Magnetic forces and fields</a>":
  "<a>Fuerzas y campos magnéticos</a>",
"<a><span>←</span> <span>Charges in Magnetic Fields</span></a><a><span>Displacement Current</span> <span>→</span></a>":
  "<a><span>←</span> <span>Cargas en campos magnéticos</span></a><a><span>Corriente de desplazamiento</span> <span>→</span></a>",
"TARE":
  "TARA",
"B = {#} T, from N to S":
  "B = {#} T, de N a S",
"F on the wire = {#} mN, down":
  "F sobre el alambre = {#} mN, hacia abajo",
"equal and opposite force on the magnet: the balance reads it":
  "fuerza igual y opuesta sobre el imán: la balanza la lee",
"L = {#} cm in the field":
  "L = {#} cm en el campo",
"balance, zeroed at I = {#}":
  "balanza, en cero con I = {#}",
"Lines across the gap show the uniform field; the dots move with the current to show its direction, not its speed. Drag to turn the view.":
  "Las líneas a través del entrehierro muestran el campo uniforme; los puntos se mueven con la corriente para mostrar su sentido, no su rapidez. Arrastra para girar la vista.",
"Hold the loop":
  "Detener la espira",
"Only the part of the wire across the field counts: F = ILB sin θ. At θ = {#} the current runs along B and there is no force at all.":
  "Solo cuenta la parte del alambre que cruza el campo: F = ILB sin θ. Con θ = {#} la corriente va a lo largo de B y no hay ninguna fuerza.",
"Seen from above: the loop turns about an axis pointing out of the page.":
  "Visto desde arriba: la espira gira alrededor de un eje que apunta hacia fuera de la página.",
"Forces on the two sides across the field point opposite ways: a couple with torque τ = NIAB sin θ that turns μ toward B. Released, the loop swings about μ ∥ B and settles there, like a compass needle.":
  "Las fuerzas sobre los dos lados que cruzan el campo apuntan en sentidos opuestos: un par con torca τ = NIAB sin θ que gira μ hacia B. Al soltarla, la espira oscila alrededor de μ ∥ B y se queda ahí, como la aguja de una brújula.",
"τ = μ × B, |τ| = NIAB sin θ · U = −μ·B":
  "τ = μ × B, |τ| = NIAB sin θ · U = −μ·B",
"Angle of μ from B":
  "Ángulo de μ respecto a B",
"Rotation rate":
  "Frecuencia de giro",
"{#} rev/s":
  "{#} rev/s",
"Moment μ = NIA":
  "Momento μ = NIA",
"Torque now":
  "Torca ahora",
"Largest torque NIAB":
  "Torca máxima NIAB",
"U = −μ·B now":
  "U = −μ·B ahora",
"A commutator reverses the current each time μ lines up with B (the loop's plane across the field), so the torque keeps the same sense and the loop keeps turning: a DC motor. The torque is not steady; it is largest when the plane of the loop lies along B.":
  "Un conmutador invierte la corriente cada vez que μ se alinea con B (el plano de la espira perpendicular al campo), así que la torca mantiene el mismo sentido y la espira sigue girando: un motor de CD. La torca no es constante; es máxima cuando el plano de la espira está a lo largo de B.",
"−{#} mJ":
  "−{#} mJ",
"I, row {#}":
  "I, fila {#}",
"reading, row {#}":
  "lectura, fila {#}",
"Row {#} captured.":
  "Fila {#} capturada.",
"{#} turns, {#} cm square":
  "{#} vueltas, {#} cm de lado",
"commutator and brushes":
  "conmutador y escobillas"
});
