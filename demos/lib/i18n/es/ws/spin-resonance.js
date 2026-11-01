/* ws/spin-resonance in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/spin-resonance', {
"Range":
  "Intervalo",
"Probe frequency ν (MHz)":
  "Frecuencia de la sonda ν (MHz)",
"Method":
  "Método",
"Time or voltage reading (units)":
  "Lectura de tiempo o voltaje (unidades)",
"Temperature t (°C)":
  "Temperatura t (°C)",
"Scan field B_scan (mT)":
  "Campo de barrido B_scan (mT)",
"Total field B (mT)":
  "Campo total B (mT)",
"Spin Resonance | VirtualDemos":
  "Resonancia de espín | VirtualDemos",
"Spin Resonance":
  "Resonancia de espín",
"<strong>Setups in the demo:</strong> ESR on DPPH; ESR reference (the empty phial, with the DPPH trace held for comparison); PSR glycerine; Polystyrene vs glycerine; Fluorine in PTFE; Out of tune (the proton peak lies outside the scan until the frequency is tuned).":
  "<strong>Configuraciones en la demo:</strong> ESR en DPPH; Referencia de ESR (el frasco vacío, con la traza de DPPH guardada para comparar); PSR en glicerina; Poliestireno contra glicerina; Flúor en PTFE; Fuera de sintonía (el pico de protones queda fuera del barrido hasta que se sintoniza la frecuencia).",
"The bench is a spin resonance teaching kit: a console with a marginal oscillator and a frequency meter, a cell mount with scan coils, an electron probe (ESR), a proton probe (PSR) used with a permanent magnet, a thermometer and a two channel oscilloscope. Drag the 3D view to turn it and scroll to zoom (on a phone, two fingers); a flat drawing shows the same bench.":
  "La mesa es un equipo didáctico de resonancia de espín: una consola con un oscilador marginal y un frecuencímetro, un soporte de celda con bobinas de barrido, una sonda de electrones (ESR), una sonda de protones (PSR) que se usa con un imán permanente, un termómetro y un osciloscopio de dos canales. Arrastra la vista 3D para girarla y usa la rueda para hacer zoom (en un teléfono, dos dedos); un dibujo plano muestra la misma mesa.",
"ESR samples: DPPH (orange cap), an empty phial (black cap) and water (white cap). PSR samples: glycerine (yellow cap), a polystyrene rod (green), a PTFE rod (blue), the empty phial and water.":
  "Muestras de ESR: DPPH (tapa naranja), un frasco vacío (tapa negra) y agua (tapa blanca). Muestras de PSR: glicerina (tapa amarilla), una barra de poliestireno (verde), una barra de PTFE (azul), el frasco vacío y agua.",
"The range selector picks LO, MID or HI. For ESR the three frequencies are fixed, near {#}, {#} and {#} MHz; each bench differs from these by up to {#}%, so read the meter. For PSR the frequency tunes across {#} to {#} MHz on LO, {#} to {#} on MID and {#} to {#} on HI. <strong>The frequency meter shows the probe frequency divided by {#}:</strong> a reading of {#} kHz means {#} MHz.":
  "El selector de intervalo elige LO, MID o HI. Para ESR las tres frecuencias son fijas, cerca de {#}, {#} y {#} MHz; cada mesa difiere de estas hasta en {#}%, así que lee el medidor. Para PSR la frecuencia se sintoniza de {#} a {#} MHz en LO, de {#} a {#} en MID y de {#} a {#} en HI. <strong>El frecuencímetro muestra la frecuencia de la sonda dividida entre {#}:</strong> una lectura de {#} kHz significa {#} MHz.",
"The oscillator’s sensitivity screw sets how close it runs to the point where it stops. It is most sensitive just below that point, where the red LED starts to dim and the noise rises; past it the oscillation stops and the signal is gone. The point is different on each range.":
  "El tornillo de sensibilidad del oscilador fija qué tan cerca trabaja del punto en que se detiene. Es más sensible justo por debajo de ese punto, donde el LED rojo empieza a atenuarse y el ruido aumenta; pasado ese punto la oscilación se detiene y la señal desaparece. El punto es distinto en cada intervalo.",
"FAST sweeps the scan field from zero to full scale in a {#} ms ramp, {#} times a second. CH1 shows the ramp ({#} V at full scale) and CH2 the probe signal, where absorption is a peak. The oscilloscope triggers on the falling edge of CH1, so the ramp starts about two divisions in. Drag cursors A and B (or the V cursor on CH1) on the screen; Time A→B or V cursor chooses which one a capture records. Hold CH2 trace keeps a trace on screen for comparison, and Export traces CSV saves both channels.":
  "FAST barre el campo de barrido de cero a escala completa en una rampa de {#} ms, {#} veces por segundo. CH1 muestra la rampa ({#} V a escala completa) y CH2 la señal de la sonda, donde la absorción es un pico. El osciloscopio se dispara en el flanco de bajada de CH1, así que la rampa empieza unas dos divisiones adentro. Arrastra los cursores A y B (o el cursor V en CH1) en la pantalla; Tiempo A→B o Cursor V elige cuál registra una captura. Retener la traza de CH2 conserva una traza en pantalla para comparar, y Exportar trazas CSV guarda ambos canales.",
"SLOW RUN makes one {#} s ramp, drawn by a chart recorder on paper moving at {#} mm/s. Drag the two ruler lines onto the start pulse and the peak; the reading is given in seconds.":
  "SLOW RUN hace una sola rampa de {#} s, que un registrador gráfico dibuja en papel que avanza a {#} mm/s. Arrastra las dos líneas de la regla al pulso de inicio y al pico; la lectura se da en segundos.",
"The Zeeman magnet’s field at {#} °C, \\(B_{20}\\), is marked on its shroud. The thermometer reading can be set from {#} to {#} °C; it opens at this bench’s room temperature.":
  "El campo del imán de Zeeman a {#} °C, \\(B_{20}\\), está marcado en su cubierta. La lectura del termómetro se puede fijar de {#} a {#} °C; abre en la temperatura ambiente de esta mesa.",
"<strong>Capture reading</strong> stores the meter reading and your cursor or ruler reading, never the true field, and you can edit both. <strong>Export to worksheet</strong> sends the rows to the Data table below, with the scan and total fields worked out from your readings; <strong>Export table CSV</strong> saves them as a file; <strong>Clear</strong> starts a new series. The demo also plots \\(B\\) against frequency with a least squares line (slope and intercept).":
  "<strong>Capturar lectura</strong> guarda la lectura del medidor y tu lectura del cursor o de la regla, nunca el campo verdadero, y puedes editar ambas. <strong>Exportar a la hoja</strong> envía las filas a la tabla de datos de abajo, con los campos de barrido y total calculados a partir de tus lecturas; <strong>Exportar tabla CSV</strong> las guarda como archivo; <strong>Borrar</strong> empieza una serie nueva. La demo también grafica \\(B\\) en función de la frecuencia con una recta de mínimos cuadrados (pendiente y ordenada al origen).",
"Under Instrument: the seed fixes this bench’s small offsets (the exact LO, MID and HI frequencies, \\(B_{20}\\), the room temperature and the sensitivity thresholds) and its noise, so a class sharing a seed works on the same bench. Blind hides the expected answer and the accepted values. Show expected resonance is an instructor check.":
  "En Instrumento: la semilla fija los pequeños corrimientos de esta mesa (las frecuencias exactas de LO, MID y HI, \\(B_{20}\\), la temperatura ambiente y los umbrales de sensibilidad) y su ruido, así que un grupo que comparte una semilla trabaja en la misma mesa. A ciegas oculta la respuesta esperada y los valores aceptados. Mostrar la resonancia esperada es una comprobación para el instructor.",
"Exact: \\(h\\nu = g\\mu_B B\\) with \\(g = 2.0036\\) for DPPH; \\(\\nu = (\\gamma/2\\pi)B\\) with {#} MHz/T for ¹H (free proton, CODATA {#}) and {#} MHz/T for ¹⁹F (IUPAC {#}). \\(h\\), \\(\\mu_B\\) and \\(\\mu_N\\) are CODATA values. Chemical shielding, tens of parts per million, is far below this instrument’s resolution and is left out.":
  "Exacto: \\(h\\nu = g\\mu_B B\\) con \\(g = 2.0036\\) para el DPPH; \\(\\nu = (\\gamma/2\\pi)B\\) con {#} MHz/T para ¹H (protón libre, CODATA {#}) y {#} MHz/T para ¹⁹F (IUPAC {#}). \\(h\\), \\(\\mu_B\\) y \\(\\mu_N\\) son valores de CODATA. El apantallamiento químico, de decenas de partes por millón, está muy por debajo de la resolución de este instrumento y se omite.",
"Idealized: the scan current ramps exactly linearly (FAST: {#} ms ramp and {#} ms flyback, repeating at {#} Hz; SLOW: one {#} s ramp); the field is uniform over the sample; the scan field adds to the magnet’s field; the earth’s field and stray fields are left out; the probe coil is at right angles to the field. The flyback is too quick for the detector, so no peak is drawn there. The magnet follows the maker’s temperature law, \\(B_Z = B_{20}[1 - 7.5\\times10^{-4}\\,(t - 20\\,^{\\circ}\\mathrm{C})]\\), with \\(t\\) in °C.":
  "Idealizado: la corriente de barrido sube en una rampa exactamente lineal (FAST: rampa de {#} ms y retorno de {#} ms, repitiéndose a {#} Hz; SLOW: una sola rampa de {#} s); el campo es uniforme sobre la muestra; el campo de barrido se suma al campo del imán; se omiten el campo terrestre y los campos parásitos; la bobina de la sonda está en ángulo recto con el campo. El retorno es demasiado rápido para el detector, así que ahí no se dibuja ningún pico. El imán sigue la ley de temperatura del fabricante, \\(B_Z = B_{20}[1 - 7.5\\times10^{-4}\\,(t - 20\\,^{\\circ}\\mathrm{C})]\\), con \\(t\\) en °C.",
"Modeled, not computed from first principles: the line shapes are Lorentzians in field with illustrative widths (full width at half maximum: DPPH {#} mT, glycerine and water {#} mT, polystyrene {#} mT, PTFE {#} mT, the plastic coil former {#} mT). Heights are chosen to resemble a real trace and grow with the number of spins in the coil; water is weaker than glycerine because its slow relaxation saturates.":
  "Modelado, no calculado desde primeros principios: las formas de línea son lorentzianas en el campo con anchos ilustrativos (ancho completo a la mitad del máximo: DPPH {#} mT, glicerina y agua {#} mT, poliestireno {#} mT, PTFE {#} mT, el soporte plástico de la bobina {#} mT). Las alturas se eligen para parecerse a una traza real y crecen con el número de espines en la bobina; el agua es más débil que la glicerina porque su relajación lenta la satura.",
"The marginal oscillator is a behavioral model: its gain grows as the sensitivity nears the stopping point, the LED dims above {#}% of that point, and the noise rises with the gain and sharply just below it. The frequency meter jitters by one count. All noise is simulated.":
  "El oscilador marginal es un modelo de comportamiento: su ganancia crece a medida que la sensibilidad se acerca al punto de detención, el LED se atenúa por encima del {#}% de ese punto, y el ruido aumenta con la ganancia y bruscamente justo por debajo de él. El frecuencímetro fluctúa en una cuenta. Todo el ruido es simulado.",
"Find the electron’s \\(g\\) factor using DPPH. Then use the same idea to measure the resonance of hydrogen and fluorine nuclei.":
  "Encuentra el factor \\(g\\) del electrón usando DPPH. Luego usa la misma idea para medir la resonancia de los núcleos de hidrógeno y de flúor.",
"An electron’s spin gives it a magnetic moment (§{#}). In a magnetic field \\(B\\) its two spin states, \\(m_s = \\pm\\tfrac12\\), have energies \\(\\pm\\tfrac12 g\\mu_B B\\), so they are split by \\(g\\mu_B B\\). Radio waves of frequency \\(\\nu\\) are absorbed when the photon energy matches the splitting:":
  "El espín de un electrón le da un momento magnético (§{#}). En un campo magnético \\(B\\) sus dos estados de espín, \\(m_s = \\pm\\tfrac12\\), tienen energías \\(\\pm\\tfrac12 g\\mu_B B\\), así que están separados por \\(g\\mu_B B\\). Las ondas de radio de frecuencia \\(\\nu\\) se absorben cuando la energía del fotón coincide con la separación:",
"\\[h\\nu=g\\mu_B B\\]":
  "\\[h\\nu=g\\mu_B B\\]",
"Here \\(\\mu_B\\) is the Bohr magneton and \\(g\\) is close to {#} for an electron spin. DPPH is a stable free radical with one unpaired electron per molecule, so it gives a strong electron spin resonance (ESR).":
  "Aquí \\(\\mu_B\\) es el magnetón de Bohr y \\(g\\) es cercano a {#} para un espín electrónico. El DPPH es un radical libre estable con un electrón desapareado por molécula, así que da una resonancia de espín electrónico (ESR) intensa.",
"The sample sits in the coil of a marginal oscillator at a fixed frequency. Scan coils sweep the field from zero to a full scale \\(B_{\\max}\\) on a linear ramp. When the field passes the resonance the sample absorbs energy from the coil, and the detected signal shows a peak. If the peak comes a time \\(t_R\\) after the start of a ramp of length \\(T\\), the field there is":
  "La muestra está en la bobina de un oscilador marginal a una frecuencia fija. Las bobinas de barrido llevan el campo de cero a una escala completa \\(B_{\\max}\\) en una rampa lineal. Cuando el campo pasa por la resonancia la muestra absorbe energía de la bobina, y la señal detectada muestra un pico. Si el pico llega un tiempo \\(t_R\\) después del inicio de una rampa de duración \\(T\\), el campo ahí es",
"\\[B_{\\rm scan} = \\frac{t_R}{T}\\,B_{\\max}.\\]":
  "\\[B_{\\rm scan} = \\frac{t_R}{T}\\,B_{\\max}.\\]",
"A graph of \\(B\\) against frequency is a straight line through the origin. If its slope is \\(k\\), then":
  "Una gráfica de \\(B\\) en función de la frecuencia es una recta que pasa por el origen. Si su pendiente es \\(k\\), entonces",
"\\[g=\\frac{h}{\\mu_B k}.\\]":
  "\\[g=\\frac{h}{\\mu_B k}.\\]",
"Protons and fluorine nuclei have spin \\(\\tfrac12\\) too, with moments measured in nuclear magnetons \\(\\mu_N\\), about {#} times smaller than \\(\\mu_B\\). Their resonance condition is written":
  "Los protones y los núcleos de flúor también tienen espín \\(\\tfrac12\\), con momentos medidos en magnetones nucleares \\(\\mu_N\\), unas {#} veces más pequeños que \\(\\mu_B\\). Su condición de resonancia se escribe",
"\\[\\begin{gathered} \\nu=\\Gamma B, \\\\[4pt] \\Gamma=\\frac{\\gamma}{2\\pi}, \\end{gathered}\\]":
  "\\[\\begin{gathered} \\nu=\\Gamma B, \\\\[4pt] \\Gamma=\\frac{\\gamma}{2\\pi}, \\end{gathered}\\]",
"where \\(\\Gamma\\) is measured in Hz/T. A plot of \\(B\\) against frequency has slope \\(1/\\Gamma\\). At the same frequency a proton needs about {#} times the field an electron needs, so the nuclear experiment (PSR) puts the sample in a permanent magnet of about {#} mT and scans only a small field on top of it. Add the two fields before making this graph:":
  "donde \\(\\Gamma\\) se mide en Hz/T. Una gráfica de \\(B\\) en función de la frecuencia tiene pendiente \\(1/\\Gamma\\). A la misma frecuencia un protón necesita unas {#} veces el campo que necesita un electrón, así que el experimento nuclear (PSR) pone la muestra en un imán permanente de unos {#} mT y barre solo un campo pequeño encima de él. Suma los dos campos antes de hacer esta gráfica:",
"\\[\\begin{gathered} B=B_Z+B_{\\rm scan}, \\\\[4pt] B_Z=B_{20}[1-\\beta(t-20\\,^{\\circ}\\mathrm C)]. \\end{gathered}\\]":
  "\\[\\begin{gathered} B=B_Z+B_{\\rm scan}, \\\\[4pt] B_Z=B_{20}[1-\\beta(t-20\\,^{\\circ}\\mathrm C)]. \\end{gathered}\\]",
"\\(B_{20}\\) is the magnet’s field at {#} °C, \\(t\\) the thermometer reading, and the magnet’s temperature coefficient is \\(\\beta = 7.5\\times10^{-4}\\ {}^{\\circ}\\mathrm{C}^{-1}\\).":
  "\\(B_{20}\\) es el campo del imán a {#} °C, \\(t\\) la lectura del termómetro, y el coeficiente de temperatura del imán es \\(\\beta = 7.5\\times10^{-4}\\ {}^{\\circ}\\mathrm{C}^{-1}\\).",
"What happens to the resonance field if the frequency doubles?":
  "¿Qué le pasa al campo de resonancia si la frecuencia se duplica?",
"Why must the permanent magnet’s field be included in the nuclear experiment?":
  "¿Por qué hay que incluir el campo del imán permanente en el experimento nuclear?",
"If you plot \\(B\\) against frequency, how do you get \\(g\\) or \\(\\Gamma\\) from the slope?":
  "Si graficas \\(B\\) en función de la frecuencia, ¿cómo obtienes \\(g\\) o \\(\\Gamma\\) a partir de la pendiente?",
"None for the virtual apparatus. With real equipment, keep magnetic objects away from the permanent magnet and take care around its pole faces, change probe connections with the power off, and follow the department’s instructions for handling samples.":
  "Ninguno con el aparato virtual. Con equipo real, mantén los objetos magnéticos lejos del imán permanente y ten cuidado con sus caras polares, cambia las conexiones de la sonda con la alimentación apagada, y sigue las instrucciones del departamento para manejar las muestras.",
"Before you start, note the instrument seed, turn on Blind, keep the expected resonance hidden and clear the table. Send the electron, proton and fluorine readings to the worksheet separately, clearing in between, so that each series goes into its own copy of the Data table.":
  "Antes de empezar, anota la semilla del instrumento, activa A ciegas, mantén oculta la resonancia esperada y borra la tabla. Envía por separado las lecturas de electrones, protones y flúor a la hoja de trabajo, borrando entre una y otra, para que cada serie vaya a su propia copia de la tabla de datos.",
"<strong>Electron resonance.</strong> Put DPPH in the electron probe.":
  "<strong>Resonancia del electrón.</strong> Pon DPPH en la sonda de electrones.",
"On MID, make the absorption peak clear. The oscillator is most sensitive just below the point where it stops; raise the sensitivity slowly, and if the signal disappears, back off.":
  "En MID, haz que el pico de absorción se vea claro. El oscilador es más sensible justo por debajo del punto en que se detiene; sube la sensibilidad poco a poco, y si la señal desaparece, retrocede.",
"Measure the time from the start of the rising field ramp to the center of the peak. The oscilloscope trigger is not the start of the ramp. Read the probe frequency from the meter, and capture the reading.":
  "Mide el tiempo desde el inicio de la rampa de subida del campo hasta el centro del pico. El disparo del osciloscopio no es el inicio de la rampa. Lee la frecuencia de la sonda en el medidor y captura la lectura.",
"Place the cursors again from scratch and take a second reading.":
  "Vuelve a colocar los cursores desde cero y toma una segunda lectura.",
"Repeat on LO and HI. The sensitivity needs setting again on each range.":
  "Repite en LO y HI. La sensibilidad se debe ajustar de nuevo en cada intervalo.",
"On MID, also measure the field from the CH1 voltage at the time of the peak. Then check that reading with one slow sweep, measuring on the chart record from the start pulse to the peak.":
  "En MID, mide también el campo a partir del voltaje de CH1 en el instante del pico. Luego comprueba esa lectura con un barrido lento, midiendo en el registro gráfico desde el pulso de inicio hasta el pico.",
"Replace the DPPH with the empty reference, then with water. Note what changes and what that tells you about where the peak comes from.":
  "Cambia el DPPH por la referencia vacía y luego por agua. Anota qué cambia y qué te dice eso sobre de dónde viene el pico.",
"<strong>Nuclear resonance.</strong> Put glycerine in the proton probe on MID. Record \\(B_{20}\\) and the thermometer reading. Tune the frequency until a peak appears during the scan, and find the range of frequencies over which it stays on the ramp. Take readings at five frequencies spread across that range, keeping the temperature fixed. Compare the width and height of the polystyrene peak with glycerine’s at the same sensitivity. Then put PTFE in on LO and take readings at three frequencies spread across its range.":
  "<strong>Resonancia nuclear.</strong> Pon glicerina en la sonda de protones en MID. Registra \\(B_{20}\\) y la lectura del termómetro. Sintoniza la frecuencia hasta que aparezca un pico durante el barrido, y encuentra el intervalo de frecuencias en el que se mantiene sobre la rampa. Toma lecturas a cinco frecuencias repartidas en ese intervalo, manteniendo fija la temperatura. Compara el ancho y la altura del pico del poliestireno con los de la glicerina con la misma sensibilidad. Luego pon PTFE en LO y toma lecturas a tres frecuencias repartidas en su intervalo.",
"<span>A</span>Sample":
  "<span>A</span>Muestra",
"<span>B</span>Range":
  "<span>B</span>Intervalo",
"<span>C</span>Probe frequency ν (MHz)":
  "<span>C</span>Frecuencia de la sonda ν (MHz)",
"<span>D</span>Method":
  "<span>D</span>Método",
"<span>E</span>Time or voltage reading (units)":
  "<span>E</span>Lectura de tiempo o voltaje (unidades)",
"<span>F</span>Temperature t (°C)":
  "<span>F</span>Temperatura t (°C)",
"<span>H</span>Scan field B_scan (mT)":
  "<span>H</span>Campo de barrido B_scan (mT)",
"<span>I</span>Total field B (mT)":
  "<span>I</span>Campo total B (mT)",
"Sample, row {#}":
  "Muestra, fila {#}",
"Range, row {#}":
  "Intervalo, fila {#}",
"Probe frequency ν (MHz), row {#}":
  "Frecuencia de la sonda ν (MHz), fila {#}",
"Method, row {#}":
  "Método, fila {#}",
"Time or voltage reading (units), row {#}":
  "Lectura de tiempo o voltaje (unidades), fila {#}",
"Temperature t (°C), row {#}":
  "Temperatura t (°C), fila {#}",
"B₂₀ (mT), row {#}":
  "B₂₀ (mT), fila {#}",
"Scan field B_scan (mT), row {#}":
  "Campo de barrido B_scan (mT), fila {#}",
"Total field B (mT), row {#}":
  "Campo total B (mT), fila {#}",
"Add rows for all frequencies and repeat readings. Record the seed and the scan calibration above the table. In the virtual lab, Export to worksheet fills the table; the scan and total fields it gives are worked out from your own readings.":
  "Agrega filas para todas las frecuencias y las lecturas repetidas. Anota la semilla y la calibración del barrido arriba de la tabla. En el laboratorio virtual, Exportar a la hoja llena la tabla; los campos de barrido y total que da se calculan a partir de tus propias lecturas.",
"Convert each reading to scan field. FAST has a {#} ms ramp; SLOW has a {#} s ramp, and the chart paper moves at {#} mm/s. Full scan is {#} mT for ESR and {#} mT for nuclear resonance. Compare the CH1 voltage and the slow sweep with the time readings on MID.":
  "Convierte cada lectura a campo de barrido. FAST tiene una rampa de {#} ms; SLOW tiene una rampa de {#} s, y el papel del registrador avanza a {#} mm/s. El barrido completo es de {#} mT para ESR y de {#} mT para la resonancia nuclear. Compara el voltaje de CH1 y el barrido lento con las lecturas de tiempo en MID.",
"Plot the ESR field against frequency in Hz. Fit a line and find \\(g\\) from its slope. Is the intercept zero within its uncertainty, as a stray field free magnet would give?":
  "Grafica el campo de ESR en función de la frecuencia en Hz. Ajusta una recta y encuentra \\(g\\) a partir de su pendiente. ¿Es la ordenada al origen cero dentro de su incertidumbre, como daría un imán sin campos parásitos?",
"For each nuclear reading, correct the permanent field for temperature and add the scan field. Fit hydrogen and fluorine separately to find their \\(\\Gamma\\) values.":
  "Para cada lectura nuclear, corrige el campo permanente por temperatura y suma el campo de barrido. Ajusta por separado el hidrógeno y el flúor para encontrar sus valores de \\(\\Gamma\\).",
"Compare line widths above the signal baseline. Record the sensitivity setting when comparing peak heights.":
  "Compara los anchos de línea por encima de la línea base de la señal. Anota el ajuste de sensibilidad cuando compares alturas de pico.",
"Estimate how far you could move a cursor while still calling it the peak center. Convert that interval to a field uncertainty. Include the scan calibration, the thermometer and the uncertainty in the permanent field if it is given. Repeated cursor placements help estimate reading scatter, but they do not remove an error shared by every field reading. Use your slope uncertainty to estimate the uncertainty in \\(g\\) or \\(\\Gamma\\).":
  "Estima cuánto podrías mover un cursor y seguir considerándolo el centro del pico. Convierte ese intervalo en una incertidumbre del campo. Incluye la calibración del barrido, el termómetro y la incertidumbre del campo permanente si se da. Colocar el cursor varias veces ayuda a estimar la dispersión de las lecturas, pero no elimina un error común a todas las lecturas de campo. Usa la incertidumbre de tu pendiente para estimar la incertidumbre de \\(g\\) o \\(\\Gamma\\).",
"Why does peak position tell you \\(g\\), while peak height does not?":
  "¿Por qué la posición del pico te dice \\(g\\), mientras que la altura del pico no?",
"Why can glycerine and polystyrene have different widths but the same proton resonance relation?":
  "¿Por qué la glicerina y el poliestireno pueden tener anchos distintos pero la misma relación de resonancia del protón?",
"How would a constant stray magnetic field affect the ESR graph?":
  "¿Cómo afectaría un campo magnético parásito constante a la gráfica de ESR?",
"Why does temperature matter more when measuring the small scan field on top of a large permanent field?":
  "¿Por qué la temperatura importa más al medir el pequeño campo de barrido encima de un gran campo permanente?",
"Prelab answers, the data table copies, the field calculations and the slow sweep check, what the empty phial and water showed, the three fitted graphs, \\(g\\) and the two \\(\\Gamma\\) values with uncertainty, and answers to the questions. Identify simulated data, and give the virtual seed.":
  "Respuestas del prelaboratorio, las copias de la tabla de datos, los cálculos del campo y la comprobación con el barrido lento, lo que mostraron el frasco vacío y el agua, las tres gráficas ajustadas, \\(g\\) y los dos valores de \\(\\Gamma\\) con su incertidumbre, y las respuestas a las preguntas. Identifica los datos simulados y da la semilla virtual.",
"Field at the sample":
  "Campo en la muestra",
"Field of the Zeeman magnet at {#} °C":
  "Campo del imán de Zeeman a {#} °C",
"Field of the Zeeman magnet":
  "Campo del imán de Zeeman",
"Full scale of the scan field":
  "Escala completa del campo de barrido",
"Field from the scan coils":
  "Campo de las bobinas de barrido",
"{#} MHz/T for ¹H":
  "{#} MHz/T para ¹H",
"Length of the ramp":
  "Duración de la rampa",
"Temperature coefficient of the magnet":
  "Coeficiente de temperatura del imán",
"g factor":
  "Factor g",
"{#} for DPPH":
  "{#} para el DPPH",
"Gyromagnetic ratio":
  "Razón giromagnética",
"Slope of B against frequency":
  "Pendiente de B en función de la frecuencia",
"Spin quantum number":
  "Número cuántico de espín",
"Bohr magneton":
  "Magnetón de Bohr",
"{#} × {#}⁻²⁴ J/T (CODATA {#})":
  "{#} × {#}⁻²⁴ J/T (CODATA {#})",
"Nuclear magneton":
  "Magnetón nuclear",
"{#} × {#}⁻²⁷ J/T (CODATA {#})":
  "{#} × {#}⁻²⁷ J/T (CODATA {#})",
"Frequency of the radio waves":
  "Frecuencia de las ondas de radio",
"Thermometer reading":
  "Lectura del termómetro",
"Time of the peak after the ramp starts":
  "Tiempo del pico después de que empieza la rampa"
});
