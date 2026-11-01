/* ws/straight-wire-fields in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/straight-wire-fields', {
"Current I₁ (A)":
  "Corriente I₁ (A)",
"Current I₂ (A)":
  "Corriente I₂ (A)",
"Distance d between wires {#} and {#} (cm)":
  "Distancia d entre los alambres {#} y {#} (cm)",
"Probe at (x, y) (cm)":
  "Sonda en (x, y) (cm)",
"Probe distance r from wire {#} (cm)":
  "Distancia r de la sonda al alambre {#} (cm)",
"Field B at the probe (μT)":
  "Campo B en la sonda (μT)",
"Direction of B (° from +x)":
  "Dirección de B (° desde +x)",
"Force per meter on wire {#} (μN/m, + toward wire {#})":
  "Fuerza por metro sobre el alambre {#} (μN/m, + hacia el alambre {#})",
"Amperian loop":
  "Lazo amperiano",
"Current through the loop (A)":
  "Corriente a través del lazo (A)",
"Circulation of B around the loop (μT·m)":
  "Circulación de B alrededor del lazo (μT·m)",
"Fields and Forces of Straight Wires | VirtualDemos":
  "Campos y fuerzas de alambres rectos | VirtualDemos",
"Fields and Forces of Straight Wires":
  "Campos y fuerzas de alambres rectos",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} to §{#} and §{#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} a §{#} y §{#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Where it is in the demo:</strong> Magnetic Fields of Currents, Straight wires view. The setups used here are One wire, Two wires (parallel and opposite currents) and Ampère’s law.":
  "<strong>Dónde está en la demo:</strong> Campos magnéticos de corrientes, vista Alambres rectos. Las configuraciones que se usan aquí son Un alambre, Dos alambres (corrientes paralelas y opuestas) y Ley de Ampère.",
"<strong>Using the demo.</strong> Long straight wires cross the page; a dot means current out of the page and a cross means current into it. Drag new wires onto the page from the tray in the corner of the picture (up to six), and drop a wire back on the tray to remove it. Drag a wire, the probe or the Amperian loop; click a wire to set its current. The Probe section gives the field at the probe and its direction, the Force between currents section gives the force per meter between two wires, and the Amperian loop (circle or rectangle, either direction) shows the current through it and the numerical value of \\(\\oint \\vec B\\cdot d\\vec l\\) around it. Positions are in centimeters, to {#} cm.":
  "<strong>Uso de la demo.</strong> Alambres largos y rectos atraviesan la página; un punto indica corriente que sale de la página y una cruz indica corriente que entra. Arrastra alambres nuevos a la página desde la bandeja de la esquina de la imagen (hasta seis), y suelta un alambre de vuelta en la bandeja para quitarlo. Arrastra un alambre, la sonda o el lazo amperiano; haz clic en un alambre para fijar su corriente. La sección Sonda da el campo en la sonda y su dirección, la sección Fuerza entre corrientes da la fuerza por metro entre dos alambres, y el lazo amperiano (círculo o rectángulo, en cualquier sentido) muestra la corriente a través de él y el valor numérico de \\(\\oint \\vec B\\cdot d\\vec l\\) a su alrededor. Las posiciones están en centímetros, con resolución de {#} cm.",
"<strong>What the demo models.</strong> Each wire is infinitely long and thin, with field \\(\\mu_0 I/(2\\pi r)\\) circling it, and the field of several wires is the vector sum. The force per meter on a wire is \\(I\\,\\hat z\\times\\vec B\\) from the others’ field. The demo does not use Ampère’s law to find \\(\\oint \\vec B\\cdot d\\vec l\\): it adds up \\(\\vec B\\cdot d\\vec l\\) around the loop numerically (adaptive Gauss and Kronrod quadrature, relative error below \\(10^{-10}\\)). \\(\\mu_0 = 1.25663706127\\times10^{-6}\\ \\mathrm{T\\cdot m/A}\\) (CODATA {#}). Simulated data.":
  "<strong>Qué modela la demo.</strong> Cada alambre es infinitamente largo y delgado, con un campo \\(\\mu_0 I/(2\\pi r)\\) que lo rodea, y el campo de varios alambres es la suma vectorial. La fuerza por metro sobre un alambre es \\(I\\,\\hat z\\times\\vec B\\) debida al campo de los demás. La demo no usa la ley de Ampère para encontrar \\(\\oint \\vec B\\cdot d\\vec l\\): suma \\(\\vec B\\cdot d\\vec l\\) alrededor del lazo de forma numérica (cuadratura adaptativa de Gauss y Kronrod, error relativo menor que \\(10^{-10}\\)). \\(\\mu_0 = 1.25663706127\\times10^{-6}\\ \\mathrm{T\\cdot m/A}\\) (CODATA {#}). Datos simulados.",
"Measure how the magnetic field of a long straight wire depends on the current and the distance, find the force between two parallel currents, and test Ampère’s law around loops of different shapes.":
  "Mide cómo depende el campo magnético de un alambre largo y recto de la corriente y de la distancia, encuentra la fuerza entre dos corrientes paralelas y pon a prueba la ley de Ampère alrededor de lazos de distintas formas.",
"The Biot and Savart law gives the field of a short piece \\(d\\vec l\\) of a wire carrying current \\(I\\), at a point a distance \\(r\\) away along the unit vector \\(\\hat r\\):":
  "La ley de Biot y Savart da el campo de un trozo corto \\(d\\vec l\\) de un alambre que lleva una corriente \\(I\\), en un punto a una distancia \\(r\\) a lo largo del vector unitario \\(\\hat r\\):",
"\\[d\\vec B = \\frac{\\mu_0}{4\\pi}\\,\\frac{I\\,d\\vec l\\times\\hat r}{r^2}.\\]":
  "\\[d\\vec B = \\frac{\\mu_0}{4\\pi}\\,\\frac{I\\,d\\vec l\\times\\hat r}{r^2}.\\]",
"Adding up the pieces of a long straight wire gives a field that circles the wire, at right angles to the line from the wire, with size":
  "Sumar los trozos de un alambre largo y recto da un campo que rodea al alambre, perpendicular a la línea desde el alambre, de magnitud",
"\\[B = \\frac{\\mu_0 I}{2\\pi r}.\\]":
  "\\[B = \\frac{\\mu_0 I}{2\\pi r}.\\]",
"Point your right thumb along the current: your fingers curl the way \\(\\vec B\\) goes. A current out of the page has a counterclockwise field.":
  "Apunta tu pulgar derecho en el sentido de la corriente: tus dedos se curvan en el sentido de \\(\\vec B\\). Una corriente que sale de la página tiene un campo en sentido antihorario.",
"A second wire parallel to the first, a distance \\(d\\) away, sits in that field and feels a force \\(\\vec F = I_2\\vec L\\times\\vec B_1\\). Per meter of length,":
  "Un segundo alambre paralelo al primero, a una distancia \\(d\\), está en ese campo y siente una fuerza \\(\\vec F = I_2\\vec L\\times\\vec B_1\\). Por metro de longitud,",
"\\[\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}.\\]":
  "\\[\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}.\\]",
"Parallel currents attract and opposite currents repel, and the forces on the two wires are equal and opposite.":
  "Las corrientes paralelas se atraen y las opuestas se repelen, y las fuerzas sobre los dos alambres son iguales y opuestas.",
"Ampère’s law says that around any closed loop,":
  "La ley de Ampère dice que alrededor de cualquier lazo cerrado,",
"\\[\\oint \\vec B\\cdot d\\vec l = \\mu_0 I_{\\text{enc}},\\]":
  "\\[\\oint \\vec B\\cdot d\\vec l = \\mu_0 I_{\\text{enc}},\\]",
"where \\(I_{\\text{enc}}\\) is the current through the loop, counted positive along your right thumb when your fingers curl along the loop’s direction (out of the page for a counterclockwise loop). Currents outside the loop change \\(\\vec B\\) on the loop but add nothing to the integral.":
  "donde \\(I_{\\text{enc}}\\) es la corriente a través del lazo, contada como positiva en el sentido de tu pulgar derecho cuando tus dedos se curvan en el sentido del lazo (hacia afuera de la página para un lazo en sentido antihorario). Las corrientes fuera del lazo cambian \\(\\vec B\\) sobre el lazo pero no aportan nada a la integral.",
"Find the field {#} cm from a long straight wire carrying {#} A.":
  "Encuentra el campo a {#} cm de un alambre largo y recto que lleva {#} A.",
"Two long parallel wires {#} cm apart each carry {#} A in the same direction. Find the force per meter on each. Do they attract or repel?":
  "Dos alambres largos y paralelos separados {#} cm llevan cada uno {#} A en el mismo sentido. Encuentra la fuerza por metro sobre cada uno. ¿Se atraen o se repelen?",
"For the wires in item {#}, what is the field midway between them? What is it if one current is reversed?":
  "Para los alambres del punto {#}, ¿cuál es el campo a la mitad entre ellos? ¿Cuál es si se invierte una de las corrientes?",
"A loop surrounds a wire carrying {#} A out of the page and a wire carrying {#} A into the page. Find \\(\\oint \\vec B\\cdot d\\vec l\\) counterclockwise around the loop. Does the answer depend on where the wires are inside the loop, or on the loop’s shape?":
  "Un lazo rodea un alambre que lleva {#} A hacia afuera de la página y un alambre que lleva {#} A hacia adentro de la página. Encuentra \\(\\oint \\vec B\\cdot d\\vec l\\) en sentido antihorario alrededor del lazo. ¿Depende la respuesta de dónde están los alambres dentro del lazo, o de la forma del lazo?",
"There are no hazards in the simulation. Real wires carrying tens of amperes get hot; laboratory experiments use short pulses of current or thick wires.":
  "No hay peligros en la simulación. Los alambres reales que llevan decenas de amperes se calientan; los experimentos de laboratorio usan pulsos cortos de corriente o alambres gruesos.",
"<strong>Part {#}: field against distance.</strong> In the One wire setup ({#} A out of the page), record the field with the probe on the line to the right of the wire at distances of {#}, {#}, {#}, {#}, {#} and {#} cm.":
  "<strong>Parte {#}: campo en función de la distancia.</strong> En la configuración Un alambre ({#} A hacia afuera de la página), registra el campo con la sonda en la línea a la derecha del alambre a distancias de {#}, {#}, {#}, {#}, {#} y {#} cm.",
"<strong>Part {#}: field against current.</strong> With the probe {#} cm from the wire, record the field for currents of {#}, {#}, {#}, {#}, −{#} and −{#} A.":
  "<strong>Parte {#}: campo en función de la corriente.</strong> Con la sonda a {#} cm del alambre, registra el campo para corrientes de {#}, {#}, {#}, {#}, −{#} y −{#} A.",
"<strong>Part {#}: direction of the field.</strong> With {#} A out of the page, record the field with the probe {#} cm from the wire on its right, above it, on its left and below it. Then reverse the current and record once more with the probe above the wire.":
  "<strong>Parte {#}: dirección del campo.</strong> Con {#} A hacia afuera de la página, registra el campo con la sonda a {#} cm del alambre a su derecha, arriba de él, a su izquierda y debajo de él. Luego invierte la corriente y registra una vez más con la sonda arriba del alambre.",
"<strong>Part {#}: two wires, distance.</strong> In the Two wires, parallel currents setup ({#} A each, {#} cm apart), record with the probe at the midpoint and {#} cm above it. Then record with the probe at the midpoint and the wires {#}, {#}, {#}, {#} and {#} cm apart.":
  "<strong>Parte {#}: dos alambres, distancia.</strong> En la configuración Dos alambres, corrientes paralelas ({#} A cada uno, separados {#} cm), registra con la sonda en el punto medio y {#} cm arriba de él. Luego registra con la sonda en el punto medio y los alambres separados {#}, {#}, {#}, {#} y {#} cm.",
"<strong>Part {#}: two wires, current.</strong> With the wires {#} cm apart and the probe at their midpoint, record with the second wire carrying {#}, {#} and −{#} A. Then record the Two wires, opposite currents setup with the probe at the midpoint.":
  "<strong>Parte {#}: dos alambres, corriente.</strong> Con los alambres separados {#} cm y la sonda en su punto medio, registra con el segundo alambre llevando {#}, {#} y −{#} A. Luego registra la configuración Dos alambres, corrientes opuestas con la sonda en el punto medio.",
"<strong>Part {#}: Ampère’s law.</strong> In the Ampère’s law setup, record the reading as it opens. Then record with the loop clockwise; as a rectangle; moved so it also surrounds the third wire; and moved so it surrounds no wire. Next, in the One wire setup with the Amperian loop shown, record with a circle centered on the wire of radius {#}, {#} and {#} cm, then with a circle of radius {#} cm whose center is {#} cm from the wire, and with a circle that does not surround the wire.":
  "<strong>Parte {#}: ley de Ampère.</strong> En la configuración Ley de Ampère, registra la lectura tal como se abre. Luego registra con el lazo en sentido horario; como rectángulo; movido para que también rodee al tercer alambre; y movido para que no rodee ningún alambre. Después, en la configuración Un alambre con el lazo amperiano visible, registra con un círculo centrado en el alambre de radio {#}, {#} y {#} cm, luego con un círculo de radio {#} cm cuyo centro está a {#} cm del alambre, y con un círculo que no rodea al alambre.",
"<strong>Using the virtual apparatus.</strong> The force on wire {#} is recorded only when there are exactly two wires; a positive value means wire {#} is pulled toward wire {#}. A reading with a wire on the Amperian loop cannot be recorded, since \\(\\oint \\vec B\\cdot d\\vec l\\) is not defined there. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table. The last two columns are for you to fill in.":
  "<strong>Uso del aparato virtual.</strong> La fuerza sobre el alambre {#} se registra solo cuando hay exactamente dos alambres; un valor positivo significa que el alambre {#} es atraído hacia el alambre {#}. No se puede registrar una lectura con un alambre sobre el lazo amperiano, ya que \\(\\oint \\vec B\\cdot d\\vec l\\) no está definida ahí. Envía cada parte a la hoja de trabajo antes de borrar, para que cada parte tenga su propia copia de la tabla de datos. Las dos últimas columnas son para que tú las llenes.",
"<span>C</span>Current I₁ (A)":
  "<span>C</span>Corriente I₁ (A)",
"<span>D</span>Current I₂ (A)":
  "<span>D</span>Corriente I₂ (A)",
"<span>E</span>Distance d between wires {#} and {#} (cm)":
  "<span>E</span>Distancia d entre los alambres {#} y {#} (cm)",
"<span>F</span>Probe at (x, y) (cm)":
  "<span>F</span>Sonda en (x, y) (cm)",
"<span>G</span>Probe distance r from wire {#} (cm)":
  "<span>G</span>Distancia r de la sonda al alambre {#} (cm)",
"<span>H</span>Field B at the probe (μT)":
  "<span>H</span>Campo B en la sonda (μT)",
"<span>I</span>Direction of B (° from +x)":
  "<span>I</span>Dirección de B (° desde +x)",
"<span>J</span>Force per meter on wire {#} (μN/m, + toward wire {#})":
  "<span>J</span>Fuerza por metro sobre el alambre {#} (μN/m, + hacia el alambre {#})",
"<span>K</span>Amperian loop":
  "<span>K</span>Lazo amperiano",
"<span>L</span>Current through the loop (A)":
  "<span>L</span>Corriente a través del lazo (A)",
"<span>M</span>Circulation of B around the loop (μT·m)":
  "<span>M</span>Circulación de B alrededor del lazo (μT·m)",
"Current I₁ (A), row {#}":
  "Corriente I₁ (A), fila {#}",
"Current I₂ (A), row {#}":
  "Corriente I₂ (A), fila {#}",
"Distance d between wires {#} and {#} (cm), row {#}":
  "Distancia d entre los alambres {#} y {#} (cm), fila {#}",
"Probe at (x, y) (cm), row {#}":
  "Sonda en (x, y) (cm), fila {#}",
"Probe distance r from wire {#} (cm), row {#}":
  "Distancia r de la sonda al alambre {#} (cm), fila {#}",
"Field B at the probe (μT), row {#}":
  "Campo B en la sonda (μT), fila {#}",
"Direction of B (° from +x), row {#}":
  "Dirección de B (° desde +x), fila {#}",
"Force per meter on wire {#} (μN/m, + toward wire {#}), row {#}":
  "Fuerza por metro sobre el alambre {#} (μN/m, + hacia el alambre {#}), fila {#}",
"Amperian loop, row {#}":
  "Lazo amperiano, fila {#}",
"Current through the loop (A), row {#}":
  "Corriente a través del lazo (A), fila {#}",
"Circulation of B around the loop (μT·m), row {#}":
  "Circulación de B alrededor del lazo (μT·m), fila {#}",
"{#}/r ({#}/m), row {#}":
  "{#}/r ({#}/m), fila {#}",
"{#}/d ({#}/m), row {#}":
  "{#}/d ({#}/m), fila {#}",
"For Part {#}, fill in \\(1/r\\) and graph \\(B\\) against \\(1/r\\). Is it a straight line through the origin? From the slope, find \\(\\mu_0\\).":
  "Para la Parte {#}, llena \\(1/r\\) y grafica \\(B\\) en función de \\(1/r\\). ¿Es una recta que pasa por el origen? A partir de la pendiente, encuentra \\(\\mu_0\\).",
"For Part {#}, graph \\(B\\) against the size of the current. From the slope, find \\(\\mu_0\\) again. How does the direction of the field change when the current reverses?":
  "Para la Parte {#}, grafica \\(B\\) en función de la magnitud de la corriente. A partir de la pendiente, encuentra \\(\\mu_0\\) otra vez. ¿Cómo cambia la dirección del campo cuando la corriente se invierte?",
"For Part {#}, compare the direction of \\(\\vec B\\) at each probe position with the direction from the wire to the probe. What angle is between them? Show that the directions agree with the right hand rule, and that reversing the current reverses the field.":
  "Para la Parte {#}, compara la dirección de \\(\\vec B\\) en cada posición de la sonda con la dirección del alambre a la sonda. ¿Qué ángulo hay entre ellas? Muestra que las direcciones concuerdan con la regla de la mano derecha, y que invertir la corriente invierte el campo.",
"For Parts {#} and {#}, explain the field at the midpoint for parallel and for opposite currents, and the field {#} cm above the midpoint, as the vector sum of the two wires’ fields (check one of them by working out each wire’s field and adding).":
  "Para las Partes {#} y {#}, explica el campo en el punto medio para corrientes paralelas y para corrientes opuestas, y el campo {#} cm arriba del punto medio, como la suma vectorial de los campos de los dos alambres (comprueba uno de ellos calculando el campo de cada alambre y sumando).",
"For Part {#}, fill in \\(1/d\\), graph \\(F/L\\) against \\(1/d\\), and find \\(\\mu_0\\) from the slope. For Part {#}, graph \\(F/L\\) against \\(I_2\\) and find \\(\\mu_0\\) again. What does the sign of \\(F/L\\) tell you?":
  "Para la Parte {#}, llena \\(1/d\\), grafica \\(F/L\\) en función de \\(1/d\\) y encuentra \\(\\mu_0\\) a partir de la pendiente. Para la Parte {#}, grafica \\(F/L\\) en función de \\(I_2\\) y encuentra \\(\\mu_0\\) otra vez. ¿Qué te dice el signo de \\(F/L\\)?",
"For Part {#}, divide the circulation by the current through the loop for every row with current inside. What do you get, and does it depend on the loop’s shape, size, position or direction? What happens with no current inside, even though \\(B\\) on the loop is not zero?":
  "Para la Parte {#}, divide la circulación entre la corriente a través del lazo para cada fila con corriente dentro. ¿Qué obtienes, y depende de la forma, el tamaño, la posición o el sentido del lazo? ¿Qué pasa sin corriente dentro, aunque \\(B\\) sobre el lazo no sea cero?",
"For the circles centered on the wire in Part {#}, \\(B\\) is the same all around the loop and along it, so \\(\\oint \\vec B\\cdot d\\vec l = B\\,(2\\pi r)\\). Use this and your circulation to find \\(B\\) at {#}, {#} and {#} cm, and compare with Part {#}. Why does the same step not work for the off center circle, although its circulation is the same?":
  "Para los círculos centrados en el alambre de la Parte {#}, \\(B\\) es el mismo en todo el lazo y a lo largo de él, así que \\(\\oint \\vec B\\cdot d\\vec l = B\\,(2\\pi r)\\). Usa esto y tu circulación para encontrar \\(B\\) a {#}, {#} y {#} cm, y compáralo con la Parte {#}. ¿Por qué no funciona el mismo paso para el círculo descentrado, aunque su circulación sea la misma?",
"The model has no noise: the field is given to four significant figures and the circulation to six, and positions are set to {#} cm, so a distance read as {#} cm could be up to {#} cm off when you place the probe by hand ({#}% at {#} cm). Work out what that does to \\(B\\) at {#} cm. In a real experiment the wires are not infinitely long or thin, Earth’s field (about {#} μT) adds to the wire’s, and a probe has a size of its own.":
  "El modelo no tiene ruido: el campo se da con cuatro cifras significativas y la circulación con seis, y las posiciones se fijan con resolución de {#} cm, así que una distancia leída como {#} cm podría estar desviada hasta {#} cm cuando colocas la sonda a mano ({#}% a {#} cm). Calcula qué le hace eso a \\(B\\) a {#} cm. En un experimento real los alambres no son infinitamente largos ni delgados, el campo de la Tierra (cerca de {#} μT) se suma al del alambre, y una sonda tiene un tamaño propio.",
"Two long wires {#} m apart each carry {#} A. Find the force per meter between them. This force was used to define the ampere until {#}.":
  "Dos alambres largos separados {#} m llevan cada uno {#} A. Encuentra la fuerza por metro entre ellos. Esta fuerza se usó para definir el ampere hasta {#}.",
"A power line {#} m overhead carries {#} A. Compare its field at the ground with Earth’s field. Should you worry about a compass reading under it?":
  "Una línea eléctrica a {#} m de altura lleva {#} A. Compara su campo en el suelo con el campo de la Tierra. ¿Deberías preocuparte por la lectura de una brújula debajo de ella?",
"Why can Ampère’s law alone not give the field at the probe in the Ampère’s law setup, although the law holds for every loop there?":
  "¿Por qué la ley de Ampère por sí sola no puede dar el campo en la sonda en la configuración Ley de Ampère, aunque la ley se cumple para todo lazo ahí?",
"Use the Biot and Savart law to explain why the field of a wire only {#} cm long, measured {#} cm from its middle, is smaller than \\(\\mu_0 I/(2\\pi r)\\).":
  "Usa la ley de Biot y Savart para explicar por qué el campo de un alambre de solo {#} cm de largo, medido a {#} cm de su centro, es menor que \\(\\mu_0 I/(2\\pi r)\\).",
"Prelab answers, a Data table copy for each part, the graphs and fits, your values of \\(\\mu_0\\), and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, una copia de la tabla de datos para cada parte, las gráficas y los ajustes, tus valores de \\(\\mu_0\\), y las respuestas a las preguntas. Identifica los datos simulados.",
"Field of the first wire":
  "Campo del primer alambre",
"Force between two wires":
  "Fuerza entre dos alambres",
"Current in the first wire":
  "Corriente en el primer alambre",
"Current in the second wire":
  "Corriente en el segundo alambre",
"Current through the loop":
  "Corriente a través del lazo",
"Length of the wire":
  "Longitud del alambre",
"Distance between two wires":
  "Distancia entre dos alambres",
"Unit vector from the piece of wire toward the point":
  "Vector unitario del trozo de alambre hacia el punto",
"Unit vector along the wire, out of the page":
  "Vector unitario a lo largo del alambre, hacia afuera de la página",
"Position along the path (dl: a short piece of wire or path)":
  "Posición a lo largo de la trayectoria (dl: un trozo corto de alambre o de trayectoria)",
"Distance from the wire":
  "Distancia al alambre",
"Column P, row {#}":
  "Columna P, fila {#}",
"Heading of column P":
  "Encabezado de la columna P",
"Column P":
  "Columna P",
"Magnetic Fields of Currents":
  "Campos magnéticos de corrientes"
});
