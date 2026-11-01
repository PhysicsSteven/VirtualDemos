/* ws/polarization in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/polarization', {
"Light in":
  "Luz de entrada",
"Elements and their angles":
  "Elementos y sus ángulos",
"Angle between the light and the last axis θ (°)":
  "Ángulo entre la luz y el último eje θ (°)",
"I/I_0 after each element":
  "I/I_0 después de cada elemento",
"I/I_0 out":
  "I/I_0 de salida",
"Light out":
  "Luz de salida",
"Angle of incidence θ_i (°)":
  "Ángulo de incidencia θ_i (°)",
"Reflected fraction R":
  "Fracción reflejada R",
"Polarization | VirtualDemos":
  "Polarización | VirtualDemos",
"<strong>Setups in the demo:</strong> Malus’s law; Crossed polarizers; Three polarizer surprise; Quarter wave plate makes circular light; Half wave plate rotates polarization; Brewster’s angle and glare.":
  "<strong>Configuraciones en la demo:</strong> Ley de Malus; Polarizadores cruzados; Sorpresa de los tres polarizadores; Una lámina de cuarto de onda produce luz circular; Una lámina de media onda gira la polarización; Ángulo de Brewster y reflejos.",
"<strong>Using the demo.</strong> Two views. On the bench, a beam of light (unpolarized, linear at an angle you set, or circular) passes up to four elements in order: polarizers, quarter wave plates (λ/{#}) and half wave plates (λ/{#}). The angle of each element is its transmission axis for a polarizer and its fast axis for a wave plate, measured from the vertical; drag a disk on the drawing to turn it, and click a disk or its number to plot it. Light out gives the intensity after the last element, its polarization, and \\(I/I_0\\) after each element. The Many polarizers fold gives the light through \\(N\\) polarizers, each turned \\(90°/N\\) more than the last. In the reflection view, light meets a flat surface between two media; the readouts give the reflected and transmitted fractions for the two polarizations, the Brewster angle and the critical angle.":
  "<strong>Uso de la demo.</strong> Dos vistas. En el banco, un haz de luz (no polarizada, lineal a un ángulo que tú fijas, o circular) pasa en orden por hasta cuatro elementos: polarizadores, láminas de cuarto de onda (λ/{#}) y láminas de media onda (λ/{#}). El ángulo de cada elemento es su eje de transmisión para un polarizador y su eje rápido para una lámina de onda, medido desde la vertical; arrastra un disco en el dibujo para girarlo, y haz clic en un disco o en su número para graficarlo. Luz de salida da la intensidad después del último elemento, su polarización e \\(I/I_0\\) después de cada elemento. El plegable Muchos polarizadores da la luz que pasa por \\(N\\) polarizadores, cada uno girado \\(90°/N\\) más que el anterior. En la vista de reflexión, la luz llega a una superficie plana entre dos medios; las lecturas dan las fracciones reflejada y transmitida para las dos polarizaciones, el ángulo de Brewster y el ángulo crítico.",
"<strong>What the demo models.</strong> Ideal elements: a polarizer passes the component of the field along its axis and absorbs the rest, and a wave plate is lossless and delays the slow component by exactly a quarter or a half cycle. The light is followed with Jones and Stokes vectors, so unpolarized light is handled exactly. Reflection uses the Fresnel equations for a flat, smooth surface between two transparent media,":
  "<strong>Lo que modela la demo.</strong> Elementos ideales: un polarizador deja pasar la componente del campo a lo largo de su eje y absorbe el resto, y una lámina de onda no tiene pérdidas y retrasa la componente lenta exactamente un cuarto o medio ciclo. La luz se sigue con vectores de Jones y de Stokes, así que la luz no polarizada se trata de forma exacta. La reflexión usa las ecuaciones de Fresnel para una superficie plana y lisa entre dos medios transparentes,",
"\\[r_s = \\frac{n_1\\cos\\theta_i - n_2\\cos\\theta_t}{n_1\\cos\\theta_i + n_2\\cos\\theta_t},\\qquad r_p = \\frac{n_2\\cos\\theta_i - n_1\\cos\\theta_t}{n_2\\cos\\theta_i + n_1\\cos\\theta_t},\\]":
  "\\[r_s = \\frac{n_1\\cos\\theta_i - n_2\\cos\\theta_t}{n_1\\cos\\theta_i + n_2\\cos\\theta_t},\\qquad r_p = \\frac{n_2\\cos\\theta_i - n_1\\cos\\theta_t}{n_2\\cos\\theta_i + n_1\\cos\\theta_t},\\]",
"with the reflectances \\(R_s = r_s^2\\) and \\(R_p = r_p^2\\), and \\(\\tan\\theta_B = n_2/n_1\\). Simulated data.":
  "con las reflectancias \\(R_s = r_s^2\\) y \\(R_p = r_p^2\\), y \\(\\tan\\theta_B = n_2/n_1\\). Datos simulados.",
"Test Malus’s law for light passing two and three polarizers, and find how reflection polarizes light, with the Brewster angle at which the reflected light is completely polarized.":
  "Pon a prueba la ley de Malus para luz que pasa por dos y tres polarizadores, y averigua cómo la reflexión polariza la luz, con el ángulo de Brewster en el que la luz reflejada está completamente polarizada.",
"Light is a transverse wave: its electric field oscillates across the direction it travels. In linearly polarized light the field oscillates along one direction; in unpolarized light, such as light from the Sun or a bulb, the direction changes at random. An ideal polarizer passes only the component of the field along its transmission axis. Unpolarized light loses half its intensity in the first polarizer, whatever the axis. Linearly polarized light of intensity \\(I_0\\) meeting a polarizer whose axis makes an angle \\(\\theta\\) with its polarization keeps the component \\(E_0\\cos\\theta\\) of its field, and since intensity goes as the field squared,":
  "La luz es una onda transversal: su campo eléctrico oscila perpendicular a la dirección en que viaja. En la luz linealmente polarizada el campo oscila a lo largo de una dirección; en la luz no polarizada, como la del Sol o la de un foco, la dirección cambia al azar. Un polarizador ideal deja pasar solo la componente del campo a lo largo de su eje de transmisión. La luz no polarizada pierde la mitad de su intensidad en el primer polarizador, sea cual sea el eje. La luz linealmente polarizada de intensidad \\(I_0\\) que llega a un polarizador cuyo eje forma un ángulo \\(\\theta\\) con su polarización conserva la componente \\(E_0\\cos\\theta\\) de su campo, y como la intensidad va como el cuadrado del campo,",
"\\[I = I_0\\cos^2\\theta.\\]":
  "\\[I = I_0\\cos^2\\theta.\\]",
"This is Malus’s law. Each polarizer sends on light polarized along its own axis, so the next polarizer applies Malus’s law with the angle between the two axes.":
  "Esta es la ley de Malus. Cada polarizador deja salir luz polarizada a lo largo de su propio eje, así que el siguiente polarizador aplica la ley de Malus con el ángulo entre los dos ejes.",
"Light reflected from a surface is partly polarized. Its two components, \\(s\\) (field perpendicular to the plane of incidence, so parallel to the surface) and \\(p\\) (field in the plane of incidence), reflect differently. At the Brewster angle \\(\\theta_B\\),":
  "La luz reflejada en una superficie está parcialmente polarizada. Sus dos componentes, \\(s\\) (campo perpendicular al plano de incidencia, es decir, paralelo a la superficie) y \\(p\\) (campo en el plano de incidencia), se reflejan de forma distinta. En el ángulo de Brewster \\(\\theta_B\\),",
"\\[\\tan\\theta_B = \\frac{n_2}{n_1},\\]":
  "\\[\\tan\\theta_B = \\frac{n_2}{n_1},\\]",
"the \\(p\\) component is not reflected at all, so the reflected light is completely \\(s\\) polarized. At that angle the reflected and refracted rays are perpendicular.":
  "la componente \\(p\\) no se refleja en absoluto, así que la luz reflejada está completamente polarizada \\(s\\). En ese ángulo los rayos reflejado y refractado son perpendiculares.",
"Unpolarized light of intensity \\(I_0\\) passes a polarizer with a vertical axis and then a second polarizer with its axis at {#}° from vertical. What fraction of \\(I_0\\) gets through?":
  "Luz no polarizada de intensidad \\(I_0\\) pasa por un polarizador con eje vertical y luego por un segundo polarizador con su eje a {#}° de la vertical. ¿Qué fracción de \\(I_0\\) pasa?",
"Two polarizers are crossed (axes at {#}° and {#}°). A third is put between them with its axis at {#}°. What fraction of the unpolarized light now gets through? Show that with the middle axis at an angle \\(\\theta\\) the fraction is \\(\\tfrac{1}{8}\\sin^2 2\\theta\\).":
  "Dos polarizadores están cruzados (ejes a {#}° y {#}°). Se pone un tercero entre ellos con su eje a {#}°. ¿Qué fracción de la luz no polarizada pasa ahora? Demuestra que con el eje del medio a un ángulo \\(\\theta\\) la fracción es \\(\\tfrac{1}{8}\\sin^2 2\\theta\\).",
"Find the Brewster angle for light in air reflecting from glass (\\(n = 1.50\\)) and from water (\\(n = 1.33\\)).":
  "Encuentra el ángulo de Brewster para luz en aire que se refleja en vidrio (\\(n = 1.50\\)) y en agua (\\(n = 1.33\\)).",
"Light in air meets glass (\\(n = 1.50\\)) straight on. What fraction is reflected? (At normal incidence \\(R = \\big((n_1 - n_2)/(n_1 + n_2)\\big)^2\\) for either polarization.)":
  "Luz en aire llega de frente al vidrio (\\(n = 1.50\\)). ¿Qué fracción se refleja? (A incidencia normal \\(R = \\big((n_1 - n_2)/(n_1 + n_2)\\big)^2\\) para cualquiera de las dos polarizaciones.)",
"There are no hazards in the simulation. In a real optics lab, never look into a laser beam or its reflection, and never look at the Sun, with or without polarizers.":
  "La simulación no tiene peligros. En un laboratorio real de óptica, nunca mires directamente un haz láser ni su reflejo, y nunca mires el Sol, con o sin polarizadores.",
"<strong>Part {#}: one and two polarizers.</strong> Unpolarized light passes one polarizer: record with its axis at {#}°, {#}° and {#}°. Then add a second polarizer after it. With the first at {#}°, record with the second at {#}°, {#}°, {#}°, {#}°, {#}°, {#}° and {#}°, and at −{#}° and −{#}°.":
  "<strong>Parte {#}: uno y dos polarizadores.</strong> Luz no polarizada pasa por un polarizador: registra con su eje a {#}°, {#}° y {#}°. Luego añade un segundo polarizador después de él. Con el primero a {#}°, registra con el segundo a {#}°, {#}°, {#}°, {#}°, {#}°, {#}° y {#}°, y a −{#}° y −{#}°.",
"<strong>Part {#}: three polarizers.</strong> Start from crossed polarizers at {#}° and {#}°. Put a third polarizer between them, and record with its axis at {#}°, {#}°, {#}°, {#}°, {#}°, {#}° and {#}°. Then take the middle one out again and record.":
  "<strong>Parte {#}: tres polarizadores.</strong> Empieza con polarizadores cruzados a {#}° y {#}°. Pon un tercer polarizador entre ellos y registra con su eje a {#}°, {#}°, {#}°, {#}°, {#}°, {#}° y {#}°. Luego quita de nuevo el del medio y registra.",
"<strong>Part {#}: reflection from glass.</strong> Unpolarized light in air reflects from glass (\\(n_2 = 1.50\\)). Record at angles of incidence of {#}°, {#}°, {#}°, {#}°, {#}°, {#}°, {#}°, {#}°, {#}° and {#}°.":
  "<strong>Parte {#}: reflexión en vidrio.</strong> Luz no polarizada en aire se refleja en vidrio (\\(n_2 = 1.50\\)). Registra a ángulos de incidencia de {#}°, {#}°, {#}°, {#}°, {#}°, {#}°, {#}°, {#}°, {#}° y {#}°.",
"<strong>Part {#}: reflection from water.</strong> Repeat Part {#} for water (\\(n_2 = 1.33\\)) at {#}°, {#}°, {#}°, {#}° and {#}°.":
  "<strong>Parte {#}: reflexión en agua.</strong> Repite la Parte {#} para agua (\\(n_2 = 1.33\\)) a {#}°, {#}°, {#}°, {#}° y {#}°.",
"<strong>Using the virtual apparatus.</strong> On the bench, the reading records every element in order. Choosing a setup replaces the elements and the light in, so set the light and elements again after a setup if you changed them. A new element always goes at the end of the beam, so to put a polarizer between two others, set the axes again so the new middle one has the angle you want (the Three polarizer surprise setup starts that way). Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> En el banco, la lectura registra cada elemento en orden. Elegir una configuración reemplaza los elementos y la luz de entrada, así que vuelve a fijar la luz y los elementos después de una configuración si los habías cambiado. Un elemento nuevo siempre va al final del haz, así que para poner un polarizador entre otros dos, vuelve a fijar los ejes para que el nuevo del medio tenga el ángulo que quieres (la configuración Sorpresa de los tres polarizadores empieza así). Envía cada parte a la hoja de trabajo antes de borrar, para que cada parte tenga su propia copia de la tabla de Datos.",
"<span>B</span>View":
  "<span>B</span>Vista",
"<span>C</span>Light in":
  "<span>C</span>Luz de entrada",
"<span>D</span>Elements and their angles":
  "<span>D</span>Elementos y sus ángulos",
"<span>E</span>Angle between the light and the last axis \\(\\theta\\) (°)":
  "<span>E</span>Ángulo entre la luz y el último eje \\(\\theta\\) (°)",
"<span>F</span>\\(I/I_0\\) after each element":
  "<span>F</span>\\(I/I_0\\) después de cada elemento",
"<span>G</span>\\(I/I_0\\) out":
  "<span>G</span>\\(I/I_0\\) de salida",
"<span>H</span>Light out":
  "<span>H</span>Luz de salida",
"<span>I</span>Angle of incidence \\(\\theta_i\\) (°)":
  "<span>I</span>Ángulo de incidencia \\(\\theta_i\\) (°)",
"<span>N</span>Reflected fraction \\(R\\)":
  "<span>N</span>Fracción reflejada \\(R\\)",
"View, row {#}":
  "Vista, fila {#}",
"Light in, row {#}":
  "Luz de entrada, fila {#}",
"Elements and their angles, row {#}":
  "Elementos y sus ángulos, fila {#}",
"Angle between the light and the last axis θ (°), row {#}":
  "Ángulo entre la luz y el último eje θ (°), fila {#}",
"I/I_0 after each element, row {#}":
  "I/I_0 después de cada elemento, fila {#}",
"I/I_0 out, row {#}":
  "I/I_0 de salida, fila {#}",
"Light out, row {#}":
  "Luz de salida, fila {#}",
"Angle of incidence θ_i (°), row {#}":
  "Ángulo de incidencia θ_i (°), fila {#}",
"n_1, row {#}":
  "n_1, fila {#}",
"n_2, row {#}":
  "n_2, fila {#}",
"R_s, row {#}":
  "R_s, fila {#}",
"R_p, row {#}":
  "R_p, fila {#}",
"Reflected fraction R, row {#}":
  "Fracción reflejada R, fila {#}",
"I/I₀ after each element":
  "I/I₀ después de cada elemento",
"I/I₀ out":
  "I/I₀ de salida",
"For the single polarizer in Part {#}, what fraction of unpolarized light passes, and does it depend on the axis? Explain using the random direction of the field.":
  "Para el polarizador solo de la Parte {#}, ¿qué fracción de la luz no polarizada pasa, y depende del eje? Explícalo usando la dirección aleatoria del campo.",
"For the two polarizers in Part {#}, graph \\(I/I_0\\) out against \\(\\theta\\) and compare it with \\(\\tfrac{1}{2}\\cos^2\\theta\\). Then work out \\(\\cos^2\\theta\\) for each row and graph \\(I/I_0\\) out against it (by hand or in a spreadsheet). Fit a straight line: what do the slope and intercept say about Malus’s law? Why do \\(+30°\\) and \\(-30°\\) give the same result?":
  "Para los dos polarizadores de la Parte {#}, grafica \\(I/I_0\\) de salida contra \\(\\theta\\) y compárala con \\(\\tfrac{1}{2}\\cos^2\\theta\\). Luego calcula \\(\\cos^2\\theta\\) para cada fila y grafica \\(I/I_0\\) de salida contra él (a mano o en una hoja de cálculo). Ajusta una recta: ¿qué dicen la pendiente y la ordenada al origen sobre la ley de Malus? ¿Por qué \\(+30°\\) y \\(-30°\\) dan el mismo resultado?",
"For Part {#}, graph \\(I/I_0\\) out against \\(\\theta\\) (here the angle between the middle and last axes, {#}° minus the middle polarizer’s angle) and compare with \\(\\tfrac{1}{8}\\sin^2 2\\theta\\) from Before the lab {#}. Why does it make no difference which of the two angles you use? Explain how adding a polarizer, which can only absorb light, lets more light through.":
  "Para la Parte {#}, grafica \\(I/I_0\\) de salida contra \\(\\theta\\) (aquí el ángulo entre los ejes del medio y del último, {#}° menos el ángulo del polarizador del medio) y compárala con \\(\\tfrac{1}{8}\\sin^2 2\\theta\\) de Antes del laboratorio {#}. ¿Por qué no importa cuál de los dos ángulos uses? Explica cómo añadir un polarizador, que solo puede absorber luz, deja pasar más luz.",
"For Part {#}, graph \\(R_s\\) and \\(R_p\\) against the angle of incidence. Find the angle where \\(R_p = 0\\) and compare it with \\(\\arctan(n_2/n_1)\\). Check your reading at {#}° against Before the lab {#}. Near grazing incidence, what happens to both?":
  "Para la Parte {#}, grafica \\(R_s\\) y \\(R_p\\) contra el ángulo de incidencia. Encuentra el ángulo en que \\(R_p = 0\\) y compáralo con \\(\\arctan(n_2/n_1)\\). Compara tu lectura a {#}° con Antes del laboratorio {#}. Cerca de la incidencia rasante, ¿qué les pasa a ambas?",
"For Part {#}, compare the Brewster angle and the reflection at {#}° for water with those for glass. Why is the reflection from water weaker?":
  "Para la Parte {#}, compara el ángulo de Brewster y la reflexión a {#}° del agua con los del vidrio. ¿Por qué la reflexión en el agua es más débil?",
"At the Brewster angle, what fraction of the unpolarized light is reflected, and what is its polarization? Use this to explain why polarized sunglasses have a vertical transmission axis.":
  "En el ángulo de Brewster, ¿qué fracción de la luz no polarizada se refleja, y cuál es su polarización? Usa esto para explicar por qué los lentes de sol polarizados tienen un eje de transmisión vertical.",
"The model is exact for ideal elements, and the readings are given to six figures. Element angles are set in whole degrees and the angle of incidence in steps of {#}°, so the Brewster angle can be located only to about {#}°. Real sheet polarizers absorb some of the light along their axis and leak a little across it, so real crossed polarizers are never completely dark, and real surfaces are not perfectly flat or clean. The index of a real material also changes a little with the wavelength.":
  "El modelo es exacto para elementos ideales, y las lecturas se dan con seis cifras. Los ángulos de los elementos se fijan en grados enteros y el ángulo de incidencia en pasos de {#}°, así que el ángulo de Brewster solo se puede localizar con una precisión de unos {#}°. Los polarizadores laminares reales absorben algo de la luz a lo largo de su eje y dejan pasar un poco en la dirección perpendicular, así que los polarizadores cruzados reales nunca quedan completamente oscuros, y las superficies reales no son perfectamente planas ni limpias. El índice de un material real también cambia un poco con la longitud de onda.",
"Can sound in air be polarized? Why or why not?":
  "¿Puede polarizarse el sonido en el aire? ¿Por qué sí o por qué no?",
"In the Many polarizers fold, light passes \\(N\\) polarizers, each turned \\(90°/N\\) more than the last, so that the last is crossed with the light’s original polarization. Read the fraction that gets through for \\(N = 1, 2, 6\\) and \\(30\\). Show that each step passes \\(\\cos^2(90°/N)\\), and explain why the total grows toward {#} as \\(N\\) grows.":
  "En el plegable Muchos polarizadores, la luz pasa por \\(N\\) polarizadores, cada uno girado \\(90°/N\\) más que el anterior, de modo que el último queda cruzado con la polarización original de la luz. Lee la fracción que pasa para \\(N = 1, 2, 6\\) y \\(30\\). Demuestra que cada paso deja pasar \\(\\cos^2(90°/N)\\), y explica por qué el total crece hacia {#} a medida que \\(N\\) crece.",
"You tilt your head while wearing polarized sunglasses and look at the glare from a wet road. What happens to the glare, and why?":
  "Inclinas la cabeza mientras usas lentes de sol polarizados y miras el reflejo de un camino mojado. ¿Qué le pasa al reflejo, y por qué?",
"How could you tell, using only a second pair, whether a pair of sunglasses is polarizing?":
  "¿Cómo podrías saber, usando solo un segundo par, si unos lentes de sol son polarizados?",
"Prelab answers, a Data table copy for each part, the graphs and fits, the Brewster angles you found and the predicted ones, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, una copia de la tabla de Datos para cada parte, las gráficas y los ajustes, los ángulos de Brewster que encontraste y los predichos, y las respuestas a las preguntas. Identifica los datos simulados.",
"Amplitude of the electric field going in":
  "Amplitud del campo eléctrico de entrada",
"Intensity after an element":
  "Intensidad después de un elemento",
"Intensity of the light going in":
  "Intensidad de la luz de entrada",
"Number of polarizers":
  "Número de polarizadores",
"Fraction of the intensity reflected":
  "Fracción de la intensidad que se refleja",
"Reflectance for the p component":
  "Reflectancia de la componente p",
"Reflectance for the s component":
  "Reflectancia de la componente s",
"Index of refraction":
  "Índice de refracción",
"Index of refraction on the incident side":
  "Índice de refracción del lado incidente",
"Index of refraction on the far side":
  "Índice de refracción del lado opuesto",
"Component with the field in the plane of incidence":
  "Componente con el campo en el plano de incidencia",
"Reflection coefficient for the p component":
  "Coeficiente de reflexión de la componente p",
"Reflection coefficient for the s component":
  "Coeficiente de reflexión de la componente s",
"Component with the field perpendicular to the plane of incidence":
  "Componente con el campo perpendicular al plano de incidencia",
"Angle between the light's polarization and the polarizer's axis":
  "Ángulo entre la polarización de la luz y el eje del polarizador",
"Brewster angle":
  "Ángulo de Brewster",
"Angle of incidence":
  "Ángulo de incidencia",
"Angle of refraction":
  "Ángulo de refracción",
"Column O, row {#}":
  "Columna O, fila {#}",
"Heading of column O":
  "Encabezado de la columna O",
"Column O":
  "Columna O"
});
