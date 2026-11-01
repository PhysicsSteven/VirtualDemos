/* notes/rocket in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'notes/rocket', {
"Rocket Propulsion: teaching notes":
  "Propulsión de cohetes: notas para el docente",
"Rocket Propulsion":
  "Propulsión de cohetes",
"A rocket pushes exhaust backward and the exhaust pushes the rocket forward; no ground or air is needed. Thrust = u × (burn rate).":
  "Un cohete empuja los gases de escape hacia atrás y los gases empujan al cohete hacia adelante; no se necesita suelo ni aire. Empuje = u × (tasa de combustión).",
"As fuel burns the rocket gets lighter, so the same thrust gives more and more acceleration.":
  "Al quemarse el combustible el cohete se vuelve más ligero, así que el mismo empuje da cada vez más aceleración.",
"In empty space Δv = u ln(m₀/m), whatever the burn rate. The final speed can exceed the exhaust speed.":
  "En el espacio vacío Δv = u ln(m₀/m), sea cual sea la tasa de combustión. La rapidez final puede superar la rapidez de escape.",
"Against gravity, every second of burning costs g × ({#} s) of speed: burn fast, and lift off promptly.":
  "Contra la gravedad, cada segundo de combustión cuesta g × ({#} s) de rapidez: quema rápido y despega pronto.",
"<strong>In deep space.</strong> {#} {#} kg with {#} kg of fuel, u = {#} m/s: Δv = {#} ln {#} = {#} m/s, more than twice the exhaust speed. Change the burn rate: the final speed does not change.":
  "<strong>En el espacio profundo.</strong> {#} {#} kg con {#} kg de combustible, u = {#} m/s: Δv = {#} ln {#} = {#} m/s, más del doble de la rapidez de escape. Cambia la tasa de combustión: la rapidez final no cambia.",
"<strong>Launch from the ground.</strong> Thrust {#} kN against a {#} kN weight. Burnout speed {#} m/s: {#} m/s lost to gravity in the {#} s burn.":
  "<strong>Lanzamiento desde el suelo.</strong> Empuje de {#} kN contra un peso de {#} kN. Rapidez al fin de la combustión {#} m/s: {#} m/s perdidos por la gravedad en los {#} s de combustión.",
"<strong>Too heavy at first.</strong> Thrust {#} kN is less than the {#} kN launch weight: it burns fuel on the pad for {#} s before lifting off.":
  "<strong>Demasiado pesado al principio.</strong> El empuje de {#} kN es menor que el peso de {#} kN al lanzar: quema combustible en la plataforma durante {#} s antes de despegar.",
"<strong>Same fuel, burned slowly.</strong> {#} s instead of {#} s: burnout at {#} m/s, {#} m/s lost to gravity.":
  "<strong>El mismo combustible, quemado lentamente.</strong> {#} s en lugar de {#} s: fin de la combustión a {#} m/s, {#} m/s perdidos por la gravedad.",
"<strong>Two stage rocket.</strong> {#} {#} kg at launch: a first stage of {#} kg fuel in a {#} kg casing, under an upper stage of {#} kg fuel and {#} kg dry. The casing drops at {#} s ({#} m/s, {#} km) and the upper stage burns out at {#} s at {#} m/s. The same masses in one stage, carrying the empty casing to the end, reach only {#} m/s. Without gravity: u ln({#}/{#}) + u ln {#} = {#} m/s against u ln({#}) = {#} m/s.":
  "<strong>Cohete de dos etapas.</strong> {#} {#} kg al lanzar: una primera etapa de {#} kg de combustible en una carcasa de {#} kg, bajo una etapa superior de {#} kg de combustible y {#} kg en seco. La carcasa se suelta a los {#} s ({#} m/s, {#} km) y la etapa superior termina su combustión a los {#} s a {#} m/s. Las mismas masas en una sola etapa, cargando la carcasa vacía hasta el final, llegan solo a {#} m/s. Sin gravedad: u ln({#}/{#}) + u ln {#} = {#} m/s frente a u ln({#}) = {#} m/s.",
"<strong>Q1.</strong> Why can a rocket accelerate in empty space, where there is nothing to push against?":
  "<strong>P1.</strong> ¿Por qué puede acelerar un cohete en el espacio vacío, donde no hay nada contra qué empujar?",
"<strong>Q2.</strong> Use Δv = u ln(m₀/m) to find the final speed in deep space for the default rocket. How much fuel would double that Δv?":
  "<strong>P2.</strong> Usa Δv = u ln(m₀/m) para encontrar la rapidez final en el espacio profundo del cohete predeterminado. ¿Cuánto combustible duplicaría esa Δv?",
"<strong>Q3.</strong> For the launch from the ground, explain why the burnout speed is lower than the rocket equation says, and by how much.":
  "<strong>P3.</strong> Para el lanzamiento desde el suelo, explica por qué la rapidez al fin de la combustión es menor que la que da la ecuación del cohete, y por cuánto.",
"<strong>Q4.</strong> Two identical rockets burn the same fuel, one in {#} s and one in {#} s. Which ends up faster, and why? Why is waiting on the pad (Too heavy at first) wasteful?":
  "<strong>P4.</strong> Dos cohetes idénticos queman el mismo combustible, uno en {#} s y otro en {#} s. ¿Cuál termina más rápido, y por qué? ¿Por qué esperar en la plataforma (Demasiado pesado al principio) es un desperdicio?",
"<strong>\"The exhaust pushes on the air or the ground.\"</strong> It pushes on the rocket from inside.":
  "<strong>\"Los gases de escape empujan contra el aire o el suelo.\"</strong> Empujan al cohete desde dentro.",
"<strong>\"A rocket can't go faster than its exhaust.\"</strong> Δv = u ln(m₀/m) exceeds u once m₀/m > e.":
  "<strong>\"Un cohete no puede ir más rápido que sus gases de escape.\"</strong> Δv = u ln(m₀/m) supera a u en cuanto m₀/m > e.",
"<strong>\"Burning faster or slower gives the same speed.\"</strong> Only without gravity.":
  "<strong>\"Quemar más rápido o más lento da la misma rapidez.\"</strong> Solo sin gravedad.",
"Variable mass: m dv/dt = u b − mg (b = burn rate), exact solution v = u ln(m₁/m) − g(t − t₀) after lift off at t₀, height from its integral, coasting after burnout.":
  "Masa variable: m dv/dt = u b − mg (b = tasa de combustión), solución exacta v = u ln(m₁/m) − g(t − t₀) después del despegue en t₀, altura a partir de su integral, vuelo libre después del fin de la combustión.",
"Two stages: both stages have the same engine (u and burn rate). Each burn is solved exactly from the speed and height it starts with; the casing is let go the moment the first stage's fuel runs out and the upper stage fires at once. The casing then coasts with no air.":
  "Dos etapas: ambas etapas tienen el mismo motor (u y tasa de combustión). Cada combustión se resuelve exactamente a partir de la rapidez y la altura con que empieza; la carcasa se suelta en el momento en que se acaba el combustible de la primera etapa y la etapa superior se enciende de inmediato. Luego la carcasa sigue en vuelo libre sin aire.",
"Constant g = {#} m/s² and no air drag. At hundreds of kilometers gravity is noticeably weaker, so the highest point shown is a rough figure (the readout says so).":
  "g constante = {#} m/s² y sin resistencia del aire. A cientos de kilómetros la gravedad es notablemente más débil, así que el punto más alto mostrado es una cifra aproximada (la lectura lo indica).",
"The animation is sped up so a flight takes about {#} s; the clock shows real time.":
  "La animación está acelerada para que un vuelo dure unos {#} s; el reloj muestra el tiempo real."
});
