/* ws/induced-electric-field in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/induced-electric-field', {
"Time t (ms)":
  "Tiempo t (ms)",
"dB/dt (T/s)":
  "dB/dt (T/s)",
"Path radius (cm)":
  "Radio de la trayectoria (cm)",
"Center from the axis (cm)":
  "Centro desde el eje (cm)",
"Flux Φ (Wb)":
  "Flujo Φ (Wb)",
"-dΦ/dt (V)":
  "-dΦ/dt (V)",
"ointvec E· dvec l (V)":
  "ointvec E· dvec l (V)",
"E on the path (V/m)":
  "E en la trayectoria (V/m)",
"Induced Electric Fields | VirtualDemos":
  "Campos eléctricos inducidos | VirtualDemos",
"Induced Electric Fields":
  "Campos eléctricos inducidos",
"<strong>Setups in the demo:</strong> Example {#}, path outside; Path inside; Path off to the side; Path around part of it; Steady current; Alternating current.":
  "<strong>Configuraciones en la demo:</strong> Ejemplo {#}, trayectoria por fuera; Trayectoria por dentro; Trayectoria a un lado; Trayectoria alrededor de una parte; Corriente constante; Corriente alterna.",
"<strong>Using the demo.</strong> The end of a long solenoid seen along its axis, with a closed circular path around or beside it. Solenoid current chooses how the current changes (decaying, ramp up, alternating or steady) and sets \\(I_0\\), the decay constant or rate, the turns per meter and the solenoid’s radius; Play, Pause, Step and Reset control time. Closed path sets the path’s radius and the distance of its center from the axis (or drag it); the path is followed counterclockwise, with \\(B\\) out of the page positive. Readouts give the time, the current, \\(B\\) and \\(dB/dt\\) inside, the flux through the path and \\(-d\\Phi/dt\\), the circulation \\(\\oint\\vec E\\cdot d\\vec l\\) added up around the path, and \\(E\\) on a centered path. Blind hides the field arrows and plot, \\(E\\) and the circulation.":
  "<strong>Uso de la demo.</strong> El extremo de un solenoide largo visto a lo largo de su eje, con una trayectoria circular cerrada alrededor de él o a su lado. Corriente del solenoide elige cómo cambia la corriente (decreciente, en rampa, alterna o constante) y fija \\(I_0\\), la constante de decaimiento o el ritmo, las vueltas por metro y el radio del solenoide; Iniciar, Pausa, Paso y Reiniciar controlan el tiempo. Trayectoria cerrada fija el radio de la trayectoria y la distancia de su centro al eje (o arrástrala); la trayectoria se recorre en sentido antihorario, con \\(B\\) hacia fuera de la página positivo. Las lecturas dan el tiempo, la corriente, \\(B\\) y \\(dB/dt\\) dentro, el flujo a través de la trayectoria y \\(-d\\Phi/dt\\), la circulación \\(\\oint\\vec E\\cdot d\\vec l\\) sumada alrededor de la trayectoria, y \\(E\\) en una trayectoria centrada. A ciegas oculta las flechas del campo y la gráfica, \\(E\\) y la circulación.",
"<strong>What the demo models.</strong> An ideal long solenoid: \\(B = \\mu_0 nI\\) inside and zero outside, with the current changing slowly enough that \\(B\\) is uniform inside at each instant. By symmetry the induced field circles the axis, with \\(E = (r/2)\\lvert dB/dt\\rvert\\) inside and \\(E = (R^2/2r)\\lvert dB/dt\\rvert\\) outside. The circulation is added up numerically in {#} pieces around the path, independently of the flux. Simulated data.":
  "<strong>Lo que modela la demo.</strong> Un solenoide largo ideal: \\(B = \\mu_0 nI\\) dentro y cero fuera, con la corriente cambiando lo bastante lento para que \\(B\\) sea uniforme dentro en cada instante. Por simetría el campo inducido circula alrededor del eje, con \\(E = (r/2)\\lvert dB/dt\\rvert\\) dentro y \\(E = (R^2/2r)\\lvert dB/dt\\rvert\\) fuera. La circulación se suma numéricamente en {#} trozos alrededor de la trayectoria, independientemente del flujo. Datos simulados.",
"Show that a changing magnetic field makes an electric field, even where the magnetic field itself is zero, and test Faraday’s law, \\(\\oint\\vec E\\cdot d\\vec l = -d\\Phi/dt\\), for paths inside, outside and beside a solenoid.":
  "Demuestra que un campo magnético variable produce un campo eléctrico, incluso donde el campo magnético mismo es cero, y pon a prueba la ley de Faraday, \\(\\oint\\vec E\\cdot d\\vec l = -d\\Phi/dt\\), para trayectorias dentro, fuera y al lado de un solenoide.",
"Faraday’s law says that around any closed path":
  "La ley de Faraday dice que alrededor de cualquier trayectoria cerrada",
"\\[\\oint\\vec E\\cdot d\\vec l = -\\frac{d\\Phi_m}{dt},\\]":
  "\\[\\oint\\vec E\\cdot d\\vec l = -\\frac{d\\Phi_m}{dt},\\]",
"where \\(\\Phi_m\\) is the magnetic flux through the path. No wire is needed: the changing flux makes an electric field in empty space, and a wire placed on the path simply lets that field drive a current. For a long solenoid of radius \\(R\\), with \\(B = \\mu_0 nI\\) inside and zero outside, the field circles the axis. On a centered circle of radius \\(r\\), \\(\\oint\\vec E\\cdot d\\vec l = 2\\pi rE\\), so":
  "donde \\(\\Phi_m\\) es el flujo magnético a través de la trayectoria. No se necesita ningún cable: el flujo variable produce un campo eléctrico en el espacio vacío, y un cable colocado en la trayectoria simplemente deja que ese campo impulse una corriente. Para un solenoide largo de radio \\(R\\), con \\(B = \\mu_0 nI\\) dentro y cero fuera, el campo circula alrededor del eje. En un círculo centrado de radio \\(r\\), \\(\\oint\\vec E\\cdot d\\vec l = 2\\pi rE\\), así que",
"\\[E = \\frac{r}{2}\\left|\\frac{dB}{dt}\\right|\\quad (r < R),\\qquad E = \\frac{R^2}{2r}\\left|\\frac{dB}{dt}\\right|\\quad (r > R).\\]":
  "\\[E = \\frac{r}{2}\\left|\\frac{dB}{dt}\\right|\\quad (r < R),\\qquad E = \\frac{R^2}{2r}\\left|\\frac{dB}{dt}\\right|\\quad (r > R).\\]",
"Outside the solenoid \\(B\\) is zero, but \\(E\\) is not. For the decaying current \\(I = I_0 e^{-\\alpha t}\\), \\(dB/dt = -\\alpha\\mu_0 nI_0 e^{-\\alpha t}\\).":
  "Fuera del solenoide \\(B\\) es cero, pero \\(E\\) no. Para la corriente decreciente \\(I = I_0 e^{-\\alpha t}\\), \\(dB/dt = -\\alpha\\mu_0 nI_0 e^{-\\alpha t}\\).",
"OpenStax Example {#}: \\(R = 2.0\\) cm, \\(n = 2000\\) turns per meter, \\(I = (2.0\\ \\mathrm{A})e^{-\\alpha t}\\) with \\(\\alpha = 200\\ \\mathrm{s^{-1}}\\). Find \\(dB/dt\\) at \\(t = 0\\).":
  "Ejemplo {#} de OpenStax: \\(R = 2.0\\) cm, \\(n = 2000\\) vueltas por metro, \\(I = (2.0\\ \\mathrm{A})e^{-\\alpha t}\\) con \\(\\alpha = 200\\ \\mathrm{s^{-1}}\\). Encuentra \\(dB/dt\\) en \\(t = 0\\).",
"Find \\(E\\) at \\(t = 0\\) at \\(r = 1.0\\) cm (inside) and \\(r = 6.0\\) cm (outside).":
  "Encuentra \\(E\\) en \\(t = 0\\) en \\(r = 1.0\\) cm (dentro) y \\(r = 6.0\\) cm (fuera).",
"A circular path of radius {#} cm lies beside the solenoid, not around it. What is \\(\\oint\\vec E\\cdot d\\vec l\\)? Is \\(E\\) zero on it?":
  "Una trayectoria circular de radio {#} cm está al lado del solenoide, no alrededor de él. ¿Cuánto vale \\(\\oint\\vec E\\cdot d\\vec l\\)? ¿Es \\(E\\) cero en ella?",
"Why is there no induced electric field when the current is steady, however large it is?":
  "¿Por qué no hay campo eléctrico inducido cuando la corriente es constante, por grande que sea?",
"Two centered circular wire loops surround the solenoid of Before the lab {#}, one of radius {#} cm and one of radius {#} cm. At \\(t = 0\\), is the EMF around the {#} cm loop larger than, smaller than or the same as the EMF around the {#} cm loop? Why?":
  "Dos espiras circulares de alambre centradas rodean el solenoide de Antes del laboratorio {#}, una de {#} cm de radio y otra de {#} cm de radio. En \\(t = 0\\), ¿la fem alrededor de la espira de {#} cm es mayor, menor o igual que la fem alrededor de la espira de {#} cm? ¿Por qué?",
"A real solenoid switched off suddenly can induce a large voltage across its own terminals; a diode across the coil protects the circuit and the person switching it.":
  "Un solenoide real que se apaga de golpe puede inducir un voltaje grande entre sus propias terminales; un diodo a través de la bobina protege el circuito y a la persona que lo apaga.",
"<strong>Part {#}: field against distance.</strong> Choose the setup Example {#}, path outside, press Pause, then Reset, so the Time t readout shows {#}. Leave Path center, distance from the axis at {#} (centered). Set the Path radius slider to {#}, {#}, {#}, {#}, {#}, {#} and {#} cm and press Record reading at each; \\(E\\) goes in the \\(E\\) on the path column and \\(-d\\Phi/dt\\) in its own column. Export to worksheet, then Clear.":
  "<strong>Parte {#}: campo contra distancia.</strong> Elige la configuración Ejemplo {#}, trayectoria exterior, pulsa Pausa y luego Reiniciar, de modo que la lectura Tiempo t muestre {#}. Deja Centro de la trayectoria, distancia al eje en {#} (centrada). Fija el control deslizante Radio de la trayectoria en {#}, {#}, {#}, {#}, {#}, {#} y {#} cm y pulsa Registrar lectura en cada uno; \\(E\\) va en la columna \\(E\\) en la trayectoria y \\(-d\\Phi/dt\\) en su propia columna. Usa Exportar a la hoja y luego Borrar.",
"<strong>Part {#}: paths that are not centered.</strong> Still at \\(t = 0\\), set Path radius to {#} cm and Path center, distance from the axis to {#}, {#} and {#} cm, pressing Record reading at each; then set Path radius to {#} cm with the center {#} cm from the axis and record. The circulation goes in the \\(\\oint\\vec E\\cdot d\\vec l\\) column (the \\(E\\) column reads not the same all around for these paths). Export to worksheet, then Clear.":
  "<strong>Parte {#}: trayectorias que no están centradas.</strong> Todavía en \\(t = 0\\), fija Radio de la trayectoria en {#} cm y Centro de la trayectoria, distancia al eje en {#}, {#} y {#} cm, pulsando Registrar lectura en cada uno; luego fija Radio de la trayectoria en {#} cm con el centro a {#} cm del eje y registra. La circulación va en la columna \\(\\oint\\vec E\\cdot d\\vec l\\) (la columna \\(E\\) dice no es igual en todo el contorno para estas trayectorias). Exporta a la hoja y luego Borra.",
"<strong>Part {#}: how fast the current changes.</strong> Choose Example {#}, path outside again (a centered {#} cm path), Pause and Reset. Set the Decay constant α slider to {#}, {#}, {#}, {#}, {#} and {#} per second and press Record reading at each. Then press Steady under Solenoid current and record once more. Export to worksheet.":
  "<strong>Parte {#}: qué tan rápido cambia la corriente.</strong> Elige Ejemplo {#}, trayectoria exterior otra vez (una trayectoria centrada de {#} cm), Pausa y Reiniciar. Fija el control Constante de decaimiento α en {#}, {#}, {#}, {#}, {#} y {#} por segundo y pulsa Registrar lectura en cada uno. Luego pulsa Constante en Corriente del solenoide y registra una vez más. Exporta a la hoja.",
"<strong>Using the virtual apparatus.</strong> The decay constant moves in steps on a log scale, so {#} and {#} per second come out as {#} and {#}; record the value the demo shows. Pause, then Reset to stand at \\(t = 0\\); while paused you can move the path freely. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> La constante de decaimiento se mueve en pasos sobre una escala logarítmica, así que {#} y {#} por segundo salen como {#} y {#}; registra el valor que muestra la demo. Pausa y luego pulsa Reiniciar para quedarte en \\(t = 0\\); en pausa puedes mover la trayectoria libremente. Envía cada parte a la hoja de trabajo antes de borrar, para que cada parte tenga su propia copia de la tabla de datos.",
"<span>B</span>Current":
  "<span>B</span>Corriente",
"<span>C</span>Time \\(t\\) (ms)":
  "<span>C</span>Tiempo \\(t\\) (ms)",
"<span>D</span>\\(dB/dt\\) (T/s)":
  "<span>D</span>\\(dB/dt\\) (T/s)",
"<span>E</span>Path radius (cm)":
  "<span>E</span>Radio de la trayectoria (cm)",
"<span>F</span>Center from the axis (cm)":
  "<span>F</span>Centro desde el eje (cm)",
"<span>G</span>Flux \\(\\Phi\\) (Wb)":
  "<span>G</span>Flujo \\(\\Phi\\) (Wb)",
"<span>H</span>\\(-d\\Phi/dt\\) (V)":
  "<span>H</span>\\(-d\\Phi/dt\\) (V)",
"<span>I</span>\\(\\oint\\vec E\\cdot d\\vec l\\) (V)":
  "<span>I</span>\\(\\oint\\vec E\\cdot d\\vec l\\) (V)",
"<span>J</span>\\(E\\) on the path (V/m)":
  "<span>J</span>\\(E\\) en la trayectoria (V/m)",
"Current, row {#}":
  "Corriente, fila {#}",
"Time t (ms), row {#}":
  "Tiempo t (ms), fila {#}",
"dB/dt (T/s), row {#}":
  "dB/dt (T/s), fila {#}",
"Path radius (cm), row {#}":
  "Radio de la trayectoria (cm), fila {#}",
"Center from the axis (cm), row {#}":
  "Centro desde el eje (cm), fila {#}",
"Flux Φ (Wb), row {#}":
  "Flujo Φ (Wb), fila {#}",
"-dΦ/dt (V), row {#}":
  "-dΦ/dt (V), fila {#}",
"ointvec E· dvec l (V), row {#}":
  "ointvec E· dvec l (V), fila {#}",
"E on the path (V/m), row {#}":
  "E en la trayectoria (V/m), fila {#}",
"For Part {#}, graph \\(E\\) on the path (vertical) against Path radius (horizontal). Where is \\(E\\) largest? For the paths inside, find the slope and compare it with \\(\\lvert dB/dt\\rvert/2\\). For those outside, show that \\(Er\\) is the same for each, and compare it with \\(R^2\\lvert dB/dt\\rvert/2\\).":
  "Para la Parte {#}, grafica \\(E\\) en la trayectoria (vertical) en función del Radio de la trayectoria (horizontal). ¿Dónde es mayor \\(E\\)? Para las trayectorias interiores, encuentra la pendiente y compárala con \\(\\lvert dB/dt\\rvert/2\\). Para las exteriores, muestra que \\(Er\\) es igual para cada una, y compáralo con \\(R^2\\lvert dB/dt\\rvert/2\\).",
"For Parts {#} and {#}, compare \\(\\oint\\vec E\\cdot d\\vec l\\) with \\(-d\\Phi/dt\\) for every path. Explain why the path beside the solenoid gives zero although \\(E\\) is not zero on it.":
  "Para las Partes {#} y {#}, compara \\(\\oint\\vec E\\cdot d\\vec l\\) con \\(-d\\Phi/dt\\) para cada trayectoria. Explica por qué la trayectoria al lado del solenoide da cero aunque \\(E\\) no sea cero en ella.",
"For Part {#}, graph \\(E\\) on the path against the decay constant α (read it from the Current column). What does it show about what makes the electric field: the size of \\(B\\), or how fast it changes?":
  "Para la Parte {#}, grafica \\(E\\) en la trayectoria en función de la constante de decaimiento α (léela en la columna Corriente). ¿Qué muestra sobre lo que produce el campo eléctrico: el tamaño de \\(B\\), o qué tan rápido cambia?",
"Turn Blind off and look at the field arrows in Part {#}. Why can the field outside the solenoid not be found from Faraday’s law alone when the path is off center?":
  "Desactiva A ciegas y observa las flechas del campo en la Parte {#}. ¿Por qué el campo fuera del solenoide no se puede encontrar solo con la ley de Faraday cuando la trayectoria no está centrada?",
"The model is exact; the circulation is added up numerically in {#} pieces, which agrees with \\(-d\\Phi/dt\\) to rounding error for centered paths and to a few parts in a million where the path crosses the solenoid’s edge (the field has a kink there). A real solenoid is not infinitely long, so a little field leaks outside it near the ends, and a rapidly changing current also radiates; both are left out here.":
  "El modelo es exacto; la circulación se suma numéricamente en {#} trozos, lo que coincide con \\(-d\\Phi/dt\\) hasta el error de redondeo para trayectorias centradas y hasta unas pocas partes por millón donde la trayectoria cruza el borde del solenoide (ahí el campo tiene un quiebre). Un solenoide real no es infinitamente largo, así que un poco de campo se escapa fuera cerca de los extremos, y una corriente que cambia rápidamente también radia; ambas cosas se omiten aquí.",
"How does a transformer use the induced electric field?":
  "¿Cómo usa un transformador el campo eléctrico inducido?",
"What did Part {#} give for \\(-d\\Phi/dt\\) on the {#} and {#} cm paths, and how does that compare with your answer to Before the lab {#}? Using where the flux is, explain why the two loops get the EMF they do, although \\(E\\) is smaller on the larger loop. Then say why a nonzero \\(\\oint\\vec E\\cdot d\\vec l\\) makes this field non conservative.":
  "¿Qué dio la Parte {#} para \\(-d\\Phi/dt\\) en las trayectorias de {#} y {#} cm, y cómo se compara con tu respuesta a Antes del laboratorio {#}? Usando dónde está el flujo, explica por qué las dos espiras reciben la fem que reciben, aunque \\(E\\) es menor en la espira mayor. Luego di por qué un \\(\\oint\\vec E\\cdot d\\vec l\\) distinto de cero hace que este campo no sea conservativo.",
"Prelab answers, a Data table copy for each part, the graphs and fits, your comparisons of the circulation with \\(-d\\Phi/dt\\), and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, una copia de la tabla de Datos para cada parte, las gráficas y los ajustes, tus comparaciones de la circulación con \\(-d\\Phi/dt\\), y las respuestas a las preguntas. Identifica los datos simulados.",
"Magnetic field inside the solenoid":
  "Campo magnético dentro del solenoide",
"Induced electric field":
  "Campo eléctrico inducido",
"Current in the solenoid":
  "Corriente en el solenoide",
"Starting current":
  "Corriente inicial",
"Magnetic flux through the path":
  "Flujo magnético a través de la trayectoria",
"Radius of the solenoid":
  "Radio del solenoide",
"Decay constant of the current":
  "Constante de decaimiento de la corriente",
"Position along the path (dl: a short piece of it)":
  "Posición a lo largo de la trayectoria (dl: un trozo corto de ella)",
"Turns per meter of the solenoid":
  "Vueltas por metro del solenoide",
"Radius of the path":
  "Radio de la trayectoria",
"<strong>Part {#}: field against distance.</strong> Choose the setup Example {#}, path outside, press Pause, then Reset, so the Time t readout shows {#}. Leave Path center, distance from the axis at {#} (centered). Set the Path radius slider to {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} cm and press Record reading at each; \\(E\\) goes in the \\(E\\) on the path column and \\(-d\\Phi/dt\\) in its own column. Export to worksheet, then Clear.":
  "<strong>Parte {#}: campo en función de la distancia.</strong> Elige la configuración Ejemplo {#}, trayectoria exterior, pulsa Pausa y luego Reiniciar, para que la lectura Tiempo t muestre {#}. Deja Centro de la trayectoria, distancia al eje en {#} (centrada). Fija el control Radio de la trayectoria en {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} cm y pulsa Registrar lectura en cada uno; \\(E\\) va en la columna \\(E\\) en la trayectoria y \\(-d\\Phi/dt\\) en su propia columna. Exporta a la hoja y luego Borra.",
"Why is the induced electric field called non conservative?":
  "¿Por qué al campo eléctrico inducido se le llama no conservativo?",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"<strong>Part {#}: field against distance.</strong> Use Example {#}’s values, with time paused at \\(t = 0\\). With the path centered on the axis, measure \\(E\\) and \\(-d\\Phi/dt\\) for path radii of {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} cm.":
  "<strong>Parte {#}: campo en función de la distancia.</strong> Usa los valores del Ejemplo {#}, con el tiempo en pausa en \\(t = 0\\). Con la trayectoria centrada en el eje, mide \\(E\\) y \\(-d\\Phi/dt\\) para radios de la trayectoria de {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} cm.",
"<strong>Part {#}: paths that are not centered.</strong> Still at \\(t = 0\\), measure the circulation and \\(-d\\Phi/dt\\) for a {#} cm path with its center {#} cm from the axis, {#} cm from the axis, and {#} cm from the axis, and for a {#} cm path centered {#} cm from the axis.":
  "<strong>Parte {#}: trayectorias no centradas.</strong> Todavía en \\(t = 0\\), mide la circulación y \\(-d\\Phi/dt\\) para una trayectoria de {#} cm con su centro a {#} cm del eje, a {#} cm del eje y a {#} cm del eje, y para una trayectoria de {#} cm centrada a {#} cm del eje.",
"<strong>Part {#}: how fast the current changes.</strong> With a centered {#} cm path at \\(t = 0\\), measure \\(E\\) for decay constants of {#}, {#}, {#}, {#}, {#} and {#} per second. Then measure with a steady current.":
  "<strong>Parte {#}: qué tan rápido cambia la corriente.</strong> Con una trayectoria centrada de {#} cm en \\(t = 0\\), mide \\(E\\) para constantes de decaimiento de {#}, {#}, {#}, {#}, {#} y {#} por segundo. Luego mide con una corriente constante.",
"For Part {#}, graph \\(E\\) against the path radius. Where is \\(E\\) largest? For the paths inside, find the slope and compare it with \\(\\lvert dB/dt\\rvert/2\\). For those outside, show that \\(Er\\) is the same for each, and compare it with \\(R^2\\lvert dB/dt\\rvert/2\\).":
  "Para la Parte {#}, grafica \\(E\\) contra el radio de la trayectoria. ¿Dónde es \\(E\\) máximo? Para las trayectorias interiores, encuentra la pendiente y compárala con \\(\\lvert dB/dt\\rvert/2\\). Para las exteriores, demuestra que \\(Er\\) es el mismo para cada una, y compáralo con \\(R^2\\lvert dB/dt\\rvert/2\\).",
"For Part {#}, graph \\(E\\) against the decay constant. What does it show about what makes the electric field: the size of \\(B\\), or how fast it changes?":
  "Para la Parte {#}, grafica \\(E\\) contra la constante de decaimiento. ¿Qué muestra sobre lo que produce el campo eléctrico: el tamaño de \\(B\\), o qué tan rápido cambia?",
"A copper ring is placed around a solenoid, not touching it, outside where \\(B = 0\\). Does a current flow in the ring when the solenoid current changes? Why?":
  "Se coloca un anillo de cobre alrededor de un solenoide, sin tocarlo, fuera, donde \\(B = 0\\). ¿Circula corriente en el anillo cuando cambia la corriente del solenoide? ¿Por qué?",
"<strong>Using the virtual apparatus.</strong> The decay constant moves in steps on a log scale, so {#} and {#} per second come out as {#} and {#}; record the value the demo shows. Pause, then Restart to stand at \\(t = 0\\); while paused you can move the path freely. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> La constante de decaimiento se mueve en pasos sobre una escala logarítmica, así que {#} y {#} por segundo salen como {#} y {#}; registra el valor que muestra la demo. Pausa y luego Reinicia para quedarte en \\(t = 0\\); en pausa puedes mover la trayectoria libremente. Envía cada parte a la hoja de trabajo antes de borrar, para que cada parte tenga su propia copia de la tabla de Datos."
});
