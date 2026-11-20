/* notes/anova in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'notes/anova', {
"One Way ANOVA: teaching notes":
  "ANOVA de un factor: notas de enseñanza",
"One Way ANOVA":
  "ANOVA de un factor",
"Statistics (OpenStax Introductory Statistics 2e {#} to {#}) and physics labs that compare several groups or instruments (lab groups measuring g, batches of resistors, timing methods)":
  "Estadística (OpenStax Introductory Statistics 2e {#} a {#}) y prácticas de física que comparan varios grupos o instrumentos (equipos que miden g, lotes de resistencias, métodos de cronometraje)",
"ANOVA asks whether several group means are all equal (H₀) or not all equal (Hₐ). It answers by comparing two variances: how far the group means sit from the grand mean (the mean square between groups) against how far the points sit from their own group's mean (the mean square within groups).":
  "El ANOVA pregunta si las medias de varios grupos son todas iguales (H₀) o no todas iguales (Hₐ). Responde comparando dos varianzas: qué tan lejos quedan las medias de los grupos de la media general (el cuadrado medio entre grupos) contra qué tan lejos quedan los puntos de la media de su propio grupo (el cuadrado medio dentro de los grupos).",
"F = MS_between/MS_within. When H₀ is true both estimate the same σ², so F is near {#}; a large F says the means differ more than the scatter can explain. The p value is the area to the right of F under F(k − {#}, N − k).":
  "F = MS_between/MS_within. Cuando H₀ es verdadera, los dos estiman la misma σ², así que F queda cerca de {#}; una F grande dice que las medias difieren más de lo que la dispersión puede explicar. El valor p es el área a la derecha de F bajo F(k − {#}, N − k).",
"For equally spaced means with equal groups, F grows as the square of the gap and as n, and falls as the square of the spread.":
  "Para medias igualmente espaciadas con grupos iguales, F crece con el cuadrado de la separación y con n, y baja con el cuadrado de la dispersión.",
"Even with every mean equal, a test at α = {#} gives a false alarm in about {#} % of studies.":
  "Aun con todas las medias iguales, una prueba con α = {#} da una falsa alarma en cerca del {#} % de los estudios.",
"The F test of two variances ({#}) compares spreads, not means: F = s₁²/s₂². It assumes normal data and is sensitive to that.":
  "La prueba F de dos varianzas ({#}) compara dispersiones, no medias: F = s₁²/s₂². Supone datos normales y es sensible a eso.",
"Nothing to install. Two modes: <strong>One way ANOVA</strong> and <strong>Two variances</strong>. In One way ANOVA, The groups sets k ({#}, {#} or {#}) and Points per group n; Gap between means and Spread s within groups set the picture, or drag each group's mean and spread in the picture. In Two variances, Spread s₂ of group {#} joins them and the tail is σ₁² &lt; σ₂², σ₁² ≠ σ₂² or σ₁² > σ₂². α is {#}, {#} or {#}. Each group is rescaled to have exactly the mean and standard deviation set, so F does not depend on the draw; New draw changes only the shapes. Play runs the number of Studies chosen ({#}, {#} or {#}) with every mean equal and builds the histogram of F. All data are simulated. Blind, in the Lab fold, hides F, the p value and the decision. The Handout and worksheet link opens the one way ANOVA worksheet.":
  "No hay nada que instalar. Dos modos: <strong>ANOVA de un factor</strong> y <strong>Dos varianzas</strong>. En ANOVA de un factor, Los grupos fija k ({#}, {#} o {#}) y Puntos por grupo n; Separación entre medias y Dispersión s dentro de los grupos fijan la imagen, o arrastra la media y la dispersión de cada grupo en la imagen. En Dos varianzas se suma Dispersión s₂ del grupo {#} y la cola es σ₁² &lt; σ₂², σ₁² ≠ σ₂² o σ₁² > σ₂². α es {#}, {#} o {#}. Cada grupo se reescala para tener exactamente la media y la desviación estándar fijadas, así que F no depende de la muestra; Nueva muestra solo cambia las formas. Iniciar corre el número de Estudios elegido ({#}, {#} o {#}) con todas las medias iguales y construye el histograma de F. Todos los datos son simulados. A ciegas, en el desplegable Laboratorio, oculta F, el valor p y la decisión. El enlace Guía y hoja de trabajo abre la hoja de ANOVA de un factor.",
"<strong>Two squares.</strong> Open on <strong>Three ways to time a pendulum</strong>. Point out the two squares, whose areas are the two mean squares. Ask whether the means differ before showing F (Q1).":
  "<strong>Dos cuadrados.</strong> Abre en <strong>Tres formas de medir el tiempo de un péndulo</strong>. Señala los dos cuadrados, cuyas áreas son los dos cuadrados medios. Pregunta si las medias difieren antes de mostrar F (Q1).",
"<strong>Drag a mean.</strong> Drag one group's mean away, then shrink the spread: watch F (Q1).":
  "<strong>Arrastra una media.</strong> Aleja la media de un grupo y luego reduce la dispersión: observa F (Q1).",
"<strong>More groups.</strong> <strong>Four lab groups measure g</strong> and <strong>Five batches of {#} Ω resistors</strong> (Q2).":
  "<strong>Más grupos.</strong> <strong>Cuatro equipos de laboratorio miden g</strong> y <strong>Cinco lotes de resistencias de {#} Ω</strong> (Q2).",
"<strong>Small groups.</strong> <strong>Three fertilizers and plant growth</strong> (Q3).":
  "<strong>Grupos pequeños.</strong> <strong>Tres fertilizantes y el crecimiento de plantas</strong> (Q3).",
"<strong>False alarms.</strong> <strong>All means equal: false alarms</strong>, then Play (Q4).":
  "<strong>Falsas alarmas.</strong> <strong>Todas las medias iguales: falsas alarmas</strong> y luego Iniciar (Q4).",
"Switch modes to <strong>Two variances.</strong> <strong>Two variances: is the new thermometer steadier?</strong> and <strong>Two variances: two stopwatch timers</strong> (Q5, Q6).":
  "Cambia al modo <strong>Dos varianzas.</strong> <strong>Dos varianzas: ¿es más estable el termómetro nuevo?</strong> y <strong>Dos varianzas: dos cronometristas</strong> (Q5, Q6).",
"<strong>Q1.</strong> Three timing methods, eight timings each, means {#} ms apart and a spread of {#} ms within each. Show that MS_within = {#} ms² and MS_between = {#} ms², so F = {#}, with df {#} and {#}. The demo gives p = {#}. With equal gaps d and three groups, why is F = nd²/s²? About what gap puts p at exactly {#}? (The demo gives {#} ms.)":
  "<strong>Q1.</strong> Tres métodos de cronometraje, ocho mediciones cada uno, medias separadas {#} ms y una dispersión de {#} ms dentro de cada uno. Muestra que MS_within = {#} ms² y MS_between = {#} ms², así que F = {#}, con gl {#} y {#}. La demo da p = {#}. Con separaciones iguales d y tres grupos, ¿por qué F = nd²/s²? ¿Con qué separación queda p justo en {#}, más o menos? (La demo da {#} ms.)",
"<strong>Q2.</strong> Four lab groups find g six times each, with a gap of {#} m/s² and a spread of {#} m/s²: F = {#}, df {#} and {#}, p = {#}. Five batches of ten resistors, gap {#} Ω and spread {#} Ω: F = {#}, df {#} and {#}, p = {#}. Find the degrees of freedom yourself. Does a significant F tell you which group is off?":
  "<strong>Q2.</strong> Cuatro equipos miden g seis veces cada uno, con una separación de {#} m/s² y una dispersión de {#} m/s²: F = {#}, gl {#} y {#}, p = {#}. Cinco lotes de diez resistencias, separación {#} Ω y dispersión {#} Ω: F = {#}, gl {#} y {#}, p = {#}. Encuentra tú los grados de libertad. ¿Una F significativa te dice qué grupo está mal?",
"<strong>Q3.</strong> Five plants with each of three fertilizers, a gap of {#} cm and a spread of {#} cm, give F = {#} with df {#} and {#} and p = {#}. The critical F at α = {#} is {#}. What would you need to change to make a real difference show up?":
  "<strong>Q3.</strong> Cinco plantas con cada uno de tres fertilizantes, una separación de {#} cm y una dispersión de {#} cm, dan F = {#} con gl {#} y {#} y p = {#}. La F crítica con α = {#} es {#}. ¿Qué tendrías que cambiar para que una diferencia real se note?",
"<strong>Q4.</strong> In All means equal: false alarms the three sample means are equal, so F = {#}. Press Play: each study draws new groups whose population means are all equal. What share of the F values should land beyond the critical value at α = {#}? The mean of F({#}, {#}) is {#}/{#} = {#}: why is it near {#}?":
  "<strong>Q4.</strong> En Todas las medias iguales: falsas alarmas, las tres medias muestrales son iguales, así que F = {#}. Presiona Iniciar: cada estudio saca grupos nuevos cuyas medias poblacionales son todas iguales. ¿Qué fracción de los valores de F debería caer más allá del valor crítico con α = {#}? La media de F({#}, {#}) es {#}/{#} = {#}: ¿por qué está cerca de {#}?",
"<strong>Q5.</strong> An old and a new thermometer each read a {#} °C bath ten times, with spreads of {#} °C and {#} °C. Find F = s₁²/s₂² and its df. The test is right tailed: why? The demo gives p = {#}. Is the new thermometer steadier?":
  "<strong>Q5.</strong> Un termómetro viejo y uno nuevo leen cada uno diez veces un baño a {#} °C, con dispersiones de {#} °C y {#} °C. Encuentra F = s₁²/s₂² y sus gl. La prueba es de cola derecha: ¿por qué? La demo da p = {#}. ¿Es más estable el termómetro nuevo?",
"<strong>Q6.</strong> Two students time a pendulum twelve times each, with spreads {#} s and {#} s. Find F ({#}) and its df. The two tailed p value is {#} and the lower critical value {#}. What do you conclude, and what does it mean for a two sample t test on their periods?":
  "<strong>Q6.</strong> Dos estudiantes cronometran un péndulo doce veces cada uno, con dispersiones de {#} s y {#} s. Encuentra F ({#}) y sus gl. El valor p de dos colas es {#} y el valor crítico inferior {#}. ¿Qué concluyes, y qué significa para una prueba t de dos muestras sobre sus periodos?",
"<strong>\"ANOVA compares variances, so it tests whether the spreads differ.\"</strong> One way ANOVA tests means; it uses two estimates of the same variance to do it.":
  "<strong>\"El ANOVA compara varianzas, así que prueba si las dispersiones difieren.\"</strong> El ANOVA de un factor prueba medias; para hacerlo usa dos estimaciones de la misma varianza.",
"<strong>\"A significant F says every mean differs.\"</strong> It says not all are equal. Which ones differ needs another look.":
  "<strong>\"Una F significativa dice que todas las medias difieren.\"</strong> Dice que no todas son iguales. Cuáles difieren requiere otra mirada.",
"<strong>\"Running a t test on every pair is the same.\"</strong> With many pairs, the chance of at least one false alarm grows well past α; ANOVA asks once.":
  "<strong>\"Hacer una prueba t con cada par es lo mismo.\"</strong> Con muchos pares, la probabilidad de al menos una falsa alarma crece muy por encima de α; el ANOVA pregunta una sola vez.",
"<strong>\"F near {#} means the means are equal.\"</strong> It means the data give no evidence they differ; small groups can hide a real difference.":
  "<strong>\"Una F cerca de {#} quiere decir que las medias son iguales.\"</strong> Quiere decir que los datos no dan evidencia de que difieran; los grupos pequeños pueden esconder una diferencia real.",
"<strong>\"The F test of two variances is safe for any data.\"</strong> It leans on normal data much more than the t test does.":
  "<strong>\"La prueba F de dos varianzas es segura con cualquier dato.\"</strong> Depende de que los datos sean normales mucho más que la prueba t.",
"How the demo works":
  "Cómo funciona la demo",
"Each group's points are a seeded draw of n standard normal numbers, rescaled so the sample mean and sample standard deviation are exactly the values set. Dragging a mean slides the whole group; dragging a spread stretches it about its mean.":
  "Los puntos de cada grupo son una muestra con semilla de n números normales estándar, reescalados para que la media muestral y la desviación estándar muestral sean exactamente los valores fijados. Arrastrar una media desliza todo el grupo; arrastrar una dispersión lo estira alrededor de su media.",
"One way ANOVA ({#} to {#}): SS_between = Σ nⱼ(x̄ⱼ − x̄)² with df k − {#}; SS_within = Σ (nⱼ − {#})sⱼ² with df N − k; MS = SS/df and F = MS_between/MS_within. The p value is the area of F(k − {#}, N − k) to the right of F, from the shared library (demos/lib/vdstats.js).":
  "ANOVA de un factor ({#} a {#}): SS_between = Σ nⱼ(x̄ⱼ − x̄)² con gl k − {#}; SS_within = Σ (nⱼ − {#})sⱼ² con gl N − k; MS = SS/gl y F = MS_between/MS_within. El valor p es el área de F(k − {#}, N − k) a la derecha de F, de la biblioteca compartida (demos/lib/vdstats.js).",
"Two variances ({#}): F = s₁²/s₂² with df n₁ − {#} and n₂ − {#}.":
  "Dos varianzas ({#}): F = s₁²/s₂² con gl n₁ − {#} y n₂ − {#}.",
"Play draws studies from normal populations that share one mean and one σ, so every F above the critical value is a Type I error.":
  "Iniciar saca estudios de poblaciones normales que comparten una media y una σ, así que cada F por encima del valor crítico es un error de tipo I."
});
