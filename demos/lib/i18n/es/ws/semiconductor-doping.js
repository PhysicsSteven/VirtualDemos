/* ws/semiconductor-doping in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/semiconductor-doping', {
"Electrons n (cm⁻³)":
  "Electrones n (cm⁻³)",
"Holes p (cm⁻³)":
  "Huecos p (cm⁻³)",
"ln(n / {#} cm⁻³)":
  "ln(n / {#} cm⁻³)",
"ln n − {#} ln T":
  "ln n − {#} ln T",
"Carriers in Pure and Doped Silicon | VirtualDemos":
  "Portadores en silicio puro y dopado | VirtualDemos",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"Carriers in Pure and Doped Silicon":
  "Portadores en silicio puro y dopado",
"<strong>Setups in the demo:</strong> Pure silicon; n type silicon (these two use the Doping view, the subject of this worksheet); Rock salt; Cesium chloride (the Lattice energy worksheet); Levels become bands; Filling the bands (the Energy bands worksheet); Diode; LED colors (the pn junction worksheet).":
  "<strong>Configuraciones en la demo:</strong> Silicio puro; Silicio tipo n (estas dos usan la vista Dopaje, el tema de esta hoja de trabajo); Sal de roca; Cloruro de cesio (la hoja de trabajo Energía de red); Los niveles se vuelven bandas; Llenado de las bandas (la hoja de trabajo Bandas de energía); Diodo; Colores de LED (la hoja de trabajo Unión pn).",
"A sample sits in a cryostat that holds it at any temperature from {#} K to {#} K. A Hall probe reads the density of conduction electrons \\(n\\) and of holes \\(p\\), in cm⁻³.":
  "Una muestra está en un criostato que la mantiene a cualquier temperatura de {#} K a {#} K. Una sonda Hall lee la densidad de electrones de conducción \\(n\\) y de huecos \\(p\\), en cm⁻³.",
"Choose silicon, germanium or gallium arsenide. Silicon can be doped with donors (phosphorus, arsenic or antimony) and acceptors (boron, aluminum or gallium), each from {#}¹¹ to {#}¹⁸ cm⁻³; slide a density to its left end for none. Germanium and gallium arsenide are pure here.":
  "Elige silicio, germanio o arseniuro de galio. El silicio se puede dopar con donadores (fósforo, arsénico o antimonio) y aceptores (boro, aluminio o galio), cada uno de {#}¹¹ a {#}¹⁸ cm⁻³; desliza una densidad hasta su extremo izquierdo para no poner nada. Aquí el germanio y el arseniuro de galio son puros.",
"The band diagram shows the conduction and valence bands, the donor and acceptor levels and the Fermi level. Its dots show the electrons and holes on a scale given at the top, the same for both.":
  "El diagrama de bandas muestra las bandas de conducción y de valencia, los niveles donadores y aceptores y el nivel de Fermi. Sus puntos muestran los electrones y los huecos en una escala dada arriba, la misma para ambos.",
"The graphs show \\(n\\) (solid) and \\(p\\) (dashed) against temperature on a log scale, with your recorded readings as dots, and the Fermi level against temperature.":
  "Las gráficas muestran \\(n\\) (continua) y \\(p\\) (discontinua) en función de la temperatura en escala logarítmica, con tus lecturas registradas como puntos, y el nivel de Fermi en función de la temperatura.",
"Record reading stores the sample, the temperature and the Hall readings of \\(n\\) and \\(p\\). Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la muestra, la temperatura y las lecturas Hall de \\(n\\) y \\(p\\). Exportar a la hoja envía las lecturas a la tabla de Datos de abajo; Borrar empieza una nueva serie, que va a una nueva copia de la tabla.",
"Blind hides the curves, the intrinsic density, the Fermi level and the name of the region.":
  "A ciegas oculta las curvas, la densidad intrínseca, el nivel de Fermi y el nombre de la región.",
"Measure how the number of charge carriers in silicon depends on temperature, find the band gap from pure silicon, and see how a tiny amount of phosphorus changes everything.":
  "Mide cómo depende de la temperatura el número de portadores de carga en el silicio, encuentra la banda prohibida a partir del silicio puro, y observa cómo una cantidad diminuta de fósforo lo cambia todo.",
"In a pure (intrinsic) semiconductor at \\(T = 0\\) the valence band is full and the conduction band empty. Heat lifts a few electrons across the gap \\(E_g\\), each leaving a hole behind, so \\(n = p = n_i\\) (§{#}). The number lifted depends on the Boltzmann factor for half the gap:":
  "En un semiconductor puro (intrínseco) a \\(T = 0\\) la banda de valencia está llena y la banda de conducción vacía. El calor eleva unos pocos electrones a través de la brecha \\(E_g\\), y cada uno deja un hueco atrás, así que \\(n = p = n_i\\) (§{#}). El número que se eleva depende del factor de Boltzmann para la mitad de la brecha:",
"\\[n_i = \\sqrt{N_c N_v}\\; e^{-E_g/2kT},\\]":
  "\\[n_i = \\sqrt{N_c N_v}\\; e^{-E_g/2kT},\\]",
"where \\(N_c\\) and \\(N_v\\), the effective densities of states of the two bands, both grow as \\(T^{3/2}\\). So":
  "donde \\(N_c\\) y \\(N_v\\), las densidades efectivas de estados de las dos bandas, crecen ambas como \\(T^{3/2}\\). Así que",
"\\[\\ln n_i - \\tfrac{3}{2}\\ln T = \\text{constant} - \\frac{E_g}{2k}\\,\\frac{1}{T},\\]":
  "\\[\\ln n_i - \\tfrac{3}{2}\\ln T = \\text{constant} - \\frac{E_g}{2k}\\,\\frac{1}{T},\\]",
"and a graph of the left side against \\(1/T\\) is a straight line of slope \\(-E_g/2k\\), with \\(k = 8.617 \\times 10^{-5}\\) eV/K.":
  "y una gráfica del lado izquierdo contra \\(1/T\\) es una recta de pendiente \\(-E_g/2k\\), con \\(k = 8.617 \\times 10^{-5}\\) eV/K.",
"A phosphorus atom has five valence electrons, one more than silicon. The extra electron is bound only weakly, {#} eV below the conduction band, and at room temperature almost every donor gives it up, so \\(n \\approx N_D\\) (§{#}). At low temperature the donors keep their electrons (freeze out); at high temperature \\(n_i\\) grows larger than \\(N_D\\) and the sample behaves as if it were pure again. At any temperature, \\(np = n_i^2\\).":
  "Un átomo de fósforo tiene cinco electrones de valencia, uno más que el silicio. El electrón extra está ligado solo débilmente, {#} eV por debajo de la banda de conducción, y a temperatura ambiente casi todo donador lo cede, así que \\(n \\approx N_D\\) (§{#}). A baja temperatura los donadores conservan sus electrones (congelamiento); a alta temperatura \\(n_i\\) crece más que \\(N_D\\) y la muestra se comporta como si fuera pura otra vez. A cualquier temperatura, \\(np = n_i^2\\).",
"Silicon has \\(5.0 \\times 10^{22}\\) atoms per cm³. At {#} K, \\(n_i \\approx 1 \\times 10^{10}\\) cm⁻³. What fraction of the atoms has given up an electron?":
  "El silicio tiene \\(5.0 \\times 10^{22}\\) átomos por cm³. A {#} K, \\(n_i \\approx 1 \\times 10^{10}\\) cm⁻³. ¿Qué fracción de los átomos ha cedido un electrón?",
"Phosphorus is added at \\(1 \\times 10^{15}\\) cm⁻³. One phosphorus atom for how many silicon atoms? What is \\(n\\) at {#} K, and what is \\(p\\)?":
  "Se añade fósforo a \\(1 \\times 10^{15}\\) cm⁻³. ¿Un átomo de fósforo por cuántos átomos de silicio? ¿Cuánto vale \\(n\\) a {#} K, y cuánto \\(p\\)?",
"By what factor should \\(n_i\\) change between {#} K and {#} K if \\(E_g = 1.12\\) eV? Include the \\(T^{3/2}\\).":
  "¿En qué factor debería cambiar \\(n_i\\) entre {#} K y {#} K si \\(E_g = 1.12\\) eV? Incluye el \\(T^{3/2}\\).",
"Why would a slope of \\(-E_g/2k\\), rather than \\(-E_g/k\\), be expected?":
  "¿Por qué se esperaría una pendiente de \\(-E_g/2k\\), en lugar de \\(-E_g/k\\)?",
"<strong>Pure silicon.</strong> Pick Pure silicon. Record readings from {#} K to {#} K in steps of {#} K.":
  "<strong>Silicio puro.</strong> Elige Silicio puro. Registra lecturas de {#} K a {#} K en pasos de {#} K.",
"<strong>n type silicon.</strong> Export, clear the readings and pick n type silicon (phosphorus at {#}¹⁵ cm⁻³). Record readings at {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} K.":
  "<strong>Silicio tipo n.</strong> Exporta, borra las lecturas y elige Silicio tipo n (fósforo a {#}¹⁵ cm⁻³). Registra lecturas a {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} K.",
"<strong>p type silicon.</strong> Export and clear the readings. Turn the phosphorus down to none, add boron at {#}¹⁶ cm⁻³ and record readings at {#}, {#} and {#} K.":
  "<strong>Silicio tipo p.</strong> Exporta y borra las lecturas. Quita todo el fósforo, añade boro a {#}¹⁶ cm⁻³ y registra lecturas a {#}, {#} y {#} K.",
"<span>B</span>Sample":
  "<span>B</span>Muestra",
"<span>C</span>Temperature \\(T\\) (K)":
  "<span>C</span>Temperatura \\(T\\) (K)",
"<span>D</span>Electrons \\(n\\) (cm⁻³)":
  "<span>D</span>Electrones \\(n\\) (cm⁻³)",
"<span>E</span>Holes \\(p\\) (cm⁻³)":
  "<span>E</span>Huecos \\(p\\) (cm⁻³)",
"<span>G</span>ln(n / {#} cm⁻³)":
  "<span>G</span>ln(n / {#} cm⁻³)",
"<span>H</span>ln n − {#} ln T":
  "<span>H</span>ln n − {#} ln T",
"Sample, row {#}":
  "Muestra, fila {#}",
"Electrons n (cm⁻³), row {#}":
  "Electrones n (cm⁻³), fila {#}",
"Holes p (cm⁻³), row {#}":
  "Huecos p (cm⁻³), fila {#}",
"{#}/T ({#}/K), row {#}":
  "{#}/T ({#}/K), fila {#}",
"ln(n / {#} cm⁻³), row {#}":
  "ln(n / {#} cm⁻³), fila {#}",
"ln n − {#} ln T, row {#}":
  "ln n − {#} ln T, fila {#}",
"In the last column, take \\(T\\) in kelvins.":
  "En la última columna, toma \\(T\\) en kelvin.",
"Fill in the last three columns for every reading. For pure silicon, plot \\(\\ln n - 1.5\\ln T\\) against \\(1/T\\) and fit a straight line. Find \\(E_g\\) from the slope.":
  "Llena las últimas tres columnas para cada lectura. Para el silicio puro, grafica \\(\\ln n - 1.5\\ln T\\) contra \\(1/T\\) y ajusta una recta. Encuentra \\(E_g\\) a partir de la pendiente.",
"Now plot \\(\\ln n\\) alone against \\(1/T\\) and find \\(E_g\\) the same way. Which value is closer to {#} eV, and why?":
  "Ahora grafica solo \\(\\ln n\\) contra \\(1/T\\) y encuentra \\(E_g\\) de la misma forma. ¿Qué valor está más cerca de {#} eV, y por qué?",
"For the n type sample, sketch or plot \\(\\ln n\\) against \\(T\\) and mark the freeze out, extrinsic and intrinsic regions. What is \\(n\\) on the plateau, and near what temperature does the intrinsic density take over?":
  "Para la muestra tipo n, dibuja o grafica \\(\\ln n\\) contra \\(T\\) y marca las regiones de congelamiento, extrínseca e intrínseca. ¿Cuánto vale \\(n\\) en la meseta, y cerca de qué temperatura domina la densidad intrínseca?",
"At the four lowest temperatures, plot \\(\\ln n\\) against \\(1/T\\). In freeze out \\(n\\) varies roughly as \\(e^{-E_d/2kT}\\); estimate the donor binding energy \\(E_d\\) and compare it with {#} eV.":
  "En las cuatro temperaturas más bajas, grafica \\(\\ln n\\) contra \\(1/T\\). En el congelamiento \\(n\\) varía más o menos como \\(e^{-E_d/2kT}\\); estima la energía de enlace del donador \\(E_d\\) y compárala con {#} eV.",
"For the p type readings, find \\(np\\) at each temperature and compare it with your \\(n_i^2\\) from pure silicon at the same temperature (at {#} K, extrapolate your Analysis {#} line).":
  "Para las lecturas tipo p, encuentra \\(np\\) a cada temperatura y compáralo con tu \\(n_i^2\\) del silicio puro a la misma temperatura (a {#} K, extrapola tu recta del Análisis {#}).",
"Give \\(E_g\\) from Analysis {#} with the standard error from the fit. The model holds the gap at its {#} K value; in real silicon the gap shrinks slightly as the temperature rises, so a measurement on real silicon gives a gap extrapolated to {#} K, about {#} eV. Which way would that shift your slope?":
  "Da \\(E_g\\) del Análisis {#} con el error estándar del ajuste. El modelo mantiene la brecha en su valor a {#} K; en el silicio real la brecha se reduce un poco al subir la temperatura, así que una medición en silicio real da una brecha extrapolada a {#} K, de unos {#} eV. ¿Hacia dónde desplazaría eso tu pendiente?",
"In pure silicon, why is the number of holes exactly equal to the number of conduction electrons?":
  "En el silicio puro, ¿por qué el número de huecos es exactamente igual al número de electrones de conducción?",
"Why does phosphorus act as a donor and boron as an acceptor?":
  "¿Por qué el fósforo actúa como donador y el boro como aceptor?",
"One phosphorus atom per fifty million silicon atoms multiplies the number of electrons at room temperature by about {#} {#}. Explain.":
  "Un átomo de fósforo por cada cincuenta millones de átomos de silicio multiplica el número de electrones a temperatura ambiente por unos {#} {#}. Explica.",
"Why must a silicon device be kept below the temperature where the intrinsic carriers take over?":
  "¿Por qué un dispositivo de silicio debe mantenerse por debajo de la temperatura en que dominan los portadores intrínsecos?",
"A Hall voltage is measured across an n type strip and a p type strip carrying the same current in the same magnetic field. How do the two Hall voltages differ, and why (§{#})?":
  "Se mide un voltaje Hall a través de una tira tipo n y una tira tipo p que llevan la misma corriente en el mismo campo magnético. ¿En qué difieren los dos voltajes Hall, y por qué (§{#})?",
"Prelab answers, the data tables with the graphs from Analysis {#} to {#}, your band gap with its uncertainty, the estimate of \\(E_d\\), the \\(np\\) check, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, las tablas de datos con las gráficas de los Análisis {#} a {#}, tu banda prohibida con su incertidumbre, la estimación de \\(E_d\\), la comprobación de \\(np\\), y las respuestas a las preguntas. Identifica los datos simulados.",
"Donor binding energy":
  "Energía de enlace del donador",
"Band gap":
  "Banda prohibida",
"Donor density":
  "Densidad de donadores",
"Effective density of states of the conduction band":
  "Densidad efectiva de estados de la banda de conducción",
"Effective density of states of the valence band":
  "Densidad efectiva de estados de la banda de valencia",
"Density of conduction electrons":
  "Densidad de electrones de conducción",
"Intrinsic carrier density":
  "Densidad intrínseca de portadores",
"Density of holes":
  "Densidad de huecos",
"Crystals, Bands and Semiconductors (Doping)":
  "Cristales, bandas y semiconductores (Dopaje)",
"<strong>p type silicon.</strong> Export and clear the readings. Turn the phosphorus down to its lowest setting ({#}¹¹ cm⁻³, too few to matter here), add boron at {#}¹⁶ cm⁻³ and record readings at {#}, {#} and {#} K.":
  "<strong>Silicio tipo p.</strong> Exporta y borra las lecturas. Baja el fósforo a su ajuste mínimo ({#}¹¹ cm⁻³, muy poco para importar aquí), añade boro a {#}¹⁶ cm⁻³ y registra lecturas a {#}, {#} y {#} K."
});
