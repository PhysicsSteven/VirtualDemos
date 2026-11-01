/* demo/energy-track in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'demo/energy-track', {
"new point":
  "punto nuevo",
"bin":
  "basura",
"t (s), last {#} s":
  "t (s), últimos {#} s",
"Kinetic K":
  "Cinética K",
"Potential U":
  "Potencial U",
"Thermal":
  "Térmica",
"Total":
  "Total",
"Energy on a Track":
  "Energía en una pista",
"Shape a track, let a skater go, and watch kinetic, potential and thermal energy trade places while the total stays fixed. Add friction, loops and jumps; see where the skater leaves the track.":
  "Dale forma a una pista, suelta a un patinador y observa cómo la energía cinética, la potencial y la térmica intercambian lugares mientras el total se mantiene fijo. Agrega fricción, rizos y saltos; observa dónde se sale el patinador de la pista.",
"Return skater":
  "Regresar al patinador",
"The skate park: a track with round grips at its points, the skater, the ground and two walls {#} m apart. Drag the skater anywhere and let go; drag a grip to reshape the track; drag a new point from the tray onto the track, or a grip onto the bin to remove it; drag the U = {#} tab on the left to move the zero of potential energy. Space plays or pauses.":
  "El parque de patinaje: una pista con agarraderas redondas en sus puntos, el patinador, el suelo y dos paredes separadas {#} m. Arrastra al patinador a cualquier lugar y suéltalo; arrastra una agarradera para cambiar la forma de la pista; arrastra un punto nuevo desde la bandeja a la pista, o una agarradera al bote de basura para quitarla; arrastra la pestaña U = {#} de la izquierda para mover el cero de la energía potencial. Espacio inicia o pausa.",
"Energy against time for the last {#} s: kinetic, potential, thermal and total.":
  "Energía en función del tiempo durante los últimos {#} s: cinética, potencial, térmica y total.",
"Set up the skater, the track and gravity":
  "Prepara al patinador, la pista y la gravedad",
"<span>Set up, then press Play</span>":
  "<span>Prepara y luego pulsa Iniciar</span>",
"Skater mass m":
  "Masa del patinador m",
"Friction μ":
  "Fricción μ",
"Gravity g":
  "Gravedad g",
"<span>Stick to the track (roller coaster rails)</span>":
  "<span>Pegado a la pista (rieles de montaña rusa)</span>",
"<span>Energy pie over the skater</span>":
  "<span>Pastel de energía sobre el patinador</span>",
"<span>Grid, {#} m squares</span>":
  "<span>Cuadrícula, cuadros de {#} m</span>",
"Divider between the track and the energy graph":
  "Divisor entre la pista y la gráfica de energía",
"Valley":
  "Valle",
"Valley with friction":
  "Valle con fricción",
"Double well":
  "Pozo doble",
"Loop":
  "Rizo",
"Loop, started too low":
  "Rizo, empezando demasiado bajo",
"Jump":
  "Salto",
"Hump":
  "Joroba",
"Hump on rails":
  "Joroba sobre rieles",
"Valley on the Moon":
  "Valle en la Luna",
"Build your own":
  "Construye la tuya",
"A smooth valley with no friction. The skater swings from side to side and turns around at the height it started from every time: K + U stays the total, so the bars trade kinetic for potential energy and back.":
  "Un valle liso sin fricción. El patinador oscila de un lado a otro y da la vuelta cada vez a la altura desde la que empezó: K + U se mantiene igual al total, así que las barras intercambian energía cinética por potencial y viceversa.",
"Press Play to let the skater go.":
  "Pulsa Iniciar para soltar al patinador.",
"Where":
  "Dónde",
"on the track":
  "en la pista",
"Height y":
  "Altura y",
"Thermal E<sub>th</sub>":
  "Térmica E<sub>th</sub>",
"Normal force N":
  "Fuerza normal N",
"Energy bars":
  "Barras de energía",
"<span>Blind: hide the energies (predict them first)</span>":
  "<span>A ciegas: oculta las energías (predícelas primero)</span>",
"K = ½mv², U = mg(y − y₀), E = K + U + E<sub>th</sub> stays the same":
  "K = ½mv², U = mg(y − y₀), E = K + U + E<sub>th</sub> se mantiene igual",
"on the track: m dv/dt = −mg sinθ ∓ μN, N = m(v²κ + g cosθ)":
  "en la pista: m dv/dt = −mg senθ ∓ μN, N = m(v²κ + g cosθ)",
"E<sub>th</sub> grows by μN Δs while sliding":
  "E<sub>th</sub> crece en μN Δs mientras se desliza",
"Model: the skater is a point mass that slides (no rolling, no air drag). The track is a smooth curve through its points (a natural cubic spline). On the track the motion is found in steps of {#} ms (fourth order Runge–Kutta) and the speed is then set from the energy balance, so K + U + E<sub>th</sub> equals the starting total at every step. Kinetic friction is μN against the motion; at rest the same μ holds the skater on a slope where tanθ ≤ μ. The track pushes but cannot pull: where it would have to pull (N &lt; {#}) the skater leaves it, unless Stick to the track is on. In the air the path is the exact parabola. Landing on the track keeps the speed along the track and turns the speed across it into thermal energy (a perfectly inelastic bump); landing on the ground does the same with the downward speed, and the walls stop the skater. g: Earth {#} m/s², and the Moon {#}, Mars {#} and Jupiter {#} m/s² from the NASA Planetary Fact Sheet.":
  "Modelo: el patinador es una masa puntual que se desliza (sin rodar, sin arrastre del aire). La pista es una curva suave que pasa por sus puntos (un spline cúbico natural). Sobre la pista, el movimiento se calcula en pasos de {#} ms (Runge–Kutta de cuarto orden) y luego la rapidez se fija a partir del balance de energía, así que K + U + E<sub>th</sub> es igual al total inicial en cada paso. La fricción cinética es μN en contra del movimiento; en reposo, la misma μ sostiene al patinador en una pendiente donde tanθ ≤ μ. La pista empuja pero no puede jalar: donde tendría que jalar (N &lt; {#}) el patinador se sale, a menos que Pegado a la pista esté activado. En el aire la trayectoria es la parábola exacta. Al caer sobre la pista se conserva la rapidez a lo largo de la pista y la rapidez perpendicular a ella se convierte en energía térmica (un golpe perfectamente inelástico); al caer al suelo pasa lo mismo con la rapidez hacia abajo, y las paredes detienen al patinador. g: Tierra {#} m/s², y Luna {#}, Marte {#} y Júpiter {#} m/s² según la NASA Planetary Fact Sheet.",
"<a><span>←</span> <span>Granular Flow: Sorting and Landslides</span></a><a><span>Rotating Frames</span> <span>→</span></a>":
  "<a><span>←</span> <span>Flujo granular: segregación y deslizamientos</span></a><a><span>Marcos de referencia en rotación</span> <span>→</span></a>",
"Kinetic":
  "Cinética",
"Potential":
  "Potencial",
"Energy (J)":
  "Energía (J)",
"Energy bars, in J: Kinetic {#}, Potential {#}, Thermal {#}, Total {#}.":
  "Barras de energía, en J: Cinética {#}, Potencial {#}, Térmica {#}, Total {#}.",
"The same valley with μ = {#}. Each swing turns some energy into thermal energy (μN on every metre slid), so the turning points come lower each time and the skater settles near the bottom. The total bar does not change.":
  "El mismo valle con μ = {#}. Cada oscilación convierte algo de energía en energía térmica (μN por cada metro deslizado), así que los puntos de retorno quedan más bajos cada vez y el patinador se asienta cerca del fondo. La barra del total no cambia.",
"Two wells with a hill between, its top {#} m up. Started at {#} m the skater crosses the hill and back; drag it lower than the hilltop and it stays in one well. The hill only lets through a skater whose total energy is above U at the top.":
  "Dos pozos con una colina entre ellos, cuya cima está a {#} m de altura. Si empieza a {#} m, el patinador cruza la colina y regresa; arrástralo más abajo de la cima y se queda en un pozo. La colina solo deja pasar a un patinador cuya energía total sea mayor que U en la cima.",
"A loop the loop. At the top of the loop the track can only push down, so the skater needs v² ≥ gR there (R the radius of the track at the top). Started from this height it makes it round, back up the far ramp, and through the loop again backwards.":
  "Un rizo completo. En la parte superior del rizo la pista solo puede empujar hacia abajo, así que el patinador necesita ahí v² ≥ gR (R el radio de la pista en la parte superior). Si empieza desde esta altura, da la vuelta completa, sube la rampa del otro lado y vuelve a pasar por el rizo hacia atrás.",
"The same loop, started lower. Near the top the track would have to pull the skater in, which it cannot, so the skater leaves the track and falls across the loop as a projectile. Turn on Stick to the track and it goes round.":
  "El mismo rizo, empezando más abajo. Cerca de la parte superior la pista tendría que jalar al patinador hacia adentro, lo que no puede hacer, así que el patinador se sale de la pista y cae a través del rizo como un proyectil. Activa Pegado a la pista y da la vuelta completa.",
"A ramp that ends in a kicker. Off the end the skater flies as a projectile: K and U still add to the total in the air. On landing, the downward speed goes into thermal energy, so the bars show the bump.":
  "Una rampa que termina en un trampolín. Al salir del extremo el patinador vuela como un proyectil: K y U siguen sumando el total en el aire. Al aterrizar, la rapidez hacia abajo se convierte en energía térmica, así que las barras muestran el golpe.",
"A hump with a tight top. Coming up to the top the track curves away faster than the skater can follow (N would drop below zero), so the skater leaves the track, flies over the top and lands on the far ramp.":
  "Una joroba con la cima muy cerrada. Al subir hacia la cima, la pista se curva más rápido de lo que el patinador puede seguir (N quedaría por debajo de cero), así que el patinador se sale de la pista, vuela sobre la cima y aterriza en la rampa del otro lado.",
"The same hump with the skater on rails, like a roller coaster car. The rails can pull as well as push, so the skater stays on: N goes negative (the readout shows it) over the top, and the skater climbs the far ramp to its starting height.":
  "La misma joroba con el patinador sobre rieles, como un carro de montaña rusa. Los rieles pueden jalar además de empujar, así que el patinador se queda en la pista: N se vuelve negativa (la lectura lo muestra) sobre la cima, y el patinador sube la rampa del otro lado hasta su altura inicial.",
"The valley on the Moon, g = {#} m/s². The skater turns around at the same heights as on Earth (the heights depend only on energy per unit weight), but everything happens √({#}/{#}) = {#} times slower.":
  "El valle en la Luna, g = {#} m/s². El patinador da la vuelta a las mismas alturas que en la Tierra (las alturas dependen solo de la energía por unidad de peso), pero todo ocurre √({#}/{#}) = {#} veces más lento.",
"A plain track to start from. Drag the grips to reshape it, drag points from the tray onto it to add bends ({#} points at most), and drag a grip onto the bin to take it away.":
  "Una pista sencilla para empezar. Arrastra las agarraderas para cambiar su forma, arrastra puntos desde la bandeja para agregar curvas ({#} puntos como máximo), y arrastra una agarradera al bote de basura para quitarla."
});
