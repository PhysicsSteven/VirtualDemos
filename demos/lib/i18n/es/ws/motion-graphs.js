/* ws/motion-graphs in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/motion-graphs', {
"Run/stage":
  "Corrida/etapa",
"x or y (m)":
  "x o y (m)",
"Estimated slope (m/s)":
  "Pendiente estimada (m/s)",
"Target/score or observation":
  "Objetivo/puntaje u observación",
"Quantity":
  "Cantidad",
"Your prediction":
  "Tu predicción",
"Demo":
  "Demo",
"With calculus":
  "Con cálculo",
"Reading Motion from Graphs | VirtualDemos":
  "Leer el movimiento en las gráficas | VirtualDemos",
"Reading Motion from Graphs":
  "Leer el movimiento en las gráficas",
"<strong>Setups in the demo:</strong> Constant velocity; Speeding up; Slowing down and turning around; Stop and go; Ball thrown up; Two cars; Ball on ramps; Walk the graph; Draw a graph.":
  "<strong>Configuraciones en la demo:</strong> Velocidad constante; Acelerando; Frenando y dando la vuelta; Arrancar y parar; Pelota lanzada hacia arriba; Dos autos; Esfera en rampas; Recorre la gráfica; Dibuja una gráfica.",
"Three stages, each with a constant acceleration for a set time. Set a stage’s time to {#} to skip it.":
  "Tres etapas, cada una con una aceleración constante durante un tiempo fijo. Pon el tiempo de una etapa en {#} para omitirla.",
"Press Start run, then drag the cart (or hold ← and →, with Shift to go faster) so its graph follows the dashed target for {#} s. The velocity and acceleration are worked out from the position samples, the way a motion detector does it, so quick jerks show up as spikes.":
  "Pulsa Iniciar corrida y luego arrastra el carrito (o mantén pulsadas ← y →, con Shift para ir más rápido) para que su gráfica siga el objetivo discontinuo durante {#} s. La velocidad y la aceleración se calculan a partir de las muestras de posición, como lo hace un detector de movimiento, así que los tirones rápidos aparecen como picos.",
"Move the time marker by dragging on a graph, or with the left and right arrow keys on the picture ({#} s a press, {#} s with Shift). <strong>Record reading</strong> stores the time and position shown at the marker (t to {#} s, x to {#} m). Cells can be edited.":
  "Mueve el marcador de tiempo arrastrando sobre una gráfica, o con las flechas izquierda y derecha en la imagen ({#} s por pulsación, {#} s con Shift). <strong>Registrar lectura</strong> guarda el tiempo y la posición mostrados en el marcador (t a {#} s, x a {#} m). Las celdas se pueden editar.",
"<strong>Plot and fit</strong> fits \\(x = c_0 + c_1 t + c_2 t^2\\) by least squares over your rows and shows the residuals, for one stage of constant acceleration. Capture rows from one stage only. The worksheet’s graph fits the same quadratic to position against \\(t\\) (choose a quadratic fit), with all three coefficients and their uncertainties and the residuals, or a straight line to your estimated slopes against \\(t\\), whose slope is \\(a\\). Fit each run in the worksheet.":
  "<strong>Gráfica y ajuste</strong> ajusta \\(x = c_0 + c_1 t + c_2 t^2\\) por mínimos cuadrados a tus filas y muestra los residuos, para una etapa de aceleración constante. Captura filas de una sola etapa. La gráfica de la hoja de trabajo ajusta la misma cuadrática a la posición en función de \\(t\\) (elige un ajuste cuadrático), con los tres coeficientes y sus incertidumbres y los residuos, o una recta a tus pendientes estimadas en función de \\(t\\), cuya pendiente es \\(a\\). Ajusta cada corrida en la hoja de trabajo.",
"Blind hides the velocity and acceleration graphs, their readouts, the tangent lines, the areas, the stage settings and the \\(a\\) and \\(v_0\\) from your fit, leaving the position graph, as from a motion detector. Work out \\(v\\) and \\(a\\) from it.":
  "A ciegas oculta las gráficas de velocidad y aceleración, sus lecturas, las rectas tangentes, las áreas, los ajustes de las etapas y la \\(a\\) y la \\(v_0\\) de tu ajuste, dejando la gráfica de posición, como con un detector de movimiento. Calcula \\(v\\) y \\(a\\) a partir de ella.",
"Use position measurements to determine velocity and acceleration. Connect graph slopes and signed areas to motion, then test the same ideas for a ball thrown upward.":
  "Usa mediciones de posición para determinar la velocidad y la aceleración. Relaciona las pendientes y las áreas con signo de las gráficas con el movimiento, y luego pon a prueba las mismas ideas con una pelota lanzada hacia arriba.",
"A motion detector records position, not force. Velocity is the slope of position against time; acceleration is the slope of velocity against time. For one interval with constant acceleration,":
  "Un detector de movimiento registra la posición, no la fuerza. La velocidad es la pendiente de la posición en función del tiempo; la aceleración es la pendiente de la velocidad en función del tiempo. Para un intervalo con aceleración constante,",
"\\[x=x_0+v_0t+\\frac12at^2,\\qquad v=v_0+at.\\]":
  "\\[x=x_0+v_0t+\\frac12at^2,\\qquad v=v_0+at.\\]",
"The signed area under a velocity graph is displacement. Distance traveled adds the magnitudes of the forward and backward displacements. For a freely moving ball, choose upward as positive and replace \\(x\\) by \\(y\\); acceleration is \\(-g\\) while the ball is in flight, including at its highest point. Air resistance is neglected here.":
  "El área con signo bajo una gráfica de velocidad es el desplazamiento. La distancia recorrida suma las magnitudes de los desplazamientos hacia adelante y hacia atrás. Para una pelota en movimiento libre, elige hacia arriba como positivo y reemplaza \\(x\\) por \\(y\\); la aceleración es \\(-g\\) mientras la pelota está en vuelo, incluso en su punto más alto. Aquí se desprecia la resistencia del aire.",
"Sketch position and velocity graphs for an object moving forward, stopping briefly and returning. Can its acceleration remain negative throughout?":
  "Dibuja las gráficas de posición y velocidad de un objeto que avanza, se detiene brevemente y regresa. ¿Puede su aceleración ser negativa todo el tiempo?",
"What does each coefficient in \\(x = c_0 + c_1 t + c_2 t^2\\) tell you?":
  "¿Qué te dice cada coeficiente de \\(x = c_0 + c_1 t + c_2 t^2\\)?",
"How can an object have zero velocity and nonzero acceleration at the same instant?":
  "¿Cómo puede un objeto tener velocidad cero y aceleración distinta de cero en el mismo instante?",
"In the Two cars setup, car A starts from rest behind car B and speeds up, while car B keeps a steady speed. When car A draws level with car B, is it moving faster than car B, slower or at the same speed? A quick sketch of the two position graphs may help you decide.":
  "En la configuración Dos autos, el auto A parte del reposo detrás del auto B y acelera, mientras el auto B mantiene una rapidez constante. Cuando el auto A alcanza al auto B, ¿se mueve más rápido que el auto B, más lento o con la misma rapidez? Un esquema rápido de las dos gráficas de posición puede ayudarte a decidir.",
"With a real detector, clear the walking area and protect the cart from leaving the track. For a tossed ball, keep people and equipment out of its landing path.":
  "Con un detector real, despeja el área por donde se camina y evita que el carrito se salga del riel. Para una pelota lanzada, mantén a las personas y el equipo fuera de su trayectoria de caída.",
"<strong>Using the virtual apparatus.</strong> For each setup (the buttons under Setups), write down its stage settings first (Start position x₀, Start velocity v₀ and each stage’s acceleration and time, under Motion), then check <strong>Blind: hide predictions and answers</strong> (under Lab) before you take data (hiding them hides the settings too). To take a reading, move the time marker to the time you want (drag on a graph, or click the picture and use the left and right arrow keys: {#} s a press, {#} s with Shift) and press <strong>Record reading</strong>; it stores the Time t and Position x shown at the marker. The vertical run’s height goes in the CSV column":
  "<strong>Uso del aparato virtual.</strong> Para cada configuración (los botones bajo Configuraciones), anota primero los ajustes de sus etapas (Posición inicial x₀, Velocidad inicial v₀ y la aceleración y el tiempo de cada etapa, bajo Movimiento), y luego marca <strong>A ciegas: ocultar predicciones y respuestas</strong> (bajo Laboratorio) antes de tomar datos (ocultarlas también oculta los ajustes). Para tomar una lectura, mueve el marcador de tiempo al tiempo que quieras (arrastra sobre una gráfica, o haz clic en la imagen y usa las flechas izquierda y derecha: {#} s por pulsación, {#} s con Mayús) y pulsa <strong>Registrar lectura</strong>; guarda el Tiempo t y la Posición x que muestra el marcador. La altura de la corrida vertical va en la columna del CSV",
". Press <strong>Export to worksheet</strong> after each run, then <strong>Clear</strong>, or the runs mix. Turn Blind off, and check <strong>Tangent lines (slope)</strong> and <strong>Shade the area from {#} to t</strong> (under At the time marker), only after your predictions.":
  ". Pulsa <strong>Exportar a la hoja</strong> después de cada corrida y luego <strong>Borrar</strong>, o las corridas se mezclan. Desactiva A ciegas, y marca <strong>Rectas tangentes (pendiente)</strong> y <strong>Sombrear el área de {#} a t</strong> (bajo En el marcador de tiempo), solo después de tus predicciones.",
"<strong>Constant acceleration.</strong> On a real track, measure at least six positions and times during a single interval of uniform acceleration. Include points on both sides of a turning point if the cart reverses. In the simulation, use the <strong>Slowing down and turning around</strong> setup and record the position at t = {#}, {#}, {#}, {#}, {#} and {#} s. Fit position against time and use your fit to predict the turning time and position.":
  "<strong>Aceleración constante.</strong> En un riel real, mide al menos seis posiciones y tiempos durante un solo intervalo de aceleración uniforme. Incluye puntos a ambos lados de un punto de retorno si el carrito se regresa. En la simulación, usa la configuración <strong>Frenando y dando la vuelta</strong> y registra la posición en t = {#}, {#}, {#}, {#}, {#} y {#} s. Ajusta la posición en función del tiempo y usa tu ajuste para predecir el tiempo y la posición del retorno.",
"<strong>Several stages.</strong> Use the <strong>Stop and go</strong> setup, which speeds up, cruises and slows to rest. Before revealing the velocity graph, sketch it from the position graph. Measure the displacement in each stage: record the position at the start and end of each stage (the stage times are in the settings you wrote down). Compare their sum with the signed area under velocity (the <strong>Displacement Δx = x − x₀ = area under v</strong> readout at the end, with Blind off). Do not fit one parabola across all three stages.":
  "<strong>Varias etapas.</strong> Usa la configuración <strong>Arrancar y parar</strong>, que acelera, avanza a velocidad constante y frena hasta el reposo. Antes de revelar la gráfica de velocidad, dibújala a partir de la gráfica de posición. Mide el desplazamiento en cada etapa: registra la posición al inicio y al final de cada etapa (los tiempos de las etapas están en los ajustes que anotaste). Compara su suma con el área con signo bajo la velocidad (la lectura <strong>Desplazamiento Δx = x − x₀ = área bajo v</strong> al final, con A ciegas desactivado). No ajustes una sola parábola a las tres etapas.",
"<strong>Free fall.</strong> Toss a ball vertically, or use the <strong>Ball thrown up</strong> setup. Record at least six points from launch to just before landing, with points on both sides of the highest point (for example at {#}, {#}, {#}, {#}, {#} and {#} s). Fit height against time. Infer \\(g\\), initial upward speed, time to the highest point and maximum height. Treat the motion after landing separately.":
  "<strong>Caída libre.</strong> Lanza una pelota verticalmente, o usa la configuración <strong>Pelota lanzada hacia arriba</strong>. Registra al menos seis puntos desde el lanzamiento hasta justo antes de caer, con puntos a ambos lados del punto más alto (por ejemplo en {#}, {#}, {#}, {#}, {#} y {#} s). Ajusta la altura en función del tiempo. Infiere \\(g\\), la rapidez inicial hacia arriba, el tiempo hasta el punto más alto y la altura máxima. Trata por separado el movimiento después de caer.",
"<strong>Two cars.</strong> Use the <strong>Two cars</strong> setup as it opens. From the two cars’ starting positions, velocities and accelerations (under Motion and Car B; About this setup gives the answers, so leave it closed), predict when and where car A draws level with car B, and when the gap between them is largest and how large it is. Write \\(x_A(t)\\) and \\(x_B(t)\\) and solve \\(x_A = x_B\\). Then turn Blind off and step the time marker through the run to check, with the <strong>Gap x_B − x_A</strong> and <strong>Side by side</strong> readouts. Record both in Table {#}. At the time the Side by side readout gives (about {#} s), also read car A’s <strong>Velocity v</strong> and <strong>Car B velocity v</strong>; they go in your answer to Question {#}.":
  "<strong>Dos autos.</strong> Usa la configuración <strong>Dos autos</strong> tal como se abre. A partir de las posiciones, velocidades y aceleraciones iniciales de los dos autos (en Movimiento y Auto B; Sobre esta configuración da las respuestas, así que déjala cerrada), predice cuándo y dónde el auto A alcanza al auto B, y cuándo es mayor la separación entre ellos y qué tan grande es. Escribe \\(x_A(t)\\) y \\(x_B(t)\\) y resuelve \\(x_A = x_B\\). Luego desactiva A ciegas y avanza el marcador de tiempo a lo largo de la corrida para comprobar, con las lecturas <strong>Separación x_B − x_A</strong> y <strong>Lado a lado</strong>. Registra ambas en la Tabla {#}. En el instante que da la lectura Lado a lado (unos {#} s), lee también la <strong>Velocidad v</strong> del auto A y la <strong>Velocidad del auto B v</strong>; van en tu respuesta a la pregunta {#}.",
"<span>A</span>Run/stage":
  "<span>A</span>Corrida/etapa",
"<span>C</span>\\(x\\) or \\(y\\) (m)":
  "<span>C</span>\\(x\\) o \\(y\\) (m)",
"<span>D</span>Estimated slope (m/s)":
  "<span>D</span>Pendiente estimada (m/s)",
"<span>E</span>Target/score or observation":
  "<span>E</span>Objetivo/puntaje u observación",
"Run/stage, row {#}":
  "Corrida/etapa, fila {#}",
"x or y (m), row {#}":
  "x o y (m), fila {#}",
"Estimated slope (m/s), row {#}":
  "Pendiente estimada (m/s), fila {#}",
"Target/score or observation, row {#}":
  "Objetivo/puntaje u observación, fila {#}",
"Add a copy of this table for each run (pressing <strong>Clear</strong> in the demo before the next run does this when you export), and note its setup and settings.":
  "Agrega una copia de esta tabla para cada corrida (pulsar <strong>Borrar</strong> en la demo antes de la siguiente corrida lo hace al exportar), y anota su configuración y sus ajustes.",
"<strong>Table {#}: two cars.</strong>":
  "<strong>Tabla {#}: dos autos.</strong>",
"<span>A</span>Quantity":
  "<span>A</span>Cantidad",
"<span>B</span>Your prediction":
  "<span>B</span>Tu predicción",
"<span>C</span>Demo":
  "<span>C</span>Demo",
"Quantity, row {#}":
  "Cantidad, fila {#}",
"Your prediction, row {#}":
  "Tu predicción, fila {#}",
"Demo, row {#}":
  "Demo, fila {#}",
"Fit the turning run to a quadratic. Find initial velocity, acceleration, turning time and turning position.":
  "Ajusta la corrida con retorno a una cuadrática. Encuentra la velocidad inicial, la aceleración, el tiempo del retorno y la posición del retorno.",
"Determine both displacement and total distance for that run. Explain their difference using the velocity graph.":
  "Determina tanto el desplazamiento como la distancia total de esa corrida. Explica su diferencia usando la gráfica de velocidad.",
"For the three stages, compare measured displacements with areas under velocity and changes in velocity with areas under acceleration.":
  "Para las tres etapas, compara los desplazamientos medidos con las áreas bajo la velocidad y los cambios de velocidad con las áreas bajo la aceleración.",
"Fit free fall and report \\(g\\) with units. Compare the acceleration on the way up and down. Explain why fitting across landing would fail.":
  "Ajusta la caída libre y reporta \\(g\\) con unidades. Compara la aceleración de subida y de bajada. Explica por qué fallaría un ajuste que incluya la caída al suelo.",
"Side by side, how did the two cars’ velocities compare? Give the two you read and set them against your answer to Before the lab {#}. Use the slopes of the two \\(x\\)–\\(t\\) lines to explain what being level says, and does not say, about the two velocities, and why the gap is largest exactly when the two velocities are equal.":
  "Lado a lado, ¿cómo se compararon las velocidades de los dos autos? Da las dos que leíste y compáralas con tu respuesta a Antes del laboratorio {#}. Usa las pendientes de las dos rectas \\(x\\)–\\(t\\) para explicar qué dice, y qué no dice, estar a la par sobre las dos velocidades, y por qué la separación es mayor justo cuando las dos velocidades son iguales.",
"For courses that treat measurement uncertainty. This section is not counted in the {#} minutes; do it when your instructor assigns it.":
  "Para cursos que tratan la incertidumbre de medición. Esta sección no cuenta dentro de los {#} minutos; hazla cuando tu profesor la asigne.",
"Captured time and position are rounded to {#} s and {#} m. Estimate how those steps affect slopes, especially over short intervals. Use residuals and the spread from reasonable point selections; a small fit error does not include every source of error. Real measurements also involve detector calibration, sampling and drag. Repeating exact simulated points does not create independent random trials. Compare the residuals of your turning run fit with this position rounding, and give \\(g\\) from the free fall fit with its uncertainty. In With calculus {#}, say how large an error the {#} m rounding of the heights can put into each estimate.":
  "El tiempo y la posición capturados se redondean a {#} s y {#} m. Estima cómo afectan esos pasos a las pendientes, sobre todo en intervalos cortos. Usa los residuos y la dispersión de selecciones razonables de puntos; un error de ajuste pequeño no incluye todas las fuentes de error. Las mediciones reales también implican la calibración del detector, el muestreo y el arrastre. Repetir puntos simulados exactos no crea ensayos aleatorios independientes. Compara los residuos del ajuste de tu corrida con retorno con este redondeo de la posición, y da \\(g\\) a partir del ajuste de la caída libre con su incertidumbre. En Con cálculo {#}, indica qué tan grande es el error que el redondeo de {#} m en las alturas puede meter en cada estimación.",
"For courses that use calculus. This section is not counted in the {#} minutes; do it when your instructor assigns it.":
  "Para cursos que usan cálculo. Esta sección no cuenta dentro de los {#} minutos; hazla cuando tu profesor la asigne.",
"Start from \\(a = dv/dt\\) with \\(a\\) constant. Integrate once from \\(v = v_0\\) at \\(t = 0\\) to get \\(v(t)\\), then use \\(v = dx/dt\\) and integrate again from \\(x = x_0\\) to get \\(x(t)\\). Use your result to explain why the coefficient \\(c_2\\) in Before the lab {#} is \\(a/2\\), not \\(a\\).":
  "Parte de \\(a = dv/dt\\) con \\(a\\) constante. Integra una vez desde \\(v = v_0\\) en \\(t = 0\\) para obtener \\(v(t)\\); luego usa \\(v = dx/dt\\) e integra otra vez desde \\(x = x_0\\) para obtener \\(x(t)\\). Usa tu resultado para explicar por qué el coeficiente \\(c_2\\) de Antes del laboratorio {#} es \\(a/2\\), no \\(a\\).",
"In your Ball thrown up readings, estimate the velocity at {#} s from the readings at {#} and {#} s (their difference over the {#} s between them), and the acceleration at {#} s from the second difference \\(\\big[y(1.80) - 2y(1.20) + y(0.60)\\big]/(0.60\\ \\text{s})^2\\). Compare them with \\(dy/dt\\) and \\(d^2y/dt^2\\) of \\(y = v_0t - \\tfrac12gt^2\\) with the settings you wrote down.":
  "En tus lecturas de la Pelota lanzada hacia arriba, estima la velocidad en {#} s a partir de las lecturas en {#} y {#} s (su diferencia entre los {#} s que las separan), y la aceleración en {#} s a partir de la segunda diferencia \\(\\big[y(1.80) - 2y(1.20) + y(0.60)\\big]/(0.60\\ \\text{s})^2\\). Compáralas con \\(dy/dt\\) y \\(d^2y/dt^2\\) de \\(y = v_0t - \\tfrac12gt^2\\) con los ajustes que anotaste.",
"For the Two cars setup, write the gap \\(G(t) = x_B(t) - x_A(t)\\) from the settings you wrote down. Set \\(dG/dt = 0\\) to find when the gap is largest, use \\(d^2G/dt^2\\) to show it is a maximum, and compare the time and the gap with Table {#}.":
  "Para la configuración Dos autos, escribe la separación \\(G(t) = x_B(t) - x_A(t)\\) con los ajustes que anotaste. Haz \\(dG/dt = 0\\) para hallar cuándo es mayor la separación, usa \\(d^2G/dt^2\\) para demostrar que es un máximo, y compara el tiempo y la separación con la Tabla {#}.",
"Prelab answers, labeled data and CSV files, fits and residuals, turning point and free fall results, stage area calculations and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.":
  "Respuestas del prelaboratorio, datos rotulados y archivos CSV, ajustes y residuos, resultados del punto de retorno y de la caída libre, cálculos de áreas por etapas y las respuestas a las preguntas (y de Incertidumbre y Con cálculo, si se asignan). Identifica los datos simulados.",
"Acceleration":
  "Aceleración",
"Constant term of the fit":
  "Término constante del ajuste",
"Linear coefficient of the fit":
  "Coeficiente lineal del ajuste",
"Quadratic coefficient of the fit":
  "Coeficiente cuadrático del ajuste",
"Velocity":
  "Velocidad",
"Velocity at t = {#}":
  "Velocidad en t = {#}",
"Position at t = {#}":
  "Posición en t = {#}",
"Position of car A":
  "Posición del auto A",
"Position of car B":
  "Posición del auto B",
"Height (upward positive)":
  "Altura (positiva hacia arriba)",
"Motion Graphs":
  "Gráficas de movimiento",
"Prelab answers, labeled data and CSV files, fits and residuals, turning point and free fall results with uncertainty, stage area calculations and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, datos etiquetados y archivos CSV, ajustes y residuos, los resultados del punto de retorno y de la caída libre con incertidumbre, los cálculos de áreas de las etapas y las respuestas a las preguntas. Identifica los datos simulados.",
"<strong>Two cars.</strong> Use the <strong>Two cars</strong> setup as it opens. From the two cars’ starting positions, velocities and accelerations (under Motion and Car B; About this setup gives the answers, so leave it closed), predict when and where car A draws level with car B, and when the gap between them is largest and how large it is. Write \\(x_A(t)\\) and \\(x_B(t)\\) and solve \\(x_A = x_B\\); explain why the gap is largest exactly when the two velocities are equal. Then turn Blind off and step the time marker through the run to check, with the <strong>Gap x_B − x_A</strong> and <strong>Side by side</strong> readouts. Record both in Table {#}.":
  "<strong>Dos autos.</strong> Usa la configuración <strong>Dos autos</strong> tal como abre. A partir de las posiciones iniciales, velocidades y aceleraciones de los dos autos (bajo Movimiento y Auto B; Acerca de esta configuración da las respuestas, así que déjalo cerrado), predice cuándo y dónde el auto A alcanza al auto B, y cuándo es mayor la distancia entre ellos y qué tan grande es. Escribe \\(x_A(t)\\) y \\(x_B(t)\\) y resuelve \\(x_A = x_B\\); explica por qué la distancia es mayor justo cuando las dos velocidades son iguales. Luego desactiva A ciegas y avanza el marcador de tiempo a lo largo de la corrida para comprobarlo, con las lecturas <strong>Separación x_B − x_A</strong> y <strong>Lado a lado</strong>. Registra ambas en la tabla {#}.",
"Why can position and velocity be continuous when acceleration changes abruptly between stages?":
  "¿Por qué la posición y la velocidad pueden ser continuas cuando la aceleración cambia bruscamente entre etapas?",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"<strong>Constant acceleration.</strong> On a real track, measure at least eight positions and times during a single interval of uniform acceleration. Include points on both sides of a turning point if the cart reverses. In the simulation, use the assigned turning motion setup. Keep a record of your settings before hiding predictions. Fit position against time and use your fit to predict the turning time and position.":
  "<strong>Aceleración constante.</strong> En un riel real, mide al menos ocho posiciones y tiempos durante un solo intervalo de aceleración uniforme. Incluye puntos a ambos lados de un punto de retorno si el carrito se regresa. En la simulación, usa la configuración de movimiento con retorno asignada. Anota tus ajustes antes de ocultar las predicciones. Ajusta la posición en función del tiempo y usa tu ajuste para predecir el tiempo y la posición del retorno.",
"<strong>Several stages.</strong> Make a run that speeds up, cruises and slows to rest. Before revealing the velocity graph, sketch it from the position graph. Measure the displacement in each stage. Compare their sum with the signed area under velocity. Do not fit one parabola across all three stages.":
  "<strong>Varias etapas.</strong> Haz una corrida que acelere, avance a velocidad constante y frene hasta el reposo. Antes de revelar la gráfica de velocidad, dibújala a partir de la gráfica de posición. Mide el desplazamiento en cada etapa. Compara su suma con el área con signo bajo la velocidad. No ajustes una sola parábola a las tres etapas.",
"<strong>Free fall.</strong> Toss a ball vertically, or use the virtual setup. Record at least eight points from launch to just before landing, with points on both sides of the highest point. Fit height against time. Infer \\(g\\), initial upward speed, time to the highest point and maximum height. Treat the motion after landing separately.":
  "<strong>Caída libre.</strong> Lanza una pelota verticalmente, o usa la configuración virtual. Registra al menos ocho puntos desde el lanzamiento hasta justo antes de caer, con puntos a ambos lados del punto más alto. Ajusta la altura en función del tiempo. Infiere \\(g\\), la rapidez inicial hacia arriba, el tiempo hasta el punto más alto y la altura máxima. Trata por separado el movimiento después de caer.",
"<strong>Graph matching.</strong> Walk in front of a real detector, or move the virtual cart, to match a target position graph. Describe the required direction and speed before starting. Repeat the same target once; then try a velocity target. Explain the difference between matching a height on a position graph and matching a height on a velocity graph.":
  "<strong>Seguir una gráfica.</strong> Camina frente a un detector real, o mueve el carrito virtual, para seguir una gráfica de posición objetivo. Describe la dirección y la rapidez necesarias antes de empezar. Repite el mismo objetivo una vez; luego intenta un objetivo de velocidad. Explica la diferencia entre seguir una altura en una gráfica de posición y seguir una altura en una gráfica de velocidad.",
"<strong>Using the virtual apparatus.</strong> For each setup, write down its stage settings first, then hide the predictions and answers before you take data (hiding them hides the settings too). Move the time marker to each time you want and record the position there. Use the slowing down and turning around setup for constant acceleration, the stop and go setup for the stages and the ball thrown up setup for free fall; the vertical run’s height goes in the CSV column":
  "<strong>Uso del aparato virtual.</strong> Para cada configuración, anota primero los ajustes de sus etapas, y luego oculta las predicciones y respuestas antes de tomar datos (ocultarlas también oculta los ajustes). Mueve el marcador de tiempo a cada tiempo que quieras y registra ahí la posición. Usa la configuración Frenando y dando la vuelta para la aceleración constante, la configuración Arrancar y parar para las etapas y la configuración Pelota lanzada hacia arriba para la caída libre; la altura de la corrida vertical va en la columna del CSV",
". Send each run to the worksheet before you clear the readings, or the runs mix. Show the tangent lines and the shaded area only after your predictions. For graph matching, keep the same target for the repeat, record each score with its units, and finish with a velocity target. Graph matching is an interpretation task; the parabola fit is meant for constant acceleration, not for an arbitrary walk.":
  ". Envía cada corrida a la hoja de trabajo antes de borrar las lecturas, o las corridas se mezclan. Muestra las rectas tangentes y el área sombreada solo después de tus predicciones. Para seguir una gráfica, mantén el mismo objetivo en la repetición, registra cada puntaje con sus unidades, y termina con un objetivo de velocidad. Seguir una gráfica es una tarea de interpretación; el ajuste de la parábola es para aceleración constante, no para una caminata arbitraria.",
"<strong>Two cars.</strong> Use the Two cars setup as it opens. From the two cars’ starting positions, velocities and accelerations, predict when and where car A draws level with car B, and when the gap between them is largest and how large it is. Then step the time marker through the run to check. Record both in Table {#}.":
  "<strong>Dos autos.</strong> Usa la configuración Dos autos tal como abre. A partir de las posiciones iniciales, velocidades y aceleraciones de los dos autos, predice cuándo y dónde el auto A alcanza al auto B, y cuándo es mayor la distancia entre ellos y qué tan grande es. Luego avanza el marcador de tiempo a lo largo de la corrida para comprobarlo. Registra ambas cosas en la tabla {#}.",
"<strong>Draw a graph.</strong> Draw a velocity graph shaped like a triangle: from rest, rising steadily to {#} m/s at {#} s and falling steadily back to rest at {#} s, starting from the start position the demo gives. Before looking at the other graphs, predict the acceleration on each half from the slope, and the position at {#} s from the area under the velocity graph. Then check both with the demo. Record them in Table {#}.":
  "<strong>Dibuja una gráfica.</strong> Dibuja una gráfica de velocidad en forma de triángulo: desde el reposo, subiendo de forma constante hasta {#} m/s a los {#} s y bajando de forma constante de regreso al reposo a los {#} s, partiendo de la posición inicial que da la demo. Antes de mirar las otras gráficas, predice la aceleración en cada mitad a partir de la pendiente, y la posición a los {#} s a partir del área bajo la gráfica de velocidad. Luego comprueba ambas con la demo. Regístralas en la tabla {#}.",
"Add a copy of this table for each run (pressing <strong>Clear</strong> in the demo before the next run does this when you export), and note its setup and settings. For graph matching, keep the target sketch and both trial scores.":
  "Agrega una copia de esta tabla para cada corrida (pulsar <strong>Borrar</strong> en la demo antes de la siguiente corrida lo hace al exportar), y anota su configuración y sus ajustes. Para seguir una gráfica, conserva el dibujo del objetivo y los puntajes de ambos intentos.",
"<strong>Table {#}: two cars and a drawn graph.</strong>":
  "<strong>Tabla {#}: dos autos y una gráfica dibujada.</strong>",
"Interpret the two graph matching trials. Discuss whether the score improved and what part of the motion remained difficult. Do not compare scores from different targets or different graph types as if they measured identical tasks.":
  "Interpreta los dos intentos de seguir una gráfica. Comenta si el puntaje mejoró y qué parte del movimiento siguió siendo difícil. No compares puntajes de objetivos distintos o de tipos de gráfica distintos como si midieran tareas idénticas.",
"For the two cars, write \\(x_A(t)\\) and \\(x_B(t)\\) and solve \\(x_A = x_B\\). Why is the gap largest exactly when the two velocities are equal?":
  "Para los dos autos, escribe \\(x_A(t)\\) y \\(x_B(t)\\) y resuelve \\(x_A = x_B\\). ¿Por qué la distancia entre ellos es máxima exactamente cuando las dos velocidades son iguales?",
"For the drawn triangle, explain how the shape of the position graph follows from the velocity graph: where is it curving up, where curving down, and where is it steepest?":
  "Para el triángulo dibujado, explica cómo la forma de la gráfica de posición se deduce de la gráfica de velocidad: ¿dónde se curva hacia arriba, dónde hacia abajo, y dónde tiene más pendiente?",
"Captured time and position are rounded to {#} s and {#} m. Estimate how those steps affect slopes, especially over short intervals. Use residuals and the spread from reasonable point selections; a small fit error does not include every source of error. Real measurements also involve detector calibration, sampling and drag. Repeating exact simulated points does not create independent random trials. Graph matching scores describe tracking performance, not uncertainty in \\(g\\).":
  "El tiempo y la posición capturados se redondean a {#} s y {#} m. Estima cómo afectan esos pasos a las pendientes, sobre todo en intervalos cortos. Usa los residuos y la dispersión de selecciones razonables de puntos; un error de ajuste pequeño no incluye todas las fuentes de error. Las mediciones reales también implican la calibración del detector, el muestreo y el arrastre. Repetir puntos simulados exactos no crea ensayos aleatorios independientes. Los puntajes de seguir una gráfica describen qué tan bien se siguió el objetivo, no la incertidumbre de \\(g\\).",
"At a turning point, which of position, velocity and acceleration must be zero?":
  "En un punto de retorno, ¿cuál de la posición, la velocidad y la aceleración debe ser cero?",
"When does area under velocity equal distance traveled?":
  "¿Cuándo es el área bajo la velocidad igual a la distancia recorrida?",
"Why is a flat velocity target a different instruction from a flat position target?":
  "¿Por qué un objetivo de velocidad plano es una instrucción distinta de un objetivo de posición plano?",
"Prelab answers, labeled data and CSV files, fits and residuals, turning point and free fall results with uncertainty, stage area calculations, graph matching sketches and scores, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, datos etiquetados y archivos CSV, ajustes y residuos, los resultados del punto de retorno y de la caída libre con incertidumbre, los cálculos de áreas de las etapas, los dibujos y puntajes de seguir una gráfica, y respuestas a las preguntas. Identifica los datos simulados."
});
