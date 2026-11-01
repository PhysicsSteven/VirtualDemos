/* ws/holography in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/holography', {
"Periods N":
  "Periodos N",
"Span Δ x (μm)":
  "Intervalo Δ x (μm)",
"{#}/sin(θ/{#}) (no unit)":
  "{#}/sin(θ/{#}) (sin unidades)",
"θ_im (°)":
  "θ_im (°)",
"sinθ_im (no unit)":
  "sinθ_im (sin unidades)",
"Image z (mm)":
  "z de la imagen (mm)",
"Holography: Fringes and Images | VirtualDemos":
  "Holografía: franjas e imágenes | VirtualDemos",
"Holography: Fringes and Images":
  "Holografía: franjas e imágenes",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (with §{#} and §{#}). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (con §{#} y §{#}). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Two beams; Record a point (Record view); Plane wave hologram; Virtual image; Real image; Another color (Reconstruct view).":
  "<strong>Configuraciones en la demo:</strong> Dos haces; Registrar un punto (vista Registrar); Holograma de onda plana; Imagen virtual; Imagen real; Otro color (vista Reconstruir).",
"<strong>Record view.</strong> A reference beam (a plane wave at angle \\(\\theta_r\\) to the plate’s normal) and the light from the object meet on a photographic plate {#} mm wide. The object is a plane wave at angle \\(\\theta_o\\) (light from a mirror), one point or three points. The magnified picture shows the exact light intensity in a {#} μm patch at the plate. The microscope shows the developed plate and the intensity \\(I(x)\\) that fell on it. Its two cursors read to {#} μm, and the demo counts the bright fringes from cursor A to cursor B.":
  "<strong>Vista Registrar.</strong> Un haz de referencia (una onda plana a un ángulo \\(\\theta_r\\) respecto a la normal de la placa) y la luz del objeto se encuentran en una placa fotográfica de {#} mm de ancho. El objeto es una onda plana a un ángulo \\(\\theta_o\\) (luz de un espejo), un punto o tres puntos. La imagen ampliada muestra la intensidad exacta de la luz en una zona de {#} μm de la placa. El microscopio muestra la placa revelada y la intensidad \\(I(x)\\) que cayó sobre ella. Sus dos cursores leen con resolución de {#} μm, y la demo cuenta las franjas brillantes del cursor A al cursor B.",
"<strong>Reconstruct view.</strong> The developed plate, with the object gone, is lit by light of wavelength \\(\\lambda_2\\) from {#} to {#} nm, either along the reference beam or from the other side of the normal. The map shows the light leaving the plate and, on the left, that light traced back to where it seems to come from. A screen (or a camera’s focus) can be put at any \\(z\\) from −{#} to +{#} mm; the readouts give the brightest point on it. A detector with a slit {#}° wide reads how much light leaves the plate at its angle.":
  "<strong>Vista Reconstruir.</strong> La placa revelada, ya sin el objeto, se ilumina con luz de longitud de onda \\(\\lambda_2\\) de {#} a {#} nm, ya sea a lo largo del haz de referencia o desde el otro lado de la normal. El mapa muestra la luz que sale de la placa y, a la izquierda, esa luz trazada hacia atrás hasta donde parece provenir. Se puede poner una pantalla (o el foco de una cámara) en cualquier \\(z\\) de −{#} a +{#} mm; las lecturas dan el punto más brillante sobre ella. Un detector con una rendija de {#}° de ancho lee cuánta luz sale de la placa en su ángulo.",
"Record reading stores the settings with the cursor span and fringe count (Record view) or the wavelength, screen position and detector angle (Reconstruct view). Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda los ajustes con el intervalo entre cursores y la cuenta de franjas (vista Registrar) o la longitud de onda, la posición de la pantalla y el ángulo del detector (vista Reconstruir). Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Blind hides the predicted fringe spacing, beam angles and image positions.":
  "A ciegas oculta el espaciado de franjas predicho, los ángulos de los haces y las posiciones de las imágenes.",
"<strong>What the demo models.</strong> The light is computed exactly in a two dimensional slice: each object point is really a bright line across the slice, so its wave is cylindrical. The plate is thin (it records only the light at its surface) and linear: the developed plate passes an amplitude proportional to the light that fell on it. The reconstructed light is found by splitting the light just past the plate into plane waves and carrying each one to the screen. A real plate is two dimensional, has some thickness and is linear only over part of its range.":
  "<strong>Lo que modela la demo.</strong> La luz se calcula exactamente en un corte bidimensional: cada punto del objeto es en realidad una línea brillante que atraviesa el corte, así que su onda es cilíndrica. La placa es delgada (solo registra la luz en su superficie) y lineal: la placa revelada deja pasar una amplitud proporcional a la luz que cayó sobre ella. La luz reconstruida se obtiene descomponiendo la luz justo después de la placa en ondas planas y llevando cada una a la pantalla. Una placa real es bidimensional, tiene cierto espesor y es lineal solo en parte de su intervalo.",
"Measure how the spacing of the fringes a hologram records depends on the angle between the beams, then light the developed plate again and find where its light goes: the image beam, the virtual and real images, and how they move when the color changes.":
  "Mide cómo depende el espaciado de las franjas que registra un holograma del ángulo entre los haces, luego ilumina de nuevo la placa revelada y encuentra hacia dónde va su luz: el haz de la imagen, las imágenes virtual y real, y cómo se mueven cuando cambia el color.",
"A hologram records the interference of two beams from the same laser: a <strong>reference beam</strong> and the <strong>object beam</strong>, the light scattered by the object (§{#}). Where they overlap, bright and dark fringes form (§{#}). For two plane waves with an angle \\(\\theta\\) between them, the bright fringes are planes that bisect that angle, a distance":
  "Un holograma registra la interferencia de dos haces del mismo láser: un <strong>haz de referencia</strong> y el <strong>haz objeto</strong>, la luz dispersada por el objeto (§{#}). Donde se superponen se forman franjas brillantes y oscuras (§{#}). Para dos ondas planas con un ángulo \\(\\theta\\) entre ellas, las franjas brillantes son planos que bisecan ese ángulo, a una distancia",
"\\[d = \\frac{\\lambda}{2\\sin(\\theta/2)}\\]":
  "\\[d = \\frac{\\lambda}{2\\sin(\\theta/2)}\\]",
"apart. On a plate that the two beams strike at angles \\(\\theta_r\\) and \\(\\theta_o\\) from its normal, the fringes are \\(d = \\lambda/\\lvert\\sin\\theta_r - \\sin\\theta_o\\rvert\\) apart; when the plate bisects the angle (\\(\\theta_r = -\\theta_o = \\theta/2\\)) this is the same formula.":
  "uno de otro. En una placa a la que los dos haces llegan con ángulos \\(\\theta_r\\) y \\(\\theta_o\\) respecto a su normal, las franjas están separadas \\(d = \\lambda/\\lvert\\sin\\theta_r - \\sin\\theta_o\\rvert\\); cuando la placa biseca el ángulo (\\(\\theta_r = -\\theta_o = \\theta/2\\)) esta es la misma fórmula.",
"The developed plate is a grating with that spacing. Lit again by the reference beam alone, it diffracts light into three beams (§{#}): the light that goes straight through (the zero order) and two first orders. One first order is a copy of the object wave: an eye looking into it sees the object where it was, a <strong>virtual image</strong>. The other, the conjugate wave, can come to a focus in front of the plate, a <strong>real image</strong>. For a plate lit at angle \\(\\theta_i\\) with wavelength \\(\\lambda_2\\), a hologram recorded with \\(\\lambda_1\\) sends its image beam to":
  "La placa revelada es una rejilla con ese espaciado. Iluminada de nuevo solo con el haz de referencia, difracta la luz en tres haces (§{#}): la luz que pasa directamente (el orden cero) y dos primeros órdenes. Un primer orden es una copia de la onda del objeto: un ojo que mira hacia él ve el objeto donde estaba, una <strong>imagen virtual</strong>. El otro, la onda conjugada, puede enfocarse delante de la placa, una <strong>imagen real</strong>. Para una placa iluminada a un ángulo \\(\\theta_i\\) con longitud de onda \\(\\lambda_2\\), un holograma registrado con \\(\\lambda_1\\) envía su haz de imagen a",
"\\[\\sin\\theta_\\mathrm{im} = \\sin\\theta_i + \\frac{\\lambda_2}{\\lambda_1}\\left(\\sin\\theta_o - \\sin\\theta_r\\right) = \\sin\\theta_i - \\frac{\\lambda_2}{d}.\\]":
  "\\[\\sin\\theta_\\mathrm{im} = \\sin\\theta_i + \\frac{\\lambda_2}{\\lambda_1}\\left(\\sin\\theta_o - \\sin\\theta_r\\right) = \\sin\\theta_i - \\frac{\\lambda_2}{d}.\\]",
"A point of the object recorded at distance \\(z_0\\) makes curved fringes, a piece of a zone plate. Lit with a different wavelength, the plate bends the light more or less, so the image moves: to a first approximation its distance from the plate becomes \\(z_0\\,\\lambda_1/\\lambda_2\\).":
  "Un punto del objeto registrado a una distancia \\(z_0\\) produce franjas curvas, una parte de una placa zonal. Iluminada con otra longitud de onda, la placa desvía la luz más o menos, así que la imagen se mueve: en primera aproximación su distancia a la placa se vuelve \\(z_0\\,\\lambda_1/\\lambda_2\\).",
"Two beams of {#} nm light meet with {#}° between them. Predict the fringe spacing. What happens to it as the angle between the beams shrinks to zero?":
  "Dos haces de luz de {#} nm se encuentran con {#}° entre ellos. Predice el espaciado de las franjas. ¿Qué le pasa cuando el ángulo entre los haces se reduce a cero?",
"The fringes on a hologram are about a micrometer apart. Why must the plate, the mirrors and the object stay still to a small fraction of a wavelength during the exposure?":
  "Las franjas de un holograma están separadas aproximadamente un micrómetro. ¿Por qué la placa, los espejos y el objeto deben permanecer quietos, hasta una pequeña fracción de longitud de onda, durante la exposición?",
"A plane wave hologram is made with the object beam straight on (\\(\\theta_o = 0\\)) and the reference at \\(\\theta_r = 25°\\), both {#} nm. Predict the fringe spacing and the angles of the three beams that leave the plate when it is lit at {#}° with {#} nm light.":
  "Se hace un holograma de onda plana con el haz objeto de frente (\\(\\theta_o = 0\\)) y la referencia a \\(\\theta_r = 25°\\), ambos de {#} nm. Predice el espaciado de las franjas y los ángulos de los tres haces que salen de la placa cuando se ilumina a {#}° con luz de {#} nm.",
"If the same plate is lit at {#}° with blue light instead, does the image beam turn toward the reference beam or away from it? Explain with the grating equation.":
  "Si la misma placa se ilumina a {#}° con luz azul, ¿el haz de la imagen gira hacia el haz de referencia o se aleja de él? Explícalo con la ecuación de la rejilla.",
"Real holography uses lasers. Never look into a laser beam or its reflection from a mirror or the plate, and keep beams below eye level.":
  "La holografía real usa láseres. Nunca mires hacia un haz láser ni a su reflejo en un espejo o en la placa, y mantén los haces por debajo del nivel de los ojos.",
"<strong>Part {#}: fringe spacing against angle.</strong> Start from the Two beams setup ({#} nm, the plate bisecting the angle between the beams). For angles between the beams of {#}°, {#}°, {#}°, {#}°, {#}° and {#}° (each beam at half the angle, on opposite sides of the normal), zoom the microscope in until the fringes are clear, put cursor A on one bright fringe and cursor B on another about ten fringes away, and record. Send the readings to the worksheet.":
  "<strong>Parte {#}: espaciado de franjas en función del ángulo.</strong> Empieza con la configuración Dos haces ({#} nm, la placa bisecando el ángulo entre los haces). Para ángulos entre los haces de {#}°, {#}°, {#}°, {#}°, {#}° y {#}° (cada haz a la mitad del ángulo, en lados opuestos de la normal), acerca el microscopio hasta que las franjas se vean claras, pon el cursor A en una franja brillante y el cursor B en otra a unas diez franjas, y registra. Envía las lecturas a la hoja de trabajo.",
"<strong>Part {#}: fringe spacing against wavelength.</strong> Clear the readings. With {#}° between the beams, record the fringe spacing the same way with each of the four lasers. Send this run to a new copy of the table.":
  "<strong>Parte {#}: espaciado de franjas en función de la longitud de onda.</strong> Borra las lecturas. Con {#}° entre los haces, registra el espaciado de franjas de la misma manera con cada uno de los cuatro láseres. Envía esta serie a una copia nueva de la tabla.",
"<strong>Part {#}: the image beam against wavelength.</strong> Clear the readings and pick the Plane wave hologram setup (object beam straight on, reference at {#}°, recorded at {#} nm). Light the plate along the reference beam with {#}, {#}, {#}, {#}, {#}, {#} and {#} nm light. Each time find the image beam’s angle: move the detector until its reading is largest (in the middle of the range where it is largest), and record. Send the readings to the worksheet.":
  "<strong>Parte {#}: el haz de la imagen en función de la longitud de onda.</strong> Borra las lecturas y elige la configuración Holograma de onda plana (haz objeto de frente, referencia a {#}°, registrado a {#} nm). Ilumina la placa a lo largo del haz de referencia con luz de {#}, {#}, {#}, {#}, {#}, {#} y {#} nm. Cada vez encuentra el ángulo del haz de la imagen: mueve el detector hasta que su lectura sea máxima (en el centro del intervalo donde es máxima), y registra. Envía las lecturas a la hoja de trabajo.",
"<strong>Part {#}: where the image is.</strong> Clear the readings and pick the Virtual image setup (one point {#} mm from the plate, reference at {#}°, recorded at {#} nm). Light the plate along the reference beam with {#}, {#}, {#}, {#}, {#} and {#} nm light. Each time move the camera focus in steps of {#} mm to where the brightest point is brightest, and record. Then light the plate from the other side with {#} nm light, find where the light comes to a focus in front of the plate the same way, and record. Send the readings to the worksheet.":
  "<strong>Parte {#}: dónde está la imagen.</strong> Borra las lecturas y elige la configuración Imagen virtual (un punto a {#} mm de la placa, referencia a {#}°, registrado a {#} nm). Ilumina la placa a lo largo del haz de referencia con luz de {#}, {#}, {#}, {#}, {#} y {#} nm. Cada vez mueve el foco de la cámara en pasos de {#} mm hasta donde el punto más brillante es más brillante, y registra. Luego ilumina la placa desde el otro lado con luz de {#} nm, encuentra de la misma manera dónde se enfoca la luz delante de la placa, y registra. Envía las lecturas a la hoja de trabajo.",
"<span>C</span>\\(\\lambda_1\\) (nm)":
  "<span>C</span>\\(\\lambda_1\\) (nm)",
"<span>D</span>\\(\\theta\\) (°)":
  "<span>D</span>\\(\\theta\\) (°)",
"<span>E</span>Periods \\(N\\)":
  "<span>E</span>Periodos \\(N\\)",
"<span>F</span>Span \\(\\Delta x\\) (μm)":
  "<span>F</span>Intervalo \\(\\Delta x\\) (μm)",
"<span>H</span>\\(1/\\sin(\\theta/2)\\) (no unit)":
  "<span>H</span>\\(1/\\sin(\\theta/2)\\) (sin unidades)",
"<span>I</span>\\(\\lambda_2\\) (nm)":
  "<span>I</span>\\(\\lambda_2\\) (nm)",
"<span>J</span>\\(\\theta_\\mathrm{im}\\) (°)":
  "<span>J</span>\\(\\theta_\\mathrm{im}\\) (°)",
"<span>K</span>\\(\\sin\\theta_\\mathrm{im}\\) (no unit)":
  "<span>K</span>\\(\\sin\\theta_\\mathrm{im}\\) (sin unidades)",
"<span>L</span>Image \\(z\\) (mm)":
  "<span>L</span>\\(z\\) de la imagen (mm)",
"<span>M</span>\\(1/\\lambda_2\\) ({#}/μm)":
  "<span>M</span>\\(1/\\lambda_2\\) ({#}/μm)",
"λ_1 (nm), row {#}":
  "λ_1 (nm), fila {#}",
"Periods N, row {#}":
  "Periodos N, fila {#}",
"Span Δ x (μm), row {#}":
  "Intervalo Δ x (μm), fila {#}",
"d (μm), row {#}":
  "d (μm), fila {#}",
"{#}/sin(θ/{#}) (no unit), row {#}":
  "{#}/sin(θ/{#}) (sin unidades), fila {#}",
"λ_2 (nm), row {#}":
  "λ_2 (nm), fila {#}",
"θ_im (°), row {#}":
  "θ_im (°), fila {#}",
"sinθ_im (no unit), row {#}":
  "sinθ_im (sin unidades), fila {#}",
"Image z (mm), row {#}":
  "z de la imagen (mm), fila {#}",
"{#}/λ_2 ({#}/μm), row {#}":
  "{#}/λ_2 ({#}/μm), fila {#}",
"\\(\\lambda_1\\) is the wavelength the hologram was recorded with and \\(\\theta\\) the angle between the two beams that made it; \\(N\\) is the number of fringe periods between the cursors; \\(\\lambda_2\\) is the wavelength the plate is lit with, \\(\\theta_\\mathrm{im}\\) the image beam’s angle and \\(z\\) where the image is sharpest. The demo fills the measured columns; work out \\(d = \\Delta x/N\\), \\(1/\\sin(\\theta/2)\\), \\(\\sin\\theta_\\mathrm{im}\\) and \\(1/\\lambda_2\\) yourself. A negative \\(z\\) is behind the plate (a virtual image), a positive \\(z\\) in front of it.":
  "\\(\\lambda_1\\) es la longitud de onda con la que se registró el holograma y \\(\\theta\\) el ángulo entre los dos haces que lo formaron; \\(N\\) es el número de periodos de franjas entre los cursores; \\(\\lambda_2\\) es la longitud de onda con la que se ilumina la placa, \\(\\theta_\\mathrm{im}\\) el ángulo del haz de la imagen y \\(z\\) donde la imagen es más nítida. La demo llena las columnas medidas; calcula tú \\(d = \\Delta x/N\\), \\(1/\\sin(\\theta/2)\\), \\(\\sin\\theta_\\mathrm{im}\\) y \\(1/\\lambda_2\\). Una \\(z\\) negativa está detrás de la placa (una imagen virtual), una \\(z\\) positiva delante de ella.",
"Graph \\(d\\) against \\(1/\\sin(\\theta/2)\\) for Part {#}. From the slope find the wavelength, and compare it with {#} nm.":
  "Grafica \\(d\\) en función de \\(1/\\sin(\\theta/2)\\) para la Parte {#}. A partir de la pendiente encuentra la longitud de onda y compárala con {#} nm.",
"Graph \\(d\\) against \\(\\lambda_1\\) for Part {#}. What slope does the formula in the Background predict at {#}°, and how close is yours?":
  "Grafica \\(d\\) en función de \\(\\lambda_1\\) para la Parte {#}. ¿Qué pendiente predice la fórmula de la sección Fondo a {#}°, y qué tan cerca está la tuya?",
"Graph \\(\\sin\\theta_\\mathrm{im}\\) against \\(\\lambda_2\\) for Part {#}. From the slope find the fringe spacing \\(d\\) recorded on the plate, and compare it with \\(\\lambda_1/\\sin 25°\\). What should the intercept be?":
  "Grafica \\(\\sin\\theta_\\mathrm{im}\\) en función de \\(\\lambda_2\\) para la Parte {#}. A partir de la pendiente encuentra el espaciado de franjas \\(d\\) registrado en la placa, y compáralo con \\(\\lambda_1/\\sin 25°\\). ¿Cuál debería ser la ordenada al origen?",
"Graph the image distance \\(z\\) against \\(1/\\lambda_2\\) for Part {#} (leave out the real image). Compare the slope with \\(-z_0\\lambda_1\\). The simple rule assumes the image beam leaves straight on; it actually leaves at \\(\\sin\\alpha = \\sin\\theta_r(1 - \\lambda_2/\\lambda_1)\\), and ray tracing in the plane of the slice puts the image at \\(z_0(\\lambda_1/\\lambda_2)\\cos^3\\alpha\\). Find \\(\\alpha\\) for {#} nm and say whether this explains the point farthest from your line.":
  "Grafica la distancia de la imagen \\(z\\) en función de \\(1/\\lambda_2\\) para la Parte {#} (omite la imagen real). Compara la pendiente con \\(-z_0\\lambda_1\\). La regla simple supone que el haz de la imagen sale de frente; en realidad sale a \\(\\sin\\alpha = \\sin\\theta_r(1 - \\lambda_2/\\lambda_1)\\), y el trazado de rayos en el plano del corte pone la imagen en \\(z_0(\\lambda_1/\\lambda_2)\\cos^3\\alpha\\). Encuentra \\(\\alpha\\) para {#} nm y di si esto explica el punto más alejado de tu recta.",
"Where did the real image form, and how does its distance compare with the virtual image’s at the same wavelength?":
  "¿Dónde se formó la imagen real, y cómo se compara su distancia con la de la imagen virtual a la misma longitud de onda?",
"The cursors read to {#} μm, but placing them on the peak of a bright fringe is less certain; estimate how far off a cursor could be and what that does to \\(d\\) when you span about ten fringes. The detector’s slit is {#}° wide, so its reading is largest over a small range of angles; use half that range as the uncertainty of \\(\\theta_\\mathrm{im}\\). For the image distance, say how far you could move the focus before the brightest point visibly dimmed.":
  "Los cursores leen con resolución de {#} μm, pero colocarlos en el pico de una franja brillante es menos seguro; estima cuánto podría desviarse un cursor y qué le hace eso a \\(d\\) cuando abarcas unas diez franjas. La rendija del detector mide {#}° de ancho, así que su lectura es máxima en un pequeño intervalo de ángulos; usa la mitad de ese intervalo como la incertidumbre de \\(\\theta_\\mathrm{im}\\). Para la distancia de la imagen, di cuánto podrías mover el foco antes de que el punto más brillante se atenuara visiblemente.",
"Why does making a hologram need a laser, when an ordinary photograph does not?":
  "¿Por qué hacer un holograma requiere un láser, cuando una fotografía ordinaria no?",
"The fringes a point records are curved and get closer together toward one edge of the plate. Use the zoomed microscope to check this and explain it with the angle between the beams at each place.":
  "Las franjas que registra un punto son curvas y se acercan entre sí hacia un borde de la placa. Usa el microscopio ampliado para comprobarlo y explícalo con el ángulo entre los haces en cada lugar.",
"Why does a thin hologram lit with white light show a blurred, rainbow colored image? Use your Part {#} and Part {#} results.":
  "¿Por qué un holograma delgado iluminado con luz blanca muestra una imagen borrosa con colores de arcoíris? Usa tus resultados de la Parte {#} y la Parte {#}.",
"Why is the reference beam brought in at an angle instead of straight on? Think about where the three beams leaving the plate go.":
  "¿Por qué el haz de referencia entra en ángulo en vez de hacerlo de frente? Piensa en hacia dónde van los tres haces que salen de la placa.",
"Prelab answers, the table copies with their graphs and fits, the wavelength and fringe spacing found from your slopes with uncertainties and comparisons, the image distances and the real image, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de las tablas con sus gráficas y ajustes, la longitud de onda y el espaciado de franjas obtenidos de tus pendientes con incertidumbres y comparaciones, las distancias de las imágenes y la imagen real, y las respuestas a las preguntas. Identifica los datos simulados.",
"Intensity of the light on the plate":
  "Intensidad de la luz en la placa",
"Number of fringe periods between the cursors":
  "Número de periodos de franjas entre los cursores",
"Direction the image beam actually leaves in":
  "Dirección en la que sale realmente el haz de la imagen",
"Fringe spacing":
  "Espaciado de franjas",
"Wavelength the hologram was recorded with":
  "Longitud de onda con la que se registró el holograma",
"Wavelength of the light that lights the developed plate":
  "Longitud de onda de la luz que ilumina la placa revelada",
"Angle between the two beams":
  "Ángulo entre los dos haces",
"Angle of the light that lights the developed plate":
  "Ángulo de la luz que ilumina la placa revelada",
"Angle of the image beam":
  "Ángulo del haz de la imagen",
"Angle of the object beam from the plate's normal":
  "Ángulo del haz objeto respecto a la normal de la placa",
"Angle of the reference beam from the plate's normal":
  "Ángulo del haz de referencia respecto a la normal de la placa",
"Position across the plate (Δx: span between the cursors)":
  "Posición a lo largo de la placa (Δx: intervalo entre los cursores)",
"Distance from the plate along its normal":
  "Distancia a la placa a lo largo de su normal",
"Distance of an object point from the plate when recorded":
  "Distancia de un punto del objeto a la placa al registrarlo",
"Holography":
  "Holografía"
});
