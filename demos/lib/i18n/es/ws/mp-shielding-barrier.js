/* ws/mp-shielding-barrier in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/mp-shielding-barrier', {
"Shield":
  "Blindaje",
"Thickness x (cm)":
  "Espesor x (cm)",
"Narrow beam rate (µSv/h)":
  "Tasa de haz estrecho (µSv/h)",
"Broad beam rate (µSv/h)":
  "Tasa de haz ancho (µSv/h)",
"Buildup factor b":
  "Factor de acumulación b",
"ln(T) broad":
  "ln(T) ancho",
"ln(T) narrow":
  "ln(T) estrecho",
"Patients a week N":
  "Pacientes por semana N",
"Uptake time (h)":
  "Tiempo de captación (h)",
"Occupancy T":
  "Ocupación T",
"Design goal P (mSv/wk)":
  "Objetivo de diseño P (mSv/sem)",
"Patient absorption":
  "Absorción del paciente",
"Weekly dose, no wall (mSv)":
  "Dosis semanal, sin pared (mSv)",
"Transmission needed B":
  "Transmisión necesaria B",
"Lead, broad beam (mm)":
  "Plomo, haz ancho (mm)",
"Lead, narrow beam (mm)":
  "Plomo, haz estrecho (mm)",
"Concrete, broad beam (cm)":
  "Concreto, haz ancho (cm)",
"Shielding a PET Uptake Room | VirtualDemos":
  "Blindaje de una sala de captación PET | VirtualDemos",
"Shielding a PET Uptake Room":
  "Blindaje de una sala de captación PET",
"<strong>Setups in the demo:</strong> PET uptake room (this worksheet), in the Dose view; the reaction, fission, fusion and dose setups of the Modern Physics worksheets.":
  "<strong>Configuraciones en la demo:</strong> Sala de captación PET (esta hoja de trabajo), en la vista Dosis; las configuraciones de reacción, fisión, fusión y dosis de las hojas de trabajo de Física moderna.",
"The source is a point emitting γ rays equally in all directions, with the line energies and photons per decay of ENSDF (NuDat {#}). For ¹⁸F that is two {#} keV annihilation photons per positron, with positrons in {#}% of decays. The dose rate is the photon energy flux times the soft tissue mass energy absorption coefficient (NIST SRD {#}), with no attenuation in air. At {#} m it is {#} µSv/h per MBq, {#}% above the dose rate constant of {#} µSv m²/(MBq h) that AAPM Task Group {#} recommends (Madsen et al., Med. Phys. {#}, {#} ({#})).":
  "La fuente es un punto que emite rayos γ por igual en todas direcciones, con las energías de línea y los fotones por decaimiento de ENSDF (NuDat {#}). Para el ¹⁸F son dos fotones de aniquilación de {#} keV por positrón, con positrones en el {#}% de los decaimientos. La tasa de dosis es el flujo de energía de fotones por el coeficiente másico de absorción de energía del tejido blando (NIST SRD {#}), sin atenuación en el aire. A {#} m es de {#} µSv/h por MBq, un {#}% por encima de la constante de tasa de dosis de {#} µSv m²/(MBq h) que recomienda el AAPM Task Group {#} (Madsen et al., Med. Phys. {#}, {#} ({#})).",
"Narrow beam: the shield removes every photon that interacts, \\(e^{-\\mu x}\\) with μ from NIST. Broad beam, with buildup: the meter also counts photons scattered in the shield, and the transmission is TG-{#}’s fit in Archer’s form, \\(T(x) = \\left[(1 + \\beta/\\alpha)\\,e^{\\alpha\\gamma x} - \\beta/\\alpha\\right]^{-1/\\gamma}\\), with lead α = {#} /cm, β = −{#} /cm, γ = {#}, and concrete α = {#} /cm, β = −{#} /cm, γ = {#} for {#} g/cm³ (the {#} g/cm³ concrete of the demo is scaled by density). The buildup factor shown is \\(b = T(x)/e^{-\\mu x}\\). Broad beam data are given for ¹⁸F in lead and concrete only.":
  "Haz estrecho: el blindaje elimina todo fotón que interactúa, \\(e^{-\\mu x}\\) con μ del NIST. Haz ancho, con acumulación: el medidor también cuenta los fotones dispersados en el blindaje, y la transmisión es el ajuste del TG-{#} en la forma de Archer, \\(T(x) = \\left[(1 + \\beta/\\alpha)\\,e^{\\alpha\\gamma x} - \\beta/\\alpha\\right]^{-1/\\gamma}\\), con plomo α = {#} /cm, β = −{#} /cm, γ = {#}, y concreto α = {#} /cm, β = −{#} /cm, γ = {#} para {#} g/cm³ (el concreto de {#} g/cm³ de la demo se escala por densidad). El factor de acumulación que se muestra es \\(b = T(x)/e^{-\\mu x}\\). Los datos de haz ancho se dan solo para ¹⁸F en plomo y concreto.",
"The barrier section follows TG-{#} for a wall of an uptake room: N patients a week, each in the room for t hours from injection, the source decaying meanwhile, a factor {#} because the patient’s own body absorbs {#}% of the photons, the design goal P for the area beyond the wall and its occupancy factor T, from NCRP Report {#} ({#}). It gives the weekly dose with no wall, the transmission needed, and the lead and concrete that give it in broad and in narrow beam.":
  "La sección de la barrera sigue al TG-{#} para una pared de una sala de captación: N pacientes por semana, cada uno en la sala durante t horas desde la inyección, con la fuente decayendo mientras tanto, un factor {#} porque el propio cuerpo del paciente absorbe el {#}% de los fotones, el objetivo de diseño P para el área detrás de la pared y su factor de ocupación T, del NCRP Report {#} ({#}). Da la dosis semanal sin pared, la transmisión necesaria, y el plomo y el concreto que la dan con haz ancho y con haz estrecho.",
"Record reading stores the shield, both dose rates, the buildup factor and the barrier calculation. Export to worksheet sends the readings to the Data tables below; Clear starts a new series.":
  "Registrar lectura guarda el blindaje, ambas tasas de dosis, el factor de acumulación y el cálculo de la barrera. Exportar a la hoja envía las lecturas a las tablas de datos de abajo; Borrar empieza una serie nueva.",
"Measure the broad beam transmission of {#} keV annihilation photons through lead and concrete, see how much buildup a narrow beam calculation misses, and design the wall of a PET uptake room to the NCRP design goals.":
  "Mide la transmisión de haz ancho de fotones de aniquilación de {#} keV a través de plomo y concreto, observa cuánta acumulación omite un cálculo de haz estrecho, y diseña la pared de una sala de captación PET según los objetivos de diseño del NCRP.",
"A patient injected with ¹⁸F FDG rests in an uptake room for about an hour while the tracer reaches the tissues, and is the room’s source of {#} keV photons. Behind a thick shield, photons that scatter in the shield and still come out add to the dose, so the transmission of a broad beam is larger than \\(e^{-\\mu x}\\):":
  "Un paciente inyectado con ¹⁸F FDG reposa en una sala de captación durante cerca de una hora mientras el trazador llega a los tejidos, y es la fuente de fotones de {#} keV de la sala. Detrás de un blindaje grueso, los fotones que se dispersan en el blindaje y aun así salen se suman a la dosis, así que la transmisión de un haz ancho es mayor que \\(e^{-\\mu x}\\):",
"\\[T(x) = b(x)\\,e^{-\\mu x}, \\qquad b \\ge 1 .\\]":
  "\\[T(x) = b(x)\\,e^{-\\mu x}, \\qquad b \\ge 1 .\\]",
"TG-{#} gives broad beam transmission curves for {#} keV photons in lead, concrete and iron, fitted to Archer’s form above.":
  "El TG-{#} da curvas de transmisión de haz ancho para fotones de {#} keV en plomo, concreto y hierro, ajustadas a la forma de Archer de arriba.",
"The dose beyond the wall of an uptake room, per week and with no wall, is (TG-{#}, with its decay factor written as an integral)":
  "La dosis detrás de la pared de una sala de captación, por semana y sin pared, es (TG-{#}, con su factor de decaimiento escrito como integral)",
"\\[D = 0.64\\,N\\,\\Gamma\\,\\frac{A_0}{d^2}\\int_0^{t_U} e^{-\\lambda t}\\,dt ,\\]":
  "\\[D = 0.64\\,N\\,\\Gamma\\,\\frac{A_0}{d^2}\\int_0^{t_U} e^{-\\lambda t}\\,dt ,\\]",
"with Γ the dose rate constant, A₀ the injected activity, d the distance from the patient to the point beyond the wall, and \\(t_U\\) the uptake time. The wall must transmit at most":
  "con Γ la constante de tasa de dosis, A₀ la actividad inyectada, d la distancia del paciente al punto detrás de la pared, y \\(t_U\\) el tiempo de captación. La pared debe transmitir a lo más",
"\\[B = \\frac{P}{T\\,D},\\]":
  "\\[B = \\frac{P}{T\\,D},\\]",
"where P is the design goal ({#} mSv per week for a controlled area, {#} mSv per week for an uncontrolled one) and T is the occupancy factor of the space beyond ({#} for an office, {#}/{#} for a corridor, {#}/{#} for a stairway).":
  "donde P es el objetivo de diseño ({#} mSv por semana para un área controlada, {#} mSv por semana para una no controlada) y T es el factor de ocupación del espacio de atrás ({#} para una oficina, {#}/{#} para un pasillo, {#}/{#} para una escalera).",
"Do the integral and show that \\(D = 0.64\\,N\\,\\Gamma\\,A_0\\,t_U\\,R_t/d^2\\) with \\(R_t = 1.443\\,(t_{1/2}/t_U)\\left(1 - e^{-0.693\\,t_U/t_{1/2}}\\right)\\), TG-{#}’s decay factor. Evaluate \\(R_t\\) for \\(t_U\\) = {#} h and \\(t_{1/2}\\) = {#} min.":
  "Resuelve la integral y demuestra que \\(D = 0.64\\,N\\,\\Gamma\\,A_0\\,t_U\\,R_t/d^2\\) con \\(R_t = 1.443\\,(t_{1/2}/t_U)\\left(1 - e^{-0.693\\,t_U/t_{1/2}}\\right)\\), el factor de decaimiento del TG-{#}. Evalúa \\(R_t\\) para \\(t_U\\) = {#} h y \\(t_{1/2}\\) = {#} min.",
"The setup has {#} patients a week, {#} MBq each, an uptake time of {#} h, the chair {#} m from the point beyond the wall, and an office beyond it (uncontrolled, T = {#}). With Γ = {#} µSv m²/(MBq h), find the weekly dose with no wall and the transmission B the wall must have.":
  "La configuración tiene {#} pacientes por semana, {#} MBq cada uno, un tiempo de captación de {#} h, el sillón a {#} m del punto detrás de la pared, y una oficina detrás de ella (no controlada, T = {#}). Con Γ = {#} µSv m²/(MBq h), encuentra la dosis semanal sin pared y la transmisión B que debe tener la pared.",
"Invert Archer’s form to show that \\(x = \\frac{1}{\\alpha\\gamma}\\ln\\frac{B^{-\\gamma} + \\beta/\\alpha}{1 + \\beta/\\alpha}\\), and find the lead thickness for your B.":
  "Invierte la forma de Archer para demostrar que \\(x = \\frac{1}{\\alpha\\gamma}\\ln\\frac{B^{-\\gamma} + \\beta/\\alpha}{1 + \\beta/\\alpha}\\), y encuentra el espesor de plomo para tu B.",
"Behind {#} cm of lead and behind {#} cm of concrete, a narrow beam of {#} keV photons is cut to a few percent. Which shield do you expect to have the larger buildup factor b, or will the two be about the same? Say what you expect and why.":
  "Detrás de {#} cm de plomo y detrás de {#} cm de concreto, un haz estrecho de fotones de {#} keV se reduce a unos pocos por ciento. ¿Cuál blindaje esperas que tenga el mayor factor de acumulación b, o serán casi iguales? Di qué esperas y por qué.",
"No hazards in the virtual lab. In a real PET suite the largest doses to staff come from drawing up and injecting the dose and from escorting the patient, not from the walls; lead syringe shields and distance do most of the work.":
  "No hay riesgos en el laboratorio virtual. En una unidad PET real, las mayores dosis al personal provienen de preparar e inyectar la dosis y de acompañar al paciente, no de las paredes; los protectores de plomo para jeringas y la distancia hacen la mayor parte del trabajo.",
"<strong>Transmission.</strong> ({#}) Choose the PET uptake room setup (¹⁸F, {#} MBq, {#} m, Beam set to broad, with buildup). The setup puts in lead (Shield: lead). Set Shield thickness x to {#} and press Record reading. ({#}) Set Shield thickness x to {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} cm, recording a reading at each. To set an exact value, click the number beside Shield thickness x, type it and press Enter. Each reading stores both the narrow and the broad beam rate. Press Export to worksheet; the readings go to Table {#}. ({#}) Press Clear, press concrete under Shield, and record readings at {#}, {#}, {#}, {#}, {#}, {#} and {#} cm. Export them, into a second copy of Table {#}, and Clear.":
  "<strong>Transmisión.</strong> ({#}) Elige la configuración Sala de captación PET (¹⁸F, {#} MBq, {#} m, Haz en ancho, con acumulación). La configuración pone plomo (Blindaje: plomo). Fija el Espesor del blindaje x en {#} y pulsa Registrar lectura. ({#}) Fija el Espesor del blindaje x en {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} cm, registrando una lectura en cada uno. Para fijar un valor exacto, haz clic en el número junto a Espesor del blindaje x, escríbelo y pulsa Enter. Cada lectura guarda la tasa del haz angosto y la del haz ancho. Pulsa Exportar a la hoja; las lecturas van a la Tabla {#}. ({#}) Pulsa Borrar, pulsa concreto en Blindaje y registra lecturas a {#}, {#}, {#}, {#}, {#}, {#} y {#} cm. Expórtalas, en una segunda copia de la Tabla {#}, y Borra.",
"<strong>Barrier design.</strong> The inputs are in the Barrier for a PET uptake room section of the side panel. ({#}) With lead of any thickness, check that they are at the setup’s values (Patients per week {#}, Time in the room {#} h, Beyond the wall: Offices, labs, nursing stations, Uncontrolled area, and The source is a patient checked) and record a reading. ({#}) Change one input at a time from these values, recording a reading for each and setting it back before the next: Patients per week {#}; Time in the room {#} h; Beyond the wall: Corridors, patient rooms, staff lounges (T = {#}/{#}); Controlled area; The source is a patient unchecked. Export the readings; they go to Table {#}.":
  "<strong>Diseño de la barrera.</strong> Las entradas están en la sección Barrera para una sala de captación PET del panel lateral. ({#}) Con plomo de cualquier espesor, comprueba que estén en los valores de la configuración (Pacientes por semana {#}, Tiempo en la sala {#} h, Más allá de la pared: Oficinas, laboratorios, estaciones de enfermería, Área no controlada, y La fuente es un paciente marcado) y registra una lectura. ({#}) Cambia una entrada a la vez a partir de estos valores, registrando una lectura para cada una y volviéndola a su valor antes de la siguiente: Pacientes por semana {#}; Tiempo en la sala {#} h; Más allá de la pared: Pasillos, habitaciones de pacientes, salas del personal (T = {#}/{#}); Área controlada; La fuente es un paciente sin marcar. Exporta las lecturas; van a la Tabla {#}.",
"Table {#}. Transmission of {#} keV photons, ¹⁸F at {#} m.":
  "Tabla {#}. Transmisión de fotones de {#} keV, ¹⁸F a {#} m.",
"<span>B</span>Shield":
  "<span>B</span>Blindaje",
"<span>C</span>Thickness x (cm)":
  "<span>C</span>Espesor x (cm)",
"<span>D</span>Narrow beam rate (µSv/h)":
  "<span>D</span>Tasa de haz estrecho (µSv/h)",
"<span>E</span>Broad beam rate (µSv/h)":
  "<span>E</span>Tasa de haz ancho (µSv/h)",
"<span>F</span>Buildup factor b":
  "<span>F</span>Factor de acumulación b",
"<span>G</span>ln(T) broad":
  "<span>G</span>ln(T) ancho",
"<span>H</span>ln(T) narrow":
  "<span>H</span>ln(T) estrecho",
"Shield, row {#}":
  "Blindaje, fila {#}",
"Thickness x (cm), row {#}":
  "Espesor x (cm), fila {#}",
"Narrow beam rate (µSv/h), row {#}":
  "Tasa de haz estrecho (µSv/h), fila {#}",
"Broad beam rate (µSv/h), row {#}":
  "Tasa de haz ancho (µSv/h), fila {#}",
"Buildup factor b, row {#}":
  "Factor de acumulación b, fila {#}",
"ln(T) broad, row {#}":
  "ln(T) ancho, fila {#}",
"ln(T) narrow, row {#}":
  "ln(T) estrecho, fila {#}",
"Table {#}. Barrier for the uptake room wall.":
  "Tabla {#}. Barrera para la pared de la sala de captación.",
"<span>B</span>Patients a week N":
  "<span>B</span>Pacientes por semana N",
"<span>C</span>Uptake time (h)":
  "<span>C</span>Tiempo de captación (h)",
"<span>D</span>Occupancy T":
  "<span>D</span>Ocupación T",
"<span>E</span>Design goal P (mSv/wk)":
  "<span>E</span>Objetivo de diseño P (mSv/sem)",
"<span>F</span>Patient absorption":
  "<span>F</span>Absorción del paciente",
"<span>G</span>Weekly dose, no wall (mSv)":
  "<span>G</span>Dosis semanal, sin pared (mSv)",
"<span>H</span>Transmission needed B":
  "<span>H</span>Transmisión necesaria B",
"<span>I</span>Lead, broad beam (mm)":
  "<span>I</span>Plomo, haz ancho (mm)",
"<span>J</span>Lead, narrow beam (mm)":
  "<span>J</span>Plomo, haz estrecho (mm)",
"<span>K</span>Concrete, broad beam (cm)":
  "<span>K</span>Concreto, haz ancho (cm)",
"Patients a week N, row {#}":
  "Pacientes por semana N, fila {#}",
"Uptake time (h), row {#}":
  "Tiempo de captación (h), fila {#}",
"Occupancy T, row {#}":
  "Ocupación T, fila {#}",
"Design goal P (mSv/wk), row {#}":
  "Objetivo de diseño P (mSv/sem), fila {#}",
"Patient absorption, row {#}":
  "Absorción del paciente, fila {#}",
"Weekly dose, no wall (mSv), row {#}":
  "Dosis semanal, sin pared (mSv), fila {#}",
"Transmission needed B, row {#}":
  "Transmisión necesaria B, fila {#}",
"Lead, broad beam (mm), row {#}":
  "Plomo, haz ancho (mm), fila {#}",
"Lead, narrow beam (mm), row {#}":
  "Plomo, haz estrecho (mm), fila {#}",
"Concrete, broad beam (cm), row {#}":
  "Concreto, haz ancho (cm), fila {#}",
"Work out ln(T) = ln(rate/rate at x = {#}) for both beams in Table {#}.":
  "Calcula ln(T) = ln(tasa/tasa en x = {#}) para ambos haces en la Tabla {#}.",
"Graph ln(T) broad against x for lead. Fit a line to the points from {#} cm on, and compare its slope with α and with the narrow beam μ. Then fit the points from {#} to {#} cm and compare with α + β.":
  "Grafica ln(T) ancho en función de x para el plomo. Ajusta una recta a los puntos desde {#} cm en adelante, y compara su pendiente con α y con la μ de haz estrecho. Luego ajusta los puntos de {#} a {#} cm y compara con α + β.",
"Graph the buildup factor against x for lead. How large is it at the thickness your wall needs? What error does a narrow beam design make there, in dose and in millimeters of lead?":
  "Grafica el factor de acumulación en función de x para el plomo. ¿Qué tan grande es en el espesor que necesita tu pared? ¿Qué error comete ahí un diseño de haz estrecho, en dosis y en milímetros de plomo?",
"For concrete, graph ln(T) broad against x and fit a line to the points from {#} cm on. The broad beam tenth value layer at large thickness is ln {#} divided by minus the slope. Do the same with ln(T) narrow to get the narrow beam tenth value layer, ln {#}/μ, and compare the two.":
  "Para el concreto, grafica ln(T) ancho en función de x y ajusta una recta a los puntos de {#} cm en adelante. La capa de décima parte del haz ancho a espesor grande es ln {#} dividido entre menos la pendiente. Haz lo mismo con ln(T) estrecho para obtener la capa de décima parte del haz estrecho, ln {#}/μ, y compara las dos.",
"Check the first row of Table {#} against your Before the lab answers {#} and {#}. Explain any difference in the weekly dose from the demo’s dose rate constant.":
  "Compara la primera fila de la Tabla {#} con tus respuestas {#} y {#} de Antes del laboratorio. Explica cualquier diferencia en la dosis semanal debida a la constante de tasa de dosis de la demo.",
"Which input in Table {#} changes the lead needed the most per factor of change? From the logarithm in Before the lab question {#}, show that doubling the patient load (halving B) adds a thickness that approaches ln {#}/α once \\(B^{-\\gamma} \\gg \\beta/\\alpha\\), and compare that limit with the extra lead your rows give for a doubled load. Why is the step larger for a thin wall?":
  "¿Qué entrada de la Tabla {#} cambia más el plomo necesario por cada factor de cambio? A partir del logaritmo de la pregunta {#} de Antes del laboratorio, demuestra que duplicar la carga de pacientes (reducir B a la mitad) agrega un espesor que tiende a ln {#}/α cuando \\(B^{-\\gamma} \\gg \\beta/\\alpha\\), y compara ese límite con el plomo extra que dan tus filas para una carga duplicada. ¿Por qué el paso es mayor para una pared delgada?",
"The dose rate constant itself is uncertain by a few percent (this demo’s value and TG-{#}’s differ by {#}%), and Archer’s form is a fit to calculated transmission data, not an exact law. Find how much the lead thickness changes for a {#}% change in B, from your inversion formula, and say whether that is significant next to the thickness of a commercial lead sheet ({#}/{#} inch is {#} mm).":
  "La constante de tasa de dosis misma tiene una incertidumbre de unos pocos por ciento (el valor de esta demo y el del TG-{#} difieren en un {#}%), y la forma de Archer es un ajuste a datos de transmisión calculados, no una ley exacta. Encuentra cuánto cambia el espesor de plomo para un cambio del {#}% en B, con tu fórmula de inversión, y di si eso es significativo junto al espesor de una lámina de plomo comercial ({#}/{#} de pulgada son {#} mm).",
"TG-{#}’s dose rate constant for a patient, {#} µSv m²/(MBq h), is {#} times the bare source value. Why is it smaller, and why might a design leave that factor out for the hot lab, where the activity is in a vial or syringe?":
  "La constante de tasa de dosis del TG-{#} para un paciente, {#} µSv m²/(MBq h), es {#} veces el valor de la fuente desnuda. ¿Por qué es menor, y por qué un diseño podría omitir ese factor para el laboratorio caliente, donde la actividad está en un vial o una jeringa?",
"Before the lab {#} compared {#} cm of lead with {#} cm of concrete. What buildup factors does Table {#} give at those two thicknesses, and what happens to a scattered photon in each material that accounts for the difference? Concrete needs many more centimeters than lead for the same transmission, yet many PET suites use concrete or concrete block. Why? Compare the mass per unit area of your broad beam lead and concrete walls.":
  "Antes del laboratorio {#} comparó {#} cm de plomo con {#} cm de concreto. ¿Qué factores de acumulación da la Tabla {#} con esos dos espesores, y qué le pasa a un fotón dispersado en cada material que explica la diferencia? El concreto necesita muchos más centímetros que el plomo para la misma transmisión, y aun así muchas salas de PET usan concreto o bloque de concreto. ¿Por qué? Compara la masa por unidad de área de tus paredes de plomo y de concreto para haz ancho.",
"Prelab answers, both tables with their graphs and fits, your wall thickness with its uncertainty and the narrow beam error, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ambas tablas con sus gráficas y ajustes, el espesor de tu pared con su incertidumbre y el error de haz estrecho, y las respuestas a las preguntas. Identifica los datos simulados.",
"Occupancy factor of the space beyond the wall":
  "Factor de ocupación del espacio detrás de la pared",
"Differential (dt: a short time)":
  "Diferencial (dt: un tiempo corto)",
"Activity injected into each patient":
  "Actividad inyectada a cada paciente",
"Transmission the wall must have, P/(T D)":
  "Transmisión que debe tener la pared, P/(T D)",
"Weekly dose beyond the wall with no wall":
  "Dosis semanal detrás de la pared sin pared",
"Dose rate constant of ¹⁸F":
  "Constante de tasa de dosis del ¹⁸F",
"Number of patients a week":
  "Número de pacientes por semana",
"Design goal for the area beyond the wall":
  "Objetivo de diseño para el área detrás de la pared",
"Decay factor over the uptake time":
  "Factor de decaimiento durante el tiempo de captación",
"Broad beam transmission through a shield of thickness x":
  "Transmisión de haz ancho a través de un blindaje de espesor x",
"Fit parameter of Archer's form, the slope of −ln T in a thick shield":
  "Parámetro de ajuste de la forma de Archer, la pendiente de −ln T en un blindaje grueso",
"Buildup factor, T(x)/e^(−μx)":
  "Factor de acumulación, T(x)/e^(−μx)",
"Fit parameter of Archer's form":
  "Parámetro de ajuste de la forma de Archer",
"Distance from the patient to the point beyond the wall":
  "Distancia del paciente al punto detrás de la pared",
"Decay constant of ¹⁸F":
  "Constante de decaimiento del ¹⁸F",
"Narrow beam linear attenuation coefficient at {#} keV":
  "Coeficiente lineal de atenuación de haz estrecho a {#} keV",
"Time since the injection":
  "Tiempo desde la inyección",
"Half life of ¹⁸F":
  "Vida media del ¹⁸F",
"Uptake time, how long each patient stays in the room":
  "Tiempo de captación, cuánto tiempo permanece cada paciente en la sala",
"Thickness of the shield":
  "Espesor del blindaje",
"Nuclear Reactions, Fission and Fusion (broad beam)":
  "Reacciones nucleares, fisión y fusión (haz ancho)",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"Concrete needs many more centimeters than lead for the same transmission, yet many PET suites use concrete or concrete block. Why? Compare the mass per unit area of your broad beam lead and concrete walls.":
  "El concreto necesita muchos más centímetros que el plomo para la misma transmisión, y sin embargo muchas unidades PET usan concreto o bloques de concreto. ¿Por qué? Compara la masa por unidad de área de tus paredes de plomo y de concreto de haz ancho.",
"NCRP {#}’s design goal for uncontrolled areas, {#} mSv per week, works out to {#} mSv a year. Compare with the {#} mSv a year natural background in the United States (OpenStax Vol {#} §{#}).":
  "El objetivo de diseño del NCRP {#} para áreas no controladas, {#} mSv por semana, equivale a {#} mSv al año. Compáralo con los {#} mSv al año de fondo natural en Estados Unidos (OpenStax Vol {#} §{#}).",
"<strong>Transmission.</strong> ({#}) Choose the PET uptake room setup (¹⁸F, {#} MBq, {#} m, Beam set to broad, with buildup). The setup puts in lead (Shield: lead). Set Shield thickness x to {#} and press Record reading. ({#}) Set Shield thickness x to {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} cm, recording a reading at each. The slider moves {#} cm per arrow key press: drag it near the value and finish with the arrow keys. Each reading stores both the narrow and the broad beam rate. Press Export to worksheet; the readings go to Table {#}. ({#}) Press Clear, press concrete under Shield, and record readings at {#}, {#}, {#}, {#}, {#}, {#} and {#} cm. Export them, into a second copy of Table {#}, and Clear.":
  "<strong>Transmisión.</strong> ({#}) Elige la configuración Sala de captación PET (¹⁸F, {#} MBq, {#} m, Haz fijado en ancho, con acumulación). La configuración pone plomo (Blindaje: plomo). Fija Espesor del blindaje x en {#} y pulsa Registrar lectura. ({#}) Fija Espesor del blindaje x en {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} cm, registrando una lectura en cada una. El control deslizante se mueve {#} cm por pulsación de las flechas: arrástralo cerca del valor y termina con las flechas. Cada lectura guarda tanto la tasa del haz estrecho como la del haz ancho. Pulsa Exportar a la hoja; las lecturas van a la Tabla {#}. ({#}) Pulsa Borrar, pulsa concreto bajo Blindaje, y registra lecturas a {#}, {#}, {#}, {#}, {#}, {#} y {#} cm. Expórtalas, a una segunda copia de la Tabla {#}, y Borra.",
"Show that Archer’s T(x) falls as \\(e^{-\\alpha x}\\) for large x, and that its slope at x = {#} is \\(-(\\alpha + \\beta)\\). Compare α and α + β for lead with the narrow beam μ = {#} /cm at {#} keV (NIST). What do the two comparisons say about the scattered photons in thin and thick shields?":
  "Demuestra que la T(x) de Archer decae como \\(e^{-\\alpha x}\\) para x grande, y que su pendiente en x = {#} es \\(-(\\alpha + \\beta)\\). Compara α y α + β para el plomo con la μ de haz estrecho = {#} /cm a {#} keV (NIST). ¿Qué dicen las dos comparaciones sobre los fotones dispersados en blindajes delgados y gruesos?",
"From NIST, μ/ρ of lead is {#} cm²/g at {#} keV and {#} cm²/g at {#} keV. Interpolate log–log to {#} keV and check the μ above (ρ = {#} g/cm³).":
  "Según el NIST, la μ/ρ del plomo es {#} cm²/g a {#} keV y {#} cm²/g a {#} keV. Interpola en log–log a {#} keV y verifica la μ de arriba (ρ = {#} g/cm³).",
"<strong>Transmission.</strong> In the PET uptake room setup (¹⁸F, {#} MBq, {#} m, broad beam), record readings with no lead, then {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} cm of lead. Export the readings; they go to Table {#}. Clear them, choose concrete, and record readings with {#} to {#} cm in {#} cm steps. Export them, into a second copy of Table {#}, and Clear.":
  "<strong>Transmisión.</strong> En la configuración Sala de captación PET (¹⁸F, {#} MBq, {#} m, haz ancho), registra lecturas sin plomo, luego con {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} cm de plomo. Exporta las lecturas; van a la Tabla {#}. Bórralas, elige concreto, y registra lecturas de {#} a {#} cm en pasos de {#} cm. Expórtalas, a una segunda copia de la Tabla {#}, y Borra.",
"<strong>Barrier design.</strong> With lead of any thickness, set the barrier inputs to the setup’s values ({#} patients a week, {#} h, offices, uncontrolled, patient absorption on) and record a reading. Then change one input at a time from these values, recording a reading for each: {#} patients a week; {#} h uptake; a corridor beyond the wall (T = {#}/{#}); a controlled area beyond the wall; patient absorption off. Export the readings; they go to Table {#}.":
  "<strong>Diseño de la barrera.</strong> Con plomo de cualquier espesor, fija las entradas de la barrera en los valores de la configuración ({#} pacientes por semana, {#} h, oficinas, no controlada, absorción del paciente activada) y registra una lectura. Luego cambia una entrada a la vez a partir de estos valores, registrando una lectura para cada una: {#} pacientes por semana; {#} h de captación; un pasillo detrás de la pared (T = {#}/{#}); un área controlada detrás de la pared; absorción del paciente desactivada. Exporta las lecturas; van a la Tabla {#}.",
"Repeat Analysis {#} for concrete, and find the broad beam tenth value layer at large thickness, ln {#}/α scaled to the demo’s density. Compare with the narrow beam tenth value layer, ln {#}/μ.":
  "Repite el Análisis {#} para el concreto, y encuentra la capa decimorreductora de haz ancho a gran espesor, ln {#}/α escalada a la densidad de la demo. Compárala con la capa decimorreductora de haz estrecho, ln {#}/μ.",
"Why does the buildup factor grow with thickness, while the narrow beam calculation stays exact for a pencil beam aimed at a small detector?":
  "¿Por qué el factor de acumulación crece con el espesor, mientras que el cálculo de haz estrecho sigue siendo exacto para un haz muy fino dirigido a un detector pequeño?",
"A ¹³⁷Cs source gives a {#} keV γ ray. Would the lead buildup factor at the same μx be larger or smaller than for {#} keV, and why can the demo not tell you?":
  "Una fuente de ¹³⁷Cs da un rayo γ de {#} keV. ¿El factor de acumulación del plomo a la misma μx sería mayor o menor que para {#} keV, y por qué la demo no te lo puede decir?"
});
