/* ws/ws-chi-square in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/ws-chi-square', {
"Face":
  "Cara",
"Observed O":
  "Observado O",
"Expected E":
  "Esperado E",
"Counts in {#} s":
  "Conteos en {#} s",
"Cell":
  "Celda",
"Test":
  "Prueba",
"df":
  "gl",
"p from the curve":
  "p de la curva",
"Simulated p":
  "p simulado",
"Chi-Square Tests: A Loaded Die, Decay Counts and a Table | VirtualDemos":
  "Pruebas de ji cuadrada: un dado cargado, conteos de decaimiento y una tabla | VirtualDemos",
"Chi-Square Tests: A Loaded Die, Decay Counts and a Table":
  "Pruebas de ji cuadrada: un dado cargado, conteos de decaimiento y una tabla",
"Student laboratory · Statistics for physics":
  "Laboratorio para estudiantes · Estadística para la física",
"Textbook: OpenStax <em>Introductory Statistics 2e</em>, §§{#} (Facts About the Chi-Square Distribution), {#} (the goodness of fit test), {#} (Test of Independence), {#} (Lab {#}, chi square goodness of fit) and {#} (Lab {#}: Chi-Square Test of Independence). Access for free at https://openstax.org/details/books/introductory-statistics-2e.":
  "Libro de texto: OpenStax <em>Introductory Statistics 2e</em>, §§{#} (Facts About the Chi-Square Distribution), {#} (la prueba de bondad de ajuste), {#} (Test of Independence), {#} (Lab {#}, bondad de ajuste ji cuadrada) y {#} (Lab {#}: Chi-Square Test of Independence). Acceso gratuito en https://openstax.org/details/books/introductory-statistics-2e.",
"<strong>Setups in the demo:</strong> A loaded die (simulated); A fair die (simulated); Mendel’s peas; Decay counts against Poisson (simulated); A counter with dead time (simulated); Two coins (book Example {#}); Absent days (book Example {#}); Streaming services (book Example {#}); Volunteer hours (book Example {#}); Anxiety and need to succeed (book Example {#}); A die and a coin (simulated); Living arrangements (book Example {#}); Counselors (book Example {#}); Post office lines (book Example {#}); Stopwatch timings (simulated).":
  "<strong>Configuraciones de la demo:</strong> Un dado cargado (simulado); Un dado justo (simulado); Los chícharos de Mendel; Conteos de decaimiento contra Poisson (simulado); Un contador con tiempo muerto (simulado); Dos monedas (Ejemplo {#} del libro); Días de ausencia (Ejemplo {#} del libro); Servicios de streaming (Ejemplo {#} del libro); Horas de voluntariado (Ejemplo {#} del libro); Ansiedad y necesidad de éxito (Ejemplo {#} del libro); Un dado y una moneda (simulado); Dónde viven (Ejemplo {#} del libro); Orientadores (Ejemplo {#} del libro); Filas en la oficina de correos (Ejemplo {#} del libro); Mediciones con cronómetro (simulado).",
"The upper graph shows each category, or cell, of the data: the filled bar is the observed count O, the outlined bar the count E expected if the null hypothesis H₀ is true, and the square under them has an area equal to that cell’s contribution \\((O - E)^2/E\\). The bar at the right stacks the contributions into χ² and marks the critical value. The table under the graph lists the same numbers.":
  "La gráfica de arriba muestra cada categoría, o celda, de los datos: la barra rellena es el conteo observado O, la barra de contorno el conteo E esperado si la hipótesis nula H₀ es verdadera, y el cuadrado debajo tiene un área igual a la contribución de esa celda \\((O - E)^2/E\\). La barra de la derecha apila las contribuciones en χ² y marca el valor crítico. La tabla bajo la gráfica lista los mismos números.",
"The box beside it states H₀, explains the degrees of freedom df, checks the rule that every expected count should be at least {#}, and gives the p value from the chi square curve and the decision at the significance level <strong>α</strong> (set in the bar above the graph).":
  "El recuadro de al lado enuncia H₀, explica los grados de libertad gl, revisa la regla de que cada conteo esperado sea al menos {#}, y da el valor p de la curva ji cuadrada y la decisión al nivel de significancia <strong>α</strong> (elegido en la barra sobre la gráfica).",
"The lower graph is the chi square curve for this df, with the observed χ² marked and the p value shaded. <strong>Play</strong> draws simulated data sets in which H₀ is true at the rate in <strong>Data sets a second</strong>, <strong>Step</strong> draws one, and <strong>Simulate {#}</strong> draws a thousand at once; their χ² values fill a histogram, and the fraction at or beyond the observed χ² is the <strong>simulated p value</strong>. <strong>Reset</strong> clears the simulated data sets.":
  "La gráfica de abajo es la curva ji cuadrada para estos gl, con la χ² observada marcada y el valor p sombreado. <strong>Iniciar</strong> genera conjuntos de datos simulados en los que H₀ es verdadera al ritmo de <strong>Conjuntos de datos por segundo</strong>, <strong>Paso</strong> genera uno y <strong>Simular {#}</strong> genera mil de una vez; sus valores de χ² llenan un histograma, y la fracción igual o mayor que la χ² observada es el <strong>valor p simulado</strong>. <strong>Reiniciar</strong> borra los conjuntos de datos simulados.",
"The bar above the graph holds each setup’s controls: <strong>Rolls</strong> and <strong>Chance of a six</strong> for the die, <strong>Intervals of {#} s</strong>, <strong>Count rate (per s)</strong> and <strong>Dead time</strong> for the counter. Changing one draws the data again and clears the simulation. The simulated sources are seeded: <strong>Draw set {#}</strong> (in the right panel, under About this setup) always gives the same data, and <strong>New data</strong> moves to the next draw set. Use draw set {#} throughout this worksheet.":
  "La barra sobre la gráfica tiene los controles de cada configuración: <strong>Tiros</strong> y <strong>Probabilidad de un seis</strong> para el dado, <strong>Intervalos de {#} s</strong>, <strong>Tasa de conteo (por s)</strong> y <strong>Tiempo muerto</strong> para el contador. Cambiar uno genera los datos de nuevo y borra la simulación. Las fuentes simuladas tienen semilla: la <strong>Serie aleatoria {#}</strong> (en el panel derecho, debajo de Acerca de esta configuración) siempre da los mismos datos, y <strong>Nuevos datos</strong> pasa a la siguiente serie. Usa la serie aleatoria {#} en toda esta hoja de trabajo.",
"Readouts: <strong>Total count n</strong>, <strong>Chi square χ²</strong>, <strong>Degrees of freedom df</strong>, <strong>p value</strong>, <strong>Critical value</strong>, <strong>Simulated data sets</strong>, <strong>Simulated p value</strong> and <strong>Smallest expected count</strong> (and <strong>Mean count per interval</strong> for the counter).":
  "Lecturas en pantalla: <strong>Conteo total n</strong>, <strong>Ji cuadrada χ²</strong>, <strong>Grados de libertad gl</strong>, <strong>Valor p</strong>, <strong>Valor crítico</strong>, <strong>Conjuntos de datos simulados</strong>, <strong>Valor p simulado</strong> y <strong>Conteo esperado más pequeño</strong> (y <strong>Conteo medio por intervalo</strong> para el contador).",
"<strong>Record reading</strong> records one row per cell (O, E and the contribution); <strong>Export to worksheet</strong> sends them to the matching Data table below; <strong>Clear</strong> starts a new series. Press Clear after each export.":
  "<strong>Registrar lectura</strong> registra un renglón por celda (O, E y la contribución); <strong>Exportar a la hoja</strong> los envía a la tabla de datos correspondiente abajo; <strong>Borrar</strong> empieza una nueva serie. Presiona Borrar después de cada exportación.",
"The die and the counter are simulated by the demo, not real; the volunteer data are from the book’s Example {#}.":
  "El dado y el contador los simula la demo, no son reales; los datos de voluntariado son del Ejemplo {#} del libro.",
"Test whether data fit a model with the chi square statistic: a die that may be loaded, counts from a radioactive source against the Poisson distribution, and a table of two variables for independence; and check the chi square curve’s p values against data sets simulated with the null hypothesis true.":
  "Pon a prueba si los datos se ajustan a un modelo con el estadístico ji cuadrada: un dado que puede estar cargado, conteos de una fuente radiactiva contra la distribución de Poisson, y una tabla de dos variables para la independencia; y compara los valores p de la curva ji cuadrada con conjuntos de datos simulados con la hipótesis nula verdadera.",
"<strong>The chi square statistic.</strong> Sort n observations into k categories. The null hypothesis H₀ gives each category a probability \\(p_i\\), so it expects \\(E_i = n\\,p_i\\) in category i. The observed counts \\(O_i\\) never match exactly; the statistic":
  "<strong>El estadístico ji cuadrada.</strong> Clasifica n observaciones en k categorías. La hipótesis nula H₀ da a cada categoría una probabilidad \\(p_i\\), así que espera \\(E_i = n\\,p_i\\) en la categoría i. Los conteos observados \\(O_i\\) nunca coinciden exactamente; el estadístico",
"\\[\\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i}\\]":
  "\\[\\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i}\\]",
"adds up how far they miss, each miss measured against the size of its expected count (§{#}). If H₀ is true, χ² is small: each term is about {#} on average. If H₀ is false, the misses grow with n and χ² gets large.":
  "suma cuánto fallan, cada falla medida contra el tamaño de su conteo esperado (§{#}). Si H₀ es verdadera, χ² es pequeña: cada término vale cerca de {#} en promedio. Si H₀ es falsa, las fallas crecen con n y χ² se hace grande.",
"<strong>Degrees of freedom.</strong> When H₀ is true and every expected count is large enough, χ² follows the chi square distribution with df degrees of freedom: a right skewed curve with mean df and standard deviation \\(\\sqrt{2\\,df}\\) (§{#}). The df counts the cells that are free to vary. The k counts must add up to n, so once k − {#} of them are known the last is fixed: df = k − {#}. Each parameter of the model estimated from the same data costs one more. For a table with r rows and c columns, the expected counts are \\(E = (\\text{row total})(\\text{column total})/n\\), and with the row and column totals fixed only (r − {#})(c − {#}) cells are free: df = (r − {#})(c − {#}) (§{#}).":
  "<strong>Grados de libertad.</strong> Cuando H₀ es verdadera y cada conteo esperado es lo bastante grande, χ² sigue la distribución ji cuadrada con gl grados de libertad: una curva sesgada a la derecha con media gl y desviación estándar \\(\\sqrt{2\\,gl}\\) (§{#}). Los gl cuentan las celdas que pueden variar libremente. Los k conteos deben sumar n, así que una vez que se conocen k − {#} de ellos el último queda fijo: gl = k − {#}. Cada parámetro del modelo estimado de los mismos datos cuesta uno más. Para una tabla de r renglones y c columnas, los conteos esperados son \\(E = (\\text{total del renglón})(\\text{total de la columna})/n\\), y con los totales de renglones y columnas fijos solo (r − {#})(c − {#}) celdas son libres: gl = (r − {#})(c − {#}) (§{#}).",
"<strong>The p value and the decision.</strong> The p value is the area of the curve at and beyond the observed χ²: the chance that a data set with H₀ true gives a χ² at least this large. If p ≤ α (here α = {#}), reject H₀. The test is always right tailed: a very small χ² is a fit too good to be true, not evidence against H₀. A rejection does not say how H₀ is wrong; the largest contributions show where.":
  "<strong>El valor p y la decisión.</strong> El valor p es el área de la curva desde la χ² observada en adelante: la probabilidad de que un conjunto de datos con H₀ verdadera dé una χ² al menos así de grande. Si p ≤ α (aquí α = {#}), se rechaza H₀. La prueba siempre es de cola derecha: una χ² muy pequeña es un ajuste demasiado bueno para ser cierto, no evidencia contra H₀. Un rechazo no dice en qué falla H₀; las contribuciones más grandes muestran dónde.",
"<strong>The rule of five.</strong> The chi square curve is an approximation that works when every expected count is at least {#}. When some are smaller, combine neighboring categories, or simulate the null distribution directly, as the demo does: draw many data sets from H₀, compute χ² for each, and count the fraction at least as large as yours.":
  "<strong>La regla del cinco.</strong> La curva ji cuadrada es una aproximación que funciona cuando cada conteo esperado es al menos {#}. Cuando algunos son menores, combina categorías vecinas o simula directamente la distribución nula, como hace la demo: genera muchos conjuntos de datos con H₀, calcula χ² para cada uno y cuenta la fracción al menos tan grande como la tuya.",
"<strong>Counts from a radioactive source.</strong> A long lived source gives off particles at random moments at a steady average rate. The number counted in a fixed interval then follows the Poisson distribution with mean μ:":
  "<strong>Conteos de una fuente radiactiva.</strong> Una fuente de vida larga emite partículas en momentos aleatorios a una tasa promedio constante. El número contado en un intervalo fijo sigue entonces la distribución de Poisson con media μ:",
"\\[P(x) = \\frac{\\mu^x e^{-\\mu}}{x!}, \\qquad x = 0, 1, 2, \\ldots\\]":
  "\\[P(x) = \\frac{\\mu^x e^{-\\mu}}{x!}, \\qquad x = 0, 1, 2, \\ldots\\]",
"with variance equal to its mean. The demo estimates μ from the data as the average count, so df = k − {#} − {#} = k − {#}.":
  "con varianza igual a su media. La demo estima μ de los datos como el conteo promedio, así que gl = k − {#} − {#} = k − {#}.",
"A die is rolled {#} times to test H₀: the die is fair. Give the expected count of each face, the number of categories and df. Use the chi square table in the book’s Appendix H (Tables) or the demo’s Critical value to state the critical value of χ² at α = {#} for this df.":
  "Se tira un dado {#} veces para poner a prueba H₀: el dado es justo. Da el conteo esperado de cada cara, el número de categorías y los gl. Usa la tabla de ji cuadrada del Apéndice H (Tablas) del libro o el Valor crítico de la demo para dar el valor crítico de χ² con α = {#} para estos gl.",
"A table of {#} rows by {#} columns has a row total of {#}, a column total of {#} and a grand total of {#} (the book’s Example {#}). Compute the expected count of the cell in that row and column under independence, and the df of the table.":
  "Una tabla de {#} renglones por {#} columnas tiene un total de renglón de {#}, un total de columna de {#} y un total general de {#} (el Ejemplo {#} del libro). Calcula el conteo esperado de la celda en ese renglón y esa columna bajo independencia, y los gl de la tabla.",
"Predict before you look: the demo’s loaded die comes up six a quarter of the time instead of a sixth. With {#} rolls, will the test reject H₀ (p ≤ {#})? With {#} rolls? And will Poisson counts from a radioactive source pass the test? Write one sentence of reasoning for each.":
  "Predice antes de ver: el dado cargado de la demo saca seis una cuarta parte de las veces en lugar de una sexta. Con {#} tiros, ¿rechazará H₀ la prueba (p ≤ {#})? ¿Con {#} tiros? ¿Y pasarán la prueba los conteos de Poisson de una fuente radiactiva? Escribe una oración de razonamiento para cada una.",
"<strong>A. A loaded die, {#} rolls.</strong> In the right panel, under Setups, press <strong>A loaded die (simulated)</strong>. Check that the right panel says Draw set {#} (if not, press <strong>Reset all</strong> at the top of the page and press the setup again). Rolls is {#} and Chance of a six is {#}. Press <strong>Record reading</strong> in the Readings section, then <strong>Export to worksheet</strong> (the rows go to Table {#}), then <strong>Clear</strong>. Press <strong>Simulate {#}</strong> once: Simulated data sets reads {#}. Copy <strong>Chi square χ²</strong>, <strong>Degrees of freedom df</strong>, <strong>p value</strong> and <strong>Simulated p value</strong> into Table {#}.":
  "<strong>A. Un dado cargado, {#} tiros.</strong> En el panel derecho, en Configuraciones, presiona <strong>Un dado cargado (simulado)</strong>. Revisa que el panel derecho diga Serie aleatoria {#} (si no, presiona <strong>Reiniciar todo</strong> arriba de la página y presiona de nuevo la configuración). Tiros es {#} y Probabilidad de un seis es {#}. Presiona <strong>Registrar lectura</strong> en la sección Lecturas, luego <strong>Exportar a la hoja</strong> (los renglones van a la Tabla {#}) y luego <strong>Borrar</strong>. Presiona <strong>Simular {#}</strong> una vez: Conjuntos de datos simulados marca {#}. Copia <strong>Ji cuadrada χ²</strong>, <strong>Grados de libertad gl</strong>, <strong>Valor p</strong> y <strong>Valor p simulado</strong> en la Tabla {#}.",
"<strong>B. The same die, {#} rolls.</strong> Set <strong>Rolls</strong> to {#} (the data are drawn again and the simulation clears). Record reading, Export to worksheet (Table {#}) and Clear. Press <strong>Simulate {#}</strong> once and copy the four readouts into Table {#}.":
  "<strong>B. El mismo dado, {#} tiros.</strong> Pon <strong>Tiros</strong> en {#} (los datos se generan de nuevo y la simulación se borra). Registrar lectura, Exportar a la hoja (Tabla {#}) y Borrar. Presiona <strong>Simular {#}</strong> una vez y copia las cuatro lecturas en la Tabla {#}.",
"<strong>C. Decay counts.</strong> Press <strong>Decay counts against Poisson (simulated)</strong>: {#} intervals of {#} s at {#} counts a second, no dead time. Copy <strong>Mean count per interval</strong>. Record reading, Export to worksheet (Table {#}) and Clear. Press <strong>Simulate {#}</strong> once and copy the four readouts into Table {#}.":
  "<strong>C. Conteos de decaimiento.</strong> Presiona <strong>Conteos de decaimiento contra Poisson (simulado)</strong>: {#} intervalos de {#} s a {#} conteos por segundo, sin tiempo muerto. Copia <strong>Conteo medio por intervalo</strong>. Registrar lectura, Exportar a la hoja (Tabla {#}) y Borrar. Presiona <strong>Simular {#}</strong> una vez y copia las cuatro lecturas en la Tabla {#}.",
"<strong>D. A test of independence.</strong> Press <strong>Volunteer hours (book Example {#})</strong>. These are the book’s data, not simulated. Record reading, Export to worksheet (Table {#}) and Clear. Press <strong>Simulate {#}</strong> once and copy the four readouts into Table {#}.":
  "<strong>D. Una prueba de independencia.</strong> Presiona <strong>Horas de voluntariado (Ejemplo {#} del libro)</strong>. Son datos del libro, no simulados. Registrar lectura, Exportar a la hoja (Tabla {#}) y Borrar. Presiona <strong>Simular {#}</strong> una vez y copia las cuatro lecturas en la Tabla {#}.",
"<strong>E. A counter with dead time.</strong> Press <strong>A counter with dead time (simulated)</strong>: {#} intervals at {#} arrivals a second, and the counter is blind for {#} ms after each count. Copy Mean count per interval, then press <strong>Simulate {#}</strong> once and copy the four readouts into the last row of Table {#}.":
  "<strong>E. Un contador con tiempo muerto.</strong> Presiona <strong>Un contador con tiempo muerto (simulado)</strong>: {#} intervalos a {#} llegadas por segundo, y el contador queda ciego {#} ms después de cada conteo. Copia Conteo medio por intervalo, luego presiona <strong>Simular {#}</strong> una vez y copia las cuatro lecturas en el último renglón de la Tabla {#}.",
"Table {#}. A loaded die, {#} rolls, against a fair die.":
  "Tabla {#}. Un dado cargado, {#} tiros, contra un dado justo.",
"<span>A</span>Face":
  "<span>A</span>Cara",
"<span>B</span>Observed O":
  "<span>B</span>Observado O",
"<span>C</span>Expected E":
  "<span>C</span>Esperado E",
"Face, row {#}":
  "Cara, renglón {#}",
"Observed O, row {#}":
  "Observado O, renglón {#}",
"Expected E, row {#}":
  "Esperado E, renglón {#}",
"(O − E)²/E, row {#}":
  "(O − E)²/E, renglón {#}",
"Table {#}. The same die, {#} rolls.":
  "Tabla {#}. El mismo dado, {#} tiros.",
"Table {#}. Decay counts in {#} intervals of {#} s against a Poisson distribution.":
  "Tabla {#}. Conteos de decaimiento en {#} intervalos de {#} s contra una distribución de Poisson.",
"<span>A</span>Counts in {#} s":
  "<span>A</span>Conteos en {#} s",
"Counts in {#} s, row {#}":
  "Conteos en {#} s, renglón {#}",
"Table {#}. Volunteer hours by kind of volunteer (book Example {#}).":
  "Tabla {#}. Horas de voluntariado por tipo de voluntario (Ejemplo {#} del libro).",
"<span>A</span>Cell":
  "<span>A</span>Celda",
"Cell, row {#}":
  "Celda, renglón {#}",
"Table {#}. The tests side by side (type these from the Readouts).":
  "Tabla {#}. Las pruebas lado a lado (escríbelas de Lecturas en pantalla).",
"<span>A</span>Test":
  "<span>A</span>Prueba",
"<span>C</span>df":
  "<span>C</span>gl",
"<span>D</span>p from the curve":
  "<span>D</span>p de la curva",
"<span>E</span>Simulated p":
  "<span>E</span>p simulado",
"Loaded die, {#} rolls":
  "Dado cargado, {#} tiros",
"χ², row {#}":
  "χ², renglón {#}",
"df, row {#}":
  "gl, renglón {#}",
"p from the curve, row {#}":
  "p de la curva, renglón {#}",
"Simulated p, row {#}":
  "p simulado, renglón {#}",
"Decay counts":
  "Conteos de decaimiento",
"Volunteer hours":
  "Horas de voluntariado",
"Counter with dead time":
  "Contador con tiempo muerto",
"Add the last column of Table {#} to get χ², and check it against Table {#}. Which face contributes most? With df and the critical value from Before the lab {#}, decide at α = {#} whether to reject H₀ (the die is fair).":
  "Suma la última columna de la Tabla {#} para obtener χ² y compárala con la Tabla {#}. ¿Qué cara contribuye más? Con los gl y el valor crítico de Antes del laboratorio {#}, decide con α = {#} si se rechaza H₀ (el dado es justo).",
"Do the same for Table {#}. The chance of a six did not change between parts A and B. Compute the ratio of the contributions of face {#}, Table {#} over Table {#}, and the ratio of the numbers of rolls. Explain why a larger sample makes the same loading easier to detect.":
  "Haz lo mismo con la Tabla {#}. La probabilidad de un seis no cambió entre las partes A y B. Calcula la razón de las contribuciones de la cara {#}, Tabla {#} entre Tabla {#}, y la razón de los números de tiros. Explica por qué una muestra más grande hace más fácil detectar la misma carga.",
"In Table {#}, check that every expected count is at least {#}, and explain why the lowest and highest counts are grouped into one category each. Count the categories k and confirm df = k − {#}. Using Mean count per interval as μ, compute the Poisson P({#}) and the expected count {#} P({#}), and compare with the Expected E of the {#} row.":
  "En la Tabla {#}, revisa que cada conteo esperado sea al menos {#} y explica por qué los conteos más bajos y más altos se agrupan en una categoría cada uno. Cuenta las categorías k y confirma gl = k − {#}. Con Conteo medio por intervalo como μ, calcula la P({#}) de Poisson y el conteo esperado {#} P({#}), y compáralo con el Esperado E del renglón {#}.",
"In Table {#}, check one expected count with E = (row total)(column total)/n from Before the lab {#}. Which cell contributes most to χ², and is its observed count above or below what independence expects? State the conclusion of the test in words.":
  "En la Tabla {#}, comprueba un conteo esperado con E = (total del renglón)(total de la columna)/n de Antes del laboratorio {#}. ¿Qué celda contribuye más a χ², y su conteo observado está arriba o abajo de lo que espera la independencia? Enuncia con palabras la conclusión de la prueba.",
"For each row of Table {#}, compute the difference between the simulated p and the p from the curve, and its standard error \\(\\sqrt{p(1 - p)/1000}\\) with p the curve’s value. Is each difference within two standard errors? (When the curve’s p is below {#}, say whether the simulated p is {#} or close to it instead.)":
  "Para cada renglón de la Tabla {#}, calcula la diferencia entre el p simulado y el p de la curva, y su error estándar \\(\\sqrt{p(1 - p)/1000}\\) con p el valor de la curva. ¿Está cada diferencia dentro de dos errores estándar? (Cuando el p de la curva es menor que {#}, di en cambio si el p simulado es {#} o cercano a ese valor.)",
"For a counter with no dead time, the counts are Poisson with variance equal to the mean. With dead time τ, a counter offered a rate n records on average \\(n/(1 + n\\tau)\\) counts a second. Compute this for n = {#} s⁻¹ and τ = {#} s, and compare it with the Mean count per interval from part E. Does the test reject a Poisson distribution for this counter?":
  "Para un contador sin tiempo muerto, los conteos son de Poisson con varianza igual a la media. Con tiempo muerto τ, un contador que recibe una tasa n registra en promedio \\(n/(1 + n\\tau)\\) conteos por segundo. Calcúlalo para n = {#} s⁻¹ y τ = {#} s, y compáralo con el Conteo medio por intervalo de la parte E. ¿Rechaza la prueba una distribución de Poisson para este contador?",
"The die and the counter are simulated, so their data scatter only as random samples do; each new draw set gives a different χ² and p. Under H₀ the p value is itself random, spread evenly between {#} and {#}, so a test at α = {#} rejects a true H₀ in about {#} data set in {#}. A simulated p from {#} data sets has standard error \\(\\sqrt{p(1 - p)/1000}\\), at most about {#}. The curve’s p is an approximation that needs every expected count to be at least {#}; the simulated p needs no such rule, but has its own sampling scatter.":
  "El dado y el contador son simulados, así que sus datos se dispersan solo como lo hacen las muestras aleatorias; cada nueva serie aleatoria da una χ² y un p distintos. Bajo H₀ el valor p es en sí aleatorio, repartido por igual entre {#} y {#}, así que una prueba con α = {#} rechaza una H₀ verdadera en cerca de {#} conjunto de datos de cada {#}. Un p simulado con {#} conjuntos de datos tiene error estándar \\(\\sqrt{p(1 - p)/1000}\\), a lo más cerca de {#}. El p de la curva es una aproximación que necesita que cada conteo esperado sea al menos {#}; el p simulado no necesita esa regla, pero tiene su propia dispersión de muestreo.",
"Look back at your predictions in Before the lab {#}. Which were right? Use parts A and B to explain why “do not reject H₀” is not the same as “H₀ is true”.":
  "Revisa tus predicciones de Antes del laboratorio {#}. ¿Cuáles fueron correctas? Usa las partes A y B para explicar por qué “no se rechaza H₀” no es lo mismo que “H₀ es verdadera”.",
"Mendel’s peas: in the demo, press <strong>Mendel’s peas</strong>. Mendel counted {#}, {#}, {#} and {#} seeds of four kinds and his theory predicts the ratio {#} : {#} : {#} : {#}. The demo gives χ² = {#} with df = {#}. What is unusual about such a small χ²? Use the p value to say how often a true model would fit this well or better.":
  "Los chícharos de Mendel: en la demo, presiona <strong>Los chícharos de Mendel</strong>. Mendel contó {#}, {#}, {#} y {#} semillas de cuatro clases y su teoría predice la razón {#} : {#} : {#} : {#}. La demo da χ² = {#} con gl = {#}. ¿Qué tiene de inusual una χ² tan pequeña? Usa el valor p para decir con qué frecuencia un modelo verdadero se ajustaría así de bien o mejor.",
"A physics student counts a source for {#} intervals and finds χ² = {#} with df = {#} against a Poisson distribution. Does this show the source is not random? What would you do next?":
  "Una estudiante de física cuenta una fuente durante {#} intervalos y obtiene χ² = {#} con gl = {#} contra una distribución de Poisson. ¿Muestra esto que la fuente no es aleatoria? ¿Qué harías después?",
"Why does the test of independence use the observed row and column totals to compute the expected counts, and how does that set the df?":
  "¿Por qué la prueba de independencia usa los totales observados de renglones y columnas para calcular los conteos esperados, y cómo fija eso los gl?",
"Before the lab answers, Tables {#} to {#}, your χ² sums, decisions and standard errors, and your answers to the Analysis and Questions. Say which data were simulated by the demo and cite the book’s Example {#} for the volunteer data.":
  "Las respuestas de Antes del laboratorio, las Tablas {#} a {#}, tus sumas de χ², decisiones y errores estándar, y tus respuestas al Análisis y a las Preguntas. Indica qué datos simuló la demo y cita el Ejemplo {#} del libro para los datos de voluntariado.",
"Column E, row {#}":
  "Columna E, renglón {#}",
"Heading of column E":
  "Encabezado de la columna E",
"Column E":
  "Columna E",
"Chi-Square Tests":
  "Pruebas de ji cuadrada"
});
