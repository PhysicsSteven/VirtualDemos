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
"Displacement Current | VirtualDemos":
  "Corriente de desplazamiento | VirtualDemos",
"Displacement Current":
  "Corriente de desplazamiento",
"<strong>Setups in the demo:</strong> Loop around the wire; Same loop, surface through the gap; Loop in the gap; Small loop inside the plates.":
  "<strong>Configuraciones en la demo:</strong> Espira alrededor del cable; Misma espira, superficie a través del hueco; Espira en el hueco; Espira pequeña dentro de las placas.",
"A battery charges a parallel plate capacitor (circular plates {#} cm in radius, {#} mm apart, \\(C = 34.8\\) pF) through a resistor and a long straight wire. Charge starts and pauses the charging; Start over empties the capacitor. Time runs about \\(10^5\\) times slower than real, and the clock shows the time in the experiment.":
  "Una batería carga un capacitor de placas paralelas (placas circulares de {#} cm de radio, separadas {#} mm, \\(C = 34.8\\) pF) a través de un resistor y un cable largo y recto. Cargar inicia y pausa la carga; Empezar de nuevo vacía el capacitor. El tiempo corre unas \\(10^5\\) veces más lento que en la realidad, y el reloj muestra el tiempo del experimento.",
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
"When the current is {#} µA, what is \\(B\\) on a loop of radius {#} cm around the wire?":
  "Cuando la corriente es {#} µA, ¿cuánto vale \\(B\\) en una espira de radio {#} cm alrededor del cable?",
"Show that \\(\\varepsilon_0\\,d\\Phi_E/dt\\) between the plates equals the current in the wire.":
  "Demuestra que \\(\\varepsilon_0\\,d\\Phi_E/dt\\) entre las placas es igual a la corriente en el cable.",
"A loop of radius {#} cm sits in the gap, inside the {#} cm plates. What share of the displacement current passes through its flat disk, and how does \\(B\\) on it compare with \\(B\\) on a {#} cm loop?":
  "Una espira de radio {#} cm está en el hueco, dentro de las placas de {#} cm. ¿Qué parte de la corriente de desplazamiento pasa por su disco plano, y cómo se compara \\(B\\) en ella con \\(B\\) en una espira de {#} cm?",
"The demo’s battery is {#} V by default. Real capacitors charged to such voltages can give a painful shock and can stay charged after the supply is removed; discharge them through a resistor before handling.":
  "La batería de la demo es de {#} V por defecto. Los capacitores reales cargados a esos voltajes pueden dar una descarga dolorosa y pueden quedar cargados después de quitar la fuente; descárgalos a través de un resistor antes de manipularlos.",
"<strong>Part {#}: one loop, two surfaces.</strong> Start the charging and pause it partway (somewhere near one time constant). Without restarting, record a reading for the loop around the wire with a flat disk ({#} cm radius), then the same loop with its surface stretched into the gap, then a {#} cm loop in the gap with a flat disk. Send the readings to the worksheet.":
  "<strong>Parte {#}: una espira, dos superficies.</strong> Inicia la carga y páusala a la mitad (cerca de una constante de tiempo). Sin reiniciar, registra una lectura para la espira alrededor del cable con un disco plano ({#} cm de radio), luego la misma espira con su superficie estirada hacia el hueco, y luego una espira de {#} cm en el hueco con un disco plano. Envía las lecturas a la hoja de trabajo.",
"<strong>Part {#}: B across the gap.</strong> Clear the readings. Leave the time where it is, put the loop in the gap with a flat disk, and record a reading at each radius from {#} cm to {#} cm in {#} cm steps (inside the plates). Send them to a new copy of the table. Clear, then do the same from {#} cm to {#} cm (outside the plates) and send those to another copy.":
  "<strong>Parte {#}: B a través del hueco.</strong> Borra las lecturas. Deja el tiempo donde está, pon la espira en el hueco con un disco plano y registra una lectura en cada radio de {#} cm a {#} cm en pasos de {#} cm (dentro de las placas). Envíalas a una nueva copia de la tabla. Borra, y luego haz lo mismo de {#} cm a {#} cm (fuera de las placas) y envía esas a otra copia.",
"<strong>Part {#}: B as the capacitor charges.</strong> Clear the readings and put a {#} cm loop in the gap. Then start over, so the capacitor is empty (choosing a loop setup after starting over charges it partway again). Charge the capacitor and pause it about every {#} µs up to about {#} µs, recording a reading each time. Send them to a new copy of the table.":
  "<strong>Parte {#}: B mientras el capacitor se carga.</strong> Borra las lecturas y pon una espira de {#} cm en el hueco. Luego empieza de nuevo, para que el capacitor esté vacío (elegir una configuración de espira después de empezar de nuevo lo carga otra vez a la mitad). Carga el capacitor y páusalo más o menos cada {#} µs hasta unos {#} µs, registrando una lectura cada vez. Envíalas a una nueva copia de la tabla.",
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
"Record the battery voltage and resistance. Fill the last column yourself for the readings outside the plates.":
  "Registra el voltaje de la batería y la resistencia. Llena tú mismo la última columna para las lecturas fuera de las placas.",
"For each Part {#} reading compare \\(2\\pi rB\\) with \\(\\mu_0(I_c + I_d)\\). What would Ampère’s law without the displacement current predict for the bag, and why can that not be right?":
  "Para cada lectura de la Parte {#} compara \\(2\\pi rB\\) con \\(\\mu_0(I_c + I_d)\\). ¿Qué predeciría la ley de Ampère sin la corriente de desplazamiento para la bolsa, y por qué eso no puede ser correcto?",
"Graph \\(B\\) against \\(r\\) for the Part {#} readings inside the plates. Compare the slope with \\(\\mu_0 I/(2\\pi R^2)\\), using the current you recorded.":
  "Grafica \\(B\\) contra \\(r\\) para las lecturas de la Parte {#} dentro de las placas. Compara la pendiente con \\(\\mu_0 I/(2\\pi R^2)\\), usando la corriente que registraste.",
"Graph \\(B\\) against \\(1/r\\) for the Part {#} readings outside the plates. Compare the slope with \\(\\mu_0 I/2\\pi\\).":
  "Grafica \\(B\\) contra \\(1/r\\) para las lecturas de la Parte {#} fuera de las placas. Compara la pendiente con \\(\\mu_0 I/2\\pi\\).",
"Graph \\(B\\) against \\(I\\) for Part {#}. Compare the slope with \\(\\mu_0/(2\\pi r)\\) for \\(r = 7.0\\) cm. What does this tell you about the field in the gap compared with the field around the wire?":
  "Grafica \\(B\\) contra \\(I\\) para la Parte {#}. Compara la pendiente con \\(\\mu_0/(2\\pi r)\\) para \\(r = 7.0\\) cm. ¿Qué te dice esto sobre el campo en el hueco comparado con el campo alrededor del cable?",
"From two neighboring Part {#} readings, work out \\(\\varepsilon_0 A\\,\\Delta E/\\Delta t\\) (with \\(A = \\pi R^2\\)) and compare it with the current halfway between them.":
  "A partir de dos lecturas vecinas de la Parte {#}, calcula \\(\\varepsilon_0 A\\,\\Delta E/\\Delta t\\) (con \\(A = \\pi R^2\\)) y compáralo con la corriente a medio camino entre ellas.",
"The demo gives its values to six significant figures and the plates are ideal, so Analysis {#} to {#} should agree closely; use the standard errors of your fits to say how closely. In Analysis {#} the finite difference \\(\\Delta E/\\Delta t\\) is only an approximation to \\(dE/dt\\) because \\(E\\) curves as the capacitor charges: say whether using readings closer together, or the current at the midpoint rather than at either end, improves the agreement, and why. Real plates have fringing fields at their edges; say how that would change \\(B\\) near \\(r = R\\).":
  "La demo da sus valores con seis cifras significativas y las placas son ideales, así que los Análisis {#} a {#} deberían coincidir bien; usa los errores estándar de tus ajustes para decir qué tan bien. En el Análisis {#} la diferencia finita \\(\\Delta E/\\Delta t\\) es solo una aproximación a \\(dE/dt\\) porque \\(E\\) se curva mientras el capacitor se carga: di si usar lecturas más cercanas entre sí, o la corriente en el punto medio en lugar de en cualquiera de los extremos, mejora la coincidencia, y por qué. Las placas reales tienen campos de borde en sus orillas; di cómo cambiaría eso \\(B\\) cerca de \\(r = R\\).",
"Why must the right side of Ampère’s law be the same for every surface bounded by the loop? (Think about charge conservation.)":
  "¿Por qué el lado derecho de la ley de Ampère debe ser el mismo para toda superficie limitada por la espira? (Piensa en la conservación de la carga.)",
"No charge moves between the plates. What makes the magnetic field there?":
  "Ninguna carga se mueve entre las placas. ¿Qué produce el campo magnético ahí?",
"Why are these fields so hard to measure in a real laboratory, and what would you change to make them larger?":
  "¿Por qué estos campos son tan difíciles de medir en un laboratorio real, y qué cambiarías para hacerlos más grandes?",
"What is \\(B\\) in the gap once the capacitor is fully charged, and why?":
  "¿Cuánto vale \\(B\\) en el hueco una vez que el capacitor está completamente cargado, y por qué?",
"Prelab answers, the battery voltage and resistance, the table copies with their graphs and fits, the comparisons in the Analysis, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, el voltaje de la batería y la resistencia, las copias de la tabla con sus gráficas y ajustes, las comparaciones del Análisis, y las respuestas a las preguntas. Identifica los datos simulados.",
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
"Column M, row {#}":
  "Columna M, fila {#}",
"Heading of column M":
  "Encabezado de la columna M",
"Column M":
  "Columna M"
});
