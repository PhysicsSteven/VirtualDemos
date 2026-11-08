/* ws/resonators in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/resonators', {
"Resonance k":
  "Resonancia k",
"Lower bracket L (cm)":
  "Límite inferior L (cm)",
"Upper bracket L (cm)":
  "Límite superior L (cm)",
"Captured/read L (cm)":
  "L capturada/leída (cm)",
"Spacing (cm)":
  "Espaciamiento (cm)",
"Speed of Sound | VirtualDemos":
  "Rapidez del sonido | VirtualDemos",
"Speed of Sound":
  "Rapidez del sonido",
"<strong>Setups in the demo</strong> (the Presets chips)<strong>:</strong> Resonance tube, find c; Open vs closed pipe; Pluck at the middle; Guitar string; Bottle, blow across it; Fill the bottle. This handout uses Resonance tube, find c, which the demo opens on: the <strong>Pipes</strong> view with <strong>Resonance tube</strong> chosen, {#} Hz, a {#} cm tube, Q = {#} and {#} °C.":
  "<strong>Configuraciones en la demo</strong> (los botones de Configuraciones predefinidas)<strong>:</strong> Tubo de resonancia, encontrar c; Tubo abierto contra cerrado; Pulsar a la mitad; Cuerda de guitarra; Botella, soplar sobre ella; Llenar la botella. Esta guía usa Tubo de resonancia, encontrar c, con la que se abre la demo: la vista <strong>Tubos</strong> con <strong>Tubo de resonancia</strong> elegido, {#} Hz, un tubo de {#} cm, Q = {#} y {#} °C.",
"The picture is a {#} m tube standing in water with a source over its open top. The pressure and the air displacement are drawn in the air column, and the level plot beside it shows the sound level against the water position: your swept trace and, unless Blind is on, the computed response and the true resonance positions. Captured readings are marked on the scale. With <strong>Sound</strong> on you hear a tone at f whose loudness follows the computed pressure in the tube, so it swells at each resonance.":
  "La imagen es un tubo de {#} m parado en agua con una fuente sobre su extremo superior abierto. La presión y el desplazamiento del aire se dibujan en la columna de aire, y la gráfica de nivel junto a ella muestra el nivel sonoro en función de la posición del agua: tu traza de barrido y, a menos que A ciegas esté activado, la respuesta calculada y las posiciones reales de resonancia. Las lecturas capturadas se marcan en la escala. Con <strong>Sonido</strong> activado oyes un tono a f cuya sonoridad sigue la presión calculada en el tubo, así que aumenta en cada resonancia.",
"Controls on the card under the picture: <strong>Source frequency f</strong>, {#} to {#} Hz in {#} Hz steps, with tuning fork chips at {#}, {#}, {#}, {#} and {#} Hz; <strong>Water surface below the top</strong>, {#} to {#} cm in {#} mm steps (drag the water surface on the picture, or use the up and down arrows, Shift for {#} cm); <strong>Tube inner diameter</strong>, {#} to {#} cm; <strong>Tube quality factor Q</strong>, {#} to {#}; and <strong>Air temperature</strong>, −{#} to {#} °C in {#} °C steps.":
  "Controles en la tarjeta bajo la imagen: <strong>Frecuencia de la fuente f</strong>, de {#} a {#} Hz en pasos de {#} Hz, con botones de diapasón a {#}, {#}, {#}, {#} y {#} Hz; <strong>Superficie del agua bajo el borde superior</strong>, de {#} a {#} cm en pasos de {#} mm (arrastra la superficie del agua en la imagen, o usa las flechas arriba y abajo, Shift para {#} cm); <strong>Diámetro interior del tubo</strong>, de {#} a {#} cm; <strong>Factor de calidad del tubo Q</strong>, de {#} a {#}; y <strong>Temperatura del aire</strong>, de −{#} a {#} °C en pasos de {#} °C.",
"Readouts: <strong>Speed of sound c</strong> and the wavelength at the note under Air; under Resonance tube, the <strong>Level in the tube</strong> in dB, the <strong>Nearest resonance</strong> (its k and position), the <strong>End correction {#}a</strong> and the <strong>Spacing λ/{#}</strong>.":
  "Lecturas: <strong>Rapidez del sonido c</strong> y la longitud de onda de la nota, bajo Aire; bajo Tubo de resonancia, el <strong>Nivel en el tubo</strong> en dB, la <strong>Resonancia más cercana</strong> (su k y su posición), la <strong>Corrección de extremo {#}a</strong> y el <strong>Espaciamiento λ/{#}</strong>.",
"<strong>Record reading</strong> (or Enter on the picture) stores the frequency, the water position as read on the scale, the temperature, the diameter and the seed, and numbers the reading k from the top at that frequency; k and L can be edited in the table, which also shows the spacing to the reading with the next lower k. The plot below the table is L against (2k − {#})/4f with a least squares line, and the fit readouts give c from the spacings, the slope c, the intercept −ΔL and ΔL/a, with their standard errors.":
  "<strong>Registrar lectura</strong> (o Enter sobre la imagen) guarda la frecuencia, la posición del agua leída en la escala, la temperatura, el diámetro y la semilla, y numera la lectura k desde arriba a esa frecuencia; k y L se pueden editar en la tabla, que también muestra el espaciamiento hasta la lectura con la k inmediata inferior. La gráfica bajo la tabla es L en función de (2k − {#})/4f con una recta de mínimos cuadrados, y las lecturas del ajuste dan c a partir de los espaciamientos, la pendiente c, la ordenada al origen −ΔL y ΔL/a, con sus errores estándar.",
"<strong>Export to worksheet</strong> sends f, k, the read L, the spacing and x = (2k − {#})/4f in milliseconds to the Data table’s f, k, Captured/read L, Spacing and x columns; the bracket columns are yours to fill. <strong>Export CSV</strong> saves every column, including x = (2k − {#})/4f in milliseconds. The <strong>Reading seed</strong> (press <strong>New</strong> for another) fixes the reading scatter.":
  "<strong>Exportar a la hoja</strong> envía f, k, la L leída, el espaciamiento y x = (2k − {#})/4f en milisegundos a las columnas f, k, L capturada/leída, Espaciamiento y x de la tabla de datos; las columnas de los límites las llenas tú. <strong>Exportar CSV</strong> guarda todas las columnas, incluida x = (2k − {#})/4f en milisegundos. La <strong>Semilla de lectura</strong> (pulsa <strong>Nuevo</strong> para otra) fija la dispersión de las lecturas.",
"<strong>Blind</strong> hides the computed response, the true resonance positions, the nearest resonance, the spacing λ/{#} and the expected c and ΔL under the fit, and leaves the level, the trace, the readings and the fit.":
  "<strong>A ciegas</strong> oculta la respuesta calculada, las posiciones reales de resonancia, la resonancia más cercana, el espaciamiento λ/{#} y la c y la ΔL esperadas bajo el ajuste, y deja el nivel, la traza, las lecturas y el ajuste.",
"Dry air: \\(c = 331.3\\sqrt{1 + \\frac{t_{\\rm C}}{273.15}}\\ \\text{m/s},\\) the ideal gas result \\(\\sqrt{\\gamma RT/M}\\) with \\(\\gamma = 1.400\\) and \\(M = 28.96\\) g/mol, which gives {#} m/s at {#} °C and {#} m/s at {#} °C. Humidity raises c slightly and is left out.":
  "Aire seco: \\(c = 331.3\\sqrt{1 + \\frac{t_{\\rm C}}{273.15}}\\ \\text{m/s},\\) el resultado del gas ideal \\(\\sqrt{\\gamma RT/M}\\) con \\(\\gamma = 1.400\\) y \\(M = 28.96\\) g/mol, que da {#} m/s a {#} °C y {#} m/s a {#} °C. La humedad aumenta un poco c y se omite.",
"One dimensional plane waves in a rigid tube. The water surface is rigid, and the open end reflects as if the tube were \\(\\Delta L = 0.6133a\\) longer (unflanged end, Levine and Schwinger {#}, valid for \\(ka \\ll 1\\)), so the resonances are at \\(L_k + \\Delta L = (2k - 1)\\frac{\\lambda}{4},\\) successive ones \\(\\lambda/2\\) apart. For the {#} cm tube \\(\\Delta L = 0.98\\) cm.":
  "Ondas planas unidimensionales en un tubo rígido. La superficie del agua es rígida, y el extremo abierto refleja como si el tubo fuera \\(\\Delta L = 0.6133a\\) más largo (extremo sin brida, Levine y Schwinger {#}, válido para \\(ka \\ll 1\\)), así que las resonancias están en \\(L_k + \\Delta L = (2k - 1)\\frac{\\lambda}{4},\\) separadas \\(\\lambda/2\\) entre sucesivas. Para el tubo de {#} cm \\(\\Delta L = 0.98\\) cm.",
"The level is the pressure amplitude at the water, with the source fixing the pressure at the effective open end: \\(\\frac{1}{\\left\\lvert\\cos\\!\\left(\\tilde k\\,(L + \\Delta L)\\right)\\right\\rvert},\\qquad \\tilde k = \\frac{2\\pi f}{c}\\left(1 - \\frac{i}{2Q}\\right),\\) with one quality factor Q for every resonance, a stand in for wall and radiation losses (real tubes have Q of tens). Its peaks sit about \\((L + \\Delta L)/4Q^2\\) above the resonance positions, at most {#} mm at Q = {#} in a {#} m tube.":
  "El nivel es la amplitud de presión en el agua, con la fuente fijando la presión en el extremo abierto efectivo: \\(\\frac{1}{\\left\\lvert\\cos\\!\\left(\\tilde k\\,(L + \\Delta L)\\right)\\right\\rvert},\\qquad \\tilde k = \\frac{2\\pi f}{c}\\left(1 - \\frac{i}{2Q}\\right),\\) con un solo factor de calidad Q para todas las resonancias, que representa las pérdidas en las paredes y por radiación (los tubos reales tienen Q de decenas). Sus picos quedan aproximadamente \\((L + \\Delta L)/4Q^2\\) por encima de las posiciones de resonancia, a lo sumo {#} mm con Q = {#} en un tubo de {#} m.",
"The readings are simulated. Record reading stores the water position you chose, never the true resonance, plus a small error that stands for reading the meniscus: Gaussian like scatter with \\(\\sigma = 1.5\\ \\text{mm}\\), fixed by the seed, so a class sharing a seed gets the same numbers for the same positions.":
  "Las lecturas son simuladas. Registrar lectura guarda la posición del agua que elegiste, nunca la resonancia real, más un pequeño error que representa la lectura del menisco: dispersión de tipo gaussiano con \\(\\sigma = 1.5\\ \\text{mm}\\), fijada por la semilla, así que un grupo que comparte una semilla obtiene los mismos números para las mismas posiciones.",
"Measure the speed of sound by finding the lengths at which an air column resonates. Use the same data to estimate the open end correction.":
  "Mide la rapidez del sonido encontrando las longitudes a las que resuena una columna de aire. Usa los mismos datos para estimar la corrección del extremo abierto.",
"Water closes the bottom of the tube. At the water surface, air displacement is nearly zero. At the open top, pressure variation is nearly zero. The shortest resonating column is about a quarter wavelength long. Each next resonance adds half a wavelength.":
  "El agua cierra el fondo del tubo. En la superficie del agua, el desplazamiento del aire es casi cero. En el extremo superior abierto, la variación de presión es casi cero. La columna más corta que resuena mide aproximadamente un cuarto de longitud de onda. Cada resonancia siguiente agrega media longitud de onda.",
"The pressure node sits slightly beyond the open end, so":
  "El nodo de presión queda un poco más allá del extremo abierto, así que",
"\\[L_k+\\Delta L=\\frac{(2k-1)\\lambda}{4},\\qquad \\lambda=\\frac{c}{f}.\\]":
  "\\[L_k+\\Delta L=\\frac{(2k-1)\\lambda}{4},\\qquad \\lambda=\\frac{c}{f}.\\]",
"Here \\(k = 1\\) is the first resonance, and \\(\\Delta L\\) is the end correction. Neighboring resonances therefore give":
  "Aquí \\(k = 1\\) es la primera resonancia, y \\(\\Delta L\\) es la corrección de extremo. Por lo tanto, las resonancias vecinas dan",
"We can also fit all the measurements at once:":
  "También podemos ajustar todas las mediciones a la vez:",
"\\[L_k=c\\left(\\frac{2k-1}{4f}\\right)-\\Delta L.\\]":
  "\\[L_k=c\\left(\\frac{2k-1}{4f}\\right)-\\Delta L.\\]",
"The graph’s slope is \\(c\\) and its intercept is \\(-\\Delta L\\).":
  "La pendiente de la gráfica es \\(c\\) y su ordenada al origen es \\(-\\Delta L\\).",
"Why are successive resonances half a wavelength apart rather than a quarter wavelength apart?":
  "¿Por qué las resonancias sucesivas están separadas media longitud de onda y no un cuarto de longitud de onda?",
"Which is a displacement node: the water surface or the open end?":
  "¿Cuál es un nodo de desplazamiento: la superficie del agua o el extremo abierto?",
"Why does using the spacing remove the need to know the end correction first?":
  "¿Por qué usar el espaciamiento elimina la necesidad de conocer primero la corrección de extremo?",
"With real equipment, secure the glass tube and adjust the water slowly. Keep water away from electrical equipment. Use a comfortable sound level; loud sound is not needed to locate a resonance.":
  "Con equipo real, asegura el tubo de vidrio y ajusta el agua despacio. Mantén el agua lejos del equipo eléctrico. Usa un nivel sonoro cómodo; no hace falta un sonido fuerte para localizar una resonancia.",
"<strong>Find resonances.</strong> Record air temperature, tube inner diameter and the source frequency. Start with a short air column and lower the water slowly.":
  "<strong>Encuentra resonancias.</strong> Registra la temperatura del aire, el diámetro interior del tubo y la frecuencia de la fuente. Empieza con una columna de aire corta y baja el agua despacio.",
"Find the first loud maximum. Approach it from each direction and record a short interval that brackets the loudest position.":
  "Encuentra el primer máximo fuerte. Acércate a él desde cada dirección y registra un intervalo corto que encierre la posición de mayor sonoridad.",
"Record the midpoint as your chosen length. Continue downward and find the next resonances.":
  "Registra el punto medio como tu longitud elegida. Sigue bajando y encuentra las resonancias siguientes.",
"Number them from the top. If you skip one, keep its order number in mind rather than calling the next peak the second.":
  "Numéralas desde arriba. Si te saltas una, ten en cuenta su número de orden en vez de llamar al siguiente pico el segundo.",
"Repeat the placements, typing the mode number \\(k\\) for each repeated reading, then use a second source frequency without changing temperature or tube diameter.":
  "Repite las colocaciones, escribiendo el número de modo \\(k\\) para cada lectura repetida, y luego usa una segunda frecuencia de la fuente sin cambiar la temperatura ni el diámetro del tubo.",
"Repeat two of the resonances at a second temperature, and compare how the peak width changes when the damping is changed.":
  "Repite dos de las resonancias a una segunda temperatura, y compara cómo cambia el ancho del pico cuando se cambia el amortiguamiento.",
"<strong>Using the virtual apparatus.</strong> Choose <strong>Resonance tube, find c</strong>, set {#} °C, diameter {#} cm and {#} Hz, record the <strong>Reading seed</strong> and select <strong>Blind</strong>. Clear the readings. Move <strong>Water surface below the top</strong> to each maximum and press <strong>Record reading</strong>. Correct the editable \\(k\\) column if needed. Send the {#} Hz readings to the worksheet before clearing, then repeat at {#} Hz using <strong>Source frequency f</strong> and send those, so each frequency gets its own copy of the Data table. Then return to {#} Hz, set {#} °C, capture the first two resonances and send them as a third copy. At {#} °C, compare the width of the first resonance at <strong>Tube quality factor Q</strong> {#} and {#} using the level readout. The captured length includes a small simulated meniscus reading error. Use the swept level trace as a visual guide if sound is unavailable.":
  "<strong>Uso del aparato virtual.</strong> Elige <strong>Tubo de resonancia, encontrar c</strong>, pon {#} °C, diámetro {#} cm y {#} Hz, anota la <strong>Semilla de lectura</strong> y selecciona <strong>A ciegas</strong>. Borra las lecturas. Mueve <strong>Superficie del agua bajo el borde superior</strong> a cada máximo y pulsa <strong>Registrar lectura</strong>. Corrige la columna editable \\(k\\) si hace falta. Envía las lecturas de {#} Hz a la hoja de trabajo antes de borrar, luego repite a {#} Hz usando <strong>Frecuencia de la fuente f</strong> y envíalas, para que cada frecuencia tenga su propia copia de la tabla de datos. Luego regresa a {#} Hz, pon {#} °C, captura las dos primeras resonancias y envíalas como una tercera copia. A {#} °C, compara el ancho de la primera resonancia con <strong>Factor de calidad del tubo Q</strong> {#} y {#} usando la lectura del nivel. La longitud capturada incluye un pequeño error simulado de lectura del menisco. Usa la traza de nivel del barrido como guía visual si no hay sonido.",
"<span>B</span>Resonance \\(k\\)":
  "<span>B</span>Resonancia \\(k\\)",
"<span>C</span>Lower bracket \\(L\\) (cm)":
  "<span>C</span>Límite inferior \\(L\\) (cm)",
"<span>D</span>Upper bracket \\(L\\) (cm)":
  "<span>D</span>Límite superior \\(L\\) (cm)",
"<span>E</span>Captured/read \\(L\\) (cm)":
  "<span>E</span>\\(L\\) capturada/leída (cm)",
"<span>F</span>Spacing (cm)":
  "<span>F</span>Espaciamiento (cm)",
"Lower bracket L (cm), row {#}":
  "Límite inferior L (cm), fila {#}",
"Upper bracket L (cm), row {#}":
  "Límite superior L (cm), fila {#}",
"Captured/read L (cm), row {#}":
  "L capturada/leída (cm), fila {#}",
"Spacing (cm), row {#}":
  "Espaciamiento (cm), fila {#}",
"x (ms), row {#}":
  "x (ms), fila {#}",
"Resonance k, row {#}":
  "Resonancia k, fila {#}",
"Here \\(x = (2k - 1)/(4f)\\). Record temperature, tube diameter and seed above the table. Use a separate copy when temperature changes.":
  "Aquí \\(x = (2k - 1)/(4f)\\). Anota la temperatura, el diámetro del tubo y la semilla arriba de la tabla. Usa una copia aparte cuando cambie la temperatura.",
"Calculate \\(c\\) from each neighboring spacing. If you skipped an order, divide by the number of order steps between the two readings.":
  "Calcula \\(c\\) a partir de cada espaciamiento entre vecinas. Si te saltaste un orden, divide entre el número de pasos de orden entre las dos lecturas.",
"Plot \\(L\\) against \\(x = (2k - 1)/(4f)\\) for each frequency at {#} °C. Fit a line and find \\(c\\) and \\(\\Delta L\\). With \\(L\\) in centimeters and \\(x\\) in milliseconds the slope is in cm/ms, and {#} cm/ms = {#} m/s.":
  "Grafica \\(L\\) en función de \\(x = (2k - 1)/(4f)\\) para cada frecuencia a {#} °C. Ajusta una recta y encuentra \\(c\\) y \\(\\Delta L\\). Con \\(L\\) en centímetros y \\(x\\) en milisegundos la pendiente está en cm/ms, y {#} cm/ms = {#} m/s.",
"Compare \\(\\Delta L\\) with \\(0.6133a\\), where \\(a\\) is the tube’s inner radius.":
  "Compara \\(\\Delta L\\) con \\(0.6133a\\), donde \\(a\\) es el radio interior del tubo.",
"Compare your speed with the dry air prediction after finishing the measurement:":
  "Compara tu rapidez con la predicción para aire seco después de terminar la medición:",
"\\[c=331.3\\sqrt{1+\\frac{t_{\\rm C}}{273.15}}\\ \\mathrm{m/s}.\\]":
  "\\[c=331.3\\sqrt{1+\\frac{t_{\\rm C}}{273.15}}\\ \\mathrm{m/s}.\\]",
"For the temperature comparison, explain whether the positions and spacing moved in the expected direction. Describe how the width of the resonance changed with Q.":
  "Para la comparación de temperaturas, explica si las posiciones y el espaciamiento se movieron en el sentido esperado. Describe cómo cambió el ancho de la resonancia con Q.",
"Use your position brackets, repeated placements and the scatter of the fit to estimate uncertainty. Include the source frequency and temperature uncertainties if available. A common error in the scale’s zero cancels from spacing, but changes the fitted end correction. This is one reason the end correction is often less precise than the speed. Discuss whether broad resonance peaks made the center hard to locate.":
  "Usa tus intervalos de posición, las colocaciones repetidas y la dispersión del ajuste para estimar la incertidumbre. Incluye las incertidumbres de la frecuencia de la fuente y de la temperatura si las tienes. Un error común en el cero de la escala se cancela en el espaciamiento, pero cambia la corrección de extremo ajustada. Esta es una razón por la que la corrección de extremo suele ser menos precisa que la rapidez. Discute si los picos de resonancia anchos hicieron difícil localizar el centro.",
"Why does the tube resonate only at certain lengths?":
  "¿Por qué el tubo resuena solo a ciertas longitudes?",
"What happens to the first resonance length when the air gets warmer?":
  "¿Qué le pasa a la longitud de la primera resonancia cuando el aire se calienta?",
"Why can a good slope still give a poor end correction?":
  "¿Por qué una buena pendiente puede dar aun así una mala corrección de extremo?",
"How would mislabeling a skipped resonance affect your result?":
  "¿Cómo afectaría a tu resultado numerar mal una resonancia que te saltaste?",
"Prelab answers, the data table and CSV, spacing calculations, the fitted graph and residuals, \\(c\\) and \\(\\Delta L\\) with uncertainty, the temperature and damping comparison, and answers to the questions. Identify simulated data and give the seed.":
  "Respuestas del prelaboratorio, la tabla de datos y el CSV, los cálculos de espaciamiento, la gráfica ajustada y los residuos, \\(c\\) y \\(\\Delta L\\) con incertidumbre, la comparación de temperatura y amortiguamiento, y las respuestas a las preguntas. Identifica los datos simulados y da la semilla.",
"Length of the air column (ΔL: the end correction)":
  "Longitud de la columna de aire (ΔL: la corrección de extremo)",
"Air column length at resonance k":
  "Longitud de la columna de aire en la resonancia k",
"Air column length at the next resonance":
  "Longitud de la columna de aire en la resonancia siguiente",
"Molar mass of air":
  "Masa molar del aire",
"Quality factor of the resonances":
  "Factor de calidad de las resonancias",
"Absolute temperature":
  "Temperatura absoluta",
"Inner radius of the tube":
  "Radio interior del tubo",
"Speed of sound in dry air":
  "Rapidez del sonido en aire seco",
"Ratio of heat capacities of air":
  "Razón de capacidades caloríficas del aire",
"Imaginary unit, √−{#}":
  "Unidad imaginaria, √−{#}",
"Resonance number (in ka, the wave number {#}π/λ)":
  "Número de la resonancia (en ka, el número de onda {#}π/λ)",
"Standard deviation of the reading scatter":
  "Desviación estándar de la dispersión de las lecturas",
"Air temperature":
  "Temperatura del aire",
"Complex wave number, with the damping in its imaginary part":
  "Número de onda complejo, con el amortiguamiento en su parte imaginaria",
"Resonators":
  "Resonadores"
});
