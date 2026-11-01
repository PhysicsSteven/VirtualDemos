/* demo/quantum-coin in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'demo/quantum-coin', {
"Ordinary coin":
  "Moneda ordinaria",
"Quantum coin":
  "Moneda cuántica",
"face decided by the toss":
  "cara decidida por el lanzamiento",
"heads":
  "águila",
"tails":
  "sol",
"Quantum Coin Toss":
  "Volado cuántico",
"A tossed coin already shows heads or tails before you look. A quantum coin, or the spin of an atom, in a superposition does not: measuring it gives each answer with probability |amplitude|², and leaves it in the state it was found in.":
  "Una moneda lanzada ya muestra águila o sol antes de que la mires. Una moneda cuántica, o el espín de un átomo, en una superposición no: medirla da cada respuesta con probabilidad |amplitud|², y la deja en el estado en que se encontró.",
"counts":
  "conteos",
"What to measure":
  "Qué medir",
"Coins":
  "Monedas",
"Spin ½":
  "Espín ½",
"Magnets in a row":
  "Imanes en fila",
"Toss and measure {#}":
  "Lanzar y medir {#}",
"The coins, the spin on a Bloch sphere, or a row of Stern–Gerlach magnets, with bar charts of the outcomes counted so far. Space measures one.":
  "Las monedas, el espín en una esfera de Bloch, o una fila de imanes de Stern–Gerlach, con gráficas de barras de los resultados contados hasta ahora. Espacio mide uno.",
"<span>Ordinary coin</span>":
  "<span>Moneda ordinaria</span>",
"Chance of heads":
  "Probabilidad de águila",
"<span>Quantum coin a|H⟩ + b|T⟩</span>":
  "<span>Moneda cuántica a|H⟩ + b|T⟩</span>",
"Amplitude angle θ":
  "Ángulo de amplitud θ",
"Phase φ":
  "Fase φ",
"<span>The spin state (arrow)</span>":
  "<span>El estado de espín (flecha)</span>",
"Tilt θ from up":
  "Inclinación θ desde arriba",
"Turn φ about z":
  "Giro φ alrededor de z",
"<span>The magnet's axis (dashed)</span>":
  "<span>El eje del imán (discontinuo)</span>",
"Tilt from z":
  "Inclinación desde z",
"Turn about z":
  "Giro alrededor de z",
"<span>Prepare a fresh atom for every measurement</span>":
  "<span>Preparar un átomo nuevo para cada medición</span>",
"<span>Magnets (the atoms come out of the oven unpolarized)</span>":
  "<span>Imanes (los átomos salen del horno sin polarizar)</span>",
"Number of magnets":
  "Número de imanes",
"<span>Magnet {#}</span>":
  "<span>Imán {#}</span>",
"Axis tilt from z":
  "Inclinación del eje desde z",
"Magnet {#} lets through":
  "El imán {#} deja pasar",
"Up beam":
  "Haz de arriba",
"Down beam":
  "Haz de abajo",
"Fair coins":
  "Monedas justas",
"Three to one":
  "Tres a uno",
"Same odds, other phase":
  "Mismas probabilidades, otra fase",
"Spin along x, measured along z":
  "Espín a lo largo de x, medido a lo largo de z",
"Magnet tilted {#}°":
  "Imán inclinado {#}°",
"Measure the same atom again":
  "Medir el mismo átomo otra vez",
"z then z":
  "z y luego z",
"z then x":
  "z y luego x",
"z, x, then z again":
  "z, x y luego z otra vez",
"An ordinary fair coin beside a quantum coin with a = b = {#}/√{#}. Measure {#} of each: both come out close to half heads. The counts alone cannot tell them apart; the difference is that the ordinary coin was already heads or tails before you looked.":
  "Una moneda justa ordinaria junto a una moneda cuántica con a = b = {#}/√{#}. Mide {#} de cada una: ambas salen cerca de la mitad águila. Los conteos por sí solos no pueden distinguirlas; la diferencia es que la moneda ordinaria ya era águila o sol antes de que miraras.",
"Ordinary: heads fraction":
  "Ordinaria: fracción de águilas",
"Expected":
  "Esperado",
"Quantum: heads fraction":
  "Cuántica: fracción de águilas",
"Expected |a|²":
  "|a|² esperado",
"<span>Blind: hide the expected values (predict them first)</span>":
  "<span>A ciegas: ocultar los valores esperados (predícelos primero)</span>",
"|ψ⟩ = cos(θ/{#})|↑⟩ + e^(iφ) sin(θ/{#})|↓⟩ P(up along n) = ({#} + s·n)/{#} = cos²(γ/{#})":
  "|ψ⟩ = cos(θ/{#})|↑⟩ + e^(iφ) sin(θ/{#})|↓⟩ P(up along n) = ({#} + s·n)/{#} = cos²(γ/{#})",
"Model: a two state system (a qubit). The quantum coin's heads and tails are the two states |H⟩ and |T⟩, with a = cos(θ/{#}) and b = e^(iφ) sin(θ/{#}), so P(heads) = |a|² = cos²(θ/{#}) and the phase φ does not change it. A spin ½ state is the same mathematics: it points along the unit vector s = (sin θ cos φ, sin θ sin φ, cos θ) on the Bloch sphere, and a Stern–Gerlach magnet with its field gradient along n sends the atom up with probability ({#} + s·n)/{#}, where γ is the angle between s and n (OpenStax University Physics Vol {#} §{#}, §{#}). After a measurement the state is the one found: along +n or −n. An atom from the oven is unpolarized, a mixture that gives up and down equally along any axis; it is drawn as a random direction, which has the same statistics. A beam that is let through goes into the next magnet; a blocked beam is stopped. Every magnet counts as a measurement: its two beams are never brought back together, so with Both the next magnet receives a mixture of the two results, not the state that went in. Every outcome is drawn at random (seeded generator, mulberry32), so the counts are simulated. The ordinary coin is a classical model: its face is decided by the toss, before anyone looks. Spin magnitudes, field strengths and beam sizes are not to scale, and the two beams leaving a magnet are drawn splitting up and down whatever its axis (a schematic).":
  "Modelo: un sistema de dos estados (un qubit). El águila y el sol de la moneda cuántica son los dos estados |H⟩ y |T⟩, con a = cos(θ/{#}) y b = e^(iφ) sen(θ/{#}), así que P(águila) = |a|² = cos²(θ/{#}) y la fase φ no la cambia. Un estado de espín ½ es la misma matemática: apunta a lo largo del vector unitario s = (sen θ cos φ, sen θ sen φ, cos θ) en la esfera de Bloch, y un imán de Stern–Gerlach con su gradiente de campo a lo largo de n envía el átomo hacia arriba con probabilidad ({#} + s·n)/{#}, donde γ es el ángulo entre s y n (OpenStax University Physics Vol {#} §{#}, §{#}). Después de una medición el estado es el que se encontró: a lo largo de +n o de −n. Un átomo que sale del horno no está polarizado, una mezcla que da arriba y abajo por igual a lo largo de cualquier eje; se dibuja como una dirección aleatoria, que tiene la misma estadística. Un haz que se deja pasar entra al siguiente imán; un haz bloqueado se detiene. Cada imán cuenta como una medición: sus dos haces nunca se vuelven a juntar, así que con Ambos el siguiente imán recibe una mezcla de los dos resultados, no el estado que entró. Cada resultado se obtiene al azar (generador con semilla, mulberry32), así que los conteos son simulados. La moneda ordinaria es un modelo clásico: su cara se decide en el lanzamiento, antes de que nadie mire. Las magnitudes de espín, las intensidades de campo y los tamaños de los haces no están a escala, y los dos haces que salen de un imán se dibujan separándose hacia arriba y hacia abajo sea cual sea su eje (un esquema).",
"<a>Quantum mechanics</a>":
  "<a>Mecánica cuántica</a>",
"<a><span>←</span> <span>Hydrogen Orbitals</span></a><a><span>Radioactive Decay</span> <span>→</span></a>":
  "<a><span>←</span> <span>Orbitales del hidrógeno</span></a><a><span>Decaimiento radiactivo</span> <span>→</span></a>",
"up":
  "arriba",
"the prepared state":
  "el estado preparado",
"up along n":
  "arriba a lo largo de n",
"down along n":
  "abajo a lo largo de n",
"The spin points along +x and the magnet measures along z: half the atoms go up and half go down, and each one is then found along +z or −z. Tilt the magnet to x ({#}°) and every atom goes up.":
  "El espín apunta a lo largo de +x y el imán mide a lo largo de z: la mitad de los átomos va hacia arriba y la mitad hacia abajo, y luego cada uno se encuentra a lo largo de +z o de −z. Inclina el imán hacia x ({#}°) y todos los átomos van hacia arriba.",
"Measure {#}":
  "Medir {#}",
"Angle γ between state and axis":
  "Ángulo γ entre el estado y el eje",
"Up fraction":
  "Fracción hacia arriba",
"Expected cos²(γ/{#})":
  "cos²(γ/{#}) esperado",
"Measurements N":
  "Mediciones N",
"oven":
  "horno",
"{#}° from z":
  "{#}° desde z",
"up {#}":
  "arriba {#}",
"down {#}":
  "abajo {#}",
"last magnet up":
  "último imán arriba",
"last magnet down":
  "último imán abajo",
"blocked":
  "bloqueado",
"atoms from the oven N = {#}":
  "átomos del horno N = {#}",
"z up, then keep x up, then z again: half of those are now down along z. Measuring x wiped out what the first magnet found. Of all the atoms from the oven, {#}/{#} × {#}/{#} × {#}/{#} = {#}/{#} reach each counter, and {#}/{#} are blocked on the way.":
  "z arriba, luego conservar x arriba, luego z otra vez: la mitad de esos ahora están abajo a lo largo de z. Medir x borró lo que encontró el primer imán. De todos los átomos del horno, {#}/{#} × {#}/{#} × {#}/{#} = {#}/{#} llegan a cada contador, y {#}/{#} se bloquean en el camino.",
"Send {#} atom":
  "Enviar {#} átomo",
"Atoms N":
  "Átomos N",
"Blocked":
  "Bloqueados",
"Last up, fraction of N":
  "Último arriba, fracción de N",
"Last down, fraction of N":
  "Último abajo, fracción de N",
"Changing the setup clears the counts.":
  "Cambiar la configuración borra los conteos.",
"θ = {#}° gives |a|² = cos²({#}°) = {#}: three heads for every tail, the same as the weighted ordinary coin.":
  "θ = {#}° da |a|² = cos²({#}°) = {#}: tres águilas por cada sol, lo mismo que la moneda ordinaria cargada.",
"The same |a| and |b| with phase φ = {#}°: heads and tails still come out half and half. The phase only shows when you measure something else, such as spin along another axis (try Spin along x, then turn φ).":
  "Los mismos |a| y |b| con fase φ = {#}°: águila y sol siguen saliendo mitad y mitad. La fase solo se nota cuando mides otra cosa, como el espín a lo largo de otro eje (prueba Espín a lo largo de x y luego gira φ).",
"Spin up along z, magnet tilted {#}°: P(up) = cos²({#}°) = {#}. At {#}° it is {#}, at {#}° zero.":
  "Espín hacia arriba a lo largo de z, imán inclinado {#}°: P(arriba) = cos²({#}°) = {#}. A {#}° es {#}, a {#}° es cero.",
"One atom, measured again and again along z. The first result is random; after that the state is the one found, so every later measurement agrees with it.":
  "Un átomo, medido una y otra vez a lo largo de z. El primer resultado es aleatorio; después el estado es el que se encontró, así que cada medición posterior coincide con él.",
"The first magnet keeps the atoms that went up along z. A second z magnet sends all of them up again: the measurement left them in |↑z⟩.":
  "El primer imán conserva los átomos que fueron hacia arriba a lo largo de z. Un segundo imán z los envía a todos hacia arriba otra vez: la medición los dejó en |↑z⟩.",
"Keep the up atoms along z, then measure along x: half up, half down. Knowing z tells you nothing about x.":
  "Conserva los átomos hacia arriba a lo largo de z, y luego mide a lo largo de x: mitad arriba, mitad abajo. Saber z no te dice nada sobre x.",
"Send some atoms through first.":
  "Envía algunos átomos primero.",
"down":
  "abajo"
});
