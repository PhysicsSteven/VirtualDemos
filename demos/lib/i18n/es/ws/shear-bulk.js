/* ws/shear-bulk in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/shear-bulk', {
"Shear stress F/A (MPa)":
  "Esfuerzo cortante F/A (MPa)",
"Shear strain Δ x/L_0 (× {#}⁻⁴)":
  "Deformación cortante Δ x/L_0 (× {#}⁻⁴)",
"Piston Δ x (mm)":
  "Δ x del pistón (mm)",
"Strain gauge ε (µε)":
  "Galga extensométrica ε (µε)",
"Shear and Bulk Moduli | VirtualDemos":
  "Módulos de corte y volumétrico | VirtualDemos",
"Shear and Bulk Moduli":
  "Módulos de corte y volumétrico",
"Choose the Shear or Bulk test at the top of the panel. A slider under the picture sets the force on the load cell; up and down arrows on the picture change it by {#} kN (Shift: {#} kN).":
  "Elige la prueba de Corte o Volumétrica en la parte superior del panel. Un control deslizante bajo la imagen fija la fuerza en la celda de carga; las flechas arriba y abajo sobre la imagen la cambian en {#} kN (Shift: {#} kN).",
"Shear: a {#} cm cube is bonded between two steel plates. The base is held and the top plate is pushed sideways; a displacement sensor reads how far the top plate moves, to {#} µm.":
  "Corte: un cubo de {#} cm está pegado entre dos placas de acero. La base se sujeta y la placa superior se empuja hacia un lado; un sensor de desplazamiento lee cuánto se mueve la placa superior, con resolución de {#} µm.",
"Bulk: a press pushes a piston into a sealed steel cell with a {#} cm bore. A liquid fills the cell {#} cm deep, and a dial gauge reads how far the piston moves, to {#} mm. A metal sample is a {#} cm cube sitting in oil inside the cell, with a strain gauge on one face that reads the change in its edge length per unit length, to {#} microstrain (µε, one part in a million).":
  "Volumétrica: una prensa empuja un pistón dentro de una celda de acero sellada con un diámetro interior de {#} cm. Un líquido llena la celda hasta {#} cm de profundidad, y un comparador de carátula lee cuánto se mueve el pistón, con resolución de {#} mm. Una muestra de metal es un cubo de {#} cm sumergido en aceite dentro de la celda, con una galga extensométrica en una cara que lee el cambio de la longitud de su arista por unidad de longitud, con resolución de {#} microdeformaciones (µε, una parte en un millón).",
"Record reading stores the force and the reading; the fit in the panel is a straight line of force against the reading for the sample now loaded.":
  "Registrar lectura guarda la fuerza y la lectura; el ajuste del panel es una recta de la fuerza en función de la lectura para la muestra cargada en ese momento.",
"Blind hides the moduli, the stress and strain readouts and the material line, leaving the load cell and the displacement or strain readings. The Mystery metal and the Mystery liquid keep their moduli hidden.":
  "A ciegas oculta los módulos, las lecturas de esfuerzo y deformación y la línea del material, y deja la celda de carga y las lecturas de desplazamiento o de deformación. El metal misterioso y el líquido misterioso mantienen ocultos sus módulos.",
"Linear elastic samples with the shear and bulk moduli of OpenStax Vol. {#}, Table {#} (approximate values). The Mystery metal is the same alloy as in the tension test.":
  "Muestras elásticas lineales con los módulos de corte y volumétrico de OpenStax Vol. {#}, Tabla {#} (valores aproximados). El metal misterioso es la misma aleación que en la prueba de tensión.",
"The block shears uniformly; bending of the block and give in the plates are ignored. The cell’s walls are rigid, and the pressure rise in the cell is the piston force over the piston area.":
  "El bloque se deforma por corte de manera uniforme; se ignoran la flexión del bloque y la holgura de las placas. Las paredes de la celda son rígidas, y el aumento de presión en la celda es la fuerza del pistón entre el área del pistón.",
"In the model \\(\\Delta V/V_0 = -\\Delta p/B\\) holds exactly. Real liquids stiffen a little as the pressure rises, which the model leaves out. Stresses stay at or below {#} MPa.":
  "En el modelo \\(\\Delta V/V_0 = -\\Delta p/B\\) se cumple exactamente. Los líquidos reales se vuelven un poco más rígidos al aumentar la presión, lo que el modelo omite. Los esfuerzos se mantienen en {#} MPa o menos.",
"Measure the shear modulus of a solid and the bulk modulus of liquids and a solid, and compare how hard it is to change a material’s shape with how hard it is to change its volume.":
  "Mide el módulo de corte de un sólido y el módulo volumétrico de líquidos y de un sólido, y compara qué tan difícil es cambiar la forma de un material con qué tan difícil es cambiar su volumen.",
"Young’s modulus describes stretching. Two more elastic moduli describe the other ways a material can be deformed (§{#}).":
  "El módulo de Young describe el estiramiento. Otros dos módulos elásticos describen las otras maneras en que se puede deformar un material (§{#}).",
"<strong>Shear.</strong> Forces of size \\(F_\\parallel\\) act along two opposite faces of a block of height \\(L_0\\) and face area \\(A\\), in opposite directions. The top face slides a distance \\(\\Delta x\\) relative to the bottom. The shear stress and shear strain are":
  "<strong>Corte.</strong> Fuerzas de magnitud \\(F_\\parallel\\) actúan a lo largo de dos caras opuestas de un bloque de altura \\(L_0\\) y área de cara \\(A\\), en sentidos opuestos. La cara superior se desliza una distancia \\(\\Delta x\\) respecto a la inferior. El esfuerzo cortante y la deformación cortante son",
"\\[\\text{shear stress} = \\frac{F_\\parallel}{A},\\qquad \\text{shear strain} = \\frac{\\Delta x}{L_0},\\]":
  "\\[\\text{shear stress} = \\frac{F_\\parallel}{A},\\qquad \\text{shear strain} = \\frac{\\Delta x}{L_0},\\]",
"and in the elastic range their ratio is the <strong>shear modulus</strong>":
  "y en el intervalo elástico su razón es el <strong>módulo de corte</strong>",
"\\[S = \\frac{F_\\parallel/A}{\\Delta x/L_0} = \\frac{F_\\parallel}{A}\\,\\frac{L_0}{\\Delta x}.\\]":
  "\\[S = \\frac{F_\\parallel/A}{\\Delta x/L_0} = \\frac{F_\\parallel}{A}\\,\\frac{L_0}{\\Delta x}.\\]",
"A sheared block changes shape (its square side becomes a parallelogram) but not its volume. A graph of \\(F_\\parallel\\) against \\(\\Delta x\\) is a straight line through the origin with slope \\(SA/L_0\\), so \\(S = \\text{slope}\\times L_0/A\\).":
  "Un bloque deformado por corte cambia de forma (su lado cuadrado se vuelve un paralelogramo) pero no de volumen. Una gráfica de \\(F_\\parallel\\) en función de \\(\\Delta x\\) es una recta que pasa por el origen con pendiente \\(SA/L_0\\), así que \\(S = \\text{slope}\\times L_0/A\\).",
"<strong>Bulk.</strong> When the pressure all around an object rises by \\(\\Delta p\\), its volume \\(V_0\\) falls by \\(\\lvert\\Delta V\\rvert\\). The bulk strain is \\(\\Delta V/V_0\\) and the <strong>bulk modulus</strong> is":
  "<strong>Volumétrica.</strong> Cuando la presión alrededor de un objeto aumenta en \\(\\Delta p\\), su volumen \\(V_0\\) disminuye en \\(\\lvert\\Delta V\\rvert\\). La deformación volumétrica es \\(\\Delta V/V_0\\) y el <strong>módulo volumétrico</strong> es",
"\\[B = -\\frac{\\Delta p}{\\Delta V/V_0}.\\]":
  "\\[B = -\\frac{\\Delta p}{\\Delta V/V_0}.\\]",
"The minus sign makes \\(B\\) positive, since a rise in pressure makes \\(\\Delta V\\) negative. Its reciprocal \\(k = 1/B\\) is the compressibility. Liquids and gases have a bulk modulus but no shear modulus, because they flow instead of holding a sheared shape.":
  "El signo menos hace que \\(B\\) sea positivo, ya que un aumento de presión hace negativo a \\(\\Delta V\\). Su recíproco \\(k = 1/B\\) es la compresibilidad. Los líquidos y los gases tienen módulo volumétrico pero no módulo de corte, porque fluyen en vez de mantener una forma deformada por corte.",
"In the cell, a piston of area \\(A\\) pushed with force \\(F\\) raises the pressure by \\(\\Delta p = F/A\\). For a liquid filling the cell to depth \\(h_0\\) under the piston, the liquid’s volume is \\(Ah_0\\), and when the piston moves in by \\(\\Delta x\\) the volume falls by \\(A\\,\\Delta x\\), so":
  "En la celda, un pistón de área \\(A\\) empujado con una fuerza \\(F\\) eleva la presión en \\(\\Delta p = F/A\\). Para un líquido que llena la celda hasta una profundidad \\(h_0\\) bajo el pistón, el volumen del líquido es \\(Ah_0\\), y cuando el pistón entra \\(\\Delta x\\) el volumen disminuye en \\(A\\,\\Delta x\\), así que",
"\\[\\frac{\\Delta V}{V_0} = -\\frac{\\Delta x}{h_0},\\qquad B = \\frac{F/A}{\\Delta x/h_0} = \\text{slope}\\times\\frac{h_0}{A},\\]":
  "\\[\\frac{\\Delta V}{V_0} = -\\frac{\\Delta x}{h_0},\\qquad B = \\frac{F/A}{\\Delta x/h_0} = \\text{slope}\\times\\frac{h_0}{A},\\]",
"where the slope is that of \\(F\\) against \\(\\Delta x\\). For a cube of edge \\(a_0\\) that shrinks to \\(a_0(1 + \\varepsilon)\\), with \\(\\varepsilon = \\Delta a/a_0\\) the strain gauge reading (negative when the cube shrinks),":
  "donde la pendiente es la de \\(F\\) en función de \\(\\Delta x\\). Para un cubo de arista \\(a_0\\) que se reduce a \\(a_0(1 + \\varepsilon)\\), con \\(\\varepsilon = \\Delta a/a_0\\) la lectura de la galga extensométrica (negativa cuando el cubo se reduce),",
"\\[\\frac{\\Delta V}{V_0} = (1 + \\varepsilon)^3 - 1 \\approx 3\\varepsilon,\\]":
  "\\[\\frac{\\Delta V}{V_0} = (1 + \\varepsilon)^3 - 1 \\approx 3\\varepsilon,\\]",
"since \\(\\varepsilon\\) is a few parts in ten thousand at most here and the terms in \\(\\varepsilon^2\\) and \\(\\varepsilon^3\\) are smaller still. Then \\(B \\approx (F/A)/(-3\\varepsilon)\\), and a graph of \\(F\\) against \\(-\\varepsilon\\) has slope \\(3AB\\).":
  "ya que aquí \\(\\varepsilon\\) es a lo sumo unas pocas partes en diez mil y los términos en \\(\\varepsilon^2\\) y \\(\\varepsilon^3\\) son aún más pequeños. Entonces \\(B \\approx (F/A)/(-3\\varepsilon)\\), y una gráfica de \\(F\\) en función de \\(-\\varepsilon\\) tiene pendiente \\(3AB\\).",
"<strong>Apparatus constants.</strong> Shear block: \\(L_0 = 5.00\\) cm, top face area \\(A = 25.00\\ \\text{cm}^2\\). Bulk cell: bore {#} cm, so piston area \\(A = \\pi(2.00\\ \\text{cm})^2 = 12.566\\ \\text{cm}^2\\); liquid depth \\(h_0 = 10.00\\) cm; metal cube \\(a_0 = 2.000\\) cm.":
  "<strong>Constantes del aparato.</strong> Bloque de corte: \\(L_0 = 5.00\\) cm, área de la cara superior \\(A = 25.00\\ \\text{cm}^2\\). Celda volumétrica: diámetro interior {#} cm, así que el área del pistón es \\(A = \\pi(2.00\\ \\text{cm})^2 = 12.566\\ \\text{cm}^2\\); profundidad del líquido \\(h_0 = 10.00\\) cm; cubo de metal \\(a_0 = 2.000\\) cm.",
"A force of {#} kN acts along the top of the shear block. Find the shear stress in MPa. If the block is aluminum (\\(S = 2.5\\times10^{10}\\) Pa), how far does the top move, in micrometers?":
  "Una fuerza de {#} kN actúa a lo largo de la parte superior del bloque de corte. Encuentra el esfuerzo cortante en MPa. Si el bloque es de aluminio (\\(S = 2.5\\times10^{10}\\) Pa), ¿cuánto se mueve la parte superior, en micrómetros?",
"Find the pressure rise in the cell when the press pushes the piston with {#} kN. By what fraction does water (\\(B = 2.2\\times10^{9}\\) Pa) shrink, and how far does the piston move?":
  "Encuentra el aumento de presión en la celda cuando la prensa empuja el pistón con {#} kN. ¿En qué fracción se reduce el agua (\\(B = 2.2\\times10^{9}\\) Pa), y cuánto se mueve el pistón?",
"At the same pressure, how does the strain gauge reading on a steel cube (\\(B = 1.6\\times10^{11}\\) Pa) compare with the piston’s fractional travel for water? Predict the ratio before you measure.":
  "A la misma presión, ¿cómo se compara la lectura de la galga extensométrica en un cubo de acero (\\(B = 1.6\\times10^{11}\\) Pa) con el recorrido fraccionario del pistón para el agua? Predice la razón antes de medir.",
"A real press stores energy in its frame and in the sample. Keep hands clear of the platens, use guards and stay below the rated load; in a pressure cell, pressurize only behind a shield and release slowly. Brittle samples such as glass or granite can crack suddenly. The simulation has no hazards.":
  "Una prensa real almacena energía en su estructura y en la muestra. Mantén las manos lejos de las placas, usa protecciones y no rebases la carga nominal; en una celda de presión, presuriza solo detrás de un escudo y libera la presión despacio. Las muestras frágiles como el vidrio o el granito pueden agrietarse de repente. La simulación no tiene riesgos.",
"Turn Blind on before you start, so the demo shows only the load cell and the displacement or strain reading. Use a fresh series for each sample: send it to the worksheet, then clear the readings before the next sample. Shear series go to the first data table and bulk series to the second.":
  "Activa A ciegas antes de empezar, para que la demo muestre solo la celda de carga y la lectura de desplazamiento o de deformación. Usa una serie nueva para cada muestra: envíala a la hoja de trabajo y luego borra las lecturas antes de la siguiente muestra. Las series de corte van a la primera tabla de datos y las volumétricas a la segunda.",
"<strong>Part {#}: shear.</strong> In the Shear test, load an aluminum block from {#} to {#} kN in steps of {#} kN, recording the top plate’s displacement at each force, then return to zero. Repeat with steel and with the Mystery metal.":
  "<strong>Parte {#}: corte.</strong> En la prueba de Corte, carga un bloque de aluminio de {#} a {#} kN en pasos de {#} kN, registrando el desplazamiento de la placa superior en cada fuerza, y luego regresa a cero. Repite con acero y con el metal misterioso.",
"<strong>Part {#}: bulk modulus of liquids.</strong> In the Bulk test, fill the cell with water and raise the force from {#} to {#} kN in steps of {#} kN, recording the piston’s travel. Repeat with acetone and with the Mystery liquid.":
  "<strong>Parte {#}: módulo volumétrico de líquidos.</strong> En la prueba Volumétrica, llena la celda con agua y sube la fuerza de {#} a {#} kN en pasos de {#} kN, registrando el recorrido del pistón. Repite con acetona y con el líquido misterioso.",
"<strong>Part {#}: bulk modulus of a solid.</strong> Put the steel cube in the cell and record the strain gauge reading at the same forces as in Part {#}. Repeat with the Mystery metal cube.":
  "<strong>Parte {#}: módulo volumétrico de un sólido.</strong> Pon el cubo de acero en la celda y registra la lectura de la galga extensométrica a las mismas fuerzas que en la Parte {#}. Repite con el cubo de metal misterioso.",
"When your fits are done and your moduli are recorded, turn Blind off and compare with the demo’s values.":
  "Cuando hayas terminado tus ajustes y registrado tus módulos, desactiva A ciegas y compara con los valores de la demo.",
"<strong>Shear.</strong> One copy of this table for each block. \\(L_0 = 5.00\\) cm, \\(A = 25.00\\ \\text{cm}^2\\).":
  "<strong>Corte.</strong> Una copia de esta tabla para cada bloque. \\(L_0 = 5.00\\) cm, \\(A = 25.00\\ \\text{cm}^2\\).",
"<span>B</span>Block":
  "<span>B</span>Bloque",
"<span>D</span>\\(\\Delta x\\) (µm)":
  "<span>D</span>\\(\\Delta x\\) (µm)",
"<span>E</span>Shear stress \\(F/A\\) (MPa)":
  "<span>E</span>Esfuerzo cortante \\(F/A\\) (MPa)",
"<span>F</span>Shear strain \\(\\Delta x/L_0\\) (× {#}⁻⁴)":
  "<span>F</span>Deformación cortante \\(\\Delta x/L_0\\) (× {#}⁻⁴)",
"Block, row {#}":
  "Bloque, fila {#}",
"F (kN), row {#}":
  "F (kN), fila {#}",
"Δ x (µm), row {#}":
  "Δ x (µm), fila {#}",
"Shear stress F/A (MPa), row {#}":
  "Esfuerzo cortante F/A (MPa), fila {#}",
"Shear strain Δ x/L_0 (× {#}⁻⁴), row {#}":
  "Deformación cortante Δ x/L_0 (× {#}⁻⁴), fila {#}",
"Shear strain Δ x/L₀ (× {#}⁻⁴)":
  "Deformación cortante Δ x/L₀ (× {#}⁻⁴)",
"<strong>Bulk.</strong> One copy of this table for each liquid or cube. Piston area \\(A = 12.566\\ \\text{cm}^2\\), \\(h_0 = 10.00\\) cm, \\(a_0 = 2.000\\) cm.":
  "<strong>Volumétrica.</strong> Una copia de esta tabla para cada líquido o cubo. Área del pistón \\(A = 12.566\\ \\text{cm}^2\\), \\(h_0 = 10.00\\) cm, \\(a_0 = 2.000\\) cm.",
"<span>B</span>Sample":
  "<span>B</span>Muestra",
"<span>D</span>Piston \\(\\Delta x\\) (mm)":
  "<span>D</span>\\(\\Delta x\\) del pistón (mm)",
"<span>E</span>Strain gauge \\(\\varepsilon\\) (µε)":
  "<span>E</span>Galga extensométrica \\(\\varepsilon\\) (µε)",
"<span>F</span>\\(\\Delta p = F/A\\) (MPa)":
  "<span>F</span>\\(\\Delta p = F/A\\) (MPa)",
"<span>G</span>\\(-\\Delta V/V_0\\) (× {#}⁻⁴)":
  "<span>G</span>\\(-\\Delta V/V_0\\) (× {#}⁻⁴)",
"Sample, row {#}":
  "Muestra, fila {#}",
"Piston Δ x (mm), row {#}":
  "Δ x del pistón (mm), fila {#}",
"Strain gauge ε (µε), row {#}":
  "Galga extensométrica ε (µε), fila {#}",
"Δ p = F/A (MPa), row {#}":
  "Δ p = F/A (MPa), fila {#}",
"-Δ V/V_0 (× {#}⁻⁴), row {#}":
  "-Δ V/V_0 (× {#}⁻⁴), fila {#}",
"For a liquid, \\(-\\Delta V/V_0 = \\Delta x/h_0\\); for a cube, \\(-\\Delta V/V_0 = 1 - (1 + \\varepsilon)^3\\).":
  "Para un líquido, \\(-\\Delta V/V_0 = \\Delta x/h_0\\); para un cubo, \\(-\\Delta V/V_0 = 1 - (1 + \\varepsilon)^3\\).",
"For each block, fit \\(F\\) against \\(\\Delta x\\) and find \\(S = \\text{slope}\\times L_0/A\\), with its uncertainty from the slope’s. Compare aluminum and steel with Table {#} of the textbook, and give the Mystery metal’s shear modulus.":
  "Para cada bloque, ajusta \\(F\\) en función de \\(\\Delta x\\) y encuentra \\(S = \\text{slope}\\times L_0/A\\), con su incertidumbre a partir de la de la pendiente. Compara el aluminio y el acero con la Tabla {#} del libro de texto, y da el módulo de corte del metal misterioso.",
"For each liquid, fit \\(F\\) against \\(\\Delta x\\) and find \\(B = \\text{slope}\\times h_0/A\\). Compare water and acetone with Table {#}, and give the Mystery liquid’s bulk modulus and its compressibility in {#}/atm ({#} atm = {#} {#} Pa).":
  "Para cada líquido, ajusta \\(F\\) en función de \\(\\Delta x\\) y encuentra \\(B = \\text{slope}\\times h_0/A\\). Compara el agua y la acetona con la Tabla {#}, y da el módulo volumétrico del líquido misterioso y su compresibilidad en {#}/atm ({#} atm = {#} {#} Pa).",
"For each cube, fit \\(F\\) against the strain gauge reading \\(\\varepsilon\\). Since \\(\\varepsilon\\) is negative the slope is negative, so \\(B = -\\text{slope}/(3A)\\) with \\(\\varepsilon\\) in plain numbers ({#} µε = {#}⁻⁶). Then, for the largest force, find \\(B\\) from the exact \\(\\Delta V/V_0 = (1 + \\varepsilon)^3 - 1\\) and show that the approximation \\(3\\varepsilon\\) changes \\(B\\) by much less than your uncertainty.":
  "Para cada cubo, ajusta \\(F\\) en función de la lectura de la galga extensométrica \\(\\varepsilon\\). Como \\(\\varepsilon\\) es negativa la pendiente es negativa, así que \\(B = -\\text{slope}/(3A)\\) con \\(\\varepsilon\\) como número puro ({#} µε = {#}⁻⁶). Luego, para la fuerza más grande, encuentra \\(B\\) a partir de la expresión exacta \\(\\Delta V/V_0 = (1 + \\varepsilon)^3 - 1\\) y muestra que la aproximación \\(3\\varepsilon\\) cambia \\(B\\) mucho menos que tu incertidumbre.",
"Steel’s Young’s modulus is about \\(2.0\\times10^{11}\\) Pa. Put steel’s \\(Y\\), \\(S\\) and \\(B\\) in order. Which is easier for steel: changing its shape or changing its volume?":
  "El módulo de Young del acero es aproximadamente \\(2.0\\times10^{11}\\) Pa. Ordena \\(Y\\), \\(S\\) y \\(B\\) del acero. ¿Qué le es más fácil al acero: cambiar su forma o cambiar su volumen?",
"Compare water’s bulk modulus with steel’s. By what factor does the same pressure change water’s volume more than steel’s? Is it reasonable to treat water as incompressible in a hydraulic jack at a few megapascals?":
  "Compara el módulo volumétrico del agua con el del acero. ¿En qué factor cambia la misma presión el volumen del agua más que el del acero? ¿Es razonable tratar el agua como incompresible en un gato hidráulico a unos pocos megapascales?",
"The readings are exact model values rounded by the instruments: the load cell to {#} kN, the displacement sensor to {#} µm, the dial gauge to {#} mm and the strain gauge to {#} µε. The smallest readings (a stiff sample at a low force) have the largest relative rounding error, so judge which points limit your fit. The dimensions are exact in the model; on real apparatus the face area, the piston diameter and the column height each carry a measurement uncertainty, and the piston diameter enters the area squared. A real cell’s walls also stretch a little under pressure, which a careful experiment corrects for with a sample of known modulus.":
  "Las lecturas son valores exactos del modelo redondeados por los instrumentos: la celda de carga a {#} kN, el sensor de desplazamiento a {#} µm, el comparador de carátula a {#} mm y la galga extensométrica a {#} µε. Las lecturas más pequeñas (una muestra rígida a una fuerza baja) tienen el mayor error relativo de redondeo, así que juzga qué puntos limitan tu ajuste. Las dimensiones son exactas en el modelo; en un aparato real el área de la cara, el diámetro del pistón y la altura de la columna tienen cada uno una incertidumbre de medición, y el diámetro del pistón entra al cuadrado en el área. Las paredes de una celda real también se estiran un poco bajo presión, lo que un experimento cuidadoso corrige con una muestra de módulo conocido.",
"Why does a sheared block keep its volume while a squeezed one does not?":
  "¿Por qué un bloque deformado por corte conserva su volumen y uno comprimido no?",
"Table {#} lists bulk moduli for liquids but no shear moduli. Why can’t a liquid have a shear modulus?":
  "La Tabla {#} da módulos volumétricos de líquidos pero no módulos de corte. ¿Por qué un líquido no puede tener módulo de corte?",
"A hydraulic system uses oil with \\(B \\approx 1.5\\times10^{9}\\) Pa. Explain why air bubbles in the oil make the brake pedal feel spongy.":
  "Un sistema hidráulico usa aceite con \\(B \\approx 1.5\\times10^{9}\\) Pa. Explica por qué las burbujas de aire en el aceite hacen que el pedal del freno se sienta esponjoso.",
"The deepest ocean pressure is about \\(1.1\\times10^{8}\\) Pa. Estimate the fractional change in the volume of water there, using the bulk modulus you measured. Why might the real change be a little smaller?":
  "La presión más profunda del océano es de aproximadamente \\(1.1\\times10^{8}\\) Pa. Estima el cambio fraccionario del volumen del agua ahí, usando el módulo volumétrico que mediste. ¿Por qué el cambio real podría ser un poco menor?",
"For an isotropic solid, \\(Y\\), \\(S\\) and \\(B\\) are not independent: \\(Y = 2S(1+\\nu) = 3B(1-2\\nu)\\), where \\(\\nu\\) is Poisson’s ratio. The Mystery metal’s Young’s modulus from the tension test is \\(1.1\\times10^{11}\\) Pa. Use your \\(S\\) to find \\(\\nu\\), then predict \\(B\\) and compare with your Part {#} result.":
  "Para un sólido isótropo, \\(Y\\), \\(S\\) y \\(B\\) no son independientes: \\(Y = 2S(1+\\nu) = 3B(1-2\\nu)\\), donde \\(\\nu\\) es la razón de Poisson. El módulo de Young del metal misterioso según la prueba de tensión es \\(1.1\\times10^{11}\\) Pa. Usa tu \\(S\\) para encontrar \\(\\nu\\), luego predice \\(B\\) y compara con tu resultado de la Parte {#}.",
"Answers to Before the lab, a copy of the shear table for each block and of the bulk table for each sample, the fits with residuals, the moduli with uncertainties and their comparison with Table {#}, and answers to the questions. Identify simulated data.":
  "Respuestas de Antes del laboratorio, una copia de la tabla de corte para cada bloque y de la tabla volumétrica para cada muestra, los ajustes con residuos, los módulos con incertidumbres y su comparación con la Tabla {#}, y las respuestas a las preguntas. Identifica los datos simulados.",
"Area of a face, or of the piston":
  "Área de una cara, o del pistón",
"Bulk modulus":
  "Módulo volumétrico",
"Shear force on a face":
  "Fuerza cortante sobre una cara",
"Height of the block":
  "Altura del bloque",
"Shear modulus":
  "Módulo de corte",
"Volume (ΔV: its change)":
  "Volumen (ΔV: su cambio)",
"Starting volume":
  "Volumen inicial",
"Young's modulus":
  "Módulo de Young",
"Edge of the cube (Δa: its change)":
  "Arista del cubo (Δa: su cambio)",
"Edge of the metal cube":
  "Arista del cubo de metal",
"Strain of the cube's edge, Δa/a₀ (a pure number; the gauge reads it in µε)":
  "Deformación de la arista del cubo, Δa/a₀ (un número puro; la galga la lee en µε)",
"Depth of the liquid under the piston":
  "Profundidad del líquido bajo el pistón",
"Compressibility, {#}/B":
  "Compresibilidad, {#}/B",
"Poisson's ratio":
  "Coeficiente de Poisson",
"Pressure (Δp: its rise)":
  "Presión (Δp: su aumento)",
"Displacement (Δx: of the top face, or of the piston)":
  "Desplazamiento (Δx: de la cara superior, o del pistón)",
"Stress and Strain":
  "Esfuerzo y deformación"
});
