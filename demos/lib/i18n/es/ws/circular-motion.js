/* ws/circular-motion in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/circular-motion', {
"tanθ":
  "tanθ",
"Outcome":
  "Resultado",
"Speed Limits on Curves and Loops | VirtualDemos":
  "Límites de rapidez en curvas y rizos | VirtualDemos",
"Speed Limits on Curves and Loops":
  "Límites de rapidez en curvas y rizos",
"Five setups: a ball on a string on a table, a car on a flat curve, a car on a banked curve, a car speeding up or braking on a curve, and a ball inside a vertical loop. Each shows the motion, the velocity and acceleration arrows, and a free body diagram.":
  "Cinco configuraciones: una pelota atada a una cuerda sobre una mesa, un auto en una curva plana, un auto en una curva peraltada, un auto que acelera o frena en una curva y una pelota dentro de un rizo vertical. Cada una muestra el movimiento, las flechas de velocidad y aceleración, y un diagrama de cuerpo libre.",
"Record reading stores the setup, \\(r\\), \\(\\mu_s\\), the bank angle, \\(m\\), the speed and what happens at that speed (the car holds the curve or slides off; on the banked curve, which way friction points; the ball goes round the loop, leaves the track, or stops and slides back). Readings are recorded in the flat curve, banked curve and loop setups. Export to worksheet sends them here.":
  "Registrar lectura guarda la configuración, \\(r\\), \\(\\mu_s\\), el ángulo de peralte, \\(m\\), la rapidez y lo que pasa a esa rapidez (el auto se mantiene en la curva o se derrapa; en la curva peraltada, hacia dónde apunta la fricción; la pelota da la vuelta al rizo, se despega de la pista o se detiene y resbala de regreso). Las lecturas se registran en las configuraciones de curva plana, curva peraltada y rizo. Exportar a la hoja las envía aquí.",
"Blind hides the force sizes (the free body diagram shows directions only), \\(a = v^2/r\\) and every predicted limit, leaving the settings and the motion. Keep it on for this lab.":
  "A ciegas oculta las magnitudes de las fuerzas (el diagrama de cuerpo libre muestra solo las direcciones), \\(a = v^2/r\\) y todos los límites predichos, y deja los ajustes y el movimiento. Mantenlo activado en este laboratorio.",
"The cars are shown at a quarter of real speed and the loop at half speed so the motion is easy to follow; every number is for real time.":
  "Los autos se muestran a un cuarto de su rapidez real y el rizo a la mitad para que el movimiento sea fácil de seguir; todos los números son para el tiempo real.",
"Point objects, \\(g = 9.81\\ \\text{m/s}^2\\). Cars: static friction from the road up to \\(\\mu_s N\\), no air resistance, no rolling resistance. The loop is frictionless and the ball is treated as sliding (no rotational energy). The ball on a string moves on a frictionless table.":
  "Objetos puntuales, \\(g = 9.81\\ \\text{m/s}^2\\). Autos: fricción estática del camino hasta \\(\\mu_s N\\), sin resistencia del aire ni resistencia a la rodadura. El rizo no tiene fricción y la pelota se trata como si se deslizara (sin energía de rotación). La pelota atada a la cuerda se mueve sobre una mesa sin fricción.",
"The speed slider moves in steps of {#} m/s, so a limit can be found to within one step.":
  "El deslizador de rapidez se mueve en pasos de {#} m/s, así que un límite puede encontrarse dentro de un paso.",
"Find, by trying speeds, the fastest a car can take a flat curve, the speed a banked curve is built for, and the slowest a ball can enter a vertical loop and still go all the way round. Compare each with the prediction from Newton’s second law for circular motion.":
  "Encuentra, probando rapideces, lo más rápido que un auto puede tomar una curva plana, la rapidez para la que está construida una curva peraltada y lo más lento que una pelota puede entrar en un rizo vertical y aun así dar la vuelta completa. Compara cada una con la predicción de la segunda ley de Newton para el movimiento circular.",
"An object moving at speed \\(v\\) on a circle of radius \\(r\\) accelerates towards the center with \\(a_c = v^2/r\\), so the forces on it must add up to a net force \\(mv^2/r\\) towards the center.":
  "Un objeto que se mueve con rapidez \\(v\\) en un círculo de radio \\(r\\) acelera hacia el centro con \\(a_c = v^2/r\\), así que las fuerzas sobre él deben sumar una fuerza neta \\(mv^2/r\\) hacia el centro.",
"<strong>Flat curve.</strong> Static friction from the road is the only horizontal force on the car. It can be at most \\(\\mu_s N = \\mu_s mg\\), so the car holds the curve only while \\(mv^2/r \\le \\mu_s mg\\):":
  "<strong>Curva plana.</strong> La fricción estática del camino es la única fuerza horizontal sobre el auto. Puede ser a lo más \\(\\mu_s N = \\mu_s mg\\), así que el auto se mantiene en la curva solo mientras \\(mv^2/r \\le \\mu_s mg\\):",
"\\[v_\\text{max} = \\sqrt{\\mu_s g r}, \\qquad v_\\text{max}^2 = \\mu_s g\\,r.\\]":
  "\\[v_\\text{max} = \\sqrt{\\mu_s g r}, \\qquad v_\\text{max}^2 = \\mu_s g\\,r.\\]",
"<strong>Banked curve.</strong> On a road tilted at angle \\(\\theta\\), the normal force leans towards the center. At one speed it supplies the whole centripetal force and no friction is needed: \\(N\\sin\\theta = mv^2/r\\) and \\(N\\cos\\theta = mg\\), so":
  "<strong>Curva peraltada.</strong> En un camino inclinado un ángulo \\(\\theta\\), la fuerza normal se inclina hacia el centro. A una rapidez proporciona toda la fuerza centrípeta y no se necesita fricción: \\(N\\sin\\theta = mv^2/r\\) y \\(N\\cos\\theta = mg\\), así que",
"\\[v_\\text{ideal}^2 = r g \\tan\\theta.\\]":
  "\\[v_\\text{ideal}^2 = r g \\tan\\theta.\\]",
"Slower than this, friction must point up the slope; faster, down the slope.":
  "Más lento que esto, la fricción debe apuntar pendiente arriba; más rápido, pendiente abajo.",
"<strong>Vertical loop.</strong> At the top of a loop of radius \\(r\\), gravity and the track both push towards the center, so the ball needs \\(v_\\text{top}^2 \\ge g r\\) to stay on the track. Energy conservation from the bottom, \\(v_0^2 = v_\\text{top}^2 + 2g(2r)\\), then gives":
  "<strong>Rizo vertical.</strong> En la parte alta de un rizo de radio \\(r\\), la gravedad y la pista empujan ambas hacia el centro, así que la pelota necesita \\(v_\\text{top}^2 \\ge g r\\) para mantenerse en la pista. La conservación de la energía desde abajo, \\(v_0^2 = v_\\text{top}^2 + 2g(2r)\\), da entonces",
"\\[v_0^2 \\ge 5 g r.\\]":
  "\\[v_0^2 \\ge 5 g r.\\]",
"A ball with \\(v_0^2 \\le 2gr\\) never rises past the level of the loop’s center: it stops and slides back. In between, the normal force reaches zero somewhere in the upper half and the ball leaves the track.":
  "Una pelota con \\(v_0^2 \\le 2gr\\) nunca sube más allá del nivel del centro del rizo: se detiene y resbala de regreso. Entre ambos casos, la fuerza normal llega a cero en algún lugar de la mitad superior y la pelota se despega de la pista.",
"A ball whirled on a string on a frictionless table: the string is cut. Sketch the path the ball takes afterwards, and explain why.":
  "Una pelota que gira atada a una cuerda sobre una mesa sin fricción: se corta la cuerda. Haz un esquema de la trayectoria que sigue la pelota después, y explica por qué.",
"A car takes a flat curve of radius {#} m on a dry road (\\(\\mu_s = 0.70\\)). Calculate its top speed. Does a heavier car have a higher top speed? Explain.":
  "Un auto toma una curva plana de radio {#} m en un camino seco (\\(\\mu_s = 0.70\\)). Calcula su rapidez máxima. ¿Un auto más pesado tiene una rapidez máxima mayor? Explica.",
"What bank angle lets a car take a {#} m curve at {#} m/s with no friction at all?":
  "¿Qué ángulo de peralte permite que un auto tome una curva de {#} m a {#} m/s sin ninguna fricción?",
"Calculate the least speed at the bottom of a loop of radius {#} m that takes a ball all the way round.":
  "Calcula la rapidez mínima en la parte baja de un rizo de radio {#} m que lleva a una pelota a dar la vuelta completa.",
"There is no physical apparatus. On a real road, curve speed limits are set well below \\(\\sqrt{\\mu_s g r}\\): wet roads, worn tires and braking in the curve all lower the grip that is left.":
  "No hay aparato físico. En un camino real, los límites de rapidez en las curvas se fijan muy por debajo de \\(\\sqrt{\\mu_s g r}\\): los caminos mojados, las llantas gastadas y frenar en la curva reducen el agarre que queda.",
"Hide the predictions (Blind) before you start, so the limits are not shown. For each setting, change the speed one step at a time and watch what happens; record a reading only at the limit described.":
  "Oculta las predicciones (A ciegas) antes de empezar, para que no se muestren los límites. Para cada ajuste, cambia la rapidez un paso a la vez y observa qué pasa; registra una lectura solo en el límite descrito.",
"<strong>Part {#}: flat curve.</strong> With \\(m = 1200\\ \\text{kg}\\) and \\(\\mu_s = 0.70\\), find the highest speed at which the car still holds the curve (one step faster, it slides off) for \\(r\\) = {#}, {#}, {#}, {#} and {#} m. Send these readings to the worksheet, then clear the demo’s readings. Then, at \\(r = 60\\ \\text{m}\\), find the same limit with \\(m\\) = {#} kg and {#} kg, and with \\(m = 1200\\ \\text{kg}\\) on a wet road, \\(\\mu_s = 0.40\\). Send these three as a second series, then clear.":
  "<strong>Parte {#}: curva plana.</strong> Con \\(m = 1200\\ \\text{kg}\\) y \\(\\mu_s = 0.70\\), encuentra la mayor rapidez a la que el auto todavía se mantiene en la curva (un paso más rápido, se derrapa) para \\(r\\) = {#}, {#}, {#}, {#} y {#} m. Envía estas lecturas a la hoja de trabajo y luego borra las lecturas de la demo. Después, con \\(r = 60\\ \\text{m}\\), encuentra el mismo límite con \\(m\\) = {#} kg y {#} kg, y con \\(m = 1200\\ \\text{kg}\\) en un camino mojado, \\(\\mu_s = 0.40\\). Envía estas tres como una segunda serie y luego borra.",
"<strong>Part {#}: banked curve.</strong> With \\(r = 50\\ \\text{m}\\), \\(\\mu_s = 0.30\\) and \\(m = 1200\\ \\text{kg}\\), find for bank angles of {#}°, {#}°, {#}°, {#}°, {#}° and {#}° the highest speed at which friction on the free body diagram still points up the slope (one step faster, it points down the slope or is not needed). Send these readings, then clear.":
  "<strong>Parte {#}: curva peraltada.</strong> Con \\(r = 50\\ \\text{m}\\), \\(\\mu_s = 0.30\\) y \\(m = 1200\\ \\text{kg}\\), encuentra para ángulos de peralte de {#}°, {#}°, {#}°, {#}°, {#}° y {#}° la mayor rapidez a la que la fricción en el diagrama de cuerpo libre todavía apunta pendiente arriba (un paso más rápido, apunta pendiente abajo o no se necesita). Envía estas lecturas y luego borra.",
"<strong>Part {#}: vertical loop.</strong> With \\(m = 0.5\\ \\text{kg}\\), find the lowest speed at the bottom that takes the ball all the way round (one step slower, it leaves the track) for \\(r\\) = {#}, {#}, {#}, {#}, {#} and {#} m. Send these readings. At \\(r = 1.5\\ \\text{m}\\), also find the highest bottom speed at which the ball stops and slides back without leaving the track, and write it in the table’s notes.":
  "<strong>Parte {#}: rizo vertical.</strong> Con \\(m = 0.5\\ \\text{kg}\\), encuentra la menor rapidez en la parte baja que lleva a la pelota a dar la vuelta completa (un paso más lento, se despega de la pista) para \\(r\\) = {#}, {#}, {#}, {#}, {#} y {#} m. Envía estas lecturas. Con \\(r = 1.5\\ \\text{m}\\), encuentra también la mayor rapidez en la parte baja a la que la pelota se detiene y resbala de regreso sin despegarse de la pista, y escríbela en las notas de la tabla.",
"<span>D</span>\\(\\mu_s\\)":
  "<span>D</span>\\(\\mu_s\\)",
"<span>E</span>\\(\\theta\\) (°)":
  "<span>E</span>\\(\\theta\\) (°)",
"<span>F</span>\\(\\tan\\theta\\)":
  "<span>F</span>\\(\\tan\\theta\\)",
"<span>J</span>Outcome":
  "<span>J</span>Resultado",
"r (m), row {#}":
  "r (m), fila {#}",
"μ_s, row {#}":
  "μ_s, fila {#}",
"tanθ, row {#}":
  "tanθ, fila {#}",
"v (m/s), row {#}":
  "v (m/s), fila {#}",
"v^{#} (m²/s²), row {#}":
  "v^{#} (m²/s²), fila {#}",
"Outcome, row {#}":
  "Resultado, fila {#}",
"Keep each series in its own copy of the table, labeled with the part. The speed recorded is on one side of the limit: note in each table which side.":
  "Mantén cada serie en su propia copia de la tabla, etiquetada con la parte. La rapidez registrada está de un lado del límite: anota en cada tabla de qué lado.",
"Part {#}: plot \\(v^2\\) against \\(r\\) for the five radii at \\(\\mu_s = 0.70\\) and fit a line. Compare the slope with \\(\\mu_s g\\). Does the intercept agree with zero? What do the {#} kg, {#} kg and wet road readings show? Compare the wet road limit with \\(\\sqrt{\\mu_s g r}\\).":
  "Parte {#}: grafica \\(v^2\\) en función de \\(r\\) para los cinco radios con \\(\\mu_s = 0.70\\) y ajusta una recta. Compara la pendiente con \\(\\mu_s g\\). ¿La ordenada al origen coincide con cero? ¿Qué muestran las lecturas de {#} kg, {#} kg y del camino mojado? Compara el límite del camino mojado con \\(\\sqrt{\\mu_s g r}\\).",
"Part {#}: plot \\(v^2\\) against \\(\\tan\\theta\\) and fit a line. Compare the slope with \\(rg\\).":
  "Parte {#}: grafica \\(v^2\\) en función de \\(\\tan\\theta\\) y ajusta una recta. Compara la pendiente con \\(rg\\).",
"Part {#}: plot \\(v_0^2\\) against \\(r\\) for the six loops and fit a line. Compare the slope with \\(5g\\). Compare the slide back reading at {#} m with \\(\\sqrt{2gr}\\).":
  "Parte {#}: grafica \\(v_0^2\\) en función de \\(r\\) para los seis rizos y ajusta una recta. Compara la pendiente con \\(5g\\). Compara la lectura de regreso a {#} m con \\(\\sqrt{2gr}\\).",
"Each recorded speed lies within one {#} m/s step of the true limit, on a known side. Which way does this shift each of your three slopes? Correct your Part {#} slope by using the midpoint of each step, and compare again.":
  "Cada rapidez registrada está dentro de un paso de {#} m/s del límite real, de un lado conocido. ¿En qué sentido desplaza esto cada una de tus tres pendientes? Corrige tu pendiente de la Parte {#} usando el punto medio de cada paso, y compara de nuevo.",
"The only uncertainty in the virtual readings is the {#} m/s step: the true limit lies between the recorded speed and the next step. It is a one sided error, not random scatter, so the standard error of a fitted slope does not describe it. Estimate its effect on \\(v^2\\) at your smallest and largest speeds. On a real road, \\(\\mu_s\\) itself is uncertain by tens of percent and changes with the surface, the tires and the weather.":
  "La única incertidumbre en las lecturas virtuales es el paso de {#} m/s: el límite real está entre la rapidez registrada y el siguiente paso. Es un error de un solo lado, no una dispersión aleatoria, así que el error estándar de una pendiente ajustada no lo describe. Estima su efecto en \\(v^2\\) a tus rapideces menor y mayor. En un camino real, \\(\\mu_s\\) misma tiene una incertidumbre de decenas por ciento y cambia con la superficie, las llantas y el clima.",
"Why does the mass of the car not change its top speed on a flat curve, or its ideal speed on a banked curve?":
  "¿Por qué la masa del auto no cambia su rapidez máxima en una curva plana, ni su rapidez ideal en una curva peraltada?",
"On the banked curve, why can a car with friction go both slower and faster than the ideal speed without sliding? Which way would a car slide if it went too slowly on an icy banked road?":
  "En la curva peraltada, ¿por qué un auto con fricción puede ir tanto más lento como más rápido que la rapidez ideal sin derraparse? ¿Hacia dónde se deslizaría un auto que fuera demasiado lento en un camino peraltado con hielo?",
"A ball enters the loop with \\(v_0^2\\) between \\(2gr\\) and \\(5gr\\). Where does it leave the track, and what path does it follow after that?":
  "Una pelota entra al rizo con \\(v_0^2\\) entre \\(2gr\\) y \\(5gr\\). ¿Dónde se despega de la pista, y qué trayectoria sigue después?",
"A car speeds up while it goes round a flat curve. Why does it slide off at a lower speed than a car going round at constant speed?":
  "Un auto acelera mientras toma una curva plana. ¿Por qué se derrapa a una rapidez menor que un auto que la toma a rapidez constante?",
"Prelab answers, the data tables with which side of each limit you recorded, the three fits with their residuals compared with \\(\\mu_s g\\), \\(rg\\) and \\(5g\\), the corrected Part {#} slope, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las tablas de datos indicando de qué lado de cada límite registraste, los tres ajustes con sus residuos comparados con \\(\\mu_s g\\), \\(rg\\) y \\(5g\\), la pendiente corregida de la Parte {#}, y respuestas a las preguntas. Identifica los datos simulados.",
"Normal force":
  "Fuerza normal",
"Centripetal acceleration":
  "Aceleración centrípeta",
"Coefficient of static friction":
  "Coeficiente de fricción estática",
"Radius of the circle":
  "Radio del círculo",
"Bank angle":
  "Ángulo de peralte",
"Speed at the bottom of the loop":
  "Rapidez en la parte baja del rizo",
"Speed at which a banked curve needs no friction":
  "Rapidez a la que una curva peraltada no necesita fricción",
"Fastest speed a flat curve holds":
  "Rapidez máxima que admite una curva plana",
"Speed at the top of the loop":
  "Rapidez en la parte alta del rizo",
"Circular Motion":
  "Movimiento circular"
});
