/* demo/induction-at-work in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'demo/induction-at-work', {
"coil, {#} turns":
  "bobina, {#} vueltas",
"stroke ±{#} cm":
  "carrera ±{#} cm",
"capacitor {#} F":
  "capacitor {#} F",
"light off":
  "luz apagada",
"EMF of the coil and capacitor voltage":
  "FEM de la bobina y voltaje del capacitor",
"— EMF ε":
  "— FEM ε",
"— capacitor":
  "— capacitor",
"Induction at Work":
  "La inducción en acción",
"Three everyday devices that run on Faraday's law. Shake a magnet through a coil to charge a flashlight, draw with a magnetic pen on a grid of wires, and swipe a card's magnetic stripe past a reading head. In each one a changing flux makes an EMF.":
  "Tres aparatos cotidianos que funcionan con la ley de Faraday. Agita un imán a través de una bobina para cargar una linterna, dibuja con una pluma magnética sobre una malla de alambres y pasa la banda magnética de una tarjeta frente a un cabezal lector. En cada uno, un flujo que cambia produce una FEM.",
"The chosen device: a shake flashlight with a magnet sliding through a coil, a graphics tablet with a grid of wires under a magnetic pen, or a card sliding past a reading head, with a plot of the induced EMF.":
  "El aparato elegido: una linterna de agitar con un imán que se desliza a través de una bobina, una tableta gráfica con una malla de alambres bajo una pluma magnética, o una tarjeta que pasa frente a un cabezal lector, con una gráfica de la FEM inducida.",
"Apparatus controls":
  "Controles del aparato",
"Shakes per second":
  "Agitaciones por segundo",
"Shakes per second: click, or press Enter, to type a value":
  "Agitaciones por segundo: haz clic, o pulsa Enter, para escribir un valor",
"Stroke, center to end":
  "Carrera, del centro al extremo",
"Stroke, center to end: click, or press Enter, to type a value":
  "Carrera, del centro al extremo: haz clic, o pulsa Enter, para escribir un valor",
"Swipe speed":
  "Rapidez de deslizamiento",
"Swipe speed: click, or press Enter, to type a value":
  "Rapidez de deslizamiento: haz clic, o pulsa Enter, para escribir un valor",
"Shake flashlight":
  "Linterna de agitar",
"Flashlight, light on":
  "Linterna, luz encendida",
"Graphics tablet":
  "Tableta gráfica",
"Tablet, pen held still":
  "Tableta, pluma quieta",
"Card reader":
  "Lector de tarjetas",
"Card, uneven swipe":
  "Tarjeta, deslizamiento irregular",
"Shaking slides the magnet back and forth through the coil. Each pass changes the flux through {#} turns; the EMF peaks as the magnet enters and leaves the coil and changes sign in between. A rectifier turns those pulses into charge on the capacitor.":
  "Agitar hace que el imán se deslice de un lado a otro a través de la bobina. Cada paso cambia el flujo a través de {#} vueltas; la FEM alcanza su pico cuando el imán entra a la bobina y cuando sale, y cambia de signo entre ambos. Un rectificador convierte esos pulsos en carga en el capacitor.",
"Shake":
  "Agitar",
"Empty the capacitor":
  "Vaciar el capacitor",
"<span>Capacitor</span>":
  "<span>Capacitor</span>",
"Capacitor":
  "Capacitor",
"<span>Light switched on</span>":
  "<span>Luz encendida</span>",
"<span>Fast forward, {#} times</span>":
  "<span>Avance rápido, {#} veces</span>",
"Drag on the tablet to move the pen, or focus the picture and use the arrow keys.":
  "Arrastra sobre la tableta para mover la pluma, o enfoca la imagen y usa las flechas.",
"Model: the coil current is i = (|EMF| − 2V_D − V_C)/R at each instant. The coil's own inductance is left out: for these coils L/R is under a millisecond against EMF pulses of some {#} ms, a correction of a few percent to the peak current.":
  "Modelo: la corriente de la bobina es i = (|EMF| − 2V_D − V_C)/R en cada instante. Se omite la inductancia propia de la bobina: para estas bobinas L/R es menor que un milisegundo frente a pulsos de FEM de unos {#} ms, una corrección de unos pocos por ciento en la corriente pico.",
"Draw a circle":
  "Dibujar un círculo",
"Clear the drawing":
  "Borrar el dibujo",
"<span>Show the pen's true path</span>":
  "<span>Mostrar la trayectoria real de la pluma</span>",
"Number on the stripe":
  "Número en la banda",
"<span>Uneven swipe (speed changes by ±{#} %)</span>":
  "<span>Deslizamiento irregular (la rapidez cambia ±{#} %)</span>",
"Swipe the card":
  "Pasar la tarjeta",
"EMF now":
  "FEM ahora",
"Largest EMF in the last second":
  "Mayor FEM en el último segundo",
"Charging current":
  "Corriente de carga",
"Capacitor voltage":
  "Voltaje del capacitor",
"switched off":
  "apagada",
"Energy from your hand":
  "Energía de tu mano",
"Stored in the capacitor (change)":
  "Almacenada en el capacitor (cambio)",
"Heat in the coil, I²R":
  "Calor en la bobina, I²R",
"Lost in the diodes":
  "Perdida en los diodos",
"Given to the light":
  "Entregada a la luz",
"Coil resistance":
  "Resistencia de la bobina",
"Blind hides the EMF plots, the light's glow and the readouts that answer the question for each device: the capacitor voltage, the tablet's estimate of where the pen is, and the decoded number. Predict first: what happens to the EMF when you shake twice as fast, when the pen stops, when the card goes through slowly?":
  "A ciegas oculta las gráficas de FEM, el brillo de la luz y las lecturas que responden la pregunta de cada aparato: el voltaje del capacitor, la estimación de la tableta de dónde está la pluma y el número decodificado. Predice primero: ¿qué le pasa a la FEM cuando agitas el doble de rápido, cuando la pluma se detiene, cuando la tarjeta pasa despacio?",
"Flashlight model: a NdFeB magnet (remanence {#} T, a typical value; {#} mm across and {#} mm long) treated as a point dipole, m = B_r V/μ₀ = {#} A·m², moving through a coil of {#} turns of radius {#} mm spread over {#} mm. The dipole approximation is good when the magnet is outside the coil and gives the right size, not the exact shape, when it is inside. The coil's resistance comes from its wire: {#} m of {#} mm copper, {#} Ω. The magnet moves as x = A sin {#}πft, driven by your hand whatever the coil does. A bridge rectifier (two diodes conduct, {#} V each) charges the capacitor whenever |ε| exceeds V_C + {#} V; the light is a white LED taken as {#} V in series with {#} Ω. The magnet size, turns, diode drop and LED values are chosen; the energy readouts add up to within {#} %, the error of the {#} ms time step.":
  "Modelo de la linterna: un imán de NdFeB (remanencia {#} T, un valor típico; {#} mm de diámetro y {#} mm de largo) tratado como un dipolo puntual, m = B_r V/μ₀ = {#} A·m², que se mueve a través de una bobina de {#} vueltas de radio {#} mm repartidas en {#} mm. La aproximación dipolar es buena cuando el imán está fuera de la bobina y da el tamaño correcto, no la forma exacta, cuando está dentro. La resistencia de la bobina sale de su alambre: {#} m de cobre de {#} mm, {#} Ω. El imán se mueve como x = A sin {#}πft, impulsado por tu mano haga lo que haga la bobina. Un rectificador de puente (conducen dos diodos, de {#} V cada uno) carga el capacitor siempre que |ε| supera V_C + {#} V; la luz es un LED blanco tomado como {#} V en serie con {#} Ω. El tamaño del imán, las vueltas, la caída en los diodos y los valores del LED son elegidos; las lecturas de energía suman dentro de {#} %, el error del paso de tiempo de {#} ms.",
"Tablet model: the pen tip holds a small NdFeB magnet ({#} T, {#} mm across, {#} mm long, m = {#} A·m²) pointing down, {#} mm above wires {#} mm apart. Each wire's circuit closes far away, so the flux it encloses is that through a half plane, Φ = −μ₀m u/({#}π(u² + h²)) for a pen a distance u from the wire, and the EMF is −dΦ/dt. The tablet finds the pen by fitting this shape to the five strongest wires; it ignores signals below {#} µV (a chosen detection threshold, with no electrical noise added). Real passive tablets work differently in one way: the pen's field is made to alternate, so a pen held still is still seen.":
  "Modelo de la tableta: la punta de la pluma tiene un pequeño imán de NdFeB ({#} T, {#} mm de diámetro, {#} mm de largo, m = {#} A·m²) apuntando hacia abajo, {#} mm arriba de alambres separados {#} mm. El circuito de cada alambre se cierra lejos, así que el flujo que encierra es el que atraviesa un semiplano, Φ = −μ₀m u/({#}π(u² + h²)) para una pluma a una distancia u del alambre, y la FEM es −dΦ/dt. La tableta encuentra la pluma ajustando esta forma a los cinco alambres con señal más fuerte; ignora señales menores que {#} µV (un umbral de detección elegido, sin ruido eléctrico agregado). Las tabletas pasivas reales funcionan distinto en un aspecto: el campo de la pluma se hace alternar, así que una pluma quieta se sigue viendo.",
"Card model: track {#} of a magnetic stripe, {#} bits per inch (ISO/IEC {#}), recorded in F2F: the magnetization flips at every bit boundary and once more in the middle of a {#}. Digits are {#} bits, least significant first, with odd parity, between the start sentinel ; and end sentinel ? (the check character after it is left out). Each flip passing the head gives a pulse of EMF ∝ v g²/((x − x_k)² + g²) with g = {#} mm (a chosen head resolution); EMF is shown relative to a single pulse at {#} m/s. The decoder keeps time from the pulses themselves, which is why an uneven swipe still reads.":
  "Modelo de la tarjeta: la pista {#} de una banda magnética, {#} bits por pulgada (ISO/IEC {#}), grabada en F2F: la magnetización se invierte en cada frontera de bit y una vez más a la mitad de un {#}. Los dígitos son de {#} bits, el menos significativo primero, con paridad impar, entre el centinela de inicio ; y el centinela de fin ? (se omite el carácter de verificación que va después). Cada inversión que pasa por el cabezal da un pulso de FEM ∝ v g²/((x − x_k)² + g²) con g = {#} mm (una resolución del cabezal elegida); la FEM se muestra relativa a un solo pulso a {#} m/s. El decodificador lleva el tiempo a partir de los propios pulsos, y por eso un deslizamiento irregular aún se lee.",
"<a>Induction and inductance</a>":
  "<a>Inducción e inductancia</a>",
"<a><span>←</span> <span>Faraday's and Lenz's Laws</span></a><a><span>Induced Electric Fields</span> <span>→</span></a>":
  "<a><span>←</span> <span>Leyes de Faraday y de Lenz</span></a><a><span>Campos eléctricos inducidos</span> <span>→</span></a>",
"magnet, stroke ±{#} cm":
  "imán, carrera ±{#} cm",
"rectifier and capacitor":
  "rectificador y capacitor",
"LED":
  "LED",
"Field lines: the magnet as a point dipole, as in the model. Coil tinted by the sign of the EMF. Drag to turn.":
  "Líneas de campo: el imán como dipolo puntual, como en el modelo. Bobina coloreada según el signo de la FEM. Arrastra para girar.",
"Shakes/s":
  "Agitaciones/s",
"Time (s)":
  "Tiempo (s)",
"EMF (V)":
  "FEM (V)",
"Stop shaking":
  "Dejar de agitar",
"light on":
  "luz encendida",
"The capacitor starts at {#} V and the light is on, with no shaking. The light dims as the capacitor empties. Shake to keep it lit: the energy comes from the work your hand does against the coil’s push on the magnet.":
  "El capacitor empieza en {#} V y la luz está encendida, sin agitar. La luz se atenúa conforme el capacitor se vacía. Agita para mantenerla encendida: la energía viene del trabajo que hace tu mano contra el empuje de la bobina sobre el imán.",
"off: capacitor below {#} V":
  "apagada: capacitor por debajo de {#} V",
"pen":
  "pluma",
"{#} cm × {#} cm, wires every {#} mm":
  "{#} cm × {#} cm, alambres cada {#} mm",
"EMF in the wires across x":
  "FEM en los alambres a lo largo de x",
"wire position x (mm)":
  "posición del alambre x (mm)",
"EMF (µV)":
  "FEM (µV)",
"Stop the circle":
  "Detener el círculo",
"The pen’s tip is a tiny magnet. Moving it changes the flux enclosed by each wire’s circuit, most for the wires right under it, so they carry a small EMF. Comparing neighboring wires pins down the pen to a fraction of the {#} mm spacing.":
  "La punta de la pluma es un imán diminuto. Moverla cambia el flujo encerrado por el circuito de cada alambre, más para los alambres justo debajo de ella, así que estos llevan una pequeña FEM. Comparar alambres vecinos ubica la pluma con una fracción de la separación de {#} mm.",
"Pen speed":
  "Rapidez de la pluma",
"Largest EMF in a wire":
  "Mayor FEM en un alambre",
"Pen, true position":
  "Pluma, posición real",
"Where the tablet puts it":
  "Dónde la ubica la tableta",
"cannot see the pen":
  "no puede ver la pluma",
"Why":
  "Por qué",
"the moving pen changes the flux through the wires near it":
  "la pluma en movimiento cambia el flujo a través de los alambres cercanos",
"tablet’s fit":
  "ajuste de la tableta",
"The pen is held still in the middle of the tablet. The field is strong under it, but it is not changing, so every wire reads zero and this tablet cannot tell where the pen is. Drag it and it reappears.":
  "La pluma se mantiene quieta en el centro de la tableta. El campo es intenso debajo de ella, pero no cambia, así que cada alambre marca cero y esta tableta no puede saber dónde está la pluma. Arrástrala y vuelve a aparecer.",
"pen not moving: no EMF in any wire":
  "pluma sin moverse: no hay FEM en ningún alambre",
"the pen is not moving (or barely): no change of flux, no EMF":
  "la pluma no se mueve (o apenas): no hay cambio de flujo, no hay FEM",
"head":
  "cabezal",
"magnetization near the head, {#} mm shown":
  "magnetización cerca del cabezal, se muestran {#} mm",
"each bit is {#} mm long":
  "cada bit mide {#} mm",
"EMF in the head (relative units)":
  "FEM en el cabezal (unidades relativas)",
"EMF":
  "FEM",
"The stripe holds tiny magnetized regions. As they pass the head, each flip of magnetization changes the flux in the head’s coil and gives a pulse. Swipe faster and the pulses are taller and closer together.":
  "La banda contiene diminutas regiones magnetizadas. Al pasar por el cabezal, cada inversión de la magnetización cambia el flujo en la bobina del cabezal y da un pulso. Desliza más rápido y los pulsos son más altos y más juntos.",
"Bits on the stripe":
  "Bits en la banda",
"{#} ({#} per inch, {#} mm each)":
  "{#} ({#} por pulgada, {#} mm cada uno)",
"Time for the data":
  "Tiempo para los datos",
"{#} ms at a steady speed":
  "{#} ms a rapidez constante",
"swipe in progress":
  "deslizamiento en curso",
"The swipe speeds up and slows down by {#} %. The pulses bunch and spread, yet the number still reads, because F2F carries its own clock: every bit starts with a flip.":
  "El deslizamiento se acelera y se frena ±{#} %. Los pulsos se juntan y se separan, y aun así el número se lee, porque F2F lleva su propio reloj: cada bit empieza con una inversión.",
"TEST CARD":
  "TARJETA DE PRUEBA",
"track {#}: ;{#}?":
  "pista {#}: ;{#}?",
"EMF in the head":
  "FEM en el cabezal",
"{#} ms/div":
  "{#} ms/div",
"read head and its coil":
  "cabezal lector y su bobina",
"the {#} mm of track {#} at the head, {#}× along the stripe":
  "los {#} mm de la pista {#} en el cabezal, {#}× a lo largo de la banda",
"scope":
  "osciloscopio",
"{#} nJ":
  "{#} nJ",
"on, {#} mA, {#} mW":
  "encendida, {#} mA, {#} mW",
"-{#} mJ":
  "-{#} mJ"
});
