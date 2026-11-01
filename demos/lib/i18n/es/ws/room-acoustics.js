/* ws/room-acoustics in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/room-acoustics', {
"Band (Hz)":
  "Banda (Hz)",
"Room L× W× H (m)":
  "Sala L× W× H (m)",
"Walls and floor":
  "Paredes y piso",
"Volume V (m³)":
  "Volumen V (m³)",
"Surface S (m²)":
  "Superficie S (m²)",
"Measured T (s)":
  "T medido (s)",
"Absorption A (m²)":
  "Absorción A (m²)",
"Sabine T (s)":
  "T de Sabine (s)",
"Reverberation Time | VirtualDemos":
  "Tiempo de reverberación | VirtualDemos",
"Reverberation Time":
  "Tiempo de reverberación",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#}. Sabine’s formula goes beyond the textbook; see H. Kuttruff, <em>Room Acoustics</em>, chapter {#}. Access OpenStax for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#}. La fórmula de Sabine va más allá del libro; consulta H. Kuttruff, <em>Room Acoustics</em>, capítulo {#}. Acceso gratuito a OpenStax en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Bare room; Add absorbing panels; Room with an audience; Anechoic chamber; Below the cutoff; Mystery panels.":
  "<strong>Configuraciones en la demo:</strong> Sala vacía; Agregar paneles absorbentes; Sala con público; Cámara anecoica; Debajo del corte; Paneles misteriosos.",
"<strong>Using the demo.</strong> A 3D view of a room (Plan switches to the view from above), with a loudspeaker and a microphone on its center line, {#} m up; drag the microphone along the center line in either view. Under it is a graph of the decay of a clap at the microphone. The room’s size, its walls (hard, with panels, or lined with wedges), the number and material of the panels, the floor and the microphone distance are on the Set up card, which fades during a clap. Nothing plays until you clap. Measure chooses Reverberation time (this worksheet) or Level against distance (the Anechoic Chamber worksheet), and the octave band from {#} Hz to {#} kHz. Clap, then record the measured \\(T\\). The Absorption coefficients table lists every surface, its area and its \\(\\alpha\\) in the band. Blind hides \\(A\\) and the predicted reverberation times; the mystery panels always hide their \\(\\alpha\\).":
  "<strong>Uso de la demo.</strong> Una vista 3D de una sala (Planta cambia a la vista desde arriba), con una bocina y un micrófono sobre su línea central, a {#} m de altura; arrastra el micrófono a lo largo de la línea central en cualquiera de las vistas. Debajo hay una gráfica del decaimiento de una palmada en el micrófono. El tamaño de la sala, sus paredes (duras, con paneles o forradas de cuñas), el número y material de los paneles, el piso y la distancia del micrófono están en la tarjeta de preparación, que se desvanece durante una palmada. No suena nada hasta que aplaudes. Medir elige Tiempo de reverberación (esta hoja de trabajo) o Nivel en función de la distancia (la hoja de trabajo de la cámara anecoica), y la banda de octava de {#} Hz a {#} kHz. Aplaude y luego registra el \\(T\\) medido. La tabla Coeficientes de absorción lista cada superficie, su área y su \\(\\alpha\\) en la banda. A ciegas oculta \\(A\\) y los tiempos de reverberación predichos; los paneles misteriosos siempre ocultan su \\(\\alpha\\).",
"<strong>What the demo models.</strong> Ray tracing: thousands of rays leave the source, each surface keeps a fraction \\(\\alpha\\) of a ray’s energy and sends the rest off in a random direction (diffuse reflection by Lambert’s law), and the microphone is a sphere {#} m in radius that adds up the energy of the rays crossing it. Energies add, so there is no interference. Absorption coefficients are measured values for octave bands from the materials database of the pyroomacoustics library; air absorbs nothing, and \\(c = 343.2\\) m/s. \\(T\\) is read as a real meter does: the decay curve from \\(-5\\) to \\(-25\\) dB is fitted with a straight line and extended to {#} dB (T20, ISO {#}). The ray trace is repeatable: the same room always gives the same \\(T\\). Simulated data.":
  "<strong>Qué modela la demo.</strong> Trazado de rayos: miles de rayos salen de la fuente, cada superficie se queda con una fracción \\(\\alpha\\) de la energía de un rayo y envía el resto en una dirección aleatoria (reflexión difusa según la ley de Lambert), y el micrófono es una esfera de {#} m de radio que suma la energía de los rayos que la cruzan. Las energías se suman, así que no hay interferencia. Los coeficientes de absorción son valores medidos para bandas de octava de la base de datos de materiales de la biblioteca pyroomacoustics; el aire no absorbe nada, y \\(c = 343.2\\) m/s. \\(T\\) se lee como lo hace un medidor real: la curva de decaimiento de \\(-5\\) a \\(-25\\) dB se ajusta con una recta y se extiende a {#} dB (T20, ISO {#}). El trazado de rayos es repetible: la misma sala siempre da el mismo \\(T\\). Datos simulados.",
"Measure how long sound lasts in a room, test Sabine’s formula for the reverberation time, and find the absorption coefficient of an unknown material.":
  "Mide cuánto dura el sonido en una sala, pon a prueba la fórmula de Sabine para el tiempo de reverberación y encuentra el coeficiente de absorción de un material desconocido.",
"After a sound stops, it keeps bouncing between the walls, losing a fraction of its energy at each one. The reverberation time \\(T\\) is the time for the sound level to fall by {#} dB, a millionth of its energy. Each surface of area \\(S_i\\) absorbs a fraction \\(\\alpha_i\\) of the sound that meets it, so the room’s total absorption is":
  "Después de que un sonido se detiene, sigue rebotando entre las paredes, perdiendo una fracción de su energía en cada una. El tiempo de reverberación \\(T\\) es el tiempo que tarda el nivel sonoro en bajar {#} dB, una millonésima de su energía. Cada superficie de área \\(S_i\\) absorbe una fracción \\(\\alpha_i\\) del sonido que llega a ella, así que la absorción total de la sala es",
"\\[A = \\sum_i S_i\\,\\alpha_i,\\]":
  "\\[A = \\sum_i S_i\\,\\alpha_i,\\]",
"measured in square meters: one square meter of a perfect absorber, such as an open window. If the sound is spread evenly through the room, the energy falls exponentially, and Sabine’s formula gives":
  "medida en metros cuadrados: un metro cuadrado de un absorbente perfecto, como una ventana abierta. Si el sonido está repartido uniformemente en la sala, la energía disminuye exponencialmente, y la fórmula de Sabine da",
"\\[T = \\frac{24\\ln 10}{c}\\,\\frac{V}{A} = 0.161\\ \\mathrm{s/m}\\times\\frac{V}{A},\\]":
  "\\[T = \\frac{24\\ln 10}{c}\\,\\frac{V}{A} = 0.161\\ \\mathrm{s/m}\\times\\frac{V}{A},\\]",
"with \\(V\\) the room’s volume and \\(c = 343.2\\) m/s. Doubling the absorption halves \\(T\\); a larger room, with the same absorption, rings longer. Sabine’s formula assumes the absorption is spread over the whole room and is small; when \\(\\alpha\\) is large, or all the absorption is on a few surfaces, the measured \\(T\\) differs from it. Absorption coefficients depend on frequency: soft, porous materials absorb high frequencies much better than low ones.":
  "con \\(V\\) el volumen de la sala y \\(c = 343.2\\) m/s. Duplicar la absorción reduce \\(T\\) a la mitad; una sala más grande, con la misma absorción, resuena más tiempo. La fórmula de Sabine supone que la absorción está repartida en toda la sala y es pequeña; cuando \\(\\alpha\\) es grande, o toda la absorción está en unas cuantas superficies, el \\(T\\) medido difiere de ella. Los coeficientes de absorción dependen de la frecuencia: los materiales suaves y porosos absorben las frecuencias altas mucho mejor que las bajas.",
"A room is {#} m × {#} m × {#} m. Find \\(V\\) and the total surface area \\(S\\).":
  "Una sala mide {#} m × {#} m × {#} m. Encuentra \\(V\\) y el área total de superficie \\(S\\).",
"All its surfaces have \\(\\alpha = 0.02\\). Find \\(A\\) and Sabine’s \\(T\\).":
  "Todas sus superficies tienen \\(\\alpha = 0.02\\). Encuentra \\(A\\) y el \\(T\\) de Sabine.",
"Twenty panels of {#} m² each, with \\(\\alpha = 0.83\\), are hung on the walls of that room, covering wall with \\(\\alpha = 0.02\\). By how much does \\(A\\) grow? Find the new \\(T\\).":
  "Veinte paneles de {#} m² cada uno, con \\(\\alpha = 0.83\\), se cuelgan en las paredes de esa sala, cubriendo pared con \\(\\alpha = 0.02\\). ¿Cuánto crece \\(A\\)? Encuentra el nuevo \\(T\\).",
"Why does a graph of \\(T\\) against \\(1/A\\) test Sabine’s formula? What should its slope be for this room?":
  "¿Por qué una gráfica de \\(T\\) en función de \\(1/A\\) pone a prueba la fórmula de Sabine? ¿Cuál debería ser su pendiente para esta sala?",
"On a real reverberation measurement, a starting pistol, a burst balloon or a loudspeaker playing an impulse is very loud close up: wear hearing protection and keep others back.":
  "En una medición real de reverberación, una pistola de salida, un globo reventado o una bocina que reproduce un impulso suenan muy fuerte de cerca: usa protección auditiva y mantén a los demás alejados.",
"<strong>Part {#}: the bare room.</strong> In the {#} m × {#} m × {#} m room with hard walls and a concrete floor, measure \\(T\\) in each of the six octave bands.":
  "<strong>Parte {#}: la sala vacía.</strong> En la sala de {#} m × {#} m × {#} m con paredes duras y piso de concreto, mide \\(T\\) en cada una de las seis bandas de octava.",
"<strong>Part {#}: absorbing panels.</strong> In the same room at {#} Hz, measure \\(T\\) with {#}, {#}, {#}, {#}, {#} and {#} foam panels.":
  "<strong>Parte {#}: paneles absorbentes.</strong> En la misma sala a {#} Hz, mide \\(T\\) con {#}, {#}, {#}, {#}, {#} y {#} paneles de espuma.",
"<strong>Part {#}: an audience.</strong> In the {#} m × {#} m × {#} m hall, measure \\(T\\) at {#}, {#} and {#} Hz with the floor covered by an audience, then with a bare concrete floor.":
  "<strong>Parte {#}: un público.</strong> En el auditorio de {#} m × {#} m × {#} m, mide \\(T\\) a {#}, {#} y {#} Hz con el piso cubierto de público, y luego con un piso de concreto desnudo.",
"<strong>Part {#}: mystery panels.</strong> Hang {#} panels of the mystery material in the {#} m × {#} m × {#} m room and measure \\(T\\) in each of the six bands. Part {#} gives the same room without them. Keep the same mystery material for the whole part: choosing Mystery panels again may change it.":
  "<strong>Parte {#}: paneles misteriosos.</strong> Cuelga {#} paneles del material misterioso en la sala de {#} m × {#} m × {#} m y mide \\(T\\) en cada una de las seis bandas. La Parte {#} da la misma sala sin ellos. Conserva el mismo material misterioso durante toda la parte: elegir Paneles misteriosos de nuevo puede cambiarlo.",
"<strong>Using the virtual apparatus.</strong> Clap before each reading. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table. The last three columns are yours: in Parts {#} to {#} work out \\(A\\) from the Absorption coefficients table, then \\(1/A\\) and Sabine’s \\(T\\); in Part {#}, where \\(\\alpha\\) is hidden, work out \\(A\\) from the measured \\(T\\) instead, \\(A = 0.161\\ \\mathrm{s/m}\\times V/T\\).":
  "<strong>Uso del aparato virtual.</strong> Aplaude antes de cada lectura. Envía cada parte a la hoja antes de borrar, para que cada parte tenga su propia copia de la tabla de datos. Las últimas tres columnas te tocan a ti: en las Partes {#} a {#} calcula \\(A\\) con la tabla Coeficientes de absorción, y luego \\(1/A\\) y el \\(T\\) de Sabine; en la Parte {#}, donde \\(\\alpha\\) está oculto, calcula en cambio \\(A\\) a partir del \\(T\\) medido, \\(A = 0.161\\ \\mathrm{s/m}\\times V/T\\).",
"<span>B</span>Band (Hz)":
  "<span>B</span>Banda (Hz)",
"<span>C</span>Room \\(L\\times W\\times H\\) (m)":
  "<span>C</span>Sala \\(L\\times W\\times H\\) (m)",
"<span>D</span>Walls and floor":
  "<span>D</span>Paredes y piso",
"<span>E</span>Volume \\(V\\) (m³)":
  "<span>E</span>Volumen \\(V\\) (m³)",
"<span>F</span>Surface \\(S\\) (m²)":
  "<span>F</span>Superficie \\(S\\) (m²)",
"<span>G</span>Measured \\(T\\) (s)":
  "<span>G</span>\\(T\\) medido (s)",
"<span>H</span>Absorption \\(A\\) (m²)":
  "<span>H</span>Absorción \\(A\\) (m²)",
"<span>J</span>Sabine \\(T\\) (s)":
  "<span>J</span>\\(T\\) de Sabine (s)",
"Band (Hz), row {#}":
  "Banda (Hz), fila {#}",
"Room L× W× H (m), row {#}":
  "Sala L× W× H (m), fila {#}",
"Walls and floor, row {#}":
  "Paredes y piso, fila {#}",
"Volume V (m³), row {#}":
  "Volumen V (m³), fila {#}",
"Surface S (m²), row {#}":
  "Superficie S (m²), fila {#}",
"Measured T (s), row {#}":
  "T medido (s), fila {#}",
"Absorption A (m²), row {#}":
  "Absorción A (m²), fila {#}",
"{#}/A ({#}/m²), row {#}":
  "{#}/A ({#}/m²), fila {#}",
"Sabine T (s), row {#}":
  "T de Sabine (s), fila {#}",
"For Part {#}, these are the coefficients of four materials the mystery panels might be made of (pyroomacoustics materials database):":
  "Para la Parte {#}, estos son los coeficientes de cuatro materiales de los que podrían estar hechos los paneles misteriosos (base de datos de materiales de pyroomacoustics):",
"<span>A</span>Material":
  "<span>A</span>Material",
"Curtain fabric, folded, {#} cm from the wall":
  "Tela de cortina, plegada, a {#} cm de la pared",
"Vertical blinds, half open":
  "Persianas verticales, medio abiertas",
"Wooden lining, {#} mm on a frame":
  "Revestimiento de madera, {#} mm sobre un bastidor",
"{#} mm tufted carpet on felt":
  "Alfombra de mechones de {#} mm sobre fieltro",
"For Part {#}, compare the measured \\(T\\) with Sabine’s in each band. How does \\(T\\) depend on the band, and why?":
  "Para la Parte {#}, compara el \\(T\\) medido con el de Sabine en cada banda. ¿Cómo depende \\(T\\) de la banda, y por qué?",
"For Part {#}, graph the measured \\(T\\) against \\(1/A\\). Is it a straight line through the origin? Compare its slope with \\(0.161\\ \\mathrm{s/m}\\times V\\). Where do the points fall away from Sabine’s line, and why might they?":
  "Para la Parte {#}, grafica el \\(T\\) medido en función de \\(1/A\\). ¿Es una recta que pasa por el origen? Compara su pendiente con \\(0.161\\ \\mathrm{s/m}\\times V\\). ¿Dónde se apartan los puntos de la recta de Sabine, y por qué podría ser?",
"For Part {#}, find the absorption of the audience in each band from the difference in \\(A\\), and the absorption per person ({#} people per m²). Why is the audience much less absorbing at {#} Hz?":
  "Para la Parte {#}, encuentra la absorción del público en cada banda a partir de la diferencia en \\(A\\), y la absorción por persona ({#} personas por m²). ¿Por qué el público absorbe mucho menos a {#} Hz?",
"For Part {#}, find the mystery panels’ absorption in each band: the difference between the room’s \\(A\\) with and without them is \\(S_p(\\alpha_p - \\alpha_{\\text{wall}})\\), with \\(S_p\\) the panels’ area and \\(\\alpha_{\\text{wall}}\\) the wall’s coefficient they cover. Which material is it?":
  "Para la Parte {#}, encuentra la absorción de los paneles misteriosos en cada banda: la diferencia entre la \\(A\\) de la sala con y sin ellos es \\(S_p(\\alpha_p - \\alpha_{\\text{wall}})\\), con \\(S_p\\) el área de los paneles y \\(\\alpha_{\\text{wall}}\\) el coeficiente de la pared que cubren. ¿Qué material es?",
"The ray trace uses a finite number of rays, so a measured \\(T\\) carries a scatter of a few percent; the demo always gives the same \\(T\\) for the same room, so repeating a reading does not show it. Compare readings in nearby setups (one panel more or fewer) to judge it. On a real measurement add background noise (which limits the range of the decay), the room not being evenly filled with sound, air absorption at high frequencies, and the coefficients of real materials varying with how they are mounted.":
  "El trazado de rayos usa un número finito de rayos, así que un \\(T\\) medido lleva una dispersión de unos cuantos por ciento; la demo siempre da el mismo \\(T\\) para la misma sala, así que repetir una lectura no la muestra. Compara lecturas en configuraciones cercanas (un panel más o uno menos) para juzgarla. En una medición real agrega el ruido de fondo (que limita el intervalo del decaimiento), que la sala no está llena de sonido de manera uniforme, la absorción del aire a altas frecuencias y que los coeficientes de los materiales reales varían según cómo se montan.",
"Why do concert halls have a longer reverberation time than lecture rooms?":
  "¿Por qué las salas de conciertos tienen un tiempo de reverberación más largo que los salones de clase?",
"A lecture room sounds muddy. Name two changes that would shorten \\(T\\), and the bands they work in.":
  "Un salón de clase suena confuso. Nombra dos cambios que acortarían \\(T\\), y las bandas en las que funcionan.",
"Why does an empty hall sound different from a full one?":
  "¿Por qué un auditorio vacío suena distinto de uno lleno?",
"Why does Sabine’s formula fail for a room whose surfaces absorb almost everything?":
  "¿Por qué falla la fórmula de Sabine para una sala cuyas superficies absorben casi todo?",
"Prelab answers, a Data table copy for each part with the last three columns filled, the graph and fit for Part {#}, your audience and mystery panel coefficients, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, una copia de la tabla de datos para cada parte con las últimas tres columnas llenas, la gráfica y el ajuste de la Parte {#}, tus coeficientes del público y de los paneles misteriosos, y las respuestas a las preguntas. Identifica los datos simulados.",
"Total absorption of the room":
  "Absorción total de la sala",
"Height of the room":
  "Altura de la sala",
"Length of the room":
  "Longitud de la sala",
"Total surface area":
  "Área total de superficie",
"Area of surface i":
  "Área de la superficie i",
"Area of the panels":
  "Área de los paneles",
"Reverberation time, for the level to fall {#} dB":
  "Tiempo de reverberación, para que el nivel baje {#} dB",
"Volume of the room":
  "Volumen de la sala",
"Width of the room":
  "Ancho de la sala",
"Absorption coefficient of a surface":
  "Coeficiente de absorción de una superficie",
"Absorption coefficient of surface i":
  "Coeficiente de absorción de la superficie i",
"Absorption coefficient of the panels":
  "Coeficiente de absorción de los paneles",
"Absorption coefficient of the wall they cover":
  "Coeficiente de absorción de la pared que cubren",
"Speed of sound":
  "Rapidez del sonido",
"Room Acoustics":
  "Acústica de salas"
});
