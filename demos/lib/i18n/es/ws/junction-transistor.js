/* ws/junction-transistor in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/junction-transistor', {
"Setup and parts":
  "Configuración y piezas",
"A1 current (A)":
  "Corriente en A1 (A)",
"A2 current (A)":
  "Corriente en A2 (A)",
"Voltmeter (V)":
  "Voltímetro (V)",
"ln(I_A1 / {#} A)":
  "ln(I_A1 / {#} A)",
"A Real Diode and the Junction Transistor | VirtualDemos":
  "Un diodo real y el transistor de unión | VirtualDemos",
"A Real Diode and the Junction Transistor":
  "Un diodo real y el transistor de unión",
"Student laboratory · Physics II and Modern Physics":
  "Laboratorio del estudiante · Física II y Física moderna",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (Semiconductor Devices). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (Dispositivos semiconductores). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups for this worksheet:</strong> Diode (Part {#}) and Transistor switch (Part {#}), in the row of starter circuits; Amplifier for the last question. The other setups belong to the Kirchhoff, RC, RLC and AC worksheets.":
  "<strong>Configuraciones para esta hoja de trabajo:</strong> Diodo (Parte {#}) y Transistor como interruptor (Parte {#}), en la fila de circuitos iniciales; Amplificador para la última pregunta. Las demás configuraciones pertenecen a las hojas de trabajo de Kirchhoff, RC, RLC y CA.",
"The diode is a 1N4148 small signal silicon diode, modeled with the maker’s published values: \\(I = I_s\\left(e^{eV/nkT} - 1\\right)\\) with \\(I_s = 4.352\\) nA, ideality factor \\(n = 1.906\\) and a series resistance of {#} Ω, at {#} °C ({#} K, the temperature the maker gives the values for). Reverse breakdown (above {#} V) is left out.":
  "El diodo es un diodo de silicio de señal pequeña 1N4148, modelado con los valores publicados por el fabricante: \\(I = I_s\\left(e^{eV/nkT} - 1\\right)\\) con \\(I_s = 4.352\\) nA, factor de idealidad \\(n = 1.906\\) y una resistencia en serie de {#} Ω, a {#} °C ({#} K, la temperatura para la que el fabricante da los valores). Se omite la ruptura inversa (por encima de {#} V).",
"The transistor is a 2N3904 NPN silicon transistor (PNP is an option), modeled with the Ebers–Moll equations. Its current gain \\(\\beta\\) is a setting of the part ({#} unless you change it); the data sheet gives {#} to {#} at a collector current of {#} mA. The base–collector and base–emitter junctions both follow the diode law, so the model saturates when the collector voltage falls too low, as a real transistor does. Left out: the Early effect (the slow rise of collector current with collector voltage), the junctions’ stored charge and capacitance, and the base and collector bulk resistances, so the model is a DC model and its current gain in the active region is exactly \\(\\beta\\).":
  "El transistor es un transistor NPN de silicio 2N3904 (PNP es una opción), modelado con las ecuaciones de Ebers–Moll. Su ganancia de corriente \\(\\beta\\) es un ajuste de la pieza ({#} a menos que la cambies); la hoja de datos da de {#} a {#} con una corriente de colector de {#} mA. Las uniones base–colector y base–emisor siguen ambas la ley del diodo, así que el modelo se satura cuando el voltaje del colector baja demasiado, como lo hace un transistor real. Se omiten: el efecto Early (el lento aumento de la corriente de colector con el voltaje de colector), la carga almacenada y la capacitancia de las uniones, y las resistencias volumétricas de la base y el colector, así que el modelo es un modelo de CD y su ganancia de corriente en la región activa es exactamente \\(\\beta\\).",
"LEDs use catalog forward voltages at {#} mA (red {#} V, green {#} V, blue {#} V), with an assumed ideality factor of {#} and no series resistance.":
  "Los LED usan voltajes directos de catálogo a {#} mA (rojo {#} V, verde {#} V, azul {#} V), con un factor de idealidad supuesto de {#} y sin resistencia en serie.",
"The circuit is solved exactly for the diode and transistor equations (Newton’s method, to better than {#}⁻¹⁰ V). Meters are ideal.":
  "El circuito se resuelve exactamente para las ecuaciones del diodo y del transistor (método de Newton, a mejor que {#}⁻¹⁰ V). Los medidores son ideales.",
"Capture reading under Readings stores what every meter shows, to {#} significant figures, with the part values. Export to worksheet sends a DC series that contains a diode or a transistor to this worksheet; Clear starts a new series, which goes into a new copy of the table.":
  "Capturar lectura, en Lecturas, guarda lo que muestra cada medidor, con {#} cifras significativas, junto con los valores de las piezas. Exportar a la hoja envía a esta hoja de trabajo una serie de CD que contenga un diodo o un transistor; Borrar empieza una nueva serie, que va a una nueva copia de la tabla.",
"Blind hides the transistor’s base and collector currents and its region of operation; the meters still read.":
  "A ciegas oculta las corrientes de base y de colector del transistor y su región de operación; los medidores siguen leyendo.",
"Measure the current–voltage law of a real silicon diode and find how far it is from the ideal diode, then measure the current gain of a junction transistor and watch it change from an amplifier into a switch.":
  "Mide la ley de corriente y voltaje de un diodo real de silicio y encuentra qué tan lejos está del diodo ideal; luego mide la ganancia de corriente de un transistor de unión y observa cómo pasa de amplificador a interruptor.",
"A pn junction passes a current that grows exponentially with the forward bias (§{#}, Eq. {#}). A real diode follows the same law with one extra number, the ideality factor \\(n\\), which is {#} for the ideal junction of the book and between {#} and {#} for real silicon diodes (beyond the book: some carriers recombine inside the depletion region):":
  "Una unión pn deja pasar una corriente que crece exponencialmente con la polarización directa (§{#}, Ec. {#}). Un diodo real sigue la misma ley con un número extra, el factor de idealidad \\(n\\), que es {#} para la unión ideal del libro y está entre {#} y {#} para los diodos reales de silicio (más allá del libro: algunos portadores se recombinan dentro de la región de agotamiento):",
"\\[I = I_s\\left(e^{eV/nkT} - 1\\right) \\approx I_s\\, e^{eV/nkT}\\quad (eV \\gg nkT),\\]":
  "\\[I = I_s\\left(e^{eV/nkT} - 1\\right) \\approx I_s\\, e^{eV/nkT}\\quad (eV \\gg nkT),\\]",
"so \\(\\ln I = \\ln I_s + \\dfrac{e}{nkT}V\\) is a straight line in \\(V\\) with slope \\(e/(nkT)\\).":
  "así que \\(\\ln I = \\ln I_s + \\dfrac{e}{nkT}V\\) es una recta en \\(V\\) con pendiente \\(e/(nkT)\\).",
"A junction transistor (§{#}, Fig. {#}) is two junctions back to back: an n type emitter, a thin p type base and an n type collector. With the base–emitter junction forward biased and the base–collector junction reverse biased (the active region), almost every electron injected from the emitter crosses the thin base into the collector, and a small base current controls a large collector current (Eq. {#}):":
  "Un transistor de unión (§{#}, Fig. {#}) son dos uniones espalda con espalda: un emisor tipo n, una base delgada tipo p y un colector tipo n. Con la unión base–emisor en polarización directa y la unión base–colector en polarización inversa (la región activa), casi todos los electrones inyectados desde el emisor cruzan la base delgada hacia el colector, y una pequeña corriente de base controla una gran corriente de colector (Ec. {#}):",
"\\[I_C = \\beta I_B .\\]":
  "\\[I_C = \\beta I_B .\\]",
"When the base current is large enough that \\(\\beta I_B\\) is more than the collector circuit can carry, the collector voltage falls to about {#} V and the transistor is saturated: it acts as a closed switch, and \\(I_C\\) is set by the rest of the circuit, not by \\(\\beta\\).":
  "Cuando la corriente de base es lo bastante grande para que \\(\\beta I_B\\) sea más de lo que puede llevar el circuito del colector, el voltaje del colector baja a unos {#} V y el transistor está saturado: actúa como un interruptor cerrado, e \\(I_C\\) lo fija el resto del circuito, no \\(\\beta\\).",
"At {#} K, \\(kT/e = 25.9\\) mV. For a diode with \\(n = 1.9\\), by how much must the forward voltage rise to multiply the current by {#}?":
  "A {#} K, \\(kT/e = 25.9\\) mV. Para un diodo con \\(n = 1.9\\), ¿cuánto debe subir el voltaje directo para multiplicar la corriente por {#}?",
"In the Transistor switch setup, a {#} V battery drives the base through \\(R_B\\). Take the base–emitter voltage as {#} V and \\(\\beta = 100\\). Find \\(I_B\\) and \\(I_C\\) for \\(R_B = 100\\ \\text{k}\\Omega\\).":
  "En la configuración Transistor como interruptor, una batería de {#} V alimenta la base a través de \\(R_B\\). Toma el voltaje base–emisor como {#} V y \\(\\beta = 100\\). Encuentra \\(I_B\\) e \\(I_C\\) para \\(R_B = 100\\ \\text{k}\\Omega\\).",
"The collector circuit is the {#} V battery, a {#} Ω resistor and a red LED (about {#} V). With the transistor saturated ({#} V across it), what collector current flows? What base current, and what \\(R_B\\), are needed to reach it?":
  "El circuito del colector es la batería de {#} V, una resistencia de {#} Ω y un LED rojo (de unos {#} V). Con el transistor saturado ({#} V entre sus terminales), ¿qué corriente de colector fluye? ¿Qué corriente de base, y qué \\(R_B\\), se necesitan para alcanzarla?",
"No hazards in the virtual lab. On a real bench, never connect a diode or a transistor’s base straight across a supply without a series resistor, and keep the collector current below the part’s rating ({#} mA for the 2N3904).":
  "No hay peligros en el laboratorio virtual. En un banco real, nunca conectes un diodo ni la base de un transistor directamente a una fuente sin una resistencia en serie, y mantén la corriente de colector por debajo de la nominal de la pieza ({#} mA para el 2N3904).",
"<strong>Part {#}, a real diode.</strong> Open the Diode setup ({#} V battery, series resistor, diode, ammeter A1 in series and voltmeter across the diode). Take readings with the series resistor at {#} MΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ and {#} kΩ, then at {#} Ω, {#} Ω and {#} Ω. Export the series to the worksheet.":
  "<strong>Parte {#}, un diodo real.</strong> Abre la configuración Diodo (batería de {#} V, resistencia en serie, diodo, amperímetro A1 en serie y voltímetro entre los extremos del diodo). Toma lecturas con la resistencia en serie en {#} MΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ y {#} kΩ, y luego en {#} Ω, {#} Ω y {#} Ω. Exporta la serie a la hoja de trabajo.",
"<strong>Part {#}, the transistor.</strong> Clear the readings and open the Transistor switch setup. A1 reads the base current and A2 the collector current; the voltmeter reads \\(V_{CE}\\). Take readings with \\(R_B\\) at {#} MΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ and {#} kΩ, and export them to the worksheet; they go into a second copy of the table. Clear the readings, then continue at {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ and {#} kΩ and export again, into a third copy. Watch the LED as you go.":
  "<strong>Parte {#}, el transistor.</strong> Borra las lecturas y abre la configuración Transistor como interruptor. A1 lee la corriente de base y A2 la corriente de colector; el voltímetro lee \\(V_{CE}\\). Toma lecturas con \\(R_B\\) en {#} MΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ y {#} kΩ, y expórtalas a la hoja de trabajo; van a una segunda copia de la tabla. Borra las lecturas y luego continúa en {#} kΩ, {#} kΩ, {#} kΩ, {#} kΩ y {#} kΩ y exporta de nuevo, a una tercera copia. Observa el LED mientras avanzas.",
"Part {#} goes in the first copy of the table and Part {#} in the second and third. Fill in the last two columns yourself: ln I for Part {#}, A2/A1 for Part {#}. Each copy’s graph fits a line to every row that has both of its columns filled.":
  "La Parte {#} va en la primera copia de la tabla y la Parte {#} en la segunda y la tercera. Llena tú mismo las dos últimas columnas: ln I para la Parte {#}, A2/A1 para la Parte {#}. La gráfica de cada copia ajusta una recta a cada fila que tenga llenas sus dos columnas.",
"<span>B</span>Setup and parts":
  "<span>B</span>Configuración y piezas",
"<span>C</span>A1 current (A)":
  "<span>C</span>Corriente en A1 (A)",
"<span>D</span>A2 current (A)":
  "<span>D</span>Corriente en A2 (A)",
"<span>E</span>Voltmeter (V)":
  "<span>E</span>Voltímetro (V)",
"<span>F</span>ln(I_A1 / {#} A)":
  "<span>F</span>ln(I_A1 / {#} A)",
"Setup and parts, row {#}":
  "Configuración y piezas, fila {#}",
"A1 current (A), row {#}":
  "Corriente en A1 (A), fila {#}",
"A2 current (A), row {#}":
  "Corriente en A2 (A), fila {#}",
"Voltmeter (V), row {#}":
  "Voltímetro (V), fila {#}",
"ln(I_A1 / {#} A), row {#}":
  "ln(I_A1 / {#} A), fila {#}",
"A2/A1, row {#}":
  "A2/A1, fila {#}",
"Part {#}: plot \\(\\ln I\\) against the diode voltage. Fill in ln I only for the readings from {#} kΩ to {#} MΩ, so that the straight line fits those. From the slope, find the ideality factor \\(n\\) (use \\(kT/e = 25.87\\) mV at {#} K). From the intercept, find \\(I_s\\).":
  "Parte {#}: grafica \\(\\ln I\\) en función del voltaje del diodo. Llena ln I solo para las lecturas de {#} kΩ a {#} MΩ, para que la recta se ajuste a esas. A partir de la pendiente, encuentra el factor de idealidad \\(n\\) (usa \\(kT/e = 25.87\\) mV a {#} K). A partir de la ordenada al origen, encuentra \\(I_s\\).",
"How many volts does the diode voltage rise for each factor of {#} in current? Compare with an ideal diode (\\(n = 1\\)).":
  "¿Cuántos volts sube el voltaje del diodo por cada factor de {#} en la corriente? Compáralo con un diodo ideal (\\(n = 1\\)).",
"Part {#}: plot \\(I_C\\) (A2) against \\(I_B\\) (A1) for the first series, where \\(V_{CE}\\) stays above {#} V, and give \\(\\beta\\) from the slope of the straight line. Plot the second series the same way.":
  "Parte {#}: grafica \\(I_C\\) (A2) en función de \\(I_B\\) (A1) para la primera serie, donde \\(V_{CE}\\) se mantiene por encima de {#} V, y da \\(\\beta\\) a partir de la pendiente de la recta. Grafica la segunda serie de la misma manera.",
"Complete the A2/A1 column in both copies. Where does \\(I_C/I_B\\) stop being constant? What is \\(V_{CE}\\) there, and what limits \\(I_C\\) beyond that point? Compare with your answer to prelab question {#}.":
  "Completa la columna A2/A1 en ambas copias. ¿Dónde deja de ser constante \\(I_C/I_B\\)? ¿Cuánto vale \\(V_{CE}\\) ahí, y qué limita \\(I_C\\) más allá de ese punto? Compáralo con tu respuesta a la pregunta {#} del prelaboratorio.",
"Use the standard errors of the fits for \\(n\\) and \\(\\beta\\). The readings have three significant figures: how large is the rounding of the diode voltage compared with the {#} V spread of your Part {#} readings per decade of current? Explain why the readings at {#} Ω, {#} Ω and {#} Ω are left out of the Part {#} fit.":
  "Usa los errores estándar de los ajustes para \\(n\\) y \\(\\beta\\). Las lecturas tienen tres cifras significativas: ¿qué tan grande es el redondeo del voltaje del diodo comparado con la dispersión de {#} V de tus lecturas de la Parte {#} por década de corriente? Explica por qué las lecturas en {#} Ω, {#} Ω y {#} Ω se dejan fuera del ajuste de la Parte {#}.",
"Work out ln I for the Part {#} readings at {#} Ω, {#} Ω and {#} Ω and compare each with the straight line at the same voltage. Why do they fall below it? Estimate the voltage across the diode’s {#} Ω series resistance at the {#} Ω reading.":
  "Calcula ln I para las lecturas de la Parte {#} en {#} Ω, {#} Ω y {#} Ω y compara cada una con la recta al mismo voltaje. ¿Por qué quedan por debajo de ella? Estima el voltaje en la resistencia en serie de {#} Ω del diodo en la lectura de {#} Ω.",
"The book’s diode law has \\(n = 1\\). At a current of {#} mA, by how many millivolts would the voltage of the ideal diode with the same \\(I_s\\) differ from the 1N4148’s?":
  "La ley del diodo del libro tiene \\(n = 1\\). Con una corriente de {#} mA, ¿por cuántos milivolts diferiría el voltaje del diodo ideal con la misma \\(I_s\\) del voltaje del 1N4148?",
"In Part {#}, when is the LED fully on, and what current does it carry then? Why does a transistor used as a switch run in saturation rather than in the active region?":
  "En la Parte {#}, ¿cuándo está el LED encendido por completo, y qué corriente lleva entonces? ¿Por qué un transistor usado como interruptor opera en saturación y no en la región activa?",
"Change the transistor’s \\(\\beta\\) to {#} and take one reading at \\(R_B = 470\\) kΩ and one at {#} kΩ. Which reading changes and which hardly changes? Explain.":
  "Cambia la \\(\\beta\\) del transistor a {#} y toma una lectura con \\(R_B = 470\\) kΩ y otra con {#} kΩ. ¿Qué lectura cambia y cuál casi no cambia? Explica.",
"Open the Amplifier setup (a common emitter amplifier, Fig. {#} of the book is the same idea). The input is a {#} V, {#} kHz signal and the probe watches the collector. Estimate the voltage gain from the trace, and compare it with \\(R_C/R_E\\).":
  "Abre la configuración Amplificador (un amplificador de emisor común; la Fig. {#} del libro es la misma idea). La entrada es una señal de {#} V y {#} kHz y la sonda observa el colector. Estima la ganancia de voltaje a partir de la traza, y compárala con \\(R_C/R_E\\).",
"Prelab answers, both data tables with their graphs, \\(n\\) and \\(I_s\\) with uncertainties, \\(\\beta\\) with its uncertainty, the A2/A1 column, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ambas tablas de datos con sus gráficas, \\(n\\) e \\(I_s\\) con sus incertidumbres, \\(\\beta\\) con su incertidumbre, la columna A2/A1 y respuestas a las preguntas. Identifica los datos simulados.",
"Diode current":
  "Corriente del diodo",
"Base current":
  "Corriente de base",
"Collector current":
  "Corriente de colector",
"Saturation current":
  "Corriente de saturación",
"Base resistor":
  "Resistencia de base",
"Collector resistor":
  "Resistencia de colector",
"Emitter resistor":
  "Resistencia de emisor",
"Voltage across the diode":
  "Voltaje en el diodo",
"Collector to emitter voltage":
  "Voltaje de colector a emisor",
"Current gain":
  "Ganancia de corriente",
"Ideality factor":
  "Factor de idealidad",
"{#} for the 1N4148":
  "{#} para el 1N4148"
});
