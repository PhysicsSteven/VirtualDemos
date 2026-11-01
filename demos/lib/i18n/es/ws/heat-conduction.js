/* ws/heat-conduction in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/heat-conduction', {
"Build and layers":
  "Construcción y capas",
"Position x (mm)":
  "Posición x (mm)",
"Heat flow P (W)":
  "Flujo de calor P (W)",
"Heat Conduction Through Layers | VirtualDemos":
  "Conducción de calor a través de capas | VirtualDemos",
"Heat Conduction Through Layers":
  "Conducción de calor a través de capas",
"<strong>Setups in the demo:</strong> House wall in winter (the Conduction view, the subject of this worksheet); Hot metal, cool water; Mystery block; Gas thermometer; Rod in a water bath; Water near {#} °C (the other three worksheets; a fifth worksheet, on cooling, uses the Cooling view).":
  "<strong>Configuraciones en la demo:</strong> Muro de una casa en invierno (la vista Conducción, el tema de esta hoja de trabajo); Metal caliente, agua fría; Bloque misterioso; Termómetro de gas; Varilla en un baño de agua; Agua cerca de {#} °C (las otras tres hojas de trabajo; una quinta hoja de trabajo, sobre el enfriamiento, usa la vista Enfriamiento).",
"The Conduction view shows steady heat flow: the temperatures on each side have been held long enough that nothing changes with time. Choose House wall, Window, Icebox or Rods in series, then change up to three layers’ materials and thicknesses, the two temperatures and the air on each side. Each build has a fixed area: {#} m² for the wall and the window, {#} m² for the icebox, and rods {#} cm across.":
  "La vista Conducción muestra un flujo de calor estacionario: las temperaturas de cada lado se han mantenido el tiempo suficiente para que nada cambie con el tiempo. Elige Muro de una casa, Ventana, Hielera o Varillas en serie, y luego cambia los materiales y los espesores de hasta tres capas, las dos temperaturas y el aire de cada lado. Cada construcción tiene un área fija: {#} m² para el muro y la ventana, {#} m² para la hielera, y varillas de {#} cm de diámetro.",
"Each layer of thickness \\(d\\) passes heat at \\(P = kA\\,\\Delta T/d\\), with \\(k\\) from the textbook’s Table {#}.":
  "Cada capa de espesor \\(d\\) deja pasar calor a razón de \\(P = kA\\,\\Delta T/d\\), con \\(k\\) de la Tabla {#} del libro de texto.",
"Moving air on each side carries heat to and from the surface by convection. Its film resistance per unit area is the standard engineering value (ASHRAE): still indoor air {#} m²·°C/W, outdoor air in a {#} km/h wind {#}, in a {#} km/h wind {#}. “None” holds the surface at that side’s temperature, like a stirred bath.":
  "El aire en movimiento a cada lado lleva calor hacia la superficie y desde ella por convección. Su resistencia de película por unidad de área es el valor estándar de ingeniería (ASHRAE): aire interior quieto {#} m²·°C/W, aire exterior con viento de {#} km/h {#}, con viento de {#} km/h {#}. “Ninguno” mantiene la superficie a la temperatura de ese lado, como un baño agitado.",
"“Air (still, conduction only)” is air that cannot move; a real air gap also passes heat by convection and radiation, so it insulates less. Radiation through the wall is not modeled.":
  "“Aire (quieto, solo conducción)” es aire que no puede moverse; un espacio de aire real también deja pasar calor por convección y radiación, así que aísla menos. No se modela la radiación a través del muro.",
"Drag the probe through the wall, or use the Probe position slider, to read the temperature at any depth, to {#} °C. The heat flow meter reads the total heat flow through the area.":
  "Arrastra la sonda a través del muro, o usa el deslizador Posición de la sonda, para leer la temperatura a cualquier profundidad, con resolución de {#} °C. El medidor de flujo de calor lee el flujo de calor total a través del área.",
"Record reading stores the build, its layers, the probe’s position and temperature, and the heat flow. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la construcción, sus capas, la posición y la temperatura de la sonda, y el flujo de calor. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una nueva serie, que va a una nueva copia de la tabla.",
"Blind hides the predictions in the readouts.":
  "A ciegas oculta las predicciones en las lecturas.",
"Measure how temperature falls through a layered wall, find each layer’s share of the resistance, and see why insulation works.":
  "Mide cómo baja la temperatura a través de un muro de capas, encuentra la parte de la resistencia que corresponde a cada capa y descubre por qué funciona el aislamiento.",
"Heat conducted through a slab of area \\(A\\), thickness \\(d\\) and thermal conductivity \\(k\\), with a temperature difference \\(\\Delta T\\) across it, flows at (§{#})":
  "El calor conducido a través de una placa de área \\(A\\), espesor \\(d\\) y conductividad térmica \\(k\\), con una diferencia de temperatura \\(\\Delta T\\) entre sus caras, fluye a razón de (§{#})",
"\\[P = \\frac{kA\\,\\Delta T}{d}.\\]":
  "\\[P = \\frac{kA\\,\\Delta T}{d}.\\]",
"Inside one material the temperature falls in a straight line, with a slope \\(dT/dx = -P/(kA)\\), so it falls fastest through the material with the smallest \\(k\\). Each layer resists the flow with \\(R = d/k\\) per unit area (the “R factor”), and in a wall made of layers the same heat flows through each, so their resistances add:":
  "Dentro de un mismo material la temperatura baja en línea recta, con una pendiente \\(dT/dx = -P/(kA)\\), así que baja más rápido a través del material con la \\(k\\) más pequeña. Cada capa resiste el flujo con \\(R = d/k\\) por unidad de área (el “factor R”), y en un muro hecho de capas el mismo calor fluye a través de cada una, así que sus resistencias se suman:",
"\\[P = \\frac{A\\,(T_\\mathrm{in} - T_\\mathrm{out})}{\\sum R}, \\qquad \\Delta T_\\mathrm{layer} = (T_\\mathrm{in} - T_\\mathrm{out})\\,\\frac{R_\\mathrm{layer}}{\\sum R}.\\]":
  "\\[P = \\frac{A\\,(T_\\mathrm{in} - T_\\mathrm{out})}{\\sum R}, \\qquad \\Delta T_\\mathrm{layer} = (T_\\mathrm{in} - T_\\mathrm{out})\\,\\frac{R_\\mathrm{layer}}{\\sum R}.\\]",
"The thin films of air on each surface add their own resistances to the sum.":
  "Las películas delgadas de aire en cada superficie añaden sus propias resistencias a la suma.",
"Find \\(R = d/k\\) for {#} mm of plasterboard, {#} mm of glass wool and {#} mm of brick, using Table {#}.":
  "Encuentra \\(R = d/k\\) para {#} mm de tablaroca, {#} mm de lana de vidrio y {#} mm de ladrillo, usando la Tabla {#}.",
"Add the two air films ({#} and {#} m²·°C/W) and predict the heat flow through {#} m² of this wall with {#} °C inside and −{#} °C outside.":
  "Añade las dos películas de aire ({#} y {#} m²·°C/W) y predice el flujo de calor a través de {#} m² de este muro con {#} °C dentro y −{#} °C fuera.",
"Which layer do you expect the temperature to fall across the most? Sketch \\(T\\) against depth.":
  "¿En qué capa esperas que la temperatura baje más? Haz un esquema de \\(T\\) en función de la profundidad.",
"Two rods of equal size, steel and aluminum, are joined end to end between {#} °C and {#} °C. Is the joint nearer {#} °C or {#} °C?":
  "Dos varillas del mismo tamaño, de acero y de aluminio, se unen extremo con extremo entre {#} °C y {#} °C. ¿La unión está más cerca de {#} °C o de {#} °C?",
"No hazards in the virtual lab. In a real one, the hot side of a conduction apparatus can burn.":
  "No hay peligros en el laboratorio virtual. En uno real, el lado caliente de un aparato de conducción puede quemar.",
"<strong>The house wall.</strong> Start with the House wall in winter setup. Record a reading at the inside surface, at each boundary between layers and at the outside surface, and two or three readings inside each layer.":
  "<strong>El muro de la casa.</strong> Empieza con la configuración Muro de una casa en invierno. Registra una lectura en la superficie interior, en cada frontera entre capas y en la superficie exterior, y dos o tres lecturas dentro de cada capa.",
"<strong>Without insulation.</strong> Send the readings to the worksheet and clear them, then set the glass wool’s thickness to {#} and repeat.":
  "<strong>Sin aislamiento.</strong> Envía las lecturas a la hoja de trabajo y bórralas; luego fija el espesor de la lana de vidrio en {#} y repite.",
"<strong>Window.</strong> Pick Window. Record the heat flow for a single {#} mm pane, then for double glazing: two {#} mm panes with {#} mm of still air between them.":
  "<strong>Ventana.</strong> Elige Ventana. Registra el flujo de calor para un solo vidrio de {#} mm, y luego para un doble vidrio: dos vidrios de {#} mm con {#} mm de aire quieto entre ellos.",
"<strong>Rods in series.</strong> Pick Rods in series (steel then aluminum, {#} mm each, {#} cm across, ends at {#} °C and {#} °C). Record about ten readings along the rods, including the joint.":
  "<strong>Varillas en serie.</strong> Elige Varillas en serie (acero y luego aluminio, de {#} mm cada una, {#} cm de diámetro, extremos a {#} °C y {#} °C). Registra unas diez lecturas a lo largo de las varillas, incluida la unión.",
"<span>B</span>Build and layers":
  "<span>B</span>Construcción y capas",
"<span>C</span>Position \\(x\\) (mm)":
  "<span>C</span>Posición \\(x\\) (mm)",
"<span>D</span>Temperature \\(T\\) (°C)":
  "<span>D</span>Temperatura \\(T\\) (°C)",
"<span>E</span>Heat flow \\(P\\) (W)":
  "<span>E</span>Flujo de calor \\(P\\) (W)",
"Build and layers, row {#}":
  "Construcción y capas, fila {#}",
"Position x (mm), row {#}":
  "Posición x (mm), fila {#}",
"Heat flow P (W), row {#}":
  "Flujo de calor P (W), fila {#}",
"For the house wall, fit \\(T\\) against \\(x\\) inside each layer. Use each slope and the measured heat flow to find each layer’s \\(k = -P/(A\\,\\text{slope})\\), and compare with Table {#}.":
  "Para el muro de la casa, ajusta \\(T\\) en función de \\(x\\) dentro de cada capa. Usa cada pendiente y el flujo de calor medido para encontrar la \\(k = -P/(A\\,\\text{slope})\\) de cada capa (slope es la pendiente), y compárala con la Tabla {#}.",
"Find the temperature drop across each layer and each air film, and compare each share with \\(R/\\sum R\\) from Before the lab.":
  "Encuentra la caída de temperatura a través de cada capa y de cada película de aire, y compara cada parte con \\(R/\\sum R\\) de Antes del laboratorio.",
"By what factor did removing the insulation increase the heat flow? Explain using the resistances.":
  "¿Por qué factor aumentó el flujo de calor al quitar el aislamiento? Explícalo usando las resistencias.",
"Compare the single and double windows. What gives double glazing most of its resistance?":
  "Compara la ventana sencilla y la doble. ¿Qué le da al doble vidrio la mayor parte de su resistencia?",
"For the rods, find the joint temperature and both slopes. Show that \\(k_\\mathrm{steel}\\times\\text{slope}_\\mathrm{steel} = k_\\mathrm{Al}\\times\\text{slope}_\\mathrm{Al}\\), and say why.":
  "Para las varillas, encuentra la temperatura de la unión y ambas pendientes. Muestra que \\(k_\\mathrm{steel}\\times\\text{slope}_\\mathrm{steel} = k_\\mathrm{Al}\\times\\text{slope}_\\mathrm{Al}\\), y di por qué.",
"The probe reads to {#} °C and the meter to several figures, and the model has no noise. Your positions are read to {#} mm; estimate what that does to a slope across the thinnest layer. Real walls have studs, gaps and moisture, and real air gaps pass heat by convection and radiation; say how each would change your heat flow.":
  "La sonda lee con resolución de {#} °C y el medidor con varias cifras, y el modelo no tiene ruido. Tus posiciones se leen con resolución de {#} mm; estima qué le hace eso a una pendiente a través de la capa más delgada. Los muros reales tienen montantes, huecos y humedad, y los espacios de aire reales dejan pasar calor por convección y radiación; di cómo cambiaría cada uno tu flujo de calor.",
"Why does the inside surface of a poorly insulated wall feel cold even when the room air is warm?":
  "¿Por qué la superficie interior de un muro mal aislado se siente fría incluso cuando el aire del cuarto está tibio?",
"Wind makes a house lose heat faster. Which resistance does wind change, and why does it matter more for a window than for an insulated wall?":
  "El viento hace que una casa pierda calor más rápido. ¿Qué resistencia cambia el viento, y por qué importa más en una ventana que en un muro aislado?",
"Down feathers and glass wool are mostly trapped air. Why do they insulate well?":
  "El plumón y la lana de vidrio son principalmente aire atrapado. ¿Por qué aíslan bien?",
"A metal spoon and a wooden spoon have both sat in a hot pot for a while. Why does the metal one feel hotter at the handle?":
  "Una cuchara de metal y una de madera han estado un rato en una olla caliente. ¿Por qué la de metal se siente más caliente en el mango?",
"Prelab answers, the table copies with their graphs and fits, your values of \\(k\\) and the temperature drops with comparisons, the heat flows for each build, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de la tabla con sus gráficas y ajustes, tus valores de \\(k\\) y las caídas de temperatura con sus comparaciones, los flujos de calor de cada construcción, y respuestas a las preguntas. Identifica los datos simulados.",
"Area":
  "Área",
"Heat flow":
  "Flujo de calor",
"R factor: a layer's resistance to heat flow per unit area, d/k":
  "Factor R: la resistencia de una capa al flujo de calor por unidad de área, d/k",
"R factor of one layer":
  "Factor R de una capa",
"Temperature inside":
  "Temperatura interior",
"ΔT_layer: temperature drop across one layer":
  "ΔT_layer: caída de temperatura a través de una capa",
"Temperature outside":
  "Temperatura exterior",
"Thickness of a layer":
  "Espesor de una capa",
"Thermal conductivity":
  "Conductividad térmica",
"Thermal conductivity of aluminum":
  "Conductividad térmica del aluminio",
"Thermal conductivity of steel":
  "Conductividad térmica del acero",
"Position through the wall or along the rod":
  "Posición a través del muro o a lo largo de la varilla",
"Temperature and Heat (Conduction)":
  "Temperatura y calor (Conducción)"
});
