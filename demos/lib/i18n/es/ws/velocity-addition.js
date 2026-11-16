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
"Rocket time A to B (s)":
  "Tiempo del cohete de A a B (s)",
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
"Now the {#}c rocket fires a slow probe, at only {#}c. Without working it out, decide whether Galileo’s {#}c will come within {#}% of the ground speed the timer gives, miss it by a few percent, or miss it by more than {#}%.":
  "Ahora el cohete de {#}c dispara una sonda lenta, de solo {#}c. Sin calcularlo, decide si los {#}c de Galileo quedarán a menos de {#}% de la rapidez respecto al suelo que da el cronómetro, fallarán por unos cuantos por ciento o fallarán por más de {#}%.",
"None for the virtual apparatus.":
  "Ninguna para el aparato virtual.",
"<strong>One rocket, many probes.</strong> The link opens the Rocket fires a probe setup (rocket at {#}c). Choose {#}× for the speed so each run takes a few seconds. ({#}) Set the Launch speed u′, measured on the rocket slider to {#}c (drag close, then use the arrow keys, {#}c a step). ({#}) Press Launch and wait until the run stops, after the probe and the rocket have both passed beacon B. ({#}) Press Record reading; it stores the Probe, A to B time from Readouts. Repeat for {#}c, {#}c, {#}c and {#}c. Then tick Fire a light pulse instead of the probe, press Launch, and record that run too. Press Export to worksheet, then Clear.":
  "<strong>Un cohete, muchas sondas.</strong> El enlace abre la configuración El cohete dispara una sonda (cohete a {#}c). Elige {#}× para la rapidez de reproducción, de modo que cada corrida dure unos segundos. ({#}) Fija el control deslizante Rapidez de lanzamiento u′, medida en el cohete en {#}c (arrastra hasta cerca, y luego usa las flechas del teclado, {#}c por paso). ({#}) Pulsa Lanzar y espera hasta que la corrida se detenga, después de que la sonda y el cohete hayan pasado la baliza B. ({#}) Pulsa Registrar lectura; guarda el tiempo Sonda, de A a B de las Lecturas en pantalla. Repite con {#}c, {#}c, {#}c y {#}c. Luego marca Disparar un pulso de luz en lugar de la sonda, pulsa Lanzar y registra también esa corrida. Pulsa Exportar a la hoja, y luego Borrar.",
"<strong>Mystery rocket.</strong> Choose the Mystery rocket setup; its speed is hidden. Fire probes at five or more launch speeds from {#}c to {#}c ({#}c, {#}c, {#}c, {#}c, {#}c is a good set) and record each. Don’t press New mystery rocket or pick the setup again in the middle, since either one changes the speed. Record reading also stores the Rocket, A to B time from Readouts, in the table’s last column; it is the same for every run. Export to worksheet (a new copy of the table).":
  "<strong>Cohete misterioso.</strong> Elige la configuración Cohete misterioso; su rapidez está oculta. Dispara sondas a cinco o más rapideces de lanzamiento de {#}c a {#}c ({#}c, {#}c, {#}c, {#}c, {#}c es un buen conjunto) y registra cada una. No pulses Nuevo cohete misterioso ni elijas la configuración otra vez a la mitad, porque cualquiera de las dos cambia la rapidez. Registrar lectura también guarda en la última columna de la tabla el tiempo Cohete, de A a B de Lecturas en pantalla; es el mismo en todas las corridas. Exporta a la hoja (una copia nueva de la tabla).",
"<span>B</span>Launch speed \\(u'\\) (c)":
  "<span>B</span>Rapidez de lanzamiento \\(u'\\) (c)",
"<span>C</span>Probe time A to B \\(\\Delta t\\) (s)":
  "<span>C</span>Tiempo de la sonda de A a B \\(\\Delta t\\) (s)",
"<span>D</span>Ground speed \\(u\\) (c)":
  "<span>D</span>Rapidez respecto al suelo \\(u\\) (c)",
"<span>F</span>\\(1 - uu'/c^2\\)":
  "<span>F</span>\\(1 - uu'/c^2\\)",
"<span>G</span>Rocket time A to B (s)":
  "<span>G</span>Tiempo del cohete de A a B (s)",
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
"Rocket time A to B (s), row {#}":
  "Tiempo del cohete de A a B (s), fila {#}",
"{#} - uu'/c²":
  "{#} - uu'/c²",
"Export fills the first three columns and the last (a light pulse shows as {#}). Work out the rest for each row: \\(u = 3.000/\\Delta t\\), then \\(u - u'\\) and \\(1 - uu'/c^2\\) with \\(u\\) and \\(u'\\) in units of c.":
  "Exportar llena las primeras tres columnas y la última (un pulso de luz aparece como {#}). Calcula el resto para cada fila: \\(u = 3.000/\\Delta t\\), luego \\(u - u'\\) y \\(1 - uu'/c^2\\) con \\(u\\) y \\(u'\\) en unidades de c.",
"Graph \\(u\\) (vertical) against \\(u'\\) (horizontal) for the {#}c rocket, from the first table. Is it a straight line? Compare your ground speeds with Galileo’s \\(v + u'\\): where do they differ most?":
  "Grafica \\(u\\) (vertical) en función de \\(u'\\) (horizontal) para el cohete a {#}c, con la primera tabla. ¿Es una recta? Compara tus rapideces respecto al suelo con la \\(v + u'\\) de Galileo: ¿dónde difieren más?",
"For the {#}c table, graph \\(u - u'\\) (vertical) against \\(1 - uu'/c^2\\) (horizontal) and fit a straight line with a free intercept. Is the intercept zero within its uncertainty? Compare the slope with the {#}c you set.":
  "Para la tabla de {#}c, grafica \\(u - u'\\) (vertical) en función de \\(1 - uu'/c^2\\) (horizontal) y ajusta una recta con ordenada al origen libre. ¿Es la ordenada al origen cero dentro de su incertidumbre? Compara la pendiente con la {#}c que fijaste.",
"Graph the mystery table the same way and find the mystery rocket’s speed from its slope. Then find it directly from the Rocket time A to B column, \\(v = 3.000/\\Delta t\\), and say whether the two agree within their uncertainties.":
  "Grafica la tabla del cohete misterioso de la misma manera y encuentra la rapidez del cohete misterioso a partir de su pendiente. Luego encuéntrala directamente a partir de la columna Tiempo del cohete de A a B, \\(v = 3.000/\\Delta t\\), y di si las dos coinciden dentro de sus incertidumbres.",
"Where does the light pulse sit on each graph, and what was its timer reading? What does this say about the speed of light seen from the ground?":
  "¿Dónde queda el pulso de luz en cada gráfica, y cuál fue la lectura de su temporizador? ¿Qué dice esto sobre la rapidez de la luz vista desde el suelo?",
"The timer reads to {#} s and the beacons are exactly {#} light seconds apart. Find the uncertainty in \\(u\\) for a probe that takes about {#} s, and say whether it can explain any scatter in your residuals.":
  "El temporizador lee con resolución de {#} s y las balizas están separadas exactamente {#} segundos luz. Encuentra la incertidumbre en \\(u\\) para una sonda que tarda unos {#} s, y di si puede explicar alguna dispersión en tus residuos.",
"The crew of the {#}c rocket watches the probe you timed at {#}c. What speed do they say it has? Use the inverse rule \\(u' = (u - v)/(1 - uv/c^2)\\).":
  "La tripulación del cohete a {#}c observa la sonda que cronometraste a {#}c. ¿Qué rapidez dicen que tiene? Usa la regla inversa \\(u' = (u - v)/(1 - uv/c^2)\\).",
"Two rockets approach the ground station from opposite sides, each at {#}c. How fast does one move as seen from the other? Why is the answer not {#}c?":
  "Dos cohetes se acercan a la estación terrestre desde lados opuestos, cada uno a {#}c. ¿Qué tan rápido se mueve uno visto desde el otro? ¿Por qué la respuesta no es {#}c?",
"How close did Galileo come for your {#}c probe? Find by what percentage {#}c misses your measured ground speed, and set that beside Before the lab {#}. What sets the size of Galileo’s error for a slow probe from this rocket? Below what launch speed would it come within {#}%?":
  "¿Qué tan cerca estuvo Galileo con tu sonda de {#}c? Encuentra en qué porcentaje {#}c se aleja de tu rapidez medida respecto al suelo, y compáralo con Antes del laboratorio {#}. ¿Qué determina el tamaño del error de Galileo para una sonda lenta de este cohete? ¿Por debajo de qué rapidez de lanzamiento quedaría a menos de {#}%?",
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
  "Velocidad, momento y energía cerca de c (Suma de velocidades)",
"How fast must a rocket at {#}c fire a probe for the probe’s ground speed to be {#}c?":
  "¿Qué tan rápido debe disparar una sonda un cohete a {#}c para que la rapidez de la sonda respecto al suelo sea {#}c?",
"At what speeds does Galileo’s rule give a ground speed within {#}% of the relativistic one, for a rocket at {#}c? Why do we never notice the difference in daily life?":
  "¿Con qué rapideces da la regla de Galileo una rapidez respecto al suelo dentro del {#}% de la relativista, para un cohete a {#}c? ¿Por qué nunca notamos la diferencia en la vida diaria?",
"<strong>Mystery rocket.</strong> Choose the Mystery rocket setup; its speed is hidden. Fire probes at five or more launch speeds from {#}c to {#}c ({#}c, {#}c, {#}c, {#}c, {#}c is a good set) and record each. Don’t press New mystery rocket or pick the setup again in the middle, since either one changes the speed. After a run, also write down the Rocket, A to B time from Readouts: the table has no column for it, and it is the same for every run. Export to worksheet (a new copy of the table).":
  "<strong>Cohete misterioso.</strong> Elige la configuración Cohete misterioso; su rapidez está oculta. Dispara sondas con cinco o más rapideces de lanzamiento de {#}c a {#}c ({#}c, {#}c, {#}c, {#}c, {#}c es un buen conjunto) y registra cada una. No pulses Nuevo cohete misterioso ni elijas otra vez la configuración a la mitad, porque cualquiera de las dos cambia la rapidez. Después de una corrida, anota también el tiempo Cohete, de A a B de las Lecturas en pantalla: la tabla no tiene columna para él, y es el mismo en todas las corridas. Exportar a la hoja (una copia nueva de la tabla).",
"Export fills the first three columns (a light pulse shows as {#}). Work out the rest for each row: \\(u = 3.000/\\Delta t\\), then \\(u - u'\\) and \\(1 - uu'/c^2\\) with \\(u\\) and \\(u'\\) in units of c.":
  "Exportar llena las primeras tres columnas (un pulso de luz aparece como {#}). Calcula tú mismo el resto en cada fila: \\(u = 3.000/\\Delta t\\), y luego \\(u - u'\\) y \\(1 - uu'/c^2\\) con \\(u\\) y \\(u'\\) en unidades de c.",
"Graph the mystery table the same way and find the mystery rocket’s speed from its slope. Then find it directly from the Rocket, A to B time you wrote down, \\(v = 3.000/\\Delta t\\), and say whether the two agree within their uncertainties.":
  "Grafica la tabla misteriosa de la misma manera y encuentra la rapidez del cohete misterioso a partir de su pendiente. Luego encuéntrala directamente con el tiempo Cohete, de A a B que anotaste, \\(v = 3.000/\\Delta t\\), y di si las dos coinciden dentro de sus incertidumbres.",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"<strong>One rocket, many probes.</strong> Start with the Rocket fires a probe setup (rocket at {#}c). Fire probes at launch speeds from {#}c to {#}c in steps of {#}c and record each one once it has passed beacon B. Then fire a pulse of light, record it too, and send the run to the worksheet before you clear the readings.":
  "<strong>Un cohete, muchas sondas.</strong> Empieza con la configuración El cohete dispara una sonda (cohete a {#}c). Dispara sondas con rapideces de lanzamiento de {#}c a {#}c en pasos de {#}c y registra cada una una vez que haya pasado la baliza B. Luego dispara un pulso de luz, regístralo también, y envía la corrida a la hoja de trabajo antes de borrar las lecturas.",
"<strong>A faster rocket.</strong> Clear the readings, set the rocket to {#}c and repeat at {#}c, {#}c, {#}c, {#}c, {#}c and with light. Send this run to a new copy of the table.":
  "<strong>Un cohete más rápido.</strong> Borra las lecturas, pon el cohete a {#}c y repite a {#}c, {#}c, {#}c, {#}c, {#}c y con luz. Envía esta corrida a una copia nueva de la tabla.",
"<strong>Mystery rocket.</strong> Clear the readings and choose the Mystery rocket setup (picking it again, or New mystery rocket, changes the speed). Fire probes at five or more launch speeds from {#}c to {#}c and record each. Write down the rocket’s own timer reading (Rocket, A to B) as well: the demo shows it, but the table has no column for it. Send this run to a third copy of the table.":
  "<strong>Cohete misterioso.</strong> Borra las lecturas y elige la configuración Cohete misterioso (elegirla otra vez, o Nuevo cohete misterioso, cambia la rapidez). Dispara sondas con cinco o más rapideces de lanzamiento de {#}c a {#}c y registra cada una. Anota también la lectura del temporizador propio del cohete (Cohete, de A a B): la demo la muestra, pero la tabla no tiene columna para ella. Envía esta corrida a una tercera copia de la tabla.",
"Graph \\(u\\) against \\(u'\\) for the {#}c rocket. Is it a straight line? Compare your ground speeds with Galileo’s \\(v + u'\\): where do they differ most?":
  "Grafica \\(u\\) en función de \\(u'\\) para el cohete a {#}c. ¿Es una recta? Compara tus rapideces respecto al suelo con la \\(v + u'\\) de Galileo: ¿dónde difieren más?",
"Graph \\(u - u'\\) against \\(1 - uu'/c^2\\) for each rocket. Is the intercept zero within its uncertainty? Compare each slope with the rocket speed you set.":
  "Grafica \\(u - u'\\) en función de \\(1 - uu'/c^2\\) para cada cohete. ¿Es la ordenada al origen cero dentro de su incertidumbre? Compara cada pendiente con la rapidez del cohete que fijaste.",
"Find the mystery rocket’s speed from its slope. Then find it directly from the rocket’s own timer reading, \\(v = 3.000/\\Delta t\\), and compare.":
  "Encuentra la rapidez del cohete misterioso a partir de su pendiente. Luego encuéntrala directamente con la lectura del temporizador propio del cohete, \\(v = 3.000/\\Delta t\\), y compáralas.",
"Why can no rocket firing a probe forward ever produce a ground speed above c, however fast both are?":
  "¿Por qué ningún cohete que dispara una sonda hacia adelante puede producir nunca una rapidez respecto al suelo mayor que c, por rápidos que sean ambos?"
});
