/* ws/galactic-habitable-zone in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/galactic-habitable-zone', {
"Distance from the center R (kpc)":
  "Distancia al centro R (kpc)",
"[Fe/H]":
  "[Fe/H]",
"P_metals":
  "P_metals",
"P_safe":
  "P_safe",
"Supernova dose (Earth = {#})":
  "Dosis de supernovas (Tierra = {#})",
"P_SN":
  "P_SN",
"P_time":
  "P_time",
"Born (Gyr ago)":
  "Nacimiento (hace miles de millones de años)",
"Chance Earth’s supernovae sterilize p_E":
  "Probabilidad de que las supernovas de la Tierra la esterilicen p_E",
"Gradient g (dex/kpc)":
  "Gradiente g (dex/kpc)",
"Time complex life needs (Gyr)":
  "Tiempo que necesita la vida compleja (miles de millones de años)",
"{#}% zone, distance (kpc)":
  "Zona del {#}%, distancia (kpc)",
"{#}% zone, born (Gyr ago)":
  "Zona del {#}%, nacimiento (hace miles de millones de años)",
"Share of all stars born that could host complex life (%)":
  "Fracción de todas las estrellas nacidas que podrían albergar vida compleja (%)",
"Older than the Sun (%)":
  "Más viejas que el Sol (%)",
"The Galactic Habitable Zone | VirtualDemos":
  "La zona habitable galáctica | VirtualDemos",
"The Galactic Habitable Zone":
  "La zona habitable galáctica",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (nuclear fusion, which makes the heavy elements in stars) and §{#} (the age of the universe). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (la fusión nuclear, que produce los elementos pesados en las estrellas) y §{#} (la edad del universo). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> two views, Star system and Galaxy. This worksheet uses <strong>Galaxy</strong>, with its setups The Sun; Inner disk; Outer disk; Young star near the Sun; Old star near the Sun.":
  "<strong>Configuraciones en la demo:</strong> dos vistas, Sistema estelar y Galaxia. Esta hoja de trabajo usa <strong>Galaxia</strong>, con sus configuraciones El Sol; Disco interior; Disco exterior; Estrella joven cerca del Sol; Estrella vieja cerca del Sol.",
"The Galaxy view follows a simplified version of the model of Lineweaver, Fenner and Gibson ({#}, Science {#}, {#}). The picture shows the Milky Way’s disk with the star you choose, a map of where and when stars that could host complex life today were born (distance from the center across, birth time up), with the smallest regions holding {#}% and {#}% of them outlined, and a bar for each of the four factors below.":
  "La vista Galaxia sigue una versión simplificada del modelo de Lineweaver, Fenner y Gibson ({#}, Science {#}, {#}). La imagen muestra el disco de la Vía Láctea con la estrella que elijas, un mapa de dónde y cuándo nacieron las estrellas que podrían albergar vida compleja hoy (distancia al centro a lo ancho, tiempo de nacimiento hacia arriba), con las regiones más pequeñas que contienen el {#}% y el {#}% de ellas remarcadas, y una barra para cada uno de los cuatro factores de abajo.",
"Choose a star by its distance from the center R and how long ago it was born, by dragging it on the map or with the sliders. The model’s assumptions are three more sliders: the chance that Earth’s own history of nearby supernovae would have sterilized it, the metallicity gradient across the disk, and the time complex life needs.":
  "Elige una estrella por su distancia al centro R y por hace cuánto nació, arrastrándola en el mapa o con los controles deslizantes. Los supuestos del modelo son tres controles más: la probabilidad de que la historia de supernovas cercanas de la propia Tierra la hubiera esterilizado, el gradiente de metalicidad a lo ancho del disco, y el tiempo que necesita la vida compleja.",
"Record reading stores the star’s place, its four factors and their product, the assumptions, and the zone’s size. Export to worksheet sends the readings to the matching table below: stars born at one time to the first, stars at one distance to the second, and readings that change an assumption to the third. Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda el lugar de la estrella, sus cuatro factores y su producto, los supuestos y el tamaño de la zona. Exportar a la hoja envía las lecturas a la tabla correspondiente de abajo: las estrellas nacidas en un mismo tiempo a la primera, las estrellas a una misma distancia a la segunda, y las lecturas que cambian un supuesto a la tercera. Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"The model and where each ingredient comes from are under “The model and where it comes from” in the demo. Each ingredient is a simple stand in for a much more detailed calculation, so the numbers are a model’s, not measurements.":
  "El modelo y de dónde viene cada ingrediente están en “El modelo y de dónde viene” en la demo. Cada ingrediente es un sustituto sencillo de un cálculo mucho más detallado, así que los números son de un modelo, no mediciones.",
"Find where and when in the Milky Way stars were born that could have planets with complex life today, and how that zone depends on what we assume about metals, supernovae and the time life needs.":
  "Encuentra dónde y cuándo nacieron en la Vía Láctea las estrellas que podrían tener planetas con vida compleja hoy, y cómo depende esa zona de lo que suponemos sobre los metales, las supernovas y el tiempo que necesita la vida.",
"Four needs, each a chance between {#} and {#} in this model; their product P is the chance that a star born at distance R, a time ago, has a planet with complex life today.":
  "Cuatro necesidades, cada una una probabilidad entre {#} y {#} en este modelo; su producto P es la probabilidad de que una estrella nacida a la distancia R, hace cierto tiempo, tenga hoy un planeta con vida compleja.",
"<strong>Metals to build Earths.</strong> Rocky planets are made of elements heavier than helium, which stars make and spread. A star’s iron content relative to the Sun is \\([\\text{Fe/H}] = \\log_{10}\\frac{(\\text{Fe/H})_\\star}{(\\text{Fe/H})_\\odot}\\). In the model the gas is richer toward the center (a gradient g, about −{#} dex per kpc today) and grows richer with time, and":
  "<strong>Metales para construir Tierras.</strong> Los planetas rocosos están hechos de elementos más pesados que el helio, que las estrellas producen y dispersan. El contenido de hierro de una estrella relativo al Sol es \\([\\text{Fe/H}] = \\log_{10}\\frac{(\\text{Fe/H})_\\star}{(\\text{Fe/H})_\\odot}\\). En el modelo el gas es más rico hacia el centro (un gradiente g, de unos −{#} dex por kpc hoy) y se enriquece con el tiempo, y",
"\\[P_{\\text{metals}} = 10^{[\\text{Fe/H}]}\\ \\text{(at most 1)}.\\]":
  "\\[P_{\\text{metals}} = 10^{[\\text{Fe/H}]}\\ \\text{(a lo más 1)}.\\]",
"<strong>No wrecking giants.</strong> Stars rich in metals more often have a giant planet on a short orbit (Fischer and Valenti {#}), taken here to wreck the system’s Earths as it moves inward: \\(P_{\\text{safe}} = 1 - 0.03\\times 10^{2[\\text{Fe/H}]}\\).":
  "<strong>Sin gigantes destructores.</strong> Las estrellas ricas en metales tienen con más frecuencia un planeta gigante en una órbita corta (Fischer y Valenti {#}), que aquí se considera que destruye las Tierras del sistema al moverse hacia adentro: \\(P_{\\text{safe}} = 1 - 0.03\\times 10^{2[\\text{Fe/H}]}\\).",
"<strong>Few nearby supernovae.</strong> Supernovae follow star formation, which is fastest near the center and early on. A planet’s dose N over its first {#} billion years, in units of Earth’s dose, gives \\(P_{\\text{SN}} = (1 - p_E)^{N}\\), where \\(p_E\\) is the chance that Earth’s own dose would have sterilized it.":
  "<strong>Pocas supernovas cercanas.</strong> Las supernovas siguen a la formación estelar, que es más rápida cerca del centro y al principio. La dosis N de un planeta durante sus primeros {#} mil millones de años, en unidades de la dosis de la Tierra, da \\(P_{\\text{SN}} = (1 - p_E)^{N}\\), donde \\(p_E\\) es la probabilidad de que la propia dosis de la Tierra la hubiera esterilizado.",
"<strong>Time for evolution.</strong> Complex life took about {#} billion years on Earth. With a spread of {#} billion years, \\(P_{\\text{time}} = \\Phi\\!\\left(\\frac{\\text{age} - t_{\\text{life}}}{1\\ \\text{Gyr}}\\right)\\), where Φ is the cumulative normal distribution.":
  "<strong>Tiempo para la evolución.</strong> La vida compleja tardó unos {#} mil millones de años en la Tierra. Con una dispersión de {#} mil millones de años, \\(P_{\\text{time}} = \\Phi\\!\\left(\\frac{\\text{age} - t_{\\text{life}}}{1\\ \\text{Gyr}}\\right)\\), donde Φ es la distribución normal acumulada.",
"The disk in the model began forming stars {#} billion years ago; the Sun was born {#} billion years ago, {#} kpc from the center.":
  "El disco del modelo empezó a formar estrellas hace {#} mil millones de años; el Sol nació hace {#} mil millones de años, a {#} kpc del centro.",
"A star has [Fe/H] = −{#}. What fraction of the Sun’s iron (relative to hydrogen) does it have, and what is its \\(P_{\\text{metals}}\\)?":
  "Una estrella tiene [Fe/H] = −{#}. ¿Qué fracción del hierro del Sol (relativo al hidrógeno) tiene, y cuál es su \\(P_{\\text{metals}}\\)?",
"With a gradient of −{#} dex/kpc, what [Fe/H] does the model give a star born at the same time as the Sun {#} kpc from the center? {#} kpc from the center?":
  "Con un gradiente de −{#} dex/kpc, ¿qué [Fe/H] da el modelo a una estrella nacida al mismo tiempo que el Sol a {#} kpc del centro? ¿Y a {#} kpc del centro?",
"With \\(p_E = 0.5\\), find \\(P_{\\text{SN}}\\) for a planet whose supernova dose is {#} times Earth’s, and for one whose dose is {#} times Earth’s.":
  "Con \\(p_E = 0.5\\), encuentra \\(P_{\\text{SN}}\\) para un planeta cuya dosis de supernovas es {#} veces la de la Tierra, y para uno cuya dosis es {#} veces la de la Tierra.",
"A star was born {#} billion years ago. With \\(t_{\\text{life}} = 4\\) Gyr, find \\(P_{\\text{time}}\\) (use \\(\\Phi(-1) = 0.159\\)).":
  "Una estrella nació hace {#} mil millones de años. Con \\(t_{\\text{life}} = 4\\) Gyr, encuentra \\(P_{\\text{time}}\\) (usa \\(\\Phi(-1) = 0.159\\)).",
"Which factor would you expect to limit the zone on the inside, and which on the outside? Which limits it in time?":
  "¿Qué factor esperarías que limite la zona por dentro, y cuál por fuera? ¿Cuál la limita en el tiempo?",
"Use the Galaxy view, with the model’s assumptions at their opening values, for Parts {#} and {#}.":
  "Usa la vista Galaxia, con los supuestos del modelo en sus valores iniciales, para las Partes {#} y {#}.",
"<strong>Part {#}. Across the disk.</strong> Choose The Sun. Keep the birth time at the Sun’s, and record a reading at distances from the center of {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} kpc. Send the readings to the worksheet.":
  "<strong>Parte {#}. A lo ancho del disco.</strong> Elige El Sol. Mantén el tiempo de nacimiento en el del Sol, y registra una lectura a distancias del centro de {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} kpc. Envía las lecturas a la hoja de trabajo.",
"<strong>Part {#}. Through time.</strong> Clear the readings and choose The Sun again. Keep the distance at {#} kpc, and record a reading for stars born {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} billion years ago. Send the readings to the worksheet.":
  "<strong>Parte {#}. A lo largo del tiempo.</strong> Borra las lecturas y elige El Sol de nuevo. Mantén la distancia en {#} kpc, y registra una lectura para estrellas nacidas hace {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} mil millones de años. Envía las lecturas a la hoja de trabajo.",
"<strong>Part {#}. The assumptions.</strong> Clear the readings and choose The Sun. Record a reading at the opening assumptions. Then, one at a time, record readings with the chance that Earth’s supernovae sterilize at {#} and {#}, the gradient at −{#} and −{#} dex/kpc, and the time complex life needs at {#} and {#} billion years, returning each to its opening value before changing the next. Send the readings to the worksheet.":
  "<strong>Parte {#}. Los supuestos.</strong> Borra las lecturas y elige El Sol. Registra una lectura con los supuestos iniciales. Luego, uno a la vez, registra lecturas con la probabilidad de que las supernovas de la Tierra la esterilicen en {#} y {#}, el gradiente en −{#} y −{#} dex/kpc, y el tiempo que necesita la vida compleja en {#} y {#} mil millones de años, regresando cada uno a su valor inicial antes de cambiar el siguiente. Envía las lecturas a la hoja de trabajo.",
"<strong>Stars born with the Sun, across the disk.</strong>":
  "<strong>Estrellas nacidas con el Sol, a lo ancho del disco.</strong>",
"<span>B</span>Distance from the center \\(R\\) (kpc)":
  "<span>B</span>Distancia al centro \\(R\\) (kpc)",
"<span>C</span>[Fe/H]":
  "<span>C</span>[Fe/H]",
"<span>D</span>\\(P_{\\text{metals}}\\)":
  "<span>D</span>\\(P_{\\text{metals}}\\)",
"<span>E</span>\\(P_{\\text{safe}}\\)":
  "<span>E</span>\\(P_{\\text{safe}}\\)",
"<span>F</span>Supernova dose (Earth = {#})":
  "<span>F</span>Dosis de supernovas (Tierra = {#})",
"<span>G</span>\\(P_{\\text{SN}}\\)":
  "<span>G</span>\\(P_{\\text{SN}}\\)",
"<span>H</span>\\(P_{\\text{time}}\\)":
  "<span>H</span>\\(P_{\\text{time}}\\)",
"Distance from the center R (kpc), row {#}":
  "Distancia al centro R (kpc), fila {#}",
"[Fe/H], row {#}":
  "[Fe/H], fila {#}",
"P_metals, row {#}":
  "P_metals, fila {#}",
"P_safe, row {#}":
  "P_safe, fila {#}",
"Supernova dose (Earth = {#}), row {#}":
  "Dosis de supernovas (Tierra = {#}), fila {#}",
"P_SN, row {#}":
  "P_SN, fila {#}",
"P_time, row {#}":
  "P_time, fila {#}",
"P, row {#}":
  "P, fila {#}",
"<strong>Stars at the Sun’s distance, born at different times.</strong>":
  "<strong>Estrellas a la distancia del Sol, nacidas en distintos tiempos.</strong>",
"<span>B</span>Born (Gyr ago)":
  "<span>B</span>Nacimiento (hace miles de millones de años)",
"Born (Gyr ago), row {#}":
  "Nacimiento (hace miles de millones de años), fila {#}",
"<strong>Changing the assumptions.</strong>":
  "<strong>Cambio de los supuestos.</strong>",
"<span>B</span>Chance Earth’s supernovae sterilize \\(p_E\\)":
  "<span>B</span>Probabilidad de que las supernovas de la Tierra la esterilicen \\(p_E\\)",
"<span>C</span>Gradient \\(g\\) (dex/kpc)":
  "<span>C</span>Gradiente \\(g\\) (dex/kpc)",
"<span>D</span>Time complex life needs (Gyr)":
  "<span>D</span>Tiempo que necesita la vida compleja (miles de millones de años)",
"<span>E</span>{#}% zone, distance (kpc)":
  "<span>E</span>Zona del {#}%, distancia (kpc)",
"<span>F</span>{#}% zone, born (Gyr ago)":
  "<span>F</span>Zona del {#}%, nacimiento (hace miles de millones de años)",
"<span>G</span>Share of all stars born that could host complex life (%)":
  "<span>G</span>Fracción de todas las estrellas nacidas que podrían albergar vida compleja (%)",
"<span>H</span>Older than the Sun (%)":
  "<span>H</span>Más viejas que el Sol (%)",
"Chance Earth’s supernovae sterilize p_E, row {#}":
  "Probabilidad de que las supernovas de la Tierra la esterilicen p_E, fila {#}",
"Gradient g (dex/kpc), row {#}":
  "Gradiente g (dex/kpc), fila {#}",
"Time complex life needs (Gyr), row {#}":
  "Tiempo que necesita la vida compleja (miles de millones de años), fila {#}",
"{#}% zone, distance (kpc), row {#}":
  "Zona del {#}%, distancia (kpc), fila {#}",
"{#}% zone, born (Gyr ago), row {#}":
  "Zona del {#}%, nacimiento (hace miles de millones de años), fila {#}",
"Share of all stars born that could host complex life (%), row {#}":
  "Fracción de todas las estrellas nacidas que podrían albergar vida compleja (%), fila {#}",
"Older than the Sun (%), row {#}":
  "Más viejas que el Sol (%), fila {#}",
"Graph P against R for Part {#}, and on the same axes (or in your own columns) each factor. Which factor cuts P off on the inside, and which on the outside? Where is P largest?":
  "Grafica P en función de R para la Parte {#}, y en los mismos ejes (o en tus propias columnas) cada factor. ¿Qué factor corta P por dentro, y cuál por fuera? ¿Dónde es mayor P?",
"Check one reading by hand: multiply the four factors and compare with P. Check [Fe/H] from the gradient and the Sun’s value.":
  "Comprueba una lectura a mano: multiplica los cuatro factores y compara con P. Comprueba [Fe/H] con el gradiente y el valor del Sol.",
"Graph P against the birth time for Part {#}. Explain the shape: what limits young stars, and what limits old ones?":
  "Grafica P en función del tiempo de nacimiento para la Parte {#}. Explica la forma: ¿qué limita a las estrellas jóvenes, y qué a las viejas?",
"From Part {#}, which assumption moves the zone most? Which changes the share of stars that could host complex life most?":
  "Según la Parte {#}, ¿qué supuesto mueve más la zona? ¿Cuál cambia más la fracción de estrellas que podrían albergar vida compleja?",
"Is the Sun inside the {#}% zone? What share of the stars that could host complex life today are older than the Sun? What would that mean for any complex life elsewhere in the Galaxy, if this model were right?":
  "¿Está el Sol dentro de la zona del {#}%? ¿Qué fracción de las estrellas que podrían albergar vida compleja hoy son más viejas que el Sol? ¿Qué significaría eso para cualquier vida compleja en otras partes de la Galaxia, si este modelo fuera correcto?",
"The model has no measurement uncertainty: every number is exact for its assumptions. The uncertainty is in the assumptions. Use your Part {#} readings to say which boundary of the zone (inner, outer, oldest, youngest) is least certain, and by how much it moves over the range you tried.":
  "El modelo no tiene incertidumbre de medición: cada número es exacto para sus supuestos. La incertidumbre está en los supuestos. Usa tus lecturas de la Parte {#} para decir qué frontera de la zona (interior, exterior, la más vieja, la más joven) es la menos segura, y cuánto se mueve en el intervalo que probaste.",
"Lineweaver, Fenner and Gibson found a zone {#} to {#} kpc from the center, born {#} to {#} billion years ago, with about three quarters of its stars older than the Sun. How do your results compare, and which of this model’s simplifications could explain the differences?":
  "Lineweaver, Fenner y Gibson encontraron una zona de {#} a {#} kpc del centro, nacida hace {#} a {#} mil millones de años, con alrededor de tres cuartas partes de sus estrellas más viejas que el Sol. ¿Cómo se comparan tus resultados, y cuáles de las simplificaciones de este modelo podrían explicar las diferencias?",
"The Sun has probably moved outward since its birth by a few kpc. How would that change the picture of the Sun’s place in the zone?":
  "Es probable que el Sol se haya movido hacia afuera unos cuantos kpc desde su nacimiento. ¿Cómo cambiaría eso la imagen del lugar del Sol en la zona?",
"Why does more metal help rocky planets but also, in this model, hurt them?":
  "¿Por qué más metal ayuda a los planetas rocosos pero también, en este modelo, los perjudica?",
"Elliptical galaxies formed most of their stars quickly and early. Would you expect a habitable zone in such a galaxy to be wider or narrower in time than the Milky Way’s?":
  "Las galaxias elípticas formaron la mayoría de sus estrellas rápido y temprano. ¿Esperarías que la zona habitable de una galaxia así fuera más ancha o más angosta en el tiempo que la de la Vía Láctea?",
"Which of the four needs do you think is least certain in reality? Explain.":
  "¿Cuál de las cuatro necesidades crees que es la menos segura en realidad? Explica.",
"Prelab answers, the three tables with their graphs, the factor that limits each side of the zone, your hand check of one reading, the effect of each assumption, and answers to the questions. Identify model data: every number in this lab comes from a simplified model, not from observations.":
  "Respuestas del prelaboratorio, las tres tablas con sus gráficas, el factor que limita cada lado de la zona, tu comprobación a mano de una lectura, el efecto de cada supuesto y las respuestas a las preguntas. Identifica los datos del modelo: cada número de este laboratorio viene de un modelo simplificado, no de observaciones.",
"Supernova dose over the planet's first {#} billion years, in units of Earth's":
  "Dosis de supernovas durante los primeros {#} mil millones de años del planeta, en unidades de la de la Tierra",
"Product of the four chances: complex life today, in this model":
  "Producto de las cuatro probabilidades: vida compleja hoy, en este modelo",
"Chance that nearby supernovae never sterilized the planet":
  "Probabilidad de que las supernovas cercanas nunca hayan esterilizado el planeta",
"Chance of enough heavy elements to build Earths":
  "Probabilidad de tener suficientes elementos pesados para construir Tierras",
"Chance that no giant planet wrecks the inner planets":
  "Probabilidad de que ningún planeta gigante destruya los planetas interiores",
"Chance that complex life has had time to arise":
  "Probabilidad de que la vida compleja haya tenido tiempo de surgir",
"Cumulative normal distribution":
  "Distribución normal acumulada",
"Distance from the Galaxy's center":
  "Distancia al centro de la Galaxia",
"Metallicity gradient across the disk":
  "Gradiente de metalicidad a lo ancho del disco",
"Chance that Earth's own supernova dose would have sterilized it":
  "Probabilidad de que la propia dosis de supernovas de la Tierra la hubiera esterilizado",
"Time complex life needs":
  "Tiempo que necesita la vida compleja",
"Planet Temperatures and Habitable Zones":
  "Temperaturas planetarias y zonas habitables"
});
