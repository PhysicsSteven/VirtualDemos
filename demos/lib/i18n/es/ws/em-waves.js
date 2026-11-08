/* ws/em-waves in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/em-waves', {
"Frequency f (Hz)":
  "Frecuencia f (Hz)",
"Amplitude E_0 (V/m)":
  "Amplitud E_0 (V/m)",
"Intensity I (W/m²)":
  "Intensidad I (W/m²)",
"Pressure, absorbed (Pa)":
  "Presión, absorbida (Pa)",
"Pressure, reflected (Pa)":
  "Presión, reflejada (Pa)",
"E direction":
  "Dirección de E",
"Periods run":
  "Periodos transcurridos",
"Distance from the nearest wire r (λ)":
  "Distancia al alambre más cercano r (λ)",
"Electromagnetic Waves: Fields, Intensity and Pressure | VirtualDemos":
  "Ondas electromagnéticas: campos, intensidad y presión | VirtualDemos",
"Electromagnetic Waves: Fields, Intensity and Pressure":
  "Ondas electromagnéticas: campos, intensidad y presión",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} to {#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} a {#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Plane wave; Visible light; Sunlight at Earth; Circular polarization; Radio; Antenna.":
  "<strong>Configuraciones en la demo:</strong> Onda plana; Luz visible; Luz solar en la Tierra; Polarización circular; Radio; Antena.",
"Plane wave shows a wave traveling along \\(z\\) in vacuum, with the electric field \\(\\vec E\\), the magnetic field \\(\\vec B\\) (drawn as \\(c\\vec B\\) so it shares the scale of \\(\\vec E\\)) and the Poynting vector \\(\\vec S\\). The spectrum runs along the bottom.":
  "Onda plana muestra una onda que viaja a lo largo de \\(z\\) en el vacío, con el campo eléctrico \\(\\vec E\\), el campo magnético \\(\\vec B\\) (dibujado como \\(c\\vec B\\) para que comparta la escala de \\(\\vec E\\)) y el vector de Poynting \\(\\vec S\\). El espectro corre a lo largo de la parte inferior.",
"You set the frequency \\(f\\) (from \\(10^5\\) to \\(10^{21}\\) Hz) and the amplitude \\(E_0\\) of the electric field (from {#} V/m to {#} MV/m); both sliders are logarithmic. The polarization controls set the mix of \\(x\\) and \\(y\\) components.":
  "Tú fijas la frecuencia \\(f\\) (de \\(10^5\\) a \\(10^{21}\\) Hz) y la amplitud \\(E_0\\) del campo eléctrico (de {#} V/m a {#} MV/m); ambos deslizadores son logarítmicos. Los controles de polarización fijan la mezcla de componentes \\(x\\) y \\(y\\).",
"The readouts give the wavelength and period, the band, and under Energy and intensity: \\(B_0\\), the intensity \\(I\\), the mean energy density and the radiation pressure on a surface that absorbs the wave and on one that reflects it.":
  "Las lecturas dan la longitud de onda y el periodo, la banda, y en Energía e intensidad: \\(B_0\\), la intensidad \\(I\\), la densidad media de energía y la presión de radiación sobre una superficie que absorbe la onda y sobre una que la refleja.",
"Antenna shows the field of an oscillating dipole and its radiation pattern, with the relative intensity in a direction you choose.":
  "Antena muestra el campo de un dipolo oscilante y su patrón de radiación, con la intensidad relativa en una dirección que tú eliges.",
"In a plane shows the field of long wires through the page (each carrying a current that goes up and down at one frequency) and of metal you paint, solved on a grid {#} cells to a wavelength, {#} λ by {#} λ. Its setups include One wire, Two wires in phase, Two wires, opposite phase and A wire grid polarizer; E along the wires or E in the page sets the polarization. The probe reads \\(\\langle E^2\\rangle\\), the field squared averaged over the last full period (in the demo’s units, the same for every setup), and its distance \\(r\\) from the nearest wire in wavelengths. A reading there stores the setup, the polarization, how many periods have run, the probe’s place, \\(r\\), \\(\\langle E^2\\rangle\\) and \\(r\\langle E^2\\rangle\\); a series of In a plane readings goes to the In a plane table.":
  "En un plano muestra el campo de alambres largos que atraviesan la página (cada uno con una corriente que sube y baja a una frecuencia) y de metal que tú pintas, resuelto en una malla de {#} celdas por longitud de onda, de {#} λ por {#} λ. Sus configuraciones incluyen Un alambre, Dos alambres en fase, Dos alambres, en fase opuesta y Un polarizador de rejilla de alambres; E a lo largo de los alambres o E en el plano de la página fija la polarización. La sonda lee \\(\\langle E^2\\rangle\\), el campo al cuadrado promediado sobre el último periodo completo (en las unidades de la demo, las mismas para todas las configuraciones), y su distancia \\(r\\) al alambre más cercano en longitudes de onda. Una lectura ahí guarda la configuración, la polarización, cuántos periodos han transcurrido, el lugar de la sonda, \\(r\\), \\(\\langle E^2\\rangle\\) y \\(r\\langle E^2\\rangle\\); una serie de lecturas de En un plano va a la tabla En un plano.",
"Record reading stores the plane wave’s frequency, wavelength, \\(E_0\\), \\(B_0\\), intensity and pressures (to six significant figures). Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la frecuencia, la longitud de onda, \\(E_0\\), \\(B_0\\), la intensidad y las presiones de la onda plana (con seis cifras significativas). Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"<strong>What the demo models.</strong> An exact plane wave in vacuum, with \\(c = 1/\\sqrt{\\mu_0\\varepsilon_0}\\) from the CODATA {#} values of \\(\\mu_0\\) and \\(\\varepsilon_0\\) (it differs from the exact \\(c = 299\\,792\\,458\\) m/s by less than one part in \\(10^{12}\\)). The pressures are for a surface facing the wave. The antenna is an ideal point dipole, much shorter than the wavelength. The drawing is slowed so one period takes {#} s. Simulated data.":
  "<strong>Qué modela la demo.</strong> Una onda plana exacta en el vacío, con \\(c = 1/\\sqrt{\\mu_0\\varepsilon_0}\\) a partir de los valores CODATA {#} de \\(\\mu_0\\) y \\(\\varepsilon_0\\) (difiere del valor exacto \\(c = 299\\,792\\,458\\) m/s en menos de una parte en \\(10^{12}\\)). Las presiones son para una superficie de frente a la onda. La antena es un dipolo puntual ideal, mucho más corto que la longitud de onda. El dibujo está frenado para que un periodo dure {#} s. Datos simulados.",
"Check the relations between the electric and magnetic fields of a light wave, its intensity and the pressure it exerts, find \\(c\\) and \\(\\varepsilon_0\\) from them, and apply them to sunlight, a laser pointer and a radio station.":
  "Comprueba las relaciones entre los campos eléctrico y magnético de una onda de luz, su intensidad y la presión que ejerce, encuentra \\(c\\) y \\(\\varepsilon_0\\) a partir de ellas, y aplícalas a la luz solar, a un apuntador láser y a una estación de radio.",
"Maxwell’s equations predict waves of \\(\\vec E\\) and \\(\\vec B\\) that travel in vacuum at \\(c = 1/\\sqrt{\\mu_0\\varepsilon_0}\\) (§{#}). In a plane wave the two fields are at right angles to each other and to the direction of travel, they oscillate in phase, and their sizes are in a fixed ratio (§{#}):":
  "Las ecuaciones de Maxwell predicen ondas de \\(\\vec E\\) y \\(\\vec B\\) que viajan en el vacío a \\(c = 1/\\sqrt{\\mu_0\\varepsilon_0}\\) (§{#}). En una onda plana los dos campos son perpendiculares entre sí y a la dirección de propagación, oscilan en fase y sus magnitudes están en una proporción fija (§{#}):",
"\\[E = cB, \\qquad \\lambda f = c.\\]":
  "\\[E = cB, \\qquad \\lambda f = c.\\]",
"The wave carries energy. Its intensity, the average power per unit area, is (§{#})":
  "La onda transporta energía. Su intensidad, la potencia media por unidad de área, es (§{#})",
"\\[I = \\tfrac{1}{2}c\\varepsilon_0 E_0^2 = \\frac{c B_0^2}{2\\mu_0} = \\frac{E_0 B_0}{2\\mu_0},\\]":
  "\\[I = \\tfrac{1}{2}c\\varepsilon_0 E_0^2 = \\frac{c B_0^2}{2\\mu_0} = \\frac{E_0 B_0}{2\\mu_0},\\]",
"and the average energy density is \\(\\langle u\\rangle = \\tfrac{1}{2}\\varepsilon_0 E_0^2 = I/c\\). It also carries momentum: a surface that absorbs the wave feels a radiation pressure \\(p = I/c\\), and one that reflects it feels \\(p = 2I/c\\) (§{#}).":
  "y la densidad media de energía es \\(\\langle u\\rangle = \\tfrac{1}{2}\\varepsilon_0 E_0^2 = I/c\\). También transporta cantidad de movimiento: una superficie que absorbe la onda siente una presión de radiación \\(p = I/c\\), y una que la refleja siente \\(p = 2I/c\\) (§{#}).",
"A plane wave has \\(E_0 = 300\\) V/m. What is \\(B_0\\), and what intensity does it carry?":
  "Una onda plana tiene \\(E_0 = 300\\) V/m. ¿Cuánto vale \\(B_0\\), y qué intensidad transporta?",
"Sunlight at Earth has an intensity of {#} W/m². Find \\(E_0\\) and \\(B_0\\), and compare \\(B_0\\) with Earth’s magnetic field (about {#} μT).":
  "La luz solar en la Tierra tiene una intensidad de {#} W/m². Encuentra \\(E_0\\) y \\(B_0\\), y compara \\(B_0\\) con el campo magnético de la Tierra (unos {#} μT).",
"Why does a mirror feel twice the radiation pressure of a black surface in the same light?":
  "¿Por qué un espejo siente el doble de presión de radiación que una superficie negra bajo la misma luz?",
"What is the wavelength of an FM station at {#} MHz? In which band of the spectrum is a wave of wavelength {#} nm (§{#})?":
  "¿Cuál es la longitud de onda de una estación de FM a {#} MHz? ¿En qué banda del espectro está una onda de longitud de onda {#} nm (§{#})?",
"This is a virtual activity. In a real lab, never look into a laser beam, even a weak one, and keep away from the antennas of working transmitters.":
  "Esta es una actividad virtual. En un laboratorio real, nunca mires directamente a un haz láser, aunque sea débil, y mantente lejos de las antenas de los transmisores en funcionamiento.",
"<strong>Part {#}: one frequency.</strong> Start from the Plane wave setup ({#} GHz). Record a reading at eight or more amplitudes \\(E_0\\) spread between about {#} V/m and {#} V/m.":
  "<strong>Parte {#}: una frecuencia.</strong> Empieza con la configuración Onda plana ({#} GHz). Registra una lectura en ocho o más amplitudes \\(E_0\\) repartidas entre unos {#} V/m y {#} V/m.",
"<strong>Part {#}: a different frequency.</strong> Without clearing the readings, change the frequency to visible light (about \\(5\\times10^{14}\\) Hz) and record four more readings at amplitudes in the same range. Send all the readings to the worksheet and fill in the \\(E_0^2\\) column.":
  "<strong>Parte {#}: otra frecuencia.</strong> Sin borrar las lecturas, cambia la frecuencia a luz visible (unos \\(5\\times10^{14}\\) Hz) y registra cuatro lecturas más con amplitudes en el mismo intervalo. Envía todas las lecturas a la hoja y llena la columna \\(E_0^2\\).",
"<strong>Part {#}: real sources.</strong> Clear the readings. Pick the Sunlight at Earth, Visible light (a laser pointer) and Radio setups in turn and record one reading for each. Send them; they go into a new copy of the table. Fill in \\(E_0^2\\).":
  "<strong>Parte {#}: fuentes reales.</strong> Borra las lecturas. Elige por turnos las configuraciones Luz solar en la Tierra, Luz visible (un apuntador láser) y Radio, y registra una lectura de cada una. Envíalas; van a una copia nueva de la tabla. Llena \\(E_0^2\\).",
"<strong>Part {#}: an antenna.</strong> Pick the Antenna setup. Read the relative intensity \\(I(\\theta)/I_{max}\\) at the angles \\(\\theta\\) = {#}°, {#}°, {#}°, {#}° and {#}° from the dipole’s axis, and write the values in your answer to Analysis {#}.":
  "<strong>Parte {#}: una antena.</strong> Elige la configuración Antena. Lee la intensidad relativa \\(I(\\theta)/I_{max}\\) a los ángulos \\(\\theta\\) = {#}°, {#}°, {#}°, {#}° y {#}° del eje del dipolo, y escribe los valores en tu respuesta al Análisis {#}.",
"<strong>Part {#}: waves in a plane.</strong> Clear the readings and open the In a plane view with One wire and E along the wires. Let the waves run for at least {#} periods, so they fill the picture, then record \\(\\langle E^2\\rangle\\) with the probe straight out to the right of the wire at \\(r\\) = {#}, {#}, {#}, {#}, {#} and {#} λ. Then record at the probe’s starting place in Two wires in phase and in Two wires, opposite phase, and, with One wire again, at the point straight out to the right of the wire at the same distance as that starting place. Last, in A wire grid polarizer, record behind the grid at the probe’s starting place with E along the wires and then with E in the page (switching starts the waves over: let them run {#} periods again). Send this series; it goes to the In a plane table.":
  "<strong>Parte {#}: ondas en un plano.</strong> Borra las lecturas y abre la vista En un plano con Un alambre y E a lo largo de los alambres. Deja correr las ondas al menos {#} periodos, para que llenen la imagen, y luego registra \\(\\langle E^2\\rangle\\) con la sonda directamente a la derecha del alambre en \\(r\\) = {#}, {#}, {#}, {#}, {#} y {#} λ. Luego registra en el lugar inicial de la sonda en Dos alambres en fase y en Dos alambres, en fase opuesta, y, de nuevo con Un alambre, en el punto directamente a la derecha del alambre a la misma distancia que ese lugar inicial. Por último, en Un polarizador de rejilla de alambres, registra detrás de la rejilla en el lugar inicial de la sonda con E a lo largo de los alambres y luego con E en el plano de la página (al cambiar, las ondas vuelven a empezar: déjalas correr {#} periodos otra vez). Envía esta serie; va a la tabla En un plano.",
"<span>B</span>Frequency \\(f\\) (Hz)":
  "<span>B</span>Frecuencia \\(f\\) (Hz)",
"<span>C</span>Amplitude \\(E_0\\) (V/m)":
  "<span>C</span>Amplitud \\(E_0\\) (V/m)",
"<span>F</span>Intensity \\(I\\) (W/m²)":
  "<span>F</span>Intensidad \\(I\\) (W/m²)",
"<span>G</span>Pressure, absorbed (Pa)":
  "<span>G</span>Presión, absorbida (Pa)",
"<span>H</span>Pressure, reflected (Pa)":
  "<span>H</span>Presión, reflejada (Pa)",
"Frequency f (Hz), row {#}":
  "Frecuencia f (Hz), fila {#}",
"Amplitude E_0 (V/m), row {#}":
  "Amplitud E_0 (V/m), fila {#}",
"B_0 (T), row {#}":
  "B_0 (T), fila {#}",
"E_0^{#} (V²/m²), row {#}":
  "E_0^{#} (V²/m²), fila {#}",
"Intensity I (W/m²), row {#}":
  "Intensidad I (W/m²), fila {#}",
"Pressure, absorbed (Pa), row {#}":
  "Presión, absorbida (Pa), fila {#}",
"Pressure, reflected (Pa), row {#}":
  "Presión, reflejada (Pa), fila {#}",
"Amplitude E₀ (V/m)":
  "Amplitud E₀ (V/m)",
"Use one copy of the table for Parts {#} and {#} together and one for Part {#}, and say which setup each Part {#} row is.":
  "Usa una copia de la tabla para las Partes {#} y {#} juntas y otra para la Parte {#}, e indica qué configuración es cada fila de la Parte {#}.",
"<strong>In a plane.</strong> Part {#}.":
  "<strong>En un plano.</strong> Parte {#}.",
"<span>C</span>E direction":
  "<span>C</span>Dirección de E",
"<span>D</span>Periods run":
  "<span>D</span>Periodos transcurridos",
"<span>E</span>Distance from the nearest wire \\(r\\) (λ)":
  "<span>E</span>Distancia al alambre más cercano \\(r\\) (λ)",
"E direction, row {#}":
  "Dirección de E, fila {#}",
"Periods run, row {#}":
  "Periodos transcurridos, fila {#}",
"Distance from the nearest wire r (λ), row {#}":
  "Distancia al alambre más cercano r (λ), fila {#}",
"⟨E²⟩, row {#}":
  "⟨E²⟩, fila {#}",
"r⟨E²⟩ (λ), row {#}":
  "r⟨E²⟩ (λ), fila {#}",
"Graph \\(B_0\\) against \\(E_0\\) for Parts {#} and {#}. Is it a straight line through the origin? From the slope find \\(c\\) and compare it with {#} × {#}⁸ m/s. Do the visible light rows fall on the same line as the {#} GHz rows? What does that tell you?":
  "Grafica \\(B_0\\) en función de \\(E_0\\) para las Partes {#} y {#}. ¿Es una recta que pasa por el origen? A partir de la pendiente encuentra \\(c\\) y compárala con {#} × {#}⁸ m/s. ¿Caen las filas de luz visible sobre la misma recta que las filas de {#} GHz? ¿Qué te dice eso?",
"Graph \\(I\\) against \\(E_0^2\\). From the slope and your value of \\(c\\) find \\(\\varepsilon_0\\), then \\(\\mu_0 = 1/(\\varepsilon_0 c^2)\\), and compare both with the textbook’s values.":
  "Grafica \\(I\\) en función de \\(E_0^2\\). A partir de la pendiente y de tu valor de \\(c\\) encuentra \\(\\varepsilon_0\\), luego \\(\\mu_0 = 1/(\\varepsilon_0 c^2)\\), y compara ambos con los valores del libro.",
"Graph the absorbed pressure against \\(I\\), and then the reflected pressure against \\(I\\). What are the two slopes, and how do they compare with \\(1/c\\)?":
  "Grafica la presión absorbida en función de \\(I\\), y luego la presión reflejada en función de \\(I\\). ¿Cuáles son las dos pendientes, y cómo se comparan con \\(1/c\\)?",
"For the sunlight row, find the force of sunlight on a perfectly reflecting solar sail {#} km on a side. What would be the acceleration of a {#} kg spacecraft from it?":
  "Para la fila de la luz solar, encuentra la fuerza de la luz solar sobre una vela solar perfectamente reflectora de {#} km de lado. ¿Qué aceleración le daría a una nave espacial de {#} kg?",
"For the laser pointer and the radio rows, compare \\(E_0\\) with that of sunlight. Why can a {#} mW laser pointer be brighter than sunlight while a {#} kW station gives a field thousands of times weaker?":
  "Para las filas del apuntador láser y de la radio, compara \\(E_0\\) con el de la luz solar. ¿Por qué un apuntador láser de {#} mW puede ser más brillante que la luz solar mientras que una estación de {#} kW da un campo miles de veces más débil?",
"Write down your Part {#} readings and compare each with \\(\\sin^2\\theta\\). In which direction does the antenna send nothing, and in which does it send the most?":
  "Anota tus lecturas de la Parte {#} y compara cada una con \\(\\sin^2\\theta\\). ¿En qué dirección no emite nada la antena, y en cuál emite más?",
"Part {#}: graph \\(\\langle E^2\\rangle\\) against \\(1/r\\) for the one wire readings. Is \\(r\\langle E^2\\rangle\\) the same at every distance? Explain it with the energy a long wire sends out spreading over ever larger circles, and say how a point source’s intensity would fall instead. Compare the two wires in phase with one wire at the same distance (what factor do you expect when two equal waves arrive in step?), and explain the opposite phase reading. Which polarization does the wire grid let through, and why do the electrons in the rods matter?":
  "Parte {#}: grafica \\(\\langle E^2\\rangle\\) en función de \\(1/r\\) para las lecturas de un alambre. ¿Es \\(r\\langle E^2\\rangle\\) igual a cualquier distancia? Explícalo con la energía que emite un alambre largo repartiéndose sobre círculos cada vez más grandes, y di cómo disminuiría en cambio la intensidad de una fuente puntual. Compara los dos alambres en fase con un alambre a la misma distancia (¿qué factor esperas cuando llegan dos ondas iguales en fase?), y explica la lectura en fase opuesta. ¿Qué polarización deja pasar la rejilla de alambres, y por qué importan los electrones de las varillas?",
"The demo’s values are exact for its model, so the scatter about your lines comes only from the rounding of the readings. Use the standard error of the slope in Analysis {#} to say to how many significant figures your \\(c\\) is known. In a real measurement of radiation pressure (a Nichols radiometer), what effects would make the measured force differ from \\(I/c\\)?":
  "Los valores de la demo son exactos para su modelo, así que la dispersión alrededor de tus rectas viene solo del redondeo de las lecturas. Usa el error estándar de la pendiente del Análisis {#} para decir con cuántas cifras significativas conoces tu \\(c\\). En una medición real de la presión de radiación (un radiómetro de Nichols), ¿qué efectos harían que la fuerza medida difiriera de \\(I/c\\)?",
"Doubling \\(E_0\\) changes the intensity by what factor? And doubling the frequency at the same \\(E_0\\)?":
  "¿Duplicar \\(E_0\\) cambia la intensidad en qué factor? ¿Y duplicar la frecuencia con el mismo \\(E_0\\)?",
"Earth intercepts sunlight over a disk of radius \\(6.37\\times10^6\\) m. Estimate the total force of sunlight on Earth (take it as absorbing) and compare it with the Sun’s gravitational pull, \\(3.5\\times10^{22}\\) N.":
  "La Tierra intercepta la luz solar sobre un disco de radio \\(6.37\\times10^6\\) m. Estima la fuerza total de la luz solar sobre la Tierra (tómala como absorbente) y compárala con la atracción gravitacional del Sol, \\(3.5\\times10^{22}\\) N.",
"The magnetic field of light is drawn as \\(c\\vec B\\) in the demo. Why can it not be drawn as \\(\\vec B\\) on the same scale as \\(\\vec E\\)?":
  "En la demo, el campo magnético de la luz se dibuja como \\(c\\vec B\\). ¿Por qué no se puede dibujar como \\(\\vec B\\) en la misma escala que \\(\\vec E\\)?",
"The pattern of an antenna is \\(\\sin^2\\theta\\). Should a radio tower’s antenna be vertical or horizontal to reach listeners spread over the ground around it?":
  "El patrón de una antena es \\(\\sin^2\\theta\\). ¿La antena de una torre de radio debería ser vertical u horizontal para llegar a oyentes repartidos sobre el suelo a su alrededor?",
"Prelab answers, both table copies with their graphs and fits, your values of \\(c\\), \\(\\varepsilon_0\\) and \\(\\mu_0\\) with uncertainties and comparisons, the solar sail result, the antenna readings, the In a plane table with its graph, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, ambas copias de la tabla con sus gráficas y ajustes, tus valores de \\(c\\), \\(\\varepsilon_0\\) y \\(\\mu_0\\) con incertidumbres y comparaciones, el resultado de la vela solar, las lecturas de la antena, la tabla En un plano con su gráfica, y las respuestas a las preguntas. Identifica los datos simulados.",
"Amplitude of the magnetic field":
  "Amplitud del campo magnético",
"Amplitude of the electric field":
  "Amplitud del campo eléctrico",
"Intensity":
  "Intensidad",
"Intensity in the strongest direction":
  "Intensidad en la dirección más fuerte",
"Poynting vector: the wave's energy flow":
  "Vector de Poynting: el flujo de energía de la onda",
"Radiation pressure":
  "Presión de radiación",
"Distance from the nearest wire":
  "Distancia al alambre más cercano",
"Angle from the antenna's axis":
  "Ángulo desde el eje de la antena",
"Energy density":
  "Densidad de energía",
"A direction across the wave":
  "Una dirección transversal a la onda",
"The other direction across the wave":
  "La otra dirección transversal a la onda",
"Direction the wave travels":
  "Dirección en la que viaja la onda",
"Electromagnetic Waves":
  "Ondas electromagnéticas"
});
