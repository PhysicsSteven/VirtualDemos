/* ws/double-pendulum in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/double-pendulum', {
"Rod length L (m)":
  "Longitud de la varilla L (m)",
"Measured period T (s)":
  "Periodo medido T (s)",
"log_10δ":
  "log_10δ",
"Time to separate t_d (s)":
  "Tiempo de separación t_d (s)",
"Normal Modes and Chaos in a Double Pendulum | VirtualDemos":
  "Modos normales y caos en un péndulo doble | VirtualDemos",
"Normal Modes and Chaos in a Double Pendulum":
  "Modos normales y caos en un péndulo doble",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (small angle pendulums; the double pendulum’s normal modes and chaos go beyond the textbook). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (péndulos con ángulos pequeños; los modos normales y el caos del péndulo doble van más allá del libro). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Normal mode {#}; Normal mode {#}; Double pendulum chaos; Butterfly effect: {#} copies; Poincaré section. These are in the <strong>Double pendulum</strong> scene of the Pendulums demo (the link above opens it); the <strong>Exact period</strong> scene has the simple pendulum at any amplitude, and the <strong>Photogate lab</strong> scene goes with the Measuring Gravity with a Pendulum worksheet.":
  "<strong>Configuraciones en la demo:</strong> Modo normal {#}; Modo normal {#}; Caos del péndulo doble; Efecto mariposa: {#} copias; Sección de Poincaré. Están en la escena <strong>Péndulo doble</strong> de la demo Péndulos (el enlace de arriba la abre); la escena <strong>Periodo exacto</strong> tiene el péndulo simple a cualquier amplitud, y la escena <strong>Laboratorio con fotocompuerta</strong> va con la hoja de trabajo Medición de la gravedad con un péndulo.",
"The pendulum is drawn on the left, the angles against time at the top right, and below that the path in the \\((\\theta_1, \\theta_2)\\) plane, the separation of the copies, or a Poincaré section. Drag a bob to set its angle, or drag the grip in the middle of a rod to change its length.":
  "El péndulo se dibuja a la izquierda, los ángulos en función del tiempo arriba a la derecha, y debajo la trayectoria en el plano \\((\\theta_1, \\theta_2)\\), la separación de las copias o una sección de Poincaré. Arrastra una lenteja para fijar su ángulo, o arrastra el agarre en el centro de una varilla para cambiar su longitud.",
"Mode {#} and Mode {#} (under Small oscillations) start the pendulum from rest in that normal mode, with the larger of the two angles equal to the mode amplitude. Changing a mass, a length or \\(g\\) carries the present motion on with the new value, so start the mode again after each change.":
  "Modo {#} y Modo {#} (en Oscilaciones pequeñas) inician el péndulo desde el reposo en ese modo normal, con el mayor de los dos ángulos igual a la amplitud del modo. Cambiar una masa, una longitud o \\(g\\) continúa el movimiento actual con el nuevo valor, así que vuelve a iniciar el modo después de cada cambio.",
"The measured \\(\\theta_1\\) period is the mean time between the last few times the upper rod passes straight down in the same direction. It appears once those times agree to {#}%, which takes a few swings.":
  "El periodo medido de \\(\\theta_1\\) es el tiempo medio entre las últimas veces que la varilla superior pasa por la vertical hacia abajo en el mismo sentido. Aparece cuando esos tiempos coinciden con {#}%, lo que toma unas cuantas oscilaciones.",
"Copies (under Copies and separation) run the same pendulum several times at once; copy \\(k\\) starts with the upper rod turned \\(k\\delta\\) further than copy {#}. The readout gives the time at which copy {#} first gets a distance \\(d = 0.1\\) away from copy {#} (see the Background for \\(d\\)), and an estimate of the Lyapunov exponent \\(\\lambda\\).":
  "Las copias (en Copias y separación) corren el mismo péndulo varias veces a la vez; la copia \\(k\\) empieza con la varilla superior girada \\(k\\delta\\) más que la copia {#}. La lectura da el tiempo en que la copia {#} llega por primera vez a una distancia \\(d = 0.1\\) de la copia {#} (ver la sección Fondo para \\(d\\)), y una estimación del exponente de Lyapunov \\(\\lambda\\).",
"Record reading stores the settings, how the run started, the measured period, \\(\\log_{10}\\delta\\) and the separation time. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda los ajustes, cómo empezó la corrida, el periodo medido, \\(\\log_{10}\\delta\\) y el tiempo de separación. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar inicia una serie nueva, que va a una nueva copia de la tabla.",
"Point masses on rigid massless rods, frictionless pivots, no air drag, \\(g = 9.81\\ \\text{m/s}^2\\). The motion comes from the exact nonlinear equations of motion, integrated with an adaptive Dormand–Prince method at a tolerance of \\(10^{-11}\\); the energy readout shows how little the total energy drifts.":
  "Masas puntuales en varillas rígidas sin masa, pivotes sin fricción, sin resistencia del aire, \\(g = 9.81\\ \\text{m/s}^2\\). El movimiento sale de las ecuaciones de movimiento no lineales exactas, integradas con un método adaptativo de Dormand–Prince con una tolerancia de \\(10^{-11}\\); la lectura de energía muestra qué tan poco se desvía la energía total.",
"Measure the two normal mode frequencies of a double pendulum at small amplitude and compare them with theory; then measure how fast two nearly identical chaotic swings separate.":
  "Mide las dos frecuencias de los modos normales de un péndulo doble a pequeña amplitud y compáralas con la teoría; luego mide qué tan rápido se separan dos oscilaciones caóticas casi idénticas.",
"A simple pendulum of length \\(L\\) swinging through small angles has \\(\\omega^2 = g/L\\) (§{#}). Hang a second pendulum from the first and, for small angles, the two angles obey two coupled linear equations. Every small motion is then a sum of two <strong>normal modes</strong>, in each of which both rods swing with the same frequency. For two equal masses on two rods of equal length \\(L\\),":
  "Un péndulo simple de longitud \\(L\\) que oscila con ángulos pequeños tiene \\(\\omega^2 = g/L\\) (§{#}). Cuelga un segundo péndulo del primero y, para ángulos pequeños, los dos ángulos obedecen dos ecuaciones lineales acopladas. Todo movimiento pequeño es entonces una suma de dos <strong>modos normales</strong>, en cada uno de los cuales ambas varillas oscilan con la misma frecuencia. Para dos masas iguales en dos varillas de igual longitud \\(L\\),",
"\\[\\omega_1^2 = (2 - \\sqrt2)\\,\\frac{g}{L},\\quad \\frac{\\theta_2}{\\theta_1} = +\\sqrt2;\\qquad \\omega_2^2 = (2 + \\sqrt2)\\,\\frac{g}{L},\\quad \\frac{\\theta_2}{\\theta_1} = -\\sqrt2 .\\]":
  "\\[\\omega_1^2 = (2 - \\sqrt2)\\,\\frac{g}{L},\\quad \\frac{\\theta_2}{\\theta_1} = +\\sqrt2;\\qquad \\omega_2^2 = (2 + \\sqrt2)\\,\\frac{g}{L},\\quad \\frac{\\theta_2}{\\theta_1} = -\\sqrt2 .\\]",
"In mode {#} the rods swing together; in mode {#} they swing opposite ways, faster. Both \\(\\omega^2\\) are in proportion to \\(1/L\\). A period \\(T\\) gives \\(\\omega = 2\\pi/T\\).":
  "En el modo {#} las varillas oscilan juntas; en el modo {#} oscilan en sentidos opuestos, más rápido. Ambas \\(\\omega^2\\) son proporcionales a \\(1/L\\). Un periodo \\(T\\) da \\(\\omega = 2\\pi/T\\).",
"At large angles the equations are nonlinear and the motion can be <strong>chaotic</strong>: two starts that differ by a tiny \\(\\delta\\) separate roughly exponentially, \\(d \\approx \\delta\\,e^{\\lambda t}\\), where \\(\\lambda\\) is the Lyapunov exponent. The demo measures the distance between two swings as":
  "Con ángulos grandes las ecuaciones son no lineales y el movimiento puede ser <strong>caótico</strong>: dos inicios que difieren en un \\(\\delta\\) diminuto se separan aproximadamente de forma exponencial, \\(d \\approx \\delta\\,e^{\\lambda t}\\), donde \\(\\lambda\\) es el exponente de Lyapunov. La demo mide la distancia entre dos oscilaciones como",
"\\[d^2 = \\Delta\\theta_1^2 + \\Delta\\theta_2^2 + \\frac{L_1}{g}\\left(\\Delta\\omega_1^2 + \\Delta\\omega_2^2\\right),\\]":
  "\\[d^2 = \\Delta\\theta_1^2 + \\Delta\\theta_2^2 + \\frac{L_1}{g}\\left(\\Delta\\omega_1^2 + \\Delta\\omega_2^2\\right),\\]",
"with angles in radians. If the separation grows exponentially, it reaches a fixed size \\(D\\) at":
  "con los ángulos en radianes. Si la separación crece exponencialmente, alcanza un tamaño fijo \\(D\\) en",
"\\[t_d = \\frac{1}{\\lambda}\\ln\\frac{D}{\\delta} = \\frac{\\ln D}{\\lambda} - \\frac{\\ln 10}{\\lambda}\\,\\log_{10}\\delta .\\]":
  "\\[t_d = \\frac{1}{\\lambda}\\ln\\frac{D}{\\delta} = \\frac{\\ln D}{\\lambda} - \\frac{\\ln 10}{\\lambda}\\,\\log_{10}\\delta .\\]",
"For equal masses and rods of {#} m, calculate the periods of the two normal modes.":
  "Para masas iguales y varillas de {#} m, calcula los periodos de los dos modos normales.",
"Why does the lower bob swing \\(\\sqrt2\\) times as far as the upper one in mode {#}? Describe what the two bobs do in mode {#}.":
  "¿Por qué la lenteja inferior oscila \\(\\sqrt2\\) veces más lejos que la superior en el modo {#}? Describe qué hacen las dos lentejas en el modo {#}.",
"Predict how the period of each mode changes if both rods are made four times as long.":
  "Predice cómo cambia el periodo de cada modo si ambas varillas se hacen cuatro veces más largas.",
"If \\(\\lambda = 1.5\\ \\text{s}^{-1}\\), by what factor does a small difference grow in {#} s? How much better would you have to know the starting angle to predict the motion {#} s further ahead?":
  "Si \\(\\lambda = 1.5\\ \\text{s}^{-1}\\), ¿en qué factor crece una diferencia pequeña en {#} s? ¿Cuánto mejor tendrías que conocer el ángulo inicial para predecir el movimiento {#} s más adelante?",
"There is no physical apparatus. A real double pendulum swings fast and unpredictably: keep faces and hands well out of its reach.":
  "No hay aparato físico. Un péndulo doble real oscila rápido y de forma impredecible: mantén la cara y las manos bien fuera de su alcance.",
"Keep both masses at {#} kg and \\(g\\) at Earth’s value throughout. Set the mode amplitude to {#}°.":
  "Mantén ambas masas en {#} kg y \\(g\\) en el valor de la Tierra todo el tiempo. Fija la amplitud del modo en {#}°.",
"<strong>Part {#}: mode {#}.</strong> With both rods the same length \\(L\\), start the pendulum in mode {#} and record its measured period for \\(L\\) = {#}, {#}, {#}, {#} and {#} m. Start the mode again after each change of length, and wait for the measured period to appear. Send the series to the worksheet, then clear the demo’s readings.":
  "<strong>Parte {#}: modo {#}.</strong> Con ambas varillas de la misma longitud \\(L\\), inicia el péndulo en el modo {#} y registra su periodo medido para \\(L\\) = {#}, {#}, {#}, {#} y {#} m. Vuelve a iniciar el modo después de cada cambio de longitud, y espera a que aparezca el periodo medido. Envía la serie a la hoja y luego borra las lecturas de la demo.",
"<strong>Part {#}: mode {#}.</strong> Repeat Part {#} in mode {#}. Send it to the worksheet, then clear the readings, so it gets a new copy of the table.":
  "<strong>Parte {#}: modo {#}.</strong> Repite la Parte {#} en el modo {#}. Envíala a la hoja y luego borra las lecturas, para que tenga una nueva copia de la tabla.",
"<strong>Part {#}: how small is small?</strong> With both rods {#} m long, record the mode {#} period at mode amplitudes of {#}°, {#}°, {#}° and {#}°. Send these to the worksheet, then clear the readings.":
  "<strong>Parte {#}: ¿qué tan pequeño es pequeño?</strong> Con ambas varillas de {#} m, registra el periodo del modo {#} con amplitudes del modo de {#}°, {#}°, {#}° y {#}°. Envíalas a la hoja y luego borra las lecturas.",
"<strong>Part {#}: separation.</strong> Use the Double pendulum chaos setup (both rods {#} m, released from rest at {#}° and {#}°) with two copies. Record the time for copy {#} to reach \\(d = 0.1\\) for start differences \\(\\delta\\) of \\(10^{-6}\\) to \\(10^{-3}\\) rad, every half power of ten (seven values). Changing \\(\\delta\\) starts the run again; let it run until the time appears before you record. Note the Lyapunov estimate after {#} s of the last run. Send these to the worksheet, then clear the readings.":
  "<strong>Parte {#}: separación.</strong> Usa la configuración Caos del péndulo doble (ambas varillas de {#} m, soltadas desde el reposo a {#}° y {#}°) con dos copias. Registra el tiempo que tarda la copia {#} en llegar a \\(d = 0.1\\) para diferencias iniciales \\(\\delta\\) de \\(10^{-6}\\) a \\(10^{-3}\\) rad, cada media potencia de diez (siete valores). Cambiar \\(\\delta\\) vuelve a iniciar la corrida; déjala correr hasta que aparezca el tiempo antes de registrar. Anota la estimación de Lyapunov después de {#} s de la última corrida. Envíalas a la hoja y luego borra las lecturas.",
"<strong>Part {#}: a regular swing.</strong> Start mode {#} at {#}° with two copies and \\(\\delta = 10^{-3}\\) rad. Watch the separation for {#} s and describe what it does in the notes under your Part {#} table.":
  "<strong>Parte {#}: una oscilación regular.</strong> Inicia el modo {#} a {#}° con dos copias y \\(\\delta = 10^{-3}\\) rad. Observa la separación durante {#} s y describe lo que hace en las notas bajo tu tabla de la Parte {#}.",
"<span>B</span>Start":
  "<span>B</span>Inicio",
"<span>C</span>Rod length \\(L\\) (m)":
  "<span>C</span>Longitud de la varilla \\(L\\) (m)",
"<span>D</span>Measured period \\(T\\) (s)":
  "<span>D</span>Periodo medido \\(T\\) (s)",
"<span>F</span>\\(\\omega^2\\) (rad²/s²)":
  "<span>F</span>\\(\\omega^2\\) (rad²/s²)",
"<span>G</span>\\(\\log_{10}\\delta\\)":
  "<span>G</span>\\(\\log_{10}\\delta\\)",
"<span>H</span>Time to separate \\(t_d\\) (s)":
  "<span>H</span>Tiempo de separación \\(t_d\\) (s)",
"Start, row {#}":
  "Inicio, fila {#}",
"Rod length L (m), row {#}":
  "Longitud de la varilla L (m), fila {#}",
"Measured period T (s), row {#}":
  "Periodo medido T (s), fila {#}",
"{#}/L ({#}/m), row {#}":
  "{#}/L ({#}/m), fila {#}",
"ω^{#} (rad²/s²), row {#}":
  "ω^{#} (rad²/s²), fila {#}",
"log_10δ, row {#}":
  "log_10δ, fila {#}",
"Time to separate t_d (s), row {#}":
  "Tiempo de separación t_d (s), fila {#}",
"log₁{#}δ":
  "log₁{#}δ",
"Work out \\(1/L\\) and \\(\\omega^2 = (2\\pi/T)^2\\) yourself. Keep each part in its own copy of the table.":
  "Calcula tú mismo \\(1/L\\) y \\(\\omega^2 = (2\\pi/T)^2\\). Guarda cada parte en su propia copia de la tabla.",
"Parts {#} and {#}: plot \\(\\omega^2\\) against \\(1/L\\) for each mode and fit a line. Compare the slopes with \\((2 - \\sqrt2)\\,g\\) and \\((2 + \\sqrt2)\\,g\\), and the intercepts with zero.":
  "Partes {#} y {#}: grafica \\(\\omega^2\\) en función de \\(1/L\\) para cada modo y ajusta una recta. Compara las pendientes con \\((2 - \\sqrt2)\\,g\\) y \\((2 + \\sqrt2)\\,g\\), y las ordenadas al origen con cero.",
"Find the ratio of the two slopes and compare it with \\((2 + \\sqrt2)/(2 - \\sqrt2)\\). What is the ratio of the two frequencies?":
  "Encuentra el cociente de las dos pendientes y compáralo con \\((2 + \\sqrt2)/(2 - \\sqrt2)\\). ¿Cuál es el cociente de las dos frecuencias?",
"Part {#}: by what percentage did the mode {#} period change from {#}° to {#}°? At what amplitude does the small angle prediction stop agreeing with the measurement to {#}%? Was {#}° small enough for Parts {#} and {#}?":
  "Parte {#}: ¿en qué porcentaje cambió el periodo del modo {#} de {#}° a {#}°? ¿A qué amplitud deja la predicción de ángulos pequeños de coincidir con la medición dentro de {#}%? ¿Fue {#}° lo bastante pequeño para las Partes {#} y {#}?",
"Part {#}: plot \\(t_d\\) against \\(\\log_{10}\\delta\\) and fit a line. Use the slope to find \\(\\lambda\\) and compare it with the demo’s Lyapunov estimate. Why do the points scatter about the line much more than in Parts {#} and {#}?":
  "Parte {#}: grafica \\(t_d\\) en función de \\(\\log_{10}\\delta\\) y ajusta una recta. Usa la pendiente para encontrar \\(\\lambda\\) y compárala con la estimación de Lyapunov de la demo. ¿Por qué los puntos se dispersan alrededor de la recta mucho más que en las Partes {#} y {#}?",
"Part {#}: how does the separation of a regular swing grow compared with a chaotic one? What does that mean for predicting each motion far ahead?":
  "Parte {#}: ¿cómo crece la separación de una oscilación regular comparada con una caótica? ¿Qué significa eso para predecir cada movimiento a largo plazo?",
"The measured periods are shown to {#} significant figures and the separation times to {#} s, and the integration error is far smaller than either. In Parts {#} to {#} the rounding of \\(T\\) sets the uncertainty of \\(\\omega^2\\): work it out for your shortest period. In Part {#} the uncertainty comes from the motion itself: the growth rate of a chaotic separation changes from moment to moment, so a single \\(t_d\\) can sit well off the line. Use the residuals of your fit to estimate the uncertainty of \\(\\lambda\\), and say why the demo’s own estimate, taken over a finite time, is also only an estimate.":
  "Los periodos medidos se muestran con {#} cifras significativas y los tiempos de separación con precisión de {#} s, y el error de integración es mucho menor que ambos. En las Partes {#} a {#} el redondeo de \\(T\\) fija la incertidumbre de \\(\\omega^2\\): calcúlala para tu periodo más corto. En la Parte {#} la incertidumbre viene del propio movimiento: la tasa de crecimiento de una separación caótica cambia de un momento a otro, así que un solo \\(t_d\\) puede quedar bastante lejos de la recta. Usa los residuos de tu ajuste para estimar la incertidumbre de \\(\\lambda\\), y di por qué la estimación de la propia demo, tomada en un tiempo finito, también es solo una estimación.",
"Why does a double pendulum have exactly two normal modes at small angles?":
  "¿Por qué un péndulo doble tiene exactamente dos modos normales con ángulos pequeños?",
"The demo has no randomness anywhere, yet the motion at {#}° cannot be predicted far ahead. Explain how both can be true.":
  "La demo no tiene aleatoriedad en ninguna parte, y aun así el movimiento a {#}° no se puede predecir a largo plazo. Explica cómo ambas cosas pueden ser ciertas.",
"Every small motion is a sum of the two modes. Describe what you would see if you started the pendulum with the lower rod straight down and the upper rod at {#}°.":
  "Todo movimiento pequeño es una suma de los dos modos. Describe lo que verías si iniciaras el péndulo con la varilla inferior vertical hacia abajo y la varilla superior a {#}°.",
"Weather forecasts lose their skill after about two weeks however good the computers become. Explain why, using what you found in Part {#}.":
  "Los pronósticos del clima pierden su acierto después de unas dos semanas, por buenas que sean las computadoras. Explica por qué, usando lo que encontraste en la Parte {#}.",
"Prelab answers, the four data tables with the graphs and fits for Parts {#}, {#} and {#}, the slopes compared with \\((2 \\mp \\sqrt2)\\,g\\), the amplitude comparison, your value of \\(\\lambda\\) with its uncertainty, your Part {#} description, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las cuatro tablas de datos con las gráficas y ajustes de las Partes {#}, {#} y {#}, las pendientes comparadas con \\((2 \\mp \\sqrt2)\\,g\\), la comparación de amplitudes, tu valor de \\(\\lambda\\) con su incertidumbre, tu descripción de la Parte {#} y las respuestas a las preguntas. Identifica los datos simulados.",
"Separation size the copies reach at the time t_d":
  "Tamaño de separación que alcanzan las copias en el tiempo t_d",
"Rod length":
  "Longitud de la varilla",
"Length of the upper rod":
  "Longitud de la varilla superior",
"Measured period":
  "Periodo medido",
"Separation of two copies, in angles and angular velocities":
  "Separación de dos copias, en ángulos y velocidades angulares",
"Extra turn of the upper rod from one copy to the next":
  "Giro adicional de la varilla superior de una copia a la siguiente",
"Copy number":
  "Número de copia",
"Lyapunov exponent":
  "Exponente de Lyapunov",
"Angular frequency":
  "Frecuencia angular",
"In the modes, the slow mode's angular frequency; in d, the upper rod's angular velocity":
  "En los modos, la frecuencia angular del modo lento; en d, la velocidad angular de la varilla superior",
"In the modes, the fast mode's angular frequency; in d, the lower rod's angular velocity":
  "En los modos, la frecuencia angular del modo rápido; en d, la velocidad angular de la varilla inferior",
"Time for the copies to separate":
  "Tiempo para que las copias se separen",
"Angle of the upper rod from vertical":
  "Ángulo de la varilla superior respecto a la vertical",
"Angle of the lower rod from vertical":
  "Ángulo de la varilla inferior respecto a la vertical",
"Pendulums":
  "Péndulos"
});
