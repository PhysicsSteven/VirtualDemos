/* ws/galton-board in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/galton-board', {
"Rows n":
  "Filas n",
"Chance p":
  "Probabilidad p",
"Balls N":
  "Bolas N",
"Sample mean of k":
  "Media muestral de k",
"Sample standard deviation s":
  "Desviación estándar muestral s",
"np({#} − p)":
  "np({#} − p)",
"Bin k":
  "Casilla k",
"Count":
  "Cuenta",
"Fraction":
  "Fracción",
"Galton Board: Chance, the Binomial and the Bell Curve | VirtualDemos":
  "Tablero de Galton: azar, la binomial y la curva de campana | VirtualDemos",
"Galton Board: Chance, the Binomial and the Bell Curve":
  "Tablero de Galton: azar, la binomial y la curva de campana",
"<strong>Setups in the demo:</strong> {#} rows, fair; One row: a coin toss; Four rows; Tilted board, p = {#}; Rare event, p = {#}; {#} rows: the bell curve.":
  "<strong>Configuraciones en la demo:</strong> {#} filas, justo; Una fila: un volado; Cuatro filas; Tablero inclinado, p = {#}; Evento raro, p = {#}; {#} filas: la curva de campana.",
"Balls drop from the funnel through n rows of pegs. At each peg a ball goes right with probability p and left with probability {#} − p, independently of every other peg and every other ball. The bin a ball lands in, counted from the left starting at {#}, is its number of right bounces k.":
  "Las bolas caen del embudo a través de n filas de clavos. En cada clavo una bola va a la derecha con probabilidad p y a la izquierda con probabilidad {#} − p, independientemente de cualquier otro clavo y de cualquier otra bola. La casilla en la que cae una bola, contada desde la izquierda empezando en {#}, es su número de rebotes a la derecha k.",
"The random choices are made by the computer, so the counts are simulated data. The fall drawn between the pegs is only a picture of each choice.":
  "Las elecciones al azar las hace la computadora, así que las cuentas son datos simulados. La caída dibujada entre los clavos es solo una imagen de cada elección.",
"The card sets the rows and p, and can show the expected counts, a normal curve, fractions instead of counts, and bins labeled by net steps 2k − n. Skip the fall drops balls straight into the bins. Changing the rows or p empties the bins.":
  "La tarjeta fija las filas y p, y puede mostrar las cuentas esperadas, una curva normal, fracciones en vez de cuentas, y casillas etiquetadas por pasos netos 2k − n. Omitir la caída deja caer las bolas directamente en las casillas. Cambiar las filas o p vacía las casillas.",
"Record reading stores the number of rows, p, the number of balls N, the sample mean of k and the sample standard deviation s of k (dividing by N − {#}). Export to worksheet sends the readings to the Data table below; Clear starts a new series.":
  "Registrar lectura guarda el número de filas, p, el número de bolas N, la media muestral de k y la desviación estándar muestral s de k (dividiendo entre N − {#}). Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva.",
"Find how the outcome of many random choices is distributed, measure how its mean and spread depend on the number of choices and on the chance of each, and see why the most likely outcome is the one with the most ways to happen.":
  "Encuentra cómo se distribuye el resultado de muchas elecciones al azar, mide cómo dependen su media y su dispersión del número de elecciones y de la probabilidad de cada una, y ve por qué el resultado más probable es el que tiene más maneras de ocurrir.",
"A ball that makes n independent left or right choices, going right with probability p, lands in bin k with probability":
  "Una bola que hace n elecciones independientes a izquierda o derecha, y va a la derecha con probabilidad p, cae en la casilla k con probabilidad",
"\\[P(k) = \\frac{n!}{k!\\,(n-k)!}\\,p^k (1-p)^{n-k}.\\]":
  "\\[P(k) = \\frac{n!}{k!\\,(n-k)!}\\,p^k (1-p)^{n-k}.\\]",
"The factor \\(n!/(k!\\,(n-k)!)\\) counts the paths that end in bin k, and \\(p^k(1-p)^{n-k}\\) is the probability of any one of them. This is the binomial distribution. Its mean and standard deviation are":
  "El factor \\(n!/(k!\\,(n-k)!)\\) cuenta las trayectorias que terminan en la casilla k, y \\(p^k(1-p)^{n-k}\\) es la probabilidad de cualquiera de ellas. Esta es la distribución binomial. Su media y su desviación estándar son",
"\\[\\mu = np, \\qquad \\sigma = \\sqrt{np(1-p)}.\\]":
  "\\[\\mu = np, \\qquad \\sigma = \\sqrt{np(1-p)}.\\]",
"The sample mean of N balls scatters about μ by about \\(\\sigma/\\sqrt{N}\\), so the scatter falls as more balls are dropped. When np({#} − p) is large the distribution is close to a normal curve with the same μ and σ.":
  "La media muestral de N bolas se dispersa alrededor de μ en aproximadamente \\(\\sigma/\\sqrt{N}\\), así que la dispersión disminuye conforme se dejan caer más bolas. Cuando np({#} − p) es grande la distribución se parece mucho a una curva normal con las mismas μ y σ.",
"In a gas, a microstate says where every molecule is, and a macrostate says only how many are in each place. Counting paths to a bin is counting microstates for a macrostate, and the entropy is \\(S = k_B \\ln \\Omega\\) with Ω that count.":
  "En un gas, un microestado dice dónde está cada molécula, y un macroestado dice solo cuántas hay en cada lugar. Contar las trayectorias a una casilla es contar los microestados de un macroestado, y la entropía es \\(S = k_B \\ln \\Omega\\) con Ω esa cuenta.",
"For four fair rows, list every path that ends in bin {#}. What is P({#})?":
  "Para cuatro filas justas, enumera todas las trayectorias que terminan en la casilla {#}. ¿Cuánto vale P({#})?",
"For {#} fair rows, find the mean, the standard deviation, and the probabilities of bin {#} and bin {#}.":
  "Para {#} filas justas, encuentra la media, la desviación estándar y las probabilidades de la casilla {#} y la casilla {#}.",
"Predict the mean and standard deviation for {#} rows with p = {#}.":
  "Predice la media y la desviación estándar para {#} filas con p = {#}.",
"If {#} balls give a sample mean within about {#} of the true mean on {#} fair rows, how many balls would you need to get within about {#}?":
  "Si {#} bolas dan una media muestral a unos {#} de la media real en {#} filas justas, ¿cuántas bolas necesitarías para quedar a unos {#}?",
"<strong>Number of balls.</strong> Use {#} fair rows. Drop {#} balls and record a reading. Without emptying the bins, keep dropping until there are {#} balls and record again, then {#}, then {#}. Export the readings, then Clear. Write down the counts in every bin for the {#} ball reading (you can read them under the bins) in Table {#}.":
  "<strong>Número de bolas.</strong> Usa {#} filas justas. Deja caer {#} bolas y registra una lectura. Sin vaciar las casillas, sigue dejando caer hasta tener {#} bolas y registra de nuevo, luego {#}, luego {#}. Exporta las lecturas y luego Borrar. Anota las cuentas de cada casilla para la lectura de {#} bolas (puedes leerlas bajo las casillas) en la Tabla {#}.",
"<strong>Number of rows.</strong> With p = {#}, drop at least {#} balls and record a reading for {#}, {#}, {#}, {#} and {#} rows (changing the rows empties the bins). Export the readings, then Clear.":
  "<strong>Número de filas.</strong> Con p = {#}, deja caer al menos {#} bolas y registra una lectura para {#}, {#}, {#}, {#} y {#} filas (cambiar las filas vacía las casillas). Exporta las lecturas y luego Borrar.",
"<strong>Chance of bouncing right.</strong> With {#} rows, drop at least {#} balls and record a reading for p = {#}, {#}, {#}, {#} and {#}. Export the readings.":
  "<strong>Probabilidad de rebotar a la derecha.</strong> Con {#} filas, deja caer al menos {#} bolas y registra una lectura para p = {#}, {#}, {#}, {#} y {#}. Exporta las lecturas.",
"Table {#}. Runs of the board.":
  "Tabla {#}. Corridas del tablero.",
"<span>B</span>Rows n":
  "<span>B</span>Filas n",
"<span>C</span>Chance p":
  "<span>C</span>Probabilidad p",
"<span>D</span>Balls N":
  "<span>D</span>Bolas N",
"<span>E</span>Sample mean of k":
  "<span>E</span>Media muestral de k",
"<span>F</span>Sample standard deviation s":
  "<span>F</span>Desviación estándar muestral s",
"<span>H</span>np({#} − p)":
  "<span>H</span>np({#} − p)",
"Rows n, row {#}":
  "Filas n, fila {#}",
"Chance p, row {#}":
  "Probabilidad p, fila {#}",
"Balls N, row {#}":
  "Bolas N, fila {#}",
"Sample mean of k, row {#}":
  "Media muestral de k, fila {#}",
"Sample standard deviation s, row {#}":
  "Desviación estándar muestral s, fila {#}",
"s², row {#}":
  "s², fila {#}",
"np({#} − p), row {#}":
  "np({#} − p), fila {#}",
"Fill in s² and np({#} − p) for every reading.":
  "Llena s² y np({#} − p) para cada lectura.",
"Table {#}. Counts in each bin, {#} fair rows, {#} balls.":
  "Tabla {#}. Cuentas en cada casilla, {#} filas justas, {#} bolas.",
"<span>A</span>Bin k":
  "<span>A</span>Casilla k",
"<span>B</span>Count":
  "<span>B</span>Cuenta",
"<span>C</span>Fraction":
  "<span>C</span>Fracción",
"Count, row {#}":
  "Cuenta, fila {#}",
"Fraction, row {#}":
  "Fracción, fila {#}",
"P(k), row {#}":
  "P(k), fila {#}",
"For the number of balls series, how far is each sample mean from {#}? Plot the distance against \\(1/\\sqrt{N}\\), or compare the distances by eye: does quadrupling N roughly halve them?":
  "Para la serie del número de bolas, ¿qué tan lejos de {#} está cada media muestral? Grafica la distancia en función de \\(1/\\sqrt{N}\\), o compara las distancias a ojo: ¿cuadruplicar N las reduce aproximadamente a la mitad?",
"Compare the fractions in Table {#} with P(k). Which bins agree best, and which worst compared with their size?":
  "Compara las fracciones de la Tabla {#} con P(k). ¿Qué casillas concuerdan mejor, y cuáles peor en relación con su tamaño?",
"For the number of rows series, plot s² against n. What straight line do you expect, and what slope do you find?":
  "Para la serie del número de filas, grafica s² en función de n. ¿Qué recta esperas, y qué pendiente encuentras?",
"For the chance series, plot the sample mean against p and s² against np({#} − p). Find the slope of each and compare with the binomial.":
  "Para la serie de la probabilidad, grafica la media muestral en función de p y s² en función de np({#} − p). Encuentra la pendiente de cada una y compara con la binomial.",
"Using the bins in Table {#}, find the fraction of the balls within one standard deviation ({#}) of the mean. Compare with the binomial (bins {#}, {#} and {#}) and with the {#}% of a normal curve.":
  "Usando las casillas de la Tabla {#}, encuentra la fracción de las bolas dentro de una desviación estándar ({#}) de la media. Compara con la binomial (casillas {#}, {#} y {#}) y con el {#}% de una curva normal.",
"The sample mean of N balls has a standard error of about \\(s/\\sqrt{N}\\). Find it for your {#} and {#} ball readings, and decide whether each sample mean agrees with {#} within two standard errors.":
  "La media muestral de N bolas tiene un error estándar de aproximadamente \\(s/\\sqrt{N}\\). Encuéntralo para tus lecturas de {#} y {#} bolas, y decide si cada media muestral concuerda con {#} dentro de dos errores estándar.",
"After five balls in a row have gone into the right half, is the next ball more likely to go left? Explain.":
  "Después de que cinco bolas seguidas hayan caído en la mitad derecha, ¿es más probable que la siguiente vaya a la izquierda? Explica.",
"Why does the middle bin fill fastest, although every single path is equally likely when p = {#}?":
  "¿Por qué la casilla del centro se llena más rápido, aunque cada trayectoria individual es igualmente probable cuando p = {#}?",
"Turn on the net step labels. The spread of the net steps after n steps grows as \\(\\sqrt{n}\\). Use that to explain why a molecule diffusing for four times as long gets only twice as far.":
  "Activa las etiquetas de pasos netos. La dispersión de los pasos netos después de n pasos crece como \\(\\sqrt{n}\\). Usa eso para explicar por qué una molécula que se difunde durante cuatro veces más tiempo solo llega el doble de lejos.",
"For {#} fair rows, the middle bin has {#} paths and bin {#} has one. Find \\(\\ln\\Omega\\) for each. How does this match the idea that a gas spreads out and does not come back by itself?":
  "Para {#} filas justas, la casilla del centro tiene {#} trayectorias y la casilla {#} tiene una. Encuentra \\(\\ln\\Omega\\) para cada una. ¿Cómo concuerda esto con la idea de que un gas se dispersa y no regresa por sí solo?",
"Prelab answers, the tables with their graphs, your slopes compared with the binomial, the standard errors, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las tablas con sus gráficas, tus pendientes comparadas con la binomial, los errores estándar, y las respuestas a las preguntas. Identifica los datos simulados.",
"Number of balls dropped":
  "Número de bolas que se dejaron caer",
"Number of microstates of a macrostate: here the number of paths that end in a bin":
  "Número de microestados de un macroestado: aquí, el número de trayectorias que terminan en una casilla",
"Probability that a ball lands in bin k":
  "Probabilidad de que una bola caiga en la casilla k",
"Entropy":
  "Entropía",
"Bin number: how many of its bounces went right":
  "Número de la casilla: cuántos de sus rebotes fueron a la derecha",
"Mean of the bin number, np":
  "Media del número de casilla, np",
"Number of rows of pegs":
  "Número de filas de clavos",
"Chance of bouncing right at each peg":
  "Probabilidad de rebotar a la derecha en cada clavo",
"Sample standard deviation of the bin numbers of the balls dropped":
  "Desviación estándar muestral de los números de casilla de las bolas que se dejaron caer",
"Standard deviation of the bin number, √(np({#} − p))":
  "Desviación estándar del número de casilla, √(np({#} − p))",
"Galton Board":
  "Tablero de Galton"
});
