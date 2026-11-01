/* ws/lattice-energy in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/lattice-energy', {
"Salt":
  "Sal",
"Structure":
  "Estructura",
"Table U (kJ/mol)":
  "U de la tabla (kJ/mol)",
"U per ion pair (eV)":
  "U por par de iones (eV)",
"Shells added":
  "Capas sumadas",
"α NaCl, by shells":
  "α NaCl, por capas",
"α CsCl, by shells":
  "α CsCl, por capas",
"Cube half width m":
  "Semiancho del cubo m",
"α NaCl, by neutral cubes":
  "α NaCl, por cubos neutros",
"Lattice Energy of Ionic Crystals | VirtualDemos":
  "Energía de red de los cristales iónicos | VirtualDemos",
"Lattice Energy of Ionic Crystals":
  "Energía de red de los cristales iónicos",
"<strong>Setups in the demo:</strong> Rock salt; Cesium chloride (these two use the Crystal view, the subject of this worksheet); Levels become bands; Filling the bands (the Energy bands worksheet); Pure silicon; n type silicon (the Doping worksheet); Diode; LED colors (the pn junction worksheet).":
  "<strong>Configuraciones en la demo:</strong> Sal de roca; Cloruro de cesio (estas dos usan la vista Cristal, el tema de esta hoja de trabajo); Los niveles se vuelven bandas; Llenado de las bandas (la hoja de trabajo de Bandas de energía); Silicio puro; Silicio tipo n (la hoja de trabajo de Dopaje); Diodo; Colores de LED (la hoja de trabajo de la unión pn).",
"The Crystal view draws a salt crystal in 3D around one reference ion, ringed in gold. Drag to turn it, scroll or pinch to zoom, double click to reset the view.":
  "La vista Cristal dibuja un cristal de sal en 3D alrededor de un ion de referencia, rodeado de dorado. Arrastra para girarlo, usa la rueda o pellizca para acercar, doble clic para restablecer la vista.",
"Choose any of the {#} alkali halides in the book’s Table {#}. The meters show the nearest neighbor distance \\(r_0\\) (measured lattice constants at room temperature) and the Born exponent \\(n\\) of the salt.":
  "Elige cualquiera de los {#} halogenuros alcalinos de la Tabla {#} del libro. Los medidores muestran la distancia a los vecinos más cercanos \\(r_0\\) (constantes de red medidas a temperatura ambiente) y el exponente de Born \\(n\\) de la sal.",
"Add up the ions in one of two ways. <strong>Shells</strong> adds the ions one shell of equal distance at a time, nearest first, as in the book’s series. <strong>Neutral cubes</strong> adds every ion inside a cube of half width \\(m\\) ion spacings, counting an ion on a face of the cube as {#}/{#}, on an edge as {#}/{#} and on a corner as {#}/{#}, so the cube carries no net charge (Evjen’s method). Neutral cubes are offered for the NaCl structure only.":
  "Suma los iones de una de dos maneras. <strong>Capas</strong> suma los iones una capa de igual distancia a la vez, empezando por la más cercana, como en la serie del libro. <strong>Cubos neutros</strong> suma cada ion dentro de un cubo de semiancho \\(m\\) espaciamientos iónicos, contando un ion en una cara del cubo como {#}/{#}, en una arista como {#}/{#} y en un vértice como {#}/{#}, para que el cubo no tenga carga neta (método de Evjen). Los cubos neutros se ofrecen solo para la estructura del NaCl.",
"The graphs show the running total of the sum, with the exact Madelung constant as a dashed line, and the energy of one ion pair against the separation \\(r\\).":
  "Las gráficas muestran el total acumulado de la suma, con la constante de Madelung exacta como línea discontinua, y la energía de un par de iones en función de la separación \\(r\\).",
"Record reading stores the salt, its structure, \\(r_0\\), \\(n\\), the exact \\(\\alpha\\) for its structure and the measured lattice energy from Table {#}. Export to worksheet sends the readings to the first Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la sal, su estructura, \\(r_0\\), \\(n\\), el \\(\\alpha\\) exacto de su estructura y la energía de red medida de la Tabla {#}. Exportar a la hoja envía las lecturas a la primera tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Blind hides the calculated lattice energy, its difference from the table and the energy curve.":
  "A ciegas oculta la energía de red calculada, su diferencia con la tabla y la curva de energía.",
"Add up the electric potential energy of one ion in the field of all the others to find the Madelung constant, then test the ionic model of the lattice energy against measured values for twenty salts.":
  "Suma la energía potencial eléctrica de un ion en el campo de todos los demás para encontrar la constante de Madelung, y luego pon a prueba el modelo iónico de la energía de red con valores medidos para veinte sales.",
"In a crystal of NaCl each Na⁺ ion has {#} Cl⁻ neighbors at the nearest neighbor distance \\(r_0\\), {#} Na⁺ ions at \\(\\sqrt{2}\\,r_0\\), {#} Cl⁻ ions at \\(\\sqrt{3}\\,r_0\\), and so on. Its Coulomb energy is":
  "En un cristal de NaCl cada ion Na⁺ tiene {#} vecinos Cl⁻ a la distancia a los vecinos más cercanos \\(r_0\\), {#} iones Na⁺ a \\(\\sqrt{2}\\,r_0\\), {#} iones Cl⁻ a \\(\\sqrt{3}\\,r_0\\), y así sucesivamente. Su energía de Coulomb es",
"\\[U_\\text{coul} = -\\frac{ke^2}{r_0}\\left(6 - \\frac{12}{\\sqrt{2} } + \\frac{8}{\\sqrt{3} } - \\cdots\\right) = -\\alpha\\frac{ke^2}{r_0},\\]":
  "\\[U_\\text{coul} = -\\frac{ke^2}{r_0}\\left(6 - \\frac{12}{\\sqrt{2} } + \\frac{8}{\\sqrt{3} } - \\cdots\\right) = -\\alpha\\frac{ke^2}{r_0},\\]",
"where the number \\(\\alpha\\) is the Madelung constant of the structure: {#} for the NaCl structure and {#} for the CsCl structure, with \\(ke^2 = 1.440\\ \\text{eV·nm}\\). A short range repulsion \\(A/r^n\\) keeps the ions apart. Setting \\(dU/dr = 0\\) at \\(r_0\\) fixes \\(A\\), and the energy needed to pull one ion pair apart into free ions is":
  "donde el número \\(\\alpha\\) es la constante de Madelung de la estructura: {#} para la estructura del NaCl y {#} para la estructura del CsCl, con \\(ke^2 = 1.440\\ \\text{eV·nm}\\). Una repulsión de corto alcance \\(A/r^n\\) mantiene separados los iones. Poner \\(dU/dr = 0\\) en \\(r_0\\) fija \\(A\\), y la energía necesaria para separar un par de iones en iones libres es",
"\\[U = \\alpha\\frac{ke^2}{r_0}\\left(1 - \\frac{1}{n}\\right).\\]":
  "\\[U = \\alpha\\frac{ke^2}{r_0}\\left(1 - \\frac{1}{n}\\right).\\]",
"The Born exponent \\(n\\) depends on the ions’ inner electron shells; the demo uses the average of the two ions’ values ({#} for a helium core, {#} neon, {#} argon, {#} krypton, {#} xenon), which gives \\(n = 8\\) for NaCl as in the book. One eV per ion pair is {#} kJ/mol.":
  "El exponente de Born \\(n\\) depende de las capas electrónicas internas de los iones; la demo usa el promedio de los valores de los dos iones ({#} para un núcleo de helio, {#} neón, {#} argón, {#} kriptón, {#} xenón), lo que da \\(n = 8\\) para el NaCl como en el libro. Un eV por par de iones es {#} kJ/mol.",
"Add the first three terms of the series for NaCl, \\(6 - 12/\\sqrt{2} + 8/\\sqrt{3}\\). How close is it to {#}? The next shell has {#} Na⁺ ions at \\(2r_0\\). Add it. What do you notice?":
  "Suma los primeros tres términos de la serie para el NaCl, \\(6 - 12/\\sqrt{2} + 8/\\sqrt{3}\\). ¿Qué tan cerca está de {#}? La siguiente capa tiene {#} iones Na⁺ a \\(2r_0\\). Súmala. ¿Qué notas?",
"With \\(\\alpha = 1.7476\\), \\(r_0 = 0.282\\) nm and \\(n = 8\\), find the lattice energy of NaCl in eV per ion pair and in kJ/mol.":
  "Con \\(\\alpha = 1.7476\\), \\(r_0 = 0.282\\) nm y \\(n = 8\\), encuentra la energía de red del NaCl en eV por par de iones y en kJ/mol.",
"Which salt in Table {#} should have the largest lattice energy, and which the smallest? Explain using the formula.":
  "¿Qué sal de la Tabla {#} debería tener la mayor energía de red, y cuál la menor? Explícalo usando la fórmula.",
"If the model is right, what should you plot the measured lattice energies against to get a straight line through the origin, and what is its slope?":
  "Si el modelo es correcto, ¿contra qué deberías graficar las energías de red medidas para obtener una recta que pase por el origen, y cuál es su pendiente?",
"<strong>The Madelung sum.</strong> Pick Rock salt. Using Shells, record the running total \\(\\alpha\\) after {#} to {#} shells in the second table. Switch to Neutral cubes and record \\(\\alpha\\) for cube half widths {#} to {#}. Then pick Cesium chloride and record its running total after {#} to {#} shells.":
  "<strong>La suma de Madelung.</strong> Elige Sal de roca. Usando Capas, registra en la segunda tabla el total acumulado \\(\\alpha\\) después de {#} a {#} capas. Cambia a Cubos neutros y registra \\(\\alpha\\) para semianchos del cubo de {#} a {#}. Luego elige Cloruro de cesio y registra su total acumulado después de {#} a {#} capas.",
"<strong>Lattice energies.</strong> Turn Blind on first: calculate each lattice energy yourself before you compare it with the model’s. Record a reading for each of the seventeen salts with the NaCl structure and export them to the first table. Clear the readings, then record the three salts with the CsCl structure and export them; they go into a second copy of the table. When your own energies are in the table, turn Blind off and compare them with the model’s calculated values.":
  "<strong>Energías de red.</strong> Activa primero A ciegas: calcula tú mismo cada energía de red antes de compararla con la del modelo. Registra una lectura para cada una de las diecisiete sales con la estructura del NaCl y expórtalas a la primera tabla. Borra las lecturas, luego registra las tres sales con la estructura del CsCl y expórtalas; van a una segunda copia de la tabla. Cuando tus propias energías estén en la tabla, desactiva A ciegas y compáralas con los valores calculados por el modelo.",
"<span>B</span>Salt":
  "<span>B</span>Sal",
"<span>C</span>Structure":
  "<span>C</span>Estructura",
"<span>F</span>\\(\\alpha\\)":
  "<span>F</span>\\(\\alpha\\)",
"<span>G</span>Table \\(U\\) (kJ/mol)":
  "<span>G</span>\\(U\\) de la tabla (kJ/mol)",
"<span>H</span>\\(U\\) per ion pair (eV)":
  "<span>H</span>\\(U\\) por par de iones (eV)",
"Salt, row {#}":
  "Sal, fila {#}",
"Structure, row {#}":
  "Estructura, fila {#}",
"r_0 (nm), row {#}":
  "r_0 (nm), fila {#}",
"n, row {#}":
  "n, fila {#}",
"α, row {#}":
  "α, fila {#}",
"Table U (kJ/mol), row {#}":
  "U de la tabla (kJ/mol), fila {#}",
"U per ion pair (eV), row {#}":
  "U por par de iones (eV), fila {#}",
"({#} - {#}/n)/r_0 ({#}/nm), row {#}":
  "({#} - {#}/n)/r_0 ({#}/nm), fila {#}",
"<strong>The Madelung sum.</strong> One row for each number of shells or cube size.":
  "<strong>La suma de Madelung.</strong> Una fila para cada número de capas o tamaño de cubo.",
"<span>A</span>Shells added":
  "<span>A</span>Capas sumadas",
"<span>B</span>\\(\\alpha\\) NaCl, by shells":
  "<span>B</span>\\(\\alpha\\) NaCl, por capas",
"<span>C</span>\\(\\alpha\\) CsCl, by shells":
  "<span>C</span>\\(\\alpha\\) CsCl, por capas",
"<span>D</span>Cube half width \\(m\\)":
  "<span>D</span>Semiancho del cubo \\(m\\)",
"<span>E</span>\\(\\alpha\\) NaCl, by neutral cubes":
  "<span>E</span>\\(\\alpha\\) NaCl, por cubos neutros",
"Shells added, row {#}":
  "Capas sumadas, fila {#}",
"α NaCl, by shells, row {#}":
  "α NaCl, por capas, fila {#}",
"α CsCl, by shells, row {#}":
  "α CsCl, por capas, fila {#}",
"Cube half width m, row {#}":
  "Semiancho del cubo m, fila {#}",
"α NaCl, by neutral cubes, row {#}":
  "α NaCl, por cubos neutros, fila {#}",
"Plot the running totals against the number of shells and against the cube size. Which way of adding the ions settles on a value, and how many cubes does it take to agree with {#} to three decimal places?":
  "Grafica los totales acumulados en función del número de capas y del tamaño del cubo. ¿Qué manera de sumar los iones se estabiliza en un valor, y cuántos cubos hacen falta para concordar con {#} a tres decimales?",
"Fill in the last two columns: each table lattice energy converted to eV per ion pair, and \\((1 - 1/n)/r_0\\). Plot \\(U\\) against \\((1 - 1/n)/r_0\\) for the seventeen salts with the NaCl structure and fit a straight line. From the slope, find \\(\\alpha\\), and compare it with {#}.":
  "Llena las dos últimas columnas: cada energía de red de la tabla convertida a eV por par de iones, y \\((1 - 1/n)/r_0\\). Grafica \\(U\\) en función de \\((1 - 1/n)/r_0\\) para las diecisiete sales con la estructura del NaCl y ajusta una recta. A partir de la pendiente, encuentra \\(\\alpha\\), y compáralo con {#}.",
"Calculate \\(U\\) from the model for NaCl, KCl and CsCl, and find the percentage difference from the table for each.":
  "Calcula \\(U\\) con el modelo para NaCl, KCl y CsCl, y encuentra la diferencia porcentual con la tabla para cada uno.",
"Do the three salts with the CsCl structure fall on the same line as the others? Should they?":
  "¿Caen las tres sales con la estructura del CsCl sobre la misma recta que las demás? ¿Deberían?",
"Use the standard error of the slope from Analysis {#} to give \\(\\alpha\\) with its uncertainty. Is the difference from {#} larger than that? The model leaves out the weak van der Waals attraction between the ions and their zero point vibration. Which way would each change the lattice energy, and so which way would each bias your value of \\(\\alpha\\)?":
  "Usa el error estándar de la pendiente del Análisis {#} para dar \\(\\alpha\\) con su incertidumbre. ¿Es la diferencia con {#} mayor que eso? El modelo omite la débil atracción de van der Waals entre los iones y su vibración de punto cero. ¿En qué sentido cambiaría cada una la energía de red, y por lo tanto en qué sentido sesgaría cada una tu valor de \\(\\alpha\\)?",
"Adding the ions shell by shell never settles, yet a crystal has a definite energy. Why do neutral cubes give a steady answer when shells do not?":
  "Sumar los iones capa por capa nunca se estabiliza, y sin embargo un cristal tiene una energía definida. ¿Por qué los cubos neutros dan una respuesta estable cuando las capas no?",
"LiF has a lattice energy of {#} kJ/mol and CsI only {#} kJ/mol. Explain the difference.":
  "El LiF tiene una energía de red de {#} kJ/mol y el CsI solo {#} kJ/mol. Explica la diferencia.",
"The repulsion changes the lattice energy only by the factor \\(1 - 1/n\\). By what percentage would the NaCl result change if \\(n\\) were {#} instead of {#}?":
  "La repulsión cambia la energía de red solo por el factor \\(1 - 1/n\\). ¿En qué porcentaje cambiaría el resultado del NaCl si \\(n\\) fuera {#} en lugar de {#}?",
"The book’s Example {#} finds \\(r_0\\) from the density of NaCl, {#} g/cm³, and its molar mass, {#} g/mol. Show that \\(r_0 = (M/2N_A\\rho)^{1/3}\\) gives about {#} nm, and explain the factor of {#}.":
  "El Ejemplo {#} del libro encuentra \\(r_0\\) a partir de la densidad del NaCl, {#} g/cm³, y de su masa molar, {#} g/mol. Muestra que \\(r_0 = (M/2N_A\\rho)^{1/3}\\) da cerca de {#} nm, y explica el factor de {#}.",
"Prelab answers, both tables with their graphs, the fitted slope and your value of \\(\\alpha\\) with its uncertainty, the model energies and their differences from the table, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ambas tablas con sus gráficas, la pendiente ajustada y tu valor de \\(\\alpha\\) con su incertidumbre, las energías del modelo y sus diferencias con la tabla, y las respuestas a las preguntas. Identifica los datos simulados.",
"Lattice energy of one ion pair":
  "Energía de red de un par de iones",
"{#} eV per pair = {#} kJ/mol":
  "{#} eV por par = {#} kJ/mol",
"Strength of the short range repulsion":
  "Intensidad de la repulsión de corto alcance",
"Molar mass":
  "Masa molar",
"Avogadro constant":
  "Constante de Avogadro",
"{#} × {#}²³ mol⁻¹, exact":
  "{#} × {#}²³ mol⁻¹, exacta",
"Lattice energy (per ion pair from the formula, per mole in the table)":
  "Energía de red (por par de iones en la fórmula, por mol en la tabla)",
"Coulomb energy of one ion pair":
  "Energía de Coulomb de un par de iones",
"Madelung constant":
  "Constante de Madelung",
"{#} (NaCl structure), {#} (CsCl structure)":
  "{#} (estructura del NaCl), {#} (estructura del CsCl)",
"Coulomb constant, {#}/({#}πε₀)":
  "Constante de Coulomb, {#}/({#}πε₀)",
"ke² = {#} eV·nm":
  "ke² = {#} eV·nm",
"Half width of the cube":
  "Semiancho del cubo",
"Born exponent of the repulsion":
  "Exponente de Born de la repulsión",
"Separation of neighboring ions":
  "Separación entre iones vecinos",
"Nearest neighbor distance":
  "Distancia a los vecinos más cercanos",
"Crystals, Bands and Semiconductors (Crystal)":
  "Cristales, bandas y semiconductores (Cristal)"
});
