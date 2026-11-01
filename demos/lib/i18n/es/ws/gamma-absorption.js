/* ws/gamma-absorption in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/gamma-absorption', {
"Distance d (cm)":
  "Distancia d (cm)",
"Absorber":
  "Absorbente",
"Mass thickness x (g/cm²)":
  "Espesor másico x (g/cm²)",
"Live time (s)":
  "Tiempo vivo (s)",
"Net counts":
  "Conteos netos",
"Net rate R ({#}/s)":
  "Tasa neta R ({#}/s)",
"Rate uncertainty ({#}/s)":
  "Incertidumbre de la tasa ({#}/s)",
"ln R":
  "ln R",
"Absorbing Gamma Rays: Shielding and Distance | VirtualDemos":
  "Absorción de rayos gamma: blindaje y distancia | VirtualDemos",
"Absorbing Gamma Rays: Shielding and Distance":
  "Absorción de rayos gamma: blindaje y distancia",
"<strong>Setups in the demo:</strong> Absorption coefficient (the subject of this worksheet); Energy calibration; Unknown source (the Calibrating a Detector worksheet); Compton edge and backscatter; Activity against the standard; Photoelectric absorption.":
  "<strong>Configuraciones en la demo:</strong> Coeficiente de absorción (el tema de esta hoja de trabajo); Calibración en energía; Fuente desconocida (la hoja de trabajo Calibración de un detector); Borde Compton y retrodispersión; Actividad frente al estándar; Absorción fotoeléctrica.",
"The bench is a teaching gamma spectrometer modeled on ORTEC’s: a source in a lead castle, absorber sheets between the source and a {#} mm × {#} mm NaI(Tl) scintillation crystal, a photomultiplier, an amplifier and a {#} channel multichannel analyzer (MCA).":
  "La mesa es un espectrómetro gamma didáctico basado en el de ORTEC: una fuente en un castillo de plomo, láminas absorbentes entre la fuente y un cristal de centelleo de NaI(Tl) de {#} mm × {#} mm, un fotomultiplicador, un amplificador y un analizador multicanal (MCA) de {#} canales.",
"The spectra are simulated, not measured: a Monte Carlo calculation of how photons deposit energy in the crystal, smeared by the detector’s resolution and given random counting noise. Attenuation coefficients are from NIST XCOM; line energies and intensities are the ENSDF values.":
  "Los espectros son simulados, no medidos: un cálculo Monte Carlo de cómo los fotones depositan energía en el cristal, suavizado por la resolución del detector y con ruido de conteo aleatorio. Los coeficientes de atenuación son de NIST XCOM; las energías e intensidades de las líneas son los valores de ENSDF.",
"The lead absorbers are the four sheets of the ORTEC RAS20 set, {#}, {#}, {#} and {#} mg/cm²; pressing a sheet adds it to the stack. The distance slider moves the source from {#} cm to {#} cm from the face of the crystal.":
  "Los absorbentes de plomo son las cuatro láminas del juego ORTEC RAS20, {#}, {#}, {#} y {#} mg/cm²; pulsar una lámina la agrega a la pila. El deslizador de distancia mueve la fuente de {#} cm a {#} cm de la cara del cristal.",
"Acquire runs the MCA; Preset live stops it after that much live time; the clock speed buttons run it {#}, {#} or {#} times faster. Clear empties the spectrum. The region of interest (set by dragging across a peak) gives the net counts above a straight background and the net rate per live second with its uncertainty.":
  "Adquirir pone en marcha el MCA; Tiempo vivo programado lo detiene después de ese tiempo vivo; los botones de velocidad del reloj lo hacen correr {#}, {#} o {#} veces más rápido. Borrar vacía el espectro. La región de interés (fijada arrastrando sobre un pico) da los conteos netos sobre un fondo lineal y la tasa neta por segundo vivo con su incertidumbre.",
"Record reading stores the region of interest’s net counts and rate with the distance and absorber. Readings go to this worksheet while the Attenuation or Distance analysis plot is chosen. Export to worksheet sends the readings to the Data table below; Clear (under Readings) starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda los conteos netos y la tasa de la región de interés con la distancia y el absorbente. Las lecturas van a esta hoja de trabajo mientras está elegida la gráfica de análisis Atenuación o Distancia. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar (en Lecturas) inicia una serie nueva, que va a una nueva copia de la tabla.",
"Measure how lead absorbs the {#} keV gamma rays of cesium {#}, find its mass attenuation coefficient and half value layer, and test how the count rate falls with distance: the two ways to cut a radiation dose besides time.":
  "Mide cómo absorbe el plomo los rayos gamma de {#} keV del cesio {#}, encuentra su coeficiente de atenuación másico y su capa hemirreductora, y pon a prueba cómo baja la tasa de conteo con la distancia: las dos formas de reducir una dosis de radiación además del tiempo.",
"Gamma rays are not slowed down gradually like alpha or beta particles. Each photon either passes through a thin layer untouched or is removed from the beam by one interaction (photoelectric absorption, Compton scattering or pair production). The chance of an interaction per unit thickness is the same everywhere, so the number of photons that get through falls exponentially:":
  "Los rayos gamma no se frenan gradualmente como las partículas alfa o beta. Cada fotón o atraviesa una capa delgada sin cambio o es eliminado del haz por una interacción (absorción fotoeléctrica, dispersión Compton o producción de pares). La probabilidad de una interacción por unidad de espesor es la misma en todas partes, así que el número de fotones que pasan baja exponencialmente:",
"\\[R = R_0\\,e^{-(\\mu/\\rho)\\,x} ,\\]":
  "\\[R = R_0\\,e^{-(\\mu/\\rho)\\,x} ,\\]",
"where \\(x\\) is the mass thickness (density times thickness, in g/cm²) and \\(\\mu/\\rho\\) is the mass attenuation coefficient. Counting only the photopeak counts photons that arrived with their full energy, which is what this law describes. The half value layer, the mass thickness that halves the rate, is \\(x_{1/2} = \\ln 2/(\\mu/\\rho)\\).":
  "donde \\(x\\) es el espesor másico (densidad por espesor, en g/cm²) y \\(\\mu/\\rho\\) es el coeficiente de atenuación másico. Contar solo los conteos del fotopico cuenta los fotones que llegaron con toda su energía, que es lo que describe esta ley. La capa hemirreductora, el espesor másico que reduce la tasa a la mitad, es \\(x_{1/2} = \\ln 2/(\\mu/\\rho)\\).",
"A small source sends its photons out equally in all directions, so the number crossing the detector face falls as the inverse square of the distance. The photons interact at some depth inside the crystal, so the distance that matters is \\(d + d_0\\), where \\(d\\) is measured to the face of the crystal and \\(d_0\\) is an effective depth:":
  "Una fuente pequeña emite sus fotones por igual en todas direcciones, así que el número que cruza la cara del detector baja como el inverso del cuadrado de la distancia. Los fotones interactúan a cierta profundidad dentro del cristal, así que la distancia que importa es \\(d + d_0\\), donde \\(d\\) se mide hasta la cara del cristal y \\(d_0\\) es una profundidad efectiva:",
"\\[R = \\frac{k}{(d + d_0)^2}, \\qquad \\frac{1}{\\sqrt{R}} = \\frac{d + d_0}{\\sqrt{k}} .\\]":
  "\\[R = \\frac{k}{(d + d_0)^2}, \\qquad \\frac{1}{\\sqrt{R}} = \\frac{d + d_0}{\\sqrt{k}} .\\]",
"Time, distance and shielding are the three ways to reduce a radiation dose (§{#}): the dose is proportional to the time spent and to the rate, and the rate falls with distance and shielding.":
  "El tiempo, la distancia y el blindaje son las tres formas de reducir una dosis de radiación (§{#}): la dosis es proporcional al tiempo que se pasa y a la tasa, y la tasa baja con la distancia y el blindaje.",
"NIST lists \\(\\mu/\\rho = 0.110\\) cm²/g for lead at {#} keV. Find the half value layer in g/cm² and in mm (lead has a density of {#} g/cm³).":
  "El NIST da \\(\\mu/\\rho = 0.110\\) cm²/g para el plomo a {#} keV. Encuentra la capa hemirreductora en g/cm² y en mm (el plomo tiene una densidad de {#} g/cm³).",
"What mass thickness of lead cuts the rate to one tenth? To one hundredth?":
  "¿Qué espesor másico de plomo reduce la tasa a una décima? ¿Y a una centésima?",
"If the source is moved from {#} cm to {#} cm from a point detector, by what factor does the rate fall?":
  "Si la fuente se mueve de {#} cm a {#} cm de un detector puntual, ¿en qué factor baja la tasa?",
"Show that a graph of \\(\\ln R\\) against \\(x\\) is a straight line, and say what its slope is.":
  "Demuestra que una gráfica de \\(\\ln R\\) en función de \\(x\\) es una recta, y di cuál es su pendiente.",
"No hazards in the virtual lab. Lead is toxic if swallowed: wash your hands after handling real lead sheets.":
  "No hay riesgos en el laboratorio virtual. El plomo es tóxico si se ingiere: lávate las manos después de manejar láminas de plomo reales.",
"<strong>Lead.</strong> Start from the Absorption coefficient setup (cesium {#} at {#} cm, region of interest on the {#} keV photopeak, {#} s of live time). Record a reading with no lead. Then add lead and record a reading, each for {#} s of live time with the spectrum cleared first, at about {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} g/cm² (the sheets give these totals in different combinations).":
  "<strong>Plomo.</strong> Empieza con la configuración Coeficiente de absorción (cesio {#} a {#} cm, región de interés en el fotopico de {#} keV, {#} s de tiempo vivo). Registra una lectura sin plomo. Luego agrega plomo y registra una lectura, cada una durante {#} s de tiempo vivo y borrando antes el espectro, a unos {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} g/cm² (las láminas dan estos totales en distintas combinaciones).",
"<strong>Distance.</strong> Export your readings and Clear them. With no lead, record readings for {#} s of live time with the source {#}, {#}, {#}, {#}, {#}, {#} and {#} cm from the crystal.":
  "<strong>Distancia.</strong> Exporta tus lecturas y bórralas. Sin plomo, registra lecturas durante {#} s de tiempo vivo con la fuente a {#}, {#}, {#}, {#}, {#}, {#} y {#} cm del cristal.",
"<span>B</span>Distance d (cm)":
  "<span>B</span>Distancia d (cm)",
"<span>C</span>Absorber":
  "<span>C</span>Absorbente",
"<span>D</span>Mass thickness x (g/cm²)":
  "<span>D</span>Espesor másico x (g/cm²)",
"<span>E</span>Live time (s)":
  "<span>E</span>Tiempo vivo (s)",
"<span>F</span>Net counts":
  "<span>F</span>Conteos netos",
"<span>G</span>Net rate R ({#}/s)":
  "<span>G</span>Tasa neta R ({#}/s)",
"<span>H</span>Rate uncertainty ({#}/s)":
  "<span>H</span>Incertidumbre de la tasa ({#}/s)",
"<span>I</span>ln R":
  "<span>I</span>ln R",
"<span>J</span>\\(1/\\sqrt{R}\\) (√s)":
  "<span>J</span>\\(1/\\sqrt{R}\\) (√s)",
"Distance d (cm), row {#}":
  "Distancia d (cm), fila {#}",
"Absorber, row {#}":
  "Absorbente, fila {#}",
"Mass thickness x (g/cm²), row {#}":
  "Espesor másico x (g/cm²), fila {#}",
"Live time (s), row {#}":
  "Tiempo vivo (s), fila {#}",
"Net counts, row {#}":
  "Conteos netos, fila {#}",
"Net rate R ({#}/s), row {#}":
  "Tasa neta R ({#}/s), fila {#}",
"Rate uncertainty ({#}/s), row {#}":
  "Incertidumbre de la tasa ({#}/s), fila {#}",
"ln R, row {#}":
  "ln R, fila {#}",
"{#}/√R (√s), row {#}":
  "{#}/√R (√s), fila {#}",
"Work out \\(\\ln R\\) (with \\(R\\) in {#}/s) for the lead readings and \\(1/\\sqrt{R}\\) for the distance readings.":
  "Calcula \\(\\ln R\\) (con \\(R\\) en {#}/s) para las lecturas con plomo y \\(1/\\sqrt{R}\\) para las lecturas de distancia.",
"Graph \\(\\ln R\\) against \\(x\\) for the lead readings. From the slope find \\(\\mu/\\rho\\) and compare with the NIST value, {#} cm²/g.":
  "Grafica \\(\\ln R\\) en función de \\(x\\) para las lecturas con plomo. Con la pendiente encuentra \\(\\mu/\\rho\\) y compáralo con el valor del NIST, {#} cm²/g.",
"Find the half value layer from your \\(\\mu/\\rho\\), in g/cm² and in mm of lead. How many half value layers did the thickest stack give?":
  "Encuentra la capa hemirreductora a partir de tu \\(\\mu/\\rho\\), en g/cm² y en mm de plomo. ¿Cuántas capas hemirreductoras dio la pila más gruesa?",
"Graph \\(R\\) against \\(d\\) for the distance readings. Then graph \\(1/\\sqrt{R}\\) against \\(d\\). Is it a straight line? Find \\(d_0\\) from the intercept and slope, and say what it means.":
  "Grafica \\(R\\) en función de \\(d\\) para las lecturas de distancia. Luego grafica \\(1/\\sqrt{R}\\) en función de \\(d\\). ¿Es una recta? Encuentra \\(d_0\\) con la ordenada al origen y la pendiente, y di qué significa.",
"A worker stands {#} m from a cesium {#} source. Using your results, which halves the dose rate more cheaply in space and weight: stepping back by how much, or a sheet of lead of what thickness?":
  "Un trabajador está a {#} m de una fuente de cesio {#}. Con tus resultados, ¿qué reduce a la mitad la tasa de dosis de forma más económica en espacio y peso: alejarse cuánto, o una lámina de plomo de qué espesor?",
"Each net rate has a counting uncertainty, given in the table. Compare the relative uncertainty of the thickest lead reading with the first. How should that change the weight each point gets in the fit, and would it change your \\(\\mu/\\rho\\) much?":
  "Cada tasa neta tiene una incertidumbre de conteo, dada en la tabla. Compara la incertidumbre relativa de la lectura con más plomo con la de la primera. ¿Cómo debería cambiar eso el peso que recibe cada punto en el ajuste, y cambiaría mucho tu \\(\\mu/\\rho\\)?",
"Why does a gamma ray beam fall off exponentially in lead, while alpha particles stop at a definite range?":
  "¿Por qué un haz de rayos gamma disminuye exponencialmente en el plomo, mientras que las partículas alfa se detienen a un alcance definido?",
"Why count only the photopeak, rather than every pulse, to measure \\(\\mu/\\rho\\)?":
  "¿Por qué contar solo el fotopico, en lugar de cada pulso, para medir \\(\\mu/\\rho\\)?",
"Lead is used for shielding gamma rays, but concrete and water are used too. What property of the absorber matters, and how could a thick wall of concrete do the same job as lead?":
  "El plomo se usa como blindaje contra rayos gamma, pero también se usan el concreto y el agua. ¿Qué propiedad del absorbente importa, y cómo podría un muro grueso de concreto hacer el mismo trabajo que el plomo?",
"Name the three ways to reduce a dose from a gamma source, and say which of your measurements showed two of them.":
  "Nombra las tres formas de reducir una dosis de una fuente gamma, y di cuáles de tus mediciones mostraron dos de ellas.",
"Prelab answers, both table copies with their graphs, \\(\\mu/\\rho\\) and the half value layer with uncertainties, \\(d_0\\), and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ambas copias de la tabla con sus gráficas, \\(\\mu/\\rho\\) y la capa hemirreductora con incertidumbres, \\(d_0\\) y las respuestas a las preguntas. Identifica los datos simulados.",
"Count rate":
  "Tasa de conteo",
"Count rate with no absorber":
  "Tasa de conteo sin absorbente",
"Distance from the source to the crystal's face":
  "Distancia de la fuente a la cara del cristal",
"Extra depth in the crystal where the photons interact":
  "Profundidad adicional en el cristal donde interactúan los fotones",
"Constant of the inverse square law":
  "Constante de la ley del inverso del cuadrado",
"Attenuation coefficient (μ/ρ is the mass attenuation coefficient)":
  "Coeficiente de atenuación (μ/ρ es el coeficiente de atenuación másico)",
"Density of the absorber":
  "Densidad del absorbente",
"Mass thickness: density times thickness":
  "Espesor másico: densidad por espesor",
"Half value layer: the mass thickness that halves the rate":
  "Capa hemirreductora: el espesor másico que reduce la tasa a la mitad",
"Gamma Spectroscopy (absorption)":
  "Espectroscopía gamma (absorción)"
});
