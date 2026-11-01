/* ws/relative-motion in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/relative-motion', {
"Track":
  "Pista",
"Cart speed v (m/s)":
  "Rapidez del carrito v (m/s)",
"Launch speed u (m/s)":
  "Rapidez de lanzamiento u (m/s)",
"Cart acceleration a (m/s²)":
  "Aceleración del carrito a (m/s²)",
"Incline θ (°)":
  "Plano inclinado θ (°)",
"Time in the air t (s)":
  "Tiempo en el aire t (s)",
"Ball moves (m)":
  "La pelota se mueve (m)",
"Cart moves (m)":
  "El carrito se mueve (m)",
"Ball relative to the launcher Δ x (cm)":
  "Pelota respecto al lanzador Δ x (cm)",
"Lands":
  "Cae en",
"Relative Motion: A Ball Launched from a Moving Cart | VirtualDemos":
  "Movimiento relativo: una pelota lanzada desde un carrito en movimiento | VirtualDemos",
"Relative Motion: A Ball Launched from a Moving Cart":
  "Movimiento relativo: una pelota lanzada desde un carrito en movimiento",
"<strong>Setups in the demo:</strong> Steady cart; Cart at rest; Cart speeds up; Cart brakes; Frictionless incline.":
  "<strong>Configuraciones en la demo:</strong> Carrito constante; Carrito en reposo; El carrito acelera; El carrito frena; Plano inclinado sin fricción.",
"A cart rolls along a track and, as it passes a trigger, its launcher fires a ball perpendicular to the track. The knobs on the panel in the picture set the <strong>Cart speed at launch</strong>, the <strong>Launch speed (relative to the cart)</strong> and the <strong>Cart acceleration after launch (negative brakes)</strong>; on the Frictionless incline setup the third knob sets the <strong>Incline angle</strong> instead. Changing a knob resets the run.":
  "Un carrito rueda por una pista y, al pasar por un disparador, su lanzador dispara una pelota perpendicular a la pista. Las perillas del panel en la imagen fijan la <strong>Rapidez del carrito en el lanzamiento</strong>, la <strong>Rapidez de lanzamiento (relativa al carrito)</strong> y la <strong>Aceleración del carrito después del lanzamiento (negativa frena)</strong>; en la configuración Plano inclinado sin fricción la tercera perilla fija en cambio el <strong>Ángulo del plano inclinado</strong>. Cambiar una perilla reinicia la corrida.",
"<strong>Watch from</strong> the ground or the cart. Seen from the cart, the velocity and acceleration arrows are relative to the cart. Strobe images mark the ball and the cart every eighth of the flight, and the graph under the track shows the position along the track of the cart (solid) and the ball (dashed) against time.":
  "<strong>Observar desde</strong> el suelo o el carrito. Vistas desde el carrito, las flechas de velocidad y aceleración son relativas al carrito. Imágenes estroboscópicas marcan la pelota y el carrito cada octavo del vuelo, y la gráfica bajo la pista muestra la posición a lo largo de la pista del carrito (continua) y de la pelota (punteada) en función del tiempo.",
"The readouts give the time in the air (until the ball is back at the launcher’s height), how far the ball and the cart moved along the track in that time, where the ball came down relative to the launcher (+ ahead of it, − behind it, in cm) and where the ball finally landed.":
  "Las lecturas dan el tiempo en el aire (hasta que la pelota vuelve a la altura del lanzador), cuánto se movieron la pelota y el carrito a lo largo de la pista en ese tiempo, dónde cayó la pelota respecto al lanzador (+ delante, − detrás, en cm) y dónde aterrizó finalmente la pelota.",
"Record reading works once the ball has come down; it stores the settings and those readouts. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura funciona una vez que la pelota ha caído; guarda los ajustes y esas lecturas. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar inicia una serie nueva, que va a una nueva copia de la tabla.",
"Blind pauses each launch at the top of the flight and hides where the ball will land until you resume.":
  "A ciegas pausa cada lanzamiento en el punto más alto del vuelo y oculta dónde caerá la pelota hasta que reanudes.",
"\\(g = 9.81\\ \\text{m/s}^2\\), a point ball and no air resistance. The launcher fires perpendicular to the track, so the launch pushes the cart into the track, not along it, and does not change the cart’s speed.":
  "\\(g = 9.81\\ \\text{m/s}^2\\), una pelota puntual y sin resistencia del aire. El lanzador dispara perpendicular a la pista, así que el lanzamiento empuja el carrito contra la pista, no a lo largo de ella, y no cambia la rapidez del carrito.",
"On the level track the cart keeps a constant speed, or has the set acceleration from the moment of launch (a motor push or a brake). A braking cart stops and stays stopped.":
  "En la pista horizontal el carrito mantiene una rapidez constante, o tiene la aceleración fijada desde el momento del lanzamiento (el empuje de un motor o un freno). Un carrito que frena se detiene y permanece detenido.",
"On the incline the cart rolls without friction, so its acceleration along the track is \\(g\\sin\\theta\\).":
  "En el plano inclinado el carrito rueda sin fricción, así que su aceleración a lo largo de la pista es \\(g\\sin\\theta\\).",
"The ball counts as caught if it comes down within {#} cm of the launcher’s center. Sizes are to scale.":
  "La pelota cuenta como atrapada si cae a menos de {#} cm del centro del lanzador. Los tamaños están a escala.",
"Use a ball fired straight up from a moving cart to test the addition of velocities, find the time of flight from the motion seen from the ground, and predict where the ball lands when the cart speeds up or slows down after the launch.":
  "Usa una pelota disparada hacia arriba desde un carrito en movimiento para poner a prueba la suma de velocidades, encuentra el tiempo de vuelo a partir del movimiento visto desde el suelo, y predice dónde cae la pelota cuando el carrito acelera o frena después del lanzamiento.",
"Velocities add (§{#}): the ball’s velocity relative to the ground is its velocity relative to the cart plus the cart’s velocity relative to the ground,":
  "Las velocidades se suman (§{#}): la velocidad de la pelota respecto al suelo es su velocidad respecto al carrito más la velocidad del carrito respecto al suelo,",
"\\[\\vec v_{\\text{BG}} = \\vec v_{\\text{BC}} + \\vec v_{\\text{CG}}.\\]":
  "\\[\\vec v_{\\text{BG}} = \\vec v_{\\text{BC}} + \\vec v_{\\text{CG}}.\\]",
"The launcher gives the ball a speed \\(u\\) straight up relative to the cart, so on a level track the ball leaves the launcher with the cart’s speed \\(v\\) horizontally and \\(u\\) vertically. In the air its horizontal velocity stays \\(v\\) and its vertical acceleration is \\(-g\\) (§{#}), so it is back at the launcher’s height after":
  "El lanzador da a la pelota una rapidez \\(u\\) hacia arriba relativa al carrito, así que en una pista horizontal la pelota sale del lanzador con la rapidez del carrito \\(v\\) en horizontal y \\(u\\) en vertical. En el aire su velocidad horizontal sigue siendo \\(v\\) y su aceleración vertical es \\(-g\\) (§{#}), así que vuelve a la altura del lanzador después de",
"\\[t = \\frac{2u}{g}.\\]":
  "\\[t = \\frac{2u}{g}.\\]",
"In that time the ball moves \\(vt\\) along the track. If the cart keeps its speed, it also moves \\(vt\\) and the ball comes down in the launcher. If the cart has an acceleration \\(a\\) after the launch, it moves \\(vt + \\tfrac12 a t^2\\), and the ball comes down a distance":
  "En ese tiempo la pelota se mueve \\(vt\\) a lo largo de la pista. Si el carrito mantiene su rapidez, también se mueve \\(vt\\) y la pelota cae en el lanzador. Si el carrito tiene una aceleración \\(a\\) después del lanzamiento, se mueve \\(vt + \\tfrac12 a t^2\\), y la pelota cae a una distancia",
"\\[\\Delta x = -\\tfrac12 a t^2\\]":
  "\\[\\Delta x = -\\tfrac12 a t^2\\]",
"from the launcher (behind it when the cart speeds up, ahead of it when the cart brakes, as long as the braking cart has not stopped).":
  "del lanzador (detrás de él cuando el carrito acelera, delante cuando el carrito frena, siempre que el carrito que frena no se haya detenido).",
"On a frictionless incline both the cart and the ball have the acceleration \\(g\\sin\\theta\\) along the track, and the launcher fires perpendicular to the track, where the ball’s acceleration is \\(-g\\cos\\theta\\). The ball is back at the launcher’s height after \\(t = 2u/(g\\cos\\theta)\\).":
  "En un plano inclinado sin fricción, tanto el carrito como la pelota tienen la aceleración \\(g\\sin\\theta\\) a lo largo de la pista, y el lanzador dispara perpendicular a la pista, donde la aceleración de la pelota es \\(-g\\cos\\theta\\). La pelota vuelve a la altura del lanzador después de \\(t = 2u/(g\\cos\\theta)\\).",
"A cart moves at {#} m/s and fires a ball at {#} m/s straight up relative to the cart. What are the ball’s speed and direction relative to the ground just after the launch?":
  "Un carrito se mueve a {#} m/s y dispara una pelota a {#} m/s hacia arriba relativa al carrito. ¿Cuáles son la rapidez y la dirección de la pelota respecto al suelo justo después del lanzamiento?",
"Predict where the ball comes down if the cart keeps its speed, and if the cart brakes after the launch.":
  "Predice dónde cae la pelota si el carrito mantiene su rapidez, y si el carrito frena después del lanzamiento.",
"Sketch the ball’s path as seen from the ground and as seen from the cart, for a cart moving at constant speed.":
  "Esboza la trayectoria de la pelota vista desde el suelo y vista desde el carrito, para un carrito que se mueve a rapidez constante.",
"On a frictionless incline the cart speeds up as it rolls. Do you expect the ball to land back in the launcher? Explain.":
  "En un plano inclinado sin fricción el carrito acelera al rodar. ¿Esperas que la pelota caiga de nuevo en el lanzador? Explica.",
"On a real track, keep hands and faces out of the launcher’s line, wear eye protection, catch the cart at the end of the track and keep the floor clear of balls.":
  "En una pista real, mantén las manos y la cara fuera de la línea del lanzador, usa protección para los ojos, atrapa el carrito al final de la pista y mantén el piso libre de pelotas.",
"<strong>Steady cart.</strong> On the level track, with a launch speed of {#} m/s relative to the cart and no acceleration after the launch, launch at cart speeds of {#}, {#}, {#}, {#}, {#}, {#} and {#} m/s. For each launch record the time in the air, how far the ball and the cart move, and where the ball comes down relative to the launcher. Watch at least one launch from the cart as well as from the ground.":
  "<strong>Carrito constante.</strong> En la pista horizontal, con una rapidez de lanzamiento de {#} m/s relativa al carrito y sin aceleración después del lanzamiento, lanza con rapideces del carrito de {#}, {#}, {#}, {#}, {#}, {#} y {#} m/s. Para cada lanzamiento registra el tiempo en el aire, cuánto se mueven la pelota y el carrito, y dónde cae la pelota respecto al lanzador. Observa al menos un lanzamiento desde el carrito además de desde el suelo.",
"<strong>Cart accelerates after the launch.</strong> Keep the launch speed at {#} m/s and set the cart speed at launch to {#} m/s. Launch with cart accelerations of −{#}, −{#}, −{#}, {#}, {#}, {#} and {#} m/s² (negative values brake the cart). At {#} m/s the braking cart is still moving when the ball comes down; from a slower start it can stop first, and then the miss no longer follows the formula in the Background.":
  "<strong>El carrito acelera después del lanzamiento.</strong> Mantén la rapidez de lanzamiento en {#} m/s y fija la rapidez del carrito en el lanzamiento en {#} m/s. Lanza con aceleraciones del carrito de −{#}, −{#}, −{#}, {#}, {#}, {#} y {#} m/s² (los valores negativos frenan el carrito). A {#} m/s el carrito que frena sigue moviéndose cuando cae la pelota; desde un inicio más lento puede detenerse antes, y entonces la distancia del fallo ya no sigue la fórmula de la sección Fondo.",
"<strong>Frictionless incline.</strong> On the Frictionless incline setup, with a launch speed of {#} m/s and a cart speed at launch of {#} m/s, launch at incline angles of {#}°, {#}°, {#}°, {#}°, {#}° and {#}°.":
  "<strong>Plano inclinado sin fricción.</strong> En la configuración Plano inclinado sin fricción, con una rapidez de lanzamiento de {#} m/s y una rapidez del carrito en el lanzamiento de {#} m/s, lanza con ángulos del plano inclinado de {#}°, {#}°, {#}°, {#}°, {#}° y {#}°.",
"<strong>Using the virtual apparatus.</strong> Record each launch after the ball has come down. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table. Turn Blind on if you want to predict each landing before you see it, and off again to read the results.":
  "<strong>Uso del aparato virtual.</strong> Registra cada lanzamiento después de que la pelota haya caído. Envía cada parte a la hoja antes de borrar, para que cada parte tenga su propia copia de la tabla de datos. Activa A ciegas si quieres predecir cada aterrizaje antes de verlo, y desactívalo de nuevo para leer los resultados.",
"<span>B</span>Track":
  "<span>B</span>Pista",
"<span>C</span>Cart speed \\(v\\) (m/s)":
  "<span>C</span>Rapidez del carrito \\(v\\) (m/s)",
"<span>D</span>Launch speed \\(u\\) (m/s)":
  "<span>D</span>Rapidez de lanzamiento \\(u\\) (m/s)",
"<span>E</span>Cart acceleration \\(a\\) (m/s²)":
  "<span>E</span>Aceleración del carrito \\(a\\) (m/s²)",
"<span>F</span>Incline \\(\\theta\\) (°)":
  "<span>F</span>Plano inclinado \\(\\theta\\) (°)",
"<span>G</span>Time in the air \\(t\\) (s)":
  "<span>G</span>Tiempo en el aire \\(t\\) (s)",
"<span>H</span>Ball moves (m)":
  "<span>H</span>La pelota se mueve (m)",
"<span>I</span>Cart moves (m)":
  "<span>I</span>El carrito se mueve (m)",
"<span>J</span>Ball relative to the launcher \\(\\Delta x\\) (cm)":
  "<span>J</span>Pelota respecto al lanzador \\(\\Delta x\\) (cm)",
"<span>K</span>Lands":
  "<span>K</span>Cae en",
"Track, row {#}":
  "Pista, fila {#}",
"Cart speed v (m/s), row {#}":
  "Rapidez del carrito v (m/s), fila {#}",
"Launch speed u (m/s), row {#}":
  "Rapidez de lanzamiento u (m/s), fila {#}",
"Cart acceleration a (m/s²), row {#}":
  "Aceleración del carrito a (m/s²), fila {#}",
"Incline θ (°), row {#}":
  "Plano inclinado θ (°), fila {#}",
"Time in the air t (s), row {#}":
  "Tiempo en el aire t (s), fila {#}",
"Ball moves (m), row {#}":
  "La pelota se mueve (m), fila {#}",
"Cart moves (m), row {#}":
  "El carrito se mueve (m), fila {#}",
"Ball relative to the launcher Δ x (cm), row {#}":
  "Pelota respecto al lanzador Δ x (cm), fila {#}",
"Lands, row {#}":
  "Cae en, fila {#}",
"Keep the steady cart, accelerating cart and incline launches in separate copies of the table.":
  "Guarda los lanzamientos del carrito constante, del carrito que acelera y del plano inclinado en copias separadas de la tabla.",
"For the steady cart, graph how far the ball moves against the cart speed \\(v\\) and fit a line. What does the slope measure? Compare it with the time in the air and with \\(2u/g\\), and compare the ball’s distances with the cart’s.":
  "Para el carrito constante, grafica cuánto se mueve la pelota en función de la rapidez del carrito \\(v\\) y ajusta una recta. ¿Qué mide la pendiente? Compárala con el tiempo en el aire y con \\(2u/g\\), y compara las distancias de la pelota con las del carrito.",
"For the accelerating cart, graph \\(\\Delta x\\) against the cart acceleration \\(a\\) and fit a line. Use the slope to find the time in the air and then \\(g\\). Compare with Analysis {#}.":
  "Para el carrito que acelera, grafica \\(\\Delta x\\) en función de la aceleración del carrito \\(a\\) y ajusta una recta. Usa la pendiente para encontrar el tiempo en el aire y luego \\(g\\). Compara con el Análisis {#}.",
"For the incline, compare each time in the air with \\(2u/(g\\cos\\theta)\\). Where did the ball come down each time, and why?":
  "Para el plano inclinado, compara cada tiempo en el aire con \\(2u/(g\\cos\\theta)\\). ¿Dónde cayó la pelota cada vez, y por qué?",
"For one steady cart launch at {#} m/s, find the ball’s velocity relative to the ground just after the launch (speed and angle) and its highest point above the launcher. Compare with the demo’s readouts.":
  "Para un lanzamiento con carrito constante a {#} m/s, encuentra la velocidad de la pelota respecto al suelo justo después del lanzamiento (rapidez y ángulo) y su punto más alto sobre el lanzador. Compáralos con las lecturas de la demo.",
"The demo rounds the time in the air to {#} s, distances along the track to {#} m and \\(\\Delta x\\) to {#} cm; the settings are exact. Estimate how much that rounding could change your slopes, and compare with the fit’s standard errors. On a real track, list what would add scatter: the cart’s speed changing slightly along the track, the launcher’s timing and aim, air resistance, and how well you can see where the ball lands.":
  "La demo redondea el tiempo en el aire a {#} s, las distancias a lo largo de la pista a {#} m y \\(\\Delta x\\) a {#} cm; los ajustes son exactos. Estima cuánto podría cambiar ese redondeo tus pendientes, y compáralo con los errores estándar del ajuste. En una pista real, enumera lo que agregaría dispersión: que la rapidez del carrito cambie un poco a lo largo de la pista, el tiempo y la puntería del lanzador, la resistencia del aire, y qué tan bien puedes ver dónde cae la pelota.",
"Seen from a cart moving at constant speed, what path does the ball follow? Why is that what Newton’s first law predicts?":
  "Vista desde un carrito que se mueve a rapidez constante, ¿qué trayectoria sigue la pelota? ¿Por qué es eso lo que predice la primera ley de Newton?",
"Seen from a braking cart, the ball seems to move forward with no force pushing it forward. Explain what is really happening.":
  "Vista desde un carrito que frena, la pelota parece moverse hacia adelante sin que ninguna fuerza la empuje hacia adelante. Explica qué está pasando en realidad.",
"On the incline the cart speeds up after the launch, yet the ball still lands in it. Why is this different from the cart that a motor speeds up on the level?":
  "En el plano inclinado el carrito acelera después del lanzamiento, y aun así la pelota cae en él. ¿Por qué esto es distinto del carrito que un motor acelera en la pista horizontal?",
"A passenger on a train moving at constant velocity drops a coin. Where does it land? Where would it land if the train were braking?":
  "Un pasajero en un tren que se mueve a velocidad constante deja caer una moneda. ¿Dónde cae? ¿Dónde caería si el tren estuviera frenando?",
"Prelab answers, the three table copies with their graphs and fits, the time in the air and \\(g\\) from each graph, the incline comparison, the launch velocity calculation, the uncertainty discussion and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las tres copias de la tabla con sus gráficas y ajustes, el tiempo en el aire y \\(g\\) de cada gráfica, la comparación del plano inclinado, el cálculo de la velocidad de lanzamiento, la discusión de la incertidumbre y las respuestas a las preguntas. Identifica los datos simulados.",
"Acceleration of the cart":
  "Aceleración del carrito",
"Time in the air":
  "Tiempo en el aire",
"Angle of the incline":
  "Ángulo del plano inclinado",
"Launch speed, straight up relative to the cart":
  "Rapidez de lanzamiento, hacia arriba relativa al carrito",
"Cart speed":
  "Rapidez del carrito",
"Velocity of the ball relative to the cart":
  "Velocidad de la pelota respecto al carrito",
"Velocity of the ball relative to the ground":
  "Velocidad de la pelota respecto al suelo",
"Velocity of the cart relative to the ground":
  "Velocidad del carrito respecto al suelo",
"Position along the track (Δx: where the ball lands relative to the launcher)":
  "Posición a lo largo de la pista (Δx: dónde cae la pelota respecto al lanzador)",
"Ball Launched from a Moving Cart":
  "Pelota lanzada desde un carrito en movimiento"
});
