/* ws/atwood in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/atwood', {
"t for {#} m (s)":
  "t para {#} m (s)",
"Tension read T (N)":
  "Tensión leída T (N)",
"Atwood’s Machine: Measuring g | VirtualDemos":
  "La máquina de Atwood: medición de g | VirtualDemos",
"Atwood’s Machine: Measuring g":
  "La máquina de Atwood: medición de g",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §§{#}, {#}, {#}, {#} and {#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §§{#}, {#}, {#}, {#} y {#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Atwood’s machine (the worksheet opens the demo in it). The other setups belong to the friction worksheet.":
  "<strong>Configuraciones en la demo:</strong> Máquina de Atwood (la hoja de trabajo abre la demo en ella). Las otras configuraciones pertenecen a la hoja de trabajo de fricción.",
"Two masses hang from one string over a pulley: m on the left, m₂ on the right. The string does not stretch and has no mass; the pulley has no mass and no friction. Each mass can be set from {#} to {#} kg (m) or up to {#} kg (m₂) in steps of {#} kg.":
  "Dos masas cuelgan de una misma cuerda que pasa por una polea: m a la izquierda, m₂ a la derecha. La cuerda no se estira y no tiene masa; la polea no tiene masa ni fricción. Cada masa se puede fijar de {#} a {#} kg (m) o hasta {#} kg (m₂) en pasos de {#} kg.",
"<strong>Release at the top mark</strong> starts the masses from rest and times a run of {#} m (to {#} s). Capture stores m, m₂ and that time; \\(a = 2d/t^2\\) is worked out from your time.":
  "<strong>Soltar en la marca superior</strong> pone en marcha las masas desde el reposo y mide el tiempo de un recorrido de {#} m (a {#} s). Capturar guarda m, m₂ y ese tiempo; \\(a = 2d/t^2\\) se calcula a partir de tu tiempo.",
"The readouts give the tension and the acceleration. Blind hides every force size and the acceleration; the timer, the masses and the force directions stay.":
  "Las lecturas dan la tensión y la aceleración. A ciegas oculta la magnitud de cada fuerza y la aceleración; el cronómetro, las masas y las direcciones de las fuerzas permanecen.",
"The demo uses \\(g = 9.81\\ \\mathrm{m/s^2}\\). Your job is to measure it.":
  "La demo usa \\(g = 9.81\\ \\mathrm{m/s^2}\\). Tu trabajo es medirla.",
"Measure the acceleration due to gravity with an Atwood’s machine, test how the acceleration depends on the difference and the sum of the two masses, and check the tension in the string.":
  "Mide la aceleración de la gravedad con una máquina de Atwood, pon a prueba cómo depende la aceleración de la diferencia y de la suma de las dos masas, y comprueba la tensión en la cuerda.",
"Take the direction in which m₂ falls as positive for both masses (m rises as m₂ falls, since the string does not stretch). With tension T in the string, Newton’s second law for each mass gives":
  "Toma como positiva para ambas masas la dirección en la que cae m₂ (m sube mientras m₂ baja, ya que la cuerda no se estira). Con tensión T en la cuerda, la segunda ley de Newton para cada masa da",
"\\[\\begin{gathered} m_2 g - T = m_2 a, \\\\[4pt] T - m g = m a. \\end{gathered}\\]":
  "\\[\\begin{gathered} m_2 g - T = m_2 a, \\\\[4pt] T - m g = m a. \\end{gathered}\\]",
"Adding the two equations removes T:":
  "Sumar las dos ecuaciones elimina T:",
"\\[a = \\frac{m_2 - m}{m + m_2}\\,g, \\qquad T = \\frac{2\\,m\\,m_2}{m + m_2}\\,g.\\]":
  "\\[a = \\frac{m_2 - m}{m + m_2}\\,g, \\qquad T = \\frac{2\\,m\\,m_2}{m + m_2}\\,g.\\]",
"The acceleration is g times the fraction \\(x = (m_2 - m)/(m + m_2)\\), so a graph of a against x is a straight line through the origin with slope g. Making the two masses nearly equal makes a small and the run slow enough to time well, which is why George Atwood built the machine in {#} to study motion under gravity.":
  "La aceleración es g por la fracción \\(x = (m_2 - m)/(m + m_2)\\), así que una gráfica de a en función de x es una recta que pasa por el origen con pendiente g. Hacer las dos masas casi iguales hace que a sea pequeña y que el recorrido sea lo bastante lento para medirlo bien, por eso George Atwood construyó la máquina en {#} para estudiar el movimiento bajo la gravedad.",
"A run of distance d from rest takes time t, so \\(a = 2d/t^2\\).":
  "Un recorrido de distancia d desde el reposo tarda un tiempo t, así que \\(a = 2d/t^2\\).",
"A real pulley turns, so some of the falling mass’s work goes into its rotation. A pulley of moment of inertia I and radius r adds \\(I/r^2\\) to the mass being accelerated (§{#}), and friction at its axle subtracts a force f from the driving force:":
  "Una polea real gira, así que parte del trabajo de la masa que cae se va a su rotación. Una polea de momento de inercia I y radio r agrega \\(I/r^2\\) a la masa acelerada (§{#}), y la fricción en su eje resta una fuerza f a la fuerza impulsora:",
"\\[a = \\frac{(m_2 - m)\\,g - f}{m + m_2 + I/r^2}.\\]":
  "\\[a = \\frac{(m_2 - m)\\,g - f}{m + m_2 + I/r^2}.\\]",
"The virtual pulley has I = {#} and f = {#}, so your fits test whether the apparatus is ideal.":
  "La polea virtual tiene I = {#} y f = {#}, así que tus ajustes ponen a prueba si el aparato es ideal.",
"For m = {#} kg and m₂ = {#} kg, work out a, T and the time for a {#} m run from rest. Compare T with the two weights.":
  "Para m = {#} kg y m₂ = {#} kg, calcula a, T y el tiempo de un recorrido de {#} m desde el reposo. Compara T con los dos pesos.",
"Draw a free body diagram for each mass while they move. Why is T not equal to m₂g?":
  "Dibuja un diagrama de cuerpo libre para cada masa mientras se mueven. ¿Por qué T no es igual a m₂g?",
"If both masses are doubled, what happens to a? To T?":
  "Si se duplican ambas masas, ¿qué le pasa a a? ¿Y a T?",
"On a real bench, put a pad under the falling mass, keep hands and feet out from under it and stop the masses before the lower one hits the floor. Keep the total mass well below the pulley’s rated load.":
  "En una mesa real, pon un cojín debajo de la masa que cae, mantén las manos y los pies fuera de su camino y detén las masas antes de que la de abajo choque con el piso. Mantén la masa total muy por debajo de la carga nominal de la polea.",
"<strong>Part {#}: acceleration against the mass fraction.</strong> Keep m₂ the heavier mass so that it falls. Hold the total mass m + m₂ at {#} kg and time a {#} m run from rest for four splits: {#} and {#} kg, {#} and {#} kg, {#} and {#} kg, {#} and {#} kg. Then hold the total at {#} kg and time three more: {#} and {#} kg, {#} and {#} kg, {#} and {#} kg. Start each run from rest at the top mark; a setting changed during a run spoils that run. Send the seven runs to the worksheet together.":
  "<strong>Parte {#}: aceleración en función de la fracción de masa.</strong> Mantén m₂ como la masa más pesada para que caiga. Mantén la masa total m + m₂ en {#} kg y mide el tiempo de un recorrido de {#} m desde el reposo para cuatro repartos: {#} y {#} kg, {#} y {#} kg, {#} y {#} kg, {#} y {#} kg. Luego mantén el total en {#} kg y mide tres más: {#} y {#} kg, {#} y {#} kg, {#} y {#} kg. Empieza cada recorrido desde el reposo en la marca superior; un ajuste cambiado durante un recorrido arruina ese recorrido. Envía los siete recorridos juntos a la hoja de trabajo.",
"<strong>Part {#}: acceleration against the total mass.</strong> Clear the readings first, so these runs start a new table. Keep the difference m₂ − m at {#} kg and time a {#} m run for five totals: {#} and {#} kg, {#} and {#} kg, {#} and {#} kg, {#} and {#} kg, {#} and {#} kg. Send the five runs to the worksheet.":
  "<strong>Parte {#}: aceleración en función de la masa total.</strong> Borra primero las lecturas, para que estos recorridos empiecen una tabla nueva. Mantén la diferencia m₂ − m en {#} kg y mide el tiempo de un recorrido de {#} m para cinco totales: {#} y {#} kg, {#} y {#} kg, {#} y {#} kg, {#} y {#} kg, {#} y {#} kg. Envía los cinco recorridos a la hoja de trabajo.",
"<strong>Part {#}: tension.</strong> Turn Blind off. Record the tension the demo reads while the masses move for three pairs: the Before the lab case ({#} and {#} kg), {#} and {#} kg from Part {#}, and {#} and {#} kg from Part {#}. Compare each tension with the two weights.":
  "<strong>Parte {#}: tensión.</strong> Desactiva A ciegas. Registra la tensión que lee la demo mientras se mueven las masas para tres pares: el caso de Antes del laboratorio ({#} y {#} kg), {#} y {#} kg de la Parte {#}, y {#} y {#} kg de la Parte {#}. Compara cada tensión con los dos pesos.",
"<span>D</span>\\(t\\) for {#} m (s)":
  "<span>D</span>\\(t\\) para {#} m (s)",
"m_2 (kg), row {#}":
  "m_2 (kg), fila {#}",
"t for {#} m (s), row {#}":
  "t para {#} m (s), fila {#}",
"a = 2d/t^{#} (m/s²), row {#}":
  "a = 2d/t^{#} (m/s²), fila {#}",
"x = (m_2 - m)/(m + m_2), row {#}":
  "x = (m_2 - m)/(m + m_2), fila {#}",
"<strong>Table {#}: fixed difference, m₂ − m = {#} kg.</strong>":
  "<strong>Tabla {#}: diferencia fija, m₂ − m = {#} kg.</strong>",
"m + m_2 (kg), row {#}":
  "m + m_2 (kg), fila {#}",
"{#}/a (s²/m), row {#}":
  "{#}/a (s²/m), fila {#}",
"<strong>Table {#}: tension.</strong>":
  "<strong>Tabla {#}: tensión.</strong>",
"<span>D</span>Tension read \\(T\\) (N)":
  "<span>D</span>Tensión leída \\(T\\) (N)",
"Tension read T (N), row {#}":
  "Tensión leída T (N), fila {#}",
"{#} m m_2 g/(m + m_2) (N), row {#}":
  "{#} m m_2 g/(m + m_2) (N), fila {#}",
"m g (N), row {#}":
  "m g (N), fila {#}",
"m_2 g (N), row {#}":
  "m_2 g (N), fila {#}",
"Plot a against x for Table {#}, with a free intercept. Report g from the slope with its standard error, and the intercept with its standard error. Do the runs at {#} kg and {#} kg fall on the same line? What does that tell you about the total mass?":
  "Grafica a en función de x para la Tabla {#}, con ordenada al origen libre. Informa g a partir de la pendiente con su error estándar, y la ordenada al origen con su error estándar. ¿Caen los recorridos de {#} kg y {#} kg sobre la misma recta? ¿Qué te dice eso sobre la masa total?",
"Plot {#}/a against m + m₂ for Table {#}. From the Background, {#}/a = (m + m₂ + I/r²)/((m₂ − m) g) when f = {#}. Find g from the slope and the pulley’s I/r² from the intercept. Is the intercept zero within its uncertainty?":
  "Grafica {#}/a en función de m + m₂ para la Tabla {#}. Según el Fundamento, {#}/a = (m + m₂ + I/r²)/((m₂ − m) g) cuando f = {#}. Encuentra g a partir de la pendiente y el I/r² de la polea a partir de la ordenada al origen. ¿Es cero la ordenada al origen dentro de su incertidumbre?",
"Compare each tension in Table {#} with the prediction. Explain why T lies between mg and m₂g.":
  "Compara cada tensión de la Tabla {#} con la predicción. Explica por qué T queda entre mg y m₂g.",
"Compare your two values of g with {#} m/s². Which part gives the smaller uncertainty, and why?":
  "Compara tus dos valores de g con {#} m/s². ¿Qué parte da la menor incertidumbre, y por qué?",
"The timer rounds to {#} s and the run is {#} m. Since \\(a = 2d/t^2\\), the fractional uncertainty in a is twice the fractional uncertainty in t, so the fast runs (large x) are the least precise. Find that fraction for your fastest and slowest runs and compare it with the scatter about your fit. Repeating an unchanged run in the simulation gives the same time, so the scatter here comes only from rounding; on a real bench, the reaction time of a hand timer would dominate.":
  "El cronómetro redondea a {#} s y el recorrido es de {#} m. Como \\(a = 2d/t^2\\), la incertidumbre fraccional de a es el doble de la incertidumbre fraccional de t, así que los recorridos rápidos (x grande) son los menos precisos. Encuentra esa fracción para tus recorridos más rápido y más lento y compárala con la dispersión alrededor de tu ajuste. Repetir sin cambios un recorrido en la simulación da el mismo tiempo, así que aquí la dispersión viene solo del redondeo; en una mesa real dominaría el tiempo de reacción de un cronómetro manual.",
"Why does an Atwood’s machine measure g more easily than timing a mass dropped freely over the same {#} m?":
  "¿Por qué una máquina de Atwood mide g más fácilmente que medir el tiempo de una masa que cae libremente los mismos {#} m?",
"A real pulley has I/r² = {#} kg. How much would that change a for {#} and {#} kg, and which of your graphs would show it?":
  "Una polea real tiene I/r² = {#} kg. ¿Cuánto cambiaría eso a para {#} y {#} kg, y cuál de tus gráficas lo mostraría?",
"Axle friction f = {#} N is added to an ideal pulley. Which graph would show it, and as what?":
  "Se agrega una fricción en el eje f = {#} N a una polea ideal. ¿Qué gráfica lo mostraría, y como qué?",
"With m₂ much larger than m, what does a approach? With m₂ = m?":
  "Con m₂ mucho mayor que m, ¿a qué se acerca a? ¿Y con m₂ = m?",
"Prelab answers, the three tables and the CSV, both graphs with fits and residuals, your two values of g with uncertainty, I/r² from Part {#}, the tension comparison and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las tres tablas y el CSV, ambas gráficas con ajustes y residuos, tus dos valores de g con incertidumbre, I/r² de la Parte {#}, la comparación de tensiones y las respuestas a las preguntas. Identifica los datos simulados.",
"Moment of inertia of the pulley":
  "Momento de inercia de la polea",
"Tension in the string":
  "Tensión en la cuerda",
"Acceleration of the masses (m₂ falling positive)":
  "Aceleración de las masas (m₂ cayendo positiva)",
"Distance of the timed run":
  "Distancia del recorrido medido",
"Friction force at the pulley's axle, referred to the string":
  "Fuerza de fricción en el eje de la polea, referida a la cuerda",
"Mass on the left (rises when m₂ is heavier)":
  "Masa a la izquierda (sube cuando m₂ es más pesada)",
"Mass on the right":
  "Masa a la derecha",
"Radius of the pulley":
  "Radio de la polea",
"Time for the run of distance d from rest":
  "Tiempo del recorrido de distancia d desde el reposo",
"Mass fraction (m₂ − m)/(m + m₂)":
  "Fracción de masa (m₂ − m)/(m + m₂)",
"Forces and Friction (Atwood's machine)":
  "Fuerzas y fricción (Máquina de Atwood)"
});
