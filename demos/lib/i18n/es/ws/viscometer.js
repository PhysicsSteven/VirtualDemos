/* ws/viscometer in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/viscometer', {
"Series":
  "Serie",
"Liquid/ball":
  "Líquido/esfera",
"Kv (m/s)":
  "Kv (m/s)",
"Measuring Viscosity with a Falling Ball | VirtualDemos":
  "Medición de la viscosidad con una esfera que cae | VirtualDemos",
"Measuring Viscosity with a Falling Ball":
  "Medición de la viscosidad con una esfera que cae",
"Capture stores the liquid, ball, tube and the gate time between the marks ({#} s); \\(v = (0.200\\ \\text{m})/t\\). Stokes’ law predicts \\(v \\propto d^2\\), so plot \\(v\\) against \\(d^2\\) for one liquid, ball and tube: \\(\\eta = (\\rho_b - \\rho_f)g/(18\\times\\text{slope})\\). The fit uses the rows that match the current settings.":
  "Capturar guarda el líquido, la esfera, el tubo y el tiempo de las compuertas entre las marcas ({#} s); \\(v = (0.200\\ \\text{m})/t\\). La ley de Stokes predice \\(v \\propto d^2\\), así que grafica \\(v\\) en función de \\(d^2\\) para un mismo líquido, esfera y tubo: \\(\\eta = (\\rho_b - \\rho_f)g/(18\\times\\text{slope})\\). El ajuste usa las filas que coinciden con los ajustes actuales.",
"Blind hides \\(\\eta\\), the Stokes prediction, the Reynolds number and the fitted \\(\\eta\\), leaving the timer and the densities. The Mystery liquid always hides its \\(\\eta\\).":
  "A ciegas oculta \\(\\eta\\), la predicción de Stokes, el número de Reynolds y la \\(\\eta\\) ajustada, dejando el temporizador y las densidades. El Líquido misterioso siempre oculta su \\(\\eta\\).",
"Stokes: \\(F = 6\\pi\\eta r v\\); \\(v_t = 2(\\rho_b - \\rho_f)g r^2/(9\\eta)\\)":
  "Stokes: \\(F = 6\\pi\\eta r v\\); \\(v_t = 2(\\rho_b - \\rho_f)g r^2/(9\\eta)\\)",
"Model: drag \\(F = 6\\pi\\eta r v\\times K(d/D)\\times C_D\\,N_R/24\\), with the standard drag curve of Clift, Grace and Weber (Oseen’s \\(1 + 3\\,N_R/16\\) below \\(N_R = 0.01\\); above \\(N_R = 1.2\\times10^4\\) the drag coefficient is held at its value there, within {#}% of the curve for the fastest ball here) and Haberman and Sayre’s wall factor \\(K\\) for a sphere on the axis of a tube in slow flow (the \\(K\\) you apply). At higher \\(N_R\\) the walls matter less: the factor is weakened following Di Felice ({#}), whose fit covers \\(N_R\\) up to about {#}. The ball’s motion includes buoyancy and the added mass \\(\\tfrac{1}{2}\\rho_f V\\). Densities in kg/m³: steel {#}, glass {#}, nylon {#}. Liquids at {#} °C: glycerol {#} and \\(\\eta = 1.41\\) Pa·s; castor oil {#} and {#} Pa·s; motor oil (typical SAE {#}) {#} and {#} Pa·s; water {#} and {#} mPa·s.":
  "Modelo: arrastre \\(F = 6\\pi\\eta r v\\times K(d/D)\\times C_D\\,N_R/24\\), con la curva de arrastre estándar de Clift, Grace y Weber (el \\(1 + 3\\,N_R/16\\) de Oseen por debajo de \\(N_R = 0.01\\); por encima de \\(N_R = 1.2\\times10^4\\) el coeficiente de arrastre se mantiene en su valor ahí, dentro del {#}% de la curva para la esfera más rápida de aquí) y el factor de pared \\(K\\) de Haberman y Sayre para una esfera sobre el eje de un tubo en flujo lento (el \\(K\\) que aplicas). A \\(N_R\\) más alto las paredes importan menos: el factor se debilita según Di Felice ({#}), cuyo ajuste cubre \\(N_R\\) hasta unos {#}. El movimiento de la esfera incluye la flotación y la masa añadida \\(\\tfrac{1}{2}\\rho_f V\\). Densidades en kg/m³: acero {#}, vidrio {#}, nailon {#}. Líquidos a {#} °C: glicerol {#} y \\(\\eta = 1.41\\) Pa·s; aceite de ricino {#} y {#} Pa·s; aceite de motor (SAE {#} típico) {#} y {#} Pa·s; agua {#} y {#} mPa·s.",
"Determine a liquid’s viscosity from falling ball timings. Test how tube walls and the limits of Stokes’ law affect the result.":
  "Determina la viscosidad de un líquido a partir de los tiempos de caída de una esfera. Pon a prueba cómo afectan el resultado las paredes del tubo y los límites de la ley de Stokes.",
"For slow motion of a small sphere through a viscous liquid, Stokes drag is \\(3\\pi\\eta d v\\), where \\(d\\) is diameter and \\(\\eta\\) is dynamic viscosity. At terminal speed, weight minus buoyancy balances drag. In a very wide liquid,":
  "Para el movimiento lento de una esfera pequeña a través de un líquido viscoso, el arrastre de Stokes es \\(3\\pi\\eta d v\\), donde \\(d\\) es el diámetro y \\(\\eta\\) es la viscosidad dinámica. A la rapidez terminal, el peso menos la flotación equilibra el arrastre. En un líquido muy ancho,",
"\\[v_\\infty=\\frac{(\\rho_b-\\rho_f)gd^2}{18\\eta}.\\]":
  "\\[v_\\infty=\\frac{(\\rho_b-\\rho_f)gd^2}{18\\eta}.\\]",
"Here \\(\\rho_b\\) and \\(\\rho_f\\) are ball and liquid densities. Tube walls slow the ball. For this virtual apparatus use \\(\\lambda = d/D\\), where \\(D\\) is the tube’s inside diameter, and the supplied model correction":
  "Aquí \\(\\rho_b\\) y \\(\\rho_f\\) son las densidades de la esfera y del líquido. Las paredes del tubo frenan la esfera. Para este aparato virtual usa \\(\\lambda = d/D\\), donde \\(D\\) es el diámetro interior del tubo, y la corrección del modelo proporcionada",
"\\[\\begin{gathered} K=\\frac{1-0.75857\\lambda^5}{D(\\lambda)}, \\qquad v_\\infty\\approx Kv, \\\\[4pt] D(\\lambda)=1-2.1050\\lambda+2.0865\\lambda^3 \\\\ {}-1.7068\\lambda^5+0.72603\\lambda^6. \\end{gathered}\\]":
  "\\[\\begin{gathered} K=\\frac{1-0.75857\\lambda^5}{D(\\lambda)}, \\qquad v_\\infty\\approx Kv, \\\\[4pt] D(\\lambda)=1-2.1050\\lambda+2.0865\\lambda^3 \\\\ {}-1.7068\\lambda^5+0.72603\\lambda^6. \\end{gathered}\\]",
"A plot of \\(Kv\\) against \\(d^2\\) has slope \\(c \\approx (\\rho_b-\\rho_f)g/(18\\eta)\\). Use SI units. Stokes’ law requires a small Reynolds number, \\(N_R = \\rho_f v d/\\eta\\), and a ball already near terminal speed at the timing marks. The wall correction is a slow flow model; applying it at high \\(N_R\\) does not repair the failure of Stokes’ law.":
  "Una gráfica de \\(Kv\\) en función de \\(d^2\\) tiene pendiente \\(c \\approx (\\rho_b-\\rho_f)g/(18\\eta)\\). Usa unidades SI. La ley de Stokes requiere un número de Reynolds pequeño, \\(N_R = \\rho_f v d/\\eta\\), y una esfera que ya esté cerca de la rapidez terminal en las marcas de medición. La corrección de pared es un modelo de flujo lento; aplicarla a \\(N_R\\) alto no repara la falla de la ley de Stokes.",
"Why must buoyancy be subtracted from the ball’s weight?":
  "¿Por qué hay que restar la flotación del peso de la esfera?",
"What happens to inferred viscosity if tube slowing is ignored?":
  "¿Qué le pasa a la viscosidad inferida si se ignora el frenado por el tubo?",
"How could a ball that is still accelerating between the marks bias a terminal speed measurement?":
  "¿Cómo podría sesgar una medición de rapidez terminal una esfera que todavía acelera entre las marcas?",
"On a real bench, secure the tube, catch balls safely and wear the required eye protection. Avoid splashing liquids, clean spills promptly and follow the laboratory’s handling and disposal instructions. Never drop a ball into a fragile tube without the approved apparatus.":
  "En una mesa real, asegura el tubo, atrapa las esferas con cuidado y usa la protección para los ojos requerida. Evita salpicar líquidos, limpia los derrames de inmediato y sigue las instrucciones del laboratorio para el manejo y la disposición. Nunca dejes caer una esfera en un tubo frágil sin el aparato aprobado.",
"<strong>Slow flow scan.</strong> Measure ball and liquid densities, ball diameters and tube diameter. Time travel between marks {#} m apart after allowing enough distance for the ball to settle. In the simulation use glass balls in glycerol at diameters {#}, {#}, {#} and {#} mm. Begin with the {#} mm tube. Record every gate time and calculate \\(v = 0.200/t\\).":
  "<strong>Barrido en flujo lento.</strong> Mide las densidades de la esfera y del líquido, los diámetros de las esferas y el diámetro del tubo. Mide el tiempo de recorrido entre marcas separadas {#} m después de dejar suficiente distancia para que la esfera se estabilice. En la simulación usa esferas de vidrio en glicerol con diámetros de {#}, {#}, {#} y {#} mm. Empieza con el tubo de {#} mm. Registra cada tiempo de las compuertas y calcula \\(v = 0.200/t\\).",
"<strong>Wall check.</strong> Repeat the same ball sizes in the {#} mm tube. Fit uncorrected \\(v\\) against \\(d^2\\) for each tube, then calculate \\(K\\) for every row and fit \\(Kv\\) against \\(d^2\\). Compare the viscosities before and after correction. Keep liquid and ball material unchanged.":
  "<strong>Comprobación de las paredes.</strong> Repite los mismos tamaños de esfera en el tubo de {#} mm. Ajusta \\(v\\) sin corregir en función de \\(d^2\\) para cada tubo, luego calcula \\(K\\) para cada fila y ajusta \\(Kv\\) en función de \\(d^2\\). Compara las viscosidades antes y después de la corrección. Mantén sin cambio el líquido y el material de la esfera.",
"<strong>Model limits.</strong> Record your estimates before revealing predictions. Use your inferred \\(\\eta\\) to estimate \\(N_R\\) and retain only sufficiently slow flow points; \\(N_R \\le 0.01\\) is a conservative criterion here. As diagnostic runs, time a {#} mm glass ball in glycerol in the {#} mm tube and a {#} mm steel ball in water in the {#} mm tube, and send them to the worksheet as a third series. Do not include these automatically in the viscosity fit. Explain what evidence suggests a failure of the slow flow or terminal speed assumptions.":
  "<strong>Límites del modelo.</strong> Registra tus estimaciones antes de revelar las predicciones. Usa tu \\(\\eta\\) inferida para estimar \\(N_R\\) y conserva solo los puntos de flujo suficientemente lento; aquí \\(N_R \\le 0.01\\) es un criterio conservador. Como corridas de diagnóstico, mide el tiempo de una esfera de vidrio de {#} mm en glicerol en el tubo de {#} mm y de una esfera de acero de {#} mm en agua en el tubo de {#} mm, y envíalas a la hoja de trabajo como una tercera serie. No las incluyas automáticamente en el ajuste de la viscosidad. Explica qué evidencia sugiere una falla de las suposiciones de flujo lento o de rapidez terminal.",
"<strong>Mystery liquid.</strong> Measure a Mystery liquid with glass balls of diameters {#}, {#}, {#} and {#} mm in the {#} mm tube, and send it to the worksheet as a fourth series. Use the displayed density and infer \\(\\eta\\), then recheck \\(N_R\\). If the available ball sizes leave too few points at low \\(N_R\\), report that limitation rather than forcing a precise Stokes fit. Only when your \\(\\eta\\) is written down, untick Mystery: the demo then tells you the viscosity it used.":
  "<strong>Líquido misterioso.</strong> Mide un Líquido misterioso con esferas de vidrio de diámetros {#}, {#}, {#} y {#} mm en el tubo de {#} mm, y envíalo a la hoja de trabajo como una cuarta serie. Usa la densidad mostrada e infiere \\(\\eta\\), luego vuelve a comprobar \\(N_R\\). Si los tamaños de esfera disponibles dejan muy pocos puntos con \\(N_R\\) bajo, reporta esa limitación en lugar de forzar un ajuste de Stokes preciso. Solo cuando hayas anotado tu \\(\\eta\\), desmarca Misterioso: la demo te dice entonces la viscosidad que usó.",
"<strong>Using the virtual apparatus.</strong> Start with glass balls in glycerol and a tube of {#} mm inside diameter, with predictions hidden. Time the {#} m gate interval for ball diameters {#}, {#}, {#} and {#} mm, allowing each ball to pass both marks. Repeat the same series in a {#} mm tube. Faster playback may shorten the wait, but the recorded gate times remain physical seconds. Send each tube series to the worksheet before clearing, so each gets its own copy of the Data table. Calculate the wall correction and exclude points whose Reynolds number is too high yourself: the demo’s own fit uses uncorrected speeds and all matching rows. Use larger balls or steel in water only to check the limits of the model. Keep the same Mystery liquid for all four balls: ticking Mystery again makes a new liquid, which would mix incompatible measurements.":
  "<strong>Uso del aparato virtual.</strong> Empieza con esferas de vidrio en glicerol y un tubo de {#} mm de diámetro interior, con las predicciones ocultas. Mide el intervalo de compuertas de {#} m para diámetros de esfera de {#}, {#}, {#} y {#} mm, dejando que cada esfera pase ambas marcas. Repite la misma serie en un tubo de {#} mm. La reproducción más rápida puede acortar la espera, pero los tiempos de compuertas registrados siguen siendo segundos físicos. Envía la serie de cada tubo a la hoja de trabajo antes de borrar, para que cada una tenga su propia copia de la tabla de datos. Calcula tú mismo la corrección de pared y excluye los puntos cuyo número de Reynolds sea demasiado alto: el ajuste de la propia demo usa rapideces sin corregir y todas las filas que coinciden. Usa esferas más grandes o acero en agua solo para comprobar los límites del modelo. Mantén el mismo Líquido misterioso para las cuatro esferas: marcar Misterioso de nuevo crea un líquido nuevo, lo que mezclaría mediciones incompatibles.",
"<span>A</span>Series":
  "<span>A</span>Serie",
"<span>B</span>Liquid/ball":
  "<span>B</span>Líquido/esfera",
"<span>C</span>\\(\\rho_f\\) / \\(\\rho_b\\) (kg/m³)":
  "<span>C</span>\\(\\rho_f\\) / \\(\\rho_b\\) (kg/m³)",
"<span>I</span>\\(Kv\\) (m/s)":
  "<span>I</span>\\(Kv\\) (m/s)",
"Series, row {#}":
  "Serie, fila {#}",
"Liquid/ball, row {#}":
  "Líquido/esfera, fila {#}",
"ρ_f / ρ_b (kg/m³), row {#}":
  "ρ_f / ρ_b (kg/m³), fila {#}",
"D (mm), row {#}":
  "D (mm), fila {#}",
"d (mm), row {#}":
  "d (mm), fila {#}",
"v (m/s), row {#}":
  "v (m/s), fila {#}",
"K, row {#}":
  "K, fila {#}",
"Kv (m/s), row {#}":
  "Kv (m/s), fila {#}",
"N_R, row {#}":
  "N_R, fila {#}",
"Save separate slow flow, tube comparison, diagnostic and Mystery liquid runs. Record temperature; the virtual values represent {#} °C. State which rows you exclude and why.":
  "Guarda por separado las corridas de flujo lento, de comparación de tubos, de diagnóstico y del Líquido misterioso. Registra la temperatura; los valores virtuales corresponden a {#} °C. Indica qué filas excluyes y por qué.",
"Fit uncorrected \\(v\\) against \\(d^2\\) in each tube. Calculate the apparent viscosity and explain its tube dependence.":
  "Ajusta \\(v\\) sin corregir en función de \\(d^2\\) en cada tubo. Calcula la viscosidad aparente y explica su dependencia del tubo.",
"Fit \\(Kv\\) against \\(d^2\\) using the accepted points at low \\(N_R\\). Infer \\(\\eta\\) from the slope and compare the two tubes. Inspect residuals rather than judging agreement from the slope alone.":
  "Ajusta \\(Kv\\) en función de \\(d^2\\) usando los puntos aceptados con \\(N_R\\) bajo. Infiere \\(\\eta\\) a partir de la pendiente y compara los dos tubos. Examina los residuos en lugar de juzgar la concordancia solo por la pendiente.",
"Calculate \\(N_R\\) from your own inferred viscosity. If it invalidates the selected range, revise the fit or state that the approximation is inadequate.":
  "Calcula \\(N_R\\) a partir de tu propia viscosidad inferida. Si invalida el intervalo elegido, revisa el ajuste o indica que la aproximación no es adecuada.",
"Explain the results of the large ball and water diagnostics. Separate wall effects, drag at finite \\(N_R\\) and failure to reach terminal speed; a single anomalous time does not identify one cause uniquely.":
  "Explica los resultados de los diagnósticos con la esfera grande y con agua. Separa los efectos de pared, el arrastre a \\(N_R\\) finito y no alcanzar la rapidez terminal; un solo tiempo anómalo no identifica una causa de forma única.",
"Fit \\(Kv\\) against \\(d^2\\) for the Mystery liquid and infer its viscosity with an uncertainty. Check \\(N_R\\) for each row, then compare your value with the one the demo reveals.":
  "Ajusta \\(Kv\\) en función de \\(d^2\\) para el Líquido misterioso e infiere su viscosidad con una incertidumbre. Comprueba \\(N_R\\) en cada fila, y luego compara tu valor con el que revela la demo.",
"The virtual gate time rounds to {#} s. Ball and tube diameters are specified model settings; on a real bench measure them carefully because diameter is squared and also enters \\(K\\). For \\(v = s/t\\), include mark spacing and timing uncertainty. Propagate density, diameter and slope uncertainties into \\(\\eta\\) and assess the wall correction’s model limitations. Temperature can strongly affect real viscosity. A fit with no injected noise still has rounding and approximation error; repeating an identical simulated state does not create independent precision.":
  "El tiempo virtual de las compuertas se redondea a {#} s. Los diámetros de la esfera y del tubo son valores fijados del modelo; en una mesa real mídelos con cuidado porque el diámetro va al cuadrado y además entra en \\(K\\). Para \\(v = s/t\\), incluye la incertidumbre de la separación de las marcas y del tiempo. Propaga las incertidumbres de la densidad, del diámetro y de la pendiente a \\(\\eta\\) y evalúa las limitaciones del modelo de la corrección de pared. La temperatura puede afectar mucho la viscosidad real. Un ajuste sin ruido inyectado aún tiene error de redondeo y de aproximación; repetir un estado simulado idéntico no crea precisión independiente.",
"Why does a wider tube usually improve agreement with unbounded Stokes’ law?":
  "¿Por qué un tubo más ancho suele mejorar la concordancia con la ley de Stokes sin paredes?",
"Why can a straight looking graph still give a biased viscosity?":
  "¿Por qué una gráfica que se ve recta aún puede dar una viscosidad sesgada?",
"Why is a nylon ball in glycerol unsuitable for the same downward fall procedure?":
  "¿Por qué una esfera de nailon en glicerol no sirve para el mismo procedimiento de caída hacia abajo?",
"Why does multiplying speed by a wall factor not make an experiment at high \\(N_R\\) a Stokes experiment?":
  "¿Por qué multiplicar la rapidez por un factor de pared no convierte un experimento a \\(N_R\\) alto en un experimento de Stokes?",
"Prelab answers, settings and CSV files, raw and corrected fits with residuals, viscosity estimates and uncertainty, Reynolds number checks and excluded row reasoning, diagnostic observations, the Mystery liquid’s viscosity, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ajustes y archivos CSV, ajustes sin corregir y corregidos con residuos, estimaciones de la viscosidad e incertidumbre, comprobaciones del número de Reynolds y el razonamiento sobre las filas excluidas, observaciones de diagnóstico, la viscosidad del Líquido misterioso, y respuestas a las preguntas. Identifica los datos simulados.",
"Denominator of the wall correction, a polynomial in λ (a pure number)":
  "Denominador de la corrección de pared, un polinomio en λ (un número puro)",
"Drag coefficient":
  "Coeficiente de arrastre",
"Inside diameter of the tube":
  "Diámetro interior del tubo",
"Drag force":
  "Fuerza de arrastre",
"Wall correction factor":
  "Factor de corrección de pared",
"Reynolds number":
  "Número de Reynolds",
"Volume of the ball":
  "Volumen de la esfera",
"Slope of Kv against d²":
  "Pendiente de Kv en función de d²",
"Diameter of the ball":
  "Diámetro de la esfera",
"Viscosity of the liquid":
  "Viscosidad del líquido",
"Diameter ratio, d/D":
  "Razón de diámetros, d/D",
"Radius of the ball":
  "Radio de la esfera",
"Density of the ball":
  "Densidad de la esfera",
"Density of the liquid":
  "Densidad del líquido",
"Spacing of the marks":
  "Separación de las marcas",
"Time between the marks":
  "Tiempo entre las marcas",
"Speed of the ball between the marks":
  "Rapidez de la esfera entre las marcas",
"Speed the ball would have in an unbounded liquid":
  "Rapidez que tendría la esfera en un líquido sin paredes",
"Terminal speed":
  "Rapidez terminal",
"Falling Ball Viscometer":
  "Viscosímetro de esfera que cae"
});
