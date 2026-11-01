/* ws/wave-power in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/wave-power', {
"Observation":
  "Observación",
"End":
  "Extremo",
"Predicted r":
  "r predicho",
"What comes back":
  "Qué regresa",
"Height back ÷ height sent":
  "Altura de regreso ÷ altura enviada",
"Share of the energy sent back":
  "Parte de la energía devuelta",
"Power Carried by a Wave | VirtualDemos":
  "Potencia transportada por una onda | VirtualDemos",
"Power Carried by a Wave":
  "Potencia transportada por una onda",
"<strong>Setups in the demo:</strong> Power against amplitude; Power against frequency; Power against tension; Mismatched absorber; Unknown string; One pulse: free and fixed ends.":
  "<strong>Configuraciones en la demo:</strong> Potencia en función de la amplitud; Potencia en función de la frecuencia; Potencia en función de la tensión; Absorbedor desacoplado; Cuerda desconocida; Un pulso: extremos libre y fijo.",
"<strong>Using the demo.</strong> The string runs from a mechanical wave driver to an absorber (a dashpot) and over a pulley to a hanger of slotted masses. The function generator sets the frequency and the driver’s amplitude, and stays in view while the string vibrates. The string, the absorber and the length are on the Set up card; masses are added from the tray. The power meter reads the average power the absorber takes. Blind hides \\(\\mu\\), \\(v\\) and the predicted power; the unknown string always hides its \\(\\mu\\).":
  "<strong>Uso de la demo.</strong> La cuerda va de un excitador mecánico de ondas a un absorbedor (un amortiguador) y, pasando por una polea, a un portapesas con pesas ranuradas. El generador de funciones fija la frecuencia y la amplitud del excitador, y queda a la vista mientras la cuerda vibra. La cuerda, el absorbedor y la longitud están en la tarjeta de configuración; las pesas se agregan desde la bandeja. El medidor de potencia lee la potencia media que toma el absorbedor. A ciegas oculta \\(\\mu\\), \\(v\\) y la potencia predicha; la cuerda desconocida siempre oculta su \\(\\mu\\).",
"<strong>What the demo models.</strong> The linear wave equation with no losses along the string, so the power is the same everywhere along it. The driver moves its end as \\(A\\cos 2\\pi f t\\). The absorber pushes back with a force \\(b\\) times its velocity. When \\(b\\) equals the string’s impedance \\(Z = \\sqrt{T\\mu}\\) (Matched), no wave comes back, as if the string went on for ever; Too soft is \\(b = Z/3\\) and Too stiff \\(b = 3Z\\). For one pulse only, the end can also be Free (no absorber: a ring that slides on a smooth rod, \\(b = 0\\)) or Fixed (clamped, \\(b \\to \\infty\\)); Send one pulse raises the blade once and holds it, so the held blade is a fixed end too. \\(T = mg\\) with \\(g = 9.81\\ \\mathrm{m/s^2}\\), and \\(m\\) includes the {#} g hanger. The meter is exact: simulated data with no noise.":
  "<strong>Lo que modela la demo.</strong> La ecuación de onda lineal sin pérdidas a lo largo de la cuerda, así que la potencia es la misma en toda ella. El excitador mueve su extremo como \\(A\\cos 2\\pi f t\\). El absorbedor empuja en sentido contrario con una fuerza igual a \\(b\\) por su velocidad. Cuando \\(b\\) es igual a la impedancia de la cuerda \\(Z = \\sqrt{T\\mu}\\) (Acoplado), no regresa ninguna onda, como si la cuerda siguiera para siempre; Demasiado blando es \\(b = Z/3\\) y Demasiado rígido \\(b = 3Z\\). Solo para un pulso, el extremo también puede ser Libre (sin absorbedor: un anillo que se desliza en una varilla lisa, \\(b = 0\\)) o Fijo (sujeto, \\(b \\to \\infty\\)); Enviar un pulso levanta la cuchilla una vez y la mantiene, así que la cuchilla sostenida también es un extremo fijo. \\(T = mg\\) con \\(g = 9.81\\ \\mathrm{m/s^2}\\), y \\(m\\) incluye el portapesas de {#} g. El medidor es exacto: datos simulados sin ruido.",
"Measure how the power carried by a wave on a string depends on its amplitude, frequency and tension, and use the result to find the linear density of an unknown string.":
  "Mide cómo depende la potencia que transporta una onda en una cuerda de su amplitud, su frecuencia y la tensión, y usa el resultado para encontrar la densidad lineal de una cuerda desconocida.",
"A sinusoidal wave on a string of linear density \\(\\mu\\) under tension \\(T\\) travels at \\(v = \\sqrt{T/\\mu}\\). Its average energy per unit length is \\(\\tfrac12\\mu A^2\\omega^2\\), half kinetic and half potential, and it carries this energy along at speed \\(v\\), so the average power is":
  "Una onda sinusoidal en una cuerda de densidad lineal \\(\\mu\\) bajo tensión \\(T\\) viaja a \\(v = \\sqrt{T/\\mu}\\). Su energía media por unidad de longitud es \\(\\tfrac12\\mu A^2\\omega^2\\), mitad cinética y mitad potencial, y transporta esta energía con rapidez \\(v\\), así que la potencia media es",
"\\[P = \\frac12\\,\\mu A^2\\omega^2 v = \\frac12\\,A^2\\omega^2\\sqrt{T\\mu},\\qquad \\omega = 2\\pi f.\\]":
  "\\[P = \\frac12\\,\\mu A^2\\omega^2 v = \\frac12\\,A^2\\omega^2\\sqrt{T\\mu},\\qquad \\omega = 2\\pi f.\\]",
"The power grows as \\(A^2\\), as \\(f^2\\) and as \\(\\sqrt{T}\\). A string that ends at an absorber matched to its impedance \\(Z = \\sqrt{T\\mu}\\) takes all of this power, with nothing reflected. A mismatched end sends part of each wave back; the returning wave interferes with the outgoing one, and the power delivered then depends on the length of the string.":
  "La potencia crece como \\(A^2\\), como \\(f^2\\) y como \\(\\sqrt{T}\\). Una cuerda que termina en un absorbedor acoplado a su impedancia \\(Z = \\sqrt{T\\mu}\\) toma toda esta potencia, sin nada reflejado. Un extremo desacoplado devuelve parte de cada onda; la onda que regresa interfiere con la que sale, y entonces la potencia entregada depende de la longitud de la cuerda.",
"<strong>One pulse at the end.</strong> A pulse that reaches an end with a damping constant \\(b\\) comes back with its height multiplied by":
  "<strong>Un pulso en el extremo.</strong> Un pulso que llega a un extremo con constante de amortiguamiento \\(b\\) regresa con su altura multiplicada por",
"\\[r = \\frac{Z - b}{Z + b},\\]":
  "\\[r = \\frac{Z - b}{Z + b},\\]",
"upright when \\(r > 0\\) and upside down when \\(r < 0\\), and with the share \\(r^2\\) of its energy. A free end (\\(b = 0\\)) gives \\(r = +1\\); a fixed end (\\(b \\to \\infty\\)) gives \\(r = -1\\); a matched end gives \\(r = 0\\).":
  "derecho cuando \\(r > 0\\) e invertido cuando \\(r < 0\\), y con la parte \\(r^2\\) de su energía. Un extremo libre (\\(b = 0\\)) da \\(r = +1\\); un extremo fijo (\\(b \\to \\infty\\)) da \\(r = -1\\); un extremo acoplado da \\(r = 0\\).",
"String B has \\(\\mu = 1.20\\) g/m and hangs {#} g (hanger included). Find \\(T\\), \\(v\\) and the power it carries at {#} Hz with \\(A = 1.00\\) mm.":
  "La Cuerda B tiene \\(\\mu = 1.20\\) g/m y cuelga {#} g (portapesas incluido). Encuentra \\(T\\), \\(v\\) y la potencia que transporta a {#} Hz con \\(A = 1.00\\) mm.",
"By what factor does the power change if \\(A\\) is doubled? If \\(f\\) is doubled? If the hanging mass is quadrupled?":
  "¿En qué factor cambia la potencia si se duplica \\(A\\)? ¿Si se duplica \\(f\\)? ¿Si se cuadruplica la masa colgante?",
"Why does a graph of \\(P\\) against \\(A^2\\) give a straight line through the origin? What is its slope?":
  "¿Por qué una gráfica de \\(P\\) contra \\(A^2\\) da una recta que pasa por el origen? ¿Cuál es su pendiente?",
"Why should the power at a matched end not depend on the length of the string?":
  "¿Por qué la potencia en un extremo acoplado no debería depender de la longitud de la cuerda?",
"Find \\(r\\) and the share of the energy sent back for a free end, the too soft absorber (\\(b = Z/3\\)), the matched one, the too stiff one (\\(b = 3Z\\)) and a fixed end.":
  "Encuentra \\(r\\) y la parte de la energía devuelta para un extremo libre, el absorbedor demasiado blando (\\(b = Z/3\\)), el acoplado, el demasiado rígido (\\(b = 3Z\\)) y un extremo fijo.",
"On a real string vibrator, keep fingers away from the driver while it runs, secure the pulley clamp, and keep feet clear of hanging masses. Turn the amplitude down before changing the frequency range.":
  "En un vibrador de cuerdas real, mantén los dedos lejos del excitador mientras funciona, asegura la abrazadera de la polea y mantén los pies lejos de las masas colgantes. Baja la amplitud antes de cambiar el intervalo de frecuencia.",
"<strong>Part {#}: amplitude.</strong> String B, {#} m long, with {#} g hanging and a matched absorber, at {#} Hz. Hide the predictions. Measure the power at seven amplitudes from {#} to {#} mm.":
  "<strong>Parte {#}: amplitud.</strong> Cuerda B, de {#} m de largo, con {#} g colgando y un absorbedor acoplado, a {#} Hz. Oculta las predicciones. Mide la potencia con siete amplitudes de {#} a {#} mm.",
"<strong>Part {#}: frequency.</strong> Same string, mass and length, at \\(A = 1.00\\) mm. Measure the power at six frequencies from {#} to {#} Hz.":
  "<strong>Parte {#}: frecuencia.</strong> La misma cuerda, masa y longitud, con \\(A = 1.00\\) mm. Mide la potencia a seis frecuencias de {#} a {#} Hz.",
"<strong>Part {#}: a mismatched end.</strong> At {#} Hz and {#} mm, measure the power with the absorber too soft at five lengths from {#} to {#} m. Repeat the same lengths with the matched absorber. Keep both scans in one copy of the table, and type the length and the absorber in the Observation column of each row (the export does not include them).":
  "<strong>Parte {#}: un extremo desacoplado.</strong> A {#} Hz y {#} mm, mide la potencia con el absorbedor demasiado blando a cinco longitudes de {#} a {#} m. Repite las mismas longitudes con el absorbedor acoplado. Conserva ambos barridos en una misma copia de la tabla, y escribe la longitud y el absorbedor en la columna Observación de cada fila (la exportación no los incluye).",
"<strong>Part {#}: tension.</strong> At {#} Hz and {#} mm with the matched absorber, measure the power with at least five hanging masses from {#} g to {#} g.":
  "<strong>Parte {#}: tensión.</strong> A {#} Hz y {#} mm con el absorbedor acoplado, mide la potencia con al menos cinco masas colgantes de {#} g a {#} g.",
"<strong>Part {#}: unknown string.</strong> An unknown string, {#} m, {#} g, matched, at {#} Hz: measure the power at six amplitudes from {#} to {#} mm. Keep the same unknown string for the whole scan.":
  "<strong>Parte {#}: cuerda desconocida.</strong> Una cuerda desconocida, {#} m, {#} g, acoplada, a {#} Hz: mide la potencia con seis amplitudes de {#} a {#} mm. Conserva la misma cuerda desconocida durante todo el barrido.",
"<strong>Part {#}: one pulse.</strong> Use the One pulse: free and fixed ends setup (String B, {#} m, {#} g, a {#} Hz blade swing of {#} mm). Send one pulse with each end in turn: free, too soft, matched, too stiff and fixed. Watch the pulse come back from the far end: is it upright, upside down, or does nothing come back, and how tall is it compared with the pulse that went out? Record what you see in the One pulse table.":
  "<strong>Parte {#}: un pulso.</strong> Usa la configuración Un pulso: extremos libre y fijo (Cuerda B, {#} m, {#} g, un movimiento de la cuchilla de {#} mm a {#} Hz). Envía un pulso con cada extremo por turno: libre, demasiado blando, acoplado, demasiado rígido y fijo. Observa el pulso regresar del extremo lejano: ¿viene derecho, invertido o no regresa nada, y qué tan alto es comparado con el pulso que salió? Registra lo que ves en la tabla Un pulso.",
"<strong>Using the virtual apparatus.</strong> The meter reads only while the driver is running. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> El medidor solo lee mientras el excitador está funcionando. Envía cada parte a la hoja de trabajo antes de borrar, para que cada parte tenga su propia copia de la tabla de Datos.",
"<span>H</span>Observation":
  "<span>H</span>Observación",
"A (mm), row {#}":
  "A (mm), fila {#}",
"T (N), row {#}":
  "T (N), fila {#}",
"P (mW), row {#}":
  "P (mW), fila {#}",
"A^{#} (mm²), row {#}":
  "A^{#} (mm²), fila {#}",
"f^{#} (Hz²), row {#}":
  "f^{#} (Hz²), fila {#}",
"Observation, row {#}":
  "Observación, fila {#}",
"Record the string, the absorber and the length for each copy of the table. For Part {#}, type \\(\\sqrt{T}\\) (in \\(\\mathrm{N^{1/2}}\\)) for each row in the Observation column, so you can graph against it.":
  "Registra la cuerda, el absorbedor y la longitud para cada copia de la tabla. Para la Parte {#}, escribe \\(\\sqrt{T}\\) (en \\(\\mathrm{N^{1/2}}\\)) para cada fila en la columna Observación, para poder graficar contra él.",
"<strong>One pulse.</strong> Work out the second, third and last columns from the Background.":
  "<strong>Un pulso.</strong> Calcula la segunda, la tercera y la última columnas a partir de los Antecedentes.",
"<span>A</span>End":
  "<span>A</span>Extremo",
"<span>C</span>Predicted \\(r\\)":
  "<span>C</span>\\(r\\) predicho",
"<span>D</span>What comes back":
  "<span>D</span>Qué regresa",
"<span>E</span>Height back ÷ height sent":
  "<span>E</span>Altura de regreso ÷ altura enviada",
"<span>F</span>Share of the energy sent back":
  "<span>F</span>Parte de la energía devuelta",
"End, row {#}":
  "Extremo, fila {#}",
"b/Z, row {#}":
  "b/Z, fila {#}",
"Predicted r, row {#}":
  "r predicho, fila {#}",
"What comes back, row {#}":
  "Qué regresa, fila {#}",
"Height back ÷ height sent, row {#}":
  "Altura de regreso ÷ altura enviada, fila {#}",
"Share of the energy sent back, row {#}":
  "Parte de la energía devuelta, fila {#}",
"Graph \\(P\\) against \\(A^2\\) for Part {#}. Is it a straight line through the origin? From the slope and \\(\\omega\\), find \\(\\sqrt{T\\mu}\\) and then \\(\\mu\\) for String B. Compare with {#} g/m.":
  "Grafica \\(P\\) contra \\(A^2\\) para la Parte {#}. ¿Es una recta que pasa por el origen? A partir de la pendiente y de \\(\\omega\\), encuentra \\(\\sqrt{T\\mu}\\) y luego \\(\\mu\\) para la Cuerda B. Compara con {#} g/m.",
"Graph \\(P\\) against \\(f^2\\) for Part {#}. Find \\(\\mu\\) again from the slope.":
  "Grafica \\(P\\) contra \\(f^2\\) para la Parte {#}. Encuentra de nuevo \\(\\mu\\) a partir de la pendiente.",
"For Part {#}, compare the powers at each length with the soft and the matched absorber. Explain why the soft end’s power depends on \\(L\\) while the matched end’s does not.":
  "Para la Parte {#}, compara las potencias a cada longitud con el absorbedor blando y con el acoplado. Explica por qué la potencia del extremo blando depende de \\(L\\) mientras que la del extremo acoplado no.",
"For Part {#}, graph \\(P\\) against \\(\\sqrt{T}\\). Is the power proportional to \\(\\sqrt{T}\\)?":
  "Para la Parte {#}, grafica \\(P\\) contra \\(\\sqrt{T}\\). ¿Es la potencia proporcional a \\(\\sqrt{T}\\)?",
"From Part {#}, find the unknown string’s \\(\\mu\\) from the slope of \\(P\\) against \\(A^2\\).":
  "A partir de la Parte {#}, encuentra la \\(\\mu\\) de la cuerda desconocida a partir de la pendiente de \\(P\\) contra \\(A^2\\).",
"For Part {#}, compare what came back from each end with the predicted \\(r\\). Which end gives back all the energy upside down, which all of it upright, and which none?":
  "Para la Parte {#}, compara lo que regresó de cada extremo con el \\(r\\) predicho. ¿Qué extremo devuelve toda la energía invertida, cuál toda derecha y cuál nada?",
"The meter in the simulation is exact and the settings are exact, so the points lie on the predicted lines. Any departure from a straight line in your graphs is a real physical effect or a mistake in the table, not noise. On a real apparatus include the measurement of the driver’s amplitude (hard to read at the {#} mm level), damping in the string itself, reflections at an imperfect absorber, the pulley’s friction and the calibration of a real power or velocity sensor.":
  "El medidor de la simulación es exacto y los ajustes son exactos, así que los puntos caen sobre las rectas predichas. Cualquier desviación de una recta en tus gráficas es un efecto físico real o un error en la tabla, no ruido. En un aparato real incluye la medición de la amplitud del excitador (difícil de leer al nivel de {#} mm), el amortiguamiento en la cuerda misma, las reflexiones en un absorbedor imperfecto, la fricción de la polea y la calibración de un sensor real de potencia o de velocidad.",
"Why does the power grow with the square of the amplitude?":
  "¿Por qué la potencia crece con el cuadrado de la amplitud?",
"Two strings have the same tension, and one has four times the linear density. At the same \\(A\\) and \\(f\\), which carries more power, and by how much?":
  "Dos cuerdas tienen la misma tensión, y una tiene cuatro veces la densidad lineal. Con los mismos \\(A\\) y \\(f\\), ¿cuál transporta más potencia, y cuánto más?",
"Why does the absorber’s matched value \\(b = \\sqrt{T\\mu}\\) depend on both the tension and the density?":
  "¿Por qué el valor acoplado del absorbedor \\(b = \\sqrt{T\\mu}\\) depende tanto de la tensión como de la densidad?",
"Where does the wave’s energy go at the matched absorber? At a perfectly fixed end?":
  "¿A dónde va la energía de la onda en el absorbedor acoplado? ¿Y en un extremo perfectamente fijo?",
"The pulse sent at a free end comes back upright, and the end itself swings twice as far as the pulse is tall. Why twice?":
  "El pulso enviado a un extremo libre regresa derecho, y el extremo mismo oscila el doble de lo alto que es el pulso. ¿Por qué el doble?",
"Prelab answers, a Data table copy for each part, graphs with fits, your values of \\(\\mu\\) for String B and the unknown string, the comparison of mismatched and matched ends, the One pulse table, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, una copia de la tabla de Datos para cada parte, las gráficas con ajustes, tus valores de \\(\\mu\\) para la Cuerda B y la cuerda desconocida, la comparación de extremos desacoplados y acoplados, la tabla Un pulso, y las respuestas a las preguntas. Identifica los datos simulados.",
"Amplitude of the driver":
  "Amplitud del excitador",
"Length of the string":
  "Longitud de la cuerda",
"Average power carried":
  "Potencia media transportada",
"Tension":
  "Tensión",
"Impedance of the string, √(Tμ)":
  "Impedancia de la cuerda, √(Tμ)",
"Damping constant of the absorber":
  "Constante de amortiguamiento del absorbedor",
"Hanging mass, hanger included":
  "Masa colgante, portapesas incluido",
"Linear mass density of the string":
  "Densidad lineal de masa de la cuerda",
"Ratio of the returning pulse to the pulse that reached the end, (Z − b)/(Z + b)":
  "Razón entre el pulso que regresa y el pulso que llegó al extremo, (Z − b)/(Z + b)",
"Wave speed":
  "Rapidez de la onda",
"Energy and Power of a Wave":
  "Energía y potencia de una onda"
});
