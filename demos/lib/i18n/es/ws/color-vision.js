/* ws/color-vision in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/color-vision', {
"Wavelength or filter center (nm)":
  "Longitud de onda o centro del filtro (nm)",
"Brightness Y":
  "Brillo Y",
"Color Vision: Cones, Mixing and Filters | VirtualDemos":
  "Visión del color: conos, mezclas y filtros | VirtualDemos",
"Color Vision: Cones, Mixing and Filters":
  "Visión del color: conos, mezclas y filtros",
"<strong>Setups in the demo:</strong> Red + green + blue; Red + green; Red + blue; Green + blue; Pure yellow, {#} nm; Pure cyan, {#} nm; Red filter on a bulb; Green filter, photons; Narrow filter at {#} nm.":
  "<strong>Configuraciones en la demo:</strong> Rojo + verde + azul; Rojo + verde; Rojo + azul; Verde + azul; Amarillo puro, {#} nm; Cian puro, {#} nm; Filtro rojo sobre un foco; Filtro verde, fotones; Filtro estrecho en {#} nm.",
"The eye has three kinds of cones, L, M and S, most sensitive to long, middle and short wavelengths. Each cone signal is the light’s spectrum weighted by that cone’s sensitivity and added up over all wavelengths. The sensitivities come from the CIE {#} color matching functions turned into cone responses (the Hunt–Pointer–Estevez matrix), scaled so daylight white gives L = M = S = {#}.":
  "El ojo tiene tres tipos de conos, L, M y S, más sensibles a las longitudes de onda largas, medias y cortas. La señal de cada cono es el espectro de la luz ponderado por la sensibilidad de ese cono y sumado sobre todas las longitudes de onda. Las sensibilidades vienen de las funciones de igualación de color CIE {#} convertidas en respuestas de los conos (la matriz de Hunt–Pointer–Estevez), escaladas para que el blanco de la luz de día dé L = M = S = {#}.",
"Three lamps: red, green and blue lamps with narrow spectra at {#}, {#} and {#} nm. All three at {#}% give exactly daylight white. One wavelength: a single wavelength from {#} to {#} nm; {#}% power at {#} nm is as bright as that white. Mix it from the three lamps finds the lamp powers with the same three cone signals, or says that one lamp would have to be negative. Bulb and filter: an incandescent bulb (a blackbody at {#} K) or daylight, with an ideal filter that passes everything between its two edges and nothing else.":
  "Tres lámparas: lámparas roja, verde y azul con espectros estrechos en {#}, {#} y {#} nm. Las tres al {#}% dan exactamente el blanco de la luz de día. Una longitud de onda: una sola longitud de onda de {#} a {#} nm; {#}% de potencia en {#} nm es tan brillante como ese blanco. Mezclarla con las tres lámparas encuentra las potencias de las lámparas con las mismas tres señales de los conos, o indica que una lámpara tendría que ser negativa. Foco y filtro: un foco incandescente (un cuerpo negro a {#} K) o luz de día, con un filtro ideal que deja pasar todo lo que está entre sus dos bordes y nada más.",
"Brightness Y is the light’s luminance, {#} for the white of the three full lamps.":
  "Brillo Y es la luminancia de la luz, {#} para el blanco de las tres lámparas completas.",
"Colored filters: one or two of red, green, blue, yellow, cyan and magenta can stand in front of any light. They are ideal band filters with edges at {#} and {#} nm (red passes above {#} nm, green {#} to {#} nm, blue below {#} nm, and yellow, cyan and magenta each pass two of those bands); two stacked filters multiply their transmissions. The Light column names them.":
  "Filtros de color: uno o dos de rojo, verde, azul, amarillo, cian y magenta pueden ponerse frente a cualquier luz. Son filtros de banda ideales con bordes en {#} y {#} nm (el rojo deja pasar arriba de {#} nm, el verde de {#} a {#} nm, el azul debajo de {#} nm, y el amarillo, el cian y el magenta dejan pasar cada uno dos de esas bandas); dos filtros apilados multiplican sus transmisiones. La columna Luz los nombra.",
"Record reading stores the light, its wavelength (or the filter’s center), the three cone signals and Y. Export to worksheet sends the readings to the Data table below; Clear starts a new series.":
  "Registrar lectura guarda la luz, su longitud de onda (o el centro del filtro), las tres señales de los conos y Y. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar inicia una nueva serie.",
"Find out what decides the color we see, show that lights add, find two different lights that look the same, and measure how the eye’s sensitivity changes across the spectrum.":
  "Descubre qué decide el color que vemos, muestra que las luces se suman, encuentra dos luces distintas que se ven iguales, y mide cómo cambia la sensibilidad del ojo a lo largo del espectro.",
"The eye cannot measure a spectrum. It has three kinds of cones, and each kind gives one number, its signal:":
  "El ojo no puede medir un espectro. Tiene tres tipos de conos, y cada tipo da un número, su señal:",
"\\[L = \\int S(\\lambda)\\,\\bar l(\\lambda)\\,d\\lambda, \\qquad M = \\int S(\\lambda)\\,\\bar m(\\lambda)\\,d\\lambda, \\qquad S = \\int S(\\lambda)\\,\\bar s(\\lambda)\\,d\\lambda,\\]":
  "\\[L = \\int S(\\lambda)\\,\\bar l(\\lambda)\\,d\\lambda, \\qquad M = \\int S(\\lambda)\\,\\bar m(\\lambda)\\,d\\lambda, \\qquad S = \\int S(\\lambda)\\,\\bar s(\\lambda)\\,d\\lambda,\\]",
"where \\(S(\\lambda)\\) is the power per unit wavelength reaching the eye and \\(\\bar l\\), \\(\\bar m\\), \\(\\bar s\\) are the sensitivities. Every color we see is set by these three numbers. Because the integrals are linear, the signals of two lights shone together are the sums of their separate signals (additive mixing). Two lights with different spectra but the same three signals look identical; they are called metamers.":
  "donde \\(S(\\lambda)\\) es la potencia por unidad de longitud de onda que llega al ojo y \\(\\bar l\\), \\(\\bar m\\), \\(\\bar s\\) son las sensibilidades. Cada color que vemos queda fijado por estos tres números. Como las integrales son lineales, las señales de dos luces que brillan juntas son las sumas de sus señales por separado (mezcla aditiva). Dos luces con espectros distintos pero las mismas tres señales se ven idénticas; se llaman metámeros.",
"A filter multiplies the spectrum by its transmission, which is never more than {#}, so it can only remove light.":
  "Un filtro multiplica el espectro por su transmisión, que nunca es mayor que {#}, así que solo puede quitar luz.",
"The red lamp alone gives L = {#}, M = {#}, S = {#}, and the green lamp alone L = {#}, M = {#}, S = {#}. Predict the three signals for red and green together. Both lamps at full power shine on the same spot: what color does it look, brown, yellow, or a mix in which you can still see red and green? Say how your signals lead you there.":
  "La lámpara roja sola da L = {#}, M = {#}, S = {#}, y la lámpara verde sola L = {#}, M = {#}, S = {#}. Predice las tres señales para la roja y la verde juntas. Ambas lámparas a plena potencia iluminan el mismo punto: ¿de qué color se ve: café, amarillo, o una mezcla en la que todavía se ven el rojo y el verde? Explica cómo te llevan a eso tus señales.",
"Why can a light with signals L = {#}, M = {#}, S = {#} look white although it contains only three narrow bands of wavelengths?":
  "¿Por qué una luz con señales L = {#}, M = {#}, S = {#} puede verse blanca aunque solo contiene tres bandas estrechas de longitudes de onda?",
"A single wavelength at {#} nm excites L and M but almost no S. Which two lamps could make a light that looks the same?":
  "Una sola longitud de onda en {#} nm excita L y M pero casi nada S. ¿Qué dos lámparas podrían formar una luz que se vea igual?",
"A filter passes {#} to {#} nm. Will the light behind it be brighter or dimmer than the bare bulb? Could it ever look green?":
  "Un filtro deja pasar de {#} a {#} nm. ¿La luz detrás de él será más brillante o más tenue que el foco sin filtro? ¿Podría verse verde alguna vez?",
"<strong>Adding lights.</strong> Pick Three lamps above the drawing and set the Red lamp, Green lamp and Blue lamp sliders ({#} turns a lamp off). Press Record reading for each lamp alone at {#}%, for each pair at {#}%, and for all three. Then record red alone at {#}% and red and green both at {#}%. For red and green together at {#}%, look also at the bubble that shows the color seen (untick Blind: hide the color seen, if it is on) and write that color in your answer to Question {#}. Press Export to worksheet, then Clear.":
  "<strong>Sumar luces.</strong> Elige Tres lámparas arriba del dibujo y fija los controles deslizantes Lámpara roja, Lámpara verde y Lámpara azul ({#} apaga una lámpara). Pulsa Registrar lectura con cada lámpara sola al {#}%, con cada par al {#}% y con las tres. Luego registra el rojo solo al {#}% y el rojo y el verde juntos al {#}%. Con el rojo y el verde juntos al {#}%, mira también la burbuja que muestra el color visto (desmarca A ciegas: ocultar el color visto, si está activado) y anota ese color en tu respuesta a la pregunta {#}. Pulsa Exportar a la hoja y luego Borrar.",
"<strong>The eye’s sensitivity.</strong> Pick One wavelength and set Power to {#}%. Set the Wavelength λ slider (arrow keys move it {#} nm) and record a reading every {#} nm from {#} nm to {#} nm, and also at {#} nm. Press Export to worksheet, then Clear.":
  "<strong>La sensibilidad del ojo.</strong> Elige Una longitud de onda y fija Potencia en {#}%. Fija el control Longitud de onda λ (las flechas lo mueven {#} nm) y registra una lectura cada {#} nm de {#} nm a {#} nm, y también a {#} nm. Pulsa Exportar a la hoja y luego Borrar.",
"<strong>Metamers.</strong> Choose the Pure yellow, {#} nm setup and record a reading; press Mix it from the three lamps (above the drawing) and record the mix. Do the same for Pure cyan, {#} nm. Note the message the demo gives for each mix. Press Export to worksheet, then Clear.":
  "<strong>Metámeros.</strong> Elige la configuración Amarillo puro, {#} nm y registra una lectura; pulsa Mezclarla con las tres lámparas (sobre el dibujo) y registra la mezcla. Haz lo mismo con Cian puro, {#} nm. Anota el mensaje que da el demo para cada mezcla. Pulsa Exportar a la hoja y luego Borrar.",
"<strong>Filters.</strong> Pick Bulb and filter, then Incandescent, with Filter in the beam unticked, and record a reading. Tick Filter in the beam, set Filter center to {#} nm, and record readings with the Filter width slider at {#}, {#}, {#}, {#} and {#} nm. Then pick Daylight and record the {#} nm wide filter at {#} nm and at {#} nm. Press Export to worksheet, then Clear.":
  "<strong>Filtros.</strong> Elige Foco y filtro, luego Incandescente, con Filtro en el haz sin marcar, y registra una lectura. Marca Filtro en el haz, fija Centro del filtro en {#} nm y registra lecturas con el control Ancho del filtro en {#}, {#}, {#}, {#} y {#} nm. Luego elige Luz de día y registra el filtro de {#} nm de ancho a {#} nm y a {#} nm. Pulsa Exportar a la hoja y luego Borrar.",
"<strong>Colored filters.</strong> With the Daylight bulb and Filter in the beam unticked, record a reading with Colored filter set to None, then with each colored filter alone (the Colored filter menu below the light’s controls): red, green, blue and yellow. Then stack two, using Second colored filter as well: yellow then cyan, and red then green. Last, pick Three lamps, light the red lamp alone at {#}%, and record it with no filter and through the green filter. Press Export to worksheet.":
  "<strong>Filtros de color.</strong> Con el foco de Luz de día y Filtro en el haz sin marcar, registra una lectura con Filtro de color en Ninguno, y luego con cada filtro de color solo (el menú Filtro de color debajo de los controles de la luz): rojo, verde, azul y amarillo. Luego apila dos, usando también Segundo filtro de color: amarillo y luego cian, y rojo y luego verde. Por último, elige Tres lámparas, enciende la lámpara roja sola a {#}% y regístrala sin filtro y a través del filtro verde. Pulsa Exportar a la hoja.",
"Table {#}. Lights and cone signals.":
  "Tabla {#}. Luces y señales de los conos.",
"<span>B</span>Light":
  "<span>B</span>Luz",
"<span>C</span>Wavelength or filter center (nm)":
  "<span>C</span>Longitud de onda o centro del filtro (nm)",
"<span>G</span>Brightness Y":
  "<span>G</span>Brillo Y",
"Light, row {#}":
  "Luz, fila {#}",
"Wavelength or filter center (nm), row {#}":
  "Longitud de onda o centro del filtro (nm), fila {#}",
"L, row {#}":
  "L, fila {#}",
"M, row {#}":
  "M, fila {#}",
"S, row {#}":
  "S, fila {#}",
"Brightness Y, row {#}":
  "Brillo Y, fila {#}",
"For the lamps, check whether the signals of each pair are the sums of the signals of the two lamps alone, and whether halving the power halves every signal.":
  "Para las lámparas, comprueba si las señales de cada par son las sumas de las señales de las dos lámparas solas, y si reducir la potencia a la mitad reduce a la mitad cada señal.",
"Plot Y (vertical) against wavelength (horizontal) for the single wavelengths. At what wavelength is the eye most sensitive? By what factor is {#} nm dimmer than {#} nm at the same power, and {#} nm?":
  "Grafica Y (vertical) en función de la longitud de onda (horizontal) para las longitudes de onda individuales. ¿En qué longitud de onda es más sensible el ojo? ¿Por qué factor es {#} nm más tenue que {#} nm con la misma potencia, y {#} nm?",
"On the same graph, or in a second one, plot L, M and S (vertical) against wavelength (horizontal). Which wavelengths excite two kinds of cones strongly at once?":
  "En la misma gráfica, o en una segunda, grafica L, M y S (vertical) en función de la longitud de onda. ¿Qué longitudes de onda excitan con fuerza dos tipos de conos a la vez?",
"Compare the cone signals of the {#} nm light and its lamp mix, and of the {#} nm light and its mix. Which pair are metamers, and why does the other fail?":
  "Compara las señales de los conos de la luz de {#} nm y su mezcla de lámparas, y de la luz de {#} nm y su mezcla. ¿Qué par son metámeros, y por qué falla el otro?",
"For the filters, list Y against the filter width (the distance between the two edges named in the Light column). Explain how Y changes as the filter narrows, and why daylight through the red filter is dimmer than the incandescent bulb through it.":
  "Para los filtros, haz una lista de Y en función del ancho del filtro (la distancia entre los dos bordes que nombra la columna Luz). Explica cómo cambia Y cuando el filtro se estrecha, y por qué la luz de día a través del filtro rojo es más tenue que el foco incandescente a través de él.",
"For the colored filters: is the sum of Y through the red, green and blue filters equal to Y with no filter? Compare the yellow filter with the red and green filters added. Compare yellow then cyan with the green filter alone, and explain why stacked filters multiply their transmissions while lamps add. Why does red then green, or the red lamp through the green filter, give nothing at all?":
  "Para los filtros de color: ¿es la suma de Y a través de los filtros rojo, verde y azul igual a Y sin filtro? Compara el filtro amarillo con los filtros rojo y verde sumados. Compara amarillo y luego cian con el filtro verde solo, y explica por qué los filtros apilados multiplican sus transmisiones mientras que las lámparas suman. ¿Por qué rojo y luego verde, o la lámpara roja a través del filtro verde, no da nada en absoluto?",
"The demo’s numbers come from tabulated color matching functions and a model of the lamps, so they carry no random scatter. Name two things that would make real cone signals differ from these numbers for a real person (for example, how cone sensitivities vary between people).":
  "Los números de la demo vienen de funciones de igualación de color tabuladas y de un modelo de las lámparas, así que no tienen dispersión aleatoria. Nombra dos cosas que harían que las señales reales de los conos de una persona real difieran de estos números (por ejemplo, cómo varían las sensibilidades de los conos entre personas).",
"What color did the red and green lamps make together, and what did you expect in Before the lab {#}? Use the L, M and S of that reading to explain it. Why does mixing red and green paint give a dark brown instead?":
  "¿Qué color hicieron juntas las lámparas roja y verde, y qué esperabas en Antes del laboratorio {#}? Usa los valores L, M y S de esa lectura para explicarlo. ¿Por qué mezclar pintura roja y verde da un café oscuro?",
"Magenta appears in no rainbow. Use the cone signals of red + blue to explain why no single wavelength looks magenta.":
  "El magenta no aparece en ningún arcoíris. Usa las señales de los conos de rojo + azul para explicar por qué ninguna longitud de onda sola se ve magenta.",
"Prelab answers, the table copies with their graphs, the additivity check, the metamer comparison, the colored filter comparisons, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de la tabla con sus gráficas, la comprobación de la aditividad, la comparación de los metámeros, las comparaciones de los filtros de color, y respuestas a las preguntas. Identifica los datos simulados.",
"L cone signal: the light weighted by the long wavelength cones' sensitivity and added over all wavelengths":
  "Señal del cono L: la luz ponderada por la sensibilidad de los conos de longitud de onda larga y sumada sobre todas las longitudes de onda",
"M cone signal: the light weighted by the middle wavelength cones' sensitivity and added over all wavelengths":
  "Señal del cono M: la luz ponderada por la sensibilidad de los conos de longitud de onda media y sumada sobre todas las longitudes de onda",
"S cone signal: the light weighted by the short wavelength cones' sensitivity and added over all wavelengths; S(λ) is the spectrum, the power per unit wavelength reaching the eye":
  "Señal del cono S: la luz ponderada por la sensibilidad de los conos de longitud de onda corta y sumada sobre todas las longitudes de onda; S(λ) es el espectro, la potencia por unidad de longitud de onda que llega al ojo",
"Sensitivity of the L cones at wavelength λ":
  "Sensibilidad de los conos L a la longitud de onda λ",
"Sensitivity of the M cones at wavelength λ":
  "Sensibilidad de los conos M a la longitud de onda λ",
"Sensitivity of the S cones at wavelength λ":
  "Sensibilidad de los conos S a la longitud de onda λ",
"Color Vision":
  "Visión del color",
"Light":
  "Luz",
"The red lamp alone gives L = {#}, M = {#}, S = {#}, and the green lamp alone L = {#}, M = {#}, S = {#}. Predict the three signals for red and green together.":
  "La lámpara roja sola da L = {#}, M = {#}, S = {#}, y la lámpara verde sola L = {#}, M = {#}, S = {#}. Predice las tres señales para el rojo y el verde juntos.",
"<strong>Adding lights.</strong> Pick Three lamps above the drawing and set the Red lamp, Green lamp and Blue lamp sliders ({#} turns a lamp off). Press Record reading for each lamp alone at {#}%, for each pair at {#}%, and for all three. Then record red alone at {#}% and red and green both at {#}%. Press Export to worksheet, then Clear.":
  "<strong>Suma de luces.</strong> Elige Tres lámparas sobre el dibujo y fija los controles Lámpara roja, Lámpara verde y Lámpara azul ({#} apaga una lámpara). Pulsa Registrar lectura para cada lámpara sola a {#}%, para cada par a {#}% y para las tres. Luego registra la roja sola a {#}% y la roja y la verde juntas a {#}%. Pulsa Exportar a la hoja y luego Borrar.",
"Why does mixing red and green light give yellow, while mixing red and green paint gives a dark brown?":
  "¿Por qué mezclar luz roja y verde da amarillo, mientras que mezclar pintura roja y verde da un café oscuro?",
"A camera sensor has red, green and blue filters over its pixels. Why is it enough to record only three numbers per pixel to reproduce a scene for a human viewer, but not for many birds, which have four kinds of cones?":
  "El sensor de una cámara tiene filtros rojos, verdes y azules sobre sus píxeles. ¿Por qué basta con registrar solo tres números por píxel para reproducir una escena para un observador humano, pero no para muchas aves, que tienen cuatro tipos de conos?",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"<strong>Adding lights.</strong> With the three lamps, record a reading for each lamp alone at {#}%, for each pair at {#}%, and for all three. Then record red alone at {#}% and red and green both at {#}%. Export the readings, then Clear.":
  "<strong>Suma de luces.</strong> Con las tres lámparas, registra una lectura para cada lámpara sola al {#}%, para cada par al {#}%, y para las tres. Luego registra el rojo solo al {#}% y el rojo y el verde ambos al {#}%. Exporta las lecturas y luego Borrar.",
"<strong>The eye’s sensitivity.</strong> With one wavelength at {#}% power, record a reading every {#} nm from {#} nm to {#} nm, and also at {#} nm. Export the readings, then Clear.":
  "<strong>La sensibilidad del ojo.</strong> Con una longitud de onda al {#}% de potencia, registra una lectura cada {#} nm desde {#} nm hasta {#} nm, y también en {#} nm. Exporta las lecturas y luego Borrar.",
"<strong>Metamers.</strong> Choose Pure yellow, {#} nm and record a reading; press Mix it from the three lamps and record the mix. Do the same for Pure cyan, {#} nm. Note the message the demo gives for each mix. Export the readings, then Clear.":
  "<strong>Metámeros.</strong> Elige Amarillo puro, {#} nm y registra una lectura; presiona Mezclarla con las tres lámparas y registra la mezcla. Haz lo mismo para Cian puro, {#} nm. Anota el mensaje que da la demo para cada mezcla. Exporta las lecturas y luego Borrar.",
"<strong>Filters.</strong> With the incandescent bulb and no filter, record a reading. Put in the filter, centered at {#} nm, and record readings for widths of {#}, {#}, {#}, {#} and {#} nm. Then switch to daylight and record the {#} nm wide filter at {#} nm and at {#} nm. Export the readings, then Clear.":
  "<strong>Filtros.</strong> Con el foco incandescente y sin filtro, registra una lectura. Pon el filtro, centrado en {#} nm, y registra lecturas para anchos de {#}, {#}, {#}, {#} y {#} nm. Luego cambia a luz de día y registra el filtro de {#} nm de ancho en {#} nm y en {#} nm. Exporta las lecturas y luego Borrar.",
"<strong>Colored filters.</strong> With the daylight bulb and its band filter out, record a reading with no colored filter, then with each colored filter alone: red, green, blue, yellow, cyan and magenta. Then stack two: yellow then cyan, and red then green. Last, light the red lamp alone at {#}% and record it with no filter and through the green filter. Export the readings.":
  "<strong>Filtros de color.</strong> Con el foco de luz de día y su filtro de banda quitado, registra una lectura sin filtro de color, y luego con cada filtro de color solo: rojo, verde, azul, amarillo, cian y magenta. Luego apila dos: amarillo y después cian, y rojo y después verde. Por último, enciende la lámpara roja sola al {#}% y regístrala sin filtro y a través del filtro verde. Exporta las lecturas.",
"Plot Y against wavelength for the single wavelengths. At what wavelength is the eye most sensitive? By what factor is {#} nm dimmer than {#} nm at the same power, and {#} nm?":
  "Grafica Y en función de la longitud de onda para las longitudes de onda únicas. ¿A qué longitud de onda es más sensible el ojo? ¿Por qué factor es {#} nm más tenue que {#} nm a la misma potencia, y {#} nm?",
"On the same graph, or in a second one, plot L, M and S against wavelength. Which wavelengths excite two kinds of cones strongly at once?":
  "En la misma gráfica, o en una segunda, grafica L, M y S en función de la longitud de onda. ¿Qué longitudes de onda excitan con fuerza dos tipos de conos a la vez?",
"For the colored filters: is the sum of Y through the red, green and blue filters equal to Y with no filter? Compare the yellow filter with the red and green filters added, and cyan and magenta likewise. Compare yellow then cyan with the green filter alone, and explain why stacked filters multiply their transmissions while lamps add. Why does red then green, or the red lamp through the green filter, give nothing at all?":
  "Para los filtros de color: ¿la suma de Y a través de los filtros rojo, verde y azul es igual a Y sin filtro? Compara el filtro amarillo con la suma de los filtros rojo y verde, y lo mismo para el cian y el magenta. Compara amarillo y después cian con el filtro verde solo, y explica por qué los filtros apilados multiplican sus transmisiones mientras que las lámparas se suman. ¿Por qué rojo y después verde, o la lámpara roja a través del filtro verde, no dan nada en absoluto?",
"Why can no screen built from three primary colors show the pure {#} nm color exactly?":
  "¿Por qué ninguna pantalla hecha de tres colores primarios puede mostrar exactamente el color puro de {#} nm?"
});
