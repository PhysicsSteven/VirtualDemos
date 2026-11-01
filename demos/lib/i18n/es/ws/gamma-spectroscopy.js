/* ws/gamma-spectroscopy in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/gamma-spectroscopy', {
"Centroid (channel)":
  "Centroide (canal)",
"Centroid uncertainty (channel)":
  "Incertidumbre del centroide (canal)",
"Known energy E (keV)":
  "Energía conocida E (keV)",
"Net counts":
  "Cuentas netas",
"FWHM (channel)":
  "FWHM (canal)",
"Energy from the demo’s calibration (keV)":
  "Energía según la calibración de la demo (keV)",
"Gamma Spectroscopy: Calibrating a Detector | VirtualDemos":
  "Espectroscopía gamma: calibrar un detector | VirtualDemos",
"Gamma Spectroscopy: Calibrating a Detector":
  "Espectroscopía gamma: calibrar un detector",
"<strong>Setups in the demo:</strong> Energy calibration; Unknown source (these two are the subject of this worksheet); Compton edge and backscatter; Activity against the standard; Absorption coefficient (the Absorbing Gamma Rays worksheet); Photoelectric absorption.":
  "<strong>Configuraciones en la demo:</strong> Calibración en energía; Fuente desconocida (estas dos son el tema de esta hoja de trabajo); Borde Compton y retrodispersión; Actividad frente al estándar; Coeficiente de absorción (la hoja de trabajo Absorción de rayos gamma); Absorción fotoeléctrica.",
"The bench is a teaching gamma spectrometer modeled on ORTEC’s: a source in a lead castle, a {#} mm × {#} mm NaI(Tl) scintillation crystal on a photomultiplier, an amplifier and a {#} channel multichannel analyzer (MCA). Each photon that deposits energy in the crystal makes a pulse whose height is proportional to that energy, and the MCA counts the pulses by height, one channel per small range of height.":
  "El banco es un espectrómetro gamma didáctico modelado según el de ORTEC: una fuente en un castillo de plomo, un cristal de centelleo de NaI(Tl) de {#} mm × {#} mm sobre un fotomultiplicador, un amplificador y un analizador multicanal (MCA) de {#} canales. Cada fotón que deposita energía en el cristal produce un pulso cuya altura es proporcional a esa energía, y el MCA cuenta los pulsos según su altura, un canal por cada intervalo pequeño de altura.",
"The spectra are simulated, not measured: a Monte Carlo calculation of how photons deposit energy in the crystal (photoelectric absorption, Compton scattering, pair production, backscatter from the castle), smeared by the detector’s resolution and given random counting noise. Line energies and intensities are the ENSDF evaluated values.":
  "Los espectros son simulados, no medidos: un cálculo de Monte Carlo de cómo los fotones depositan energía en el cristal (absorción fotoeléctrica, dispersión Compton, producción de pares, retrodispersión en el castillo), ensanchado por la resolución del detector y con ruido de conteo aleatorio. Las energías y las intensidades de las líneas son los valores evaluados de ENSDF.",
"Acquire runs the MCA; Preset live stops it after that much live time. The clock speed buttons run it {#}, {#} or {#} times faster than real time. Clear empties the spectrum.":
  "Adquirir corre el MCA; Tiempo vivo programado lo detiene después de ese tiempo vivo. Los botones de velocidad del reloj lo hacen correr {#}, {#} o {#} veces más rápido que el tiempo real. Borrar vacía el espectro.",
"Drag across a peak to set a region of interest. The readouts give its net counts above a straight background, the centroid channel with its uncertainty, and the FWHM.":
  "Arrastra a través de un pico para fijar una región de interés. Las lecturas dan sus cuentas netas sobre un fondo lineal, el canal del centroide con su incertidumbre y el FWHM.",
"The Energy calibration section can make the demo’s own calibration from marked peaks; the Unknown source setup starts with a calibration made earlier with cesium {#} and cobalt {#}.":
  "La sección Calibración en energía puede hacer la calibración propia de la demo a partir de picos marcados; la configuración Fuente desconocida empieza con una calibración hecha antes con cesio {#} y cobalto {#}.",
"Record reading stores the region of interest’s numbers with the source, distance and absorber, and its energy if the demo has a current calibration. Export to worksheet sends the readings to the Data table below; Clear (under Readings) starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda los números de la región de interés con la fuente, la distancia y el absorbente, y su energía si la demo tiene una calibración vigente. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar (en Lecturas) empieza una serie nueva, que va a una copia nueva de la tabla.",
"Calibrate a scintillation detector with sources of known gamma ray energies, measure its energy resolution, and use the calibration to identify an unknown source from its lines.":
  "Calibra un detector de centelleo con fuentes de energías de rayos gamma conocidas, mide su resolución en energía y usa la calibración para identificar una fuente desconocida por sus líneas.",
"A nucleus left in an excited state after a decay drops to its ground state by emitting a gamma ray photon with an energy set by the nuclear levels (§{#}). In a NaI(Tl) crystal the photon gives some or all of its energy to electrons, which make a flash of light in proportion to the energy deposited. A photomultiplier turns the flash into a pulse, and the MCA sorts the pulses by height into channels.":
  "Un núcleo que queda en un estado excitado después de un decaimiento pasa a su estado base emitiendo un fotón de rayo gamma con una energía fijada por los niveles nucleares (§{#}). En un cristal de NaI(Tl) el fotón cede parte o toda su energía a electrones, que producen un destello de luz proporcional a la energía depositada. Un fotomultiplicador convierte el destello en un pulso, y el MCA clasifica los pulsos por altura en canales.",
"When the photon is absorbed completely, the pulse falls in the photopeak, whose centroid channel \\(c\\) is very nearly a linear function of the photon energy:":
  "Cuando el fotón se absorbe por completo, el pulso cae en el fotopico, cuyo canal del centroide \\(c\\) es casi exactamente una función lineal de la energía del fotón:",
"Photons that Compton scatter and escape leave less energy, making a continuum below the photopeak that ends at the Compton edge, \\(E_C = 2E^2/(m_ec^2 + 2E)\\).":
  "Los fotones que sufren dispersión Compton y escapan dejan menos energía, y forman un continuo debajo del fotopico que termina en el borde Compton, \\(E_C = 2E^2/(m_ec^2 + 2E)\\).",
"The width of the photopeak, its full width at half maximum (FWHM), comes mostly from the statistics of the light collected. The energy resolution is FWHM divided by \\(E\\); for NaI(Tl) it is about {#}% at {#} keV and grows roughly as \\(1/\\sqrt{E}\\) at lower energies.":
  "El ancho del fotopico, su ancho total a media altura (FWHM), viene sobre todo de la estadística de la luz recolectada. La resolución en energía es el FWHM dividido entre \\(E\\); para el NaI(Tl) es de cerca del {#}% a {#} keV y crece aproximadamente como \\(1/\\sqrt{E}\\) a energías más bajas.",
"Gamma lines of the sources (ENSDF; keV): cobalt {#}, {#} and {#}; cadmium {#}, {#}; barium {#}, {#}, {#}, {#}, {#} and {#}; sodium {#}, {#} (from positron annihilation) and {#}; cesium {#}, {#}; manganese {#}, {#}; zinc {#}, {#}; cobalt {#}, {#} and {#}.":
  "Líneas gamma de las fuentes (ENSDF; keV): cobalto {#}, {#} y {#}; cadmio {#}, {#}; bario {#}, {#}, {#}, {#}, {#} y {#}; sodio {#}, {#} (de la aniquilación de positrones) y {#}; cesio {#}, {#}; manganeso {#}, {#}; zinc {#}, {#}; cobalto {#}, {#} y {#}.",
"Two photopeaks of a source sit at channels {#} and {#} and are known to be {#} keV and {#} keV. Find \\(a\\) and \\(b\\) for a straight line calibration.":
  "Dos fotopicos de una fuente están en los canales {#} y {#} y se sabe que son de {#} keV y {#} keV. Encuentra \\(a\\) y \\(b\\) para una calibración lineal.",
"With that calibration, what energy is a peak at channel {#}?":
  "Con esa calibración, ¿qué energía tiene un pico en el canal {#}?",
"Find the Compton edge for the {#} keV line of cesium {#}.":
  "Encuentra el borde Compton para la línea de {#} keV del cesio {#}.",
"Why does a sodium {#} source give a line at {#} keV, although no nuclear level of neon {#} has that energy?":
  "¿Por qué una fuente de sodio {#} da una línea en {#} keV, aunque ningún nivel nuclear del neón {#} tiene esa energía?",
"No hazards in the virtual lab. Real check sources are sealed and weak (about {#} µCi), but keep the time near them short and the distance large.":
  "No hay peligros en el laboratorio virtual. Las fuentes de prueba reales están selladas y son débiles (cerca de {#} µCi), pero mantén corto el tiempo cerca de ellas y grande la distancia.",
"<strong>Calibration.</strong> Start from the Energy calibration setup (cesium {#} at {#} cm, {#} s of live time). Acquire, set a region of interest across the photopeak, and record a reading. Then, one source at a time, record every clear photopeak of cobalt {#}, sodium {#}, manganese {#} and cobalt {#} ({#} keV), each acquired for {#} s at the same distance. Clear the spectrum before each new source.":
  "<strong>Calibración.</strong> Empieza con la configuración Calibración en energía (cesio {#} a {#} cm, {#} s de tiempo vivo). Adquiere, fija una región de interés a través del fotopico y registra una lectura. Luego, una fuente a la vez, registra cada fotopico claro de cobalto {#}, sodio {#}, manganeso {#} y cobalto {#} ({#} keV), cada uno adquirido durante {#} s a la misma distancia. Borra el espectro antes de cada fuente nueva.",
"<strong>Unknown source.</strong> Export your readings, Clear them, and pick the Unknown source setup. Acquire for {#} s of live time and record every clear photopeak.":
  "<strong>Fuente desconocida.</strong> Exporta tus lecturas, bórralas y elige la configuración Fuente desconocida. Adquiere durante {#} s de tiempo vivo y registra cada fotopico claro.",
"<span>B</span>Source":
  "<span>B</span>Fuente",
"<span>C</span>Centroid (channel)":
  "<span>C</span>Centroide (canal)",
"<span>D</span>Centroid uncertainty (channel)":
  "<span>D</span>Incertidumbre del centroide (canal)",
"<span>E</span>Known energy E (keV)":
  "<span>E</span>Energía conocida E (keV)",
"<span>F</span>Net counts":
  "<span>F</span>Cuentas netas",
"<span>G</span>FWHM (channel)":
  "<span>G</span>FWHM (canal)",
"<span>H</span>Energy from the demo’s calibration (keV)":
  "<span>H</span>Energía según la calibración de la demo (keV)",
"Source, row {#}":
  "Fuente, fila {#}",
"Centroid (channel), row {#}":
  "Centroide (canal), fila {#}",
"Centroid uncertainty (channel), row {#}":
  "Incertidumbre del centroide (canal), fila {#}",
"Known energy E (keV), row {#}":
  "Energía conocida E (keV), fila {#}",
"Net counts, row {#}":
  "Cuentas netas, fila {#}",
"FWHM (channel), row {#}":
  "FWHM (canal), fila {#}",
"Energy from the demo’s calibration (keV), row {#}":
  "Energía según la calibración de la demo (keV), fila {#}",
"Type the known energy of each line yourself. The last column is filled only when the demo has a calibration of its own (the Unknown source setup has one).":
  "Escribe tú mismo la energía conocida de cada línea. La última columna se llena solo cuando la demo tiene una calibración propia (la configuración Fuente desconocida tiene una).",
"Graph the known energy against the centroid channel for the calibration sources. Find the slope \\(b\\) (keV per channel) and the intercept \\(a\\). Are the residuals small enough for a straight line?":
  "Grafica la energía conocida en función del canal del centroide para las fuentes de calibración. Encuentra la pendiente \\(b\\) (keV por canal) y la ordenada al origen \\(a\\). ¿Son los residuos lo bastante pequeños para una recta?",
"Convert each FWHM to keV with your slope, and find the resolution FWHM/E for each line. How does it change with energy? Test whether it goes as \\(1/\\sqrt{E}\\).":
  "Convierte cada FWHM a keV con tu pendiente, y encuentra la resolución FWHM/E para cada línea. ¿Cómo cambia con la energía? Pon a prueba si va como \\(1/\\sqrt{E}\\).",
"Use your calibration to find the energy of each photopeak of the unknown source. Which source is it?":
  "Usa tu calibración para encontrar la energía de cada fotopico de la fuente desconocida. ¿Qué fuente es?",
"Compare your energies for the unknown with the demo’s own calibration in the last column.":
  "Compara tus energías para la desconocida con la calibración propia de la demo en la última columna.",
"Use the centroid uncertainties and the scatter of the calibration residuals to estimate the uncertainty of an energy read from your calibration. Is it small enough to tell {#} keV (zinc {#}) from {#} keV (cobalt {#})? What about {#} keV from {#} keV?":
  "Usa las incertidumbres del centroide y la dispersión de los residuos de la calibración para estimar la incertidumbre de una energía leída con tu calibración. ¿Es lo bastante pequeña para distinguir {#} keV (zinc {#}) de {#} keV (cobalto {#})? ¿Y {#} keV de {#} keV?",
"Why is the photopeak the useful part of the spectrum for identifying a source?":
  "¿Por qué el fotopico es la parte útil del espectro para identificar una fuente?",
"What makes the continuum below the photopeak, and where should it end for manganese {#}?":
  "¿Qué produce el continuo debajo del fotopico, y dónde debería terminar para el manganeso {#}?",
"Particle physics detectors (§{#}) also use scintillators. What does the detector measure about each particle, and what limits how well it can tell two energies apart?":
  "Los detectores de física de partículas (§{#}) también usan centelleadores. ¿Qué mide el detector sobre cada partícula, y qué limita qué tan bien puede distinguir dos energías?",
"Why does a larger crystal give a larger photopeak compared with the Compton continuum?":
  "¿Por qué un cristal más grande da un fotopico más grande comparado con el continuo Compton?",
"Prelab answers, both table copies, the calibration graph with its fit, the resolution against energy, the energies and identity of the unknown, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ambas copias de la tabla, la gráfica de calibración con su ajuste, la resolución en función de la energía, las energías y la identidad de la desconocida, y las respuestas a las preguntas. Identifica los datos simulados.",
"Energy of the Compton edge":
  "Energía del borde Compton",
"Intercept of the energy calibration":
  "Ordenada al origen de la calibración en energía",
"Slope of the energy calibration":
  "Pendiente de la calibración en energía",
"Centroid channel of the photopeak; in mₑc², the speed of light":
  "Canal del centroide del fotopico; en mₑc², la rapidez de la luz",
"Gamma Spectroscopy":
  "Espectroscopía gamma"
});
