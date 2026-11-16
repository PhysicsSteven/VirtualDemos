/* ws/mp-ct-range-margins in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/mp-ct-range-margins', {
"Plan":
  "Plan",
"CT number error (HU)":
  "Error del número CT (HU)",
"I value error (%)":
  "Error del valor I (%)",
"Margin":
  "Margen",
"Target’s far edge (cm)":
  "Borde lejano del blanco (cm)",
"Planned R90 (cm of water)":
  "R90 planeado (cm de agua)",
"Range error (mm)":
  "Error del alcance (mm)",
"Real R90 past the target (mm)":
  "R90 real más allá del blanco (mm)",
"Target covered":
  "Blanco cubierto",
"Patient":
  "Paciente",
"Slope (mm per HU)":
  "Pendiente (mm por HU)",
"Slope’s standard error":
  "Error estándar de la pendiente",
"Intercept (mm)":
  "Ordenada al origen (mm)",
"Source (Paganetti {#})":
  "Fuente (Paganetti {#})",
"Your squared term":
  "Tu término al cuadrado",
"CT Numbers and Proton Range: Range Errors and Margins | VirtualDemos":
  "Números CT y alcance de protones: errores de alcance y márgenes | VirtualDemos",
"CT Numbers and Proton Range: Range Errors and Margins":
  "Números CT y alcance de protones: errores de alcance y márgenes",
"<strong>Setups in the demo:</strong> Calibration scan, {#} kV; Same phantom, {#} kV; Both curves; Bone on the substitute curve; Substitute curve without Teflon; Mystery tissue; Brain, {#} % + {#} mm; Prostate through the femoral head; Lung tumor; Lung, CT numbers {#} HU high; Prostate, tissue I values {#} % low; Prostate planned on the substitute curve; Brain, no margin. This worksheet uses the Brain, {#} % + {#} mm; Prostate through the femoral head; Lung tumor; Lung, CT numbers {#} HU high; Prostate, tissue I values {#} % low; Prostate planned on the substitute curve; and Brain, no margin setups.":
  "<strong>Configuraciones en la demo:</strong> Escaneo de calibración, {#} kV; Mismo maniquí, {#} kV; Ambas curvas; Hueso en la curva de sustitutos; Curva de sustitutos sin teflón; Tejido misterioso; Cerebro, {#} % + {#} mm; Próstata a través de la cabeza femoral; Tumor de pulmón; Pulmón, números CT {#} HU altos; Próstata, valores I del tejido {#} % bajos; Próstata planeada con la curva de sustitutos; Cerebro, sin margen. Esta hoja usa las configuraciones Cerebro, {#} % + {#} mm; Próstata a través de la cabeza femoral; Tumor de pulmón; Pulmón, números CT {#} HU altos; Próstata, valores I del tejido {#} % bajos; Próstata planeada con la curva de sustitutos; y Cerebro, sin margen.",
"The demo has three steps, chosen at the top: <strong>Scan the phantom</strong>, <strong>CT number to stopping power</strong>, and <strong>Range and margins</strong>. The button beside them runs the step: Scan, Measure the range shift, or Deliver.":
  "La demo tiene tres pasos, que se eligen arriba: <strong>Escanear el maniquí</strong>, <strong>Del número CT al poder de frenado</strong> y <strong>Alcance y márgenes</strong>. El botón junto a ellos ejecuta el paso: Escanear, Medir el desplazamiento del alcance o Entregar.",
"<strong>Scan the phantom</strong> shows a CT scanner with a calibration phantom: a {#} cm water cylinder with eight inserts of known composition. The image is the slice, and the graph plots each insert’s mean CT number against its electron density, with the Schneider fit. Choose the tube voltage, the insert whose region of interest the readouts show, and the display window.":
  "<strong>Escanear el maniquí</strong> muestra un tomógrafo con un maniquí de calibración: un cilindro de agua de {#} cm con ocho insertos de composición conocida. La imagen es el corte, y la gráfica muestra el número CT medio de cada inserto en función de su densidad electrónica, con el ajuste de Schneider. Elige el voltaje del tubo, el inserto cuya región de interés muestran las lecturas y la ventana de visualización.",
"<strong>CT number to stopping power</strong> shows the two calibration curves, stopping power ratio against CT number, with the reference tissues. The picture is a proton beam line: a slab of the chosen tissue in front of a water tank, and the Bragg peak moved closer by the slab. Measure the range shift gives the slab’s water equivalent thickness. Choose Mystery as the tissue for a tissue you are not told; New mystery gives the next one and Show the answer names it.":
  "<strong>Del número CT al poder de frenado</strong> muestra las dos curvas de calibración, razón de poder de frenado en función del número CT, con los tejidos de referencia. La imagen es una línea de haz de protones: una placa del tejido elegido delante de un tanque de agua, y el pico de Bragg acercado por la placa. Medir el desplazamiento del alcance da el espesor equivalente en agua de la placa. Elige Misterio como tejido para uno que no se te dice; Nuevo misterio da el siguiente y Mostrar la respuesta lo nombra.",
"<strong>Range and margins</strong> plans one proton beam to a target in a patient. The plan reads each tissue’s stopping power off the chosen curve and places the distal edge (R90) at the target’s far side plus the margin. The two error sliders are what is wrong that the planner does not know; Deliver shows where the beam really stops. The graph shows the planned and delivered dose along the beam.":
  "<strong>Alcance y márgenes</strong> planea un haz de protones hacia un blanco en un paciente. El plan lee el poder de frenado de cada tejido en la curva elegida y coloca el borde distal (R90) en el lado lejano del blanco más el margen. Los dos controles de error son lo que está mal sin que el planificador lo sepa; Entregar muestra dónde se detiene realmente el haz. La gráfica muestra la dosis planeada y la entregada a lo largo del haz.",
"Record reading stores the step’s results: every insert of the scan, every reference tissue, the mystery slab, or the plan. Export to worksheet sends each step’s readings to its own Data table. Clear starts a new series.":
  "Registrar lectura guarda los resultados del paso: cada inserto del escaneo, cada tejido de referencia, la placa misteriosa o el plan. Exportar a la hoja envía las lecturas de cada paso a su propia tabla de datos. Borrar empieza una serie nueva.",
"Find how CT number errors, mean excitation energy errors and the calibration method move the range of a proton beam in a patient, and how big a margin they need.":
  "Halla cómo los errores del número CT, los errores de la energía media de excitación y el método de calibración mueven el alcance de un haz de protones en un paciente, y qué tan grande es el margen que necesitan.",
"A proton plan needs the stopping power of every voxel of the patient, but a CT scanner measures X-ray attenuation. The CT number \\(H\\) of a voxel is its linear attenuation coefficient relative to water’s, in Hounsfield units (HU): water reads {#} and air about −{#}. The stopping power of a material for protons of speed \\(\\beta c\\) is, by the Bethe formula,":
  "Un plan de protones necesita el poder de frenado de cada vóxel del paciente, pero un escáner CT mide la atenuación de rayos X. El número CT \\(H\\) de un vóxel es su coeficiente de atenuación lineal relativo al del agua, en unidades Hounsfield (HU): el agua da {#} y el aire cerca de −{#}. El poder de frenado de un material para protones de rapidez \\(\\beta c\\) es, según la fórmula de Bethe,",
"\\[S = C \\frac{\\rho_e}{\\beta^2} L, \\qquad L = \\ln \\frac{2 m_e c^2 \\beta^2 \\gamma^2}{I} - \\beta^2,\\]":
  "\\[S = C \\frac{\\rho_e}{\\beta^2} L, \\qquad L = \\ln \\frac{2 m_e c^2 \\beta^2 \\gamma^2}{I} - \\beta^2,\\]",
"where \\(\\rho_e\\) is the electron density, \\(I\\) the material’s mean excitation energy and \\(C\\) a constant. Relative to water, the stopping power ratio is":
  "donde \\(\\rho_e\\) es la densidad electrónica, \\(I\\) la energía media de excitación del material y \\(C\\) una constante. Relativa al agua, la razón de poder de frenado es",
"\\[\\mathrm{RSP} = \\frac{\\rho_e}{\\rho_{e,w}} \\, \\frac{L}{L_w},\\]":
  "\\[\\mathrm{RSP} = \\frac{\\rho_e}{\\rho_{e,w}} \\, \\frac{L}{L_w},\\]",
"which depends on the elements only through \\(\\ln I\\). A calibration curve turns each CT number into a stopping power ratio. Schneider’s stoichiometric method computes the CT numbers of real tissues from their published compositions and draws the curve through the tissues’ RSP values; the simpler method fits the curve straight through the CT numbers and RSP of tissue substitute plastics, which can miss real tissue badly, most of all bone.":
  "que depende de los elementos solo a través de \\(\\ln I\\). Una curva de calibración convierte cada número CT en una razón de poder de frenado. El método estequiométrico de Schneider calcula los números CT de tejidos reales a partir de sus composiciones publicadas y traza la curva por los valores de RSP de los tejidos; el método más simple ajusta la curva directamente por los números CT y los RSP de plásticos sustitutos de tejido, lo que puede fallar mucho con tejidos reales, sobre todo con el hueso.",
"The proton’s range in the patient is its water equivalent depth. Along a path \\(z\\) through the patient, the water equivalent thickness up to depth \\(z\\) is":
  "El alcance del protón en el paciente es su profundidad equivalente en agua. A lo largo de una trayectoria \\(z\\) a través del paciente, el espesor equivalente en agua hasta la profundidad \\(z\\) es",
"\\[\\mathrm{WET}(z) = \\int_0^z \\mathrm{RSP}(z') \\, \\mathrm{d}z'.\\]":
  "\\[\\mathrm{WET}(z) = \\int_0^z \\mathrm{RSP}(z') \\, \\mathrm{d}z'.\\]",
"A slab of thickness \\(t\\) in front of a water tank moves the Bragg peak closer by its WET, which for a uniform slab is about \\(\\mathrm{RSP} \\times t\\). The plan places the distal R90 (where the dose past the peak falls to {#} %) at a water equivalent depth":
  "Una placa de espesor \\(t\\) delante de un tanque de agua acerca el pico de Bragg en su WET, que para una placa uniforme es aproximadamente \\(\\mathrm{RSP} \\times t\\). El plan coloca el R90 distal (donde la dosis más allá del pico baja al {#} %) a una profundidad equivalente en agua",
"\\[R = \\mathrm{WET}_{plan}(z_{target}) \\, (1 + a) + b,\\]":
  "\\[R = \\mathrm{WET}_{plan}(z_{target}) \\, (1 + a) + b,\\]",
"where \\(z_{target}\\) is the target’s far edge, \\(a\\) a fraction of the range and \\(b\\) a fixed distance. Paganetti (Phys. Med. Biol. {#}, R99, {#}) lists the uncertainties in the range, and the margin {#} % + {#} mm used at many centers; Yang et al. (Phys. Med. Biol. {#}, {#}, {#}) estimate the stoichiometric method’s own share. If the real stopping powers differ from the planned ones, the beam stops at the depth where the real WET reaches \\(R\\), not at the planned one.":
  "donde \\(z_{target}\\) es el borde lejano del blanco, \\(a\\) una fracción del alcance y \\(b\\) una distancia fija. Paganetti (Phys. Med. Biol. {#}, R99, {#}) enumera las incertidumbres del alcance y el margen de {#} % + {#} mm que se usa en muchos centros; Yang et al. (Phys. Med. Biol. {#}, {#}, {#}) estiman la parte que corresponde al propio método estequiométrico. Si los poderes de frenado reales difieren de los planeados, el haz se detiene a la profundidad donde el WET real llega a \\(R\\), no en la planeada.",
"The scanner here is a model, not any one machine, with NIST XCOM attenuation coefficients. The tissue compositions, densities and I values are NIST’s; the pixel noise ({#} HU at {#} kV) and the patients’ tissue layers are the demo’s choices.":
  "El escáner aquí es un modelo, no una máquina en particular, con coeficientes de atenuación NIST XCOM. Las composiciones de los tejidos, las densidades y los valores I son de NIST; el ruido de píxel ({#} HU a {#} kV) y las capas de tejido de los pacientes son elecciones de la demo.",
"Show that \\(\\partial \\ln S / \\partial \\ln I = -1/L\\). Find \\(L\\) for water (\\(I\\) = {#} eV) for {#} MeV protons (\\(m_p c^2\\) = {#} MeV, \\(m_e c^2\\) = {#} MeV). By what percentage does a {#} % error in a tissue’s \\(I\\) change its stopping power?":
  "Muestra que \\(\\partial \\ln S / \\partial \\ln I = -1/L\\). Halla \\(L\\) para el agua (\\(I\\) = {#} eV) para protones de {#} MeV (\\(m_p c^2\\) = {#} MeV, \\(m_e c^2\\) = {#} MeV). ¿En qué porcentaje cambia su poder de frenado un error de {#} % en la \\(I\\) de un tejido?",
"A beam crosses {#} cm of skin (RSP {#}), {#} cm of skull (RSP {#}) and {#} cm of brain (RSP {#}) to the far edge of a target. Find the WET. With a margin of {#} % + {#} mm, where in water equivalent depth does the plan put R90?":
  "Un haz atraviesa {#} cm de piel (RSP {#}), {#} cm de cráneo (RSP {#}) y {#} cm de cerebro (RSP {#}) hasta el borde lejano de un blanco. Halla el WET. Con un margen de {#} % + {#} mm, ¿en qué profundidad equivalente en agua pone el plan el R90?",
"A margin of {#} mm of water equivalent depth lies in inflated lung with RSP {#}. How long is it in the patient?":
  "Un margen de {#} mm de profundidad equivalente en agua cae en pulmón inflado con RSP {#}. ¿Qué longitud tiene en el paciente?",
"Suppose the scanner drifts so that every CT number reads {#} HU high, and two patients are planned on it: the brain plan of Before the lab {#}, whose beam stops in brain, and a lung tumor, whose beam crosses the chest wall and {#} cm of lung to reach the tumor and stops in the lung beyond it. Before you open the demo, decide which plan’s range in the patient moves farther: the brain’s, the lung’s, or about the same for both?":
  "Supón que el escáner se desvía de modo que cada número CT se lee {#} HU más alto, y se planean dos pacientes con él: el plan de cerebro de Antes del laboratorio {#}, cuyo haz se detiene en el cerebro, y un tumor de pulmón, cuyo haz cruza la pared torácica y {#} cm de pulmón para llegar al tumor y se detiene en el pulmón más allá de él. Antes de abrir la demo, decide el alcance en el paciente de qué plan se mueve más: el del cerebro, el del pulmón, o casi lo mismo en ambos.",
"No hazards in the virtual lab. A real CT scan gives the patient a dose of ionizing radiation, which is why the calibration is done on a phantom, never on a person.":
  "No hay peligros en el laboratorio virtual. Una tomografía real da al paciente una dosis de radiación ionizante, por eso la calibración se hace en un maniquí, nunca en una persona.",
"<strong>Part {#}: Range and margins.</strong> Each plan: press Deliver, then Record reading. ({#}) Choose Brain, {#} % + {#} mm (CT number error {#}), deliver and record. Set the CT number error slider to −{#}, −{#}, +{#} and +{#} HU, delivering and recording each. ({#}) Choose Lung tumor and record it at {#} HU; the Lung, CT numbers {#} HU high setup is the +{#} HU point; then set CT number error to −{#}, −{#} and +{#} HU, recording each. ({#}) Choose Prostate through the femoral head and record it (I values off by {#} %). Choose Prostate, tissue I values {#} % low and record it. ({#}) Choose Prostate planned on the substitute curve and record it; then Brain, no margin, and record it. Export the readings to the worksheet.":
  "<strong>Parte {#}: alcance y márgenes.</strong> En cada plan: pulsa Entregar, y luego Registrar lectura. ({#}) Elige Cerebro, {#} % + {#} mm (error del número CT {#}), entrega y registra. Fija el control deslizante Error del número CT en −{#}, −{#}, +{#} y +{#} HU, entregando y registrando cada uno. ({#}) Elige Tumor de pulmón y regístralo a {#} HU; la configuración Pulmón, números CT {#} HU altos es el punto de +{#} HU; luego fija Error del número CT en −{#}, −{#} y +{#} HU, registrando cada uno. ({#}) Elige Próstata a través de la cabeza femoral y regístrala (valores I con {#} % de error). Elige Próstata, valores I del tejido {#} % bajos y regístrala. ({#}) Elige Próstata planeada con la curva de sustitutos y regístrala; luego Cerebro, sin margen, y regístralo. Exporta las lecturas a la hoja.",
"<span>B</span>Plan":
  "<span>B</span>Plan",
"<span>C</span>CT number error (HU)":
  "<span>C</span>Error del número CT (HU)",
"<span>D</span>I value error (%)":
  "<span>D</span>Error del valor I (%)",
"<span>E</span>Margin":
  "<span>E</span>Margen",
"<span>F</span>Target’s far edge (cm)":
  "<span>F</span>Borde lejano del blanco (cm)",
"<span>G</span>Planned R90 (cm of water)":
  "<span>G</span>R90 planeado (cm de agua)",
"<span>H</span>Range error (mm)":
  "<span>H</span>Error del alcance (mm)",
"<span>I</span>Real R90 past the target (mm)":
  "<span>I</span>R90 real más allá del blanco (mm)",
"<span>J</span>Target covered":
  "<span>J</span>Blanco cubierto",
"Plan, row {#}":
  "Plan, fila {#}",
"CT number error (HU), row {#}":
  "Error del número CT (HU), fila {#}",
"I value error (%), row {#}":
  "Error del valor I (%), fila {#}",
"Margin, row {#}":
  "Margen, fila {#}",
"Target’s far edge (cm), row {#}":
  "Borde lejano del blanco (cm), fila {#}",
"Planned R90 (cm of water), row {#}":
  "R90 planeado (cm de agua), fila {#}",
"Range error (mm), row {#}":
  "Error del alcance (mm), fila {#}",
"Real R90 past the target (mm), row {#}":
  "R90 real más allá del blanco (mm), fila {#}",
"Target covered, row {#}":
  "Blanco cubierto, fila {#}",
"Fits of range error against CT number error":
  "Ajustes del error del alcance en función del error del número CT",
"<span>A</span>Patient":
  "<span>A</span>Paciente",
"<span>B</span>Slope (mm per HU)":
  "<span>B</span>Pendiente (mm por HU)",
"<span>C</span>Slope’s standard error":
  "<span>C</span>Error estándar de la pendiente",
"<span>D</span>Intercept (mm)":
  "<span>D</span>Ordenada al origen (mm)",
"Patient, row {#}":
  "Paciente, fila {#}",
"Slope (mm per HU), row {#}":
  "Pendiente (mm por HU), fila {#}",
"Slope’s standard error, row {#}":
  "Error estándar de la pendiente, fila {#}",
"Intercept (mm), row {#}":
  "Ordenada al origen (mm), fila {#}",
"Range uncertainty budget":
  "Presupuesto de incertidumbre del alcance",
"<span>A</span>Source (Paganetti {#})":
  "<span>A</span>Fuente (Paganetti {#})",
"<span>B</span>Uncertainty":
  "<span>B</span>Incertidumbre",
"<span>C</span>Your squared term":
  "<span>C</span>Tu término al cuadrado",
"Source (Paganetti {#}), row {#}":
  "Fuente (Paganetti {#}), fila {#}",
"Uncertainty, row {#}":
  "Incertidumbre, fila {#}",
"Your squared term, row {#}":
  "Tu término al cuadrado, fila {#}",
"Graph the range error against the CT number error for the brain and for the lung, and fit each with a straight line (with an intercept). Fill in the fits table. Predict the brain’s slope: a CT number error changes the stopping power ratio of soft tissue by about \\(6 \\times 10^{-4}\\) per HU (the slope of the stoichiometric curve there), so the plan’s water equivalent depth changes by that times the WET of the skin and brain from Before the lab {#}, times the margin’s factor {#}; divide by the RSP where the beam stops to get millimeters in the patient, and compare with your fit.":
  "Grafica el error de alcance en función del error del número CT para el cerebro y para el pulmón, y ajusta cada uno con una línea recta (con ordenada al origen). Llena la tabla de ajustes. Predice la pendiente del cerebro: un error del número CT cambia la razón de poder de frenado del tejido blando en cerca de \\(6 \\times 10^{-4}\\) por HU (la pendiente de la curva estequiométrica ahí), así que la profundidad equivalente en agua del plan cambia en eso por la WET de la piel y el cerebro de Antes del laboratorio {#}, por el factor {#} del margen; divide entre la RSP donde se detiene el haz para obtener milímetros en el paciente, y compara con tu ajuste.",
"Compare the prostate on the substitute curve with the margin. Would a margin of {#} % + {#} mm protect against using the wrong calibration method? Look at Brain, no margin: by how much is the target missed, and why is no margin at all never used?":
  "Compara la próstata en la curva de sustitutos con el margen. ¿Protegería un margen de {#} % + {#} mm contra usar el método de calibración equivocado? Mira Cerebro, sin margen: ¿por cuánto se falla el blanco, y por qué nunca se usa un margen nulo?",
"Fill in the budget table from the Range uncertainty budget (Paganetti {#}) table in the demo’s Lab fold (each line is one standard deviation), and combine the percentage terms in quadrature, with and without the term for local lateral inhomogeneities. Multiply by {#} to give the totals at {#} standard deviations, as Paganetti does, and compare with {#} % + {#} mm. Which of the errors you measured in Part {#} (the CT number error, the {#} % low I value reading and the substitute curve) are in the budget, and which would a margin never be meant to cover?":
  "Llena la tabla del presupuesto a partir de la tabla Presupuesto de incertidumbre del alcance (Paganetti {#}) en el pliegue Laboratorio de la demo (cada línea es una desviación estándar), y combina los términos porcentuales en cuadratura, con y sin el término de inhomogeneidades laterales locales. Multiplica por {#} para dar los totales a {#} desviaciones estándar, como hace Paganetti, y compara con {#} % + {#} mm. ¿Cuáles de los errores que mediste en la Parte {#} (el error del número CT, la lectura con el valor I {#} % bajo y la curva de sustitutos) están en el presupuesto, y cuáles nunca estaría pensado un margen para cubrir?",
"The fits use equal weights, so their standard errors come from the scatter of the points about the line; the range error against the CT number error is not exactly linear in lung, so look at the residuals before quoting a slope. The demo’s patients are sketched layers of tissue, so compare patterns, not absolute millimeters, with a real plan. Paganetti puts the I values at ±{#} % in range.":
  "Los ajustes usan pesos iguales, así que sus errores estándar vienen de la dispersión de los puntos alrededor de la recta; el error de alcance en función del error del número CT no es exactamente lineal en el pulmón, así que mira los residuos antes de dar una pendiente. Los pacientes de la demo son capas de tejido esquematizadas, así que compara patrones, no milímetros absolutos, con un plan real. Paganetti pone los valores I en ±{#} % en alcance.",
"The margin {#} % + {#} mm has a part that grows with the range and a part of fixed size. Using the budget table you filled in, name two sources of uncertainty for each part and say why each belongs there.":
  "El margen de {#} % + {#} mm tiene una parte que crece con el alcance y una parte de tamaño fijo. Con la tabla del presupuesto que llenaste, nombra dos fuentes de incertidumbre para cada parte y di por qué cada una pertenece ahí.",
"Look back at Before the lab {#}. From your two slopes in the fits table, how far does a {#} HU error move each patient’s range? Explain the difference: how steep is the stoichiometric curve in lung compared with soft tissue, where does the lung beam stop, and what is the stopping power ratio there?":
  "Mira de nuevo Antes del laboratorio {#}. A partir de tus dos pendientes de la tabla de ajustes, ¿cuánto mueve un error de {#} HU el alcance de cada paciente? Explica la diferencia: ¿qué tan empinada es la curva estequiométrica en el pulmón comparada con el tejido blando, dónde se detiene el haz en el pulmón, y cuál es la razón de poder de frenado ahí?",
"Prelab answers, the tables with their graphs and fits, the range error slopes with uncertainties and your prediction, the budget, and answers to the questions. Identify simulated data.":
  "Respuestas de la tarea previa, las tablas con sus gráficas y ajustes, las pendientes del error de alcance con sus incertidumbres y tu predicción, el presupuesto y las respuestas a las preguntas. Identifica los datos simulados.",
"Constant of the Bethe formula":
  "Constante de la fórmula de Bethe",
"CT number, the linear attenuation coefficient relative to water's":
  "Número CT, el coeficiente de atenuación lineal relativo al del agua",
"water {#}, air about −{#}":
  "agua {#}, aire alrededor de −{#}",
"Mean excitation energy of the material":
  "Energía media de excitación del material",
"Stopping number of the material in the Bethe formula":
  "Número de frenado del material en la fórmula de Bethe",
"Stopping number of water":
  "Número de frenado del agua",
"Water equivalent depth at which the plan places the distal R90":
  "Profundidad equivalente en agua en la que el plan coloca el R90 distal",
"Stopping power of the material for the protons":
  "Poder de frenado del material para los protones",
"Fraction of the range added as margin":
  "Fracción del alcance agregada como margen",
"{#} % in the usual margin":
  "{#} % en el margen usual",
"Fixed distance added as margin":
  "Distancia fija agregada como margen",
"{#} mm in the usual margin":
  "{#} mm en el margen usual",
"Speed of the protons as a fraction of the speed of light":
  "Rapidez de los protones como fracción de la rapidez de la luz",
"Lorentz factor of the protons, {#}/√({#} − β²)":
  "Factor de Lorentz de los protones, {#}/√({#} − β²)",
"Proton mass":
  "Masa del protón",
"{#} × {#}⁻²⁷ kg (CODATA {#})":
  "{#} × {#}⁻²⁷ kg (CODATA {#})",
"Electron density of the material, relative to water in the tables":
  "Densidad electrónica del material, relativa al agua en las tablas",
"Electron density of water":
  "Densidad electrónica del agua",
"Thickness of the slab":
  "Espesor de la placa",
"Depth along the beam's path through the patient":
  "Profundidad a lo largo de la trayectoria del haz a través del paciente",
"Depth along the path, the variable of integration":
  "Profundidad a lo largo de la trayectoria, la variable de integración",
"Depth of the target's far edge along the path":
  "Profundidad del borde lejano del blanco a lo largo de la trayectoria",
"CT Numbers and Proton Range":
  "Números CT y alcance de protones",
"Graph the range error against the CT number error for the brain and for the lung, and fit each with a straight line (with an intercept). Fill in the fits table. Predict the brain’s slope: a CT number error changes the stopping power ratio of soft tissue by about \\(6 \\times 10^{-4}\\) per HU (the slope of the stoichiometric curve there), so the plan’s water equivalent depth changes by that times the WET of the skin and brain from Before the lab {#}, times the margin’s factor {#}; divide by the RSP where the beam stops to get millimeters in the patient, and compare with your fit. Why is the lung’s slope so much larger? (Where does the lung beam stop, and what is the stopping power ratio there?)":
  "Grafica el error de alcance en función del error del número CT para el cerebro y para el pulmón, y ajusta cada uno con una recta (con ordenada al origen). Llena la tabla de ajustes. Predice la pendiente del cerebro: un error del número CT cambia la razón de poder de frenado del tejido blando en cerca de \\(6 \\times 10^{-4}\\) por HU (la pendiente de la curva estequiométrica ahí), así que la profundidad equivalente en agua del plan cambia en eso por la WET de la piel y el cerebro de Antes del laboratorio {#}, por el factor del margen {#}; divide entre el RSP donde se detiene el haz para obtener milímetros en el paciente, y compara con tu ajuste. ¿Por qué la pendiente del pulmón es mucho mayor? (¿Dónde se detiene el haz en el pulmón, y cuál es la razón de poder de frenado ahí?)",
"Prelab answers, the tables with their graphs and fits, the range error slopes with uncertainties and your prediction, the budget, and the answer to the question. Identify simulated data.":
  "Respuestas del prelaboratorio, las tablas con sus gráficas y ajustes, las pendientes del error de alcance con sus incertidumbres y tu predicción, el presupuesto de errores, y la respuesta a la pregunta. Identifica los datos simulados.",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>"
});
