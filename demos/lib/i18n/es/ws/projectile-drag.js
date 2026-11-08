/* ws/projectile-drag in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/projectile-drag', {
"Shot":
  "Disparo",
"Air on/off":
  "Aire sí/no",
"Angle θ (°)":
  "Ángulo θ (°)",
"Launches n":
  "Lanzamientos n",
"Mean range bar R (m)":
  "Alcance medio R barra (m)",
"Standard deviation σ (m)":
  "Desviación estándar σ (m)",
"Standard error σ/√ n (m)":
  "Error estándar σ/√ n (m)",
"Projectile Motion and Air Resistance | VirtualDemos":
  "Movimiento de proyectiles y resistencia del aire | VirtualDemos",
"Projectile Motion and Air Resistance":
  "Movimiento de proyectiles y resistencia del aire",
"<strong>Setups in the demo:</strong> Baseball; Ping pong ball; Cannonball; Shot put; Soccer ball; Heavy vs light, same size.":
  "<strong>Configuraciones en la demo:</strong> Pelota de béisbol; Pelota de ping pong; Bala de cañón; Lanzamiento de bala; Balón de futbol; Pesada contra ligera, mismo tamaño.",
"Many launches gives each shot its own angle and speed, drawn at random from normal distributions around the settings with the spreads you choose; it shows the landings, a histogram, the mean, the standard deviation (n − {#}) and the standard error. The random numbers come from a seeded generator, so the data are simulated.":
  "Muchos lanzamientos le da a cada disparo su propio ángulo y su propia rapidez, sacados al azar de distribuciones normales alrededor de los ajustes con las dispersiones que elijas; muestra los aterrizajes, un histograma, la media, la desviación estándar (n − {#}) y el error estándar. Los números aleatorios vienen de un generador con semilla, así que los datos son simulados.",
"R range, H highest point, T flight time. Settings that differ between shots are in bold. Click a shot to load its settings into the controls. Up to {#} shots; the oldest drops off.":
  "R alcance, H punto más alto, T tiempo de vuelo. Los ajustes que difieren entre disparos están en negritas. Haz clic en un disparo para cargar sus ajustes en los controles. Hasta {#} disparos; el más antiguo se descarta.",
"Drag in the view to aim, drag the arrow tip to change the speed too, and drag the hub up to raise the launcher. On the view, arrow keys change the angle,":
  "Arrastra en la vista para apuntar, arrastra la punta de la flecha para cambiar también la rapidez, y arrastra el eje hacia arriba para subir el lanzador. En la vista, las flechas cambian el ángulo,",
"the height,":
  "la altura,",
"launches.":
  "lanzamientos.",
"The time cursor sits on a dot of the selected shot: \\(t\\) is a whole number of dot intervals after launch. Click a time graph to place it, or use the buttons, or":
  "El cursor de tiempo está sobre un punto del disparo seleccionado: \\(t\\) es un número entero de intervalos entre puntos después del lanzamiento. Haz clic en una gráfica de tiempo para colocarlo, o usa los botones, o",
"on the view (":
  "en la vista (",
"jump to launch and the last dot). \\(x\\) and \\(y\\) read to {#} cm from the launcher’s foot; \\(R\\) is where the ball lands, to {#} cm.":
  "saltan al lanzamiento y al último punto). \\(x\\) y \\(y\\) se leen con resolución de {#} cm desde el pie del lanzador; \\(R\\) es donde aterriza la pelota, con resolución de {#} cm.",
"Record reading stores what you read for the selected shot: its settings as displayed, the cursor’s t, x and y, and its range R. Cells can be edited; rows stay through preset changes until Clear. The CSV also has x and every setting.":
  "Registrar lectura guarda lo que lees para el disparo seleccionado: sus ajustes tal como se muestran, la t, x e y del cursor, y su alcance R. Las celdas se pueden editar; las filas se conservan al cambiar de configuración hasta Borrar. El CSV también tiene x y todos los ajustes.",
"Turning air resistance off keeps you on Earth with the same ball and the same air; only the drag force is switched off. Moon removes the air itself but keeps Earth’s g = {#} m/s². A drag coefficient of {#} does the same thing gradually. Sea level is the standard atmosphere, {#} kg/m³ ({#} kPa, {#} °C); Denver is {#} kg/m³, the standard pressure at {#} m ({#} kPa) at about {#} °C.":
  "Desactivar la resistencia del aire te mantiene en la Tierra con la misma pelota y el mismo aire; solo se desactiva la fuerza de arrastre. Luna quita el aire mismo pero conserva la g terrestre = {#} m/s². Un coeficiente de arrastre de {#} hace lo mismo de manera gradual. Nivel del mar es la atmósfera estándar, {#} kg/m³ ({#} kPa, {#} °C); Denver es {#} kg/m³, la presión estándar a {#} m ({#} kPa) a unos {#} °C.",
"<strong>Current settings</strong> gives what the next shot will do; each shot in the list keeps its own numbers. <strong>Terminal speed</strong> gives \\(v_t\\) and \\(v_0/v_t\\): drag matters when the launch speed is comparable to or larger than \\(v_t\\).":
  "<strong>Ajustes actuales</strong> da lo que hará el próximo disparo; cada disparo de la lista conserva sus propios números. <strong>Rapidez terminal</strong> da \\(v_t\\) y \\(v_0/v_t\\): el arrastre importa cuando la rapidez de lanzamiento es comparable a \\(v_t\\) o mayor.",
"<strong>Plot and fit</strong>, under the captured readings, fits your rows: <strong>y against t</strong> with a parabola \\(y = a + bt + ct^2\\) (giving \\(g = -2c\\) and \\(b\\)), and <strong>R against sin {#}θ</strong> with a straight line (giving its slope and \\(g = v_0^2/\\text{slope}\\)), each with residuals. It fits the rows you have captured, so fit a scan before you clear it. The worksheet’s graph fits the same quadratic to \\(y\\) against \\(t\\) (choose a quadratic fit), with all three coefficients and their uncertainties and the residuals, and straight lines such as \\(x\\) against \\(t\\).":
  "<strong>Gráfica y ajuste</strong>, bajo las lecturas capturadas, ajusta tus filas: <strong>y en función de t</strong> con una parábola \\(y = a + bt + ct^2\\) (que da \\(g = -2c\\) y \\(b\\)), y <strong>R en función de sin {#}θ</strong> con una recta (que da su pendiente y \\(g = v_0^2/\\text{slope}\\)), cada una con residuos. Ajusta las filas que has capturado, así que ajusta un barrido antes de borrarlo. La gráfica de la hoja de trabajo ajusta la misma cuadrática a \\(y\\) en función de \\(t\\) (elige un ajuste cuadrático), con los tres coeficientes y sus incertidumbres y los residuos, y rectas como \\(x\\) en función de \\(t\\).",
"Blind hides g, the vacuum path, the next shot preview, the predicted range, height, time and best angles, the terminal speed, the model curves on the range graph and the drag graph. The flight of each shot, the dots, the cursor reading and the range of each shot stay, as a real camera and tape would give them. Reduce motion shows each shot already landed instead of flying.":
  "A ciegas oculta g, la trayectoria en el vacío, la vista previa del próximo disparo, el alcance, la altura y el tiempo predichos y los mejores ángulos, la rapidez terminal, las curvas del modelo en la gráfica de alcance y la gráfica de arrastre. El vuelo de cada disparo, los puntos, la lectura del cursor y el alcance de cada disparo se quedan, como los darían una cámara y una cinta reales. Reducir movimiento muestra cada disparo ya aterrizado en vez de volando.",
"From ground level in vacuum the best angle is {#}°. Drag lowers it. So does launching from above the ground, even with no air.":
  "Desde el nivel del suelo en el vacío el mejor ángulo es {#}°. El arrastre lo reduce. También lo reduce lanzar desde arriba del suelo, aun sin aire.",
"Model: drag \\(F = \\tfrac{1}{2}\\rho C_d A v^2\\) against the velocity with constant \\(C_d\\), no spin, no wind, flat ground, \\(g\\) and \\(\\rho\\) constant with height. Fourth order Runge–Kutta with steps of at most {#} ms; the landing point is interpolated within the last step. The balls are drawn larger than scale.":
  "Modelo: arrastre \\(F = \\tfrac{1}{2}\\rho C_d A v^2\\) en contra de la velocidad con \\(C_d\\) constante, sin giro, sin viento, suelo plano, \\(g\\) y \\(\\rho\\) constantes con la altura. Runge–Kutta de cuarto orden con pasos de a lo más {#} ms; el punto de aterrizaje se interpola dentro del último paso. Las pelotas se dibujan más grandes que a escala.",
"Infer gravitational acceleration from a trajectory and a range scan, then measure how air resistance changes the result.":
  "Infiere la aceleración de la gravedad a partir de una trayectoria y de un barrido de alcance, y luego mide cómo cambia el resultado la resistencia del aire.",
"With negligible air resistance and \\(y\\) positive upward (§{#}),":
  "Con resistencia del aire despreciable y \\(y\\) positiva hacia arriba (§{#}),",
"\\[\\begin{gathered} x=v_0\\cos\\theta\\,t, \\\\[4pt] y=y_0+v_0\\sin\\theta\\,t-\\frac12gt^2. \\end{gathered}\\]":
  "\\[\\begin{gathered} x=v_0\\cos\\theta\\,t, \\\\[4pt] y=y_0+v_0\\sin\\theta\\,t-\\frac12gt^2. \\end{gathered}\\]",
"If launch and landing heights are equal,":
  "Si las alturas de lanzamiento y de aterrizaje son iguales,",
"\\[R=\\frac{v_0^2}{g}\\sin(2\\theta).\\]":
  "\\[R=\\frac{v_0^2}{g}\\sin(2\\theta).\\]",
"Air resistance (§{#}) opposes the velocity. Its effect depends on speed, shape, area and mass, so the vacuum range formula is a comparison model rather than a general drag solution.":
  "La resistencia del aire (§{#}) se opone a la velocidad. Su efecto depende de la rapidez, la forma, el área y la masa, así que la fórmula de alcance en el vacío es un modelo de comparación y no una solución general con arrastre.",
"Predict which of {#}° and {#}° gives the larger range in vacuum at equal launch speed and height.":
  "Predice cuál de {#}° y {#}° da el mayor alcance en el vacío con igual rapidez y altura de lanzamiento.",
"Explain how a quadratic fit \\(y = a + bt + ct^2\\) can determine \\(g\\).":
  "Explica cómo un ajuste cuadrático \\(y = a + bt + ct^2\\) puede determinar \\(g\\).",
"Why does changing launch height invalidate the simple range formula?":
  "¿Por qué cambiar la altura de lanzamiento invalida la fórmula simple del alcance?",
"On a real projectile bench, keep the landing area clear and follow the instructor’s launcher and eye protection procedures. Do not aim toward people.":
  "En un banco de proyectiles real, mantén despejada la zona de aterrizaje y sigue los procedimientos del instructor para el lanzador y la protección ocular. No apuntes hacia las personas.",
"<strong>Trajectory.</strong> Launch from a measured height with air resistance negligible. Record at least eight positions and times over the flight. Use the same launch speed and angle throughout this run.":
  "<strong>Trayectoria.</strong> Lanza desde una altura medida con resistencia del aire despreciable. Registra al menos ocho posiciones y tiempos durante el vuelo. Usa la misma rapidez y el mismo ángulo de lanzamiento en toda esta corrida.",
"<strong>Range.</strong> Use equal launch and landing heights and \\(v_0 = 20\\ \\text{m/s}\\) in the simulation, or assigned real values. Measure range at {#}°, {#}°, {#}°, {#}°, {#}°, {#}° and {#}°. Keep speed fixed.":
  "<strong>Alcance.</strong> Usa alturas de lanzamiento y de aterrizaje iguales y \\(v_0 = 20\\ \\text{m/s}\\) en la simulación, o los valores reales asignados. Mide el alcance a {#}°, {#}°, {#}°, {#}°, {#}°, {#}° y {#}°. Mantén fija la rapidez.",
"<strong>Drag.</strong> Repeat selected angles with air on, keeping ball properties fixed. Compare the range and angle of maximum range with the vacuum results. Compare heavy and light balls of the same size without changing their launch speed.":
  "<strong>Arrastre.</strong> Repite ángulos seleccionados con aire, manteniendo fijas las propiedades de la pelota. Compara el alcance y el ángulo de alcance máximo con los resultados en el vacío. Compara pelotas pesadas y ligeras del mismo tamaño sin cambiar su rapidez de lanzamiento.",
"<strong>Using the virtual apparatus.</strong> Start with air resistance off, set the launch speed, angle and height, and hide the predictions and answers before you launch. Show time dots at an interval you choose, and record the time and position at each dot you use. Send each scan to the worksheet before clearing, so the trajectory and the range scan each get their own copy of the Data table. Fit the trajectory in the worksheet: a quadratic for \\(y\\) against \\(t\\) and a straight line for \\(x\\) against \\(t\\). The Data table has no \\(\\sin 2\\theta\\) column, so fit \\(R\\) against \\(\\sin 2\\theta\\) in the demo before you clear the range scan. Every recorded row keeps its shot’s settings, so do not mix launch speeds in one range fit. For drag, turn air resistance on and record the air density and the ball’s settings.":
  "<strong>Uso del aparato virtual.</strong> Empieza con la resistencia del aire desactivada, fija la rapidez, el ángulo y la altura de lanzamiento, y oculta las predicciones y respuestas antes de lanzar. Muestra puntos de tiempo con un intervalo que elijas, y registra el tiempo y la posición en cada punto que uses. Envía cada barrido a la hoja de trabajo antes de borrar, para que la trayectoria y el barrido de alcance tengan cada uno su propia copia de la tabla de Datos. Ajusta la trayectoria en la hoja de trabajo: una cuadrática para \\(y\\) en función de \\(t\\) y una recta para \\(x\\) en función de \\(t\\). La tabla de Datos no tiene una columna de \\(\\sin 2\\theta\\), así que ajusta \\(R\\) en función de \\(\\sin 2\\theta\\) en la demo antes de borrar el barrido de alcance. Cada fila registrada conserva los ajustes de su disparo, así que no mezcles rapideces de lanzamiento en un mismo ajuste de alcance. Para el arrastre, activa la resistencia del aire y registra la densidad del aire y los ajustes de la pelota.",
"<strong>Many launches.</strong> A real launcher never fires two shots exactly alike. With air resistance off, a baseball at {#} m/s from the ground, and a spread of {#}° in angle and {#}% in speed, fire {#} launches, then {#} more, then {#} more, and record the number of launches, the mean range, the standard deviation and the standard error after each. Repeat at {#}°. Record these in Table {#} by hand.":
  "<strong>Muchos lanzamientos.</strong> Un lanzador real nunca dispara dos tiros exactamente iguales. Con la resistencia del aire desactivada, una pelota de béisbol a {#} m/s desde el suelo, y una dispersión de {#}° en el ángulo y {#}% en la rapidez, haz {#} lanzamientos, luego {#} más, luego {#} más, y registra el número de lanzamientos, el alcance medio, la desviación estándar y el error estándar después de cada tanda. Repite a {#}°. Anótalos a mano en la Tabla {#}.",
"<span>A</span>Shot":
  "<span>A</span>Disparo",
"<span>C</span>\\(\\theta\\) (°)":
  "<span>C</span>\\(\\theta\\) (°)",
"<span>E</span>Air on/off":
  "<span>E</span>Aire sí/no",
"Shot, row {#}":
  "Disparo, fila {#}",
"v_0 (m/s), row {#}":
  "v_0 (m/s), fila {#}",
"y_0 (m), row {#}":
  "y_0 (m), fila {#}",
"Air on/off, row {#}":
  "Aire sí/no, fila {#}",
"x (m), row {#}":
  "x (m), fila {#}",
"y (m), row {#}":
  "y (m), fila {#}",
"R (m), row {#}":
  "R (m), fila {#}",
"Keep separate trajectory and range scans. Record ball mass, diameter, drag coefficient and air density above the drag table.":
  "Mantén separados los barridos de trayectoria y de alcance. Anota la masa, el diámetro y el coeficiente de arrastre de la pelota y la densidad del aire arriba de la tabla de arrastre.",
"<strong>Table {#}: many launches.</strong> \\(v_0\\) = {#} m/s, no air, \\(\\sigma_\\theta\\) = {#}°, \\(\\sigma_v/v_0\\) = {#}%.":
  "<strong>Tabla {#}: muchos lanzamientos.</strong> \\(v_0\\) = {#} m/s, sin aire, \\(\\sigma_\\theta\\) = {#}°, \\(\\sigma_v/v_0\\) = {#}%.",
"<span>A</span>Angle \\(\\theta\\) (°)":
  "<span>A</span>Ángulo \\(\\theta\\) (°)",
"<span>B</span>Launches \\(n\\)":
  "<span>B</span>Lanzamientos \\(n\\)",
"<span>C</span>Mean range \\(\\bar R\\) (m)":
  "<span>C</span>Alcance medio \\(\\bar R\\) (m)",
"<span>D</span>Standard deviation \\(\\sigma\\) (m)":
  "<span>D</span>Desviación estándar \\(\\sigma\\) (m)",
"<span>E</span>Standard error \\(\\sigma/\\sqrt n\\) (m)":
  "<span>E</span>Error estándar \\(\\sigma/\\sqrt n\\) (m)",
"Angle θ (°), row {#}":
  "Ángulo θ (°), fila {#}",
"Launches n, row {#}":
  "Lanzamientos n, fila {#}",
"Mean range bar R (m), row {#}":
  "Alcance medio R barra (m), fila {#}",
"Standard deviation σ (m), row {#}":
  "Desviación estándar σ (m), fila {#}",
"Standard error σ/√ n (m), row {#}":
  "Error estándar σ/√ n (m), fila {#}",
"Fit \\(x\\) against \\(t\\) and \\(y\\) against \\(t\\). Infer horizontal velocity and \\(g\\); compare the fitted initial vertical velocity with \\(v_0 \\sin\\theta\\).":
  "Ajusta \\(x\\) en función de \\(t\\) y \\(y\\) en función de \\(t\\). Infiere la velocidad horizontal y \\(g\\); compara la velocidad vertical inicial ajustada con \\(v_0 \\sin\\theta\\).",
"Fit \\(R\\) against \\(\\sin(2\\theta)\\) in vacuum. Infer \\(g = v_0^2/\\text{slope}\\) and compare with the trajectory result.":
  "Ajusta \\(R\\) en función de \\(\\sin(2\\theta)\\) en el vacío. Infiere \\(g = v_0^2/\\text{slope}\\) y compáralo con el resultado de la trayectoria.",
"Compare complementary angle pairs and inspect residuals from the vacuum fit.":
  "Compara pares de ángulos complementarios e inspecciona los residuos del ajuste en el vacío.",
"Quantify the range reduction with drag. Explain why equal size does not imply equal drag acceleration for different masses.":
  "Cuantifica la reducción del alcance con arrastre. Explica por qué igual tamaño no implica igual aceleración de arrastre para masas distintas.",
"From Table {#}, how do the standard deviation and the standard error change as n grows from {#} to {#}? Which one tells you how well you know the mean range, and which one how far a single shot may land from it?":
  "Según la Tabla {#}, ¿cómo cambian la desviación estándar y el error estándar a medida que n crece de {#} a {#}? ¿Cuál te dice qué tan bien conoces el alcance medio, y cuál qué tan lejos de él puede aterrizar un solo disparo?",
"In vacuum \\(R = v_0^2\\sin 2\\theta/g\\), so to first order \\(\\sigma_R^2 = \\left(\\frac{\\partial R}{\\partial\\theta}\\sigma_\\theta\\right)^2 + \\left(\\frac{\\partial R}{\\partial v_0}\\sigma_v\\right)^2\\) with \\(\\partial R/\\partial v_0 = 2R/v_0\\) and \\(\\partial R/\\partial\\theta = 2v_0^2\\cos 2\\theta/g\\) (θ in radians). Work out \\(\\sigma_R\\) at {#}° and at {#}° and compare with your σ for {#} launches. Why does the angle spread add almost nothing at {#}°?":
  "En el vacío \\(R = v_0^2\\sin 2\\theta/g\\), así que a primer orden \\(\\sigma_R^2 = \\left(\\frac{\\partial R}{\\partial\\theta}\\sigma_\\theta\\right)^2 + \\left(\\frac{\\partial R}{\\partial v_0}\\sigma_v\\right)^2\\) con \\(\\partial R/\\partial v_0 = 2R/v_0\\) y \\(\\partial R/\\partial\\theta = 2v_0^2\\cos 2\\theta/g\\) (θ en radianes). Calcula \\(\\sigma_R\\) a {#}° y a {#}° y compáralo con tu σ para {#} lanzamientos. ¿Por qué la dispersión del ángulo casi no añade nada a {#}°?",
"Use the resolution of the position and time dots and the rounding of the range. Include launch speed uncertainty when inferring \\(g\\) from a range slope; speed is squared. In a real bench, include angle and height alignment. Deterministic simulation points do not acquire random uncertainty merely by repeating them. State whether errors come from reading, numerical approximation or an unsuitable model.":
  "Usa la resolución de los puntos de posición y de tiempo y el redondeo del alcance. Incluye la incertidumbre de la rapidez de lanzamiento al inferir \\(g\\) a partir de la pendiente del alcance; la rapidez está al cuadrado. En un banco real, incluye la alineación del ángulo y de la altura. Los puntos de una simulación determinista no adquieren incertidumbre aleatoria solo por repetirlos. Indica si los errores vienen de la lectura, de la aproximación numérica o de un modelo inadecuado.",
"Why can horizontal motion be uniform while vertical motion accelerates?":
  "¿Por qué el movimiento horizontal puede ser uniforme mientras el movimiento vertical acelera?",
"Why does a drag free equal height range peak at {#}°?":
  "¿Por qué el alcance sin arrastre a igual altura es máximo a {#}°?",
"Why does the vacuum fit generally fail when drag is on?":
  "¿Por qué el ajuste del vacío en general falla cuando hay arrastre?",
"Is a shorter observed range enough to prove that \\(g\\) is larger?":
  "¿Basta un alcance observado más corto para probar que \\(g\\) es mayor?",
"At {#}° the mean range of many launches comes out slightly below the range with no spread. Why can a spread in angle only shorten the range there, never lengthen it on average?":
  "A {#}° el alcance medio de muchos lanzamientos sale un poco por debajo del alcance sin dispersión. ¿Por qué una dispersión del ángulo ahí solo puede acortar el alcance, y nunca alargarlo en promedio?",
"Prelab answers, settings and CSV, trajectory and range fits, both estimates of \\(g\\) with uncertainty, the drag comparison, the many launches table and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, ajustes y CSV, ajustes de la trayectoria y del alcance, ambas estimaciones de \\(g\\) con su incertidumbre, la comparación con arrastre, la tabla de muchos lanzamientos y las respuestas a las preguntas. Identifica los datos simulados.",
"Cross section of the ball":
  "Sección transversal de la pelota",
"Drag coefficient":
  "Coeficiente de arrastre",
"Drag force":
  "Fuerza de arrastre",
"Range, where the ball lands":
  "Alcance, donde aterriza la pelota",
"Constant term of the fit of y against t":
  "Término constante del ajuste de y en función de t",
"Linear coefficient of the fit":
  "Coeficiente lineal del ajuste",
"Mean range of the launches":
  "Alcance medio de los lanzamientos",
"Quadratic coefficient of the fit":
  "Coeficiente cuadrático del ajuste",
"Number of launches":
  "Número de lanzamientos",
"Density of the air":
  "Densidad del aire",
"Standard deviation of the ranges":
  "Desviación estándar de los alcances",
"Spread of the range expected to first order":
  "Dispersión del alcance esperada a primer orden",
"Spread (standard deviation) of the launch angle":
  "Dispersión (desviación estándar) del ángulo de lanzamiento",
"Spread (standard deviation) of the launch speed":
  "Dispersión (desviación estándar) de la rapidez de lanzamiento",
"Time since launch":
  "Tiempo desde el lanzamiento",
"Launch angle":
  "Ángulo de lanzamiento",
"Speed of the ball":
  "Rapidez de la pelota",
"Launch speed":
  "Rapidez de lanzamiento",
"Terminal speed":
  "Rapidez terminal",
"Horizontal distance from the launcher's foot":
  "Distancia horizontal desde el pie del lanzador",
"Height above the ground":
  "Altura sobre el suelo",
"Launch height":
  "Altura de lanzamiento",
"Projectile Range":
  "Alcance de proyectiles"
});
