/* demo/center-of-mass in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'demo/center-of-mass', {
"CM":
  "CM",
"Center of Mass":
  "Centro de masa",
"<a>Momentum and collisions</a>":
  "<a>Momento y colisiones</a>",
"<a><span>←</span> <span>Impulse and Momentum</span></a><a><span>Rocket Propulsion</span> <span>→</span></a>":
  "<a><span>←</span> <span>Impulso y momento</span></a><a><span>Propulsión de cohetes</span> <span>→</span></a>",
"The center of mass is the mass weighted average position. Find it for masses on a plate, then see that it keeps moving as if all the mass were there: a firework's pieces scatter but their center of mass follows the same parabola, and walking on a boat cannot move the center of mass of you and the boat.":
  "El centro de masa es la posición promedio ponderada por la masa. Encuéntralo para masas sobre una placa, y luego observa que sigue moviéndose como si toda la masa estuviera ahí: las piezas de un cohete de fuegos artificiales se dispersan pero su centro de masa sigue la misma parábola, y caminar sobre un bote no puede mover el centro de masa de ti y el bote.",
"The current setup: masses on a plate that can be dragged, a firework that explodes into two pieces, or a person walking along a boat, with the center of mass marked.":
  "La configuración actual: masas sobre una placa que se pueden arrastrar, un cohete de fuegos artificiales que explota en dos piezas, o una persona que camina a lo largo de un bote, con el centro de masa marcado.",
"A plate {#} m wide and {#} m tall with {#} masses on it.":
  "Una placa de {#} m de ancho y {#} m de alto con {#} masas encima.",
"Mass {#} is {#} kg at x = {#} m, y = {#} m.":
  "La masa {#} es de {#} kg y está en x = {#} m, y = {#} m.",
"Mass {#} is selected.":
  "La masa {#} está seleccionada.",
"Total mass {#} kg.":
  "Masa total {#} kg.",
"Center of mass at x = {#} m, y = {#} m.":
  "Centro de masa en x = {#} m, y = {#} m.",
"Walk":
  "Caminar",
"Masses on a plate":
  "Masas sobre una placa",
"Exploding firework":
  "Cohete de fuegos artificiales que explota",
"Walking on a boat":
  "Caminar sobre un bote",
"Plate bounded by curves":
  "Placa limitada por curvas",
"Drag the masses on a {#} m × {#} m plate. Predict where the center of mass is, then turn Blind off. A heavier mass pulls it toward itself.":
  "Arrastra las masas sobre una placa de {#} m × {#} m. Predice dónde está el centro de masa y luego desactiva A ciegas. Una masa más pesada lo jala hacia sí.",
"Masses":
  "Masas",
"Add a mass":
  "Agregar una masa",
"Remove the selected mass":
  "Quitar la masa seleccionada",
"Selected mass":
  "Masa seleccionada",
"{#} kg (mass {#})":
  "{#} kg (masa {#})",
"Drag a mass to move it (keyboard: Tab to the plate, then {#} to {#} to select, arrows to move).":
  "Arrastra una masa para moverla (teclado: Tab hasta la placa, luego {#} a {#} para seleccionar, flechas para mover).",
"Shape of the plate":
  "Forma de la placa",
"Semicircle":
  "Semicírculo",
"Triangle":
  "Triángulo",
"Between y = x and y = x²":
  "Entre y = x y y = x²",
"The plate is where g(x) ≤ y ≤ f(x): type the top curve f and the bottom curve g, in meters.":
  "La placa es donde g(x) ≤ y ≤ f(x): escribe la curva de arriba f y la curva de abajo g, en metros.",
"From x =":
  "Desde x =",
"to x =":
  "hasta x =",
"Strips n":
  "Franjas n",
"<span>Spin it about an axis (Pappus)</span>":
  "<span>Girarla alrededor de un eje (Pappus)</span>",
"Axis to spin about":
  "Eje de giro",
"x axis":
  "eje x",
"y axis":
  "eje y",
"Type the top and bottom curves in meters, like sqrt({#} − x^{#}), {#}({#} − x/{#}) or x^{#}, and the limits, like {#}, {#} or pi/{#}. The plate is a steel sheet {#} mm thick, σ = {#} kg/m². Drag the pin (keyboard: Tab to the picture, then the arrows), then press Release: the plate tips toward its balance point unless the pin is under it.":
  "Escribe las curvas de arriba y de abajo en metros, como sqrt({#} − x^{#}), {#}({#} − x/{#}) o x^{#}, y los límites, como {#}, {#} o pi/{#}. La placa es una lámina de acero de {#} mm de grosor, σ = {#} kg/m². Arrastra el alfiler (teclado: Tab hasta la imagen y luego las flechas) y presiona Soltar: la placa se inclina hacia su punto de equilibrio a menos que el alfiler esté debajo de él.",
"Firework":
  "Cohete",
"Mass of the front piece, fraction of the total":
  "Masa de la pieza delantera, fracción del total",
"Speed the explosion gives the pieces apart":
  "Rapidez con que la explosión separa las piezas",
"Direction the front piece is thrown":
  "Dirección en que se lanza la pieza delantera",
"{#}° above horizontal":
  "{#}° sobre la horizontal",
"Boat":
  "Bote",
"Person's mass":
  "Masa de la persona",
"Boat's mass":
  "Masa del bote",
"Mass {#}":
  "Masa {#}",
"{#} kg at ({#}, {#}) m":
  "{#} kg en ({#}, {#}) m",
"Total mass":
  "Masa total",
"Center of mass":
  "Centro de masa",
"x_cm = Σmᵢxᵢ / Σmᵢ · M a_cm = F_external":
  "x_cm = Σmᵢxᵢ / Σmᵢ · M a_cm = F_external",
"Blind hides the center of mass marker, its coordinates, the predicted boat shift, and the plate's moments, balance point and volume by Pappus.":
  "A ciegas oculta el marcador del centro de masa, sus coordenadas, el desplazamiento predicho del bote, y los momentos, el punto de equilibrio y el volumen por Pappus de la placa.",
"Model: point masses on a massless plate; the firework is a point mass launched at {#} m/s and {#}° that splits in two at the top of its flight, with no air drag; the boat floats on water with no drag, and the person walks from one end to the other at {#} m/s relative to the boat (boat {#} m long). The plate bounded by curves is a steel sheet {#} mm thick (σ = {#} kg/m²) cut into vertical strips, each taken at its middle; the integrals use adaptive Simpson's rule. On the pin it stays level when the balance point is within {#} mm of the pin (the size of the pin's tip); otherwise it tips about the line through the pin at right angles to the line to the balance point, θ'' = Mgd cos θ / I, with the products of inertia neglected, until it slides off at {#}°.":
  "Modelo: masas puntuales sobre una placa sin masa; el cohete es una masa puntual lanzada a {#} m/s y {#}° que se divide en dos en la parte más alta de su vuelo, sin arrastre del aire; el bote flota en el agua sin arrastre, y la persona camina de un extremo al otro a {#} m/s respecto al bote (bote de {#} m de largo). La placa limitada por curvas es una lámina de acero de {#} mm de grosor (σ = {#} kg/m²) cortada en franjas verticales, cada una tomada en su punto medio; las integrales usan la regla de Simpson adaptativa. Sobre el alfiler se queda horizontal cuando el punto de equilibrio está a menos de {#} mm del alfiler (el tamaño de su punta); si no, se inclina alrededor de la recta que pasa por el alfiler perpendicular a la recta hacia el punto de equilibrio, θ'' = Mgd cos θ / I, despreciando los productos de inercia, hasta que se resbala a {#}°.",
"center of mass":
  "centro de masa",
"drag a mass to move it, drag the table to turn":
  "arrastra una masa para moverla, arrastra la mesa para girar",
"real time · t = {#} s":
  "tiempo real · t = {#} s",
"Launch: at the top the firework splits in two. Each piece follows its own parabola, but their center of mass carries on along the original one until a piece lands.":
  "Lanzamiento: en la parte más alta el cohete se divide en dos. Cada pieza sigue su propia parábola, pero su centro de masa continúa por la original hasta que una pieza cae al suelo.",
"Split at":
  "Se divide en",
"{#} s, {#} m up":
  "{#} s, {#} m de altura",
"Center of mass of the pieces":
  "Centro de masa de las piezas",
"Unexploded firework would be at":
  "El cohete sin explotar estaría en",
"Front piece lands at":
  "La pieza delantera cae en",
"Back piece lands at":
  "La pieza trasera cae en",
"Unexploded range":
  "Alcance sin explotar",
"Mass weighted landing point":
  "Punto de caída ponderado por la masa",
"unexploded x":
  "x sin explotar",
"post":
  "poste",
"The person walks from the back of the boat to the front. No outside horizontal force acts, so the center of mass of person and boat stays put and the boat slides back.":
  "La persona camina de la parte trasera del bote a la delantera. No actúa ninguna fuerza horizontal externa, así que el centro de masa de la persona y el bote se queda en su lugar y el bote se desliza hacia atrás.",
"Person walked along the boat":
  "La persona caminó a lo largo del bote",
"Boat has moved":
  "El bote se ha movido",
"Center of mass (person + boat)":
  "Centro de masa (persona + bote)",
"Predicted boat shift −mL/(m + M)":
  "Desplazamiento predicho del bote −mL/(m + M)",
"walked (m)":
  "caminó (m)",
"boat moved (m)":
  "el bote se movió (m)",
"pin":
  "alfiler",
"seen from the side":
  "vista de lado",
"{#} strips: balance point ({#}, {#}) m; integrals ({#}, {#}) m":
  "{#} franjas: punto de equilibrio ({#}, {#}) m; integrales ({#}, {#}) m",
"drag the pin; Release lets go":
  "arrastra el alfiler; Soltar la deja caer",
"A flat steel sheet cut to the region between two curves. Cut it into strips, add up their moments and find the balance point. Then drag the pin to where you think it is and press Release to check.":
  "Una lámina de acero cortada a la región entre dos curvas. Córtala en franjas, suma sus momentos y encuentra el punto de equilibrio. Luego arrastra el alfiler a donde creas que está y presiona Soltar para comprobarlo.",
"Plate":
  "Placa",
"Strips n, each Δx":
  "Franjas n, cada una Δx",
"Area A":
  "Área A",
"{#} m² (strips), {#} m²":
  "{#} m² (franjas), {#} m²",
"Mass M = σA":
  "Masa M = σA",
"M<sub>y</sub> = σ∫x(f − g) dx":
  "M<sub>y</sub> = σ∫x(f − g) dx",
"{#} kg·m (strips), {#} kg·m":
  "{#} kg·m (franjas), {#} kg·m",
"M<sub>x</sub> = σ∫½(f² − g²) dx":
  "M<sub>x</sub> = σ∫½(f² − g²) dx",
"Balance point from the strips":
  "Punto de equilibrio con las franjas",
"Pin at":
  "Alfiler en",
"Pin to balance point":
  "Del alfiler al punto de equilibrio",
"On the pin":
  "Sobre el alfiler",
"held level: press Release":
  "horizontal: presiona Soltar",
"x̄ strips":
  "x̄ franjas",
"A flat steel plate between the curves y = {g} and y = {f}, from x = {a} m to x = {b} m, cut into {n} strips.":
  "Una placa plana de acero entre las curvas y = {g} y y = {f}, desde x = {a} m hasta x = {b} m, cortada en {n} franjas.",
"A flat steel plate between the curves y = x² and y = x, from x = {#} m to x = {#} m, cut into {#} strips.":
  "Una placa plana de acero entre las curvas y = x² y y = x, desde x = {#} m hasta x = {#} m, cortada en {#} franjas.",
"Area {#} square meters, mass {#} kg.":
  "Área {#} metros cuadrados, masa {#} kg.",
"From the strips the balance point is at x = {#} m, y = {#} m; the integrals give x = {#} m, y = {#} m.":
  "Con las franjas el punto de equilibrio está en x = {#} m, y = {#} m; las integrales dan x = {#} m, y = {#} m.",
"The pin is at x = {#} m, y = {#} m.":
  "El alfiler está en x = {#} m, y = {#} m.",
"−{#} kg·m (strips), −{#} kg·m":
  "−{#} kg·m (franjas), −{#} kg·m",
"It tips toward the balance point.":
  "Se inclina hacia el punto de equilibrio.",
"slow motion: {#} s = {#} s · t = {#} s":
  "cámara lenta: {#} s = {#} s · t = {#} s",
"tipping, {#}°":
  "inclinándose, {#}°",
"The plate is tipping, {#} degrees.":
  "La placa se está inclinando, {#} grados.",
"A firework launched at {#} m/s and {#}° that splits in two at the top of its path.":
  "Un cohete de fuegos artificiales lanzado a {#} m/s y {#}° que se divide en dos en lo alto de su trayectoria.",
"The front piece has {#} of the mass and the explosion gives the pieces {#} m/s relative speed, {#}° above horizontal.":
  "La pieza delantera tiene {#} de la masa y la explosión da a las piezas una rapidez relativa de {#} m/s, a {#}° sobre la horizontal.",
"Split at {#} s, {#} m up.":
  "Se divide a los {#} s, a {#} m de altura.",
"At the start.":
  "Al inicio.",
"Front piece lands at x = {#} m, back piece at x = {#} m.":
  "La pieza delantera cae en x = {#} m, la trasera en x = {#} m.",
"Unexploded range {#} m.":
  "Alcance sin explotar {#} m.",
"Center of the pieces at x = {#} m, y = {#} m, and the unexploded firework at x = {#} m, y = {#} m.":
  "Centro de las piezas en x = {#} m, y = {#} m, y el cohete sin explotar en x = {#} m, y = {#} m.",
"A person of {#} kg walks along a boat of {#} kg, {#} m long, beside a fixed post.":
  "Una persona de {#} kg camina a lo largo de un bote de {#} kg y {#} m de largo, junto a un poste fijo.",
"The person has walked {#} m along the boat and the boat has moved {#} m.":
  "La persona ha caminado {#} m a lo largo del bote y el bote se ha movido {#} m.",
"Center of mass at x = −{#} m.":
  "Centro de masa en x = −{#} m.",
"A flat steel plate between the curves y = {#} and y = √(−x² + {#}), from x = −{#} m to x = {#} m, cut into {#} strips.":
  "Una placa plana de acero entre las curvas y = {#} y y = √(−x² + {#}), desde x = −{#} m hasta x = {#} m, cortada en {#} franjas.",
"A flat steel plate between the curves y = {#} and y = {#}(−{#}x + {#}), from x = {#} m to x = {#} m, cut into {#} strips.":
  "Una placa plana de acero entre las curvas y = {#} y y = {#}(−{#}x + {#}), desde x = {#} m hasta x = {#} m, cortada en {#} franjas.",
"the balance point travels {#}π|x̄|":
  "el punto de equilibrio recorre {#}π|x̄|",
"Pappus":
  "Pappus",
"the plate crosses the y axis: Pappus needs it on one side":
  "la placa cruza el eje y: Pappus necesita que quede de un solo lado",
"{#} strips":
  "{#} franjas",
"Moments and balance point":
  "Momentos y punto de equilibrio",
"hidden in Blind":
  "oculto en A ciegas",
"The center of mass is hidden.":
  "El centro de masa está oculto.",
"the balance point travels {#}π|ȳ|":
  "el punto de equilibrio recorre {#}π|ȳ|",
"Pappus V = {#}π|ȳ|·A":
  "Pappus V = {#}π|ȳ|·A",
"Washers V = π|∫(f² − g²) dx|":
  "Arandelas V = π|∫(f² − g²) dx|",
"Pappus V = {#}π|x̄|·A":
  "Pappus V = {#}π|x̄|·A",
"Shells V = {#}π|∫x(f − g) dx|":
  "Capas V = {#}π|∫x(f − g) dx|",
"Volume of the solid":
  "Volumen del sólido",
"the plate crosses the x axis: Pappus needs it on one side":
  "la placa cruza el eje x: Pappus necesita que quede de un solo lado",
"A flat steel plate between the curves y = −{#} and y = √(−x² + {#}), from x = −{#} m to x = {#} m, cut into {#} strips.":
  "Una placa plana de acero entre las curvas y = −{#} y y = √(−x² + {#}), desde x = −{#} m hasta x = {#} m, cortada en {#} franjas.",
"It tipped toward the balance point and slid off the pin.":
  "Se inclinó hacia el punto de equilibrio y se resbaló del alfiler.",
"tipped over and slid off":
  "se inclinó y se resbaló",
"The plate tipped toward its balance point and slid off the pin.":
  "La placa se inclinó hacia su punto de equilibrio y se resbaló del alfiler.",
"It balances: the pin is under the balance point.":
  "Se equilibra: el alfiler está debajo del punto de equilibrio.",
"balances":
  "se equilibra",
"The plate balances on the pin.":
  "La placa se equilibra sobre el alfiler.",
"Not finished yet.":
  "Todavía no está terminado.",
"Still showing the last plate.":
  "Se sigue mostrando la placa anterior.",
"“{n}” is not a name I know. Use x, and functions like sin, ln, sqrt.":
  "No conozco el nombre “{n}”. Usa x y funciones como sin, ln, sqrt.",
"There is a ) without a matching (.":
  "Hay un ) sin su ( correspondiente.",
"“{n}” is not something I can read here.":
  "No puedo leer “{n}” aquí.",
"Functions here take one input; there is no comma form.":
  "Aquí las funciones toman una sola entrada; no hay forma con coma.",
"f(x) is not defined at x = {x}.":
  "f(x) no está definida en x = {x}.",
"g(x) is not defined at x = {x}.":
  "g(x) no está definida en x = {x}.",
"g(x) is above f(x) at x = {x}: the plate is where f(x) ≥ g(x). Swap them, or change the limits.":
  "g(x) está arriba de f(x) en x = {x}: la placa es donde f(x) ≥ g(x). Intercámbialas o cambia los límites.",
"The plate has no area: f(x) = g(x) everywhere from a to b.":
  "La placa no tiene área: f(x) = g(x) en todo el intervalo de a a b.",
"Type a number for a, like {#} or pi/{#}.":
  "Escribe un número para a, como {#} o pi/{#}.",
"Type a number for b, like {#} or pi/{#}.":
  "Escribe un número para b, como {#} o pi/{#}.",
"b must be greater than a.":
  "b debe ser mayor que a.",
"Keep the plate within {#} m from a to b.":
  "Mantén la placa dentro de {#} m de a a b.",
"“{n}” is out of place.":
  "“{n}” está fuera de lugar.",
"{n} needs something to act on, like {n}(x).":
  "{n} necesita algo sobre qué actuar, como {n}(x).",
"Use one variable, x.":
  "Usa una sola variable, x.",
"Type a number for a, like 0 or pi/4.":
  "Escribe un número para a, como 0 o pi/4.",
"Type a number for b, like 1 or pi/2.":
  "Escribe un número para b, como 1 o pi/2.",
"Keep the plate within 20 m from a to b.":
  "Mantén la placa dentro de 20 m de a a b.",
"Keep the plate within 20 m of the axes.":
  "Mantén la placa dentro de 20 m de los ejes.",
"front":
  "delantera",
"back":
  "trasera",
"Blind hides the center of mass marker, its coordinates and the predicted boat shift.":
  "A ciegas oculta el marcador del centro de masa, sus coordenadas y el desplazamiento predicho del bote.",
"Model: point masses on a massless plate; the firework is a point mass launched at {#} m/s and {#}° that splits in two at the top of its flight, with no air drag; the boat floats on water with no drag, and the person walks from one end to the other at {#} m/s relative to the boat (boat {#} m long).":
  "Modelo: masas puntuales sobre una placa sin masa; el cohete es una masa puntual lanzada a {#} m/s y {#}° que se divide en dos en la parte más alta de su vuelo, sin arrastre del aire; el bote flota en el agua sin arrastre, y la persona camina de un extremo al otro a {#} m/s respecto al bote (bote de {#} m de largo).",
"Skip to the picture":
  "Ir a la imagen",
"Skip to the controls":
  "Ir a los controles",
"The person has walked {#} m along the boat and the boat has moved −{#} m.":
  "La persona ha caminado {#} m a lo largo del bote y el bote se ha movido −{#} m.",
"person {#} kg":
  "persona {#} kg",
"boat {#} kg":
  "bote {#} kg",
"drag to turn, wheel to zoom":
  "arrastra para girar, rueda para acercar",
"Describe the picture":
  "Describir la imagen",
"Time {#} s.":
  "Tiempo {#} s.",
"Running.":
  "En marcha.",
"Close":
  "Cerrar"
});
