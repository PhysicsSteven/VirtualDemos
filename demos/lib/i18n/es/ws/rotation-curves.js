/* ws/rotation-curves in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/rotation-curves', {
"Radius r (kpc, or AU)":
  "Radio r (kpc, o UA)",
"Orbital speed v (km/s)":
  "Rapidez orbital v (km/s)",
"Visible matter alone (km/s)":
  "Solo materia visible (km/s)",
"Mass inside r, v^2r/G (M☉)":
  "Masa dentro de r, v^2r/G (M☉)",
"Visible mass inside r (M☉)":
  "Masa visible dentro de r (M☉)",
"Dark matter share of v^{#} (%)":
  "Parte de v^{#} debida a materia oscura (%)",
"Orbital period (Myr, or yr)":
  "Periodo orbital (Myr, o años)",
"Shift of the line’s edge":
  "Corrimiento del borde de la línea",
"Speed from the shift (km/s)":
  "Rapidez a partir del corrimiento (km/s)",
"Weighing a Galaxy | VirtualDemos":
  "Pesar una galaxia | VirtualDemos",
"Weighing a Galaxy":
  "Pesar una galaxia",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} and {#} (circular orbits and Kepler’s laws) and §{#} (gravitation near a spherical mass), and Vol. {#}, §§{#} and {#} (the Doppler effect for light, and dark matter). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} y {#} (órbitas circulares y leyes de Kepler) y §{#} (gravitación cerca de una masa esférica), y Vol. {#}, §§{#} y {#} (el efecto Doppler para la luz, y la materia oscura). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Solar system (Kepler); Visible matter only; Add a dark matter halo; Milky Way; Measure with Doppler; NGC {#}.":
  "<strong>Configuraciones en la demo:</strong> Sistema solar (Kepler); Solo materia visible; Añadir un halo de materia oscura; Vía Láctea; Medir con Doppler; NGC {#}.",
"The galaxy is drawn face on or edge on, beside its rotation curve: the orbital speed of stars and gas against distance from the center. Choose the radius on the galaxy, on the plot or in the rail. The Solar system setup does the same for the planets.":
  "La galaxia se dibuja de frente o de canto, junto a su curva de rotación: la rapidez orbital de las estrellas y el gas en función de la distancia al centro. Elige el radio en la galaxia, en la gráfica o en el panel. La configuración Sistema solar hace lo mismo para los planetas.",
"The galaxy model has a bulge, a stellar disk, a gas disk and a dark matter halo, each with its own mass and size, and each can be turned off. The circles are approximate measured speeds for the Milky Way (the fit of Eilers et al. {#}) or NGC {#} (rounded from Begeman {#}).":
  "El modelo de galaxia tiene un bulbo, un disco estelar, un disco de gas y un halo de materia oscura, cada uno con su propia masa y tamaño, y cada uno se puede apagar. Los círculos son rapideces medidas aproximadas para la Vía Láctea (el ajuste de Eilers et al. {#}) o NGC {#} (redondeadas de Begeman {#}).",
"The readouts give the orbital speed at the chosen radius, the speed the visible matter alone would give, the mass inside the radius from the curve, \\(v^2r/G\\), the visible mass inside it, the share of \\(v^2\\) due to dark matter and the orbital period.":
  "Las lecturas dan la rapidez orbital en el radio elegido, la rapidez que daría solo la materia visible, la masa dentro del radio a partir de la curva, \\(v^2r/G\\), la masa visible dentro de él, la parte de \\(v^2\\) debida a la materia oscura y el periodo orbital.",
"In the edge on view a slit along the disk records a spectral line, blueshifted on one side and redshifted on the other. The rail gives the shift of the line’s outer edge at the chosen radius and the speed it implies, for the {#} cm line of neutral hydrogen or Hα. The demo’s Hα gas ends at four disk scale lengths.":
  "En la vista de canto una rendija a lo largo del disco registra una línea espectral, corrida al azul de un lado y al rojo del otro. El panel da el corrimiento del borde exterior de la línea en el radio elegido y la rapidez que implica, para la línea de {#} cm del hidrógeno neutro o Hα. El gas Hα de la demo termina a cuatro longitudes de escala del disco.",
"Orbits are circles in the disk’s plane. The disks are infinitely thin, and \\(v^2r/G\\) is exact only for spherical mass: for a disk it reads high, by up to about {#}%.":
  "Las órbitas son círculos en el plano del disco. Los discos son infinitamente delgados, y \\(v^2r/G\\) es exacto solo para una masa esférica: para un disco da un valor alto, hasta en un {#}%.",
"Record reading stores the setup, the radius, the speeds, both masses, the dark matter share and the period, and in the edge on view the line, its shift and the speed from the shift. Radii and periods are in kpc and Myr for a galaxy, AU and years for the solar system. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la configuración, el radio, las rapideces, ambas masas, la parte de materia oscura y el periodo, y en la vista de canto la línea, su corrimiento y la rapidez a partir del corrimiento. Los radios y los periodos están en kpc y Myr para una galaxia, y en UA y años para el sistema solar. Exportar a la hoja envía las lecturas a la tabla de Datos de abajo; Borrar empieza una nueva serie, que va a una nueva copia de la tabla.",
"Use orbital speeds to weigh the Sun and the Milky Way, compare the mass the speeds require with the mass we can see, and measure the speeds the way astronomers do, from Doppler shifts.":
  "Usa rapideces orbitales para pesar el Sol y la Vía Láctea, compara la masa que requieren las rapideces con la masa que podemos ver, y mide las rapideces como lo hacen los astrónomos, a partir de corrimientos Doppler.",
"<strong>Weighing with an orbit.</strong> A star or planet on a circular orbit of radius \\(r\\) moves at speed \\(v\\) with \\(v^2/r = GM(&lt;r)/r^2\\), if the mass \\(M(&lt;r)\\) inside its orbit is spherically spread (§{#}: then it pulls as if it were all at the center, and the mass outside pulls nothing). So":
  "<strong>Pesar con una órbita.</strong> Una estrella o un planeta en una órbita circular de radio \\(r\\) se mueve con rapidez \\(v\\) con \\(v^2/r = GM(&lt;r)/r^2\\), si la masa \\(M(&lt;r)\\) dentro de su órbita está distribuida esféricamente (§{#}: entonces atrae como si estuviera toda en el centro, y la masa de afuera no atrae nada). Así que",
"\\[M(<r) = \\frac{v^2 r}{G}.\\]":
  "\\[M(<r) = \\frac{v^2 r}{G}.\\]",
"If nearly all the mass is in the middle, as in the solar system, \\(v = \\sqrt{GM/r}\\) falls as \\(r^{-1/2}\\). If instead \\(v\\) stays the same at every \\(r\\) (a flat rotation curve), \\(M(<r)\\) must grow in proportion to \\(r\\).":
  "Si casi toda la masa está en el centro, como en el sistema solar, \\(v = \\sqrt{GM/r}\\) disminuye como \\(r^{-1/2}\\). Si en cambio \\(v\\) es igual en todo \\(r\\) (una curva de rotación plana), \\(M(<r)\\) debe crecer en proporción a \\(r\\).",
"<strong>Units.</strong> In kiloparsecs, km/s and solar masses, \\(G = 4.30091\\times10^{-6}\\) kpc (km/s)²/M☉, and {#} kpc/(km/s) = {#} Myr. For the solar system, {#} AU = \\(1.4960\\times10^{11}\\) m, \\(G = 6.6743\\times10^{-11}\\) N·m²/kg², and {#} year = \\(3.156\\times10^7\\) s.":
  "<strong>Unidades.</strong> En kiloparsecs, km/s y masas solares, \\(G = 4.30091\\times10^{-6}\\) kpc (km/s)²/M☉, y {#} kpc/(km/s) = {#} Myr. Para el sistema solar, {#} UA = \\(1.4960\\times10^{11}\\) m, \\(G = 6.6743\\times10^{-11}\\) N·m²/kg², y {#} año = \\(3.156\\times10^7\\) s.",
"<strong>Doppler shifts.</strong> Gas moving toward or away from us at speed \\(v \\ll c\\) shifts a spectral line by \\(\\Delta\\lambda/\\lambda_0 = v/c\\), or in frequency \\(\\Delta f/f_0 = -v/c\\) (Vol. {#}, §{#}). The {#} cm line of neutral hydrogen has \\(f_0 = 1420.41\\) MHz and Hα has \\(\\lambda_0 = 656.28\\) nm; \\(c = 2.9979\\times10^5\\) km/s. Seen edge on, a line of sight through the disk crosses gas at many radii; the largest shift along it comes from the radius where the line of sight just grazes an orbit, which gives \\(v\\) at that radius.":
  "<strong>Corrimientos Doppler.</strong> El gas que se mueve hacia nosotros o alejándose a rapidez \\(v \\ll c\\) corre una línea espectral en \\(\\Delta\\lambda/\\lambda_0 = v/c\\), o en frecuencia \\(\\Delta f/f_0 = -v/c\\) (Vol. {#}, §{#}). La línea de {#} cm del hidrógeno neutro tiene \\(f_0 = 1420.41\\) MHz y Hα tiene \\(\\lambda_0 = 656.28\\) nm; \\(c = 2.9979\\times10^5\\) km/s. Visto de canto, una línea de visión a través del disco cruza gas a muchos radios; el mayor corrimiento a lo largo de ella viene del radio donde la línea de visión apenas roza una órbita, lo que da \\(v\\) en ese radio.",
"Earth moves at {#} km/s at {#} AU. Find the Sun’s mass from \\(M = v^2r/G\\), in kg and in solar masses (\\(M_\\odot = 1.988\\times10^{30}\\) kg).":
  "La Tierra se mueve a {#} km/s a {#} UA. Encuentra la masa del Sol a partir de \\(M = v^2r/G\\), en kg y en masas solares (\\(M_\\odot = 1.988\\times10^{30}\\) kg).",
"Mercury orbits at {#} AU and Neptune at {#} AU. What fraction of Mercury’s speed is Neptune’s?":
  "Mercurio orbita a {#} UA y Neptuno a {#} UA. ¿Qué fracción de la rapidez de Mercurio es la de Neptuno?",
"The Sun orbits the Milky Way’s center at about {#} km/s, {#} kpc out. Find the mass inside its orbit and its orbital period.":
  "El Sol orbita el centro de la Vía Láctea a unos {#} km/s, a {#} kpc. Encuentra la masa dentro de su órbita y su periodo orbital.",
"Gas moving at {#} km/s away from us shifts the {#} cm line by how many kHz? Hα by how many nm?":
  "Gas que se aleja de nosotros a {#} km/s, ¿cuántos kHz corre la línea de {#} cm? ¿Y cuántos nm la Hα?",
"<strong>The solar system.</strong> Choose Solar system (Kepler). Record a reading at the distance of each planet: {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} AU. Send the readings to the worksheet before you clear them.":
  "<strong>El sistema solar.</strong> Elige Sistema solar (Kepler). Registra una lectura a la distancia de cada planeta: {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} UA. Envía las lecturas a la hoja de trabajo antes de borrarlas.",
"<strong>The Milky Way.</strong> Clear the readings and choose Milky Way. Record a reading at {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} kpc. Send these to the worksheet too.":
  "<strong>La Vía Láctea.</strong> Borra las lecturas y elige Vía Láctea. Registra una lectura a {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} kpc. Envía también estas a la hoja de trabajo.",
"<strong>Doppler.</strong> Clear the readings and choose Measure with Doppler. With the {#} cm line, record a reading at {#}, {#}, {#}, {#} and {#} kpc. Then switch to Hα and record at {#}, {#} and {#} kpc. Send all eight readings to the worksheet.":
  "<strong>Doppler.</strong> Borra las lecturas y elige Medir con Doppler. Con la línea de {#} cm, registra una lectura a {#}, {#}, {#}, {#} y {#} kpc. Luego cambia a Hα y registra a {#}, {#} y {#} kpc. Envía las ocho lecturas a la hoja de trabajo.",
"<span>C</span>Radius \\(r\\) (kpc, or AU)":
  "<span>C</span>Radio \\(r\\) (kpc, o UA)",
"<span>D</span>Orbital speed \\(v\\) (km/s)":
  "<span>D</span>Rapidez orbital \\(v\\) (km/s)",
"<span>E</span>Visible matter alone (km/s)":
  "<span>E</span>Solo materia visible (km/s)",
"<span>F</span>Mass inside \\(r\\), \\(v^2r/G\\) (M☉)":
  "<span>F</span>Masa dentro de \\(r\\), \\(v^2r/G\\) (M☉)",
"<span>G</span>Visible mass inside \\(r\\) (M☉)":
  "<span>G</span>Masa visible dentro de \\(r\\) (M☉)",
"<span>H</span>Dark matter share of \\(v^2\\) (%)":
  "<span>H</span>Parte de \\(v^2\\) debida a materia oscura (%)",
"<span>I</span>Orbital period (Myr, or yr)":
  "<span>I</span>Periodo orbital (Myr, o años)",
"<span>J</span>Line":
  "<span>J</span>Línea",
"<span>K</span>Shift of the line’s edge":
  "<span>K</span>Corrimiento del borde de la línea",
"<span>L</span>Speed from the shift (km/s)":
  "<span>L</span>Rapidez a partir del corrimiento (km/s)",
"Radius r (kpc, or AU), row {#}":
  "Radio r (kpc, o UA), fila {#}",
"Orbital speed v (km/s), row {#}":
  "Rapidez orbital v (km/s), fila {#}",
"Visible matter alone (km/s), row {#}":
  "Solo materia visible (km/s), fila {#}",
"Mass inside r, v^2r/G (M☉), row {#}":
  "Masa dentro de r, v^2r/G (M☉), fila {#}",
"Visible mass inside r (M☉), row {#}":
  "Masa visible dentro de r (M☉), fila {#}",
"Dark matter share of v^{#} (%), row {#}":
  "Parte de v^{#} debida a materia oscura (%), fila {#}",
"Orbital period (Myr, or yr), row {#}":
  "Periodo orbital (Myr, o años), fila {#}",
"Line, row {#}":
  "Línea, fila {#}",
"Shift of the line’s edge, row {#}":
  "Corrimiento del borde de la línea, fila {#}",
"Speed from the shift (km/s), row {#}":
  "Rapidez a partir del corrimiento (km/s), fila {#}",
"{#}/r, row {#}":
  "{#}/r, fila {#}",
"v^{#}, row {#}":
  "v^{#}, fila {#}",
"Mass inside r, v²r/G (M☉)":
  "Masa dentro de r, v²r/G (M☉)",
"Dark matter share of v² (%)":
  "Parte de v² debida a materia oscura (%)",
"For the solar system, fill in the last two columns and graph \\(v^2\\) against \\(1/r\\). What does the slope measure? Convert it to SI units and find the Sun’s mass in kg.":
  "Para el sistema solar, llena las últimas dos columnas y grafica \\(v^2\\) contra \\(1/r\\). ¿Qué mide la pendiente? Conviértela a unidades SI y encuentra la masa del Sol en kg.",
"For the Milky Way, graph the orbital speed against radius. Beyond which radius is the curve nearly flat? Sketch on the same axes, or describe, what the visible matter alone would give.":
  "Para la Vía Láctea, grafica la rapidez orbital contra el radio. ¿A partir de qué radio la curva es casi plana? Dibuja en los mismos ejes, o describe, lo que daría solo la materia visible.",
"Graph the mass inside \\(r\\) against \\(r\\). Over the flat part, what does the slope tell you? Find the ratio of the mass inside \\(r\\) to the visible mass inside \\(r\\) at {#} kpc and at {#} kpc.":
  "Grafica la masa dentro de \\(r\\) contra \\(r\\). En la parte plana, ¿qué te dice la pendiente? Encuentra la razón entre la masa dentro de \\(r\\) y la masa visible dentro de \\(r\\) a {#} kpc y a {#} kpc.",
"If \\(M(<r) \\propto r\\) far out, how must the density of the extra mass fall with \\(r\\)? Show your reasoning from \\(M = \\int 4\\pi r^2\\rho\\,dr\\).":
  "Si \\(M(<r) \\propto r\\) lejos del centro, ¿cómo debe disminuir con \\(r\\) la densidad de la masa extra? Muestra tu razonamiento a partir de \\(M = \\int 4\\pi r^2\\rho\\,dr\\).",
"For each Doppler reading, find the speed from the shift yourself, and compare with the speed in the table and with the orbital speed at that radius. What happened to the Hα reading at {#} kpc, and why do radio astronomers use the {#} cm line to measure the outer parts of galaxies?":
  "Para cada lectura Doppler, encuentra tú mismo la rapidez a partir del corrimiento, y compárala con la rapidez de la tabla y con la rapidez orbital en ese radio. ¿Qué le pasó a la lectura de Hα a {#} kpc, y por qué los radioastrónomos usan la línea de {#} cm para medir las partes exteriores de las galaxias?",
"Using the Sun’s orbit in the Milky Way model, how many times has the Sun gone around the galaxy in its {#} billion years?":
  "Usando la órbita del Sol en el modelo de la Vía Láctea, ¿cuántas veces ha dado el Sol la vuelta a la galaxia en sus {#} mil millones de años?",
"The model’s numbers are exact; the uncertainty is in the method. \\(M = v^2r/G\\) assumes a spherical mass, but the stars and gas are in a flat disk, which pulls harder in its own plane than a sphere of the same mass: the formula then overestimates the mass, by up to about {#}% near three scale lengths. Real speeds are also measured with scatter: the Milky Way circles shown are a fit with an uncertainty of a few km/s. If \\(v\\) is uncertain by {#}%, how uncertain is \\(M(<r)\\)? Which of these effects could change your answer to Analysis {#} by more than a factor of {#}?":
  "Los números del modelo son exactos; la incertidumbre está en el método. \\(M = v^2r/G\\) supone una masa esférica, pero las estrellas y el gas están en un disco plano, que atrae con más fuerza en su propio plano que una esfera de la misma masa: entonces la fórmula sobrestima la masa, hasta en un {#}% cerca de tres longitudes de escala. Las rapideces reales también se miden con dispersión: los círculos de la Vía Láctea mostrados son un ajuste con una incertidumbre de unos pocos km/s. Si \\(v\\) tiene una incertidumbre de {#}%, ¿qué tan incierta es \\(M(<r)\\)? ¿Cuál de estos efectos podría cambiar tu respuesta al Análisis {#} en más de un factor de {#}?",
"In a galaxy most of the light comes from within about {#} kpc of the center. If the visible matter were all there is, how should the speed at {#} kpc compare with the speed at {#} kpc?":
  "En una galaxia la mayor parte de la luz viene de los primeros {#} kpc desde el centro. Si la materia visible fuera todo lo que hay, ¿cómo debería compararse la rapidez a {#} kpc con la rapidez a {#} kpc?",
"A flat rotation curve does not mean the galaxy turns like a solid wheel. Explain the difference, using the orbital periods at {#} kpc and {#} kpc in your data.":
  "Una curva de rotación plana no significa que la galaxia gire como una rueda sólida. Explica la diferencia, usando los periodos orbitales a {#} kpc y {#} kpc de tus datos.",
"Why could astronomers who measured only the bright inner parts of galaxies miss the dark matter? Use the dark matter share of \\(v^2\\) at small and large \\(r\\).":
  "¿Por qué los astrónomos que midieron solo las partes interiores brillantes de las galaxias podían pasar por alto la materia oscura? Usa la parte de \\(v^2\\) debida a la materia oscura a \\(r\\) pequeño y grande.",
"Choose NGC {#}. Its disk and gas alone fall to about {#} km/s at {#} kpc while the measured speed stays near {#} km/s. By what factor is the mass inside {#} kpc larger than the visible mass?":
  "Elige NGC {#}. Su disco y su gas por sí solos bajan a unos {#} km/s a {#} kpc mientras la rapidez medida se queda cerca de {#} km/s. ¿En qué factor es mayor la masa dentro de {#} kpc que la masa visible?",
"A disk galaxy tilted by an angle \\(i\\) from face on shows Doppler shifts of only \\(v \\sin i\\). What would you get for the mass of a galaxy if you forgot to correct for a tilt of {#}°?":
  "Una galaxia de disco inclinada un ángulo \\(i\\) desde la vista de frente muestra corrimientos Doppler de solo \\(v \\sin i\\). ¿Qué obtendrías para la masa de una galaxia si olvidaras corregir una inclinación de {#}°?",
"Prelab answers, the table copies with their graphs and fits, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, las copias de la tabla con sus gráficas y ajustes, las respuestas de las secciones de análisis e incertidumbre, y las respuestas a las preguntas. Identifica los datos simulados.",
"Mass inside radius r":
  "Masa dentro del radio r",
"Solar mass":
  "Masa solar",
"Frequency (Δf: the Doppler shift)":
  "Frecuencia (Δf: el corrimiento Doppler)",
"Rest frequency":
  "Frecuencia en reposo",
"Inclination angle of the disk from face on":
  "Ángulo de inclinación del disco desde la vista de frente",
"Wavelength (Δλ: the Doppler shift)":
  "Longitud de onda (Δλ: el corrimiento Doppler)",
"Rest wavelength":
  "Longitud de onda en reposo",
"Radius of the orbit":
  "Radio de la órbita",
"Orbital speed":
  "Rapidez orbital",
"Column O, row {#}":
  "Columna O, fila {#}",
"Heading of column O":
  "Encabezado de la columna O",
"Column O":
  "Columna O",
"Galaxy Rotation Curves":
  "Curvas de rotación de galaxias"
});
