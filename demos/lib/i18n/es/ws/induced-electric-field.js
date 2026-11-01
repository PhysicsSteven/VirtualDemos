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
"<strong>Using the demo.</strong> The end of a long solenoid seen along its axis, with a closed circular path around or beside it. Solenoid current chooses how the current changes (decaying, ramp up, alternating or steady) and sets \\(I_0\\), the decay constant or rate, the turns per meter and the solenoid’s radius; Pause, Play and Restart control time. Closed path sets the path’s radius and the distance of its center from the axis (or drag it); the path is followed counterclockwise, with \\(B\\) out of the page positive. Readouts give the time, the current, \\(B\\) and \\(dB/dt\\) inside, the flux through the path and \\(-d\\Phi/dt\\), the circulation \\(\\oint\\vec E\\cdot d\\vec l\\) added up around the path, and \\(E\\) on a centered path. Blind hides the field arrows and plot, \\(E\\) and the circulation.":
  "<strong>Uso de la demo.</strong> El extremo de un solenoide largo visto a lo largo de su eje, con una trayectoria circular cerrada alrededor de él o a su lado. Corriente del solenoide elige cómo cambia la corriente (decreciente, en rampa, alterna o constante) y fija \\(I_0\\), la constante de decaimiento o el ritmo, las vueltas por metro y el radio del solenoide; Pausa, Iniciar y Reiniciar controlan el tiempo. Trayectoria cerrada fija el radio de la trayectoria y la distancia de su centro al eje (o arrástrala); la trayectoria se recorre en sentido antihorario, con \\(B\\) hacia fuera de la página positivo. Las lecturas dan el tiempo, la corriente, \\(B\\) y \\(dB/dt\\) dentro, el flujo a través de la trayectoria y \\(-d\\Phi/dt\\), la circulación \\(\\oint\\vec E\\cdot d\\vec l\\) sumada alrededor de la trayectoria, y \\(E\\) en una trayectoria centrada. A ciegas oculta las flechas del campo y la gráfica, \\(E\\) y la circulación.",
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
"A real solenoid switched off suddenly can induce a large voltage across its own terminals; a diode across the coil protects the circuit and the person switching it.":
  "Un solenoide real que se apaga de golpe puede inducir un voltaje grande entre sus propias terminales; un diodo a través de la bobina protege el circuito y a la persona que lo apaga.",
"<strong>Part {#}: field against distance.</strong> Use Example {#}’s values, with time paused at \\(t = 0\\). With the path centered on the axis, measure \\(E\\) and \\(-d\\Phi/dt\\) for path radii of {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} cm.":
  "<strong>Parte {#}: campo en función de la distancia.</strong> Usa los valores del Ejemplo {#}, con el tiempo en pausa en \\(t = 0\\). Con la trayectoria centrada en el eje, mide \\(E\\) y \\(-d\\Phi/dt\\) para radios de la trayectoria de {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} cm.",
"<strong>Part {#}: paths that are not centered.</strong> Still at \\(t = 0\\), measure the circulation and \\(-d\\Phi/dt\\) for a {#} cm path with its center {#} cm from the axis, {#} cm from the axis, and {#} cm from the axis, and for a {#} cm path centered {#} cm from the axis.":
  "<strong>Parte {#}: trayectorias no centradas.</strong> Todavía en \\(t = 0\\), mide la circulación y \\(-d\\Phi/dt\\) para una trayectoria de {#} cm con su centro a {#} cm del eje, a {#} cm del eje y a {#} cm del eje, y para una trayectoria de {#} cm centrada a {#} cm del eje.",
"<strong>Part {#}: how fast the current changes.</strong> With a centered {#} cm path at \\(t = 0\\), measure \\(E\\) for decay constants of {#}, {#}, {#}, {#}, {#} and {#} per second. Then measure with a steady current.":
  "<strong>Parte {#}: qué tan rápido cambia la corriente.</strong> Con una trayectoria centrada de {#} cm en \\(t = 0\\), mide \\(E\\) para constantes de decaimiento de {#}, {#}, {#}, {#}, {#} y {#} por segundo. Luego mide con una corriente constante.",
"<strong>Using the virtual apparatus.</strong> The decay constant moves in steps on a log scale, so {#} and {#} per second come out as {#} and {#}; record the value the demo shows. Pause, then Restart to stand at \\(t = 0\\); while paused you can move the path freely. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> La constante de decaimiento se mueve en pasos sobre una escala logarítmica, así que {#} y {#} por segundo salen como {#} y {#}; registra el valor que muestra la demo. Pausa y luego Reinicia para quedarte en \\(t = 0\\); en pausa puedes mover la trayectoria libremente. Envía cada parte a la hoja de trabajo antes de borrar, para que cada parte tenga su propia copia de la tabla de Datos.",
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
"For Part {#}, graph \\(E\\) against the path radius. Where is \\(E\\) largest? For the paths inside, find the slope and compare it with \\(\\lvert dB/dt\\rvert/2\\). For those outside, show that \\(Er\\) is the same for each, and compare it with \\(R^2\\lvert dB/dt\\rvert/2\\).":
  "Para la Parte {#}, grafica \\(E\\) contra el radio de la trayectoria. ¿Dónde es \\(E\\) máximo? Para las trayectorias interiores, encuentra la pendiente y compárala con \\(\\lvert dB/dt\\rvert/2\\). Para las exteriores, demuestra que \\(Er\\) es el mismo para cada una, y compáralo con \\(R^2\\lvert dB/dt\\rvert/2\\).",
"For Parts {#} and {#}, compare \\(\\oint\\vec E\\cdot d\\vec l\\) with \\(-d\\Phi/dt\\) for every path. Explain why the path beside the solenoid gives zero although \\(E\\) is not zero on it.":
  "Para las Partes {#} y {#}, compara \\(\\oint\\vec E\\cdot d\\vec l\\) con \\(-d\\Phi/dt\\) para cada trayectoria. Explica por qué la trayectoria al lado del solenoide da cero aunque \\(E\\) no sea cero en ella.",
"For Part {#}, graph \\(E\\) against the decay constant. What does it show about what makes the electric field: the size of \\(B\\), or how fast it changes?":
  "Para la Parte {#}, grafica \\(E\\) contra la constante de decaimiento. ¿Qué muestra sobre lo que produce el campo eléctrico: el tamaño de \\(B\\), o qué tan rápido cambia?",
"Turn Blind off and look at the field arrows in Part {#}. Why can the field outside the solenoid not be found from Faraday’s law alone when the path is off center?":
  "Desactiva A ciegas y observa las flechas del campo en la Parte {#}. ¿Por qué el campo fuera del solenoide no se puede encontrar solo con la ley de Faraday cuando la trayectoria no está centrada?",
"The model is exact; the circulation is added up numerically in {#} pieces, which agrees with \\(-d\\Phi/dt\\) to rounding error for centered paths and to a few parts in a million where the path crosses the solenoid’s edge (the field has a kink there). A real solenoid is not infinitely long, so a little field leaks outside it near the ends, and a rapidly changing current also radiates; both are left out here.":
  "El modelo es exacto; la circulación se suma numéricamente en {#} trozos, lo que coincide con \\(-d\\Phi/dt\\) hasta el error de redondeo para trayectorias centradas y hasta unas pocas partes por millón donde la trayectoria cruza el borde del solenoide (ahí el campo tiene un quiebre). Un solenoide real no es infinitamente largo, así que un poco de campo se escapa fuera cerca de los extremos, y una corriente que cambia rápidamente también radia; ambas cosas se omiten aquí.",
"A copper ring is placed around a solenoid, not touching it, outside where \\(B = 0\\). Does a current flow in the ring when the solenoid current changes? Why?":
  "Se coloca un anillo de cobre alrededor de un solenoide, sin tocarlo, fuera, donde \\(B = 0\\). ¿Circula corriente en el anillo cuando cambia la corriente del solenoide? ¿Por qué?",
"Why is the induced electric field called non conservative?":
  "¿Por qué al campo eléctrico inducido se le llama no conservativo?",
"How does a transformer use the induced electric field?":
  "¿Cómo usa un transformador el campo eléctrico inducido?",
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
  "Radio de la trayectoria"
});
