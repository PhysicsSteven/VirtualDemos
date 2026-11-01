/* ws/hr-diagram in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/hr-diagram', {
"Initial mass M (M_odot)":
  "Masa inicial M (M_odot)",
"Luminosity L (L_odot)":
  "Luminosidad L (L_odot)",
"Surface temperature T (K)":
  "Temperatura superficial T (K)",
"Radius R (R_odot)":
  "Radio R (R_odot)",
"Main sequence lifetime t (yr)":
  "Tiempo de vida en la secuencia principal t (años)",
"log₁₀ M":
  "log₁₀ M",
"log₁₀ L":
  "log₁₀ L",
"log₁₀ t":
  "log₁₀ t",
"Age (yr)":
  "Edad (años)",
"Time left in this phase (yr)":
  "Tiempo que queda en esta fase (años)",
"R from L and T (R_odot)":
  "R a partir de L y T (R_odot)",
"Cluster age t (yr)":
  "Edad del cúmulo t (años)",
"Turnoff mass M_to (M_odot)":
  "Masa de desvío M_to (M_odot)",
"Main sequence":
  "Secuencia principal",
"Giants":
  "Gigantes",
"White dwarfs":
  "Enanas blancas",
"Exploded":
  "Explotaron",
"log₁₀ M_to":
  "log₁₀ M_to",
"log₁₀ N_left":
  "log₁₀ N_left",
"Stellar Evolution | VirtualDemos":
  "Evolución estelar | VirtualDemos",
"Stellar Evolution":
  "Evolución estelar",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (blackbody radiation and the Stefan–Boltzmann law) and §{#} (nuclear fusion, the energy source of stars). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (radiación de cuerpo negro y la ley de Stefan–Boltzmann) y §{#} (fusión nuclear, la fuente de energía de las estrellas). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> The Sun; Red dwarf; Sirius A; Massive star; White dwarf cooling; Cluster.":
  "<strong>Configuraciones en la demo:</strong> El Sol; Enana roja; Sirio A; Estrella masiva; Enfriamiento de enanas blancas; Cúmulo.",
"The Hertzsprung Russell diagram plots a star’s luminosity against its surface temperature, hot on the left, both on logarithmic scales. The diagonal radius lines are lines of constant radius. Below it the star is drawn to scale next to the Sun or the Earth.":
  "El diagrama de Hertzsprung Russell grafica la luminosidad de una estrella en función de su temperatura superficial, caliente a la izquierda, ambas en escalas logarítmicas. Las líneas diagonales de radio son líneas de radio constante. Debajo, la estrella se dibuja a escala junto al Sol o la Tierra.",
"One star at a time: choose its initial mass, then move it through its life. The life stage slider and Play stretch the short late phases so you can watch them; the age readout is always the real age. The star can also be dragged along its track on the diagram.":
  "Una estrella a la vez: elige su masa inicial y luego hazla avanzar por su vida. El deslizador Etapa de vida e Iniciar alargan las fases tardías cortas para que puedas verlas; la lectura de la edad siempre es la edad real. La estrella también se puede arrastrar a lo largo de su trayectoria en el diagrama.",
"Cluster shows {#} stars born together, from {#} to {#} \\(M_\\odot\\), at the age you choose (a logarithmic slider from {#} Myr to {#} Gyr). Tap a star to read its mass and phase.":
  "Cúmulo muestra {#} estrellas nacidas juntas, de {#} a {#} \\(M_\\odot\\), a la edad que elijas (un deslizador logarítmico de {#} millones de años a {#} mil millones de años). Toca una estrella para leer su masa y su fase.",
"The model: the main sequence follows fits of luminosity, radius and lifetime to the mass (a star’s luminosity rises by about a factor of {#} during its main sequence life); every later phase is a schematic track, with the right shape and approximate numbers, and phase lengths set as fractions of the main sequence lifetime. White dwarfs keep a fixed radius and cool by Mestel’s law. The cluster’s masses are drawn at random from a fixed recipe, and its stars are single stars of solar composition.":
  "El modelo: la secuencia principal sigue ajustes de la luminosidad, el radio y el tiempo de vida en función de la masa (la luminosidad de una estrella aumenta cerca de un factor de {#} durante su vida en la secuencia principal); cada fase posterior es una trayectoria esquemática, con la forma correcta y números aproximados, y la duración de las fases se fija como fracciones del tiempo de vida en la secuencia principal. Las enanas blancas mantienen un radio fijo y se enfrían según la ley de Mestel. Las masas del cúmulo se sacan al azar de una receta fija, y sus estrellas son estrellas individuales de composición solar.",
"Record reading stores, for one star, the setup, mass, phase, age, the time left in the phase, luminosity, surface temperature and radius; for the cluster, its age, the turnoff mass and how many stars are in each stage. Export to worksheet sends the readings to the matching data table below (readings at several masses to the first, readings of one star to the second, cluster readings to the third). Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda, para una estrella, la configuración, la masa, la fase, la edad, el tiempo que queda en la fase, la luminosidad, la temperatura superficial y el radio; para el cúmulo, su edad, la masa de desvío y cuántas estrellas hay en cada etapa. Exportar a la hoja envía las lecturas a la tabla de datos correspondiente de abajo (lecturas con varias masas a la primera, lecturas de una estrella a la segunda, lecturas del cúmulo a la tercera). Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Measure how a star’s mass sets its luminosity and its lifetime, follow the Sun through its whole life, and use a star cluster to find how many stars are born at each mass.":
  "Mide cómo la masa de una estrella fija su luminosidad y su tiempo de vida, sigue al Sol a lo largo de toda su vida y usa un cúmulo estelar para encontrar cuántas estrellas nacen con cada masa.",
"<strong>Luminosity, radius and temperature.</strong> A star radiates nearly as a blackbody, so its luminosity is \\(L = 4\\pi R^2\\sigma T^4\\). In units of the Sun’s values,":
  "<strong>Luminosidad, radio y temperatura.</strong> Una estrella radia casi como un cuerpo negro, así que su luminosidad es \\(L = 4\\pi R^2\\sigma T^4\\). En unidades de los valores del Sol,",
"\\[\\frac{L}{L_\\odot} = \\left(\\frac{R}{R_\\odot}\\right)^2\\left(\\frac{T}{T_\\odot}\\right)^4,\\qquad T_\\odot = 5772\\ \\text{K}.\\]":
  "\\[\\frac{L}{L_\\odot} = \\left(\\frac{R}{R_\\odot}\\right)^2\\left(\\frac{T}{T_\\odot}\\right)^4,\\qquad T_\\odot = 5772\\ \\text{K}.\\]",
"<strong>Mass, luminosity and lifetime.</strong> On the main sequence a star fuses hydrogen to helium in its core, and its mass sets everything else. Over a range of masses the luminosity follows a power law, \\(L \\propto M^a\\). A star’s main sequence lifetime is roughly its fuel (proportional to \\(M\\)) divided by the rate it uses fuel (proportional to \\(L\\)).":
  "<strong>Masa, luminosidad y tiempo de vida.</strong> En la secuencia principal una estrella fusiona hidrógeno en helio en su núcleo, y su masa fija todo lo demás. En un intervalo de masas la luminosidad sigue una ley de potencia, \\(L \\propto M^a\\). El tiempo de vida de una estrella en la secuencia principal es aproximadamente su combustible (proporcional a \\(M\\)) dividido entre la rapidez con que lo usa (proporcional a \\(L\\)).",
"<strong>Star clusters.</strong> All the stars in a cluster form at about the same time. After a time \\(t\\), the stars heavier than the turnoff mass \\(M_{to}\\), whose main sequence lifetime is shorter than \\(t\\), have left the main sequence.":
  "<strong>Cúmulos estelares.</strong> Todas las estrellas de un cúmulo se forman más o menos al mismo tiempo. Después de un tiempo \\(t\\), las estrellas más pesadas que la masa de desvío \\(M_{to}\\), cuyo tiempo de vida en la secuencia principal es menor que \\(t\\), han dejado la secuencia principal.",
"<strong>How many stars at each mass.</strong> Stars are born with many more of low mass than of high mass. If the number born per unit mass falls as \\(dN/dM \\propto M^{-x}\\) (a power law with \\(x > 1\\)), then the number born heavier than \\(M\\) is":
  "<strong>Cuántas estrellas con cada masa.</strong> Nacen muchas más estrellas de masa baja que de masa alta. Si el número nacido por unidad de masa cae como \\(dN/dM \\propto M^{-x}\\) (una ley de potencia con \\(x > 1\\)), entonces el número nacido más pesado que \\(M\\) es",
"\\[N(>M) \\propto M^{1 - x} - M_{\\text{max}}^{1 - x},\\]":
  "\\[N(>M) \\propto M^{1 - x} - M_{\\text{max}}^{1 - x},\\]",
"where \\(M_{\\text{max}}\\) is the heaviest star. For \\(M \\ll M_{\\text{max}}\\) the second term is small, and \\(N(>M) \\propto M^{1-x}\\).":
  "donde \\(M_{\\text{max}}\\) es la estrella más pesada. Para \\(M \\ll M_{\\text{max}}\\) el segundo término es pequeño, y \\(N(>M) \\propto M^{1-x}\\).",
"Use {#} AU \\(= 215\\ R_\\odot\\) and \\(R_\\odot = 109\\ R_\\oplus\\).":
  "Usa {#} UA \\(= 215\\ R_\\odot\\) y \\(R_\\odot = 109\\ R_\\oplus\\).",
"Two stars have the same surface temperature, but one is {#} times as luminous as the other. Which one is larger, and by what factor?":
  "Dos estrellas tienen la misma temperatura superficial, pero una es {#} veces más luminosa que la otra. ¿Cuál es más grande, y por qué factor?",
"Near the top of its red giant branch the Sun will be about {#} \\(L_\\odot\\) at {#} K. Find its radius in \\(R_\\odot\\) and in AU.":
  "Cerca de la cima de su rama de gigante roja el Sol tendrá unas {#} \\(L_\\odot\\) a {#} K. Encuentra su radio en \\(R_\\odot\\) y en UA.",
"If \\(L \\propto M^4\\) and the lifetime is fuel over the rate of using it, how does the lifetime depend on \\(M\\)? The Sun’s main sequence lifetime is about {#} Gyr. Estimate it for a {#} \\(M_\\odot\\) star.":
  "Si \\(L \\propto M^4\\) y el tiempo de vida es el combustible entre la rapidez con que se usa, ¿cómo depende el tiempo de vida de \\(M\\)? El tiempo de vida del Sol en la secuencia principal es de unos {#} mil millones de años. Estímalo para una estrella de {#} \\(M_\\odot\\).",
"Show the formula for \\(N(>M)\\) in the Background by integrating \\(dN/dM \\propto M^{-x}\\) from \\(M\\) to \\(M_{\\text{max}}\\). How would you find \\(x\\) from a graph of \\(\\log N(>M)\\) against \\(\\log M\\)?":
  "Demuestra la fórmula de \\(N(>M)\\) de los Antecedentes integrando \\(dN/dM \\propto M^{-x}\\) de \\(M\\) a \\(M_{\\text{max}}\\). ¿Cómo encontrarías \\(x\\) con una gráfica de \\(\\log N(>M)\\) en función de \\(\\log M\\)?",
"The Sun will leave a white dwarf of {#} \\(M_\\odot\\) with a radius of {#} \\(R_\\odot\\). Find its surface temperature when it has faded to \\(10^{-3}\\ L_\\odot\\).":
  "El Sol dejará una enana blanca de {#} \\(M_\\odot\\) con un radio de {#} \\(R_\\odot\\). Encuentra su temperatura superficial cuando se haya apagado hasta \\(10^{-3}\\ L_\\odot\\).",
"<strong>The main sequence.</strong> Choose The Sun. Record a reading for each of about five initial masses from {#} to {#} \\(M_\\odot\\), with the star at the very start of its life (age zero), so that the time left in the phase is its whole main sequence lifetime. Send these readings to the worksheet, then clear them and do the same for about seven masses from {#} to {#} \\(M_\\odot\\), spread evenly on a logarithmic scale, and send those too. Each series gets its own copy of the first table.":
  "<strong>La secuencia principal.</strong> Elige El Sol. Registra una lectura para cada una de unas cinco masas iniciales de {#} a {#} \\(M_\\odot\\), con la estrella al inicio mismo de su vida (edad cero), para que el tiempo que queda en la fase sea todo su tiempo de vida en la secuencia principal. Envía estas lecturas a la hoja de trabajo, luego bórralas y haz lo mismo para unas siete masas de {#} a {#} \\(M_\\odot\\), repartidas de manera uniforme en una escala logarítmica, y envíalas también. Cada serie recibe su propia copia de la primera tabla.",
"<strong>The Sun’s life.</strong> Clear the readings and choose The Sun. Record a reading today. Then record one near the end of each phase, main sequence, subgiant, red giant branch (at its top), horizontal branch and asymptotic giant branch (at its top), and one in the planetary nebula phase. Finish with three readings on the white dwarf line, at white dwarf ages near {#} Myr, {#} Gyr and {#} Gyr after the nebula. Send them to the worksheet, where they fill the Sun’s life table.":
  "<strong>La vida del Sol.</strong> Borra las lecturas y elige El Sol. Registra una lectura hoy. Luego registra una cerca del final de cada fase: secuencia principal, subgigante, rama de gigante roja (en su cima), rama horizontal y rama asintótica de gigantes (en su cima), y una en la fase de nebulosa planetaria. Termina con tres lecturas en la línea de enana blanca, a edades de enana blanca cercanas a {#} millones de años, {#} mil millones de años y {#} mil millones de años después de la nebulosa. Envíalas a la hoja de trabajo, donde llenan la tabla de la vida del Sol.",
"<strong>A star cluster.</strong> Clear the readings and choose Cluster. Record readings at about seven cluster ages from {#} Myr to {#} Gyr, spread evenly on a logarithmic scale, and send them to the worksheet.":
  "<strong>Un cúmulo estelar.</strong> Borra las lecturas y elige Cúmulo. Registra lecturas en unas siete edades del cúmulo de {#} millones de años a {#} mil millones de años, repartidas de manera uniforme en una escala logarítmica, y envíalas a la hoja de trabajo.",
"<strong>The main sequence, at age zero.</strong>":
  "<strong>La secuencia principal, a edad cero.</strong>",
"<span>B</span>Initial mass \\(M\\) (\\(M_\\odot\\))":
  "<span>B</span>Masa inicial \\(M\\) (\\(M_\\odot\\))",
"<span>C</span>Luminosity \\(L\\) (\\(L_\\odot\\))":
  "<span>C</span>Luminosidad \\(L\\) (\\(L_\\odot\\))",
"<span>D</span>Surface temperature \\(T\\) (K)":
  "<span>D</span>Temperatura superficial \\(T\\) (K)",
"<span>E</span>Radius \\(R\\) (\\(R_\\odot\\))":
  "<span>E</span>Radio \\(R\\) (\\(R_\\odot\\))",
"<span>F</span>Main sequence lifetime \\(t\\) (yr)":
  "<span>F</span>Tiempo de vida en la secuencia principal \\(t\\) (años)",
"<span>G</span>log₁₀ \\(M\\)":
  "<span>G</span>log₁₀ \\(M\\)",
"<span>H</span>log₁₀ \\(L\\)":
  "<span>H</span>log₁₀ \\(L\\)",
"<span>I</span>log₁₀ \\(t\\)":
  "<span>I</span>log₁₀ \\(t\\)",
"Initial mass M (M_odot), row {#}":
  "Masa inicial M (M_odot), fila {#}",
"Luminosity L (L_odot), row {#}":
  "Luminosidad L (L_odot), fila {#}",
"Surface temperature T (K), row {#}":
  "Temperatura superficial T (K), fila {#}",
"Radius R (R_odot), row {#}":
  "Radio R (R_odot), fila {#}",
"Main sequence lifetime t (yr), row {#}":
  "Tiempo de vida en la secuencia principal t (años), fila {#}",
"log₁₀ M, row {#}":
  "log₁₀ M, fila {#}",
"log₁₀ L, row {#}":
  "log₁₀ L, fila {#}",
"log₁₀ t, row {#}":
  "log₁₀ t, fila {#}",
"<strong>The Sun’s life.</strong>":
  "<strong>La vida del Sol.</strong>",
"<span>B</span>Phase":
  "<span>B</span>Fase",
"<span>C</span>Age (yr)":
  "<span>C</span>Edad (años)",
"<span>D</span>Time left in this phase (yr)":
  "<span>D</span>Tiempo que queda en esta fase (años)",
"<span>E</span>Luminosity \\(L\\) (\\(L_\\odot\\))":
  "<span>E</span>Luminosidad \\(L\\) (\\(L_\\odot\\))",
"<span>F</span>Surface temperature \\(T\\) (K)":
  "<span>F</span>Temperatura superficial \\(T\\) (K)",
"<span>G</span>Radius \\(R\\) (\\(R_\\odot\\))":
  "<span>G</span>Radio \\(R\\) (\\(R_\\odot\\))",
"<span>H</span>\\(R\\) from \\(L\\) and \\(T\\) (\\(R_\\odot\\))":
  "<span>H</span>\\(R\\) a partir de \\(L\\) y \\(T\\) (\\(R_\\odot\\))",
"Phase, row {#}":
  "Fase, fila {#}",
"Age (yr), row {#}":
  "Edad (años), fila {#}",
"Time left in this phase (yr), row {#}":
  "Tiempo que queda en esta fase (años), fila {#}",
"R from L and T (R_odot), row {#}":
  "R a partir de L y T (R_odot), fila {#}",
"<strong>A star cluster.</strong>":
  "<strong>Un cúmulo estelar.</strong>",
"<span>B</span>Cluster age \\(t\\) (yr)":
  "<span>B</span>Edad del cúmulo \\(t\\) (años)",
"<span>C</span>Turnoff mass \\(M_{to}\\) (\\(M_\\odot\\))":
  "<span>C</span>Masa de desvío \\(M_{to}\\) (\\(M_\\odot\\))",
"<span>D</span>Main sequence":
  "<span>D</span>Secuencia principal",
"<span>E</span>Giants":
  "<span>E</span>Gigantes",
"<span>F</span>White dwarfs":
  "<span>F</span>Enanas blancas",
"<span>G</span>Exploded":
  "<span>G</span>Explotaron",
"<span>H</span>log₁₀ \\(M_{to}\\)":
  "<span>H</span>log₁₀ \\(M_{to}\\)",
"<span>I</span>log₁₀ \\(N_{left}\\)":
  "<span>I</span>log₁₀ \\(N_{left}\\)",
"Cluster age t (yr), row {#}":
  "Edad del cúmulo t (años), fila {#}",
"Turnoff mass M_to (M_odot), row {#}":
  "Masa de desvío M_to (M_odot), fila {#}",
"Main sequence, row {#}":
  "Secuencia principal, fila {#}",
"Giants, row {#}":
  "Gigantes, fila {#}",
"White dwarfs, row {#}":
  "Enanas blancas, fila {#}",
"Exploded, row {#}":
  "Explotaron, fila {#}",
"log₁₀ M_to, row {#}":
  "log₁₀ M_to, fila {#}",
"log₁₀ N_left, row {#}":
  "log₁₀ N_left, fila {#}",
"Fill in the three log₁₀ columns, and graph log₁₀ \\(L\\) against log₁₀ \\(M\\) for each series. What is the exponent \\(a\\) in each range of mass?":
  "Llena las tres columnas log₁₀ y grafica log₁₀ \\(L\\) en función de log₁₀ \\(M\\) para cada serie. ¿Cuál es el exponente \\(a\\) en cada intervalo de masa?",
"Graph log₁₀ \\(t\\) against log₁₀ \\(M\\) for each series. What power of \\(M\\) does the lifetime follow? Compare it with what “fuel over the rate of using it” and your exponents from Analysis {#} predict, and suggest a reason they differ.":
  "Grafica log₁₀ \\(t\\) en función de log₁₀ \\(M\\) para cada serie. ¿Qué potencia de \\(M\\) sigue el tiempo de vida? Compárala con lo que predicen “el combustible entre la rapidez con que se usa” y tus exponentes del Análisis {#}, y sugiere una razón por la que difieren.",
"For the Sun’s life, find \\(R\\) from \\(L\\) and \\(T\\) for each reading and compare with the radius the demo shows. How large does the Sun become, compared with Earth’s orbit?":
  "Para la vida del Sol, encuentra \\(R\\) a partir de \\(L\\) y \\(T\\) para cada lectura y compáralo con el radio que muestra la demo. ¿Qué tan grande llega a ser el Sol, comparado con la órbita de la Tierra?",
"From the ages, find how long the Sun spends in each phase before it becomes a white dwarf, and what share of that time is the main sequence. Explain why most stars we see are on the main sequence.":
  "Con las edades, encuentra cuánto tiempo pasa el Sol en cada fase antes de volverse enana blanca, y qué fracción de ese tiempo es la secuencia principal. Explica por qué la mayoría de las estrellas que vemos están en la secuencia principal.",
"For the three white dwarf readings, what happens to the radius as the white dwarf fades? Use two of them to show that \\(L \\propto T^4\\) along its track.":
  "Para las tres lecturas de enana blanca, ¿qué le pasa al radio conforme la enana blanca se apaga? Usa dos de ellas para mostrar que \\(L \\propto T^4\\) a lo largo de su trayectoria.",
"For the cluster, fill in the last two columns: \\(N_{left}\\), the number of stars that have left the main sequence, is the total, {#}, minus the main sequence count. Graph log₁₀ \\(N_{left}\\) against log₁₀ \\(M_{to}\\). Use the slope to find \\(x\\), and compare with Salpeter’s value for stars near the Sun, \\(x = 2.35\\).":
  "Para el cúmulo, llena las dos últimas columnas: \\(N_{left}\\), el número de estrellas que han dejado la secuencia principal, es el total, {#}, menos el conteo de la secuencia principal. Grafica log₁₀ \\(N_{left}\\) en función de log₁₀ \\(M_{to}\\). Usa la pendiente para encontrar \\(x\\), y compárala con el valor de Salpeter para estrellas cercanas al Sol, \\(x = 2.35\\).",
"Check the turnoff masses against the lifetimes in your first table: does a star of the turnoff mass have a main sequence lifetime equal to the cluster’s age?":
  "Compara las masas de desvío con los tiempos de vida de tu primera tabla: ¿una estrella con la masa de desvío tiene un tiempo de vida en la secuencia principal igual a la edad del cúmulo?",
"The single star readings are exact values of the model, but the model itself is approximate: the fits describe typical stars, and the later phases are schematic. The cluster is a random sample of {#} stars, so each count \\(N\\) has a random scatter of about \\(\\sqrt{N}\\). Estimate that scatter for your smallest count of stars that have left the main sequence, and use it to judge how well your slope in Analysis {#} fixes \\(x\\).":
  "Las lecturas de una sola estrella son valores exactos del modelo, pero el modelo en sí es aproximado: los ajustes describen estrellas típicas, y las fases tardías son esquemáticas. El cúmulo es una muestra al azar de {#} estrellas, así que cada conteo \\(N\\) tiene una dispersión aleatoria de cerca de \\(\\sqrt{N}\\). Estima esa dispersión para tu conteo más pequeño de estrellas que han dejado la secuencia principal, y úsala para juzgar qué tan bien fija \\(x\\) tu pendiente del Análisis {#}.",
"A star stays near the same place on the main sequence for its whole main sequence life. What sets where on the main sequence it sits?":
  "Una estrella permanece cerca del mismo lugar de la secuencia principal durante toda su vida en la secuencia principal. ¿Qué fija en qué parte de la secuencia principal se ubica?",
"Sirius A, about {#} \\(M_\\odot\\), is still on the main sequence. Its companion Sirius B is a white dwarf of about {#} \\(M_\\odot\\), and the two formed together. How can the less massive star now be the one that has died?":
  "Sirio A, de unas {#} \\(M_\\odot\\), todavía está en la secuencia principal. Su compañera Sirio B es una enana blanca de unas {#} \\(M_\\odot\\), y las dos se formaron juntas. ¿Cómo puede ser que la estrella de menor masa sea ahora la que ha muerto?",
"A cluster’s turnoff is at {#} \\(M_\\odot\\). Use your lifetime fit to find its age. Why do astronomers date clusters this way, rather than single stars?":
  "El desvío de un cúmulo está en {#} \\(M_\\odot\\). Usa tu ajuste del tiempo de vida para encontrar su edad. ¿Por qué los astrónomos fechan cúmulos de esta manera, en lugar de estrellas individuales?",
"Choose Red dwarf. Its main sequence lifetime is far longer than the age of the universe, {#} Gyr. What does that mean for every red dwarf ever born?":
  "Elige Enana roja. Su tiempo de vida en la secuencia principal es mucho mayor que la edad del universo, {#} mil millones de años. ¿Qué significa eso para cada enana roja que ha nacido?",
"Why does a white dwarf cool along a line of constant radius, while a red giant of the same luminosity is enormous?":
  "¿Por qué una enana blanca se enfría a lo largo de una línea de radio constante, mientras que una gigante roja de la misma luminosidad es enorme?",
"Choose Massive star. How long does a {#} \\(M_\\odot\\) star live, compared with the Sun, and how does its life end?":
  "Elige Estrella masiva. ¿Cuánto vive una estrella de {#} \\(M_\\odot\\), comparada con el Sol, y cómo termina su vida?",
"Prelab answers, the table copies with their graphs and fits, the exponents \\(a\\) and the lifetime power, the Sun’s largest radius and the share of its life on the main sequence, your value of \\(x\\) with its uncertainty, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de la tabla con sus gráficas y ajustes, los exponentes \\(a\\) y la potencia del tiempo de vida, el radio máximo del Sol y la fracción de su vida en la secuencia principal, tu valor de \\(x\\) con su incertidumbre, y las respuestas a las preguntas. Identifica los datos simulados.",
"Luminosity":
  "Luminosidad",
"Solar luminosity, the unit of luminosity":
  "Luminosidad solar, la unidad de luminosidad",
"Initial mass of a star":
  "Masa inicial de una estrella",
"Mass of the heaviest star":
  "Masa de la estrella más pesada",
"Solar mass, the unit of stellar mass":
  "Masa solar, la unidad de masa estelar",
"Turnoff mass of the cluster":
  "Masa de desvío del cúmulo",
"Number of stars born":
  "Número de estrellas nacidas",
"Number of stars that have left the main sequence":
  "Número de estrellas que han dejado la secuencia principal",
"Radius":
  "Radio",
"Solar radius, the unit of radius":
  "Radio solar, la unidad de radio",
"Earth radius":
  "Radio terrestre",
"Surface temperature":
  "Temperatura superficial",
"Surface temperature of the Sun":
  "Temperatura superficial del Sol",
"Exponent of the mass and luminosity power law, L ∝ Mᵃ":
  "Exponente de la ley de potencia entre masa y luminosidad, L ∝ Mᵃ",
"Stefan–Boltzmann constant":
  "Constante de Stefan–Boltzmann",
"{#}… × {#}⁻⁸ W/(m²·K⁴), exact":
  "{#}… × {#}⁻⁸ W/(m²·K⁴), exacta",
"Time: a star's main sequence lifetime, or the cluster's age":
  "Tiempo: el tiempo de vida de una estrella en la secuencia principal, o la edad del cúmulo",
"Exponent of the initial mass function, dN/dM ∝ M⁻ˣ":
  "Exponente de la función inicial de masa, dN/dM ∝ M⁻ˣ"
});
