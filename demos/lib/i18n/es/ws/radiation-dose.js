/* ws/radiation-dose in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/radiation-dose', {
"Activity (MBq)":
  "Actividad (MBq)",
"Distance r (m)":
  "Distancia r (m)",
"Shield":
  "Blindaje",
"Thickness x (cm)":
  "Espesor x (cm)",
"Dose rate (µSv/h)":
  "Tasa de dosis (µSv/h)",
"ln(dose rate)":
  "ln(tasa de dosis)",
"Radiation Dose: Distance and Shielding | VirtualDemos":
  "Dosis de radiación: distancia y blindaje | VirtualDemos",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"Radiation Dose: Distance and Shielding":
  "Dosis de radiación: distancia y blindaje",
"<strong>Setups in the demo:</strong> ¹³⁷Cs source; ⁹⁹ᵐTc patient (these two use the Dose view, the subject of this worksheet); Rutherford {#}; Fission of ²³⁵U (the Nuclear Reactions worksheet); Bare ²³⁵U sphere; Generations (the Critical Size worksheet); The Sun’s core; D–T reactor (the Fusion worksheet).":
  "<strong>Configuraciones en la demo:</strong> Fuente de ¹³⁷Cs; Paciente con ⁹⁹ᵐTc (estas dos usan la vista Dosis, el tema de esta hoja de trabajo); Rutherford {#}; Fisión del ²³⁵U (la hoja Reacciones nucleares); Esfera desnuda de ²³⁵U; Generaciones (la hoja Tamaño crítico); El núcleo del Sol; Reactor D–T (la hoja Fusión).",
"The Dose view has a γ ray point source in an open lead pot, a shield of lead, concrete or water that can be put just in front of it, and a dose rate meter on a bench. Choose the source (¹³⁷Cs, ⁶⁰Co, ⁹⁹ᵐTc or ¹⁸F), its activity, the distance \\(r\\) to the meter, the shield and its thickness \\(x\\), and the time spent at the meter. The distance scale on the bench is logarithmic.":
  "La vista Dosis tiene una fuente puntual de rayos γ en un contenedor de plomo abierto, un blindaje de plomo, concreto o agua que se puede poner justo delante de ella, y un medidor de tasa de dosis sobre una mesa. Elige la fuente (¹³⁷Cs, ⁶⁰Co, ⁹⁹ᵐTc o ¹⁸F), su actividad, la distancia \\(r\\) al medidor, el blindaje y su espesor \\(x\\), y el tiempo que se pasa junto al medidor. La escala de distancia sobre la mesa es logarítmica.",
"The meter reads the equivalent dose rate in µSv/h at the meter. The readouts give the absorbed dose rate in tissue, the equivalent dose rate, the dose over the chosen time (allowing for the source decaying), and how many days of average United States background radiation that dose equals.":
  "El medidor lee la tasa de dosis equivalente en µSv/h en el medidor. Las lecturas dan la tasa de dosis absorbida en tejido, la tasa de dosis equivalente, la dosis durante el tiempo elegido (tomando en cuenta que la fuente decae) y a cuántos días de radiación de fondo promedio en Estados Unidos equivale esa dosis.",
"The graphs show the dose rate against distance with no shield and against shield thickness at the present distance, with your recorded readings as dots and the model as a dashed line.":
  "Las gráficas muestran la tasa de dosis en función de la distancia sin blindaje y en función del espesor del blindaje a la distancia actual, con tus lecturas registradas como puntos y el modelo como línea discontinua.",
"Record reading stores the source, activity, distance, shield, thickness, dose rate, time and dose. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la fuente, la actividad, la distancia, el blindaje, el espesor, la tasa de dosis, el tiempo y la dosis. Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar inicia una serie nueva, que va a una nueva copia de la tabla.",
"Blind hides the attenuation coefficient, the half value layer and the model lines.":
  "A ciegas oculta el coeficiente de atenuación, la capa hemirreductora y las líneas del modelo.",
"Measure how the dose rate from a γ ray source falls with distance and with shielding, find the attenuation coefficient and half value layer of a shield, and compare doses with natural background radiation.":
  "Mide cómo disminuye la tasa de dosis de una fuente de rayos γ con la distancia y con el blindaje, encuentra el coeficiente de atenuación y la capa hemirreductora de un blindaje, y compara dosis con la radiación natural de fondo.",
"The absorbed dose is the energy absorbed per kilogram of tissue, measured in grays ({#} Gy = {#} J/kg; {#} rad = {#} Gy). Different radiations do different harm for the same absorbed dose, so the equivalent dose in sieverts is the absorbed dose times a weighting factor: {#} for γ rays and X-rays, about {#} for β particles, and up to {#} for α particles (§{#}). A point source emits its γ rays equally in all directions, so they spread over a sphere of area \\(4\\pi r^2\\) and the dose rate falls as \\(1/r^2\\). A shield removes photons from a narrow beam exponentially,":
  "La dosis absorbida es la energía absorbida por kilogramo de tejido, medida en grays ({#} Gy = {#} J/kg; {#} rad = {#} Gy). Distintas radiaciones causan distinto daño con la misma dosis absorbida, así que la dosis equivalente en sieverts es la dosis absorbida por un factor de ponderación: {#} para rayos γ y rayos X, cerca de {#} para partículas β, y hasta {#} para partículas α (§{#}). Una fuente puntual emite sus rayos γ por igual en todas direcciones, así que se reparten sobre una esfera de área \\(4\\pi r^2\\) y la tasa de dosis disminuye como \\(1/r^2\\). Un blindaje quita fotones de un haz angosto de forma exponencial,",
"\\[\\dot D = \\dot D_0\\, e^{-\\mu x}, \\qquad x_{1/2} = \\frac{\\ln 2}{\\mu},\\]":
  "\\[\\dot D = \\dot D_0\\, e^{-\\mu x}, \\qquad x_{1/2} = \\frac{\\ln 2}{\\mu},\\]",
"where \\(\\mu\\) is the attenuation coefficient and \\(x_{1/2}\\) the half value layer, the thickness that halves the dose rate. Americans receive about {#} mSv a year from natural background and medical sources (§{#}).":
  "donde \\(\\mu\\) es el coeficiente de atenuación y \\(x_{1/2}\\) la capa hemirreductora, el espesor que reduce a la mitad la tasa de dosis. En Estados Unidos una persona recibe cerca de {#} mSv al año de fuentes naturales de fondo y médicas (§{#}).",
"The dose rate at {#} m from a source is {#} µSv/h. What is it at {#} m, at {#} m and at {#} m?":
  "La tasa de dosis a {#} m de una fuente es {#} µSv/h. ¿Cuánto vale a {#} m, a {#} m y a {#} m?",
"A shield has a half value layer of {#} cm. What share of the dose rate gets through {#} cm, and through {#} cm?":
  "Un blindaje tiene una capa hemirreductora de {#} cm. ¿Qué fracción de la tasa de dosis pasa a través de {#} cm, y a través de {#} cm?",
"A {#} kg person absorbs {#} J of γ rays. Find the absorbed dose in grays and rads and the equivalent dose in sieverts. What would the equivalent dose be if the same energy came from α particles?":
  "Una persona de {#} kg absorbe {#} J de rayos γ. Encuentra la dosis absorbida en grays y en rads, y la dosis equivalente en sieverts. ¿Cuál sería la dosis equivalente si la misma energía viniera de partículas α?",
"Name three ways to reduce the dose you receive from a source.":
  "Menciona tres formas de reducir la dosis que recibes de una fuente.",
"No hazards in the virtual lab. With real sources: keep your distance, keep your time short, and use shielding.":
  "No hay riesgos en el laboratorio virtual. Con fuentes reales: mantén la distancia, reduce el tiempo y usa blindaje.",
"<strong>Distance.</strong> Start with the ¹³⁷Cs source setup ({#} GBq, no shield). Record readings at distances of {#}, {#}, {#}, {#}, {#}, {#} and {#} m.":
  "<strong>Distancia.</strong> Empieza con la configuración Fuente de ¹³⁷Cs ({#} GBq, sin blindaje). Registra lecturas a distancias de {#}, {#}, {#}, {#}, {#}, {#} y {#} m.",
"<strong>Lead.</strong> Export and Clear the readings, return to {#} m and choose a lead shield. Record readings for thicknesses of {#}, {#}, {#}, {#}, {#}, {#} and {#} cm.":
  "<strong>Plomo.</strong> Exporta y borra las lecturas, regresa a {#} m y elige un blindaje de plomo. Registra lecturas para espesores de {#}, {#}, {#}, {#}, {#}, {#} y {#} cm.",
"<strong>Concrete.</strong> Export and Clear the readings, then repeat at {#} m with concrete, for thicknesses of {#}, {#}, {#}, {#}, {#} and {#} cm.":
  "<strong>Concreto.</strong> Exporta y borra las lecturas, luego repite a {#} m con concreto, para espesores de {#}, {#}, {#}, {#}, {#} y {#} cm.",
"<strong>A patient.</strong> Export and Clear the readings, then pick the ⁹⁹ᵐTc patient setup. Record a reading at {#} m with no shield and with {#} and {#} cm of water (water stands in for the patient’s own body). Note the dose over {#} hours for each.":
  "<strong>Un paciente.</strong> Exporta y borra las lecturas, luego elige la configuración Paciente con ⁹⁹ᵐTc. Registra una lectura a {#} m sin blindaje y con {#} y {#} cm de agua (el agua representa el propio cuerpo del paciente). Anota la dosis en {#} horas para cada una.",
"<span>B</span>Source":
  "<span>B</span>Fuente",
"<span>C</span>Activity (MBq)":
  "<span>C</span>Actividad (MBq)",
"<span>D</span>Distance r (m)":
  "<span>D</span>Distancia r (m)",
"<span>E</span>Shield":
  "<span>E</span>Blindaje",
"<span>F</span>Thickness x (cm)":
  "<span>F</span>Espesor x (cm)",
"<span>G</span>Dose rate (µSv/h)":
  "<span>G</span>Tasa de dosis (µSv/h)",
"<span>I</span>ln(dose rate)":
  "<span>I</span>ln(tasa de dosis)",
"Source, row {#}":
  "Fuente, fila {#}",
"Activity (MBq), row {#}":
  "Actividad (MBq), fila {#}",
"Distance r (m), row {#}":
  "Distancia r (m), fila {#}",
"Shield, row {#}":
  "Blindaje, fila {#}",
"Thickness x (cm), row {#}":
  "Espesor x (cm), fila {#}",
"Dose rate (µSv/h), row {#}":
  "Tasa de dosis (µSv/h), fila {#}",
"{#}/r² ({#}/m²), row {#}":
  "{#}/r² ({#}/m²), fila {#}",
"ln(dose rate), row {#}":
  "ln(tasa de dosis), fila {#}",
"Fill in the last two columns yourself, with the dose rate in µSv/h.":
  "Llena tú mismo las dos últimas columnas, con la tasa de dosis en µSv/h.",
"Plot the dose rate against \\(1/r^2\\) for the distance readings. Is it a straight line through the origin? Find the slope, the dose rate at {#} m.":
  "Grafica la tasa de dosis en función de \\(1/r^2\\) para las lecturas de distancia. ¿Es una recta que pasa por el origen? Encuentra la pendiente, la tasa de dosis a {#} m.",
"Plot \\(\\ln\\)(dose rate) against \\(x\\) for lead. Find \\(\\mu\\) from the slope and the half value layer \\(x_{1/2}\\).":
  "Grafica \\(\\ln\\)(tasa de dosis) en función de \\(x\\) para el plomo. Encuentra \\(\\mu\\) con la pendiente y la capa hemirreductora \\(x_{1/2}\\).",
"Do the same for concrete. Divide each \\(\\mu\\) by the density (lead {#} g/cm³, concrete {#} g/cm³) to get the mass attenuation coefficient \\(\\mu/\\rho\\). Which stops more photons per gram, and which per centimeter?":
  "Haz lo mismo para el concreto. Divide cada \\(\\mu\\) entre la densidad (plomo {#} g/cm³, concreto {#} g/cm³) para obtener el coeficiente de atenuación másico \\(\\mu/\\rho\\). ¿Cuál detiene más fotones por gramo, y cuál por centímetro?",
"For the ⁹⁹ᵐTc patient, compare the {#} hour dose at {#} m with the annual background of {#} mSv. How many days of background is it?":
  "Para el paciente con ⁹⁹ᵐTc, compara la dosis en {#} horas a {#} m con el fondo anual de {#} mSv. ¿A cuántos días de fondo equivale?",
"The meter shows four significant figures. How well does that fix the slope in Analysis {#}? Use the spread of your points about the straight line to estimate the uncertainty in the half value layer.":
  "El medidor muestra cuatro cifras significativas. ¿Qué tan bien fija eso la pendiente del Análisis {#}? Usa la dispersión de tus puntos alrededor de la recta para estimar la incertidumbre de la capa hemirreductora.",
"A worker can halve their dose by stepping back from {#} m to how far? By adding how much lead?":
  "Un trabajador puede reducir su dosis a la mitad alejándose de {#} m a ¿qué distancia? ¿Agregando cuánto plomo?",
"The model counts only photons that pass straight through the shield. In a real thick shield, photons scattered by the shield also reach the meter. Would the real dose rate be higher or lower than the model’s?":
  "El modelo cuenta solo los fotones que atraviesan el blindaje en línea recta. En un blindaje grueso real, los fotones dispersados por el blindaje también llegan al medidor. ¿La tasa de dosis real sería mayor o menor que la del modelo?",
"α particles have a weighting factor of {#}, yet α sources outside the body are not dangerous. Why, and when do they become dangerous?":
  "Las partículas α tienen un factor de ponderación de {#}, pero las fuentes α fuera del cuerpo no son peligrosas. ¿Por qué, y cuándo se vuelven peligrosas?",
"Why is ⁹⁹ᵐTc, with its {#} hour half life and single {#} keV γ ray, so useful for medical imaging?":
  "¿Por qué el ⁹⁹ᵐTc, con su vida media de {#} horas y un solo rayo γ de {#} keV, es tan útil para la imagenología médica?",
"Prelab answers, the data tables with your columns, the graphs for distance, lead and concrete, your values of μ and the half value layers, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las tablas de datos con tus columnas, las gráficas de distancia, plomo y concreto, tus valores de μ y las capas hemirreductoras, y las respuestas a las preguntas. Identifica los datos simulados.",
"Dose rate behind the shield":
  "Tasa de dosis detrás del blindaje",
"Dose rate with no shield":
  "Tasa de dosis sin blindaje",
"Linear attenuation coefficient of the shield":
  "Coeficiente de atenuación lineal del blindaje",
"Distance from the source to the meter":
  "Distancia de la fuente al medidor",
"Density of the shield":
  "Densidad del blindaje",
"Thickness of the shield":
  "Espesor del blindaje",
"Half value layer":
  "Capa hemirreductora",
"Nuclear Reactions, Fission and Fusion (Dose)":
  "Reacciones nucleares, fisión y fusión (Dosis)",
"The meter shows three significant figures. How well does that fix the slope in Analysis {#}? Use the spread of your points about the straight line to estimate the uncertainty in the half value layer.":
  "El medidor muestra tres cifras significativas. ¿Qué tan bien fija eso la pendiente del Análisis {#}? Usa la dispersión de tus puntos alrededor de la recta para estimar la incertidumbre de la capa hemirreductora."
});
