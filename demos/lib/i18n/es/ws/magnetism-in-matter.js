/* ws/magnetism-in-matter in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/magnetism-in-matter', {
"Core":
  "Núcleo",
"Turns per cm":
  "Vueltas por cm",
"Notes":
  "Notas",
"Magnetism in Matter | VirtualDemos":
  "Magnetismo en la materia | VirtualDemos",
"Magnetism in Matter":
  "Magnetismo en la materia",
"<strong>Setups in the demo:</strong> Aluminum core; Bismuth core; Liquid oxygen; Floating water; Iron, Example {#}; Iron hysteresis loop.":
  "<strong>Configuraciones en la demo:</strong> Núcleo de aluminio; Núcleo de bismuto; Oxígeno líquido; Agua que levita; Hierro, ejemplo {#}; Ciclo de histéresis del hierro.",
"<strong>Using the demo.</strong> A long solenoid with a core of one material. The Core material list has the materials of OpenStax Table {#} and a model iron. The Coil section sets the current (−{#} to +{#} A, in steps of {#} mA) and the turns per centimeter, and has Sweep the current (between +{#} and −{#} A, over and over), Demagnetize (iron only) and Clear the trace. The plot shows \\(B\\) against \\(B_0\\). Readouts give \\(B_0\\), \\(B\\) and \\(B - B_0\\), the susceptibility of a linear material, and for iron the magnetization, the field left when the current last crossed zero, and the reverse current that last brought \\(B\\) to zero. Blind hides \\(B\\), \\(B - B_0\\) and the plot.":
  "<strong>Uso de la demo.</strong> Un solenoide largo con un núcleo de un material. La lista Material del núcleo tiene los materiales de la Tabla {#} de OpenStax y un hierro modelo. La sección Bobina fija la corriente (−{#} a +{#} A, en pasos de {#} mA) y las vueltas por centímetro, y tiene Barrer la corriente (entre +{#} y −{#} A, una y otra vez), Desmagnetizar (solo hierro) y Borrar la traza. La gráfica muestra \\(B\\) en función de \\(B_0\\). Las lecturas dan \\(B_0\\), \\(B\\) y \\(B - B_0\\), la susceptibilidad de un material lineal y, para el hierro, la magnetización, el campo que quedaba la última vez que la corriente pasó por cero y la corriente inversa que llevó \\(B\\) a cero la última vez. A ciegas oculta \\(B\\), \\(B - B_0\\) y la gráfica.",
"<strong>What the demo models.</strong> The solenoid is long, so \\(B_0 = \\mu_0 nI\\) inside it, and a linear core gives \\(B = (1 + \\chi)B_0\\) with \\(\\chi\\) from OpenStax Table {#}. Iron is not linear: it follows the Jiles and Atherton model of hysteresis with the saturation magnetization of iron, \\(1.707\\times10^6\\) A/m, and four values chosen so its first magnetization curve passes near OpenStax Figure {#} ({#} T at the {#} A of Example {#}, where the book reads {#} T). It is a model of a soft iron, not measured data. Simulated data.":
  "<strong>Qué modela la demo.</strong> El solenoide es largo, así que \\(B_0 = \\mu_0 nI\\) dentro de él, y un núcleo lineal da \\(B = (1 + \\chi)B_0\\) con \\(\\chi\\) de la Tabla {#} de OpenStax. El hierro no es lineal: sigue el modelo de histéresis de Jiles y Atherton con la magnetización de saturación del hierro, \\(1.707\\times10^6\\) A/m, y cuatro valores elegidos para que su primera curva de magnetización pase cerca de la Figura {#} de OpenStax ({#} T a los {#} A del Ejemplo {#}, donde el libro lee {#} T). Es un modelo de un hierro blando, no datos medidos. Datos simulados.",
"Measure the magnetic susceptibility of paramagnetic and diamagnetic materials, and follow the magnetization curve and hysteresis loop of iron.":
  "Mide la susceptibilidad magnética de materiales paramagnéticos y diamagnéticos, y sigue la curva de magnetización y el ciclo de histéresis del hierro.",
"A long solenoid with \\(n\\) turns per meter and current \\(I\\) has the field \\(B_0 = \\mu_0 nI\\) inside it. Filling it with a material changes the field to":
  "Un solenoide largo con \\(n\\) vueltas por metro y corriente \\(I\\) tiene el campo \\(B_0 = \\mu_0 nI\\) dentro de él. Llenarlo con un material cambia el campo a",
"\\[B = (1 + \\chi)B_0 = \\mu B_0/\\mu_0,\\]":
  "\\[B = (1 + \\chi)B_0 = \\mu B_0/\\mu_0,\\]",
"where \\(\\chi\\) is the material’s magnetic susceptibility. In a paramagnet, atomic magnetic moments line up a little with the field and \\(\\chi\\) is small and positive (about \\(10^{-5}\\) to \\(10^{-3}\\)). In a diamagnet, the field induces moments that oppose it and \\(\\chi\\) is small and negative (about \\(-10^{-5}\\)). The change \\(B - B_0 = \\chi B_0\\) is tiny for both. A ferromagnet such as iron has domains that line up with the field, and \\(B\\) can be thousands of times \\(B_0\\); but it is not proportional to \\(B_0\\), it saturates, and it depends on the history. When the current is brought back to zero, iron keeps a field (the remanence), and a reverse current is needed to bring \\(B\\) to zero (the coercive field).":
  "donde \\(\\chi\\) es la susceptibilidad magnética del material. En un paramagnético, los momentos magnéticos atómicos se alinean un poco con el campo y \\(\\chi\\) es pequeña y positiva (alrededor de \\(10^{-5}\\) a \\(10^{-3}\\)). En un diamagnético, el campo induce momentos que se le oponen y \\(\\chi\\) es pequeña y negativa (alrededor de \\(-10^{-5}\\)). El cambio \\(B - B_0 = \\chi B_0\\) es diminuto en ambos. Un ferromagnético como el hierro tiene dominios que se alinean con el campo, y \\(B\\) puede ser miles de veces \\(B_0\\); pero no es proporcional a \\(B_0\\), se satura y depende de la historia. Cuando la corriente se regresa a cero, el hierro conserva un campo (la remanencia), y se necesita una corriente inversa para llevar \\(B\\) a cero (el campo coercitivo).",
"Find \\(B_0\\) for {#} turns per centimeter and {#} A.":
  "Encuentra \\(B_0\\) para {#} vueltas por centímetro y {#} A.",
"Aluminum has \\(\\chi = 2.2\\times10^{-5}\\) and bismuth \\(\\chi = -1.7\\times10^{-5}\\). Find \\(B - B_0\\) for each in that solenoid.":
  "El aluminio tiene \\(\\chi = 2.2\\times10^{-5}\\) y el bismuto \\(\\chi = -1.7\\times10^{-5}\\). Encuentra \\(B - B_0\\) para cada uno en ese solenoide.",
"OpenStax Example {#}: with {#} turns per centimeter and {#} A, an iron core gives about {#} T. Find \\(B_0\\) and the effective \\(B/B_0 - 1\\).":
  "OpenStax Ejemplo {#}: con {#} vueltas por centímetro y {#} A, un núcleo de hierro da unos {#} T. Encuentra \\(B_0\\) y el valor efectivo de \\(B/B_0 - 1\\).",
"Why can a single number \\(\\chi\\) not describe iron?":
  "¿Por qué un solo número \\(\\chi\\) no puede describir el hierro?",
"Real solenoids carrying a few amperes get warm; let them cool before handling. Liquid oxygen supports violent burning and causes frostbite: it is handled only by trained staff.":
  "Los solenoides reales que llevan unos cuantos amperes se calientan; déjalos enfriar antes de manipularlos. El oxígeno líquido favorece combustiones violentas y causa quemaduras por congelación: solo lo maneja personal capacitado.",
"<strong>Part {#}: linear materials.</strong> With {#} turns per centimeter and {#} A, measure \\(B\\) and \\(B - B_0\\) with the coil empty and with each of aluminum, tungsten, liquid oxygen, copper, water and bismuth as the core.":
  "<strong>Parte {#}: materiales lineales.</strong> Con {#} vueltas por centímetro y {#} A, mide \\(B\\) y \\(B - B_0\\) con la bobina vacía y con cada uno de estos como núcleo: aluminio, tungsteno, oxígeno líquido, cobre, agua y bismuto.",
"<strong>Part {#}: field against current.</strong> With a bismuth core, measure \\(B - B_0\\) at currents from −{#} to +{#} A in steps of {#} A.":
  "<strong>Parte {#}: campo en función de la corriente.</strong> Con un núcleo de bismuto, mide \\(B - B_0\\) con corrientes de −{#} a +{#} A en pasos de {#} A.",
"<strong>Part {#}: iron’s first magnetization curve.</strong> Start from unmagnetized iron: choose the iron core, press Demagnetize, and wait until the current has settled at zero (the iron preset alone leaves the iron magnetized at {#} A). Raise the current in steps, never going back down, and measure \\(B\\) at {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} A.":
  "<strong>Parte {#}: la primera curva de magnetización del hierro.</strong> Empieza con hierro sin magnetizar: elige el núcleo de hierro, pulsa Desmagnetizar y espera hasta que la corriente se haya estabilizado en cero (la configuración de hierro por sí sola deja el hierro magnetizado a {#} A). Sube la corriente en pasos, sin bajarla nunca, y mide \\(B\\) a {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} A.",
"<strong>Part {#}: the hysteresis loop.</strong> From {#} A, bring the current down to {#} and measure \\(B\\), then make it negative in small steps until \\(B\\) is zero and record that current. Go on to −{#} A, then back up to {#} and record \\(B\\) again.":
  "<strong>Parte {#}: el ciclo de histéresis.</strong> Desde {#} A, baja la corriente a {#} y mide \\(B\\); luego hazla negativa en pasos pequeños hasta que \\(B\\) sea cero y registra esa corriente. Sigue hasta −{#} A, luego sube de nuevo hasta {#} y registra \\(B\\) otra vez.",
"<strong>Using the virtual apparatus.</strong> Iron remembers its history: only raise the current in Part {#}, and only lower it in the first half of Part {#}. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> El hierro recuerda su historia: en la Parte {#} solo sube la corriente, y en la primera mitad de la Parte {#} solo bájala. Envía cada parte a la hoja de trabajo antes de borrar, para que cada parte tenga su propia copia de la tabla de datos.",
"<span>B</span>Core":
  "<span>B</span>Núcleo",
"<span>C</span>Turns per cm":
  "<span>C</span>Vueltas por cm",
"<span>D</span>Current \\(I\\) (A)":
  "<span>D</span>Corriente \\(I\\) (A)",
"<span>H</span>Notes":
  "<span>H</span>Notas",
"Core, row {#}":
  "Núcleo, fila {#}",
"Turns per cm, row {#}":
  "Vueltas por cm, fila {#}",
"B_0 (T), row {#}":
  "B_0 (T), fila {#}",
"B (T), row {#}":
  "B (T), fila {#}",
"B - B_0 (T), row {#}":
  "B - B_0 (T), fila {#}",
"Notes, row {#}":
  "Notas, fila {#}",
"For Part {#}, find \\(\\chi = (B - B_0)/B_0\\) for each material and compare it with OpenStax Table {#}. Sort them into paramagnets and diamagnets. Why does liquid oxygen have a much larger \\(\\chi\\) than aluminum?":
  "Para la Parte {#}, encuentra \\(\\chi = (B - B_0)/B_0\\) para cada material y compárala con la Tabla {#} de OpenStax. Clasifícalos en paramagnéticos y diamagnéticos. ¿Por qué el oxígeno líquido tiene una \\(\\chi\\) mucho mayor que el aluminio?",
"For Part {#}, graph \\(B - B_0\\) against \\(I\\). From the slope, find \\(\\chi\\) for bismuth, using \\(\\mu_0 n\\).":
  "Para la Parte {#}, grafica \\(B - B_0\\) en función de \\(I\\). A partir de la pendiente, encuentra \\(\\chi\\) para el bismuto, usando \\(\\mu_0 n\\).",
"For Part {#}, graph \\(B\\) against \\(B_0\\). Find \\(B/B_0 - 1\\) at {#} A and compare it with Example {#}. How does \\(B/B_0\\) change as the current rises, and why does the curve level off?":
  "Para la Parte {#}, grafica \\(B\\) en función de \\(B_0\\). Encuentra \\(B/B_0 - 1\\) a {#} A y compáralo con el Ejemplo {#}. ¿Cómo cambia \\(B/B_0\\) a medida que sube la corriente, y por qué la curva se aplana?",
"For Part {#}, give the remanence and the current that brings \\(B\\) to zero, and the coercive field \\(H_c = nI\\) in A/m. Is the model’s iron a soft or a hard magnetic material?":
  "Para la Parte {#}, da la remanencia y la corriente que lleva \\(B\\) a cero, y el campo coercitivo \\(H_c = nI\\) en A/m. ¿El hierro del modelo es un material magnético blando o duro?",
"The model has no noise. For paramagnets and diamagnets \\(B - B_0\\) is about a hundred thousandth of \\(B\\), so \\(B\\) must be known to many figures to see it; a reading records \\(B\\) to nine figures for that reason. A real measurement of \\(\\chi\\) uses the force on a sample in a varying field (a Gouy balance) instead. The iron is a model fitted to two points of a textbook figure; real irons vary greatly with purity and heat treatment.":
  "El modelo no tiene ruido. Para los paramagnéticos y diamagnéticos \\(B - B_0\\) es alrededor de una cienmilésima de \\(B\\), así que \\(B\\) debe conocerse con muchas cifras para verlo; por esa razón una lectura registra \\(B\\) con nueve cifras. Una medición real de \\(\\chi\\) usa en cambio la fuerza sobre una muestra en un campo variable (una balanza de Gouy). El hierro es un modelo ajustado a dos puntos de una figura de un libro de texto; los hierros reales varían mucho según su pureza y su tratamiento térmico.",
"Why is every material diamagnetic, even those that end up paramagnetic overall?":
  "¿Por qué todo material es diamagnético, incluso los que en conjunto resultan paramagnéticos?",
"Why do transformer cores use soft iron, while permanent magnets use hard magnetic materials?":
  "¿Por qué los núcleos de los transformadores usan hierro blando, mientras que los imanes permanentes usan materiales magnéticos duros?",
"A frog can be floated in a very strong magnetic field. Why does this need a field that changes strongly with height, and not just a strong field?":
  "Se puede hacer levitar una rana en un campo magnético muy intenso. ¿Por qué esto necesita un campo que cambie mucho con la altura, y no solo un campo intenso?",
"Prelab answers, a Data table copy for each part, the graphs, your values of \\(\\chi\\), the remanence and coercive field, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, una copia de la tabla de datos para cada parte, las gráficas, tus valores de \\(\\chi\\), la remanencia y el campo coercitivo, y respuestas a las preguntas. Identifica los datos simulados.",
"Field inside the core":
  "Campo dentro del núcleo",
"Field of the solenoid alone":
  "Campo del solenoide solo",
"Coercive field":
  "Campo coercitivo",
"Magnetic susceptibility":
  "Susceptibilidad magnética",
"Permeability of the core":
  "Permeabilidad del núcleo",
"Turns per meter":
  "Vueltas por metro"
});
