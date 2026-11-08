/* ws/e-over-m in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/e-over-m', {
"r left (mm)":
  "r izquierdo (mm)",
"r right (mm)":
  "r derecho (mm)",
"% error":
  "% de error",
"Charge to Mass Ratio of the Electron | VirtualDemos":
  "Razón carga a masa del electrón | VirtualDemos",
"Charge to Mass Ratio of the Electron":
  "Razón carga a masa del electrón",
"<strong>Setups in the demo:</strong> No field: a straight beam; A circle; More voltage, bigger circle; More current, smaller circle; Tilt the tube: a helix; Measure e/m (this one fills the table with five simulated readings of its own, marked with an asterisk, so don’t use it for your own data).":
  "<strong>Configuraciones en la demo:</strong> Sin campo: un haz recto; Un círculo; Más voltaje, círculo más grande; Más corriente, círculo más pequeño; Inclina el tubo: una hélice; Mide e/m (esta llena la tabla con cinco lecturas simuladas propias, marcadas con un asterisco, así que no la uses para tus propios datos).",
"The apparatus is the PASCO SE-{#} e/m tube between a pair of Helmholtz coils, with the supplies and meters in front. The accelerating voltage \\(U\\) (labeled V on the supply) runs from {#} to {#} V in {#} V steps, and the coil current \\(I\\) from {#} to {#} A through both coils in series. The voltmeter and ammeter jitter a little, about {#} V and {#} mA, as real meters do.":
  "El aparato es el tubo e/m PASCO SE-{#} entre un par de bobinas de Helmholtz, con las fuentes y los medidores al frente. El voltaje de aceleración \\(U\\) (marcado V en la fuente) va de {#} a {#} V en pasos de {#} V, y la corriente de las bobinas \\(I\\) de {#} a {#} A a través de ambas bobinas en serie. El voltímetro y el amperímetro fluctúan un poco, unos {#} V y {#} mA, como lo hacen los medidores reales.",
"The tube turns in its socket by up to {#}° either way. At any angle but {#}° part of the velocity lies along the field and the beam winds into a helix.":
  "El tubo gira en su base hasta {#}° hacia cualquier lado. A cualquier ángulo que no sea {#}° parte de la velocidad queda a lo largo del campo y el haz se enrolla en una hélice.",
"The coils have \\(N = 130\\) turns each. Their mean radius \\(a\\) is half the average of the inner and outer diameters of the winding. These open at {#} and {#} cm, which give the manual’s \\(a = 158\\) mm; measuring them yourself is a check. The demo shows \\(B/I\\) at the center and \\(B\\) from the ammeter.":
  "Las bobinas tienen \\(N = 130\\) vueltas cada una. Su radio medio \\(a\\) es la mitad del promedio de los diámetros interior y exterior del devanado. Estos se abren en {#} y {#} cm, lo que da el \\(a = 158\\) mm del manual; medirlos tú mismo es una comprobación. La demo muestra \\(B/I\\) en el centro y \\(B\\) a partir del amperímetro.",
"Drag the 3D view to turn it and scroll to zoom (on a phone, two fingers); Reset view puts the camera back.":
  "Arrastra la vista 3D para girarla y desplaza para acercar (en un teléfono, con dos dedos); Restablecer la vista regresa la cámara.",
"The view below the coils looks through the front coil onto the mirrored scale behind the bulb. Whole scale, Zoom left and Zoom right choose how much of it you see. The eye moves along a rail in front of the tube, and the beam and its reflection line up only where the eye is straight in front of the beam. The two pointers L and R read in {#} mm steps; their readings are the distances from the center of the scale.":
  "La vista debajo de las bobinas mira a través de la bobina delantera hacia la escala con espejo detrás del bulbo. Escala completa, Acercar a la izquierda y Acercar a la derecha eligen cuánto de ella ves. El ojo se mueve a lo largo de un riel frente al tubo, y el haz y su reflejo se alinean solo donde el ojo está justo enfrente del haz. Los dos punteros L y R leen en pasos de {#} mm; sus lecturas son las distancias desde el centro de la escala.",
"<strong>Record reading</strong> stores the meter readings and your two pointer readings, never the true radius, and you can edit a row afterwards. <strong>Export to worksheet</strong> sends the rows to the Data table below: they fill the voltage, current and both radius columns (the scale reads in cm and is converted to mm), and the other columns are yours. <strong>Clear</strong> starts a new series. The demo works out \\(e/m\\) for each row and fits a line too.":
  "<strong>Registrar lectura</strong> guarda las lecturas de los medidores y tus dos lecturas de los punteros, nunca el radio verdadero, y puedes editar una fila después. <strong>Exportar a la hoja</strong> envía las filas a la tabla de Datos de abajo: llenan las columnas de voltaje, corriente y de ambos radios (la escala lee en cm y se convierte a mm), y las otras columnas son tuyas. <strong>Borrar</strong> empieza una nueva serie. La demo calcula \\(e/m\\) para cada fila y también ajusta una recta.",
"Under Instrument: the seed ({#} when the page opens) sets the meter jitter and the flicker of the beam, so a class sharing a seed sees the same beam radii and meter readings that agree within the jitter (the jitter still changes from moment to moment); New picks another. Blind hides the accepted value and the true radius. Field computed from the coils is on when the page opens; untick it for a perfectly uniform field. The earth’s field can be added along the coil axis, adding to \\(B\\) or opposing it. Show the true beam edges is an instructor check.":
  "En Instrumento: la semilla ({#} cuando se abre la página) fija la fluctuación de los medidores y el parpadeo del haz, así que un grupo que comparte una semilla ve los mismos radios del haz y lecturas de medidores que coinciden dentro de la fluctuación (la fluctuación sigue cambiando de un momento a otro); Nuevo elige otra. A ciegas oculta el valor aceptado y el radio verdadero. Campo calculado a partir de las bobinas está activado cuando se abre la página; desmárcalo para un campo perfectamente uniforme. El campo terrestre se puede añadir a lo largo del eje de las bobinas, sumándose a \\(B\\) u oponiéndose. Mostrar los bordes verdaderos del haz es una comprobación del instructor.",
"Each electron leaves the gun with kinetic energy \\(eU\\) and moves under \\(\\vec F = -e\\,\\vec v\\times\\vec B\\). In a uniform field the path is a circle, \\(r = mv/(eB)\\), so \\(e/m = 2U/(B^2r^2)\\). The value of \\(e/m\\) and \\(\\mu_0\\) are CODATA {#} values.":
  "Cada electrón sale del cañón con energía cinética \\(eU\\) y se mueve bajo \\(\\vec F = -e\\,\\vec v\\times\\vec B\\). En un campo uniforme la trayectoria es un círculo, \\(r = mv/(eB)\\), así que \\(e/m = 2U/(B^2r^2)\\). Los valores de \\(e/m\\) y de \\(\\mu_0\\) son valores CODATA {#}.",
"With the coil field on, \\(B\\) is computed everywhere from the exact field of two circular loops (complete elliptic integrals), and the path from a step by step integration. Away from the center the field is a little weaker, so circles come out a little larger than the center field predicts, and \\(e/m\\) worked out from the center field comes out low: by about {#}% for small circles, up to about {#}% for a {#} cm circle.":
  "Con el campo de las bobinas activado, \\(B\\) se calcula en todas partes a partir del campo exacto de dos espiras circulares (integrales elípticas completas), y la trayectoria a partir de una integración paso a paso. Lejos del centro el campo es un poco más débil, así que los círculos salen un poco más grandes de lo que predice el campo del centro, y \\(e/m\\) calculado con el campo del centro sale bajo: en cerca de {#}% para círculos pequeños, hasta cerca de {#}% para un círculo de {#} cm.",
"The earth’s field option adds \\(2\\times10^{-5}\\) T along the coil axis, about the horizontal part of the earth’s field in the southern US.":
  "La opción del campo terrestre añade \\(2\\times10^{-5}\\) T a lo largo del eje de las bobinas, más o menos la parte horizontal del campo terrestre en el sur de Estados Unidos.",
"Idealized: each coil is one loop at its mean radius, with the spacing equal to the radius (the Helmholtz condition); electrons are treated without relativity, which changes \\(r\\) by about {#}% at {#} V; the gun is a point {#} cm below the center of a bulb {#} cm in radius; the scale is {#} cm behind the beam and the eye {#} cm in front of it. In a real tube the electrons lose a little energy in the anode and in collisions with the helium, which is not simulated. The meter jitter and the flicker of the beam edges (up to about {#} mm) are simulated. The moving dots show the direction of travel, not the speed.":
  "Idealizado: cada bobina es una espira en su radio medio, con la separación igual al radio (la condición de Helmholtz); los electrones se tratan sin relatividad, lo que cambia \\(r\\) en cerca de {#}% a {#} V; el cañón es un punto {#} cm debajo del centro de un bulbo de {#} cm de radio; la escala está {#} cm detrás del haz y el ojo {#} cm delante de él. En un tubo real los electrones pierden un poco de energía en el ánodo y en colisiones con el helio, lo cual no se simula. La fluctuación de los medidores y el parpadeo de los bordes del haz (hasta unos {#} mm) sí se simulan. Los puntos en movimiento muestran la dirección del recorrido, no la rapidez.",
"Measure \\(e/m\\), the charge to mass ratio of the electron that J. J. Thomson first measured in {#}, by bending a beam of electrons into a circle with a known magnetic field and measuring the radius.":
  "Mide \\(e/m\\), la razón carga a masa del electrón que J. J. Thomson midió por primera vez en {#}, curvando un haz de electrones en un círculo con un campo magnético conocido y midiendo el radio.",
"The electron gun accelerates electrons through a voltage \\(U\\), so each electron gains kinetic energy \\(eU\\):":
  "El cañón de electrones acelera los electrones a través de un voltaje \\(U\\), así que cada electrón gana una energía cinética \\(eU\\):",
"\\[\\tfrac{1}{2}mv^2 = eU \\quad\\Rightarrow\\quad v^2 = \\frac{2eU}{m}\\]":
  "\\[\\tfrac{1}{2}mv^2 = eU \\quad\\Rightarrow\\quad v^2 = \\frac{2eU}{m}\\]",
"A pair of Helmholtz coils makes a nearly uniform field \\(B\\) at right angles to the beam. The magnetic force \\(evB\\) is always at right angles to the velocity, so it bends the beam into a circle of radius \\(r\\) without changing its speed (§{#}):":
  "Un par de bobinas de Helmholtz produce un campo casi uniforme \\(B\\) perpendicular al haz. La fuerza magnética \\(evB\\) siempre es perpendicular a la velocidad, así que curva el haz en un círculo de radio \\(r\\) sin cambiar su rapidez (§{#}):",
"\\[evB = \\frac{mv^2}{r}\\]":
  "\\[evB = \\frac{mv^2}{r}\\]",
"Eliminate \\(v\\) between the two equations:":
  "Elimina \\(v\\) entre las dos ecuaciones:",
"\\[\\frac{e}{m} = \\frac{2U}{B^2 r^2}\\]":
  "\\[\\frac{e}{m} = \\frac{2U}{B^2 r^2}\\]",
"The field at the center of the coils is":
  "El campo en el centro de las bobinas es",
"\\[B = \\left(\\frac{4}{5}\\right)^{3/2} \\frac{\\mu_0 N I}{R}\\]":
  "\\[B = \\left(\\frac{4}{5}\\right)^{3/2} \\frac{\\mu_0 N I}{R}\\]",
"where \\(I\\) is the current through the coils, \\(N\\) the number of turns on each coil and \\(R\\) the coil radius. For the PASCO SE-{#} apparatus, \\(N = 130\\) and \\(R = 158\\ \\text{mm}\\), which gives \\(B = 0.7398\\ \\text{mT}\\) per ampere. With a different apparatus, take \\(N\\) and \\(R\\) from its label or manual.":
  "donde \\(I\\) es la corriente a través de las bobinas, \\(N\\) el número de vueltas de cada bobina y \\(R\\) el radio de las bobinas. Para el aparato PASCO SE-{#}, \\(N = 130\\) y \\(R = 158\\ \\text{mm}\\), lo que da \\(B = 0.7398\\ \\text{mT}\\) por ampere. Con otro aparato, toma \\(N\\) y \\(R\\) de su etiqueta o de su manual.",
"The tube holds a little helium. Electrons excite the helium atoms they hit, and the glow marks the path of the beam. A mirrored scale behind the tube reads the radius.":
  "El tubo contiene un poco de helio. Los electrones excitan los átomos de helio con que chocan, y el brillo marca la trayectoria del haz. Una escala con espejo detrás del tubo lee el radio.",
"Show that \\(e/m = 2U/(B^2 r^2)\\) follows from the two equations above.":
  "Demuestra que \\(e/m = 2U/(B^2 r^2)\\) se obtiene de las dos ecuaciones de arriba.",
"If you double \\(U\\) and keep \\(I\\) fixed, what happens to \\(r\\)? If you double \\(I\\) and keep \\(U\\) fixed?":
  "Si duplicas \\(U\\) y mantienes \\(I\\) fija, ¿qué le pasa a \\(r\\)? ¿Y si duplicas \\(I\\) y mantienes \\(U\\) fijo?",
"Why can this experiment measure only the ratio \\(e/m\\) and not \\(e\\) and \\(m\\) separately?":
  "¿Por qué este experimento solo puede medir la razón \\(e/m\\) y no \\(e\\) y \\(m\\) por separado?",
"None for the virtual apparatus. On the real apparatus the accelerating voltage is high enough to hurt you: make and change connections only with both supplies off, and touch the tube only by its plastic base.":
  "Ninguno para el aparato virtual. En el aparato real el voltaje de aceleración es lo bastante alto para lastimarte: haz y cambia las conexiones solo con ambas fuentes apagadas, y toca el tubo solo por su base de plástico.",
"Before you start, note the instrument seed and turn on Blind, so the accepted value and the true radius are hidden.":
  "Antes de empezar, anota la semilla del instrumento y activa A ciegas, para que el valor aceptado y el radio verdadero queden ocultos.",
"<strong>Get a circle.</strong> With no current in the coils and about {#} V on the gun, the beam goes straight out. Raise the coil current slowly and watch the beam curve upward and close into a circle.":
  "<strong>Obtén un círculo.</strong> Sin corriente en las bobinas y con unos {#} V en el cañón, el haz sale recto. Sube lentamente la corriente de las bobinas y observa cómo el haz se curva hacia arriba y se cierra en un círculo.",
"<strong>Read the radius.</strong> Move your eye until the beam covers its own reflection on the left side of the scale: your eye is then straight in front of the beam and there is no parallax. Read where the beam crosses the scale. Do the same on the right side. The radius \\(r\\) is the average of the two readings.":
  "<strong>Lee el radio.</strong> Mueve el ojo hasta que el haz cubra su propio reflejo en el lado izquierdo de la escala: entonces tu ojo está justo enfrente del haz y no hay paralaje. Lee dónde cruza el haz la escala. Haz lo mismo en el lado derecho. El radio \\(r\\) es el promedio de las dos lecturas.",
"<strong>Take data.</strong> Read the circle at seven settings: {#} V at {#} A, {#} V at {#} A, {#} V at {#} A, {#} V at {#} A, {#} V at {#} A, {#} V at {#} A and {#} V at {#} A. At each one record \\(U\\) and \\(I\\) as the meters show them (not the values you aimed for) and both radius readings. Keep the tube square to the field: a helix gives a smaller radius. Send the readings to the worksheet before you clear them.":
  "<strong>Toma datos.</strong> Lee el círculo en siete ajustes: {#} V a {#} A, {#} V a {#} A, {#} V a {#} A, {#} V a {#} A, {#} V a {#} A, {#} V a {#} A y {#} V a {#} A. En cada uno registra \\(U\\) e \\(I\\) tal como los muestran los medidores (no los valores que buscabas) y ambas lecturas del radio. Mantén el tubo perpendicular al campo: una hélice da un radio menor. Envía las lecturas a la hoja de trabajo antes de borrarlas.",
"<strong>On the real apparatus.</strong> Follow the cabling diagram in the manual. Turn every voltage and current control fully down, set the voltage range to {#} to {#} V, switch both supplies on and let the filament warm up for about five minutes. If the beam does not bend when the current rises, the coils are fighting each other: reverse one coil. If it bends downward, swap the two leads at the coil supply. If it makes a spiral, turn the tube in its socket until it makes a flat circle. Adjust the voltage until the beam is sharp and bright, and keep the whole circle inside the bulb.":
  "<strong>En el aparato real.</strong> Sigue el diagrama de conexiones del manual. Baja por completo todos los controles de voltaje y de corriente, pon el intervalo de voltaje de {#} a {#} V, enciende ambas fuentes y deja que el filamento se caliente unos cinco minutos. Si el haz no se curva al subir la corriente, las bobinas se están oponiendo: invierte una bobina. Si se curva hacia abajo, intercambia los dos cables en la fuente de las bobinas. Si forma una espiral, gira el tubo en su base hasta que forme un círculo plano. Ajusta el voltaje hasta que el haz esté nítido y brillante, y mantén todo el círculo dentro del bulbo.",
"<span>D</span>\\(r\\) left (mm)":
  "<span>D</span>\\(r\\) izquierdo (mm)",
"<span>E</span>\\(r\\) right (mm)":
  "<span>E</span>\\(r\\) derecho (mm)",
"<span>I</span>% error":
  "<span>I</span>% de error",
"U (V), row {#}":
  "U (V), fila {#}",
"I (A), row {#}":
  "I (A), fila {#}",
"r left (mm), row {#}":
  "r izquierdo (mm), fila {#}",
"r right (mm), row {#}":
  "r derecho (mm), fila {#}",
"r (mm), row {#}":
  "r (mm), fila {#}",
"B (mT), row {#}":
  "B (mT), fila {#}",
"e/m (C/kg), row {#}":
  "e/m (C/kg), fila {#}",
"% error, row {#}":
  "% de error, fila {#}",
"B^2r^{#} ({#}^-{#} T²m²), row {#}":
  "B^2r^{#} ({#}^-{#} T²m²), fila {#}",
"2U (V), row {#}":
  "2U (V), fila {#}",
"For each trial, find \\(B\\) from \\(I\\) and then \\(e/m = 2U/(B^2 r^2)\\). Compare each with the accepted value, \\(1.75882\\times10^{11}\\) C/kg (CODATA {#}).":
  "Para cada ensayo, encuentra \\(B\\) a partir de \\(I\\) y luego \\(e/m = 2U/(B^2 r^2)\\). Compara cada uno con el valor aceptado, \\(1.75882\\times10^{11}\\) C/kg (CODATA {#}).",
"Make a graph with \\(B^2 r^2\\) on the horizontal axis and \\(2U\\) on the vertical axis. According to the equation, the points lie on a straight line through the origin with slope \\(e/m\\). Fit a line (with a free intercept, as always) and report the slope as your best value of \\(e/m\\); check that the intercept is zero within its uncertainty. Only then compare with the demo’s own fit.":
  "Haz una gráfica con \\(B^2 r^2\\) en el eje horizontal y \\(2U\\) en el eje vertical. Según la ecuación, los puntos caen sobre una recta que pasa por el origen con pendiente \\(e/m\\). Ajusta una recta (con ordenada al origen libre, como siempre) y reporta la pendiente como tu mejor valor de \\(e/m\\); comprueba que la ordenada al origen es cero dentro de su incertidumbre. Solo entonces compara con el ajuste propio de la demo.",
"Which is better, the average of the trials or the slope of the graph? Why?":
  "¿Qué es mejor, el promedio de los ensayos o la pendiente de la gráfica? ¿Por qué?",
"\\(e/m\\) depends on \\(r\\) squared, so a {#}% error in \\(r\\) becomes a {#}% error in \\(e/m\\). The same is true of \\(B\\), and so of \\(I\\) and \\(R\\). Estimate how precisely you can read each side of the circle (the beam has a width, and the virtual pointers move in {#} mm steps), and use that to estimate the uncertainty in \\(e/m\\) for one trial.":
  "\\(e/m\\) depende de \\(r\\) al cuadrado, así que un error de {#}% en \\(r\\) se convierte en un error de {#}% en \\(e/m\\). Lo mismo vale para \\(B\\), y por lo tanto para \\(I\\) y \\(R\\). Estima con qué precisión puedes leer cada lado del círculo (el haz tiene un ancho, y los punteros virtuales se mueven en pasos de {#} mm), y úsalo para estimar la incertidumbre de \\(e/m\\) en un ensayo.",
"The magnetic force acts on the electrons the whole time. Why doesn’t their speed change?":
  "La fuerza magnética actúa sobre los electrones todo el tiempo. ¿Por qué no cambia su rapidez?",
"If the tube is turned so the beam is not quite at right angles to the field, the beam makes a spiral. Why? Would measuring the spiral as if it were a circle make \\(e/m\\) too high or too low?":
  "Si el tubo se gira de modo que el haz no quede del todo perpendicular al campo, el haz forma una espiral. ¿Por qué? ¿Medir la espiral como si fuera un círculo haría que \\(e/m\\) saliera demasiado alto o demasiado bajo?",
"Electrons lose a little energy in collisions with the helium before they reach the circle. Does that make your measured \\(e/m\\) too high or too low?":
  "Los electrones pierden un poco de energía en colisiones con el helio antes de llegar al círculo. ¿Eso hace que tu \\(e/m\\) medido salga demasiado alto o demasiado bajo?",
"The earth’s magnetic field also acts on the beam. How could you check whether it affects your result?":
  "El campo magnético terrestre también actúa sobre el haz. ¿Cómo podrías comprobar si afecta tu resultado?",
"Your prelab answers, the data table, the graph with its fit, your value of \\(e/m\\) with its uncertainty and percent error, and answers to the questions. If any of your data came from the virtual apparatus, say so and give the instrument seed.":
  "Tus respuestas previas al laboratorio, la tabla de datos, la gráfica con su ajuste, tu valor de \\(e/m\\) con su incertidumbre y su porcentaje de error, y las respuestas a las preguntas. Si alguno de tus datos vino del aparato virtual, dilo y da la semilla del instrumento.",
"Magnetic field at the center of the coils":
  "Campo magnético en el centro de las bobinas",
"Magnetic force on an electron":
  "Fuerza magnética sobre un electrón",
"Current through the coils":
  "Corriente a través de las bobinas",
"Number of turns on each coil":
  "Número de vueltas de cada bobina",
"Radius of the coils":
  "Radio de las bobinas",
"Mean radius of the coils":
  "Radio medio de las bobinas",
"Radius of the beam's circle":
  "Radio del círculo del haz",
"Speed of the electrons":
  "Rapidez de los electrones",
"e/m of the Electron":
  "e/m del electrón"
});
