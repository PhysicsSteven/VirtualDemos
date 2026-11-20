/* notes/confidence-intervals in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'notes/confidence-intervals', {
"Confidence Intervals: teaching notes":
  "Intervalos de confianza: notas de enseñanza",
"Confidence Intervals":
  "Intervalos de confianza",
"Statistics (OpenStax Introductory Statistics 2e {#} to {#}) and physics labs that report a mean with its uncertainty (a pendulum's period, photon counting with a polarizer)":
  "Estadística (OpenStax Introductory Statistics 2e {#} a {#}) y prácticas de física que reportan una media con su incertidumbre (el periodo de un péndulo, el conteo de fotones con un polarizador)",
"A {#} % confidence interval comes from a method that catches the true value in {#} % of samples. Any one interval either catches it or not; the {#} % is about the method, not about one interval.":
  "Un intervalo de confianza al {#} % sale de un método que atrapa el valor verdadero en el {#} % de las muestras. Cada intervalo lo atrapa o no; el {#} % se refiere al método, no a un intervalo.",
"Higher confidence means wider intervals. The width shrinks as {#}/√n: four times the sample, half the width.":
  "Más confianza quiere decir intervalos más anchos. El ancho se reduce como {#}/√n: cuatro veces la muestra, la mitad del ancho.",
"With σ unknown and a small sample, the interval needs t with n − {#} degrees of freedom. Putting s in place of σ with z makes intervals that are too narrow and miss too often.":
  "Con σ desconocida y una muestra pequeña, el intervalo necesita la t con n − {#} grados de libertad. Poner s en lugar de σ con z da intervalos demasiado angostos que fallan demasiado seguido.",
"The t interval assumes a normal population; for a skewed one it needs a larger n.":
  "El intervalo t supone una población normal; para una sesgada necesita una n más grande.",
"A proportion's interval p′ ± z√(p′q′/n) is a normal approximation; for a rare event and a small n it fails, and the plus four interval does much better.":
  "El intervalo de una proporción, p′ ± z√(p′q′/n), es una aproximación normal; para un evento raro y una n pequeña falla, y el intervalo más cuatro funciona mucho mejor.",
"Nothing to install. Population picks Pendulum period, hand timed (s); Heights (cm), normal; Times between decays (s), skewed; or Photons through a polarizer: a proportion (with the Polarizer angle θ). Sample size n has −{#} and +{#}. The interval is z, σ known; z with s; t with s; Normal approximation; or Plus four, and Also draw z with s (thin) adds a second interval for comparison. Confidence level (%) is {#}, {#} or {#}. Draw one, Draw {#}, Draw {#} or Play stack the intervals under the true value; misses are drawn red. Two tabs: Capture rate as they pile up and Width against n. Draw set, in the Lab fold, starts new samples; Blind hides the true value and which intervals caught it. Every sample is simulated. The Handout and worksheet link opens the coverage worksheet.":
  "No hay nada que instalar. Población elige Periodo de un péndulo, medido a mano (s); Estaturas (cm), normal; Tiempos entre decaimientos (s), sesgada; o Fotones a través de un polarizador: una proporción (con el Ángulo del polarizador θ). Tamaño de muestra n tiene −{#} y +{#}. El intervalo es z, σ conocida; z con s; t con s; Aproximación normal; o Más cuatro, y También dibujar z con s (delgado) agrega un segundo intervalo para comparar. Nivel de confianza (%) es {#}, {#} o {#}. Tomar uno, Tomar {#}, Tomar {#} o Iniciar apilan los intervalos bajo el valor verdadero; los que fallan se dibujan en rojo. Dos pestañas: Tasa de acierto conforme se apilan y Ancho contra n. Conjunto de sorteo, en el desplegable Laboratorio, empieza muestras nuevas; A ciegas oculta el valor verdadero y cuáles intervalos lo atraparon. Todas las muestras son simuladas. El enlace Guía y hoja de trabajo abre la hoja de cobertura.",
"<strong>Count the misses.</strong> Open on <strong>A pendulum's period: {#} % z intervals</strong>. Ask what share will miss, then Draw {#} (Q1).":
  "<strong>Cuenta los que fallan.</strong> Abre en <strong>El periodo de un péndulo: intervalos z al {#} %</strong>. Pregunta qué fracción fallará y luego Tomar {#} (Q1).",
"<strong>Change the level.</strong> <strong>{#}, {#} or {#} %: the same samples</strong>: Draw {#}, then switch the level (Q2).":
  "<strong>Cambia el nivel.</strong> <strong>{#}, {#} o {#} %: las mismas muestras</strong>: Tomar {#} y luego cambia el nivel (Q2).",
"<strong>Small samples.</strong> <strong>n = {#}: t against z with s</strong> (Q3).":
  "<strong>Muestras pequeñas.</strong> <strong>n = {#}: t contra z con s</strong> (Q3).",
"<strong>Skewed data.</strong> <strong>Skewed decay times, t at n = {#}</strong>, then raise n to {#} (Q4). <strong>Heights, t intervals, n = {#}</strong> for a normal population.":
  "<strong>Datos sesgados.</strong> <strong>Tiempos de decaimiento sesgados, t con n = {#}</strong> y luego sube n a {#} (Q4). <strong>Estaturas, intervalos t, n = {#}</strong> para una población normal.",
"<strong>Width.</strong> <strong>Width shrinks as {#}/√n</strong> on the Width against n tab (Q5).":
  "<strong>Ancho.</strong> <strong>El ancho se reduce como {#}/√n</strong> en la pestaña Ancho contra n (Q5).",
"<strong>A proportion.</strong> <strong>Photons through a polarizer at {#}°</strong>, then <strong>A rare event, n = {#}: plus four</strong> (Q6, Q7).":
  "<strong>Una proporción.</strong> <strong>Fotones a través de un polarizador a {#}°</strong> y luego <strong>Un evento raro, n = {#}: más cuatro</strong> (Q6, Q7).",
"<strong>Q1.</strong> A {#} m pendulum has a true period T = {#}π√(L/g) = {#} s. Each sample is ten hand timings with σ = {#} s known. Find the width 2zσ/√n of a {#} % z interval ({#} s). Before you Draw {#}, how many intervals do you expect to miss? Are all samples of {#} going to give exactly {#}? Does a red interval mean the student made a mistake?":
  "<strong>Q1.</strong> Un péndulo de {#} m tiene un periodo verdadero T = {#}π√(L/g) = {#} s. Cada muestra son diez cronometrajes a mano con σ = {#} s conocida. Encuentra el ancho 2zσ/√n de un intervalo z al {#} % ({#} s). Antes de Tomar {#}, ¿cuántos intervalos esperas que fallen? ¿Todas las tandas de {#} van a dar exactamente {#}? ¿Un intervalo rojo quiere decir que el estudiante se equivocó?",
"<strong>Q2.</strong> With the same samples, the {#} % and {#} % intervals are {#} s and {#} s wide. Why does more confidence cost width? What would a {#} % interval look like?":
  "<strong>Q2.</strong> Con las mismas muestras, los intervalos al {#} % y al {#} % miden {#} s y {#} s de ancho. ¿Por qué más confianza cuesta ancho? ¿Cómo se vería un intervalo al {#} %?",
"<strong>Q3.</strong> With four timings and σ unknown, t with {#} degrees of freedom is {#}, not {#}. The z with s interval catches the truth only P(|T| ≤ {#}) = {#} % of the time for df = {#}. Why is s so often smaller than σ in a small sample, and why does the t interval fix it?":
  "<strong>Q3.</strong> Con cuatro cronometrajes y σ desconocida, la t con {#} grados de libertad vale {#}, no {#}. El intervalo z con s atrapa el valor verdadero solo P(|T| ≤ {#}) = {#} % de las veces para gl = {#}. ¿Por qué s sale tan seguido más chica que σ en una muestra pequeña, y por qué el intervalo t lo arregla?",
"<strong>Q4.</strong> Times between decays are exponential with mean {#} s. In {#} simulated samples, t intervals at n = {#} catch the mean about {#} % of the time, and at n = {#} about {#} %. Why does a skewed population hurt the t interval, and why does a larger n help?":
  "<strong>Q4.</strong> Los tiempos entre decaimientos son exponenciales con media de {#} s. En {#} muestras simuladas, los intervalos t con n = {#} atrapan la media cerca del {#} % de las veces, y con n = {#} cerca del {#} %. ¿Por qué una población sesgada perjudica al intervalo t, y por qué ayuda una n más grande?",
"<strong>Q5.</strong> The width of a {#} % z interval for the pendulum is {#} s at n = {#}. Predict it at n = {#} and n = {#}, then check on the Width against n tab ({#} s and {#} s). How many timings would halve the n = {#} width again?":
  "<strong>Q5.</strong> El ancho de un intervalo z al {#} % para el péndulo es {#} s con n = {#}. Predícelo con n = {#} y n = {#}, y luego revisa en la pestaña Ancho contra n ({#} s y {#} s). ¿Cuántos cronometrajes harían falta para volver a partir a la mitad el ancho de n = {#}?",
"<strong>Q6.</strong> A photon passes a polarizer at {#}° with probability cos² {#}° = {#} (Malus's law). With {#} photons a sample, check np and nq. The normal approximation interval catches p about {#} % of the time in {#} samples: is that close enough to {#} %?":
  "<strong>Q6.</strong> Un fotón pasa un polarizador a {#}° con probabilidad cos² {#}° = {#} (ley de Malus). Con {#} fotones por muestra, revisa np y nq. El intervalo de aproximación normal atrapa p cerca del {#} % de las veces en {#} muestras: ¿es suficientemente cerca del {#} %?",
"<strong>Q7.</strong> At {#}° only p = {#} of the photons pass. With n = {#}, what is the chance a sample has no photons at all ({#}), and what interval does p′ = {#} give? The normal approximation catches p about {#} % of the time; plus four, about {#} %. What does plus four do, and why does it help?":
  "<strong>Q7.</strong> A {#}° solo pasa p = {#} de los fotones. Con n = {#}, ¿cuál es la probabilidad de que una muestra no tenga ningún fotón ({#}), y qué intervalo da p′ = {#}? La aproximación normal atrapa p cerca del {#} % de las veces; más cuatro, cerca del {#} %. ¿Qué hace más cuatro, y por qué ayuda?",
"<strong>\"There is a {#} % chance the true value is in this interval.\"</strong> The true value is fixed; the method catches it {#} % of the time. A given interval either does or does not.":
  "<strong>\"Hay una probabilidad del {#} % de que el valor verdadero esté en este intervalo.\"</strong> El valor verdadero está fijo; el método lo atrapa el {#} % de las veces. Un intervalo dado lo atrapa o no.",
"<strong>\"{#} % of the data lie in the interval.\"</strong> The interval is for the mean (or proportion), not for single readings, which spread √n times wider.":
  "<strong>\"El {#} % de los datos queda dentro del intervalo.\"</strong> El intervalo es para la media (o la proporción), no para lecturas sueltas, que se dispersan √n veces más.",
"<strong>\"A wider interval is a worse measurement.\"</strong> It is a more honest one at higher confidence; more data, not a smaller z, is the way to narrow it.":
  "<strong>\"Un intervalo más ancho es una peor medición.\"</strong> Es una más honesta con más confianza; para angostarlo hacen falta más datos, no una z más chica.",
"<strong>\"z and t are interchangeable.\"</strong> For small samples with s, z gives intervals that miss far too often.":
  "<strong>\"z y t son intercambiables.\"</strong> Para muestras pequeñas con s, z da intervalos que fallan demasiado seguido.",
"<strong>\"Zero successes means p = {#}.\"</strong> A sample of {#} with no photons is common at p = {#}; the normal interval of zero width is useless there.":
  "<strong>\"Cero éxitos quiere decir p = {#}.\"</strong> Una muestra de {#} sin fotones es común con p = {#}; ahí el intervalo normal de ancho cero no sirve.",
"How the demo works":
  "Cómo funciona la demo",
"Every sample is simulated with a seeded random number generator: the pendulum timings are T plus a normal error with σ = {#} s, with g = {#} m/s² from constants.js; heights normal with μ = {#} cm and σ = {#} cm; times between decays exponential with mean {#} s; each photon passes with probability cos²θ.":
  "Cada muestra se simula con un generador de números aleatorios con semilla: los cronometrajes del péndulo son T más un error normal con σ = {#} s, con g = {#} m/s² de constants.js; estaturas normales con μ = {#} cm y σ = {#} cm; tiempos entre decaimientos exponenciales con media de {#} s; cada fotón pasa con probabilidad cos²θ.",
"The intervals follow the book: x̄ ± z(σ/√n); z with s; x̄ ± t(s/√n) with n − {#} degrees of freedom; p′ ± z√(p′q′/n); plus four, with two successes and two failures added. The critical values come from the exact normal and t distributions (demos/lib/vdstats.js).":
  "Los intervalos siguen al libro: x̄ ± z(σ/√n); z con s; x̄ ± t(s/√n) con n − {#} grados de libertad; p′ ± z√(p′q′/n); más cuatro, con dos éxitos y dos fracasos agregados. Los valores críticos salen de las distribuciones normal y t exactas (demos/lib/vdstats.js).",
"The samples are kept, so a new level or interval recounts the same samples; a new n, population, angle or draw set starts new ones. Each n has its own stream.":
  "Las muestras se conservan, así que un nivel o un intervalo nuevo vuelve a contar las mismas muestras; una n, población, ángulo o conjunto de sorteo nuevo empieza muestras nuevas. Cada n tiene su propia secuencia.",
"On the Width against n tab, each dot is the mean width at that n, and the curve is 2zσ/√n (or 2z√(pq/n)).":
  "En la pestaña Ancho contra n, cada punto es el ancho medio con esa n, y la curva es 2zσ/√n (o 2z√(pq/n)).",
"The capture rates over {#} samples quoted above were computed with the demo's own code (Draw set {#}).":
  "Las tasas de acierto en {#} muestras citadas arriba se calcularon con el propio código de la demo (Conjunto de sorteo {#})."
});
