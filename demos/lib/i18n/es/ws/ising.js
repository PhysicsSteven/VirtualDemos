/* ws/ising in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/ising', {
"Lattice and update":
  "Red y actualización",
"Magnetization ⟨∣m∣⟩":
  "Magnetización ⟨∣m∣⟩",
"Energy per spin ⟨e⟩":
  "Energía por espín ⟨e⟩",
"Heat capacity c":
  "Capacidad calorífica c",
"sinh⁻⁴({#}/T)":
  "sinh⁻⁴({#}/T)",
"Update":
  "Actualización",
"Lattice size L":
  "Tamaño de la red L",
"Susceptibility chi":
  "Susceptibilidad chi",
"τ_int (sweeps)":
  "τ_int (barridos)",
"ln L":
  "ln L",
"ln ⟨∣m∣⟩":
  "ln ⟨∣m∣⟩",
"ln chi":
  "ln chi",
"The Ising Model | VirtualDemos":
  "El modelo de Ising | VirtualDemos",
"The Ising Model":
  "El modelo de Ising",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (ferromagnetism and the Curie temperature) and §{#} (entropy on a microscopic scale: counting arrangements). The Ising model itself goes beyond the book. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (ferromagnetismo y temperatura de Curie) y §{#} (la entropía a escala microscópica: conteo de configuraciones). El modelo de Ising en sí va más allá del libro. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Cold: one domain; Hot: paramagnet; Near \\(T_c\\) in a field; At \\(T_c\\): fractal domains; Quench and coarsen; Hysteresis; Antiferromagnet.":
  "<strong>Configuraciones en la demo:</strong> Frío: un dominio; Caliente: paramagneto; Cerca de \\(T_c\\) en un campo; En \\(T_c\\): dominios fractales; Enfriamiento brusco y engrosamiento; Histéresis; Antiferromagneto.",
"The lattice shows every spin, amber for up and navy for down. The thermometer beside it and the field bar below it can be dragged, and dragging on the lattice paints spins. The plots show the magnetization and energy as the run goes, the readings you have taken against temperature, and the magnetization against the field.":
  "La red muestra cada espín, ámbar para arriba y azul marino para abajo. El termómetro a su lado y la barra de campo debajo se pueden arrastrar, y arrastrar sobre la red pinta espines. Las gráficas muestran la magnetización y la energía a lo largo de la corrida, las lecturas que has tomado en función de la temperatura, y la magnetización en función del campo.",
"The units are those of the model: the coupling \\(J = 1\\) and Boltzmann’s constant \\(k = 1\\), so temperatures are in units of \\(J/k\\) and energies in units of \\(J\\). Time is counted in sweeps, one attempted update per spin.":
  "Las unidades son las del modelo: el acoplamiento \\(J = 1\\) y la constante de Boltzmann \\(k = 1\\), así que las temperaturas están en unidades de \\(J/k\\) y las energías en unidades de \\(J\\). El tiempo se cuenta en barridos, un intento de actualización por espín.",
"Three update rules draw the spins with the Boltzmann probability: Metropolis and heat bath change one spin at a time, and Wolff flips a whole cluster of aligned spins at once (only with no field).":
  "Tres reglas de actualización eligen los espines con la probabilidad de Boltzmann: Metropolis y baño térmico cambian un espín a la vez, y Wolff invierte de una vez todo un cúmulo de espines alineados (solo sin campo).",
"A measurement first lets the lattice settle for a number of sweeps that it throws away, then averages over more sweeps. It gives the mean of \\(\\lvert m\\rvert\\), the mean energy per spin, the heat capacity and susceptibility from the fluctuations, the autocorrelation time, and the error of each; the errors allow for the readings being correlated. A temperature scan measures at {#} temperatures from {#} to {#}, heating from the ordered state.":
  "Una medición primero deja que la red se asiente durante un número de barridos que descarta, y luego promedia sobre más barridos. Da la media de \\(\\lvert m\\rvert\\), la energía media por espín, la capacidad calorífica y la susceptibilidad a partir de las fluctuaciones, el tiempo de autocorrelación y el error de cada una; los errores toman en cuenta que las lecturas están correlacionadas. Un barrido de temperatura mide a {#} temperaturas de {#} a {#}, calentando desde el estado ordenado.",
"The exact results of Onsager, Yang and Kaufman are drawn for comparison where they exist (no field). They can be hidden.":
  "Los resultados exactos de Onsager, Yang y Kaufman se dibujan para comparar donde existen (sin campo). Se pueden ocultar.",
"Every measurement you keep goes into the demo’s table. Export to worksheet sends the table to the first data table below, or to the second when every reading is at \\(T_c\\); Clear starts a new series, which goes into a new copy of the table.":
  "Cada medición que conservas va a la tabla de la demo. Exportar a la hoja envía la tabla a la primera tabla de datos de abajo, o a la segunda cuando todas las lecturas son en \\(T_c\\); Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Watch order appear in a magnet as it cools, test the simulation against the exact solution of the two dimensional Ising model, and use lattices of different sizes to measure how the magnetization, susceptibility and heat capacity behave at the critical point.":
  "Observa cómo aparece el orden en un imán al enfriarse, pon a prueba la simulación contra la solución exacta del modelo de Ising bidimensional, y usa redes de distintos tamaños para medir cómo se comportan la magnetización, la susceptibilidad y la capacidad calorífica en el punto crítico.",
"<strong>The model.</strong> Each site of an \\(L \\times L\\) square lattice holds a spin \\(s = +1\\) (up) or \\(-1\\) (down). The energy is":
  "<strong>El modelo.</strong> Cada sitio de una red cuadrada de \\(L \\times L\\) tiene un espín \\(s = +1\\) (arriba) o \\(-1\\) (abajo). La energía es",
"\\[E = -J\\sum_{\\text{neighbors}} s_i s_j - h\\sum_i s_i,\\]":
  "\\[E = -J\\sum_{\\text{neighbors}} s_i s_j - h\\sum_i s_i,\\]",
"where the first sum runs over each pair of nearest neighbors once. With \\(J > 0\\) neighbors lower their energy by agreeing, like the atoms of a ferromagnet; \\(h\\) is an applied field. The edges wrap around, so every spin has four neighbors. The magnetization per spin is \\(m = \\frac{1}{N}\\sum s_i\\) and the energy per spin is \\(e = E/N\\), where \\(N = L^2\\).":
  "donde la primera suma recorre cada par de vecinos más cercanos una vez. Con \\(J > 0\\) los vecinos bajan su energía al estar de acuerdo, como los átomos de un ferromagneto; \\(h\\) es un campo aplicado. Los bordes dan la vuelta, así que cada espín tiene cuatro vecinos. La magnetización por espín es \\(m = \\frac{1}{N}\\sum s_i\\) y la energía por espín es \\(e = E/N\\), donde \\(N = L^2\\).",
"<strong>Thermal equilibrium.</strong> At temperature \\(T\\) an arrangement of energy \\(E\\) occurs with probability proportional to \\(e^{-E/kT}\\). The Metropolis rule produces this: pick a spin, find the energy change \\(\\Delta E\\) if it flipped, and flip it with probability {#} if \\(\\Delta E \\le 0\\) and \\(e^{-\\Delta E/kT}\\) otherwise. With no field, flipping a spin \\(s\\) whose four neighbors add up to \\(S\\) changes the energy by \\(\\Delta E = 2JsS\\).":
  "<strong>Equilibrio térmico.</strong> A temperatura \\(T\\) una configuración de energía \\(E\\) ocurre con probabilidad proporcional a \\(e^{-E/kT}\\). La regla de Metropolis produce esto: elige un espín, encuentra el cambio de energía \\(\\Delta E\\) si se invirtiera, e inviértelo con probabilidad {#} si \\(\\Delta E \\le 0\\) y \\(e^{-\\Delta E/kT}\\) en otro caso. Sin campo, invertir un espín \\(s\\) cuyos cuatro vecinos suman \\(S\\) cambia la energía en \\(\\Delta E = 2JsS\\).",
"<strong>Fluctuations.</strong> The heat capacity and susceptibility per spin come from how much \\(e\\) and \\(m\\) fluctuate during the run:":
  "<strong>Fluctuaciones.</strong> La capacidad calorífica y la susceptibilidad por espín vienen de cuánto fluctúan \\(e\\) y \\(m\\) durante la corrida:",
"\\[c = \\frac{N\\left(\\langle e^2\\rangle - \\langle e\\rangle^2\\right)}{kT^2},\\qquad \\chi = \\frac{N\\left(\\langle m^2\\rangle - \\langle \\lvert m\\rvert\\rangle^2\\right)}{kT}.\\]":
  "\\[c = \\frac{N\\left(\\langle e^2\\rangle - \\langle e\\rangle^2\\right)}{kT^2},\\qquad \\chi = \\frac{N\\left(\\langle m^2\\rangle - \\langle \\lvert m\\rvert\\rangle^2\\right)}{kT}.\\]",
"The heat capacity found this way should agree with \\(c = d\\langle e\\rangle/dT\\).":
  "La capacidad calorífica obtenida así debería coincidir con \\(c = d\\langle e\\rangle/dT\\).",
"The susceptibility uses \\(\\langle \\lvert m\\rvert\\rangle\\) in place of \\(\\langle m\\rangle\\), the usual form on a finite lattice: with no field a long run flips between up and down, so \\(\\langle m\\rangle\\) averages to zero and the response \\(\\chi_{\\text{resp}} = N\\left(\\langle m^2\\rangle - \\langle m\\rangle^2\\right)/kT\\) would grow in proportion to \\(N\\) below \\(T_c\\) from those flips instead of falling. The two are not the same quantity. Far above \\(T_c\\), where the spins are nearly independent, \\(\\langle \\lvert m\\rvert\\rangle^2 \\approx (2/\\pi)\\langle m^2\\rangle\\), so this \\(\\chi\\) is \\((1 - 2/\\pi) \\approx 0.363\\) times \\(N\\langle m^2\\rangle/kT\\). Both peak near \\(T_c\\) and grow with \\(L\\) with the same critical exponent, which is what the size comparison below uses.":
  "La susceptibilidad usa \\(\\langle \\lvert m\\rvert\\rangle\\) en lugar de \\(\\langle m\\rangle\\), la forma usual en una red finita: sin campo, una corrida larga alterna entre arriba y abajo, así que \\(\\langle m\\rangle\\) promedia cero y la respuesta \\(\\chi_{\\text{resp}} = N\\left(\\langle m^2\\rangle - \\langle m\\rangle^2\\right)/kT\\) crecería en proporción a \\(N\\) por debajo de \\(T_c\\) debido a esas inversiones en lugar de disminuir. Las dos no son la misma cantidad. Muy por encima de \\(T_c\\), donde los espines son casi independientes, \\(\\langle \\lvert m\\rvert\\rangle^2 \\approx (2/\\pi)\\langle m^2\\rangle\\), así que esta \\(\\chi\\) es \\((1 - 2/\\pi) \\approx 0.363\\) veces \\(N\\langle m^2\\rangle/kT\\). Ambas tienen su máximo cerca de \\(T_c\\) y crecen con \\(L\\) con el mismo exponente crítico, que es lo que usa la comparación de tamaños de abajo.",
"<strong>The exact solution.</strong> Onsager solved the model with no field on an infinite lattice in {#}. Order appears below the critical temperature":
  "<strong>La solución exacta.</strong> Onsager resolvió el modelo sin campo en una red infinita en {#}. El orden aparece por debajo de la temperatura crítica",
"\\[T_c = \\frac{2J}{k\\ln(1 + \\sqrt{2})} = 2.269185\\ J/k,\\]":
  "\\[T_c = \\frac{2J}{k\\ln(1 + \\sqrt{2})} = 2.269185\\ J/k,\\]",
"where the energy per spin is \\(-\\sqrt{2}\\,J\\) and the heat capacity grows without limit. Below \\(T_c\\) the magnetization is (Yang, {#})":
  "donde la energía por espín es \\(-\\sqrt{2}\\,J\\) y la capacidad calorífica crece sin límite. Por debajo de \\(T_c\\) la magnetización es (Yang, {#})",
"\\[m = \\left[1 - \\sinh^{-4}\\!\\left(\\frac{2J}{kT}\\right)\\right]^{1/8}.\\]":
  "\\[m = \\left[1 - \\sinh^{-4}\\!\\left(\\frac{2J}{kT}\\right)\\right]^{1/8}.\\]",
"<strong>Finite lattices.</strong> A finite lattice has no sharp transition: at \\(h = 0\\) it can flip as a whole between up and down, so the demo averages \\(\\lvert m\\rvert\\). At \\(T_c\\) the exact theory predicts how its properties change with the size \\(L\\):":
  "<strong>Redes finitas.</strong> Una red finita no tiene una transición abrupta: en \\(h = 0\\) puede invertirse toda entre arriba y abajo, así que la demo promedia \\(\\lvert m\\rvert\\). En \\(T_c\\) la teoría exacta predice cómo cambian sus propiedades con el tamaño \\(L\\):",
"\\[\\langle \\lvert m\\rvert\\rangle \\propto L^{-1/8},\\qquad \\chi \\propto L^{7/4},\\qquad c \\approx \\frac{8K_c^2}{\\pi}\\ln L + \\text{constant},\\]":
  "\\[\\langle \\lvert m\\rvert\\rangle \\propto L^{-1/8},\\qquad \\chi \\propto L^{7/4},\\qquad c \\approx \\frac{8K_c^2}{\\pi}\\ln L + \\text{constant},\\]",
"where \\(K_c = J/kT_c = 0.440687\\), so \\(8K_c^2/\\pi = 0.4945\\).":
  "donde \\(K_c = J/kT_c = 0.440687\\), así que \\(8K_c^2/\\pi = 0.4945\\).",
"<strong>Critical slowing down.</strong> Successive sweeps are not independent. The integrated autocorrelation time \\(\\tau_{\\text{int}}\\) is about the number of sweeps between independent readings, so a run of \\(n\\) sweeps holds about \\(n/(2\\tau_{\\text{int}})\\) independent samples. At \\(T_c\\), for Metropolis updates, \\(\\tau_{\\text{int}} \\propto L^z\\) with \\(z = 2.17\\) (Nightingale and Blöte, {#}). Cluster updates such as Wolff’s are designed to avoid this.":
  "<strong>Frenado crítico.</strong> Los barridos sucesivos no son independientes. El tiempo de autocorrelación integrado \\(\\tau_{\\text{int}}\\) es aproximadamente el número de barridos entre lecturas independientes, así que una corrida de \\(n\\) barridos contiene unas \\(n/(2\\tau_{\\text{int}})\\) muestras independientes. En \\(T_c\\), con actualizaciones de Metropolis, \\(\\tau_{\\text{int}} \\propto L^z\\) con \\(z = 2.17\\) (Nightingale y Blöte, {#}). Las actualizaciones por cúmulos como la de Wolff están diseñadas para evitarlo.",
"With \\(J = 1\\) and no field, find \\(\\Delta E\\) for flipping a spin when all four of its neighbors agree with it, when three do, and when two do. What is the Metropolis probability of each flip at \\(T = 1.5\\) and at \\(T_c\\)?":
  "Con \\(J = 1\\) y sin campo, encuentra \\(\\Delta E\\) al invertir un espín cuando sus cuatro vecinos coinciden con él, cuando coinciden tres y cuando coinciden dos. ¿Cuál es la probabilidad de Metropolis de cada inversión a \\(T = 1.5\\) y en \\(T_c\\)?",
"Find the energy per spin when every spin is up. Then find it for a checkerboard, with every neighbor opposite. What does it approach at very high temperature?":
  "Encuentra la energía por espín cuando todos los espines apuntan hacia arriba. Luego encuéntrala para un tablero de ajedrez, con cada vecino opuesto. ¿A qué tiende a temperatura muy alta?",
"Show that \\(\\sinh(2/T_c) = 1\\), so Yang’s formula gives \\(m = 0\\) at \\(T_c\\). Then find \\(m\\) at \\(T = 2.0\\).":
  "Muestra que \\(\\sinh(2/T_c) = 1\\), así que la fórmula de Yang da \\(m = 0\\) en \\(T_c\\). Luego encuentra \\(m\\) a \\(T = 2.0\\).",
"By what factor do \\(\\langle \\lvert m\\rvert\\rangle\\) and \\(\\chi\\) change at \\(T_c\\) from \\(L = 32\\) to \\(L = 256\\)? By how much does \\(c\\) grow?":
  "¿Por qué factor cambian \\(\\langle \\lvert m\\rvert\\rangle\\) y \\(\\chi\\) en \\(T_c\\) de \\(L = 32\\) a \\(L = 256\\)? ¿Cuánto crece \\(c\\)?",
"Each Metropolis sweep of a \\(128 \\times 128\\) lattice takes {#} times the work of a \\(32 \\times 32\\) sweep. Use \\(z = 2.17\\) to find how many times more computing an independent sample at \\(T_c\\) costs on the larger lattice.":
  "Cada barrido de Metropolis de una red de \\(128 \\times 128\\) requiere {#} veces el trabajo de un barrido de \\(32 \\times 32\\). Usa \\(z = 2.17\\) para encontrar cuántas veces más cómputo cuesta una muestra independiente en \\(T_c\\) en la red más grande.",
"The demo opens with a small field, \\(h = -0.2\\): set the field to zero first. Keep the field at zero and the coupling ferromagnetic (\\(J = +1\\)) throughout.":
  "La demo abre con un campo pequeño, \\(h = -0.2\\): primero pon el campo en cero. Mantén el campo en cero y el acoplamiento ferromagnético (\\(J = +1\\)) todo el tiempo.",
"<strong>Heating through \\(T_c\\).</strong> On a \\(64 \\times 64\\) lattice with Metropolis updates, discard {#} sweeps and average over {#}. Run a temperature scan from {#} to {#} and keep every reading, then send the readings to the worksheet.":
  "<strong>Calentamiento a través de \\(T_c\\).</strong> En una red de \\(64 \\times 64\\) con actualizaciones de Metropolis, descarta {#} barridos y promedia sobre {#}. Haz un barrido de temperatura de {#} a {#} y conserva cada lectura; luego envía las lecturas a la hoja de trabajo.",
"<strong>At \\(T_c\\) with cluster updates.</strong> Clear the readings. Set \\(T\\) to exactly \\(T_c\\) and use Wolff updates. Discard {#} sweeps and average over {#} {#}. Measure on lattices of {#}, {#}, {#} and {#}, keeping each reading. The largest can take a few minutes. Send the readings to the worksheet.":
  "<strong>En \\(T_c\\) con actualizaciones por cúmulos.</strong> Borra las lecturas. Fija \\(T\\) exactamente en \\(T_c\\) y usa actualizaciones de Wolff. Descarta {#} barridos y promedia sobre {#} {#}. Mide en redes de {#}, {#}, {#} y {#}, conservando cada lectura. La más grande puede tardar unos minutos. Envía las lecturas a la hoja de trabajo.",
"<strong>Critical slowing down.</strong> Clear the readings. Still at \\(T_c\\), use Metropolis updates. Discard {#} sweeps and average over {#} {#}. Measure on lattices of {#}, {#} and {#}, keeping each reading, and send the readings to the worksheet.":
  "<strong>Frenado crítico.</strong> Borra las lecturas. Todavía en \\(T_c\\), usa actualizaciones de Metropolis. Descarta {#} barridos y promedia sobre {#} {#}. Mide en redes de {#}, {#} y {#}, conservando cada lectura, y envía las lecturas a la hoja de trabajo.",
"<strong>Heating through \\(T_c\\).</strong>":
  "<strong>Calentamiento a través de \\(T_c\\).</strong>",
"<span>B</span>Lattice and update":
  "<span>B</span>Red y actualización",
"<span>C</span>Temperature \\(T\\)":
  "<span>C</span>Temperatura \\(T\\)",
"<span>D</span>Magnetization ⟨∣m∣⟩":
  "<span>D</span>Magnetización ⟨∣m∣⟩",
"<span>F</span>Energy per spin ⟨e⟩":
  "<span>F</span>Energía por espín ⟨e⟩",
"<span>G</span>Heat capacity \\(c\\)":
  "<span>G</span>Capacidad calorífica \\(c\\)",
"<span>J</span>sinh⁻⁴({#}/T)":
  "<span>J</span>sinh⁻⁴({#}/T)",
"Lattice and update, row {#}":
  "Red y actualización, fila {#}",
"Temperature T, row {#}":
  "Temperatura T, fila {#}",
"Magnetization ⟨∣m∣⟩, row {#}":
  "Magnetización ⟨∣m∣⟩, fila {#}",
"±, row {#}":
  "±, fila {#}",
"Energy per spin ⟨e⟩, row {#}":
  "Energía por espín ⟨e⟩, fila {#}",
"Heat capacity c, row {#}":
  "Capacidad calorífica c, fila {#}",
"⟨∣m∣⟩⁸, row {#}":
  "⟨∣m∣⟩⁸, fila {#}",
"sinh⁻⁴({#}/T), row {#}":
  "sinh⁻⁴({#}/T), fila {#}",
"<strong>At the critical temperature.</strong>":
  "<strong>En la temperatura crítica.</strong>",
"<span>B</span>Update":
  "<span>B</span>Actualización",
"<span>C</span>Lattice size \\(L\\)":
  "<span>C</span>Tamaño de la red \\(L\\)",
"<span>E</span>Heat capacity \\(c\\)":
  "<span>E</span>Capacidad calorífica \\(c\\)",
"<span>F</span>Susceptibility \\(\\chi\\)":
  "<span>F</span>Susceptibilidad \\(\\chi\\)",
"<span>G</span>\\(\\tau_{\\text{int}}\\) (sweeps)":
  "<span>G</span>\\(\\tau_{\\text{int}}\\) (barridos)",
"<span>H</span>ln \\(L\\)":
  "<span>H</span>ln \\(L\\)",
"<span>I</span>ln ⟨∣m∣⟩":
  "<span>I</span>ln ⟨∣m∣⟩",
"<span>J</span>ln \\(\\chi\\)":
  "<span>J</span>ln \\(\\chi\\)",
"Update, row {#}":
  "Actualización, fila {#}",
"Lattice size L, row {#}":
  "Tamaño de la red L, fila {#}",
"Susceptibility chi, row {#}":
  "Susceptibilidad chi, fila {#}",
"τ_int (sweeps), row {#}":
  "τ_int (barridos), fila {#}",
"ln L, row {#}":
  "ln L, fila {#}",
"ln ⟨∣m∣⟩, row {#}":
  "ln ⟨∣m∣⟩, fila {#}",
"ln chi, row {#}":
  "ln chi, fila {#}",
"For the scan readings at \\(T \\le 2.2\\), fill in the last two columns and graph \\(\\langle \\lvert m\\rvert\\rangle^8\\) against \\(\\sinh^{-4}(2/T)\\). What slope and intercept does Yang’s formula predict? How close are yours?":
  "Para las lecturas del barrido con \\(T \\le 2.2\\), llena las dos últimas columnas y grafica \\(\\langle \\lvert m\\rvert\\rangle^8\\) en función de \\(\\sinh^{-4}(2/T)\\). ¿Qué pendiente y qué ordenada al origen predice la fórmula de Yang? ¿Qué tan cerca están las tuyas?",
"Where does \\(\\langle e\\rangle\\) change fastest with temperature, and where is \\(c\\) largest? Estimate \\(d\\langle e\\rangle/dT\\) from the readings at {#} and {#} and compare it with the mean of \\(c\\) at those two temperatures. Do the same with {#} and {#}, around the peak, and explain why the agreement is worse there.":
  "¿Dónde cambia \\(\\langle e\\rangle\\) más rápido con la temperatura, y dónde es mayor \\(c\\)? Estima \\(d\\langle e\\rangle/dT\\) con las lecturas a {#} y {#} y compárala con la media de \\(c\\) a esas dos temperaturas. Haz lo mismo con {#} y {#}, alrededor del máximo, y explica por qué ahí la concordancia es peor.",
"Compare your \\(\\langle e\\rangle\\) at the lowest temperature with the energy of the fully aligned state, and at the highest with the high temperature limit (prelab {#}).":
  "Compara tu \\(\\langle e\\rangle\\) a la temperatura más baja con la energía del estado totalmente alineado, y a la más alta con el límite de alta temperatura (prelaboratorio {#}).",
"Above \\(T_c\\), \\(\\langle \\lvert m\\rvert\\rangle\\) does not fall to zero. Compare its value at {#} with \\(1/\\sqrt{N}\\), and explain why a finite lattice always shows some magnetization.":
  "Por encima de \\(T_c\\), \\(\\langle \\lvert m\\rvert\\rangle\\) no baja a cero. Compara su valor a {#} con \\(1/\\sqrt{N}\\), y explica por qué una red finita siempre muestra algo de magnetización.",
"For the Wolff readings at \\(T_c\\), fill in the log columns. Graph \\(\\ln \\langle \\lvert m\\rvert\\rangle\\) against \\(\\ln L\\) and \\(\\ln \\chi\\) against \\(\\ln L\\), and compare the slopes with \\(-1/8\\) and \\(7/4\\).":
  "Para las lecturas de Wolff en \\(T_c\\), llena las columnas de logaritmos. Grafica \\(\\ln \\langle \\lvert m\\rvert\\rangle\\) en función de \\(\\ln L\\) y \\(\\ln \\chi\\) en función de \\(\\ln L\\), y compara las pendientes con \\(-1/8\\) y \\(7/4\\).",
"Graph \\(c\\) against \\(\\ln L\\) for the Wolff readings. Compare the slope with \\(8K_c^2/\\pi\\).":
  "Grafica \\(c\\) en función de \\(\\ln L\\) para las lecturas de Wolff. Compara la pendiente con \\(8K_c^2/\\pi\\).",
"Compare \\(\\tau_{\\text{int}}\\) for the two update rules at the same \\(L\\). From your Metropolis readings at {#} and {#}, find \\(z\\) from \\(\\tau_{\\text{int}} \\propto L^z\\) and compare with {#}. How many independent samples did each run hold, and what does that suggest about the \\(\\tau_{\\text{int}}\\) measured on the larger lattices?":
  "Compara \\(\\tau_{\\text{int}}\\) para las dos reglas de actualización con el mismo \\(L\\). Con tus lecturas de Metropolis a {#} y {#}, encuentra \\(z\\) a partir de \\(\\tau_{\\text{int}} \\propto L^z\\) y compáralo con {#}. ¿Cuántas muestras independientes contenía cada corrida, y qué sugiere eso sobre el \\(\\tau_{\\text{int}}\\) medido en las redes más grandes?",
"Monte Carlo readings carry a statistical error that shrinks as one over the square root of the number of independent samples, not of sweeps. Use the ± of \\(\\langle \\lvert m\\rvert\\rangle\\) at \\(L = 256\\) shown in the demo’s table (write it next to your reading) to find the uncertainty of \\(\\ln \\langle \\lvert m\\rvert\\rangle\\) there, and compare the scatter of your points about the line in Analysis {#} with these errors. For the Metropolis run at \\(L = 128\\), how many independent samples were there, and how far would you trust its error bars (and its \\(\\tau_{\\text{int}}\\), which is itself estimated from the same run)?":
  "Las lecturas de Monte Carlo llevan un error estadístico que se reduce como uno sobre la raíz cuadrada del número de muestras independientes, no de barridos. Usa el ± de \\(\\langle \\lvert m\\rvert\\rangle\\) en \\(L = 256\\) que muestra la tabla de la demo (escríbelo junto a tu lectura) para encontrar ahí la incertidumbre de \\(\\ln \\langle \\lvert m\\rvert\\rangle\\), y compara la dispersión de tus puntos alrededor de la recta del Análisis {#} con estos errores. Para la corrida de Metropolis en \\(L = 128\\), ¿cuántas muestras independientes había, y qué tanto confiarías en sus barras de error (y en su \\(\\tau_{\\text{int}}\\), que también se estima con la misma corrida)?",
"Choose Hysteresis. In equilibrium below \\(T_c\\) the magnetization would flip as soon as \\(h\\) changes sign, yet the lattice stays magnetized against the field until \\(h\\) is near \\(\\mp 0.5\\). Why? What would a slower sweep of the field do?":
  "Elige Histéresis. En equilibrio por debajo de \\(T_c\\) la magnetización se invertiría en cuanto \\(h\\) cambiara de signo, y sin embargo la red se mantiene magnetizada contra el campo hasta que \\(h\\) está cerca de \\(\\mp 0.5\\). ¿Por qué? ¿Qué haría un barrido más lento del campo?",
"Choose Antiferromagnet (\\(J = -1\\)). Flipping every second spin, in a checkerboard pattern, turns any arrangement of the ferromagnet into one of the antiferromagnet with the same energy. What does that say about its critical temperature and its energy at each \\(T\\)?":
  "Elige Antiferromagneto (\\(J = -1\\)). Invertir uno de cada dos espines, en un patrón de tablero de ajedrez, convierte cualquier configuración del ferromagneto en una del antiferromagneto con la misma energía. ¿Qué dice eso de su temperatura crítica y de su energía a cada \\(T\\)?",
"Choose Quench and coarsen. Domains grow roughly as the square root of the time. How much longer does it take for the typical domain to double in size?":
  "Elige Enfriamiento brusco y engrosamiento. Los dominios crecen más o menos como la raíz cuadrada del tiempo. ¿Cuánto más tarda el dominio típico en duplicar su tamaño?",
"At \\(h = 0\\) a long enough run on a finite lattice gives \\(\\langle m\\rangle = 0\\) at every temperature, even well below \\(T_c\\). Why, and why does the demo average \\(\\lvert m\\rvert\\) instead?":
  "En \\(h = 0\\) una corrida lo bastante larga en una red finita da \\(\\langle m\\rangle = 0\\) a cualquier temperatura, incluso muy por debajo de \\(T_c\\). ¿Por qué, y por qué la demo promedia \\(\\lvert m\\rvert\\) en su lugar?",
"Iron loses its magnetism at its Curie temperature, {#} K. If iron were a two dimensional Ising magnet, what coupling \\(J\\) (in eV) would give that \\(T_c\\)? Use \\(k = 8.617 \\times 10^{-5}\\) eV/K.":
  "El hierro pierde su magnetismo a su temperatura de Curie, {#} K. Si el hierro fuera un imán de Ising bidimensional, ¿qué acoplamiento \\(J\\) (en eV) daría esa \\(T_c\\)? Usa \\(k = 8.617 \\times 10^{-5}\\) eV/K.",
"Prelab answers, the table copies with their graphs and fits, the comparison with Yang’s formula, the three exponents from the critical point, your value of \\(z\\), and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de la tabla con sus gráficas y ajustes, la comparación con la fórmula de Yang, los tres exponentes del punto crítico, tu valor de \\(z\\) y las respuestas a las preguntas. Identifica los datos simulados.",
"Energy of the arrangement":
  "Energía de la configuración",
"Coupling between neighboring spins (the unit of energy here)":
  "Acoplamiento entre espines vecinos (aquí la unidad de energía)",
"Critical coupling, J/kT_c":
  "Acoplamiento crítico, J/kT_c",
"Lattice size (L × L sites)":
  "Tamaño de la red (L × L sitios)",
"Number of spins, L²":
  "Número de espines, L²",
"Sum of a spin's four neighbors":
  "Suma de los cuatro vecinos de un espín",
"Critical temperature":
  "Temperatura crítica",
"J/kT_c = {#} (Onsager)":
  "J/kT_c = {#} (Onsager)",
"Heat capacity per spin":
  "Capacidad calorífica por espín",
"Susceptibility per spin":
  "Susceptibilidad por espín",
"Response from the plain fluctuations of m":
  "Respuesta a partir de las fluctuaciones simples de m",
"Energy per spin, E/N":
  "Energía por espín, E/N",
"Applied field":
  "Campo aplicado",
"Boltzmann constant, set to {#} in the model's units":
  "Constante de Boltzmann, igual a {#} en las unidades del modelo",
"Magnetization per spin":
  "Magnetización por espín",
"Number of sweeps in a run":
  "Número de barridos en una corrida",
"Spin of one site, +{#} (up) or −{#} (down)":
  "Espín de un sitio, +{#} (arriba) o −{#} (abajo)",
"Spin of site i":
  "Espín del sitio i",
"Spin of a neighbor of site i":
  "Espín de un vecino del sitio i",
"Integrated autocorrelation time":
  "Tiempo de autocorrelación integrado",
"Dynamic critical exponent":
  "Exponente crítico dinámico",
"{#} for Metropolis updates":
  "{#} para actualizaciones de Metropolis",
"Ising Model":
  "Modelo de Ising"
});
