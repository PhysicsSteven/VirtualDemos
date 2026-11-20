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
"A narrow beam of white light passes through a {#}° glass prism. Which color is turned through the largest angle: red, violet, or are all colors turned through the same angle? Explain your choice.":
  "Un haz angosto de luz blanca pasa por un prisma de vidrio de {#}°. ¿Qué color se desvía más: el rojo, el violeta, o todos los colores se desvían el mismo ángulo? Explica tu elección.",
"There are no hazards in the simulation. Never look at the Sun through a prism or lens.":
  "No hay riesgos en la simulación. Nunca mires el Sol a través de un prisma o una lente.",
"<strong>Part {#}: white light through a prism.</strong> Press the Prism setup and click the prism to open its editor; leave the material chip on Adjustable n. Follow the white beam through the prism. Which color is bent most? Write it in your answer to Question {#}. Move the prism’s Rotate slider slowly (or press [ and ]) and watch the spectrum move on the far side: describe where it stops and turns back. (Nothing is recorded in the table.)":
  "<strong>Parte {#}: luz blanca a través de un prisma.</strong> Pulsa la configuración Prisma y haz clic en el prisma para abrir su editor; deja el selector de material en n ajustable. Sigue el haz blanco a través del prisma. ¿Qué color se desvía más? Anótalo en tu respuesta a la pregunta {#}. Mueve despacio el control deslizante Girar del prisma (o pulsa [ y ]) y observa cómo se mueve el espectro al otro lado: describe dónde se detiene y da la vuelta. (No se registra nada en la tabla.)",
"<strong>Part {#}: real materials.</strong> With the prism selected, press the Crown chip in its editor and press Record reading once: it adds eight rows, one per wavelength from {#} to {#} nm. Press Export to worksheet, then Clear. Repeat with the Flint, Fused silica and Water chips.":
  "<strong>Parte {#}: materiales reales.</strong> Con el prisma seleccionado, pulsa el botón Crown en su editor y pulsa Registrar lectura una vez: agrega ocho filas, una por cada longitud de onda de {#} a {#} nm. Pulsa Exportar a la hoja y luego Borrar. Repite con los botones Flint, Sílice fundida y Agua.",
"<strong>Part {#}: diamond.</strong> Press the Diamond chip, then Record reading, Export to worksheet and Clear. Its deviation column reads “none: total internal reflection”. Follow the white beam: where does it go?":
  "<strong>Parte {#}: diamante.</strong> Pulsa el botón Diamante y luego Registrar lectura, Exportar a la hoja y Borrar. Su columna de desviación dice “ninguna: reflexión total interna”. Sigue el haz blanco: ¿adónde va?",
"<strong>Using the virtual apparatus.</strong> Click the prism to select it before you record: a reading records the selected element’s index at eight wavelengths, one row each. Export each material to the worksheet before you press Clear, so each gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> Haz clic en el prisma para seleccionarlo antes de registrar: una lectura registra el índice del elemento seleccionado a ocho longitudes de onda, una fila para cada una. Exporta cada material a la hoja antes de pulsar Borrar, para que cada uno tenga su propia copia de la tabla de datos.",
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
"Index n, row {#}":
  "Índice n, fila {#}",
"Minimum deviation δ (°), row {#}":
  "Desviación mínima δ (°), fila {#}",
"{#}/λ^{#} ({#}/µm²), row {#}":
  "{#}/λ^{#} ({#}/µm²), fila {#}",
"Fill in the last column yourself for the crown and flint rows (\\(\\lambda\\) in µm, so {#} nm gives \\(1/0.400^2 = 6.25\\)). The eight wavelengths are the same in every copy, so the column repeats.":
  "Llena tú la última columna para las filas de crown y flint (\\(\\lambda\\) en µm, así que {#} nm da \\(1/0.400^2 = 6.25\\)). Las ocho longitudes de onda son las mismas en cada copia, así que la columna se repite.",
"For crown and flint glass in Part {#}, graph \\(n\\) (vertical) against \\(1/\\lambda^2\\) (horizontal) and fit a straight line: find \\(A_C\\) and \\(B_C\\). Is the Cauchy form a good fit? Which glass has the larger \\(B_C\\)?":
  "Para el vidrio crown y el flint de la Parte {#}, grafica \\(n\\) (vertical) en función de \\(1/\\lambda^2\\) (horizontal) y ajusta una recta: encuentra \\(A_C\\) y \\(B_C\\). ¿Es buena la forma de Cauchy como ajuste? ¿Qué vidrio tiene la \\(B_C\\) mayor?",
"For each material, find the spread of the spectrum, \\(\\delta(400\\ \\mathrm{nm}) - \\delta(700\\ \\mathrm{nm})\\), and the index difference \\(n(400) - n(700)\\). Rank the materials by each. Which would make the best prism for spreading colors, and which the best lens for keeping them together?":
  "Para cada material, encuentra la separación del espectro, \\(\\delta(400\\ \\mathrm{nm}) - \\delta(700\\ \\mathrm{nm})\\), y la diferencia de índices \\(n(400) - n(700)\\). Ordena los materiales según cada una. ¿Cuál haría el mejor prisma para separar colores, y cuál la mejor lente para mantenerlos juntos?",
"Type the {#} nm prism row from each of your four copies (crown, flint, fused silica and water) into one new copy of the Data table, and graph \\(\\delta\\) (vertical) against \\(n\\) (horizontal) for the four points. Is the deviation set by \\(n\\) alone, whatever the material? Use the minimum deviation formula to explain why the curve steepens as \\(n\\) grows.":
  "Escribe la fila del prisma de {#} nm de cada una de tus cuatro copias (crown, flint, sílice fundida y agua) en una copia nueva de la tabla de datos, y grafica \\(\\delta\\) (vertical) en función de \\(n\\) (horizontal) para los cuatro puntos. ¿La desviación la fija \\(n\\) sola, sea cual sea el material? Usa la fórmula de la desviación mínima para explicar por qué la curva se vuelve más empinada al crecer \\(n\\).",
"For Part {#}, explain why the diamond prism gives no deviation, and why diamond’s large index and dispersion make cut diamonds flash with color.":
  "Para la Parte {#}, explica por qué el prisma de diamante no da desviación, y por qué el gran índice y la gran dispersión del diamante hacen que los diamantes tallados destellen en colores.",
"Which color did the prism turn most in Part {#}, and what do the Minimum deviation δ values of your crown glass rows at {#} and {#} nm say? Set them beside your answer to Before the lab {#}, and explain the order with \\(v = c/n\\) and Snell’s law. The same difference in speed shows up in a fiber: a pulse of white light enters a long optical fiber. Why is it longer when it comes out?":
  "¿Qué color desvió más el prisma en la Parte {#}, y qué dicen los valores de Desviación mínima δ de tus filas de vidrio crown en {#} y {#} nm? Compáralos con tu respuesta a Antes del laboratorio {#} y explica el orden con \\(v = c/n\\) y la ley de Snell. La misma diferencia de rapidez aparece en una fibra: un pulso de luz blanca entra a una fibra óptica larga. ¿Por qué es más largo cuando sale?",
"Why is the dispersion of air hard to notice, although air does have an index above {#}?":
  "¿Por qué cuesta notar la dispersión del aire, aunque el aire sí tiene un índice mayor que {#}?",
"For courses that treat measurement uncertainty. This section is not counted in the {#} minutes; do it when your instructor assigns it.":
  "Para cursos que tratan la incertidumbre de medición. Esta sección no cuenta dentro de los {#} minutos; hazla cuando tu profesor la asigne.",
"The model’s indices come from the published Sellmeier formulas, which reproduce measured indices to about the fifth decimal place over the visible range (the older diamond formula less well); the reading gives them to five decimal places. Real glass varies a little from melt to melt, and its index changes with temperature (by a few parts in a million per kelvin for crown glass). The prism is assumed to be a perfect {#}° wedge. Give \\(A_C\\) and \\(B_C\\) for crown and flint with their standard errors from the fits.":
  "Los índices del modelo vienen de las fórmulas de Sellmeier publicadas, que reproducen los índices medidos hasta cerca del quinto decimal en el intervalo visible (la fórmula más antigua del diamante, no tan bien); la lectura los da con cinco decimales. El vidrio real varía un poco de una fundición a otra, y su índice cambia con la temperatura (unas pocas partes por millón por kelvin para el vidrio crown). Se supone que el prisma es una cuña perfecta de {#}°. Da \\(A_C\\) y \\(B_C\\) para el crown y el flint con sus errores estándar de los ajustes.",
"Prelab answers, a Data table copy for each material, the graphs and Cauchy fits, your table of spreads, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.":
  "Respuestas del prelaboratorio, una copia de la tabla de datos para cada material, las gráficas y ajustes de Cauchy, tu tabla de separaciones y las respuestas a las preguntas (y de Incertidumbre, si se asigna). Identifica los datos simulados.",
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
  "Rapidez de la luz en el material",
"<strong>Part {#}: white light through a prism.</strong> Press the Prism setup and click the prism to open its editor; leave the material chip on Adjustable n. Follow the white beam through the prism. Which color is bent most? Move the prism’s Rotate slider slowly (or press [ and ]) and watch the spectrum move on the far side: describe where it stops and turns back. (Nothing is recorded in the table.)":
  "<strong>Parte {#}: luz blanca a través de un prisma.</strong> Pulsa la configuración Prisma y haz clic en el prisma para abrir su editor; deja el botón de material en n ajustable. Sigue el haz blanco a través del prisma. ¿Qué color se desvía más? Mueve despacio el control Girar del prisma (o pulsa [ y ]) y observa cómo se mueve el espectro en el lado lejano: describe dónde se detiene y da la vuelta. (No se registra nada en la tabla.)",
"Wavelength λ (nm), row {#}":
  "Longitud de onda λ (nm), fila {#}",
"A pulse of white light enters a long optical fiber. Why is it longer when it comes out?":
  "Un pulso de luz blanca entra a una fibra óptica larga. ¿Por qué sale más largo?",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"Why do we see a rainbow’s red on the outside and violet on the inside, if water bends violet more?":
  "¿Por qué vemos el rojo de un arcoíris por fuera y el violeta por dentro, si el agua desvía más el violeta?",
"<strong>Part {#}: white light through a prism.</strong> In the Prism setup, follow the white beam through the prism with Adjustable n. Which color is bent most? Rotate the prism slowly and watch the spectrum move: describe where it turns back. (Nothing is recorded in the table.)":
  "<strong>Parte {#}: luz blanca a través de un prisma.</strong> En la configuración Prisma, sigue el haz blanco a través del prisma con n ajustable. ¿Qué color se desvía más? Gira el prisma lentamente y observa cómo se mueve el espectro: describe dónde se regresa. (No se registra nada en la tabla.)",
"<strong>Part {#}: real materials.</strong> Make the prism crown glass and record its index and deviation across the spectrum. Repeat for flint glass, fused silica and water.":
  "<strong>Parte {#}: materiales reales.</strong> Haz el prisma de vidrio crown y registra su índice y su desviación a lo largo del espectro. Repite con vidrio flint, sílice fundida y agua.",
"<strong>Part {#}: diamond.</strong> Make the prism diamond and record. Follow the white beam: where does it go?":
  "<strong>Parte {#}: diamante.</strong> Haz el prisma de diamante y registra. Sigue el haz blanco: ¿a dónde va?",
"<strong>Using the virtual apparatus.</strong> Select the element first: a reading records the selected element’s index at eight wavelengths, one row each. Send each material to the worksheet before clearing, so each gets its own copy of the Data table.":
  "<strong>Uso del aparato virtual.</strong> Selecciona primero el elemento: una lectura registra el índice del elemento seleccionado a ocho longitudes de onda, una fila cada una. Envía cada material a la hoja antes de borrar, para que cada uno tenga su propia copia de la tabla de datos.",
"Fill in the last column yourself for every prism row.":
  "Llena tú mismo la última columna para cada fila de prisma.",
"For each material in Part {#}, graph \\(n\\) against \\(\\lambda\\). Then graph \\(n\\) against \\(1/\\lambda^2\\) and fit a straight line: find \\(A_C\\) and \\(B_C\\). Is the Cauchy form a good fit? Which material has the largest \\(B_C\\)?":
  "Para cada material de la Parte {#}, grafica \\(n\\) en función de \\(\\lambda\\). Luego grafica \\(n\\) en función de \\(1/\\lambda^2\\) y ajusta una recta: encuentra \\(A_C\\) y \\(B_C\\). ¿La forma de Cauchy ajusta bien? ¿Qué material tiene el mayor \\(B_C\\)?",
"Type the prism rows from all your copies into one new copy of the Data table, and graph \\(\\delta\\) against \\(n\\) for them together. Is the deviation set by \\(n\\) alone, whatever the material? Use the minimum deviation formula to explain why the curve steepens as \\(n\\) grows.":
  "Escribe las filas de prisma de todas tus copias en una nueva copia de la tabla de datos, y grafica \\(\\delta\\) en función de \\(n\\) para todas juntas. ¿La desviación la fija solo \\(n\\), sea cual sea el material? Usa la fórmula de la desviación mínima para explicar por qué la curva se vuelve más empinada al crecer \\(n\\).",
"Why does a single glass lens bring red and violet light to a focus at different distances, and how does an achromatic doublet of crown and flint glass fix it?":
  "¿Por qué una sola lente de vidrio enfoca la luz roja y la violeta a distancias distintas, y cómo lo corrige un doblete acromático de vidrio crown y flint?"
});
