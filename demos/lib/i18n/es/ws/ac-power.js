/* ws/ac-power in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/ac-power', {
"Reading and parts":
  "Lectura y elementos",
"V_rms (V)":
  "V_rms (V)",
"I_rms (A)":
  "I_rms (A)",
"Phase (degrees)":
  "Fase (grados)",
"P_ave (W)":
  "P_ave (W)",
"C switched in (µF)":
  "C conectada (µF)",
"I_rms sin φ (A)":
  "I_rms sin φ (A)",
"Power in an AC Circuit | VirtualDemos":
  "Potencia en un circuito de CA | VirtualDemos",
"Power in an AC Circuit":
  "Potencia en un circuito de CA",
"<strong>Setups for this worksheet:</strong> Wall outlet and Power factor, in the AC power row of AC mode.":
  "<strong>Configuraciones para esta hoja de trabajo:</strong> Contacto de pared y Factor de potencia, en la fila de potencia de CA del modo CA.",
"Both setups run on a North American outlet: {#} V rms at {#} Hz, so the source’s peak voltage is \\(V_0 = 120\\sqrt2 = 169.7\\) V. The parts and meters are ideal, and the circuit is solved exactly in its steady state with complex impedances.":
  "Ambas configuraciones funcionan con un contacto norteamericano: {#} V rms a {#} Hz, así que el voltaje máximo de la fuente es \\(V_0 = 120\\sqrt2 = 169.7\\) V. Los elementos y los medidores son ideales, y el circuito se resuelve exactamente en su estado estacionario con impedancias complejas.",
"In Wall outlet the bulb is a {#} W bulb modeled as its hot resistance, {#} Ω. A real filament’s resistance is far lower when it is cold; that is left out.":
  "En Contacto de pared el foco es un foco de {#} W modelado con su resistencia en caliente, {#} Ω. La resistencia de un filamento real es mucho menor cuando está frío; eso se omite.",
"In Power factor the load is a {#} Ω resistor in series with a {#} mH inductor, a simple model of a motor or other coil. Ammeter A1 reads the current from the source and A2 the current into the load. Closing switch S1 connects capacitor C1 across the load.":
  "En Factor de potencia la carga es una resistencia de {#} Ω en serie con un inductor de {#} mH, un modelo simple de un motor u otra bobina. El amperímetro A1 lee la corriente de la fuente y A2 la corriente hacia la carga. Cerrar el interruptor S1 conecta el capacitor C1 en paralelo con la carga.",
"Meters read rms values. The readout under Source and frequency gives the phase \\(\\phi\\) of the source voltage ahead of its current (positive when the current lags), the power factor and the average power the source delivers.":
  "Los medidores leen valores rms. La lectura en Fuente y frecuencia da la fase \\(\\phi\\) del voltaje de la fuente adelantada respecto a su corriente (positiva cuando la corriente se atrasa), el factor de potencia y la potencia media que entrega la fuente.",
"Under Graphs, Power in time plots \\(p = vi\\) into the selected part over two periods, with its average; with nothing selected it plots the power out of the source. Power, in the same place, plots the average power against frequency.":
  "En Gráficas, Potencia en el tiempo grafica \\(p = vi\\) hacia el elemento seleccionado durante dos periodos, con su promedio; sin nada seleccionado grafica la potencia que sale de la fuente. Potencia, en el mismo lugar, grafica la potencia media en función de la frecuencia.",
"Record reading stores the frequency, the source’s peak and rms voltage, the rms source current, the phase, \\(\\lvert Z\\rvert\\), the average power, every part value and the switch position, as the panel shows them. Export to worksheet sends them to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la frecuencia, el voltaje máximo y rms de la fuente, la corriente rms de la fuente, la fase, \\(\\lvert Z\\rvert\\), la potencia media, el valor de cada elemento y la posición del interruptor, tal como los muestra el panel. Exportar a la hoja los envía a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Blind hides the predictions in the setup notes; the meters and readouts still read.":
  "A ciegas oculta las predicciones de las notas de la configuración; los medidores y las lecturas siguen funcionando.",
"Find how much power an AC source delivers on average, see why a coil load draws more current than its power needs, and correct its power factor with a capacitor.":
  "Descubre cuánta potencia entrega en promedio una fuente de CA, observa por qué una carga con bobina toma más corriente de la que necesita su potencia, y corrige su factor de potencia con un capacitor.",
"The power into a part at each instant is \\(p = vi\\). For a source \\(v = V_0\\sin\\omega t\\) driving a current \\(i = I_0\\sin(\\omega t - \\phi)\\), the average over a cycle is (§{#})":
  "La potencia hacia un elemento en cada instante es \\(p = vi\\). Para una fuente \\(v = V_0\\sin\\omega t\\) que impulsa una corriente \\(i = I_0\\sin(\\omega t - \\phi)\\), el promedio sobre un ciclo es (§{#})",
"\\[P_{\\rm ave} = \\tfrac12 V_0 I_0\\cos\\phi = V_{\\rm rms}I_{\\rm rms}\\cos\\phi.\\]":
  "\\[P_{\\rm ave} = \\tfrac12 V_0 I_0\\cos\\phi = V_{\\rm rms}I_{\\rm rms}\\cos\\phi.\\]",
"The factor \\(\\cos\\phi\\) is the power factor. A resistor has \\(\\phi = 0\\), so \\(P_{\\rm ave} = V_{\\rm rms}I_{\\rm rms} = I_{\\rm rms}^2R\\). An ideal capacitor or inductor has \\(\\phi = \\pm 90°\\) and takes no power on average: it stores energy for a quarter cycle and returns it in the next. For a load with resistance \\(R\\) and reactance \\(X\\) in series,":
  "El factor \\(\\cos\\phi\\) es el factor de potencia. Una resistencia tiene \\(\\phi = 0\\), así que \\(P_{\\rm ave} = V_{\\rm rms}I_{\\rm rms} = I_{\\rm rms}^2R\\). Un capacitor o inductor ideal tiene \\(\\phi = \\pm 90°\\) y no toma potencia en promedio: almacena energía durante un cuarto de ciclo y la devuelve en el siguiente. Para una carga con resistencia \\(R\\) y reactancia \\(X\\) en serie,",
"\\[\\cos\\phi = \\frac{R}{\\sqrt{R^2 + X^2}},\\qquad P_{\\rm ave} = I_{\\rm rms}^2R.\\]":
  "\\[\\cos\\phi = \\frac{R}{\\sqrt{R^2 + X^2}},\\qquad P_{\\rm ave} = I_{\\rm rms}^2R.\\]",
"The current splits into a part in phase with the voltage, \\(I_{\\rm rms}\\cos\\phi = P_{\\rm ave}/V_{\\rm rms}\\), which carries the power, and a part a quarter cycle behind it, \\(I_{\\rm rms}\\sin\\phi\\), which carries none but still flows in the wires. A capacitor across the load draws a current \\(\\omega C V_{\\rm rms}\\) a quarter cycle ahead of the voltage, which cancels some of the lagging part (beyond the book: this is how utilities and factories correct the power factor).":
  "La corriente se divide en una parte en fase con el voltaje, \\(I_{\\rm rms}\\cos\\phi = P_{\\rm ave}/V_{\\rm rms}\\), que lleva la potencia, y una parte un cuarto de ciclo atrasada, \\(I_{\\rm rms}\\sin\\phi\\), que no lleva ninguna pero aun así circula por los cables. Un capacitor en paralelo con la carga toma una corriente \\(\\omega C V_{\\rm rms}\\) un cuarto de ciclo adelantada respecto al voltaje, que cancela parte de la componente atrasada (más allá del libro: así corrigen el factor de potencia las compañías eléctricas y las fábricas).",
"An outlet supplies {#} V rms. What is its peak voltage? A bulb takes {#} W from it: what are its rms current and its resistance?":
  "Un contacto suministra {#} V rms. ¿Cuál es su voltaje máximo? Un foco toma {#} W de él: ¿cuáles son su corriente rms y su resistencia?",
"For the load of {#} Ω in series with {#} mH at {#} Hz, find \\(X_L\\), \\(\\lvert Z\\rvert\\), \\(\\phi\\), the power factor, \\(I_{\\rm rms}\\) and \\(P_{\\rm ave}\\).":
  "Para la carga de {#} Ω en serie con {#} mH a {#} Hz, encuentra \\(X_L\\), \\(\\lvert Z\\rvert\\), \\(\\phi\\), el factor de potencia, \\(I_{\\rm rms}\\) y \\(P_{\\rm ave}\\).",
"The load takes the same power whether or not a capacitor sits across it. Why would the utility still want the capacitor there?":
  "La carga toma la misma potencia haya o no un capacitor en paralelo con ella. ¿Por qué la compañía eléctrica querría de todos modos el capacitor ahí?",
"The virtual outlet is harmless. A real outlet can kill: never work on mains wiring, and treat the {#} V peak, not the {#} V rms, as the voltage insulation must stand.":
  "El contacto virtual es inofensivo. Un contacto real puede matar: nunca trabajes en la instalación eléctrica de la red, y considera los {#} V máximos, no los {#} V rms, como el voltaje que debe soportar el aislamiento.",
"<strong>Part {#}, wall outlet.</strong> Open the Wall outlet setup and take a reading. Pick Power in time and read the largest and smallest values of \\(p\\) for the bulb and how many times per second \\(p\\) repeats. Change the bulb to {#} Ω (a {#} W bulb) and take a second reading. Export both to the worksheet, then clear the readings.":
  "<strong>Parte {#}, contacto de pared.</strong> Abre la configuración Contacto de pared y toma una lectura. Elige Potencia en el tiempo y lee los valores máximo y mínimo de \\(p\\) para el foco y cuántas veces por segundo se repite \\(p\\). Cambia el foco a {#} Ω (un foco de {#} W) y toma una segunda lectura. Exporta ambas a la hoja y luego borra las lecturas.",
"<strong>Part {#}, power factor.</strong> Open the Power factor setup. Take a reading with S1 open. Close S1 and take readings with C1 at {#}, {#}, {#}, {#}, {#} and {#} µF. Note A2 each time. Export the series (it goes into a second copy of the table).":
  "<strong>Parte {#}, factor de potencia.</strong> Abre la configuración Factor de potencia. Toma una lectura con S1 abierto. Cierra S1 y toma lecturas con C1 en {#}, {#}, {#}, {#}, {#} y {#} µF. Anota A2 cada vez. Exporta la serie (va a una segunda copia de la tabla).",
"<strong>Part {#}, power in time.</strong> In the Power factor setup with S1 open, look at Power in time for R1, for L1 and for the source in turn. Then close S1 and look at C1.":
  "<strong>Parte {#}, potencia en el tiempo.</strong> En la configuración Factor de potencia con S1 abierto, mira por turnos Potencia en el tiempo para R1, para L1 y para la fuente. Luego cierra S1 y mira C1.",
"Part {#} goes in the first copy of the table and Part {#} in the second. Fill in the last two columns yourself for Part {#}: the capacitance switched in ({#} with S1 open), and \\(I_{\\rm rms}\\sin\\phi\\) from the current and phase.":
  "La Parte {#} va en la primera copia de la tabla y la Parte {#} en la segunda. Llena tú mismo las últimas dos columnas para la Parte {#}: la capacitancia conectada ({#} con S1 abierto), e \\(I_{\\rm rms}\\sin\\phi\\) a partir de la corriente y la fase.",
"<span>A</span>Reading and parts":
  "<span>A</span>Lectura y elementos",
"<span>C</span>V_rms (V)":
  "<span>C</span>V_rms (V)",
"<span>D</span>I_rms (A)":
  "<span>D</span>I_rms (A)",
"<span>E</span>Phase (degrees)":
  "<span>E</span>Fase (grados)",
"<span>F</span>P_ave (W)":
  "<span>F</span>P_ave (W)",
"<span>G</span>C switched in (µF)":
  "<span>G</span>C conectada (µF)",
"<span>H</span>I_rms sin φ (A)":
  "<span>H</span>I_rms sin φ (A)",
"Reading and parts, row {#}":
  "Lectura y elementos, fila {#}",
"V_rms (V), row {#}":
  "V_rms (V), fila {#}",
"I_rms (A), row {#}":
  "I_rms (A), fila {#}",
"Phase (degrees), row {#}":
  "Fase (grados), fila {#}",
"P_ave (W), row {#}":
  "P_ave (W), fila {#}",
"C switched in (µF), row {#}":
  "C conectada (µF), fila {#}",
"I_rms sin φ (A), row {#}":
  "I_rms sen φ (A), fila {#}",
"Part {#}: compare \\(P_{\\rm ave}\\) with \\(V_{\\rm rms}I_{\\rm rms}\\) and with \\(V_{\\rm rms}^2/R\\) for both bulbs. From Power in time, what are the largest value of \\(p\\) and its frequency? Explain both from \\(p = V_0I_0\\sin^2\\omega t\\).":
  "Parte {#}: compara \\(P_{\\rm ave}\\) con \\(V_{\\rm rms}I_{\\rm rms}\\) y con \\(V_{\\rm rms}^2/R\\) para ambos focos. A partir de Potencia en el tiempo, ¿cuáles son el valor máximo de \\(p\\) y su frecuencia? Explica ambos a partir de \\(p = V_0I_0\\sin^2\\omega t\\).",
"Part {#} with S1 open: compute \\(V_{\\rm rms}I_{\\rm rms}\\cos\\phi\\) and \\(I_{\\rm rms}^2R\\) and compare them with \\(P_{\\rm ave}\\). Compare the measured phase and power factor with your prelab answer.":
  "Parte {#} con S1 abierto: calcula \\(V_{\\rm rms}I_{\\rm rms}\\cos\\phi\\) e \\(I_{\\rm rms}^2R\\) y compáralos con \\(P_{\\rm ave}\\). Compara la fase y el factor de potencia medidos con tu respuesta previa al laboratorio.",
"Plot \\(I_{\\rm rms}\\sin\\phi\\) against the capacitance switched in. Find the slope and compare it with \\(-2\\pi f V_{\\rm rms}\\).":
  "Grafica \\(I_{\\rm rms}\\sin\\phi\\) en función de la capacitancia conectada. Encuentra la pendiente y compárala con \\(-2\\pi f V_{\\rm rms}\\).",
"From the line, find the capacitance that makes \\(\\sin\\phi = 0\\), so the power factor is {#}. Compare it with \\(X_L/[\\omega(R^2 + X_L^2)]\\).":
  "A partir de la recta, encuentra la capacitancia que hace \\(\\sin\\phi = 0\\), de modo que el factor de potencia sea {#}. Compárala con \\(X_L/[\\omega(R^2 + X_L^2)]\\).",
"How did \\(P_{\\rm ave}\\) change as the capacitance changed, and how did A2 change? Explain both.":
  "¿Cómo cambió \\(P_{\\rm ave}\\) al cambiar la capacitancia, y cómo cambió A2? Explica ambos.",
"The phase is rounded to {#}° and the current to four significant figures. Estimate the largest error these give in \\(I_{\\rm rms}\\sin\\phi\\), and compare it with the scatter about your line. Use the standard errors of the fit for the slope and for the capacitance of part {#}.":
  "La fase está redondeada a {#}° y la corriente a cuatro cifras significativas. Estima el mayor error que estos dan en \\(I_{\\rm rms}\\sin\\phi\\), y compáralo con la dispersión alrededor de tu recta. Usa los errores estándar del ajuste para la pendiente y para la capacitancia de la parte {#}.",
"In Part {#}, describe \\(p(t)\\) for R1, L1 and C1. Which takes energy all the time, and which take it and give it back? Give the average for each.":
  "En la Parte {#}, describe \\(p(t)\\) para R1, L1 y C1. ¿Cuál toma energía todo el tiempo, y cuáles la toman y la devuelven? Da el promedio de cada uno.",
"With S1 open, the power out of the source is negative for part of each cycle. What is happening to the energy then?":
  "Con S1 abierto, la potencia que sale de la fuente es negativa durante parte de cada ciclo. ¿Qué le pasa a la energía entonces?",
"Suppose the wires from the source to the load have a resistance of {#} Ω in all. Ignoring the small change they would make to the current, find the power lost in them with S1 open and with C1 = {#} µF switched in.":
  "Supón que los cables de la fuente a la carga tienen una resistencia total de {#} Ω. Ignorando el pequeño cambio que producirían en la corriente, encuentra la potencia perdida en ellos con S1 abierto y con C1 = {#} µF conectado.",
"What happens to the phase and the source current when C1 is larger than the value from Analysis {#}? Is that better or worse than leaving S1 open?":
  "¿Qué pasa con la fase y con la corriente de la fuente cuando C1 es mayor que el valor del Análisis {#}? ¿Es eso mejor o peor que dejar S1 abierto?",
"Prelab answers, both data tables and the graph, the slope and the capacitance for unit power factor with uncertainties, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, ambas tablas de datos y la gráfica, la pendiente y la capacitancia para factor de potencia unitario con incertidumbres, y las respuestas a las preguntas. Identifica los datos simulados.",
"Peak current":
  "Corriente máxima",
"rms current":
  "Corriente rms",
"Average power":
  "Potencia media",
"Source's peak voltage":
  "Voltaje máximo de la fuente",
"rms voltage":
  "Voltaje rms",
"Reactance of the load":
  "Reactancia de la carga",
"Inductive reactance":
  "Reactancia inductiva",
"Impedance":
  "Impedancia",
"Current at each instant":
  "Corriente en cada instante",
"Power into a part at each instant":
  "Potencia hacia un elemento en cada instante",
"Phase of the source voltage ahead of its current":
  "Fase del voltaje de la fuente adelantada respecto a su corriente",
"Voltage at each instant":
  "Voltaje en cada instante"
});
