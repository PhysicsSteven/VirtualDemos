/* ws/diffusion in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/diffusion', {
"Divider and gases":
  "Divisor y gases",
"Time t (ps)":
  "Tiempo t (ps)",
"A on the right n_A":
  "A a la derecha n_A",
"B on the left n_B":
  "B a la izquierda n_B",
"Mean square displacement of A (nm²)":
  "Desplazamiento cuadrático medio de A (nm²)",
"Mean square displacement of B (nm²)":
  "Desplazamiento cuadrático medio de B (nm²)",
"ln({#} - 2n_A/N_A)":
  "ln({#} - 2n_A/N_A)",
"Slope of mean square displacement against t (nm²/ps)":
  "Pendiente del desplazamiento cuadrático medio en función de t (nm²/ps)",
"D = slope/{#} (nm²/ps)":
  "D = pendiente/{#} (nm²/ps)",
"Diffusion and Graham’s Law | VirtualDemos":
  "Difusión y la ley de Graham | VirtualDemos",
"Diffusion and Graham’s Law":
  "Difusión y la ley de Graham",
"<strong>Setups in the demo:</strong> this worksheet uses the four setups under “Two gases and a divider”: Two gases mix; Light and heavy; Through a small hole; Hot meets cold. The setups above them belong to the Gas in a Box worksheet.":
  "<strong>Configuraciones en la demo:</strong> esta hoja de trabajo usa las cuatro configuraciones bajo “Dos gases y un divisor”: Dos gases se mezclan; Ligero y pesado; A través de un orificio pequeño; Lo caliente se encuentra con lo frío. Las configuraciones de arriba pertenecen a la hoja de trabajo Gas en una caja.",
"The box is {#} nm wide and {#} nm high, and the gas is two dimensional: its molecules are hard disks that move in one plane and bounce off each other and the walls without losing energy. Gas A (blue) starts in the left half and gas B (red) in the right half, behind a thin divider at the middle. For each gas you choose the mass (in atomic mass units u: helium {#}, neon {#}, argon {#}, krypton {#}, xenon {#}), the diameter, the temperature and the number of molecules. Changing a gas starts again with the divider closed.":
  "La caja mide {#} nm de ancho y {#} nm de alto, y el gas es bidimensional: sus moléculas son discos duros que se mueven en un plano y rebotan entre sí y en las paredes sin perder energía. El gas A (azul) empieza en la mitad izquierda y el gas B (rojo) en la mitad derecha, detrás de un divisor delgado en el centro. Para cada gas eliges la masa (en unidades de masa atómica u: helio {#}, neón {#}, argón {#}, kriptón {#}, xenón {#}), el diámetro, la temperatura y el número de moléculas. Cambiar un gas vuelve a empezar con el divisor cerrado.",
"Above the box, the divider can be closed, have a hole in the middle, or be removed. The moment you open it is time zero, and the clock, the counts and the graphs start there. One second on screen is {#} ps of the molecules’ time.":
  "Arriba de la caja, el divisor puede estar cerrado, tener un orificio en el centro o quitarse. El momento en que lo abres es el tiempo cero, y el reloj, las cuentas y las gráficas empiezan ahí. Un segundo en pantalla equivale a {#} ps del tiempo de las moléculas.",
"A molecule goes through the hole only if it fits, so the opening its center can use is the hole width minus the diameter. One that clips an edge of the hole bounces as off the divider.":
  "Una molécula pasa por el orificio solo si cabe, así que la abertura que puede usar su centro es el ancho del orificio menos el diámetro. Una que roza un borde del orificio rebota como si chocara con el divisor.",
"A molecule counts as being on the side its center is on. The <strong>Mixing</strong> graph shows the number of A molecules on the right and B molecules on the left; the dashed lines are half of each gas, where the counts end up when the gases are fully mixed.":
  "Una molécula cuenta como si estuviera del lado en que está su centro. La gráfica <strong>Mezcla</strong> muestra el número de moléculas de A a la derecha y de moléculas de B a la izquierda; las líneas discontinuas son la mitad de cada gas, donde terminan las cuentas cuando los gases están completamente mezclados.",
"The <strong>Spreading</strong> graph shows each gas’s mean square displacement, the average of \\((\\Delta x)^2 + (\\Delta y)^2\\) since time zero. A bounce off a wall or the divider is counted as if the molecule went on into a mirror image of the box. A box with mirror walls behaves exactly like an endless gas made of mirror copies of the box, so this is how far a molecule wanders in that endless gas, and the walls do not cap it. The <strong>Speeds</strong> graph shows each gas’s speeds with the two dimensional Maxwell and Boltzmann curve at that gas’s temperature.":
  "La gráfica <strong>Dispersión</strong> muestra el desplazamiento cuadrático medio de cada gas, el promedio de \\((\\Delta x)^2 + (\\Delta y)^2\\) desde el tiempo cero. Un rebote en una pared o en el divisor se cuenta como si la molécula siguiera hacia una imagen especular de la caja. Una caja con paredes de espejo se comporta exactamente como un gas sin fin formado por copias especulares de la caja, así que esto es lo que se aleja una molécula en ese gas sin fin, y las paredes no lo limitan. La gráfica <strong>Rapideces</strong> muestra las rapideces de cada gas con la curva bidimensional de Maxwell y Boltzmann a la temperatura de ese gas.",
"Record reading stores the present moment of the run. <strong>Record the run</strong> stores a row every {#}, {#}, {#}, {#}, {#} ps or more (the shortest step that gives at most {#} rows) from time zero to now; pause first if you want a round end time. Each row has the time, the counts on each side, both mean square displacements, the temperature on each side and the settings. Export to worksheet sends the readings to the Data table below, with the settings written once, in the first row; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda el momento presente de la ejecución. <strong>Grabar la ejecución</strong> guarda una fila cada {#}, {#}, {#}, {#}, {#} ps o más (el paso más corto que da a lo sumo {#} filas) desde el tiempo cero hasta ahora; pausa primero si quieres un tiempo final redondo. Cada fila tiene el tiempo, las cuentas de cada lado, ambos desplazamientos cuadráticos medios, la temperatura de cada lado y los ajustes. Exportar a la hoja envía las lecturas a la tabla de datos de abajo, con los ajustes escritos una vez, en la primera fila; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Watch two gases mix, measure how fast molecules spread (the diffusion coefficient), see how that depends on temperature and mass, and test Graham’s law for gases leaking through a small hole.":
  "Observa cómo se mezclan dos gases, mide qué tan rápido se dispersan las moléculas (el coeficiente de difusión), ve cómo depende eso de la temperatura y de la masa, y pon a prueba la ley de Graham para gases que se escapan por un orificio pequeño.",
"A molecule in a gas moves in a straight line until it hits another, a distance called the mean free path (§{#}). In three dimensions \\(\\lambda = 1/(4\\sqrt{2}\\,\\pi r^2 n)\\) with \\(n\\) the number per volume. For disks of diameter \\(d\\) moving in a plane, with \\(n\\) the number per area, the same argument gives":
  "Una molécula en un gas se mueve en línea recta hasta que choca con otra, una distancia llamada recorrido libre medio (§{#}). En tres dimensiones \\(\\lambda = 1/(4\\sqrt{2}\\,\\pi r^2 n)\\) con \\(n\\) el número por volumen. Para discos de diámetro \\(d\\) que se mueven en un plano, con \\(n\\) el número por área, el mismo argumento da",
"\\[\\lambda = \\frac{1}{2\\sqrt{2}\\,n d}.\\]":
  "\\[\\lambda = \\frac{1}{2\\sqrt{2}\\,n d}.\\]",
"After many collisions a molecule’s path is a random walk. Its mean square displacement then grows in proportion to the time, and in two dimensions":
  "Después de muchos choques la trayectoria de una molécula es una caminata aleatoria. Su desplazamiento cuadrático medio crece entonces en proporción al tiempo, y en dos dimensiones",
"\\[\\langle r^2 \\rangle = 4Dt,\\]":
  "\\[\\langle r^2 \\rangle = 4Dt,\\]",
"which defines the diffusion coefficient \\(D\\). For the first few collisions the molecule still moves in nearly a straight line, so \\(\\langle r^2 \\rangle\\) starts out growing as \\(t^2\\). A rough kinetic theory estimate, steps of length \\(\\lambda\\) taken at the mean speed \\(\\bar v\\), is \\(D \\approx \\tfrac12 \\lambda \\bar v\\) in two dimensions. The mean speed in two dimensions is":
  "lo que define el coeficiente de difusión \\(D\\). Durante los primeros choques la molécula todavía se mueve casi en línea recta, así que \\(\\langle r^2 \\rangle\\) empieza creciendo como \\(t^2\\). Una estimación aproximada de la teoría cinética, pasos de longitud \\(\\lambda\\) dados con la rapidez media \\(\\bar v\\), es \\(D \\approx \\tfrac12 \\lambda \\bar v\\) en dos dimensiones. La rapidez media en dos dimensiones es",
"\\[\\bar v = \\sqrt{\\frac{\\pi k_B T}{2m}}.\\]":
  "\\[\\bar v = \\sqrt{\\frac{\\pi k_B T}{2m}}.\\]",
"Lighter molecules move faster (§{#}). When a gas leaks through a hole much smaller than its mean free path (effusion), molecules cross one at a time and the rate is the number that happen to arrive at the opening. In two dimensions, through an opening of width \\(w\\), that rate is \\(n w \\sqrt{k_B T/(2\\pi m)}\\). At the same number density and temperature, the rates of two gases are in the ratio":
  "Las moléculas más ligeras se mueven más rápido (§{#}). Cuando un gas se escapa por un orificio mucho más pequeño que su recorrido libre medio (efusión), las moléculas cruzan una a la vez y la tasa es el número que llega por casualidad a la abertura. En dos dimensiones, a través de una abertura de ancho \\(w\\), esa tasa es \\(n w \\sqrt{k_B T/(2\\pi m)}\\). A la misma densidad numérica y temperatura, las tasas de dos gases están en la razón",
"\\[\\frac{\\text{rate}_1}{\\text{rate}_2} = \\sqrt{\\frac{m_2}{m_1}}\\]":
  "\\[\\frac{\\text{rate}_1}{\\text{rate}_2} = \\sqrt{\\frac{m_2}{m_1}}\\]",
"(Graham’s law). With a hole between two halves of area \\(A_\\text{half}\\), a gas that starts with all \\(N\\) of its molecules on one side has \\(n(t)\\) on the far side with \\(dn/dt = k\\,[(N - n) - n]\\), where \\(k = w\\sqrt{k_B T/(2\\pi m)}/A_\\text{half}\\), so":
  "(ley de Graham). Con un orificio entre dos mitades de área \\(A_\\text{half}\\), un gas que empieza con sus \\(N\\) moléculas de un lado tiene \\(n(t)\\) del otro lado con \\(dn/dt = k\\,[(N - n) - n]\\), donde \\(k = w\\sqrt{k_B T/(2\\pi m)}/A_\\text{half}\\), así que",
"\\[\\ln\\left(1 - \\frac{2n}{N}\\right) = -2kt.\\]":
  "\\[\\ln\\left(1 - \\frac{2n}{N}\\right) = -2kt.\\]",
"Find the mean speed of argon ({#} u) and of helium ({#} u) molecules at {#} K in two dimensions, and their ratio.":
  "Encuentra la rapidez media de las moléculas de argón ({#} u) y de helio ({#} u) a {#} K en dos dimensiones, y su razón.",
"In Two gases mix there are {#} disks {#} nm across in the {#} nm by {#} nm box. Find the mean free path, and the estimate \\(\\tfrac12\\lambda\\bar v\\) of \\(D\\) for argon at {#} K.":
  "En Dos gases se mezclan hay {#} discos de {#} nm de diámetro en la caja de {#} nm por {#} nm. Encuentra el recorrido libre medio y la estimación \\(\\tfrac12\\lambda\\bar v\\) de \\(D\\) para el argón a {#} K.",
"In this model the molecules are hard disks, so they exert no force until they touch. If every speed is doubled, the molecules follow exactly the same paths in half the time. Use that to predict how \\(D\\) depends on \\(T\\) and on \\(m\\) for a single gas.":
  "En este modelo las moléculas son discos duros, así que no ejercen ninguna fuerza hasta que se tocan. Si cada rapidez se duplica, las moléculas siguen exactamente las mismas trayectorias en la mitad del tiempo. Usa eso para predecir cómo depende \\(D\\) de \\(T\\) y de \\(m\\) para un solo gas.",
"In Through a small hole, {#} molecules {#} nm across at {#} K start in the left half ({#} nm²) and leak through a hole {#} nm wide. Predict the slope of \\(\\ln(1 - 2n/N)\\) against \\(t\\) for helium ({#} u) and for argon ({#} u), and their ratio.":
  "En A través de un orificio pequeño, {#} moléculas de {#} nm de diámetro a {#} K empiezan en la mitad izquierda ({#} nm²) y se escapan por un orificio de {#} nm de ancho. Predice la pendiente de \\(\\ln(1 - 2n/N)\\) en función de \\(t\\) para el helio ({#} u) y para el argón ({#} u), y su razón.",
"<strong>Mixing and spreading.</strong> Choose Two gases mix, remove the divider, and let the run go to at least {#} ps. Pause, record the run from {#} to {#} ps and send it to the worksheet.":
  "<strong>Mezcla y dispersión.</strong> Elige Dos gases se mezclan, quita el divisor y deja que la ejecución llegue al menos a {#} ps. Pausa, graba la ejecución de {#} a {#} ps y envíala a la hoja de trabajo.",
"<strong>Temperature.</strong> Clear the readings. Set both gases to {#} K, remove the divider and record the run to {#} ps. Send it to the worksheet and clear, then repeat with both gases at {#} K and at {#} K, sending each run before you clear. Changing a gas closes the divider again.":
  "<strong>Temperatura.</strong> Borra las lecturas. Pon ambos gases a {#} K, quita el divisor y graba la ejecución hasta {#} ps. Envíala a la hoja de trabajo y borra, luego repite con ambos gases a {#} K y a {#} K, enviando cada ejecución antes de borrar. Cambiar un gas vuelve a cerrar el divisor.",
"<strong>Light and heavy.</strong> Clear the readings once the {#} K run is sent. Choose Light and heavy, remove the divider, record the run to {#} ps and send it.":
  "<strong>Ligero y pesado.</strong> Borra las lecturas una vez enviada la ejecución de {#} K. Elige Ligero y pesado, quita el divisor, graba la ejecución hasta {#} ps y envíala.",
"<strong>Through a small hole.</strong> Clear the readings once the Light and heavy run is sent. Choose Through a small hole (helium on the left, the right half empty), open the hole and record the run to {#} ps. Send it and clear. Make gas A argon ({#} u), open the hole again and record the run to {#} ps, since argon leaks more slowly.":
  "<strong>A través de un orificio pequeño.</strong> Borra las lecturas una vez enviada la ejecución de Ligero y pesado. Elige A través de un orificio pequeño (helio a la izquierda, la mitad derecha vacía), abre el orificio y graba la ejecución hasta {#} ps. Envíala y borra. Haz que el gas A sea argón ({#} u), abre de nuevo el orificio y graba la ejecución hasta {#} ps, ya que el argón se escapa más despacio.",
"<strong>Hot meets cold.</strong> Choose Hot meets cold, remove the divider and watch the temperature on each side and the counts for a few hundred ps. Nothing to record.":
  "<strong>Lo caliente se encuentra con lo frío.</strong> Elige Lo caliente se encuentra con lo frío, quita el divisor y observa la temperatura de cada lado y las cuentas durante unos cientos de ps. No hay nada que registrar.",
"<span>B</span>Divider and gases":
  "<span>B</span>Divisor y gases",
"<span>C</span>Time \\(t\\) (ps)":
  "<span>C</span>Tiempo \\(t\\) (ps)",
"<span>D</span>A on the right \\(n_\\mathrm{A}\\)":
  "<span>D</span>A a la derecha \\(n_\\mathrm{A}\\)",
"<span>E</span>B on the left \\(n_\\mathrm{B}\\)":
  "<span>E</span>B a la izquierda \\(n_\\mathrm{B}\\)",
"<span>F</span>Mean square displacement of A (nm²)":
  "<span>F</span>Desplazamiento cuadrático medio de A (nm²)",
"<span>G</span>Mean square displacement of B (nm²)":
  "<span>G</span>Desplazamiento cuadrático medio de B (nm²)",
"<span>H</span>\\(\\ln(1 - 2n_\\mathrm{A}/N_\\mathrm{A})\\)":
  "<span>H</span>\\(\\ln(1 - 2n_\\mathrm{A}/N_\\mathrm{A})\\)",
"Divider and gases, row {#}":
  "Divisor y gases, fila {#}",
"Time t (ps), row {#}":
  "Tiempo t (ps), fila {#}",
"A on the right n_A, row {#}":
  "A a la derecha n_A, fila {#}",
"B on the left n_B, row {#}":
  "B a la izquierda n_B, fila {#}",
"Mean square displacement of A (nm²), row {#}":
  "Desplazamiento cuadrático medio de A (nm²), fila {#}",
"Mean square displacement of B (nm²), row {#}":
  "Desplazamiento cuadrático medio de B (nm²), fila {#}",
"ln({#} - 2n_A/N_A), row {#}":
  "ln({#} - 2n_A/N_A), fila {#}",
"Diffusion coefficients":
  "Coeficientes de difusión",
"<span>B</span>Gas":
  "<span>B</span>Gas",
"<span>C</span>Temperature \\(T\\) (K)":
  "<span>C</span>Temperatura \\(T\\) (K)",
"<span>D</span>Slope of mean square displacement against \\(t\\) (nm²/ps)":
  "<span>D</span>Pendiente del desplazamiento cuadrático medio en función de \\(t\\) (nm²/ps)",
"<span>E</span>\\(D\\) = slope/{#} (nm²/ps)":
  "<span>E</span>\\(D\\) = pendiente/{#} (nm²/ps)",
"Gas, row {#}":
  "Gas, fila {#}",
"Slope of mean square displacement against t (nm²/ps), row {#}":
  "Pendiente del desplazamiento cuadrático medio en función de t (nm²/ps), fila {#}",
"D = slope/{#} (nm²/ps), row {#}":
  "D = pendiente/{#} (nm²/ps), fila {#}",
"√T (√K), row {#}":
  "√T (√K), fila {#}",
"For the Mixing and spreading run, graph the mean square displacement of A against \\(t\\), and then of B. Find \\(D\\) for each from the slope. Do the two gases agree? Compare them with the estimate \\(\\tfrac12\\lambda\\bar v\\) from Before the lab {#}.":
  "Para la ejecución de Mezcla y dispersión, grafica el desplazamiento cuadrático medio de A en función de \\(t\\), y luego el de B. Encuentra \\(D\\) para cada uno a partir de la pendiente. ¿Concuerdan los dos gases? Compáralos con la estimación \\(\\tfrac12\\lambda\\bar v\\) de Antes del laboratorio {#}.",
"Where the graph bends at the start, how long does it take before the straight line fits? Compare that time with the mean free time \\(\\lambda/\\bar v\\).":
  "Donde la gráfica se curva al principio, ¿cuánto tarda en ajustarse la recta? Compara ese tiempo con el tiempo libre medio \\(\\lambda/\\bar v\\).",
"For diffusion along a box of length \\(L\\) with walls at the ends, the share of gas A that has reached the right half is \\(\\tfrac12 - \\tfrac{4}{\\pi^2}e^{-t/\\tau}\\) once \\(t\\) is more than about \\(\\tau/4\\), with \\(\\tau = L^2/(\\pi^2 D)\\). Find \\(\\tau\\) for \\(L\\) = {#} nm from your \\(D\\), predict \\(n_\\mathrm{A}\\) at \\(t = \\tau\\), and compare with your table.":
  "Para la difusión a lo largo de una caja de longitud \\(L\\) con paredes en los extremos, la fracción del gas A que ha llegado a la mitad derecha es \\(\\tfrac12 - \\tfrac{4}{\\pi^2}e^{-t/\\tau}\\) una vez que \\(t\\) es mayor que aproximadamente \\(\\tau/4\\), con \\(\\tau = L^2/(\\pi^2 D)\\). Encuentra \\(\\tau\\) para \\(L\\) = {#} nm a partir de tu \\(D\\), predice \\(n_\\mathrm{A}\\) en \\(t = \\tau\\) y compara con tu tabla.",
"Find \\(D\\) for both gases at {#}, {#} and {#} K. The two gases are the same, so enter the mean of A and B at each temperature, and at {#} K, in the Diffusion coefficients table, and graph \\(D\\) against √T. Is it a straight line through the origin? Compare with your prediction in Before the lab {#}.":
  "Encuentra \\(D\\) para ambos gases a {#}, {#} y {#} K. Los dos gases son iguales, así que anota la media de A y B a cada temperatura, y a {#} K, en la tabla Coeficientes de difusión, y grafica \\(D\\) en función de √T. ¿Es una recta que pasa por el origen? Compara con tu predicción de Antes del laboratorio {#}.",
"For Light and heavy, find \\(D\\) for each gas (enter them in another copy of the Diffusion coefficients table) and their ratio. Is the ratio as large as \\(\\sqrt{m_\\mathrm{B}/m_\\mathrm{A}}\\)? Explain why not, thinking about which molecules each one collides with.":
  "Para Ligero y pesado, encuentra \\(D\\) para cada gas (anótalos en otra copia de la tabla Coeficientes de difusión) y su razón. ¿Es la razón tan grande como \\(\\sqrt{m_\\mathrm{B}/m_\\mathrm{A}}\\)? Explica por qué no, pensando en con qué moléculas choca cada una.",
"For the two hole runs, fill in the last column (\\(N_\\mathrm{A}\\) = {#}) and graph it against \\(t\\). Compare each slope with your prediction in Before the lab {#}, then find the ratio of the two slopes and compare it with Graham’s law.":
  "Para las dos ejecuciones con orificio, llena la última columna (\\(N_\\mathrm{A}\\) = {#}) y grafícala en función de \\(t\\). Compara cada pendiente con tu predicción de Antes del laboratorio {#}, luego encuentra la razón de las dos pendientes y compárala con la ley de Graham.",
"Each count and each mean square displacement averages over a hundred or two molecules, so a run is noisy, and the points of one run are not independent of each other: the standard error a fit reports is too small. In Two gases mix, A and B are the same gas, so the difference between their two values of \\(D\\) in one run is a fair measure of the uncertainty of one value. Repeat the helium hole run twice more (each start places the molecules afresh) and use the spread of the three slopes as the uncertainty of one slope; assume the same relative spread for argon.":
  "Cada cuenta y cada desplazamiento cuadrático medio promedia sobre cien o doscientas moléculas, así que una ejecución tiene ruido, y los puntos de una ejecución no son independientes entre sí: el error estándar que reporta un ajuste es demasiado pequeño. En Dos gases se mezclan, A y B son el mismo gas, así que la diferencia entre sus dos valores de \\(D\\) en una ejecución es una medida razonable de la incertidumbre de un valor. Repite dos veces más la ejecución con orificio del helio (cada inicio coloca las moléculas de nuevo) y usa la dispersión de las tres pendientes como la incertidumbre de una pendiente; supón la misma dispersión relativa para el argón.",
"Why does the mean square displacement grow as \\(t^2\\) for the first few picoseconds and as \\(t\\) later?":
  "¿Por qué el desplazamiento cuadrático medio crece como \\(t^2\\) durante los primeros picosegundos y como \\(t\\) después?",
"Graham’s law needs the hole to be much smaller than the mean free path. Try a {#} nm hole with helium. Is the leak still \\(n w\\sqrt{k_B T/(2\\pi m)}\\), and why might it not be?":
  "La ley de Graham requiere que el orificio sea mucho más pequeño que el recorrido libre medio. Prueba un orificio de {#} nm con helio. ¿Sigue siendo el escape \\(n w\\sqrt{k_B T/(2\\pi m)}\\), y por qué podría no serlo?",
"Put {#} molecules of argon ({#} u, {#} nm) in the right half as well, with helium on the left, and open the {#} nm hole. Does each gas still leak at the rate it had alone? What could the stream of helium coming through the hole do to argon molecules on their way in?":
  "Pon también {#} moléculas de argón ({#} u, {#} nm) en la mitad derecha, con helio a la izquierda, y abre el orificio de {#} nm. ¿Se escapa cada gas todavía con la tasa que tenía solo? ¿Qué podría hacerles la corriente de helio que pasa por el orificio a las moléculas de argón en su camino de entrada?",
"In Hot meets cold, both sides have the same number of molecules, so the hot side starts at the higher pressure. Describe what you saw happen to the counts and to the temperature on each side.":
  "En Lo caliente se encuentra con lo frío, ambos lados tienen el mismo número de moléculas, así que el lado caliente empieza a mayor presión. Describe lo que viste que les pasó a las cuentas y a la temperatura de cada lado.",
"Helium leaks out of a party balloon much faster than air leaks in. Explain with Graham’s law.":
  "El helio se escapa de un globo de fiesta mucho más rápido de lo que entra el aire. Explícalo con la ley de Graham.",
"Uranium was once enriched by letting UF₆ gas diffuse through porous barriers. The masses of ²³⁵UF₆ and ²³⁸UF₆ are {#} u and {#} u. By what factor does one pass through a barrier change the ratio of the two, and why did the plants need over a thousand stages?":
  "Antes se enriquecía el uranio dejando que el gas UF₆ se difundiera a través de barreras porosas. Las masas de ²³⁵UF₆ y ²³⁸UF₆ son {#} u y {#} u. ¿En qué factor cambia la razón de los dos un paso por una barrera, y por qué las plantas necesitaban más de mil etapas?",
"Prelab answers, the table copies with their graphs and fits, your diffusion coefficients and slope ratios with uncertainties and comparisons, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de las tablas con sus gráficas y ajustes, tus coeficientes de difusión y razones de pendientes con incertidumbres y comparaciones, y las respuestas a las preguntas. Identifica los datos simulados.",
"Area of each half of the box":
  "Área de cada mitad de la caja",
"Diffusion coefficient":
  "Coeficiente de difusión",
"Length of the box":
  "Longitud de la caja",
"Molecules of the gas, all on one side at the start":
  "Moléculas del gas, todas de un lado al inicio",
"Number of molecules of gas A":
  "Número de moléculas del gas A",
"Mean speed of the molecules":
  "Rapidez media de las moléculas",
"Diameter of a molecule (a disk)":
  "Diámetro de una molécula (un disco)",
"Rate constant of the flow through the hole":
  "Constante de tasa del flujo por el orificio",
"Mean free path":
  "Camino libre medio",
"Mass of a molecule":
  "Masa de una molécula",
"Molecular mass of gas {#}":
  "Masa molecular del gas {#}",
"Mass of a molecule of gas A":
  "Masa de una molécula del gas A",
"Mass of a molecule of gas B":
  "Masa de una molécula del gas B",
"Number of molecules per area (per volume in three dimensions); in the hole runs, molecules on the far side":
  "Número de moléculas por área (por volumen en tres dimensiones); en las ejecuciones con orificio, moléculas del otro lado",
"Molecules of gas A on the right":
  "Moléculas del gas A a la derecha",
"Molecules of gas B on the left":
  "Moléculas del gas B a la izquierda",
"In λ, a molecule's radius; in ⟨r²⟩, its displacement since time zero":
  "En λ, el radio de una molécula; en ⟨r²⟩, su desplazamiento desde el tiempo cero",
"Time constant, L²/(π²D)":
  "Constante de tiempo, L²/(π²D)",
"Width of the opening":
  "Ancho de la abertura",
"Horizontal position of a molecule (Δx: how far it has moved)":
  "Posición horizontal de una molécula (Δx: cuánto se ha movido)",
"Vertical position of a molecule (Δy: how far it has moved)":
  "Posición vertical de una molécula (Δy: cuánto se ha movido)",
"Gas in a Box (two gases)":
  "Gas en una caja (dos gases)"
});
