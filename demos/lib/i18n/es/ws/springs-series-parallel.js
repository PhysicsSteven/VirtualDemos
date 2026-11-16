/* ws/springs-series-parallel in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/springs-series-parallel', {
"Arrangement":
  "Arreglo",
"Top of the block below the ceiling y (cm)":
  "Parte superior del bloque bajo el techo y (cm)",
"Springs in Series and Parallel | VirtualDemos":
  "Resortes en serie y en paralelo | VirtualDemos",
"Springs in Series and Parallel":
  "Resortes en serie y en paralelo",
"<strong>Setups in the demo:</strong> Simple harmonic motion; Hanging spring; Three kinds of damping; Resonance; Normal modes; Beats. The Sandbox has its own ready made rigs: Two in series; Two in parallel; Series and parallel; One spring; Two blocks; Start empty; and, between two walls, One block; Two blocks; Side by side; Empty track.":
  "<strong>Configuraciones en la demo:</strong> Movimiento armónico simple; Resorte colgante; Tres tipos de amortiguamiento; Resonancia; Modos normales; Batidos. La Caja de arena tiene sus propios montajes listos: Dos en serie; Dos en paralelo; Serie y paralelo; Un resorte; Dos bloques; Empezar vacío; y, entre dos paredes, Un bloque; Dos bloques; Lado a lado; Riel vacío.",
"With \\(k_1 = k_2\\), mode {#} has both blocks moving together, so the middle spring never stretches, and mode {#} has them moving opposite, so it adds \\(2k_c\\). With unequal outer springs the modes are lopsided: one block swings more than the other, shown by the amplitude ratio below. Any motion is a sum of the two modes.":
  "Con \\(k_1 = k_2\\), en el modo {#} ambos bloques se mueven juntos, así que el resorte del medio nunca se estira, y en el modo {#} se mueven en sentidos opuestos, así que suma \\(2k_c\\). Con resortes exteriores desiguales los modos quedan desbalanceados: un bloque oscila más que el otro, como muestra el cociente de amplitudes de abajo. Cualquier movimiento es una suma de los dos modos.",
"The oil pushes on each block with a force \\(-bv\\). The damping ratio \\(\\zeta = b/(2\\sqrt{km})\\) sorts the motion: \\(\\zeta < 1\\) underdamped, \\(\\zeta = 1\\) critically damped, \\(\\zeta > 1\\) overdamped. Drag the grip on the oil to change \\(b\\).":
  "El aceite empuja cada bloque con una fuerza \\(-bv\\). El cociente de amortiguamiento \\(\\zeta = b/(2\\sqrt{km})\\) clasifica el movimiento: \\(\\zeta < 1\\) subamortiguado, \\(\\zeta = 1\\) críticamente amortiguado, \\(\\zeta > 1\\) sobreamortiguado. Arrastra la agarradera del aceite para cambiar \\(b\\).",
"The wall at the end of the spring moves as \\(X_w\\cos\\omega t\\). That pulls on the block exactly like a force \\(F_0\\cos\\omega t\\) with \\(F_0 = kX_w\\). The sweep starts at the steady state for its first \\(\\omega\\) and raises \\(\\omega\\) slowly; if \\(b\\) is small the oscillator needs time \\(2m/b\\) to catch up, so the measured dots fall a little below the peak and ring just after it, more so for a lightly damped spring.":
  "La pared del extremo del resorte se mueve como \\(X_w\\cos\\omega t\\). Eso tira del bloque exactamente como una fuerza \\(F_0\\cos\\omega t\\) con \\(F_0 = kX_w\\). El barrido empieza en el estado estacionario para su primera \\(\\omega\\) y aumenta \\(\\omega\\) lentamente; si \\(b\\) es pequeño, el oscilador necesita un tiempo \\(2m/b\\) para alcanzarlo, así que los puntos medidos quedan un poco por debajo del pico y oscilan justo después de él, más en un resorte poco amortiguado.",
"Press Stopwatch (or W on the drawing) as the block passes a mark you choose, count N full oscillations, and press it again as the block passes the same mark going the same way. The stopwatch runs on simulation time, so slow motion makes timing easier, but your own reaction time still counts. It reads to {#} s. The gold ticks on the ruler hold the largest |x| since Reset peak.":
  "Pulsa Cronómetro (o W sobre el dibujo) cuando el bloque pase por una marca que elijas, cuenta N oscilaciones completas y vuelve a pulsarlo cuando el bloque pase por la misma marca en el mismo sentido. El cronómetro corre con el tiempo de la simulación, así que la cámara lenta facilita medir, pero tu propio tiempo de reacción todavía cuenta. Lee hasta {#} s. Las marcas doradas de la regla guardan el mayor |x| desde Reiniciar pico.",
"Record reading stores what is on screen, rounded as displayed: the stopwatch time, your N, the ruler peak (or, when driven, the amplitude of the last drive cycle) and the settings \\(m\\), \\(k\\), \\(b\\), \\(F_0\\) and \\(\\omega\\). \\(T = t/N\\). Cells can be edited; rows stay through setup changes until Clear.":
  "Registrar lectura guarda lo que está en pantalla, redondeado como se muestra: el tiempo del cronómetro, tu N, el pico de la regla (o, cuando hay forzamiento, la amplitud del último ciclo de forzamiento) y los ajustes \\(m\\), \\(k\\), \\(b\\), \\(F_0\\) y \\(\\omega\\). \\(T = t/N\\). Las celdas se pueden editar; las filas se mantienen al cambiar la configuración hasta que pulses Borrar.",
"Blind hides the period, \\(\\omega_0\\) and \\(f_0\\) predicted from \\(m\\) and \\(k\\), the damping ratio, Q, the damped period and decay time, the predicted steady amplitude, phase and peak, the mode frequencies and beat period, the static stretch, the reference circle, the envelope, the \\(\\zeta\\) comparison traces, the curves on the resonance plot and the \\(k\\) derived from your fit. The stopwatch, the ruler, the clock, the measured period and amplitude, and the settings stay.":
  "A ciegas oculta el periodo, \\(\\omega_0\\) y \\(f_0\\) predichos a partir de \\(m\\) y \\(k\\), el cociente de amortiguamiento, Q, el periodo amortiguado y el tiempo de decaimiento, la amplitud estable, la fase y el pico predichos, las frecuencias de los modos y el periodo de batido, el estiramiento estático, el círculo de referencia, la envolvente, las trazas de comparación de \\(\\zeta\\), las curvas de la gráfica de resonancia y la \\(k\\) obtenida de tu ajuste. El cronómetro, la regla, el reloj, el periodo y la amplitud medidos y los ajustes se mantienen.",
"Unknown spring picks a random \\(k\\) from {#} to {#} N/m and hides it: the \\(k\\) slider, the \\(k\\) labels, the energy values, the wall amplitude and the \\(k\\) column of the CSV. It turns Blind on, and the \\(\\zeta\\) buttons are off because they would give \\(k\\) away. The measured period stays. Change \\(m\\), time the period and find \\(k\\) from the slope of \\(T^2\\) against \\(m\\). One block only. Turning it off shows \\(k\\), so you can check your answer.":
  "Resorte desconocido elige una \\(k\\) aleatoria de {#} a {#} N/m y la oculta: el deslizador de \\(k\\), las etiquetas de \\(k\\), los valores de energía, la amplitud de la pared y la columna \\(k\\) del CSV. Activa A ciegas, y los botones de \\(\\zeta\\) quedan desactivados porque revelarían \\(k\\). El periodo medido se mantiene. Cambia \\(m\\), mide el periodo y encuentra \\(k\\) a partir de la pendiente de \\(T^2\\) en función de \\(m\\). Solo un bloque. Al desactivarlo se muestra \\(k\\), para que puedas comprobar tu respuesta.",
"Keep a trace, then drag the block farther out and let go: the peaks move apart in height but not in time.":
  "Conserva una traza, luego arrastra el bloque más lejos y suéltalo: los picos se separan en altura pero no en el tiempo.",
"The Sandbox hangs any arrangement of springs, hooks and blocks from a ceiling, moving straight up and down. Every spring is {#} cm long unstretched and every block {#} cm tall. Hooks and bars have no mass, so they always sit where the spring forces on them balance. Parts are dragged from the tray in the picture onto the ceiling, a hook or a block; a hook dragged onto another hook joins them into one bar, so the springs on it stretch together (side by side); a spring hung below a hook puts springs one after another; anything dropped on the bin is taken away. Oil dropped on a block damps that block alone with a force \\(-bv\\); the shaker dropped on the ceiling moves the whole ceiling as \\(Y = A\\cos\\omega t\\), and the readouts give each block’s swing over the last drive period. The Sandbox can also lay the rig on its side: blocks slide without friction on a level track between two walls, so gravity plays no part; a hook dragged onto the right wall ties its spring there, the right wall can be dragged to change the gap, and the shaker moves the left wall. The motion is the exact solution of the equations of motion.":
  "La Caja de arena cuelga cualquier arreglo de resortes, ganchos y bloques de un techo, moviéndose en línea recta arriba y abajo. Cada resorte mide {#} cm sin estirar y cada bloque {#} cm de alto. Los ganchos y las barras no tienen masa, así que siempre quedan donde se equilibran las fuerzas de los resortes sobre ellos. Las piezas se arrastran desde la bandeja de la imagen al techo, a un gancho o a un bloque; un gancho arrastrado sobre otro gancho los une en una sola barra, así que los resortes que cuelgan de ella se estiran juntos (lado a lado); un resorte colgado bajo un gancho pone resortes uno tras otro; lo que se suelta en el bote de basura se quita. El aceite soltado sobre un bloque amortigua solo ese bloque con una fuerza \\(-bv\\); el agitador soltado en el techo mueve todo el techo como \\(Y = A\\cos\\omega t\\), y las lecturas dan la oscilación de cada bloque durante el último periodo de forzamiento. La Caja de arena también puede acostar el montaje: los bloques se deslizan sin fricción sobre un riel horizontal entre dos paredes, así que la gravedad no interviene; un gancho arrastrado a la pared derecha amarra ahí su resorte, la pared derecha se puede arrastrar para cambiar la separación, y el agitador mueve la pared izquierda. El movimiento es la solución exacta de las ecuaciones de movimiento.",
"Find the spring constant of springs combined one after another and side by side, and compare each with the value predicted from the constants of the single springs.":
  "Halla la constante de resortes combinados uno tras otro y lado a lado, y compara cada una con el valor predicho a partir de las constantes de los resortes solos.",
"For one spring, the force is \\(F = kx\\) and \\(k\\) is its spring constant (§{#}).":
  "Para un resorte, la fuerza es \\(F = kx\\) y \\(k\\) es su constante de resorte (§{#}).",
"<strong>Springs combined.</strong> Springs hung one below the other are <em>in series</em>: each one pulls on the next, so every spring in the line carries the same tension, and the total stretch is the sum of their stretches. Springs that hold the same block or bar side by side are <em>in parallel</em>: they stretch the same amount, and the load is shared among them. Any combination behaves like a single spring with some effective constant \\(k_{\\text{eff}}\\). A block of mass \\(m\\) hanging at rest stretches it by \\(mg/k_{\\text{eff}}\\), so the block’s position below the ceiling is":
  "<strong>Resortes combinados.</strong> Los resortes colgados uno debajo del otro están <em>en serie</em>: cada uno tira del siguiente, así que todos los resortes de la línea tienen la misma tensión, y el estiramiento total es la suma de sus estiramientos. Los resortes que sostienen el mismo bloque o barra lado a lado están <em>en paralelo</em>: se estiran lo mismo, y la carga se reparte entre ellos. Cualquier combinación se comporta como un solo resorte con alguna constante efectiva \\(k_{\\text{eff}}\\). Un bloque de masa \\(m\\) colgado en reposo la estira \\(mg/k_{\\text{eff}}\\), así que la posición del bloque bajo el techo es",
"\\[y = y_0 + \\frac{g}{k_{\\text{eff}}}\\,m,\\]":
  "\\[y = y_0 + \\frac{g}{k_{\\text{eff}}}\\,m,\\]",
"where \\(y_0\\) is where it would sit with the springs unstretched.":
  "donde \\(y_0\\) es donde quedaría con los resortes sin estirar.",
"Two springs of constants \\(k_1\\) and \\(k_2\\) hold a load \\(F\\). Find \\(k_{\\text{eff}}\\) when they are in series (same tension, stretches add) and when they are in parallel (same stretch, forces add). Evaluate both for \\(k_1 = k_2 = 20.0\\) N/m.":
  "Dos resortes de constantes \\(k_1\\) y \\(k_2\\) sostienen una carga \\(F\\). Encuentra \\(k_{\\text{eff}}\\) cuando están en serie (misma tensión, los estiramientos se suman) y cuando están en paralelo (mismo estiramiento, las fuerzas se suman). Evalúa ambos para \\(k_1 = k_2 = 20.0\\) N/m.",
"A long spring is cut into two equal halves. How does the spring constant of each half compare with that of the whole spring: half as large, the same, or twice as large?":
  "Un resorte largo se corta en dos mitades iguales. ¿Cómo se compara la constante del resorte de cada mitad con la del resorte completo: la mitad, igual o el doble?",
"Secure a real spring support and keep clear of falling masses. Do not stretch the spring beyond its elastic range or overload its attachment.":
  "Asegura bien el soporte de un resorte real y mantente lejos de las masas que caen. No estires el resorte más allá de su intervalo elástico ni sobrecargues su sujeción.",
"Under <strong>System</strong> press <strong>Sandbox</strong>. Use three of its rigs, all with \\(k = 20.0\\) N/m: <strong>One spring</strong>, <strong>Two in series</strong> and <strong>Two in parallel</strong>. For each, set the <strong>Block on it</strong> slider to {#}, {#} and {#} g in turn, press <strong>Settle</strong> so the block comes to rest, and write down the readout <strong>Block {#}: its top face below the ceiling</strong> in the \\(y\\) column by hand (in the Sandbox, Record reading stores timed oscillations only). Use one copy of the Springs combined table for each arrangement. Two in series is one spring twice as long as the One spring rig, and each of its two springs is one half of it; for each of these two rigs, find how far the block moved from {#} g to {#} g, and write both in your answer to Question {#}.":
  "En <strong>Sistema</strong> pulsa <strong>Caja de arena</strong>. Usa tres de sus montajes, todos con \\(k = 20.0\\) N/m: <strong>Un resorte</strong>, <strong>Dos en serie</strong> y <strong>Dos en paralelo</strong>. Para cada uno, fija el control deslizante <strong>Bloque encima</strong> en {#}, {#} y {#} g por turno, pulsa <strong>Asentar</strong> para que el bloque quede en reposo y anota a mano la lectura <strong>Bloque {#}: su cara superior debajo del techo</strong> en la columna \\(y\\) (en la Caja de arena, Registrar lectura solo guarda oscilaciones cronometradas). Usa una copia de la tabla Resortes combinados para cada arreglo. Dos en serie es un resorte del doble de largo que el montaje Un resorte, y cada uno de sus dos resortes es la mitad de él; para cada uno de estos dos montajes, halla cuánto se movió el bloque de {#} g a {#} g, y escribe ambos en tu respuesta a la pregunta {#}.",
"<strong>Springs combined.</strong> One copy of the table for each arrangement.":
  "<strong>Resortes combinados.</strong> Una copia de la tabla para cada arreglo.",
"<span>A</span>Arrangement":
  "<span>A</span>Arreglo",
"<span>C</span>Top of the block below the ceiling \\(y\\) (cm)":
  "<span>C</span>Parte superior del bloque bajo el techo \\(y\\) (cm)",
"Arrangement, row {#}":
  "Arreglo, fila {#}",
"Top of the block below the ceiling y (cm), row {#}":
  "Parte superior del bloque bajo el techo y (cm), fila {#}",
"For each arrangement, fit \\(y = y_0 + s\\,m\\) and find \\(k_{\\text{eff}} = g/s\\) (with \\(s\\) in m/kg). Compare each with your prediction from Before the lab question {#}, and explain what the intercept \\(y_0\\) is for each arrangement.":
  "Para cada arreglo, ajusta \\(y = y_0 + s\\,m\\) y encuentra \\(k_{\\text{eff}} = g/s\\) (con \\(s\\) en m/kg). Compara cada una con tu predicción de la pregunta {#} de Antes del laboratorio, y explica qué es la ordenada al origen \\(y_0\\) para cada arreglo.",
"The readout gives \\(y\\) to {#} cm and the block masses are exact settings, so each fit’s residuals are the rounding of the readout, and any difference between \\(k_{\\text{eff}}\\) and your prediction beyond the slope’s standard error is arithmetic or rounding in your work. Every spring in the model is exactly {#} N/m. On a real bench the largest errors would come from the springs’ own mass, from a spring constant that is not the same for every spring of one kind, and from reading the block’s position to about a millimeter against a ruler.":
  "La lectura da \\(y\\) con una precisión de {#} cm y las masas de los bloques son ajustes exactos, así que los residuos de cada ajuste son el redondeo de la lectura, y cualquier diferencia entre \\(k_{\\text{eff}}\\) y tu predicción que supere el error estándar de la pendiente es aritmética o redondeo en tu trabajo. Cada resorte del modelo es exactamente de {#} N/m. En un banco real, los mayores errores vendrían de la masa propia de los resortes, de una constante de resorte que no es igual para todos los resortes de un mismo tipo y de leer la posición del bloque con una precisión de un milímetro aproximadamente contra una regla.",
"How far did the block move from {#} g to {#} g on One spring, and on Two in series? From the two, find the spring constant of each half of a cut spring, and check it against your answer to Before the lab {#}. Explain using springs in series.":
  "¿Cuánto se movió el bloque de {#} g a {#} g con Un resorte, y con Dos en serie? A partir de ambos, halla la constante del resorte de cada mitad de un resorte cortado, y compárala con tu respuesta a Antes del laboratorio {#}. Explica usando resortes en serie.",
"Hanging a block in the Sandbox, how does the period of oscillation change when one spring is replaced by two of the same springs in series, and by two in parallel?":
  "Al colgar un bloque en la Caja de arena, ¿cómo cambia el periodo de oscilación cuando un resorte se sustituye por dos resortes iguales en serie, y por dos en paralelo?",
"Prelab answers, the Springs combined tables with their fits and \\(k_{\\text{eff}}\\) values, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, las tablas Resortes combinados con sus ajustes y valores de \\(k_{\\text{eff}}\\), y las respuestas a las preguntas. Identifica los datos simulados.",
"Amplitude":
  "Amplitud",
"Load held by the two springs":
  "Carga sostenida por los dos resortes",
"Amplitude of the equivalent driving force":
  "Amplitud de la fuerza impulsora equivalente",
"Number of periods timed":
  "Número de periodos cronometrados",
"Amplitude of the wall's motion":
  "Amplitud del movimiento de la pared",
"Position of the shaken ceiling, A cos ωt":
  "Posición del techo agitado, A cos ωt",
"Damping constant of the oil":
  "Constante de amortiguamiento del aceite",
"Natural frequency":
  "Frecuencia natural",
"Acceleration due to gravity":
  "Aceleración debida a la gravedad",
"Spring constant":
  "Constante del resorte",
"Spring constant of the first spring":
  "Constante del primer resorte",
"Spring constant of the second spring":
  "Constante del segundo resorte",
"Stiffness of the middle (coupling) spring":
  "Rigidez del resorte del medio (de acoplamiento)",
"Effective spring constant of the combination of springs":
  "Constante efectiva de la combinación de resortes",
"Mass of the block":
  "Masa del bloque",
"Drive angular frequency":
  "Frecuencia angular de forzamiento",
"Natural angular frequency":
  "Frecuencia angular natural",
"Slope of the fit of y against m":
  "Pendiente del ajuste de y contra m",
"Velocity of the block":
  "Velocidad del bloque",
"Displacement from equilibrium":
  "Desplazamiento desde el equilibrio",
"Position of the top of the block below the ceiling":
  "Posición de la parte superior del bloque bajo el techo",
"Position of the top of the block with the springs unstretched: the intercept of y against m":
  "Posición de la parte superior del bloque con los resortes sin estirar: la ordenada al origen de y en función de m",
"Damping ratio":
  "Cociente de amortiguamiento",
"Column D, row {#}":
  "Columna D, fila {#}",
"Heading of column D":
  "Encabezado de la columna D",
"Column D":
  "Columna D",
"Under <strong>System</strong> press <strong>Sandbox</strong>. Use three of its rigs, all with \\(k = 20.0\\) N/m: <strong>One spring</strong>, <strong>Two in series</strong> and <strong>Two in parallel</strong>. For each, set the <strong>Block on it</strong> slider to {#}, {#} and {#} g in turn, press <strong>Settle</strong> so the block comes to rest, and write down the readout <strong>Block {#}: its top face below the ceiling</strong> in the \\(y\\) column by hand (in the Sandbox, Record reading stores timed oscillations only). Use one copy of the Springs combined table for each arrangement.":
  "En <strong>Sistema</strong> pulsa <strong>Caja de arena</strong>. Usa tres de sus montajes, todos con \\(k = 20.0\\) N/m: <strong>Un resorte</strong>, <strong>Dos en serie</strong> y <strong>Dos en paralelo</strong>. Para cada uno, fija el control <strong>Bloque encima</strong> en {#}, {#} y {#} g por turno, pulsa <strong>Asentar</strong> para que el bloque llegue al reposo, y anota a mano la lectura <strong>Bloque {#}: su cara superior debajo del techo</strong> en la columna \\(y\\) (en la Caja de arena, Registrar lectura guarda solo oscilaciones cronometradas). Usa una copia de la tabla Resortes combinados para cada arreglo.",
"A spring is cut in half. What is the spring constant of each half? Explain using springs in series.":
  "Un resorte se corta a la mitad. ¿Cuál es la constante de cada mitad? Explícalo usando resortes en serie.",
"Prelab answer, the Springs combined tables with their fits and \\(k_{\\text{eff}}\\) values, and answers to the questions. Identify simulated data.":
  "Respuesta del prelaboratorio, las tablas Springs combined con sus ajustes y valores de \\(k_{\\text{eff}}\\), y las respuestas a las preguntas. Identifica los datos simulados.",
"Period":
  "Periodo",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>"
});
