/* ws/energy-bands in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/energy-bands', {
"Atoms N":
  "Átomos N",
"Spacing d (nm)":
  "Separación d (nm)",
"Lowest s level (eV)":
  "Nivel s más bajo (eV)",
"Highest s level (eV)":
  "Nivel s más alto (eV)",
"Lowest p level (eV)":
  "Nivel p más bajo (eV)",
"Width w of the s levels (eV)":
  "Ancho w de los niveles s (eV)",
"Gap (eV)":
  "Brecha (eV)",
"ln(w / {#} eV)":
  "ln(w / {#} eV)",
"Energy Bands in a Chain of Atoms | VirtualDemos":
  "Bandas de energía en una cadena de átomos | VirtualDemos",
"Energy Bands in a Chain of Atoms":
  "Bandas de energía en una cadena de átomos",
"<strong>Setups in the demo:</strong> Levels become bands; Filling the bands; Periodic potential; Deep wells, narrow bands (these four use the Bands view, the subject of this worksheet); Rock salt; Cesium chloride (the Lattice energy worksheet); Pure silicon; n type silicon (the Doping worksheet); Diode; LED colors (the pn junction worksheet).":
  "<strong>Configuraciones en la demo:</strong> Los niveles se vuelven bandas; Llenado de las bandas; Potencial periódico; Pozos profundos, bandas angostas (estas cuatro usan la vista Bandas, el tema de esta hoja de trabajo); Sal de roca; Cloruro de cesio (la hoja de trabajo de Energía de red); Silicio puro; Silicio tipo n (la hoja de trabajo de Dopaje); Diodo; Colores de LED (la hoja de trabajo de la unión pn).",
"The Bands view puts N model atoms, from {#} to {#}, in a straight chain with spacing d from {#} nm to {#} nm. Each model atom has one s level at −{#} eV and three p levels at −{#} eV. It is a made up atom, chosen to show the physics clearly, not a real element.":
  "La vista Bandas pone N átomos modelo, de {#} a {#}, en una cadena recta con separación d de {#} nm a {#} nm. Cada átomo modelo tiene un nivel s en −{#} eV y tres niveles p en −{#} eV. Es un átomo inventado, elegido para mostrar la física con claridad, no un elemento real.",
"Each orbital overlaps the same orbital on the neighboring atoms. The overlap energy falls off exponentially as the atoms move apart, and the p orbital along the chain (pσ) overlaps more than the two across it (pπ).":
  "Cada orbital se traslapa con el mismo orbital de los átomos vecinos. La energía de traslape disminuye exponencialmente al separarse los átomos, y el orbital p a lo largo de la cadena (pσ) se traslapa más que los dos perpendiculares a ella (pπ).",
"The left diagram shows every level against the spacing, with the shaded bands that a very long chain would have. The right diagram shows the levels at the chosen spacing, filled with electrons from the bottom, two to a level (four to a pπ level, which counts both pπ orbitals).":
  "El diagrama de la izquierda muestra cada nivel en función de la separación, con las bandas sombreadas que tendría una cadena muy larga. El diagrama de la derecha muestra los niveles a la separación elegida, llenos de electrones desde abajo, dos por nivel (cuatro por nivel pπ, que cuenta ambos orbitales pπ).",
"Choose {#} to {#} electrons per atom. The verdict under the levels says whether the highest band holding electrons is full, with a gap above it, or only partly full.":
  "Elige de {#} a {#} electrones por átomo. El veredicto bajo los niveles dice si la banda más alta que contiene electrones está llena, con una brecha encima, o solo parcialmente llena.",
"The graphs show how many orbitals lie in each {#} eV of energy, and the book’s band gaps (Table {#}) beside the model’s gap.":
  "Las gráficas muestran cuántos orbitales hay en cada {#} eV de energía, y las brechas de banda del libro (Tabla {#}) junto a la brecha del modelo.",
"The Bands view’s Model switch also offers a periodic potential (Kronig–Penney), the subject of the Energy Bands in a Periodic Potential worksheet.":
  "El interruptor Modelo de la vista Bandas ofrece también un potencial periódico (Kronig–Penney), el tema de la hoja Bandas de energía en un potencial periódico.",
"Record reading stores N, d, the electrons per atom and the lowest and highest level of the s and p bands. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda N, d, los electrones por átomo y los niveles más bajo y más alto de las bandas s y p. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Blind hides the verdict, the overlap energies and the model’s gap on the graph.":
  "A ciegas oculta el veredicto, las energías de traslape y la brecha del modelo en la gráfica.",
"Watch atomic energy levels split into bands as atoms are brought together, measure how the width of a band depends on the spacing, and use the filling of the bands to tell a metal from an insulator.":
  "Observa cómo los niveles de energía atómicos se dividen en bandas al acercar los átomos, mide cómo depende el ancho de una banda de la separación, y usa el llenado de las bandas para distinguir un metal de un aislante.",
"Two identical atoms far apart have the same energy levels. Brought close, their outer wave functions overlap and each level splits into two, one a little lower and one a little higher. With \\(N\\) atoms each level splits into \\(N\\) levels, and for the enormous \\(N\\) of a solid these merge into a band, with forbidden energy gaps between the bands (§{#}).":
  "Dos átomos idénticos muy separados tienen los mismos niveles de energía. Al acercarlos, sus funciones de onda externas se traslapan y cada nivel se divide en dos, uno un poco más bajo y otro un poco más alto. Con \\(N\\) átomos cada nivel se divide en \\(N\\) niveles, y para el enorme \\(N\\) de un sólido estos se funden en una banda, con brechas de energía prohibidas entre las bandas (§{#}).",
"In the demo’s chain each orbital overlaps only the same orbital on its two neighbors, with an overlap energy \\(t\\). The \\(N\\) levels from one atomic level \\(E_0\\) are then":
  "En la cadena de la demo cada orbital se traslapa solo con el mismo orbital de sus dos vecinos, con una energía de traslape \\(t\\). Los \\(N\\) niveles que vienen de un nivel atómico \\(E_0\\) son entonces",
"\\[E_j = E_0 - 2t\\cos\\frac{j\\pi}{N + 1}, \\qquad j = 1, 2, \\ldots, N,\\]":
  "\\[E_j = E_0 - 2t\\cos\\frac{j\\pi}{N + 1}, \\qquad j = 1, 2, \\ldots, N,\\]",
"so the band of a very long chain runs from \\(E_0 - 2t\\) to \\(E_0 + 2t\\), a width of \\(4t\\). The overlap falls off exponentially with spacing, \\(t \\propto e^{-d/\\lambda}\\), where \\(\\lambda\\) measures how far the orbital reaches.":
  "así que la banda de una cadena muy larga va de \\(E_0 - 2t\\) a \\(E_0 + 2t\\), un ancho de \\(4t\\). El traslape disminuye exponencialmente con la separación, \\(t \\propto e^{-d/\\lambda}\\), donde \\(\\lambda\\) mide qué tan lejos llega el orbital.",
"Each level holds two electrons, one of each spin. A band whose highest occupied level has empty levels just above it lets electrons speed up in an applied field: the solid is a conductor. A completely filled band with a gap above it cannot carry current: an insulator, or a semiconductor if the gap is small (§{#}, Fig. {#}).":
  "Cada nivel tiene dos electrones, uno de cada espín. Una banda cuyo nivel ocupado más alto tiene niveles vacíos justo encima permite que los electrones se aceleren en un campo aplicado: el sólido es un conductor. Una banda completamente llena con una brecha encima no puede llevar corriente: un aislante, o un semiconductor si la brecha es pequeña (§{#}, Fig. {#}).",
"Use the formula to find the two levels for \\(N = 2\\), and show that they are split by \\(2t\\).":
  "Usa la fórmula para encontrar los dos niveles para \\(N = 2\\), y muestra que están separados por \\(2t\\).",
"How many electrons can the s band of a chain of {#} atoms hold? How many can its p band hold (one pσ and two pπ orbitals per atom)?":
  "¿Cuántos electrones puede tener la banda s de una cadena de {#} átomos? ¿Cuántos puede tener su banda p (un orbital pσ y dos pπ por átomo)?",
"Sodium has one valence electron per atom and is a metal; magnesium has two, just enough to fill an s band. Take the demo’s chain with {#} electrons per atom. As its atoms are pushed closer together, from d = {#} nm toward {#} nm, does the gap between the full s band and the p band above it grow, stay about the same, or shrink? Does the chain end up an insulator or a metal? Decide before you open the demo, and say why.":
  "El sodio tiene un electrón de valencia por átomo y es un metal; el magnesio tiene dos, justo los necesarios para llenar una banda s. Toma la cadena de la demo con {#} electrones por átomo. Al acercar sus átomos, de d = {#} nm hacia {#} nm, ¿la brecha entre la banda s llena y la banda p de arriba crece, se queda más o menos igual, o se reduce? ¿La cadena termina como aislante o como metal? Decídelo antes de abrir la demo, y explica por qué.",
"If the width \\(w\\) of a band falls off as \\(e^{-d/\\lambda}\\), what graph of your readings should be a straight line, and what is its slope?":
  "Si el ancho \\(w\\) de una banda disminuye como \\(e^{-d/\\lambda}\\), ¿qué gráfica de tus lecturas debería ser una recta, y cuál es su pendiente?",
"<strong>Counting levels.</strong> The link opens the Bands view on the Levels become bands setup. Set the Spacing between atoms d slider to {#} nm. Set the Number of atoms N slider to {#}, {#}, {#}, {#}, {#}, {#} and {#} in turn and press Record reading at each; for the smaller chains, also count the s levels on the right diagram.":
  "<strong>Conteo de niveles.</strong> El enlace abre la vista Bandas con la configuración Los niveles se vuelven bandas. Fija el control Espaciado entre átomos d en {#} nm. Fija el control Número de átomos N en {#}, {#}, {#}, {#}, {#}, {#} y {#} por turno y pulsa Registrar lectura en cada uno; para las cadenas más pequeñas, cuenta también los niveles s en el diagrama de la derecha.",
"<strong>Width against spacing.</strong> Press Export to worksheet, then Clear. With N = {#}, set d to {#}, {#}, {#} and so on up to {#} nm (nine settings) and press Record reading at each. Press Export to worksheet when the ninth reading is in.":
  "<strong>Ancho en función del espaciado.</strong> Pulsa Exportar a la hoja y luego Borrar. Con N = {#}, fija d en {#}, {#}, {#} y así hasta {#} nm (nueve valores) y pulsa Registrar lectura en cada uno. Pulsa Exportar a la hoja cuando esté la novena lectura.",
"<strong>Filling the bands.</strong> Keep Blind (under Lab) unticked, since it hides the verdict. With N = {#} and d = {#} nm, press each of the Electrons per atom buttons {#}, {#} and {#}, and write down the Very long chain readout (the verdict) and the Highest filled level readout for each; you need them for Analysis {#}. Then press {#} and lower d with the arrow keys ({#} nm a step) until the Very long chain readout changes from an insulator to a metal; write down that spacing.":
  "<strong>Llenado de las bandas.</strong> Mantén A ciegas (en Laboratorio) sin marcar, ya que oculta el veredicto. Con N = {#} y d = {#} nm, pulsa cada uno de los botones de Electrones por átomo {#}, {#} y {#}, y anota la lectura Cadena muy larga (el veredicto) y la lectura Nivel lleno más alto de cada uno; las necesitas para el Análisis {#}. Luego pulsa {#} y baja d con las flechas ({#} nm por paso) hasta que la lectura Cadena muy larga cambie de aislante a metal; anota ese espaciado.",
"<span>B</span>Atoms \\(N\\)":
  "<span>B</span>Átomos \\(N\\)",
"<span>C</span>Spacing \\(d\\) (nm)":
  "<span>C</span>Separación \\(d\\) (nm)",
"<span>D</span>Lowest s level (eV)":
  "<span>D</span>Nivel s más bajo (eV)",
"<span>E</span>Highest s level (eV)":
  "<span>E</span>Nivel s más alto (eV)",
"<span>F</span>Lowest p level (eV)":
  "<span>F</span>Nivel p más bajo (eV)",
"<span>G</span>Width \\(w\\) of the s levels (eV)":
  "<span>G</span>Ancho \\(w\\) de los niveles s (eV)",
"<span>H</span>Gap (eV)":
  "<span>H</span>Brecha (eV)",
"<span>I</span>ln(w / {#} eV)":
  "<span>I</span>ln(w / {#} eV)",
"Atoms N, row {#}":
  "Átomos N, fila {#}",
"Spacing d (nm), row {#}":
  "Separación d (nm), fila {#}",
"Lowest s level (eV), row {#}":
  "Nivel s más bajo (eV), fila {#}",
"Highest s level (eV), row {#}":
  "Nivel s más alto (eV), fila {#}",
"Lowest p level (eV), row {#}":
  "Nivel p más bajo (eV), fila {#}",
"Width w of the s levels (eV), row {#}":
  "Ancho w de los niveles s (eV), fila {#}",
"Gap (eV), row {#}":
  "Brecha (eV), fila {#}",
"ln(w / {#} eV), row {#}":
  "ln(w / {#} eV), fila {#}",
"The gap is the lowest p level minus the highest s level; a negative value means the bands overlap.":
  "La brecha es el nivel p más bajo menos el nivel s más alto; un valor negativo significa que las bandas se traslapan.",
"Fill in the width, gap and \\(\\ln(w/1\\ \\text{eV})\\) columns from the levels in each reading. How many s levels does a chain of N atoms have? For the counting series, plot the width of the s levels against N. What does it approach?":
  "Llena las columnas de ancho, brecha y \\(\\ln(w/1\\ \\text{eV})\\) con los niveles de cada lectura. ¿Cuántos niveles s tiene una cadena de N átomos? Para la serie de conteo, grafica el ancho de los niveles s en función de N. ¿A qué tiende?",
"For N = {#}, plot \\(\\ln(w/1\\ \\text{eV})\\) against \\(d\\) and fit a straight line. Find \\(\\lambda\\) from the slope.":
  "Para N = {#}, grafica \\(\\ln(w/1\\ \\text{eV})\\) en función de \\(d\\) y ajusta una recta. Encuentra \\(\\lambda\\) a partir de la pendiente.",
"For each number of electrons per atom in the filling series, say whether the chain is a metal or an insulator, and explain using the number of electrons each band can hold.":
  "Para cada número de electrones por átomo de la serie de llenado, di si la cadena es un metal o un aislante, y explícalo con el número de electrones que puede tener cada banda.",
"A chain of N atoms has a width \\(4t\\cos(\\pi/(N + 1))\\), slightly less than \\(4t\\). By what fraction does this reduce the width for N = {#}? Does it change the slope you found in Analysis {#}? Use the standard error of the slope to give \\(\\lambda\\) with its uncertainty.":
  "Una cadena de N átomos tiene un ancho \\(4t\\cos(\\pi/(N + 1))\\), un poco menor que \\(4t\\). ¿En qué fracción reduce esto el ancho para N = {#}? ¿Cambia la pendiente que encontraste en el Análisis {#}? Usa el error estándar de la pendiente para dar \\(\\lambda\\) con su incertidumbre.",
"Magnesium has two valence electrons per atom, which would fill an s band exactly, yet magnesium is a metal. Look back at Before the lab {#}, then at the Gap column of your width series and the spacing at which the Very long chain readout turned to a metal. What happens to the two bands as the atoms come closer, and why? Use that to explain how magnesium conducts.":
  "El magnesio tiene dos electrones de valencia por átomo, que llenarían exactamente una banda s, y sin embargo el magnesio es un metal. Vuelve a Antes del laboratorio {#}, y luego mira la columna Brecha de tu serie de anchos y el espaciamiento en el que la lectura Cadena muy larga pasó a metal. ¿Qué les pasa a las dos bandas al acercarse los átomos, y por qué? Usa eso para explicar cómo conduce el magnesio.",
"At {#} K, \\(kT = 0.026\\) eV. The number of electrons excited across a gap is roughly proportional to \\(e^{-E_g/2kT}\\). Using Table {#}, by what factor does this differ between silicon ({#} eV) and diamond ({#} eV)? Why is one a semiconductor and the other an insulator?":
  "A {#} K, \\(kT = 0.026\\) eV. El número de electrones excitados a través de una brecha es aproximadamente proporcional a \\(e^{-E_g/2kT}\\). Con la Tabla {#}, ¿por qué factor difiere esto entre el silicio ({#} eV) y el diamante ({#} eV)? ¿Por qué uno es semiconductor y el otro aislante?",
"Prelab answers, the data tables with the graphs of width against N, \\(\\ln w\\) against \\(d\\), your value of \\(\\lambda\\) with its uncertainty, the filling results, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las tablas de datos con las gráficas del ancho en función de N, de \\(\\ln w\\) en función de \\(d\\), tu valor de \\(\\lambda\\) con su incertidumbre, los resultados del llenado y las respuestas a las preguntas. Identifica los datos simulados.",
"Energy of the atomic level":
  "Energía del nivel atómico",
"Band gap":
  "Brecha de banda",
"Energy of level j in the band":
  "Energía del nivel j de la banda",
"Number of atoms":
  "Número de átomos",
"Spacing of the atoms":
  "Separación de los átomos",
"Level number in the band":
  "Número del nivel en la banda",
"Wave number of the electron":
  "Número de onda del electrón",
"How far the orbital reaches":
  "Qué tan lejos llega el orbital",
"Overlap energy between neighboring orbitals":
  "Energía de traslape entre orbitales vecinos",
"Width of the band":
  "Ancho de la banda",
"Crystals, Bands and Semiconductors (Bands)":
  "Cristales, bandas y semiconductores (Bandas)",
"Sodium has one valence electron per atom. Is its highest band full, half full or empty? What does that predict about its conductivity?":
  "El sodio tiene un electrón de valencia por átomo. ¿Su banda más alta está llena, medio llena o vacía? ¿Qué predice eso sobre su conductividad?",
"Magnesium has two valence electrons per atom, which would fill an s band exactly, yet magnesium is a metal. Use your results to explain how.":
  "El magnesio tiene dos electrones de valencia por átomo, que llenarían exactamente una banda s, y sin embargo el magnesio es un metal. Usa tus resultados para explicar cómo.",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"Barrier width b (nm)":
  "Ancho de la barrera b (nm)",
"Period a (nm)":
  "Periodo a (nm)",
"Band {#} bottom (eV)":
  "Fondo de la banda {#} (eV)",
"Band {#} top (eV)":
  "Tope de la banda {#} (eV)",
"First gap (eV)":
  "Primera brecha (eV)",
"Width of band {#} (eV)":
  "Ancho de la banda {#} (eV)",
"ln(width / {#} eV)":
  "ln(ancho / {#} eV)",
"The Bands view’s Model switch changes the chain of atoms for a periodic potential (Kronig–Penney): one electron in a row of square wells of width w, where the potential is {#}, and barriers of height \\(V_0\\) and width \\(b\\), repeating every \\(a = w + b\\). The demo solves the Schrödinger equation exactly and shows the allowed bands, \\(E\\) against \\(k\\) with the free electron parabola, and the Bloch wave of a chosen state. Record reading there stores \\(V_0\\), w, b, a and the edges of the first two bands; those readings go to Table {#}.":
  "El interruptor Modelo de la vista Bandas cambia la cadena de átomos por un potencial periódico (Kronig–Penney): un electrón en una fila de pozos cuadrados de ancho w, donde el potencial es {#}, y barreras de altura \\(V_0\\) y ancho \\(b\\), que se repiten cada \\(a = w + b\\). La demo resuelve la ecuación de Schrödinger exactamente y muestra las bandas permitidas, \\(E\\) en función de \\(k\\) con la parábola del electrón libre, y la onda de Bloch de un estado elegido. Registrar lectura ahí guarda \\(V_0\\), w, b, a y los bordes de las dos primeras bandas; esas lecturas van a la Tabla {#}.",
"<strong>Part {#}</strong> starts from the other end. A free electron has \\(E = \\hbar^2k^2/2m\\) for every \\(k\\). In a crystal it moves through a potential that repeats every \\(a\\), and the Schrödinger equation then allows only bands of energy (Kronig and Penney, {#}). The gaps open where the electron’s wave is reflected by the whole row, at \\(k = \\pi/a\\): there \\(E = \\hbar^2\\pi^2/2ma^2\\), with \\(\\hbar^2/2m = 0.0381\\ \\mathrm{eV\\,nm^2}\\). For a weak potential the first gap is twice the size of the potential’s Fourier component at \\(2\\pi/a\\); for square barriers that is":
  "La <strong>Parte {#}</strong> empieza desde el otro extremo. Un electrón libre tiene \\(E = \\hbar^2k^2/2m\\) para cualquier \\(k\\). En un cristal se mueve en un potencial que se repite cada \\(a\\), y entonces la ecuación de Schrödinger permite solo bandas de energía (Kronig y Penney, {#}). Las brechas se abren donde la onda del electrón es reflejada por toda la fila, en \\(k = \\pi/a\\): ahí \\(E = \\hbar^2\\pi^2/2ma^2\\), con \\(\\hbar^2/2m = 0.0381\\ \\mathrm{eV\\,nm^2}\\). Para un potencial débil la primera brecha es el doble de la componente de Fourier del potencial en \\(2\\pi/a\\); para barreras cuadradas eso es",
"\\[E_g \\approx \\frac{2V_0}{\\pi}\\sin\\frac{\\pi b}{a}.\\]":
  "\\[E_g \\approx \\frac{2V_0}{\\pi}\\sin\\frac{\\pi b}{a}.\\]",
"For high or wide barriers the electron must tunnel from well to well. Its wave falls off inside a barrier as \\(e^{-\\kappa x}\\), with \\(\\kappa = \\sqrt{2m(V_0 - E)}/\\hbar\\), and the band narrows as the barriers widen, as the chain’s bands narrowed as the atoms moved apart.":
  "Para barreras altas o anchas el electrón debe pasar por efecto túnel de pozo en pozo. Su onda decae dentro de una barrera como \\(e^{-\\kappa x}\\), con \\(\\kappa = \\sqrt{2m(V_0 - E)}/\\hbar\\), y la banda se angosta al ensancharse las barreras, igual que las bandas de la cadena se angostaban al separarse los átomos.",
"For a period \\(a = 0.30\\) nm, find the free electron energy at \\(k = \\pi/a\\). Then use the formula for \\(E_g\\) to predict the first gap for \\(V_0 = 1\\) eV with \\(b = 0.05\\) nm.":
  "Para un periodo \\(a = 0.30\\) nm, encuentra la energía del electrón libre en \\(k = \\pi/a\\). Luego usa la fórmula de \\(E_g\\) para predecir la primera brecha con \\(V_0 = 1\\) eV y \\(b = 0.05\\) nm.",
"<strong>Counting levels.</strong> Set the spacing to {#} nm. Record a reading for N = {#}, {#}, {#}, {#}, {#}, {#} and {#}, and count the s levels on the right diagram for the smaller chains.":
  "<strong>Conteo de niveles.</strong> Fija la separación en {#} nm. Registra una lectura para N = {#}, {#}, {#}, {#}, {#}, {#} y {#}, y cuenta los niveles s en el diagrama de la derecha para las cadenas más pequeñas.",
"<strong>Width against spacing.</strong> Export, then clear the readings. With N = {#}, record a reading at spacings from {#} nm to {#} nm in steps of {#} nm.":
  "<strong>Ancho en función de la separación.</strong> Exporta y luego borra las lecturas. Con N = {#}, registra una lectura a separaciones de {#} nm a {#} nm en pasos de {#} nm.",
"<strong>Filling the bands.</strong> With N = {#} and d = {#} nm, note the verdict and the highest filled level for {#}, {#} and {#} electrons per atom. Then set {#} electrons per atom and reduce the spacing in small steps until the verdict changes; note that spacing.":
  "<strong>Llenado de las bandas.</strong> Con N = {#} y d = {#} nm, anota el veredicto y el nivel lleno más alto para {#}, {#} y {#} electrones por átomo. Luego fija {#} electrones por átomo y reduce la separación en pasos pequeños hasta que cambie el veredicto; anota esa separación.",
"<strong>Part {#}: a periodic potential.</strong> Export and clear the readings, and change the model to the periodic potential. With wells {#} nm wide and barriers {#} nm wide, record a reading at barrier heights \\(V_0\\) of {#}, {#}, {#}, {#}, {#}, {#} and {#} eV, and export them. Then clear the readings and, with \\(V_0 = 10\\) eV and wells {#} nm wide, record a reading for barrier widths of {#}, {#}, {#}, {#} and {#} nm. Export them too. Both series go to Table {#}, each in its own copy.":
  "<strong>Parte {#}: un potencial periódico.</strong> Exporta y borra las lecturas, y cambia el modelo al potencial periódico. Con pozos de {#} nm de ancho y barreras de {#} nm de ancho, registra una lectura con alturas de barrera \\(V_0\\) de {#}, {#}, {#}, {#}, {#}, {#} y {#} eV, y expórtalas. Luego borra las lecturas y, con \\(V_0 = 10\\) eV y pozos de {#} nm de ancho, registra una lectura para anchos de barrera de {#}, {#}, {#}, {#} y {#} nm. Expórtalas también. Ambas series van a la Tabla {#}, cada una en su propia copia.",
"Table {#}. A periodic potential.":
  "Tabla {#}. Un potencial periódico.",
"<span>C</span>Barrier width \\(b\\) (nm)":
  "<span>C</span>Ancho de la barrera \\(b\\) (nm)",
"<span>D</span>Period \\(a\\) (nm)":
  "<span>D</span>Periodo \\(a\\) (nm)",
"<span>E</span>Band {#} bottom (eV)":
  "<span>E</span>Fondo de la banda {#} (eV)",
"<span>F</span>Band {#} top (eV)":
  "<span>F</span>Tope de la banda {#} (eV)",
"<span>G</span>Band {#} bottom (eV)":
  "<span>G</span>Fondo de la banda {#} (eV)",
"<span>H</span>First gap (eV)":
  "<span>H</span>Primera brecha (eV)",
"<span>I</span>Width of band {#} (eV)":
  "<span>I</span>Ancho de la banda {#} (eV)",
"<span>J</span>ln(width / {#} eV)":
  "<span>J</span>ln(ancho / {#} eV)",
"V_0 (eV), row {#}":
  "V_0 (eV), fila {#}",
"Barrier width b (nm), row {#}":
  "Ancho de la barrera b (nm), fila {#}",
"Period a (nm), row {#}":
  "Periodo a (nm), fila {#}",
"Band {#} bottom (eV), row {#}":
  "Fondo de la banda {#} (eV), fila {#}",
"Band {#} top (eV), row {#}":
  "Tope de la banda {#} (eV), fila {#}",
"First gap (eV), row {#}":
  "Primera brecha (eV), fila {#}",
"Width of band {#} (eV), row {#}":
  "Ancho de la banda {#} (eV), fila {#}",
"ln(width / {#} eV), row {#}":
  "ln(ancho / {#} eV), fila {#}",
"Fill in the width of band {#} (its top minus its bottom) and its natural log.":
  "Llena el ancho de la banda {#} (su tope menos su fondo) y su logaritmo natural.",
"Plot the gap against \\(d\\). At what spacing does the gap close? Compare with the spacing where the verdict changed.":
  "Grafica la brecha en función de \\(d\\). ¿A qué separación se cierra la brecha? Compárala con la separación a la que cambió el veredicto.",
"For \\(V_0 = 0\\) in Table {#}, compare the top of band {#} and the bottom of band {#} with the free electron energy at \\(k = \\pi/a\\).":
  "Para \\(V_0 = 0\\) en la Tabla {#}, compara el tope de la banda {#} y el fondo de la banda {#} con la energía del electrón libre en \\(k = \\pi/a\\).",
"Plot the first gap against \\(V_0\\) (the first copy of Table {#}), and draw the prediction \\((2V_0/\\pi)\\sin(\\pi b/a)\\) beside it. Up to what \\(V_0\\) does the weak potential prediction hold?":
  "Grafica la primera brecha en función de \\(V_0\\) (la primera copia de la Tabla {#}), y dibuja junto a ella la predicción \\((2V_0/\\pi)\\sin(\\pi b/a)\\). ¿Hasta qué \\(V_0\\) se cumple la predicción de potencial débil?",
"For the barrier width series (the second copy), plot ln(width) against \\(b\\) and fit a straight line. Compare the slope with \\(-\\kappa\\), taking \\(E\\) as the middle of band {#} at \\(b = 0.10\\) nm. What does the band width have in common with the chain’s band width against spacing?":
  "Para la serie de anchos de barrera (la segunda copia), grafica ln(ancho) en función de \\(b\\) y ajusta una recta. Compara la pendiente con \\(-\\kappa\\), tomando \\(E\\) como el centro de la banda {#} en \\(b = 0.10\\) nm. ¿Qué tiene en común el ancho de la banda con el ancho de banda de la cadena en función de la separación?",
"Why does each atomic level split into exactly N levels, no more and no fewer?":
  "¿Por qué cada nivel atómico se divide en exactamente N niveles, ni más ni menos?",
"Inner electron levels of real atoms form very narrow bands, while the outer levels form wide ones. Explain using what you found about the overlap and the spacing.":
  "Los niveles electrónicos internos de los átomos reales forman bandas muy angostas, mientras que los niveles externos forman bandas anchas. Explícalo con lo que encontraste sobre el traslape y la separación.",
"The chain starts from atoms and lets their electrons hop to neighbors; the periodic potential starts from free electrons and lets the lattice reflect them. Why do both end with bands and gaps?":
  "La cadena parte de átomos y deja que sus electrones salten a los vecinos; el potencial periódico parte de electrones libres y deja que la red los refleje. ¿Por qué ambos terminan con bandas y brechas?",
"Prelab answers, the data tables with the graphs of width against N, \\(\\ln w\\) against \\(d\\) and the gap against \\(d\\), your value of \\(\\lambda\\) with its uncertainty, the filling results, Table {#} with its graphs, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las tablas de datos con las gráficas del ancho en función de N, \\(\\ln w\\) en función de \\(d\\) y la brecha en función de \\(d\\), tu valor de \\(\\lambda\\) con su incertidumbre, los resultados del llenado, la Tabla {#} con sus gráficas, y las respuestas a las preguntas. Identifica los datos simulados.",
"Energy of the electron":
  "Energía del electrón",
"Height of the barriers":
  "Altura de las barreras",
"Period of the potential, well width plus barrier width":
  "Periodo del potencial, ancho del pozo más ancho de la barrera",
"Width of each barrier":
  "Ancho de cada barrera",
"How fast the wave falls off inside a barrier, √(2m(V₀ − E))/ħ":
  "Qué tan rápido decae la onda dentro de una barrera, √(2m(V₀ − E))/ħ",
"Distance into the barrier":
  "Distancia dentro de la barrera"
});
