/* ws/meissner-effect in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/meissner-effect', {
"Applied field B (mT)":
  "Campo aplicado B (mT)",
"Moment m (mA·m²)":
  "Momento m (mA·m²)",
"Field at the equator (mT)":
  "Campo en el ecuador (mT)",
"The Meissner Effect and the Critical Field | VirtualDemos":
  "El efecto Meissner y el campo crítico | VirtualDemos",
"The Meissner Effect and the Critical Field":
  "El efecto Meissner y el campo crítico",
"<strong>Setups in the demo:</strong> Lead, field pushed out; Lead above T<sub>c</sub>; Perfect conductor; Critical field of tin; Mystery metal.":
  "<strong>Configuraciones en la demo:</strong> Plomo, campo expulsado; Plomo por encima de T<sub>c</sub>; Conductor perfecto; Campo crítico del estaño; Metal misterioso.",
"The sample is a sphere {#} mm across, in a cryostat inside a long solenoid. Choose the metal, the temperature ({#} to {#} K, to {#} K) and the applied field ({#} to {#} mT, to {#} mT). The number boxes under the sliders take exact values.":
  "La muestra es una esfera de {#} mm de diámetro, en un criostato dentro de un solenoide largo. Elige el metal, la temperatura ({#} a {#} K, a {#} K) y el campo aplicado ({#} a {#} mT, a {#} mT). Las casillas numéricas bajo los deslizadores aceptan valores exactos.",
"The magnetometer reads the sphere’s magnetic moment \\(m\\) in mA·m², and the Hall probe the field just outside its equator. The picture draws the field lines at equal steps of magnetic flux, so where they crowd the field is strong.":
  "El magnetómetro lee el momento magnético \\(m\\) de la esfera en mA·m², y la sonda Hall el campo justo afuera de su ecuador. La imagen dibuja las líneas de campo a pasos iguales de flujo magnético, así que donde se juntan el campo es intenso.",
"Critical temperatures and fields are from the textbook’s Table {#}, with \\(B_c(T)\\) from its Equation {#}. The sample is an ideal type I superconductor in equilibrium: its state depends only on \\(T\\) and \\(B\\), not on the order you change them. Real samples show some hysteresis.":
  "Las temperaturas y los campos críticos son de la Tabla {#} del libro, con \\(B_c(T)\\) de su Ecuación {#}. La muestra es un superconductor ideal de tipo I en equilibrio: su estado depende solo de \\(T\\) y \\(B\\), no del orden en que los cambies. Las muestras reales muestran algo de histéresis.",
"“Perfect conductor” is an imaginary metal whose only change below \\(T_c\\) is zero resistance. It keeps whatever flux it held when it was cooled through \\(T_c\\).":
  "“Conductor perfecto” es un metal imaginario cuyo único cambio por debajo de \\(T_c\\) es una resistencia cero. Conserva el flujo que tenía cuando se enfrió a través de \\(T_c\\).",
"The graph shows the applied field against temperature, with the critical field curve, or the moment against the applied field at the present temperature. The curves are hidden for the mystery metal and in Blind (Lab section).":
  "La gráfica muestra el campo aplicado en función de la temperatura, con la curva del campo crítico, o el momento en función del campo aplicado a la temperatura actual. Las curvas se ocultan para el metal misterioso y en A ciegas (sección Laboratorio).",
"Record reading stores the sample, the temperature, the applied field, the moment and the equator field. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la muestra, la temperatura, el campo aplicado, el momento y el campo en el ecuador. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una nueva copia de la tabla.",
"Show that a superconductor does more than lose its resistance: it pushes a magnetic field out. Then measure how the critical field depends on temperature, for lead and for a mystery metal.":
  "Muestra que un superconductor hace más que perder su resistencia: expulsa un campo magnético. Luego mide cómo depende el campo crítico de la temperatura, para el plomo y para un metal misterioso.",
"Below its critical temperature \\(T_c\\) a superconductor has zero resistance, and in a magnetic field weaker than its critical field \\(B_c\\) the field inside it is zero: it is a perfect diamagnet. A sample cooled through \\(T_c\\) in a field pushes that field out. This is the Meissner effect (§{#}). Zero resistance alone would not do this: with no resistance the induced emf around any loop in the metal must be zero, so by Faraday’s law the flux through it cannot change, and a field present at cooling would stay trapped.":
  "Por debajo de su temperatura crítica \\(T_c\\), un superconductor tiene resistencia cero, y en un campo magnético más débil que su campo crítico \\(B_c\\) el campo en su interior es cero: es un diamagneto perfecto. Una muestra enfriada a través de \\(T_c\\) en un campo expulsa ese campo. Este es el efecto Meissner (§{#}). La resistencia cero por sí sola no haría esto: sin resistencia, la fem inducida alrededor de cualquier espira en el metal debe ser cero, así que por la ley de Faraday el flujo a través de ella no puede cambiar, y un campo presente al enfriar quedaría atrapado.",
"The critical field falls to zero at \\(T_c\\) (§{#}, Equation {#}):":
  "El campo crítico baja a cero en \\(T_c\\) (§{#}, Ecuación {#}):",
"\\[B_c(T) = B_c(0)\\left[1 - \\left(\\frac{T}{T_c}\\right)^2\\right].\\]":
  "\\[B_c(T) = B_c(0)\\left[1 - \\left(\\frac{T}{T_c}\\right)^2\\right].\\]",
"A field above \\(B_c\\) makes the metal normal again.":
  "Un campo por encima de \\(B_c\\) vuelve normal al metal.",
"The field that is pushed out has to go around the sample, so it crowds at the sides. For a sphere in a uniform applied field \\(B\\), the field just outside the equator is \\(\\tfrac{3}{2}B\\). The field therefore starts to get in when \\(\\tfrac{3}{2}B\\) reaches \\(B_c\\), at \\(B = \\tfrac{2}{3}B_c\\), and the whole sphere is normal at \\(B = B_c\\). While the field is pushed out, currents in the sphere’s surface give it a magnetic moment opposite to the field,":
  "El campo que se expulsa tiene que rodear la muestra, así que se concentra en los lados. Para una esfera en un campo aplicado uniforme \\(B\\), el campo justo afuera del ecuador es \\(\\tfrac{3}{2}B\\). Por lo tanto, el campo empieza a entrar cuando \\(\\tfrac{3}{2}B\\) alcanza \\(B_c\\), en \\(B = \\tfrac{2}{3}B_c\\), y toda la esfera es normal en \\(B = B_c\\). Mientras el campo está expulsado, las corrientes en la superficie de la esfera le dan un momento magnético opuesto al campo,",
"\\[m = -\\frac{2\\pi R^3}{\\mu_0}\\,B,\\]":
  "\\[m = -\\frac{2\\pi R^3}{\\mu_0}\\,B,\\]",
"where \\(R\\) is the sphere’s radius. When the sphere is normal, its moment is zero.":
  "donde \\(R\\) es el radio de la esfera. Cuando la esfera es normal, su momento es cero.",
"Use Table {#} (\\(T_c = 7.2\\) K and \\(B_c(0) = 0.080\\) T for lead) to find the critical field of lead at {#} K, in mT.":
  "Usa la Tabla {#} (\\(T_c = 7.2\\) K y \\(B_c(0) = 0.080\\) T para el plomo) para encontrar el campo crítico del plomo a {#} K, en mT.",
"Predict the moment of the lead sphere (\\(R = 5.00\\) mm) at {#} K in an applied field of {#} mT, and the field at its equator.":
  "Predice el momento de la esfera de plomo (\\(R = 5.00\\) mm) a {#} K en un campo aplicado de {#} mT, y el campo en su ecuador.",
"A sphere is cooled through \\(T_c\\) in a field of {#} mT, then the applied field is switched off. Predict the field inside it if it is (a) a perfect conductor, (b) a superconductor.":
  "Una esfera se enfría a través de \\(T_c\\) en un campo de {#} mT, luego se apaga el campo aplicado. Predice el campo en su interior si es (a) un conductor perfecto, (b) un superconductor.",
"Which graph of the critical field gives a straight line: \\(B_c\\) against \\(T\\), or \\(B_c\\) against \\(T^2\\)? Write its slope and intercept in terms of \\(T_c\\) and \\(B_c(0)\\).":
  "¿Qué gráfica del campo crítico da una recta: \\(B_c\\) en función de \\(T\\), o \\(B_c\\) en función de \\(T^2\\)? Escribe su pendiente y su ordenada al origen en términos de \\(T_c\\) y \\(B_c(0)\\).",
"No hazards in the virtual lab. In a real one, liquid helium and liquid nitrogen cause cold burns and can suffocate in a closed room as they boil off.":
  "No hay riesgos en el laboratorio virtual. En uno real, el helio líquido y el nitrógeno líquido causan quemaduras por frío y pueden asfixiar en un cuarto cerrado al evaporarse.",
"<strong>Cooling in a field.</strong> Start with Lead above T<sub>c</sub> ({#} K, {#} mT) and record a reading. Cool to {#}, {#}, {#}, {#} and {#} K, recording at each. Then lower the applied field to {#} and record once more.":
  "<strong>Enfriamiento en un campo.</strong> Empieza con Plomo por encima de T<sub>c</sub> ({#} K, {#} mT) y registra una lectura. Enfría a {#}, {#}, {#}, {#} y {#} K, registrando en cada una. Luego baja el campo aplicado a {#} y registra una vez más.",
"<strong>A perfect conductor.</strong> Export and clear the readings, choose Perfect conductor and repeat exactly the same steps. Look at the field lines at each step.":
  "<strong>Un conductor perfecto.</strong> Exporta y borra las lecturas, elige Conductor perfecto y repite exactamente los mismos pasos. Observa las líneas de campo en cada paso.",
"<strong>Moment against field.</strong> Export, clear, choose lead as a superconductor at {#} K and record readings from {#} to {#} mT in steps of {#} mT, with extra readings every {#} mT between {#} and {#} mT. Export and start a new series where the moment stops following a straight line, and again once it reaches zero, so that each part goes in its own copy of the table and can be fitted on its own.":
  "<strong>Momento en función del campo.</strong> Exporta, borra, elige el plomo como superconductor a {#} K y registra lecturas de {#} a {#} mT en pasos de {#} mT, con lecturas adicionales cada {#} mT entre {#} y {#} mT. Exporta y empieza una serie nueva donde el momento deja de seguir una recta, y otra vez cuando llega a cero, para que cada parte vaya en su propia copia de la tabla y se pueda ajustar por separado.",
"<strong>Critical field against temperature.</strong> Export and clear. At {#}, {#}, {#}, {#}, {#}, {#} and {#} K, find the smallest applied field at which the moment is zero, to {#} mT, and record that reading.":
  "<strong>Campo crítico en función de la temperatura.</strong> Exporta y borra. A {#}, {#}, {#}, {#}, {#}, {#} y {#} K, encuentra el menor campo aplicado con el que el momento es cero, a {#} mT, y registra esa lectura.",
"<strong>Mystery metal.</strong> Export, clear and choose Mystery metal (choosing it again draws a new metal, so stay with one). First find roughly where its superconductivity ends: in the smallest field, {#} mT, raise the temperature until the moment reaches zero, which happens just below \\(T_c\\). Then find its critical field, as for lead, at six temperatures spread between {#} K and \\(T_c\\).":
  "<strong>Metal misterioso.</strong> Exporta, borra y elige Metal misterioso (elegirlo otra vez genera un metal nuevo, así que quédate con uno). Primero encuentra aproximadamente dónde termina su superconductividad: en el campo más pequeño, {#} mT, sube la temperatura hasta que el momento llegue a cero, lo que ocurre justo por debajo de \\(T_c\\). Luego encuentra su campo crítico, como para el plomo, a seis temperaturas repartidas entre {#} K y \\(T_c\\).",
"<span>B</span>Sample":
  "<span>B</span>Muestra",
"<span>C</span>Temperature \\(T\\) (K)":
  "<span>C</span>Temperatura \\(T\\) (K)",
"<span>D</span>Applied field \\(B\\) (mT)":
  "<span>D</span>Campo aplicado \\(B\\) (mT)",
"<span>E</span>Moment \\(m\\) (mA·m²)":
  "<span>E</span>Momento \\(m\\) (mA·m²)",
"<span>F</span>Field at the equator (mT)":
  "<span>F</span>Campo en el ecuador (mT)",
"Sample, row {#}":
  "Muestra, fila {#}",
"Applied field B (mT), row {#}":
  "Campo aplicado B (mT), fila {#}",
"Moment m (mA·m²), row {#}":
  "Momento m (mA·m²), fila {#}",
"Field at the equator (mT), row {#}":
  "Campo en el ecuador (mT), fila {#}",
"T^{#} (K²), row {#}":
  "T^{#} (K²), fila {#}",
"Compare the last two readings ({#} K in {#} mT, then in zero field) for the superconductor and the perfect conductor. Explain each moment and equator field from what the field lines did, and from your answer to Before the lab {#}.":
  "Compara las dos últimas lecturas ({#} K en {#} mT, luego en campo cero) para el superconductor y el conductor perfecto. Explica cada momento y cada campo en el ecuador a partir de lo que hicieron las líneas de campo, y de tu respuesta a Antes del laboratorio {#}.",
"For the moment against field at {#} K, fit \\(m\\) against \\(B\\) over the straight part. Compare the slope with \\(-2\\pi R^3/\\mu_0\\), and find the equator field there as a multiple of \\(B\\).":
  "Para el momento en función del campo a {#} K, ajusta \\(m\\) en función de \\(B\\) en la parte recta. Compara la pendiente con \\(-2\\pi R^3/\\mu_0\\), y encuentra ahí el campo en el ecuador como múltiplo de \\(B\\).",
"Find the field where the straight part ends and the field where the moment reaches zero. Show that their ratio is {#}/{#}, and read the equator field between the two. Explain these with the field lines.":
  "Encuentra el campo donde termina la parte recta y el campo donde el momento llega a cero. Muestra que su cociente es {#}/{#}, y lee el campo en el ecuador entre los dos. Explica esto con las líneas de campo.",
"Fill in the \\(T^2\\) column for your critical field readings for lead and graph \\(B_c\\) against \\(T^2\\). From the fit, find \\(B_c(0)\\) and \\(T_c\\), and compare them with Table {#}.":
  "Llena la columna \\(T^2\\) para tus lecturas del campo crítico del plomo y grafica \\(B_c\\) en función de \\(T^2\\). A partir del ajuste, encuentra \\(B_c(0)\\) y \\(T_c\\), y compáralos con la Tabla {#}.",
"Do the same for the mystery metal. Which metal in Table {#} is it?":
  "Haz lo mismo para el metal misterioso. ¿Qué metal de la Tabla {#} es?",
"The field is set to {#} mT and the temperature to {#} K, and the instruments have no noise, so your critical fields are good to about half a field step. Estimate what that does to \\(B_c(0)\\) and \\(T_c\\) from your fit. Table {#} gives each metal to two or three figures, and real metals follow Equation {#} only to within a few percent; impurities, strain and the sample’s shape all shift a measured transition.":
  "El campo se fija a {#} mT y la temperatura a {#} K, y los instrumentos no tienen ruido, así que tus campos críticos son buenos a alrededor de medio paso del campo. Estima qué le hace eso a \\(B_c(0)\\) y \\(T_c\\) de tu ajuste. La Tabla {#} da cada metal a dos o tres cifras, y los metales reales siguen la Ecuación {#} solo dentro de unos cuantos por ciento; las impurezas, la deformación y la forma de la muestra desplazan una transición medida.",
"Explain in your own words why zero resistance means the flux through a closed loop in the metal cannot change.":
  "Explica con tus propias palabras por qué la resistencia cero significa que el flujo a través de una espira cerrada en el metal no puede cambiar.",
"A small magnet floats above a superconducting disk. Use the Meissner effect to explain the force that holds it up.":
  "Un imán pequeño flota sobre un disco superconductor. Usa el efecto Meissner para explicar la fuerza que lo sostiene.",
"A long lead wire of radius {#} mm is held at {#} K. The field at its surface is \\(\\mu_0 I/(2\\pi r)\\). What is the largest current it can carry and stay superconducting?":
  "Un alambre largo de plomo de radio {#} mm se mantiene a {#} K. El campo en su superficie es \\(\\mu_0 I/(2\\pi r)\\). ¿Cuál es la mayor corriente que puede llevar sin dejar de ser superconductor?",
"Why can’t magnets for MRI scanners, which make fields of {#} to {#} T, be wound from any type I metal in Table {#}? What kind of superconductor do they use?":
  "¿Por qué los imanes de los escáneres de resonancia magnética, que producen campos de {#} a {#} T, no se pueden embobinar con ningún metal de tipo I de la Tabla {#}? ¿Qué tipo de superconductor usan?",
"Why did the field at the sphere’s equator stop rising once the field began to get in?":
  "¿Por qué el campo en el ecuador de la esfera dejó de subir una vez que el campo empezó a entrar?",
"Prelab answers, the table copies with their graphs and fits, your comparison of the superconductor and the perfect conductor, \\(B_c(0)\\) and \\(T_c\\) for lead and the mystery metal with comparisons to Table {#}, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de la tabla con sus gráficas y ajustes, tu comparación del superconductor y el conductor perfecto, \\(B_c(0)\\) y \\(T_c\\) para el plomo y el metal misterioso con comparaciones con la Tabla {#}, y las respuestas a las preguntas. Identifica los datos simulados.",
"Applied field":
  "Campo aplicado",
"Critical field":
  "Campo crítico",
"Current in the wire":
  "Corriente en el alambre",
"Radius of the sphere":
  "Radio de la esfera",
"Critical temperature":
  "Temperatura crítica",
"Magnetic moment of the sphere":
  "Momento magnético de la esfera",
"Radius of the wire":
  "Radio del alambre",
"Superconductors and the Meissner Effect":
  "Superconductores y el efecto Meissner"
});
