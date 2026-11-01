/* ws/thermal-expansion in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/thermal-expansion', {
"Setup and material":
  "Configuración y material",
"Gauge or level reading (mm)":
  "Lectura del indicador o del nivel (mm)",
"Δ L/L_0 or Δ V/V_0":
  "Δ L/L_0 o Δ V/V_0",
"Thermal Expansion | VirtualDemos":
  "Dilatación térmica | VirtualDemos",
"Thermal Expansion":
  "Dilatación térmica",
"<strong>Setups in the demo:</strong> Rod in a water bath; Water near {#} °C (these two use the Expansion view, the subject of this worksheet); Hot metal, cool water; Mystery block; Gas thermometer; House wall in winter (the other three worksheets; a fifth worksheet, on cooling, uses the Cooling view).":
  "<strong>Configuraciones en la demo:</strong> Varilla en un baño de agua; Agua cerca de {#} °C (estas dos usan la vista Dilatación, el tema de esta hoja de trabajo); Metal caliente, agua fría; Bloque misterioso; Termómetro de gas; Pared de una casa en invierno (las otras tres hojas de trabajo; una quinta hoja de trabajo, sobre el enfriamiento, usa la vista Enfriamiento).",
"<strong>Rod and dial gauge.</strong> A rod {#} m long at {#} °C lies in a water jacket, one end against a fixed block and the other against a dial gauge. The gauge reads the change in length from {#} °C, to {#} mm. The picture shows the rod’s end moving {#} times more than it does.":
  "<strong>Varilla e indicador de carátula.</strong> Una varilla de {#} m de largo a {#} °C está en una camisa de agua, con un extremo contra un bloque fijo y el otro contra un indicador de carátula. El indicador lee el cambio de longitud desde {#} °C, a {#} mm. La imagen muestra el extremo de la varilla moviéndose {#} veces más de lo que se mueve.",
"The rod’s length follows \\(L = L_0[1 + \\alpha(T - 20\\ ^\\circ\\mathrm{C})]\\) with \\(\\alpha\\) from the textbook’s Table {#}, an average over ordinary temperatures, so the response is exactly linear here.":
  "La longitud de la varilla sigue \\(L = L_0[1 + \\alpha(T - 20\\ ^\\circ\\mathrm{C})]\\) con \\(\\alpha\\) de la Tabla {#} del libro, un promedio a temperaturas ordinarias, así que aquí la respuesta es exactamente lineal.",
"<strong>Flask and capillary.</strong> {#} mL of liquid fills a Pyrex flask to the zero mark of a thin tube of bore {#} mm at {#} °C. The level in the tube, read to {#} mm, shows the liquid’s expansion less the flask’s.":
  "<strong>Matraz y capilar.</strong> {#} mL de líquido llenan un matraz de Pyrex hasta la marca cero de un tubo delgado de diámetro interior {#} mm a {#} °C. El nivel en el tubo, leído a {#} mm, muestra la dilatación del líquido menos la del matraz.",
"The liquids expand with \\(\\beta\\) from Table {#}, except water, whose volume follows its measured density (Tanaka and others, <em>Metrologia</em> {#}, valid from {#} to {#} °C). The flask expands with \\(\\beta = 9\\times10^{-6}\\) /°C (Pyrex, Table {#}); the tube’s own expansion is neglected.":
  "Los líquidos se dilatan con \\(\\beta\\) de la Tabla {#}, excepto el agua, cuyo volumen sigue su densidad medida (Tanaka y otros, <em>Metrologia</em> {#}, válida de {#} a {#} °C). El matraz se dilata con \\(\\beta = 9\\times10^{-6}\\) /°C (Pyrex, Tabla {#}); se desprecia la dilatación propia del tubo.",
"Each reading is taken after the sample has settled at the bath’s temperature.":
  "Cada lectura se toma después de que la muestra se asentó a la temperatura del baño.",
"Record reading stores the setup, material, bath temperature and the gauge or level reading. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la configuración, el material, la temperatura del baño y la lectura del indicador o del nivel. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una nueva copia de la tabla.",
"New mystery rod hides the rod’s material. Blind hides the predictions in the readouts.":
  "Nueva varilla misteriosa oculta el material de la varilla. A ciegas oculta las predicciones en las lecturas.",
"Measure the coefficient of linear expansion of a metal rod, identify an unknown rod, and see how water’s expansion differs from every other liquid’s.":
  "Mide el coeficiente de dilatación lineal de una varilla metálica, identifica una varilla desconocida y ve en qué se diferencia la dilatación del agua de la de cualquier otro líquido.",
"Most solids get longer when heated. Over ordinary temperature ranges the change in length is in proportion to the original length and to the change in temperature (§{#}):":
  "La mayoría de los sólidos se alargan al calentarse. En intervalos de temperatura ordinarios, el cambio de longitud es proporcional a la longitud original y al cambio de temperatura (§{#}):",
"\\[\\Delta L = \\alpha L_0\\,\\Delta T.\\]":
  "\\[\\Delta L = \\alpha L_0\\,\\Delta T.\\]",
"A liquid’s volume grows the same way, \\(\\Delta V = \\beta V_0\\,\\Delta T\\). In a flask with a narrow tube, the liquid and the flask both expand; the level in the tube of cross section \\(A\\) rises by":
  "El volumen de un líquido crece de la misma manera, \\(\\Delta V = \\beta V_0\\,\\Delta T\\). En un matraz con un tubo angosto, se dilatan tanto el líquido como el matraz; el nivel en el tubo de sección transversal \\(A\\) sube",
"\\[h = \\frac{(\\beta_\\mathrm{liquid} - \\beta_\\mathrm{flask})\\,V_0\\,\\Delta T}{A}.\\]":
  "\\[h = \\frac{(\\beta_\\mathrm{liquid} - \\beta_\\mathrm{flask})\\,V_0\\,\\Delta T}{A}.\\]",
"Water is unusual: between {#} °C and about {#} °C it <strong>shrinks</strong> as it warms. Its density is greatest at {#} °C, so near there its \\(\\beta\\) is close to zero and below it is negative.":
  "El agua es inusual: entre {#} °C y alrededor de {#} °C se <strong>contrae</strong> al calentarse. Su densidad es máxima a {#} °C, así que cerca de ahí su \\(\\beta\\) es casi cero y por debajo es negativo.",
"Predict how much a {#} m aluminum rod (\\(\\alpha = 25\\times10^{-6}\\) /°C) gets longer when warmed from {#} °C to {#} °C.":
  "Predice cuánto se alarga una varilla de aluminio de {#} m (\\(\\alpha = 25\\times10^{-6}\\) /°C) al calentarse de {#} °C a {#} °C.",
"Sketch the gauge reading against bath temperature from {#} °C to {#} °C.":
  "Bosqueja la lectura del indicador en función de la temperatura del baño de {#} °C a {#} °C.",
"Find the cross section of a tube of bore {#} mm, and predict the level rise for {#} mL of ethyl alcohol (\\(\\beta = 1100\\times10^{-6}\\) /°C) warmed by {#} °C.":
  "Encuentra la sección transversal de un tubo de diámetro interior {#} mm, y predice cuánto sube el nivel para {#} mL de alcohol etílico (\\(\\beta = 1100\\times10^{-6}\\) /°C) calentados {#} °C.",
"Sketch how you expect the level of water in the tube to change as it is cooled from {#} °C to {#} °C.":
  "Bosqueja cómo esperas que cambie el nivel del agua en el tubo al enfriarla de {#} °C a {#} °C.",
"Hot water jackets and baths can scald, and glassware can crack when heated or cooled quickly. In a real lab change temperatures slowly and wear eye protection.":
  "Las camisas y los baños de agua caliente pueden escaldar, y el material de vidrio puede agrietarse al calentarse o enfriarse rápidamente. En un laboratorio real cambia las temperaturas lentamente y usa protección para los ojos.",
"<strong>The aluminum rod.</strong> Start with the Rod in a water bath setup. Record the gauge reading at bath temperatures from {#} °C to {#} °C, about every {#} °C.":
  "<strong>La varilla de aluminio.</strong> Empieza con la configuración Varilla en un baño de agua. Registra la lectura del indicador a temperaturas del baño de {#} °C a {#} °C, más o menos cada {#} °C.",
"<strong>Two more rods.</strong> Send the readings to the worksheet and clear them, then repeat for two other rods from the list, sending each rod to its own copy of the table and clearing before the next.":
  "<strong>Dos varillas más.</strong> Envía las lecturas a la hoja de trabajo y bórralas, luego repite para otras dos varillas de la lista, enviando cada varilla a su propia copia de la tabla y borrando antes de la siguiente.",
"<strong>Mystery rod.</strong> Send and clear, then pick Mystery rod in the rod list and record at least five readings over the full range.":
  "<strong>Varilla misteriosa.</strong> Envía y borra, luego elige Varilla misteriosa en la lista de varillas y registra al menos cinco lecturas en todo el intervalo.",
"<strong>Water near {#} °C.</strong> Send and clear, then pick the Water near {#} °C setup and record the level every {#} °C from {#} °C to {#} °C and then every {#} °C up to {#} °C.":
  "<strong>Agua cerca de {#} °C.</strong> Envía y borra, luego elige la configuración Agua cerca de {#} °C y registra el nivel cada {#} °C de {#} °C a {#} °C y luego cada {#} °C hasta {#} °C.",
"<strong>Another liquid.</strong> Send and clear, then repeat with ethyl alcohol or glycerin from {#} °C to {#} °C, every {#} °C, and send that run too.":
  "<strong>Otro líquido.</strong> Envía y borra, luego repite con alcohol etílico o glicerina de {#} °C a {#} °C, cada {#} °C, y envía también esa corrida.",
"<span>B</span>Setup and material":
  "<span>B</span>Configuración y material",
"<span>C</span>Temperature \\(T\\) (°C)":
  "<span>C</span>Temperatura \\(T\\) (°C)",
"<span>D</span>Gauge or level reading (mm)":
  "<span>D</span>Lectura del indicador o del nivel (mm)",
"<span>E</span>\\(\\Delta T\\) (°C)":
  "<span>E</span>\\(\\Delta T\\) (°C)",
"<span>F</span>\\(\\Delta L/L_0\\) or \\(\\Delta V/V_0\\)":
  "<span>F</span>\\(\\Delta L/L_0\\) o \\(\\Delta V/V_0\\)",
"Setup and material, row {#}":
  "Configuración y material, fila {#}",
"Gauge or level reading (mm), row {#}":
  "Lectura del indicador o del nivel (mm), fila {#}",
"Δ T (°C), row {#}":
  "Δ T (°C), fila {#}",
"Δ L/L_0 or Δ V/V_0, row {#}":
  "Δ L/L_0 o Δ V/V_0, fila {#}",
"Δ L/L₀ or Δ V/V₀":
  "Δ L/L₀ o Δ V/V₀",
"Fit the gauge reading against \\(T\\) for each rod. From the slope find \\(\\alpha = \\text{slope}/L_0\\) and compare it with Table {#}.":
  "Ajusta la lectura del indicador en función de \\(T\\) para cada varilla. A partir de la pendiente, encuentra \\(\\alpha = \\text{slope}/L_0\\) y compáralo con la Tabla {#}.",
"Find \\(\\alpha\\) for the mystery rod and name its material.":
  "Encuentra \\(\\alpha\\) para la varilla misteriosa y nombra su material.",
"For the liquid, fit the level against \\(T\\). From the slope find \\(\\beta_\\mathrm{liquid} = \\text{slope}\\cdot A/V_0 + \\beta_\\mathrm{flask}\\) and compare it with Table {#}.":
  "Para el líquido, ajusta el nivel en función de \\(T\\). A partir de la pendiente, encuentra \\(\\beta_\\mathrm{liquid} = \\text{slope}\\cdot A/V_0 + \\beta_\\mathrm{flask}\\) y compáralo con la Tabla {#}.",
"For water, graph the level against \\(T\\) (the graph is not a straight line, so ignore the fitted line the worksheet draws) and find the temperature at which the level is lowest. Explain why it is a little above {#} °C, the temperature at which water is densest.":
  "Para el agua, grafica el nivel en función de \\(T\\) (la gráfica no es una recta, así que ignora la recta ajustada que dibuja la hoja de trabajo) y encuentra la temperatura a la que el nivel es mínimo. Explica por qué está un poco por encima de {#} °C, la temperatura a la que el agua es más densa.",
"Estimate water’s \\(\\beta\\) near {#} °C from the slope of your level readings there, and compare it with the value in Table {#}.":
  "Estima el \\(\\beta\\) del agua cerca de {#} °C a partir de la pendiente de tus lecturas del nivel ahí, y compáralo con el valor de la Tabla {#}.",
"The gauge reads to {#} mm and the level to {#} mm, and the model has no noise. Find the relative uncertainty of a single gauge reading of about {#} mm and compare it with the scatter of your fit. In a real experiment the rod and the bath would not be at quite the same temperature; say how that would affect your \\(\\alpha\\).":
  "El indicador lee a {#} mm y el nivel a {#} mm, y el modelo no tiene ruido. Encuentra la incertidumbre relativa de una sola lectura del indicador de alrededor de {#} mm y compárala con la dispersión de tu ajuste. En un experimento real, la varilla y el baño no estarían exactamente a la misma temperatura; di cómo afectaría eso a tu \\(\\alpha\\).",
"Why do bridges and railway lines have gaps or sliding joints?":
  "¿Por qué los puentes y las vías del tren tienen huecos o juntas deslizantes?",
"A steel tape measure calibrated at {#} °C is used on a hot day. Does it read too long or too short?":
  "Una cinta métrica de acero calibrada a {#} °C se usa en un día caluroso. ¿Mide de más o de menos?",
"Why does a lake freeze from the top down, and why does that matter for the fish?":
  "¿Por qué un lago se congela de arriba hacia abajo, y por qué importa eso para los peces?",
"Why is the flask’s own expansion more important for the liquids with small \\(\\beta\\)?":
  "¿Por qué la dilatación propia del matraz es más importante para los líquidos con \\(\\beta\\) pequeño?",
"Prelab answers, the table copies with their graphs and fits, your values of \\(\\alpha\\) and \\(\\beta\\) with uncertainties and comparisons, the mystery rod’s material, the temperature of water’s lowest level, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de la tabla con sus gráficas y ajustes, tus valores de \\(\\alpha\\) y \\(\\beta\\) con incertidumbres y comparaciones, el material de la varilla misteriosa, la temperatura del nivel mínimo del agua y las respuestas a las preguntas. Identifica los datos simulados.",
"Cross section of the tube":
  "Sección transversal del tubo",
"Length of the rod (ΔL: its change)":
  "Longitud de la varilla (ΔL: su cambio)",
"Length at {#} °C":
  "Longitud a {#} °C",
"Temperature (ΔT: its change)":
  "Temperatura (ΔT: su cambio)",
"Volume (ΔV: its change)":
  "Volumen (ΔV: su cambio)",
"Starting volume":
  "Volumen inicial",
"Coefficient of linear expansion":
  "Coeficiente de dilatación lineal",
"Coefficient of volume expansion":
  "Coeficiente de dilatación volumétrica",
"Volume expansion coefficient of the flask":
  "Coeficiente de dilatación volumétrica del matraz",
"Volume expansion coefficient of the liquid":
  "Coeficiente de dilatación volumétrica del líquido",
"Rise of the level in the tube":
  "Subida del nivel en el tubo",
"Temperature and Heat (Expansion)":
  "Temperatura y calor (Dilatación)"
});
