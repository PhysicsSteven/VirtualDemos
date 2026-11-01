/* ws/gps-clocks in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/gps-clocks', {
"Second clock":
  "Segundo reloj",
"Speed v (km/s)":
  "Rapidez v (km/s)",
"Gravity part (μs/day)":
  "Parte gravitacional (μs/día)",
"Speed part (μs/day)":
  "Parte de rapidez (μs/día)",
"Net gain (μs/day)":
  "Ganancia neta (μs/día)",
"{#}/r ({#}/Mm)":
  "{#}/r ({#}/Mm)",
"GPS Clocks and Relativity | VirtualDemos":
  "Relojes GPS y relatividad | VirtualDemos",
"GPS Clocks and Relativity":
  "Relojes GPS y relatividad",
"Student laboratory · Physics I and Modern Physics":
  "Laboratorio del estudiante · Física I y Física moderna",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#}, and Vol. {#}, §{#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#} and https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#}, y Vol. {#}, §{#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#} y https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Places in the demo:</strong> Lab tower, {#} m; Space station, about {#} km; GPS, r = {#} km; Geostationary, r = {#} km. The second clock can also be put in a circular orbit, or at rest on a tower, at any distance r from Earth’s center up to {#} km.":
  "<strong>Lugares en la demo:</strong> Torre del laboratorio, {#} m; Estación espacial, unos {#} km; GPS, r = {#} km; Geoestacionaria, r = {#} km. El segundo reloj también se puede poner en una órbita circular, o en reposo sobre una torre, a cualquier distancia r del centro de la Tierra hasta {#} km.",
"One clock stands on the ground at the equator; the second clock is in orbit or on a tower. The ground clock can turn with Earth or stand still.":
  "Un reloj está en el suelo en el ecuador; el segundo reloj está en órbita o sobre una torre. El reloj del suelo puede girar con la Tierra o estar quieto.",
"The readouts give each clock’s speed, how much the second clock gains on the ground clock per day from gravity and from speed, the net gain per day, the fractional rate difference, and how far light travels in one day’s gain. Gains below {#} μs are shown in picoseconds ({#} ps = {#}⁻⁶ μs).":
  "Las lecturas dan la rapidez de cada reloj, cuánto le gana el segundo reloj al reloj del suelo por día por la gravedad y por la rapidez, la ganancia neta por día, la diferencia fraccional de ritmo, y qué distancia recorre la luz en la ganancia de un día. Las ganancias menores que {#} μs se muestran en picosegundos ({#} ps = {#}⁻⁶ μs).",
"Run the clocks runs simulated time at one hour per second and shows how far the second clock has drifted ahead.":
  "Correr los relojes avanza el tiempo simulado a una hora por segundo y muestra cuánto se ha adelantado el segundo reloj.",
"Record reading stores the second clock’s place, r, its speed and the three gains per day in μs/day to six significant figures. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda el lugar del segundo reloj, r, su rapidez y las tres ganancias por día en μs/día con seis cifras significativas. Exportar a la hoja envía las lecturas a la tabla de Datos de abajo; Borrar empieza una nueva serie, que va a una nueva copia de la tabla.",
"Blind hides the rates and the gains per day. Nothing can be recorded while Blind is on.":
  "A ciegas oculta los ritmos y las ganancias por día. No se puede registrar nada mientras A ciegas está activado.",
"Earth is a nonrotating spherical mass with GM = {#} × {#}¹⁴ m³/s². Each clock ticks, compared with a clock far away and at rest, at the rate \\(\\sqrt{1 - 2GM/(rc^2) - v^2/c^2}\\), where v is its speed in a frame that does not turn with Earth (the Schwarzschild field of general relativity, exact for a clock that moves along a circle about Earth’s center).":
  "La Tierra es una masa esférica que no gira con GM = {#} × {#}¹⁴ m³/s². Cada reloj marcha, comparado con un reloj lejano y en reposo, al ritmo \\(\\sqrt{1 - 2GM/(rc^2) - v^2/c^2}\\), donde v es su rapidez en un marco que no gira con la Tierra (el campo de Schwarzschild de la relatividad general, exacto para un reloj que se mueve en un círculo alrededor del centro de la Tierra).",
"The ground clock sits on a sphere of radius {#} km, at rest or carried round at the equator once per sidereal day ({#} m/s). Earth’s flattening, the shape of the sea level surface, eccentric orbits, and the Sun and Moon are left out. One day is {#} s.":
  "El reloj del suelo está sobre una esfera de radio {#} km, en reposo o llevado alrededor del ecuador una vez por día sideral ({#} m/s). Se omiten el achatamiento de la Tierra, la forma de la superficie del nivel del mar, las órbitas excéntricas, y el Sol y la Luna. Un día son {#} s.",
"Measure how much a clock in orbit gains or loses each day against a clock on the ground, separate the effect of gravity from the effect of speed, and find the orbit where they cancel.":
  "Mide cuánto gana o pierde cada día un reloj en órbita frente a un reloj en el suelo, separa el efecto de la gravedad del efecto de la rapidez, y encuentra la órbita donde se cancelan.",
"General relativity says a clock deeper in a gravitational field runs slower (§{#}): a clock higher up gains on one lower down. Special relativity says a moving clock runs slower (Vol. {#}, §{#}). Both effects are tiny around Earth, so to an accuracy far better than the demo shows, the fraction by which a clock at distance r and speed v runs fast compared with a ground clock at distance R and speed \\(v_g\\) is":
  "La relatividad general dice que un reloj más profundo en un campo gravitacional marcha más lento (§{#}): un reloj más arriba le gana a uno más abajo. La relatividad especial dice que un reloj en movimiento marcha más lento (Vol. {#}, §{#}). Ambos efectos son diminutos alrededor de la Tierra, así que con una exactitud mucho mejor que la que muestra la demo, la fracción en que un reloj a distancia r y rapidez v se adelanta respecto a un reloj del suelo a distancia R y rapidez \\(v_g\\) es",
"\\[\\frac{\\Delta f}{f} \\approx \\frac{GM}{c^2}\\left(\\frac{1}{R} - \\frac{1}{r}\\right) - \\frac{v^2 - v_g^2}{2c^2}.\\]":
  "\\[\\frac{\\Delta f}{f} \\approx \\frac{GM}{c^2}\\left(\\frac{1}{R} - \\frac{1}{r}\\right) - \\frac{v^2 - v_g^2}{2c^2}.\\]",
"The first term is the gravity part and the second the speed part. Multiplying by one day gives the gain per day. In a circular orbit \\(v^2 = GM/r\\), so both parts are straight lines against \\(1/r\\):":
  "El primer término es la parte gravitacional y el segundo la parte de rapidez. Multiplicar por un día da la ganancia por día. En una órbita circular \\(v^2 = GM/r\\), así que ambas partes son rectas en función de \\(1/r\\):",
"\\[\\Delta t_\\text{gravity} = \\frac{GM}{c^2}\\left(\\frac{1}{R} - \\frac{1}{r}\\right)t_\\text{day}, \\qquad \\Delta t_\\text{speed} = -\\frac{1}{2c^2}\\left(\\frac{GM}{r} - v_g^2\\right)t_\\text{day}.\\]":
  "\\[\\Delta t_\\text{gravity} = \\frac{GM}{c^2}\\left(\\frac{1}{R} - \\frac{1}{r}\\right)t_\\text{day}, \\qquad \\Delta t_\\text{speed} = -\\frac{1}{2c^2}\\left(\\frac{GM}{r} - v_g^2\\right)t_\\text{day}.\\]",
"A GPS receiver finds its distance from each satellite from the light travel time, so a clock error of \\(\\Delta t\\) is a distance error of \\(c\\,\\Delta t\\).":
  "Un receptor GPS encuentra su distancia a cada satélite a partir del tiempo de viaje de la luz, así que un error de reloj de \\(\\Delta t\\) es un error de distancia de \\(c\\,\\Delta t\\).",
"A clock sits on top of a tall tower. Which runs faster, it or a clock at the foot of the tower? Which effect decides?":
  "Un reloj está en lo alto de una torre alta. ¿Cuál marcha más rápido, ese o un reloj al pie de la torre? ¿Qué efecto lo decide?",
"Low orbits are fast and high orbits are slow. Predict whether the space station’s clock gains or loses on the ground, and whether a GPS clock does.":
  "Las órbitas bajas son rápidas y las altas son lentas. Predice si el reloj de la estación espacial gana o pierde respecto al suelo, y si un reloj GPS gana o pierde.",
"From the Background, how should the slope of the speed part against \\(1/r\\) compare with the slope of the gravity part?":
  "A partir de los Antecedentes, ¿cómo debería compararse la pendiente de la parte de rapidez contra \\(1/r\\) con la pendiente de la parte gravitacional?",
"A clock error of {#} μs gives what distance error in a GPS position?":
  "Un error de reloj de {#} μs, ¿qué error de distancia da en una posición GPS?",
"No physical apparatus is used.":
  "No se usa aparato físico.",
"<strong>Orbit scan.</strong> With the ground clock turning with Earth, put the second clock in a circular orbit and record a reading at the space station, GPS and geostationary radii and at about six more radii spread from {#} km to {#} km. Send the readings to the worksheet.":
  "<strong>Barrido de órbitas.</strong> Con el reloj del suelo girando con la Tierra, pon el segundo reloj en una órbita circular y registra una lectura en los radios de la estación espacial, GPS y geoestacionario, y en unos seis radios más repartidos de {#} km a {#} km. Envía las lecturas a la hoja de trabajo.",
"<strong>Ground clock at rest.</strong> Once the orbit scan is in the worksheet, clear the readings. Stop the ground clock turning and record orbits at about five radii from {#} km to {#} km, including two on either side of the radius where the net gain is zero. Send them to a new copy of the table.":
  "<strong>Reloj del suelo en reposo.</strong> Una vez que el barrido de órbitas esté en la hoja de trabajo, borra las lecturas. Detén el giro del reloj del suelo y registra órbitas en unos cinco radios de {#} km a {#} km, incluyendo dos a cada lado del radio donde la ganancia neta es cero. Envíalas a una nueva copia de la tabla.",
"<strong>Clocks on towers.</strong> Once this scan is in the worksheet, clear the readings. With the ground clock turning again, put the second clock at rest on a tower and record readings at {#} m and at heights of about {#} km, {#} km and {#} km. Send them to a third copy of the table.":
  "<strong>Relojes en torres.</strong> Una vez que este barrido esté en la hoja de trabajo, borra las lecturas. Con el reloj del suelo girando de nuevo, pon el segundo reloj en reposo sobre una torre y registra lecturas a {#} m y a alturas de unos {#} km, {#} km y {#} km. Envíalas a una tercera copia de la tabla.",
"<strong>One day.</strong> Put the second clock in the GPS orbit, set both clocks to zero and run them for about one simulated day (they run one hour each second, so stop them close to {#} h). Write down the time run and how far the second clock is ahead.":
  "<strong>Un día.</strong> Pon el segundo reloj en la órbita GPS, pon ambos relojes en cero y córrelos durante más o menos un día simulado (corren una hora por segundo, así que detenlos cerca de {#} h). Anota el tiempo corrido y cuánto va adelantado el segundo reloj.",
"<span>B</span>Second clock":
  "<span>B</span>Segundo reloj",
"<span>D</span>Speed v (km/s)":
  "<span>D</span>Rapidez v (km/s)",
"<span>E</span>Gravity part (μs/day)":
  "<span>E</span>Parte gravitacional (μs/día)",
"<span>F</span>Speed part (μs/day)":
  "<span>F</span>Parte de rapidez (μs/día)",
"<span>G</span>Net gain (μs/day)":
  "<span>G</span>Ganancia neta (μs/día)",
"<span>H</span>{#}/r ({#}/Mm)":
  "<span>H</span>{#}/r ({#}/Mm)",
"Second clock, row {#}":
  "Segundo reloj, fila {#}",
"r (km), row {#}":
  "r (km), fila {#}",
"Speed v (km/s), row {#}":
  "Rapidez v (km/s), fila {#}",
"Gravity part (μs/day), row {#}":
  "Parte gravitacional (μs/día), fila {#}",
"Speed part (μs/day), row {#}":
  "Parte de rapidez (μs/día), fila {#}",
"Net gain (μs/day), row {#}":
  "Ganancia neta (μs/día), fila {#}",
"{#}/r ({#}/Mm), row {#}":
  "{#}/r ({#}/Mm), fila {#}",
"v² (km²/s²), row {#}":
  "v² (km²/s²), fila {#}",
"{#} Mm = {#} km = {#}⁶ m. Fill in the last two columns yourself. Keep the three scans in separate copies of the table, and write the one day result in the notes.":
  "{#} Mm = {#} km = {#}⁶ m. Llena tú mismo las últimas dos columnas. Conserva los tres barridos en copias separadas de la tabla, y escribe el resultado de un día en las notas.",
"Fit the gravity part against \\(1/r\\) for the orbit scan. From the slope find \\(GM/c^2\\) in meters and compare it with half of Earth’s Schwarzschild radius \\(2GM/c^2\\) shown in the demo. What does the intercept divided by the size of the slope give?":
  "Ajusta la parte gravitacional contra \\(1/r\\) para el barrido de órbitas. A partir de la pendiente encuentra \\(GM/c^2\\) en metros y compáralo con la mitad del radio de Schwarzschild de la Tierra \\(2GM/c^2\\) que muestra la demo. ¿Qué da la ordenada al origen dividida entre la magnitud de la pendiente?",
"Fit the speed part against \\(1/r\\) for the same scan. Compare its slope with the gravity part’s slope, and explain the ratio from \\(v^2 = GM/r\\).":
  "Ajusta la parte de rapidez contra \\(1/r\\) para el mismo barrido. Compara su pendiente con la de la parte gravitacional, y explica la razón a partir de \\(v^2 = GM/r\\).",
"Fit the speed part against \\(v^2\\). From the slope find the speed of light.":
  "Ajusta la parte de rapidez contra \\(v^2\\). A partir de la pendiente encuentra la rapidez de la luz.",
"Use your two fits to find the radius at which the net gain is zero, for the ground clock turning. Then use the ground clock at rest scan to find it again, and compare with \\(r = 3R/2\\). Why does the ground clock’s turning move it?":
  "Usa tus dos ajustes para encontrar el radio en el que la ganancia neta es cero, con el reloj del suelo girando. Luego usa el barrido con el reloj del suelo en reposo para encontrarlo de nuevo, y compara con \\(r = 3R/2\\). ¿Por qué el giro del reloj del suelo lo desplaza?",
"For the GPS orbit, how far would a position drift in one day if the clocks were not corrected? Scale your run to exactly one day and compare it with the net gain per day.":
  "Para la órbita GPS, ¿cuánto derivaría una posición en un día si los relojes no se corrigieran? Escala tu corrida a exactamente un día y compárala con la ganancia neta por día.",
"For the {#} m tower, find the fractional rate difference and compare it with \\(gh/c^2\\), which Pound and Rebka measured in {#} in a {#} m tower at Harvard. For the taller towers, why is the speed part not zero?":
  "Para la torre de {#} m, encuentra la diferencia fraccional de ritmo y compárala con \\(gh/c^2\\), que Pound y Rebka midieron en {#} en una torre de {#} m en Harvard. Para las torres más altas, ¿por qué la parte de rapidez no es cero?",
"The gains are recorded to six significant figures and the radii are exact settings, so the scatter about your fits is only rounding; use the standard error of each slope. The straight lines in the Background drop terms of order \\((GM/Rc^2)^2\\), about {#} × {#}⁻¹⁹, far below what the readouts show. The real GPS system has to allow for what the model leaves out: say which of Earth’s flattening, the satellites’ slightly eccentric orbits, or the Sun and Moon you expect to matter, and why.":
  "Las ganancias se registran con seis cifras significativas y los radios son ajustes exactos, así que la dispersión alrededor de tus ajustes es solo redondeo; usa el error estándar de cada pendiente. Las rectas de los Antecedentes omiten términos del orden de \\((GM/Rc^2)^2\\), unos {#} × {#}⁻¹⁹, muy por debajo de lo que muestran las lecturas. El sistema GPS real tiene que tomar en cuenta lo que el modelo omite: di cuál de estos esperas que importe, el achatamiento de la Tierra, las órbitas ligeramente excéntricas de los satélites, o el Sol y la Luna, y por qué.",
"Why does a clock higher in Earth’s gravity run faster?":
  "¿Por qué un reloj más alto en la gravedad de la Tierra marcha más rápido?",
"The space station’s clock loses time on the ground and a GPS clock gains. Explain in terms of the two effects.":
  "El reloj de la estación espacial pierde tiempo respecto al suelo y un reloj GPS gana. Explícalo en términos de los dos efectos.",
"GPS satellite clocks are built to tick at {#} MHz on the ground so that in orbit they tick at {#} MHz as seen from Earth. Find the fractional offset and compare it with the net fractional rate difference from your GPS reading.":
  "Los relojes de los satélites GPS se construyen para marchar a {#} MHz en el suelo de modo que en órbita marchen a {#} MHz vistos desde la Tierra. Encuentra el desfase fraccional y compáralo con la diferencia fraccional neta de ritmo de tu lectura GPS.",
"Earth’s Schwarzschild radius is about {#} mm. What would it mean for Earth to be squeezed inside it?":
  "El radio de Schwarzschild de la Tierra es de unos {#} mm. ¿Qué significaría que la Tierra se comprimiera dentro de él?",
"Prelab answers, the three table copies with their graphs and fits, \\(GM/c^2\\) and \\(c\\) with uncertainties, the radius where the effects cancel, the one day drift, the tower comparison and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, las tres copias de la tabla con sus gráficas y ajustes, \\(GM/c^2\\) y \\(c\\) con incertidumbres, el radio donde los efectos se cancelan, la deriva de un día, la comparación de las torres y las respuestas a las preguntas. Identifica los datos simulados.",
"Mass of the Earth":
  "Masa de la Tierra",
"Distance of the ground clock from Earth's center":
  "Distancia del reloj del suelo al centro de la Tierra",
"Tick rate of a clock (Δf/f: how much faster it runs)":
  "Ritmo de marcha de un reloj (Δf/f: cuánto más rápido marcha)",
"Height of the tower":
  "Altura de la torre",
"Distance of the orbiting clock from Earth's center":
  "Distancia del reloj en órbita al centro de la Tierra",
"Time (Δt: a clock error)":
  "Tiempo (Δt: un error de reloj)",
"One day":
  "Un día",
"Δt_gravity: time the orbiting clock gains per day from being higher up":
  "Δt_gravity: tiempo que el reloj en órbita gana por día por estar más arriba",
"Δt_speed: time it loses per day from its speed":
  "Δt_speed: tiempo que pierde por día por su rapidez",
"Speed of the clock, in a frame that does not turn with Earth":
  "Rapidez del reloj, en un marco que no gira con la Tierra",
"Speed of the ground clock, in the same frame":
  "Rapidez del reloj del suelo, en el mismo marco"
});
