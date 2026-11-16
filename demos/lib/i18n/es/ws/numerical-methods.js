/* ws/numerical-methods in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/numerical-methods', {
"Steps per period N":
  "Pasos por periodo N",
"Time step h (s)":
  "Paso de tiempo h (s)",
"Largest error, Euler (m)":
  "Error máximo, Euler (m)",
"Largest error, symplectic Euler (m)":
  "Error máximo, Euler simpléctico (m)",
"Largest error, Verlet (m)":
  "Error máximo, Verlet (m)",
"Largest error, RK4 (m)":
  "Error máximo, RK4 (m)",
"Periods":
  "Periodos",
"Largest energy error, Euler":
  "Error de energía máximo, Euler",
"Largest energy error, symplectic Euler":
  "Error de energía máximo, Euler simpléctico",
"Largest energy error, Verlet":
  "Error de energía máximo, Verlet",
"Largest energy error, RK4":
  "Error de energía máximo, RK4",
"Largest error, Euler (rad)":
  "Error máximo, Euler (rad)",
"Largest error, symplectic Euler (rad)":
  "Error máximo, Euler simpléctico (rad)",
"Largest error, Verlet (rad)":
  "Error máximo, Verlet (rad)",
"Largest error, RK4 (rad)":
  "Error máximo, RK4 (rad)",
"Numerical Methods: How Good Is a Computed Motion? | VirtualDemos":
  "Métodos numéricos: ¿qué tan bueno es un movimiento calculado? | VirtualDemos",
"Numerical Methods: How Good Is a Computed Motion?":
  "Métodos numéricos: ¿qué tan bueno es un movimiento calculado?",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §§{#}, {#}, {#} and {#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §§{#}, {#}, {#} y {#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Spring, {#} steps a period; Spring, {#} steps a period; Pendulum from {#}°; Pendulum from {#}°; Orbit, e = {#}; Comet orbit, e = {#}.":
  "<strong>Configuraciones en el demo:</strong> Resorte, {#} pasos por periodo; Resorte, {#} pasos por periodo; Péndulo desde {#}°; Péndulo desde {#}°; Órbita, e = {#}; Órbita de cometa, e = {#}.",
"The same system runs four times, once with each step rule (Euler, symplectic Euler, Verlet, RK4), and the exact motion is drawn dashed beside each copy. The exact motion is not stepped: it comes from the known solution (x = A cos ωt for the spring, Jacobi’s elliptic function for the pendulum, Kepler’s equation for the orbit).":
  "El mismo sistema corre cuatro veces, una con cada regla de paso (Euler, Euler simpléctico, Verlet, RK4), y el movimiento exacto se dibuja con línea discontinua junto a cada copia. El movimiento exacto no se calcula por pasos: sale de la solución conocida (x = A cos ωt para el resorte, la función elíptica de Jacobi para el péndulo, la ecuación de Kepler para la órbita).",
"The spring is a {#} kg block on a {#} N/m spring, so its period is T = {#} s, pulled out A = {#} m. The pendulum is {#} m long; the orbit has a period of {#} year.":
  "El resorte es un bloque de {#} kg en un resorte de {#} N/m, así que su periodo es T = {#} s, y se jala A = {#} m. El péndulo mide {#} m de largo; la órbita tiene un periodo de {#} año.",
"<strong>Steps per period N</strong> sets the time step h = T/N. Moving it (or any control on the Set up card) starts the run again from t = {#}. <strong>+{#} period</strong> and <strong>+{#} periods</strong> take exactly N or 10N steps at once and pause, so every reading is on a whole number of periods.":
  "<strong>Pasos por periodo N</strong> fija el paso de tiempo h = T/N. Al moverlo (o cualquier control de la tarjeta Preparar), la corrida vuelve a empezar desde t = {#}. <strong>+{#} periodo</strong> y <strong>+{#} periodos</strong> dan exactamente N o 10N pasos de una vez y pausan, así que cada lectura queda en un número entero de periodos.",
"The error is the distance between a method’s point and the exact point at the same time, on the phase portrait (for the spring, √(Δx² + (Δv/ω)²) in meters). The Readouts table gives each rule’s largest error since the run started, its energy error now, ΔE/E₀ = (E − E₀)/E₀, and the force evaluations it has used (RK4 uses four per step, the others one). The Error plot shows each rule’s error at every moment.":
  "El error es la distancia entre el punto de un método y el punto exacto en el mismo instante, en el retrato de fase (para el resorte, √(Δx² + (Δv/ω)²) en metros). La tabla de Lecturas en pantalla da el error máximo de cada regla desde que empezó la corrida, su error de energía actual, ΔE/E₀ = (E − E₀)/E₀, y las evaluaciones de la fuerza que ha usado (RK4 usa cuatro por paso, las demás una). La gráfica Error muestra el error de cada regla en cada instante.",
"A run is stopped when its energy is off by a factor of {#}; the table then says failed.":
  "Una corrida se detiene cuando su energía se desvía por un factor de {#}; entonces la tabla dice fallo.",
"Record reading stores one row: N, h, the time and the number of periods, and for each step rule its largest error, its error now, ΔE/E₀ now and its largest size so far, and its force evaluations. Export to worksheet sends the rows to the Data tables below (a series on whole periods at one N goes to Table {#}, a pendulum series to Table {#}); Clear starts a new series.":
  "Registrar lectura guarda una fila: N, h, el tiempo y el número de periodos, y para cada regla de paso su error máximo, su error actual, ΔE/E₀ actual y su tamaño máximo hasta ahora, y sus evaluaciones de la fuerza. Exportar a la hoja envía las filas a las tablas de Datos de abajo (una serie en periodos enteros con un solo N va a la Tabla {#}, una serie del péndulo a la Tabla {#}); Borrar empieza una serie nueva.",
"Blind hides the demo’s own plot of largest error against h and its fitted slopes, so you find the slopes yourself.":
  "A ciegas oculta la gráfica propia del demo del error máximo contra h y sus pendientes ajustadas, para que encuentres las pendientes por tu cuenta.",
"These are computed values, not measurements: running the same settings again gives exactly the same numbers.":
  "Estos son valores calculados, no mediciones: correr los mismos ajustes otra vez da exactamente los mismos números.",
"Measure how fast the error of four numerical methods shrinks as the time step is made smaller, see which methods keep the energy and which let it drift, and learn to tell an error of the method from a real feature of the physics.":
  "Mide qué tan rápido se reduce el error de cuatro métodos numéricos al hacer más pequeño el paso de tiempo, observa cuáles métodos conservan la energía y cuáles la dejan desviarse, y aprende a distinguir un error del método de una característica real de la física.",
"Newton’s second law gives the acceleration a(x) from the position. A computer cannot follow the motion continuously: it steps from time t to t + h with a rule that turns the present position x and velocity v into new ones.":
  "La segunda ley de Newton da la aceleración a(x) a partir de la posición. Una computadora no puede seguir el movimiento de forma continua: avanza del tiempo t a t + h con una regla que convierte la posición x y la velocidad v actuales en nuevas.",
"<strong>Euler:</strong> \\(x \\leftarrow x + h v\\) and \\(v \\leftarrow v + h a(x)\\), both from the values at the start of the step.":
  "<strong>Euler:</strong> \\(x \\leftarrow x + h v\\) y \\(v \\leftarrow v + h a(x)\\), ambas con los valores al inicio del paso.",
"<strong>Symplectic Euler</strong> (Euler–Cromer): \\(v \\leftarrow v + h a(x)\\) first, then \\(x \\leftarrow x + h v\\) with the new v.":
  "<strong>Euler simpléctico</strong> (Euler–Cromer): primero \\(v \\leftarrow v + h a(x)\\), y luego \\(x \\leftarrow x + h v\\) con la nueva v.",
"<strong>Verlet</strong> (velocity Verlet): half a velocity kick \\(\\tfrac12 h a(x)\\), a full move \\(x \\leftarrow x + h v\\), then the other half kick with the acceleration at the new position.":
  "<strong>Verlet</strong> (Verlet de velocidad): medio empujón a la velocidad \\(\\tfrac12 h a(x)\\), un movimiento completo \\(x \\leftarrow x + h v\\), y luego la otra mitad del empujón con la aceleración en la nueva posición.",
"<strong>RK4</strong> (fourth order Runge–Kutta): four trial slopes per step, at the start, twice at the middle and at the end, averaged with weights {#} : {#} : {#} : {#}.":
  "<strong>RK4</strong> (Runge–Kutta de cuarto orden): cuatro pendientes de prueba por paso, al inicio, dos veces en medio y al final, promediadas con pesos {#} : {#} : {#} : {#}.",
"Each rule makes a small error every step. Over a fixed stretch of time (one period) the error left over usually behaves like a power of the step,":
  "Cada regla comete un pequeño error en cada paso. En un tramo fijo de tiempo (un periodo), el error acumulado suele comportarse como una potencia del paso,",
"\\[\\text{error} \\approx C\\,h^{p},\\]":
  "\\[\\text{error} \\approx C\\,h^{p},\\]",
"and p is the <strong>order</strong> of the method. Halving h divides the error by \\(2^p\\). On log scales a power law is a straight line of slope p. From two runs with steps \\(h_1\\) and \\(h_2\\) and errors \\(e_1\\) and \\(e_2\\), the observed order is":
  "y p es el <strong>orden</strong> del método. Reducir h a la mitad divide el error entre \\(2^p\\). En escalas logarítmicas, una ley de potencias es una recta de pendiente p. A partir de dos corridas con pasos \\(h_1\\) y \\(h_2\\) y errores \\(e_1\\) y \\(e_2\\), el orden observado es",
"\\[p = \\frac{\\ln(e_1/e_2)}{\\ln(h_1/h_2)}.\\]":
  "\\[p = \\frac{\\ln(e_1/e_2)}{\\ln(h_1/h_2)}.\\]",
"The power law only holds once h is small enough; at large h the next power of h still matters, so the observed order settles toward its true value as h shrinks. Euler and symplectic Euler are first order, Verlet second order and RK4 fourth order.":
  "La ley de potencias solo se cumple cuando h es suficientemente pequeño; con h grande, la siguiente potencia de h todavía importa, así que el orden observado se acerca a su valor verdadero al reducir h. Euler y Euler simpléctico son de primer orden, Verlet de segundo orden y RK4 de cuarto orden.",
"For a block on a spring, \\(\\omega = 2\\pi/T\\) and one Euler step multiplies the energy by exactly \\(1 + (\\omega h)^2\\), so Euler’s energy grows without limit. Symplectic Euler and Verlet keep the area of every patch of the phase portrait (they are <em>symplectic</em>), and as a result their energy wobbles within each period but does not drift, however long they run. RK4 is far more accurate per step but is not symplectic: its energy drifts slowly, a little more each period.":
  "Para un bloque en un resorte, \\(\\omega = 2\\pi/T\\) y un paso de Euler multiplica la energía exactamente por \\(1 + (\\omega h)^2\\), así que la energía de Euler crece sin límite. Euler simpléctico y Verlet conservan el área de cada región del retrato de fase (son <em>simplécticos</em>), y por eso su energía oscila dentro de cada periodo pero no se desvía, sin importar cuánto tiempo corran. RK4 es mucho más preciso por paso, pero no es simpléctico: su energía se desvía lentamente, un poco más en cada periodo.",
"A large swing of a pendulum is described by \\(\\ddot\\theta = -(g/L)\\sin\\theta\\), not by the small angle equation. Its period is longer than \\(2\\pi\\sqrt{L/g}\\); from {#}° it is {#} s for L = {#} m, {#}% longer than {#} s (§{#}). That is physics, so it does not change when h changes. An error of the method does change with h, and shrinks as \\(h^p\\).":
  "Una oscilación grande de un péndulo se describe con \\(\\ddot\\theta = -(g/L)\\sin\\theta\\), no con la ecuación de ángulos pequeños. Su periodo es más largo que \\(2\\pi\\sqrt{L/g}\\); desde {#}° es de {#} s para L = {#} m, {#}% más largo que {#} s (§{#}). Eso es física, así que no cambia cuando cambia h. Un error del método sí cambia con h, y se reduce como \\(h^p\\).",
"The cost of a run is the number of force evaluations, the times a(x) is worked out: one per step for Euler, symplectic Euler and Verlet, four per step for RK4.":
  "El costo de una corrida es el número de evaluaciones de la fuerza, las veces que se calcula a(x): una por paso para Euler, Euler simpléctico y Verlet, y cuatro por paso para RK4.",
"A method’s error is proportional to \\(h^2\\). By what factor does the error fall when N goes from {#} to {#} steps per period? If the error were proportional to \\(h^4\\)?":
  "El error de un método es proporcional a \\(h^2\\). ¿En qué factor baja el error cuando N pasa de {#} a {#} pasos por periodo? ¿Y si el error fuera proporcional a \\(h^4\\)?",
"For the spring with T = {#} s and N = {#}, find ωh, the factor \\(1 + (\\omega h)^2\\) for one Euler step, and that factor raised to the 50th power. What is Euler’s ΔE/E₀ after one period?":
  "Para el resorte con T = {#} s y N = {#}, calcula ωh, el factor \\(1 + (\\omega h)^2\\) de un paso de Euler, y ese factor elevado a la potencia 50. ¿Cuál es el ΔE/E₀ de Euler después de un periodo?",
"A computer run shows a pendulum let go from {#}° taking {#} s for a swing and back. Would a smaller time step bring this closer to \\(2\\pi\\sqrt{L/g}\\)? Explain.":
  "Una corrida de computadora muestra que un péndulo soltado desde {#}° tarda {#} s en ir y volver. ¿Un paso de tiempo más pequeño lo acercaría a \\(2\\pi\\sqrt{L/g}\\)? Explica.",
"Guess before you run: RK4 is far more accurate per step than Verlet. Over {#} periods of the spring at {#} steps a period, which of the two will keep the energy closer to its start? Write your guess and one sentence of reasoning.":
  "Adivina antes de correrlo: RK4 es mucho más preciso por paso que Verlet. Durante {#} periodos del resorte con {#} pasos por periodo, ¿cuál de los dos mantendrá la energía más cerca de su valor inicial? Escribe tu predicción y una oración con tu razonamiento.",
"<strong>A. Order of each method (spring).</strong> Press the <strong>Spring, {#} steps a period</strong> setup. Open the <strong>Lab</strong> fold at the bottom of the sidebar and tick <strong>Blind: hide the Error against h plot</strong>. Leave all four step rules ticked on the Set up card. Set <strong>Steps per period N</strong> to {#} (the slider steps through set values; the number shows beside it). Press <strong>+{#} period</strong> once, then <strong>Record reading</strong>. Repeat for N = {#}, {#}, {#}, {#} and {#}: moving the slider starts the run again, so press <strong>+{#} period</strong> once each time before recording. At N = {#}, also copy Euler’s ΔE/E₀ from the Readouts table into your answer to Analysis {#}. Press <strong>Export to worksheet</strong> (the readings go to Table {#}), then <strong>Clear</strong>.":
  "<strong>A. Orden de cada método (resorte).</strong> Presiona la configuración <strong>Resorte, {#} pasos por periodo</strong>. Abre la sección <strong>Laboratorio</strong> al final de la barra lateral y marca <strong>A ciegas: ocultar la gráfica de Error contra h</strong>. Deja marcadas las cuatro reglas de paso en la tarjeta Preparar. Fija <strong>Pasos por periodo N</strong> en {#} (el control deslizante avanza por valores fijos; el número aparece a su lado). Presiona <strong>+{#} periodo</strong> una vez y luego <strong>Registrar lectura</strong>. Repite para N = {#}, {#}, {#}, {#} y {#}: al mover el control deslizante la corrida vuelve a empezar, así que presiona <strong>+{#} periodo</strong> una vez cada vez antes de registrar. En N = {#}, copia también el ΔE/E₀ de Euler de la tabla de Lecturas en pantalla en tu respuesta del Análisis {#}. Presiona <strong>Exportar a la hoja</strong> (las lecturas van a la Tabla {#}) y luego <strong>Borrar</strong>.",
"<strong>B. Energy over many periods (spring).</strong> Set <strong>Steps per period N</strong> to {#}. Press <strong>+{#} period</strong> and <strong>Record reading</strong>. Press <strong>Reset</strong>, then <strong>+{#} periods</strong> and <strong>Record reading</strong> ({#} periods). Press <strong>+{#} periods</strong> twice more and record ({#} periods). Press <strong>+{#} periods</strong> seven more times and record ({#} periods). Watch the <strong>Energy error</strong> plot (the button above the picture) as you go. Press <strong>Export to worksheet</strong> (Table {#}), then <strong>Clear</strong>.":
  "<strong>B. Energía a lo largo de muchos periodos (resorte).</strong> Fija <strong>Pasos por periodo N</strong> en {#}. Presiona <strong>+{#} periodo</strong> y <strong>Registrar lectura</strong>. Presiona <strong>Reiniciar</strong>, luego <strong>+{#} periodos</strong> y <strong>Registrar lectura</strong> ({#} periodos). Presiona <strong>+{#} periodos</strong> dos veces más y registra ({#} periodos). Presiona <strong>+{#} periodos</strong> siete veces más y registra ({#} periodos). Observa la gráfica <strong>Error de energía</strong> (el botón sobre la imagen) mientras avanzas. Presiona <strong>Exportar a la hoja</strong> (Tabla {#}) y luego <strong>Borrar</strong>.",
"<strong>C. Physics or method? (pendulum).</strong> Press the <strong>Pendulum from {#}°</strong> setup (N = {#}). Read <strong>Period T (exact)</strong> in the Readouts. Press <strong>+{#} period</strong> twice ({#} periods) and <strong>Record reading</strong>. Set <strong>Steps per period N</strong> to {#}, press <strong>+{#} period</strong> twice and record; then N = {#} the same way. Watch the four bobs and the phase portrait at each N. Press <strong>Export to worksheet</strong> (Table {#}).":
  "<strong>C. ¿Física o método? (péndulo).</strong> Presiona la configuración <strong>Péndulo desde {#}°</strong> (N = {#}). Lee <strong>Periodo T (exacto)</strong> en las Lecturas en pantalla. Presiona <strong>+{#} periodo</strong> dos veces ({#} periodos) y <strong>Registrar lectura</strong>. Fija <strong>Pasos por periodo N</strong> en {#}, presiona <strong>+{#} periodo</strong> dos veces y registra; luego N = {#} de la misma manera. Observa las cuatro lentejas y el retrato de fase en cada N. Presiona <strong>Exportar a la hoja</strong> (Tabla {#}).",
"Table {#}. Spring, one period, each step rule’s largest error.":
  "Tabla {#}. Resorte, un periodo, error máximo de cada regla de paso.",
"<span>B</span>Steps per period N":
  "<span>B</span>Pasos por periodo N",
"<span>C</span>Time step h (s)":
  "<span>C</span>Paso de tiempo h (s)",
"<span>D</span>Largest error, Euler (m)":
  "<span>D</span>Error máximo, Euler (m)",
"<span>E</span>Largest error, symplectic Euler (m)":
  "<span>E</span>Error máximo, Euler simpléctico (m)",
"<span>F</span>Largest error, Verlet (m)":
  "<span>F</span>Error máximo, Verlet (m)",
"<span>G</span>Largest error, RK4 (m)":
  "<span>G</span>Error máximo, RK4 (m)",
"Steps per period N, row {#}":
  "Pasos por periodo N, fila {#}",
"Time step h (s), row {#}":
  "Paso de tiempo h (s), fila {#}",
"Largest error, Euler (m), row {#}":
  "Error máximo, Euler (m), fila {#}",
"Largest error, symplectic Euler (m), row {#}":
  "Error máximo, Euler simpléctico (m), fila {#}",
"Largest error, Verlet (m), row {#}":
  "Error máximo, Verlet (m), fila {#}",
"Largest error, RK4 (m), row {#}":
  "Error máximo, RK4 (m), fila {#}",
"Table {#}. Spring, N = {#}: the largest size of ΔE/E₀ since the start.":
  "Tabla {#}. Resorte, N = {#}: el tamaño máximo de ΔE/E₀ desde el inicio.",
"<span>B</span>Periods":
  "<span>B</span>Periodos",
"<span>C</span>Largest energy error, Euler":
  "<span>C</span>Error de energía máximo, Euler",
"<span>D</span>Largest energy error, symplectic Euler":
  "<span>D</span>Error de energía máximo, Euler simpléctico",
"<span>E</span>Largest energy error, Verlet":
  "<span>E</span>Error de energía máximo, Verlet",
"<span>F</span>Largest energy error, RK4":
  "<span>F</span>Error de energía máximo, RK4",
"Periods, row {#}":
  "Periodos, fila {#}",
"Largest energy error, Euler, row {#}":
  "Error de energía máximo, Euler, fila {#}",
"Largest energy error, symplectic Euler, row {#}":
  "Error de energía máximo, Euler simpléctico, fila {#}",
"Largest energy error, Verlet, row {#}":
  "Error de energía máximo, Verlet, fila {#}",
"Largest energy error, RK4, row {#}":
  "Error de energía máximo, RK4, fila {#}",
"Table {#}. Pendulum from {#}°, two periods.":
  "Tabla {#}. Péndulo desde {#}°, dos periodos.",
"<span>C</span>Periods":
  "<span>C</span>Periodos",
"<span>D</span>Largest error, Euler (rad)":
  "<span>D</span>Error máximo, Euler (rad)",
"<span>E</span>Largest error, symplectic Euler (rad)":
  "<span>E</span>Error máximo, Euler simpléctico (rad)",
"<span>F</span>Largest error, Verlet (rad)":
  "<span>F</span>Error máximo, Verlet (rad)",
"<span>G</span>Largest error, RK4 (rad)":
  "<span>G</span>Error máximo, RK4 (rad)",
"<span>H</span>Largest energy error, Euler":
  "<span>H</span>Error de energía máximo, Euler",
"Largest error, Euler (rad), row {#}":
  "Error máximo, Euler (rad), fila {#}",
"Largest error, symplectic Euler (rad), row {#}":
  "Error máximo, Euler simpléctico (rad), fila {#}",
"Largest error, Verlet (rad), row {#}":
  "Error máximo, Verlet (rad), fila {#}",
"Largest error, RK4 (rad), row {#}":
  "Error máximo, RK4 (rad), fila {#}",
"Graph Table {#} with <strong>Log scales</strong> ticked, each step rule’s largest error (vertical) against h (horizontal), choosing each error column in turn. Which methods give straight lines, and which bend, and where? Then for each method work out the observed order p between each pair of neighboring rows (five values per method). Compare the last value (N = {#} to {#}) with the orders {#}, {#}, {#} and {#}.":
  "Grafica la Tabla {#} con <strong>Escalas logarítmicas</strong> marcadas: el error máximo de cada regla de paso (vertical) contra h (horizontal), eligiendo cada columna de error por turno. ¿Qué métodos dan rectas, cuáles se curvan y dónde? Luego, para cada método calcula el orden observado p entre cada par de filas vecinas (cinco valores por método). Compara el último valor (N = {#} a {#}) con los órdenes {#}, {#}, {#} y {#}.",
"Compare Euler’s ΔE/E₀ after one period at N = {#} with your Before the lab answer {#}.":
  "Compara el ΔE/E₀ de Euler después de un periodo en N = {#} con tu respuesta {#} de Antes del laboratorio.",
"From your N = {#} row and the order of each method, find the number of steps per period Verlet and RK4 need for a largest error of {#} × {#}⁻⁶ m in one period, and the force evaluations each then uses per period (N for Verlet, 4N for RK4). Which method reaches that accuracy for less work?":
  "A partir de tu fila de N = {#} y del orden de cada método, calcula el número de pasos por periodo que Verlet y RK4 necesitan para un error máximo de {#} × {#}⁻⁶ m en un periodo, y las evaluaciones de la fuerza que cada uno usa entonces por periodo (N para Verlet, 4N para RK4). ¿Qué método alcanza esa precisión con menos trabajo?",
"From Table {#}, describe how each method’s largest energy error changes from {#} to {#} periods. RK4’s grows by about the same amount each period: find that amount, and estimate after how many periods RK4’s energy error passes Verlet’s.":
  "A partir de la Tabla {#}, describe cómo cambia el error de energía máximo de cada método de {#} a {#} periodos. El de RK4 crece aproximadamente la misma cantidad en cada periodo: encuentra esa cantidad y estima después de cuántos periodos el error de energía de RK4 supera al de Verlet.",
"From Table {#}, which errors shrink as N grows, and by roughly what factor from N = {#} to N = {#}? Is Euler’s largest error consistent with first order there?":
  "A partir de la Tabla {#}, ¿qué errores se reducen al crecer N, y en aproximadamente qué factor de N = {#} a N = {#}? ¿El error máximo de Euler es consistente con primer orden ahí?",
"The exact period you read in step C is {#}% longer than \\(2\\pi\\sqrt{L/g}\\), and every method that stays on the dashed bob shows the same period at every N. Which features of the runs in step C are physics, and which are errors of a method? Give the evidence for each.":
  "El periodo exacto que leíste en el paso C es {#}% más largo que \\(2\\pi\\sqrt{L/g}\\), y todo método que se queda sobre la lenteja discontinua muestra el mismo periodo en cada N. ¿Qué características de las corridas del paso C son física y cuáles son errores de un método? Da la evidencia de cada una.",
"The demo’s numbers are not measurements: the same settings give the same digits every time, so there is no random scatter to average away. Differences between your observed orders and {#}, {#} or {#} come from the departure from a single power law at large h, not from noise; they shrink as h does. At very small errors rounding sets a floor: double precision keeps about {#} significant digits, so RK4 at small h cannot be followed far below {#}⁻¹². Say which rows you trust for each method’s order and why.":
  "Los números del demo no son mediciones: los mismos ajustes dan los mismos dígitos cada vez, así que no hay dispersión aleatoria que promediar. Las diferencias entre tus órdenes observados y {#}, {#} o {#} vienen de que con h grande no se cumple una sola ley de potencias, no del ruido; se reducen al reducir h. Con errores muy pequeños el redondeo fija un piso: la doble precisión conserva cerca de {#} cifras significativas, así que RK4 con h pequeño no se puede seguir mucho por debajo de {#}⁻¹². Indica en qué filas confías para el orden de cada método y por qué.",
"Draw one Euler step for a block passing x = {#} at its top speed, and use the picture to explain why Euler always lands outside the exact circle on the phase portrait, so its energy grows.":
  "Dibuja un paso de Euler para un bloque que pasa por x = {#} con su rapidez máxima, y usa el dibujo para explicar por qué Euler siempre cae fuera del círculo exacto del retrato de fase, así que su energía crece.",
"A classmate’s simulation of a satellite shows the orbit slowly growing over months. Describe two checks, with the demo’s tools in mind, that tell whether this is real physics (a thrust, say) or the method.":
  "La simulación de un satélite hecha por un compañero muestra que la órbita crece lentamente a lo largo de meses. Describe dos verificaciones, pensando en las herramientas del demo, que indiquen si esto es física real (un empuje, por ejemplo) o el método.",
"Simulations of planets over millions of years and of molecules over millions of steps usually use Verlet, not RK4, even though RK4 is more accurate per step. Use your Table {#} to explain why, and say whether your guess in Before the lab {#} held.":
  "Las simulaciones de planetas a lo largo de millones de años y de moléculas a lo largo de millones de pasos suelen usar Verlet, no RK4, aunque RK4 es más preciso por paso. Usa tu Tabla {#} para explicar por qué, y di si tu predicción en Antes del laboratorio {#} se cumplió.",
"Before the lab answers, the three data tables, the log–log graph of Table {#}, the observed orders, and your answers to the Analysis and Questions. Say that the data are computed by the demo, not measured.":
  "Las respuestas de Antes del laboratorio, las tres tablas de datos, la gráfica log–log de la Tabla {#}, los órdenes observados y tus respuestas del Análisis y de las Preguntas. Indica que los datos los calculó el demo, no se midieron.",
"Numerical Methods for Motion":
  "Métodos numéricos para el movimiento",
"Simulations of planets over millions of years and of molecules over millions of steps usually use Verlet, not RK4, even though RK4 is more accurate per step. Use your Table {#} to explain why.":
  "Las simulaciones de planetas durante millones de años y de moléculas durante millones de pasos suelen usar Verlet, no RK4, aunque RK4 sea más preciso por paso. Usa tu Tabla {#} para explicar por qué."
});
