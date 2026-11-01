/* demo/motion-graphs in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'demo/motion-graphs', {
"resid.":
  "resid.",
"Motion Graphs":
  "Gráficas de movimiento",
"A cart moves along a straight track. Its position, velocity and acceleration are graphed against time: each graph is the slope of the one above, and the area under each is the change in the one above.":
  "Un carrito se mueve por un riel recto. Su posición, velocidad y aceleración se grafican en función del tiempo: cada gráfica es la pendiente de la de arriba, y el área bajo cada una es el cambio de la de arriba.",
"A cart on a track above graphs of position, velocity and acceleration against time. Drag on a graph, or press the left and right arrow keys, to move the time marker. Space plays or pauses, R starts over. In Walk the graph, drag the cart or hold the left and right arrow keys during a run to move it.":
  "Un carrito en un riel sobre gráficas de posición, velocidad y aceleración en función del tiempo. Arrastra sobre una gráfica, o pulsa las flechas izquierda y derecha, para mover el marcador de tiempo. Espacio inicia o pausa, R empieza de nuevo. En Recorre la gráfica, arrastra el carrito o mantén pulsadas las flechas izquierda y derecha durante una corrida para moverlo.",
"Constant velocity":
  "Velocidad constante",
"Speeding up":
  "Acelerando",
"Slowing down and turning around":
  "Frenando y dando la vuelta",
"Stop and go":
  "Arrancar y parar",
"Ball thrown up":
  "Pelota lanzada hacia arriba",
"Two cars":
  "Dos autos",
"Stopping distance":
  "Distancia de frenado",
"Ball on ramps":
  "Esfera en rampas",
"Walk the graph":
  "Recorre la gráfica",
"Draw a graph":
  "Dibuja una gráfica",
"v is constant, so x is a straight line whose slope is v, and a is zero. The shaded area under v from {#} to t is how far the cart has moved.":
  "v es constante, así que x es una recta cuya pendiente es v, y a es cero. El área sombreada bajo v de {#} a t es cuánto se ha movido el carrito.",
"Motion":
  "Movimiento",
"Start position x₀":
  "Posición inicial x₀",
"Start velocity v₀":
  "Velocidad inicial v₀",
"Stage {#}":
  "Etapa {#}",
"Acceleration a":
  "Aceleración a",
"Three stages, each with a constant acceleration for a set time. Set a stage's time to {#} to skip it.":
  "Tres etapas, cada una con una aceleración constante durante un tiempo fijado. Pon el tiempo de una etapa en {#} para saltarla.",
"Draw on":
  "Dibujar en",
"Draw v against t":
  "Dibujar v en función de t",
"Draw a against t":
  "Dibujar a en función de t",
"Start from a shape":
  "Empezar desde una forma",
"Sine":
  "Senoidal",
"Steps":
  "Escalones",
"Triangle":
  "Triángulo",
"Smooth":
  "Suavizar",
"Your line is kept as values {#} s apart. Drawing v: v between them is a straight piece, so a on each piece is its slope Δv/{#} s (the derivative), and x is the area under v added to x₀ (the integral). Drawing a: each {#} s piece has your a; v is v₀ plus the area under a, and x is x₀ plus the area under v. Smooth averages each value with its neighbors ({#}, {#}, {#}), which tames the jitter of a hand drawn line; the slope of a jittery line jumps about. Turn on the tangent and the area to see the slope and the area at the time marker.":
  "Tu línea se guarda como valores separados {#} s. Al dibujar v: v entre ellos es un tramo recto, así que a en cada tramo es su pendiente Δv/{#} s (la derivada), y x es el área bajo v sumada a x₀ (la integral). Al dibujar a: cada tramo de {#} s tiene tu a; v es v₀ más el área bajo a, y x es x₀ más el área bajo v. Suavizar promedia cada valor con sus vecinos ({#}, {#}, {#}), lo que calma la irregularidad de una línea dibujada a mano; la pendiente de una línea irregular brinca. Activa la tangente y el área para ver la pendiente y el área en el marcador de tiempo.",
"Car B":
  "Auto B",
"Car A is the blue cart, set with Motion above; car B (orange) keeps one constant acceleration for the whole run. They pass each other wherever their x–t lines cross. The meeting times are worked out exactly from x_A(t) = x_B(t), a quadratic in each stage. Capture records car A.":
  "El auto A es el carrito azul, configurado con Movimiento arriba; el auto B (naranja) mantiene una sola aceleración constante durante toda la corrida. Se rebasan dondequiera que sus rectas x–t se cruzan. Los tiempos de encuentro se calculan de forma exacta a partir de x_A(t) = x_B(t), una cuadrática en cada etapa. Capturar registra el auto A.",
"Car A speed":
  "Rapidez del auto A",
"Car B speed":
  "Rapidez del auto B",
"Reaction time":
  "Tiempo de reacción",
"Braking deceleration":
  "Desaceleración de frenado",
"Both drivers see a hazard at t = {#}, at x = {#}. For the reaction time the car keeps its speed (reaction distance v t<sub>r</sub>), then it brakes with a constant deceleration b until it stops (braking distance v²/2b, from v² = v₀² − 2b d). The stopping distance is the sum: d = v t<sub>r</sub> + v²/2b. Double the speed and the reaction distance doubles, but the braking distance goes up four times.":
  "Ambos conductores ven un peligro en t = {#}, en x = {#}. Durante el tiempo de reacción el auto mantiene su rapidez (distancia de reacción v t<sub>r</sub>), luego frena con una desaceleración constante b hasta detenerse (distancia de frenado v²/2b, de v² = v₀² − 2b d). La distancia de detención es la suma: d = v t<sub>r</sub> + v²/2b. Duplica la rapidez y la distancia de reacción se duplica, pero la distancia de frenado se cuadruplica.",
"The setup opens with t<sub>r</sub> = {#} s and b = {#} m/s², close to the typical stopping distances in the UK Highway Code (rule {#}): thinking distance {#} m for each mile per hour of speed ({#} s), and braking distances from {#} m at {#} mph to {#} m at {#} mph ({#} to {#} m/s²). The Highway Code says stopping distances are at least double on wet roads (rule {#}) and can be ten times greater on ice (rule {#}); lower b to see why. The braking is taken as constant from the moment the brakes go on, and the road as level.":
  "La configuración se abre con t<sub>r</sub> = {#} s y b = {#} m/s², cerca de las distancias de detención típicas del Highway Code del Reino Unido (regla {#}): distancia de reacción de {#} m por cada milla por hora de rapidez ({#} s), y distancias de frenado desde {#} m a {#} mph hasta {#} m a {#} mph ({#} a {#} m/s²). El Highway Code dice que las distancias de detención son al menos el doble en caminos mojados (regla {#}) y pueden ser diez veces mayores en hielo (regla {#}); baja b para ver por qué. El frenado se toma como constante desde el momento en que se aplican los frenos, y el camino como horizontal.",
"Ramps":
  "Rampas",
"Piece {#} slope":
  "Pendiente del tramo {#}",
"Start speed":
  "Rapidez inicial",
"Match a graph":
  "Igualar una gráfica",
"Clear target":
  "Borrar el objetivo",
"Three straight pieces, each {#} m long; a positive slope rises to the right. The ball is a solid ball rolling without slipping, so along a piece its acceleration is a = −({#}/{#}) g sin θ, with g = {#} m/s²; there is no rolling resistance, and it keeps its speed through each bend. x is the distance along the track from the left end. A stop at each end catches the ball, and the run lasts at most {#} s.":
  "Tres tramos rectos, cada uno de {#} m de largo; una pendiente positiva sube hacia la derecha. La esfera es una esfera sólida que rueda sin deslizar, así que a lo largo de un tramo su aceleración es a = −({#}/{#}) g sen θ, con g = {#} m/s²; no hay resistencia a la rodadura, y conserva su rapidez en cada curva. x es la distancia a lo largo del riel desde el extremo izquierdo. Un tope en cada extremo atrapa la esfera, y la corrida dura a lo más {#} s.",
"Match a graph draws the x–t and v–t graphs of a hidden track as dashed lines. Set the slopes and the start speed so your graphs lie on them.":
  "Igualar una gráfica dibuja las gráficas x–t y v–t de un riel oculto como líneas discontinuas. Fija las pendientes y la rapidez inicial para que tus gráficas queden sobre ellas.",
"Start run":
  "Iniciar corrida",
"New target":
  "Nuevo objetivo",
"<span>Match a velocity graph instead</span>":
  "<span>Igualar una gráfica de velocidad en su lugar</span>",
"Average distance from the target, last run":
  "Distancia promedio al objetivo, última corrida",
"Press Start run, then drag the cart (or hold ← and →, with Shift to go faster) so its graph follows the dashed target for {#} s. The velocity and acceleration are worked out from the position samples, the way a motion detector does it, so quick jerks show up as spikes.":
  "Pulsa Iniciar corrida y luego arrastra el carrito (o mantén pulsadas ← y →, con Shift para ir más rápido) para que su gráfica siga el objetivo discontinuo durante {#} s. La velocidad y la aceleración se calculan a partir de las muestras de posición, como lo hace un detector de movimiento, así que los tirones rápidos aparecen como picos.",
"At the time marker":
  "En el marcador de tiempo",
"Position x":
  "Posición x",
"Velocity v":
  "Velocidad v",
"Displacement Δx = x − x₀ = area under v":
  "Desplazamiento Δx = x − x₀ = área bajo v",
"Change in velocity Δv = v − v₀ = area under a":
  "Cambio de velocidad Δv = v − v₀ = área bajo a",
"Speed |v|":
  "Rapidez |v|",
"Distance traveled":
  "Distancia recorrida",
"<span>Tangent lines (slope)</span>":
  "<span>Rectas tangentes (pendiente)</span>",
"<span>Shade the area from {#} to t</span>":
  "<span>Sombrear el área de {#} a t</span>",
"<span>Motion diagram: the cart every {#} s</span>":
  "<span>Diagrama de movimiento: el carrito cada {#} s</span>",
"No readings yet. Move the time marker and press Capture reading.":
  "Aún no hay lecturas. Mueve el marcador de tiempo y pulsa Capturar lectura.",
"Captured x against t with a least squares parabola and a strip of residuals.":
  "x capturada en función de t con una parábola por mínimos cuadrados y una franja de residuos.",
"Capture at least three rows.":
  "Captura al menos tres filas.",
"Plotted readings with fitted values":
  "Lecturas graficadas con valores ajustados",
"fit (m)":
  "ajuste (m)",
"Capture stores the time and position shown at the marker (t to {#} s, x to {#} m). Cells can be edited.":
  "Capturar guarda el tiempo y la posición que se muestran en el marcador (t con resolución de {#} s, x con resolución de {#} m). Las celdas se pueden editar.",
"The fit is x = x₀ + v₀t + ½at² by least squares over your rows, for one stage of constant acceleration. Capture rows from one stage only.":
  "El ajuste es x = x₀ + v₀t + ½at² por mínimos cuadrados con tus filas, para una etapa de aceleración constante. Captura filas de una sola etapa.",
"Blind hides the velocity and acceleration graphs, their readouts, the tangent lines, the areas, the stage settings and the a and v₀ from your fit, leaving the position graph, as from a motion detector. Work out v and a from it.":
  "A ciegas oculta las gráficas de velocidad y aceleración, sus lecturas, las rectas tangentes, las áreas, los ajustes de las etapas y la a y la v₀ de tu ajuste, y deja la gráfica de posición, como la de un detector de movimiento. Calcula v y a a partir de ella.",
"<a>Kinematics</a>":
  "<a>Cinemática</a>",
"<a><span>←</span> <span>Vectors and Relative Motion</span></a><a><span>Projectile Range</span> <span>→</span></a>":
  "<a><span>←</span> <span>Vectores y movimiento relativo</span></a><a><span>Alcance de proyectiles</span> <span>→</span></a>",
"Constant a = {#} m/s²: v grows as a straight line and x curves upward as a parabola. The tangent to x gets steeper; its slope is the v at that moment.":
  "a constante = {#} m/s²: v crece como una recta y x se curva hacia arriba como una parábola. La tangente a x se vuelve más empinada; su pendiente es la v en ese momento.",
"The acceleration is negative the whole time, yet the cart first moves forward. It stops at t = {#} s (v = {#}, the top of the x parabola) and comes back. a is not zero at the turning point.":
  "La aceleración es negativa todo el tiempo, y sin embargo el carrito primero avanza. Se detiene en t = {#} s (v = {#}, la cima de la parábola de x) y regresa. a no es cero en el punto de retorno.",
"Speed up, cruise, slow to a stop. Each stage has its own constant a. x is curved, straight, then curved again; v is a trapezoid, and the area under it is the total distance.":
  "Acelera, avanza a velocidad constante, frena hasta detenerse. Cada etapa tiene su propia a constante. x es curva, recta y luego curva de nuevo; v es un trapecio, y el área bajo él es la distancia total.",
"Free fall: thrown up at {#} m/s, the ball has a = −{#} m/s² the whole time, on the way up, at the top and on the way down. At the top v = {#} but a is not. It lands after 2v₀/g = {#} s, back at the height it started. Air resistance is ignored.":
  "Caída libre: lanzada hacia arriba a {#} m/s, la pelota tiene a = −{#} m/s² todo el tiempo, al subir, en la cima y al bajar. En la cima v = {#} pero a no. Cae después de 2v₀/g = {#} s, de vuelta a la altura donde empezó. Se ignora la resistencia del aire.",
"Height y":
  "Altura y",
"Car A (blue) starts from rest at x = −{#} m and speeds up at {#} m/s²; car B (orange) passes x = −{#} m at a steady {#} m/s. Where the two x–t lines cross, the cars are side by side: here at t = {#} + √{#} = {#} s, x = {#} m. Where the v–t lines cross (t = {#} s), the cars have the same velocity and the gap between them is at its largest.":
  "El auto A (azul) parte del reposo en x = −{#} m y acelera a {#} m/s²; el auto B (naranja) pasa por x = −{#} m a {#} m/s constantes. Donde se cruzan las dos rectas x–t, los autos están lado a lado: aquí en t = {#} + √{#} = {#} s, x = {#} m. Donde se cruzan las rectas v–t (t = {#} s), los autos tienen la misma velocidad y la separación entre ellos es máxima.",
"Car B position x":
  "Posición del auto B x",
"Car B velocity v":
  "Velocidad del auto B v",
"Gap x_B − x_A":
  "Separación x_B − x_A",
"Side by side":
  "Lado a lado",
"t = {#} s at x = {#} m":
  "t = {#} s en x = {#} m",
"hazard seen":
  "peligro visto",
"Two cars, side by side at x = {#} when their drivers see a hazard ahead: car A (blue) at {#} m/s ({#} km/h), car B (orange) at twice that. Each keeps its speed for the {#} s reaction time, then brakes at {#} m/s² to a stop. Car B's reaction distance is twice car A's, but its braking distance is four times as long, since it goes as v². On the v–t graph each stopping distance is the area under that car's line: a rectangle for the reaction, a triangle for the braking.":
  "Dos autos, lado a lado en x = {#} cuando sus conductores ven un peligro adelante: el auto A (azul) a {#} m/s ({#} km/h), el auto B (naranja) al doble. Cada uno mantiene su rapidez durante el tiempo de reacción de {#} s, luego frena a {#} m/s² hasta detenerse. La distancia de reacción del auto B es el doble de la del auto A, pero su distancia de frenado es cuatro veces mayor, ya que va como v². En la gráfica v–t cada distancia de detención es el área bajo la línea de ese auto: un rectángulo para la reacción, un triángulo para el frenado.",
"Car A: reaction v t<sub>r</sub> + braking v²/2b = stopping distance":
  "Auto A: reacción v t<sub>r</sub> + frenado v²/2b = distancia de detención",
"Car B: reaction v t<sub>r</sub> + braking v²/2b = stopping distance":
  "Auto B: reacción v t<sub>r</sub> + frenado v²/2b = distancia de detención",
"Car B's braking distance ÷ car A's":
  "Distancia de frenado del auto B ÷ la del auto A",
"{#}, and (v<sub>B</sub>/v<sub>A</sub>)² = {#}":
  "{#}, y (v<sub>B</sub>/v<sub>A</sub>)² = {#}",
"Brakes on, stopped":
  "Frenos aplicados, detenido",
"The ball rolls down piece {#}, coasts along the flat, and climbs the steep piece {#} until it stops and comes back. Each piece gives a straight v–t line: its slope is the acceleration along that piece, steeper for a steeper ramp, zero on the flat. With no friction losses the ball comes back to its start height with no speed left and goes again.":
  "La esfera rueda por el tramo {#}, sigue por el tramo plano y sube el tramo empinado {#} hasta detenerse y regresar. Cada tramo da una recta v–t: su pendiente es la aceleración a lo largo de ese tramo, más empinada para una rampa más empinada, cero en el tramo plano. Sin pérdidas por fricción la esfera regresa a su altura inicial sin rapidez y vuelve a empezar.",
"On the track":
  "En el riel",
"piece {#}, slope −{#}°":
  "tramo {#}, pendiente −{#}°",
"Move the cart so that its position graph follows the dashed target. Flat parts mean stand still; steeper parts mean move faster.":
  "Mueve el carrito para que su gráfica de posición siga el objetivo discontinuo. Las partes planas significan quedarse quieto; las partes más empinadas significan moverse más rápido.",
"From the motion detector":
  "Del detector de movimiento",
"v and a are estimated from position samples {#} s apart, smoothed over {#} s (v) and {#} s (a).":
  "v y a se estiman a partir de muestras de posición separadas {#} s, suavizadas en {#} s (v) y {#} s (a).",
"✎ draw on this graph":
  "✎ dibuja en esta gráfica",
"Draw any velocity graph with the mouse or a finger on the v–t pane, and see its derivative (the a–t graph, the slope of v) and its integral (the x–t graph, x₀ plus the area under v). The cart drives your motion when you press Play. Switch to drawing a, and both v and x come from areas.":
  "Dibuja cualquier gráfica de velocidad con el ratón o con un dedo en el panel v–t, y observa su derivada (la gráfica a–t, la pendiente de v) y su integral (la gráfica x–t, x₀ más el área bajo v). El carrito realiza tu movimiento cuando pulsas Iniciar. Cambia a dibujar a, y tanto v como x provienen de áreas.",
"Draw on the v–t graph. a–t shows its slope, x–t its area added to x₀.":
  "Dibuja en la gráfica v–t. a–t muestra su pendiente, x–t su área sumada a x₀.",
"Draw on the a–t graph. v–t shows v₀ plus the area under a; x–t, x₀ plus the area under v.":
  "Dibuja en la gráfica a–t. v–t muestra v₀ más el área bajo a; x–t, x₀ más el área bajo v."
});
