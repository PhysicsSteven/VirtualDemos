/* ws/doppler in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/doppler', {
"Motion":
  "Movimiento",
"Emitted f_0 (Hz)":
  "f_0 emitida (Hz)",
"Speed (m/s)":
  "Rapidez (m/s)",
"Observed f (Hz)":
  "f observada (Hz)",
"Mach number M":
  "Número de Mach M",
"Boom time t_b (s)":
  "Tiempo del estampido t_b (s)",
"Distance flown v_s t_b (m)":
  "Distancia recorrida v_s t_b (m)",
"d past overhead (m)":
  "d más allá de la vertical (m)",
"θ from tanθ = h/d (°)":
  "θ según tanθ = h/d (°)",
"{#}/sinθ":
  "{#}/senθ",
"Doppler Effect and Shock Waves | VirtualDemos":
  "Efecto Doppler y ondas de choque | VirtualDemos",
"Doppler Effect and Shock Waves":
  "Efecto Doppler y ondas de choque",
"<strong>Setups in the demo:</strong> Ambulance passing; Source at rest, observer moving; Mach {#}: the sound barrier; Supersonic jet: Mach cone; Redshift and blueshift; Transverse Doppler. The last two are Light setups and go with the Doppler Effect for Light worksheet; this handout uses <strong>Sound</strong>. In Supersonic jet: Mach cone the source starts {#} m left of the center of the view and {#} m above it at Mach {#} with f = {#} Hz, the observer stands {#} m left of center and {#} m below, and the setup plays at {#}/{#} speed.":
  "<strong>Configuraciones en la demo:</strong> Ambulancia que pasa; Fuente en reposo, observador en movimiento; Mach {#}: la barrera del sonido; Avión supersónico: cono de Mach; Corrimiento al rojo y al azul; Doppler transversal. Las dos últimas son configuraciones de Luz y acompañan a la hoja de trabajo Efecto Doppler para la luz; esta guía usa <strong>Sonido</strong>. En Avión supersónico: cono de Mach la fuente empieza {#} m a la izquierda del centro de la vista y {#} m arriba de él a Mach {#} con f = {#} Hz, el observador está {#} m a la izquierda del centro y {#} m abajo, y la configuración se reproduce a velocidad {#}/{#}.",
"The picture shows the crests spreading from the source as circles, each centered where the source was when it emitted it, and the observer; below it is a plot of the received frequency f′ over time. <strong>3D</strong> shows the same simulation with each crest as a sphere, and <strong>Flat</strong> is the slice through them (the ground for the ambulance, the upright plane of the flight for the jet). Everything is to scale. The clock above the picture gives t to {#} s, and the Time fold’s <strong>Playback speed</strong> runs from {#}/{#} to {#} times real: slow motion only slows the drawing, and the audio always plays the real pitch.":
  "La imagen muestra las crestas que se extienden desde la fuente como círculos, cada uno centrado donde estaba la fuente cuando lo emitió, y al observador; debajo hay una gráfica de la frecuencia recibida f′ en el tiempo. <strong>3D</strong> muestra la misma simulación con cada cresta como una esfera, y <strong>Plano</strong> es el corte a través de ellas (el suelo para la ambulancia, el plano vertical del vuelo para el avión). Todo está a escala. El reloj arriba de la imagen da t con precisión de {#} s, y la <strong>Velocidad de reproducción</strong> del pliegue Tiempo va de {#}/{#} a {#} veces el tiempo real: la cámara lenta solo hace más lento el dibujo, y el audio siempre reproduce el tono real.",
"Drag the source or the observer to move them, and the round grip at the tip of an arrow to set that velocity. The card beside the picture holds the same values as sliders: for the source, <strong>Mach number v<sub>s</sub>/v</strong> ({#} to {#}), <strong>Direction</strong> and <strong>Emitted frequency f</strong> ({#} to {#} Hz in {#} Hz steps); for the observer, <strong>Speed v<sub>o</sub>/v</strong> ({#} to {#}) and <strong>Direction</strong>. <strong>Reset</strong> runs the setup again from its start.":
  "Arrastra la fuente o el observador para moverlos, y la agarradera redonda en la punta de una flecha para fijar esa velocidad. La tarjeta junto a la imagen tiene los mismos valores como deslizadores: para la fuente, <strong>Número de Mach v<sub>s</sub>/v</strong> ({#} a {#}), <strong>Dirección</strong> y <strong>Frecuencia emitida f</strong> ({#} a {#} Hz en pasos de {#} Hz); para el observador, <strong>Rapidez v<sub>o</sub>/v</strong> ({#} a {#}) y <strong>Dirección</strong>. <strong>Reiniciar</strong> corre la configuración de nuevo desde su inicio.",
"Readouts under What the observer hears: <strong>Received frequency f′</strong>, <strong>f′/f</strong>, the <strong>Angle θ at emission</strong>, when the sound now arriving left the source, and, from Mach {#} up, the <strong>Mach cone half angle</strong>. When the cone reaches the observer the picture flashes “boom” and a red line marks that moment on the f′ plot.":
  "Lecturas bajo Lo que oye el observador: <strong>Frecuencia recibida f′</strong>, <strong>f′/f</strong>, el <strong>Ángulo θ en la emisión</strong>, cuándo salió de la fuente el sonido que llega ahora, y, a partir de Mach {#}, el <strong>semiángulo del cono de Mach</strong>. Cuando el cono llega al observador la imagen destella “estampido” y una línea roja marca ese momento en la gráfica de f′.",
"<strong>Record reading</strong> stores the sound arriving now: which one moves, the emitted frequency, the part of that velocity along the line from where the sound left the source to the observer (the only part that shifts the frequency), whether it approaches or recedes, f′, f′/f and the angle θ. It refuses a reading while no sound has reached the observer, while two sounds arrive at once (supersonic), and in Light.":
  "<strong>Registrar lectura</strong> guarda el sonido que llega ahora: cuál se mueve, la frecuencia emitida, la parte de esa velocidad a lo largo de la línea desde donde salió el sonido de la fuente hasta el observador (la única parte que corre la frecuencia), si se acerca o se aleja, f′, f′/f y el ángulo θ. No acepta una lectura mientras ningún sonido ha llegado al observador, mientras llegan dos sonidos a la vez (supersónico), ni en Luz.",
"<strong>Export to worksheet</strong> fills the Data table in order: Scan, Motion, Emitted f₀, Speed (the part along the line), Direction, Observed f, f/f₀.":
  "<strong>Exportar a la hoja</strong> llena la tabla de Datos en orden: Barrido, Movimiento, f₀ emitida, Rapidez (la parte a lo largo de la línea), Dirección, f observada, f/f₀.",
"A point source in still, uniform air with \\(v = 343.2\\ \\text{m/s}\\) (dry air at {#} °C). The medium picks out a frame, so only for sound does it matter which one moves.":
  "Una fuente puntual en aire quieto y uniforme con \\(v = 343.2\\ \\text{m/s}\\) (aire seco a {#} °C). El medio elige un marco de referencia, así que solo para el sonido importa cuál se mueve.",
"The received frequency comes from the geometry of the crests: the program finds the emission time whose crest reaches the observer now and uses \\(f' = f\\,\\frac{v - \\vec v_o\\cdot\\hat n}{v - \\vec v_s\\cdot\\hat n},\\) where \\(\\hat n\\) points from where the source was when it emitted this sound to where the observer is now (the dashed line on the drawing). For an observer at rest this is \\(f' = \\frac{f}{1 - (v_s/v)\\cos\\theta}.\\)":
  "La frecuencia recibida sale de la geometría de las crestas: el programa encuentra el tiempo de emisión cuya cresta llega ahora al observador y usa \\(f' = f\\,\\frac{v - \\vec v_o\\cdot\\hat n}{v - \\vec v_s\\cdot\\hat n},\\) donde \\(\\hat n\\) apunta desde donde estaba la fuente cuando emitió este sonido hasta donde está ahora el observador (la línea punteada del dibujo). Para un observador en reposo esto es \\(f' = \\frac{f}{1 - (v_s/v)\\cos\\theta}.\\)",
"From Mach {#} up the crests touch two lines through the source, the Mach cone, with half angle \\(\\sin\\theta_c = v/v_s.\\) Inside the cone two sounds arrive at once, one of them heard backward and drawn dashed at |f′| on the plot. A real aircraft is not a point: its nose and tail shocks give two booms close together.":
  "A partir de Mach {#} las crestas tocan dos rectas que pasan por la fuente, el cono de Mach, con semiángulo \\(\\sin\\theta_c = v/v_s.\\) Dentro del cono llegan dos sonidos a la vez, uno de ellos oído al revés y dibujado punteado en |f′| en la gráfica. Un avión real no es un punto: las ondas de choque de su nariz y su cola dan dos estampidos muy seguidos.",
"Each drawn circle is one crest, or at high frequency every nth crest (the Time fold says which); loudness falls as {#}/r in the audio but is not drawn. The readings are simulated: computed from this model, not measured.":
  "Cada círculo dibujado es una cresta, o a alta frecuencia una de cada n crestas (el pliegue Tiempo dice cuál); la sonoridad disminuye como {#}/r en el audio pero no se dibuja. Las lecturas son simuladas: calculadas con este modelo, no medidas.",
"Measure how the observed frequency of sound changes when a source moves relative to a stationary observer, and distinguish source motion from observer motion. Then time a sonic boom to measure the angle of a Mach cone.":
  "Mide cómo cambia la frecuencia observada del sonido cuando una fuente se mueve respecto a un observador en reposo, y distingue el movimiento de la fuente del movimiento del observador. Luego mide el tiempo de un estampido sónico para medir el ángulo de un cono de Mach.",
"For a source moving directly toward a stationary observer in still air,":
  "Para una fuente que se mueve directamente hacia un observador en reposo en aire quieto,",
"\\[f_{\\mathrm{obs}}=f_0\\frac{v}{v-v_s},\\]":
  "\\[f_{\\mathrm{obs}}=f_0\\frac{v}{v-v_s},\\]",
"where \\(f_0\\) is emitted frequency, \\(v\\) is sound speed and \\(v_s\\) is source speed toward the observer. For a stationary source and an observer moving toward it,":
  "donde \\(f_0\\) es la frecuencia emitida, \\(v\\) es la rapidez del sonido y \\(v_s\\) es la rapidez de la fuente hacia el observador. Para una fuente en reposo y un observador que se mueve hacia ella,",
"\\[f_{\\mathrm{obs}}=f_0\\frac{v+v_o}{v}.\\]":
  "\\[f_{\\mathrm{obs}}=f_0\\frac{v+v_o}{v}.\\]",
"The virtual sound model uses \\(v=343.2\\ \\mathrm{m/s}\\) at {#} °C. These one dimensional expressions assume subsonic motion along the line of sight; a passing source has a changing radial component.":
  "El modelo virtual del sonido usa \\(v=343.2\\ \\mathrm{m/s}\\) a {#} °C. Estas expresiones unidimensionales suponen movimiento subsónico a lo largo de la línea de visión; una fuente que pasa tiene una componente radial que cambia.",
"<strong>Shock waves</strong> (§{#}). A source faster than sound outruns its own crests. Each crest is a circle centered where it was emitted, and the circles touch two lines through the source, the <strong>Mach cone</strong> (in three dimensions a cone). In the time \\(t\\) since a crest was emitted, the crest has spread to radius \\(vt\\) while the source has moved \\(v_s t\\), so the half angle \\(\\theta\\) of the cone obeys":
  "<strong>Ondas de choque</strong> (§{#}). Una fuente más rápida que el sonido deja atrás sus propias crestas. Cada cresta es un círculo centrado donde se emitió, y los círculos tocan dos rectas que pasan por la fuente, el <strong>cono de Mach</strong> (en tres dimensiones, un cono). En el tiempo \\(t\\) desde que se emitió una cresta, la cresta se ha extendido a un radio \\(vt\\) mientras la fuente se ha movido \\(v_s t\\), así que el semiángulo \\(\\theta\\) del cono cumple",
"\\[\\sin\\theta = \\frac{v}{v_s} = \\frac{1}{M},\\]":
  "\\[\\sin\\theta = \\frac{v}{v_s} = \\frac{1}{M},\\]",
"where \\(M = v_s/v\\) is the <strong>Mach number</strong>. The pressure piles up on the cone, and an observer on the ground hears nothing until the cone sweeps over, then a sudden <strong>sonic boom</strong>. If the source flies in a straight line at height \\(h\\) above the observer, the cone reaches the observer when the source is a distance \\(d\\) past the point overhead, with":
  "donde \\(M = v_s/v\\) es el <strong>número de Mach</strong>. La presión se acumula sobre el cono, y un observador en el suelo no oye nada hasta que el cono pasa sobre él, y entonces un repentino <strong>estampido sónico</strong>. Si la fuente vuela en línea recta a una altura \\(h\\) sobre el observador, el cono llega al observador cuando la fuente está a una distancia \\(d\\) más allá del punto sobre su vertical, con",
"\\[\\tan\\theta = \\frac{h}{d}.\\]":
  "\\[\\tan\\theta = \\frac{h}{d}.\\]",
"So the boom always comes after the source has passed over, later in distance for a narrower cone.":
  "Así que el estampido siempre llega después de que la fuente pasó por encima, más tarde en distancia para un cono más estrecho.",
"Does an approaching sound source raise or lower observed pitch?":
  "¿Una fuente de sonido que se acerca sube o baja el tono observado?",
"Why are moving source and moving observer shifts not identical at the same speed?":
  "¿Por qué los corrimientos por fuente en movimiento y por observador en movimiento no son idénticos a la misma rapidez?",
"What happens to the simple approaching source formula as source speed approaches sound speed?":
  "¿Qué le pasa a la fórmula sencilla de la fuente que se acerca cuando la rapidez de la fuente se acerca a la rapidez del sonido?",
"A jet flies level at Mach {#}, {#} m above an observer. Find the half angle of its Mach cone, how far past the point overhead it is when the observer hears the boom, and how long after it passed overhead that is.":
  "Un avión vuela horizontalmente a Mach {#}, {#} m sobre un observador. Encuentra el semiángulo de su cono de Mach, qué tan lejos más allá del punto sobre la vertical está cuando el observador oye el estampido, y cuánto tiempo después de pasar por encima es eso.",
"For a real sound experiment, keep loudspeaker levels safe and moving equipment clear of listeners. Do not use vehicles or fast projectiles for classroom Doppler measurements.":
  "Para un experimento de sonido real, mantén niveles seguros en las bocinas y el equipo en movimiento lejos de quienes escuchan. No uses vehículos ni proyectiles rápidos para mediciones Doppler en el salón.",
"<strong>Moving source.</strong> Choose a fixed emitted frequency and a stationary observer. Record observed frequency for at least six subsonic approach speeds, including zero. Use speeds sufficiently below {#} m/s that a clean direct approach can be identified. Compare with the source motion equation.":
  "<strong>Fuente en movimiento.</strong> Elige una frecuencia emitida fija y un observador en reposo. Registra la frecuencia observada para al menos seis rapideces de acercamiento subsónicas, incluida cero. Usa rapideces lo bastante por debajo de {#} m/s para que se pueda identificar un acercamiento directo limpio. Compara con la ecuación del movimiento de la fuente.",
"<strong>Moving observer.</strong> Keep the source at rest and repeat at six observer approach speeds. Compare the two shifts at matched speeds.":
  "<strong>Observador en movimiento.</strong> Mantén la fuente en reposo y repite con seis rapideces de acercamiento del observador. Compara los dos corrimientos a rapideces iguales.",
"<strong>Receding case.</strong> Repeat selected speeds with source or observer moving away. Check the sign of the shift and the limit at zero speed.":
  "<strong>Caso que se aleja.</strong> Repite algunas rapideces con la fuente o el observador alejándose. Comprueba el signo del corrimiento y el límite con rapidez cero.",
"<strong>Mach cone.</strong> Use a source that flies in a straight line past a stationary observer faster than sound. In the Supersonic jet setup, the source starts {#} m to the left of the center of the view and {#} m above it, and flies to the right; the observer is {#} m left of center and {#} m below, so the source passes \\(h = 140\\) m over the observer after flying {#} m (one grid square is {#} m). For at least four Mach numbers from {#} to {#}, run the flight from the start and read the time \\(t_b\\) of the boom to {#} s. Find the distance the source has flown, \\(v_s t_b\\), the distance \\(d\\) past the point overhead, and the cone’s half angle from \\(\\tan\\theta = h/d\\). Record these in the Mach cone table. Compare with the half angle the demo shows only after you have your own.":
  "<strong>Cono de Mach.</strong> Usa una fuente que vuele en línea recta junto a un observador en reposo más rápido que el sonido. En la configuración Avión supersónico, la fuente empieza {#} m a la izquierda del centro de la vista y {#} m arriba de él, y vuela hacia la derecha; el observador está {#} m a la izquierda del centro y {#} m abajo, así que la fuente pasa \\(h = 140\\) m sobre el observador después de volar {#} m (un cuadro de la cuadrícula mide {#} m). Para al menos cuatro números de Mach de {#} a {#}, corre el vuelo desde el inicio y lee el tiempo \\(t_b\\) del estampido con precisión de {#} s. Encuentra la distancia que ha volado la fuente, \\(v_s t_b\\), la distancia \\(d\\) más allá del punto sobre la vertical, y el semiángulo del cono según \\(\\tan\\theta = h/d\\). Anótalos en la tabla Cono de Mach. Compara con el semiángulo que muestra la demo solo después de tener el tuyo.",
"<strong>Using the virtual apparatus.</strong> Use Sound, not Light. Only the part of the velocity along the line between the source and the observer shifts the frequency, so a reading records that part as the speed, with whether it approaches or recedes; read it while the moving object heads almost straight toward the other one (early in the run) or straight away (late in the run). Record no readings while two sounds arrive at once (supersonic) or none has arrived. Send each scan to the worksheet before clearing, so each scan gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> Usa Sonido, no Luz. Solo la parte de la velocidad a lo largo de la línea entre la fuente y el observador corre la frecuencia, así que una lectura registra esa parte como la rapidez, junto con si se acerca o se aleja; léela mientras el objeto en movimiento va casi directo hacia el otro (al inicio de la corrida) o directo alejándose (al final de la corrida). No registres lecturas mientras llegan dos sonidos a la vez (supersónico) o no ha llegado ninguno. Envía cada barrido a la hoja antes de borrar, para que cada barrido tenga su propia copia de la tabla de Datos.",
"<span>B</span>Motion":
  "<span>B</span>Movimiento",
"<span>C</span>Emitted \\(f_0\\) (Hz)":
  "<span>C</span>\\(f_0\\) emitida (Hz)",
"<span>D</span>Speed (m/s)":
  "<span>D</span>Rapidez (m/s)",
"<span>E</span>Direction":
  "<span>E</span>Dirección",
"<span>F</span>Observed \\(f\\) (Hz)":
  "<span>F</span>\\(f\\) observada (Hz)",
"Motion, row {#}":
  "Movimiento, fila {#}",
"Emitted f_0 (Hz), row {#}":
  "f_0 emitida (Hz), fila {#}",
"Speed (m/s), row {#}":
  "Rapidez (m/s), fila {#}",
"Direction, row {#}":
  "Dirección, fila {#}",
"Observed f (Hz), row {#}":
  "f observada (Hz), fila {#}",
"f/f_0, row {#}":
  "f/f_0, fila {#}",
"Emitted f₀ (Hz)":
  "f₀ emitida (Hz)",
"Record which one moves for every reading.":
  "Anota cuál se mueve en cada lectura.",
"<strong>Mach cone.</strong> \\(h = 140\\) m, and the source flies {#} m from the start to the point overhead.":
  "<strong>Cono de Mach.</strong> \\(h = 140\\) m, y la fuente vuela {#} m desde el inicio hasta el punto sobre la vertical.",
"<span>B</span>Mach number \\(M\\)":
  "<span>B</span>Número de Mach \\(M\\)",
"<span>D</span>Boom time \\(t_b\\) (s)":
  "<span>D</span>Tiempo del estampido \\(t_b\\) (s)",
"<span>E</span>Distance flown \\(v_s t_b\\) (m)":
  "<span>E</span>Distancia recorrida \\(v_s t_b\\) (m)",
"<span>F</span>\\(d\\) past overhead (m)":
  "<span>F</span>\\(d\\) más allá de la vertical (m)",
"<span>G</span>\\(\\theta\\) from \\(\\tan\\theta = h/d\\) (°)":
  "<span>G</span>\\(\\theta\\) según \\(\\tan\\theta = h/d\\) (°)",
"<span>H</span>\\(1/\\sin\\theta\\)":
  "<span>H</span>\\(1/\\sin\\theta\\)",
"Mach number M, row {#}":
  "Número de Mach M, fila {#}",
"v_s (m/s), row {#}":
  "v_s (m/s), fila {#}",
"Boom time t_b (s), row {#}":
  "Tiempo del estampido t_b (s), fila {#}",
"Distance flown v_s t_b (m), row {#}":
  "Distancia recorrida v_s t_b (m), fila {#}",
"d past overhead (m), row {#}":
  "d más allá de la vertical (m), fila {#}",
"θ from tanθ = h/d (°), row {#}":
  "θ según tanθ = h/d (°), fila {#}",
"{#}/sinθ, row {#}":
  "{#}/senθ, fila {#}",
"Plot \\(f/f_0\\) against speed for source and observer scans on separate axes or clearly labeled series.":
  "Grafica \\(f/f_0\\) en función de la rapidez para los barridos de fuente y de observador en ejes separados o como series claramente etiquetadas.",
"Calculate predicted shifts from the equations and plot residuals.":
  "Calcula los corrimientos predichos con las ecuaciones y grafica los residuos.",
"Infer sound speed from an appropriate rearrangement of each model and compare with {#} m/s.":
  "Deduce la rapidez del sonido con un despeje adecuado de cada modelo y compárala con {#} m/s.",
"Explain why the source motion curve is nonlinear while the direct moving observer relation is linear.":
  "Explica por qué la curva del movimiento de la fuente no es lineal mientras que la relación directa del observador en movimiento sí lo es.",
"Plot \\(1/\\sin\\theta\\) against \\(M\\) for your Mach cone runs. What line do you expect? Fit a line and compare its slope with that prediction (is the intercept zero within its uncertainty?), then compare each \\(\\theta\\) with the demo’s half angle.":
  "Grafica \\(1/\\sin\\theta\\) en función de \\(M\\) para tus corridas del cono de Mach. ¿Qué recta esperas? Ajusta una recta y compara su pendiente con esa predicción (¿es cero la ordenada al origen dentro de su incertidumbre?), y luego compara cada \\(\\theta\\) con el semiángulo de la demo.",
"Record the precision of displayed speed and frequency. The virtual model is deterministic, so repeated identical settings do not establish statistical uncertainty. Real measurements also depend on microphone timing, alignment, air temperature, wind and the changing line of sight. For the Mach cone, an uncertainty of {#} s in \\(t_b\\) moves \\(d\\) by \\(v_s \\times 0.01\\) s, up to about {#} m at Mach {#}; carry that into \\(\\theta\\).":
  "Anota la precisión de la rapidez y la frecuencia mostradas. El modelo virtual es determinista, así que repetir los mismos ajustes no establece una incertidumbre estadística. Las mediciones reales también dependen de la sincronización del micrófono, la alineación, la temperatura del aire, el viento y la línea de visión cambiante. Para el cono de Mach, una incertidumbre de {#} s en \\(t_b\\) mueve \\(d\\) en \\(v_s \\times 0.01\\) s, hasta unos {#} m a Mach {#}; llévala a \\(\\theta\\).",
"Why does receding motion produce a lower frequency?":
  "¿Por qué el movimiento de alejamiento produce una frecuencia menor?",
"Why does a passing source’s pitch change as it crosses the observer?":
  "¿Por qué cambia el tono de una fuente que pasa cuando cruza frente al observador?",
"Why does the approaching source expression fail at the sound barrier?":
  "¿Por qué falla la expresión de la fuente que se acerca en la barrera del sonido?",
"Why must a relativistic light Doppler shift be modeled differently?":
  "¿Por qué el corrimiento Doppler relativista de la luz debe modelarse de otra manera?",
"In your runs the boom time hardly changes from Mach {#} to Mach {#}, although the source is twice as fast. Explain why, using the distance flown before the boom.":
  "En tus corridas el tiempo del estampido casi no cambia de Mach {#} a Mach {#}, aunque la fuente es el doble de rápida. Explica por qué, usando la distancia recorrida antes del estampido.",
"Why is there no Mach cone, and no boom, for a source moving slower than sound?":
  "¿Por qué no hay cono de Mach, ni estampido, para una fuente que se mueve más despacio que el sonido?",
"Prelab answers, a completed data table, plots of the frequency ratio and residuals, two estimates of the speed of sound with limitations, the Mach cone table and plot, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, una tabla de datos completa, gráficas de la razón de frecuencias y de los residuos, dos estimaciones de la rapidez del sonido con sus limitaciones, la tabla y la gráfica del cono de Mach, y las respuestas a las preguntas. Identifica los datos simulados.",
"Mach number, v_s/v":
  "Número de Mach, v_s/v",
"Distance past the point overhead when the cone arrives":
  "Distancia más allá del punto sobre la vertical cuando llega el cono",
"Frequency: observed, in the data table; emitted, in the formula for f′":
  "Frecuencia: observada, en la tabla de datos; emitida, en la fórmula de f′",
"Frequency the observer hears":
  "Frecuencia que oye el observador",
"Emitted frequency":
  "Frecuencia emitida",
"Observed frequency":
  "Frecuencia observada",
"Height of the flight above the observer":
  "Altura del vuelo sobre el observador",
"Unit vector from where the source was at emission toward the observer":
  "Vector unitario desde donde estaba la fuente en la emisión hacia el observador",
"Time since a crest was emitted":
  "Tiempo desde que se emitió una cresta",
"Time of the boom":
  "Tiempo del estampido",
"Angle: in f′, between the source's velocity and the line to the observer; for the Mach cone, its half angle":
  "Ángulo: en f′, entre la velocidad de la fuente y la línea al observador; para el cono de Mach, su semiángulo",
"Half angle of the Mach cone":
  "Semiángulo del cono de Mach",
"Speed of sound":
  "Rapidez del sonido",
"Velocity of the observer":
  "Velocidad del observador",
"Velocity of the source":
  "Velocidad de la fuente",
"Doppler Effect":
  "Efecto Doppler"
});
