/* ws/pn-junction in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/pn-junction', {
"Bias V (V)":
  "Polarización V (V)",
"ln(I / {#} A)":
  "ln(I / {#} A)",
"LED material":
  "Material del LED",
"Peak wavelength λ (nm)":
  "Longitud de onda máxima λ (nm)",
"Photon energy hc/λ (eV)":
  "Energía del fotón hc/λ (eV)",
"Table {#} band gap (eV)":
  "Banda prohibida de la Tabla {#} (eV)",
"The pn Junction Diode and LEDs | VirtualDemos":
  "El diodo de unión pn y los LED | VirtualDemos",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"The pn Junction Diode and LEDs":
  "El diodo de unión pn y los LED",
"<strong>Setups in the demo:</strong> Diode; LED colors (these two use the Junction view, the subject of this worksheet); Rock salt; Cesium chloride (the Lattice energy worksheet); Levels become bands; Filling the bands (the Energy bands worksheet); Pure silicon; n type silicon (the Doping worksheet).":
  "<strong>Configuraciones en la demo:</strong> Diodo; Colores de LED (estas dos usan la vista Unión, el tema de esta hoja de trabajo); Sal de roca; Cloruro de cesio (la hoja de trabajo de energía de red); Los niveles se vuelven bandas; Llenado de las bandas (la hoja de trabajo de bandas de energía); Silicio puro; Silicio tipo n (la hoja de trabajo de dopado).",
"A silicon pn junction is wired to a battery and an ammeter. Set the bias from −{#} V to +{#} V (positive means the p side is positive: forward bias), the temperature from {#} K to {#} K, the saturation current at {#} K from {#}⁻¹⁴ A to {#}⁻⁸ A, and the doping of each side.":
  "Una unión pn de silicio está conectada a una batería y a un amperímetro. Fija la polarización de −{#} V a +{#} V (positiva significa que el lado p es positivo: polarización directa), la temperatura de {#} K a {#} K, la corriente de saturación a {#} K de {#}⁻¹⁴ A a {#}⁻⁸ A, y el dopado de cada lado.",
"The picture shows the holes in the p side, the electrons in the n side and the fixed charged ions in the depletion region between them, to scale; below it, the band diagram across the junction with the Fermi level on each side.":
  "La imagen muestra los huecos en el lado p, los electrones en el lado n y los iones cargados fijos en la región de agotamiento entre ellos, a escala; debajo, el diagrama de bandas a través de la unión con el nivel de Fermi de cada lado.",
"The diode is ideal: there is no series resistance and no breakdown, so above about {#} V the current is larger than a real diode would pass.":
  "El diodo es ideal: no hay resistencia en serie ni ruptura, así que por encima de unos {#} V la corriente es mayor de la que dejaría pasar un diodo real.",
"In LED mode, pick an LED material or any band gap; the spectrometer reads the peak wavelength of the light. LED readings are not recorded: write them in the LED table by hand.":
  "En el modo LED, elige un material de LED o cualquier banda prohibida; el espectrómetro lee la longitud de onda máxima de la luz. Las lecturas del LED no se registran: escríbelas a mano en la tabla de LED.",
"The graphs show the current against the bias, and \\(\\ln(I/1\\ \\text{A})\\) against the forward bias, with your readings as dots; in LED mode, the spectrum and the photon energy against wavelength.":
  "Las gráficas muestran la corriente en función de la polarización, y \\(\\ln(I/1\\ \\text{A})\\) en función de la polarización directa, con tus lecturas como puntos; en el modo LED, el espectro y la energía del fotón en función de la longitud de onda.",
"Record reading stores the temperature, bias and current (and the settings). Export to worksheet sends the readings to the first Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la temperatura, la polarización y la corriente (y los ajustes). Exportar a la hoja envía las lecturas a la primera tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Blind hides the theory curves, the thermal voltage, the built in potential and the barrier height.":
  "A ciegas oculta las curvas teóricas, el voltaje térmico, el potencial interno y la altura de la barrera.",
"Measure the current through a pn junction diode in forward and reverse bias, use the exponential rise of the forward current to find \\(e/k\\), and relate the color of an LED to its band gap.":
  "Mide la corriente a través de un diodo de unión pn en polarización directa e inversa, usa el aumento exponencial de la corriente directa para encontrar \\(e/k\\), y relaciona el color de un LED con su banda prohibida.",
"Where p type and n type silicon meet, electrons diffuse into the p side and holes into the n side, leaving a depletion region of fixed charged ions whose field stops further diffusion (§{#}). A forward bias \\(V\\) lowers the barrier by \\(eV\\), and the number of carriers able to cross grows by the Boltzmann factor \\(e^{eV/kT}\\); a reverse bias raises it. The net current is":
  "Donde se juntan el silicio tipo p y el tipo n, los electrones se difunden hacia el lado p y los huecos hacia el lado n, dejando una región de agotamiento de iones cargados fijos cuyo campo detiene la difusión (§{#}). Una polarización directa \\(V\\) baja la barrera en \\(eV\\), y el número de portadores capaces de cruzar crece por el factor de Boltzmann \\(e^{eV/kT}\\); una polarización inversa la sube. La corriente neta es",
"\\[I = I_0\\left(e^{eV/kT} - 1\\right),\\]":
  "\\[I = I_0\\left(e^{eV/kT} - 1\\right),\\]",
"where \\(I_0\\) is the small saturation current that flows in reverse bias. For \\(eV \\gg kT\\), \\(\\ln I \\approx \\ln I_0 + \\dfrac{e}{kT}V\\), so a graph of \\(\\ln I\\) against \\(V\\) is a straight line of slope \\(e/kT\\).":
  "donde \\(I_0\\) es la pequeña corriente de saturación que circula en polarización inversa. Para \\(eV \\gg kT\\), \\(\\ln I \\approx \\ln I_0 + \\dfrac{e}{kT}V\\), así que una gráfica de \\(\\ln I\\) en función de \\(V\\) es una recta de pendiente \\(e/kT\\).",
"In a light emitting diode, an electron crossing the junction drops from the conduction band into a hole in the valence band and gives off a photon of energy close to the band gap: \\(hf = hc/\\lambda \\approx E_g\\), with \\(hc = 1240\\) eV·nm.":
  "En un diodo emisor de luz, un electrón que cruza la unión cae de la banda de conducción a un hueco de la banda de valencia y emite un fotón de energía cercana a la banda prohibida: \\(hf = hc/\\lambda \\approx E_g\\), con \\(hc = 1240\\) eV·nm.",
"At {#} K, what is \\(kT/e\\) in millivolts? By what factor does the forward current grow for each {#} V increase in bias?":
  "A {#} K, ¿cuánto vale \\(kT/e\\) en milivolts? ¿En qué factor crece la corriente directa por cada aumento de {#} V en la polarización?",
"With \\(I_0 = 1\\) pA at {#} K, find the current at \\(V = 0.5\\) V and at \\(V = -0.5\\) V.":
  "Con \\(I_0 = 1\\) pA a {#} K, encuentra la corriente en \\(V = 0.5\\) V y en \\(V = -0.5\\) V.",
"The book’s Example {#} has a diode with \\(I_0 = 2.2 \\times 10^{-8}\\) A passing {#} A at {#} V. Find \\(eV/kT\\) and the temperature.":
  "El Ejemplo {#} del libro tiene un diodo con \\(I_0 = 2.2 \\times 10^{-8}\\) A que deja pasar {#} A a {#} V. Encuentra \\(eV/kT\\) y la temperatura.",
"What band gap gives red light of {#} nm? Blue light of {#} nm?":
  "¿Qué banda prohibida da luz roja de {#} nm? ¿Y luz azul de {#} nm?",
"<strong>Forward and reverse at {#} K.</strong> Pick Diode ({#} K, \\(I_0\\) = {#} pA at {#} K). Record readings at −{#}, −{#}, −{#}, −{#} and {#} V, then from {#} V to {#} V in steps of {#} V.":
  "<strong>Directa e inversa a {#} K.</strong> Elige Diodo ({#} K, \\(I_0\\) = {#} pA a {#} K). Registra lecturas en −{#}, −{#}, −{#}, −{#} y {#} V, y luego de {#} V a {#} V en pasos de {#} V.",
"<strong>Other temperatures.</strong> Export and clear the readings. At {#} K, record the forward current from {#} V to {#} V in steps of {#} V. Export, clear, and repeat at {#} K, then export again.":
  "<strong>Otras temperaturas.</strong> Exporta y borra las lecturas. A {#} K, registra la corriente directa de {#} V a {#} V en pasos de {#} V. Exporta, borra y repite a {#} K, y luego exporta de nuevo.",
"<strong>LEDs.</strong> Pick LED colors. For each LED material, write the spectrometer’s peak wavelength in the LED table. Then pick Any band gap and find the gaps that give the edges of the visible spectrum, near {#} nm and {#} nm.":
  "<strong>LED.</strong> Elige Colores de LED. Para cada material de LED, escribe en la tabla de LED la longitud de onda máxima del espectrómetro. Luego elige Cualquier banda prohibida y encuentra las bandas prohibidas que dan los extremos del espectro visible, cerca de {#} nm y {#} nm.",
"<span>B</span>Temperature \\(T\\) (K)":
  "<span>B</span>Temperatura \\(T\\) (K)",
"<span>C</span>Bias \\(V\\) (V)":
  "<span>C</span>Polarización \\(V\\) (V)",
"<span>D</span>Current \\(I\\) (A)":
  "<span>D</span>Corriente \\(I\\) (A)",
"<span>E</span>ln(I / {#} A)":
  "<span>E</span>ln(I / {#} A)",
"Bias V (V), row {#}":
  "Polarización V (V), fila {#}",
"ln(I / {#} A), row {#}":
  "ln(I / {#} A), fila {#}",
"<strong>LEDs.</strong> One row for each material.":
  "<strong>LED.</strong> Una fila para cada material.",
"<span>A</span>LED material":
  "<span>A</span>Material del LED",
"<span>B</span>Peak wavelength \\(\\lambda\\) (nm)":
  "<span>B</span>Longitud de onda máxima \\(\\lambda\\) (nm)",
"<span>C</span>Photon energy \\(hc/\\lambda\\) (eV)":
  "<span>C</span>Energía del fotón \\(hc/\\lambda\\) (eV)",
"<span>D</span>Table {#} band gap (eV)":
  "<span>D</span>Banda prohibida de la Tabla {#} (eV)",
"LED material, row {#}":
  "Material del LED, fila {#}",
"Peak wavelength λ (nm), row {#}":
  "Longitud de onda máxima λ (nm), fila {#}",
"Photon energy hc/λ (eV), row {#}":
  "Energía del fotón hc/λ (eV), fila {#}",
"Table {#} band gap (eV), row {#}":
  "Banda prohibida de la Tabla {#} (eV), fila {#}",
"Plot \\(I\\) against \\(V\\) for {#} K, forward and reverse. Describe the curve. What is the current in reverse bias, and how does it compare with \\(I_0\\)?":
  "Grafica \\(I\\) en función de \\(V\\) para {#} K, directa e inversa. Describe la curva. ¿Cuál es la corriente en polarización inversa, y cómo se compara con \\(I_0\\)?",
"Check the \\(\\ln(I/1\\ \\text{A})\\) column for a few forward readings (Export fills it in). For each temperature, plot \\(\\ln I\\) against \\(V\\) for the forward readings and fit a straight line. From each slope, find \\(e/k\\) (slope × T). Compare with the accepted \\(e/k = 11\\,605\\) K/V.":
  "Comprueba la columna \\(\\ln(I/1\\ \\text{A})\\) en algunas lecturas directas (Exportar la llena). Para cada temperatura, grafica \\(\\ln I\\) en función de \\(V\\) para las lecturas directas y ajusta una recta. A partir de cada pendiente, encuentra \\(e/k\\) (pendiente × T). Compara con el valor aceptado \\(e/k = 11\\,605\\) K/V.",
"From the intercept at {#} K, find \\(I_0\\) and compare it with the setting.":
  "A partir de la ordenada al origen a {#} K, encuentra \\(I_0\\) y compárala con el valor fijado.",
"How does \\(I_0\\), from the intercepts, change between {#} K and {#} K? Why does it change so much more than the slope?":
  "¿Cómo cambia \\(I_0\\), según las ordenadas al origen, entre {#} K y {#} K? ¿Por qué cambia mucho más que la pendiente?",
"Complete the LED table. How well does the photon energy match the band gap?":
  "Completa la tabla de LED. ¿Qué tan bien coincide la energía del fotón con la banda prohibida?",
"Use the standard errors of your slopes to give each value of \\(e/k\\) with its uncertainty. Why should readings below about {#} V be left out of the straight line fit? Estimate how large the \\(-1\\) in the diode equation is compared with \\(e^{eV/kT}\\) at {#} V and at {#} V.":
  "Usa los errores estándar de tus pendientes para dar cada valor de \\(e/k\\) con su incertidumbre. ¿Por qué deben dejarse fuera del ajuste de la recta las lecturas por debajo de unos {#} V? Estima qué tan grande es el \\(-1\\) de la ecuación del diodo comparado con \\(e^{eV/kT}\\) a {#} V y a {#} V.",
"Why does almost no current flow in reverse bias, even at several volts?":
  "¿Por qué casi no circula corriente en polarización inversa, ni siquiera a varios volts?",
"Does the depletion region get wider or narrower in forward bias? Explain using the barrier.":
  "¿La región de agotamiento se hace más ancha o más angosta en polarización directa? Explícalo usando la barrera.",
"In the demo, by what factor does \\(I_0\\) grow between {#} K and {#} K? Use \\(I_0 \\propto n_i^2\\) and the band gap of silicon, {#} eV, to explain why it is so sensitive to temperature.":
  "En la demo, ¿en qué factor crece \\(I_0\\) entre {#} K y {#} K? Usa \\(I_0 \\propto n_i^2\\) y la banda prohibida del silicio, {#} eV, para explicar por qué es tan sensible a la temperatura.",
"Silicon makes poor LEDs, and the first bright blue LEDs needed gallium nitride. Use your LED table to explain why a blue LED needs a wide gap material.":
  "El silicio produce LED deficientes, y los primeros LED azules brillantes necesitaron nitruro de galio. Usa tu tabla de LED para explicar por qué un LED azul necesita un material con una banda prohibida ancha.",
"Check the book’s Example {#}: with \\(I_0 = 2.2 \\times 10^{-8}\\) A and \\(I = 0.45\\) A at \\(V = 0.12\\) V, what temperature does the diode equation give?":
  "Comprueba el Ejemplo {#} del libro: con \\(I_0 = 2.2 \\times 10^{-8}\\) A e \\(I = 0.45\\) A en \\(V = 0.12\\) V, ¿qué temperatura da la ecuación del diodo?",
"Prelab answers, the data tables with the graphs, your values of \\(e/k\\) with their uncertainties, \\(I_0\\) from the intercepts, the LED table, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, las tablas de datos con las gráficas, tus valores de \\(e/k\\) con sus incertidumbres, \\(I_0\\) a partir de las ordenadas al origen, la tabla de LED y las respuestas a las preguntas. Identifica los datos simulados.",
"Band gap":
  "Banda prohibida",
"Saturation current":
  "Corriente de saturación",
"Bias voltage (positive forward)":
  "Voltaje de polarización (positivo en directa)",
"Frequency of the light":
  "Frecuencia de la luz",
"Peak wavelength of the LED":
  "Longitud de onda máxima del LED",
"Intrinsic carrier density":
  "Densidad intrínseca de portadores",
"Crystals, Bands and Semiconductors (Junction)":
  "Cristales, bandas y semiconductores (Unión)",
"Fill in the \\(\\ln(I/1\\ \\text{A})\\) column for the forward readings. For each temperature, plot \\(\\ln I\\) against \\(V\\) for the forward readings and fit a straight line. From each slope, find \\(e/k\\) (slope × T). Compare with the accepted \\(e/k = 11\\,605\\) K/V.":
  "Llena la columna \\(\\ln(I/1\\ \\text{A})\\) para las lecturas directas. Para cada temperatura, grafica \\(\\ln I\\) en función de \\(V\\) para las lecturas directas y ajusta una recta. A partir de cada pendiente, encuentra \\(e/k\\) (pendiente × T). Compara con el valor aceptado \\(e/k = 11\\,605\\) K/V."
});
