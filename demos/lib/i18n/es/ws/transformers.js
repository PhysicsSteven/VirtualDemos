/* ws/transformers in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/transformers', {
"Load or line R (Ω)":
  "Carga o línea R (Ω)",
"Power in (W)":
  "Potencia de entrada (W)",
"Power out (W)":
  "Potencia de salida (W)",
"Line loss (W)":
  "Pérdida en la línea (W)",
"Transformers and Power Lines | VirtualDemos":
  "Transformadores y líneas de transmisión | VirtualDemos",
"Transformers and Power Lines":
  "Transformadores y líneas de transmisión",
"<strong>Setups in the demo:</strong> Step down, {#} V to {#} V; Step up, {#} V to {#} V; Doorbell transformer (Check Your Understanding {#}); Utility pole, {#} kV to {#} V (Example {#}); Real transformer, no load; Power line (Example {#} again).":
  "<strong>Configuraciones en la demo:</strong> Reductor, de {#} V a {#} V; Elevador, de {#} V a {#} V; Transformador de timbre (Comprueba tu comprensión {#}); Poste de la red, de {#} kV a {#} V (Ejemplo {#}); Transformador real, sin carga; Línea de transmisión (de nuevo el Ejemplo {#}).",
"The <strong>Transformer</strong> view has an AC source on the primary coil, a laminated iron core, and a load resistor on the secondary coil. You choose the source voltage \\(V_P\\) and frequency, both turn counts, the load (or none), the core size and the model.":
  "La vista <strong>Transformador</strong> tiene una fuente de CA en la bobina primaria, un núcleo de hierro laminado y una resistencia de carga en la bobina secundaria. Tú eliges el voltaje de la fuente \\(V_P\\) y la frecuencia, ambos números de espiras, la carga (o ninguna), el tamaño del núcleo y el modelo.",
"Meters read rms values to four significant figures. The oscilloscope below shows two cycles of \\(v_P\\) and \\(v_S\\) (left) and \\(i_P\\) and \\(i_S\\) (right); each trace is scaled to its own peak, so compare their timing, not their heights. The animation is slowed to one cycle every {#} s.":
  "Los medidores leen valores rms con cuatro cifras significativas. El osciloscopio de abajo muestra dos ciclos de \\(v_P\\) y \\(v_S\\) (izquierda) y de \\(i_P\\) e \\(i_S\\) (derecha); cada traza está escalada a su propio máximo, así que compara su sincronía, no sus alturas. La animación está ralentizada a un ciclo cada {#} s.",
"The <strong>ideal</strong> model is the textbook’s: all the flux stays in the core and nothing is lost. The <strong>real</strong> model treats the coils as coupled inductors on an iron core of relative permeability {#}, wound with copper wire, with a coupling \\(k\\) you set (below {#}, some flux misses the other coil). It leaves out core losses and saturation.":
  "El modelo <strong>ideal</strong> es el del libro: todo el flujo se queda en el núcleo y no se pierde nada. El modelo <strong>real</strong> trata las bobinas como inductores acoplados sobre un núcleo de hierro de permeabilidad relativa {#}, devanados con alambre de cobre, con un acoplamiento \\(k\\) que tú fijas (por debajo de {#}, parte del flujo no pasa por la otra bobina). Omite las pérdidas en el núcleo y la saturación.",
"The <strong>Power line</strong> view sends power \\(P\\) from a {#} kV generator, stepped up to the transmission voltage \\(V\\), down a line of resistance \\(R\\) (both wires together), then steps it down to {#} V for a town. Its transformers are ideal, and the line and town are purely resistive.":
  "La vista <strong>Línea de transmisión</strong> envía una potencia \\(P\\) desde un generador de {#} kV, elevada al voltaje de transmisión \\(V\\), por una línea de resistencia \\(R\\) (ambos cables juntos), y luego la reduce a {#} V para un pueblo. Sus transformadores son ideales, y la línea y el pueblo son puramente resistivos.",
"Record reading stores the meter values with the settings. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda los valores de los medidores con los ajustes. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Blind hides the ratios, powers and efficiency, and the loss curve, so you can work them out.":
  "A ciegas oculta los cocientes, las potencias y la eficiencia, y la curva de pérdidas, para que los calcules tú.",
"Find how a transformer’s voltages and currents depend on its turns, see what a real transformer loses, and show why electric power is sent over long distances at high voltage.":
  "Descubre cómo dependen los voltajes y corrientes de un transformador de sus espiras, observa qué pierde un transformador real y muestra por qué la energía eléctrica se envía a grandes distancias a alto voltaje.",
"A changing current in the primary coil makes a changing magnetic flux \\(\\Phi\\) in the core. If the same flux passes through every turn of both coils (§{#} calls this mutual inductance), Faraday’s law gives \\(v_P = -N_P\\,d\\Phi/dt\\) and \\(v_S = -N_S\\,d\\Phi/dt\\), so":
  "Una corriente variable en la bobina primaria produce un flujo magnético variable \\(\\Phi\\) en el núcleo. Si el mismo flujo pasa por cada espira de ambas bobinas (la §{#} llama a esto inductancia mutua), la ley de Faraday da \\(v_P = -N_P\\,d\\Phi/dt\\) y \\(v_S = -N_S\\,d\\Phi/dt\\), así que",
"\\[\\frac{V_S}{V_P} = \\frac{N_S}{N_P}.\\]":
  "\\[\\frac{V_S}{V_P} = \\frac{N_S}{N_P}.\\]",
"An ideal transformer loses no energy, so the power in equals the power out, \\(I_P V_P = I_S V_S\\), and":
  "Un transformador ideal no pierde energía, así que la potencia de entrada es igual a la de salida, \\(I_P V_P = I_S V_S\\), y",
"\\[\\frac{I_S}{I_P} = \\frac{N_P}{N_S}.\\]":
  "\\[\\frac{I_S}{I_P} = \\frac{N_P}{N_S}.\\]",
"A transformer that raises the voltage lowers the current by the same factor. A resistor \\(R\\) on the secondary looks to the source like a resistance \\((N_P/N_S)^2 R\\).":
  "Un transformador que eleva el voltaje reduce la corriente en el mismo factor. Una resistencia \\(R\\) en el secundario se ve desde la fuente como una resistencia \\((N_P/N_S)^2 R\\).",
"A transmission line of resistance \\(R\\) carrying power \\(P\\) at voltage \\(V\\) carries a current \\(I = P/V\\) and turns":
  "Una línea de transmisión de resistencia \\(R\\) que lleva una potencia \\(P\\) a un voltaje \\(V\\) lleva una corriente \\(I = P/V\\) y convierte",
"\\[P_\\mathrm{loss} = I^2 R = \\frac{P^2 R}{V^2}\\]":
  "\\[P_\\mathrm{loss} = I^2 R = \\frac{P^2 R}{V^2}\\]",
"into heat. Raising the voltage tenfold cuts the loss a hundredfold (§{#}, Example {#}).":
  "en calor. Elevar el voltaje diez veces reduce la pérdida cien veces (§{#}, Ejemplo {#}).",
"A transformer steps {#} V down to {#} V and has {#} turns on its primary. How many turns are on its secondary? If the {#} V side delivers {#} A, what current does the primary draw?":
  "Un transformador reduce {#} V a {#} V y tiene {#} espiras en su primario. ¿Cuántas espiras tiene su secundario? Si el lado de {#} V entrega {#} A, ¿qué corriente toma el primario?",
"OpenStax Check Your Understanding {#}: a transformer steps {#} V down to {#} V to deliver {#} A to a doorbell. Find the ratio \\(N_P/N_S\\), the primary current, and the resistance the {#} V source sees.":
  "Comprueba tu comprensión {#} de OpenStax: un transformador reduce {#} V a {#} V para entregar {#} A a un timbre. Encuentra el cociente \\(N_P/N_S\\), la corriente del primario y la resistencia que ve la fuente de {#} V.",
"A power line’s voltage is doubled while it carries the same power. By what factor does the current change? The heat lost in the line?":
  "Se duplica el voltaje de una línea de transmisión mientras lleva la misma potencia. ¿En qué factor cambia la corriente? ¿Y el calor perdido en la línea?",
"Why will a transformer not work on a steady (DC) current, however large?":
  "¿Por qué un transformador no funciona con una corriente constante (CD), por grande que sea?",
"Real transformers on the mains carry dangerous voltages, and a secondary with many turns can give a lethal voltage from a harmless looking source. Never open a transformer or touch its terminals while it is connected.":
  "Los transformadores reales conectados a la red llevan voltajes peligrosos, y un secundario con muchas espiras puede dar un voltaje mortal a partir de una fuente de apariencia inofensiva. Nunca abras un transformador ni toques sus terminales mientras esté conectado.",
"<strong>Part 1a: turns ratio.</strong> Start with the Step down setup ({#} V, {#} Hz, {#} primary turns, ideal) and set the load to {#} Ω. Record a reading for each secondary turn count of {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#}. Send the readings to the worksheet.":
  "<strong>Parte 1a: cociente de espiras.</strong> Empieza con la configuración Reductor ({#} V, {#} Hz, {#} espiras en el primario, ideal) y fija la carga en {#} Ω. Registra una lectura para cada número de espiras del secundario de {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#}. Envía las lecturas a la hoja.",
"<strong>Part 1b: currents.</strong> Clear the readings. Put the secondary back to {#} turns and record a reading for loads of {#}, {#}, {#}, {#}, {#} and {#} Ω. Send them to a new copy of the table.":
  "<strong>Parte 1b: corrientes.</strong> Borra las lecturas. Regresa el secundario a {#} espiras y registra una lectura para cargas de {#}, {#}, {#}, {#}, {#} y {#} Ω. Envíalas a una copia nueva de la tabla.",
"<strong>Part {#}: a real transformer.</strong> Clear the readings and pick Real transformer, no load ({#} V on {#} turns, {#} secondary turns, coupling {#}). Record a reading with no load, then with loads of {#}, {#}, {#}, {#} and {#} Ω. Note the phase of \\(i_P\\) from \\(v_P\\) for each. Send the readings to a new copy of the table. Then set the coupling to {#} with a {#} Ω load, and to {#}, and note \\(V_S\\) each time.":
  "<strong>Parte {#}: un transformador real.</strong> Borra las lecturas y elige Transformador real, sin carga ({#} V en {#} espiras, {#} espiras en el secundario, acoplamiento {#}). Registra una lectura sin carga y luego con cargas de {#}, {#}, {#}, {#} y {#} Ω. Anota la fase de \\(i_P\\) respecto a \\(v_P\\) en cada caso. Envía las lecturas a una copia nueva de la tabla. Luego fija el acoplamiento en {#} con una carga de {#} Ω, y en {#}, y anota \\(V_S\\) cada vez.",
"<strong>Part {#}: the power line.</strong> Clear the readings and switch to the Power line view. Send {#} MW down a {#} Ω line at each transmission voltage from {#} kV to {#} kV ({#}, {#}, {#}, {#}, {#}, {#}, {#} kV), recording a reading each time. Send them to a new copy of the table. Then pick the Power line setup (Example {#}: {#} kW, {#} kV, {#} Ω) and note the loss, and what happens at {#} V.":
  "<strong>Parte {#}: la línea de transmisión.</strong> Borra las lecturas y cambia a la vista Línea de transmisión. Envía {#} MW por una línea de {#} Ω a cada voltaje de transmisión de {#} kV a {#} kV ({#}, {#}, {#}, {#}, {#}, {#}, {#} kV), registrando una lectura cada vez. Envíalas a una copia nueva de la tabla. Luego elige la configuración Línea de transmisión (Ejemplo {#}: {#} kW, {#} kV, {#} Ω) y anota la pérdida, y qué pasa a {#} V.",
"<span>I</span>Load or line \\(R\\) (Ω)":
  "<span>I</span>Carga o línea \\(R\\) (Ω)",
"<span>J</span>Power in (W)":
  "<span>J</span>Potencia de entrada (W)",
"<span>K</span>Power out (W)":
  "<span>K</span>Potencia de salida (W)",
"<span>L</span>Line loss (W)":
  "<span>L</span>Pérdida en la línea (W)",
"N_P, row {#}":
  "N_P, fila {#}",
"N_S, row {#}":
  "N_S, fila {#}",
"V_P (V), row {#}":
  "V_P (V), fila {#}",
"V_S (V), row {#}":
  "V_S (V), fila {#}",
"I_P (A), row {#}":
  "I_P (A), fila {#}",
"I_S (A), row {#}":
  "I_S (A), fila {#}",
"Load or line R (Ω), row {#}":
  "Carga o línea R (Ω), fila {#}",
"Power in (W), row {#}":
  "Potencia de entrada (W), fila {#}",
"Power out (W), row {#}":
  "Potencia de salida (W), fila {#}",
"Line loss (W), row {#}":
  "Pérdida en la línea (W), fila {#}",
"{#}/V_S^{#} ({#}/V²), row {#}":
  "{#}/V_S^{#} ({#}/V²), fila {#}",
"In the Power line rows, \\(V_P\\) is the {#} kV generator, \\(V_S\\) is the transmission voltage, \\(I_S\\) is the line current, Power in is the power sent and Power out the power delivered. Fill the last column yourself for Part {#}.":
  "En las filas de Línea de transmisión, \\(V_P\\) es el generador de {#} kV, \\(V_S\\) es el voltaje de transmisión, \\(I_S\\) es la corriente de la línea, Potencia de entrada es la potencia enviada y Potencia de salida la potencia entregada. Llena tú mismo la última columna para la Parte {#}.",
"Graph \\(V_S\\) against \\(N_S\\) for Part 1a. Compare the slope with \\(V_P/N_P\\), and say what the intercept should be.":
  "Grafica \\(V_S\\) en función de \\(N_S\\) para la Parte 1a. Compara la pendiente con \\(V_P/N_P\\), y di cuál debería ser la ordenada al origen.",
"Graph \\(I_P\\) against \\(I_S\\) for Part 1b. Compare the slope with \\(N_S/N_P\\). For two of the rows, compare the power in with the power out.":
  "Grafica \\(I_P\\) en función de \\(I_S\\) para la Parte 1b. Compara la pendiente con \\(N_S/N_P\\). Para dos de las filas, compara la potencia de entrada con la de salida.",
"For Part {#}, compare each \\(V_S\\) with the ideal {#} V and each power out with the power in, and work out the efficiency. With no load, how large is the primary current, what is its phase from \\(v_P\\), and how much power does it take? Why?":
  "Para la Parte {#}, compara cada \\(V_S\\) con los {#} V ideales y cada potencia de salida con la de entrada, y calcula la eficiencia. Sin carga, ¿qué tan grande es la corriente del primario, cuál es su fase respecto a \\(v_P\\) y cuánta potencia toma? ¿Por qué?",
"Graph the line loss against \\(1/V_S^2\\) for Part {#}. Compare the slope with \\(P^2R\\). What share of the {#} MW is lost at {#} kV, and at {#} kV?":
  "Grafica la pérdida en la línea en función de \\(1/V_S^2\\) para la Parte {#}. Compara la pendiente con \\(P^2R\\). ¿Qué fracción de los {#} MW se pierde a {#} kV, y a {#} kV?",
"For Example {#}, compare the demo’s loss at {#} kV with \\((2.0\\ \\mathrm{A})^2(200\\ \\Omega)\\). Explain what the demo shows at {#} V.":
  "Para el Ejemplo {#}, compara la pérdida de la demo a {#} kV con \\((2.0\\ \\mathrm{A})^2(200\\ \\Omega)\\). Explica lo que muestra la demo a {#} V.",
"The meters show four significant figures and the recorded readings carry six, and the ideal model has no other uncertainty, so your slopes in Analysis {#}, {#} and {#} should match the predictions closely; say how closely, using the standard errors of your fits. The real model rests on stated choices (core permeability, wire, coupling) that a real transformer would only approximate: name one that would most change your Part {#} results, and in which direction.":
  "Los medidores muestran cuatro cifras significativas y las lecturas registradas llevan seis, y el modelo ideal no tiene otra incertidumbre, así que tus pendientes de los Análisis {#}, {#} y {#} deberían coincidir mucho con las predicciones; di qué tanto, usando los errores estándar de tus ajustes. El modelo real se basa en elecciones declaradas (permeabilidad del núcleo, alambre, acoplamiento) que un transformador real solo aproximaría: nombra la que más cambiaría tus resultados de la Parte {#}, y en qué dirección.",
"A step up transformer gives out a higher voltage than it takes in. Why does that not break conservation of energy?":
  "Un transformador elevador entrega un voltaje mayor que el que recibe. ¿Por qué eso no viola la conservación de la energía?",
"When a load is connected to the secondary, the primary current rises, although the two coils are not connected by any wire. Explain why, using Lenz’s law.":
  "Cuando se conecta una carga al secundario, la corriente del primario aumenta, aunque las dos bobinas no están conectadas por ningún cable. Explica por qué, usando la ley de Lenz.",
"Why are transformer cores made of thin insulated sheets of iron rather than a solid block? (§{#})":
  "¿Por qué los núcleos de los transformadores se hacen de láminas delgadas de hierro aisladas y no de un bloque sólido? (§{#})",
"Since the line loss falls as \\(1/V^2\\), why are power lines not run at even higher voltages?":
  "Si la pérdida en la línea disminuye como \\(1/V^2\\), ¿por qué las líneas de transmisión no operan a voltajes aún más altos?",
"Prelab answers, the settings for each part, the table copies with their graphs and fits, the comparisons in the Analysis, the efficiencies, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, los ajustes de cada parte, las copias de la tabla con sus gráficas y ajustes, las comparaciones del Análisis, las eficiencias y las respuestas a las preguntas. Identifica los datos simulados.",
"Current in the line":
  "Corriente en la línea",
"rms primary current":
  "Corriente rms del primario",
"rms secondary current":
  "Corriente rms del secundario",
"Turns on the primary":
  "Espiras del primario",
"Turns on the secondary":
  "Espiras del secundario",
"Power sent":
  "Potencia enviada",
"Power lost in the line":
  "Potencia perdida en la línea",
"Magnetic flux in the core":
  "Flujo magnético en el núcleo",
"Resistance of the load or the line":
  "Resistencia de la carga o de la línea",
"Transmission voltage":
  "Voltaje de transmisión",
"rms primary voltage":
  "Voltaje rms del primario",
"rms secondary voltage":
  "Voltaje rms del secundario",
"Instantaneous primary current":
  "Corriente instantánea del primario",
"Instantaneous secondary current":
  "Corriente instantánea del secundario",
"Coupling coefficient ({#} when all the flux links both coils)":
  "Coeficiente de acoplamiento ({#} cuando todo el flujo enlaza ambas bobinas)",
"Instantaneous primary voltage":
  "Voltaje instantáneo del primario",
"Instantaneous secondary voltage":
  "Voltaje instantáneo del secundario",
"Transformers":
  "Transformadores"
});
