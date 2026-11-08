/* ws/mp-proton-calibration in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/mp-proton-calibration', {
"Voltage V (V)":
  "Voltaje V (V)",
"Reading M (nC)":
  "Lectura M (nC)",
"Voltage (V)":
  "Voltaje (V)",
"Polarity":
  "Polaridad",
"Water temperature (°C)":
  "Temperatura del agua (°C)",
"Pressure (kPa)":
  "Presión (kPa)",
"Quantity":
  "Cantidad",
"Value":
  "Valor",
"Relative standard uncertainty (%)":
  "Incertidumbre estándar relativa (%)",
"Where it comes from":
  "De dónde viene",
"Calibrating a Proton Beam: TRS-{#} Step by Step | VirtualDemos":
  "Calibración de un haz de protones: TRS-{#} paso a paso | VirtualDemos",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"Calibrating a Proton Beam: TRS-{#} Step by Step":
  "Calibración de un haz de protones: TRS-{#} paso a paso",
"Student worksheet · Medical Physics":
  "Hoja de trabajo del estudiante · Física médica",
"<strong>Setups in the demo:</strong> ⁶⁰Co buildup; Equilibrium at depth; {#} MeV: a thin buildup; {#} MeV: a deep buildup; Saturation curve, protons; High dose per pulse; ⁶⁰Co: hardly any recombination; Calibrate a {#} MeV layer; {#} MeV: z_ref = {#} g/cm²; Where N_D,w comes from.":
  "<strong>Configuraciones en la demo:</strong> Acumulación con ⁶⁰Co; Equilibrio en profundidad; {#} MeV: una acumulación delgada; {#} MeV: una acumulación profunda; Curva de saturación, protones; Alta dosis por pulso; ⁶⁰Co: casi sin recombinación; Calibrar una capa de {#} MeV; {#} MeV: z_ref = {#} g/cm²; De dónde viene N_D,w.",
"This worksheet uses the <strong>Ion chamber</strong> and <strong>Calibration</strong> views. The chamber is a {#} cm³ Farmer type thimble chamber in water.":
  "Esta hoja de trabajo usa las vistas <strong>Cámara de ionización</strong> y <strong>Calibración</strong>. La cámara es una cámara de dedal tipo Farmer de {#} cm³ en agua.",
"<strong>Ion chamber</strong> shows the chamber cut along its axis, with ion pairs drifting to the electrodes and the pairs lost to recombination, and a graph of the reading against the voltage (or \\(1/M\\) against \\(1/V\\)). Each reading is one delivery of {#} Gy to water at {#} °C and {#} kPa.":
  "<strong>Cámara de ionización</strong> muestra la cámara cortada a lo largo de su eje, con pares de iones derivando hacia los electrodos y los pares perdidos por recombinación, y una gráfica de la lectura en función del voltaje (o de \\(1/M\\) en función de \\(1/V\\)). Cada lectura es una entrega de {#} Gy a agua a {#} °C y {#} kPa.",
"<strong>Calibration</strong> shows a water phantom under the beam with the chamber at the reference depth, an electrometer, a thermometer in the water and a barometer. Choose the beam, the proton energy and the chamber, set the voltage and polarity, and deliver the plan ({#} MU) or, at the standards laboratory, irradiate for {#} min. The Calibration steps in the sidebar walk through the corrections; type a factor and Check it.":
  "<strong>Calibración</strong> muestra un maniquí de agua bajo el haz con la cámara a la profundidad de referencia, un electrómetro, un termómetro en el agua y un barómetro. Elige el haz, la energía de los protones y la cámara, fija el voltaje y la polaridad, y entrega el plan ({#} MU) o, en el laboratorio de patrones, irradia durante {#} min. Los pasos de Calibración en la barra lateral recorren las correcciones; escribe un factor y compruébalo.",
"Each reading carries simulated noise of {#} %, so repeat readings and use their mean. Changing the beam, energy or chamber starts a new session.":
  "Cada lectura lleva un ruido simulado de {#} %, así que repite las lecturas y usa su promedio. Cambiar el haz, la energía o la cámara inicia una sesión nueva.",
"Record reading stores the last reading. Export to worksheet sends Ion chamber readings to the first Data table and Calibration readings to the second; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la última lectura. Exportar a la hoja envía las lecturas de Cámara de ionización a la primera tabla de Datos y las de Calibración a la segunda; Borrar inicia una serie nueva, que va a una nueva copia de la tabla.",
"The chamber is simulated from the same formulas you use, with TRS-{#} ({#}) key data, so a careful calibration gives back the dose the demo delivered. A real calibration uses the chamber’s own certificate and the current TRS-{#} Rev. {#} tables.":
  "La cámara se simula con las mismas fórmulas que usas tú, con los datos clave del TRS-{#} ({#}), así que una calibración cuidadosa devuelve la dosis que entregó la demo. Una calibración real usa el certificado propio de la cámara y las tablas actuales del TRS-{#} Rev. {#}.",
"Find a chamber’s recombination correction from its saturation curve, see where its calibration coefficient \\(N_{D,w}\\) comes from, and calibrate a {#} MeV scanned proton layer in absorbed dose to water following the steps of IAEA TRS-{#}, with an uncertainty budget.":
  "Encuentra la corrección por recombinación de una cámara a partir de su curva de saturación, ve de dónde viene su coeficiente de calibración \\(N_{D,w}\\), y calibra una capa de protones barrida de {#} MeV en dosis absorbida en agua siguiendo los pasos del TRS-{#} del OIEA, con un presupuesto de incertidumbre.",
"<strong>Bragg–Gray cavity theory.</strong> A small air cavity in water that does not disturb the electron (or proton) fluence gets the dose \\(D_{air}\\), and the water around it the dose \\(D_w = D_{air}\\, s_{w,air}\\, p_Q\\), where \\(s_{w,air}\\) is the ratio of the mass stopping powers of water and air for the particles crossing it and \\(p_Q\\) corrects for the chamber’s departures from an ideal cavity. The charge \\(Q\\) collected from air of mass \\(m\\) gives \\(D_{air} = (Q/m)(W_{air}/e)\\), with \\(W_{air}\\) the mean energy spent per ion pair.":
  "<strong>Teoría de la cavidad de Bragg–Gray.</strong> Una pequeña cavidad de aire en agua que no perturba la fluencia de electrones (o de protones) recibe la dosis \\(D_{air}\\), y el agua a su alrededor la dosis \\(D_w = D_{air}\\, s_{w,air}\\, p_Q\\), donde \\(s_{w,air}\\) es la razón de los poderes de frenado másicos del agua y del aire para las partículas que la cruzan y \\(p_Q\\) corrige las desviaciones de la cámara respecto a una cavidad ideal. La carga \\(Q\\) recolectada del aire de masa \\(m\\) da \\(D_{air} = (Q/m)(W_{air}/e)\\), con \\(W_{air}\\) la energía media gastada por par de iones.",
"<strong>The TRS-{#} formalism.</strong> A standards laboratory gives the chamber a calibration coefficient \\(N_{D,w,Q_0}\\) in ⁶⁰Co (\\(Q_0\\)). In the user’s beam \\(Q\\),":
  "<strong>El formalismo del TRS-{#}.</strong> Un laboratorio de patrones da a la cámara un coeficiente de calibración \\(N_{D,w,Q_0}\\) en ⁶⁰Co (\\(Q_0\\)). En el haz del usuario \\(Q\\),",
"\\[D_{w,Q} = M_Q\\, N_{D,w,Q_0}\\, k_{Q,Q_0}, \\qquad M_Q = M_{raw}\\, k_{TP}\\, k_{pol}\\, k_s\\, k_{elec},\\]":
  "\\[D_{w,Q} = M_Q\\, N_{D,w,Q_0}\\, k_{Q,Q_0}, \\qquad M_Q = M_{raw}\\, k_{TP}\\, k_{pol}\\, k_s\\, k_{elec},\\]",
"\\(k_{TP} = \\dfrac{273.2 + T}{273.2 + 20}\\cdot\\dfrac{101.325}{P}\\) (T in °C, P in kPa) brings the air in the vented chamber back to the density of the calibration;":
  "\\(k_{TP} = \\dfrac{273.2 + T}{273.2 + 20}\\cdot\\dfrac{101.325}{P}\\) (T en °C, P en kPa) regresa el aire de la cámara ventilada a la densidad de la calibración;",
"\\(k_{pol} = \\dfrac{\\lvert M_+\\rvert + \\lvert M_-\\rvert}{2\\lvert M\\rvert}\\), with \\(M\\) the reading at the polarity used;":
  "\\(k_{pol} = \\dfrac{\\lvert M_+\\rvert + \\lvert M_-\\rvert}{2\\lvert M\\rvert}\\), con \\(M\\) la lectura en la polaridad usada;",
"\\(k_s\\) corrects for ions lost to recombination. In a pulsed beam (the synchrocyclotron’s beam comes in pulses at {#} kHz), from readings \\(M_1\\) at the normal voltage \\(V_1\\) and \\(M_2\\) at \\(V_2\\): \\(k_s = a_0 + a_1 (M_1/M_2) + a_2 (M_1/M_2)^2\\), with \\(a_0 = 2.337\\), \\(a_1 = -3.636\\), \\(a_2 = 2.299\\) for \\(V_1/V_2 = 2\\). In a continuous beam, \\(k_s = \\dfrac{(V_1/V_2)^2 - 1}{(V_1/V_2)^2 - M_1/M_2}\\);":
  "\\(k_s\\) corrige los iones perdidos por recombinación. En un haz pulsado (el haz del sincrociclotrón llega en pulsos a {#} kHz), a partir de las lecturas \\(M_1\\) al voltaje normal \\(V_1\\) y \\(M_2\\) a \\(V_2\\): \\(k_s = a_0 + a_1 (M_1/M_2) + a_2 (M_1/M_2)^2\\), con \\(a_0 = 2.337\\), \\(a_1 = -3.636\\), \\(a_2 = 2.299\\) para \\(V_1/V_2 = 2\\). En un haz continuo, \\(k_s = \\dfrac{(V_1/V_2)^2 - 1}{(V_1/V_2)^2 - M_1/M_2}\\);",
"\\(k_{elec} = 1\\) here (the electrometer is calibrated with the chamber).":
  "\\(k_{elec} = 1\\) aquí (el electrómetro se calibra junto con la cámara).",
"<strong>Beam quality factor for protons.</strong> \\(k_{Q,Q_0} = \\dfrac{(s_{w,air})_Q\\, (W_{air})_Q\\, p_Q}{(s_{w,air})_{Q_0}\\, (W_{air})_{Q_0}\\, p_{Q_0}}\\), with \\(p_Q = 1\\) in protons. TRS-{#} ({#}) gives":
  "<strong>Factor de calidad del haz para protones.</strong> \\(k_{Q,Q_0} = \\dfrac{(s_{w,air})_Q\\, (W_{air})_Q\\, p_Q}{(s_{w,air})_{Q_0}\\, (W_{air})_{Q_0}\\, p_{Q_0}}\\), con \\(p_Q = 1\\) en protones. El TRS-{#} ({#}) da",
"\\[(s_{w,air})_Q = 1.137 - 4.3\\times10^{-5}\\, R_{res} + \\frac{1.84\\times10^{-3}}{R_{res}},\\]":
  "\\[(s_{w,air})_Q = 1.137 - 4.3\\times10^{-5}\\, R_{res} + \\frac{1.84\\times10^{-3}}{R_{res}},\\]",
"with the residual range \\(R_{res} = R_p - z_{ref}\\) in g/cm², \\((W_{air})_Q = 34.23\\) eV, \\((s_{w,air})_{Q_0} = 1.133\\), \\((W_{air})_{Q_0} = 33.97\\) eV, and \\(p_{Q_0}\\) = {#} for the PTW {#} chamber ({#} for the NE {#}, {#} for the IBA FC65-G). ICRU Report {#} raised \\((W_{air})_Q\\) for protons to {#} eV, and TRS-{#} Rev. {#} ({#}) recalculated every \\(k_Q\\) with it.":
  "con el alcance residual \\(R_{res} = R_p - z_{ref}\\) en g/cm², \\((W_{air})_Q = 34.23\\) eV, \\((s_{w,air})_{Q_0} = 1.133\\), \\((W_{air})_{Q_0} = 33.97\\) eV, y \\(p_{Q_0}\\) = {#} para la cámara PTW {#} ({#} para la NE {#}, {#} para la IBA FC65-G). El Informe ICRU {#} elevó \\((W_{air})_Q\\) para protones a {#} eV, y el TRS-{#} Rev. {#} ({#}) recalculó cada \\(k_Q\\) con él.",
"<strong>Reference conditions.</strong> For a scanned proton layer TRS-{#} Rev. {#} puts the reference depth at \\(z_{ref} = 2\\) g/cm² when \\(R_{res} \\ge 5\\) g/cm² ({#} g/cm² otherwise), in a {#} cm × {#} cm field. In the demo \\(R_p\\) is the proton’s CSDA range from NIST PSTAR ({#} g/cm² at {#} MeV), a stated simplification.":
  "<strong>Condiciones de referencia.</strong> Para una capa de protones barrida, el TRS-{#} Rev. {#} pone la profundidad de referencia en \\(z_{ref} = 2\\) g/cm² cuando \\(R_{res} \\ge 5\\) g/cm² ({#} g/cm² en otro caso), en un campo de {#} cm × {#} cm. En la demo \\(R_p\\) es el alcance CSDA del protón según NIST PSTAR ({#} g/cm² a {#} MeV), una simplificación declarada.",
"<strong>Recombination in a pulsed beam (Boag).</strong> If a pulse frees \\(n_0\\) ion pairs per unit volume, the fraction collected is \\(f = \\ln(1 + u)/u\\) with \\(u \\propto n_0 d^2/V\\) (\\(d\\) the electrode gap, \\(V\\) the voltage). For small \\(u\\), \\(1/f \\approx 1 + u/2\\), so \\(1/M\\) is a straight line in \\(1/V\\) whose intercept at \\(1/V = 0\\) is \\(1/Q_{sat}\\), all the charge freed.":
  "<strong>Recombinación en un haz pulsado (Boag).</strong> Si un pulso libera \\(n_0\\) pares de iones por unidad de volumen, la fracción recolectada es \\(f = \\ln(1 + u)/u\\) con \\(u \\propto n_0 d^2/V\\) (\\(d\\) la separación entre electrodos, \\(V\\) el voltaje). Para \\(u\\) pequeño, \\(1/f \\approx 1 + u/2\\), así que \\(1/M\\) es una recta en \\(1/V\\) cuya ordenada en \\(1/V = 0\\) es \\(1/Q_{sat}\\), toda la carga liberada.",
"Show from the ideal gas law that the mass of air in a vented chamber is proportional to \\(P/T\\), and hence that \\(k_{TP}\\) above corrects the reading to the reference air density. By what percentage does \\(k_{TP}\\) change for a {#} °C change in water temperature? For a {#} kPa change in pressure?":
  "Muestra con la ley del gas ideal que la masa de aire en una cámara ventilada es proporcional a \\(P/T\\), y por lo tanto que \\(k_{TP}\\) de arriba corrige la lectura a la densidad de aire de referencia. ¿En qué porcentaje cambia \\(k_{TP}\\) con un cambio de {#} °C en la temperatura del agua? ¿Y con un cambio de {#} kPa en la presión?",
"Using \\(1/f \\approx 1 + u/2\\) and \\(u \\propto 1/V\\), show that \\(k_s(V_1) \\approx 1 + \\dfrac{M_1/M_2 - 1}{V_1/V_2 - 1}\\) to first order.":
  "Usando \\(1/f \\approx 1 + u/2\\) y \\(u \\propto 1/V\\), muestra que \\(k_s(V_1) \\approx 1 + \\dfrac{M_1/M_2 - 1}{V_1/V_2 - 1}\\) a primer orden.",
"Compute \\(k_Q\\) for the PTW {#} chamber at {#} MeV with \\(z_{ref}\\) = {#} g/cm². Then compute it again with \\((W_{air})_Q\\) = {#} eV. What percentage change in the dose would that make?":
  "Calcula \\(k_Q\\) para la cámara PTW {#} a {#} MeV con \\(z_{ref}\\) = {#} g/cm². Luego calcúlalo de nuevo con \\((W_{air})_Q\\) = {#} eV. ¿Qué cambio porcentual produciría eso en la dosis?",
"Why must the chamber reading be corrected for polarity at all, if the same charge is freed in the air either way?":
  "¿Por qué hay que corregir la lectura de la cámara por polaridad, si en ambos casos se libera la misma carga en el aire?",
"No hazards in the virtual lab. In a real treatment room, follow the center’s procedures: nobody in the room during beam, the chamber voltage on and the chamber settled before the first reading, and the electrometer allowed to warm up.":
  "No hay riesgos en el laboratorio virtual. En una sala de tratamiento real, sigue los procedimientos del centro: nadie en la sala mientras hay haz, el voltaje de la cámara encendido y la cámara estabilizada antes de la primera lectura, y el electrómetro con tiempo para calentarse.",
"<strong>Part {#}: the saturation curve.</strong> Open the Saturation curve, protons setup ({#} mGy per pulse, + polarity). Read the chamber at {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} V, recording each reading. Send the readings to the worksheet, then clear them. Repeat with the High dose per pulse setup ({#} mGy per pulse) and send those readings to a second copy of the first table.":
  "<strong>Parte {#}: la curva de saturación.</strong> Abre la configuración Curva de saturación, protones ({#} mGy por pulso, polaridad +). Lee la cámara a {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} V, registrando cada lectura. Envía las lecturas a la hoja y luego bórralas. Repite con la configuración Alta dosis por pulso ({#} mGy por pulso) y envía esas lecturas a una segunda copia de la primera tabla.",
"<strong>Part {#}: where N_D,w comes from.</strong> Open Where N_D,w comes from (⁶⁰Co at the standards laboratory, PTW {#}). Irradiate three times at +{#} V, three times at −{#} V and three times at +{#} V, recording each reading. Send them to the worksheet, then clear them.":
  "<strong>Parte {#}: de dónde viene N_D,w.</strong> Abre De dónde viene N_D,w (⁶⁰Co en el laboratorio de patrones, PTW {#}). Irradia tres veces a +{#} V, tres veces a −{#} V y tres veces a +{#} V, registrando cada lectura. Envíalas a la hoja y luego bórralas.",
"<strong>Part {#}: calibrating a {#} MeV layer.</strong> Open Calibrate a {#} MeV layer (PTW {#}). Deliver the plan five times at +{#} V, three times at −{#} V and three times at +{#} V, recording each reading. Send them to the worksheet (a second copy of the second table), then clear them. Fill in the factor table as you work down the steps; you may Check each factor in the sidebar.":
  "<strong>Parte {#}: calibrar una capa de {#} MeV.</strong> Abre Calibrar una capa de {#} MeV (PTW {#}). Entrega el plan cinco veces a +{#} V, tres veces a −{#} V y tres veces a +{#} V, registrando cada lectura. Envíalas a la hoja (una segunda copia de la segunda tabla) y luego bórralas. Llena la tabla de factores a medida que avanzas por los pasos; puedes comprobar cada factor en la barra lateral.",
"<strong>Part {#}: a mystery machine.</strong> Turn on Mystery machine in the Lab fold (it starts a new session with a new room temperature and pressure). Repeat Part {#} and send the readings to a third copy of the second table.":
  "<strong>Parte {#}: una máquina misteriosa.</strong> Activa Máquina misteriosa en el pliegue Laboratorio (inicia una sesión nueva con una nueva temperatura y presión de la sala). Repite la Parte {#} y envía las lecturas a una tercera copia de la segunda tabla.",
"<span>B</span>Voltage \\(V\\) (V)":
  "<span>B</span>Voltaje \\(V\\) (V)",
"<span>D</span>Reading \\(M\\) (nC)":
  "<span>D</span>Lectura \\(M\\) (nC)",
"Voltage V (V), row {#}":
  "Voltaje V (V), fila {#}",
"{#}/V ({#}/kV), row {#}":
  "{#}/V ({#}/kV), fila {#}",
"Reading M (nC), row {#}":
  "Lectura M (nC), fila {#}",
"{#}/M ({#}/nC), row {#}":
  "{#}/M ({#}/nC), fila {#}",
"Calibration readings":
  "Lecturas de calibración",
"<span>B</span>Beam":
  "<span>B</span>Haz",
"<span>C</span>Voltage (V)":
  "<span>C</span>Voltaje (V)",
"<span>D</span>Polarity":
  "<span>D</span>Polaridad",
"<span>E</span>Reading \\(M\\) (nC)":
  "<span>E</span>Lectura \\(M\\) (nC)",
"<span>F</span>Water temperature (°C)":
  "<span>F</span>Temperatura del agua (°C)",
"<span>G</span>Pressure (kPa)":
  "<span>G</span>Presión (kPa)",
"Beam, row {#}":
  "Haz, fila {#}",
"Voltage (V), row {#}":
  "Voltaje (V), fila {#}",
"Polarity, row {#}":
  "Polaridad, fila {#}",
"Water temperature (°C), row {#}":
  "Temperatura del agua (°C), fila {#}",
"Pressure (kPa), row {#}":
  "Presión (kPa), fila {#}",
"Factors for the {#} MeV calibration":
  "Factores para la calibración a {#} MeV",
"<span>A</span>Quantity":
  "<span>A</span>Cantidad",
"<span>B</span>Value":
  "<span>B</span>Valor",
"<span>C</span>Relative standard uncertainty (%)":
  "<span>C</span>Incertidumbre estándar relativa (%)",
"<span>D</span>Where it comes from":
  "<span>D</span>De dónde viene",
"Mean reading \\(M_+\\) at +{#} V (nC)":
  "Lectura media \\(M_+\\) a +{#} V (nC)",
"Value, row {#}":
  "Valor, fila {#}",
"Relative standard uncertainty (%), row {#}":
  "Incertidumbre estándar relativa (%), fila {#}",
"Where it comes from, row {#}":
  "De dónde viene, fila {#}",
"certificate (simulated)":
  "certificado (simulado)",
"TRS-{#} data":
  "datos del TRS-{#}",
"\\(D_w\\) for {#} MU (Gy)":
  "\\(D_w\\) para {#} MU (Gy)",
"Graph \\(1/M\\) against \\(1/V\\) (in {#}/kV) for each copy of the first table and fit straight lines. Look at the residuals: where the points curve (at the higher dose per pulse), fit only {#} to {#} V. From each intercept find \\(Q_{sat}\\) with its standard error, and then \\(k_s = Q_{sat}/M\\) at {#} V. Compare each with the two voltage result from your {#} V and {#} V readings (pulsed coefficients above) and with the first order formula from Before the lab.":
  "Grafica \\(1/M\\) en función de \\(1/V\\) (en {#}/kV) para cada copia de la primera tabla y ajusta rectas. Observa los residuos: donde los puntos se curvan (con la dosis por pulso más alta), ajusta solo de {#} a {#} V. Con cada ordenada al origen encuentra \\(Q_{sat}\\) con su error estándar, y luego \\(k_s = Q_{sat}/M\\) a {#} V. Compara cada uno con el resultado de dos voltajes de tus lecturas a {#} V y {#} V (coeficientes pulsados de arriba) y con la fórmula de primer orden de Antes del laboratorio.",
"Divide the slope by the intercept for each copy. How do the two compare, and what does that say about how \\(u\\) depends on the dose per pulse?":
  "Divide la pendiente entre la ordenada al origen para cada copia. ¿Cómo se comparan las dos, y qué dice eso sobre cómo depende \\(u\\) de la dosis por pulso?",
"From Part {#}: compute \\(k_{TP}\\), \\(k_{pol}\\) and \\(k_s\\) (continuous formula), then \\(N_{D,w,Q_0} = D_w/M_{Q_0}\\) with \\(D_w\\) = {#} Gy/min × {#} min. Give its type A uncertainty from your readings and compare it with the certificate value in the readouts.":
  "De la Parte {#}: calcula \\(k_{TP}\\), \\(k_{pol}\\) y \\(k_s\\) (fórmula continua), y luego \\(N_{D,w,Q_0} = D_w/M_{Q_0}\\) con \\(D_w\\) = {#} Gy/min × {#} min. Da su incertidumbre tipo A a partir de tus lecturas y compárala con el valor del certificado en las lecturas.",
"From Part {#}: complete the factor table and compute \\(D_w\\) for the {#} MU plan and the dose per MU. Combine the relative uncertainties in quadrature (type A of \\(M_+\\) from \\(s/\\sqrt{n}\\), \\(k_{TP}\\) from the thermometer’s and barometer’s last digits taken as uniform, \\(k_{pol}\\) and \\(k_s\\) from their readings, \\(N_{D,w}\\) and \\(k_Q\\) as given). Which term dominates?":
  "De la Parte {#}: completa la tabla de factores y calcula \\(D_w\\) para el plan de {#} MU y la dosis por MU. Combina las incertidumbres relativas en cuadratura (tipo A de \\(M_+\\) a partir de \\(s/\\sqrt{n}\\), \\(k_{TP}\\) a partir de los últimos dígitos del termómetro y del barómetro tomados como uniformes, \\(k_{pol}\\) y \\(k_s\\) a partir de sus lecturas, \\(N_{D,w}\\) y \\(k_Q\\) como se dan). ¿Qué término domina?",
"The plan expects {#} Gy at \\(z_{ref}\\). Is the machine’s output consistent with that within your expanded uncertainty (\\(k = 2\\))?":
  "El plan espera {#} Gy en \\(z_{ref}\\). ¿Es la salida de la máquina compatible con eso dentro de tu incertidumbre expandida (\\(k = 2\\))?",
"From Part {#}: by what percentage has the mystery machine’s output drifted? Is the drift significant at \\(k = 2\\)? Which factors changed between Part {#} and Part {#}, and which stayed the same?":
  "De la Parte {#}: ¿en qué porcentaje ha derivado la salida de la máquina misteriosa? ¿Es significativa la deriva con \\(k = 2\\)? ¿Qué factores cambiaron entre la Parte {#} y la Parte {#}, y cuáles se mantuvieron iguales?",
"Separate the uncertainty in Analysis {#} into what you could reduce with more readings or better instruments and what you could not. Then switch on the ICRU {#} \\(W_{air}\\) in the Lab fold and explain why changing one key datum by {#} % without changing the others is not a consistent calibration, and how TRS-{#} Rev. {#} handles it.":
  "Separa la incertidumbre del Análisis {#} en lo que podrías reducir con más lecturas o mejores instrumentos y lo que no. Luego activa la \\(W_{air}\\) del ICRU {#} en el pliegue Laboratorio y explica por qué cambiar un dato clave en {#} % sin cambiar los demás no es una calibración coherente, y cómo lo maneja el TRS-{#} Rev. {#}.",
"The Bragg–Gray conditions require the cavity not to disturb the charged particle fluence. Why is that easier to meet for a Farmer chamber in a {#} MeV proton beam than in a low energy photon beam?":
  "Las condiciones de Bragg–Gray requieren que la cavidad no perturbe la fluencia de partículas cargadas. ¿Por qué es más fácil cumplirlas para una cámara Farmer en un haz de protones de {#} MeV que en un haz de fotones de baja energía?",
"Why does recombination matter more in a synchrocyclotron’s pulsed beam than in a continuous beam of the same average dose rate?":
  "¿Por qué importa más la recombinación en el haz pulsado de un sincrociclotrón que en un haz continuo con la misma tasa de dosis promedio?",
"A Farmer chamber is {#} cm long. Why do scanned proton beams usually use a plane parallel chamber close to the surface instead, and why is \\(z_{ref}\\) so shallow?":
  "Una cámara Farmer mide {#} cm de largo. ¿Por qué los haces de protones barridos suelen usar en su lugar una cámara de placas paralelas cerca de la superficie, y por qué \\(z_{ref}\\) es tan poco profunda?",
"A proton center’s daily output checks are usually made with a quick QA detector, not with a full calibration like this one. What does the reference calibration give those daily checks, and why must it be traceable to a standards laboratory?":
  "Las pruebas diarias de salida de un centro de protones suelen hacerse con un detector rápido de control de calidad, no con una calibración completa como esta. ¿Qué les da la calibración de referencia a esas pruebas diarias, y por qué debe ser trazable a un laboratorio de patrones?",
"Prelab answers, both copies of the first Data table with their graphs, the calibration readings for Parts {#}, {#} and {#}, the factor table, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, ambas copias de la primera tabla de Datos con sus gráficas, las lecturas de calibración de las Partes {#}, {#} y {#}, la tabla de factores, las respuestas de las secciones de análisis e incertidumbre, y las respuestas a las preguntas. Identifica los datos simulados.",
"Beam quality of the user's beam":
  "Calidad del haz del usuario",
"Dose to the air in the cavity":
  "Dosis en el aire de la cavidad",
"Dose to water":
  "Dosis en agua",
"Dose to water in the user's beam":
  "Dosis en agua en el haz del usuario",
"Chamber reading (charge collected)":
  "Lectura de la cámara (carga recolectada)",
"Reading at positive polarity":
  "Lectura en polaridad positiva",
"Reading at negative polarity":
  "Lectura en polaridad negativa",
"Reading at the normal voltage":
  "Lectura al voltaje normal",
"Reading at the lower voltage":
  "Lectura al voltaje menor",
"Fully corrected reading":
  "Lectura completamente corregida",
"Fully corrected reading in ⁶⁰Co":
  "Lectura completamente corregida en ⁶⁰Co",
"Uncorrected reading":
  "Lectura sin corregir",
"Calibration coefficient in dose to water (from ⁶⁰Co)":
  "Coeficiente de calibración en dosis en agua (de ⁶⁰Co)",
"Calibration coefficient in dose to water, measured in ⁶⁰Co":
  "Coeficiente de calibración en dosis en agua, medido en ⁶⁰Co",
"Air pressure":
  "Presión del aire",
"Charge collected":
  "Carga recolectada",
"Beam quality of the calibration: ⁶⁰Co":
  "Calidad del haz de la calibración: ⁶⁰Co",
"Saturation charge: all the charge freed":
  "Carga de saturación: toda la carga liberada",
"Practical range of the protons (here the PSTAR CSDA range)":
  "Alcance práctico de los protones (aquí el alcance CSDA de PSTAR)",
"Residual range at the reference depth":
  "Alcance residual a la profundidad de referencia",
"Water temperature":
  "Temperatura del agua",
"Chamber voltage":
  "Voltaje de la cámara",
"Normal voltage":
  "Voltaje normal",
"Lower voltage":
  "Voltaje menor",
"Mean energy spent per ion pair formed in air":
  "Energía media gastada por par de iones formado en el aire",
"Two voltage coefficient for pulsed beams (TRS-{#})":
  "Coeficiente de dos voltajes para haces pulsados (TRS-{#})",
"Electrode gap of the chamber":
  "Separación entre los electrodos de la cámara",
"Fraction of the freed charge that is collected":
  "Fracción de la carga liberada que se recolecta",
"Coverage factor":
  "Factor de cobertura",
"Beam quality factor from ⁶⁰Co to the user's beam":
  "Factor de calidad del haz del ⁶⁰Co al haz del usuario",
"Air density correction for temperature and pressure":
  "Corrección de la densidad del aire por temperatura y presión",
"Electrometer calibration factor":
  "Factor de calibración del electrómetro",
"{#} here":
  "{#} aquí",
"Polarity correction":
  "Corrección por polaridad",
"Recombination correction":
  "Corrección por recombinación",
"Mass of the air in the cavity":
  "Masa del aire en la cavidad",
"Number of readings":
  "Número de lecturas",
"Ion pairs freed per unit volume by one pulse":
  "Pares de iones liberados por unidad de volumen en un pulso",
"Perturbation factor of the chamber in the beam":
  "Factor de perturbación de la cámara en el haz",
"Perturbation factor of the chamber in ⁶⁰Co":
  "Factor de perturbación de la cámara en ⁶⁰Co",
"Standard deviation of the readings":
  "Desviación estándar de las lecturas",
"Ratio of the mass stopping powers of water and air":
  "Razón de los poderes de frenado másicos del agua y del aire",
"Boag's recombination parameter, α n₀ d²/((k₁ + k₂)V)":
  "Parámetro de recombinación de Boag, α n₀ d²/((k₁ + k₂)V)",
"Reference depth":
  "Profundidad de referencia",
"Dosimetry: Kerma, Equilibrium and the Ion Chamber":
  "Dosimetría: kerma, equilibrio y la cámara de ionización",
"Graph \\(1/M\\) against \\(1/V\\) (in {#}/kV) for each copy of the first table and fit straight lines. From each intercept find \\(Q_{sat}\\) with its standard error, and then \\(k_s = Q_{sat}/M\\) at {#} V. Compare each with the two voltage result from your {#} V and {#} V readings (pulsed coefficients above) and with the first order formula from Before the lab.":
  "Grafica \\(1/M\\) en función de \\(1/V\\) (en {#}/kV) para cada copia de la primera tabla y ajusta rectas. Con cada ordenada al origen encuentra \\(Q_{sat}\\) con su error estándar, y luego \\(k_s = Q_{sat}/M\\) a {#} V. Compara cada uno con el resultado de dos voltajes de tus lecturas a {#} V y {#} V (coeficientes pulsados de arriba) y con la fórmula de primer orden de Antes del laboratorio."
});
