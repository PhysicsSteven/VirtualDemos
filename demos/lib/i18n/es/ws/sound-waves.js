/* ws/sound-waves in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/sound-waves', {
"Observation":
  "Observación",
"Δ p_max (Pa)":
  "Δ p_max (Pa)",
"t_air/t":
  "t_air/t",
"Sound Waves and the Speed of Sound | VirtualDemos":
  "Ondas sonoras y la rapidez del sonido | VirtualDemos",
"Sound Waves and the Speed of Sound":
  "Ondas sonoras y la rapidez del sonido",
"<strong>Setups in the demo:</strong> A sound wave in air; The same note in helium; Time a clap, {#} m apart; A cold day, −{#} °C; Unknown gas; Race through materials.":
  "<strong>Configuraciones en la demo:</strong> Una onda sonora en el aire; La misma nota en helio; Cronometra una palmada, a {#} m de distancia; Un día frío, −{#} °C; Gas desconocido; Carrera a través de materiales.",
"<strong>Using the demo.</strong> The Sound wave view shows a tube of air as dots that swing back and forth, with graphs of the displacement and the pressure change along the tube. The Time of flight view has a clap, two microphones on a bench and a two channel recorder. Frequency, amplitude, the microphone positions, the gas and its temperature are on the Set up card on the picture; the microphones can also be dragged. The Race view lays out up to six lanes of different materials, each {#} m wide, side by side on a course {#} m, {#} km or {#} km long, with a {#} m person at the start for scale. A hammer strikes a steel plate across the start of every lane at the same instant, and the pulse in each lane runs to the finish; the board lists each lane’s speed and arrival time. It runs in real time, or {#}, {#} or {#} times slower, in 3D or as a flat drawing with the lengths to scale. Blind hides \\(v\\), \\(\\lambda\\) and the predictions; an unknown gas and a mystery material always hide their own values.":
  "<strong>Uso de la demo.</strong> La vista Onda sonora muestra un tubo de aire como puntos que oscilan de un lado a otro, con gráficas del desplazamiento y del cambio de presión a lo largo del tubo. La vista Tiempo de vuelo tiene una palmada, dos micrófonos sobre una mesa y un registrador de dos canales. La frecuencia, la amplitud, las posiciones de los micrófonos, el gas y su temperatura están en la tarjeta Preparar sobre la imagen; los micrófonos también se pueden arrastrar. La vista Carrera dispone hasta seis carriles de distintos materiales, cada uno de {#} m de ancho, uno junto a otro en una pista de {#} m, {#} km o {#} km de largo, con una persona de {#} m en la salida como escala. Un martillo golpea una placa de acero a lo ancho de la salida de todos los carriles en el mismo instante, y el pulso de cada carril corre hasta la meta; el tablero lista la rapidez y el tiempo de llegada de cada carril. Corre en tiempo real, o {#}, {#} o {#} veces más lento, en 3D o como un dibujo plano con las longitudes a escala. A ciegas oculta \\(v\\), \\(\\lambda\\) y las predicciones; un gas desconocido y un material misterioso siempre ocultan sus propios valores.",
"<strong>What the demo models.</strong> An ideal gas at {#} Pa, with \\(v = \\sqrt{\\gamma R T/M}\\) and density \\(\\rho = PM/(RT)\\). Dry air has \\(\\gamma = 1.400\\) and \\(M = 28.9647\\) g/mol; helium and argon have \\(\\gamma = 5/3\\). The recorder samples both microphones at {#} kHz, and each channel triggers on the first sample at or after the sound arrives, so every \\(\\Delta t\\) is a whole number of samples of \\(1/48000\\ \\mathrm{s} = 20.8\\ \\mathrm{\\mu s}\\). The sampling clock starts at a random point of a sample at each clap, which is the only scatter in the readings. In the Race view, air, helium and argon follow the same ideal gas model; the other {#} materials use measured speeds at fixed conditions (gases at {#} °C and liquids at {#} °C from Table {#} of the textbook; the rest from OpenStax College Physics §{#}, the CRC Handbook values listed by The Engineering ToolBox, and Evident’s table of material sound velocities). Solids carry their bulk longitudinal speed, which for some metals is higher than the thin rod value in Table {#}. Each pulse arrives at exactly \\(t = L/v\\).":
  "<strong>Qué modela la demo.</strong> Un gas ideal a {#} Pa, con \\(v = \\sqrt{\\gamma R T/M}\\) y densidad \\(\\rho = PM/(RT)\\). El aire seco tiene \\(\\gamma = 1.400\\) y \\(M = 28.9647\\) g/mol; el helio y el argón tienen \\(\\gamma = 5/3\\). El registrador muestrea ambos micrófonos a {#} kHz, y cada canal se dispara en la primera muestra en o después de la llegada del sonido, así que cada \\(\\Delta t\\) es un número entero de muestras de \\(1/48000\\ \\mathrm{s} = 20.8\\ \\mathrm{\\mu s}\\). El reloj de muestreo empieza en un punto al azar de una muestra en cada palmada, que es la única dispersión en las lecturas. En la vista Carrera, el aire, el helio y el argón siguen el mismo modelo de gas ideal; los otros {#} materiales usan rapideces medidas en condiciones fijas (gases a {#} °C y líquidos a {#} °C de la Tabla {#} del libro; el resto de OpenStax College Physics §{#}, los valores del CRC Handbook listados por The Engineering ToolBox y la tabla de velocidades del sonido en materiales de Evident). Los sólidos llevan su rapidez longitudinal volumétrica, que para algunos metales es mayor que el valor para barra delgada de la Tabla {#}. Cada pulso llega exactamente en \\(t = L/v\\).",
"Describe a sound wave as displacement and pressure waves a quarter cycle apart, then measure the speed of sound by timing a clap between two microphones and compare it with the ideal gas prediction. Then race sound through gases, liquids and solids to see how much the material matters.":
  "Describe una onda sonora como ondas de desplazamiento y de presión desfasadas un cuarto de ciclo, luego mide la rapidez del sonido cronometrando una palmada entre dos micrófonos y compárala con la predicción del gas ideal. Después haz correr el sonido a través de gases, líquidos y sólidos para ver cuánto importa el material.",
"A sound wave moving along \\(x\\) moves each bit of air back and forth by":
  "Una onda sonora que avanza a lo largo de \\(x\\) mueve cada porción de aire de un lado a otro según",
"\\[s(x,t) = s_{\\max}\\cos(kx - \\omega t),\\]":
  "\\[s(x,t) = s_{\\max}\\cos(kx - \\omega t),\\]",
"and changes the pressure by":
  "y cambia la presión según",
"\\[\\Delta p(x,t) = \\Delta p_{\\max}\\sin(kx - \\omega t),\\qquad \\Delta p_{\\max} = \\rho v \\omega s_{\\max}.\\]":
  "\\[\\Delta p(x,t) = \\Delta p_{\\max}\\sin(kx - \\omega t),\\qquad \\Delta p_{\\max} = \\rho v \\omega s_{\\max}.\\]",
"The pressure change is largest where the displacement is zero, a quarter wavelength from where the displacement is largest. The wave speed in an ideal gas is":
  "El cambio de presión es mayor donde el desplazamiento es cero, a un cuarto de longitud de onda de donde el desplazamiento es mayor. La rapidez de la onda en un gas ideal es",
"\\[v = \\sqrt{\\frac{\\gamma R T}{M}},\\]":
  "\\[v = \\sqrt{\\frac{\\gamma R T}{M}},\\]",
"with \\(T\\) in kelvin, \\(R = 8.314\\ \\mathrm{J/(mol\\,K)}\\), \\(\\gamma\\) the ratio of specific heats and \\(M\\) the molar mass. For a given frequency, \\(\\lambda = v/f\\).":
  "con \\(T\\) en kelvin, \\(R = 8.314\\ \\mathrm{J/(mol\\,K)}\\), \\(\\gamma\\) la razón de calores específicos y \\(M\\) la masa molar. Para una frecuencia dada, \\(\\lambda = v/f\\).",
"In the time of flight method, a clap is made in line with two microphones a distance \\(d\\) apart. The recorder measures the time \\(\\Delta t\\) between the sound’s arrival at the near microphone and at the far one, so":
  "En el método de tiempo de vuelo, se da una palmada alineada con dos micrófonos separados una distancia \\(d\\). El registrador mide el tiempo \\(\\Delta t\\) entre la llegada del sonido al micrófono cercano y al lejano, así que",
"\\[\\Delta t = \\frac{d}{v}.\\]":
  "\\[\\Delta t = \\frac{d}{v}.\\]",
"A graph of \\(\\Delta t\\) against \\(d\\) is a straight line through the origin with slope \\(1/v\\). Any fixed delay in the electronics would shift the intercept but not the slope.":
  "Una gráfica de \\(\\Delta t\\) en función de \\(d\\) es una recta que pasa por el origen con pendiente \\(1/v\\). Cualquier retraso fijo en la electrónica desplazaría la ordenada al origen pero no la pendiente.",
"In any material the speed of sound is set by how stiff the material is against the squeeze of the wave and by its density. In a fluid,":
  "En cualquier material la rapidez del sonido la fijan qué tan rígido es el material frente a la compresión de la onda y su densidad. En un fluido,",
"\\[v = \\sqrt{\\frac{B}{\\rho}},\\]":
  "\\[v = \\sqrt{\\frac{B}{\\rho}},\\]",
"with \\(B\\) the bulk modulus; for an ideal gas \\(B = \\gamma P\\), which gives the formula above. In a large block of solid the speed depends on its resistance to both compression and shear, and in a thin rod it is \\(\\sqrt{Y/\\rho}\\), a little slower. A pulse that travels a distance \\(L\\) arrives after \\(t = L/v\\).":
  "con \\(B\\) el módulo volumétrico; para un gas ideal \\(B = \\gamma P\\), lo que da la fórmula de arriba. En un bloque grande de sólido la rapidez depende de su resistencia tanto a la compresión como al corte, y en una barra delgada es \\(\\sqrt{Y/\\rho}\\), un poco menor. Un pulso que recorre una distancia \\(L\\) llega después de \\(t = L/v\\).",
"Calculate the speed of sound in dry air at {#} °C and at −{#} °C.":
  "Calcula la rapidez del sonido en aire seco a {#} °C y a −{#} °C.",
"A {#} Hz tone travels in air at {#} °C. What is its wavelength? Where along the wave is the pressure change largest, compared with the displacement?":
  "Un tono de {#} Hz viaja en aire a {#} °C. ¿Cuál es su longitud de onda? ¿En qué parte de la onda es mayor el cambio de presión, comparado con el desplazamiento?",
"The recorder samples at {#} kHz. What is the smallest change in \\(\\Delta t\\) it can show? For what spacing \\(d\\) is that one part in a hundred of \\(\\Delta t\\) in air at {#} °C?":
  "El registrador muestrea a {#} kHz. ¿Cuál es el menor cambio en \\(\\Delta t\\) que puede mostrar? ¿Para qué separación \\(d\\) es eso una parte en cien de \\(\\Delta t\\) en aire a {#} °C?",
"Why does measuring \\(\\Delta t\\) between two microphones avoid needing to know exactly when the clap happened?":
  "¿Por qué medir \\(\\Delta t\\) entre dos micrófonos evita tener que saber exactamente cuándo ocurrió la palmada?",
"How long does sound take to travel {#} km in air at {#} °C, in fresh water ({#} m/s) and in steel ({#} m/s)? Predict the order in which pulses in air, helium, fresh water, concrete, steel and diamond would finish a {#} km course.":
  "¿Cuánto tarda el sonido en recorrer {#} km en aire a {#} °C, en agua dulce ({#} m/s) y en acero ({#} m/s)? Predice el orden en que los pulsos en aire, helio, agua dulce, concreto, acero y diamante terminarían una pista de {#} km.",
"On a real bench, keep claps and starter pistols away from ears, and use a clapper board rather than a gun. Keep microphone cables off the floor.":
  "En una mesa real, mantén las palmadas y las pistolas de salida lejos de los oídos, y usa una claqueta en lugar de una pistola. Mantén los cables de los micrófonos fuera del piso.",
"<strong>Part {#}: the wave.</strong> In air at {#} °C, watch a {#} Hz wave with its displacement and pressure graphs. Note where the dots bunch up and spread out, and where the pressure graph peaks compared with the displacement graph. Record \\(v\\), \\(\\lambda\\) and \\(\\Delta p_{\\max}\\) for {#} Hz and {#} μm in air and in helium, both at {#} °C, in the Wave table.":
  "<strong>Parte {#}: la onda.</strong> En aire a {#} °C, observa una onda de {#} Hz con sus gráficas de desplazamiento y presión. Fíjate dónde se juntan y se separan los puntos, y dónde tiene su pico la gráfica de presión comparada con la de desplazamiento. Registra \\(v\\), \\(\\lambda\\) y \\(\\Delta p_{\\max}\\) para {#} Hz y {#} μm en aire y en helio, ambos a {#} °C, en la tabla Onda.",
"<strong>Part {#}: time of flight in air.</strong> In air at {#} °C, with the clap {#} m from the near microphone, time the clap at seven spacings \\(d\\) from {#} m to {#} m. Hide the predictions first. At \\(d = 1.00\\) m, clap five times to see how much single readings scatter.":
  "<strong>Parte {#}: tiempo de vuelo en aire.</strong> En aire a {#} °C, con la palmada a {#} m del micrófono cercano, cronometra la palmada con siete separaciones \\(d\\) de {#} m a {#} m. Oculta primero las predicciones. Con \\(d = 1.00\\) m, da cinco palmadas para ver cuánto se dispersan las lecturas individuales.",
"<strong>Part {#}: temperature.</strong> Repeat Part {#} at −{#} °C with at least five spacings.":
  "<strong>Parte {#}: temperatura.</strong> Repite la Parte {#} a −{#} °C con al menos cinco separaciones.",
"<strong>Part {#}: unknown gas.</strong> With an unknown gas at {#} °C, time at least five spacings. Keep the same unknown gas for the whole scan: choosing a new one changes the gas.":
  "<strong>Parte {#}: gas desconocido.</strong> Con un gas desconocido a {#} °C, cronometra al menos cinco separaciones. Conserva el mismo gas desconocido durante toda la serie: elegir uno nuevo cambia el gas.",
"<strong>Part {#}: race through materials.</strong> Race pulses over {#} km at {#} °C through air, helium, fresh water, concrete, steel and diamond, in real time, and compare the order with your prediction. Record each lane’s speed and arrival time in the Race table. Then race a mystery material on the same course, record its arrival time, and identify it by racing candidate materials beside it. Choosing a new mystery material replaces it.":
  "<strong>Parte {#}: carrera a través de materiales.</strong> Haz correr pulsos a lo largo de {#} km a {#} °C en aire, helio, agua dulce, concreto, acero y diamante, en tiempo real, y compara el orden con tu predicción. Registra la rapidez y el tiempo de llegada de cada carril en la tabla Carrera. Luego haz correr un material misterioso en la misma pista, registra su tiempo de llegada e identifícalo haciendo correr materiales candidatos a su lado. Elegir un nuevo material misterioso lo reemplaza.",
"<strong>Using the virtual apparatus.</strong> Record a reading after each clap. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> Registra una lectura después de cada palmada. Envía cada parte a la hoja antes de borrar, para que cada parte tenga su propia copia de la tabla de datos.",
"<span>B</span>Gas":
  "<span>B</span>Gas",
"<span>E</span>\\(\\Delta t\\) (ms)":
  "<span>E</span>\\(\\Delta t\\) (ms)",
"<span>F</span>Observation":
  "<span>F</span>Observación",
"Gas, row {#}":
  "Gas, fila {#}",
"T (°C), row {#}":
  "T (°C), fila {#}",
"d (m), row {#}":
  "d (m), fila {#}",
"Δ t (ms), row {#}":
  "Δ t (ms), fila {#}",
"Observation, row {#}":
  "Observación, fila {#}",
"<strong>Wave.</strong> Readouts from Part {#}.":
  "<strong>Onda.</strong> Lecturas de la Parte {#}.",
"<span>A</span>Gas":
  "<span>A</span>Gas",
"<span>D</span>\\(\\lambda\\) (m)":
  "<span>D</span>\\(\\lambda\\) (m)",
"<span>E</span>\\(\\Delta p_{\\max}\\) (Pa)":
  "<span>E</span>\\(\\Delta p_{\\max}\\) (Pa)",
"v (m/s), row {#}":
  "v (m/s), fila {#}",
"λ (m), row {#}":
  "λ (m), fila {#}",
"Δ p_max (Pa), row {#}":
  "Δ p_max (Pa), fila {#}",
"<strong>Race.</strong> Readouts from Part {#}.":
  "<strong>Carrera.</strong> Lecturas de la Parte {#}.",
"<span>A</span>Material":
  "<span>A</span>Material",
"<span>B</span>Phase":
  "<span>B</span>Fase",
"<span>F</span>\\(t_{\\text{air}}/t\\)":
  "<span>F</span>\\(t_{\\text{air}}/t\\)",
"Phase, row {#}":
  "Fase, fila {#}",
"t_air/t, row {#}":
  "t_air/t, fila {#}",
"From Part {#}, explain why the pressure change is a quarter cycle out of step with the displacement. Why is \\(\\Delta p_{\\max}\\) smaller in helium for the same \\(s_{\\max}\\) and \\(f\\), even though \\(v\\) is larger?":
  "Con la Parte {#}, explica por qué el cambio de presión está desfasado un cuarto de ciclo respecto al desplazamiento. ¿Por qué \\(\\Delta p_{\\max}\\) es menor en helio para los mismos \\(s_{\\max}\\) y \\(f\\), aunque \\(v\\) sea mayor?",
"Graph \\(\\Delta t\\) against \\(d\\) for Part {#}. Find \\(v\\) from the slope, with its uncertainty, and compare it with \\(\\sqrt{\\gamma RT/M}\\).":
  "Grafica \\(\\Delta t\\) en función de \\(d\\) para la Parte {#}. Encuentra \\(v\\) con la pendiente, con su incertidumbre, y compárala con \\(\\sqrt{\\gamma RT/M}\\).",
"From the five claps at \\(d = 1.00\\) m, find the spread of \\(\\Delta t\\) in samples. Explain why using several spacings and the slope is better than one clap at one spacing.":
  "Con las cinco palmadas con \\(d = 1.00\\) m, encuentra la dispersión de \\(\\Delta t\\) en muestras. Explica por qué usar varias separaciones y la pendiente es mejor que una palmada con una sola separación.",
"From Part {#}, find \\(v\\) at −{#} °C. Test whether \\(v_{20}/v_{-10}\\) agrees with \\(\\sqrt{T_{20}/T_{-10}}\\) (temperatures in kelvin).":
  "Con la Parte {#}, encuentra \\(v\\) a −{#} °C. Comprueba si \\(v_{20}/v_{-10}\\) coincide con \\(\\sqrt{T_{20}/T_{-10}}\\) (temperaturas en kelvin).",
"From Part {#}, find the unknown gas’s \\(v\\) and the value of \\(\\gamma/M\\). If the gas is monatomic (\\(\\gamma = 5/3\\)), what is its molar mass? If it is diatomic (\\(\\gamma = 1.4\\))?":
  "Con la Parte {#}, encuentra la \\(v\\) del gas desconocido y el valor de \\(\\gamma/M\\). Si el gas es monoatómico (\\(\\gamma = 5/3\\)), ¿cuál es su masa molar? ¿Y si es diatómico (\\(\\gamma = 1.4\\))?",
"From Part {#}, check that \\(t = L/v\\) for each lane, and find how far the sound in air had gone when each other pulse arrived. Rank the six materials by speed and by density (look up the densities). Is a denser material always slower? Use \\(v = \\sqrt{\\text{stiffness}/\\rho}\\) to explain.":
  "Con la Parte {#}, comprueba que \\(t = L/v\\) para cada carril, y encuentra qué tan lejos había llegado el sonido en el aire cuando llegó cada uno de los otros pulsos. Ordena los seis materiales por rapidez y por densidad (busca las densidades). ¿Un material más denso es siempre más lento? Usa \\(v = \\sqrt{\\text{stiffness}/\\rho}\\) para explicarlo.",
"From the mystery material’s arrival time, find its speed and identify it. How well does your timing separate it from the nearest other material?":
  "Con el tiempo de llegada del material misterioso, encuentra su rapidez e identifícalo. ¿Qué tan bien separa tu medición de tiempo a ese material del material más cercano?",
"Each \\(\\Delta t\\) is a whole number of {#} μs samples, and the start of the count falls at a random point within a sample, so a single reading can be off by up to one sample. That is a larger fraction of \\(\\Delta t\\) at small \\(d\\). The fit’s slope uncertainty reflects this scatter. Distances are set to {#} m in the simulation. On a real bench add the measurement of \\(d\\), the size of the microphones, the clap not being exactly in line, the trigger level of each channel and the air’s humidity and temperature.":
  "Cada \\(\\Delta t\\) es un número entero de muestras de {#} μs, y el inicio de la cuenta cae en un punto al azar dentro de una muestra, así que una sola lectura puede desviarse hasta una muestra. Eso es una fracción mayor de \\(\\Delta t\\) cuando \\(d\\) es pequeña. La incertidumbre de la pendiente del ajuste refleja esta dispersión. Las distancias se fijan con precisión de {#} m en la simulación. En una mesa real agrega la medición de \\(d\\), el tamaño de los micrófonos, que la palmada no esté exactamente alineada, el nivel de disparo de cada canal, y la humedad y temperatura del aire.",
"Does the speed of sound in air depend on the frequency of the sound? What in the formula tells you?":
  "¿La rapidez del sonido en el aire depende de la frecuencia del sonido? ¿Qué en la fórmula te lo dice?",
"Why is the speed of sound in helium almost three times that in air at the same temperature?":
  "¿Por qué la rapidez del sonido en helio es casi tres veces la del aire a la misma temperatura?",
"Why must the clap be in line with the two microphones for \\(\\Delta t = d/v\\) to hold?":
  "¿Por qué la palmada debe estar alineada con los dos micrófonos para que se cumpla \\(\\Delta t = d/v\\)?",
"Two gases have the same speed of sound. Must they have the same molar mass? Explain.":
  "Dos gases tienen la misma rapidez del sonido. ¿Deben tener la misma masa molar? Explica.",
"Over {#} km, the pulse in steel arrives before the sound in air has gone {#} m. Why is sound so much faster in steel, even though steel is thousands of times denser than air?":
  "En {#} km, el pulso en acero llega antes de que el sonido en el aire haya recorrido {#} m. ¿Por qué el sonido es tanto más rápido en acero, aunque el acero sea miles de veces más denso que el aire?",
"Prelab answers, the Data table copies for each part, the Wave table and the Race table, graphs with fits, your values of \\(v\\) with uncertainties and their comparison with theory, the unknown gas analysis, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de la tabla de datos de cada parte, la tabla Onda y la tabla Carrera, gráficas con ajustes, tus valores de \\(v\\) con incertidumbres y su comparación con la teoría, el análisis del gas desconocido y las respuestas a las preguntas. Identifica los datos simulados.",
"Absolute temperature of the gas":
  "Temperatura absoluta del gas",
"Bulk modulus":
  "Módulo volumétrico",
"Length of the bar":
  "Longitud de la barra",
"Molar mass of the gas":
  "Masa molar del gas",
"Pressure of the gas":
  "Presión del gas",
"in √(γRT/M) and PM/(RT) it is the absolute temperature, in K":
  "en √(γRT/M) y PM/(RT) es la temperatura absoluta, en K",
"−{#} °C in kelvin":
  "−{#} °C en kelvin",
"{#} °C in kelvin":
  "{#} °C en kelvin",
"Young's modulus":
  "Módulo de Young",
"Spacing of the microphones":
  "Separación de los micrófonos",
"Ratio of specific heats":
  "Razón de calores específicos",
"Wave number, {#}π/λ":
  "Número de onda, {#}π/λ",
"Pressure (Δp: its variation from the mean)":
  "Presión (Δp: su variación respecto a la media)",
"Pressure amplitude (with Δ)":
  "Amplitud de presión (con Δ)",
"Displacement of the air":
  "Desplazamiento del aire",
"Displacement amplitude":
  "Amplitud de desplazamiento",
"Time (Δt: between the two microphones)":
  "Tiempo (Δt: entre los dos micrófonos)",
"Travel time through air over the same distance":
  "Tiempo de recorrido en el aire a lo largo de la misma distancia",
"Speed of sound":
  "Rapidez del sonido",
"Speed at −{#} °C":
  "Rapidez a −{#} °C",
"Speed at {#} °C":
  "Rapidez a {#} °C",
"Position along the wave":
  "Posición a lo largo de la onda"
});
