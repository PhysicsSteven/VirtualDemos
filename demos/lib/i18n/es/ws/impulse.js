/* ws/impulse in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/impulse', {
"Bumper":
  "Amortiguador",
"v_ before (m/s)":
  "v_ antes (m/s)",
"v_ after (m/s)":
  "v_ después (m/s)",
"Rate (Hz)":
  "Tasa (Hz)",
"Area A (N s)":
  "Área A (N s)",
"Peak (N)":
  "Pico (N)",
"Contact time (s)":
  "Tiempo de contacto (s)",
"Impulse and Momentum | VirtualDemos":
  "Impulso y momento | VirtualDemos",
"Impulse and Momentum":
  "Impulso y momento",
"The motion detector gives the velocity before (\\(v_1\\)) and after (\\(v_2\\)) the bounce, to {#} m/s, positive toward the sensor. The area is the trapezoid sum of the sampled sensor readings. Record stores one row per run (bumper, mass, velocities, rate, area, peak force, contact time); Export to worksheet sends the rows to the Data table below, which can also save them as CSV; export a run’s \\(F(t)\\) to integrate it yourself.":
  "El detector de movimiento da la velocidad antes (\\(v_1\\)) y después (\\(v_2\\)) del rebote, con precisión de {#} m/s, positiva hacia el sensor. El área es la suma por trapecios de las lecturas muestreadas del sensor. Registrar guarda una fila por corrida (amortiguador, masa, velocidades, tasa, área, fuerza pico, tiempo de contacto); Exportar a la hoja envía las filas a la tabla de Datos de abajo, que también puede guardarlas como CSV; exporta la \\(F(t)\\) de una corrida para integrarla tú mismo.",
"Blind hides the area, the momentum change and the peak force, leaving the graph, the velocities and the settings.":
  "A ciegas oculta el área, el cambio de momento y la fuerza pico, y deja la gráfica, las velocidades y la configuración.",
"\\[J = \\int F\\,dt = \\Delta p = m(v_{\\text{after}} - v_{\\text{before}})\\]":
  "\\[J = \\int F\\,dt = \\Delta p = m(v_{\\text{after}} - v_{\\text{before}})\\]",
"Model: a frictionless cart; the bumper pushes with \\(F = kx\\) while it is compressed, then unloads along a steeper line so the cart leaves with \\(e\\) times its speed (\\(e\\) is the coefficient of restitution). Each phase is simple harmonic, so \\(F(t)\\) is exact. Stiff spring \\(k = 4000\\) N/m, \\(e = 0.90\\); soft spring \\(k = 400\\) N/m, \\(e = 0.90\\); clay \\(k = 1500\\) N/m, \\(e = 0.10\\). The sensor reads the force to {#} N at the chosen sample rate.":
  "Modelo: un carrito sin fricción; el amortiguador empuja con \\(F = kx\\) mientras está comprimido, y luego se descarga a lo largo de una recta más empinada para que el carrito salga con \\(e\\) veces su rapidez (\\(e\\) es el coeficiente de restitución). Cada fase es armónica simple, así que \\(F(t)\\) es exacta. Resorte rígido \\(k = 4000\\) N/m, \\(e = 0.90\\); resorte blando \\(k = 400\\) N/m, \\(e = 0.90\\); plastilina \\(k = 1500\\) N/m, \\(e = 0.10\\). El sensor lee la fuerza con precisión de {#} N a la tasa de muestreo elegida.",
"Integrate a measured force pulse and compare its impulse with a cart’s momentum change. Test how bumper stiffness and sensor sampling affect that comparison.":
  "Integra un pulso de fuerza medido y compara su impulso con el cambio de momento de un carrito. Pon a prueba cómo afectan esa comparación la rigidez del amortiguador y el muestreo del sensor.",
"For a cart of fixed mass,":
  "Para un carrito de masa fija,",
"\\[J_{\\rm cart}=\\int F_{\\rm cart}\\,dt=m(v_{\\rm after}-v_{\\rm before}).\\]":
  "\\[J_{\\rm cart}=\\int F_{\\rm cart}\\,dt=m(v_{\\rm after}-v_{\\rm before}).\\]",
"Choose positive velocity toward the bumper. A rebounding cart has negative final velocity. The virtual force sensor reports the positive force exerted on the sensor, opposite to the force on the cart. Its positive area \\(A\\) therefore corresponds to \\(J_{\\rm cart}=-A\\). For sampled data, calculate area using":
  "Elige la velocidad positiva hacia el amortiguador. Un carrito que rebota tiene velocidad final negativa. El sensor de fuerza virtual reporta la fuerza positiva ejercida sobre el sensor, opuesta a la fuerza sobre el carrito. Por lo tanto su área positiva \\(A\\) corresponde a \\(J_{\\rm cart}=-A\\). Para datos muestreados, calcula el área con",
"\\[A\\approx\\sum_i\\frac{F_i+F_{i+1}}{2}(t_{i+1}-t_i).\\]":
  "\\[A\\approx\\sum_i\\frac{F_i+F_{i+1}}{2}(t_{i+1}-t_i).\\]",
"A softer bumper can spread an impulse over more time without changing the momentum change, provided the before/after velocities stay the same. Impulse conservation does not imply kinetic energy conservation.":
  "Un amortiguador más blando puede repartir un impulso en más tiempo sin cambiar el cambio de momento, siempre que las velocidades antes y después sean las mismas. La conservación del impulso no implica la conservación de la energía cinética.",
"A cart approaches with positive velocity and rebounds. What is the sign of its momentum change?":
  "Un carrito se acerca con velocidad positiva y rebota. ¿Cuál es el signo de su cambio de momento?",
"Why might a force sensor miss a narrow peak at a low sample rate?":
  "¿Por qué un sensor de fuerza podría perderse un pico angosto con una tasa de muestreo baja?",
"What must remain fixed when comparing stiff and soft bumpers to test their impulse?":
  "¿Qué debe mantenerse fijo al comparar amortiguadores rígidos y blandos para poner a prueba su impulso?",
"On a real cart track, secure the sensor and bumper, catch the returning cart and keep fingers away from the collision point. Do not exceed the sensor’s force limit or launch toward people.":
  "En una pista real de carritos, asegura el sensor y el amortiguador, atrapa el carrito que regresa y mantén los dedos lejos del punto de colisión. No excedas el límite de fuerza del sensor ni lances hacia las personas.",
"<strong>Force area comparison.</strong> Measure cart mass and velocities immediately before and after contact. Record the force pulse at the highest available sample rate, including a baseline before and after the collision. Integrate the pulse numerically and compare signed cart impulse with momentum change. For the virtual main trial use \\(m = 0.50\\ \\text{kg}\\) and approach speed {#} m/s.":
  "<strong>Comparación de fuerza y área.</strong> Mide la masa del carrito y las velocidades justo antes y después del contacto. Registra el pulso de fuerza a la tasa de muestreo más alta disponible, incluyendo una línea base antes y después de la colisión. Integra numéricamente el pulso y compara el impulso del carrito, con signo, con el cambio de momento. Para el ensayo principal virtual usa \\(m = 0.50\\ \\text{kg}\\) y una rapidez de acercamiento de {#} m/s.",
"<strong>Bumper comparison.</strong> Repeat with a soft spring at the same mass and approach speed. Compare area, peak force and contact duration. Then use clay and compare the rebound speed, momentum change and kinetic energy loss. Do not assume clay has the same restitution as either spring.":
  "<strong>Comparación de amortiguadores.</strong> Repite con un resorte blando con la misma masa y la misma rapidez de acercamiento. Compara el área, la fuerza pico y la duración del contacto. Luego usa plastilina y compara la rapidez de rebote, el cambio de momento y la pérdida de energía cinética. No supongas que la plastilina tiene la misma restitución que alguno de los resortes.",
"<strong>Sampling check.</strong> For the stiff spring, compare {#} Hz, {#} kHz and {#} kHz records of the same modeled collision. Integrate each exported file rather than reading the hidden area. Compare the estimates and their residuals from the velocity based momentum change. Do not assume error must decrease monotonically for every rounded data set.":
  "<strong>Comprobación del muestreo.</strong> Para el resorte rígido, compara registros a {#} Hz, {#} kHz y {#} kHz de la misma colisión modelada. Integra cada archivo exportado en lugar de leer el área oculta. Compara las estimaciones y sus residuos respecto al cambio de momento obtenido de las velocidades. No supongas que el error debe disminuir de forma monótona para todo conjunto de datos redondeado.",
"<strong>Using the virtual apparatus.</strong> Compare a stiff spring, a soft spring and clay with a {#} kg cart approaching at {#} m/s. Begin with a {#} kHz sensor rate and predictions hidden. Record each completed collision and save its force against time data separately. Integrate the force trace yourself before consulting the calculated summary quantities: with predictions hidden, Export to worksheet leaves out the area and peak force, but each run’s force against time file is complete. For the stiff spring, repeat the data comparison at {#} Hz and {#} kHz as well as {#} kHz; changing the rate resamples the same modeled collision rather than producing an independent noisy trial. Keep viewing speed distinct from the physical time axis, and preserve the record for each bumper and sampling rate for the final comparison.":
  "<strong>Uso del aparato virtual.</strong> Compara un resorte rígido, un resorte blando y plastilina con un carrito de {#} kg que se acerca a {#} m/s. Empieza con una tasa del sensor de {#} kHz y las predicciones ocultas. Registra cada colisión completa y guarda por separado sus datos de fuerza en función del tiempo. Integra tú mismo la traza de fuerza antes de consultar las cantidades resumen calculadas: con las predicciones ocultas, Exportar a la hoja omite el área y la fuerza pico, pero el archivo de fuerza en función del tiempo de cada corrida está completo. Para el resorte rígido, repite la comparación de datos a {#} Hz y {#} kHz además de {#} kHz; cambiar la tasa vuelve a muestrear la misma colisión modelada en lugar de producir un ensayo ruidoso independiente. Distingue la velocidad de visualización del eje de tiempo físico, y conserva el registro de cada amortiguador y cada tasa de muestreo para la comparación final.",
"<span>A</span>Bumper":
  "<span>A</span>Amortiguador",
"<span>C</span>\\(v_{\\rm before}\\) (m/s)":
  "<span>C</span>\\(v_{\\rm before}\\) (m/s)",
"<span>D</span>\\(v_{\\rm after}\\) (m/s)":
  "<span>D</span>\\(v_{\\rm after}\\) (m/s)",
"<span>E</span>Rate (Hz)":
  "<span>E</span>Tasa (Hz)",
"<span>F</span>Area \\(A\\) (N s)":
  "<span>F</span>Área \\(A\\) (N s)",
"<span>G</span>\\(\\Delta p\\) (kg m/s)":
  "<span>G</span>\\(\\Delta p\\) (kg m/s)",
"<span>H</span>Peak (N)":
  "<span>H</span>Pico (N)",
"<span>I</span>Contact time (s)":
  "<span>I</span>Tiempo de contacto (s)",
"Bumper, row {#}":
  "Amortiguador, fila {#}",
"v_ before (m/s), row {#}":
  "v_ antes (m/s), fila {#}",
"v_ after (m/s), row {#}":
  "v_ después (m/s), fila {#}",
"Rate (Hz), row {#}":
  "Tasa (Hz), fila {#}",
"Area A (N s), row {#}":
  "Área A (N s), fila {#}",
"Δ p (kg m/s), row {#}":
  "Δ p (kg m/s), fila {#}",
"Peak (N), row {#}":
  "Pico (N), fila {#}",
"Contact time (s), row {#}":
  "Tiempo de contacto (s), fila {#}",
"Save every force file, its settings and your integration method. Contact time is the pulse duration, not total approach and return time.":
  "Guarda cada archivo de fuerza, su configuración y tu método de integración. El tiempo de contacto es la duración del pulso, no el tiempo total de acercamiento y regreso.",
"Plot \\(F_{\\rm sensor}\\) against time and integrate by the trapezoid rule. Show at least one interval calculation and your spreadsheet/code formula.":
  "Grafica \\(F_{\\rm sensor}\\) contra el tiempo e intégrala con la regla del trapecio. Muestra al menos el cálculo de un intervalo y tu fórmula de hoja de cálculo o de código.",
"Compare \\(-A\\) with \\(m(v_{\\rm after}-v_{\\rm before})\\), including signs, units and a fractional residual based on \\(\\lvert\\Delta p\\rvert\\).":
  "Compara \\(-A\\) con \\(m(v_{\\rm after}-v_{\\rm before})\\), incluyendo signos, unidades y un residuo fraccional basado en \\(\\lvert\\Delta p\\rvert\\).",
"Compare stiff and soft pulse widths and peaks at matched velocities. Explain why equal areas need not mean equal peak forces.":
  "Compara los anchos y los picos de los pulsos rígido y blando a velocidades iguales. Explica por qué áreas iguales no implican fuerzas pico iguales.",
"For clay, calculate initial and final kinetic energies and compare energy loss with impulse. Explain why these are different quantities.":
  "Para la plastilina, calcula las energías cinéticas inicial y final y compara la pérdida de energía con el impulso. Explica por qué son cantidades distintas.",
"Quantify sample rate effects and discuss baseline, rounding and unresolved peak errors.":
  "Cuantifica los efectos de la tasa de muestreo y analiza los errores de línea base, de redondeo y de picos no resueltos.",
"The virtual force readings round to {#} N and velocities to {#} m/s, without added random noise. Force CSV times round to {#} s. On a real bench include sensor zero, calibration, mass, velocity measurement and sample spacing. A constant force zero error adds an area proportional to the chosen integration duration, so document the baseline window. Use sampling comparisons to assess integration sensitivity; repeated identical simulated files do not reduce uncertainty.":
  "Las lecturas virtuales de fuerza se redondean a {#} N y las velocidades a {#} m/s, sin ruido aleatorio añadido. Los tiempos del CSV de fuerza se redondean a {#} s. En un banco real incluye el cero del sensor, la calibración, la masa, la medición de velocidad y el espaciamiento entre muestras. Un error de cero constante en la fuerza añade un área proporcional a la duración de integración elegida, así que documenta la ventana de línea base. Usa las comparaciones de muestreo para evaluar la sensibilidad de la integración; archivos simulados idénticos repetidos no reducen la incertidumbre.",
"Why does the sensor’s positive area have the opposite sign from the cart’s momentum change?":
  "¿Por qué el área positiva del sensor tiene el signo opuesto al cambio de momento del carrito?",
"Why can padding reduce peak force while leaving impulse nearly unchanged?":
  "¿Por qué un acolchado puede reducir la fuerza pico dejando el impulso casi sin cambio?",
"Can an inelastic collision conserve momentum while losing kinetic energy?":
  "¿Puede una colisión inelástica conservar el momento mientras pierde energía cinética?",
"Why does a higher sample rate not remove a force calibration error?":
  "¿Por qué una tasa de muestreo más alta no elimina un error de calibración de la fuerza?",
"Prelab answers, settings and force CSVs, labeled pulse plots, reproducible integrations, signed impulse/momentum comparisons, bumper and sampling comparisons, kinetic energy analysis, uncertainty and question answers. Identify simulated data.":
  "Respuestas previas al laboratorio, configuración y CSV de fuerza, gráficas de los pulsos con etiquetas, integraciones reproducibles, comparaciones de impulso y momento con signo, comparaciones de amortiguadores y de muestreo, análisis de energía cinética, incertidumbre y respuestas a las preguntas. Identifica los datos simulados.",
"Area under the sensor's force against time":
  "Área bajo la fuerza del sensor en función del tiempo",
"Force from the bumper":
  "Fuerza del amortiguador",
"Force on the cart":
  "Fuerza sobre el carrito",
"Force at sample i":
  "Fuerza en la muestra i",
"Force at the next sample":
  "Fuerza en la muestra siguiente",
"Force on the sensor (opposite to the force on the cart)":
  "Fuerza sobre el sensor (opuesta a la fuerza sobre el carrito)",
"Impulse":
  "Impulso",
"Impulse on the cart":
  "Impulso sobre el carrito",
"Coefficient of restitution":
  "Coeficiente de restitución",
"Stiffness of the bumper while it is compressed":
  "Rigidez del amortiguador mientras está comprimido",
"Mass of the cart":
  "Masa del carrito",
"Momentum (Δp: its change)":
  "Momento (Δp: su cambio)",
"Time of sample i":
  "Tiempo de la muestra i",
"Time of the next sample":
  "Tiempo de la muestra siguiente",
"Velocity before the bounce (positive toward the sensor)":
  "Velocidad antes del rebote (positiva hacia el sensor)",
"Velocity after the bounce (positive toward the sensor)":
  "Velocidad después del rebote (positiva hacia el sensor)",
"Velocity after the bounce":
  "Velocidad después del rebote",
"Velocity before the bounce":
  "Velocidad antes del rebote",
"Compression of the bumper":
  "Compresión del amortiguador"
});
