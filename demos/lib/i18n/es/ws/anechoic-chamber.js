/* ws/anechoic-chamber in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/anechoic-chamber', {
"Walls":
  "Paredes",
"Band (Hz)":
  "Banda (Hz)",
"Distance r (m)":
  "Distancia r (m)",
"log_2 r":
  "log_2 r",
"Level L (dB)":
  "Nivel L (dB)",
"Anechoic Chamber | VirtualDemos":
  "Cámara anecoica | VirtualDemos",
"Anechoic Chamber":
  "Cámara anecoica",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#}. The wedge cutoff follows L. L. Beranek and H. P. Sleeper, <em>J. Acoust. Soc. Am.</em> {#}, {#} ({#}). Access OpenStax for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#}. El corte de las cuñas sigue a L. L. Beranek y H. P. Sleeper, <em>J. Acoust. Soc. Am.</em> {#}, {#} ({#}). Acceso gratuito a OpenStax en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Bare room; Add absorbing panels; Room with an audience; Anechoic chamber; Below the cutoff; Mystery panels.":
  "<strong>Configuraciones en la demo:</strong> Sala vacía; Agregar paneles absorbentes; Sala con público; Cámara anecoica; Debajo del corte; Paneles misteriosos.",
"<strong>Using the demo.</strong> A 3D view of a room (Plan switches to the view from above), with a loudspeaker and a microphone on its center line, {#} m up; drag the microphone along the center line in either view. Under it is a graph of the sound level against distance. The room’s size, its walls (hard, with panels, or lined with wedges), the wedge depth, the floor and the microphone distance are on the Set up card (the arrow keys move the microphone in steps of {#} m, {#} m with Shift; the slider moves it in {#} m steps). Measure chooses Level against distance (this worksheet) or Reverberation time (the Reverberation Time worksheet), and the octave band from {#} Hz to {#} kHz. Blind hides the free field line, the predictions and the wedge cutoff; the level meter stays.":
  "<strong>Uso de la demo.</strong> Una vista 3D de una sala (Planta cambia a la vista desde arriba), con un altavoz y un micrófono sobre su línea central, a {#} m de altura; arrastra el micrófono a lo largo de la línea central en cualquiera de las dos vistas. Debajo hay una gráfica del nivel sonoro en función de la distancia. El tamaño de la sala, sus paredes (duras, con paneles o recubiertas de cuñas), la profundidad de las cuñas, el piso y la distancia del micrófono están en la tarjeta de configuración (las flechas mueven el micrófono en pasos de {#} m, {#} m con Shift; el control deslizante lo mueve en pasos de {#} m). Medir elige Nivel en función de la distancia (esta hoja de trabajo) o Tiempo de reverberación (la hoja de trabajo Tiempo de reverberación), y la banda de octava de {#} Hz a {#} kHz. A ciegas oculta la recta de campo libre, las predicciones y el corte de las cuñas; el medidor de nivel se queda.",
"<strong>What the demo models.</strong> A steady {#} mW source, the same in every direction, playing noise in the chosen band. Ray tracing gives the reflected sound: each surface keeps a fraction \\(\\alpha\\) of a ray’s energy and sends the rest off in a random direction, and energies add, so there is no interference. The direct sound is exact, \\(I = P/(4\\pi r^2)\\). The wedges absorb all but a pressure fraction \\(R = 0.1\\,(f_c/f)^2\\) (at most {#}) of the sound, with \\(f_c = c/(4d)\\); the form of \\(R\\) is this demo’s stated model, not measured data. Air absorbs nothing, \\(c = 343.2\\) m/s and \\(\\rho = 1.204\\ \\mathrm{kg/m^3}\\). The meter reads to {#} dB, with no noise. Simulated data.":
  "<strong>Lo que modela la demo.</strong> Una fuente estable de {#} mW, igual en todas direcciones, que emite ruido en la banda elegida. El trazado de rayos da el sonido reflejado: cada superficie se queda con una fracción \\(\\alpha\\) de la energía de un rayo y envía el resto en una dirección al azar, y las energías se suman, así que no hay interferencia. El sonido directo es exacto, \\(I = P/(4\\pi r^2)\\). Las cuñas absorben todo el sonido salvo una fracción de presión \\(R = 0.1\\,(f_c/f)^2\\) (a lo sumo {#}), con \\(f_c = c/(4d)\\); la forma de \\(R\\) es el modelo declarado de esta demo, no datos medidos. El aire no absorbe nada, \\(c = 343.2\\) m/s y \\(\\rho = 1.204\\ \\mathrm{kg/m^3}\\). El medidor lee con resolución de {#} dB, sin ruido. Datos simulados.",
"Show that sound from a small source falls off as \\(1/r^2\\) when nothing reflects it, find the source’s power, find where wedges stop working, and compare with an ordinary room.":
  "Muestra que el sonido de una fuente pequeña disminuye como \\(1/r^2\\) cuando nada lo refleja, encuentra la potencia de la fuente, encuentra dónde dejan de funcionar las cuñas, y compara con una sala ordinaria.",
"In free space, a source of power \\(P\\) spreads its sound over a sphere, so the intensity at distance \\(r\\) is \\(I = P/(4\\pi r^2)\\). A sound level meter measures the pressure: in a traveling wave \\(I = p_{\\text{rms}}^2/(\\rho c)\\), and the level is":
  "En el espacio libre, una fuente de potencia \\(P\\) reparte su sonido sobre una esfera, así que la intensidad a una distancia \\(r\\) es \\(I = P/(4\\pi r^2)\\). Un sonómetro mide la presión: en una onda viajera \\(I = p_{\\text{rms}}^2/(\\rho c)\\), y el nivel es",
"\\[L = 20\\log_{10}\\frac{p_{\\text{rms}}}{20\\ \\mathrm{\\mu Pa}}.\\]":
  "\\[L = 20\\log_{10}\\frac{p_{\\text{rms}}}{20\\ \\mathrm{\\mu Pa}}.\\]",
"Each doubling of \\(r\\) divides \\(I\\) by {#}, so \\(L\\) falls by \\(10\\log_{10}4 = 6.02\\) dB. A graph of \\(L\\) against \\(\\log_2 r\\) is then a straight line of slope \\(-6.02\\) dB per doubling, and its value at \\(r = 1\\) m gives \\(P\\).":
  "Cada vez que \\(r\\) se duplica, \\(I\\) se divide entre {#}, así que \\(L\\) baja \\(10\\log_{10}4 = 6.02\\) dB. Una gráfica de \\(L\\) en función de \\(\\log_2 r\\) es entonces una recta de pendiente \\(-6.02\\) dB por duplicación, y su valor en \\(r = 1\\) m da \\(P\\).",
"An anechoic chamber is lined with wedges of porous material that absorb almost all of the sound reaching them, so only the direct sound is left. A wedge works when it is long compared with the wavelength. The usual rule is that wedges of length \\(d\\) absorb {#} % of the energy down to the cutoff frequency":
  "Una cámara anecoica está recubierta de cuñas de material poroso que absorben casi todo el sonido que les llega, así que solo queda el sonido directo. Una cuña funciona cuando es larga comparada con la longitud de onda. La regla usual es que las cuñas de longitud \\(d\\) absorben el {#} % de la energía hasta la frecuencia de corte",
"\\[f_c = \\frac{c}{4d},\\]":
  "\\[f_c = \\frac{c}{4d},\\]",
"where \\(d\\) is a quarter wavelength. Below \\(f_c\\) they reflect more and more. In an ordinary room, the reflected sound fills the room at a nearly steady level, so far from the source the level stops falling. The critical distance, where the direct and reflected sound are equal, is about \\(r_c = \\sqrt{A/(16\\pi)}\\), with \\(A\\) the room’s total absorption in square meters.":
  "donde \\(d\\) es un cuarto de longitud de onda. Por debajo de \\(f_c\\) reflejan cada vez más. En una sala ordinaria, el sonido reflejado llena la sala a un nivel casi constante, así que lejos de la fuente el nivel deja de bajar. La distancia crítica, donde el sonido directo y el reflejado son iguales, es aproximadamente \\(r_c = \\sqrt{A/(16\\pi)}\\), con \\(A\\) la absorción total de la sala en metros cuadrados.",
"A {#} mW source: find \\(I\\) at {#} m, then \\(p_{\\text{rms}}\\) and \\(L\\) (\\(\\rho c = 413\\ \\mathrm{kg/(m^2\\,s)}\\)).":
  "Una fuente de {#} mW: encuentra \\(I\\) a {#} m, luego \\(p_{\\text{rms}}\\) y \\(L\\) (\\(\\rho c = 413\\ \\mathrm{kg/(m^2\\,s)}\\)).",
"Find the cutoff frequency of wedges {#} m deep, and the depth needed for a cutoff of {#} Hz.":
  "Encuentra la frecuencia de corte de cuñas de {#} m de profundidad, y la profundidad necesaria para un corte de {#} Hz.",
"Why does the level in a free field fall by {#} dB for each doubling of distance, while in a hard room it levels off?":
  "¿Por qué el nivel en un campo libre baja {#} dB por cada duplicación de la distancia, mientras que en una sala dura se estabiliza?",
"A room has \\(A = 5.0\\) m². Find its critical distance.":
  "Una sala tiene \\(A = 5.0\\) m². Encuentra su distancia crítica.",
"A real anechoic chamber is very quiet and can be disorienting: do not work alone, keep the door open when not measuring, and walk only on the wire floor’s walkways. The wedges are fragile.":
  "Una cámara anecoica real es muy silenciosa y puede desorientar: no trabajes solo, deja la puerta abierta cuando no estés midiendo, y camina solo por los pasillos del piso de malla. Las cuñas son frágiles.",
"<strong>Part {#}: the anechoic chamber.</strong> In the chamber with {#} m wedges, at {#} Hz, measure the level at eight distances from {#} to {#} m, including {#}, {#}, {#} and {#} m.":
  "<strong>Parte {#}: la cámara anecoica.</strong> En la cámara con cuñas de {#} m, a {#} Hz, mide el nivel a ocho distancias de {#} a {#} m, incluidas {#}, {#}, {#} y {#} m.",
"<strong>Part {#}: below the cutoff.</strong> In the same chamber, at {#} Hz, measure the level at the same distances.":
  "<strong>Parte {#}: por debajo del corte.</strong> En la misma cámara, a {#} Hz, mide el nivel a las mismas distancias.",
"<strong>Part {#}: deeper wedges.</strong> Line the chamber with {#} m wedges and repeat Part {#} at {#} Hz, at distances from {#} to {#} m (the room is now smaller inside).":
  "<strong>Parte {#}: cuñas más profundas.</strong> Recubre la cámara con cuñas de {#} m y repite la Parte {#} a {#} Hz, a distancias de {#} a {#} m (la sala ahora es más pequeña por dentro).",
"<strong>Part {#}: an ordinary room.</strong> In the {#} m × {#} m × {#} m room with hard walls and a concrete floor, at {#} Hz, measure the level at eight distances from {#} to {#} m.":
  "<strong>Parte {#}: una sala ordinaria.</strong> En la sala de {#} m × {#} m × {#} m con paredes duras y piso de concreto, a {#} Hz, mide el nivel a ocho distancias de {#} a {#} m.",
"<strong>Using the virtual apparatus.</strong> Measure Level against distance in every part. Choosing the bare room for Part {#} switches the measurement back to Reverberation time, so choose Level against distance again after setting up the room. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table. Fill the \\(\\log_2 r\\) column yourself.":
  "<strong>Uso del aparato virtual.</strong> Mide Nivel en función de la distancia en todas las partes. Elegir la sala desnuda para la Parte {#} regresa la medición a Tiempo de reverberación, así que elige de nuevo Nivel en función de la distancia después de preparar la sala. Envía cada parte a la hoja de trabajo antes de borrar, para que cada parte tenga su propia copia de la tabla de datos. Llena tú la columna \\(\\log_2 r\\).",
"<span>B</span>Walls":
  "<span>B</span>Paredes",
"<span>C</span>Band (Hz)":
  "<span>C</span>Banda (Hz)",
"<span>D</span>Distance \\(r\\) (m)":
  "<span>D</span>Distancia \\(r\\) (m)",
"<span>E</span>\\(\\log_2 r\\)":
  "<span>E</span>\\(\\log_2 r\\)",
"<span>F</span>Level \\(L\\) (dB)":
  "<span>F</span>Nivel \\(L\\) (dB)",
"Walls, row {#}":
  "Paredes, fila {#}",
"Band (Hz), row {#}":
  "Banda (Hz), fila {#}",
"Distance r (m), row {#}":
  "Distancia r (m), fila {#}",
"log_2 r, row {#}":
  "log_2 r, fila {#}",
"Level L (dB), row {#}":
  "Nivel L (dB), fila {#}",
"log₂ r":
  "log₂ r",
"For Part {#}, graph \\(L\\) against \\(\\log_2 r\\). Compare the slope with \\(-6.02\\) dB per doubling. From the level at \\(r = 1\\) m on your line, find the source’s power and compare it with {#} mW.":
  "Para la Parte {#}, grafica \\(L\\) en función de \\(\\log_2 r\\). Compara la pendiente con \\(-6.02\\) dB por duplicación. A partir del nivel en \\(r = 1\\) m sobre tu recta, encuentra la potencia de la fuente y compárala con {#} mW.",
"For Part {#}, compare the levels with Part {#} at the same distances, and find the slope. Where do the levels depart most from \\(1/r^2\\), and why? Find the cutoff of the {#} m wedges and compare it with {#} Hz.":
  "Para la Parte {#}, compara los niveles con los de la Parte {#} a las mismas distancias, y encuentra la pendiente. ¿Dónde se alejan más los niveles de \\(1/r^2\\), y por qué? Encuentra el corte de las cuñas de {#} m y compáralo con {#} Hz.",
"For Part {#}, find the slope again. Did deeper wedges restore the \\(1/r^2\\) law at {#} Hz?":
  "Para la Parte {#}, encuentra de nuevo la pendiente. ¿Las cuñas más profundas restablecieron la ley de \\(1/r^2\\) a {#} Hz?",
"For Part {#}, graph \\(L\\) against \\(\\log_2 r\\) and compare with Part {#}. Far from the source the level is nearly steady: this is the reverberant level. Find the distance at which Part {#}’s free field line reaches the reverberant level; this is the critical distance. Compare it with \\(\\sqrt{A/(16\\pi)}\\), using \\(A\\) from the demo’s Absorption coefficients table.":
  "Para la Parte {#}, grafica \\(L\\) en función de \\(\\log_2 r\\) y compara con la Parte {#}. Lejos de la fuente el nivel es casi constante: este es el nivel reverberante. Encuentra la distancia a la que la recta de campo libre de la Parte {#} alcanza el nivel reverberante; esta es la distancia crítica. Compárala con \\(\\sqrt{A/(16\\pi)}\\), usando \\(A\\) de la tabla Coeficientes de absorción de la demo.",
"The meter reads to {#} dB and the direct sound is exact. The reflected sound comes from a ray trace with a finite number of rays, a scatter of a few percent in the reflected energy, which matters only where the reflections are a large part of the level. On a real chamber add the source not being a point at short range, its directionality, reflections from the wire floor, the microphone stand and the person measuring, and background noise from outside the chamber.":
  "El medidor lee con resolución de {#} dB y el sonido directo es exacto. El sonido reflejado sale de un trazado con un número finito de rayos, una dispersión de unos pocos por ciento en la energía reflejada, que solo importa donde las reflexiones son una parte grande del nivel. En una cámara real agrega que la fuente no es puntual a corta distancia, su direccionalidad, las reflexiones del piso de malla, del soporte del micrófono y de la persona que mide, y el ruido de fondo de fuera de la cámara.",
"Why are the wedges of an anechoic chamber shaped as wedges and not flat slabs of the same material?":
  "¿Por qué las cuñas de una cámara anecoica tienen forma de cuña y no de placas planas del mismo material?",
"Why are anechoic chambers used to test loudspeakers and microphones?":
  "¿Por qué se usan cámaras anecoicas para probar altavoces y micrófonos?",
"Outdoors, far from buildings, is close to a free field. Why does sound outdoors still not fall exactly {#} dB per doubling at long range?":
  "Al aire libre, lejos de los edificios, se está cerca de un campo libre. ¿Por qué el sonido al aire libre aun así no baja exactamente {#} dB por duplicación a gran distancia?",
"In a hard room, why does moving closer to a talker help you hear them much more than moving from {#} m to {#} m away?":
  "En una sala dura, ¿por qué acercarte a una persona que habla te ayuda a oírla mucho más que pasar de {#} m a {#} m de distancia?",
"Prelab answers, a Data table copy for each part, graphs with fits, the source power, the wedge cutoff, the critical distance of the room, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, una copia de la tabla de datos para cada parte, gráficas con ajustes, la potencia de la fuente, el corte de las cuñas, la distancia crítica de la sala, y las respuestas a las preguntas. Identifica los datos simulados.",
"Room's total absorption":
  "Absorción total de la sala",
"Sound intensity":
  "Intensidad sonora",
"Sound level":
  "Nivel sonoro",
"Source power":
  "Potencia de la fuente",
"Fraction of the sound pressure the wedges reflect":
  "Fracción de la presión sonora que reflejan las cuñas",
"Absorption coefficient: the fraction of a ray's energy a surface absorbs":
  "Coeficiente de absorción: la fracción de la energía de un rayo que absorbe una superficie",
"Speed of sound in air":
  "Rapidez del sonido en el aire",
"Wedge length":
  "Longitud de las cuñas",
"Wedge cutoff frequency":
  "Frecuencia de corte de las cuñas",
"rms sound pressure":
  "Presión sonora rms",
"Distance from the source":
  "Distancia a la fuente",
"Critical distance":
  "Distancia crítica",
"Density of air":
  "Densidad del aire",
"Room Acoustics":
  "Acústica de salas"
});
