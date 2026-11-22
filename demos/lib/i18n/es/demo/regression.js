/* demo/regression in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'demo/regression', {
"third exam score":
  "calificación del tercer examen",
"points":
  "puntos",
"point":
  "punto",
"final exam score":
  "calificación del examen final",
"points per point":
  "puntos por punto",
"{n} points: {yn} against {xn}.":
  "{n} puntos: {yn} contra {xn}.",
"Your line has a sum of squares of {v}.":
  "Tu recta tiene una suma de cuadrados de {v}.",
"Play runs the shuffle test. Drag points to move them; Add and Remove change what a click does.":
  "Reproducir hace la prueba de barajado. Arrastra los puntos para moverlos; Agregar y Quitar cambian lo que hace un clic.",
"Eleven statistics students' scores on the third exam (out of {#}) and the final exam (out of {#}), from the book. Your violet line starts flat at the mean final score: its squares add up to Σ(y − ȳ)², and the least squares squares add up to less. Drag your line to beat them; you cannot. The point ({#}, {#}) sits more than 2s from the line: select it to see how much the line depends on it.":
  "Calificaciones de once estudiantes de estadística en el tercer examen (sobre {#}) y en el examen final (sobre {#}), tomadas del libro. Tu recta violeta empieza horizontal en la calificación final media: sus cuadrados suman Σ(y − ȳ)², y los cuadrados de mínimos cuadrados suman menos. Arrastra tu recta para ganarles; no podrás. El punto ({#}, {#}) está a más de 2s de la recta: selecciónalo para ver cuánto depende la recta de él.",
"Data from":
  "Datos de",
"§{#} The Regression Equation; the same scores are tested in §{#}, used to predict in §{#} and checked for outliers in §{#}":
  "§{#} The Regression Equation; las mismas calificaciones se prueban en §{#}, se usan para predecir en §{#} y se revisan en busca de valores atípicos en §{#}",
"The draw sets the shuffles. The book's data never change.":
  "El sorteo fija los barajados. Los datos del libro nunca cambian.",
"Points used, n":
  "Puntos usados, n",
"Least squares line":
  "Recta de mínimos cuadrados",
"Needs at least three points, not all at the same x.":
  "Se necesitan al menos tres puntos, no todos en la misma x.",
"Slope b":
  "Pendiente b",
"Intercept a":
  "Ordenada al origen a",
"s, standard error of estimate":
  "s, error estándar de la estimación",
"Sum of squares, least squares":
  "Suma de cuadrados, mínimos cuadrados",
"Sum of squares, your line":
  "Suma de cuadrados, tu recta",
"Σ(y − ȳ)², your line flat at ȳ":
  "Σ(y − ȳ)², tu recta horizontal en ȳ",
"Slope in context":
  "La pendiente en contexto",
"up":
  "sube",
"For each {#} {xu} increase in {xn}, the predicted {yn} goes {dir} by {b} {yu}.":
  "Por cada aumento de {#} {xu} en {xn}, el valor predicho de {yn} {dir} {b} {yu}.",
"At {xn} = {#}, the predicted {yn} is {a} {yu}.":
  "Con {xn} = {#}, el valor predicho de {yn} es {a} {yu}.",
"x = {#} is outside the data ({lo} to {hi}), so the intercept is an extrapolation: it fixes the line's height and may mean nothing by itself.":
  "x = {#} está fuera de los datos ({lo} a {hi}), así que la ordenada al origen es una extrapolación: fija la altura de la recta y puede no significar nada por sí sola.",
"Intercept in context":
  "La ordenada al origen en contexto",
"t, df = {df}":
  "t, gl = {df}",
"p value, t test (two sided)":
  "valor p, prueba t (bilateral)",
"Critical value r* ({#} %, df = {df})":
  "Valor crítico r* ({#} %, gl = {df})",
"Shuffle p value":
  "Valor p del barajado",
"press Play":
  "presiona Reproducir",
"Is r significant?":
  "¿Es r significativa?",
"Yes: |r| = {r} is larger than r* = {c}, and p {p} is below {#}. The data show a linear relationship.":
  "Sí: |r| = {r} es mayor que r* = {c}, y p {p} es menor que {#}. Los datos muestran una relación lineal.",
"Prediction ŷ at x = {x}":
  "Predicción ŷ en x = {x}",
"Inside or outside the data?":
  "¿Dentro o fuera de los datos?",
"Inside the data ({lo} to {hi}): an interpolation, as reliable as the fit.":
  "Dentro de los datos ({lo} a {hi}): una interpolación, tan confiable como el ajuste.",
"Outliers, |y − ŷ| ≥ 2s = {v}":
  "Valores atípicos, |y − ŷ| ≥ 2s = {v}",
"Click a point to select it and see the line without it.":
  "Haz clic en un punto para seleccionarlo y ver la recta sin él.",
"Remove selected point":
  "Quitar el punto seleccionado",
"range of the data":
  "rango de los datos",
"Third exam score (points)":
  "Calificación del tercer examen (puntos)",
"Final exam score (points)":
  "Calificación del examen final (puntos)",
"Your line: {v} ({k} times as much)":
  "Tu recta: {v} ({k} veces más)",
"Least squares: {v}":
  "Mínimos cuadrados: {v}",
"Total area of the squares":
  "Área total de los cuadrados",
"Least squares: {#}":
  "Mínimos cuadrados: {#}",
"Your line: {#} ({#} times as much)":
  "Tu recta: {#} ({#} veces más)",
"Residuals y − ŷ":
  "Residuos y − ŷ",
"Residuals y − ŷ (points)":
  "Residuos y − ŷ (puntos)",
"Shuffle test: r of shuffled data":
  "Prueba de barajado: r de los datos barajados",
"Press Play to shuffle":
  "Presiona Reproducir para barajar",
"Linear Regression and Correlation":
  "Regresión lineal y correlación",
"<a>Statistical inference</a>":
  "<a>Inferencia estadística</a>",
"<a><span>←</span> <span>Chi-Square Tests</span></a><a><span>One Way ANOVA</span> <span>→</span></a>":
  "<a><span>←</span> <span>Pruebas de ji cuadrada</span></a><a><span>ANOVA de un factor</span> <span>→</span></a>",
"Drag the points of a scatter plot and watch the least squares line follow. Each residual is drawn as a square: the least squares line is the one line whose squares add up to the smallest total area, so drag your own line and try to beat it. Read r, r², s and the slope and intercept with their uncertainties, test r with the t test, the book's critical value and a shuffle test, predict inside and outside the data, and find the outliers that pull the line.":
  "Arrastra los puntos de un diagrama de dispersión y observa cómo los sigue la recta de mínimos cuadrados. Cada residuo se dibuja como un cuadrado: la recta de mínimos cuadrados es la única cuyos cuadrados suman el área total más pequeña, así que arrastra tu propia recta e intenta ganarle. Lee r, r², s y la pendiente y la ordenada al origen con sus incertidumbres, prueba r con la prueba t, el valor crítico del libro y una prueba de barajado, predice dentro y fuera de los datos, y encuentra los valores atípicos que jalan la recta.",
"Shuffle the y values among the x values again and again and build up the histogram of r":
  "Baraja los valores de y entre los valores de x una y otra vez y forma el histograma de r",
"Put the points, your line, the prediction and the shuffle test back the way this setup started":
  "Regresa los puntos, tu recta, la predicción y la prueba de barajado a como empezó este arreglo",
"Points":
  "Puntos",
"Move":
  "Mover",
"Add":
  "Agregar",
"x is":
  "x es",
"unit":
  "unidad",
"y is":
  "y es",
"Scatter plot with the least squares line, the residual squares and your own line. Drag a point to move it; drag the round handles or your line to move your line; drag the diamond on the x axis to predict. Plus and minus zoom; N selects the next point, the arrows move it and Delete removes it.":
  "Diagrama de dispersión con la recta de mínimos cuadrados, los cuadrados de los residuos y tu propia recta. Arrastra un punto para moverlo; arrastra las manijas redondas o tu recta para moverla; arrastra el rombo del eje x para predecir. Más y menos hacen zoom; N selecciona el siguiente punto, las flechas lo mueven y Suprimir lo quita.",
"{#} points: final exam score against third exam score.":
  "{#} puntos: calificación del examen final contra calificación del tercer examen.",
"Your line has a sum of squares of {#}.":
  "Tu recta tiene una suma de cuadrados de {#}.",
"Residual plot: each point's residual y minus y hat against x, with lines at plus and minus two s. Click a point to select it.":
  "Gráfica de residuos: el residuo de cada punto, y menos y gorro, contra x, con líneas en más y menos dos s. Haz clic en un punto para seleccionarlo.",
"Shuffle test: a histogram of r from the shuffled data, with the r of the real data and the {#} percent critical values marked.":
  "Prueba de barajado: un histograma de r de los datos barajados, con la r de los datos reales y los valores críticos del {#} por ciento marcados.",
"Squares":
  "Cuadrados",
"<span>Squares</span>":
  "<span>Cuadrados</span>",
"Squares to draw":
  "Cuadrados que se dibujan",
"Least squares":
  "Mínimos cuadrados",
"Your line":
  "Tu recta",
"Your line flat at ȳ":
  "Tu recta horizontal en ȳ",
"<span>Drag the two round handles of <span></span>your line, or the line itself.</span>":
  "<span>Arrastra las dos manijas redondas de <span></span>tu recta, o la recta misma.</span>",
"Predict":
  "Predecir",
"<span>Predict</span>":
  "<span>Predecir</span>",
"Or drag the diamond on the x axis.":
  "O arrastra el rombo del eje x.",
"<span>Points</span>":
  "<span>Puntos</span>",
"Put all points back":
  "Regresar todos los puntos",
"Shuffle test":
  "Prueba de barajado",
"<span>Shuffle test</span>":
  "<span>Prueba de barajado</span>",
"Shuffles":
  "Barajados",
"Draw":
  "Sorteo",
"New draw":
  "Nuevo sorteo",
"The view":
  "La vista",
"<span>The view</span>":
  "<span>La vista</span>",
"Reset view":
  "Restablecer la vista",
"Divider between the scatter plot and the lower graphs":
  "Divisor entre el diagrama de dispersión y las gráficas de abajo",
"For each {#} point increase in third exam score, the predicted final exam score goes up by {#} points.":
  "Por cada aumento de {#} punto en calificación del tercer examen, el valor predicho de calificación del examen final sube {#} puntos.",
"At third exam score = {#}, the predicted final exam score is −{#} points. x = {#} is outside the data ({#} to {#}), so the intercept is an extrapolation: it fixes the line's height and may mean nothing by itself.":
  "Con calificación del tercer examen = {#}, el valor predicho de calificación del examen final es −{#} puntos. x = {#} está fuera de los datos ({#} a {#}), así que la ordenada al origen es una extrapolación: fija la altura de la recta y puede no significar nada por sí sola.",
"t, df = {#}":
  "t, gl = {#}",
"Critical value r* ({#} %, df = {#})":
  "Valor crítico r* ({#} %, gl = {#})",
"Yes: |r| = {#} is larger than r* = {#}, and p = {#} is below {#}. The data show a linear relationship.":
  "Sí: |r| = {#} es mayor que r* = {#}, y p = {#} es menor que {#}. Los datos muestran una relación lineal.",
"Prediction ŷ at x = {#}":
  "Predicción ŷ en x = {#}",
"Inside the data ({#} to {#}): an interpolation, as reliable as the fit.":
  "Dentro de los datos ({#} a {#}): una interpolación, tan confiable como el ajuste.",
"Outliers, |y − ŷ| ≥ 2s = {#}":
  "Valores atípicos, |y − ŷ| ≥ 2s = {#}",
"({#}, {#}): residual {#}":
  "({#}, {#}): residuo {#}",
"<span>Show fewer</span>":
  "<span>Ver menos</span>",
"<span>From the book</span>":
  "<span>Del libro</span>",
"Third exam and final exam":
  "Tercer examen y examen final",
"Dive depth and dive time":
  "Profundidad y tiempo de buceo",
"Ice cream cones and temperature":
  "Conos de helado y temperatura",
"Consumer Price Index, {#} to {#}":
  "Índice de precios al consumidor, {#} a {#}",
"Olympic {#} m freestyle times":
  "Tiempos olímpicos de {#} m libre",
"<span>Physics lab (simulated)</span>":
  "<span>Laboratorio de física (simulado)</span>",
"Spring: stretch against mass":
  "Resorte: estiramiento contra masa",
"Pendulum: T² against length":
  "Péndulo: T² contra longitud",
"Ohm's law: V against I":
  "Ley de Ohm: V contra I",
"Pendulum: period against bob mass":
  "Péndulo: periodo contra masa de la lenteja",
"<span>Your data</span>":
  "<span>Tus datos</span>",
"Type your own":
  "Escribe tus datos",
"Data and residuals":
  "Datos y residuos",
"Click a row to select that point. Red: an outlier by the book's rule, |y − ŷ| ≥ 2s.":
  "Haz clic en una fila para seleccionar ese punto. En rojo: un valor atípico según la regla del libro, |y − ŷ| ≥ 2s.",
"Data set":
  "Conjunto de datos",
"Slope":
  "Pendiente",
"Formulas":
  "Fórmulas",
"<span>Blind: hide the least squares line and its numbers, to fit your own line by eye first</span>":
  "<span>A ciegas: oculta la recta de mínimos cuadrados y sus números, para ajustar primero tu propia recta a ojo</span>",
"What you can type":
  "Qué puedes escribir",
"Type your own: one reading per line, x then y, separated by a comma, a space or a tab. A line that starts with # is a note. Up to {#} points.":
  "Escribe tus datos: una lectura por renglón, x y luego y, separadas por una coma, un espacio o un tabulador. Un renglón que empieza con # es una nota. Hasta {#} puntos.",
"How it works":
  "Cómo funciona",
"The least squares line ŷ = a + bx is the line with the smallest sum of squared vertical residuals, SSE = Σ(y − ŷ)². Each residual is drawn as a square whose side is the residual, so SSE is their total area (in the plot's units squared, on the plot's scales). The intercept is always free: the line is never forced through the origin.":
  "La recta de mínimos cuadrados ŷ = a + bx es la recta con la menor suma de residuos verticales al cuadrado, SSE = Σ(y − ŷ)². Cada residuo se dibuja como un cuadrado cuyo lado es el residuo, así que SSE es su área total (en las unidades de la gráfica al cuadrado, en las escalas de la gráfica). La ordenada al origen siempre es libre: la recta nunca se obliga a pasar por el origen.",
"Every number comes from demos/lib/vdstats.js: r, r², s = √(SSE/(n − {#})), the standard errors of the slope and intercept, and the t test for r with n − {#} degrees of freedom (two sided). The {#} % critical value of r is computed from the t distribution as t*/√(t*² + df); it agrees with the table of {#} % critical values in OpenStax Introductory Statistics 2e (end of chapter {#}) to the three decimals printed there, except at df = {#}, where the table prints {#} and the exact value is {#}. The book calls r significant when |r| is larger than the critical value.":
  "Cada número sale de demos/lib/vdstats.js: r, r², s = √(SSE/(n − {#})), los errores estándar de la pendiente y de la ordenada al origen, y la prueba t para r con n − {#} grados de libertad (bilateral). El valor crítico de r al {#} % se calcula con la distribución t como t*/√(t*² + gl); coincide con la tabla de valores críticos al {#} % de OpenStax Introductory Statistics 2e (final del capítulo {#}) en los tres decimales impresos ahí, excepto en gl = {#}, donde la tabla imprime {#} y el valor exacto es {#}. El libro dice que r es significativa cuando |r| es mayor que el valor crítico.",
"The shuffle test (a permutation test) is not in the book. It keeps the x values and shuffles the y values among them, so any link between x and y is broken on purpose, and computes r for each shuffle. The shuffle p value is the share of shuffles with |r| at least as large as the real |r|. It needs no assumption of normal residuals, and for well behaved data it lands close to the t test's p value. Shuffles and simulated data are seeded: the same Draw gives the same numbers every time.":
  "La prueba de barajado (una prueba de permutación) no está en el libro. Conserva los valores de x y baraja los valores de y entre ellos, de modo que cualquier relación entre x y y se rompe a propósito, y calcula r para cada barajado. El valor p del barajado es la fracción de barajados con |r| al menos tan grande como la |r| real. No necesita suponer residuos normales, y con datos bien portados queda cerca del valor p de la prueba t. Los barajados y los datos simulados tienen semilla: el mismo Sorteo da los mismos números cada vez.",
"Outliers follow the book's rule (§{#}): a point whose residual is at least 2s in size. The dashed lines beside the least squares line are ŷ ± 2s. A point is influential when removing it changes the line a lot; select a point to see the line without it.":
  "Los valores atípicos siguen la regla del libro (§{#}): un punto cuyo residuo mide al menos 2s. Las líneas punteadas junto a la recta de mínimos cuadrados son ŷ ± 2s. Un punto es influyente cuando quitarlo cambia mucho la recta; selecciona un punto para ver la recta sin él.",
"Simulated physics data are made by adding random normal errors to the ideal law: spring k = {#} N/m, g = {#} m/s² (constants.js), R = {#} Ω, and pendulum periods with timing errors of {#} s. They are labeled simulated and are not measurements.":
  "Los datos de física simulados se hacen sumando errores normales aleatorios a la ley ideal: resorte k = {#} N/m, g = {#} m/s² (constants.js), R = {#} Ω, y periodos del péndulo con errores de cronometraje de {#} s. Están marcados como simulados y no son mediciones.",
"<span>Feedback</span>":
  "<span>Comentarios</span>",
"The least squares line is y hat = {a} + {b} x, with r = {r} and s = {s}.":
  "La recta de mínimos cuadrados es y gorro = {a} + {b} x, con r = {r} y s = {s}.",
"{k} outliers are at least 2s from the line.":
  "{k} valores atípicos están al menos a 2s de la recta.",
"The least squares line is y hat = −{#} + {#} x, with r = {#} and s = {#}.":
  "La recta de mínimos cuadrados es y gorro = −{#} + {#} x, con r = {#} y s = {#}.",
"{#} outliers are at least 2s from the line.":
  "{#} valores atípicos están al menos a 2s de la recta.",
"The book's maximum dive times for six depths. The relationship is strong and negative. Predict the dive time at {#} ft: the diamond is outside the data, so that prediction is an extrapolation.":
  "Los tiempos máximos de buceo del libro para seis profundidades. La relación es fuerte y negativa. Predice el tiempo de buceo a {#} ft: el rombo está fuera de los datos, así que esa predicción es una extrapolación.",
"§{#} The Regression Equation (Try It: SCUBA divers)":
  "§{#} The Regression Equation (Try It: buzos con equipo SCUBA)",
"depth":
  "profundidad",
"maximum dive time":
  "tiempo máximo de buceo",
"min per ft":
  "min por ft",
"Outside the data ({lo} to {hi}): an extrapolation. Nothing in the data says the line still holds there.":
  "Fuera de los datos ({lo} a {hi}): una extrapolación. Nada en los datos dice que la recta siga valiendo ahí.",
"down":
  "baja",
"For each {#} ft increase in depth, the predicted maximum dive time goes down by {#} min.":
  "Por cada aumento de {#} ft en profundidad, el valor predicho de tiempo máximo de buceo baja {#} min.",
"At depth = {#}, the predicted maximum dive time is {#} min. x = {#} is outside the data ({#} to {#}), so the intercept is an extrapolation: it fixes the line's height and may mean nothing by itself.":
  "Con profundidad = {#}, el valor predicho de tiempo máximo de buceo es {#} min. x = {#} está fuera de los datos ({#} a {#}), así que la ordenada al origen es una extrapolación: fija la altura de la recta y puede no significar nada por sí sola.",
"Outside the data ({#} to {#}): an extrapolation. Nothing in the data says the line still holds there.":
  "Fuera de los datos ({#} a {#}): una extrapolación. Nada en los datos dice que la recta siga valiendo ahí.",
"extrapolation":
  "extrapolación",
"ŷ = {#} (extrapolation)":
  "ŷ = {#} (extrapolación)",
"Depth (ft)":
  "Profundidad (ft)",
"Maximum dive time (min)":
  "Tiempo máximo de buceo (min)",
"Residuals y − ŷ (min)":
  "Residuos y − ŷ (min)",
"Nine random days from the book: the noon temperature and the number of ice cream cones sold. A strong positive r, a random looking residual plot: a line is a reasonable model inside the data. Below about {#} °F the line predicts fewer than zero cones, which shows why extrapolation is risky.":
  "Nueve días al azar del libro: la temperatura al mediodía y el número de conos de helado vendidos. Una r positiva y fuerte y una gráfica de residuos que parece aleatoria: una recta es un modelo razonable dentro de los datos. Por debajo de unos {#} °F la recta predice menos de cero conos, lo que muestra por qué extrapolar es arriesgado.",
"§{#} The Regression Equation (example: ice cream cones sold and the noon temperature)":
  "§{#} The Regression Equation (ejemplo: conos de helado vendidos y temperatura al mediodía)",
"noon temperature":
  "temperatura al mediodía",
"ice cream cones sold":
  "conos de helado vendidos",
"cones":
  "conos",
"cones per °F":
  "conos por °F",
"of {n}":
  "de {n}",
"For each {#} °F increase in noon temperature, the predicted ice cream cones sold goes up by {#} cones.":
  "Por cada aumento de {#} °F en temperatura al mediodía, el valor predicho de conos de helado vendidos sube {#} conos.",
"At noon temperature = {#}, the predicted ice cream cones sold is −{#} cones. x = {#} is outside the data ({#} to {#}), so the intercept is an extrapolation: it fixes the line's height and may mean nothing by itself.":
  "Con temperatura al mediodía = {#}, el valor predicho de conos de helado vendidos es −{#} conos. x = {#} está fuera de los datos ({#} a {#}), así que la ordenada al origen es una extrapolación: fija la altura de la recta y puede no significar nada por sí sola.",
"Yes: |r| = {#} is larger than r* = {#}, and p < {#} is below {#}. The data show a linear relationship.":
  "Sí: |r| = {#} es mayor que r* = {#}, y p < {#} es menor que {#}. Los datos muestran una relación lineal.",
"Noon temperature (°F)":
  "Temperatura al mediodía (°F)",
"Ice cream cones sold (cones)":
  "Conos de helado vendidos (conos)",
"Residuals y − ŷ (cones)":
  "Residuos y − ŷ (conos)",
"{#} points: ice cream cones sold against noon temperature.":
  "{#} puntos: conos de helado vendidos contra temperatura al mediodía.",
"The book's Consumer Price Index from {#} to {#}. r is large and significant and no point is 2s from the line, yet the residual plot is a U shape: the prices grow along a curve, not a line. Look at the residual plot before you trust a line.":
  "El índice de precios al consumidor del libro de {#} a {#}. r es grande y significativa y ningún punto está a 2s de la recta, pero la gráfica de residuos tiene forma de U: los precios crecen siguiendo una curva, no una recta. Mira la gráfica de residuos antes de confiar en una recta.",
"§{#} Outliers (example: the Consumer Price Index, {#} to {#})":
  "§{#} Outliers (ejemplo: el índice de precios al consumidor, {#} a {#})",
"year":
  "año",
"consumer price index":
  "índice de precios al consumidor",
"per year":
  "por año",
"For each {#} year increase in year, the predicted consumer price index goes up by {#}.":
  "Por cada aumento de {#} year en año, el valor predicho de índice de precios al consumidor sube {#}.",
"At year = {#}, the predicted consumer price index is −{#}. x = {#} is outside the data ({#} to {#}), so the intercept is an extrapolation: it fixes the line's height and may mean nothing by itself.":
  "Con año = {#}, el valor predicho de índice de precios al consumidor es −{#}. x = {#} está fuera de los datos ({#} a {#}), así que la ordenada al origen es una extrapolación: fija la altura de la recta y puede no significar nada por sí sola.",
"Year":
  "Año",
"Consumer price index":
  "Índice de precios al consumidor",
"Gold medal times in the women's {#} m freestyle, every other Summer Olympics, from the book's homework. The times fall fast at first and then level off. Drag the diamond to the future: far enough out, the line predicts a time below zero.":
  "Tiempos de medalla de oro en los {#} m libre femenil, en Juegos Olímpicos de verano alternos, de la tarea del libro. Los tiempos bajan rápido al principio y luego se estabilizan. Arrastra el rombo hacia el futuro: lo bastante lejos, la recta predice un tiempo menor que cero.",
"§{#} Prediction (homework: gold medal times in the women's {#} m freestyle)":
  "§{#} Prediction (tarea: tiempos de medalla de oro en los {#} m libre femenil)",
"winning time":
  "tiempo ganador",
"s per year":
  "s por año",
"For each {#} year increase in year, the predicted winning time goes down by {#} s.":
  "Por cada aumento de {#} year en año, el valor predicho de tiempo ganador baja {#} s.",
"At year = {#}, the predicted winning time is {#} s. x = {#} is outside the data ({#} to {#}), so the intercept is an extrapolation: it fixes the line's height and may mean nothing by itself.":
  "Con año = {#}, el valor predicho de tiempo ganador es {#} s. x = {#} está fuera de los datos ({#} a {#}), así que la ordenada al origen es una extrapolación: fija la altura de la recta y puede no significar nada por sí sola.",
"Winning time (s)":
  "Tiempo ganador (s)",
"Residuals y − ŷ (s)":
  "Residuos y − ŷ (s)",
"Simulated: masses from {#} g to {#} g hung on a spring with k = {#} N/m, each stretch read to the millimeter with a random error of about {#} mm. The slope is g/k, so k = g/b. Is the intercept within its uncertainty of zero, as Hooke's law says it should be?":
  "Simulado: masas de {#} g a {#} g colgadas de un resorte con k = {#} N/m, cada estiramiento leído al milímetro con un error aleatorio de unos {#} mm. La pendiente es g/k, así que k = g/b. ¿Está la ordenada al origen dentro de su incertidumbre de cero, como dice la ley de Hooke?",
"Simulated data, not measurements: the ideal law plus seeded random errors (Draw {s}).":
  "Datos simulados, no mediciones: la ley ideal más errores aleatorios con semilla (Sorteo {s}).",
"New draw makes a new set of simulated readings and new shuffles.":
  "Nuevo sorteo genera un nuevo conjunto de lecturas simuladas y nuevos barajados.",
"mass":
  "masa",
"stretch":
  "estiramiento",
"Physics expects {#} here, but {#} is more than {#} SE from the intercept.":
  "La física espera {#} aquí, pero {#} está a más de {#} EE de la ordenada al origen.",
"From the slope":
  "A partir de la pendiente",
"spring constant k = g/b":
  "constante del resorte k = g/b",
"{what}: {v} ± {e} {u}. The simulation used {t} {u}: {z} SE away.":
  "{what}: {v} ± {e} {u}. La simulación usó {t} {u}: a {z} EE.",
"Physics expects {#} here, and {#} is within {#} SE of the intercept.":
  "La física espera {#} aquí, y {#} está a menos de {#} EE de la ordenada al origen.",
"For each {#} kg increase in mass, the predicted stretch goes up by {#} m.":
  "Por cada aumento de {#} kg en masa, el valor predicho de estiramiento sube {#} m.",
"At mass = {#}, the predicted stretch is {#} m. x = {#} is outside the data ({#} to {#}), so the intercept is an extrapolation: it fixes the line's height and may mean nothing by itself. Physics expects {#} here, and {#} is within {#} SE of the intercept.":
  "Con masa = {#}, el valor predicho de estiramiento es {#} m. x = {#} está fuera de los datos ({#} a {#}), así que la ordenada al origen es una extrapolación: fija la altura de la recta y puede no significar nada por sí sola. La física espera {#} aquí, y {#} está a menos de {#} EE de la ordenada al origen.",
"spring constant k = g/b: {#} ± {#} N/m. The simulation used {#} N/m: {#} SE away.":
  "constante del resorte k = g/b: {#} ± {#} N/m. La simulación usó {#} N/m: a {#} EE.",
"Mass (kg)":
  "Masa (kg)",
"Stretch (m)":
  "Estiramiento (m)",
"Residuals y − ŷ (m)":
  "Residuos y − ŷ (m)",
"Simulated: a pendulum timed at nine lengths, each period with a random timing error of about {#} s, then squared. T² = ({#}π²/g)L is a straight line through the origin, so g = {#}π²/b. Fit with a free intercept and check whether it comes out within its uncertainty of zero.":
  "Simulado: un péndulo cronometrado en nueve longitudes, cada periodo con un error aleatorio de cronometraje de unos {#} s, y luego elevado al cuadrado. T² = ({#}π²/g)L es una recta que pasa por el origen, así que g = {#}π²/b. Ajusta con ordenada al origen libre y revisa si queda dentro de su incertidumbre de cero.",
"length":
  "longitud",
"period squared T²":
  "periodo al cuadrado T²",
"For each {#} m increase in length, the predicted period squared T² goes up by {#} s².":
  "Por cada aumento de {#} m en longitud, el valor predicho de periodo al cuadrado T² sube {#} s².",
"At length = {#}, the predicted period squared T² is −{#} s². x = {#} is outside the data ({#} to {#}), so the intercept is an extrapolation: it fixes the line's height and may mean nothing by itself. Physics expects {#} here, and {#} is within {#} SE of the intercept.":
  "Con longitud = {#}, el valor predicho de periodo al cuadrado T² es −{#} s². x = {#} está fuera de los datos ({#} a {#}), así que la ordenada al origen es una extrapolación: fija la altura de la recta y puede no significar nada por sí sola. La física espera {#} aquí, y {#} está a menos de {#} EE de la ordenada al origen.",
"g = {#}π²/b: {#} ± {#} m/s². The simulation used {#} m/s²: {#} SE away.":
  "g = {#}π²/b: {#} ± {#} m/s². La simulación usó {#} m/s²: a {#} EE.",
"Length (m)":
  "Longitud (m)",
"Period squared T² (s²)":
  "Periodo al cuadrado T² (s²)",
"Residuals y − ŷ (s²)":
  "Residuos y − ŷ (s²)",
"Simulated: the voltage across a {#} Ω resistor at ten currents, each reading with a random error of about {#} V. The slope is the resistance. With r this close to {#}, r alone says little: read the slope and its uncertainty.":
  "Simulado: el voltaje en un resistor de {#} Ω a diez corrientes, cada lectura con un error aleatorio de unos {#} V. La pendiente es la resistencia. Con r tan cerca de {#}, r sola dice poco: lee la pendiente y su incertidumbre.",
"current":
  "corriente",
"voltage":
  "voltaje",
"V/A, that is Ω":
  "V/A, es decir, Ω",
"resistance R = b":
  "resistencia R = b",
"For each {#} A increase in current, the predicted voltage goes up by {#} V.":
  "Por cada aumento de {#} A en corriente, el valor predicho de voltaje sube {#} V.",
"At current = {#}, the predicted voltage is −{#} V. x = {#} is outside the data ({#} to {#}), so the intercept is an extrapolation: it fixes the line's height and may mean nothing by itself. Physics expects {#} here, and {#} is within {#} SE of the intercept.":
  "Con corriente = {#}, el valor predicho de voltaje es −{#} V. x = {#} está fuera de los datos ({#} a {#}), así que la ordenada al origen es una extrapolación: fija la altura de la recta y puede no significar nada por sí sola. La física espera {#} aquí, y {#} está a menos de {#} EE de la ordenada al origen.",
"resistance R = b: {#} ± {#} Ω. The simulation used {#} Ω: {#} SE away.":
  "resistencia R = b: {#} ± {#} Ω. La simulación usó {#} Ω: a {#} EE.",
"Current (A)":
  "Corriente (A)",
"Voltage (V)":
  "Voltaje (V)",
"Residuals y − ŷ (V)":
  "Residuos y − ŷ (V)",
"Simulated: the period of a {#} m pendulum with bobs from {#} g to {#} g. Physics says the period does not depend on the mass, so these are timing errors around one value. Is r significant? Press Play for the shuffle test, then press New draw a few times: about one draw in twenty gives a significant r by chance alone.":
  "Simulado: el periodo de un péndulo de {#} m con lentejas de {#} g a {#} g. La física dice que el periodo no depende de la masa, así que estos son errores de cronometraje alrededor de un solo valor. ¿Es r significativa? Presiona Reproducir para la prueba de barajado y luego Nuevo sorteo unas cuantas veces: más o menos un sorteo de cada veinte da una r significativa solo por azar.",
"bob mass":
  "masa de la lenteja",
"period":
  "periodo",
"slope b, which physics says is {#}":
  "pendiente b, que según la física es {#}",
"No: |r| = {r} is not larger than r* = {c}, and p {p} is not below {#}. The data do not show a linear relationship.":
  "No: |r| = {r} no es mayor que r* = {c}, y p {p} no es menor que {#}. Los datos no muestran una relación lineal.",
"For each {#} kg increase in bob mass, the predicted period goes up by {#} s.":
  "Por cada aumento de {#} kg en masa de la lenteja, el valor predicho de periodo sube {#} s.",
"At bob mass = {#}, the predicted period is {#} s. x = {#} is outside the data ({#} to {#}), so the intercept is an extrapolation: it fixes the line's height and may mean nothing by itself.":
  "Con masa de la lenteja = {#}, el valor predicho de periodo es {#} s. x = {#} está fuera de los datos ({#} a {#}), así que la ordenada al origen es una extrapolación: fija la altura de la recta y puede no significar nada por sí sola.",
"slope b, which physics says is {#}: {#} ± {#} s/kg. The simulation used {#} s/kg: {#} SE away.":
  "pendiente b, que según la física es {#}: {#} ± {#} s/kg. La simulación usó {#} s/kg: a {#} EE.",
"No: |r| = {#} is not larger than r* = {#}, and p = {#} is not below {#}. The data do not show a linear relationship.":
  "No: |r| = {#} no es mayor que r* = {#}, y p = {#} no es menor que {#}. Los datos no muestran una relación lineal.",
"Bob mass (kg)":
  "Masa de la lenteja (kg)",
"Period (s)":
  "Periodo (s)",
"{#} points: period against bob mass.":
  "{#} puntos: periodo contra masa de la lenteja.",
"The least squares line is y hat = {#} + {#} x, with r = {#} and s = {#}.":
  "La recta de mínimos cuadrados es y gorro = {#} + {#} x, con r = {#} y s = {#}.",
"{n} points read.":
  "{n} puntos leídos.",
"Type or paste your own readings, one x, y pair a line, and name x and y with their units so the slope and intercept read in context. Your data stay in this page.":
  "Escribe o pega tus propias lecturas, un par x, y por renglón, y nombra x y y con sus unidades para que la pendiente y la ordenada al origen se lean en contexto. Tus datos se quedan en esta página.",
"Your own data.":
  "Tus propios datos.",
"{#} points read.":
  "{#} puntos leídos.",
"At mass = {#}, the predicted stretch is {#} m. x = {#} is outside the data ({#} to {#}), so the intercept is an extrapolation: it fixes the line's height and may mean nothing by itself.":
  "Con masa = {#}, el valor predicho de estiramiento es {#} m. x = {#} está fuera de los datos ({#} a {#}), así que la ordenada al origen es una extrapolación: fija la altura de la recta y puede no significar nada por sí sola.",
"{#} points: stretch against mass.":
  "{#} puntos: estiramiento contra masa.",
"Shuffle {k} of {n}: the y values trade places among the x values, slowly for the first {m}.":
  "Barajado {k} de {n}: los valores de y cambian de lugar entre los valores de x, despacio en los primeros {m}.",
"Shuffle {#} of {#}: the y values trade places among the x values, slowly for the first {#}.":
  "Barajado {#} de {#}: los valores de y cambian de lugar entre los valores de x, despacio en los primeros {#}.",
"{n} shuffles · shuffle p = {p}":
  "{n} barajados · p del barajado = {p}",
"{#} shuffles · shuffle p = < {#}":
  "{#} barajados · p del barajado = < {#}",
"({n} shuffles)":
  "({n} barajados)",
"Paused after {k} shuffles. Play goes on.":
  "En pausa después de {k} barajados. Reproducir continúa.",
"Paused after {#} shuffles. Play goes on.":
  "En pausa después de {#} barajados. Reproducir continúa.",
"Zoom in or out (or scroll over the plot)":
  "Acercar o alejar (o desplázate sobre la gráfica)",
"on the scatter plot":
  "en el diagrama de dispersión",
"Select the next point (Shift for the one before)":
  "Seleccionar el siguiente punto (Shift para el anterior)",
"Move the selected point (Shift for bigger steps)":
  "Mover el punto seleccionado (Shift para pasos más grandes)",
"Remove the selected point, or put it back":
  "Quitar el punto seleccionado, o regresarlo",
"Yours: {v} (×{k})":
  "Tuya: {v} (×{k})",
"Area of the squares":
  "Área de los cuadrados",
"Yours: {#} (×{#})":
  "Tuya: {#} (×{#})",
"{#} points: maximum dive time against depth.":
  "{#} puntos: tiempo máximo de buceo contra profundidad.",
"The least squares line is y hat = {#} + −{#} x, with r = −{#} and s = {#}.":
  "La recta de mínimos cuadrados es y gorro = {#} + −{#} x, con r = −{#} y s = {#}.",
"{#} points: consumer price index against year.":
  "{#} puntos: índice de precios al consumidor contra año.",
"{#} points: winning time against year.":
  "{#} puntos: tiempo ganador contra año.",
"{#} points: period squared T² against length.":
  "{#} puntos: periodo al cuadrado T² contra longitud.",
"{#} points: voltage against current.":
  "{#} puntos: voltaje contra corriente.",
"Shuffle test done: {n} shuffles. Reset clears it; a change to the points clears it too.":
  "Prueba de barajado terminada: {n} barajados. Restablecer la borra; un cambio en los puntos también la borra.",
"{#} shuffles · shuffle p = {#}":
  "{#} barajados · p del barajado = {#}",
"Shuffle test done: {#} shuffles. Reset clears it; a change to the points clears it too.":
  "Prueba de barajado terminada: {#} barajados. Restablecer la borra; un cambio en los puntos también la borra.",
"Without the selected point ({x}, {y})":
  "Sin el punto seleccionado ({x}, {y})",
"ŷ = {a} + {b}x, r = {r}. The slope changes by {c}.":
  "ŷ = {a} + {b}x, r = {r}. La pendiente cambia {c}.",
"Selected: ({x}, {y}). The gray dashed line leaves it out.":
  "Seleccionado: ({x}, {y}). La línea gris punteada lo deja fuera.",
"Without the selected point ({#}, {#})":
  "Sin el punto seleccionado ({#}, {#})",
"ŷ = −{#} + {#}x, r = {#}. The slope changes by {#} %.":
  "ŷ = −{#} + {#}x, r = {#}. La pendiente cambia {#} %.",
"Selected: ({#}, {#}). The gray dashed line leaves it out.":
  "Seleccionado: ({#}, {#}). La línea gris punteada lo deja fuera.",
"Point ({x}, {y}) is removed; with it back":
  "El punto ({x}, {y}) está quitado; con él de vuelta",
"Selected: ({x}, {y}), removed. Click it in Remove mode or Put all points back to use it again.":
  "Seleccionado: ({x}, {y}), quitado. Haz clic en él en el modo Quitar o usa Regresar todos los puntos para usarlo otra vez.",
"Put selected point back":
  "Regresar el punto seleccionado",
"Point ({#}, {#}) is removed; with it back":
  "El punto ({#}, {#}) está quitado; con él de vuelta",
"Selected: ({#}, {#}), removed. Click it in Remove mode or Put all points back to use it again.":
  "Seleccionado: ({#}, {#}), quitado. Haz clic en él en el modo Quitar o usa Regresar todos los puntos para usarlo otra vez.",
"ŷ = {#} + −{#}x, r = −{#}. The slope changes by {#} %.":
  "ŷ = {#} + −{#}x, r = −{#}. La pendiente cambia {#} %.",
"ŷ = −{#} + {#}x, r = {#}. The slope changes by −{#} %.":
  "ŷ = −{#} + {#}x, r = {#}. La pendiente cambia −{#} %.",
"Consumer Price Index":
  "Índice de precios al consumidor",
"Olympic {#} m freestyle":
  "Olímpicos {#} m libre",
"Spring":
  "Resorte",
"ŷ = {#} + {#}x, r = {#}. The slope changes by −{#} %.":
  "ŷ = {#} + {#}x, r = {#}. La pendiente cambia −{#} %.",
"Least squares: {#}×{#}⁻⁵":
  "Mínimos cuadrados: {#}×{#}⁻⁵",
"Pendulum T² against length":
  "Péndulo T² contra longitud",
"Ohm's law":
  "Ley de Ohm",
"Pendulum period against bob mass":
  "Péndulo, periodo contra masa de la lenteja",
"ŷ = {#} + −{#}x, r = −{#}. The slope changes by −{#} %.":
  "ŷ = {#} + −{#}x, r = −{#}. La pendiente cambia −{#} %.",
"For each {#} kg increase in bob mass, the predicted period goes down by {#} s.":
  "Por cada aumento de {#} kg en masa de la lenteja, el valor predicho de periodo baja {#} s.",
"slope b, which physics says is {#}: −{#} ± {#} s/kg. The simulation used {#} s/kg: {#} SE away.":
  "pendiente b, que según la física es {#}: −{#} ± {#} s/kg. La simulación usó {#} s/kg: a {#} EE.",
"Your own data":
  "Tus propios datos",
"Your line: {v}":
  "Tu recta: {v}",
"Least squares: ?":
  "Mínimos cuadrados: ?",
"Your line: {#}":
  "Tu recta: {#}",
"Hidden while Blind is on":
  "Oculto mientras A ciegas está activado",
"Turn Blind off to record the fit.":
  "Desactiva A ciegas para registrar el ajuste.",
"Type at least three x, y pairs.":
  "Escribe al menos tres pares x, y.",
"Line {n}: give two numbers, x then y.":
  "Renglón {n}: da dos números, x y luego y.",
"Line {#}: give two numbers, x then y.":
  "Renglón {#}: da dos números, x y luego y.",
"Line {n}: that is not a number.":
  "Renglón {n}: eso no es un número.",
"Line {#}: that is not a number.":
  "Renglón {#}: eso no es un número.",
"Line {n}: a number is too large.":
  "Renglón {n}: un número es demasiado grande.",
"Line {#}: a number is too large.":
  "Renglón {#}: un número es demasiado grande.",
"r is undefined: every y is the same.":
  "r no está definida: todas las y son iguales.",
"none: every point is on the line":
  "ninguno: todos los puntos están sobre la recta",
"The least squares line is y hat = {#} + {#} x, with r = — and s = {#}.":
  "La recta de mínimos cuadrados es y gorro = {#} + {#} x, con r = — y s = {#}.",
"At most {#} points.":
  "Como máximo {#} puntos.",
"Needs three points with different x":
  "Se necesitan tres puntos con x distintas",
"{#} readings sent to the worksheet. <a>Open the worksheet</a>":
  "{#} lecturas enviadas a la hoja de trabajo. <a>Abrir la hoja de trabajo</a>",
"Readings cleared.":
  "Lecturas borradas.",
"At most 500 points.":
  "Como máximo 500 puntos.",
"Shuffle {k} of {n}, about three seconds for the rest.":
  "Barajado {k} de {n}, unos tres segundos para el resto.",
"For each 1 {xu} increase in {xn}, the predicted {yn} goes {dir} by {b} {yu}.":
  "Por cada aumento de 1 {xu} en {xn}, el valor predicho de {yn} {dir} {b} {yu}.",
"At {xn} = 0, the predicted {yn} is {a} {yu}.":
  "Con {xn} = 0, el valor predicho de {yn} es {a} {yu}.",
"x = 0 is inside the data, so the intercept is a reading of the line.":
  "x = 0 está dentro de los datos, así que la ordenada al origen es una lectura de la recta.",
"x = 0 is outside the data ({lo} to {hi}), so the intercept is an extrapolation: it fixes the line's height and may mean nothing by itself.":
  "x = 0 está fuera de los datos ({lo} a {hi}), así que la ordenada al origen es una extrapolación: fija la altura de la recta y puede no significar nada por sí sola.",
"Physics expects 0 here, and 0 is within 2 SE of the intercept.":
  "La física espera 0 aquí, y 0 está a menos de 2 EE de la ordenada al origen.",
"Physics expects 0 here, but 0 is more than 2 SE from the intercept.":
  "La física espera 0 aquí, pero 0 está a más de 2 EE de la ordenada al origen.",
"Critical value r* (95 %, df = {df})":
  "Valor crítico r* (95 %, gl = {df})",
"Yes: |r| = {r} is larger than r* = {c}, and p {p} is below 0.05. The data show a linear relationship.":
  "Sí: |r| = {r} es mayor que r* = {c}, y p {p} es menor que 0.05. Los datos muestran una relación lineal.",
"No: |r| = {r} is not larger than r* = {c}, and p {p} is not below 0.05. The data do not show a linear relationship.":
  "No: |r| = {r} no es mayor que r* = {c}, y p {p} no es menor que 0.05. Los datos no muestran una relación lineal.",
"<a>Math for physics</a>":
  "<a>Matemáticas para la física</a>",
"<span><a><span>←</span> <span>Related Rates and Optimization</span></a></span>":
  "<span><a><span>←</span> <span>Razones de cambio relacionadas y optimización</span></a></span>"
});
