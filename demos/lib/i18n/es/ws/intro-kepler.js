/* ws/intro-kepler in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/intro-kepler', {
"Perihelion distance r_p (AU)":
  "Distancia en el perihelio r_p (UA)",
"Aphelion distance r_a (AU)":
  "Distancia en el afelio r_a (UA)",
"Period T (yr)":
  "Periodo T (años)",
"Semi major axis a (AU)":
  "Semieje mayor a (UA)",
"T^{#} (yr²)":
  "T^{#} (años²)",
"Kepler’s Laws from Earth to Pluto | VirtualDemos":
  "Las leyes de Kepler de la Tierra a Plutón | VirtualDemos",
"Kepler’s Laws from Earth to Pluto":
  "Las leyes de Kepler de la Tierra a Plutón",
"<strong>Setups in the demo:</strong> Earth; Mars; Mercury; Halley’s comet; Vesta; Ceres; Apophis; Pluto; Binary star; Circular orbit; Escape; Bound and unbound; Sandbox.":
  "<strong>Configuraciones en la demo:</strong> Tierra; Marte; Mercurio; Cometa Halley; Vesta; Ceres; Apofis; Plutón; Estrella binaria; Órbita circular; Escape; Ligadas y no ligadas; Caja de arena.",
"The view shows an object orbiting the Sun, drawn to scale, with its path traced behind it. Each setup starts the object on its real orbit: the planets, Pluto and the comet from standard values, and Vesta, Ceres and Apophis from their orbits in the JPL Small Body Database.":
  "La vista muestra un objeto que orbita el Sol, dibujado a escala, con su camino trazado detrás. Cada configuración inicia el objeto en su órbita real: los planetas, Plutón y el cometa con valores estándar, y Vesta, Ceres y Apofis con sus órbitas de la JPL Small Body Database.",
"The timer runs on simulated time, so it only counts while the demo is playing. Reset puts the object back where it started, with the clock at zero.":
  "El cronómetro corre en tiempo simulado, así que solo cuenta mientras la demo está en marcha. Reiniciar regresa el objeto a donde empezó, con el reloj en cero.",
"With Ruler on, click or drag in the view to place points {#} and {#}. The ruler gives each point’s distance from the Sun and the distance between the points. Zoom in (scroll, or the + and − keys) to place a point precisely.":
  "Con la Regla activa, haz clic o arrastra en la vista para colocar los puntos {#} y {#}. La regla da la distancia de cada punto al Sol y la distancia entre los puntos. Acerca la vista (con la rueda, o las teclas + y −) para colocar un punto con precisión.",
"Blind hides the demo’s own values of the orbit’s size, shape and period, so you measure them yourself. The timer and the ruler stay.":
  "A ciegas oculta los valores propios de la demo del tamaño, la forma y el periodo de la órbita, para que los midas tú. El cronómetro y la regla se quedan.",
"Record reading stores the timer and both ruler distances with the name of the setup. Export to worksheet sends the readings to the Data table below.":
  "Registrar lectura guarda el cronómetro y las dos distancias de la regla con el nombre de la configuración. Exportar a la hoja envía las lecturas a la tabla de datos de abajo.",
"The Sun is held fixed and each object feels only the Sun’s gravity, so the planets do not pull on each other.":
  "El Sol se mantiene fijo y cada objeto siente solo la gravedad del Sol, así que los planetas no se atraen entre sí.",
"The Sandbox is for exploring on your own: drag stars, planets and moons from the tray into space. Unlike the other setups, nothing is held fixed: every body pulls on every other. Each starts on a circular orbit around the body that pulls on it hardest; drag the tip of its arrow to change its velocity, and watch the energy of the whole system as it runs. The Sandbox records no readings.":
  "La Caja de arena es para explorar por tu cuenta: arrastra estrellas, planetas y lunas de la bandeja al espacio. A diferencia de las otras configuraciones, nada se mantiene fijo: cada cuerpo atrae a todos los demás. Cada uno empieza en una órbita circular alrededor del cuerpo que lo atrae con más fuerza; arrastra la punta de su flecha para cambiar su velocidad, y observa la energía de todo el sistema mientras corre. La Caja de arena no registra lecturas.",
"Measure the orbits of planets, asteroids and a dwarf planet, and test Kepler’s three laws of planetary motion with them.":
  "Mide las órbitas de planetas, asteroides y un planeta enano, y pon a prueba con ellas las tres leyes del movimiento planetario de Kepler.",
"Johannes Kepler worked out three rules for the planets in the early 1600s from Tycho Brahe’s careful naked eye measurements of where the planets appeared in the sky.":
  "Johannes Kepler dedujo tres reglas para los planetas a principios del siglo XVII a partir de las cuidadosas mediciones a simple vista de Tycho Brahe sobre dónde aparecían los planetas en el cielo.",
"<strong>First law.</strong> Each planet moves on an ellipse with the Sun at one focus, not at the center. The point of the orbit closest to the Sun is the <strong>perihelion</strong> and the farthest is the <strong>aphelion</strong>. Half the long axis of the ellipse is the <strong>semi major axis</strong> \\(a\\), the average of the perihelion and aphelion distances:":
  "<strong>Primera ley.</strong> Cada planeta se mueve en una elipse con el Sol en uno de sus focos, no en el centro. El punto de la órbita más cercano al Sol es el <strong>perihelio</strong> y el más lejano es el <strong>afelio</strong>. La mitad del eje largo de la elipse es el <strong>semieje mayor</strong> \\(a\\), el promedio de las distancias en el perihelio y en el afelio:",
"\\[a = \\frac{r_p + r_a}{2}.\\]":
  "\\[a = \\frac{r_p + r_a}{2}.\\]",
"How stretched the ellipse is shows in its <strong>eccentricity</strong> \\(e\\), which is {#} for a circle and close to {#} for a long thin ellipse:":
  "Qué tan alargada es la elipse lo indica su <strong>excentricidad</strong> \\(e\\), que es {#} para un círculo y cercana a {#} para una elipse larga y delgada:",
"\\[e = \\frac{r_a - r_p}{r_a + r_p}.\\]":
  "\\[e = \\frac{r_a - r_p}{r_a + r_p}.\\]",
"<strong>Second law.</strong> A line from the Sun to the planet sweeps out equal areas in equal times, so a planet moves fastest at perihelion and slowest at aphelion.":
  "<strong>Segunda ley.</strong> Una línea del Sol al planeta barre áreas iguales en tiempos iguales, así que un planeta se mueve más rápido en el perihelio y más despacio en el afelio.",
"<strong>Third law.</strong> The square of the period is proportional to the cube of the semi major axis. With the period \\(T\\) in years and \\(a\\) in AU ({#} AU is Earth’s average distance from the Sun, about {#} million km), for anything orbiting the Sun":
  "<strong>Tercera ley.</strong> El cuadrado del periodo es proporcional al cubo del semieje mayor. Con el periodo \\(T\\) en años y \\(a\\) en UA ({#} UA es la distancia media de la Tierra al Sol, unos {#} millones de km), para cualquier cosa que orbite el Sol",
"Earth has \\(a = 1\\) AU and \\(T = 1\\) year. What period does the third law predict for an object with \\(a = 4\\) AU?":
  "La Tierra tiene \\(a = 1\\) UA y \\(T = 1\\) año. ¿Qué periodo predice la tercera ley para un objeto con \\(a = 4\\) UA?",
"An asteroid comes within {#} AU of the Sun at perihelion and goes out to {#} AU at aphelion. Find its semi major axis and its eccentricity.":
  "Un asteroide se acerca a {#} UA del Sol en el perihelio y se aleja hasta {#} UA en el afelio. Encuentra su semieje mayor y su excentricidad.",
"Where on its orbit does a planet move fastest, and which of Kepler’s laws tells you so?":
  "¿En qué parte de su órbita se mueve más rápido un planeta, y cuál de las leyes de Kepler te lo dice?",
"Earth’s orbit is an ellipse. Before you measure it, guess how much farther from the Sun Earth is at aphelion than at perihelion: about {#}%, about {#}%, or about twice as far? What is your guess based on?":
  "La órbita de la Tierra es una elipse. Antes de medirla, adivina cuánto más lejos del Sol está la Tierra en el afelio que en el perihelio: aproximadamente {#}%, aproximadamente {#}% o aproximadamente el doble de lejos. ¿En qué basas tu suposición?",
"<strong>Set up.</strong> Press Flat (above the orbit view; the demo opens in 3D) so you look straight down on the orbit. Tick Blind: hide predictions and answers (in the Lab section), so the demo’s own answers are hidden, and tick Ruler (in the Measure section).":
  "<strong>Preparación.</strong> Presiona Plano (arriba de la vista de la órbita; la demo abre en 3D) para ver la órbita directamente desde arriba. Marca A ciegas: ocultar predicciones y respuestas (en la sección Laboratorio), para que las respuestas de la propia demo queden ocultas, y marca Regla (en la sección Medir).",
"<strong>Measure each orbit.</strong> Do the following for Earth, Mars, Vesta, Ceres and Pluto, in that order.":
  "<strong>Mide cada órbita.</strong> Haz lo siguiente para la Tierra, Marte, Vesta, Ceres y Plutón, en ese orden.",
"Choose the setup, press Pause, then press Reset.":
  "Elige la configuración, presiona Pausa y luego Reiniciar.",
"Place ruler point {#} on the perihelion, the point of the orbit closest to the Sun, and point {#} on the aphelion, the farthest point. Each of these setups starts the object at its perihelion. With Ruler ticked, a click places the next point and dragging a point moves it; the readouts Point {#} to the star and Point {#} to the star give the two distances. To zoom in on one end: untick Ruler, drag empty space (away from the object and its arrow) to bring that end to the middle of the view, scroll or press + to zoom, then tick Ruler again and place or drag the point exactly onto the path. Fit shows the whole orbit again. On a phone, one finger scrolls the page: tap to place a point, and drag a point or the view with two fingers.":
  "Coloca el punto {#} de la regla en el perihelio, el punto de la órbita más cercano al Sol, y el punto {#} en el afelio, el punto más lejano. Cada una de estas configuraciones empieza con el objeto en su perihelio. Con Regla marcada, un clic coloca el siguiente punto y arrastrar un punto lo mueve; las lecturas Punto {#} a la estrella y Punto {#} a la estrella dan las dos distancias. Para acercar la vista a un extremo: desmarca Regla, arrastra el espacio vacío (lejos del objeto y de su flecha) para llevar ese extremo al centro de la vista, usa la rueda o presiona + para acercar, luego marca Regla otra vez y coloca o arrastra el punto exactamente sobre la trayectoria. Ajuste vuelve a mostrar toda la órbita. En un teléfono, un dedo desplaza la página: toca para colocar un punto y arrastra un punto o la vista con dos dedos.",
"Time one full orbit: press Zero timer, then Start timer, then Play. Press Pause when the object is back where it started, then Stop timer. The Timer readout gives the period in years.":
  "Mide el tiempo de una órbita completa: presiona Poner en cero, luego Iniciar cronómetro, luego Iniciar. Presiona Pausa cuando el objeto vuelva a donde empezó y luego Detener cronómetro. La lectura Cronómetro da el periodo en años.",
"Press Record reading (in the Readings section), with Ruler ticked so the reading keeps both distances.":
  "Presiona Registrar lectura (en la sección Lecturas), con Regla marcada para que la lectura guarde las dos distancias.",
"Press Export to worksheet to send all five readings. They fill the perihelion, aphelion and period columns; you fill the other columns in the Analysis.":
  "Presiona Exportar a la hoja para enviar las cinco lecturas. Llenan las columnas de perihelio, afelio y periodo; tú llenas las demás columnas en el Análisis.",
"<span>A</span>Object":
  "<span>A</span>Objeto",
"<span>B</span>Perihelion distance \\(r_p\\) (AU)":
  "<span>B</span>Distancia en el perihelio \\(r_p\\) (UA)",
"<span>C</span>Aphelion distance \\(r_a\\) (AU)":
  "<span>C</span>Distancia en el afelio \\(r_a\\) (UA)",
"<span>D</span>Period \\(T\\) (yr)":
  "<span>D</span>Periodo \\(T\\) (años)",
"<span>E</span>Semi major axis \\(a\\) (AU)":
  "<span>E</span>Semieje mayor \\(a\\) (UA)",
"<span>F</span>Eccentricity \\(e\\)":
  "<span>F</span>Excentricidad \\(e\\)",
"<span>H</span>\\(T^2\\) (yr²)":
  "<span>H</span>\\(T^2\\) (años²)",
"Object, row {#}":
  "Objeto, fila {#}",
"Perihelion distance r_p (AU), row {#}":
  "Distancia en el perihelio r_p (UA), fila {#}",
"Aphelion distance r_a (AU), row {#}":
  "Distancia en el afelio r_a (UA), fila {#}",
"Period T (yr), row {#}":
  "Periodo T (años), fila {#}",
"Semi major axis a (AU), row {#}":
  "Semieje mayor a (UA), fila {#}",
"Eccentricity e, row {#}":
  "Excentricidad e, fila {#}",
"a^{#} (AU³), row {#}":
  "a^{#} (UA³), fila {#}",
"T^{#} (yr²), row {#}":
  "T^{#} (años²), fila {#}",
"T² (yr²)":
  "T² (años²)",
"Use your perihelion and aphelion distances to find \\(a\\) and \\(e\\) for each object, and fill in those columns.":
  "Usa tus distancias en el perihelio y en el afelio para encontrar \\(a\\) y \\(e\\) de cada objeto, y llena esas columnas.",
"Which object has the most eccentric orbit, and which the most nearly circular? Rank the five objects from smallest \\(e\\) to largest.":
  "¿Qué objeto tiene la órbita más excéntrica y cuál la más cercana a un círculo? Ordena los cinco objetos de la \\(e\\) más pequeña a la más grande.",
"Fill in the \\(a^3\\) and \\(T^2\\) columns and graph \\(T^2\\) (vertical axis) against \\(a^3\\) (horizontal axis). Pluto’s point is so far out that the other four crowd together near zero, so also look at the graph with Log scales on, which spreads all five out. The third law says the points fall on a straight line through the origin with a slope of {#}. What slope and intercept does your graph give?":
  "Llena las columnas \\(a^3\\) y \\(T^2\\) y grafica \\(T^2\\) (eje vertical) contra \\(a^3\\) (eje horizontal). El punto de Plutón está tan lejos que los otros cuatro se amontonan cerca de cero, así que observa también la gráfica con Escalas logarítmicas activadas, que separa los cinco. La tercera ley dice que los puntos caen sobre una línea recta que pasa por el origen con una pendiente de {#}. ¿Qué pendiente y qué ordenada al origen da tu gráfica?",
"Vesta and Ceres both orbit in the asteroid belt between Mars and Jupiter. Which one takes longer to go around the Sun, by how much, and why?":
  "Vesta y Ceres orbitan ambas en el cinturón de asteroides entre Marte y Júpiter. ¿Cuál tarda más en dar la vuelta al Sol, por cuánto y por qué?",
"Neptune orbits the Sun at an average distance of {#} AU. Compare that with Pluto’s perihelion distance. What does this tell you about the two orbits?":
  "Neptuno orbita el Sol a una distancia media de {#} UA. Compárala con la distancia de Plutón en el perihelio. ¿Qué te dice esto sobre las dos órbitas?",
"Untick Blind, choose Mars and then Pluto, and read the demo’s Semi major axis a, Eccentricity e and Period P readouts for each. By what percentage does each of your values differ from the demo’s?":
  "Desmarca A ciegas, elige Marte y luego Plutón, y lee las lecturas Semieje mayor a, Excentricidad e y Periodo P de la demo para cada uno. ¿En qué porcentaje difiere cada uno de tus valores de los de la demo?",
"From your Earth reading, how much farther from the Sun is the aphelion than the perihelion, as a percentage of the perihelion distance? Check it against your guess in Before the lab {#}. Using your eccentricities, explain why Earth’s orbit drawn to scale looks like a circle. Kepler found the first law by studying the orbit of Mars: explain why Mars showed that orbits are ellipses more clearly than Earth’s orbit did.":
  "A partir de tu lectura de la Tierra, ¿cuánto más lejos del Sol está el afelio que el perihelio, como porcentaje de la distancia del perihelio? Compáralo con tu suposición de Antes del laboratorio {#}. Usando tus excentricidades, explica por qué la órbita de la Tierra dibujada a escala parece un círculo. Kepler encontró la primera ley estudiando la órbita de Marte: explica por qué Marte mostró que las órbitas son elipses con más claridad que la órbita de la Tierra.",
"A spacecraft going to Mars can coast on an orbit around the Sun whose perihelion is at Earth’s orbit ({#} AU) and whose aphelion is at Mars’s orbit ({#} AU). Find the semi major axis and period of that orbit. How many days does the trip from Earth to Mars, half of one orbit, take?":
  "Una nave que va a Marte puede avanzar sin propulsión en una órbita alrededor del Sol cuyo perihelio está en la órbita de la Tierra ({#} UA) y cuyo afelio está en la órbita de Marte ({#} UA). Encuentra el semieje mayor y el periodo de esa órbita. ¿Cuántos días tarda el viaje de la Tierra a Marte, la mitad de una órbita?",
"Jupiter’s moons follow Kepler’s laws around Jupiter. Would \\(T^2 = a^3\\), with \\(T\\) in years and \\(a\\) in AU, give the right periods for them? Explain why or why not.":
  "Las lunas de Júpiter siguen las leyes de Kepler alrededor de Júpiter. ¿Daría \\(T^2 = a^3\\), con \\(T\\) en años y \\(a\\) en UA, los periodos correctos para ellas? Explica por qué sí o por qué no.",
"For courses that treat measurement uncertainty. This section is not counted in the {#} minutes; do it when your instructor assigns it.":
  "Para cursos que tratan la incertidumbre de medición. Esta sección no cuenta dentro de los {#} minutos; hazla cuando tu profesor la asigne.",
"Each ruler point is only as good as your placement, and the timer depends on when you paused. Give the slope and intercept of your Analysis {#} graph with their standard errors, and say whether each agrees with the third law within its uncertainty. Which of your measurements do you think is least certain: a distance at the near end of a small orbit, a distance at the far end of a big one, or a period? How would zooming in, or timing several orbits and dividing, change it?":
  "Cada punto de la regla es tan bueno como tu colocación, y el cronómetro depende de cuándo pausaste. Da la pendiente y la ordenada al origen de tu gráfica del Análisis {#} con sus errores estándar, y di si cada una coincide con la tercera ley dentro de su incertidumbre. ¿Cuál de tus mediciones crees que es la menos segura: una distancia en el extremo cercano de una órbita pequeña, una distancia en el extremo lejano de una grande, o un periodo? ¿Cómo la cambiaría acercar la vista, o medir el tiempo de varias órbitas y dividir?",
"Prelab answers, the completed Data table and graph, the answers to the analysis section and to the questions (and to Uncertainty, if assigned). Identify simulated data.":
  "Respuestas del prelaboratorio, la tabla de datos completa y la gráfica, las respuestas de la sección de análisis y las respuestas a las preguntas (y de Incertidumbre, si se asigna). Identifica los datos simulados.",
"<span>Feedback</span>":
  "<span>Comentarios</span>",
"Is something on this worksheet or its demo confusing, or not working? <a>Tell us in a short form</a>.":
  "¿Algo de esta hoja de trabajo o de su demo es confuso o no funciona? <a>Cuéntanos en un formulario corto</a>.",
"Period of the orbit":
  "Periodo de la órbita",
"Semi major axis, the average of the perihelion and aphelion distances":
  "Semieje mayor, el promedio de las distancias en el perihelio y en el afelio",
"Eccentricity of the orbit, {#} for a circle":
  "Excentricidad de la órbita, {#} para un círculo",
"Aphelion distance, farthest from the Sun":
  "Distancia en el afelio, la más lejana del Sol",
"Perihelion distance, closest to the Sun":
  "Distancia en el perihelio, la más cercana al Sol",
"Kepler Orbits":
  "Órbitas de Kepler",
"<strong>Set up.</strong> Tick Blind: hide predictions and answers (in the Lab section), so the demo’s own answers are hidden, and tick Ruler (in the Measure section).":
  "<strong>Preparación.</strong> Marca A ciegas: ocultar predicciones y respuestas (en la sección Laboratorio), para que las respuestas de la propia demo queden ocultas, y marca Regla (en la sección Medir).",
"Place ruler point {#} on the perihelion, the point of the orbit closest to the Sun, and point {#} on the aphelion, the farthest point. Each of these setups starts the object at its perihelion. With Ruler ticked, a click places the next point and dragging a point moves it; the readouts Point {#} to the star and Point {#} to the star give the two distances. To zoom in on one end: untick Ruler, drag empty space (away from the object and its arrow) to bring that end to the middle of the view, scroll or press + to zoom, then tick Ruler again and place or drag the point exactly onto the path. Fit shows the whole orbit again.":
  "Coloca el punto {#} de la regla en el perihelio, el punto de la órbita más cercano al Sol, y el punto {#} en el afelio, el punto más lejano. Cada una de estas configuraciones empieza con el objeto en su perihelio. Con Regla marcada, un clic coloca el siguiente punto y arrastrar un punto lo mueve; las lecturas Punto {#} a la estrella y Punto {#} a la estrella dan las dos distancias. Para acercar la vista a un extremo: desmarca Regla, arrastra el espacio vacío (lejos del objeto y de su flecha) para llevar ese extremo al centro de la vista, usa la rueda o presiona + para acercar, luego marca Regla otra vez y coloca o arrastra el punto exactamente sobre la trayectoria. Ajuste vuelve a mostrar toda la órbita.",
"Press Record reading.":
  "Presiona Registrar lectura.",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"Kepler found the first law by studying the orbit of Mars. Using your eccentricities, explain why Mars showed that orbits are ellipses more clearly than Earth’s orbit did.":
  "Kepler encontró la primera ley estudiando la órbita de Marte. Usando tus excentricidades, explica por qué Marte mostró que las órbitas son elipses con más claridad que la órbita de la Tierra.",
"Kepler’s Laws from Mercury to Pluto | VirtualDemos":
  "Las leyes de Kepler de Mercurio a Plutón | VirtualDemos",
"Kepler’s Laws from Mercury to Pluto":
  "Las leyes de Kepler de Mercurio a Plutón",
"Measure the orbits of planets, asteroids, a comet and a dwarf planet, and test Kepler’s three laws of planetary motion with them.":
  "Mide las órbitas de planetas, asteroides, un cometa y un planeta enano, y pon a prueba con ellas las tres leyes del movimiento planetario de Kepler.",
"<strong>Measure each orbit.</strong> Do the following for Mercury, Earth, Mars, Vesta, Ceres, Apophis, Halley’s comet and Pluto, in that order.":
  "<strong>Mide cada órbita.</strong> Haz lo siguiente para Mercurio, la Tierra, Marte, Vesta, Ceres, Apofis, el cometa Halley y Plutón, en ese orden.",
"Place ruler point {#} on the perihelion, the point of the orbit closest to the Sun, and point {#} on the aphelion, the farthest point. Each setup except Halley’s comet starts the object at its perihelion; the comet starts at its aphelion. With Ruler ticked, a click places the next point and dragging a point moves it; the readouts Point {#} to the star and Point {#} to the star give the two distances. To zoom in on one end: untick Ruler, drag empty space (away from the object and its arrow) to bring that end to the middle of the view, scroll or press + to zoom, then tick Ruler again and place or drag the point exactly onto the path. Fit shows the whole orbit again.":
  "Coloca el punto {#} de la regla en el perihelio, el punto de la órbita más cercano al Sol, y el punto {#} en el afelio, el punto más lejano. Cada configuración, excepto el cometa Halley, empieza con el objeto en su perihelio; el cometa empieza en su afelio. Con Regla marcada, un clic coloca el siguiente punto y arrastrar un punto lo mueve; las lecturas Punto {#} a la estrella y Punto {#} a la estrella dan las dos distancias. Para acercar la vista a un extremo: desmarca Regla, arrastra el espacio vacío (lejos del objeto y de su flecha) para llevar ese extremo al centro de la vista, usa la rueda o presiona + para acercar, luego marca Regla otra vez y coloca o arrastra el punto exactamente sobre la trayectoria. Ajuste vuelve a mostrar toda la órbita.",
"Press Export to worksheet to send all eight readings. They fill the perihelion, aphelion and period columns; you fill the other columns in the Analysis.":
  "Presiona Exportar a la hoja para enviar las ocho lecturas. Llenan las columnas de perihelio, afelio y periodo; tú llenas las demás columnas en el Análisis.",
"Which object has the most eccentric orbit, and which the most nearly circular? Rank the eight objects from smallest \\(e\\) to largest.":
  "¿Qué objeto tiene la órbita más excéntrica y cuál la más cercana a un círculo? Ordena los ocho objetos de la \\(e\\) más pequeña a la más grande.",
"Fill in the \\(a^3\\) and \\(T^2\\) columns and graph \\(T^2\\) (vertical axis) against \\(a^3\\) (horizontal axis). Pluto’s point is so far out that the other seven crowd together near zero, so also look at the graph with Log scales on, which spreads all eight out. The third law says the points fall on a straight line through the origin with a slope of {#}. What slope and intercept does your graph give?":
  "Llena las columnas \\(a^3\\) y \\(T^2\\) y grafica \\(T^2\\) (eje vertical) contra \\(a^3\\) (eje horizontal). El punto de Plutón está tan lejos que los otros siete se amontonan cerca de cero, así que observa también la gráfica con Escalas logarítmicas activadas, que separa los ocho. La tercera ley dice que los puntos caen sobre una línea recta que pasa por el origen con una pendiente de {#}. ¿Qué pendiente y qué ordenada al origen da tu gráfica?",
"Compare the perihelion and aphelion distances of Apophis with Earth’s distance from the Sun. Does the orbit of Apophis cross Earth’s orbit?":
  "Compara las distancias en el perihelio y en el afelio de Apofis con la distancia de la Tierra al Sol. ¿La órbita de Apofis cruza la órbita de la Tierra?",
"Apophis will pass very close to Earth on April {#}, {#}. Look up how close it will come, and compare that distance with the height of the satellites that stay above one spot on the equator, about {#} km above the ground.":
  "Apofis pasará muy cerca de la Tierra el {#} de abril de {#}. Investiga qué tan cerca llegará, y compara esa distancia con la altura de los satélites que permanecen sobre un mismo punto del ecuador, unos {#} km sobre el suelo.",
"<strong>Set up.</strong> Turn on Blind, so the demo’s own answers are hidden, and turn on the ruler.":
  "<strong>Preparación.</strong> Activa A ciegas, para que las respuestas propias de la demo queden ocultas, y activa la regla.",
"Choose the setup, pause the demo and reset it.":
  "Elige la configuración, pausa la demo y reiníciala.",
"Place ruler point {#} on the perihelion, the point of the orbit closest to the Sun, and point {#} on the aphelion, the farthest point. Each setup except Halley’s comet starts the object at its perihelion; the comet starts at its aphelion. Zoom in on each end of the orbit to place the points exactly on the path.":
  "Coloca el punto {#} de la regla en el perihelio, el punto de la órbita más cercano al Sol, y el punto {#} en el afelio, el punto más lejano. Cada configuración, salvo el cometa Halley, inicia el objeto en su perihelio; el cometa empieza en su afelio. Acerca la vista en cada extremo de la órbita para colocar los puntos exactamente sobre el camino.",
"Time one full orbit: zero the timer, start it, play the demo, and pause when the object is back where it started. Then stop the timer.":
  "Mide el tiempo de una órbita completa: pon el cronómetro en cero, inícialo, pon la demo en marcha y pausa cuando el objeto vuelva a donde empezó. Luego detén el cronómetro.",
"Record a reading.":
  "Registra una lectura.",
"Send all eight readings to the worksheet.":
  "Envía las ocho lecturas a la hoja de trabajo.",
"Fill in the \\(a^3\\) and \\(T^2\\) columns and graph \\(T^2\\) against \\(a^3\\). Pluto’s point is so far out that the other seven crowd together near zero, so also look at the graph with Log scales on, which spreads all eight out. The third law says the points fall on a straight line through the origin with a slope of {#}. What slope and intercept does your graph give?":
  "Llena las columnas \\(a^3\\) y \\(T^2\\) y grafica \\(T^2\\) contra \\(a^3\\). El punto de Plutón queda tan lejos que los otros siete se amontonan cerca de cero, así que mira también la gráfica con Escalas logarítmicas activadas, que separa los ocho. La tercera ley dice que los puntos caen sobre una línea recta que pasa por el origen con una pendiente de {#}. ¿Qué pendiente y qué ordenada al origen da tu gráfica?",
"Turn Blind off and read the demo’s values of \\(a\\), \\(e\\) and the period for Mars and for Pluto. By what percentage does each of your values differ from the demo’s?":
  "Desactiva A ciegas y lee los valores de la demo de \\(a\\), \\(e\\) y el periodo para Marte y para Plutón. ¿En qué porcentaje difiere cada uno de tus valores de los de la demo?"
});
