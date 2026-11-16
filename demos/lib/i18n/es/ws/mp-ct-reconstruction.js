/* ws/mp-ct-reconstruction in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/mp-ct-reconstruction', {
"b (simple backprojection)":
  "b (retroproyección simple)",
"Filter":
  "Filtro",
"Bin width Δs (mm)":
  "Ancho de celda Δs (mm)",
"Wire FWHM (mm)":
  "FWHM del alambre (mm)",
"FWHM / Δs":
  "FWHM / Δs",
"Views K":
  "Vistas K",
"Views the sampling rule asks for":
  "Vistas que pide la regla de muestreo",
"Error in uniform tissue, RMS (HU)":
  "Error en tejido uniforme, RMS (HU)",
"Photons per bin per view N₀":
  "Fotones por celda por vista N₀",
"Relative dose":
  "Dosis relativa",
"ROI mean (HU)":
  "Media de la ROI (HU)",
"ROI SD (HU)":
  "DE de la ROI (HU)",
"CT Image Reconstruction: From Projections to an Image | VirtualDemos":
  "Reconstrucción de imágenes de TC: de las proyecciones a una imagen | VirtualDemos",
"CT Image Reconstruction: From Projections to an Image":
  "Reconstrucción de imágenes de TC: de las proyecciones a una imagen",
"<strong>Setups in the demo:</strong> Head, filtered backprojection; Head, simple backprojection; Wire, simple backprojection; Wire, filtered: the point spread; Too few views; Only {#}° of angles; Resolution rods, {#} mm bins; Resolution rods, {#} mm bins; Low dose water; Low dose, Hann filter. This worksheet uses the Wire, simple backprojection; Wire, filtered: the point spread; Too few views; Only {#}° of angles; and Low dose water setups.":
  "<strong>Configuraciones en la demostración:</strong> Cabeza, retroproyección filtrada; Cabeza, retroproyección simple; Alambre, retroproyección simple; Alambre, filtrado: la dispersión de un punto; Muy pocas vistas; Solo {#}° de ángulos; Barras de resolución, celdas de {#} mm; Barras de resolución, celdas de {#} mm; Agua con dosis baja; Dosis baja, filtro Hann. Esta hoja de trabajo usa las configuraciones Alambre, retroproyección simple; Alambre, filtrado: la dispersión de un punto; Muy pocas vistas; Solo {#}° de ángulos; y Agua con dosis baja.",
"The picture has three panes. <strong>Scanner</strong> shows the X-ray tube and the detector on opposite sides of the phantom, the parallel rays between them, and the projection the detector measures in the view shown. <strong>Sinogram</strong> stacks every view’s projection as one row, from the first angle at the top to the last at the bottom. <strong>Image</strong> is the reconstruction.":
  "La imagen tiene tres paneles. <strong>Escáner</strong> muestra el tubo de rayos X y el detector en lados opuestos del maniquí, los rayos paralelos entre ellos y la proyección que mide el detector en la vista mostrada. <strong>Sinograma</strong> apila la proyección de cada vista como una fila, del primer ángulo arriba al último abajo. <strong>Imagen</strong> es la reconstrucción.",
"<strong>Scan</strong> takes the views one after another, slowed down so you can watch: each view adds a row to the sinogram and a smear across the image. Once a scan is done, changing any control recomputes the whole scan at once; <strong>Scan again</strong> repeats it with new photon noise.":
  "<strong>Escanear</strong> toma las vistas una tras otra, ralentizadas para que puedas observarlas: cada vista agrega una fila al sinograma y una mancha a lo largo de la imagen. Una vez terminado un escaneo, al cambiar cualquier control se recalcula todo el escaneo de una vez; <strong>Escanear de nuevo</strong> lo repite con un nuevo ruido de fotones.",
"The controls beside the picture choose the phantom, the reconstruction (<strong>Simple backprojection</strong> or <strong>Filtered backprojection</strong>, with the <strong>Filter</strong>), the scan (<strong>Views</strong>, <strong>Angular range</strong>, <strong>Detector bin width</strong>, <strong>Photons per bin per view</strong>, <strong>Photon noise</strong>) and how you look at the image (<strong>Display window</strong>, <strong>Region of interest</strong>, <strong>Profile line height</strong>). Click a slider’s number to type an exact value.":
  "Los controles junto a la imagen eligen el maniquí, la reconstrucción (<strong>Retroproyección simple</strong> o <strong>Retroproyección filtrada</strong>, con el <strong>Filtro</strong>), el escaneo (<strong>Vistas</strong>, <strong>Intervalo angular</strong>, <strong>Ancho de celda del detector</strong>, <strong>Fotones por celda por vista</strong>, <strong>Ruido de fotones</strong>) y cómo ves la imagen (<strong>Ventana de visualización</strong>, <strong>Región de interés</strong>, <strong>Altura de la línea de perfil</strong>). Haz clic en el número de un control deslizante para escribir un valor exacto.",
"Above the image, <strong>Reconstruction</strong>, <strong>Phantom</strong> and <strong>Difference</strong> switch what the image pane shows; <strong>+</strong> and <strong>−</strong> zoom about its center and <strong>Reset view</strong> goes back. Click or drag on the sinogram to choose the view shown on the scanner and on the graph.":
  "Sobre la imagen, <strong>Reconstrucción</strong>, <strong>Maniquí</strong> y <strong>Diferencia</strong> cambian lo que muestra el panel de la imagen; <strong>+</strong> y <strong>−</strong> acercan y alejan respecto a su centro y <strong>Restablecer vista</strong> regresa al inicio. Haz clic o arrastra sobre el sinograma para elegir la vista mostrada en el escáner y en la gráfica.",
"The graph shows the <strong>Projection</strong> of the view shown (with the filtered projection), a <strong>Profile</strong> along the dashed line across the image, or the <strong>Filter</strong> against spatial frequency.":
  "La gráfica muestra la <strong>Proyección</strong> de la vista mostrada (con la proyección filtrada), un <strong>Perfil</strong> a lo largo de la línea discontinua sobre la imagen, o el <strong>Filtro</strong> frente a la frecuencia espacial.",
"<strong>Record reading</strong> stores the readouts (one row), or, while the graph shows Profile, the profile at evenly spaced points to the right of the image’s center (one row each). Export to worksheet sends the readings to the Data tables. Clear starts a new series.":
  "<strong>Registrar lectura</strong> guarda las lecturas (una fila) o, mientras la gráfica muestra el Perfil, el perfil en puntos igualmente espaciados a la derecha del centro de la imagen (una fila cada uno). Exportar a la hoja de trabajo envía las lecturas a las tablas de datos. Borrar inicia una nueva serie.",
"Measure how backprojection without a filter blurs a point into {#}/r; measure the point spread of filtered backprojection against the detector bin width and the filter; find how many views a scan needs; and measure how image noise depends on the number of photons.":
  "Mide cómo la retroproyección sin filtro difumina un punto en {#}/r; mide la dispersión de un punto de la retroproyección filtrada en función del ancho de celda del detector y del filtro; averigua cuántas vistas necesita un escaneo; y mide cómo depende el ruido de la imagen del número de fotones.",
"A CT scanner sends a thin X-ray beam through the patient along many lines and measures how much of it gets through. Along a line \\(L\\) through tissue of linear attenuation coefficient \\(\\mu(x, y)\\), the transmitted count is \\(N = N_0 e^{-p}\\), with":
  "Un tomógrafo (TC) envía un haz delgado de rayos X a través del paciente a lo largo de muchas líneas y mide cuánto lo atraviesa. A lo largo de una línea \\(L\\) a través de tejido con coeficiente de atenuación lineal \\(\\mu(x, y)\\), la cuenta transmitida es \\(N = N_0 e^{-p}\\), con",
"\\[p = \\ln \\frac{N_0}{N} = \\int_L \\mu \\, dl,\\]":
  "\\[p = \\ln \\frac{N_0}{N} = \\int_L \\mu \\, dl,\\]",
"the line integral, or projection. For a parallel set of lines at angle \\(\\theta\\), the line at offset \\(s\\) is \\(x \\cos\\theta + y \\sin\\theta = s\\), and \\(p(s, \\theta)\\) for all offsets is one view. Stacking the views from \\(\\theta = 0\\) to \\(180°\\) (the lines then repeat) gives the sinogram: a single point at radius \\(r\\) traces a sine curve \\(s = r \\cos(\\theta - \\phi)\\) through it, hence the name.":
  "la integral de línea, o proyección. Para un conjunto paralelo de líneas con ángulo \\(\\theta\\), la línea con desplazamiento \\(s\\) es \\(x \\cos\\theta + y \\sin\\theta = s\\), y \\(p(s, \\theta)\\) para todos los desplazamientos es una vista. Apilar las vistas de \\(\\theta = 0\\) a \\(180°\\) (después las líneas se repiten) da el sinograma: un solo punto a un radio \\(r\\) traza en él una curva senoidal \\(s = r \\cos(\\theta - \\phi)\\), de ahí el nombre.",
"The simplest way back is to smear each view back across the image along its own lines and add them up, called backprojection:":
  "La forma más simple de regresar es esparcir cada vista de vuelta sobre la imagen a lo largo de sus propias líneas y sumarlas, lo que se llama retroproyección:",
"\\[b(x, y) = \\Delta\\theta \\sum_k p(x \\cos\\theta_k + y \\sin\\theta_k, \\theta_k).\\]":
  "\\[b(x, y) = \\Delta\\theta \\sum_k p(x \\cos\\theta_k + y \\sin\\theta_k, \\theta_k).\\]",
"Every line through a point gets the point’s contribution, so a point object of strength \\(A = \\int\\!\\!\\int \\mu \\, dx\\,dy\\) (its \\(\\mu\\) times its area) comes back as":
  "Cada línea que pasa por un punto recibe la contribución del punto, así que un objeto puntual de intensidad \\(A = \\int\\!\\!\\int \\mu \\, dx\\,dy\\) (su \\(\\mu\\) por su área) regresa como",
"\\[b(r) = \\frac{A}{r},\\]":
  "\\[b(r) = \\frac{A}{r},\\]",
"where \\(r\\) is the distance from the point. Each view puts the point’s whole projection, \\(A\\), on the one line through it; at a distance \\(r\\) those lines sweep past at \\(r\\) per radian of angle, so adding them up over \\(180°\\) gives \\(A/r\\). Simple backprojection is the true image blurred by \\(1/r\\). In Fourier terms, \\(1/r\\) blurring divides each spatial frequency \\(f\\) by its magnitude \\(\\lvert f \\rvert\\), so the cure is to multiply each projection’s spectrum by \\(\\lvert f \\rvert\\), the ramp filter, before backprojecting. That is filtered backprojection, and with a complete set of views it returns \\(\\mu\\) exactly, up to the detector’s resolution.":
  "donde \\(r\\) es la distancia al punto. Cada vista pone toda la proyección del punto, \\(A\\), en la única línea que pasa por él; a una distancia \\(r\\) esas líneas barren a \\(r\\) por radián de ángulo, así que sumarlas sobre \\(180°\\) da \\(A/r\\). La retroproyección simple es la imagen verdadera difuminada por \\(1/r\\). En términos de Fourier, el difuminado por \\(1/r\\) divide cada frecuencia espacial \\(f\\) entre su magnitud \\(\\lvert f \\rvert\\), así que la cura es multiplicar el espectro de cada proyección por \\(\\lvert f \\rvert\\), el filtro rampa, antes de retroproyectar. Eso es la retroproyección filtrada, y con un conjunto completo de vistas devuelve \\(\\mu\\) exactamente, hasta la resolución del detector.",
"Three things limit a real image. The <strong>detector bins</strong> have a width \\(\\Delta s\\); the finest pattern they can sample has a spatial frequency of \\(1/(2\\Delta s)\\) (the Nyquist frequency), and a point comes out with a width proportional to \\(\\Delta s\\). The <strong>views</strong> must be close enough together: an object of width \\(D\\) sampled with bins \\(\\Delta s\\) needs about":
  "Tres cosas limitan una imagen real. Las <strong>celdas del detector</strong> tienen un ancho \\(\\Delta s\\); el patrón más fino que pueden muestrear tiene una frecuencia espacial de \\(1/(2\\Delta s)\\) (la frecuencia de Nyquist), y un punto sale con un ancho proporcional a \\(\\Delta s\\). Las <strong>vistas</strong> deben estar suficientemente cercanas: un objeto de ancho \\(D\\) muestreado con celdas \\(\\Delta s\\) necesita alrededor de",
"\\[K \\approx \\frac{\\pi}{2} \\frac{D}{\\Delta s}\\]":
  "\\[K \\approx \\frac{\\pi}{2} \\frac{D}{\\Delta s}\\]",
"views over \\(180°\\) (Kak and Slaney {#}), or streaks fan out from its edges. And the <strong>photons</strong> are counted: a count \\(N\\) has a standard deviation \\(\\sqrt N\\), so each projection carries noise that the ramp filter amplifies at high frequencies. Windows such as the Hann filter roll the ramp off near the Nyquist frequency, lowering the noise at the price of a wider point spread.":
  "vistas en \\(180°\\) (Kak y Slaney {#}), o salen rayas en abanico desde sus bordes. Y los <strong>fotones</strong> se cuentan: una cuenta \\(N\\) tiene una desviación estándar \\(\\sqrt N\\), así que cada proyección lleva ruido que el filtro rampa amplifica a altas frecuencias. Ventanas como el filtro Hann atenúan el filtro rampa cerca de la frecuencia de Nyquist, lo que reduce el ruido a costa de una dispersión de un punto más ancha.",
"Images are shown in CT numbers, \\(H = 1000(\\mu/\\mu_w - 1)\\) in HU, with water at {#} and air at −{#}. The demo’s scanner is a simplification, stated in its Lab fold: parallel rays over a {#} cm field, one X-ray energy ({#} keV, \\(\\mu_w = 0.2059\\) cm⁻¹), and Poisson photon counts.":
  "Las imágenes se muestran en números de TC, \\(H = 1000(\\mu/\\mu_w - 1)\\) en HU, con el agua en {#} y el aire en −{#}. El escáner de la demostración es una simplificación, indicada en su sección Lab: rayos paralelos sobre un campo de {#} cm, una sola energía de rayos X ({#} keV, \\(\\mu_w = 0.2059\\) cm⁻¹) y cuentas de fotones poissonianas.",
"A tungsten wire {#} mm across has \\(\\mu = 71.66\\) cm⁻¹ at {#} keV (NIST). Compute its strength \\(A = \\mu \\pi a^2\\) in cm, and the value of \\(b\\) that simple backprojection should give {#} cm and {#} cm from it.":
  "Un alambre de tungsteno de {#} mm de ancho tiene \\(\\mu = 71.66\\) cm⁻¹ a {#} keV (NIST). Calcula su intensidad \\(A = \\mu \\pi a^2\\) en cm, y el valor de \\(b\\) que debería dar la retroproyección simple a {#} cm y a {#} cm de él.",
"For a head {#} cm across scanned with {#} mm bins, how many views does the sampling rule ask for?":
  "Para una cabeza de {#} cm de ancho escaneada con celdas de {#} mm, ¿cuántas vistas pide la regla de muestreo?",
"No hazards in the virtual lab. A real CT scan gives a dose of ionizing radiation that grows with the number of photons: Part {#} is the reason scanners are tuned to use no more than an image needs.":
  "No hay riesgos en el laboratorio virtual. Un escaneo de TC real da una dosis de radiación ionizante que crece con el número de fotones: la Parte {#} es la razón por la que los escáneres se ajustan para no usar más de lo que necesita una imagen.",
"<strong>Part {#}: Simple backprojection of a wire.</strong> ({#}) Choose the Wire, simple backprojection setup ({#} views, no photon noise) and press Scan. Wait for it to finish (about {#} s). ({#}) The graph shows Profile, along the line y = {#} through the wire. Press Record reading: it records the profile at x = {#}, {#}, … {#} cm, one row each. Press Export to worksheet before you clear the readings.":
  "<strong>Parte {#}: Retroproyección simple de un alambre.</strong> ({#}) Elige la configuración Alambre, retroproyección simple ({#} vistas, sin ruido de fotones) y presiona Escanear. Espera a que termine (unos {#} s). ({#}) La gráfica muestra Perfil, a lo largo de la línea y = {#} a través del alambre. Presiona Registrar lectura: registra el perfil en x = {#}, {#}, … {#} cm, una fila cada uno. Presiona Exportar a la hoja de trabajo antes de borrar las lecturas.",
"<strong>Part {#}: The point spread of filtered backprojection.</strong> ({#}) Choose the Wire, filtered: the point spread setup ({#} views, {#} mm bins, the Ramp filter, zoomed {#} times) and press Scan. ({#}) Switch the graph to Filter (Record reading stores the profile only while the graph shows Profile) and press Record reading: it records one row with the wire’s FWHM. ({#}) Set <strong>Detector bin width</strong> to {#} mm and record; then {#} mm, {#} mm and {#} mm, recording each. Press Export to worksheet, then Clear. ({#}) Set Detector bin width back to {#} mm, choose the <strong>Shepp–Logan</strong> filter and record, then <strong>Hann</strong> and record. Look at how the three filters differ on the graph. Export these two readings too: they go into a second copy of the table.":
  "<strong>Parte {#}: La dispersión de un punto de la retroproyección filtrada.</strong> ({#}) Elige la configuración Alambre, filtrado: la dispersión de un punto ({#} vistas, celdas de {#} mm, el filtro Rampa, con zoom de {#} veces) y presiona Escanear. ({#}) Cambia la gráfica a Filtro (Registrar lectura guarda el perfil solo mientras la gráfica muestra Perfil) y presiona Registrar lectura: registra una fila con el FWHM del alambre. ({#}) Ajusta el <strong>Ancho de celda del detector</strong> a {#} mm y registra; luego {#} mm, {#} mm y {#} mm, registrando cada uno. Presiona Exportar a la hoja de trabajo y luego Borrar. ({#}) Regresa el Ancho de celda del detector a {#} mm, elige el filtro <strong>Shepp–Logan</strong> y registra, luego <strong>Hann</strong> y registra. Observa en la gráfica cómo difieren los tres filtros. Exporta también estas dos lecturas: van en una segunda copia de la tabla.",
"<strong>Part {#}: How many views.</strong> ({#}) Choose the Too few views setup (the head, {#} views, no photon noise) and press Scan. Look at the image, then press <strong>Difference</strong> above the image, then <strong>Reconstruction</strong> again. ({#}) Press Record reading (the graph shows Projection, so it records one row). ({#}) Set <strong>Views</strong> to {#} and record; then {#}, {#}, {#} and {#}, recording each. ({#}) Choose Only {#}° of angles, press Scan, and look at the image in the Wide window (nothing to record). Export the readings to the worksheet.":
  "<strong>Parte {#}: Cuántas vistas.</strong> ({#}) Elige la configuración Muy pocas vistas (la cabeza, {#} vistas, sin ruido de fotones) y presiona Escanear. Observa la imagen, luego presiona <strong>Diferencia</strong> sobre la imagen y después <strong>Reconstrucción</strong> otra vez. ({#}) Presiona Registrar lectura (la gráfica muestra Proyección, así que registra una fila). ({#}) Ajusta <strong>Vistas</strong> a {#} y registra; luego {#}, {#}, {#} y {#}, registrando cada una. ({#}) Elige Solo {#}° de ángulos, presiona Escanear y observa la imagen en la ventana Amplia (no hay nada que registrar). Exporta las lecturas a la hoja de trabajo.",
"<strong>Part {#}: Noise and dose.</strong> ({#}) Choose the Low dose water setup (the region of interest is the water at the center) and press Scan. Switch the graph to Projection and press Record reading. ({#}) Set <strong>Photons per bin per view</strong> to {#} and record; then {#}, {#} and {#}, recording each. Press Export to worksheet, then Clear. ({#}) Set it back to {#}, choose the <strong>Hann</strong> filter, record, and export this reading into a second copy of the table.":
  "<strong>Parte {#}: Ruido y dosis.</strong> ({#}) Elige la configuración Agua con dosis baja (la región de interés es el agua en el centro) y presiona Escanear. Cambia la gráfica a Proyección y presiona Registrar lectura. ({#}) Ajusta <strong>Fotones por celda por vista</strong> a {#} y registra; luego {#}, {#} y {#}, registrando cada uno. Presiona Exportar a la hoja de trabajo y luego Borrar. ({#}) Regresa el valor a {#}, elige el filtro <strong>Hann</strong>, registra y exporta esta lectura a una segunda copia de la tabla.",
"<span>C</span>b (simple backprojection)":
  "<span>C</span>b (retroproyección simple)",
"x (cm), row {#}":
  "x (cm), fila {#}",
"b (simple backprojection), row {#}":
  "b (retroproyección simple), fila {#}",
"{#}/x ({#}/cm), row {#}":
  "{#}/x ({#}/cm), fila {#}",
"<span>B</span>Filter":
  "<span>B</span>Filtro",
"<span>C</span>Bin width Δs (mm)":
  "<span>C</span>Ancho de celda Δs (mm)",
"<span>D</span>Wire FWHM (mm)":
  "<span>D</span>FWHM del alambre (mm)",
"<span>E</span>FWHM / Δs":
  "<span>E</span>FWHM / Δs",
"Filter, row {#}":
  "Filtro, fila {#}",
"Bin width Δs (mm), row {#}":
  "Ancho de celda Δs (mm), fila {#}",
"Wire FWHM (mm), row {#}":
  "FWHM del alambre (mm), fila {#}",
"FWHM / Δs, row {#}":
  "FWHM / Δs, fila {#}",
"<span>B</span>Views K":
  "<span>B</span>Vistas K",
"<span>C</span>Views the sampling rule asks for":
  "<span>C</span>Vistas que pide la regla de muestreo",
"<span>D</span>Error in uniform tissue, RMS (HU)":
  "<span>D</span>Error en tejido uniforme, RMS (HU)",
"Views K, row {#}":
  "Vistas K, fila {#}",
"Views the sampling rule asks for, row {#}":
  "Vistas que pide la regla de muestreo, fila {#}",
"Error in uniform tissue, RMS (HU), row {#}":
  "Error en tejido uniforme, RMS (HU), fila {#}",
"<span>C</span>Photons per bin per view N₀":
  "<span>C</span>Fotones por celda por vista N₀",
"<span>D</span>Relative dose":
  "<span>D</span>Dosis relativa",
"<span>E</span>ROI mean (HU)":
  "<span>E</span>Media de la ROI (HU)",
"<span>F</span>ROI SD (HU)":
  "<span>F</span>DE de la ROI (HU)",
"Photons per bin per view N₀, row {#}":
  "Fotones por celda por vista N₀, fila {#}",
"Relative dose, row {#}":
  "Dosis relativa, fila {#}",
"ROI mean (HU), row {#}":
  "Media de la ROI (HU), fila {#}",
"ROI SD (HU), row {#}":
  "DE de la ROI (HU), fila {#}",
"Fill in the last column of the first table, graph b against {#}/x and fit a straight line (with an intercept). Compare the slope with the strength A you computed before the lab, and use it to find the wire’s μ (its diameter is {#} mm). Is the intercept zero within its standard error?":
  "Completa la última columna de la primera tabla, grafica b contra {#}/x y ajusta una línea recta (con ordenada al origen). Compara la pendiente con la intensidad A que calculaste antes del laboratorio y úsala para hallar el μ del alambre (su diámetro es de {#} mm). ¿Es cero la ordenada al origen dentro de su error estándar?",
"Fill in FWHM / Δs in the second table for the ramp filter. Graph the FWHM against Δs for the ramp readings and fit a straight line (with an intercept). What does the slope say about how the resolution scales? By how much does the Hann filter widen the point spread at {#} mm?":
  "Completa FWHM / Δs en la segunda tabla para el filtro rampa. Grafica el FWHM contra Δs para las lecturas con filtro rampa y ajusta una línea recta (con ordenada al origen). ¿Qué dice la pendiente sobre cómo escala la resolución? ¿Cuánto ensancha el filtro Hann la dispersión de un punto a {#} mm?",
"Graph the error against the number of views on log scales. Below the sampling rule, by what factor does the error fall each time the views double? Where does it stop improving, and how does that compare with the rule’s number?":
  "Grafica el error contra el número de vistas en escalas logarítmicas. Por debajo de la regla de muestreo, ¿en qué factor baja el error cada vez que se duplican las vistas? ¿Dónde deja de mejorar y cómo se compara eso con el número de la regla?",
"Graph the ROI SD against N₀ for the ramp readings on log scales and fit a straight line (a power law). Compare the exponent with −{#}/{#}. How many times the dose would it take to halve the noise? How much did the Hann filter lower the noise at {#} photons?":
  "Grafica la DE de la ROI contra N₀ para las lecturas con filtro rampa en escalas logarítmicas y ajusta una línea recta (una ley de potencias). Compara el exponente con −{#}/{#}. ¿Cuántas veces la dosis haría falta para reducir el ruido a la mitad? ¿Cuánto redujo el filtro Hann el ruido con {#} fotones?",
"The profile in Part {#} is noise free, but the views are discrete: past about {#} cm the {#} lines through the wire spread wider than a bin, so b at a single point can be off by a few percent. The FWHM is read from a noise free profile and is exact for the model. The noise in Part {#} is random: Scan again gives a new noise pattern, and the ROI SD changes by a few percent from scan to scan, which you can check by scanning twice.":
  "El perfil de la Parte {#} no tiene ruido, pero las vistas son discretas: más allá de unos {#} cm las {#} líneas que pasan por el alambre se separan más que una celda, así que b en un solo punto puede desviarse unos pocos por ciento. El FWHM se lee de un perfil sin ruido y es exacto para el modelo. El ruido de la Parte {#} es aleatorio: Escanear de nuevo da un nuevo patrón de ruido, y la DE de la ROI cambia unos pocos por ciento de un escaneo a otro, lo que puedes comprobar escaneando dos veces.",
"Without the filter, why is the whole head image a bright haze, brightest in the middle, when the head is mostly +{#} HU brain?":
  "Sin el filtro, ¿por qué toda la imagen de la cabeza es un velo brillante, más brillante en el centro, si la cabeza es en su mayor parte cerebro de +{#} HU?",
"In Part {#}, why do the streaks start at the skull’s edges and run straight, and why does the {#}° scan smear some edges but not others?":
  "En la Parte {#}, ¿por qué las rayas empiezan en los bordes del cráneo y van rectas, y por qué el escaneo de {#}° difumina algunos bordes pero no otros?",
"Prelab answers, the four tables with their graphs and fits, the wire’s μ from your fit, the scaling of the FWHM with bin width and of the noise with photons, and answers to the questions. Identify simulated data.":
  "Respuestas de la prelaboratorio, las cuatro tablas con sus gráficas y ajustes, el μ del alambre a partir de tu ajuste, el escalamiento del FWHM con el ancho de celda y del ruido con los fotones, y las respuestas a las preguntas. Identifica los datos simulados.",
"Column E, row {#}":
  "Columna E, fila {#}",
"Heading of column E":
  "Encabezado de la columna E",
"Column E":
  "Columna E",
"CT Image Reconstruction":
  "Reconstrucción de imágenes de TC"
});
