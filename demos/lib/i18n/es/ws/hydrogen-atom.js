/* ws/hydrogen-atom in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/hydrogen-atom', {
"Orbital":
  "Orbital",
"Positions found N":
  "Posiciones encontradas N",
"Mean r of the finds (a₀)":
  "r media de los hallazgos (a₀)",
"Standard error (a₀)":
  "Error estándar (a₀)",
"Most probable r (a₀)":
  "r más probable (a₀)",
"Superposition":
  "Superposición",
"Energy difference ΔE (eV)":
  "Diferencia de energía ΔE (eV)",
"Beat period (fs)":
  "Periodo de batido (fs)",
"Does the center move?":
  "¿Se mueve el centro?",
"The Hydrogen Atom: Finding the Electron | VirtualDemos":
  "El átomo de hidrógeno: encontrar al electrón | VirtualDemos",
"The Hydrogen Atom: Finding the Electron":
  "El átomo de hidrógeno: encontrar al electrón",
"<strong>Setups in the demo:</strong> 1s, 2s, 2p<sub>z</sub>, 3d<sub>z²</sub>, 4f<sub>xyz</sub>, and 1s + 2p<sub>z</sub>, a superposition. Any state up to n = {#} can be picked under State.":
  "<strong>Configuraciones en la demo:</strong> 1s, 2s, 2p<sub>z</sub>, 3d<sub>z²</sub>, 4f<sub>xyz</sub>, y 1s + 2p<sub>z</sub>, una superposición. Cualquier estado hasta n = {#} se puede elegir en Estado.",
"The wave functions are the exact solutions of the Schrödinger equation for one electron and a point nucleus, \\(\\psi = R_{nl}(r)\\,Y_{lm}(\\theta, \\phi)\\). Spin, fine structure and the Lamb shift are left out.":
  "Las funciones de onda son las soluciones exactas de la ecuación de Schrödinger para un electrón y un núcleo puntual, \\(\\psi = R_{nl}(r)\\,Y_{lm}(\\theta, \\phi)\\). Se omiten el espín, la estructura fina y el corrimiento de Lamb.",
"Distances are in Bohr radii, \\(a_0 = 0.0529177\\) nm. Energies use {#} eV, the measured ionization energy of hydrogen.":
  "Las distancias están en radios de Bohr, \\(a_0 = 0.0529177\\) nm. Las energías usan {#} eV, la energía de ionización medida del hidrógeno.",
"Pick the shell and subshell (1s, 2p, 3d, …) and the orbital m. Real orbitals (the default) are the chemistry shapes, 2p<sub>z</sub>, 3d<sub>z²</sub> and so on; with m = {#} they are the same as the complex states.":
  "Elige la capa y la subcapa (1s, 2p, 3d, …) y el orbital m. Los orbitales reales (la opción predeterminada) son las formas de la química, 2p<sub>z</sub>, 3d<sub>z²</sub>, etc.; con m = {#} son iguales a los estados complejos.",
"This state lists the energy, the quantum numbers, the numbers of nodes, the mean radius ⟨r⟩, the most probable radius and the angular momentum, all from the exact solution. The plot below the cloud is the radial probability density P(r); hover it to read P(r) and the probability inside that radius.":
  "Este estado lista la energía, los números cuánticos, los números de nodos, el radio medio ⟨r⟩, el radio más probable y el momento angular, todo a partir de la solución exacta. La gráfica debajo de la nube es la densidad de probabilidad radial P(r); pasa el cursor sobre ella para leer P(r) y la probabilidad dentro de ese radio.",
"Measure empties the atom and then finds the electron one position at a time, each drawn at random from \\(\\lvert\\psi\\rvert^2\\), faster and faster. Each find is an independent simulated measurement. Changing the state starts the measurement again.":
  "Medir vacía el átomo y luego encuentra al electrón una posición a la vez, cada una sorteada al azar según \\(\\lvert\\psi\\rvert^2\\), cada vez más rápido. Cada hallazgo es una medición simulada independiente. Cambiar el estado vuelve a empezar la medición.",
"Superposition adds a second state, half and half. Its readouts give the energy difference, the beat period h/ΔE, the wavelength hc/ΔE of the light it would give out, and whether the center of the cloud moves.":
  "Superposición agrega un segundo estado, mitad y mitad. Sus lecturas dan la diferencia de energía, el periodo de batido h/ΔE, la longitud de onda hc/ΔE de la luz que emitiría, y si el centro de la nube se mueve.",
"Record reading stores the orbital, n, l and m, the number of positions found N, their mean distance from the nucleus, its standard error \\(s/\\sqrt{N}\\) (s is the standard deviation of the finds), s itself, and the most probable radius. It works on one state at a time, after Measure has found some positions. Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda el orbital, n, l y m, el número de posiciones encontradas N, su distancia media al núcleo, su error estándar \\(s/\\sqrt{N}\\) (s es la desviación estándar de los hallazgos), s misma, y el radio más probable. Funciona con un estado a la vez, después de que Medir ha encontrado algunas posiciones. Exportar a la hoja envía las lecturas a la tabla de datos de abajo. Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Find the electron in a hydrogen atom many times over, use the finds to measure how far from the nucleus it is in each state, and compare with the exact results. Then use superpositions of two states to see which pairs give out light, and at what wavelength.":
  "Encuentra al electrón en un átomo de hidrógeno muchas veces, usa los hallazgos para medir qué tan lejos del núcleo está en cada estado, y compara con los resultados exactos. Luego usa superposiciones de dos estados para ver qué pares emiten luz, y a qué longitud de onda.",
"An electron in hydrogen has no orbit. Its state is a wave function ψ, and \\(\\lvert\\psi\\rvert^2\\,dV\\) is the probability of finding it in a small volume dV (§{#}). The states are labeled by n, l and m (§{#}), and their energies depend on n alone:":
  "Un electrón en el hidrógeno no tiene órbita. Su estado es una función de onda ψ, y \\(\\lvert\\psi\\rvert^2\\,dV\\) es la probabilidad de encontrarlo en un volumen pequeño dV (§{#}). Los estados se etiquetan con n, l y m (§{#}), y sus energías dependen solo de n:",
"\\[E_n = -\\frac{13.6\\ \\text{eV}}{n^2} .\\]":
  "\\[E_n = -\\frac{13.6\\ \\text{eV}}{n^2} .\\]",
"The probability of finding the electron between r and r + dr is \\(P(r)\\,dr\\), with \\(P(r) = r^2\\lvert R_{nl}(r)\\rvert^2\\) after the angles are summed over. For the ground state P(r) peaks at \\(r = a_0\\), the radius of Bohr’s first orbit, and for every state with \\(l = n - 1\\) it peaks at \\(n^2a_0\\). The mean distance has an exact formula, a standard result of the solution that OpenStax does not derive:":
  "La probabilidad de encontrar al electrón entre r y r + dr es \\(P(r)\\,dr\\), con \\(P(r) = r^2\\lvert R_{nl}(r)\\rvert^2\\) después de sumar sobre los ángulos. Para el estado base P(r) tiene su pico en \\(r = a_0\\), el radio de la primera órbita de Bohr, y para cada estado con \\(l = n - 1\\) tiene su pico en \\(n^2a_0\\). La distancia media tiene una fórmula exacta, un resultado estándar de la solución que OpenStax no deduce:",
"\\[\\langle r\\rangle = \\frac{a_0}{2}\\left[3n^2 - l(l + 1)\\right] .\\]":
  "\\[\\langle r\\rangle = \\frac{a_0}{2}\\left[3n^2 - l(l + 1)\\right] .\\]",
"Each measurement of the position gives one value of r. The mean of N measurements scatters about ⟨r⟩ with a standard error \\(s/\\sqrt{N}\\), where s is the spread of single measurements.":
  "Cada medición de la posición da un valor de r. La media de N mediciones se dispersa alrededor de ⟨r⟩ con un error estándar \\(s/\\sqrt{N}\\), donde s es la dispersión de las mediciones individuales.",
"A superposition of two states with energies \\(E_A\\) and \\(E_B\\) changes with time, repeating once per beat period \\(h/(E_B - E_A)\\). If the center of the electron’s charge moves back and forth, the atom radiates light of energy \\(hf = E_B - E_A\\). That happens only when l changes by one, \\(\\Delta l = \\pm 1\\) (and m by {#} or ±{#}): the selection rule.":
  "Una superposición de dos estados con energías \\(E_A\\) y \\(E_B\\) cambia con el tiempo, repitiéndose una vez por periodo de batido \\(h/(E_B - E_A)\\). Si el centro de la carga del electrón se mueve de un lado a otro, el átomo radia luz de energía \\(hf = E_B - E_A\\). Eso solo ocurre cuando l cambia en uno, \\(\\Delta l = \\pm 1\\) (y m en {#} o ±{#}): la regla de selección.",
"Find the energies of the n = {#}, {#} and {#} states, and the wavelength of the photon given out from n = {#} to n = {#}, using \\(hc = 1239.84\\) eV·nm.":
  "Encuentra las energías de los estados n = {#}, {#} y {#}, y la longitud de onda del fotón emitido de n = {#} a n = {#}, usando \\(hc = 1239.84\\) eV·nm.",
"Find ⟨r⟩ for the 1s, 2s and 2p states, in units of \\(a_0\\). Why is the 2s electron farther out on average than the 2p electron, when both have n = {#}?":
  "Encuentra ⟨r⟩ para los estados 1s, 2s y 2p, en unidades de \\(a_0\\). ¿Por qué el electrón 2s está en promedio más lejos que el electrón 2p, si ambos tienen n = {#}?",
"For the 1s state, \\(\\lvert\\psi\\rvert^2\\) is largest at the nucleus, yet the most probable distance is \\(a_0\\). Explain.":
  "Para el estado 1s, \\(\\lvert\\psi\\rvert^2\\) es máxima en el núcleo, y sin embargo la distancia más probable es \\(a_0\\). Explícalo.",
"Which of the pairs in the second Data table should give out light? Give the reason for each.":
  "¿Cuáles de los pares de la segunda tabla de datos deberían emitir luz? Da la razón para cada uno.",
"<strong>Finding the electron.</strong> For the real orbitals 1s, 2s, 2p<sub>z</sub>, 3s, 3p<sub>z</sub>, 3d<sub>z²</sub>, 4p<sub>z</sub> and 4f<sub>z³</sub> (all with m = {#}), measure the electron’s position until at least {#} positions have been found, then record a reading. Measure is in the 3D cloud view, not in Slice.":
  "<strong>Encontrar al electrón.</strong> Para los orbitales reales 1s, 2s, 2p<sub>z</sub>, 3s, 3p<sub>z</sub>, 3d<sub>z²</sub>, 4p<sub>z</sub> y 4f<sub>z³</sub> (todos con m = {#}), mide la posición del electrón hasta haber encontrado al menos {#} posiciones, y luego registra una lectura. Medir está en la vista de nube 3D, no en Corte.",
"<strong>How the mean settles.</strong> Clear the readings. Pick 1s, start a new measurement and record a reading when about {#}, {#} and {#} positions have been found, all in the same run. Send this run to a new copy of the table.":
  "<strong>Cómo se estabiliza la media.</strong> Borra las lecturas. Elige 1s, empieza una medición nueva y registra una lectura cuando se hayan encontrado unas {#}, {#} y {#} posiciones, todo en la misma corrida. Envía esta corrida a una copia nueva de la tabla.",
"<strong>Light from superpositions.</strong> For each pair in the second table, set the first state as the state, add the second state and write the energy difference, the beat period, the wavelength and whether the center of the cloud moves. Watch the cloud for a few beat periods.":
  "<strong>Luz de las superposiciones.</strong> Para cada par de la segunda tabla, fija el primer estado como estado, agrega el segundo estado y escribe la diferencia de energía, el periodo de batido, la longitud de onda y si el centro de la nube se mueve. Observa la nube durante algunos periodos de batido.",
"<span>B</span>Orbital":
  "<span>B</span>Orbital",
"<span>E</span>Positions found N":
  "<span>E</span>Posiciones encontradas N",
"<span>F</span>Mean r of the finds (a₀)":
  "<span>F</span>r media de los hallazgos (a₀)",
"<span>G</span>Standard error (a₀)":
  "<span>G</span>Error estándar (a₀)",
"<span>H</span>Most probable r (a₀)":
  "<span>H</span>r más probable (a₀)",
"Orbital, row {#}":
  "Orbital, fila {#}",
"n, row {#}":
  "n, fila {#}",
"l, row {#}":
  "l, fila {#}",
"Positions found N, row {#}":
  "Posiciones encontradas N, fila {#}",
"Mean r of the finds (a₀), row {#}":
  "r media de los hallazgos (a₀), fila {#}",
"Standard error (a₀), row {#}":
  "Error estándar (a₀), fila {#}",
"Most probable r (a₀), row {#}":
  "r más probable (a₀), fila {#}",
"3n² − l(l + {#}), row {#}":
  "3n² − l(l + {#}), fila {#}",
"Work out the last column yourself.":
  "Calcula tú mismo la última columna.",
"<span>A</span>Superposition":
  "<span>A</span>Superposición",
"<span>B</span>Energy difference ΔE (eV)":
  "<span>B</span>Diferencia de energía ΔE (eV)",
"<span>C</span>Beat period (fs)":
  "<span>C</span>Periodo de batido (fs)",
"<span>D</span>Wavelength λ (nm)":
  "<span>D</span>Longitud de onda λ (nm)",
"<span>E</span>Does the center move?":
  "<span>E</span>¿Se mueve el centro?",
"Energy difference ΔE (eV), row {#}":
  "Diferencia de energía ΔE (eV), fila {#}",
"Beat period (fs), row {#}":
  "Periodo de batido (fs), fila {#}",
"Wavelength λ (nm), row {#}":
  "Longitud de onda λ (nm), fila {#}",
"Does the center move?, row {#}":
  "¿Se mueve el centro?, fila {#}",
"1s + 2pz":
  "1s + 2pz",
"1s + 3dz²":
  "1s + 3dz²",
"2s + 2pz":
  "2s + 2pz",
"2pz + 3dz²":
  "2pz + 3dz²",
"3dz² + 4fz³":
  "3dz² + 4fz³",
"Graph the mean r of the finds against \\(3n^2 - l(l + 1)\\) for the first run. Find the slope and the intercept and compare them with \\(a_0/2\\) and zero. Does every state fall on the line within its standard error?":
  "Grafica la r media de los hallazgos en función de \\(3n^2 - l(l + 1)\\) para la primera corrida. Encuentra la pendiente y la ordenada al origen y compáralas con \\(a_0/2\\) y cero. ¿Cae cada estado sobre la recta dentro de su error estándar?",
"For the states with \\(l = n - 1\\) (1s, 2p, 3d, 4f), compare the most probable r with \\(n^2a_0\\), Bohr’s orbits. For the same states, how much farther out than the most probable r is the mean?":
  "Para los estados con \\(l = n - 1\\) (1s, 2p, 3d, 4f), compara la r más probable con \\(n^2a_0\\), las órbitas de Bohr. Para los mismos estados, ¿qué tan más lejos que la r más probable está la media?",
"Compare the 2s and 2p readings, and the 3s, 3p and 3d readings. How does l change the mean distance within a shell?":
  "Compara las lecturas de 2s y 2p, y las de 3s, 3p y 3d. ¿Cómo cambia l la distancia media dentro de una capa?",
"For the second run, how does the standard error change from {#} to {#} finds? Is the mean within two standard errors of {#} \\(a_0\\) each time?":
  "Para la segunda corrida, ¿cómo cambia el error estándar de {#} a {#} hallazgos? ¿Está la media cada vez dentro de dos errores estándar de {#} \\(a_0\\)?",
"Which superpositions moved the center of the cloud? Check each against the selection rule and your prelab answer. Identify the light from the 1s + 2p<sub>z</sub> and 2p<sub>z</sub> + 3d<sub>z²</sub> pairs in the hydrogen spectrum.":
  "¿Qué superposiciones movieron el centro de la nube? Compara cada una con la regla de selección y con tu respuesta del prelaboratorio. Identifica la luz de los pares 1s + 2p<sub>z</sub> y 2p<sub>z</sub> + 3d<sub>z²</sub> en el espectro del hidrógeno.",
"Check that the beat period equals h/ΔE for each moving pair, using \\(h = 4.1357\\) eV·fs. What happened to the 2s + 2p<sub>z</sub> pair, and why?":
  "Verifica que el periodo de batido es igual a h/ΔE para cada par que se mueve, usando \\(h = 4.1357\\) eV·fs. ¿Qué pasó con el par 2s + 2p<sub>z</sub>, y por qué?",
"The demo’s finds are random, so your means scatter; the standard error says by how much. Compare the deviation of each mean from the exact ⟨r⟩ with its standard error: about two thirds should lie within one standard error. Find the spread of single finds, \\(s = (\\text{standard error})\\times\\sqrt{N}\\), for each state, say which states have the widest spread of distances, and why their means are the least certain for the same N.":
  "Los hallazgos de la demo son aleatorios, así que tus medias se dispersan; el error estándar dice cuánto. Compara la desviación de cada media respecto a la ⟨r⟩ exacta con su error estándar: cerca de dos tercios deberían quedar dentro de un error estándar. Encuentra la dispersión de los hallazgos individuales, \\(s = (\\text{standard error})\\times\\sqrt{N}\\) (standard error: error estándar), para cada estado, di qué estados tienen la mayor dispersión de distancias, y por qué sus medias son las menos seguras para la misma N.",
"The electron in 1s is found inside \\(r = a_0\\) about {#}% of the time. Is it ever found far outside? What does that say about the size of an atom?":
  "El electrón en 1s se encuentra dentro de \\(r = a_0\\) cerca del {#}% de las veces. ¿Se encuentra alguna vez muy afuera? ¿Qué dice eso sobre el tamaño de un átomo?",
"Why does the mean of the finds settle down as N grows, while each single find stays as unpredictable as the first?":
  "¿Por qué la media de los hallazgos se estabiliza al crecer N, mientras que cada hallazgo individual sigue siendo tan impredecible como el primero?",
"A hydrogen atom in the 2s state cannot get rid of its energy by giving out one photon. Use your superposition results to explain why. (It lives about a tenth of a second, against {#} ns for 2p.)":
  "Un átomo de hidrógeno en el estado 2s no puede deshacerse de su energía emitiendo un solo fotón. Usa tus resultados de superposición para explicar por qué. (Vive cerca de una décima de segundo, frente a {#} ns para 2p.)",
"Bohr’s model put the electron on a circle of radius \\(n^2a_0\\). Which part of your data agrees with Bohr, and which part shows that the electron has no orbit?":
  "El modelo de Bohr ponía al electrón en un círculo de radio \\(n^2a_0\\). ¿Qué parte de tus datos coincide con Bohr, y qué parte muestra que el electrón no tiene órbita?",
"Prelab answers, both table copies with your graph and fit, the table of superpositions, your comparison of the means with ⟨r⟩ and with Bohr’s radii, your selection rule check, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ambas copias de la tabla con tu gráfica y ajuste, la tabla de superposiciones, tu comparación de las medias con ⟨r⟩ y con los radios de Bohr, tu verificación de la regla de selección, y las respuestas a las preguntas. Identifica los datos simulados.",
"Energy of the lower state":
  "Energía del estado inferior",
"Energy of the higher state":
  "Energía del estado superior",
"Energy of level n":
  "Energía del nivel n",
"Number of positions found":
  "Número de posiciones encontradas",
"Radial probability density, P(r) dr the chance of finding the electron between r and r + dr":
  "Densidad de probabilidad radial, P(r) dr la probabilidad de encontrar al electrón entre r y r + dr",
"Radial part of the wave function":
  "Parte radial de la función de onda",
"Volume (dV: a small volume)":
  "Volumen (dV: un volumen pequeño)",
"Angular part of the wave function (a spherical harmonic)":
  "Parte angular de la función de onda (un armónico esférico)",
"Bohr radius":
  "Radio de Bohr",
"{#} × {#}⁻¹¹ m (CODATA {#})":
  "{#} × {#}⁻¹¹ m (CODATA {#})",
"Frequency of the light given out":
  "Frecuencia de la luz emitida",
"Orbital angular momentum quantum number":
  "Número cuántico de momento angular orbital",
"Principal quantum number":
  "Número cuántico principal",
"Azimuthal angle":
  "Ángulo azimutal",
"Wave function of the electron":
  "Función de onda del electrón",
"Distance from the nucleus":
  "Distancia al núcleo",
"Standard deviation of single measurements of r":
  "Desviación estándar de las mediciones individuales de r",
"Polar angle":
  "Ángulo polar",
"Hydrogen Orbitals":
  "Orbitales del hidrógeno"
});
