/* ws/cepheid-photometry in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/cepheid-photometry', {
"Night":
  "Noche",
"Time t (d)":
  "Tiempo t (d)",
"Comparison star":
  "Estrella de comparación",
"V_C of the comparison":
  "V_C de la comparación",
"Cepheid net counts N_V":
  "Cuentas netas de la cefeida N_V",
"Comparison net counts N_C":
  "Cuentas netas de la comparación N_C",
"Cepheid V":
  "V de la cefeida",
"Uncertainty σ_V":
  "Incertidumbre σ_V",
"Raw instrumental magnitude":
  "Magnitud instrumental cruda",
"Seeing (px)":
  "Seeing (px)",
"Aperture radius (px)":
  "Radio de la apertura (px)",
"Measuring a Cepheid on CCD Images | VirtualDemos":
  "Medición de una cefeida en imágenes CCD | VirtualDemos",
"Measuring a Cepheid on CCD Images":
  "Medición de una cefeida en imágenes CCD",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (the distance ladder behind the Hubble law). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (la escalera de distancias detrás de la ley de Hubble). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> {#} Parallax; Spectroscopic parallax; Main sequence fitting; {#} Cepheids; Cepheid photometry; {#} Type Ia; {#} Hubble’s law; Whole ladder. This worksheet uses <strong>Cepheid photometry</strong>.":
  "<strong>Configuraciones en la demo:</strong> {#} Paralaje; Paralaje espectroscópico; Ajuste de la secuencia principal; {#} Cefeidas; Fotometría de cefeidas; {#} Tipo Ia; {#} Ley de Hubble; Toda la escalera. Esta hoja de trabajo usa <strong>Fotometría de cefeidas</strong>.",
"Cepheid photometry shows one simulated CCD image per night of a Cepheid variable in the Large Magellanic Cloud, with three comparison stars of known V magnitude: C1 ({#}), C2 ({#}) and C3 ({#}). The Cepheid chips choose which of five Cepheids is in the field; the night slider and the Previous night and Next night buttons step through the nights.":
  "Fotometría de cefeidas muestra una imagen CCD simulada por noche de una variable cefeida en la Gran Nube de Magallanes, con tres estrellas de comparación de magnitud V conocida: C1 ({#}), C2 ({#}) y C3 ({#}). Los botones de cefeida eligen cuál de cinco cefeidas está en el campo; el deslizador de la noche y los botones Noche anterior y Noche siguiente recorren las noches.",
"Two apertures sit on the image: one on the Cepheid and one on a comparison star. Drag either to another star; dropped, it centers itself on the star’s light. The aperture radius slider sets the size of both.":
  "Hay dos aperturas sobre la imagen: una en la cefeida y otra en una estrella de comparación. Arrastra cualquiera de ellas a otra estrella; al soltarla, se centra sola en la luz de la estrella. El deslizador del radio de la apertura fija el tamaño de ambas.",
"Each aperture adds up the counts of the pixels inside it and takes away the sky, measured as the median of a ring {#} to {#} px outside the aperture. The readouts give both net counts, the instrumental difference, the Cepheid’s V, its uncertainty from the photon counts, the raw instrumental magnitude, and the night’s seeing and sky.":
  "Cada apertura suma las cuentas de los píxeles dentro de ella y resta el cielo, medido como la mediana de un anillo de {#} a {#} px fuera de la apertura. Las lecturas en pantalla dan ambas cuentas netas, la diferencia instrumental, la V de la cefeida, su incertidumbre a partir de las cuentas de fotones, la magnitud instrumental cruda, y el seeing y el cielo de la noche.",
"Record reading stores the night, its time, the comparison star, both net counts and the results. The light curve under the image draws your readings as you take them. Export to worksheet sends readings from several nights to the first data table below and readings at several aperture sizes on one night to the second. Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la noche, su tiempo, la estrella de comparación, ambas cuentas netas y los resultados. La curva de luz bajo la imagen dibuja tus lecturas a medida que las tomas. Exportar a la hoja envía las lecturas de varias noches a la primera tabla de datos de abajo y las lecturas con varios tamaños de apertura en una noche a la segunda. Borrar inicia una nueva serie, que va a una nueva copia de la tabla.",
"The model: the images are simulated. Each star is a Gaussian blur of the night’s seeing ({#} to {#} px wide at half maximum) on a flat sky, dimmed by the night’s thin cloud (transparency {#} to {#}%), with photon noise and {#} electrons of read noise. No other star lies within {#} px of the Cepheid or a comparison star.":
  "El modelo: las imágenes son simuladas. Cada estrella es un difuminado gaussiano con el seeing de la noche (de {#} a {#} px de ancho a la mitad del máximo) sobre un cielo uniforme, atenuado por la nube delgada de la noche (transparencia de {#} a {#}%), con ruido de fotones y {#} electrones de ruido de lectura. Ninguna otra estrella está a menos de {#} px de la cefeida o de una estrella de comparación.",
"Measure a Cepheid’s brightness night by night from CCD images, build its light curve, find its period and mean magnitude, and use the Leavitt law to find the distance to the Large Magellanic Cloud.":
  "Mide el brillo de una cefeida noche tras noche a partir de imágenes CCD, construye su curva de luz, encuentra su periodo y su magnitud media, y usa la ley de Leavitt para encontrar la distancia a la Gran Nube de Magallanes.",
"<strong>Differential photometry.</strong> A CCD counts the light of each star. Clouds and seeing change from night to night, but they dim or blur every star in the image by the same factor, so the ratio of the Cepheid’s counts \\(N_V\\) to a comparison star’s counts \\(N_C\\) does not depend on them. With the comparison star’s magnitude \\(V_C\\) known,":
  "<strong>Fotometría diferencial.</strong> Un CCD cuenta la luz de cada estrella. Las nubes y el seeing cambian de una noche a otra, pero atenúan o difuminan todas las estrellas de la imagen por el mismo factor, así que la razón entre las cuentas de la cefeida \\(N_V\\) y las cuentas de una estrella de comparación \\(N_C\\) no depende de ellos. Con la magnitud \\(V_C\\) de la estrella de comparación conocida,",
"\\[V = V_C + \\Delta m,\\qquad \\Delta m = -2.5\\log_{10}\\frac{N_V}{N_C}.\\]":
  "\\[V = V_C + \\Delta m,\\qquad \\Delta m = -2.5\\log_{10}\\frac{N_V}{N_C}.\\]",
"<strong>Photon noise.</strong> Counting \\(N\\) photons has a random scatter of \\(\\sqrt{N}\\). With the sky and the read noise, the variance of a net count is \\(\\sigma^2 = N + n_{\\text{pix}}(\\text{sky} + 5^2)\\), and the uncertainty in a magnitude is about \\(1.0857\\,\\sigma/N\\).":
  "<strong>Ruido de fotones.</strong> Contar \\(N\\) fotones tiene una dispersión aleatoria de \\(\\sqrt{N}\\). Con el cielo y el ruido de lectura, la varianza de una cuenta neta es \\(\\sigma^2 = N + n_{\\text{pix}}(\\text{sky} + 5^2)\\), y la incertidumbre de una magnitud es de alrededor de \\(1.0857\\,\\sigma/N\\).",
"<strong>Cepheids.</strong> A Cepheid pulsates with a fixed period, a few days to months. Leavitt found that the longer the period, the more luminous the star. As this demo calibrates it (Benedict et al. {#}, from Hubble Space Telescope parallaxes of Milky Way Cepheids),":
  "<strong>Cefeidas.</strong> Una cefeida pulsa con un periodo fijo, de unos días a meses. Leavitt encontró que cuanto más largo es el periodo, más luminosa es la estrella. Tal como la calibra esta demo (Benedict et al. {#}, a partir de paralajes del telescopio espacial Hubble de cefeidas de la Vía Láctea),",
"\\[M_V = -2.43\\,(\\log_{10}P - 1) - 4.05,\\]":
  "\\[M_V = -2.43\\,(\\log_{10}P - 1) - 4.05,\\]",
"with P in days. The mean apparent magnitude and \\(M_V\\) give the distance modulus \\(m - M = 5\\log_{10}(d/10\\ \\text{pc})\\).":
  "con P en días. La magnitud aparente media y \\(M_V\\) dan el módulo de distancia \\(m - M = 5\\log_{10}(d/10\\ \\text{pc})\\).",
"On one night the Cepheid gives {#} net counts and C1 (\\(V = 13.85\\)) gives {#} {#}. Find the Cepheid’s V.":
  "En una noche la cefeida da {#} cuentas netas y C1 (\\(V = 13.85\\)) da {#} {#}. Encuentra la V de la cefeida.",
"The next night thin cloud lets through only {#}% of the light. What happens to \\(N_V\\), \\(N_C\\), \\(\\Delta m\\) and V?":
  "La noche siguiente una nube delgada deja pasar solo el {#}% de la luz. ¿Qué les pasa a \\(N_V\\), \\(N_C\\), \\(\\Delta m\\) y V?",
"A star gives {#} {#} net counts with negligible sky. What is the uncertainty in its magnitude?":
  "Una estrella da {#} {#} cuentas netas con cielo despreciable. ¿Cuál es la incertidumbre de su magnitud?",
"A Cepheid has a period of {#} days and a mean V of {#}. Find \\(M_V\\), the distance modulus and the distance in kpc.":
  "Una cefeida tiene un periodo de {#} días y una V media de {#}. Encuentra \\(M_V\\), el módulo de distancia y la distancia en kpc.",
"A light curve is sampled once a night for {#} nights. About how many cycles of an {#} day Cepheid does that cover? Could a {#} day period be told apart from it with once a night sampling? (Think about what you would see.)":
  "Una curva de luz se muestrea una vez por noche durante {#} noches. ¿Más o menos cuántos ciclos de una cefeida de {#} días cubre eso? ¿Se podría distinguir de ella un periodo de {#} días muestreando una vez por noche? (Piensa en lo que verías.)",
"<strong>Part {#}. The light curve.</strong> Choose Cepheid photometry and Cepheid C3, with the comparison aperture on C1. Record a reading on every night, from the first to the last. Send the readings to the worksheet.":
  "<strong>Parte {#}. La curva de luz.</strong> Elige Fotometría de cefeidas y la cefeida C3, con la apertura de comparación en C1. Registra una lectura en cada noche, de la primera a la última. Envía las lecturas a la hoja de trabajo.",
"<strong>Part {#}. A second comparison star.</strong> Clear the readings. Move the comparison aperture to C2 and record readings on the first ten nights again. Send them; they go into a new copy of the first table.":
  "<strong>Parte {#}. Una segunda estrella de comparación.</strong> Borra las lecturas. Mueve la apertura de comparación a C2 y registra lecturas de nuevo en las primeras diez noches. Envíalas; van a una nueva copia de la primera tabla.",
"<strong>Part {#}. The aperture size.</strong> Clear the readings. Stay on one night, with the comparison aperture on C1, and record a reading at each aperture radius from {#} to {#} px. Send the readings; they fill the second table.":
  "<strong>Parte {#}. El tamaño de la apertura.</strong> Borra las lecturas. Quédate en una noche, con la apertura de comparación en C1, y registra una lectura con cada radio de apertura de {#} a {#} px. Envía las lecturas; llenan la segunda tabla.",
"<strong>The Cepheid, night by night.</strong>":
  "<strong>La cefeida, noche tras noche.</strong>",
"<span>B</span>Night":
  "<span>B</span>Noche",
"<span>C</span>Time \\(t\\) (d)":
  "<span>C</span>Tiempo \\(t\\) (d)",
"<span>D</span>Comparison star":
  "<span>D</span>Estrella de comparación",
"<span>E</span>\\(V_C\\) of the comparison":
  "<span>E</span>\\(V_C\\) de la comparación",
"<span>F</span>Cepheid net counts \\(N_V\\)":
  "<span>F</span>Cuentas netas de la cefeida \\(N_V\\)",
"<span>G</span>Comparison net counts \\(N_C\\)":
  "<span>G</span>Cuentas netas de la comparación \\(N_C\\)",
"<span>H</span>\\(\\Delta m\\)":
  "<span>H</span>\\(\\Delta m\\)",
"<span>I</span>Cepheid \\(V\\)":
  "<span>I</span>\\(V\\) de la cefeida",
"<span>J</span>Uncertainty \\(\\sigma_V\\)":
  "<span>J</span>Incertidumbre \\(\\sigma_V\\)",
"<span>K</span>Raw instrumental magnitude":
  "<span>K</span>Magnitud instrumental cruda",
"<span>L</span>Seeing (px)":
  "<span>L</span>Seeing (px)",
"Night, row {#}":
  "Noche, fila {#}",
"Time t (d), row {#}":
  "Tiempo t (d), fila {#}",
"Comparison star, row {#}":
  "Estrella de comparación, fila {#}",
"V_C of the comparison, row {#}":
  "V_C de la comparación, fila {#}",
"Cepheid net counts N_V, row {#}":
  "Cuentas netas de la cefeida N_V, fila {#}",
"Comparison net counts N_C, row {#}":
  "Cuentas netas de la comparación N_C, fila {#}",
"Δ m, row {#}":
  "Δ m, fila {#}",
"Cepheid V, row {#}":
  "V de la cefeida, fila {#}",
"Uncertainty σ_V, row {#}":
  "Incertidumbre σ_V, fila {#}",
"Raw instrumental magnitude, row {#}":
  "Magnitud instrumental cruda, fila {#}",
"Seeing (px), row {#}":
  "Seeing (px), fila {#}",
"<strong>One night, several apertures.</strong>":
  "<strong>Una noche, varias aperturas.</strong>",
"<span>B</span>Aperture radius (px)":
  "<span>B</span>Radio de la apertura (px)",
"<span>C</span>Cepheid net counts \\(N_V\\)":
  "<span>C</span>Cuentas netas de la cefeida \\(N_V\\)",
"<span>D</span>Comparison net counts \\(N_C\\)":
  "<span>D</span>Cuentas netas de la comparación \\(N_C\\)",
"<span>E</span>\\(\\Delta m\\)":
  "<span>E</span>\\(\\Delta m\\)",
"<span>F</span>Cepheid \\(V\\)":
  "<span>F</span>\\(V\\) de la cefeida",
"<span>G</span>Uncertainty \\(\\sigma_V\\)":
  "<span>G</span>Incertidumbre \\(\\sigma_V\\)",
"Aperture radius (px), row {#}":
  "Radio de la apertura (px), fila {#}",
"Graph V against t for Part {#} (put brighter, smaller V, upward if your graph allows, or note that it is upside down). Describe the shape of one cycle: is the rise as fast as the fall?":
  "Grafica V en función de t para la Parte {#} (pon lo más brillante, V más pequeña, hacia arriba si tu gráfica lo permite, o indica que está invertida). Describe la forma de un ciclo: ¿la subida es tan rápida como la bajada?",
"Find the period two ways: from the times of two maxima several cycles apart, divided by the number of cycles, and from a sine fit to V against t (\\(P = 1/f\\)). Which do you trust more, and why?":
  "Encuentra el periodo de dos maneras: a partir de los tiempos de dos máximos separados varios ciclos, divididos entre el número de ciclos, y a partir de un ajuste senoidal de V en función de t (\\(P = 1/f\\)). ¿En cuál confías más, y por qué?",
"Find the mean V as the average of the fitted curve over one cycle (the sine fit’s C), and from the brightest and faintest V.":
  "Encuentra la V media como el promedio de la curva ajustada a lo largo de un ciclo (la C del ajuste senoidal), y a partir de la V más brillante y la más tenue.",
"Use the Leavitt law to find \\(M_V\\), then the distance modulus and the distance to the Large Magellanic Cloud. Compare with the measured {#} kpc (Pietrzyński et al. {#}).":
  "Usa la ley de Leavitt para encontrar \\(M_V\\), luego el módulo de distancia y la distancia a la Gran Nube de Magallanes. Compárala con los {#} kpc medidos (Pietrzyński et al. {#}).",
"Graph the raw instrumental magnitude against t on the same nights. Why is it so much more ragged than V? Which nights were cloudy?":
  "Grafica la magnitud instrumental cruda en función de t en las mismas noches. ¿Por qué es mucho más irregular que V? ¿Qué noches estuvieron nubladas?",
"Compare the V values from C1 and from C2 on the same nights (Part {#}). Do they agree within their uncertainties? Find the mean difference.":
  "Compara los valores de V obtenidos con C1 y con C2 en las mismas noches (Parte {#}). ¿Coinciden dentro de sus incertidumbres? Encuentra la diferencia media.",
"From Part {#}, graph \\(\\sigma_V\\) against the aperture radius. Which radius gives the smallest uncertainty? Does V itself change with the radius? Explain both.":
  "A partir de la Parte {#}, grafica \\(\\sigma_V\\) en función del radio de la apertura. ¿Qué radio da la menor incertidumbre? ¿Cambia V misma con el radio? Explica ambas cosas.",
"Compare the scatter of your V points about the fitted curve with the uncertainties \\(\\sigma_V\\) the demo gives. Estimate the uncertainty of the period from Analysis {#} and carry it, with the uncertainty of the mean V, into the distance. Remember that real Cepheids of one period also differ by about {#} mag in \\(M_V\\), the width of the instability strip, so one Cepheid gives the distance only to about {#}%.":
  "Compara la dispersión de tus puntos de V alrededor de la curva ajustada con las incertidumbres \\(\\sigma_V\\) que da la demo. Estima la incertidumbre del periodo a partir del Análisis {#} y propágala, junto con la incertidumbre de la V media, a la distancia. Recuerda que las cefeidas reales de un mismo periodo también difieren en unas {#} mag en \\(M_V\\), el ancho de la franja de inestabilidad, así que una sola cefeida da la distancia solo con una precisión de alrededor del {#}%.",
"Why do astronomers measure a variable star against comparison stars in the same image instead of measuring it alone?":
  "¿Por qué los astrónomos miden una estrella variable respecto a estrellas de comparación en la misma imagen en lugar de medirla sola?",
"A comparison star that is itself slightly variable would do what to the light curve?":
  "¿Qué le haría a la curva de luz una estrella de comparación que fuera ligeramente variable?",
"Why does a small aperture give a noisier V on a night of poor seeing?":
  "¿Por qué una apertura pequeña da una V más ruidosa en una noche de mal seeing?",
"The comparison stars’ magnitudes come from a calibration against standard stars. If they were all {#} mag too faint, what would happen to your distance?":
  "Las magnitudes de las estrellas de comparación vienen de una calibración con estrellas estándar. Si todas fueran {#} mag más tenues, ¿qué le pasaría a tu distancia?",
"Why is one Cepheid’s distance to the Large Magellanic Cloud less precise than the distance from many Cepheids in rung {#}?":
  "¿Por qué la distancia a la Gran Nube de Magallanes a partir de una sola cefeida es menos precisa que la distancia a partir de muchas cefeidas en el peldaño {#}?",
"Prelab answers, the table copies with their graphs and fits, the period and mean V with their uncertainties, the distance to the Large Magellanic Cloud with its uncertainty, the comparison of the two comparison stars and of the aperture sizes, and answers to the questions. Identify simulated data: the CCD images and the Cepheid’s light curve are simulated.":
  "Respuestas del prelaboratorio, las copias de la tabla con sus gráficas y ajustes, el periodo y la V media con sus incertidumbres, la distancia a la Gran Nube de Magallanes con su incertidumbre, la comparación de las dos estrellas de comparación y de los tamaños de apertura, y respuestas a las preguntas. Identifica los datos simulados: las imágenes CCD y la curva de luz de la cefeida son simuladas.",
"Absolute magnitude":
  "Magnitud absoluta",
"Absolute V magnitude: the V magnitude seen from {#} pc":
  "Magnitud V absoluta: la magnitud V vista desde {#} pc",
"Number of photons counted":
  "Número de fotones contados",
"Net counts of the comparison star, sky taken away":
  "Cuentas netas de la estrella de comparación, con el cielo restado",
"Net counts of the Cepheid, sky taken away":
  "Cuentas netas de la cefeida, con el cielo restado",
"Period of the Cepheid's pulsation":
  "Periodo de la pulsación de la cefeida",
"Apparent V magnitude of the Cepheid":
  "Magnitud V aparente de la cefeida",
"Known V magnitude of the comparison star":
  "Magnitud V conocida de la estrella de comparación",
"Frequency of the fitted sine, {#}/P":
  "Frecuencia del seno ajustado, {#}/P",
"Apparent magnitude":
  "Magnitud aparente",
"Number of pixels in the aperture":
  "Número de píxeles en la apertura",
"Uncertainty (standard deviation) of a net count":
  "Incertidumbre (desviación estándar) de una cuenta neta",
"Uncertainty of the Cepheid's V from the photon counts":
  "Incertidumbre de la V de la cefeida a partir de las cuentas de fotones",
"Time of the night's image":
  "Tiempo de la imagen de la noche",
"Column M, row {#}":
  "Columna M, fila {#}",
"Heading of column M":
  "Encabezado de la columna M",
"Column M":
  "Columna M"
});
