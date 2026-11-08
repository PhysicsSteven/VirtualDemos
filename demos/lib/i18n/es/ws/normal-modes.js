/* ws/normal-modes in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/normal-modes', {
"Rig":
  "Montaje",
"Mode n":
  "Modo n",
"Oscillations N":
  "Oscilaciones N",
"Period T (s)":
  "Periodo T (s)",
"Measured f (Hz)":
  "f medida (Hz)",
"sin(nπ/{#})":
  "sin(nπ/{#})",
"Predicted f_n (Hz)":
  "f_n predicha (Hz)",
"Grid":
  "Cuadrícula",
"Mode (p, q)":
  "Modo (p, q)",
"Along":
  "A lo largo de",
"Predicted f_pq (Hz)":
  "f_pq predicha (Hz)",
"Normal Modes of a Chain and a Grid | VirtualDemos":
  "Modos normales de una cadena y una cuadrícula | VirtualDemos",
"Normal Modes of a Chain and a Grid":
  "Modos normales de una cadena y una cuadrícula",
"<strong>Setups in the demo:</strong> this worksheet uses the Sandbox of the Springs and Oscillations demo. Between two walls, on a level track: One block; Two blocks; Side by side; Chain of ten; Empty track. On an air table, in a plane: {#} by {#} grid; {#} by {#} grid (the number of pucks along each side can be set from {#} to {#}). The link above opens the Sandbox on Chain of ten.":
  "<strong>Configuraciones en la demo:</strong> esta hoja de trabajo usa el Arenero de la demo Resortes y oscilaciones. Entre dos paredes, sobre un riel horizontal: Un bloque; Dos bloques; Lado a lado; Cadena de diez; Riel vacío. Sobre una mesa de aire, en un plano: cuadrícula de {#} por {#}; cuadrícula de {#} por {#} (el número de discos en cada lado se puede fijar de {#} a {#}). El enlace de arriba abre el Arenero en Cadena de diez.",
"Chain of ten: ten {#} g blocks and eleven {#} N/m springs between two walls, the same as ten beads on a stretched string. The blocks slide on the track without friction.":
  "Cadena de diez: diez bloques de {#} g y once resortes de {#} N/m entre dos paredes, lo mismo que diez cuentas en una cuerda tensa. Los bloques se deslizan sobre el riel sin fricción.",
"The lower pane shows Normal modes: for each mode its frequency, its shape (how far and which way each block moves) and how much of the motion is in it now. Clicking a mode, or pressing its number ({#} for mode {#}) with the pane in focus, starts the chain in that mode alone.":
  "El panel inferior muestra los Modos normales: para cada modo su frecuencia, su forma (cuánto y hacia dónde se mueve cada bloque) y qué parte del movimiento está en él ahora. Hacer clic en un modo, o pulsar su número ({#} para el modo {#}) con el panel enfocado, pone la cadena en ese modo solo.",
"{#} by {#} grid: nine {#} g pucks on an air table, each tied to its neighbors and to the frame by {#} N/m springs stretched to {#} cm. The motion along x and the motion along y go on separately, so the pane shows nine modes along x and nine along y, each labeled \\((p, q)\\). Clicking a square starts that mode alone. A puck can also be dragged and let go, which starts a mix.":
  "Cuadrícula de {#} por {#}: nueve discos de {#} g sobre una mesa de aire, cada uno unido a sus vecinos y al marco con resortes de {#} N/m estirados a {#} cm. El movimiento a lo largo de x y el movimiento a lo largo de y ocurren por separado, así que el panel muestra nueve modos a lo largo de x y nueve a lo largo de y, cada uno marcado \\((p, q)\\). Hacer clic en un cuadro inicia ese modo solo. También se puede arrastrar un disco y soltarlo, lo que inicia una mezcla.",
"Press Stopwatch (or W on the drawing) as a block or puck passes a mark you choose, count \\(N\\) full oscillations, and press it again as it passes the same mark going the same way. The stopwatch runs on simulation time and reads to {#} s. Starting a mode sets it back to {#} s. The slower playback rates make fast modes easier to time.":
  "Pulsa Cronómetro (o W en el dibujo) cuando un bloque o un disco pase por una marca que elijas, cuenta \\(N\\) oscilaciones completas, y vuelve a pulsarlo cuando pase por la misma marca en el mismo sentido. El cronómetro corre con el tiempo de la simulación y lee con precisión de {#} s. Iniciar un modo lo regresa a {#} s. Las velocidades de reproducción más lentas facilitan medir los modos rápidos.",
"Record reading stores the rig, the mode you started (or “a mix” after you pulled a block yourself), your \\(N\\) and the stopwatch time \\(t\\), as displayed; \\(T = t/N\\). Export to worksheet sends the readings here.":
  "Registrar lectura guarda el montaje, el modo que iniciaste (o “una mezcla” después de que jalaste un bloque tú mismo), tu \\(N\\) y el tiempo del cronómetro \\(t\\), tal como se muestran; \\(T = t/N\\). Exportar a la hoja envía las lecturas aquí.",
"Blind: hide the mode frequencies hides each mode’s frequency in the lower pane, in the readouts and in what is read aloud. The shapes, the shares of the motion and the stopwatch stay.":
  "A ciegas: ocultar las frecuencias de los modos oculta la frecuencia de cada modo en el panel inferior, en las lecturas y en lo que se lee en voz alta. Las formas, las fracciones del movimiento y el cronómetro se quedan.",
"The motion is the exact solution of the linear equations of motion. On the air table the springs are taken as stretched so far past their natural length that it counts as zero; then each pulls with exactly \\(k\\) times the vector from one end to the other, so the x and y motions do not mix for any swing.":
  "El movimiento es la solución exacta de las ecuaciones de movimiento lineales. En la mesa de aire los resortes se consideran tan estirados más allá de su longitud natural que esta cuenta como cero; así cada uno jala con exactamente \\(k\\) veces el vector de un extremo al otro, de modo que los movimientos en x y en y no se mezclan para ninguna oscilación.",
"Measure the frequencies of the normal modes of a chain of ten blocks and of a square grid of pucks, compare them with the exact formulas, and see how a chain of beads differs from a smooth string.":
  "Mide las frecuencias de los modos normales de una cadena de diez bloques y de una cuadrícula cuadrada de discos, compáralas con las fórmulas exactas, y observa en qué se diferencia una cadena de cuentas de una cuerda continua.",
"<strong>Normal modes (§{#}).</strong> A system of coupled oscillators has special motions, its normal modes, in which every part moves at one frequency, all in step: each part reaches its largest displacement at the same moment. A system with \\(N\\) masses moving along one line has \\(N\\) normal modes. Any motion is a sum of normal modes, each going on at its own frequency, so a general motion does not repeat simply.":
  "<strong>Modos normales (§{#}).</strong> Un sistema de osciladores acoplados tiene movimientos especiales, sus modos normales, en los que cada parte se mueve con una sola frecuencia, todas en fase: cada parte alcanza su desplazamiento máximo en el mismo instante. Un sistema con \\(N\\) masas que se mueven a lo largo de una línea tiene \\(N\\) modos normales. Cualquier movimiento es una suma de modos normales, cada uno con su propia frecuencia, así que un movimiento general no se repite de manera sencilla.",
"<strong>A chain of beads.</strong> \\(N\\) equal blocks of mass \\(m\\) joined by \\(N + 1\\) equal springs of constant \\(k\\) between two fixed walls. Block \\(j\\) (\\(j = 1, \\dots, N\\)) moves in mode \\(n\\) (\\(n = 1, \\dots, N\\)) as":
  "<strong>Una cadena de cuentas.</strong> \\(N\\) bloques iguales de masa \\(m\\) unidos por \\(N + 1\\) resortes iguales de constante \\(k\\) entre dos paredes fijas. El bloque \\(j\\) (\\(j = 1, \\dots, N\\)) se mueve en el modo \\(n\\) (\\(n = 1, \\dots, N\\)) como",
"\\[x_j = A\\sin\\frac{jn\\pi}{N+1}\\cos(\\omega_n t),\\qquad \\omega_n = 2\\sqrt{\\frac{k}{m}}\\,\\sin\\frac{n\\pi}{2(N+1)}.\\]":
  "\\[x_j = A\\sin\\frac{jn\\pi}{N+1}\\cos(\\omega_n t),\\qquad \\omega_n = 2\\sqrt{\\frac{k}{m}}\\,\\sin\\frac{n\\pi}{2(N+1)}.\\]",
"So with \\(f_n = \\omega_n/2\\pi\\), for the chain of ten (\\(N = 10\\)),":
  "Así, con \\(f_n = \\omega_n/2\\pi\\), para la cadena de diez (\\(N = 10\\)),",
"\\[f_n = \\frac{1}{\\pi}\\sqrt{\\frac{k}{m}}\\,\\sin\\frac{n\\pi}{22}.\\]":
  "\\[f_n = \\frac{1}{\\pi}\\sqrt{\\frac{k}{m}}\\,\\sin\\frac{n\\pi}{22}.\\]",
"The shape is a sine wave sampled at the blocks, with \\(n\\) half wavelengths between the walls: the wavelength is \\(22/n\\) block spacings. For small \\(n\\) the sine is close to its angle, \\(f_n \\approx n f_1\\), as on a smooth string (§{#}). For large \\(n\\) the frequencies crowd together below the largest possible frequency \\((1/\\pi)\\sqrt{k/m}\\), reached when neighboring blocks move exactly opposite. A wave whose speed \\(v = \\lambda f\\) depends on its wavelength is called <em>dispersive</em>.":
  "La forma es una onda senoidal muestreada en los bloques, con \\(n\\) medias longitudes de onda entre las paredes: la longitud de onda es \\(22/n\\) separaciones entre bloques. Para \\(n\\) pequeña el seno es cercano a su ángulo, \\(f_n \\approx n f_1\\), como en una cuerda continua (§{#}). Para \\(n\\) grande las frecuencias se amontonan por debajo de la máxima frecuencia posible \\((1/\\pi)\\sqrt{k/m}\\), que se alcanza cuando los bloques vecinos se mueven exactamente en sentidos opuestos. Una onda cuya rapidez \\(v = \\lambda f\\) depende de su longitud de onda se llama <em>dispersiva</em>.",
"<strong>A grid of pucks.</strong> \\(N \\times N\\) equal pucks, each tied to its four neighbors and the pucks at the edge to a square frame. Along each axis the modes are numbered by two whole numbers \\(p\\) and \\(q\\) from {#} to \\(N\\), the number of half waves across and up the grid, and":
  "<strong>Una cuadrícula de discos.</strong> \\(N \\times N\\) discos iguales, cada uno unido a sus cuatro vecinos, y los del borde a un marco cuadrado. A lo largo de cada eje los modos se numeran con dos números enteros \\(p\\) y \\(q\\) de {#} a \\(N\\), el número de medias ondas a lo ancho y a lo alto de la cuadrícula, y",
"\\[f_{pq} = \\frac{1}{\\pi}\\sqrt{\\frac{k}{m}}\\,\\sqrt{s_p^2 + s_q^2},\\qquad s_p = \\sin\\frac{p\\pi}{2(N+1)}.\\]":
  "\\[f_{pq} = \\frac{1}{\\pi}\\sqrt{\\frac{k}{m}}\\,\\sqrt{s_p^2 + s_q^2},\\qquad s_p = \\sin\\frac{p\\pi}{2(N+1)}.\\]",
"For the {#} by {#} grid, \\(s_p = \\sin(p\\pi/8)\\). Two different modes with the same frequency are called <em>degenerate</em>.":
  "Para la cuadrícula de {#} por {#}, \\(s_p = \\sin(p\\pi/8)\\). Dos modos distintos con la misma frecuencia se llaman <em>degenerados</em>.",
"For the chain of ten with \\(k = 20.0\\) N/m and \\(m = 0.100\\) kg, find \\(f_1\\) and \\(f_{10}\\). What would \\(f_{10}\\) be if the frequencies rose as \\(n f_1\\)?":
  "Para la cadena de diez con \\(k = 20.0\\) N/m y \\(m = 0.100\\) kg, encuentra \\(f_1\\) y \\(f_{10}\\). ¿Cuánto valdría \\(f_{10}\\) si las frecuencias crecieran como \\(n f_1\\)?",
"For one block between two walls (\\(N = 1\\)), show that the formula gives \\(\\omega^2 = 2k/m\\), the same as two springs of constant \\(k\\) acting on the block together.":
  "Para un bloque entre dos paredes (\\(N = 1\\)), muestra que la fórmula da \\(\\omega^2 = 2k/m\\), lo mismo que dos resortes de constante \\(k\\) actuando juntos sobre el bloque.",
"Show that the shape for \\(n = 11\\) in a chain of ten has every block standing still, and that \\(n = 12\\) gives the shape of mode {#} upside down. Why does the chain have only ten modes?":
  "Muestra que la forma para \\(n = 11\\) en una cadena de diez tiene a todos los bloques quietos, y que \\(n = 12\\) da la forma del modo {#} invertida. ¿Por qué la cadena tiene solo diez modos?",
"For the {#} by {#} grid, show that modes \\((1, 3)\\), \\((3, 1)\\) and \\((2, 2)\\) have the same frequency, and find it for \\(k = 20.0\\) N/m and \\(m = 0.100\\) kg.":
  "Para la cuadrícula de {#} por {#}, muestra que los modos \\((1, 3)\\), \\((3, 1)\\) y \\((2, 2)\\) tienen la misma frecuencia, y encuéntrala para \\(k = 20.0\\) N/m y \\(m = 0.100\\) kg.",
"No physical hazards in the simulation. In a real air table or air track, keep fingers clear of moving carts and do not block the air supply holes.":
  "No hay peligros físicos en la simulación. En una mesa de aire o un riel de aire reales, mantén los dedos lejos de los carritos en movimiento y no tapes los orificios del suministro de aire.",
"<strong>Chain of ten.</strong> Open the Sandbox on Chain of ten with the springs at {#} N/m and the blocks at {#} g, as it opens. Hide the mode frequencies. Start mode {#} alone, choose one block that swings well, and time at least {#} full oscillations of it; capture the reading. Repeat for each mode up to {#}. From mode {#} on each oscillation lasts under {#} s, so time {#} oscillations and slow the playback down. Send the readings to the worksheet before clearing.":
  "<strong>Cadena de diez.</strong> Abre el Arenero en Cadena de diez con los resortes a {#} N/m y los bloques a {#} g, como se abre. Oculta las frecuencias de los modos. Inicia el modo {#} solo, elige un bloque que oscile bien, y mide al menos {#} oscilaciones completas de él; captura la lectura. Repite para cada modo hasta el {#}. A partir del modo {#} cada oscilación dura menos de {#} s, así que mide {#} oscilaciones y reduce la velocidad de reproducción. Envía las lecturas a la hoja de trabajo antes de borrar.",
"<strong>A mix.</strong> Pull one block aside and let it go. Watch the shares in the lower pane and the graph, and describe the motion. You need not record it.":
  "<strong>Una mezcla.</strong> Jala un bloque hacia un lado y suéltalo. Observa las fracciones en el panel inferior y la gráfica, y describe el movimiento. No necesitas registrarlo.",
"<strong>Grid of pucks.</strong> Open the {#} by {#} grid and hide the mode frequencies. Start each of the nine modes along x alone, from \\((1, 1)\\) to \\((3, 3)\\), and time at least {#} full oscillations of one puck that moves well in that mode; capture each. Then start \\((1, 2)\\) along y and time it the same way. Send the grid readings to the worksheet: they go to the Grid of pucks table.":
  "<strong>Cuadrícula de discos.</strong> Abre la cuadrícula de {#} por {#} y oculta las frecuencias de los modos. Inicia solo cada uno de los nueve modos a lo largo de x, de \\((1, 1)\\) a \\((3, 3)\\), y mide al menos {#} oscilaciones completas de un disco que se mueva bien en ese modo; captura cada una. Luego inicia \\((1, 2)\\) a lo largo de y y mídelo de la misma manera. Envía las lecturas de la cuadrícula a la hoja de trabajo: van a la tabla Cuadrícula de discos.",
"<strong>Using the virtual apparatus.</strong> A puck at the center does not move in modes with an even \\(p\\) or \\(q\\), and in each chain mode some blocks swing far less than others: pick one that swings well. Starting a mode resets the stopwatch, so start the mode first. Turn Blind off at the end to check your frequencies.":
  "<strong>Uso del aparato virtual.</strong> Un disco en el centro no se mueve en los modos con \\(p\\) o \\(q\\) par, y en cada modo de la cadena algunos bloques oscilan mucho menos que otros: elige uno que oscile bien. Iniciar un modo reinicia el cronómetro, así que inicia primero el modo. Desactiva A ciegas al final para comprobar tus frecuencias.",
"<strong>Chain of ten.</strong> \\(f = 1/T\\). Work out the last three columns yourself.":
  "<strong>Cadena de diez.</strong> \\(f = 1/T\\). Calcula tú mismo las tres últimas columnas.",
"<span>B</span>Rig":
  "<span>B</span>Montaje",
"<span>C</span>Mode \\(n\\)":
  "<span>C</span>Modo \\(n\\)",
"<span>D</span>Oscillations \\(N\\)":
  "<span>D</span>Oscilaciones \\(N\\)",
"<span>E</span>Time \\(t\\) (s)":
  "<span>E</span>Tiempo \\(t\\) (s)",
"<span>F</span>Period \\(T\\) (s)":
  "<span>F</span>Periodo \\(T\\) (s)",
"<span>G</span>Measured \\(f\\) (Hz)":
  "<span>G</span>\\(f\\) medida (Hz)",
"<span>H</span>\\(\\sin(n\\pi/22)\\)":
  "<span>H</span>\\(\\sin(n\\pi/22)\\)",
"<span>I</span>Predicted \\(f_n\\) (Hz)":
  "<span>I</span>\\(f_n\\) predicha (Hz)",
"Rig, row {#}":
  "Montaje, fila {#}",
"Mode n, row {#}":
  "Modo n, fila {#}",
"Oscillations N, row {#}":
  "Oscilaciones N, fila {#}",
"Period T (s), row {#}":
  "Periodo T (s), fila {#}",
"Measured f (Hz), row {#}":
  "f medida (Hz), fila {#}",
"sin(nπ/{#}), row {#}":
  "sin(nπ/{#}), fila {#}",
"Predicted f_n (Hz), row {#}":
  "f_n predicha (Hz), fila {#}",
"<strong>Grid of pucks.</strong> \\(s_p = \\sin(p\\pi/8)\\) and \\(s_q = \\sin(q\\pi/8)\\) for the {#} by {#} grid.":
  "<strong>Cuadrícula de discos.</strong> \\(s_p = \\sin(p\\pi/8)\\) y \\(s_q = \\sin(q\\pi/8)\\) para la cuadrícula de {#} por {#}.",
"<span>B</span>Grid":
  "<span>B</span>Cuadrícula",
"<span>C</span>Mode \\((p, q)\\)":
  "<span>C</span>Modo \\((p, q)\\)",
"<span>D</span>Along":
  "<span>D</span>A lo largo de",
"<span>E</span>Oscillations \\(N\\)":
  "<span>E</span>Oscilaciones \\(N\\)",
"<span>F</span>Time \\(t\\) (s)":
  "<span>F</span>Tiempo \\(t\\) (s)",
"<span>G</span>Period \\(T\\) (s)":
  "<span>G</span>Periodo \\(T\\) (s)",
"<span>H</span>Measured \\(f\\) (Hz)":
  "<span>H</span>\\(f\\) medida (Hz)",
"<span>I</span>\\(\\sqrt{s_p^2 + s_q^2}\\)":
  "<span>I</span>\\(\\sqrt{s_p^2 + s_q^2}\\)",
"<span>J</span>Predicted \\(f_{pq}\\) (Hz)":
  "<span>J</span>\\(f_{pq}\\) predicha (Hz)",
"Grid, row {#}":
  "Cuadrícula, fila {#}",
"Mode (p, q), row {#}":
  "Modo (p, q), fila {#}",
"Along, row {#}":
  "A lo largo de, fila {#}",
"√s_p^{#} + s_q^{#}, row {#}":
  "√s_p^{#} + s_q^{#}, fila {#}",
"Predicted f_pq (Hz), row {#}":
  "f_pq predicha (Hz), fila {#}",
"Graph the measured \\(f\\) against \\(\\sin(n\\pi/22)\\) for the chain, with a free intercept. Is it a straight line through the origin? From the slope, which should be \\((1/\\pi)\\sqrt{k/m}\\), find \\(k/m\\) and compare it with the settings.":
  "Grafica la \\(f\\) medida en función de \\(\\sin(n\\pi/22)\\) para la cadena, con ordenada al origen libre. ¿Es una recta que pasa por el origen? Con la pendiente, que debería ser \\((1/\\pi)\\sqrt{k/m}\\), encuentra \\(k/m\\) y compárala con los ajustes.",
"Graph the measured \\(f\\) against \\(n\\) and draw on it the line \\(f = n f_1\\) through your measured \\(f_1\\). At which \\(n\\) do your points fall {#}% below the line? Explain why from the shapes of the modes.":
  "Grafica la \\(f\\) medida en función de \\(n\\) y dibuja la recta \\(f = n f_1\\) que pasa por tu \\(f_1\\) medida. ¿En qué \\(n\\) quedan tus puntos {#}% por debajo de la recta? Explica por qué a partir de las formas de los modos.",
"For each mode find the wave speed in block spacings per second, \\(v_n = (22/n) f_n\\). How does it change with \\(n\\)? Explain why the chain is dispersive while an ideal smooth string is not.":
  "Para cada modo encuentra la rapidez de la onda en separaciones entre bloques por segundo, \\(v_n = (22/n) f_n\\). ¿Cómo cambia con \\(n\\)? Explica por qué la cadena es dispersiva mientras que una cuerda continua ideal no lo es.",
"Compare your \\(f_{10}\\) with the largest possible frequency \\((1/\\pi)\\sqrt{k/m}\\). Describe how neighboring blocks move in mode {#}.":
  "Compara tu \\(f_{10}\\) con la máxima frecuencia posible \\((1/\\pi)\\sqrt{k/m}\\). Describe cómo se mueven los bloques vecinos en el modo {#}.",
"Graph the measured \\(f\\) against \\(\\sqrt{s_p^2 + s_q^2}\\) for the grid. Compare the slope with the chain’s slope in Analysis {#} and explain why they should agree.":
  "Grafica la \\(f\\) medida en función de \\(\\sqrt{s_p^2 + s_q^2}\\) para la cuadrícula. Compara la pendiente con la de la cadena en el Análisis {#} y explica por qué deberían coincidir.",
"Which of your grid modes have the same frequency within your uncertainty? Separate those that share it because the grid looks the same turned through {#}° from those that share it for another reason. Compare \\((1, 2)\\) along x with \\((1, 2)\\) along y.":
  "¿Cuáles de tus modos de la cuadrícula tienen la misma frecuencia dentro de tu incertidumbre? Separa los que la comparten porque la cuadrícula se ve igual girada {#}° de los que la comparten por otra razón. Compara \\((1, 2)\\) a lo largo de x con \\((1, 2)\\) a lo largo de y.",
"Each press of the stopwatch can be early or late by your reaction time, about {#} to {#} s at real time and less in slow motion, so the time of \\(N\\) oscillations has an uncertainty of about \\(\\sqrt2\\) times that if the two errors are independent, and \\(T\\) and \\(f\\) have a fractional uncertainty smaller by the factor \\(N\\). The display truncates \\(t\\) to {#} s. State the uncertainty of each measured \\(f\\) and use it in judging Analysis {#} and {#}. The model has no friction and ideal springs, so the scatter comes from your timing.":
  "Cada pulsación del cronómetro puede adelantarse o atrasarse por tu tiempo de reacción, unos {#} a {#} s en tiempo real y menos en cámara lenta, así que el tiempo de \\(N\\) oscilaciones tiene una incertidumbre de unas \\(\\sqrt2\\) veces eso si los dos errores son independientes, y \\(T\\) y \\(f\\) tienen una incertidumbre relativa menor por el factor \\(N\\). La pantalla trunca \\(t\\) a {#} s. Indica la incertidumbre de cada \\(f\\) medida y úsala al juzgar los Análisis {#} y {#}. El modelo no tiene fricción y los resortes son ideales, así que la dispersión viene de tu medición del tiempo.",
"Why does the motion after you pull one block and let go not repeat itself, while a single mode does?":
  "¿Por qué el movimiento después de jalar un bloque y soltarlo no se repite, mientras que un solo modo sí?",
"Why does mode \\(n\\) of the chain look like a standing wave on a string, but with a frequency below \\(n f_1\\)?":
  "¿Por qué el modo \\(n\\) de la cadena se parece a una onda estacionaria en una cuerda, pero con una frecuencia menor que \\(n f_1\\)?",
"As the number of blocks grows with the total mass and the total length of spring kept the same, what happens to the low frequencies? What does the chain become?":
  "Si el número de bloques crece manteniendo iguales la masa total y la longitud total de resorte, ¿qué pasa con las frecuencias bajas? ¿En qué se convierte la cadena?",
"On the air table, why can the x motion and the y motion be treated as two separate problems?":
  "En la mesa de aire, ¿por qué el movimiento en x y el movimiento en y se pueden tratar como dos problemas separados?",
"Two degenerate modes started together make a pattern that moves across the grid or turns. Is that pattern itself a normal mode? Explain.":
  "Dos modos degenerados iniciados juntos forman un patrón que se desplaza por la cuadrícula o gira. ¿Es ese patrón en sí un modo normal? Explica.",
"Prelab answers, both tables with your uncertainties, the graphs of Analysis {#}, {#} and {#} with their fits, your \\(k/m\\) values, the list of degenerate modes, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ambas tablas con tus incertidumbres, las gráficas de los Análisis {#}, {#} y {#} con sus ajustes, tus valores de \\(k/m\\), la lista de modos degenerados y las respuestas a las preguntas. Identifica los datos simulados.",
"Number of full oscillations timed":
  "Número de oscilaciones completas medidas",
"Amplitude of the mode":
  "Amplitud del modo",
"Number of blocks in the chain, or of pucks along each side of the grid":
  "Número de bloques de la cadena, o de discos en cada lado de la cuadrícula",
"Period, t/N":
  "Periodo, t/N",
"Frequency, {#}/T":
  "Frecuencia, {#}/T",
"Frequency of the chain's lowest mode":
  "Frecuencia del modo más bajo de la cadena",
"Frequency of the chain's highest mode, n = {#}":
  "Frecuencia del modo más alto de la cadena, n = {#}",
"Frequency of mode n of the chain, ω_n/{#}π":
  "Frecuencia del modo n de la cadena, ω_n/{#}π",
"Frequency of grid mode (p, q)":
  "Frecuencia del modo (p, q) de la cuadrícula",
"Number of the block, counted from the left wall, {#} to N":
  "Número del bloque, contado desde la pared izquierda, de {#} a N",
"Spring constant of each spring":
  "Constante de cada resorte",
"Mass of each block or puck":
  "Masa de cada bloque o disco",
"Number of the chain's mode, from the lowest, {#} to N":
  "Número del modo de la cadena, desde el más bajo, de {#} a N",
"Angular frequency of the one block between two walls":
  "Frecuencia angular del bloque único entre dos paredes",
"Angular frequency of mode n of the chain":
  "Frecuencia angular del modo n de la cadena",
"Number of half waves of the grid mode along x (across the grid), {#} to N":
  "Número de medias ondas del modo de la cuadrícula a lo largo de x (a lo ancho), de {#} a N",
"Number of half waves of the grid mode along y (up the grid), {#} to N":
  "Número de medias ondas del modo de la cuadrícula a lo largo de y (a lo alto), de {#} a N",
"sin(pπ/{#}(N + {#})) for the grid":
  "sin(pπ/{#}(N + {#})) para la cuadrícula",
"sin(qπ/{#}(N + {#})) for the grid":
  "sin(qπ/{#}(N + {#})) para la cuadrícula",
"Time of N oscillations on the stopwatch":
  "Tiempo de N oscilaciones en el cronómetro",
"Wave speed, λf":
  "Rapidez de la onda, λf",
"Wave speed of mode n of the chain, ({#}/n) f_n":
  "Rapidez de la onda del modo n de la cadena, ({#}/n) f_n",
"Displacement of block j from its rest position":
  "Desplazamiento del bloque j desde su posición de reposo",
"Springs and Oscillations (Sandbox)":
  "Resortes y oscilaciones (Arenero)"
});
