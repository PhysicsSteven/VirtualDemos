/* demo/sound-intensity in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'demo/sound-intensity', {
"r (m), doubling scale":
  "r (m), escala de duplicación",
"{#} square":
  "{#} cuadro",
"{#} squares":
  "{#} cuadros",
"the same power through {#}, {#} and {#} squares: I ∝ {#}/r²":
  "la misma potencia a través de {#}, {#} y {#} cuadros: I ∝ {#}/r²",
"sphere area {#}πr² = {#} m²":
  "área de la esfera {#}πr² = {#} m²",
"SOUND LEVEL METER":
  "SONÓMETRO",
"Sound Intensity and Decibels":
  "Intensidad del sonido y decibeles",
"<a><span>←</span> <span>Ultrasound: Echoes and Blood Flow</span></a><a><span>Room Acoustics and the Anechoic Chamber</span> <span>→</span></a>":
  "<a><span>←</span> <span>Ultrasonido: ecos y flujo sanguíneo</span></a><a><span>Acústica de salas y la cámara anecoica</span> <span>→</span></a>",
"A loudspeaker in an open field spreads its power P over a sphere, so the intensity falls as I = P/({#}πr²). The sound level meter reads β = {#} log(I/I₀) in decibels: every doubling of the distance takes off {#} dB. Add a second source and find out why two {#} dB sources make {#} dB, not {#}.":
  "Una bocina en un campo abierto reparte su potencia P sobre una esfera, así que la intensidad disminuye como I = P/({#}πr²). El sonómetro lee β = {#} log(I/I₀) en decibeles: cada vez que se duplica la distancia se pierden {#} dB. Añade una segunda fuente y descubre por qué dos fuentes de {#} dB dan {#} dB, no {#}.",
"I₀ = {#}⁻¹² W/m², free field":
  "I₀ = {#}⁻¹² W/m², campo libre",
"A loudspeaker on a stand at the left of an open field and a sound level meter on a tripod over a measuring tape. Drag the meter along the tape to change the distance r. Left and right arrows move it by {#} m (with Shift, {#} m); page up and page down double or halve r.":
  "Una bocina sobre un soporte a la izquierda de un campo abierto y un sonómetro sobre un tripié encima de una cinta métrica. Arrastra el sonómetro a lo largo de la cinta para cambiar la distancia r. Las flechas izquierda y derecha lo mueven {#} m (con Shift, {#} m); Re Pág y Av Pág duplican o reducen a la mitad r.",
"Set up the sources and the meter":
  "Prepara las fuentes y el sonómetro",
"<span>Set up</span>":
  "<span>Preparación</span>",
"Distance r, speaker to meter":
  "Distancia r, de la bocina al sonómetro",
"Power of source A":
  "Potencia de la fuente A",
"<span>Source B, beside A</span>":
  "<span>Fuente B, junto a A</span>",
"Power of source B":
  "Potencia de la fuente B",
"<span>Background noise</span>":
  "<span>Ruido de fondo</span>",
"Background noise":
  "Ruido de fondo",
"<span>Tape</span>":
  "<span>Cinta</span>",
"Length of tape shown":
  "Longitud de cinta mostrada",
"{#} to {#} m":
  "{#} a {#} m",
"Inverse square law":
  "Ley del inverso del cuadrado",
"Two equal sources":
  "Dos fuentes iguales",
"A loud and a quiet source":
  "Una fuente fuerte y una débil",
"Mystery source":
  "Fuente misteriosa",
"One {#} mW source. At {#} m the meter reads {#} dB. Record the level at {#}, {#}, {#}, {#}, {#}, {#} and {#} m: each doubling of r spreads the power over four times the area, so the level falls by {#} log {#} = {#} dB.":
  "Una fuente de {#} mW. A {#} m el sonómetro lee {#} dB. Registra el nivel a {#}, {#}, {#}, {#}, {#}, {#} y {#} m: cada vez que r se duplica la potencia se reparte sobre cuatro veces el área, así que el nivel baja {#} log {#} = {#} dB.",
"Sound level meter":
  "Sonómetro",
"Level β on the meter":
  "Nivel β en el sonómetro",
"Total intensity I":
  "Intensidad total I",
"Pressure amplitude Δp":
  "Amplitud de presión Δp",
"Source A alone":
  "Solo la fuente A",
"I = P/({#}πr²) · β = {#} log(I/I₀) · I = Δp²/({#}ρv)":
  "I = P/({#}πr²) · β = {#} log(I/I₀) · I = Δp²/({#}ρv)",
"Sources":
  "Fuentes",
"No readings yet. Place the meter, then record.":
  "Aún no hay lecturas. Coloca el sonómetro y luego registra.",
"The recorded levels against distance, with r doubling at each grid line, a least squares line and its residuals.":
  "Los niveles registrados en función de la distancia, con r duplicándose en cada línea de la cuadrícula, una recta de mínimos cuadrados y sus residuos.",
"Record at least two distances with these sources.":
  "Registra al menos dos distancias con estas fuentes.",
"Each reading stores r, the sources and the meter's level. The graph puts r on a doubling scale (log₂ r), so the inverse square law is a straight line; its slope is the change in level per doubling. It uses the readings taken with the sources as they are set now.":
  "Cada lectura guarda r, las fuentes y el nivel del sonómetro. La gráfica pone r en una escala de duplicación (log₂ r), así que la ley del inverso del cuadrado es una recta; su pendiente es el cambio de nivel por duplicación. Usa las lecturas tomadas con las fuentes como están fijadas ahora.",
"<span>Blind: hide predictions</span>":
  "<span>A ciegas: ocultar predicciones</span>",
"Blind hides the intensities, each source's own level and the pressure amplitude; the meter stays. The Mystery source always hides its power.":
  "A ciegas oculta las intensidades, el nivel propio de cada fuente y la amplitud de presión; el sonómetro se queda. La Fuente misteriosa siempre oculta su potencia.",
"Each source is a point that sends its power P out equally in all directions, high above an open field with nothing to reflect the sound (a free field), so I = P/({#}πr²) exactly and no energy is lost in the air. (Air absorbs about {#} dB per km at {#} kHz, {#} °C and {#} % humidity, by ISO {#}-{#}: about {#} dB over {#} m, left out.) Close to a real loudspeaker, within about its own size, the point source picture fails; the demo starts at {#} m. Source B stands beside A, at the same distance from the meter.":
  "Cada fuente es un punto que envía su potencia P por igual en todas direcciones, muy por encima de un campo abierto sin nada que refleje el sonido (un campo libre), así que I = P/({#}πr²) exactamente y no se pierde energía en el aire. (El aire absorbe unos {#} dB por km a {#} kHz, {#} °C y {#} % de humedad, según ISO {#}-{#}: unos {#} dB en {#} m, que se omiten.) Cerca de una bocina real, dentro de más o menos su propio tamaño, la imagen de fuente puntual falla; la demo empieza a {#} m. La fuente B está junto a A, a la misma distancia del sonómetro.",
"The sources play independent noise, so their intensities add: I = I_A + I_B + I_background, and β = {#} log(I/I₀). Two loudspeakers playing the same tone would interfere instead (OpenStax section {#}, Interference of Waves). The background is a steady noise of the chosen level, the same everywhere. The meter shows the level to {#} dB, as a real meter does; the pressure amplitude uses ρ = {#} kg/m³ (air at {#} °C) and v = {#} m/s.":
  "Las fuentes emiten ruido independiente, así que sus intensidades se suman: I = I_A + I_B + I_background, y β = {#} log(I/I₀). Dos bocinas que tocan el mismo tono interferirían en cambio (OpenStax sección {#}, Interferencia de ondas). El fondo es un ruido constante del nivel elegido, igual en todas partes. El sonómetro muestra el nivel con precisión de {#} dB, como un sonómetro real; la amplitud de presión usa ρ = {#} kg/m³ (aire a {#} °C) y v = {#} m/s.",
"A: {#} mW background {#} dB":
  "A: {#} mW fondo {#} dB",
"Background alone":
  "Solo el fondo",
"Two {#} mW sources side by side. Read the level with A alone, B alone and both: two equal independent sources give twice the intensity, which is only {#} dB more, at every distance.":
  "Dos fuentes de {#} mW una junto a la otra. Lee el nivel con solo A, solo B y ambas: dos fuentes independientes iguales dan el doble de intensidad, que son solo {#} dB más, a cualquier distancia.",
"Source B alone":
  "Solo la fuente B",
"A {#} mW source and a {#} mW source, {#} dB quieter. Switch B on and off: it adds only {#} dB. A source {#} dB below another hardly changes the level.":
  "Una fuente de {#} mW y una de {#} mW, {#} dB más débil. Enciende y apaga B: añade solo {#} dB. Una fuente {#} dB por debajo de otra casi no cambia el nivel.",
"The {#} mW source with a steady {#} dB background. Near the speaker the background does not matter; far away the level falls more slowly toward {#} dB ({#} dB at {#} m, where the source alone gives {#} dB). Find where the {#} dB per doubling rule starts to fail.":
  "La fuente de {#} mW con un fondo constante de {#} dB. Cerca de la bocina el fondo no importa; lejos, el nivel baja más lentamente hacia {#} dB ({#} dB a {#} m, donde la fuente sola da {#} dB). Encuentra dónde empieza a fallar la regla de {#} dB por duplicación.",
"A: mystery":
  "A: misteriosa",
"A source of hidden power. Measure the level at several distances and work out its power P.":
  "Una fuente de potencia oculta. Mide el nivel a varias distancias y calcula su potencia P.",
"mystery":
  "misteriosa",
"hidden: the source is a mystery":
  "oculta: la fuente es un misterio",
"A mystery":
  "A misteriosa",
"Close":
  "Cerrar",
"Move the meter toward or away from the speaker by {#} m (Shift: {#} m)":
  "Acerca o aleja el medidor de la bocina {#} m (Shift: {#} m)",
"same power, {#}, {#}, {#} squares: I ∝ {#}/r²":
  "misma potencia, {#}, {#}, {#} cuadros: I ∝ {#}/r²",
"A: mystery background {#} dB":
  "A: misteriosa fondo {#} dB",
"The sources play independent noise, so their intensities add: I = I_A + I_B + I_background, and β = {#} log(I/I₀). Two loudspeakers playing the same tone would interfere instead (OpenStax section {#}, Interference of Waves). The background is a steady noise of the chosen level, the same everywhere. The meter shows the level to {#} dB, as a real meter does; the pressure amplitude uses ρ = {#} kg/m³ and v = {#} m/s.":
  "Las fuentes emiten ruido independiente, así que sus intensidades se suman: I = I_A + I_B + I_background, y β = {#} log(I/I₀). Dos bocinas que tocan el mismo tono interferirían en cambio (OpenStax sección {#}, Interferencia de ondas). El fondo es un ruido constante del nivel elegido, igual en todas partes. El sonómetro muestra el nivel con precisión de {#} dB, como un sonómetro real; la amplitud de presión usa ρ = {#} kg/m³ y v = {#} m/s."
});
