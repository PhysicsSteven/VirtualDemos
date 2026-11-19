/* ws/errors-and-power in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/errors-and-power', {
"Sample size n":
  "Tamaño de muestra n",
"True effect (m/s²)":
  "Efecto verdadero (m/s²)",
"Studies":
  "Estudios",
"Rejections of H₀":
  "Rechazos de H₀",
"Fraction rejected":
  "Fracción rechazada",
"Test":
  "Prueba",
"Statistic":
  "Estadístico",
"p value":
  "Valor p",
"Decision":
  "Decisión",
"Type I Errors, Type II Errors and Power | VirtualDemos":
  "Errores de tipo I, errores de tipo II y potencia | VirtualDemos",
"Type I Errors, Type II Errors and Power":
  "Errores de tipo I, errores de tipo II y potencia",
"Student laboratory · Statistics for physics":
  "Laboratorio para estudiantes · Estadística para la física",
"Textbook: OpenStax <em>Introductory Statistics 2e</em>, §§{#} to {#} (null and alternative hypotheses, outcomes and the Type I and Type II errors, the distribution needed for a test, rare events and the decision, full hypothesis test examples, tests of a single mean and a single proportion). Access for free at https://openstax.org/details/books/introductory-statistics-2e.":
  "Libro de texto: OpenStax <em>Introductory Statistics 2e</em>, §§{#} a {#} (hipótesis nula y alternativa, resultados y los errores de tipo I y tipo II, la distribución necesaria para una prueba, eventos raros y la decisión, ejemplos completos de pruebas de hipótesis, pruebas de una media y de una proporción). Acceso gratuito en https://openstax.org/details/books/introductory-statistics-2e.",
"<strong>Setups in the demo:</strong> Pendulum g: is it {#}? (t test); Drop timer, σ known: is g low? (z test); Detector efficiency: above {#} %? (one proportion); A die: are sixes one in six? (one proportion); Two photogates, σ known: same period? (two means, z); Two stopwatch timers: same period? (two means, Welch t); Two detectors: same efficiency? (two proportions); New photogate: did it change the period? (matched pairs).":
  "<strong>Configuraciones de la demo:</strong> g del péndulo: ¿es {#}? (prueba t); Cronómetro de caída, σ conocida: ¿g sale bajo? (prueba z); Eficiencia del detector: ¿mayor que {#} %? (una proporción); Un dado: ¿los seises son uno de cada seis? (una proporción); Dos fotocompuertas, σ conocida: ¿mismo periodo? (dos medias, z); Dos cronómetros de mano: ¿mismo periodo? (dos medias, t de Welch); Dos detectores: ¿misma eficiencia? (dos proporciones); Nueva fotocompuerta: ¿cambió el periodo? (pares apareados).",
"The top of the picture shows one sample (your study): the dots are the measured values, the triangle is their mean. Under it is the null distribution of the test statistic, the curve the statistic follows when H₀ is true. Your statistic is the pin; the p value is the shaded area beyond it. The gray bands are the rejection region at the significance level α.":
  "La parte de arriba de la imagen muestra una muestra (tu estudio): los puntos son los valores medidos y el triángulo es su media. Debajo está la distribución nula del estadístico de prueba, la curva que sigue el estadístico cuando H₀ es verdadera. Tu estadístico es el alfiler; el valor p es el área sombreada más allá de él. Las bandas grises son la región de rechazo al nivel de significancia α.",
"The four cards under the picture are the book’s four steps: <strong>Hypotheses</strong>, <strong>Distribution</strong>, <strong>p value</strong>, <strong>Decision and conclusion</strong>.":
  "Las cuatro tarjetas debajo de la imagen son los cuatro pasos del libro: <strong>Hipótesis</strong>, <strong>Distribución</strong>, <strong>Valor p</strong>, <strong>Decisión y conclusión</strong>.",
"In <strong>The test</strong> card, choose the <strong>Alternative</strong> (Left tailed, Two tailed or Right tailed) and the <strong>Significance level α</strong> ({#}, {#} or {#}). In <strong>The study</strong> card, <strong>Sample size n</strong> sets how many measurements each study takes, and <strong>New draw</strong> gives a new sample. In <strong>The truth</strong> card, the <strong>True mean μ</strong> slider sets what the simulation really draws from; the test never sees it. <strong>Make H₀ true</strong> sets the truth equal to the value H₀ names. You can click any slider’s number and type a value.":
  "En la tarjeta <strong>La prueba</strong>, elige la <strong>Alternativa</strong> (Cola izquierda, Dos colas o Cola derecha) y el <strong>Nivel de significancia α</strong> ({#}, {#} o {#}). En la tarjeta <strong>El estudio</strong>, <strong>Tamaño de muestra n</strong> fija cuántas mediciones toma cada estudio, y <strong>Nueva muestra</strong> da una muestra nueva. En la tarjeta <strong>La verdad</strong>, el deslizador <strong>Media verdadera μ</strong> fija de dónde genera realmente los datos la simulación; la prueba nunca lo ve. <strong>Hacer verdadera H₀</strong> iguala la verdad al valor que nombra H₀. Puedes hacer clic en el número de cualquier deslizador y escribir un valor.",
"<strong>Play</strong> (top left of the picture) runs {#} studies like yours, each with new simulated data, in about five seconds. The histogram at the bottom left fills with their statistics; the colored ones rejected H₀. The line under the picture tallies <strong>Studies</strong>, <strong>Rejected H₀</strong> and <strong>Fraction rejected</strong> with its standard error. Changing α or the alternative recounts the same studies; changing n or the truth starts over.":
  "<strong>Iniciar</strong> (arriba a la izquierda de la imagen) realiza {#} estudios como el tuyo, cada uno con nuevos datos simulados, en unos cinco segundos. El histograma de abajo a la izquierda se llena con sus estadísticos; los de color rechazaron H₀. La línea debajo de la imagen cuenta <strong>Estudios</strong>, <strong>H₀ rechazada</strong> y <strong>Fracción rechazada</strong> con su error estándar. Cambiar α o la alternativa vuelve a contar los mismos estudios; cambiar n o la verdad empieza de nuevo.",
"The bottom right is the power curve: the chance of rejecting H₀ against the true value, for this n and α (exact for z tests; for t tests worked out numerically). Each finished run adds a dot.":
  "Abajo a la derecha está la curva de potencia: la probabilidad de rechazar H₀ contra el valor verdadero, para estos n y α (exacta para las pruebas z; para las pruebas t calculada numéricamente). Cada corrida terminada agrega un punto.",
"<strong>Record reading</strong> stores the settings, your sample’s statistic, p value and decision, and the tally of the studies run. <strong>Export to worksheet</strong> fills the Data tables below; <strong>Clear</strong> starts a new series. All data are simulated by the demo; the draws are seeded, so Draw {#} is the same for everyone.":
  "<strong>Registrar lectura</strong> guarda los ajustes, el estadístico, el valor p y la decisión de tu muestra, y el conteo de los estudios realizados. <strong>Exportar a la hoja</strong> llena las tablas de Datos de abajo; <strong>Borrar</strong> empieza una nueva serie. Todos los datos los simula la demo; las muestras tienen semilla, así que la Muestra {#} es la misma para todos.",
"See what the significance level α really promises by running a thousand studies at once: how often a test rejects a true null hypothesis (Type I errors), and how often it catches a false one (power) as the size of the effect and the number of measurements change. Then carry out two complete tests the way the book does.":
  "Ve lo que el nivel de significancia α promete en realidad realizando mil estudios a la vez: qué tan seguido una prueba rechaza una hipótesis nula verdadera (errores de tipo I), y qué tan seguido detecta una falsa (potencia) al cambiar el tamaño del efecto y el número de mediciones. Luego realiza dos pruebas completas como lo hace el libro.",
"<strong>A hypothesis test</strong> starts from a null hypothesis H₀, a definite claim such as “this pendulum setup measures g = {#} m/s² on average”, and an alternative Hₐ, what you suspect instead (μ ≠ {#}, μ &lt; {#} or μ > {#}). You take a sample, compute a test statistic, and ask: if H₀ were true, how likely is a statistic at least this far from what H₀ predicts? That probability is the <strong>p value</strong>. If it is smaller than a level α chosen in advance, the sample is too rare to blame on chance and you <strong>reject H₀</strong>; otherwise you <strong>do not reject H₀</strong>. Not rejecting is not proving H₀ true: it only means the data are not strong enough evidence against it.":
  "<strong>Una prueba de hipótesis</strong> parte de una hipótesis nula H₀, una afirmación definida como “este montaje de péndulo mide g = {#} m/s² en promedio”, y una alternativa Hₐ, lo que sospechas en su lugar (μ ≠ {#}, μ &lt; {#} o μ > {#}). Tomas una muestra, calculas un estadístico de prueba y te preguntas: si H₀ fuera verdadera, ¿qué tan probable es un estadístico al menos así de lejos de lo que predice H₀? Esa probabilidad es el <strong>valor p</strong>. Si es menor que un nivel α elegido de antemano, la muestra es demasiado rara para atribuirla al azar y <strong>rechazas H₀</strong>; si no, <strong>no rechazas H₀</strong>. No rechazar no es probar que H₀ es verdadera: solo significa que los datos no son evidencia suficiente en su contra.",
"<strong>The statistic.</strong> For one mean with the population σ known, \\(z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n} }\\) follows the standard normal distribution when H₀ is true. With σ unknown, the test uses the sample standard deviation s instead, and \\(t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n} }\\) follows Student’s t distribution with df = n − {#}. For one proportion, with x successes in n trials and p′ = x/n, \\(z = \\frac{p' - p_0}{\\sqrt{p_0 q_0 / n} }, \\quad q_0 = 1 - p_0,\\) is close to standard normal when \\(np_0\\) and \\(nq_0\\) are both more than {#}.":
  "<strong>El estadístico.</strong> Para una media con la σ de la población conocida, \\(z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n} }\\) sigue la distribución normal estándar cuando H₀ es verdadera. Con σ desconocida, la prueba usa en su lugar la desviación estándar muestral s, y \\(t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n} }\\) sigue la distribución t de Student con gl = n − {#}. Para una proporción, con x éxitos en n ensayos y p′ = x/n, \\(z = \\frac{p' - p_0}{\\sqrt{p_0 q_0 / n} }, \\quad q_0 = 1 - p_0,\\) es cercana a la normal estándar cuando \\(np_0\\) y \\(nq_0\\) son ambos mayores que {#}.",
"<strong>Two ways to be wrong.</strong> Each test ends in one of four ways:":
  "<strong>Dos formas de equivocarse.</strong> Cada prueba termina de una de cuatro formas:",
"H₀ is true and you reject it: a <strong>Type I error</strong>. Its probability is α.":
  "H₀ es verdadera y la rechazas: un <strong>error de tipo I</strong>. Su probabilidad es α.",
"H₀ is true and you do not reject it: correct.":
  "H₀ es verdadera y no la rechazas: correcto.",
"H₀ is false and you do not reject it: a <strong>Type II error</strong>. Its probability is called β.":
  "H₀ es falsa y no la rechazas: un <strong>error de tipo II</strong>. Su probabilidad se llama β.",
"H₀ is false and you reject it: correct. Its probability, {#} − β, is the <strong>power</strong> of the test.":
  "H₀ es falsa y la rechazas: correcto. Su probabilidad, {#} − β, es la <strong>potencia</strong> de la prueba.",
"The probability of a Type I error is α itself: when H₀ is true, the statistic lands in the rejection region a fraction α of the time, whatever the sample size. The probability β of a Type II error depends on how false H₀ is. A small true effect, a large spread or a small sample all make the statistic hard to tell from chance, so β is large and the <strong>power</strong> {#} − β is small. The power grows with the effect measured in standard errors, \\(\\frac{\\mu - \\mu_0}{\\sigma/\\sqrt{n} },\\) so to detect half the effect with the same power you need four times as many measurements.":
  "La probabilidad de un error de tipo I es α misma: cuando H₀ es verdadera, el estadístico cae en la región de rechazo una fracción α de las veces, sea cual sea el tamaño de la muestra. La probabilidad β de un error de tipo II depende de qué tan falsa sea H₀. Un efecto verdadero pequeño, una dispersión grande o una muestra pequeña hacen que el estadístico sea difícil de distinguir del azar, así que β es grande y la <strong>potencia</strong> {#} − β es pequeña. La potencia crece con el efecto medido en errores estándar, \\(\\frac{\\mu - \\mu_0}{\\sigma/\\sqrt{n} },\\) así que para detectar la mitad del efecto con la misma potencia necesitas cuatro veces más mediciones.",
"<strong>Counting with simulation.</strong> If N studies are run and k of them reject H₀, the fraction f = k/N estimates the rejection probability with a standard error \\(\\sqrt{f(1 - f)/N}\\). With N = {#} and f near {#} that is about {#}.":
  "<strong>Contar con simulación.</strong> Si se realizan N estudios y k de ellos rechazan H₀, la fracción f = k/N estima la probabilidad de rechazo con un error estándar \\(\\sqrt{f(1 - f)/N}\\). Con N = {#} y f cerca de {#}, eso es aproximadamente {#}.",
"A pendulum gives g from n = {#} timings with sample mean {#} m/s² and s = {#} m/s². Compute t for H₀: μ = {#} m/s². Is it larger or smaller than the two tailed critical value {#} for df = {#}?":
  "Un péndulo da g a partir de n = {#} mediciones de tiempo con media muestral {#} m/s² y s = {#} m/s². Calcula t para H₀: μ = {#} m/s². ¿Es mayor o menor que el valor crítico de dos colas {#} para gl = {#}?",
"Of the two ways to be wrong, which error does a careful lab make if it reports “the setup is biased” when it is not? Which error does it make if it misses a real {#} m/s² bias?":
  "De las dos formas de equivocarse, ¿qué error comete un laboratorio cuidadoso si reporta “el montaje está sesgado” cuando no lo está? ¿Qué error comete si no detecta un sesgo real de {#} m/s²?",
"Predict before you look: H₀ is true, α = {#}, and {#} studies of n = {#} are run. About how many will reject H₀? If each study took n = {#} measurements instead, would that number go up, go down, or stay about the same? Write your guesses and one sentence of reasoning for each.":
  "Predice antes de mirar: H₀ es verdadera, α = {#}, y se realizan {#} estudios de n = {#}. ¿Aproximadamente cuántos rechazarán H₀? Si cada estudio tomara n = {#} mediciones, ¿ese número subiría, bajaría o quedaría más o menos igual? Escribe tus predicciones y una oración de razonamiento para cada una.",
"<strong>A. Type I errors.</strong> Press the setup <strong>Pendulum g: is it {#}? (t test)</strong> in the right panel. It opens with the truth equal to {#} m/s² (H₀ is true), <strong>Sample size n</strong> = {#}, <strong>Two tailed</strong> and α = {#}. Press <strong>Play</strong> and wait for {#} studies to finish. Choose α = <strong>{#}</strong> in The test card and press <strong>Record reading</strong> in the Readings section; then α = <strong>{#}</strong> and record; then α = <strong>{#}</strong> and record. Now set <strong>Sample size n</strong> to {#} (click its number and type {#}), press <strong>Play</strong> again, and record at α = {#}, {#} and {#} the same way. Press <strong>Export to worksheet</strong> (Table {#}), then <strong>Clear</strong>.":
  "<strong>A. Errores de tipo I.</strong> Presiona la configuración <strong>g del péndulo: ¿es {#}? (prueba t)</strong> en el panel derecho. Abre con la verdad igual a {#} m/s² (H₀ es verdadera), <strong>Tamaño de muestra n</strong> = {#}, <strong>Dos colas</strong> y α = {#}. Presiona <strong>Iniciar</strong> y espera a que terminen {#} estudios. Elige α = <strong>{#}</strong> en la tarjeta La prueba y presiona <strong>Registrar lectura</strong> en la sección de Lecturas; luego α = <strong>{#}</strong> y registra; luego α = <strong>{#}</strong> y registra. Ahora fija <strong>Tamaño de muestra n</strong> en {#} (haz clic en su número y escribe {#}), presiona <strong>Iniciar</strong> otra vez y registra con α = {#}, {#} y {#} de la misma forma. Presiona <strong>Exportar a la hoja</strong> (Tabla {#}) y luego <strong>Borrar</strong>.",
"<strong>B. Power against the effect.</strong> Set <strong>Sample size n</strong> back to {#} and α to {#}. In The truth card, set <strong>True mean μ</strong> to {#} (or press <strong>Make H₀ true</strong>), press <strong>Play</strong>, and record when the run ends. Repeat for a true mean of {#}, {#}, {#}, {#} and {#} m/s² (click the slider’s number to type each one), pressing <strong>Play</strong> and recording each time. Watch the histogram slide away from the null curve. Export to worksheet (Table {#}), then Clear.":
  "<strong>B. Potencia contra el efecto.</strong> Regresa <strong>Tamaño de muestra n</strong> a {#} y α a {#}. En la tarjeta La verdad, fija <strong>Media verdadera μ</strong> en {#} (o presiona <strong>Hacer verdadera H₀</strong>), presiona <strong>Iniciar</strong> y registra cuando termine la corrida. Repite para una media verdadera de {#}, {#}, {#}, {#} y {#} m/s² (haz clic en el número del deslizador para escribir cada una), presionando <strong>Iniciar</strong> y registrando cada vez. Observa cómo el histograma se aleja de la curva nula. Exporta a la hoja (Tabla {#}) y luego Borrar.",
"<strong>C. Power against the sample size.</strong> Set <strong>True mean μ</strong> to {#} m/s² and α to {#}. For <strong>Sample size n</strong> = {#}, {#}, {#} and {#}, press <strong>Play</strong> and record when the run ends. Export to worksheet (Table {#}), then Clear.":
  "<strong>C. Potencia contra el tamaño de muestra.</strong> Fija <strong>Media verdadera μ</strong> en {#} m/s² y α en {#}. Para <strong>Tamaño de muestra n</strong> = {#}, {#}, {#} y {#}, presiona <strong>Iniciar</strong> y registra cuando termine la corrida. Exporta a la hoja (Tabla {#}) y luego Borrar.",
"<strong>D. Two complete tests.</strong> Press the setup <strong>Drop timer, σ known: is g low? (z test)</strong>. Do not press <strong>New draw</strong> (you need Draw {#}). Press <strong>Reset</strong> under Play, so that no studies are tallied, then press <strong>Record reading</strong>. Copy into your notes the sample mean x̄ from the picture and the <strong>Hypotheses</strong> card. Then press <strong>Detector efficiency: above {#} %? (one proportion)</strong>, press <strong>Reset</strong>, record, and copy x and n from the picture. Export to worksheet (Table {#}).":
  "<strong>D. Dos pruebas completas.</strong> Presiona la configuración <strong>Cronómetro de caída, σ conocida: ¿g sale bajo? (prueba z)</strong>. No presiones <strong>Nueva muestra</strong> (necesitas la Muestra {#}). Presiona <strong>Reiniciar</strong> debajo de Iniciar, para que no se cuente ningún estudio, y luego presiona <strong>Registrar lectura</strong>. Copia en tus notas la media muestral x̄ de la imagen y la tarjeta <strong>Hipótesis</strong>. Luego presiona <strong>Eficiencia del detector: ¿mayor que {#} %? (una proporción)</strong>, presiona <strong>Reiniciar</strong>, registra y copia x y n de la imagen. Exporta a la hoja (Tabla {#}).",
"Table {#}. Type I errors: the truth is {#} m/s², so H₀ is true.":
  "Tabla {#}. Errores de tipo I: la verdad es {#} m/s², así que H₀ es verdadera.",
"<span>C</span>Sample size n":
  "<span>C</span>Tamaño de muestra n",
"<span>D</span>True effect (m/s²)":
  "<span>D</span>Efecto verdadero (m/s²)",
"<span>E</span>Studies":
  "<span>E</span>Estudios",
"<span>F</span>Rejections of H₀":
  "<span>F</span>Rechazos de H₀",
"<span>G</span>Fraction rejected":
  "<span>G</span>Fracción rechazada",
"α, row {#}":
  "α, fila {#}",
"Sample size n, row {#}":
  "Tamaño de muestra n, fila {#}",
"True effect (m/s²), row {#}":
  "Efecto verdadero (m/s²), fila {#}",
"Studies, row {#}":
  "Estudios, fila {#}",
"Rejections of H₀, row {#}":
  "Rechazos de H₀, fila {#}",
"Fraction rejected, row {#}":
  "Fracción rechazada, fila {#}",
"Table {#}. Power against the true effect, n = {#}, α = {#}, two tailed.":
  "Tabla {#}. Potencia contra el efecto verdadero, n = {#}, α = {#}, dos colas.",
"Table {#}. Power against the sample size, true effect {#} m/s², α = {#}.":
  "Tabla {#}. Potencia contra el tamaño de muestra, efecto verdadero {#} m/s², α = {#}.",
"Table {#}. Two complete tests (Draw {#} of each setup).":
  "Tabla {#}. Dos pruebas completas (Muestra {#} de cada configuración).",
"<span>C</span>Test":
  "<span>C</span>Prueba",
"<span>D</span>Statistic":
  "<span>D</span>Estadístico",
"<span>E</span>p value":
  "<span>E</span>Valor p",
"<span>F</span>Decision":
  "<span>F</span>Decisión",
"Test, row {#}":
  "Prueba, fila {#}",
"Statistic, row {#}":
  "Estadístico, fila {#}",
"p value, row {#}":
  "Valor p, fila {#}",
"Decision, row {#}":
  "Decisión, fila {#}",
"For each row of Table {#}, compute the standard error of the fraction, \\(\\sqrt{f(1 - f)/N}\\) with N = {#}. Is each fraction rejected within two standard errors of its α? Did going from n = {#} to n = {#} change the Type I error rate?":
  "Para cada fila de la Tabla {#}, calcula el error estándar de la fracción, \\(\\sqrt{f(1 - f)/N}\\) con N = {#}. ¿Está cada fracción rechazada a menos de dos errores estándar de su α? ¿Cambió la tasa de error de tipo I al pasar de n = {#} a n = {#}?",
"Graph Table {#}: the fraction rejected (vertical) against the true effect (horizontal). Where does your curve start at an effect of {#}, and why must it start there? Read from your graph the effect at which the power reaches {#}. Compare your points with the demo’s power curve for the same settings.":
  "Grafica la Tabla {#}: la fracción rechazada (vertical) contra el efecto verdadero (horizontal). ¿Dónde empieza tu curva con un efecto de {#}, y por qué debe empezar ahí? Lee en tu gráfica el efecto con el que la potencia llega a {#}. Compara tus puntos con la curva de potencia de la demo para los mismos ajustes.",
"For each row of Table {#} with an effect greater than {#}, write β = {#} − (fraction rejected), the probability of a Type II error. For a real bias of {#} m/s², how often would this experiment miss it?":
  "Para cada fila de la Tabla {#} con un efecto mayor que {#}, escribe β = {#} − (fracción rechazada), la probabilidad de un error de tipo II. Para un sesgo real de {#} m/s², ¿qué tan seguido no lo detectaría este experimento?",
"Graph Table {#}: the fraction rejected (vertical) against the sample size n (horizontal). In words, how does the power change as n grows? Use the standard error σ/√n to explain why four times as many measurements is what it takes to detect an effect half as large.":
  "Grafica la Tabla {#}: la fracción rechazada (vertical) contra el tamaño de muestra n (horizontal). En palabras, ¿cómo cambia la potencia al crecer n? Usa el error estándar σ/√n para explicar por qué se necesitan cuatro veces más mediciones para detectar un efecto de la mitad del tamaño.",
"Write out the full test of the drop timer (Table {#}, first row) in the book’s four steps: the hypotheses; the distribution (which one, and why); the statistic, computed by hand from your x̄ with \\(\\mu_0 = 9.81\\) m/s², σ = {#} m/s² and n = {#}, and checked against the demo; the p value; and the decision with a sentence of conclusion in words at α = {#}. Would the decision change at α = {#}?":
  "Escribe la prueba completa del cronómetro de caída (Tabla {#}, primera fila) en los cuatro pasos del libro: las hipótesis; la distribución (cuál, y por qué); el estadístico, calculado a mano a partir de tu x̄ con \\(\\mu_0 = 9.81\\) m/s², σ = {#} m/s² y n = {#}, y comparado con la demo; el valor p; y la decisión con una oración de conclusión en palabras con α = {#}. ¿Cambiaría la decisión con α = {#}?",
"Do the same for the detector efficiency (Table {#}, second row): H₀: p = {#}, Hₐ: p > {#}. Compute p′ = x/n and z by hand, check that \\(np_0\\) and \\(nq_0\\) are more than {#}, and state the decision and conclusion at α = {#}.":
  "Haz lo mismo para la eficiencia del detector (Tabla {#}, segunda fila): H₀: p = {#}, Hₐ: p > {#}. Calcula p′ = x/n y z a mano, verifica que \\(np_0\\) y \\(nq_0\\) sean mayores que {#}, y da la decisión y la conclusión con α = {#}.",
"Each fraction in Tables {#} to {#} comes from {#} simulated studies, so it carries the counting uncertainty \\(\\sqrt{f(1 - f)/1000}\\): about {#} near {#}, and as much as {#} near {#}. Two fractions that differ by less than about two of these are not really different. The proportion test is only approximately a z test (the count is a whole number and the normal curve is an approximation), so its Type I rate can sit slightly off α even with many studies. The statistics and p values of your own samples in Table {#} are exact for the data drawn.":
  "Cada fracción de las Tablas {#} a {#} viene de {#} estudios simulados, así que tiene la incertidumbre de conteo \\(\\sqrt{f(1 - f)/1000}\\): unos {#} cerca de {#}, y hasta {#} cerca de {#}. Dos fracciones que difieren en menos de unas dos de estas no son realmente distintas. La prueba de proporción es una prueba z solo aproximadamente (el conteo es un número entero y la curva normal es una aproximación), así que su tasa de tipo I puede quedar un poco fuera de α incluso con muchos estudios. Los estadísticos y valores p de tus propias muestras en la Tabla {#} son exactos para los datos generados.",
"Look back at your prediction in Before the lab {#}. How many of the {#} studies rejected a true H₀ at α = {#}, and did taking {#} measurements instead of {#} change that? Explain why a larger sample does not lower the Type I error rate but does raise the power.":
  "Revisa tu predicción de Antes del laboratorio {#}. ¿Cuántos de los {#} estudios rechazaron una H₀ verdadera con α = {#}, y tomar {#} mediciones en lugar de {#} cambió eso? Explica por qué una muestra más grande no reduce la tasa de error de tipo I pero sí aumenta la potencia.",
"A lab group tests {#} different setups for bias at α = {#}, and every setup is in fact unbiased. About how many will they report as biased? What does this say about reporting only the tests that came out significant?":
  "Un equipo de laboratorio prueba {#} montajes distintos en busca de sesgo con α = {#}, y en realidad ningún montaje está sesgado. ¿Aproximadamente cuántos reportarán como sesgados? ¿Qué dice esto de reportar solo las pruebas que salieron significativas?",
"Lowering α from {#} to {#} makes Type I errors rarer. Using Table {#} and the demo’s power curve, what does it cost? Name one situation in a physics lab where you would accept that cost, and one where you would not.":
  "Bajar α de {#} a {#} hace más raros los errores de tipo I. Usando la Tabla {#} y la curva de potencia de la demo, ¿cuál es el costo? Nombra una situación en un laboratorio de física en la que aceptarías ese costo y una en la que no.",
"Before the lab answers, the four data tables, the graphs of Tables {#} and {#}, the two complete tests in four steps, and your answers to the Analysis and Questions. Say that the data are simulated by the demo, not measured.":
  "Las respuestas de Antes del laboratorio, las cuatro tablas de datos, las gráficas de las Tablas {#} y {#}, las dos pruebas completas en cuatro pasos y tus respuestas de Análisis y Preguntas. Indica que los datos los simula la demo, no se midieron.",
"Hypothesis Tests":
  "Pruebas de hipótesis"
});
