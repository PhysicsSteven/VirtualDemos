/* ws/ultrasound in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/ultrasound', {
"Known depth (cm)":
  "Profundidad conocida (cm)",
"Echo time t (μs)":
  "Tiempo del eco t (μs)",
"Angle θ (°)":
  "Ángulo θ (°)",
"Doppler shift Δ f (Hz)":
  "Corrimiento Doppler Δ f (Hz)",
"Notes":
  "Notas",
"Ultrasound Echoes and Doppler Flow | VirtualDemos":
  "Ecos de ultrasonido y flujo Doppler | VirtualDemos",
"Ultrasound Echoes and Doppler Flow":
  "Ecos de ultrasonido y flujo Doppler",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} and §{#}; the tissue values are from OpenStax <em>College Physics</em>, §{#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} y §{#}; los valores de los tejidos son de OpenStax <em>College Physics</em>, §{#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Fat, muscle and bone; Speed of sound in water; Find the hidden cyst; Resolve a thin layer; Doppler: blood flow; Doppler: mystery flow.":
  "<strong>Configuraciones en la demo:</strong> Grasa, músculo y hueso; Rapidez del sonido en el agua; Encontrar el quiste oculto; Resolver una capa delgada; Doppler: flujo sanguíneo; Doppler: flujo misterioso.",
"<strong>Using the demo.</strong> A transducer sits on the skin above layers of tissue, or above an artery. The scanner screen shows the echo amplitude against time ({#} to {#} μs, or a {#} μs zoom around the cursor showing the radio frequency trace), or the Doppler spectrum. A cursor reads the time or the frequency shift; drag it on the screen or use its slider and step buttons. The transducer frequency, the water depth, the beam angle and the blood speed are on the Set up card, which fades while the scanner runs. The scanner is off until you start it. Blind hides the depths and speeds the demo works out; the hidden cyst and the mystery flow always hide theirs.":
  "<strong>Uso de la demo.</strong> Un transductor está sobre la piel encima de capas de tejido, o encima de una arteria. La pantalla del escáner muestra la amplitud del eco en función del tiempo (de {#} a {#} μs, o un acercamiento de {#} μs alrededor del cursor que muestra la traza de radiofrecuencia), o el espectro Doppler. Un cursor lee el tiempo o el corrimiento de frecuencia; arrástralo en la pantalla o usa su deslizador y sus botones de paso. La frecuencia del transductor, la profundidad del agua, el ángulo del haz y la rapidez de la sangre están en la tarjeta de configuración, que se desvanece mientras el escáner funciona. El escáner está apagado hasta que lo inicias. A ciegas oculta las profundidades y rapideces que calcula la demo; el quiste oculto y el flujo misterioso siempre ocultan las suyas.",
"<strong>What the demo models.</strong> Speeds and acoustic impedances of air, water, blood, fat, muscle and bone from OpenStax <em>College Physics</em> §{#} (bone’s impedance varies from {#} to \\(7.8\\times10^6\\ \\mathrm{kg/(m^2\\,s)}\\); the larger is chosen). A cyst is taken as water. Each pulse is three cycles long at half height (chosen). Each boundary sends back a fraction \\(r = (Z_2 - Z_1)/(Z_2 + Z_1)\\) of the pressure, and the pulse loses \\(1 - r^2\\) crossing each boundary above. Left out: echoes that bounce more than once, absorption in the tissue and the spreading of the beam. The scanner assumes {#} m/s, as real scanners do. The Doppler shift is the exact \\(f_0(c+u)/(c-u) - f_0\\) with \\(u = v\\cos\\theta\\). No noise.":
  "<strong>Qué modela la demo.</strong> Rapideces e impedancias acústicas del aire, el agua, la sangre, la grasa, el músculo y el hueso de OpenStax <em>College Physics</em> §{#} (la impedancia del hueso varía de {#} a \\(7.8\\times10^6\\ \\mathrm{kg/(m^2\\,s)}\\); se elige la mayor). Un quiste se toma como agua. Cada pulso dura tres ciclos a media altura (elegido). Cada frontera devuelve una fracción \\(r = (Z_2 - Z_1)/(Z_2 + Z_1)\\) de la presión, y el pulso pierde \\(1 - r^2\\) al cruzar cada frontera de arriba. Se dejan fuera: los ecos que rebotan más de una vez, la absorción en el tejido y la dispersión del haz. El escáner supone {#} m/s, como los escáneres reales. El corrimiento Doppler es el exacto \\(f_0(c+u)/(c-u) - f_0\\) con \\(u = v\\cos\\theta\\). Sin ruido.",
"Use echo times to find the speed of sound in water and the depths of boundaries inside the body, and use the Doppler shift of echoes from moving blood to find its speed.":
  "Usa los tiempos de los ecos para encontrar la rapidez del sonido en el agua y las profundidades de las fronteras dentro del cuerpo, y usa el corrimiento Doppler de los ecos de la sangre en movimiento para encontrar su rapidez.",
"A pulse sent into the body reflects partly at every boundary between two media. The echo from a boundary at depth \\(D\\) returns after the round trip":
  "Un pulso enviado al cuerpo se refleja en parte en cada frontera entre dos medios. El eco de una frontera a una profundidad \\(D\\) regresa después del viaje de ida y vuelta",
"\\[t = \\frac{2D}{c}\\qquad\\Longrightarrow\\qquad D = \\frac{ct}{2}.\\]":
  "\\[t = \\frac{2D}{c}\\qquad\\Longrightarrow\\qquad D = \\frac{ct}{2}.\\]",
"A scanner does not know which tissues the pulse crossed, so it converts every echo time to depth with one assumed speed, {#} m/s. Where the real speed differs, the depth it reports is off. The fraction of the pressure that reflects is":
  "Un escáner no sabe qué tejidos cruzó el pulso, así que convierte cada tiempo de eco en profundidad con una sola rapidez supuesta, {#} m/s. Donde la rapidez real es distinta, la profundidad que reporta está desviada. La fracción de la presión que se refleja es",
"\\[r = \\frac{Z_2 - Z_1}{Z_2 + Z_1},\\qquad Z = \\rho c,\\]":
  "\\[r = \\frac{Z_2 - Z_1}{Z_2 + Z_1},\\qquad Z = \\rho c,\\]",
"so boundaries between media of very different impedance (soft tissue and bone, or tissue and air) reflect strongly. A negative \\(r\\) turns the echo upside down. A pulse of a few cycles lasts a few periods, so two echoes closer in time than about one pulse length run together; a higher frequency gives a shorter pulse and finer detail.":
  "así que las fronteras entre medios de impedancias muy distintas (tejido blando y hueso, o tejido y aire) reflejan fuertemente. Una \\(r\\) negativa invierte el eco. Un pulso de unos pocos ciclos dura unos pocos periodos, así que dos ecos más cercanos en el tiempo que más o menos la duración de un pulso se juntan; una frecuencia más alta da un pulso más corto y un detalle más fino.",
"Blood moving with speed \\(v\\) at angle \\(\\theta\\) to the beam has a speed \\(u = v\\cos\\theta\\) along it. It hears the transducer’s frequency \\(f_0\\) shifted, and sends that back as a moving source, so the echo returns shifted by":
  "La sangre que se mueve con rapidez \\(v\\) a un ángulo \\(\\theta\\) respecto al haz tiene una rapidez \\(u = v\\cos\\theta\\) a lo largo de él. Recibe la frecuencia del transductor \\(f_0\\) corrida, y la devuelve como una fuente en movimiento, así que el eco regresa corrido en",
"\\[\\Delta f = f_0\\frac{c+u}{c-u} - f_0 = \\frac{2f_0u}{c-u} \\approx \\frac{2f_0 v\\cos\\theta}{c}\\quad (u \\ll c),\\]":
  "\\[\\Delta f = f_0\\frac{c+u}{c-u} - f_0 = \\frac{2f_0u}{c-u} \\approx \\frac{2f_0 v\\cos\\theta}{c}\\quad (u \\ll c),\\]",
"with \\(c = 1570\\) m/s in blood.":
  "con \\(c = 1570\\) m/s en la sangre.",
"An echo from a boundary in water returns after {#} μs. How deep is the boundary (\\(c = 1500\\) m/s)? How deep would a scanner assuming {#} m/s say it is?":
  "Un eco de una frontera en agua regresa después de {#} μs. ¿A qué profundidad está la frontera (\\(c = 1500\\) m/s)? ¿A qué profundidad diría que está un escáner que supone {#} m/s?",
"Find \\(r\\) for a fat to muscle boundary and for a muscle to bone boundary, using \\(Z = 1.34\\), \\(1.70\\) and \\(7.8\\times10^6\\ \\mathrm{kg/(m^2\\,s)}\\). Which echo is stronger?":
  "Encuentra \\(r\\) para una frontera de grasa a músculo y para una frontera de músculo a hueso, usando \\(Z = 1.34\\), \\(1.70\\) y \\(7.8\\times10^6\\ \\mathrm{kg/(m^2\\,s)}\\). ¿Qué eco es más intenso?",
"A {#} MHz pulse is three cycles long. How long does it last? Two boundaries {#} mm apart in fat (\\(c = 1450\\) m/s): how far apart in time are their echoes?":
  "Un pulso de {#} MHz dura tres ciclos. ¿Cuánto dura? Dos fronteras separadas {#} mm en grasa (\\(c = 1450\\) m/s): ¿qué tan separados en el tiempo están sus ecos?",
"Blood moves at {#} m/s, at {#}° to a {#} MHz beam. Estimate the Doppler shift.":
  "La sangre se mueve a {#} m/s, a {#}° de un haz de {#} MHz. Estima el corrimiento Doppler.",
"Diagnostic ultrasound is safe at the low intensities scanners use, but a real transducer is delicate: use coupling gel, do not drop it, and clean it after use. Follow the instructor’s rules for any scanning of people.":
  "El ultrasonido de diagnóstico es seguro a las bajas intensidades que usan los escáneres, pero un transductor real es delicado: usa gel de acoplamiento, no lo dejes caer, y límpialo después de usarlo. Sigue las reglas del instructor para cualquier escaneo de personas.",
"<strong>Part {#}: speed of sound in water.</strong> Measure the echo time from the air pocket under a tank of water at six or more water depths from {#} to {#} cm. Put the cursor on the middle (the peak) of each echo.":
  "<strong>Parte {#}: rapidez del sonido en el agua.</strong> Mide el tiempo del eco de la bolsa de aire bajo un tanque de agua con seis o más profundidades de agua de {#} a {#} cm. Pon el cursor en el centro (el pico) de cada eco.",
"<strong>Part {#}: fat, muscle and bone.</strong> Measure the time of each echo from the layers under the skin. Note which echoes are strong, which are weak and which come back upside down (zoom in to see the trace).":
  "<strong>Parte {#}: grasa, músculo y hueso.</strong> Mide el tiempo de cada eco de las capas bajo la piel. Anota qué ecos son intensos, cuáles son débiles y cuáles regresan invertidos (acércate para ver la traza).",
"<strong>Part {#}: the hidden cyst.</strong> Find the two weak echoes from a fluid filled cyst in the muscle, and measure their times. Keep the same cyst for the whole part: asking for a new one moves it.":
  "<strong>Parte {#}: el quiste oculto.</strong> Encuentra los dos ecos débiles de un quiste lleno de líquido en el músculo, y mide sus tiempos. Mantén el mismo quiste durante toda la parte: pedir uno nuevo lo mueve.",
"<strong>Part {#}: a thin layer.</strong> A {#} mm layer of fat lies in muscle. Find the lowest transducer frequency at which its two echoes appear as separate peaks, and record the two echo times at that frequency.":
  "<strong>Parte {#}: una capa delgada.</strong> Una capa de grasa de {#} mm está dentro del músculo. Encuentra la frecuencia del transductor más baja con la que sus dos ecos aparecen como picos separados, y registra los dos tiempos de eco a esa frecuencia.",
"<strong>Part {#}: blood flow.</strong> With the beam on an artery at {#} MHz and the blood moving at {#} m/s, all at one speed, measure the Doppler shift at three or more angles between {#}° and {#}°. Then measure the shift of the mystery flow at three or more angles; keep the same mystery flow for the whole scan. If its peak is off the right of the spectrum, widen the spectrum’s range.":
  "<strong>Parte {#}: flujo sanguíneo.</strong> Con el haz sobre una arteria a {#} MHz y la sangre moviéndose a {#} m/s, toda a una misma rapidez, mide el corrimiento Doppler con tres o más ángulos entre {#}° y {#}°. Luego mide el corrimiento del flujo misterioso con tres o más ángulos; mantén el mismo flujo misterioso durante todo el barrido. Si su pico queda fuera por la derecha del espectro, amplía el intervalo del espectro.",
"<strong>Using the virtual apparatus.</strong> Hide the depths, speeds and predictions before you measure. Once you have started the scanner yourself, the Set up card is hidden while it runs: stop the scanner to change the setup. Record each reading, and send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> Oculta las profundidades, rapideces y predicciones antes de medir. Una vez que hayas iniciado el escáner tú mismo, la tarjeta de configuración se oculta mientras funciona: detén el escáner para cambiar la configuración. Registra cada lectura, y envía cada parte a la hoja de trabajo antes de borrar, para que cada parte tenga su propia copia de la tabla de datos.",
"<span>C</span>Known depth (cm)":
  "<span>C</span>Profundidad conocida (cm)",
"<span>D</span>Echo time \\(t\\) (μs)":
  "<span>D</span>Tiempo del eco \\(t\\) (μs)",
"<span>E</span>Angle \\(\\theta\\) (°)":
  "<span>E</span>Ángulo \\(\\theta\\) (°)",
"<span>F</span>Doppler shift \\(\\Delta f\\) (Hz)":
  "<span>F</span>Corrimiento Doppler \\(\\Delta f\\) (Hz)",
"<span>G</span>Notes":
  "<span>G</span>Notas",
"Known depth (cm), row {#}":
  "Profundidad conocida (cm), fila {#}",
"Echo time t (μs), row {#}":
  "Tiempo del eco t (μs), fila {#}",
"Angle θ (°), row {#}":
  "Ángulo θ (°), fila {#}",
"Doppler shift Δ f (Hz), row {#}":
  "Corrimiento Doppler Δ f (Hz), fila {#}",
"Notes, row {#}":
  "Notas, fila {#}",
"Graph \\(t\\) against the known depth for Part {#}. The slope is \\(2/c\\). Find the speed of sound in water with its uncertainty and compare it with {#} m/s.":
  "Grafica \\(t\\) en función de la profundidad conocida para la Parte {#}. La pendiente es \\(2/c\\). Encuentra la rapidez del sonido en el agua con su incertidumbre y compárala con {#} m/s.",
"For Part {#}, convert each echo time to a depth with {#} m/s, as a scanner would. Compare with the true layers ({#} cm of fat, {#} cm of muscle, {#} cm of bone). Why does the bone look much thinner than it is? Explain which echoes are strong and which are upside down using \\(r\\).":
  "Para la Parte {#}, convierte cada tiempo de eco en una profundidad con {#} m/s, como lo haría un escáner. Compara con las capas reales ({#} cm de grasa, {#} cm de músculo, {#} cm de hueso). ¿Por qué el hueso se ve mucho más delgado de lo que es? Explica qué ecos son intensos y cuáles están invertidos usando \\(r\\).",
"For Part {#}, find the depth and thickness of the cyst, using {#} m/s for the muscle above it and {#} m/s inside the cyst. How much would the thickness be off if you used {#} m/s throughout?":
  "Para la Parte {#}, encuentra la profundidad y el grosor del quiste, usando {#} m/s para el músculo de arriba y {#} m/s dentro del quiste. ¿Qué tan desviado estaría el grosor si usaras {#} m/s en todo?",
"For Part {#}, compare the separation of the two echoes with the pulse length at each frequency you tried. Explain why the lowest frequency that separates them is the one it is.":
  "Para la Parte {#}, compara la separación de los dos ecos con la duración del pulso en cada frecuencia que probaste. Explica por qué la frecuencia más baja que los separa es la que es.",
"For Part {#}, find the blood speed from each shift and check that it does not depend on the angle. Find the mystery speed from each angle and its mean.":
  "Para la Parte {#}, encuentra la rapidez de la sangre a partir de cada corrimiento y comprueba que no depende del ángulo. Encuentra la rapidez misteriosa a partir de cada ángulo y su promedio.",
"The model has no noise; the uncertainty is in placing the cursor on the middle of an echo or the peak of the spectrum, which you can judge by how far the cursor can move before the reading looks wrong. The spectrum’s peak has a width of about {#}/({#} ms) = {#} Hz from the length of the stretch of echo it is taken over. In a real body, absorption weakens deep echoes, the speed varies from tissue to tissue and person to person, multiple echoes add false images, and the beam angle is known only to a few degrees, which matters most near {#}°.":
  "El modelo no tiene ruido; la incertidumbre está en colocar el cursor en el centro de un eco o en el pico del espectro, que puedes juzgar por cuánto puede moverse el cursor antes de que la lectura se vea mal. El pico del espectro tiene un ancho de unos {#}/({#} ms) = {#} Hz por la duración del tramo de eco sobre el que se calcula. En un cuerpo real, la absorción debilita los ecos profundos, la rapidez varía de un tejido a otro y de una persona a otra, los ecos múltiples agregan imágenes falsas, y el ángulo del haz se conoce solo con unos pocos grados de precisión, lo que importa más cerca de {#}°.",
"Why does a scanner need coupling gel between the transducer and the skin?":
  "¿Por qué un escáner necesita gel de acoplamiento entre el transductor y la piel?",
"Why is ultrasound poor at imaging behind bone or gas?":
  "¿Por qué el ultrasonido es malo para obtener imágenes detrás del hueso o del gas?",
"Why do Doppler measurements avoid beam angles close to {#}°?":
  "¿Por qué las mediciones Doppler evitan ángulos del haz cercanos a {#}°?",
"In smooth (laminar) flow, the spectrum spreads from zero up to a largest shift. What does the largest shift tell you?":
  "En un flujo suave (laminar), el espectro se extiende desde cero hasta un corrimiento máximo. ¿Qué te dice el corrimiento máximo?",
"Prelab answers, a Data table copy for each part, the graph and fit for Part {#}, your depth calculations and the cyst’s depth and thickness, the thin layer result, the blood speeds, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, una copia de la tabla de datos para cada parte, la gráfica y el ajuste de la Parte {#}, tus cálculos de profundidad y la profundidad y el grosor del quiste, el resultado de la capa delgada, las rapideces de la sangre, y respuestas a las preguntas. Identifica los datos simulados.",
"Depth of the boundary":
  "Profundidad de la frontera",
"Acoustic impedance":
  "Impedancia acústica",
"Acoustic impedance of the first medium":
  "Impedancia acústica del primer medio",
"Acoustic impedance of the second medium":
  "Impedancia acústica del segundo medio",
"Speed of sound in tissue":
  "Rapidez del sonido en el tejido",
"Frequency (Δf: Doppler shift)":
  "Frecuencia (Δf: corrimiento Doppler)",
"Transducer frequency":
  "Frecuencia del transductor",
"Fraction of the pressure reflected at a boundary":
  "Fracción de la presión reflejada en una frontera",
"Echo time":
  "Tiempo del eco",
"Angle between the blood flow and the beam":
  "Ángulo entre el flujo sanguíneo y el haz",
"Speed of the blood along the beam":
  "Rapidez de la sangre a lo largo del haz",
"Speed of the blood":
  "Rapidez de la sangre",
"Ultrasound: Echoes and Blood Flow":
  "Ultrasonido: ecos y flujo sanguíneo"
});
