/* ws/induction-at-work in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/induction-at-work', {
"Shakes per second":
  "Sacudidas por segundo",
"Stroke (cm)":
  "Recorrido (cm)",
"Capacitor (F)":
  "Capacitor (F)",
"Time (s)":
  "Tiempo (s)",
"Largest EMF (V)":
  "FEM máxima (V)",
"Capacitor voltage (V)":
  "Voltaje del capacitor (V)",
"From your hand (J)":
  "De tu mano (J)",
"Into the capacitor (J)":
  "Al capacitor (J)",
"Heat in the coil (J)":
  "Calor en la bobina (J)",
"Lost in the diodes (J)":
  "Perdida en los diodos (J)",
"To the light (J)":
  "A la luz (J)",
"Induction at Work | VirtualDemos":
  "Inducción en acción | VirtualDemos",
"Induction at Work":
  "Inducción en acción",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (and §{#}, §{#}). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (y §{#}, §{#}). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Shake flashlight; Flashlight, light on; Graphics tablet; Tablet, pen held still; Card reader; Card, uneven swipe.":
  "<strong>Configuraciones en la demo:</strong> Linterna de sacudida; Linterna, luz encendida; Tableta gráfica; Tableta, pluma quieta; Lector de tarjetas; Tarjeta, deslizamiento irregular.",
"<strong>Using the demo.</strong> Three devices that work by induction. The shake flashlight slides a magnet back and forth through a coil; shakes per second and the stroke are set on the picture, and the Shake flashlight section starts and stops the shaking, empties the capacitor, chooses a {#} F or {#} F capacitor and switches the light on. Readouts give the EMF now and the largest in the last second, the charging current, the capacitor voltage, the light, and where the energy went: from your hand, into the capacitor, heat in the coil, lost in the diodes and given to the light. The graphics tablet follows a pen (drag it, or Draw a circle) from the EMFs in a grid of wires. The card reader swipes a magnetic stripe past a head and decodes the number on it. Blind hides the EMF plots, the capacitor voltage, the tablet’s estimate of the pen and the decoded number.":
  "<strong>Uso de la demo.</strong> Tres dispositivos que funcionan por inducción. La linterna de sacudida desliza un imán de un lado a otro a través de una bobina; las sacudidas por segundo y el recorrido se fijan en la imagen, y la sección Linterna de sacudida inicia y detiene las sacudidas, vacía el capacitor, elige un capacitor de {#} F o de {#} F y enciende la luz. Las lecturas en pantalla dan la FEM actual y la máxima del último segundo, la corriente de carga, el voltaje del capacitor, la luz, y adónde fue la energía: de tu mano, al capacitor, calor en la bobina, perdida en los diodos y entregada a la luz. La tableta gráfica sigue una pluma (arrástrala, o usa Dibujar un círculo) a partir de las FEM en una cuadrícula de alambres. El lector de tarjetas desliza una banda magnética frente a un cabezal y decodifica el número que contiene. A ciegas oculta las gráficas de FEM, el voltaje del capacitor, la estimación de la tableta de la posición de la pluma y el número decodificado.",
"<strong>What the demo models.</strong> Flashlight (chosen values): an NdFeB magnet (\\(B_r = 1.3\\) T, {#} mm across, {#} mm long) treated as a point dipole, moving as \\(z = A\\sin 2\\pi ft\\) through a {#} turn coil of radius {#} mm and length {#} mm wound with {#} mm copper wire ({#} Ω). A bridge rectifier (two diodes conducting, {#} V each) charges the capacitor; the light is a {#} V LED with {#} Ω in series. The EMF is \\(-d\\Phi/dt = -(d\\Phi/dz)v\\). Tablet: a small pen magnet {#} mm above long wires {#} mm apart. Card: track {#} of a magnetic stripe, {#} bits per inch, F2F recording. Simulated data.":
  "<strong>Qué modela la demo.</strong> Linterna (valores elegidos): un imán de NdFeB (\\(B_r = 1.3\\) T, {#} mm de diámetro, {#} mm de largo) tratado como un dipolo puntual, que se mueve como \\(z = A\\sin 2\\pi ft\\) a través de una bobina de {#} vueltas de radio {#} mm y longitud {#} mm, enrollada con alambre de cobre de {#} mm ({#} Ω). Un puente rectificador (dos diodos conduciendo, {#} V cada uno) carga el capacitor; la luz es un LED de {#} V con {#} Ω en serie. La FEM es \\(-d\\Phi/dt = -(d\\Phi/dz)v\\). Tableta: un pequeño imán en la pluma a {#} mm sobre alambres largos separados {#} mm. Tarjeta: pista {#} de una banda magnética, {#} bits por pulgada, grabación F2F. Datos simulados.",
"Use Faraday’s law to explain how a shake flashlight charges, measure how its EMF depends on how fast it is shaken, follow where the energy goes, and see how a graphics tablet and a card reader use induction.":
  "Usa la ley de Faraday para explicar cómo se carga una linterna de sacudida, mide cómo depende su FEM de qué tan rápido se sacude, sigue adónde va la energía, y ve cómo una tableta gráfica y un lector de tarjetas usan la inducción.",
"A magnet moving through a coil of \\(N\\) turns changes the flux through it, and induces the EMF":
  "Un imán que se mueve a través de una bobina de \\(N\\) vueltas cambia el flujo a través de ella, e induce la FEM",
"\\[\\varepsilon = -\\frac{d\\Phi}{dt} = -\\frac{d\\Phi}{dz}\\,v.\\]":
  "\\[\\varepsilon = -\\frac{d\\Phi}{dt} = -\\frac{d\\Phi}{dz}\\,v.\\]",
"The flux changes fastest as the magnet enters and leaves the coil, so the EMF comes in pulses that change sign, and their size is proportional to the magnet’s speed \\(v\\). Shaken as \\(z = A\\sin 2\\pi ft\\), the magnet’s top speed is \\(2\\pi fA\\). The pulses are rectified to charge a capacitor \\(C\\) to a voltage \\(V\\), storing \\(\\tfrac12 CV^2\\). Lenz’s law says the induced current pushes back on the magnet, so your hand does work; that work becomes the capacitor’s energy, heat in the coil’s resistance, and losses in the diodes. Once the capacitor reaches the peak EMF less the diode drops, no more current flows.":
  "El flujo cambia más rápido cuando el imán entra y sale de la bobina, así que la FEM llega en pulsos que cambian de signo, y su tamaño es proporcional a la rapidez del imán \\(v\\). Sacudido como \\(z = A\\sin 2\\pi ft\\), la rapidez máxima del imán es \\(2\\pi fA\\). Los pulsos se rectifican para cargar un capacitor \\(C\\) a un voltaje \\(V\\), almacenando \\(\\tfrac12 CV^2\\). La ley de Lenz dice que la corriente inducida empuja de regreso al imán, así que tu mano hace trabajo; ese trabajo se convierte en la energía del capacitor, en calor en la resistencia de la bobina y en pérdidas en los diodos. Una vez que el capacitor llega a la FEM máxima menos las caídas de los diodos, ya no fluye corriente.",
"A graphics tablet uses the same law: the moving pen magnet changes the flux through nearby wires, and comparing the EMFs locates it. A card reader’s head sees an EMF pulse wherever the stripe’s magnetization flips.":
  "Una tableta gráfica usa la misma ley: el imán de la pluma en movimiento cambia el flujo a través de los alambres cercanos, y comparar las FEM la localiza. El cabezal de un lector de tarjetas ve un pulso de FEM dondequiera que la magnetización de la banda se invierte.",
"The magnet is shaken {#} times a second with a stroke of {#} cm from the center to each end. What is its top speed?":
  "El imán se sacude {#} veces por segundo con un recorrido de {#} cm del centro a cada extremo. ¿Cuál es su rapidez máxima?",
"If the EMF peaks at {#} V at that rate, about what peak would you expect at {#} shakes per second? With a {#} cm stroke at {#} shakes per second?":
  "Si la FEM llega a un máximo de {#} V a ese ritmo, ¿qué máximo esperarías más o menos con {#} sacudidas por segundo? ¿Con un recorrido de {#} cm a {#} sacudidas por segundo?",
"How much energy does a {#} F capacitor store at {#} V? At {#} V?":
  "¿Cuánta energía almacena un capacitor de {#} F a {#} V? ¿Y a {#} V?",
"Why does a graphics tablet of this kind lose the pen when it is held still?":
  "¿Por qué una tableta gráfica de este tipo pierde la pluma cuando se mantiene quieta?",
"Strong neodymium magnets snap together hard enough to pinch skin and shatter; keep them apart and away from cards, phones and pacemakers.":
  "Los imanes fuertes de neodimio se juntan con tanta fuerza que pueden pellizcar la piel y romperse; mantenlos separados y lejos de tarjetas, teléfonos y marcapasos.",
"<strong>Part {#}: the EMF and the shaking.</strong> With a {#} cm stroke and the {#} F capacitor, record the largest EMF after a few seconds of shaking at {#}, {#}, {#}, {#}, {#} and {#} shakes per second. Then, at {#} shakes per second, record it for strokes of {#}, {#}, {#}, {#} and {#} cm.":
  "<strong>Parte {#}: la FEM y las sacudidas.</strong> Con un recorrido de {#} cm y el capacitor de {#} F, registra la FEM máxima después de unos segundos de sacudir a {#}, {#}, {#}, {#}, {#} y {#} sacudidas por segundo. Luego, a {#} sacudidas por segundo, regístrala para recorridos de {#}, {#}, {#}, {#} y {#} cm.",
"<strong>Part {#}: charging the capacitor.</strong> Empty the {#} F capacitor and shake at {#} shakes per second with a {#} cm stroke. Record the readings every {#} s for {#} s (fast forward helps). Repeat with the {#} F capacitor.":
  "<strong>Parte {#}: carga del capacitor.</strong> Vacía el capacitor de {#} F y sacude a {#} sacudidas por segundo con un recorrido de {#} cm. Registra las lecturas cada {#} s durante {#} s (el avance rápido ayuda). Repite con el capacitor de {#} F.",
"<strong>Part {#}: the light.</strong> Start with the {#} F capacitor at {#} V, the light on and no shaking (the Flashlight, light on setup). Record the readings every {#} s for {#} s. Then, with the light still on, shake at {#} per second for {#} s and record, and then at {#} per second for {#} s and record.":
  "<strong>Parte {#}: la luz.</strong> Empieza con el capacitor de {#} F a {#} V, la luz encendida y sin sacudir (la configuración Linterna, luz encendida). Registra las lecturas cada {#} s durante {#} s. Luego, con la luz aún encendida, sacude a {#} por segundo durante {#} s y registra, y después a {#} por segundo durante {#} s y registra.",
"<strong>Part {#}: tablet and card reader.</strong> Draw a circle with the pen, then hold it still, and describe what the tablet does each time. Swipe the card at {#}, {#} and {#} m/s and with an uneven swipe; describe the pulses and whether the number is read. (These are not recorded in the table.)":
  "<strong>Parte {#}: tableta y lector de tarjetas.</strong> Dibuja un círculo con la pluma, luego mantenla quieta, y describe lo que hace la tableta cada vez. Desliza la tarjeta a {#}, {#} y {#} m/s y con un deslizamiento irregular; describe los pulsos y si el número se lee. (Esto no se registra en la tabla.)",
"<strong>Using the virtual apparatus.</strong> The time and the energies count from when the capacitor was last emptied. The largest EMF is the largest in the last second, so it is left blank for the first second after emptying. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> El tiempo y las energías se cuentan desde la última vez que se vació el capacitor. La FEM máxima es la máxima del último segundo, así que queda en blanco durante el primer segundo después de vaciarlo. Envía cada parte a la hoja de trabajo antes de borrar, para que cada parte tenga su propia copia de la tabla de datos.",
"<span>B</span>Shakes per second":
  "<span>B</span>Sacudidas por segundo",
"<span>C</span>Stroke (cm)":
  "<span>C</span>Recorrido (cm)",
"<span>D</span>Capacitor (F)":
  "<span>D</span>Capacitor (F)",
"<span>E</span>Light":
  "<span>E</span>Luz",
"<span>F</span>Time (s)":
  "<span>F</span>Tiempo (s)",
"<span>G</span>Largest EMF (V)":
  "<span>G</span>FEM máxima (V)",
"<span>H</span>Capacitor voltage (V)":
  "<span>H</span>Voltaje del capacitor (V)",
"<span>I</span>From your hand (J)":
  "<span>I</span>De tu mano (J)",
"<span>J</span>Into the capacitor (J)":
  "<span>J</span>Al capacitor (J)",
"<span>K</span>Heat in the coil (J)":
  "<span>K</span>Calor en la bobina (J)",
"<span>L</span>Lost in the diodes (J)":
  "<span>L</span>Perdida en los diodos (J)",
"<span>M</span>To the light (J)":
  "<span>M</span>A la luz (J)",
"Shakes per second, row {#}":
  "Sacudidas por segundo, fila {#}",
"Stroke (cm), row {#}":
  "Recorrido (cm), fila {#}",
"Capacitor (F), row {#}":
  "Capacitor (F), fila {#}",
"Light, row {#}":
  "Luz, fila {#}",
"Time (s), row {#}":
  "Tiempo (s), fila {#}",
"Largest EMF (V), row {#}":
  "FEM máxima (V), fila {#}",
"Capacitor voltage (V), row {#}":
  "Voltaje del capacitor (V), fila {#}",
"From your hand (J), row {#}":
  "De tu mano (J), fila {#}",
"Into the capacitor (J), row {#}":
  "Al capacitor (J), fila {#}",
"Heat in the coil (J), row {#}":
  "Calor en la bobina (J), fila {#}",
"Lost in the diodes (J), row {#}":
  "Perdida en los diodos (J), fila {#}",
"To the light (J), row {#}":
  "A la luz (J), fila {#}",
"For Part {#}, graph the largest EMF against the shakes per second, and against the stroke. Is it proportional to the top speed \\(2\\pi fA\\)? Why might it not be exactly, for a short stroke?":
  "Para la Parte {#}, grafica la FEM máxima en función de las sacudidas por segundo, y en función del recorrido. ¿Es proporcional a la rapidez máxima \\(2\\pi fA\\)? ¿Por qué podría no serlo exactamente, para un recorrido corto?",
"For Part {#}, graph the capacitor voltage against time for each capacitor. What voltage does it approach, and why? Check the energy balance: does the energy from your hand equal the sum of the rest?":
  "Para la Parte {#}, grafica el voltaje del capacitor en función del tiempo para cada capacitor. ¿A qué voltaje se acerca, y por qué? Comprueba el balance de energía: ¿la energía de tu mano es igual a la suma del resto?",
"For Part {#}, what fraction of the energy from your hand ends up in the capacitor? Where does the rest go?":
  "Para la Parte {#}, ¿qué fracción de la energía de tu mano termina en el capacitor? ¿Adónde va el resto?",
"For Part {#}, graph the capacitor voltage against time while the light runs alone. What voltage does it approach, and how long does the light current take to fall to a tenth of its starting value? Compare the energy given to the light with the drop in \\(\\tfrac12 CV^2\\). Explain from Part {#} why shaking at {#} per second cannot keep the light on, while {#} per second can.":
  "Para la Parte {#}, grafica el voltaje del capacitor en función del tiempo mientras la luz funciona sola. ¿A qué voltaje se acerca, y cuánto tarda la corriente de la luz en bajar a una décima de su valor inicial? Compara la energía entregada a la luz con la caída de \\(\\tfrac12 CV^2\\). Explica a partir de la Parte {#} por qué sacudir a {#} por segundo no puede mantener la luz encendida, mientras que a {#} por segundo sí.",
"For Part {#}, explain each observation from Faraday’s law: why the still pen vanishes, why a faster swipe gives taller pulses, and how the number can still be read from an uneven swipe.":
  "Para la Parte {#}, explica cada observación a partir de la ley de Faraday: por qué la pluma quieta desaparece, por qué un deslizamiento más rápido da pulsos más altos, y cómo el número aún puede leerse con un deslizamiento irregular.",
"The model is exact and has no noise; the largest EMF depends a little on when in the cycle it is read, so read it after a few seconds of steady shaking. The magnet is treated as a point dipole, which overstates the flux when it is inside the coil; the diodes are given a fixed {#} V drop, and the coil’s inductance is left out. A real flashlight also loses energy to friction and to the magnet bouncing at the ends.":
  "El modelo es exacto y no tiene ruido; la FEM máxima depende un poco de en qué momento del ciclo se lee, así que léela después de unos segundos de sacudir de forma constante. El imán se trata como un dipolo puntual, lo que sobrestima el flujo cuando está dentro de la bobina; a los diodos se les da una caída fija de {#} V, y la inductancia de la bobina se deja fuera. Una linterna real también pierde energía por fricción y por los rebotes del imán en los extremos.",
"Why does a shake flashlight need a capacitor (or battery) at all?":
  "¿Por qué una linterna de sacudida necesita un capacitor (o una batería)?",
"Why is it harder to shake the flashlight while it is charging than when the coil is disconnected?":
  "¿Por qué es más difícil sacudir la linterna mientras se carga que cuando la bobina está desconectada?",
"A card swiped very slowly sometimes fails to read. Why?":
  "Una tarjeta deslizada muy lentamente a veces no se lee. ¿Por qué?",
"Prelab answers, a Data table copy for each part, the graphs, your energy balance, your descriptions for Part {#}, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, una copia de la tabla de datos para cada parte, las gráficas, tu balance de energía, tus descripciones de la Parte {#}, y respuestas a las preguntas. Identifica los datos simulados.",
"Amplitude of the shake":
  "Amplitud de la sacudida",
"Remanence of the magnet":
  "Remanencia del imán",
"Number of turns in the coil":
  "Número de vueltas de la bobina",
"Magnetic flux through the coil":
  "Flujo magnético a través de la bobina",
"Voltage across the capacitor":
  "Voltaje a través del capacitor",
"Induced EMF":
  "FEM inducida",
"Frequency of the shake":
  "Frecuencia de la sacudida",
"Speed of the magnet":
  "Rapidez del imán",
"Position of the magnet along the coil's axis":
  "Posición del imán a lo largo del eje de la bobina"
});
