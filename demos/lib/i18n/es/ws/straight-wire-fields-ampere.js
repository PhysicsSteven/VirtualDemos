/* ws/straight-wire-fields-ampere in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/straight-wire-fields-ampere', {
"Current I₁ (A)":
  "Corriente I₁ (A)",
"Current I₂ (A)":
  "Corriente I₂ (A)",
"Amperian loop":
  "Lazo amperiano",
"Current through the loop (A)":
  "Corriente a través del lazo (A)",
"Circulation of B around the loop (μT·m)":
  "Circulación de B alrededor del lazo (μT·m)",
"With calculus":
  "Con cálculo",
"Ampère’s Law and Straight Wires | VirtualDemos":
  "La ley de Ampère y los alambres rectos | VirtualDemos",
"Ampère’s Law and Straight Wires":
  "La ley de Ampère y los alambres rectos",
"<strong>Where it is in the demo:</strong> Magnetic Fields of Currents, Straight wires view. The setups used here are Ampère’s law and One wire.":
  "<strong>Dónde está en la demo:</strong> Magnetic Fields of Currents, vista Straight wires. Los montajes que se usan aquí son Ampère’s law y One wire.",
"<strong>Using the demo.</strong> Long straight wires cross the page; a dot means current out of the page and a cross means current into it. Drag a wire, the probe or the Amperian loop; click a wire to set its current. The Amperian loop (circle or rectangle, either direction) shows the current through it and the numerical value of \\(\\oint \\vec B\\cdot d\\vec l\\) around it. Positions are in centimeters, to {#} cm.":
  "<strong>Uso de la demo.</strong> Alambres rectos y largos cruzan la página; un punto significa corriente que sale de la página y una cruz significa corriente que entra en ella. Arrastra un alambre, la sonda o el lazo amperiano; haz clic en un alambre para fijar su corriente. El lazo amperiano (círculo o rectángulo, en cualquier sentido) muestra la corriente que lo atraviesa y el valor numérico de \\(\\oint \\vec B\\cdot d\\vec l\\) alrededor de él. Las posiciones están en centímetros, con precisión de {#} cm.",
"<strong>What the demo models.</strong> Each wire is infinitely long and thin, with field \\(\\mu_0 I/(2\\pi r)\\) circling it, and the field of several wires is the vector sum. The demo does not use Ampère’s law to find \\(\\oint \\vec B\\cdot d\\vec l\\): it adds up \\(\\vec B\\cdot d\\vec l\\) around the loop numerically (adaptive Gauss and Kronrod quadrature, relative error below \\(10^{-10}\\)). \\(\\mu_0 = 1.25663706127\\times10^{-6}\\ \\mathrm{T\\cdot m/A}\\) (CODATA {#}). Simulated data.":
  "<strong>Qué modela la demo.</strong> Cada alambre es infinitamente largo y delgado, con un campo \\(\\mu_0 I/(2\\pi r)\\) que lo rodea, y el campo de varios alambres es la suma vectorial. La demo no usa la ley de Ampère para encontrar \\(\\oint \\vec B\\cdot d\\vec l\\): suma numéricamente \\(\\vec B\\cdot d\\vec l\\) alrededor del lazo (cuadratura adaptativa de Gauss y Kronrod, error relativo menor que \\(10^{-10}\\)). \\(\\mu_0 = 1.25663706127\\times10^{-6}\\ \\mathrm{T\\cdot m/A}\\) (CODATA {#}). Datos simulados.",
"Test Ampère’s law around loops of different shapes, sizes, positions and directions, and find what the circulation of the magnetic field depends on.":
  "Pon a prueba la ley de Ampère alrededor de lazos de distintas formas, tamaños, posiciones y sentidos, y halla de qué depende la circulación del campo magnético.",
"A long straight wire carrying current \\(I\\) makes a magnetic field that circles the wire, at right angles to the line from the wire, with size":
  "Un alambre recto y largo que lleva una corriente \\(I\\) produce un campo magnético que rodea el alambre, en ángulo recto con la línea que sale del alambre, de magnitud",
"\\[B = \\frac{\\mu_0 I}{2\\pi r}\\]":
  "\\[B = \\frac{\\mu_0 I}{2\\pi r}\\]",
"at a distance \\(r\\) (§{#}). Point your right thumb along the current: your fingers curl the way \\(\\vec B\\) goes. A current out of the page has a counterclockwise field.":
  "a una distancia \\(r\\) (§{#}). Apunta el pulgar derecho a lo largo de la corriente: tus dedos se curvan en el sentido de \\(\\vec B\\). Una corriente que sale de la página tiene un campo antihorario.",
"Ampère’s law says that around any closed loop,":
  "La ley de Ampère dice que alrededor de cualquier lazo cerrado,",
"\\[\\oint \\vec B\\cdot d\\vec l = \\mu_0 I_{\\text{enc}},\\]":
  "\\[\\oint \\vec B\\cdot d\\vec l = \\mu_0 I_{\\text{enc}},\\]",
"where \\(I_{\\text{enc}}\\) is the current through the loop, counted positive along your right thumb when your fingers curl along the loop’s direction (out of the page for a counterclockwise loop). Currents outside the loop change \\(\\vec B\\) on the loop but add nothing to the integral.":
  "donde \\(I_{\\text{enc}}\\) es la corriente a través del lazo, contada como positiva en el sentido de tu pulgar derecho cuando tus dedos se curvan en el sentido del lazo (hacia afuera de la página para un lazo en sentido antihorario). Las corrientes fuera del lazo cambian \\(\\vec B\\) sobre el lazo pero no aportan nada a la integral.",
"A loop surrounds a wire carrying {#} A out of the page and a wire carrying {#} A into the page. Find \\(\\oint \\vec B\\cdot d\\vec l\\) counterclockwise around the loop. Does the answer depend on where the wires are inside the loop, or on the loop’s shape?":
  "Un lazo rodea un alambre que lleva {#} A hacia afuera de la página y un alambre que lleva {#} A hacia adentro de la página. Encuentra \\(\\oint \\vec B\\cdot d\\vec l\\) en sentido antihorario alrededor del lazo. ¿Depende la respuesta de dónde están los alambres dentro del lazo, o de la forma del lazo?",
"A circle of radius {#} cm is centered on a long straight wire carrying {#} A out of the page. Find \\(B\\) on the circle, then work out \\(\\oint \\vec B\\cdot d\\vec l\\) counterclockwise around it, and compare with \\(\\mu_0 I_{\\text{enc}}\\).":
  "Un círculo de radio {#} cm está centrado en un alambre recto y largo que lleva {#} A hacia fuera de la página. Encuentra \\(B\\) en el círculo, luego calcula \\(\\oint \\vec B\\cdot d\\vec l\\) en sentido antihorario alrededor de él, y compáralo con \\(\\mu_0 I_{\\text{enc}}\\).",
"Move the circle of question {#} off to one side, so that it no longer surrounds the wire (still {#} A out of the page, radius still {#} cm). Is the field on the circle zero or not? Is \\(\\oint \\vec B\\cdot d\\vec l\\) counterclockwise around it zero, positive or negative? Explain.":
  "Mueve el círculo de la pregunta {#} hacia un lado, de modo que ya no rodee al alambre (todavía {#} A hacia fuera de la página, radio todavía {#} cm). ¿Es cero el campo sobre el círculo o no? ¿Es cero, positiva o negativa \\(\\oint \\vec B\\cdot d\\vec l\\) en sentido antihorario alrededor de él? Explica.",
"There are no hazards in the simulation. Real wires carrying tens of amperes get hot; laboratory experiments use short pulses of current or thick wires.":
  "No hay peligros en la simulación. Los alambres reales que llevan decenas de amperes se calientan; los experimentos de laboratorio usan pulsos cortos de corriente o alambres gruesos.",
"Before each part, predict what you will see. Then measure. Pick each setup under Setups. To place a wire or the loop, drag it, or press N on the picture to select a wire or the loop in turn and move it with the arrow keys ({#} cm a step, {#} cm with Shift). Press Record reading for each row; at the end press Export to worksheet, then Clear.":
  "Antes de cada parte, predice lo que verás. Luego mide. Elige cada configuración bajo Configuraciones. Para colocar un alambre o el lazo, arrástralo, o pulsa N en la imagen para elegir por turno un alambre o el lazo y muévelo con las flechas ({#} cm por pulsación, {#} cm con Mayús). Pulsa Registrar lectura para cada fila; al final pulsa Exportar a la hoja y luego Borrar.",
"<strong>Part {#}: Ampère’s law.</strong> In the Ampère’s law setup, record the reading as it opens. Then record ({#}) with Clockwise pressed in the Ampère’s law section; ({#}) back on Counterclockwise, with Rectangle pressed; ({#}) with the loop moved, or made larger, so it also surrounds the third wire at ({#}, {#}); and ({#}) with the loop moved so it surrounds no wire. Next pick the One wire setup, press the Amperian loop button above the picture and press Circle. Record with a circle of radius {#} cm centered on the wire, at ({#}, {#}), then with a circle of radius {#} cm centered at ({#}, {#}), and with a circle of radius {#} cm centered at ({#}, {#}), which does not surround the wire. Change the radius by dragging the loop’s edge or, with the loop selected, with the + and − keys ({#} cm a press); the Loop readout shows the radius. With that last circle still in place, drag the probe onto its point nearest the wire, then onto its point farthest from it, and at each read the size of B at the probe and its direction in the Probe position and direction of B readout; these go in your answer to Question {#}.":
  "<strong>Parte {#}: ley de Ampère.</strong> En la configuración Ley de Ampère, registra la lectura tal como se abre. Luego registra ({#}) con Horario pulsado en la sección Ley de Ampère; ({#}) otra vez en Antihorario, con Rectángulo pulsado; ({#}) con el lazo movido, o agrandado, de modo que también rodee al tercer alambre en ({#}, {#}); y ({#}) con el lazo movido de modo que no rodee ningún alambre. Después elige la configuración Un alambre, pulsa el botón Lazo amperiano sobre la imagen y pulsa Círculo. Registra con un círculo de radio {#} cm centrado en el alambre, en ({#}, {#}), luego con un círculo de radio {#} cm centrado en ({#}, {#}), y con un círculo de radio {#} cm centrado en ({#}, {#}), que no rodea al alambre. Cambia el radio arrastrando el borde del lazo o, con el lazo seleccionado, con las teclas + y − ({#} cm por pulsación); la lectura Lazo muestra el radio. Con ese último círculo todavía en su lugar, arrastra la sonda a su punto más cercano al alambre, luego a su punto más lejano de él, y en cada uno lee el tamaño de B en la sonda y su dirección en la lectura Posición de la sonda y dirección de B; esto va en tu respuesta a la pregunta {#}.",
"<strong>Using the virtual apparatus.</strong> A reading with a wire on the Amperian loop cannot be recorded, since \\(\\oint \\vec B\\cdot d\\vec l\\) is not defined there. Export fills every column of the Data table.":
  "<strong>Uso del aparato virtual.</strong> No se puede registrar una lectura con un alambre sobre el lazo amperiano, porque \\(\\oint \\vec B\\cdot d\\vec l\\) no está definida ahí. Exportar llena todas las columnas de la tabla de datos.",
"<span>C</span>Current I₁ (A)":
  "<span>C</span>Corriente I₁ (A)",
"<span>D</span>Current I₂ (A)":
  "<span>D</span>Corriente I₂ (A)",
"<span>E</span>Amperian loop":
  "<span>E</span>Lazo de Ampère",
"<span>F</span>Current through the loop (A)":
  "<span>F</span>Corriente a través del lazo (A)",
"<span>G</span>Circulation of B around the loop (μT·m)":
  "<span>G</span>Circulación de B alrededor del lazo (μT·m)",
"Current I₁ (A), row {#}":
  "Corriente I₁ (A), fila {#}",
"Current I₂ (A), row {#}":
  "Corriente I₂ (A), fila {#}",
"Amperian loop, row {#}":
  "Lazo amperiano, fila {#}",
"Current through the loop (A), row {#}":
  "Corriente a través del lazo (A), fila {#}",
"Circulation of B around the loop (μT·m), row {#}":
  "Circulación de B alrededor del lazo (μT·m), fila {#}",
"Divide the circulation by the current through the loop for every row with current inside. What do you get, how does it compare with \\(\\mu_0\\), and does it depend on the loop’s shape, size, position or direction? What happens with no current inside?":
  "Divide la circulación entre la corriente que atraviesa el lazo para cada fila con corriente adentro. ¿Qué obtienes, cómo se compara con \\(\\mu_0\\), y depende de la forma, el tamaño, la posición o la dirección del lazo? ¿Qué pasa sin corriente adentro?",
"The model has no noise: the circulation is given to six significant figures and positions are set to {#} cm, so the ratios in Analysis {#} should agree with one another to about the last digit; say how closely they do. In a real experiment the wires are not infinitely long, Earth’s field (about {#} μT) adds to the wire’s but cancels around a closed loop, and a probe has a size of its own.":
  "El modelo no tiene ruido: la circulación se da con seis cifras significativas y las posiciones se fijan con precisión de {#} cm, así que los cocientes del Análisis {#} deben coincidir entre sí hasta casi el último dígito; di qué tan cerca coinciden. En un experimento real los alambres no son infinitamente largos, el campo de la Tierra (unos {#} μT) se suma al del alambre pero se cancela alrededor de un lazo cerrado, y una sonda tiene un tamaño propio.",
"Ampère’s law holds for the rectangle and the circle alike, but only for the circle centered on a single wire can you use it to find \\(B\\) on the loop. Explain why, and use your circle of radius {#} cm to find \\(B\\) from the circulation.":
  "La ley de Ampère se cumple igual para el rectángulo y para el círculo, pero solo con el círculo centrado en un solo alambre puedes usarla para encontrar \\(B\\) sobre el lazo. Explica por qué, y usa tu círculo de radio {#} cm para encontrar \\(B\\) a partir de la circulación.",
"For the circle beside the wire, what were the circulation and the two probe readings, and how do they square with your answers to Before the lab {#}? Explain them using the direction of \\(\\vec B\\) along the loop on the side near the wire and on the far side.":
  "Para el círculo junto al alambre, ¿cuáles fueron la circulación y las dos lecturas de la sonda, y cómo concuerdan con tus respuestas a Antes del laboratorio {#}? Explícalas usando la dirección de \\(\\vec B\\) a lo largo del lazo en el lado cercano al alambre y en el lado lejano.",
"For courses that use calculus. This section is not counted in the {#} minutes; do it when your instructor assigns it.":
  "Para cursos que usan cálculo. Esta sección no cuenta dentro de los {#} minutos; hazla cuando tu profesor la asigne.",
"Put the wire at the origin and use polar coordinates \\(r\\) and \\(\\varphi\\). A short step \\(d\\vec l\\) along any path has a part \\(dr\\) straight away from the wire and a part \\(r\\,d\\varphi\\) around it. Show that for a long straight wire \\(\\vec B\\cdot d\\vec l = \\frac{\\mu_0 I}{2\\pi}\\,d\\varphi\\), whatever the path. Use this to show that \\(\\oint \\vec B\\cdot d\\vec l = \\mu_0 I\\) for any loop that goes once around the wire counterclockwise, and {#} for any loop that does not go around it.":
  "Pon el alambre en el origen y usa coordenadas polares \\(r\\) y \\(\\varphi\\). Un paso corto \\(d\\vec l\\) a lo largo de cualquier trayectoria tiene una parte \\(dr\\) directamente alejándose del alambre y una parte \\(r\\,d\\varphi\\) alrededor de él. Demuestra que para un alambre recto largo \\(\\vec B\\cdot d\\vec l = \\frac{\\mu_0 I}{2\\pi}\\,d\\varphi\\), sea cual sea la trayectoria. Úsalo para demostrar que \\(\\oint \\vec B\\cdot d\\vec l = \\mu_0 I\\) para cualquier espira que dé una vuelta alrededor del alambre en sentido antihorario, y {#} para cualquier espira que no lo rodee.",
"For your circle of radius {#} cm centered at ({#}, {#}), find the angle \\(\\varphi\\) of its top point ({#}, {#}) and of its bottom point ({#}, −{#}), seen from the wire. Use the result of With calculus {#} to find \\(\\int \\vec B\\cdot d\\vec l\\) counterclockwise along the half nearest the wire (from the top through ({#}, {#}) to the bottom) and along the half farthest from it, and check that they add to your recorded circulation. Your probe readings show the field on the near side four times stronger than on the far side. Why, then, do the two halves contribute the same amount?":
  "Para tu círculo de radio {#} cm con centro en ({#}, {#}), halla el ángulo \\(\\varphi\\) de su punto superior ({#}, {#}) y de su punto inferior ({#}, −{#}), vistos desde el alambre. Usa el resultado de Con cálculo {#} para hallar \\(\\int \\vec B\\cdot d\\vec l\\) en sentido antihorario a lo largo de la mitad más cercana al alambre (desde la parte superior pasando por ({#}, {#}) hasta la inferior) y a lo largo de la mitad más lejana, y comprueba que suman tu circulación registrada. Tus lecturas de la sonda muestran el campo del lado cercano cuatro veces más intenso que el del lado lejano. ¿Por qué, entonces, las dos mitades aportan lo mismo?",
"Prelab answers, the Data table copy with its comparisons, your ratios and what they equal, and answers to the questions (and to With calculus, if assigned). Identify simulated data.":
  "Respuestas del prelaboratorio, la copia de la tabla de Datos con sus comparaciones, tus cocientes y a qué son iguales, y las respuestas a las preguntas (y a Con cálculo, si se asignó). Identifica los datos simulados.",
"Current through the loop":
  "Corriente a través del lazo",
"Position along the path (dl: a short piece of the loop)":
  "Posición a lo largo de la trayectoria (dl: un tramo corto del lazo)",
"Distance from the wire":
  "Distancia al alambre",
"Prelab answers, the Data table copy with its comparisons, your ratios and what they equal, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, la copia de la tabla de Datos con sus comparaciones, tus cocientes y a qué son iguales, y las respuestas a las preguntas. Identifica los datos simulados.",
"<strong>Part {#}: Ampère’s law.</strong> In the Ampère’s law setup, record the reading as it opens. Then record ({#}) with Clockwise pressed in the Ampère’s law section; ({#}) back on Counterclockwise, with Rectangle pressed; ({#}) with the loop moved, or made larger, so it also surrounds the third wire at ({#}, {#}); and ({#}) with the loop moved so it surrounds no wire. Next pick the One wire setup, press the Amperian loop button above the picture and press Circle. Record with a circle of radius {#} cm centered on the wire, at ({#}, {#}), then with a circle of radius {#} cm centered at ({#}, {#}), and with a circle that does not surround the wire. Change the radius by dragging the loop’s edge or, with the loop selected, with the + and − keys ({#} cm a press); the Loop readout shows the radius.":
  "<strong>Parte {#}: ley de Ampère.</strong> En la configuración Ley de Ampère, registra la lectura tal como abre. Luego registra ({#}) con Sentido horario pulsado en la sección Ley de Ampère; ({#}) de vuelta en Sentido antihorario, con Rectángulo pulsado; ({#}) con el lazo movido, o agrandado, de modo que también rodee el tercer alambre en ({#}, {#}); y ({#}) con el lazo movido de modo que no rodee ningún alambre. Después elige la configuración Un alambre, pulsa el botón Lazo amperiano arriba de la imagen y pulsa Círculo. Registra con un círculo de radio {#} cm centrado en el alambre, en ({#}, {#}), luego con un círculo de radio {#} cm centrado en ({#}, {#}), y con un círculo que no rodee el alambre. Cambia el radio arrastrando el borde del lazo o, con el lazo seleccionado, con las teclas + y − ({#} cm por pulsación); la lectura Lazo muestra el radio.",
"Divide the circulation by the current through the loop for every row with current inside. What do you get, how does it compare with \\(\\mu_0\\), and does it depend on the loop’s shape, size, position or direction? What happens with no current inside, even though \\(B\\) on the loop is not zero?":
  "Divide la circulación entre la corriente que atraviesa el lazo para cada fila con corriente adentro. ¿Qué obtienes, cómo se compara con \\(\\mu_0\\), y depende de la forma, el tamaño, la posición o el sentido del lazo? ¿Qué pasa sin corriente adentro, aunque \\(B\\) sobre el lazo no sea cero?",
"Prelab answers, the Data table copy with its comparisons, your ratios and what they equal, and the answer to the question. Identify simulated data.":
  "Respuestas del prelaboratorio, la copia de la tabla de datos con sus comparaciones, tus cocientes y a qué son iguales, y la respuesta a la pregunta. Identifica los datos simulados.",
"Magnetic Fields of Currents":
  "Campos magnéticos de corrientes",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>"
});
