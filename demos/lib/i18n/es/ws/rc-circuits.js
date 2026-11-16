/* ws/rc-circuits in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/rc-circuits', {
"Log ratio":
  "Razón logarítmica",
"Charging and Discharging a Capacitor | VirtualDemos":
  "Carga y descarga de un capacitor | VirtualDemos",
"Charging and Discharging a Capacitor":
  "Carga y descarga de un capacitor",
"Click a switch on the drawing to flip it while the circuit runs. The plots and the clock show the circuit’s own time: fast changes play in slow motion, slow ones fast forward.":
  "Haz clic en un interruptor del dibujo para cambiarlo mientras el circuito funciona. Las gráficas y el reloj muestran el tiempo propio del circuito: los cambios rápidos se reproducen en cámara lenta, los lentos en avance rápido.",
"Step forward pauses the circuit, moves it on by exactly \\(\\Delta t\\) and puts the time cursor at the new time.":
  "Avanzar un paso pausa el circuito, lo adelanta exactamente \\(\\Delta t\\) y pone el cursor de tiempo en el nuevo tiempo.",
"Work done by the sources goes into stored energy, \\(\\tfrac{1}{2}CV^2\\) in capacitors and \\(\\tfrac{1}{2}LI^2\\) in inductors, or turns into heat. The difference line checks the bookkeeping.":
  "El trabajo hecho por las fuentes se va a energía almacenada, \\(\\tfrac{1}{2}CV^2\\) en los capacitores y \\(\\tfrac{1}{2}LI^2\\) en los inductores, o se convierte en calor. La línea de diferencia comprueba la contabilidad.",
"The equivalent resistance is what the battery sees: the rest of the circuit with every other battery replaced by its internal resistance. Power drawn from the EMFs always equals the power turned into heat and light.":
  "La resistencia equivalente es lo que ve la batería: el resto del circuito con cada una de las otras baterías reemplazada por su resistencia interna. La potencia que se toma de las fem siempre es igual a la potencia convertida en calor y luz.",
"Pick a part above the drawing, then drag from one dot to another, or tap two dots. A part dragged over more than one step gets wires to fill the gap; a wire that turns a corner goes across first, then down. Batteries, sources and meters have their + end where you start. With Select, drag a part or a dot to move it, click a switch to flip it, and drag the grip beside a selected part’s label to change its value.":
  "Elige una pieza arriba del dibujo y luego arrastra de un punto a otro, o toca dos puntos. Una pieza arrastrada más de un paso recibe cables para llenar el hueco; un cable que da vuelta en una esquina va primero de lado y luego hacia abajo. Las baterías, las fuentes y los medidores tienen su extremo + donde empiezas. Con Seleccionar, arrastra una pieza o un punto para moverlo, haz clic en un interruptor para cambiarlo, y arrastra el agarre junto a la etiqueta de una pieza seleccionada para cambiar su valor.",
"Measure the time constant of an RC circuit, use it to find the capacitance, and follow the energy as the capacitor charges and discharges.":
  "Mide la constante de tiempo de un circuito RC, úsala para encontrar la capacitancia, y sigue la energía mientras el capacitor se carga y se descarga.",
"A resistor limits how quickly charge reaches a capacitor. Kirchhoff’s loop rule (§{#}) gives":
  "Un resistor limita qué tan rápido llega la carga a un capacitor. La regla de las mallas de Kirchhoff (§{#}) da",
"\\[\\varepsilon=IR+\\frac{Q}{C},\\qquad I=\\frac{dQ}{dt}.\\]":
  "\\[\\varepsilon=IR+\\frac{Q}{C},\\qquad I=\\frac{dQ}{dt}.\\]",
"For an initially uncharged capacitor connected to a battery,":
  "Para un capacitor inicialmente descargado conectado a una batería,",
"\\[V_C=\\varepsilon\\left(1-e^{-t/RC}\\right),\\qquad I=\\frac{\\varepsilon}{R}e^{-t/RC}.\\]":
  "\\[V_C=\\varepsilon\\left(1-e^{-t/RC}\\right),\\qquad I=\\frac{\\varepsilon}{R}e^{-t/RC}.\\]",
"The time constant is \\(\\tau = RC\\) (§{#}). After one time constant, the capacitor has reached about {#}% of its final voltage. During discharge,":
  "La constante de tiempo es \\(\\tau = RC\\) (§{#}). Después de una constante de tiempo, el capacitor ha alcanzado cerca del {#}% de su voltaje final. Durante la descarga,",
"\\[V_C=V_{C0}e^{-t/RC}.\\]":
  "\\[V_C=V_{C0}e^{-t/RC}.\\]",
"Stored energy follows §{#}. The battery does work on the charges. Some becomes electric energy in the capacitor, and the rest heats the resistor:":
  "La energía almacenada sigue la §{#}. La batería hace trabajo sobre las cargas. Una parte se convierte en energía eléctrica en el capacitor, y el resto calienta el resistor:",
"\\[W=U_C+H,\\qquad U_C=\\frac12 CV_C^2.\\]":
  "\\[W=U_C+H,\\qquad U_C=\\frac12 CV_C^2.\\]",
"If \\(R\\) doubles while \\(C\\) stays fixed, what happens to the time constant?":
  "Si \\(R\\) se duplica mientras \\(C\\) se mantiene fija, ¿qué le pasa a la constante de tiempo?",
"Why can the capacitor voltage not jump when the switch changes position?":
  "¿Por qué el voltaje del capacitor no puede saltar cuando el interruptor cambia de posición?",
"Derive the straight line relation obtained by plotting \\(\\ln(1 - V_C/\\varepsilon)\\) against time during charging.":
  "Deduce la relación lineal que se obtiene al graficar \\(\\ln(1 - V_C/\\varepsilon)\\) en función del tiempo durante la carga.",
"What if the battery’s EMF doubles instead, from {#} V to {#} V, with R1 = {#} kΩ? Does the time constant halve, double or stay the same? Say why you think so.":
  "¿Y si la fem de la batería se duplica en su lugar, de {#} V a {#} V, con R1 = {#} kΩ? ¿La constante de tiempo se reduce a la mitad, se duplica o queda igual? Di por qué lo piensas.",
"For a real circuit, turn off the supply before changing connections. Check the capacitor’s polarity and voltage rating. Discharge it through the specified resistor before handling it.":
  "En un circuito real, apaga la fuente antes de cambiar conexiones. Revisa la polaridad del capacitor y su voltaje nominal. Descárgalo a través del resistor indicado antes de manipularlo.",
"<strong>Charging.</strong> Press the RC charging setup: a battery, the two way switch S1, R1 and C1 = {#} μF in series. Click the battery and type {#} in its EMF ε box, so \\(\\varepsilon = 10\\ \\text{V}\\) (or use the values assigned for your apparatus).":
  "<strong>Carga.</strong> Pulsa la configuración Carga RC: una batería, el interruptor de dos posiciones S1, R1 y C1 = {#} μF en serie. Haz clic en la batería y escribe {#} en su casilla FEM ε, de modo que \\(\\varepsilon = 10\\ \\text{V}\\) (o usa los valores asignados para tu aparato).",
"Press Reset: the capacitor starts discharged and S1 connects the battery at \\(t = 0\\). Record the capacitor voltage and current as a function of time (see Using the virtual apparatus below).":
  "Pulsa Reiniciar: el capacitor empieza descargado y S1 conecta la batería en \\(t = 0\\). Registra el voltaje del capacitor y la corriente en función del tiempo (mira Uso del aparato virtual más abajo).",
"Take at least six readings from the beginning until the voltage is close to its final value.":
  "Toma al menos seis lecturas desde el inicio hasta que el voltaje esté cerca de su valor final.",
"Repeat for R1 = {#}, {#} and {#} kΩ: click R1 and type the value in its Resistance R box (in ohms), then Reset. Use the values you set in the calculations.":
  "Repite con R1 = {#}, {#} y {#} kΩ: haz clic en R1 y escribe el valor en su casilla Resistencia R (en ohms), y luego Reiniciar. Usa en los cálculos los valores que fijaste.",
"Set R1 back to {#} kΩ, type {#} in the battery’s EMF ε box and press Reset. Find the time at which \\(V_C\\) reaches {#}% of {#} V, that is {#} V, and write it in your answer to Question {#}. Then set ε back to {#} V.":
  "Vuelve a fijar R1 en {#} kΩ, escribe {#} en el cuadro fem ε de la batería y pulsa Reiniciar. Halla el tiempo en que \\(V_C\\) llega al {#}% de {#} V, es decir {#} V, y escríbelo en tu respuesta a la pregunta {#}. Luego vuelve a fijar ε en {#} V.",
"<strong>Discharging.</strong> Let the capacitor charge for at least {#}τ and record its voltage, then click S1 on the drawing to switch the battery out: the capacitor discharges through R1. Record voltage and current from the time of the switch.":
  "<strong>Descarga.</strong> Deja que el capacitor se cargue durante al menos {#}τ y registra su voltaje; luego haz clic en S1 en el dibujo para desconectar la batería: el capacitor se descarga a través de R1. Registra el voltaje y la corriente desde el momento del cambio.",
"<strong>Energy.</strong> For one charging run, record a reading at four times; each reading carries the source work \\(W\\), the stored energy \\(U_C\\) and the heat \\(H\\) from the Energy since t = {#} panel. Compare their sum. Then press the Camera flash setup, let it charge, click S1 to flash, and record readings just before and after the switch, to compare a slow charge with the fast discharge.":
  "<strong>Energía.</strong> En una corrida de carga, registra una lectura en cuatro tiempos; cada lectura lleva el trabajo de la fuente \\(W\\), la energía almacenada \\(U_C\\) y el calor \\(H\\) del panel Energía desde t = {#}. Compara su suma. Luego pulsa la configuración Flash de cámara, deja que se cargue, haz clic en S1 para disparar el flash, y registra lecturas justo antes y después del cambio, para comparar una carga lenta con la descarga rápida.",
"<strong>Watching the loop rule.</strong> Reset the RC charging circuit, switch modes to the Potential view, and play it slowly. Watch the step across the capacitor grow while the slope of the resistor flattens, and note what stays the same at every instant.":
  "<strong>Observa la regla de las mallas.</strong> Reinicia el circuito RC de carga, cambia al modo de vista Potencial y reprodúcelo despacio. Observa cómo crece el escalón en el capacitor mientras se aplana la pendiente de la resistencia, y fíjate en qué se mantiene igual en todo instante.",
"<strong>Using the virtual apparatus.</strong> Work in the In time mode with Blind: hide predictions and answers ticked (in the Lab fold), starting from the RC charging setup, and set \\(R\\) and \\(C\\) to the values you need. Press Reset before each charging run and Pause when you read values. Read the circuit at the times you choose, either by picking a Step Δt and pressing Step forward, or by clicking the scope to place the time cursor, and press Record reading at each; after each run press Export to worksheet, then Clear; the worksheet gets the cursor readings and energies in the Data table, with the part values in its notes. For a whole trace, put the voltage and current on the scope (select a part, then Scope V or Scope I) and press Export scope CSV; the file holds only the visible scope window, so check that it covers the part of the run you need. Record the energy since \\(t = 0\\) readings separately from the CSV. The flip mid way circuit switches during charging, and the camera flash circuit has separate charging and discharge resistances.":
  "<strong>Uso del aparato virtual.</strong> Trabaja en el modo En el tiempo con A ciegas: ocultar predicciones y respuestas marcado (en el pliegue Laboratorio), empezando desde la configuración Carga RC, y fija \\(R\\) y \\(C\\) en los valores que necesites. Pulsa Reiniciar antes de cada corrida de carga y Pausa cuando leas valores. Lee el circuito en los tiempos que elijas, ya sea eligiendo un Paso Δt y pulsando Avanzar un paso, o haciendo clic en el osciloscopio para colocar el cursor de tiempo, y pulsa Registrar lectura en cada uno; después de cada corrida pulsa Exportar a la hoja, y luego Borrar; la hoja recibe las lecturas del cursor y las energías en la tabla de Datos, con los valores de las piezas en sus notas. Para una traza completa, pon el voltaje y la corriente en el osciloscopio (selecciona una pieza, y luego V al osciloscopio o I al osciloscopio) y pulsa Exportar CSV del osciloscopio; el archivo contiene solo la ventana visible del osciloscopio, así que comprueba que cubra la parte de la corrida que necesitas. Registra por separado del CSV las lecturas de energía desde \\(t = 0\\). El circuito Cambio a la mitad conmuta durante la carga, y el circuito del flash de cámara tiene resistencias de carga y de descarga separadas.",
"<span>G</span>Log ratio":
  "<span>G</span>Razón logarítmica",
"V_C (V), row {#}":
  "V_C (V), fila {#}",
"I (A), row {#}":
  "I (A), fila {#}",
"W (J), row {#}":
  "W (J), fila {#}",
"U_C (J), row {#}":
  "U_C (J), fila {#}",
"H (J), row {#}":
  "H (J), fila {#}",
"Log ratio, row {#}":
  "Razón logarítmica, fila {#}",
"Use a separate copy for each run. Write \\(\\varepsilon\\), \\(R\\), \\(C\\) and the switch time above it. Fill the energy columns for the energy run. Fill in the last column yourself: \\(\\ln(1 - V_C/\\varepsilon)\\) for charging readings and \\(\\ln(V_C/V_{C0})\\) for readings after the switch in a discharge. Each copy’s graph fits a line to every row that has both of its columns filled, so leave it blank on rows you leave out of the fit.":
  "Usa una copia separada para cada corrida. Escribe \\(\\varepsilon\\), \\(R\\), \\(C\\) y el tiempo del cambio arriba de ella. Llena las columnas de energía para la corrida de energía. Llena tú mismo la última columna: \\(\\ln(1 - V_C/\\varepsilon)\\) para las lecturas de carga y \\(\\ln(V_C/V_{C0})\\) para las lecturas posteriores al cambio en una descarga. La gráfica de cada copia ajusta una recta a cada fila que tenga llenas sus dos columnas, así que déjala vacía en las filas que dejes fuera del ajuste.",
"For the {#} kΩ run, find \\(\\tau\\) from the time when \\(V_C\\) reaches {#}% of \\(\\varepsilon\\).":
  "Para la corrida de {#} kΩ, encuentra \\(\\tau\\) a partir del tiempo en que \\(V_C\\) alcanza el {#}% de \\(\\varepsilon\\).",
"Plot \\(\\ln(1 - V_C/\\varepsilon)\\) against \\(t\\). Find \\(\\tau\\) from the slope. Leave out points so close to the final voltage that rounding makes the logarithm unusable.":
  "Grafica \\(\\ln(1 - V_C/\\varepsilon)\\) contra \\(t\\). Encuentra \\(\\tau\\) a partir de la pendiente. Omite los puntos tan cercanos al voltaje final que el redondeo vuelve inservible el logaritmo.",
"Plot \\(\\tau\\) against \\(R\\) by hand or in a spreadsheet (the three values are not rows of one table). Find \\(C\\) from the slope and compare it with the component value.":
  "Grafica \\(\\tau\\) en función de \\(R\\) a mano o en una hoja de cálculo (los tres valores no son filas de una misma tabla). Encuentra \\(C\\) a partir de la pendiente y compárala con el valor del componente.",
"For discharge, plot \\(\\ln(V_C/V_{C0})\\) against time since switching. Compare its time constant with charging.":
  "Para la descarga, grafica \\(\\ln(V_C/V_{C0})\\) contra el tiempo desde el cambio. Compara su constante de tiempo con la de la carga.",
"Check \\(W - U_C - H\\) at each energy reading.":
  "Comprueba \\(W - U_C - H\\) en cada lectura de energía.",
"In the flash run, calculate the stored energy and initial discharge power from the voltage just before the switch. Do not assume the capacitor has reached the full battery voltage.":
  "En la corrida del flash, calcula la energía almacenada y la potencia inicial de descarga a partir del voltaje justo antes del cambio. No supongas que el capacitor ha alcanzado el voltaje completo de la batería.",
"Using one of your readings, show that the battery’s rise equals the drop across the resistor plus the step across the capacitor, \\(\\varepsilon = IR + V_C\\), and describe how the Potential view shows this at the start, at \\(t = \\tau\\) and near the end of charging.":
  "Con una de tus lecturas, demuestra que la subida de la batería es igual a la caída en la resistencia más el escalón en el capacitor, \\(\\varepsilon = IR + V_C\\), y describe cómo lo muestra la vista Potencial al inicio, en \\(t = \\tau\\) y cerca del final de la carga.",
"Use the spacing between nearby time samples to estimate uncertainty in the {#}% crossing. Include voltage rounding and resistor uncertainty where available. Use actual timestamps from the exported data. Do not add random scatter to a deterministic trace; describe the resolution with which you read it.":
  "Usa el espaciamiento entre muestras de tiempo cercanas para estimar la incertidumbre del cruce del {#}%. Incluye el redondeo del voltaje y la incertidumbre del resistor cuando estén disponibles. Usa los tiempos reales de los datos exportados. No añadas dispersión aleatoria a una traza determinista; describe la resolución con la que la leíste.",
"Did the {#} V run bear out your answer to Before the lab {#}? Use \\(\\varepsilon = IR + Q/C\\) to explain what doubling ε does to every voltage and current at each instant, and what it does to the time constant. Why, then, does a larger resistor change the charging time but not the final stored energy?":
  "¿Confirmó la corrida de {#} V tu respuesta a Antes del laboratorio {#}? Usa \\(\\varepsilon = IR + Q/C\\) para explicar qué hace duplicar ε a cada voltaje y cada corriente en cada instante, y qué le hace a la constante de tiempo. ¿Por qué, entonces, una resistencia mayor cambia el tiempo de carga pero no la energía final almacenada?",
"In the Capacitors and Dielectrics demo, the Sparks in air setup charges two spheres through a {#} GΩ resistor until the air breaks down at \\(V_c\\), which empties them, and then the charging starts again. Use \\(V_C = \\varepsilon(1 - e^{-t/RC})\\) to show that the sparks repeat every \\(T = RC\\ln\\big(\\varepsilon/(\\varepsilon - V_c)\\big)\\). What happens when \\(\\varepsilon < V_c\\)?":
  "En la demo de Capacitores y dieléctricos, la configuración Chispas en el aire carga dos esferas a través de una resistencia de {#} GΩ hasta que el aire sufre ruptura en \\(V_c\\), lo que las descarga, y luego la carga empieza de nuevo. Usa \\(V_C = \\varepsilon(1 - e^{-t/RC})\\) para demostrar que las chispas se repiten cada \\(T = RC\\ln\\big(\\varepsilon/(\\varepsilon - V_c)\\big)\\). ¿Qué pasa cuando \\(\\varepsilon < V_c\\)?",
"Prelab answers, settings and data, CSV if available, the charging and discharge fits, the graph of \\(\\tau\\) against \\(R\\), capacitance with uncertainty, the energy check, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, la configuración y los datos, el CSV si está disponible, los ajustes de carga y de descarga, la gráfica de \\(\\tau\\) contra \\(R\\), la capacitancia con su incertidumbre, la comprobación de energía, y las respuestas a las preguntas. Identifica los datos simulados.",
"Heat given off in the resistor":
  "Calor liberado en el resistor",
"Inductance":
  "Inductancia",
"Charge on the capacitor":
  "Carga en el capacitor",
"Energy stored in the capacitor":
  "Energía almacenada en el capacitor",
"Capacitor voltage when the discharge starts":
  "Voltaje del capacitor cuando empieza la descarga",
"Work done by the battery":
  "Trabajo hecho por la batería",
"EMF of the battery":
  "Fem de la batería",
"Time constant":
  "Constante de tiempo",
"Why does a larger resistor change the charging time but not the final stored energy?":
  "¿Por qué un resistor más grande cambia el tiempo de carga pero no la energía almacenada final?",
"Voltage across the capacitor":
  "Voltaje en el capacitor",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"<strong>Charging.</strong> Assemble a series battery, resistor and capacitor circuit. Use \\(\\varepsilon = 10\\ \\text{V}\\) and \\(C = 100\\ \\mu\\text{F}\\), or the values assigned for your apparatus.":
  "<strong>Carga.</strong> Arma un circuito en serie con batería, resistor y capacitor. Usa \\(\\varepsilon = 10\\ \\text{V}\\) y \\(C = 100\\ \\mu\\text{F}\\), o los valores asignados para tu aparato.",
"Start with the capacitor discharged. Connect the battery and record capacitor voltage and current as a function of time.":
  "Empieza con el capacitor descargado. Conecta la batería y registra el voltaje del capacitor y la corriente en función del tiempo.",
"Repeat for resistances near {#}, {#}, {#}, {#} and {#} kΩ. Use the actual resistor values in the calculations.":
  "Repite con resistencias cercanas a {#}, {#}, {#}, {#} y {#} kΩ. Usa los valores reales de los resistores en los cálculos.",
"<strong>Discharging.</strong> Charge the capacitor, record its voltage, then switch the battery out and let it discharge through a resistor. Record voltage and current from the time of the switch. Repeat with a different discharge resistance if your circuit allows it.":
  "<strong>Descarga.</strong> Carga el capacitor, registra su voltaje, y luego desconecta la batería y deja que se descargue a través de un resistor. Registra el voltaje y la corriente desde el momento del cambio. Repite con una resistencia de descarga distinta si tu circuito lo permite.",
"<strong>Energy.</strong> For one charging run, record source work, stored capacitor energy and resistor heat at four times. Compare their sum. Then compare a slow charge with the fast discharge of a camera flash circuit.":
  "<strong>Energía.</strong> Para una corrida de carga, registra el trabajo de la fuente, la energía almacenada en el capacitor y el calor del resistor en cuatro tiempos. Compara su suma. Luego compara una carga lenta con la descarga rápida de un circuito de flash de cámara.",
"<strong>Using the virtual apparatus.</strong> Work in time with predictions and answers hidden, starting from the RC charging circuit, and set \\(R\\) and \\(C\\) to the values you need. Reset before each charging run and pause when you read values. Read the circuit at the times you choose, by stepping a fixed \\(\\Delta t\\) or by placing the time cursor on the scope, and record a reading at each; the worksheet gets the cursor readings and energies in the Data table, with the part values in its notes. For a whole trace, put the voltage and current on the scope and save the whole run as a CSV; the file holds only the visible scope window, so check that it covers the part of the run you need. Record the energy since \\(t = 0\\) readings separately from the CSV. The flip mid way circuit switches during charging, and the camera flash circuit has separate charging and discharge resistances.":
  "<strong>Uso del aparato virtual.</strong> Trabaja en tiempo con las predicciones y las respuestas ocultas, empezando desde el circuito de carga RC, y fija \\(R\\) y \\(C\\) en los valores que necesites. Reinicia antes de cada corrida de carga y pausa cuando leas valores. Lee el circuito en los tiempos que elijas, avanzando un \\(\\Delta t\\) fijo o colocando el cursor de tiempo en el osciloscopio, y registra una lectura en cada uno; la hoja de trabajo recibe las lecturas del cursor y las energías en la tabla de Datos, con los valores de las piezas en sus notas. Para una traza completa, pon el voltaje y la corriente en el osciloscopio y guarda toda la corrida como CSV; el archivo contiene solo la ventana visible del osciloscopio, así que comprueba que cubra la parte de la corrida que necesitas. Registra las lecturas de energía desde \\(t = 0\\) por separado del CSV. El circuito de cambio a la mitad conmuta durante la carga, y el circuito del flash de cámara tiene resistencias de carga y de descarga separadas.",
"Find \\(\\tau\\) from the time when \\(V_C\\) reaches {#}% of \\(\\varepsilon\\).":
  "Encuentra \\(\\tau\\) a partir del tiempo en que \\(V_C\\) alcanza el {#}% de \\(\\varepsilon\\).",
"Plot \\(\\tau\\) against \\(R\\) by hand or in a spreadsheet (the five values are not rows of one table). Find \\(C\\) from the slope and compare it with the component value.":
  "Grafica \\(\\tau\\) contra \\(R\\) a mano o en una hoja de cálculo (los cinco valores no son filas de una misma tabla). Encuentra \\(C\\) a partir de la pendiente y compárala con el valor del componente.",
"Check \\(W - U_C - H\\) at each energy reading. If using CSV, also estimate heat from the area under \\(I^2 R\\) against time.":
  "Comprueba \\(W - U_C - H\\) en cada lectura de energía. Si usas el CSV, estima también el calor a partir del área bajo \\(I^2 R\\) en función del tiempo.",
"Use the spacing between nearby time samples to estimate uncertainty in the {#}% crossing. Compare that estimate with the uncertainty of the log fit slope. Include voltage rounding and resistor uncertainty where available. Use actual timestamps from the exported data. Do not add random scatter to a deterministic trace; describe the resolution with which you read it.":
  "Usa el espaciamiento entre muestras de tiempo cercanas para estimar la incertidumbre del cruce del {#}%. Compara esa estimación con la incertidumbre de la pendiente del ajuste logarítmico. Incluye el redondeo del voltaje y la incertidumbre del resistor cuando estén disponibles. Usa los tiempos reales de los datos exportados. No añadas dispersión aleatoria a una traza determinista; describe la resolución con la que la leíste.",
"Why can the current change suddenly while the capacitor voltage stays continuous?":
  "¿Por qué la corriente puede cambiar de golpe mientras el voltaje del capacitor se mantiene continuo?",
"Where does the capacitor’s energy go during discharge?":
  "¿A dónde va la energía del capacitor durante la descarga?",
"Why does the same stored energy give much higher power in a fast discharge?":
  "¿Por qué la misma energía almacenada da una potencia mucho mayor en una descarga rápida?"
});
