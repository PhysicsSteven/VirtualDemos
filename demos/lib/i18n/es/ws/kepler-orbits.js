/* ws/kepler-orbits in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/kepler-orbits', {
"Orbit":
  "Órbita",
"M (solar masses)":
  "M (masas solares)",
"Major axis ruler distance (AU)":
  "Distancia del eje mayor con la regla (UA)",
"T (yr)":
  "T (años)",
"T^{#} (yr²)":
  "T^{#} (años²)",
"Kepler’s Third Law | VirtualDemos":
  "Tercera ley de Kepler | VirtualDemos",
"Kepler’s Third Law":
  "Tercera ley de Kepler",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} and {#}–{#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} y {#}–{#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Earth; Mars; Mercury; Halley’s comet; Vesta; Ceres; Apophis; Pluto; Circular orbit; Escape; Sandbox.":
  "<strong>Configuraciones en la demo:</strong> Tierra; Marte; Mercurio; Cometa Halley; Vesta; Ceres; Apophis; Plutón; Órbita circular; Escape; Caja de arena.",
"Drag the arrow tip to set speed and direction. Drag the hollow marker to move the launch point. The tip snaps to the gold circular and red escape circles; hold":
  "Arrastra la punta de la flecha para fijar la rapidez y la dirección. Arrastra el marcador hueco para mover el punto de lanzamiento. La punta se ajusta a los círculos dorado (circular) y rojo (escape); mantén pulsada",
"to place it freely.":
  "para colocarla libremente.",
"Focus the orbit view, then use the arrow keys (":
  "Enfoca la vista de la órbita y luego usa las flechas (",
"for small steps).":
  "para pasos pequeños).",
"switches what they move,":
  "cambia lo que mueven,",
"zoom,":
  "acercan o alejan,",
"pick a ruler point,":
  "elige un punto de la regla,",
"fits the view,":
  "ajusta la vista,",
"plays or pauses.":
  "inicia o pausa.",
"The timer runs on simulated time, so it stops when the planet is paused. Reset puts the planet back at the launch point at \\(t = 0\\). With Ruler on, click or drag in the view to place points {#} and {#} (the launch arrow is locked meanwhile). Zoom in for precise placement.":
  "El temporizador corre con el tiempo simulado, así que se detiene cuando el planeta está en pausa. Reiniciar regresa el planeta al punto de lanzamiento en \\(t = 0\\). Con Regla activada, haz clic o arrastra en la vista para colocar los puntos {#} y {#} (mientras tanto la flecha de lanzamiento queda bloqueada). Acerca la vista para colocarlos con precisión.",
"Capture stores the timer and the ruler as displayed, with the star mass and the launch. The a column starts as half the ruler distance, which is the semi major axis when the points sit on perihelion and aphelion; edit it if you measured another way. The fit is a least squares line \\(T^2 = \\text{slope}\\times a^3 + \\text{intercept}\\), using the rows with the present star mass; the intercept should come out near zero.":
  "Capturar guarda el temporizador y la regla tal como se muestran, con la masa de la estrella y el lanzamiento. La columna a empieza como la mitad de la distancia de la regla, que es el semieje mayor cuando los puntos están en el perihelio y el afelio; edítala si mediste de otra manera. El ajuste es una recta de mínimos cuadrados \\(T^2 = \\text{slope}\\times a^3 + \\text{intercept}\\), usando las filas con la masa actual de la estrella; la ordenada al origen debería salir cercana a cero.",
"Each wedge is swept in the same time \\(\\Delta t\\). Areas (AU²) are summed from the integrated path, not from a formula; compare them with \\(\\tfrac{1}{2}h\\,\\Delta t\\), where \\(h = \\lvert\\mathbf{r}\\times\\mathbf{v}\\rvert\\).":
  "Cada cuña se barre en el mismo tiempo \\(\\Delta t\\). Las áreas (UA²) se suman a partir de la trayectoria integrada, no de una fórmula; compáralas con \\(\\tfrac{1}{2}h\\,\\Delta t\\), donde \\(h = \\lvert\\mathbf{r}\\times\\mathbf{v}\\rvert\\).",
"The star is held fixed and the planet’s mass is neglected, so \\(P^2 = a^3/M\\) exactly (\\(a\\) in AU, \\(P\\) in years, \\(M\\) in solar masses). Two planets do not pull on each other. The motion is integrated with velocity Verlet using a time symmetric step that shrinks near the star. A planet that comes within {#} AU (one solar radius) hits the star.":
  "La estrella se mantiene fija y se desprecia la masa del planeta, así que \\(P^2 = a^3/M\\) exactamente (\\(a\\) en UA, \\(P\\) en años, \\(M\\) en masas solares). Dos planetas no se atraen entre sí. El movimiento se integra con Verlet de velocidades usando un paso simétrico en el tiempo que se reduce cerca de la estrella. Un planeta que se acerca a menos de {#} UA (un radio solar) choca con la estrella.",
"The Sandbox is for exploring on your own: drag stars, planets and moons from the tray into space. Unlike the other setups, nothing is held fixed: every body pulls on every other. Each starts on a circular orbit around the body that pulls on it hardest; drag the tip of its arrow to change its velocity, and watch the energy of the whole system as it runs. The Sandbox records no readings.":
  "La Caja de arena es para explorar por tu cuenta: arrastra estrellas, planetas y lunas desde la bandeja hasta el espacio. A diferencia de las otras configuraciones, nada se mantiene fijo: cada cuerpo atrae a todos los demás. Cada uno empieza en una órbita circular alrededor del cuerpo que lo atrae con más fuerza; arrastra la punta de su flecha para cambiar su velocidad, y observa la energía de todo el sistema mientras corre. La Caja de arena no registra lecturas.",
"Measure orbital size and period, infer the central mass and test how orbital speed changes around an ellipse.":
  "Mide el tamaño y el periodo orbitales, deduce la masa central y pon a prueba cómo cambia la rapidez orbital a lo largo de una elipse.",
"For a light body orbiting central mass \\(M\\) (§{#}),":
  "Para un cuerpo ligero que orbita una masa central \\(M\\) (§{#}),",
"\\[T^2=\\frac{4\\pi^2}{GM}a^3.\\]":
  "\\[T^2=\\frac{4\\pi^2}{GM}a^3.\\]",
"Here \\(a\\) is the semi major axis, not the instantaneous distance from the star. For a bound orbit (§§{#}–{#}),":
  "Aquí \\(a\\) es el semieje mayor, no la distancia instantánea a la estrella. Para una órbita ligada (§§{#}–{#}),",
"\\[\\frac{E}{m}=-\\frac{GM}{2a},\\qquad v^2=GM\\left(\\frac{2}{r}-\\frac1a\\right).\\]":
  "\\[\\frac{E}{m}=-\\frac{GM}{2a},\\qquad v^2=GM\\left(\\frac{2}{r}-\\frac1a\\right).\\]",
"Angular momentum conservation gives equal swept areas in equal times and faster motion near periapsis.":
  "La conservación del momento angular da áreas barridas iguales en tiempos iguales y un movimiento más rápido cerca del periastro.",
"How should the period change if \\(a\\) doubles at fixed \\(M\\)?":
  "¿Cómo debería cambiar el periodo si \\(a\\) se duplica con \\(M\\) fija?",
"Why is the star generally at a focus rather than the center of an ellipse?":
  "¿Por qué la estrella está en general en un foco y no en el centro de una elipse?",
"What is the expected slope of \\(T^2\\) against \\(a^3\\), and how does it determine \\(M\\)?":
  "¿Cuál es la pendiente esperada de \\(T^2\\) en función de \\(a^3\\), y cómo determina \\(M\\)?",
"For an analogous real rotating apparatus, follow the instructor’s speed limits and keep clear of moving masses. No physical apparatus is required for the orbital simulation.":
  "Para un aparato giratorio real análogo, sigue los límites de rapidez que indique el instructor y mantente lejos de las masas en movimiento. La simulación orbital no requiere ningún aparato físico.",
"<strong>Third law scan.</strong> Make five distinct bound orbits around the same central mass. For each, measure the full major axis length and time one complete revolution between passages of the same reference point in the same direction. Divide the measured major axis by two to obtain \\(a\\).":
  "<strong>Barrido de la tercera ley.</strong> Forma cinco órbitas ligadas distintas alrededor de la misma masa central. Para cada una, mide la longitud completa del eje mayor y mide el tiempo de una revolución completa entre dos pasos por el mismo punto de referencia en el mismo sentido. Divide entre dos el eje mayor medido para obtener \\(a\\).",
"<strong>Eccentric orbit.</strong> Choose one clear ellipse. Compare distances and speeds at periapsis and apoapsis, and compare areas swept in equal time intervals.":
  "<strong>Órbita excéntrica.</strong> Elige una elipse clara. Compara las distancias y las rapideces en el periastro y en el apoastro, y compara las áreas barridas en intervalos de tiempo iguales.",
"<strong>Central mass.</strong> Repeat a shorter size period scan at a different \\(M\\). Compare the fitted slopes and inferred mass ratio.":
  "<strong>Masa central.</strong> Repite un barrido más corto de tamaño y periodo con una \\(M\\) distinta. Compara las pendientes ajustadas y la razón de masas deducida.",
"<strong>Using the virtual apparatus.</strong> Work with predictions and answers hidden. Start from the Earth, Mars, Mercury and circular orbit setups, then change the launch to make further bound orbits that differ clearly from these. Put the planet back at its launch point before each timing. Measure the major axis with the ruler, its two points at opposite ends of the orbit, and time one complete revolution. The \\(a\\) recorded with each reading is half your ruler distance, not the demo’s orbital element. Send the first scan to the worksheet, then clear the demo’s readings before you change the star mass, so each scan gets its own copy of the Data table. Change the star mass only between scans, and note whether <strong>Keep the orbit’s shape when M changes</strong> was on: with it on, the orbit keeps its size and only the period changes. The foci and axis and the swept wedges are drawn when the demo opens: turn them off until your own measurements are done.":
  "<strong>Uso del aparato virtual.</strong> Trabaja con las predicciones y las respuestas ocultas. Empieza con las configuraciones Tierra, Marte, Mercurio y Órbita circular, y luego cambia el lanzamiento para formar más órbitas ligadas que sean claramente distintas de estas. Regresa el planeta a su punto de lanzamiento antes de cada medición del tiempo. Mide el eje mayor con la regla, con sus dos puntos en extremos opuestos de la órbita, y mide el tiempo de una revolución completa. La \\(a\\) registrada con cada lectura es la mitad de tu distancia con la regla, no el elemento orbital de la demo. Envía el primer barrido a la hoja de trabajo y luego borra las lecturas de la demo antes de cambiar la masa de la estrella, para que cada barrido tenga su propia copia de la tabla de datos. Cambia la masa de la estrella solo entre barridos, y anota si <strong>Mantener la forma de la órbita cuando cambia M</strong> estaba activado: activado, la órbita conserva su tamaño y solo cambia el periodo. Los focos y el eje y las cuñas barridas se dibujan cuando se abre la demo: desactívalos hasta terminar tus propias mediciones.",
"<span>A</span>Orbit":
  "<span>A</span>Órbita",
"<span>B</span>\\(M\\) (solar masses)":
  "<span>B</span>\\(M\\) (masas solares)",
"<span>C</span>Major axis ruler distance (AU)":
  "<span>C</span>Distancia del eje mayor con la regla (UA)",
"<span>E</span>\\(T\\) (yr)":
  "<span>E</span>\\(T\\) (años)",
"<span>G</span>\\(T^2\\) (yr²)":
  "<span>G</span>\\(T^2\\) (años²)",
"Orbit, row {#}":
  "Órbita, fila {#}",
"M (solar masses), row {#}":
  "M (masas solares), fila {#}",
"Major axis ruler distance (AU), row {#}":
  "Distancia del eje mayor con la regla (UA), fila {#}",
"a (AU), row {#}":
  "a (UA), fila {#}",
"T (yr), row {#}":
  "T (años), fila {#}",
"a^{#} (AU³), row {#}":
  "a^{#} (UA³), fila {#}",
"T^{#} (yr²), row {#}":
  "T^{#} (años²), fila {#}",
"T² (yr²)":
  "T² (años²)",
"Add all orbits and keep the two central mass scans separate. Record your reference crossing and timing method.":
  "Agrega todas las órbitas y mantén separados los dos barridos de masa central. Anota tu cruce de referencia y tu método de medición del tiempo.",
"Fit \\(T^2\\) against \\(a^3\\). In the simulation’s AU, year and solar mass units, infer \\(M = 1/\\text{slope}\\).":
  "Ajusta \\(T^2\\) en función de \\(a^3\\). En las unidades de UA, año y masa solar de la simulación, deduce \\(M = 1/\\text{slope}\\).",
"Inspect intercept and residuals for timing or ruler placement bias. Compare results using near circular and eccentric orbits.":
  "Revisa la ordenada al origen y los residuos en busca de sesgos de medición del tiempo o de colocación de la regla. Compara los resultados usando órbitas casi circulares y excéntricas.",
"For the eccentric orbit, test \\(r_p v_p = r_a v_a\\) and compare with the energy relation.":
  "Para la órbita excéntrica, pon a prueba \\(r_p v_p = r_a v_a\\) y compárala con la relación de energía.",
"Compare fitted slopes at the two central masses. Explain why escape trajectories do not belong on this period plot.":
  "Compara las pendientes ajustadas con las dos masas centrales. Explica por qué las trayectorias de escape no pertenecen a esta gráfica de periodos.",
"Use ruler placement and time crossing resolution. The fractional errors in \\(a^3\\) and \\(T^2\\) are approximately \\(3\\,\\delta a/a\\) and \\(2\\,\\delta T/T\\). Eccentric orbits make major axis placement and timing near periapsis harder. Do not use the star to planet separation as a substitute for \\(a\\), and do not count several revolutions as one.":
  "Usa la resolución de la colocación de la regla y del cruce para medir el tiempo. Los errores fraccionarios en \\(a^3\\) y \\(T^2\\) son aproximadamente \\(3\\,\\delta a/a\\) y \\(2\\,\\delta T/T\\). Las órbitas excéntricas hacen más difícil colocar el eje mayor y medir el tiempo cerca del periastro. No uses la separación entre la estrella y el planeta como sustituto de \\(a\\), y no cuentes varias revoluciones como una.",
"Why can an ellipse have the same period as a circle with the same \\(a\\)?":
  "¿Por qué una elipse puede tener el mismo periodo que un círculo con la misma \\(a\\)?",
"Why does the body speed up near the star without gaining total mechanical energy?":
  "¿Por qué el cuerpo se acelera cerca de la estrella sin ganar energía mecánica total?",
"Why does increasing \\(M\\) shorten the period at fixed \\(a\\)?":
  "¿Por qué aumentar \\(M\\) acorta el periodo con \\(a\\) fija?",
"Which part of your measurement is most sensitive to eccentricity?":
  "¿Qué parte de tu medición es la más sensible a la excentricidad?",
"Prelab answers, settings and CSV, both third law fits, inferred masses with uncertainty, the eccentric orbit comparison and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ajustes y CSV, ambos ajustes de la tercera ley, las masas deducidas con su incertidumbre, la comparación de la órbita excéntrica y las respuestas a las preguntas. Identifica los datos simulados.",
"Orbital energy":
  "Energía orbital",
"Mass of the star":
  "Masa de la estrella",
"Period of the orbit":
  "Periodo de la órbita",
"Semimajor axis":
  "Semieje mayor",
"Angular momentum per unit mass, the size of r × v":
  "Momento angular por unidad de masa, la magnitud de r × v",
"Mass of the planet":
  "Masa del planeta",
"Distance from the star":
  "Distancia a la estrella",
"Distance at aphelion":
  "Distancia en el afelio",
"Distance at perihelion":
  "Distancia en el perihelio",
"Speed of the planet":
  "Rapidez del planeta",
"Speed at aphelion":
  "Rapidez en el afelio",
"Speed at perihelion":
  "Rapidez en el perihelio",
"Kepler Orbits":
  "Leyes de Kepler"
});
