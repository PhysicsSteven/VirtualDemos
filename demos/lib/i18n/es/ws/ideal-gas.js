/* ws/ideal-gas in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/ideal-gas', {
"Atoms N":
  "Átomos N",
"Area A (nm²)":
  "Área A (nm²)",
"Pressure P (mN/m)":
  "Presión P (mN/m)",
"NkT/A (mN/m)":
  "NkT/A (mN/m)",
"rms speed (m/s)":
  "Rapidez rms (m/s)",
"v_rms^{#} (m²/s²)":
  "v_rms^{#} (m²/s²)",
"With calculus":
  "Con cálculo",
"Gas in a Box: Pressure, Temperature and Speed | VirtualDemos":
  "Gas en una caja: presión, temperatura y rapidez | VirtualDemos",
"Gas in a Box: Pressure, Temperature and Speed":
  "Gas en una caja: presión, temperatura y rapidez",
"<strong>Setups in the demo:</strong> Relax to equilibrium; Hot vs cold; Compress; Dilute gas; Near absolute zero; Cold walls; Hot wall, cold wall.":
  "<strong>Configuraciones en la demo:</strong> Relajación al equilibrio; Caliente contra frío; Comprimir; Gas diluido; Cerca del cero absoluto; Paredes frías; Pared caliente, pared fría.",
"The box holds argon atoms (mass \\(6.63\\times10^{-26}\\) kg) moving in two dimensions. It is {#} nm high, and its right wall is a piston you can drag to make it from {#} to {#} nm wide. You choose the number of atoms, from {#} to {#}, and the temperature, from {#} K to {#} K.":
  "La caja contiene átomos de argón (masa \\(6.63\\times10^{-26}\\) kg) que se mueven en dos dimensiones. Mide {#} nm de alto, y su pared derecha es un pistón que puedes arrastrar para que mida de {#} a {#} nm de ancho. Tú eliges el número de átomos, de {#} a {#}, y la temperatura, de {#} K a {#} K.",
"The atoms are hard disks {#} nm across that bounce off each other and the walls without losing energy (the walls set to Insulated, as for this whole worksheet). Their size makes the pressure run a few percent above the ideal value, more when the box is crowded.":
  "Los átomos son discos duros de {#} nm de diámetro que rebotan entre sí y en las paredes sin perder energía (las paredes en Aislada, como en toda esta hoja de trabajo). Su tamaño hace que la presión quede unos cuantos por ciento por encima del valor ideal, más cuando la caja está llena.",
"In two dimensions pressure is force per unit length of wall, in N/m (the readout picks nN/m, µN/m or mN/m; the recorded column is always in mN/m), and the ideal gas law reads \\(PA = NkT\\), with \\(A\\) the box’s area.":
  "En dos dimensiones la presión es fuerza por unidad de longitud de pared, en N/m (la lectura elige nN/m, µN/m o mN/m; la columna registrada siempre está en mN/m), y la ley del gas ideal se escribe \\(PA = NkT\\), con \\(A\\) el área de la caja.",
"The temperature is worked out from the atoms’ kinetic energy, \\(\\langle \\tfrac{1}{2}mv^2\\rangle = kT\\) in two dimensions. The pressure is the momentum the atoms deliver to the walls per unit length per unit time, averaged over about a second on screen, so wait a few seconds after any change before recording.":
  "La temperatura se calcula a partir de la energía cinética de los átomos, \\(\\langle \\tfrac{1}{2}mv^2\\rangle = kT\\) en dos dimensiones. La presión es el momento que los átomos entregan a las paredes por unidad de longitud y por unidad de tiempo, promediado durante cerca de un segundo en pantalla, así que espera unos segundos después de cualquier cambio antes de registrar.",
"Moving the temperature slider rescales every speed at once. One second on screen is {#} ps of the atoms’ time at Fixed rate. Slow motion follows T speeds the playback up for a cold gas (and slows it for a hot one), and the clock says by how much, so a cold gas only looks lively.":
  "Mover el deslizador de temperatura reescala todas las rapideces a la vez. Un segundo en pantalla son {#} ps del tiempo de los átomos con Ritmo fijo. La cámara lenta sigue a T acelera la reproducción para un gas frío (y la frena para uno caliente), y el reloj dice en cuánto, así que un gas frío solo parece animado.",
"Each wall can instead be held at a temperature of its own. An atom that hits such a wall trades energy with it (on the fraction of hits set by Hits that trade energy) and leaves as if from a gas at the wall’s temperature, so the gas warms or cools toward it, and walls at different temperatures keep heat flowing through the gas. Q is the heat the walls have given the gas.":
  "Cada pared puede, en cambio, mantenerse a una temperatura propia. Un átomo que choca con una pared así intercambia energía con ella (en la fracción de choques que fija Choques que intercambian energía) y sale como si viniera de un gas a la temperatura de la pared, así que el gas se calienta o se enfría hacia ella, y las paredes a temperaturas distintas mantienen un flujo de calor a través del gas. Q es el calor que las paredes le han dado al gas.",
"Record reading stores the time, the number of atoms, the temperature, the box’s area and width, the measured pressure, and the mean and rms speeds. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda el tiempo, el número de átomos, la temperatura, el área y el ancho de la caja, la presión medida, y las rapideces media y rms. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Test the ideal gas law for a gas of atoms you can watch, and connect the temperature to the atoms’ speeds.":
  "Pon a prueba la ley del gas ideal para un gas de átomos que puedes observar, y relaciona la temperatura con las rapideces de los átomos.",
"Pressure comes from molecules hitting the walls, and temperature measures their average kinetic energy (§{#}). In three dimensions \\(PV = NkT\\) and \\(\\langle\\tfrac12 mv^2\\rangle = \\tfrac32 kT\\). This box is two dimensional, where each atom has two directions to move in instead of three:":
  "La presión viene de las moléculas que chocan con las paredes, y la temperatura mide su energía cinética promedio (§{#}). En tres dimensiones \\(PV = NkT\\) y \\(\\langle\\tfrac12 mv^2\\rangle = \\tfrac32 kT\\). Esta caja es bidimensional, donde cada átomo tiene dos direcciones en las que moverse en lugar de tres:",
"\\[PA = NkT, \\qquad \\left\\langle \\tfrac{1}{2}mv^2 \\right\\rangle = kT, \\qquad v_\\mathrm{rms} = \\sqrt{\\frac{2kT}{m}}.\\]":
  "\\[PA = NkT, \\qquad \\left\\langle \\tfrac{1}{2}mv^2 \\right\\rangle = kT, \\qquad v_\\mathrm{rms} = \\sqrt{\\frac{2kT}{m}}.\\]",
"The atoms’ speeds spread out into the Maxwell and Boltzmann distribution (§{#}), shown under the box.":
  "Las rapideces de los átomos se dispersan en la distribución de Maxwell y Boltzmann (§{#}), que se muestra debajo de la caja.",
"Predict the pressure, in mN/m, of {#} atoms at {#} K in a box {#} nm by {#} nm.":
  "Predice la presión, en mN/m, de {#} átomos a {#} K en una caja de {#} nm por {#} nm.",
"Predict the rms speed of argon atoms at {#} K in two dimensions. At {#} K, four times as hot, would the rms speed be four times as large, twice as large, or about the same, and why?":
  "Predice la rapidez rms de los átomos de argón a {#} K en dos dimensiones. A {#} K, cuatro veces más caliente, ¿la rapidez rms sería cuatro veces mayor, el doble o casi la misma, y por qué?",
"If you halve the box’s area at a fixed temperature, what happens to the pressure?":
  "Si reduces a la mitad el área de la caja a temperatura fija, ¿qué le pasa a la presión?",
"Why should the pressure double if the number of atoms doubles at fixed temperature and area?":
  "¿Por qué debería duplicarse la presión si el número de átomos se duplica con temperatura y área fijas?",
"<strong>Pressure and temperature.</strong> ({#}) Press the Relax to equilibrium setup ({#} atoms, {#} K, box {#} nm wide, walls Insulated) and wait until the histogram under the box matches the curve. ({#}) Set the Temperature slider (it is logarithmic and sticks to round values) to {#}, {#}, {#}, {#}, {#} and {#} K. ({#}) At each, wait a few seconds for P measured in the Measurements panel to settle, then press Record reading.":
  "<strong>Presión y temperatura.</strong> ({#}) Pulsa la configuración Relajación al equilibrio ({#} átomos, {#} K, caja de {#} nm de ancho, paredes Aisladas) y espera hasta que el histograma debajo de la caja coincida con la curva. ({#}) Fija el control Temperatura (es logarítmico y se pega a valores redondos) en {#}, {#}, {#}, {#}, {#} y {#} K. ({#}) En cada una, espera unos segundos a que P medida en el panel Mediciones se estabilice, y luego pulsa Registrar lectura.",
"<strong>Pressure and number.</strong> Press Export to worksheet, then Clear. Set Temperature back to {#} K, leave Box width at {#} nm, and record a reading with the Molecules N slider at {#}, {#}, {#}, {#}, {#} and {#}, waiting a few seconds after each change.":
  "<strong>Presión y número.</strong> Pulsa Exportar a la hoja y luego Borrar. Regresa la Temperatura a {#} K, deja el Ancho de la caja en {#} nm, y registra una lectura con el control Moléculas N en {#}, {#}, {#}, {#}, {#} y {#}, esperando unos segundos después de cada cambio.",
"<strong>Pressure and area.</strong> Press Export to worksheet, then Clear. Set Molecules N to {#} and Temperature to {#} K. Set Box width under Piston to {#}, {#}, {#}, {#}, {#} and {#} nm. Moving the piston heats or cools the gas, so after the piston stops set Temperature back to {#} K, wait a few seconds, and press Record reading. Press Export to worksheet at the end.":
  "<strong>Presión y área.</strong> Pulsa Exportar a la hoja y luego Borrar. Fija Moléculas N en {#} y Temperatura en {#} K. Fija el Ancho de la caja en Pistón en {#}, {#}, {#}, {#}, {#} y {#} nm. Mover el pistón calienta o enfría el gas, así que después de que el pistón se detenga vuelve a fijar la Temperatura en {#} K, espera unos segundos y pulsa Registrar lectura. Pulsa Exportar a la hoja al final.",
"The Data table’s Pressure, Area and rms speed columns are the demo’s P measured, Box area A and rms speed; work out the \\(1/A\\), \\(NkT/A\\) and \\(v_\\mathrm{rms}^2\\) columns yourself.":
  "Las columnas Presión, Área y rapidez cuadrática media de la tabla de datos son la P medida, el Área de la caja A y la rapidez cuadrática media de la demo; calcula tú las columnas \\(1/A\\), \\(NkT/A\\) y \\(v_\\mathrm{rms}^2\\).",
"<span>B</span>Atoms \\(N\\)":
  "<span>B</span>Átomos \\(N\\)",
"<span>C</span>Temperature \\(T\\) (K)":
  "<span>C</span>Temperatura \\(T\\) (K)",
"<span>D</span>Area \\(A\\) (nm²)":
  "<span>D</span>Área \\(A\\) (nm²)",
"<span>F</span>Pressure \\(P\\) (mN/m)":
  "<span>F</span>Presión \\(P\\) (mN/m)",
"<span>G</span>\\(NkT/A\\) (mN/m)":
  "<span>G</span>\\(NkT/A\\) (mN/m)",
"<span>H</span>rms speed (m/s)":
  "<span>H</span>Rapidez rms (m/s)",
"<span>I</span>\\(v_\\mathrm{rms}^2\\) (m²/s²)":
  "<span>I</span>\\(v_\\mathrm{rms}^2\\) (m²/s²)",
"Atoms N, row {#}":
  "Átomos N, fila {#}",
"Area A (nm²), row {#}":
  "Área A (nm²), fila {#}",
"{#}/A ({#}/nm²), row {#}":
  "{#}/A ({#}/nm²), fila {#}",
"Pressure P (mN/m), row {#}":
  "Presión P (mN/m), fila {#}",
"NkT/A (mN/m), row {#}":
  "NkT/A (mN/m), fila {#}",
"rms speed (m/s), row {#}":
  "Rapidez rms (m/s), fila {#}",
"v_rms^{#} (m²/s²), row {#}":
  "v_rms^{#} (m²/s²), fila {#}",
"v_rms² (m²/s²)":
  "v_rms² (m²/s²)",
"Fit \\(P\\) against \\(T\\) for the first run. From the slope find Boltzmann’s constant, \\(k = \\text{slope}\\cdot A/N\\), and compare it with \\(1.381\\times10^{-23}\\) J/K.":
  "Ajusta \\(P\\) en función de \\(T\\) para la primera corrida. A partir de la pendiente encuentra la constante de Boltzmann, \\(k = \\text{slope}\\cdot A/N\\), y compárala con \\(1.381\\times10^{-23}\\) J/K.",
"Fit \\(P\\) against \\(N\\) for the second run and \\(P\\) against \\(1/A\\) for the third. Are the lines straight and through the origin?":
  "Ajusta \\(P\\) en función de \\(N\\) para la segunda corrida y \\(P\\) en función de \\(1/A\\) para la tercera. ¿Son las rectas rectas y pasan por el origen?",
"For the second run (pressure and number), compare each measured pressure with \\(NkT/A\\). When is the difference largest, and why?":
  "Para la segunda corrida (presión y número), compara cada presión medida con \\(NkT/A\\). ¿Cuándo es mayor la diferencia, y por qué?",
"Plot the rms speed squared against \\(T\\). From the slope find the mass of an argon atom and compare it with \\(6.63\\times10^{-26}\\) kg.":
  "Grafica el cuadrado de la rapidez rms en función de \\(T\\). A partir de la pendiente encuentra la masa de un átomo de argón y compárala con \\(6.63\\times10^{-26}\\) kg.",
"Why do the atoms’ speeds spread out even when they all start with the same speed?":
  "¿Por qué las rapideces de los átomos se dispersan aun cuando todos empiezan con la misma rapidez?",
"Near absolute zero the atoms are slow but still moving. Do they still push on the walls?":
  "Cerca del cero absoluto los átomos son lentos pero siguen moviéndose. ¿Siguen empujando las paredes?",
"Why does pushing the piston in quickly heat the gas?":
  "¿Por qué empujar el pistón rápidamente calienta el gas?",
"Your first run has two temperatures four times apart, {#} K and {#} K, like {#} K and {#} K in Before the lab {#}. By what factor did the rms speed change between them, and was that your answer? Explain the factor from what the temperature of this gas measures.":
  "Tu primera corrida tiene dos temperaturas con una razón de cuatro, {#} K y {#} K, como {#} K y {#} K en Antes del laboratorio {#}. ¿Por qué factor cambió la rapidez rms entre ellas, y fue esa tu respuesta? Explica el factor a partir de lo que mide la temperatura de este gas.",
"For courses that treat measurement uncertainty. This section is not counted in the {#} minutes; do it when your instructor assigns it.":
  "Para cursos que tratan la incertidumbre de medición. Esta sección no cuenta dentro de los {#} minutos; hazla cuando tu profesor la asigne.",
"The pressure is an average over about a second, so it scatters from reading to reading, more for few atoms. Record five readings at one setting a few seconds apart, find their mean and standard deviation, and use that as the uncertainty of a single pressure.":
  "La presión es un promedio de cerca de un segundo, así que se dispersa de una lectura a otra, más con pocos átomos. Registra cinco lecturas con un mismo ajuste separadas unos segundos, encuentra su media y su desviación estándar, y usa eso como la incertidumbre de una sola presión.",
"Report \\(k\\) and the mass of the atom with the standard errors of their fits, and say whether each intercept is zero within its standard error and whether each result agrees with the accepted value within its standard error.":
  "Informa \\(k\\) y la masa del átomo con los errores estándar de sus ajustes, y di si cada ordenada al origen es cero dentro de su error estándar y si cada resultado coincide con el valor aceptado dentro de su error estándar.",
"For courses that use calculus. This section is not counted in the {#} minutes; do it when your instructor assigns it.":
  "Para cursos que usan cálculo. Esta sección no cuenta dentro de los {#} minutos; hazla cuando tu profesor la asigne.",
"In two dimensions the fraction of atoms with speeds between \\(v\\) and \\(v + dv\\) is \\(f(v)\\,dv\\), with \\(f(v) = \\frac{mv}{kT}\\,e^{-mv^2/2kT}\\), the curve under the box. Substitute \\(u = mv^2/2kT\\) to show that \\(\\int_0^\\infty f(v)\\,dv = 1\\), and then integrate by parts to show that \\(\\langle v^2\\rangle = \\int_0^\\infty v^2 f(v)\\,dv = 2kT/m\\). Compare \\(\\sqrt{2kT/m}\\) with the rms speed you recorded at {#} K and at {#} K (\\(m = 6.6335\\times10^{-26}\\) kg).":
  "En dos dimensiones, la fracción de átomos con rapideces entre \\(v\\) y \\(v + dv\\) es \\(f(v)\\,dv\\), con \\(f(v) = \\frac{mv}{kT}\\,e^{-mv^2/2kT}\\), la curva bajo la caja. Sustituye \\(u = mv^2/2kT\\) para demostrar que \\(\\int_0^\\infty f(v)\\,dv = 1\\), y luego integra por partes para demostrar que \\(\\langle v^2\\rangle = \\int_0^\\infty v^2 f(v)\\,dv = 2kT/m\\). Compara \\(\\sqrt{2kT/m}\\) con la rapidez rms que registraste a {#} K y a {#} K (\\(m = 6.6335\\times10^{-26}\\) kg).",
"Squeezing the gas at constant temperature takes work \\(W_\\mathrm{on} = -\\int P\\,dA\\). For an ideal gas, integrate \\(P = NkT/A\\) to find the work to take {#} atoms at {#} K from {#} nm² to {#} nm². Then work out the same integral from your pressure and area run: add up trapezoids, each the mean of two neighboring pressures times the change in area between them, over all six readings. Give both in joules ({#} mN/m times {#} nm² is \\(10^{-21}\\) J). Which is larger, by how much, and why? To see how much of the gap comes from the trapezoids themselves, repeat the sum with the \\(NkT/A\\) column.":
  "Comprimir el gas a temperatura constante requiere un trabajo \\(W_\\mathrm{on} = -\\int P\\,dA\\). Para un gas ideal, integra \\(P = NkT/A\\) para hallar el trabajo de llevar {#} átomos a {#} K de {#} nm² a {#} nm². Luego calcula la misma integral con tu corrida de presión y área: suma trapecios, cada uno el promedio de dos presiones vecinas por el cambio de área entre ellas, sobre las seis lecturas. Da ambos en joules ({#} mN/m por {#} nm² es \\(10^{-21}\\) J). ¿Cuál es mayor, por cuánto y por qué? Para ver cuánto de la diferencia proviene de los propios trapecios, repite la suma con la columna de \\(NkT/A\\).",
"Prelab answers, the table copies with their graphs and fits, your values of \\(k\\) and the atom’s mass with comparisons, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de las tablas con sus gráficas y ajustes, tus valores de \\(k\\) y de la masa del átomo con comparaciones, y las respuestas a las preguntas (y de Incertidumbre y Con cálculo, si se asignan). Identifica los datos simulados.",
"Area of the box":
  "Área de la caja",
"Number of atoms":
  "Número de átomos",
"Pressure (two dimensional: force per length of wall)":
  "Presión (bidimensional: fuerza por longitud de pared)",
"Volume (in three dimensions)":
  "Volumen (en tres dimensiones)",
"Mass of an atom":
  "Masa de un átomo",
"Speed of an atom":
  "Rapidez de un átomo",
"rms speed of the atoms":
  "Rapidez rms de los átomos",
"Gas in a Box":
  "Gas en una caja",
"Prelab answers, the table copies with their graphs and fits, your values of \\(k\\) and the atom’s mass with uncertainties and comparisons, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de la tabla con sus gráficas y ajustes, tus valores de \\(k\\) y de la masa del átomo con incertidumbres y comparaciones, y las respuestas a las preguntas. Identifica los datos simulados.",
"Predict the rms speed of argon atoms at {#} K in two dimensions. How would it change at {#} K?":
  "Predice la rapidez rms de átomos de argón a {#} K en dos dimensiones. ¿Cómo cambiaría a {#} K?",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"<strong>Pressure and temperature.</strong> Pick Relax to equilibrium and wait until the histogram matches the curve. With {#} atoms and the box {#} nm wide, record a reading at about six temperatures from {#} K to {#} K, waiting a few seconds at each.":
  "<strong>Presión y temperatura.</strong> Elige Relajación al equilibrio y espera a que el histograma coincida con la curva. Con {#} átomos y la caja de {#} nm de ancho, registra una lectura en unas seis temperaturas de {#} K a {#} K, esperando unos segundos en cada una.",
"<strong>Pressure and number.</strong> Send the readings to the worksheet and clear them. At {#} K and {#} nm wide, record a reading for about six numbers of atoms from {#} to {#}.":
  "<strong>Presión y número.</strong> Envía las lecturas a la hoja de trabajo y bórralas. A {#} K y {#} nm de ancho, registra una lectura para unos seis números de átomos de {#} a {#}.",
"<strong>Pressure and area.</strong> Send the readings to the worksheet and clear them. With {#} atoms, set the temperature to {#} K and record a reading for about six box widths from {#} nm to {#} nm, resetting the temperature to {#} K after each change of width. Send the readings to the worksheet.":
  "<strong>Presión y área.</strong> Envía las lecturas a la hoja de trabajo y bórralas. Con {#} átomos, fija la temperatura en {#} K y registra una lectura para unos seis anchos de la caja de {#} nm a {#} nm, regresando la temperatura a {#} K después de cada cambio de ancho. Envía las lecturas a la hoja de trabajo.",
"Compare each measured pressure with \\(NkT/A\\). When is the difference largest, and why?":
  "Compara cada presión medida con \\(NkT/A\\). ¿Cuándo es mayor la diferencia, y por qué?",
"Where does the pressure on the walls come from?":
  "¿De dónde viene la presión sobre las paredes?"
});
