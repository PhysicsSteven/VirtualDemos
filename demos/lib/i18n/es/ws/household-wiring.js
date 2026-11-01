/* ws/household-wiring in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/household-wiring', {
"Hot current (A)":
  "Corriente de fase (A)",
"Neutral current (A)":
  "Corriente de neutro (A)",
"Ground current (A)":
  "Corriente de tierra (A)",
"Current through the person (mA)":
  "Corriente a través de la persona (mA)",
"Outlet voltage (V)":
  "Voltaje en el contacto (V)",
"Power (W)":
  "Potencia (W)",
"Wire heat (W/m)":
  "Calor en el cable (W/m)",
"Protection":
  "Protección",
"Household Wiring and Electrical Safety | VirtualDemos":
  "Instalación eléctrica doméstica y seguridad eléctrica | VirtualDemos",
"Household Wiring and Electrical Safety":
  "Instalación eléctrica doméstica y seguridad eléctrica",
"<strong>Setups in the demo:</strong> A lamp; Toaster and kettle; Short circuit; Worn cord, grounded case; No ground, dry hand; No ground, wet hand.":
  "<strong>Configuraciones en la demo:</strong> Una lámpara; Tostador y hervidor; Cortocircuito; Cordón desgastado, carcasa aterrizada; Sin tierra, mano seca; Sin tierra, mano mojada.",
"<strong>Using the demo.</strong> One {#} V branch circuit runs from the service panel to a kitchen outlet in three wires: hot, neutral and ground. Appliances (a {#} W lamp, a {#} W toaster, a {#} W kettle and a {#} W space heater) plug in from the Appliances list. Wiring sets the copper wire ({#} or {#} gauge), the breaker ({#}, {#} or {#} A), the length of the run, a GFCI outlet and whether the ground wire is connected. Faults and people adds a fault (hot touching neutral, or hot touching the toaster’s metal case), a person touching the case with dry or wet skin, and a button to reset the breaker and the GFCI. Readouts show the currents in each wire and through the person, the voltage at the outlet, the power and the heat in the wire. Blind hides the currents and what the protection will do until a device trips.":
  "<strong>Uso de la demo.</strong> Un circuito derivado de {#} V va del tablero de servicio a un contacto de la cocina con tres cables: fase, neutro y tierra. Los aparatos (una lámpara de {#} W, un tostador de {#} W, un hervidor de {#} W y un calentador de {#} W) se conectan desde la lista Aparatos. Instalación fija el cable de cobre (calibre {#} o {#}), el interruptor ({#}, {#} o {#} A), la longitud del tramo, un contacto GFCI y si el cable de tierra está conectado. Fallas y personas agrega una falla (la fase tocando el neutro, o la fase tocando la carcasa metálica del tostador), una persona que toca la carcasa con la piel seca o mojada, y un botón para restablecer el interruptor y el GFCI. Las lecturas muestran las corrientes en cada cable y a través de la persona, el voltaje en el contacto, la potencia y el calor en el cable. A ciegas oculta las corrientes y lo que hará la protección hasta que un dispositivo se dispare.",
"<strong>What the demo models.</strong> Every appliance is a resistor, \\(R = (120\\ \\mathrm{V})^2/P\\) from its rating; the rms currents follow from Ohm’s law and Kirchhoff’s rules for the whole circuit, wires included (\\(\\rho = 1.68\\times10^{-8}\\ \\Omega\\cdot\\mathrm{m}\\) at {#} °C; {#} gauge is {#} mm across, {#} gauge {#} mm). The source is an ideal {#} V and the neutral and ground are bonded at the panel. A fault contact is {#} Ω (chosen). The person is {#} kΩ (dry) or {#} kΩ (wet), hand to feet, with a perfect path back through the floor (OpenStax §{#}). The breaker trips at once above {#} times its rating and after {#} s of any smaller overload (a chosen delay); the GFCI trips when the hot and neutral currents differ by more than {#} mA. Simulated data with no noise.":
  "<strong>Lo que modela la demo.</strong> Cada aparato es un resistor, \\(R = (120\\ \\mathrm{V})^2/P\\) a partir de su capacidad nominal; las corrientes rms se siguen de la ley de Ohm y de las reglas de Kirchhoff para todo el circuito, cables incluidos (\\(\\rho = 1.68\\times10^{-8}\\ \\Omega\\cdot\\mathrm{m}\\) a {#} °C; el calibre {#} mide {#} mm de diámetro, el calibre {#} {#} mm). La fuente es una fuente ideal de {#} V y el neutro y la tierra están unidos en el tablero. Un contacto de falla es de {#} Ω (elegido). La persona es de {#} kΩ (seca) o {#} kΩ (mojada), de mano a pies, con una trayectoria de regreso perfecta por el piso (OpenStax §{#}). El interruptor se dispara de inmediato por encima de {#} veces su capacidad nominal y después de {#} s ante cualquier sobrecarga menor (un retardo elegido); el GFCI se dispara cuando las corrientes de fase y de neutro difieren en más de {#} mA. Datos simulados sin ruido.",
"Find how the current in a household circuit depends on what is plugged in, how the wires heat and drop voltage, and which safety device protects the wiring and which protects a person.":
  "Encuentra cómo depende la corriente en un circuito doméstico de lo que está conectado, cómo se calientan los cables y cuánto voltaje pierden, y qué dispositivo de seguridad protege la instalación y cuál protege a una persona.",
"Outlets on one circuit are in parallel, so each appliance gets the full voltage and the currents add. An appliance rated \\(P\\) at \\(V = 120\\) V draws an rms current":
  "Los contactos de un mismo circuito están en paralelo, así que cada aparato recibe el voltaje completo y las corrientes se suman. Un aparato de potencia nominal \\(P\\) a \\(V = 120\\) V consume una corriente rms",
"\\[I = \\frac{P}{V},\\]":
  "\\[I = \\frac{P}{V},\\]",
"and the hot wire carries the sum. The copper wires have a small resistance, \\(R_w = \\rho L/A\\) each way, so the voltage at the outlet is lower than {#} V by \\(2IR_w\\) (out on the hot, back on the neutral), and each meter of wire turns \\(I^2\\rho/A\\) into heat. A breaker opens when the current exceeds its rating, to keep the wires from overheating; it must be matched to the wire’s gauge. Normally the hot and neutral currents are equal and the ground wire carries nothing. If the hot wire touches a metal case, the ground wire carries a large fault current back to the panel and the breaker trips. Without a ground the case sits at {#} V, and a person touching it carries a current \\(I = V/R_{\\text{body}}\\), far too small for a breaker to notice. A ground fault circuit interrupter (GFCI) compares the hot and neutral currents and opens the circuit when they differ by more than {#} mA. Effects of current through the body (OpenStax §{#}): sensation from about {#} mA, apparently harmless below {#} mA, sustained muscle contraction (unable to let go) from {#} to {#} mA and above, and above {#} mA through the heart, death may occur.":
  "y el cable de fase lleva la suma. Los cables de cobre tienen una resistencia pequeña, \\(R_w = \\rho L/A\\) en cada sentido, así que el voltaje en el contacto es menor que {#} V en \\(2IR_w\\) (de ida por la fase, de regreso por el neutro), y cada metro de cable convierte \\(I^2\\rho/A\\) en calor. Un interruptor se abre cuando la corriente supera su capacidad nominal, para evitar que los cables se sobrecalienten; debe elegirse según el calibre del cable. Normalmente las corrientes de fase y de neutro son iguales y el cable de tierra no lleva nada. Si el cable de fase toca una carcasa metálica, el cable de tierra lleva una gran corriente de falla de regreso al tablero y el interruptor se dispara. Sin tierra, la carcasa queda a {#} V, y una persona que la toca lleva una corriente \\(I = V/R_{\\text{body}}\\), demasiado pequeña para que un interruptor la note. Un interruptor de circuito por falla a tierra (GFCI) compara las corrientes de fase y de neutro y abre el circuito cuando difieren en más de {#} mA. Efectos de la corriente a través del cuerpo (OpenStax §{#}): sensación a partir de alrededor de {#} mA, aparentemente inofensiva por debajo de {#} mA, contracción muscular sostenida (sin poder soltar) de {#} a {#} mA y más, y por encima de {#} mA a través del corazón puede ocurrir la muerte.",
"Find the current drawn by the {#} W lamp, the {#} W toaster and the {#} W kettle at {#} V. What does the hot wire carry with the toaster and kettle together? Will a {#} A breaker hold?":
  "Encuentra la corriente que consumen la lámpara de {#} W, el tostador de {#} W y el hervidor de {#} W a {#} V. ¿Qué lleva el cable de fase con el tostador y el hervidor juntos? ¿Aguantará un interruptor de {#} A?",
"Find the resistance of {#} m of {#} gauge copper wire (diameter {#} mm). With a {#} A load, find the voltage drop over the hot and neutral together, and the heat per meter of hot wire.":
  "Encuentra la resistencia de {#} m de cable de cobre calibre {#} (diámetro {#} mm). Con una carga de {#} A, encuentra la caída de voltaje en la fase y el neutro juntos, y el calor por metro de cable de fase.",
"A person touches a live case at {#} V. Find the current with dry skin ({#} kΩ) and with wet skin ({#} kΩ). What does each feel like?":
  "Una persona toca una carcasa energizada a {#} V. Encuentra la corriente con piel seca ({#} kΩ) y con piel mojada ({#} kΩ). ¿Qué se siente en cada caso?",
"Why does a GFCI protect the person in Question {#} when a {#} A breaker does not?":
  "¿Por qué un GFCI protege a la persona de la Pregunta {#} cuando un interruptor de {#} A no lo hace?",
"Never open a service panel or work on household wiring; this lab is done entirely in the simulation. Do not use appliances with damaged cords, and keep electrical appliances away from water.":
  "Nunca abras un tablero de servicio ni trabajes en la instalación eléctrica de una casa; este laboratorio se hace completamente en la simulación. No uses aparatos con cordones dañados, y mantén los aparatos eléctricos lejos del agua.",
"Before each part, predict what the currents will be and whether the breaker or the GFCI will trip. Then measure.":
  "Antes de cada parte, predice cuáles serán las corrientes y si se disparará el interruptor o el GFCI. Luego mide.",
"<strong>Part {#}: appliances in parallel.</strong> With {#} m of {#} gauge wire and a {#} A breaker, measure the currents, the outlet voltage and the power with the lamp alone, the toaster alone, the lamp and the toaster together, and the toaster and the kettle together.":
  "<strong>Parte {#}: aparatos en paralelo.</strong> Con {#} m de cable calibre {#} y un interruptor de {#} A, mide las corrientes, el voltaje en el contacto y la potencia con la lámpara sola, el tostador solo, la lámpara y el tostador juntos, y el tostador y el hervidor juntos.",
"<strong>Part {#}: the wires.</strong> With the space heater alone, measure the outlet voltage and the heat in the wire with {#} gauge wire {#}, {#}, {#}, {#} and {#} m long, then with {#} gauge wire {#} m long.":
  "<strong>Parte {#}: los cables.</strong> Con el calentador solo, mide el voltaje en el contacto y el calor en el cable con cable calibre {#} de {#}, {#}, {#}, {#} y {#} m de largo, luego con cable calibre {#} de {#} m de largo.",
"<strong>Part {#}: sizing the breaker.</strong> With the toaster and the kettle on {#} m of {#} gauge wire, measure with a {#} A, a {#} A and a {#} A breaker; note which trip. Then try {#} gauge wire with the {#} A breaker.":
  "<strong>Parte {#}: elección del interruptor.</strong> Con el tostador y el hervidor en {#} m de cable calibre {#}, mide con un interruptor de {#} A, uno de {#} A y uno de {#} A; anota cuáles se disparan. Luego prueba cable calibre {#} con el interruptor de {#} A.",
"<strong>Part {#}: faults.</strong> Measure the currents and the protection in each fault setup: the short circuit; the worn cord with the case grounded and a person touching it; the case not grounded with a dry hand; the same with a wet hand; and the wet hand with a GFCI outlet.":
  "<strong>Parte {#}: fallas.</strong> Mide las corrientes y la protección en cada configuración de falla: el cortocircuito; el cordón desgastado con la carcasa aterrizada y una persona tocándola; la carcasa sin aterrizar con una mano seca; lo mismo con una mano mojada; y la mano mojada con un contacto GFCI.",
"<strong>Using the virtual apparatus.</strong> A tripped breaker or GFCI stays open until you reset it; reset it before each new reading. A reading taken after a trip records the currents just before the device opened. Blind hides the currents until something trips, so turn it off to record. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> Un interruptor o un GFCI disparado se queda abierto hasta que lo restableces; restablécelo antes de cada lectura nueva. Una lectura tomada después de un disparo registra las corrientes justo antes de que el dispositivo se abriera. A ciegas oculta las corrientes hasta que algo se dispara, así que desactívalo para registrar. Envía cada parte a la hoja de trabajo antes de borrar, para que cada parte tenga su propia copia de la tabla de datos.",
"<span>C</span>Hot current (A)":
  "<span>C</span>Corriente de fase (A)",
"<span>D</span>Neutral current (A)":
  "<span>D</span>Corriente de neutro (A)",
"<span>E</span>Ground current (A)":
  "<span>E</span>Corriente de tierra (A)",
"<span>F</span>Current through the person (mA)":
  "<span>F</span>Corriente a través de la persona (mA)",
"<span>G</span>Outlet voltage (V)":
  "<span>G</span>Voltaje en el contacto (V)",
"<span>H</span>Power (W)":
  "<span>H</span>Potencia (W)",
"<span>I</span>Wire heat (W/m)":
  "<span>I</span>Calor en el cable (W/m)",
"<span>J</span>Protection":
  "<span>J</span>Protección",
"Hot current (A), row {#}":
  "Corriente de fase (A), fila {#}",
"Neutral current (A), row {#}":
  "Corriente de neutro (A), fila {#}",
"Ground current (A), row {#}":
  "Corriente de tierra (A), fila {#}",
"Current through the person (mA), row {#}":
  "Corriente a través de la persona (mA), fila {#}",
"Outlet voltage (V), row {#}":
  "Voltaje en el contacto (V), fila {#}",
"Power (W), row {#}":
  "Potencia (W), fila {#}",
"Wire heat (W/m), row {#}":
  "Calor en el cable (W/m), fila {#}",
"Protection, row {#}":
  "Protección, fila {#}",
"For Part {#}, compare each hot current with the sum of \\(P/V\\) for the appliances plugged in. Why is the measured current a little less, and why is the power a little less than the ratings?":
  "Para la Parte {#}, compara cada corriente de fase con la suma de \\(P/V\\) de los aparatos conectados. ¿Por qué la corriente medida es un poco menor, y por qué la potencia es un poco menor que las capacidades nominales?",
"For Part {#}, find the resistance of the wire for each length from the drop below {#} V, \\(\\Delta V = 2IR_w\\), and divide by the length. Compare the mean resistance per meter with \\(\\rho/A\\) for {#} gauge and for {#} gauge. Is the drop proportional to the length? Why not exactly? How much does {#} gauge improve the voltage and the heating at {#} m?":
  "Para la Parte {#}, encuentra la resistencia del cable para cada longitud a partir de la caída por debajo de {#} V, \\(\\Delta V = 2IR_w\\), y divide entre la longitud. Compara la resistencia media por metro con \\(\\rho/A\\) para calibre {#} y para calibre {#}. ¿Es la caída proporcional a la longitud? ¿Por qué no exactamente? ¿Cuánto mejora el calibre {#} el voltaje y el calentamiento a {#} m?",
"For Part {#}, explain which breakers trip and which do not, and why a {#} A breaker on {#} gauge wire is dangerous even though nothing trips. Use the heat per meter of wire.":
  "Para la Parte {#}, explica qué interruptores se disparan y cuáles no, y por qué un interruptor de {#} A en cable calibre {#} es peligroso aunque nada se dispare. Usa el calor por metro de cable.",
"For Part {#}, explain each result: which device acted, how large the current was, and whether the person was safe. Why does the ground wire make the breaker trip, and why can the GFCI act when the breaker cannot?":
  "Para la Parte {#}, explica cada resultado: qué dispositivo actuó, qué tan grande fue la corriente y si la persona estuvo a salvo. ¿Por qué el cable de tierra hace que se dispare el interruptor, y por qué el GFCI puede actuar cuando el interruptor no puede?",
"The simulation solves the circuit exactly, and readings are shown to three or four significant figures, so the results carry no measurement scatter. The approximations are in the model: appliances as fixed resistors (a lamp’s filament has a much lower resistance when cold), copper at {#} °C (its resistance rises about {#} % per kelvin as it heats), an ideal {#} V supply, and fixed body resistances, where real values vary widely with contact area, moisture and the path through the body.":
  "La simulación resuelve el circuito exactamente, y las lecturas se muestran a tres o cuatro cifras significativas, así que los resultados no tienen dispersión de medición. Las aproximaciones están en el modelo: aparatos como resistores fijos (el filamento de una lámpara tiene una resistencia mucho menor en frío), cobre a {#} °C (su resistencia sube alrededor de {#} % por kelvin al calentarse), una fuente ideal de {#} V y resistencias corporales fijas, cuando los valores reales varían mucho con el área de contacto, la humedad y la trayectoria a través del cuerpo.",
"Why are household appliances connected in parallel and not in series?":
  "¿Por qué los aparatos domésticos se conectan en paralelo y no en serie?",
"Why does a three prong plug have a ground pin, and why is cutting it off dangerous?":
  "¿Por qué una clavija de tres patas tiene una pata de tierra, y por qué es peligroso cortarla?",
"Why are GFCI outlets required in bathrooms and kitchens?":
  "¿Por qué se exigen contactos GFCI en baños y cocinas?",
"A breaker trips each time two appliances run together. Why is replacing it with a larger breaker the wrong fix?":
  "Un interruptor se dispara cada vez que dos aparatos funcionan juntos. ¿Por qué reemplazarlo por un interruptor más grande es la solución equivocada?",
"Prelab answers, a Data table copy for each part, the resistance per meter from Part {#}, your explanations of each fault, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, una copia de la tabla de datos para cada parte, la resistencia por metro de la Parte {#}, tus explicaciones de cada falla y las respuestas a las preguntas. Identifica los datos simulados.",
"Cross section of the wire":
  "Sección transversal del cable",
"rms current":
  "Corriente rms",
"Length of the wire":
  "Longitud del cable",
"Power rating of an appliance":
  "Potencia nominal de un aparato",
"Resistance of an appliance":
  "Resistencia de un aparato",
"Resistance of a person's body":
  "Resistencia del cuerpo de una persona",
"Resistance of one wire":
  "Resistencia de un cable",
"Voltage":
  "Voltaje",
"Resistivity of copper":
  "Resistividad del cobre",
"Household Wiring":
  "Instalación eléctrica doméstica"
});
