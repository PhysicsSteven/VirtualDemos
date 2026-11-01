/* ws/second-law in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/second-law', {
"Device":
  "Dispositivo",
"Δ S_universe (J/K)":
  "Δ S_universe (J/K)",
"Allowed?":
  "¿Permitido?",
"Testing the Second Law | VirtualDemos":
  "Puesta a prueba de la segunda ley | VirtualDemos",
"Testing the Second Law":
  "Puesta a prueba de la segunda ley",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} to {#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} a {#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> A real engine; Beats Carnot?; Perfect engine; Perfect refrigerator (these four use the Second law view, the subject of this worksheet); Four molecules; A hundred molecules (the Free expansion worksheet); Small solids; Hot solid meets cold (the Einstein solids worksheet).":
  "<strong>Configuraciones en la demo:</strong> Un motor real; ¿Supera a Carnot?; Motor perfecto; Refrigerador perfecto (estas cuatro usan la vista Segunda ley, el tema de esta hoja de trabajo); Cuatro moléculas; Cien moléculas (la hoja de trabajo Expansión libre); Sólidos pequeños; Sólido caliente con sólido frío (la hoja de trabajo Sólidos de Einstein).",
"The Second law view has a device that runs one complete cycle between a hot and a cold reservoir, each so large that its temperature does not change. Choose a heat engine or a refrigerator, the two temperatures, and two of the three energies.":
  "La vista Segunda ley tiene un dispositivo que hace un ciclo completo entre un depósito caliente y uno frío, cada uno tan grande que su temperatura no cambia. Elige un motor térmico o un refrigerador, las dos temperaturas y dos de las tres energías.",
"For an engine you set the heat \\(Q_h\\) taken from the hot reservoir and the work \\(W\\) it does; the first law gives the heat \\(Q_c = Q_h - W\\) it gives to the cold reservoir. For a refrigerator you set the heat \\(Q_c\\) it takes from the cold reservoir and the work \\(W\\) done on it; then \\(Q_h = Q_c + W\\).":
  "Para un motor fijas el calor \\(Q_h\\) que toma del depósito caliente y el trabajo \\(W\\) que hace; la primera ley da el calor \\(Q_c = Q_h - W\\) que entrega al depósito frío. Para un refrigerador fijas el calor \\(Q_c\\) que toma del depósito frío y el trabajo \\(W\\) que se hace sobre él; entonces \\(Q_h = Q_c + W\\).",
"The arrows are drawn with widths in proportion to the energies. The graph shows the entropy change of each reservoir, of the device, and of the universe.":
  "Las flechas se dibujan con anchos proporcionales a las energías. La gráfica muestra el cambio de entropía de cada depósito, del dispositivo y del universo.",
"Pair it with a Carnot device adds a reversible device between the same reservoirs, and shows what the pair does together.":
  "Acoplarlo a un dispositivo de Carnot agrega un dispositivo reversible entre los mismos depósitos, y muestra lo que hace la pareja en conjunto.",
"Record reading stores the device, both temperatures and all three energies. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda el dispositivo, ambas temperaturas y las tres energías. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una nueva copia de la tabla.",
"Blind hides the Carnot limit, the entropy changes and the verdict.":
  "A ciegas oculta el límite de Carnot, los cambios de entropía y el veredicto.",
"Test proposed engines and refrigerators against the second law by working out the entropy change of the universe, and see why the Kelvin and Clausius statements and the Carnot limit all say the same thing.":
  "Pon a prueba motores y refrigeradores propuestos contra la segunda ley calculando el cambio de entropía del universo, y ve por qué los enunciados de Kelvin y de Clausius y el límite de Carnot dicen lo mismo.",
"A device that runs in a cycle ends where it started, so over one cycle its own entropy does not change. Only the reservoirs change: a reservoir at temperature \\(T\\) that gains heat \\(Q\\) gains entropy \\(Q/T\\) (§{#}). For an engine,":
  "Un dispositivo que funciona en un ciclo termina donde empezó, así que en un ciclo su propia entropía no cambia. Solo cambian los depósitos: un depósito a temperatura \\(T\\) que gana un calor \\(Q\\) gana una entropía \\(Q/T\\) (§{#}). Para un motor,",
"\\[\\Delta S_\\mathrm{universe} = -\\frac{Q_h}{T_h} + \\frac{Q_c}{T_c}.\\]":
  "\\[\\Delta S_\\mathrm{universe} = -\\frac{Q_h}{T_h} + \\frac{Q_c}{T_c}.\\]",
"The second law says \\(\\Delta S_\\mathrm{universe} \\ge 0\\), with equality only for a reversible device. For an engine this means its efficiency \\(W/Q_h\\) can be no more than the Carnot efficiency \\(1 - T_c/T_h\\) (§{#}); for a refrigerator, its coefficient of performance \\(Q_c/W\\) can be no more than \\(T_c/(T_h - T_c)\\).":
  "La segunda ley dice \\(\\Delta S_\\mathrm{universe} \\ge 0\\), con igualdad solo para un dispositivo reversible. Para un motor, esto significa que su eficiencia \\(W/Q_h\\) no puede ser mayor que la eficiencia de Carnot \\(1 - T_c/T_h\\) (§{#}); para un refrigerador, su coeficiente de desempeño \\(Q_c/W\\) no puede ser mayor que \\(T_c/(T_h - T_c)\\).",
"The <strong>Kelvin statement</strong> says no engine can turn heat from a single reservoir entirely into work. The <strong>Clausius statement</strong> says no refrigerator can move heat from a cold reservoir to a hot one with no work (§{#}). Joining a device that beat either one with an ordinary device between the same reservoirs would make a device that beat the other, so the two statements stand or fall together.":
  "El <strong>enunciado de Kelvin</strong> dice que ningún motor puede convertir completamente en trabajo el calor de un solo depósito. El <strong>enunciado de Clausius</strong> dice que ningún refrigerador puede mover calor de un depósito frío a uno caliente sin trabajo (§{#}). Unir un dispositivo que violara cualquiera de los dos con un dispositivo ordinario entre los mismos depósitos daría un dispositivo que violaría el otro, así que los dos enunciados se sostienen o caen juntos.",
"An engine between {#} K and {#} K takes {#} J from the hot reservoir and does {#} J of work. Find \\(Q_c\\), its efficiency and \\(\\Delta S_\\mathrm{universe}\\).":
  "Un motor entre {#} K y {#} K toma {#} J del depósito caliente y hace {#} J de trabajo. Encuentra \\(Q_c\\), su eficiencia y \\(\\Delta S_\\mathrm{universe}\\).",
"What is the most work that engine could do with the same {#} J?":
  "¿Cuál es el mayor trabajo que ese motor podría hacer con los mismos {#} J?",
"Find \\(\\Delta S_\\mathrm{universe}\\) for an engine that turns all {#} J into work. Which statement does it break?":
  "Encuentra \\(\\Delta S_\\mathrm{universe}\\) para un motor que convierte todos los {#} J en trabajo. ¿Qué enunciado viola?",
"A refrigerator moves {#} J from a {#} K freezer to a {#} K room with {#} J of work. Is it allowed?":
  "Un refrigerador mueve {#} J de un congelador a {#} K a un cuarto a {#} K con {#} J de trabajo. ¿Está permitido?",
"<strong>Engines.</strong> Start with the A real engine setup ({#} K and {#} K, \\(Q_h\\) = {#} J). Record a reading for each value of \\(W\\) from {#} to {#} J, in steps of {#} J, and send the readings to the worksheet.":
  "<strong>Motores.</strong> Empieza con la configuración Un motor real ({#} K y {#} K, \\(Q_h\\) = {#} J). Registra una lectura para cada valor de \\(W\\) de {#} a {#} J, en pasos de {#} J, y envía las lecturas a la hoja de trabajo.",
"<strong>Another temperature.</strong> Clear the readings, set \\(T_h\\) = {#} K and repeat. Send this run to a new copy of the table.":
  "<strong>Otra temperatura.</strong> Borra las lecturas, fija \\(T_h\\) = {#} K y repite. Envía esta corrida a una nueva copia de la tabla.",
"<strong>Refrigerators.</strong> Clear the readings and switch to Refrigerator, with {#} K and {#} K and \\(Q_c\\) = {#} J. Record readings for \\(W\\) from {#} to {#} J, in steps of {#} J, and send them to a new copy of the table.":
  "<strong>Refrigeradores.</strong> Borra las lecturas y cambia a Refrigerador, con {#} K y {#} K y \\(Q_c\\) = {#} J. Registra lecturas para \\(W\\) de {#} a {#} J, en pasos de {#} J, y envíalas a una nueva copia de la tabla.",
"<strong>The pairing argument.</strong> Clear the readings, pick Beats Carnot? and turn on the pairing. Record what the pair does. Then do the same for a refrigerator with a COP above the Carnot value, such as \\(Q_c\\) = {#} J and \\(W\\) = {#} J between {#} K and {#} K. Send these readings to a new copy of the table.":
  "<strong>El argumento del acoplamiento.</strong> Borra las lecturas, elige ¿Supera a Carnot? y activa el acoplamiento. Registra lo que hace la pareja. Luego haz lo mismo para un refrigerador con un COP por encima del valor de Carnot, como \\(Q_c\\) = {#} J y \\(W\\) = {#} J entre {#} K y {#} K. Envía estas lecturas a una nueva copia de la tabla.",
"<span>B</span>Device":
  "<span>B</span>Dispositivo",
"<span>H</span>\\(\\Delta S_\\mathrm{universe}\\) (J/K)":
  "<span>H</span>\\(\\Delta S_\\mathrm{universe}\\) (J/K)",
"<span>I</span>Allowed?":
  "<span>I</span>¿Permitido?",
"Device, row {#}":
  "Dispositivo, fila {#}",
"T_h (K), row {#}":
  "T_h (K), fila {#}",
"T_c (K), row {#}":
  "T_c (K), fila {#}",
"Q_h (J), row {#}":
  "Q_h (J), fila {#}",
"Q_c (J), row {#}":
  "Q_c (J), fila {#}",
"W (J), row {#}":
  "W (J), fila {#}",
"Δ S_universe (J/K), row {#}":
  "Δ S_universe (J/K), fila {#}",
"Allowed?, row {#}":
  "¿Permitido?, fila {#}",
"Work out \\(\\Delta S_\\mathrm{universe}\\) for every reading and say whether each device is allowed.":
  "Calcula \\(\\Delta S_\\mathrm{universe}\\) para cada lectura y di si cada dispositivo está permitido.",
"Plot \\(\\Delta S_\\mathrm{universe}\\) against \\(W\\) for the {#} K engines. Find the work at which it crosses zero and compare it with the Carnot limit. What is the slope, and why?":
  "Grafica \\(\\Delta S_\\mathrm{universe}\\) en función de \\(W\\) para los motores de {#} K. Encuentra el trabajo en el que cruza el cero y compáralo con el límite de Carnot. ¿Cuál es la pendiente, y por qué?",
"Repeat Analysis {#} for the {#} K engines.":
  "Repite el Análisis {#} para los motores de {#} K.",
"For the refrigerators, find the least work that is allowed and compare \\(Q_c/W\\) there with the Carnot COP.":
  "Para los refrigeradores, encuentra el menor trabajo permitido y compara \\(Q_c/W\\) ahí con el COP de Carnot.",
"Describe what the pair did in each case of the pairing argument, and say which statement of the second law the pair breaks.":
  "Describe lo que hizo la pareja en cada caso del argumento del acoplamiento, y di qué enunciado de la segunda ley viola la pareja.",
"The energies here are set exactly, so there is no measurement uncertainty. Instead, decide how close to zero \\(\\Delta S_\\mathrm{universe}\\) has to be before you would call a device reversible, given that the energies are shown to {#} J.":
  "Aquí las energías se fijan exactamente, así que no hay incertidumbre de medición. En cambio, decide qué tan cerca de cero tiene que estar \\(\\Delta S_\\mathrm{universe}\\) para que llames reversible a un dispositivo, dado que las energías se muestran a {#} J.",
"Why must every real engine give some heat to a cold reservoir?":
  "¿Por qué todo motor real debe entregar algo de calor a un depósito frío?",
"Why does a refrigerator need work, when heat is just moving from one place to another?":
  "¿Por qué un refrigerador necesita trabajo, si el calor solo se mueve de un lugar a otro?",
"A power station runs between steam at {#} K and a river at {#} K. What is the most it could turn into electricity of each joule of heat?":
  "Una central eléctrica funciona entre vapor a {#} K y un río a {#} K. ¿Qué es lo más que podría convertir en electricidad de cada joule de calor?",
"Why is the Carnot efficiency higher when the cold reservoir is colder?":
  "¿Por qué la eficiencia de Carnot es mayor cuando el depósito frío está más frío?",
"Prelab answers, the table copies with your entropy changes and graphs, the crossing points compared with the Carnot limits, your account of the pairing argument, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de la tabla con tus cambios de entropía y gráficas, los puntos de cruce comparados con los límites de Carnot, tu descripción del argumento del acoplamiento y las respuestas a las preguntas. Identifica los datos simulados.",
"Heat a reservoir gains":
  "Calor que gana un depósito",
"Heat to the cold reservoir":
  "Calor hacia el depósito frío",
"Heat from the hot reservoir":
  "Calor del depósito caliente",
"Entropy of the universe (ΔS: its change)":
  "Entropía del universo (ΔS: su cambio)",
"Temperature of a reservoir":
  "Temperatura de un depósito",
"Temperature of the cold reservoir":
  "Temperatura del depósito frío",
"Temperature of the hot reservoir":
  "Temperatura del depósito caliente",
"Work done":
  "Trabajo hecho",
"Entropy and the Second Law (Second law)":
  "Entropía y la segunda ley (Segunda ley)"
});
