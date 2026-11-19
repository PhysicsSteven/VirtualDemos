/* ws/free-expansion in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/free-expansion', {
"Count on the left n":
  "Conteo a la izquierda n",
"Time at n (s)":
  "Tiempo en n (s)",
"Share of time":
  "Fracción del tiempo",
"Ways binomNn":
  "Maneras binomNn",
"Predicted share binomNn/{#}^N":
  "Fracción predicha binomNn/{#}^N",
"With calculus":
  "Con cálculo",
"Free Expansion and the Arrow of Time | VirtualDemos":
  "Expansión libre y la flecha del tiempo | VirtualDemos",
"Free Expansion and the Arrow of Time":
  "Expansión libre y la flecha del tiempo",
"<strong>Setups in the demo:</strong> Four molecules; A hundred molecules (these two use the Free expansion view, the subject of this worksheet); Small solids; Hot solid meets cold (the Einstein solids worksheet); A real engine; Beats Carnot?; Perfect engine; Perfect refrigerator (the Second law worksheet).":
  "<strong>Configuraciones en la demo:</strong> Cuatro moléculas; Cien moléculas (estas dos usan la vista Expansión libre, el tema de esta hoja de trabajo); Sólidos pequeños; Sólido caliente con sólido frío (la hoja de trabajo de sólidos de Einstein); Una máquina real; ¿Supera a Carnot?; Máquina perfecta; Refrigerador perfecto (la hoja de trabajo de la segunda ley).",
"The Free expansion view has a model gas of N hard disks in an insulated box twice as wide as it is tall. A partition keeps them in the left half until you remove it. You choose N, from {#} to {#}.":
  "La vista Expansión libre tiene un gas modelo de N discos duros en una caja aislada el doble de ancha que de alta. Una partición los mantiene en la mitad izquierda hasta que la quitas. Tú eliges N, de {#} a {#}.",
"The disks bounce off the walls and each other without losing energy, so the total kinetic energy, and the temperature, stay the same. Removing the partition does no work and lets no heat in or out.":
  "Los discos rebotan en las paredes y entre sí sin perder energía, así que la energía cinética total, y la temperatura, se mantienen igual. Quitar la partición no realiza trabajo y no deja entrar ni salir calor.",
"The shares of time are counted from the first moment the count on the left falls to half or less, so the first rush out of the left half is left out. The meters show the count on the left now, the share of the counted time that all the molecules have been on the left, and the time since the partition was removed.":
  "Las fracciones del tiempo se cuentan desde el primer momento en que el conteo de la izquierda baja a la mitad o menos, así que se omite la primera salida en tropel de la mitad izquierda. Los medidores muestran el conteo actual de la izquierda, la fracción del tiempo contado en que todas las moléculas han estado a la izquierda y el tiempo desde que se quitó la partición.",
"The graphs show the count on the left against time, and the share of time spent at each count. The dots on the second graph are the share of all left or right arrangements that put n on the left; Blind hides them.":
  "Las gráficas muestran el conteo de la izquierda en función del tiempo y la fracción del tiempo pasada en cada conteo. Los puntos de la segunda gráfica son la fracción de todos los arreglos izquierda o derecha que ponen n a la izquierda; A ciegas los oculta.",
"This is a picture of the idea: the disks are far bigger and fewer than real molecules, and time runs on the model’s own clock. Because the disks take up room, arrangements crowded into one half come up a little less often than the count of arrangements says: with ten disks, all on the left about {#} of the time rather than {#}/{#}. At {#}× the model clock runs {#} s each second (the line above the stage says so); the speed buttons run it {#}, {#} or {#} times faster.":
  "Esta es una imagen de la idea: los discos son mucho más grandes y menos numerosos que las moléculas reales, y el tiempo corre con el reloj propio del modelo. Como los discos ocupan espacio, los arreglos amontonados en una mitad aparecen un poco menos seguido de lo que indica el conteo de arreglos: con diez discos, todos quedan a la izquierda cerca de {#} del tiempo en vez de {#}/{#}. A {#}× el reloj del modelo avanza {#} s por cada segundo (la línea sobre el escenario lo indica); los botones de rapidez lo hacen correr {#}, {#} o {#} veces más rápido.",
"Record reading stores the share of time at every count, one row per count, for the run so far. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la fracción del tiempo en cada conteo, una fila por conteo, para la corrida hasta ese momento. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una nueva serie, que va a una nueva copia de la tabla.",
"Reset puts the partition back with a fresh arrangement.":
  "Reiniciar vuelve a poner la partición con un arreglo nuevo.",
"See why a gas spreads through its container and never gathers back by itself, by counting the ways its molecules can be arranged.":
  "Descubre por qué un gas se reparte por su recipiente y nunca se vuelve a juntar por sí solo, contando las maneras en que pueden acomodarse sus moléculas.",
"In a <strong>free expansion</strong> a gas rushes into an empty space, with no work done and no heat exchanged. It is irreversible: the gas never collects itself back in half the box (§{#}).":
  "En una <strong>expansión libre</strong> un gas se precipita hacia un espacio vacío, sin realizar trabajo y sin intercambiar calor. Es irreversible: el gas nunca se vuelve a juntar en la mitad de la caja (§{#}).",
"Count the arrangements. Each of N molecules can be in the left or right half, so there are \\(2^N\\) left or right arrangements, all equally likely once the gas has spread out. The number of them with exactly \\(n\\) on the left is":
  "Cuenta los arreglos. Cada una de las N moléculas puede estar en la mitad izquierda o en la derecha, así que hay \\(2^N\\) arreglos izquierda o derecha, todos igualmente probables una vez que el gas se ha repartido. El número de ellos con exactamente \\(n\\) a la izquierda es",
"\\[\\Omega(n) = \\binom{N}{n} = \\frac{N!}{n!\\,(N-n)!},\\]":
  "\\[\\Omega(n) = \\binom{N}{n} = \\frac{N!}{n!\\,(N-n)!},\\]",
"so the share of the time spent with \\(n\\) on the left is \\(\\Omega(n)/2^N\\). The arrangement with all N on the left is just one of \\(2^N\\).":
  "así que la fracción del tiempo pasada con \\(n\\) a la izquierda es \\(\\Omega(n)/2^N\\). El arreglo con las N a la izquierda es solo uno de \\(2^N\\).",
"Entropy measures the number of ways, \\(S = k\\ln\\Omega\\) (Boltzmann; beyond the book). Doubling the volume doubles the places each molecule can be, so the entropy rises by \\(Nk\\ln 2\\), which is \\(nR\\ln 2\\) for \\(n\\) moles. That is the textbook’s result for free expansion, \\(\\Delta S = nR\\ln(V_2/V_1)\\) (§{#}, Example {#}).":
  "La entropía mide el número de maneras, \\(S = k\\ln\\Omega\\) (Boltzmann; más allá del libro). Duplicar el volumen duplica los lugares donde puede estar cada molécula, así que la entropía sube \\(Nk\\ln 2\\), que es \\(nR\\ln 2\\) para \\(n\\) moles. Ese es el resultado del libro de texto para la expansión libre, \\(\\Delta S = nR\\ln(V_2/V_1)\\) (§{#}, Ejemplo {#}).",
"List all the left or right arrangements of four molecules labeled a, b, c, d. How many have {#}, {#}, {#}, {#} and {#} on the left?":
  "Enumera todos los arreglos izquierda o derecha de cuatro moléculas etiquetadas a, b, c, d. ¿Cuántos tienen {#}, {#}, {#}, {#} y {#} a la izquierda?",
"What share of the time do you expect all four to be on the left?":
  "¿Qué fracción del tiempo esperas que las cuatro estén a la izquierda?",
"What is the chance that all of {#} molecules are on the left at one moment?":
  "¿Cuál es la probabilidad de que las {#} moléculas estén a la izquierda en un momento dado?",
"Find the entropy change when one mole of gas expands freely to twice its volume.":
  "Encuentra el cambio de entropía cuando un mol de gas se expande libremente al doble de su volumen.",
"A hundred molecules have spread through the whole box. Exactly {#} on the left is the most likely count. About what share of the time do you think the count on the left is exactly {#}: nearly all of it, about half, about a quarter, or under one time in ten?":
  "Cien moléculas se han esparcido por toda la caja. Exactamente {#} a la izquierda es la cuenta más probable. ¿Qué fracción del tiempo crees que la cuenta a la izquierda es exactamente {#}: casi todo el tiempo, cerca de la mitad, cerca de una cuarta parte, o menos de una vez de cada diez?",
"<strong>Four molecules.</strong> Press Free expansion at the top of the picture, then the Four molecules button under Setups. Press Remove the partition, press {#}× and Play, and let the gas run until the Time since opened meter passes {#} s. Press Record reading (it stores one row per count on the left).":
  "<strong>Cuatro moléculas.</strong> Pulsa Expansión libre arriba de la imagen, luego el botón Cuatro moléculas bajo Configuraciones. Pulsa Quitar la partición, pulsa {#}× e Iniciar, y deja correr el gas hasta que el medidor Tiempo desde la apertura pase de {#} s. Pulsa Registrar lectura (guarda una fila por cada conteo a la izquierda).",
"<strong>More molecules.</strong> Press Export to worksheet and Clear. Set the Number of molecules N slider to {#}, press Remove the partition and Play, and run for at least {#} s. Record a reading.":
  "<strong>Más moléculas.</strong> Pulsa Exportar a la hoja y Borrar. Fija el control deslizante Número de moléculas N en {#}, pulsa Quitar la partición e Iniciar, y deja correr al menos {#} s. Registra una lectura.",
"<strong>A hundred molecules.</strong> Press Export to worksheet and Clear, then press the A hundred molecules button, press Remove the partition and Play, and watch the count on the left. Run for at least {#} s, press Record reading and Export to worksheet.":
  "<strong>Cien moléculas.</strong> Pulsa Exportar a la hoja y Borrar, luego pulsa el botón Cien moléculas, pulsa Quitar la partición e Iniciar, y observa el conteo de la izquierda. Deja correr al menos {#} s, pulsa Registrar lectura y Exportar a la hoja.",
"<span>A</span>Count on the left \\(n\\)":
  "<span>A</span>Conteo a la izquierda \\(n\\)",
"<span>B</span>Time at \\(n\\) (s)":
  "<span>B</span>Tiempo en \\(n\\) (s)",
"<span>C</span>Share of time":
  "<span>C</span>Fracción del tiempo",
"<span>D</span>Ways \\(\\binom{N}{n}\\)":
  "<span>D</span>Maneras \\(\\binom{N}{n}\\)",
"<span>E</span>Predicted share \\(\\binom{N}{n}/2^N\\)":
  "<span>E</span>Fracción predicha \\(\\binom{N}{n}/2^N\\)",
"Count on the left n, row {#}":
  "Conteo a la izquierda n, fila {#}",
"Time at n (s), row {#}":
  "Tiempo en n (s), fila {#}",
"Share of time, row {#}":
  "Fracción del tiempo, fila {#}",
"Ways binomNn, row {#}":
  "Maneras binomNn, fila {#}",
"Predicted share binomNn/{#}^N, row {#}":
  "Fracción predicha binomNn/{#}^N, fila {#}",
"Record N and the Time counted meter for each copy of the table. Fill in the last two columns yourself: every row for four and ten molecules, and for a hundred molecules only the rows \\(n\\) = {#}, {#}, {#}, {#} and {#}.":
  "Registra N y el medidor Tiempo contado para cada copia de la tabla. Llena tú mismo las dos últimas columnas: todas las filas para cuatro y diez moléculas, y para cien moléculas solo las filas \\(n\\) = {#}, {#}, {#}, {#} y {#}.",
"Fill in the last two columns: every row of the four and ten molecule runs, and the rows \\(n\\) = {#}, {#}, {#}, {#} and {#} of the hundred molecule run.":
  "Llena las dos últimas columnas: todas las filas de las corridas de cuatro y diez moléculas, y las filas \\(n\\) = {#}, {#}, {#}, {#} y {#} de la corrida de cien moléculas.",
"Plot the measured share (vertical) against the predicted share (horizontal) for each run (for {#} molecules, the five rows you filled in). What slope and intercept do you expect, and what do you find?":
  "Grafica la fracción medida (vertical) en función de la fracción predicha (horizontal) para cada corrida (para {#} moléculas, las cinco filas que llenaste). ¿Qué pendiente y qué ordenada al origen esperas, y qué encuentras?",
"For four molecules, compare the share of time with all on the left with \\(1/16\\). For ten molecules, compare it with \\(1/1024\\).":
  "Para cuatro moléculas, compara la fracción del tiempo con todas a la izquierda con \\(1/16\\). Para diez moléculas, compárala con \\(1/1024\\).",
"For {#} molecules, compare your predicted shares at \\(n\\) = {#}, {#}, {#}, {#} and {#} with the measured shares. How does the spread of the counts compare with N?":
  "Para {#} moléculas, compara tus fracciones predichas en \\(n\\) = {#}, {#}, {#}, {#} y {#} con las fracciones medidas. ¿Cómo se compara la dispersión de los conteos con N?",
"Find the entropy change \\(Nk\\ln 2\\) for each run, and for one mole.":
  "Encuentra el cambio de entropía \\(Nk\\ln 2\\) para cada corrida, y para un mol.",
"The shares come from a run of finite length, so they scatter about the predicted values. Press Four molecules, Remove the partition and Play, and record a reading when Time since opened passes {#} s. Compare its scatter about the predicted shares with that of your {#} s run; how does it change? Then watch a stretch of {#} s at {#}× ({#} s of your time), count roughly how many separate times all four molecules gathered on the left, and use that count \\(k\\) to estimate the relative uncertainty \\(1/\\sqrt{k}\\) of the share of time all four were on the left. How would the uncertainty change over the whole {#} s?":
  "Las fracciones vienen de una corrida de duración finita, así que se dispersan alrededor de los valores predichos. Pulsa Cuatro moléculas, Quitar la partición e Iniciar, y registra una lectura cuando Tiempo desde la apertura pase de {#} s. Compara su dispersión alrededor de las fracciones predichas con la de tu corrida de {#} s; ¿cómo cambia? Luego observa un tramo de {#} s a {#}× ({#} s de tu tiempo), cuenta aproximadamente cuántas veces separadas se juntaron las cuatro moléculas a la izquierda, y usa ese conteo \\(k\\) para estimar la incertidumbre relativa \\(1/\\sqrt{k}\\) de la fracción del tiempo en que las cuatro estuvieron a la izquierda. ¿Cómo cambiaría la incertidumbre en los {#} s completos?",
"With four molecules the gas often gathers on the left by itself. Is the free expansion of four molecules irreversible?":
  "Con cuatro moléculas el gas a menudo se junta a la izquierda por sí solo. ¿Es irreversible la expansión libre de cuatro moléculas?",
"The laws of motion work the same forwards and backwards in time. Why, then, does a gas spread out but never gather back?":
  "Las leyes del movimiento funcionan igual hacia adelante y hacia atrás en el tiempo. ¿Por qué, entonces, un gas se reparte pero nunca se vuelve a juntar?",
"A real gas has about \\(10^{22}\\) molecules in a liter. Estimate how often all of them would be found in one half.":
  "Un gas real tiene unas \\(10^{22}\\) moléculas en un litro. Estima con qué frecuencia se encontrarían todas en una mitad.",
"Why does the gas’s temperature stay the same in a free expansion, even though its entropy rises?":
  "¿Por qué la temperatura del gas se mantiene igual en una expansión libre, aunque su entropía sube?",
"Find the row \\(n\\) = {#} of your hundred molecule run and hold its share of time up against your guess in Before the lab {#}. Explain why the share comes out as it does, using the number of ways \\(\\binom{N}{n}\\) for the counts near {#} and the spread you found in Analysis {#}, and say what “evenly spread” can mean for a gas of a hundred molecules.":
  "Encuentra la fila \\(n\\) = {#} de tu corrida de cien moléculas y compara su fracción del tiempo con tu estimación de Antes del laboratorio {#}. Explica por qué la fracción resulta como resulta, usando el número de maneras \\(\\binom{N}{n}\\) para las cuentas cercanas a {#} y la dispersión que encontraste en el Análisis {#}, y di qué puede significar “repartido uniformemente” para un gas de cien moléculas.",
"For courses that use calculus. This section is not counted in the {#} minutes; do it when your instructor assigns it.":
  "Para cursos que usan cálculo. Esta sección no cuenta dentro de los {#} minutos; hazla cuando tu profesor la asigne.",
"No heat flows in a free expansion, yet the entropy rises, so \\(\\int dQ/T\\) along the free expansion itself does not give \\(\\Delta S\\). Entropy depends only on the state, so take the gas between the same two states along a reversible isotherm at \\(T\\) instead. Use the first law (\\(\\Delta U = 0\\), so \\(dQ = P\\,dV\\)) and \\(PV = nRT\\) to integrate \\(dS = dQ/T\\) from \\(V_1\\) to \\(V_2\\) and show that \\(\\Delta S = nR\\ln(V_2/V_1)\\). Check that for N molecules and \\(V_2 = 2V_1\\) this equals \\(k\\ln 2^N\\), the Background’s count of arrangements.":
  "En una expansión libre no fluye calor y, sin embargo, la entropía aumenta, así que \\(\\int dQ/T\\) a lo largo de la propia expansión libre no da \\(\\Delta S\\). La entropía depende solo del estado, así que lleva el gas entre los mismos dos estados a lo largo de una isoterma reversible a \\(T\\). Usa la primera ley (\\(\\Delta U = 0\\), así que \\(dQ = P\\,dV\\)) y \\(PV = nRT\\) para integrar \\(dS = dQ/T\\) de \\(V_1\\) a \\(V_2\\) y demostrar que \\(\\Delta S = nR\\ln(V_2/V_1)\\). Comprueba que para N moléculas y \\(V_2 = 2V_1\\) esto es igual a \\(k\\ln 2^N\\), la cuenta de arreglos de los Antecedentes.",
"For large N, treat \\(n\\) as continuous. Use Stirling’s approximation, \\(\\ln N! \\approx N\\ln N - N\\), to write \\(\\ln\\Omega(n)\\), and differentiate it twice with respect to \\(n\\): show that the first derivative is zero at \\(n = N/2\\) and the second is \\(-4/N\\) there. A Taylor expansion then gives \\(\\Omega(N/2 + x) \\approx \\Omega(N/2)\\,e^{-2x^2/N}\\). For N = {#}, predict the share at \\(n\\) = {#} and at \\(n\\) = {#} as fractions of the share at \\(n\\) = {#}, and compare with your hundred molecule run (use the mean of the {#} and {#} rows, and of the {#} and {#} rows). Then, since the shares add up to {#}, use \\(\\int_{-\\infty}^{\\infty} e^{-ax^2}\\,dx = \\sqrt{\\pi/a}\\) to predict the share at \\(n\\) = {#} and compare it with \\(\\binom{100}{50}/2^{100}\\) and with your reading.":
  "Para N grande, trata \\(n\\) como continua. Usa la aproximación de Stirling, \\(\\ln N! \\approx N\\ln N - N\\), para escribir \\(\\ln\\Omega(n)\\), y derívala dos veces respecto a \\(n\\): demuestra que la primera derivada es cero en \\(n = N/2\\) y que la segunda vale \\(-4/N\\) ahí. Un desarrollo de Taylor da entonces \\(\\Omega(N/2 + x) \\approx \\Omega(N/2)\\,e^{-2x^2/N}\\). Para N = {#}, predice la proporción en \\(n\\) = {#} y en \\(n\\) = {#} como fracciones de la proporción en \\(n\\) = {#}, y compara con tu corrida de cien moléculas (usa el promedio de las filas de {#} y {#}, y de las filas de {#} y {#}). Luego, como las proporciones suman {#}, usa \\(\\int_{-\\infty}^{\\infty} e^{-ax^2}\\,dx = \\sqrt{\\pi/a}\\) para predecir la proporción en \\(n\\) = {#} y compárala con \\(\\binom{100}{50}/2^{100}\\) y con tu lectura.",
"Prelab answers, the table copies with their graphs, the comparisons with the predicted shares, the entropy changes, and answers to the questions (and to With calculus, if assigned). Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de las tablas con sus gráficas, las comparaciones con las proporciones predichas, los cambios de entropía y las respuestas a las preguntas (y a Con cálculo, si se asignó). Identifica los datos simulados.",
"Number of separate times all the molecules gathered on the left":
  "Número de veces distintas en que todas las moléculas se juntaron a la izquierda",
"Number of molecules":
  "Número de moléculas",
"Number of arrangements with n on the left":
  "Número de arreglos con n a la izquierda",
"Entropy":
  "Entropía",
"Starting volume":
  "Volumen inicial",
"Final volume":
  "Volumen final",
"Number of molecules on the left; in nR ln {#}, the number of moles":
  "Número de moléculas a la izquierda; en nR ln {#}, el número de moles",
"Entropy and the Second Law (Free expansion)":
  "Entropía y la segunda ley (Expansión libre)",
"Prelab answers, the table copies with their graphs, the comparisons with the predicted shares, the entropy changes, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de la tabla con sus gráficas, las comparaciones con las fracciones predichas, los cambios de entropía y respuestas a las preguntas. Identifica los datos simulados.",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"<strong>Four molecules.</strong> Start with the Four molecules setup. Remove the partition and let the gas run at {#}× until at least {#} s have passed on the clock. Record a reading.":
  "<strong>Cuatro moléculas.</strong> Empieza con la configuración Cuatro moléculas. Quita la partición y deja correr el gas a {#}× hasta que hayan pasado al menos {#} s en el reloj. Registra una lectura.",
"<strong>More molecules.</strong> Send the reading to the worksheet and clear the readings, then repeat with {#} molecules, running for at least {#} s.":
  "<strong>Más moléculas.</strong> Envía la lectura a la hoja de trabajo y borra las lecturas; luego repite con {#} moléculas, corriendo durante al menos {#} s.",
"<strong>A hundred molecules.</strong> Send the reading and clear the readings, then pick A hundred molecules, remove the partition and watch the count on the left. Run for at least {#} s, record a reading and send it.":
  "<strong>Cien moléculas.</strong> Envía la lectura y borra las lecturas; luego elige Cien moléculas, quita la partición y observa el conteo de la izquierda. Corre durante al menos {#} s, registra una lectura y envíala.",
"Record N and the time counted for each copy of the table. Fill in the last two columns yourself: every row for four and ten molecules, and for a hundred molecules only the rows \\(n\\) = {#}, {#}, {#}, {#} and {#}.":
  "Registra N y el tiempo contado para cada copia de la tabla. Llena tú mismo las dos últimas columnas: todas las filas para cuatro y diez moléculas, y para cien moléculas solo las filas \\(n\\) = {#}, {#}, {#}, {#} y {#}.",
"Plot the measured share against the predicted share for each run (for {#} molecules, the five rows you filled in). What slope and intercept do you expect, and what do you find?":
  "Grafica la fracción medida en función de la fracción predicha para cada corrida (para {#} moléculas, las cinco filas que llenaste). ¿Qué pendiente y qué ordenada al origen esperas, y qué encuentras?",
"The shares come from a run of finite length, so they scatter about the predicted values. Reset with four molecules and record a reading after {#} s. Compare its scatter about the predicted shares with that of your {#} s run; how does it change? Then watch a stretch of {#} s, count roughly how many separate times all four molecules gathered on the left, and use that count \\(k\\) to estimate the relative uncertainty \\(1/\\sqrt{k}\\) of the share of time all four were on the left. How would the uncertainty change over the whole {#} s?":
  "Las fracciones vienen de una corrida de duración finita, así que se dispersan alrededor de los valores predichos. Reinicia con cuatro moléculas y registra una lectura después de {#} s. Compara su dispersión alrededor de las fracciones predichas con la de tu corrida de {#} s; ¿cómo cambia? Luego observa un tramo de {#} s, cuenta aproximadamente cuántas veces separadas se juntaron las cuatro moléculas a la izquierda, y usa ese conteo \\(k\\) para estimar la incertidumbre relativa \\(1/\\sqrt{k}\\) de la fracción del tiempo en que las cuatro estuvieron a la izquierda. ¿Cómo cambiaría la incertidumbre en los {#} s completos?"
});
