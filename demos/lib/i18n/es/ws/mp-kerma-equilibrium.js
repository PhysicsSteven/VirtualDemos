/* ws/mp-kerma-equilibrium in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/mp-kerma-equilibrium', {
"Depth z (cm)":
  "Profundidad z (cm)",
"Collision kerma K_col (Gy)":
  "Kerma de colisión K_col (Gy)",
"Model dose D (Gy)":
  "Dosis del modelo D (Gy)",
"D/K_col":
  "D/K_col",
"Monte Carlo dose D_MC (Gy)":
  "Dosis Monte Carlo D_MC (Gy)",
"Uncertainty u(D_MC) (Gy)":
  "Incertidumbre u(D_MC) (Gy)",
"ln(D_MC/{#} Gy)":
  "ln(D_MC/{#} Gy)",
"Photon energy (MeV)":
  "Energía del fotón (MeV)",
"Most energetic electron T_max (MeV)":
  "Electrón más energético T_max (MeV)",
"Its CSDA range (mm)":
  "Su alcance CSDA (mm)",
"Model d_max (mm)":
  "d_max del modelo (mm)",
"Model β":
  "β del modelo",
"Kerma, Dose and Charged Particle Equilibrium | VirtualDemos":
  "Kerma, dosis y equilibrio de partículas cargadas | VirtualDemos",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"Kerma, Dose and Charged Particle Equilibrium":
  "Kerma, dosis y equilibrio de partículas cargadas",
"Student worksheet · Medical Physics":
  "Hoja de trabajo del estudiante · Física médica",
"<strong>Setups in the demo:</strong> ⁶⁰Co buildup; Equilibrium at depth; {#} MeV: a thin buildup; {#} MeV: a deep buildup; Saturation curve, protons; High dose per pulse; ⁶⁰Co: hardly any recombination; Calibrate a {#} MeV layer; {#} MeV: z_ref = {#} g/cm²; Where N_D,w comes from.":
  "<strong>Configuraciones en la demo:</strong> Acumulación con ⁶⁰Co; Equilibrio en profundidad; {#} MeV: una acumulación delgada; {#} MeV: una acumulación profunda; Curva de saturación, protones; Alta dosis por pulso; ⁶⁰Co: casi sin recombinación; Calibrar una capa de {#} MeV; {#} MeV: z_ref = {#} g/cm²; De dónde viene N_D,w.",
"This worksheet uses the <strong>Kerma and dose</strong> view. A broad beam of photons of one energy enters water from the left. The dashed line is the collision kerma of the primary photons from NIST’s \\(\\mu_{en}/\\rho\\), the solid line the model’s absorbed dose, and the pink points a Monte Carlo estimate of the dose, each with its standard uncertainty.":
  "Esta hoja de trabajo usa la vista <strong>Kerma y dosis</strong>. Un haz amplio de fotones de una sola energía entra al agua por la izquierda. La línea punteada es la kerma de colisión de los fotones primarios según el \\(\\mu_{en}/\\rho\\) del NIST, la línea continua la dosis absorbida del modelo, y los puntos rosas una estimación Monte Carlo de la dosis, cada uno con su incertidumbre estándar.",
"Play sends photons in and counts histories: each dot in the picture is an interaction and each purple line the Compton electron it sets moving, to scale. Pause stops the count; Reset clears the histories. Changing the energy or the depths shown starts a new count.":
  "Iniciar envía fotones y cuenta historias: cada punto de la imagen es una interacción y cada línea morada el electrón Compton que pone en movimiento, a escala. Pausa detiene la cuenta; Reiniciar borra las historias. Cambiar la energía o las profundidades mostradas inicia una cuenta nueva.",
"The depth probe (the vertical line) can be dragged, moved with the arrow keys or set on the card. The readouts give the collision kerma, the model’s dose and the Monte Carlo dose at the probe.":
  "La sonda de profundidad (la línea vertical) se puede arrastrar, mover con las flechas o fijar en la tarjeta. Las lecturas dan la kerma de colisión, la dosis del modelo y la dosis Monte Carlo en la sonda.",
"Record reading stores the numbers at the probe. Export to worksheet sends them to the first Data table; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda los números en la sonda. Exportar a la hoja los envía a la primera tabla de Datos; Borrar inicia una serie nueva, que va a una nueva copia de la tabla.",
"The model: each Compton electron goes straight along its starting direction for its CSDA range and leaves its collision stopping power (ESTAR) along the way; scattered photons leave the water. The Lab fold lists what it leaves out.":
  "El modelo: cada electrón Compton va en línea recta en su dirección inicial a lo largo de su alcance CSDA y deja su poder de frenado por colisión (ESTAR) en el camino; los fotones dispersos salen del agua. El pliegue Laboratorio lista lo que omite.",
"Measure how collision kerma and absorbed dose part company in the first millimeters of water and run side by side past the buildup, test transient charged particle equilibrium against a Monte Carlo calculation with its statistical uncertainty, and relate the depth of the dose maximum to the range of the fastest secondary electrons.":
  "Mide cómo se separan la kerma de colisión y la dosis absorbida en los primeros milímetros de agua y cómo corren juntas más allá de la acumulación, pon a prueba el equilibrio transitorio de partículas cargadas contra un cálculo Monte Carlo con su incertidumbre estadística, y relaciona la profundidad del máximo de dosis con el alcance de los electrones secundarios más rápidos.",
"<strong>Kerma</strong> (kinetic energy released per unit mass) is the energy photons hand to charged particles in a small mass, divided by that mass. Its <strong>collision</strong> part leaves out the energy the electrons later radiate as bremsstrahlung. For a fluence \\(\\Phi\\) of primary photons of energy \\(h\\nu\\) at the surface, the collision kerma at depth \\(z\\) is":
  "La <strong>kerma</strong> (energía cinética liberada por unidad de masa) es la energía que los fotones entregan a partículas cargadas en una masa pequeña, dividida entre esa masa. Su parte de <strong>colisión</strong> deja fuera la energía que los electrones radian después como bremsstrahlung. Para una fluencia \\(\\Phi\\) de fotones primarios de energía \\(h\\nu\\) en la superficie, la kerma de colisión a la profundidad \\(z\\) es",
"\\[K_{col}(z) = \\Phi\\, h\\nu \\left(\\frac{\\mu_{en}}{\\rho}\\right) e^{-\\mu z}.\\]":
  "\\[K_{col}(z) = \\Phi\\, h\\nu \\left(\\frac{\\mu_{en}}{\\rho}\\right) e^{-\\mu z}.\\]",
"<strong>Absorbed dose</strong> \\(D\\) is the energy actually left in the mass. The electrons set moving at depth \\(z'\\) leave their energy farther on, so the dose at \\(z\\) is the kerma from shallower depths carried forward:":
  "La <strong>dosis absorbida</strong> \\(D\\) es la energía que realmente queda en la masa. Los electrones puestos en movimiento a la profundidad \\(z'\\) dejan su energía más adelante, así que la dosis en \\(z\\) es la kerma de profundidades menores llevada hacia adelante:",
"\\[D(z) = \\int_0^{z} K_{col}(z - x)\\, G(x)\\, dx, \\qquad \\int_0^{\\infty} G(x)\\, dx = 1,\\]":
  "\\[D(z) = \\int_0^{z} K_{col}(z - x)\\, G(x)\\, dx, \\qquad \\int_0^{\\infty} G(x)\\, dx = 1,\\]",
"where \\(G(x)\\) is the share of the energy given to the electrons at one depth that ends up a distance \\(x\\) deeper. Near the surface, electrons arrive from fewer depths than they leave, so \\(D &lt; K_{col}\\): the <strong>buildup</strong>. Once \\(z\\) is deeper than the farthest electron reaches, \\(R\\), the integral runs over all of \\(G\\), and":
  "donde \\(G(x)\\) es la parte de la energía dada a los electrones a una profundidad que termina a una distancia \\(x\\) más adentro. Cerca de la superficie llegan electrones desde menos profundidades de las que salen, así que \\(D &lt; K_{col}\\): la <strong>acumulación</strong>. Una vez que \\(z\\) es más profunda que lo más lejos que llegan los electrones, \\(R\\), la integral abarca toda \\(G\\), y",
"\\[\\frac{D}{K_{col}} = \\beta = \\int_0^{R} G(x)\\, e^{\\mu x}\\, dx > 1:\\]":
  "\\[\\frac{D}{K_{col}} = \\beta = \\int_0^{R} G(x)\\, e^{\\mu x}\\, dx > 1:\\]",
"the dose and the kerma fall with the same exponential and keep a fixed ratio, <strong>transient charged particle equilibrium</strong>. If \\(\\mu R\\) were zero there would be true equilibrium, \\(\\beta = 1\\).":
  "la dosis y la kerma bajan con la misma exponencial y mantienen una razón fija, el <strong>equilibrio transitorio de partículas cargadas</strong>. Si \\(\\mu R\\) fuera cero habría equilibrio verdadero, \\(\\beta = 1\\).",
"<strong>Monte Carlo.</strong> The demo also follows photons one at a time, choosing each interaction depth and electron energy at random from the same physics. In each depth bin ({#}/{#} of the depths shown, or {#} cm for Equilibrium at depth) the dose is the average over batches of histories, and the readout at the probe is read linearly between the centers of the two nearest bins; its standard uncertainty is the standard deviation of the batch means divided by \\(\\sqrt{n_{batch}}\\), and it shrinks as \\(1/\\sqrt{N}\\) with the number of histories \\(N\\).":
  "<strong>Monte Carlo.</strong> La demo también sigue a los fotones uno por uno, eligiendo al azar cada profundidad de interacción y energía del electrón con la misma física. En cada intervalo de profundidad ({#}/{#} de las profundidades mostradas, o {#} cm para Equilibrio en profundidad) la dosis es el promedio sobre lotes de historias, y la lectura en la sonda se interpola linealmente entre los centros de los dos intervalos más cercanos; su incertidumbre estándar es la desviación estándar de las medias de los lotes dividida entre \\(\\sqrt{n_{batch}}\\), y disminuye como \\(1/\\sqrt{N}\\) con el número de historias \\(N\\).",
"Suppose every electron goes straight forward and spreads its energy evenly over a distance \\(R\\), so \\(G(x) = 1/R\\) for \\(0 \\le x \\le R\\). Show that for \\(z < R\\), \\(D(z) = K_{col}(0)\\,\\dfrac{1 - e^{-\\mu z}}{\\mu R}\\), and that for \\(z \\ge R\\), \\(\\beta = \\dfrac{e^{\\mu R} - 1}{\\mu R} \\approx 1 + \\dfrac{\\mu R}{2}\\).":
  "Supón que cada electrón va derecho hacia adelante y reparte su energía de manera uniforme en una distancia \\(R\\), así que \\(G(x) = 1/R\\) para \\(0 \\le x \\le R\\). Muestra que para \\(z < R\\), \\(D(z) = K_{col}(0)\\,\\dfrac{1 - e^{-\\mu z}}{\\mu R}\\), y que para \\(z \\ge R\\), \\(\\beta = \\dfrac{e^{\\mu R} - 1}{\\mu R} \\approx 1 + \\dfrac{\\mu R}{2}\\).",
"In that same model, at what depth is the dose largest? Why is it not at the surface, where the kerma is largest?":
  "En ese mismo modelo, ¿a qué profundidad es mayor la dosis? ¿Por qué no es en la superficie, donde la kerma es mayor?",
"From the NIST table below, find \\(\\mu\\) for ⁶⁰Co photons ({#} MeV) in water and the fraction of the photons’ energy that becomes collision kerma, \\(\\mu_{en}/\\mu\\). Where does the rest of the energy go?":
  "Con la tabla del NIST de abajo, encuentra \\(\\mu\\) para los fotones de ⁶⁰Co ({#} MeV) en agua y la fracción de la energía de los fotones que se convierte en kerma de colisión, \\(\\mu_{en}/\\mu\\). ¿A dónde va el resto de la energía?",
"The most energetic Compton electron from a photon of energy \\(h\\nu\\) has \\(T_{max} = h\\nu\\, \\dfrac{2k}{1 + 2k}\\), with \\(k = h\\nu/m_ec^2\\). Find \\(T_{max}\\) for {#} MeV photons.":
  "El electrón Compton más energético de un fotón de energía \\(h\\nu\\) tiene \\(T_{max} = h\\nu\\, \\dfrac{2k}{1 + 2k}\\), con \\(k = h\\nu/m_ec^2\\). Encuentra \\(T_{max}\\) para fotones de {#} MeV.",
"<strong>Data from NIST</strong> (liquid water, Hubbell and Seltzer), \\(\\mu/\\rho\\) and \\(\\mu_{en}/\\rho\\) in cm²/g:":
  "<strong>Datos del NIST</strong> (agua líquida, Hubbell y Seltzer), \\(\\mu/\\rho\\) y \\(\\mu_{en}/\\rho\\) en cm²/g:",
"{#} MeV: {#} and {#}":
  "{#} MeV: {#} y {#}",
"<strong>Part {#}: the ⁶⁰Co buildup.</strong> Open the ⁶⁰Co buildup setup ({#} MeV, depths {#} to {#} electron ranges, \\(\\Phi = 10^{10}\\) photons per cm²). Run at least {#} million histories, then pause. Record a reading with the probe at {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} cm. Send the readings to the worksheet, then clear them.":
  "<strong>Parte {#}: la acumulación con ⁶⁰Co.</strong> Abre la configuración Acumulación con ⁶⁰Co ({#} MeV, profundidades de {#} a {#} alcances de electrón, \\(\\Phi = 10^{10}\\) fotones por cm²). Corre al menos {#} millones de historias y luego pausa. Registra una lectura con la sonda en {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} cm. Envía las lecturas a la hoja y luego bórralas.",
"<strong>Part {#}: equilibrium at depth.</strong> Open Equilibrium at depth ({#} MeV, {#} to {#} cm) and run at least {#} million histories. Record readings at {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} cm. Send them to the worksheet (a second copy of the first table), then clear them. In both copies fill in the last column.":
  "<strong>Parte {#}: equilibrio en profundidad.</strong> Abre Equilibrio en profundidad ({#} MeV, de {#} a {#} cm) y corre al menos {#} millones de historias. Registra lecturas en {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} cm. Envíalas a la hoja (una segunda copia de la primera tabla) y luego bórralas. En ambas copias llena la última columna.",
"<strong>Part {#}: the buildup against photon energy.</strong> For {#}, {#}, {#} and {#} MeV, write the most energetic electron’s energy, its CSDA range, the model’s \\(d_{max}\\) and \\(\\beta\\) from the readouts into the second table.":
  "<strong>Parte {#}: la acumulación en función de la energía del fotón.</strong> Para {#}, {#}, {#} y {#} MeV, escribe en la segunda tabla la energía del electrón más energético, su alcance CSDA, el \\(d_{max}\\) del modelo y \\(\\beta\\) según las lecturas.",
"<strong>Part {#}: how the uncertainty falls.</strong> Back in Part {#}’s setup, start again and note the Monte Carlo dose and its uncertainty at {#} cm after about {#}, {#} and {#} million histories. Write them under the Uncertainty answer.":
  "<strong>Parte {#}: cómo baja la incertidumbre.</strong> De vuelta en la configuración de la Parte {#}, empieza de nuevo y anota la dosis Monte Carlo y su incertidumbre en {#} cm después de unos {#}, {#} y {#} millones de historias. Escríbelas bajo la respuesta de Incertidumbre.",
"<span>B</span>Depth \\(z\\) (cm)":
  "<span>B</span>Profundidad \\(z\\) (cm)",
"<span>C</span>Collision kerma \\(K_{col}\\) (Gy)":
  "<span>C</span>Kerma de colisión \\(K_{col}\\) (Gy)",
"<span>D</span>Model dose \\(D\\) (Gy)":
  "<span>D</span>Dosis del modelo \\(D\\) (Gy)",
"<span>F</span>Monte Carlo dose \\(D_{MC}\\) (Gy)":
  "<span>F</span>Dosis Monte Carlo \\(D_{MC}\\) (Gy)",
"<span>G</span>Uncertainty \\(u(D_{MC})\\) (Gy)":
  "<span>G</span>Incertidumbre \\(u(D_{MC})\\) (Gy)",
"<span>H</span>\\(\\ln(D_{MC}/1\\ \\mathrm{Gy})\\)":
  "<span>H</span>\\(\\ln(D_{MC}/1\\ \\mathrm{Gy})\\)",
"Depth z (cm), row {#}":
  "Profundidad z (cm), fila {#}",
"Collision kerma K_col (Gy), row {#}":
  "Kerma de colisión K_col (Gy), fila {#}",
"Model dose D (Gy), row {#}":
  "Dosis del modelo D (Gy), fila {#}",
"D/K_col, row {#}":
  "D/K_col, fila {#}",
"Monte Carlo dose D_MC (Gy), row {#}":
  "Dosis Monte Carlo D_MC (Gy), fila {#}",
"Uncertainty u(D_MC) (Gy), row {#}":
  "Incertidumbre u(D_MC) (Gy), fila {#}",
"ln(D_MC/{#} Gy), row {#}":
  "ln(D_MC/{#} Gy), fila {#}",
"Buildup against energy":
  "Acumulación en función de la energía",
"<span>A</span>Photon energy (MeV)":
  "<span>A</span>Energía del fotón (MeV)",
"<span>B</span>Most energetic electron \\(T_{max}\\) (MeV)":
  "<span>B</span>Electrón más energético \\(T_{max}\\) (MeV)",
"<span>C</span>Its CSDA range (mm)":
  "<span>C</span>Su alcance CSDA (mm)",
"<span>D</span>Model \\(d_{max}\\) (mm)":
  "<span>D</span>\\(d_{max}\\) del modelo (mm)",
"<span>E</span>Model \\(\\beta\\)":
  "<span>E</span>\\(\\beta\\) del modelo",
"Most energetic electron T_max (MeV), row {#}":
  "Electrón más energético T_max (MeV), fila {#}",
"Its CSDA range (mm), row {#}":
  "Su alcance CSDA (mm), fila {#}",
"Model d_max (mm), row {#}":
  "d_max del modelo (mm), fila {#}",
"Model β, row {#}":
  "β del modelo, fila {#}",
"From Part {#}, graph \\(\\ln(D_{MC}/1\\ \\mathrm{Gy})\\) against depth. Fit a straight line and give its slope with its standard error. Compare \\(-\\text{slope}\\) with \\(\\mu\\) for {#} MeV from the NIST table: do the dose and the kerma fall with the same attenuation coefficient past the buildup?":
  "Con la Parte {#}, grafica \\(\\ln(D_{MC}/1\\ \\mathrm{Gy})\\) en función de la profundidad. Ajusta una recta y da su pendiente con su error estándar. Compara \\(-\\text{slope}\\) con \\(\\mu\\) para {#} MeV de la tabla del NIST: ¿bajan la dosis y la kerma con el mismo coeficiente de atenuación más allá de la acumulación?",
"From Part {#}, find \\(D_{MC}/K_{col}\\) at each depth with its uncertainty \\(u(D_{MC})/K_{col}\\), and their weighted mean. Compare it with the model’s \\(\\beta\\) and with the estimate \\(1 + \\mu R/2\\) from Before the lab, using \\(R\\) = the CSDA range of the most energetic electron. Why does the even spreading estimate come out larger than the model’s \\(\\beta\\)?":
  "Con la Parte {#}, encuentra \\(D_{MC}/K_{col}\\) a cada profundidad con su incertidumbre \\(u(D_{MC})/K_{col}\\), y su media ponderada. Compárala con la \\(\\beta\\) del modelo y con la estimación \\(1 + \\mu R/2\\) de Antes del laboratorio, usando \\(R\\) = el alcance CSDA del electrón más energético. ¿Por qué la estimación de reparto uniforme sale mayor que la \\(\\beta\\) del modelo?",
"From Part {#}, compute \\(\\chi^2 = \\sum \\left[(D_{MC} - D)/u(D_{MC})\\right]^2\\) over your readings and divide by the number of readings. Do the Monte Carlo and the model agree within the Monte Carlo’s uncertainty? (A value near {#} means yes. Neighboring readings share electrons and batches, so they are not independent: one run that fluctuates high at one depth tends to be high at the next.)":
  "Con la Parte {#}, calcula \\(\\chi^2 = \\sum \\left[(D_{MC} - D)/u(D_{MC})\\right]^2\\) sobre tus lecturas y divide entre el número de lecturas. ¿Coinciden el Monte Carlo y el modelo dentro de la incertidumbre del Monte Carlo? (Un valor cercano a {#} significa que sí. Las lecturas vecinas comparten electrones y lotes, así que no son independientes: una corrida que fluctúa hacia arriba a una profundidad tiende a estar alta en la siguiente.)",
"From Part {#}, at which depth is \\(D/K_{col} = 1\\)? Explain why the dose can exceed the kerma deeper than that, when no energy is created.":
  "Con la Parte {#}, ¿a qué profundidad es \\(D/K_{col} = 1\\)? Explica por qué la dosis puede superar a la kerma a mayor profundidad que esa, si no se crea energía.",
"From the second table, graph the model’s \\(d_{max}\\) against the CSDA range of the most energetic electron. What is the relation in this model, and why? Measured \\(d_{max}\\) for ⁶⁰Co is about {#} cm; list two things the model leaves out that change the real buildup.":
  "Con la segunda tabla, grafica el \\(d_{max}\\) del modelo en función del alcance CSDA del electrón más energético. ¿Cuál es la relación en este modelo, y por qué? El \\(d_{max}\\) medido para ⁶⁰Co es de unos {#} cm; lista dos cosas que omite el modelo y que cambian la acumulación real.",
"Megavoltage beams spare the skin. Use your table to explain why, and why the sparing grows with energy.":
  "Los haces de megavoltaje protegen la piel. Usa tu tabla para explicar por qué, y por qué la protección crece con la energía.",
"Use Part {#}: by what factor did \\(u(D_{MC})\\) fall each time the number of histories went up four times? Compare with \\(1/\\sqrt{N}\\). How many histories would give a {#} % uncertainty at {#} cm? The model’s own uncertainty is not statistical: name the largest approximation in it and say which direction it pushes \\(\\beta\\).":
  "Usa la Parte {#}: ¿en qué factor bajó \\(u(D_{MC})\\) cada vez que el número de historias se multiplicó por cuatro? Compara con \\(1/\\sqrt{N}\\). ¿Cuántas historias darían una incertidumbre de {#} % en {#} cm? La incertidumbre propia del modelo no es estadística: nombra su mayor aproximación y di en qué dirección empuja a \\(\\beta\\).",
"Kerma is defined for any mass, however small, but dose equals collision kerma only under charged particle equilibrium. Why does an ion chamber in a ⁶⁰Co beam need a wall (or a buildup cap) at least as thick as the electrons’ range?":
  "La kerma se define para cualquier masa, por pequeña que sea, pero la dosis es igual a la kerma de colisión solo con equilibrio de partículas cargadas. ¿Por qué una cámara de ionización en un haz de ⁶⁰Co necesita una pared (o un capuchón de acumulación) al menos tan gruesa como el alcance de los electrones?",
"In a proton beam the primary particles are charged. Is “kerma” a useful quantity there? What takes its place?":
  "En un haz de protones las partículas primarias tienen carga. ¿Es la “kerma” una cantidad útil ahí? ¿Qué toma su lugar?",
"At {#} MeV about {#} % of interactions are pair production. How would including them change \\(\\beta\\) and \\(d_{max}\\) in this model?":
  "A {#} MeV alrededor del {#} % de las interacciones son producción de pares. ¿Cómo cambiaría incluirlas a \\(\\beta\\) y a \\(d_{max}\\) en este modelo?",
"A patient’s skin dose under a {#} MV beam is much lower than the dose at {#} cm. Where, in terms of kerma and dose, is the energy that would have gone into the skin?":
  "La dosis en la piel de un paciente bajo un haz de {#} MV es mucho menor que la dosis a {#} cm. ¿Dónde está, en términos de kerma y dosis, la energía que habría ido a la piel?",
"Prelab answers, both copies of the first Data table with the graph from Part {#}, the energy table with its graph, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, ambas copias de la primera tabla de Datos con la gráfica de la Parte {#}, la tabla de energías con su gráfica, las respuestas de las secciones de análisis e incertidumbre, y las respuestas a las preguntas. Identifica los datos simulados.",
"Absorbed dose (the model's)":
  "Dosis absorbida (la del modelo)",
"Monte Carlo dose":
  "Dosis Monte Carlo",
"Share of the energy given to electrons at one depth that is left a distance x deeper (per unit distance)":
  "Parte de la energía dada a los electrones a una profundidad que queda a una distancia x más adentro (por unidad de distancia)",
"Collision kerma of the primary photons":
  "Kerma de colisión de los fotones primarios",
"Number of photon histories":
  "Número de historias de fotones",
"Fluence of primary photons at the surface":
  "Fluencia de fotones primarios en la superficie",
"Farthest distance the electrons reach (in the even spreading model, the distance the energy is spread over)":
  "Distancia máxima que alcanzan los electrones (en el modelo de reparto uniforme, la distancia sobre la que se reparte la energía)",
"Kinetic energy of the most energetic Compton electron":
  "Energía cinética del electrón Compton más energético",
"Ratio D/K_col past the buildup in the model (transient charged particle equilibrium)":
  "Razón D/K_col más allá de la acumulación en el modelo (equilibrio transitorio de partículas cargadas)",
"χ²: the sum of squared differences in units of the uncertainty":
  "χ²: la suma de las diferencias al cuadrado en unidades de la incertidumbre",
"Depth of the dose maximum in the model":
  "Profundidad del máximo de dosis en el modelo",
"Photon energy in units of the electron rest energy, hν/m_ec²":
  "Energía del fotón en unidades de la energía en reposo del electrón, hν/m_ec²",
"Linear attenuation coefficient of water for the photons":
  "Coeficiente de atenuación lineal del agua para los fotones",
"Mass energy absorption coefficient of water (with ρ: μ_en/ρ, NIST)":
  "Coeficiente másico de absorción de energía del agua (con ρ: μ_en/ρ, NIST)",
"Number of batches of histories":
  "Número de lotes de historias",
"Photon frequency (hν: the photon energy)":
  "Frecuencia del fotón (hν: la energía del fotón)",
"Density of water":
  "Densidad del agua",
"Standard uncertainty":
  "Incertidumbre estándar",
"Distance from where an electron starts to where its energy is left":
  "Distancia desde donde empieza un electrón hasta donde deja su energía",
"Depth in the water":
  "Profundidad en el agua",
"Depth where the electrons are set moving":
  "Profundidad donde los electrones se ponen en movimiento",
"Dosimetry: Kerma, Equilibrium and the Ion Chamber":
  "Dosimetría: kerma, equilibrio y la cámara de ionización",
"Start sends photons in and counts histories: each dot in the picture is an interaction and each purple line the Compton electron it sets moving, to scale. Pause stops the count; Start again clears the histories. Changing the energy or the depths shown starts a new count.":
  "Iniciar envía fotones y cuenta historias: cada punto de la imagen es una interacción y cada línea morada el electrón Compton que pone en movimiento, a escala. Pausa detiene la cuenta; Iniciar de nuevo borra las historias. Cambiar la energía o las profundidades mostradas inicia una cuenta nueva."
});
