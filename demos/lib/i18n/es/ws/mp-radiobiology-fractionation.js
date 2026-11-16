/* ws/mp-radiobiology-fractionation in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/mp-radiobiology-fractionation', {
"Fractions n":
  "Fracciones n",
"Dose per fraction d (Gy)":
  "Dosis por fracción d (Gy)",
"Total dose (Gy)":
  "Dosis total (Gy)",
"BED, α/β {#} Gy (Gy)":
  "BED, α/β {#} Gy (Gy)",
"EQD2, α/β {#} Gy (Gy)":
  "EQD2, α/β {#} Gy (Gy)",
"Late effect held at":
  "Efecto tardío fijado en",
"LET_d (keV/µm)":
  "LET_d (keV/µm)",
"Proton dose D (Gy)":
  "Dosis de protones D (Gy)",
"RBE_max":
  "RBE_max",
"RBE_min":
  "RBE_min",
"RBE":
  "RBE",
"RBE weighted dose (Gy(RBE))":
  "Dosis ponderada por RBE (Gy(RBE))",
"With RBE {#} (Gy(RBE))":
  "Con RBE {#} (Gy(RBE))",
"Radiobiology: Fractionation and Proton RBE | VirtualDemos":
  "Radiobiología: fraccionamiento y RBE de protones | VirtualDemos",
"Radiobiology: Fractionation and Proton RBE":
  "Radiobiología: fraccionamiento y RBE de protones",
"<strong>Setups in the demo:</strong> V79 in air and without oxygen; OER at a high dose; A little oxygen goes a long way; Human kidney cells; A curve with a shoulder; Clonogenic assay of V79; A mystery cell line; {#} Gy in {#} fractions; {#} Gy at once; Five fractions, same late effect; Prostate in {#} fractions; Protons at low LET; End of range, low α/β; Smaller fractions, higher RBE.":
  "<strong>Configuraciones en la demo:</strong> V79 en aire y sin oxígeno; OER a dosis alta; Un poco de oxígeno rinde mucho; Células de riñón humano; Una curva con hombro; Ensayo clonogénico de V79; Una línea celular misteriosa; {#} Gy en {#} fracciones; {#} Gy de una vez; Cinco fracciones, mismo efecto tardío; Próstata en {#} fracciones; Protones a baja LET; Final del alcance, α/β bajo; Fracciones más pequeñas, RBE mayor.",
"The strip across the top switches between four views: Survival and oxygen, Clonogenic assay, Fractionation, and Proton RBE.":
  "La franja de arriba cambia entre cuatro vistas: Supervivencia y oxígeno, Ensayo clonogénico, Fraccionamiento y RBE de protones.",
"<strong>Survival and oxygen</strong> draws the surviving fraction of a cell line against the dose of low LET radiation given at once, in air and without oxygen, with the α and β parts of the curve in air. Two cell lines are built in, V79 hamster lung cells and T1 human kidney cells, or you can set your own α and β. Below are the effect of oxygen against its pressure at the chosen dose, and the oxygen enhancement ratio against dose. Drag across the top chart, or type a dose, to read the curves.":
  "<strong>Supervivencia y oxígeno</strong> dibuja la fracción de supervivencia de una línea celular en función de la dosis de radiación de baja LET aplicada de una vez, en aire y sin oxígeno, con las partes α y β de la curva en aire. Hay dos líneas celulares incluidas, células de pulmón de hámster V79 y células de riñón humano T1, o puedes fijar tus propios α y β. Abajo están el efecto del oxígeno en función de su presión a la dosis elegida y el cociente de potenciación por oxígeno en función de la dosis. Arrastra sobre la gráfica de arriba, o escribe una dosis, para leer las curvas.",
"<strong>Clonogenic assay</strong> simulates the classic experiment: seed a known number of cells into each of three flasks, irradiate them, and count the colonies that grow. The counts carry the random scatter of counting (Poisson), so each experiment gives slightly different numbers; New experiment repeats the whole assay. A mystery cell line has hidden α, β and plating efficiency, set by its code.":
  "<strong>Ensayo clonogénico</strong> simula el experimento clásico: siembra un número conocido de células en cada uno de tres frascos, irrádialos y cuenta las colonias que crecen. Los conteos llevan la dispersión aleatoria del conteo (Poisson), así que cada experimento da números un poco distintos; Nuevo experimento repite todo el ensayo. Una línea celular misteriosa tiene α, β y eficiencia de siembra ocultos, fijados por su código.",
"<strong>Fractionation</strong> splits a total dose into {#} to {#} equal fractions, five a week, and gives the biologically effective dose and the EQD2 for tumors and early responding tissue (α/β {#} Gy), late responding normal tissue ({#} Gy), prostate cancer ({#} Gy) and a tissue of your choosing. Keep the late effect fixed makes the total dose follow the number of fractions so that late responding tissue always gets the same effect.":
  "<strong>Fraccionamiento</strong> divide una dosis total en {#} a {#} fracciones iguales, cinco por semana, y da la dosis biológicamente efectiva y la EQD2 para tumores y tejido de respuesta temprana (α/β {#} Gy), tejido normal de respuesta tardía ({#} Gy), cáncer de próstata ({#} Gy) y un tejido que tú elijas. Mantener fijo el efecto tardío hace que la dosis total siga al número de fracciones para que el tejido de respuesta tardía reciba siempre el mismo efecto.",
"<strong>Proton RBE</strong> gives the relative biological effectiveness of protons against the dose averaged LET and the dose per fraction, from a published model fitted to cell experiments, and compares it with the constant {#} used in the clinic.":
  "<strong>RBE de protones</strong> da la efectividad biológica relativa de los protones en función de la LET promediada en dosis y de la dosis por fracción, a partir de un modelo publicado ajustado a experimentos con células, y la compara con la constante {#} que se usa en la clínica.",
"Record reading stores the numbers for the view on show. Export to worksheet sends the readings to the matching Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda los números de la vista que se muestra. Exportar a la hoja envía las lecturas a la tabla de datos correspondiente de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Compare fractionation schedules with BED and EQD2, and see when the proton RBE of {#} underestimates the effect.":
  "Compara esquemas de fraccionamiento con BED y EQD2, y observa cuándo la RBE de protones de {#} subestima el efecto.",
"<strong>Cell survival.</strong> In the linear quadratic (LQ) model the surviving fraction of cells after a dose \\(D\\) given at once is \\(S = e^{-\\alpha D - \\beta D^2}\\). The linear term is lethal damage from one track; the quadratic term is damage from two tracks that interact, which a cell can repair if the two arrive far enough apart in time. The ratio \\(\\alpha/\\beta\\) is the dose at which the two terms kill equally. Tumors and early responding tissues usually have \\(\\alpha/\\beta \\approx 10\\) Gy, late responding normal tissues (spinal cord, lung, kidney, rectum) about {#} Gy (Hall and Giaccia).":
  "<strong>Supervivencia celular.</strong> En el modelo lineal cuadrático (LQ), la fracción de células que sobreviven después de una dosis \\(D\\) dada de una vez es \\(S = e^{-\\alpha D - \\beta D^2}\\). El término lineal es daño letal de una sola traza; el término cuadrático es daño de dos trazas que interactúan, que una célula puede reparar si las dos llegan con suficiente separación en el tiempo. La razón \\(\\alpha/\\beta\\) es la dosis a la que los dos términos matan por igual. Los tumores y los tejidos de respuesta temprana suelen tener \\(\\alpha/\\beta \\approx 10\\) Gy, los tejidos normales de respuesta tardía (médula espinal, pulmón, riñón, recto) cerca de {#} Gy (Hall y Giaccia).",
"<strong>Fractionation.</strong> If a dose is split into \\(n\\) fractions of \\(d\\) with full repair between them, each fraction has the same effect \\(\\alpha d + \\beta d^2\\) and the effects add: \\(E = n(\\alpha d + \\beta d^2)\\). The biologically effective dose \\(\\mathrm{BED} = E/\\alpha = nd\\left(1 + \\frac{d}{\\alpha/\\beta}\\right)\\) is the total dose that would have the same effect if given in very small fractions. The equivalent dose in {#} Gy fractions is \\(\\mathrm{EQD2} = \\mathrm{BED}/(1 + 2/(\\alpha/\\beta))\\). A tissue with a small α/β is more sensitive to the size of each fraction.":
  "<strong>Fraccionamiento.</strong> Si una dosis se divide en \\(n\\) fracciones de \\(d\\) con reparación completa entre ellas, cada fracción tiene el mismo efecto \\(\\alpha d + \\beta d^2\\) y los efectos se suman: \\(E = n(\\alpha d + \\beta d^2)\\). La dosis biológicamente efectiva \\(\\mathrm{BED} = E/\\alpha = nd\\left(1 + \\frac{d}{\\alpha/\\beta}\\right)\\) es la dosis total que tendría el mismo efecto si se aplicara en fracciones muy pequeñas. La dosis equivalente en fracciones de {#} Gy es \\(\\mathrm{EQD2} = \\mathrm{BED}/(1 + 2/(\\alpha/\\beta))\\). Un tejido con α/β pequeño es más sensible al tamaño de cada fracción.",
"<strong>Proton RBE.</strong> The relative biological effectiveness is the ratio of the photon dose to the proton dose that give the same effect. Clinics use {#} everywhere. Measured RBE rises with the linear energy transfer, which grows toward the end of the proton range, and rises as the dose per fraction falls and as the tissue’s α/β falls (Paganetti {#}). The model in the demo (McNamara, Schuemann and Paganetti {#}) writes the proton α and β as \\(\\alpha_p = \\mathrm{RBE}_{max}\\,\\alpha_x\\) and \\(\\sqrt{\\beta_p} = \\mathrm{RBE}_{min}\\sqrt{\\beta_x}\\), with RBE\\(_{max}\\) and RBE\\(_{min}\\) linear in LET\\(_d\\).":
  "<strong>RBE de protones.</strong> La efectividad biológica relativa es el cociente de la dosis de fotones entre la dosis de protones que dan el mismo efecto. Las clínicas usan {#} en todas partes. La RBE medida aumenta con la transferencia lineal de energía, que crece hacia el final del alcance del protón, y aumenta al disminuir la dosis por fracción y al disminuir el α/β del tejido (Paganetti {#}). El modelo de la demo (McNamara, Schuemann y Paganetti {#}) escribe los α y β de protones como \\(\\alpha_p = \\mathrm{RBE}_{max}\\,\\alpha_x\\) y \\(\\sqrt{\\beta_p} = \\mathrm{RBE}_{min}\\sqrt{\\beta_x}\\), con RBE\\(_{max}\\) y RBE\\(_{min}\\) lineales en LET\\(_d\\).",
"Derive the BED and EQD2 formulas in the Background from \\(E = n(\\alpha d + \\beta d^2)\\). Then show that the dose per fraction that gives a BED of \\(B\\) in \\(n\\) fractions is \\(d = \\frac{\\alpha/\\beta}{2}\\left(\\sqrt{1 + \\frac{4B}{n\\,(\\alpha/\\beta)}} - 1\\right)\\).":
  "Deduce las fórmulas de BED y EQD2 de los Antecedentes a partir de \\(E = n(\\alpha d + \\beta d^2)\\). Luego muestra que la dosis por fracción que da una BED de \\(B\\) en \\(n\\) fracciones es \\(d = \\frac{\\alpha/\\beta}{2}\\left(\\sqrt{1 + \\frac{4B}{n\\,(\\alpha/\\beta)}} - 1\\right)\\).",
"A hypofractionated course gives fewer, larger fractions. Hold the effect on late responding tissue (α/β {#} Gy) at that of {#} Gy in {#} fractions, and go from {#} fractions to {#}. Does the tumor (α/β {#} Gy) get more effect, the same, or less? Explain your choice.":
  "Un tratamiento hipofraccionado da menos fracciones, más grandes. Mantén el efecto en el tejido de respuesta tardía (α/β {#} Gy) igual al de {#} Gy en {#} fracciones, y pasa de {#} fracciones a {#}. ¿El tumor (α/β {#} Gy) recibe más efecto, el mismo, o menos? Explica tu elección.",
"No hazards in the virtual lab. In a real radiobiology lab, irradiators are radiation hazards and cell culture needs sterile technique and the lab’s biosafety rules.":
  "No hay riesgos en el laboratorio virtual. En un laboratorio real de radiobiología, los irradiadores son un riesgo de radiación y el cultivo celular necesita técnica estéril y las reglas de bioseguridad del laboratorio.",
"<strong>Part {#}: fractionation.</strong> ({#}) In the Fractionation view, set Total dose to {#} Gy (click its value to type). Set Fractions n to {#}, {#}, {#}, {#}, {#}, {#} and {#} in turn, recording a reading at each. Export the readings to the worksheet and clear them. ({#}) Set {#} Gy in {#} fractions, then check Keep the late effect fixed (the total dose now follows n). Set Fractions n to {#}, {#}, {#}, {#}, {#}, {#} and {#}, recording each; export those as a second copy of the table and clear them. ({#}) Uncheck Keep the late effect fixed and record {#} Gy in {#} fractions and {#} Gy in {#} fractions; export those as a third copy.":
  "<strong>Parte {#}: fraccionamiento.</strong> ({#}) En la vista Fraccionamiento, fija Dosis total en {#} Gy (haz clic en su valor para escribirlo). Fija Fracciones n en {#}, {#}, {#}, {#}, {#}, {#} y {#} por turnos, registrando una lectura en cada una. Exporta las lecturas a la hoja y bórralas. ({#}) Fija {#} Gy en {#} fracciones, y luego marca Mantener fijo el efecto tardío (la dosis total ahora sigue a n). Fija Fracciones n en {#}, {#}, {#}, {#}, {#}, {#} y {#}, registrando cada una; exporta esas como una segunda copia de la tabla y bórralas. ({#}) Desmarca Mantener fijo el efecto tardío y registra {#} Gy en {#} fracciones y {#} Gy en {#} fracciones; exporta esas como una tercera copia.",
"<strong>Part {#}: proton RBE.</strong> ({#}) In the Proton RBE view, set Proton dose per fraction to {#} Gy and (α/β)ₓ for photons to {#} Gy (click each value to type). Set LET_d to {#}, {#}, {#}, {#}, {#}, {#} and {#} keV/µm in turn, recording a reading at each. Export them to the worksheet and clear them. ({#}) Repeat with (α/β)ₓ for photons at {#} Gy, as a second copy.":
  "<strong>Parte {#}: RBE de protones.</strong> ({#}) En la vista RBE de protones, fija Dosis de protones por fracción en {#} Gy y (α/β)ₓ para fotones en {#} Gy (haz clic en cada valor para escribirlo). Fija LET_d en {#}, {#}, {#}, {#}, {#}, {#} y {#} keV/µm por turnos, registrando una lectura en cada una. Expórtalas a la hoja y bórralas. ({#}) Repite con (α/β)ₓ para fotones en {#} Gy, como una segunda copia.",
"<span>B</span>Fractions \\(n\\)":
  "<span>B</span>Fracciones \\(n\\)",
"<span>C</span>Dose per fraction \\(d\\) (Gy)":
  "<span>C</span>Dosis por fracción \\(d\\) (Gy)",
"<span>D</span>Total dose (Gy)":
  "<span>D</span>Dosis total (Gy)",
"<span>E</span>BED, α/β {#} Gy (Gy)":
  "<span>E</span>BED, α/β {#} Gy (Gy)",
"<span>F</span>EQD2, α/β {#} Gy (Gy)":
  "<span>F</span>EQD2, α/β {#} Gy (Gy)",
"<span>G</span>BED, α/β {#} Gy (Gy)":
  "<span>G</span>BED, α/β {#} Gy (Gy)",
"<span>H</span>EQD2, α/β {#} Gy (Gy)":
  "<span>H</span>EQD2, α/β {#} Gy (Gy)",
"<span>I</span>BED, α/β {#} Gy (Gy)":
  "<span>I</span>BED, α/β {#} Gy (Gy)",
"<span>J</span>EQD2, α/β {#} Gy (Gy)":
  "<span>J</span>EQD2, α/β {#} Gy (Gy)",
"<span>K</span>Late effect held at":
  "<span>K</span>Efecto tardío fijado en",
"Fractions n, row {#}":
  "Fracciones n, fila {#}",
"Dose per fraction d (Gy), row {#}":
  "Dosis por fracción d (Gy), fila {#}",
"Total dose (Gy), row {#}":
  "Dosis total (Gy), fila {#}",
"BED, α/β {#} Gy (Gy), row {#}":
  "BED, α/β {#} Gy (Gy), fila {#}",
"EQD2, α/β {#} Gy (Gy), row {#}":
  "EQD2, α/β {#} Gy (Gy), fila {#}",
"Late effect held at, row {#}":
  "Efecto tardío fijado en, fila {#}",
"Proton RBE":
  "RBE de protones",
"<span>B</span>LET\\(_d\\) (keV/µm)":
  "<span>B</span>LET\\(_d\\) (keV/µm)",
"<span>C</span>Proton dose \\(D\\) (Gy)":
  "<span>C</span>Dosis de protones \\(D\\) (Gy)",
"<span>D</span>\\((\\alpha/\\beta)_x\\) (Gy)":
  "<span>D</span>\\((\\alpha/\\beta)_x\\) (Gy)",
"<span>E</span>RBE\\(_{max}\\)":
  "<span>E</span>RBE\\(_{max}\\)",
"<span>F</span>RBE\\(_{min}\\)":
  "<span>F</span>RBE\\(_{min}\\)",
"<span>G</span>RBE":
  "<span>G</span>RBE",
"<span>H</span>RBE weighted dose (Gy(RBE))":
  "<span>H</span>Dosis ponderada por RBE (Gy(RBE))",
"<span>I</span>With RBE {#} (Gy(RBE))":
  "<span>I</span>Con RBE {#} (Gy(RBE))",
"LET_d (keV/µm), row {#}":
  "LET_d (keV/µm), fila {#}",
"Proton dose D (Gy), row {#}":
  "Dosis de protones D (Gy), fila {#}",
"(α/β)_x (Gy), row {#}":
  "(α/β)_x (Gy), fila {#}",
"RBE_max, row {#}":
  "RBE_max, fila {#}",
"RBE_min, row {#}":
  "RBE_min, fila {#}",
"RBE, row {#}":
  "RBE, fila {#}",
"RBE weighted dose (Gy(RBE)), row {#}":
  "Dosis ponderada por RBE (Gy(RBE)), fila {#}",
"With RBE {#} (Gy(RBE)), row {#}":
  "Con RBE {#} (Gy(RBE)), fila {#}",
"From the first fractionation table, graph EQD2 against \\(n\\) for the three tissues. Which tissue’s EQD2 changes most as the {#} Gy is split into fewer fractions, and why? What does that mean for giving a whole course in one or a few large fractions?":
  "Con la primera tabla de fraccionamiento, grafica la EQD2 en función de \\(n\\) para los tres tejidos. ¿La EQD2 de qué tejido cambia más cuando los {#} Gy se dividen en menos fracciones, y por qué? ¿Qué significa eso para dar un curso completo en una o pocas fracciones grandes?",
"From the second fractionation table, with the late effect held fixed, how does the tumor’s EQD2 (α/β {#} Gy) change with \\(n\\)? Use the Your tissue α/β control to find what α/β a tumor would need for fewer, larger fractions to cost it nothing. Explain the answer from the BED formula.":
  "Con la segunda tabla de fraccionamiento, con el efecto tardío fijo, ¿cómo cambia la EQD2 del tumor (α/β {#} Gy) con \\(n\\)? Usa el control α/β de tu tejido para encontrar qué α/β necesitaría un tumor para que menos fracciones más grandes no le costaran nada. Explica la respuesta a partir de la fórmula de la BED.",
"From the third table, compare {#} Gy in {#} fractions with {#} Gy in {#} for prostate cancer (α/β {#} Gy) and for late responding tissue ({#} Gy). Why could a shorter course be at least as good for prostate cancer?":
  "Con la tercera tabla, compara {#} Gy en {#} fracciones con {#} Gy en {#} para el cáncer de próstata (α/β {#} Gy) y para el tejido de respuesta tardía ({#} Gy). ¿Por qué un curso más corto podría ser al menos igual de bueno para el cáncer de próstata?",
"From the proton tables, graph RBE against LET\\(_d\\) for \\((\\alpha/\\beta)_x\\) = {#} and {#} Gy and fit straight lines. Find the slopes with their standard errors. At what LET\\(_d\\) does the RBE pass {#} for each tissue? (For one of them every reading is already above {#}: extend its line below your lowest LET.) Which tissue’s RBE depends more strongly on LET, and why does the model make it so?":
  "Con las tablas de protones, grafica la RBE en función de LET\\(_d\\) para \\((\\alpha/\\beta)_x\\) = {#} y {#} Gy y ajusta rectas. Encuentra las pendientes con sus errores estándar. ¿A qué LET\\(_d\\) pasa la RBE de {#} para cada tejido? (Para uno de ellos todas las lecturas ya están por encima de {#}: extiende su recta por debajo de tu LET más baja.) ¿La RBE de qué tejido depende más fuertemente de la LET, y por qué el modelo lo hace así?",
"The fractionation and RBE readings come straight from the models, whose uncertainty is in their parameters. The α/β of prostate cancer is {#} Gy with a range of {#} to {#} Gy (Brenner and Hall {#}): find the EQD2 of {#} Gy in {#} fractions at both ends of that range, and say how much that uncertainty matters for the comparison in Analysis {#}.":
  "Las lecturas de fraccionamiento y de RBE vienen directamente de los modelos, cuya incertidumbre está en sus parámetros. El α/β del cáncer de próstata es {#} Gy con un intervalo de {#} a {#} Gy (Brenner y Hall {#}): encuentra el EQD2 de {#} Gy en {#} fracciones en ambos extremos de ese intervalo, y di cuánto importa esa incertidumbre para la comparación del Análisis {#}.",
"Why are tumors and early responding tissues usually given α/β ≈ {#} Gy and late responding tissues ≈ {#} Gy? What property of the cells does a large α/β reflect?":
  "¿Por qué a los tumores y tejidos de respuesta temprana se les suele dar α/β ≈ {#} Gy y a los tejidos de respuesta tardía ≈ {#} Gy? ¿Qué propiedad de las células refleja un α/β grande?",
"Stereotactic treatments give {#} to {#} Gy in one to five fractions. Why is the linear quadratic model questioned at these doses per fraction, and what does the demo’s curve with its quadratic term predict at very high dose?":
  "Los tratamientos estereotácticos dan de {#} a {#} Gy en una a cinco fracciones. ¿Por qué se cuestiona el modelo lineal cuadrático a estas dosis por fracción, y qué predice la curva de la demo, con su término cuadrático, a dosis muy altas?",
"Were you right in Before the lab {#}? Give the tumor’s EQD2 at {#} and at {#} fractions from your second fractionation table. That table assumes the late responding tissue gets the same dose per fraction as the tumor. In stereotactic treatment the nearby normal tissue gets only a share of the tumor’s dose per fraction: use the BED formula to find how small that share must be before fewer, larger fractions give the tumor more effect for the same late effect.":
  "¿Tenías razón en Antes del laboratorio {#}? Da la EQD2 del tumor con {#} y con {#} fracciones a partir de tu segunda tabla de fraccionamiento. Esa tabla supone que el tejido de respuesta tardía recibe la misma dosis por fracción que el tumor. En el tratamiento estereotáctico el tejido normal cercano recibe solo una parte de la dosis del tumor por fracción: usa la fórmula de la BED para encontrar qué tan pequeña debe ser esa parte para que menos fracciones, más grandes, den al tumor más efecto con el mismo efecto tardío.",
"Prelab answers, every Data table with its graphs, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, cada tabla de datos con sus gráficas, las respuestas de las secciones de análisis e incertidumbre, y las respuestas a las preguntas. Identifica los datos simulados.",
"Biologically effective dose aimed at":
  "Dosis biológicamente efectiva buscada",
"Absorbed dose given at once (for protons, the proton dose)":
  "Dosis absorbida aplicada de una vez (para protones, la dosis de protones)",
"Biological effect, −ln S summed over the fractions":
  "Efecto biológico, −ln S sumado sobre las fracciones",
"Surviving fraction: the share of cells that can still form a colony":
  "Fracción de supervivencia: la parte de las células que todavía puede formar una colonia",
"Linear quadratic coefficient for single track (lethal) damage":
  "Coeficiente lineal cuadrático para daño de una traza (letal)",
"α for the protons":
  "α para los protones",
"α for photons (the reference radiation)":
  "α para fotones (la radiación de referencia)",
"Linear quadratic coefficient for two track (repairable) damage":
  "Coeficiente lineal cuadrático para daño de dos trazas (reparable)",
"β for the protons":
  "β para los protones",
"β for photons (the reference radiation)":
  "β para fotones (la radiación de referencia)",
"Dose per fraction":
  "Dosis por fracción",
"Number of equal fractions":
  "Número de fracciones iguales",
"Radiobiology: Cell Survival and Fractionation":
  "Radiobiología: supervivencia celular y fraccionamiento",
"Student worksheet · Medical Physics":
  "Hoja de trabajo del estudiante · Física médica",
"Prelab answer, every Data table with its graphs, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.":
  "Respuesta del prelaboratorio, cada tabla de datos con sus gráficas, las respuestas a las secciones de análisis e incertidumbre, y las respuestas a las preguntas. Identifica los datos simulados.",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>"
});
