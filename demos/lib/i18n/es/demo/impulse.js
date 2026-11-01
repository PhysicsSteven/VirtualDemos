/* demo/impulse in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'demo/impulse', {
"force sensor":
  "sensor de fuerza",
"force sensor (N) against time, {#} kHz samples":
  "sensor de fuerza (N) en función del tiempo, muestras a {#} kHz",
"{#} ms shown":
  "se muestran {#} ms",
"Impulse and Momentum":
  "Impulso y momento",
"A cart rolls into a bumper on a force sensor and bounces back. The area under the force against time graph is the impulse, and it equals the cart's change of momentum. A soft bumper gives the same impulse with a smaller force over a longer time.":
  "Un carrito rueda hacia un tope montado en un sensor de fuerza y rebota. El área bajo la gráfica de fuerza en función del tiempo es el impulso, y es igual al cambio de momento del carrito. Un tope blando da el mismo impulso con una fuerza menor durante un tiempo más largo.",
"frictionless track · sensor to {#} N":
  "riel sin fricción · sensor con resolución de {#} N",
"A cart on a track rolling into a bumper on a force sensor, and below it the force sensor reading against time with the area shaded. Space launches the cart.":
  "Un carrito sobre un riel que rueda hacia un tope montado en un sensor de fuerza, y debajo la lectura del sensor de fuerza en función del tiempo con el área sombreada. Espacio lanza el carrito.",
"Launch the cart":
  "Lanzar el carrito",
"Put it back":
  "Regresarlo",
"Divider between the cart and the force graph":
  "Divisor entre el carrito y la gráfica de fuerza",
"Apparatus controls":
  "Controles del aparato",
"Set up the cart. Drag, or use the arrow keys, to move this card; double click to put it back":
  "Prepara el carrito. Arrastra, o usa las flechas del teclado, para mover esta tarjeta; doble clic para regresarla",
"Set up the cart":
  "Prepara el carrito",
"Cart mass m":
  "Masa del carrito m",
"Cart mass m: click, or press Enter, to type a value":
  "Masa del carrito m: haz clic, o pulsa Enter, para escribir un valor",
"Launch speed":
  "Rapidez de lanzamiento",
"Launch speed: click, or press Enter, to type a value":
  "Rapidez de lanzamiento: haz clic, o pulsa Enter, para escribir un valor",
"Bumper":
  "Tope",
"Stiff spring":
  "Resorte rígido",
"Soft spring":
  "Resorte blando",
"Clay":
  "Plastilina",
"A stiff spring: a short, tall force spike.":
  "Un resorte rígido: un pico de fuerza corto y alto.",
"Cart":
  "Carrito",
"<span>Sensor sample rate</span>":
  "<span>Frecuencia de muestreo del sensor</span>",
"Sample rate":
  "Frecuencia de muestreo",
"Velocity before v₁":
  "Velocidad antes v₁",
"Velocity after v₂":
  "Velocidad después v₂",
"Samples in the contact":
  "Muestras durante el contacto",
"Contact time":
  "Tiempo de contacto",
"Area and momentum change":
  "Área y cambio de momento",
"launch the cart":
  "lanza el carrito",
"J = ∫F dt = Δp = m(v_after − v_before)":
  "J = ∫F dt = Δp = m(v_después − v_antes)",
"Export this run's F(t) CSV":
  "Exportar el CSV de F(t) de esta corrida",
"bumper":
  "tope",
"area (N·s)":
  "área (N·s)",
"The motion detector gives the velocity before (v₁) and after (v₂) the bounce, to {#} m/s, positive toward the sensor. The area is the trapezoid sum of the sampled sensor readings. Record stores one row per run (bumper, mass, velocities, rate, area, peak force, contact time); Export to worksheet sends the rows to the student worksheet, which can also save them as CSV; export a run's F(t) to integrate it yourself.":
  "El detector de movimiento da la velocidad antes (v₁) y después (v₂) del rebote, con resolución de {#} m/s, positiva hacia el sensor. El área es la suma trapezoidal de las lecturas muestreadas del sensor. Registrar guarda una fila por corrida (tope, masa, velocidades, frecuencia, área, fuerza máxima, tiempo de contacto); Exportar a la hoja envía las filas a la hoja de trabajo del estudiante, que también puede guardarlas como CSV; exporta la F(t) de una corrida para integrarla tú mismo.",
"Blind hides the area, the momentum change and the peak force, leaving the graph, the velocities and the settings.":
  "A ciegas oculta el área, el cambio de momento y la fuerza máxima, y deja la gráfica, las velocidades y los ajustes.",
"Model: a frictionless cart; the bumper pushes with F = kx while it is compressed, then unloads along a steeper line so the cart leaves with e times its speed (e is the coefficient of restitution). Each phase is simple harmonic, so F(t) is exact. Stiff spring k = {#} N/m, e = {#}; soft spring k = {#} N/m, e = {#}; clay k = {#} N/m, e = {#}. The sensor reads the force to {#} N at the chosen sample rate.":
  "Modelo: un carrito sin fricción; el tope empuja con F = kx mientras está comprimido, y luego se descarga a lo largo de una recta más inclinada para que el carrito salga con e veces su rapidez (e es el coeficiente de restitución). Cada fase es armónica simple, así que F(t) es exacta. Resorte rígido k = {#} N/m, e = {#}; resorte blando k = {#} N/m, e = {#}; plastilina k = {#} N/m, e = {#}. El sensor lee la fuerza con resolución de {#} N a la frecuencia de muestreo elegida.",
"<a>Momentum and collisions</a>":
  "<a>Momento y colisiones</a>",
"<a><span>←</span> <span>Collisions and Momentum</span></a><a><span>Center of Mass</span> <span>→</span></a>":
  "<a><span>←</span> <span>Colisiones y momento</span></a><a><span>Centro de masa</span> <span>→</span></a>",
"drag to turn, wheel to zoom":
  "arrastra para girar, rueda para acercar",
"A soft spring: a long, low force. Same bounciness as the stiff one.":
  "Un resorte blando: una fuerza larga y baja. El mismo rebote que el rígido.",
"Clay: the cart barely bounces back (e = {#}), so the impulse is smaller.":
  "Plastilina: el carrito apenas rebota (e = {#}), así que el impulso es menor.",
"force sensor (N) against time, {#} Hz samples":
  "sensor de fuerza (N) en función del tiempo, muestras a {#} Hz",
"Launch the cart and let it bounce off first.":
  "Lanza el carrito y déjalo rebotar primero."
});
