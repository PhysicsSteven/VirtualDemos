/* ws/pendulum in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/pendulum', {
"quadratic":
  "cuadrático",
"power law":
  "ley de potencia",
"exponential":
  "exponencial",
"rising exponential":
  "exponencial creciente",
"logarithm":
  "logaritmo",
"sine":
  "seno",
"damped sine":
  "seno amortiguado",
"resonance curve":
  "curva de resonancia",
"Gaussian":
  "gaussiana",
"single slit":
  "rendija única",
"Type":
  "Tipo",
"Mass (kg)":
  "Masa (kg)",
"Full period T (s)":
  "Periodo completo T (s)",
"Observation":
  "Observación",
"A negative τ means the curve grows instead of decaying.":
  "Un τ negativo significa que la curva crece en vez de decaer.",
"C is the value at x = {#} and C + A the value it levels off at; a negative τ means it runs away instead.":
  "C es el valor en x = {#} y C + A el valor al que se estabiliza; un τ negativo significa que, en cambio, se dispara.",
"Every x must be greater than zero.":
  "Todo x debe ser mayor que cero.",
"There is no offset: the curve goes through the origin when n > {#}. Every x must be greater than zero.":
  "No hay término constante: la curva pasa por el origen cuando n > {#}. Todo x debe ser mayor que cero.",
"f is searched up to one cycle for every two point spacings (faster waves look the same at these points); φ is in radians.":
  "f se busca hasta un ciclo por cada dos espaciados entre puntos (ondas más rápidas se ven iguales en estos puntos); φ está en radianes.",
"f is searched up to one cycle for every two point spacings; φ is in radians; a negative τ means the swing grows.":
  "f se busca hasta un ciclo por cada dos espaciados entre puntos; φ está en radianes; un τ negativo significa que la oscilación crece.",
"The amplitude of a driven oscillator against driving frequency (x): A is the response far below x₀, Q the quality factor. There is no offset.":
  "La amplitud de un oscilador forzado en función de la frecuencia de forzamiento (x): A es la respuesta muy por debajo de x₀, Q el factor de calidad. No hay término constante.",
"w is the distance from the center of the central peak to its first zero.":
  "w es la distancia del centro del pico central a su primer cero.",
"Measuring Gravity with a Pendulum | VirtualDemos":
  "Medición de la gravedad con un péndulo | VirtualDemos",
"Measuring Gravity with a Pendulum":
  "Medición de la gravedad con un péndulo",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#}, with the rotational dynamics of §§{#}–{#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#}, con la dinámica de rotación de §§{#}–{#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Simple pendulum; Does mass matter?; Large swings; Swinging rod; On the Moon. These are in the <strong>Photogate lab</strong> scene of the Pendulums demo, the scene it opens on; its other two scenes (<strong>Exact period</strong> and <strong>Double pendulum</strong>) go with the Normal Modes and Chaos worksheet.":
  "<strong>Configuraciones en la demo:</strong> Péndulo simple; ¿Importa la masa?; Oscilaciones grandes; Varilla oscilante; En la Luna. Están en la escena <strong>Laboratorio con fotocompuerta</strong> de la demo Péndulos, la escena con la que se abre; sus otras dos escenas (<strong>Periodo exacto</strong> y <strong>Péndulo doble</strong>) acompañan a la hoja de trabajo Modos normales y caos.",
"Drag the bob sideways to set the <strong>Release angle θ₀</strong>, or up and down along the string to set the <strong>Length L (pivot to bob center, or rod length)</strong>; pick the <strong>Mass</strong> from the rack of bobs. Keys on the picture: ← → θ₀, ↑ ↓ L. The Set up card on the picture has sliders and step buttons for exact values; it fades away while the pendulum swings and comes back when you pause, and you can drag it by its title to anywhere on the picture.":
  "Arrastra la lenteja hacia los lados para fijar el <strong>Ángulo de liberación θ₀</strong>, o arriba y abajo a lo largo de la cuerda para fijar la <strong>Longitud L (del pivote al centro de la lenteja, o longitud de la varilla)</strong>; elige la <strong>Masa</strong> en el estante de lentejas. Teclas sobre la imagen: ← → θ₀, ↑ ↓ L. La tarjeta Preparar sobre la imagen tiene deslizadores y botones de paso para valores exactos; se desvanece mientras el péndulo oscila y vuelve cuando pausas, y puedes arrastrarla por su título a cualquier lugar de la imagen.",
"Capture stores \\(L\\), \\(\\theta_0\\) and the last full period from the photogate. \\(T^2\\) against \\(L\\) uses bob rows with \\(\\theta_0 \\le 10°\\): slope \\(4\\pi^2/g\\). \\(T\\) against \\(\\theta_0\\) shows how far large swings depart from \\(T_0\\).":
  "Capturar guarda \\(L\\), \\(\\theta_0\\) y el último periodo completo de la fotocompuerta. \\(T^2\\) en función de \\(L\\) usa las filas de lenteja con \\(\\theta_0 \\le 10°\\): pendiente \\(4\\pi^2/g\\). \\(T\\) en función de \\(\\theta_0\\) muestra cuánto se apartan de \\(T_0\\) las oscilaciones grandes.",
"Blind hides the predicted periods and g from the fit; the photogate, the settings and the trace stay. The Mystery planet always hides its g.":
  "A ciegas oculta los periodos predichos y la g del ajuste; la fotocompuerta, los ajustes y la traza permanecen. El Planeta misterioso siempre oculta su g.",
"Bob: \\(T_0 = 2\\pi\\sqrt{L/g}\\); rod: \\(T_0 = 2\\pi\\sqrt{2L/3g}\\); any amplitude: \\(T = T_0\\,\\frac{2}{\\pi}\\,K\\!\\left(\\sin\\frac{\\theta_0}{2}\\right)\\), with \\(K\\) the complete elliptic integral of the first kind.":
  "Lenteja: \\(T_0 = 2\\pi\\sqrt{L/g}\\); varilla: \\(T_0 = 2\\pi\\sqrt{2L/3g}\\); cualquier amplitud: \\(T = T_0\\,\\frac{2}{\\pi}\\,K\\!\\left(\\sin\\frac{\\theta_0}{2}\\right)\\), con \\(K\\) la integral elíptica completa de primera especie.",
"Model: a point bob on a massless, inextensible string (or a thin uniform rod). A string can only pull, so the bob on a string is released from at most {#}° (above horizontal it would go slack and fall); the rod can start from up to {#}° about a frictionless pivot, integrated exactly enough (fourth order Runge–Kutta, {#} ms steps) that the photogate’s {#} s readings are reliable. Air drag, when on, is a small force in proportion to speed. The photogate times every second pass of the bottom.":
  "Modelo: una lenteja puntual en una cuerda sin masa e inextensible (o una varilla delgada uniforme). Una cuerda solo puede tirar, así que la lenteja en una cuerda se suelta desde {#}° como máximo (por encima de la horizontal la cuerda se aflojaría y la lenteja caería); la varilla puede empezar desde hasta {#}° alrededor de un pivote sin fricción, integrada con suficiente exactitud (Runge–Kutta de cuarto orden, pasos de {#} ms) para que las lecturas de {#} s de la fotocompuerta sean confiables. La resistencia del aire, cuando está activada, es una fuerza pequeña proporcional a la rapidez. La fotocompuerta cronometra cada segundo paso por el punto más bajo.",
"Determine gravitational acceleration from pendulum timing, test whether mass matters, and measure when the small angle approximation becomes inadequate.":
  "Determinar la aceleración de la gravedad cronometrando un péndulo, comprobar si la masa importa y medir cuándo la aproximación de ángulo pequeño deja de ser adecuada.",
"For a point bob on a light string of length \\(L\\), measured from pivot to bob center, the tangential equation is":
  "Para una lenteja puntual en una cuerda ligera de longitud \\(L\\), medida del pivote al centro de la lenteja, la ecuación tangencial es",
"\\[\\ddot\\theta=-\\frac{g}{L}\\sin\\theta.\\]":
  "\\[\\ddot\\theta=-\\frac{g}{L}\\sin\\theta.\\]",
"For small angles in radians, \\(\\sin\\theta \\approx \\theta\\), giving":
  "Para ángulos pequeños en radianes, \\(\\sin\\theta \\approx \\theta\\), lo que da",
"\\[T_0=2\\pi\\sqrt{\\frac{L}{g}},\\qquad T_0^2=\\frac{4\\pi^2}{g}L.\\]":
  "\\[T_0=2\\pi\\sqrt{\\frac{L}{g}},\\qquad T_0^2=\\frac{4\\pi^2}{g}L.\\]",
"Thus the slope \\(k\\) of \\(T^2\\) against \\(L\\) gives an approximate \\(g = 4\\pi^2/k\\). Finite amplitude increases the period. The first correction is \\(T/T_0 \\approx 1 + \\theta_0^2/16\\), where \\(\\theta_0\\) is in radians. A uniform rod pivoted at one end instead has small angle period \\(2\\pi\\sqrt{2L/(3g)}\\), with \\(L\\) the full rod length. The mass distribution matters even when total mass cancels.":
  "Así, la pendiente \\(k\\) de \\(T^2\\) en función de \\(L\\) da un valor aproximado \\(g = 4\\pi^2/k\\). Una amplitud finita aumenta el periodo. La primera corrección es \\(T/T_0 \\approx 1 + \\theta_0^2/16\\), con \\(\\theta_0\\) en radianes. Una varilla uniforme con pivote en un extremo tiene, en cambio, un periodo de ángulo pequeño \\(2\\pi\\sqrt{2L/(3g)}\\), con \\(L\\) la longitud total de la varilla. La distribución de la masa importa aunque la masa total se cancele.",
"Predict how period changes if length is multiplied by four. What if only the bob mass changes?":
  "Predice cómo cambia el periodo si la longitud se multiplica por cuatro. ¿Y si solo cambia la masa de la lenteja?",
"Why does timing every other bottom crossing measure a full period?":
  "¿Por qué cronometrar uno de cada dos pasos por el punto más bajo mide un periodo completo?",
"If a large angle period is used in the small angle formula, will the inferred \\(g\\) be too high or too low?":
  "Si se usa un periodo de ángulo grande en la fórmula de ángulo pequeño, ¿la \\(g\\) inferida resultará demasiado alta o demasiado baja?",
"On a real bench, secure the pivot and keep people and fragile equipment out of the swing. Use a light bob, release without pushing and follow the instructor’s angle limit. Do not let the bob strike the photogate.":
  "En un montaje real, asegura el pivote y mantén a las personas y el equipo frágil fuera del alcance de la oscilación. Usa una lenteja ligera, suéltala sin empujar y respeta el límite de ángulo que indique el instructor. No dejes que la lenteja golpee la fotocompuerta.",
"<strong>Length scan.</strong> Measure length from the pivot to the bob center. Release from {#}° without a push, keeping the same angle and mass for every length. Measure a full period at six lengths: {#}, {#}, {#}, {#}, {#} and {#} m. On a real bench, timing several complete oscillations can reduce reaction time error; record both the count and total time.":
  "<strong>Barrido de longitud.</strong> Mide la longitud del pivote al centro de la lenteja. Suelta desde {#}° sin empujar, con el mismo ángulo y la misma masa para cada longitud. Mide un periodo completo en seis longitudes: {#}, {#}, {#}, {#}, {#} y {#} m. En un montaje real, cronometrar varias oscilaciones completas puede reducir el error por tiempo de reacción; registra tanto el número de oscilaciones como el tiempo total.",
"<strong>Mass check.</strong> At \\(L = 1.00\\ \\text{m}\\) and the same small angle, compare periods for at least three masses. Keep bob geometry fixed on real equipment so the effective length does not change.":
  "<strong>Prueba de masa.</strong> Con \\(L = 1.00\\ \\text{m}\\) y el mismo ángulo pequeño, compara los periodos de al menos tres masas. En un equipo real, mantén fija la geometría de la lenteja para que la longitud efectiva no cambie.",
"<strong>Amplitude scan.</strong> Keep \\(L = 1.00\\ \\text{m}\\) and one mass. Measure periods at {#}°, {#}°, {#}°, {#}°, {#}°, {#}° and {#}°, with drag off in the simulation. Use the same planet throughout. Record the first completed period after each release. Limit the string bob investigation to {#}° or less: above that, a real string released from rest would go slack, while this simulation continues to impose a fixed length constraint.":
  "<strong>Barrido de amplitud.</strong> Mantén \\(L = 1.00\\ \\text{m}\\) y una sola masa. Mide los periodos a {#}°, {#}°, {#}°, {#}°, {#}°, {#}° y {#}°, con la resistencia del aire desactivada en la simulación. Usa el mismo planeta en todo el barrido. Registra el primer periodo completo después de cada liberación. Limita el estudio de la lenteja en cuerda a {#}° o menos: por encima, una cuerda real soltada desde el reposo se aflojaría, mientras que esta simulación sigue imponiendo una restricción de longitud fija.",
"<strong>Distributed mass.</strong> Compare a uniform rod with a point bob at the same nominal length, small release angle and gravity. Use the rod’s full length, not pivot to center distance, in its formula.":
  "<strong>Masa distribuida.</strong> Compara una varilla uniforme con una lenteja puntual con la misma longitud nominal, el mismo ángulo de liberación pequeño y la misma gravedad. Usa en su fórmula la longitud total de la varilla, no la distancia del pivote al centro.",
"<strong>Using the virtual apparatus.</strong> Use a simple pendulum with a bob on a string on Earth. Start at {#}° with air drag off and predictions and answers hidden. For the length scan, measure six lengths at the same mass and release angle. For each trial, reset the bob to its release angle before starting again; pausing alone does not reset the motion. Record a full period after at least three bottom crossings. Send each scan to the worksheet before clearing, so each scan gets its own copy of the Data table, and graph \\(T^2\\) against \\(L\\) and \\(T\\) against \\(\\theta_0\\). Keep the release angle at {#}° for the length fit, even though the fit accepts other angles up to {#}°. Compare a uniform rod with the bob using the same nominal length. If you investigate a mystery planet, keep the same planet throughout the scan; choosing it again generates a new gravity value.":
  "<strong>Uso del aparato virtual.</strong> Usa un péndulo simple con una lenteja en una cuerda, en la Tierra. Empieza a {#}° con la resistencia del aire desactivada y las predicciones y respuestas ocultas. Para el barrido de longitud, mide seis longitudes con la misma masa y el mismo ángulo de liberación. En cada ensayo, devuelve la lenteja a su ángulo de liberación antes de volver a empezar; pausar no reinicia el movimiento. Registra un periodo completo después de al menos tres pasos por el punto más bajo. Envía cada barrido a la hoja de trabajo antes de borrar, para que cada barrido tenga su propia copia de la tabla de datos, y grafica \\(T^2\\) en función de \\(L\\) y \\(T\\) en función de \\(\\theta_0\\). Mantén el ángulo de liberación en {#}° para el ajuste de longitud, aunque el ajuste acepta otros ángulos hasta {#}°. Compara una varilla uniforme con la lenteja usando la misma longitud nominal. Si estudias un planeta misterioso, mantén el mismo planeta en todo el barrido; elegirlo otra vez genera un nuevo valor de la gravedad.",
"<span>B</span>Type":
  "<span>B</span>Tipo",
"<span>D</span>\\(\\theta_0\\) (°)":
  "<span>D</span>\\(\\theta_0\\) (°)",
"<span>E</span>Mass (kg)":
  "<span>E</span>Masa (kg)",
"<span>F</span>Full period \\(T\\) (s)":
  "<span>F</span>Periodo completo \\(T\\) (s)",
"<span>H</span>Observation":
  "<span>H</span>Observación",
"Type, row {#}":
  "Tipo, fila {#}",
"θ_0 (°), row {#}":
  "θ_0 (°), fila {#}",
"Mass (kg), row {#}":
  "Masa (kg), fila {#}",
"Full period T (s), row {#}":
  "Periodo completo T (s), fila {#}",
"T^{#} (s²), row {#}":
  "T^{#} (s²), fila {#}",
"Observation, row {#}":
  "Observación, fila {#}",
"Record planet, drag setting and the number of oscillations timed. Keep length, mass, amplitude and rod comparisons in separate copies of the table.":
  "Registra el planeta, el ajuste de resistencia del aire y el número de oscilaciones cronometradas. Mantén las comparaciones de longitud, masa, amplitud y varilla en copias separadas de la tabla.",
"Fit \\(T^2\\) against \\(L\\) with a free intercept. Infer \\(g\\) and inspect residuals. Explain what length zero error would do to the intercept on a real bench.":
  "Ajusta \\(T^2\\) en función de \\(L\\) con la ordenada al origen libre. Infiere \\(g\\) y examina los residuos. Explica qué le haría a la ordenada al origen un error de cero en la longitud en un montaje real.",
"Estimate the finite amplitude bias using the first correction above. State whether it matters at your precision, then correct your inferred \\(g\\) by that factor and give the corrected value.":
  "Estima el sesgo por amplitud finita con la primera corrección de arriba. Indica si importa con tu precisión; luego corrige tu \\(g\\) inferida por ese factor y da el valor corregido.",
"Compare the mass trials without claiming that identical rounded readings prove exact independence in nature.":
  "Compara los ensayos de masa sin afirmar que lecturas redondeadas idénticas prueban una independencia exacta en la naturaleza.",
"Plot \\(T\\) against \\(\\theta_0\\). Compare with the small angle prediction and calculate the fractional period increase at each angle. Decide what angle range satisfies a stated tolerance, such as {#}%.":
  "Grafica \\(T\\) en función de \\(\\theta_0\\). Compara con la predicción de ángulo pequeño y calcula el aumento fraccional del periodo en cada ángulo. Decide qué intervalo de ángulos cumple una tolerancia dada, como {#}%.",
"Compare rod and bob periods. Explain the result using moment of inertia and gravitational torque rather than total mass alone.":
  "Compara los periodos de la varilla y de la lenteja. Explica el resultado con el momento de inercia y el torque gravitacional, no solo con la masa total.",
"The virtual photogate rounds period to {#} s; length and angle are prescribed model settings, not random readings. On a real bench include length measurement, pivot location, bob size, timing and release angle uncertainty. Since \\(T^2\\) is plotted, its uncertainty is approximately \\(2T\\) times the period uncertainty. Propagate fit slope uncertainty to \\(g\\), but also include finite amplitude, drag and length zero effects. Repeated identical simulated runs do not create independent noise. With drag on, amplitude changes during timing, so the conservative fixed amplitude curve is no longer an exact comparison.":
  "La fotocompuerta virtual redondea el periodo a {#} s; la longitud y el ángulo son ajustes fijados del modelo, no lecturas aleatorias. En un montaje real incluye la incertidumbre de la medición de la longitud, de la ubicación del pivote, del tamaño de la lenteja, del cronometraje y del ángulo de liberación. Como se grafica \\(T^2\\), su incertidumbre es aproximadamente \\(2T\\) veces la incertidumbre del periodo. Propaga la incertidumbre de la pendiente del ajuste a \\(g\\), pero incluye también los efectos de la amplitud finita, de la resistencia del aire y del cero de la longitud. Repetir corridas simuladas idénticas no crea ruido independiente. Con la resistencia del aire activada, la amplitud cambia durante el cronometraje, así que la curva conservativa de amplitud fija ya no es una comparación exacta.",
"Why does bob mass cancel from the ideal pendulum equation?":
  "¿Por qué la masa de la lenteja se cancela en la ecuación del péndulo ideal?",
"Why is a turning point to bottom time not a full period?":
  "¿Por qué el tiempo de un punto de retorno al punto más bajo no es un periodo completo?",
"Why does a uniform rod differ from a point bob with the same total mass and nominal length?":
  "¿Por qué una varilla uniforme difiere de una lenteja puntual con la misma masa total y la misma longitud nominal?",
"Why is the fixed length model unsuitable for a string bob released from rest above horizontal?":
  "¿Por qué el modelo de longitud fija no sirve para una lenteja en cuerda soltada desde el reposo por encima de la horizontal?",
"Prelab answers, settings and separate data/CSV files, length fit with residuals, \\(g\\) and uncertainty with an amplitude bias estimate, mass and amplitude comparisons, rod interpretation, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ajustes y archivos de datos/CSV separados, ajuste de longitud con residuos, \\(g\\) y su incertidumbre con una estimación del sesgo por amplitud, comparaciones de masa y amplitud, interpretación de la varilla, y respuestas a las preguntas. Identifica los datos simulados.",
"Complete elliptic integral of the first kind":
  "Integral elíptica completa de primera especie",
"Length, pivot to bob center (for the rod, its full length)":
  "Longitud, del pivote al centro de la lenteja (para la varilla, su longitud total)",
"Full period":
  "Periodo completo",
"Small angle period":
  "Periodo de ángulo pequeño",
"Angular acceleration, d²θ/dt²":
  "Aceleración angular, d²θ/dt²",
"Gravitational acceleration":
  "Aceleración de la gravedad",
"Slope of T² against L":
  "Pendiente de T² en función de L",
"Angle of the string from vertical":
  "Ángulo de la cuerda respecto de la vertical",
"Release angle":
  "Ángulo de liberación",
"Unit: {unit}":
  "Unidad: {unit}",
"Unit: m":
  "Unidad: m",
"Unit: m/s²":
  "Unidad: m/s²",
"Type a value, or = to start a formula.":
  "Escribe un valor, o = para empezar una fórmula.",
"<b>A1</b>Type a value, or = to start a formula.":
  "<b>A1</b>Escribe un valor, o = para empezar una fórmula.",
"Saving…":
  "Guardando…",
"This divides by zero.":
  "Esto divide entre cero.",
"Fill down to row {n}":
  "Rellenar hacia abajo hasta la fila {n}",
"<span>#DIV/{#}! This divides by zero.</span>":
  "<span>#DIV/{#}! Esto divide entre cero.</span>",
"Fill down to row {#}":
  "Rellenar hacia abajo hasta la fila {#}",
"SQRT of a negative number.":
  "SQRT de un número negativo.",
"=SQRT(-{#})":
  "=SQRT(-{#})",
"<span>#NUM! SQRT of a negative number.</span>":
  "<span>#NUM! SQRT de un número negativo.</span>",
"LN needs a positive number.":
  "LN necesita un número positivo.",
"=LN({#})":
  "=LN({#})",
"<span>#NUM! LN needs a positive number.</span>":
  "<span>#NUM! LN necesita un número positivo.</span>",
"A closing parenthesis is missing.":
  "Falta un paréntesis de cierre.",
"<span>#ERROR! A closing parenthesis is missing.</span>":
  "<span>#ERROR! Falta un paréntesis de cierre.</span>",
"Nothing comes after the = sign.":
  "No hay nada después del signo =.",
"<span>#ERROR! Nothing comes after the = sign.</span>":
  "<span>#ERROR! No hay nada después del signo =.</span>",
"A range such as B1:B5 goes inside a function, as in AVERAGE(B1:B5).":
  "Un rango como B1:B5 va dentro de una función, como en AVERAGE(B1:B5).",
"<span>#VALUE! A range such as B1:B5 goes inside a function, as in AVERAGE(B1:B5).</span>":
  "<span>#VALUE! Un rango como B1:B5 va dentro de una función, como en AVERAGE(B1:B5).</span>",
"Saved in this browser at {t}.":
  "Guardado en este navegador a las {t}.",
"Saved in this browser at {#}:{#} AM.":
  "Guardado en este navegador a las {#}:{#} AM.",
"Heading of column {c}":
  "Encabezado de la columna {c}",
"Heading (unit)":
  "Encabezado (unidad)",
"Column {c}, row {n}":
  "Columna {c}, fila {n}",
"Column {n}":
  "Columna {n}",
"Column I, row {#}":
  "Columna I, fila {#}",
"<b>A4</b>Type a value, or = to start a formula.":
  "<b>A4</b>Escribe un valor, o = para empezar una fórmula.",
"Heading of column I":
  "Encabezado de la columna I",
"Column I":
  "Columna I",
"Label for copy {n} of the {table} table":
  "Etiqueta de la copia {n} de la tabla {table}",
"Remove this copy":
  "Quitar esta copia",
"Copy {n}:":
  "Copia {n}:",
"Settings and notes for copy {n} of the {table} table":
  "Ajustes y notas de la copia {n} de la tabla {table}",
"Settings and notes for this copy":
  "Ajustes y notas de esta copia",
"Copy {#}:":
  "Copia {#}:",
"Label for copy {#} of the Data table":
  "Etiqueta de la copia {#} de la tabla Datos",
"Start a cell with = to calculate, as in =B1^{#} or =AVERAGE(C1:C5). Columns are named by the letters above the headings, rows by the numbers at the left.":
  "Empieza una celda con = para calcular, como en =B1^{#} o =AVERAGE(C1:C5). Las columnas se nombran con las letras sobre los encabezados y las filas con los números a la izquierda.",
"{y} against {x}":
  "{y} en función de {x}",
"{title}, {n} points":
  "{title}, {n} puntos",
"residual":
  "residuo",
"slope":
  "pendiente",
"intercept":
  "ordenada al origen",
"{n} points. Least squares line with a free intercept and equal weights; uncertainties are standard errors from the scatter about the line (n − {#} degrees of freedom). What the slope tells you is for you to work out.":
  "{n} puntos. Recta de mínimos cuadrados con ordenada al origen libre y pesos iguales; las incertidumbres son errores estándar a partir de la dispersión alrededor de la recta (n − {#} grados de libertad). Interpretar la pendiente te toca a ti.",
"<b>slope: </b>({#} ± {#})<br><b>intercept: </b>({#} ± {#})":
  "<b>pendiente: </b>({#} ± {#})<br><b>ordenada al origen: </b>({#} ± {#})",
"{#} points. Least squares line with a free intercept and equal weights; uncertainties are standard errors from the scatter about the line (n − {#} degrees of freedom). What the slope tells you is for you to work out.":
  "{#} puntos. Recta de mínimos cuadrados con ordenada al origen libre y pesos iguales; las incertidumbres son errores estándar a partir de la dispersión alrededor de la recta (n − {#} grados de libertad). Interpretar la pendiente te toca a ti.",
"fit:":
  "ajuste:",
"{n} points. Least squares quadratic y = a + bx + cx² with all three coefficients free and equal weights; uncertainties are standard errors from the scatter about the curve (n − {#} degrees of freedom). What the coefficients tell you is for you to work out.":
  "{n} puntos. Cuadrática de mínimos cuadrados y = a + bx + cx² con los tres coeficientes libres y pesos iguales; las incertidumbres son errores estándar a partir de la dispersión alrededor de la curva (n − {#} grados de libertad). Interpretar los coeficientes te toca a ti.",
"{#} points. Least squares quadratic y = a + bx + cx² with all three coefficients free and equal weights; uncertainties are standard errors from the scatter about the curve (n − {#} degrees of freedom). What the coefficients tell you is for you to work out.":
  "{#} puntos. Cuadrática de mínimos cuadrados y = a + bx + cx² con los tres coeficientes libres y pesos iguales; las incertidumbres son errores estándar a partir de la dispersión alrededor de la curva (n − {#} grados de libertad). Interpretar los coeficientes te toca a ti.",
"{form}, with y = {y} and x = {x}":
  "{form}, con y = {y} y x = {x}",
"{n} points. Least squares fit with all {k} parameters free and equal weights, found by a search over starting values and then iteration (Levenberg–Marquardt); uncertainties are standard errors from the scatter about the curve (n − {k} degrees of freedom) and the curvature of the fit at its best values. {note} What the parameters tell you is for you to work out.":
  "{n} puntos. Ajuste por mínimos cuadrados con los {k} parámetros libres y pesos iguales, encontrado con una búsqueda sobre valores iniciales y luego iteración (Levenberg–Marquardt); las incertidumbres son errores estándar a partir de la dispersión alrededor de la curva (n − {k} grados de libertad) y de la curvatura del ajuste en sus mejores valores. {note} Interpretar los parámetros te toca a ti.",
"{#} points. Least squares fit with all {#} parameters free and equal weights, found by a search over starting values and then iteration (Levenberg–Marquardt); uncertainties are standard errors from the scatter about the curve (n − {#} degrees of freedom) and the curvature of the fit at its best values. There is no offset: the curve goes through the origin when n > {#}. Every x must be greater than zero. What the parameters tell you is for you to work out.":
  "{#} puntos. Ajuste por mínimos cuadrados con los {#} parámetros libres y pesos iguales, encontrado con una búsqueda sobre valores iniciales y luego iteración (Levenberg–Marquardt); las incertidumbres son errores estándar a partir de la dispersión alrededor de la curva (n − {#} grados de libertad) y de la curvatura del ajuste en sus mejores valores. No hay término constante: la curva pasa por el origen cuando n > {#}. Todo x debe ser mayor que cero. Interpretar los parámetros te toca a ti.",
"The {fit} fit could not settle on these points. Check the columns, or try another kind of fit.":
  "El ajuste {fit} no logró converger con estos puntos. Revisa las columnas, o prueba otro tipo de ajuste.",
"The exponential fit could not settle on these points. Check the columns, or try another kind of fit.":
  "El ajuste exponencial no logró converger con estos puntos. Revisa las columnas, o prueba otro tipo de ajuste.",
"The rising exponential fit could not settle on these points. Check the columns, or try another kind of fit.":
  "El ajuste exponencial creciente no logró converger con estos puntos. Revisa las columnas, o prueba otro tipo de ajuste.",
"{#} points. Least squares fit with all {#} parameters free and equal weights, found by a search over starting values and then iteration (Levenberg–Marquardt); uncertainties are standard errors from the scatter about the curve (n − {#} degrees of freedom) and the curvature of the fit at its best values. Every x must be greater than zero. What the parameters tell you is for you to work out.":
  "{#} puntos. Ajuste por mínimos cuadrados con los {#} parámetros libres y pesos iguales, encontrado con una búsqueda sobre valores iniciales y luego iteración (Levenberg–Marquardt); las incertidumbres son errores estándar a partir de la dispersión alrededor de la curva (n − {#} grados de libertad) y de la curvatura del ajuste en sus mejores valores. Todo x debe ser mayor que cero. Interpretar los parámetros te toca a ti.",
"(uncertainty needs at least {n} points)":
  "(la incertidumbre requiere al menos {n} puntos)",
"{#} points. Least squares fit with all {#} parameters free and equal weights, found by a search over starting values and then iteration (Levenberg–Marquardt); uncertainties are standard errors from the scatter about the curve (n − {#} degrees of freedom) and the curvature of the fit at its best values. f is searched up to one cycle for every two point spacings (faster waves look the same at these points); φ is in radians. What the parameters tell you is for you to work out.":
  "{#} puntos. Ajuste por mínimos cuadrados con los {#} parámetros libres y pesos iguales, encontrado con una búsqueda sobre valores iniciales y luego iteración (Levenberg–Marquardt); las incertidumbres son errores estándar a partir de la dispersión alrededor de la curva (n − {#} grados de libertad) y de la curvatura del ajuste en sus mejores valores. f se busca hasta un ciclo por cada dos espaciados entre puntos (ondas más rápidas se ven iguales en estos puntos); φ está en radianes. Interpretar los parámetros te toca a ti.",
"A {fit} fit needs points at {n} or more different values of {x}.":
  "Un ajuste {fit} necesita puntos en {n} o más valores distintos de {x}.",
"The resonance curve fit could not settle on these points. Check the columns, or try another kind of fit.":
  "El ajuste curva de resonancia no logró converger con estos puntos. Revisa las columnas, o prueba otro tipo de ajuste.",
"{#} points. Least squares fit with all {#} parameters free and equal weights, found by a search over starting values and then iteration (Levenberg–Marquardt); uncertainties are standard errors from the scatter about the curve (n − {#} degrees of freedom) and the curvature of the fit at its best values. What the parameters tell you is for you to work out.":
  "{#} puntos. Ajuste por mínimos cuadrados con los {#} parámetros libres y pesos iguales, encontrado con una búsqueda sobre valores iniciales y luego iteración (Levenberg–Marquardt); las incertidumbres son errores estándar a partir de la dispersión alrededor de la curva (n − {#} grados de libertad) y de la curvatura del ajuste en sus mejores valores. Interpretar los parámetros te toca a ti.",
"{#} points. Least squares fit with all {#} parameters free and equal weights, found by a search over starting values and then iteration (Levenberg–Marquardt); uncertainties are standard errors from the scatter about the curve (n − {#} degrees of freedom) and the curvature of the fit at its best values. w is the distance from the center of the central peak to its first zero. What the parameters tell you is for you to work out.":
  "{#} puntos. Ajuste por mínimos cuadrados con los {#} parámetros libres y pesos iguales, encontrado con una búsqueda sobre valores iniciales y luego iteración (Levenberg–Marquardt); las incertidumbres son errores estándar a partir de la dispersión alrededor de la curva (n − {#} grados de libertad) y de la curvatura del ajuste en sus mejores valores. w es la distancia del centro del pico central a su primer cero. Interpretar los parámetros te toca a ti.",
"{chi2} for ν = {nu} degrees of freedom":
  "{chi2} para ν = {nu} grados de libertad",
"P(χ² this large or larger):":
  "P(χ² así de grande o mayor):",
"{n} points with error bars from {col}. Weighted least squares: each point counts with weight {#}/σ², all {k} parameters free. The uncertainties come from the error bars alone, not from the scatter. χ² = Σ((y − fit)/σ)², ν = n − {k}, and P is the chance of a χ² at least this large if the curve is right and the error bars are true. {note} What the numbers tell you is for you to work out.":
  "{n} puntos con barras de error de {col}. Mínimos cuadrados ponderados: cada punto cuenta con peso {#}/σ², los {k} parámetros libres. Las incertidumbres provienen solo de las barras de error, no de la dispersión. χ² = Σ((y − fit)/σ)², ν = n − {k}, y P es la probabilidad de un χ² al menos así de grande si la curva es correcta y las barras de error son verdaderas. {note} Interpretar los números te toca a ti.",
"<b>χ²: </b>{#} for ν = {#} degrees of freedom<br><b>χ²/ν: </b>{#}<br><b>P(χ² this large or larger): </b>{#}":
  "<b>χ²: </b>{#} para ν = {#} grados de libertad<br><b>χ²/ν: </b>{#}<br><b>P(χ² así de grande o mayor): </b>{#}",
"{chi2} for ν = {#} degree of freedom":
  "{chi2} para ν = {#} grado de libertad",
"<b>χ²: </b>{#} for ν = {#} degree of freedom<br><b>χ²/ν: </b>{#}<br><b>P(χ² this large or larger): </b>{#}":
  "<b>χ²: </b>{#} para ν = {#} grado de libertad<br><b>χ²/ν: </b>{#}<br><b>P(χ² así de grande o mayor): </b>{#}",
"Every point has the same {x} ({value}), so there is no slope to fit. Use rows where {x} changes, or choose another column.":
  "Todos los puntos tienen el mismo {x} ({value}), así que no hay pendiente que ajustar. Usa filas en las que {x} cambie, o elige otra columna.",
"Every point has the same Scan ({#}), so there is no slope to fit. Use rows where Scan changes, or choose another column.":
  "Todos los puntos tienen el mismo Barrido ({#}), así que no hay pendiente que ajustar. Usa filas en las que Barrido cambie, o elige otra columna.",
"Save file downloaded. Open it with Open a saved file on any computer.":
  "Archivo descargado. Ábrelo con Abrir un archivo guardado en cualquier computadora.",
"Your work from {when} is back.":
  "Tu trabajo del {when} se recuperó.",
"Pendulums":
  "Péndulos",
"New readings from the {demo} demo:":
  "Lecturas nuevas de la demo {demo}:",
"{n} rows, sent {when}.":
  "{n} filas, enviadas el {when}.",
"Put these readings in my table":
  "Poner estas lecturas en mi tabla",
"Download them as CSV":
  "Descargarlas como CSV",
"Not now":
  "Ahora no",
"Your work from Nov {#}, {#}, {#}:{#} AM is back.":
  "Tu trabajo del Nov {#}, {#}, {#}:{#} AM se recuperó.",
"Readings from the {demo} demo":
  "Lecturas de la demo {demo}",
"{n} readings from the {demo} demo are in your table.":
  "{n} lecturas de la demo {demo} están en tu tabla.",
"{#} row, sent {when}.":
  "{#} fila, enviada el {when}.",
"Update my table with these readings":
  "Actualizar mi tabla con estas lecturas",
"Updating replaces the demo's columns in copy {n} with these readings; your other columns and notes stay.":
  "Actualizar reemplaza las columnas de la demo en la copia {n} con estas lecturas; tus otras columnas y notas se conservan.",
"Updating replaces the demo's columns in copy {#} with these readings; your other columns and notes stay.":
  "Actualizar reemplaza las columnas de la demo en la copia {#} con estas lecturas; tus otras columnas y notas se conservan."
});
