/* ws/slope-fields-cooling in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/slope-fields-cooling', {
"Temperature y₀ (°C)":
  "Temperatura y₀ (°C)",
"Slope dy/dt (°C/min)":
  "Pendiente dy/dt (°C/min)",
"Population y₀ (millions per mL)":
  "Población y₀ (millones por mL)",
"Slope dy/dt (millions per mL per hour)":
  "Pendiente dy/dt (millones por mL por hora)",
"Time t (h)":
  "Tiempo t (h)",
"Accurate y (millions per mL)":
  "y precisa (millones por mL)",
"Step size h (min)":
  "Tamaño de paso h (min)",
"Euler y (°C)":
  "y de Euler (°C)",
"Accurate y (°C)":
  "y precisa (°C)",
"Error, Euler − accurate (°C)":
  "Error, Euler − precisa (°C)",
"Slope Fields: Cooling Tea and a Growing Culture | VirtualDemos":
  "Campos de pendientes: té que se enfría y un cultivo que crece | VirtualDemos",
"Slope Fields: Cooling Tea and a Growing Culture":
  "Campos de pendientes: té que se enfría y un cultivo que crece",
"Student laboratory · Calculus for physics":
  "Laboratorio para estudiantes · Cálculo para la física",
"Textbook: OpenStax <em>Calculus</em>, Vol. {#}, §§{#} to {#} (differential equations, direction fields and Euler’s method, separable equations, the logistic equation) and Vol. {#}, §{#} (exponential growth and decay). Access for free at https://openstax.org/details/books/calculus-volume-{#}.":
  "Libro de texto: OpenStax <em>Calculus</em>, Vol. {#}, §§{#} a {#} (ecuaciones diferenciales, campos de direcciones y el método de Euler, ecuaciones separables, la ecuación logística) y Vol. {#}, §{#} (crecimiento y decaimiento exponencial). Acceso gratuito en https://openstax.org/details/books/calculus-volume-{#}.",
"<strong>Setups in the demo:</strong> Newton’s cooling: a cup of coffee; Radioactive decay; A capacitor discharging (RC); A capacitor charging (RC); Falling with linear drag; A skydiver: quadratic drag; Logistic growth; Logistic growth with harvesting; Overdamped motion in a double well; dy/dt = t − y: isoclines; Euler’s method and the number e; Mystery: a cooling cup; Mystery: a growing culture.":
  "<strong>Configuraciones de la demo:</strong> Enfriamiento de Newton: una taza de café; Decaimiento radiactivo; Un capacitor que se descarga (RC); Un capacitor que se carga (RC); Caída con arrastre lineal; Un paracaidista: arrastre cuadrático; Crecimiento logístico; Crecimiento logístico con cosecha; Movimiento sobreamortiguado en un doble pozo; dy/dt = t − y: isoclinas; El método de Euler y el número e; Misterio: una taza que se enfría; Misterio: un cultivo que crece.",
"The box at the top takes the right side of dy/dt = f(t, y), written in t and y. The picture draws the slope field: a short line at each point with the slope f gives there. The y axis is labeled with what y stands for in each setup (a temperature, a voltage, a population).":
  "La caja de arriba acepta el lado derecho de dy/dt = f(t, y), escrito en t y y. La imagen dibuja el campo de pendientes: una línea corta en cada punto con la pendiente que f da ahí. El eje y lleva el nombre de lo que y representa en cada configuración (una temperatura, un voltaje, una población).",
"The orange dot is the start point (t₀, y₀). Type it in the <strong>Start point</strong> card (t₀ and y₀), drag the dot, or click the field to start a new curve there. The orange curve is the accurate solution through the start point; the dashed line with dots is Euler’s method with the <strong>Step size h</strong> in the <strong>Euler’s method</strong> card, taken in whole steps up to <strong>Run to t</strong>. <strong>Play</strong> draws Euler’s steps one at a time; <strong>Step</strong> takes one.":
  "El punto naranja es el punto inicial (t₀, y₀). Escríbelo en la tarjeta <strong>Punto inicial</strong> (t₀ y y₀), arrastra el punto o haz clic en el campo para iniciar ahí una curva nueva. La curva naranja es la solución precisa que pasa por el punto inicial; la línea punteada con puntos es el método de Euler con el <strong>Tamaño de paso h</strong> de la tarjeta <strong>Método de Euler</strong>, en pasos completos hasta <strong>Llegar hasta t</strong>. <strong>Iniciar</strong> dibuja los pasos de Euler uno por uno; <strong>Paso</strong> da uno.",
"The Readouts show the equation, the start point and <strong>Slope there, dy/dt</strong> (the slope of the field at the start point), then Euler’s last step: <strong>Euler ends at t</strong>, <strong>Euler y there</strong>, <strong>Accurate y there</strong> and <strong>Error, Euler − accurate</strong>.":
  "Las lecturas en pantalla muestran la ecuación, el punto inicial y <strong>Pendiente ahí, dy/dt</strong> (la pendiente del campo en el punto inicial), y luego el último paso de Euler: <strong>Euler termina en t</strong>, <strong>y de Euler ahí</strong>, <strong>y precisa ahí</strong> y <strong>Error, Euler − precisa</strong>.",
"The strip at the right of the picture is the phase line, drawn when f depends on y only: arrows show whether y rises or falls, a filled dot is a stable equilibrium, an open dot an unstable one.":
  "La franja a la derecha de la imagen es la línea de fase, que se dibuja cuando f depende solo de y: las flechas muestran si y sube o baja, un punto relleno es un equilibrio estable y un punto hueco uno inestable.",
"The mystery setups hide the equation: the field is drawn from a model with values you do not know, picked at random when the page opens (or when you press <strong>New mystery</strong>). The cup’s dots and the <strong>Thermometer readings (simulated)</strong> readout are readings every {#} minutes, simulated from the same model and rounded to {#} °C.":
  "Las configuraciones de misterio ocultan la ecuación: el campo se dibuja con un modelo cuyos valores no conoces, elegidos al azar cuando se abre la página (o cuando presionas <strong>Nuevo misterio</strong>). Los puntos de la taza y la lectura en pantalla <strong>Lecturas del termómetro (simuladas)</strong> son lecturas cada {#} minutos, simuladas con el mismo modelo y redondeadas a {#} °C.",
"<strong>Record reading</strong> stores the setup, the start point, the slope there, h, and Euler’s last step with the accurate value and the error. <strong>Export to worksheet</strong> fills the Data tables below; <strong>Clear</strong> starts a new series.":
  "<strong>Registrar lectura</strong> guarda la configuración, el punto inicial, la pendiente ahí, h, y el último paso de Euler con el valor preciso y el error. <strong>Exportar a la hoja</strong> llena las tablas de Datos de abajo; <strong>Borrar</strong> empieza una serie nueva.",
"These are computed values, not measurements: the accurate solution is good to about ten significant figures.":
  "Estos son valores calculados, no mediciones: la solución precisa es buena hasta unas diez cifras significativas.",
"Read a differential equation from its slope field without seeing its formula: find the cooling constant and the room temperature of a cup of tea, and the carrying capacity and the point of fastest growth of a yeast culture. Then measure how Euler’s error shrinks with the step size.":
  "Lee una ecuación diferencial en su campo de pendientes sin ver su fórmula: encuentra la constante de enfriamiento y la temperatura del cuarto de una taza de té, y la capacidad de carga y el punto de crecimiento más rápido de un cultivo de levadura. Luego mide cómo disminuye el error de Euler con el tamaño de paso.",
"A first order differential equation \\(\\frac{dy}{dt} = f(t, y)\\) tells you the slope of the solution at every point (t, y), before anyone solves it. The slope field draws that slope as a short line at many points; a solution curve runs along the lines.":
  "Una ecuación diferencial de primer orden \\(\\frac{dy}{dt} = f(t, y)\\) te dice la pendiente de la solución en cada punto (t, y), antes de que nadie la resuelva. El campo de pendientes dibuja esa pendiente como una línea corta en muchos puntos; una curva solución corre a lo largo de las líneas.",
"<strong>Newton’s law of cooling.</strong> A cup at temperature T in a room at \\(T_a\\) cools at a rate in proportion to how much warmer it is than the room:":
  "<strong>Ley de enfriamiento de Newton.</strong> Una taza a temperatura T en un cuarto a \\(T_a\\) se enfría a una rapidez proporcional a cuánto más caliente está que el cuarto:",
"\\[\\frac{dT}{dt} = -k\\,(T - T_a) = -kT + kT_a .\\]":
  "\\[\\frac{dT}{dt} = -k\\,(T - T_a) = -kT + kT_a .\\]",
"The slope depends on T only, and it is a straight line in T: graphing the slope (vertical) against T (horizontal) gives slope \\(-k\\) and intercept \\(kT_a\\), and the slope is zero at \\(T = T_a\\). That zero is an equilibrium, and it is stable: above it the cup cools, below it it warms. The solution is \\(T = T_a + (T_0 - T_a)\\,e^{-kt}\\) (Vol. {#} §{#}).":
  "La pendiente depende solo de T, y es una recta en T: graficar la pendiente (vertical) contra T (horizontal) da pendiente \\(-k\\) y ordenada al origen \\(kT_a\\), y la pendiente es cero en \\(T = T_a\\). Ese cero es un equilibrio, y es estable: arriba de él la taza se enfría, abajo se calienta. La solución es \\(T = T_a + (T_0 - T_a)\\,e^{-kt}\\) (Vol. {#} §{#}).",
"<strong>Logistic growth.</strong> A population P with growth rate r and carrying capacity K grows as":
  "<strong>Crecimiento logístico.</strong> Una población P con tasa de crecimiento r y capacidad de carga K crece como",
"\\[\\frac{dP}{dt} = rP\\left(1 - \\frac{P}{K}\\right) = rP - \\frac{r}{K}P^2 .\\]":
  "\\[\\frac{dP}{dt} = rP\\left(1 - \\frac{P}{K}\\right) = rP - \\frac{r}{K}P^2 .\\]",
"Now the slope is a parabola in P. It is zero at P = {#} (unstable) and at P = K (stable), and largest halfway between, at P = K/{#}, where it equals rK/{#}. Every solution that starts between {#} and K is an S curve, steepest (its inflection point) where it crosses K/{#}, at time \\(t^* = \\frac{1}{r}\\ln\\!\\left(\\frac{K}{P_0} - 1\\right)\\) for a start \\(P_0\\) at t = {#}.":
  "Ahora la pendiente es una parábola en P. Es cero en P = {#} (inestable) y en P = K (estable), y máxima a la mitad, en P = K/{#}, donde vale rK/{#}. Toda solución que empieza entre {#} y K es una curva en S, más empinada (su punto de inflexión) donde cruza K/{#}, en el tiempo \\(t^* = \\frac{1}{r}\\ln\\!\\left(\\frac{K}{P_0} - 1\\right)\\) para un inicio \\(P_0\\) en t = {#}.",
"<strong>Euler’s method</strong> follows the field in straight steps of length h: \\(y_{n+1} = y_n + h\\,f(t_n, y_n)\\), \\(t_{n+1} = t_n + h\\). Each step uses the slope at its start, so the method errs wherever the curve bends. At a fixed time the error of Euler’s method is roughly in proportion to h: it is a first order method.":
  "<strong>El método de Euler</strong> sigue el campo en pasos rectos de longitud h: \\(y_{n+1} = y_n + h\\,f(t_n, y_n)\\), \\(t_{n+1} = t_n + h\\). Cada paso usa la pendiente de su inicio, así que el método se equivoca dondequiera que la curva se dobla. En un tiempo fijo el error del método de Euler es más o menos proporcional a h: es un método de primer orden.",
"A cup at {#} °C sits in a {#} °C room with k = {#} per minute. What is dT/dt? At what temperature is dT/dt zero?":
  "Una taza a {#} °C está en un cuarto a {#} °C con k = {#} por minuto. ¿Cuánto vale dT/dt? ¿A qué temperatura dT/dt es cero?",
"For a culture with r = {#} per hour and K = {#}, find dP/dt at P = {#}, {#} and {#}. At what P is the growth fastest?":
  "Para un cultivo con r = {#} por hora y K = {#}, encuentra dP/dt en P = {#}, {#} y {#}. ¿En qué P el crecimiento es más rápido?",
"Predict before you look: Euler’s method with h = {#} min follows the coffee setup, dT/dt = −{#}(T − {#}) from {#} °C, to t = {#} min. Will Euler’s temperature at {#} min be above or below the accurate one? When h is halved, by about what factor will the error change? Write your guesses and one sentence of reasoning for each.":
  "Predice antes de ver: el método de Euler con h = {#} min sigue la configuración del café, dT/dt = −{#}(T − {#}) desde {#} °C, hasta t = {#} min. ¿La temperatura de Euler a los {#} min quedará arriba o abajo de la precisa? Cuando h se reduce a la mitad, ¿por qué factor cambiará más o menos el error? Escribe tus predicciones y una oración de razonamiento para cada una.",
"<strong>A. The mystery cup.</strong> In the right panel, under Setups, press <strong>Mystery: a cooling cup</strong>. Do not press <strong>New mystery</strong> after this, or the cup changes. In the <strong>Start point</strong> card under the picture, type t₀ = {#} and y₀ = {#} (press Enter or click away after typing), then press <strong>Record reading</strong> in the Readings section. Repeat with y₀ = {#}, {#}, {#}, {#}, {#} and {#}, recording each time; <strong>Slope there, dy/dt</strong> in the Readouts is the slope you are reading. Press <strong>Export to worksheet</strong> (the readings go to Table {#}), then <strong>Clear</strong>. Copy the {#} min value from the <strong>Thermometer readings (simulated)</strong> readout into your notes.":
  "<strong>A. La taza misteriosa.</strong> En el panel derecho, en Configuraciones, presiona <strong>Misterio: una taza que se enfría</strong>. No presiones <strong>Nuevo misterio</strong> después de esto, o la taza cambia. En la tarjeta <strong>Punto inicial</strong> debajo de la imagen, escribe t₀ = {#} y y₀ = {#} (presiona Enter o haz clic fuera después de escribir), luego presiona <strong>Registrar lectura</strong> en la sección Lecturas. Repite con y₀ = {#}, {#}, {#}, {#}, {#} y {#}, registrando cada vez; <strong>Pendiente ahí, dy/dt</strong> en las lecturas en pantalla es la pendiente que estás leyendo. Presiona <strong>Exportar a la hoja</strong> (las lecturas van a la Tabla {#}), luego <strong>Borrar</strong>. Copia en tus notas el valor de {#} min de la lectura en pantalla <strong>Lecturas del termómetro (simuladas)</strong>.",
"<strong>B. Your model of the cup.</strong> After you have done Analysis {#} (the fit of Table {#}), type your model into the dy/dt = box, with your values of k and the room temperature, for example":
  "<strong>B. Tu modelo de la taza.</strong> Después de hacer el Análisis {#} (el ajuste de la Tabla {#}), escribe tu modelo en la caja dy/dt =, con tus valores de k y de la temperatura del cuarto, por ejemplo",
". The dots stay. Type t₀ = {#} and y₀ = {#} in the Start point card and {#} in <strong>Run to t</strong>, and read <strong>Accurate y there</strong> in the Readouts (your model’s temperature at {#} min). Write it down beside the thermometer reading at {#} min. Press <strong>Mystery: a cooling cup</strong> again to bring the hidden field back.":
  ". Los puntos se quedan. Escribe t₀ = {#} y y₀ = {#} en la tarjeta Punto inicial y {#} en <strong>Llegar hasta t</strong>, y lee <strong>y precisa ahí</strong> en las lecturas en pantalla (la temperatura de tu modelo a los {#} min). Anótala junto a la lectura del termómetro a los {#} min. Presiona de nuevo <strong>Misterio: una taza que se enfría</strong> para que vuelva el campo oculto.",
"<strong>C. The mystery culture.</strong> Press <strong>Mystery: a growing culture</strong>. In the Start point card type t₀ = {#} and y₀ = {#}, and press <strong>Record reading</strong>. Repeat for y₀ = {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#}. Export to worksheet (Table {#}), then Clear. Look at the phase line: write down where its filled dot sits on the y axis.":
  "<strong>C. El cultivo misterioso.</strong> Presiona <strong>Misterio: un cultivo que crece</strong>. En la tarjeta Punto inicial escribe t₀ = {#} y y₀ = {#}, y presiona <strong>Registrar lectura</strong>. Repite para y₀ = {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#}. Presiona Exportar a la hoja (Tabla {#}) y luego Borrar. Mira la línea de fase: anota dónde queda su punto relleno en el eje y.",
"<strong>D. The culture’s S curve.</strong> Still on the mystery culture, type t₀ = {#} and y₀ = {#}, and set <strong>Step size h</strong> to {#}. Type <strong>Run to t</strong> = {#} and record a reading. Repeat for Run to t = {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#}. Each row’s accurate y is the culture at that time. Export to worksheet (Table {#}), then Clear.":
  "<strong>D. La curva en S del cultivo.</strong> Todavía en el cultivo misterioso, escribe t₀ = {#} y y₀ = {#}, y pon <strong>Tamaño de paso h</strong> en {#}. Escribe <strong>Llegar hasta t</strong> = {#} y registra una lectura. Repite para Llegar hasta t = {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#}. La y precisa de cada fila es el cultivo en ese tiempo. Presiona Exportar a la hoja (Tabla {#}) y luego Borrar.",
"<strong>E. Euler’s step size.</strong> Press <strong>Newton’s cooling: a cup of coffee</strong> (h = {#} min, Run to t = {#}). Press <strong>Play</strong> and watch the steps follow the field. Press <strong>Record reading</strong>. Press <strong>Halve h</strong> and record again; repeat until h = {#} min (four readings). Export to worksheet (Table {#}).":
  "<strong>E. El tamaño de paso de Euler.</strong> Presiona <strong>Enfriamiento de Newton: una taza de café</strong> (h = {#} min, Llegar hasta t = {#}). Presiona <strong>Iniciar</strong> y mira cómo los pasos siguen el campo. Presiona <strong>Registrar lectura</strong>. Presiona <strong>h a la mitad</strong> y registra otra vez; repite hasta h = {#} min (cuatro lecturas). Presiona Exportar a la hoja (Tabla {#}).",
"Table {#}. The mystery cup: the slope of the field at t = {#}.":
  "Tabla {#}. La taza misteriosa: la pendiente del campo en t = {#}.",
"<span>B</span>Temperature y₀ (°C)":
  "<span>B</span>Temperatura y₀ (°C)",
"<span>C</span>Slope dy/dt (°C/min)":
  "<span>C</span>Pendiente dy/dt (°C/min)",
"Temperature y₀ (°C), row {#}":
  "Temperatura y₀ (°C), fila {#}",
"Slope dy/dt (°C/min), row {#}":
  "Pendiente dy/dt (°C/min), fila {#}",
"Table {#}. The mystery culture: the slope of the field at t = {#}.":
  "Tabla {#}. El cultivo misterioso: la pendiente del campo en t = {#}.",
"<span>B</span>Population y₀ (millions per mL)":
  "<span>B</span>Población y₀ (millones por mL)",
"<span>C</span>Slope dy/dt (millions per mL per hour)":
  "<span>C</span>Pendiente dy/dt (millones por mL por hora)",
"Population y₀ (millions per mL), row {#}":
  "Población y₀ (millones por mL), fila {#}",
"Slope dy/dt (millions per mL per hour), row {#}":
  "Pendiente dy/dt (millones por mL por hora), fila {#}",
"Table {#}. The mystery culture from y₀ = {#} at t = {#}.":
  "Tabla {#}. El cultivo misterioso desde y₀ = {#} en t = {#}.",
"<span>B</span>Time t (h)":
  "<span>B</span>Tiempo t (h)",
"<span>C</span>Accurate y (millions per mL)":
  "<span>C</span>y precisa (millones por mL)",
"Time t (h), row {#}":
  "Tiempo t (h), fila {#}",
"Accurate y (millions per mL), row {#}":
  "y precisa (millones por mL), fila {#}",
"Table {#}. The coffee, dT/dt = −{#}(T − {#}) from {#} °C: Euler’s method at the end of the run.":
  "Tabla {#}. El café, dT/dt = −{#}(T − {#}) desde {#} °C: el método de Euler al final del recorrido.",
"<span>B</span>Step size h (min)":
  "<span>B</span>Tamaño de paso h (min)",
"<span>C</span>Euler y (°C)":
  "<span>C</span>y de Euler (°C)",
"<span>D</span>Accurate y (°C)":
  "<span>D</span>y precisa (°C)",
"<span>E</span>Error, Euler − accurate (°C)":
  "<span>E</span>Error, Euler − precisa (°C)",
"Step size h (min), row {#}":
  "Tamaño de paso h (min), fila {#}",
"Euler y (°C), row {#}":
  "y de Euler (°C), fila {#}",
"Accurate y (°C), row {#}":
  "y precisa (°C), fila {#}",
"Error, Euler − accurate (°C), row {#}":
  "Error, Euler − precisa (°C), fila {#}",
"Graph Table {#}, the slope (vertical) against the temperature (horizontal), and fit a straight line. From its slope find k (in {#}/min), and from where the line crosses zero find the room temperature \\(T_a\\) (intercept divided by k). Check \\(T_a\\) against where the phase line’s dot sits.":
  "Grafica la Tabla {#}, la pendiente (vertical) contra la temperatura (horizontal), y ajusta una recta. Con su pendiente encuentra k (en {#}/min), y con el punto donde la recta cruza el cero encuentra la temperatura del cuarto \\(T_a\\) (la ordenada al origen dividida entre k). Compara \\(T_a\\) con la posición del punto de la línea de fase.",
"From part B, how close is your model’s temperature at {#} min to the thermometer reading at {#} min? If they differ by more than {#} °C, which of your two values (k or \\(T_a\\)) would you change, and which way?":
  "De la parte B, ¿qué tan cerca está la temperatura de tu modelo a los {#} min de la lectura del termómetro a los {#} min? Si difieren en más de {#} °C, ¿cuál de tus dos valores (k o \\(T_a\\)) cambiarías, y en qué sentido?",
"Graph Table {#}, the slope against the population, and fit a quadratic, \\(y = a + bx + cx^2\\). Compare with \\(rP - (r/K)P^2\\): find r from b, and K from b and c. At what population is the slope largest, and how large is it there? Compare K with where the phase line’s dot sits, and the population of fastest growth with K/{#}.":
  "Grafica la Tabla {#}, la pendiente contra la población, y ajusta una cuadrática, \\(y = a + bx + cx^2\\). Compárala con \\(rP - (r/K)P^2\\): encuentra r a partir de b, y K a partir de b y c. ¿En qué población es máxima la pendiente, y cuánto vale ahí? Compara K con la posición del punto de la línea de fase, y la población de crecimiento más rápido con K/{#}.",
"Graph Table {#} (accurate y against t). Between which two times does the curve rise fastest? Compare with \\(t^* = \\frac{1}{r}\\ln\\!\\left(\\frac{K}{5} - 1\\right)\\) from your r and K, and say what y the curve has there.":
  "Grafica la Tabla {#} (y precisa contra t). ¿Entre qué dos tiempos sube más rápido la curva? Compara con \\(t^* = \\frac{1}{r}\\ln\\!\\left(\\frac{K}{5} - 1\\right)\\) usando tus r y K, y di qué y tiene ahí la curva.",
"From Table {#}, divide each error by the next one (h divided by {#} each time). What factor do you find, and what does it say about the order of Euler’s method? For h = {#} min, work out the exact Euler value by hand: each step multiplies T − {#} by {#} − {#}h, so six steps give \\(20 + 70\\,(0.5)^6\\). Does it match the demo?":
  "De la Tabla {#}, divide cada error entre el siguiente (h dividido entre {#} cada vez). ¿Qué factor encuentras, y qué dice sobre el orden del método de Euler? Para h = {#} min, calcula a mano el valor exacto de Euler: cada paso multiplica T − {#} por {#} − {#}h, así que seis pasos dan \\(20 + 70\\,(0.5)^6\\). ¿Coincide con la demo?",
"Each slope you read in Tables {#} and {#} is exact for the hidden model, so the scatter about your fit is zero up to the rounding of the readout (six significant figures). Your values of k, \\(T_a\\), r and K therefore come out close to the hidden ones; use the standard errors the fit gives for their uncertainty. The thermometer readings are rounded to {#} °C, so a model that stays within {#} °C of each dot agrees with them. In Table {#} the accurate value is good to about ten significant figures, far better than the errors you are measuring.":
  "Cada pendiente que lees en las Tablas {#} y {#} es exacta para el modelo oculto, así que la dispersión alrededor de tu ajuste es cero salvo por el redondeo de la lectura (seis cifras significativas). Por eso tus valores de k, \\(T_a\\), r y K salen cercanos a los ocultos; usa los errores estándar que da el ajuste como su incertidumbre. Las lecturas del termómetro están redondeadas a {#} °C, así que un modelo que se queda a menos de {#} °C de cada punto coincide con ellas. En la Tabla {#} el valor preciso es bueno hasta unas diez cifras significativas, mucho mejor que los errores que estás midiendo.",
"Look back at your guess in Before the lab {#}. Was Euler’s temperature at {#} min above or below the accurate one, and did halving h change the error by the factor you guessed? Use the slope field to explain why every Euler step on a cooling curve errs the same way.":
  "Revisa tu predicción de Antes del laboratorio {#}. ¿La temperatura de Euler a los {#} min quedó arriba o abajo de la precisa, y reducir h a la mitad cambió el error por el factor que predijiste? Usa el campo de pendientes para explicar por qué cada paso de Euler en una curva de enfriamiento se equivoca hacia el mismo lado.",
"A real cup in a real room does not follow Newton’s law exactly: it also cools by evaporation from the surface, which is fast when the tea is hot. If you read slopes from real data, how would your graph of slope against temperature differ from a straight line, and which way would it bend?":
  "Una taza real en un cuarto real no sigue exactamente la ley de Newton: también se enfría por evaporación en la superficie, que es rápida cuando el té está caliente. Si leyeras pendientes de datos reales, ¿en qué se diferenciaría tu gráfica de pendiente contra temperatura de una recta, y hacia dónde se doblaría?",
"A falling object with drag in proportion to \\(v^2\\) follows \\(dv/dt = g(1 - (v/v_t)^2)\\). Without solving it, what is the terminal velocity, is it stable, and how would the graph of dv/dt against v compare with your Table {#} graph?":
  "Un objeto que cae con arrastre proporcional a \\(v^2\\) sigue \\(dv/dt = g(1 - (v/v_t)^2)\\). Sin resolverla, ¿cuál es la velocidad terminal, es estable, y cómo se compararía la gráfica de dv/dt contra v con tu gráfica de la Tabla {#}?",
"Before the lab answers, the four data tables, the three graphs with their fits, your values of k, \\(T_a\\), r and K, the comparison in part B, and your answers to the Analysis and Questions. Say that the data are computed by the demo, not measured.":
  "Las respuestas de Antes del laboratorio, las cuatro tablas de datos, las tres gráficas con sus ajustes, tus valores de k, \\(T_a\\), r y K, la comparación de la parte B, y tus respuestas al Análisis y a las Preguntas. Indica que los datos los calculó la demo, no se midieron.",
"Column D, row {#}":
  "Columna D, fila {#}",
"Heading of column D":
  "Encabezado de la columna D",
"Column D":
  "Columna D",
"Slope Fields and Euler's Method":
  "Campos de pendientes y el método de Euler"
});
