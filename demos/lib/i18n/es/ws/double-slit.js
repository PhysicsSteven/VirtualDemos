/* ws/double-slit in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/double-slit', {
"Hits":
  "Impactos",
"Cursor B − A (mm)":
  "Cursor B − A (mm)",
"Spacings n":
  "Espaciados n",
"λL/d (mm)":
  "λL/d (mm)",
"Young’s Double Slit | VirtualDemos":
  "La doble rendija de Young | VirtualDemos",
"Young’s Double Slit":
  "La doble rendija de Young",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} and {#} (with §{#}). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} y {#} (con §{#}). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Light, red laser (the setup for this worksheet); Electrons (Jönsson {#} style); Buckyballs (Arndt {#} style, grating); One slit; Which slit detector on.":
  "<strong>Configuraciones en la demo:</strong> Luz, láser rojo (la configuración de esta hoja de trabajo); Electrones (al estilo de Jönsson {#}); Buckybolas (al estilo de Arndt {#}, rejilla); Una rendija; Detector de rendija activado.",
"A source sends photons (or electrons, or C₆₀ molecules) one at a time through two slits of width \\(a\\) whose centers are \\(d\\) apart. Each one is detected at a single point on a screen a distance \\(L\\) away. The histogram beside the screen counts the hits along \\(y\\), the distance from the center of the screen.":
  "Una fuente envía fotones (o electrones, o moléculas de C₆₀) uno a la vez a través de dos rendijas de ancho \\(a\\) cuyos centros están separados \\(d\\). Cada uno se detecta en un solo punto de una pantalla a una distancia \\(L\\). El histograma junto a la pantalla cuenta los impactos a lo largo de \\(y\\), la distancia desde el centro de la pantalla.",
"For photons you set the wavelength \\(\\lambda\\) ({#} to {#} nm), \\(a\\), \\(d\\) and \\(L\\). Any change clears the screen, since old hits came from a different setup. Fit sets the screen range to suit the new pattern.":
  "Para los fotones fijas la longitud de onda \\(\\lambda\\) ({#} a {#} nm), \\(a\\), \\(d\\) y \\(L\\). Cualquier cambio borra la pantalla, ya que los impactos anteriores vinieron de otra configuración. Ajuste fija el intervalo de la pantalla para el nuevo patrón.",
"Measure turns on two cursors, A and B, across the screen and the histogram, with their difference \\(B - A\\). While they are on, the predicted pattern, its marks and the predicted curve are hidden.":
  "Medir activa dos cursores, A y B, a lo ancho de la pantalla y del histograma, con su diferencia \\(B - A\\). Mientras están activos, el patrón predicho, sus marcas y la curva predicha se ocultan.",
"Record reading stores the setup, the number of hits and both cursor positions. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la configuración, el número de impactos y las posiciones de ambos cursores. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"<strong>What the demo models.</strong> A monochromatic plane wave falls on the two slits, and the pattern on the screen is the paraxial Fresnel calculation, which becomes the textbook’s far field formula when \\((d + a)^2/\\lambda L\\) is small (the demo shows this number). Each hit is drawn at random from that pattern, so the histogram has the scatter of real counting data. Slits are drawn enlarged and \\(L\\) is not to scale on the picture. Simulated data.":
  "<strong>Lo que modela la demo.</strong> Una onda plana monocromática incide sobre las dos rendijas, y el patrón en la pantalla es el cálculo paraxial de Fresnel, que se convierte en la fórmula de campo lejano del libro de texto cuando \\((d + a)^2/\\lambda L\\) es pequeño (la demo muestra este número). Cada impacto se sortea al azar de ese patrón, así que el histograma tiene la dispersión de datos de conteo reales. Las rendijas se dibujan ampliadas y \\(L\\) no está a escala en la imagen. Datos simulados.",
"Measure the spacing of the bright fringes of a double slit and show how it depends on the wavelength, the slit separation and the distance to the screen.":
  "Mide el espaciado de las franjas brillantes de una doble rendija y muestra cómo depende de la longitud de onda, de la separación de las rendijas y de la distancia a la pantalla.",
"Light from the two slits reaches a point on the screen by paths that differ by \\(d\\sin\\theta\\), where \\(\\theta\\) is the angle from the straight through direction. Where the difference is a whole number of wavelengths the two waves arrive in step and the screen is bright (§{#}):":
  "La luz de las dos rendijas llega a un punto de la pantalla por caminos que difieren en \\(d\\sin\\theta\\), donde \\(\\theta\\) es el ángulo respecto a la dirección de frente. Donde la diferencia es un número entero de longitudes de onda las dos ondas llegan en fase y la pantalla está brillante (§{#}):",
"\\[d\\sin\\theta = m\\lambda, \\qquad m = 0, \\pm 1, \\pm 2, \\ldots\\]":
  "\\[d\\sin\\theta = m\\lambda, \\qquad m = 0, \\pm 1, \\pm 2, \\ldots\\]",
"and where it is a half number of wavelengths they cancel and the screen is dark. On a screen a distance \\(L\\) away the \\(m\\)th bright fringe is at \\(y_m = L\\tan\\theta_m\\). For small angles \\(\\sin\\theta \\approx \\tan\\theta \\approx y/L\\), so \\(y_m \\approx m\\lambda L/d\\) and neighboring bright fringes are evenly spaced (§{#}):":
  "y donde es un número semientero de longitudes de onda se cancelan y la pantalla está oscura. En una pantalla a una distancia \\(L\\) la \\(m\\)-ésima franja brillante está en \\(y_m = L\\tan\\theta_m\\). Para ángulos pequeños \\(\\sin\\theta \\approx \\tan\\theta \\approx y/L\\), así que \\(y_m \\approx m\\lambda L/d\\) y las franjas brillantes vecinas están igualmente espaciadas (§{#}):",
"\\[\\Delta y = \\frac{\\lambda L}{d}.\\]":
  "\\[\\Delta y = \\frac{\\lambda L}{d}.\\]",
"Each slit also has a width \\(a\\), and its own diffraction pattern multiplies the fringes (§{#}). That envelope is zero where \\(a\\sin\\theta = \\lambda\\), so roughly \\(2d/a - 1\\) bright fringes fit inside the central envelope.":
  "Cada rendija también tiene un ancho \\(a\\), y su propio patrón de difracción multiplica las franjas (§{#}). Esa envolvente es cero donde \\(a\\sin\\theta = \\lambda\\), así que caben aproximadamente \\(2d/a - 1\\) franjas brillantes dentro de la envolvente central.",
"Red light of {#} nm passes through two slits {#} mm apart onto a screen {#} m away. Predict the fringe spacing.":
  "Luz roja de {#} nm pasa por dos rendijas separadas {#} mm hacia una pantalla a {#} m. Predice el espaciado de las franjas.",
"By what factor does the spacing change if the wavelength is halved? If \\(d\\) is doubled? If \\(L\\) is doubled?":
  "¿En qué factor cambia el espaciado si la longitud de onda se reduce a la mitad? ¿Si \\(d\\) se duplica? ¿Si \\(L\\) se duplica?",
"How far apart are bright fringe \\(-3\\) and bright fringe \\(+3\\), in fringe spacings? Why is it better to measure across several fringes than between two neighbors?":
  "¿Qué tan separadas están la franja brillante \\(-3\\) y la franja brillante \\(+3\\), en espaciados de franja? ¿Por qué es mejor medir a lo largo de varias franjas que entre dos vecinas?",
"The slits are {#} mm wide. How many bright fringes do you expect inside the central envelope, and where (in mm from the center) does the envelope first go to zero?":
  "Las rendijas miden {#} mm de ancho. ¿Cuántas franjas brillantes esperas dentro de la envolvente central, y dónde (en mm desde el centro) se anula por primera vez la envolvente?",
"There are no hazards in the simulation. A real laser can damage the eye: never look into the beam or its reflection from a shiny surface.":
  "No hay riesgos en la simulación. Un láser real puede dañar el ojo: nunca mires hacia el haz ni a su reflejo en una superficie brillante.",
"Start from the Light, red laser setup and turn on the measuring cursors. In each part, after you change a setting, fit the screen range (Fit, in the Display fold), then let at least {#} photons land so the fringes are clear. Put cursor A on the center of one bright fringe and cursor B on the center of another several fringes away (bright fringes \\(-3\\) and \\(+3\\) work well, unless fringe {#} is missing) and record a reading. Count the spacings between the two fringes; you will need that number.":
  "Empieza con la configuración Luz, láser rojo y activa los cursores de medición. En cada parte, después de cambiar un ajuste, ajusta el intervalo de la pantalla (Ajuste, en la sección Visualización), luego deja que lleguen al menos {#} fotones para que las franjas se vean claras. Pon el cursor A en el centro de una franja brillante y el cursor B en el centro de otra a varias franjas de distancia (las franjas brillantes \\(-3\\) y \\(+3\\) funcionan bien, a menos que falte la franja {#}) y registra una lectura. Cuenta los espaciados entre las dos franjas; necesitarás ese número.",
"<strong>Part {#}: fringe spacing against wavelength.</strong> Keep \\(a = 0.05\\) mm, \\(d = 0.25\\) mm and \\(L = 1.00\\) m. Measure at \\(\\lambda\\) = {#}, {#}, {#}, {#}, {#}, {#} and {#} nm. Send the readings to the worksheet and clear them.":
  "<strong>Parte {#}: espaciado de franjas en función de la longitud de onda.</strong> Mantén \\(a = 0.05\\) mm, \\(d = 0.25\\) mm y \\(L = 1.00\\) m. Mide con \\(\\lambda\\) = {#}, {#}, {#}, {#}, {#}, {#} y {#} nm. Envía las lecturas a la hoja de trabajo y bórralas.",
"<strong>Part {#}: fringe spacing against slit separation.</strong> At \\(\\lambda = 650\\) nm and \\(L = 1.00\\) m, measure at \\(d\\) = {#}, {#}, {#}, {#}, {#} and {#} mm. Send the readings and clear them.":
  "<strong>Parte {#}: espaciado de franjas en función de la separación de las rendijas.</strong> Con \\(\\lambda = 650\\) nm y \\(L = 1.00\\) m, mide con \\(d\\) = {#}, {#}, {#}, {#}, {#} y {#} mm. Envía las lecturas y bórralas.",
"<strong>Part {#}: fringe spacing against screen distance.</strong> At \\(\\lambda = 650\\) nm and \\(d = 0.25\\) mm, measure at \\(L\\) = {#}, {#}, {#}, {#} and {#} m. Send the readings.":
  "<strong>Parte {#}: espaciado de franjas en función de la distancia a la pantalla.</strong> Con \\(\\lambda = 650\\) nm y \\(d = 0.25\\) mm, mide con \\(L\\) = {#}, {#}, {#}, {#} y {#} m. Envía las lecturas.",
"<strong>Part {#}: the envelope.</strong> Back at the Light, red laser setup, let about {#} photons land and count the bright fringes inside the central envelope. Use a cursor to find where the envelope first goes dark.":
  "<strong>Parte {#}: la envolvente.</strong> De vuelta en la configuración Luz, láser rojo, deja que lleguen unos {#} fotones y cuenta las franjas brillantes dentro de la envolvente central. Usa un cursor para encontrar dónde se oscurece por primera vez la envolvente.",
"<span>F</span>Hits":
  "<span>F</span>Impactos",
"<span>G</span>Cursor B − A (mm)":
  "<span>G</span>Cursor B − A (mm)",
"<span>H</span>Spacings n":
  "<span>H</span>Espaciados n",
"<span>I</span>\\(\\Delta y\\) (mm)":
  "<span>I</span>\\(\\Delta y\\) (mm)",
"<span>K</span>λL/d (mm)":
  "<span>K</span>λL/d (mm)",
"λ (nm), row {#}":
  "λ (nm), fila {#}",
"a (mm), row {#}":
  "a (mm), fila {#}",
"d (mm), row {#}":
  "d (mm), fila {#}",
"Hits, row {#}":
  "Impactos, fila {#}",
"Cursor B − A (mm), row {#}":
  "Cursor B − A (mm), fila {#}",
"Spacings n, row {#}":
  "Espaciados n, fila {#}",
"Δ y (mm), row {#}":
  "Δ y (mm), fila {#}",
"{#}/d ({#}/mm), row {#}":
  "{#}/d ({#}/mm), fila {#}",
"λL/d (mm), row {#}":
  "λL/d (mm), fila {#}",
"Fill in \\(n\\), \\(\\Delta y = (B - A)/n\\), \\(1/d\\) and \\(\\lambda L/d\\) yourself (with \\(\\lambda\\) in mm, \\(\\lambda L/d\\) comes out in mm when \\(L\\) is also in mm).":
  "Llena tú \\(n\\), \\(\\Delta y = (B - A)/n\\), \\(1/d\\) y \\(\\lambda L/d\\) (con \\(\\lambda\\) en mm, \\(\\lambda L/d\\) sale en mm cuando \\(L\\) también está en mm).",
"For Part {#}, graph \\(\\Delta y\\) against \\(\\lambda\\). Is it a straight line through the origin? What should the slope be? Compare the slope with \\(L/d\\).":
  "Para la Parte {#}, grafica \\(\\Delta y\\) en función de \\(\\lambda\\). ¿Es una recta que pasa por el origen? ¿Cuál debería ser la pendiente? Compara la pendiente con \\(L/d\\).",
"For Part {#}, graph \\(\\Delta y\\) against \\(1/d\\). Find the slope and compare it with \\(\\lambda L\\).":
  "Para la Parte {#}, grafica \\(\\Delta y\\) en función de \\(1/d\\). Encuentra la pendiente y compárala con \\(\\lambda L\\).",
"For Part {#}, graph \\(\\Delta y\\) against \\(L\\) and compare the slope with \\(\\lambda/d\\).":
  "Para la Parte {#}, grafica \\(\\Delta y\\) en función de \\(L\\) y compara la pendiente con \\(\\lambda/d\\).",
"Put all three parts on one graph of \\(\\Delta y\\) against \\(\\lambda L/d\\) (in one table copy or by combining your results). What slope and intercept do you expect, and what do you find?":
  "Pon las tres partes en una sola gráfica de \\(\\Delta y\\) en función de \\(\\lambda L/d\\) (en una copia de la tabla o combinando tus resultados). ¿Qué pendiente y qué ordenada al origen esperas, y qué encuentras?",
"For Part {#}, compare your count of bright fringes in the central envelope and the position of the first envelope zero with your predictions from Before the lab question {#}.":
  "Para la Parte {#}, compara tu cuenta de franjas brillantes en la envolvente central y la posición del primer cero de la envolvente con tus predicciones de la pregunta {#} de Antes del laboratorio.",
"You place each cursor by eye on a fringe built from a finite number of random hits, and the cursor moves in steps of {#}/{#} of the screen range. Estimate how far off each cursor could be, and propagate that through \\(\\Delta y = (B - A)/n\\). Explain why a larger \\(n\\) gives a smaller uncertainty in \\(\\Delta y\\), and why more hits help. The single slit envelope also falls across each bright fringe, which pulls the fringe’s peak slightly toward the center: would that make your \\(\\Delta y\\) too large or too small, and is it worse when \\(d/a\\) is large or small? Which part of the experiment would a real laboratory find hardest to measure precisely?":
  "Colocas cada cursor a ojo sobre una franja formada por un número finito de impactos al azar, y el cursor se mueve en pasos de {#}/{#} del intervalo de la pantalla. Estima cuánto podría desviarse cada cursor, y propágalo a través de \\(\\Delta y = (B - A)/n\\). Explica por qué una \\(n\\) mayor da una incertidumbre menor en \\(\\Delta y\\), y por qué ayudan más impactos. La envolvente de una rendija también decae a lo ancho de cada franja brillante, lo que jala el pico de la franja un poco hacia el centro: ¿eso haría tu \\(\\Delta y\\) demasiado grande o demasiado pequeño, y es peor cuando \\(d/a\\) es grande o pequeño? ¿Qué parte del experimento le resultaría más difícil de medir con precisión a un laboratorio real?",
"A single photon lands at one point. Where in the experiment is the interference?":
  "Un solo fotón llega a un punto. ¿Dónde está la interferencia en el experimento?",
"Close one slit (the One slit setup does this for electrons). What happens to the fringes, and why can opening a second slit make some places on the screen darker?":
  "Cierra una rendija (la configuración Una rendija hace esto para los electrones). ¿Qué les pasa a las franjas, y por qué abrir una segunda rendija puede hacer más oscuros algunos lugares de la pantalla?",
"With white light instead of a laser, what would the fringes look like? Which color is nearest the center in the first bright fringe?":
  "Con luz blanca en vez de un láser, ¿cómo se verían las franjas? ¿Qué color queda más cerca del centro en la primera franja brillante?",
"Electrons accelerated through {#} kV have \\(\\lambda = 5.36\\) pm. With \\(d = 1\\ \\mu\\mathrm{m}\\) and \\(L = 0.35\\) m, what fringe spacing do you expect? Check it with the Electrons setup.":
  "Los electrones acelerados a través de {#} kV tienen \\(\\lambda = 5.36\\) pm. Con \\(d = 1\\ \\mu\\mathrm{m}\\) y \\(L = 0.35\\) m, ¿qué espaciado de franjas esperas? Compruébalo con la configuración Electrones.",
"Prelab answers, a Data table copy for each part with its graph and fit, the combined graph against \\(\\lambda L/d\\), your Part {#} count, the uncertainty estimate and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, una copia de la tabla de datos para cada parte con su gráfica y su ajuste, la gráfica combinada en función de \\(\\lambda L/d\\), tu cuenta de la Parte {#}, la estimación de incertidumbre y las respuestas a las preguntas. Identifica los datos simulados.",
"Position of cursor A":
  "Posición del cursor A",
"Position of cursor B":
  "Posición del cursor B",
"Fringe spacing, (B − A)/n":
  "Espaciado de franjas, (B − A)/n",
"Distance from the slits to the screen":
  "Distancia de las rendijas a la pantalla",
"Slit width":
  "Ancho de la rendija",
"Distance between the slit centers":
  "Distancia entre los centros de las rendijas",
"Order of the bright fringe":
  "Orden de la franja brillante",
"Number of fringe spacings between the cursors":
  "Número de espaciados de franja entre los cursores",
"Angle from the straight through direction":
  "Ángulo respecto a la dirección de frente",
"Angle of bright fringe m":
  "Ángulo de la franja brillante m",
"Distance from the center of the screen":
  "Distancia desde el centro de la pantalla",
"Position of bright fringe m":
  "Posición de la franja brillante m",
"Double Slit":
  "Doble rendija"
});
