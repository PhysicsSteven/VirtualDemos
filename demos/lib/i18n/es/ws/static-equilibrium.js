/* ws/static-equilibrium in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/static-equilibrium', {
"Load position x (m)":
  "Posición de la carga x (m)",
"Cable height h (m)":
  "Altura del cable h (m)",
"Cable angle θ (°)":
  "Ángulo del cable θ (°)",
"{#}/sinθ":
  "{#}/sinθ",
"Left support F_1 (N)":
  "Soporte izquierdo F_1 (N)",
"Right support F_2 (N)":
  "Soporte derecho F_2 (N)",
"Tension T (N)":
  "Tensión T (N)",
"Hinge H_x (N)":
  "Bisagra H_x (N)",
"Hinge H_y (N)":
  "Bisagra H_y (N)",
"Static Equilibrium: Support Forces and Cable Tension | VirtualDemos":
  "Equilibrio estático: fuerzas de soporte y tensión del cable | VirtualDemos",
"Static Equilibrium: Support Forces and Cable Tension":
  "Equilibrio estático: fuerzas de soporte y tensión del cable",
"<strong>Setups in the demo:</strong> Seesaw; Plank on two supports; Sign on a strut and cable; Ladder against a wall; Sandbox.":
  "<strong>Configuraciones en la demo:</strong> Subibaja; Tablón sobre dos soportes; Letrero en un puntal y un cable; Escalera contra una pared; Caja de arena.",
"Every force on the structure is drawn as an arrow to scale, with its size in newtons. Drag a load along the beam (or a person up the ladder), or set exact values on the sliders. Choosing a setup puts all of its values back to that setup’s starting values.":
  "Cada fuerza sobre la estructura se dibuja como una flecha a escala, con su magnitud en newtons. Arrastra una carga a lo largo de la viga (o a una persona por la escalera), o fija valores exactos con los deslizadores. Elegir una configuración regresa todos sus valores a los valores iniciales de esa configuración.",
"Record reading stores the setup’s settings and the forces as the readouts show them, to {#} N and {#}°. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda los valores de la configuración y las fuerzas tal como las muestran las lecturas en pantalla, a {#} N y {#}°. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar inicia una nueva serie, que va a una nueva copia de la tabla.",
"The Sandbox is for exploring on your own: drag up to two supports and masses of {#}, {#}, {#} and {#} kg from the tray onto a beam, set the beam’s length and mass, and let go to see whether it balances. A marker shows the center of mass with a line straight down from it. The Sandbox records no readings.":
  "La Caja de arena es para explorar por tu cuenta: arrastra hasta dos soportes y masas de {#}, {#}, {#} y {#} kg desde la bandeja hasta una viga, fija la longitud y la masa de la viga, y suéltala para ver si se equilibra. Un marcador muestra el centro de masa con una línea vertical hacia abajo desde él. La Caja de arena no registra lecturas.",
"Blind hides the forces, the torques and the verdict (balanced, tips, slips) and draws every arrow the same length, so you can make your own predictions. It also stops Record reading, since the forces are what you record.":
  "A ciegas oculta las fuerzas, las torcas y el veredicto (equilibrado, se vuelca, se resbala) y dibuja todas las flechas con la misma longitud, para que puedas hacer tus propias predicciones. También detiene Registrar lectura, ya que las fuerzas son lo que registras.",
"Beams, planks, struts and ladders are rigid and uniform, so each one’s weight acts at its middle. Cables are massless, and the pivot and the hinge are frictionless. The ladder rests against a frictionless wall on a floor with static friction coefficient \\(\\mu_s\\).":
  "Las vigas, tablones, puntales y escaleras son rígidos y uniformes, así que el peso de cada uno actúa en su centro. Los cables no tienen masa, y el pivote y la bisagra no tienen fricción. La escalera se apoya contra una pared sin fricción sobre un piso con coeficiente de fricción estática \\(\\mu_s\\).",
"The forces come from the two equilibrium conditions, \\(\\sum \\vec F = 0\\) and \\(\\sum \\tau = 0\\), with \\(g = 9.81\\ \\text{m/s}^2\\). A support can only push: when the equations ask a support to pull down, the demo says the plank tips instead.":
  "Las fuerzas vienen de las dos condiciones de equilibrio, \\(\\sum \\vec F = 0\\) y \\(\\sum \\tau = 0\\), con \\(g = 9.81\\ \\text{m/s}^2\\). Un soporte solo puede empujar: cuando las ecuaciones piden que un soporte jale hacia abajo, la demo dice en cambio que el tablón se vuelca.",
"Measure how two supports share the weight of a plank as a load moves along it and find where the plank tips; then measure how the tension in a sign’s cable depends on the cable’s angle.":
  "Mide cómo dos soportes se reparten el peso de un tablón a medida que una carga se mueve a lo largo de él y encuentra dónde se vuelca el tablón; luego mide cómo la tensión en el cable de un letrero depende del ángulo del cable.",
"An object stays at rest only if the forces on it add to zero and the torques on it, about any point, add to zero (§{#}):":
  "Un objeto permanece en reposo solo si las fuerzas sobre él suman cero y las torcas sobre él, respecto a cualquier punto, suman cero (§{#}):",
"\\[\\sum F_x = 0,\\qquad \\sum F_y = 0,\\qquad \\sum \\tau = 0.\\]":
  "\\[\\sum F_x = 0,\\qquad \\sum F_y = 0,\\qquad \\sum \\tau = 0.\\]",
"<strong>Plank on two supports.</strong> A uniform plank of length \\(L\\) and mass \\(m_p\\) rests on supports at \\(x = a\\) and \\(x = b\\), measured from its left end. A painter of mass \\(m\\) stands at \\(x\\). Taking torques about the left support and then adding the vertical forces,":
  "<strong>Tablón sobre dos soportes.</strong> Un tablón uniforme de longitud \\(L\\) y masa \\(m_p\\) descansa sobre soportes en \\(x = a\\) y \\(x = b\\), medidos desde su extremo izquierdo. Un pintor de masa \\(m\\) está parado en \\(x\\). Tomando torcas respecto al soporte izquierdo y luego sumando las fuerzas verticales,",
"\\[F_2 = \\frac{m_p g\\,(L/2 - a) + m g\\,(x - a)}{b - a},\\qquad F_1 = (m_p + m)g - F_2 .\\]":
  "\\[F_2 = \\frac{m_p g\\,(L/2 - a) + m g\\,(x - a)}{b - a},\\qquad F_1 = (m_p + m)g - F_2 .\\]",
"Both support forces are straight lines in \\(x\\). A support can only push up, so when \\(F_1\\) reaches zero the plank is about to tip about the right support.":
  "Ambas fuerzas de soporte son líneas rectas en \\(x\\). Un soporte solo puede empujar hacia arriba, así que cuando \\(F_1\\) llega a cero el tablón está a punto de volcarse alrededor del soporte derecho.",
"<strong>Sign on a strut and cable.</strong> A uniform horizontal strut of length \\(L\\) and mass \\(m_s\\) is hinged to a wall. A sign of mass \\(m\\) hangs at a distance \\(d\\) from the wall, and a cable runs from the strut’s outer end to the wall a height \\(h\\) above the hinge, at an angle \\(\\theta\\) to the strut, with \\(\\tan\\theta = h/L\\). Torques about the hinge give (§{#})":
  "<strong>Letrero en un puntal y un cable.</strong> Un puntal horizontal uniforme de longitud \\(L\\) y masa \\(m_s\\) está unido a una pared con una bisagra. Un letrero de masa \\(m\\) cuelga a una distancia \\(d\\) de la pared, y un cable va del extremo exterior del puntal a la pared, a una altura \\(h\\) sobre la bisagra, formando un ángulo \\(\\theta\\) con el puntal, con \\(\\tan\\theta = h/L\\). Las torcas respecto a la bisagra dan (§{#})",
"\\[T\\,L\\sin\\theta = \\left(m_s\\frac{L}{2} + m\\,d\\right)g,\\qquad T = \\frac{(m_s L/2 + m d)\\,g}{L}\\cdot\\frac{1}{\\sin\\theta},\\]":
  "\\[T\\,L\\sin\\theta = \\left(m_s\\frac{L}{2} + m\\,d\\right)g,\\qquad T = \\frac{(m_s L/2 + m d)\\,g}{L}\\cdot\\frac{1}{\\sin\\theta},\\]",
"and the hinge supplies the rest: \\(H_x = T\\cos\\theta\\) away from the wall and \\(H_y = (m_s + m)g - T\\sin\\theta\\) up.":
  "y la bisagra aporta el resto: \\(H_x = T\\cos\\theta\\) alejándose de la pared y \\(H_y = (m_s + m)g - T\\sin\\theta\\) hacia arriba.",
"A {#} kg child sits {#} m from the pivot of a seesaw that pivots at its middle. Where must a {#} kg child sit to balance? What force does the pivot exert?":
  "Un niño de {#} kg está sentado a {#} m del pivote de un subibaja que pivota en su centro. ¿Dónde debe sentarse un niño de {#} kg para equilibrarlo? ¿Qué fuerza ejerce el pivote?",
"For the plank in the Procedure ({#} m, {#} kg, supports at {#} m and {#} m, a {#} kg painter), calculate \\(F_1\\) and \\(F_2\\) with the painter at {#} m, and the position at which the plank starts to tip.":
  "Para el tablón del Procedimiento ({#} m, {#} kg, soportes en {#} m y {#} m, un pintor de {#} kg), calcula \\(F_1\\) y \\(F_2\\) con el pintor en {#} m, y la posición en la que el tablón empieza a volcarse.",
"Why can you choose any point as the axis for the torques of an object in equilibrium? Which point makes the plank’s equations easiest, and why?":
  "¿Por qué puedes elegir cualquier punto como eje para las torcas de un objeto en equilibrio? ¿Qué punto hace más fáciles las ecuaciones del tablón, y por qué?",
"For the sign in the Procedure, predict what happens to the cable tension as the cable is attached lower and lower on the wall. Could a horizontal cable hold the sign up?":
  "Para el letrero del Procedimiento, predice qué le pasa a la tensión del cable a medida que el cable se fija cada vez más abajo en la pared. ¿Podría un cable horizontal sostener el letrero?",
"There is no physical apparatus. On a real bench, keep feet clear of a loaded plank that could tip, and never stand on a plank that overhangs a support.":
  "No hay aparato físico. En una mesa real, mantén los pies lejos de un tablón cargado que pudiera volcarse, y nunca te pares en un tablón que sobresale de un soporte.",
"<strong>Part {#}: plank scan.</strong> Use the Plank on two supports setup: a {#} m, {#} kg plank on supports at {#} m and {#} m, with a {#} kg painter. Record the support forces with the painter at every {#} m from {#} to {#} m. Then move the painter farther out, {#} m at a time, and find the first position at which the plank tips. Send the scan to the worksheet, then clear the demo’s readings.":
  "<strong>Parte {#}: barrido del tablón.</strong> Usa la configuración Tablón sobre dos soportes: un tablón de {#} m y {#} kg sobre soportes en {#} m y {#} m, con un pintor de {#} kg. Registra las fuerzas de soporte con el pintor cada {#} m de {#} a {#} m. Luego mueve al pintor más afuera, {#} m a la vez, y encuentra la primera posición en la que el tablón se vuelca. Envía el barrido a la hoja de trabajo y luego borra las lecturas de la demo.",
"<strong>Part {#}: sign and cable.</strong> Use the Sign on a strut and cable setup: a {#} m, {#} kg strut and a {#} kg sign hanging {#} m from the wall. Record the tension, the cable angle and the hinge force with the cable attached to the wall at heights of {#}, {#}, {#}, {#}, {#}, {#} and {#} m above the hinge. Send this series to the worksheet as a new copy of the table.":
  "<strong>Parte {#}: letrero y cable.</strong> Usa la configuración Letrero en un puntal y un cable: un puntal de {#} m y {#} kg y un letrero de {#} kg que cuelga a {#} m de la pared. Registra la tensión, el ángulo del cable y la fuerza de la bisagra con el cable fijado a la pared a alturas de {#}, {#}, {#}, {#}, {#}, {#} y {#} m sobre la bisagra. Envía esta serie a la hoja de trabajo como una nueva copia de la tabla.",
"<strong>Part {#}: ladder.</strong> Use the Ladder against a wall setup ({#} m, {#} kg ladder at {#}° on a floor with \\(\\mu_s = 0.40\\), and a {#} kg person). Before you look, calculate the smallest angle at which the ladder holds with the person at the very top. Then put the person at the top and lower the angle until the ladder slips. Record the last angle at which it holds and the first at which it slips (in {#}° steps), and do the same with the person halfway up.":
  "<strong>Parte {#}: escalera.</strong> Usa la configuración Escalera contra una pared (escalera de {#} m y {#} kg a {#}° sobre un piso con \\(\\mu_s = 0.40\\), y una persona de {#} kg). Antes de mirar, calcula el ángulo más pequeño con el que la escalera se sostiene con la persona hasta arriba. Luego pon a la persona hasta arriba y baja el ángulo hasta que la escalera resbale. Registra el último ángulo con el que se sostiene y el primero con el que resbala (en pasos de {#}°), y haz lo mismo con la persona a la mitad.",
"<span>C</span>Load position \\(x\\) (m)":
  "<span>C</span>Posición de la carga \\(x\\) (m)",
"<span>D</span>Cable height \\(h\\) (m)":
  "<span>D</span>Altura del cable \\(h\\) (m)",
"<span>E</span>Cable angle \\(\\theta\\) (°)":
  "<span>E</span>Ángulo del cable \\(\\theta\\) (°)",
"<span>F</span>\\(1/\\sin\\theta\\)":
  "<span>F</span>\\(1/\\sin\\theta\\)",
"<span>G</span>Left support \\(F_1\\) (N)":
  "<span>G</span>Soporte izquierdo \\(F_1\\) (N)",
"<span>H</span>Right support \\(F_2\\) (N)":
  "<span>H</span>Soporte derecho \\(F_2\\) (N)",
"<span>I</span>Tension \\(T\\) (N)":
  "<span>I</span>Tensión \\(T\\) (N)",
"<span>J</span>Hinge \\(H_x\\) (N)":
  "<span>J</span>Bisagra \\(H_x\\) (N)",
"<span>K</span>Hinge \\(H_y\\) (N)":
  "<span>K</span>Bisagra \\(H_y\\) (N)",
"Load position x (m), row {#}":
  "Posición de la carga x (m), fila {#}",
"Cable height h (m), row {#}":
  "Altura del cable h (m), fila {#}",
"Cable angle θ (°), row {#}":
  "Ángulo del cable θ (°), fila {#}",
"{#}/sinθ, row {#}":
  "{#}/sinθ, fila {#}",
"Left support F_1 (N), row {#}":
  "Soporte izquierdo F_1 (N), fila {#}",
"Right support F_2 (N), row {#}":
  "Soporte derecho F_2 (N), fila {#}",
"Tension T (N), row {#}":
  "Tensión T (N), fila {#}",
"Hinge H_x (N), row {#}":
  "Bisagra H_x (N), fila {#}",
"Hinge H_y (N), row {#}":
  "Bisagra H_y (N), fila {#}",
"Left support F₁ (N)":
  "Soporte izquierdo F₁ (N)",
"Right support F₂ (N)":
  "Soporte derecho F₂ (N)",
"For the sign, the load position \\(x\\) is the sign’s distance \\(d\\) from the wall. Work out the \\(1/\\sin\\theta\\) column yourself from \\(h\\) and \\(L\\), using \\(\\sin\\theta = h/\\sqrt{h^2 + L^2}\\); that is more precise than the angle rounded to {#}°. Keep the plank and the sign in separate copies of the table, and record each setup’s masses and lengths, and the ladder angles, in the table’s notes.":
  "Para el letrero, la posición de la carga \\(x\\) es la distancia \\(d\\) del letrero a la pared. Calcula tú mismo la columna \\(1/\\sin\\theta\\) a partir de \\(h\\) y \\(L\\), usando \\(\\sin\\theta = h/\\sqrt{h^2 + L^2}\\); eso es más preciso que el ángulo redondeado a {#}°. Mantén el tablón y el letrero en copias separadas de la tabla, y anota las masas y longitudes de cada configuración, y los ángulos de la escalera, en las notas de la tabla.",
"Part {#}: plot \\(F_1\\) and \\(F_2\\) against \\(x\\) and fit a line to each. Compare both slopes and intercepts with the formulas in the Background, and use them to work out the painter’s mass and the plank’s mass as if you did not know them.":
  "Parte {#}: grafica \\(F_1\\) y \\(F_2\\) en función de \\(x\\) y ajusta una recta a cada una. Compara ambas pendientes y ordenadas al origen con las fórmulas de la sección Fondo, y úsalas para calcular la masa del pintor y la masa del tablón como si no las conocieras.",
"Check \\(F_1 + F_2\\) for every row against the total weight. What does this check, and what does it not check?":
  "Comprueba \\(F_1 + F_2\\) en cada fila contra el peso total. ¿Qué comprueba esto, y qué no comprueba?",
"From your \\(F_1\\) fit, find the position at which \\(F_1 = 0\\). Compare it with the tipping position you found in the demo and with your answer to Before the lab question {#}.":
  "A partir de tu ajuste de \\(F_1\\), encuentra la posición en la que \\(F_1 = 0\\). Compárala con la posición de vuelco que encontraste en la demo y con tu respuesta a la pregunta {#} de Antes del laboratorio.",
"Part {#}: plot \\(T\\) against \\(1/\\sin\\theta\\) and fit a line. Compare the slope with \\((m_s L/2 + m d)\\,g/L\\) and the intercept with zero. Explain in terms of torques why a shallow cable needs a large tension.":
  "Parte {#}: grafica \\(T\\) en función de \\(1/\\sin\\theta\\) y ajusta una recta. Compara la pendiente con \\((m_s L/2 + m d)\\,g/L\\) y la ordenada al origen con cero. Explica en términos de torcas por qué un cable poco inclinado necesita una tensión grande.",
"For two of your Part {#} rows, check that the horizontal forces on the strut add to zero and that the vertical forces add to zero. Which way does the hinge push on the strut, and why must it push at all?":
  "Para dos de tus filas de la Parte {#}, comprueba que las fuerzas horizontales sobre el puntal suman cero y que las fuerzas verticales suman cero. ¿Hacia dónde empuja la bisagra sobre el puntal, y por qué tiene que empujar?",
"Part {#}: compare the angles at which the ladder slipped with your calculation, \\(\\tan\\theta_\\text{min} = \\dfrac{m_\\ell/2 + m f}{\\mu_s\\,(m_\\ell + m)}\\), where \\(m_\\ell\\) is the ladder’s mass and \\(f\\) the fraction of the way up. Why is a ladder safest when the person is low on it?":
  "Parte {#}: compara los ángulos a los que resbaló la escalera con tu cálculo, \\(\\tan\\theta_\\text{min} = \\dfrac{m_\\ell/2 + m f}{\\mu_s\\,(m_\\ell + m)}\\), donde \\(m_\\ell\\) es la masa de la escalera y \\(f\\) la fracción del recorrido hacia arriba. ¿Por qué una escalera es más segura cuando la persona está abajo?",
"The readouts show forces to {#} N and angles to {#}°, and the positions and heights are exact settings, so your fits should leave residuals no bigger than about {#} N; larger residuals mean a misread or mistyped row. If you had worked out \\(1/\\sin\\theta\\) from the angle rounded to {#}° instead of from \\(h\\) and \\(L\\), how large would the error be at the shallowest cable, and would it matter for your slope? On a real bench the largest errors would come from where the supports and the load actually touch, the plank’s own weight not being exactly at its middle, and a cable that stretches. Say which way each would shift your Part {#} fit.":
  "Las lecturas en pantalla muestran fuerzas a {#} N y ángulos a {#}°, y las posiciones y alturas son valores exactos, así que tus ajustes deberían dejar residuos no mayores de unos {#} N; residuos más grandes indican una fila mal leída o mal escrita. Si hubieras calculado \\(1/\\sin\\theta\\) a partir del ángulo redondeado a {#}° en lugar de a partir de \\(h\\) y \\(L\\), ¿qué tan grande sería el error con el cable menos inclinado, y afectaría tu pendiente? En una mesa real los errores más grandes vendrían de dónde tocan realmente los soportes y la carga, de que el peso del tablón no esté exactamente en su centro, y de un cable que se estira. Di hacia dónde desplazaría cada uno tu ajuste de la Parte {#}.",
"A plank rests on two supports. Explain, with torques, why the support nearer the painter carries more of the weight.":
  "Un tablón descansa sobre dos soportes. Explica, con torcas, por qué el soporte más cercano al pintor lleva más peso.",
"When the plank is about to tip, what is the force from the far support, and which point becomes the natural axis?":
  "Cuando el tablón está a punto de volcarse, ¿cuál es la fuerza del soporte lejano, y qué punto se vuelve el eje natural?",
"In Part {#} the hinge’s vertical part \\(H_y\\) came out the same in every row while \\(H_x\\) changed. Explain both, and show that the hinge must push up wherever the sign hangs on the strut.":
  "En la Parte {#}, la parte vertical de la bisagra \\(H_y\\) salió igual en cada fila mientras que \\(H_x\\) cambió. Explica ambas cosas, y muestra que la bisagra debe empujar hacia arriba dondequiera que cuelgue el letrero en el puntal.",
"A ladder against a smooth wall needs friction from the floor. Where does the horizontal force from the wall come from, and why does it grow as the person climbs?":
  "Una escalera contra una pared lisa necesita fricción del piso. ¿De dónde viene la fuerza horizontal de la pared, y por qué crece a medida que sube la persona?",
"Prelab answers, the two data tables with their graphs and fits, the masses from your plank fits, the tipping position, the tension slope compared with its prediction, the force checks, your ladder angles and calculation, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las dos tablas de datos con sus gráficas y ajustes, las masas a partir de tus ajustes del tablón, la posición de vuelco, la pendiente de la tensión comparada con su predicción, las comprobaciones de fuerzas, tus ángulos de la escalera y tu cálculo, y respuestas a las preguntas. Identifica los datos simulados.",
"Force from the left support":
  "Fuerza del soporte izquierdo",
"Force from the right support":
  "Fuerza del soporte derecho",
"Horizontal component of a force":
  "Componente horizontal de una fuerza",
"Vertical component of a force":
  "Componente vertical de una fuerza",
"Horizontal force from the hinge":
  "Fuerza horizontal de la bisagra",
"Vertical force from the hinge":
  "Fuerza vertical de la bisagra",
"Length of the plank or strut":
  "Longitud del tablón o del puntal",
"Cable tension":
  "Tensión del cable",
"Position of the left support":
  "Posición del soporte izquierdo",
"Position of the right support":
  "Posición del soporte derecho",
"Distance of the sign from the wall":
  "Distancia del letrero a la pared",
"Fraction of the ladder's length the person has climbed":
  "Fracción de la longitud de la escalera que ha subido la persona",
"Height of the cable's wall end above the hinge":
  "Altura del extremo del cable en la pared sobre la bisagra",
"Mass of the painter or sign":
  "Masa del pintor o del letrero",
"Mass of the ladder":
  "Masa de la escalera",
"Mass of the plank":
  "Masa del tablón",
"Mass of the strut":
  "Masa del puntal",
"Coefficient of static friction":
  "Coeficiente de fricción estática",
"Torque":
  "Torca",
"Angle of the cable to the strut, or of the ladder to the floor":
  "Ángulo del cable con el puntal, o de la escalera con el piso",
"Smallest angle before the ladder slips":
  "Ángulo más pequeño antes de que la escalera resbale",
"Position of the load from the left end":
  "Posición de la carga desde el extremo izquierdo",
"Static Equilibrium":
  "Equilibrio estático"
});
