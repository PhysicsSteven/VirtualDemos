/* ws/x-ray-spectra in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/x-ray-spectra', {
"Tube voltage V (kV)":
  "Voltaje del tubo V (kV)",
"Cursor wavelength λ (pm)":
  "Longitud de onda del cursor λ (pm)",
"Cursor energy E (keV)":
  "Energía del cursor E (keV)",
"X-Ray Spectra and Moseley’s Law | VirtualDemos":
  "Espectros de rayos X y ley de Moseley | VirtualDemos",
"X-Ray Spectra and Moseley’s Law":
  "Espectros de rayos X y ley de Moseley",
"<strong>Setups in the demo:</strong> Copper tube, {#} kV; Below the K edge; Mystery target (these three use the X-ray tube view, the subject of this worksheet); Fill up to neon; Chromium breaks the rule (the shells and periodic table worksheet).":
  "<strong>Configuraciones en la demo:</strong> Tubo de cobre, {#} kV; Por debajo del borde K; Blanco misterioso (estas tres usan la vista Tubo de rayos X, el tema de esta hoja de trabajo); Llenar hasta el neón; El cromo rompe la regla (la hoja de trabajo de capas y tabla periódica).",
"Electrons from a hot filament are accelerated through a voltage V, from {#} to {#} kV, and stop in the target. A spectrometer measures the X-rays. Plot the spectrum against wavelength or against photon energy.":
  "Los electrones de un filamento caliente se aceleran a través de un voltaje V, de {#} a {#} kV, y se detienen en el blanco. Un espectrómetro mide los rayos X. Grafica el espectro en función de la longitud de onda o de la energía del fotón.",
"The smooth part is bremsstrahlung, the radiation of electrons slowing down in the target. Its shape follows Kramers’ law for a thick target, and it ends at the photon energy eV.":
  "La parte suave es bremsstrahlung, la radiación de los electrones que se frenan en el blanco. Su forma sigue la ley de Kramers para un blanco grueso, y termina en la energía de fotón eV.",
"If eV is above the target’s K edge, the electrons can knock out K electrons, and the K lines appear: Kα₁ (from L₃), Kα₂ (from L₂) and Kβ₁ (from M₃). The line energies and K edges are measured values from the NIST X-Ray Transition Energies Database.":
  "Si eV está por encima del borde K del blanco, los electrones pueden arrancar electrones K, y aparecen las líneas K: Kα₁ (desde L₃), Kα₂ (desde L₂) y Kβ₁ (desde M₃). Las energías de las líneas y los bordes K son valores medidos de la NIST X-Ray Transition Energies Database.",
"The heights of the lines are drawn, not computed, and only roughly follow real tubes. Absorption in the target and window, which cuts off the long wavelength end of a real spectrum, the weaker K lines and the L lines are left out.":
  "Las alturas de las líneas se dibujan, no se calculan, y solo siguen aproximadamente a los tubos reales. Se omiten la absorción en el blanco y en la ventana, que corta el extremo de longitud de onda larga de un espectro real, las líneas K más débiles y las líneas L.",
"The spectrometer gives each line a width of {#}% of its energy.":
  "El espectrómetro da a cada línea un ancho de {#}% de su energía.",
"Drag the cursor on the spectrum, or use the arrow keys (Shift for bigger steps), to measure a wavelength or energy.":
  "Arrastra el cursor sobre el espectro, o usa las flechas (Shift para pasos más grandes), para medir una longitud de onda o una energía.",
"Record reading stores the target, Z, the voltage and the cursor’s wavelength and energy, and the shortest wavelength and line energies unless Blind is on. Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda el blanco, Z, el voltaje y la longitud de onda y la energía del cursor, y la longitud de onda mínima y las energías de las líneas a menos que A ciegas esté activado. Exportar a la hoja envía las lecturas a la tabla de datos de abajo. Borrar empieza una serie nueva, que va a una nueva copia de la tabla.",
"Blind hides the line energies, the cutoff and their labels; with it on you measure them with the cursor. The mystery target’s name and Z are never recorded.":
  "A ciegas oculta las energías de las líneas, el corte y sus etiquetas; con él activado las mides con el cursor. El nombre y la Z del blanco misterioso nunca se registran.",
"Measure the shortest wavelength an X-ray tube emits and use it to find Planck’s constant, measure the Kα lines of a range of elements to test Moseley’s law, and use the law to identify an unknown target.":
  "Mide la longitud de onda más corta que emite un tubo de rayos X y úsala para encontrar la constante de Planck, mide las líneas Kα de varios elementos para poner a prueba la ley de Moseley, y usa la ley para identificar un blanco desconocido.",
"An electron accelerated through a voltage V arrives at the target with kinetic energy eV. As it slows down in the target it emits X-rays with a continuous spread of energies, but no photon can carry more than eV. So the spectrum ends sharply at the shortest wavelength":
  "Un electrón acelerado a través de un voltaje V llega al blanco con energía cinética eV. Al frenarse en el blanco emite rayos X con una distribución continua de energías, pero ningún fotón puede llevar más de eV. Así que el espectro termina abruptamente en la longitud de onda mínima",
"\\[\\lambda_\\mathrm{min} = \\frac{hc}{eV},\\]":
  "\\[\\lambda_\\mathrm{min} = \\frac{hc}{eV},\\]",
"the Duane–Hunt limit (§{#}). It depends on the voltage but not on the target.":
  "el límite de Duane–Hunt (§{#}). Depende del voltaje pero no del blanco.",
"If the electrons have enough energy to knock an electron out of the K shell (n = {#}), an electron from a higher shell falls into the hole and emits a photon with the difference in energy. These lines are characteristic of the target element. For the Kα line, an L electron (n = {#}) falls into the K shell. It sees the nuclear charge Ze screened by the one K electron left, so roughly as in hydrogen with charge \\((Z - 1)e\\):":
  "Si los electrones tienen suficiente energía para arrancar un electrón de la capa K (n = {#}), un electrón de una capa superior cae en el hueco y emite un fotón con la diferencia de energía. Estas líneas son características del elemento del blanco. Para la línea Kα, un electrón L (n = {#}) cae en la capa K. Ve la carga nuclear Ze apantallada por el único electrón K que queda, así que aproximadamente como en el hidrógeno con carga \\((Z - 1)e\\):",
"\\[E_{K\\alpha} \\approx (13.6\\ \\mathrm{eV})(Z-1)^2\\left(\\frac{1}{1^2} - \\frac{1}{2^2}\\right) = \\frac{3}{4}(13.6\\ \\mathrm{eV})(Z-1)^2 .\\]":
  "\\[E_{K\\alpha} \\approx (13.6\\ \\mathrm{eV})(Z-1)^2\\left(\\frac{1}{1^2} - \\frac{1}{2^2}\\right) = \\frac{3}{4}(13.6\\ \\mathrm{eV})(Z-1)^2 .\\]",
"This is Moseley’s law: \\(\\sqrt{E_{K\\alpha}}\\) grows in a straight line with Z. In {#} Moseley used it to put the elements in order of Z and to find the gaps in the periodic table.":
  "Esta es la ley de Moseley: \\(\\sqrt{E_{K\\alpha}}\\) crece linealmente con Z. En {#}, Moseley la usó para ordenar los elementos por Z y para encontrar los huecos de la tabla periódica.",
"Find \\(\\lambda_\\mathrm{min}\\) for a tube at {#} kV, using \\(hc = 1239.84\\) eV·nm.":
  "Encuentra \\(\\lambda_\\mathrm{min}\\) para un tubo a {#} kV, usando \\(hc = 1239.84\\) eV·nm.",
"Use Moseley’s law to estimate the Kα energy and wavelength of copper (Z = {#}). The measured Kα₁ energy is {#} keV; how close is the estimate?":
  "Usa la ley de Moseley para estimar la energía y la longitud de onda Kα del cobre (Z = {#}). La energía Kα₁ medida es {#} keV; ¿qué tan cerca está la estimación?",
"Molybdenum’s K edge is at {#} keV. What is the lowest tube voltage that gives molybdenum K lines? Why is that more than the energy of its Kα photons?":
  "El borde K del molibdeno está en {#} keV. ¿Cuál es el menor voltaje del tubo que da líneas K del molibdeno? ¿Por qué es mayor que la energía de sus fotones Kα?",
"If you raise the voltage of a copper tube from {#} kV to {#} kV, which features of the spectrum move, and which stay where they are?":
  "Si subes el voltaje de un tubo de cobre de {#} kV a {#} kV, ¿qué características del espectro se mueven, y cuáles se quedan donde están?",
"No hazards in the virtual lab. Real X-ray tubes produce ionizing radiation and run at lethal voltages; they are used only inside interlocked shielding.":
  "No hay riesgos en el laboratorio virtual. Los tubos de rayos X reales producen radiación ionizante y funcionan con voltajes mortales; se usan solo dentro de blindajes con interbloqueo.",
"<strong>The spectrum.</strong> Start with Copper tube, {#} kV. Name the parts of the spectrum, and watch what happens as you change the voltage. Turn Blind on for the rest of the lab.":
  "<strong>El espectro.</strong> Empieza con Tubo de cobre, {#} kV. Nombra las partes del espectro, y observa qué pasa al cambiar el voltaje. Activa A ciegas para el resto del laboratorio.",
"<strong>The shortest wavelength.</strong> For copper at {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} kV, set the cursor at the shortest wavelength, where the spectrum starts to rise, and record a reading.":
  "<strong>La longitud de onda mínima.</strong> Para el cobre a {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} kV, pon el cursor en la longitud de onda mínima, donde el espectro empieza a subir, y registra una lectura.",
"<strong>The K edge.</strong> Pick Below the K edge. Raise the voltage from {#} kV in steps of {#} kV, and note the lowest voltage at which the K lines appear.":
  "<strong>El borde K.</strong> Elige Por debajo del borde K. Sube el voltaje desde {#} kV en pasos de {#} kV, y anota el menor voltaje con el que aparecen las líneas K.",
"<strong>Moseley’s law.</strong> Clear the readings. Set {#} kV, and for each of titanium, iron, copper, zinc, molybdenum, silver, tin and tungsten, set the cursor on the Kα₁ peak and record a reading. Send this run to a new copy of the table.":
  "<strong>La ley de Moseley.</strong> Borra las lecturas. Fija {#} kV, y para cada uno de titanio, hierro, cobre, zinc, molibdeno, plata, estaño y tungsteno, pon el cursor en el pico Kα₁ y registra una lectura. Envía esta corrida a una nueva copia de la tabla.",
"<strong>A mystery target.</strong> Clear again and pick Mystery target. Record the Kα₁ peak and the Kβ₁ peak. Send this run to a third copy of the table.":
  "<strong>Un blanco misterioso.</strong> Borra otra vez y elige Blanco misterioso. Registra el pico Kα₁ y el pico Kβ₁. Envía esta corrida a una tercera copia de la tabla.",
"<span>B</span>Target":
  "<span>B</span>Blanco",
"<span>D</span>Tube voltage V (kV)":
  "<span>D</span>Voltaje del tubo V (kV)",
"<span>E</span>Cursor wavelength λ (pm)":
  "<span>E</span>Longitud de onda del cursor λ (pm)",
"<span>F</span>Cursor energy E (keV)":
  "<span>F</span>Energía del cursor E (keV)",
"Target, row {#}":
  "Blanco, fila {#}",
"Z, row {#}":
  "Z, fila {#}",
"Tube voltage V (kV), row {#}":
  "Voltaje del tubo V (kV), fila {#}",
"Cursor wavelength λ (pm), row {#}":
  "Longitud de onda del cursor λ (pm), fila {#}",
"Cursor energy E (keV), row {#}":
  "Energía del cursor E (keV), fila {#}",
"{#}/V ({#}/kV), row {#}":
  "{#}/V ({#}/kV), fila {#}",
"√E (√keV), row {#}":
  "√E (√keV), fila {#}",
"Fill in the last two columns yourself where you need them.":
  "Llena tú mismo las dos últimas columnas donde las necesites.",
"Graph \\(\\lambda_\\mathrm{min}\\) against \\(1/V\\). The slope is \\(hc/e\\); use it and the accepted values of c and e to find Planck’s constant.":
  "Grafica \\(\\lambda_\\mathrm{min}\\) en función de \\(1/V\\). La pendiente es \\(hc/e\\); úsala junto con los valores aceptados de c y e para encontrar la constante de Planck.",
"Graph \\(\\sqrt{E}\\) against Z for the Kα₁ lines. Find the slope and the intercept on the Z axis, and compare both with Moseley’s law. What does the intercept tell you about screening?":
  "Grafica \\(\\sqrt{E}\\) en función de Z para las líneas Kα₁. Encuentra la pendiente y la intersección con el eje Z, y compara ambas con la ley de Moseley. ¿Qué te dice la intersección sobre el apantallamiento?",
"Use your fit to find Z for the mystery target, and name it.":
  "Usa tu ajuste para encontrar la Z del blanco misterioso, y nómbralo.",
"Compare the voltage at which molybdenum’s K lines appeared with its K edge and with the energy of its Kα₁ line. Explain.":
  "Compara el voltaje con el que aparecieron las líneas K del molibdeno con su borde K y con la energía de su línea Kα₁. Explica.",
"Look at the two Kα lines of tungsten. Why are there two, and why are they so close together compared with the gap to Kβ₁?":
  "Observa las dos líneas Kα del tungsteno. ¿Por qué hay dos, y por qué están tan juntas comparadas con la separación hasta Kβ₁?",
"The spectrum has no noise, but the start of the bremsstrahlung and the peaks of the lines have to be judged by eye. Estimate how well you can set the cursor at each, and carry it through to h and to the mystery Z. Moseley’s law itself is an approximation; say whether your points scatter about the straight line by more than your cursor uncertainty.":
  "El espectro no tiene ruido, pero el inicio del bremsstrahlung y los picos de las líneas se tienen que juzgar a ojo. Estima qué tan bien puedes poner el cursor en cada uno, y llévalo hasta h y hasta la Z misteriosa. La ley de Moseley misma es una aproximación; di si tus puntos se dispersan alrededor de la recta más que tu incertidumbre del cursor.",
"Why does the shortest wavelength depend on the voltage but not on the target, while the K lines depend on the target but not on the voltage?":
  "¿Por qué la longitud de onda mínima depende del voltaje pero no del blanco, mientras que las líneas K dependen del blanco pero no del voltaje?",
"The Duane–Hunt limit gives h from \\(\\lambda_\\mathrm{min}\\), V, e and c. What does that measurement have in common with the photoelectric effect, and how is it the reverse?":
  "El límite de Duane–Hunt da h a partir de \\(\\lambda_\\mathrm{min}\\), V, e y c. ¿Qué tiene en común esa medición con el efecto fotoeléctrico, y en qué es lo inverso?",
"Before Moseley, the periodic table was ordered by atomic mass, and cobalt ({#} u) came after nickel ({#} u). How would X-ray spectra settle the order?":
  "Antes de Moseley, la tabla periódica se ordenaba por masa atómica, y el cobalto ({#} u) iba después del níquel ({#} u). ¿Cómo resolverían el orden los espectros de rayos X?",
"Why are X-ray lines a better fingerprint of an element than its visible spectrum when the element is in a compound?":
  "¿Por qué las líneas de rayos X son una mejor huella de un elemento que su espectro visible cuando el elemento está en un compuesto?",
"Prelab answers, the three table copies with their graphs and fits, your value of h with its uncertainty, the slope and intercept of your Moseley plot with comparisons, the mystery Z and element, the K edge observation, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las tres copias de la tabla con sus gráficas y ajustes, tu valor de h con su incertidumbre, la pendiente y la intersección de tu gráfica de Moseley con las comparaciones, la Z y el elemento misteriosos, la observación del borde K y las respuestas a las preguntas. Identifica los datos simulados.",
"Energy of a line":
  "Energía de una línea",
"Energy of the Kα line":
  "Energía de la línea Kα",
"Atomic number of the anode metal":
  "Número atómico del metal del ánodo",
"Shortest wavelength from the tube":
  "Longitud de onda mínima del tubo",
"Shells, the Periodic Table and X-Rays (X-ray tube)":
  "Capas, la tabla periódica y los rayos X (Tubo de rayos X)"
});
