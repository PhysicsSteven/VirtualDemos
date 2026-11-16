/* demo/numerical-methods in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'demo/numerical-methods', {
"Euler":
  "Euler",
"Symplectic Euler":
  "Euler simpléctico",
"Verlet":
  "Verlet",
"RK4":
  "RK4",
"{#} s on screen = {#} s of motion":
  "{#} s en pantalla = {#} s de movimiento",
"Phase portrait: v ÷ ω (m) against x (m)":
  "Retrato de fase: v ÷ ω (m) contra x (m)",
"Energy error |ΔE/E₀| against time":
  "Error de energía |ΔE/E₀| contra el tiempo",
"symplectic Euler and Verlet: |ΔE| dips to zero twice a period":
  "Euler simpléctico y Verlet: |ΔE| baja a cero dos veces por periodo",
"Numerical Methods for Motion":
  "Métodos numéricos para el movimiento",
"<a>Math for physics</a>":
  "<a>Matemáticas para física</a>",
"<span><a><span>←</span> <span>Functions and Their Derivatives</span></a></span>":
  "<span><a><span>←</span> <span>Funciones y sus derivadas</span></a></span>",
"A computer cannot solve F = ma exactly: it takes small steps in time. Run four common step rules side by side on a spring, a pendulum and an orbit, and see which errors come from the method and which from the physics.":
  "Una computadora no puede resolver F = ma de forma exacta: avanza dando pequeños pasos en el tiempo. Corre cuatro reglas de paso comunes lado a lado en un resorte, un péndulo y una órbita, y observa qué errores vienen del método y cuáles de la física.",
"Take exactly one period's worth of steps at once, then pause":
  "Da de una vez exactamente los pasos de un periodo y luego pausa",
"+{#} period":
  "+{#} periodo",
"Take exactly ten periods' worth of steps at once, then pause":
  "Da de una vez exactamente los pasos de diez periodos y luego pausa",
"+{#} periods":
  "+{#} periodos",
"What to plot":
  "Qué graficar",
"Energy error":
  "Error de energía",
"Error":
  "Error",
"Error against h":
  "Error contra h",
"Four copies of the same system, one for each step rule, with the exact motion drawn dashed beside each. Below, the phase portrait (velocity against position) and a plot of the energy error or the error against time, or the largest error in the first period against the time step. Space plays or pauses.":
  "Cuatro copias del mismo sistema, una por cada regla de paso, con el movimiento exacto dibujado con línea discontinua junto a cada una. Abajo, el retrato de fase (velocidad contra posición) y una gráfica del error de energía o del error contra el tiempo, o del error máximo en el primer periodo contra el paso de tiempo. Espacio reproduce o pausa.",
"Divider between the systems and the plots":
  "Divisor entre los sistemas y las gráficas",
"Set up the system and the step rules":
  "Prepara el sistema y las reglas de paso",
"<span>Set up, then press Play</span>":
  "<span>Prepara y luego presiona Reproducir</span>",
"System":
  "Sistema",
"Spring":
  "Resorte",
"Pendulum":
  "Péndulo",
"Orbit":
  "Órbita",
"Steps per period N":
  "Pasos por periodo N",
"Release angle θ₀":
  "Ángulo de liberación θ₀",
"Step rules to run":
  "Reglas de paso por correr",
"<span></span>Euler":
  "<span></span>Euler",
"<span></span>Symplectic Euler":
  "<span></span>Euler simpléctico",
"<span></span>Verlet":
  "<span></span>Verlet",
"<span></span>RK4":
  "<span></span>RK4",
"<span><span></span> Exact motion (dashed)</span>":
  "<span><span></span> Movimiento exacto (discontinuo)</span>",
"<span>Log scale on the time plot</span>":
  "<span>Escala logarítmica en la gráfica del tiempo</span>",
"Spring, {#} steps a period":
  "Resorte, {#} pasos por periodo",
"Pendulum from {#}°":
  "Péndulo desde {#}°",
"Orbit, e = {#}":
  "Órbita, e = {#}",
"Comet orbit, e = {#}":
  "Órbita de cometa, e = {#}",
"A {#} kg block on a {#} N/m spring, period {#} s, pulled out {#} m and let go. With {#} steps a period (h = {#} s), Euler multiplies the energy by {#} + (ωh)² = {#} every step, so it more than doubles each period: its block swings wider and wider until it is stopped at a thousand times the starting energy, {#} s in. The other three stay on the dashed exact motion to the eye. Switch the plot to Error to see how far off each one is.":
  "Un bloque de {#} kg en un resorte de {#} N/m, periodo {#} s, se jala {#} m y se suelta. Con {#} pasos por periodo (h = {#} s), Euler multiplica la energía por {#} + (ωh)² = {#} en cada paso, así que más que se duplica en cada periodo: su bloque oscila cada vez más amplio hasta que se detiene al llegar a mil veces la energía inicial, a los {#} s. A simple vista, los otros tres se quedan sobre el movimiento exacto discontinuo. Cambia la gráfica a Error para ver qué tan lejos está cada uno.",
"Time step h":
  "Paso de tiempo h",
"Period T (exact)":
  "Periodo T (exacto)",
"{#} s = {#} periods":
  "{#} s = {#} periodos",
"Each step rule now: the largest error since Reset, its energy error now and the force evaluations it has used":
  "Cada regla de paso ahora: el error máximo desde Reiniciar, su error de energía actual y las evaluaciones de la fuerza que ha usado",
"Step rule":
  "Regla de paso",
"Largest error (m)":
  "Error máximo (m)",
"ΔE/E₀ now":
  "ΔE/E₀ ahora",
"Force evaluations":
  "Evaluaciones de la fuerza",
"<span></span> Euler":
  "<span></span> Euler",
"<span></span> Symplectic Euler":
  "<span></span> Euler simpléctico",
"<span></span> Verlet":
  "<span></span> Verlet",
"<span></span> RK4":
  "<span></span> RK4",
"periods":
  "periodos",
"Sympl.":
  "Simpl.",
"<span>Blind: hide the Error against h plot (predict the slopes first)</span>":
  "<span>A ciegas: ocultar la gráfica de Error contra h (primero predice las pendientes)</span>",
"The four step rules":
  "Las cuatro reglas de paso",
"Euler: x ← x + h v, v ← v + h a(x old)":
  "Euler: x ← x + h v, v ← v + h a(x anterior)",
"Symplectic Euler: v ← v + h a(x), x ← x + h v new":
  "Euler simpléctico: v ← v + h a(x), x ← x + h v nueva",
"Verlet: v ← v + ½h a(x), x ← x + h v, v ← v + ½h a(x new)":
  "Verlet: v ← v + ½h a(x), x ← x + h v, v ← v + ½h a(x nueva)",
"RK4: four slopes per step, k₁ at the start, k₂ and k₃ at the middle, k₄ at the end, weighted {#} : {#} : {#} : {#}":
  "RK4: cuatro pendientes por paso, k₁ al inicio, k₂ y k₃ en medio, k₄ al final, con pesos {#} : {#} : {#} : {#}",
"Each rule turns the equation of motion a = F/m into a recipe for the next position and velocity from the present ones, h seconds later. Euler uses only the start of the step, so a curving motion keeps stepping off the outside of its curve: the energy grows every step. Symplectic Euler (also called Euler–Cromer) differs only in order: it updates v first and moves x with the new v. That small change makes it keep the area of every patch of the phase portrait, so its energy wobbles but never drifts. Verlet (velocity Verlet, the leapfrog method) splits the velocity kick in two halves around the move; it is symmetric in time, keeps phase space areas too, and is second order. RK4, the classic fourth order Runge–Kutta method, samples the slope four times per step and is far more accurate per step, but it does not keep phase space areas, so over many periods its energy drifts slowly (down, for these systems).":
  "Cada regla convierte la ecuación de movimiento a = F/m en una receta para obtener la siguiente posición y velocidad a partir de las actuales, h segundos después. Euler usa solo el inicio del paso, así que un movimiento curvo se sale una y otra vez por fuera de su curva: la energía crece en cada paso. Euler simpléctico (también llamado Euler–Cromer) solo difiere en el orden: actualiza primero v y mueve x con la nueva v. Ese pequeño cambio hace que conserve el área de cada región del retrato de fase, así que su energía oscila pero nunca se desvía. Verlet (Verlet de velocidad, el método de salto de rana) divide el empujón de la velocidad en dos mitades alrededor del movimiento; es simétrico en el tiempo, también conserva las áreas del espacio de fase y es de segundo orden. RK4, el clásico método de Runge–Kutta de cuarto orden, evalúa la pendiente cuatro veces por paso y es mucho más preciso por paso, pero no conserva las áreas del espacio de fase, así que a lo largo de muchos periodos su energía se desvía lentamente (hacia abajo, en estos sistemas).",
"Order: halve h and a method of order p cuts its error after a fixed time by about {#}ᵖ. Euler and symplectic Euler are first order, Verlet second, RK4 fourth. On a log–log plot of error against h, the slope is p, until rounding (about {#}⁻¹⁶ per step in double precision) sets a floor.":
  "Orden: si reduces h a la mitad, un método de orden p reduce su error después de un tiempo fijo en un factor de aproximadamente {#}ᵖ. Euler y Euler simpléctico son de primer orden, Verlet de segundo y RK4 de cuarto. En una gráfica log–log del error contra h, la pendiente es p, hasta que el redondeo (alrededor de {#}⁻¹⁶ por paso en doble precisión) fija un piso.",
"Spring: a = −(k/m)x, m = {#} kg, k = {#}π² m/T² = {#} N/m, T = {#} s, A = {#} m":
  "Resorte: a = −(k/m)x, m = {#} kg, k = {#}π² m/T² = {#} N/m, T = {#} s, A = {#} m",
"Pendulum: α = −(g/L) sin θ, L = {#} m, g = {#} m/s², T = {#}√(L/g) K(sin(θ₀/{#}))":
  "Péndulo: α = −(g/L) sin θ, L = {#} m, g = {#} m/s², T = {#}√(L/g) K(sin(θ₀/{#}))",
"Orbit: a = −GM r/r³, GM = {#}π² AU³/yr², semimajor axis {#} AU, T = {#} yr":
  "Órbita: a = −GM r/r³, GM = {#}π² AU³/yr², semieje mayor {#} AU, T = {#} yr",
"Error: spring √(Δx² + (Δv/ω)²), pendulum √(Δθ² + (Δθ′/ω₀)²), orbit |Δr| Energy error: (E − E₀)/|E₀|":
  "Error: resorte √(Δx² + (Δv/ω)²), péndulo √(Δθ² + (Δθ′/ω₀)²), órbita |Δr|. Error de energía: (E − E₀)/|E₀|",
"Model: an ideal massless spring, a point bob on a massless rigid rod, and a planet of negligible mass around a fixed star; no friction or drag. Every run starts at a turning point: the block at x = A at rest, the bob at θ₀ at rest, the planet at perihelion. The step h is the period divided by N, so after N steps every method has gone exactly one period. The dashed exact motion is not stepped: the spring's is x = A cos ωt; the pendulum's is sin(θ/{#}) = sin(θ₀/{#}) cd(ω₀t) (Jacobi's elliptic function, from the arithmetic–geometric mean, to rounding); the orbit's comes from Kepler's equation M = E − e sin E, solved by Newton's method to rounding. The error is the distance between the method's point and the exact point at the same time: on the phase portrait for the spring and the pendulum (velocity scaled by ω so both axes are lengths or angles), and in space for the planet. A force evaluation is one use of a(x); Verlet reuses the end of one step as the start of the next, so it costs one per step, like the two Euler rules, while RK4 costs four. A run is stopped when its energy is off by a factor of {#} or the planet comes within {#} AU of the star; that is the method failing, not the physics. Arithmetic is ordinary double precision.":
  "Modelo: un resorte ideal sin masa, una lenteja puntual en una varilla rígida sin masa, y un planeta de masa despreciable alrededor de una estrella fija; sin fricción ni arrastre. Cada corrida empieza en un punto de retorno: el bloque en x = A en reposo, la lenteja en θ₀ en reposo, el planeta en el perihelio. El paso h es el periodo dividido entre N, así que después de N pasos todos los métodos han recorrido exactamente un periodo. El movimiento exacto discontinuo no se calcula por pasos: el del resorte es x = A cos ωt; el del péndulo es sin(θ/{#}) = sin(θ₀/{#}) cd(ω₀t) (función elíptica de Jacobi, calculada con la media aritmético–geométrica, hasta el redondeo); el de la órbita sale de la ecuación de Kepler M = E − e sin E, resuelta con el método de Newton hasta el redondeo. El error es la distancia entre el punto del método y el punto exacto en el mismo instante: en el retrato de fase para el resorte y el péndulo (con la velocidad escalada por ω para que ambos ejes sean longitudes o ángulos), y en el espacio para el planeta. Una evaluación de la fuerza es un uso de a(x); Verlet reutiliza el final de un paso como el inicio del siguiente, así que cuesta una por paso, igual que las dos reglas de Euler, mientras que RK4 cuesta cuatro. Una corrida se detiene cuando su energía se desvía por un factor de {#} o el planeta se acerca a menos de {#} AU de la estrella; eso es una falla del método, no de la física. La aritmética es de doble precisión ordinaria.",
"A block on a spring.":
  "Un bloque en un resorte.",
"{#} steps per period, h = {#} s.":
  "{#} pasos por periodo, h = {#} s.",
"Time {#} s, {#} periods.":
  "Tiempo {#} s, {#} periodos.",
"Euler: error {#}, largest error {#}, energy up by {#} of the start.":
  "Euler: error {#}, error máximo {#}, la energía sube {#} de la inicial.",
"Symplectic Euler: error {#}, largest error {#}, energy up by {#} of the start.":
  "Euler simpléctico: error {#}, error máximo {#}, la energía sube {#} de la inicial.",
"Verlet: error {#}, largest error {#}, energy up by {#} of the start.":
  "Verlet: error {#}, error máximo {#}, la energía sube {#} de la inicial.",
"RK4: error {#}, largest error {#}, energy up by {#} of the start.":
  "RK4: error {#}, error máximo {#}, la energía sube {#} de la inicial.",
"The lower plot shows the energy error against time.":
  "La gráfica inferior muestra el error de energía contra el tiempo.",
"Error (m) against time, log scale":
  "Error (m) contra el tiempo, escala logarítmica",
"Largest error in the first period (m) against the time step h, log–log":
  "Error máximo en el primer periodo (m) contra el paso de tiempo h, log–log",
"Euler: slope {#}":
  "Euler: pendiente {#}",
"Symplectic Euler: slope {#}":
  "Euler simpléctico: pendiente {#}",
"Verlet: slope {#}":
  "Verlet: pendiente {#}",
"RK4: slope {#}":
  "RK4: pendiente {#}",
"slopes fitted for N ≥ {#}, errors {#}⁻¹¹ to {#} A":
  "pendientes ajustadas para N ≥ {#}, errores de {#}⁻¹¹ a {#} A",
"a method that failed in one period has no point":
  "un método que falló en un periodo no tiene punto",
"Phase portrait: θ′ ÷ ω₀ (rad) against θ (rad)":
  "Retrato de fase: θ′ ÷ ω₀ (rad) contra θ (rad)",
"Largest error in the first period (rad) against the time step h, log–log":
  "Error máximo en el primer periodo (rad) contra el paso de tiempo h, log–log",
"Your own settings. A setup above puts back its own.":
  "Tus propios ajustes. Una configuración de arriba restablece los suyos.",
"Largest error (rad)":
  "Error máximo (rad)",
"{#} s on screen = {#} yr ({#} days)":
  "{#} s en pantalla = {#} yr ({#} días)",
"Phase portrait: radial speed ÷ n (AU) against r (AU)":
  "Retrato de fase: rapidez radial ÷ n (AU) contra r (AU)",
"Largest error in the first period (AU) against the time step h, log–log":
  "Error máximo en el primer periodo (AU) contra el paso de tiempo h, log–log",
"h (yr)":
  "h (yr)",
"Euler: slope —":
  "Euler: pendiente —",
"{#} (h = {#} yr)":
  "{#} (h = {#} yr)",
"{#} yr = {#} periods":
  "{#} yr = {#} periodos",
"Time step in days":
  "Paso de tiempo en días",
"Largest error (AU)":
  "Error máximo (AU)",
"t = {#} yr":
  "t = {#} yr",
"Only {#} steps a period (h = {#} s). Euler is gone after {#} s. Symplectic Euler stays on a closed, tilted ellipse on the phase portrait: its energy swings by up to {#}% within each period but does not drift. Verlet keeps the right shape but runs {#}% fast, so it pulls ahead of the dashed block. RK4 sits on the exact curve at first, but its energy falls by {#}% a period, so after a minute its swing has shrunk by about a fifth.":
  "Solo {#} pasos por periodo (h = {#} s). Euler se pierde después de {#} s. Euler simpléctico se queda en una elipse cerrada e inclinada en el retrato de fase: su energía oscila hasta {#}% dentro de cada periodo pero no se desvía. Verlet conserva la forma correcta pero va {#}% más rápido, así que se adelanta al bloque discontinuo. RK4 al principio está sobre la curva exacta, pero su energía baja {#}% por periodo, así que después de un minuto su oscilación se ha reducido en cerca de una quinta parte.",
"The lower plot shows the largest error in the first period against the time step, on log scales.":
  "La gráfica inferior muestra el error máximo en el primer periodo contra el paso de tiempo, en escalas logarítmicas.",
"A {#} m pendulum let go from {#}°. The force is −mg sin θ, not proportional to θ, so the exact period is {#} s, {#}% longer than {#}π√(L/g) = {#} s. That is physics, and every good method finds it. Euler, at {#} steps a period, pumps in energy until the bob goes over the top during its second period: that is the method, not the physics.":
  "Un péndulo de {#} m soltado desde {#}°. La fuerza es −mg sin θ, no proporcional a θ, así que el periodo exacto es {#} s, {#}% más largo que {#}π√(L/g) = {#} s. Eso es física, y todo buen método lo encuentra. Euler, con {#} pasos por periodo, inyecta energía hasta que la lenteja pasa por arriba durante su segundo periodo: eso es el método, no la física.",
"Let go from {#}°, {#}° from straight up. The bob creeps near the top, the exact period is {#} s ({#} times {#}π√(L/g)), and a small error in energy decides whether the bob turns back or goes over. Euler goes over the top in its first swing; the other three keep swinging back and forth, though RK4 slowly falls behind the dashed bob.":
  "Soltado desde {#}°, a {#}° de la vertical hacia arriba. La lenteja avanza despacio cerca de la cima, el periodo exacto es {#} s ({#} veces {#}π√(L/g)), y un pequeño error en la energía decide si la lenteja regresa o pasa por arriba. Euler pasa por arriba en su primera oscilación; los otros tres siguen oscilando de ida y vuelta, aunque RK4 se va quedando atrás poco a poco respecto a la lenteja discontinua.",
"A planet in an orbit with e = {#} around a star, period {#} year, {#} steps an orbit ({#} days each). Euler adds energy every step, most of it in the first few steps at the fast close approach, so its orbit swells to almost four times the size. Symplectic Euler and Verlet stay on closed ellipses, but the ellipses slowly turn (precess), which the exact orbit never does. RK4 stays close and loses a little energy each orbit.":
  "Un planeta en una órbita con e = {#} alrededor de una estrella, periodo {#} año, {#} pasos por órbita ({#} días cada uno). Euler añade energía en cada paso, la mayor parte en los primeros pasos del acercamiento rápido, así que su órbita se hincha hasta casi cuatro veces su tamaño. Euler simpléctico y Verlet se quedan en elipses cerradas, pero las elipses giran lentamente (precesan), cosa que la órbita exacta nunca hace. RK4 se mantiene cerca y pierde un poco de energía en cada órbita.",
"Symplectic Euler: slope —":
  "Euler simpléctico: pendiente —",
"Verlet: slope —":
  "Verlet: pendiente —",
"A comet with e = {#} swings to {#} AU from the star, at {#} times the speed of a circular orbit with the same period. With {#} equal steps a year ({#} hours each), nearly all the error is made in the few steps of the close pass. Euler is flung out on the first pass; in the first three orbits symplectic Euler's energy swings by up to {#}%, Verlet's by {#}% and RK4's by {#}%. Far out the comet barely moves and the steps are wasted. Real orbit codes shrink the step near the star.":
  "Un cometa con e = {#} pasa a {#} AU de la estrella, a {#} veces la rapidez de una órbita circular con el mismo periodo. Con {#} pasos iguales por año ({#} horas cada uno), casi todo el error se produce en los pocos pasos del paso cercano. Euler sale disparado en el primer paso cercano; en las primeras tres órbitas la energía de Euler simpléctico oscila hasta {#}%, la de Verlet {#}% y la de RK4 {#}%. Lejos de la estrella el cometa casi no se mueve y los pasos se desperdician. Los códigos reales de órbitas reducen el paso cerca de la estrella.",
"A planet in an orbit of eccentricity {#}.":
  "Un planeta en una órbita de excentricidad {#}.",
"{#} steps per period, h = {#} yr.":
  "{#} pasos por periodo, h = {#} yr.",
"Time {#} yr, {#} periods.":
  "Tiempo {#} yr, {#} periodos.",
"RK4: error {#}, largest error {#}, energy down by {#} of the start.":
  "RK4: error {#}, error máximo {#}, la energía baja {#} de la inicial.",
"Symplectic Euler: error {#}, largest error {#}, energy down by {#} of the start.":
  "Euler simpléctico: error {#}, error máximo {#}, la energía baja {#} de la inicial.",
"Verlet: error {#}, largest error {#}, energy down by {#} of the start.":
  "Verlet: error {#}, error máximo {#}, la energía baja {#} de la inicial.",
"→ off scale":
  "→ fuera de escala",
"A pendulum let go from {#}°.":
  "Un péndulo soltado desde {#}°.",
"went over the top":
  "pasó por arriba",
"failed at {#} s":
  "falló a los {#} s",
"failed":
  "falló",
"Euler failed at t = {#} s: its energy was off by a factor of {#}, so it was stopped.":
  "Euler falló en t = {#} s: su energía se desvió por un factor de {#}, así que se detuvo.",
"Euler failed at {#} s.":
  "Euler falló a los {#} s.",
"Largest error in the first period against h: hidden (Blind)":
  "Error máximo en el primer periodo contra h: oculto (A ciegas)",
"Hidden: record your own points, then untick Blind.":
  "Oculto: registra tus propios puntos y luego desmarca A ciegas.",
"The plot of error against time step is hidden.":
  "La gráfica del error contra el paso de tiempo está oculta.",
"Euler: error {#}, largest error {#}, energy error {#}.":
  "Euler: error {#}, error máximo {#}, error de energía {#}.",
"Symplectic Euler: error {#}, largest error {#}, energy error {#}.":
  "Euler simpléctico: error {#}, error máximo {#}, error de energía {#}.",
"Verlet: error {#}, largest error {#}, energy error {#}.":
  "Verlet: error {#}, error máximo {#}, error de energía {#}.",
"RK4: error {#}, largest error {#}, energy error {#}.":
  "RK4: error {#}, error máximo {#}, error de energía {#}.",
"RK4: error {#}×{#}⁻⁴, largest error {#}×{#}⁻⁴, energy error −{#}×{#}⁻⁴.":
  "RK4: error {#}×{#}⁻⁴, error máximo {#}×{#}⁻⁴, error de energía −{#}×{#}⁻⁴.",
"Euler: error {#}, largest error {#}, energy down by {#} of the start.":
  "Euler: error {#}, error máximo {#}, la energía baja {#} de la inicial."
});
