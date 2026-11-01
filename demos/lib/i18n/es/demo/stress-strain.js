/* demo/stress-strain in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'demo/stress-strain', {
"ΔL (mm)":
  "ΔL (mm)",
"ΔL = {#} mm":
  "ΔL = {#} mm",
"dial gauge, {#} mm · stretch drawn exaggerated":
  "comparador de carátula, {#} mm · estiramiento dibujado exagerado",
"strain ε = ΔL/L":
  "deformación ε = ΔL/L",
"stress σ (MPa)":
  "esfuerzo σ (MPa)",
"yield":
  "fluencia",
"tensile strength":
  "resistencia a la tensión",
"fracture":
  "fractura",
"Stress and Strain":
  "Esfuerzo y deformación",
"Hang a load on a long thin wire and read how much it stretches. Stress F/A over strain ΔL/L is Young's modulus, as long as the wire springs back. Load it past its yield point and it stays longer; keep going and it breaks.":
  "Cuelga una carga de un alambre largo y delgado y lee cuánto se estira. El esfuerzo F/A entre la deformación ΔL/L es el módulo de Young, siempre que el alambre recupere su longitud. Cárgalo más allá de su punto de fluencia y se queda más largo; sigue y se rompe.",
"wire {#} m long · g = {#} m/s²":
  "alambre de {#} m de largo · g = {#} m/s²",
"A wire hanging from a beam with a load on it and a dial gauge reading the extension, beside a graph of stress against strain. Up and down arrows change the load.":
  "Un alambre colgado de una viga con una carga y un comparador de carátula que lee el alargamiento, junto a una gráfica de esfuerzo en función de deformación. Las flechas arriba y abajo cambian la carga.",
"Take all the load off":
  "Quitar toda la carga",
"New wire":
  "Alambre nuevo",
"Release the press":
  "Liberar la prensa",
"Divider between the wire and the graph":
  "Divisor entre el alambre y la gráfica",
"Divider between the press and the graph":
  "Divisor entre la prensa y la gráfica",
"Hanging mass: click a slotted mass to hang it":
  "Masa colgante: haz clic en una pesa ranurada para colgarla",
"Add {#} g":
  "Agregar {#} g",
"Add {#} kg":
  "Agregar {#} kg",
"Take off the last mass":
  "Quitar la última masa",
"{#} kg hanging (F = {#} N)":
  "{#} kg colgando (F = {#} N)",
"Press force: turn the screw":
  "Fuerza de la prensa: gira el tornillo",
"Force F on the load cell":
  "Fuerza F en la celda de carga",
"<a>Worksheet {#}: Young's Modulus</a>":
  "<a>Hoja de trabajo {#}: Módulo de Young</a>",
"<a>Worksheet {#}: Shear and Bulk Moduli</a>":
  "<a>Hoja de trabajo {#}: Módulos de corte y volumétrico</a>",
"Test":
  "Prueba",
"Tension (Young's modulus)":
  "Tensión (módulo de Young)",
"Shear":
  "Corte",
"Bulk (squeeze)":
  "Volumétrica (compresión)",
"Liquids: in the piston cell":
  "Líquidos: en la celda con pistón",
"Solids":
  "Sólidos",
"Wire":
  "Alambre",
"Mild steel":
  "Acero dulce",
"Copper (annealed)":
  "Cobre (recocido)",
"Aluminum alloy":
  "Aleación de aluminio",
"Mystery metal":
  "Metal misterioso",
"Diameter d":
  "Diámetro d",
"Mild steel: Y about {#} GPa, yield about {#} MPa, strength about {#} MPa. Stiff and strong; it stretches a lot before it breaks.":
  "Acero dulce: Y de unos {#} GPa, fluencia de unos {#} MPa, resistencia de unos {#} MPa. Rígido y resistente; se estira mucho antes de romperse.",
"Load":
  "Carga",
"Load F = mg":
  "Carga F = mg",
"Area A = πd²/{#}":
  "Área A = πd²/{#}",
"Extension ΔL (dial)":
  "Alargamiento ΔL (comparador)",
"Stress σ = F/A":
  "Esfuerzo σ = F/A",
"Strain ε = ΔL/L":
  "Deformación ε = ΔL/L",
"Young's modulus Y":
  "Módulo de Young Y",
"Yield stress":
  "Esfuerzo de fluencia",
"{#} MPa (at {#} kg)":
  "{#} MPa (a {#} kg)",
"Tensile strength":
  "Resistencia a la tensión",
"<span>Graph: zoom in on the elastic part</span>":
  "<span>Gráfica: acercar la parte elástica</span>",
"Hang slotted masses from the tray under the wire; up and down arrows on the picture add or take off {#} kg (Shift: {#} kg).":
  "Cuelga pesas ranuradas de la bandeja bajo el alambre; las flechas arriba y abajo sobre la imagen agregan o quitan {#} kg (Shift: {#} kg).",
"stress σ = F/A · strain ε = ΔL/L · Y = σ/ε (elastic)":
  "esfuerzo σ = F/A · deformación ε = ΔL/L · Y = σ/ε (elástico)",
"No readings yet. Set a load, then capture.":
  "Aún no hay lecturas. Fija una carga y luego captura.",
"Capture stores the hanging mass and the dial gauge reading (to {#} mm), with the wire's diameter. The fit is a straight line of the load F = mg against ΔL; Y = slope × L / A. Use only loads below the yield point. The fit uses the rows from the wire now hanging; New wire starts afresh (the CSV keeps every row).":
  "Capturar guarda la masa colgante y la lectura del comparador de carátula (con resolución de {#} mm), con el diámetro del alambre. El ajuste es una recta de la carga F = mg en función de ΔL; Y = pendiente × L / A. Usa solo cargas por debajo del punto de fluencia. El ajuste usa las filas del alambre que cuelga ahora; Alambre nuevo empieza de cero (el CSV conserva todas las filas).",
"Load against extension (or force against displacement or strain) for the captured rows, with a least squares line and residuals.":
  "Carga en función del alargamiento (o fuerza en función del desplazamiento o de la deformación) para las filas capturadas, con una recta por mínimos cuadrados y residuos.",
"Capture at least two rows on this wire (Mild steel, d = {#} mm). The fit uses only rows from the wire now hanging; New wire starts a new fit.":
  "Captura al menos dos filas con este alambre (Acero dulce, d = {#} mm). El ajuste usa solo filas del alambre que cuelga ahora; Alambre nuevo empieza un ajuste nuevo.",
"Plotted points":
  "Puntos graficados",
"fit (N)":
  "ajuste (N)",
"resid. (N)":
  "resid. (N)",
"Blind hides Young's modulus, the yield and breaking stresses, the stress and strain readouts, the material curve and Y from the fit, leaving the load, the diameter and the dial gauge. The Mystery metal is always blind about its own properties.":
  "A ciegas oculta el módulo de Young, los esfuerzos de fluencia y de ruptura, las lecturas de esfuerzo y deformación, la curva del material y la Y del ajuste, y deja la carga, el diámetro y el comparador de carátula. El Metal misterioso siempre oculta sus propias propiedades.",
"Model: an idealized stress against strain curve: straight to the yield stress, then hardening up to the tensile strength, breaking at the fracture strain; unloading follows a line parallel to the elastic one, leaving a permanent stretch. Values are typical for each metal; real samples vary. Necking, creep and the wire's own weight are ignored.":
  "Modelo: una curva idealizada de esfuerzo en función de deformación: recta hasta el esfuerzo de fluencia, luego endurecimiento hasta la resistencia a la tensión, y ruptura en la deformación de fractura; la descarga sigue una recta paralela a la elástica, dejando un estiramiento permanente. Los valores son típicos para cada metal; las muestras reales varían. Se ignoran la estricción, la fluencia lenta y el peso propio del alambre.",
"Shear and Bulk tests: linear elastic only, with the shear and bulk moduli of OpenStax University Physics Vol. {#}, Table {#} (approximate values; the Mystery metal is the tension test's alloy and the Mystery liquid is made up). Shear: a {#} cm cube bonded between two steel plates, its base held and its top plate pushed sideways; the block shears uniformly (bending and the plates' own give are ignored). Bulk: a rigid steel cell with a {#} cm bore; a liquid fills it {#} cm deep under the piston, or a {#} cm metal cube with a strain gauge sits in oil inside it. The pressure rise is F/A of the piston, and ΔV/V₀ = −Δp/B exactly in the model; real liquids stiffen slightly as the pressure rises, which the model leaves out. Stresses stay at or below {#} MPa, where these metals stay elastic in shear (lead is left out of the shear test because it would flow); real glass and granite are brittle and could crack near the top of that range. Squeezing from every side, as in the bulk test, does not make a metal yield.":
  "Pruebas de corte y volumétrica: solo elásticas lineales, con los módulos de corte y volumétrico de OpenStax University Physics Vol. {#}, Tabla {#} (valores aproximados; el Metal misterioso es la aleación de la prueba de tensión y el Líquido misterioso es inventado). Corte: un cubo de {#} cm pegado entre dos placas de acero, con su base fija y su placa superior empujada hacia un lado; el bloque se deforma en corte de manera uniforme (se ignoran la flexión y la deformación propia de las placas). Volumétrica: una celda rígida de acero con un diámetro interior de {#} cm; un líquido la llena hasta {#} cm de profundidad bajo el pistón, o un cubo metálico de {#} cm con una galga extensométrica está en aceite dentro de ella. El aumento de presión es F/A del pistón, y ΔV/V₀ = −Δp/B exactamente en el modelo; los líquidos reales se vuelven un poco más rígidos al subir la presión, lo que el modelo omite. Los esfuerzos se mantienen en {#} MPa o menos, donde estos metales siguen siendo elásticos en corte (el plomo se excluye de la prueba de corte porque fluiría); el vidrio y el granito reales son frágiles y podrían agrietarse cerca del extremo superior de ese intervalo. Comprimir desde todos lados, como en la prueba volumétrica, no hace que un metal fluya.",
"Blind in Shear and Bulk hides the moduli, the stress and strain readouts and the material line, leaving the load cell and the displacement or strain readings.":
  "A ciegas en Corte y Volumétrica oculta los módulos, las lecturas de esfuerzo y deformación y la recta del material, y deja la celda de carga y las lecturas de desplazamiento o deformación.",
"<a>Static equilibrium and elasticity</a>":
  "<a>Equilibrio estático y elasticidad</a>",
"<a><span>←</span> <span>Static Equilibrium</span></a><a><span>Fluids: Pressure, Buoyancy and Flow</span> <span>→</span></a>":
  "<a><span>←</span> <span>Equilibrio estático</span></a><a><span>Fluidos: presión, flotación y flujo</span> <span>→</span></a>",
"LOAD CELL":
  "CELDA DE CARGA",
"displacement sensor":
  "sensor de desplazamiento",
"F = {#} kN Δx = {#} µm":
  "F = {#} kN Δx = {#} µm",
"load cell {#} kN · displacement sensor {#} µm · lean drawn {#} times larger":
  "celda de carga {#} kN · sensor de desplazamiento {#} µm · inclinación dibujada {#} veces más grande",
"shear strain Δx/L (× {#}⁻⁴)":
  "deformación de corte Δx/L (× {#}⁻⁴)",
"shear stress F/A (MPa)":
  "esfuerzo de corte F/A (MPa)",
"slope = S":
  "pendiente = S",
"Δx (µm)":
  "Δx (µm)",
"Push the top of a bonded block sideways while its base is held. Shear stress F/A over shear strain Δx/L is the shear modulus S. The block leans but keeps its volume.":
  "Empuja hacia un lado la parte superior de un bloque pegado mientras su base está fija. El esfuerzo de corte F/A entre la deformación de corte Δx/L es el módulo de corte S. El bloque se inclina pero conserva su volumen.",
"block {#} cm cube · top face {#} cm²":
  "bloque cubo de {#} cm · cara superior {#} cm²",
"Brass":
  "Latón",
"Crown glass":
  "Vidrio crown",
"Granite":
  "Granito",
"Solids: a cube with a strain gauge, in oil":
  "Sólidos: un cubo con galga extensométrica, en aceite",
"Aluminum: S = {#} GPa (OpenStax Vol. {#}, Table {#}).":
  "Aluminio: S = {#} GPa (OpenStax Vol. {#}, Tabla {#}).",
"Turn the screw to push the top plate sideways; the load cell reads the force and the displacement sensor reads how far the top plate moves (to {#} µm). Up and down arrows on the picture change the force by {#} kN (Shift: {#} kN).":
  "Gira el tornillo para empujar la placa superior hacia un lado; la celda de carga lee la fuerza y el sensor de desplazamiento lee cuánto se mueve la placa superior (con resolución de {#} µm). Las flechas arriba y abajo sobre la imagen cambian la fuerza {#} kN (Shift: {#} kN).",
"shear stress F/A · shear strain Δx/L · S = (F/A)/(Δx/L)":
  "esfuerzo de corte F/A · deformación de corte Δx/L · S = (F/A)/(Δx/L)",
"Capture stores the force and the top plate displacement for the block now in the press. The fit is a straight line of F against Δx for the rows from this block; S = slope × L / A.":
  "Capturar guarda la fuerza y el desplazamiento de la placa superior para el bloque que está ahora en la prensa. El ajuste es una recta de F en función de Δx para las filas de este bloque; S = pendiente × L / A.",
"Shear press: turn the screw":
  "Prensa de corte: gira el tornillo",
"Capture at least two rows with Aluminum in the press. The fit uses only rows from the sample now loaded.":
  "Captura al menos dos filas con Aluminio en la prensa. El ajuste usa solo filas de la muestra cargada ahora.",
"Force F (load cell)":
  "Fuerza F (celda de carga)",
"Top plate moves Δx":
  "La placa superior se mueve Δx",
"Top face area A":
  "Área de la cara superior A",
"Block height L":
  "Altura del bloque L",
"Shear stress F/A":
  "Esfuerzo de corte F/A",
"Shear strain Δx/L":
  "Deformación de corte Δx/L",
"Shear modulus S":
  "Módulo de corte S",
"No readings yet. Set a force, then capture.":
  "Aún no hay lecturas. Fija una fuerza y luego captura.",
"load cell":
  "celda de carga",
"F = {#} kN Δx = {#} mm":
  "F = {#} kN Δx = {#} mm",
"load cell {#} kN · dial gauge {#} mm · squeeze drawn {#} times larger":
  "celda de carga {#} kN · comparador de carátula {#} mm · compresión dibujada {#} veces más grande",
"volume strain −ΔV/V₀ (× {#}⁻³)":
  "deformación volumétrica −ΔV/V₀ (× {#}⁻³)",
"pressure rise Δp (MPa)":
  "aumento de presión Δp (MPa)",
"slope = B":
  "pendiente = B",
"Δx (mm)":
  "Δx (mm)",
"Squeeze a liquid, or a metal cube in oil, from every side at once. The pressure rise Δp over the fraction of volume lost, −ΔV/V₀, is the bulk modulus B. Liquids give way far more than metals.":
  "Comprime un líquido, o un cubo metálico en aceite, desde todos lados a la vez. El aumento de presión Δp entre la fracción de volumen perdida, −ΔV/V₀, es el módulo volumétrico B. Los líquidos ceden mucho más que los metales.",
"cell bore {#} cm · piston {#} cm² · liquid {#} cm deep · cube {#} cm":
  "diámetro interior de la celda {#} cm · pistón {#} cm² · líquido de {#} cm de profundidad · cubo {#} cm",
"Ethanol":
  "Etanol",
"Acetone":
  "Acetona",
"Glycerin":
  "Glicerina",
"Mystery liquid":
  "Líquido misterioso",
"Water: B = {#} GPa (OpenStax Vol. {#}, Table {#}).":
  "Agua: B = {#} GPa (OpenStax Vol. {#}, Tabla {#}).",
"The press pushes the piston into the sealed cell; the load cell reads the force. For a liquid the dial gauge reads how far the piston moves (to {#} mm); for a metal cube in oil the strain gauge on its face reads the change in edge length per length (to {#} microstrain). Up and down arrows change the force by {#} kN (Shift: {#} kN).":
  "La prensa empuja el pistón dentro de la celda sellada; la celda de carga lee la fuerza. Para un líquido, el comparador de carátula lee cuánto se mueve el pistón (con resolución de {#} mm); para un cubo metálico en aceite, la galga extensométrica en su cara lee el cambio de longitud de la arista por unidad de longitud (con resolución de {#} microdeformaciones). Las flechas arriba y abajo cambian la fuerza {#} kN (Shift: {#} kN).",
"Δp = F/A · ΔV/V₀ = −Δx/h₀ (liquid) or ({#} + Δa/a₀)³ − {#} ≈ {#} Δa/a₀ (cube) · B = −Δp/(ΔV/V₀)":
  "Δp = F/A · ΔV/V₀ = −Δx/h₀ (líquido) o ({#} + Δa/a₀)³ − {#} ≈ {#} Δa/a₀ (cubo) · B = −Δp/(ΔV/V₀)",
"Capture stores the force and the piston or strain gauge reading for the sample now in the cell. The fit is a straight line of F against the reading for the rows from this sample: B = slope × h₀ / A for a liquid, and B ≈ slope / (3A) per unit strain for the cube.":
  "Capturar guarda la fuerza y la lectura del pistón o de la galga extensométrica para la muestra que está ahora en la celda. El ajuste es una recta de F en función de la lectura para las filas de esta muestra: B = pendiente × h₀ / A para un líquido, y B ≈ pendiente / (3A) por unidad de deformación para el cubo.",
"Press on the cell piston":
  "Presionar el pistón de la celda",
"Capture at least two rows with Water in the cell. The fit uses only rows from the sample now loaded.":
  "Captura al menos dos filas con Agua en la celda. El ajuste usa solo filas de la muestra cargada ahora.",
"Piston moves Δx":
  "El pistón se mueve Δx",
"Piston area A":
  "Área del pistón A",
"Liquid column h₀":
  "Columna de líquido h₀",
"Pressure rise Δp = F/A":
  "Aumento de presión Δp = F/A",
"Volume strain ΔV/V₀":
  "Deformación volumétrica ΔV/V₀",
"Bulk modulus B":
  "Módulo volumétrico B",
"Annealed copper: Y about {#} GPa but it yields early, about {#} MPa, then hardens a long way. Bend a copper wire and it stays bent.":
  "Cobre recocido: Y de unos {#} GPa pero fluye pronto, a unos {#} MPa, y luego se endurece mucho. Dobla un alambre de cobre y se queda doblado.",
"An aluminum alloy: Y about {#} GPa, so it stretches almost three times as much as steel under the same stress, but it breaks soon after it yields.":
  "Una aleación de aluminio: Y de unos {#} GPa, así que se estira casi tres veces más que el acero bajo el mismo esfuerzo, pero se rompe poco después de fluir.",
"An unknown metal. Find its Young's modulus from your readings, then load it until it yields. Its properties stay hidden.":
  "Un metal desconocido. Encuentra su módulo de Young a partir de tus lecturas y luego cárgalo hasta que fluya. Sus propiedades permanecen ocultas.",
"Water, bulk":
  "Agua, volumétrica",
"Row {#} captured.":
  "Fila {#} capturada.",
"Capture at least two rows on this wire (Mystery metal, d = {#} mm). The fit uses only rows from the wire now hanging; New wire starts a new fit.":
  "Captura al menos dos filas con este alambre (Metal misterioso, d = {#} mm). El ajuste usa solo filas del alambre que cuelga ahora; Alambre nuevo empieza un ajuste nuevo.",
"Stress, strain, Y, yield and strength":
  "Esfuerzo, deformación, Y, fluencia y resistencia",
"hidden: work them out":
  "ocultos: calcúlalos",
"sensor":
  "sensor"
});
