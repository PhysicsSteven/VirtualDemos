/* ws/mp-ct-range in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/mp-ct-range', {
"Insert":
  "Inserto",
"ρ_e (relative to water)":
  "ρ_e (relativa al agua)",
"H (HU)":
  "H (HU)",
"Pixel SD (HU)":
  "DE de los píxeles (HU)",
"Fitted H (HU)":
  "H ajustado (HU)",
"{#}(ρ_e - {#}) (HU)":
  "{#}(ρ_e - {#}) (HU)",
"Tissue":
  "Tejido",
"RSP (Bethe)":
  "RSP (Bethe)",
"RSP, stoichiometric curve":
  "RSP, curva estequiométrica",
"RSP, substitute curve":
  "RSP, curva de sustitutos",
"Stoichiometric error (%)":
  "Error estequiométrico (%)",
"Substitute error (%)":
  "Error de sustitutos (%)",
"Mystery":
  "Misterio",
"Slab t (cm)":
  "Placa t (cm)",
"Range shift (mm)":
  "Desplazamiento del alcance (mm)",
"RSP measured":
  "RSP medida",
"RSP from the curve":
  "RSP de la curva",
"Curve against measured (%)":
  "Curva contra medida (%)",
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
"Mean RSP slope of the curve there (per HU)":
  "Pendiente media de RSP de la curva ahí (por HU)",
"Source (Paganetti {#})":
  "Fuente (Paganetti {#})",
"Your squared term":
  "Tu término al cuadrado",
"CT Numbers and Proton Range: Calibration, Stopping Power and Margins | VirtualDemos":
  "Números CT y alcance de protones: calibración, poder de frenado y márgenes | VirtualDemos",
"CT Numbers and Proton Range: Calibration, Stopping Power and Margins":
  "Números CT y alcance de protones: calibración, poder de frenado y márgenes",
"<strong>Setups in the demo:</strong> Calibration scan, {#} kV; Same phantom, {#} kV; Both curves; Bone on the substitute curve; Substitute curve without Teflon; Mystery tissue; Brain, {#} % + {#} mm; Prostate through the femoral head; Lung tumor; Lung, CT numbers {#} HU high; Prostate, tissue I values {#} % low; Prostate planned on the substitute curve; Brain, no margin. This worksheet uses all of them.":
  "<strong>Configuraciones en la demo:</strong> Escaneo de calibración, {#} kV; Mismo maniquí, {#} kV; Ambas curvas; Hueso en la curva de sustitutos; Curva de sustitutos sin teflón; Tejido misterioso; Cerebro, {#} % + {#} mm; Próstata a través de la cabeza femoral; Tumor de pulmón; Pulmón, números CT {#} HU altos; Próstata, valores I del tejido {#} % bajos; Próstata planeada con la curva de sustitutos; Cerebro, sin margen. Esta hoja de trabajo las usa todas.",
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
"Calibrate a CT scanner for proton planning with the stoichiometric method; measure how far a calibration built straight from tissue substitute plastics misses real tissue; test the calibration with a mystery tissue in a proton beam; and find how CT number errors, mean excitation energy errors and the calibration method move the range in a patient, and how big a margin they need.":
  "Calibra un tomógrafo para la planeación con protones con el método estequiométrico; mide cuánto falla en tejido real una calibración construida directamente con plásticos sustitutos de tejido; pon a prueba la calibración con un tejido misterioso en un haz de protones; y encuentra cómo los errores del número CT, los errores de la energía media de excitación y el método de calibración mueven el alcance en un paciente, y qué tan grande debe ser el margen que necesitan.",
"A proton plan needs the stopping power of every voxel of the patient, but a CT scanner measures X-ray attenuation. The CT number of a voxel is its linear attenuation coefficient relative to water’s,":
  "Un plan con protones necesita el poder de frenado de cada vóxel del paciente, pero un tomógrafo mide la atenuación de rayos X. El número CT de un vóxel es su coeficiente de atenuación lineal relativo al del agua,",
"\\[H = 1000 \\left( \\frac{\\mu}{\\mu_w} - 1 \\right),\\]":
  "\\[H = 1000 \\left( \\frac{\\mu}{\\mu_w} - 1 \\right),\\]",
"in Hounsfield units (HU): water reads {#} and air about −{#}. At CT energies (a tube voltage of {#} to {#} kV, mean detected photon energies of {#} to {#} keV) a material’s attenuation per unit volume is a sum over its elements,":
  "en unidades Hounsfield (HU): el agua da {#} y el aire alrededor de −{#}. A las energías de CT (un voltaje del tubo de {#} a {#} kV, energías medias de los fotones detectados de {#} a {#} keV) la atenuación de un material por unidad de volumen es una suma sobre sus elementos,",
"\\[\\mu = \\rho N_A \\sum_i \\frac{w_i}{A_i} \\left( Z_i K_{KN} + Z_i^{2.86} K_{coh} + Z_i^{4.62} K_{ph} \\right),\\]":
  "\\[\\mu = \\rho N_A \\sum_i \\frac{w_i}{A_i} \\left( Z_i K_{KN} + Z_i^{2.86} K_{coh} + Z_i^{4.62} K_{ph} \\right),\\]",
"where \\(w_i\\) is the fraction by weight of element \\(i\\), \\(Z_i\\) and \\(A_i\\) its atomic number and molar mass, and the three terms are Compton scattering (Klein–Nishina, per electron), coherent scattering and the photoelectric effect, with constants \\(K\\) that belong to the scanner’s spectrum (Schneider, Pedroni and Lomax, Phys. Med. Biol. {#}, {#}, {#}). The Compton term is proportional to the electron density; the photoelectric term grows steeply with \\(Z\\). Relative to water only the ratios \\(k_{coh} = K_{coh}/K_{KN}\\) and \\(k_{ph} = K_{ph}/K_{KN}\\) remain.":
  "donde \\(w_i\\) es la fracción en peso del elemento \\(i\\), \\(Z_i\\) y \\(A_i\\) su número atómico y su masa molar, y los tres términos son la dispersión de Compton (Klein–Nishina, por electrón), la dispersión coherente y el efecto fotoeléctrico, con constantes \\(K\\) que pertenecen al espectro del tomógrafo (Schneider, Pedroni y Lomax, Phys. Med. Biol. {#}, {#}, {#}). El término de Compton es proporcional a la densidad electrónica; el término fotoeléctrico crece abruptamente con \\(Z\\). Relativo al agua solo quedan los cocientes \\(k_{coh} = K_{coh}/K_{KN}\\) y \\(k_{ph} = K_{ph}/K_{KN}\\).",
"The stopping power of a material for protons of speed \\(\\beta c\\) is, by the Bethe formula,":
  "El poder de frenado de un material para protones de rapidez \\(\\beta c\\) es, por la fórmula de Bethe,",
"\\[S = C \\frac{\\rho_e}{\\beta^2} L, \\qquad L = \\ln \\frac{2 m_e c^2 \\beta^2 \\gamma^2}{I} - \\beta^2,\\]":
  "\\[S = C \\frac{\\rho_e}{\\beta^2} L, \\qquad L = \\ln \\frac{2 m_e c^2 \\beta^2 \\gamma^2}{I} - \\beta^2,\\]",
"where \\(\\rho_e\\) is the electron density, \\(I\\) the material’s mean excitation energy and \\(C\\) a constant. Relative to water, the stopping power ratio is":
  "donde \\(\\rho_e\\) es la densidad electrónica, \\(I\\) la energía media de excitación del material y \\(C\\) una constante. Relativa al agua, la razón de poder de frenado es",
"\\[\\mathrm{RSP} = \\frac{\\rho_e}{\\rho_{e,w}} \\, \\frac{L}{L_w},\\]":
  "\\[\\mathrm{RSP} = \\frac{\\rho_e}{\\rho_{e,w}} \\, \\frac{L}{L_w},\\]",
"which depends on the elements only through \\(\\ln I\\). A CT number and a stopping power ratio both depend on electron density, but the photoelectric effect makes the CT number depend on the elements far more strongly. No single curve holds for every material.":
  "que depende de los elementos solo a través de \\(\\ln I\\). Un número CT y una razón de poder de frenado dependen ambos de la densidad electrónica, pero el efecto fotoeléctrico hace que el número CT dependa de los elementos mucho más fuertemente. Ninguna curva única sirve para todos los materiales.",
"Schneider’s stoichiometric method scans plastics of known composition, fits \\(k_{coh}\\) and \\(k_{ph}\\) to their measured CT numbers, and then computes the CT numbers of real tissues from their published compositions (the ICRP and ICRU tissues). Each tissue gives one point (its computed \\(H\\), its RSP from the Bethe formula), and the curve through those points is the calibration. The simpler method fits the curve straight through the plastics’ own measured \\(H\\) and RSP.":
  "El método estequiométrico de Schneider escanea plásticos de composición conocida, ajusta \\(k_{coh}\\) y \\(k_{ph}\\) a sus números CT medidos y luego calcula los números CT de tejidos reales a partir de sus composiciones publicadas (los tejidos de la ICRP y la ICRU). Cada tejido da un punto (su \\(H\\) calculado, su RSP por la fórmula de Bethe), y la curva que pasa por esos puntos es la calibración. El método más sencillo ajusta la curva directamente a los \\(H\\) y RSP medidos de los propios plásticos.",
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
"The scanner here is a model, not any one machine: a tungsten tube spectrum (SpekPy) through {#} mm of aluminum, hardened by {#} cm of water, with NIST XCOM attenuation coefficients. The tissue compositions, densities and I values are NIST’s; the pixel noise ({#} HU at {#} kV), the reading noise of the range shift ({#} mm) and the patients’ tissue layers are the demo’s choices.":
  "Aquí el tomógrafo es un modelo, no una máquina en particular: un espectro de tubo de tungsteno (SpekPy) a través de {#} mm de aluminio, endurecido por {#} cm de agua, con coeficientes de atenuación de NIST XCOM. Las composiciones, densidades y valores I de los tejidos son los de NIST; el ruido de los píxeles ({#} HU a {#} kV), el ruido de lectura del desplazamiento del alcance ({#} mm) y las capas de tejido de los pacientes son elecciones de la demo.",
"Show that a material whose attenuation per electron equals water’s has \\(H = 1000 (\\rho_e/\\rho_{e,w} - 1)\\). Where on a graph of \\(H\\) against \\(\\rho_e\\) should a material rich in hydrogen fall, and one with calcium?":
  "Muestra que un material cuya atenuación por electrón es igual a la del agua tiene \\(H = 1000 (\\rho_e/\\rho_{e,w} - 1)\\). ¿Dónde debería quedar, en una gráfica de \\(H\\) en función de \\(\\rho_e\\), un material rico en hidrógeno, y uno con calcio?",
"Show that \\(\\partial \\ln S / \\partial \\ln I = -1/L\\). Find \\(L\\) for water (\\(I\\) = {#} eV) for {#} MeV protons (\\(m_p c^2\\) = {#} MeV, \\(m_e c^2\\) = {#} MeV). By what percentage does a {#} % error in a tissue’s \\(I\\) change its stopping power?":
  "Muestra que \\(\\partial \\ln S / \\partial \\ln I = -1/L\\). Halla \\(L\\) para el agua (\\(I\\) = {#} eV) para protones de {#} MeV (\\(m_p c^2\\) = {#} MeV, \\(m_e c^2\\) = {#} MeV). ¿En qué porcentaje cambia su poder de frenado un error de {#} % en la \\(I\\) de un tejido?",
"A beam crosses {#} cm of skin (RSP {#}), {#} cm of skull (RSP {#}) and {#} cm of brain (RSP {#}) to the far edge of a target. Find the WET. With a margin of {#} % + {#} mm, where in water equivalent depth does the plan put R90?":
  "Un haz atraviesa {#} cm de piel (RSP {#}), {#} cm de cráneo (RSP {#}) y {#} cm de cerebro (RSP {#}) hasta el borde lejano de un blanco. Halla el WET. Con un margen de {#} % + {#} mm, ¿en qué profundidad equivalente en agua pone el plan el R90?",
"A margin of {#} mm of water equivalent depth lies in inflated lung with RSP {#}. How long is it in the patient?":
  "Un margen de {#} mm de profundidad equivalente en agua cae en pulmón inflado con RSP {#}. ¿Qué longitud tiene en el paciente?",
"Independent uncertainties add in quadrature. Combine {#} %, {#} %, {#} % and {#} % (Paganetti’s CT imaging and calibration, CT conversion, CT grid and I values).":
  "Las incertidumbres independientes se suman en cuadratura. Combina {#} %, {#} %, {#} % y {#} % (imagen y calibración de CT, conversión de CT, rejilla de CT y valores I, según Paganetti).",
"No hazards in the virtual lab. A real CT scan gives the patient a dose of ionizing radiation, which is why the calibration is done on a phantom, never on a person.":
  "No hay peligros en el laboratorio virtual. Una tomografía real da al paciente una dosis de radiación ionizante, por eso la calibración se hace en un maniquí, nunca en una persona.",
"<strong>Part {#}: The calibration scan.</strong> Choose Calibration scan, {#} kV. Scan the phantom and record the reading (all nine regions). Scan again and record it, then choose Same phantom, {#} kV, scan and record. Send the readings to the worksheet before you clear them.":
  "<strong>Parte {#}: El escaneo de calibración.</strong> Elige Escaneo de calibración, {#} kV. Escanea el maniquí y registra la lectura (las nueve regiones). Escanea de nuevo y regístrala; luego elige Mismo maniquí, {#} kV, escanea y registra. Envía las lecturas a la hoja de trabajo antes de borrarlas.",
"<strong>Part {#}: The two curves.</strong> Choose Both curves and record the reading (all eighteen reference tissues). Choose Bone on the substitute curve and read the two curves’ values for cortical bone. Then choose Substitute curve without Teflon and record the reading. Send the readings to the worksheet before you clear them.":
  "<strong>Parte {#}: Las dos curvas.</strong> Elige Ambas curvas y registra la lectura (los dieciocho tejidos de referencia). Elige Hueso en la curva de sustitutos y lee los valores de las dos curvas para el hueso cortical. Luego elige Curva de sustitutos sin teflón y registra la lectura. Envía las lecturas a la hoja de trabajo antes de borrarlas.",
"<strong>Part {#}: The mystery tissue.</strong> Choose Mystery tissue (a {#} cm slab). Measure the range shift and record the reading. Repeat with the slab at {#} cm and at {#} cm. Then go to the next mystery, measure and record it at {#} cm, and do the same for each of the five mysteries. Send the readings to the worksheet.":
  "<strong>Parte {#}: El tejido misterioso.</strong> Elige Tejido misterioso (una placa de {#} cm). Mide el desplazamiento del alcance y registra la lectura. Repite con la placa a {#} cm y a {#} cm. Luego pasa al siguiente misterio, mídelo y regístralo a {#} cm, y haz lo mismo con cada uno de los cinco misterios. Envía las lecturas a la hoja de trabajo.",
"<strong>Part {#}: Range and margins.</strong> Choose Brain, {#} % + {#} mm, deliver and record. Set the CT number error to −{#}, −{#}, +{#} and +{#} HU, recording each. Choose Lung tumor and do the same, starting from Lung, CT numbers {#} HU high for +{#} HU. Choose Prostate through the femoral head and record it, then Prostate, tissue I values {#} % low; set the I value error to −{#}, +{#} and +{#} %, recording each. Then choose Prostate planned on the substitute curve and Brain, no margin, and record each. Send the readings to the worksheet.":
  "<strong>Parte {#}: Alcance y márgenes.</strong> Elige Cerebro, {#} % + {#} mm, entrega y registra. Fija el error del número CT en −{#}, −{#}, +{#} y +{#} HU, registrando cada uno. Elige Tumor de pulmón y haz lo mismo, empezando por Pulmón, números CT {#} HU altos para +{#} HU. Elige Próstata a través de la cabeza femoral y regístrala; luego Próstata, valores I del tejido {#} % bajos; fija el error del valor I en −{#}, +{#} y +{#} %, registrando cada uno. Luego elige Próstata planeada con la curva de sustitutos y Cerebro, sin margen, y registra cada uno. Envía las lecturas a la hoja de trabajo.",
"<span>B</span>Scan":
  "<span>B</span>Escaneo",
"<span>C</span>Insert":
  "<span>C</span>Inserto",
"<span>D</span>\\(\\rho_e\\) (relative to water)":
  "<span>D</span>\\(\\rho_e\\) (relativa al agua)",
"<span>E</span>\\(H\\) (HU)":
  "<span>E</span>\\(H\\) (HU)",
"<span>F</span>Pixel SD (HU)":
  "<span>F</span>DE de los píxeles (HU)",
"<span>G</span>Fitted \\(H\\) (HU)":
  "<span>G</span>\\(H\\) ajustado (HU)",
"<span>H</span>\\(1000(\\rho_e - 1)\\) (HU)":
  "<span>H</span>\\(1000(\\rho_e - 1)\\) (HU)",
"Insert, row {#}":
  "Inserto, fila {#}",
"ρ_e (relative to water), row {#}":
  "ρ_e (relativa al agua), fila {#}",
"H (HU), row {#}":
  "H (HU), fila {#}",
"Pixel SD (HU), row {#}":
  "DE de los píxeles (HU), fila {#}",
"Fitted H (HU), row {#}":
  "H ajustado (HU), fila {#}",
"{#}(ρ_e - {#}) (HU), row {#}":
  "{#}(ρ_e - {#}) (HU), fila {#}",
"<span>B</span>Tissue":
  "<span>B</span>Tejido",
"<span>C</span>\\(H\\) (HU)":
  "<span>C</span>\\(H\\) (HU)",
"<span>D</span>\\(\\rho_e\\)":
  "<span>D</span>\\(\\rho_e\\)",
"<span>F</span>RSP (Bethe)":
  "<span>F</span>RSP (Bethe)",
"<span>G</span>RSP, stoichiometric curve":
  "<span>G</span>RSP, curva estequiométrica",
"<span>H</span>RSP, substitute curve":
  "<span>H</span>RSP, curva de sustitutos",
"<span>I</span>Stoichiometric error (%)":
  "<span>I</span>Error estequiométrico (%)",
"<span>J</span>Substitute error (%)":
  "<span>J</span>Error de sustitutos (%)",
"Tissue, row {#}":
  "Tejido, fila {#}",
"ρ_e, row {#}":
  "ρ_e, fila {#}",
"I (eV), row {#}":
  "I (eV), fila {#}",
"RSP (Bethe), row {#}":
  "RSP (Bethe), fila {#}",
"RSP, stoichiometric curve, row {#}":
  "RSP, curva estequiométrica, fila {#}",
"RSP, substitute curve, row {#}":
  "RSP, curva de sustitutos, fila {#}",
"Stoichiometric error (%), row {#}":
  "Error estequiométrico (%), fila {#}",
"Substitute error (%), row {#}":
  "Error de sustitutos (%), fila {#}",
"<span>B</span>Mystery":
  "<span>B</span>Misterio",
"<span>D</span>Slab \\(t\\) (cm)":
  "<span>D</span>Placa \\(t\\) (cm)",
"<span>E</span>Range shift (mm)":
  "<span>E</span>Desplazamiento del alcance (mm)",
"<span>F</span>RSP measured":
  "<span>F</span>RSP medida",
"<span>G</span>RSP from the curve":
  "<span>G</span>RSP de la curva",
"<span>H</span>Curve against measured (%)":
  "<span>H</span>Curva contra medida (%)",
"Mystery, row {#}":
  "Misterio, fila {#}",
"Slab t (cm), row {#}":
  "Placa t (cm), fila {#}",
"Range shift (mm), row {#}":
  "Desplazamiento del alcance (mm), fila {#}",
"RSP measured, row {#}":
  "RSP medida, fila {#}",
"RSP from the curve, row {#}":
  "RSP de la curva, fila {#}",
"Curve against measured (%), row {#}":
  "Curva contra medida (%), fila {#}",
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
"<span>E</span>Mean RSP slope of the curve there (per HU)":
  "<span>E</span>Pendiente media de RSP de la curva ahí (por HU)",
"Patient, row {#}":
  "Paciente, fila {#}",
"Slope (mm per HU), row {#}":
  "Pendiente (mm por HU), fila {#}",
"Slope’s standard error, row {#}":
  "Error estándar de la pendiente, fila {#}",
"Intercept (mm), row {#}":
  "Ordenada al origen (mm), fila {#}",
"Mean RSP slope of the curve there (per HU), row {#}":
  "Pendiente media de RSP de la curva ahí (por HU), fila {#}",
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
"From the {#} kV scan, fill in the last column of the first table. Graph \\(H\\) against \\(\\rho_e\\) for the plastics and water (leave out air). Fit a straight line (with an intercept), and look at the residuals: which inserts sit far from it, and on which side? Explain each from its elements. Compare the {#} kV scan: which inserts moved, and by how much?":
  "Con el escaneo a {#} kV, llena la última columna de la primera tabla. Grafica \\(H\\) en función de \\(\\rho_e\\) para los plásticos y el agua (deja fuera el aire). Ajusta una recta (con ordenada al origen) y mira los residuos: ¿qué insertos quedan lejos de ella, y de qué lado? Explica cada uno a partir de sus elementos. Compara con el escaneo a {#} kV: ¿qué insertos se movieron, y cuánto?",
"The fitted \\(k_{coh}\\) and \\(k_{ph}\\) are in the readouts. Explain why \\(H\\) is linear in \\(k_{coh}\\) and \\(k_{ph}\\) once the compositions are known, so that the fit is a linear least squares problem. How well does the fit reproduce the inserts (compare the measured and fitted columns)?":
  "Los \\(k_{coh}\\) y \\(k_{ph}\\) ajustados están en las lecturas. Explica por qué \\(H\\) es lineal en \\(k_{coh}\\) y \\(k_{ph}\\) una vez que se conocen las composiciones, de modo que el ajuste es un problema de mínimos cuadrados lineal. ¿Qué tan bien reproduce el ajuste los insertos (compara las columnas medida y ajustada)?",
"From the second table, compute each tissue’s error on each curve, {#} (RSP from the curve / RSP − {#}). Which tissues does the stoichiometric curve miss by more than {#} %? How large is the substitute curve’s error for cortical bone, with and without Teflon? Explain why Teflon matters so much.":
  "Con la segunda tabla, calcula el error de cada tejido en cada curva, {#} (RSP de la curva / RSP − {#}). ¿Qué tejidos falla la curva estequiométrica por más de {#} %? ¿Qué tan grande es el error de la curva de sustitutos para el hueso cortical, con y sin teflón? Explica por qué el teflón importa tanto.",
"Graph the stoichiometric curve’s RSP against \\(H\\) for the soft tissues (adipose to skin) and fit a straight line (with an intercept). Give the slope per HU with its standard error: the change in the planned stopping power ratio for a {#} HU error in soft tissue. Do the same for the tissues’ own RSP (Bethe), and explain why the two slopes differ.":
  "Grafica la RSP de la curva estequiométrica en función de \\(H\\) para los tejidos blandos (de adiposo a piel) y ajusta una recta (con ordenada al origen). Da la pendiente por HU con su error estándar: el cambio en la razón de poder de frenado planeada por un error de {#} HU en tejido blando. Haz lo mismo para la RSP propia de los tejidos (Bethe), y explica por qué las dos pendientes difieren.",
"From the third table, compute each slab’s RSP from its range shift, and its uncertainty from the {#} mm reading noise. Does the measured RSP depend on the slab thickness? Which mysteries sit off the curve by more than their uncertainty? Press Show the answer for each, and explain the largest miss from the tissue’s composition.":
  "Con la tercera tabla, calcula la RSP de cada placa a partir de su desplazamiento del alcance, y su incertidumbre a partir del ruido de lectura de {#} mm. ¿Depende la RSP medida del espesor de la placa? ¿Qué misterios quedan fuera de la curva por más que su incertidumbre? Pulsa Mostrar la respuesta en cada uno, y explica la mayor desviación a partir de la composición del tejido.",
"Graph the range error against the CT number error for the brain and for the lung, and fit each with a straight line (with an intercept). Fill in the fits table. Predict the brain’s slope from Analysis {#} and the length of tissue the beam crosses, \\(\\Delta R \\approx \\Delta H \\, (\\mathrm{d}\\,\\mathrm{RSP}/\\mathrm{d}H) \\, z\\), and compare. Why is the lung’s slope so much larger? (Where does the lung beam stop, and what is the stopping power ratio there?)":
  "Grafica el error del alcance en función del error del número CT para el cerebro y para el pulmón, y ajusta cada uno con una recta (con ordenada al origen). Llena la tabla de ajustes. Predice la pendiente del cerebro a partir del Análisis {#} y de la longitud de tejido que atraviesa el haz, \\(\\Delta R \\approx \\Delta H \\, (\\mathrm{d}\\,\\mathrm{RSP}/\\mathrm{d}H) \\, z\\), y compara. ¿Por qué la pendiente del pulmón es mucho mayor? (¿Dónde se detiene el haz del pulmón, y cuál es ahí la razón de poder de frenado?)",
"From the prostate readings, graph the range error against the I value error and fit a straight line. From prelab {#}, predict the slope from the prostate’s WET of about {#} cm, and compare.":
  "Con las lecturas de la próstata, grafica el error del alcance en función del error del valor I y ajusta una recta. A partir del prelaboratorio {#}, predice la pendiente con el WET de la próstata de unos {#} cm, y compara.",
"Compare the prostate on the substitute curve with the margin. Would a margin of {#} % + {#} mm protect against using the wrong calibration method? Look at Brain, no margin: by how much is the target missed, and why is no margin at all never used?":
  "Compara la próstata en la curva de sustitutos con el margen. ¿Protegería un margen de {#} % + {#} mm contra usar el método de calibración equivocado? Mira Cerebro, sin margen: ¿por cuánto se falla el blanco, y por qué nunca se usa un margen nulo?",
"Fill in the budget table from the table in the demo’s Lab section, at {#} standard deviations, and combine the percentage terms in quadrature, with and without the term for complex lateral inhomogeneities. Compare with {#} %. Which of the errors you measured in Parts {#} to {#} are in the budget, and which would a margin never be meant to cover?":
  "Llena la tabla del presupuesto con la tabla de la sección Laboratorio de la demo, a {#} desviaciones estándar, y combina los términos porcentuales en cuadratura, con y sin el término de las heterogeneidades laterales complejas. Compara con {#} %. ¿Cuáles de los errores que mediste en las Partes {#} a {#} están en el presupuesto, y cuáles nunca debería cubrir un margen?",
"The pixel noise ({#} HU at {#} kV) averages down over each {#} pixel region to about {#} HU, so two scans differ by about a HU; compare the two {#} kV scans to see it. The slab’s RSP has an uncertainty of {#} mm divided by the slab thickness. The fits use equal weights, so their standard errors come from the scatter of the points about the line; the range error against the CT number error is not exactly linear in lung, so look at the residuals before quoting a slope. The tissues’ compositions and I values are tabulated values with their own uncertainty, which the demo does not add; Paganetti puts the I values at ±{#} % in range.":
  "El ruido de los píxeles ({#} HU a {#} kV) se reduce al promediar sobre cada región de {#} píxeles hasta unos {#} HU, así que dos escaneos difieren en cerca de un HU; compara los dos escaneos a {#} kV para verlo. La RSP de la placa tiene una incertidumbre de {#} mm dividida entre el espesor de la placa. Los ajustes usan pesos iguales, así que sus errores estándar vienen de la dispersión de los puntos alrededor de la recta; el error del alcance en función del error del número CT no es exactamente lineal en el pulmón, así que mira los residuos antes de reportar una pendiente. Las composiciones y los valores I de los tejidos son valores tabulados con su propia incertidumbre, que la demo no agrega; Paganetti pone los valores I en ±{#} % del alcance.",
"Two inserts have nearly the same electron density but CT numbers {#} HU apart. Which beam, X-rays or protons, can tell them apart, and why?":
  "Dos insertos tienen casi la misma densidad electrónica pero números CT que difieren en {#} HU. ¿Qué haz, rayos X o protones, puede distinguirlos, y por qué?",
"Why does the stoichiometric method use the plastics only to learn the scanner, and not as points on the curve?":
  "¿Por qué el método estequiométrico usa los plásticos solo para conocer el tomógrafo, y no como puntos de la curva?",
"A patient has a titanium hip implant. What happens to its CT numbers on a {#} kV scan, and what would you do in the plan?":
  "Un paciente tiene un implante de cadera de titanio. ¿Qué pasa con sus números CT en un escaneo a {#} kV, y qué harías en el plan?",
"A scanner’s CT numbers drift by {#} HU after a tube replacement. Which patients are most at risk, and what daily check would catch it?":
  "Los números CT de un tomógrafo se desvían {#} HU después de un cambio de tubo. ¿Qué pacientes corren más riesgo, y qué verificación diaria lo detectaría?",
"Dual energy CT scans each voxel at two tube voltages. From your {#} and {#} kV scans, explain why two scans give the electron density and an effective atomic number, where one scan gives a mixture of both.":
  "La CT de energía dual escanea cada vóxel a dos voltajes del tubo. Con tus escaneos a {#} y {#} kV, explica por qué dos escaneos dan la densidad electrónica y un número atómico efectivo, mientras que uno solo da una mezcla de ambos.",
"The margin is placed beyond the target, along the beam. Why is the range uncertainty a larger problem for protons than for photons, and why do planners avoid aiming a proton beam’s distal edge at a critical organ?":
  "El margen se coloca más allá del blanco, a lo largo del haz. ¿Por qué la incertidumbre del alcance es un problema mayor para los protones que para los fotones, y por qué los planificadores evitan apuntar el borde distal de un haz de protones a un órgano crítico?",
"Prelab answers, the tables with their graphs and fits, the curves’ errors on the tissues, the mystery RSPs with uncertainties, the range error slopes with uncertainties and your predictions, the budget, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las tablas con sus gráficas y ajustes, los errores de las curvas en los tejidos, las RSP de los misterios con incertidumbres, las pendientes del error del alcance con incertidumbres y tus predicciones, el presupuesto y las respuestas a las preguntas. Identifica los datos simulados.",
"Molar mass of element i":
  "Masa molar del elemento i",
"Constant of the Bethe formula":
  "Constante de la fórmula de Bethe",
"CT number, the linear attenuation coefficient relative to water's":
  "Número CT, el coeficiente de atenuación lineal relativo al del agua",
"water {#}, air about −{#}":
  "agua {#}, aire alrededor de −{#}",
"Mean excitation energy of the material":
  "Energía media de excitación del material",
"The scanner's three constants K_KN, K_coh and K_ph, which belong to its spectrum":
  "Las tres constantes del tomógrafo K_KN, K_coh y K_ph, que pertenecen a su espectro",
"Scanner constant of Compton scattering (Klein–Nishina, per electron)":
  "Constante del tomógrafo para la dispersión de Compton (Klein–Nishina, por electrón)",
"Scanner constant of coherent scattering":
  "Constante del tomógrafo para la dispersión coherente",
"Scanner constant of the photoelectric effect":
  "Constante del tomógrafo para el efecto fotoeléctrico",
"Stopping number of the material in the Bethe formula":
  "Número de frenado del material en la fórmula de Bethe",
"Stopping number of water":
  "Número de frenado del agua",
"Avogadro constant":
  "Constante de Avogadro",
"{#} × {#}²³ mol⁻¹, exact":
  "{#} × {#}²³ mol⁻¹, exacta",
"Water equivalent depth at which the plan places the distal R90":
  "Profundidad equivalente en agua en la que el plan coloca el R90 distal",
"Stopping power of the material for the protons":
  "Poder de frenado del material para los protones",
"Atomic number":
  "Número atómico",
"Atomic number of element i":
  "Número atómico del elemento i",
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
"Index of the elements in the material":
  "Índice de los elementos del material",
"Ratio K_coh/K_KN, fitted from the phantom scan":
  "Cociente K_coh/K_KN, ajustado con el escaneo del maniquí",
"Ratio K_ph/K_KN, fitted from the phantom scan":
  "Cociente K_ph/K_KN, ajustado con el escaneo del maniquí",
"Proton mass":
  "Masa del protón",
"{#} × {#}⁻²⁷ kg (CODATA {#})":
  "{#} × {#}⁻²⁷ kg (CODATA {#})",
"Linear attenuation coefficient of the material for the scanner's X-rays":
  "Coeficiente de atenuación lineal del material para los rayos X del tomógrafo",
"Linear attenuation coefficient of water for the same X-rays":
  "Coeficiente de atenuación lineal del agua para los mismos rayos X",
"Density of the material":
  "Densidad del material",
"Electron density of the material, relative to water in the tables":
  "Densidad electrónica del material, relativa al agua en las tablas",
"Electron density of water":
  "Densidad electrónica del agua",
"Thickness of the slab":
  "Espesor de la placa",
"Fraction by weight of element i in the material":
  "Fracción en peso del elemento i en el material",
"Depth along the beam's path through the patient":
  "Profundidad a lo largo de la trayectoria del haz a través del paciente",
"Depth along the path, the variable of integration":
  "Profundidad a lo largo de la trayectoria, la variable de integración",
"Depth of the target's far edge along the path":
  "Profundidad del borde lejano del blanco a lo largo de la trayectoria",
"CT Numbers and Proton Range":
  "Números CT y alcance de protones"
});
