/* ws/displacement-current in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/displacement-current', {
"Time t (µs)":
  "Tiempo t (µs)",
"Current I (µA)":
  "Corriente I (µA)",
"Field between the plates E (V/m)":
  "Campo entre las placas E (V/m)",
"Loop radius r (cm)":
  "Radio de la espira r (cm)",
"Where":
  "Dónde",
"I_c through it (µA)":
  "I_c a través de ella (µA)",
"I_d through it (µA)":
  "I_d a través de ella (µA)",
"B on the loop (pT)":
  "B en la espira (pT)",
"{#}π rB (T·m)":
  "{#}π rB (T·m)",
"With calculus":
  "Con cálculo",
"Displacement Current | VirtualDemos":
  "Corriente de desplazamiento | VirtualDemos",
"Displacement Current":
  "Corriente de desplazamiento",
"<strong>Setups in the demo:</strong> Loop around the wire; Same loop, surface through the gap; Loop in the gap; Small loop inside the plates.":
  "<strong>Configuraciones en la demo:</strong> Espira alrededor del cable; Misma espira, superficie a través del hueco; Espira en el hueco; Espira pequeña dentro de las placas.",
"A battery charges a parallel plate capacitor (circular plates {#} cm in radius, {#} mm apart, \\(C = 34.8\\) pF) through a resistor and a long straight wire. Charge starts and pauses the charging; Reset empties the capacitor. Time runs about \\(10^5\\) times slower than real, and the clock shows the time in the experiment.":
  "Una batería carga un capacitor de placas paralelas (placas circulares de {#} cm de radio, separadas {#} mm, \\(C = 34.8\\) pF) a través de un resistor y un cable largo y recto. Cargar inicia y pausa la carga; Reiniciar vacía el capacitor. El tiempo corre unas \\(10^5\\) veces más lento que en la realidad, y el reloj muestra el tiempo del experimento.",
"An Amperian loop circles the axis. Drag it sideways to move it along the wire or into the gap between the plates, and up or down to change its radius (or use the arrow keys and the radius slider). Its surface is either a flat disk or a bag that reaches into the gap without the wire passing through it.":
  "Una espira amperiana rodea el eje. Arrástrala hacia los lados para moverla a lo largo del cable o hacia el hueco entre las placas, y hacia arriba o abajo para cambiar su radio (o usa las flechas y el deslizador del radio). Su superficie es un disco plano o una bolsa que se mete en el hueco sin que el cable la atraviese.",
"Readouts give the circuit current, the charge, the field \\(E\\) between the plates, the conduction and displacement currents through the loop’s surface, \\(B\\) on the loop and \\(\\oint\\vec B\\cdot d\\vec l = 2\\pi rB\\). A plot shows \\(B\\) against distance from the axis at that moment.":
  "Las lecturas dan la corriente del circuito, la carga, el campo \\(E\\) entre las placas, las corrientes de conducción y de desplazamiento a través de la superficie de la espira, \\(B\\) en la espira y \\(\\oint\\vec B\\cdot d\\vec l = 2\\pi rB\\). Una gráfica muestra \\(B\\) en función de la distancia al eje en ese momento.",
"The plates are ideal: the field between them is uniform and fringing is ignored. The fields are tiny (picotesla to nanotesla) because the currents are microamperes.":
  "Las placas son ideales: el campo entre ellas es uniforme y se ignoran los efectos de borde. Los campos son diminutos (de picoteslas a nanoteslas) porque las corrientes son de microamperes.",
"Record reading stores the time, the currents, \\(E\\), the loop’s radius and place, and \\(B\\). Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda el tiempo, las corrientes, \\(E\\), el radio y la posición de la espira, y \\(B\\). Exportar a la hoja envía las lecturas a la tabla de Datos de abajo; Borrar empieza una nueva serie, que va a una nueva copia de la tabla.",
"Blind hides \\(B\\), the displacement current, the enclosed currents and the \\(B(r)\\) plot (their columns are left empty if you record in Blind).":
  "A ciegas oculta \\(B\\), la corriente de desplazamiento, las corrientes encerradas y la gráfica de \\(B(r)\\) (sus columnas quedan vacías si registras en modo A ciegas).",
"Show that Ampère’s law needs Maxwell’s displacement current, \\(I_d = \\varepsilon_0\\,d\\Phi_E/dt\\), to give the same answer for every surface bounded by a loop, and measure the magnetic field that a changing electric field makes between the plates of a charging capacitor.":
  "Demuestra que la ley de Ampère necesita la corriente de desplazamiento de Maxwell, \\(I_d = \\varepsilon_0\\,d\\Phi_E/dt\\), para dar la misma respuesta para toda superficie limitada por una espira, y mide el campo magnético que produce un campo eléctrico variable entre las placas de un capacitor que se carga.",
"Ampère’s law says \\(\\oint\\vec B\\cdot d\\vec l = \\mu_0 I_\\mathrm{enc}\\), where \\(I_\\mathrm{enc}\\) is the current through any surface bounded by the loop (§{#}). For a loop around the wire leading to a charging capacitor, a flat disk is crossed by the wire’s current \\(I\\), but a bag reaching into the gap is crossed by no charge at all. Maxwell resolved this by adding the displacement current (§{#}):":
  "La ley de Ampère dice que \\(\\oint\\vec B\\cdot d\\vec l = \\mu_0 I_\\mathrm{enc}\\), donde \\(I_\\mathrm{enc}\\) es la corriente a través de cualquier superficie limitada por la espira (§{#}). Para una espira alrededor del cable que llega a un capacitor que se carga, un disco plano es atravesado por la corriente \\(I\\) del cable, pero una bolsa que se mete en el hueco no es atravesada por ninguna carga. Maxwell resolvió esto añadiendo la corriente de desplazamiento (§{#}):",
"\\[\\oint\\vec B\\cdot d\\vec l = \\mu_0\\left(I + \\varepsilon_0\\frac{d\\Phi_E}{dt}\\right).\\]":
  "\\[\\oint\\vec B\\cdot d\\vec l = \\mu_0\\left(I + \\varepsilon_0\\frac{d\\Phi_E}{dt}\\right).\\]",
"Between plates of area \\(A\\), \\(E = q/(\\varepsilon_0 A)\\) and \\(\\Phi_E = EA\\), so \\(I_d = \\varepsilon_0 A\\,dE/dt = dq/dt = I\\): the displacement current in the gap equals the conduction current in the wire. By symmetry \\(B\\) circles the axis, and on a loop of radius \\(r\\) in the gap of plates of radius \\(R\\),":
  "Entre placas de área \\(A\\), \\(E = q/(\\varepsilon_0 A)\\) y \\(\\Phi_E = EA\\), así que \\(I_d = \\varepsilon_0 A\\,dE/dt = dq/dt = I\\): la corriente de desplazamiento en el hueco es igual a la corriente de conducción en el cable. Por simetría \\(B\\) circula alrededor del eje, y en una espira de radio \\(r\\) en el hueco de placas de radio \\(R\\),",
"\\[B = \\frac{\\mu_0 I r}{2\\pi R^2}\\quad (r < R), \\qquad B = \\frac{\\mu_0 I}{2\\pi r}\\quad (r > R).\\]":
  "\\[B = \\frac{\\mu_0 I r}{2\\pi R^2}\\quad (r < R), \\qquad B = \\frac{\\mu_0 I}{2\\pi r}\\quad (r > R).\\]",
"While the capacitor charges through resistance \\(R_c\\), \\(I = (V/R_c)\\,e^{-t/R_cC}\\).":
  "Mientras el capacitor se carga a través de una resistencia \\(R_c\\), \\(I = (V/R_c)\\,e^{-t/R_cC}\\).",
"Show that \\(C = \\varepsilon_0\\pi R^2/d = 34.8\\) pF for plates of radius {#} cm, {#} mm apart. With a {#} V battery and {#} MΩ, find the time constant and the current at \\(t = 0\\).":
  "Demuestra que \\(C = \\varepsilon_0\\pi R^2/d = 34.8\\) pF para placas de radio {#} cm, separadas {#} mm. Con una batería de {#} V y {#} MΩ, encuentra la constante de tiempo y la corriente en \\(t = 0\\).",
"A loop of radius {#} cm sits in the gap, inside the {#} cm plates. What share of the displacement current passes through its flat disk, and how does \\(B\\) on it compare with \\(B\\) on a {#} cm loop?":
  "Una espira de radio {#} cm está en el hueco, dentro de las placas de {#} cm. ¿Qué parte de la corriente de desplazamiento pasa por su disco plano, y cómo se compara \\(B\\) en ella con \\(B\\) en una espira de {#} cm?",
"While the capacitor charges, no charge crosses the gap between the plates. Picture a loop of radius {#} cm in the gap, centered on the axis, and a loop of the same size around the wire. At the same moment, is the magnetic field on the gap loop zero, weaker than on the wire loop, or the same? Give your reasoning.":
  "Mientras el capacitor se carga, ninguna carga cruza el hueco entre las placas. Imagina una espira de radio {#} cm en el hueco, centrada en el eje, y una espira del mismo tamaño alrededor del cable. En el mismo instante, ¿el campo magnético en la espira del hueco es cero, más débil que en la espira del cable o igual? Da tu razonamiento.",
"The demo’s battery is {#} V by default. Real capacitors charged to such voltages can give a painful shock and can stay charged after the supply is removed; discharge them through a resistor before handling.":
  "La batería de la demo es de {#} V por defecto. Los capacitores reales cargados a esos voltajes pueden dar una descarga dolorosa y pueden quedar cargados después de quitar la fuente; descárgalos a través de un resistor antes de manipularlos.",
"<strong>Part {#}: one loop, two surfaces.</strong> Press Charge (under the view) and press it again (it now reads Pause) partway, somewhere near one time constant (the Time constant RC readout; the clock runs {#} µs each real second). Without restarting, press Record reading for each of three setups in turn: Loop around the wire (flat disk, {#} cm radius), Same loop, surface through the gap, and Loop in the gap ({#} cm, flat disk). Choosing a setup keeps the time. Press Export to worksheet.":
  "<strong>Parte {#}: una espira, dos superficies.</strong> Pulsa Carga (bajo la vista) y púlsalo otra vez (ahora dice Pausa) a medias, en algún momento cerca de una constante de tiempo (la lectura Constante de tiempo RC; el reloj corre {#} µs por cada segundo real). Sin reiniciar, pulsa Registrar lectura para cada una de tres configuraciones en turno: Espira alrededor del cable (disco plano, {#} cm de radio), Misma espira, superficie a través del hueco, y Espira en el hueco ({#} cm, disco plano). Elegir una configuración conserva el tiempo. Pulsa Exportar a la hoja.",
"<strong>Part {#}: B across the gap.</strong> Press Clear. Leave the time where it is, press the Loop in the gap setup (flat disk), and set the Loop radius r slider to {#}, {#}, {#}, {#} and {#} cm (inside the plates), pressing Record reading at each. Press Export to worksheet. Press Clear, then do the same at {#}, {#} and {#} cm (outside the plates) and export those to another copy.":
  "<strong>Parte {#}: B a través del hueco.</strong> Pulsa Borrar. Deja el tiempo donde está, pulsa la configuración Espira en el hueco (disco plano) y fija el control deslizante Radio de la espira r en {#}, {#}, {#}, {#} y {#} cm (dentro de las placas), pulsando Registrar lectura en cada uno. Pulsa Exportar a la hoja. Pulsa Borrar y luego haz lo mismo a {#}, {#} y {#} cm (fuera de las placas) y exporta esas a otra copia.",
"<strong>Part {#}: B as the capacitor charges.</strong> Press Clear and press the Loop in the gap setup ({#} cm). Then press Reset under the view (not Reset all), so the capacitor is empty and the clock reads {#} µs (choosing a loop setup after this would charge it partway again). Press Charge, and press Pause about every {#} µs (one real second) up to about {#} µs, pressing Record reading at each pause; the space bar also charges and pauses. Press Export to worksheet.":
  "<strong>Parte {#}: B mientras se carga el capacitor.</strong> Pulsa Borrar y pulsa la configuración Espira en el hueco ({#} cm). Luego pulsa Reiniciar bajo la vista (no Reiniciar todo), para que el capacitor quede vacío y el reloj marque {#} µs (elegir una configuración de espira después de esto lo cargaría otra vez a medias). Pulsa Carga, y pulsa Pausa más o menos cada {#} µs (un segundo real) hasta unos {#} µs, pulsando Registrar lectura en cada pausa; la barra espaciadora también carga y pausa. Pulsa Exportar a la hoja.",
"<span>B</span>Time \\(t\\) (µs)":
  "<span>B</span>Tiempo \\(t\\) (µs)",
"<span>C</span>Current \\(I\\) (µA)":
  "<span>C</span>Corriente \\(I\\) (µA)",
"<span>D</span>Field between the plates \\(E\\) (V/m)":
  "<span>D</span>Campo entre las placas \\(E\\) (V/m)",
"<span>E</span>Loop radius \\(r\\) (cm)":
  "<span>E</span>Radio de la espira \\(r\\) (cm)",
"<span>F</span>Where":
  "<span>F</span>Dónde",
"<span>G</span>Surface":
  "<span>G</span>Superficie",
"<span>H</span>\\(I_c\\) through it (µA)":
  "<span>H</span>\\(I_c\\) a través de ella (µA)",
"<span>I</span>\\(I_d\\) through it (µA)":
  "<span>I</span>\\(I_d\\) a través de ella (µA)",
"<span>J</span>\\(B\\) on the loop (pT)":
  "<span>J</span>\\(B\\) en la espira (pT)",
"<span>K</span>\\(2\\pi rB\\) (T·m)":
  "<span>K</span>\\(2\\pi rB\\) (T·m)",
"Time t (µs), row {#}":
  "Tiempo t (µs), fila {#}",
"Current I (µA), row {#}":
  "Corriente I (µA), fila {#}",
"Field between the plates E (V/m), row {#}":
  "Campo entre las placas E (V/m), fila {#}",
"Loop radius r (cm), row {#}":
  "Radio de la espira r (cm), fila {#}",
"Where, row {#}":
  "Dónde, fila {#}",
"Surface, row {#}":
  "Superficie, fila {#}",
"I_c through it (µA), row {#}":
  "I_c a través de ella (µA), fila {#}",
"I_d through it (µA), row {#}":
  "I_d a través de ella (µA), fila {#}",
"B on the loop (pT), row {#}":
  "B en la espira (pT), fila {#}",
"{#}π rB (T·m), row {#}":
  "{#}π rB (T·m), fila {#}",
"{#}/r ({#}/m), row {#}":
  "{#}/r ({#}/m), fila {#}",
"Write down the Battery voltage V and Resistance R from their sliders ({#} V and {#} MΩ unless you changed them). Fill the last column yourself for the readings outside the plates, with \\(r\\) in meters.":
  "Anota el Voltaje de la batería V y la Resistencia R de sus controles deslizantes ({#} V y {#} MΩ a menos que los hayas cambiado). Llena tú mismo la última columna para las lecturas fuera de las placas, con \\(r\\) en metros.",
"For each Part {#} reading compare \\(2\\pi rB\\) with \\(\\mu_0(I_c + I_d)\\). What would Ampère’s law without the displacement current predict for the bag, and why can that not be right?":
  "Para cada lectura de la Parte {#} compara \\(2\\pi rB\\) con \\(\\mu_0(I_c + I_d)\\). ¿Qué predeciría la ley de Ampère sin la corriente de desplazamiento para la bolsa, y por qué eso no puede ser correcto?",
"Graph \\(B\\) (vertical) against \\(r\\) (horizontal) for the Part {#} readings inside the plates. Compare the slope with \\(\\mu_0 I/(2\\pi R^2)\\), using the current you recorded.":
  "Grafica \\(B\\) (vertical) en función de \\(r\\) (horizontal) para las lecturas de la Parte {#} dentro de las placas. Compara la pendiente con \\(\\mu_0 I/(2\\pi R^2)\\), usando la corriente que registraste.",
"Graph \\(B\\) (vertical) against \\(1/r\\) (horizontal) for the Part {#} readings outside the plates. Compare the slope with \\(\\mu_0 I/2\\pi\\).":
  "Grafica \\(B\\) (vertical) en función de \\(1/r\\) (horizontal) para las lecturas de la Parte {#} fuera de las placas. Compara la pendiente con \\(\\mu_0 I/2\\pi\\).",
"Graph \\(B\\) (vertical) against \\(I\\) (horizontal) for Part {#}. Compare the slope with \\(\\mu_0/(2\\pi r)\\) for \\(r = 7.0\\) cm.":
  "Grafica \\(B\\) (vertical) contra \\(I\\) (horizontal) para la Parte {#}. Compara la pendiente con \\(\\mu_0/(2\\pi r)\\) para \\(r = 7.0\\) cm.",
"From two neighboring Part {#} readings, work out \\(\\varepsilon_0 A\\,\\Delta E/\\Delta t\\) (with \\(A = \\pi R^2\\)) and compare it with the current halfway between them.":
  "A partir de dos lecturas vecinas de la Parte {#}, calcula \\(\\varepsilon_0 A\\,\\Delta E/\\Delta t\\) (con \\(A = \\pi R^2\\)) y compáralo con la corriente a medio camino entre ellas.",
"The demo gives its values to six significant figures and the plates are ideal, so Analysis {#} to {#} should agree closely; use the standard errors of your fits to say how closely. In Analysis {#} the finite difference \\(\\Delta E/\\Delta t\\) is only an approximation to \\(dE/dt\\) because \\(E\\) curves as the capacitor charges: say whether using readings closer together, or the current at the midpoint rather than at either end, improves the agreement, and why. Real plates have fringing fields at their edges; say how that would change \\(B\\) near \\(r = R\\).":
  "La demo da sus valores con seis cifras significativas y las placas son ideales, así que los Análisis {#} a {#} deberían coincidir bien; usa los errores estándar de tus ajustes para decir qué tan bien. En el Análisis {#} la diferencia finita \\(\\Delta E/\\Delta t\\) es solo una aproximación a \\(dE/dt\\) porque \\(E\\) se curva mientras el capacitor se carga: di si usar lecturas más cercanas entre sí, o la corriente en el punto medio en lugar de en cualquiera de los extremos, mejora la coincidencia, y por qué. Las placas reales tienen campos de borde en sus orillas; di cómo cambiaría eso \\(B\\) cerca de \\(r = R\\).",
"Why must the right side of Ampère’s law be the same for every surface bounded by the loop? (Think about charge conservation.) Then compare \\(2\\pi rB\\) in the Loop in the gap row of Part {#} with the Loop around the wire row: what does it say about your answer to Before the lab {#}, and about the field on a loop where no charge flows?":
  "¿Por qué debe ser el lado derecho de la ley de Ampère el mismo para toda superficie limitada por la espira? (Piensa en la conservación de la carga.) Luego compara \\(2\\pi rB\\) en la fila Espira en el hueco de la Parte {#} con la fila Espira alrededor del cable: ¿qué dice sobre tu respuesta a Antes del laboratorio {#} y sobre el campo en una espira por la que no fluye carga?",
"Why are these fields so hard to measure in a real laboratory, and what would you change to make them larger?":
  "¿Por qué estos campos son tan difíciles de medir en un laboratorio real, y qué cambiarías para hacerlos más grandes?",
"For courses that use calculus. This section is not counted in the {#} minutes; do it when your instructor assigns it.":
  "Para cursos que usan cálculo. Esta sección no cuenta dentro de los {#} minutos; hazla cuando tu profesor la asigne.",
"With \\(q = CV\\left(1 - e^{-t/R_cC}\\right)\\) and \\(C = \\varepsilon_0A/d\\), write \\(E(t)\\) between the plates. Differentiate it and show that \\(\\varepsilon_0A\\,dE/dt\\) equals the current \\(I = (V/R_c)\\,e^{-t/R_cC}\\) at every instant. Check your \\(E(t)\\) against your first and last Part {#} readings (\\(d = 2.0\\) mm).":
  "Con \\(q = CV\\left(1 - e^{-t/R_cC}\\right)\\) y \\(C = \\varepsilon_0A/d\\), escribe \\(E(t)\\) entre las placas. Derívala y demuestra que \\(\\varepsilon_0A\\,dE/dt\\) es igual a la corriente \\(I = (V/R_c)\\,e^{-t/R_cC}\\) en todo instante. Comprueba tu \\(E(t)\\) con tus lecturas primera y última de la Parte {#} (\\(d = 2.0\\) mm).",
"The charge that reaches the plate between your first and last Part {#} readings is \\(\\int I\\,dt\\). Estimate it with the trapezoid rule from your Part {#} currents, and compare it with \\(\\varepsilon_0A\\,[E(t_\\text{last}) - E(t_\\text{first})]\\), which Gauss’s law says is the same charge. Why does the trapezoid estimate come out a little high?":
  "La carga que llega a la placa entre tus lecturas primera y última de la Parte {#} es \\(\\int I\\,dt\\). Estímala con la regla del trapecio a partir de tus corrientes de la Parte {#} y compárala con \\(\\varepsilon_0A\\,[E(t_\\text{last}) - E(t_\\text{first})]\\), que según la ley de Gauss es la misma carga. ¿Por qué la estimación del trapecio sale un poco alta?",
"Prelab answers, the battery voltage and resistance, the table copies with their graphs and fits, the comparisons in the Analysis, and answers to the questions (and to With calculus, if assigned). Identify simulated data.":
  "Respuestas del prelaboratorio, el voltaje y la resistencia de la batería, las copias de las tablas con sus gráficas y ajustes, las comparaciones del Análisis y las respuestas a las preguntas (y a Con cálculo, si se asignó). Identifica los datos simulados.",
"Plate area":
  "Área de las placas",
"Magnetic field on the loop":
  "Campo magnético en la espira",
"Electric field between the plates":
  "Campo eléctrico entre las placas",
"Current in the circuit":
  "Corriente en el circuito",
"Conduction current through the surface":
  "Corriente de conducción a través de la superficie",
"Displacement current, ε₀ dΦ_E/dt":
  "Corriente de desplazamiento, ε₀ dΦ_E/dt",
"Current through a surface bounded by the loop":
  "Corriente a través de una superficie limitada por la espira",
"Electric flux through the surface":
  "Flujo eléctrico a través de la superficie",
"Radius of the plates":
  "Radio de las placas",
"Resistance the capacitor charges through":
  "Resistencia a través de la cual se carga el capacitor",
"Battery voltage":
  "Voltaje de la batería",
"Plate separation":
  "Separación entre las placas",
"Position along the loop (d l: a short piece of it)":
  "Posición a lo largo de la espira (d l: un trozo corto de ella)",
"Charge on the plates":
  "Carga en las placas",
"Radius of the loop":
  "Radio de la espira",
"Prelab answers, the battery voltage and resistance, the table copies with their graphs and fits, the comparisons in the Analysis, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, el voltaje de la batería y la resistencia, las copias de la tabla con sus gráficas y ajustes, las comparaciones del Análisis, y las respuestas a las preguntas. Identifica los datos simulados.",
"When the current is {#} µA, what is \\(B\\) on a loop of radius {#} cm around the wire?":
  "Cuando la corriente es {#} µA, ¿cuánto vale \\(B\\) en una espira de radio {#} cm alrededor del cable?",
"Graph \\(B\\) (vertical) against \\(I\\) (horizontal) for Part {#}. Compare the slope with \\(\\mu_0/(2\\pi r)\\) for \\(r = 7.0\\) cm. What does this tell you about the field in the gap compared with the field around the wire?":
  "Grafica \\(B\\) (vertical) en función de \\(I\\) (horizontal) para la Parte {#}. Compara la pendiente con \\(\\mu_0/(2\\pi r)\\) para \\(r = 7.0\\) cm. ¿Qué te dice esto sobre el campo en el hueco comparado con el campo alrededor del cable?",
"Why must the right side of Ampère’s law be the same for every surface bounded by the loop? (Think about charge conservation.)":
  "¿Por qué el lado derecho de la ley de Ampère debe ser el mismo para toda superficie limitada por la espira? (Piensa en la conservación de la carga.)",
"Column M, row {#}":
  "Columna M, fila {#}",
"Heading of column M":
  "Encabezado de la columna M",
"Column M":
  "Columna M",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"Show that \\(\\varepsilon_0\\,d\\Phi_E/dt\\) between the plates equals the current in the wire.":
  "Demuestra que \\(\\varepsilon_0\\,d\\Phi_E/dt\\) entre las placas es igual a la corriente en el cable.",
"<strong>Part {#}: one loop, two surfaces.</strong> Start the charging and pause it partway (somewhere near one time constant). Without restarting, record a reading for the loop around the wire with a flat disk ({#} cm radius), then the same loop with its surface stretched into the gap, then a {#} cm loop in the gap with a flat disk. Send the readings to the worksheet.":
  "<strong>Parte {#}: una espira, dos superficies.</strong> Inicia la carga y páusala a la mitad (cerca de una constante de tiempo). Sin reiniciar, registra una lectura para la espira alrededor del cable con un disco plano ({#} cm de radio), luego la misma espira con su superficie estirada hacia el hueco, y luego una espira de {#} cm en el hueco con un disco plano. Envía las lecturas a la hoja de trabajo.",
"<strong>Part {#}: B across the gap.</strong> Clear the readings. Leave the time where it is, put the loop in the gap with a flat disk, and record a reading at each radius from {#} cm to {#} cm in {#} cm steps (inside the plates). Send them to a new copy of the table. Clear, then do the same from {#} cm to {#} cm (outside the plates) and send those to another copy.":
  "<strong>Parte {#}: B a través del hueco.</strong> Borra las lecturas. Deja el tiempo donde está, pon la espira en el hueco con un disco plano y registra una lectura en cada radio de {#} cm a {#} cm en pasos de {#} cm (dentro de las placas). Envíalas a una nueva copia de la tabla. Borra, y luego haz lo mismo de {#} cm a {#} cm (fuera de las placas) y envía esas a otra copia.",
"<strong>Part {#}: B as the capacitor charges.</strong> Clear the readings and put a {#} cm loop in the gap. Then start over, so the capacitor is empty (choosing a loop setup after starting over charges it partway again). Charge the capacitor and pause it about every {#} µs up to about {#} µs, recording a reading each time. Send them to a new copy of the table.":
  "<strong>Parte {#}: B mientras el capacitor se carga.</strong> Borra las lecturas y pon una espira de {#} cm en el hueco. Luego empieza de nuevo, para que el capacitor esté vacío (elegir una configuración de espira después de empezar de nuevo lo carga otra vez a la mitad). Carga el capacitor y páusalo más o menos cada {#} µs hasta unos {#} µs, registrando una lectura cada vez. Envíalas a una nueva copia de la tabla.",
"Record the battery voltage and resistance. Fill the last column yourself for the readings outside the plates.":
  "Registra el voltaje de la batería y la resistencia. Llena tú mismo la última columna para las lecturas fuera de las placas.",
"Graph \\(B\\) against \\(r\\) for the Part {#} readings inside the plates. Compare the slope with \\(\\mu_0 I/(2\\pi R^2)\\), using the current you recorded.":
  "Grafica \\(B\\) contra \\(r\\) para las lecturas de la Parte {#} dentro de las placas. Compara la pendiente con \\(\\mu_0 I/(2\\pi R^2)\\), usando la corriente que registraste.",
"Graph \\(B\\) against \\(1/r\\) for the Part {#} readings outside the plates. Compare the slope with \\(\\mu_0 I/2\\pi\\).":
  "Grafica \\(B\\) contra \\(1/r\\) para las lecturas de la Parte {#} fuera de las placas. Compara la pendiente con \\(\\mu_0 I/2\\pi\\).",
"Graph \\(B\\) against \\(I\\) for Part {#}. Compare the slope with \\(\\mu_0/(2\\pi r)\\) for \\(r = 7.0\\) cm. What does this tell you about the field in the gap compared with the field around the wire?":
  "Grafica \\(B\\) contra \\(I\\) para la Parte {#}. Compara la pendiente con \\(\\mu_0/(2\\pi r)\\) para \\(r = 7.0\\) cm. ¿Qué te dice esto sobre el campo en el hueco comparado con el campo alrededor del cable?",
"No charge moves between the plates. What makes the magnetic field there?":
  "Ninguna carga se mueve entre las placas. ¿Qué produce el campo magnético ahí?",
"What is \\(B\\) in the gap once the capacitor is fully charged, and why?":
  "¿Cuánto vale \\(B\\) en el hueco una vez que el capacitor está completamente cargado, y por qué?"
});
