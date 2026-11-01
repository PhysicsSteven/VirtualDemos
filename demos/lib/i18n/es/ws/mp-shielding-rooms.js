/* ws/mp-shielding-rooms in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/mp-shielding-rooms', {
"Transmission needed B":
  "Transmisión necesaria B",
"Lead (mm)":
  "Plomo (mm)",
"Steel (mm)":
  "Acero (mm)",
"Concrete (mm)":
  "Concreto (mm)",
"Gypsum wallboard (mm)":
  "Tablaroca (mm)",
"Beam and barrier":
  "Haz y barrera",
"Concrete (cm)":
  "Concreto (cm)",
"Steel (cm)":
  "Acero (cm)",
"Lead (cm)":
  "Plomo (cm)",
"Door shielding":
  "Blindaje de la puerta",
"Maze length (m)":
  "Longitud del laberinto (m)",
"Neutrons at the door, no door (mSv/wk)":
  "Neutrones en la puerta, sin puerta (mSv/sem)",
"log₁₀ of the neutron dose in mSv/wk":
  "log₁₀ de la dosis de neutrones en mSv/sem",
"Capture gammas at the door, no door (mSv/wk)":
  "Gammas de captura en la puerta, sin puerta (mSv/sem)",
"Behind the door (mSv/wk)":
  "Detrás de la puerta (mSv/sem)",
"Patients a day":
  "Pacientes al día",
"Protons a week N":
  "Protones por semana N",
"ln of N/{#}¹³":
  "ln de N/{#}¹³",
"Shielding Rooms: CT, Linac Vault and Proton Room | VirtualDemos":
  "Blindaje de salas: TC, búnker de linac y sala de protones | VirtualDemos",
"Shielding Rooms: CT, Linac Vault and Proton Room":
  "Blindaje de salas: TC, búnker de linac y sala de protones",
"<strong>Setups in the demo:</strong> CT room with an office, a corridor, or at {#} kV; {#} MV primary barrier in concrete and in lead; {#} MV primary barrier; secondary wall with IMRT; {#} MV maze door with a long and a short maze; proton room, and with twice the patients.":
  "<strong>Configuraciones en la demo:</strong> sala de TC con una oficina, un pasillo, o a {#} kV; barrera primaria de {#} MV en concreto y en plomo; barrera primaria de {#} MV; muro secundario con IMRT; puerta del laberinto a {#} MV con un laberinto largo y uno corto; sala de protones, y con el doble de pacientes.",
"Every room is designed the same way: the weekly dose (air kerma for the CT room) at a point {#} m beyond the wall as if there were no wall, the design goal P for the area beyond ({#} per week for the public, {#} for radiation workers, in mGy or mSv), the occupancy factor T of that area, and the transmission \\(B = (P/T)/\\text{dose}\\) the wall may allow. The demo gives the thickness of each material that has that transmission.":
  "Cada sala se diseña de la misma manera: la dosis semanal (kerma en aire para la sala de TC) en un punto {#} m más allá del muro como si no hubiera muro, la meta de diseño P para el área de más allá ({#} por semana para el público, {#} para el personal ocupacionalmente expuesto, en mGy o mSv), el factor de ocupación T de esa área, y la transmisión \\(B = (P/T)/\\text{dose}\\) que puede permitir el muro. La demo da el espesor de cada material que tiene esa transmisión.",
"CT room (NCRP Report {#}, {#}). The scatter air kerma at {#} m from one scan is \\(\\kappa\\,\\mathrm{DLP}\\), with κ = {#} × {#}⁻⁵ cm⁻¹ for a head scan and {#} × {#} × {#}⁻⁴ cm⁻¹ for a body scan; a scan repeated with contrast counts twice. Lead and concrete transmissions are Archer fits to measured CT scatter data, \\(B(x) = \\left[(1 + \\beta/\\alpha)\\,e^{\\alpha\\gamma x} - \\beta/\\alpha\\right]^{-1/\\gamma}\\); steel is taken as {#} times the lead and gypsum wallboard as {#} times the concrete (NCRP {#} Table {#}, for typical rooms).":
  "Sala de TC (Informe NCRP {#}, {#}). La kerma en aire dispersa a {#} m de un estudio es \\(\\kappa\\,\\mathrm{DLP}\\), con κ = {#} × {#}⁻⁵ cm⁻¹ para un estudio de cabeza y {#} × {#} × {#}⁻⁴ cm⁻¹ para un estudio de cuerpo; un estudio repetido con contraste cuenta dos veces. Las transmisiones del plomo y del concreto son ajustes de Archer a datos medidos de dispersión de TC, \\(B(x) = \\left[(1 + \\beta/\\alpha)\\,e^{\\alpha\\gamma x} - \\beta/\\alpha\\right]^{-1/\\gamma}\\); el acero se toma como {#} veces el plomo y la tablaroca como {#} veces el concreto (NCRP {#}, Tabla {#}, para salas típicas).",
"Linac vault (NCRP Report {#}, {#}). The primary barrier takes the beam itself, a fraction U of the time; the target is {#} m from isocenter. Secondary walls take the head leakage, {#} % of the beam in every direction, with treatments given as IMRT counted three times. Thickness from the first and equilibrium tenth value layers, \\(x = \\mathrm{TVL}_1 + (n - 1)\\,\\mathrm{TVL}_e\\) with \\(n = \\log_{10}(1/B)\\). Patient scatter, wall scatter and the neutrons a metal primary barrier makes at {#} MV are left out.":
  "Búnker del linac (Informe NCRP {#}, {#}). La barrera primaria recibe el haz mismo, una fracción U del tiempo; el blanco está a {#} m del isocentro. Los muros secundarios reciben la fuga del cabezal, {#} % del haz en todas direcciones, con los tratamientos dados como IMRT contados tres veces. Espesor a partir de la primera capa decirreductora y la de equilibrio, \\(x = \\mathrm{TVL}_1 + (n - 1)\\,\\mathrm{TVL}_e\\) con \\(n = \\log_{10}(1/B)\\). Se omiten la dispersión del paciente, la dispersión en los muros y los neutrones que produce una barrera primaria metálica a {#} MV.",
"Maze door at {#} MV. The neutron fluence at the inner end of the maze (NCRP {#} eq. {#}), the neutron dose equivalent down the maze by the modified Kersey method, and the gamma rays from neutron capture in the concrete; the door adds borated polyethylene (tenth value layer {#} cm for the neutrons) and lead ({#} cm for the capture gammas). The scattered photons down the maze are left out.":
  "Puerta del laberinto a {#} MV. La fluencia de neutrones en el extremo interior del laberinto (NCRP {#}, ec. {#}), la dosis equivalente de neutrones a lo largo del laberinto según el método de Kersey modificado, y los rayos gamma de la captura de neutrones en el concreto; la puerta agrega polietileno borado (capa decirreductora de {#} cm para los neutrones) y plomo ({#} cm para las gammas de captura). Se omiten los fotones dispersos a lo largo del laberinto.",
"Proton room. The neutrons from protons stopping in the patient, in the forward direction behind concrete: \\(H = H_0 N U e^{-x/\\lambda}/r^2\\), \\(H_0\\) = {#} pSv m² per proton, λ = {#} cm (a FLUKA fit for {#} MeV protons, N. E. Ipe), with {#} nA at the patient and five treatment days a week.":
  "Sala de protones. Los neutrones de los protones que se detienen en el paciente, en la dirección frontal detrás de concreto: \\(H = H_0 N U e^{-x/\\lambda}/r^2\\), \\(H_0\\) = {#} pSv m² por protón, λ = {#} cm (un ajuste de FLUKA para protones de {#} MeV, N. E. Ipe), con {#} nA en el paciente y cinco días de tratamiento por semana.",
"The source to wall distance, the occupancy and the area set the point beyond the wall; the wall material chooses what the picture shows; the graph shows every material’s transmission against thickness or against mass per area.":
  "La distancia de la fuente al muro, la ocupación y el área fijan el punto más allá del muro; el material del muro elige lo que muestra la imagen; la gráfica muestra la transmisión de cada material en función del espesor o de la masa por área.",
"Record reading stores the current room’s result. Export to worksheet sends the readings to the Data tables below (CT rooms to Table {#}, linac walls to Table {#}, maze doors to Table {#}, proton rooms to Table {#}); Clear starts a new series.":
  "Registrar lectura guarda el resultado de la sala actual. Exportar a la hoja envía las lecturas a las tablas de Datos de abajo (las salas de TC a la Tabla {#}, los muros del linac a la Tabla {#}, las puertas del laberinto a la Tabla {#}, las salas de protones a la Tabla {#}); Borrar inicia una serie nueva.",
"Design the walls of a CT room, a linear accelerator vault and a proton therapy room, compare how well lead, steel, concrete and polyethylene do in each, and explain why each kind of room is built the way it is.":
  "Diseña los muros de una sala de TC, un búnker de acelerador lineal y una sala de protonterapia, compara qué tan bien funcionan el plomo, el acero, el concreto y el polietileno en cada una, y explica por qué cada tipo de sala se construye como se construye.",
"The weekly dose at a point beyond a wall, with no wall, follows from the workload and the inverse square law. The wall must transmit at most":
  "La dosis semanal en un punto más allá de un muro, sin muro, se obtiene de la carga de trabajo y de la ley del inverso del cuadrado. El muro debe transmitir a lo más",
"\\[B = \\frac{P}{T\\,D_0},\\]":
  "\\[B = \\frac{P}{T\\,D_0},\\]",
"where \\(D_0\\) is that unshielded weekly dose, P the design goal and T the occupancy factor. For a linac primary barrier, with W the weekly dose at isocenter ({#} m from the target), U the use factor and d the distance from the target:":
  "donde \\(D_0\\) es esa dosis semanal sin blindaje, P la meta de diseño y T el factor de ocupación. Para una barrera primaria de linac, con W la dosis semanal en el isocentro (a {#} m del blanco), U el factor de uso y d la distancia desde el blanco:",
"\\[B_{\\mathrm{pri}} = \\frac{P\\,d^2}{W\\,U\\,T}, \\qquad B_{\\mathrm{leak}} = \\frac{P\\,d^2}{10^{-3}\\,W_L\\,T}.\\]":
  "\\[B_{\\mathrm{pri}} = \\frac{P\\,d^2}{W\\,U\\,T}, \\qquad B_{\\mathrm{leak}} = \\frac{P\\,d^2}{10^{-3}\\,W_L\\,T}.\\]",
"The secondary walls see only the head leakage, {#} % of the beam in every direction, so U = {#}; \\(W_L = W(1 - f + 3f)\\) is the leakage workload when a fraction f of the treatments are IMRT, which needs about three times the beam per gray.":
  "Los muros secundarios solo reciben la fuga del cabezal, {#} % del haz en todas direcciones, así que U = {#}; \\(W_L = W(1 - f + 3f)\\) es la carga de trabajo de fuga cuando una fracción f de los tratamientos es IMRT, que necesita unas tres veces más haz por gray.",
"How a material stops photons depends on their energy. Below about {#} keV the photoelectric effect dominates, and its cross section per atom grows roughly as \\(Z^4\\) to \\(Z^5\\): lead (Z = {#}) absorbs far more per gram than concrete. At megavolt energies Compton scattering dominates, and its cross section depends on the number of electrons, about the same per gram in every material except hydrogen. Fast neutrons lose energy best in collisions with hydrogen nuclei, which have nearly their mass; heavy nuclei barely slow them.":
  "Cómo detiene un material a los fotones depende de su energía. Por debajo de unos {#} keV domina el efecto fotoeléctrico, y su sección eficaz por átomo crece más o menos como \\(Z^4\\) a \\(Z^5\\): el plomo (Z = {#}) absorbe mucho más por gramo que el concreto. A energías de megavolts domina la dispersión Compton, y su sección eficaz depende del número de electrones, más o menos el mismo por gramo en todo material excepto el hidrógeno. Los neutrones rápidos pierden energía mejor en choques con núcleos de hidrógeno, que tienen casi su misma masa; los núcleos pesados apenas los frenan.",
"A CT room has {#} body scans (DLP {#} mGy cm) and {#} head scans (DLP {#} mGy cm) a week, {#} % of them repeated with contrast. Find the weekly scatter air kerma at {#} m, and at a point {#} m from the scanner.":
  "Una sala de TC tiene {#} estudios de cuerpo (DLP {#} mGy cm) y {#} estudios de cabeza (DLP {#} mGy cm) por semana, el {#} % de ellos repetidos con contraste. Encuentra la kerma en aire dispersa semanal a {#} m, y en un punto a {#} m del tomógrafo.",
"For an office beyond that wall (public, T = {#}), find B. With lead’s Archer parameters at {#} kV, α = {#} mm⁻¹, β = {#} mm⁻¹, γ = {#}, invert Archer’s form and find the lead thickness.":
  "Para una oficina más allá de ese muro (público, T = {#}), encuentra B. Con los parámetros de Archer del plomo a {#} kV, α = {#} mm⁻¹, β = {#} mm⁻¹, γ = {#}, invierte la forma de Archer y encuentra el espesor de plomo.",
"A {#} MV linac delivers {#} Gy a week at isocenter. Its primary barrier faces an office (public, T = {#}) with U = {#}/{#}, and the point is {#} m from the target. Find B and the number of tenth value layers n. With TVL₁ = {#} cm and TVLₑ = {#} cm, find the concrete thickness.":
  "Un linac de {#} MV entrega {#} Gy por semana en el isocentro. Su barrera primaria da a una oficina (público, T = {#}) con U = {#}/{#}, y el punto está a {#} m del blanco. Encuentra B y el número de capas decirreductoras n. Con TVL₁ = {#} cm y TVLₑ = {#} cm, encuentra el espesor de concreto.",
"Lead’s tenth value layer at {#} MV is {#} cm and its density {#} g/cm³; concrete’s is {#} cm and {#} g/cm³. Compare the two tenth value layers in g/cm². What does that say about the photons’ main interaction at {#} MV?":
  "La capa decirreductora del plomo a {#} MV es de {#} cm y su densidad {#} g/cm³; la del concreto es de {#} cm y {#} g/cm³. Compara las dos capas decirreductoras en g/cm². ¿Qué dice eso sobre la interacción principal de los fotones a {#} MV?",
"In the proton room each {#} cm of concrete cuts the neutron dose by e. If the number of patients doubles, how much more concrete is needed, leaving the distance unchanged?":
  "En la sala de protones cada {#} cm de concreto reduce la dosis de neutrones en un factor e. Si el número de pacientes se duplica, ¿cuánto concreto más se necesita, sin cambiar la distancia?",
"No hazards in the virtual lab. Shielding is designed by a qualified medical physicist and verified by a survey after construction; the numbers here are for learning the method, not for a real room.":
  "No hay riesgos en el laboratorio virtual. El blindaje lo diseña un físico médico calificado y se verifica con un levantamiento después de la construcción; los números de aquí son para aprender el método, no para una sala real.",
"<strong>CT room.</strong> Record a reading in the CT room setup (office next door). Then record one for each of these changes from that setup, one at a time: a corridor beyond the wall; radiation workers beyond the wall; {#} kV; twice the body scans; the scanner {#} m from the wall. Export the readings; they go to Table {#}, then Clear.":
  "<strong>Sala de TC.</strong> Registra una lectura en la configuración Sala de TC (oficina contigua). Luego registra una para cada uno de estos cambios respecto a esa configuración, uno a la vez: un pasillo más allá del muro; personal ocupacionalmente expuesto más allá del muro; {#} kV; el doble de estudios de cuerpo; el tomógrafo a {#} m del muro. Exporta las lecturas; van a la Tabla {#}; luego Borrar.",
"<strong>Linac vault walls.</strong> In the {#} MV primary barrier setup, record a reading at {#}, {#}, {#} and {#} MV. Then choose the secondary wall and record it at {#} MV with no IMRT, with {#} % IMRT, and at {#} MV with {#} % IMRT. Export the readings; they go to Table {#}, then Clear.":
  "<strong>Muros del búnker del linac.</strong> En la configuración Barrera primaria de {#} MV, registra una lectura a {#}, {#}, {#} y {#} MV. Luego elige el muro secundario y regístralo a {#} MV sin IMRT, con {#} % de IMRT, y a {#} MV con {#} % de IMRT. Exporta las lecturas; van a la Tabla {#}; luego Borrar.",
"<strong>Maze door.</strong> In the {#} MV maze door setup, take the door shielding out (no polyethylene, no lead) and record a reading at maze lengths of {#}, {#}, {#}, {#}, {#} and {#} m. Export them; they go to Table {#}, then Clear. Then, at {#} m, find the polyethylene and lead (each to {#} cm) with the least total thickness that bring the door under the goal, then record and export that design.":
  "<strong>Puerta del laberinto.</strong> En la configuración Puerta del laberinto a {#} MV, quita el blindaje de la puerta (sin polietileno, sin plomo) y registra una lectura con longitudes de laberinto de {#}, {#}, {#}, {#}, {#} y {#} m. Expórtalas; van a la Tabla {#}; luego Borrar. Después, a {#} m, encuentra el polietileno y el plomo (cada uno con precisión de {#} cm) con el menor espesor total que dejen la puerta por debajo de la meta, y luego registra y exporta ese diseño.",
"<strong>Proton room.</strong> In the proton room setup, record a reading at {#}, {#}, {#}, {#} and {#} patients a day. Export the readings; they go to Table {#}.":
  "<strong>Sala de protones.</strong> En la configuración Sala de protones, registra una lectura con {#}, {#}, {#}, {#} y {#} pacientes al día. Exporta las lecturas; van a la Tabla {#}.",
"Table {#}. CT room walls.":
  "Tabla {#}. Muros de la sala de TC.",
"<span>C</span>Transmission needed B":
  "<span>C</span>Transmisión necesaria B",
"<span>D</span>Lead (mm)":
  "<span>D</span>Plomo (mm)",
"<span>E</span>Steel (mm)":
  "<span>E</span>Acero (mm)",
"<span>F</span>Concrete (mm)":
  "<span>F</span>Concreto (mm)",
"<span>G</span>Gypsum wallboard (mm)":
  "<span>G</span>Tablaroca (mm)",
"Transmission needed B, row {#}":
  "Transmisión necesaria B, fila {#}",
"Lead (mm), row {#}":
  "Plomo (mm), fila {#}",
"Steel (mm), row {#}":
  "Acero (mm), fila {#}",
"Concrete (mm), row {#}":
  "Concreto (mm), fila {#}",
"Gypsum wallboard (mm), row {#}":
  "Tablaroca (mm), fila {#}",
"Table {#}. Linac vault walls, concrete, steel and lead.":
  "Tabla {#}. Muros del búnker del linac, concreto, acero y plomo.",
"<span>B</span>Beam and barrier":
  "<span>B</span>Haz y barrera",
"<span>D</span>Concrete (cm)":
  "<span>D</span>Concreto (cm)",
"<span>E</span>Steel (cm)":
  "<span>E</span>Acero (cm)",
"<span>F</span>Lead (cm)":
  "<span>F</span>Plomo (cm)",
"Beam and barrier, row {#}":
  "Haz y barrera, fila {#}",
"Concrete (cm), row {#}":
  "Concreto (cm), fila {#}",
"Steel (cm), row {#}":
  "Acero (cm), fila {#}",
"Lead (cm), row {#}":
  "Plomo (cm), fila {#}",
"Table {#}. Maze door at {#} MV.":
  "Tabla {#}. Puerta del laberinto a {#} MV.",
"<span>B</span>Door shielding":
  "<span>B</span>Blindaje de la puerta",
"<span>C</span>Maze length (m)":
  "<span>C</span>Longitud del laberinto (m)",
"<span>D</span>Neutrons at the door, no door (mSv/wk)":
  "<span>D</span>Neutrones en la puerta, sin puerta (mSv/sem)",
"<span>E</span>log₁₀ of the neutron dose in mSv/wk":
  "<span>E</span>log₁₀ de la dosis de neutrones en mSv/sem",
"<span>F</span>Capture gammas at the door, no door (mSv/wk)":
  "<span>F</span>Gammas de captura en la puerta, sin puerta (mSv/sem)",
"<span>G</span>Behind the door (mSv/wk)":
  "<span>G</span>Detrás de la puerta (mSv/sem)",
"Door shielding, row {#}":
  "Blindaje de la puerta, fila {#}",
"Maze length (m), row {#}":
  "Longitud del laberinto (m), fila {#}",
"Neutrons at the door, no door (mSv/wk), row {#}":
  "Neutrones en la puerta, sin puerta (mSv/sem), fila {#}",
"log₁₀ of the neutron dose in mSv/wk, row {#}":
  "log₁₀ de la dosis de neutrones en mSv/sem, fila {#}",
"Capture gammas at the door, no door (mSv/wk), row {#}":
  "Gammas de captura en la puerta, sin puerta (mSv/sem), fila {#}",
"Behind the door (mSv/wk), row {#}":
  "Detrás de la puerta (mSv/sem), fila {#}",
"Table {#}. Proton room, forward wall.":
  "Tabla {#}. Sala de protones, muro frontal.",
"<span>B</span>Patients a day":
  "<span>B</span>Pacientes al día",
"<span>C</span>Protons a week N":
  "<span>C</span>Protones por semana N",
"<span>D</span>ln of N/{#}¹³":
  "<span>D</span>ln de N/{#}¹³",
"<span>E</span>Transmission needed B":
  "<span>E</span>Transmisión necesaria B",
"<span>F</span>Concrete (cm)":
  "<span>F</span>Concreto (cm)",
"Patients a day, row {#}":
  "Pacientes al día, fila {#}",
"Protons a week N, row {#}":
  "Protones por semana N, fila {#}",
"ln of N/{#}¹³, row {#}":
  "ln de N/{#}¹³, fila {#}",
"From Table {#}, find the mass per area (kg/m²) of the lead and concrete walls in the first row (lead {#} g/cm³, concrete {#} g/cm³). How many times more mass does concrete need? Do the same for the {#} MV primary barrier in Table {#}.":
  "Con la Tabla {#}, encuentra la masa por área (kg/m²) de los muros de plomo y de concreto de la primera fila (plomo {#} g/cm³, concreto {#} g/cm³). ¿Cuántas veces más masa necesita el concreto? Haz lo mismo para la barrera primaria de {#} MV de la Tabla {#}.",
"In Table {#}, the corridor and the radiation workers rows each change B by a factor of {#}. Compare how much the lead and the concrete change, and explain from the shape of Archer’s curve why thin walls do not change in proportion to log B.":
  "En la Tabla {#}, las filas del pasillo y del personal ocupacionalmente expuesto cambian B cada una en un factor de {#}. Compara cuánto cambian el plomo y el concreto, y explica con la forma de la curva de Archer por qué los muros delgados no cambian en proporción a log B.",
"From Table {#}’s primary rows, how much does the concrete grow from {#} to {#} MV? Why does it grow, while lead’s tenth value layer stays at {#} cm from {#} to {#} MV?":
  "Con las filas primarias de la Tabla {#}, ¿cuánto crece el concreto de {#} a {#} MV? ¿Por qué crece, mientras la capa decirreductora del plomo se mantiene en {#} cm de {#} a {#} MV?",
"Graph log₁₀ of the neutron dose at the door against the maze length (Table {#}, first copy). Is it a straight line? Find its slope at long maze lengths and compare with \\(-1/\\mathrm{TVD}\\), TVD = {#} √S₁ with S₁ = {#} m². Which term of the modified Kersey formula dominates a short maze?":
  "Grafica el log₁₀ de la dosis de neutrones en la puerta en función de la longitud del laberinto (Tabla {#}, primera copia). ¿Es una recta? Encuentra su pendiente para laberintos largos y compárala con \\(-1/\\mathrm{TVD}\\), TVD = {#} √S₁ con S₁ = {#} m². ¿Qué término de la fórmula de Kersey modificada domina en un laberinto corto?",
"Graph the concrete thickness against ln(N/{#}¹³) (Table {#}). Fit a line and compare the slope with λ = {#} cm. Explain why the slope comes out a little smaller.":
  "Grafica el espesor de concreto en función de ln(N/{#}¹³) (Tabla {#}). Ajusta una recta y compara la pendiente con λ = {#} cm. Explica por qué la pendiente sale un poco menor.",
"Each room’s numbers rest on a workload, an occupancy and a source term that are estimates, often to a factor of two. From your Table {#} fit, how much concrete does a factor of two in the source term change? From Table {#}, how much lead? Say which room is the more sensitive to such an error in absolute thickness, and which in relative thickness.":
  "Los números de cada sala se basan en una carga de trabajo, una ocupación y un término fuente que son estimaciones, a menudo con un factor de dos de incertidumbre. Con tu ajuste de la Tabla {#}, ¿cuánto concreto cambia un factor de dos en el término fuente? Con la Tabla {#}, ¿cuánto plomo? Di qué sala es más sensible a un error así en espesor absoluto, y cuál en espesor relativo.",
"CT room walls are ordinary wallboard with a lead sheet about {#} mm thick, while linac vaults are concrete one to two meters thick. Explain both choices from the photon energies and the interactions in each.":
  "Los muros de las salas de TC son tablaroca común con una lámina de plomo de unos {#} mm de espesor, mientras que los búnkeres de linac son de concreto de uno a dos metros de espesor. Explica ambas elecciones a partir de las energías de los fotones y de las interacciones en cada caso.",
"Lead saves floor space in a linac vault. Why is concrete still the usual choice, and where would a physicist use steel or lead instead?":
  "El plomo ahorra espacio en un búnker de linac. ¿Por qué el concreto sigue siendo la elección habitual, y dónde usaría un físico acero o plomo en su lugar?",
"Why does a linac vault have a maze, and why does an {#} MV vault need polyethylene in its door when a {#} MV vault needs only a little lead or none?":
  "¿Por qué un búnker de linac tiene un laberinto, y por qué un búnker de {#} MV necesita polietileno en su puerta cuando uno de {#} MV necesita solo un poco de plomo o nada?",
"Why does a proton room need walls about as thick as an {#} MV vault, though its beam deposits far less energy than a linac’s? What carries the dose through the wall?":
  "¿Por qué una sala de protones necesita muros más o menos tan gruesos como un búnker de {#} MV, aunque su haz deposita mucha menos energía que el de un linac? ¿Qué lleva la dosis a través del muro?",
"In the proton room, {#} nA of the {#} nA the cyclotron makes is lost before the treatment room, mostly in the degrader. Where should the thickest walls of a proton center be, and why?":
  "En la sala de protones, {#} nA de los {#} nA que produce el ciclotrón se pierden antes de la sala de tratamiento, sobre todo en el degradador. ¿Dónde deberían estar los muros más gruesos de un centro de protones, y por qué?",
"Prelab answers, the four tables with their graphs and fits, your door design, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, las cuatro tablas con sus gráficas y ajustes, tu diseño de puerta, y las respuestas a las preguntas. Identifica los datos simulados.",
"Transmission the barrier may allow, the fraction of the unshielded dose that may pass":
  "Transmisión que puede permitir la barrera, la fracción de la dosis sin blindaje que puede pasar",
"Transmission a secondary wall may allow for the head leakage":
  "Transmisión que puede permitir un muro secundario para la fuga del cabezal",
"Transmission the primary barrier may allow":
  "Transmisión que puede permitir la barrera primaria",
"Weekly dose at the point beyond the wall with no wall":
  "Dosis semanal en el punto más allá del muro sin muro",
"Weekly neutron dose equivalent beyond the proton room wall":
  "Dosis equivalente semanal de neutrones más allá del muro de la sala de protones",
"Neutron dose equivalent at {#} m per proton with no wall":
  "Dosis equivalente de neutrones a {#} m por protón sin muro",
"{#} pSv m² (FLUKA, {#} MeV)":
  "{#} pSv m² (FLUKA, {#} MeV)",
"Protons delivered in a week":
  "Protones entregados en una semana",
"Design goal for the area beyond the wall":
  "Meta de diseño para el área más allá del muro",
"{#} for the public, {#} for radiation workers":
  "{#} para el público, {#} para el personal ocupacionalmente expuesto",
"Occupancy factor of the area beyond the wall":
  "Factor de ocupación del área más allá del muro",
"Use factor, the fraction of the beam time aimed at that wall":
  "Factor de uso, la fracción del tiempo de haz dirigida a ese muro",
"Workload, the weekly dose at isocenter, {#} m from the target":
  "Carga de trabajo, la dosis semanal en el isocentro, a {#} m del blanco",
"Leakage workload, W counted three times for the IMRT treatments":
  "Carga de trabajo de fuga, W contada tres veces para los tratamientos con IMRT",
"Atomic number":
  "Número atómico",
"Archer fit parameter, the attenuation coefficient deep in the wall":
  "Parámetro del ajuste de Archer, el coeficiente de atenuación en lo profundo del muro",
"Archer fit parameter":
  "Parámetro del ajuste de Archer",
"Distance from the linac target to the point {#} m beyond the wall":
  "Distancia del blanco del linac al punto {#} m más allá del muro",
"Fraction of the treatments given as IMRT":
  "Fracción de los tratamientos dados como IMRT",
"Archer fit exponent":
  "Exponente del ajuste de Archer",
"Scatter air kerma at {#} m per unit DLP of one scan":
  "Kerma en aire dispersa a {#} m por unidad de DLP de un estudio",
"{#} × {#}⁻⁵ head, {#} × {#} × {#}⁻⁴ body (NCRP {#})":
  "{#} × {#}⁻⁵ cabeza, {#} × {#} × {#}⁻⁴ cuerpo (NCRP {#})",
"Attenuation length of the neutrons in concrete":
  "Longitud de atenuación de los neutrones en el concreto",
"Number of tenth value layers, log₁₀({#}/B)":
  "Número de capas decirreductoras, log₁₀({#}/B)",
"Distance from the patient to the point beyond the wall":
  "Distancia del paciente al punto más allá del muro",
"Barrier thickness":
  "Espesor de la barrera",
"Shielding Rooms":
  "Blindaje de salas"
});
