/* ws/ink-jet-printer in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/ink-jet-printer', {
"Drop diameter (μm)":
  "Diámetro de la gota (μm)",
"Drop speed v (m/s)":
  "Rapidez de la gota v (m/s)",
"Charge q (pC)":
  "Carga q (pC)",
"Plate voltage V (V)":
  "Voltaje de las placas V (V)",
"Drop mass (ng)":
  "Masa de la gota (ng)",
"Height on the paper y (mm)":
  "Altura en el papel y (mm)",
"Gravity’s part (μm)":
  "Parte de la gravedad (μm)",
"Ink Jet Printer | VirtualDemos":
  "Impresora de inyección de tinta | VirtualDemos",
"Ink Jet Printer":
  "Impresora de inyección de tinta",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (and §{#}, §{#}). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (y §{#}, §{#}). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Machines in the demo:</strong> Van de Graaff generator; Ink jet printer; Smoke precipitator. This worksheet uses the printer.":
  "<strong>Máquinas en la demo:</strong> Generador de Van de Graaff; Impresora de inyección de tinta; Precipitador de humo. Esta hoja de trabajo usa la impresora.",
"<strong>Using the demo.</strong> A continuous ink jet: drops pass a charging electrode, then fly between two deflection plates and on to the paper. The Printer section sets the charge on each drop \\(q\\), the plate voltage, the drop diameter and the drop speed. Fire one drop sends a single drop; Print PHYS works out the charge for each dot, as a printer’s controller does. Drops with too little charge fly into the gutter; drops with too much hit a plate. A millimeter scale stands beside the paper. Blind hides the drop charge, \\(q/m\\) and the deflections, but not the scale.":
  "<strong>Uso de la demo.</strong> Una inyección de tinta continua: las gotas pasan por un electrodo de carga, luego vuelan entre dos placas de deflexión y siguen hasta el papel. La sección Impresora fija la carga de cada gota \\(q\\), el voltaje de las placas, el diámetro de la gota y la rapidez de la gota. Disparar una gota envía una sola gota; Imprimir PHYS calcula la carga de cada punto, como lo hace el controlador de una impresora. Las gotas con muy poca carga van al canal de recolección; las que tienen demasiada chocan con una placa. Hay una escala milimétrica junto al papel. A ciegas oculta la carga de la gota, \\(q/m\\) y las deflexiones, pero no la escala.",
"<strong>What the demo models.</strong> Plates {#} mm long and {#} mm apart, with the paper {#} mm past their end; the lower plate is at the voltage set and the upper one grounded, so the field points up and positive drops bend up. The field is uniform between the plates and zero outside them (no fringing). Each drop is a water sphere of density {#} kg/m³ moving at a constant horizontal speed; gravity is included and air drag is left out (an isolated drop would lose about a third of its speed over this path; in a real stream the drops ride in each other’s wake and lose much less). Drawn to scale, in slow motion. Simulated data.":
  "<strong>Lo que modela la demo.</strong> Placas de {#} mm de largo y separadas {#} mm, con el papel {#} mm más allá de su extremo; la placa inferior está al voltaje fijado y la superior conectada a tierra, así que el campo apunta hacia arriba y las gotas positivas se desvían hacia arriba. El campo es uniforme entre las placas y cero fuera de ellas (sin efectos de borde). Cada gota es una esfera de agua de densidad {#} kg/m³ que se mueve a rapidez horizontal constante; se incluye la gravedad y se omite la resistencia del aire (una gota aislada perdería cerca de un tercio de su rapidez en este recorrido; en un chorro real las gotas van en la estela unas de otras y pierden mucho menos). Dibujado a escala, en cámara lenta. Datos simulados.",
"Find how far a charged ink drop is deflected on its way to the paper, test how the deflection depends on the charge, the plate voltage and the speed, and find the charge on a drop from where it lands.":
  "Encuentra cuánto se desvía una gota de tinta cargada en su camino al papel, pon a prueba cómo depende la deflexión de la carga, del voltaje de las placas y de la rapidez, y encuentra la carga de una gota a partir de dónde cae.",
"A drop of mass \\(m\\) and charge \\(q\\) enters the space between the plates, where the field is \\(E = V/d_{\\text{gap}}\\), moving horizontally at speed \\(v\\). It feels a constant sideways force \\(qE\\), so like a projectile it follows a parabola while between the plates, which takes \\(t_1 = L/v\\):":
  "Una gota de masa \\(m\\) y carga \\(q\\) entra al espacio entre las placas, donde el campo es \\(E = V/d_{\\text{gap}}\\), moviéndose horizontalmente con rapidez \\(v\\). Siente una fuerza lateral constante \\(qE\\), así que como un proyectil sigue una parábola mientras está entre las placas, lo que le toma \\(t_1 = L/v\\):",
"\\[y_1 = \\frac12\\,\\frac{qE}{m}\\,t_1^2.\\]":
  "\\[y_1 = \\frac12\\,\\frac{qE}{m}\\,t_1^2.\\]",
"It leaves the plates moving sideways at \\((qE/m)\\,t_1\\) and then flies straight for the time \\(t_2 = D/v\\) to the paper, so the height at which it lands is":
  "Sale de las placas moviéndose lateralmente a \\((qE/m)\\,t_1\\) y luego vuela en línea recta durante el tiempo \\(t_2 = D/v\\) hasta el papel, así que la altura a la que cae es",
"\\[y = \\frac{qE}{m}\\,t_1\\left(\\frac{t_1}{2} + t_2\\right) = \\frac{qV}{m\\,d_{\\text{gap}}\\,v^2}\\,L\\left(\\frac{L}{2} + D\\right),\\]":
  "\\[y = \\frac{qE}{m}\\,t_1\\left(\\frac{t_1}{2} + t_2\\right) = \\frac{qV}{m\\,d_{\\text{gap}}\\,v^2}\\,L\\left(\\frac{L}{2} + D\\right),\\]",
"less a small drop from gravity, \\(\\tfrac12 g(t_1 + t_2)^2\\). A drop of diameter \\(d\\) has \\(m = \\rho\\pi d^3/6\\). The height is proportional to \\(q\\) and to \\(V\\), and to \\(1/v^2\\). Here \\(L = 10.0\\) mm, \\(d_{\\text{gap}} = 2.0\\) mm and \\(D = 15.0\\) mm.":
  "menos una pequeña caída por la gravedad, \\(\\tfrac12 g(t_1 + t_2)^2\\). Una gota de diámetro \\(d\\) tiene \\(m = \\rho\\pi d^3/6\\). La altura es proporcional a \\(q\\) y a \\(V\\), y a \\(1/v^2\\). Aquí \\(L = 10.0\\) mm, \\(d_{\\text{gap}} = 2.0\\) mm y \\(D = 15.0\\) mm.",
"Find the mass of a {#} μm water drop and the field between the plates at {#} V.":
  "Encuentra la masa de una gota de agua de {#} μm y el campo entre las placas a {#} V.",
"Find the height on the paper of a {#} μm drop carrying {#} pC, moving at {#} m/s, with {#} V on the plates. How many electrons’ worth of charge is that?":
  "Encuentra la altura en el papel de una gota de {#} μm que lleva {#} pC, moviéndose a {#} m/s, con {#} V en las placas. ¿A cuántos electrones equivale esa carga?",
"How far does gravity pull that drop down on its way to the paper? Why can a printer ignore it?":
  "¿Cuánto baja esa gota por la gravedad en su camino al papel? ¿Por qué una impresora puede ignorarlo?",
"By what factor does the height change if the drop moves twice as fast? If its diameter doubles at the same charge?":
  "¿En qué factor cambia la altura si la gota se mueve el doble de rápido? ¿Y si su diámetro se duplica con la misma carga?",
"Real continuous ink jet printers use kilovolts on the deflection plates; keep covers closed while they run. Ink and its solvents can irritate the skin and eyes.":
  "Las impresoras reales de inyección de tinta continua usan kilovolts en las placas de deflexión; mantén las tapas cerradas mientras funcionan. La tinta y sus solventes pueden irritar la piel y los ojos.",
"<strong>Part {#}: charge.</strong> With {#} μm drops at {#} m/s and {#} V on the plates, fire a drop at charges from {#} to {#} pC in steps of {#} pC, and record where each lands.":
  "<strong>Parte {#}: carga.</strong> Con gotas de {#} μm a {#} m/s y {#} V en las placas, dispara una gota con cargas de {#} a {#} pC en pasos de {#} pC, y registra dónde cae cada una.",
"<strong>Part {#}: plate voltage and speed.</strong> With {#} pC on {#} μm drops, record the height at plate voltages of {#}, {#}, {#} and {#} V (at {#} m/s), then at speeds of {#}, {#}, {#}, {#} and {#} m/s (at {#} V).":
  "<strong>Parte {#}: voltaje de las placas y rapidez.</strong> Con {#} pC en gotas de {#} μm, registra la altura con voltajes de las placas de {#}, {#}, {#} y {#} V (a {#} m/s), y luego con rapideces de {#}, {#}, {#}, {#} y {#} m/s (a {#} V).",
"<strong>Part {#}: an unknown charge.</strong> Turn Blind on, and have a partner set the drop charge without telling you ({#} μm, {#} m/s, {#} V). Fire a drop, read where it lands on the scale beside the paper, and type the height into the table. Repeat for two more charges.":
  "<strong>Parte {#}: una carga desconocida.</strong> Activa A ciegas, y pide a un compañero que fije la carga de la gota sin decírtela ({#} μm, {#} m/s, {#} V). Dispara una gota, lee dónde cae en la escala junto al papel y escribe la altura en la tabla. Repite con dos cargas más.",
"<strong>Using the virtual apparatus.</strong> Blind leaves the charge and height cells blank for you to fill from the scale. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> A ciegas deja vacías las celdas de carga y altura para que las llenes a partir de la escala. Envía cada parte a la hoja de trabajo antes de borrar, para que cada parte tenga su propia copia de la tabla de Datos.",
"<span>B</span>Drop diameter (μm)":
  "<span>B</span>Diámetro de la gota (μm)",
"<span>C</span>Drop speed \\(v\\) (m/s)":
  "<span>C</span>Rapidez de la gota \\(v\\) (m/s)",
"<span>D</span>Charge \\(q\\) (pC)":
  "<span>D</span>Carga \\(q\\) (pC)",
"<span>E</span>Plate voltage \\(V\\) (V)":
  "<span>E</span>Voltaje de las placas \\(V\\) (V)",
"<span>F</span>Drop mass (ng)":
  "<span>F</span>Masa de la gota (ng)",
"<span>G</span>Height on the paper \\(y\\) (mm)":
  "<span>G</span>Altura en el papel \\(y\\) (mm)",
"<span>H</span>Gravity’s part (μm)":
  "<span>H</span>Parte de la gravedad (μm)",
"Drop diameter (μm), row {#}":
  "Diámetro de la gota (μm), fila {#}",
"Drop speed v (m/s), row {#}":
  "Rapidez de la gota v (m/s), fila {#}",
"Charge q (pC), row {#}":
  "Carga q (pC), fila {#}",
"Plate voltage V (V), row {#}":
  "Voltaje de las placas V (V), fila {#}",
"Drop mass (ng), row {#}":
  "Masa de la gota (ng), fila {#}",
"Height on the paper y (mm), row {#}":
  "Altura en el papel y (mm), fila {#}",
"Gravity’s part (μm), row {#}":
  "Parte de la gravedad (μm), fila {#}",
"Graph \\(y\\) against \\(q\\) for Part {#}. Find the slope and compare it with the Background’s formula. Which drops went into the gutter, and why? What is the largest charge that does not hit a plate?":
  "Grafica \\(y\\) contra \\(q\\) para la Parte {#}. Encuentra la pendiente y compárala con la fórmula de los Antecedentes. ¿Qué gotas fueron al canal de recolección, y por qué? ¿Cuál es la mayor carga que no choca con una placa?",
"For Part {#}, graph \\(y\\) against \\(V\\): is it a straight line through the origin? For the speeds, work out \\(yv^2\\) for each: is it the same, as the Background predicts?":
  "Para la Parte {#}, grafica \\(y\\) contra \\(V\\): ¿es una recta que pasa por el origen? Para las rapideces, calcula \\(yv^2\\) para cada una: ¿es igual, como predicen los Antecedentes?",
"For Part {#}, use your Part {#} line to find each unknown charge from its height, and the number of electrons it corresponds to. Then turn Blind off and check.":
  "Para la Parte {#}, usa tu recta de la Parte {#} para encontrar cada carga desconocida a partir de su altura, y el número de electrones al que corresponde. Luego desactiva A ciegas y comprueba.",
"The Rayleigh limit for a {#} μm water drop is about {#} pC. How close do the printer’s charges come to it?":
  "El límite de Rayleigh para una gota de agua de {#} μm es de unos {#} pC. ¿Qué tan cerca de él llegan las cargas de la impresora?",
"The model has no noise; in Parts {#} and {#} the heights are worked out exactly and shown to {#} μm. In Part {#} the height is read from the scale beside the paper, to about {#} mm, which sets the uncertainty in the charge you find. In a real printer, air drag slows the drops and depends on the drops ahead of them, the charge of each drop depends on its neighbors, and the plates’ field fringes beyond their ends; printers correct for all of these with calibrated charge tables.":
  "El modelo no tiene ruido; en las Partes {#} y {#} las alturas se calculan exactamente y se muestran con precisión de {#} μm. En la Parte {#} la altura se lee en la escala junto al papel, con precisión de unos {#} mm, lo que fija la incertidumbre de la carga que encuentras. En una impresora real, la resistencia del aire frena las gotas y depende de las gotas que van delante, la carga de cada gota depende de sus vecinas, y el campo de las placas se extiende más allá de sus extremos; las impresoras corrigen todo esto con tablas de carga calibradas.",
"Why are uncharged drops collected in a gutter and reused instead of being printed?":
  "¿Por qué las gotas sin carga se recogen en un canal y se reutilizan en lugar de imprimirse?",
"A printer makes a character by giving successive drops different charges. Why must the charge on each drop be controlled to better than about one percent?":
  "Una impresora forma un carácter dando cargas distintas a gotas sucesivas. ¿Por qué la carga de cada gota debe controlarse con una precisión mejor que más o menos uno por ciento?",
"Why would drops that are too highly charged be a problem, apart from hitting the plates?":
  "¿Por qué las gotas con demasiada carga serían un problema, aparte de chocar con las placas?",
"Prelab answers, a Data table copy for each part, the graphs and fits, the unknown charges with uncertainties, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, una copia de la tabla de Datos para cada parte, las gráficas y los ajustes, las cargas desconocidas con incertidumbres, y las respuestas a las preguntas. Identifica los datos simulados.",
"Distance from the plates to the paper":
  "Distancia de las placas al papel",
"Electric field between the plates":
  "Campo eléctrico entre las placas",
"Length of the plates":
  "Longitud de las placas",
"Plate voltage":
  "Voltaje de las placas",
"Drop diameter":
  "Diámetro de la gota",
"Gap between the plates":
  "Separación entre las placas",
"Mass of the drop":
  "Masa de la gota",
"Charge on the drop":
  "Carga de la gota",
"Density of the ink":
  "Densidad de la tinta",
"Time between the plates":
  "Tiempo entre las placas",
"Time from the plates to the paper":
  "Tiempo de las placas al papel",
"Drop speed":
  "Rapidez de la gota",
"Height on the paper":
  "Altura en el papel",
"Sideways deflection on leaving the plates":
  "Deflexión lateral al salir de las placas",
"Electrostatics at Work":
  "La electrostática en acción"
});
