/* ws/mp-x-ray-filtration in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/mp-x-ray-filtration', {
"Tube voltage (kV)":
  "Voltaje del tubo (kV)",
"Filtration (mm Al)":
  "Filtración (mm Al)",
"Sheets x (mm Al)":
  "Láminas x (mm Al)",
"Chamber reading K/K₀":
  "Lectura de la cámara K/K₀",
"ln(K/K₀)":
  "ln(K/K₀)",
"Filtration (mm Cu)":
  "Filtración (mm Cu)",
"First HVL (mm Al)":
  "Primera CHR (mm Al)",
"Second HVL (mm Al)":
  "Segunda CHR (mm Al)",
"Mean photon energy (keV)":
  "Energía media de los fotones (keV)",
"HVL₁/HVL₂":
  "CHR₁/CHR₂",
"Minimum first HVL (mm Al)":
  "Primera CHR mínima (mm Al)",
"Filtration and Half Value Layers | VirtualDemos":
  "Filtración y capas hemirreductoras | VirtualDemos",
"Filtration and Half Value Layers":
  "Filtración y capas hemirreductoras",
"<strong>Setups in the demo:</strong> Half value layer, {#} kV (this worksheet), with a tungsten target and {#} mm of aluminum filtration; the shell, periodic table and X-ray spectrum setups of the Modern Physics worksheets.":
  "<strong>Configuraciones en la demo:</strong> Capa hemirreductora, {#} kV (esta hoja de trabajo), con un blanco de tungsteno y {#} mm de filtración de aluminio; las configuraciones de capas, tabla periódica y espectro de rayos X de las hojas de trabajo de Física moderna.",
"With a filter or sheets in the beam of the tungsten target ({#} to {#} kV), the tube’s spectrum is that of SpekPy {#}.4 (Poludniowski and others {#}), a tube model checked against measured spectra and half value layers: a tungsten anode at {#}° behind a {#} mm beryllium window, in {#} keV bins, with its K and L lines. Unlike Kramers’s thick target law, it includes the absorption of the X‑rays in the target itself. It is the same spectrum the Photon Interactions in Matter demo uses, and the two demos give the same half value layers.":
  "Con un filtro o láminas en el haz del blanco de tungsteno ({#} a {#} kV), el espectro del tubo es el de SpekPy {#}.4 (Poludniowski y otros {#}), un modelo de tubo comprobado con espectros y capas hemirreductoras medidos: un ánodo de tungsteno a {#}° detrás de una ventana de berilio de {#} mm, en intervalos de {#} keV, con sus líneas K y L. A diferencia de la ley de blanco grueso de Kramers, incluye la absorción de los rayos X en el propio blanco. Es el mismo espectro que usa la demo Interacciones de los fotones con la materia, y las dos demos dan las mismas capas hemirreductoras.",
"A filter of aluminum (up to {#} mm) and copper (up to {#} mm) sits in the beam at the tube. Its transmission is \\(e^{-(\\mu/\\rho)\\rho x}\\) with the mass attenuation coefficients of NIST XCOM (Berger and others), interpolated log–log between the tabulated energies; ρ = {#} g/cm³ for aluminum and {#} g/cm³ for copper. The solid spectrum is the filtered beam, the dashed one the beam with no filter, on the same scale.":
  "Un filtro de aluminio (hasta {#} mm) y cobre (hasta {#} mm) está en el haz junto al tubo. Su transmisión es \\(e^{-(\\mu/\\rho)\\rho x}\\) con los coeficientes de atenuación másicos de NIST XCOM (Berger y otros), interpolados en escala log–log entre las energías tabuladas; ρ = {#} g/cm³ para el aluminio y {#} g/cm³ para el cobre. El espectro continuo es el haz filtrado, el punteado el haz sin filtro, a la misma escala.",
"An ion chamber reads air kerma, \\(K \\propto \\sum \\Phi(E)\\,T(E)\\,E\\,(\\mu_{en}/\\rho)_{\\text{air}}\\) over the {#} keV bins, each at its center energy, with the air mass energy absorption coefficients of NIST SRD {#} (Hubbell and Seltzer). Aluminum sheets stacked on the chamber (up to {#} mm) attenuate the beam it sees; the readout gives the reading with the sheets over the reading without them, K/K₀. The geometry is narrow beam: no scattered photons reach the chamber.":
  "Una cámara de ionización lee la kerma en aire, \\(K \\propto \\sum \\Phi(E)\\,T(E)\\,E\\,(\\mu_{en}/\\rho)_{\\text{air}}\\) sobre los intervalos de {#} keV, cada uno en su energía central, con los coeficientes másicos de absorción de energía del aire de NIST SRD {#} (Hubbell y Seltzer). Láminas de aluminio apiladas sobre la cámara (hasta {#} mm) atenúan el haz que esta ve; la lectura da la medición con las láminas entre la medición sin ellas, K/K₀. La geometría es de haz estrecho: ningún fotón dispersado llega a la cámara.",
"With Blind off the readouts give the first and second half value layers (found from the same air kerma integral), the homogeneity coefficient, the mean photon energy and the minimum half value layer of the United States rule for diagnostic X‑ray equipment ({#} CFR {#}(m)). Blind hides the half value layers.":
  "Con A ciegas desactivado, las lecturas dan la primera y la segunda capa hemirreductora (halladas con la misma integral de kerma en aire), el coeficiente de homogeneidad, la energía media de los fotones y la capa hemirreductora mínima de la norma de Estados Unidos para equipos de rayos X de diagnóstico ({#} CFR {#}(m)). A ciegas oculta las capas hemirreductoras.",
"Record reading stores the tube voltage, the filters, the sheets and the chamber reading, and the half value layers when they are shown. Export to worksheet sends the readings to the Data tables below; Clear starts a new series.":
  "Registrar lectura guarda el voltaje del tubo, los filtros, las láminas y la lectura de la cámara, y las capas hemirreductoras cuando se muestran. Exportar a la hoja envía las lecturas a las tablas de datos de abajo; Borrar inicia una serie nueva.",
"Measure the attenuation curve of a filtered diagnostic X‑ray beam in aluminum, find its first and second half value layers, see the beam harden as it passes through the metal, and compare the beam’s quality with the federal minimum.":
  "Mide la curva de atenuación en aluminio de un haz de rayos X de diagnóstico filtrado, encuentra su primera y segunda capa hemirreductora, observa cómo se endurece el haz al atravesar el metal y compara la calidad del haz con el mínimo federal.",
"A diagnostic X‑ray beam holds photons from a few keV up to e times the tube voltage: an {#} kV tube makes photons of up to {#} keV. The softest ones never reach the image receptor: they are absorbed in the patient’s skin and add dose without adding information. A metal filter at the tube takes most of them out. The beam’s quality is summed up by its half value layer (HVL), the thickness of aluminum that halves the air kerma. Federal rules set a minimum first HVL for each tube voltage, which in practice sets a minimum filtration.":
  "Un haz de rayos X de diagnóstico contiene fotones desde unos pocos keV hasta e por la tensión del tubo: un tubo de {#} kV produce fotones de hasta {#} keV. Los más blandos nunca llegan al receptor de imagen: se absorben en la piel del paciente y agregan dosis sin agregar información. Un filtro metálico junto al tubo elimina la mayoría de ellos. La calidad del haz se resume en su capa hemirreductora (CHR), el espesor de aluminio que reduce a la mitad la kerma en aire. Las normas federales fijan una primera CHR mínima para cada voltaje del tubo, lo que en la práctica fija una filtración mínima.",
"For one photon energy, \\(K(x) = K_0 e^{-\\mu x}\\) and \\(\\text{HVL} = \\ln 2/\\mu\\). For a spectrum each energy is attenuated with its own μ(E), so":
  "Para una sola energía de fotón, \\(K(x) = K_0 e^{-\\mu x}\\) y \\(\\text{HVL} = \\ln 2/\\mu\\). Para un espectro, cada energía se atenúa con su propio μ(E), así que",
"\\[K(x) = \\int k(E)\\,e^{-\\mu(E)\\,x}\\,dE ,\\]":
  "\\[K(x) = \\int k(E)\\,e^{-\\mu(E)\\,x}\\,dE ,\\]",
"where \\(k(E)\\,dE\\) is the kerma carried by photons between E and E + dE before the sheets. The slope of ln K is then the kerma weighted mean attenuation coefficient of the beam that remains, and as the soft photons are taken out first the beam hardens: the second HVL, which halves the kerma once more, is longer than the first. The homogeneity coefficient HVL₁/HVL₂ is {#} only for a single energy.":
  "donde \\(k(E)\\,dE\\) es la kerma que llevan los fotones entre E y E + dE antes de las láminas. La pendiente de ln K es entonces el coeficiente de atenuación medio, ponderado por la kerma, del haz que queda, y como los fotones blandos se eliminan primero, el haz se endurece: la segunda CHR, que reduce la kerma a la mitad una vez más, es más larga que la primera. El coeficiente de homogeneidad CHR₁/CHR₂ vale {#} solo para una sola energía.",
"Show that \\(\\frac{d\\ln K}{dx} = -\\langle\\mu\\rangle_x\\), where \\(\\langle\\mu\\rangle_x\\) is the mean of μ(E) weighted by the kerma \\(k(E)e^{-\\mu(E)x}\\) that remains behind x.":
  "Demuestra que \\(\\frac{d\\ln K}{dx} = -\\langle\\mu\\rangle_x\\), donde \\(\\langle\\mu\\rangle_x\\) es la media de μ(E) ponderada por la kerma \\(k(E)e^{-\\mu(E)x}\\) que queda detrás de x.",
"Differentiate once more to show that \\(\\frac{d\\langle\\mu\\rangle_x}{dx} = -\\left(\\langle\\mu^2\\rangle_x - \\langle\\mu\\rangle_x^2\\right) \\le 0\\). Explain why this proves HVL₂ ≥ HVL₁, with equality only for a single energy.":
  "Deriva una vez más para demostrar que \\(\\frac{d\\langle\\mu\\rangle_x}{dx} = -\\left(\\langle\\mu^2\\rangle_x - \\langle\\mu\\rangle_x^2\\right) \\le 0\\). Explica por qué esto prueba que CHR₂ ≥ CHR₁, con igualdad solo para una sola energía.",
"From the NIST table, μ/ρ of aluminum is {#} cm²/g at {#} keV and {#} cm²/g at {#} keV. Find the HVL in aluminum at each energy (ρ = {#} g/cm³).":
  "Según la tabla del NIST, μ/ρ del aluminio es {#} cm²/g a {#} keV y {#} cm²/g a {#} keV. Encuentra la CHR en aluminio a cada energía (ρ = {#} g/cm³).",
"{#} CFR {#}(m) gives these minimum first HVLs for diagnostic equipment (the table in paragraph (m)({#}) of the rule), in mm of aluminum: {#} at {#} kV, {#} at {#} kV, {#} at {#} kV, {#} at {#} kV, {#} at {#} kV, {#} at {#} kV, {#} at {#} kV, {#} at {#} kV, {#} at {#} kV and {#} at {#} kV. Why does the table jump between {#} and {#} kV and between {#} and {#} kV? (The rule’s categories of operating range explain it.)":
  "{#} CFR {#}(m) da estas primeras CHR mínimas para equipos de diagnóstico (la tabla del párrafo (m)({#}) de la norma), en mm de aluminio: {#} a {#} kV, {#} a {#} kV, {#} a {#} kV, {#} a {#} kV, {#} a {#} kV, {#} a {#} kV, {#} a {#} kV, {#} a {#} kV, {#} a {#} kV y {#} a {#} kV. ¿Por qué la tabla salta entre {#} y {#} kV y entre {#} y {#} kV? (Las categorías de intervalo de operación de la norma lo explican.)",
"No hazards in the virtual lab. A real HVL measurement is made with the chamber far from any scattering surface, the beam collimated to just cover it, and the operator behind the console barrier.":
  "No hay riesgos en el laboratorio virtual. Una medición real de la CHR se hace con la cámara lejos de cualquier superficie que disperse, el haz colimado para cubrirla justo, y el operador detrás de la barrera de la consola.",
"<strong>Attenuation curve.</strong> Turn Blind on in the Lab section. With the setup’s tungsten target, {#} kV and {#} mm of aluminum filtration, record the chamber reading with no sheets on the chamber, then with {#} mm steps of aluminum sheets to {#} mm, then {#} mm steps to {#} mm. Export the readings; they go to Table {#}. Clear them.":
  "<strong>Curva de atenuación.</strong> Activa A ciegas en la sección Laboratorio. Con el blanco de tungsteno de la configuración, {#} kV y {#} mm de filtración de aluminio, registra la lectura de la cámara sin láminas sobre ella, luego con láminas de aluminio en pasos de {#} mm hasta {#} mm, y luego en pasos de {#} mm hasta {#} mm. Exporta las lecturas; van a la Tabla {#}. Bórralas.",
"<strong>Beam quality survey.</strong> Turn Blind off. At {#} mm of aluminum filtration and no sheets, record a reading at each tube voltage from {#} kV to {#} kV in {#} kV steps. Export the readings; they go to Table {#}. Clear them. Then, at {#} kV, record readings with {#}, {#}, {#}, {#} and {#} mm of aluminum filtration, and with {#} mm of aluminum plus {#} mm and then {#} mm of copper. Export these into a second copy of Table {#}.":
  "<strong>Estudio de la calidad del haz.</strong> Desactiva A ciegas. Con {#} mm de filtración de aluminio y sin láminas, registra una lectura a cada voltaje del tubo de {#} kV a {#} kV en pasos de {#} kV. Exporta las lecturas; van a la Tabla {#}. Bórralas. Luego, a {#} kV, registra lecturas con {#}, {#}, {#}, {#} y {#} mm de filtración de aluminio, y con {#} mm de aluminio más {#} mm y luego {#} mm de cobre. Exporta estas a una segunda copia de la Tabla {#}.",
"Table {#}. Air kerma behind aluminum sheets: {#} kV, tungsten, {#} mm Al filtration.":
  "Tabla {#}. Kerma en aire detrás de láminas de aluminio: {#} kV, tungsteno, filtración de {#} mm Al.",
"<span>B</span>Tube voltage (kV)":
  "<span>B</span>Voltaje del tubo (kV)",
"<span>C</span>Filtration (mm Al)":
  "<span>C</span>Filtración (mm Al)",
"<span>D</span>Sheets x (mm Al)":
  "<span>D</span>Láminas x (mm Al)",
"<span>E</span>Chamber reading K/K₀":
  "<span>E</span>Lectura de la cámara K/K₀",
"<span>F</span>ln(K/K₀)":
  "<span>F</span>ln(K/K₀)",
"Tube voltage (kV), row {#}":
  "Voltaje del tubo (kV), fila {#}",
"Filtration (mm Al), row {#}":
  "Filtración (mm Al), fila {#}",
"Sheets x (mm Al), row {#}":
  "Láminas x (mm Al), fila {#}",
"Chamber reading K/K₀, row {#}":
  "Lectura de la cámara K/K₀, fila {#}",
"ln(K/K₀), row {#}":
  "ln(K/K₀), fila {#}",
"Table {#}. First and second half value layers.":
  "Tabla {#}. Primera y segunda capas hemirreductoras.",
"<span>D</span>Filtration (mm Cu)":
  "<span>D</span>Filtración (mm Cu)",
"<span>E</span>First HVL (mm Al)":
  "<span>E</span>Primera CHR (mm Al)",
"<span>F</span>Second HVL (mm Al)":
  "<span>F</span>Segunda CHR (mm Al)",
"<span>G</span>Mean photon energy (keV)":
  "<span>G</span>Energía media de los fotones (keV)",
"<span>H</span>HVL₁/HVL₂":
  "<span>H</span>CHR₁/CHR₂",
"<span>I</span>Minimum first HVL (mm Al)":
  "<span>I</span>Primera CHR mínima (mm Al)",
"Filtration (mm Cu), row {#}":
  "Filtración (mm Cu), fila {#}",
"First HVL (mm Al), row {#}":
  "Primera CHR (mm Al), fila {#}",
"Second HVL (mm Al), row {#}":
  "Segunda CHR (mm Al), fila {#}",
"Mean photon energy (keV), row {#}":
  "Energía media de los fotones (keV), fila {#}",
"HVL₁/HVL₂, row {#}":
  "CHR₁/CHR₂, fila {#}",
"Minimum first HVL (mm Al), row {#}":
  "Primera CHR mínima (mm Al), fila {#}",
"Work out ln(K/K₀) in Table {#}, and the last two columns of Table {#} (the minimum from Before the lab question {#}).":
  "Calcula ln(K/K₀) en la Tabla {#}, y las dos últimas columnas de la Tabla {#} (el mínimo de la pregunta {#} de Antes del laboratorio).",
"Graph ln(K/K₀) against x (Table {#}). Is it a straight line? Describe the residuals of a straight line fit and what they show.":
  "Grafica ln(K/K₀) en función de x (Tabla {#}). ¿Es una recta? Describe los residuos de un ajuste lineal y lo que muestran.",
"Interpolate in your table (linearly in ln K, between the two points on either side) to find the thickness where K/K₀ = {#} (HVL₁) and the extra thickness from there to K/K₀ = {#} (HVL₂). Find the homogeneity coefficient. Check your values against the first row at {#} kV in Table {#}.":
  "Interpola en tu tabla (linealmente en ln K, entre los dos puntos a cada lado) para encontrar el espesor donde K/K₀ = {#} (CHR₁) y el espesor adicional desde ahí hasta K/K₀ = {#} (CHR₂). Encuentra el coeficiente de homogeneidad. Compara tus valores con la primera fila a {#} kV de la Tabla {#}.",
"Fit a straight line to the first three points of Table {#} only, and to the last three only. Convert each slope to an effective attenuation coefficient and, with Before the lab question {#}, to an effective photon energy. How much has the beam hardened between the front and the back of the stack?":
  "Ajusta una recta solo a los primeros tres puntos de la Tabla {#}, y solo a los últimos tres. Convierte cada pendiente en un coeficiente de atenuación efectivo y, con la pregunta {#} de Antes del laboratorio, en una energía de fotón efectiva. ¿Cuánto se ha endurecido el haz entre el frente y el fondo de la pila?",
"Graph HVL₁ against tube voltage (the first copy of Table {#}). At which voltages does the model’s beam meet the federal minimum?":
  "Grafica CHR₁ en función del voltaje del tubo (la primera copia de la Tabla {#}). ¿A qué voltajes cumple el haz del modelo con el mínimo federal?",
"From the second copy of Table {#}, graph HVL₁ against the aluminum filtration for the rows with no copper. How much total aluminum filtration does the model need for HVL₁ ≥ {#} mm? Compare the effect on HVL₁ of {#} mm of copper with that of {#} mm of extra aluminum.":
  "Con la segunda copia de la Tabla {#}, grafica CHR₁ en función de la filtración de aluminio para las filas sin cobre. ¿Cuánta filtración total de aluminio necesita el modelo para CHR₁ ≥ {#} mm? Compara el efecto sobre CHR₁ de {#} mm de cobre con el de {#} mm de aluminio adicional.",
"The model is exact, so the scatter comes from rounding: the chamber reading is given to {#} decimals and the sheets to {#} mm. Estimate the uncertainty of your interpolated HVL₁ from those two, and from the error of linear interpolation in ln K (compare with interpolation in K itself). In a real measurement the chamber’s energy response, scatter from the sheets and the purity of the aluminum dominate.":
  "El modelo es exacto, así que la dispersión viene del redondeo: la lectura de la cámara se da con {#} decimales y las láminas con precisión de {#} mm. Estima la incertidumbre de tu CHR₁ interpolada a partir de esas dos, y del error de la interpolación lineal en ln K (compárala con la interpolación en K misma). En una medición real dominan la respuesta en energía de la cámara, la dispersión en las láminas y la pureza del aluminio.",
"The model’s beam, with {#} mm of aluminum, falls below the federal minimum at {#} kV, while real tubes with {#} mm of added aluminum usually pass. Name the parts of a real tube that filter the beam before the added filter (inherent filtration). Which of them does the model include, and which does it leave out?":
  "El haz del modelo, con {#} mm de aluminio, queda por debajo del mínimo federal a {#} kV, mientras que los tubos reales con {#} mm de aluminio agregado suelen cumplirlo. Nombra las partes de un tubo real que filtran el haz antes del filtro agregado (filtración inherente). ¿Cuáles incluye el modelo y cuáles omite?",
"Why does adding filtration raise the mean photon energy while lowering the air kerma? What does this trade cost in exposure time and tube loading?":
  "¿Por qué agregar filtración eleva la energía media de los fotones mientras baja la kerma en aire? ¿Qué cuesta este intercambio en tiempo de exposición y carga del tubo?",
"Copper filters are used in fluoroscopy and interventional rooms. Why is copper so much more effective per millimeter than aluminum at these energies, and why is a thin aluminum sheet placed after a copper filter in real tubes? (Look at the copper K edge energy.)":
  "Los filtros de cobre se usan en salas de fluoroscopia e intervencionismo. ¿Por qué el cobre es mucho más efectivo por milímetro que el aluminio a estas energías, y por qué en los tubos reales se coloca una lámina delgada de aluminio después de un filtro de cobre? (Mira la energía del borde K del cobre.)",
"Why does the HVL method need narrow beam geometry? What would broad beam geometry do to the measured HVL?":
  "¿Por qué el método de la CHR necesita geometría de haz estrecho? ¿Qué le haría la geometría de haz amplio a la CHR medida?",
"The homogeneity coefficient of your beam is well below {#}. What would it be for the {#} keV γ rays of ⁹⁹ᵐTc, and why?":
  "El coeficiente de homogeneidad de tu haz está bastante por debajo de {#}. ¿Cuánto valdría para los rayos γ de {#} keV del ⁹⁹ᵐTc, y por qué?",
"Prelab answers, both tables with their graphs, HVL₁, HVL₂ and the homogeneity coefficient with uncertainties, the filtration needed to meet the federal minimum, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ambas tablas con sus gráficas, CHR₁, CHR₂ y el coeficiente de homogeneidad con incertidumbres, la filtración necesaria para cumplir el mínimo federal, y las respuestas a las preguntas. Identifica los datos simulados.",
"Air kerma the chamber reads behind the sheets":
  "Kerma en aire que lee la cámara detrás de las láminas",
"Air kerma with no sheets":
  "Kerma en aire sin láminas",
"Photon fluence in one {#} keV bin of the tube spectrum":
  "Fluencia de fotones en un intervalo de {#} keV del espectro del tubo",
"Transmission of the filter":
  "Transmisión del filtro",
"Differential (dE: a small range of photon energy)":
  "Diferencial (dE: un pequeño intervalo de energía del fotón)",
"Air kerma per unit photon energy before the sheets":
  "Kerma en aire por unidad de energía del fotón antes de las láminas",
"Linear attenuation coefficient of aluminum":
  "Coeficiente de atenuación lineal del aluminio",
"Mass energy absorption coefficient":
  "Coeficiente másico de absorción de energía",
"Thickness of aluminum sheets on the chamber":
  "Espesor de las láminas de aluminio sobre la cámara",
"Shells, the Periodic Table and X-Rays (filtration)":
  "Capas, la tabla periódica y los rayos X (filtración)"
});
