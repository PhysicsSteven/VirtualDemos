/* ws/mp-proton-qa in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/mp-proton-qa', {
"Faults":
  "Fallas",
"Output (% of baseline)":
  "Salida (% de la línea base)",
"R90 − baseline (mm)":
  "R90 − línea base (mm)",
"Largest spot error (mm)":
  "Mayor error de spot (mm)",
"Spot size change (%)":
  "Cambio del tamaño de spot (%)",
"Machine":
  "Máquina",
"Delivery errors":
  "Errores de entrega",
"Depth (cm)":
  "Profundidad (cm)",
"{#} %/{#} mm (% passing)":
  "{#} %/{#} mm (% que pasa)",
"Mean":
  "Media",
"Standard deviation":
  "Desviación estándar",
"Tolerance":
  "Tolerancia",
"Tolerance ÷ standard deviation":
  "Tolerancia ÷ desviación estándar",
"Baseline R90 (cm)":
  "R90 de línea base (cm)",
"Pass or fail":
  "Pasa o falla",
"Spot shift (mm)":
  "Desplazamiento de los spots (mm)",
"Proton Therapy QA: Morning Checks, Drift and Patient Plans | VirtualDemos":
  "Control de calidad en protonterapia: controles matutinos, deriva y planes de pacientes | VirtualDemos",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"Proton Therapy QA: Morning Checks, Drift and Patient Plans":
  "Control de calidad en protonterapia: controles matutinos, deriva y planes de pacientes",
"<strong>Setups in the demo:</strong> Daily QA, all good; Output {#} % high; Energy {#} % high, at {#} MeV; Same error, at {#} MeV; Steering off {#} mm; Scanning magnet gain {#} % high; Spots {#} % larger; Output drifting; Mystery drift; Patient QA, clean delivery; Patient QA, spots shifted {#} mm; Range error, measured at the edge; Patient QA, spots {#} % larger. This worksheet uses all of them.":
  "<strong>Configuraciones en la demo:</strong> Control diario, todo bien; Salida {#} % alta; Energía {#} % alta, a {#} MeV; Mismo error, a {#} MeV; Dirección del haz desviada {#} mm; Ganancia del imán de barrido {#} % alta; Spots {#} % más grandes; Salida en deriva; Deriva misteriosa; Control del paciente, entrega limpia; Control del paciente, spots desplazados {#} mm; Error de alcance, medido en el borde; Control del paciente, spots {#} % más grandes. Esta hoja de trabajo las usa todas.",
"The picture is the treatment room: the gantry’s nozzle points down at the couch, where the QA device sits, cabled to the electrometer on a cart. The green room lasers cross at isocenter. Run QA delivers the beam, spot by spot, and the lamp above the room shows the beam is on.":
  "La imagen es la sala de tratamiento: la boquilla del gantry apunta hacia abajo a la camilla, donde está el dispositivo de control, conectado con cables al electrómetro en un carrito. Los láseres verdes de la sala se cruzan en el isocentro. Hacer el control entrega el haz, spot por spot, y la lámpara sobre la sala indica que el haz está encendido.",
"<strong>Daily QA</strong> measures four things at the QA energy: the output (dose at {#} cm depth in a water equivalent phantom), the range R90 (from a stack of ion chambers {#} mm apart), and the position and size of nine spots on a scintillating screen. The graph shows one check in detail; the gauges beside it show all four against their tolerances.":
  "El <strong>Control diario</strong> mide cuatro cosas a la energía del control: la salida (dosis a {#} cm de profundidad en un maniquí equivalente a agua), el alcance R90 (con una pila de cámaras de ionización separadas {#} mm) y la posición y el tamaño de nueve spots en una pantalla centelleadora. La gráfica muestra una prueba en detalle; los indicadores junto a ella muestran las cuatro contra sus tolerancias.",
"The <strong>Machine faults</strong> in the setup card are what is wrong with the machine. In a real QA you do not know them: the point of QA is to find them.":
  "Las <strong>Fallas de la máquina</strong> de la tarjeta de configuración son lo que está mal en la máquina. En un control real no las conoces: el propósito del control es encontrarlas.",
"<strong>Drift over weeks</strong> runs the same QA one morning at a time on a machine that may be changing. Choose what is happening to it, or choose Mystery and find out. Next day and Next {#} days run the mornings; Reset begins again.":
  "<strong>Deriva en semanas</strong> hace el mismo control una mañana a la vez en una máquina que puede estar cambiando. Elige lo que le está pasando, o elige Misterio y averígualo. Día siguiente y Siguientes {#} días corren las mañanas; Reiniciar vuelve a comenzar.",
"<strong>Patient QA</strong> delivers a patient plan (a target {#} to {#} cm deep) to water equivalent slabs over a 2D array of {#} ion chambers and compares the measured dose with the plan by gamma analysis. Set the measurement depth, the gamma criteria and the delivery errors in the setup card.":
  "El <strong>Control del paciente</strong> entrega un plan de paciente (un blanco de {#} a {#} cm de profundidad) a placas equivalentes a agua sobre un arreglo 2D de {#} cámaras de ionización y compara la dosis medida con el plan mediante el análisis gamma. Fija la profundidad de medición, los criterios gamma y los errores de entrega en la tarjeta de configuración.",
"Record reading stores the last daily QA, every morning run since the last record (in Drift over weeks), or the patient QA result at all three gamma criteria. Export to worksheet sends each mode’s readings to its own Data table. Clear starts a new series.":
  "Registrar lectura guarda el último control diario, cada mañana corrida desde el último registro (en Deriva en semanas) o el resultado del control del paciente con los tres criterios gamma. Exportar a la hoja envía las lecturas de cada modo a su propia tabla de datos. Borrar empieza una serie nueva.",
"Run the morning QA of a pencil beam scanning proton machine and decide whether it can treat patients; find how big the reading noise is and which fault each check catches; measure how a range error from an energy error grows with energy; follow a drifting machine and predict when it will fail; and see what gamma analysis of a patient plan can and cannot detect.":
  "Haz el control matutino de una máquina de protones con barrido de haz fino y decide si puede tratar pacientes; encuentra qué tan grande es el ruido de lectura y qué falla detecta cada prueba; mide cómo crece con la energía un error de alcance causado por un error de energía; sigue una máquina que deriva y predice cuándo fallará; y ve qué puede y qué no puede detectar el análisis gamma de un plan de paciente.",
"A proton plan is only as good as the machine that delivers it. Every morning, before the first patient, a physicist or therapist checks that the machine still gives the beam it gave at commissioning: the dose per monitor unit (the output), the depth the protons reach (the range), and where and how big the scanned spots are. AAPM Task Group {#} (Arjomandy et al., Med. Phys. {#}({#}), e678, {#}) sets the daily tolerances:":
  "Un plan de protones es tan bueno como la máquina que lo entrega. Cada mañana, antes del primer paciente, un físico o un terapeuta comprueba que la máquina sigue dando el haz que daba en la puesta en servicio: la dosis por unidad monitor (la salida), la profundidad a la que llegan los protones (el alcance), y dónde están y qué tan grandes son los spots barridos. El AAPM Task Group {#} (Arjomandy et al., Med. Phys. {#}({#}), e678, {#}) fija las tolerancias diarias:",
"output: within ±{#} % of the baseline":
  "salida: dentro de ±{#} % de la línea base",
"range: within ±{#} mm of the baseline":
  "alcance: dentro de ±{#} mm de la línea base",
"spot position: within ±{#} mm of where it was planned (absolute), and within ±{#} mm relative to the other spots (here, each spot’s place measured from the central spot), which a scanning magnet gain error moves while a steering error does not":
  "posición de spot: dentro de ±{#} mm de donde se planeó (absoluta), y dentro de ±{#} mm en relación con los demás spots (aquí, el lugar de cada spot medido desde el spot central), que un error de ganancia del imán de barrido mueve y un error de dirección del haz no",
"TG-{#} sets no daily spot size check; centers that trend it use about ±{#} % of the baseline (auto trending daily QA program of a ProBeam center, J. Appl. Clin. Med. Phys., {#}, PMC7856486).":
  "TG-{#} no fija una prueba diaria del tamaño de spot; los centros que siguen su tendencia usan cerca de ±{#} % de la línea base (programa de control diario con tendencia automática de un centro ProBeam, J. Appl. Clin. Med. Phys., {#}, PMC7856486).",
"The machine here is modeled on the IBA Proteus ONE at Willis-Knighton (Pidikiti et al., J. Appl. Clin. Med. Phys. {#}({#}), {#}, {#}): a C230 cyclotron whose beam is slowed by a degrader of beryllium, graphite and aluminum to any energy from {#} to {#} MeV, then scanned across the field by magnets, spot by spot. Its range is defined at R90, the depth past the Bragg peak where the dose falls to {#} % of the peak, and its output is measured at {#} cm depth, in the plateau. Over a year its daily output and spot position varied by less than {#} %.":
  "La máquina aquí está modelada según la IBA Proteus ONE de Willis-Knighton (Pidikiti et al., J. Appl. Clin. Med. Phys. {#}({#}), {#}, {#}): un ciclotrón C230 cuyo haz se frena con un degradador de berilio, grafito y aluminio a cualquier energía de {#} a {#} MeV, y luego se barre sobre el campo con imanes, spot por spot. Su alcance se define en R90, la profundidad más allá del pico de Bragg donde la dosis cae al {#} % del pico, y su salida se mide a {#} cm de profundidad, en la meseta. A lo largo de un año su salida diaria y la posición de los spots variaron menos de {#} %.",
"The range of protons in water follows the Bragg–Kleeman rule":
  "El alcance de los protones en agua sigue la regla de Bragg–Kleeman",
"\\[R = \\alpha E^p,\\]":
  "\\[R = \\alpha E^p,\\]",
"with \\(p \\approx 1.77\\) (Bortfeld {#}). If the energy is off by a small fraction \\(\\Delta E / E\\), the range is off by":
  "con \\(p \\approx 1.77\\) (Bortfeld {#}). Si la energía está desviada en una fracción pequeña \\(\\Delta E / E\\), el alcance se desvía en",
"\\[\\frac{\\Delta R}{R} = p \\, \\frac{\\Delta E}{E}.\\]":
  "\\[\\frac{\\Delta R}{R} = p \\, \\frac{\\Delta E}{E}.\\]",
"The range stack reads the dose every {#} mm, which is too coarse to read R90 straight off a peak a few millimeters wide; its software fits each morning’s readings with the commissioning curve, shifted and scaled, and reports R90 as the baseline R90 plus the shift.":
  "La pila de alcance lee la dosis cada {#} mm, lo que es demasiado grueso para leer R90 directamente de un pico de unos cuantos milímetros de ancho; su software ajusta las lecturas de cada mañana con la curva de la puesta en servicio, desplazada y escalada, y reporta R90 como el R90 de línea base más el desplazamiento.",
"A spot’s size at isocenter in air, \\(\\sigma_{air}\\), grows in the patient by multiple Coulomb scattering:":
  "El tamaño de un spot en el isocentro en aire, \\(\\sigma_{air}\\), crece en el paciente por dispersión múltiple de Coulomb:",
"\\[\\sigma^2 = \\sigma_{air}^2 + \\sigma_{MCS}^2.\\]":
  "\\[\\sigma^2 = \\sigma_{air}^2 + \\sigma_{MCS}^2.\\]",
"The demo uses the spot sizes in air measured by Langner et al. (J. Appl. Clin. Med. Phys. {#}({#}), {#}, {#}) on a Varian ProBeam, since Pidikiti gives the Proteus ONE values only in a figure: in x and y, {#} and {#} mm at {#} MeV, {#} and {#} mm at {#} MeV, {#} and {#} mm at {#} MeV. Every check compares with the baseline, not with the absolute size.":
  "La demo usa los tamaños de spot en aire medidos por Langner et al. (J. Appl. Clin. Med. Phys. {#}({#}), {#}, {#}) en un Varian ProBeam, ya que Pidikiti da los valores de la Proteus ONE solo en una figura: en x y en y, {#} y {#} mm a {#} MeV, {#} y {#} mm a {#} MeV, {#} y {#} mm a {#} MeV. Cada prueba compara con la línea base, no con el tamaño absoluto.",
"Each plan is also checked before the first treatment. The plan is delivered to a phantom, the dose in a plane is measured with a 2D array (here {#} × {#} parallel plate chambers {#} mm across, {#} mm apart, as in the MatriXX; Arjomandy et al., Med. Phys. {#}, {#}, {#}), and each measured point is compared with the plan by the gamma index (Low et al., Med. Phys. {#}, {#}, {#}):":
  "Cada plan también se revisa antes del primer tratamiento. El plan se entrega a un maniquí, la dosis en un plano se mide con un arreglo 2D (aquí {#} × {#} cámaras de placas paralelas de {#} mm de ancho, separadas {#} mm, como en el MatriXX; Arjomandy et al., Med. Phys. {#}, {#}, {#}), y cada punto medido se compara con el plan mediante el índice gamma (Low et al., Med. Phys. {#}, {#}, {#}):",
"\\[\\Gamma = \\min \\sqrt{\\frac{r^2}{(\\Delta d)^2} + \\frac{\\delta^2}{(\\Delta D)^2}},\\]":
  "\\[\\Gamma = \\min \\sqrt{\\frac{r^2}{(\\Delta d)^2} + \\frac{\\delta^2}{(\\Delta D)^2}},\\]",
"where the minimum is over the points of the plan, \\(r\\) is the distance from the measured point to a plan point, \\(\\delta\\) the difference between the measured dose and the plan’s dose there, \\(\\Delta d\\) the distance criterion and \\(\\Delta D\\) the dose criterion (here a percentage of the plan’s maximum). A point passes if \\(\\Gamma \\le 1\\). Pidikiti et al. required at least {#} % of points to pass at {#} %/{#} mm; AAPM TG-{#} (Miften et al., Med. Phys. {#}({#}), e53, {#}) recommends {#} %/{#} mm with at least {#} % passing and action below {#} %, both with points below {#} % of the maximum left out.":
  "donde el mínimo se toma sobre los puntos del plan, \\(r\\) es la distancia del punto medido a un punto del plan, \\(\\delta\\) la diferencia entre la dosis medida y la dosis del plan ahí, \\(\\Delta d\\) el criterio de distancia y \\(\\Delta D\\) el criterio de dosis (aquí un porcentaje del máximo del plan). Un punto pasa si \\(\\Gamma \\le 1\\). Pidikiti et al. exigieron que al menos el {#} % de los puntos pasara a {#} %/{#} mm; el AAPM TG-{#} (Miften et al., Med. Phys. {#}({#}), e53, {#}) recomienda {#} %/{#} mm con al menos {#} % que pasa y acción por debajo de {#} %, en ambos casos sin contar los puntos por debajo del {#} % del máximo.",
"The reading noise of one QA run (output {#} %, each range chamber {#} % of the peak, spot centroids {#} mm, spot size {#} %) and the day to day variation of the machine in Drift over weeks (output {#} %, energy {#} %, steering {#} mm, spot size {#} %, each one standard deviation) are the demo’s choices, not measured values.":
  "El ruido de lectura de un control (salida {#} %, cada cámara de alcance {#} % del pico, centroides de los spots {#} mm, tamaño de spot {#} %) y la variación de un día a otro de la máquina en Deriva en semanas (salida {#} %, energía {#} %, dirección del haz {#} mm, tamaño de spot {#} %, cada uno una desviación estándar) son elecciones de la demo, no valores medidos.",
"With \\(p\\) = {#}, by what percentage does the range change for an energy error of {#} %? The range of {#} MeV protons in water is about {#} cm. How many millimeters is that, and does it pass the {#} mm tolerance? What about at {#} MeV (range {#} cm)?":
  "Con \\(p\\) = {#}, ¿en qué porcentaje cambia el alcance para un error de energía de {#} %? El alcance de protones de {#} MeV en agua es de cerca de {#} cm. ¿Cuántos milímetros es eso, y pasa la tolerancia de {#} mm? ¿Y a {#} MeV (alcance {#} cm)?",
"The scanning magnets deflect the beam by an angle proportional to their current. If the current calibration is {#} % high, how far is a spot planned {#} cm from the central axis misplaced? A spot on the axis?":
  "Los imanes de barrido desvían el haz un ángulo proporcional a su corriente. Si la calibración de la corriente está {#} % alta, ¿qué tan desplazado queda un spot planeado a {#} cm del eje central? ¿Y un spot sobre el eje?",
"The output is measured at {#} cm depth, in the plateau of the Bragg curve. Why there, and not at the peak?":
  "La salida se mide a {#} cm de profundidad, en la meseta de la curva de Bragg. ¿Por qué ahí, y no en el pico?",
"A spot has \\(\\sigma_{air}\\) = {#} mm and spreads by \\(\\sigma_{MCS}\\) = {#} mm by scattering at the measurement depth. If \\(\\sigma_{air}\\) is {#} % too large, by what percentage is \\(\\sigma\\) too large there?":
  "Un spot tiene \\(\\sigma_{air}\\) = {#} mm y se ensancha \\(\\sigma_{MCS}\\) = {#} mm por dispersión a la profundidad de medición. Si \\(\\sigma_{air}\\) es {#} % demasiado grande, ¿en qué porcentaje es \\(\\sigma\\) demasiado grande ahí?",
"A measured point is {#} mm from the plan point it agrees with best, and there the doses differ by {#} % of the maximum. Find \\(\\Gamma\\) at {#} %/{#} mm and at {#} %/{#} mm. Does it pass each?":
  "Un punto medido está a {#} mm del punto del plan con el que mejor concuerda, y ahí las dosis difieren en {#} % del máximo. Encuentra \\(\\Gamma\\) a {#} %/{#} mm y a {#} %/{#} mm. ¿Pasa en cada caso?",
"No hazards in the virtual lab. In a real treatment room, nobody stays in the room while the beam is on; the QA device is set up at the lasers and the room is closed before the beam is turned on. A failed daily QA stops treatments until a physicist has found and fixed the cause.":
  "No hay peligros en el laboratorio virtual. En una sala de tratamiento real, nadie se queda en la sala mientras el haz está encendido; el dispositivo de control se coloca con los láseres y la sala se cierra antes de encender el haz. Un control diario fallido detiene los tratamientos hasta que un físico encuentra y corrige la causa.",
"<strong>Part {#}: The morning QA.</strong> Choose Daily QA, all good ({#} MeV). Run the QA and record the reading six times. Then choose each of Output {#} % high, Energy {#} % high, at {#} MeV, Steering off {#} mm, Scanning magnet gain {#} % high and Spots {#} % larger; run the QA and record the reading once for each. Send the readings to the worksheet before you clear them.":
  "<strong>Parte {#}: El control matutino.</strong> Elige Control diario, todo bien ({#} MeV). Haz el control y registra la lectura seis veces. Luego elige cada una de Salida {#} % alta, Energía {#} % alta, a {#} MeV, Dirección del haz desviada {#} mm, Ganancia del imán de barrido {#} % alta y Spots {#} % más grandes; haz el control y registra la lectura una vez para cada una. Envía las lecturas a la hoja de trabajo antes de borrarlas.",
"<strong>Part {#}: Range against energy.</strong> Choose Energy {#} % high, at {#} MeV. Run the QA and record the reading at {#}, {#}, {#}, {#} and {#} MeV. Send the readings to the worksheet before you clear them.":
  "<strong>Parte {#}: Alcance en función de la energía.</strong> Elige Energía {#} % alta, a {#} MeV. Haz el control y registra la lectura a {#}, {#}, {#}, {#} y {#} MeV. Envía las lecturas a la hoja de trabajo antes de borrarlas.",
"<strong>Part {#}: A drifting machine.</strong> Choose Output drifting ({#} mornings already run) and record the readings. Send them to the worksheet and clear them. Then choose Mystery drift, run {#} mornings, look at each check on the graph, and record the readings. Send them to the worksheet.":
  "<strong>Parte {#}: Una máquina que deriva.</strong> Elige Salida en deriva ({#} mañanas ya corridas) y registra las lecturas. Envíalas a la hoja de trabajo y bórralas. Luego elige Deriva misteriosa, corre {#} mañanas, observa cada prueba en la gráfica y registra las lecturas. Envíalas a la hoja de trabajo.",
"<strong>Part {#}: Patient QA.</strong> Choose Patient QA, clean delivery (a square target, measured at {#} cm, in the middle of the target). Run the QA and record the reading. Set the spot shift to {#}, {#}, {#}, {#}, {#} and {#} mm, recording each. Set the shift back to {#} and the range error to +{#} mm, and record at {#} cm and at {#} cm (the distal edge). Then choose Patient QA, spots {#} % larger and record the reading. Send the readings to the worksheet.":
  "<strong>Parte {#}: Control del paciente.</strong> Elige Control del paciente, entrega limpia (un blanco cuadrado, medido a {#} cm, a la mitad del blanco). Haz el control y registra la lectura. Fija el desplazamiento de los spots en {#}, {#}, {#}, {#}, {#} y {#} mm, registrando cada uno. Regresa el desplazamiento a {#} y el error de alcance a +{#} mm, y registra a {#} cm y a {#} cm (el borde distal). Luego elige Control del paciente, spots {#} % más grandes y registra la lectura. Envía las lecturas a la hoja de trabajo.",
"<span>B</span>Faults":
  "<span>B</span>Fallas",
"<span>D</span>Output (% of baseline)":
  "<span>D</span>Salida (% de la línea base)",
"<span>E</span>R90 − baseline (mm)":
  "<span>E</span>R90 − línea base (mm)",
"<span>F</span>Largest spot error (mm)":
  "<span>F</span>Mayor error de spot (mm)",
"<span>G</span>Spot size change (%)":
  "<span>G</span>Cambio del tamaño de spot (%)",
"Faults, row {#}":
  "Fallas, fila {#}",
"E (MeV), row {#}":
  "E (MeV), fila {#}",
"Output (% of baseline), row {#}":
  "Salida (% de la línea base), fila {#}",
"R90 − baseline (mm), row {#}":
  "R90 − línea base (mm), fila {#}",
"Largest spot error (mm), row {#}":
  "Mayor error de spot (mm), fila {#}",
"Spot size change (%), row {#}":
  "Cambio del tamaño de spot (%), fila {#}",
"<span>B</span>Machine":
  "<span>B</span>Máquina",
"<span>C</span>Day":
  "<span>C</span>Día",
"Machine, row {#}":
  "Máquina, fila {#}",
"Day, row {#}":
  "Día, fila {#}",
"<span>B</span>Delivery errors":
  "<span>B</span>Errores de entrega",
"<span>C</span>Depth (cm)":
  "<span>C</span>Profundidad (cm)",
"<span>D</span>{#} %/{#} mm (% passing)":
  "<span>D</span>{#} %/{#} mm (% que pasa)",
"<span>E</span>{#} %/{#} mm (% passing)":
  "<span>E</span>{#} %/{#} mm (% que pasa)",
"<span>F</span>{#} %/{#} mm (% passing)":
  "<span>F</span>{#} %/{#} mm (% que pasa)",
"Delivery errors, row {#}":
  "Errores de entrega, fila {#}",
"Depth (cm), row {#}":
  "Profundidad (cm), fila {#}",
"{#} %/{#} mm (% passing), row {#}":
  "{#} %/{#} mm (% que pasa), fila {#}",
"Reading noise at {#} MeV":
  "Ruido de lectura a {#} MeV",
"<span>A</span>Check":
  "<span>A</span>Prueba",
"<span>B</span>Mean":
  "<span>B</span>Media",
"<span>C</span>Standard deviation":
  "<span>C</span>Desviación estándar",
"<span>D</span>Tolerance":
  "<span>D</span>Tolerancia",
"<span>E</span>Tolerance ÷ standard deviation":
  "<span>E</span>Tolerancia ÷ desviación estándar",
"Check, row {#}":
  "Prueba, fila {#}",
"Mean, row {#}":
  "Media, fila {#}",
"Standard deviation, row {#}":
  "Desviación estándar, fila {#}",
"Tolerance, row {#}":
  "Tolerancia, fila {#}",
"Tolerance ÷ standard deviation, row {#}":
  "Tolerancia ÷ desviación estándar, fila {#}",
"Range against energy":
  "Alcance en función de la energía",
"<span>B</span>Baseline R90 (cm)":
  "<span>B</span>R90 de línea base (cm)",
"<span>C</span>\\(\\Delta R\\) (mm)":
  "<span>C</span>\\(\\Delta R\\) (mm)",
"<span>D</span>\\(\\Delta R / R\\) (%)":
  "<span>D</span>\\(\\Delta R / R\\) (%)",
"<span>E</span>Pass or fail":
  "<span>E</span>Pasa o falla",
"Baseline R90 (cm), row {#}":
  "R90 de línea base (cm), fila {#}",
"Δ R (mm), row {#}":
  "Δ R (mm), fila {#}",
"Δ R / R (%), row {#}":
  "Δ R / R (%), fila {#}",
"Pass or fail, row {#}":
  "Pasa o falla, fila {#}",
"Spot shift and gamma":
  "Desplazamiento de los spots y gamma",
"<span>A</span>Spot shift (mm)":
  "<span>A</span>Desplazamiento de los spots (mm)",
"<span>B</span>{#} %/{#} mm (% passing)":
  "<span>B</span>{#} %/{#} mm (% que pasa)",
"<span>C</span>{#} %/{#} mm (% passing)":
  "<span>C</span>{#} %/{#} mm (% que pasa)",
"Spot shift (mm), row {#}":
  "Desplazamiento de los spots (mm), fila {#}",
"From the six healthy runs in Part {#}, fill in the Reading noise table for the output, the R90 difference, the largest spot error and the spot size change. How many standard deviations of noise fit inside each tolerance? Could noise alone fail a healthy machine on a given morning?":
  "Con las seis corridas sanas de la Parte {#}, llena la tabla Ruido de lectura para la salida, la diferencia de R90, el mayor error de spot y el cambio del tamaño de spot. ¿Cuántas desviaciones estándar de ruido caben dentro de cada tolerancia? ¿Podría el ruido por sí solo hacer fallar a una máquina sana en una mañana dada?",
"For each fault in Part {#}, say which checks failed and which passed. Explain why each fault shows up only in the checks it does. Which faults would a check of the central spot alone miss?":
  "Para cada falla de la Parte {#}, di qué pruebas fallaron y cuáles pasaron. Explica por qué cada falla aparece solo en las pruebas en que aparece. ¿Qué fallas pasaría por alto una prueba solo del spot central?",
"Fill in the Range against energy table. Graph \\(\\Delta R\\) (mm) against the baseline R90 (cm) and fit a straight line (with an intercept). From the slope and the {#} % energy error, find \\(p\\) with its uncertainty, and compare with {#} (the two need not agree: {#} fits real ranges over a wide span of energies, while your fit measures the model’s local slope near these energies). Look at the residuals: is \\(\\Delta R / R\\) the same at every energy? At which energies does this fault pass the range check?":
  "Llena la tabla Alcance en función de la energía. Grafica \\(\\Delta R\\) (mm) en función del R90 de línea base (cm) y ajusta una recta (con ordenada al origen). A partir de la pendiente y del error de energía de {#} %, encuentra \\(p\\) con su incertidumbre, y compáralo con {#} (no tienen por qué coincidir: {#} ajusta alcances reales en un intervalo amplio de energías, mientras que tu ajuste mide la pendiente local del modelo cerca de estas energías). Observa los residuos: ¿es \\(\\Delta R / R\\) igual a todas las energías? ¿A qué energías pasa esta falla la prueba de alcance?",
"Graph the output of Output drifting against the day and fit a straight line (with an intercept). Give the drift rate with its uncertainty. Predict the day the fitted line reaches {#} %, with its uncertainty from the fit. On which morning did the QA first fail? Explain why, with day to day variation, a single morning can fail before the line crosses {#} % or pass after it.":
  "Grafica la salida de Salida en deriva en función del día y ajusta una recta (con ordenada al origen). Da la tasa de deriva con su incertidumbre. Predice el día en que la recta ajustada llega a {#} %, con su incertidumbre a partir del ajuste. ¿En qué mañana falló el control por primera vez? Explica por qué, con la variación de un día a otro, una sola mañana puede fallar antes de que la recta cruce {#} % o pasar después.",
"For the Mystery drift, graph each check against the day. Which one is changing? Fit it and give its rate with an uncertainty, and predict when it will leave its tolerance. Then press Show the answer and compare.":
  "Para la Deriva misteriosa, grafica cada prueba en función del día. ¿Cuál está cambiando? Ajústala, da su tasa con una incertidumbre y predice cuándo saldrá de su tolerancia. Luego pulsa Mostrar la respuesta y compara.",
"Fill in the Spot shift and gamma table from Part {#}. At each criterion, find the largest shift that still passes {#} %. Why do the criteria differ, and why do the failing points sit on the edges of the field?":
  "Llena la tabla Desplazamiento de los spots y gamma con la Parte {#}. Para cada criterio, encuentra el mayor desplazamiento que todavía pasa el {#} %. ¿Por qué difieren los criterios, y por qué los puntos que fallan están en los bordes del campo?",
"Compare the passing rates for the +{#} mm range error at {#} cm and at {#} cm. Explain from the shape of the spread out peak. What does this say about where to measure, and about what gamma analysis in one plane can miss? Look too at the reading with spots {#} % larger: which QA, daily or patient, catches that fault, and why does the other miss it?":
  "Compara los porcentajes que pasan para el error de alcance de +{#} mm a {#} cm y a {#} cm. Explícalo a partir de la forma del pico extendido. ¿Qué dice esto sobre dónde medir, y sobre lo que el análisis gamma en un plano puede pasar por alto? Observa también la lectura con spots {#} % más grandes: ¿qué control, el diario o el del paciente, detecta esa falla, y por qué el otro no la detecta?",
"Each daily reading carries the reading noise you measured in Analysis {#}; quote QA results to that precision. The fits in Analyses {#} to {#} use equal weights, so their standard errors come from the scatter of the points about the line; carry them into \\(p\\) and into the predicted crossing day (for the crossing day, the slope’s uncertainty usually dominates). The passing rates count points: with about {#} points above the threshold, one point is about {#} %. The spot sizes in air are another machine’s, and the noise levels and day to day variation are the demo’s choices, so compare patterns, not absolute numbers, with a real machine.":
  "Cada lectura diaria lleva el ruido de lectura que mediste en el Análisis {#}; da los resultados del control con esa precisión. Los ajustes de los Análisis {#} a {#} usan pesos iguales, así que sus errores estándar salen de la dispersión de los puntos respecto a la recta; llévalos a \\(p\\) y al día de cruce predicho (para el día de cruce, la incertidumbre de la pendiente suele dominar). Los porcentajes que pasan cuentan puntos: con cerca de {#} puntos por encima del umbral, un punto es cerca de {#} %. Los tamaños de spot en aire son de otra máquina, y los niveles de ruido y la variación de un día a otro son elecciones de la demo, así que compara patrones, no números absolutos, con una máquina real.",
"The output check uses one energy and one field. Name a fault that would pass this morning’s output check but still give a patient the wrong dose.":
  "La prueba de salida usa una energía y un campo. Nombra una falla que pasaría la prueba de salida de esta mañana pero aun así le daría a un paciente una dosis incorrecta.",
"An energy error of {#} % passes the range check at {#} MeV and fails it at {#} MeV. If a center can check only one energy each morning, which should it choose, and why do many centers check several?":
  "Un error de energía de {#} % pasa la prueba de alcance a {#} MeV y la falla a {#} MeV. Si un centro puede revisar solo una energía cada mañana, ¿cuál debe elegir, y por qué muchos centros revisan varias?",
"Why is it better to catch a drift in the trend than to wait for the QA to fail? What would you do on the morning the trend predicts the output will cross {#} % next week?":
  "¿Por qué es mejor detectar una deriva en la tendencia que esperar a que el control falle? ¿Qué harías la mañana en que la tendencia predice que la salida cruzará {#} % la próxima semana?",
"A plan passes gamma analysis at {#} %/{#} mm with {#} % of points. Does that prove the patient will get the planned dose? Give two errors that gamma analysis in one plane would not catch.":
  "Un plan pasa el análisis gamma a {#} %/{#} mm con el {#} % de los puntos. ¿Prueba eso que el paciente recibirá la dosis planeada? Da dos errores que el análisis gamma en un plano no detectaría.",
"The plan is computed on a {#} mm grid, but each chamber averages the dose over a face {#} mm across. Where in the field does that averaging matter, and in which direction does it push the measured dose?":
  "El plan se calcula en una cuadrícula de {#} mm, pero cada cámara promedia la dosis sobre una cara de {#} mm de ancho. ¿En qué parte del campo importa ese promedio, y en qué dirección empuja la dosis medida?",
"Proton plans multiply the physical dose by an RBE of {#}. Does the QA here measure physical dose or RBE weighted dose? Would an error in the RBE show up in any of these checks?":
  "Los planes de protones multiplican la dosis física por una EBR de {#}. ¿El control de aquí mide la dosis física o la dosis ponderada por EBR? ¿Aparecería un error en la EBR en alguna de estas pruebas?",
"Prelab answers, the tables with their graphs and fits, the noise levels, the Bragg–Kleeman exponent, the drift rates and predicted crossing days with uncertainties, the gamma passing rates with your conclusions, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las tablas con sus gráficas y ajustes, los niveles de ruido, el exponente de Bragg–Kleeman, las tasas de deriva y los días de cruce predichos con incertidumbres, los porcentajes que pasan el análisis gamma con tus conclusiones, y las respuestas a las preguntas. Identifica los datos simulados.",
"Dose criterion of the gamma analysis, a percentage of the plan's maximum dose":
  "Criterio de dosis del análisis gamma, un porcentaje de la dosis máxima del plan",
"{#} % or {#} % here":
  "{#} % o {#} % aquí",
"Distance criterion of the gamma analysis":
  "Criterio de distancia del análisis gamma",
"{#} mm or {#} mm here":
  "{#} mm o {#} mm aquí",
"Kinetic energy of the protons":
  "Energía cinética de los protones",
"Gamma index of a measured point: its combined distance and dose disagreement with the plan, in units of the criteria":
  "Índice gamma de un punto medido: su desacuerdo combinado de distancia y dosis con el plan, en unidades de los criterios",
"a point passes if Γ ≤ {#}":
  "un punto pasa si Γ ≤ {#}",
"CSDA range of protons in water":
  "Alcance CSDA de los protones en agua",
"Bragg–Kleeman coefficient in R = αE^p":
  "Coeficiente de Bragg–Kleeman en R = αE^p",
"Difference between the measured dose and the plan's dose at that plan point":
  "Diferencia entre la dosis medida y la dosis del plan en ese punto del plan",
"Bragg–Kleeman exponent in R = αE^p":
  "Exponente de Bragg–Kleeman en R = αE^p",
"about {#} for protons in water":
  "cerca de {#} para protones en agua",
"Distance from the measured point to a point of the plan":
  "Distancia del punto medido a un punto del plan",
"Spot size in the phantom, the standard deviation of the spot's dose across the beam":
  "Tamaño de spot en el maniquí, la desviación estándar de la dosis del spot a lo ancho del haz",
"Lateral spread added by multiple Coulomb scattering in the phantom":
  "Ensanchamiento lateral añadido por la dispersión múltiple de Coulomb en el maniquí",
"Spot size at isocenter in air, before the phantom":
  "Tamaño de spot en el isocentro en aire, antes del maniquí",
"Proton Therapy QA":
  "Control de calidad en protonterapia",
"Day":
  "Día",
"Fill in the Range against energy table. Graph \\(\\Delta R\\) (mm) against the baseline R90 (cm) and fit a straight line (with an intercept). From the slope and the {#} % energy error, find \\(p\\) with its uncertainty, and compare with {#}. Look at the residuals: is \\(\\Delta R / R\\) the same at every energy? At which energies does this fault pass the range check?":
  "Llena la tabla Alcance en función de la energía. Grafica \\(\\Delta R\\) (mm) en función del R90 de línea base (cm) y ajusta una recta (con ordenada al origen). A partir de la pendiente y del error de energía de {#} %, encuentra \\(p\\) con su incertidumbre, y compáralo con {#}. Observa los residuos: ¿es \\(\\Delta R / R\\) igual a todas las energías? ¿A qué energías pasa esta falla la prueba de alcance?"
});
