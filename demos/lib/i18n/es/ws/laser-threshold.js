/* ws/laser-threshold in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/laser-threshold', {
"Medium":
  "Medio",
"Mirror R":
  "Espejo R",
"Pump rate W ({#}/s)":
  "Tasa de bombeo W ({#}/s)",
"Absorbed pump power (W)":
  "Potencia de bombeo absorbida (W)",
"Output power (W)":
  "Potencia de salida (W)",
"Inversion N/N_th":
  "Inversión N/N_th",
"Mirror spacing L (cm)":
  "Separación de los espejos L (cm)",
"Mode spacing (MHz)":
  "Separación entre modos (MHz)",
"Modes lasing":
  "Modos que emiten láser",
"Band above threshold (MHz)":
  "Banda sobre el umbral (MHz)",
"2L × mode spacing (m/s)":
  "2L × separación entre modos (m/s)",
"Lasers: Threshold, Efficiency and Cavity Modes | VirtualDemos":
  "Láseres: umbral, eficiencia y modos de la cavidad | VirtualDemos",
"Lasers: Threshold, Efficiency and Cavity Modes":
  "Láseres: umbral, eficiencia y modos de la cavidad",
"<strong>Setups in the demo:</strong> Absorption vs stimulated emission; No laser without inversion; Threshold; Turning on: relaxation oscillations; Three level vs four level; Cavity modes of a He–Ne laser. The views are Processes, Laser, Levels and Modes.":
  "<strong>Configuraciones en la demo:</strong> Absorción frente a emisión estimulada; Sin inversión no hay láser; Umbral; Encendido: oscilaciones de relajación; Tres niveles frente a cuatro niveles; Modos de la cavidad de un láser de He–Ne. Las vistas son Procesos, Láser, Niveles y Modos.",
"The Laser view is a rod of gain medium, {#} cm long, in a cavity {#} cm long between two mirrors. One mirror reflects everything; the output mirror has reflectivity R. Besides the light that leaves through it, {#}% of the light is lost on each round trip.":
  "La vista Láser es una barra de medio activo, de {#} cm de largo, en una cavidad de {#} cm de largo entre dos espejos. Un espejo lo refleja todo; el espejo de salida tiene reflectividad R. Además de la luz que sale a través de él, se pierde el {#}% de la luz en cada viaje de ida y vuelta.",
"Nd:YAG is pumped at {#} nm and lases at {#} nm; its lower laser level empties at once (an ideal four level laser). Ruby is pumped with green light ({#} nm) and lases at {#} nm down to its ground state (an ideal three level laser). Doping, cross sections and lifetimes are from Koechner, <em>Solid State Laser Engineering</em>.":
  "El Nd:YAG se bombea a {#} nm y emite láser a {#} nm; su nivel láser inferior se vacía de inmediato (un láser ideal de cuatro niveles). El rubí se bombea con luz verde ({#} nm) y emite láser a {#} nm hacia su estado fundamental (un láser ideal de tres niveles). El dopaje, las secciones eficaces y los tiempos de vida son de Koechner, <em>Solid State Laser Engineering</em>.",
"Pump rate \\(W_p\\) is the rate at which each ion in the ground state is pumped, per second. The demo solves the rate equations for the inversion N and the number of photons q in the cavity. A small fraction of the spontaneous emission ({#}⁻⁹) goes into the laser mode and starts it.":
  "La tasa de bombeo \\(W_p\\) es la tasa a la que se bombea cada ion en el estado fundamental, por segundo. La demo resuelve las ecuaciones de tasa para la inversión N y el número de fotones q en la cavidad. Una pequeña fracción de la emisión espontánea ({#}⁻⁹) entra en el modo láser y lo inicia.",
"Threshold and output shows the threshold, the output power now, the inversion now in units of the threshold inversion \\(N_\\mathrm{th}\\), and the steady output the rate equations predict. After the pump or the mirror changes, the output rings and then settles; the trace shows it.":
  "Umbral y salida muestra el umbral, la potencia de salida actual, la inversión actual en unidades de la inversión de umbral \\(N_\\mathrm{th}\\), y la salida estacionaria que predicen las ecuaciones de tasa. Después de que cambian el bombeo o el espejo, la salida oscila y luego se estabiliza; la traza lo muestra.",
"The Modes view is a He–Ne laser at {#} nm with mirror spacing L. Its readouts give the mode spacing, the Doppler width of the gain and how many modes lase.":
  "La vista Modos es un láser de He–Ne a {#} nm con separación de espejos L. Sus lecturas en pantalla dan la separación entre modos, el ancho Doppler de la ganancia y cuántos modos emiten láser.",
"Record reading works in the Laser view once the output has settled. It stores the medium, R, the pump rate, the absorbed pump power, the output power, the inversion N/N<sub>th</sub> and the time since the pump was switched on. Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura funciona en la vista Láser una vez que la salida se ha estabilizado. Guarda el medio, R, la tasa de bombeo, la potencia de bombeo absorbida, la potencia de salida, la inversión N/N<sub>th</sub> y el tiempo desde que se encendió el bombeo. Exportar a la hoja envía las lecturas a la tabla de datos de abajo. Borrar inicia una nueva serie, que va a una nueva copia de la tabla.",
"Measure how the output of a laser depends on the pump power, find the threshold and the slope efficiency for two output mirrors and for a three level and a four level medium, and measure the spacing of the cavity modes of a He–Ne laser.":
  "Mide cómo depende la salida de un láser de la potencia de bombeo, encuentra el umbral y la eficiencia de pendiente para dos espejos de salida y para un medio de tres niveles y uno de cuatro niveles, y mide la separación de los modos de la cavidad de un láser de He–Ne.",
"An atom in an upper level can be made to emit by a passing photon of the right energy, and the new photon travels with the first, in step (§{#}). This stimulated emission competes with absorption. Light grows as it passes through a medium only if more atoms are in the upper level than in the lower: a population inversion. Atoms in thermal equilibrium never have one, and pumping two levels with light cannot make one, so lasers use three or four levels.":
  "Un átomo en un nivel superior puede ser inducido a emitir por un fotón que pasa con la energía correcta, y el nuevo fotón viaja con el primero, en fase (§{#}). Esta emisión estimulada compite con la absorción. La luz crece al atravesar un medio solo si hay más átomos en el nivel superior que en el inferior: una inversión de población. Los átomos en equilibrio térmico nunca la tienen, y bombear dos niveles con luz no puede producirla, así que los láseres usan tres o cuatro niveles.",
"In a laser, light bounces between two mirrors through the medium. It builds up when the gain on a round trip beats the loss: light leaving through the output mirror (a fraction \\(1 - R\\) per round trip) and other losses. The inversion at which gain equals loss is the threshold, \\(N_\\mathrm{th}\\). Above threshold the inversion stays at \\(N_\\mathrm{th}\\), however hard the medium is pumped, and every extra pump photon absorbed adds to the laser light. So the output rises in a straight line,":
  "En un láser, la luz rebota entre dos espejos a través del medio. Crece cuando la ganancia en un viaje de ida y vuelta supera la pérdida: la luz que sale por el espejo de salida (una fracción \\(1 - R\\) por viaje de ida y vuelta) y otras pérdidas. La inversión a la que la ganancia es igual a la pérdida es el umbral, \\(N_\\mathrm{th}\\). Por encima del umbral la inversión se queda en \\(N_\\mathrm{th}\\), por más que se bombee el medio, y cada fotón de bombeo extra absorbido se suma a la luz láser. Así que la salida sube en línea recta,",
"\\[P_\\mathrm{out} = \\eta\\,(P_\\mathrm{abs} - P_\\mathrm{th}),\\]":
  "\\[P_\\mathrm{out} = \\eta\\,(P_\\mathrm{abs} - P_\\mathrm{th}),\\]",
"where \\(P_\\mathrm{abs}\\) is the absorbed pump power and \\(P_\\mathrm{th}\\) its threshold value. In this ideal model the slope efficiency η is the fraction of each pump photon’s energy carried by a laser photon, times the fraction of the light that leaves through the output mirror rather than being lost:":
  "donde \\(P_\\mathrm{abs}\\) es la potencia de bombeo absorbida y \\(P_\\mathrm{th}\\) su valor de umbral. En este modelo ideal la eficiencia de pendiente η es la fracción de la energía de cada fotón de bombeo que lleva un fotón láser, por la fracción de la luz que sale por el espejo de salida en lugar de perderse:",
"\\[\\eta = \\frac{\\lambda_\\mathrm{pump}}{\\lambda_\\mathrm{laser}}\\cdot\\frac{-\\ln R}{-\\ln R - \\ln(0.98)} .\\]":
  "\\[\\eta = \\frac{\\lambda_\\mathrm{pump}}{\\lambda_\\mathrm{laser}}\\cdot\\frac{-\\ln R}{-\\ln R - \\ln(0.98)} .\\]",
"In a four level laser the lower laser level is empty, so any excited ion adds to the inversion. In a three level laser the lower level is the ground state, and more than half of all the ions must be excited before there is any inversion at all.":
  "En un láser de cuatro niveles el nivel láser inferior está vacío, así que cualquier ion excitado se suma a la inversión. En un láser de tres niveles el nivel inferior es el estado fundamental, y más de la mitad de todos los iones deben estar excitados antes de que haya alguna inversión.",
"The mirrors also choose the frequencies. A standing wave fits between mirrors a distance L apart when L is a whole number q of half wavelengths, so the allowed frequencies are \\(\\nu_q = qc/2L\\), spaced by \\(c/2L\\). Every mode inside the band where the gain beats the loss can lase.":
  "Los espejos también eligen las frecuencias. Una onda estacionaria cabe entre espejos separados una distancia L cuando L es un número entero q de medias longitudes de onda, así que las frecuencias permitidas son \\(\\nu_q = qc/2L\\), separadas por \\(c/2L\\). Cada modo dentro de la banda donde la ganancia supera la pérdida puede emitir láser.",
"Find the energies of an {#} nm pump photon and a {#} nm laser photon. What fraction of the pump energy can at most become laser light?":
  "Encuentra las energías de un fotón de bombeo de {#} nm y de un fotón láser de {#} nm. ¿Qué fracción de la energía de bombeo puede, como máximo, convertirse en luz láser?",
"The cavity is {#} cm long, so light takes \\(2L/c\\) for a round trip. With R = {#} and {#}% other loss per round trip, find the photon lifetime \\(\\tau_c = (2L/c)/(-\\ln R - \\ln 0.98)\\), and the slope efficiency η for Nd:YAG.":
  "La cavidad mide {#} cm de largo, así que la luz tarda \\(2L/c\\) en un viaje de ida y vuelta. Con R = {#} y {#}% de otras pérdidas por viaje de ida y vuelta, encuentra el tiempo de vida del fotón \\(\\tau_c = (2L/c)/(-\\ln R - \\ln 0.98)\\), y la eficiencia de pendiente η para el Nd:YAG.",
"Why can a medium with only two levels never amplify light, however hard it is pumped?":
  "¿Por qué un medio con solo dos niveles nunca puede amplificar la luz, por más que se bombee?",
"Find the mode spacing c/2L of a He–Ne laser with L = {#} cm. Its gain is about {#} GHz wide; about how many modes can lase?":
  "Encuentra la separación entre modos c/2L de un láser de He–Ne con L = {#} cm. Su ganancia tiene unos {#} GHz de ancho; ¿más o menos cuántos modos pueden emitir láser?",
"No hazards in the virtual lab. Real laser beams can blind: never look into a beam or its reflection, and wear goggles rated for the wavelength.":
  "No hay peligros en el laboratorio virtual. Los haces láser reales pueden cegar: nunca mires hacia un haz o su reflejo, y usa gafas especificadas para la longitud de onda.",
"<strong>Nd:YAG, R = {#}.</strong> In the Laser view, with Nd:YAG and an output mirror of {#}, set the pump rate to {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} per second, and record a reading for each once the output has settled. Note the threshold pump rate and absorbed power the demo gives.":
  "<strong>Nd:YAG, R = {#}.</strong> En la vista Láser, con Nd:YAG y un espejo de salida de {#}, fija la tasa de bombeo en {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} por segundo, y registra una lectura para cada una una vez que la salida se haya estabilizado. Anota la tasa de bombeo de umbral y la potencia absorbida que da la demo.",
"<strong>Nd:YAG, R = {#}.</strong> Clear the readings. With the output mirror at {#}, record readings at pump rates of {#}, {#}, {#}, {#}, {#} and {#} per second. Send this run to a new copy of the table.":
  "<strong>Nd:YAG, R = {#}.</strong> Borra las lecturas. Con el espejo de salida en {#}, registra lecturas con tasas de bombeo de {#}, {#}, {#}, {#}, {#} y {#} por segundo. Envía esta corrida a una nueva copia de la tabla.",
"<strong>Ruby.</strong> Clear again and pick Ruby, with the output mirror at {#}. Record readings at pump rates of {#}, {#}, {#}, {#}, {#} and {#} per second (the output takes a few milliseconds to settle). Send this run to a third copy.":
  "<strong>Rubí.</strong> Borra de nuevo y elige Rubí, con el espejo de salida en {#}. Registra lecturas con tasas de bombeo de {#}, {#}, {#}, {#}, {#} y {#} por segundo (la salida tarda unos milisegundos en estabilizarse). Envía esta corrida a una tercera copia.",
"<strong>Below threshold.</strong> With Nd:YAG at R = {#}, look at the output power at pump rates of {#}, {#} and {#} per second, and write it down.":
  "<strong>Debajo del umbral.</strong> Con Nd:YAG en R = {#}, observa la potencia de salida con tasas de bombeo de {#}, {#} y {#} por segundo, y anótala.",
"<strong>Cavity modes.</strong> In the Modes view, with the peak gain at {#} times the loss, fill in the second table for mirror spacings of {#}, {#}, {#} and {#} cm.":
  "<strong>Modos de la cavidad.</strong> En la vista Modos, con la ganancia máxima en {#} veces la pérdida, llena la segunda tabla para separaciones de espejos de {#}, {#}, {#} y {#} cm.",
"<span>B</span>Medium":
  "<span>B</span>Medio",
"<span>C</span>Mirror R":
  "<span>C</span>Espejo R",
"<span>D</span>Pump rate W ({#}/s)":
  "<span>D</span>Tasa de bombeo W ({#}/s)",
"<span>E</span>Absorbed pump power (W)":
  "<span>E</span>Potencia de bombeo absorbida (W)",
"<span>F</span>Output power (W)":
  "<span>F</span>Potencia de salida (W)",
"<span>G</span>Inversion N/N_th":
  "<span>G</span>Inversión N/N_th",
"Medium, row {#}":
  "Medio, fila {#}",
"Mirror R, row {#}":
  "Espejo R, fila {#}",
"Pump rate W ({#}/s), row {#}":
  "Tasa de bombeo W ({#}/s), fila {#}",
"Absorbed pump power (W), row {#}":
  "Potencia de bombeo absorbida (W), fila {#}",
"Output power (W), row {#}":
  "Potencia de salida (W), fila {#}",
"Inversion N/N_th, row {#}":
  "Inversión N/N_th, fila {#}",
"<span>A</span>Mirror spacing L (cm)":
  "<span>A</span>Separación de los espejos L (cm)",
"<span>B</span>Mode spacing (MHz)":
  "<span>B</span>Separación entre modos (MHz)",
"<span>C</span>Modes lasing":
  "<span>C</span>Modos que emiten láser",
"<span>D</span>Band above threshold (MHz)":
  "<span>D</span>Banda sobre el umbral (MHz)",
"<span>E</span>2L × mode spacing (m/s)":
  "<span>E</span>2L × separación entre modos (m/s)",
"Mode spacing (MHz), row {#}":
  "Separación entre modos (MHz), fila {#}",
"Modes lasing, row {#}":
  "Modos que emiten láser, fila {#}",
"Band above threshold (MHz), row {#}":
  "Banda sobre el umbral (MHz), fila {#}",
"2L × mode spacing (m/s), row {#}":
  "2L × separación entre modos (m/s), fila {#}",
"Work out the last column yourself.":
  "Calcula tú mismo la última columna.",
"Graph the output power against the absorbed pump power for the Nd:YAG run at R = {#}. Find the slope efficiency and the threshold absorbed power from the slope and the intercept on the power axis, and compare them with your prelab η and the demo’s threshold.":
  "Grafica la potencia de salida en función de la potencia de bombeo absorbida para la corrida de Nd:YAG con R = {#}. Encuentra la eficiencia de pendiente y la potencia absorbida de umbral a partir de la pendiente y de la intersección con el eje de potencia, y compáralas con tu η del prelaboratorio y con el umbral de la demo.",
"Do the same for R = {#}. Compare the threshold and the slope with R = {#}, and explain both changes. Which mirror gives more output at {#} W absorbed?":
  "Haz lo mismo para R = {#}. Compara el umbral y la pendiente con los de R = {#}, y explica ambos cambios. ¿Qué espejo da más salida con {#} W absorbidos?",
"What is the inversion N/N<sub>th</sub> in every reading above threshold? What does that say about the gain once the laser runs?":
  "¿Cuál es la inversión N/N<sub>th</sub> en cada lectura por encima del umbral? ¿Qué dice eso de la ganancia una vez que el láser funciona?",
"For ruby, find the threshold absorbed power and the slope efficiency. Compare them with Nd:YAG in the same cavity, and explain the difference in threshold.":
  "Para el rubí, encuentra la potencia absorbida de umbral y la eficiencia de pendiente. Compáralas con el Nd:YAG en la misma cavidad, y explica la diferencia en el umbral.",
"What was the output below threshold? Where does that light come from?":
  "¿Cuál fue la salida por debajo del umbral? ¿De dónde viene esa luz?",
"From the second table, find c from 2L × mode spacing for each L. How does the number of modes lasing change with L, and why?":
  "A partir de la segunda tabla, encuentra c a partir de 2L × separación entre modos para cada L. ¿Cómo cambia el número de modos que emiten láser con L, y por qué?",
"The simulation has no noise, but a reading taken before the output settles is wrong; the demo records only once the output is within {#}% of its final value. Estimate the uncertainties of the slope and the threshold from the fit. Say whether the measured slope efficiencies agree with the formula within those uncertainties, and why readings close to threshold would bend the line (spontaneous emission into the mode).":
  "La simulación no tiene ruido, pero una lectura tomada antes de que la salida se estabilice es incorrecta; la demo solo registra una vez que la salida está dentro del {#}% de su valor final. Estima las incertidumbres de la pendiente y del umbral a partir del ajuste. Di si las eficiencias de pendiente medidas coinciden con la fórmula dentro de esas incertidumbres, y por qué las lecturas cercanas al umbral curvarían la recta (emisión espontánea hacia el modo).",
"Above threshold, why can’t the inversion grow beyond \\(N_\\mathrm{th}\\) however hard the laser is pumped?":
  "Por encima del umbral, ¿por qué la inversión no puede crecer más allá de \\(N_\\mathrm{th}\\) por más que se bombee el láser?",
"Real ruby lasers are pumped by a flash lamp in short pulses rather than run continuously. Use your threshold comparison to explain why.":
  "Los láseres de rubí reales se bombean con una lámpara de destello en pulsos cortos en lugar de funcionar de forma continua. Usa tu comparación de umbrales para explicar por qué.",
"A laser pointer gives {#} mW at {#} nm. How many photons does it send out each second?":
  "Un apuntador láser da {#} mW a {#} nm. ¿Cuántos fotones emite cada segundo?",
"How short would a He–Ne cavity have to be for only one mode to lase?":
  "¿Qué tan corta tendría que ser una cavidad de He–Ne para que solo un modo emitiera láser?",
"Prelab answers, the three table copies with their graphs and fits, the table of cavity modes, the slope efficiencies and thresholds with uncertainties and comparisons, your below threshold observations, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las tres copias de la tabla con sus gráficas y ajustes, la tabla de modos de la cavidad, las eficiencias de pendiente y los umbrales con incertidumbres y comparaciones, tus observaciones por debajo del umbral, y respuestas a las preguntas. Identifica los datos simulados.",
"Length of the cavity":
  "Longitud de la cavidad",
"Threshold inversion":
  "Inversión de umbral",
"Absorbed pump power":
  "Potencia de bombeo absorbida",
"Output power":
  "Potencia de salida",
"Threshold pump power":
  "Potencia de bombeo de umbral",
"Reflectance of the output mirror":
  "Reflectancia del espejo de salida",
"Pump rate per ground state ion":
  "Tasa de bombeo por ion en el estado fundamental",
"Slope efficiency":
  "Eficiencia de pendiente",
"Laser wavelength":
  "Longitud de onda del láser",
"Pump wavelength":
  "Longitud de onda de bombeo",
"Frequency of cavity mode q":
  "Frecuencia del modo q de la cavidad",
"Mode number, half wavelengths in the cavity":
  "Número de modo, medias longitudes de onda en la cavidad",
"Photon lifetime in the cavity":
  "Tiempo de vida del fotón en la cavidad",
"Lasers and Stimulated Emission (Laser)":
  "Láseres y emisión estimulada (Láser)"
});
