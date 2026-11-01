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
"Predict the rms speed of argon atoms at {#} K in two dimensions. How would it change at {#} K?":
  "Predice la rapidez rms de átomos de argón a {#} K en dos dimensiones. ¿Cómo cambiaría a {#} K?",
"If you halve the box’s area at a fixed temperature, what happens to the pressure?":
  "Si reduces a la mitad el área de la caja a temperatura fija, ¿qué le pasa a la presión?",
"Why should the pressure double if the number of atoms doubles at fixed temperature and area?":
  "¿Por qué debería duplicarse la presión si el número de átomos se duplica con temperatura y área fijas?",
"<strong>Pressure and temperature.</strong> Pick Relax to equilibrium and wait until the histogram matches the curve. With {#} atoms and the box {#} nm wide, record a reading at about six temperatures from {#} K to {#} K, waiting a few seconds at each.":
  "<strong>Presión y temperatura.</strong> Elige Relajación al equilibrio y espera a que el histograma coincida con la curva. Con {#} átomos y la caja de {#} nm de ancho, registra una lectura en unas seis temperaturas de {#} K a {#} K, esperando unos segundos en cada una.",
"<strong>Pressure and number.</strong> Send the readings to the worksheet and clear them. At {#} K and {#} nm wide, record a reading for about six numbers of atoms from {#} to {#}.":
  "<strong>Presión y número.</strong> Envía las lecturas a la hoja de trabajo y bórralas. A {#} K y {#} nm de ancho, registra una lectura para unos seis números de átomos de {#} a {#}.",
"<strong>Pressure and area.</strong> Send the readings to the worksheet and clear them. With {#} atoms, set the temperature to {#} K and record a reading for about six box widths from {#} nm to {#} nm, resetting the temperature to {#} K after each change of width. Send the readings to the worksheet.":
  "<strong>Presión y área.</strong> Envía las lecturas a la hoja de trabajo y bórralas. Con {#} átomos, fija la temperatura en {#} K y registra una lectura para unos seis anchos de la caja de {#} nm a {#} nm, regresando la temperatura a {#} K después de cada cambio de ancho. Envía las lecturas a la hoja de trabajo.",
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
"Compare each measured pressure with \\(NkT/A\\). When is the difference largest, and why?":
  "Compara cada presión medida con \\(NkT/A\\). ¿Cuándo es mayor la diferencia, y por qué?",
"Plot the rms speed squared against \\(T\\). From the slope find the mass of an argon atom and compare it with \\(6.63\\times10^{-26}\\) kg.":
  "Grafica el cuadrado de la rapidez rms en función de \\(T\\). A partir de la pendiente encuentra la masa de un átomo de argón y compárala con \\(6.63\\times10^{-26}\\) kg.",
"The pressure is an average over about a second, so it scatters from reading to reading, more for few atoms. Record five readings at one setting a few seconds apart, find their mean and standard deviation, and use that as the uncertainty of a single pressure.":
  "La presión es un promedio de cerca de un segundo, así que se dispersa de una lectura a otra, más con pocos átomos. Registra cinco lecturas con un mismo ajuste separadas unos segundos, encuentra su media y su desviación estándar, y usa eso como la incertidumbre de una sola presión.",
"Where does the pressure on the walls come from?":
  "¿De dónde viene la presión sobre las paredes?",
"Why do the atoms’ speeds spread out even when they all start with the same speed?":
  "¿Por qué las rapideces de los átomos se dispersan aun cuando todos empiezan con la misma rapidez?",
"Near absolute zero the atoms are slow but still moving. Do they still push on the walls?":
  "Cerca del cero absoluto los átomos son lentos pero siguen moviéndose. ¿Siguen empujando las paredes?",
"Why does pushing the piston in quickly heat the gas?":
  "¿Por qué empujar el pistón rápidamente calienta el gas?",
"Prelab answers, the table copies with their graphs and fits, your values of \\(k\\) and the atom’s mass with uncertainties and comparisons, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de la tabla con sus gráficas y ajustes, tus valores de \\(k\\) y de la masa del átomo con incertidumbres y comparaciones, y las respuestas a las preguntas. Identifica los datos simulados.",
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
  "Gas en una caja"
});
