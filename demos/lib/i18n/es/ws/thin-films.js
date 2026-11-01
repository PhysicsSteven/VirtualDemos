/* ws/thin-films in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/thin-films', {
"Thickness t (nm)":
  "Espesor t (nm)",
"Reflectance R (%)":
  "Reflectancia R (%)",
"Probe x (mm)":
  "Sonda x (mm)",
"Order m":
  "Orden m",
"Thin Film Interference | VirtualDemos":
  "Interferencia en películas delgadas | VirtualDemos",
"Thin Film Interference":
  "Interferencia en películas delgadas",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (with §{#} and §{#}). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (con §{#} y §{#}). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Two reflections; Soap bubble colors; Black film; Air wedge fringes; Anti reflection coating; Oil on water.":
  "<strong>Configuraciones en la demo:</strong> Dos reflexiones; Colores de una burbuja de jabón; Película negra; Franjas de una cuña de aire; Recubrimiento antirreflejante; Aceite sobre agua.",
"A film of index \\(n_f\\) and thickness \\(t\\) sits between a medium of index \\(n_1\\) above (the light comes from there) and \\(n_2\\) below. You set the three indices, the thickness, the angle of incidence \\(\\theta_1\\), the polarization and one wavelength \\(\\lambda_0\\) (in vacuum), from {#} to {#} nm.":
  "Una película de índice \\(n_f\\) y espesor \\(t\\) está entre un medio de índice \\(n_1\\) arriba (de ahí viene la luz) y uno de índice \\(n_2\\) abajo. Tú fijas los tres índices, el espesor, el ángulo de incidencia \\(\\theta_1\\), la polarización y una longitud de onda \\(\\lambda_0\\) (en el vacío), de {#} a {#} nm.",
"Four views. Rays draws the two reflected rays and their waves (the film is drawn far thicker than scale); you can drag the bottom surface to change \\(t\\). Soap film, Wedge and Newton’s rings show a film whose thickness changes from place to place, in white light or in the one wavelength \\(\\lambda_0\\); a probe line reads the thickness where you put it, and the Wedge view also gives the probe’s distance \\(x\\) from the edge where the slides touch.":
  "Cuatro vistas. Rayos dibuja los dos rayos reflejados y sus ondas (la película se dibuja mucho más gruesa que a escala); puedes arrastrar la superficie inferior para cambiar \\(t\\). Película de jabón, Cuña y Anillos de Newton muestran una película cuyo espesor cambia de un lugar a otro, con luz blanca o con la única longitud de onda \\(\\lambda_0\\); una línea de sonda lee el espesor donde la pongas, y la vista Cuña también da la distancia \\(x\\) de la sonda al borde donde se tocan los portaobjetos.",
"The readouts give the reflectance \\(R\\) at \\(\\lambda_0\\) for the film (at the probe in the pattern views), the phase shift at each surface, and below the drawing the whole spectrum \\(R(\\lambda)\\).":
  "Las lecturas dan la reflectancia \\(R\\) en \\(\\lambda_0\\) para la película (en la sonda en las vistas de patrones), el cambio de fase en cada superficie y, debajo del dibujo, todo el espectro \\(R(\\lambda)\\).",
"Record reading stores \\(\\lambda_0\\), \\(t\\), \\(R\\) and the settings (and \\(x\\) in the Wedge view). Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda \\(\\lambda_0\\), \\(t\\), \\(R\\) y los ajustes (y \\(x\\) en la vista Cuña). Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"<strong>What the demo models.</strong> The reflectance is the exact single layer (Airy) result: every reflection inside the film is added, with the Fresnel coefficients of the two surfaces. The indices are the same at every wavelength (no dispersion) and nothing absorbs light. A wave reflecting toward a medium of lower index is not shifted; one reflecting from a medium of higher index is shifted by half a cycle (§{#}). Simulated data.":
  "<strong>Qué modela la demo.</strong> La reflectancia es el resultado exacto de una sola capa (de Airy): se suma cada reflexión dentro de la película, con los coeficientes de Fresnel de las dos superficies. Los índices son los mismos para todas las longitudes de onda (sin dispersión) y nada absorbe luz. Una onda que se refleja hacia un medio de índice menor no se desfasa; una que se refleja en un medio de índice mayor se desfasa medio ciclo (§{#}). Datos simulados.",
"Find the thinnest films that reflect a wavelength most strongly and least, see how those thicknesses follow the wavelength and the phase shifts at the two surfaces, and use the fringes of an air wedge to measure a thickness far smaller than a ruler can.":
  "Encuentra las películas más delgadas que reflejan una longitud de onda con más fuerza y con menos, ve cómo esos espesores siguen a la longitud de onda y a los cambios de fase en las dos superficies, y usa las franjas de una cuña de aire para medir un espesor mucho menor de lo que puede medir una regla.",
"Light reflected from the top of a film and light reflected from the bottom travel different distances. At normal incidence the second wave goes down through the film and back, an extra path \\(2t\\) in a medium where the wavelength is \\(\\lambda_n = \\lambda_0/n_f\\) (§{#}). Each reflection from a medium of higher index adds a phase shift of half a wavelength; a reflection from a medium of lower index adds none.":
  "La luz reflejada en la parte superior de una película y la luz reflejada en la parte inferior recorren distancias distintas. Con incidencia normal la segunda onda baja a través de la película y regresa, un camino adicional \\(2t\\) en un medio donde la longitud de onda es \\(\\lambda_n = \\lambda_0/n_f\\) (§{#}). Cada reflexión en un medio de índice mayor agrega un cambio de fase de media longitud de onda; una reflexión en un medio de índice menor no agrega ninguno.",
"If exactly one of the two reflections is shifted (a soap film in air, or an air gap between glass slides), the two waves add when":
  "Si exactamente una de las dos reflexiones se desfasa (una película de jabón en el aire, o un espacio de aire entre portaobjetos de vidrio), las dos ondas se suman cuando",
"\\[2t = \\left(m + \\tfrac{1}{2}\\right)\\frac{\\lambda_0}{n_f}, \\qquad m = 0, 1, 2, \\ldots\\]":
  "\\[2t = \\left(m + \\tfrac{1}{2}\\right)\\frac{\\lambda_0}{n_f}, \\qquad m = 0, 1, 2, \\ldots\\]",
"and cancel when \\(2t = m\\lambda_0/n_f\\). If both are shifted, or neither, the conditions swap: they cancel when \\(2t = \\left(m + \\tfrac{1}{2}\\right)\\lambda_0/n_f\\) and add when \\(2t = m\\lambda_0/n_f\\). So the thinnest film that reflects most strongly in the first case is a quarter wave thick, \\(t = \\lambda_0/(4n_f)\\), and the thinnest film (other than zero) that cancels the reflection is half a wave thick, \\(t = \\lambda_0/(2n_f)\\).":
  "y se cancelan cuando \\(2t = m\\lambda_0/n_f\\). Si ambas se desfasan, o ninguna, las condiciones se intercambian: se cancelan cuando \\(2t = \\left(m + \\tfrac{1}{2}\\right)\\lambda_0/n_f\\) y se suman cuando \\(2t = m\\lambda_0/n_f\\). Así que la película más delgada que refleja con más fuerza en el primer caso tiene un espesor de un cuarto de onda, \\(t = \\lambda_0/(4n_f)\\), y la película más delgada (distinta de cero) que cancela la reflexión tiene un espesor de media onda, \\(t = \\lambda_0/(2n_f)\\).",
"Two flat glass slides touching at one edge and held apart by a spacer of thickness \\(h\\) at a distance \\(L\\) make an air wedge with gap \\(t = xh/L\\) at a distance \\(x\\) from the edge. Each dark fringe has half a wavelength more gap than the one before, so the fringes are evenly spaced,":
  "Dos portaobjetos de vidrio planos que se tocan en un borde y se mantienen separados por un separador de espesor \\(h\\) a una distancia \\(L\\) forman una cuña de aire con un espacio \\(t = xh/L\\) a una distancia \\(x\\) del borde. Cada franja oscura tiene media longitud de onda más de espacio que la anterior, así que las franjas están igualmente espaciadas,",
"\\[\\Delta x = \\frac{\\lambda_0 L}{2 n_f h}.\\]":
  "\\[\\Delta x = \\frac{\\lambda_0 L}{2 n_f h}.\\]",
"Light in air falls on a soap film (\\(n_f = 1.33\\)) with air behind it. Which of the two reflections is shifted by half a wavelength? Write the conditions for strong and weak reflection.":
  "La luz en el aire incide sobre una película de jabón (\\(n_f = 1.33\\)) con aire detrás. ¿Cuál de las dos reflexiones se desfasa media longitud de onda? Escribe las condiciones para una reflexión fuerte y para una débil.",
"Predict the thinnest soap film that reflects {#} nm light most strongly, and the thinnest film (other than zero) that does not reflect it at all.":
  "Predice la película de jabón más delgada que refleja con más fuerza la luz de {#} nm, y la película más delgada (distinta de cero) que no la refleja en absoluto.",
"A magnesium fluoride coating (\\(n_f = 1.38\\)) is put on glass (\\(n = 1.52\\)). Which reflections are shifted now? Predict the thinnest coating that reflects {#} nm light least.":
  "Se pone un recubrimiento de fluoruro de magnesio (\\(n_f = 1.38\\)) sobre vidrio (\\(n = 1.52\\)). ¿Qué reflexiones se desfasan ahora? Predice el recubrimiento más delgado que refleja menos la luz de {#} nm.",
"Two glass slides {#} mm long touch at one edge, with a spacer {#} μm thick at the other. Predict the spacing of the dark fringes in sodium light, {#} nm.":
  "Dos portaobjetos de vidrio de {#} mm de largo se tocan en un borde, con un separador de {#} μm de espesor en el otro. Predice la separación de las franjas oscuras con luz de sodio, {#} nm.",
"This is a virtual activity. With a real lamp and soap films, keep soap solution away from the eyes and electrical equipment, and do not look straight into a bright lamp.":
  "Esta es una actividad virtual. Con una lámpara real y películas de jabón, mantén la solución jabonosa lejos de los ojos y del equipo eléctrico, y no mires directamente a una lámpara brillante.",
"<strong>Part {#}: soap film, strongest reflection.</strong> Start from the Black film setup: a soap film in air, light at normal incidence, unpolarized. For each wavelength \\(\\lambda_0\\) = {#}, {#}, {#}, {#}, {#}, {#} and {#} nm, start from a very thin film and thicken it slowly until the reflectance \\(R\\) at \\(\\lambda_0\\) is as large as it gets (the first maximum), and record a reading there. Send the seven readings to the worksheet.":
  "<strong>Parte {#}: película de jabón, reflexión más fuerte.</strong> Empieza con la configuración Película negra: una película de jabón en el aire, luz con incidencia normal, sin polarizar. Para cada longitud de onda \\(\\lambda_0\\) = {#}, {#}, {#}, {#}, {#}, {#} y {#} nm, empieza con una película muy delgada y engrósala lentamente hasta que la reflectancia \\(R\\) en \\(\\lambda_0\\) sea lo más grande posible (el primer máximo), y registra ahí una lectura. Envía las siete lecturas a la hoja de trabajo.",
"<strong>Part {#}: soap film, no reflection.</strong> Clear the readings. For the same seven wavelengths, find the thinnest film other than zero at which \\(R\\) falls to zero, and record a reading there. Send them; they go into a new copy of the table.":
  "<strong>Parte {#}: película de jabón, sin reflexión.</strong> Borra las lecturas. Para las mismas siete longitudes de onda, encuentra la película más delgada distinta de cero en la que \\(R\\) cae a cero, y registra ahí una lectura. Envíalas; van a una copia nueva de la tabla.",
"<strong>Part {#}: anti reflection coating.</strong> Clear the readings and pick the Anti reflection coating setup (magnesium fluoride on glass, normal incidence). For \\(\\lambda_0\\) = {#}, {#}, {#}, {#} and {#} nm, find the thinnest coating at which \\(R\\) is least and record a reading there. Send the five readings. Then set the coating back to the thickness you found for {#} nm and write down \\(R\\) at {#} nm and at {#} nm (no need to record them), and the reflectance of bare glass, which the demo gives.":
  "<strong>Parte {#}: recubrimiento antirreflejante.</strong> Borra las lecturas y elige la configuración Recubrimiento antirreflejante (fluoruro de magnesio sobre vidrio, incidencia normal). Para \\(\\lambda_0\\) = {#}, {#}, {#}, {#} y {#} nm, encuentra el recubrimiento más delgado en el que \\(R\\) es mínima y registra ahí una lectura. Envía las cinco lecturas. Luego regresa el recubrimiento al espesor que encontraste para {#} nm y anota \\(R\\) a {#} nm y a {#} nm (no hace falta registrarlas), y la reflectancia del vidrio sin recubrimiento, que da la demo.",
"<strong>Part {#}: air wedge.</strong> Clear the readings and pick the Air wedge fringes setup (sodium light, {#} nm, spacer {#} μm, slides {#} mm long). Put the probe on the edge where the slides touch and record a reading, then move it to the middle of each dark fringe in turn (where \\(R\\) is least) and record a reading at each, up to the eighth dark fringe. Send them, and type the order \\(m\\) of each fringe ({#} at the edge) into the last column.":
  "<strong>Parte {#}: cuña de aire.</strong> Borra las lecturas y elige la configuración Franjas de una cuña de aire (luz de sodio, {#} nm, separador de {#} μm, portaobjetos de {#} mm de largo). Pon la sonda en el borde donde se tocan los portaobjetos y registra una lectura; luego muévela al centro de cada franja oscura sucesiva (donde \\(R\\) es mínima) y registra una lectura en cada una, hasta la octava franja oscura. Envíalas, y escribe el orden \\(m\\) de cada franja ({#} en el borde) en la última columna.",
"<strong>Part {#}: a thicker spacer.</strong> Clear the readings, change the spacer to {#} μm and repeat Part {#} for the edge and the first eight dark fringes. Send them and type the orders.":
  "<strong>Parte {#}: un separador más grueso.</strong> Borra las lecturas, cambia el separador a {#} μm y repite la Parte {#} para el borde y las primeras ocho franjas oscuras. Envíalas y escribe los órdenes.",
"<span>C</span>\\(\\lambda_0\\) (nm)":
  "<span>C</span>\\(\\lambda_0\\) (nm)",
"<span>D</span>Thickness \\(t\\) (nm)":
  "<span>D</span>Espesor \\(t\\) (nm)",
"<span>E</span>Reflectance \\(R\\) (%)":
  "<span>E</span>Reflectancia \\(R\\) (%)",
"<span>F</span>Probe \\(x\\) (mm)":
  "<span>F</span>Sonda \\(x\\) (mm)",
"<span>G</span>Order \\(m\\)":
  "<span>G</span>Orden \\(m\\)",
"λ_0 (nm), row {#}":
  "λ_0 (nm), fila {#}",
"Thickness t (nm), row {#}":
  "Espesor t (nm), fila {#}",
"Reflectance R (%), row {#}":
  "Reflectancia R (%), fila {#}",
"Probe x (mm), row {#}":
  "Sonda x (mm), fila {#}",
"Order m, row {#}":
  "Orden m, fila {#}",
"Use one copy of the table for each part. In the notes for Part {#}, write down the reflectance of bare glass and the coating’s reflectance at {#} and {#} nm.":
  "Usa una copia de la tabla para cada parte. En las notas de la Parte {#}, anota la reflectancia del vidrio sin recubrimiento y la reflectancia del recubrimiento a {#} y {#} nm.",
"Graph the Part {#} thickness \\(t\\) against \\(\\lambda_0\\). Is it a straight line through the origin? From the slope find \\(n_f\\) and compare it with {#}.":
  "Grafica el espesor \\(t\\) de la Parte {#} en función de \\(\\lambda_0\\). ¿Es una recta que pasa por el origen? A partir de la pendiente encuentra \\(n_f\\) y compáralo con {#}.",
"Graph the Part {#} thicknesses the same way. What is the ratio of this slope to the Part {#} slope, and why?":
  "Grafica de la misma manera los espesores de la Parte {#}. ¿Cuál es la razón entre esta pendiente y la pendiente de la Parte {#}, y por qué?",
"Graph the Part {#} thicknesses against \\(\\lambda_0\\) and find the index of the coating from the slope. The soap film’s strongest reflection and the coating’s weakest both come at a quarter wave. Explain, using the phase shifts, why the same thickness does opposite things.":
  "Grafica los espesores de la Parte {#} en función de \\(\\lambda_0\\) y encuentra el índice del recubrimiento a partir de la pendiente. La reflexión más fuerte de la película de jabón y la más débil del recubrimiento ocurren ambas a un cuarto de onda. Explica, usando los cambios de fase, por qué el mismo espesor hace cosas opuestas.",
"Compare the coating’s reflectance at {#} nm with the bare glass, and with the formula \\(R = \\left[(n_1 n_2 - n_f^2)/(n_1 n_2 + n_f^2)\\right]^2\\). Use your readings at {#} and {#} nm to explain why coated lenses look faintly purple.":
  "Compara la reflectancia del recubrimiento a {#} nm con la del vidrio sin recubrimiento, y con la fórmula \\(R = \\left[(n_1 n_2 - n_f^2)/(n_1 n_2 + n_f^2)\\right]^2\\). Usa tus lecturas a {#} y {#} nm para explicar por qué las lentes con recubrimiento se ven ligeramente moradas.",
"Graph the Part {#} probe position \\(x\\) against the order \\(m\\). From the slope (the fringe spacing \\(\\Delta x\\)) find the spacer thickness \\(h\\), and compare it with {#} μm. What gap \\(t\\) does each fringe add?":
  "Grafica la posición \\(x\\) de la sonda de la Parte {#} en función del orden \\(m\\). A partir de la pendiente (la separación de las franjas \\(\\Delta x\\)) encuentra el espesor del separador \\(h\\), y compáralo con {#} μm. ¿Qué espacio \\(t\\) agrega cada franja?",
"Do the same for Part {#}. By what factor did the fringe spacing change, and why?":
  "Haz lo mismo para la Parte {#}. ¿En qué factor cambió la separación de las franjas, y por qué?",
"Near a maximum \\(R\\) changes very slowly with \\(t\\), so a range of thicknesses gives the same reading; near a zero it changes quickly. Estimate the range of \\(t\\) over which each kind of reading looks the same, and say how that shows in the scatter of your Parts {#} and {#} graphs. For the wedge, the probe reads to {#} mm; estimate how well you can find the middle of a dark fringe, and propagate that into \\(h\\). Why does a fit over nine fringes give a better \\(h\\) than one fringe spacing?":
  "Cerca de un máximo \\(R\\) cambia muy lentamente con \\(t\\), así que un intervalo de espesores da la misma lectura; cerca de un cero cambia rápidamente. Estima el intervalo de \\(t\\) en el que cada tipo de lectura se ve igual, y di cómo se refleja eso en la dispersión de tus gráficas de las Partes {#} y {#}. Para la cuña, la sonda lee con resolución de {#} mm; estima qué tan bien puedes encontrar el centro de una franja oscura, y propágalo a \\(h\\). ¿Por qué un ajuste sobre nueve franjas da una \\(h\\) mejor que una sola separación entre franjas?",
"Just before a soap bubble bursts, its top looks black. Why does a film much thinner than the wavelength reflect almost nothing, when a coating much thinner than the wavelength on glass does not make the glass look black?":
  "Justo antes de que una burbuja de jabón reviente, su parte superior se ve negra. ¿Por qué una película mucho más delgada que la longitud de onda casi no refleja nada, cuando un recubrimiento mucho más delgado que la longitud de onda sobre vidrio no hace que el vidrio se vea negro?",
"An oil slick (\\(n_f = 1.47\\)) {#} nm thick floats on water (\\(n = 1.33\\)). Which visible wavelengths does it reflect most strongly, and which least? Check your answer with the Oil on water setup.":
  "Una mancha de aceite (\\(n_f = 1.47\\)) de {#} nm de espesor flota sobre agua (\\(n = 1.33\\)). ¿Qué longitudes de onda visibles refleja con más fuerza, y cuáles con menos? Comprueba tu respuesta con la configuración Aceite sobre agua.",
"Why do the colors of a soap film fade to white where it is more than about {#} μm thick?":
  "¿Por qué los colores de una película de jabón se desvanecen hasta el blanco donde mide más de unos {#} μm de espesor?",
"If the air wedge of Part {#} were filled with water (\\(n = 1.33\\)), what would the fringe spacing be?":
  "Si la cuña de aire de la Parte {#} se llenara de agua (\\(n = 1.33\\)), ¿cuál sería la separación de las franjas?",
"A soap film seen at a slant shows different colors from the same film seen straight on. Why? (Hint: the extra path is \\(2n_f t\\cos\\theta_t\\).)":
  "Una película de jabón vista de manera oblicua muestra colores distintos de los de la misma película vista de frente. ¿Por qué? (Pista: el camino adicional es \\(2n_f t\\cos\\theta_t\\).)",
"Prelab answers, the five table copies with their graphs and fits, the index of the soap film and of the coating, the two spacer thicknesses with uncertainties and comparisons, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las cinco copias de la tabla con sus gráficas y ajustes, el índice de la película de jabón y del recubrimiento, los dos espesores del separador con incertidumbres y comparaciones, y las respuestas a las preguntas. Identifica los datos simulados.",
"Reflectance, as a fraction of the light (100R is the percent)":
  "Reflectancia, como fracción de la luz (100R es el porcentaje)",
"Distance from the touching edge to the spacer":
  "Distancia del borde donde se tocan al separador",
"Reflectance, as a percent":
  "Reflectancia, como porcentaje",
"Thickness of the spacer":
  "Espesor del separador",
"Wavelength in vacuum":
  "Longitud de onda en el vacío",
"Wavelength in the film":
  "Longitud de onda en la película",
"Order":
  "Orden",
"Index of refraction of the material below":
  "Índice de refracción del material de abajo",
"Index of the medium above the film":
  "Índice del medio sobre la película",
"Index of the medium below the film":
  "Índice del medio debajo de la película",
"Index of refraction of the film":
  "Índice de refracción de la película",
"Thickness of the film (or of the wedge's gap)":
  "Espesor de la película (o del espacio de la cuña)",
"Angle of incidence":
  "Ángulo de incidencia",
"Angle of the light inside the film":
  "Ángulo de la luz dentro de la película",
"Distance from the edge where the slides touch (Δx: fringe spacing)":
  "Distancia desde el borde donde se tocan los portaobjetos (Δx: separación de las franjas)"
});
