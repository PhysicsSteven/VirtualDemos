/* ws/einstein-solids in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/einstein-solids', {
"Exchanges tried":
  "Intercambios intentados",
"Einstein Solids: Why Heat Flows | VirtualDemos":
  "Sólidos de Einstein: por qué fluye el calor | VirtualDemos",
"Einstein Solids: Why Heat Flows":
  "Sólidos de Einstein: por qué fluye el calor",
"<strong>Setups in the demo:</strong> Small solids; Hot solid meets cold (these two use the Einstein solids view, the subject of this worksheet); Four molecules; A hundred molecules (the Free expansion worksheet); A real engine; Beats Carnot?; Perfect engine; Perfect refrigerator (the Second law worksheet).":
  "<strong>Configuraciones en la demo:</strong> Sólidos pequeños; Sólido caliente con sólido frío (estas dos usan la vista Sólidos de Einstein, el tema de esta hoja de trabajo); Cuatro moléculas; Cien moléculas (la hoja de trabajo de Expansión libre); Un motor real; ¿Supera a Carnot?; Motor perfecto; Refrigerador perfecto (la hoja de trabajo de la segunda ley).",
"Each solid is a set of identical quantum oscillators (an Einstein solid), and each oscillator holds a whole number of energy quanta \\(\\varepsilon\\). You choose the number of oscillators in solids A and B, from {#} to {#} each, the number of quanta q they share, from {#} to {#}, and which solid holds them all at the start.":
  "Cada sólido es un conjunto de osciladores cuánticos idénticos (un sólido de Einstein), y cada oscilador contiene un número entero de cuantos de energía \\(\\varepsilon\\). Eliges el número de osciladores de los sólidos A y B, de {#} a {#} cada uno, el número de cuantos q que comparten, de {#} a {#}, y qué sólido los tiene todos al inicio.",
"Each exchange picks two oscillators at random, from either solid, and moves a quantum from the first to the second if the first has one. In the long run every arrangement of the quanta is equally likely.":
  "Cada intercambio elige dos osciladores al azar, de cualquiera de los sólidos, y pasa un cuanto del primero al segundo si el primero tiene uno. A la larga, todos los arreglos de los cuantos son igualmente probables.",
"The squares are the oscillators, shaded by the quanta each holds. The meters show the quanta in A, the exchanges tried, and each solid’s temperature in units of \\(\\varepsilon/k\\), from \\(1/T = dS/dU\\).":
  "Los cuadrados son los osciladores, sombreados según los cuantos que tiene cada uno. Los medidores muestran los cuantos en A, los intercambios intentados y la temperatura de cada sólido en unidades de \\(\\varepsilon/k\\), a partir de \\(1/T = dS/dU\\).",
"The graphs show the quanta in A against the number of exchanges, with a dashed line at the most likely value, and \\(\\ln\\Omega\\) of each solid and of the pair against the quanta in A.":
  "Las gráficas muestran los cuantos en A en función del número de intercambios, con una línea discontinua en el valor más probable, y \\(\\ln\\Omega\\) de cada sólido y del par en función de los cuantos en A.",
"The speed buttons try {#}, {#} or {#} exchanges a second.":
  "Los botones de velocidad intentan {#}, {#} o {#} intercambios por segundo.",
"Record reading stores the solids’ sizes, q, the exchanges tried and the quanta in each solid. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda los tamaños de los sólidos, q, los intercambios intentados y los cuantos en cada sólido. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar inicia una nueva serie, que va a una nueva copia de la tabla.",
"Blind hides the temperatures, the most likely value and the entropy graph.":
  "A ciegas oculta las temperaturas, el valor más probable y la gráfica de entropía.",
"Count the ways two solids can share energy, and show that heat flows from hot to cold because that is overwhelmingly the most likely thing to happen.":
  "Cuenta las formas en que dos sólidos pueden compartir energía, y muestra que el calor fluye de lo caliente a lo frío porque eso es, por mucho, lo más probable que ocurra.",
"An Einstein solid of \\(N\\) oscillators holding \\(q\\) quanta can arrange them in":
  "Un sólido de Einstein de \\(N\\) osciladores que contiene \\(q\\) cuantos puede acomodarlos de",
"\\[\\Omega(N, q) = \\binom{q + N - 1}{q} = \\frac{(q + N - 1)!}{q!\\,(N - 1)!}\\]":
  "\\[\\Omega(N, q) = \\binom{q + N - 1}{q} = \\frac{(q + N - 1)!}{q!\\,(N - 1)!}\\]",
"ways (Schroeder, <em>An Introduction to Thermal Physics</em>, §{#}; beyond the book). Two solids sharing \\(q\\) quanta, with \\(q_A\\) in A, can be arranged in \\(\\Omega_A(q_A)\\,\\Omega_B(q - q_A)\\) ways. If every arrangement is equally likely, the share of the time spent with \\(q_A\\) in A is that number divided by the total, \\(\\Omega(N_A + N_B, q)\\).":
  "formas (Schroeder, <em>An Introduction to Thermal Physics</em>, §{#}; más allá del libro). Dos sólidos que comparten \\(q\\) cuantos, con \\(q_A\\) en A, pueden acomodarse de \\(\\Omega_A(q_A)\\,\\Omega_B(q - q_A)\\) formas. Si todos los arreglos son igualmente probables, la fracción del tiempo con \\(q_A\\) en A es ese número dividido entre el total, \\(\\Omega(N_A + N_B, q)\\).",
"With entropy \\(S = k\\ln\\Omega\\), the most likely \\(q_A\\) is where the total entropy is greatest. There \\(dS_A/dU_A = dS_B/dU_B\\), and since \\(1/T = dS/dU\\), the two temperatures are equal. Heat flowing from hot to cold raises the total entropy (§{#}), which is the second law in Clausius’s form (§{#}). A solid with no energy has just one arrangement, so its entropy is zero, in line with the third law (§{#}).":
  "Con la entropía \\(S = k\\ln\\Omega\\), la \\(q_A\\) más probable está donde la entropía total es mayor. Ahí \\(dS_A/dU_A = dS_B/dU_B\\), y como \\(1/T = dS/dU\\), las dos temperaturas son iguales. El calor que fluye de lo caliente a lo frío aumenta la entropía total (§{#}), que es la segunda ley en la forma de Clausius (§{#}). Un sólido sin energía tiene un solo arreglo, así que su entropía es cero, de acuerdo con la tercera ley (§{#}).",
"List the ways to put {#} quanta into {#} oscillators. Check your count with the formula.":
  "Haz una lista de las formas de poner {#} cuantos en {#} osciladores. Comprueba tu conteo con la fórmula.",
"For two solids of {#} oscillators each sharing {#} quanta, find \\(\\Omega_A\\), \\(\\Omega_B\\) and their product for \\(q_A\\) = {#} to {#}. Which \\(q_A\\) is most likely?":
  "Para dos sólidos de {#} osciladores cada uno que comparten {#} cuantos, encuentra \\(\\Omega_A\\), \\(\\Omega_B\\) y su producto para \\(q_A\\) = {#} a {#}. ¿Qué \\(q_A\\) es más probable?",
"Check that the products add up to \\(\\Omega(6, 6) = 462\\).":
  "Comprueba que los productos suman \\(\\Omega(6, 6) = 462\\).",
"Solid A has {#} oscillators and B has {#}, sharing {#} quanta. Guess the most likely \\(q_A\\), and say why.":
  "El sólido A tiene {#} osciladores y B tiene {#}, y comparten {#} cuantos. Adivina la \\(q_A\\) más probable, y di por qué.",
"<strong>Small solids.</strong> Start with the Small solids setup ({#} and {#} oscillators, {#} quanta, all in A). Run at {#}× and record a reading every few seconds, until you have at least {#}.":
  "<strong>Sólidos pequeños.</strong> Empieza con la configuración Sólidos pequeños ({#} y {#} osciladores, {#} cuantos, todos en A). Corre a {#}× y registra una lectura cada pocos segundos, hasta tener al menos {#}.",
"<strong>Hot solid meets cold.</strong> Send the readings to the worksheet and clear them, then pick Hot solid meets cold. Record a reading every {#} exchanges or so for the first {#} exchanges (run slowly, or pause between readings), then every few thousand until {#} {#}.":
  "<strong>Sólido caliente con sólido frío.</strong> Envía las lecturas a la hoja de trabajo y bórralas, y luego elige Sólido caliente con sólido frío. Registra una lectura más o menos cada {#} intercambios durante los primeros {#} intercambios (corre lento, o pausa entre lecturas), y luego cada pocos miles hasta {#} {#}.",
"<strong>Start in B.</strong> Send these readings to the worksheet and clear them, then repeat Hot solid meets cold with all the energy starting in B. Send this run too.":
  "<strong>Empezar en B.</strong> Envía estas lecturas a la hoja de trabajo y bórralas, y luego repite Sólido caliente con sólido frío con toda la energía empezando en B. Envía también esta corrida.",
"<span>B</span>Exchanges tried":
  "<span>B</span>Intercambios intentados",
"<span>E</span>\\(\\Omega_A\\)":
  "<span>E</span>\\(\\Omega_A\\)",
"<span>F</span>\\(\\Omega_B\\)":
  "<span>F</span>\\(\\Omega_B\\)",
"<span>G</span>\\(\\Omega_A\\,\\Omega_B\\)":
  "<span>G</span>\\(\\Omega_A\\,\\Omega_B\\)",
"Exchanges tried, row {#}":
  "Intercambios intentados, fila {#}",
"q_A, row {#}":
  "q_A, fila {#}",
"q_B, row {#}":
  "q_B, fila {#}",
"Ω_A, row {#}":
  "Ω_A, fila {#}",
"Ω_B, row {#}":
  "Ω_B, fila {#}",
"Ω_A Ω_B, row {#}":
  "Ω_A Ω_B, fila {#}",
"Record \\(N_A\\), \\(N_B\\) and \\(q\\) for each copy of the table. For the large solids, write \\(\\ln\\Omega\\) instead of \\(\\Omega\\).":
  "Anota \\(N_A\\), \\(N_B\\) y \\(q\\) para cada copia de la tabla. Para los sólidos grandes, escribe \\(\\ln\\Omega\\) en lugar de \\(\\Omega\\).",
"For the small solids, count how many of your readings had each value of \\(q_A\\), and compare the shares with your predictions from Before the lab question {#}.":
  "Para los sólidos pequeños, cuenta cuántas de tus lecturas tuvieron cada valor de \\(q_A\\), y compara las fracciones con tus predicciones de la pregunta {#} de Antes del laboratorio.",
"For Hot solid meets cold, plot \\(q_A\\) against the exchanges tried. Where does it settle, and how long does that take?":
  "Para Sólido caliente con sólido frío, grafica \\(q_A\\) en función de los intercambios intentados. ¿Dónde se estabiliza, y cuánto tarda?",
"Find \\(\\ln\\Omega_A + \\ln\\Omega_B\\) at the start and at the settled value. By how much did the entropy, in units of \\(k\\), rise?":
  "Encuentra \\(\\ln\\Omega_A + \\ln\\Omega_B\\) al inicio y en el valor estabilizado. ¿Cuánto aumentó la entropía, en unidades de \\(k\\)?",
"Starting from B, where does \\(q_A\\) settle? Compare with Analysis {#}.":
  "Empezando desde B, ¿dónde se estabiliza \\(q_A\\)? Compara con el Análisis {#}.",
"Show that the most likely \\(q_A\\) shares the energy in proportion to the number of oscillators, and explain why that makes the temperatures equal.":
  "Muestra que la \\(q_A\\) más probable reparte la energía en proporción al número de osciladores, y explica por qué eso hace iguales las temperaturas.",
"Even after settling, \\(q_A\\) wobbles about its most likely value. Estimate the size of the wobble for the large solids from your graph, and compare it with \\(q_A\\). How would the size of the wobble compared with \\(q_A\\) change for solids a thousand times larger?":
  "Incluso después de estabilizarse, \\(q_A\\) oscila alrededor de su valor más probable. Estima el tamaño de esa oscilación para los sólidos grandes a partir de tu gráfica, y compáralo con \\(q_A\\). ¿Cómo cambiaría el tamaño de la oscilación comparado con \\(q_A\\) para sólidos mil veces más grandes?",
"Nothing in the rules says energy must flow from A to B. Why does it?":
  "Nada en las reglas dice que la energía deba fluir de A a B. ¿Por qué lo hace?",
"With small solids, energy sometimes flows back into A for a while. Why is that never seen for a cup of coffee?":
  "Con sólidos pequeños, la energía a veces regresa a A por un rato. ¿Por qué eso nunca se ve en una taza de café?",
"Why do the two solids end up sharing the energy in proportion to their sizes, not equally?":
  "¿Por qué los dos sólidos terminan compartiendo la energía en proporción a sus tamaños, y no por partes iguales?",
"What is the entropy of a solid with no energy at all, and which law of thermodynamics does that match?":
  "¿Cuál es la entropía de un sólido sin nada de energía, y con qué ley de la termodinámica coincide eso?",
"Prelab answers, the table copies with their graphs, the counts and shares for the small solids, the entropy rise for the large ones, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de la tabla con sus gráficas, los conteos y fracciones para los sólidos pequeños, el aumento de entropía para los grandes, y respuestas a las preguntas. Identifica los datos simulados.",
"Number of oscillators":
  "Número de osciladores",
"Number of oscillators in solid A":
  "Número de osciladores en el sólido A",
"Number of oscillators in solid B":
  "Número de osciladores en el sólido B",
"Multiplicity: the number of arrangements of the quanta":
  "Multiplicidad: el número de arreglos de los cuantos",
"Multiplicity of solid A":
  "Multiplicidad del sólido A",
"Multiplicity of solid B":
  "Multiplicidad del sólido B",
"Entropy":
  "Entropía",
"Entropy of solid A":
  "Entropía del sólido A",
"Entropy of solid B":
  "Entropía del sólido B",
"Temperature (shown in units of ε/k)":
  "Temperatura (mostrada en unidades de ε/k)",
"Energy of solid A":
  "Energía del sólido A",
"Energy of solid B":
  "Energía del sólido B",
"Energy of one quantum":
  "Energía de un cuanto",
"Number of quanta":
  "Número de cuantos",
"Quanta in solid A":
  "Cuantos en el sólido A",
"Quanta in solid B":
  "Cuantos en el sólido B",
"Entropy and the Second Law (Einstein solids)":
  "Entropía y la segunda ley (sólidos de Einstein)"
});
