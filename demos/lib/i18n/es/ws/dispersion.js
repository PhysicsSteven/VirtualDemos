/* ws/dispersion in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/dispersion', {
"Index n":
  "Índice n",
"Minimum deviation δ (°)":
  "Desviación mínima δ (°)",
"Dispersion | VirtualDemos":
  "Dispersión | VirtualDemos",
"Dispersion":
  "Dispersión",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (and §{#}). Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#} (y §{#}). Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Where it is in the demo:</strong> the Optics Bench, Prism setup. Click the prism to open its editor.":
  "<strong>Dónde está en la demo:</strong> el Banco óptico, configuración Prisma. Haz clic en el prisma para abrir su editor.",
"<strong>Using the demo.</strong> A narrow beam of white light meets a {#}° prism and spreads into colors. Every glass element (Glass block, Prism, Semicircle) has material chips at the top of its editor: Adjustable n, Crown, Flint, Fused silica, Water and Diamond. The editor lists the index at {#}, {#} and {#} nm and, for a prism, how far {#} nm and {#} nm light is turned at minimum deviation and the spread between them. Drag the prism or the source, or rotate them, to follow the rays.":
  "<strong>Uso de la demo.</strong> Un haz angosto de luz blanca llega a un prisma de {#}° y se abre en colores. Cada elemento de vidrio (Bloque de vidrio, Prisma, Semicírculo) tiene botones de material en la parte superior de su editor: n ajustable, Crown, Flint, Sílice fundida, Agua y Diamante. El editor da el índice a {#}, {#} y {#} nm y, para un prisma, cuánto se desvía la luz de {#} nm y de {#} nm en la desviación mínima y la separación entre ellas. Arrastra el prisma o la fuente, o gíralos, para seguir los rayos.",
"<strong>What the demo models.</strong> Real materials use published Sellmeier formulas for the index against wavelength: Schott N-BK7 (crown) and F2 (flint), Malitson for fused silica, Daimon and Masumura for water at {#} °C and Peter for diamond. Adjustable n keeps the old behavior, with the spread of colors exaggerated so it is easy to see. Rays follow Snell’s law at each face; a reading gives the index at eight wavelengths and the deviation at minimum deviation for a {#}° prism, \\(n\\sin(A/2) = \\sin\\!\\big((A + \\delta)/2\\big)\\). Simulated data.":
  "<strong>Qué modela la demo.</strong> Los materiales reales usan fórmulas de Sellmeier publicadas para el índice en función de la longitud de onda: Schott N-BK7 (crown) y F2 (flint), Malitson para la sílice fundida, Daimon y Masumura para el agua a {#} °C y Peter para el diamante. n ajustable conserva el comportamiento anterior, con la separación de colores exagerada para que se vea fácilmente. Los rayos siguen la ley de Snell en cada cara; una lectura da el índice a ocho longitudes de onda y la desviación en la desviación mínima para un prisma de {#}°, \\(n\\sin(A/2) = \\sin\\!\\big((A + \\delta)/2\\big)\\). Datos simulados.",
"Measure how the index of refraction of glass, water and diamond changes with wavelength, and find how that dispersion spreads white light into colors in a prism.":
  "Mide cómo cambia con la longitud de onda el índice de refracción del vidrio, el agua y el diamante, y encuentra cómo esa dispersión separa la luz blanca en colores en un prisma.",
"The index of refraction of a material depends a little on the wavelength: for clear materials it is larger for violet light than for red. This is dispersion. Since \\(v = c/n\\), violet light travels slower in glass than red light, and by Snell’s law it is bent more at each surface. A prism of apex angle \\(A\\) turns a ray by the deviation \\(\\delta\\); turned so the ray passes through it symmetrically, the deviation is the least it can be, with":
  "El índice de refracción de un material depende un poco de la longitud de onda: para los materiales transparentes es mayor para la luz violeta que para la roja. Esto es la dispersión. Como \\(v = c/n\\), la luz violeta viaja más lento en el vidrio que la roja, y por la ley de Snell se desvía más en cada superficie. Un prisma de ángulo de vértice \\(A\\) desvía un rayo un ángulo de desviación \\(\\delta\\); girado para que el rayo lo atraviese simétricamente, la desviación es la menor posible, con",
"\\[n\\sin\\frac{A}{2} = \\sin\\frac{A + \\delta}{2}.\\]":
  "\\[n\\sin\\frac{A}{2} = \\sin\\frac{A + \\delta}{2}.\\]",
"Each wavelength has its own \\(n\\) and so its own \\(\\delta\\), and white light fans out into a spectrum. Over the visible range the index is close to the Cauchy form":
  "Cada longitud de onda tiene su propio \\(n\\) y por tanto su propia \\(\\delta\\), y la luz blanca se abre en un espectro. En el intervalo visible el índice se acerca a la forma de Cauchy",
"\\[n(\\lambda) \\approx A_C + \\frac{B_C}{\\lambda^2},\\]":
  "\\[n(\\lambda) \\approx A_C + \\frac{B_C}{\\lambda^2},\\]",
"so a material with a larger \\(B_C\\) spreads colors more. A rainbow is dispersion in water drops.":
  "así que un material con un \\(B_C\\) mayor separa más los colores. Un arcoíris es dispersión en gotas de agua.",
"Crown glass has \\(n = 1.5308\\) at {#} nm and \\(n = 1.5131\\) at {#} nm. Find the speed of each color in the glass. Which arrives first through a {#} m block, and by how much?":
  "El vidrio crown tiene \\(n = 1.5308\\) a {#} nm y \\(n = 1.5131\\) a {#} nm. Encuentra la rapidez de cada color en el vidrio. ¿Cuál llega primero a través de un bloque de {#} m, y por cuánto?",
"Find the minimum deviation of a {#}° prism with \\(n = 1.5167\\).":
  "Encuentra la desviación mínima de un prisma de {#}° con \\(n = 1.5167\\).",
"Show that a {#}° prism of diamond (\\(n \\approx 2.42\\)) has no minimum deviation: light cannot get through it symmetrically. What happens to the light instead?":
  "Demuestra que un prisma de diamante de {#}° (\\(n \\approx 2.42\\)) no tiene desviación mínima: la luz no puede atravesarlo simétricamente. ¿Qué le pasa a la luz en cambio?",
"Why do we see a rainbow’s red on the outside and violet on the inside, if water bends violet more?":
  "¿Por qué vemos el rojo de un arcoíris por fuera y el violeta por dentro, si el agua desvía más el violeta?",
"There are no hazards in the simulation. Never look at the Sun through a prism or lens.":
  "No hay riesgos en la simulación. Nunca mires el Sol a través de un prisma o una lente.",
"<strong>Part {#}: white light through a prism.</strong> In the Prism setup, follow the white beam through the prism with Adjustable n. Which color is bent most? Rotate the prism slowly and watch the spectrum move: describe where it turns back. (Nothing is recorded in the table.)":
  "<strong>Parte {#}: luz blanca a través de un prisma.</strong> En la configuración Prisma, sigue el haz blanco a través del prisma con n ajustable. ¿Qué color se desvía más? Gira el prisma lentamente y observa cómo se mueve el espectro: describe dónde se regresa. (No se registra nada en la tabla.)",
"<strong>Part {#}: real materials.</strong> Make the prism crown glass and record its index and deviation across the spectrum. Repeat for flint glass, fused silica and water.":
  "<strong>Parte {#}: materiales reales.</strong> Haz el prisma de vidrio crown y registra su índice y su desviación a lo largo del espectro. Repite con vidrio flint, sílice fundida y agua.",
"<strong>Part {#}: diamond.</strong> Make the prism diamond and record. Follow the white beam: where does it go?":
  "<strong>Parte {#}: diamante.</strong> Haz el prisma de diamante y registra. Sigue el haz blanco: ¿a dónde va?",
"<strong>Using the virtual apparatus.</strong> Select the element first: a reading records the selected element’s index at eight wavelengths, one row each. Send each material to the worksheet before clearing, so each gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> Selecciona primero el elemento: una lectura registra el índice del elemento seleccionado a ocho longitudes de onda, una fila cada una. Envía cada material a la hoja antes de borrar, para que cada uno tenga su propia copia de la tabla de datos.",
"<span>B</span>Element":
  "<span>B</span>Elemento",
"<span>C</span>Material":
  "<span>C</span>Material",
"<span>D</span>Wavelength \\(\\lambda\\) (nm)":
  "<span>D</span>Longitud de onda \\(\\lambda\\) (nm)",
"<span>E</span>Index \\(n\\)":
  "<span>E</span>Índice \\(n\\)",
"<span>F</span>Minimum deviation \\(\\delta\\) (°)":
  "<span>F</span>Desviación mínima \\(\\delta\\) (°)",
"<span>G</span>\\(1/\\lambda^2\\) ({#}/µm²)":
  "<span>G</span>\\(1/\\lambda^2\\) ({#}/µm²)",
"Element, row {#}":
  "Elemento, fila {#}",
"Wavelength λ (nm), row {#}":
  "Longitud de onda λ (nm), fila {#}",
"Index n, row {#}":
  "Índice n, fila {#}",
"Minimum deviation δ (°), row {#}":
  "Desviación mínima δ (°), fila {#}",
"{#}/λ^{#} ({#}/µm²), row {#}":
  "{#}/λ^{#} ({#}/µm²), fila {#}",
"Fill in the last column yourself for every prism row.":
  "Llena tú mismo la última columna para cada fila de prisma.",
"For each material in Part {#}, graph \\(n\\) against \\(\\lambda\\). Then graph \\(n\\) against \\(1/\\lambda^2\\) and fit a straight line: find \\(A_C\\) and \\(B_C\\). Is the Cauchy form a good fit? Which material has the largest \\(B_C\\)?":
  "Para cada material de la Parte {#}, grafica \\(n\\) en función de \\(\\lambda\\). Luego grafica \\(n\\) en función de \\(1/\\lambda^2\\) y ajusta una recta: encuentra \\(A_C\\) y \\(B_C\\). ¿La forma de Cauchy ajusta bien? ¿Qué material tiene el mayor \\(B_C\\)?",
"For each material, find the spread of the spectrum, \\(\\delta(400\\ \\mathrm{nm}) - \\delta(700\\ \\mathrm{nm})\\), and the index difference \\(n(400) - n(700)\\). Rank the materials by each. Which would make the best prism for spreading colors, and which the best lens for keeping them together?":
  "Para cada material, encuentra la separación del espectro, \\(\\delta(400\\ \\mathrm{nm}) - \\delta(700\\ \\mathrm{nm})\\), y la diferencia de índices \\(n(400) - n(700)\\). Ordena los materiales según cada una. ¿Cuál haría el mejor prisma para separar colores, y cuál la mejor lente para mantenerlos juntos?",
"Type the prism rows from all your copies into one new copy of the Data table, and graph \\(\\delta\\) against \\(n\\) for them together. Is the deviation set by \\(n\\) alone, whatever the material? Use the minimum deviation formula to explain why the curve steepens as \\(n\\) grows.":
  "Escribe las filas de prisma de todas tus copias en una nueva copia de la tabla de datos, y grafica \\(\\delta\\) en función de \\(n\\) para todas juntas. ¿La desviación la fija solo \\(n\\), sea cual sea el material? Usa la fórmula de la desviación mínima para explicar por qué la curva se vuelve más empinada al crecer \\(n\\).",
"For Part {#}, explain why the diamond prism gives no deviation, and why diamond’s large index and dispersion make cut diamonds flash with color.":
  "Para la Parte {#}, explica por qué el prisma de diamante no da desviación, y por qué el gran índice y la gran dispersión del diamante hacen que los diamantes tallados destellen en colores.",
"The model’s indices come from the published Sellmeier formulas, which reproduce measured indices to about the fifth decimal place over the visible range (the older diamond formula less well); the reading gives them to five decimal places. Real glass varies a little from melt to melt, and its index changes with temperature (by a few parts in a million per kelvin for crown glass). The prism is assumed to be a perfect {#}° wedge.":
  "Los índices del modelo vienen de las fórmulas de Sellmeier publicadas, que reproducen los índices medidos hasta cerca del quinto decimal en el intervalo visible (la fórmula más antigua del diamante, no tan bien); la lectura los da con cinco decimales. El vidrio real varía un poco de una fundición a otra, y su índice cambia con la temperatura (unas pocas partes por millón por kelvin para el vidrio crown). Se supone que el prisma es una cuña perfecta de {#}°.",
"Why does a single glass lens bring red and violet light to a focus at different distances, and how does an achromatic doublet of crown and flint glass fix it?":
  "¿Por qué una sola lente de vidrio enfoca la luz roja y la violeta a distancias distintas, y cómo lo corrige un doblete acromático de vidrio crown y flint?",
"A pulse of white light enters a long optical fiber. Why is it longer when it comes out?":
  "Un pulso de luz blanca entra a una fibra óptica larga. ¿Por qué sale más largo?",
"Why is the dispersion of air hard to notice, although air does have an index above {#}?":
  "¿Por qué cuesta notar la dispersión del aire, aunque el aire sí tiene un índice mayor que {#}?",
"Prelab answers, a Data table copy for each material, the graphs and Cauchy fits, your table of spreads, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, una copia de la tabla de datos para cada material, las gráficas y ajustes de Cauchy, tu tabla de separaciones y las respuestas a las preguntas. Identifica los datos simulados.",
"Apex angle of the prism":
  "Ángulo de vértice del prisma",
"Cauchy coefficient A":
  "Coeficiente de Cauchy A",
"Cauchy coefficient B, the slope of n against {#}/λ²":
  "Coeficiente de Cauchy B, la pendiente de n en función de {#}/λ²",
"with λ in µm, as in the fit; {#} µm² = {#}⁶ nm²":
  "con λ en µm, como en el ajuste; {#} µm² = {#}⁶ nm²",
"Deviation (at minimum deviation)":
  "Desviación (en la desviación mínima)",
"Index of refraction":
  "Índice de refracción",
"Speed of light in the material":
  "Rapidez de la luz en el material"
});
