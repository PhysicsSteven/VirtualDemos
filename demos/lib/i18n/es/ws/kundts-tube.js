/* ws/kundts-tube in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/kundts-tube', {
"Heap j":
  "Montículo j",
"L_rod (m)":
  "L_rod (m)",
"Mode n":
  "Modo n",
"Kundt’s Tube | VirtualDemos":
  "Tubo de Kundt | VirtualDemos",
"Kundt’s Tube":
  "Tubo de Kundt",
"<strong>Setups in the demo:</strong> Steel rod, air; Steel rod, helium; Clamped at L/{#}; Brass rod, air; Unknown rod.":
  "<strong>Configuraciones en la demo:</strong> Varilla de acero, aire; Varilla de acero, helio; Sujeta en L/{#}; Varilla de latón, aire; Varilla desconocida.",
"<strong>Using the demo.</strong> A metal rod held in a clamp stand rings when stroked; a disc on its end drives the gas in a glass tube closed by a plunger. A frequency counter shows the rod’s frequency while it rings, and a loudness bar shows how strongly the gas column responds. The rod, its length, the clamp position, the gas and its temperature are on the Set up card, which fades while the rod rings. The rod is quiet until you stroke it. The plunger and the pointer are on the Tube card, which stays in view while the rod rings: drag them on the picture, or use their sliders and the {#} mm and {#} cm step buttons. A close up of {#} cm of tube around the pointer has a millimeter scale. Blind hides the speeds, the heap spacing and the nearest resonance; the unknown rod always hides its speed.":
  "<strong>Uso de la demo.</strong> Una varilla metálica sostenida en un soporte con sujeción vibra cuando se frota; un disco en su extremo impulsa el gas de un tubo de vidrio cerrado por un émbolo. Un contador de frecuencia muestra la frecuencia de la varilla mientras vibra, y una barra de intensidad muestra qué tan fuerte responde la columna de gas. La varilla, su longitud, la posición de la sujeción, el gas y su temperatura están en la tarjeta de preparación, que se desvanece mientras la varilla vibra. La varilla está en silencio hasta que la frotas. El émbolo y el indicador están en la tarjeta Tubo, que sigue a la vista mientras la varilla vibra: arrástralos en la imagen, o usa sus deslizadores y los botones de paso de {#} mm y {#} cm. Una vista ampliada de {#} cm del tubo alrededor del indicador tiene una escala milimétrica. A ciegas oculta las rapideces, la separación entre montículos y la resonancia más cercana; la varilla desconocida siempre oculta su rapidez.",
"<strong>What the demo models.</strong> A thin rod with free ends: longitudinal waves travel at \\(v_{\\text{rod}} = \\sqrt{E/\\rho}\\), with typical handbook values of \\(E\\) and \\(\\rho\\) (chosen; real alloys vary by several percent). The clamp holds a node, so the rod rings with \\(n = 1\\) half wavelength in it when clamped at the middle and \\(n = 2\\) when clamped \\(L/4\\) from an end. The gas is ideal at {#} Pa, driven by the disc as a piston, with a rigid plunger and a small chosen loss of {#} per meter in amplitude. The dust is a picture: it drifts toward the displacement nodes while the gas motion is strong enough. The counter shows \\(f\\) to {#} Hz. Simulated data with no noise.":
  "<strong>Qué modela la demo.</strong> Una varilla delgada con extremos libres: las ondas longitudinales viajan a \\(v_{\\text{rod}} = \\sqrt{E/\\rho}\\), con valores típicos de manual de \\(E\\) y \\(\\rho\\) (elegidos; las aleaciones reales varían varios por ciento). La sujeción mantiene un nodo, así que la varilla vibra con \\(n = 1\\) media longitud de onda en ella cuando está sujeta en el centro y \\(n = 2\\) cuando está sujeta a \\(L/4\\) de un extremo. El gas es ideal a {#} Pa, impulsado por el disco como un pistón, con un émbolo rígido y una pequeña pérdida elegida de {#} por metro en amplitud. El polvo es un dibujo: deriva hacia los nodos de desplazamiento mientras el movimiento del gas es suficientemente fuerte. El contador muestra \\(f\\) a {#} Hz. Datos simulados sin ruido.",
"Measure the speed of sound in a gas from the dust pattern in Kundt’s tube, compare it with the speed of sound in the rod that drives it, and find the speed of sound in an unknown rod.":
  "Mide la rapidez del sonido en un gas a partir del patrón del polvo en el tubo de Kundt, compárala con la rapidez del sonido en la varilla que lo impulsa, y encuentra la rapidez del sonido en una varilla desconocida.",
"A rod with free ends, clamped at its middle, rings in its lowest longitudinal mode with half a wavelength along its length, \\(\\lambda_{\\text{rod}} = 2L/n\\) with \\(n = 1\\). Clamped a quarter of the way from one end it must have a node there, and rings with \\(n = 2\\). Its frequency is":
  "Una varilla con extremos libres, sujeta en el centro, vibra en su modo longitudinal más bajo con media longitud de onda a lo largo de su longitud, \\(\\lambda_{\\text{rod}} = 2L/n\\) con \\(n = 1\\). Sujeta a un cuarto de su longitud desde un extremo debe tener un nodo ahí, y vibra con \\(n = 2\\). Su frecuencia es",
"\\[f = \\frac{n\\,v_{\\text{rod}}}{2L},\\qquad v_{\\text{rod}} = \\sqrt{\\frac{E}{\\rho}}.\\]":
  "\\[f = \\frac{n\\,v_{\\text{rod}}}{2L},\\qquad v_{\\text{rod}} = \\sqrt{\\frac{E}{\\rho}}.\\]",
"The disc on the rod’s end drives the gas in the tube at this same frequency. When the plunger is placed so that the gas column resonates, a standing wave forms in the gas. Light dust is thrown about where the gas moves most and settles in heaps at the displacement nodes, which are half a wavelength apart in the gas:":
  "El disco del extremo de la varilla impulsa el gas del tubo a esta misma frecuencia. Cuando el émbolo se coloca de modo que la columna de gas resuena, se forma una onda estacionaria en el gas. El polvo ligero se agita donde el gas se mueve más y se asienta en montículos en los nodos de desplazamiento, que están separados media longitud de onda en el gas:",
"\\[d = \\frac{\\lambda_{\\text{gas}}}{2},\\qquad v_{\\text{gas}} = f\\lambda_{\\text{gas}} = 2df.\\]":
  "\\[d = \\frac{\\lambda_{\\text{gas}}}{2},\\qquad v_{\\text{gas}} = f\\lambda_{\\text{gas}} = 2df.\\]",
"The frequency is the same in the rod and the gas, so the speeds are in the ratio of the wavelengths:":
  "La frecuencia es la misma en la varilla y en el gas, así que las rapideces están en la proporción de las longitudes de onda:",
"\\[\\frac{v_{\\text{rod}}}{v_{\\text{gas}}} = \\frac{2L/n}{2d} = \\frac{L}{nd}.\\]":
  "\\[\\frac{v_{\\text{rod}}}{v_{\\text{gas}}} = \\frac{2L/n}{2d} = \\frac{L}{nd}.\\]",
"For an ideal gas, \\(v_{\\text{gas}} = \\sqrt{\\gamma RT/M}\\), so a measured \\(v_{\\text{gas}}\\) with a known \\(M\\) and \\(T\\) gives \\(\\gamma\\).":
  "Para un gas ideal, \\(v_{\\text{gas}} = \\sqrt{\\gamma RT/M}\\), así que una \\(v_{\\text{gas}}\\) medida con \\(M\\) y \\(T\\) conocidas da \\(\\gamma\\).",
"A {#} m steel rod (\\(E = 200\\) GPa, \\(\\rho = 7850\\ \\mathrm{kg/m^3}\\)) is clamped at its middle. Find \\(v_{\\text{rod}}\\) and the frequency it rings at.":
  "Una varilla de acero de {#} m (\\(E = 200\\) GPa, \\(\\rho = 7850\\ \\mathrm{kg/m^3}\\)) está sujeta en el centro. Encuentra \\(v_{\\text{rod}}\\) y la frecuencia a la que vibra.",
"At that frequency, how far apart are the dust heaps in air at {#} °C (\\(v = 343.2\\) m/s)? In helium (\\(v = 1007\\) m/s)?":
  "A esa frecuencia, ¿qué tan separados están los montículos de polvo en aire a {#} °C (\\(v = 343.2\\) m/s)? ¿Y en helio (\\(v = 1007\\) m/s)?",
"Why do the heaps form at displacement nodes and not at antinodes?":
  "¿Por qué los montículos se forman en los nodos de desplazamiento y no en los antinodos?",
"Why must the plunger be moved to a resonance before clear heaps form?":
  "¿Por qué hay que mover el émbolo a una resonancia antes de que se formen montículos claros?",
"On a real Kundt’s tube, stroke the rod with a cloth or chamois dusted with rosin, keep the glass tube supported along its length, and wear eye protection when the rod rings loudly. Hold the rod only at the clamp.":
  "En un tubo de Kundt real, frota la varilla con un paño o una gamuza con colofonia, mantén el tubo de vidrio apoyado a lo largo de su longitud y usa protección para los ojos cuando la varilla vibre fuerte. Sostén la varilla solo por la sujeción.",
"<strong>Part {#}: steel rod in air.</strong> With a {#} m steel rod clamped at its middle and air at {#} °C, hide the predictions, keep the rod ringing and adjust the plunger until the gas column resonates and the dust forms clear heaps. Find the center of every heap along the tube and record each one, numbering the heaps from the disc. Record the counter frequency.":
  "<strong>Parte {#}: varilla de acero en aire.</strong> Con una varilla de acero de {#} m sujeta en el centro y aire a {#} °C, oculta las predicciones, mantén la varilla vibrando y ajusta el émbolo hasta que la columna de gas resuene y el polvo forme montículos claros. Encuentra el centro de cada montículo a lo largo del tubo y registra cada uno, numerando los montículos desde el disco. Registra la frecuencia del contador.",
"<strong>Part {#}: helium.</strong> Repeat Part {#} with helium in the tube, at {#} °C.":
  "<strong>Parte {#}: helio.</strong> Repite la Parte {#} con helio en el tubo, a {#} °C.",
"<strong>Part {#}: clamped at L/{#}.</strong> Repeat Part {#} in air with the steel rod clamped a quarter of its length from one end.":
  "<strong>Parte {#}: sujeta en L/{#}.</strong> Repite la Parte {#} en aire con la varilla de acero sujeta a un cuarto de su longitud desde un extremo.",
"<strong>Part {#}: unknown rod.</strong> With an unknown rod {#} m long, clamped at its middle, in air at {#} °C, tune the plunger as in Part {#}, then record the center of every heap and the counter frequency. Keep the same unknown rod for the whole part: choosing a new one changes the rod.":
  "<strong>Parte {#}: varilla desconocida.</strong> Con una varilla desconocida de {#} m de largo, sujeta en el centro, en aire a {#} °C, afina el émbolo como en la Parte {#} y luego registra el centro de cada montículo y la frecuencia del contador. Conserva la misma varilla desconocida durante toda la parte: elegir una nueva cambia la varilla.",
"<strong>Using the virtual apparatus.</strong> Changing the gas spreads the dust out again; after a change of rod, clamp or temperature the old heaps stay where they are until the tube is loud again (spread the dust yourself before you tune), and the counter shows \\(f\\) only while the rod rings. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> Cambiar el gas vuelve a esparcir el polvo; después de cambiar la varilla, la sujeción o la temperatura, los montículos anteriores se quedan donde están hasta que el tubo vuelva a sonar fuerte (esparce tú el polvo antes de afinar), y el contador muestra \\(f\\) solo mientras la varilla vibra. Envía cada parte a la hoja antes de borrar, para que cada parte tenga su propia copia de la tabla de datos.",
"<span>A</span>Heap \\(j\\)":
  "<span>A</span>Montículo \\(j\\)",
"<span>C</span>Rod":
  "<span>C</span>Varilla",
"<span>D</span>\\(L_{\\text{rod}}\\) (m)":
  "<span>D</span>\\(L_{\\text{rod}}\\) (m)",
"<span>E</span>Mode \\(n\\)":
  "<span>E</span>Modo \\(n\\)",
"<span>G</span>Gas":
  "<span>G</span>Gas",
"Heap j, row {#}":
  "Montículo j, fila {#}",
"x (cm), row {#}":
  "x (cm), fila {#}",
"Rod, row {#}":
  "Varilla, fila {#}",
"L_rod (m), row {#}":
  "L_rod (m), fila {#}",
"Mode n, row {#}":
  "Modo n, fila {#}",
"Gas, row {#}":
  "Gas, fila {#}",
"T (°C), row {#}":
  "T (°C), fila {#}",
"For each part, write in that copy’s notes where the plunger was when the heaps formed.":
  "Para cada parte, escribe en las notas de esa copia dónde estaba el émbolo cuando se formaron los montículos.",
"For Part {#}, graph \\(x\\) against \\(j\\). The slope is the heap spacing \\(d\\). Find \\(v_{\\text{gas}} = 2df\\) with its uncertainty, and compare it with \\(\\sqrt{\\gamma RT/M}\\) for air.":
  "Para la Parte {#}, grafica \\(x\\) en función de \\(j\\). La pendiente es la separación entre montículos \\(d\\). Encuentra \\(v_{\\text{gas}} = 2df\\) con su incertidumbre, y compárala con \\(\\sqrt{\\gamma RT/M}\\) para el aire.",
"Find \\(v_{\\text{rod}}\\) for steel two ways: from \\(2Lf/n\\), and from \\(v_{\\text{gas}}L/(nd)\\) using the theoretical speed in air. Compare both with \\(\\sqrt{E/\\rho}\\).":
  "Encuentra \\(v_{\\text{rod}}\\) para el acero de dos maneras: a partir de \\(2Lf/n\\), y a partir de \\(v_{\\text{gas}}L/(nd)\\) usando la rapidez teórica en el aire. Compara ambas con \\(\\sqrt{E/\\rho}\\).",
"From Part {#}, find \\(v\\) in helium and then \\(\\gamma\\) for helium, using \\(M = 4.003\\) g/mol. Is it close to the monatomic value {#}/{#}?":
  "Con la Parte {#}, encuentra \\(v\\) en el helio y luego \\(\\gamma\\) para el helio, usando \\(M = 4.003\\) g/mol. ¿Se acerca al valor monoatómico {#}/{#}?",
"From Part {#}, compare the heap spacing and the frequency with Part {#}. Explain both changes using where the rod must have nodes.":
  "Con la Parte {#}, compara la separación entre montículos y la frecuencia con las de la Parte {#}. Explica ambos cambios usando dónde debe tener nodos la varilla.",
"From Part {#}, find the speed of sound in the unknown rod by both methods. Which materials, if any, does it match?":
  "Con la Parte {#}, encuentra la rapidez del sonido en la varilla desconocida por ambos métodos. ¿Con qué materiales coincide, si con alguno?",
"In the simulation the heap positions are read to {#} mm and the counter to {#} Hz, and the model has no noise, so the scatter of the points about the line comes only from reading the heap centers. Using all the heaps in a fit gives \\(d\\) much more precisely than any one pair. On a real tube add the width of the heaps, the fine ridges within them, end effects near the disc and plunger, the temperature of the gas and the rod’s own temperature, and the counter or tuning fork calibration.":
  "En la simulación las posiciones de los montículos se leen a {#} mm y el contador a {#} Hz, y el modelo no tiene ruido, así que la dispersión de los puntos alrededor de la recta viene solo de leer los centros de los montículos. Usar todos los montículos en un ajuste da \\(d\\) con mucha más precisión que cualquier par. En un tubo real agrega el ancho de los montículos, las crestas finas dentro de ellos, los efectos de los extremos cerca del disco y del émbolo, la temperatura del gas y la de la propia varilla, y la calibración del contador o del diapasón.",
"Why is the frequency the same in the rod and in the gas, while the wavelengths differ?":
  "¿Por qué la frecuencia es la misma en la varilla y en el gas, mientras que las longitudes de onda difieren?",
"Why are the heaps in helium farther apart than in air, at the same frequency?":
  "¿Por qué los montículos en helio están más separados que en aire, a la misma frecuencia?",
"What would happen to the heap spacing if the gas were warmed from {#} °C to {#} °C?":
  "¿Qué le pasaría a la separación entre montículos si el gas se calentara de {#} °C a {#} °C?",
"Why can a rod clamped at its middle not ring with \\(n = 2\\)?":
  "¿Por qué una varilla sujeta en el centro no puede vibrar con \\(n = 2\\)?",
"Prelab answers, a Data table copy for each part, the fit of \\(x\\) against \\(j\\) for each part, your values of \\(v_{\\text{gas}}\\), \\(v_{\\text{rod}}\\) and \\(\\gamma\\) with uncertainties, the unknown rod analysis, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, una copia de la tabla de datos para cada parte, el ajuste de \\(x\\) en función de \\(j\\) para cada parte, tus valores de \\(v_{\\text{gas}}\\), \\(v_{\\text{rod}}\\) y \\(\\gamma\\) con incertidumbres, el análisis de la varilla desconocida y las respuestas a las preguntas. Identifica los datos simulados.",
"Absolute temperature of the gas":
  "Temperatura absoluta del gas",
"Young's modulus of the rod":
  "Módulo de Young de la varilla",
"Length of the rod":
  "Longitud de la varilla",
"Molar mass of the gas":
  "Masa molar del gas",
"Temperature of the gas":
  "Temperatura del gas",
"in √(γRT/M) it is the absolute temperature, in K":
  "en √(γRT/M) es la temperatura absoluta, en K",
"Spacing between dust heaps":
  "Separación entre montículos de polvo",
"Ratio of heat capacities, C_p/C_V":
  "Cociente de capacidades caloríficas, C_p/C_V",
"Heap number":
  "Número de montículo",
"Wavelength in the gas":
  "Longitud de onda en el gas",
"Wavelength in the rod":
  "Longitud de onda en la varilla",
"Mode number, half wavelengths in the rod":
  "Número de modo, medias longitudes de onda en la varilla",
"Density of the rod":
  "Densidad de la varilla",
"Speed of sound":
  "Rapidez del sonido",
"Speed of sound in the gas":
  "Rapidez del sonido en el gas",
"Speed of longitudinal waves in the rod":
  "Rapidez de las ondas longitudinales en la varilla",
"Position of a heap":
  "Posición de un montículo",
"Kundt's Tube":
  "Tubo de Kundt"
});
