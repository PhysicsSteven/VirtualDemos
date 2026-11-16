/* ws/springs-driven in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/springs-driven', {
"Steady amplitude A (m)":
  "Amplitud estable A (m)",
"Predicted A (m)":
  "A predicha (m)",
"Driven Oscillator and Resonance | VirtualDemos":
  "Oscilador forzado y resonancia | VirtualDemos",
"Driven Oscillator and Resonance":
  "Oscilador forzado y resonancia",
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
"Measure how a driven oscillator responds near its natural frequency, and compare the height, position and width of the resonance peak with the prediction from the spring constant, the mass and the damping.":
  "Mide cómo responde un oscilador forzado cerca de su frecuencia natural, y compara la altura, la posición y el ancho del pico de resonancia con la predicción a partir de la constante del resorte, la masa y el amortiguamiento.",
"For a mass \\(m\\) on a spring of constant \\(k\\) the natural angular frequency is \\(\\omega_0 = \\sqrt{k/m}\\) (§{#}).":
  "Para una masa \\(m\\) en un resorte de constante \\(k\\), la frecuencia angular natural es \\(\\omega_0 = \\sqrt{k/m}\\) (§{#}).",
"<strong>Driven oscillations (§{#}).</strong> When a force \\(F_0\\cos\\omega t\\) drives a block with damping force \\(-bv\\), the motion settles, once the start up transient has died away (time constant \\(2m/b\\)), into oscillation at the drive frequency \\(\\omega\\) with amplitude":
  "<strong>Oscilaciones forzadas (§{#}).</strong> Cuando una fuerza \\(F_0\\cos\\omega t\\) impulsa un bloque con fuerza de amortiguamiento \\(-bv\\), el movimiento se estabiliza, una vez que se extingue el transitorio inicial (constante de tiempo \\(2m/b\\)), en una oscilación a la frecuencia de forzamiento \\(\\omega\\) con amplitud",
"\\[A(\\omega) = \\frac{F_0}{\\sqrt{(k - m\\omega^2)^2 + (b\\omega)^2}}.\\]":
  "\\[A(\\omega) = \\frac{F_0}{\\sqrt{(k - m\\omega^2)^2 + (b\\omega)^2}}.\\]",
"At low \\(\\omega\\) this is the static stretch \\(F_0/k\\); it peaks near \\(\\omega_0\\) (exactly at \\(\\sqrt{\\omega_0^2 - b^2/2m^2}\\)), where for light damping it is about \\(F_0/(b\\omega_0)\\); and it falls toward zero far above \\(\\omega_0\\). Less damping gives a taller, narrower peak: for light damping the full width of the peak where \\(A\\) is \\(1/\\sqrt2\\) of its largest value is about \\(b/m\\). In the demo the wall at the far end of the spring moves as \\((F_0/k)\\cos\\omega t\\), which pulls on the block exactly like the force \\(F_0\\cos\\omega t\\).":
  "A \\(\\omega\\) baja, esto es el estiramiento estático \\(F_0/k\\); tiene su pico cerca de \\(\\omega_0\\) (exactamente en \\(\\sqrt{\\omega_0^2 - b^2/2m^2}\\)), donde, con amortiguamiento ligero, vale aproximadamente \\(F_0/(b\\omega_0)\\); y cae hacia cero muy por encima de \\(\\omega_0\\). Menos amortiguamiento da un pico más alto y más angosto: con amortiguamiento ligero, el ancho completo del pico donde \\(A\\) es \\(1/\\sqrt2\\) de su valor máximo es aproximadamente \\(b/m\\). En la demo, la pared del extremo lejano del resorte se mueve como \\((F_0/k)\\cos\\omega t\\), lo que tira del bloque exactamente como la fuerza \\(F_0\\cos\\omega t\\).",
"A block of {#} kg on a spring of {#} N/m is driven with \\(F_0 = 0.50\\) N and \\(b = 0.632\\) kg/s. Find \\(\\omega_0\\), the static stretch \\(F_0/k\\), and the steady amplitude at \\(\\omega = 3.00\\) rad/s and at \\(\\omega = \\omega_0\\).":
  "Un bloque de {#} kg en un resorte de {#} N/m se fuerza con \\(F_0 = 0.50\\) N y \\(b = 0.632\\) kg/s. Encuentra \\(\\omega_0\\), el estiramiento estático \\(F_0/k\\) y la amplitud estable a \\(\\omega = 3.00\\) rad/s y a \\(\\omega = \\omega_0\\).",
"Secure a real spring support and keep clear of falling masses. Do not stretch the spring beyond its elastic range or overload its attachment.":
  "Asegura bien el soporte de un resorte real y mantente lejos de las masas que caen. No estires el resorte más allá de su intervalo elástico ni sobrecargues su sujeción.",
"<strong>Driven oscillator.</strong> Press the <strong>Resonance</strong> setup and use it as it opens: \\(m = 1.00\\) kg, \\(k = 40.0\\) N/m, \\(b = 0.632\\) kg/s and \\(F_0 = 0.50\\) N. Set the <strong>Drive frequency ω</strong> slider ({#} rad/s steps; the arrow keys move it one step) to {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} rad/s in turn. After each change of \\(\\omega\\), wait until the readout <strong>Measured, last cycle</strong> stops changing (about {#} s of simulated time; raise the <strong>Playback rate</strong> under Time and plots if you like), then press <strong>Record reading</strong>; it stores that amplitude. Press <strong>Export to worksheet</strong>; the readings go into the Data table.":
  "<strong>Oscilador forzado.</strong> Pulsa la configuración <strong>Resonancia</strong> y úsala como se abre: \\(m = 1.00\\) kg, \\(k = 40.0\\) N/m, \\(b = 0.632\\) kg/s y \\(F_0 = 0.50\\) N. Fija el control <strong>Frecuencia de la fuerza impulsora ω</strong> (pasos de {#} rad/s; las teclas de flecha lo mueven un paso) en {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} rad/s en orden. Después de cada cambio de \\(\\omega\\), espera hasta que la lectura <strong>Medida, último ciclo</strong> deje de cambiar (unos {#} s de tiempo simulado; sube la <strong>Velocidad de reproducción</strong> en Tiempo y gráficas si quieres), y luego pulsa <strong>Registrar lectura</strong>; guarda esa amplitud. Pulsa <strong>Exportar a la hoja</strong>; las lecturas van a la tabla de datos.",
"\\(\\omega_0 = \\sqrt{k/m}\\). Work out the last two columns from the settings, for the readings at {#}, {#} and {#} rad/s only.":
  "\\(\\omega_0 = \\sqrt{k/m}\\). Calcula las dos últimas columnas a partir de los ajustes, solo para las lecturas a {#}, {#} y {#} rad/s.",
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
"Plot the steady amplitude against \\(\\omega\\) on a sketch or graph. Compare the measured amplitude with the predicted one at the three readings you worked out, the frequency of the largest amplitude with \\(\\omega_0\\), and the height and width of the peak with \\(F_0/(b\\omega_0)\\) and \\(b/m\\).":
  "Grafica la amplitud estacionaria en función de \\(\\omega\\) en un bosquejo o en una gráfica. Compara la amplitud medida con la predicha en las tres lecturas que calculaste, la frecuencia de la mayor amplitud con \\(\\omega_0\\), y la altura y el ancho del pico con \\(F_0/(b\\omega_0)\\) y \\(b/m\\).",
"The readout stores each amplitude to the {#} m ({#} cm) the demo displays, and the settings \\(m\\), \\(k\\), \\(b\\) and \\(F_0\\) are exact, so a predicted amplitude should match your reading to that rounding once the start up transient has died away (its time constant is \\(2m/b = 3.2\\) s). A reading taken too soon is off by what is left of the transient; say which of your readings you trust least. The peak height and width rest on a few readings near \\(\\omega_0\\), where the amplitude changes fastest with \\(\\omega\\), so say how the {#} rad/s steps of the slider limit them. A real oscillator adds noise, a drive that is not exactly sinusoidal, and a damping force that is not exactly proportional to the speed.":
  "La lectura guarda cada amplitud con los {#} m ({#} cm) que muestra la demo, y los ajustes \\(m\\), \\(k\\), \\(b\\) y \\(F_0\\) son exactos, así que una amplitud predicha debe coincidir con tu lectura dentro de ese redondeo una vez que el transitorio de arranque se haya extinguido (su constante de tiempo es \\(2m/b = 3.2\\) s). Una lectura tomada demasiado pronto difiere en lo que queda del transitorio; di cuál de tus lecturas te inspira menos confianza. La altura y el ancho del pico dependen de unas cuantas lecturas cerca de \\(\\omega_0\\), donde la amplitud cambia más rápido con \\(\\omega\\), así que di cómo los pasos de {#} rad/s del control los limitan. Un oscilador real agrega ruido, una fuerza impulsora que no es exactamente sinusoidal, y una fuerza de amortiguamiento que no es exactamente proporcional a la rapidez.",
"Why does the driven amplitude approach \\(F_0/k\\) at low drive frequency and fall toward zero at high frequency? What limits the amplitude at resonance?":
  "¿Por qué la amplitud forzada se acerca a \\(F_0/k\\) a baja frecuencia de forzamiento y cae hacia cero a alta frecuencia? ¿Qué limita la amplitud en resonancia?",
"Give one example where resonance is useful and one where it must be avoided.":
  "Da un ejemplo donde la resonancia sea útil y uno donde deba evitarse.",
"Prelab answer, the Data table, the sketch or graph of \\(A\\) against \\(\\omega\\), the comparison of the peak with the prediction, and answers to the questions. Identify simulated data.":
  "Respuesta del prelaboratorio, la tabla de datos, el esquema o la gráfica de \\(A\\) contra \\(\\omega\\), la comparación del pico con la predicción, y las respuestas a las preguntas. Identifica los datos simulados.",
"Amplitude":
  "Amplitud",
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
"Damping constant of the oil":
  "Constante de amortiguamiento del aceite",
"Natural frequency":
  "Frecuencia natural",
"Spring constant":
  "Constante del resorte",
"Stiffness of the left outer spring":
  "Rigidez del resorte exterior izquierdo",
"Stiffness of the right outer spring":
  "Rigidez del resorte exterior derecho",
"Stiffness of the middle (coupling) spring":
  "Rigidez del resorte del medio (de acoplamiento)",
"Mass of the block":
  "Masa del bloque",
"Drive angular frequency":
  "Frecuencia angular de forzamiento",
"Natural angular frequency":
  "Frecuencia angular natural",
"Velocity of the block":
  "Velocidad del bloque",
"Damping ratio":
  "Cociente de amortiguamiento",
"Springs":
  "Resortes",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>"
});
