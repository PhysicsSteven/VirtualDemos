/* ws/resistivity in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/resistivity', {
"Real time t (μs)":
  "Tiempo real t (μs)",
"Drift so far s (nm)":
  "Deriva hasta ahora s (nm)",
"Net crossings N":
  "Cruces netos N",
"I/(neA) (mm/s)":
  "I/(neA) (mm/s)",
"Expected N = n s ({#} nm^{#})":
  "N esperado = n s ({#} nm^{#})",
"Time to drift {#} m (min)":
  "Tiempo para derivar {#} m (min)",
"Measuring a Wire’s Resistivity | VirtualDemos":
  "Medición de la resistividad de un alambre | VirtualDemos",
"Measuring a Wire’s Resistivity":
  "Medición de la resistividad de un alambre",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} to {#} and §{#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} a {#} y §{#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"In the <strong>Wire</strong> view: drag the sliding clip to set the <strong>Length between the clips L</strong> (left and right arrows, {#} mm; Shift {#} cm), and turn the supply’s knobs for the <strong>Supply current I</strong> ({#} A a click) and the <strong>Wire temperature</strong> ({#} °C a click). The slider and step buttons below set L exactly. The view opens in 3D (drag elsewhere to turn it, scroll to zoom, double click to go back); <strong>Flat</strong> shows the same bench drawn flat. In 3D the wire on the rule is drawn {#} times thicker than it is; the magnified piece is to scale.":
  "En la vista <strong>Alambre</strong>: arrastra la pinza deslizante para fijar la <strong>Longitud entre las pinzas L</strong> (flechas izquierda y derecha, {#} mm; Shift {#} cm), y gira las perillas de la fuente para la <strong>Corriente de la fuente I</strong> ({#} A por clic) y la <strong>Temperatura del alambre</strong> ({#} °C por clic). El deslizador y los botones de paso de abajo fijan L con exactitud. La vista se abre en 3D (arrastra en otro lugar para girarla, desplaza para hacer zoom, doble clic para volver); <strong>Plano</strong> muestra el mismo banco dibujado plano. En 3D el alambre sobre la regla se dibuja {#} veces más grueso de lo que es; la pieza aumentada está a escala.",
"Above the wire is a {#} mm piece of it, magnified {#} times and shown in real time. Each dot stands for \\(10^{17}\\) free electrons, spread evenly through the metal, so a wire with four times the area holds four times as many dots along the same length; the rings on its cut end are the four gauges to the same scale. The dots move at the drift speed and cross the ring at \\(I/(e\\times 10^{17})\\) per second whatever the gauge (to within about {#}%, since the dots come in whole numbers). Random thermal motion carries no net current and is left out of this picture.":
  "Sobre el alambre hay una pieza de {#} mm de él, aumentada {#} veces y mostrada en tiempo real. Cada punto representa \\(10^{17}\\) electrones libres, repartidos uniformemente en el metal, así que un alambre con cuatro veces el área contiene cuatro veces más puntos a lo largo de la misma longitud; los anillos en su extremo cortado son los cuatro calibres a la misma escala. Los puntos se mueven a la rapidez de deriva y cruzan el anillo a \\(I/(e\\times 10^{17})\\) por segundo sea cual sea el calibre (dentro de cerca de {#}%, ya que los puntos vienen en números enteros). El movimiento térmico aleatorio no lleva corriente neta y se omite de esta imagen.",
"The graph is the potential along the wire, measured from its far end. A steady current makes it fall evenly, so its slope is the field \\(E = \\rho I/A\\); the voltmeter reads the drop between its two clips.":
  "La gráfica es el potencial a lo largo del alambre, medido desde su extremo lejano. Una corriente constante hace que baje de manera uniforme, así que su pendiente es el campo \\(E = \\rho I/A\\); el voltímetro lee la caída entre sus dos pinzas.",
"Choose <strong>Inside the wire</strong> above the picture to see the free electrons in a magnified piece of this wire. With <strong>Follow the marked electron along the wire</strong>, the view travels with the circled electron, so the ions stream past it: its zigzag is the random motion and its slow creep to the left is the drift.":
  "Elige <strong>Dentro del alambre</strong> arriba de la imagen para ver los electrones libres en una pieza aumentada de este alambre. Con <strong>Seguir al electrón marcado a lo largo del alambre</strong>, la vista viaja con el electrón encerrado en un círculo, así que los iones pasan frente a él: su zigzag es el movimiento aleatorio y su lento avance hacia la izquierda es la deriva.",
"Choose <strong>Cold stage</strong> above the picture: a sample wire in a liquid helium cryostat, cooled from room temperature to {#} K while the four wire meters read it. The length and gauge are the ones set above; the current is the supply current.":
  "Elige <strong>Etapa fría</strong> arriba de la imagen: un alambre de muestra en un criostato de helio líquido, enfriado desde la temperatura ambiente hasta {#} K mientras los medidores de cuatro hilos lo leen. La longitud y el calibre son los fijados arriba; la corriente es la corriente de la fuente.",
"Capture stores L, the meter readings (V to {#} significant figures, I as set to {#}), the gauge and the temperature. \\(R\\) against \\(L\\) uses rows at one temperature and gauge: \\(\\rho = \\text{slope}\\times A\\). \\(R\\) against \\(T\\) uses rows at one length and gauge: \\(\\alpha = \\text{slope}/R(20\\ °\\text{C})\\).":
  "Capturar guarda L, las lecturas de los medidores (V con {#} cifras significativas, I como se fijó con {#}), el calibre y la temperatura. \\(R\\) en función de \\(L\\) usa filas a una temperatura y un calibre: \\(\\rho = \\text{slope}\\times A\\) (slope: pendiente). \\(R\\) en función de \\(T\\) usa filas a una longitud y un calibre: \\(\\alpha = \\text{slope}/R(20\\ °\\text{C})\\).",
"Blind hides ρ, α, the wire’s resistance per meter, and ρ and α from the fits, leaving the meters, the rule and the settings. The Mystery wire always hides its own values. Inside the wire, Blind also hides \\(J\\), \\(v_d\\), the transit time, \\(I/e\\), the expected count and the collision time; the count, the drift so far and the real time stay, so \\(v_d\\) can be measured. In the Wire view, Blind hides the drift speed, the expected dot rate and the slope \\(E\\) of the potential (the Mystery wire hides \\(E\\) too).":
  "A ciegas oculta ρ, α, la resistencia por metro del alambre, y la ρ y la α de los ajustes, y deja los medidores, la regla y los ajustes. El Alambre misterioso siempre oculta sus propios valores. Dentro del alambre, A ciegas también oculta \\(J\\), \\(v_d\\), el tiempo de tránsito, \\(I/e\\), el conteo esperado y el tiempo entre colisiones; el conteo, la deriva hasta ahora y el tiempo real se quedan, así que \\(v_d\\) se puede medir. En la vista Alambre, A ciegas oculta la rapidez de deriva, la tasa esperada de puntos y la pendiente \\(E\\) del potencial (el Alambre misterioso también oculta \\(E\\)).",
"\\(R = V/I\\); \\(R = \\rho L/A\\); \\(\\rho(T) = \\rho_{20}\\left[1 + \\alpha(T - 20\\ °\\text{C})\\right]\\)":
  "\\(R = V/I\\); \\(R = \\rho L/A\\); \\(\\rho(T) = \\rho_{20}\\left[1 + \\alpha(T - 20\\ °\\text{C})\\right]\\)",
"\\(I = nqAv_d\\); \\(J = I/A = nqv_d\\); transit time \\(= L/v_d\\)":
  "\\(I = nqAv_d\\); \\(J = I/A = nqv_d\\); tiempo de tránsito \\(= L/v_d\\)",
"Model: free electrons in a metal (OpenStax {#}). The drift speed \\(v_d = I/(nqA)\\) uses the free electron density \\(n\\) above; \\(n\\) does not change with temperature here (thermal expansion changes it by under {#}%). The random speed is the Fermi speed \\(v_F = \\hbar(3\\pi^2 n)^{1/3}/m\\) of the free electron model, and the mean time between collisions is \\(\\tau = m/(ne^2\\rho)\\), so it follows \\(\\rho(T)\\). Electrons move in a 3D random direction and are drawn projected onto the page; ions are drawn on a square grid at the mean atomic spacing (copper’s real lattice is face centered cubic). The region repeats at its edges, standing for a piece deep inside the wire. The counter counts electrons carried across the dashed plane by the drift; random motion carries electrons across both ways equally on average and is left out of the count. The electrons sit at random positions, so the count scatters about \\(n v_d t\\times(2\\ \\text{nm}\\times 0.3\\ \\text{nm})\\) like any count; after the drift has carried the electrons one full region width ({#} nm), every one has crossed exactly once.":
  "Modelo: electrones libres en un metal (OpenStax {#}). La rapidez de deriva \\(v_d = I/(nqA)\\) usa la densidad de electrones libres \\(n\\) de arriba; aquí \\(n\\) no cambia con la temperatura (la dilatación térmica la cambia en menos de {#}%). La rapidez aleatoria es la rapidez de Fermi \\(v_F = \\hbar(3\\pi^2 n)^{1/3}/m\\) del modelo de electrones libres, y el tiempo medio entre colisiones es \\(\\tau = m/(ne^2\\rho)\\), así que sigue a \\(\\rho(T)\\). Los electrones se mueven en una dirección aleatoria en 3D y se dibujan proyectados sobre la página; los iones se dibujan en una cuadrícula cuadrada con la separación atómica media (la red real del cobre es cúbica centrada en las caras). La región se repite en sus bordes, representando una pieza en lo profundo del alambre. El contador cuenta los electrones que la deriva lleva a través del plano discontinuo; el movimiento aleatorio lleva electrones a través de él en ambos sentidos por igual en promedio y se omite del conteo. Los electrones están en posiciones aleatorias, así que el conteo se dispersa alrededor de \\(n v_d t\\times(2\\ \\text{nm}\\times 0.3\\ \\text{nm})\\) como cualquier conteo; después de que la deriva ha llevado a los electrones un ancho completo de la región ({#} nm), cada uno ha cruzado exactamente una vez.",
"Model: normal metals follow Matthiessen’s rule, \\(\\rho(T) = \\rho_0 + \\rho_{\\text{ph}}(T)\\). The lattice part \\(\\rho_{\\text{ph}}\\) uses the Bloch–Grüneisen formula with the Debye temperature \\(\\Theta\\) (Kittel, Table {#}: Cu {#} K, Al {#} K, Sn {#} K, Pb {#} K), scaled so that \\(\\rho(293\\ \\text{K})\\) is the handbook value (Cu {#}, Al {#}, Sn {#}, Pb {#} × {#}⁻⁸ Ω·m); real curves differ from this one formula by up to tens of percent between about {#} K and {#} K. The residual part \\(\\rho_0 = \\rho(293\\ \\text{K})/\\text{RRR}\\) comes from impurities and defects and depends on the sample. Below the critical temperature (OpenStax Table {#}: Al {#} K, Sn {#} K, Pb {#} K, YBa₂Cu₃O₇ {#} K) the resistance is exactly zero; the step is drawn sharp, while real transitions are from a millikelvin to about a kelvin wide. Copper does not become superconducting at any temperature reached so far. YBCO’s normal state is drawn as \\(\\rho = 2.5\\times10^{-6}\\ \\Omega\\,\\text{m}\\times T/(300\\ \\text{K})\\), a typical value along its copper oxide planes; it varies from sample to sample. Thermal contraction is left out. The points are simulated readings, noise free.":
  "Modelo: los metales normales siguen la regla de Matthiessen, \\(\\rho(T) = \\rho_0 + \\rho_{\\text{ph}}(T)\\). La parte de la red \\(\\rho_{\\text{ph}}\\) usa la fórmula de Bloch–Grüneisen con la temperatura de Debye \\(\\Theta\\) (Kittel, Tabla {#}: Cu {#} K, Al {#} K, Sn {#} K, Pb {#} K), escalada para que \\(\\rho(293\\ \\text{K})\\) sea el valor de manual (Cu {#}, Al {#}, Sn {#}, Pb {#} × {#}⁻⁸ Ω·m); las curvas reales difieren de esta única fórmula hasta en decenas de por ciento entre unos {#} K y {#} K. La parte residual \\(\\rho_0 = \\rho(293\\ \\text{K})/\\text{RRR}\\) proviene de impurezas y defectos y depende de la muestra. Por debajo de la temperatura crítica (OpenStax Tabla {#}: Al {#} K, Sn {#} K, Pb {#} K, YBa₂Cu₃O₇ {#} K) la resistencia es exactamente cero; el escalón se dibuja abrupto, mientras que las transiciones reales tienen un ancho de un milikelvin a cerca de un kelvin. El cobre no se vuelve superconductor a ninguna temperatura alcanzada hasta ahora. El estado normal del YBCO se dibuja como \\(\\rho = 2.5\\times10^{-6}\\ \\Omega\\,\\text{m}\\times T/(300\\ \\text{K})\\), un valor típico a lo largo de sus planos de óxido de cobre; varía de una muestra a otra. Se omite la contracción térmica. Los puntos son lecturas simuladas, sin ruido.",
"Model: \\(R = \\rho L/A\\) with \\(\\rho\\) linear in temperature; the voltmeter is ideal (four wire, so the clips and leads add nothing) and the current is set by a constant current supply. Resistivities are handbook values at {#} °C; real alloys vary by a few percent.":
  "Modelo: \\(R = \\rho L/A\\) con \\(\\rho\\) lineal en la temperatura; el voltímetro es ideal (de cuatro hilos, así que las pinzas y los cables no agregan nada) y la corriente la fija una fuente de corriente constante. Las resistividades son valores de manual a {#} °C; las aleaciones reales varían unos pocos por ciento.",
"Find an unknown wire’s resistivity from voltage and current measurements. Test how resistance depends on length, diameter and temperature, and measure the drift speed of the electrons that carry the current.":
  "Encuentra la resistividad de un alambre desconocido a partir de mediciones de voltaje y corriente. Pon a prueba cómo depende la resistencia de la longitud, el diámetro y la temperatura, y mide la rapidez de deriva de los electrones que llevan la corriente.",
"Resistance describes a particular piece of wire; resistivity describes its material at a specified temperature. For a uniform cylindrical wire,":
  "La resistencia describe una pieza particular de alambre; la resistividad describe su material a una temperatura especificada. Para un alambre cilíndrico uniforme,",
"\\[R=\\frac{V}{I}=\\rho\\frac{L}{A},\\qquad A=\\frac{\\pi d^2}{4}.\\]":
  "\\[R=\\frac{V}{I}=\\rho\\frac{L}{A},\\qquad A=\\frac{\\pi d^2}{4}.\\]",
"At one temperature and diameter, a graph of \\(R\\) against \\(L\\) has slope \\(\\rho/A\\). Over a suitable temperature interval, a useful model is":
  "A una temperatura y un diámetro, una gráfica de \\(R\\) en función de \\(L\\) tiene pendiente \\(\\rho/A\\). En un intervalo de temperatura adecuado, un modelo útil es",
"\\[R(T)=R_{20}[1+\\alpha(T-20\\,^{\\circ}\\mathrm C)].\\]":
  "\\[R(T)=R_{20}[1+\\alpha(T-20\\,^{\\circ}\\mathrm C)].\\]",
"If \\(R = b + kT\\) with \\(T\\) in degrees Celsius, then \\(R_{20} = b + 20k\\) and \\(\\alpha = k/R_{20}\\). Temperature differences have the same numerical value in kelvins and Celsius degrees. This experiment assumes uniform temperature, a uniform cross section and negligible contact resistance. The virtual Mystery wire has synthetic material properties; identifying a real alloy is not the goal.":
  "Si \\(R = b + kT\\) con \\(T\\) en grados Celsius, entonces \\(R_{20} = b + 20k\\) y \\(\\alpha = k/R_{20}\\). Las diferencias de temperatura tienen el mismo valor numérico en kelvins y en grados Celsius. Este experimento supone temperatura uniforme, sección transversal uniforme y resistencia de contacto despreciable. El Alambre misterioso virtual tiene propiedades de material sintéticas; identificar una aleación real no es el objetivo.",
"<strong>Current and drift (§§{#}, {#}).</strong> Current is the rate at which charge passes through a cross section, \\(I = \\Delta Q/\\Delta t\\); one ampere is \\(1/e = 6.24\\times10^{18}\\) electrons per second. In a metal the charge is carried by free electrons, \\(n\\) of them per cubic meter, which drift slowly against the current with speed \\(v_d\\). In a time \\(t\\) the electrons within a distance \\(v_d t\\) of a cross section of area \\(A\\) pass through it, \\(nAv_dt\\) of them, so":
  "<strong>Corriente y deriva (§§{#}, {#}).</strong> La corriente es la rapidez con que la carga pasa por una sección transversal, \\(I = \\Delta Q/\\Delta t\\); un ampere es \\(1/e = 6.24\\times10^{18}\\) electrones por segundo. En un metal la carga la llevan electrones libres, \\(n\\) de ellos por metro cúbico, que derivan lentamente en sentido contrario a la corriente con rapidez \\(v_d\\). En un tiempo \\(t\\) los electrones a una distancia \\(v_d t\\) de una sección transversal de área \\(A\\) la atraviesan, \\(nAv_dt\\) de ellos, así que",
"\\[I = nqAv_d,\\qquad J = \\frac{I}{A} = nqv_d.\\]":
  "\\[I = nqAv_d,\\qquad J = \\frac{I}{A} = nqv_d.\\]",
"The same current in a thinner wire needs faster drift. The electrons also move at random far faster (about \\(10^6\\) m/s in copper), but that motion carries no net charge.":
  "La misma corriente en un alambre más delgado necesita una deriva más rápida. Los electrones también se mueven al azar mucho más rápido (cerca de \\(10^6\\) m/s en el cobre), pero ese movimiento no lleva carga neta.",
"Predict what happens to resistance if length doubles or diameter doubles.":
  "Predice qué le pasa a la resistencia si la longitud se duplica o si el diámetro se duplica.",
"Why would changing temperature during a length scan bias the result?":
  "¿Por qué cambiar la temperatura durante un barrido de longitud sesgaría el resultado?",
"In a fit of \\(R\\) against \\(T\\), why is the intercept at {#} °C different from \\(R_{20}\\)?":
  "En un ajuste de \\(R\\) en función de \\(T\\), ¿por qué la ordenada al origen en {#} °C es distinta de \\(R_{20}\\)?",
"Copper has \\(n = 8.47\\times10^{28}\\) free electrons per cubic meter. Find the drift speed for {#} A in a copper wire {#} mm across, and how long an electron takes to drift {#} m.":
  "El cobre tiene \\(n = 8.47\\times10^{28}\\) electrones libres por metro cúbico. Encuentra la rapidez de deriva para {#} A en un alambre de cobre de {#} mm de diámetro, y cuánto tarda un electrón en derivar {#} m.",
"For a real wire bench, use the assigned current limit, switch off before moving connections and avoid touching a heated wire. Do not heat an unsupported wire or improvise a temperature bath. Follow the instructor’s electrical and thermal safety procedures.":
  "Para un banco real de alambres, usa el límite de corriente asignado, apaga antes de mover conexiones y evita tocar un alambre caliente. No calientes un alambre sin soporte ni improvises un baño de temperatura. Sigue los procedimientos de seguridad eléctrica y térmica del instructor.",
"<strong>Length scan.</strong> Measure wire diameter and temperature. Use separate voltage sensing contacts inside the current contacts when the real apparatus permits. At fixed temperature and current, measure \\(V\\) and \\(I\\) at six lengths from {#} to {#} m. Keep the same wire and diameter. Repeat one length at a second current to test whether \\(V/I\\) is unchanged.":
  "<strong>Barrido de longitud.</strong> Mide el diámetro y la temperatura del alambre. Usa contactos separados para medir el voltaje dentro de los contactos de corriente cuando el aparato real lo permita. A temperatura y corriente fijas, mide \\(V\\) e \\(I\\) a seis longitudes de {#} a {#} m. Mantén el mismo alambre y diámetro. Repite una longitud con una segunda corriente para comprobar si \\(V/I\\) no cambia.",
"<strong>Diameter comparison.</strong> At the same temperature, repeat the length scan with a second diameter of the same material. Compare the slopes before calculating both resistivities. A change in resistance alone does not establish a change in material.":
  "<strong>Comparación de diámetros.</strong> A la misma temperatura, repite el barrido de longitud con un segundo diámetro del mismo material. Compara las pendientes antes de calcular ambas resistividades. Un cambio en la resistencia por sí solo no demuestra un cambio de material.",
"<strong>Temperature scan.</strong> Use one diameter and a fixed length. On a real bench, wait for thermal equilibrium before each reading. Record at least six temperatures over the instructor approved range, including a reading at {#} °C. Fit \\(R\\) against \\(T\\) and infer \\(\\alpha\\). In the virtual apparatus, use {#}, {#}, {#}, {#}, {#} and {#} °C. This is a prescribed linear model, not a test of whether an actual alloy remains linear over every temperature range.":
  "<strong>Barrido de temperatura.</strong> Usa un diámetro y una longitud fija. En un banco real, espera el equilibrio térmico antes de cada lectura. Registra al menos seis temperaturas en el intervalo aprobado por el instructor, incluida una lectura a {#} °C. Ajusta \\(R\\) en función de \\(T\\) e infiere \\(\\alpha\\). En el aparato virtual, usa {#}, {#}, {#}, {#}, {#} y {#} °C. Este es un modelo lineal prescrito, no una prueba de si una aleación real se mantiene lineal en todo intervalo de temperatura.",
"<strong>Cold stage (§{#}).</strong> Choose Cold stage. Cool a copper sample from room temperature and note \\(R/R(293\\ \\mathrm{K})\\) as it passes about {#}, {#}, {#} and {#} K, and the value it levels off at. Repeat at a lower and a higher sample purity. Then cool lead, tin, aluminum and YBCO, and find the temperature at which each one’s resistance drops to zero. These readings are not part of the Data table; record them in your answer to Analysis {#}.":
  "<strong>Etapa fría (§{#}).</strong> Elige Etapa fría. Enfría una muestra de cobre desde la temperatura ambiente y anota \\(R/R(293\\ \\mathrm{K})\\) al pasar por cerca de {#}, {#}, {#} y {#} K, y el valor en el que se estabiliza. Repite con una pureza de muestra menor y otra mayor. Luego enfría plomo, estaño, aluminio y YBCO, y encuentra la temperatura a la que la resistencia de cada uno cae a cero. Estas lecturas no forman parte de la tabla de datos; regístralas en tu respuesta al Análisis {#}.",
"<strong>Current and drift.</strong> Look inside a copper wire at {#} °C with the answers hidden. For each run, start the count from zero and let the electrons drift for {#} μs of real time, then record the net number that crossed the counting plane and how far the drift has carried them. Runs: the {#} mm wire at {#}, {#} and {#} A, then {#} A in each of the other three gauges. Record these in the Current and drift table, not the Data table.":
  "<strong>Corriente y deriva.</strong> Mira dentro de un alambre de cobre a {#} °C con las respuestas ocultas. Para cada corrida, empieza el conteo desde cero y deja que los electrones deriven durante {#} μs de tiempo real, luego registra el número neto que cruzó el plano de conteo y qué tan lejos los ha llevado la deriva. Corridas: el alambre de {#} mm a {#}, {#} y {#} A, luego {#} A en cada uno de los otros tres calibres. Registra estas en la tabla Corriente y deriva, no en la tabla de datos.",
"<strong>Using the virtual apparatus.</strong> Investigate the Mystery wire with predictions and answers hidden. Start with a {#} mm diameter, {#} A and {#} °C. Record readings at six lengths from {#} to {#} m and determine the slope of \\(R\\) against \\(L\\). Repeat the length scan with the {#} mm wire at the same current and temperature. For the temperature scan, keep that diameter and \\(L = 0.500\\ \\text{m}\\) and measure at {#}, {#}, {#}, {#}, {#} and {#} °C; graph \\(R\\) against \\(T\\). Send each scan to the worksheet before clearing, so each gets its own copy of the Data table; the demo’s fit uses only rows matching the current material, diameter and either temperature or length. The Mystery setting hides calculated material properties.":
  "<strong>Uso del aparato virtual.</strong> Investiga el Alambre misterioso con las predicciones y respuestas ocultas. Empieza con un diámetro de {#} mm, {#} A y {#} °C. Registra lecturas a seis longitudes de {#} a {#} m y determina la pendiente de \\(R\\) en función de \\(L\\). Repite el barrido de longitud con el alambre de {#} mm a la misma corriente y temperatura. Para el barrido de temperatura, mantén ese diámetro y \\(L = 0.500\\ \\text{m}\\) y mide a {#}, {#}, {#}, {#}, {#} y {#} °C; grafica \\(R\\) en función de \\(T\\). Envía cada barrido a la hoja de trabajo antes de borrar, para que cada uno tenga su propia copia de la tabla de datos; el ajuste de la demo usa solo filas que coinciden con el material, el diámetro y la temperatura o la longitud actuales. La opción Misterioso oculta las propiedades calculadas del material.",
"<span>B</span>Material":
  "<span>B</span>Material",
"d (mm), row {#}":
  "d (mm), fila {#}",
"T (°C), row {#}":
  "T (°C), fila {#}",
"I (A), row {#}":
  "I (A), fila {#}",
"V (V), row {#}":
  "V (V), fila {#}",
"R = V/I (Ω), row {#}":
  "R = V/I (Ω), fila {#}",
"Copy this table for each scan. Record real meter ranges/resolutions and diameter measurements alongside it. Save the settings and CSV files.":
  "Copia esta tabla para cada barrido. Registra junto a ella las escalas y resoluciones reales de los medidores y las mediciones del diámetro. Guarda los ajustes y los archivos CSV.",
"<strong>Current and drift.</strong> Copper, \\(n = 8.47\\times10^{28}\\ \\mathrm{m^{-3}}\\), \\(e = 1.602\\times10^{-19}\\) C. The counting plane is \\(2\\ \\mathrm{nm}\\times0.3\\ \\mathrm{nm} = 0.6\\ \\mathrm{nm^2}\\). Work out the last four columns.":
  "<strong>Corriente y deriva.</strong> Cobre, \\(n = 8.47\\times10^{28}\\ \\mathrm{m^{-3}}\\), \\(e = 1.602\\times10^{-19}\\) C. El plano de conteo es \\(2\\ \\mathrm{nm}\\times0.3\\ \\mathrm{nm} = 0.6\\ \\mathrm{nm^2}\\). Calcula las últimas cuatro columnas.",
"<span>D</span>Real time \\(t\\) (μs)":
  "<span>D</span>Tiempo real \\(t\\) (μs)",
"<span>E</span>Drift so far \\(s\\) (nm)":
  "<span>E</span>Deriva hasta ahora \\(s\\) (nm)",
"<span>F</span>Net crossings \\(N\\)":
  "<span>F</span>Cruces netos \\(N\\)",
"<span>H</span>\\(I/(neA)\\) (mm/s)":
  "<span>H</span>\\(I/(neA)\\) (mm/s)",
"<span>I</span>Expected \\(N = n s\\,(0.6\\ \\mathrm{nm^2})\\)":
  "<span>I</span>\\(N\\) esperado \\(= n s\\,(0.6\\ \\mathrm{nm^2})\\)",
"<span>J</span>Time to drift {#} m (min)":
  "<span>J</span>Tiempo para derivar {#} m (min)",
"Real time t (μs), row {#}":
  "Tiempo real t (μs), fila {#}",
"Drift so far s (nm), row {#}":
  "Deriva hasta ahora s (nm), fila {#}",
"Net crossings N, row {#}":
  "Cruces netos N, fila {#}",
"v_d = s/t (mm/s), row {#}":
  "v_d = s/t (mm/s), fila {#}",
"I/(neA) (mm/s), row {#}":
  "I/(neA) (mm/s), fila {#}",
"Expected N = n s ({#} nm^{#}), row {#}":
  "N esperado = n s ({#} nm^{#}), fila {#}",
"Time to drift {#} m (min), row {#}":
  "Tiempo para derivar {#} m (min), fila {#}",
"Fit \\(R\\) against \\(L\\) for each diameter. Report slope, intercept and residuals; use the measured diameter to find \\(\\rho\\) at {#} °C.":
  "Ajusta \\(R\\) en función de \\(L\\) para cada diámetro. Reporta la pendiente, la ordenada al origen y los residuos; usa el diámetro medido para encontrar \\(\\rho\\) a {#} °C.",
"Compare the slope ratio with the inverse squared diameter ratio. Compare the two inferred resistivities and the repeated current check.":
  "Compara la razón de pendientes con la razón inversa de los diámetros al cuadrado. Compara las dos resistividades inferidas y la comprobación de corriente repetida.",
"Fit \\(R\\) against \\(T\\). Calculate \\(R_{20}\\) from the fitted line, then \\(\\alpha\\). Compare fitted \\(R_{20}\\) with the direct {#} °C reading.":
  "Ajusta \\(R\\) en función de \\(T\\). Calcula \\(R_{20}\\) a partir de la recta ajustada, y luego \\(\\alpha\\). Compara la \\(R_{20}\\) ajustada con la lectura directa a {#} °C.",
"Explain what a nonzero length fit intercept could mean on a real bench. Distinguish a possible lead/contact effect from random reading scatter.":
  "Explica qué podría significar en un banco real una ordenada al origen distinta de cero en el ajuste de longitud. Distingue un posible efecto de cables o contactos de la dispersión aleatoria de las lecturas.",
"For the cold stage, describe how copper’s resistance changes as it cools and what sets the value it levels off at; compare that value with the purity setting. Give the critical temperature of lead, tin, aluminum and YBCO, and say which can be reached with liquid nitrogen ({#} K) and which need liquid helium ({#} K) or colder.":
  "Para la etapa fría, describe cómo cambia la resistencia del cobre al enfriarse y qué fija el valor en el que se estabiliza; compara ese valor con el ajuste de pureza. Da la temperatura crítica del plomo, el estaño, el aluminio y el YBCO, y di cuáles se pueden alcanzar con nitrógeno líquido ({#} K) y cuáles necesitan helio líquido ({#} K) o algo más frío.",
"From the Current and drift table, show that \\(v_d\\) is proportional to \\(I\\) at one gauge and to \\(1/d^2\\) at one current, and that it agrees with \\(I/(neA)\\). Compare each count with the expected count, as a percentage. Why does a count of electrons scatter about its expected value, and how should the fractional scatter change with the size of the count?":
  "A partir de la tabla Corriente y deriva, demuestra que \\(v_d\\) es proporcional a \\(I\\) en un calibre y a \\(1/d^2\\) a una corriente, y que coincide con \\(I/(neA)\\). Compara cada conteo con el conteo esperado, como porcentaje. ¿Por qué un conteo de electrones se dispersa alrededor de su valor esperado, y cómo debería cambiar la dispersión fraccionaria con el tamaño del conteo?",
"Use the {#} A count in the {#} mm wire to estimate the number of electrons per second passing through the whole cross section, and compare it with \\(I/e\\).":
  "Usa el conteo a {#} A en el alambre de {#} mm para estimar el número de electrones por segundo que pasan por toda la sección transversal, y compáralo con \\(I/e\\).",
"The virtual voltmeter records four significant figures; current is the set value recorded to three significant figures. Length adjusts in {#} m steps and temperature in {#} °C steps. Those prescribed settings are exact within the model; adjustment steps are not independent random errors. On a real bench, use tool resolution, calibration and diameter variation. Area uncertainty is approximately twice the fractional diameter uncertainty. Propagate voltage/current uncertainty into \\(R\\) and include slope and diameter uncertainty in \\(\\rho\\). For \\(\\alpha\\), the fitted slope and \\(R_{20}\\) are correlated; a fit error alone does not include temperature calibration or model error. Do not invent scatter by repeatedly recording the same simulated state.":
  "El voltímetro virtual registra cuatro cifras significativas; la corriente es el valor fijado, registrado con tres cifras significativas. La longitud se ajusta en pasos de {#} m y la temperatura en pasos de {#} °C. Esos ajustes prescritos son exactos dentro del modelo; los pasos de ajuste no son errores aleatorios independientes. En un banco real, usa la resolución de los instrumentos, la calibración y la variación del diámetro. La incertidumbre del área es aproximadamente el doble de la incertidumbre fraccionaria del diámetro. Propaga la incertidumbre del voltaje y la corriente a \\(R\\) e incluye la incertidumbre de la pendiente y del diámetro en \\(\\rho\\). Para \\(\\alpha\\), la pendiente ajustada y \\(R_{20}\\) están correlacionadas; un error de ajuste por sí solo no incluye la calibración de temperatura ni el error del modelo. No inventes dispersión registrando repetidamente el mismo estado simulado.",
"How can two wires have different resistances but the same resistivity?":
  "¿Cómo pueden dos alambres tener resistencias distintas pero la misma resistividad?",
"Why can a real wire’s resistance change when supply current is raised, even if the material is locally ohmic?":
  "¿Por qué puede cambiar la resistencia de un alambre real cuando se aumenta la corriente de la fuente, aunque el material sea localmente óhmico?",
"Why is four wire sensing useful for a low resistance specimen?":
  "¿Por qué es útil la medición de cuatro hilos para una muestra de baja resistencia?",
"Can a near zero \\(\\alpha\\) prove that a material is a perfect conductor?":
  "¿Puede una \\(\\alpha\\) casi cero demostrar que un material es un conductor perfecto?",
"Why can the current in a superconducting magnet keep flowing for years with no power supply connected?":
  "¿Por qué la corriente en un imán superconductor puede seguir fluyendo durante años sin ninguna fuente conectada?",
"Electrons drift at well under a millimeter per second, yet a lamp lights the moment its switch closes. Why?":
  "Los electrones derivan a mucho menos de un milímetro por segundo, y sin embargo una lámpara se enciende en el momento en que se cierra su interruptor. ¿Por qué?",
"Prelab answers, settings and data/CSV files, both length fits and the temperature fit with residuals, resistivity and temperature coefficient with uncertainty, the diameter/current comparisons, the Current and drift table, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ajustes y archivos de datos/CSV, ambos ajustes de longitud y el ajuste de temperatura con residuos, resistividad y coeficiente de temperatura con su incertidumbre, las comparaciones de diámetro y corriente, la tabla Corriente y deriva, y las respuestas a las preguntas. Identifica los datos simulados.",
"Cross section of the wire":
  "Sección transversal del alambre",
"Electric field in the wire":
  "Campo eléctrico en el alambre",
"Current density":
  "Densidad de corriente",
"Length between the clips":
  "Longitud entre las pinzas",
"Net crossings of the ring":
  "Cruces netos del anillo",
"Charge (ΔQ: charge through a cross section in time Δt)":
  "Carga (ΔQ: carga a través de una sección transversal en el tiempo Δt)",
"Resistance at {#} °C":
  "Resistencia a {#} °C",
"Debye temperature":
  "Temperatura de Debye",
"Voltage between the clips":
  "Voltaje entre las pinzas",
"Temperature coefficient of resistivity":
  "Coeficiente de temperatura de la resistividad",
"Intercept of the fit of R against T":
  "Ordenada al origen del ajuste de R en función de T",
"Wire diameter":
  "Diámetro del alambre",
"Slope of the fit of R against T":
  "Pendiente del ajuste de R en función de T",
"Free electron density":
  "Densidad de electrones libres",
"Charge of a carrier":
  "Carga de un portador",
"Resistivity":
  "Resistividad",
"Residual resistivity from impurities and defects":
  "Resistividad residual por impurezas y defectos",
"Resistivity at {#} °C":
  "Resistividad a {#} °C",
"Resistivity from lattice vibrations":
  "Resistividad por vibraciones de la red",
"Drift so far":
  "Deriva hasta ahora",
"Real time":
  "Tiempo real",
"Mean time between collisions":
  "Tiempo medio entre colisiones",
"Fermi speed":
  "Rapidez de Fermi",
"Drift speed":
  "Rapidez de deriva",
"Resistivity of a Wire":
  "Resistividad de un alambre"
});
