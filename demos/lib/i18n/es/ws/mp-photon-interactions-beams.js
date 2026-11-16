/* ws/mp-photon-interactions-beams in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/mp-photon-interactions-beams', {
"Energy (keV)":
  "Energía (keV)",
"Thickness t (cm)":
  "Espesor t (cm)",
"Photons N":
  "Fotones N",
"Narrow beam T":
  "T de haz estrecho",
"Standard error of T":
  "Error estándar de T",
"ln T":
  "ln T",
"Broad beam K/K_0":
  "K/K_0 de haz ancho",
"Standard error of K/K_0":
  "Error estándar de K/K_0",
"Buildup B":
  "Acumulación B",
"Standard error of B":
  "Error estándar de B",
"Tube voltage (kVp)":
  "Voltaje del tubo (kVp)",
"Aluminum filtration (mm)":
  "Filtración de aluminio (mm)",
"Added filter":
  "Filtro añadido",
"HVL measured in":
  "HVL medida en",
"HVL₁ (mm)":
  "HVL₁ (mm)",
"HVL₂ (mm)":
  "HVL₂ (mm)",
"Homogeneity h":
  "Homogeneidad h",
"Mean energy (keV)":
  "Energía media (keV)",
"Effective energy (keV)":
  "Energía efectiva (keV)",
"Air kerma at {#} m (µGy per mAs)":
  "Kerma en aire a {#} m (µGy por mAs)",
"Photon Beams in Matter: Attenuation, Buildup and Beam Hardening | VirtualDemos":
  "Haces de fotones en la materia: atenuación, acumulación y endurecimiento del haz | VirtualDemos",
"Photon Beams in Matter: Attenuation, Buildup and Beam Hardening":
  "Haces de fotones en la materia: atenuación, acumulación y endurecimiento del haz",
"<strong>Setups in the demo:</strong> Water at {#} keV; Lead at {#} MeV; Bone against soft tissue, {#} keV; Iodine K edge; Lead K edge; Pair production in lead; Where Compton wins in water; Lead from {#} keV to {#} MeV; Cs {#} through water; Co {#} through lead; Co {#} through a concrete wall; {#} keV through water; {#} kVp diagnostic beam; {#} kVp with copper.":
  "<strong>Configuraciones en la demo:</strong> Agua a {#} keV; Plomo a {#} MeV; Hueso frente a tejido blando, {#} keV; Borde K del yodo; Borde K del plomo; Producción de pares en plomo; Dónde domina Compton en agua; Plomo de {#} keV a {#} MeV; Cs {#} a través de agua; Co {#} a través de plomo; Co {#} a través de un muro de concreto; {#} keV a través de agua; Haz de diagnóstico de {#} kVp; {#} kVp con cobre.",
"The strip across the top switches between four views: Coefficients, Which process wins, Narrow and broad beam, and Beam hardening.":
  "La franja de arriba cambia entre cuatro vistas: Coeficientes, Qué proceso domina, Haz estrecho y haz ancho, y Endurecimiento del haz.",
"<strong>Coefficients</strong> plots the mass attenuation coefficient \\(\\mu/\\rho\\) of a material from {#} keV to {#} MeV with its parts: coherent scattering, incoherent (Compton) scattering, the photoelectric effect, and pair production in the field of a nucleus and of an electron. The dashed and dotted curves are the energy transfer and energy absorption coefficients, \\(\\mu_{tr}/\\rho\\) and \\(\\mu_{en}/\\rho\\). The material list has {#} tissues, dosimeters and shields, and any element by its atomic number Z. The scale can be cm²/g, {#}/cm, barns per atom or barns per electron. Drag across the chart, or type an energy, to read every coefficient at that energy.":
  "<strong>Coeficientes</strong> grafica el coeficiente de atenuación másico \\(\\mu/\\rho\\) de un material de {#} keV a {#} MeV con sus partes: dispersión coherente, dispersión incoherente (Compton), el efecto fotoeléctrico y la producción de pares en el campo de un núcleo y de un electrón. Las curvas punteadas son los coeficientes de transferencia de energía y de absorción de energía, \\(\\mu_{tr}/\\rho\\) y \\(\\mu_{en}/\\rho\\). La lista de materiales tiene {#} tejidos, dosímetros y blindajes, y cualquier elemento por su número atómico Z. La escala puede ser cm²/g, {#}/cm, barns por átomo o barns por electrón. Arrastra sobre la gráfica, o escribe una energía, para leer todos los coeficientes a esa energía.",
"<strong>Which process wins</strong> maps, for every Z from {#} to {#}, the energies where each process is the largest share, and marks where the chosen material sits. Under it the shares for the chosen material are stacked against energy.":
  "<strong>Qué proceso domina</strong> mapea, para cada Z de {#} a {#}, las energías donde cada proceso es la parte mayor, y marca dónde está el material elegido. Debajo, las partes del material elegido se apilan en función de la energía.",
"<strong>Narrow and broad beam</strong> sends a broad parallel beam of photons at a slab and follows each one until it is absorbed or leaves (a Monte Carlo simulation). The narrow beam result counts only the photons that never interacted; the broad beam result is the air kerma behind the slab from every photon that gets through, scattered or not. Their ratio is the buildup factor \\(B\\). Each run uses a random seed, so the same seed gives the same run.":
  "<strong>Haz estrecho y haz ancho</strong> envía un haz paralelo ancho de fotones a una placa y sigue a cada uno hasta que es absorbido o sale (una simulación Monte Carlo). El resultado de haz estrecho cuenta solo los fotones que nunca interactuaron; el resultado de haz ancho es el kerma en aire detrás de la placa de todos los fotones que la atraviesan, dispersados o no. Su cociente es el factor de acumulación \\(B\\). Cada corrida usa una semilla aleatoria, así que la misma semilla da la misma corrida.",
"<strong>Beam hardening</strong> filters the spectrum of an X-ray tube with a tungsten anode and finds the first and second half value layers of the air kerma, in aluminum or copper.":
  "<strong>Endurecimiento del haz</strong> filtra el espectro de un tubo de rayos X con ánodo de tungsteno y encuentra la primera y la segunda capas hemirreductoras del kerma en aire, en aluminio o cobre.",
"Record reading stores the numbers for the view on show. Export to worksheet sends the readings to the matching Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda los números de la vista que se muestra. Exportar a la hoja envía las lecturas a la tabla de Datos correspondiente de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Measure an attenuation coefficient and a buildup factor with a simulated beam, and measure how filtration hardens an X-ray beam.":
  "Mide un coeficiente de atenuación y un factor de acumulación con un haz simulado, y mide cómo la filtración endurece un haz de rayos X.",
"<strong>Attenuation.</strong> A photon crossing a thin layer \\(dx\\) interacts with probability \\(\\mu\\,dx\\), where \\(\\mu\\) is the linear attenuation coefficient. For a beam of \\(N\\) photons that have not yet interacted, \\(dN = -\\mu N\\,dx\\), so \\(N(x) = N_0 e^{-\\mu x}\\). Dividing by the density gives the mass attenuation coefficient \\(\\mu/\\rho\\) (cm²/g), which does not depend on how tightly the material is packed. The half value layer is \\(\\ln 2/\\mu\\) and the mean free path \\(1/\\mu\\). In terms of the cross section per atom, \\(\\mu/\\rho = \\sigma_a N_A/A\\), and the processes add: \\(\\mu/\\rho = \\sigma_{coh}/\\rho + \\sigma_{incoh}/\\rho + \\tau/\\rho + \\kappa/\\rho\\).":
  "<strong>Atenuación.</strong> Un fotón que atraviesa una capa delgada \\(dx\\) interactúa con probabilidad \\(\\mu\\,dx\\), donde \\(\\mu\\) es el coeficiente de atenuación lineal. Para un haz de \\(N\\) fotones que aún no han interactuado, \\(dN = -\\mu N\\,dx\\), así que \\(N(x) = N_0 e^{-\\mu x}\\). Dividir entre la densidad da el coeficiente de atenuación másico \\(\\mu/\\rho\\) (cm²/g), que no depende de qué tan compacto esté el material. La capa hemirreductora es \\(\\ln 2/\\mu\\) y el camino libre medio \\(1/\\mu\\). En términos de la sección eficaz por átomo, \\(\\mu/\\rho = \\sigma_a N_A/A\\), y los procesos se suman: \\(\\mu/\\rho = \\sigma_{coh}/\\rho + \\sigma_{incoh}/\\rho + \\tau/\\rho + \\kappa/\\rho\\).",
"<strong>The processes.</strong> In coherent (Rayleigh) scattering the photon is deflected by the whole atom and keeps its energy. In incoherent (Compton) scattering it gives part of its energy to an electron. In the photoelectric effect the photon is absorbed and an electron is ejected from an inner shell; per atom it grows steeply with Z and falls steeply with photon energy. Above \\(2m_ec^2 = 1.022\\) MeV the photon can turn into an electron and a positron in the field of a nucleus (pair production). The Coefficients view of the demo plots each process against energy.":
  "<strong>Los procesos.</strong> En la dispersión coherente (Rayleigh) el fotón es desviado por todo el átomo y conserva su energía. En la dispersión incoherente (Compton) le cede parte de su energía a un electrón. En el efecto fotoeléctrico el fotón es absorbido y se expulsa un electrón de una capa interna; por átomo, crece rápidamente con Z y cae rápidamente con la energía del fotón. Por encima de \\(2m_ec^2 = 1.022\\) MeV el fotón puede convertirse en un electrón y un positrón en el campo de un núcleo (producción de pares). La vista Coeficientes del demo grafica cada proceso en función de la energía.",
"<strong>Narrow and broad beams.</strong> The exponential law holds for a narrow beam, where a detector sees only photons that never interacted. Behind a broad beam, photons scattered in the slab reach the detector too, so the kerma behind the slab is larger: \\(K/K_0 = B\\,e^{-\\mu t}\\), with a buildup factor \\(B \\ge 1\\) that grows with the thickness in mean free paths, \\(\\mu t\\). Shielding calculations need \\(B\\).":
  "<strong>Haces estrechos y anchos.</strong> La ley exponencial se cumple para un haz estrecho, donde un detector ve solo los fotones que nunca interactuaron. Detrás de un haz ancho, los fotones dispersados en la placa también llegan al detector, así que el kerma detrás de la placa es mayor: \\(K/K_0 = B\\,e^{-\\mu t}\\), con un factor de acumulación \\(B \\ge 1\\) que crece con el espesor en caminos libres medios, \\(\\mu t\\). Los cálculos de blindaje necesitan \\(B\\).",
"<strong>Beam hardening.</strong> An X-ray tube makes a spread of photon energies. A filter removes low energy photons more than high energy ones, because \\(\\mu\\) falls steeply with energy, so the beam left behind has a higher mean energy and is harder to stop. The air kerma behind a thickness \\(x\\) of absorber is \\(K(x) = \\int \\Phi(E)\\,E\\,(\\mu_{en}/\\rho)_{air}\\,e^{-\\mu(E)x}\\,dE\\). With \\(\\mu_{en}\\) this is strictly the collision kerma; in air at diagnostic energies \\(g\\) is below {#} %, so it equals the kerma to the precision of the readings, and HVLs are quoted for it. The first half value layer HVL₁ halves it; the second, HVL₂, halves it again. The homogeneity coefficient \\(h = \\mathrm{HVL}_1/\\mathrm{HVL}_2\\) is {#} only for a beam of one energy. The effective energy of a beam is the single energy that has the same HVL₁. The air kerma per mAs is this model’s own: it runs about {#} % above the SpekPy code’s value for the same tube, so compare the readings with each other rather than with a meter.":
  "<strong>Endurecimiento del haz.</strong> Un tubo de rayos X produce un intervalo de energías de fotón. Un filtro quita más los fotones de baja energía que los de alta energía, porque \\(\\mu\\) cae abruptamente con la energía, así que el haz que queda tiene una energía media mayor y es más difícil de detener. El kerma en aire detrás de un espesor \\(x\\) de absorbente es \\(K(x) = \\int \\Phi(E)\\,E\\,(\\mu_{en}/\\rho)_{air}\\,e^{-\\mu(E)x}\\,dE\\). Con \\(\\mu_{en}\\) esto es estrictamente el kerma de colisión; en aire a energías de diagnóstico \\(g\\) es menor que el {#} %, así que es igual al kerma con la precisión de las lecturas, y las HVL se dan para él. La primera capa hemirreductora HVL₁ lo reduce a la mitad; la segunda, HVL₂, lo reduce a la mitad otra vez. El coeficiente de homogeneidad \\(h = \\mathrm{HVL}_1/\\mathrm{HVL}_2\\) es {#} solo para un haz de una sola energía. La energía efectiva de un haz es la energía única que tiene la misma HVL₁. El kerma en aire por mAs es propio de este modelo: resulta alrededor de {#} % mayor que el valor del código SpekPy para el mismo tubo, así que compara las lecturas entre sí y no con un medidor.",
"Show from \\(dN = -\\mu N\\,dx\\) that the half value layer is \\(\\ln 2/\\mu\\) and that the mean distance a photon travels before its first interaction is \\(1/\\mu\\).":
  "Muestra a partir de \\(dN = -\\mu N\\,dx\\) que la capa hemirreductora es \\(\\ln 2/\\mu\\) y que la distancia media que recorre un fotón antes de su primera interacción es \\(1/\\mu\\).",
"For a beam of two energies, \\(K(x) = K_1 e^{-\\mu_1 x} + K_2 e^{-\\mu_2 x}\\) with \\(\\mu_1 > \\mu_2\\). Find \\(-\\frac{d\\ln K}{dx}\\) and show that it decreases as \\(x\\) grows. What does that mean for HVL₂ compared with HVL₁?":
  "Para un haz de dos energías, \\(K(x) = K_1 e^{-\\mu_1 x} + K_2 e^{-\\mu_2 x}\\) con \\(\\mu_1 > \\mu_2\\). Encuentra \\(-\\frac{d\\ln K}{dx}\\) y muestra que disminuye al crecer \\(x\\). ¿Qué significa eso para HVL₂ comparada con HVL₁?",
"Part {#} measures the buildup behind water (¹³⁷Cs, {#} keV) and behind lead (⁶⁰Co, {#} MeV). Compare the two at the same thickness in mean free paths, say \\(\\mu t\\) = {#}. Which do you expect to have the larger buildup factor \\(B\\), the water or the lead, or will they be about the same?":
  "La Parte {#} mide la acumulación detrás del agua (¹³⁷Cs, {#} keV) y detrás del plomo (⁶⁰Co, {#} MeV). Compara las dos con el mismo espesor en caminos libres medios, digamos \\(\\mu t\\) = {#}. ¿Cuál esperas que tenga el mayor factor de acumulación \\(B\\), el agua o el plomo, o serán casi iguales?",
"No hazards in the virtual lab. In the real lab, the sources and X-ray beams used for these measurements are radiation hazards: follow your facility’s radiation safety rules and your dosimetry badge requirements.":
  "No hay riesgos en el laboratorio virtual. En el laboratorio real, las fuentes y los haces de rayos X que se usan para estas mediciones son riesgos de radiación: sigue las reglas de seguridad radiológica de tu instalación y los requisitos de tu dosímetro personal.",
"<strong>Part {#}: narrow and broad beam.</strong> ({#}) Choose the Cs {#} through water setup (water, {#} keV). Set Photons to {#} and Random seed to {#} (click the seed number to type it). ({#}) Click the Thickness t value and type {#} cm, press Send photons, and when the run ends press Record reading. Do the same at {#}, {#} and {#} cm, keeping seed {#}. Export the readings to the worksheet and clear them. ({#}) Choose Co {#} through lead (lead, {#} keV, ⁶⁰Co as one beam at the mean of its two lines), set {#} photons and seed {#} again, and do the same with slabs {#}, {#}, {#} and {#} cm thick. Export those as a second copy of the table.":
  "<strong>Parte {#}: haz estrecho y haz ancho.</strong> ({#}) Elige la configuración Cs {#} a través de agua (agua, {#} keV). Fija Fotones en {#} y Semilla aleatoria en {#} (haz clic en el número de la semilla para escribirlo). ({#}) Haz clic en el valor de Espesor t y escribe {#} cm, pulsa Enviar fotones y, cuando termine la corrida, pulsa Registrar lectura. Haz lo mismo a {#}, {#} y {#} cm, conservando la semilla {#}. Exporta las lecturas a la hoja y bórralas. ({#}) Elige Co {#} a través de plomo (plomo, {#} keV, el ⁶⁰Co como un solo haz en la media de sus dos líneas), fija otra vez {#} fotones y la semilla {#}, y haz lo mismo con placas de {#}, {#}, {#} y {#} cm de espesor. Exporta esas como una segunda copia de la tabla.",
"<strong>Part {#}: beam hardening.</strong> Choose the {#} kVp diagnostic beam setup (Tube voltage {#} kVp, Added filter thickness {#}, half value layers in Aluminum). Click the Aluminum filtration value and type {#}, {#}, {#} and {#} mm in turn, recording a reading at each. Export the readings to the worksheet and clear them.":
  "<strong>Parte {#}: endurecimiento del haz.</strong> Elige la configuración del haz diagnóstico de {#} kVp (Voltaje del tubo de {#} kVp, Espesor del filtro añadido de {#}, capas hemirreductoras en Aluminio). Haz clic en el valor de Filtración de aluminio y escribe {#}, {#}, {#} y {#} mm por turno, registrando una lectura en cada una. Exporta las lecturas a la hoja y bórralas.",
"The buildup \\(B\\) is the broad beam \\(K/K_0\\) divided by \\(e^{-\\mu t}\\) with the tabulated \\(\\mu\\) (the \\(\\mu t\\) column), not by the counted narrow beam \\(T\\), so dividing the two recorded columns gives a slightly different number for thick slabs.":
  "La acumulación \\(B\\) es el \\(K/K_0\\) de haz ancho dividido entre \\(e^{-\\mu t}\\) con la \\(\\mu\\) tabulada (la columna \\(\\mu t\\)), no entre la \\(T\\) de haz estrecho contada, así que dividir las dos columnas registradas da un número un poco distinto para placas gruesas.",
"<span>B</span>Material":
  "<span>B</span>Material",
"<span>C</span>Energy (keV)":
  "<span>C</span>Energía (keV)",
"<span>D</span>Thickness \\(t\\) (cm)":
  "<span>D</span>Espesor \\(t\\) (cm)",
"<span>E</span>\\(\\mu t\\)":
  "<span>E</span>\\(\\mu t\\)",
"<span>F</span>Photons \\(N\\)":
  "<span>F</span>Fotones \\(N\\)",
"<span>G</span>Narrow beam \\(T\\)":
  "<span>G</span>\\(T\\) de haz estrecho",
"<span>H</span>Standard error of \\(T\\)":
  "<span>H</span>Error estándar de \\(T\\)",
"<span>I</span>ln \\(T\\)":
  "<span>I</span>ln \\(T\\)",
"<span>J</span>Broad beam \\(K/K_0\\)":
  "<span>J</span>\\(K/K_0\\) de haz ancho",
"<span>K</span>Standard error of \\(K/K_0\\)":
  "<span>K</span>Error estándar de \\(K/K_0\\)",
"<span>L</span>Buildup \\(B\\)":
  "<span>L</span>Acumulación \\(B\\)",
"<span>M</span>Standard error of \\(B\\)":
  "<span>M</span>Error estándar de \\(B\\)",
"Energy (keV), row {#}":
  "Energía (keV), fila {#}",
"Thickness t (cm), row {#}":
  "Espesor t (cm), fila {#}",
"μ t, row {#}":
  "μ t, fila {#}",
"Photons N, row {#}":
  "Fotones N, fila {#}",
"Narrow beam T, row {#}":
  "T de haz estrecho, fila {#}",
"Standard error of T, row {#}":
  "Error estándar de T, fila {#}",
"ln T, row {#}":
  "ln T, fila {#}",
"Broad beam K/K_0, row {#}":
  "K/K_0 de haz ancho, fila {#}",
"Standard error of K/K_0, row {#}":
  "Error estándar de K/K_0, fila {#}",
"Buildup B, row {#}":
  "Acumulación B, fila {#}",
"Standard error of B, row {#}":
  "Error estándar de B, fila {#}",
"Broad beam K/K₀":
  "K/K₀ de haz ancho",
"Standard error of K/K₀":
  "Error estándar de K/K₀",
"Beam hardening":
  "Endurecimiento del haz",
"<span>B</span>Tube voltage (kVp)":
  "<span>B</span>Voltaje del tubo (kVp)",
"<span>C</span>Aluminum filtration (mm)":
  "<span>C</span>Filtración de aluminio (mm)",
"<span>D</span>Added filter":
  "<span>D</span>Filtro añadido",
"<span>E</span>HVL measured in":
  "<span>E</span>HVL medida en",
"<span>F</span>HVL₁ (mm)":
  "<span>F</span>HVL₁ (mm)",
"<span>G</span>HVL₂ (mm)":
  "<span>G</span>HVL₂ (mm)",
"<span>H</span>Homogeneity \\(h\\)":
  "<span>H</span>Homogeneidad \\(h\\)",
"<span>I</span>Mean energy (keV)":
  "<span>I</span>Energía media (keV)",
"<span>J</span>Effective energy (keV)":
  "<span>J</span>Energía efectiva (keV)",
"<span>K</span>Air kerma at {#} m (µGy per mAs)":
  "<span>K</span>Kerma en aire a {#} m (µGy por mAs)",
"Tube voltage (kVp), row {#}":
  "Voltaje del tubo (kVp), fila {#}",
"Aluminum filtration (mm), row {#}":
  "Filtración de aluminio (mm), fila {#}",
"Added filter, row {#}":
  "Filtro añadido, fila {#}",
"HVL measured in, row {#}":
  "HVL medida en, fila {#}",
"HVL₁ (mm), row {#}":
  "HVL₁ (mm), fila {#}",
"HVL₂ (mm), row {#}":
  "HVL₂ (mm), fila {#}",
"Homogeneity h, row {#}":
  "Homogeneidad h, fila {#}",
"Mean energy (keV), row {#}":
  "Energía media (keV), fila {#}",
"Effective energy (keV), row {#}":
  "Energía efectiva (keV), fila {#}",
"Air kerma at {#} m (µGy per mAs), row {#}":
  "Kerma en aire a {#} m (µGy por mAs), fila {#}",
"From the narrow and broad beam table for water, graph ln \\(T\\) against \\(t\\). Find the slope and its standard error, and so \\(\\mu\\) with its uncertainty. Compare with the tabulated \\(\\mu\\) the demo gives at {#} keV. Do they agree within your uncertainty?":
  "Con la tabla de haz estrecho y haz ancho para el agua, grafica ln \\(T\\) en función de \\(t\\). Encuentra la pendiente y su error estándar, y así \\(\\mu\\) con su incertidumbre. Compárala con el \\(\\mu\\) tabulado que da la demo a {#} keV. ¿Coinciden dentro de tu incertidumbre?",
"Graph \\(B\\) against \\(\\mu t\\) for water and for lead. Which builds up more for the same number of mean free paths? Read \\(B\\) for each at \\(\\mu t\\) = {#} from your graph.":
  "Grafica \\(B\\) contra \\(\\mu t\\) para el agua y para el plomo. ¿Cuál acumula más para el mismo número de caminos libres medios? Lee \\(B\\) de cada uno en \\(\\mu t\\) = {#} de tu gráfica.",
"A water shield for ¹³⁷Cs is designed with the narrow beam law to transmit {#} % of the kerma. What thickness does that give? Using your water readings, by what factor would the real broad beam kerma behind it exceed the design? Graph ln \\((K/K_0)\\) against \\(t\\) and extend a line through your last three points to estimate the thickness that really brings the kerma down to {#} %. Why is that estimate uncertain?":
  "Un blindaje de agua para ¹³⁷Cs se diseña con la ley de haz estrecho para transmitir el {#} % del kerma. ¿Qué espesor da eso? Usando tus lecturas del agua, ¿por qué factor excedería al diseño el kerma real de haz ancho detrás de él? Grafica ln \\((K/K_0)\\) en función de \\(t\\) y prolonga una recta por tus últimos tres puntos para estimar el espesor que realmente baja el kerma al {#} %. ¿Por qué esa estimación es incierta?",
"From the {#} kVp readings, graph HVL₁ against the aluminum filtration. How do HVL₁, \\(h\\) and the mean energy change as filtration is added? Explain with your answer to Before the lab question {#}.":
  "Con las lecturas a {#} kVp, grafica HVL₁ en función de la filtración de aluminio. ¿Cómo cambian HVL₁, \\(h\\) y la energía media al añadir filtración? Explícalo con tu respuesta a la pregunta {#} de Antes del laboratorio.",
"The narrow and broad beam values come from counting simulated photons, so they scatter from run to run. For the narrow beam, \\(T\\) is a binomial proportion: show that its standard error should be \\(\\sqrt{T(1-T)/N}\\) and compare that with the standard error the demo gives for one of your readings. Say whether it agrees with \\(e^{-\\mu t}\\). Finally, say how many photons you would need to measure \\(B\\) at {#} cm of water to {#} %.":
  "Los valores del haz estrecho y del haz ancho provienen de contar fotones simulados, así que varían de una corrida a otra. Para el haz estrecho, \\(T\\) es una proporción binomial: muestra que su error estándar debería ser \\(\\sqrt{T(1-T)/N}\\) y compáralo con el error estándar que da el demo para una de tus lecturas. Di si concuerda con \\(e^{-\\mu t}\\). Por último, di cuántos fotones necesitarías para medir \\(B\\) a {#} cm de agua con una precisión de {#} %.",
"At megavoltage energies Compton scattering wins in every material, so \\(\\mu/\\rho\\) is nearly the same for all of them and only the mass in the way counts; concrete is therefore the usual material for the walls of a treatment room. Using the buildup factors you measured, say what a designer must add to a thickness found from the narrow beam law, and why.":
  "A energías de megavoltaje, la dispersión Compton domina en todos los materiales, así que \\(\\mu/\\rho\\) es casi la misma para todos y solo cuenta la masa que se interpone; por eso el concreto es el material habitual para las paredes de una sala de tratamiento. Con los factores de acumulación que mediste, di qué debe agregar quien diseña a un espesor hallado con la ley del haz estrecho, y por qué.",
"Why does a CT scanner, which measures \\(\\mu\\) along many lines through the patient, show streaks and a dark center in a uniform water phantom unless it corrects for beam hardening?":
  "¿Por qué un tomógrafo (CT), que mide \\(\\mu\\) a lo largo de muchas líneas a través del paciente, muestra rayas y un centro oscuro en un maniquí uniforme de agua a menos que corrija el endurecimiento del haz?",
"What did your graph in Analysis {#} say about Before the lab {#}? Explain the result from what happens to the photons scattered in each slab: in the Coefficients view, choose the material, type an energy, and read the photoelectric share at the energies the scattered photons have.":
  "¿Qué dijo tu gráfica del Análisis {#} sobre Antes del laboratorio {#}? Explica el resultado a partir de lo que les pasa a los fotones dispersados en cada placa: en la vista Coeficientes, elige el material, escribe una energía y lee la fracción fotoeléctrica a las energías que tienen los fotones dispersados.",
"Prelab answers, every Data table with its graphs, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, cada tabla de Datos con sus gráficas, las respuestas de las secciones de análisis e incertidumbre, y las respuestas a las preguntas. Identifica los datos simulados.",
"Molar mass (atomic weight)":
  "Masa molar (peso atómico)",
"Buildup factor: broad beam kerma over the narrow beam prediction":
  "Factor de acumulación: kerma de haz ancho entre la predicción de haz estrecho",
"Air kerma behind the absorber":
  "Kerma en aire detrás del absorbente",
"Air kerma with no absorber":
  "Kerma en aire sin absorbente",
"Kerma carried by the first energy in the beam (no absorber)":
  "Kerma que lleva la primera energía del haz (sin absorbente)",
"Kerma carried by the second energy in the beam (no absorber)":
  "Kerma que lleva la segunda energía del haz (sin absorbente)",
"Number of photons that have not yet interacted (in the table: photons sent)":
  "Número de fotones que aún no han interactuado (en la tabla: fotones enviados)",
"Number of photons at the start":
  "Número de fotones al inicio",
"Avogadro constant":
  "Constante de Avogadro",
"{#} × {#}²³ mol⁻¹, exact":
  "{#} × {#}²³ mol⁻¹, exacta",
"Photon fluence":
  "Fluencia de fotones",
"Narrow beam transmission: share of photons that never interacted":
  "Transmisión de haz estrecho: parte de los fotones que nunca interactuaron",
"Derivative: d/dx is the rate of change with depth x":
  "Derivada: d/dx es la tasa de cambio con la profundidad x",
"Share of the electrons' energy radiated again as bremsstrahlung":
  "Parte de la energía de los electrones que se radia de nuevo como bremsstrahlung",
"Homogeneity coefficient, HVL₁/HVL₂":
  "Coeficiente de homogeneidad, HVL₁/HVL₂",
"Pair production cross section (nuclear and electron fields)":
  "Sección eficaz de producción de pares (campos nuclear y electrónico)",
"Linear attenuation coefficient: the chance per unit length that a photon interacts":
  "Coeficiente de atenuación lineal: la probabilidad por unidad de longitud de que un fotón interactúe",
"Attenuation coefficient of the first energy in the beam":
  "Coeficiente de atenuación de la primera energía del haz",
"Attenuation coefficient of the second energy in the beam":
  "Coeficiente de atenuación de la segunda energía del haz",
"Energy absorption coefficient, μ_tr({#} − g)":
  "Coeficiente de absorción de energía, μ_tr({#} − g)",
"Energy transfer coefficient: the part of μ that hands energy to electrons and positrons":
  "Coeficiente de transferencia de energía: la parte de μ que entrega energía a electrones y positrones",
"Density of the material":
  "Densidad del material",
"Cross section per atom":
  "Sección eficaz por átomo",
"Coherent (Rayleigh) scattering cross section":
  "Sección eficaz de dispersión coherente (Rayleigh)",
"Incoherent (Compton) scattering cross section":
  "Sección eficaz de dispersión incoherente (Compton)",
"Thickness of the slab":
  "Espesor de la placa",
"Photoelectric cross section":
  "Sección eficaz fotoeléctrica",
"Distance into the absorber (dx is a thin layer of it)":
  "Distancia dentro del absorbente (dx es una capa delgada de él)",
"Photon Interactions in Matter":
  "Interacciones de los fotones con la materia",
"Student worksheet · Medical Physics":
  "Hoja de trabajo del estudiante · Física médica",
"Graph \\(B\\) against \\(\\mu t\\) for water and for lead. Which builds up more for the same number of mean free paths? Explain why, using what happens to scattered photons in each (in the Coefficients view, choose the material, type an energy, and read the photoelectric share at the energies the scattered photons have).":
  "Grafica \\(B\\) en función de \\(\\mu t\\) para el agua y para el plomo. ¿Cuál acumula más con el mismo número de caminos libres medios? Explica por qué, usando lo que les sucede a los fotones dispersados en cada uno (en la vista Coeficientes, elige el material, escribe una energía y lee la participación fotoeléctrica a las energías que tienen los fotones dispersados).",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>"
});
