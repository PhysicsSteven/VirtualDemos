/* ws/radioactive-decay in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/radioactive-decay', {
"Setup and N_0":
  "Configuración y N_0",
"Parents left N":
  "Núcleos madre restantes N",
"ln(N/N₀)":
  "ln(N/N₀)",
"Measuring a Half Life | VirtualDemos":
  "Medición de una vida media | VirtualDemos",
"Measuring a Half Life":
  "Medición de una vida media",
"<strong>Setups in the demo:</strong> Coin flip nuclei; Carbon {#} dating; Iodine {#} (these three have one unstable kind of nucleus, the subject of this worksheet); Two step chain; Short daughter, long parent (the Parent and Daughter worksheet).":
  "<strong>Configuraciones en la demo:</strong> Núcleos de volado; Datación con carbono {#}; Yodo {#} (estas tres tienen un solo tipo de núcleo inestable, el tema de esta hoja de trabajo); Cadena de dos pasos; Hija corta, madre larga (la hoja de trabajo Madre e hija).",
"The tray shows every nucleus of the sample: parents are large balls, daughters slightly smaller balls in a second color, stable end products small gray balls. Each decay flashes, and the Geiger counter under the tray counts every decay. Choose {#}, {#}, {#} or {#} {#} nuclei.":
  "La bandeja muestra cada núcleo de la muestra: los núcleos madre son bolas grandes, los núcleos hija bolas un poco más pequeñas de un segundo color, y los productos finales estables bolas grises pequeñas. Cada decaimiento destella, y el contador Geiger bajo la bandeja cuenta cada decaimiento. Elige {#}, {#}, {#} o {#} {#} núcleos.",
"Time advances in steps. In each step every parent decays with the exact probability for that step, \\(p = 1 - e^{-\\lambda\\Delta t}\\), decided by its own random number, so no two runs are the same. Play runs the steps; Step takes one at a time. The step length is shown by the clock: one step for the coin flip nuclei, {#} d for iodine {#}.":
  "El tiempo avanza en pasos. En cada paso cada núcleo madre decae con la probabilidad exacta para ese paso, \\(p = 1 - e^{-\\lambda\\Delta t}\\), decidida por su propio número aleatorio, así que no hay dos corridas iguales. Iniciar ejecuta los pasos; Paso avanza uno a la vez. La duración del paso la muestra el reloj: un paso para los núcleos de volado, {#} d para el yodo {#}.",
"The middle plot shows the number of each kind against time. Its dashed curve is the expected number \\(N_0e^{-\\lambda t}\\) and the band is the expected spread; the Display section can hide both, and the half life markers.":
  "La gráfica del medio muestra el número de cada tipo en función del tiempo. Su curva discontinua es el número esperado \\(N_0e^{-\\lambda t}\\) y la banda es la dispersión esperada; la sección Visualización puede ocultar ambas, y las marcas de vida media.",
"The half lives are the evaluated values (ENSDF), for example {#} d for iodine {#}. A slider, or dragging the T½ marker, changes a half life; the nuclides are then labeled parent and daughter.":
  "Las vidas medias son los valores evaluados (ENSDF), por ejemplo {#} d para el yodo {#}. Un control deslizante, o arrastrar la marca T½, cambia una vida media; entonces los núclidos se etiquetan como madre e hija.",
"Click a nucleus to follow it. The demo lists the ages at decay of the last eight followed nuclei, in half lives, and their mean age in the setup’s time unit.":
  "Haz clic en un núcleo para seguirlo. La demo enumera las edades al decaer de los últimos ocho núcleos seguidos, en vidas medias, y su edad media en la unidad de tiempo de la configuración.",
"Record reading stores the setup, the number of nuclei at the start, the time and the number of each kind. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table. Reset starts a new random sample with the same settings.":
  "Registrar lectura guarda la configuración, el número de núcleos al inicio, el tiempo y el número de cada tipo. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla. Reiniciar empieza una muestra aleatoria nueva con los mismos ajustes.",
"Watch a sample of unstable nuclei decay one at a time at random, show that the number left falls exponentially, and measure the half life from your own counts.":
  "Observa cómo una muestra de núcleos inestables decae uno a la vez al azar, muestra que el número restante disminuye exponencialmente, y mide la vida media a partir de tus propias cuentas.",
"No one can say when a particular nucleus will decay. Each one has the same chance per unit time, the decay constant \\(\\lambda\\), however long it has already lasted. For a large number \\(N\\) of nuclei the number decaying in a short time \\(dt\\) is \\(\\lambda N\\,dt\\), so \\(dN/dt = -\\lambda N\\) and":
  "Nadie puede decir cuándo decaerá un núcleo en particular. Cada uno tiene la misma probabilidad por unidad de tiempo, la constante de decaimiento \\(\\lambda\\), sin importar cuánto haya durado ya. Para un número grande \\(N\\) de núcleos, el número que decae en un tiempo corto \\(dt\\) es \\(\\lambda N\\,dt\\), así que \\(dN/dt = -\\lambda N\\) y",
"\\[N(t) = N_0\\,e^{-\\lambda t}.\\]":
  "\\[N(t) = N_0\\,e^{-\\lambda t}.\\]",
"The half life \\(T_{1/2}\\) is the time for half the nuclei to decay: \\(T_{1/2} = \\ln 2/\\lambda\\). The mean life is \\(\\tau = 1/\\lambda\\). The activity, the number of decays per unit time, is \\(R = \\lambda N\\).":
  "La vida media \\(T_{1/2}\\) es el tiempo para que decaiga la mitad de los núcleos: \\(T_{1/2} = \\ln 2/\\lambda\\). La vida promedio es \\(\\tau = 1/\\lambda\\). La actividad, el número de decaimientos por unidad de tiempo, es \\(R = \\lambda N\\).",
"Taking the natural log, \\(\\ln(N/N_0) = -\\lambda t\\): a graph of \\(\\ln(N/N_0)\\) against \\(t\\) is a straight line through the origin with slope \\(-\\lambda\\).":
  "Tomando el logaritmo natural, \\(\\ln(N/N_0) = -\\lambda t\\): una gráfica de \\(\\ln(N/N_0)\\) en función de \\(t\\) es una recta que pasa por el origen con pendiente \\(-\\lambda\\).",
"Because each decay is random, a real sample scatters about \\(N_0e^{-\\lambda t}\\). If \\(f = e^{-\\lambda t}\\) is the expected fraction left, the count left follows a binomial distribution with standard deviation \\(\\sigma = \\sqrt{N_0 f(1-f)}\\).":
  "Como cada decaimiento es aleatorio, una muestra real se dispersa alrededor de \\(N_0e^{-\\lambda t}\\). Si \\(f = e^{-\\lambda t}\\) es la fracción restante esperada, la cuenta restante sigue una distribución binomial con desviación estándar \\(\\sigma = \\sqrt{N_0 f(1-f)}\\).",
"A sample of {#} nuclei has a half life of one step. How many do you expect after {#}, {#}, {#} and {#} steps?":
  "Una muestra de {#} núcleos tiene una vida media de un paso. ¿Cuántos esperas después de {#}, {#}, {#} y {#} pasos?",
"Iodine {#} has a half life of {#} d. Find its decay constant in {#}/d and its mean life. What fraction is left after {#} d?":
  "El yodo {#} tiene una vida media de {#} d. Encuentra su constante de decaimiento en {#}/d y su vida promedio. ¿Qué fracción queda después de {#} d?",
"Show that \\(\\ln(N/N_0) = -\\lambda t\\) follows from \\(N = N_0e^{-\\lambda t}\\), and say what the slope of a graph of \\(\\ln(N/N_0)\\) against \\(t\\) tells you.":
  "Muestra que \\(\\ln(N/N_0) = -\\lambda t\\) se deduce de \\(N = N_0e^{-\\lambda t}\\), y di qué te indica la pendiente de una gráfica de \\(\\ln(N/N_0)\\) en función de \\(t\\).",
"For \\(N_0 = 100\\) and \\(f = 0.5\\), find the expected spread \\(\\sigma\\). What is \\(\\sigma/N\\)? What is it for \\(N_0 = 10\\,000\\)?":
  "Para \\(N_0 = 100\\) y \\(f = 0.5\\), encuentra la dispersión esperada \\(\\sigma\\). ¿Cuánto vale \\(\\sigma/N\\)? ¿Y para \\(N_0 = 10\\,000\\)?",
"No hazards in the virtual lab. Real iodine {#} is a beta and gamma emitter handled only under license.":
  "No hay riesgos en el laboratorio virtual. El yodo {#} real es un emisor beta y gamma que solo se maneja con licencia.",
"The demo starts running as soon as it opens and whenever you choose a setup, and choosing a number of nuclei starts a new sample: pause it and Reset before the first reading, so it starts from t = {#}. Clear throws away readings not yet sent, so Export each series before you Clear it.":
  "La demo empieza a correr en cuanto se abre y cada vez que eliges una configuración, y elegir un número de núcleos empieza una muestra nueva: páusala y Reiniciar antes de la primera lectura, para que empiece en t = {#}. Borrar descarta las lecturas aún no enviadas, así que exporta cada serie antes de Borrar.",
"<strong>Coin flip nuclei.</strong> With {#} nuclei, record a reading at the start and after each step, one step at a time, until {#} steps have passed. Then Export, Clear, Reset and record a second run the same way, in a new copy of the table.":
  "<strong>Núcleos de volado.</strong> Con {#} núcleos, registra una lectura al inicio y después de cada paso, un paso a la vez, hasta que hayan pasado {#} pasos. Luego Exportar, Borrar, Reiniciar y registra una segunda corrida de la misma manera, en una copia nueva de la tabla.",
"<strong>Iodine {#}, {#} {#} nuclei.</strong> Export and Clear the readings, then choose Iodine {#} with {#} {#} nuclei. Hide the expected curve and band. Record a reading at the start and every {#} d until {#} d (step to the exact times).":
  "<strong>Yodo {#}, {#} {#} núcleos.</strong> Exporta y borra las lecturas, luego elige Yodo {#} con {#} {#} núcleos. Oculta la curva esperada y la banda. Registra una lectura al inicio y cada {#} d hasta {#} d (avanza por pasos hasta los tiempos exactos).",
"<strong>Iodine {#}, {#} nuclei.</strong> Export and Clear the readings, choose {#} nuclei and record the same times.":
  "<strong>Yodo {#}, {#} núcleos.</strong> Exporta y borra las lecturas, elige {#} núcleos y registra los mismos tiempos.",
"<strong>One nucleus.</strong> With any one step setup, follow at least ten nuclei, one after another, and write down their ages at decay.":
  "<strong>Un núcleo.</strong> Con cualquier configuración de un solo paso, sigue al menos diez núcleos, uno tras otro, y anota sus edades al decaer.",
"<span>B</span>Setup and \\(N_0\\)":
  "<span>B</span>Configuración y \\(N_0\\)",
"<span>C</span>Time \\(t\\)":
  "<span>C</span>Tiempo \\(t\\)",
"<span>D</span>Parents left \\(N\\)":
  "<span>D</span>Núcleos madre restantes \\(N\\)",
"<span>F</span>ln(N/N₀)":
  "<span>F</span>ln(N/N₀)",
"Setup and N_0, row {#}":
  "Configuración y N_0, fila {#}",
"Time t, row {#}":
  "Tiempo t, fila {#}",
"Parents left N, row {#}":
  "Núcleos madre restantes N, fila {#}",
"N/N_0, row {#}":
  "N/N_0, fila {#}",
"ln(N/N₀), row {#}":
  "ln(N/N₀), fila {#}",
"Setup and N₀":
  "Configuración y N₀",
"The time unit is in the Setup column. Fill in \\(N/N_0\\) and its natural log for each row.":
  "La unidad de tiempo está en la columna Configuración. Llena \\(N/N_0\\) y su logaritmo natural para cada fila.",
"For the coin flip nuclei, compare each count with \\(400/2^n\\). Are the differences about the size of \\(\\sigma\\)?":
  "Para los núcleos de volado, compara cada cuenta con \\(400/2^n\\). ¿Son las diferencias del tamaño de \\(\\sigma\\)?",
"Graph \\(\\ln(N/N_0)\\) against \\(t\\) for iodine {#} with {#} {#} nuclei. From the slope find \\(\\lambda\\), then \\(T_{1/2}\\), and compare with {#} d.":
  "Grafica \\(\\ln(N/N_0)\\) en función de \\(t\\) para el yodo {#} con {#} {#} núcleos. A partir de la pendiente encuentra \\(\\lambda\\), luego \\(T_{1/2}\\), y compara con {#} d.",
"Do the same for {#} nuclei. How do the points scatter about the line compared with {#} {#} nuclei?":
  "Haz lo mismo para {#} núcleos. ¿Cómo se dispersan los puntos alrededor de la recta en comparación con {#} {#} núcleos?",
"Use your \\(\\lambda\\) to find the activity of the {#} {#} nuclei at the start, in decays per day. Check it against the number that decayed in the first {#} d.":
  "Usa tu \\(\\lambda\\) para encontrar la actividad de los {#} {#} núcleos al inicio, en decaimientos por día. Compruébala con el número que decayó en los primeros {#} d.",
"Find the mean of the ages at decay of the nuclei you followed, and compare with the mean life \\(\\tau = 1/\\lambda\\).":
  "Encuentra la media de las edades al decaer de los núcleos que seguiste, y compárala con la vida promedio \\(\\tau = 1/\\lambda\\).",
"Use the standard error of the slope to give \\(T_{1/2}\\) with its uncertainty for both sample sizes. Compare the two relative uncertainties. Does their ratio match the \\(1/\\sqrt{N_0}\\) you would expect?":
  "Usa el error estándar de la pendiente para dar \\(T_{1/2}\\) con su incertidumbre para ambos tamaños de muestra. Compara las dos incertidumbres relativas. ¿Su razón concuerda con el \\(1/\\sqrt{N_0}\\) que esperarías?",
"A nucleus has already survived three half lives. What is the chance it decays within the next half life? Explain.":
  "Un núcleo ya sobrevivió tres vidas medias. ¿Cuál es la probabilidad de que decaiga dentro de la siguiente vida media? Explica.",
"Why doesn’t the number left fall exactly to half in each half life?":
  "¿Por qué el número restante no baja exactamente a la mitad en cada vida media?",
"A piece of wood has {#}% of the carbon {#} of living wood. How old is it? (Carbon {#} half life {#} yr.) Try the Carbon {#} dating setup’s task to check yourself.":
  "Un trozo de madera tiene el {#}% del carbono {#} de la madera viva. ¿Qué edad tiene? (Vida media del carbono {#}: {#} años.) Prueba la tarea de la configuración Datación con carbono {#} para comprobarlo.",
"Iodine {#} is used to treat thyroid disease. Why is waste containing it stored for about {#} days before disposal?":
  "El yodo {#} se usa para tratar enfermedades de la tiroides. ¿Por qué los desechos que lo contienen se almacenan unos {#} días antes de desecharlos?",
"Prelab answers, the table copies with their graphs, your values of \\(\\lambda\\) and \\(T_{1/2}\\) with uncertainties, the ages of the nuclei you followed, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de las tablas con sus gráficas, tus valores de \\(\\lambda\\) y \\(T_{1/2}\\) con incertidumbres, las edades de los núcleos que seguiste, y las respuestas a las preguntas. Identifica los datos simulados.",
"Number of parents left":
  "Número de núcleos madre restantes",
"Starting number of parents":
  "Número inicial de núcleos madre",
"Activity, decays per unit time":
  "Actividad, decaimientos por unidad de tiempo",
"Half life":
  "Vida media",
"Expected fraction of parents left":
  "Fracción esperada de núcleos madre restantes",
"Decay constant":
  "Constante de decaimiento",
"Number of steps (flips)":
  "Número de pasos (volados)",
"Probability that a parent decays in one step":
  "Probabilidad de que un núcleo madre decaiga en un paso",
"Standard deviation of the count left":
  "Desviación estándar de la cuenta restante",
"Mean life":
  "Vida media",
"Radioactive Decay":
  "Desintegración radiactiva"
});
