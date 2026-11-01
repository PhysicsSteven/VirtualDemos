/* notes/terminal-velocity in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'notes/terminal-velocity', {
"Terminal Velocity: teaching notes":
  "Velocidad terminal: notas para el docente",
"Terminal Velocity":
  "Velocidad terminal",
"Intro mechanics (drag)":
  "Mecánica introductoria (arrastre)",
"Drag grows with speed, so a falling body speeds up less and less until the drag equals its weight. From then on the net force is zero and the speed stays at the terminal speed v_T = √(2mg/(ρCA)).":
  "El arrastre crece con la rapidez, así que un cuerpo que cae acelera cada vez menos hasta que el arrastre iguala su peso. A partir de entonces la fuerza neta es cero y la rapidez se queda en la rapidez terminal v_T = √(2mg/(ρCA)).",
"The terminal speed depends on the weight and on the drag area CA: a heavier body, or one presenting less area, falls faster. The skydiver's body position and the parachute work by changing CA.":
  "La rapidez terminal depende del peso y del área de arrastre CA: un cuerpo más pesado, o uno que presenta menos área, cae más rápido. La posición del cuerpo del paracaidista y el paracaídas funcionan cambiando CA.",
"The terminal speed is not one fixed number: it depends on the air density, so it changes on the way down from a high jump.":
  "La rapidez terminal no es un número fijo: depende de la densidad del aire, así que cambia durante la bajada en un salto desde gran altura.",
"Students should know Newton's second law and the drag force D = ½ρCAv² (§{#}). The demo opens on the textbook's Example {#}: an {#} kg skydiver spread eagle (C = {#}, A = {#} m²) jumps from {#} m and falls in 3D, with the weight and drag arrows to scale with each other and streaks showing the air moving past in {#} s. A speed bar, the graph and the readouts show v approaching v_T. Spread eagle and Head first switch the body position during the fall ({#} s to change), and Pull opens a round canopy (the parachute also opens by itself at the pull altitude). Other setups: Parachute (pulled at {#} m), Thin air from {#} km (the standard atmosphere), and one or four nested coffee filters dropped {#} m onto a motion detector. Step stops on whole seconds ({#} s for the filters) for readings; Blind hides v_T, the forces and the drag area.":
  "Los estudiantes deben conocer la segunda ley de Newton y la fuerza de arrastre D = ½ρCAv² (§{#}). La demo se abre con el Ejemplo {#} del libro: un paracaidista de {#} kg con los brazos extendidos (C = {#}, A = {#} m²) salta desde {#} m y cae en 3D, con las flechas del peso y del arrastre a escala entre sí y estelas que muestran el aire que pasa en {#} s. Una barra de rapidez, la gráfica y las lecturas muestran cómo v se acerca a v_T. Brazos extendidos y De cabeza cambian la posición del cuerpo durante la caída ({#} s para cambiar), y Abrir abre un paracaídas redondo (el paracaídas también se abre solo a la altitud de apertura). Otras configuraciones: Paracaídas (abierto a {#} m), Aire enrarecido desde {#} km (la atmósfera estándar), y uno o cuatro filtros de café encimados que caen {#} m sobre un detector de movimiento. Paso se detiene en segundos enteros ({#} s para los filtros) para tomar lecturas; A ciegas oculta v_T, las fuerzas y el área de arrastre.",
"<strong>Jump.</strong> Ask Q1 before pressing Jump, then let it run: the drag arrow grows until it matches the weight, and the curve flattens at {#} m/s.":
  "<strong>Salto.</strong> Haz la P1 antes de pulsar Saltar, luego déjala correr: la flecha del arrastre crece hasta igualar el peso, y la curva se aplana en {#} m/s.",
"<strong>How fast does it get there?</strong> Pause near t = {#} s (v_T/g) and ask Q2.":
  "<strong>¿Qué tan rápido llega?</strong> Pausa cerca de t = {#} s (v_T/g) y haz la P2.",
"<strong>Head first.</strong> Switch to Head first on the way down: the speed climbs again, to {#} m/s for the textbook's {#} kg diver. Ask Q3. Switch back and watch it fall back to {#} m/s.":
  "<strong>De cabeza.</strong> Cambia a De cabeza durante la bajada: la rapidez sube de nuevo, a {#} m/s para el paracaidista de {#} kg del libro. Haz la P3. Regresa y observa cómo baja de nuevo a {#} m/s.",
"<strong>Parachute.</strong> Run the Parachute setup at ×{#}. Ask Q4 while it opens; the largest deceleration is shown when Blind is off.":
  "<strong>Paracaídas.</strong> Ejecuta la configuración Paracaídas a ×{#}. Haz la P4 mientras se abre; la mayor desaceleración se muestra cuando A ciegas está desactivado.",
"<strong>Coffee filters.</strong> Drop one filter, then four (Q5). The graph keeps the earlier falls in gray for comparison.":
  "<strong>Filtros de café.</strong> Deja caer un filtro, luego cuatro (P5). La gráfica conserva las caídas anteriores en gris para comparar.",
"<strong>Thin air.</strong> Run Thin air, from {#} km, and ask Q6 when the speed starts to fall.":
  "<strong>Aire enrarecido.</strong> Ejecuta Aire enrarecido, desde {#} km, y haz la P6 cuando la rapidez empiece a bajar.",
"<strong>Q1.</strong> Find the terminal speed of an {#} kg skydiver spread eagle, with C = {#}, A = {#} m² and ρ = {#} kg/m³. Why does the speed stop growing?":
  "<strong>P1.</strong> Encuentra la rapidez terminal de un paracaidista de {#} kg con los brazos extendidos, con C = {#}, A = {#} m² y ρ = {#} kg/m³. ¿Por qué deja de crecer la rapidez?",
"<strong>Q2.</strong> From rest in uniform air, v = v_T tanh(gt/v_T). What fraction of v_T has the skydiver of Q1 reached at t = v_T/g, and when is the speed within {#}% of v_T?":
  "<strong>P2.</strong> Desde el reposo en aire uniforme, v = v_T tanh(gt/v_T). ¿Qué fracción de v_T ha alcanzado el paracaidista de la P1 en t = v_T/g, y cuándo está la rapidez a menos de {#}% de v_T?",
"<strong>Q3.</strong> The textbook's {#} kg skydiver head first has C = {#} and A = {#} m². Find v_T, and the ratio to the spread eagle value of Q1.":
  "<strong>P3.</strong> El paracaidista de {#} kg del libro, de cabeza, tiene C = {#} y A = {#} m². Encuentra v_T, y el cociente con el valor con brazos extendidos de la P1.",
"<strong>Q4.</strong> Under a canopy with CA = {#} m² (plus {#} m² for the body), what is the {#} kg skydiver's terminal speed? Landing at that speed is like jumping off a wall of what height?":
  "<strong>P4.</strong> Bajo un paracaídas con CA = {#} m² (más {#} m² del cuerpo), ¿cuál es la rapidez terminal del paracaidista de {#} kg? ¿Aterrizar con esa rapidez equivale a saltar desde un muro de qué altura?",
"<strong>Q5.</strong> One coffee filter of {#} g falls at {#} m/s. How fast do four nested filters fall, and why?":
  "<strong>P5.</strong> Un filtro de café de {#} g cae a {#} m/s. ¿Qué tan rápido caen cuatro filtros encimados, y por qué?",
"<strong>Q6.</strong> Jumping from {#} {#} m in the standard atmosphere (ρ = {#} kg/m³ there, {#} kg/m³ at the ground), the spread eagle skydiver reaches a top speed and then slows down. Explain why, and estimate the top speed.":
  "<strong>P6.</strong> Saltando desde {#} {#} m en la atmósfera estándar (ρ = {#} kg/m³ ahí, {#} kg/m³ en el suelo), el paracaidista con los brazos extendidos alcanza una rapidez máxima y luego se frena. Explica por qué, y estima la rapidez máxima.",
"<strong>\"At terminal speed there is no force on the body.\"</strong> The weight and the drag are both there; they cancel.":
  "<strong>\"A la rapidez terminal no hay fuerza sobre el cuerpo.\"</strong> El peso y el arrastre están ahí; se cancelan.",
"<strong>\"A heavier body falls faster because gravity pulls it harder.\"</strong> In a vacuum all bodies fall together. With drag, the heavier body has to go faster before the drag can balance its larger weight.":
  "<strong>\"Un cuerpo más pesado cae más rápido porque la gravedad lo jala más fuerte.\"</strong> En el vacío todos los cuerpos caen juntos. Con arrastre, el cuerpo más pesado tiene que ir más rápido antes de que el arrastre pueda equilibrar su peso mayor.",
"<strong>\"The parachute pulls you up.\"</strong> The canopy makes the drag larger than the weight for a few seconds, so the acceleration points up and the body slows down; it never moves up.":
  "<strong>\"El paracaídas te jala hacia arriba.\"</strong> El paracaídas hace que el arrastre sea mayor que el peso durante unos segundos, así que la aceleración apunta hacia arriba y el cuerpo se frena; nunca se mueve hacia arriba.",
"<strong>\"Terminal speed is reached quickly and exactly.\"</strong> The approach is gradual: about {#} s and {#} m to get within {#}% for the spread eagle skydiver, and in thin air it is never one number.":
  "<strong>\"La rapidez terminal se alcanza rápido y exactamente.\"</strong> El acercamiento es gradual: alrededor de {#} s y {#} m para quedar a menos de {#}% en el caso del paracaidista con los brazos extendidos, y en aire enrarecido nunca es un solo número.",
"Down positive, m dv/dt = mg − ½ρ(CA)v|v|, g = {#} m/s²; buoyancy and added mass left out, a straight vertical fall. RK4 with steps of at most {#} ms and v_T/(100g); it matches v_T tanh(gt/v_T) to {#} part in {#}⁹, and landing is found by bisection.":
  "Hacia abajo positivo, m dv/dt = mg − ½ρ(CA)v|v|, g = {#} m/s²; se omiten el empuje y la masa añadida, una caída vertical recta. RK4 con pasos de a lo más {#} ms y v_T/(100g); coincide con v_T tanh(gt/v_T) a {#} parte en {#}⁹, y el aterrizaje se encuentra por bisección.",
"Uniform air ρ = {#} kg/m³ (the textbook's); the thin air option is the International Standard Atmosphere below {#} km (U.S. Standard Atmosphere {#}).":
  "Aire uniforme ρ = {#} kg/m³ (el del libro); la opción de aire enrarecido es la Atmósfera Estándar Internacional por debajo de {#} km (U.S. Standard Atmosphere {#}).",
"Skydiver: C = {#} and A = {#} m² spread eagle, C = {#} and A = {#} m² head first (the textbook's Table {#} and examples); position changes take {#} s at a steady rate of change of CA.":
  "Paracaidista: C = {#} y A = {#} m² con los brazos extendidos, C = {#} y A = {#} m² de cabeza (la Tabla {#} y los ejemplos del libro); los cambios de posición tardan {#} s con una tasa de cambio de CA constante.",
"Canopy: flat circular, {#} m flat diameter, C = {#} on the flat area (Scher and Young, NASA TN D-{#}, {#}), CA = {#} m²; {#} s line stretch, {#} s fill with CA growing in proportion to time (model choices), body upright under it.":
  "Paracaídas: circular plano, {#} m de diámetro plano, C = {#} sobre el área plana (Scher y Young, NASA TN D-{#}, {#}), CA = {#} m²; {#} s de estiramiento de las cuerdas, {#} s de llenado con CA creciendo en proporción al tiempo (elecciones del modelo), cuerpo vertical debajo.",
"Coffee filter: {#} g, {#} cm across, C = {#} (Boyle and Pantaleone, arXiv:{#}, {#}). Nested filters: n times the mass, the same area.":
  "Filtro de café: {#} g, {#} cm de diámetro, C = {#} (Boyle y Pantaleone, arXiv:{#}, {#}). Filtros encimados: n veces la masa, la misma área.",
"Pair with <strong>Projectile Range</strong> (the same drag force on a ball in flight) and the <strong>Falling Ball Viscometer</strong> (Stokes' law, where the drag is proportional to v, §{#}).":
  "Combínala con <strong>Alcance de proyectiles</strong> (la misma fuerza de arrastre sobre una pelota en vuelo) y el <strong>Viscosímetro de bola descendente</strong> (ley de Stokes, donde el arrastre es proporcional a v, §{#}).",
"Homework: Haldane's mouse. A body scaled down by {#} in every length has {#}/{#} of the weight and {#}/{#} of the area. By what factor does its terminal speed change?":
  "Tarea: el ratón de Haldane. Un cuerpo reducido {#} veces en cada longitud tiene {#}/{#} del peso y {#}/{#} del área. ¿En qué factor cambia su rapidez terminal?"
});
