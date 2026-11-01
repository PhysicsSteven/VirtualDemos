/* notes/household-wiring in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'notes/household-wiring', {
"Household Wiring and Electrical Safety: teaching notes":
  "Instalación eléctrica doméstica y seguridad eléctrica: notas para el docente",
"Household Wiring and Electrical Safety":
  "Instalación eléctrica doméstica y seguridad eléctrica",
"Appliances on a branch circuit are in parallel, so their currents add. A circuit breaker on the hot wire limits that total to protect the wires from overheating (P = I²R in the wire), not to protect people.":
  "Los aparatos de un circuito derivado están en paralelo, así que sus corrientes se suman. Un interruptor termomagnético en el cable de fase limita ese total para proteger los cables del sobrecalentamiento (P = I²R en el cable), no para proteger a las personas.",
"A short circuit is limited only by the wires, so the current is hundreds of amperes and the breaker trips at once.":
  "Un cortocircuito está limitado solo por los cables, así que la corriente es de cientos de amperes y el interruptor se dispara de inmediato.",
"The ground wire gives a fault a low resistance path, so a live metal case trips the breaker instead of shocking someone.":
  "El cable de tierra da a una falla una trayectoria de baja resistencia, así que una carcasa metálica energizada dispara el interruptor en vez de electrocutar a alguien.",
"Without a ground, the person is the path. A shock of a few milliamperes is far too small for a breaker, but a GFCI sees the difference between the hot and neutral currents and trips above {#} mA.":
  "Sin tierra, la persona es la trayectoria. Una descarga de unos pocos miliamperes es demasiado pequeña para un interruptor, pero un GFCI detecta la diferencia entre las corrientes de fase y de neutro y se dispara por encima de {#} mA.",
"The same {#} V gives {#} mA through dry skin and {#} mA through wet skin (OpenStax §{#}): the body's resistance decides the danger.":
  "Los mismos {#} V dan {#} mA a través de piel seca y {#} mA a través de piel mojada (OpenStax §{#}): la resistencia del cuerpo decide el peligro.",
"Students need Ohm's law, power P = IV = I²R = V²/R, and series and parallel resistors. <strong>Blind</strong> hides the currents and whether a device will trip, so students can predict first.":
  "Los estudiantes necesitan la ley de Ohm, la potencia P = IV = I²R = V²/R y los resistores en serie y en paralelo. <strong>A ciegas</strong> oculta las corrientes y si un dispositivo se disparará, para que los estudiantes predigan primero.",
"<strong>A lamp.</strong> {#} A, the same in hot and neutral, none in the ground. Add the toaster and the kettle: {#} A on a {#} A breaker. Ask: is anything broken? The breaker trips after {#} s. Change to {#} gauge and {#} A: the wire is now rated for it, but the toaster and kettle still draw {#} A, so the {#} A breaker trips too; drop the kettle and it holds.":
  "<strong>Una lámpara.</strong> {#} A, la misma en fase y neutro, nada en tierra. Agrega el tostador y el hervidor: {#} A en un interruptor de {#} A. Pregunta: ¿hay algo descompuesto? El interruptor se dispara después de {#} s. Cambia a calibre {#} y {#} A: ahora el cable está especificado para eso, pero el tostador y el hervidor todavía consumen {#} A, así que el interruptor de {#} A también se dispara; quita el hervidor y aguanta.",
"<strong>The wrong breaker.</strong> {#} gauge wire on a {#} A breaker with the toaster, kettle and heater: the breaker holds (about {#} A), but the heat in the wire is {#} W per meter, nearly five times the {#} W/m at {#} A. This is why the breaker is matched to the wire.":
  "<strong>El interruptor equivocado.</strong> Cable calibre {#} en un interruptor de {#} A con el tostador, el hervidor y el calentador: el interruptor aguanta (alrededor de {#} A), pero el calor en el cable es {#} W por metro, casi cinco veces los {#} W/m a {#} A. Por eso el interruptor se elige según el cable.",
"<strong>Short circuit.</strong> About {#} A for {#} m of {#} gauge wire. Shorten the run: the current goes up.":
  "<strong>Cortocircuito.</strong> Alrededor de {#} A para {#} m de cable calibre {#}. Acorta el tramo: la corriente sube.",
"<strong>Worn cord, grounded case.</strong> The ground wire carries about {#} A and the breaker trips at once; the person in parallel gets only about {#} mA, for an instant.":
  "<strong>Cordón desgastado, carcasa aterrizada.</strong> El cable de tierra lleva alrededor de {#} A y el interruptor se dispara de inmediato; la persona en paralelo recibe solo alrededor de {#} mA, por un instante.",
"<strong>No ground, dry hand, then wet hand.</strong> {#} mA, then {#} mA, and the breaker does nothing. Turn on the GFCI and repeat.":
  "<strong>Sin tierra, mano seca y luego mano mojada.</strong> {#} mA, luego {#} mA, y el interruptor no hace nada. Activa el GFCI y repite.",
"<strong>Q1.</strong> A toaster ({#} W) and a kettle ({#} W) are plugged into one {#} V outlet. Ignoring the wires, what current do they draw together? Will a {#} A breaker hold? What about a {#} A breaker?":
  "<strong>P1.</strong> Un tostador ({#} W) y un hervidor ({#} W) están conectados a un contacto de {#} V. Sin tomar en cuenta los cables, ¿qué corriente consumen juntos? ¿Aguantará un interruptor de {#} A? ¿Y uno de {#} A?",
"<strong>Q2.</strong> {#} gauge copper wire is {#} mm in diameter. Find its resistance per meter (ρ = {#} × {#}⁻⁸ Ω·m) and the heat per meter at {#} A and at {#} A. Why must the breaker match the wire, and not the appliances?":
  "<strong>P2.</strong> El cable de cobre calibre {#} tiene {#} mm de diámetro. Encuentra su resistencia por metro (ρ = {#} × {#}⁻⁸ Ω·m) y el calor por metro a {#} A y a {#} A. ¿Por qué el interruptor debe elegirse según el cable y no según los aparatos?",
"<strong>Q3.</strong> The outlet is {#} m of {#} gauge wire from the panel. Hot touches neutral through {#} Ω at the outlet. Estimate the current. Why does the breaker trip at once?":
  "<strong>P3.</strong> El contacto está a {#} m de cable calibre {#} del tablero. La fase toca el neutro a través de {#} Ω en el contacto. Estima la corriente. ¿Por qué el interruptor se dispara de inmediato?",
"<strong>Q4.</strong> A person with wet hands ({#} kΩ, hand to feet) touches a live toaster case with no ground. Find the current and say what it does. Why does the {#} A breaker not trip? What does a GFCI measure, and why does it trip?":
  "<strong>P4.</strong> Una persona con las manos mojadas ({#} kΩ, de mano a pies) toca la carcasa energizada de un tostador sin tierra. Encuentra la corriente y di qué efecto tiene. ¿Por qué no se dispara el interruptor de {#} A? ¿Qué mide un GFCI y por qué se dispara?",
"<strong>Q5.</strong> With the ground wire connected, the same person touches the same faulty toaster. Explain, using parallel resistances, why almost no current goes through the person.":
  "<strong>P5.</strong> Con el cable de tierra conectado, la misma persona toca el mismo tostador con falla. Explica, usando resistencias en paralelo, por qué casi no pasa corriente por la persona.",
"<strong>\"The breaker protects people.\"</strong> It trips at amperes; a few milliamperes can be dangerous. The GFCI protects people.":
  "<strong>\"El interruptor protege a las personas.\"</strong> Se dispara con amperes; unos pocos miliamperes pueden ser peligrosos. El GFCI protege a las personas.",
"<strong>\"Voltage kills, so {#} V is always deadly.\"</strong> The current through the body depends on its resistance: dry skin keeps it below a milliampere.":
  "<strong>\"El voltaje mata, así que {#} V siempre son mortales.\"</strong> La corriente a través del cuerpo depende de su resistencia: la piel seca la mantiene por debajo de un miliampere.",
"<strong>\"The ground wire normally carries current.\"</strong> It carries current only during a fault.":
  "<strong>\"El cable de tierra normalmente lleva corriente.\"</strong> Lleva corriente solo durante una falla.",
"<strong>\"A bigger breaker is safer because it trips less.\"</strong> It lets the wires overheat.":
  "<strong>\"Un interruptor más grande es más seguro porque se dispara menos.\"</strong> Deja que los cables se sobrecalienten.",
"Appliances are resistors, R = V²/P at {#} V. The circuit (hot, neutral and ground wires, loads, fault and person) is solved exactly by nodal analysis for rms currents; with only resistors, rms values obey Ohm's and Kirchhoff's rules.":
  "Los aparatos son resistores, R = V²/P a {#} V. El circuito (cables de fase, neutro y tierra, cargas, falla y persona) se resuelve exactamente por análisis nodal para corrientes rms; con solo resistores, los valores rms cumplen las reglas de Ohm y de Kirchhoff.",
"Copper ρ = {#} × {#}⁻⁸ Ω·m; {#} gauge {#} mm, {#} gauge {#} mm. Fault contact {#} Ω (chosen). Neutral and ground bonded at the panel; the floor and earth path is taken as zero resistance.":
  "Cobre ρ = {#} × {#}⁻⁸ Ω·m; calibre {#} {#} mm, calibre {#} {#} mm. Contacto de la falla {#} Ω (elegido). Neutro y tierra unidos en el tablero; la trayectoria por el piso y la tierra se toma con resistencia cero.",
"Body resistance {#} kΩ dry, {#} kΩ wet; effects of current and the {#} mA GFCI setting from OpenStax §{#}. Breaker: instant above {#} times its rating, after {#} s for lesser overloads (a chosen delay).":
  "Resistencia del cuerpo {#} kΩ seca, {#} kΩ mojada; efectos de la corriente y el ajuste de {#} mA del GFCI según OpenStax §{#}. Interruptor: instantáneo por encima de {#} veces su capacidad nominal, después de {#} s para sobrecargas menores (un retardo elegido)."
});
