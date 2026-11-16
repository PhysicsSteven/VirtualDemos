/* notes/ct-reconstruction in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'notes/ct-reconstruction', {
"CT Image Reconstruction: teaching notes":
  "Reconstrucción de imágenes de TC: notas para el docente",
"CT Image Reconstruction":
  "Reconstrucción de imágenes de TC",
"Medical Physics, imaging (upper level, calculus)":
  "Física médica, imagenología (nivel avanzado, cálculo)",
"A CT scanner measures line integrals of μ, one view of parallel lines at a time; the sinogram is all of them, and a point traces a sine curve through it.":
  "Un tomógrafo mide integrales de línea de μ, una vista de líneas paralelas a la vez; el sinograma es el conjunto de todas ellas, y un punto traza en él una curva senoidal.",
"Backprojection alone gives the true image blurred by {#}/r. The ramp filter, |f| in frequency, undoes exactly that blur, which is why the filtered projection dips below zero beside every edge.":
  "La retroproyección sola da la imagen verdadera difuminada por {#}/r. El filtro rampa, |f| en frecuencia, deshace exactamente ese difuminado, por lo que la proyección filtrada cae por debajo de cero junto a cada borde.",
"The detector bins set the resolution (the point spread grows in proportion to the bin width), the number of views must keep up with the bins (about π/{#} views per bin across the object) or streaks appear, and a missing range of angles smears edges that run along the missing directions.":
  "Las celdas del detector fijan la resolución (la dispersión de un punto crece en proporción al ancho de celda), el número de vistas debe ir a la par de las celdas (alrededor de π/{#} vistas por celda a lo largo del objeto) o aparecen rayas, y un intervalo de ángulos faltante difumina los bordes que van a lo largo de las direcciones faltantes.",
"Image noise comes from counting photons: it falls as {#}/√N₀, so halving it costs four times the dose. A softer filter trades resolution for noise.":
  "El ruido de la imagen proviene del conteo de fotones: disminuye como {#}/√N₀, así que reducirlo a la mitad cuesta cuatro veces la dosis. Un filtro más suave cambia resolución por ruido.",
"Three panes: the scanner (tube, rays, detector and the projection it measures), the sinogram, and the image, which can show the reconstruction, the true phantom or their difference. Scan takes the views one by one, slowed down. Once a scan exists every control recomputes it at once, so students can drag the Views or Detector bin width slider and watch. The graph shows the projection with its filtered version, a profile along a line across the image, or the three filters against spatial frequency. Four phantoms: Shepp and Logan's head (its values read as μ/μ_water, so brain +{#} HU, ventricles {#} HU, skull +{#} HU), a {#} cm water cylinder with +{#} and +{#} HU discs, bone rods from {#} to {#} mm across, and a {#} mm tungsten wire.":
  "Tres paneles: el escáner (tubo, rayos, detector y la proyección que mide), el sinograma y la imagen, que puede mostrar la reconstrucción, el maniquí verdadero o su diferencia. Escanear toma las vistas una por una, ralentizadas. Una vez que existe un escaneo, cada control lo recalcula de una vez, así que los estudiantes pueden arrastrar el control deslizante de Vistas o de Ancho de celda del detector y observar. La gráfica muestra la proyección con su versión filtrada, un perfil a lo largo de una línea sobre la imagen, o los tres filtros frente a la frecuencia espacial. Cuatro maniquíes: la cabeza de Shepp y Logan (sus valores se leen como μ/μ_agua, así que cerebro +{#} HU, ventrículos {#} HU, cráneo +{#} HU), un cilindro de agua de {#} cm con discos de +{#} y +{#} HU, barras de hueso de {#} a {#} mm de ancho, y un alambre de tungsteno de {#} mm.",
"<strong>Head, filtered backprojection.</strong> Press Scan and let the class watch a few views go in. Pause, click a row of the sinogram and show that the scanner turns to that view and the graph shows its projection. Ask Q1.":
  "<strong>Cabeza, retroproyección filtrada.</strong> Presiona Escanear y deja que el grupo vea entrar algunas vistas. Pausa, haz clic en una fila del sinograma y muestra que el escáner gira a esa vista y que la gráfica muestra su proyección. Plantea la P1.",
"<strong>Head, simple backprojection.</strong> The image is a haze brightest in the middle. Switch Reconstruction back to filtered and back again.":
  "<strong>Cabeza, retroproyección simple.</strong> La imagen es un velo más brillante en el centro. Cambia Reconstrucción a filtrada y de vuelta.",
"<strong>Wire, simple backprojection.</strong> The profile is b = A/r: about {#} at {#} cm and {#} at {#} cm. Ask Q2.":
  "<strong>Alambre, retroproyección simple.</strong> El perfil es b = A/r: alrededor de {#} a {#} cm y {#} a {#} cm. Plantea la P2.",
"<strong>Wire, filtered: the point spread.</strong> The FWHM is {#} mm with {#} mm bins and the ramp, {#} mm with Hann; drag Detector bin width and it scales in proportion. Switch the graph to Filter to show why.":
  "<strong>Alambre, filtrado: la dispersión de un punto.</strong> El FWHM es de {#} mm con celdas de {#} mm y filtro Rampa, y de {#} mm con Hann; arrastra Ancho de celda del detector y escala en proporción. Cambia la gráfica a Filtro para mostrar por qué.",
"<strong>Too few views</strong>, then drag Views up. Press Difference to see the streaks alone. Ask Q3.":
  "<strong>Muy pocas vistas</strong>, y luego arrastra Vistas hacia arriba. Presiona Diferencia para ver solo las rayas. Plantea la P3.",
"<strong>Only {#}° of angles</strong> in the Wide window. Ask Q4.":
  "<strong>Solo {#}° de ángulos</strong> en la ventana Amplia. Plantea la P4.",
"<strong>Resolution rods, {#} mm bins</strong>, then <strong>{#} mm bins.</strong> With {#} mm bins the {#} mm rods ({#} line pairs per cm) are about the finest group that separates; with {#} mm bins only the {#} mm group does.":
  "<strong>Barras de resolución, celdas de {#} mm</strong>, y luego <strong>celdas de {#} mm.</strong> Con celdas de {#} mm, las barras de {#} mm ({#} pares de líneas por cm) son aproximadamente el grupo más fino que se separa; con celdas de {#} mm solo lo hace el grupo de {#} mm.",
"<strong>Low dose water</strong>, then <strong>Low dose, Hann filter.</strong> About {#} HU of noise per pixel hides the small +{#} HU discs; Hann brings it to about {#} HU and they show. Ask Q5.":
  "<strong>Agua con dosis baja</strong>, y luego <strong>Dosis baja, filtro Hann.</strong> Unos {#} HU de ruido por píxel ocultan los discos pequeños de +{#} HU; Hann lo reduce a unos {#} HU y los discos se ven. Plantea la P5.",
"<strong>Q1.</strong> A single small object in the phantom makes a sine curve in the sinogram. Why a sine, and what sets its amplitude and its phase?":
  "<strong>P1.</strong> Un solo objeto pequeño en el maniquí produce una curva senoidal en el sinograma. ¿Por qué una senoide, y qué fija su amplitud y su fase?",
"<strong>Q2.</strong> Simple backprojection of a point gives b = A/r. Why does the blur fall off as {#}/r, and why does that make a ramp, |f|, the right filter?":
  "<strong>P2.</strong> La retroproyección simple de un punto da b = A/r. ¿Por qué el difuminado decae como {#}/r, y por qué eso hace que una rampa, |f|, sea el filtro correcto?",
"<strong>Q3.</strong> With {#} views the streaks start at the skull's edge and run in straight lines. Why there, why straight, and why do they fade as the views increase?":
  "<strong>P3.</strong> Con {#} vistas las rayas empiezan en el borde del cráneo y van en líneas rectas. ¿Por qué ahí, por qué rectas, y por qué se desvanecen al aumentar las vistas?",
"<strong>Q4.</strong> Parallel projections repeat after {#}°. With only {#}° covered, which edges of the head stay sharp and which smear, and why are the CT numbers far off?":
  "<strong>P4.</strong> Las proyecciones paralelas se repiten después de {#}°. Con solo {#}° cubiertos, ¿qué bordes de la cabeza siguen nítidos y cuáles se difuminan, y por qué los números de TC quedan muy desviados?",
"<strong>Q5.</strong> The low dose scan has about {#} HU of noise per pixel. How many times the dose would bring it to {#} HU, and what else could you change to lower the noise without more dose?":
  "<strong>P5.</strong> El escaneo de dosis baja tiene unos {#} HU de ruido por píxel. ¿Cuántas veces la dosis lo llevaría a {#} HU, y qué más podrías cambiar para reducir el ruido sin más dosis?",
"<strong>\"The scanner takes a picture of the slice.\"</strong> It never sees the slice; it measures sums along lines, and the image is computed.":
  "<strong>\"El escáner toma una fotografía del corte.\"</strong> Nunca ve el corte; mide sumas a lo largo de líneas, y la imagen se calcula.",
"<strong>\"Backprojection undoes projection.\"</strong> It is the adjoint, not the inverse: without the filter it blurs as {#}/r.":
  "<strong>\"La retroproyección deshace la proyección.\"</strong> Es la adjunta, no la inversa: sin el filtro difumina como {#}/r.",
"<strong>\"More views always sharpen the image.\"</strong> Past the sampling rule the views only remove streaks; the sharpness is set by the detector bins and the filter.":
  "<strong>\"Más vistas siempre afinan la imagen.\"</strong> Más allá de la regla de muestreo las vistas solo eliminan rayas; la nitidez la fijan las celdas del detector y el filtro.",
"<strong>\"Twice the dose, half the noise.\"</strong> Noise goes as {#}/√dose: twice the dose lowers it by only {#} %.":
  "<strong>\"El doble de dosis, la mitad del ruido.\"</strong> El ruido va como {#}/√dosis: el doble de dosis lo reduce solo un {#} %.",
"Geometry: parallel beam over a {#} cm field, the middle detector bin centered on the axis; real scanners use a fan beam and resort it into parallel views. Projections are exact line integrals through ellipses (Kak and Slaney, Principles of Computerized Tomographic Imaging, {#}, eq. {#}), averaged over each bin's width; the nonlinear partial volume effect is left out.":
  "Geometría: haz paralelo sobre un campo de {#} cm, con la celda central del detector centrada en el eje; los escáneres reales usan un haz en abanico y lo reordenan en vistas paralelas. Las proyecciones son integrales de línea exactas a través de elipses (Kak y Slaney, Principles of Computerized Tomographic Imaging, {#}, ec. {#}), promediadas sobre el ancho de cada celda; se omite el efecto no lineal de volumen parcial.",
"One energy, {#} keV: μ of water {#} /cm, cortical bone {#} /cm, tungsten {#} /cm (NIST SRD {#}). No beam hardening or scatter; CT Numbers and Proton Range has a polychromatic scanner.":
  "Una sola energía, {#} keV: μ del agua {#} /cm, hueso cortical {#} /cm, tungsteno {#} /cm (NIST SRD {#}). Sin endurecimiento del haz ni dispersión; CT Numbers and Proton Range incluye un escáner policromático.",
"Noise: Poisson counts N₀ e^−p in each bin (Knuth's method below a mean of {#}, Hörmann's PTRS above), p = ln(N₀/N). Simulated.":
  "Ruido: cuentas poissonianas N₀ e^−p en cada celda (método de Knuth por debajo de una media de {#}, PTRS de Hörmann por encima), p = ln(N₀/N). Simulado.",
"Filter: the band limited ramp built in space (Kak and Slaney eq. {#}), times a Shepp–Logan or Hann window, by FFT with zero padding; linear interpolation in backprojection. Sampling rule: Kak and Slaney eq. {#}.":
  "Filtro: el filtro rampa de banda limitada construido en el espacio (Kak y Slaney, ec. {#}), multiplicado por una ventana de Shepp–Logan o de Hann, mediante FFT con relleno de ceros; interpolación lineal en la retroproyección. Regla de muestreo: Kak y Slaney, ec. {#}.",
"Tested in curriculum/validation/test_ct_reconstruction.cjs: projections integrate to μ × area, the head returns its CT numbers, b = A/r for the wire, FWHM in proportion to the bin width, noise as {#}/√N₀, streaks below the sampling rule.":
  "Probado en curriculum/validation/test_ct_reconstruction.cjs: las proyecciones integran a μ × área, la cabeza devuelve sus números de TC, b = A/r para el alambre, FWHM en proporción al ancho de celda, ruido como {#}/√N₀, rayas por debajo de la regla de muestreo.",
"Pair with <strong>CT Numbers and Proton Range</strong> for what the reconstructed numbers mean and how they are calibrated, and with <strong>Photon Interactions in Matter</strong> for where μ comes from.":
  "Combínalo con <strong>CT Numbers and Proton Range</strong> para saber qué significan los números reconstruidos y cómo se calibran, y con <strong>Photon Interactions in Matter</strong> para ver de dónde viene μ.",
"Iterative reconstruction, used for low dose scans today, solves the same projections as a system of equations with a noise model. Ask students what information the filtered backprojection throws away that an iterative method could use.":
  "La reconstrucción iterativa, que hoy se usa en los escaneos de dosis baja, resuelve las mismas proyecciones como un sistema de ecuaciones con un modelo de ruido. Pregunta a los estudiantes qué información descarta la retroproyección filtrada que un método iterativo podría aprovechar."
});
