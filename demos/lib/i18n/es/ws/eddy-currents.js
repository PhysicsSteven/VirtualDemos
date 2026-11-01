/* ws/eddy-currents in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/eddy-currents', {
"Pipe":
  "Tubo",
"Magnet m (A·m²)":
  "Imán m (A·m²)",
"Wall w (mm)":
  "Pared w (mm)",
"Conductivity σ (MS/m)":
  "Conductividad σ (MS/m)",
"Fall time t (s)":
  "Tiempo de caída t (s)",
"Eddy Current Braking: a Magnet in a Pipe | VirtualDemos":
  "Frenado por corrientes de Foucault: un imán en un tubo | VirtualDemos",
"Eddy Current Braking: a Magnet in a Pipe":
  "Frenado por corrientes de Foucault: un imán en un tubo",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#}, with Faraday’s and Lenz’s laws from §§{#} and {#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#}, con las leyes de Faraday y de Lenz de §§{#} y {#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"The same magnet is dropped down a copper pipe, an aluminum pipe and a plastic pipe, each {#} m long with a {#} mm inner radius, cut open so you can see the magnet and the currents induced in the walls. A graph shows each magnet’s speed against time.":
  "El mismo imán se deja caer por un tubo de cobre, uno de aluminio y uno de plástico, cada uno de {#} m de largo con un radio interior de {#} mm, abiertos con un corte para que puedas ver el imán y las corrientes inducidas en las paredes. Una gráfica muestra la rapidez de cada imán en función del tiempo.",
"The Set up card on the picture sets the magnet’s strength (its magnetic dipole moment \\(m\\)), the wall thickness \\(w\\) and the temperature of the pipes. It fades away during a drop and comes back when the drop ends or is paused. Changing a setting starts over.":
  "La tarjeta Preparar sobre la imagen fija la intensidad del imán (su momento dipolar magnético \\(m\\)), el grosor de la pared \\(w\\) y la temperatura de los tubos. Se desvanece durante una caída y regresa cuando la caída termina o se pausa. Cambiar un ajuste vuelve a empezar.",
"A timer under each pipe stops when its magnet reaches the bottom, to {#} s. The readouts give each pipe’s conductivity \\(\\sigma\\) and, unless Blind is on, the drag constant, the terminal speed, the predicted fall time and the heat.":
  "Un temporizador debajo de cada tubo se detiene cuando su imán llega al fondo, con resolución de {#} s. Las lecturas dan la conductividad \\(\\sigma\\) de cada tubo y, a menos que A ciegas esté activado, la constante de arrastre, la rapidez terminal, el tiempo de caída predicho y el calor.",
"Record reading works once the magnets have reached the bottom of the metal pipes. It stores one row for each metal pipe: the settings, the pipe’s conductivity and its fall time. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura funciona una vez que los imanes han llegado al fondo de los tubos metálicos. Guarda una fila por cada tubo metálico: los ajustes, la conductividad del tubo y su tiempo de caída. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"The drop runs in real time, so a magnet in a pipe cooled in liquid nitrogen takes about a minute and a half to reach the bottom.":
  "La caída corre en tiempo real, así que un imán en un tubo enfriado con nitrógeno líquido tarda cerca de un minuto y medio en llegar al fondo.",
"The magnet is a {#} mm by {#} mm neodymium cylinder of mass {#} g, treated as a point dipole on the pipe’s axis, and the wall is treated as thin compared with the pipe’s radius. That gives a drag force in proportion to speed, \\(F = kv\\), with \\(k\\) from the formula below (Levin and coworkers, <em>Am. J. Phys.</em> {#}, {#}, {#}). A real magnet that nearly fills the pipe falls at the same order of speed, but not exactly this one. Air drag is ignored, and the magnet does not touch the wall.":
  "El imán es un cilindro de neodimio de {#} mm por {#} mm con una masa de {#} g, tratado como un dipolo puntual sobre el eje del tubo, y la pared se trata como delgada comparada con el radio del tubo. Eso da una fuerza de arrastre proporcional a la rapidez, \\(F = kv\\), con \\(k\\) de la fórmula de abajo (Levin y colaboradores, <em>Am. J. Phys.</em> {#}, {#}, {#}). Un imán real que casi llena el tubo cae con una rapidez del mismo orden, pero no exactamente esta. Se ignora el arrastre del aire, y el imán no toca la pared.",
"Conductivities at {#} °C: copper {#} MS/m and aluminum {#} MS/m. The resistivity changes linearly with temperature, reaching the measured values at liquid nitrogen temperature (−{#} °C), where copper conducts {#} times and aluminum {#} times better than at {#} °C.":
  "Conductividades a {#} °C: cobre {#} MS/m y aluminio {#} MS/m. La resistividad cambia linealmente con la temperatura, y alcanza los valores medidos a la temperatura del nitrógeno líquido (−{#} °C), donde el cobre conduce {#} veces mejor y el aluminio {#} veces mejor que a {#} °C.",
"Measure how the fall time of a magnet in a metal pipe depends on the pipe’s conductivity and on the strength of the magnet, and explain the braking with Faraday’s and Lenz’s laws.":
  "Mide cómo depende el tiempo de caída de un imán en un tubo metálico de la conductividad del tubo y de la intensidad del imán, y explica el frenado con las leyes de Faraday y de Lenz.",
"As the magnet falls, the magnetic flux through each ring of the pipe wall changes: it grows through the rings below the magnet and shrinks through the rings above. By Faraday’s law each ring has an emf, and because the wall conducts, currents circulate around the pipe: <strong>eddy currents</strong> (§{#}). By Lenz’s law they oppose the change, so the rings below push the magnet up and the rings above pull it up. The faster the magnet moves, the faster the flux changes and the larger the currents, so the force is in proportion to the speed:":
  "Conforme el imán cae, el flujo magnético a través de cada anillo de la pared del tubo cambia: crece a través de los anillos que están debajo del imán y disminuye a través de los que están arriba. Por la ley de Faraday cada anillo tiene una fem, y como la pared conduce, circulan corrientes alrededor del tubo: <strong>corrientes de Foucault</strong> (§{#}). Por la ley de Lenz se oponen al cambio, así que los anillos de abajo empujan el imán hacia arriba y los anillos de arriba lo jalan hacia arriba. Mientras más rápido se mueve el imán, más rápido cambia el flujo y mayores son las corrientes, así que la fuerza es proporcional a la rapidez:",
"\\[F = kv,\\qquad k = \\frac{45\\,\\mu_0^2\\,m^2\\,\\sigma\\,w}{1024\\,a^4},\\]":
  "\\[F = kv,\\qquad k = \\frac{45\\,\\mu_0^2\\,m^2\\,\\sigma\\,w}{1024\\,a^4},\\]",
"where \\(a\\) is the radius of the middle of the wall. The current in a ring is in proportion to \\(\\sigma\\) and to the emf (in proportion to \\(m\\)), and the force is that current in the magnet’s field (again in proportion to \\(m\\)), which is why \\(k\\) grows as \\(\\sigma m^2\\).":
  "donde \\(a\\) es el radio del centro de la pared. La corriente en un anillo es proporcional a \\(\\sigma\\) y a la fem (proporcional a \\(m\\)), y la fuerza es esa corriente en el campo del imán (otra vez proporcional a \\(m\\)), por eso \\(k\\) crece como \\(\\sigma m^2\\).",
"A magnet of mass \\(M\\) released from rest reaches its terminal speed \\(v_T = Mg/k\\) within a time of about \\(\\tau = M/k = v_T/g\\). When \\(\\tau\\) is much shorter than the fall, the fall time over a length \\(L\\) is":
  "Un imán de masa \\(M\\) soltado desde el reposo alcanza su rapidez terminal \\(v_T = Mg/k\\) en un tiempo de cerca de \\(\\tau = M/k = v_T/g\\). Cuando \\(\\tau\\) es mucho más corto que la caída, el tiempo de caída a lo largo de una longitud \\(L\\) es",
"\\[t \\approx \\frac{L}{v_T} + \\tau = \\frac{Lk}{Mg} + \\frac{M}{k}\\ \\approx\\ \\frac{Lk}{Mg}.\\]":
  "\\[t \\approx \\frac{L}{v_T} + \\tau = \\frac{Lk}{Mg} + \\frac{M}{k}\\ \\approx\\ \\frac{Lk}{Mg}.\\]",
"At terminal speed the magnet’s kinetic energy no longer changes, so all of the gravitational potential energy it loses becomes heat in the pipe wall.":
  "A la rapidez terminal la energía cinética del imán ya no cambia, así que toda la energía potencial gravitacional que pierde se convierte en calor en la pared del tubo.",
"Seen from above, which way does the current circulate in a ring of wall just below a magnet falling north pole down? In a ring just above it? Explain with Lenz’s law.":
  "Visto desde arriba, ¿en qué sentido circula la corriente en un anillo de la pared justo debajo de un imán que cae con el polo norte hacia abajo? ¿Y en un anillo justo arriba de él? Explícalo con la ley de Lenz.",
"A copper pipe gives a fall time of {#} s. Predict the fall time for an aluminum pipe of the same size, using the conductivities above.":
  "Un tubo de cobre da un tiempo de caída de {#} s. Predice el tiempo de caída para un tubo de aluminio del mismo tamaño, usando las conductividades de arriba.",
"Predict the fall time in the copper pipe if the magnet were half as strong.":
  "Predice el tiempo de caída en el tubo de cobre si el imán fuera la mitad de intenso.",
"Calculate the time for the magnet to fall {#} m through the plastic pipe.":
  "Calcula el tiempo que tarda el imán en caer {#} m por el tubo de plástico.",
"Strong neodymium magnets snap together hard enough to pinch skin and shatter. Keep them apart and away from electronics and cards. Liquid nitrogen causes severe cold burns: use it only with an instructor, gloves and eye protection.":
  "Los imanes de neodimio potentes se juntan con tanta fuerza que pueden pellizcar la piel y romperse. Mantenlos separados y lejos de los aparatos electrónicos y las tarjetas. El nitrógeno líquido causa quemaduras por frío graves: úsalo solo con un instructor, guantes y protección para los ojos.",
"Start with the magnet at {#} A·m² and the wall {#} mm thick. Let each drop run until both metal pipes’ magnets reach the bottom before you record.":
  "Empieza con el imán en {#} A·m² y la pared de {#} mm de grosor. Deja que cada caída corra hasta que los imanes de ambos tubos metálicos lleguen al fondo antes de registrar.",
"<strong>Part {#}: conductivity.</strong> Drop the magnets with the pipes at {#}, {#}, {#}, −{#}, −{#}, −{#}, −{#} and −{#} °C, recording each drop. Send the series to the worksheet, then clear the demo’s readings.":
  "<strong>Parte {#}: conductividad.</strong> Deja caer los imanes con los tubos a {#}, {#}, {#}, −{#}, −{#}, −{#}, −{#} y −{#} °C, registrando cada caída. Envía la serie a la hoja de trabajo y luego borra las lecturas de la demo.",
"<strong>Part {#}: magnet strength.</strong> With the pipes at {#} °C, drop magnets of strength {#}, {#}, {#}, {#}, {#}, {#} and {#} A·m², recording each drop. Send this series as a new copy of the table.":
  "<strong>Parte {#}: intensidad del imán.</strong> Con los tubos a {#} °C, deja caer imanes de intensidad {#}, {#}, {#}, {#}, {#}, {#} y {#} A·m², registrando cada caída. Envía esta serie como una copia nueva de la tabla.",
"<strong>Part {#}: the plastic pipe and the wall.</strong> Note the plastic pipe’s fall time. Then, at {#} °C with the {#} A·m² magnet, note the copper pipe’s fall time for walls {#} mm and {#} mm thick. Put these in the notes under your Part {#} table.":
  "<strong>Parte {#}: el tubo de plástico y la pared.</strong> Anota el tiempo de caída del tubo de plástico. Luego, a {#} °C con el imán de {#} A·m², anota el tiempo de caída del tubo de cobre para paredes de {#} mm y {#} mm de grosor. Ponlos en las notas debajo de tu tabla de la Parte {#}.",
"<span>B</span>Pipe":
  "<span>B</span>Tubo",
"<span>C</span>Temperature \\(T\\) (°C)":
  "<span>C</span>Temperatura \\(T\\) (°C)",
"<span>D</span>Magnet \\(m\\) (A·m²)":
  "<span>D</span>Imán \\(m\\) (A·m²)",
"<span>F</span>Wall \\(w\\) (mm)":
  "<span>F</span>Pared \\(w\\) (mm)",
"<span>G</span>Conductivity \\(\\sigma\\) (MS/m)":
  "<span>G</span>Conductividad \\(\\sigma\\) (MS/m)",
"<span>H</span>Fall time \\(t\\) (s)":
  "<span>H</span>Tiempo de caída \\(t\\) (s)",
"Pipe, row {#}":
  "Tubo, fila {#}",
"Magnet m (A·m²), row {#}":
  "Imán m (A·m²), fila {#}",
"m^{#} (A²·m⁴), row {#}":
  "m^{#} (A²·m⁴), fila {#}",
"Wall w (mm), row {#}":
  "Pared w (mm), fila {#}",
"Conductivity σ (MS/m), row {#}":
  "Conductividad σ (MS/m), fila {#}",
"Fall time t (s), row {#}":
  "Tiempo de caída t (s), fila {#}",
"In Part {#}, work out \\(m^2\\) for the copper rows only and leave it blank for the aluminum rows, so that the graph uses the copper pipe alone.":
  "En la Parte {#}, calcula \\(m^2\\) solo para las filas de cobre y déjalo en blanco para las filas de aluminio, para que la gráfica use solo el tubo de cobre.",
"Part {#}: plot \\(t\\) against \\(\\sigma\\) for all the rows, copper and aluminum together, and fit a line. Why do both metals fall on the same line?":
  "Parte {#}: grafica \\(t\\) en función de \\(\\sigma\\) para todas las filas, cobre y aluminio juntos, y ajusta una recta. ¿Por qué ambos metales caen sobre la misma recta?",
"Calculate the slope you expect, \\(Lk/(Mg\\sigma)\\), from the formula for \\(k\\), with \\(a = 10.3\\ \\text{mm}\\) (the middle of a {#} mm wall), and compare it with your fitted slope. Is the intercept consistent with the small \\(\\tau\\) term?":
  "Calcula la pendiente que esperas, \\(Lk/(Mg\\sigma)\\), a partir de la fórmula de \\(k\\), con \\(a = 10.3\\ \\text{mm}\\) (el centro de una pared de {#} mm), y compárala con tu pendiente ajustada. ¿Es la ordenada al origen consistente con el pequeño término \\(\\tau\\)?",
"Part {#}: plot \\(t\\) against \\(m^2\\) for the copper pipe and fit a line. Compare the slope with the prediction. Which rows lie furthest from the line, and why (think about \\(\\tau\\))?":
  "Parte {#}: grafica \\(t\\) en función de \\(m^2\\) para el tubo de cobre y ajusta una recta. Compara la pendiente con la predicción. ¿Qué filas quedan más lejos de la recta, y por qué (piensa en \\(\\tau\\))?",
"For the copper pipe at {#} °C with the {#} A·m² magnet, find the terminal speed and \\(\\tau\\). Was it fair to treat the whole fall as being at terminal speed?":
  "Para el tubo de cobre a {#} °C con el imán de {#} A·m², encuentra la rapidez terminal y \\(\\tau\\). ¿Era justo tratar toda la caída como si fuera a la rapidez terminal?",
"For the same drop, calculate the heat produced in the pipe. Where did that energy come from?":
  "Para la misma caída, calcula el calor producido en el tubo. ¿De dónde vino esa energía?",
"Part {#}: compare the plastic pipe’s time with your answer to Before the lab question {#}. Did doubling the wall from {#} mm to {#} mm double the fall time? Use the formula for \\(k\\) to explain what you found.":
  "Parte {#}: compara el tiempo del tubo de plástico con tu respuesta a la pregunta {#} de Antes del laboratorio. ¿Duplicar la pared de {#} mm a {#} mm duplicó el tiempo de caída? Usa la fórmula de \\(k\\) para explicar lo que encontraste.",
"The timers read to {#} s, and the settings are exact, so a fit with small residuals confirms the model rather than testing it. The model itself is the larger limit: it treats the magnet as a point and the wall as thin, but here the wall is about a sixth of the radius and the magnet fills two thirds of the bore. Say which way a real magnet’s fall time would likely differ. The conductivity between −{#} °C and −{#} °C comes from a straight line in resistivity between measured values, which is close for pure copper but not exact.":
  "Los temporizadores leen con resolución de {#} s, y los ajustes son exactos, así que un ajuste con residuos pequeños confirma el modelo en lugar de ponerlo a prueba. El modelo mismo es el límite mayor: trata el imán como un punto y la pared como delgada, pero aquí la pared mide cerca de un sexto del radio y el imán llena dos tercios del interior. Di en qué sentido diferiría probablemente el tiempo de caída de un imán real. La conductividad entre −{#} °C y −{#} °C sale de una recta en la resistividad entre valores medidos, lo que se aproxima bien para el cobre puro pero no es exacto.",
"Why is a copper pipe not attracted to a magnet that is held still inside it?":
  "¿Por qué un tubo de cobre no es atraído por un imán que se mantiene quieto dentro de él?",
"A copper pipe with a slit cut along its whole length: will the magnet fall faster or slower than in a whole pipe? Explain.":
  "Un tubo de cobre con una ranura cortada a todo lo largo: ¿el imán caerá más rápido o más lento que en un tubo entero? Explícalo.",
"Eddy current brakes on trains and roller coasters cannot hold a vehicle at rest. Explain why, using your results.":
  "Los frenos por corrientes de Foucault de los trenes y las montañas rusas no pueden mantener un vehículo en reposo. Explica por qué, usando tus resultados.",
"Cooling the copper pipe in liquid nitrogen made the magnet fall about seven times more slowly. Why does a colder metal brake harder?":
  "Enfriar el tubo de cobre con nitrógeno líquido hizo que el imán cayera unas siete veces más lento. ¿Por qué un metal más frío frena con más fuerza?",
"Prelab answers, the two data tables with their graphs and fits, the slopes compared with the formula, the terminal speed, \\(\\tau\\) and heat for one drop, your Part {#} observations, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las dos tablas de datos con sus gráficas y ajustes, las pendientes comparadas con la fórmula, la rapidez terminal, \\(\\tau\\) y el calor para una caída, tus observaciones de la Parte {#}, y las respuestas a las preguntas. Identifica los datos simulados.",
"Drag force from the eddy currents":
  "Fuerza de arrastre de las corrientes de Foucault",
"Length of the fall":
  "Longitud de la caída",
"Mass of the magnet":
  "Masa del imán",
"Temperature of the pipe":
  "Temperatura del tubo",
"Radius of the middle of the pipe's wall":
  "Radio del centro de la pared del tubo",
"Drag constant":
  "Constante de arrastre",
"Magnetic dipole moment of the magnet":
  "Momento dipolar magnético del imán",
"Electrical conductivity of the pipe":
  "Conductividad eléctrica del tubo",
"Fall time":
  "Tiempo de caída",
"Time to reach terminal speed, M/k":
  "Tiempo para alcanzar la rapidez terminal, M/k",
"Speed of the magnet":
  "Rapidez del imán",
"Terminal speed, Mg/k":
  "Rapidez terminal, Mg/k",
"Wall thickness of the pipe":
  "Grosor de la pared del tubo",
"Eddy Currents: Magnet in a Pipe":
  "Corrientes de Foucault: imán en un tubo"
});
