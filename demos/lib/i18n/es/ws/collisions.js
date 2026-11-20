/* ws/collisions in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/collisions', {
"Run/bumper":
  "Corrida/parachoques",
"Momentum and Collisions | VirtualDemos":
  "Momento y colisiones | VirtualDemos",
"Momentum and Collisions":
  "Momento y colisiones",
"<strong>Setups in the demo:</strong> Elastic, equal masses; Perfectly inelastic; Heavy hits light; Explosion; Glancing 2D collision: {#}°.":
  "<strong>Configuraciones en la demo:</strong> Elástica, masas iguales; Perfectamente inelástica; Pesado golpea a ligero; Explosión; Colisión rasante en 2D: {#}°.",
"Each cart carries a {#} cm flag. A gate times how long the flag blocks its beam, to {#} ms, and shows the speed as flag length ÷ Δt. The timer cannot tell direction: the arrow is the way the cart was seen moving. A cart at rest never reaches a gate and reads {#}. Place gates for this run sets them as you would after one trial run: gate A between cart {#}’s start and where it meets cart {#}, gate B the same for cart {#} (or {#} cm beyond a cart that starts at rest). When both carts move the same way, one gate goes where both pass before they meet and the other beyond the collision.":
  "Cada carrito lleva una bandera de {#} cm. Una fotocompuerta mide cuánto tiempo bloquea la bandera su haz, con resolución de {#} ms, y muestra la rapidez como longitud de la bandera ÷ Δt. El cronómetro no distingue la dirección: la flecha indica el sentido en que se vio moverse el carrito. Un carrito en reposo nunca llega a una compuerta y marca {#}. Colocar las compuertas para esta corrida las fija como lo harías después de una corrida de prueba: la compuerta A entre el inicio del carrito {#} y donde se encuentra con el carrito {#}, la compuerta B igual para el carrito {#} (o {#} cm más allá de un carrito que empieza en reposo). Cuando ambos carritos se mueven en el mismo sentido, una compuerta va donde ambos pasan antes de encontrarse y la otra más allá de la colisión.",
"The Sandbox scene puts any number of carts (up to {#}) on the track between two end stops: carts and velcro are dragged from the tray, each cart’s velocity and mass are set with grips, and one coefficient of restitution e applies to every bumper (a cart with velcro sticks to the cart it meets). Its own setups: Three carts; Row of five; Heavy pins light; Velcro train; Losing bounce; Empty track. The bars compare each cart’s momentum and kinetic energy now with the start, and the graph shows every cart’s position against time. It has no photogates.":
  "La escena Libre pone cualquier número de carritos (hasta {#}) en el riel entre dos topes: los carritos y el velcro se arrastran desde la bandeja, la velocidad y la masa de cada carrito se fijan con agarres, y un solo coeficiente de restitución e se aplica a todos los parachoques (un carrito con velcro se pega al carrito con el que se encuentra). Sus propias configuraciones: Tres carritos; Fila de cinco; Pesado empuja a ligero; Tren con velcro; Pérdida de rebote; Riel vacío. Las barras comparan el momento y la energía cinética de cada carrito ahora con los del inicio, y la gráfica muestra la posición de cada carrito en función del tiempo. No tiene fotocompuertas.",
"Record reading stores one finished run: the masses as displayed (in the capture message, the row’s tooltip and the CSV) and each cart’s velocity before (u) and after (v′) the collision from the gate readings, in m/s, signed +x to the right. Cells can be edited; rows stay through setup changes until Clear. Press C on the drawing to capture.":
  "Registrar lectura guarda una corrida terminada: las masas tal como se muestran (en el mensaje de captura, la información emergente de la fila y el CSV) y la velocidad de cada carrito antes (u) y después (v′) de la colisión a partir de las lecturas de las compuertas, en m/s, con signo, +x hacia la derecha. Las celdas se pueden editar; las filas se conservan al cambiar la configuración hasta Borrar. Pulsa C sobre el dibujo para capturar.",
"Test momentum conservation with measured velocities and distinguish momentum conservation from kinetic energy conservation.":
  "Pon a prueba la conservación del momento con velocidades medidas y distingue la conservación del momento de la conservación de la energía cinética.",
"Choose one positive direction for both carts. With negligible external impulse (§{#}),":
  "Elige una sola dirección positiva para ambos carritos. Con un impulso externo despreciable (§{#}),",
"Here \\(u\\) denotes velocity before the collision and \\(v\\) after it. Kinetic energy is conserved only in an elastic collision (§{#}). The coefficient of restitution compares separation speed with approach speed:":
  "Aquí \\(u\\) denota la velocidad antes de la colisión y \\(v\\) después de ella. La energía cinética se conserva solo en una colisión elástica (§{#}). El coeficiente de restitución compara la rapidez de separación con la rapidez de acercamiento:",
"\\[e=\\frac{v_2'-v_1'}{u_1-u_2}.\\]":
  "\\[e=\\frac{v_2'-v_1'}{u_1-u_2}.\\]",
"For a one dimensional collision, reduced mass \\(\\mu = m_1m_2/(m_1+m_2)\\) gives":
  "Para una colisión en una dimensión, la masa reducida \\(\\mu = m_1m_2/(m_1+m_2)\\) da",
"\\[K_i-K_f=\\frac12\\mu(1-e^2)(u_1-u_2)^2.\\]":
  "\\[K_i-K_f=\\frac12\\mu(1-e^2)(u_1-u_2)^2.\\]",
"Predict the final velocities when equal masses collide elastically and one is initially at rest.":
  "Predice las velocidades finales cuando masas iguales chocan elásticamente y una está inicialmente en reposo.",
"Derive the shared velocity when two carts stick together.":
  "Deduce la velocidad común cuando dos carritos quedan pegados.",
"Can momentum be conserved while kinetic energy decreases? Where can that energy go?":
  "¿Puede conservarse el momento mientras la energía cinética disminuye? ¿A dónde puede ir esa energía?",
"In run {#} of the scan, a {#} kg cart moving right at {#} m/s meets a {#} kg cart moving left at {#} m/s. During the collision, which pushes harder: the heavier cart on the lighter one, or the lighter cart on the heavier one? Or are the two pushes equal?":
  "En la corrida {#} del barrido, un carro de {#} kg que se mueve a la derecha a {#} m/s choca con un carro de {#} kg que se mueve a la izquierda a {#} m/s. Durante la colisión, ¿quién empuja con más fuerza: el carro más pesado sobre el más ligero, o el más ligero sobre el más pesado? ¿O los dos empujes son iguales?",
"Keep fingers out of real cart bumpers and catch carts before they leave the track. Use only the approved spring or magnetic bumper energy.":
  "Mantén los dedos lejos de los parachoques de los carritos reales y atrapa los carritos antes de que salgan del riel. Usa solo la energía aprobada de los parachoques de resorte o magnéticos.",
"<strong>Mass and speed scan.</strong> Use a level track and keep one bumper, <strong>B</strong>, for all five runs. Set the masses with the <strong>Mass m₁</strong> and <strong>Mass m₂</strong> sliders and the starting velocities with <strong>Velocity v₁</strong> and <strong>Velocity v₂</strong> ({#} m/s steps; negative is to the left). Use these five configurations, written m₁, m₂, u₁, u₂: {#} kg, {#} kg, {#} m/s, {#}; {#} kg, {#} kg, {#} m/s, −{#} m/s; {#} kg, {#} kg, {#} m/s, −{#} m/s; {#} kg, {#} kg, {#} m/s, −{#} m/s; {#} kg, {#} kg, {#} m/s, −{#} m/s. They include both positive and negative initial total momentum. Measure each signed velocity before and after collision. For run {#}, work out each cart’s change in velocity, \\(v' - u\\), and change in momentum, \\(m(v' - u)\\), which is the impulse the other cart gave it; these go in your answer to Question {#}. Before you clear, open the <strong>Plot and fit</strong> fold under Readings and note the fit of each of its three graphs, <strong>p′ vs p</strong>, <strong>Separation vs approach</strong> and <strong>K lost vs ½μu²</strong>, for Analysis {#} to {#}. Press <strong>Export to worksheet</strong>, then <strong>Clear</strong>, so the bumper comparison goes into a new copy of the table.":
  "<strong>Barrido de masa y rapidez.</strong> Usa una pista nivelada y conserva un solo tope, <strong>B</strong>, en las cinco corridas. Fija las masas con los controles deslizantes <strong>Masa m₁</strong> y <strong>Masa m₂</strong> y las velocidades iniciales con <strong>Velocidad v₁</strong> y <strong>Velocidad v₂</strong> (pasos de {#} m/s; negativa es hacia la izquierda). Usa estas cinco configuraciones, escritas m₁, m₂, u₁, u₂: {#} kg, {#} kg, {#} m/s, {#}; {#} kg, {#} kg, {#} m/s, −{#} m/s; {#} kg, {#} kg, {#} m/s, −{#} m/s; {#} kg, {#} kg, {#} m/s, −{#} m/s; {#} kg, {#} kg, {#} m/s, −{#} m/s. Incluyen cantidad de movimiento total inicial tanto positiva como negativa. Mide cada velocidad con signo antes y después de la colisión. Para la corrida {#}, calcula el cambio de velocidad de cada carro, \\(v' - u\\), y el cambio de cantidad de movimiento, \\(m(v' - u)\\), que es el impulso que le dio el otro carro; estos van en tu respuesta a la pregunta {#}. Antes de borrar, abre la sección desplegable <strong>Gráfica y ajuste</strong> bajo Lecturas y anota el ajuste de cada una de sus tres gráficas, <strong>p′ vs p</strong>, <strong>Separación vs acercamiento</strong> y <strong>K perdida vs ½μu²</strong>, para el Análisis {#} a {#}. Pulsa <strong>Exportar a la hoja</strong> y luego <strong>Borrar</strong>, de modo que la comparación de topes vaya a una copia nueva de la tabla.",
"<strong>Bumper comparison.</strong> Keep masses and initial velocities fixed at m₁ = {#} kg, m₂ = {#} kg, u₁ = {#} m/s and u₂ = −{#} m/s. Repeat with each of the bumpers A, B, C and D, then export. Infer restitution from measured velocities before revealing its value. For a sticking collision as the limiting case, afterwards untick Blind, set the <strong>Coefficient of restitution e</strong> slider to {#} and run once more.":
  "<strong>Comparación de amortiguadores.</strong> Mantén fijas las masas y las velocidades iniciales en m₁ = {#} kg, m₂ = {#} kg, u₁ = {#} m/s y u₂ = −{#} m/s. Repite con cada uno de los amortiguadores A, B, C y D, y luego exporta. Infiere la restitución a partir de las velocidades medidas antes de revelar su valor. Para una colisión pegajosa como caso límite, después desmarca A ciegas, fija el control deslizante <strong>Coeficiente de restitución e</strong> en {#} y corre una vez más.",
"<strong>Using the virtual apparatus.</strong> Press the <strong>1D track</strong> scene and tick <strong>Blind: hide predictions and answers</strong> (in the Lab fold): the e slider is then replaced by the <strong>Bumper</strong> buttons A to D. For each run: ({#}) set the sliders and the bumper, ({#}) open the <strong>Photogates</strong> fold and press <strong>Place gates for this run</strong>, and check where they sit, ({#}) press <strong>Replay</strong> (above the picture) and let the run finish, then ({#}) press <strong>Record reading</strong> under Readings. A gate gives only a speed, from the time the {#} cm flag blocks its beam; Record reading signs each velocity from the direction the cart was seen moving, so check each sign against what you saw. The first column of each row shows the run number and the bumper letter. If a cart never crosses a gate, or crosses it only partly, move the gates and run again rather than estimating a reading.":
  "<strong>Uso del aparato virtual.</strong> Pulsa la escena <strong>Riel 1D</strong> y marca <strong>A ciegas: ocultar predicciones y respuestas</strong> (en el pliegue Laboratorio): entonces el control deslizante de e se sustituye por los botones de <strong>Amortiguador</strong> de A a D. En cada corrida: ({#}) fija los controles deslizantes y el amortiguador, ({#}) abre el pliegue <strong>Fotocompuertas</strong> y pulsa <strong>Colocar compuertas para esta corrida</strong>, y comprueba dónde quedan, ({#}) pulsa <strong>Repetir</strong> (arriba de la imagen) y deja que termine la corrida, y luego ({#}) pulsa <strong>Registrar lectura</strong> en Lecturas. Una compuerta da solo una rapidez, a partir del tiempo que la bandera de {#} cm bloquea su haz; Registrar lectura le pone signo a cada velocidad según la dirección en que se vio moverse el carrito, así que comprueba cada signo con lo que viste. La primera columna de cada fila muestra el número de corrida y la letra del amortiguador. Si un carrito nunca cruza una compuerta, o la cruza solo en parte, mueve las compuertas y corre otra vez en lugar de estimar una lectura.",
"<span>A</span>Run/bumper":
  "<span>A</span>Corrida/parachoques",
"Run/bumper, row {#}":
  "Corrida/parachoques, fila {#}",
"m_1 (kg), row {#}":
  "m_1 (kg), fila {#}",
"m_2 (kg), row {#}":
  "m_2 (kg), fila {#}",
"u_1 (m/s), row {#}":
  "u_1 (m/s), fila {#}",
"u_2 (m/s), row {#}":
  "u_2 (m/s), fila {#}",
"v_1' (m/s), row {#}":
  "v_1' (m/s), fila {#}",
"v_2' (m/s), row {#}":
  "v_2' (m/s), fila {#}",
"Keep masses and signed velocities as raw data. Calculate momentum, energy and restitution afterward.":
  "Conserva las masas y las velocidades con signo como datos sin procesar. Calcula el momento, la energía y la restitución después.",
"From the <strong>p′ vs p</strong> graph (final total momentum against initial total momentum), compare the fitted slope and intercept with conservation.":
  "En la gráfica <strong>p′ vs p</strong> (momento total final contra momento total inicial), compara la pendiente y la ordenada al origen ajustadas con la conservación.",
"From the <strong>Separation vs approach</strong> graph for the bumper used in the mass and speed scan, infer \\(e\\) from the slope. For each bumper in the comparison, calculate \\(e\\) from its run.":
  "En la gráfica <strong>Separación vs acercamiento</strong> para el amortiguador usado en el barrido de masas y rapideces, infiere \\(e\\) a partir de la pendiente. Para cada amortiguador de la comparación, calcula \\(e\\) a partir de su corrida.",
"From the <strong>K lost vs ½μu²</strong> graph for that bumper (kinetic energy lost against \\(\\tfrac12\\mu(u_1-u_2)^2\\)), compare its slope with \\(1-e^2\\).":
  "En la gráfica <strong>K perdida vs ½μu²</strong> para ese amortiguador (energía cinética perdida contra \\(\\tfrac12\\mu(u_1-u_2)^2\\)), compara su pendiente con \\(1-e^2\\).",
"For one run, calculate the center of mass velocity before and after collision (§{#}) and separate the system’s overall translation from relative motion. Explain why individual cart velocities change but this velocity stays fixed.":
  "Para una corrida, calcula la velocidad del centro de masa antes y después de la colisión (§{#}) y separa la traslación global del sistema del movimiento relativo. Explica por qué las velocidades de los carritos individuales cambian pero esta velocidad se mantiene fija.",
"In run {#}, how did the two carts’ momentum changes compare, and how did their velocity changes compare? Was your answer to Before the lab {#} right? Use Newton’s third law to explain both comparisons, and why equal and opposite contact forces conserve total momentum.":
  "En la corrida {#}, ¿cómo se compararon los cambios de cantidad de movimiento de los dos carros y cómo se compararon sus cambios de velocidad? ¿Acertó tu respuesta a Antes del laboratorio {#}? Usa la tercera ley de Newton para explicar ambas comparaciones, y por qué fuerzas de contacto iguales y opuestas conservan la cantidad de movimiento total.",
"What external effects could spoil a real track experiment?":
  "¿Qué efectos externos podrían arruinar un experimento real en un riel?",
"For courses that treat measurement uncertainty. This section is not counted in the {#} minutes; do it when your instructor assigns it.":
  "Para cursos que tratan la incertidumbre de medición. Esta sección no cuenta dentro de los {#} minutos; hazla cuando tu profesor la asigne.",
"Propagate mass and gate time resolution into momentum and energy. Gate times are rounded to {#} ms in the simulation; short crossings can have substantial fractional uncertainty. Use signed differences and a nonzero momentum scale when initial total momentum is near zero. Do not divide by zero to report a percentage error. Give the fitted slopes and intercepts in Analysis {#} to {#} with their standard errors, and say whether each agrees with its predicted value within them.":
  "Propaga la masa y la resolución temporal de las compuertas al momento y a la energía. En la simulación los tiempos de las compuertas se redondean a {#} ms; los cruces cortos pueden tener una incertidumbre relativa considerable. Usa diferencias con signo y una escala de momento distinta de cero cuando el momento total inicial sea cercano a cero. No dividas entre cero para reportar un error porcentual. Da las pendientes y ordenadas al origen ajustadas en los Análisis {#} a {#} con sus errores estándar, y di si cada una coincide con su valor predicho dentro de ellos.",
"Prelab answers, settings and CSV, the three graphs, inferred restitution, a center of mass calculation, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.":
  "Respuestas del prelaboratorio, ajustes y CSV, las tres gráficas, la restitución inferida, un cálculo del centro de masa y respuestas a las preguntas (y de Incertidumbre, si se asigna). Identifica los datos simulados.",
"Kinetic energy after the collision":
  "Energía cinética después de la colisión",
"Kinetic energy before the collision":
  "Energía cinética antes de la colisión",
"Coefficient of restitution":
  "Coeficiente de restitución",
"Mass of a cart":
  "Masa de un carrito",
"Mass of cart {#}":
  "Masa del carrito {#}",
"Reduced mass, m₁m₂/(m₁ + m₂)":
  "Masa reducida, m₁m₂/(m₁ + m₂)",
"Velocity before the collision":
  "Velocidad antes de la colisión",
"Velocity of cart {#} before the collision":
  "Velocidad del carrito {#} antes de la colisión",
"Velocity after the collision":
  "Velocidad después de la colisión",
"Velocity of a cart after the collision":
  "Velocidad de un carrito después de la colisión",
"Velocity of cart {#} after the collision":
  "Velocidad del carrito {#} después de la colisión",
"Collisions":
  "Colisiones",
"<strong>Mass and speed scan.</strong> Use a level track and keep one bumper, <strong>B</strong>, for all five runs. Set the masses with the <strong>Mass m₁</strong> and <strong>Mass m₂</strong> sliders and the starting velocities with <strong>Velocity v₁</strong> and <strong>Velocity v₂</strong> ({#} m/s steps; negative is to the left). Use these five configurations, written m₁, m₂, u₁, u₂: {#} kg, {#} kg, {#} m/s, {#}; {#} kg, {#} kg, {#} m/s, −{#} m/s; {#} kg, {#} kg, {#} m/s, −{#} m/s; {#} kg, {#} kg, {#} m/s, −{#} m/s; {#} kg, {#} kg, {#} m/s, −{#} m/s. They include both positive and negative initial total momentum. Measure each signed velocity before and after collision. Before you clear, open the <strong>Plot and fit</strong> fold under Readings and note the fit of each of its three graphs, <strong>p′ vs p</strong>, <strong>Separation vs approach</strong> and <strong>K lost vs ½μu²</strong>, for Analysis {#} to {#}. Press <strong>Export to worksheet</strong>, then <strong>Clear</strong>, so the bumper comparison goes into a new copy of the table.":
  "<strong>Barrido de masas y rapideces.</strong> Usa un riel nivelado y conserva un mismo amortiguador, <strong>B</strong>, en las cinco corridas. Fija las masas con los controles deslizantes <strong>Masa m₁</strong> y <strong>Masa m₂</strong> y las velocidades iniciales con <strong>Velocidad v₁</strong> y <strong>Velocidad v₂</strong> (pasos de {#} m/s; negativo es hacia la izquierda). Usa estas cinco configuraciones, escritas m₁, m₂, u₁, u₂: {#} kg, {#} kg, {#} m/s, {#}; {#} kg, {#} kg, {#} m/s, −{#} m/s; {#} kg, {#} kg, {#} m/s, −{#} m/s; {#} kg, {#} kg, {#} m/s, −{#} m/s; {#} kg, {#} kg, {#} m/s, −{#} m/s. Incluyen momentos totales iniciales tanto positivos como negativos. Mide cada velocidad con signo antes y después de la colisión. Antes de borrar, abre el pliegue <strong>Gráfica y ajuste</strong> bajo Lecturas y anota el ajuste de cada una de sus tres gráficas, <strong>p′ vs p</strong>, <strong>Separación vs acercamiento</strong> y <strong>K perdida vs ½μu²</strong>, para los Análisis {#} a {#}. Pulsa <strong>Exportar a la hoja</strong>, y luego <strong>Borrar</strong>, para que la comparación de amortiguadores vaya a una copia nueva de la tabla.",
"Why does equal and opposite contact force conserve total momentum?":
  "¿Por qué una fuerza de contacto igual y opuesta conserva el momento total?",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"<strong>Mass and speed scan.</strong> Use a level track. Keep one bumper type fixed and collect five approaching cart configurations with varied masses or speeds. Measure each signed velocity before and after collision. Include both positive and negative initial total momentum where practical.":
  "<strong>Barrido de masa y rapidez.</strong> Usa un riel nivelado. Mantén fijo un tipo de parachoques y reúne cinco configuraciones de carritos que se acercan con masas o rapideces variadas. Mide cada velocidad con signo antes y después de la colisión. Incluye momento total inicial positivo y negativo cuando sea práctico.",
"<strong>Bumper comparison.</strong> Keep masses and initial velocities fixed. Repeat with at least three bumper types. Infer restitution from measured velocities before revealing its value. Include a sticking collision as a limiting case if the apparatus supports it.":
  "<strong>Comparación de parachoques.</strong> Mantén fijas las masas y las velocidades iniciales. Repite con al menos tres tipos de parachoques. Infiere la restitución a partir de las velocidades medidas antes de revelar su valor. Incluye una colisión en la que quedan pegados como caso límite si el aparato lo permite.",
"<strong>Center of mass.</strong> For one run, compare the center of mass velocity before and after collision (§{#}). Explain why individual cart velocities change but this velocity stays fixed.":
  "<strong>Centro de masa.</strong> Para una corrida, compara la velocidad del centro de masa antes y después de la colisión (§{#}). Explica por qué las velocidades de los carritos individuales cambian pero esta velocidad se mantiene fija.",
"<strong>Using the virtual apparatus.</strong> Work on the straight track with predictions and answers hidden. Before each run, place the gates for that run and check where they sit; <strong>Place gates for this run</strong> sets them as you would after a trial run. Let each run finish before you record it. A gate gives only a speed, from the time the {#} cm flag blocks its beam, so attach the direction you saw the cart move to make each velocity signed. If a cart never crosses a gate, or crosses it only partly, move the gates and run again rather than estimating a reading. Send your runs to the worksheet, then compare them with the demo’s graphs of momentum after against momentum before, separation speed against approach speed, and kinetic energy lost against \\(\\tfrac12\\mu u^2\\).":
  "<strong>Uso del aparato virtual.</strong> Trabaja en el riel recto con las predicciones y respuestas ocultas. Antes de cada corrida, coloca las compuertas para esa corrida y revisa dónde quedan; <strong>Colocar las compuertas para esta corrida</strong> las fija como lo harías después de una corrida de prueba. Deja que cada corrida termine antes de registrarla. Una compuerta da solo una rapidez, a partir del tiempo que la bandera de {#} cm bloquea su haz, así que agrega el sentido en que viste moverse el carrito para que cada velocidad tenga signo. Si un carrito nunca cruza una compuerta, o la cruza solo en parte, mueve las compuertas y corre de nuevo en vez de estimar una lectura. Envía tus corridas a la hoja de trabajo y luego compáralas con las gráficas de la demo de momento después en función de momento antes, rapidez de separación en función de rapidez de acercamiento, y energía cinética perdida en función de \\(\\tfrac12\\mu u^2\\).",
"Plot final total momentum against initial total momentum. Compare the fitted slope/intercept with conservation.":
  "Grafica el momento total final en función del momento total inicial. Compara la pendiente y la ordenada al origen ajustadas con la conservación.",
"For the bumper used in the mass and speed scan, plot separation speed against approach speed and infer \\(e\\) from the slope. For each bumper in the comparison, calculate \\(e\\) from its run.":
  "Para el parachoques usado en el barrido de masas y rapideces, grafica la rapidez de separación en función de la rapidez de acercamiento e infiere \\(e\\) a partir de la pendiente. Para cada parachoques de la comparación, calcula \\(e\\) a partir de su corrida.",
"Plot kinetic energy lost against \\(\\tfrac12\\mu(u_1-u_2)^2\\) for one bumper. Compare its slope with \\(1-e^2\\).":
  "Grafica la energía cinética perdida en función de \\(\\tfrac12\\mu(u_1-u_2)^2\\) para un parachoques. Compara su pendiente con \\(1-e^2\\).",
"Calculate the center of mass velocity and separate the system’s overall translation from relative motion.":
  "Calcula la velocidad del centro de masa y separa la traslación global del sistema del movimiento relativo.",
"Why is \\(e\\) a speed ratio rather than a ratio of total kinetic energies?":
  "¿Por qué \\(e\\) es una razón de rapideces y no una razón de energías cinéticas totales?",
"Why is kinetic energy loss nonnegative for \\(0 \\le e \\le 1\\)?":
  "¿Por qué la pérdida de energía cinética no es negativa para \\(0 \\le e \\le 1\\)?"
});
