/* ws/precipitator in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/precipitator', {
"Particle diameter (μm)":
  "Diámetro de la partícula (μm)",
"Particles":
  "Partículas",
"Field (kV/cm)":
  "Campo (kV/cm)",
"Gas speed u (m/s)":
  "Rapidez del gas u (m/s)",
"Plate length L (m)":
  "Longitud de las placas L (m)",
"Drift speed w (cm/s)":
  "Rapidez de deriva w (cm/s)",
"Predicted efficiency (%)":
  "Eficiencia predicha (%)",
"Caught":
  "Capturadas",
"Through":
  "Pasan",
"Measured efficiency (%)":
  "Eficiencia medida (%)",
"Smoke Precipitator | VirtualDemos":
  "Precipitador de humo | VirtualDemos",
"Smoke Precipitator":
  "Precipitador de humo",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#}. The particle charge and drift speed go beyond the textbook; see W. C. Hinds, <em>Aerosol Technology</em>, chapter {#}. Access OpenStax for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#}. La carga de las partículas y la rapidez de deriva van más allá del libro; consulta W. C. Hinds, <em>Aerosol Technology</em>, capítulo {#}. Acceso gratuito a OpenStax en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Machines in the demo:</strong> Van de Graaff generator; Ink jet printer; Smoke precipitator. This worksheet uses the precipitator.":
  "<strong>Máquinas en la demo:</strong> Generador de Van de Graaff; Impresora de inyección de tinta; Precipitador de humo. Esta hoja de trabajo usa el precipitador.",
"<strong>Using the demo.</strong> Smoky gas flows along a channel between two grounded plates, past a high voltage wire midway between them, {#} m from each plate. The Precipitator section sets the particle diameter ({#} to {#} μm), the particles (conducting soot or an insulating dust with \\(\\kappa = 4\\)), the field, the gas speed and the plate length. Counters show how many particles are caught and how many get through, and the measured efficiency; Reset the counts starts them again (changing a setting also does). Blind hides the particle charge, the drift speed and the predicted efficiency; the counters stay.":
  "<strong>Uso de la demo.</strong> Un gas con humo fluye por un canal entre dos placas conectadas a tierra, pasando junto a un alambre de alto voltaje a la mitad entre ellas, a {#} m de cada placa. La sección Precipitador fija el diámetro de las partículas (de {#} a {#} μm), las partículas (hollín conductor o un polvo aislante con \\(\\kappa = 4\\)), el campo, la rapidez del gas y la longitud de las placas. Los contadores muestran cuántas partículas se capturan y cuántas pasan, y la eficiencia medida; Reiniciar las cuentas las vuelve a empezar (cambiar un ajuste también lo hace). A ciegas oculta la carga de las partículas, la rapidez de deriva y la eficiencia predicha; los contadores se quedan.",
"<strong>What the demo models.</strong> Each particle carries the saturation charge of field charging, \\(q = 4\\pi\\varepsilon_0 a^2 E\\cdot 3\\kappa/(\\kappa + 2)\\) (Pauthenier, with \\(a\\) the radius; {#} for a conductor), with the charging and collecting fields equal. Diffusion charging is left out, so particles below about {#} μm are given too little charge. The drift speed is \\(w = qEC_c/(3\\pi\\eta d)\\): Stokes drag with the Cunningham slip correction \\(C_c\\) (air at {#} °C, \\(\\eta = 1.81\\times10^{-5}\\) Pa·s, mean free path {#} μm). The efficiency follows the Deutsch equation, which assumes turbulence keeps the dust spread evenly across the channel; the counters catch each particle at random with that probability, about {#} particles a second. Gravity is left out. Simulated data.":
  "<strong>Qué modela la demo.</strong> Cada partícula lleva la carga de saturación de la carga por campo, \\(q = 4\\pi\\varepsilon_0 a^2 E\\cdot 3\\kappa/(\\kappa + 2)\\) (Pauthenier, con \\(a\\) el radio; {#} para un conductor), con los campos de carga y de colección iguales. Se omite la carga por difusión, así que las partículas de menos de unos {#} μm reciben muy poca carga. La rapidez de deriva es \\(w = qEC_c/(3\\pi\\eta d)\\): arrastre de Stokes con la corrección de deslizamiento de Cunningham \\(C_c\\) (aire a {#} °C, \\(\\eta = 1.81\\times10^{-5}\\) Pa·s, camino libre medio {#} μm). La eficiencia sigue la ecuación de Deutsch, que supone que la turbulencia mantiene el polvo repartido uniformemente a lo ancho del canal; los contadores capturan cada partícula al azar con esa probabilidad, unas {#} partículas por segundo. Se omite la gravedad. Datos simulados.",
"Measure how well an electrostatic precipitator cleans smoky gas, and test how its efficiency depends on the particle size, the plate length and the gas speed.":
  "Mide qué tan bien limpia un precipitador electrostático un gas con humo, y pon a prueba cómo depende su eficiencia del tamaño de las partículas, de la longitud de las placas y de la rapidez del gas.",
"A high voltage wire ionizes the gas around it, and the ions charge the particles. In a field \\(E\\) a particle of diameter \\(d\\) reaches a charge proportional to \\(d^2E\\). The field pushes it toward a plate with force \\(qE\\), against the drag of the air, \\(3\\pi\\eta d\\,w/C_c\\), so it drifts sideways at the steady speed":
  "Un alambre de alto voltaje ioniza el gas a su alrededor, y los iones cargan las partículas. En un campo \\(E\\), una partícula de diámetro \\(d\\) alcanza una carga proporcional a \\(d^2E\\). El campo la empuja hacia una placa con fuerza \\(qE\\), contra el arrastre del aire, \\(3\\pi\\eta d\\,w/C_c\\), así que deriva lateralmente con la rapidez constante",
"\\[w = \\frac{qEC_c}{3\\pi\\eta d},\\]":
  "\\[w = \\frac{qEC_c}{3\\pi\\eta d},\\]",
"which grows with the particle’s size (as \\(d\\) for large particles). If turbulence keeps the particles spread evenly across a channel whose plates are \\(s\\) from the wire, a particle in the channel for a time \\(L/u\\) is caught with probability (the Deutsch equation)":
  "que crece con el tamaño de la partícula (como \\(d\\) para partículas grandes). Si la turbulencia mantiene las partículas repartidas uniformemente a lo ancho de un canal cuyas placas están a \\(s\\) del alambre, una partícula que está en el canal durante un tiempo \\(L/u\\) se captura con probabilidad (la ecuación de Deutsch)",
"\\[\\eta = 1 - \\exp\\left(-\\frac{wL}{us}\\right).\\]":
  "\\[\\eta = 1 - \\exp\\left(-\\frac{wL}{us}\\right).\\]",
"So \\(-\\ln(1 - \\eta)\\) is proportional to the plate length \\(L\\) and to \\(1/u\\).":
  "Así que \\(-\\ln(1 - \\eta)\\) es proporcional a la longitud de las placas \\(L\\) y a \\(1/u\\).",
"A precipitator catches {#} % of the particles. What fraction gets through if the plates are made twice as long? Three times as long?":
  "Un precipitador captura el {#} % de las partículas. ¿Qué fracción pasa si las placas se hacen el doble de largas? ¿Tres veces más largas?",
"Why does the Deutsch equation predict that the efficiency never quite reaches {#} %?":
  "¿Por qué la ecuación de Deutsch predice que la eficiencia nunca llega del todo al {#} %?",
"Find the drift speed \\(w\\) that gives {#} % with \\(L = 5.0\\) m, \\(u = 1.0\\) m/s and \\(s = 0.125\\) m.":
  "Encuentra la rapidez de deriva \\(w\\) que da {#} % con \\(L = 5.0\\) m, \\(u = 1.0\\) m/s y \\(s = 0.125\\) m.",
"Why should a precipitator catch large particles more easily than small ones?":
  "¿Por qué un precipitador debería capturar las partículas grandes más fácilmente que las pequeñas?",
"Industrial precipitators run at tens of kilovolts and are interlocked; never open one in service. The collected dust may be toxic.":
  "Los precipitadores industriales operan a decenas de kilovolts y tienen enclavamientos; nunca abras uno en servicio. El polvo recolectado puede ser tóxico.",
"<strong>Part {#}: particle size.</strong> With conducting particles, a field of {#} kV/cm, a gas speed of {#} m/s and {#} m plates, measure the efficiency for particles of {#}, {#}, {#}, {#}, {#} and {#} μm. Count at least {#} particles for each.":
  "<strong>Parte {#}: tamaño de las partículas.</strong> Con partículas conductoras, un campo de {#} kV/cm, una rapidez del gas de {#} m/s y placas de {#} m, mide la eficiencia para partículas de {#}, {#}, {#}, {#}, {#} y {#} μm. Cuenta al menos {#} partículas para cada una.",
"<strong>Part {#}: plate length.</strong> With {#} μm particles, measure the efficiency for plate lengths of {#}, {#}, {#}, {#} and {#} m, counting at least {#} particles each.":
  "<strong>Parte {#}: longitud de las placas.</strong> Con partículas de {#} μm, mide la eficiencia para longitudes de placa de {#}, {#}, {#}, {#} y {#} m, contando al menos {#} partículas en cada una.",
"<strong>Part {#}: gas speed and material.</strong> With {#} μm particles and {#} m plates, measure the efficiency at gas speeds of {#}, {#}, {#} and {#} m/s. Then repeat {#} m/s with insulating particles.":
  "<strong>Parte {#}: rapidez del gas y material.</strong> Con partículas de {#} μm y placas de {#} m, mide la eficiencia a rapideces del gas de {#}, {#}, {#} y {#} m/s. Luego repite {#} m/s con partículas aislantes.",
"<strong>Using the virtual apparatus.</strong> Wait for at least {#} particles to be counted before recording; the count starts again when you change a setting. Keep Blind off, so each reading records the predicted efficiency and the drift speed. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> Espera a que se cuenten al menos {#} partículas antes de registrar; la cuenta vuelve a empezar cuando cambias un ajuste. Mantén A ciegas desactivado, para que cada lectura registre la eficiencia predicha y la rapidez de deriva. Envía cada parte a la hoja antes de borrar, para que cada parte tenga su propia copia de la tabla de datos.",
"<span>B</span>Particle diameter (μm)":
  "<span>B</span>Diámetro de la partícula (μm)",
"<span>C</span>Particles":
  "<span>C</span>Partículas",
"<span>D</span>Field (kV/cm)":
  "<span>D</span>Campo (kV/cm)",
"<span>E</span>Gas speed \\(u\\) (m/s)":
  "<span>E</span>Rapidez del gas \\(u\\) (m/s)",
"<span>F</span>Plate length \\(L\\) (m)":
  "<span>F</span>Longitud de las placas \\(L\\) (m)",
"<span>G</span>Drift speed \\(w\\) (cm/s)":
  "<span>G</span>Rapidez de deriva \\(w\\) (cm/s)",
"<span>H</span>Predicted efficiency (%)":
  "<span>H</span>Eficiencia predicha (%)",
"<span>I</span>Caught":
  "<span>I</span>Capturadas",
"<span>J</span>Through":
  "<span>J</span>Pasan",
"<span>K</span>Measured efficiency (%)":
  "<span>K</span>Eficiencia medida (%)",
"Particle diameter (μm), row {#}":
  "Diámetro de la partícula (μm), fila {#}",
"Particles, row {#}":
  "Partículas, fila {#}",
"Field (kV/cm), row {#}":
  "Campo (kV/cm), fila {#}",
"Gas speed u (m/s), row {#}":
  "Rapidez del gas u (m/s), fila {#}",
"Plate length L (m), row {#}":
  "Longitud de las placas L (m), fila {#}",
"Drift speed w (cm/s), row {#}":
  "Rapidez de deriva w (cm/s), fila {#}",
"Predicted efficiency (%), row {#}":
  "Eficiencia predicha (%), fila {#}",
"Caught, row {#}":
  "Capturadas, fila {#}",
"Through, row {#}":
  "Pasan, fila {#}",
"Measured efficiency (%), row {#}":
  "Eficiencia medida (%), fila {#}",
"For Part {#}, compare the measured and predicted efficiencies. How does the efficiency change with particle size? Which sizes are hardest to catch, and why might real precipitators do better than the model for the smallest?":
  "Para la Parte {#}, compara las eficiencias medidas y predichas. ¿Cómo cambia la eficiencia con el tamaño de las partículas? ¿Qué tamaños son los más difíciles de capturar, y por qué los precipitadores reales podrían funcionar mejor que el modelo para los más pequeños?",
"For Part {#}, work out \\(-\\ln(1 - \\eta)\\) from each measured efficiency and graph it against \\(L\\). Is it a straight line through the origin? From the slope, find the drift speed and compare it with the drift speed the demo recorded.":
  "Para la Parte {#}, calcula \\(-\\ln(1 - \\eta)\\) a partir de cada eficiencia medida y grafícalo en función de \\(L\\). ¿Es una recta que pasa por el origen? A partir de la pendiente, encuentra la rapidez de deriva y compárala con la rapidez de deriva que registró la demo.",
"For Part {#}, show how \\(-\\ln(1 - \\eta)\\) depends on the gas speed. Why does a faster gas leave more smoke in the air? How much does the insulating dust’s smaller charge matter?":
  "Para la Parte {#}, muestra cómo depende \\(-\\ln(1 - \\eta)\\) de la rapidez del gas. ¿Por qué un gas más rápido deja más humo en el aire? ¿Cuánto importa la carga menor del polvo aislante?",
"Find the uncertainty of each measured efficiency from the counts, \\(\\sqrt{\\eta(1-\\eta)/N}\\) with \\(N\\) the number counted. Do the measured and predicted values agree within it?":
  "Encuentra la incertidumbre de cada eficiencia medida a partir de los conteos, \\(\\sqrt{\\eta(1-\\eta)/N}\\) con \\(N\\) el número contado. ¿Concuerdan los valores medidos y predichos dentro de ella?",
"Each particle is caught or not at random, so a measured efficiency from \\(N\\) particles has a standard uncertainty of \\(\\sqrt{\\eta(1-\\eta)/N}\\), about {#} % for \\(N = 500\\) near {#} %. The model’s approximations matter more for real precipitators: diffusion charging, which helps the smallest particles; dust knocked back off the plates; uneven gas flow; and the field near the wire being much stronger than near the plates.":
  "Cada partícula se captura o no al azar, así que una eficiencia medida a partir de \\(N\\) partículas tiene una incertidumbre estándar de \\(\\sqrt{\\eta(1-\\eta)/N}\\), alrededor de {#} % para \\(N = 500\\) cerca de {#} %. Las aproximaciones del modelo importan más en los precipitadores reales: la carga por difusión, que ayuda a las partículas más pequeñas; el polvo que se desprende de las placas; el flujo desigual del gas; y que el campo cerca del alambre es mucho más intenso que cerca de las placas.",
"Why does a precipitator need both a strong field near the wire (to make ions) and a field across the whole channel?":
  "¿Por qué un precipitador necesita tanto un campo intenso cerca del alambre (para producir iones) como un campo a lo ancho de todo el canal?",
"A power station needs to catch {#} % of its fly ash. Using the Deutsch equation, how much longer must the plates be than for {#} %?":
  "Una central eléctrica necesita capturar el {#} % de sus cenizas volantes. Usando la ecuación de Deutsch, ¿cuánto más largas deben ser las placas que para el {#} %?",
"Why are precipitators less effective for very fine smoke, which is also the most harmful to breathe?":
  "¿Por qué los precipitadores son menos eficaces con el humo muy fino, que es también el más dañino para respirar?",
"Prelab answers, a Data table copy for each part, the graph and fit for Part {#}, the measured efficiencies with uncertainties, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, una copia de la tabla de datos para cada parte, la gráfica y el ajuste de la Parte {#}, las eficiencias medidas con incertidumbres y las respuestas a las preguntas. Identifica los datos simulados.",
"Collection efficiency, the fraction of particles caught":
  "Eficiencia de captura, la fracción de partículas capturadas",
"Cunningham slip correction":
  "Corrección de deslizamiento de Cunningham",
"Plate length":
  "Longitud de las placas",
"Number of particles counted":
  "Número de partículas contadas",
"Radius of a particle":
  "Radio de una partícula",
"Diameter of a particle":
  "Diámetro de una partícula",
"Viscosity of the gas":
  "Viscosidad del gas",
"Dielectric constant of the dust":
  "Constante dieléctrica del polvo",
"Charge on a particle":
  "Carga de una partícula",
"Distance from the wire to a plate":
  "Distancia del alambre a una placa",
"Gas speed":
  "Rapidez del gas",
"Drift speed toward the plate":
  "Rapidez de deriva hacia la placa",
"Electrostatics at Work":
  "La electrostática en acción"
});
