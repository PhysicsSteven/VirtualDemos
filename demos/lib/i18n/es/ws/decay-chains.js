/* ws/decay-chains in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/decay-chains', {
"Setup and N_0":
  "Configuración y N_0",
"Parents N_P":
  "Madres N_P",
"Daughters N_D":
  "Hijas N_D",
"Stable N_S":
  "Estables N_S",
"Activity ratio R_D/R_P":
  "Razón de actividades R_D/R_P",
"ln N_D":
  "ln N_D",
"Parent and Daughter: Decay Chains | VirtualDemos":
  "Madre e hija: cadenas de desintegración | VirtualDemos",
"Parent and Daughter: Decay Chains":
  "Madre e hija: cadenas de desintegración",
"<strong>Setups in the demo:</strong> Two step chain; Short daughter, long parent (these two have a radioactive daughter, the subject of this worksheet); Coin flip nuclei; Carbon {#} dating; Iodine {#} (the Measuring a Half Life worksheet).":
  "<strong>Configuraciones en la demo:</strong> Cadena de dos pasos; Hija corta, madre larga (estas dos tienen una hija radiactiva, el tema de esta hoja de trabajo); Núcleos de volado; Datación con carbono {#}; Yodo {#} (la hoja de trabajo Medición de una vida media).",
"The tray shows every nucleus: parents are large balls, daughters slightly smaller balls in a second color, stable end products small gray balls. Each decay flashes, and the Geiger counter under the tray counts every decay. Choose {#}, {#}, {#} or {#} {#} nuclei.":
  "La bandeja muestra cada núcleo: las madres son esferas grandes, las hijas esferas un poco más pequeñas de un segundo color, y los productos finales estables esferas grises pequeñas. Cada desintegración destella, y el contador Geiger bajo la bandeja cuenta cada desintegración. Elige {#}, {#}, {#} o {#} {#} núcleos.",
"Two step chain: bismuth {#} (half life {#} d) beta decays to polonium {#} ({#} d), which alpha decays to stable lead {#}. Short daughter, long parent: tellurium {#} ({#} h) beta decays to iodine {#} ({#} h), which decays to stable xenon {#}. Half lives are the evaluated values (ENSDF); tiny side branches are left out, as the setup notes say.":
  "Cadena de dos pasos: el bismuto {#} (vida media de {#} d) se desintegra por beta a polonio {#} ({#} d), que se desintegra por alfa a plomo {#} estable. Hija corta, madre larga: el telurio {#} ({#} h) se desintegra por beta a yodo {#} ({#} h), que se desintegra a xenón {#} estable. Las vidas medias son los valores evaluados (ENSDF); las pequeñas ramas laterales se dejan fuera, como dicen las notas de la configuración.",
"Time advances in steps ({#} d for the bismuth chain, {#} h for the tellurium chain). In each step every nucleus changes with the exact probabilities for that step from the Bateman solution, decided by its own random number. Play runs the steps; Step takes one at a time.":
  "El tiempo avanza en pasos ({#} d para la cadena del bismuto, {#} h para la cadena del telurio). En cada paso cada núcleo cambia con las probabilidades exactas para ese paso según la solución de Bateman, decididas por su propio número aleatorio. Iniciar recorre los pasos; Paso avanza uno a la vez.",
"The middle plot shows the number of each kind against time with the expected curves dashed; the lower plot shows the decays in each time bin. The Display section can hide the expected curves and band. The Parent and daughter readouts show the activity ratio now and the expected values.":
  "La gráfica del medio muestra el número de cada tipo en función del tiempo con las curvas esperadas en línea discontinua; la gráfica de abajo muestra las desintegraciones en cada intervalo de tiempo. La sección Visualización puede ocultar las curvas esperadas y la banda. Las lecturas de Madre e hija muestran la razón de actividades actual y los valores esperados.",
"Record reading stores the setup, the time and the number of parents, daughters and stable end products. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la configuración, el tiempo y el número de madres, hijas y productos finales estables. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar inicia una nueva serie, que va a una nueva copia de la tabla.",
"Follow a parent that decays into a radioactive daughter. Find when the daughter peaks, and see how the daughter’s activity can come to track the parent’s.":
  "Sigue a una madre que se desintegra en una hija radiactiva. Encuentra cuándo llega la hija a su máximo, y observa cómo la actividad de la hija puede llegar a seguir a la de la madre.",
"A parent P decays with constant \\(\\lambda_P\\) into a daughter D, which decays with \\(\\lambda_D\\) into a stable end product. The parent simply decays, \\(N_P = N_0e^{-\\lambda_P t}\\), but the daughter is made by the parent as it decays itself:":
  "Una madre P se desintegra con constante \\(\\lambda_P\\) en una hija D, que se desintegra con \\(\\lambda_D\\) en un producto final estable. La madre simplemente se desintegra, \\(N_P = N_0e^{-\\lambda_P t}\\), pero la hija es producida por la madre mientras ella misma se desintegra:",
"\\[\\frac{dN_D}{dt} = \\lambda_P N_P - \\lambda_D N_D .\\]":
  "\\[\\frac{dN_D}{dt} = \\lambda_P N_P - \\lambda_D N_D .\\]",
"Starting with no daughters, the solution (Bateman’s) is":
  "Empezando sin hijas, la solución (de Bateman) es",
"\\[N_D = N_0\\,\\frac{\\lambda_P}{\\lambda_D - \\lambda_P}\\left(e^{-\\lambda_P t} - e^{-\\lambda_D t}\\right).\\]":
  "\\[N_D = N_0\\,\\frac{\\lambda_P}{\\lambda_D - \\lambda_P}\\left(e^{-\\lambda_P t} - e^{-\\lambda_D t}\\right).\\]",
"The daughter count rises, peaks and falls. At the peak \\(dN_D/dt = 0\\), so there the two activities \\(R_P = \\lambda_P N_P\\) and \\(R_D = \\lambda_D N_D\\) are equal. The peak comes at":
  "El número de hijas sube, llega a un máximo y baja. En el máximo \\(dN_D/dt = 0\\), así que ahí las dos actividades \\(R_P = \\lambda_P N_P\\) y \\(R_D = \\lambda_D N_D\\) son iguales. El máximo llega en",
"\\[t_{\\max} = \\frac{\\ln(\\lambda_D/\\lambda_P)}{\\lambda_D - \\lambda_P}.\\]":
  "\\[t_{\\max} = \\frac{\\ln(\\lambda_D/\\lambda_P)}{\\lambda_D - \\lambda_P}.\\]",
"If the daughter lives much shorter than the parent, after a few daughter half lives the ratio of activities settles at \\(R_D/R_P = \\lambda_D/(\\lambda_D - \\lambda_P)\\), just above {#}: the daughter decays as fast as it is made. This is transient equilibrium.":
  "Si la hija vive mucho menos que la madre, después de unas cuantas vidas medias de la hija la razón de actividades se estabiliza en \\(R_D/R_P = \\lambda_D/(\\lambda_D - \\lambda_P)\\), apenas por encima de {#}: la hija se desintegra tan rápido como se produce. Esto es el equilibrio transitorio.",
"Find \\(\\lambda_P\\) and \\(\\lambda_D\\) for the bismuth {#} chain ({#} d and {#} d), in {#}/d. When does polonium {#} peak?":
  "Encuentra \\(\\lambda_P\\) y \\(\\lambda_D\\) para la cadena del bismuto {#} ({#} d y {#} d), en {#}/d. ¿Cuándo llega el polonio {#} a su máximo?",
"Do the same for the tellurium {#} chain ({#} h and {#} h), in {#}/h, and find the long time activity ratio \\(R_D/R_P\\).":
  "Haz lo mismo para la cadena del telurio {#} ({#} h y {#} h), en {#}/h, y encuentra la razón de actividades a tiempos largos \\(R_D/R_P\\).",
"Show that \\(N_P + N_D + N_S = N_0\\) at all times, where \\(N_S\\) is the number of stable end products.":
  "Muestra que \\(N_P + N_D + N_S = N_0\\) en todo momento, donde \\(N_S\\) es el número de productos finales estables.",
"Show from \\(dN_D/dt = \\lambda_P N_P - \\lambda_D N_D\\) that the activities are equal when the daughter count is at its peak.":
  "Muestra a partir de \\(dN_D/dt = \\lambda_P N_P - \\lambda_D N_D\\) que las actividades son iguales cuando el número de hijas está en su máximo.",
"No hazards in the virtual lab. Polonium {#} is a strong alpha emitter, dangerous if swallowed or breathed in.":
  "No hay peligros en el laboratorio virtual. El polonio {#} es un emisor alfa intenso, peligroso si se ingiere o se inhala.",
"The demo starts running as soon as it opens and whenever you choose a setup, and choosing a number of nuclei starts a new sample: pause it and Reset before the first reading, so it starts from t = {#}. Play at a slow speed and pause at each time; the reading stores the time on the clock. Clear throws away readings not yet sent, so Export each series before you Clear it.":
  "La demo empieza a correr en cuanto se abre y cada vez que eliges una configuración, y elegir un número de núcleos inicia una nueva muestra: páusala y pulsa Reiniciar antes de la primera lectura, para que empiece desde t = {#}. Corre a velocidad lenta y pausa en cada tiempo; la lectura guarda el tiempo del reloj. Borrar descarta las lecturas que aún no se han enviado, así que exporta cada serie antes de borrarla.",
"<strong>Bismuth {#} to polonium {#}.</strong> With {#} {#} nuclei, hide the expected curves. Record a reading at the start, every {#} d to {#} d, then every {#} d to {#} d.":
  "<strong>Bismuto {#} a polonio {#}.</strong> Con {#} {#} núcleos, oculta las curvas esperadas. Registra una lectura al inicio, cada {#} d hasta {#} d, y luego cada {#} d hasta {#} d.",
"<strong>Tellurium {#} to iodine {#}.</strong> Export and Clear the readings, then choose the tellurium chain with {#} {#} nuclei. Record a reading at the start, every {#} h to {#} h, then every {#} h to {#} h.":
  "<strong>Telurio {#} a yodo {#}.</strong> Exporta y borra las lecturas, y luego elige la cadena del telurio con {#} {#} núcleos. Registra una lectura al inicio, cada {#} h hasta {#} h, y luego cada {#} h hasta {#} h.",
"<span>B</span>Setup and \\(N_0\\)":
  "<span>B</span>Configuración y \\(N_0\\)",
"<span>C</span>Time \\(t\\)":
  "<span>C</span>Tiempo \\(t\\)",
"<span>D</span>Parents \\(N_P\\)":
  "<span>D</span>Madres \\(N_P\\)",
"<span>E</span>Daughters \\(N_D\\)":
  "<span>E</span>Hijas \\(N_D\\)",
"<span>F</span>Stable \\(N_S\\)":
  "<span>F</span>Estables \\(N_S\\)",
"<span>G</span>Activity ratio R_D/R_P":
  "<span>G</span>Razón de actividades R_D/R_P",
"<span>H</span>ln N_D":
  "<span>H</span>ln N_D",
"Setup and N_0, row {#}":
  "Configuración y N_0, fila {#}",
"Time t, row {#}":
  "Tiempo t, fila {#}",
"Parents N_P, row {#}":
  "Madres N_P, fila {#}",
"Daughters N_D, row {#}":
  "Hijas N_D, fila {#}",
"Stable N_S, row {#}":
  "Estables N_S, fila {#}",
"Activity ratio R_D/R_P, row {#}":
  "Razón de actividades R_D/R_P, fila {#}",
"ln N_D, row {#}":
  "ln N_D, fila {#}",
"Setup and N₀":
  "Configuración y N₀",
"The time unit is in the Setup column. Work out \\(R_D/R_P = \\lambda_D N_D/(\\lambda_P N_P)\\) for each row, and \\(\\ln N_D\\) for the tellurium rows after the ratio has settled (Analysis {#}).":
  "La unidad de tiempo está en la columna Configuración. Calcula \\(R_D/R_P = \\lambda_D N_D/(\\lambda_P N_P)\\) para cada fila, y \\(\\ln N_D\\) para las filas del telurio después de que la razón se haya estabilizado (Análisis {#}).",
"For the bismuth chain, graph \\(N_D\\) against \\(t\\). When is the daughter count largest? Compare with \\(t_{\\max}\\) from Before the lab question {#}.":
  "Para la cadena del bismuto, grafica \\(N_D\\) en función de \\(t\\). ¿Cuándo es mayor el número de hijas? Compara con \\(t_{\\max}\\) de la pregunta {#} de Antes del laboratorio.",
"What is \\(R_D/R_P\\) at your largest \\(N_D\\)? Explain the value.":
  "¿Cuál es \\(R_D/R_P\\) en tu mayor \\(N_D\\)? Explica el valor.",
"Check that \\(N_P + N_D + N_S = N_0\\) in every row.":
  "Comprueba que \\(N_P + N_D + N_S = N_0\\) en cada fila.",
"For the tellurium chain, graph \\(R_D/R_P\\) against \\(t\\). Where does it settle, and how long does it take? Compare with Before the lab question {#}.":
  "Para la cadena del telurio, grafica \\(R_D/R_P\\) en función de \\(t\\). ¿Dónde se estabiliza, y cuánto tarda? Compara con la pregunta {#} de Antes del laboratorio.",
"After the ratio settles, graph \\(\\ln N_D\\) against \\(t\\). What half life does its slope give, and whose half life is it?":
  "Después de que la razón se estabilice, grafica \\(\\ln N_D\\) en función de \\(t\\). ¿Qué vida media da su pendiente, y de quién es esa vida media?",
"The counts are random. Estimate the uncertainty of your peak time from the spread of \\(N_D\\) near the peak (about \\(\\sqrt{N_D}\\)), and of the settled activity ratio from the scatter of its last few values.":
  "Los conteos son aleatorios. Estima la incertidumbre de tu tiempo del máximo a partir de la dispersión de \\(N_D\\) cerca del máximo (más o menos \\(\\sqrt{N_D}\\)), y la de la razón de actividades estabilizada a partir de la dispersión de sus últimos valores.",
"In the bismuth chain, why does the polonium never come into equilibrium with the bismuth?":
  "En la cadena del bismuto, ¿por qué el polonio nunca llega al equilibrio con el bismuto?",
"In the tellurium chain, the iodine {#} decays with a {#} h half life, yet after a day the sample still holds iodine {#}. Why?":
  "En la cadena del telurio, el yodo {#} se desintegra con una vida media de {#} h, y aun así después de un día la muestra todavía contiene yodo {#}. ¿Por qué?",
"Hospitals get technetium 99m ({#} h) from a “generator” of molybdenum {#} ({#} h). Use transient equilibrium to explain how the generator works.":
  "Los hospitales obtienen tecnecio 99m ({#} h) de un “generador” de molibdeno {#} ({#} h). Usa el equilibrio transitorio para explicar cómo funciona el generador.",
"Radon {#} ({#} d) comes from radium {#} ({#} yr). What is the ratio of their activities in an old rock, and why?":
  "El radón {#} ({#} d) viene del radio {#} ({#} años). ¿Cuál es la razón de sus actividades en una roca antigua, y por qué?",
"Prelab answers, both table copies with their graphs, the peak time and settled ratio with uncertainties, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ambas copias de la tabla con sus gráficas, el tiempo del máximo y la razón estabilizada con incertidumbres, y respuestas a las preguntas. Identifica los datos simulados.",
"Number of parent nuclei at the start":
  "Número de núcleos madre al inicio",
"Number of daughter nuclei":
  "Número de núcleos hijos",
"Number of parent nuclei":
  "Número de núcleos madre",
"Number of stable end product nuclei":
  "Número de núcleos de producto final estable",
"Activity of the daughter, λ_D N_D":
  "Actividad de la hija, λ_D N_D",
"Activity of the parent, λ_P N_P":
  "Actividad de la madre, λ_P N_P",
"Decay constant of the daughter":
  "Constante de desintegración de la hija",
"Decay constant of the parent":
  "Constante de desintegración de la madre",
"Time when the daughter count peaks":
  "Tiempo en que el número de hijas llega a su máximo",
"Radioactive Decay (chains)":
  "Desintegración radiactiva (cadenas)"
});
