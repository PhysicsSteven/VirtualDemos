/* ws/ac-circuits in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/ac-circuits', {
"Run: R, L, C":
  "Corrida: R, L, C",
"Source V_0 (V peak)":
  "Fuente V_0 (V pico)",
"I_ rms (A)":
  "I_ rms (A)",
"Phase (degrees)":
  "Fase (grados)",
"Power (W)":
  "Potencia (W)",
"AC Circuits and Resonance | VirtualDemos":
  "Circuitos de CA y resonancia | VirtualDemos",
"AC Circuits and Resonance":
  "Circuitos de CA y resonancia",
"Click a switch on the drawing to flip it while the circuit runs. The plots and the clock show the circuit’s own time: fast changes play in slow motion, slow ones fast forward.":
  "Haz clic en un interruptor del dibujo para accionarlo mientras el circuito funciona. Las gráficas y el reloj muestran el tiempo propio del circuito: los cambios rápidos se reproducen en cámara lenta y los lentos en avance rápido.",
"Step forward pauses the circuit, moves it on by exactly \\(\\Delta t\\) and puts the time cursor at the new time.":
  "Avanzar un paso pausa el circuito, lo adelanta exactamente \\(\\Delta t\\) y pone el cursor de tiempo en el nuevo tiempo.",
"Work done by the sources goes into stored energy, \\(\\tfrac{1}{2}CV^2\\) in capacitors and \\(\\tfrac{1}{2}LI^2\\) in inductors, or turns into heat. The difference line checks the bookkeeping.":
  "El trabajo hecho por las fuentes se convierte en energía almacenada, \\(\\tfrac{1}{2}CV^2\\) en los capacitores y \\(\\tfrac{1}{2}LI^2\\) en los inductores, o se convierte en calor. La línea de diferencia comprueba las cuentas.",
"The equivalent resistance is what the battery sees: the rest of the circuit with every other battery replaced by its internal resistance. Power drawn from the EMFs always equals the power turned into heat and light.":
  "La resistencia equivalente es lo que ve la batería: el resto del circuito con cada otra batería reemplazada por su resistencia interna. La potencia tomada de las fem siempre es igual a la potencia convertida en calor y luz.",
"Pick a part above the drawing, then drag from one dot to another, or tap two dots. A part dragged over more than one step gets wires to fill the gap; a wire that turns a corner goes across first, then down. Batteries, sources and meters have their + end where you start. With Select, drag a part or a dot to move it, click a switch to flip it, and drag the grip beside a selected part’s label to change its value.":
  "Elige un componente arriba del dibujo y luego arrastra de un punto a otro, o toca dos puntos. A un componente arrastrado más de un paso se le agregan cables para llenar el hueco; un cable que da vuelta en una esquina va primero de lado y luego hacia abajo. Las baterías, las fuentes y los medidores tienen su extremo + donde empiezas. Con Seleccionar, arrastra un componente o un punto para moverlo, haz clic en un interruptor para accionarlo y arrastra la agarradera junto a la etiqueta de un componente seleccionado para cambiar su valor.",
"Measure how current depends on frequency in a series RLC circuit. Use the resonance curve to find \\(R\\), \\(L\\) and \\(C\\).":
  "Mide cómo depende la corriente de la frecuencia en un circuito RLC en serie. Usa la curva de resonancia para encontrar \\(R\\), \\(L\\) y \\(C\\).",
"This activity follows Chapter {#}. A resistor, inductor and capacitor affect alternating current differently (§{#}). The inductor’s reactance grows with frequency, while the capacitor’s falls:":
  "Esta actividad sigue al Capítulo {#}. Un resistor, un inductor y un capacitor afectan de manera distinta a la corriente alterna (§{#}). La reactancia del inductor crece con la frecuencia, mientras que la del capacitor disminuye:",
"\\[\\begin{gathered} X_L=2\\pi fL, \\\\[4pt] X_C=\\frac{1}{2\\pi fC}. \\end{gathered}\\]":
  "\\[\\begin{gathered} X_L=2\\pi fL, \\\\[4pt] X_C=\\frac{1}{2\\pi fC}. \\end{gathered}\\]",
"For the series circuit (§{#}),":
  "Para el circuito en serie (§{#}),",
"\\[\\begin{gathered} \\lvert Z\\rvert=\\sqrt{R^2+(X_L-X_C)^2}, \\\\[4pt] I_{\\rm rms}=\\frac{V_0}{\\sqrt2\\,\\lvert Z\\rvert}. \\end{gathered}\\]":
  "\\[\\begin{gathered} \\lvert Z\\rvert=\\sqrt{R^2+(X_L-X_C)^2}, \\\\[4pt] I_{\\rm rms}=\\frac{V_0}{\\sqrt2\\,\\lvert Z\\rvert}. \\end{gathered}\\]",
"Here \\(V_0\\) is the source’s peak voltage. Current lags the voltage when \\(X_L\\) is larger than \\(X_C\\), and leads when \\(X_C\\) is larger. At resonance (§{#}) the reactances cancel:":
  "Aquí \\(V_0\\) es el voltaje pico de la fuente. La corriente se atrasa respecto al voltaje cuando \\(X_L\\) es mayor que \\(X_C\\), y se adelanta cuando \\(X_C\\) es mayor. En la resonancia (§{#}) las reactancias se cancelan:",
"\\[f_0=\\frac{1}{2\\pi\\sqrt{LC}}.\\]":
  "\\[f_0=\\frac{1}{2\\pi\\sqrt{LC}}.\\]",
"The current is largest at resonance. The two half power frequencies occur where the current is its peak value divided by \\(\\sqrt{2}\\). Their separation is the bandwidth:":
  "La corriente es máxima en la resonancia. Las dos frecuencias de media potencia están donde la corriente es su valor pico dividido entre \\(\\sqrt{2}\\). Su separación es el ancho de banda:",
"\\[\\begin{gathered} \\Delta f=\\frac{R}{2\\pi L}, \\\\[4pt] Q=\\frac{f_0}{\\Delta f}. \\end{gathered}\\]":
  "\\[\\begin{gathered} \\Delta f=\\frac{R}{2\\pi L}, \\\\[4pt] Q=\\frac{f_0}{\\Delta f}. \\end{gathered}\\]",
"How do the impedances of a pure inductor and a pure capacitor change when frequency doubles?":
  "¿Cómo cambian las impedancias de un inductor puro y de un capacitor puro cuando la frecuencia se duplica?",
"At resonance, why can the inductor and capacitor each have a large voltage even when their combined voltage is zero?":
  "En la resonancia, ¿por qué el inductor y el capacitor pueden tener cada uno un voltaje grande aun cuando su voltaje combinado es cero?",
"Explain the difference between peak voltage and rms voltage.":
  "Explica la diferencia entre el voltaje pico y el voltaje rms.",
"For a real circuit, turn off the supply before changing connections. Stay within the component and generator ratings. Check the voltage across the capacitor and inductor near resonance; it can exceed the source voltage.":
  "En un circuito real, apaga la fuente antes de cambiar las conexiones. Mantente dentro de las especificaciones de los componentes y del generador. Revisa el voltaje en el capacitor y en el inductor cerca de la resonancia; puede superar el voltaje de la fuente.",
"<strong>Single components.</strong> Measure current and its phase relative to the source for a resistor alone, a capacitor alone and an inductor alone. Use three frequencies for each. Record the actual component values and source voltage.":
  "<strong>Componentes individuales.</strong> Mide la corriente y su fase respecto a la fuente para un resistor solo, un capacitor solo y un inductor solo. Usa tres frecuencias para cada uno. Registra los valores reales de los componentes y el voltaje de la fuente.",
"<strong>Series resonance.</strong> Connect \\(R = 22\\ \\Omega\\), \\(L = 10\\ \\text{mH}\\) and \\(C = 1\\ \\mu\\text{F}\\) in series, or use the assigned values. Set the source amplitude to {#} V peak.":
  "<strong>Resonancia en serie.</strong> Conecta \\(R = 22\\ \\Omega\\), \\(L = 10\\ \\text{mH}\\) y \\(C = 1\\ \\mu\\text{F}\\) en serie, o usa los valores asignados. Fija la amplitud de la fuente en {#} V pico.",
"Measure current from about {#} to {#} kHz. Take at least twelve frequencies, with more readings near the peak.":
  "Mide la corriente de unos {#} a {#} kHz. Toma al menos doce frecuencias, con más lecturas cerca del pico.",
"Find the maximum current. Locate the half power current on both sides and take extra readings to bracket each crossing.":
  "Encuentra la corriente máxima. Ubica la corriente de media potencia a ambos lados y toma lecturas adicionales para acotar cada cruce.",
"Record phase and average power at a frequency below resonance, near resonance and above resonance.":
  "Registra la fase y la potencia promedio a una frecuencia por debajo de la resonancia, cerca de la resonancia y por encima de la resonancia.",
"Repeat a shorter sweep with \\(R = 10\\ \\Omega\\) and \\(R = 100\\ \\Omega\\), keeping \\(L\\), \\(C\\) and source voltage fixed.":
  "Repite un barrido más corto con \\(R = 10\\ \\Omega\\) y \\(R = 100\\ \\Omega\\), manteniendo fijos \\(L\\), \\(C\\) y el voltaje de la fuente.",
"If recording equipment is available, compare how quickly the current settles after switching on at resonance for two resistance values.":
  "Si hay equipo de registro disponible, compara qué tan rápido se estabiliza la corriente después de encender en la resonancia para dos valores de resistencia.",
"<strong>Using the virtual apparatus.</strong> Work in AC with predictions and answers hidden, starting from the resistor only, capacitor only, inductor only and below resonance circuits, and set each part’s value. Near the peak and the half power points, type each frequency rather than dragging to it. Record a reading at each frequency; it stores \\(f\\), the source \\(V_0\\) and rms voltage, the rms current, the phase, \\(\\lvert Z\\rvert\\), the average power, the part values and the rms voltage across each part, all as the panel shows them. The table on the page shows \\(f\\), \\(I_{\\rm rms}\\) in mA, phase and power; the CSV has every column, in SI units. Check each new row against the readout and delete any row taken by mistake. Rows from different circuits can share the table, since every row keeps its part values; a sweep recorded after clearing goes into its own copy of the Data table. Send the table to this worksheet; the CSV that goes with it starts with comment lines that list the circuit and mark the data as simulated. Jump to \\(f_0\\) only after you have found the peak yourself. To compare the steady state traces, put the voltage and current on the scope and save two periods as a CSV. To record startup, keep the same circuit, switch to the time view, reset, and save the whole run as a CSV.":
  "<strong>Uso del aparato virtual.</strong> Trabaja en CA con las predicciones y las respuestas ocultas, empezando con los circuitos Solo resistor, Solo capacitor, Solo inductor y Debajo de la resonancia, y fija el valor de cada componente. Cerca del pico y de los puntos de media potencia, escribe cada frecuencia en lugar de arrastrar hasta ella. Registra una lectura en cada frecuencia; guarda \\(f\\), la \\(V_0\\) de la fuente y el voltaje rms, la corriente rms, la fase, \\(\\lvert Z\\rvert\\), la potencia promedio, los valores de los componentes y el voltaje rms en cada componente, todo tal como lo muestra el panel. La tabla de la página muestra \\(f\\), \\(I_{\\rm rms}\\) en mA, la fase y la potencia; el CSV tiene todas las columnas, en unidades del SI. Revisa cada fila nueva contra la lectura y elimina cualquier fila tomada por error. Las filas de circuitos distintos pueden compartir la tabla, ya que cada fila guarda los valores de sus componentes; un barrido registrado después de borrar va a su propia copia de la tabla de datos. Envía la tabla a esta hoja de trabajo; el CSV que la acompaña empieza con líneas de comentario que describen el circuito y marcan los datos como simulados. Salta a \\(f_0\\) solo después de haber encontrado el pico por tu cuenta. Para comparar las trazas en estado estacionario, pon el voltaje y la corriente en el osciloscopio y guarda dos periodos como CSV. Para registrar el arranque, conserva el mismo circuito, cambia a la vista En el tiempo, reinicia y guarda toda la corrida como CSV.",
"<span>A</span>Run: \\(R\\), \\(L\\), \\(C\\)":
  "<span>A</span>Corrida: \\(R\\), \\(L\\), \\(C\\)",
"<span>C</span>Source \\(V_0\\) (V peak)":
  "<span>C</span>Fuente \\(V_0\\) (V pico)",
"<span>D</span>\\(I_{\\rm rms}\\) (A)":
  "<span>D</span>\\(I_{\\rm rms}\\) (A)",
"<span>E</span>Phase (degrees)":
  "<span>E</span>Fase (grados)",
"<span>F</span>Power (W)":
  "<span>F</span>Potencia (W)",
"Run: R, L, C, row {#}":
  "Corrida: R, L, C, fila {#}",
"Source V_0 (V peak), row {#}":
  "Fuente V_0 (V pico), fila {#}",
"I_ rms (A), row {#}":
  "I_ rms (A), fila {#}",
"Phase (degrees), row {#}":
  "Fase (grados), fila {#}",
"Power (W), row {#}":
  "Potencia (W), fila {#}",
"Source V₀ (V peak)":
  "Fuente V₀ (V pico)",
"Add rows for every frequency. Keep the three resistance sweeps separate. With the virtual apparatus, <strong>Export to worksheet</strong> fills this table, with the \\(R\\), \\(L\\) and \\(C\\) of each row in its first column; a sweep taken after <strong>Clear</strong> goes into its own copy of the table. Power is the average power, P_avg_W in the CSV, and current is Irms_A in amperes.":
  "Agrega filas para cada frecuencia. Mantén separados los tres barridos de resistencia. Con el aparato virtual, <strong>Exportar a la hoja</strong> llena esta tabla, con la \\(R\\), la \\(L\\) y la \\(C\\) de cada fila en su primera columna; un barrido tomado después de <strong>Borrar</strong> va a su propia copia de la tabla. La potencia es la potencia promedio, P_avg_W en el CSV, y la corriente es Irms_A en amperes.",
"Plot current against frequency. Identify \\(f_0\\), the peak current and the half power frequencies.":
  "Grafica la corriente en función de la frecuencia. Identifica \\(f_0\\), la corriente pico y las frecuencias de media potencia.",
"Infer \\(R\\) from the peak current, then \\(L\\) from the bandwidth and \\(C\\) from \\(f_0\\).":
  "Deduce \\(R\\) a partir de la corriente pico, luego \\(L\\) a partir del ancho de banda y \\(C\\) a partir de \\(f_0\\).",
"Compare the measured phase with the sign of \\(X_L - X_C\\). Use the scope or phasor diagram to check Kirchhoff’s voltage rule.":
  "Compara la fase medida con el signo de \\(X_L - X_C\\). Usa el osciloscopio o el diagrama de fasores para comprobar la regla de voltajes de Kirchhoff.",
"Calculate \\(Q\\) for each resistance. Explain how the width and height change.":
  "Calcula \\(Q\\) para cada resistencia. Explica cómo cambian el ancho y la altura.",
"Check the power relation below, at and above resonance:":
  "Comprueba la relación de potencia por debajo, en y por encima de la resonancia:",
"\\[P=I_{\\rm rms}^2R=V_{\\rm rms}I_{\\rm rms}\\cos\\phi.\\]":
  "\\[P=I_{\\rm rms}^2R=V_{\\rm rms}I_{\\rm rms}\\cos\\phi.\\]",
"If you recorded startup, compare the settling envelopes. For an underdamped circuit the natural transient decays on the scale \\(2L/R\\).":
  "Si registraste el arranque, compara las envolventes de estabilización. Para un circuito subamortiguado el transitorio natural decae en la escala \\(2L/R\\).",
"Use the frequency intervals that bracket the peak and half power crossings. Include current rounding and the uncertainty in source voltage when inferring \\(R\\). Carry the crossing uncertainty into bandwidth, then into \\(L\\) and \\(C\\). State the frequencies you typed near the peak. A narrow peak needs finer frequency steps than a broad one.":
  "Usa los intervalos de frecuencia que acotan el pico y los cruces de media potencia. Incluye el redondeo de la corriente y la incertidumbre del voltaje de la fuente al deducir \\(R\\). Lleva la incertidumbre de los cruces al ancho de banda y luego a \\(L\\) y \\(C\\). Indica las frecuencias que escribiste cerca del pico. Un pico estrecho necesita pasos de frecuencia más finos que uno ancho.",
"Why is the current greatest at resonance?":
  "¿Por qué la corriente es máxima en la resonancia?",
"Why do the positive rms magnitudes of the three component voltages not simply add to the source voltage?":
  "¿Por qué las magnitudes rms positivas de los voltajes de los tres componentes no se suman simplemente para dar el voltaje de la fuente?",
"Why does an ideal capacitor or inductor dissipate no average power?":
  "¿Por qué un capacitor o un inductor ideal no disipa potencia promedio?",
"Why does a sharp resonance usually take longer to settle after switching on?":
  "¿Por qué una resonancia aguda suele tardar más en estabilizarse después de encender?",
"Prelab answers, the data table, current and phase graphs, inferred \\(R\\), \\(L\\) and \\(C\\) with uncertainty, the \\(Q\\) comparison, power calculations, any startup trace, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, la tabla de datos, las gráficas de corriente y de fase, \\(R\\), \\(L\\) y \\(C\\) deducidos con su incertidumbre, la comparación de \\(Q\\), los cálculos de potencia, cualquier traza de arranque, y las respuestas a las preguntas. Identifica los datos simulados.",
"Current through the inductor":
  "Corriente en el inductor",
"rms current":
  "Corriente rms",
"Inductance":
  "Inductancia",
"Average power":
  "Potencia promedio",
"Quality factor, f₀/Δf":
  "Factor de calidad, f₀/Δf",
"Voltage across the capacitor":
  "Voltaje en el capacitor",
"Source's peak voltage":
  "Voltaje pico de la fuente",
"rms source voltage":
  "Voltaje rms de la fuente",
"Capacitive reactance":
  "Reactancia capacitiva",
"Inductive reactance":
  "Reactancia inductiva",
"Impedance":
  "Impedancia",
"Source frequency":
  "Frecuencia de la fuente",
"Resonant frequency":
  "Frecuencia de resonancia",
"Phase of the source voltage ahead of the current":
  "Adelanto de fase del voltaje de la fuente respecto a la corriente"
});
