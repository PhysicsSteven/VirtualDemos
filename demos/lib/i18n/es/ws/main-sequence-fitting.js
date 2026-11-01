/* ws/main-sequence-fitting in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/main-sequence-fitting', {
"Cluster":
  "Cúmulo",
"Shift m - M (mag)":
  "Desplazamiento m - M (mag)",
"Distance for this shift d (pc)":
  "Distancia para este desplazamiento d (pc)",
"Stars in the fit":
  "Estrellas en el ajuste",
"Mean offset (mag)":
  "Desviación media (mag)",
"Mean square offset (mag²)":
  "Desviación cuadrática media (mag²)",
"Spectral type":
  "Tipo espectral",
"Apparent magnitude V":
  "Magnitud aparente V",
"Mean M of this type (mag)":
  "M media de este tipo (mag)",
"Spread of M (mag)":
  "Dispersión de M (mag)",
"Nearby stars of this type":
  "Estrellas cercanas de este tipo",
"m - M (mag)":
  "m - M (mag)",
"Spectroscopic distance (pc)":
  "Distancia espectroscópica (pc)",
"Uncertainty (%)":
  "Incertidumbre (%)",
"Parallax distance (pc)":
  "Distancia por paralaje (pc)",
"Spectroscopic ÷ parallax":
  "Espectroscópica ÷ paralaje",
"Distances from the Main Sequence | VirtualDemos":
  "Distancias a partir de la secuencia principal | VirtualDemos",
"Distances from the Main Sequence":
  "Distancias a partir de la secuencia principal",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (blackbody radiation and the Stefan–Boltzmann law) and §{#} (the distance ladder behind the Hubble law). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (radiación de cuerpo negro y la ley de Stefan–Boltzmann) y §{#} (la escalera de distancias detrás de la ley de Hubble). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> {#} Parallax; Spectroscopic parallax; Main sequence fitting; {#} Cepheids; Cepheid photometry; {#} Type Ia; {#} Hubble’s law; Whole ladder. This worksheet uses <strong>Main sequence fitting</strong> and <strong>Spectroscopic parallax</strong>.":
  "<strong>Configuraciones en la demo:</strong> {#} Paralaje; Paralaje espectroscópico; Ajuste de la secuencia principal; {#} Cefeidas; Fotometría de cefeidas; {#} Tipo Ia; {#} Ley de Hubble; Toda la escalera. Esta hoja de trabajo usa <strong>Ajuste de la secuencia principal</strong> y <strong>Paralaje espectroscópico</strong>.",
"Both views stand on the same calibration: the real main sequence of the Hipparcos stars within {#} pc of the Sun, from the HYG database v3.8 (CC BY-SA {#}). The ridge line is a quadratic fit of absolute magnitude M (V band) against the color index B − V to the main sequence stars, with stars more than three standard deviations off the line left out.":
  "Ambas vistas se basan en la misma calibración: la secuencia principal real de las estrellas de Hipparcos a menos de {#} pc del Sol, de la base de datos HYG v3.8 (CC BY-SA {#}). La línea central es un ajuste cuadrático de la magnitud absoluta M (banda V) en función del índice de color B − V para las estrellas de la secuencia principal, omitiendo las estrellas a más de tres desviaciones estándar de la línea.",
"Main sequence fitting: a cluster’s stars are plotted as V against B − V. Drag the cluster up or down, or use the slider, to choose the shift m − M; the readouts give the distance for that shift, how many cluster stars are in the fit (B − V from {#} to {#}), and the mean and the mean square of their offsets from the ridge line. Cluster A, B and C are simulated clusters at hidden distances; Mystery cluster makes a new one at random. Show the true distance reveals it.":
  "Ajuste de la secuencia principal: las estrellas de un cúmulo se grafican como V en función de B − V. Arrastra el cúmulo hacia arriba o hacia abajo, o usa el control deslizante, para elegir el desplazamiento m − M; las lecturas dan la distancia para ese desplazamiento, cuántas estrellas del cúmulo entran en el ajuste (B − V de {#} a {#}), y la media y la media cuadrática de sus desviaciones respecto a la línea central. Cúmulo A, B y C son cúmulos simulados a distancias ocultas; Cúmulo misterioso crea uno nuevo al azar. Mostrar la distancia verdadera la revela.",
"Spectroscopic parallax: ten real stars {#} to {#} pc away, classed as main sequence. The demo gives each star’s spectral type and apparent magnitude V, and the mean absolute magnitude, its spread and the number of nearby stars of the same type. Show the parallax distance gives the Hipparcos distance to compare.":
  "Paralaje espectroscópico: diez estrellas reales a entre {#} y {#} pc, clasificadas como de secuencia principal. La demo da el tipo espectral y la magnitud aparente V de cada estrella, y la magnitud absoluta media, su dispersión y el número de estrellas cercanas del mismo tipo. Mostrar la distancia por paralaje da la distancia de Hipparcos para comparar.",
"Record reading stores the current cluster and shift, or the current star. Export to worksheet sends cluster readings to the first data table below and star readings to the second. Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda el cúmulo y el desplazamiento actuales, o la estrella actual. Exportar a la hoja envía las lecturas de cúmulos a la primera tabla de datos de abajo y las de estrellas a la segunda. Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"The model: the clusters are simulated, with a spread of {#} mag in V and {#} in B − V, and {#}% of their stars unresolved pairs brighter by up to {#} mag. There is no dust (no reddening or extinction) and nothing fainter than V = {#}.":
  "El modelo: los cúmulos son simulados, con una dispersión de {#} mag en V y {#} en B − V, y el {#}% de sus estrellas son pares no resueltos hasta {#} mag más brillantes. No hay polvo (ni enrojecimiento ni extinción) ni nada más débil que V = {#}.",
"Find the distances to star clusters by sliding their main sequence onto the nearby stars’ main sequence, and to single stars from their spectral type alone, and test both against known distances.":
  "Encuentra las distancias a cúmulos estelares deslizando su secuencia principal sobre la secuencia principal de las estrellas cercanas, y a estrellas individuales solo a partir de su tipo espectral, y pon a prueba ambos métodos con distancias conocidas.",
"<strong>Distance modulus.</strong> Brightness falls as \\(1/d^2\\), so a star’s apparent magnitude m and absolute magnitude M (how bright it would look from {#} pc) differ by":
  "<strong>Módulo de distancia.</strong> El brillo disminuye como \\(1/d^2\\), así que la magnitud aparente m de una estrella y su magnitud absoluta M (qué tan brillante se vería desde {#} pc) difieren en",
"\\[m - M = 5\\log_{10}\\frac{d}{10\\ \\text{pc}},\\qquad d = 10^{(m - M + 5)/5}\\ \\text{pc}.\\]":
  "\\[m - M = 5\\log_{10}\\frac{d}{10\\ \\text{pc}},\\qquad d = 10^{(m - M + 5)/5}\\ \\text{pc}.\\]",
"<strong>The main sequence.</strong> A main sequence star’s color (or its spectral type) sets its surface temperature, and for stars burning hydrogen in their cores the temperature also sets the luminosity. So on a plot of M against B − V the main sequence is a narrow band, and for nearby stars, whose distances we know from parallax, that band is calibrated.":
  "<strong>La secuencia principal.</strong> El color (o el tipo espectral) de una estrella de secuencia principal fija su temperatura superficial, y para las estrellas que queman hidrógeno en su núcleo la temperatura también fija la luminosidad. Así que en una gráfica de M en función de B − V la secuencia principal es una banda angosta, y para las estrellas cercanas, cuyas distancias conocemos por paralaje, esa banda está calibrada.",
"<strong>Main sequence fitting.</strong> All the stars of a cluster are at nearly the same distance, so its main sequence has the same shape, shifted down by the cluster’s \\(m - M\\). The shift that puts the cluster’s stars on the calibrated ridge line gives the distance. For a shift \\(\\mu\\), the offset of star \\(i\\) from the line is":
  "<strong>Ajuste de la secuencia principal.</strong> Todas las estrellas de un cúmulo están casi a la misma distancia, así que su secuencia principal tiene la misma forma, desplazada hacia abajo por el \\(m - M\\) del cúmulo. El desplazamiento que pone las estrellas del cúmulo sobre la línea central calibrada da la distancia. Para un desplazamiento \\(\\mu\\), la desviación de la estrella \\(i\\) respecto a la línea es",
"\\[o_i(\\mu) = V_i - \\mu - M_{\\text{ridge}}(B - V)_i .\\]":
  "\\[o_i(\\mu) = V_i - \\mu - M_{\\text{ridge}}(B - V)_i .\\]",
"<strong>Spectroscopic parallax.</strong> For one main sequence star, the spectral type gives M from the nearby stars of that type, and then \\(m - M\\) gives the distance. The spread \\(\\sigma_M\\) of M among stars of one type limits the result: a spread of \\(\\sigma_M\\) in M is a fractional spread of about \\(\\frac{\\ln 10}{5}\\sigma_M = 0.46\\,\\sigma_M\\) in d.":
  "<strong>Paralaje espectroscópico.</strong> Para una estrella de secuencia principal, el tipo espectral da M a partir de las estrellas cercanas de ese tipo, y luego \\(m - M\\) da la distancia. La dispersión \\(\\sigma_M\\) de M entre las estrellas de un tipo limita el resultado: una dispersión de \\(\\sigma_M\\) en M es una dispersión fraccionaria de aproximadamente \\(\\frac{\\ln 10}{5}\\sigma_M = 0.46\\,\\sigma_M\\) en d.",
"A cluster’s main sequence sits {#} magnitudes below the calibrated one. How far away is the cluster? And if it sits {#} magnitudes below?":
  "La secuencia principal de un cúmulo queda {#} magnitudes por debajo de la calibrada. ¿A qué distancia está el cúmulo? ¿Y si queda {#} magnitudes por debajo?",
"An unresolved pair of identical stars looks like one star twice as bright. How many magnitudes brighter is it than one of the stars? If you fitted a cluster’s main sequence to such pairs, would the distance come out too large or too small, and by what factor?":
  "Un par no resuelto de estrellas idénticas parece una sola estrella el doble de brillante. ¿Cuántas magnitudes más brillante es que una de las estrellas? Si ajustaras la secuencia principal de un cúmulo a tales pares, ¿la distancia saldría demasiado grande o demasiado pequeña, y por qué factor?",
"Use the equation for \\(o_i(\\mu)\\) to show that the mean offset falls by exactly {#} for every {#} added to the shift, and that the mean square offset is a parabola in \\(\\mu\\) whose lowest point is where the mean offset is zero.":
  "Usa la ecuación de \\(o_i(\\mu)\\) para mostrar que la desviación media disminuye exactamente {#} por cada {#} que se suma al desplazamiento, y que la desviación cuadrática media es una parábola en \\(\\mu\\) cuyo punto más bajo está donde la desviación media es cero.",
"The nearby G0 V stars have a mean \\(M = 4.55\\) with a spread of {#} mag. A G0 V star has \\(V = 8.00\\). Find its spectroscopic distance and its uncertainty in percent.":
  "Las estrellas G0 V cercanas tienen una \\(M = 4.55\\) media con una dispersión de {#} mag. Una estrella G0 V tiene \\(V = 8.00\\). Encuentra su distancia espectroscópica y su incertidumbre en porcentaje.",
"<strong>Part {#}. Fitting a cluster.</strong> Choose Main sequence fitting and Cluster A. Find roughly the shift that puts the cluster on the ridge line. Then record readings at about nine shifts spread evenly over {#} magnitudes around it, and send them to the worksheet. Clear the readings and do the same for Cluster B, then for Cluster C; each cluster gets its own copy of the first table. Leave the true distance hidden until you have fitted all three.":
  "<strong>Parte {#}. Ajuste de un cúmulo.</strong> Elige Ajuste de la secuencia principal y Cúmulo A. Encuentra aproximadamente el desplazamiento que pone el cúmulo sobre la línea central. Luego registra lecturas en unos nueve desplazamientos repartidos de manera uniforme en {#} magnitudes alrededor de él, y envíalas a la hoja de trabajo. Borra las lecturas y haz lo mismo para el Cúmulo B, y luego para el Cúmulo C; cada cúmulo tiene su propia copia de la primera tabla. Deja oculta la distancia verdadera hasta que hayas ajustado los tres.",
"<strong>Part {#}. A mystery cluster.</strong> Make a mystery cluster and fit it the same way, then send the readings. Write down your distance before you show the true one.":
  "<strong>Parte {#}. Un cúmulo misterioso.</strong> Crea un cúmulo misterioso y ajústalo de la misma manera, luego envía las lecturas. Anota tu distancia antes de mostrar la verdadera.",
"<strong>Part {#}. Spectroscopic parallax.</strong> Clear the readings and choose Spectroscopic parallax. For each of the ten stars, first write down its spectroscopic distance, then show the parallax distance and record a reading. Send the readings to the worksheet; they fill the second table.":
  "<strong>Parte {#}. Paralaje espectroscópico.</strong> Borra las lecturas y elige Paralaje espectroscópico. Para cada una de las diez estrellas, primero anota su distancia espectroscópica, luego muestra la distancia por paralaje y registra una lectura. Envía las lecturas a la hoja de trabajo; llenan la segunda tabla.",
"<strong>Main sequence fitting.</strong> One copy of the table per cluster.":
  "<strong>Ajuste de la secuencia principal.</strong> Una copia de la tabla por cúmulo.",
"<span>B</span>Cluster":
  "<span>B</span>Cúmulo",
"<span>C</span>Shift \\(m - M\\) (mag)":
  "<span>C</span>Desplazamiento \\(m - M\\) (mag)",
"<span>D</span>Distance for this shift \\(d\\) (pc)":
  "<span>D</span>Distancia para este desplazamiento \\(d\\) (pc)",
"<span>E</span>Stars in the fit":
  "<span>E</span>Estrellas en el ajuste",
"<span>F</span>Mean offset (mag)":
  "<span>F</span>Desviación media (mag)",
"<span>G</span>Mean square offset (mag²)":
  "<span>G</span>Desviación cuadrática media (mag²)",
"Cluster, row {#}":
  "Cúmulo, fila {#}",
"Shift m - M (mag), row {#}":
  "Desplazamiento m - M (mag), fila {#}",
"Distance for this shift d (pc), row {#}":
  "Distancia para este desplazamiento d (pc), fila {#}",
"Stars in the fit, row {#}":
  "Estrellas en el ajuste, fila {#}",
"Mean offset (mag), row {#}":
  "Desviación media (mag), fila {#}",
"Mean square offset (mag²), row {#}":
  "Desviación cuadrática media (mag²), fila {#}",
"<strong>Spectroscopic parallax.</strong>":
  "<strong>Paralaje espectroscópico.</strong>",
"<span>B</span>Star":
  "<span>B</span>Estrella",
"<span>C</span>Spectral type":
  "<span>C</span>Tipo espectral",
"<span>D</span>Apparent magnitude \\(V\\)":
  "<span>D</span>Magnitud aparente \\(V\\)",
"<span>F</span>Mean \\(M\\) of this type (mag)":
  "<span>F</span>\\(M\\) media de este tipo (mag)",
"<span>G</span>Spread of \\(M\\) (mag)":
  "<span>G</span>Dispersión de \\(M\\) (mag)",
"<span>H</span>Nearby stars of this type":
  "<span>H</span>Estrellas cercanas de este tipo",
"<span>I</span>\\(m - M\\) (mag)":
  "<span>I</span>\\(m - M\\) (mag)",
"<span>J</span>Spectroscopic distance (pc)":
  "<span>J</span>Distancia espectroscópica (pc)",
"<span>K</span>Uncertainty (%)":
  "<span>K</span>Incertidumbre (%)",
"<span>L</span>Parallax distance (pc)":
  "<span>L</span>Distancia por paralaje (pc)",
"<span>M</span>Spectroscopic ÷ parallax":
  "<span>M</span>Espectroscópica ÷ paralaje",
"Star, row {#}":
  "Estrella, fila {#}",
"Spectral type, row {#}":
  "Tipo espectral, fila {#}",
"Apparent magnitude V, row {#}":
  "Magnitud aparente V, fila {#}",
"B − V, row {#}":
  "B − V, fila {#}",
"Mean M of this type (mag), row {#}":
  "M media de este tipo (mag), fila {#}",
"Spread of M (mag), row {#}":
  "Dispersión de M (mag), fila {#}",
"Nearby stars of this type, row {#}":
  "Estrellas cercanas de este tipo, fila {#}",
"m - M (mag), row {#}":
  "m - M (mag), fila {#}",
"Spectroscopic distance (pc), row {#}":
  "Distancia espectroscópica (pc), fila {#}",
"Uncertainty (%), row {#}":
  "Incertidumbre (%), fila {#}",
"Parallax distance (pc), row {#}":
  "Distancia por paralaje (pc), fila {#}",
"Spectroscopic ÷ parallax, row {#}":
  "Espectroscópica ÷ paralaje, fila {#}",
"For each cluster, graph the mean square offset against the shift and fit a quadratic. Find the shift at the lowest point, \\(\\mu = -b/(2c)\\), and the distance it gives.":
  "Para cada cúmulo, grafica la desviación cuadrática media en función del desplazamiento y ajusta una cuadrática. Encuentra el desplazamiento en el punto más bajo, \\(\\mu = -b/(2c)\\), y la distancia que da.",
"For each cluster, graph the mean offset against the shift. Check that the slope is −{#}, and find the shift where the line crosses zero. Compare it with Analysis {#}.":
  "Para cada cúmulo, grafica la desviación media en función del desplazamiento. Comprueba que la pendiente es −{#}, y encuentra el desplazamiento donde la recta cruza el cero. Compáralo con Análisis {#}.",
"The lowest mean square offset is the scatter of the stars about the line. Compare it with the scatter the model puts in ({#} mag in V, {#} in B − V).":
  "La desviación cuadrática media más baja es la dispersión de las estrellas alrededor de la línea. Compárala con la dispersión que pone el modelo ({#} mag en V, {#} en B − V).",
"Now show each cluster’s true distance. By how many percent is each of your distances off, and in which direction? Use Before the lab question {#} to explain the direction.":
  "Ahora muestra la distancia verdadera de cada cúmulo. ¿En qué porcentaje se desvía cada una de tus distancias, y en qué sentido? Usa la pregunta {#} de Antes del laboratorio para explicar el sentido.",
"For the ten stars, graph the spectroscopic distance against the parallax distance, with the line where they are equal. Find the median of the ratio spectroscopic ÷ parallax.":
  "Para las diez estrellas, grafica la distancia espectroscópica en función de la distancia por paralaje, con la recta donde son iguales. Encuentra la mediana de la razón espectroscópica ÷ paralaje.",
"Which star is furthest off? Suggest what about that star could fool the method.":
  "¿Qué estrella se desvía más? Sugiere qué de esa estrella podría engañar al método.",
"For each cluster, estimate how far the shift can move before the mean square offset rises by its own value divided by the number of stars in the fit; that change in shift is roughly the standard error of the fitted shift. Turn it into a percentage uncertainty in distance and compare it with how far off the cluster’s distance was. For the single stars, compare the scatter of the ratio with the uncertainties the demo gives.":
  "Para cada cúmulo, estima cuánto puede moverse el desplazamiento antes de que la desviación cuadrática media aumente en su propio valor dividido entre el número de estrellas en el ajuste; ese cambio en el desplazamiento es aproximadamente el error estándar del desplazamiento ajustado. Conviértelo en una incertidumbre porcentual en la distancia y compárala con cuánto se desvió la distancia del cúmulo. Para las estrellas individuales, compara la dispersión de la razón con las incertidumbres que da la demo.",
"Why does fitting a whole cluster give a much more precise distance than spectroscopic parallax of one star, though both use the same calibration?":
  "¿Por qué ajustar un cúmulo completo da una distancia mucho más precisa que el paralaje espectroscópico de una estrella, aunque ambos usan la misma calibración?",
"Real clusters lie behind dust, which dims and reddens their stars. Which way would ignoring the dimming move a fitted distance? Which way would ignoring the reddening move it?":
  "Los cúmulos reales están detrás de polvo, que atenúa y enrojece sus estrellas. ¿Hacia dónde movería una distancia ajustada ignorar la atenuación? ¿Hacia dónde la movería ignorar el enrojecimiento?",
"A star catalogued {#} pc away because it looks bright enough is more likely to be one of the more luminous stars of its type. How does that bias the spectroscopic distances of such stars?":
  "Una estrella catalogada a {#} pc porque se ve lo bastante brillante tiene más probabilidad de ser una de las estrellas más luminosas de su tipo. ¿Cómo sesga eso las distancias espectroscópicas de tales estrellas?",
"Why is the calibration made from stars within {#} pc and not from stars within {#} pc?":
  "¿Por qué la calibración se hace con estrellas a menos de {#} pc y no con estrellas a menos de {#} pc?",
"Which rungs of the distance ladder does main sequence fitting depend on, and which could it calibrate?":
  "¿De qué peldaños de la escalera de distancias depende el ajuste de la secuencia principal, y cuáles podría calibrar?",
"Prelab answers, the table copies with their graphs and fits, the fitted shift and distance of each cluster with its uncertainty and the true distances, the mystery cluster’s distance, the comparison of the ten stars with the median ratio, and answers to the questions. Identify simulated data: the clusters are simulated; the nearby stars and the ten target stars are real catalog data.":
  "Respuestas del prelaboratorio, las copias de las tablas con sus gráficas y ajustes, el desplazamiento ajustado y la distancia de cada cúmulo con su incertidumbre y las distancias verdaderas, la distancia del cúmulo misterioso, la comparación de las diez estrellas con la razón mediana, y las respuestas a las preguntas. Identifica los datos simulados: los cúmulos son simulados; las estrellas cercanas y las diez estrellas objetivo son datos reales de catálogo.",
"Magnitude through the B (blue) filter, in the color index B − V":
  "Magnitud a través del filtro B (azul), en el índice de color B − V",
"Absolute magnitude: the magnitude seen from {#} pc":
  "Magnitud absoluta: la magnitud vista desde {#} pc",
"Absolute magnitude of the calibrated ridge line at that color":
  "Magnitud absoluta de la línea central calibrada a ese color",
"Apparent magnitude through the V (visual) filter":
  "Magnitud aparente a través del filtro V (visual)",
"Apparent V magnitude of star i":
  "Magnitud V aparente de la estrella i",
"Linear coefficient of the quadratic fit of mean square offset against shift":
  "Coeficiente lineal del ajuste cuadrático de la desviación cuadrática media en función del desplazamiento",
"Quadratic coefficient of the quadratic fit of mean square offset against shift":
  "Coeficiente cuadrático del ajuste cuadrático de la desviación cuadrática media en función del desplazamiento",
"Number of a star in the cluster":
  "Número de una estrella del cúmulo",
"Apparent magnitude":
  "Magnitud aparente",
"Shift of the cluster, its trial distance modulus m − M":
  "Desplazamiento del cúmulo, su módulo de distancia de prueba m − M",
"Offset of star i from the ridge line at the shift μ":
  "Desviación de la estrella i respecto a la línea central con el desplazamiento μ",
"Spread (standard deviation) of M among nearby stars of one spectral type":
  "Dispersión (desviación estándar) de M entre las estrellas cercanas de un tipo espectral"
});
