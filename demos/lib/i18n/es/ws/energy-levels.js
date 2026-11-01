/* ws/energy-levels in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/energy-levels', {
"Well":
  "Pozo",
"Width L (nm)":
  "Ancho L (nm)",
"Level spacing ħω (eV)":
  "Espaciado de niveles ħω (eV)",
"Level n":
  "Nivel n",
"Energy E_n (eV)":
  "Energía E_n (eV)",
"Superposition":
  "Superposición",
"Levels chosen":
  "Niveles elegidos",
"Energy difference ΔE (eV)":
  "Diferencia de energía ΔE (eV)",
"Period measured (fs)":
  "Periodo medido (fs)",
"h/ΔE (fs)":
  "h/ΔE (fs)",
"Energy Levels in a Box and a Spring | VirtualDemos":
  "Niveles de energía en una caja y en un resorte | VirtualDemos",
"Energy Levels in a Box and a Spring":
  "Niveles de energía en una caja y en un resorte",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §§{#}, {#}, {#} and {#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §§{#}, {#}, {#} y {#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Square well, with infinite or finite walls; Oscillator; Double well (these use this worksheet); Step and Barrier (the tunneling worksheet); Free particle (the uncertainty principle worksheet).":
  "<strong>Configuraciones en la demo:</strong> Pozo cuadrado, con paredes infinitas o finitas; Oscilador; Pozo doble (estas usan esta hoja de trabajo); Escalón y Barrera (la hoja de trabajo de efecto túnel); Partícula libre (la hoja de trabajo del principio de incertidumbre).",
"An electron moves in one dimension. Positions are in nm, energies in eV and times in fs, and \\(\\hbar^2/2m = 0.0381\\) eV·nm².":
  "Un electrón se mueve en una dimensión. Las posiciones están en nm, las energías en eV y los tiempos en fs, y \\(\\hbar^2/2m = 0.0381\\) eV·nm².",
"The energy levels are found by solving the time independent Schrödinger equation numerically, on the same grid the demo uses to move the electron. They are listed under Energy eigenstates, with the exact formula beside them for the infinite well and the oscillator.":
  "Los niveles de energía se encuentran resolviendo numéricamente la ecuación de Schrödinger independiente del tiempo, en la misma malla que usa la demo para mover al electrón. Aparecen en Estados propios de energía, con la fórmula exacta al lado para el pozo infinito y el oscilador.",
"Pick one level for a stationary state, or two or more for a superposition; the electron then moves as the time dependent equation says. The readout gives the beat period h/ΔE of two chosen levels.":
  "Elige un nivel para un estado estacionario, o dos o más para una superposición; el electrón se mueve entonces como dice la ecuación dependiente del tiempo. La lectura da el periodo de batido h/ΔE de dos niveles elegidos.",
"The infinite well has walls at \\(x = \\pm L/2\\). The finite well has walls of height \\(V_0\\). The oscillator has \\(V = \\tfrac{1}{2}m\\omega^2x^2\\), set by its level spacing ħω. The double well has two minima with a barrier of height \\(V_0\\) between them.":
  "El pozo infinito tiene paredes en \\(x = \\pm L/2\\). El pozo finito tiene paredes de altura \\(V_0\\). El oscilador tiene \\(V = \\tfrac{1}{2}m\\omega^2x^2\\), fijado por su espaciado de niveles ħω. El pozo doble tiene dos mínimos con una barrera de altura \\(V_0\\) entre ellos.",
"Record reading stores every level the demo lists, one row each: the well, its width, depth or ħω, the level number n and its energy. Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda cada nivel que lista la demo, una fila por nivel: el pozo, su ancho, profundidad o ħω, el número de nivel n y su energía. Exportar a la hoja envía las lecturas a la tabla de datos de abajo. Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Measure the energy levels of an electron in a box and in a harmonic oscillator, find how they depend on the quantum number and the size of the box, and time the motion of a superposition of two levels.":
  "Mide los niveles de energía de un electrón en una caja y en un oscilador armónico, descubre cómo dependen del número cuántico y del tamaño de la caja, y mide el tiempo del movimiento de una superposición de dos niveles.",
"An electron confined to a box of width L with infinitely high walls has standing waves that fit a whole number of half wavelengths in the box, \\(L = n\\lambda/2\\) (§{#}). With \\(p = h/\\lambda\\) its energies are":
  "Un electrón confinado en una caja de ancho L con paredes infinitamente altas tiene ondas estacionarias que acomodan un número entero de medias longitudes de onda en la caja, \\(L = n\\lambda/2\\) (§{#}). Con \\(p = h/\\lambda\\) sus energías son",
"\\[E_n = \\frac{n^2\\pi^2\\hbar^2}{2mL^2}, \\qquad n = 1, 2, 3, \\dots\\]":
  "\\[E_n = \\frac{n^2\\pi^2\\hbar^2}{2mL^2}, \\qquad n = 1, 2, 3, \\dots\\]",
"There is no n = {#}: the lowest energy is not zero. Walls of finite height let the wave leak into them, so each level lies lower than in the infinite box (only a little when the walls are much higher than the level), and there are only a few levels.":
  "No hay n = {#}: la energía más baja no es cero. Las paredes de altura finita dejan que la onda penetre en ellas, así que cada nivel queda más bajo que en la caja infinita (solo un poco cuando las paredes son mucho más altas que el nivel), y hay solo unos cuantos niveles.",
"A harmonic oscillator has evenly spaced levels (§{#}):":
  "Un oscilador armónico tiene niveles igualmente espaciados (§{#}):",
"\\[E_n = \\left(n + \\tfrac{1}{2}\\right)\\hbar\\omega, \\qquad n = 0, 1, 2, \\dots\\]":
  "\\[E_n = \\left(n + \\tfrac{1}{2}\\right)\\hbar\\omega, \\qquad n = 0, 1, 2, \\dots\\]",
"with a zero point energy of \\(\\tfrac{1}{2}\\hbar\\omega\\).":
  "con una energía de punto cero de \\(\\tfrac{1}{2}\\hbar\\omega\\).",
"A single energy eigenstate is stationary: \\(\\lvert\\psi\\rvert^2\\) never changes (§{#}). A superposition of two levels with energies \\(E_a\\) and \\(E_b\\) moves back and forth with period":
  "Un solo estado propio de energía es estacionario: \\(\\lvert\\psi\\rvert^2\\) nunca cambia (§{#}). Una superposición de dos niveles con energías \\(E_a\\) y \\(E_b\\) se mueve de un lado a otro con periodo",
"\\[T = \\frac{h}{E_b - E_a} .\\]":
  "\\[T = \\frac{h}{E_b - E_a} .\\]",
"Find the three lowest energies of an electron in an infinite box {#} nm wide, using \\(\\hbar^2/2m = 0.0381\\) eV·nm².":
  "Encuentra las tres energías más bajas de un electrón en una caja infinita de {#} nm de ancho, usando \\(\\hbar^2/2m = 0.0381\\) eV·nm².",
"How do the energies change if the box is made twice as wide?":
  "¿Cómo cambian las energías si la caja se hace el doble de ancha?",
"An oscillator has ħω = {#} eV. List its four lowest energies. What is the spacing between them?":
  "Un oscilador tiene ħω = {#} eV. Lista sus cuatro energías más bajas. ¿Cuál es el espaciado entre ellas?",
"Find the period of the motion when the n = {#} and n = {#} states of the {#} nm box are added, using h = {#} eV·fs.":
  "Encuentra el periodo del movimiento cuando se suman los estados n = {#} y n = {#} de la caja de {#} nm, usando h = {#} eV·fs.",
"<strong>The infinite box.</strong> Start with Square well, infinite walls. For box widths of {#}, {#}, {#}, {#} and {#} nm, record a reading; each records every level listed.":
  "<strong>La caja infinita.</strong> Empieza con Pozo cuadrado, paredes infinitas. Para anchos de caja de {#}, {#}, {#}, {#} y {#} nm, registra una lectura; cada una registra todos los niveles listados.",
"<strong>The oscillator.</strong> Clear the readings and pick Oscillator. With a level spacing of {#} eV, record a reading. Send this run to a new copy of the table.":
  "<strong>El oscilador.</strong> Borra las lecturas y elige Oscilador. Con un espaciado de niveles de {#} eV, registra una lectura. Envía esta corrida a una copia nueva de la tabla.",
"<strong>The finite well.</strong> Clear again and pick Square well with Walls set to Finite. With a depth of {#} eV and a width of {#} nm, record a reading. Then make the well {#} eV deep and record again. Send this run to a third copy.":
  "<strong>El pozo finito.</strong> Borra de nuevo y elige Pozo cuadrado con Paredes en Finitas. Con una profundidad de {#} eV y un ancho de {#} nm, registra una lectura. Luego haz el pozo de {#} eV de profundidad y registra de nuevo. Envía esta corrida a una tercera copia.",
"<strong>Motion of a superposition.</strong> Pick Square well, infinite walls, {#} nm wide, with the levels n = {#} and n = {#} chosen. Play it at ¼× speed and time ten swings of the packet from one side to the other and back, using the clock. Then pick Double well (levels {#} and {#} chosen), play it and time one full trip of the electron from the left well to the right well and back. Write both in the second table.":
  "<strong>Movimiento de una superposición.</strong> Elige Pozo cuadrado, paredes infinitas, de {#} nm de ancho, con los niveles n = {#} y n = {#} elegidos. Córrelo a velocidad ¼× y mide con el reloj diez oscilaciones del paquete de un lado al otro y de regreso. Luego elige Pozo doble (niveles {#} y {#} elegidos), córrelo y mide un viaje completo del electrón del pozo izquierdo al pozo derecho y de regreso. Escribe ambos en la segunda tabla.",
"<span>B</span>Well":
  "<span>B</span>Pozo",
"<span>C</span>Width L (nm)":
  "<span>C</span>Ancho L (nm)",
"<span>D</span>Level spacing ħω (eV)":
  "<span>D</span>Espaciado de niveles ħω (eV)",
"<span>E</span>Level n":
  "<span>E</span>Nivel n",
"<span>F</span>Energy E_n (eV)":
  "<span>F</span>Energía E_n (eV)",
"Well, row {#}":
  "Pozo, fila {#}",
"Width L (nm), row {#}":
  "Ancho L (nm), fila {#}",
"Level spacing ħω (eV), row {#}":
  "Espaciado de niveles ħω (eV), fila {#}",
"Level n, row {#}":
  "Nivel n, fila {#}",
"Energy E_n (eV), row {#}":
  "Energía E_n (eV), fila {#}",
"n²/L² ({#}/nm²), row {#}":
  "n²/L² ({#}/nm²), fila {#}",
"Work out the last column yourself for the infinite box.":
  "Calcula tú mismo la última columna para la caja infinita.",
"<span>A</span>Superposition":
  "<span>A</span>Superposición",
"<span>B</span>Levels chosen":
  "<span>B</span>Niveles elegidos",
"<span>C</span>Energy difference ΔE (eV)":
  "<span>C</span>Diferencia de energía ΔE (eV)",
"<span>D</span>Period measured (fs)":
  "<span>D</span>Periodo medido (fs)",
"<span>E</span>h/ΔE (fs)":
  "<span>E</span>h/ΔE (fs)",
"Box, {#} nm":
  "Caja, {#} nm",
"n = {#} and {#}":
  "n = {#} y {#}",
"Energy difference ΔE (eV), row {#}":
  "Diferencia de energía ΔE (eV), fila {#}",
"Period measured (fs), row {#}":
  "Periodo medido (fs), fila {#}",
"h/ΔE (fs), row {#}":
  "h/ΔE (fs), fila {#}",
"Double well":
  "Pozo doble",
"Graph E against \\(n^2/L^2\\) for every reading of the infinite box. Do all the levels of all the boxes fall on one line? Find the slope and compare it with \\(\\pi^2\\hbar^2/2m\\).":
  "Grafica E en función de \\(n^2/L^2\\) para todas las lecturas de la caja infinita. ¿Caen todos los niveles de todas las cajas sobre una sola recta? Encuentra la pendiente y compárala con \\(\\pi^2\\hbar^2/2m\\).",
"From your slope, find \\(\\hbar^2/2m\\), and from it the mass of the electron, using \\(\\hbar c = 197.327\\) eV·nm. Give the mass as \\(mc^2\\) in keV.":
  "A partir de tu pendiente, encuentra \\(\\hbar^2/2m\\), y con ella la masa del electrón, usando \\(\\hbar c = 197.327\\) eV·nm. Da la masa como \\(mc^2\\) en keV.",
"Graph E against n for the oscillator. Find the slope and the intercept and compare them with ħω and \\(\\tfrac{1}{2}\\hbar\\omega\\).":
  "Grafica E en función de n para el oscilador. Encuentra la pendiente y la ordenada al origen y compáralas con ħω y \\(\\tfrac{1}{2}\\hbar\\omega\\).",
"Compare each level of the {#} nm finite well with the same level of the {#} nm infinite box. How many levels does the finite well hold at each depth, and why are they lower?":
  "Compara cada nivel del pozo finito de {#} nm con el mismo nivel de la caja infinita de {#} nm. ¿Cuántos niveles tiene el pozo finito a cada profundidad, y por qué son más bajos?",
"Compare your measured periods with h/ΔE. Why does the double well take so much longer than the box?":
  "Compara tus periodos medidos con h/ΔE. ¿Por qué el pozo doble tarda mucho más que la caja?",
"The levels come from solving the Schrödinger equation on a grid, so they carry a small numerical error. Find it by comparing your box levels with the exact formula; does it grow with n? For the periods, estimate how well you could read the clock at the turning points, and why timing ten swings helps.":
  "Los niveles salen de resolver la ecuación de Schrödinger en una malla, así que llevan un pequeño error numérico. Encuéntralo comparando los niveles de tu caja con la fórmula exacta; ¿crece con n? Para los periodos, estima qué tan bien podrías leer el reloj en los puntos de retorno, y por qué ayuda medir diez oscilaciones.",
"Why can’t an electron in a box have zero energy? Connect your answer to the uncertainty principle.":
  "¿Por qué un electrón en una caja no puede tener energía cero? Relaciona tu respuesta con el principio de incertidumbre.",
"A real electron in a molecule or a quantum dot a few nanometers across absorbs light when it jumps between levels. Would a bigger dot absorb redder or bluer light?":
  "Un electrón real en una molécula o en un punto cuántico de unos cuantos nanómetros absorbe luz cuando salta entre niveles. ¿Un punto más grande absorbería luz más roja o más azul?",
"Why are the levels of the oscillator evenly spaced while those of the box spread further apart as n grows?":
  "¿Por qué los niveles del oscilador están igualmente espaciados mientras que los de la caja se separan más conforme crece n?",
"In the double well the two lowest levels are very close together. What would happen to their spacing, and to the period, if the barrier between the wells were made higher?":
  "En el pozo doble, los dos niveles más bajos están muy juntos. ¿Qué pasaría con su espaciado, y con el periodo, si la barrera entre los pozos se hiciera más alta?",
"Prelab answers, the three table copies with their graphs and fits, the table of periods, \\(\\hbar^2/2m\\) and \\(mc^2\\) with uncertainties and comparisons, the comparison of the finite well with the box, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, las tres copias de la tabla con sus gráficas y ajustes, la tabla de periodos, \\(\\hbar^2/2m\\) y \\(mc^2\\) con incertidumbres y comparaciones, la comparación del pozo finito con la caja, y las respuestas a las preguntas. Identifica los datos simulados.",
"Energy of the lower level of the pair":
  "Energía del nivel inferior del par",
"Energy of the upper level of the pair":
  "Energía del nivel superior del par",
"Energy of level n":
  "Energía del nivel n",
"Width of the well":
  "Ancho del pozo",
"Period of the back and forth motion":
  "Periodo del movimiento de ida y vuelta",
"Potential energy":
  "Energía potencial",
"Height of the finite well's walls":
  "Altura de las paredes del pozo finito",
"Quantum number of the level":
  "Número cuántico del nivel",
"Angular frequency of the oscillator":
  "Frecuencia angular del oscilador",
"Momentum":
  "Cantidad de movimiento",
"Wave function":
  "Función de onda",
"Quantum Wave Packets (wells)":
  "Paquetes de onda cuánticos (pozos)"
});
