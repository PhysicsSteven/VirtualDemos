/* ws/velocity-addition in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/velocity-addition', {
"Launch speed u' (c)":
  "Rapidez de lanzamiento u' (c)",
"Probe time A to B Δ t (s)":
  "Tiempo de la sonda de A a B Δ t (s)",
"Ground speed u (c)":
  "Rapidez respecto al suelo u (c)",
"{#} - uu'/c^{#}":
  "{#} - uu'/c^{#}",
"Adding Velocities Near c | VirtualDemos":
  "Suma de velocidades cerca de c | VirtualDemos",
"Adding Velocities Near c":
  "Suma de velocidades cerca de c",
"<strong>Setups in the demo:</strong> Rocket fires a probe; Rocket fires light; Mystery rocket (these three use the Adding velocities view, the subject of this worksheet); Electron, steady force (the momentum worksheet); Bertozzi’s electrons and Mystery particle (the energy worksheet).":
  "<strong>Configuraciones en la demo:</strong> El cohete dispara una sonda; El cohete dispara luz; Cohete misterioso (estas tres usan la vista Suma de velocidades, el tema de esta hoja de trabajo); Electrón, fuerza constante (la hoja de trabajo de momento); Los electrones de Bertozzi y Partícula misteriosa (la hoja de trabajo de energía).",
"Everything moves along one straight line in empty space. Beacons A and B are at rest in the ground frame, {#} light seconds apart (one light second is the distance light goes in {#} s, {#} × {#}⁸ m).":
  "Todo se mueve a lo largo de una línea recta en el espacio vacío. Las balizas A y B están en reposo en el marco del suelo, separadas {#} segundos luz (un segundo luz es la distancia que recorre la luz en {#} s, {#} × {#}⁸ m).",
"The rocket passes a launch mark {#} light seconds before beacon A and fires the probe there. The launch speed \\(u'\\) is measured by the crew, in the rocket’s own frame, from {#} to {#}c. You can fire a pulse of light instead.":
  "El cohete pasa por una marca de lanzamiento {#} segundos luz antes de la baliza A y dispara ahí la sonda. La rapidez de lanzamiento \\(u'\\) la mide la tripulación, en el marco propio del cohete, de {#} a {#}c. En lugar de la sonda puedes disparar un pulso de luz.",
"Each beacon carries a ground clock. The timers show the ground time between a body passing A and passing B, to {#} s, for the probe and for the rocket.":
  "Cada baliza lleva un reloj del suelo. Los temporizadores muestran el tiempo del suelo entre que un cuerpo pasa por A y pasa por B, con resolución de {#} s, para la sonda y para el cohete.",
"The run plays in real time at {#}× (a light second takes one second); {#}× and {#}× play it faster. The rocket is drawn at a fixed size.":
  "La corrida se reproduce en tiempo real a {#}× (un segundo luz tarda un segundo); {#}× y {#}× la reproducen más rápido. El cohete se dibuja de un tamaño fijo.",
"Record reading stores the rocket speed, the launch speed, whether a probe or light was fired, and both timer readings. It needs the probe to have passed beacon B. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la rapidez del cohete, la rapidez de lanzamiento, si se disparó una sonda o luz, y ambas lecturas de los temporizadores. Necesita que la sonda haya pasado la baliza B. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"New mystery rocket picks another unknown speed, from {#}c to {#}c.":
  "Nuevo cohete misterioso elige otra rapidez desconocida, de {#}c a {#}c.",
"Blind hides the graph and the predicted ground speeds.":
  "A ciegas oculta la gráfica y las rapideces respecto al suelo predichas.",
"Measure the speed of a probe fired from a fast rocket, as seen from the ground, and find the rule for adding velocities that keeps every speed below c.":
  "Mide la rapidez de una sonda disparada desde un cohete rápido, vista desde el suelo, y encuentra la regla de suma de velocidades que mantiene toda rapidez por debajo de c.",
"In Galileo’s mechanics a probe fired forward at \\(u'\\) from a rocket moving at \\(v\\) has ground speed \\(u = v + u'\\). That cannot be right near c: a rocket at {#}c firing a probe at {#}c would give {#}c, and a pulse of light fired from the rocket would move at {#}c, which contradicts the second postulate (§{#}). The Lorentz transformation gives instead (§{#})":
  "En la mecánica de Galileo una sonda disparada hacia adelante a \\(u'\\) desde un cohete que se mueve a \\(v\\) tiene una rapidez respecto al suelo \\(u = v + u'\\). Eso no puede ser correcto cerca de c: un cohete a {#}c que dispara una sonda a {#}c daría {#}c, y un pulso de luz disparado desde el cohete se movería a {#}c, lo que contradice el segundo postulado (§{#}). La transformación de Lorentz da en cambio (§{#})",
"\\[u = \\frac{v + u'}{1 + vu'/c^2}.\\]":
  "\\[u = \\frac{v + u'}{1 + vu'/c^2}.\\]",
"For small speeds the denominator is close to {#} and Galileo’s rule comes back. Multiplying out and rearranging gives a form with no fraction,":
  "Para rapideces pequeñas el denominador es cercano a {#} y vuelve la regla de Galileo. Al multiplicar y reordenar se obtiene una forma sin fracción,",
"\\[u - u' = v\\left(1 - \\frac{uu'}{c^2}\\right),\\]":
  "\\[u - u' = v\\left(1 - \\frac{uu'}{c^2}\\right),\\]",
"so a plot of \\(u - u'\\) against \\(1 - uu'/c^2\\) for one rocket is a straight line through the origin with slope \\(v\\). Here the ground speed comes from the beacon timer: \\(u = (3.000\\ \\text{light seconds})/\\Delta t\\), which in units of c is \\(u = 3.000/\\Delta t\\) with \\(\\Delta t\\) in seconds.":
  "así que una gráfica de \\(u - u'\\) en función de \\(1 - uu'/c^2\\) para un cohete es una recta que pasa por el origen con pendiente \\(v\\). Aquí la rapidez respecto al suelo sale del temporizador de las balizas: \\(u = (3.000\\ \\text{light seconds})/\\Delta t\\), que en unidades de c es \\(u = 3.000/\\Delta t\\) con \\(\\Delta t\\) en segundos.",
"A rocket at {#}c fires a probe forward at {#}c. Find the probe’s ground speed by Galileo’s rule and by the relativistic rule, and predict the beacon timer reading for each.":
  "Un cohete a {#}c dispara una sonda hacia adelante a {#}c. Encuentra la rapidez de la sonda respecto al suelo con la regla de Galileo y con la regla relativista, y predice la lectura del temporizador de las balizas para cada una.",
"Show that the relativistic rule gives \\(u = c\\) when \\(u' = c\\), whatever \\(v\\) is.":
  "Muestra que la regla relativista da \\(u = c\\) cuando \\(u' = c\\), sea cual sea \\(v\\).",
"Starting from the relativistic rule, show that \\(u - u' = v(1 - uu'/c^2)\\).":
  "A partir de la regla relativista, muestra que \\(u - u' = v(1 - uu'/c^2)\\).",
"How fast must a rocket at {#}c fire a probe for the probe’s ground speed to be {#}c?":
  "¿Qué tan rápido debe disparar una sonda un cohete a {#}c para que la rapidez de la sonda respecto al suelo sea {#}c?",
"None for the virtual apparatus.":
  "Ninguna para el aparato virtual.",
"<strong>One rocket, many probes.</strong> Start with the Rocket fires a probe setup (rocket at {#}c). Fire probes at launch speeds from {#}c to {#}c in steps of {#}c and record each one once it has passed beacon B. Then fire a pulse of light, record it too, and send the run to the worksheet before you clear the readings.":
  "<strong>Un cohete, muchas sondas.</strong> Empieza con la configuración El cohete dispara una sonda (cohete a {#}c). Dispara sondas con rapideces de lanzamiento de {#}c a {#}c en pasos de {#}c y registra cada una una vez que haya pasado la baliza B. Luego dispara un pulso de luz, regístralo también, y envía la corrida a la hoja de trabajo antes de borrar las lecturas.",
"<strong>A faster rocket.</strong> Clear the readings, set the rocket to {#}c and repeat at {#}c, {#}c, {#}c, {#}c, {#}c and with light. Send this run to a new copy of the table.":
  "<strong>Un cohete más rápido.</strong> Borra las lecturas, pon el cohete a {#}c y repite a {#}c, {#}c, {#}c, {#}c, {#}c y con luz. Envía esta corrida a una copia nueva de la tabla.",
"<strong>Mystery rocket.</strong> Clear the readings and choose the Mystery rocket setup (picking it again, or New mystery rocket, changes the speed). Fire probes at five or more launch speeds from {#}c to {#}c and record each. Write down the rocket’s own timer reading (Rocket, A to B) as well: the demo shows it, but the table has no column for it. Send this run to a third copy of the table.":
  "<strong>Cohete misterioso.</strong> Borra las lecturas y elige la configuración Cohete misterioso (elegirla otra vez, o Nuevo cohete misterioso, cambia la rapidez). Dispara sondas con cinco o más rapideces de lanzamiento de {#}c a {#}c y registra cada una. Anota también la lectura del temporizador propio del cohete (Cohete, de A a B): la demo la muestra, pero la tabla no tiene columna para ella. Envía esta corrida a una tercera copia de la tabla.",
"<span>B</span>Launch speed \\(u'\\) (c)":
  "<span>B</span>Rapidez de lanzamiento \\(u'\\) (c)",
"<span>C</span>Probe time A to B \\(\\Delta t\\) (s)":
  "<span>C</span>Tiempo de la sonda de A a B \\(\\Delta t\\) (s)",
"<span>D</span>Ground speed \\(u\\) (c)":
  "<span>D</span>Rapidez respecto al suelo \\(u\\) (c)",
"<span>F</span>\\(1 - uu'/c^2\\)":
  "<span>F</span>\\(1 - uu'/c^2\\)",
"Launch speed u' (c), row {#}":
  "Rapidez de lanzamiento u' (c), fila {#}",
"Probe time A to B Δ t (s), row {#}":
  "Tiempo de la sonda de A a B Δ t (s), fila {#}",
"Ground speed u (c), row {#}":
  "Rapidez respecto al suelo u (c), fila {#}",
"u - u' (c), row {#}":
  "u - u' (c), fila {#}",
"{#} - uu'/c^{#}, row {#}":
  "{#} - uu'/c^{#}, fila {#}",
"{#} - uu'/c²":
  "{#} - uu'/c²",
"Graph \\(u\\) against \\(u'\\) for the {#}c rocket. Is it a straight line? Compare your ground speeds with Galileo’s \\(v + u'\\): where do they differ most?":
  "Grafica \\(u\\) en función de \\(u'\\) para el cohete a {#}c. ¿Es una recta? Compara tus rapideces respecto al suelo con la \\(v + u'\\) de Galileo: ¿dónde difieren más?",
"Graph \\(u - u'\\) against \\(1 - uu'/c^2\\) for each rocket. Is the intercept zero within its uncertainty? Compare each slope with the rocket speed you set.":
  "Grafica \\(u - u'\\) en función de \\(1 - uu'/c^2\\) para cada cohete. ¿Es la ordenada al origen cero dentro de su incertidumbre? Compara cada pendiente con la rapidez del cohete que fijaste.",
"Find the mystery rocket’s speed from its slope. Then find it directly from the rocket’s own timer reading, \\(v = 3.000/\\Delta t\\), and compare.":
  "Encuentra la rapidez del cohete misterioso a partir de su pendiente. Luego encuéntrala directamente con la lectura del temporizador propio del cohete, \\(v = 3.000/\\Delta t\\), y compáralas.",
"Where does the light pulse sit on each graph, and what was its timer reading? What does this say about the speed of light seen from the ground?":
  "¿Dónde queda el pulso de luz en cada gráfica, y cuál fue la lectura de su temporizador? ¿Qué dice esto sobre la rapidez de la luz vista desde el suelo?",
"The timer reads to {#} s and the beacons are exactly {#} light seconds apart. Find the uncertainty in \\(u\\) for a probe that takes about {#} s, and say whether it can explain any scatter in your residuals.":
  "El temporizador lee con resolución de {#} s y las balizas están separadas exactamente {#} segundos luz. Encuentra la incertidumbre en \\(u\\) para una sonda que tarda unos {#} s, y di si puede explicar alguna dispersión en tus residuos.",
"Why can no rocket firing a probe forward ever produce a ground speed above c, however fast both are?":
  "¿Por qué ningún cohete que dispara una sonda hacia adelante puede producir nunca una rapidez respecto al suelo mayor que c, por rápidos que sean ambos?",
"The crew of the {#}c rocket watches the probe you timed at {#}c. What speed do they say it has? Use the inverse rule \\(u' = (u - v)/(1 - uv/c^2)\\).":
  "La tripulación del cohete a {#}c observa la sonda que cronometraste a {#}c. ¿Qué rapidez dicen que tiene? Usa la regla inversa \\(u' = (u - v)/(1 - uv/c^2)\\).",
"Two rockets approach the ground station from opposite sides, each at {#}c. How fast does one move as seen from the other? Why is the answer not {#}c?":
  "Dos cohetes se acercan a la estación terrestre desde lados opuestos, cada uno a {#}c. ¿Qué tan rápido se mueve uno visto desde el otro? ¿Por qué la respuesta no es {#}c?",
"At what speeds does Galileo’s rule give a ground speed within {#}% of the relativistic one, for a rocket at {#}c? Why do we never notice the difference in daily life?":
  "¿Con qué rapideces da la regla de Galileo una rapidez respecto al suelo dentro del {#}% de la relativista, para un cohete a {#}c? ¿Por qué nunca notamos la diferencia en la vida diaria?",
"Prelab answers, the table copies with their graphs and fits, the mystery rocket’s speed by both methods with uncertainties, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de la tabla con sus gráficas y ajustes, la rapidez del cohete misterioso por ambos métodos con incertidumbres, y las respuestas a las preguntas. Identifica los datos simulados.",
"Time (Δt: the probe's time from beacon A to B)":
  "Tiempo (Δt: el tiempo de la sonda de la baliza A a la B)",
"Ground speed of the probe":
  "Rapidez de la sonda respecto al suelo",
"Launch speed of the probe in the rocket's frame":
  "Rapidez de lanzamiento de la sonda en el marco del cohete",
"Speed of the rocket relative to the ground":
  "Rapidez del cohete respecto al suelo",
"Velocity, Momentum and Energy Near c (Adding velocities)":
  "Velocidad, momento y energía cerca de c (Suma de velocidades)"
});
