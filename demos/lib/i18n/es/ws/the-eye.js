/* ws/the-eye in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/the-eye', {
"Eye":
  "Ojo",
"Glasses (D)":
  "Lentes (D)",
"Object distance (cm)":
  "Distancia del objeto (cm)",
"Seen":
  "Se ve",
"Blur spot (mm)":
  "Mancha de desenfoque (mm)",
"Near point (cm)":
  "Punto cercano (cm)",
"Far point (cm)":
  "Punto lejano (cm)",
"Power the eye uses (D)":
  "Potencia que usa el ojo (D)",
"Image behind the lens (cm)":
  "Imagen detrás del cristalino (cm)",
"For distance (D)":
  "Para ver de lejos (D)",
"For reading at {#} cm (D)":
  "Para leer a {#} cm (D)",
"The Eye | VirtualDemos":
  "El ojo | VirtualDemos",
"The Eye":
  "El ojo",
"<strong>Setups in the demo:</strong> Normal eye, near point; Nearsighted (Example {#}); Nearsighted, with glasses; Farsighted (Example {#}); Farsighted, with glasses; Older eye, reading.":
  "<strong>Configuraciones en la demo:</strong> Ojo normal, punto cercano; Miope (Ejemplo {#}); Miope, con lentes; Hipermétrope (Ejemplo {#}); Hipermétrope, con lentes; Ojo mayor, leyendo.",
"<strong>Using the demo.</strong> An eye looks at an object, with or without glasses. Eye chooses a normal, nearsighted, farsighted or older eye. Object distance from the eye moves the object from {#} cm to {#} m on a log scale, and then far away (arrow keys on the picture move it too). Glasses: Wear glasses, Power of the glasses, and two buttons that set the prescription for distance or for reading at {#} cm. Readouts say whether the object is seen sharp or blurred (with the size of the blur spot on the retina), the near and far points, the eye’s range of power, the power it uses now, where the image forms, and the two prescriptions. Blind hides whether it is sharp, the power used, the image and the prescriptions.":
  "<strong>Uso de la demo.</strong> Un ojo mira un objeto, con o sin lentes. Ojo elige un ojo normal, miope, hipermétrope o mayor. Distancia del objeto al ojo mueve el objeto de {#} cm a {#} m en escala logarítmica, y luego muy lejos (las flechas sobre la imagen también lo mueven). Lentes: Usar lentes, Potencia de los lentes, y dos botones que fijan la receta para ver de lejos o para leer a {#} cm. Las lecturas dicen si el objeto se ve nítido o borroso (con el tamaño de la mancha de desenfoque en la retina), los puntos cercano y lejano, el intervalo de potencia del ojo, la potencia que usa ahora, dónde se forma la imagen y las dos recetas. A ciegas oculta si se ve nítido, la potencia usada, la imagen y las recetas.",
"<strong>What the demo models.</strong> The eye is one thin lens with the retina {#} cm behind it (OpenStax Example {#}); it can change its power over a range set by its near and far points. The normal eye sees from {#} cm to infinity; the nearsighted eye’s far point is {#} cm (Example {#}), the farsighted eye’s near point is {#} m (Example {#}), and the older eye’s near point is {#} m with only {#} D of accommodation (chosen). Glasses are a thin lens {#} cm in front of the eye. The blur spot is the size of the out of focus image of a point, for a {#} mm pupil. Simulated data.":
  "<strong>Qué modela la demo.</strong> El ojo es una sola lente delgada con la retina {#} cm detrás de ella (Ejemplo {#} de OpenStax); puede cambiar su potencia dentro de un intervalo fijado por sus puntos cercano y lejano. El ojo normal ve desde {#} cm hasta el infinito; el punto lejano del ojo miope está a {#} cm (Ejemplo {#}), el punto cercano del ojo hipermétrope a {#} m (Ejemplo {#}), y el punto cercano del ojo mayor a {#} m con solo {#} D de acomodación (elegido). Los lentes son una lente delgada a {#} cm delante del ojo. La mancha de desenfoque es el tamaño de la imagen desenfocada de un punto, para una pupila de {#} mm. Datos simulados.",
"Use the thin lens equation to find how the eye focuses at different distances, and design and test glasses for nearsighted, farsighted and older eyes.":
  "Usa la ecuación de la lente delgada para encontrar cómo enfoca el ojo a distintas distancias, y diseña y prueba lentes para ojos miopes, hipermétropes y mayores.",
"The eye’s lens (with the cornea) forms a real image on the retina, a fixed distance \\(d_i\\) behind it. For an object at \\(d_o\\) the power needed is":
  "El cristalino del ojo (con la córnea) forma una imagen real en la retina, a una distancia fija \\(d_i\\) detrás de él. Para un objeto a \\(d_o\\) la potencia necesaria es",
"\\[P = \\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i},\\]":
  "\\[P = \\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i},\\]",
"in diopters (\\(\\mathrm{D} = \\mathrm{m^{-1}}\\)). The eye changes its power by accommodation, from its least power (relaxed, focused on its far point) to its greatest (focused on its near point). A normal eye’s near point is about {#} cm and its far point is at infinity. A nearsighted eye has too much power: its far point is closer than infinity. A farsighted eye has too little: its near point is farther than {#} cm. With age the range of accommodation shrinks.":
  "en dioptrías (\\(\\mathrm{D} = \\mathrm{m^{-1}}\\)). El ojo cambia su potencia por acomodación, desde su menor potencia (relajado, enfocado en su punto lejano) hasta la mayor (enfocado en su punto cercano). El punto cercano de un ojo normal está a unos {#} cm y su punto lejano en el infinito. Un ojo miope tiene demasiada potencia: su punto lejano está más cerca que el infinito. Un ojo hipermétrope tiene muy poca: su punto cercano está más lejos que {#} cm. Con la edad el intervalo de acomodación se reduce.",
"Glasses a distance \\(s\\) in front of the eye form an image the eye can see. To see far objects, a nearsighted eye with far point \\(FP\\) needs glasses that put the image of a far object at its far point:":
  "Unos lentes a una distancia \\(s\\) delante del ojo forman una imagen que el ojo puede ver. Para ver objetos lejanos, un ojo miope con punto lejano \\(FP\\) necesita lentes que pongan la imagen de un objeto lejano en su punto lejano:",
"\\[P_{\\text{far}} = -\\frac{1}{FP - s}.\\]":
  "\\[P_{\\text{far}} = -\\frac{1}{FP - s}.\\]",
"To read at {#} cm, an eye with near point \\(NP\\) needs glasses that put the image of the page at its near point:":
  "Para leer a {#} cm, un ojo con punto cercano \\(NP\\) necesita lentes que pongan la imagen de la página en su punto cercano:",
"\\[P_{\\text{read}} = \\frac{1}{0.25\\ \\mathrm{m} - s} - \\frac{1}{NP - s}.\\]":
  "\\[P_{\\text{read}} = \\frac{1}{0.25\\ \\mathrm{m} - s} - \\frac{1}{NP - s}.\\]",
"With the retina {#} cm behind the lens, find the power a normal eye needs to see an object far away, and one {#} cm away. What is its range of accommodation?":
  "Con la retina {#} cm detrás del cristalino, encuentra la potencia que necesita un ojo normal para ver un objeto muy lejano, y uno a {#} cm. ¿Cuál es su intervalo de acomodación?",
"OpenStax Example {#}: a nearsighted person’s far point is {#} cm. Find the power of glasses worn {#} cm from the eye.":
  "Ejemplo {#} de OpenStax: el punto lejano de una persona miope está a {#} cm. Encuentra la potencia de unos lentes usados a {#} cm del ojo.",
"OpenStax Example {#}: a farsighted person’s near point is {#} m. Find the power of reading glasses worn {#} cm from the eye.":
  "Ejemplo {#} de OpenStax: el punto cercano de una persona hipermétrope está a {#} m. Encuentra la potencia de unos lentes para leer usados a {#} cm del ojo.",
"An older eye has its near point at {#} m and only {#} D of accommodation. What reading glasses does it need? With them on, about how far away can it still see sharply?":
  "Un ojo mayor tiene su punto cercano a {#} m y solo {#} D de acomodación. ¿Qué lentes para leer necesita? Con ellos puestos, ¿hasta qué distancia, aproximadamente, puede seguir viendo nítido?",
"There are no hazards in the simulation. Never look at the Sun, and never wear someone else’s prescription glasses for long.":
  "No hay riesgos en la simulación. Nunca mires al Sol, y nunca uses por mucho tiempo los lentes recetados de otra persona.",
"<strong>Part {#}: the normal eye.</strong> Record the readings with the object far away, and at about {#} m, {#} m, {#} cm, {#} cm, {#} cm and {#} cm.":
  "<strong>Parte {#}: el ojo normal.</strong> Registra las lecturas con el objeto muy lejos, y a unos {#} m, {#} m, {#} cm, {#} cm, {#} cm y {#} cm.",
"<strong>Part {#}: the nearsighted eye.</strong> Without glasses, record with the object far away, at about {#} m and at about {#} cm. Then wear the glasses prescribed for distance and record the same three distances.":
  "<strong>Parte {#}: el ojo miope.</strong> Sin lentes, registra con el objeto muy lejos, a unos {#} m y a unos {#} cm. Luego ponte los lentes recetados para ver de lejos y registra las mismas tres distancias.",
"<strong>Part {#}: the farsighted eye.</strong> Without glasses, record with the object at about {#} cm, {#} m and far away. Then wear the glasses prescribed for reading and record the same three distances.":
  "<strong>Parte {#}: el ojo hipermétrope.</strong> Sin lentes, registra con el objeto a unos {#} cm, {#} m y muy lejos. Luego ponte los lentes recetados para leer y registra las mismas tres distancias.",
"<strong>Part {#}: the older eye.</strong> Without glasses, record at about {#} cm, {#} m and {#} m. Then wear the reading glasses and record at about {#} cm, {#} cm, {#} cm, {#} cm and {#} m.":
  "<strong>Parte {#}: el ojo mayor.</strong> Sin lentes, registra a unos {#} cm, {#} m y {#} m. Luego ponte los lentes para leer y registra a unos {#} cm, {#} cm, {#} cm, {#} cm y {#} m.",
"<strong>Using the virtual apparatus.</strong> The object distance moves in small steps on a log scale, so it may not land on a round number: record the distance the demo shows. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> La distancia del objeto se mueve en pasos pequeños en escala logarítmica, así que puede no caer en un número redondo: registra la distancia que muestra la demo. Envía cada parte a la hoja antes de borrar, para que cada parte tenga su propia copia de la tabla de datos.",
"<span>B</span>Eye":
  "<span>B</span>Ojo",
"<span>C</span>Glasses (D)":
  "<span>C</span>Lentes (D)",
"<span>D</span>Object distance (cm)":
  "<span>D</span>Distancia del objeto (cm)",
"<span>E</span>Seen":
  "<span>E</span>Se ve",
"<span>F</span>Blur spot (mm)":
  "<span>F</span>Mancha de desenfoque (mm)",
"<span>G</span>Near point (cm)":
  "<span>G</span>Punto cercano (cm)",
"<span>H</span>Far point (cm)":
  "<span>H</span>Punto lejano (cm)",
"<span>I</span>Power the eye uses (D)":
  "<span>I</span>Potencia que usa el ojo (D)",
"<span>J</span>Image behind the lens (cm)":
  "<span>J</span>Imagen detrás del cristalino (cm)",
"<span>K</span>For distance (D)":
  "<span>K</span>Para ver de lejos (D)",
"<span>L</span>For reading at {#} cm (D)":
  "<span>L</span>Para leer a {#} cm (D)",
"Eye, row {#}":
  "Ojo, fila {#}",
"Glasses (D), row {#}":
  "Lentes (D), fila {#}",
"Object distance (cm), row {#}":
  "Distancia del objeto (cm), fila {#}",
"Seen, row {#}":
  "Se ve, fila {#}",
"Blur spot (mm), row {#}":
  "Mancha de desenfoque (mm), fila {#}",
"Near point (cm), row {#}":
  "Punto cercano (cm), fila {#}",
"Far point (cm), row {#}":
  "Punto lejano (cm), fila {#}",
"Power the eye uses (D), row {#}":
  "Potencia que usa el ojo (D), fila {#}",
"Image behind the lens (cm), row {#}":
  "Imagen detrás del cristalino (cm), fila {#}",
"For distance (D), row {#}":
  "Para ver de lejos (D), fila {#}",
"For reading at {#} cm (D), row {#}":
  "Para leer a {#} cm (D), fila {#}",
"{#}/d_o ({#}/m), row {#}":
  "{#}/d_o ({#}/m), fila {#}",
"Fill in the last column yourself for the objects the eye sees sharply in Part {#}, using \\(1/d_o = 0\\) for an object far away.":
  "Llena tú mismo la última columna para los objetos que el ojo ve nítidos en la Parte {#}, usando \\(1/d_o = 0\\) para un objeto muy lejano.",
"For Part {#}, graph the power the eye uses against \\(1/d_o\\) for the objects the eye sees sharply. Find the slope and intercept, and compare them with the thin lens equation and \\(d_i = 1.80\\) cm. What happens for objects nearer than the near point?":
  "Para la Parte {#}, grafica la potencia que usa el ojo en función de \\(1/d_o\\) para los objetos que el ojo ve nítidos. Encuentra la pendiente y la ordenada al origen, y compáralas con la ecuación de la lente delgada y \\(d_i = 1.80\\) cm. ¿Qué pasa con los objetos más cercanos que el punto cercano?",
"For Part {#}, explain why the nearsighted eye blurs far objects, and show from your readings that its glasses fix them. Compare the prescription with Example {#}. Can it still see the {#} cm object with the glasses on? Why?":
  "Para la Parte {#}, explica por qué el ojo miope ve borrosos los objetos lejanos, y muestra con tus lecturas que sus lentes lo corrigen. Compara la receta con el Ejemplo {#}. ¿Puede seguir viendo el objeto a {#} cm con los lentes puestos? ¿Por qué?",
"For Part {#}, compare the reading prescription with Example {#}. Explain why the farsighted eye with reading glasses may blur far objects.":
  "Para la Parte {#}, compara la receta para leer con el Ejemplo {#}. Explica por qué el ojo hipermétrope con lentes para leer puede ver borrosos los objetos lejanos.",
"For Part {#}, find the range of distances the older eye sees sharply with its reading glasses. Explain why the range is so short, and why such a person might choose bifocals or progressive lenses.":
  "Para la Parte {#}, encuentra el intervalo de distancias que el ojo mayor ve nítidas con sus lentes para leer. Explica por qué el intervalo es tan corto, y por qué una persona así podría elegir lentes bifocales o progresivos.",
"The model is exact; the blur spot and image distance are geometric results for a thin lens, and an object counts as sharp when its blur spot is under {#} mm (a chosen limit, several cone cells across). A real eye is a thick, multi surface system with aberrations, its pupil changes with the light, and its near and far points vary from person to person and from day to day.":
  "El modelo es exacto; la mancha de desenfoque y la distancia de la imagen son resultados geométricos para una lente delgada, y un objeto cuenta como nítido cuando su mancha de desenfoque es menor que {#} mm (un límite elegido, de varios conos de ancho). Un ojo real es un sistema grueso de varias superficies con aberraciones, su pupila cambia con la luz, y sus puntos cercano y lejano varían de una persona a otra y de un día a otro.",
"Why do glasses for nearsighted people make their eyes look smaller to someone else, and glasses for farsighted people make them look larger?":
  "¿Por qué los lentes para personas miopes hacen que sus ojos se vean más pequeños a otra persona, y los lentes para personas hipermétropes los hacen verse más grandes?",
"A contact lens sits on the eye, with \\(s = 0\\). Would a nearsighted person’s contact lens prescription be stronger or weaker than their glasses prescription? Why?":
  "Un lente de contacto va sobre el ojo, con \\(s = 0\\). ¿La receta de lentes de contacto de una persona miope sería más fuerte o más débil que su receta de anteojos? ¿Por qué?",
"Why can you not see clearly under water without goggles?":
  "¿Por qué no puedes ver con claridad bajo el agua sin goggles?",
"Prelab answers, a Data table copy for each part, the graph and fit for Part {#}, your prescriptions and their checks, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, una copia de la tabla de datos para cada parte, la gráfica y el ajuste de la Parte {#}, tus recetas y sus comprobaciones, y las respuestas a las preguntas. Identifica los datos simulados.",
"Far point distance, the farthest an eye can focus":
  "Distancia del punto lejano, lo más lejos que puede enfocar un ojo",
"Near point distance, the closest an eye can focus":
  "Distancia del punto cercano, lo más cerca que puede enfocar un ojo",
"Power of the lens":
  "Potencia de la lente",
"Power of glasses for far vision":
  "Potencia de los lentes para ver de lejos",
"Power of reading glasses":
  "Potencia de los lentes para leer",
"Distance from the lens to the retina":
  "Distancia del cristalino a la retina",
"Object distance":
  "Distancia del objeto",
"Focal length":
  "Distancia focal",
"Distance of the glasses in front of the eye":
  "Distancia de los lentes delante del ojo"
});
