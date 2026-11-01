/* ws/speed-of-light in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/speed-of-light', {
"Signed speed f (rev/s)":
  "Rapidez con signo f (rev/s)",
"Micrometer reading s (mm)":
  "Lectura del micrómetro s (mm)",
"Speed of Light with a Rotating Mirror | VirtualDemos":
  "La rapidez de la luz con un espejo giratorio | VirtualDemos",
"Speed of Light with a Rotating Mirror":
  "La rapidez de la luz con un espejo giratorio",
"<strong>Setups in the demo:</strong> The bench at rest; Spinning at {#} rev/s; Slow motion: why the beam comes back crooked; CW then CCW; Longer path (D = {#} m); Measure c (this one fills the table with simulated readings for you, so don’t use it for your own data).":
  "<strong>Configuraciones en la demo:</strong> El banco en reposo; Girando a {#} rev/s; Cámara lenta: por qué el haz regresa desviado; CW y luego CCW; Trayectoria más larga (D = {#} m); Medir c (esta llena la tabla por ti con lecturas simuladas, así que no la uses para tus propios datos).",
"The bench follows the common Foucault rotating mirror kit: a laser focused by lens L1 to a point S, a lens L2 (\\(f_2 = 252\\) mm) a distance \\(A\\) from S, a mirror MR turned by a motor a distance \\(B\\) past L2, and a fixed mirror MF a distance \\(D\\) from MR. A beam splitter sends the returning light to a measuring microscope.":
  "El banco sigue el equipo común de espejo giratorio de Foucault: un láser enfocado por la lente L1 en un punto S, una lente L2 (\\(f_2 = 252\\) mm) a una distancia \\(A\\) de S, un espejo MR girado por un motor a una distancia \\(B\\) más allá de L2, y un espejo fijo MF a una distancia \\(D\\) de MR. Un divisor de haz manda la luz que regresa a un microscopio de medición.",
"\\(D\\) runs from {#} to {#} m and \\(B\\) from {#} to {#} m. The bench keeps S focused on MF, so it sets \\(A\\) from \\(1/f_2 = 1/A + 1/(D + B)\\) and shows it.":
  "\\(D\\) va de {#} a {#} m y \\(B\\) de {#} a {#} m. El banco mantiene S enfocado en MF, así que fija \\(A\\) a partir de \\(1/f_2 = 1/A + 1/(D + B)\\) y lo muestra.",
"The motor turns clockwise (CW) or counterclockwise (CCW) at up to {#} rev/s. Its speed meter jitters by about {#}%, like a real one.":
  "El motor gira en sentido horario (CW) o antihorario (CCW) hasta {#} rev/s. Su medidor de velocidad fluctúa cerca de {#}%, como uno real.",
"You turn the micrometer in steps of {#} or {#} mm to put the crosshair on the middle of the spot. The spot jitters by about {#} µm. The rest position of the spot and both jitters come from the bench seed (Instrument fold); share the seed so a class works on the same bench.":
  "Giras el micrómetro en pasos de {#} o {#} mm para poner la retícula en el centro de la mancha. La mancha fluctúa cerca de {#} µm. La posición de reposo de la mancha y ambas fluctuaciones vienen de la semilla del banco (sección Instrumento); comparte la semilla para que un grupo trabaje con el mismo banco.",
"Capture reading stores the direction, the speed meter reading, your micrometer reading, \\(D\\) and \\(B\\). Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Capturar lectura guarda el sentido, la lectura del medidor de velocidad, tu lectura del micrómetro, \\(D\\) y \\(B\\). Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Blind (Instrument fold) hides the true shift, the flight time, the mirror’s turn, the value of \\(c\\) from the demo’s own fit and the accepted value.":
  "A ciegas (sección Instrumento) oculta el desplazamiento real, el tiempo de vuelo, el giro del espejo, el valor de \\(c\\) del propio ajuste de la demo y el valor aceptado.",
"The light travels at \\(c\\); air would slow it by {#}%, far below what this method can resolve.":
  "La luz viaja a \\(c\\); el aire la frenaría en un {#}%, muy por debajo de lo que este método puede resolver.",
"Measure the speed of light by timing a round trip of {#} m with a mirror that turns about a thousand times a second.":
  "Mide la rapidez de la luz cronometrando un viaje de ida y vuelta de {#} m con un espejo que gira cerca de mil veces por segundo.",
"Light from S passes L2, reflects off the turning mirror MR, travels to the fixed mirror MF and back, a round trip of \\(2D\\) that takes":
  "La luz de S pasa por L2, se refleja en el espejo giratorio MR, viaja hasta el espejo fijo MF y regresa, un viaje de ida y vuelta de \\(2D\\) que tarda",
"\\[\\Delta t = \\frac{2D}{c} .\\]":
  "\\[\\Delta t = \\frac{2D}{c} .\\]",
"The mirror turns at \\(f\\) revolutions per second, an angular speed \\(\\omega = 2\\pi f\\), so it turns through \\(\\Delta\\theta = \\omega\\,\\Delta t\\) while the light is away. A mirror turned by \\(\\Delta\\theta\\) turns the reflected beam by \\(2\\Delta\\theta\\), so the light returns at a slight angle and L2 forms its image of S beside S. With the magnification of L2 the image moves by":
  "El espejo gira a \\(f\\) revoluciones por segundo, una rapidez angular \\(\\omega = 2\\pi f\\), así que gira un ángulo \\(\\Delta\\theta = \\omega\\,\\Delta t\\) mientras la luz está fuera. Un espejo girado \\(\\Delta\\theta\\) gira el haz reflejado \\(2\\Delta\\theta\\), así que la luz regresa con un ligero ángulo y L2 forma su imagen de S junto a S. Con el aumento de L2 la imagen se desplaza",
"\\[\\Delta s = \\frac{4 A D^2 \\omega}{c\\,(D + B)} .\\]":
  "\\[\\Delta s = \\frac{4 A D^2 \\omega}{c\\,(D + B)} .\\]",
"The shift grows in proportion to the signed speed (CW positive, CCW negative), so a graph of the micrometer reading \\(s\\) against the signed speed \\(f\\) is a straight line of slope":
  "El desplazamiento crece en proporción a la rapidez con signo (CW positiva, CCW negativa), así que una gráfica de la lectura del micrómetro \\(s\\) en función de la rapidez con signo \\(f\\) es una recta de pendiente",
"\\[k = \\frac{8\\pi A D^2}{c\\,(D + B)}, \\qquad\\text{so}\\qquad c = \\frac{8\\pi A D^2}{(D + B)\\,k} .\\]":
  "\\[k = \\frac{8\\pi A D^2}{c\\,(D + B)}, \\qquad\\text{so}\\qquad c = \\frac{8\\pi A D^2}{(D + B)\\,k} .\\]",
"Its intercept is the reading at rest. The speed of light has been exact by definition since {#}: \\(c\\) = {#} {#} {#} m/s (§{#}). Its being the same for every observer is the second postulate of relativity (§{#}).":
  "Su ordenada al origen es la lectura en reposo. La rapidez de la luz es exacta por definición desde {#}: \\(c\\) = {#} {#} {#} m/s (§{#}). Que sea la misma para todo observador es el segundo postulado de la relatividad (§{#}).",
"For \\(D = 12.00\\) m, find the round trip time \\(\\Delta t\\), and the angle the mirror turns through during it at {#} rev/s.":
  "Para \\(D = 12.00\\) m, encuentra el tiempo de ida y vuelta \\(\\Delta t\\), y el ángulo que gira el espejo durante ese tiempo a {#} rev/s.",
"Use the focus condition to find \\(A\\) for \\(D = 12.00\\) m and \\(B = 0.500\\) m.":
  "Usa la condición de enfoque para encontrar \\(A\\) para \\(D = 12.00\\) m y \\(B = 0.500\\) m.",
"Predict the image shift \\(\\Delta s\\) at {#} rev/s for this bench. Why are there two factors of {#} in \\(4AD^2\\omega\\)?":
  "Predice el desplazamiento de la imagen \\(\\Delta s\\) a {#} rev/s para este banco. ¿Por qué hay dos factores de {#} en \\(4AD^2\\omega\\)?",
"Why measure in both directions rather than only one direction and the rest position?":
  "¿Por qué medir en ambos sentidos en lugar de solo en un sentido y en la posición de reposo?",
"None for the virtual apparatus. A real bench uses a laser: keep the beam below eye level and away from shiny objects. Keep hands clear of the motor.":
  "Ninguna para el aparato virtual. Un banco real usa un láser: mantén el haz por debajo del nivel de los ojos y lejos de objetos brillantes. Mantén las manos lejos del motor.",
"Use the bench seed your instructor gives you (the demo starts with {#}), and turn Blind on.":
  "Usa la semilla del banco que te dé tu instructor (la demo empieza con {#}), y activa A ciegas.",
"<strong>Rest position.</strong> Start with The bench at rest (\\(D = 12.00\\) m, \\(B = 0.500\\) m). Write down \\(A\\). Center the crosshair on the spot and capture the reading.":
  "<strong>Posición de reposo.</strong> Empieza con El banco en reposo (\\(D = 12.00\\) m, \\(B = 0.500\\) m). Anota \\(A\\). Centra la retícula en la mancha y captura la lectura.",
"<strong>Both directions.</strong> Run the mirror clockwise at {#}, {#}, {#} and {#} rev/s. At each speed center the crosshair on the spot and capture. Do the same counterclockwise, then send the readings to the worksheet before you clear them.":
  "<strong>Ambos sentidos.</strong> Haz girar el espejo en sentido horario a {#}, {#}, {#} y {#} rev/s. En cada rapidez centra la retícula en la mancha y captura. Haz lo mismo en sentido antihorario, y luego envía las lecturas a la hoja de trabajo antes de borrarlas.",
"<strong>Longer path.</strong> Clear the readings, set \\(D = 20.00\\) m with \\(B = 0.500\\) m, and write down the new \\(A\\). Capture the rest position and readings at {#} and {#} rev/s in each direction. Send this run to a new copy of the table.":
  "<strong>Trayectoria más larga.</strong> Borra las lecturas, fija \\(D = 20.00\\) m con \\(B = 0.500\\) m y anota la nueva \\(A\\). Captura la posición de reposo y lecturas a {#} y {#} rev/s en cada sentido. Envía esta corrida a una copia nueva de la tabla.",
"<span>B</span>Direction":
  "<span>B</span>Sentido",
"<span>C</span>Signed speed f (rev/s)":
  "<span>C</span>Rapidez con signo f (rev/s)",
"<span>D</span>Micrometer reading s (mm)":
  "<span>D</span>Lectura del micrómetro s (mm)",
"Direction, row {#}":
  "Sentido, fila {#}",
"Signed speed f (rev/s), row {#}":
  "Rapidez con signo f (rev/s), fila {#}",
"Micrometer reading s (mm), row {#}":
  "Lectura del micrómetro s (mm), fila {#}",
"D (m), row {#}":
  "D (m), fila {#}",
"B (m), row {#}":
  "B (m), fila {#}",
"Graph \\(s\\) against \\(f\\) for the {#} m bench and fit a straight line. From the slope find \\(c\\), with its uncertainty from the slope.":
  "Grafica \\(s\\) en función de \\(f\\) para el banco de {#} m y ajusta una recta. A partir de la pendiente encuentra \\(c\\), con su incertidumbre a partir de la pendiente.",
"Compare the intercept with your reading at rest. Do the residuals show any difference between the two directions?":
  "Compara la ordenada al origen con tu lectura en reposo. ¿Muestran los residuos alguna diferencia entre los dos sentidos?",
"Use the CW and CCW readings at {#} rev/s alone: \\(c = \\frac{4AD^2 \\cdot 2\\pi(f_\\mathrm{CW} + f_\\mathrm{CCW})}{(D + B)\\,\\lvert s_\\mathrm{CW} - s_\\mathrm{CCW} \\rvert}\\), with both speeds as positive meter readings. Does it agree with the fit?":
  "Usa solo las lecturas CW y CCW a {#} rev/s: \\(c = \\frac{4AD^2 \\cdot 2\\pi(f_\\mathrm{CW} + f_\\mathrm{CCW})}{(D + B)\\,\\lvert s_\\mathrm{CW} - s_\\mathrm{CCW} \\rvert}\\), con ambas rapideces como lecturas positivas del medidor. ¿Concuerda con el ajuste?",
"Find \\(c\\) from the {#} m run. By what factor did the slope grow from {#} m to {#} m? Compare with the factor \\(A D^2/(D + B)\\) predicts.":
  "Encuentra \\(c\\) a partir de la corrida de {#} m. ¿En qué factor creció la pendiente de {#} m a {#} m? Compáralo con el factor que predice \\(A D^2/(D + B)\\).",
"Compare your values of \\(c\\) with the exact value. Which run gives the more precise result, and why?":
  "Compara tus valores de \\(c\\) con el valor exacto. ¿Qué corrida da el resultado más preciso, y por qué?",
"How precisely can you center the crosshair, compared with the jitter of the spot? How does that compare with the largest shift you measured? Find the relative uncertainty of \\(c\\) from the slope and say whether the meter’s {#}% jitter or your micrometer readings limit it. In a real lab the distances \\(D\\), \\(B\\) and \\(A\\) would add to it.":
  "¿Con qué precisión puedes centrar la retícula, comparada con la fluctuación de la mancha? ¿Cómo se compara eso con el mayor desplazamiento que mediste? Encuentra la incertidumbre relativa de \\(c\\) a partir de la pendiente y di si la limita la fluctuación del {#}% del medidor o tus lecturas del micrómetro. En un laboratorio real las distancias \\(D\\), \\(B\\) y \\(A\\) se sumarían a ella.",
"What value of \\(c\\) would you get if you forgot that reflection doubles the angle?":
  "¿Qué valor de \\(c\\) obtendrías si olvidaras que la reflexión duplica el ángulo?",
"Why does a constant error in the micrometer zero not affect \\(c\\)?":
  "¿Por qué un error constante en el cero del micrómetro no afecta a \\(c\\)?",
"Making \\(D\\) larger increases the shift, but not as \\(D^2\\). Why not?":
  "Hacer \\(D\\) más grande aumenta el desplazamiento, pero no como \\(D^2\\). ¿Por qué no?",
"Foucault used this method in {#} to show that light is slower in water than in air. What would the shift do if the 2D path were filled with water (\\(n = 1.33\\))?":
  "Foucault usó este método en {#} para mostrar que la luz es más lenta en el agua que en el aire. ¿Qué haría el desplazamiento si la trayectoria 2D estuviera llena de agua (\\(n = 1.33\\))?",
"Why is \\(c\\) now an exact number with no uncertainty? What does a measurement like this one determine instead?":
  "¿Por qué \\(c\\) es ahora un número exacto sin incertidumbre? ¿Qué determina en cambio una medición como esta?",
"Prelab answers, the bench seed and dimensions, the table copies with their graphs and fits, \\(c\\) from the fit and from the pair method with uncertainties, the comparison of the two paths, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, la semilla y las dimensiones del banco, las copias de la tabla con sus gráficas y ajustes, \\(c\\) a partir del ajuste y del método de pares con incertidumbres, la comparación de las dos trayectorias, y las respuestas a las preguntas. Identifica los datos simulados.",
"Distance from S to lens L2":
  "Distancia de S a la lente L2",
"Distance from L2 to the turning mirror":
  "Distancia de L2 al espejo giratorio",
"Distance from the turning mirror to the fixed mirror":
  "Distancia del espejo giratorio al espejo fijo",
"Speed of light":
  "Rapidez de la luz",
"Rotation rate of the mirror (signed)":
  "Frecuencia de rotación del espejo (con signo)",
"Focal length of lens L2":
  "Distancia focal de la lente L2",
"Counterclockwise rotation rate":
  "Frecuencia de rotación en sentido antihorario",
"Clockwise rotation rate":
  "Frecuencia de rotación en sentido horario",
"Slope of s against f":
  "Pendiente de s en función de f",
"Index of refraction":
  "Índice de refracción",
"Angular speed of the mirror":
  "Rapidez angular del espejo",
"Micrometer reading (Δs: shift of the image)":
  "Lectura del micrómetro (Δs: desplazamiento de la imagen)",
"Reading with counterclockwise rotation":
  "Lectura con rotación en sentido antihorario",
"Reading with clockwise rotation":
  "Lectura con rotación en sentido horario",
"Time (Δt: the round trip time)":
  "Tiempo (Δt: el tiempo de ida y vuelta)",
"Angle of the mirror (Δθ: its turn while the light is away)":
  "Ángulo del espejo (Δθ: su giro mientras la luz está fuera)",
"Speed of Light":
  "La rapidez de la luz"
});
