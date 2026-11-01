/* ws/pipe-flow in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/pipe-flow', {
"Liquid and pipe":
  "Líquido y tubo",
"Valve (%)":
  "Válvula (%)",
"Dye":
  "Tinta",
"Flow in a Pipe: Poiseuille’s Law and Turbulence | VirtualDemos":
  "Flujo en un tubo: ley de Poiseuille y turbulencia | VirtualDemos",
"Flow in a Pipe: Poiseuille’s Law and Turbulence":
  "Flujo en un tubo: ley de Poiseuille y turbulencia",
"Choose Flow in a pipe under Experiment. Pick the liquid and the pipe, and set the flow with the outlet valve under the picture (up and down arrows on the picture change it by {#}%, Shift by {#}%).":
  "Elige Flujo en un tubo en Experimento. Elige el líquido y el tubo, y fija el flujo con la válvula de salida debajo de la imagen (las flechas arriba y abajo sobre la imagen lo cambian en {#}%, con Shift en {#}%).",
"Start collecting swings the outlet over the measuring cylinder and starts the stopwatch; Stop collecting stops both. Empty the cylinder before the next reading. The stopwatch runs faster with ×{#} or ×{#}, but its reading is always the real time.":
  "Empezar a recolectar gira la salida sobre la probeta y arranca el cronómetro; Dejar de recolectar detiene ambos. Vacía la probeta antes de la siguiente lectura. El cronómetro corre más rápido con ×{#} o ×{#}, pero su lectura siempre es el tiempo real.",
"Capture stores the cylinder volume (to {#} mL), the stopwatch time (to {#} s), the pressure gauge (to {#} Pa) and what the dye is doing, with the liquid, pipe and valve setting.":
  "Capturar guarda el volumen de la probeta (con resolución de {#} mL), el tiempo del cronómetro (con resolución de {#} s), el manómetro (con resolución de {#} Pa) y lo que hace la tinta, junto con el líquido, el tubo y el ajuste de la válvula.",
"Blind hides the flow rate, speed, Reynolds number, regime and viscosity, leaving the cylinder, the stopwatch and the pressure gauge. The Mystery liquid keeps its viscosity hidden; choosing it again draws a new one.":
  "A ciegas oculta el caudal, la rapidez, el número de Reynolds, el régimen y la viscosidad, y deja la probeta, el cronómetro y el manómetro. El Líquido misterioso mantiene oculta su viscosidad; elegirlo otra vez sortea uno nuevo.",
"Steady, fully developed flow in a smooth horizontal glass pipe, with taps {#} m apart far enough downstream of the inlet that the flow profile no longer changes.":
  "Flujo estacionario y completamente desarrollado en un tubo de vidrio horizontal y liso, con tomas separadas {#} m lo bastante lejos corriente abajo de la entrada para que el perfil del flujo ya no cambie.",
"Pressure drop from the Darcy–Weisbach equation \\(\\Delta P = f\\,(L/D)\\,\\rho v^2/2\\), with \\(f = 64/N_R\\) below \\(N_R = 2000\\) (exactly Poiseuille’s law) and the smooth pipe friction factor of Blasius, \\(f = 0.3164\\,N_R^{-1/4}\\), above \\(N_R = 3000\\). Between the two, where real flow flickers between laminar and turbulent, \\(f\\) is interpolated.":
  "Caída de presión según la ecuación de Darcy–Weisbach \\(\\Delta P = f\\,(L/D)\\,\\rho v^2/2\\), con \\(f = 64/N_R\\) por debajo de \\(N_R = 2000\\) (exactamente la ley de Poiseuille) y el factor de fricción de tubo liso de Blasius, \\(f = 0.3164\\,N_R^{-1/4}\\), por encima de \\(N_R = 3000\\). Entre ambos, donde el flujo real alterna entre laminar y turbulento, \\(f\\) se interpola.",
"Water: \\(\\eta = 1.002\\) mPa·s at {#} °C and {#} mPa·s at {#} °C (Table {#} of the textbook). The dye’s path shows the kind of flow; its eddies are drawn for illustration.":
  "Agua: \\(\\eta = 1.002\\) mPa·s a {#} °C y {#} mPa·s a {#} °C (Tabla {#} del libro). La trayectoria de la tinta muestra el tipo de flujo; sus remolinos se dibujan como ilustración.",
"Measure a liquid’s viscosity from laminar flow through a pipe using Poiseuille’s law, find the Reynolds number at which the flow stops being laminar, and see how the pressure drop changes once the flow is turbulent.":
  "Mide la viscosidad de un líquido a partir del flujo laminar en un tubo usando la ley de Poiseuille, encuentra el número de Reynolds en el que el flujo deja de ser laminar, y ve cómo cambia la caída de presión una vez que el flujo es turbulento.",
"A viscous liquid needs a pressure difference to keep it moving through a pipe. For <strong>laminar</strong> flow (smooth layers sliding past each other, fastest on the axis and at rest at the wall) through a horizontal pipe of radius \\(r\\) and length \\(L\\), <strong>Poiseuille’s law</strong> gives the flow rate":
  "Un líquido viscoso necesita una diferencia de presión para seguir moviéndose por un tubo. Para un flujo <strong>laminar</strong> (capas lisas que se deslizan unas sobre otras, más rápidas en el eje y en reposo en la pared) en un tubo horizontal de radio \\(r\\) y longitud \\(L\\), la <strong>ley de Poiseuille</strong> da el caudal",
"\\[Q = \\frac{(P_1 - P_2)\\,\\pi r^4}{8\\eta L},\\qquad\\text{so}\\qquad \\Delta P = \\frac{8\\eta L}{\\pi r^4}\\,Q.\\]":
  "\\[Q = \\frac{(P_1 - P_2)\\,\\pi r^4}{8\\eta L},\\qquad\\text{so}\\qquad \\Delta P = \\frac{8\\eta L}{\\pi r^4}\\,Q.\\]",
"A graph of \\(\\Delta P\\) against \\(Q\\) is a straight line through the origin with slope \\(8\\eta L/(\\pi r^4)\\), the pipe’s resistance. The \\(r^4\\) is striking: halving the radius at the same pressure difference cuts the flow by a factor of {#}.":
  "Una gráfica de \\(\\Delta P\\) en función de \\(Q\\) es una recta que pasa por el origen con pendiente \\(8\\eta L/(\\pi r^4)\\), la resistencia del tubo. El \\(r^4\\) es notable: reducir el radio a la mitad con la misma diferencia de presión reduce el flujo en un factor de {#}.",
"Whether the flow stays laminar is decided by the <strong>Reynolds number</strong>, the ratio of the liquid’s inertia to its viscous forces. For a pipe of diameter \\(D = 2r\\) and mean speed \\(v = Q/(\\pi r^2)\\),":
  "Si el flujo se mantiene laminar lo decide el <strong>número de Reynolds</strong>, la razón entre la inercia del líquido y sus fuerzas viscosas. Para un tubo de diámetro \\(D = 2r\\) y rapidez media \\(v = Q/(\\pi r^2)\\),",
"\\[N_R = \\frac{2\\rho v r}{\\eta} = \\frac{\\rho v D}{\\eta}.\\]":
  "\\[N_R = \\frac{2\\rho v r}{\\eta} = \\frac{\\rho v D}{\\eta}.\\]",
"The textbook gives the rule for pipes: below about {#} the flow is laminar, between about {#} and {#} it is unstable (laminar with bursts of turbulence), and above about {#} it is <strong>turbulent</strong>, with eddies that mix the liquid across the pipe. Turbulent flow needs a larger pressure difference than Poiseuille’s law predicts, and the pressure drop grows faster than \\(Q\\): in a smooth pipe, roughly as \\(Q^{1.75}\\). On a graph of \\(\\log\\Delta P\\) against \\(\\log Q\\) the slope is the exponent, so it changes from {#} to about {#}. Between two readings, \\(n = \\ln(\\Delta P_2/\\Delta P_1)/\\ln(Q_2/Q_1)\\).":
  "El libro da la regla para tubos: por debajo de unos {#} el flujo es laminar, entre unos {#} y {#} es inestable (laminar con ráfagas de turbulencia), y por encima de unos {#} es <strong>turbulento</strong>, con remolinos que mezclan el líquido a lo ancho del tubo. El flujo turbulento necesita una diferencia de presión mayor que la que predice la ley de Poiseuille, y la caída de presión crece más rápido que \\(Q\\): en un tubo liso, aproximadamente como \\(Q^{1.75}\\). En una gráfica de \\(\\log\\Delta P\\) en función de \\(\\log Q\\) la pendiente es el exponente, así que cambia de {#} a cerca de {#}. Entre dos lecturas, \\(n = \\ln(\\Delta P_2/\\Delta P_1)/\\ln(Q_2/Q_1)\\).",
"The flow rate is measured the oldest way: collect the outflow in a measuring cylinder for a timed interval, \\(Q = V/t\\). The pressure drop between the taps is read from a differential gauge, and also shows as the difference in height \\(\\Delta h\\) of the liquid in two manometer tubes, \\(\\Delta P = \\rho g\\,\\Delta h\\). A thin thread of dye injected on the axis shows the kind of flow, as in Osborne Reynolds’s own experiment of {#}.":
  "El caudal se mide de la manera más antigua: se recolecta el líquido que sale en una probeta durante un intervalo cronometrado, \\(Q = V/t\\). La caída de presión entre las tomas se lee en un manómetro diferencial, y también se ve como la diferencia de altura \\(\\Delta h\\) del líquido en dos tubos manométricos, \\(\\Delta P = \\rho g\\,\\Delta h\\). Un hilo delgado de tinta inyectado en el eje muestra el tipo de flujo, como en el propio experimento de Osborne Reynolds de {#}.",
"The {#} mm pipe carries water at {#} °C (\\(\\rho = 998.2\\) kg/m³, \\(\\eta = 1.002\\times10^{-3}\\) Pa·s). Find the flow rate in mL/s at which \\(N_R = 2000\\).":
  "El tubo de {#} mm lleva agua a {#} °C (\\(\\rho = 998.2\\) kg/m³, \\(\\eta = 1.002\\times10^{-3}\\) Pa·s). Encuentra el caudal en mL/s al que \\(N_R = 2000\\).",
"Use Poiseuille’s law to predict the pressure drop over {#} m at that flow rate. How high a column of water is that?":
  "Usa la ley de Poiseuille para predecir la caída de presión en {#} m con ese caudal. ¿Qué tan alta es esa columna de agua?",
"The {#} mm and {#} mm pipes carry the same small laminar flow. Predict the ratio of their pressure drops.":
  "Los tubos de {#} mm y {#} mm llevan el mismo flujo laminar pequeño. Predice la razón entre sus caídas de presión.",
"A real constant head tank holds a lot of water above the bench: secure it, keep electrical equipment away from spills, and mop up at once. The dye is a food coloring, but treat any dye as staining. The simulation has no hazards.":
  "Un tanque real de carga constante contiene mucha agua sobre la mesa: asegúralo, mantén el equipo eléctrico lejos de los derrames y limpia de inmediato. La tinta es un colorante para alimentos, pero trata cualquier tinta como si manchara. La simulación no tiene peligros.",
"<strong>Part {#}: laminar flow and Poiseuille’s law.</strong> Water at {#} °C in the {#} mm pipe, with the valve at {#}, {#}, {#}, {#}, {#}, {#} and {#}%.":
  "<strong>Parte {#}: flujo laminar y ley de Poiseuille.</strong> Agua a {#} °C en el tubo de {#} mm, con la válvula al {#}, {#}, {#}, {#}, {#}, {#} y {#}%.",
"<strong>Part {#}: through the transition to turbulence.</strong> The same water and pipe, with the valve at {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#}%. Watch the dye closely between {#}% and {#}%.":
  "<strong>Parte {#}: a través de la transición a la turbulencia.</strong> La misma agua y el mismo tubo, con la válvula al {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#}%. Observa la tinta con atención entre {#}% y {#}%.",
"<strong>Part {#}: the dependence on radius.</strong> Water at {#} °C in the {#} mm pipe, with the valve at {#}, {#}, {#}, {#} and {#}%.":
  "<strong>Parte {#}: la dependencia del radio.</strong> Agua a {#} °C en el tubo de {#} mm, con la válvula al {#}, {#}, {#}, {#} y {#}%.",
"<strong>Part {#}: a mystery liquid.</strong> Choose the Mystery liquid in the {#} mm pipe and take five laminar readings at small valve settings. Find its viscosity, predict the flow rate at which \\(N_R = 2000\\), and then open the valve to that flow and watch the dye.":
  "<strong>Parte {#}: un líquido misterioso.</strong> Elige el Líquido misterioso en el tubo de {#} mm y toma cinco lecturas laminares con ajustes pequeños de la válvula. Encuentra su viscosidad, predice el caudal al que \\(N_R = 2000\\), y luego abre la válvula hasta ese flujo y observa la tinta.",
"<strong>Using the virtual apparatus.</strong> Turn Blind on before you start each part. For each reading, set the valve, empty the cylinder, collect for a measured time long enough to give a few hundred millilitres (use ×{#} for slow flows), stop, and capture the cylinder volume, the stopwatch time and the pressure drop. Note what the dye is doing each time. Send each part’s readings to the worksheet, then clear them before the next part; each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> Activa A ciegas antes de empezar cada parte. Para cada lectura, fija la válvula, vacía la probeta, recolecta durante un tiempo medido lo bastante largo para obtener unos cientos de mililitros (usa ×{#} para flujos lentos), detén y captura el volumen de la probeta, el tiempo del cronómetro y la caída de presión. Anota lo que hace la tinta cada vez. Envía las lecturas de cada parte a la hoja de trabajo y luego bórralas antes de la siguiente parte; cada parte tiene su propia copia de la tabla de datos.",
"Tap spacing \\(L = 0.500\\) m. Pipe radius \\(r = 5.00\\) mm ({#} mm pipe) or {#} mm ({#} mm pipe).":
  "Separación entre tomas \\(L = 0.500\\) m. Radio del tubo \\(r = 5.00\\) mm (tubo de {#} mm) o {#} mm (tubo de {#} mm).",
"<span>B</span>Liquid and pipe":
  "<span>B</span>Líquido y tubo",
"<span>C</span>Valve (%)":
  "<span>C</span>Válvula (%)",
"<span>F</span>\\(\\Delta P\\) (Pa)":
  "<span>F</span>\\(\\Delta P\\) (Pa)",
"<span>J</span>Dye":
  "<span>J</span>Tinta",
"Liquid and pipe, row {#}":
  "Líquido y tubo, fila {#}",
"Valve (%), row {#}":
  "Válvula (%), fila {#}",
"V (mL), row {#}":
  "V (mL), fila {#}",
"Δ P (Pa), row {#}":
  "Δ P (Pa), fila {#}",
"Q = V/t (mL/s), row {#}":
  "Q = V/t (mL/s), fila {#}",
"v (m/s), row {#}":
  "v (m/s), fila {#}",
"N_R, row {#}":
  "N_R, fila {#}",
"Dye, row {#}":
  "Tinta, fila {#}",
"Use one copy of the table for each part.":
  "Usa una copia de la tabla para cada parte.",
"For Part {#}, fit \\(\\Delta P\\) against \\(Q\\), convert the slope to Pa·s/m³ ({#} mL/s = {#}⁻⁶ m³/s) and find \\(\\eta\\) from it, \\(\\eta = \\text{slope}\\times\\pi r^4/(8L)\\), with its uncertainty. Compare with {#} mPa·s.":
  "Para la Parte {#}, ajusta \\(\\Delta P\\) en función de \\(Q\\), convierte la pendiente a Pa·s/m³ ({#} mL/s = {#}⁻⁶ m³/s) y encuentra \\(\\eta\\) a partir de ella, \\(\\eta = \\text{slope}\\times\\pi r^4/(8L)\\), con su incertidumbre. Compárala con {#} mPa·s.",
"For Parts {#} and {#}, find \\(N_R\\) for every reading. Between which readings does the dye first break up, and from which reading is it mixed across the whole pipe? Compare these Reynolds numbers with the textbook’s {#} and {#}.":
  "Para las Partes {#} y {#}, encuentra \\(N_R\\) para cada lectura. ¿Entre qué lecturas se rompe por primera vez la tinta, y a partir de qué lectura está mezclada a lo ancho de todo el tubo? Compara estos números de Reynolds con los {#} y {#} del libro.",
"Compare each Part {#} pressure drop with the Poiseuille prediction from your Part {#} slope. By what factor is the measured \\(\\Delta P\\) larger at the highest flow? Use pairs of readings to find the exponent \\(n\\) in \\(\\Delta P\\propto Q^n\\) for the lowest flows and for the highest.":
  "Compara cada caída de presión de la Parte {#} con la predicción de Poiseuille a partir de tu pendiente de la Parte {#}. ¿Por qué factor es mayor el \\(\\Delta P\\) medido con el flujo más alto? Usa pares de lecturas para encontrar el exponente \\(n\\) en \\(\\Delta P\\propto Q^n\\) para los flujos más bajos y para los más altos.",
"For Part {#}, fit \\(\\Delta P\\) against \\(Q\\) and compare the slope with Part {#}’s. Does the ratio agree with \\((5.00/3.00)^4\\)?":
  "Para la Parte {#}, ajusta \\(\\Delta P\\) en función de \\(Q\\) y compara la pendiente con la de la Parte {#}. ¿Concuerda la razón con \\((5.00/3.00)^4\\)?",
"For Part {#}, give the Mystery liquid’s viscosity, your predicted flow rate at \\(N_R = 2000\\), and what the dye did there.":
  "Para la Parte {#}, da la viscosidad del Líquido misterioso, tu caudal predicho para \\(N_R = 2000\\) y lo que hizo la tinta ahí.",
"The cylinder is read to {#} mL and the stopwatch to {#} s, so a reading of a few hundred millilitres over tens of seconds gives \\(Q\\) to better than {#}%; short collections at high flow rates are the least precise. The gauge reads to {#} Pa, which matters most for the smallest laminar pressure drops (a few pascals in Part {#}). The pipe radius enters Poiseuille’s law to the fourth power, so a {#}% error in \\(r\\) gives a {#}% error in \\(\\eta\\): in a real experiment the bore is the measurement to make most carefully. The transition Reynolds numbers are not sharp constants; in real pipes they depend on how disturbed the inlet flow is.":
  "La probeta se lee con resolución de {#} mL y el cronómetro con resolución de {#} s, así que una lectura de unos cientos de mililitros en decenas de segundos da \\(Q\\) con mejor precisión que el {#}%; las recolecciones cortas con caudales altos son las menos precisas. El manómetro lee con resolución de {#} Pa, lo que importa más para las caídas de presión laminares más pequeñas (unos cuantos pascales en la Parte {#}). El radio del tubo entra en la ley de Poiseuille a la cuarta potencia, así que un error del {#}% en \\(r\\) da un error del {#}% en \\(\\eta\\): en un experimento real el diámetro interior es la medición que hay que hacer con más cuidado. Los números de Reynolds de la transición no son constantes precisas; en los tubos reales dependen de qué tan perturbado esté el flujo de entrada.",
"Why does the dye thread in laminar flow travel faster than the mean speed \\(v\\)? (Hint: where is the dye?)":
  "¿Por qué el hilo de tinta en un flujo laminar viaja más rápido que la rapidez media \\(v\\)? (Pista: ¿dónde está la tinta?)",
"Blood flow in the aorta reaches \\(N_R\\) of a few thousand during each heartbeat. What could a doctor hear with a stethoscope that would not be there in laminar flow?":
  "El flujo de sangre en la aorta llega a un \\(N_R\\) de unos cuantos miles durante cada latido. ¿Qué podría oír un médico con un estetoscopio que no estaría ahí en un flujo laminar?",
"A clogged artery has {#}% of its original radius. If the heart kept the same pressure difference across it, what fraction of the original laminar blood flow would get through?":
  "Una arteria obstruida tiene el {#}% de su radio original. Si el corazón mantuviera la misma diferencia de presión a través de ella, ¿qué fracción del flujo sanguíneo laminar original pasaría?",
"Why does warm water reach the turbulent range at a smaller flow rate than cold water in the same pipe?":
  "¿Por qué el agua tibia llega al régimen turbulento con un caudal menor que el agua fría en el mismo tubo?",
"Turbulent flow needs a larger pressure difference for the same flow rate. Where does the extra energy go?":
  "El flujo turbulento necesita una diferencia de presión mayor para el mismo caudal. ¿A dónde va la energía adicional?",
"Answers to Before the lab, a copy of the Data table for each part, the Poiseuille fits with residuals, the viscosities with uncertainties, the transition Reynolds numbers you observed, the exponents and the radius ratio, and answers to the questions. Identify simulated data.":
  "Respuestas de Antes del laboratorio, una copia de la tabla de datos para cada parte, los ajustes de Poiseuille con residuos, las viscosidades con incertidumbres, los números de Reynolds de la transición que observaste, los exponentes y la razón de radios, y las respuestas a las preguntas. Identifica los datos simulados.",
"Inside diameter of the pipe":
  "Diámetro interior del tubo",
"Pressure drop in the first of two readings":
  "Caída de presión en la primera de dos lecturas",
"Pressure drop in the second of two readings":
  "Caída de presión en la segunda de dos lecturas",
"Length of the pipe between the taps":
  "Longitud del tubo entre las tomas",
"Reynolds number":
  "Número de Reynolds",
"Pressure (ΔP: pressure drop between the taps)":
  "Presión (ΔP: caída de presión entre las tomas)",
"Pressure at the upstream tap":
  "Presión en la toma de corriente arriba",
"Pressure at the downstream tap":
  "Presión en la toma de corriente abajo",
"Flow rate":
  "Caudal",
"Flow rate in the first reading":
  "Caudal en la primera lectura",
"Flow rate in the second reading":
  "Caudal en la segunda lectura",
"Volume collected":
  "Volumen recolectado",
"Viscosity of the liquid":
  "Viscosidad del líquido",
"Darcy friction factor":
  "Factor de fricción de Darcy",
"Height of liquid in a manometer tube (Δh: their difference)":
  "Altura del líquido en un tubo manométrico (Δh: su diferencia)",
"Exponent in ΔP ∝ Qⁿ":
  "Exponente en ΔP ∝ Qⁿ",
"Inside radius of the pipe":
  "Radio interior del tubo",
"Density of the liquid":
  "Densidad del líquido",
"Collection time":
  "Tiempo de recolección",
"Mean speed of the flow":
  "Rapidez media del flujo",
"Falling Ball Viscometer (Flow in a pipe)":
  "Viscosímetro de esfera que cae (Flujo en un tubo)"
});
