/* ws/gyroscope in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/gyroscope', {
"Wheel":
  "Rueda",
"Tilt (°)":
  "Inclinación (°)",
"Spin (rpm)":
  "Giro (rpm)",
"Gyroscope Precession | VirtualDemos":
  "Precesión del giroscopio | VirtualDemos",
"Gyroscope Precession":
  "Precesión del giroscopio",
"A wheel spins on a light axle whose far end rests in a cup on top of a post. Set the spin rate, the distance \\(d\\) from the pivot to the wheel’s center and the axle’s tilt at release, then release it. Put back returns it to the release position.":
  "Una rueda gira sobre un eje ligero cuyo extremo lejano descansa en una copa sobre un poste. Fija la rapidez de giro, la distancia \\(d\\) del pivote al centro de la rueda y la inclinación del eje al soltar, y luego suéltala. Regresar la devuelve a la posición de liberación.",
"A gate on the floor times each full turn of the axle round the post, to {#} s. It needs two passes, so the first period appears after the second full turn. Record reading stores the wheel, the start, the tilt, the spin, \\(d\\) and the last period \\(P\\); Export to worksheet sends the captured rows here, with \\(\\Omega = 2\\pi/P\\) and \\(1/\\omega_s\\) worked out for each row.":
  "Una compuerta en el piso mide el tiempo de cada vuelta completa del eje alrededor del poste, con resolución de {#} s. Necesita dos pasos, así que el primer periodo aparece después de la segunda vuelta completa. Registrar lectura guarda la rueda, el inicio, la inclinación, el giro, \\(d\\) y el último periodo \\(P\\); Exportar a la hoja envía aquí las filas capturadas, con \\(\\Omega = 2\\pi/P\\) y \\(1/\\omega_s\\) calculados para cada fila.",
"The wheel can be released from rest (it dips and wobbles first) or given a sideways push at exactly the steady precession rate (no dip, no wobble).":
  "La rueda se puede soltar desde el reposo (primero baja y se bambolea) o darle un empujón lateral exactamente a la rapidez de precesión estable (sin bajar, sin bambolearse).",
"While it runs, the spin rate and \\(d\\) can be changed and act on the moving gyroscope at once (the tilt at release and the steady start only apply at release). The strip marks each change with a dashed line and shows the steady tilt for the present angular momentum as a gold line, which the axle wobbles about. The gate starts timing afresh after a change. While it is held, a change puts it back at the release position, as before.":
  "Mientras corre, la rapidez de giro y \\(d\\) se pueden cambiar y actúan de inmediato sobre el giroscopio en movimiento (la inclinación al soltar y el inicio estable solo se aplican al soltar). La tira marca cada cambio con una línea discontinua y muestra como línea dorada la inclinación estable para el momento angular actual, alrededor de la cual se bambolea el eje. La compuerta vuelve a medir desde cero después de un cambio. Mientras está detenida, un cambio la regresa a la posición de liberación, como antes.",
"The Mystery wheel has the same mass and radius as the others but hides its moment of inertia. Turning it off shows its value; turning it on again makes a new mystery wheel, so finish its readings first. Blind hides the moments of inertia, \\(L\\), the predicted rate and the \\(I_s\\) from the demo’s own fit.":
  "La Rueda misteriosa tiene la misma masa y el mismo radio que las otras, pero oculta su momento de inercia. Desactivarla muestra su valor; activarla otra vez crea una rueda misteriosa nueva, así que termina primero sus lecturas. A ciegas oculta los momentos de inercia, \\(L\\), la rapidez predicha y el \\(I_s\\) del propio ajuste de la demo.",
"A rigid wheel of mass \\(M = 0.500\\ \\text{kg}\\) and radius \\(R = 0.060\\ \\text{m}\\) on a massless axle, a frictionless pivot, and a spin about the axle that stays constant. Solid disk \\(I_s = \\tfrac12 MR^2\\); the wheel with its mass near the rim \\(I_s = 0.905\\,MR^2\\); about a diameter, \\(I_s/2\\). \\(g = 9.81\\ \\text{m/s}^2\\).":
  "Una rueda rígida de masa \\(M = 0.500\\ \\text{kg}\\) y radio \\(R = 0.060\\ \\text{m}\\) sobre un eje sin masa, un pivote sin fricción y un giro alrededor del eje que se mantiene constante. Disco sólido \\(I_s = \\tfrac12 MR^2\\); la rueda con su masa cerca del borde \\(I_s = 0.905\\,MR^2\\); alrededor de un diámetro, \\(I_s/2\\). \\(g = 9.81\\ \\text{m/s}^2\\).",
"The motion is computed from the exact equations of a heavy symmetric top, so the dip and the wobble (nutation) after a release from rest are real, not added. There is no noise; the only rounding is the gate’s {#} s.":
  "El movimiento se calcula con las ecuaciones exactas de un trompo simétrico pesado, así que la bajada y el bamboleo (nutación) después de soltarla desde el reposo son reales, no agregados. No hay ruido; el único redondeo es el de {#} s de la compuerta.",
"Measure how the precession rate of a gyroscope depends on its spin and on the lever arm of its weight, and use the measurements to find the wheel’s moment of inertia about its axle. Find the moment of inertia of an unknown wheel. Test where the simple formula for the precession rate stops working.":
  "Mide cómo depende la rapidez de precesión de un giroscopio de su giro y del brazo de palanca de su peso, y usa las mediciones para encontrar el momento de inercia de la rueda alrededor de su eje. Encuentra el momento de inercia de una rueda desconocida. Pon a prueba dónde deja de funcionar la fórmula simple de la rapidez de precesión.",
"A wheel spinning at angular speed \\(\\omega_s\\) about its axle has angular momentum \\(L = I_s\\omega_s\\) along the axle. With the axle level and its end on a pivot, the weight \\(Mg\\) acting at distance \\(d\\) from the pivot exerts a torque of size \\(\\tau = Mgd\\), horizontal and perpendicular to the axle. Since":
  "Una rueda que gira con rapidez angular \\(\\omega_s\\) alrededor de su eje tiene un momento angular \\(L = I_s\\omega_s\\) a lo largo del eje. Con el eje horizontal y su extremo sobre un pivote, el peso \\(Mg\\) que actúa a una distancia \\(d\\) del pivote ejerce una torca de magnitud \\(\\tau = Mgd\\), horizontal y perpendicular al eje. Como",
"\\[\\vec\\tau = \\frac{d\\vec L}{dt},\\]":
  "\\[\\vec\\tau = \\frac{d\\vec L}{dt},\\]",
"in a short time \\(dt\\) the angular momentum gains a small piece \\(\\vec\\tau\\,dt\\) at right angles to itself. Its size does not change, but the axle turns about the post through the angle \\(d\\varphi = \\tau\\,dt/L\\). The precession rate is therefore":
  "en un tiempo corto \\(dt\\) el momento angular gana un pequeño trozo \\(\\vec\\tau\\,dt\\) perpendicular a sí mismo. Su magnitud no cambia, pero el eje gira alrededor del poste un ángulo \\(d\\varphi = \\tau\\,dt/L\\). La rapidez de precesión es por lo tanto",
"\\[\\Omega = \\frac{d\\varphi}{dt} = \\frac{\\tau}{L} = \\frac{Mgd}{I_s\\,\\omega_s},\\]":
  "\\[\\Omega = \\frac{d\\varphi}{dt} = \\frac{\\tau}{L} = \\frac{Mgd}{I_s\\,\\omega_s},\\]",
"and the time for one full turn round the post is \\(P = 2\\pi/\\Omega\\). A plot of \\(\\Omega\\) against \\(1/\\omega_s\\) at fixed \\(d\\) is a line through the origin with slope \\(Mgd/I_s\\); a plot of \\(\\Omega\\) against \\(d\\) at fixed spin is a line through the origin with slope \\(Mg/(I_s\\omega_s)\\). The spin rate is set in revolutions per minute: \\(\\omega_s = 2\\pi\\,(\\text{rpm})/60\\).":
  "y el tiempo de una vuelta completa alrededor del poste es \\(P = 2\\pi/\\Omega\\). Una gráfica de \\(\\Omega\\) en función de \\(1/\\omega_s\\) con \\(d\\) fija es una recta que pasa por el origen con pendiente \\(Mgd/I_s\\); una gráfica de \\(\\Omega\\) en función de \\(d\\) con giro fijo es una recta que pasa por el origen con pendiente \\(Mg/(I_s\\omega_s)\\). La rapidez de giro se fija en revoluciones por minuto: \\(\\omega_s = 2\\pi\\,(\\text{rpm})/60\\).",
"The formula describes steady precession with the axle level. For a level axle it is exact when the wheel starts with the right sideways speed. A gyroscope released from rest first dips and wobbles; with fast spin the dip is tiny and the average rate is very close to the formula, but with slow spin the wobble is large and the average rate falls below it.":
  "La fórmula describe la precesión estable con el eje horizontal. Para un eje horizontal es exacta cuando la rueda empieza con la rapidez lateral correcta. Un giroscopio soltado desde el reposo primero baja y se bambolea; con giro rápido la bajada es diminuta y la rapidez promedio es muy cercana a la fórmula, pero con giro lento el bamboleo es grande y la rapidez promedio queda por debajo de ella.",
"Sketch the wheel, the post and the pivot seen from above, with the axle pointing away from the post. Draw \\(\\vec L\\), the torque from the weight, and \\(d\\vec L\\) for a short time. Which way does the axle go round?":
  "Dibuja la rueda, el poste y el pivote vistos desde arriba, con el eje apuntando en dirección contraria al poste. Dibuja \\(\\vec L\\), la torca del peso y \\(d\\vec L\\) para un tiempo corto. ¿Hacia dónde gira el eje?",
"Predict what happens to the period \\(P\\) if the spin is doubled, and if \\(d\\) is doubled.":
  "Predice qué le pasa al periodo \\(P\\) si el giro se duplica, y si \\(d\\) se duplica.",
"For the solid disk (\\(M = 0.500\\ \\text{kg}\\), \\(R = 0.060\\ \\text{m}\\)) spinning at {#} rpm with \\(d = 0.10\\ \\text{m}\\), calculate \\(I_s\\), \\(L\\), \\(\\tau\\), \\(\\Omega\\) and \\(P\\).":
  "Para el disco sólido (\\(M = 0.500\\ \\text{kg}\\), \\(R = 0.060\\ \\text{m}\\)) girando a {#} rpm con \\(d = 0.10\\ \\text{m}\\), calcula \\(I_s\\), \\(L\\), \\(\\tau\\), \\(\\Omega\\) y \\(P\\).",
"What should happen with no spin at all? Explain in terms of \\(\\vec L\\) and \\(\\vec\\tau\\).":
  "¿Qué debería pasar sin ningún giro? Explícalo en términos de \\(\\vec L\\) y \\(\\vec\\tau\\).",
"On a real bench, a fast wheel stores a lot of energy. Keep fingers, hair and loose clothing away from the rim, spin it up only with the axle supported, and keep the space round the post clear so the axle can swing freely. Catch the axle before it falls off the pivot.":
  "En una mesa real, una rueda rápida almacena mucha energía. Mantén los dedos, el cabello y la ropa suelta lejos del borde, hazla girar solo con el eje apoyado, y mantén libre el espacio alrededor del poste para que el eje pueda girar libremente. Atrapa el eje antes de que se caiga del pivote.",
"<strong>Part {#}: spin scan, steady start.</strong> Use the solid disk with \\(d = 0.10\\ \\text{m}\\) and the axle level. Start it precessing at the steady rate, so there is no dip or wobble. Measure the period at {#}, {#}, {#}, {#}, {#} and {#} rpm. Wait for the gate to show a period for each spin before you capture it. Send these readings to the worksheet as one series, then clear the demo’s readings.":
  "<strong>Parte {#}: barrido de giro, inicio estable.</strong> Usa el disco sólido con \\(d = 0.10\\ \\text{m}\\) y el eje horizontal. Iníciala en precesión a la rapidez estable, para que no baje ni se bambolee. Mide el periodo a {#}, {#}, {#}, {#}, {#} y {#} rpm. Espera a que la compuerta muestre un periodo para cada giro antes de capturarlo. Envía estas lecturas a la hoja de trabajo como una serie, y luego borra las lecturas de la demo.",
"<strong>Part {#}: released from rest.</strong> Repeat the same six spins with the same wheel and \\(d\\), but release the wheel from rest. Watch the tilt trace under the picture for the dip and the wobble at each spin. Send this series, then clear.":
  "<strong>Parte {#}: soltada desde el reposo.</strong> Repite los mismos seis giros con la misma rueda y la misma \\(d\\), pero suelta la rueda desde el reposo. Observa en la traza de inclinación debajo de la imagen la bajada y el bamboleo en cada giro. Envía esta serie y luego borra.",
"<strong>Part {#}: lever arm scan.</strong> Go back to the steady start, solid disk, level axle, {#} rpm. Measure the period at \\(d\\) = {#}, {#}, {#}, {#}, {#} and {#} m. Send this series, then clear.":
  "<strong>Parte {#}: barrido del brazo de palanca.</strong> Regresa al inicio estable, disco sólido, eje horizontal, {#} rpm. Mide el periodo con \\(d\\) = {#}, {#}, {#}, {#}, {#} y {#} m. Envía esta serie y luego borra.",
"<strong>Part {#}: mystery wheel.</strong> Choose the Mystery wheel, steady start, level axle, \\(d = 0.10\\ \\text{m}\\). Measure the period at five or more spins between {#} and {#} rpm. Send this series before you turn the mystery wheel off; then turn it off and note the value it shows.":
  "<strong>Parte {#}: rueda misteriosa.</strong> Elige la Rueda misteriosa, inicio estable, eje horizontal, \\(d = 0.10\\ \\text{m}\\). Mide el periodo en cinco o más giros entre {#} y {#} rpm. Envía esta serie antes de desactivar la rueda misteriosa; luego desactívala y anota el valor que muestra.",
"<strong>Part {#}: no spin.</strong> Set the spin to zero and release it. Describe what happens.":
  "<strong>Parte {#}: sin giro.</strong> Pon el giro en cero y suéltala. Describe lo que pasa.",
"<span>B</span>Wheel":
  "<span>B</span>Rueda",
"<span>C</span>Start":
  "<span>C</span>Inicio",
"<span>D</span>Tilt (°)":
  "<span>D</span>Inclinación (°)",
"<span>E</span>Spin (rpm)":
  "<span>E</span>Giro (rpm)",
"<span>H</span>\\(\\Omega\\) (rad/s)":
  "<span>H</span>\\(\\Omega\\) (rad/s)",
"<span>I</span>\\(1/\\omega_s\\) (s)":
  "<span>I</span>\\(1/\\omega_s\\) (s)",
"Wheel, row {#}":
  "Rueda, fila {#}",
"Start, row {#}":
  "Inicio, fila {#}",
"Tilt (°), row {#}":
  "Inclinación (°), fila {#}",
"Spin (rpm), row {#}":
  "Giro (rpm), fila {#}",
"d (m), row {#}":
  "d (m), fila {#}",
"P (s), row {#}":
  "P (s), fila {#}",
"Ω (rad/s), row {#}":
  "Ω (rad/s), fila {#}",
"{#}/ω_s (s), row {#}":
  "{#}/ω_s (s), fila {#}",
"Keep each part in its own copy of the table, labeled with the part. For Part {#} write the value the mystery wheel showed when you turned it off in the table’s notes.":
  "Mantén cada parte en su propia copia de la tabla, etiquetada con la parte. Para la Parte {#} escribe en las notas de la tabla el valor que mostró la rueda misteriosa cuando la desactivaste.",
"Part {#}: plot \\(\\Omega\\) against \\(1/\\omega_s\\) and fit a line with a free intercept. Is the intercept zero within its uncertainty? Find \\(I_s\\) from the slope and compare it with \\(\\tfrac12 MR^2\\).":
  "Parte {#}: grafica \\(\\Omega\\) en función de \\(1/\\omega_s\\) y ajusta una recta con ordenada al origen libre. ¿Es la ordenada al origen cero dentro de su incertidumbre? Encuentra \\(I_s\\) a partir de la pendiente y compáralo con \\(\\tfrac12 MR^2\\).",
"Part {#}: add the released from rest points to the same plot (or fit them separately). At which spins do they agree with the Part {#} line, and at which do they fall below it? Use the tilt traces to explain why.":
  "Parte {#}: agrega a la misma gráfica los puntos soltados desde el reposo (o ajústalos por separado). ¿En qué giros concuerdan con la recta de la Parte {#}, y en cuáles quedan por debajo de ella? Usa las trazas de inclinación para explicar por qué.",
"Part {#}: plot \\(\\Omega\\) against \\(d\\) and fit a line. Find \\(I_s\\) from the slope and compare it with your Part {#} result.":
  "Parte {#}: grafica \\(\\Omega\\) en función de \\(d\\) y ajusta una recta. Encuentra \\(I_s\\) a partir de la pendiente y compáralo con tu resultado de la Parte {#}.",
"Part {#}: find the mystery wheel’s \\(I_s\\) and the ratio \\(I_s/(MR^2)\\), with uncertainties. Where would its mass have to be to give that ratio? Compare with the value shown when you turned it off.":
  "Parte {#}: encuentra el \\(I_s\\) de la rueda misteriosa y la razón \\(I_s/(MR^2)\\), con incertidumbres. ¿Dónde tendría que estar su masa para dar esa razón? Compáralo con el valor que se mostró cuando la desactivaste.",
"The gate rounds each period to {#} s, so the largest error in \\(P\\) is {#} s and the fractional error in \\(\\Omega\\) is at most \\(0.005\\ \\text{s}/P\\). Which of your readings is affected most? Use the standard error of the fitted slope to give an uncertainty for \\(I_s\\). On a real bench you would also need the spin rate (it slowly falls through bearing friction), \\(d\\), the wheel’s mass and the pivot friction.":
  "La compuerta redondea cada periodo a {#} s, así que el mayor error en \\(P\\) es de {#} s y el error fraccionario en \\(\\Omega\\) es a lo más \\(0.005\\ \\text{s}/P\\). ¿Cuál de tus lecturas se ve más afectada? Usa el error estándar de la pendiente ajustada para dar una incertidumbre de \\(I_s\\). En una mesa real también necesitarías la rapidez de giro (que baja lentamente por la fricción de los rodamientos), \\(d\\), la masa de la rueda y la fricción del pivote.",
"The spinning wheel does not fall. What holds it up? Find the vertical force from the pivot during steady precession.":
  "La rueda que gira no se cae. ¿Qué la sostiene? Encuentra la fuerza vertical del pivote durante la precesión estable.",
"The wheel’s center moves in a circle of radius \\(d\\) round the post. What supplies the force for this, and how big is it at {#} rpm with \\(d = 0.10\\ \\text{m}\\)?":
  "El centro de la rueda se mueve en un círculo de radio \\(d\\) alrededor del poste. ¿Qué proporciona la fuerza para esto, y qué tan grande es a {#} rpm con \\(d = 0.10\\ \\text{m}\\)?",
"What happens to the direction of precession if the spin is reversed? Explain with the vectors.":
  "¿Qué le pasa al sentido de la precesión si se invierte el giro? Explícalo con los vectores.",
"Why is the steady start needed to test the formula at low spin, while at high spin a release from rest is almost as good?":
  "¿Por qué se necesita el inicio estable para poner a prueba la fórmula con giro lento, mientras que con giro rápido soltarla desde el reposo es casi igual de bueno?",
"Prelab answers, the four data tables, the fits with their residuals, \\(I_s\\) from Parts {#} and {#} compared with \\(\\tfrac12 MR^2\\), the mystery wheel’s \\(I_s\\) and \\(I_s/(MR^2)\\) with uncertainties, your Part {#} and Part {#} observations, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las cuatro tablas de datos, los ajustes con sus residuos, \\(I_s\\) de las Partes {#} y {#} comparado con \\(\\tfrac12 MR^2\\), el \\(I_s\\) y el \\(I_s/(MR^2)\\) de la rueda misteriosa con incertidumbres, tus observaciones de las Partes {#} y {#}, y las respuestas a las preguntas. Identifica los datos simulados.",
"Moment of inertia about the axle":
  "Momento de inercia alrededor del eje",
"Angular momentum of the spin":
  "Momento angular del giro",
"Mass of the wheel":
  "Masa de la rueda",
"Precession rate, {#}π/P":
  "Rapidez de precesión, {#}π/P",
"Precession period":
  "Periodo de precesión",
"Radius of the wheel":
  "Radio de la rueda",
"Distance from the pivot to the wheel's center":
  "Distancia del pivote al centro de la rueda",
"Spin rate of the wheel":
  "Rapidez de giro de la rueda",
"Angle the axle turns about the post":
  "Ángulo que gira el eje alrededor del poste",
"Torque of the weight about the pivot, Mgd":
  "Torca del peso alrededor del pivote, Mgd"
});
