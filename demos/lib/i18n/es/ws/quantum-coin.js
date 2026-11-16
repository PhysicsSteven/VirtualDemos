/* ws/quantum-coin in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/quantum-coin', {
"Angle (°)":
  "Ángulo (°)",
"Phase φ (°)":
  "Fase φ (°)",
"Measured N":
  "N medidos",
"Heads or up":
  "Águila o arriba",
"Fraction up":
  "Fracción arriba",
"cos²(angle/{#})":
  "cos²(ángulo/{#})",
"Magnets":
  "Imanes",
"Atoms from the oven N":
  "Átomos del horno N",
"Up at the end":
  "Arriba al final",
"Down at the end":
  "Abajo al final",
"Blocked":
  "Bloqueados",
"Predicted fractions":
  "Fracciones predichas",
"Quantum Coin Toss: Superposition and Measurement | VirtualDemos":
  "Volado cuántico: superposición y medición | VirtualDemos",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"Quantum Coin Toss: Superposition and Measurement":
  "Volado cuántico: superposición y medición",
"<strong>Setups in the demo:</strong> Fair coins; Three to one; Same odds, other phase; Spin along x, measured along z; Magnet tilted {#}°; Measure the same atom again; z then z; z then x; z, x, then z again.":
  "<strong>Configuraciones en la demo:</strong> Monedas justas; Tres a uno; Mismas probabilidades, otra fase; Espín a lo largo de x, medido a lo largo de z; Imán inclinado {#}°; Medir otra vez el mismo átomo; z y luego z; z y luego x; z, x y luego z otra vez.",
"Coins: an ordinary coin, whose face is decided by the toss, beside a quantum coin in the state \\(a\\lvert H\\rangle + b\\lvert T\\rangle\\) with \\(a = \\cos(\\theta/2)\\) and \\(b = e^{i\\varphi}\\sin(\\theta/2)\\). Each press tosses and measures both.":
  "Monedas: una moneda ordinaria, cuya cara se decide en el volado, junto a una moneda cuántica en el estado \\(a\\lvert H\\rangle + b\\lvert T\\rangle\\) con \\(a = \\cos(\\theta/2)\\) y \\(b = e^{i\\varphi}\\sin(\\theta/2)\\). Cada pulsación lanza y mide ambas.",
"Spin ½: the spin state of an atom is an arrow on the Bloch sphere, set by its tilt θ from up and its turn φ about z. A Stern–Gerlach magnet measures the spin along its axis (the dashed line) and sends the atom up or down. With fresh atoms on, each measurement starts from the prepared state; with it off, the same atom is measured again and again.":
  "Espín ½: el estado de espín de un átomo es una flecha en la esfera de Bloch, fijada por su inclinación θ respecto a arriba y su giro φ alrededor de z. Un imán de Stern–Gerlach mide el espín a lo largo de su eje (la línea discontinua) y manda el átomo arriba o abajo. Con átomos nuevos activado, cada medición parte del estado preparado; desactivado, se mide el mismo átomo una y otra vez.",
"Magnets in a row: atoms leave an oven unpolarized and pass up to three magnets, each tilted in the x–z plane. Each magnet except the last lets through its up beam, its down beam or both; a blocked beam is stopped. Every magnet counts as a measurement, and its two beams are never brought back together.":
  "Imanes en fila: los átomos salen de un horno sin polarizar y pasan hasta por tres imanes, cada uno inclinado en el plano x–z. Cada imán excepto el último deja pasar su haz de arriba, su haz de abajo o ambos; un haz bloqueado se detiene. Cada imán cuenta como una medición, y sus dos haces nunca se vuelven a juntar.",
"Every result is drawn at random by the computer with the quantum probabilities, so the counts are simulated data.":
  "Cada resultado lo sortea la computadora con las probabilidades cuánticas, así que los conteos son datos simulados.",
"Record reading stores the setup, the angle (θ for the coins, the angle γ between the spin and the magnet’s axis for Spin ½), the number measured and the number of heads or up results; the coins give two rows, one per coin. Readings from Magnets in a row store the counts at the end and the number blocked. Export to worksheet sends the coin and spin readings to Table {#} and the magnet readings to Table {#}; Clear starts a new series.":
  "Registrar lectura guarda la configuración, el ángulo (θ para las monedas, el ángulo γ entre el espín y el eje del imán para Espín ½), el número medido y el número de resultados águila o arriba; las monedas dan dos filas, una por moneda. Las lecturas de Imanes en fila guardan los conteos al final y el número de bloqueados. Exportar a la hoja envía las lecturas de monedas y de espín a la Tabla {#} y las de imanes a la Tabla {#}; Borrar empieza una serie nueva.",
"Test the rule that a measurement gives each result with probability equal to the square of its amplitude, find what the phase of a superposition changes, and see how a measurement changes the state it measures.":
  "Pon a prueba la regla de que una medición da cada resultado con probabilidad igual al cuadrado de su amplitud, encuentra qué cambia la fase de una superposición y ve cómo una medición cambia el estado que mide.",
"A two state system, such as heads and tails or spin up and spin down, has the state":
  "Un sistema de dos estados, como águila y sol o espín arriba y espín abajo, tiene el estado",
"\\[\\lvert\\psi\\rangle = \\cos\\frac{\\theta}{2}\\,\\lvert\\uparrow\\rangle + e^{i\\varphi}\\sin\\frac{\\theta}{2}\\,\\lvert\\downarrow\\rangle .\\]":
  "\\[\\lvert\\psi\\rangle = \\cos\\frac{\\theta}{2}\\,\\lvert\\uparrow\\rangle + e^{i\\varphi}\\sin\\frac{\\theta}{2}\\,\\lvert\\downarrow\\rangle .\\]",
"Measured along z, it gives up with probability \\(\\cos^2(\\theta/2)\\) and down with probability \\(\\sin^2(\\theta/2)\\); the phase φ does not change these. The state can be drawn as a unit arrow on the Bloch sphere, tilted θ from up and turned φ about z. A Stern–Gerlach magnet whose axis makes the angle γ with the arrow sends the atom up with probability":
  "Medido a lo largo de z, da arriba con probabilidad \\(\\cos^2(\\theta/2)\\) y abajo con probabilidad \\(\\sin^2(\\theta/2)\\); la fase φ no cambia esto. El estado se puede dibujar como una flecha unitaria en la esfera de Bloch, inclinada θ respecto a arriba y girada φ alrededor de z. Un imán de Stern–Gerlach cuyo eje forma el ángulo γ con la flecha manda el átomo arriba con probabilidad",
"\\[P_{\\text{up}} = \\cos^2\\frac{\\gamma}{2},\\]":
  "\\[P_{\\text{up}} = \\cos^2\\frac{\\gamma}{2},\\]",
"and afterwards the atom’s arrow points along the axis (up) or against it (down). An unpolarized beam goes up half the time along any axis.":
  "y después la flecha del átomo apunta a lo largo del eje (arriba) o en contra de él (abajo). Un haz sin polarizar va arriba la mitad de las veces a lo largo de cualquier eje.",
"For N measurements, the fraction that go up scatters about \\(P_{\\text{up}}\\) with a standard deviation of \\(\\sqrt{P_{\\text{up}}(1 - P_{\\text{up}})/N}\\).":
  "Para N mediciones, la fracción que va arriba se dispersa alrededor de \\(P_{\\text{up}}\\) con una desviación estándar de \\(\\sqrt{P_{\\text{up}}(1 - P_{\\text{up}})/N}\\).",
"Find P(heads) for the quantum coin at θ = {#}°, {#}°, {#}°, {#}° and {#}°.":
  "Encuentra P(águila) para la moneda cuántica con θ = {#}°, {#}°, {#}°, {#}° y {#}°.",
"What θ gives P(heads) = {#}?":
  "¿Qué θ da P(águila) = {#}?",
"A spin points along +x (θ = {#}°, φ = {#}°). What fraction goes up along z, along x, and along −x?":
  "Un espín apunta a lo largo de +x (θ = {#}°, φ = {#}°). ¿Qué fracción va arriba a lo largo de z, a lo largo de x y a lo largo de −x?",
"For {#} measurements with P = {#}, how far from {#} do you expect the measured fraction to be, typically?":
  "Para {#} mediciones con P = {#}, ¿qué tan lejos de {#} esperas que esté normalmente la fracción medida?",
"Atoms pass a z magnet that keeps only the up beam, then an x magnet that keeps only the up beam, then a z magnet. What fraction of the atoms from the oven reach each counter at the end, and what fraction are blocked?":
  "Los átomos pasan por un imán z que conserva solo el haz de arriba, luego por un imán x que conserva solo el haz de arriba, y luego por un imán z. ¿Qué fracción de los átomos del horno llega a cada contador al final, y qué fracción queda bloqueada?",
"<strong>Coins.</strong> Measure {#} of each coin, record a reading, and clear the counts, for the quantum coin at θ = {#}°, {#}°, {#}°, {#}°, {#}°, {#}° and {#}° (leave φ at {#}° and the ordinary coin fair). Then repeat θ = {#}° with φ = {#}° and with φ = {#}°. Export the readings, then Clear.":
  "<strong>Monedas.</strong> Mide {#} de cada moneda, registra una lectura y borra los conteos, para la moneda cuántica con θ = {#}°, {#}°, {#}°, {#}°, {#}°, {#}° y {#}° (deja φ en {#}° y la moneda ordinaria justa). Luego repite θ = {#}° con φ = {#}° y con φ = {#}°. Exporta las lecturas y luego borra.",
"<strong>Spin along a tilted axis.</strong> With fresh atoms, the spin up along z (θ = {#}°) and the magnet turned {#}°, measure {#} atoms and record a reading for magnet tilts of {#}°, {#}°, {#}°, {#}°, {#}°, {#}° and {#}°. Export the readings, then Clear.":
  "<strong>Espín a lo largo de un eje inclinado.</strong> Con átomos nuevos, el espín arriba a lo largo de z (θ = {#}°) y el imán girado {#}°, mide {#} átomos y registra una lectura para inclinaciones del imán de {#}°, {#}°, {#}°, {#}°, {#}°, {#}° y {#}°. Exporta las lecturas y luego borra.",
"<strong>What the phase does.</strong> With fresh atoms, the spin at θ = {#}° and the magnet along x (tilt {#}°, turn {#}°), measure {#} atoms and record a reading for φ = {#}°, {#}°, {#}° and {#}°. Export the readings, then Clear.":
  "<strong>Lo que hace la fase.</strong> Con átomos nuevos, el espín en θ = {#}° y el imán a lo largo de x (inclinación {#}°, giro {#}°), mide {#} átomos y registra una lectura para φ = {#}°, {#}°, {#}° y {#}°. Exporta las lecturas y luego borra.",
"<strong>The same atom again.</strong> Turn fresh atoms off. With the spin along +x and the magnet along z, measure one atom at a time ten times and note each result. Then tilt the magnet to {#}° and measure ten more. Write down the twenty results.":
  "<strong>El mismo átomo otra vez.</strong> Desactiva átomos nuevos. Con el espín a lo largo de +x y el imán a lo largo de z, mide un átomo a la vez diez veces y anota cada resultado. Luego inclina el imán a {#}° y mide diez más. Escribe los veinte resultados.",
"<strong>Magnets in a row.</strong> Send {#} atoms and record a reading for each of: z then z (keep up); z then x (keep up); z (keep up), x (keep up), then z; z (keep up), x (both), then z; z (keep up) then a magnet at {#}°. Export the readings; they go to Table {#}.":
  "<strong>Imanes en fila.</strong> Envía {#} átomos y registra una lectura para cada uno de: z y luego z (conservar arriba); z y luego x (conservar arriba); z (conservar arriba), x (conservar arriba) y luego z; z (conservar arriba), x (ambos) y luego z; z (conservar arriba) y luego un imán a {#}°. Exporta las lecturas; van a la Tabla {#}.",
"Table {#}. Coins and single magnets.":
  "Tabla {#}. Monedas e imanes individuales.",
"<span>C</span>Angle (°)":
  "<span>C</span>Ángulo (°)",
"<span>D</span>Phase φ (°)":
  "<span>D</span>Fase φ (°)",
"<span>E</span>Measured N":
  "<span>E</span>N medidos",
"<span>F</span>Heads or up":
  "<span>F</span>Águila o arriba",
"<span>G</span>Fraction up":
  "<span>G</span>Fracción arriba",
"<span>H</span>cos²(angle/{#})":
  "<span>H</span>cos²(ángulo/{#})",
"Angle (°), row {#}":
  "Ángulo (°), fila {#}",
"Phase φ (°), row {#}":
  "Fase φ (°), fila {#}",
"Measured N, row {#}":
  "N medidos, fila {#}",
"Heads or up, row {#}":
  "Águila o arriba, fila {#}",
"Fraction up, row {#}":
  "Fracción arriba, fila {#}",
"cos²(angle/{#}), row {#}":
  "cos²(ángulo/{#}), fila {#}",
"Table {#}. Magnets in a row.":
  "Tabla {#}. Imanes en fila.",
"<span>B</span>Magnets":
  "<span>B</span>Imanes",
"<span>C</span>Atoms from the oven N":
  "<span>C</span>Átomos del horno N",
"<span>D</span>Up at the end":
  "<span>D</span>Arriba al final",
"<span>E</span>Down at the end":
  "<span>E</span>Abajo al final",
"<span>F</span>Blocked":
  "<span>F</span>Bloqueados",
"<span>G</span>Predicted fractions":
  "<span>G</span>Fracciones predichas",
"Magnets, row {#}":
  "Imanes, fila {#}",
"Atoms from the oven N, row {#}":
  "Átomos del horno N, fila {#}",
"Up at the end, row {#}":
  "Arriba al final, fila {#}",
"Down at the end, row {#}":
  "Abajo al final, fila {#}",
"Blocked, row {#}":
  "Bloqueados, fila {#}",
"Predicted fractions, row {#}":
  "Fracciones predichas, fila {#}",
"Fill in the fraction up and cos²(angle/{#}) for every reading of the coins and the tilted magnet. Plot the fraction up against cos²(angle/{#}). What slope and intercept do you expect, and what do you find?":
  "Llena la fracción arriba y cos²(ángulo/{#}) para cada lectura de las monedas y del imán inclinado. Grafica la fracción arriba en función de cos²(ángulo/{#}). ¿Qué pendiente y qué ordenada al origen esperas, y qué encuentras?",
"Compare the ordinary coin’s heads fraction with the quantum coin’s at θ = {#}°. Could the counts tell you which coin is quantum?":
  "Compara la fracción de águilas de la moneda ordinaria con la de la moneda cuántica con θ = {#}°. ¿Podrían los conteos decirte cuál moneda es la cuántica?",
"For the phase series, plot the fraction up along x against φ. What function of φ fits? Explain why the phase changed nothing in the coin readings.":
  "Para la serie de la fase, grafica la fracción arriba a lo largo de x en función de φ. ¿Qué función de φ se ajusta? Explica por qué la fase no cambió nada en las lecturas de las monedas.",
"Describe your twenty results for the same atom. What does the first measurement do to the state?":
  "Describe tus veinte resultados para el mismo átomo. ¿Qué le hace la primera medición al estado?",
"Predict the fractions for every row of Table {#} and compare with your counts. Explain the difference between keeping only the x up beam and keeping both x beams.":
  "Predice las fracciones para cada fila de la Tabla {#} y compáralas con tus conteos. Explica la diferencia entre conservar solo el haz x de arriba y conservar ambos haces x.",
"For each coin and tilted magnet reading, find \\(\\sqrt{P(1-P)/N}\\) with P = cos²(angle/{#}). How many of your fractions lie within one of these of the prediction, and how many within two? Compare with what you would expect.":
  "Para cada lectura de moneda y de imán inclinado, encuentra \\(\\sqrt{P(1-P)/N}\\) con P = cos²(ángulo/{#}). ¿Cuántas de tus fracciones quedan a menos de una de estas de la predicción, y cuántas a menos de dos? Compáralo con lo que esperarías.",
"A classical coin is heads or tails before you look. What result in this lab shows that the quantum coin at θ = {#}°, φ = {#}° was not secretly heads or tails?":
  "Una moneda clásica es águila o sol antes de que la mires. ¿Qué resultado de este laboratorio muestra que la moneda cuántica con θ = {#}°, φ = {#}° no era en secreto águila o sol?",
"Why does a spin measured along z and then along x carry no memory of the z result?":
  "¿Por qué un espín medido a lo largo de z y luego a lo largo de x no guarda memoria del resultado en z?",
"In the z, x, z row, putting in the x magnet lets some atoms reach the down counter that could not reach it before. How can adding a filter let more of something through?":
  "En la fila z, x, z, poner el imán x permite que algunos átomos lleguen al contador de abajo, al que antes no podían llegar. ¿Cómo puede agregar un filtro dejar pasar más de algo?",
"Why does an unpolarized beam split half and half along every axis, while a beam of atoms prepared along +x does not?":
  "¿Por qué un haz sin polarizar se divide mitad y mitad a lo largo de cualquier eje, mientras que un haz de átomos preparados a lo largo de +x no?",
"Prelab answers, the tables with their graphs, the twenty results for the same atom, the predicted and measured fractions for Table {#}, the uncertainty count, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las tablas con sus gráficas, los veinte resultados para el mismo átomo, las fracciones predichas y medidas para la Tabla {#}, el conteo de la incertidumbre, y las respuestas a las preguntas. Identifica los datos simulados.",
"Heads: the state":
  "Águila: el estado",
"Number of measurements":
  "Número de mediciones",
"Probability of up (or heads), cos²(angle/{#})":
  "Probabilidad de arriba (o águila), cos²(ángulo/{#})",
"Probability that a measurement gives up":
  "Probabilidad de que una medición dé arriba",
"Tails: the state":
  "Sol: el estado",
"Amplitude of heads, cos(θ/{#})":
  "Amplitud de águila, cos(θ/{#})",
"Amplitude of tails, e^(iφ) sin(θ/{#})":
  "Amplitud de sol, e^(iφ) sin(θ/{#})",
"Angle between the spin's direction and the measurement axis":
  "Ángulo entre la dirección del espín y el eje de medición",
"Imaginary unit, √(−{#})":
  "Unidad imaginaria, √(−{#})",
"Phase of the tails amplitude: the angle of the state around the Bloch sphere's axis":
  "Fase de la amplitud de sol: el ángulo del estado alrededor del eje de la esfera de Bloch",
"The spin state":
  "El estado de espín",
"Angle of the state from the up (heads) pole of the Bloch sphere":
  "Ángulo del estado respecto al polo de arriba (águila) de la esfera de Bloch",
"Quantum Coin Toss":
  "Volado cuántico",
"<span>D</span>Measured N":
  "<span>D</span>N medidos",
"<span>E</span>Heads or up":
  "<span>E</span>Águila o arriba",
"<span>F</span>Fraction up":
  "<span>F</span>Fracción arriba",
"<span>G</span>cos²(angle/{#})":
  "<span>G</span>cos²(ángulo/{#})"
});
