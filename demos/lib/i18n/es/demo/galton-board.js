/* demo/galton-board in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'demo/galton-board', {
"bin k: number of right bounces":
  "casilla k: número de rebotes a la derecha",
"Galton Board":
  "Tablero de Galton",
"<a>The second law of thermodynamics</a>":
  "<a>La segunda ley de la termodinámica</a>",
"<a><span>←</span> <span>Entropy and the Second Law</span></a><a><span>Ising Model</span> <span>→</span></a>":
  "<a><span>←</span> <span>Entropía y la segunda ley</span></a><a><span>Modelo de Ising</span> <span>→</span></a>",
"Balls fall through rows of pegs and bounce left or right at each one. One ball is unpredictable; thousands pile up into the binomial distribution, and with many rows into a bell curve.":
  "Las bolas caen a través de filas de clavos y rebotan a la izquierda o a la derecha en cada uno. Una sola bola es impredecible; miles se acumulan en la distribución binomial y, con muchas filas, en una curva de campana.",
"counts":
  "conteos",
"Drop {#}":
  "Soltar {#}",
"Stream":
  "Flujo continuo",
"Empty the bins":
  "Vaciar las casillas",
"A board of pegs in a triangle with bins underneath. Balls fall through the pegs into the bins, and the bins fill into a histogram. Space drops one ball.":
  "Un tablero de clavos en forma de triángulo con casillas debajo. Las bolas caen entre los clavos hasta las casillas, y las casillas se llenan formando un histograma. Espacio suelta una bola.",
"Divider between the pegs and the bins":
  "Divisor entre los clavos y las casillas",
"Set up the board":
  "Prepara el tablero",
"<span>The board</span>":
  "<span>El tablero</span>",
"Rows of pegs n":
  "Filas de clavos n",
"Chance of bouncing right p":
  "Probabilidad de rebotar a la derecha p",
"<span>Expected counts (binomial)</span>":
  "<span>Conteos esperados (binomial)</span>",
"<span>Normal curve, same mean and spread</span>":
  "<span>Curva normal, misma media y dispersión</span>",
"<span>Show fractions, not counts</span>":
  "<span>Mostrar fracciones, no conteos</span>",
"<span>Label bins by net steps (random walk)</span>":
  "<span>Etiquetar casillas por pasos netos (caminata aleatoria)</span>",
"<span>Skip the fall</span>":
  "<span>Omitir la caída</span>",
"{#} rows, fair":
  "{#} filas, justo",
"One row: a coin toss":
  "Una fila: un volado",
"Four rows":
  "Cuatro filas",
"Tilted board, p = {#}":
  "Tablero inclinado, p = {#}",
"Rare event, p = {#}":
  "Evento raro, p = {#}",
"{#} rows: the bell curve":
  "{#} filas: la curva de campana",
"{#} rows, an even chance at each peg. The middle bins fill fastest: there are {#} ways to make {#} rights out of {#}, and only one way to make {#}. Expected mean {#}, standard deviation √{#} = {#}.":
  "{#} filas, con la misma probabilidad en cada clavo. Las casillas del centro se llenan más rápido: hay {#} maneras de obtener {#} rebotes a la derecha de {#}, y solo una manera de obtener {#}. Media esperada {#}, desviación estándar √{#} = {#}.",
"Balls in the bins N":
  "Bolas en las casillas N",
"Sample mean":
  "Media de la muestra",
"Sample standard deviation":
  "Desviación estándar de la muestra",
"Expected mean np":
  "Media esperada np",
"Expected spread √(np({#} − p))":
  "Dispersión esperada √(np({#} − p))",
"mean":
  "media",
"<span>Blind: hide the expected values (predict them first)</span>":
  "<span>A ciegas: ocultar los valores esperados (predícelos primero)</span>",
"P(k) = n! / (k!(n − k)!) · pᵏ ({#} − p)ⁿ⁻ᵏ mean np standard deviation √(np({#} − p))":
  "P(k) = n! / (k!(n − k)!) · pᵏ ({#} − p)ⁿ⁻ᵏ media np desviación estándar √(np({#} − p))",
"Model: at every peg a ball goes right with probability p and left with {#} − p, independently of every other peg and every other ball, so the bin number k (counted from the left, starting at {#}) is the number of right bounces in n tries: a binomial distribution. Balls do not collide or bounce twice; the fall drawn between pegs is only a picture of the choice. Random choices come from a seeded generator (mulberry32), so they are simulated, not measured. The sample standard deviation divides by N − {#}. The normal curve is drawn with the binomial mean and standard deviation, one bin wide per unit of k; it is an approximation that improves as np({#} − p) grows. With net steps on, a bin is labelled 2k − n, the position after n steps of ±{#} (a one dimensional random walk).":
  "Modelo: en cada clavo una bola va a la derecha con probabilidad p y a la izquierda con {#} − p, independientemente de cualquier otro clavo y de cualquier otra bola, así que el número de casilla k (contado desde la izquierda, empezando en {#}) es el número de rebotes a la derecha en n intentos: una distribución binomial. Las bolas no chocan ni rebotan dos veces; la caída dibujada entre los clavos es solo una imagen de la elección. Las elecciones aleatorias provienen de un generador con semilla (mulberry32), así que son simuladas, no medidas. La desviación estándar de la muestra divide entre N − {#}. La curva normal se dibuja con la media y la desviación estándar binomiales, con una casilla de ancho por unidad de k; es una aproximación que mejora a medida que np({#} − p) crece. Con los pasos netos activados, una casilla se etiqueta 2k − n, la posición después de n pasos de ±{#} (una caminata aleatoria en una dimensión).",
"One peg is one coin toss: left or right. Drop {#} and the split is rarely exactly {#} and {#}; drop a few hundred and the fractions settle near one half.":
  "Un clavo es un volado: izquierda o derecha. Suelta {#} y la división rara vez es exactamente {#} y {#}; suelta unos cientos y las fracciones se estabilizan cerca de un medio.",
"Four rows: the counts go as {#} : {#} : {#} : {#} : {#} out of {#}, the numbers in a row of Pascal's triangle.":
  "Cuatro filas: los conteos van como {#} : {#} : {#} : {#} : {#} de {#}, los números de una fila del triángulo de Pascal.",
"The board is tilted so a ball goes right {#}% of the time. The pile moves to bin np = {#} and narrows a little: √(np({#} − p)) = {#}.":
  "El tablero está inclinado, así que una bola va a la derecha el {#}% de las veces. La pila se mueve a la casilla np = {#} y se estrecha un poco: √(np({#} − p)) = {#}.",
"A right bounce is rare (p = {#}), like a rare event counted in {#} tries. The pile is lopsided, so the normal curve fits badly near {#}; the binomial still fits.":
  "Un rebote a la derecha es raro (p = {#}), como un evento raro contado en {#} intentos. La pila está cargada hacia un lado, así que la curva normal se ajusta mal cerca de {#}; la binomial sigue ajustándose.",
"{#} rows: drop a few hundred and the histogram matches the normal curve with mean {#} and standard deviation √{#} = {#}. Bins {#} to {#}, within one standard deviation of the middle, should hold {#}% of the balls; the {#}% rule is for a continuous variable, and here the edge bins count in full.":
  "{#} filas: suelta unos cientos y el histograma coincide con la curva normal de media {#} y desviación estándar √{#} = {#}. Las casillas {#} a {#}, dentro de una desviación estándar del centro, deberían contener el {#}% de las bolas; la regla del {#}% es para una variable continua, y aquí las casillas de los bordes cuentan completas.",
"Drop at least two balls before recording.":
  "Suelta al menos dos bolas antes de registrar.",
"Stop":
  "Detener"
});
