/* ws/rocket in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/rocket', {
"Gravity":
  "Gravedad",
"m_dry (kg)":
  "m_dry (kg)",
"m_fuel (kg)":
  "m_fuel (kg)",
"Burn rate (kg/s)":
  "Ritmo de combustión (kg/s)",
"Burn time t_b (s)":
  "Tiempo de combustión t_b (s)",
"ln(m_0/m_dry)":
  "ln(m_0/m_dry)",
"Lift off at (s)":
  "Despega en (s)",
"v at cutoff (m/s)":
  "v al apagado (m/s)",
"Height at cutoff (m)":
  "Altura al apagado (m)",
"Flight":
  "Vuelo",
"Separation at (s)":
  "Separación en (s)",
"Speed at separation (m/s)":
  "Rapidez en la separación (m/s)",
"Speed at burnout (m/s)":
  "Rapidez al agotarse el combustible (m/s)",
"The Rocket Equation | VirtualDemos":
  "La ecuación del cohete | VirtualDemos",
"The Rocket Equation":
  "La ecuación del cohete",
"Set the rocket’s mass without fuel (dry mass), the fuel mass, the exhaust speed \\(u\\) relative to the rocket and the burn rate, with or without gravity, then launch it. Graphs show the speed and the mass against time.":
  "Fija la masa del cohete sin combustible (masa seca), la masa de combustible, la rapidez de escape \\(u\\) relativa al cohete y el ritmo de combustión, con o sin gravedad, y luego lánzalo. Las gráficas muestran la rapidez y la masa en función del tiempo.",
"Record reading works once the engine has stopped. It stores the settings, the burn time, \\(\\ln(m_0/m_\\text{dry})\\), the time the rocket left the pad, and the speed and height at engine cutoff, as a flight computer would log them. Export to worksheet sends the readings here.":
  "Registrar lectura funciona una vez que el motor se ha detenido. Guarda los ajustes, el tiempo de combustión, \\(\\ln(m_0/m_\\text{dry})\\), el momento en que el cohete dejó la plataforma, y la rapidez y la altura al apagarse el motor, como las registraría una computadora de vuelo. Exportar a la hoja envía las lecturas aquí.",
"Blind hides the rocket equation prediction, the speed at burnout readout, the height reached and the dashed predicted curves, leaving the clock, the settings, the mass, the thrust and the graphs.":
  "A ciegas oculta la predicción de la ecuación del cohete, la lectura de la rapidez al agotarse el combustible, la altura alcanzada y las curvas predichas punteadas, y deja el reloj, los ajustes, la masa, el empuje y las gráficas.",
"The animation is sped up so a whole flight takes about {#} s; the clock shows real time.":
  "La animación está acelerada para que un vuelo completo dure unos {#} s; el reloj muestra el tiempo real.",
"A constant burn rate \\(b\\) and a constant exhaust speed \\(u\\), so the thrust \\(ub\\) is constant. No air. With gravity on, \\(g = 9.81\\ \\text{m/s}^2\\) is held constant at every height (the demo warns when the flight goes high enough for this to matter), and the rocket sits on the pad until the thrust exceeds its weight.":
  "Un ritmo de combustión \\(b\\) constante y una rapidez de escape \\(u\\) constante, así que el empuje \\(ub\\) es constante. Sin aire. Con la gravedad activada, \\(g = 9.81\\ \\text{m/s}^2\\) se mantiene constante a cualquier altura (la demo avisa cuando el vuelo sube lo suficiente para que esto importe), y el cohete se queda en la plataforma hasta que el empuje supera su peso.",
"The speed comes from the exact solution of \\(m\\,dv/dt = ub - mg\\), not from a step by step calculation.":
  "La rapidez sale de la solución exacta de \\(m\\,dv/dt = ub - mg\\), no de un cálculo paso a paso.",
"Test the rocket equation: find how a rocket’s final speed depends on how much of it is fuel and on its exhaust speed, show that the burn rate does not matter in deep space, and measure how much speed gravity takes away during a launch.":
  "Pon a prueba la ecuación del cohete: descubre cómo depende la rapidez final de un cohete de qué parte de él es combustible y de su rapidez de escape, muestra que el ritmo de combustión no importa en el espacio profundo y mide cuánta rapidez quita la gravedad durante un lanzamiento.",
"A rocket of mass \\(m\\) ejects exhaust at speed \\(u\\) relative to itself at a rate \\(b = -dm/dt\\). In a short time the exhaust carries away momentum, and momentum conservation gives the thrust \\(ub\\). With no external force,":
  "Un cohete de masa \\(m\\) expulsa gases a una rapidez \\(u\\) relativa a sí mismo a un ritmo \\(b = -dm/dt\\). En un tiempo corto, los gases se llevan cantidad de movimiento, y la conservación de la cantidad de movimiento da el empuje \\(ub\\). Sin fuerza externa,",
"\\[m\\frac{dv}{dt} = -u\\frac{dm}{dt} \\quad\\Rightarrow\\quad \\Delta v = u\\ln\\frac{m_0}{m},\\]":
  "\\[m\\frac{dv}{dt} = -u\\frac{dm}{dt} \\quad\\Rightarrow\\quad \\Delta v = u\\ln\\frac{m_0}{m},\\]",
"where \\(m_0\\) is the mass at the start. When all the fuel is burned, \\(m = m_\\text{dry}\\), so the speed at engine cutoff is \\(u\\ln(m_0/m_\\text{dry})\\). It depends on the mass ratio and on \\(u\\), not on how fast the fuel is burned. A rocket can go faster than its own exhaust: that needs \\(m_0/m_\\text{dry} > e = 2.718\\).":
  "donde \\(m_0\\) es la masa al inicio. Cuando se ha quemado todo el combustible, \\(m = m_\\text{dry}\\), así que la rapidez al apagarse el motor es \\(u\\ln(m_0/m_\\text{dry})\\). Depende del cociente de masas y de \\(u\\), no de qué tan rápido se quema el combustible. Un cohete puede ir más rápido que sus propios gases de escape: eso requiere \\(m_0/m_\\text{dry} > e = 2.718\\).",
"Launched upwards from the ground in uniform gravity, \\(m\\,dv/dt = ub - mg\\). If the rocket lifts off at once and burns for a time \\(t_b = m_\\text{fuel}/b\\), its speed at cutoff is":
  "Lanzado hacia arriba desde el suelo en gravedad uniforme, \\(m\\,dv/dt = ub - mg\\). Si el cohete despega de inmediato y quema durante un tiempo \\(t_b = m_\\text{fuel}/b\\), su rapidez al apagado es",
"\\[v = u\\ln\\frac{m_0}{m_\\text{dry}} - g\\,t_b.\\]":
  "\\[v = u\\ln\\frac{m_0}{m_\\text{dry}} - g\\,t_b.\\]",
"The term \\(g\\,t_b\\) is the gravity loss: the longer the burn, the more speed gravity takes. If the thrust \\(ub\\) is less than the launch weight \\(m_0 g\\), the rocket cannot lift off until enough fuel has burned that \\(ub > mg\\).":
  "El término \\(g\\,t_b\\) es la pérdida por gravedad: cuanto más larga la combustión, más rapidez quita la gravedad. Si el empuje \\(ub\\) es menor que el peso al despegue \\(m_0 g\\), el cohete no puede despegar hasta que se haya quemado suficiente combustible para que \\(ub > mg\\).",
"A rocket in deep space has \\(m_\\text{dry} = 1000\\ \\text{kg}\\), {#} kg of fuel and \\(u = 2500\\ \\text{m/s}\\). Calculate its speed when the fuel is gone.":
  "Un cohete en el espacio profundo tiene \\(m_\\text{dry} = 1000\\ \\text{kg}\\), {#} kg de combustible y \\(u = 2500\\ \\text{m/s}\\). Calcula su rapidez cuando se acaba el combustible.",
"Why can a rocket go faster than its exhaust? Explain with momentum, in words.":
  "¿Por qué un cohete puede ir más rápido que sus gases de escape? Explícalo con palabras usando la cantidad de movimiento.",
"The same rocket burns its fuel at {#} kg/s. Calculate the thrust, the launch weight on Earth and the burn time. Does it lift off at once?":
  "El mismo cohete quema su combustible a {#} kg/s. Calcula el empuje, el peso al despegue en la Tierra y el tiempo de combustión. ¿Despega de inmediato?",
"Predict how the speed at cutoff from the ground changes if the same fuel is burned twice as slowly.":
  "Predice cómo cambia la rapidez al apagado desde el suelo si el mismo combustible se quema el doble de lento.",
"There is no physical apparatus. Real rocket motors, even model rocket motors, must be used only under the rules of a supervised club or range.":
  "No hay aparato físico. Los motores de cohete reales, incluso los de cohetes a escala, solo deben usarse bajo las reglas de un club o campo supervisado.",
"Hide the predictions (Blind) before you start. Let each flight run until the engine stops before you record it.":
  "Oculta las predicciones (A ciegas) antes de empezar. Deja que cada vuelo corra hasta que el motor se detenga antes de registrarlo.",
"<strong>Part {#}: fuel scan, deep space.</strong> With no gravity, dry mass {#} kg, \\(u = 2500\\ \\text{m/s}\\) and burn rate {#} kg/s, fly the rocket with {#}, {#}, {#}, {#}, {#}, {#} and {#} kg of fuel and record each flight. Send these readings to the worksheet, then clear the demo’s readings.":
  "<strong>Parte {#}: barrido de combustible, espacio profundo.</strong> Sin gravedad, masa seca {#} kg, \\(u = 2500\\ \\text{m/s}\\) y ritmo de combustión {#} kg/s, haz volar el cohete con {#}, {#}, {#}, {#}, {#}, {#} y {#} kg de combustible y registra cada vuelo. Envía estas lecturas a la hoja y luego borra las lecturas de la demo.",
"<strong>Part {#}: burn rate, deep space.</strong> With {#} kg of fuel and the other settings as in Part {#}, fly it at burn rates of {#}, {#}, {#}, {#} and {#} kg/s. Send this series, then clear.":
  "<strong>Parte {#}: ritmo de combustión, espacio profundo.</strong> Con {#} kg de combustible y los demás ajustes como en la Parte {#}, hazlo volar con ritmos de combustión de {#}, {#}, {#}, {#} y {#} kg/s. Envía esta serie y luego borra.",
"<strong>Part {#}: launch from the ground.</strong> Turn gravity on. Keep dry mass {#} kg, fuel {#} kg and \\(u = 2500\\ \\text{m/s}\\), and fly it at burn rates of {#}, {#}, {#}, {#}, {#} and {#} kg/s. Send this series, then clear.":
  "<strong>Parte {#}: lanzamiento desde el suelo.</strong> Activa la gravedad. Mantén la masa seca en {#} kg, el combustible en {#} kg y \\(u = 2500\\ \\text{m/s}\\), y hazlo volar con ritmos de combustión de {#}, {#}, {#}, {#}, {#} y {#} kg/s. Envía esta serie y luego borra.",
"<strong>Part {#}: too heavy at first.</strong> With gravity on, dry mass {#} kg, {#} kg of fuel, \\(u = 2500\\ \\text{m/s}\\) and a burn rate of {#} kg/s, launch it and watch the first part of the burn. Record the flight and send it.":
  "<strong>Parte {#}: demasiado pesado al principio.</strong> Con la gravedad activada, masa seca {#} kg, {#} kg de combustible, \\(u = 2500\\ \\text{m/s}\\) y un ritmo de combustión de {#} kg/s, lánzalo y observa la primera parte de la combustión. Registra el vuelo y envíalo.",
"<strong>Part {#}: two stages.</strong> Use the two stage rocket: an upper stage (dry mass {#} kg, {#} kg of fuel) on a first stage (empty casing {#} kg, {#} kg of fuel), \\(u = 2500\\ \\text{m/s}\\) and a burn rate of {#} kg/s: {#} {#} kg at launch, with the same {#} kg of fuel as the rocket of Parts {#} to {#} and a {#} kg casing besides. Fly it in deep space, then from the ground. For each flight record the time and speed at separation and the speed at burnout in Table {#} by hand; the demo records one stage flights only.":
  "<strong>Parte {#}: dos etapas.</strong> Usa el cohete de dos etapas: una etapa superior (masa seca {#} kg, {#} kg de combustible) sobre una primera etapa (carcasa vacía de {#} kg, {#} kg de combustible), \\(u = 2500\\ \\text{m/s}\\) y un ritmo de combustión de {#} kg/s: {#} {#} kg al despegue, con los mismos {#} kg de combustible que el cohete de las Partes {#} a {#} y además una carcasa de {#} kg. Hazlo volar en el espacio profundo y luego desde el suelo. Para cada vuelo registra a mano en la Tabla {#} el tiempo y la rapidez en la separación y la rapidez al agotarse el combustible; la demo solo registra vuelos de una etapa.",
"<span>B</span>Gravity":
  "<span>B</span>Gravedad",
"<span>C</span>\\(m_\\text{dry}\\) (kg)":
  "<span>C</span>\\(m_\\text{dry}\\) (kg)",
"<span>D</span>\\(m_\\text{fuel}\\) (kg)":
  "<span>D</span>\\(m_\\text{fuel}\\) (kg)",
"<span>F</span>Burn rate (kg/s)":
  "<span>F</span>Ritmo de combustión (kg/s)",
"<span>G</span>Burn time \\(t_b\\) (s)":
  "<span>G</span>Tiempo de combustión \\(t_b\\) (s)",
"<span>H</span>\\(\\ln(m_0/m_\\text{dry})\\)":
  "<span>H</span>\\(\\ln(m_0/m_\\text{dry})\\)",
"<span>I</span>Lift off at (s)":
  "<span>I</span>Despega en (s)",
"<span>J</span>\\(v\\) at cutoff (m/s)":
  "<span>J</span>\\(v\\) al apagado (m/s)",
"<span>K</span>Height at cutoff (m)":
  "<span>K</span>Altura al apagado (m)",
"Gravity, row {#}":
  "Gravedad, fila {#}",
"m_dry (kg), row {#}":
  "m_dry (kg), fila {#}",
"m_fuel (kg), row {#}":
  "m_fuel (kg), fila {#}",
"u (m/s), row {#}":
  "u (m/s), fila {#}",
"Burn rate (kg/s), row {#}":
  "Ritmo de combustión (kg/s), fila {#}",
"Burn time t_b (s), row {#}":
  "Tiempo de combustión t_b (s), fila {#}",
"ln(m_0/m_dry), row {#}":
  "ln(m_0/m_dry), fila {#}",
"Lift off at (s), row {#}":
  "Despega en (s), fila {#}",
"v at cutoff (m/s), row {#}":
  "v al apagado (m/s), fila {#}",
"Height at cutoff (m), row {#}":
  "Altura al apagado (m), fila {#}",
"ln(m₀/m_dry)":
  "ln(m₀/m_dry)",
"Keep each part in its own copy of the table, labeled with the part.":
  "Pon cada parte en su propia copia de la tabla, marcada con la parte.",
"<strong>Table {#}: two stages.</strong>":
  "<strong>Tabla {#}: dos etapas.</strong>",
"<span>A</span>Flight":
  "<span>A</span>Vuelo",
"<span>C</span>Separation at (s)":
  "<span>C</span>Separación en (s)",
"<span>D</span>Speed at separation (m/s)":
  "<span>D</span>Rapidez en la separación (m/s)",
"<span>E</span>Speed at burnout (m/s)":
  "<span>E</span>Rapidez al agotarse el combustible (m/s)",
"Flight, row {#}":
  "Vuelo, fila {#}",
"Separation at (s), row {#}":
  "Separación en (s), fila {#}",
"Speed at separation (m/s), row {#}":
  "Rapidez en la separación (m/s), fila {#}",
"Speed at burnout (m/s), row {#}":
  "Rapidez al agotarse el combustible (m/s), fila {#}",
"Part {#}: plot the speed at cutoff against \\(\\ln(m_0/m_\\text{dry})\\) and fit a line. Compare the slope with \\(u\\) and the intercept with zero. At which fuel mass did the rocket first end up faster than its exhaust?":
  "Parte {#}: grafica la rapidez al apagado en función de \\(\\ln(m_0/m_\\text{dry})\\) y ajusta una recta. Compara la pendiente con \\(u\\) y la ordenada al origen con cero. ¿Con qué masa de combustible terminó el cohete por primera vez más rápido que sus gases de escape?",
"Part {#}: what does the burn rate change, and what does it not change? Explain using the rocket equation.":
  "Parte {#}: ¿qué cambia el ritmo de combustión y qué no cambia? Explícalo usando la ecuación del cohete.",
"Part {#}: plot the speed at cutoff against the burn time and fit a line. Compare the slope with \\(-g\\) and the intercept with \\(u\\ln(m_0/m_\\text{dry})\\). Why do real launch rockets burn their fuel fast?":
  "Parte {#}: grafica la rapidez al apagado en función del tiempo de combustión y ajusta una recta. Compara la pendiente con \\(-g\\) y la ordenada al origen con \\(u\\ln(m_0/m_\\text{dry})\\). ¿Por qué los cohetes de lanzamiento reales queman rápido su combustible?",
"Part {#}: how long did the rocket sit on the pad? Calculate when the thrust first exceeds the weight and compare. Use the rocket equation from the moment of lift off, \\(v = u\\ln(m_1/m_\\text{dry}) - g(t_b - t_0)\\) with \\(m_1\\) the mass at lift off, to predict the speed at cutoff and compare with your reading. How much speed did the fuel burned on the pad cost?":
  "Parte {#}: ¿cuánto tiempo se quedó el cohete en la plataforma? Calcula cuándo el empuje supera por primera vez al peso y compara. Usa la ecuación del cohete desde el momento del despegue, \\(v = u\\ln(m_1/m_\\text{dry}) - g(t_b - t_0)\\) con \\(m_1\\) la masa al despegue, para predecir la rapidez al apagado y compárala con tu lectura. ¿Cuánta rapidez costó el combustible quemado en la plataforma?",
"Part {#}: show that in deep space the speed at separation is \\(u\\ln(m_0/m_\\text{sep})\\), with \\(m_\\text{sep}\\) the mass just before the casing is dropped, and the speed at burnout adds \\(u\\ln(m_2/m_\\text{dry})\\), with \\(m_2\\) the upper stage’s mass at separation. Compare with one stage that carries the same fuel and the casing to the end, \\(u\\ln(m_0/(m_\\text{dry} + m_\\text{casing}))\\), and with your Part {#} rocket with {#} kg of fuel, which has no casing at all. From the ground, how much speed did gravity take, and how does that compare with \\(g t_b\\)?":
  "Parte {#}: muestra que en el espacio profundo la rapidez en la separación es \\(u\\ln(m_0/m_\\text{sep})\\), con \\(m_\\text{sep}\\) la masa justo antes de soltar la carcasa, y que la rapidez al agotarse el combustible suma \\(u\\ln(m_2/m_\\text{dry})\\), con \\(m_2\\) la masa de la etapa superior en la separación. Compara con una sola etapa que lleva el mismo combustible y la carcasa hasta el final, \\(u\\ln(m_0/(m_\\text{dry} + m_\\text{casing}))\\), y con tu cohete de la Parte {#} con {#} kg de combustible, que no tiene carcasa. Desde el suelo, ¿cuánta rapidez quitó la gravedad, y cómo se compara con \\(g t_b\\)?",
"The virtual flight computer logs exact values from the model (the demo rounds them to six significant figures), so there is no measurement scatter: a fit with residuals at the rounding level confirms the model, it does not test it. On a real rocket the exhaust speed is not constant (it depends on the outside pressure), the burn rate varies, and air drag and the change of \\(g\\) with height both matter. Name the largest of these for a launch from the ground and say which way it would shift your Part {#} points.":
  "La computadora de vuelo virtual registra valores exactos del modelo (la demo los redondea a seis cifras significativas), así que no hay dispersión de medición: un ajuste con residuos al nivel del redondeo confirma el modelo, no lo pone a prueba. En un cohete real la rapidez de escape no es constante (depende de la presión exterior), el ritmo de combustión varía, y el arrastre del aire y el cambio de \\(g\\) con la altura importan. Nombra el mayor de estos efectos para un lanzamiento desde el suelo y di hacia dónde desplazaría tus puntos de la Parte {#}.",
"Two rocket stages: why does dropping an empty tank before burning the rest of the fuel give a higher final speed than carrying the empty tank all the way?":
  "Dos etapas de cohete: ¿por qué soltar un tanque vacío antes de quemar el resto del combustible da una rapidez final mayor que llevar el tanque vacío todo el camino?",
"In Part {#}, the thrust is larger at the higher burn rates. Is the speed gained per kilogram of fuel larger too? Explain.":
  "En la Parte {#}, el empuje es mayor a los ritmos de combustión más altos. ¿Es también mayor la rapidez ganada por kilogramo de combustible? Explica.",
"Part {#} burned twice the fuel of Part {#}. Why did it not end up twice as fast?":
  "La Parte {#} quemó el doble de combustible que la Parte {#}. ¿Por qué no terminó el doble de rápido?",
"Why is \\(g\\) held constant a poor approximation for a flight that reaches a few hundred kilometers? Which way does it bias the predicted height?":
  "¿Por qué mantener \\(g\\) constante es una mala aproximación para un vuelo que llega a unos cientos de kilómetros? ¿Hacia dónde sesga la altura predicha?",
"Prelab answers, the data tables (four parts and Table {#}), the fits with their residuals for Parts {#} and {#} compared with \\(u\\), \\(-g\\) and \\(u\\ln(m_0/m_\\text{dry})\\), your Part {#} and Part {#} analyses, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, las tablas de datos (cuatro partes y la Tabla {#}), los ajustes con sus residuos de las Partes {#} y {#} comparados con \\(u\\), \\(-g\\) y \\(u\\ln(m_0/m_\\text{dry})\\), tus análisis de la Parte {#} y la Parte {#}, y las respuestas a las preguntas. Identifica los datos simulados.",
"Burn rate, fuel mass per second":
  "Ritmo de combustión, masa de combustible por segundo",
"Mass of the rocket at time t":
  "Masa del cohete en el tiempo t",
"Starting mass, rocket and fuel":
  "Masa inicial, cohete y combustible",
"Mass at lift off":
  "Masa al despegue",
"Mass of the upper stage at separation":
  "Masa de la etapa superior en la separación",
"Mass of the first stage's empty casing":
  "Masa de la carcasa vacía de la primera etapa",
"Mass without fuel":
  "Masa sin combustible",
"Fuel mass":
  "Masa de combustible",
"Mass of the rocket just before the empty first stage is dropped":
  "Masa del cohete justo antes de soltar la primera etapa vacía",
"Time of lift off":
  "Momento del despegue",
"Burn time":
  "Tiempo de combustión",
"Exhaust speed relative to the rocket":
  "Rapidez de escape relativa al cohete",
"Rocket Propulsion":
  "Propulsión de cohetes"
});
