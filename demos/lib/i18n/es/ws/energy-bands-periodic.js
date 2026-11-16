/* ws/energy-bands-periodic in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/energy-bands-periodic', {
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
"Energy Bands in a Periodic Potential | VirtualDemos":
  "Bandas de energía en un potencial periódico | VirtualDemos",
"Energy Bands in a Periodic Potential":
  "Bandas de energía en un potencial periódico",
"<strong>Setups in the demo:</strong> Levels become bands; Filling the bands (the Energy Bands in a Chain of Atoms worksheet); Periodic potential; Deep wells, narrow bands (these use the Bands view with its Model switch on a periodic potential, the subject of this worksheet); Rock salt; Cesium chloride (the Lattice energy worksheet); Pure silicon; n type silicon (the Doping worksheet); Diode; LED colors (the pn junction worksheet).":
  "<strong>Configuraciones en el demo:</strong> Los niveles se vuelven bandas; Llenado de las bandas (la hoja Bandas de energía en una cadena de átomos); Potencial periódico; Pozos profundos, bandas angostas (estas usan la vista Bandas con su interruptor Modelo en un potencial periódico, el tema de esta hoja); Sal de roca; Cloruro de cesio (la hoja Energía de red); Silicio puro; Silicio tipo n (la hoja Dopaje); Diodo; Colores de LED (la hoja de la unión pn).",
"The Bands view’s Model switch changes the chain of atoms for a periodic potential (Kronig–Penney): one electron in a row of square wells of width w, where the potential is {#}, and barriers of height \\(V_0\\) and width \\(b\\), repeating every \\(a = w + b\\). The demo solves the Schrödinger equation exactly and shows the allowed bands, \\(E\\) against \\(k\\) with the free electron parabola, and the Bloch wave of a chosen state.":
  "El interruptor Modelo de la vista Bandas cambia la cadena de átomos por un potencial periódico (Kronig–Penney): un electrón en una fila de pozos cuadrados de ancho w, donde el potencial es {#}, y barreras de altura \\(V_0\\) y ancho \\(b\\), que se repiten cada \\(a = w + b\\). El demo resuelve la ecuación de Schrödinger de forma exacta y muestra las bandas permitidas, \\(E\\) en función de \\(k\\) con la parábola del electrón libre, y la onda de Bloch de un estado elegido.",
"Record reading stores \\(V_0\\), w, b, a and the edges of the first two bands. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda \\(V_0\\), w, b, a y los bordes de las primeras dos bandas. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar inicia una serie nueva, que va a una copia nueva de la tabla.",
"Blind hides the calculated energies and the theory curves, including the free electron parabola.":
  "Blind oculta las energías calculadas y las curvas teóricas, incluida la parábola del electrón libre.",
"Watch the allowed energies of one electron in a row of square wells open into bands and gaps, measure how the first gap grows with the height of the barriers, and measure how a band narrows as the barriers widen.":
  "Observa cómo las energías permitidas de un electrón en una fila de pozos cuadrados se abren en bandas y brechas, mide cómo crece la primera brecha con la altura de las barreras y mide cómo se angosta una banda al ensancharse las barreras.",
"In a crystal an electron moves through a potential that repeats every \\(a\\). A free electron has \\(E = \\hbar^2k^2/2m\\) for every \\(k\\), but in a repeating potential the Schrödinger equation allows only bands of energy (Kronig and Penney, {#}). The gaps open where the electron’s wave is reflected by the whole row, at \\(k = \\pi/a\\): there \\(E = \\hbar^2\\pi^2/2ma^2\\), with \\(\\hbar^2/2m = 0.0381\\ \\mathrm{eV\\,nm^2}\\). For a weak potential the first gap is twice the size of the potential’s Fourier component at \\(2\\pi/a\\); for square barriers that is":
  "En un cristal, un electrón se mueve en un potencial que se repite cada \\(a\\). Un electrón libre tiene \\(E = \\hbar^2k^2/2m\\) para todo \\(k\\), pero en un potencial que se repite la ecuación de Schrödinger permite solo bandas de energía (Kronig y Penney, {#}). Las brechas se abren donde la onda del electrón es reflejada por toda la fila, en \\(k = \\pi/a\\): ahí \\(E = \\hbar^2\\pi^2/2ma^2\\), con \\(\\hbar^2/2m = 0.0381\\ \\mathrm{eV\\,nm^2}\\). Para un potencial débil la primera brecha es el doble del componente de Fourier del potencial en \\(2\\pi/a\\); para barreras cuadradas eso es",
"\\[E_g \\approx \\frac{2V_0}{\\pi}\\sin\\frac{\\pi b}{a}.\\]":
  "\\[E_g \\approx \\frac{2V_0}{\\pi}\\sin\\frac{\\pi b}{a}.\\]",
"For high or wide barriers the electron must tunnel from well to well. Its wave falls off inside a barrier as \\(e^{-\\kappa x}\\), with \\(\\kappa = \\sqrt{2m(V_0 - E)}/\\hbar\\), and the band narrows as the barriers widen. This is the same narrowing that a chain of atoms shows as the atoms move apart (the Energy Bands in a Chain of Atoms worksheet): there each atomic level spreads into a band because neighboring orbitals overlap, and the band width falls off exponentially with the spacing. Here the starting point is the free electron and the lattice reflects its wave; the chain starts from atoms and lets their electrons hop to neighbors.":
  "Para barreras altas o anchas el electrón debe pasar por efecto túnel de pozo en pozo. Su onda decae dentro de una barrera como \\(e^{-\\kappa x}\\), con \\(\\kappa = \\sqrt{2m(V_0 - E)}/\\hbar\\), y la banda se angosta al ensancharse las barreras. Es el mismo estrechamiento que muestra una cadena de átomos cuando los átomos se separan (la hoja Bandas de energía en una cadena de átomos): ahí cada nivel atómico se ensancha en una banda porque los orbitales vecinos se traslapan, y el ancho de la banda cae exponencialmente con la separación. Aquí el punto de partida es el electrón libre y la red refleja su onda; la cadena parte de los átomos y deja que sus electrones salten a los vecinos.",
"For a period \\(a = 0.30\\) nm, find the free electron energy at \\(k = \\pi/a\\). Then use the formula for \\(E_g\\) to predict the first gap for \\(V_0 = 1\\) eV with \\(b = 0.05\\) nm.":
  "Para un periodo \\(a = 0.30\\) nm, encuentra la energía del electrón libre en \\(k = \\pi/a\\). Luego usa la fórmula de \\(E_g\\) para predecir la primera brecha con \\(V_0 = 1\\) eV y \\(b = 0.05\\) nm.",
"<strong>A periodic potential.</strong> ({#}) The link opens the Periodic potential setup, with the Model switch on Periodic potential (Kronig–Penney). Keep Blind (under Lab) unticked. ({#}) Set Well width w to {#} nm and Barrier width b to {#} nm, and record a reading at Barrier height V₀ of {#}, {#}, {#}, {#}, {#}, {#} and {#} eV; export them. ({#}) Clear, set V₀ to {#} eV with w still {#} nm, and record a reading at b = {#}, {#}, {#}, {#} and {#} nm; export them too. Both series go to the table, each in its own copy.":
  "<strong>Un potencial periódico.</strong> ({#}) El enlace abre la configuración Potencial periódico, con el interruptor Modelo en Potencial periódico (Kronig–Penney). Mantén A ciegas (en Laboratorio) sin marcar. ({#}) Fija Ancho del pozo w en {#} nm y Ancho de la barrera b en {#} nm, y registra una lectura con Altura de la barrera V₀ de {#}, {#}, {#}, {#}, {#}, {#} y {#} eV; expórtalas. ({#}) Borra, fija V₀ en {#} eV con w todavía en {#} nm, y registra una lectura con b = {#}, {#}, {#}, {#} y {#} nm; expórtalas también. Ambas series van a la tabla, cada una en su propia copia.",
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
"For \\(V_0 = 0\\), compare the top of band {#} and the bottom of band {#} with the free electron energy at \\(k = \\pi/a\\).":
  "Para \\(V_0 = 0\\), compara la parte superior de la banda {#} y la parte inferior de la banda {#} con la energía del electrón libre en \\(k = \\pi/a\\).",
"Plot the first gap against \\(V_0\\) (the first copy of the table), and draw the prediction \\((2V_0/\\pi)\\sin(\\pi b/a)\\) beside it. Up to what \\(V_0\\) does the weak potential prediction hold?":
  "Grafica la primera brecha contra \\(V_0\\) (la primera copia de la tabla) y dibuja junto a ella la predicción \\((2V_0/\\pi)\\sin(\\pi b/a)\\). ¿Hasta qué \\(V_0\\) se cumple la predicción de potencial débil?",
"For the barrier width series (the second copy), plot ln(width) against \\(b\\) and fit a straight line. Compare the slope with \\(-\\kappa\\), taking \\(E\\) as the middle of band {#} at \\(b = 0.10\\) nm. What does the band width have in common with a chain’s band width against spacing?":
  "Para la serie del ancho de la barrera (la segunda copia), grafica ln(ancho) en función de \\(b\\) y ajusta una línea recta. Compara la pendiente con \\(-\\kappa\\), tomando \\(E\\) como el centro de la banda {#} con \\(b = 0.10\\) nm. ¿Qué tiene en común el ancho de la banda con el ancho de banda de una cadena en función de la separación?",
"The demo’s band edges are rounded to {#} eV. By what fraction can that change the narrowest band width and the smallest gap in your readings? Is it enough to explain the residuals of your fit in Analysis {#}? Use the standard error of the slope to say whether your slope agrees with \\(-\\kappa\\).":
  "Los bordes de banda del demo están redondeados a {#} eV. ¿Qué fracción puede cambiar eso el ancho de banda más angosto y la brecha más pequeña en tus lecturas? ¿Basta para explicar los residuos de tu ajuste en el Análisis {#}? Usa el error estándar de la pendiente para decir si tu pendiente concuerda con \\(-\\kappa\\).",
"The chain of atoms starts from atoms and lets their electrons hop to neighbors; the periodic potential starts from free electrons and lets the lattice reflect them. Why do both end with bands and gaps?":
  "La cadena de átomos parte de los átomos y deja que sus electrones salten a los vecinos; el potencial periódico parte de electrones libres y deja que la red los refleje. ¿Por qué ambos terminan con bandas y brechas?",
"Prelab answers, the data table with its graphs, the comparison of the slope with \\(-\\kappa\\) with its uncertainty, and the answer to the question. Identify simulated data.":
  "Respuestas del prelaboratorio, la tabla de datos con sus gráficas, la comparación de la pendiente con \\(-\\kappa\\) con su incertidumbre, y la respuesta a la pregunta. Identifica los datos simulados.",
"Energy of the electron":
  "Energía del electrón",
"Band gap":
  "Brecha de banda",
"Height of the barriers":
  "Altura de las barreras",
"Period of the potential, well width plus barrier width":
  "Periodo del potencial, ancho del pozo más ancho de la barrera",
"Width of each barrier":
  "Ancho de cada barrera",
"Wave number of the electron":
  "Número de onda del electrón",
"How fast the wave falls off inside a barrier, √(2m(V₀ − E))/ħ":
  "Qué tan rápido decae la onda dentro de una barrera, √(2m(V₀ − E))/ħ",
"Width of the band":
  "Ancho de la banda",
"Distance into the barrier":
  "Distancia dentro de la barrera",
"Crystals, Bands and Semiconductors (Bands)":
  "Cristales, bandas y semiconductores (Bandas)",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>"
});
