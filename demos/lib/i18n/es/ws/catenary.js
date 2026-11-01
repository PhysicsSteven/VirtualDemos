/* ws/catenary in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/catenary', {
"Length S (m)":
  "Longitud S (m)",
"Sag d (m)":
  "Flecha d (m)",
"Tension in a Hanging Chain | VirtualDemos":
  "Tensión en una cadena colgante | VirtualDemos",
"Tension in a Hanging Chain":
  "Tensión en una cadena colgante",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} and {#} (the equilibrium conditions applied to a flexible chain; the catenary curve itself goes beyond the textbook). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} y {#} (las condiciones de equilibrio aplicadas a una cadena flexible; la curva catenaria en sí va más allá del libro de texto). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Hanging chain; Uneven supports; Chain vs parabola; Tension along the chain; Arch; Pull it tight.":
  "<strong>Configuraciones en la demo:</strong> Cadena colgante; Apoyos desnivelados; Cadena contra parábola; Tensión a lo largo de la cadena; Arco; Tensarla.",
"Drag the two supports, or select one on the picture with the {#} or {#} key and move it with the arrow keys: each press moves it {#} m, or {#} m with Shift. The length slider sets the chain’s length \\(S\\), and dragging the grip at the bottom of the chain does the same. Moving a support keeps the length.":
  "Arrastra los dos apoyos, o selecciona uno en la imagen con la tecla {#} o {#} y muévelo con las flechas: cada pulsación lo mueve {#} m, o {#} m con Shift. El control deslizante de longitud fija la longitud de la cadena \\(S\\), y arrastrar la agarradera en la parte inferior de la cadena hace lo mismo. Mover un apoyo conserva la longitud.",
"The readouts give the span, the sag \\(d\\) (the depth of the chain below the straight line through the supports, at its deepest), the constant \\(a\\) of the curve, the horizontal part \\(H\\) of the tension, and the tension at each support. The graph at the lower right shows the largest tension and \\(H\\) against the sag for these supports.":
  "Las lecturas dan el claro, la flecha \\(d\\) (la profundidad de la cadena por debajo de la recta que pasa por los apoyos, en su punto más hondo), la constante \\(a\\) de la curva, la parte horizontal \\(H\\) de la tensión y la tensión en cada apoyo. La gráfica de abajo a la derecha muestra la tensión máxima y \\(H\\) en función de la flecha para estos apoyos.",
"Two markers on the chain choose a piece of it, whose free body diagram is drawn at the lower left.":
  "Dos marcadores sobre la cadena eligen un tramo de ella, cuyo diagrama de cuerpo libre se dibuja abajo a la izquierda.",
"Record reading stores the support positions, the length, \\(\\lambda\\), the sag and the forces (to {#} significant figures, lengths to {#} mm). Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda las posiciones de los apoyos, la longitud, \\(\\lambda\\), la flecha y las fuerzas (con {#} cifras significativas, las longitudes con resolución de {#} mm). Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"A perfectly flexible chain that does not stretch, with uniform mass per length \\(\\lambda\\), at rest, with \\(g = 9.81\\ \\text{m/s}^2\\). The curve is the exact catenary through both supports with arc length \\(S\\), found numerically to full machine precision; the links are drawn for looks only.":
  "Una cadena perfectamente flexible que no se estira, con masa por unidad de longitud uniforme \\(\\lambda\\), en reposo, con \\(g = 9.81\\ \\text{m/s}^2\\). La curva es la catenaria exacta que pasa por ambos apoyos con longitud de arco \\(S\\), encontrada numéricamente con toda la precisión de la máquina; los eslabones se dibujan solo por estética.",
"A chain exactly as long as the distance between its supports would need an infinite tension, so the demo stops the length at that distance.":
  "Una cadena exactamente tan larga como la distancia entre sus apoyos necesitaría una tensión infinita, así que la demo limita la longitud a esa distancia.",
"Measure how the tension in a hanging chain depends on how far it sags, and test the rule that the tension at any point is set by that point’s height.":
  "Mide cómo depende la tensión en una cadena colgante de cuánto se comba, y pon a prueba la regla de que la tensión en cualquier punto está fijada por la altura de ese punto.",
"Cut out the piece of chain between its lowest point and any other point. Only three forces act on it: a horizontal pull \\(H\\) at the bottom, the pull \\(T\\) of the rest of the chain along the chain at the top, and its weight \\(\\lambda g s\\), where \\(s\\) is the length of the piece. Equilibrium (§{#}) gives":
  "Recorta el tramo de cadena entre su punto más bajo y cualquier otro punto. Solo tres fuerzas actúan sobre él: un tirón horizontal \\(H\\) abajo, el tirón \\(T\\) del resto de la cadena a lo largo de la cadena arriba, y su peso \\(\\lambda g s\\), donde \\(s\\) es la longitud del tramo. El equilibrio (§{#}) da",
"\\[T_x = H,\\qquad T_y = \\lambda g\\,s .\\]":
  "\\[T_x = H,\\qquad T_y = \\lambda g\\,s .\\]",
"So the horizontal part of the tension is the same everywhere along the chain, and the vertical part grows with the length of chain below. The curve that does this is the <strong>catenary</strong> \\(y = a\\cosh(x/a)\\) (measured from a line a distance \\(a\\) below the lowest point, the directrix), with \\(H = \\lambda g a\\). Along it the tension is":
  "Así que la parte horizontal de la tensión es la misma en toda la cadena, y la parte vertical crece con la longitud de cadena que hay debajo. La curva que hace esto es la <strong>catenaria</strong> \\(y = a\\cosh(x/a)\\) (medida desde una recta a una distancia \\(a\\) por debajo del punto más bajo, la directriz), con \\(H = \\lambda g a\\). A lo largo de ella la tensión es",
"\\[T = \\sqrt{H^2 + T_y^2} = \\lambda g\\,y,\\]":
  "\\[T = \\sqrt{H^2 + T_y^2} = \\lambda g\\,y,\\]",
"the weight per length times the height above the directrix. For any two points on one chain, then,":
  "el peso por unidad de longitud por la altura sobre la directriz. Para dos puntos cualesquiera de una misma cadena, entonces,",
"\\[T_A - T_B = \\lambda g\\,(y_A - y_B).\\]":
  "\\[T_A - T_B = \\lambda g\\,(y_A - y_B).\\]",
"For level supports a distance \\(\\Delta x\\) apart, a shallow chain (sag \\(d\\) much less than \\(\\Delta x\\)) is very nearly a parabola, and":
  "Para apoyos al mismo nivel separados una distancia \\(\\Delta x\\), una cadena poco combada (flecha \\(d\\) mucho menor que \\(\\Delta x\\)) es casi exactamente una parábola, y",
"\\[H \\approx \\frac{\\lambda g\\,\\Delta x^2}{8d}.\\]":
  "\\[H \\approx \\frac{\\lambda g\\,\\Delta x^2}{8d}.\\]",
"The tension grows without limit as the sag goes to zero. A fuller expansion gives \\(H \\approx \\lambda g\\left(\\dfrac{\\Delta x^2}{8d} + \\dfrac{d}{6}\\right)\\).":
  "La tensión crece sin límite cuando la flecha tiende a cero. Un desarrollo más completo da \\(H \\approx \\lambda g\\left(\\dfrac{\\Delta x^2}{8d} + \\dfrac{d}{6}\\right)\\).",
"Draw the free body diagram of the piece of chain between the lowest point and one support. Explain why the support must pull up with half the chain’s weight when the supports are level.":
  "Dibuja el diagrama de cuerpo libre del tramo de cadena entre el punto más bajo y un apoyo. Explica por qué el apoyo debe jalar hacia arriba con la mitad del peso de la cadena cuando los apoyos están al mismo nivel.",
"A chain with \\(\\lambda = 2.0\\ \\text{kg/m}\\) hangs between level supports {#} m apart with a sag of {#} m. Estimate \\(H\\) from the shallow chain formula.":
  "Una cadena con \\(\\lambda = 2.0\\ \\text{kg/m}\\) cuelga entre apoyos al mismo nivel separados {#} m con una flecha de {#} m. Estima \\(H\\) con la fórmula de la cadena poco combada.",
"Support B is lowered while A stays put. Predict which support’s tension will be larger, and why.":
  "Se baja el apoyo B mientras A se queda en su lugar. Predice qué apoyo tendrá la mayor tensión, y por qué.",
"Why can no chain, however strong, be pulled perfectly straight between two supports?":
  "¿Por qué ninguna cadena, por fuerte que sea, puede tensarse perfectamente recta entre dos apoyos?",
"There is no physical apparatus. A real chain or cable under high tension can whip violently if it breaks: never stand in line with a loaded cable.":
  "No hay aparato físico. Una cadena o un cable real bajo alta tensión puede sacudirse con violencia si se rompe: nunca te pongas en línea con un cable cargado.",
"<strong>Part {#}: sag scan.</strong> Use the Hanging chain setup: level supports {#} m apart and \\(\\lambda = 2.0\\ \\text{kg/m}\\). Record the sag, \\(H\\) and the support tensions for chain lengths of {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} m. Send the scan to the worksheet, then clear the demo’s readings.":
  "<strong>Parte {#}: barrido de la flecha.</strong> Usa la configuración Cadena colgante: apoyos al mismo nivel separados {#} m y \\(\\lambda = 2.0\\ \\text{kg/m}\\). Registra la flecha, \\(H\\) y las tensiones en los apoyos para longitudes de cadena de {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} m. Envía el barrido a la hoja de trabajo y luego borra las lecturas de la demo.",
"<strong>Part {#}: uneven supports.</strong> Choose the Hanging chain setup again ({#} m of chain). Keep support A where it is and lower support B in steps of {#} m, from level to {#} m below A, recording at each step. Send this series to the worksheet as a new copy of the table.":
  "<strong>Parte {#}: apoyos desnivelados.</strong> Elige de nuevo la configuración Cadena colgante ({#} m de cadena). Deja el apoyo A donde está y baja el apoyo B en pasos de {#} m, desde el mismo nivel hasta {#} m por debajo de A, registrando en cada paso. Envía esta serie a la hoja de trabajo como una copia nueva de la tabla.",
"<strong>Part {#}: a piece of the chain.</strong> In the Tension along the chain setup, choose three different pieces of the chain with the markers. For each, note the length of the piece, its weight and the horizontal and vertical parts of the pull at each end from the free body diagram readouts. Record these in the notes under your Part {#} table.":
  "<strong>Parte {#}: un tramo de la cadena.</strong> En la configuración Tensión a lo largo de la cadena, elige tres tramos distintos de la cadena con los marcadores. Para cada uno, anota la longitud del tramo, su peso y las partes horizontal y vertical del tirón en cada extremo según las lecturas del diagrama de cuerpo libre. Anótalos en las notas bajo tu tabla de la Parte {#}.",
"<span>B</span>Length \\(S\\) (m)":
  "<span>B</span>Longitud \\(S\\) (m)",
"<span>E</span>Sag \\(d\\) (m)":
  "<span>E</span>Flecha \\(d\\) (m)",
"Length S (m), row {#}":
  "Longitud S (m), fila {#}",
"y_A (m), row {#}":
  "y_A (m), fila {#}",
"y_B (m), row {#}":
  "y_B (m), fila {#}",
"Sag d (m), row {#}":
  "Flecha d (m), fila {#}",
"H (N), row {#}":
  "H (N), fila {#}",
"T_A (N), row {#}":
  "T_A (N), fila {#}",
"T_B (N), row {#}":
  "T_B (N), fila {#}",
"{#}/d ({#}/m), row {#}":
  "{#}/d ({#}/m), fila {#}",
"y_A - y_B (m), row {#}":
  "y_A - y_B (m), fila {#}",
"T_A - T_B (N), row {#}":
  "T_A - T_B (N), fila {#}",
"\\(y_A\\) and \\(y_B\\) are the heights of the supports. Work out the last three columns yourself. Record \\(\\lambda\\) and the span for each copy of the table.":
  "\\(y_A\\) y \\(y_B\\) son las alturas de los apoyos. Calcula tú las últimas tres columnas. Anota \\(\\lambda\\) y el claro para cada copia de la tabla.",
"Part {#}: plot \\(H\\) against \\(1/d\\). Fit a line to the five shallowest rows (the largest \\(1/d\\)) and compare its slope with \\(\\lambda g\\,\\Delta x^2/8\\); the graph uses only rows with a number in both columns, so fill in \\(1/d\\) for those five rows first. Then fill in the rest and look at where the deeper rows fall compared with that line, and explain the difference using the fuller expansion in the Background.":
  "Parte {#}: grafica \\(H\\) en función de \\(1/d\\). Ajusta una recta a las cinco filas menos combadas (las de mayor \\(1/d\\)) y compara su pendiente con \\(\\lambda g\\,\\Delta x^2/8\\); la gráfica usa solo filas con un número en ambas columnas, así que primero llena \\(1/d\\) para esas cinco filas. Luego llena el resto y observa dónde caen las filas más combadas en comparación con esa recta, y explica la diferencia usando el desarrollo más completo de la sección Fondo.",
"For two Part {#} rows, find the vertical part of the tension at each support from \\(T\\) and \\(H\\). Check that together the supports hold up the whole weight of the chain, \\(\\lambda g S\\).":
  "Para dos filas de la Parte {#}, encuentra la parte vertical de la tensión en cada apoyo a partir de \\(T\\) y \\(H\\). Comprueba que juntos los apoyos sostienen todo el peso de la cadena, \\(\\lambda g S\\).",
"Part {#}: plot \\(T_A - T_B\\) against \\(y_A - y_B\\) and fit a line. Compare the slope with \\(\\lambda g\\) and the intercept with zero.":
  "Parte {#}: grafica \\(T_A - T_B\\) en función de \\(y_A - y_B\\) y ajusta una recta. Compara la pendiente con \\(\\lambda g\\) y la ordenada al origen con cero.",
"In Part {#}, did \\(H\\) stay the same as support B was lowered? Within any one row, why must the horizontal parts of the pulls at the two supports be equal?":
  "En la Parte {#}, ¿se mantuvo igual \\(H\\) al bajar el apoyo B? Dentro de una misma fila, ¿por qué deben ser iguales las partes horizontales de los tirones en los dos apoyos?",
"Part {#}: for each piece, check that the horizontal parts of the two end pulls are equal and that the difference of their vertical parts equals the piece’s weight.":
  "Parte {#}: para cada tramo, comprueba que las partes horizontales de los dos tirones de los extremos son iguales y que la diferencia de sus partes verticales es igual al peso del tramo.",
"The recorded forces carry {#} significant figures and the sag is given to {#} mm, so rounding alone changes \\(1/d\\) by at most about {#}% for the shallowest row; compare that with the size of your residuals. The model’s own approximations are what matter more for a real chain: real links stretch a little under load, have some stiffness at each joint, and are not exactly uniform. Say which way stretching would shift your Part {#} points at the smallest sags.":
  "Las fuerzas registradas tienen {#} cifras significativas y la flecha se da con resolución de {#} mm, así que el redondeo por sí solo cambia \\(1/d\\) a lo sumo en un {#}% para la fila menos combada; compara eso con el tamaño de tus residuos. Para una cadena real importan más las aproximaciones del propio modelo: los eslabones reales se estiran un poco bajo carga, tienen algo de rigidez en cada unión y no son exactamente uniformes. Di hacia dónde desplazaría el estiramiento tus puntos de la Parte {#} con las flechas más pequeñas.",
"A suspension bridge’s main cable carries a deck whose weight is spread evenly along the horizontal, not along the cable. Which shape does that cable take, and why is it so close to a catenary when the sag is small?":
  "El cable principal de un puente colgante sostiene un tablero cuyo peso está repartido de manera uniforme a lo largo de la horizontal, no a lo largo del cable. ¿Qué forma toma ese cable, y por qué se parece tanto a una catenaria cuando la flecha es pequeña?",
"Turn the chain upside down and it becomes an arch in which every block pushes on its neighbors. Why must the ground at the base of an arch push inward as well as up?":
  "Pon la cadena de cabeza y se convierte en un arco en el que cada bloque empuja a sus vecinos. ¿Por qué el suelo en la base de un arco debe empujar hacia dentro además de hacia arriba?",
"If the chain were twice as heavy per meter, what would happen to its shape and to every force you recorded?":
  "Si la cadena pesara el doble por metro, ¿qué les pasaría a su forma y a cada fuerza que registraste?",
"On a hot day a power line expands and sags further. What happens to the tension in it, and why do engineers leave some sag on purpose?":
  "En un día caluroso una línea eléctrica se dilata y se comba más. ¿Qué le pasa a su tensión, y por qué los ingenieros dejan algo de flecha a propósito?",
"Prelab answers, the two data tables with their graphs and fits, the slope of \\(H\\) against \\(1/d\\) compared with \\(\\lambda g\\,\\Delta x^2/8\\), the weight check, the slope of \\(T_A - T_B\\) against \\(y_A - y_B\\) compared with \\(\\lambda g\\), your Part {#} free body checks, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las dos tablas de datos con sus gráficas y ajustes, la pendiente de \\(H\\) en función de \\(1/d\\) comparada con \\(\\lambda g\\,\\Delta x^2/8\\), la comprobación del peso, la pendiente de \\(T_A - T_B\\) en función de \\(y_A - y_B\\) comparada con \\(\\lambda g\\), tus comprobaciones de cuerpo libre de la Parte {#}, y las respuestas a las preguntas. Identifica los datos simulados.",
"Horizontal part of the tension (the same all along the chain)":
  "Parte horizontal de la tensión (la misma en toda la cadena)",
"Length of the chain":
  "Longitud de la cadena",
"Tension":
  "Tensión",
"Tension at support A":
  "Tensión en el apoyo A",
"Tension at support B":
  "Tensión en el apoyo B",
"Horizontal part of the tension":
  "Parte horizontal de la tensión",
"Vertical part of the tension":
  "Parte vertical de la tensión",
"Catenary constant, H/(λg)":
  "Constante de la catenaria, H/(λg)",
"Sag: depth of the chain below the line through the supports":
  "Flecha: profundidad de la cadena por debajo de la recta que pasa por los apoyos",
"Mass per length of the chain":
  "Masa por unidad de longitud de la cadena",
"Length of chain from the lowest point":
  "Longitud de cadena desde el punto más bajo",
"Horizontal distance from the lowest point":
  "Distancia horizontal desde el punto más bajo",
"Height above a line a distance a below the lowest point":
  "Altura sobre una recta a una distancia a por debajo del punto más bajo",
"Height of support A":
  "Altura del apoyo A",
"Height of support B":
  "Altura del apoyo B",
"Hanging Chains and Arches":
  "Cadenas colgantes y arcos"
});
