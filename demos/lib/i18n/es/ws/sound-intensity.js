/* ws/sound-intensity in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/sound-intensity', {
"Distance r (m)":
  "Distancia r (m)",
"Sources":
  "Fuentes",
"Sound level β (dB)":
  "Nivel sonoro β (dB)",
"log_2 r":
  "log_2 r",
"Intensity I (W/m²)":
  "Intensidad I (W/m²)",
"Sound Intensity and Decibels | VirtualDemos":
  "Intensidad del sonido y decibeles | VirtualDemos",
"Sound Intensity and Decibels":
  "Intensidad del sonido y decibeles",
"<strong>Setups in the demo:</strong> Inverse square law; Two equal sources; A loud and a quiet source; Background noise; Mystery source.":
  "<strong>Configuraciones en la demo:</strong> Ley del inverso del cuadrado; Dos fuentes iguales; Una fuente fuerte y una débil; Ruido de fondo; Fuente misteriosa.",
"<strong>Using the demo.</strong> A loudspeaker stands at the end of a measuring tape in an open field, with a sound level meter on a tripod. Drag the meter along the tape, or set its distance on the Set up card (with steps of {#} m, halving and doubling). The card also sets the power of source A ({#} μW to {#} W in {#}, {#}, {#} steps), a second source B beside A, and a steady background of {#}, {#} or {#} dB. Blind hides the intensities and the predicted levels; the mystery source always hides its power.":
  "<strong>Uso de la demo.</strong> Una bocina está al extremo de una cinta métrica en un campo abierto, con un sonómetro sobre un tripié. Arrastra el medidor a lo largo de la cinta, o fija su distancia en la tarjeta de configuración (con pasos de {#} m, a la mitad y al doble). La tarjeta también fija la potencia de la fuente A ({#} μW a {#} W en pasos de {#}, {#}, {#}), una segunda fuente B junto a A, y un fondo constante de {#}, {#} o {#} dB. A ciegas oculta las intensidades y los niveles predichos; la fuente misteriosa siempre oculta su potencia.",
"<strong>What the demo models.</strong> Point sources in a free field, with no reflections and no absorption in the air: \\(I = P/(4\\pi r^2)\\) exactly. Independent sources and the background add as intensities. The meter reads to {#} dB, with no noise.":
  "<strong>Lo que modela la demo.</strong> Fuentes puntuales en un campo libre, sin reflexiones y sin absorción en el aire: \\(I = P/(4\\pi r^2)\\) exactamente. Las fuentes independientes y el fondo se suman como intensidades. El medidor lee con resolución de {#} dB, sin ruido.",
"Test the inverse square law for sound, learn how decibel levels combine, and find the power of an unknown source.":
  "Pon a prueba la ley del inverso del cuadrado para el sonido, aprende cómo se combinan los niveles en decibeles y encuentra la potencia de una fuente desconocida.",
"A point source of acoustic power \\(P\\) spreads its energy over a sphere, so at distance \\(r\\) the intensity is":
  "Una fuente puntual de potencia acústica \\(P\\) reparte su energía sobre una esfera, así que a una distancia \\(r\\) la intensidad es",
"\\[I = \\frac{P}{4\\pi r^2}.\\]":
  "\\[I = \\frac{P}{4\\pi r^2}.\\]",
"The sound level in decibels compares \\(I\\) with the threshold of hearing \\(I_0 = 10^{-12}\\ \\mathrm{W/m^2}\\):":
  "El nivel sonoro en decibeles compara \\(I\\) con el umbral de audición \\(I_0 = 10^{-12}\\ \\mathrm{W/m^2}\\):",
"\\[\\beta = 10\\log_{10}\\frac{I}{I_0}\\ \\mathrm{dB}.\\]":
  "\\[\\beta = 10\\log_{10}\\frac{I}{I_0}\\ \\mathrm{dB}.\\]",
"Combining the two, \\(\\beta = 10\\log_{10}\\frac{P}{4\\pi I_0} - 20\\log_{10} r\\). Writing \\(\\log_{10} r = \\log_{10}2\\cdot\\log_2 r\\), a graph of \\(\\beta\\) against \\(\\log_2 r\\) is a straight line of slope \\(-20\\log_{10}2 = -6.02\\) dB per doubling of distance, and its intercept at \\(r = 1\\) m gives \\(P\\). Sources that are not in step with each other add their intensities, not their levels: two equal sources give twice the intensity, \\(10\\log_{10}2 = 3.0\\) dB more than one.":
  "Combinando las dos, \\(\\beta = 10\\log_{10}\\frac{P}{4\\pi I_0} - 20\\log_{10} r\\). Escribiendo \\(\\log_{10} r = \\log_{10}2\\cdot\\log_2 r\\), una gráfica de \\(\\beta\\) en función de \\(\\log_2 r\\) es una recta de pendiente \\(-20\\log_{10}2 = -6.02\\) dB por duplicación de la distancia, y su ordenada en \\(r = 1\\) m da \\(P\\). Las fuentes que no están en fase entre sí suman sus intensidades, no sus niveles: dos fuentes iguales dan el doble de intensidad, \\(10\\log_{10}2 = 3.0\\) dB más que una.",
"A {#} mW source: find the intensity and the sound level {#} m away.":
  "Una fuente de {#} mW: encuentra la intensidad y el nivel sonoro a {#} m.",
"By how many decibels does the level fall when the distance doubles? When it goes up by a factor of {#}?":
  "¿Cuántos decibeles baja el nivel cuando la distancia se duplica? ¿Y cuando aumenta en un factor de {#}?",
"Two equal sources each give {#} dB at a point. What level do they give together? Why not {#} dB?":
  "Dos fuentes iguales dan cada una {#} dB en un punto. ¿Qué nivel dan juntas? ¿Por qué no {#} dB?",
"A source gives {#} dB at a point where a steady background is {#} dB. What does the meter read?":
  "Una fuente da {#} dB en un punto donde hay un fondo constante de {#} dB. ¿Qué marca el medidor?",
"On a real sound level meter bench, keep levels moderate (below about {#} dB at any listener), wear hearing protection near loud sources, and do not point a loudspeaker at anyone’s ear from close range.":
  "En un banco real con sonómetro, mantén niveles moderados (por debajo de unos {#} dB en cualquier oyente), usa protección auditiva cerca de fuentes fuertes, y no apuntes una bocina al oído de nadie desde cerca.",
"<strong>Part {#}: inverse square law.</strong> With one {#} mW source and no background, measure the level at seven distances from {#} m to {#} m, doubling the distance each time.":
  "<strong>Parte {#}: ley del inverso del cuadrado.</strong> Con una fuente de {#} mW y sin fondo, mide el nivel a siete distancias de {#} m a {#} m, duplicando la distancia cada vez.",
"<strong>Part {#}: adding sources.</strong> At {#} m, measure the level of one {#} mW source, then of two equal {#} mW sources side by side. Then measure a {#} mW source together with a {#} mW source.":
  "<strong>Parte {#}: suma de fuentes.</strong> A {#} m, mide el nivel de una fuente de {#} mW, luego el de dos fuentes iguales de {#} mW una junto a la otra. Luego mide una fuente de {#} mW junto con una fuente de {#} mW.",
"<strong>Part {#}: background noise.</strong> With the {#} mW source and a {#} dB background, measure the level at the seven distances of Part {#}.":
  "<strong>Parte {#}: ruido de fondo.</strong> Con la fuente de {#} mW y un fondo de {#} dB, mide el nivel a las siete distancias de la Parte {#}.",
"<strong>Part {#}: mystery source.</strong> Measure the level of the mystery source at five or more distances and find its power. Keep the same mystery source for the whole part: choosing Mystery source again picks a new one.":
  "<strong>Parte {#}: fuente misteriosa.</strong> Mide el nivel de la fuente misteriosa a cinco o más distancias y encuentra su potencia. Conserva la misma fuente misteriosa durante toda la parte: elegir Fuente misteriosa de nuevo elige una nueva.",
"<strong>Using the virtual apparatus.</strong> Record each reading, and send each part to the worksheet before clearing, so each part gets its own copy of the Data table. Fill the last two columns yourself: \\(\\log_2 r\\), and the intensity worked out from the level.":
  "<strong>Uso del aparato virtual.</strong> Registra cada lectura, y envía cada parte a la hoja de trabajo antes de borrar, para que cada parte tenga su propia copia de la tabla de datos. Llena tú las últimas dos columnas: \\(\\log_2 r\\), y la intensidad calculada a partir del nivel.",
"<span>B</span>Distance \\(r\\) (m)":
  "<span>B</span>Distancia \\(r\\) (m)",
"<span>C</span>Sources":
  "<span>C</span>Fuentes",
"<span>D</span>Sound level \\(\\beta\\) (dB)":
  "<span>D</span>Nivel sonoro \\(\\beta\\) (dB)",
"<span>E</span>\\(\\log_2 r\\)":
  "<span>E</span>\\(\\log_2 r\\)",
"<span>F</span>Intensity \\(I\\) (W/m²)":
  "<span>F</span>Intensidad \\(I\\) (W/m²)",
"Distance r (m), row {#}":
  "Distancia r (m), fila {#}",
"Sources, row {#}":
  "Fuentes, fila {#}",
"Sound level β (dB), row {#}":
  "Nivel sonoro β (dB), fila {#}",
"log_2 r, row {#}":
  "log_2 r, fila {#}",
"Intensity I (W/m²), row {#}":
  "Intensidad I (W/m²), fila {#}",
"log₂ r":
  "log₂ r",
"Graph \\(\\beta\\) against \\(\\log_2 r\\) for Part {#}. Find the slope and compare it with \\(-6.02\\) dB per doubling. From the intercept, find the source’s power and compare it with {#} mW.":
  "Grafica \\(\\beta\\) en función de \\(\\log_2 r\\) para la Parte {#}. Encuentra la pendiente y compárala con \\(-6.02\\) dB por duplicación. A partir de la ordenada al origen, encuentra la potencia de la fuente y compárala con {#} mW.",
"From Part {#}, find how much the level rises when the second equal source is added, and when the {#} mW source is added to the {#} mW one. Explain both from the intensities.":
  "A partir de la Parte {#}, encuentra cuánto sube el nivel cuando se agrega la segunda fuente igual, y cuando se agrega la fuente de {#} mW a la de {#} mW. Explica ambos casos a partir de las intensidades.",
"For Part {#}, compare each level with Part {#}. At what distance does the background change the reading by more than {#} dB? Find the source’s own level at {#} m by subtracting the background’s intensity.":
  "Para la Parte {#}, compara cada nivel con la Parte {#}. ¿A qué distancia cambia el fondo la lectura en más de {#} dB? Encuentra el nivel propio de la fuente a {#} m restando la intensidad del fondo.",
"From Part {#}, find the mystery source’s power from the intercept of \\(\\beta\\) against \\(\\log_2 r\\).":
  "A partir de la Parte {#}, encuentra la potencia de la fuente misteriosa a partir de la ordenada al origen de \\(\\beta\\) en función de \\(\\log_2 r\\).",
"The meter reads to {#} dB and there is no noise, so the scatter about the line comes only from that rounding: {#} dB is a {#} % change in intensity. On a real field, add reflections from the ground and nearby objects (they can add or cancel by several decibels), the source not being a point at short range, wind and background noise, and the meter’s own calibration (often ±{#} dB).":
  "El medidor lee con resolución de {#} dB y no hay ruido, así que la dispersión alrededor de la recta proviene solo de ese redondeo: {#} dB es un cambio de {#} % en la intensidad. En un campo real agrega las reflexiones del suelo y de objetos cercanos (pueden sumar o cancelar varios decibeles), que la fuente no es puntual a corta distancia, el viento y el ruido de fondo, y la calibración propia del medidor (a menudo ±{#} dB).",
"Why is the decibel scale logarithmic, and why is that useful for hearing?":
  "¿Por qué la escala de decibeles es logarítmica, y por qué eso es útil para el oído?",
"How far from a source must you move for the level to drop by {#} dB?":
  "¿Qué tan lejos de una fuente debes alejarte para que el nivel baje {#} dB?",
"Ten identical machines run in a workshop. How much louder is the workshop than one machine?":
  "Diez máquinas idénticas funcionan en un taller. ¿Cuánto más fuerte es el taller que una máquina?",
"Why does real outdoor sound often fall faster than {#} dB per doubling at large distances?":
  "¿Por qué el sonido real al aire libre a menudo baja más rápido que {#} dB por duplicación a grandes distancias?",
"Prelab answers, a Data table copy for each part with the last two columns filled, graphs with fits, your values of the slope and of the powers, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, una copia de la tabla de datos para cada parte con las últimas dos columnas llenas, gráficas con ajustes, tus valores de la pendiente y de las potencias, y las respuestas a las preguntas. Identifica los datos simulados.",
"Intensity":
  "Intensidad",
"Threshold of hearing":
  "Umbral de audición",
"Acoustic power of the source":
  "Potencia acústica de la fuente",
"Sound level":
  "Nivel sonoro",
"Distance from the source":
  "Distancia a la fuente"
});
