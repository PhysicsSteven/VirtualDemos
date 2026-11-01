/* ws/two-speaker in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/two-speaker', {
"Level (dB)":
  "Nivel (dB)",
"Loud or quiet":
  "Fuerte o silencio",
"Path difference Δ r (m)":
  "Diferencia de camino Δ r (m)",
"Order n":
  "Orden n",
"Two Speaker Interference | VirtualDemos":
  "Interferencia de dos bocinas | VirtualDemos",
"Two Speaker Interference":
  "Interferencia de dos bocinas",
"<strong>Setups in the demo:</strong> Walk across, {#} Hz; Speakers close together; Speaker {#} wired backwards; Measure the speed of sound; Mystery frequency; Sandbox.":
  "<strong>Configuraciones en la demo:</strong> Recorrido, {#} Hz; Bocinas juntas; Bocina {#} conectada al revés; Medir la rapidez del sonido; Frecuencia misteriosa; Caja de arena.",
"<strong>Using the demo.</strong> The room is seen from above, {#} m by {#} m, with two speakers on the left wall driven by one function generator ({#} to {#} Hz). The speaker separation, the wiring of speaker {#}, whether speaker {#} is on, the distance of the walk line from the wall and the air temperature are on the Set up card, which fades during a walk. The microphone is dragged on the floor (or moved with the arrow keys); the meter shows the sound level and the tape distances \\(r_1\\) and \\(r_2\\) to the two speakers. Walking the microphone moves it along the walk line and plots the level against \\(y\\). Blind hides the wavelength; the mystery frequency covers the generator’s display. The Sandbox is for exploring on your own: drag up to eight speakers from the tray onto the floor, anywhere, each in phase or wired backwards; it records no readings.":
  "<strong>Uso de la demo.</strong> La sala se ve desde arriba, de {#} m por {#} m, con dos bocinas en la pared izquierda alimentadas por un generador de funciones ({#} a {#} Hz). La separación de las bocinas, la conexión de la bocina {#}, si la bocina {#} está encendida, la distancia de la línea de recorrido a la pared y la temperatura del aire están en la tarjeta de configuración, que se atenúa durante un recorrido. El micrófono se arrastra por el piso (o se mueve con las flechas); el medidor muestra el nivel sonoro y las distancias con cinta \\(r_1\\) y \\(r_2\\) a las dos bocinas. Recorrer con el micrófono lo mueve a lo largo de la línea de recorrido y grafica el nivel en función de \\(y\\). A ciegas oculta la longitud de onda; la frecuencia misteriosa tapa la pantalla del generador. La Caja de arena es para explorar por tu cuenta: arrastra hasta ocho bocinas de la bandeja al piso, a cualquier lugar, cada una en fase o conectada al revés; no registra lecturas.",
"<strong>What the demo models.</strong> Each speaker is a point source in a free field: no walls, floor or ceiling reflect and the air absorbs nothing, as outdoors or in an anechoic room. The pressure from each falls as \\(1/r\\), so at a quiet spot the two do not cancel exactly unless \\(r_1 = r_2\\). One speaker gives {#} dB at {#} m (chosen). The speed of sound is \\(v = 331.3\\ \\mathrm{m/s}\\,\\sqrt{1 + t_{\\rm C}/273.15}\\) with \\(t_{\\rm C}\\) the air temperature in °C, {#} m/s at {#} °C. Positions and distances are shown to {#} mm and the level to {#} dB, with no noise.":
  "<strong>Lo que modela la demo.</strong> Cada bocina es una fuente puntual en un campo libre: ni paredes, ni piso, ni techo reflejan y el aire no absorbe nada, como al aire libre o en una cámara anecoica. La presión de cada una disminuye como \\(1/r\\), así que en un punto silencioso las dos no se cancelan exactamente a menos que \\(r_1 = r_2\\). Una bocina da {#} dB a {#} m (elegido). La rapidez del sonido es \\(v = 331.3\\ \\mathrm{m/s}\\,\\sqrt{1 + t_{\\rm C}/273.15}\\) con \\(t_{\\rm C}\\) la temperatura del aire en °C, {#} m/s a {#} °C. Las posiciones y distancias se muestran con resolución de {#} mm y el nivel con resolución de {#} dB, sin ruido.",
"Map the loud and quiet places in front of two speakers driven together, find the wavelength from the path difference, and use it to measure the speed of sound and an unknown frequency.":
  "Haz un mapa de los lugares fuertes y silenciosos frente a dos bocinas alimentadas juntas, encuentra la longitud de onda a partir de la diferencia de camino, y úsala para medir la rapidez del sonido y una frecuencia desconocida.",
"Two speakers driven in phase at frequency \\(f\\) send out waves of wavelength \\(\\lambda = v/f\\). At a point \\(r_1\\) from speaker {#} and \\(r_2\\) from speaker {#}, the waves arrive with a phase difference set by the path difference \\(\\Delta r = r_2 - r_1\\):":
  "Dos bocinas alimentadas en fase a frecuencia \\(f\\) emiten ondas de longitud de onda \\(\\lambda = v/f\\). En un punto a \\(r_1\\) de la bocina {#} y a \\(r_2\\) de la bocina {#}, las ondas llegan con una diferencia de fase fijada por la diferencia de camino \\(\\Delta r = r_2 - r_1\\):",
"\\[\\text{loud (constructive)}:\\ \\Delta r = m\\lambda,\\qquad \\text{quiet (destructive)}:\\ \\Delta r = \\left(m + \\tfrac12\\right)\\lambda,\\qquad m = 0, \\pm1, \\pm2, \\ldots\\]":
  "\\[\\text{loud (constructive)}:\\ \\Delta r = m\\lambda,\\qquad \\text{quiet (destructive)}:\\ \\Delta r = \\left(m + \\tfrac12\\right)\\lambda,\\qquad m = 0, \\pm1, \\pm2, \\ldots\\]",
"The points with the same \\(\\Delta r\\) lie on a hyperbola with the speakers at its foci, so the loud and quiet places form lines that fan out from between the speakers. Since \\(\\lvert\\Delta r\\rvert\\) can never exceed the separation \\(d\\), the number of quiet lines is limited by \\(d/\\lambda\\). If one speaker is wired backwards, it adds half a cycle to its wave and the loud and quiet conditions swap. Sound levels are \\(\\beta = 20\\log_{10}(p_{\\text{rms}}/20\\ \\mathrm{\\mu Pa})\\), so a deep dip in decibels means near cancellation.":
  "Los puntos con la misma \\(\\Delta r\\) están sobre una hipérbola con las bocinas en sus focos, así que los lugares fuertes y silenciosos forman líneas que se abren en abanico desde entre las bocinas. Como \\(\\lvert\\Delta r\\rvert\\) nunca puede ser mayor que la separación \\(d\\), el número de líneas silenciosas está limitado por \\(d/\\lambda\\). Si una bocina está conectada al revés, agrega medio ciclo a su onda y las condiciones de fuerte y silencio se intercambian. Los niveles sonoros son \\(\\beta = 20\\log_{10}(p_{\\text{rms}}/20\\ \\mathrm{\\mu Pa})\\), así que un mínimo profundo en decibeles significa una cancelación casi total.",
"Find the wavelength of {#} Hz sound in air at {#} °C, using \\(v = 331.3\\ \\mathrm{m/s}\\,\\sqrt{1 + t_{\\rm C}/273.15}\\).":
  "Encuentra la longitud de onda de un sonido de {#} Hz en aire a {#} °C, usando \\(v = 331.3\\ \\mathrm{m/s}\\,\\sqrt{1 + t_{\\rm C}/273.15}\\).",
"The speakers are {#} m apart and in phase. What path differences give quiet spots at {#} Hz? How many quiet lines are there on each side of the center line?":
  "Las bocinas están separadas {#} m y en fase. ¿Qué diferencias de camino dan puntos silenciosos a {#} Hz? ¿Cuántas líneas silenciosas hay a cada lado de la línea central?",
"Why is the center line, equally far from both speakers, always loud when the speakers are in phase?":
  "¿Por qué la línea central, igual de lejos de ambas bocinas, siempre suena fuerte cuando las bocinas están en fase?",
"At a quiet spot the two waves have opposite phase. Why is the sound not exactly zero there in this room?":
  "En un punto silencioso las dos ondas tienen fase opuesta. ¿Por qué el sonido no es exactamente cero ahí en esta sala?",
"On a real two speaker setup, keep levels moderate (below about {#} dB at the listening position) and do not put ears close to the speakers. Run cables along walls.":
  "En un montaje real de dos bocinas, mantén niveles moderados (por debajo de unos {#} dB en la posición de escucha) y no acerques los oídos a las bocinas. Pasa los cables a lo largo de las paredes.",
"<strong>Part {#}: one frequency.</strong> At {#} Hz and {#} °C, with the speakers {#} m apart and in phase, walk the microphone along a line {#} m from the wall. Find and record each quiet spot and each loud spot along that line, as precisely as the meter allows. Then switch speaker {#} off and record the level at each quiet spot again.":
  "<strong>Parte {#}: una frecuencia.</strong> A {#} Hz y {#} °C, con las bocinas separadas {#} m y en fase, recorre con el micrófono una línea a {#} m de la pared. Encuentra y registra cada punto silencioso y cada punto fuerte a lo largo de esa línea, con tanta precisión como permita el medidor. Luego apaga la bocina {#} y registra de nuevo el nivel en cada punto silencioso.",
"<strong>Part {#}: the speed of sound.</strong> With the speakers {#} m apart and the walk line {#} m from the wall, find the quiet spots along the line at three or more frequencies between {#} and {#} Hz.":
  "<strong>Parte {#}: la rapidez del sonido.</strong> Con las bocinas separadas {#} m y la línea de recorrido a {#} m de la pared, encuentra los puntos silenciosos a lo largo de la línea a tres o más frecuencias entre {#} y {#} Hz.",
"<strong>Part {#}: one speaker wired backwards.</strong> Predict where the quiet spots of Part {#} move if speaker {#} is wired backwards, then find them.":
  "<strong>Parte {#}: una bocina conectada al revés.</strong> Predice hacia dónde se mueven los puntos silenciosos de la Parte {#} si la bocina {#} se conecta al revés, y luego encuéntralos.",
"<strong>Part {#}: mystery frequency.</strong> With the generator’s display covered, find the quiet spots along one walk line and record them. Keep the same mystery frequency for the whole scan: choosing a new one changes it.":
  "<strong>Parte {#}: frecuencia misteriosa.</strong> Con la pantalla del generador tapada, encuentra los puntos silenciosos a lo largo de una línea de recorrido y regístralos. Conserva la misma frecuencia misteriosa durante todo el barrido: elegir una nueva la cambia.",
"<strong>Using the virtual apparatus.</strong> Record each spot you find. Send each part (and each frequency in Part {#}) to the worksheet before clearing, so each gets its own copy of the Data table; the frequency, separation and wiring go into the first column.":
  "<strong>Uso del aparato virtual.</strong> Registra cada punto que encuentres. Envía cada parte (y cada frecuencia de la Parte {#}) a la hoja de trabajo antes de borrar, para que cada una tenga su propia copia de la tabla de datos; la frecuencia, la separación y la conexión van en la primera columna.",
"<span>F</span>Level (dB)":
  "<span>F</span>Nivel (dB)",
"<span>G</span>Loud or quiet":
  "<span>G</span>Fuerte o silencio",
"<span>H</span>Path difference \\(\\Delta r\\) (m)":
  "<span>H</span>Diferencia de camino \\(\\Delta r\\) (m)",
"<span>I</span>Order \\(n\\)":
  "<span>I</span>Orden \\(n\\)",
"x (m), row {#}":
  "x (m), fila {#}",
"y (m), row {#}":
  "y (m), fila {#}",
"r_1 (m), row {#}":
  "r_1 (m), fila {#}",
"r_2 (m), row {#}":
  "r_2 (m), fila {#}",
"Level (dB), row {#}":
  "Nivel (dB), fila {#}",
"Loud or quiet, row {#}":
  "Fuerte o silencio, fila {#}",
"Path difference Δ r (m), row {#}":
  "Diferencia de camino Δ r (m), fila {#}",
"Order n, row {#}":
  "Orden n, fila {#}",
"Fill the last three columns yourself. For each spot, write loud or quiet, work out \\(\\Delta r = r_2 - r_1\\), and give its order \\(n\\), the number of wavelengths in \\(\\Delta r\\) that the spot should have: \\(n = m\\) at a loud spot and \\(n = m + \\tfrac12\\) at a quiet one when the speakers are in phase (so \\(n = \\ldots, -1, -\\tfrac12, 0, \\tfrac12, 1, \\ldots\\)). A graph of \\(\\Delta r\\) against \\(n\\) is a straight line of slope \\(\\lambda\\).":
  "Llena tú las últimas tres columnas. Para cada punto, escribe fuerte o silencio, calcula \\(\\Delta r = r_2 - r_1\\), y da su orden \\(n\\), el número de longitudes de onda en \\(\\Delta r\\) que debería tener el punto: \\(n = m\\) en un punto fuerte y \\(n = m + \\tfrac12\\) en uno silencioso cuando las bocinas están en fase (así que \\(n = \\ldots, -1, -\\tfrac12, 0, \\tfrac12, 1, \\ldots\\)). Una gráfica de \\(\\Delta r\\) en función de \\(n\\) es una recta de pendiente \\(\\lambda\\).",
"For Part {#}, list \\(\\Delta r\\) for every loud and quiet spot. Show that the quiet spots are at \\((m + \\frac12)\\lambda\\) and the loud ones at \\(m\\lambda\\), and find \\(\\lambda\\) from your quiet spots. Compare with \\(v/f\\). On the graph of \\(\\Delta r\\) against \\(n\\), which spots lie off the line, and why?":
  "Para la Parte {#}, enumera \\(\\Delta r\\) para cada punto fuerte y silencioso. Muestra que los puntos silenciosos están en \\((m + \\frac12)\\lambda\\) y los fuertes en \\(m\\lambda\\), y encuentra \\(\\lambda\\) a partir de tus puntos silenciosos. Compara con \\(v/f\\). En la gráfica de \\(\\Delta r\\) en función de \\(n\\), ¿qué puntos quedan fuera de la recta, y por qué?",
"Explain what happened when speaker {#} was switched off.":
  "Explica qué pasó cuando se apagó la bocina {#}.",
"For Part {#}, find \\(\\lambda\\) at each frequency from the slope of \\(\\Delta r\\) against \\(n\\) for its quiet spots, then \\(v = f\\lambda\\) at each. Find the mean speed of sound and compare it with \\(v = 331.3\\ \\mathrm{m/s}\\,\\sqrt{1 + t_{\\rm C}/273.15}\\).":
  "Para la Parte {#}, encuentra \\(\\lambda\\) a cada frecuencia a partir de la pendiente de \\(\\Delta r\\) en función de \\(n\\) para sus puntos silenciosos, y luego \\(v = f\\lambda\\) para cada una. Encuentra la rapidez media del sonido y compárala con \\(v = 331.3\\ \\mathrm{m/s}\\,\\sqrt{1 + t_{\\rm C}/273.15}\\).",
"For Part {#}, compare the quiet spots with Part {#} and explain the change. With speaker {#} wired backwards, which orders \\(n\\) do the quiet spots have?":
  "Para la Parte {#}, compara los puntos silenciosos con los de la Parte {#} y explica el cambio. Con la bocina {#} conectada al revés, ¿qué órdenes \\(n\\) tienen los puntos silenciosos?",
"For Part {#}, find the mystery wavelength from the slope of \\(\\Delta r\\) against \\(n\\), and the frequency from it.":
  "Para la Parte {#}, encuentra la longitud de onda misteriosa a partir de la pendiente de \\(\\Delta r\\) en función de \\(n\\), y a partir de ella la frecuencia.",
"The level changes slowly near a loud spot and very quickly near a quiet one, so quiet spots can be located much more precisely; that is why the analysis uses them. The tape reads distances to {#} mm. On a real setup add reflections from the floor, walls and people (which add their own interference), the size of the speakers and microphone, the speakers’ directionality, air temperature and wind.":
  "El nivel cambia despacio cerca de un punto fuerte y muy rápido cerca de uno silencioso, así que los puntos silenciosos se pueden localizar con mucha más precisión; por eso el análisis los usa. La cinta lee distancias con resolución de {#} mm. En un montaje real agrega las reflexiones del piso, de las paredes y de las personas (que agregan su propia interferencia), el tamaño de las bocinas y del micrófono, la direccionalidad de las bocinas, la temperatura del aire y el viento.",
"Why do the quiet lines curve away from the center line as you move farther from the speakers?":
  "¿Por qué las líneas silenciosas se curvan alejándose de la línea central conforme te alejas de las bocinas?",
"Why are there more quiet lines at a higher frequency, with the same speakers?":
  "¿Por qué hay más líneas silenciosas a una frecuencia más alta, con las mismas bocinas?",
"Why must a pair of speakers in a home stereo be wired the same way round?":
  "¿Por qué las dos bocinas de un estéreo casero deben conectarse con la misma polaridad?",
"Two speakers {#} m apart play {#} Hz. Can there be a quiet spot anywhere in the room with \\(\\Delta r = 3\\lambda/2\\)? Explain.":
  "Dos bocinas separadas {#} m emiten {#} Hz. ¿Puede haber un punto silencioso en algún lugar de la sala con \\(\\Delta r = 3\\lambda/2\\)? Explica.",
"Prelab answers, a Data table copy for each part and frequency, the graphs of \\(\\Delta r\\) against \\(n\\) with fits, your values of \\(\\lambda\\), \\(v\\) and the mystery frequency with uncertainties, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, una copia de la tabla de datos para cada parte y frecuencia, las gráficas de \\(\\Delta r\\) en función de \\(n\\) con ajustes, tus valores de \\(\\lambda\\), \\(v\\) y la frecuencia misteriosa con incertidumbres, y las respuestas a las preguntas. Identifica los datos simulados.",
"Sound level":
  "Nivel sonoro",
"Separation of the speakers":
  "Separación de las bocinas",
"Whole number counting loud or quiet spots":
  "Número entero que cuenta los puntos fuertes o silenciosos",
"Order, wavelengths in Δr":
  "Orden, longitudes de onda en Δr",
"rms pressure":
  "Presión rms",
"Distance from a speaker (Δr: path difference r₂ − r₁)":
  "Distancia a una bocina (Δr: diferencia de camino r₂ − r₁)",
"Distance to speaker {#}":
  "Distancia a la bocina {#}",
"Air temperature":
  "Temperatura del aire",
"Speed of sound":
  "Rapidez del sonido",
"Distance of the microphone from the speakers' wall":
  "Distancia del micrófono a la pared de las bocinas",
"Position along the walk line":
  "Posición a lo largo de la línea de recorrido"
});
