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
"How far apart are the dust heaps in air at {#} °C (\\(v = 343.2\\) m/s) with this rod? Now the air is pumped out and the tube filled with helium (\\(v = 1007\\) m/s), with the same rod. What do you expect the frequency counter and the heap spacing each to do: go up, go down or stay the same? Find the helium spacing that your choice implies.":
  "¿Qué tan separados quedan los montones de polvo en aire a {#} °C (\\(v = 343.2\\) m/s) con esta varilla? Ahora se extrae el aire con una bomba y el tubo se llena de helio (\\(v = 1007\\) m/s), con la misma varilla. ¿Qué esperas que hagan el contador de frecuencia y la separación de los montones: subir, bajar o quedarse igual? Encuentra la separación en helio que implica tu elección.",
"On a real Kundt’s tube, stroke the rod with a cloth or chamois dusted with rosin, keep the glass tube supported along its length, and wear eye protection when the rod rings loudly. Hold the rod only at the clamp.":
  "En un tubo de Kundt real, frota la varilla con un paño o una gamuza con colofonia, mantén el tubo de vidrio apoyado a lo largo de su longitud y usa protección para los ojos cuando la varilla vibre fuerte. Sostén la varilla solo por la sujeción.",
"<strong>Part {#}: steel rod in air.</strong> With a {#} m steel rod clamped at its middle and air at {#} °C, hide the predictions, keep the rod ringing and adjust the plunger until the gas column resonates and the dust forms clear heaps. Find the centers of the first six heaps from the disc (heaps {#} to {#}) and record each one, numbering the heaps from the disc. Record the counter frequency.":
  "<strong>Parte {#}: varilla de acero en aire.</strong> Con una varilla de acero de {#} m sujeta en el centro y aire a {#} °C, oculta las predicciones, mantén la varilla vibrando y ajusta el émbolo hasta que la columna de gas resuene y el polvo forme montículos claros. Encuentra los centros de los primeros seis montículos a partir del disco (montículos {#} a {#}) y registra cada uno, numerando los montículos desde el disco. Registra la frecuencia del contador.",
"<strong>Part {#}: helium.</strong> Repeat Part {#} with helium in the tube, at {#} °C.":
  "<strong>Parte {#}: helio.</strong> Repite la Parte {#} con helio en el tubo, a {#} °C.",
"<strong>Part {#}: unknown rod.</strong> With an unknown rod {#} m long, clamped at its middle, in air at {#} °C, tune the plunger as in Part {#}, then record the centers of the first six heaps and the counter frequency. Keep the same unknown rod for the whole part: choosing a new one changes the rod.":
  "<strong>Parte {#}: varilla desconocida.</strong> Con una varilla desconocida de {#} m de largo, sujeta en el centro, en aire a {#} °C, afina el émbolo como en la Parte {#} y luego registra los centros de los primeros seis montículos y la frecuencia del contador. Conserva la misma varilla desconocida durante toda la parte: elegir una nueva cambia la varilla.",
"<strong>Using the virtual apparatus.</strong> Before Part {#}, tick <strong>Blind: hide the speeds and the predictions</strong> under Lab. For each part:":
  "<strong>Uso del aparato virtual.</strong> Antes de la Parte {#}, marca <strong>A ciegas: ocultar las rapideces y las predicciones</strong> en Laboratorio. Para cada parte:",
"Choose the setup: <strong>Steel rod, air</strong> (Part {#}), <strong>Steel rod, helium</strong> (Part {#}) or <strong>Unknown rod</strong> (Part {#}). The plunger starts {#} cm short of a resonance.":
  "Elige la configuración: <strong>Varilla de acero, aire</strong> (Parte {#}), <strong>Varilla de acero, helio</strong> (Parte {#}) o <strong>Varilla desconocida</strong> (Parte {#}). El émbolo empieza {#} cm antes de una resonancia.",
"Press <strong>Stroke the rod</strong> and tick <strong>Keep it ringing</strong>. Move the plunger with <strong>Plunger position ℓ (disc to plunger)</strong> or its ℓ −{#} cm, ℓ −{#} mm, ℓ +{#} mm and ℓ +{#} cm buttons until <strong>Loudest air motion in the tube</strong> (under Readouts) is at its largest; the dust then forms heaps. Write the <strong>Plunger ℓ</strong> readout in the notes.":
  "Pulsa <strong>Frotar la varilla</strong> y marca <strong>Mantenerla vibrando</strong>. Mueve el émbolo con <strong>Posición del émbolo ℓ (del disco al émbolo)</strong> o con sus botones ℓ −{#} cm, ℓ −{#} mm, ℓ +{#} mm y ℓ +{#} cm hasta que <strong>Mayor movimiento del aire en el tubo</strong> (en Lecturas en pantalla) sea el más grande; entonces el polvo forma montículos. Escribe la lectura de <strong>Émbolo ℓ</strong> en las notas.",
"Put <strong>Pointer x (from the disc)</strong> on the middle of each of the first six heaps, from the disc outward (in helium only four fit in the tube; use the close up’s millimeter scale and the {#} mm buttons), and press <strong>Record this heap</strong>. Each row gets the next heap number \\(j\\) and the counter frequency \\(f\\), so the counter needs no separate reading.":
  "Pon el <strong>Indicador x (desde el disco)</strong> en el centro de cada uno de los primeros seis montículos, del disco hacia afuera (en helio solo caben cuatro en el tubo; usa la escala en milímetros del acercamiento y los botones de {#} mm), y pulsa <strong>Registrar este montículo</strong>. Cada fila recibe el siguiente número de montículo \\(j\\) y la frecuencia del contador \\(f\\), así que el contador no necesita una lectura aparte.",
"Press <strong>Export to worksheet</strong>, then <strong>Clear</strong>, so each part gets its own copy of the Data table.":
  "Pulsa <strong>Exportar a la hoja</strong>, y luego <strong>Borrar</strong>, para que cada parte tenga su propia copia de la tabla de Datos.",
"Changing the gas spreads the dust out again; after a change of rod, clamp or temperature the old heaps stay where they are until the tube is loud again, so press <strong>Spread the dust</strong> before you tune. The counter shows \\(f\\) only while the rod rings.":
  "Cambiar el gas vuelve a esparcir el polvo; después de cambiar la varilla, la sujeción o la temperatura, los montículos viejos se quedan donde están hasta que el tubo vuelve a sonar fuerte, así que pulsa <strong>Esparcir el polvo</strong> antes de afinar. El contador muestra \\(f\\) solo mientras la varilla vibra.",
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
"For Part {#}, graph \\(x\\) against \\(j\\). The slope is the heap spacing \\(d\\). Find \\(v_{\\text{gas}} = 2df\\), and compare it with \\(\\sqrt{\\gamma RT/M}\\) for air.":
  "Para la Parte {#}, grafica \\(x\\) en función de \\(j\\). La pendiente es la separación entre montículos \\(d\\). Encuentra \\(v_{\\text{gas}} = 2df\\), y compárala con \\(\\sqrt{\\gamma RT/M}\\) para el aire.",
"Find \\(v_{\\text{rod}}\\) for steel from \\(2Lf/n\\) and compare it with \\(\\sqrt{E/\\rho}\\).":
  "Encuentra \\(v_{\\text{rod}}\\) para el acero a partir de \\(2Lf/n\\) y compárala con \\(\\sqrt{E/\\rho}\\).",
"From Part {#}, find \\(v\\) in helium and then \\(\\gamma\\) for helium, using \\(M = 4.003\\) g/mol. Is it close to the monatomic value {#}/{#}?":
  "Con la Parte {#}, encuentra \\(v\\) en el helio y luego \\(\\gamma\\) para el helio, usando \\(M = 4.003\\) g/mol. ¿Se acerca al valor monoatómico {#}/{#}?",
"From Part {#}, find the speed of sound in the unknown rod by both methods. Which materials, if any, does it match?":
  "Con la Parte {#}, encuentra la rapidez del sonido en la varilla desconocida por ambos métodos. ¿Con qué materiales coincide, si con alguno?",
"Put your Part {#} and Part {#} counter readings and heap spacings beside your choices in Before the lab {#}. Explain what you saw from where the frequency comes from and what sets the wavelength in the gas. Use the same reasoning to say what would happen to the heap spacing if the air were warmed from {#} °C to {#} °C.":
  "Pon tus lecturas del contador y las separaciones de los montones de la Parte {#} y la Parte {#} junto a tus elecciones de Antes del laboratorio {#}. Explica lo que viste a partir de dónde viene la frecuencia y de lo que fija la longitud de onda en el gas. Usa el mismo razonamiento para decir qué pasaría con la separación de los montones si el aire se calentara de {#} °C a {#} °C.",
"For courses that treat measurement uncertainty. This section is not counted in the {#} minutes; do it when your instructor assigns it.":
  "Para cursos que tratan la incertidumbre de medición. Esta sección no cuenta dentro de los {#} minutos; hazla cuando tu profesor la asigne.",
"In the simulation the heap positions are read to {#} mm and the counter to {#} Hz, and the model has no noise, so the scatter of the points about the line comes only from reading the heap centers. Using six heaps in a fit gives \\(d\\) more precisely than any one pair. Give \\(v_{\\text{gas}}\\) in Analysis {#} with its uncertainty, give \\(v_{\\text{gas}}\\) in helium and \\(\\gamma\\) with theirs, and say whether \\(\\gamma\\) agrees with {#}/{#} within its uncertainty. On a real tube add the width of the heaps, the fine ridges within them, end effects near the disc and plunger, the temperature of the gas and the rod’s own temperature, and the counter or tuning fork calibration.":
  "En la simulación las posiciones de los montículos se leen a {#} mm y el contador a {#} Hz, y el modelo no tiene ruido, así que la dispersión de los puntos alrededor de la recta viene solo de leer los centros de los montículos. Usar seis montículos en un ajuste da \\(d\\) con más precisión que cualquier par. Da \\(v_{\\text{gas}}\\) del Análisis {#} con su incertidumbre, da \\(v_{\\text{gas}}\\) en helio y \\(\\gamma\\) con las suyas, y di si \\(\\gamma\\) concuerda con {#}/{#} dentro de su incertidumbre. En un tubo real agrega el ancho de los montículos, las crestas finas dentro de ellos, los efectos de los extremos cerca del disco y del émbolo, la temperatura del gas y la de la propia varilla, y la calibración del contador o del diapasón.",
"Prelab answers, a Data table copy for each part, the fit of \\(x\\) against \\(j\\) for each part, your values of \\(v_{\\text{gas}}\\), \\(v_{\\text{rod}}\\) and \\(\\gamma\\), the unknown rod analysis, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.":
  "Respuestas previas al laboratorio, una copia de la tabla de datos para cada parte, el ajuste de \\(x\\) en función de \\(j\\) para cada parte, tus valores de \\(v_{\\text{gas}}\\), \\(v_{\\text{rod}}\\) y \\(\\gamma\\), el análisis de la varilla desconocida y las respuestas a las preguntas (y de Incertidumbre, si se asigna). Identifica los datos simulados.",
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
  "Tubo de Kundt",
"At that frequency, how far apart are the dust heaps in air at {#} °C (\\(v = 343.2\\) m/s)? In helium (\\(v = 1007\\) m/s)?":
  "A esa frecuencia, ¿qué tan separados están los montículos de polvo en aire a {#} °C (\\(v = 343.2\\) m/s)? ¿Y en helio (\\(v = 1007\\) m/s)?",
"What would happen to the heap spacing if the gas were warmed from {#} °C to {#} °C?":
  "¿Qué le pasaría a la separación entre montículos si el gas se calentara de {#} °C a {#} °C?",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"Why do the heaps form at displacement nodes and not at antinodes?":
  "¿Por qué los montículos se forman en los nodos de desplazamiento y no en los antinodos?",
"Why must the plunger be moved to a resonance before clear heaps form?":
  "¿Por qué hay que mover el émbolo a una resonancia antes de que se formen montículos claros?",
"<strong>Part {#}: steel rod in air.</strong> With a {#} m steel rod clamped at its middle and air at {#} °C, hide the predictions, keep the rod ringing and adjust the plunger until the gas column resonates and the dust forms clear heaps. Find the center of every heap along the tube and record each one, numbering the heaps from the disc. Record the counter frequency.":
  "<strong>Parte {#}: varilla de acero en aire.</strong> Con una varilla de acero de {#} m sujeta en el centro y aire a {#} °C, oculta las predicciones, mantén la varilla vibrando y ajusta el émbolo hasta que la columna de gas resuene y el polvo forme montículos claros. Encuentra el centro de cada montículo a lo largo del tubo y registra cada uno, numerando los montículos desde el disco. Registra la frecuencia del contador.",
"<strong>Part {#}: clamped at L/{#}.</strong> Repeat Part {#} in air with the steel rod clamped a quarter of its length from one end.":
  "<strong>Parte {#}: sujeta en L/{#}.</strong> Repite la Parte {#} en aire con la varilla de acero sujeta a un cuarto de su longitud desde un extremo.",
"<strong>Part {#}: unknown rod.</strong> With an unknown rod {#} m long, clamped at its middle, in air at {#} °C, tune the plunger as in Part {#}, then record the center of every heap and the counter frequency. Keep the same unknown rod for the whole part: choosing a new one changes the rod.":
  "<strong>Parte {#}: varilla desconocida.</strong> Con una varilla desconocida de {#} m de largo, sujeta en el centro, en aire a {#} °C, afina el émbolo como en la Parte {#} y luego registra el centro de cada montículo y la frecuencia del contador. Conserva la misma varilla desconocida durante toda la parte: elegir una nueva cambia la varilla.",
"<strong>Using the virtual apparatus.</strong> Changing the gas spreads the dust out again; after a change of rod, clamp or temperature the old heaps stay where they are until the tube is loud again (spread the dust yourself before you tune), and the counter shows \\(f\\) only while the rod rings. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> Cambiar el gas vuelve a esparcir el polvo; después de cambiar la varilla, la sujeción o la temperatura, los montículos anteriores se quedan donde están hasta que el tubo vuelva a sonar fuerte (esparce tú el polvo antes de afinar), y el contador muestra \\(f\\) solo mientras la varilla vibra. Envía cada parte a la hoja antes de borrar, para que cada parte tenga su propia copia de la tabla de datos.",
"Find \\(v_{\\text{rod}}\\) for steel two ways: from \\(2Lf/n\\), and from \\(v_{\\text{gas}}L/(nd)\\) using the theoretical speed in air. Compare both with \\(\\sqrt{E/\\rho}\\).":
  "Encuentra \\(v_{\\text{rod}}\\) para el acero de dos maneras: a partir de \\(2Lf/n\\), y a partir de \\(v_{\\text{gas}}L/(nd)\\) usando la rapidez teórica en el aire. Compara ambas con \\(\\sqrt{E/\\rho}\\).",
"From Part {#}, compare the heap spacing and the frequency with Part {#}. Explain both changes using where the rod must have nodes.":
  "Con la Parte {#}, compara la separación entre montículos y la frecuencia con las de la Parte {#}. Explica ambos cambios usando dónde debe tener nodos la varilla.",
"In the simulation the heap positions are read to {#} mm and the counter to {#} Hz, and the model has no noise, so the scatter of the points about the line comes only from reading the heap centers. Using all the heaps in a fit gives \\(d\\) much more precisely than any one pair. On a real tube add the width of the heaps, the fine ridges within them, end effects near the disc and plunger, the temperature of the gas and the rod’s own temperature, and the counter or tuning fork calibration.":
  "En la simulación las posiciones de los montículos se leen a {#} mm y el contador a {#} Hz, y el modelo no tiene ruido, así que la dispersión de los puntos alrededor de la recta viene solo de leer los centros de los montículos. Usar todos los montículos en un ajuste da \\(d\\) con mucha más precisión que cualquier par. En un tubo real agrega el ancho de los montículos, las crestas finas dentro de ellos, los efectos de los extremos cerca del disco y del émbolo, la temperatura del gas y la de la propia varilla, y la calibración del contador o del diapasón.",
"Why is the frequency the same in the rod and in the gas, while the wavelengths differ?":
  "¿Por qué la frecuencia es la misma en la varilla y en el gas, mientras que las longitudes de onda difieren?",
"Why are the heaps in helium farther apart than in air, at the same frequency?":
  "¿Por qué los montículos en helio están más separados que en aire, a la misma frecuencia?",
"Why can a rod clamped at its middle not ring with \\(n = 2\\)?":
  "¿Por qué una varilla sujeta en el centro no puede vibrar con \\(n = 2\\)?"
});
