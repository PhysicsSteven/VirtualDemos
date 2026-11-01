/* notes/induced-electric-field in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'notes/induced-electric-field', {
"Induced Electric Fields: teaching notes":
  "Campos eléctricos inducidos: notas para el docente",
"Induced Electric Fields":
  "Campos eléctricos inducidos",
"A changing magnetic flux makes an electric field, whether or not a wire is there. The EMF in a loop is the work per charge this field does around it: ε = ∮E·dl = −dΦ/dt (OpenStax Eq. {#}).":
  "Un flujo magnético que cambia produce un campo eléctrico, haya o no un alambre. La fem en una espira es el trabajo por unidad de carga que hace este campo a lo largo de ella: ε = ∮E·dl = −dΦ/dt (Ec. {#} de OpenStax).",
"Around a long solenoid the induced field circles the axis. It grows as r inside, E = (r/{#})|dB/dt|, and falls as {#}/r outside, E = (R²/2r)|dB/dt|, even though B = {#} outside (OpenStax Example {#}).":
  "Alrededor de un solenoide largo el campo inducido circula alrededor del eje. Crece como r dentro, E = (r/{#})|dB/dt|, y disminuye como {#}/r fuera, E = (R²/2r)|dB/dt|, aunque B = {#} fuera (Ejemplo {#} de OpenStax).",
"The induced field is not conservative: ∮E·dl is not zero around a path that encloses changing flux, so it has no electric potential. Around a path that encloses no flux, ∮E·dl = {#} even though E is not zero on it.":
  "El campo inducido no es conservativo: ∮E·dl no es cero a lo largo de una trayectoria que encierra un flujo que cambia, así que no tiene potencial eléctrico. A lo largo de una trayectoria que no encierra flujo, ∮E·dl = {#} aunque E no sea cero sobre ella.",
"What matters is the rate of change: a steady current gives no induced field at all, however large B is.":
  "Lo que importa es la rapidez de cambio: una corriente constante no da ningún campo inducido, por grande que sea B.",
"Students need Faraday's law with flux and Lenz's law. <strong>Blind</strong> hides the field arrows, the E graph, E on the path and ∮E·dl.":
  "Los estudiantes necesitan la ley de Faraday con flujo y la ley de Lenz. <strong>A ciegas</strong> oculta las flechas del campo, la gráfica de E, E sobre la trayectoria y ∮E·dl.",
"<strong>Example {#}, path outside.</strong> Pause at t = {#}. B is out of the page and falling at {#} T/s. Ask: is there an electric field on the path, where B = {#}? Turn Blind off: E = {#} mV/m counterclockwise, and ∮E·dl = {#} mV = −dΦ/dt.":
  "<strong>Ejemplo {#}, trayectoria afuera.</strong> Pausa en t = {#}. B apunta hacia afuera de la página y disminuye a {#} T/s. Pregunta: ¿hay un campo eléctrico sobre la trayectoria, donde B = {#}? Desactiva A ciegas: E = {#} mV/m en sentido antihorario, y ∮E·dl = {#} mV = −dΦ/dt.",
"<strong>Make the path a copper ring.</strong> The same field now drives charges around the ring. Lenz: the induced current is counterclockwise, the same way as the solenoid's own (falling) current.":
  "<strong>Convertir la trayectoria en un anillo de cobre.</strong> El mismo campo impulsa ahora cargas alrededor del anillo. Lenz: la corriente inducida va en sentido antihorario, en el mismo sentido que la corriente propia del solenoide (que disminuye).",
"<strong>Path inside.</strong> E is smaller nearer the axis. Drag the path's radius through R and watch the E graph: a peak at R.":
  "<strong>Trayectoria adentro.</strong> E es menor cerca del eje. Arrastra el radio de la trayectoria a través de R y observa la gráfica de E: un pico en R.",
"<strong>Path off to the side.</strong> E on the path is clearly not zero, yet ∮E·dl = {#}: no flux is enclosed.":
  "<strong>Trayectoria a un lado.</strong> E sobre la trayectoria claramente no es cero, y sin embargo ∮E·dl = {#}: no se encierra flujo.",
"<strong>Path around part of it.</strong> ∮E·dl still matches −dΦ/dt for the enclosed flux. Drag the path around.":
  "<strong>Trayectoria alrededor de una parte.</strong> ∮E·dl sigue coincidiendo con −dΦ/dt para el flujo encerrado. Arrastra la trayectoria de un lado a otro.",
"<strong>Steady current, then alternating current.</strong> No E at all for steady current. With {#} Hz, E is largest when I passes through zero.":
  "<strong>Corriente constante, luego corriente alterna.</strong> Ningún E con corriente constante. Con {#} Hz, E es máximo cuando I pasa por cero.",
"<strong>Q1.</strong> A long solenoid of radius {#} cm with {#} turns per meter carries I = ({#} A)e^(−αt) with α = {#} s⁻¹. Find dB/dt inside at t = {#} and the induced field at {#} cm, {#} cm and {#} cm from the axis. Which way does it circle if B points out of the page?":
  "<strong>P1.</strong> Un solenoide largo de radio {#} cm con {#} vueltas por metro lleva I = ({#} A)e^(−αt) con α = {#} s⁻¹. Encuentra dB/dt dentro en t = {#} y el campo inducido a {#} cm, {#} cm y {#} cm del eje. ¿En qué sentido circula si B apunta hacia afuera de la página?",
"<strong>Q2.</strong> For the same solenoid at t = {#}, find the EMF around a circle of radius {#} cm and around a circle of radius {#} cm, both centered on the axis. Why are they equal, when E is smaller at {#} cm?":
  "<strong>P2.</strong> Para el mismo solenoide en t = {#}, encuentra la fem alrededor de un círculo de radio {#} cm y alrededor de un círculo de radio {#} cm, ambos centrados en el eje. ¿Por qué son iguales, si E es menor a {#} cm?",
"<strong>Q3.</strong> A circle of radius {#} cm lies entirely outside the solenoid. What is ∮E·dl around it? Is E zero on the circle? Reconcile your two answers.":
  "<strong>P3.</strong> Un círculo de radio {#} cm queda completamente fuera del solenoide. ¿Cuánto vale ∮E·dl alrededor de él? ¿Es E cero sobre el círculo? Concilia tus dos respuestas.",
"<strong>Q4.</strong> Explain why no electric potential V can be defined for the induced field around the solenoid. (Hint: what would V be after one trip around a circle enclosing the solenoid?)":
  "<strong>P4.</strong> Explica por qué no se puede definir un potencial eléctrico V para el campo inducido alrededor del solenoide. (Pista: ¿cuánto valdría V después de dar una vuelta alrededor de un círculo que encierra el solenoide?)",
"<strong>Q5.</strong> The solenoid now carries a {#} Hz current with amplitude {#} A. Find the largest induced field {#} cm from the axis. At what instants in a cycle is it largest, and at what instants is it zero?":
  "<strong>P5.</strong> El solenoide lleva ahora una corriente de {#} Hz con amplitud de {#} A. Encuentra el campo inducido máximo a {#} cm del eje. ¿En qué instantes de un ciclo es máximo, y en qué instantes es cero?",
"<strong>\"There is no field outside a solenoid, so nothing happens there.\"</strong> B is zero outside; the induced E is not.":
  "<strong>\"No hay campo fuera de un solenoide, así que ahí no pasa nada.\"</strong> B es cero fuera; el E inducido no.",
"<strong>\"The EMF needs a wire.\"</strong> The wire only lets the field push charges around; the field is there anyway.":
  "<strong>\"La fem necesita un alambre.\"</strong> El alambre solo permite que el campo empuje cargas a su alrededor; el campo está ahí de todos modos.",
"<strong>\"Induced E is like the field of charges.\"</strong> It has no charges as sources, its lines close on themselves, and ∮E·dl ≠ {#}.":
  "<strong>\"El E inducido es como el campo de las cargas.\"</strong> No tiene cargas como fuentes, sus líneas se cierran sobre sí mismas y ∮E·dl ≠ {#}.",
"<strong>\"Big B means big induced E.\"</strong> Only the rate of change of flux matters.":
  "<strong>\"Un B grande significa un E inducido grande.\"</strong> Solo importa la rapidez de cambio del flujo.",
"Ideal long solenoid: B = μ₀nI inside, zero outside, uniform inside at each instant (the current changes slowly enough that the solenoid's own radiation and retardation can be ignored).":
  "Solenoide largo ideal: B = μ₀nI dentro, cero fuera, uniforme dentro en cada instante (la corriente cambia lo bastante despacio como para ignorar la radiación propia del solenoide y el retardo).",
"E_φ = −(r/{#}) dB/dt for r < R and −(R²/2r) dB/dt for r > R, counterclockwise positive with B out of the page.":
  "E_φ = −(r/{#}) dB/dt para r < R y −(R²/2r) dB/dt para r > R, positivo en sentido antihorario con B hacia afuera de la página.",
"∮E·dl is added up numerically in {#} pieces around the path; Φ is B times the exact overlap area of the path and the solenoid. They agree to better than {#} part in {#}⁵ in the tests.":
  "∮E·dl se suma numéricamente en {#} pedazos alrededor de la trayectoria; Φ es B por el área exacta de traslape entre la trayectoria y el solenoide. Coinciden mejor que {#} parte en {#}⁵ en las pruebas.",
"The field of current induced in the ring and the ring's resistance are left out.":
  "Se omiten el campo de la corriente inducida en el anillo y la resistencia del anillo."
});
