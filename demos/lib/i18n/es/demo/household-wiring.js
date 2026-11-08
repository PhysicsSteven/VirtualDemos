/* demo/household-wiring in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'demo/household-wiring', {
"PANEL":
  "PANEL",
"{#} A breaker: on":
  "interruptor de {#} A: encendido",
"neutral and ground bonded, earthed":
  "neutro y tierra unidos, conectados a tierra",
"{#} m of {#} gauge copper in the wall":
  "{#} m de cobre calibre {#} en la pared",
"hot":
  "fase",
"neutral":
  "neutro",
"ground":
  "tierra",
"on the hot wire":
  "en el cable de fase",
"hot minus neutral":
  "fase menos neutro",
"Lamp":
  "Lámpara",
"hot {#} mA":
  "fase {#} mA",
"Household Wiring and Electrical Safety":
  "Instalación eléctrica doméstica y seguridad eléctrica",
"One {#} V branch circuit from the panel to a kitchen outlet: hot, neutral and ground wires, a circuit breaker, and a GFCI. Overload it, short it, or let a worn cord touch a metal case, and see which device protects the wires and which protects the person.":
  "Un circuito derivado de {#} V desde el tablero hasta un contacto de cocina: cables de fase, neutro y tierra, un interruptor termomagnético y un GFCI. Sobrecárgalo, ponlo en cortocircuito o deja que un cable gastado toque una carcasa metálica, y observa qué dispositivo protege los cables y cuál protege a la persona.",
"{#} V rms, {#} Hz":
  "{#} V rms, {#} Hz",
"A wall cut open, with the service panel on the left and three wires, hot, neutral and ground, running to an outlet over a kitchen counter with appliances. A person may stand beside the toaster.":
  "Una pared abierta, con el tablero de servicio a la izquierda y tres cables, fase, neutro y tierra, que van hasta un contacto sobre una barra de cocina con aparatos. Puede haber una persona de pie junto al tostador.",
"A lamp":
  "Una lámpara",
"Toaster and kettle":
  "Tostador y hervidor",
"Short circuit":
  "Cortocircuito",
"Worn cord, grounded case":
  "Cable gastado, carcasa aterrizada",
"No ground, dry hand":
  "Sin tierra, mano seca",
"No ground, wet hand":
  "Sin tierra, mano mojada",
"One {#} W lamp: under {#} A. Hot and neutral carry the same current, the ground wire carries none. Add appliances and watch the current add up: they are in parallel.":
  "Una lámpara de {#} W: menos de {#} A. La fase y el neutro llevan la misma corriente, el cable de tierra no lleva nada. Agrega aparatos y observa cómo se suma la corriente: están en paralelo.",
"Appliances ({#} V ratings)":
  "Aparatos (valores nominales a {#} V)",
"Lamp {#} W":
  "Lámpara {#} W",
"Toaster {#} W":
  "Tostador {#} W",
"Kettle {#} W":
  "Hervidor {#} W",
"Space heater {#} W":
  "Calefactor {#} W",
"Wiring":
  "Cableado",
"<span>Copper wire</span>":
  "<span>Cable de cobre</span>",
"Wire gauge":
  "Calibre del cable",
"{#} gauge":
  "calibre {#}",
"<span>Breaker</span>":
  "<span>Interruptor</span>",
"Breaker rating":
  "Capacidad del interruptor",
"Wire run, panel to outlet":
  "Tramo de cable, del tablero al contacto",
"<span>GFCI outlet</span>":
  "<span>Contacto con GFCI</span>",
"<span>Ground wire connected</span>":
  "<span>Cable de tierra conectado</span>",
"Faults and people":
  "Fallas y personas",
"Fault":
  "Falla",
"No fault":
  "Sin falla",
"Hot touches neutral":
  "La fase toca el neutro",
"Hot touches the toaster case":
  "La fase toca la carcasa del tostador",
"<span>Person touches the toaster case</span>":
  "<span>Una persona toca la carcasa del tostador</span>",
"<span>Skin</span>":
  "<span>Piel</span>",
"Skin":
  "Piel",
"Dry, {#} kΩ":
  "Seca, {#} kΩ",
"Wet, {#} kΩ":
  "Mojada, {#} kΩ",
"Reset the breaker and GFCI":
  "Restablecer el interruptor y el GFCI",
"Protection":
  "Protección",
"closed":
  "cerrado",
"Current in the hot wire":
  "Corriente en el cable de fase",
"Current in the neutral":
  "Corriente en el neutro",
"Hot minus neutral (what a GFCI sees)":
  "Fase menos neutro (lo que ve un GFCI)",
"Current in the ground wire":
  "Corriente en el cable de tierra",
"Voltage at the outlet":
  "Voltaje en el contacto",
"Power to the appliances":
  "Potencia a los aparatos",
"Heat in the hot wire, per meter":
  "Calor en el cable de fase, por metro",
"Wire resistance, one way":
  "Resistencia del cable, en un sentido",
"{#} mΩ":
  "{#} mΩ",
"Blind hides the currents, the effect on the person and whether the protection will act, until a device actually trips. Predict first: will the breaker trip? The GFCI? What does the person feel?":
  "A ciegas oculta las corrientes, el efecto sobre la persona y si la protección actuará, hasta que un dispositivo realmente se dispare. Predice primero: ¿se disparará el interruptor? ¿Y el GFCI? ¿Qué siente la persona?",
"Model: all four appliances are resistors, R = ({#} V)²/P from their ratings (a lamp filament's resistance is lower when cold; that is left out). With only resistors the rms currents follow Ohm's and Kirchhoff's rules exactly, solved for the whole circuit including the copper wires (ρ = {#} × {#}⁻⁸ Ω·m at {#} °C; {#} gauge is {#} mm across, {#} gauge {#} mm). The source is an ideal {#} V; the neutral and ground are bonded together at the panel. A fault contact is {#} Ω (a chosen value). The person's resistance is hand to feet including the skin, {#} kΩ dry or {#} kΩ wet (OpenStax §{#}), and the floor and earth path back to the panel is taken as zero, which makes the shock current as large as it can be. Effects of current (OpenStax §{#}): sensation from {#} mA; apparently harmless below {#} mA; sustained muscle contraction from {#} to {#} mA; pain from {#} mA; ventricular fibrillation, often fatal, from {#} to {#} mA. The breaker trips at once above {#} times its rating (magnetic trip) and after {#} s of any lesser overload (a chosen delay: real breakers carry a modest overload for seconds to minutes). The GFCI trips when the hot and neutral currents differ by more than {#} mA (OpenStax). Charges in an AC circuit move back and forth; the dots are drawn swinging, slowed down, with a swing that grows with the current. The picture: the wall is cut open along the cable (studs, panel and receptacle not to scale). The two clamp meters show the same rms currents as the readouts, one around the hot wire and one around hot and neutral together, which reads their difference as a GFCI does. A wire reddens when its current is above its rating, {#} A for {#} gauge and {#} A for {#} gauge copper (NEC {#}(D)), growing with I² up to twice the rating; the tint shows the overload, not a temperature. Blind hides the meters and the tint.":
  "Modelo: los cuatro aparatos son resistores, R = ({#} V)²/P según sus valores nominales (la resistencia del filamento de una lámpara es menor en frío; eso se omite). Con solo resistores las corrientes rms siguen exactamente las reglas de Ohm y de Kirchhoff, resueltas para todo el circuito incluyendo los cables de cobre (ρ = {#} × {#}⁻⁸ Ω·m a {#} °C; el calibre {#} mide {#} mm de diámetro, el calibre {#} {#} mm). La fuente es ideal de {#} V; el neutro y la tierra están unidos en el tablero. Un contacto de falla es de {#} Ω (un valor elegido). La resistencia de la persona es de la mano a los pies incluyendo la piel, {#} kΩ seca o {#} kΩ mojada (OpenStax §{#}), y el camino por el piso y la tierra de regreso al tablero se toma como cero, lo que hace la corriente de descarga tan grande como puede ser. Efectos de la corriente (OpenStax §{#}): sensación desde {#} mA; aparentemente inofensiva por debajo de {#} mA; contracción muscular sostenida de {#} a {#} mA; dolor desde {#} mA; fibrilación ventricular, a menudo mortal, de {#} a {#} mA. El interruptor se dispara de inmediato por encima de {#} veces su capacidad (disparo magnético) y después de {#} s de cualquier sobrecarga menor (un retardo elegido: los interruptores reales soportan una sobrecarga moderada durante segundos o minutos). El GFCI se dispara cuando las corrientes de fase y neutro difieren en más de {#} mA (OpenStax). Las cargas en un circuito de CA van y vienen; los puntos se dibujan oscilando, más despacio, con una oscilación que crece con la corriente. La imagen: la pared está abierta a lo largo del cable (montantes, tablero y receptáculo no a escala). Los dos amperímetros de gancho muestran las mismas corrientes rms que las lecturas, uno alrededor del cable de fase y otro alrededor de fase y neutro juntos, que lee su diferencia como lo hace un GFCI. Un cable se enrojece cuando su corriente supera su capacidad, {#} A para cobre calibre {#} y {#} A para calibre {#} (NEC {#}(D)), y crece con I² hasta el doble de la capacidad; el tinte muestra la sobrecarga, no una temperatura. A ciegas oculta los medidores y el tinte.",
"<a>DC circuits</a>":
  "<a>Circuitos de CD</a>",
"<a><span>←</span> <span>Resistivity of a Wire</span></a><a><span>Magnetic Fields of Currents</span> <span>→</span></a>":
  "<a><span>←</span> <span>Resistividad de un alambre</span></a><a><span>Campos magnéticos de corrientes</span> <span>→</span></a>",
"Hot (A)":
  "Fase (A)",
"Outlet (V)":
  "Contacto (V)",
"Toaster":
  "Tostador",
"Kettle":
  "Hervidor",
"hot {#} A":
  "fase {#} A",
"Toaster and kettle together draw {#} W, about {#} A, on a {#} A circuit. Nothing is faulty, but the wires would overheat; the breaker trips after a delay. Try {#} gauge wire on a {#} A breaker, or a {#} A breaker on {#} gauge wire (do not do this at home: the breaker no longer protects the wire).":
  "El tostador y el hervidor juntos consumen {#} W, unos {#} A, en un circuito de {#} A. Nada está dañado, pero los cables se sobrecalentarían; el interruptor se dispara después de un retardo. Prueba cable calibre {#} con un interruptor de {#} A, o un interruptor de {#} A con cable calibre {#} (no lo hagas en casa: el interruptor ya no protege el cable).",
"overloaded for {#} s":
  "sobrecargado durante {#} s",
"{#} A breaker: tripped":
  "interruptor de {#} A: disparado",
"hot touches neutral":
  "la fase toca el neutro",
"Power off: breaker (magnetic, at once)":
  "Sin energía: interruptor (magnético, de inmediato)",
"Worn insulation lets hot touch neutral: only the wires limit the current, hundreds of amperes. P = V²/r is enormous; the breaker trips at once (magnetic trip).":
  "El aislamiento gastado deja que la fase toque el neutro: solo los cables limitan la corriente, cientos de amperes. P = V²/r es enorme; el interruptor se dispara de inmediato (disparo magnético).",
"tripped: breaker (magnetic, at once)":
  "disparado: interruptor (magnético, de inmediato)",
"Hot current when it tripped":
  "Corriente de fase cuando se disparó",
"Hot minus neutral when it tripped":
  "Fase menos neutro cuando se disparó",
"worn cord: hot touches the case":
  "cable gastado: la fase toca la carcasa",
"through the person: {#} A":
  "a través de la persona: {#} A",
"Hot touches the metal case, but the ground wire connects the case to the panel. A huge current runs through the ground wire and the breaker trips at once. The person touching the case is in parallel with a nearly zero resistance path and feels almost nothing.":
  "La fase toca la carcasa metálica, pero el cable de tierra conecta la carcasa al tablero. Una corriente enorme pasa por el cable de tierra y el interruptor se dispara de inmediato. La persona que toca la carcasa está en paralelo con un camino de resistencia casi nula y no siente casi nada.",
"Current through the person":
  "Corriente a través de la persona",
"Effect":
  "Efecto",
"below the threshold of sensation ({#} mA)":
  "por debajo del umbral de sensación ({#} mA)",
"ground (broken)":
  "tierra (rota)",
"through the person: {#} µA":
  "a través de la persona: {#} µA",
"The ground wire is broken (or a two prong adapter is used). The case sits at {#} V and the only path to ground is the person. Dry skin: {#} mA, as in the OpenStax example. The breaker never notices.":
  "El cable de tierra está roto (o se usa un adaptador de dos patas). La carcasa está a {#} V y el único camino a tierra es la persona. Piel seca: {#} mA, como en el ejemplo de OpenStax. El interruptor nunca se entera.",
"through the person: {#} mA":
  "a través de la persona: {#} mA",
"Same fault with a wet hand: {#} mA, above the let go threshold, and the {#} A breaker still does nothing. Turn on the GFCI: it sees {#} mA missing from the neutral and trips.":
  "La misma falla con la mano mojada: {#} mA, por encima del umbral para poder soltarse, y el interruptor de {#} A sigue sin hacer nada. Activa el GFCI: ve que faltan {#} mA en el neutro y se dispara.",
"a shock you feel; sustained muscle contraction starts at {#} to {#} mA":
  "una descarga que se siente; la contracción muscular sostenida empieza entre {#} y {#} mA",
"sustained muscle contraction: may not be able to let go ({#} to {#} mA and above)":
  "contracción muscular sostenida: puede que no logre soltarse (de {#} a {#} mA y más)",
"painful (pain starts near {#} mA) and the muscles stay locked":
  "dolorosa (el dolor empieza cerca de {#} mA) y los músculos siguen bloqueados",
"ventricular fibrillation possible, often fatal ({#} to {#} mA and above)":
  "posible fibrilación ventricular, a menudo mortal (de {#} a {#} mA y más)",
"Space heater":
  "Calefactor",
"Power off: breaker (thermal, after {#} s of overload)":
  "Sin energía: interruptor (térmico, después de {#} s de sobrecarga)",
"tripped: breaker (thermal, after {#} s of overload)":
  "disparado: interruptor (térmico, después de {#} s de sobrecarga)",
"hot − neutral":
  "fase − neutro",
"worn cord":
  "cable gastado"
});
