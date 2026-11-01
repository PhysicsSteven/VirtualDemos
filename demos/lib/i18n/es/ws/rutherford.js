/* ws/rutherford in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/rutherford', {
"Target and beam":
  "Blanco y haz",
"Angle θ (°)":
  "Ángulo θ (°)",
"Counts N":
  "Conteos N",
"Solid angle ΔΩ (sr)":
  "Ángulo sólido ΔΩ (sr)",
"ln sin(θ/{#})":
  "ln sin(θ/{#})",
"ln(N/ΔΩ)":
  "ln(N/ΔΩ)",
"Rutherford Scattering | VirtualDemos":
  "Dispersión de Rutherford | VirtualDemos",
"Rutherford Scattering":
  "Dispersión de Rutherford",
"<strong>Setups in the demo:</strong> One alpha, gold; Geiger–Marsden beam; Head on; Plum pudding; Aluminum, high energy.":
  "<strong>Configuraciones en la demo:</strong> Una alfa, oro; Haz de Geiger–Marsden; De frente; Pudín de pasas; Aluminio, alta energía.",
"Alpha particles (charge \\(+2e\\), kinetic energy \\(K\\) from {#} to {#} MeV) are fired at a target of gold, silver, aluminum or an atomic number of your choice. With the nuclear atom each alpha follows the exact Coulomb hyperbola past one nucleus, which is held fixed; with the plum pudding atom it crosses a foil of Thomson atoms.":
  "Se disparan partículas alfa (carga \\(+2e\\), energía cinética \\(K\\) de {#} a {#} MeV) contra un blanco de oro, plata, aluminio o un número atómico que tú elijas. Con el átomo nuclear cada alfa sigue la hipérbola de Coulomb exacta al pasar junto a un núcleo, que se mantiene fijo; con el átomo de pudín de pasas atraviesa una lámina de átomos de Thomson.",
"One alpha mode fires a single alpha at the impact parameter \\(b\\) you set and reads its deflection \\(\\theta\\).":
  "El modo Una alfa dispara una sola alfa con el parámetro de impacto \\(b\\) que fijas y lee su desviación \\(\\theta\\).",
"Beam mode fires alphas spread evenly over a disk of radius \\(b_\\mathrm{max}\\) (the beam radius) at up to {#} per second, and counts them in {#}° bins of \\(\\theta\\). The plot shows the counts per bin or per steradian. Each run is random, so two runs never give the same counts.":
  "El modo de haz dispara alfas repartidas uniformemente sobre un disco de radio \\(b_\\mathrm{max}\\) (el radio del haz) a hasta {#} por segundo, y las cuenta en intervalos de {#}° de \\(\\theta\\). La gráfica muestra los conteos por intervalo o por estereorradián. Cada corrida es aleatoria, así que dos corridas nunca dan los mismos conteos.",
"The beam radius readout gives \\(b_\\mathrm{max}\\) and the smallest angle \\(\\theta\\) reached by alphas at the beam’s edge. Bins below that angle are only partly filled, so Record reading leaves them out.":
  "La lectura del radio del haz da \\(b_\\mathrm{max}\\) y el menor ángulo \\(\\theta\\) que alcanzan las alfas en el borde del haz. Los intervalos por debajo de ese ángulo solo se llenan en parte, así que Registrar lectura los omite.",
"Record reading stores one row for each {#}° bin: the target, \\(K\\), the number of alphas fired, \\(b_\\mathrm{max}\\), the bin’s middle angle, its counts and its solid angle \\(\\Delta\\Omega = 2\\pi(\\cos\\theta_1 - \\cos\\theta_2)\\). Export to worksheet sends the readings to the Data table below; Clear (under Readings) starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda una fila para cada intervalo de {#}°: el blanco, \\(K\\), el número de alfas disparadas, \\(b_\\mathrm{max}\\), el ángulo central del intervalo, sus conteos y su ángulo sólido \\(\\Delta\\Omega = 2\\pi(\\cos\\theta_1 - \\cos\\theta_2)\\). Exportar a la hoja envía las lecturas a la tabla de Datos de abajo; Borrar (en Lecturas) empieza una nueva serie, que va a una nueva copia de la tabla.",
"Blind (under Projectile) hides the head on distance \\(D\\), the closest approach, the expected counts, the fit to Rutherford and the Rutherford curve on the plot.":
  "A ciegas (en Proyectil) oculta la distancia de frente \\(D\\), el máximo acercamiento, los conteos esperados, el ajuste a Rutherford y la curva de Rutherford en la gráfica.",
"Left out: the recoil of the nucleus (shown in a readout only), the strong force when an alpha reaches the nucleus, and the many small deflections by the electrons and distant nuclei of a real foil.":
  "Se omiten: el retroceso del núcleo (que solo se muestra en una lectura), la fuerza fuerte cuando una alfa llega al núcleo, y las muchas desviaciones pequeñas por los electrones y los núcleos lejanos de una lámina real.",
"Count alphas scattered by gold and silver nuclei at angles from {#}° to {#}°, test Rutherford’s prediction that the count per solid angle falls as \\(1/\\sin^4(\\theta/2)\\), and find the charge of each nucleus from the size of the scattering.":
  "Cuenta las alfas dispersadas por núcleos de oro y de plata a ángulos de {#}° a {#}°, pon a prueba la predicción de Rutherford de que el conteo por ángulo sólido disminuye como \\(1/\\sin^4(\\theta/2)\\), y encuentra la carga de cada núcleo a partir del tamaño de la dispersión.",
"Rutherford ({#}) proposed that the positive charge of an atom sits in a tiny nucleus (§§{#}, {#}). An alpha of kinetic energy \\(K\\) heading straight for a nucleus of charge \\(Ze\\) stops at the head on distance":
  "Rutherford ({#}) propuso que la carga positiva de un átomo está en un núcleo diminuto (§§{#}, {#}). Una alfa de energía cinética \\(K\\) que va directo hacia un núcleo de carga \\(Ze\\) se detiene a la distancia de frente",
"\\[D = \\frac{zZe^2}{4\\pi\\varepsilon_0 K}, \\qquad \\frac{e^2}{4\\pi\\varepsilon_0} = 1.440\\ \\text{MeV·fm},\\ z = 2 .\\]":
  "\\[D = \\frac{zZe^2}{4\\pi\\varepsilon_0 K}, \\qquad \\frac{e^2}{4\\pi\\varepsilon_0} = 1.440\\ \\text{MeV·fm},\\ z = 2 .\\]",
"An alpha passing at impact parameter \\(b\\) is turned through \\(\\theta\\) with \\(\\tan(\\theta/2) = D/2b\\). If alphas arrive spread evenly over a disk of radius \\(b_\\mathrm{max}\\), the fraction turned into a small solid angle \\(\\Delta\\Omega\\) at \\(\\theta\\) is \\((d\\sigma/d\\Omega)\\,\\Delta\\Omega/\\pi b_\\mathrm{max}^2\\), with Rutherford’s cross section":
  "Una alfa que pasa con parámetro de impacto \\(b\\) se desvía un ángulo \\(\\theta\\) con \\(\\tan(\\theta/2) = D/2b\\). Si las alfas llegan repartidas uniformemente sobre un disco de radio \\(b_\\mathrm{max}\\), la fracción desviada hacia un ángulo sólido pequeño \\(\\Delta\\Omega\\) en \\(\\theta\\) es \\((d\\sigma/d\\Omega)\\,\\Delta\\Omega/\\pi b_\\mathrm{max}^2\\), con la sección eficaz de Rutherford",
"\\[\\frac{d\\sigma}{d\\Omega} = \\frac{(D/4)^2}{\\sin^4(\\theta/2)} .\\]":
  "\\[\\frac{d\\sigma}{d\\Omega} = \\frac{(D/4)^2}{\\sin^4(\\theta/2)} .\\]",
"So for \\(N_\\mathrm{fired}\\) alphas the count \\(N\\) in a bin of solid angle \\(\\Delta\\Omega\\) obeys":
  "Así que para \\(N_\\mathrm{fired}\\) alfas el conteo \\(N\\) en un intervalo de ángulo sólido \\(\\Delta\\Omega\\) cumple",
"\\[\\ln\\frac{N}{\\Delta\\Omega} = \\ln\\frac{N_\\mathrm{fired}\\,D^2}{16\\pi b_\\mathrm{max}^2} - 4\\ln\\sin\\frac{\\theta}{2} .\\]":
  "\\[\\ln\\frac{N}{\\Delta\\Omega} = \\ln\\frac{N_\\mathrm{fired}\\,D^2}{16\\pi b_\\mathrm{max}^2} - 4\\ln\\sin\\frac{\\theta}{2} .\\]",
"A graph of \\(\\ln(N/\\Delta\\Omega)\\) against \\(\\ln\\sin(\\theta/2)\\) is a straight line of slope −{#}, and its intercept gives \\(D\\), and from \\(D\\) the charge \\(Z\\).":
  "Una gráfica de \\(\\ln(N/\\Delta\\Omega)\\) contra \\(\\ln\\sin(\\theta/2)\\) es una recta de pendiente −{#}, y su ordenada al origen da \\(D\\), y a partir de \\(D\\) la carga \\(Z\\).",
"Find \\(D\\) for a {#} MeV alpha and a gold nucleus (\\(Z = 79\\)). Compare it with the radius of the gold nucleus, \\(1.2\\ \\text{fm} \\times 197^{1/3}\\).":
  "Encuentra \\(D\\) para una alfa de {#} MeV y un núcleo de oro (\\(Z = 79\\)). Compáralo con el radio del núcleo de oro, \\(1.2\\ \\text{fm} \\times 197^{1/3}\\).",
"At what impact parameter, in terms of \\(D\\), is an alpha turned through {#}°?":
  "¿Con qué parámetro de impacto, en términos de \\(D\\), se desvía una alfa {#}°?",
"By what factor should the count per steradian at {#}° exceed that at {#}°?":
  "¿En qué factor debería el conteo por estereorradián a {#}° superar al de {#}°?",
"Why does a uniform sphere of positive charge (Thomson’s atom) never turn an alpha back?":
  "¿Por qué una esfera uniforme de carga positiva (el átomo de Thomson) nunca hace regresar una alfa?",
"None for the virtual apparatus. Real alpha sources are sealed and must not be touched or opened.":
  "Ninguno para el aparato virtual. Las fuentes reales de alfas están selladas y no deben tocarse ni abrirse.",
"Turn Blind on before you start.":
  "Activa A ciegas antes de empezar.",
"<strong>Gold.</strong> Start with the Geiger–Marsden beam setup (gold, {#} MeV). Clear the counts, set the rate to its highest, and let the beam run until at least {#} {#} alphas have been fired. Pause, write down the number fired and the beam radius, and record the counts.":
  "<strong>Oro.</strong> Empieza con la configuración Haz de Geiger–Marsden (oro, {#} MeV). Borra los conteos, pon la tasa al máximo y deja correr el haz hasta que se hayan disparado al menos {#} {#} alfas. Pausa, anota el número disparado y el radio del haz, y registra los conteos.",
"<strong>Silver.</strong> Clear the readings and the counts and choose silver. The beam radius changes with the target, so set it back to the value you used for gold. Fire at least {#} {#} alphas again and record the counts. Send this run to a new copy of the table.":
  "<strong>Plata.</strong> Borra las lecturas y los conteos y elige plata. El radio del haz cambia con el blanco, así que regrésalo al valor que usaste para el oro. Dispara de nuevo al menos {#} {#} alfas y registra los conteos. Envía esta corrida a una nueva copia de la tabla.",
"<strong>Plum pudding.</strong> Choose the Plum pudding setup and run the beam. Write down the largest angle any alpha reaches and how many pass {#}°.":
  "<strong>Pudín de pasas.</strong> Elige la configuración Pudín de pasas y corre el haz. Anota el mayor ángulo que alcanza cualquier alfa y cuántas pasan de {#}°.",
"<strong>Aluminum.</strong> Choose the Aluminum, high energy setup and switch to the beam. Note above which angle the alpha reaches the nucleus.":
  "<strong>Aluminio.</strong> Elige la configuración Aluminio, alta energía y cambia al haz. Anota por encima de qué ángulo la alfa llega al núcleo.",
"<span>B</span>Target and beam":
  "<span>B</span>Blanco y haz",
"<span>C</span>Angle θ (°)":
  "<span>C</span>Ángulo θ (°)",
"<span>D</span>Counts N":
  "<span>D</span>Conteos N",
"<span>E</span>Solid angle ΔΩ (sr)":
  "<span>E</span>Ángulo sólido ΔΩ (sr)",
"<span>G</span>ln sin(θ/{#})":
  "<span>G</span>ln sin(θ/{#})",
"<span>H</span>ln(N/ΔΩ)":
  "<span>H</span>ln(N/ΔΩ)",
"Target and beam, row {#}":
  "Blanco y haz, fila {#}",
"Angle θ (°), row {#}":
  "Ángulo θ (°), fila {#}",
"Counts N, row {#}":
  "Conteos N, fila {#}",
"Solid angle ΔΩ (sr), row {#}":
  "Ángulo sólido ΔΩ (sr), fila {#}",
"N/ΔΩ ({#}/sr), row {#}":
  "N/ΔΩ ({#}/sr), fila {#}",
"ln sin(θ/{#}), row {#}":
  "ln sin(θ/{#}), fila {#}",
"ln(N/ΔΩ), row {#}":
  "ln(N/ΔΩ), fila {#}",
"For gold, graph \\(\\ln(N/\\Delta\\Omega)\\) against \\(\\ln\\sin(\\theta/2)\\), leaving out bins with fewer than {#} counts. Give the slope with its uncertainty and compare with −{#}.":
  "Para el oro, grafica \\(\\ln(N/\\Delta\\Omega)\\) contra \\(\\ln\\sin(\\theta/2)\\), omitiendo los intervalos con menos de {#} conteos. Da la pendiente con su incertidumbre y compárala con −{#}.",
"From the intercept find \\(D\\) for gold, then \\(Z\\). Compare with {#}.":
  "A partir de la ordenada al origen encuentra \\(D\\) para el oro, y luego \\(Z\\). Compara con {#}.",
"Do the same for silver and compare its \\(Z\\) with {#}. With the same beam radius, the silver intercept minus the gold intercept is \\(2\\ln(Z_\\mathrm{Ag}/Z_\\mathrm{Au}) + \\ln(N_\\mathrm{Ag}/N_\\mathrm{Au})\\), where \\(N_\\mathrm{Ag}\\) and \\(N_\\mathrm{Au}\\) are the numbers of alphas fired. Find the ratio of the charges from the intercepts alone and compare with {#}/{#}.":
  "Haz lo mismo para la plata y compara su \\(Z\\) con {#}. Con el mismo radio del haz, la ordenada al origen de la plata menos la del oro es \\(2\\ln(Z_\\mathrm{Ag}/Z_\\mathrm{Au}) + \\ln(N_\\mathrm{Ag}/N_\\mathrm{Au})\\), donde \\(N_\\mathrm{Ag}\\) y \\(N_\\mathrm{Au}\\) son los números de alfas disparadas. Encuentra la razón de las cargas solo a partir de las ordenadas al origen y compárala con {#}/{#}.",
"Look at the residuals. Where do the points scatter most, and why?":
  "Observa los residuos. ¿Dónde se dispersan más los puntos, y por qué?",
"What did the plum pudding atom give? Would Geiger and Marsden have seen any alphas turned back?":
  "¿Qué dio el átomo de pudín de pasas? ¿Habrían visto Geiger y Marsden alguna alfa regresar?",
"The count in a bin fluctuates by about \\(\\sqrt{N}\\), so \\(\\ln N\\) is uncertain by about \\(1/\\sqrt{N}\\). Find that uncertainty for your bins near {#}°, {#}° and {#}°, and compare with the residuals. How does the counting statistics limit your values of \\(Z\\)?":
  "El conteo en un intervalo fluctúa en unos \\(\\sqrt{N}\\), así que \\(\\ln N\\) tiene una incertidumbre de unos \\(1/\\sqrt{N}\\). Encuentra esa incertidumbre para tus intervalos cerca de {#}°, {#}° y {#}°, y compárala con los residuos. ¿Cómo limita la estadística de conteo tus valores de \\(Z\\)?",
"Why do so few alphas turn through large angles, when every one of them passes a nucleus?":
  "¿Por qué tan pocas alfas se desvían ángulos grandes, si cada una de ellas pasa junto a un núcleo?",
"Rutherford’s formula depends on \\(Z^2\\) and \\(1/K^2\\). Why?":
  "La fórmula de Rutherford depende de \\(Z^2\\) y de \\(1/K^2\\). ¿Por qué?",
"For aluminum at {#} MeV, alphas with small impact parameters reach the nucleus. How would the real counts at large angles differ from Rutherford’s formula, and what did this tell physicists about the size of nuclei?":
  "Para el aluminio a {#} MeV, las alfas con parámetros de impacto pequeños llegan al núcleo. ¿Cómo diferirían los conteos reales a ángulos grandes de la fórmula de Rutherford, y qué les dijo esto a los físicos sobre el tamaño de los núcleos?",
"Why does the size of \\(D\\) compared with the nuclear radius matter for using alphas to probe the atom?":
  "¿Por qué importa el tamaño de \\(D\\) comparado con el radio nuclear para usar alfas como sonda del átomo?",
"How does this experiment support the planetary picture of the atom that Bohr’s model starts from, and what problem does that picture raise?":
  "¿Cómo apoya este experimento la imagen planetaria del átomo de la que parte el modelo de Bohr, y qué problema plantea esa imagen?",
"Prelab answers, the table copies with their graphs and fits, the slopes, \\(D\\) and \\(Z\\) for each target with uncertainties, the plum pudding and aluminum notes, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, las copias de la tabla con sus gráficas y ajustes, las pendientes, \\(D\\) y \\(Z\\) para cada blanco con incertidumbres, las notas del pudín de pasas y del aluminio, y las respuestas a las preguntas. Identifica los datos simulados.",
"Head on distance of closest approach":
  "Distancia de máximo acercamiento de frente",
"Kinetic energy of the alpha":
  "Energía cinética de la alfa",
"Count in a bin":
  "Conteo en un intervalo",
"Number of silver alphas fired":
  "Número de alfas disparadas contra la plata",
"Number of gold alphas fired":
  "Número de alfas disparadas contra el oro",
"Number of alphas fired":
  "Número de alfas disparadas",
"Solid angle (ΔΩ: the solid angle of a bin)":
  "Ángulo sólido (ΔΩ: el ángulo sólido de un intervalo)",
"Charge number of the nucleus":
  "Número de carga del núcleo",
"Charge number of silver, {#}":
  "Número de carga de la plata, {#}",
"Charge number of gold, {#}":
  "Número de carga del oro, {#}",
"Impact parameter":
  "Parámetro de impacto",
"Beam radius":
  "Radio del haz",
"Cross section (dσ/dΩ: per unit solid angle)":
  "Sección eficaz (dσ/dΩ: por unidad de ángulo sólido)",
"Scattering angle":
  "Ángulo de dispersión",
"Lower edge of the angle bin":
  "Borde inferior del intervalo de ángulo",
"Upper edge of the angle bin":
  "Borde superior del intervalo de ángulo",
"Charge number of the alpha, {#}":
  "Número de carga de la alfa, {#}"
});
