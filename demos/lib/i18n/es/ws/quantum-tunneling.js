/* ws/quantum-tunneling in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/quantum-tunneling', {
"Height V₀ (eV)":
  "Altura V₀ (eV)",
"Width a (nm)":
  "Ancho a (nm)",
"Packet energy E₀ (eV)":
  "Energía del paquete E₀ (eV)",
"Reflected R":
  "Reflejada R",
"Transmitted T":
  "Transmitida T",
"ln T":
  "ln T",
"Quantum Tunneling | VirtualDemos":
  "Efecto túnel cuántico | VirtualDemos",
"Quantum Tunneling":
  "Efecto túnel cuántico",
"<strong>Setups in the demo:</strong> Step; Barrier, with one or two barriers (these use this worksheet); Square well, Oscillator and Double well (the energy levels worksheet); Free particle (the uncertainty principle worksheet).":
  "<strong>Configuraciones en la demo:</strong> Escalón; Barrera, con una o dos barreras (estas usan esta hoja de trabajo); Pozo cuadrado, Oscilador y Pozo doble (la hoja de trabajo de niveles de energía); Partícula libre (la hoja de trabajo del principio de incertidumbre).",
"An electron moves in one dimension. Positions are in nm, energies in eV and times in fs, and \\(\\hbar^2/2m = 0.0381\\) eV·nm².":
  "Un electrón se mueve en una dimensión. Las posiciones están en nm, las energías en eV y los tiempos en fs, y \\(\\hbar^2/2m = 0.0381\\) eV·nm².",
"The electron starts as a Gaussian wave packet of width σ, centered at \\(x_0\\), with central wave number \\(k_0\\) and \\(E_0 = \\hbar^2k_0^2/2m\\), the energy that goes with \\(k_0\\). The packet’s mean energy is a little higher, \\(\\langle E\\rangle = E_0 + \\hbar^2/8m\\sigma^2\\) ({#} eV for E₀ = {#} eV and σ = {#} nm), because its spread in k adds energy; the plane wave prediction is taken at E₀. Set these on the card over the picture, then press Launch packet and Play.":
  "El electrón empieza como un paquete de onda gaussiano de ancho σ, centrado en \\(x_0\\), con número de onda central \\(k_0\\) y \\(E_0 = \\hbar^2k_0^2/2m\\), la energía que corresponde a \\(k_0\\). La energía media del paquete es un poco mayor, \\(\\langle E\\rangle = E_0 + \\hbar^2/8m\\sigma^2\\) ({#} eV para E₀ = {#} eV y σ = {#} nm), porque su dispersión en k agrega energía; la predicción de onda plana se toma en E₀. Fija estos valores en la tarjeta sobre la imagen, luego pulsa Lanzar paquete e Iniciar.",
"The time dependent Schrödinger equation is solved on a grid of points {#} pm apart ({#} pm for two barriers; Crank–Nicolson steps). The packet carries a spread of energies, wider for a narrow packet.":
  "La ecuación de Schrödinger dependiente del tiempo se resuelve en una malla de puntos separados {#} pm ({#} pm para dos barreras; pasos de Crank–Nicolson). El paquete lleva una dispersión de energías, más ancha para un paquete angosto.",
"Probability that reaches the edges of the view is absorbed and still counted. R is all the probability on the side the packet came from, T all of it on the far side, including what the edges have absorbed.":
  "La probabilidad que llega a los bordes de la vista se absorbe y se sigue contando. R es toda la probabilidad del lado del que vino el paquete, T toda la del lado opuesto, incluyendo lo que han absorbido los bordes.",
"The Scattering readouts also show the plane wave T at \\(E_0\\) and T averaged over the packet’s energies, both from the formulas.":
  "Las lecturas de Dispersión también muestran la T de onda plana en \\(E_0\\) y la T promediada sobre las energías del paquete, ambas a partir de las fórmulas.",
"Record reading works once the packet has split. It stores the setup, the barrier height and width, the gap between two barriers, \\(E_0\\), σ, the time and the measured R and T. Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura funciona una vez que el paquete se ha dividido. Guarda la configuración, la altura y el ancho de la barrera, la separación entre dos barreras, \\(E_0\\), σ, el tiempo y las R y T medidas. Exportar a la hoja envía las lecturas a la tabla de datos de abajo. Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Send an electron at a step and at a barrier, measure how much of it reflects and how much gets through, and use the way tunneling falls off with barrier width to measure the decay constant of the wave inside the barrier.":
  "Envía un electrón hacia un escalón y hacia una barrera, mide cuánto se refleja y cuánto pasa, y usa la forma en que el efecto túnel disminuye con el ancho de la barrera para medir la constante de decaimiento de la onda dentro de la barrera.",
"Inside a region where the potential energy V is larger than the electron’s energy E, the Schrödinger equation has no oscillating solutions (§{#}). The wave function decays instead, as \\(e^{-\\kappa x}\\), with":
  "Dentro de una región donde la energía potencial V es mayor que la energía E del electrón, la ecuación de Schrödinger no tiene soluciones oscilantes (§{#}). En cambio, la función de onda decae, como \\(e^{-\\kappa x}\\), con",
"\\[\\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar} .\\]":
  "\\[\\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar} .\\]",
"A wave meeting a barrier of height \\(V_0 > E\\) and width a is mostly reflected, but a little gets through (§{#}). The transmission probability for a plane wave is":
  "Una onda que llega a una barrera de altura \\(V_0 > E\\) y ancho a se refleja casi toda, pero un poco pasa (§{#}). La probabilidad de transmisión para una onda plana es",
"\\[T = \\left[1 + \\frac{V_0^2\\,\\sinh^2(\\kappa a)}{4E(V_0 - E)}\\right]^{-1} \\approx 16\\,\\frac{E}{V_0}\\left(1 - \\frac{E}{V_0}\\right)e^{-2\\kappa a},\\]":
  "\\[T = \\left[1 + \\frac{V_0^2\\,\\sinh^2(\\kappa a)}{4E(V_0 - E)}\\right]^{-1} \\approx 16\\,\\frac{E}{V_0}\\left(1 - \\frac{E}{V_0}\\right)e^{-2\\kappa a},\\]",
"where the approximation holds for a thick barrier, \\(\\kappa a \\gg 1\\). So \\(\\ln T\\) falls in a straight line with a, with slope \\(-2\\kappa\\).":
  "donde la aproximación vale para una barrera gruesa, \\(\\kappa a \\gg 1\\). Así que \\(\\ln T\\) baja en línea recta con a, con pendiente \\(-2\\kappa\\).",
"At a step of height \\(V_0\\) with \\(E > V_0\\), a classical particle always carries on. A wave partly reflects, with":
  "En un escalón de altura \\(V_0\\) con \\(E > V_0\\), una partícula clásica siempre sigue adelante. Una onda se refleja en parte, con",
"\\[R = \\left(\\frac{k_1 - k_2}{k_1 + k_2}\\right)^2, \\qquad T = 1 - R,\\]":
  "\\[R = \\left(\\frac{k_1 - k_2}{k_1 + k_2}\\right)^2, \\qquad T = 1 - R,\\]",
"where \\(k_1 = \\sqrt{2mE}/\\hbar\\) before the step and \\(k_2 = \\sqrt{2m(E - V_0)}/\\hbar\\) after it. Below the step, everything reflects.":
  "donde \\(k_1 = \\sqrt{2mE}/\\hbar\\) antes del escalón y \\(k_2 = \\sqrt{2m(E - V_0)}/\\hbar\\) después. Por debajo del escalón, todo se refleja.",
"Find κ and the decay length \\(1/\\kappa\\) for an electron with E = {#} eV at a barrier of height {#} eV.":
  "Encuentra κ y la longitud de decaimiento \\(1/\\kappa\\) para un electrón con E = {#} eV en una barrera de altura {#} eV.",
"Use the thick barrier formula to estimate T for the same electron and a barrier {#} nm wide. By what factor does T change if the barrier is {#} nm wider?":
  "Usa la fórmula de barrera gruesa para estimar T para el mismo electrón y una barrera de {#} nm de ancho. ¿En qué factor cambia T si la barrera es {#} nm más ancha?",
"An electron with E = {#} eV meets a step of {#} eV. Find R and T.":
  "Un electrón con E = {#} eV llega a un escalón de {#} eV. Encuentra R y T.",
"A wave packet has a spread of energies, and T depends strongly on energy. Would you expect a narrow packet or a wide one to match the plane wave formula better?":
  "Un paquete de onda tiene una dispersión de energías, y T depende mucho de la energía. ¿Esperarías que un paquete angosto o uno ancho coincida mejor con la fórmula de onda plana?",
"<strong>Barrier width.</strong> Start with the Barrier setup. Set the height to {#} eV, and on the packet card set the center to −{#} nm, the width to {#} nm and the energy to {#} eV. (Starting far from the barrier keeps the tail of the packet from overlapping it at the start.) For barrier widths from {#} nm to {#} nm in steps of {#} nm, launch the packet, let it split and record a reading.":
  "<strong>Ancho de la barrera.</strong> Empieza con la configuración Barrera. Fija la altura en {#} eV, y en la tarjeta del paquete fija el centro en −{#} nm, el ancho en {#} nm y la energía en {#} eV. (Empezar lejos de la barrera evita que la cola del paquete se traslape con ella al inicio.) Para anchos de barrera de {#} nm a {#} nm en pasos de {#} nm, lanza el paquete, deja que se divida y registra una lectura.",
"<strong>Packet energy.</strong> Clear the readings. With the barrier {#} nm wide, record a reading for packet energies of {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} eV. Send this run to a new copy of the table.":
  "<strong>Energía del paquete.</strong> Borra las lecturas. Con la barrera de {#} nm de ancho, registra una lectura para energías del paquete de {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} eV. Envía esta corrida a una copia nueva de la tabla.",
"<strong>A step.</strong> Clear again and pick Step, with a step of {#} eV and the packet width as it starts (about {#} nm). Record a reading for packet energies of {#}, {#}, {#}, {#}, {#} and {#} eV. Send this run to a third copy.":
  "<strong>Un escalón.</strong> Borra de nuevo y elige Escalón, con un escalón de {#} eV y el ancho del paquete como empieza (unos {#} nm). Registra una lectura para energías del paquete de {#}, {#}, {#}, {#}, {#} y {#} eV. Envía esta corrida a una tercera copia.",
"<strong>Two barriers.</strong> Clear again. Pick Barrier and set Barriers to Two; the packet starts at the first resonant energy. Record a reading there, then about {#} eV above and below it (the energy slider moves in steps of {#} eV). Note the one barrier transmission the Scattering section gives. Send this run to a fourth copy.":
  "<strong>Dos barreras.</strong> Borra de nuevo. Elige Barrera y fija Barreras en Dos; el paquete empieza en la primera energía resonante. Registra una lectura ahí, y luego unos {#} eV por encima y por debajo de ella (el deslizador de energía se mueve en pasos de {#} eV). Anota la transmisión de una sola barrera que da la sección Dispersión. Envía esta corrida a una cuarta copia.",
"<span>C</span>Height V₀ (eV)":
  "<span>C</span>Altura V₀ (eV)",
"<span>D</span>Width a (nm)":
  "<span>D</span>Ancho a (nm)",
"<span>E</span>Packet energy E₀ (eV)":
  "<span>E</span>Energía del paquete E₀ (eV)",
"<span>F</span>Reflected R":
  "<span>F</span>Reflejada R",
"<span>G</span>Transmitted T":
  "<span>G</span>Transmitida T",
"<span>H</span>ln T":
  "<span>H</span>ln T",
"Height V₀ (eV), row {#}":
  "Altura V₀ (eV), fila {#}",
"Width a (nm), row {#}":
  "Ancho a (nm), fila {#}",
"Packet energy E₀ (eV), row {#}":
  "Energía del paquete E₀ (eV), fila {#}",
"Reflected R, row {#}":
  "Reflejada R, fila {#}",
"Transmitted T, row {#}":
  "Transmitida T, fila {#}",
"ln T, row {#}":
  "ln T, fila {#}",
"Work out ln T yourself.":
  "Calcula tú mismo ln T.",
"Check that R + T = {#} for every reading. What does that tell you about the electron?":
  "Comprueba que R + T = {#} en cada lectura. ¿Qué te dice eso sobre el electrón?",
"Graph ln T against a for the barrier width run; all these barriers are thick. Find κ from the slope and compare it with your prelab value.":
  "Grafica ln T en función de a para la corrida del ancho de la barrera; todas estas barreras son gruesas. Encuentra κ a partir de la pendiente y compárala con tu valor previo al laboratorio.",
"From your κ and \\(\\kappa^2 = 2m(V_0 - E)/\\hbar^2\\), find \\(\\hbar^2/2m\\) for the electron and compare it with {#} eV·nm².":
  "Con tu κ y \\(\\kappa^2 = 2m(V_0 - E)/\\hbar^2\\), encuentra \\(\\hbar^2/2m\\) para el electrón y compáralo con {#} eV·nm².",
"Graph T against \\(E_0\\) for the packet energy run. Does T reach {#} when \\(E_0\\) reaches the top of the barrier? Compare a few points with the plane wave formula.":
  "Grafica T en función de \\(E_0\\) para la corrida de energía del paquete. ¿Llega T a {#} cuando \\(E_0\\) alcanza la parte superior de la barrera? Compara algunos puntos con la fórmula de onda plana.",
"For the step, compare each measured R with the formula. What happens below the step, and what happens far above it?":
  "Para el escalón, compara cada R medida con la fórmula. ¿Qué pasa por debajo del escalón, y qué pasa muy por encima de él?",
"For two barriers, compare T at the resonance with T for one barrier alone. Explain how two barriers can let through more than one.":
  "Para dos barreras, compara T en la resonancia con T para una sola barrera. Explica cómo dos barreras pueden dejar pasar más que una.",
"The simulation has no noise, but it is not the plane wave the formulas describe. Compare your measured T with the plane wave value and with the value averaged over the packet, and say which the measurement follows. The grid also makes small numerical errors; estimate their size from the difference between the measured T and the packet average. Say why a packet that starts too close to the barrier, with its tail already through it, would give too large a T.":
  "La simulación no tiene ruido, pero no es la onda plana que describen las fórmulas. Compara tu T medida con el valor de onda plana y con el valor promediado sobre el paquete, y di a cuál sigue la medición. La malla también produce pequeños errores numéricos; estima su tamaño a partir de la diferencia entre la T medida y el promedio sobre el paquete. Di por qué un paquete que empieza demasiado cerca de la barrera, con su cola ya del otro lado, daría una T demasiado grande.",
"Why can’t a classical particle ever be found inside a barrier higher than its energy, while a quantum particle can?":
  "¿Por qué una partícula clásica nunca puede encontrarse dentro de una barrera más alta que su energía, mientras que una partícula cuántica sí?",
"A scanning tunneling microscope measures the current that tunnels across a gap of about {#} nm between a tip and a surface. Use your κ to estimate how much the current changes if the gap grows by {#} nm.":
  "Un microscopio de efecto túnel mide la corriente que pasa por efecto túnel a través de una separación de unos {#} nm entre una punta y una superficie. Usa tu κ para estimar cuánto cambia la corriente si la separación crece {#} nm.",
"Alpha decay is tunneling through the Coulomb barrier of the nucleus. Why do small changes in the alpha particle’s energy change half lives by many powers of ten?":
  "El decaimiento alfa es efecto túnel a través de la barrera de Coulomb del núcleo. ¿Por qué cambios pequeños en la energía de la partícula alfa cambian las vidas medias en muchas potencias de diez?",
"Why does part of the packet reflect from a step that it has plenty of energy to climb?":
  "¿Por qué parte del paquete se refleja en un escalón que tiene energía de sobra para subir?",
"Prelab answers, the four table copies with their graphs and fits, κ and \\(\\hbar^2/2m\\) with uncertainties and comparisons, the comparisons with the formulas for the step and the energy run, your explanation of the resonance, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, las cuatro copias de la tabla con sus gráficas y ajustes, κ y \\(\\hbar^2/2m\\) con incertidumbres y comparaciones, las comparaciones con las fórmulas para el escalón y la corrida de energía, tu explicación de la resonancia y las respuestas a las preguntas. Identifica los datos simulados.",
"Energy of the electron":
  "Energía del electrón",
"Energy that goes with k₀":
  "Energía que corresponde a k₀",
"Reflection probability":
  "Probabilidad de reflexión",
"Transmission probability":
  "Probabilidad de transmisión",
"Height of the barrier or step":
  "Altura de la barrera o del escalón",
"Width of the barrier":
  "Ancho de la barrera",
"Central wave number of the packet":
  "Número de onda central del paquete",
"Wave number before the step":
  "Número de onda antes del escalón",
"Wave number after the step":
  "Número de onda después del escalón",
"Decay constant inside the barrier":
  "Constante de decaimiento dentro de la barrera",
"Mass of the electron":
  "Masa del electrón",
"Width of the packet":
  "Ancho del paquete",
"Starting center of the packet":
  "Centro inicial del paquete",
"Quantum Wave Packets (scattering)":
  "Paquetes de onda cuánticos (dispersión)"
});
