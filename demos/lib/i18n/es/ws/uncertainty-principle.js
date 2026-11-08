/* ws/uncertainty-principle in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/uncertainty-principle', {
"Width σ (nm)":
  "Ancho σ (nm)",
"Time t (fs)":
  "Tiempo t (fs)",
"Spread Δx (nm)":
  "Dispersión Δx (nm)",
"Momentum spread Δp (eV/c)":
  "Dispersión del momento Δp (eV/c)",
"Δx·Δp (ħ)":
  "Δx·Δp (ħ)",
"Δx² (nm²)":
  "Δx² (nm²)",
"The Uncertainty Principle and a Spreading Packet | VirtualDemos":
  "El principio de incertidumbre y un paquete que se dispersa | VirtualDemos",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"The Uncertainty Principle and a Spreading Packet":
  "El principio de incertidumbre y un paquete que se dispersa",
"<strong>Setups in the demo:</strong> Free particle (this worksheet); Step and Barrier (the tunneling worksheet); Square well, Oscillator and Double well (the energy levels worksheet).":
  "<strong>Configuraciones en la demo:</strong> Partícula libre (esta hoja de trabajo); Escalón y Barrera (la hoja de trabajo del efecto túnel); Pozo cuadrado, Oscilador y Pozo doble (la hoja de trabajo de los niveles de energía).",
"An electron moves in one dimension with no forces on it. Positions are in nm, energies in eV, times in fs and momenta in eV/c, and \\(\\hbar^2/2m = 0.0381\\) eV·nm².":
  "Un electrón se mueve en una dimensión sin fuerzas sobre él. Las posiciones están en nm, las energías en eV, los tiempos en fs y los momentos en eV/c, y \\(\\hbar^2/2m = 0.0381\\) eV·nm².",
"The electron starts as a Gaussian wave packet, \\(\\psi \\propto \\exp[-(x - x_0)^2/4\\sigma^2 + ik_0x]\\), of width σ, with \\(E_0 = \\hbar^2k_0^2/2m\\) the energy that goes with the central wave number \\(k_0\\). The mean energy the demo shows is higher, \\(\\langle E\\rangle = E_0 + \\hbar^2/8m\\sigma^2\\), because the packet’s spread in k adds energy ({#} eV for E₀ = {#} eV and σ = {#} nm; the demo’s {#} pm grid shows {#}). Set these on the card over the picture: each change puts a fresh packet at t = {#}, held there while the demo is paused. Play (or Launch packet, which starts it playing at once) sets it moving; Step advances a little at a time, and the clock shows t.":
  "El electrón empieza como un paquete de ondas gaussiano, \\(\\psi \\propto \\exp[-(x - x_0)^2/4\\sigma^2 + ik_0x]\\), de ancho σ, con \\(E_0 = \\hbar^2k_0^2/2m\\) la energía que corresponde al número de onda central \\(k_0\\). La energía media que muestra la demo es mayor, \\(\\langle E\\rangle = E_0 + \\hbar^2/8m\\sigma^2\\), porque la dispersión del paquete en k agrega energía ({#} eV para E₀ = {#} eV y σ = {#} nm; la cuadrícula de {#} pm de la demo muestra {#}). Fija estos valores en la tarjeta sobre la imagen: cada cambio pone un paquete nuevo en t = {#}, que se queda ahí mientras la demo está en pausa. Iniciar (o Lanzar paquete, que lo pone en marcha de inmediato) lo pone en movimiento; Paso avanza un poco a la vez, y el reloj muestra t.",
"The time dependent Schrödinger equation is solved on a grid of points {#} pm apart. The Measurements section shows ⟨x⟩, the spread Δx, ⟨p⟩, the spread Δp and their product, all computed from ψ on that grid.":
  "La ecuación de Schrödinger dependiente del tiempo se resuelve en una cuadrícula de puntos separados {#} pm. La sección Mediciones muestra ⟨x⟩, la dispersión Δx, ⟨p⟩, la dispersión Δp y su producto, todos calculados a partir de ψ en esa cuadrícula.",
"Measure x picks a position at random with probability \\(\\lvert\\psi\\rvert^2\\) and collapses ψ to a narrow packet there; Measure {#} copies measures {#} identically prepared electrons and draws a histogram.":
  "Medir x elige una posición al azar con probabilidad \\(\\lvert\\psi\\rvert^2\\) y colapsa ψ a un paquete estrecho ahí; Medir {#} copias mide {#} electrones preparados de forma idéntica y dibuja un histograma.",
"Probability that reaches the edges of the view is absorbed, so record while the packet is still well inside the view.":
  "La probabilidad que llega a los bordes de la vista se absorbe, así que registra mientras el paquete todavía está bien dentro de la vista.",
"Record reading stores σ, \\(E_0\\), the time, ⟨x⟩, Δx, ⟨p⟩, Δp, their product and the energy. Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda σ, \\(E_0\\), el tiempo, ⟨x⟩, Δx, ⟨p⟩, Δp, su producto y la energía. Exportar a la hoja envía las lecturas a la tabla de datos de abajo. Borrar inicia una nueva serie, que va a una nueva copia de la tabla.",
"Measure the spreads in position and momentum of an electron wave packet, show that their product never falls below \\(\\hbar/2\\), and measure how fast a free packet spreads out.":
  "Mide las dispersiones en posición y en momento de un paquete de ondas de un electrón, muestra que su producto nunca baja de \\(\\hbar/2\\), y mide qué tan rápido se dispersa un paquete libre.",
"The probability of finding the electron between x and x + dx is \\(\\lvert\\psi\\rvert^2\\,dx\\) (§{#}). The spreads Δx and Δp are the standard deviations of its position and momentum. Heisenberg’s uncertainty principle (§{#}) says that for any wave function":
  "La probabilidad de encontrar el electrón entre x y x + dx es \\(\\lvert\\psi\\rvert^2\\,dx\\) (§{#}). Las dispersiones Δx y Δp son las desviaciones estándar de su posición y de su momento. El principio de incertidumbre de Heisenberg (§{#}) dice que para cualquier función de onda",
"\\[\\Delta x\\,\\Delta p \\ge \\frac{\\hbar}{2} .\\]":
  "\\[\\Delta x\\,\\Delta p \\ge \\frac{\\hbar}{2} .\\]",
"A Gaussian packet of width σ has \\(\\Delta x = \\sigma\\) and \\(\\Delta p = \\hbar/2\\sigma\\) at the moment it is made, the smallest product allowed. In eV/c, \\(\\Delta p = \\hbar c/2\\sigma\\) with \\(\\hbar c = 197.327\\) eV·nm.":
  "Un paquete gaussiano de ancho σ tiene \\(\\Delta x = \\sigma\\) y \\(\\Delta p = \\hbar/2\\sigma\\) en el momento en que se crea, el menor producto permitido. En eV/c, \\(\\Delta p = \\hbar c/2\\sigma\\) con \\(\\hbar c = 197.327\\) eV·nm.",
"A free packet keeps its momentum spread, but its faster parts run ahead of its slower ones, so it spreads (§{#}):":
  "Un paquete libre mantiene su dispersión de momento, pero sus partes más rápidas se adelantan a las más lentas, así que se dispersa (§{#}):",
"\\[\\Delta x(t)^2 = \\sigma^2 + \\left(\\frac{\\hbar t}{2m\\sigma}\\right)^2 = \\sigma^2 + (\\Delta v\\,t)^2,\\]":
  "\\[\\Delta x(t)^2 = \\sigma^2 + \\left(\\frac{\\hbar t}{2m\\sigma}\\right)^2 = \\sigma^2 + (\\Delta v\\,t)^2,\\]",
"where \\(\\Delta v = \\Delta p/m\\) is the spread of speeds.":
  "donde \\(\\Delta v = \\Delta p/m\\) es la dispersión de rapideces.",
"Find Δp, in eV/c, for packets of width {#} nm and {#} nm.":
  "Encuentra Δp, en eV/c, para paquetes de ancho {#} nm y {#} nm.",
"Find the spread of speeds Δv for the {#} nm packet, using \\(\\hbar/2m = 0.0579\\) nm²/fs. How wide is the packet after {#} fs and after {#} fs?":
  "Encuentra la dispersión de rapideces Δv para el paquete de {#} nm, usando \\(\\hbar/2m = 0.0579\\) nm²/fs. ¿Qué tan ancho es el paquete después de {#} fs y después de {#} fs?",
"A narrower packet starts smaller. Does it stay smaller? Compare the widths of packets of {#} nm and {#} nm after {#} fs.":
  "Un paquete más estrecho empieza más pequeño. ¿Se mantiene más pequeño? Compara los anchos de paquetes de {#} nm y {#} nm después de {#} fs.",
"Why is it not a violation of the uncertainty principle that \\(\\Delta x\\,\\Delta p\\) grows with time?":
  "¿Por qué no es una violación del principio de incertidumbre que \\(\\Delta x\\,\\Delta p\\) crezca con el tiempo?",
"<strong>At launch.</strong> Start with Free particle. With the demo paused, set packet widths of about {#}, {#}, {#}, {#}, {#}, {#} and {#} nm and record a reading at each, at t = {#}. (Launch packet starts the packet moving, so don’t use it here.)":
  "<strong>Al lanzarlo.</strong> Empieza con Partícula libre. Con la demo en pausa, fija anchos del paquete de unos {#}, {#}, {#}, {#}, {#}, {#} y {#} nm y registra una lectura con cada uno, en t = {#}. (Lanzar paquete pone el paquete en movimiento, así que no lo uses aquí.)",
"<strong>Spreading.</strong> Clear the readings. With the demo paused, set the width to {#} nm and record a reading at t = {#}. Then play it, pause at about {#}, {#}, {#}, {#}, {#}, {#} and {#} fs and record a reading each time. Send this run to a new copy of the table.":
  "<strong>Dispersión.</strong> Borra las lecturas. Con la demo en pausa, fija el ancho en {#} nm y registra una lectura en t = {#}. Luego ponla en marcha, pausa en unos {#}, {#}, {#}, {#}, {#}, {#} y {#} fs y registra una lectura cada vez. Envía esta corrida a una nueva copia de la tabla.",
"<strong>Measuring position.</strong> At about {#} fs, press Measure {#} copies a few times and compare the histogram with \\(\\lvert\\psi\\rvert^2\\). Then press Measure x once, and note what happens to the packet and to Δx and Δp.":
  "<strong>Medición de la posición.</strong> A unos {#} fs, pulsa Medir {#} copias unas cuantas veces y compara el histograma con \\(\\lvert\\psi\\rvert^2\\). Luego pulsa Medir x una vez, y anota lo que les pasa al paquete y a Δx y Δp.",
"<span>B</span>Width σ (nm)":
  "<span>B</span>Ancho σ (nm)",
"<span>C</span>Time t (fs)":
  "<span>C</span>Tiempo t (fs)",
"<span>D</span>Spread Δx (nm)":
  "<span>D</span>Dispersión Δx (nm)",
"<span>E</span>Momentum spread Δp (eV/c)":
  "<span>E</span>Dispersión del momento Δp (eV/c)",
"<span>F</span>Δx·Δp (ħ)":
  "<span>F</span>Δx·Δp (ħ)",
"<span>I</span>Δx² (nm²)":
  "<span>I</span>Δx² (nm²)",
"Width σ (nm), row {#}":
  "Ancho σ (nm), fila {#}",
"Time t (fs), row {#}":
  "Tiempo t (fs), fila {#}",
"Spread Δx (nm), row {#}":
  "Dispersión Δx (nm), fila {#}",
"Momentum spread Δp (eV/c), row {#}":
  "Dispersión del momento Δp (eV/c), fila {#}",
"Δx·Δp (ħ), row {#}":
  "Δx·Δp (ħ), fila {#}",
"{#}/σ ({#}/nm), row {#}":
  "{#}/σ ({#}/nm), fila {#}",
"t² (fs²), row {#}":
  "t² (fs²), fila {#}",
"Δx² (nm²), row {#}":
  "Δx² (nm²), fila {#}",
"Fill in the last three columns yourself where you need them.":
  "Llena tú mismo las tres últimas columnas donde las necesites.",
"For the readings at launch, graph Δp against {#}/σ. Find the slope and compare it with \\(\\hbar c/2\\). What is \\(\\Delta x\\,\\Delta p\\) for each, in units of ħ?":
  "Para las lecturas al lanzarlo, grafica Δp en función de {#}/σ. Encuentra la pendiente y compárala con \\(\\hbar c/2\\). ¿Cuánto vale \\(\\Delta x\\,\\Delta p\\) para cada una, en unidades de ħ?",
"For the spreading run, graph \\(\\Delta x^2\\) against \\(t^2\\). Find the slope and the intercept and compare them with \\((\\hbar/2m\\sigma)^2\\) and \\(\\sigma^2\\).":
  "Para la corrida de dispersión, grafica \\(\\Delta x^2\\) en función de \\(t^2\\). Encuentra la pendiente y la ordenada al origen y compáralas con \\((\\hbar/2m\\sigma)^2\\) y \\(\\sigma^2\\).",
"From your slope, find \\(\\hbar^2/2m\\) for the electron (use \\(\\hbar = 0.6582\\) eV·fs) and compare it with {#} eV·nm².":
  "A partir de tu pendiente, encuentra \\(\\hbar^2/2m\\) para el electrón (usa \\(\\hbar = 0.6582\\) eV·fs) y compáralo con {#} eV·nm².",
"Does Δp change as the packet spreads? Explain why not.":
  "¿Cambia Δp a medida que el paquete se dispersa? Explica por qué no.",
"Describe what Measure x did to the packet. Compare Δx and Δp just after the measurement with their values before it.":
  "Describe lo que Medir x le hizo al paquete. Compara Δx y Δp justo después de la medición con sus valores antes de ella.",
"The demo computes Δx and Δp from ψ on a {#} pm grid. Its momentum comes from differences between neighboring points (a fourth order formula, so the grid error is about (k dx)⁴/{#}, a few parts in {#}⁵ here); compare your Δp at launch with \\(\\hbar c/2\\sigma\\) and say how large the remaining difference is. The grid also slows the spreading a little: on it the packet’s spread of speeds comes out about {#} % low, so expect your \\(\\Delta x^2\\) slope about {#} % below \\((\\hbar/2m\\sigma)^2\\) and \\(\\hbar^2/2m\\) about {#} % low. Say also why recording too late, once the packet reaches the absorbing edge, would spoil Δx.":
  "La demo calcula Δx y Δp a partir de ψ en una cuadrícula de {#} pm. Su momento viene de diferencias entre puntos vecinos (una fórmula de cuarto orden, así que el error de la cuadrícula es de unos (k dx)⁴/{#}, unas pocas partes en {#}⁵ aquí); compara tu Δp al lanzarlo con \\(\\hbar c/2\\sigma\\) y di qué tan grande es la diferencia que queda. La cuadrícula también frena un poco la dispersión: en ella, la dispersión de velocidades del paquete sale alrededor de {#} % baja, así que espera que tu pendiente de \\(\\Delta x^2\\) quede alrededor de {#} % por debajo de \\((\\hbar/2m\\sigma)^2\\) y que \\(\\hbar^2/2m\\) salga alrededor de {#} % baja. Di también por qué registrar demasiado tarde, una vez que el paquete llega al borde absorbente, arruinaría Δx.",
"If you know an electron’s position to within {#} nm, how well can you know its momentum, in eV/c? What spread of kinetic energy does that suggest for an electron in an atom?":
  "Si conoces la posición de un electrón con una precisión de {#} nm, ¿qué tan bien puedes conocer su momento, en eV/c? ¿Qué dispersión de energía cinética sugiere eso para un electrón en un átomo?",
"Why does a narrower packet spread faster?":
  "¿Por qué un paquete más estrecho se dispersa más rápido?",
"A grain of dust of mass \\(10^{-15}\\) kg is located to within {#} μm. How long would its position spread take to double? Why don’t we see quantum spreading of everyday objects?":
  "Un grano de polvo de masa \\(10^{-15}\\) kg se localiza con una precisión de {#} μm. ¿Cuánto tardaría en duplicarse la dispersión de su posición? ¿Por qué no vemos la dispersión cuántica de los objetos cotidianos?",
"After Measure x, the packet is narrow again. Has the electron’s momentum become more or less certain? What does that say about measuring position precisely?":
  "Después de Medir x, el paquete es estrecho de nuevo. ¿El momento del electrón se volvió más o menos incierto? ¿Qué dice eso sobre medir la posición con precisión?",
"Prelab answers, both table copies with their graphs and fits, your \\(\\hbar c\\) and \\(\\hbar^2/2m\\) with uncertainties and comparisons, your description of the measurement, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ambas copias de la tabla con sus gráficas y ajustes, tus \\(\\hbar c\\) y \\(\\hbar^2/2m\\) con incertidumbres y comparaciones, tu descripción de la medición, y respuestas a las preguntas. Identifica los datos simulados.",
"Energy that goes with k₀":
  "Energía que corresponde a k₀",
"Imaginary unit, √−{#}":
  "Unidad imaginaria, √−{#}",
"Central wave number":
  "Número de onda central",
"Mass of the electron":
  "Masa del electrón",
"Momentum (Δp: the spread in momentum)":
  "Momento (Δp: la dispersión del momento)",
"Wave function of the electron":
  "Función de onda del electrón",
"Starting width of the packet":
  "Ancho inicial del paquete",
"Speed (Δv: the spread of speeds)":
  "Rapidez (Δv: la dispersión de rapideces)",
"Position (Δx: the spread in position)":
  "Posición (Δx: la dispersión de la posición)",
"Starting center of the packet":
  "Centro inicial del paquete",
"Quantum Wave Packets (free particle)":
  "Paquetes de ondas cuánticos (partícula libre)",
"The demo computes Δx and Δp from ψ on a {#} pm grid. Its momentum comes from differences between neighboring points (a fourth order formula, so the grid error is about (k dx)⁴/{#}, a few parts in {#}⁵ here); compare your Δp at launch with \\(\\hbar c/2\\sigma\\) and say how large the remaining difference is. Say also why recording too late, once the packet reaches the absorbing edge, would spoil Δx.":
  "La demo calcula Δx y Δp a partir de ψ en una cuadrícula de {#} pm. Su momento viene de diferencias entre puntos vecinos (una fórmula de cuarto orden, así que el error de la cuadrícula es de unos (k dx)⁴/{#}, unas pocas partes en {#}⁵ aquí); compara tu Δp al lanzarlo con \\(\\hbar c/2\\sigma\\) y di qué tan grande es la diferencia que queda. Di también por qué registrar demasiado tarde, una vez que el paquete llega al borde absorbente, arruinaría Δx."
});
