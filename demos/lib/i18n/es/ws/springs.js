/* ws/springs in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/springs', {
"Release amplitude (m)":
  "Amplitud al soltar (m)",
"Automatic measured T (s)":
  "T medido automáticamente (s)",
"N, if timed":
  "N, si se cronometró",
"Stopwatch t (s), if timed":
  "Cronómetro t (s), si se cronometró",
"Steady amplitude A (m)":
  "Amplitud estable A (m)",
"Predicted A (m)":
  "A predicha (m)",
"Arrangement":
  "Arreglo",
"Top of the block below the ceiling y (cm)":
  "Parte superior del bloque bajo el techo y (cm)",
"Finding an Unknown Spring Constant | VirtualDemos":
  "Encontrar una constante de resorte desconocida | VirtualDemos",
"Finding an Unknown Spring Constant":
  "Encontrar una constante de resorte desconocida",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} to {#}, {#} and {#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} a {#}, {#} y {#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
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
"Capture stores what is on screen, rounded as displayed: the stopwatch time, your N, the ruler peak (or, when driven, the amplitude of the last drive cycle) and the settings \\(m\\), \\(k\\), \\(b\\), \\(F_0\\) and \\(\\omega\\). \\(T = t/N\\). Cells can be edited; rows stay through setup changes until Clear.":
  "Capturar guarda lo que está en pantalla, redondeado como se muestra: el tiempo del cronómetro, tu N, el pico de la regla (o, cuando hay forzamiento, la amplitud del último ciclo de forzamiento) y los ajustes \\(m\\), \\(k\\), \\(b\\), \\(F_0\\) y \\(\\omega\\). \\(T = t/N\\). Las celdas se pueden editar; las filas se mantienen al cambiar la configuración hasta que pulses Borrar.",
"Blind hides the period, \\(\\omega_0\\) and \\(f_0\\) predicted from \\(m\\) and \\(k\\), the damping ratio, Q, the damped period and decay time, the predicted steady amplitude, phase and peak, the mode frequencies and beat period, the static stretch, the reference circle, the envelope, the \\(\\zeta\\) comparison traces, the curves on the resonance plot and the \\(k\\) derived from your fit. The stopwatch, the ruler, the clock, the measured period and amplitude, and the settings stay.":
  "A ciegas oculta el periodo, \\(\\omega_0\\) y \\(f_0\\) predichos a partir de \\(m\\) y \\(k\\), el cociente de amortiguamiento, Q, el periodo amortiguado y el tiempo de decaimiento, la amplitud estable, la fase y el pico predichos, las frecuencias de los modos y el periodo de batido, el estiramiento estático, el círculo de referencia, la envolvente, las trazas de comparación de \\(\\zeta\\), las curvas de la gráfica de resonancia y la \\(k\\) obtenida de tu ajuste. El cronómetro, la regla, el reloj, el periodo y la amplitud medidos y los ajustes se mantienen.",
"Unknown spring picks a random \\(k\\) from {#} to {#} N/m and hides it: the \\(k\\) slider, the \\(k\\) labels, the energy values, the wall amplitude and the \\(k\\) column of the CSV. It turns Blind on, and the \\(\\zeta\\) buttons are off because they would give \\(k\\) away. The measured period stays. Change \\(m\\), time the period and find \\(k\\) from the slope of \\(T^2\\) against \\(m\\). One block only. Turning it off shows \\(k\\), so you can check your answer.":
  "Resorte desconocido elige una \\(k\\) aleatoria de {#} a {#} N/m y la oculta: el deslizador de \\(k\\), las etiquetas de \\(k\\), los valores de energía, la amplitud de la pared y la columna \\(k\\) del CSV. Activa A ciegas, y los botones de \\(\\zeta\\) quedan desactivados porque revelarían \\(k\\). El periodo medido se mantiene. Cambia \\(m\\), mide el periodo y encuentra \\(k\\) a partir de la pendiente de \\(T^2\\) en función de \\(m\\). Solo un bloque. Al desactivarlo se muestra \\(k\\), para que puedas comprobar tu respuesta.",
"Keep a trace, then drag the block farther out and let go: the peaks move apart in height but not in time.":
  "Conserva una traza, luego arrastra el bloque más lejos y suéltalo: los picos se separan en altura pero no en el tiempo.",
"The Sandbox hangs any arrangement of springs, hooks and blocks from a ceiling, moving straight up and down. Every spring is {#} cm long unstretched and every block {#} cm tall. Hooks and bars have no mass, so they always sit where the spring forces on them balance. Parts are dragged from the tray in the picture onto the ceiling, a hook or a block; a hook dragged onto another hook joins them into one bar, so the springs on it stretch together (side by side); a spring hung below a hook puts springs one after another; anything dropped on the bin is taken away. Oil dropped on a block damps that block alone with a force \\(-bv\\); the shaker dropped on the ceiling moves the whole ceiling as \\(Y = A\\cos\\omega t\\), and the readouts give each block’s swing over the last drive period. The Sandbox can also lay the rig on its side: blocks slide without friction on a level track between two walls, so gravity plays no part; a hook dragged onto the right wall ties its spring there, the right wall can be dragged to change the gap, and the shaker moves the left wall. The motion is the exact solution of the equations of motion.":
  "La Caja de arena cuelga cualquier arreglo de resortes, ganchos y bloques de un techo, moviéndose en línea recta arriba y abajo. Cada resorte mide {#} cm sin estirar y cada bloque {#} cm de alto. Los ganchos y las barras no tienen masa, así que siempre quedan donde se equilibran las fuerzas de los resortes sobre ellos. Las piezas se arrastran desde la bandeja de la imagen al techo, a un gancho o a un bloque; un gancho arrastrado sobre otro gancho los une en una sola barra, así que los resortes que cuelgan de ella se estiran juntos (lado a lado); un resorte colgado bajo un gancho pone resortes uno tras otro; lo que se suelta en el bote de basura se quita. El aceite soltado sobre un bloque amortigua solo ese bloque con una fuerza \\(-bv\\); el agitador soltado en el techo mueve todo el techo como \\(Y = A\\cos\\omega t\\), y las lecturas dan la oscilación de cada bloque durante el último periodo de forzamiento. La Caja de arena también puede acostar el montaje: los bloques se deslizan sin fricción sobre un riel horizontal entre dos paredes, así que la gravedad no interviene; un gancho arrastrado a la pared derecha amarra ahí su resorte, la pared derecha se puede arrastrar para cambiar la separación, y el agitador mueve la pared izquierda. El movimiento es la solución exacta de las ecuaciones de movimiento.",
"Determine an unknown spring constant from the dependence of oscillation period on mass, relate the motion to a point going around a circle, measure how a driven oscillator responds near its natural frequency, and find the spring constant of springs combined one after another and side by side.":
  "Determina una constante de resorte desconocida a partir de la dependencia del periodo de oscilación con la masa, relaciona el movimiento con un punto que recorre un círculo, mide cómo responde un oscilador forzado cerca de su frecuencia natural, y encuentra la constante de resortes combinados uno tras otro y lado a lado.",
"For a mass on a linear spring (§{#}),":
  "Para una masa en un resorte lineal (§{#}),",
"\\[m\\ddot x=-kx,\\qquad T=2\\pi\\sqrt{\\frac{m}{k}}.\\]":
  "\\[m\\ddot x=-kx,\\qquad T=2\\pi\\sqrt{\\frac{m}{k}}.\\]",
"Therefore a graph of \\(T^2\\) against \\(m\\) is a line with slope \\(4\\pi^2/k\\). The displacement \\(x\\) is measured from equilibrium. Energy alternates between kinetic and spring potential energy (§{#}):":
  "Por lo tanto, una gráfica de \\(T^2\\) en función de \\(m\\) es una recta con pendiente \\(4\\pi^2/k\\). El desplazamiento \\(x\\) se mide desde el equilibrio. La energía alterna entre energía cinética y energía potencial del resorte (§{#}):",
"\\[E=\\frac12mv^2+\\frac12kx^2.\\]":
  "\\[E=\\frac12mv^2+\\frac12kx^2.\\]",
"<strong>The reference circle (§{#}).</strong> The motion \\(x = A\\cos(\\omega_0 t + \\phi)\\), with \\(\\omega_0 = \\sqrt{k/m} = 2\\pi/T\\), is the shadow on the \\(x\\) axis of a point going around a circle of radius \\(A\\) at constant angular speed \\(\\omega_0\\). The point’s speed \\(A\\omega_0\\) is the block’s largest speed, reached as it passes equilibrium, and at position \\(x\\) the block’s speed is":
  "<strong>El círculo de referencia (§{#}).</strong> El movimiento \\(x = A\\cos(\\omega_0 t + \\phi)\\), con \\(\\omega_0 = \\sqrt{k/m} = 2\\pi/T\\), es la sombra sobre el eje \\(x\\) de un punto que recorre un círculo de radio \\(A\\) con rapidez angular constante \\(\\omega_0\\). La rapidez del punto, \\(A\\omega_0\\), es la mayor rapidez del bloque, alcanzada cuando pasa por el equilibrio, y en la posición \\(x\\) la rapidez del bloque es",
"\\[v = \\omega_0\\sqrt{A^2 - x^2}.\\]":
  "\\[v = \\omega_0\\sqrt{A^2 - x^2}.\\]",
"<strong>Driven oscillations (§{#}).</strong> When a force \\(F_0\\cos\\omega t\\) drives a block with damping force \\(-bv\\), the motion settles, once the start up transient has died away (time constant \\(2m/b\\)), into oscillation at the drive frequency \\(\\omega\\) with amplitude":
  "<strong>Oscilaciones forzadas (§{#}).</strong> Cuando una fuerza \\(F_0\\cos\\omega t\\) impulsa un bloque con fuerza de amortiguamiento \\(-bv\\), el movimiento se estabiliza, una vez que se extingue el transitorio inicial (constante de tiempo \\(2m/b\\)), en una oscilación a la frecuencia de forzamiento \\(\\omega\\) con amplitud",
"\\[A(\\omega) = \\frac{F_0}{\\sqrt{(k - m\\omega^2)^2 + (b\\omega)^2}}.\\]":
  "\\[A(\\omega) = \\frac{F_0}{\\sqrt{(k - m\\omega^2)^2 + (b\\omega)^2}}.\\]",
"At low \\(\\omega\\) this is the static stretch \\(F_0/k\\); it peaks near \\(\\omega_0\\) (exactly at \\(\\sqrt{\\omega_0^2 - b^2/2m^2}\\)), where for light damping it is about \\(F_0/(b\\omega_0)\\); and it falls toward zero far above \\(\\omega_0\\). Less damping gives a taller, narrower peak: for light damping the full width of the peak where \\(A\\) is \\(1/\\sqrt2\\) of its largest value is about \\(b/m\\). In the demo the wall at the far end of the spring moves as \\((F_0/k)\\cos\\omega t\\), which pulls on the block exactly like the force \\(F_0\\cos\\omega t\\).":
  "A \\(\\omega\\) baja, esto es el estiramiento estático \\(F_0/k\\); tiene su pico cerca de \\(\\omega_0\\) (exactamente en \\(\\sqrt{\\omega_0^2 - b^2/2m^2}\\)), donde, con amortiguamiento ligero, vale aproximadamente \\(F_0/(b\\omega_0)\\); y cae hacia cero muy por encima de \\(\\omega_0\\). Menos amortiguamiento da un pico más alto y más angosto: con amortiguamiento ligero, el ancho completo del pico donde \\(A\\) es \\(1/\\sqrt2\\) de su valor máximo es aproximadamente \\(b/m\\). En la demo, la pared del extremo lejano del resorte se mueve como \\((F_0/k)\\cos\\omega t\\), lo que tira del bloque exactamente como la fuerza \\(F_0\\cos\\omega t\\).",
"<strong>Springs combined.</strong> Springs hung one below the other are <em>in series</em>: each one pulls on the next, so every spring in the line carries the same tension, and the total stretch is the sum of their stretches. Springs that hold the same block or bar side by side are <em>in parallel</em>: they stretch the same amount, and the load is shared among them. Any combination behaves like a single spring with some effective constant \\(k_{\\text{eff}}\\). A block of mass \\(m\\) hanging at rest stretches it by \\(mg/k_{\\text{eff}}\\), so the block’s position below the ceiling is":
  "<strong>Resortes combinados.</strong> Los resortes colgados uno debajo del otro están <em>en serie</em>: cada uno tira del siguiente, así que todos los resortes de la línea tienen la misma tensión, y el estiramiento total es la suma de sus estiramientos. Los resortes que sostienen el mismo bloque o barra lado a lado están <em>en paralelo</em>: se estiran lo mismo, y la carga se reparte entre ellos. Cualquier combinación se comporta como un solo resorte con alguna constante efectiva \\(k_{\\text{eff}}\\). Un bloque de masa \\(m\\) colgado en reposo la estira \\(mg/k_{\\text{eff}}\\), así que la posición del bloque bajo el techo es",
"\\[y = y_0 + \\frac{g}{k_{\\text{eff}}}\\,m,\\]":
  "\\[y = y_0 + \\frac{g}{k_{\\text{eff}}}\\,m,\\]",
"where \\(y_0\\) is where it would sit with the springs unstretched.":
  "donde \\(y_0\\) es donde quedaría con los resortes sin estirar.",
"Predict the change in \\(T\\) when \\(m\\) doubles.":
  "Predice el cambio en \\(T\\) cuando \\(m\\) se duplica.",
"What are the units of the slope of \\(T^2\\) against \\(m\\), and how do they give \\(k\\) in N/m?":
  "¿Cuáles son las unidades de la pendiente de \\(T^2\\) en función de \\(m\\), y cómo dan \\(k\\) en N/m?",
"Does the ideal period depend on release amplitude?":
  "¿Depende el periodo ideal de la amplitud al soltar?",
"A block of {#} kg on a spring of {#} N/m is driven with \\(F_0 = 0.50\\) N and \\(b = 0.632\\) kg/s. Find \\(\\omega_0\\), the static stretch \\(F_0/k\\), and the steady amplitude at \\(\\omega = 3.00\\) rad/s and at \\(\\omega = \\omega_0\\).":
  "Un bloque de {#} kg en un resorte de {#} N/m se fuerza con \\(F_0 = 0.50\\) N y \\(b = 0.632\\) kg/s. Encuentra \\(\\omega_0\\), el estiramiento estático \\(F_0/k\\) y la amplitud estable a \\(\\omega = 3.00\\) rad/s y a \\(\\omega = \\omega_0\\).",
"Two springs of constants \\(k_1\\) and \\(k_2\\) hold a load \\(F\\). Find \\(k_{\\text{eff}}\\) when they are in series (same tension, stretches add) and when they are in parallel (same stretch, forces add). Evaluate both for \\(k_1 = k_2 = 20.0\\) N/m.":
  "Dos resortes de constantes \\(k_1\\) y \\(k_2\\) sostienen una carga \\(F\\). Encuentra \\(k_{\\text{eff}}\\) cuando están en serie (misma tensión, los estiramientos se suman) y cuando están en paralelo (mismo estiramiento, las fuerzas se suman). Evalúa ambos para \\(k_1 = k_2 = 20.0\\) N/m.",
"Secure a real spring support and keep clear of falling masses. Do not stretch the spring beyond its elastic range or overload its attachment.":
  "Asegura bien el soporte de un resorte real y mantente lejos de las masas que caen. No estires el resorte más allá de su intervalo elástico ni sobrecargues su sujeción.",
"<strong>Mass scan.</strong> Keep the same unknown spring for the whole scan. Use at least five masses, such as {#}, {#}, {#}, {#} and {#} kg in the simulation. Displace the mass moderately and release it. Measure a stable period after each mass change.":
  "<strong>Barrido de masas.</strong> Usa el mismo resorte desconocido durante todo el barrido. Usa al menos cinco masas, como {#}, {#}, {#}, {#} y {#} kg en la simulación. Desplaza la masa moderadamente y suéltala. Mide un periodo estable después de cada cambio de masa.",
"<strong>Amplitude check.</strong> At one mass, repeat with three release amplitudes. Compare periods and explain any difference within resolution.":
  "<strong>Comprobación de la amplitud.</strong> Con una masa, repite con tres amplitudes al soltar. Compara los periodos y explica cualquier diferencia dentro de la resolución.",
"<strong>Damping.</strong> After the undamped scan, introduce modest damping and compare the oscillation period and amplitude decay. Keep these points out of the undamped spring constant fit.":
  "<strong>Amortiguamiento.</strong> Después del barrido sin amortiguamiento, agrega un amortiguamiento moderado y compara el periodo de oscilación y el decaimiento de la amplitud. Deja estos puntos fuera del ajuste de la constante del resorte sin amortiguamiento.",
"<strong>Reference circle.</strong> The reference circle is hidden while predictions and answers are hidden, so do this after you have revealed the spring constant and shown predictions again. Repeat one of your undamped runs, watch the reference circle beside it and check that the block is always at the shadow of the moving point. From that run’s measured period and release amplitude, predict the block’s speed as it passes equilibrium and as it passes half the amplitude.":
  "<strong>Círculo de referencia.</strong> El círculo de referencia está oculto mientras las predicciones y respuestas están ocultas, así que haz esto después de haber revelado la constante del resorte y vuelto a mostrar las predicciones. Repite una de tus corridas sin amortiguamiento, observa el círculo de referencia junto a ella y comprueba que el bloque siempre está en la sombra del punto que se mueve. Con el periodo medido y la amplitud al soltar de esa corrida, predice la rapidez del bloque al pasar por el equilibrio y al pasar por la mitad de la amplitud.",
"<strong>Driven oscillator.</strong> Use the Resonance setup as it opens: \\(m = 1.00\\) kg, \\(k = 40.0\\) N/m, \\(b = 0.632\\) kg/s and \\(F_0 = 0.50\\) N. Measure the steady amplitude at drive frequencies of {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} rad/s. After each change of \\(\\omega\\), wait until the amplitude stops changing (about {#} s of simulated time; speed the simulation up if you like) before you record it. Then make the damping stronger, \\(b = 2.09\\) kg/s, and measure again at {#}, {#}, {#}, {#}, {#}, {#} and {#} rad/s. Send each damping to the worksheet, then clear the readings, so each is its own series; driven readings go into the Driven oscillator table.":
  "<strong>Oscilador forzado.</strong> Usa la configuración Resonancia tal como se abre: \\(m = 1.00\\) kg, \\(k = 40.0\\) N/m, \\(b = 0.632\\) kg/s y \\(F_0 = 0.50\\) N. Mide la amplitud estable a frecuencias de forzamiento de {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} rad/s. Después de cada cambio de \\(\\omega\\), espera a que la amplitud deje de cambiar (unos {#} s de tiempo simulado; acelera la simulación si quieres) antes de registrarla. Luego haz más fuerte el amortiguamiento, \\(b = 2.09\\) kg/s, y mide de nuevo a {#}, {#}, {#}, {#}, {#}, {#} y {#} rad/s. Envía cada amortiguamiento a la hoja y luego borra las lecturas, para que cada uno sea su propia serie; las lecturas con forzamiento van a la tabla Oscilador forzado.",
"<strong>Springs in series and parallel.</strong> In the Sandbox, use three arrangements of springs with \\(k = 20.0\\) N/m: one spring, two in series and two in parallel. For each, hang blocks of {#}, {#}, {#} and {#} kg, let the block come to rest, and record the position of its top face below the ceiling. Use one copy of the Springs combined table for each arrangement.":
  "<strong>Resortes en serie y en paralelo.</strong> En la Caja de arena, usa tres arreglos de resortes con \\(k = 20.0\\) N/m: un resorte, dos en serie y dos en paralelo. Para cada uno, cuelga bloques de {#}, {#}, {#} y {#} kg, deja que el bloque quede en reposo y registra la posición de su cara superior bajo el techo. Usa una copia de la tabla Resortes combinados para cada arreglo.",
"<strong>Using the virtual apparatus.</strong> Investigate one unknown spring in free horizontal motion with no damping. Measure the period for masses {#}, {#}, {#}, {#} and {#} kg after several oscillations. Keep the same unknown spring throughout: choosing a new one changes the hidden spring constant. Use the automatically measured periods for the main \\(T^2\\) against \\(m\\) fit; the demo’s own graph instead uses separately timed stopwatch readings. If you use hand timing, count complete oscillations and keep those results distinct. Compare three release amplitudes at one mass, then investigate damping separately. Send each series to the worksheet before clearing, so each gets its own copy of the Data table. Reveal the spring constant only after completing your estimate.":
  "<strong>Uso del aparato virtual.</strong> Investiga un resorte desconocido en movimiento horizontal libre sin amortiguamiento. Mide el periodo para masas de {#}, {#}, {#}, {#} y {#} kg después de varias oscilaciones. Conserva el mismo resorte desconocido todo el tiempo: elegir uno nuevo cambia la constante oculta del resorte. Usa los periodos medidos automáticamente para el ajuste principal de \\(T^2\\) en función de \\(m\\); la gráfica propia de la demo usa en cambio lecturas tomadas por separado con el cronómetro. Si mides a mano, cuenta oscilaciones completas y mantén esos resultados aparte. Compara tres amplitudes al soltar con una masa, y luego investiga el amortiguamiento por separado. Envía cada serie a la hoja antes de borrar, para que cada una tenga su propia copia de la tabla de datos. Revela la constante del resorte solo después de completar tu estimación.",
"<span>C</span>Release amplitude (m)":
  "<span>C</span>Amplitud al soltar (m)",
"<span>D</span>Automatic measured \\(T\\) (s)":
  "<span>D</span>\\(T\\) medido automáticamente (s)",
"<span>E</span>\\(N\\), if timed":
  "<span>E</span>\\(N\\), si se cronometró",
"<span>F</span>Stopwatch \\(t\\) (s), if timed":
  "<span>F</span>Cronómetro \\(t\\) (s), si se cronometró",
"Release amplitude (m), row {#}":
  "Amplitud al soltar (m), fila {#}",
"Automatic measured T (s), row {#}":
  "T medido automáticamente (s), fila {#}",
"N, if timed, row {#}":
  "N, si se cronometró, fila {#}",
"Stopwatch t (s), if timed, row {#}":
  "Cronómetro t (s), si se cronometró, fila {#}",
"T^{#} (s²), row {#}":
  "T^{#} (s²), fila {#}",
"Use the same period method throughout the main fit. State whether the data came from the automatic readout or hand timing.":
  "Usa el mismo método para el periodo en todo el ajuste principal. Indica si los datos vinieron de la lectura automática o de la medición a mano.",
"<strong>Driven oscillator.</strong> \\(\\omega_0 = \\sqrt{k/m}\\). Work out the last two columns from the settings.":
  "<strong>Oscilador forzado.</strong> \\(\\omega_0 = \\sqrt{k/m}\\). Calcula las últimas dos columnas a partir de los ajustes.",
"<span>F</span>\\(\\omega\\) (rad/s)":
  "<span>F</span>\\(\\omega\\) (rad/s)",
"<span>G</span>Steady amplitude \\(A\\) (m)":
  "<span>G</span>Amplitud estable \\(A\\) (m)",
"<span>H</span>\\(\\omega/\\omega_0\\)":
  "<span>H</span>\\(\\omega/\\omega_0\\)",
"<span>I</span>Predicted \\(A\\) (m)":
  "<span>I</span>\\(A\\) predicha (m)",
"k (N/m), row {#}":
  "k (N/m), fila {#}",
"b (kg/s), row {#}":
  "b (kg/s), fila {#}",
"F_0 (N), row {#}":
  "F_0 (N), fila {#}",
"ω (rad/s), row {#}":
  "ω (rad/s), fila {#}",
"Steady amplitude A (m), row {#}":
  "Amplitud estable A (m), fila {#}",
"ω/ω_0, row {#}":
  "ω/ω_0, fila {#}",
"Predicted A (m), row {#}":
  "A predicha (m), fila {#}",
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
"Fit \\(T^2 = a + s m\\) and infer \\(k = 4\\pi^2/s\\). Inspect the intercept and residuals.":
  "Ajusta \\(T^2 = a + s m\\) e infiere \\(k = 4\\pi^2/s\\). Examina la ordenada al origen y los residuos.",
"Compare the inferred \\(k\\) with the revealed value. Include slope uncertainty and any mass uncertainty.":
  "Compara la \\(k\\) inferida con el valor revelado. Incluye la incertidumbre de la pendiente y cualquier incertidumbre de la masa.",
"Compare the amplitude runs. Explain why the ideal linear spring model predicts the same period.":
  "Compara las corridas con distintas amplitudes. Explica por qué el modelo ideal de resorte lineal predice el mismo periodo.",
"If you timed oscillations, compare \\(t/N\\) with the automatic readout; explain the different reading resolutions.":
  "Si cronometraste oscilaciones, compara \\(t/N\\) con la lectura automática; explica las distintas resoluciones de lectura.",
"For the run you watched with the reference circle, give your predicted speeds at equilibrium and at half the amplitude, and explain from the circle why the block moves fastest at equilibrium and stops at the ends.":
  "Para la corrida que observaste con el círculo de referencia, da tus rapideces predichas en el equilibrio y a la mitad de la amplitud, y explica a partir del círculo por qué el bloque se mueve más rápido en el equilibrio y se detiene en los extremos.",
"Plot the steady amplitude against \\(\\omega\\) for both dampings on one sketch or graph. Compare each measured amplitude with the predicted one, the frequency of the largest amplitude with \\(\\omega_0\\), and the heights and widths of the two peaks. How do the peak height and width depend on \\(b\\)?":
  "Grafica la amplitud estable en función de \\(\\omega\\) para ambos amortiguamientos en un mismo bosquejo o gráfica. Compara cada amplitud medida con la predicha, la frecuencia de la mayor amplitud con \\(\\omega_0\\), y las alturas y anchos de los dos picos. ¿Cómo dependen de \\(b\\) la altura y el ancho del pico?",
"For each arrangement, fit \\(y = y_0 + s\\,m\\) and find \\(k_{\\text{eff}} = g/s\\) (with \\(s\\) in m/kg). Compare each with your prediction from Before the lab question {#}, and explain what the intercept \\(y_0\\) is for each arrangement.":
  "Para cada arreglo, ajusta \\(y = y_0 + s\\,m\\) y encuentra \\(k_{\\text{eff}} = g/s\\) (con \\(s\\) en m/kg). Compara cada una con tu predicción de la pregunta {#} de Antes del laboratorio, y explica qué es la ordenada al origen \\(y_0\\) para cada arreglo.",
"For automatic periods use the displayed/CSV resolution and the stability of successive estimates. For hand timing, include start/stop uncertainty and divide elapsed time by the counted number of cycles. Do not treat a deterministic automatic readout as a noisy laboratory instrument. In a real spring, effective spring mass and nonlinearity can affect the intercept and amplitude dependence.":
  "Para los periodos automáticos usa la resolución mostrada/del CSV y la estabilidad de estimaciones sucesivas. Para la medición a mano, incluye la incertidumbre de arranque/paro y divide el tiempo transcurrido entre el número de ciclos contados. No trates una lectura automática determinista como un instrumento de laboratorio con ruido. En un resorte real, la masa efectiva del resorte y la no linealidad pueden afectar la ordenada al origen y la dependencia con la amplitud.",
"Why does increasing mass lengthen the period?":
  "¿Por qué aumentar la masa alarga el periodo?",
"At which points are kinetic and spring potential energy greatest?":
  "¿En qué puntos son máximas la energía cinética y la energía potencial del resorte?",
"Why is a straight line fit useful compared with calculating \\(k\\) from one mass?":
  "¿Por qué es útil un ajuste de recta en comparación con calcular \\(k\\) a partir de una sola masa?",
"Why should damped runs be excluded from the undamped period fit?":
  "¿Por qué deben excluirse las corridas amortiguadas del ajuste del periodo sin amortiguamiento?",
"Why does the driven amplitude approach \\(F_0/k\\) at low drive frequency and fall toward zero at high frequency? What limits the amplitude at resonance?":
  "¿Por qué la amplitud forzada se acerca a \\(F_0/k\\) a baja frecuencia de forzamiento y cae hacia cero a alta frecuencia? ¿Qué limita la amplitud en resonancia?",
"Give one example where resonance is useful and one where it must be avoided.":
  "Da un ejemplo donde la resonancia sea útil y uno donde deba evitarse.",
"A spring is cut in half. What is the spring constant of each half? Explain using springs in series.":
  "Un resorte se corta a la mitad. ¿Cuál es la constante de cada mitad? Explícalo usando resortes en serie.",
"Hanging a block in the Sandbox, how does the period of oscillation change when one spring is replaced by two of the same springs in series, and by two in parallel?":
  "Al colgar un bloque en la Caja de arena, ¿cómo cambia el periodo de oscilación cuando un resorte se sustituye por dos resortes iguales en serie, y por dos en paralelo?",
"Prelab answers, settings and CSV, the graph of \\(T^2\\) against \\(m\\) with residuals, \\(k\\) with uncertainty, the amplitude comparison, the Driven oscillator table with its sketch or graph, the Springs combined tables with their fits and \\(k_{\\text{eff}}\\) values, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, ajustes y CSV, la gráfica de \\(T^2\\) en función de \\(m\\) con residuos, \\(k\\) con su incertidumbre, la comparación de amplitudes, la tabla Oscilador forzado con su bosquejo o gráfica, las tablas Resortes combinados con sus ajustes y valores de \\(k_{\\text{eff}}\\), y las respuestas a las preguntas. Identifica los datos simulados.",
"Amplitude":
  "Amplitud",
"Total energy":
  "Energía total",
"Load held by the two springs":
  "Carga sostenida por los dos resortes",
"Amplitude of the equivalent driving force":
  "Amplitud de la fuerza impulsora equivalente",
"Number of periods timed":
  "Número de periodos cronometrados",
"Period":
  "Periodo",
"Amplitude of the wall's motion":
  "Amplitud del movimiento de la pared",
"Position of the shaken ceiling, A cos ωt":
  "Posición del techo agitado, A cos ωt",
"Intercept of the fit of T² against m":
  "Ordenada al origen del ajuste de T² en función de m",
"Damping constant of the oil":
  "Constante de amortiguamiento del aceite",
"Acceleration, d²x/dt²":
  "Aceleración, d²x/dt²",
"Natural frequency":
  "Frecuencia natural",
"Acceleration due to gravity":
  "Aceleración debida a la gravedad",
"Spring constant":
  "Constante del resorte",
"Stiffness of the left outer spring":
  "Rigidez del resorte exterior izquierdo",
"Stiffness of the right outer spring":
  "Rigidez del resorte exterior derecho",
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
"Phase constant":
  "Constante de fase",
"Slope of the fit of T² against m":
  "Pendiente del ajuste de T² en función de m",
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
"Springs":
  "Resortes"
});
