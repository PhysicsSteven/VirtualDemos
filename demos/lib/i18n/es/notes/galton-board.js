/* notes/galton-board in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'notes/galton-board', {
"Galton Board: teaching notes":
  "Tablero de Galton: notas para el docente",
"Galton Board":
  "Tablero de Galton",
"Intro thermodynamics and statistics for physics (algebra based)":
  "Termodinámica introductoria y estadística para física (con álgebra)",
"A single random event cannot be predicted, but the pattern of many is: the fraction in each bin settles toward a fixed probability as the number of balls grows.":
  "Un solo evento aleatorio no se puede predecir, pero el patrón de muchos sí: la fracción en cada casilla se acerca a una probabilidad fija a medida que crece el número de bolas.",
"The bin a ball lands in counts its right bounces, so the counts follow the binomial distribution, with mean np and standard deviation √(np({#} − p)).":
  "La casilla en la que cae una bola cuenta sus rebotes a la derecha, así que las cuentas siguen la distribución binomial, con media np y desviación estándar √(np({#} − p)).",
"The scatter of a measured fraction shrinks as {#}/√N: four times as many balls halve it.":
  "La dispersión de una fracción medida se reduce como {#}/√N: cuatro veces más bolas la reducen a la mitad.",
"The middle bins fill fastest because many more paths lead there. Counting paths (microstates) is the idea behind entropy, S = k_B ln Ω.":
  "Las casillas del centro se llenan más rápido porque muchas más trayectorias llevan ahí. Contar trayectorias (microestados) es la idea detrás de la entropía, S = k_B ln Ω.",
"With many rows the binomial looks like a normal (bell) curve, and the net steps of a ball are a one dimensional random walk whose spread grows as √n.":
  "Con muchas filas la binomial se parece a una curva normal (de campana), y los pasos netos de una bola son una caminata aleatoria en una dimensión cuya dispersión crece como √n.",
"Students should know what a probability and an average are. <strong>Drop {#}</strong>, <strong>Drop {#}</strong>, <strong>Drop {#}</strong> and <strong>Stream</strong> release balls; <strong>Empty the bins</strong> starts over. The card sets the number of rows n and the chance p of bouncing right, and turns on the expected counts, the normal curve, fractions, the random walk labels, and <strong>Skip the fall</strong> for fast runs. Changing n or p empties the bins. <strong>Blind</strong> in <strong>Lab</strong> hides the expected values.":
  "Los estudiantes deben saber qué es una probabilidad y qué es un promedio. <strong>Soltar {#}</strong>, <strong>Soltar {#}</strong>, <strong>Soltar {#}</strong> y <strong>Flujo continuo</strong> sueltan bolas; <strong>Vaciar las casillas</strong> empieza de nuevo. La tarjeta fija el número de filas n y la probabilidad p de rebotar a la derecha, y activa las cuentas esperadas, la curva normal, las fracciones, las etiquetas de la caminata aleatoria, y <strong>Omitir la caída</strong> para corridas rápidas. Cambiar n o p vacía las casillas. <strong>A ciegas</strong> en <strong>Laboratorio</strong> oculta los valores esperados.",
"<strong>{#} rows, fair.</strong> Ask Q1 before dropping anything, then drop {#} at a time up to about {#}.":
  "<strong>{#} filas, justo.</strong> Haz la Q1 antes de soltar nada, y luego suelta {#} a la vez hasta cerca de {#}.",
"<strong>One row: a coin toss.</strong> Drop {#} several times, then {#} (Q2).":
  "<strong>Una fila: un volado.</strong> Suelta {#} varias veces, y luego {#} (Q2).",
"<strong>Four rows.</strong> Compare the counts with {#} : {#} : {#} : {#} : {#} and count the paths by hand (Q5).":
  "<strong>Cuatro filas.</strong> Compara las cuentas con {#} : {#} : {#} : {#} : {#} y cuenta las trayectorias a mano (Q5).",
"<strong>Tilted board, p = {#}.</strong> Ask where the pile will sit and how wide it will be (Q3).":
  "<strong>Tablero inclinado, p = {#}.</strong> Pregunta dónde quedará el montón y qué tan ancho será (Q3).",
"<strong>{#} rows: the bell curve.</strong> Turn on the normal curve and the random walk labels (Q4, Q6).":
  "<strong>{#} filas: la curva de campana.</strong> Activa la curva normal y las etiquetas de la caminata aleatoria (Q4, Q6).",
"<strong>Q1.</strong> On the fair {#} row board, which bin will collect the most balls? Out of {#} balls, about how many do you expect in bin {#}, and in bin {#}? Drop {#} and compare.":
  "<strong>Q1.</strong> En el tablero justo de {#} filas, ¿qué casilla juntará más bolas? De {#} bolas, ¿cuántas esperas aproximadamente en la casilla {#}, y en la casilla {#}? Suelta {#} y compara.",
"<strong>Q2.</strong> With one row (a single coin toss), drop {#} balls several times and note the fraction that go right. Then drop {#}. How large a scatter in the fraction do you expect for {#} balls and for {#}?":
  "<strong>Q2.</strong> Con una fila (un solo volado), suelta {#} bolas varias veces y anota la fracción que va a la derecha. Luego suelta {#}. ¿Qué tan grande esperas que sea la dispersión de la fracción para {#} bolas y para {#}?",
"<strong>Q3.</strong> Tilt the board so p = {#} with {#} rows. Predict the mean bin and the standard deviation, then drop at least {#} balls and compare with the readouts.":
  "<strong>Q3.</strong> Inclina el tablero para que p = {#} con {#} filas. Predice la casilla media y la desviación estándar, luego suelta al menos {#} bolas y compara con las lecturas.",
"<strong>Q4.</strong> With {#} fair rows, what fraction of the balls should land within one standard deviation of the middle bin? Why is it not the {#}% quoted for a normal distribution?":
  "<strong>Q4.</strong> Con {#} filas justas, ¿qué fracción de las bolas debería caer dentro de una desviación estándar de la casilla central? ¿Por qué no es el {#}% que se cita para una distribución normal?",
"<strong>Q5.</strong> On the four row board, list the paths that end in bin {#} and in bin {#}. How many of the {#} equally likely paths end in each bin? How is this like counting the microstates of a gas?":
  "<strong>Q5.</strong> En el tablero de cuatro filas, enumera las trayectorias que terminan en la casilla {#} y en la casilla {#}. ¿Cuántas de las {#} trayectorias igualmente probables terminan en cada casilla? ¿En qué se parece esto a contar los microestados de un gas?",
"<strong>Q6.</strong> Turn on the random walk labels with {#} fair rows. What are the expected mean and spread of the net number of steps? How would the spread change with {#} rows? What does this say about how far a diffusing molecule gets in four times the time?":
  "<strong>Q6.</strong> Activa las etiquetas de la caminata aleatoria con {#} filas justas. ¿Cuáles son la media y la dispersión esperadas del número neto de pasos? ¿Cómo cambiaría la dispersión con {#} filas? ¿Qué dice esto sobre qué tan lejos llega una molécula que se difunde en cuatro veces el tiempo?",
"<strong>\"After five lefts in a row a right is due.\"</strong> Every peg is independent; the board has no memory.":
  "<strong>\"Después de cinco izquierdas seguidas ya toca una derecha.\"</strong> Cada clavo es independiente; el tablero no tiene memoria.",
"<strong>\"With more balls the counts get closer to the expected counts.\"</strong> The fractions do; the differences in counts actually grow, as √N.":
  "<strong>\"Con más bolas las cuentas se acercan más a las cuentas esperadas.\"</strong> Las fracciones sí; las diferencias en las cuentas de hecho crecen, como √N.",
"<strong>\"The middle is special.\"</strong> Each single path is equally likely when p = {#}; the middle bins simply have the most paths.":
  "<strong>\"El centro es especial.\"</strong> Cada trayectoria individual es igualmente probable cuando p = {#}; las casillas del centro simplemente tienen más trayectorias.",
"<strong>\"The normal curve is exact.\"</strong> It approximates the binomial, best when np({#} − p) is large and worst for rare events near p = {#} or {#}.":
  "<strong>\"La curva normal es exacta.\"</strong> Aproxima la binomial, mejor cuando np({#} − p) es grande y peor para eventos raros cerca de p = {#} o {#}.",
"P(k) = n!/(k!(n − k)!) pᵏ({#} − p)ⁿ⁻ᵏ for k right bounces in n rows, mean np, standard deviation √(np({#} − p)). The sample standard deviation divides by N − {#}.":
  "P(k) = n!/(k!(n − k)!) pᵏ({#} − p)ⁿ⁻ᵏ para k rebotes a la derecha en n filas, media np, desviación estándar √(np({#} − p)). La desviación estándar muestral divide entre N − {#}.",
"Each peg sends a ball right with probability p, independently; balls do not collide, and the fall drawn between pegs is a picture of the choice, not a simulation of bouncing. Random numbers come from a seeded generator (mulberry32), so the counts are simulated.":
  "Cada clavo manda una bola a la derecha con probabilidad p, de manera independiente; las bolas no chocan entre sí, y la caída dibujada entre clavos es una imagen de la elección, no una simulación de los rebotes. Los números aleatorios vienen de un generador con semilla (mulberry32), así que las cuentas son simuladas.",
"The normal curve uses the binomial mean and standard deviation, one bin wide per unit of k. With net steps on, bin k is labelled 2k − n.":
  "La curva normal usa la media y la desviación estándar de la binomial, con una casilla de ancho por unidad de k. Con los pasos netos activados, la casilla k se etiqueta 2k − n.",
"Tests (curriculum/validation/test_galton_board.cjs): Pascal's triangle rows, the {#} paths to bin {#}, normalization, mean and variance for many boards, the preset numbers, and {#} {#} seeded balls against the binomial.":
  "Pruebas (curriculum/validation/test_galton_board.cjs): filas del triángulo de Pascal, las {#} trayectorias a la casilla {#}, normalización, media y varianza para muchos tableros, los números de las configuraciones, y {#} {#} bolas con semilla comparadas con la binomial.",
"Gas in a Box measures diffusion from the mean square displacement of real molecules, the same √t spreading as the random walk.":
  "Gas en una caja mide la difusión a partir del desplazamiento cuadrático medio de moléculas reales, la misma dispersión como √t que la caminata aleatoria.",
"Entropy and the Second Law counts the microstates of molecules in the two halves of a box, the same counting as the board's paths.":
  "Entropía y la segunda ley cuenta los microestados de moléculas en las dos mitades de una caja, el mismo conteo que el de las trayectorias del tablero."
});
