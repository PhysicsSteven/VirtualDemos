/* demo/rotational-dynamics in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'demo/rotational-dynamics', {
"{#} m drop":
  "caída de {#} m",
"timer: {#} s":
  "cronómetro: {#} s",
"Rotational Dynamics":
  "Dinámica de rotación",
"A hanging mass unwinds a string from a spool and spins a turntable. The string's torque gives the table an angular acceleration α = τ/I. Time the fall, work out α, and measure the moment of inertia of what you put on the table.":
  "Una masa colgante desenrolla una cuerda de un carrete y hace girar una plataforma giratoria. La torca de la cuerda le da a la plataforma una aceleración angular α = τ/I. Mide el tiempo de la caída, calcula α y mide el momento de inercia de lo que pongas sobre la plataforma.",
"drop {#} m · g = {#} m/s²":
  "caída {#} m · g = {#} m/s²",
"A turntable with whatever sits on it and the hanging mass falling as the string unwinds from the spool: in the flat view the table from above and the mass from the side, in the 3D view a lab bench with light gates {#} m apart, a timer and a screen drawing ω against time. Space releases, R winds the string back up, the up arrow hangs a {#} g mass and the down arrow takes off the last mass.":
  "Una plataforma giratoria con lo que tenga encima y la masa colgante que cae mientras la cuerda se desenrolla del carrete: en la vista plana, la plataforma desde arriba y la masa de lado; en la vista 3D, una mesa de laboratorio con fotocompuertas separadas {#} m, un cronómetro y una pantalla que dibuja ω en función del tiempo. Espacio suelta, R vuelve a enrollar la cuerda, la flecha arriba cuelga una masa de {#} g y la flecha abajo quita la última masa.",
"Wind it back up":
  "Volver a enrollar",
"Hanging mass m: click a slotted mass to hang it. Drag, or use the arrow keys, to move this card; double click to put it back":
  "Masa colgante m: haz clic en una masa ranurada para colgarla. Arrastra, o usa las flechas, para mover esta tarjeta; doble clic la regresa a su lugar",
"Hanging mass m: click a slotted mass to hang it":
  "Masa colgante m: haz clic en una masa ranurada para colgarla",
"Add {#} g":
  "Agregar {#} g",
"Take off the last mass":
  "Quitar la última masa",
"Take off all masses":
  "Quitar todas las masas",
"hanger {#} g + {#} g + {#} g + {#} g = {#} g":
  "portamasas {#} g + {#} g + {#} g + {#} g = {#} g",
"On the turntable":
  "Sobre la plataforma",
"What sits on the turntable":
  "Lo que hay sobre la plataforma giratoria",
"Nothing":
  "Nada",
"Disk":
  "Disco",
"Ring":
  "Anillo",
"Two masses":
  "Dos masas",
"Mystery object":
  "Objeto misterioso",
"Distance of the two masses from the axis":
  "Distancia de las dos masas al eje",
"The empty turntable: measure its own moment of inertia first, so you can subtract it later.":
  "La plataforma giratoria vacía: mide primero su propio momento de inercia, para poder restarlo después.",
"Drive":
  "Excitación",
"Set the <b>Hanging mass m</b> with the slotted masses beside the pulley (on the picture, the up arrow hangs {#} g and the down arrow takes off the last mass).":
  "Fija la <b>Masa colgante m</b> con las masas ranuradas junto a la polea (en la imagen, la flecha arriba cuelga {#} g y la flecha abajo quita la última masa).",
"<span>Spool radius r</span>":
  "<span>Radio del carrete r</span>",
"Spool radius":
  "Radio del carrete",
"<span>Bearing friction</span>":
  "<span>Fricción en el cojinete</span>",
"Timer":
  "Cronómetro",
"I of the table + load":
  "I de la plataforma + carga",
"I of the load alone":
  "I de la carga sola",
"a of the mass":
  "a de la masa",
"α of the table":
  "α de la plataforma",
"Tension T":
  "Tensión T",
"Torque Tr":
  "Torca Tr",
"ω now":
  "ω ahora",
"Power of the string Tv":
  "Potencia de la cuerda Tv",
"Lost by gravity mgy":
  "Perdida por la gravedad mgy",
"½mv² + ½Iω² + τ_f θ":
  "½mv² + ½Iω² + τ_f θ",
"mg − T = ma · Tr − τ_f = Iα · a = αr":
  "mg − T = ma · Tr − τ_f = Iα · a = αr",
"No readings yet. Release, let it fall, capture.":
  "Aún no hay lecturas. Suelta, deja que caiga, captura.",
"String torque against angular acceleration for the captured rows, with a least squares line and residuals.":
  "Torca de la cuerda en función de la aceleración angular para las filas capturadas, con una recta de mínimos cuadrados y residuos.",
"Capture at least two drops (different m or r) with this load: none.":
  "Captura al menos dos caídas (con m o r distintos) con esta carga: ninguna.",
"Capture stores m, r, what is on the table and the timer reading for the {#} m drop ({#} s). From each row: a = 2h/t², α = a/r, and the string's torque τ = m(g − a)r. Plotting τ against α for one load gives a line: slope I, intercept the friction torque.":
  "Capturar guarda m, r, lo que hay sobre la plataforma y la lectura del cronómetro para la caída de {#} m ({#} s). De cada fila: a = 2h/t², α = a/r, y la torca de la cuerda τ = m(g − a)r. Graficar τ en función de α para una carga da una recta: pendiente I, ordenada al origen la torca de fricción.",
"3D view: drag to turn it, scroll or pinch to zoom, double click to reset. The camera follows the hanging mass down. The timer starts as the mass leaves the start gate and stops when the bottom of the hanger reaches the stop gate, {#} m lower; the screen behind the turntable draws ω against time for the same run. The turntable, spool, loads, slotted masses and the drop are to scale; the string is drawn thicker than a real thread. Flat shows the older drawing; both show the same motion.":
  "Vista 3D: arrastra para girarla, desplaza o pellizca para acercar, doble clic para restablecer. La cámara sigue a la masa colgante hacia abajo. El cronómetro arranca cuando la masa sale de la compuerta de inicio y se detiene cuando la parte inferior del portamasas llega a la compuerta de parada, {#} m más abajo; la pantalla detrás de la plataforma dibuja ω en función del tiempo para la misma corrida. La plataforma, el carrete, las cargas, las masas ranuradas y la caída están a escala; la cuerda se dibuja más gruesa que un hilo real. Plano muestra el dibujo anterior; ambos muestran el mismo movimiento.",
"Blind hides moments of inertia, the predicted motion, the energies and I from the fit, leaving the timer, the masses and the settings. The Mystery object always hides its I.":
  "A ciegas oculta los momentos de inercia, el movimiento predicho, las energías y la I del ajuste, y deja el cronómetro, las masas y los ajustes. El objeto misterioso siempre oculta su I.",
"Model: a rigid turntable on its axle, a massless string that does not slip on the spool, a massless frictionless pulley, and, when switched on, a constant friction torque at the bearing. Turntable I₀ = {#} × {#}⁻³ kg·m². Disk {#} kg, radius {#} cm; ring {#} kg, radii {#} and {#} cm; two {#} kg masses (small cylinders, {#} cm radius).":
  "Modelo: una plataforma giratoria rígida en su eje, una cuerda sin masa que no se desliza en el carrete, una polea sin masa ni fricción y, al activarla, una torca de fricción constante en el cojinete. Plataforma I₀ = {#} × {#}⁻³ kg·m². Disco de {#} kg, radio {#} cm; anillo de {#} kg, radios {#} y {#} cm; dos masas de {#} kg (cilindros pequeños, radio {#} cm).",
"TIMER":
  "CRONÓMETRO",
"start gate to stop gate":
  "de la compuerta de inicio a la de parada",
"ω of the table against time":
  "ω de la plataforma en función del tiempo",
"v = ωr {#} cm/s":
  "v = ωr {#} cm/s",
"start gate":
  "compuerta de inicio",
"stop gate":
  "compuerta de parada",
"spool r = {#} cm":
  "carrete r = {#} cm",
"<a>Rotation and angular momentum</a>":
  "<a>Rotación y momento angular</a>",
"<a><span>←</span> <span>Rotation and Torque</span></a><a><span>Pendulums</span> <span>→</span></a>":
  "<a><span>←</span> <span>Rotación y torca</span></a><a><span>Péndulos</span> <span>→</span></a>",
"A solid disk, {#} kg and {#} cm in radius: I = ½MR².":
  "Un disco sólido de {#} kg y {#} cm de radio: I = ½MR².",
"Capture at least two drops (different m or r) with this load: disk.":
  "Captura al menos dos caídas (con m o r distintos) con esta carga: disco.",
"A ring with the same mass and outer radius as the disk, but its mass far from the axis: I = ½M(R₁² + R₂²), nearly twice the disk.":
  "Un anillo con la misma masa y el mismo radio exterior que el disco, pero con su masa lejos del eje: I = ½M(R₁² + R₂²), casi el doble que el disco.",
"Capture at least two drops (different m or r) with this load: ring.":
  "Captura al menos dos caídas (con m o r distintos) con esta carga: anillo.",
"Two {#} kg masses at equal distances from the axis: I grows as d². Slide them out and time the drop again.":
  "Dos masas de {#} kg a distancias iguales del eje: I crece como d². Deslízalas hacia afuera y vuelve a medir el tiempo de la caída.",
"Capture at least two drops (different m or r) with this load: pair at {#} cm.":
  "Captura al menos dos caídas (con m o r distintos) con esta carga: par a {#} cm.",
"An unknown object. Measure the table with and without it and subtract.":
  "Un objeto desconocido. Mide la plataforma con él y sin él, y resta.",
"I, accelerations, tension and energy":
  "I, aceleraciones, tensión y energía",
"hidden: work them out from your timings":
  "ocultos: calcúlalos a partir de tus tiempos",
"Capture at least two drops (different m or r) with this load: mystery.":
  "Captura al menos dos caídas (con m o r distintos) con esta carga: misterio.",
"Release and let the mass fall the full {#} m first.":
  "Suelta primero y deja que la masa caiga los {#} m completos.",
"hanger {#} g + {#} g + {#} g = {#} g":
  "portapesas {#} g + {#} g + {#} g = {#} g",
"hanger {#} g = {#} g":
  "portapesas {#} g = {#} g",
"hidden for the Mystery object":
  "oculto para el objeto misterioso"
});
