/* ws/camera in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/camera', {
"f-number N":
  "número f N",
"Object d (cm)":
  "Objeto d (cm)",
"Lens to sensor d_s (mm)":
  "De la lente al sensor d_s (mm)",
"Blur (µm)":
  "Desenfoque (µm)",
"Blur (pixels)":
  "Desenfoque (píxeles)",
"d_i from the lens equation (mm)":
  "d_i según la ecuación de la lente (mm)",
"The Camera | VirtualDemos":
  "La cámara | VirtualDemos",
"The Camera":
  "La cámara",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (the camera) and §{#} (thin lenses). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (la cámara) y §{#} (lentes delgadas). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"The demo opens as the eye. Choose <strong>Camera</strong> under <strong>Instrument</strong> to work with the camera; you can switch back to the eye at any time.":
  "La demo abre como el ojo. Elige <strong>Cámara</strong> en <strong>Instrumento</strong> para trabajar con la cámara; puedes regresar al ojo en cualquier momento.",
"Choose Camera at the top of the panel. Pick the {#} mm lens or the phone camera, the aperture (f-number, {#} mm lens only), the object distance, and the distance from the lens to the sensor. Arrow keys on the picture move the object.":
  "Elige Cámara en la parte superior del panel. Elige la lente de {#} mm o la cámara de teléfono, la apertura (número f, solo para la lente de {#} mm), la distancia al objeto y la distancia de la lente al sensor. Las flechas en la imagen mueven el objeto.",
"The top strip shows the object on a log scale of distance, with the range of distances that are in focus. The enlarged camera below is to scale; the rays come from the point of the object on the axis, and the colored mark on the sensor is the blur spot. The photo on the right is what the sensor records, reduced to fit, with a {#}:{#} crop of the center of the star (one screen pixel per sensor pixel).":
  "La franja superior muestra el objeto en una escala logarítmica de distancia, con el intervalo de distancias que están enfocadas. La cámara ampliada de abajo está a escala; los rayos vienen del punto del objeto sobre el eje, y la marca de color en el sensor es la mancha de desenfoque. La foto de la derecha es lo que registra el sensor, reducida para que quepa, con un recorte {#}:{#} del centro de la estrella (un píxel de pantalla por píxel del sensor).",
"The readouts give the blur spot’s size on the sensor in micrometers and in pixels. Record reading stores the camera, the f-number, the object distance, the lens to sensor distance and the blur; Export to worksheet sends the readings here.":
  "Las lecturas en pantalla dan el tamaño de la mancha de desenfoque en el sensor en micrómetros y en píxeles. Registrar lectura guarda la cámara, el número f, la distancia al objeto, la distancia de la lente al sensor y el desenfoque; Exportar a la hoja envía las lecturas aquí.",
"Blind hides the image distance from the lens equation, the range in focus and the sharp or blurred label, and turns off Autofocus, leaving the blur readings and the photo.":
  "A ciegas oculta la distancia a la imagen según la ecuación de la lente, el intervalo enfocado y la etiqueta de nítida o desenfocada, y desactiva el Enfoque automático, dejando las lecturas de desenfoque y la foto.",
"A single thin lens of focal length \\(f\\) with a round aperture of diameter \\(f/N\\), focused by changing the lens to sensor distance \\(d_s\\). Light from an object point converges to \\(d_i\\) given by the thin lens equation; on a sensor at \\(d_s \\neq d_i\\) it makes a blur spot.":
  "Una sola lente delgada de distancia focal \\(f\\) con una apertura redonda de diámetro \\(f/N\\), enfocada cambiando la distancia de la lente al sensor \\(d_s\\). La luz de un punto del objeto converge en \\(d_i\\) dada por la ecuación de la lente delgada; en un sensor en \\(d_s \\neq d_i\\) forma una mancha de desenfoque.",
"The {#} mm lens has a full frame sensor {#} mm wide with {#} µm pixels. The phone camera has \\(f = 5.00\\) mm, as in the textbook, at f/{#}, with a sensor {#} mm wide and {#} µm pixels. These sensor and aperture values are typical ones, not from the textbook.":
  "La lente de {#} mm tiene un sensor de cuadro completo de {#} mm de ancho con píxeles de {#} µm. La cámara de teléfono tiene \\(f = 5.00\\) mm, como en el libro de texto, a f/{#}, con un sensor de {#} mm de ancho y píxeles de {#} µm. Estos valores de sensor y apertura son valores típicos, no del libro de texto.",
"The picture counts as sharp when the blur spot is at most two pixels across. Aberrations and diffraction are left out, and the photo blurs the scene by about the spot’s size with a smooth blur, not the exact disk.":
  "La foto cuenta como nítida cuando la mancha de desenfoque mide a lo más dos píxeles. Las aberraciones y la difracción se dejan fuera, y la foto desenfoca la escena más o menos el tamaño de la mancha con un desenfoque suave, no el disco exacto.",
"Focus a camera by moving its lens, check the thin lens equation with the distances you find, see why a phone camera needs to move its lens only a few hundredths of a millimeter, and measure how the aperture controls which distances are in focus.":
  "Enfoca una cámara moviendo su lente, comprueba la ecuación de la lente delgada con las distancias que encuentres, ve por qué una cámara de teléfono necesita mover su lente solo unas centésimas de milímetro, y mide cómo la apertura controla qué distancias quedan enfocadas.",
"A camera’s lens makes a real, inverted image of the scene on its sensor. For an object a distance \\(d\\) in front of a thin lens of focal length \\(f\\), the image forms a distance \\(d_i\\) behind it, where":
  "La lente de una cámara forma una imagen real e invertida de la escena en su sensor. Para un objeto a una distancia \\(d\\) delante de una lente delgada de distancia focal \\(f\\), la imagen se forma a una distancia \\(d_i\\) detrás de ella, donde",
"\\[\\frac{1}{d} + \\frac{1}{d_i} = \\frac{1}{f}.\\]":
  "\\[\\frac{1}{d} + \\frac{1}{d_i} = \\frac{1}{f}.\\]",
"For a distant object \\(d_i = f\\), and as the object comes closer \\(d_i\\) grows. The eye focuses by changing its focal length; a camera keeps \\(f\\) and focuses by moving the lens, so that the lens to sensor distance \\(d_s\\) equals \\(d_i\\). A graph of \\(1/d_s\\) against \\(1/d\\) for a focused camera is a straight line of slope \\(-1\\) and intercept \\(1/f\\).":
  "Para un objeto lejano \\(d_i = f\\), y a medida que el objeto se acerca \\(d_i\\) crece. El ojo enfoca cambiando su distancia focal; una cámara mantiene \\(f\\) y enfoca moviendo la lente, de modo que la distancia de la lente al sensor \\(d_s\\) sea igual a \\(d_i\\). Una gráfica de \\(1/d_s\\) en función de \\(1/d\\) para una cámara enfocada es una recta de pendiente \\(-1\\) y ordenada al origen \\(1/f\\).",
"If the sensor is not at the image, the cone of light from each object point meets the sensor as a disk, the <strong>blur spot</strong>. The cone fills the aperture, of diameter \\(A = f/N\\) where \\(N\\) is the <strong>f-number</strong> (written f/{#}, f/{#}, …), and narrows to a point at \\(d_i\\). By similar triangles the blur spot’s diameter on a sensor at \\(d_s\\) is":
  "Si el sensor no está en la imagen, el cono de luz de cada punto del objeto llega al sensor como un disco, la <strong>mancha de desenfoque</strong>. El cono llena la apertura, de diámetro \\(A = f/N\\) donde \\(N\\) es el <strong>número f</strong> (escrito f/{#}, f/{#}, …), y se estrecha hasta un punto en \\(d_i\\). Por triángulos semejantes, el diámetro de la mancha de desenfoque en un sensor en \\(d_s\\) es",
"\\[b = A\\,\\frac{\\lvert d_s - d_i \\rvert}{d_i} = \\frac{f}{N}\\,\\Bigl\\lvert 1 - \\frac{d_s}{d_i} \\Bigr\\rvert.\\]":
  "\\[b = A\\,\\frac{\\lvert d_s - d_i \\rvert}{d_i} = \\frac{f}{N}\\,\\Bigl\\lvert 1 - \\frac{d_s}{d_i} \\Bigr\\rvert.\\]",
"A picture looks sharp as long as \\(b\\) is no bigger than a pixel or two. So a smaller aperture (a larger \\(N\\)) keeps a wider range of distances sharp at once: this range is the <strong>depth of field</strong>. A camera focused at infinity (\\(d_s = f\\)) keeps everything sharp from the <strong>hyperfocal distance</strong> \\(H \\approx f^2/(Nb_{\\max})\\) out to infinity, where \\(b_{\\max}\\) is the largest acceptable blur.":
  "Una foto se ve nítida siempre que \\(b\\) no sea mayor que uno o dos píxeles. Así que una apertura más pequeña (un \\(N\\) mayor) mantiene nítido a la vez un intervalo más amplio de distancias: este intervalo es la <strong>profundidad de campo</strong>. Una cámara enfocada al infinito (\\(d_s = f\\)) mantiene todo nítido desde la <strong>distancia hiperfocal</strong> \\(H \\approx f^2/(Nb_{\\max})\\) hasta el infinito, donde \\(b_{\\max}\\) es el mayor desenfoque aceptable.",
"The textbook’s example: a phone lens with \\(f = 5\\) mm focuses a selfie at {#} cm at \\(d_i = 5.05\\) mm and a person {#} m away at {#} mm. The whole range of focus is a few hundredths of a millimeter.":
  "El ejemplo del libro de texto: una lente de teléfono con \\(f = 5\\) mm enfoca una selfie a {#} cm en \\(d_i = 5.05\\) mm y a una persona a {#} m en {#} mm. Todo el intervalo de enfoque es de unas centésimas de milímetro.",
"The {#} mm lens photographs an object {#} m away. Where must the sensor be? How far has the lens moved from its position for a distant object?":
  "La lente de {#} mm fotografía un objeto a {#} m. ¿Dónde debe estar el sensor? ¿Cuánto se ha movido la lente desde su posición para un objeto lejano?",
"The {#} mm lens is focused on a distant object (\\(d_s = 50.000\\) mm) at f/{#}, and the object is moved to {#} m. Predict the blur spot’s diameter in micrometers and in pixels ({#} µm each). Is the picture sharp?":
  "La lente de {#} mm está enfocada en un objeto lejano (\\(d_s = 50.000\\) mm) a f/{#}, y el objeto se mueve a {#} m. Predice el diámetro de la mancha de desenfoque en micrómetros y en píxeles (de {#} µm cada uno). ¿Es nítida la foto?",
"Estimate the phone camera’s hyperfocal distance at f/{#} with \\(b_{\\max}\\) = {#} pixels = {#} µm.":
  "Estima la distancia hiperfocal de la cámara de teléfono a f/{#} con \\(b_{\\max}\\) = {#} píxeles = {#} µm.",
"Never point a camera, or look through any lens, at the Sun. The simulation has no hazards.":
  "Nunca apuntes una cámara, ni mires a través de ninguna lente, hacia el Sol. La simulación no tiene peligros.",
"<strong>Part {#}: focusing the {#} mm lens.</strong> At f/{#}, for objects at about {#}, {#}, {#}, {#}, {#} and {#} m and far away, adjust the lens to sensor distance until the blur spot is as small as you can make it, and record.":
  "<strong>Parte {#}: enfoque de la lente de {#} mm.</strong> A f/{#}, para objetos a unos {#}, {#}, {#}, {#}, {#} y {#} m y muy lejos, ajusta la distancia de la lente al sensor hasta que la mancha de desenfoque sea lo más pequeña que puedas lograr, y registra.",
"<strong>Part {#}: focusing the phone camera.</strong> Do the same with the phone camera for objects at about {#}, {#}, {#} and {#} m and far away.":
  "<strong>Parte {#}: enfoque de la cámara de teléfono.</strong> Haz lo mismo con la cámara de teléfono para objetos a unos {#}, {#}, {#} y {#} m y muy lejos.",
"<strong>Part {#}: a fixed focus phone.</strong> Set the phone’s lens to sensor distance to {#} mm, as for a distant object, and leave it there. Record the blur with the object at about {#}, {#}, {#}, {#}, {#} and {#} m and far away.":
  "<strong>Parte {#}: un teléfono de enfoque fijo.</strong> Fija la distancia de la lente al sensor del teléfono en {#} mm, como para un objeto lejano, y déjala ahí. Registra el desenfoque con el objeto a unos {#}, {#}, {#}, {#}, {#} y {#} m y muy lejos.",
"<strong>Part {#}: aperture and depth of field.</strong> With the {#} mm lens at f/{#}, focus on an object {#} m away and leave the focus there. Move the object to {#} m and record the blur at f/{#}, f/{#}, f/{#} and f/{#}.":
  "<strong>Parte {#}: apertura y profundidad de campo.</strong> Con la lente de {#} mm a f/{#}, enfoca un objeto a {#} m y deja el enfoque ahí. Mueve el objeto a {#} m y registra el desenfoque a f/{#}, f/{#}, f/{#} y f/{#}.",
"<strong>Using the virtual apparatus.</strong> Turn Blind on before you start; it also turns Autofocus off, so focus by hand by watching the blur readout and the {#}:{#} crop. The object distance moves in small steps on a log scale, so it may not land on a round number: record the distance the demo shows. Send each part’s readings to the worksheet, then clear them before the next part; each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> Activa A ciegas antes de empezar; también desactiva el Enfoque automático, así que enfoca a mano observando la lectura de desenfoque y el recorte {#}:{#}. La distancia al objeto se mueve en pasos pequeños en una escala logarítmica, así que puede no caer en un número redondo: registra la distancia que muestra la demo. Envía las lecturas de cada parte a la hoja de trabajo, y luego bórralas antes de la siguiente parte; cada parte tiene su propia copia de la tabla de datos.",
"<span>B</span>Camera":
  "<span>B</span>Cámara",
"<span>C</span>f-number \\(N\\)":
  "<span>C</span>número f \\(N\\)",
"<span>D</span>Object \\(d\\) (cm)":
  "<span>D</span>Objeto \\(d\\) (cm)",
"<span>E</span>Lens to sensor \\(d_s\\) (mm)":
  "<span>E</span>De la lente al sensor \\(d_s\\) (mm)",
"<span>F</span>Blur (µm)":
  "<span>F</span>Desenfoque (µm)",
"<span>G</span>Blur (pixels)":
  "<span>G</span>Desenfoque (píxeles)",
"<span>J</span>\\(d_i\\) from the lens equation (mm)":
  "<span>J</span>\\(d_i\\) según la ecuación de la lente (mm)",
"Camera, row {#}":
  "Cámara, fila {#}",
"f-number N, row {#}":
  "número f N, fila {#}",
"Object d (cm), row {#}":
  "Objeto d (cm), fila {#}",
"Lens to sensor d_s (mm), row {#}":
  "De la lente al sensor d_s (mm), fila {#}",
"Blur (µm), row {#}":
  "Desenfoque (µm), fila {#}",
"Blur (pixels), row {#}":
  "Desenfoque (píxeles), fila {#}",
"{#}/d ({#}/m), row {#}":
  "{#}/d ({#}/m), fila {#}",
"{#}/d_s ({#}/m), row {#}":
  "{#}/d_s ({#}/m), fila {#}",
"d_i from the lens equation (mm), row {#}":
  "d_i según la ecuación de la lente (mm), fila {#}",
"{#}/N, row {#}":
  "{#}/N, fila {#}",
"Use \\(1/d = 0\\) for an object far away. Fill in the last column yourself for Part {#}.":
  "Usa \\(1/d = 0\\) para un objeto muy lejano. Llena tú mismo la última columna para la Parte {#}.",
"For Part {#}, graph \\(1/d_s\\) against \\(1/d\\). Find the slope and intercept, and from the intercept the focal length. Is the slope \\(-1\\)? How far does the lens move between focusing far away and at {#} cm?":
  "Para la Parte {#}, grafica \\(1/d_s\\) en función de \\(1/d\\). Encuentra la pendiente y la ordenada al origen, y a partir de la ordenada al origen la distancia focal. ¿Es la pendiente \\(-1\\)? ¿Cuánto se mueve la lente entre enfocar muy lejos y a {#} cm?",
"For Part {#}, compare your \\(d_s\\) at {#} cm and at {#} m with the textbook’s {#} mm and {#} mm. What is the phone lens’s whole focusing travel from {#} cm to far away, and how does it compare with the {#} mm lens’s travel over the same range? Explain the difference using the lens equation.":
  "Para la Parte {#}, compara tu \\(d_s\\) a {#} cm y a {#} m con los {#} mm y {#} mm del libro de texto. ¿Cuál es todo el recorrido de enfoque de la lente del teléfono de {#} cm a muy lejos, y cómo se compara con el recorrido de la lente de {#} mm en el mismo intervalo? Explica la diferencia usando la ecuación de la lente.",
"For Part {#}, compute \\(b\\) for each reading from the formula in the Background and compare with the demo’s blur. From which distance outward is the picture sharp (blur at most {#} pixels)? Compare with your estimate of the hyperfocal distance.":
  "Para la Parte {#}, calcula \\(b\\) para cada lectura con la fórmula de la sección Fondo y compárala con el desenfoque de la demo. ¿A partir de qué distancia hacia afuera es nítida la foto (desenfoque de a lo más {#} píxeles)? Compara con tu estimación de la distancia hiperfocal.",
"For Part {#}, graph the blur against \\(1/N\\). Is the blur proportional to the aperture diameter \\(A = f/N\\)? Which f-numbers make the object at {#} m sharp while the camera is focused at {#} m?":
  "Para la Parte {#}, grafica el desenfoque en función de \\(1/N\\). ¿Es el desenfoque proporcional al diámetro de la apertura \\(A = f/N\\)? ¿Qué números f hacen nítido el objeto a {#} m mientras la cámara está enfocada a {#} m?",
"Is the textbook right that a phone camera can keep its sensor in one place? Use Part {#} to say for which distances that works with this sensor, and what a phone must do to take a sharp selfie.":
  "¿Tiene razón el libro de texto en que una cámara de teléfono puede mantener su sensor en un solo lugar? Usa la Parte {#} para decir para qué distancias funciona eso con este sensor, y qué debe hacer un teléfono para tomar una selfie nítida.",
"The lens to sensor distance moves in steps of {#} µm for the {#} mm lens and {#} µm for the phone, so a hand focused \\(d_s\\) is within half a step of the best one, and the smallest blur you can reach is not quite zero. The demo’s blur is exact for its thin lens; a real lens has aberrations and diffraction, which make a blur spot of a few micrometers even in perfect focus (at f/{#} diffraction alone gives a spot about {#} µm across), so real cameras cannot use very small apertures to make everything sharp.":
  "La distancia de la lente al sensor se mueve en pasos de {#} µm para la lente de {#} mm y de {#} µm para el teléfono, así que una \\(d_s\\) enfocada a mano está a menos de medio paso de la mejor, y el menor desenfoque que puedes alcanzar no es exactamente cero. El desenfoque de la demo es exacto para su lente delgada; una lente real tiene aberraciones y difracción, que producen una mancha de desenfoque de unos micrómetros incluso con enfoque perfecto (a f/{#} la difracción sola da una mancha de unos {#} µm de diámetro), así que las cámaras reales no pueden usar aperturas muy pequeñas para hacer todo nítido.",
"Why does a camera move its lens away from the sensor to focus on a nearby object, while the eye makes its lens fatter?":
  "¿Por qué una cámara aleja su lente del sensor para enfocar un objeto cercano, mientras que el ojo hace su cristalino más grueso?",
"A camera cannot focus on an object closer than its focal length. Why not, using the lens equation?":
  "Una cámara no puede enfocar un objeto más cercano que su distancia focal. ¿Por qué no, usando la ecuación de la lente?",
"Portrait photographers use a large aperture (small \\(N\\)) to blur the background. Explain with your Part {#} results.":
  "Los fotógrafos de retrato usan una apertura grande (\\(N\\) pequeño) para desenfocar el fondo. Explica con tus resultados de la Parte {#}.",
"A {#} mm frame at {#} µm per pixel has {#} pixels across, while the phone’s sensor has {#} across at {#} µm. Which camera’s blur limit, in micrometers, is stricter, and how does that affect its depth of field?":
  "Un cuadro de {#} mm a {#} µm por píxel tiene {#} píxeles a lo ancho, mientras que el sensor del teléfono tiene {#} a lo ancho a {#} µm. ¿El límite de desenfoque de qué cámara, en micrómetros, es más estricto, y cómo afecta eso su profundidad de campo?",
"The phone in Part {#} needs to move its lens by only a few hundredths of a millimeter. Why does such a short focal length make focusing so easy?":
  "El teléfono de la Parte {#} necesita mover su lente solo unas centésimas de milímetro. ¿Por qué una distancia focal tan corta hace tan fácil el enfoque?",
"Answers to Before the lab, a copy of the Data table for each part, the graph and fit for Part {#}, the comparisons for Parts {#} to {#}, and answers to the questions. Identify simulated data.":
  "Respuestas a Antes del laboratorio, una copia de la tabla de datos para cada parte, la gráfica y el ajuste de la Parte {#}, las comparaciones de las Partes {#} a {#}, y respuestas a las preguntas. Identifica los datos simulados.",
"Aperture diameter, f/N":
  "Diámetro de la apertura, f/N",
"Hyperfocal distance":
  "Distancia hiperfocal",
"f-number: focal length over aperture diameter":
  "número f: distancia focal entre diámetro de la apertura",
"Diameter of the blur spot on the sensor":
  "Diámetro de la mancha de desenfoque en el sensor",
"Largest acceptable blur spot":
  "Mayor mancha de desenfoque aceptable",
"Object distance":
  "Distancia al objeto",
"Image distance, from the thin lens equation":
  "Distancia a la imagen, según la ecuación de la lente delgada",
"Lens to sensor distance":
  "Distancia de la lente al sensor",
"Focal length":
  "Distancia focal",
"The Eye (Camera)":
  "El ojo (Cámara)"
});
