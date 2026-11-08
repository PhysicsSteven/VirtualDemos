/* ws/ac-reactance in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/ac-reactance', {
"Reading and parts":
  "Lectura y componentes",
"V_rms (V)":
  "V_rms (V)",
"I_rms (A)":
  "I_rms (A)",
"Phase (degrees)":
  "Fase (grados)",
"X = V_rms/I_rms (Ω)":
  "X = V_rms/I_rms (Ω)",
"Reactance and Phase | VirtualDemos":
  "Reactancia y fase | VirtualDemos",
"Reactance and Phase":
  "Reactancia y fase",
"<strong>Setups for this worksheet:</strong> Resistor only, Capacitor only and Inductor only, in AC mode. The other AC setups belong to the AC Resonance and Power in an AC Circuit worksheets.":
  "<strong>Configuraciones para esta hoja de trabajo:</strong> Solo resistor, Solo capacitor y Solo inductor, en modo CA. Las otras configuraciones de CA corresponden a las hojas de trabajo Resonancia en CA y Potencia en un circuito de CA.",
"AC mode shows the steady state: the response to a sine wave source \\(v = V_0\\sin(2\\pi f t)\\) after the switch on transient has died away. The parts and meters are ideal, and the circuit is solved exactly with complex impedances.":
  "El modo CA muestra el estado estacionario: la respuesta a una fuente senoidal \\(v = V_0\\sin(2\\pi f t)\\) después de que se ha desvanecido el transitorio del encendido. Los componentes y los medidores son ideales, y el circuito se resuelve exactamente con impedancias complejas.",
"Meters read rms values. The readout under Source and frequency gives the peak current \\(I_0\\), the rms current, the impedance \\(\\lvert Z\\rvert = V_0/I_0\\) the source sees and the phase \\(\\phi\\) of the source voltage ahead of its current (positive when the current lags).":
  "Los medidores leen valores rms. La lectura bajo Fuente y frecuencia da la corriente pico \\(I_0\\), la corriente rms, la impedancia \\(\\lvert Z\\rvert = V_0/I_0\\) que ve la fuente y la fase \\(\\phi\\) del voltaje de la fuente adelantado respecto a su corriente (positiva cuando la corriente se atrasa).",
"The oscilloscope shows the voltage and current traces with their phasors beside them, turning at the source frequency. Under Graphs, Reactance plots \\(\\lvert Z\\rvert\\) and the reactance of each capacitor and inductor against frequency on logarithmic scales, and Power in time plots \\(p = vi\\).":
  "El osciloscopio muestra las trazas de voltaje y corriente con sus fasores al lado, girando a la frecuencia de la fuente. En Gráficas, Reactancia grafica \\(\\lvert Z\\rvert\\) y la reactancia de cada capacitor e inductor en función de la frecuencia en escalas logarítmicas, y Potencia en el tiempo grafica \\(p = vi\\).",
"Record reading under Frequency response readings stores the frequency, the source’s peak and rms voltage, the rms current, the phase, \\(\\lvert Z\\rvert\\), the average power, the part values and the rms voltage across each part, as the panel shows them. Export to worksheet sends them to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura en Lecturas de la respuesta en frecuencia guarda la frecuencia, el voltaje pico y rms de la fuente, la corriente rms, la fase, \\(\\lvert Z\\rvert\\), la potencia promedio, los valores de los componentes y el voltaje rms a través de cada componente, tal como los muestra el panel. Exportar a la hoja los envía a la tabla de datos de abajo; Borrar inicia una nueva serie, que va a una nueva copia de la tabla.",
"Blind hides the reactance formulas, the model curves and the predictions; the meters and readouts still read.":
  "A ciegas oculta las fórmulas de la reactancia, las curvas del modelo y las predicciones; los medidores y las lecturas siguen leyendo.",
"Measure how a resistor, a capacitor and an inductor each limit an alternating current, find the capacitance and inductance from how their reactances depend on frequency, and see which way each one shifts the current in time.":
  "Mide cómo un resistor, un capacitor y un inductor limitan cada uno una corriente alterna, encuentra la capacitancia y la inductancia a partir de cómo dependen sus reactancias de la frecuencia, y ve hacia qué lado desplaza cada uno la corriente en el tiempo.",
"An AC source gives \\(v = V_0\\sin\\omega t\\), with \\(\\omega = 2\\pi f\\) (§{#}). Meters read rms values; for a sine wave":
  "Una fuente de CA da \\(v = V_0\\sin\\omega t\\), con \\(\\omega = 2\\pi f\\) (§{#}). Los medidores leen valores rms; para una onda senoidal",
"\\[V_{\\rm rms} = \\frac{V_0}{\\sqrt2},\\qquad I_{\\rm rms} = \\frac{I_0}{\\sqrt2}.\\]":
  "\\[V_{\\rm rms} = \\frac{V_0}{\\sqrt2},\\qquad I_{\\rm rms} = \\frac{I_0}{\\sqrt2}.\\]",
"For a resistor alone, \\(I_0 = V_0/R\\) and the current is in phase with the voltage. A capacitor alone carries a current only while its charge changes, \\(i = C\\,dv/dt\\), so the current peaks a quarter cycle before the voltage. An inductor alone has \\(v = L\\,di/dt\\), so its current peaks a quarter cycle after the voltage (§{#}). In each case the ratio of the voltage amplitude to the current amplitude is the reactance:":
  "Para un resistor solo, \\(I_0 = V_0/R\\) y la corriente está en fase con el voltaje. Un capacitor solo lleva corriente solo mientras su carga cambia, \\(i = C\\,dv/dt\\), así que la corriente llega a su pico un cuarto de ciclo antes que el voltaje. Un inductor solo tiene \\(v = L\\,di/dt\\), así que su corriente llega a su pico un cuarto de ciclo después que el voltaje (§{#}). En cada caso la razón entre la amplitud del voltaje y la amplitud de la corriente es la reactancia:",
"\\[\\begin{gathered} X_C = \\frac{V_0}{I_0} = \\frac{1}{\\omega C} = \\frac{1}{2\\pi f C}, \\\\[4pt] X_L = \\frac{V_0}{I_0} = \\omega L = 2\\pi f L. \\end{gathered}\\]":
  "\\[\\begin{gathered} X_C = \\frac{V_0}{I_0} = \\frac{1}{\\omega C} = \\frac{1}{2\\pi f C}, \\\\[4pt] X_L = \\frac{V_0}{I_0} = \\omega L = 2\\pi f L. \\end{gathered}\\]",
"The ratio of the rms values is the same, \\(X = V_{\\rm rms}/I_{\\rm rms}\\). A capacitor’s reactance falls as the frequency rises and an inductor’s grows.":
  "La razón de los valores rms es la misma, \\(X = V_{\\rm rms}/I_{\\rm rms}\\). La reactancia de un capacitor disminuye cuando sube la frecuencia y la de un inductor crece.",
"A source is set to \\(V_0 = 10\\) V peak. What do its rms voltage and the voltmeter across it read?":
  "Una fuente se fija en \\(V_0 = 10\\) V pico. ¿Cuánto valen su voltaje rms y la lectura del voltímetro conectado a ella?",
"Find \\(X_C\\) for a {#} µF capacitor at {#} Hz and at {#} kHz, and \\(X_L\\) for a {#} mH inductor at the same two frequencies.":
  "Encuentra \\(X_C\\) para un capacitor de {#} µF a {#} Hz y a {#} kHz, y \\(X_L\\) para un inductor de {#} mH a las mismas dos frecuencias.",
"The frequency doubles with the source voltage fixed. By what factor does the current through the capacitor change? Through the inductor? Through the resistor?":
  "La frecuencia se duplica con el voltaje de la fuente fijo. ¿Por qué factor cambia la corriente a través del capacitor? ¿A través del inductor? ¿A través del resistor?",
"No hazards in the virtual lab. On a real bench, keep the generator within the component ratings and turn it off before changing connections.":
  "No hay peligros en el laboratorio virtual. En una mesa real, mantén el generador dentro de los valores nominales de los componentes y apágalo antes de cambiar las conexiones.",
"<strong>Part {#}, capacitor.</strong> Open the Capacitor only setup with \\(C = 10\\) µF and a {#} V peak source. Take readings at {#}, {#}, {#}, {#}, {#} and {#} Hz. Watch the traces and phasors as you go: which peaks first, the voltage or the current? Export the series to the worksheet, then clear the readings.":
  "<strong>Parte {#}, capacitor.</strong> Abre la configuración Solo capacitor con \\(C = 10\\) µF y una fuente de {#} V pico. Toma lecturas a {#}, {#}, {#}, {#}, {#} y {#} Hz. Observa las trazas y los fasores mientras avanzas: ¿qué llega primero a su pico, el voltaje o la corriente? Exporta la serie a la hoja de trabajo y luego borra las lecturas.",
"<strong>Part {#}, inductor.</strong> Open the Inductor only setup with \\(L = 100\\) mH and the same source. Take readings at the same six frequencies, export them (they go into a second copy of the table) and clear the readings.":
  "<strong>Parte {#}, inductor.</strong> Abre la configuración Solo inductor con \\(L = 100\\) mH y la misma fuente. Toma lecturas a las mismas seis frecuencias, expórtalas (van a una segunda copia de la tabla) y borra las lecturas.",
"<strong>Part {#}, resistor.</strong> Open the Resistor only setup with \\(R = 100\\ \\Omega\\) and the same source. Take readings at {#}, {#} and {#} Hz and export them into a third copy.":
  "<strong>Parte {#}, resistor.</strong> Abre la configuración Solo resistor con \\(R = 100\\ \\Omega\\) y la misma fuente. Toma lecturas a {#}, {#} y {#} Hz y expórtalas a una tercera copia.",
"<strong>Part {#}, peak and rms.</strong> In any of the three setups, read the peak current from the oscilloscope trace (or the \\(I_0\\) readout) at one frequency and compare it with the ammeter.":
  "<strong>Parte {#}, pico y rms.</strong> En cualquiera de las tres configuraciones, lee la corriente pico en la traza del osciloscopio (o en la lectura \\(I_0\\)) a una frecuencia y compárala con el amperímetro.",
"Each part goes in its own copy of the table. In a single part circuit the voltage across the part is the source voltage, so \\(V_{\\rm rms}\\) here is both. Fill in the last two columns yourself.":
  "Cada parte va en su propia copia de la tabla. En un circuito de un solo componente el voltaje a través del componente es el voltaje de la fuente, así que aquí \\(V_{\\rm rms}\\) es ambos. Llena tú mismo las dos últimas columnas.",
"<span>A</span>Reading and parts":
  "<span>A</span>Lectura y componentes",
"<span>C</span>V_rms (V)":
  "<span>C</span>V_rms (V)",
"<span>D</span>I_rms (A)":
  "<span>D</span>I_rms (A)",
"<span>E</span>Phase (degrees)":
  "<span>E</span>Fase (grados)",
"<span>G</span>X = V_rms/I_rms (Ω)":
  "<span>G</span>X = V_rms/I_rms (Ω)",
"Reading and parts, row {#}":
  "Lectura y componentes, fila {#}",
"V_rms (V), row {#}":
  "V_rms (V), fila {#}",
"I_rms (A), row {#}":
  "I_rms (A), fila {#}",
"Phase (degrees), row {#}":
  "Fase (grados), fila {#}",
"{#}/f (s), row {#}":
  "{#}/f (s), fila {#}",
"X = V_rms/I_rms (Ω), row {#}":
  "X = V_rms/I_rms (Ω), fila {#}",
"Part {#}: plot \\(X\\) against \\(1/f\\). From the slope, find \\(C\\) and compare it with the {#} µF set on the part. What should the intercept be?":
  "Parte {#}: grafica \\(X\\) en función de \\(1/f\\). A partir de la pendiente, encuentra \\(C\\) y compárala con los {#} µF fijados en el componente. ¿Cuál debería ser la ordenada al origen?",
"Part {#}: plot \\(X\\) against \\(f\\). From the slope, find \\(L\\) and compare it with {#} mH.":
  "Parte {#}: grafica \\(X\\) en función de \\(f\\). A partir de la pendiente, encuentra \\(L\\) y compárala con {#} mH.",
"Part {#}: how does \\(V_{\\rm rms}/I_{\\rm rms}\\) for the resistor depend on frequency?":
  "Parte {#}: ¿cómo depende de la frecuencia \\(V_{\\rm rms}/I_{\\rm rms}\\) para el resistor?",
"Give the phase for each part. Which current leads the voltage and which lags it, and by how much? Explain each sign from \\(i = C\\,dv/dt\\) and \\(v = L\\,di/dt\\).":
  "Da la fase para cada componente. ¿Qué corriente se adelanta al voltaje y cuál se atrasa, y por cuánto? Explica cada signo a partir de \\(i = C\\,dv/dt\\) y \\(v = L\\,di/dt\\).",
"At what frequency would the {#} µF capacitor and the {#} mH inductor have the same reactance? Check it on the Reactance graph with Blind off.":
  "¿A qué frecuencia tendrían la misma reactancia el capacitor de {#} µF y el inductor de {#} mH? Compruébalo en la gráfica Reactancia con A ciegas desactivado.",
"The current has four significant figures and the phase is given to {#}°. How large is the rounding of \\(X\\) compared with the scatter of your points about the line? Use the standard errors of the slopes for \\(C\\) and \\(L\\).":
  "La corriente tiene cuatro cifras significativas y la fase se da a {#}°. ¿Qué tan grande es el redondeo de \\(X\\) comparado con la dispersión de tus puntos alrededor de la recta? Usa los errores estándar de las pendientes para \\(C\\) y \\(L\\).",
"Why is a capacitor said to block direct current but pass high frequencies, and an inductor the opposite?":
  "¿Por qué se dice que un capacitor bloquea la corriente directa pero deja pasar las frecuencias altas, y un inductor lo contrario?",
"In Part {#}, how did the peak current compare with the ammeter reading? Why do AC meters read rms values rather than peaks?":
  "En la Parte {#}, ¿cómo se comparó la corriente pico con la lectura del amperímetro? ¿Por qué los medidores de CA leen valores rms en lugar de picos?",
"Pick Power in time with the capacitor or the inductor alone. What is the average power? Where does the energy go during each quarter cycle?":
  "Elige Potencia en el tiempo con el capacitor o el inductor solos. ¿Cuál es la potencia promedio? ¿Adónde va la energía durante cada cuarto de ciclo?",
"What capacitance has a reactance of {#} Ω at {#} Hz? Set it and check with one reading.":
  "¿Qué capacitancia tiene una reactancia de {#} Ω a {#} Hz? Fíjala y compruébalo con una lectura.",
"Prelab answers, the three data tables with the two graphs, \\(C\\) and \\(L\\) with uncertainties, the phases, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las tres tablas de datos con las dos gráficas, \\(C\\) y \\(L\\) con incertidumbres, las fases, y respuestas a las preguntas. Identifica los datos simulados.",
"Peak current":
  "Corriente pico",
"rms current":
  "Corriente rms",
"Inductance":
  "Inductancia",
"Source's peak voltage":
  "Voltaje pico de la fuente",
"rms voltage":
  "Voltaje rms",
"Reactance, V_rms/I_rms":
  "Reactancia, V_rms/I_rms",
"Capacitive reactance":
  "Reactancia capacitiva",
"Inductive reactance":
  "Reactancia inductiva",
"Impedance the source sees":
  "Impedancia que ve la fuente",
"Current at each instant":
  "Corriente en cada instante",
"Power at each instant":
  "Potencia en cada instante",
"Phase of the source voltage ahead of its current":
  "Fase del voltaje de la fuente adelantado respecto a su corriente",
"Voltage at each instant":
  "Voltaje en cada instante"
});
