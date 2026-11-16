/* ws/mp-charged-particles-bragg in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/mp-charged-particles-bragg', {
"Particle and material":
  "Partícula y material",
"Kinetic energy T (MeV)":
  "Energía cinética T (MeV)",
"Mass stopping power S/ρ (MeV cm²/g)":
  "Poder de frenado másico S/ρ (MeV cm²/g)",
"CSDA range R (g/cm²)":
  "Alcance CSDA R (g/cm²)",
"Relative stopping power":
  "Poder de frenado relativo",
"Beam and slab":
  "Haz y placa",
"Depth z (cm)":
  "Profundidad z (cm)",
"Dose (% of the peak)":
  "Dosis (% del pico)",
"Mean energy (MeV)":
  "Energía media (MeV)",
"Entrance dose (% of the peak)":
  "Dosis de entrada (% del pico)",
"Peak depth (cm)":
  "Profundidad del pico (cm)",
"PSTAR range (cm)":
  "Alcance PSTAR (cm)",
"R_80 − PSTAR (mm)":
  "R_80 − PSTAR (mm)",
"Slab":
  "Placa",
"Thickness t (cm)":
  "Espesor t (cm)",
"R_80 with the slab (cm)":
  "R_80 con la placa (cm)",
"Shift (cm)":
  "Desplazamiento (cm)",
"t_w = shift + t (cm)":
  "t_w = desplazamiento + t (cm)",
"Measured t_w/t":
  "t_w/t medido",
"Relative stopping power from Part {#}":
  "Poder de frenado relativo de la Parte {#}",
"Charged Particles in Matter: The Bragg Peak and Slabs | VirtualDemos":
  "Partículas cargadas en la materia: el pico de Bragg y las placas | VirtualDemos",
"Charged Particles in Matter: The Bragg Peak and Slabs":
  "Partículas cargadas en la materia: el pico de Bragg y las placas",
"<strong>Setups in the demo:</strong> Proton {#} MeV; Proton {#} MeV; Proton {#} MeV; Bone in the way; Lung in the way; Lead range shifter; Alpha {#} MeV/u; Carbon {#} MeV/u; No straggling; Stopping power curves; Range against PSTAR. This worksheet uses Stopping power curves, the Proton {#} MeV and Proton {#} MeV setups, No straggling and Bone in the way.":
  "<strong>Configuraciones en la demo:</strong> Protón {#} MeV; Protón {#} MeV; Protón {#} MeV; Hueso en el camino; Pulmón en el camino; Cambiador de alcance de plomo; Alfa {#} MeV/u; Carbono {#} MeV/u; Sin fluctuación; Curvas de poder de frenado; Alcance contra PSTAR. Esta hoja de trabajo usa Curvas de poder de frenado, las configuraciones Protón {#} MeV y Protón {#} MeV, Sin fluctuación y Hueso en el camino.",
"<strong>Beam in water</strong> is a side view of a water tank, with or without a slab of another material in front of the water. Fire sends particles in one at a time; each track is drawn colored by its energy, and a dot marks a proton lost to a nuclear reaction. The graph under the tank shows the dose against depth: the model’s curve for a broad beam, and the dose the drawn tracks have put down so far. Clear tracks starts the count again.":
  "<strong>Haz en agua</strong> es una vista lateral de un tanque de agua, con o sin una placa de otro material delante del agua. Disparar envía partículas una a una; cada traza se dibuja coloreada según su energía, y un punto marca un protón perdido por una reacción nuclear. La gráfica bajo el tanque muestra la dosis en función de la profundidad: la curva del modelo para un haz amplio, y la dosis que han depositado hasta ahora las trazas dibujadas. Borrar trazas reinicia la cuenta.",
"The detector is a small chamber at the depth set on the card (drag it in the tank or on the graph, or type a depth). The readouts give the dose there as a percentage of the peak, the mean energy of the protons still going there, and the stopping power at that energy.":
  "El detector es una cámara pequeña a la profundidad fijada en la tarjeta (arrástralo en el tanque o en la gráfica, o escribe una profundidad). Las lecturas dan la dosis ahí como porcentaje del pico, la energía media de los protones que todavía siguen ahí y el poder de frenado a esa energía.",
"<strong>Stopping power</strong> graphs the mass stopping power against kinetic energy on log scales, for the particle and the material chosen on the card, and its readouts give the relative stopping power (per centimeter, against water).":
  "<strong>Poder de frenado</strong> grafica el poder de frenado másico en función de la energía cinética en escalas logarítmicas, para la partícula y el material elegidos en la tarjeta, y sus lecturas dan el poder de frenado relativo (por centímetro, respecto al agua).",
"Blind (in the Lab fold) hides the model’s ranges, peak depth and widths, so you find them with the detector.":
  "A ciegas (en el pliegue Laboratorio) oculta los alcances, la profundidad del pico y los anchos del modelo, para que los encuentres con el detector.",
"Record reading stores, in the Beam view, the beam, the slab, the detector depth and what it reads; in the Stopping power view, the particle, material, energy, stopping power, range and stopping power relative to water. Export to worksheet sends graph readings to the first Data table and beam readings to the second. Clear starts a new series.":
  "Registrar lectura guarda, en la vista Haz, el haz, la placa, la profundidad del detector y lo que este lee; en la vista Poder de frenado, la partícula, el material, la energía, el poder de frenado, el alcance y el poder de frenado relativo al agua. Exportar a la hoja envía las lecturas de la gráfica a la primera tabla de datos y las lecturas del haz a la segunda. Borrar empieza una serie nueva.",
"Measure the Bragg peak and its distal edge at three energies, compare the range with the NIST PSTAR table, and find the water equivalent thickness of bone, lung, PMMA and lead.":
  "Mide el pico de Bragg y su borde distal a tres energías, compara el alcance con la tabla PSTAR del NIST, y halla el espesor equivalente en agua de hueso, pulmón, PMMA y plomo.",
"A charged particle moving through matter loses energy mostly to the electrons it passes. The mean energy lost per unit path is the stopping power \\(S = -dE/dx\\); divided by the density \\(\\rho\\) it becomes the mass stopping power \\(S/\\rho\\), in MeV cm²/g. For protons it is given by the Bethe formula, and below a few hundred MeV it grows as the proton slows, roughly as \\(1/\\beta^2\\). If the particle loses energy continuously at the mean rate, the path it travels before stopping is the CSDA (continuous slowing down approximation) range \\(R(E) = \\int_0^E dE'/S(E')\\).":
  "Una partícula cargada que se mueve a través de la materia pierde energía sobre todo en los electrones que encuentra. La energía media perdida por unidad de trayectoria es el poder de frenado \\(S = -dE/dx\\); dividido entre la densidad \\(\\rho\\) se vuelve el poder de frenado másico \\(S/\\rho\\), en MeV cm²/g. Para los protones lo da la fórmula de Bethe, y por debajo de unos cientos de MeV crece conforme el protón se frena, aproximadamente como \\(1/\\beta^2\\). Si la partícula pierde energía de forma continua a la tasa media, la trayectoria que recorre antes de detenerse es el alcance CSDA (aproximación de frenado continuo) \\(R(E) = \\int_0^E dE'/S(E')\\).",
"The dose a broad beam puts down at depth \\(z\\) is the fluence times \\(S/\\rho\\) there. As the protons slow, \\(S\\) rises, so the dose rises with depth and peaks just before the protons stop: the Bragg peak. Energy loss is a random process, so protons of the same energy stop at slightly different depths (range straggling, a spread of about {#} % of the range for protons in water). The straggling, any energy spread of the beam and the loss of about {#} % of the protons per centimeter to nuclear reactions set the height and width of the peak.":
  "La dosis que un haz ancho deposita a la profundidad \\(z\\) es la fluencia por \\(S/\\rho\\) ahí. Conforme los protones se frenan, \\(S\\) aumenta, así que la dosis aumenta con la profundidad y llega a su máximo justo antes de que los protones se detengan: el pico de Bragg. La pérdida de energía es un proceso aleatorio, así que protones de la misma energía se detienen a profundidades ligeramente distintas (fluctuación del alcance, una dispersión de cerca de {#} % del alcance para protones en agua). La fluctuación, cualquier dispersión de energía del haz y la pérdida de cerca de {#} % de los protones por centímetro en reacciones nucleares determinan la altura y el ancho del pico.",
"A slab of another material moves the peak. Its water equivalent thickness \\(t_w\\) is the depth of water that takes away the same energy; to a good approximation \\(t_w = t \\, \\rho \\, (S/\\rho)_m / (S/\\rho)_w\\), the thickness times the relative stopping power.":
  "Una placa de otro material mueve el pico. Su espesor equivalente en agua \\(t_w\\) es la profundidad de agua que quita la misma energía; en buena aproximación \\(t_w = t \\, \\rho \\, (S/\\rho)_m / (S/\\rho)_w\\), el espesor por el poder de frenado relativo.",
"NIST PSTAR CSDA ranges of protons in liquid water (from the NIST PSTAR database, Berger, Coursey, Zucker and Chang, with the methods of ICRU Report {#}; values as tabulated on the UCL proton therapy wiki):":
  "Alcances CSDA de protones en agua líquida de NIST PSTAR (de la base de datos NIST PSTAR, Berger, Coursey, Zucker y Chang, con los métodos del Informe ICRU {#}; valores como se tabulan en la wiki de protonterapia de UCL):",
"A proton beam of {#} MeV crosses {#} cm of compact bone ({#} g/cm³) whose mass stopping power is {#} times that of water. Find the relative stopping power, the water equivalent thickness, and how far the Bragg peak moves toward the surface.":
  "Un haz de protones de {#} MeV atraviesa {#} cm de hueso compacto ({#} g/cm³) cuyo poder de frenado másico es {#} veces el del agua. Encuentra el poder de frenado relativo, el espesor equivalente en agua y cuánto se mueve el pico de Bragg hacia la superficie.",
"No hazards in the virtual lab. In a real proton beam room, nobody stays in the room while the beam is on; the treatment room is entered only after the beam is off and the interlocks allow it.":
  "No hay riesgos en el laboratorio virtual. En una sala de haz de protones real, nadie permanece en la sala mientras el haz está encendido; a la sala de tratamiento solo se entra después de apagar el haz y cuando los enclavamientos lo permiten.",
"<strong>Part {#}: Relative stopping powers.</strong> Choose the Stopping power curves setup and set Energy per nucleon to {#} MeV (click its value to type). Choosing each in Material for the graph, record a reading for Compact bone, Lung tissue, PMMA and Lead. Press Export to worksheet, then Clear.":
  "<strong>Parte {#}: Poderes de frenado relativos.</strong> Elige la configuración Curvas de poder de frenado y fija Energía por nucleón en {#} MeV (haz clic en su valor para escribirlo). Eligiendo cada uno en Material para la gráfica, registra una lectura para Hueso compacto, Tejido pulmonar, PMMA y Plomo. Pulsa Exportar a la hoja y luego Borrar.",
"<strong>Part {#}: The Bragg curve.</strong> ({#}) Open the Lab fold and check Blind: hide the model’s ranges, peak and widths. Choose the Proton {#} MeV setup (energy spread {#}, straggling and nuclear reactions on). ({#}) Set Detector depth (click its value to type a depth, or drag the detector) and read At the detector: dose. Record a reading at the entrance (depth {#}), at the peak (the depth of largest dose, to {#} cm) and at the depths past the peak, to {#} cm, where the dose is nearest {#} %, {#} % and {#} % of the peak. ({#}) Do the same at {#} MeV (the Proton {#} MeV setup), then at {#} MeV (type it into Energy per nucleon). ({#}) Choose the No straggling setup ({#} MeV) and record a reading at its peak depth. Export the readings to the worksheet before you clear them. The Bragg curves table takes these depths: the {#} %, {#} % and {#} % depths are \\(R_{90}\\), \\(R_{80}\\) and \\(R_{20}\\).":
  "<strong>Parte {#}: La curva de Bragg.</strong> ({#}) Abre el pliegue Laboratorio y marca A ciegas: oculta los alcances, el pico y los anchos del modelo. Elige la configuración Protón {#} MeV (dispersión de energía {#}, con fluctuación y reacciones nucleares activadas). ({#}) Fija la Profundidad del detector (haz clic en su valor para escribir una profundidad, o arrastra el detector) y lee En el detector: dosis. Registra una lectura a la entrada (profundidad {#}), en el pico (la profundidad de mayor dosis, con precisión de {#} cm) y a las profundidades más allá del pico, con precisión de {#} cm, donde la dosis es la más cercana a {#} %, {#} % y {#} % del pico. ({#}) Haz lo mismo a {#} MeV (la configuración Protón {#} MeV) y luego a {#} MeV (escríbelo en Energía por nucleón). ({#}) Elige la configuración Sin fluctuación ({#} MeV) y registra una lectura a la profundidad de su pico. Exporta las lecturas a la hoja antes de borrarlas. La tabla Curvas de Bragg usa estas profundidades: las profundidades de {#} %, {#} % y {#} % son \\(R_{90}\\), \\(R_{80}\\) y \\(R_{20}\\).",
"<strong>Part {#}: Slabs in the beam.</strong> Keep Blind on. ({#}) Choose the Bone in the way setup ({#} MeV, {#} cm of compact bone, nuclear reactions on). Find the depth past the peak where the dose is nearest {#} %, as in Part {#}, and record a reading there. ({#}) In Slab before the water, choose Lung tissue (ICRP) and set Slab thickness to {#} cm; then PMMA (acrylic) at {#} cm; then Lead at {#} cm; then None. Find and record the {#} % depth for each. Export the readings to the worksheet. The shift in the Water equivalent thickness table is the no slab \\(R_{80}\\) minus the \\(R_{80}\\) with the slab.":
  "<strong>Parte {#}: Placas en el haz.</strong> Deja A ciegas activado. ({#}) Elige la configuración Hueso en el camino ({#} MeV, {#} cm de hueso compacto, con reacciones nucleares). Encuentra la profundidad más allá del pico donde la dosis es la más cercana a {#} %, como en la Parte {#}, y registra una lectura ahí. ({#}) En Placa antes del agua, elige Tejido pulmonar (ICRP) y fija el Espesor de la placa en {#} cm; luego PMMA (acrílico) a {#} cm; luego Plomo a {#} cm; luego Ninguna. Encuentra y registra la profundidad de {#} % para cada una. Exporta las lecturas a la hoja. El desplazamiento en la tabla Espesor equivalente en agua es el \\(R_{80}\\) sin placa menos el \\(R_{80}\\) con la placa.",
"<span>B</span>Particle and material":
  "<span>B</span>Partícula y material",
"<span>C</span>Kinetic energy \\(T\\) (MeV)":
  "<span>C</span>Energía cinética \\(T\\) (MeV)",
"<span>D</span>Mass stopping power \\(S/\\rho\\) (MeV cm²/g)":
  "<span>D</span>Poder de frenado másico \\(S/\\rho\\) (MeV cm²/g)",
"<span>E</span>CSDA range \\(R\\) (g/cm²)":
  "<span>E</span>Alcance CSDA \\(R\\) (g/cm²)",
"<span>F</span>Relative stopping power":
  "<span>F</span>Poder de frenado relativo",
"Particle and material, row {#}":
  "Partícula y material, fila {#}",
"Kinetic energy T (MeV), row {#}":
  "Energía cinética T (MeV), fila {#}",
"Mass stopping power S/ρ (MeV cm²/g), row {#}":
  "Poder de frenado másico S/ρ (MeV cm²/g), fila {#}",
"CSDA range R (g/cm²), row {#}":
  "Alcance CSDA R (g/cm²), fila {#}",
"Relative stopping power, row {#}":
  "Poder de frenado relativo, fila {#}",
"<span>B</span>Beam and slab":
  "<span>B</span>Haz y placa",
"<span>C</span>Depth \\(z\\) (cm)":
  "<span>C</span>Profundidad \\(z\\) (cm)",
"<span>D</span>Dose (% of the peak)":
  "<span>D</span>Dosis (% del pico)",
"<span>E</span>Mean energy (MeV)":
  "<span>E</span>Energía media (MeV)",
"Beam and slab, row {#}":
  "Haz y placa, fila {#}",
"Depth z (cm), row {#}":
  "Profundidad z (cm), fila {#}",
"Dose (% of the peak), row {#}":
  "Dosis (% del pico), fila {#}",
"Mean energy (MeV), row {#}":
  "Energía media (MeV), fila {#}",
"Bragg curves":
  "Curvas de Bragg",
"<span>B</span>Entrance dose (% of the peak)":
  "<span>B</span>Dosis de entrada (% del pico)",
"<span>C</span>Peak depth (cm)":
  "<span>C</span>Profundidad del pico (cm)",
"<span>G</span>PSTAR range (cm)":
  "<span>G</span>Alcance PSTAR (cm)",
"<span>H</span>\\(R_{80}\\) − PSTAR (mm)":
  "<span>H</span>\\(R_{80}\\) − PSTAR (mm)",
"T (MeV), row {#}":
  "T (MeV), fila {#}",
"Entrance dose (% of the peak), row {#}":
  "Dosis de entrada (% del pico), fila {#}",
"Peak depth (cm), row {#}":
  "Profundidad del pico (cm), fila {#}",
"R_90 (cm), row {#}":
  "R_90 (cm), fila {#}",
"R_80 (cm), row {#}":
  "R_80 (cm), fila {#}",
"R_20 (cm), row {#}":
  "R_20 (cm), fila {#}",
"PSTAR range (cm), row {#}":
  "Alcance PSTAR (cm), fila {#}",
"R_80 − PSTAR (mm), row {#}":
  "R_80 − PSTAR (mm), fila {#}",
"R₈{#} − PSTAR (mm)":
  "R₈{#} − PSTAR (mm)",
"Water equivalent thickness":
  "Espesor equivalente en agua",
"<span>A</span>Slab":
  "<span>A</span>Placa",
"<span>B</span>Thickness \\(t\\) (cm)":
  "<span>B</span>Espesor \\(t\\) (cm)",
"<span>C</span>\\(R_{80}\\) with the slab (cm)":
  "<span>C</span>\\(R_{80}\\) con la placa (cm)",
"<span>D</span>Shift (cm)":
  "<span>D</span>Desplazamiento (cm)",
"<span>E</span>\\(t_w\\) = shift + \\(t\\) (cm)":
  "<span>E</span>\\(t_w\\) = desplazamiento + \\(t\\) (cm)",
"<span>F</span>Measured \\(t_w/t\\)":
  "<span>F</span>\\(t_w/t\\) medido",
"<span>G</span>Relative stopping power from Part {#}":
  "<span>G</span>Poder de frenado relativo de la Parte {#}",
"Slab, row {#}":
  "Placa, fila {#}",
"Thickness t (cm), row {#}":
  "Espesor t (cm), fila {#}",
"R_80 with the slab (cm), row {#}":
  "R_80 con la placa (cm), fila {#}",
"Shift (cm), row {#}":
  "Desplazamiento (cm), fila {#}",
"t_w = shift + t (cm), row {#}":
  "t_w = desplazamiento + t (cm), fila {#}",
"Measured t_w/t, row {#}":
  "t_w/t medido, fila {#}",
"Relative stopping power from Part {#}, row {#}":
  "Poder de frenado relativo de la Parte {#}, fila {#}",
"R₈{#} with the slab (cm)":
  "R₈{#} con la placa (cm)",
"Fill in the Bragg curves table. How does \\(R_{80}\\) compare with the CSDA range? How do the entrance dose and the width \\(R_{20} - R_{80}\\) change with energy? What does the No straggling peak depth tell you about where the end of range is compared with the peak?":
  "Llena la tabla de curvas de Bragg. ¿Cómo se compara \\(R_{80}\\) con el alcance CSDA? ¿Cómo cambian la dosis de entrada y el ancho \\(R_{20} - R_{80}\\) con la energía? ¿Qué te dice la profundidad del pico de Sin fluctuación sobre dónde está el final del alcance comparado con el pico?",
"Fill in the Water equivalent thickness table and compare the measured \\(t_w/t\\) with the relative stopping power at {#} MeV from Part {#}. Why might they differ slightly?":
  "Llena la tabla de espesor equivalente en agua y compara el \\(t_w/t\\) medido con el poder de frenado relativo a {#} MeV de la Parte {#}. ¿Por qué podrían diferir un poco?",
"The detector depth is read to {#} cm, so each depth found by stepping it is uncertain by about half a step; on the distal edge the dose changes by several percent per {#} cm, so the dose you read at the depth nearest a level also tells you how far from the level you are. The shift behind a slab is the difference of two \\(R_{80}\\) readings, so its uncertainty is larger than one reading’s. The model itself differs from PSTAR by less than {#} mm in range from {#} to {#} MeV; compare that with your other uncertainties.":
  "La profundidad del detector se lee con precisión de {#} cm, así que cada profundidad encontrada al avanzar paso a paso tiene una incertidumbre de más o menos medio paso; en el borde distal la dosis cambia varios por ciento cada {#} cm, así que la dosis que lees a la profundidad más cercana a un nivel también te dice qué tan lejos estás de ese nivel. El desplazamiento detrás de una placa es la diferencia de dos lecturas de \\(R_{80}\\), así que su incertidumbre es mayor que la de una sola lectura. El modelo mismo difiere de PSTAR en menos de {#} mm de alcance de {#} a {#} MeV; compáralo con tus otras incertidumbres.",
"Treatment plans often allow {#} % of the range plus {#} mm for range uncertainty. For a tumor whose distal edge is {#} cm deep, how many millimeters is that, and how does it compare with the distal falloff width \\(R_{20} - R_{80}\\) you measured?":
  "Los planes de tratamiento suelen permitir {#} % del alcance más {#} mm por la incertidumbre del alcance. Para un tumor cuyo borde distal está a {#} cm de profundidad, ¿cuántos milímetros son, y cómo se compara eso con el ancho de la caída distal \\(R_{20} - R_{80}\\) que mediste?",
"Prelab answer, the tables with their graphs, the ranges, widths and water equivalent thicknesses with uncertainties and comparisons with PSTAR, and the answer to the question. Identify simulated data.":
  "Respuestas del prelaboratorio, las tablas con sus gráficas, los alcances, los anchos y los espesores equivalentes en agua con incertidumbres y comparaciones con PSTAR, y la respuesta a la pregunta. Identifica los datos simulados.",
"Kinetic energy of the particle":
  "Energía cinética de la partícula",
"Kinetic energy, the variable of integration":
  "Energía cinética, la variable de integración",
"CSDA range, the path a particle travels while slowing to rest at the mean rate":
  "Alcance CSDA, el camino que recorre una partícula al frenarse hasta el reposo a la tasa media",
"divide by the density for cm":
  "divide entre la densidad para obtener cm",
"Depth beyond the peak where the dose has fallen to {#} % of the peak":
  "Profundidad más allá del pico donde la dosis ha bajado a {#} % del pico",
"Stopping power, the mean energy a particle loses per unit path, −dE/dx":
  "Poder de frenado, la energía media que pierde una partícula por unidad de trayectoria, −dE/dx",
"divided by ρ it is the mass stopping power, MeV cm²/g":
  "dividido entre ρ es el poder de frenado másico, MeV cm²/g",
"Speed of the particle as a fraction of the speed of light, v/c":
  "Rapidez de la partícula como fracción de la rapidez de la luz, v/c",
"Density of the material":
  "Densidad del material",
"Thickness of a slab":
  "Espesor de una placa",
"Water equivalent thickness of a slab, the depth of water that takes away the same energy":
  "Espesor equivalente en agua de una placa, la profundidad de agua que quita la misma energía",
"Path length traveled in the material":
  "Longitud de trayectoria recorrida en el material",
"Depth in the tank":
  "Profundidad en el tanque",
"Charged Particles in Matter":
  "Partículas cargadas en la materia",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>"
});
