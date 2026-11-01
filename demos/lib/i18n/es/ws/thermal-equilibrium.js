/* ws/thermal-equilibrium in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/thermal-equilibrium', {
"ln(T_A - T_B) (difference in °C)":
  "ln(T_A - T_B) (diferencia en °C)",
"Thermal Equilibrium | VirtualDemos":
  "Equilibrio térmico | VirtualDemos",
"Thermal Equilibrium":
  "Equilibrio térmico",
"<strong>Setups in the demo:</strong> Hot metal, cool water; Mystery block (these two use the Equilibrium view, the subject of this worksheet); Gas thermometer; Rod in a water bath; Water near {#} °C; House wall in winter (the other three worksheets; a fifth worksheet, on cooling, uses the Cooling view).":
  "<strong>Configuraciones en la demo:</strong> Metal caliente, agua fría; Bloque misterioso (estas dos usan la vista Equilibrio, el tema de esta hoja de trabajo); Termómetro de gas; Varilla en un baño de agua; Agua cerca de {#} °C; Pared de una casa en invierno (las otras tres hojas de trabajo; una quinta hoja de trabajo, sobre el enfriamiento, usa la vista Enfriamiento).",
"The Equilibrium view has two bodies, A and B, in a perfectly insulated box, joined by a bar {#} cm across. You choose each body’s material, mass and starting temperature, and the bar’s material and length.":
  "La vista Equilibrio tiene dos cuerpos, A y B, en una caja perfectamente aislada, unidos por una barra de {#} cm de diámetro. Eliges el material, la masa y la temperatura inicial de cada cuerpo, y el material y la longitud de la barra.",
"Heat flows through the bar at \\(P = kA(T_A - T_B)/L\\), with the thermal conductivity \\(k\\) from the textbook’s Table {#}. The bar’s own heat capacity and the box’s are neglected, so all the heat that leaves one body enters the other.":
  "El calor fluye por la barra a \\(P = kA(T_A - T_B)/L\\), con la conductividad térmica \\(k\\) de la Tabla {#} del libro. Se desprecian la capacidad calorífica propia de la barra y la de la caja, así que todo el calor que sale de un cuerpo entra en el otro.",
"Each body changes temperature as \\(Q = mc\\,\\Delta T\\), with \\(c\\) from Table {#}. A liquid sits in a can whose heat capacity is neglected.":
  "Cada cuerpo cambia de temperatura según \\(Q = mc\\,\\Delta T\\), con \\(c\\) de la Tabla {#}. Un líquido está en una lata cuya capacidad calorífica se desprecia.",
"The thermometers read to {#} °C and the clock to {#} s. The speed buttons run the clock {#}, {#} or {#} times faster than real time; the clock always shows the time in the experiment.":
  "Los termómetros leen a {#} °C y el reloj a {#} s. Los botones de velocidad hacen correr el reloj {#}, {#} o {#} veces más rápido que el tiempo real; el reloj siempre muestra el tiempo del experimento.",
"Record reading stores the time and both temperatures, with the settings. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda el tiempo y ambas temperaturas, con los ajustes. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una nueva copia de la tabla.",
"Mystery block hides the block’s material and specific heat. New mystery block picks another.":
  "Bloque misterioso oculta el material y el calor específico del bloque. Nuevo bloque misterioso elige otro.",
"Blind hides the graph and the predicted final temperature, so you can make your own.":
  "A ciegas oculta la gráfica y la temperatura final predicha, para que hagas tu propia predicción.",
"Watch two bodies come to thermal equilibrium, check that the heat one loses is the heat the other gains, and use that to find an unknown specific heat.":
  "Observa cómo dos cuerpos llegan al equilibrio térmico, comprueba que el calor que pierde uno es el calor que gana el otro, y usa eso para encontrar un calor específico desconocido.",
"Two bodies in thermal contact exchange heat until they reach the same temperature; then nothing more changes. That shared temperature is <strong>thermal equilibrium</strong>, and the <strong>zeroth law</strong> says two bodies each in equilibrium with a third are in equilibrium with each other (§{#}). That is why a thermometer works.":
  "Dos cuerpos en contacto térmico intercambian calor hasta alcanzar la misma temperatura; luego nada más cambia. Esa temperatura común es el <strong>equilibrio térmico</strong>, y la <strong>ley cero</strong> dice que dos cuerpos que están cada uno en equilibrio con un tercero están en equilibrio entre sí (§{#}). Por eso funciona un termómetro.",
"With no heat lost to the surroundings, the heat body A gives up is the heat body B takes in (§{#}):":
  "Sin pérdida de calor hacia los alrededores, el calor que cede el cuerpo A es el calor que absorbe el cuerpo B (§{#}):",
"\\[m_A c_A (T_{A0} - T_f) = m_B c_B (T_f - T_{B0}) \\quad\\Rightarrow\\quad T_f = \\frac{m_A c_A T_{A0} + m_B c_B T_{B0}}{m_A c_A + m_B c_B}.\\]":
  "\\[m_A c_A (T_{A0} - T_f) = m_B c_B (T_f - T_{B0}) \\quad\\Rightarrow\\quad T_f = \\frac{m_A c_A T_{A0} + m_B c_B T_{B0}}{m_A c_A + m_B c_B}.\\]",
"Heat flows through the bar at a rate set by conduction (§{#}), \\(P = kA\\,(T_A - T_B)/L\\). As the difference shrinks, so does the flow, and the difference dies away exponentially:":
  "El calor fluye por la barra con una tasa fijada por la conducción (§{#}), \\(P = kA\\,(T_A - T_B)/L\\). A medida que la diferencia se reduce, también lo hace el flujo, y la diferencia se extingue exponencialmente:",
"\\[T_A - T_B = (T_{A0} - T_{B0})\\,e^{-t/\\tau}, \\qquad \\frac{1}{\\tau} = \\frac{kA}{L}\\left(\\frac{1}{m_A c_A} + \\frac{1}{m_B c_B}\\right).\\]":
  "\\[T_A - T_B = (T_{A0} - T_{B0})\\,e^{-t/\\tau}, \\qquad \\frac{1}{\\tau} = \\frac{kA}{L}\\left(\\frac{1}{m_A c_A} + \\frac{1}{m_B c_B}\\right).\\]",
"A {#} kg aluminum block at {#} °C is joined to {#} kg of water at {#} °C. Without calculating, will the final temperature be nearer {#} °C or {#} °C? Why?":
  "Un bloque de aluminio de {#} kg a {#} °C se une a {#} kg de agua a {#} °C. Sin calcular, ¿la temperatura final estará más cerca de {#} °C o de {#} °C? ¿Por qué?",
"Use the textbook’s specific heats to predict the final temperature.":
  "Usa los calores específicos del libro para predecir la temperatura final.",
"Sketch both temperatures against time on one graph.":
  "Bosqueja ambas temperaturas en función del tiempo en una misma gráfica.",
"If the copper bar were twice as long, what would change: the final temperature, the time to get there, or both?":
  "Si la barra de cobre fuera el doble de larga, ¿qué cambiaría: la temperatura final, el tiempo para llegar a ella, o ambos?",
"Hot metal blocks and hot water can burn. In a real lab use tongs and an insulated container, and let samples cool before handling.":
  "Los bloques metálicos calientes y el agua caliente pueden quemar. En un laboratorio real usa pinzas y un recipiente aislado, y deja enfriar las muestras antes de manipularlas.",
"<strong>Hot metal, cool water.</strong> Start with the Hot metal, cool water setup. Run the clock and record both temperatures about every {#} s for the first two minutes and then about every {#} s until they agree to {#} °C. Send the readings to the worksheet.":
  "<strong>Metal caliente, agua fría.</strong> Empieza con la configuración Metal caliente, agua fría. Pon a correr el reloj y registra ambas temperaturas más o menos cada {#} s durante los primeros dos minutos y luego más o menos cada {#} s hasta que coincidan a {#} °C. Envía las lecturas a la hoja de trabajo.",
"<strong>A longer bar.</strong> Send the readings to the worksheet and clear them, then double the bar’s length and repeat. Send this run to a new copy of the table.":
  "<strong>Una barra más larga.</strong> Envía las lecturas a la hoja de trabajo y bórralas, luego duplica la longitud de la barra y repite. Envía esta corrida a una nueva copia de la tabla.",
"<strong>Mystery block.</strong> Pick the Mystery block setup, run it to equilibrium and record the starting temperatures and the final temperature. Repeat with a different water mass or starting temperature to check your result.":
  "<strong>Bloque misterioso.</strong> Elige la configuración Bloque misterioso, ejecútala hasta el equilibrio y registra las temperaturas iniciales y la temperatura final. Repite con otra masa de agua u otra temperatura inicial para comprobar tu resultado.",
"<span>B</span>Time \\(t\\) (s)":
  "<span>B</span>Tiempo \\(t\\) (s)",
"<span>F</span>\\(\\ln(T_A - T_B)\\) (difference in °C)":
  "<span>F</span>\\(\\ln(T_A - T_B)\\) (diferencia en °C)",
"T_A (°C), row {#}":
  "T_A (°C), fila {#}",
"T_B (°C), row {#}":
  "T_B (°C), fila {#}",
"T_A - T_B (°C), row {#}":
  "T_A - T_B (°C), fila {#}",
"ln(T_A - T_B) (difference in °C), row {#}":
  "ln(T_A - T_B) (diferencia en °C), fila {#}",
"Record each body’s material, mass and starting temperature, and the bar’s material and length, for each run.":
  "Registra el material, la masa y la temperatura inicial de cada cuerpo, y el material y la longitud de la barra, para cada corrida.",
"Compare the final temperature of the Hot metal, cool water run with your prediction from Before the lab question {#}.":
  "Compara la temperatura final de la corrida Metal caliente, agua fría con tu predicción de la pregunta {#} de Antes del laboratorio.",
"Using your final temperature, work out the heat the aluminum lost and the heat the water gained. How well do they agree?":
  "Usando tu temperatura final, calcula el calor que perdió el aluminio y el calor que ganó el agua. ¿Qué tan bien coinciden?",
"Fit \\(\\ln(T_A - T_B)\\) against \\(t\\). From the slope find the time constant \\(\\tau\\), and compare it with \\(\\tau\\) worked out from the formula in the Background (the bar is {#} cm across).":
  "Ajusta \\(\\ln(T_A - T_B)\\) en función de \\(t\\). A partir de la pendiente, encuentra la constante de tiempo \\(\\tau\\), y compárala con la \\(\\tau\\) calculada con la fórmula del Fundamento (la barra mide {#} cm de diámetro).",
"Find \\(\\tau\\) for the longer bar the same way. By what factor did it change, and why?":
  "Encuentra \\(\\tau\\) para la barra más larga de la misma manera. ¿En qué factor cambió, y por qué?",
"From the mystery runs, find the mystery metal’s specific heat, \\(c = m_w c_w (T_f - T_{w0}) / [\\,m\\,(T_0 - T_f)\\,]\\), and name the metal from Table {#}.":
  "A partir de las corridas misteriosas, encuentra el calor específico del metal misterioso, \\(c = m_w c_w (T_f - T_{w0}) / [\\,m\\,(T_0 - T_f)\\,]\\), y nombra el metal según la Tabla {#}.",
"The thermometers read to {#} °C. As the two temperatures close in, \\(T_A - T_B\\) becomes small, so its relative uncertainty grows; say which readings you left out of the fit in Analysis {#} and why. For the mystery metal, propagate the {#} °C reading uncertainty through the formula for \\(c\\). In a real lab, heat lost to the container and the air would make your \\(c\\) come out wrong; say in which direction.":
  "Los termómetros leen a {#} °C. A medida que las dos temperaturas se acercan, \\(T_A - T_B\\) se vuelve pequeña, así que su incertidumbre relativa crece; di qué lecturas dejaste fuera del ajuste del Análisis {#} y por qué. Para el metal misterioso, propaga la incertidumbre de lectura de {#} °C a través de la fórmula de \\(c\\). En un laboratorio real, el calor perdido hacia el recipiente y el aire haría que tu \\(c\\) saliera mal; di en qué dirección.",
"The final temperature does not depend on the bar at all. Why not?":
  "La temperatura final no depende en absoluto de la barra. ¿Por qué no?",
"Water has the larger specific heat but the smaller mass here. Which body changed temperature more, and why?":
  "Aquí el agua tiene el mayor calor específico pero la menor masa. ¿Qué cuerpo cambió más de temperatura, y por qué?",
"A thermometer is put in a cup of coffee. Why must you wait before reading it, and what is the thermometer in equilibrium with when you do?":
  "Se pone un termómetro en una taza de café. ¿Por qué debes esperar antes de leerlo, y con qué está en equilibrio el termómetro cuando lo lees?",
"Why do coastal towns have milder temperature swings than inland towns?":
  "¿Por qué los pueblos costeros tienen variaciones de temperatura más suaves que los del interior?",
"Prelab answers, the settings for each run, the table copies with their graphs and fits, the final temperatures, time constants and mystery specific heat with uncertainties and comparisons, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, los ajustes de cada corrida, las copias de la tabla con sus gráficas y ajustes, las temperaturas finales, las constantes de tiempo y el calor específico misterioso con incertidumbres y comparaciones, y las respuestas a las preguntas. Identifica los datos simulados.",
"Cross section of the bar":
  "Sección transversal de la barra",
"Length of the bar":
  "Longitud de la barra",
"Rate of heat flow through the bar":
  "Tasa de flujo de calor a través de la barra",
"Heat":
  "Calor",
"Temperature (ΔT: its change)":
  "Temperatura (ΔT: su cambio)",
"Starting temperature of the metal":
  "Temperatura inicial del metal",
"Temperature of body A":
  "Temperatura del cuerpo A",
"Starting temperature of body A":
  "Temperatura inicial del cuerpo A",
"Temperature of body B":
  "Temperatura del cuerpo B",
"Starting temperature of body B":
  "Temperatura inicial del cuerpo B",
"Final common temperature":
  "Temperatura común final",
"Starting temperature of the water":
  "Temperatura inicial del agua",
"Specific heat":
  "Calor específico",
"Specific heat of body A":
  "Calor específico del cuerpo A",
"Specific heat of body B":
  "Calor específico del cuerpo B",
"Specific heat of water":
  "Calor específico del agua",
"Thermal conductivity of the bar":
  "Conductividad térmica de la barra",
"Mass of body A":
  "Masa del cuerpo A",
"Mass of body B":
  "Masa del cuerpo B",
"Mass of the water":
  "Masa del agua",
"Time constant":
  "Constante de tiempo",
"Temperature and Heat (Equilibrium)":
  "Temperatura y calor (Equilibrio)"
});
