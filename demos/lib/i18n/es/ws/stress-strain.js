/* ws/stress-strain in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/stress-strain', {
"Specimen/cycle":
  "Muestra/ciclo",
"Peak/load mass (kg)":
  "Masa pico/de carga (kg)",
"Loaded Δ L (mm)":
  "Δ L con carga (mm)",
"Unloaded Δ L (mm)":
  "Δ L sin carga (mm)",
"Elastic/set":
  "Elástico/deformación permanente",
"With calculus":
  "Con cálculo",
"Finding the Elastic Properties of a Wire | VirtualDemos":
  "Propiedades elásticas de un alambre | VirtualDemos",
"Finding the Elastic Properties of a Wire":
  "Propiedades elásticas de un alambre",
"Hang slotted masses from the tray under the wire; up and down arrows on the picture add or take off {#} kg (Shift: {#} kg).":
  "Cuelga pesas ranuradas de la bandeja bajo el alambre; las flechas arriba y abajo sobre la imagen agregan o quitan {#} kg (Shift: {#} kg).",
"Record reading stores the hanging mass and the dial gauge reading (to {#} mm), with the wire’s diameter. The fit is a straight line of the load \\(F = mg\\) against \\(\\Delta L\\); \\(Y = \\text{slope}\\times L/A\\). Use only loads below the yield point. The fit uses the rows from the wire now hanging; New wire starts afresh (the CSV keeps every row).":
  "Registrar lectura guarda la masa colgante y la lectura del comparador de carátula (con precisión de {#} mm), con el diámetro del alambre. El ajuste es una recta de la carga \\(F = mg\\) en función de \\(\\Delta L\\); \\(Y = \\text{slope}\\times L/A\\). Usa solo cargas por debajo del punto de fluencia. El ajuste usa las filas del alambre que cuelga ahora; Alambre nuevo empieza de cero (el CSV conserva todas las filas).",
"Blind hides Young’s modulus, the yield and breaking stresses, the stress and strain readouts, the material curve and Y from the fit, leaving the load, the diameter and the dial gauge. The Mystery metal is always blind about its own properties.":
  "A ciegas oculta el módulo de Young, los esfuerzos de fluencia y de ruptura, las lecturas de esfuerzo y deformación, la curva del material y el Y del ajuste, y deja la carga, el diámetro y el comparador de carátula. El metal misterioso siempre oculta sus propias propiedades.",
"Stress \\(\\sigma = F/A\\); strain \\(\\varepsilon = \\Delta L/L\\); \\(Y = \\sigma/\\varepsilon\\) (elastic)":
  "Esfuerzo \\(\\sigma = F/A\\); deformación \\(\\varepsilon = \\Delta L/L\\); \\(Y = \\sigma/\\varepsilon\\) (elástico)",
"Model: an idealized stress against strain curve: straight to the yield stress, then hardening up to the tensile strength, breaking at the fracture strain; unloading follows a line parallel to the elastic one, leaving a permanent stretch. Values are typical for each metal; real samples vary. Necking, creep and the wire’s own weight are ignored.":
  "Modelo: una curva idealizada de esfuerzo en función de deformación: recta hasta el esfuerzo de fluencia, luego endurecimiento hasta la resistencia a la tensión, con ruptura en la deformación de fractura; la descarga sigue una recta paralela a la elástica y deja un estiramiento permanente. Los valores son típicos de cada metal; las muestras reales varían. Se ignoran la estricción, la fluencia lenta y el propio peso del alambre.",
"Determine an unknown wire’s Young’s modulus from load and extension, then distinguish elastic stretching from permanent deformation.":
  "Determina el módulo de Young de un alambre desconocido a partir de la carga y el alargamiento, y luego distingue el estiramiento elástico de la deformación permanente.",
"A hanging load exerts force \\(F = mg\\). For a wire of original length \\(L\\) and diameter \\(d\\),":
  "Una carga colgante ejerce una fuerza \\(F = mg\\). Para un alambre de longitud original \\(L\\) y diámetro \\(d\\),",
"\\[A=\\frac{\\pi d^2}{4},\\qquad \\sigma=\\frac{F}{A},\\qquad \\epsilon=\\frac{\\Delta L}{L}.\\]":
  "\\[A=\\frac{\\pi d^2}{4},\\qquad \\sigma=\\frac{F}{A},\\qquad \\epsilon=\\frac{\\Delta L}{L}.\\]",
"Below yield, stress is proportional to strain: \\(\\sigma = Y\\epsilon\\). Therefore a plot of \\(F\\) against \\(\\Delta L\\) has slope \\(YA/L\\), and":
  "Por debajo de la fluencia, el esfuerzo es proporcional a la deformación: \\(\\sigma = Y\\epsilon\\). Por lo tanto una gráfica de \\(F\\) en función de \\(\\Delta L\\) tiene pendiente \\(YA/L\\), y",
"\\[Y=\\text{slope}\\,\\frac{L}{A}.\\]":
  "\\[Y=\\text{slope}\\,\\frac{L}{A}.\\]",
"Use meters for extension when applying that formula. After yielding, unloading can leave a permanent extension. A wire that has already yielded is not the same initial specimen as a fresh wire. This model uses an idealized engineering stress strain curve with smooth hardening; it does not model necking or every behavior of a real alloy. Shear and bulk moduli are the subject of Worksheet {#}, Shear and Bulk Moduli, on the same demo.":
  "Usa metros para el alargamiento al aplicar esa fórmula. Después de la fluencia, la descarga puede dejar un alargamiento permanente. Un alambre que ya cedió no es la misma muestra inicial que un alambre nuevo. Este modelo usa una curva idealizada de esfuerzo y deformación de ingeniería con endurecimiento suave; no modela la estricción ni todos los comportamientos de una aleación real. Los módulos de corte y volumétrico son el tema de la Hoja de trabajo {#}, Módulos de corte y volumétrico, en la misma demo.",
"Predict how doubling diameter changes extension at the same load, length and material.":
  "Predice cómo cambia el alargamiento al duplicar el diámetro con la misma carga, longitud y material.",
"What are the units of the slope of \\(F\\) against \\(\\Delta L\\) and of Young’s modulus?":
  "¿Cuáles son las unidades de la pendiente de \\(F\\) en función de \\(\\Delta L\\) y del módulo de Young?",
"How would you test whether a measured extension is elastic?":
  "¿Cómo probarías si un alargamiento medido es elástico?",
"You stretch a {#} mm wire and a {#} mm wire of the same metal. Should the Young’s modulus from the thicker wire come out larger than, smaller than or the same as from the thinner one?":
  "Estiras un alambre de {#} mm y un alambre de {#} mm del mismo metal. ¿El módulo de Young obtenido con el alambre más grueso debe salir mayor, menor o igual que el del más delgado?",
"A real stretched wire can snap. Use eye protection, secure the support, shield the wire and keep feet clear of hanging masses. Add loads gently and follow the instructor’s load limit.":
  "Un alambre real estirado puede romperse de golpe. Usa protección para los ojos, asegura el soporte, protege el alambre con una pantalla y mantén los pies lejos de las masas colgantes. Agrega las cargas con suavidad y respeta el límite de carga del instructor.",
"Under <strong>Test</strong> keep <strong>Tension (Young’s modulus)</strong>, and under <strong>Wire</strong> choose <strong>Mystery metal</strong>. The wire is {#} m long. Set the <strong>Diameter d</strong> slider ({#} mm steps); changing it hangs a new wire. Hang masses by clicking slotted masses in the tray under the picture; <strong>Take all the load off</strong> removes them all. Press <strong>Record reading</strong> at each load: it stores \\(d\\), the hanging mass and the readout <strong>Extension ΔL (dial)</strong>, which go in the \\(d\\), Peak/load mass and Loaded \\(\\Delta L\\) columns. Fill the Unloaded \\(\\Delta L\\) and Elastic/set columns yourself.":
  "En <strong>Prueba</strong> deja <strong>Tensión (módulo de Young)</strong>, y en <strong>Alambre</strong> elige <strong>Metal misterioso</strong>. El alambre mide {#} m de largo. Fija el control <strong>Diámetro d</strong> (pasos de {#} mm); cambiarlo cuelga un alambre nuevo. Cuelga masas haciendo clic en las masas ranuradas de la bandeja debajo de la imagen; <strong>Quitar toda la carga</strong> las quita todas. Pulsa <strong>Registrar lectura</strong> con cada carga: guarda \\(d\\), la masa colgada y la lectura <strong>Alargamiento ΔL (comparador)</strong>, que van en las columnas \\(d\\), Masa pico/carga y \\(\\Delta L\\) con carga. Llena tú mismo las columnas \\(\\Delta L\\) sin carga y Elástico/deformación permanente.",
"<strong>Elastic measurements.</strong> With \\(d = 0.60\\) mm, record the extension at {#}, {#}, {#}, {#}, {#} and {#} kg. Then press Take all the load off and check that the dial returns to zero; do not include a point that leaves a permanent extension in your elastic fit. Press <strong>Export to worksheet</strong>, then <strong>Clear</strong>.":
  "<strong>Mediciones elásticas.</strong> Con \\(d = 0.60\\) mm, registra el alargamiento con {#}, {#}, {#}, {#}, {#} y {#} kg. Luego pulsa Quitar toda la carga y comprueba que el comparador regrese a cero; no incluyas en tu ajuste elástico un punto que deje un alargamiento permanente. Pulsa <strong>Exportar a la hoja</strong> y luego <strong>Borrar</strong>.",
"<strong>Diameter check.</strong> Set the Diameter d slider to {#} mm (a fresh wire of the same metal) and repeat the {#} to {#} kg series. Export, then clear. Compare the two fitted slopes and the moduli inferred from them. For your answer to Question {#}, note the Loaded \\(\\Delta L\\) at {#} kg for each wire and, after Analysis {#}, the Young’s modulus from each.":
  "<strong>Comprobación del diámetro.</strong> Fija el control deslizante Diámetro d en {#} mm (un alambre nuevo del mismo metal) y repite la serie de {#} a {#} kg. Exporta y luego borra. Compara las dos pendientes ajustadas y los módulos deducidos de ellas. Para tu respuesta a la pregunta {#}, anota el \\(\\Delta L\\) con carga a {#} kg de cada alambre y, después del Análisis {#}, el módulo de Young de cada uno.",
"<strong>Yielding.</strong> Press <strong>New wire</strong> with \\(d = 0.60\\) mm. Load it to a peak mass, record it, press Take all the load off, and write the dial reading in the Unloaded \\(\\Delta L\\) column of that row. Raise the peak mass in small steps, unloading fully after each peak; start with small steps up from {#} kg, then use smaller increments near the first detectable permanent set (the up and down arrows on the picture change the load by {#} kg, with Shift by {#} kg). Bracket the onset between the largest peak load that returned to zero and the first that did not. Once it yields, do not use later loading points as fresh wire elastic data. Stop after a clear permanent set; fracture is unnecessary. Export this series too.":
  "<strong>Fluencia.</strong> Pulsa <strong>Alambre nuevo</strong> con \\(d = 0.60\\) mm. Cárgalo hasta una masa pico, regístrala, pulsa Quitar toda la carga y escribe la lectura del comparador en la columna \\(\\Delta L\\) sin carga de esa fila. Sube la masa pico en pasos pequeños, descargando por completo después de cada pico; empieza con pasos pequeños a partir de {#} kg y luego usa incrementos menores cerca de la primera deformación permanente detectable (las flechas arriba y abajo sobre la imagen cambian la carga en {#} kg, y con Shift en {#} kg). Acota el inicio entre la mayor carga pico que regresó a cero y la primera que no. Una vez que fluye, no uses los puntos de carga posteriores como datos elásticos de un alambre nuevo. Detente después de una deformación permanente clara; no hace falta llegar a la fractura. Exporta también esta serie.",
"<strong>Using the virtual apparatus.</strong> New wire starts a new fit in the demo but does not clear earlier readings, so send each specimen’s series to the worksheet and clear before the next; each then gets its own copy of the Data table. The demo never shows the Mystery metal’s properties: your modulus and yield onset come only from your readings. On real equipment you would measure the length and the diameter at several positions and note the zero reading.":
  "<strong>Uso del aparato virtual.</strong> Alambre nuevo inicia un ajuste nuevo en el demo pero no borra las lecturas anteriores, así que envía la serie de cada espécimen a la hoja y borra antes del siguiente; cada uno tiene entonces su propia copia de la tabla de datos. El demo nunca muestra las propiedades del Metal misterioso: tu módulo y el inicio de la fluencia salen solo de tus lecturas. En un equipo real medirías la longitud y el diámetro en varias posiciones y anotarías la lectura en cero.",
"<span>A</span>Specimen/cycle":
  "<span>A</span>Muestra/ciclo",
"<span>D</span>Peak/load mass (kg)":
  "<span>D</span>Masa pico/de carga (kg)",
"<span>E</span>Loaded \\(\\Delta L\\) (mm)":
  "<span>E</span>\\(\\Delta L\\) con carga (mm)",
"<span>F</span>Unloaded \\(\\Delta L\\) (mm)":
  "<span>F</span>\\(\\Delta L\\) sin carga (mm)",
"<span>G</span>Elastic/set":
  "<span>G</span>Elástico/deformación permanente",
"Specimen/cycle, row {#}":
  "Muestra/ciclo, fila {#}",
"d (mm), row {#}":
  "d (mm), fila {#}",
"Peak/load mass (kg), row {#}":
  "Masa pico/de carga (kg), fila {#}",
"Loaded Δ L (mm), row {#}":
  "Δ L con carga (mm), fila {#}",
"Unloaded Δ L (mm), row {#}":
  "Δ L sin carga (mm), fila {#}",
"Elastic/set, row {#}":
  "Elástico/deformación permanente, fila {#}",
"Save each elastic series separately. For yield cycles, pair each peak load with its subsequent unloaded reading.":
  "Guarda cada serie elástica por separado. Para los ciclos de fluencia, empareja cada carga pico con su lectura posterior sin carga.",
"Fit the load mass against \\(\\Delta L\\) for each elastic series, and multiply the slope by \\(g\\) to get the slope of \\(F = mg\\) against \\(\\Delta L\\). Report slope, intercept and residuals. Convert extension to meters before calculating \\(Y\\), or explicitly convert a slope in N/mm to N/m.":
  "Ajusta la masa de carga en función de \\(\\Delta L\\) para cada serie elástica, y multiplica la pendiente por \\(g\\) para obtener la pendiente de \\(F = mg\\) en función de \\(\\Delta L\\). Reporta la pendiente, la ordenada al origen y los residuos. Convierte el alargamiento a metros antes de calcular \\(Y\\), o convierte explícitamente una pendiente en N/mm a N/m.",
"Compare the two estimates of \\(Y\\). Test whether the slope ratio agrees with the squared diameter ratio.":
  "Compara las dos estimaciones de \\(Y\\). Prueba si la razón de pendientes concuerda con la razón de diámetros al cuadrado.",
"Convert the two peak loads bracketing permanent set to stresses. Report a yield onset interval rather than an exact material constant from a coarse step.":
  "Convierte a esfuerzos las dos cargas pico que acotan la deformación permanente. Reporta un intervalo para el inicio de la fluencia en lugar de una constante exacta del material a partir de un paso grueso.",
"Explain the difference between total extension under load and residual extension after unloading. Distinguish the operational detection threshold from an exact yield stress.":
  "Explica la diferencia entre el alargamiento total bajo carga y el alargamiento residual después de descargar. Distingue el umbral práctico de detección de un esfuerzo de fluencia exacto.",
"The virtual dial rounds to {#} mm. Diameter controls are specified settings in the ideal model; their {#} mm adjustment step is not random measurement error. For a real wire, estimate diameter uncertainty from the measuring tool and variation along the wire. Since \\(A\\) depends on \\(d^2\\), its fractional uncertainty is approximately twice that of diameter. Include length and slope uncertainty in \\(Y\\). A tiny fit error does not eliminate calibration errors. For yielding, use load step brackets and the smallest detectable residual extension; repeated exact simulation readings do not supply random scatter.":
  "El comparador virtual redondea a {#} mm. Los controles de diámetro son ajustes especificados en el modelo ideal; su paso de ajuste de {#} mm no es un error de medición aleatorio. Para un alambre real, estima la incertidumbre del diámetro a partir del instrumento de medición y de la variación a lo largo del alambre. Como \\(A\\) depende de \\(d^2\\), su incertidumbre relativa es aproximadamente el doble de la del diámetro. Incluye la incertidumbre de la longitud y de la pendiente en \\(Y\\). Un error de ajuste diminuto no elimina los errores de calibración. Para la fluencia, usa los intervalos entre pasos de carga y el menor alargamiento residual detectable; las lecturas exactas repetidas de la simulación no aportan dispersión aleatoria.",
"Did the thicker wire give a different Young’s modulus? Give each wire’s Loaded \\(\\Delta L\\) at {#} kg and its modulus, and set them against your answer to Before the lab {#}. Why do thicker wires have steeper graphs of \\(F\\) against \\(\\Delta L\\) but not necessarily larger Young’s moduli?":
  "¿Dio el alambre más grueso un módulo de Young distinto? Da el \\(\\Delta L\\) con carga de cada alambre a {#} kg y su módulo, y compáralos con tu respuesta a Antes del laboratorio {#}. ¿Por qué los alambres más gruesos tienen gráficas de \\(F\\) contra \\(\\Delta L\\) más empinadas pero no necesariamente módulos de Young mayores?",
"Can a material be stiff yet have a low yield stress?":
  "¿Puede un material ser rígido y aun así tener un esfuerzo de fluencia bajo?",
"Why can an unloaded yielded wire remain longer even though its stress is zero?":
  "¿Por qué un alambre que cedió y se descargó puede quedar más largo aunque su esfuerzo sea cero?",
"For courses that use calculus. This section is not counted in the {#} minutes; do it when your instructor assigns it.":
  "Para cursos que usan cálculo. Esta sección no cuenta dentro de los {#} minutos; hazla cuando tu profesor la asigne.",
"The work done stretching the wire is \\(W = \\int_0^{\\Delta L} F\\,dx\\). Below yield \\(F = kx\\), where \\(k\\) is the slope of \\(F\\) against \\(\\Delta L\\). Show that \\(W = \\tfrac12k\\,\\Delta L^2 = \\tfrac12F\\,\\Delta L\\) and that the energy stored per unit volume is \\(\\tfrac12\\sigma\\epsilon\\). Work out both for your {#} mm wire at {#} kg. The hanging mass lost \\(mg\\,\\Delta L\\) of gravitational potential energy: where did the other half go?":
  "El trabajo realizado al estirar el alambre es \\(W = \\int_0^{\\Delta L} F\\,dx\\). Por debajo de la fluencia \\(F = kx\\), donde \\(k\\) es la pendiente de \\(F\\) contra \\(\\Delta L\\). Demuestra que \\(W = \\tfrac12k\\,\\Delta L^2 = \\tfrac12F\\,\\Delta L\\) y que la energía almacenada por unidad de volumen es \\(\\tfrac12\\sigma\\epsilon\\). Calcula ambas para tu alambre de {#} mm con {#} kg. La masa colgante perdió \\(mg\\,\\Delta L\\) de energía potencial gravitacional: ¿adónde fue la otra mitad?",
"A real wire also carries its own weight. At height \\(y\\) above its bottom end it holds the load and the wire below, \\(F + \\rho gAy\\), where \\(\\rho\\) is the metal’s density. Each short piece \\(dy\\) stretches by \\((F + \\rho gAy)\\,dy/(AY)\\): integrate along the wire to show that its own weight adds \\(\\rho gL^2/(2Y)\\) to the extension, as much as half the wire’s weight hung at the end. With your \\(Y\\) and \\(L\\), how dense would the metal have to be for this to reach one dial step ({#} mm)? Why would it not change your measured \\(Y\\)? (The demo leaves the wire’s own weight out.)":
  "Un alambre real también carga su propio peso. A una altura \\(y\\) sobre su extremo inferior sostiene la carga y el alambre de abajo, \\(F + \\rho gAy\\), donde \\(\\rho\\) es la densidad del metal. Cada pedazo corto \\(dy\\) se estira \\((F + \\rho gAy)\\,dy/(AY)\\): integra a lo largo del alambre para demostrar que su propio peso añade \\(\\rho gL^2/(2Y)\\) a la extensión, tanto como la mitad del peso del alambre colgado en el extremo. Con tu \\(Y\\) y tu \\(L\\), ¿qué tan denso tendría que ser el metal para que esto alcanzara una división del dial ({#} mm)? ¿Por qué no cambiaría tu \\(Y\\) medido? (La demo omite el peso propio del alambre.)",
"Prelab answers, wire dimensions, a separate copy of the data table for each elastic series, both fits with residuals, Young’s modulus estimates and uncertainty, the yield onset bracket with unloading evidence, and answers to the questions (and to With calculus, if assigned). Identify simulated data.":
  "Respuestas del prelaboratorio, dimensiones del alambre, una copia separada de la tabla de datos para cada serie elástica, ambos ajustes con residuos, estimaciones del módulo de Young e incertidumbre, el intervalo del inicio de la fluencia con la evidencia de la descarga, y las respuestas a las preguntas (y a Con cálculo, si se asignó). Identifica los datos simulados.",
"Cross section of the wire":
  "Sección transversal del alambre",
"Force from the load":
  "Fuerza de la carga",
"Original length of the wire (ΔL: its stretch)":
  "Longitud original del alambre (ΔL: su estiramiento)",
"Young's modulus":
  "Módulo de Young",
"Diameter of the wire":
  "Diámetro del alambre",
"Strain":
  "Deformación",
"Hanging mass":
  "Masa colgante",
"Stress":
  "Esfuerzo",
"Stress and Strain":
  "Esfuerzo y deformación",
"Prelab answers, wire dimensions, a separate copy of the data table for each elastic series, both fits with residuals, Young’s modulus estimates and uncertainty, the yield onset bracket with unloading evidence, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, dimensiones del alambre, una copia separada de la tabla de datos para cada serie elástica, ambos ajustes con residuos, estimaciones del módulo de Young con incertidumbre, el intervalo del inicio de la fluencia con la evidencia de la descarga y las respuestas a las preguntas. Identifica los datos simulados.",
"<strong>Diameter check.</strong> Set the Diameter d slider to {#} mm (a fresh wire of the same metal) and repeat the {#} to {#} kg series. Export, then clear. Compare the two fitted slopes and the moduli inferred from them.":
  "<strong>Comprobación del diámetro.</strong> Fija el control Diámetro d en {#} mm (un alambre nuevo del mismo metal) y repite la serie de {#} a {#} kg. Exporta y luego borra. Compara las dos pendientes ajustadas y los módulos que se infieren de ellas.",
"Why do thicker wires have steeper graphs of \\(F\\) against \\(\\Delta L\\) but not necessarily larger Young’s moduli?":
  "¿Por qué los alambres más gruesos tienen gráficas de \\(F\\) en función de \\(\\Delta L\\) más empinadas pero no necesariamente módulos de Young mayores?",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"<strong>Elastic measurements.</strong> Measure the original length and diameter of a fresh wire. On real equipment, measure diameter at several positions and note the zero reading. Increase the load in small steps, recording mass and extension. Unload to check that the wire returns to its original length. Obtain at least six elastic points, including zero; do not include a point that leaves a permanent extension in your elastic fit.":
  "<strong>Mediciones elásticas.</strong> Mide la longitud y el diámetro originales de un alambre nuevo. Con equipo real, mide el diámetro en varias posiciones y anota la lectura de cero. Aumenta la carga en pasos pequeños, registrando la masa y el alargamiento. Descarga para comprobar que el alambre regresa a su longitud original. Obtén al menos seis puntos elásticos, incluyendo el cero; no incluyas en tu ajuste elástico un punto que deje un alargamiento permanente.",
"<strong>Diameter check.</strong> Repeat the elastic measurements with a fresh wire of the same material but a second diameter. Compare the two fitted slopes and the moduli inferred from them. Keep each wire’s data separate.":
  "<strong>Comprobación del diámetro.</strong> Repite las mediciones elásticas con un alambre nuevo del mismo material pero de un segundo diámetro. Compara las dos pendientes ajustadas y los módulos deducidos de ellas. Mantén separados los datos de cada alambre.",
"<strong>Yielding.</strong> Return to a fresh specimen at the first diameter. Increase the peak load, unload fully, and record the residual extension. Start with small loads, then use smaller increments near the first detectable permanent set. Bracket the onset between the largest peak load that returned to zero and the first that did not. Once it yields, do not use subsequent loading points as fresh wire elastic data. Stop after detecting a clear permanent set; fracture is unnecessary.":
  "<strong>Fluencia.</strong> Regresa a una muestra nueva del primer diámetro. Aumenta la carga pico, descarga por completo y registra el alargamiento residual. Empieza con cargas pequeñas y luego usa incrementos más pequeños cerca de la primera deformación permanente detectable. Acota el inicio entre la mayor carga pico que regresó a cero y la primera que no lo hizo. Una vez que cede, no uses los puntos de carga siguientes como datos elásticos de alambre nuevo. Detente después de detectar una deformación permanente clara; no hace falta llegar a la fractura.",
"<strong>Using the virtual apparatus.</strong> Investigate a fresh Mystery metal wire {#} m long and {#} mm in diameter. Measure loaded extension at {#}, {#}, {#}, {#}, {#} and {#} kg, then remove the load and check for residual extension. Repeat with a fresh {#} mm wire, keeping the specimens’ measurements separate. For yielding, begin with another fresh {#} mm wire, increase the peak mass in small steps and fully unload after each peak. Record the residual extension by hand and bracket the first permanent set. A new wire starts a new fit in the demo but does not clear earlier readings, so send each specimen’s series to the worksheet and clear before the next; each then gets its own copy of the Data table. The demo never shows the Mystery metal’s properties: your modulus and yield onset come only from your readings.":
  "<strong>Uso del aparato virtual.</strong> Investiga un alambre nuevo de metal misterioso de {#} m de largo y {#} mm de diámetro. Mide el alargamiento con carga a {#}, {#}, {#}, {#}, {#} y {#} kg, luego quita la carga y busca un alargamiento residual. Repite con un alambre nuevo de {#} mm, manteniendo separadas las mediciones de cada muestra. Para la fluencia, empieza con otro alambre nuevo de {#} mm, aumenta la masa pico en pasos pequeños y descarga por completo después de cada pico. Registra a mano el alargamiento residual y acota la primera deformación permanente. Un alambre nuevo inicia un ajuste nuevo en la demo pero no borra las lecturas anteriores, así que envía la serie de cada muestra a la hoja y borra antes de la siguiente; así cada una tiene su propia copia de la tabla de datos. La demo nunca muestra las propiedades del metal misterioso: tu módulo y el inicio de la fluencia vienen solo de tus lecturas.",
"Why should you avoid fitting one straight line through elastic and plastic loading points?":
  "¿Por qué debes evitar ajustar una sola recta a puntos de carga elásticos y plásticos?"
});
