/* notes/ultrasound in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'notes/ultrasound', {
"Ultrasound: Echoes and Blood Flow: teaching notes":
  "Ultrasonido: ecos y flujo sanguíneo: notas para el docente",
"Ultrasound: Echoes and Blood Flow":
  "Ultrasonido: ecos y flujo sanguíneo",
"Acoustics module (OpenStax University Physics Vol {#}, §{#}, §{#}; College Physics §{#})":
  "Módulo de Acústica (OpenStax University Physics Vol {#}, §{#}, §{#}; College Physics §{#})",
"Ultrasound imaging is echo timing: a pulse goes down and back, so a boundary at depth d sends an echo after t = 2d/c. Scanners assume c = {#} m/s in soft tissue.":
  "La imagen por ultrasonido es medir el tiempo de los ecos: un pulso baja y regresa, así que una frontera a profundidad d envía un eco después de t = 2d/c. Los escáneres suponen c = {#} m/s en tejido blando.",
"How much comes back is set by the change in acoustic impedance Z = ρc: the pressure reflection is r = (Z₂ − Z₁)/(Z₂ + Z₁), the intensity reflection r². Soft tissue boundaries send back about {#}%, bone about {#}%, air nearly everything (hence the gel).":
  "Cuánto regresa lo fija el cambio de impedancia acústica Z = ρc: la reflexión de presión es r = (Z₂ − Z₁)/(Z₂ + Z₁), y la reflexión de intensidad r². Las fronteras entre tejidos blandos regresan cerca del {#}%, el hueso cerca del {#}%, el aire casi todo (de ahí el gel).",
"Going from high to low impedance turns the echo upside down (negative r).":
  "Pasar de impedancia alta a baja invierte el eco (r negativa).",
"A shorter pulse (higher frequency) separates boundaries closer together.":
  "Un pulso más corto (frecuencia más alta) separa fronteras más cercanas entre sí.",
"Blood moving at speed v, at angle θ to the beam, sends back a frequency shifted by Δf ≈ 2f₀v cos θ / c: the Doppler effect twice, once as a moving observer and once as a moving source.":
  "La sangre que se mueve con rapidez v, a un ángulo θ respecto al haz, regresa una frecuencia corrida en Δf ≈ 2f₀v cos θ / c: el efecto Doppler dos veces, una como observador en movimiento y otra como fuente en movimiento.",
"Students need v = fλ, the speed of sound in different media, and the Doppler formulas for a moving observer and a moving source (§{#}, and the <strong>Doppler Effect</strong> demo). <strong>Blind</strong> hides the true depths, the echo list and the blood speed; <strong>Find the hidden cyst</strong> and <strong>Doppler: mystery flow</strong> hide them for good (choosing another shows the last value in the status line). The scanner's depth for the cursor can be switched on under Lab.":
  "Los estudiantes necesitan v = fλ, la rapidez del sonido en distintos medios y las fórmulas Doppler para un observador en movimiento y una fuente en movimiento (§{#}, y la demo <strong>Efecto Doppler</strong>). <strong>A ciegas</strong> oculta las profundidades reales, la lista de ecos y la rapidez de la sangre; <strong>Encontrar el quiste oculto</strong> y <strong>Doppler: flujo misterioso</strong> los ocultan de forma permanente (elegir otra configuración muestra el último valor en la línea de estado). La profundidad del escáner para el cursor se puede activar en Laboratorio.",
"<strong>Fat, muscle and bone.</strong> Echoes at {#}, {#} and {#} μs. The bone echo is by far the largest (r = {#}); the echo from the far side of the bone is upside down (zoom in). Depths from {#} m/s: {#}, {#} and {#} cm, against true {#}, {#} and {#} cm: the scanner misplaces what lies under bone, where sound is much faster.":
  "<strong>Grasa, músculo y hueso.</strong> Ecos a {#}, {#} y {#} μs. El eco del hueso es por mucho el mayor (r = {#}); el eco del lado lejano del hueso está invertido (acerca la vista). Profundidades con {#} m/s: {#}, {#} y {#} cm, contra las reales {#}, {#} y {#} cm: el escáner ubica mal lo que está debajo del hueso, donde el sonido es mucho más rápido.",
"<strong>Speed of sound in water.</strong> Record the echo time at six water depths; t against depth has slope {#}/c = {#} μs/mm, so c = {#} m/s.":
  "<strong>Rapidez del sonido en el agua.</strong> Registra el tiempo del eco a seis profundidades de agua; t en función de la profundidad tiene pendiente {#}/c = {#} μs/mm, así que c = {#} m/s.",
"<strong>Find the hidden cyst.</strong> Two weak echoes (r = ∓{#}) mark its top and bottom.":
  "<strong>Encontrar el quiste oculto.</strong> Dos ecos débiles (r = ∓{#}) marcan su parte superior y su parte inferior.",
"<strong>Resolve a thin layer.</strong> {#} mm of fat: at {#} MHz one blurred echo, at {#} MHz two.":
  "<strong>Resolver una capa delgada.</strong> {#} mm de grasa: a {#} MHz un eco borroso, a {#} MHz dos.",
"<strong>Doppler: blood flow.</strong> {#} MHz, θ = {#}°, v = {#} m/s: shift {#} Hz. Change θ and the shift follows cos θ. Smooth flow spreads the spectrum from {#} to the shift of the fastest blood. <strong>Listen</strong> plays the shift, as a scanner does.":
  "<strong>Doppler: flujo sanguíneo.</strong> {#} MHz, θ = {#}°, v = {#} m/s: corrimiento de {#} Hz. Cambia θ y el corrimiento sigue a cos θ. El flujo suave reparte el espectro desde {#} hasta el corrimiento de la sangre más rápida. <strong>Escuchar</strong> reproduce el corrimiento, como lo hace un escáner.",
"<strong>Q1.</strong> In the Fat, muscle and bone setup the echoes come at {#}, {#} and {#} μs. What depths does a scanner using {#} m/s give? The true depths are {#}, {#} and {#} cm: explain the differences.":
  "<strong>P1.</strong> En la configuración Grasa, músculo y hueso los ecos llegan a {#}, {#} y {#} μs. ¿Qué profundidades da un escáner que usa {#} m/s? Las profundidades reales son {#}, {#} y {#} cm: explica las diferencias.",
"<strong>Q2.</strong> Find the intensity reflection at a fat to muscle boundary and at a muscle to bone boundary (Z: fat {#}, muscle {#}, bone {#}, all × {#}⁶ kg/(m²·s)). Why must gel be used between the transducer and the skin (air: Z = {#} kg/(m²·s))?":
  "<strong>P2.</strong> Encuentra la reflexión de intensidad en una frontera de grasa a músculo y en una de músculo a hueso (Z: grasa {#}, músculo {#}, hueso {#}, todas × {#}⁶ kg/(m²·s)). ¿Por qué se debe usar gel entre el transductor y la piel (aire: Z = {#} kg/(m²·s))?",
"<strong>Q3.</strong> In the water tank, the echo from the air pocket under {#} cm of water comes at {#} μs. Find the speed of sound in water. Why is the echo so strong, and why is it upside down?":
  "<strong>P3.</strong> En el tanque de agua, el eco de la bolsa de aire bajo {#} cm de agua llega a {#} μs. Encuentra la rapidez del sonido en el agua. ¿Por qué el eco es tan intenso, y por qué está invertido?",
"<strong>Q4.</strong> The thin layer is {#} mm of fat (c = {#} m/s) in muscle. How far apart in time are its two echoes? Each pulse is three cycles long at half height. At which of {#}, {#}, {#} and {#} MHz are the two echoes clearly separate?":
  "<strong>P4.</strong> La capa delgada es de {#} mm de grasa (c = {#} m/s) en músculo. ¿Qué tan separados en el tiempo están sus dos ecos? Cada pulso mide tres ciclos a media altura. ¿A cuáles de {#}, {#}, {#} y {#} MHz se separan claramente los dos ecos?",
"<strong>Q5.</strong> At {#} MHz, with the beam at {#}° to the flow, the spectrum peaks at {#} Hz. Find the blood speed using c = {#} m/s (blood), and again using the scanner's {#} m/s. What error does the scanner's value cause?":
  "<strong>P5.</strong> A {#} MHz, con el haz a {#}° del flujo, el espectro tiene su pico en {#} Hz. Encuentra la rapidez de la sangre usando c = {#} m/s (sangre), y otra vez usando los {#} m/s del escáner. ¿Qué error causa el valor del escáner?",
"<strong>Q6.</strong> An error of {#}° in θ is easy to make. What error in v does it cause at θ = {#}° and at θ = {#}°? Why do sonographers keep θ below about {#}°?":
  "<strong>P6.</strong> Un error de {#}° en θ es fácil de cometer. ¿Qué error en v causa a θ = {#}° y a θ = {#}°? ¿Por qué los ecografistas mantienen θ por debajo de unos {#}°?",
"<strong>Q7.</strong> In smooth (laminar) flow the spectrum is flat from {#} to its top edge. What does the top edge give, and what is the average speed of the blood?":
  "<strong>P7.</strong> En flujo suave (laminar) el espectro es plano desde {#} hasta su borde superior. ¿Qué da el borde superior, y cuál es la rapidez promedio de la sangre?",
"<strong>\"The echo time is the depth divided by the speed.\"</strong> The pulse goes down and back: d = ct/{#}.":
  "<strong>\"El tiempo del eco es la profundidad dividida entre la rapidez.\"</strong> El pulso baja y regresa: d = ct/{#}.",
"<strong>\"Stronger echoes come from denser tissue.\"</strong> They come from a bigger change in Z = ρc at the boundary.":
  "<strong>\"Los ecos más intensos vienen del tejido más denso.\"</strong> Vienen de un cambio mayor de Z = ρc en la frontera.",
"<strong>\"The scanner measures depth directly.\"</strong> It measures time and assumes {#} m/s; where the real speed differs, depths are off.":
  "<strong>\"El escáner mide la profundidad directamente.\"</strong> Mide el tiempo y supone {#} m/s; donde la rapidez real es distinta, las profundidades están equivocadas.",
"<strong>\"The Doppler shift gives the blood speed directly.\"</strong> It gives v cos θ; the angle must be known.":
  "<strong>\"El corrimiento Doppler da la rapidez de la sangre directamente.\"</strong> Da v cos θ; hay que conocer el ángulo.",
"Media: speeds and impedances from OpenStax College Physics §{#} (table of the ultrasound properties of various media); bone varies from {#} to {#} × {#}⁶ kg/(m²·s), and {#} × {#}⁶ is chosen. A fluid filled cyst is taken as water. {#} m/s is the book's soft tissue value.":
  "Medios: rapideces e impedancias de OpenStax College Physics §{#} (tabla de las propiedades ultrasónicas de varios medios); el hueso varía de {#} a {#} × {#}⁶ kg/(m²·s), y se elige {#} × {#}⁶. Un quiste lleno de líquido se toma como agua. {#} m/s es el valor del libro para el tejido blando.",
"Pulses are plane waves with a Gaussian envelope, three cycles at half height (chosen). One echo per boundary, at t = Σ 2dᵢ/cᵢ, with amplitude r times ({#} − rᵢ²) for every boundary above (down and back). The screen shows the coherent sum of the echoes: its envelope at {#} to {#} μs, the radio frequency trace when zoomed.":
  "Los pulsos son ondas planas con envolvente gaussiana, tres ciclos a media altura (elegido). Un eco por frontera, en t = Σ 2dᵢ/cᵢ, con amplitud r por ({#} − rᵢ²) por cada frontera de arriba (de bajada y de regreso). La pantalla muestra la suma coherente de los ecos: su envolvente de {#} a {#} μs, la traza de radiofrecuencia al acercar la vista.",
"Left out: multiple echoes, absorption in tissue (real scanners raise the gain with depth), beam spreading and speckle. Gel couples with no echo.":
  "Se omiten: ecos múltiples, absorción en el tejido (los escáneres reales suben la ganancia con la profundidad), ensanchamiento del haz y moteado. El gel acopla sin eco.",
"Doppler: f = f₀(c + u)/(c − u), u = v cos θ, c = {#} m/s in blood (exact for the two step process). The spectrum is taken over a {#} ms window (chosen), so each speed gives a sinc² line about {#} Hz wide. Laminar flow v(r) = v_max({#} − r²/R²) gives equal amounts of blood at every speed from {#} to v_max (checked in the tests). Simulated data with no noise.":
  "Doppler: f = f₀(c + u)/(c − u), u = v cos θ, c = {#} m/s en la sangre (exacto para el proceso de dos pasos). El espectro se toma en una ventana de {#} ms (elegida), así que cada rapidez da una línea sinc² de unos {#} Hz de ancho. El flujo laminar v(r) = v_max({#} − r²/R²) da cantidades iguales de sangre a cada rapidez de {#} a v_max (comprobado en las pruebas). Datos simulados sin ruido."
});
