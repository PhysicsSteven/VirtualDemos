/* ws/mp-ultrasound-attenuation in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/mp-ultrasound-attenuation', {
"Setup and frequency":
  "Configuración y frecuencia",
"Muscle depth d (cm)":
  "Profundidad del músculo d (cm)",
"Cursor time t (µs)":
  "Tiempo del cursor t (µs)",
"Echo level L (dB)":
  "Nivel del eco L (dB)",
"TGC":
  "TGC",
"Round trip 2d (cm)":
  "Ida y vuelta 2d (cm)",
"Frequency f (MHz)":
  "Frecuencia f (MHz)",
"Slope of L against d (dB/cm)":
  "Pendiente de L en función de d (dB/cm)",
"Standard error of the slope (dB/cm)":
  "Error estándar de la pendiente (dB/cm)",
"Intercept (dB)":
  "Ordenada al origen (dB)",
"α = −slope/{#} (dB/cm)":
  "α = −pendiente/{#} (dB/cm)",
"Attenuation of Ultrasound in Tissue | VirtualDemos":
  "Atenuación del ultrasonido en el tejido | VirtualDemos",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"Attenuation of Ultrasound in Tissue":
  "Atenuación del ultrasonido en el tejido",
"<strong>Setups in the demo:</strong> Attenuation in muscle (this worksheet): muscle of adjustable depth over {#} cm of bone, with absorption on; the echo, layer and Doppler setups of the Acoustics worksheet.":
  "<strong>Configuraciones en la demo:</strong> Atenuación en músculo (esta hoja de trabajo): músculo de profundidad ajustable sobre {#} cm de hueso, con la absorción activada; las configuraciones de eco, capas y Doppler de la hoja de trabajo de Acústica.",
"The transducer sends three cycle pulses (full width at half maximum of the envelope) at {#}, {#}, {#} or {#} MHz. Each boundary sends back a share \\(r = (Z_2 - Z_1)/(Z_2 + Z_1)\\) of the pressure, with speeds and acoustic impedances from OpenStax College Physics §{#} (muscle {#} m/s and {#} × {#}⁶ kg/(m² s), bone {#} m/s and {#} × {#}⁶ kg/(m² s), the top of the book’s range for bone).":
  "El transductor envía pulsos de tres ciclos (ancho completo a la mitad del máximo de la envolvente) a {#}, {#}, {#} o {#} MHz. Cada frontera devuelve una fracción \\(r = (Z_2 - Z_1)/(Z_2 + Z_1)\\) de la presión, con rapideces e impedancias acústicas de OpenStax College Physics §{#} (músculo {#} m/s y {#} × {#}⁶ kg/(m² s), hueso {#} m/s y {#} × {#}⁶ kg/(m² s), el extremo superior del intervalo del libro para el hueso).",
"Absorption: on the way down and back each echo loses {#}αd decibels in every layer above it, with α in dB/(cm MHz) at {#} MHz from Culjat et al., Ultrasound Med. Biol. {#}, {#} ({#}), Table {#}: water {#}, blood {#}, fat {#}, muscle {#}, cortical bone {#}, and {#} as the soft tissue average. In tissue α is taken as proportional to f (in real tissue the power of f is near {#} but not exactly {#}), in water as f²; the pulse is treated as one frequency. Beam spreading and echoes that bounce more than once are left out, so absorption is the only loss with depth. Simulated data, with no noise.":
  "Absorción: en la ida y la vuelta cada eco pierde {#}αd decibeles en cada capa que tiene encima, con α en dB/(cm MHz) a {#} MHz de Culjat et al., Ultrasound Med. Biol. {#}, {#} ({#}), Tabla {#}: agua {#}, sangre {#}, grasa {#}, músculo {#}, hueso cortical {#}, y {#} como promedio de tejido blando. En el tejido α se toma proporcional a f (en el tejido real la potencia de f es cercana a {#} pero no exactamente {#}), en el agua proporcional a f²; el pulso se trata como de una sola frecuencia. Se omiten la dispersión del haz y los ecos que rebotan más de una vez, así que la absorción es la única pérdida con la profundidad. Datos simulados, sin ruido.",
"The echo level readout is the envelope of the received signal at the cursor, in dB relative to the pulse sent. Time gain compensation (TGC) turns the display’s gain up with time as \\(10^{2\\alpha_0 f z/20}\\), with \\(z = (1540\\ \\mathrm{m/s})\\,t/2\\), the depth a scanner assumes; it changes the trace on the screen, not the echo level readout.":
  "La lectura del nivel del eco es la envolvente de la señal recibida en el cursor, en dB relativos al pulso enviado. La compensación de ganancia en el tiempo (TGC) aumenta la ganancia de la pantalla con el tiempo como \\(10^{2\\alpha_0 f z/20}\\), con \\(z = (1540\\ \\mathrm{m/s})\\,t/2\\), la profundidad que supone un escáner; cambia la traza en la pantalla, no la lectura del nivel del eco.",
"Record reading stores the setup, frequency, muscle depth, cursor time, echo level and TGC. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la configuración, la frecuencia, la profundidad del músculo, el tiempo del cursor, el nivel del eco y la TGC. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Measure the attenuation coefficient of muscle from the echo of a bone at several depths and frequencies, test that it is proportional to frequency, and see why scanners trade penetration for resolution.":
  "Mide el coeficiente de atenuación del músculo a partir del eco de un hueso a varias profundidades y frecuencias, comprueba que es proporcional a la frecuencia y ve por qué los escáneres sacrifican penetración a cambio de resolución.",
"A plane wave whose pressure amplitude falls as \\(p(x) = p_0\\,e^{-a x}\\) has intensity \\(I \\propto p^2\\) falling as \\(e^{-2ax}\\). In decibels, the amplitude level falls by \\(\\alpha = 20\\log_{10}(e)\\,a = 8.686\\,a\\) dB per unit length. In soft tissue α rises nearly in proportion to frequency, \\(\\alpha = \\alpha_0 f\\), with \\(\\alpha_0\\) in dB/(cm MHz).":
  "Una onda plana cuya amplitud de presión disminuye como \\(p(x) = p_0\\,e^{-a x}\\) tiene una intensidad \\(I \\propto p^2\\) que disminuye como \\(e^{-2ax}\\). En decibeles, el nivel de amplitud disminuye \\(\\alpha = 20\\log_{10}(e)\\,a = 8.686\\,a\\) dB por unidad de longitud. En el tejido blando α aumenta casi en proporción a la frecuencia, \\(\\alpha = \\alpha_0 f\\), con \\(\\alpha_0\\) en dB/(cm MHz).",
"An echo from a boundary at depth d travels 2d through the tissue, so its level, relative to the pulse sent, is":
  "Un eco de una frontera a profundidad d recorre 2d a través del tejido, así que su nivel, relativo al pulso enviado, es",
"\\[L = 20\\log_{10}\\lvert r\\rvert - 2\\,\\alpha_0 f\\,d ,\\]":
  "\\[L = 20\\log_{10}\\lvert r\\rvert - 2\\,\\alpha_0 f\\,d ,\\]",
"a straight line in d with slope \\(-2\\alpha_0 f\\) and intercept set by the boundary’s reflection.":
  "una recta en d con pendiente \\(-2\\alpha_0 f\\) y ordenada al origen fijada por la reflexión de la frontera.",
"Starting from \\(dp/dx = -a\\,p\\), show that the intensity obeys \\(dI/dx = -2aI\\), and that α in dB per length is {#}a whether you work with amplitude ({#} log₁₀) or intensity ({#} log₁₀).":
  "A partir de \\(dp/dx = -a\\,p\\), muestra que la intensidad cumple \\(dI/dx = -2aI\\), y que α en dB por longitud es {#}a tanto si trabajas con la amplitud ({#} log₁₀) como con la intensidad ({#} log₁₀).",
"Find r for a muscle to bone boundary from the impedances above, and the intercept \\(20\\log_{10}\\lvert r\\rvert\\) in dB.":
  "Encuentra r para una frontera músculo hueso a partir de las impedancias de arriba, y la ordenada al origen \\(20\\log_{10}\\lvert r\\rvert\\) en dB.",
"Predict the slope of L against d at {#} MHz and at {#} MHz for muscle (α₀ = {#} dB/(cm MHz)).":
  "Predice la pendiente de L en función de d a {#} MHz y a {#} MHz para el músculo (α₀ = {#} dB/(cm MHz)).",
"A scanner can detect echoes down to {#} dB below the pulse sent (its dynamic range here, chosen for the question). How deep can it see a strong reflector in average soft tissue (α₀ = {#}) at {#} MHz and at {#} MHz?":
  "Un escáner puede detectar ecos hasta {#} dB por debajo del pulso enviado (su intervalo dinámico aquí, elegido para la pregunta). ¿A qué profundidad puede ver un reflector fuerte en tejido blando promedio (α₀ = {#}) a {#} MHz y a {#} MHz?",
"The echo time is \\(t = 2d/c\\). With \\(c\\) = {#} m/s in muscle, at what cursor time do you expect the bone echo for d = {#} cm?":
  "El tiempo del eco es \\(t = 2d/c\\). Con \\(c\\) = {#} m/s en el músculo, ¿en qué tiempo del cursor esperas el eco del hueso para d = {#} cm?",
"No hazards in the virtual lab. The energy absorbed in tissue heats it; scanners show a thermal index for this, and output limits keep it small.":
  "No hay riesgos en el laboratorio virtual. La energía absorbida en el tejido lo calienta; los escáneres muestran un índice térmico para esto, y los límites de emisión lo mantienen pequeño.",
"In the Attenuation in muscle setup, at {#} MHz, set the muscle depth to {#}, {#}, {#}, {#}, {#} and {#} cm. At each depth put the cursor on the peak of the bone echo, so the echo level readout is largest, and record a reading. Export the readings and Clear them. Repeat at {#} MHz and at {#} MHz, each series into its own copy of the table. At {#} MHz record depths of {#} to {#} cm in {#} cm steps.":
  "En la configuración Atenuación en músculo, a {#} MHz, pon la profundidad del músculo en {#}, {#}, {#}, {#}, {#} y {#} cm. En cada profundidad pon el cursor en el pico del eco del hueso, para que la lectura del nivel del eco sea máxima, y registra una lectura. Exporta las lecturas y bórralas. Repite a {#} MHz y a {#} MHz, cada serie en su propia copia de la tabla. A {#} MHz registra profundidades de {#} a {#} cm en pasos de {#} cm.",
"Then, at {#} MHz and {#} cm, try the TGC settings and watch the height of the bone echo on the trace (no reading needed).":
  "Luego, a {#} MHz y {#} cm, prueba los ajustes de TGC y observa la altura del eco del hueso en la traza (no hace falta registrar lectura).",
"Table {#}. Bone echo level against muscle depth (one copy for each frequency).":
  "Tabla {#}. Nivel del eco del hueso en función de la profundidad del músculo (una copia para cada frecuencia).",
"<span>B</span>Setup and frequency":
  "<span>B</span>Configuración y frecuencia",
"<span>C</span>Muscle depth d (cm)":
  "<span>C</span>Profundidad del músculo d (cm)",
"<span>D</span>Cursor time t (µs)":
  "<span>D</span>Tiempo del cursor t (µs)",
"<span>E</span>Echo level L (dB)":
  "<span>E</span>Nivel del eco L (dB)",
"<span>F</span>TGC":
  "<span>F</span>TGC",
"<span>G</span>Round trip 2d (cm)":
  "<span>G</span>Ida y vuelta 2d (cm)",
"Setup and frequency, row {#}":
  "Configuración y frecuencia, fila {#}",
"Muscle depth d (cm), row {#}":
  "Profundidad del músculo d (cm), fila {#}",
"Cursor time t (µs), row {#}":
  "Tiempo del cursor t (µs), fila {#}",
"Echo level L (dB), row {#}":
  "Nivel del eco L (dB), fila {#}",
"TGC, row {#}":
  "TGC, fila {#}",
"Round trip 2d (cm), row {#}":
  "Ida y vuelta 2d (cm), fila {#}",
"Table {#}. Slope against frequency (from your fits to Table {#}).":
  "Tabla {#}. Pendiente en función de la frecuencia (de tus ajustes a la Tabla {#}).",
"<span>A</span>Frequency f (MHz)":
  "<span>A</span>Frecuencia f (MHz)",
"<span>B</span>Slope of L against d (dB/cm)":
  "<span>B</span>Pendiente de L en función de d (dB/cm)",
"<span>C</span>Standard error of the slope (dB/cm)":
  "<span>C</span>Error estándar de la pendiente (dB/cm)",
"<span>D</span>Intercept (dB)":
  "<span>D</span>Ordenada al origen (dB)",
"<span>E</span>α = −slope/{#} (dB/cm)":
  "<span>E</span>α = −pendiente/{#} (dB/cm)",
"Frequency f (MHz), row {#}":
  "Frecuencia f (MHz), fila {#}",
"Slope of L against d (dB/cm), row {#}":
  "Pendiente de L en función de d (dB/cm), fila {#}",
"Standard error of the slope (dB/cm), row {#}":
  "Error estándar de la pendiente (dB/cm), fila {#}",
"Intercept (dB), row {#}":
  "Ordenada al origen (dB), fila {#}",
"α = −slope/{#} (dB/cm), row {#}":
  "α = −pendiente/{#} (dB/cm), fila {#}",
"Graph L against d for each copy of Table {#} and fit a line. Enter each slope, its standard error and the intercept in Table {#}.":
  "Grafica L en función de d para cada copia de la Tabla {#} y ajusta una recta. Anota cada pendiente, su error estándar y la ordenada al origen en la Tabla {#}.",
"Compare the intercepts with \\(20\\log_{10}\\lvert r\\rvert\\) from Before the lab question {#}. Why do they not depend on frequency?":
  "Compara las ordenadas al origen con \\(20\\log_{10}\\lvert r\\rvert\\) de la pregunta {#} de Antes del laboratorio. ¿Por qué no dependen de la frecuencia?",
"Graph α against f (Table {#}). Is it a straight line through the origin? Find α₀ from the slope, with its standard error, and compare with {#} dB/(cm MHz).":
  "Grafica α en función de f (Tabla {#}). ¿Es una recta que pasa por el origen? Encuentra α₀ a partir de la pendiente, con su error estándar, y compara con {#} dB/(cm MHz).",
"Check the cursor times against \\(2d/c\\) with c = {#} m/s. What depth would a scanner, which assumes {#} m/s, show for the {#} cm reading?":
  "Comprueba los tiempos del cursor con \\(2d/c\\) con c = {#} m/s. ¿Qué profundidad mostraría un escáner, que supone {#} m/s, para la lectura de {#} cm?",
"The model has no noise, so the scatter about each line comes from where you placed the cursor and from rounding. Move the cursor {#} µs to either side of a peak and see how much the level drops; use that to estimate the uncertainty of each L, and say whether it is large enough to matter next to the standard errors from your fits. A real measurement of α in muscle carries far larger uncertainties: published values depend on the species, the temperature and the direction of the fibers.":
  "El modelo no tiene ruido, así que la dispersión alrededor de cada recta proviene de dónde colocaste el cursor y del redondeo. Mueve el cursor {#} µs a cada lado de un pico y mira cuánto baja el nivel; usa eso para estimar la incertidumbre de cada L, y di si es lo bastante grande para importar frente a los errores estándar de tus ajustes. Una medición real de α en el músculo tiene incertidumbres mucho mayores: los valores publicados dependen de la especie, de la temperatura y de la dirección de las fibras.",
"Why do scanners use {#} to {#} MHz for the abdomen and {#} MHz or more for the thyroid or a tendon? Use your penetration depths from Before the lab question {#} and the pulse length at each frequency.":
  "¿Por qué los escáneres usan de {#} a {#} MHz para el abdomen y {#} MHz o más para la tiroides o un tendón? Usa tus profundidades de penetración de la pregunta {#} de Antes del laboratorio y la longitud del pulso a cada frecuencia.",
"The TGC curve for {#} dB/(cm MHz) does not make the bone echo exactly the same height at every depth. Give the reason, from the About the demo notes.":
  "La curva de TGC para {#} dB/(cm MHz) no hace que el eco del hueso tenga exactamente la misma altura a cada profundidad. Da la razón, a partir de las notas de Sobre la demo.",
"Set TGC to {#} and imagine the beam passing through {#} cm of fat over the muscle. Would the deeper tissue look too bright or too dark? Why?":
  "Pon la TGC en {#} e imagina que el haz atraviesa {#} cm de grasa sobre el músculo. ¿El tejido más profundo se vería demasiado brillante o demasiado oscuro? ¿Por qué?",
"Cortical bone’s α₀ is {#} dB/(cm MHz). How much is lost going through {#} cm of skull and back at {#} MHz? What does this mean for transcranial ultrasound?":
  "El α₀ del hueso cortical es {#} dB/(cm MHz). ¿Cuánto se pierde al atravesar {#} cm de cráneo de ida y vuelta a {#} MHz? ¿Qué significa esto para el ultrasonido transcraneal?",
"Water attenuates {#} dB/(cm MHz²) times f², tens of times to over a hundred times less than tissue at these frequencies. Why is a water bath or gel standoff a good way to place the transducer away from the skin?":
  "El agua atenúa {#} dB/(cm MHz²) por f², de decenas a más de cien veces menos que el tejido a estas frecuencias. ¿Por qué un baño de agua o un separador de gel es una buena manera de colocar el transductor lejos de la piel?",
"Prelab answers, all copies of Table {#} with their graphs, Table {#} with its graph, α₀ with its uncertainty, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, todas las copias de la Tabla {#} con sus gráficas, la Tabla {#} con su gráfica, α₀ con su incertidumbre, y las respuestas a las preguntas. Identifica los datos simulados.",
"Intensity of the wave":
  "Intensidad de la onda",
"Level of the echo relative to the pulse sent":
  "Nivel del eco relativo al pulso enviado",
"Acoustic impedance of the first medium":
  "Impedancia acústica del primer medio",
"Acoustic impedance of the second medium":
  "Impedancia acústica del segundo medio",
"Attenuation coefficient of the amplitude, in nepers":
  "Coeficiente de atenuación de la amplitud, en nepers",
"Attenuation coefficient":
  "Coeficiente de atenuación",
"Attenuation coefficient per unit frequency":
  "Coeficiente de atenuación por unidad de frecuencia",
"Speed of sound in muscle":
  "Rapidez del sonido en el músculo",
"Depth of the boundary below the transducer":
  "Profundidad de la frontera bajo el transductor",
"Frequency of the pulse":
  "Frecuencia del pulso",
"Pressure amplitude of the wave":
  "Amplitud de presión de la onda",
"Pressure amplitude where the wave starts":
  "Amplitud de presión donde empieza la onda",
"Share of the pressure a boundary reflects":
  "Fracción de la presión que refleja una frontera",
"Time of the echo after the pulse is sent":
  "Tiempo del eco después de enviar el pulso",
"Distance the wave has traveled":
  "Distancia que ha recorrido la onda",
"Depth the scanner assumes for an echo":
  "Profundidad que supone el escáner para un eco",
"Ultrasound: Echoes and Blood Flow (absorption)":
  "Ultrasonido: ecos y flujo sanguíneo (absorción)",
"The TGC curve for {#} dB/(cm MHz) does not make the bone echo exactly the same height at every depth. Give two reasons from the About the demo notes.":
  "La curva de TGC para {#} dB/(cm MHz) no hace que el eco del hueso tenga exactamente la misma altura a cada profundidad. Da dos razones a partir de las notas de Sobre la demo."
});
