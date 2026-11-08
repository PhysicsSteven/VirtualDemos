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
"Keep fingers out of real cart bumpers and catch carts before they leave the track. Use only the approved spring or magnetic bumper energy.":
  "Mantén los dedos lejos de los parachoques de los carritos reales y atrapa los carritos antes de que salgan del riel. Usa solo la energía aprobada de los parachoques de resorte o magnéticos.",
"<strong>Mass and speed scan.</strong> Use a level track. Keep one bumper type fixed and collect five approaching cart configurations with varied masses or speeds. Measure each signed velocity before and after collision. Include both positive and negative initial total momentum where practical.":
  "<strong>Barrido de masa y rapidez.</strong> Usa un riel nivelado. Mantén fijo un tipo de parachoques y reúne cinco configuraciones de carritos que se acercan con masas o rapideces variadas. Mide cada velocidad con signo antes y después de la colisión. Incluye momento total inicial positivo y negativo cuando sea práctico.",
"<strong>Bumper comparison.</strong> Keep masses and initial velocities fixed. Repeat with at least three bumper types. Infer restitution from measured velocities before revealing its value. Include a sticking collision as a limiting case if the apparatus supports it.":
  "<strong>Comparación de parachoques.</strong> Mantén fijas las masas y las velocidades iniciales. Repite con al menos tres tipos de parachoques. Infiere la restitución a partir de las velocidades medidas antes de revelar su valor. Incluye una colisión en la que quedan pegados como caso límite si el aparato lo permite.",
"<strong>Center of mass.</strong> For one run, compare the center of mass velocity before and after collision (§{#}). Explain why individual cart velocities change but this velocity stays fixed.":
  "<strong>Centro de masa.</strong> Para una corrida, compara la velocidad del centro de masa antes y después de la colisión (§{#}). Explica por qué las velocidades de los carritos individuales cambian pero esta velocidad se mantiene fija.",
"<strong>Using the virtual apparatus.</strong> Work on the straight track with predictions and answers hidden. Before each run, place the gates for that run and check where they sit; <strong>Place gates for this run</strong> sets them as you would after a trial run. Let each run finish before you record it. A gate gives only a speed, from the time the {#} cm flag blocks its beam, so attach the direction you saw the cart move to make each velocity signed. If a cart never crosses a gate, or crosses it only partly, move the gates and run again rather than estimating a reading. Send your runs to the worksheet, then compare them with the demo’s graphs of momentum after against momentum before, separation speed against approach speed, and kinetic energy lost against \\(\\tfrac12\\mu u^2\\).":
  "<strong>Uso del aparato virtual.</strong> Trabaja en el riel recto con las predicciones y respuestas ocultas. Antes de cada corrida, coloca las compuertas para esa corrida y revisa dónde quedan; <strong>Colocar las compuertas para esta corrida</strong> las fija como lo harías después de una corrida de prueba. Deja que cada corrida termine antes de registrarla. Una compuerta da solo una rapidez, a partir del tiempo que la bandera de {#} cm bloquea su haz, así que agrega el sentido en que viste moverse el carrito para que cada velocidad tenga signo. Si un carrito nunca cruza una compuerta, o la cruza solo en parte, mueve las compuertas y corre de nuevo en vez de estimar una lectura. Envía tus corridas a la hoja de trabajo y luego compáralas con las gráficas de la demo de momento después en función de momento antes, rapidez de separación en función de rapidez de acercamiento, y energía cinética perdida en función de \\(\\tfrac12\\mu u^2\\).",
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
"Plot final total momentum against initial total momentum. Compare the fitted slope/intercept with conservation.":
  "Grafica el momento total final en función del momento total inicial. Compara la pendiente y la ordenada al origen ajustadas con la conservación.",
"For each bumper, plot separation speed against approach speed. Infer \\(e\\) from the slope.":
  "Para cada parachoques, grafica la rapidez de separación en función de la rapidez de acercamiento. Infiere \\(e\\) a partir de la pendiente.",
"Plot kinetic energy lost against \\(\\tfrac12\\mu(u_1-u_2)^2\\) for one bumper. Compare its slope with \\(1-e^2\\).":
  "Grafica la energía cinética perdida en función de \\(\\tfrac12\\mu(u_1-u_2)^2\\) para un parachoques. Compara su pendiente con \\(1-e^2\\).",
"Calculate the center of mass velocity and separate the system’s overall translation from relative motion.":
  "Calcula la velocidad del centro de masa y separa la traslación global del sistema del movimiento relativo.",
"Propagate mass and gate time resolution into momentum and energy. Gate times are rounded to {#} ms in the simulation; short crossings can have substantial fractional uncertainty. Use signed differences and a nonzero momentum scale when initial total momentum is near zero. Do not divide by zero to report a percentage error.":
  "Propaga la masa y la resolución temporal de las compuertas al momento y a la energía. En la simulación los tiempos de las compuertas se redondean a {#} ms; los cruces cortos pueden tener una incertidumbre relativa considerable. Usa diferencias con signo y una escala de momento distinta de cero cuando el momento total inicial sea cercano a cero. No dividas entre cero para reportar un error porcentual.",
"Why does equal and opposite contact force conserve total momentum?":
  "¿Por qué una fuerza de contacto igual y opuesta conserva el momento total?",
"Why is \\(e\\) a speed ratio rather than a ratio of total kinetic energies?":
  "¿Por qué \\(e\\) es una razón de rapideces y no una razón de energías cinéticas totales?",
"What external effects could spoil a real track experiment?":
  "¿Qué efectos externos podrían arruinar un experimento real en un riel?",
"Why is kinetic energy loss nonnegative for \\(0 \\le e \\le 1\\)?":
  "¿Por qué la pérdida de energía cinética no es negativa para \\(0 \\le e \\le 1\\)?",
"Prelab answers, settings and CSV, the three graphs, inferred restitution, a center of mass calculation, uncertainty and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ajustes y CSV, las tres gráficas, la restitución inferida, un cálculo del centro de masa, la incertidumbre y respuestas a las preguntas. Identifica los datos simulados.",
"Kinetic energy after the collision":
  "Energía cinética después de la colisión",
"Kinetic energy before the collision":
  "Energía cinética antes de la colisión",
"Coefficient of restitution":
  "Coeficiente de restitución",
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
"Velocity of cart {#} after the collision":
  "Velocidad del carrito {#} después de la colisión",
"Collisions":
  "Colisiones"
});
