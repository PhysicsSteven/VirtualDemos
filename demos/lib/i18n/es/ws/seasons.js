/* ws/seasons in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/seasons', {
"Day of the year":
  "Día del año",
"Latitude φ (°)":
  "Latitud φ (°)",
"Tilt ε (°)":
  "Inclinación ε (°)",
"Declination δ (°)":
  "Declinación δ (°)",
"Noon Sun altitude (°)":
  "Altitud del Sol al mediodía (°)",
"Day length (h)":
  "Duración del día (h)",
"Earth to Sun r (AU)":
  "Tierra al Sol r (UA)",
"Daily insolation Q (W/m²)":
  "Insolación diaria Q (W/m²)",
"Sunlight Through the Year | VirtualDemos":
  "La luz del Sol a lo largo del año | VirtualDemos",
"Sunlight Through the Year":
  "La luz del Sol a lo largo del año",
"Textbook: OpenStax <em>University Physics</em> does not treat the seasons directly. This lab uses Earth’s elliptical orbit (Vol. {#}, §{#}, Kepler’s laws) and the idea of flux through a tilted surface (Vol. {#}, §{#}). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em> no trata directamente las estaciones. Este laboratorio usa la órbita elíptica de la Tierra (Vol. {#}, §{#}, leyes de Kepler) y la idea de flujo a través de una superficie inclinada (Vol. {#}, §{#}). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> June solstice; December solstice; Equinox; No tilt; Uranus like tilt; Arctic summer.":
  "<strong>Configuraciones en la demo:</strong> Solsticio de junio; Solsticio de diciembre; Equinoccio; Sin inclinación; Inclinación como la de Urano; Verano ártico.",
"The top left view shows Earth on its orbit around the Sun, with its axis pointing the same way in space all year. Beside it, a closeup of Earth with sunlight from the left and the observer marked; below, the Sun’s path across the observer’s sky and a chart through the year.":
  "La vista superior izquierda muestra la Tierra en su órbita alrededor del Sol, con su eje apuntando en la misma dirección en el espacio todo el año. A su lado, un acercamiento de la Tierra con la luz del Sol desde la izquierda y el observador marcado; abajo, la trayectoria del Sol en el cielo del observador y una gráfica a lo largo del año.",
"The date, the observer’s latitude and the tilt of Earth’s axis can all be changed. Drag Earth along its orbit or across the chart to change the date, and drag up or down on the closeup to move the observer. The demo opens on today’s date at {#}° N (Ruston, Louisiana) and plays.":
  "La fecha, la latitud del observador y la inclinación del eje de la Tierra se pueden cambiar. Arrastra la Tierra a lo largo de su órbita o sobre la gráfica para cambiar la fecha, y arrastra hacia arriba o hacia abajo en el acercamiento para mover al observador. La demo se abre en la fecha de hoy a {#}° N (Ruston, Luisiana) y en reproducción.",
"The readouts give the noon Sun’s altitude, the length of the day, the Sun’s declination, the distance from Earth to the Sun and the daily mean insolation: the sunlight per square meter of level ground, averaged over {#} hours, at the top of the atmosphere.":
  "Las lecturas dan la altitud del Sol al mediodía, la duración del día, la declinación del Sol, la distancia de la Tierra al Sol y la insolación media diaria: la luz del Sol por metro cuadrado de suelo horizontal, promediada en {#} horas, en el tope de la atmósfera.",
"The orbit has its real eccentricity, {#}, with Earth closest to the Sun on January {#}. Stretch ellipse only changes the drawing. Day length uses the center of the Sun and leaves out refraction, so real days are a few minutes longer. The atmosphere, clouds and the heat stored by oceans and land are not modeled.":
  "La órbita tiene su excentricidad real, {#}, con la Tierra más cerca del Sol el {#} de enero. Alargar la elipse solo cambia el dibujo. La duración del día usa el centro del Sol y omite la refracción, así que los días reales son unos minutos más largos. No se modelan la atmósfera, las nubes ni el calor almacenado por los océanos y la tierra.",
"Record reading stores the date, the day of the year, the latitude, the tilt and every readout, to more digits than the readouts show. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la fecha, el día del año, la latitud, la inclinación y cada lectura, con más cifras de las que muestran las lecturas. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar inicia una serie nueva, que va a una nueva copia de la tabla.",
"Find out how much of the change in sunlight through the year comes from Earth’s changing distance to the Sun, and how much from the tilt of its axis.":
  "Averigua cuánto del cambio de la luz del Sol a lo largo del año se debe a la distancia variable de la Tierra al Sol, y cuánto a la inclinación de su eje.",
"<strong>The Sun’s declination.</strong> Earth’s axis is tilted by \\(\\varepsilon = 23.44°\\) from the perpendicular to its orbit and keeps pointing the same way in space. Seen from Earth, the Sun therefore moves north and south of the celestial equator through the year. Its angle from the equator, the declination \\(\\delta\\), runs from \\(+\\varepsilon\\) at the June solstice to \\(-\\varepsilon\\) at the December solstice.":
  "<strong>La declinación del Sol.</strong> El eje de la Tierra está inclinado \\(\\varepsilon = 23.44°\\) respecto a la perpendicular a su órbita y sigue apuntando en la misma dirección en el espacio. Visto desde la Tierra, el Sol se mueve por eso al norte y al sur del ecuador celeste a lo largo del año. Su ángulo respecto al ecuador, la declinación \\(\\delta\\), va de \\(+\\varepsilon\\) en el solsticio de junio a \\(-\\varepsilon\\) en el solsticio de diciembre.",
"<strong>The noon Sun.</strong> At latitude \\(\\varphi\\) the Sun at noon is at an altitude (angle above the horizon)":
  "<strong>El Sol del mediodía.</strong> En la latitud \\(\\varphi\\) el Sol al mediodía está a una altitud (ángulo sobre el horizonte)",
"\\[h_{\\text{noon}} = 90° - \\lvert\\varphi - \\delta\\rvert.\\]":
  "\\[h_{\\text{noon}} = 90° - \\lvert\\varphi - \\delta\\rvert.\\]",
"<strong>Day length.</strong> The Sun is up for an hour angle \\(\\pm H_0\\) about noon, where":
  "<strong>Duración del día.</strong> El Sol está arriba durante un ángulo horario de \\(\\pm H_0\\) alrededor del mediodía, donde",
"\\[\\cos H_0 = -\\tan\\varphi\\,\\tan\\delta,\\]":
  "\\[\\cos H_0 = -\\tan\\varphi\\,\\tan\\delta,\\]",
"so the day lasts \\(24\\ \\text{h} \\times H_0/180°\\). If the right side is below \\(-1\\), the Sun never sets (polar day); above \\(+1\\), it never rises (polar night).":
  "así que el día dura \\(24\\ \\text{h} \\times H_0/180°\\). Si el lado derecho es menor que \\(-1\\), el Sol nunca se pone (día polar); si es mayor que \\(+1\\), nunca sale (noche polar).",
"<strong>Sunlight on the ground.</strong> A beam of intensity \\(S\\) falling on level ground at an angle \\(\\theta\\) from straight up delivers \\(S\\cos\\theta\\) per square meter, just as flux through a tilted surface is \\(EA\\cos\\theta\\). Averaging over a whole day at the top of the atmosphere gives the daily mean insolation":
  "<strong>La luz del Sol en el suelo.</strong> Un haz de intensidad \\(S\\) que incide sobre suelo horizontal a un ángulo \\(\\theta\\) respecto a la vertical entrega \\(S\\cos\\theta\\) por metro cuadrado, igual que el flujo a través de una superficie inclinada es \\(EA\\cos\\theta\\). Promediar sobre un día completo en el tope de la atmósfera da la insolación media diaria",
"\\[Q = \\frac{S_0}{\\pi}\\left(\\frac{1\\ \\text{AU}}{r}\\right)^2\\left(H_0\\sin\\varphi\\sin\\delta + \\cos\\varphi\\cos\\delta\\sin H_0\\right),\\]":
  "\\[Q = \\frac{S_0}{\\pi}\\left(\\frac{1\\ \\text{AU}}{r}\\right)^2\\left(H_0\\sin\\varphi\\sin\\delta + \\cos\\varphi\\cos\\delta\\sin H_0\\right),\\]",
"with \\(H_0\\) in radians, \\(S_0 = 1361\\) W/m² the sunlight at {#} AU and \\(r\\) the distance to the Sun. The factor \\((1\\ \\text{AU}/r)^2\\) is the inverse square law; the bracket holds the tilt.":
  "con \\(H_0\\) en radianes, \\(S_0 = 1361\\) W/m² la luz del Sol a {#} UA y \\(r\\) la distancia al Sol. El factor \\((1\\ \\text{AU}/r)^2\\) es la ley del inverso del cuadrado; el paréntesis contiene la inclinación.",
"<strong>The orbit.</strong> Earth’s orbit is an ellipse with eccentricity \\(e = 0.0167\\), so \\(r\\) runs from \\(1 - e\\) to \\(1 + e\\) AU.":
  "<strong>La órbita.</strong> La órbita de la Tierra es una elipse con excentricidad \\(e = 0.0167\\), así que \\(r\\) va de \\(1 - e\\) a \\(1 + e\\) UA.",
"Find the noon Sun’s altitude at Ruston ({#}° N) at the June solstice and at the December solstice.":
  "Encuentra la altitud del Sol al mediodía en Ruston ({#}° N) en el solsticio de junio y en el solsticio de diciembre.",
"By what percentage is sunlight stronger at Earth’s closest point to the Sun (\\(1 - e\\) AU) than at its farthest (\\(1 + e\\) AU)?":
  "¿En qué porcentaje es más intensa la luz del Sol en el punto más cercano de la Tierra al Sol (\\(1 - e\\) UA) que en el más lejano (\\(1 + e\\) UA)?",
"Find the length of the day at Ruston at the June solstice, in hours and minutes.":
  "Encuentra la duración del día en Ruston en el solsticio de junio, en horas y minutos.",
"Show that at an equinox (\\(\\delta = 0\\)) the daily mean insolation is \\(Q = (S_0/\\pi)(1\\ \\text{AU}/r)^2\\cos\\varphi\\), and find it at Ruston for \\(r = 1\\) AU.":
  "Muestra que en un equinoccio (\\(\\delta = 0\\)) la insolación media diaria es \\(Q = (S_0/\\pi)(1\\ \\text{AU}/r)^2\\cos\\varphi\\), y encuéntrala en Ruston para \\(r = 1\\) UA.",
"<strong>Through the year at Ruston.</strong> Pause the demo. At {#}° N with the real tilt of {#}°, record a reading on the 21st of each month, January to December ({#} readings). Send the readings to the worksheet before you clear them.":
  "<strong>A lo largo del año en Ruston.</strong> Pausa la demo. A {#}° N con la inclinación real de {#}°, registra una lectura el día 21 de cada mes, de enero a diciembre ({#} lecturas). Envía las lecturas a la hoja antes de borrarlas.",
"<strong>Distance alone.</strong> Clear the readings and choose No tilt. At {#}° N, record a reading on the 21st of each month again, then send them to the worksheet.":
  "<strong>Solo la distancia.</strong> Borra las lecturas y elige Sin inclinación. A {#}° N, registra de nuevo una lectura el día 21 de cada mes, y luego envíalas a la hoja.",
"<strong>Around the world at the June solstice.</strong> Clear the readings and choose June solstice. Record a reading at every {#}° of latitude from {#}° S to {#}° N ({#} readings), without changing the date, then send them to the worksheet.":
  "<strong>Alrededor del mundo en el solsticio de junio.</strong> Borra las lecturas y elige Solsticio de junio. Registra una lectura cada {#}° de latitud de {#}° S a {#}° N ({#} lecturas), sin cambiar la fecha, y luego envíalas a la hoja.",
"<span>B</span>Date":
  "<span>B</span>Fecha",
"<span>C</span>Day of the year":
  "<span>C</span>Día del año",
"<span>D</span>Latitude \\(\\varphi\\) (°)":
  "<span>D</span>Latitud \\(\\varphi\\) (°)",
"<span>E</span>Tilt \\(\\varepsilon\\) (°)":
  "<span>E</span>Inclinación \\(\\varepsilon\\) (°)",
"<span>F</span>Declination \\(\\delta\\) (°)":
  "<span>F</span>Declinación \\(\\delta\\) (°)",
"<span>G</span>Noon Sun altitude (°)":
  "<span>G</span>Altitud del Sol al mediodía (°)",
"<span>H</span>Day length (h)":
  "<span>H</span>Duración del día (h)",
"<span>I</span>Earth to Sun \\(r\\) (AU)":
  "<span>I</span>Tierra al Sol \\(r\\) (UA)",
"<span>J</span>Daily insolation \\(Q\\) (W/m²)":
  "<span>J</span>Insolación diaria \\(Q\\) (W/m²)",
"<span>K</span>\\((1\\ \\text{AU}/r)^2\\)":
  "<span>K</span>\\((1\\ \\text{AU}/r)^2\\)",
"Date, row {#}":
  "Fecha, fila {#}",
"Day of the year, row {#}":
  "Día del año, fila {#}",
"Latitude φ (°), row {#}":
  "Latitud φ (°), fila {#}",
"Tilt ε (°), row {#}":
  "Inclinación ε (°), fila {#}",
"Declination δ (°), row {#}":
  "Declinación δ (°), fila {#}",
"Noon Sun altitude (°), row {#}":
  "Altitud del Sol al mediodía (°), fila {#}",
"Day length (h), row {#}":
  "Duración del día (h), fila {#}",
"Earth to Sun r (AU), row {#}":
  "Tierra al Sol r (UA), fila {#}",
"Daily insolation Q (W/m²), row {#}":
  "Insolación diaria Q (W/m²), fila {#}",
"({#} AU/r)^{#}, row {#}":
  "({#} UA/r)^{#}, fila {#}",
"For the year at Ruston, graph the noon Sun’s altitude against the declination. Find the slope and intercept, and explain both from \\(h_{\\text{noon}} = 90° - \\lvert\\varphi - \\delta\\rvert\\).":
  "Para el año en Ruston, grafica la altitud del Sol al mediodía en función de la declinación. Encuentra la pendiente y la ordenada al origen, y explica ambas con \\(h_{\\text{noon}} = 90° - \\lvert\\varphi - \\delta\\rvert\\).",
"Graph the day length against the day of the year. Which months have the longest and shortest days? Check one reading against \\(\\cos H_0 = -\\tan\\varphi\\tan\\delta\\).":
  "Grafica la duración del día en función del día del año. ¿Qué meses tienen los días más largos y más cortos? Comprueba una lectura con \\(\\cos H_0 = -\\tan\\varphi\\tan\\delta\\).",
"For the year with no tilt, fill in the last column and graph \\(Q\\) against \\((1\\ \\text{AU}/r)^2\\). What should the slope be, from Before the lab {#}? Use your slope to find \\(S_0\\).":
  "Para el año sin inclinación, llena la última columna y grafica \\(Q\\) en función de \\((1\\ \\text{AU}/r)^2\\). ¿Cuál debería ser la pendiente, según Antes del laboratorio {#}? Usa tu pendiente para encontrar \\(S_0\\).",
"Find the yearly swing in \\(Q\\) at Ruston from each series, as ± percent of the middle value, \\(\\pm(Q_{\\max} - Q_{\\min})/(Q_{\\max} + Q_{\\min})\\). How many times bigger is the swing with the tilt than the swing from distance alone? On which dates is \\(Q\\) largest in each series, and on which date is Earth closest to the Sun?":
  "Encuentra la variación anual de \\(Q\\) en Ruston en cada serie, como ± porcentaje del valor medio, \\(\\pm(Q_{\\max} - Q_{\\min})/(Q_{\\max} + Q_{\\min})\\). ¿Cuántas veces mayor es la variación con la inclinación que la variación solo por la distancia? ¿En qué fechas es mayor \\(Q\\) en cada serie, y en qué fecha está la Tierra más cerca del Sol?",
"For the June solstice, graph the noon Sun’s altitude against latitude. At which latitude is the Sun straight overhead at noon? Compare with the declination.":
  "Para el solsticio de junio, grafica la altitud del Sol al mediodía en función de la latitud. ¿En qué latitud está el Sol justo en el cenit al mediodía? Compáralo con la declinación.",
"Still at the June solstice, at which latitudes does the Sun never set, and at which does it never rise? Relate those latitudes to \\(\\varepsilon\\).":
  "Todavía en el solsticio de junio, ¿en qué latitudes el Sol nunca se pone, y en cuáles nunca sale? Relaciona esas latitudes con \\(\\varepsilon\\).",
"Graph \\(Q\\) against latitude at the June solstice. Where is the daily insolation largest? Explain how the North Pole can receive more sunlight per day than the equator, using the day length and the noon altitude at each.":
  "Grafica \\(Q\\) en función de la latitud en el solsticio de junio. ¿Dónde es mayor la insolación diaria? Explica cómo el Polo Norte puede recibir más luz del Sol por día que el ecuador, usando la duración del día y la altitud al mediodía en cada uno.",
"The readouts come from exact formulas, so there is no scatter: repeat a reading and you get the same numbers. The uncertainty is in the model and in the date. Near an equinox, by how much does the declination change from one day to the next? Near a solstice? Which of your readings would change most if your date were one day off? Then list the effects the model leaves out (the Sun’s size, refraction, the atmosphere) and say which way each would change the day length or the sunlight reaching the ground.":
  "Las lecturas vienen de fórmulas exactas, así que no hay dispersión: repite una lectura y obtienes los mismos números. La incertidumbre está en el modelo y en la fecha. Cerca de un equinoccio, ¿cuánto cambia la declinación de un día al siguiente? ¿Y cerca de un solsticio? ¿Cuáles de tus lecturas cambiarían más si tu fecha estuviera desfasada un día? Luego enumera los efectos que el modelo omite (el tamaño del Sol, la refracción, la atmósfera) y di hacia dónde cambiaría cada uno la duración del día o la luz del Sol que llega al suelo.",
"Earth is closest to the Sun in early January. If distance caused the seasons, what season would Australia have in January? What does it actually have, and what does that tell you?":
  "La Tierra está más cerca del Sol a principios de enero. Si la distancia causara las estaciones, ¿qué estación tendría Australia en enero? ¿Cuál tiene en realidad, y qué te dice eso?",
"The longest day at Ruston is in June, but the warmest weather is usually in July and August. The demo shows sunlight, not temperature. What does the delay tell you about how the oceans and land store heat?":
  "El día más largo en Ruston es en junio, pero el clima más cálido suele ser en julio y agosto. La demo muestra la luz del Sol, no la temperatura. ¿Qué te dice el retraso sobre cómo almacenan calor los océanos y la tierra?",
"At an equinox, Ruston’s daily insolation is only {#}% of the equator’s, though both have {#} hour days. Explain why with a flashlight shining on a tilted sheet of paper.":
  "En un equinoccio, la insolación diaria de Ruston es solo {#}% de la del ecuador, aunque ambos tienen días de {#} horas. Explica por qué con una linterna que ilumina una hoja de papel inclinada.",
"Mars has a tilt of {#}° and an orbital eccentricity of {#}. Find its yearly swing in sunlight from distance alone, as in Analysis {#}. Would you expect the distance effect to matter more on Mars than on Earth?":
  "Marte tiene una inclinación de {#}° y una excentricidad orbital de {#}. Encuentra su variación anual de luz del Sol solo por la distancia, como en el Análisis {#}. ¿Esperarías que el efecto de la distancia importe más en Marte que en la Tierra?",
"Choose Uranus like tilt ({#}°). How far from the celestial equator can the Sun get now? Which latitudes have at least one day without sunset during the year?":
  "Elige Inclinación como la de Urano ({#}°). ¿Qué tan lejos del ecuador celeste puede llegar ahora el Sol? ¿Qué latitudes tienen al menos un día sin puesta de Sol durante el año?",
"Prelab answers, the table copies with their graphs and fits, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de la tabla con sus gráficas y ajustes, las respuestas a las secciones de análisis e incertidumbre, y las respuestas a las preguntas. Identifica los datos simulados.",
"Area":
  "Área",
"Electric field (the flux analogy)":
  "Campo eléctrico (la analogía del flujo)",
"Hour angle of sunset":
  "Ángulo horario de la puesta del Sol",
"Daily mean insolation at the top of the atmosphere":
  "Insolación media diaria en el tope de la atmósfera",
"Largest Q of the year":
  "Mayor Q del año",
"Smallest Q of the year":
  "Menor Q del año",
"Intensity of the sunlight":
  "Intensidad de la luz del Sol",
"Sunlight at {#} AU":
  "Luz del Sol a {#} UA",
"Declination of the Sun":
  "Declinación del Sol",
"Eccentricity of Earth's orbit":
  "Excentricidad de la órbita de la Tierra",
"Tilt of Earth's axis":
  "Inclinación del eje de la Tierra",
"Altitude of the Sun at noon":
  "Altitud del Sol al mediodía",
"Latitude":
  "Latitud",
"Distance from Earth to the Sun":
  "Distancia de la Tierra al Sol",
"Angle of the sunlight from straight up":
  "Ángulo de la luz del Sol respecto a la vertical",
"Reasons for Seasons":
  "Las razones de las estaciones"
});
