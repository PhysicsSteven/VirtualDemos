/* ws/critical-mass in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/critical-mass', {
"Radius R (cm)":
  "Radio R (cm)",
"Mass M (kg)":
  "Masa M (kg)",
"Generations":
  "Generaciones",
"Uncertainty in k":
  "Incertidumbre en k",
"Leaked (%)":
  "Fugados (%)",
"Generation":
  "Generación",
"Neutrons, k = {#}":
  "Neutrones, k = {#}",
"ln N, k = {#}":
  "ln N, k = {#}",
"Chain Reactions and the Critical Size | VirtualDemos":
  "Reacciones en cadena y el tamaño crítico | VirtualDemos",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"Chain Reactions and the Critical Size":
  "Reacciones en cadena y el tamaño crítico",
"<strong>Setups in the demo:</strong> Bare ²³⁵U sphere; Generations (these two use the Chain reaction view, the subject of this worksheet); Rutherford {#}; Fission of ²³⁵U (the Nuclear Reactions worksheet); The Sun’s core; D–T reactor (the Fusion worksheet); ¹³⁷Cs source; ⁹⁹ᵐTc patient (the Radiation Dose worksheet).":
  "<strong>Configuraciones en la demo:</strong> Esfera desnuda de ²³⁵U; Generaciones (estas dos usan la vista Reacción en cadena, el tema de esta hoja de trabajo); Rutherford {#}; Fisión del ²³⁵U (la hoja de trabajo de reacciones nucleares); El núcleo del Sol; Reactor D–T (la hoja de trabajo de fusión); Fuente de ¹³⁷Cs; Paciente con ⁹⁹ᵐTc (la hoja de trabajo de dosis de radiación).",
"The Chain reaction view has two models. <strong>Generations with factor k:</strong> each neutron causes a fission with probability \\(k/\\bar\\nu\\), and each fission releases a random number \\(\\nu\\) of neutrons, \\(\\bar\\nu = 2.44\\) on average for slow neutrons in ²³⁵U. The picture is the family tree of the first neutrons of each generation; the graphs show the neutrons in each generation and the share of fissions giving each \\(\\nu\\).":
  "La vista Reacción en cadena tiene dos modelos. <strong>Generaciones con factor k:</strong> cada neutrón causa una fisión con probabilidad \\(k/\\bar\\nu\\), y cada fisión libera un número aleatorio \\(\\nu\\) de neutrones, \\(\\bar\\nu = 2.44\\) en promedio para neutrones lentos en ²³⁵U. La imagen es el árbol genealógico de los primeros neutrones de cada generación; las gráficas muestran los neutrones de cada generación y la fracción de fisiones que dan cada \\(\\nu\\).",
"<strong>Sphere of metal:</strong> a bare sphere of pure ²³⁵U or ²³⁹Pu of radius \\(R\\). The demo follows thousands of fast neutrons one at a time: each travels a random distance, then either causes a fission (its new neutrons start the next generation) or bounces off in a random direction, until it causes a fission or escapes through the surface. This is a simulation of a simplified teaching model; the About text gives its numbers. The picture shows chains as they happen, with the same rules: a source fires a neutron in every {#} s, and each fission splits a nucleus and sends out new neutrons that go on to strike other nuclei. It is one sample of a chain, not the measurement. The 3D switch shows it inside a see through sphere that you can turn; the flat view shows it from the side.":
  "<strong>Esfera de metal:</strong> una esfera desnuda de ²³⁵U o ²³⁹Pu puros de radio \\(R\\). La demo sigue a miles de neutrones rápidos, uno a la vez: cada uno recorre una distancia aleatoria y luego causa una fisión (sus neutrones nuevos inician la siguiente generación) o rebota en una dirección aleatoria, hasta que causa una fisión o escapa por la superficie. Esta es una simulación de un modelo didáctico simplificado; el texto Acerca de da sus números. La imagen muestra cadenas mientras ocurren, con las mismas reglas: una fuente dispara un neutrón cada {#} s, y cada fisión divide un núcleo y emite neutrones nuevos que van a chocar con otros núcleos. Es una muestra de una cadena, no la medición. El interruptor 3D la muestra dentro de una esfera transparente que puedes girar; la vista plana la muestra de lado.",
"\\(k\\) for a generation is the number of new neutrons divided by the number followed. Play runs it, One generation steps it, Reset begins a new run. The meters show \\(k\\) for this generation, its mean over the generations after the fifth, and the share of neutrons that leaked out.":
  "\\(k\\) para una generación es el número de neutrones nuevos dividido entre el número seguido. Iniciar la corre, Una generación avanza un paso, Reiniciar inicia una corrida nueva. Los medidores muestran \\(k\\) para esta generación, su media sobre las generaciones posteriores a la quinta y la fracción de neutrones que se fugaron.",
"Record reading (Sphere model) stores the material, \\(R\\), the mass, the generations run, the mean \\(k\\) with its uncertainty, and the share leaked. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table. In the Generations model, read the numbers from the meters and the graph.":
  "Registrar lectura (modelo Esfera) guarda el material, \\(R\\), la masa, las generaciones corridas, la \\(k\\) media con su incertidumbre y la fracción fugada. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla. En el modelo Generaciones, lee los números en los medidores y en la gráfica.",
"Blind hides the model’s constants, the theory curves and the result of a full calculation.":
  "A ciegas oculta las constantes del modelo, las curvas teóricas y el resultado de un cálculo completo.",
"Watch a chain reaction grow or die out, and find the radius and mass at which a bare sphere of fissile metal becomes critical.":
  "Observa cómo una reacción en cadena crece o se extingue, y encuentra el radio y la masa a los que una esfera desnuda de metal fisible se vuelve crítica.",
"Each fission of ²³⁵U releases about {#} MeV and two or three neutrons (§{#}). If on average each neutron leads to \\(k\\) new neutrons, a generation of \\(N\\) neutrons is followed by about \\(kN\\), so after \\(g\\) generations":
  "Cada fisión de ²³⁵U libera unos {#} MeV y dos o tres neutrones (§{#}). Si en promedio cada neutrón produce \\(k\\) neutrones nuevos, a una generación de \\(N\\) neutrones le sigue una de unos \\(kN\\), así que después de \\(g\\) generaciones",
"\\[N_g = N_0 k^g, \\qquad \\ln N_g = \\ln N_0 + g\\ln k.\\]":
  "\\[N_g = N_0 k^g, \\qquad \\ln N_g = \\ln N_0 + g\\ln k.\\]",
"The reaction dies out if \\(k < 1\\) (subcritical), holds steady at \\(k = 1\\) (critical) and grows if \\(k > 1\\) (supercritical). In a lump of metal a neutron can be lost by escaping through the surface. Fissions happen throughout the volume, which grows as \\(R^3\\), while escape happens through the surface, which grows as \\(R^2\\); so a bigger sphere loses a smaller share, and above a critical radius \\(k > 1\\). The mass of that sphere is the critical mass (§{#}).":
  "La reacción se extingue si \\(k < 1\\) (subcrítica), se mantiene estable con \\(k = 1\\) (crítica) y crece si \\(k > 1\\) (supercrítica). En un trozo de metal un neutrón se puede perder al escapar por la superficie. Las fisiones ocurren en todo el volumen, que crece como \\(R^3\\), mientras que el escape ocurre por la superficie, que crece como \\(R^2\\); así que una esfera más grande pierde una fracción menor, y por encima de un radio crítico \\(k > 1\\). La masa de esa esfera es la masa crítica (§{#}).",
"With \\(k = 1.05\\), how many neutrons are there after {#} generations, starting from {#}? After {#}? With \\(k = 0.95\\)?":
  "Con \\(k = 1.05\\), ¿cuántos neutrones hay después de {#} generaciones, empezando con {#}? ¿Después de {#}? ¿Con \\(k = 0.95\\)?",
"In the demo’s sphere model no neutron is captured, so every neutron that does not escape causes a fission. If a share \\(L\\) of the neutrons escape, show that \\(k = \\bar\\nu(1 - L)\\). What share must escape at the critical size if \\(\\bar\\nu = 2.57\\) (the sphere model’s value for the fast, {#} MeV neutrons in ²³⁵U)?":
  "En el modelo de esfera de la demo ningún neutrón es capturado, así que cada neutrón que no escapa causa una fisión. Si escapa una fracción \\(L\\) de los neutrones, muestra que \\(k = \\bar\\nu(1 - L)\\). ¿Qué fracción debe escapar en el tamaño crítico si \\(\\bar\\nu = 2.57\\) (el valor del modelo de esfera para los neutrones rápidos de {#} MeV en ²³⁵U)?",
"A ²³⁵U sphere has density {#} g/cm³. What is its mass for \\(R\\) = {#} cm?":
  "Una esfera de ²³⁵U tiene una densidad de {#} g/cm³. ¿Cuál es su masa para \\(R\\) = {#} cm?",
"Why does the surface to volume ratio of a sphere, \\(3/R\\), matter here?":
  "¿Por qué importa aquí la razón superficie a volumen de una esfera, \\(3/R\\)?",
"<strong>Generations.</strong> In the Generations model, start {#} neutrons with \\(k\\) = {#}, {#} and {#} in turn. Run each for {#} generations and write the number of neutrons at generations {#}, {#}, {#}, {#} and {#} in the second table. Then start {#} neutrons with \\(k\\) = {#} several times and note what happens.":
  "<strong>Generaciones.</strong> En el modelo Generaciones, inicia {#} neutrones con \\(k\\) = {#}, {#} y {#} por turnos. Corre cada uno {#} generaciones y escribe el número de neutrones en las generaciones {#}, {#}, {#}, {#} y {#} en la segunda tabla. Luego inicia {#} neutrones con \\(k\\) = {#} varias veces y anota qué pasa.",
"<strong>Critical size of ²³⁵U.</strong> In the Sphere model with ²³⁵U, {#} neutrons per generation, run at least {#} generations at each radius from {#} cm to {#} cm in {#} cm steps, and record a reading at each. Then add readings {#} cm apart on each side of where \\(k\\) crosses {#}.":
  "<strong>Tamaño crítico del ²³⁵U.</strong> En el modelo Esfera con ²³⁵U, {#} neutrones por generación, corre al menos {#} generaciones en cada radio de {#} cm a {#} cm en pasos de {#} cm, y registra una lectura en cada uno. Luego agrega lecturas separadas {#} cm a cada lado de donde \\(k\\) cruza {#}.",
"<strong>Critical size of ²³⁹Pu.</strong> Export and Clear the readings, switch to ²³⁹Pu and repeat for radii from {#} cm to {#} cm in {#} cm steps, adding readings near where \\(k\\) crosses {#}.":
  "<strong>Tamaño crítico del ²³⁹Pu.</strong> Exporta y borra las lecturas, cambia a ²³⁹Pu y repite para radios de {#} cm a {#} cm en pasos de {#} cm, agregando lecturas cerca de donde \\(k\\) cruza {#}.",
"<span>B</span>Material":
  "<span>B</span>Material",
"<span>C</span>Radius R (cm)":
  "<span>C</span>Radio R (cm)",
"<span>D</span>Mass M (kg)":
  "<span>D</span>Masa M (kg)",
"<span>E</span>Generations":
  "<span>E</span>Generaciones",
"<span>G</span>Uncertainty in k":
  "<span>G</span>Incertidumbre en k",
"<span>H</span>Leaked (%)":
  "<span>H</span>Fugados (%)",
"Radius R (cm), row {#}":
  "Radio R (cm), fila {#}",
"Mass M (kg), row {#}":
  "Masa M (kg), fila {#}",
"Generations, row {#}":
  "Generaciones, fila {#}",
"k, row {#}":
  "k, fila {#}",
"Uncertainty in k, row {#}":
  "Incertidumbre en k, fila {#}",
"Leaked (%), row {#}":
  "Fugados (%), fila {#}",
"<span>A</span>Generation":
  "<span>A</span>Generación",
"<span>B</span>Neutrons, k = {#}":
  "<span>B</span>Neutrones, k = {#}",
"<span>C</span>Neutrons, k = {#}":
  "<span>C</span>Neutrones, k = {#}",
"<span>D</span>Neutrons, k = {#}":
  "<span>D</span>Neutrones, k = {#}",
"<span>E</span>ln N, k = {#}":
  "<span>E</span>ln N, k = {#}",
"<span>F</span>ln N, k = {#}":
  "<span>F</span>ln N, k = {#}",
"<span>G</span>ln N, k = {#}":
  "<span>G</span>ln N, k = {#}",
"Neutrons, k = {#}, row {#}":
  "Neutrones, k = {#}, fila {#}",
"ln N, k = {#}, row {#}":
  "ln N, k = {#}, fila {#}",
"Fill in the natural log of each neutron count in the last three columns.":
  "Llena el logaritmo natural de cada conteo de neutrones en las últimas tres columnas.",
"Plot \\(\\ln N\\) against generation for the three values of \\(k\\). Find each slope and compare it with \\(\\ln k\\).":
  "Grafica \\(\\ln N\\) en función de la generación para los tres valores de \\(k\\). Encuentra cada pendiente y compárala con \\(\\ln k\\).",
"Plot \\(k\\) against \\(R\\) for ²³⁵U. Find the critical radius \\(R_c\\) where \\(k = 1\\) by interpolating between the two readings on either side, and the critical mass \\(M_c\\).":
  "Grafica \\(k\\) en función de \\(R\\) para el ²³⁵U. Encuentra el radio crítico \\(R_c\\) donde \\(k = 1\\) interpolando entre las dos lecturas a cada lado, y la masa crítica \\(M_c\\).",
"Do the same for ²³⁹Pu. Which needs less metal, and why?":
  "Haz lo mismo para el ²³⁹Pu. ¿Cuál necesita menos metal, y por qué?",
"At the critical radius, compare the share of neutrons that leaked with \\(1 - 1/\\bar\\nu\\) from Before the lab question {#}. For ²³⁹Pu the sphere model’s \\(\\bar\\nu\\) is {#}.":
  "En el radio crítico, compara la fracción de neutrones que se fugaron con \\(1 - 1/\\bar\\nu\\) de la pregunta {#} de Antes del laboratorio. Para el ²³⁹Pu, la \\(\\bar\\nu\\) del modelo de la esfera es {#}.",
"A full calculation (MCNP6, quoted by M. B. Chadwick, {#}) gives bare critical masses of {#} kg for ²³⁵U and {#} kg for ²³⁹Pu. Like the demo, it takes ²³⁹Pu at {#} g/cm³; handbook α plutonium is {#} g/cm³, which would lower every plutonium critical mass here by about {#}%, since the critical mass scales as {#}/ρ². Compare your values and suggest which simplifications of the model matter.":
  "Un cálculo completo (MCNP6, citado por M. B. Chadwick, {#}) da masas críticas desnudas de {#} kg para el ²³⁵U y {#} kg para el ²³⁹Pu. Como la demo, toma el ²³⁹Pu a {#} g/cm³; el plutonio α de los manuales tiene {#} g/cm³, lo que bajaría aquí cada masa crítica de plutonio en aproximadamente {#}%, ya que la masa crítica escala como {#}/ρ². Compara tus valores y sugiere qué simplificaciones del modelo importan.",
"Use the uncertainty in \\(k\\) near the crossing and the slope \\(dk/dR\\) of your graph to estimate the uncertainty in \\(R_c\\), and from it the uncertainty in \\(M_c\\) (note that \\(M \\propto R^3\\)).":
  "Usa la incertidumbre en \\(k\\) cerca del cruce y la pendiente \\(dk/dR\\) de tu gráfica para estimar la incertidumbre en \\(R_c\\), y a partir de ella la incertidumbre en \\(M_c\\) (observa que \\(M \\propto R^3\\)).",
"With {#} neutrons and \\(k = 1.00\\) the chain often dies out. Why, and why does that not happen with \\(10^{20}\\) neutrons?":
  "Con {#} neutrones y \\(k = 1.00\\) la cadena a menudo se extingue. ¿Por qué, y por qué eso no pasa con \\(10^{20}\\) neutrones?",
"Fast neutrons cross the sphere in a few nanoseconds. About how long do {#} generations take, and how many fissions would \\(k = 1.05\\) give in that time from one neutron? How much energy is that, at {#} MeV per fission?":
  "Los neutrones rápidos cruzan la esfera en unos cuantos nanosegundos. ¿Aproximadamente cuánto tardan {#} generaciones, y cuántas fisiones daría \\(k = 1.05\\) en ese tiempo a partir de un neutrón? ¿Cuánta energía es eso, a {#} MeV por fisión?",
"Surrounding the sphere with a material that reflects neutrons lowers the critical mass. Why?":
  "Rodear la esfera con un material que refleja neutrones baja la masa crítica. ¿Por qué?",
"Two pieces, each below the critical mass, are brought together quickly. Explain from your graph why the combined piece can be supercritical.":
  "Dos piezas, cada una por debajo de la masa crítica, se juntan rápidamente. Explica con tu gráfica por qué la pieza combinada puede ser supercrítica.",
"Prelab answers, both tables, the graphs of \\(\\ln N\\) against generation and of \\(k\\) against \\(R\\), your critical radii and masses with uncertainties, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, ambas tablas, las gráficas de \\(\\ln N\\) en función de la generación y de \\(k\\) en función de \\(R\\), tus radios y masas críticos con incertidumbres, y las respuestas a las preguntas. Identifica los datos simulados.",
"Share of the neutrons that escape":
  "Fracción de los neutrones que escapan",
"Mass of the sphere":
  "Masa de la esfera",
"Critical mass":
  "Masa crítica",
"Neutrons in a generation":
  "Neutrones en una generación",
"Neutrons in the first generation":
  "Neutrones en la primera generación",
"Neutrons in generation g":
  "Neutrones en la generación g",
"Radius of the sphere":
  "Radio de la esfera",
"Critical radius, where k = {#}":
  "Radio crítico, donde k = {#}",
"Average number of neutrons released per fission":
  "Número promedio de neutrones liberados por fisión",
"{#} for slow neutrons in ²³⁵U":
  "{#} para neutrones lentos en ²³⁵U",
"Generation number":
  "Número de generación",
"Multiplication factor: new neutrons per neutron":
  "Factor de multiplicación: neutrones nuevos por neutrón",
"Number of neutrons one fission releases":
  "Número de neutrones que libera una fisión",
"Nuclear Reactions, Fission and Fusion (Chain reaction)":
  "Reacciones nucleares, fisión y fusión (Reacción en cadena)",
"\\(k\\) for a generation is the number of new neutrons divided by the number followed. Start runs it, One generation steps it, Start over begins a new run. The meters show \\(k\\) for this generation, its mean over the generations after the fifth, and the share of neutrons that leaked out.":
  "\\(k\\) para una generación es el número de neutrones nuevos dividido entre el número seguido. Comenzar la corre, Una generación avanza un paso, Empezar de nuevo inicia una corrida nueva. Los medidores muestran \\(k\\) para esta generación, su media sobre las generaciones posteriores a la quinta y la fracción de neutrones que se fugaron.",
"At the critical radius, compare the share of neutrons that leaked with \\(1 - 1/\\bar\\nu\\) from Before the lab question {#}.":
  "En el radio crítico, compara la fracción de neutrones que se fugaron con \\(1 - 1/\\bar\\nu\\) de la pregunta {#} de Antes del laboratorio."
});
