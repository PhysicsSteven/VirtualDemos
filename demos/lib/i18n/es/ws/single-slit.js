/* ws/single-slit in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/single-slit', {
"Dark fringe m":
  "Franja oscura m",
"I/I₀ at B":
  "I/I₀ en B",
"sin θ":
  "sin θ",
"(sin β/β)²":
  "(sin β/β)²",
"Single Slit Diffraction | VirtualDemos":
  "Difracción por una rendija | VirtualDemos",
"Single Slit Diffraction":
  "Difracción por una rendija",
"<strong>The demo:</strong> the Diffraction Grating demo with its Single slit aperture (the link above opens it that way; the Aperture switch is at the top of the grating controls, and picking any of the grating setups switches back to the grating).":
  "<strong>La demo:</strong> la demo Rejilla de difracción con su abertura Rendija única (el enlace de arriba la abre así; el selector Abertura está arriba de los controles de la rejilla, y elegir cualquiera de las configuraciones de rejilla regresa a la rejilla).",
"A laser (or a lamp, or white light) shines through one slit of width \\(a\\), from {#} to {#} µm, onto a wall a distance \\(L\\) away. The top panel plots the intensity across the wall as a fraction of the center’s, \\(I/I_0\\); the middle panel shows the wall face on with a meter stick (in cm, {#} at the straight through beam); the bottom panel is the bench seen from above.":
  "Un láser (o una lámpara, o luz blanca) brilla a través de una rendija de ancho \\(a\\), de {#} a {#} µm, sobre una pared a una distancia \\(L\\). El panel superior grafica la intensidad a lo ancho de la pared como fracción de la del centro, \\(I/I_0\\); el panel de en medio muestra la pared de frente con una regla de un metro (en cm, {#} en el haz que pasa derecho); el panel inferior es la mesa vista desde arriba.",
"Measure hides the table of dark fringes and puts caliper jaws A and B on the wall, read to {#} mm. A light meter rides on jaw B and reads \\(I/I_0\\) there. Enter \\(L\\), \\(y\\) and \\(m\\) to compute \\(\\lambda\\) or \\(a\\) and check it.":
  "Medir oculta la tabla de franjas oscuras y pone las mordazas A y B del calibrador sobre la pared, leídas con precisión de {#} mm. Un medidor de luz va sobre la mordaza B y lee \\(I/I_0\\) ahí. Escribe \\(L\\), \\(y\\) y \\(m\\) para calcular \\(\\lambda\\) o \\(a\\) y comprobarlo.",
"Record reading (in Measure) stores the wavelength, \\(a\\), \\(L\\), the caliper reading \\(y = B - A\\), the light meter reading and the dark fringe number in the order box. That number is stored only when jaw B sits on a dark fringe (the meter reads below {#}); elsewhere that column stays empty. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura (en Medir) guarda la longitud de onda, \\(a\\), \\(L\\), la lectura del calibrador \\(y = B - A\\), la lectura del medidor de luz y el número de franja oscura de la casilla de orden. Ese número se guarda solo cuando la mordaza B está sobre una franja oscura (el medidor lee menos de {#}); en otro lugar esa columna queda vacía. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar inicia una serie nueva, que va a una nueva copia de la tabla.",
"<strong>What the demo models.</strong> The pattern is the exact far field (Fraunhofer) result for one slit, \\(I = I_0[\\sin\\beta/\\beta]^2\\) with \\(\\beta = \\pi a\\sin\\theta/\\lambda\\), with \\(y = L\\tan\\theta\\) on a flat wall square to the beam. The far field needs \\(L\\) much larger than \\(a^2/\\lambda\\), which is under {#} mm for every slit here. The slits are narrower than the {#} to {#} mm slits of a teaching lab so that the pattern spreads across the wall; a slit ten times wider gives the same pattern ten times smaller. For slits only a few wavelengths wide the formula is itself an approximation (it treats light as a scalar wave). The light meter is a point detector. Simulated data.":
  "<strong>Qué modela la demo.</strong> El patrón es el resultado exacto de campo lejano (Fraunhofer) para una rendija, \\(I = I_0[\\sin\\beta/\\beta]^2\\) con \\(\\beta = \\pi a\\sin\\theta/\\lambda\\), con \\(y = L\\tan\\theta\\) sobre una pared plana perpendicular al haz. El campo lejano necesita \\(L\\) mucho mayor que \\(a^2/\\lambda\\), que es menor que {#} mm para todas las rendijas de aquí. Las rendijas son más angostas que las rendijas de {#} a {#} mm de un laboratorio didáctico para que el patrón se extienda por la pared; una rendija diez veces más ancha da el mismo patrón diez veces más pequeño. Para rendijas de solo unas cuantas longitudes de onda de ancho la fórmula es en sí una aproximación (trata la luz como una onda escalar). El medidor de luz es un detector puntual. Datos simulados.",
"Find where the dark fringes of a single slit fall, use them to measure the slit width, and test the single slit intensity formula with a light meter.":
  "Encuentra dónde caen las franjas oscuras de una rendija, úsalas para medir el ancho de la rendija, y pon a prueba la fórmula de intensidad de una rendija con un medidor de luz.",
"Divide the slit into two halves. When light from the top edge and light from the middle differ in path by half a wavelength, every point in the top half has a partner in the bottom half that cancels it, and the wall is dark. That happens where \\(a\\sin\\theta = \\lambda\\), and in the same way where (§{#})":
  "Divide la rendija en dos mitades. Cuando la luz del borde superior y la luz del centro difieren en trayectoria media longitud de onda, cada punto de la mitad superior tiene una pareja en la mitad inferior que lo cancela, y la pared queda oscura. Eso ocurre donde \\(a\\sin\\theta = \\lambda\\), y de la misma forma donde (§{#})",
"\\[a\\sin\\theta = m\\lambda, \\qquad m = \\pm 1, \\pm 2, \\pm 3, \\ldots\\]":
  "\\[a\\sin\\theta = m\\lambda, \\qquad m = \\pm 1, \\pm 2, \\pm 3, \\ldots\\]",
"There is no dark fringe for \\(m = 0\\): the middle of the pattern is the brightest place, and the bright middle band is twice as wide as the side bands. On a wall a distance \\(L\\) away, the dark fringe \\(m\\) is at \\(y\\) with \\(\\tan\\theta = y/L\\), so \\(\\sin\\theta = y/\\sqrt{y^2 + L^2}\\).":
  "No hay franja oscura para \\(m = 0\\): el centro del patrón es el lugar más brillante, y la banda brillante central es el doble de ancha que las bandas laterales. Sobre una pared a una distancia \\(L\\), la franja oscura \\(m\\) está en \\(y\\) con \\(\\tan\\theta = y/L\\), así que \\(\\sin\\theta = y/\\sqrt{y^2 + L^2}\\).",
"Adding the waves from every point of the slit gives the intensity (§{#}):":
  "Sumar las ondas de cada punto de la rendija da la intensidad (§{#}):",
"\\[I = I_0\\left(\\frac{\\sin\\beta}{\\beta}\\right)^2, \\qquad \\beta = \\frac{\\pi a \\sin\\theta}{\\lambda}.\\]":
  "\\[I = I_0\\left(\\frac{\\sin\\beta}{\\beta}\\right)^2, \\qquad \\beta = \\frac{\\pi a \\sin\\theta}{\\lambda}.\\]",
"It is zero where \\(\\beta = m\\pi\\) (the dark fringes) and has side maxima near \\(\\beta = 1.43\\pi\\), \\(2.46\\pi\\), \\(3.47\\pi\\) (where \\(\\tan\\beta = \\beta\\)), only {#}%, {#}% and {#}% as bright as the center.":
  "Es cero donde \\(\\beta = m\\pi\\) (las franjas oscuras) y tiene máximos laterales cerca de \\(\\beta = 1.43\\pi\\), \\(2.46\\pi\\), \\(3.47\\pi\\) (donde \\(\\tan\\beta = \\beta\\)), con solo {#}%, {#}% y {#}% del brillo del centro.",
"Red light of {#} nm passes through a slit {#} µm wide. Find the angle of the first dark fringe and its distance from the center on a wall {#} m away. How wide is the bright middle band?":
  "Luz roja de {#} nm pasa por una rendija de {#} µm de ancho. Encuentra el ángulo de la primera franja oscura y su distancia al centro sobre una pared a {#} m. ¿Qué tan ancha es la banda brillante central?",
"How many dark fringes are there on each side for this slit and wavelength? Why can there be no more?":
  "¿Cuántas franjas oscuras hay a cada lado para esta rendija y esta longitud de onda? ¿Por qué no puede haber más?",
"Show that a graph of \\(\\sin\\theta\\) against \\(m\\) for the dark fringes should be a straight line through the origin. What is its slope? How would you get \\(a\\) from it?":
  "Demuestra que una gráfica de \\(\\sin\\theta\\) en función de \\(m\\) para las franjas oscuras debería ser una recta que pasa por el origen. ¿Cuál es su pendiente? ¿Cómo obtendrías \\(a\\) a partir de ella?",
"If the slit is made narrower, does the pattern spread out or shrink? What happens when \\(a\\) is smaller than \\(\\lambda\\)?":
  "Si la rendija se hace más angosta, ¿el patrón se extiende o se encoge? ¿Qué pasa cuando \\(a\\) es menor que \\(\\lambda\\)?",
"Find \\(I/I_0\\) at \\(\\beta = \\pi/2\\) and at \\(\\beta = 3\\pi/2\\).":
  "Encuentra \\(I/I_0\\) en \\(\\beta = \\pi/2\\) y en \\(\\beta = 3\\pi/2\\).",
"There are no hazards in the simulation. A real laser can damage the eye: never look into the beam or its reflection.":
  "No hay riesgos en la simulación. Un láser real puede dañar el ojo: nunca mires el haz ni su reflejo.",
"Open the demo with the single slit, choose the He-Ne laser ({#} nm) and switch to Measure. Keep the slit square to the beam and \\(L = 1.00\\) m unless a part says otherwise. For each reading put jaw A on the center of the bright middle band ({#} on the stick) and jaw B where the part says, and record.":
  "Abre la demo con la rendija única, elige el láser de He-Ne ({#} nm) y cambia a Medir. Mantén la rendija perpendicular al haz y \\(L = 1.00\\) m salvo que una parte diga otra cosa. Para cada lectura pon la mordaza A en el centro de la banda brillante central ({#} en la regla) y la mordaza B donde diga la parte, y registra.",
"<strong>Part {#}: dark fringes against m.</strong> With \\(a = 5.0\\) µm, put jaw B on each dark fringe on the positive side that the wall shows (\\(m\\) = {#} to {#} on a computer screen; a phone may show only up to {#}), typing \\(m\\) in the order box each time. Send the readings to the worksheet and clear them.":
  "<strong>Parte {#}: franjas oscuras en función de m.</strong> Con \\(a = 5.0\\) µm, pon la mordaza B en cada franja oscura del lado positivo que muestre la pared (\\(m\\) = {#} a {#} en la pantalla de una computadora; un teléfono puede mostrar solo hasta {#}), escribiendo \\(m\\) en la casilla de orden cada vez. Envía las lecturas a la hoja y bórralas.",
"<strong>Part {#}: the first dark fringe against slit width.</strong> Measure the first dark fringe (\\(m = 1\\)) for \\(a\\) = {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} µm. Send the readings and clear them.":
  "<strong>Parte {#}: la primera franja oscura en función del ancho de la rendija.</strong> Mide la primera franja oscura (\\(m = 1\\)) para \\(a\\) = {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} µm. Envía las lecturas y bórralas.",
"<strong>Part {#}: intensity across the pattern.</strong> With \\(a = 5.0\\) µm, put jaw B at \\(y\\) = {#}, {#}, {#}, {#}, {#}, {#} and {#} cm across the middle band and then at {#}, {#}, {#}, {#}, {#} and {#} cm across the first side band, recording the light meter each time. Send the readings.":
  "<strong>Parte {#}: intensidad a lo ancho del patrón.</strong> Con \\(a = 5.0\\) µm, pon la mordaza B en \\(y\\) = {#}, {#}, {#}, {#}, {#}, {#} y {#} cm a lo ancho de la banda central y luego en {#}, {#}, {#}, {#}, {#} y {#} cm a lo ancho de la primera banda lateral, registrando el medidor de luz cada vez. Envía las lecturas.",
"<strong>Part {#}: narrow slits and colors.</strong> Set \\(a = 0.5\\) µm and describe the wall. Then, back at \\(a = 5.0\\) µm, compare the first dark fringe for the green ({#} nm) and violet ({#} nm) lasers with the red one.":
  "<strong>Parte {#}: rendijas angostas y colores.</strong> Fija \\(a = 0.5\\) µm y describe la pared. Luego, de nuevo con \\(a = 5.0\\) µm, compara la primera franja oscura para los láseres verde ({#} nm) y violeta ({#} nm) con la del rojo.",
"<span>E</span>Dark fringe m":
  "<span>E</span>Franja oscura m",
"<span>G</span>I/I₀ at B":
  "<span>G</span>I/I₀ en B",
"<span>H</span>sin θ":
  "<span>H</span>sin θ",
"<span>K</span>(sin β/β)²":
  "<span>K</span>(sin β/β)²",
"λ (nm), row {#}":
  "λ (nm), fila {#}",
"a (µm), row {#}":
  "a (µm), fila {#}",
"Dark fringe m, row {#}":
  "Franja oscura m, fila {#}",
"y (cm), row {#}":
  "y (cm), fila {#}",
"I/I₀ at B, row {#}":
  "I/I₀ en B, fila {#}",
"sin θ, row {#}":
  "sin θ, fila {#}",
"{#}/a ({#}/µm), row {#}":
  "{#}/a ({#}/µm), fila {#}",
"β (rad), row {#}":
  "β (rad), fila {#}",
"(sin β/β)², row {#}":
  "(sin β/β)², fila {#}",
"Fill in \\(\\sin\\theta = y/\\sqrt{y^2 + L^2}\\) yourself, and \\(1/a\\) for Part {#}, and \\(\\beta = \\pi a\\sin\\theta/\\lambda\\) and \\((\\sin\\beta/\\beta)^2\\) for Part {#} (take \\((\\sin\\beta/\\beta)^2 = 1\\) at \\(\\beta = 0\\)).":
  "Llena tú mismo \\(\\sin\\theta = y/\\sqrt{y^2 + L^2}\\), y \\(1/a\\) para la Parte {#}, y \\(\\beta = \\pi a\\sin\\theta/\\lambda\\) y \\((\\sin\\beta/\\beta)^2\\) para la Parte {#} (toma \\((\\sin\\beta/\\beta)^2 = 1\\) en \\(\\beta = 0\\)).",
"For Part {#}, graph \\(\\sin\\theta\\) against \\(m\\). Find the slope and intercept. From the slope, \\(\\lambda/a\\), find the slit width and compare it with {#} µm.":
  "Para la Parte {#}, grafica \\(\\sin\\theta\\) en función de \\(m\\). Encuentra la pendiente y la ordenada al origen. Con la pendiente, \\(\\lambda/a\\), encuentra el ancho de la rendija y compáralo con {#} µm.",
"For Part {#}, graph \\(\\sin\\theta_1\\) against \\(1/a\\). What should the slope be? Find it and compare it with the laser’s wavelength.":
  "Para la Parte {#}, grafica \\(\\sin\\theta_1\\) en función de \\(1/a\\). ¿Cuál debería ser la pendiente? Encuéntrala y compárala con la longitud de onda del láser.",
"For one Part {#} reading, find \\(a\\) with the small angle form \\(a \\approx m\\lambda L/y\\) and with the exact form. By what percentage is the small angle form off, and why? For which dark fringes is the small angle form good to {#}%?":
  "Para una lectura de la Parte {#}, encuentra \\(a\\) con la forma de ángulo pequeño \\(a \\approx m\\lambda L/y\\) y con la forma exacta. ¿En qué porcentaje se desvía la forma de ángulo pequeño, y por qué? ¿Para qué franjas oscuras es buena la forma de ángulo pequeño dentro de {#}%?",
"For Part {#}, graph \\(I/I_0\\) against \\((\\sin\\beta/\\beta)^2\\). What slope and intercept do you expect, and what do you find? Where in your readings is the side band brightest, and how bright is it compared with the center?":
  "Para la Parte {#}, grafica \\(I/I_0\\) en función de \\((\\sin\\beta/\\beta)^2\\). ¿Qué pendiente y ordenada al origen esperas, y qué encuentras? ¿En qué parte de tus lecturas es más brillante la banda lateral, y qué tan brillante es comparada con el centro?",
"For Part {#}, explain what you saw with \\(a = 0.5\\) µm, and how the first dark fringe depends on the color.":
  "Para la Parte {#}, explica lo que viste con \\(a = 0.5\\) µm, y cómo depende la primera franja oscura del color.",
"The caliper reads to {#} mm, and a dark fringe is a minimum of a smooth pattern, so you find its center by eye or by the light meter. Estimate the uncertainty in \\(y\\) and propagate it to \\(\\sin\\theta\\) and to \\(a\\). Which dark fringe gives \\(a\\) most precisely? A real slit’s edges are not perfectly straight and parallel, and a real detector has a finite size: say how each would change what you measure.":
  "El calibrador lee con precisión de {#} mm, y una franja oscura es un mínimo de un patrón suave, así que encuentras su centro a ojo o con el medidor de luz. Estima la incertidumbre en \\(y\\) y propágala a \\(\\sin\\theta\\) y a \\(a\\). ¿Qué franja oscura da \\(a\\) con más precisión? Los bordes de una rendija real no son perfectamente rectos ni paralelos, y un detector real tiene un tamaño finito: di cómo cambiaría cada uno lo que mides.",
"Why is the bright middle band twice as wide as the side bands?":
  "¿Por qué la banda brillante central es el doble de ancha que las bandas laterales?",
"A double slit pattern (§{#}) is the single slit pattern times the two slit fringes. Use that to explain why some double slit fringes are missing.":
  "Un patrón de doble rendija (§{#}) es el patrón de una rendija multiplicado por las franjas de dos rendijas. Usa eso para explicar por qué faltan algunas franjas de doble rendija.",
"Sound passes easily through a doorway but light casts a sharp shadow. Use the single slit result to explain why.":
  "El sonido pasa fácilmente por una puerta, pero la luz proyecta una sombra nítida. Usa el resultado de una rendija para explicar por qué.",
"A camera’s lens opening acts like a slit. Why does a very small opening make a photograph less sharp, not more? (§{#} takes this up for round openings.)":
  "La abertura de la lente de una cámara actúa como una rendija. ¿Por qué una abertura muy pequeña hace una fotografía menos nítida, no más? (La §{#} trata esto para aberturas redondas.)",
"Prelab answers, a Data table copy for each part with the graphs and fits for Parts {#}, {#} and {#}, your slit width and wavelength results with uncertainties, your Part {#} observations and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, una copia de la tabla de datos para cada parte con las gráficas y ajustes de las Partes {#}, {#} y {#}, tus resultados de ancho de rendija y longitud de onda con incertidumbres, tus observaciones de la Parte {#} y las respuestas a las preguntas. Identifica los datos simulados.",
"Caliper jaw A reading":
  "Lectura de la mordaza A del calibrador",
"Caliper jaw B reading":
  "Lectura de la mordaza B del calibrador",
"Intensity":
  "Intensidad",
"Intensity at the center":
  "Intensidad en el centro",
"Distance from the slit to the wall":
  "Distancia de la rendija a la pared",
"Slit width":
  "Ancho de la rendija",
"Half the phase difference across the slit, πa sin θ/λ":
  "La mitad de la diferencia de fase a lo ancho de la rendija, πa sin θ/λ",
"Order of the dark fringe":
  "Orden de la franja oscura",
"Angle from the beam":
  "Ángulo respecto al haz",
"Angle of the first dark fringe":
  "Ángulo de la primera franja oscura",
"Position on the wall from the center":
  "Posición sobre la pared desde el centro",
"Diffraction Grating (single slit)":
  "Rejilla de difracción (rendija única)"
});
