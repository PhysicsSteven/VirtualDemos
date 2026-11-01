/* ws/loops-solenoids in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/loops-solenoids', {
"Turns N":
  "Espiras N",
"Length L (cm)":
  "Longitud L (cm)",
"Radius R (cm)":
  "Radio R (cm)",
"Probe z from the center (cm)":
  "z de la sonda desde el centro (cm)",
"Probe distance from the axis (cm)":
  "Distancia de la sonda al eje (cm)",
"Field along the axis at the probe (μT)":
  "Campo a lo largo del eje en la sonda (μT)",
"Field away from the axis at the probe (μT)":
  "Campo perpendicular al eje en la sonda (μT)",
"Field at the center (μT)":
  "Campo en el centro (μT)",
"Field at an end (μT)":
  "Campo en un extremo (μT)",
"Turns per meter n":
  "Espiras por metro n",
"Gain":
  "Ganancia",
"Field without the core (μT)":
  "Campo sin el núcleo (μT)",
"Fields of Loops and Solenoids | VirtualDemos":
  "Campos de espiras y solenoides | VirtualDemos",
"Fields of Loops and Solenoids":
  "Campos de espiras y solenoides",
"<strong>Where it is in the demo:</strong> Magnetic Fields of Currents, Loop and solenoid view, with the Current loop, Solenoid and Electromagnet on a supply setups.":
  "<strong>Dónde está en la demo:</strong> Campos magnéticos de corrientes, vista Espira y solenoide, con las configuraciones Espira de corriente, Solenoide y Electroimán con fuente.",
"<strong>Using the demo.</strong> The winding is seen cut through its axis: dots are current coming out of the page and crosses current going in. Number of turns, Length, Radius and Current set the winding; drag the grips to change the radius and length, drag the probe, or click the plot below the picture to put the probe on the axis. The readouts give the field at the probe (along the axis and away from it), the field at the center and, for more than one turn, at an end of the winding.":
  "<strong>Uso de la demo.</strong> El devanado se ve cortado a lo largo de su eje: los puntos son corriente que sale de la página y las cruces corriente que entra. Número de espiras, Longitud, Radio y Corriente fijan el devanado; arrastra los agarres para cambiar el radio y la longitud, arrastra la sonda, o haz clic en la gráfica debajo de la imagen para poner la sonda en el eje. Las lecturas dan el campo en la sonda (a lo largo del eje y perpendicular a él), el campo en el centro y, para más de una espira, en un extremo del devanado.",
"<strong>What the demo models.</strong> Each turn is a circular loop, and its field everywhere is the exact Biot and Savart result (in closed form with complete elliptic integrals). A winding of \\(N\\) turns is \\(N\\) such loops spread evenly along the length \\(L\\), so the turn density is exactly \\(n = N/L\\); the field is the sum over the turns. The wire has no thickness. \\(\\mu_0 = 1.25663706127\\times10^{-6}\\ \\mathrm{T\\cdot m/A}\\) (CODATA {#}). With the iron core in, the core (as long as the winding, of its radius) is magnetized uniformly, as an ellipsoid of the same length to diameter ratio \\(L/2R\\) would be: \\(M = (\\mu_r - 1)H_0/(1 + (\\mu_r - 1)N_d)\\), where \\(H_0\\) is the coil’s own field at the center over \\(\\mu_0\\), \\(N_d\\) the demagnetizing factor along the axis (Osborn {#}) and \\(\\mu_r = 1000\\) (chosen, soft iron), up to iron’s saturation \\(M_s = 1.71\\times10^6\\) A/m (Kittel). A uniform \\(M\\) acts like an extra current \\(ML/N\\) in each turn, so the field keeps its shape and every value is multiplied by the gain \\(1 + ML/(NI)\\). Hysteresis is left out. A reading with the core stores \\(L/2R\\), \\(N_d\\), the gain and whether the iron is saturated; a series of readings all with the core goes to the Electromagnet table. Simulated data.":
  "<strong>Qué modela la demo.</strong> Cada espira es una espira circular, y su campo en todas partes es el resultado exacto de Biot y Savart (en forma cerrada con integrales elípticas completas). Un devanado de \\(N\\) espiras son \\(N\\) espiras así repartidas uniformemente a lo largo de la longitud \\(L\\), así que la densidad de espiras es exactamente \\(n = N/L\\); el campo es la suma sobre las espiras. El alambre no tiene grosor. \\(\\mu_0 = 1.25663706127\\times10^{-6}\\ \\mathrm{T\\cdot m/A}\\) (CODATA {#}). Con el núcleo de hierro puesto, el núcleo (tan largo como el devanado, de su radio) se magnetiza uniformemente, como lo haría un elipsoide con el mismo cociente de longitud a diámetro \\(L/2R\\): \\(M = (\\mu_r - 1)H_0/(1 + (\\mu_r - 1)N_d)\\), donde \\(H_0\\) es el propio campo de la bobina en el centro dividido entre \\(\\mu_0\\), \\(N_d\\) el factor de desmagnetización a lo largo del eje (Osborn {#}) y \\(\\mu_r = 1000\\) (elegido, hierro dulce), hasta la saturación del hierro \\(M_s = 1.71\\times10^6\\) A/m (Kittel). Una \\(M\\) uniforme actúa como una corriente adicional \\(ML/N\\) en cada espira, así que el campo conserva su forma y cada valor se multiplica por la ganancia \\(1 + ML/(NI)\\). Se omite la histéresis. Una lectura con el núcleo guarda \\(L/2R\\), \\(N_d\\), la ganancia y si el hierro está saturado; una serie de lecturas todas con el núcleo va a la tabla Electroimán. Datos simulados.",
"Measure the field of a single current loop at its center and along its axis, then build a solenoid turn by turn and find when its field becomes the uniform \\(\\mu_0 n I\\) of a long solenoid.":
  "Mide el campo de una sola espira de corriente en su centro y a lo largo de su eje, luego construye un solenoide espira por espira y encuentra cuándo su campo se vuelve el \\(\\mu_0 n I\\) uniforme de un solenoide largo.",
"The Biot and Savart law, added up around a circular loop of radius \\(R\\) carrying current \\(I\\), gives on the loop’s axis, a distance \\(z\\) from its center,":
  "La ley de Biot y Savart, sumada alrededor de una espira circular de radio \\(R\\) que lleva una corriente \\(I\\), da en el eje de la espira, a una distancia \\(z\\) de su centro,",
"\\[B = \\frac{\\mu_0 I R^2}{2\\left(R^2 + z^2\\right)^{3/2}},\\]":
  "\\[B = \\frac{\\mu_0 I R^2}{2\\left(R^2 + z^2\\right)^{3/2}},\\]",
"along the axis (right hand rule: fingers along the current, thumb along \\(\\vec B\\)). At the center this is \\(B = \\mu_0 I/(2R)\\). Far from the loop, for \\(z \\gg R\\), it falls as \\(1/z^3\\), like the field of a bar magnet.":
  "a lo largo del eje (regla de la mano derecha: los dedos en el sentido de la corriente, el pulgar a lo largo de \\(\\vec B\\)). En el centro esto es \\(B = \\mu_0 I/(2R)\\). Lejos de la espira, para \\(z \\gg R\\), disminuye como \\(1/z^3\\), como el campo de un imán de barra.",
"A solenoid is many loops side by side. Ampère’s law, applied to a rectangle with one long side inside a long solenoid and the other outside, gives a uniform field inside,":
  "Un solenoide son muchas espiras una junto a otra. La ley de Ampère, aplicada a un rectángulo con un lado largo dentro de un solenoide largo y el otro fuera, da un campo uniforme dentro,",
"\\[B = \\mu_0 n I,\\]":
  "\\[B = \\mu_0 n I,\\]",
"where \\(n = N/L\\) is the number of turns per unit length, and almost no field outside. A real solenoid has ends. Treating the winding as a sheet of current, the field on the axis is":
  "donde \\(n = N/L\\) es el número de espiras por unidad de longitud, y casi ningún campo fuera. Un solenoide real tiene extremos. Tratando el devanado como una lámina de corriente, el campo en el eje es",
"\\[B = \\frac{\\mu_0 n I}{2}\\left(\\cos\\theta_1 - \\cos\\theta_2\\right),\\]":
  "\\[B = \\frac{\\mu_0 n I}{2}\\left(\\cos\\theta_1 - \\cos\\theta_2\\right),\\]",
"where \\(\\theta_1\\) and \\(\\theta_2\\) are the angles from the axis to the rims of the two ends, seen from the point. At the center of a solenoid of length \\(L\\) and radius \\(R\\) this is \\(\\mu_0 n I \\, L/\\sqrt{L^2 + 4R^2}\\), and at an end it is about half the central field.":
  "donde \\(\\theta_1\\) y \\(\\theta_2\\) son los ángulos desde el eje hasta los bordes de los dos extremos, vistos desde el punto. En el centro de un solenoide de longitud \\(L\\) y radio \\(R\\) esto es \\(\\mu_0 n I \\, L/\\sqrt{L^2 + 4R^2}\\), y en un extremo es aproximadamente la mitad del campo central.",
"Find the field at the center of a single loop of radius {#} cm carrying {#} A.":
  "Encuentra el campo en el centro de una sola espira de radio {#} cm que lleva {#} A.",
"Find the field on the axis of the same loop {#} cm from its center. What fraction of the central field is it?":
  "Encuentra el campo en el eje de la misma espira a {#} cm de su centro. ¿Qué fracción del campo central es?",
"A solenoid {#} cm long has {#} turns and carries {#} A. Find \\(n\\) and \\(\\mu_0 n I\\). If its radius is {#} cm, how much smaller than \\(\\mu_0 n I\\) is the field at its center?":
  "Un solenoide de {#} cm de largo tiene {#} espiras y lleva {#} A. Encuentra \\(n\\) y \\(\\mu_0 n I\\). Si su radio es de {#} cm, ¿cuánto menor que \\(\\mu_0 n I\\) es el campo en su centro?",
"Sketch the rectangle used with Ampère’s law for a long solenoid. Which sides add to \\(\\oint \\vec B\\cdot d\\vec l\\), and what two facts about the field does the argument need?":
  "Dibuja el rectángulo que se usa con la ley de Ampère para un solenoide largo. ¿Qué lados contribuyen a \\(\\oint \\vec B\\cdot d\\vec l\\), y qué dos hechos sobre el campo necesita el argumento?",
"There are no hazards in the simulation. A real solenoid with an iron core can pull steel objects in hard; keep fingers and tools clear.":
  "No hay riesgos en la simulación. Un solenoide real con núcleo de hierro puede atraer con fuerza objetos de acero; mantén alejados los dedos y las herramientas.",
"<strong>Part {#}: center of one loop.</strong> In the Current loop setup ({#} A), record the field with the probe at the center for loop radii of {#}, {#}, {#}, {#}, {#} and {#} cm.":
  "<strong>Parte {#}: centro de una espira.</strong> En la configuración Espira de corriente ({#} A), registra el campo con la sonda en el centro para radios de espira de {#}, {#}, {#}, {#}, {#} y {#} cm.",
"<strong>Part {#}: along the axis of one loop.</strong> With a radius of {#} cm, record with the probe on the axis {#}, {#}, {#}, {#}, {#}, {#} and {#} cm from the center.":
  "<strong>Parte {#}: a lo largo del eje de una espira.</strong> Con un radio de {#} cm, registra con la sonda en el eje a {#}, {#}, {#}, {#}, {#}, {#} y {#} cm del centro.",
"<strong>Part {#}: turns.</strong> In the Solenoid setup (length {#} cm, radius {#} cm, {#} A), record with the probe at the center for {#}, {#}, {#}, {#}, {#} and {#} turns.":
  "<strong>Parte {#}: espiras.</strong> En la configuración Solenoide (longitud {#} cm, radio {#} cm, {#} A), registra con la sonda en el centro para {#}, {#}, {#}, {#}, {#} y {#} espiras.",
"<strong>Part {#}: long and short.</strong> With a radius of {#} cm and {#} A, keep {#} turns per meter while you change the length: record with the probe at the center for {#} turns in {#} cm, {#} in {#} cm, {#} in {#} cm, {#} in {#} cm and {#} in {#} cm.":
  "<strong>Parte {#}: largo y corto.</strong> Con un radio de {#} cm y {#} A, mantén {#} espiras por metro mientras cambias la longitud: registra con la sonda en el centro para {#} espiras en {#} cm, {#} en {#} cm, {#} en {#} cm, {#} en {#} cm y {#} en {#} cm.",
"<strong>Part {#}: inside and outside.</strong> In the Solenoid setup ({#} turns, {#} cm, {#} cm, {#} A), record with the probe in the middle plane of the solenoid at distances of {#}, {#}, {#} and {#} cm from the axis (inside the winding) and {#}, {#} and {#} cm (outside). Then record with the probe on the axis {#} cm and {#} cm from the center.":
  "<strong>Parte {#}: dentro y fuera.</strong> En la configuración Solenoide ({#} espiras, {#} cm, {#} cm, {#} A), registra con la sonda en el plano medio del solenoide a distancias de {#}, {#}, {#} y {#} cm del eje (dentro del devanado) y {#}, {#} y {#} cm (fuera). Luego registra con la sonda en el eje a {#} cm y {#} cm del centro.",
"<strong>Part {#}: electromagnet.</strong> In the Electromagnet on a supply setup ({#} turns, {#} cm long, radius {#} cm, {#} A on the battery, iron core in), record with the probe at the center. Then keep {#} turns, the radius and the current, and record at the center for lengths of {#}, {#}, {#}, {#} and {#} cm. Send this series; it goes to the Electromagnet table.":
  "<strong>Parte {#}: electroimán.</strong> En la configuración Electroimán con fuente ({#} espiras, {#} cm de largo, radio {#} cm, {#} A en la batería, núcleo de hierro puesto), registra con la sonda en el centro. Luego mantén {#} espiras, el radio y la corriente, y registra en el centro para longitudes de {#}, {#}, {#}, {#} y {#} cm. Envía esta serie; va a la tabla Electroimán.",
"<strong>Using the virtual apparatus.</strong> Clicking the plot below the picture puts the probe on the axis. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table. The last two columns are for you to fill in.":
  "<strong>Uso del aparato virtual.</strong> Hacer clic en la gráfica debajo de la imagen pone la sonda en el eje. Envía cada parte a la hoja de trabajo antes de borrar, para que cada parte tenga su propia copia de la tabla de Datos. Las últimas dos columnas son para que las llenes tú.",
"<span>C</span>Turns N":
  "<span>C</span>Espiras N",
"<span>D</span>Length L (cm)":
  "<span>D</span>Longitud L (cm)",
"<span>E</span>Radius R (cm)":
  "<span>E</span>Radio R (cm)",
"<span>F</span>Current I (A)":
  "<span>F</span>Corriente I (A)",
"<span>G</span>Probe z from the center (cm)":
  "<span>G</span>z de la sonda desde el centro (cm)",
"<span>H</span>Probe distance from the axis (cm)":
  "<span>H</span>Distancia de la sonda al eje (cm)",
"<span>I</span>Field along the axis at the probe (μT)":
  "<span>I</span>Campo a lo largo del eje en la sonda (μT)",
"<span>J</span>Field away from the axis at the probe (μT)":
  "<span>J</span>Campo perpendicular al eje en la sonda (μT)",
"<span>K</span>Field at the center (μT)":
  "<span>K</span>Campo en el centro (μT)",
"<span>L</span>Field at an end (μT)":
  "<span>L</span>Campo en un extremo (μT)",
"<span>N</span>Turns per meter n":
  "<span>N</span>Espiras por metro n",
"Turns N, row {#}":
  "Espiras N, fila {#}",
"Length L (cm), row {#}":
  "Longitud L (cm), fila {#}",
"Radius R (cm), row {#}":
  "Radio R (cm), fila {#}",
"Probe z from the center (cm), row {#}":
  "z de la sonda desde el centro (cm), fila {#}",
"Probe distance from the axis (cm), row {#}":
  "Distancia de la sonda al eje (cm), fila {#}",
"Field along the axis at the probe (μT), row {#}":
  "Campo a lo largo del eje en la sonda (μT), fila {#}",
"Field away from the axis at the probe (μT), row {#}":
  "Campo perpendicular al eje en la sonda (μT), fila {#}",
"Field at the center (μT), row {#}":
  "Campo en el centro (μT), fila {#}",
"Field at an end (μT), row {#}":
  "Campo en un extremo (μT), fila {#}",
"{#}/R ({#}/m), row {#}":
  "{#}/R ({#}/m), fila {#}",
"Turns per meter n, row {#}":
  "Espiras por metro n, fila {#}",
"<strong>Electromagnet.</strong> Part {#}. Work out the last two columns.":
  "<strong>Electroimán.</strong> Parte {#}. Calcula las últimas dos columnas.",
"<span>B</span>Turns N":
  "<span>B</span>Espiras N",
"<span>C</span>Length L (cm)":
  "<span>C</span>Longitud L (cm)",
"<span>D</span>Radius R (cm)":
  "<span>D</span>Radio R (cm)",
"<span>E</span>Current I (A)":
  "<span>E</span>Corriente I (A)",
"<span>H</span>Field at the center (μT)":
  "<span>H</span>Campo en el centro (μT)",
"<span>I</span>Gain":
  "<span>I</span>Ganancia",
"<span>K</span>Field without the core (μT)":
  "<span>K</span>Campo sin el núcleo (μT)",
"L/2R, row {#}":
  "L/2R, fila {#}",
"N_d, row {#}":
  "N_d, fila {#}",
"Gain, row {#}":
  "Ganancia, fila {#}",
"{#}/N_d, row {#}":
  "{#}/N_d, fila {#}",
"Field without the core (μT), row {#}":
  "Campo sin el núcleo (μT), fila {#}",
"For Part {#}, fill in \\(1/R\\) and graph the central field against \\(1/R\\). Is it a straight line through the origin? From the slope, find \\(\\mu_0\\).":
  "Para la Parte {#}, llena \\(1/R\\) y grafica el campo central en función de \\(1/R\\). ¿Es una recta que pasa por el origen? A partir de la pendiente, encuentra \\(\\mu_0\\).",
"For Part {#}, work out \\(\\mu_0 I R^2/\\left(2(R^2+z^2)^{3/2}\\right)\\) for each row and compare it with the field you recorded. At {#} cm, compare the field with what \\(1/z^3\\) alone would give, \\(\\mu_0 I R^2/(2z^3)\\). How far out must you go before the loop looks like a magnetic dipole?":
  "Para la Parte {#}, calcula \\(\\mu_0 I R^2/\\left(2(R^2+z^2)^{3/2}\\right)\\) para cada fila y compáralo con el campo que registraste. A {#} cm, compara el campo con lo que daría solo \\(1/z^3\\), \\(\\mu_0 I R^2/(2z^3)\\). ¿Qué tan lejos debes ir para que la espira parezca un dipolo magnético?",
"For Part {#}, fill in \\(n\\) and graph the central field against \\(n\\). Is the field proportional to \\(n\\)? Divide the slope by \\(I\\) and compare with \\(\\mu_0\\). Use the current sheet formula to explain the difference.":
  "Para la Parte {#}, llena \\(n\\) y grafica el campo central en función de \\(n\\). ¿Es el campo proporcional a \\(n\\)? Divide la pendiente entre \\(I\\) y compara con \\(\\mu_0\\). Usa la fórmula de la lámina de corriente para explicar la diferencia.",
"For Part {#}, divide each central field by \\(\\mu_0 n I\\) and compare with \\(L/\\sqrt{L^2 + 4R^2}\\). Find the ratio of the end field to the central field for each length. How long, compared with its radius, must a solenoid be for its central field to be within {#}% of \\(\\mu_0 n I\\)?":
  "Para la Parte {#}, divide cada campo central entre \\(\\mu_0 n I\\) y compara con \\(L/\\sqrt{L^2 + 4R^2}\\). Encuentra el cociente del campo en el extremo al campo central para cada longitud. ¿Qué tan largo, comparado con su radio, debe ser un solenoide para que su campo central esté dentro del {#}% de \\(\\mu_0 n I\\)?",
"For Part {#}, how uniform is the field across the middle of the solenoid, and how large is it outside compared with inside? How does the field change along the axis toward the end? Which of the facts used in the Ampère’s law argument hold here, and which only nearly hold?":
  "Para la Parte {#}, ¿qué tan uniforme es el campo a lo ancho del centro del solenoide, y qué tan grande es fuera comparado con dentro? ¿Cómo cambia el campo a lo largo del eje hacia el extremo? ¿Cuáles de los hechos que usa el argumento de la ley de Ampère se cumplen aquí, y cuáles solo casi se cumplen?",
"For Part {#}, divide each central field by the gain to find the field without the core, and check one row against the coil’s own central field, \\(\\mu_0NI/\\sqrt{L^2+4R^2}\\). Graph the gain against \\(1/N_d\\). For which cores is the gain close to \\(1/N_d\\), and why does \\(\\mu_r\\) hardly matter for them? Why does a short, fat core give so little gain, even though it is the same iron?":
  "Para la Parte {#}, divide cada campo central entre la ganancia para encontrar el campo sin el núcleo, y comprueba una fila con el propio campo central de la bobina, \\(\\mu_0NI/\\sqrt{L^2+4R^2}\\). Grafica la ganancia en función de \\(1/N_d\\). ¿Para qué núcleos la ganancia es cercana a \\(1/N_d\\), y por qué \\(\\mu_r\\) casi no importa para ellos? ¿Por qué un núcleo corto y grueso da tan poca ganancia, aunque sea el mismo hierro?",
"The model has no noise: fields are the exact sum over the turns, given to five significant figures. The approximations are in the formulas you compare with. A real winding has a wire of finite thickness, wound as a helix rather than as separate rings, so a real solenoid also carries current along its length and has a weak field outside like that of a single straight wire. Probe positions are set to {#} cm; near the wires the field changes fast, so a small error in position gives a large error in field there.":
  "El modelo no tiene ruido: los campos son la suma exacta sobre las espiras, dados con cinco cifras significativas. Las aproximaciones están en las fórmulas con las que comparas. Un devanado real tiene un alambre de grosor finito, enrollado como una hélice en vez de como anillos separados, así que un solenoide real también lleva corriente a lo largo de su longitud y tiene fuera un campo débil como el de un solo alambre recto. Las posiciones de la sonda se fijan con resolución de {#} cm; cerca de los alambres el campo cambia rápido, así que un error pequeño en la posición da ahí un error grande en el campo.",
"A toroid is a solenoid bent into a ring, with \\(N\\) turns. Use Ampère’s law with a circle of radius \\(r\\) inside the ring to find its field. Why is there no end effect?":
  "Un toroide es un solenoide doblado en forma de anillo, con \\(N\\) espiras. Usa la ley de Ampère con un círculo de radio \\(r\\) dentro del anillo para encontrar su campo. ¿Por qué no hay efecto de extremo?",
"An MRI magnet makes {#} T inside a long winding. How many ampere turns per meter does that need? Why are such magnets superconducting?":
  "Un imán de resonancia magnética produce {#} T dentro de un devanado largo. ¿Cuántos ampere vueltas por metro necesita? ¿Por qué esos imanes son superconductores?",
"Why does Part {#}’s field fall as \\(1/z^3\\) far from the loop, faster than the \\(1/r\\) of a straight wire?":
  "¿Por qué el campo de la Parte {#} disminuye como \\(1/z^3\\) lejos de la espira, más rápido que el \\(1/r\\) de un alambre recto?",
"The field at the end of a long solenoid is half the field at its center. Explain this with superposition: put two long solenoids end to end.":
  "El campo en el extremo de un solenoide largo es la mitad del campo en su centro. Explícalo con superposición: pon dos solenoides largos uno a continuación del otro.",
"Prelab answers, a Data table copy for each part, the graphs and fits, your values of \\(\\mu_0\\), the comparisons of Analysis items {#} and {#}, the Electromagnet table with its gain graph, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, una copia de la tabla de Datos para cada parte, las gráficas y los ajustes, tus valores de \\(\\mu_0\\), las comparaciones de los puntos {#} y {#} del Análisis, la tabla Electroimán con su gráfica de ganancia, y las respuestas a las preguntas. Identifica los datos simulados.",
"The coil's own field at the center divided by μ₀":
  "El propio campo de la bobina en el centro dividido entre μ₀",
"Length of the winding":
  "Longitud del devanado",
"Magnetization of the iron core":
  "Magnetización del núcleo de hierro",
"Saturation magnetization of iron":
  "Magnetización de saturación del hierro",
"Number of turns":
  "Número de espiras",
"Demagnetizing factor along the axis":
  "Factor de desmagnetización a lo largo del eje",
"Radius of the loop":
  "Radio de la espira",
"Position along the path (dl: a short piece of it)":
  "Posición a lo largo de la trayectoria (dl: un pedazo corto de ella)",
"Relative permeability of the iron":
  "Permeabilidad relativa del hierro",
"Turns per unit length":
  "Espiras por unidad de longitud",
"Radius of the circle inside the toroid":
  "Radio del círculo dentro del toroide",
"Angle from the axis to the rim of one end":
  "Ángulo desde el eje hasta el borde de un extremo",
"Angle from the axis to the rim of the other end":
  "Ángulo desde el eje hasta el borde del otro extremo",
"Distance along the axis from the loop's center":
  "Distancia a lo largo del eje desde el centro de la espira",
"Column O, row {#}":
  "Columna O, fila {#}",
"Heading of column O":
  "Encabezado de la columna O",
"Column O":
  "Columna O",
"Magnetic Fields of Currents":
  "Campos magnéticos de corrientes"
});
