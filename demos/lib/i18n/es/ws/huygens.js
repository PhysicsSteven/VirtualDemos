/* ws/huygens in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/huygens', {
"Upper medium or lane":
  "Medio superior o carril",
"Lower medium":
  "Medio inferior",
"Lane length (m)":
  "Longitud del carril (m)",
"Time (ns)":
  "Tiempo (ns)",
"sinθ_1/v_1 (ns/m)":
  "sinθ_1/v_1 (ns/m)",
"sinθ_2/v_2 (ns/m)":
  "sinθ_2/v_2 (ns/m)",
"Opening (wavelengths)":
  "Abertura (longitudes de onda)",
"First dark direction (°)":
  "Primera dirección oscura (°)",
"Huygens’s Principle | VirtualDemos":
  "Principio de Huygens | VirtualDemos",
"Huygens’s Principle":
  "Principio de Huygens",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (and §{#} to §{#}). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (y §{#} a §{#}). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Light in matter: a race; Huygens’s construction; Reflection; Refraction into glass; From glass into air; Sound through a doorway.":
  "<strong>Configuraciones en la demo:</strong> La luz en la materia: una carrera; La construcción de Huygens; Reflexión; Refracción hacia el vidrio; Del vidrio al aire; Sonido a través de una puerta.",
"<strong>Using the demo.</strong> Four views. Race: light pulses cross lanes of the materials of OpenStax Table {#}, all starting together; Length of each lane sets the distance. Construction: a straight or curved wavefront sends out wavelets, and the new front is drawn tangent to them; Wavelets along the front sets how many. Boundary: a plane wave meets the boundary between an upper and a lower medium (or a mirror) at the angle of incidence \\(\\theta_1\\); wavelets grow from each point of the boundary as the front reaches it, and the new fronts are drawn tangent to them. Opening: a plane wave meets a wall with an opening a set number of wavelengths wide, and the wavelets from the opening add up beyond it. Pause, Play and Restart control time. Blind keeps the wavelets but hides the new fronts, the angle of refraction, the race times and the first dark direction.":
  "<strong>Uso de la demo.</strong> Cuatro vistas. Carrera: pulsos de luz cruzan carriles de los materiales de la Tabla {#} de OpenStax, todos saliendo juntos; Longitud de cada carril fija la distancia. Construcción: un frente de onda recto o curvo emite onditas, y el nuevo frente se dibuja tangente a ellas; Onditas a lo largo del frente fija cuántas. Frontera: una onda plana llega a la frontera entre un medio superior y uno inferior (o un espejo) con el ángulo de incidencia \\(\\theta_1\\); las onditas crecen desde cada punto de la frontera conforme el frente la alcanza, y los nuevos frentes se dibujan tangentes a ellas. Abertura: una onda plana llega a una pared con una abertura de un número fijo de longitudes de onda de ancho, y las onditas de la abertura se suman más allá de ella. Pausa, Iniciar y Reiniciar controlan el tiempo. A ciegas conserva las onditas pero oculta los nuevos frentes, el ángulo de refracción, los tiempos de la carrera y la primera dirección oscura.",
"<strong>What the demo models.</strong> Light moves at \\(v = c/n\\), with \\(n\\) from OpenStax Table {#} at {#} nm. Each wavelet grows at the speed of the medium it is in, and the new front is their common tangent, which gives Snell’s law, \\(\\sin\\theta_2/v_2 = \\sin\\theta_1/v_1\\), and the law of reflection. The opening is a row of point sources whose waves are added (the Huygens and Fresnel sum); far away the first dark direction is at \\(\\sin\\theta = \\lambda/a\\). Simulated data.":
  "<strong>Qué modela la demo.</strong> La luz se mueve a \\(v = c/n\\), con \\(n\\) de la Tabla {#} de OpenStax a {#} nm. Cada ondita crece a la rapidez del medio en que está, y el nuevo frente es su tangente común, lo que da la ley de Snell, \\(\\sin\\theta_2/v_2 = \\sin\\theta_1/v_1\\), y la ley de la reflexión. La abertura es una fila de fuentes puntuales cuyas ondas se suman (la suma de Huygens y Fresnel); lejos, la primera dirección oscura está en \\(\\sin\\theta = \\lambda/a\\). Datos simulados.",
"Use Huygens’s principle to explain how light slows down in matter, and to derive the laws of reflection and refraction, total internal reflection and the spreading of waves through an opening; then test each with measurements.":
  "Usa el principio de Huygens para explicar cómo se frena la luz en la materia, y para deducir las leyes de la reflexión y la refracción, la reflexión total interna y el ensanchamiento de las ondas a través de una abertura; luego pon a prueba cada una con mediciones.",
"Light moves at \\(c = 2.998\\times10^8\\) m/s in vacuum and at \\(v = c/n\\) in a material of index \\(n\\), so a distance \\(L\\) takes \\(t = nL/c\\). Huygens’s principle says every point on a wavefront is a source of wavelets that spread at the wave’s speed; after a time \\(t\\) the new wavefront is the surface tangent to all the wavelets.":
  "La luz se mueve a \\(c = 2.998\\times10^8\\) m/s en el vacío y a \\(v = c/n\\) en un material de índice \\(n\\), así que una distancia \\(L\\) toma \\(t = nL/c\\). El principio de Huygens dice que cada punto de un frente de onda es una fuente de onditas que se extienden a la rapidez de la onda; después de un tiempo \\(t\\) el nuevo frente de onda es la superficie tangente a todas las onditas.",
"When a plane front meets a boundary at the angle \\(\\theta_1\\), it reaches different points of the boundary at different times. Wavelets grow into the lower medium at \\(v_2\\); their tangent is the refracted front, at an angle \\(\\theta_2\\) with":
  "Cuando un frente plano llega a una frontera con el ángulo \\(\\theta_1\\), alcanza distintos puntos de la frontera en distintos momentos. Las onditas crecen hacia el medio inferior a \\(v_2\\); su tangente es el frente refractado, con un ángulo \\(\\theta_2\\) tal que",
"\\[\\frac{\\sin\\theta_1}{v_1} = \\frac{\\sin\\theta_2}{v_2},\\qquad\\text{so}\\qquad n_1\\sin\\theta_1 = n_2\\sin\\theta_2.\\]":
  "\\[\\frac{\\sin\\theta_1}{v_1} = \\frac{\\sin\\theta_2}{v_2},\\qquad\\text{so}\\qquad n_1\\sin\\theta_1 = n_2\\sin\\theta_2.\\]",
"Wavelets growing back into the upper medium at \\(v_1\\) give the reflected front, at an angle equal to \\(\\theta_1\\). If light speeds up (\\(n_2 < n_1\\)), no tangent exists above the critical angle \\(\\theta_c\\), with \\(\\sin\\theta_c = n_2/n_1\\), and all the light is reflected. Behind an opening of width \\(a\\), the wavelets from the opening cancel in the direction where \\(\\sin\\theta = \\lambda/a\\), so a wave spreads strongly when the opening is only a few wavelengths wide.":
  "Las onditas que crecen de regreso hacia el medio superior a \\(v_1\\) dan el frente reflejado, con un ángulo igual a \\(\\theta_1\\). Si la luz se acelera (\\(n_2 < n_1\\)), no existe tangente por encima del ángulo crítico \\(\\theta_c\\), con \\(\\sin\\theta_c = n_2/n_1\\), y toda la luz se refleja. Detrás de una abertura de ancho \\(a\\), las onditas de la abertura se cancelan en la dirección donde \\(\\sin\\theta = \\lambda/a\\), así que una onda se ensancha mucho cuando la abertura mide solo unas cuantas longitudes de onda.",
"How long does light take to cross {#} m of vacuum? Of diamond (\\(n = 2.419\\))? How far behind the vacuum pulse is the diamond pulse?":
  "¿Cuánto tarda la luz en cruzar {#} m de vacío? ¿Y de diamante (\\(n = 2.419\\))? ¿Qué tan atrás del pulso en el vacío va el pulso en el diamante?",
"Light in air meets crown glass (\\(n = 1.52\\)) at {#}°. Find the angle of refraction.":
  "La luz en el aire llega a vidrio crown (\\(n = 1.52\\)) a {#}°. Encuentra el ángulo de refracción.",
"Find the critical angle for light going from crown glass into air.":
  "Encuentra el ángulo crítico para la luz que pasa de vidrio crown al aire.",
"Sound at {#} Hz (\\(\\lambda = 0.343\\) m, with sound at {#} m/s) passes through a doorway {#} m wide. In what direction is the first dark (quiet) direction? Why does light through the same door not spread noticeably?":
  "Un sonido de {#} Hz (\\(\\lambda = 0.343\\) m, con el sonido a {#} m/s) pasa por una puerta de {#} m de ancho. ¿En qué dirección está la primera dirección oscura (silenciosa)? ¿Por qué la luz que pasa por la misma puerta no se ensancha de manera notable?",
"There are no hazards in the simulation. In a real optics lab, never look into a laser beam or its reflection from a shiny surface.":
  "No hay peligros en la simulación. En un laboratorio de óptica real, nunca mires hacia un haz láser ni hacia su reflejo en una superficie brillante.",
"<strong>Part {#}: the race.</strong> Record the time for light to cross each lane with the lanes {#} m long, then {#} m long.":
  "<strong>Parte {#}: la carrera.</strong> Registra el tiempo que tarda la luz en cruzar cada carril con los carriles de {#} m de largo, y luego de {#} m de largo.",
"<strong>Part {#}: the construction.</strong> Watch the construction with a straight front and with a curved front, with few and many wavelets. Describe how the new front is found. (Nothing is recorded in the table.)":
  "<strong>Parte {#}: la construcción.</strong> Observa la construcción con un frente recto y con un frente curvo, con pocas y con muchas onditas. Describe cómo se encuentra el nuevo frente. (No se registra nada en la tabla.)",
"<strong>Part {#}: refraction into glass.</strong> From air into crown glass, measure the angle of refraction for angles of incidence of {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#}°. Then, at {#}°, measure it for water and for diamond as the lower medium.":
  "<strong>Parte {#}: refracción hacia el vidrio.</strong> Del aire al vidrio crown, mide el ángulo de refracción para ángulos de incidencia de {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#}°. Luego, a {#}°, mídelo con agua y con diamante como medio inferior.",
"<strong>Part {#}: from glass into air.</strong> From crown glass into air, measure the angle of refraction for angles of incidence of {#}, {#}, {#}, {#}, {#}, {#} and {#}°. Watch the reflected wave too.":
  "<strong>Parte {#}: del vidrio al aire.</strong> Del vidrio crown al aire, mide el ángulo de refracción para ángulos de incidencia de {#}, {#}, {#}, {#}, {#}, {#} y {#}°. Observa también la onda reflejada.",
"<strong>Part {#}: reflection.</strong> With a mirror as the lower medium, measure the angle of reflection at {#}, {#} and {#}°.":
  "<strong>Parte {#}: reflexión.</strong> Con un espejo como medio inferior, mide el ángulo de reflexión a {#}, {#} y {#}°.",
"<strong>Part {#}: the opening.</strong> Find the first dark direction for openings {#}, {#}, {#}, {#}, {#}, {#} and {#} wavelengths wide.":
  "<strong>Parte {#}: la abertura.</strong> Encuentra la primera dirección oscura para aberturas de {#}, {#}, {#}, {#}, {#}, {#} y {#} longitudes de onda de ancho.",
"<strong>Using the virtual apparatus.</strong> In the race, one reading records every lane. Record with Blind off, or turn it on to predict first: it leaves the hidden values blank. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> En la carrera, una lectura registra todos los carriles. Registra con A ciegas desactivado, o actívalo para predecir primero: deja en blanco los valores ocultos. Envía cada parte a la hoja de trabajo antes de borrar, para que cada parte tenga su propia copia de la tabla de datos.",
"<span>B</span>View":
  "<span>B</span>Vista",
"<span>C</span>Upper medium or lane":
  "<span>C</span>Medio superior o carril",
"<span>E</span>Lower medium":
  "<span>E</span>Medio inferior",
"<span>G</span>Lane length (m)":
  "<span>G</span>Longitud del carril (m)",
"<span>H</span>Time (ns)":
  "<span>H</span>Tiempo (ns)",
"<span>I</span>\\(\\theta_1\\) (°)":
  "<span>I</span>\\(\\theta_1\\) (°)",
"<span>J</span>\\(\\theta_2\\) (°)":
  "<span>J</span>\\(\\theta_2\\) (°)",
"<span>K</span>\\(\\sin\\theta_1/v_1\\) (ns/m)":
  "<span>K</span>\\(\\sin\\theta_1/v_1\\) (ns/m)",
"<span>L</span>\\(\\sin\\theta_2/v_2\\) (ns/m)":
  "<span>L</span>\\(\\sin\\theta_2/v_2\\) (ns/m)",
"<span>M</span>Opening (wavelengths)":
  "<span>M</span>Abertura (longitudes de onda)",
"<span>N</span>First dark direction (°)":
  "<span>N</span>Primera dirección oscura (°)",
"View, row {#}":
  "Vista, fila {#}",
"Upper medium or lane, row {#}":
  "Medio superior o carril, fila {#}",
"n_1, row {#}":
  "n_1, fila {#}",
"Lower medium, row {#}":
  "Medio inferior, fila {#}",
"n_2, row {#}":
  "n_2, fila {#}",
"Lane length (m), row {#}":
  "Longitud del carril (m), fila {#}",
"Time (ns), row {#}":
  "Tiempo (ns), fila {#}",
"θ_1 (°), row {#}":
  "θ_1 (°), fila {#}",
"θ_2 (°), row {#}":
  "θ_2 (°), fila {#}",
"sinθ_1/v_1 (ns/m), row {#}":
  "sinθ_1/v_1 (ns/m), fila {#}",
"sinθ_2/v_2 (ns/m), row {#}":
  "sinθ_2/v_2 (ns/m), fila {#}",
"Opening (wavelengths), row {#}":
  "Abertura (longitudes de onda), fila {#}",
"First dark direction (°), row {#}":
  "Primera dirección oscura (°), fila {#}",
"sinθ₁/v₁ (ns/m)":
  "sinθ₁/v₁ (ns/m)",
"sinθ₂/v₂ (ns/m)":
  "sinθ₂/v₂ (ns/m)",
"For Part {#}, graph the time against \\(n\\) for each lane length. From the slopes, find \\(c\\). How far behind the vacuum pulse is the air pulse after {#} m, and why is it so hard to see?":
  "Para la Parte {#}, grafica el tiempo en función de \\(n\\) para cada longitud de carril. A partir de las pendientes, encuentra \\(c\\). ¿Qué tan atrás del pulso en el vacío va el pulso en el aire después de {#} m, y por qué es tan difícil verlo?",
"For Part {#}, explain why the number of wavelets does not change where the new front is.":
  "Para la Parte {#}, explica por qué el número de onditas no cambia dónde está el nuevo frente.",
"For Part {#}, graph \\(\\sin\\theta_2\\) against \\(\\sin\\theta_1\\). Is it a straight line through the origin? From the slope, find the index of crown glass. Compare \\(\\sin\\theta_1/v_1\\) with \\(\\sin\\theta_2/v_2\\) for each row. Which lower medium bends the light most, and why?":
  "Para la Parte {#}, grafica \\(\\sin\\theta_2\\) en función de \\(\\sin\\theta_1\\). ¿Es una recta que pasa por el origen? A partir de la pendiente, encuentra el índice del vidrio crown. Compara \\(\\sin\\theta_1/v_1\\) con \\(\\sin\\theta_2/v_2\\) para cada fila. ¿Qué medio inferior desvía más la luz, y por qué?",
"For Part {#}, find the angle above which there is no refracted wave and compare it with \\(\\arcsin(n_2/n_1)\\). Use the wavelets to explain why no refracted front can form above it.":
  "Para la Parte {#}, encuentra el ángulo por encima del cual no hay onda refractada y compáralo con \\(\\arcsin(n_2/n_1)\\). Usa las onditas para explicar por qué no puede formarse un frente refractado por encima de él.",
"For Part {#}, compare the angle of reflection with the angle of incidence, and explain the law of reflection from the wavelets.":
  "Para la Parte {#}, compara el ángulo de reflexión con el ángulo de incidencia, y explica la ley de la reflexión a partir de las onditas.",
"For Part {#}, graph \\(\\sin\\theta\\) of the first dark direction against (wavelength)/(opening). What is the slope? Why is there no dark direction for the {#} wavelength opening?":
  "Para la Parte {#}, grafica \\(\\sin\\theta\\) de la primera dirección oscura en función de (longitud de onda)/(abertura). ¿Cuál es la pendiente? ¿Por qué no hay dirección oscura para la abertura de {#} longitud de onda?",
"The model is exact, and the angles are given to {#}°, so the scatter is negligible; the angle of incidence is set in whole degrees. The indices are those of Table {#} at {#} nm; real indices change with the wavelength (dispersion), with temperature and, for gases, with pressure. The opening model is two dimensional (a slit, not a round hole) and the first dark direction is the far field result.":
  "El modelo es exacto, y los ángulos se dan con resolución de {#}°, así que la dispersión es despreciable; el ángulo de incidencia se fija en grados enteros. Los índices son los de la Tabla {#} a {#} nm; los índices reales cambian con la longitud de onda (dispersión), con la temperatura y, para los gases, con la presión. El modelo de la abertura es bidimensional (una rendija, no un agujero redondo) y la primera dirección oscura es el resultado de campo lejano.",
"Why does light bend toward the normal when it slows down? Answer using the wavelets, not the formula.":
  "¿Por qué la luz se desvía hacia la normal cuando se frena? Responde usando las onditas, no la fórmula.",
"A beam of light crosses a thick glass plate at an angle and leaves it parallel to its original direction. Why?":
  "Un haz de luz cruza una placa gruesa de vidrio en ángulo y sale paralelo a su dirección original. ¿Por qué?",
"Why can you hear someone around a corner but not see them?":
  "¿Por qué puedes oír a alguien que está a la vuelta de una esquina pero no verlo?",
"Optical fibers guide light by total internal reflection. Which must have the higher index, the core or the cladding, and why?":
  "Las fibras ópticas guían la luz por reflexión total interna. ¿Cuál debe tener el índice más alto, el núcleo o el revestimiento, y por qué?",
"Prelab answers, a Data table copy for each part, the graphs and fits, your values of \\(c\\) and the index of crown glass, the critical angle, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, una copia de la tabla de datos para cada parte, las gráficas y los ajustes, tus valores de \\(c\\) y del índice del vidrio crown, el ángulo crítico, y las respuestas a las preguntas. Identifica los datos simulados.",
"Distance traveled":
  "Distancia recorrida",
"Width of the opening":
  "Ancho de la abertura",
"Index of refraction":
  "Índice de refracción",
"Index of refraction of the upper medium":
  "Índice de refracción del medio superior",
"Index of refraction of the lower medium":
  "Índice de refracción del medio inferior",
"Travel time":
  "Tiempo de recorrido",
"Direction from the opening":
  "Dirección desde la abertura",
"Angle of incidence":
  "Ángulo de incidencia",
"Angle of refraction (or reflection)":
  "Ángulo de refracción (o de reflexión)",
"Critical angle":
  "Ángulo crítico",
"Speed of light in a material":
  "Rapidez de la luz en un material",
"Speed of light in the upper medium":
  "Rapidez de la luz en el medio superior",
"Speed of light in the lower medium":
  "Rapidez de la luz en el medio inferior",
"Column O, row {#}":
  "Columna O, fila {#}",
"Heading of column O":
  "Encabezado de la columna O",
"Column O":
  "Columna O",
"Huygens's Principle":
  "Principio de Huygens"
});
