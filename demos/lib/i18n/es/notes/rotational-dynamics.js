/* notes/rotational-dynamics in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'notes/rotational-dynamics', {
"Rotational Dynamics: teaching notes":
  "Dinámica de rotación: notas para el docente",
"Rotational Dynamics":
  "Dinámica de rotación",
"Torque gives angular acceleration the way force gives linear acceleration: τ_net = Iα.":
  "La torca produce aceleración angular de la misma manera que la fuerza produce aceleración lineal: τ_net = Iα.",
"The moment of inertia depends on where the mass is, not just how much: a ring of the same mass and radius as a disk has nearly twice its I, and two masses moved twice as far out have about four times their contribution.":
  "El momento de inercia depende de dónde está la masa, no solo de cuánta hay: un anillo con la misma masa y el mismo radio que un disco tiene casi el doble de I, y dos masas movidas al doble de distancia tienen unas cuatro veces su contribución.",
"A string that does not slip ties the two motions together: a = αr. The tension is less than the hanging weight, because the mass accelerates.":
  "Una cuerda que no resbala une los dos movimientos: a = αr. La tensión es menor que el peso que cuelga, porque la masa acelera.",
"Energy bookkeeping: the hanging mass's lost potential energy goes into the table's rotational kinetic energy, the mass's own kinetic energy and, with friction, work against the friction torque. The string delivers power Tv = τω.":
  "Balance de energía: la energía potencial que pierde la masa colgante se convierte en energía cinética de rotación de la plataforma, en la energía cinética de la propia masa y, con fricción, en trabajo contra la torca de fricción. La cuerda entrega una potencia Tv = τω.",
"Students need τ = rF, I for a disk and a hoop, and the rolling constraint a = αr. The demo opens in 3D: a turntable on a bench, the string running from the spool over a pulley at the bench edge, and the mass falling beside a meter stick with the two marks {#} m apart (drag to turn the view, scroll or pinch to zoom, double click to reset). The <strong>Flat</strong> button, or":
  "Los estudiantes necesitan τ = rF, la I de un disco y de un aro, y la restricción de rodadura a = αr. La demo abre en 3D: una plataforma giratoria sobre una mesa de trabajo, la cuerda que va del carrete a una polea en el borde de la mesa, y la masa que cae junto a una regla de un metro con las dos marcas a {#} m una de otra (arrastra para girar la vista, usa la rueda o pellizca para acercar, doble clic para reiniciar). El botón <strong>Plano</strong>, o",
", gives the older drawing, with the turntable seen from above and the falling mass from the side; it also opens on devices that ask to save data or lack WebGL. The timer stops when the mass has fallen {#} m. Bearing friction adds a constant {#} × {#}⁻⁴ N·m torque against the motion. The <strong>Mystery object</strong> always hides its I; <strong>Blind</strong> hides every I, the accelerations, the tension and the energies.":
  ", da el dibujo anterior, con la plataforma vista desde arriba y la masa que cae vista de lado; también se abre en dispositivos que piden ahorrar datos o que no tienen WebGL. El cronómetro se detiene cuando la masa ha caído {#} m. La fricción de los rodamientos agrega una torca constante de {#} × {#}⁻⁴ N·m en contra del movimiento. El <strong>Objeto misterioso</strong> siempre oculta su I; <strong>A ciegas</strong> oculta todas las I, las aceleraciones, la tensión y las energías.",
"<strong>Empty table.</strong> {#} g, {#} cm spool: the drop takes {#} s. Ask for α from the timing before showing it: a = 2h/t² = {#} m/s², α = a/r = {#} rad/s².":
  "<strong>Plataforma vacía.</strong> {#} g, carrete de {#} cm: la caída tarda {#} s. Pide α a partir del tiempo antes de mostrarla: a = 2h/t² = {#} m/s², α = a/r = {#} rad/s².",
"<strong>Disk vs ring.</strong> Same mass, same outer radius, both {#} kg and {#} cm. Ask which is slower first. Disk: {#} s. Ring: {#} s.":
  "<strong>Disco contra anillo.</strong> La misma masa, el mismo radio exterior, ambos de {#} kg y {#} cm. Pregunta primero cuál es más lento. Disco: {#} s. Anillo: {#} s.",
"<strong>Two masses.</strong> Slide them from {#} cm to {#} cm to {#} cm: {#}, {#}, {#} s. The I they add grows as d².":
  "<strong>Dos masas.</strong> Deslízalas de {#} cm a {#} cm a {#} cm: {#}, {#}, {#} s. La I que agregan crece como d².",
"<strong>Tension.</strong> On the disk run T = {#} N against mg = {#} N. The difference is small because a is small, but it is not zero.":
  "<strong>Tensión.</strong> En la corrida del disco T = {#} N contra mg = {#} N. La diferencia es pequeña porque a es pequeña, pero no es cero.",
"<strong>Energy.</strong> At the end of the disk drop, mgh = {#} mJ; the table has {#} mJ and the mass only {#} mJ.":
  "<strong>Energía.</strong> Al final de la caída con el disco, mgh = {#} mJ; la plataforma tiene {#} mJ y la masa solo {#} mJ.",
"<strong>Lab.</strong> With friction on, capture several drops with one load at different m and r, and fit τ against α. The slope is I, the intercept the friction torque. Subtract the empty table's I to get the load's.":
  "<strong>Laboratorio.</strong> Con la fricción activada, captura varias caídas con una misma carga a distintas m y r, y ajusta τ en función de α. La pendiente es I, la ordenada al origen la torca de fricción. Resta la I de la plataforma vacía para obtener la de la carga.",
"<strong>Q1.</strong> On the empty table with m = {#} g and r = {#} cm the drop takes {#} s. Find a, α, the tension and the turntable's moment of inertia (ignore friction).":
  "<strong>Q1.</strong> En la plataforma vacía con m = {#} g y r = {#} cm la caída tarda {#} s. Encuentra a, α, la tensión y el momento de inercia de la plataforma (ignora la fricción).",
"<strong>Q2.</strong> Predict whether the disk or the ring (same mass and outer radius) reaches the floor first, and explain. Then estimate the ratio of their drop times.":
  "<strong>Q2.</strong> Predice si el disco o el anillo (misma masa y mismo radio exterior) llega primero al piso, y explica por qué. Luego estima la razón de sus tiempos de caída.",
"<strong>Q3.</strong> The two {#} kg masses go from {#} cm to {#} cm from the axis. By what factor does their contribution to I grow? Why does the drop time not double?":
  "<strong>Q3.</strong> Las dos masas de {#} kg pasan de {#} cm a {#} cm del eje. ¿Por qué factor crece su contribución a I? ¿Por qué el tiempo de caída no se duplica?",
"<strong>Q4.</strong> In the disk run, where does the {#} mJ of lost gravitational energy go? Why is so little of it in the falling mass?":
  "<strong>Q4.</strong> En la corrida del disco, ¿adónde van los {#} mJ de energía gravitacional perdida? ¿Por qué tan poca está en la masa que cae?",
"<strong>Q5 (lab).</strong> Show that for one load τ = m(g − a)r plotted against α = a/r is a straight line with slope I and intercept τ_f. Use it to find the Mystery object's I, and say how big an error you would make from a single drop if you ignored friction.":
  "<strong>Q5 (laboratorio).</strong> Muestra que, para una misma carga, τ = m(g − a)r graficada en función de α = a/r es una recta con pendiente I y ordenada al origen τ_f. Úsala para encontrar la I del Objeto misterioso, y di qué tan grande sería el error con una sola caída si ignoraras la fricción.",
"<strong>\"The tension equals the hanging weight.\"</strong> Only if nothing accelerates. Here T = m(g − a).":
  "<strong>\"La tensión es igual al peso que cuelga.\"</strong> Solo si nada acelera. Aquí T = m(g − a).",
"<strong>\"Same mass, same I.\"</strong> I depends on how far the mass sits from the axis; the ring beats the disk.":
  "<strong>\"Misma masa, misma I.\"</strong> I depende de qué tan lejos del eje está la masa; el anillo le gana al disco.",
"<strong>\"Doubling the distance doubles I.\"</strong> Each point mass contributes md²; doubling d quadruples that part (the table's own I and the masses' own ½mρ² do not change).":
  "<strong>\"Duplicar la distancia duplica I.\"</strong> Cada masa puntual contribuye md²; duplicar d cuadruplica esa parte (la I propia de la plataforma y el ½mρ² propio de las masas no cambian).",
"<strong>\"A heavier hanging mass just makes it faster in proportion.\"</strong> a = mgr²/(I + mr²): nearly proportional to m while mr² ≪ I, but not exactly.":
  "<strong>\"Una masa colgante más pesada solo lo hace más rápido en proporción.\"</strong> a = mgr²/(I + mr²): casi proporcional a m mientras mr² ≪ I, pero no exactamente.",
"Newton for the mass, mg − T = ma, and for the table, Tr − τ_f = Iα, with a = αr: a = (mgr − τ_f) r/(I + mr²), constant, so the drop takes t = √(2h/a). If mgr ≤ τ_f the table does not turn.":
  "Newton para la masa, mg − T = ma, y para la plataforma, Tr − τ_f = Iα, con a = αr: a = (mgr − τ_f) r/(I + mr²), constante, así que la caída tarda t = √(2h/a). Si mgr ≤ τ_f la plataforma no gira.",
"Turntable I₀ = {#} × {#}⁻³ kg·m². Disk ½MR² = {#} × {#}⁻³ kg·m²; ring ½M(R₁² + R₂²) = {#} × {#}⁻³ kg·m² (radii {#} and {#} cm); each of the two masses adds md² + ½mρ² with ρ = {#} cm (parallel axis).":
  "Plataforma I₀ = {#} × {#}⁻³ kg·m². Disco ½MR² = {#} × {#}⁻³ kg·m²; anillo ½M(R₁² + R₂²) = {#} × {#}⁻³ kg·m² (radios de {#} y {#} cm); cada una de las dos masas agrega md² + ½mρ² con ρ = {#} cm (ejes paralelos).",
"String massless and not slipping, pulley massless and frictionless; the only friction is the constant bearing torque.":
  "Cuerda sin masa y que no resbala, polea sin masa y sin fricción; la única fricción es la torca constante de los rodamientos.",
"The timer reads the exact drop time rounded to {#} s; there is no added noise. With friction on, ignoring it in a single drop makes I about {#}% too large for the disk at {#} g on {#} cm ({#} against {#} × {#}⁻³ kg·m²); the τ against α fit separates the two.":
  "El cronómetro marca el tiempo exacto de caída redondeado a {#} s; no se agrega ruido. Con la fricción activada, ignorarla en una sola caída hace que I sea un {#}% demasiado grande para el disco con {#} g en {#} cm ({#} contra {#} × {#}⁻³ kg·m²); el ajuste de τ en función de α separa las dos.",
"Energy readout: mgy = ½mv² + ½Iω² + τ_f θ, with θ = y/r.":
  "Lectura de energía: mgy = ½mv² + ½Iω² + τ_f θ, con θ = y/r."
});
