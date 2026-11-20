/* ws/taylor-small-angle in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/taylor-small-angle', {
"Order n":
  "Orden n",
"sin θ":
  "sen θ",
"Relative error (%)":
  "Error relativo (%)",
"Release angle θ₀ (°)":
  "Ángulo de liberación θ₀ (°)",
"Exact period T (s)":
  "Periodo exacto T (s)",
"Longer than T₀ by (%)":
  "Más largo que T₀ en (%)",
"The Small Angle Approximation: How Small Is Small? | VirtualDemos":
  "La aproximación de ángulo pequeño: ¿qué tan pequeño es pequeño? | VirtualDemos",
"The Small Angle Approximation: How Small Is Small?":
  "La aproximación de ángulo pequeño: ¿qué tan pequeño es pequeño?",
"Student laboratory · Calculus for physics":
  "Laboratorio para estudiantes · Cálculo para la física",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (pendulums); OpenStax <em>Calculus</em>, Vol. {#}, §{#} (linear approximations) and Vol. {#}, §{#} (Taylor and Maclaurin series). Access for free at https://openstax.org/details/books/university-physics-volume-{#} and https://openstax.org/details/books/calculus-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (péndulos); OpenStax <em>Calculus</em>, Vol. {#}, §{#} (aproximaciones lineales) y Vol. {#}, §{#} (series de Taylor y Maclaurin). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#} y https://openstax.org/details/books/calculus-volume-{#}.",
"<strong>Setups in the demo:</strong> Pendulum: sin θ ≈ θ; Binomial; Relativistic kinetic energy; Gravity above Earth; Field of a dipole; eˣ near {#}; ln({#} + x) near {#}; {#}/({#} + x²): poles at ±i; Linear approximation: √x near {#}; and four Build setups.":
  "<strong>Configuraciones de la demo:</strong> Péndulo: sen θ ≈ θ; Binomial; Energía cinética relativista; Gravedad sobre la Tierra; Campo de un dipolo; eˣ cerca de {#}; ln({#} + x) cerca de {#}; {#}/({#} + x²): polos en ±i; Aproximación lineal: √x cerca de {#}; y cuatro configuraciones de Construir.",
"The orange curve is the function f, the teal curve its Taylor polynomial Tₙ about the center a (the diamond on the axis). <strong>Order n</strong> sets the highest power kept; <strong>+</strong> and <strong>−</strong> step it by one. The polynomial and its exact coefficients are printed under the graph.":
  "La curva naranja es la función f, la curva verde azulada es su polinomio de Taylor Tₙ alrededor del centro a (el rombo sobre el eje). <strong>Orden n</strong> fija la potencia más alta que se conserva; <strong>+</strong> y <strong>−</strong> lo cambian de uno en uno. El polinomio y sus coeficientes exactos se muestran bajo la gráfica.",
"<strong>Probe θ</strong> (the box above the graph) sets the angle the readouts use; you can also drag the dashed probe line. <strong>At the probe</strong> gives f, Tₙ, the error f − Tₙ and the relative error |f − Tₙ|/|f| in percent.":
  "<strong>Sonda θ</strong> (la casilla sobre la gráfica) fija el ángulo que usan las lecturas en pantalla; también puedes arrastrar la línea punteada de la sonda. <strong>En la sonda</strong> da f, Tₙ, el error f − Tₙ y el error relativo |f − Tₙ|/|f| en porcentaje.",
"The green column on the graph is where Tₙ is within the chosen tolerance ({#}% unless you change it under <strong>Show</strong>), and the <strong>Convergence</strong> readouts give its ends as <strong>Tₙ within {#}% of f</strong>, in radians and degrees.":
  "La columna verde de la gráfica es donde Tₙ está dentro de la tolerancia elegida ({#}% a menos que la cambies en <strong>Mostrar</strong>), y las lecturas de <strong>Convergencia</strong> dan sus extremos como <strong>Tₙ dentro del {#}% de f</strong>, en radianes y en grados.",
"<strong>Record reading</strong> stores n, θ, sin θ, Tₙ(θ) and the relative error. <strong>Export to worksheet</strong> sends the rows to Table {#} below.":
  "<strong>Registrar lectura</strong> guarda n, θ, sen θ, Tₙ(θ) y el error relativo. <strong>Exportar a la hoja</strong> envía las filas a la Tabla {#} de abajo.",
"These are computed values, not measurements: the same settings always give the same numbers.":
  "Estos son valores calculados, no mediciones: los mismos ajustes siempre dan los mismos números.",
"For Part C you also use the <a>Pendulums demo</a>, Photogate lab scene. Its readouts give the exact period at the release angle, computed from the full equation of motion, and how much longer it is than the small angle period T₀ = {#}π√(L/g).":
  "Para la Parte C también usas la <a>demo Péndulos</a>, escena Laboratorio con fotocompuerta. Sus lecturas en pantalla dan el periodo exacto en el ángulo de liberación, calculado con la ecuación de movimiento completa, y cuánto más largo es que el periodo de ángulo pequeño T₀ = {#}π√(L/g).",
"Find how far the small angle approximation sin θ ≈ θ, and its next better version θ − θ³/{#}, can be trusted to {#}%, and then see what that means for the period of a real pendulum.":
  "Encuentra hasta dónde se puede confiar en la aproximación de ángulo pequeño sen θ ≈ θ, y en su siguiente versión mejor, θ − θ³/{#}, con una exactitud de {#}%, y luego ve qué significa eso para el periodo de un péndulo real.",
"A pendulum of length L obeys \\(\\ddot\\theta = -(g/L)\\sin\\theta\\). This equation has no solution in elementary functions. Near θ = {#} we replace sin θ by the first terms of its Taylor (Maclaurin) series,":
  "Un péndulo de longitud L obedece \\(\\ddot\\theta = -(g/L)\\sin\\theta\\). Esta ecuación no tiene solución en funciones elementales. Cerca de θ = {#} reemplazamos sen θ por los primeros términos de su serie de Taylor (Maclaurin),",
"\\[\\sin\\theta = \\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\cdots,\\]":
  "\\[\\sin\\theta = \\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\cdots,\\]",
"with θ in radians. Keeping only θ gives \\(\\ddot\\theta = -(g/L)\\theta\\), simple harmonic motion with the period \\(T_0 = 2\\pi\\sqrt{L/g}\\), the same for every amplitude.":
  "con θ en radianes. Si se conserva solo θ, queda \\(\\ddot\\theta = -(g/L)\\theta\\), movimiento armónico simple con el periodo \\(T_0 = 2\\pi\\sqrt{L/g}\\), el mismo para toda amplitud.",
"The Taylor polynomial of order n about a is \\(T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k\\). For sin θ about {#} the even terms are zero, so \\(T_1 = T_2 = \\theta\\) and \\(T_3 = T_4 = \\theta - \\theta^3/6\\). When the terms shrink quickly, the error is close to the first term left out. For θ alone that is θ³/{#}, so the relative error is about θ²/{#}; for θ − θ³/{#} it is θ⁵/{#}, a relative error of about θ⁴/{#}. Lagrange’s form of the remainder makes this exact: \\(\\lvert f(x) - T_n(x)\\rvert \\le M\\,\\lvert x-a\\rvert^{n+1}/(n+1)!\\), where M is the largest \\(\\lvert f^{(n+1)}\\rvert\\) between a and x.":
  "El polinomio de Taylor de orden n alrededor de a es \\(T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k\\). Para sen θ alrededor de {#} los términos pares son cero, así que \\(T_1 = T_2 = \\theta\\) y \\(T_3 = T_4 = \\theta - \\theta^3/6\\). Cuando los términos disminuyen rápido, el error se parece al primer término omitido. Para θ sola ese es θ³/{#}, así que el error relativo es de unos θ²/{#}; para θ − θ³/{#} es θ⁵/{#}, un error relativo de unos θ⁴/{#}. La forma de Lagrange del residuo lo hace exacto: \\(\\lvert f(x) - T_n(x)\\rvert \\le M\\,\\lvert x-a\\rvert^{n+1}/(n+1)!\\), donde M es el mayor \\(\\lvert f^{(n+1)}\\rvert\\) entre a y x.",
"A relative error that grows as \\(\\theta^p\\) is a straight line of slope p on a graph with log scales on both axes.":
  "Un error relativo que crece como \\(\\theta^p\\) es una recta de pendiente p en una gráfica con escalas logarítmicas en ambos ejes.",
"The period of a pendulum swinging out to θ₀ is longer than T₀. Its own series is":
  "El periodo de un péndulo que oscila hasta θ₀ es más largo que T₀. Su propia serie es",
"\\[\\frac{T}{T_0} = 1 + \\frac{\\theta_0^2}{16} + \\frac{11\\,\\theta_0^4}{3072} + \\cdots\\]":
  "\\[\\frac{T}{T_0} = 1 + \\frac{\\theta_0^2}{16} + \\frac{11\\,\\theta_0^4}{3072} + \\cdots\\]",
"(θ₀ in radians). The bob spends most of each swing at angles smaller than θ₀, where sin θ ≈ θ is better, which is why {#} appears here and not {#}.":
  "(θ₀ en radianes). La lenteja pasa la mayor parte de cada oscilación en ángulos menores que θ₀, donde sen θ ≈ θ es mejor, y por eso aquí aparece {#} y no {#}.",
"Write the first three nonzero terms of the Maclaurin series of sin θ. Convert {#} rad and {#} rad to degrees.":
  "Escribe los tres primeros términos distintos de cero de la serie de Maclaurin de sen θ. Convierte {#} rad y {#} rad a grados.",
"Use the first term left out to estimate the angle (in radians and in degrees) at which sin θ ≈ θ is off by {#}%. Do the same for sin θ ≈ θ − θ³/{#}.":
  "Usa el primer término omitido para estimar el ángulo (en radianes y en grados) en el que sen θ ≈ θ tiene un error de {#}%. Haz lo mismo para sen θ ≈ θ − θ³/{#}.",
"Make a guess before you measure: at the angle where sin θ ≈ θ is off by {#}% (about {#}°), will the period of a real pendulum released from that angle be more than {#}% longer than T₀, about {#}% longer, or less than {#}% longer? Write your guess and one sentence of reasoning.":
  "Haz una conjetura antes de medir: en el ángulo en el que sen θ ≈ θ tiene un error de {#}% (unos {#}°), ¿el periodo de un péndulo real soltado desde ese ángulo será más de {#}% más largo que T₀, cerca de {#}% más largo, o menos de {#}% más largo? Escribe tu conjetura y una oración de razonamiento.",
"<strong>A. The first term, sin θ ≈ θ.</strong> Open the Taylor Polynomials and Series demo and press the <strong>Pendulum: sin θ ≈ θ</strong> setup (Order n = {#}). Type {#} in the <strong>Probe θ</strong> box and press Enter, then press <strong>Record reading</strong>. Repeat for θ = {#}, {#}, {#} and {#} rad. Read <strong>Tₙ within {#}% of f</strong> in the Convergence readouts and write its upper end, in radians and degrees, in your answer to Analysis {#}. Press <strong>Export to worksheet</strong> (the five n = {#} rows go to Table {#}), then <strong>Clear</strong>.":
  "<strong>A. El primer término, sen θ ≈ θ.</strong> Abre la demo Polinomios y series de Taylor y presiona la configuración <strong>Péndulo: sen θ ≈ θ</strong> (Orden n = {#}). Escribe {#} en la casilla <strong>Sonda θ</strong> y presiona Enter, luego presiona <strong>Registrar lectura</strong>. Repite para θ = {#}, {#}, {#} y {#} rad. Lee <strong>Tₙ dentro del {#}% de f</strong> en las lecturas de Convergencia y escribe su extremo superior, en radianes y en grados, en tu respuesta al Análisis {#}. Presiona <strong>Exportar a la hoja</strong> (las cinco filas con n = {#} van a la Tabla {#}), luego <strong>Borrar</strong>.",
"<strong>B. Two terms, θ − θ³/{#}.</strong> Press <strong>+</strong> twice so that Order n = {#} (n = {#} adds nothing, since sin θ has no θ² term). Record readings at θ = {#}, {#}, {#}, {#} and {#} rad the same way. Read <strong>Tₙ within {#}% of f</strong> again. Press <strong>Export to worksheet</strong> again: the five n = {#} rows go to a second copy of Table {#}, so each order gets its own graph and fit.":
  "<strong>B. Dos términos, θ − θ³/{#}.</strong> Presiona <strong>+</strong> dos veces para que Orden n = {#} (n = {#} no agrega nada, pues sen θ no tiene término en θ²). Registra lecturas en θ = {#}, {#}, {#}, {#} y {#} rad de la misma manera. Lee de nuevo <strong>Tₙ dentro del {#}% de f</strong>. Presiona de nuevo <strong>Exportar a la hoja</strong>: las cinco filas con n = {#} van a una segunda copia de la Tabla {#}, de modo que cada orden tenga su propia gráfica y ajuste.",
"<strong>C. The real pendulum.</strong> Open the Pendulums demo (Photogate lab scene) and press the <strong>Simple pendulum</strong> setup (L = {#} m on Earth). Make sure <strong>Blind</strong> in its Lab fold is not ticked. Set <strong>Release angle θ₀</strong> to {#}° and read <strong>Exact period at θ₀</strong> and <strong>Longer than T₀ by</strong> in its readouts. Repeat at {#}°, {#}°, {#}° and {#}°. Record each in Table {#}, and record T₀ = {#}π√(L/g) once.":
  "<strong>C. El péndulo real.</strong> Abre la demo Péndulos (escena Laboratorio con fotocompuerta) y presiona la configuración <strong>Péndulo simple</strong> (L = {#} m en la Tierra). Asegúrate de que <strong>A ciegas</strong> en su pliegue Laboratorio no esté marcada. Pon <strong>Ángulo de liberación θ₀</strong> en {#}° y lee <strong>Periodo exacto a θ₀</strong> y <strong>Más largo que T₀ en</strong> en sus lecturas en pantalla. Repite a {#}°, {#}°, {#}° y {#}°. Registra cada uno en la Tabla {#}, y registra T₀ = {#}π√(L/g) una vez.",
"Table {#}. Taylor polynomials of sin θ about θ = {#}.":
  "Tabla {#}. Polinomios de Taylor de sen θ alrededor de θ = {#}.",
"<span>B</span>Order n":
  "<span>B</span>Orden n",
"<span>D</span>sin θ":
  "<span>D</span>sen θ",
"<span>F</span>Relative error (%)":
  "<span>F</span>Error relativo (%)",
"Order n, row {#}":
  "Orden n, fila {#}",
"θ (rad), row {#}":
  "θ (rad), fila {#}",
"sin θ, row {#}":
  "sen θ, fila {#}",
"Tₙ(θ), row {#}":
  "Tₙ(θ), fila {#}",
"Relative error (%), row {#}":
  "Error relativo (%), fila {#}",
"Table {#}. A pendulum with L = {#} m, from the Pendulums demo.":
  "Tabla {#}. Un péndulo con L = {#} m, de la demo Péndulos.",
"<span>A</span>Release angle θ₀ (°)":
  "<span>A</span>Ángulo de liberación θ₀ (°)",
"<span>C</span>Exact period T (s)":
  "<span>C</span>Periodo exacto T (s)",
"<span>D</span>Longer than T₀ by (%)":
  "<span>D</span>Más largo que T₀ en (%)",
"Release angle θ₀ (°), row {#}":
  "Ángulo de liberación θ₀ (°), fila {#}",
"θ₀ (rad), row {#}":
  "θ₀ (rad), fila {#}",
"Exact period T (s), row {#}":
  "Periodo exacto T (s), fila {#}",
"Longer than T₀ by (%), row {#}":
  "Más largo que T₀ en (%), fila {#}",
"{#} θ₀²/{#} (%), row {#}":
  "{#} θ₀²/{#} (%), fila {#}",
"Graph Table {#} with <strong>Log scales</strong> ticked: relative error (vertical) against θ (horizontal), the n = {#} copy and the n = {#} copy each on its own graph. Find the slope of each line between its first and last points and compare with the powers {#} and {#} from the Background.":
  "Grafica la Tabla {#} con <strong>Escalas logarítmicas</strong> marcadas: el error relativo (vertical) contra θ (horizontal), la copia con n = {#} y la copia con n = {#}, cada una en su propia gráfica. Encuentra la pendiente de cada recta entre su primer y su último punto y compárala con las potencias {#} y {#} del Fondo.",
"Compare the {#}% angles the demo gave in steps A and B with your estimates in Before the lab {#}. Which estimate is closer, and why does the first term left out predict the n = {#} edge so well?":
  "Compara los ángulos de {#}% que dio la demo en los pasos A y B con tus estimaciones de Antes del laboratorio {#}. ¿Cuál estimación es más cercana, y por qué el primer término omitido predice tan bien el borde con n = {#}?",
"At θ = {#} rad, check Lagrange’s bound for n = {#}: here f⁽⁴⁾ = sin θ, so M = sin {#}. Work out M({#})⁴/{#}! and compare it with the error |sin {#} − T₃({#})|: set Probe θ to {#} at Order n = {#} and read the error under <strong>At the probe</strong>.":
  "Con θ = {#} rad, comprueba la cota de Lagrange para n = {#}: aquí f⁽⁴⁾ = sen θ, así que M = sen {#}. Calcula M({#})⁴/{#}! y compárala con el error |sen {#} − T₃({#})|: pon Sonda θ en {#} con Orden n = {#} y lee el error bajo <strong>En la sonda</strong>.",
"Fill in the θ₀ (rad) and {#} θ₀²/{#} columns of Table {#}. How well does θ₀²/{#} alone predict how much longer the period is, and where does it start to fall short?":
  "Llena las columnas θ₀ (rad) y {#} θ₀²/{#} de la Tabla {#}. ¿Qué tan bien predice θ₀²/{#} por sí sola cuánto más largo es el periodo, y dónde empieza a quedarse corta?",
"From Table {#}, estimate the release angle at which the period is {#}% longer than T₀. How does it compare with the angle at which sin θ ≈ θ is off by {#}%?":
  "A partir de la Tabla {#}, estima el ángulo de liberación en el que el periodo es {#}% más largo que T₀. ¿Cómo se compara con el ángulo en el que sen θ ≈ θ tiene un error de {#}%?",
"The numbers in both demos are computed, not measured: the same settings give the same digits. The limits here are the rounding of the readouts (four to six significant figures) and, in Table {#}, that the release angle can only be set in whole degrees. Say how many significant figures your slopes in Analysis {#} deserve.":
  "Los números de ambas demos se calculan, no se miden: los mismos ajustes dan las mismas cifras. Los límites aquí son el redondeo de las lecturas en pantalla (de cuatro a seis cifras significativas) y, en la Tabla {#}, que el ángulo de liberación solo se puede fijar en grados enteros. Di cuántas cifras significativas merecen tus pendientes del Análisis {#}.",
"Many textbooks say the small angle approximation is good below about {#}°. Using your results, say what “good” means there: good for sin θ itself, or for the period, and to what percent?":
  "Muchos libros de texto dicen que la aproximación de ángulo pequeño es buena por debajo de unos {#}°. Con tus resultados, di qué significa “buena” ahí: buena para sen θ mismo, o para el periodo, y con qué porcentaje.",
"Was your guess in Before the lab {#} right? Use Analysis {#} and the Background to explain why the period is less sensitive to the amplitude than sin θ is to θ.":
  "¿Fue correcta tu conjetura de Antes del laboratorio {#}? Usa el Análisis {#} y el Fondo para explicar por qué el periodo es menos sensible a la amplitud que sen θ a θ.",
"A pendulum clock swings out to {#}°. By what fraction is its period longer than T₀, and how many seconds a day would it lose if it were set by T₀?":
  "Un reloj de péndulo oscila hasta {#}°. ¿En qué fracción es su periodo más largo que T₀, y cuántos segundos al día atrasaría si se hubiera ajustado con T₀?",
"Before the lab answers, both data tables, the log–log graph of Table {#} with its slopes, and your answers to the Analysis and Questions. Say that the data are computed by the demos, not measured.":
  "Las respuestas de Antes del laboratorio, ambas tablas de datos, la gráfica log–log de la Tabla {#} con sus pendientes, y tus respuestas al Análisis y a las Preguntas. Indica que los datos los calculan las demos; no son mediciones.",
"Taylor Polynomials and Series":
  "Polinomios y series de Taylor"
});
