/* ws/convection in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/convection', {
"Sphere and air":
  "Esfera y aire",
"T - T_air (°C)":
  "T - T_air (°C)",
"ln(T - T_air) (difference in °C)":
  "ln(T - T_air) (diferencia en °C)",
"Cooling by Convection and Radiation | VirtualDemos":
  "Enfriamiento por convección y radiación | VirtualDemos",
"Cooling by Convection and Radiation":
  "Enfriamiento por convección y radiación",
"<strong>Setups in the demo:</strong> this worksheet uses the Cooling view (pick Cooling at the top of the picture). The setups in the sidebar belong to the other four worksheets.":
  "<strong>Configuraciones en la demo:</strong> esta hoja de trabajo usa la vista Enfriamiento (elige Enfriamiento en la parte de arriba de la imagen). Las configuraciones del panel lateral pertenecen a las otras cuatro hojas de trabajo.",
"A solid metal sphere hangs in a large room, with a thermocouple in it. Choose the metal, its surface (polished, or painted flat black), its diameter, its starting temperature, the room temperature and the speed of the air from a fan. Start runs the clock; {#}× speeds it up for slow runs. Changing any setting starts the run again from time zero.":
  "Una esfera metálica sólida cuelga en un cuarto grande, con un termopar dentro. Elige el metal, su superficie (pulida, o pintada de negro mate), su diámetro, su temperatura inicial, la temperatura del cuarto y la rapidez del aire de un ventilador. Iniciar pone en marcha el reloj; {#}× lo acelera para corridas lentas. Cambiar cualquier ajuste vuelve a empezar la corrida desde el tiempo cero.",
"The sphere loses heat by convection to the air and by radiation to the room’s walls, which are at the air’s temperature. In still air, warm air rising off the sphere carries heat away (natural convection); the fan blows air across it (forced convection).":
  "La esfera pierde calor por convección hacia el aire y por radiación hacia las paredes del cuarto, que están a la temperatura del aire. En aire quieto, el aire caliente que sube desde la esfera se lleva el calor (convección natural); el ventilador sopla aire sobre ella (convección forzada).",
"The convection coefficient \\(h\\) comes from standard engineering correlations for a sphere, not from a fixed number, so it changes a little as the sphere cools. The emissivities are {#} for the polished metal and {#} for the black paint.":
  "El coeficiente de convección \\(h\\) viene de correlaciones de ingeniería estándar para una esfera, no de un número fijo, así que cambia un poco a medida que la esfera se enfría. Las emisividades son {#} para el metal pulido y {#} para la pintura negra.",
"Record reading stores the time and the temperature, with the sphere, the air speed and the room temperature. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table. Record readings while the clock is paused or running.":
  "Registrar lectura guarda el tiempo y la temperatura, con la esfera, la rapidez del aire y la temperatura del cuarto. Exportar a la hoja envía las lecturas a la tabla de Datos de abajo; Borrar empieza una nueva serie, que va a una nueva copia de la tabla. Registra lecturas con el reloj en pausa o en marcha.",
"Blind hides the heat losses and the coefficients in the readouts.":
  "A ciegas oculta las pérdidas de calor y los coeficientes en las lecturas.",
"Measure how fast a hot object cools in still air and in a wind, find the convection coefficient, and find how much of the heat leaves by radiation.":
  "Mide qué tan rápido se enfría un objeto caliente en aire quieto y con viento, encuentra el coeficiente de convección, y averigua cuánto del calor sale por radiación.",
"A surface at temperature \\(T\\) in air at \\(T_\\mathrm{air}\\) loses heat by convection at a rate":
  "Una superficie a temperatura \\(T\\) en aire a \\(T_\\mathrm{air}\\) pierde calor por convección a un ritmo",
"\\[P_\\mathrm{conv} = hA\\,(T - T_\\mathrm{air}),\\]":
  "\\[P_\\mathrm{conv} = hA\\,(T - T_\\mathrm{air}),\\]",
"where \\(A\\) is the surface area and \\(h\\), the convection coefficient (in W/(m²·°C)), depends on how fast the air moves past the surface. It also radiates to its surroundings at a net rate (§{#})":
  "donde \\(A\\) es el área de la superficie y \\(h\\), el coeficiente de convección (en W/(m²·°C)), depende de qué tan rápido pasa el aire junto a la superficie. También radia hacia sus alrededores a un ritmo neto (§{#})",
"\\[P_\\mathrm{rad} = e\\sigma A\\,(T^4 - T_\\mathrm{air}^4),\\]":
  "\\[P_\\mathrm{rad} = e\\sigma A\\,(T^4 - T_\\mathrm{air}^4),\\]",
"with \\(\\sigma = 5.67\\times10^{-8}\\) W/(m²·K⁴), temperatures in kelvin, and \\(e\\) the emissivity. When \\(T - T_\\mathrm{air}\\) is small compared with the absolute temperature, this is close to \\(h_\\mathrm{rad}A\\,(T - T_\\mathrm{air})\\) with \\(h_\\mathrm{rad} = 4e\\sigma T^3\\) (\\(T\\) in kelvin, the mean of the two).":
  "con \\(\\sigma = 5.67\\times10^{-8}\\) W/(m²·K⁴), las temperaturas en kelvin, y \\(e\\) la emisividad. Cuando \\(T - T_\\mathrm{air}\\) es pequeña comparada con la temperatura absoluta, esto es cercano a \\(h_\\mathrm{rad}A\\,(T - T_\\mathrm{air})\\) con \\(h_\\mathrm{rad} = 4e\\sigma T^3\\) (\\(T\\) en kelvin, la media de las dos).",
"A small metal object has one temperature throughout, so its heat capacity \\(mc\\) loses energy at the total rate:":
  "Un objeto metálico pequeño tiene una sola temperatura en todo su volumen, así que su capacidad calorífica \\(mc\\) pierde energía al ritmo total:",
"\\[mc\\,\\frac{dT}{dt} = -(h + h_\\mathrm{rad})A\\,(T - T_\\mathrm{air}).\\]":
  "\\[mc\\,\\frac{dT}{dt} = -(h + h_\\mathrm{rad})A\\,(T - T_\\mathrm{air}).\\]",
"If the coefficients stay the same, the difference \\(T - T_\\mathrm{air}\\) dies away exponentially with time constant \\(\\tau = mc/[(h + h_\\mathrm{rad})A]\\) (Newton’s law of cooling). For a solid sphere of diameter \\(D\\) and density \\(\\rho\\), \\(m/A = \\rho D/6\\), so":
  "Si los coeficientes no cambian, la diferencia \\(T - T_\\mathrm{air}\\) decae exponencialmente con el tiempo con constante de tiempo \\(\\tau = mc/[(h + h_\\mathrm{rad})A]\\) (ley de enfriamiento de Newton). Para una esfera sólida de diámetro \\(D\\) y densidad \\(\\rho\\), \\(m/A = \\rho D/6\\), así que",
"\\[h + h_\\mathrm{rad} = \\frac{\\rho c D}{6\\tau}.\\]":
  "\\[h + h_\\mathrm{rad} = \\frac{\\rho c D}{6\\tau}.\\]",
"A graph of what against what gives a straight line for Newton’s law of cooling? What is its slope?":
  "¿Una gráfica de qué contra qué da una recta para la ley de enfriamiento de Newton? ¿Cuál es su pendiente?",
"Show that \\(m/A = \\rho D/6\\) for a solid sphere.":
  "Demuestra que \\(m/A = \\rho D/6\\) para una esfera sólida.",
"Find \\(h_\\mathrm{rad}\\) for a black surface (\\(e = 0.95\\)) at a mean temperature of {#} °C, and for a polished one (\\(e = 0.05\\)).":
  "Encuentra \\(h_\\mathrm{rad}\\) para una superficie negra (\\(e = 0.95\\)) a una temperatura media de {#} °C, y para una pulida (\\(e = 0.05\\)).",
"An aluminum sphere (\\(\\rho = 2.70\\times10^3\\) kg/m³, \\(c = 900\\) J/(kg·°C)) {#} cm across has \\(h + h_\\mathrm{rad} = 10\\) W/(m²·°C). Predict its time constant.":
  "Una esfera de aluminio (\\(\\rho = 2.70\\times10^3\\) kg/m³, \\(c = 900\\) J/(kg·°C)) de {#} cm de diámetro tiene \\(h + h_\\mathrm{rad} = 10\\) W/(m²·°C). Predice su constante de tiempo.",
"No hazards in the virtual lab. In a real one, a sphere at {#} °C burns: handle it with tongs or gloves.":
  "No hay peligros en el laboratorio virtual. En uno real, una esfera a {#} °C quema: manipúlala con pinzas o guantes.",
"<strong>Still air.</strong> Use an aluminum sphere {#} cm across, polished, starting at {#} °C, with the room at {#} °C and the fan off. Record the temperature every {#} s from {#} to {#} s.":
  "<strong>Aire quieto.</strong> Usa una esfera de aluminio de {#} cm de diámetro, pulida, que empieza a {#} °C, con el cuarto a {#} °C y el ventilador apagado. Registra la temperatura cada {#} s de {#} a {#} s.",
"<strong>With the fan.</strong> Send the readings to the worksheet and clear them, then set the fan to {#} m/s. Record every {#} s from {#} to {#} s. Repeat at {#} and {#} m/s, sending the readings to the worksheet and clearing them after each run.":
  "<strong>Con el ventilador.</strong> Envía las lecturas a la hoja de trabajo y bórralas, y luego pon el ventilador en {#} m/s. Registra cada {#} s de {#} a {#} s. Repite a {#} y {#} m/s, enviando las lecturas a la hoja de trabajo y borrándolas después de cada corrida.",
"<strong>Black sphere.</strong> Send the readings to the worksheet and clear them, then paint the sphere black and turn the fan off. Record every {#} s from {#} to {#} s. Then repeat with the fan at {#} m/s, every {#} s from {#} to {#} s.":
  "<strong>Esfera negra.</strong> Envía las lecturas a la hoja de trabajo y bórralas, y luego pinta la esfera de negro y apaga el ventilador. Registra cada {#} s de {#} a {#} s. Luego repite con el ventilador en {#} m/s, cada {#} s de {#} a {#} s.",
"<span>B</span>Sphere and air":
  "<span>B</span>Esfera y aire",
"<span>C</span>Time \\(t\\) (s)":
  "<span>C</span>Tiempo \\(t\\) (s)",
"<span>D</span>Temperature \\(T\\) (°C)":
  "<span>D</span>Temperatura \\(T\\) (°C)",
"<span>E</span>\\(T - T_\\mathrm{air}\\) (°C)":
  "<span>E</span>\\(T - T_\\mathrm{air}\\) (°C)",
"<span>F</span>\\(\\ln(T - T_\\mathrm{air})\\) (difference in °C)":
  "<span>F</span>\\(\\ln(T - T_\\mathrm{air})\\) (diferencia en °C)",
"Sphere and air, row {#}":
  "Esfera y aire, fila {#}",
"T - T_air (°C), row {#}":
  "T - T_air (°C), fila {#}",
"ln(T - T_air) (difference in °C), row {#}":
  "ln(T - T_air) (diferencia en °C), fila {#}",
"Fill in the last two columns for every run and graph \\(\\ln(T - T_\\mathrm{air})\\) against \\(t\\). Find \\(\\tau\\) from each slope.":
  "Llena las últimas dos columnas para cada corrida y grafica \\(\\ln(T - T_\\mathrm{air})\\) contra \\(t\\). Encuentra \\(\\tau\\) a partir de cada pendiente.",
"For each run, find \\(h + h_\\mathrm{rad}\\) from \\(\\tau\\). For the polished sphere radiation is small; subtract \\(h_\\mathrm{rad}\\) for \\(e = 0.05\\) and report \\(h\\) for still air and each fan speed.":
  "Para cada corrida, encuentra \\(h + h_\\mathrm{rad}\\) a partir de \\(\\tau\\). Para la esfera pulida la radiación es pequeña; resta \\(h_\\mathrm{rad}\\) para \\(e = 0.05\\) y reporta \\(h\\) para aire quieto y para cada rapidez del ventilador.",
"How does \\(h\\) change with the air speed? Is it proportional to the speed, to its square root, or neither? Use your four values.":
  "¿Cómo cambia \\(h\\) con la rapidez del aire? ¿Es proporcional a la rapidez, a su raíz cuadrada, o a ninguna? Usa tus cuatro valores.",
"Compare the black and polished spheres in still air. Find the radiation coefficient from the difference and compare it with \\(4e\\sigma T^3\\) for \\(e = 0.95\\) at the run’s mean temperature.":
  "Compara las esferas negra y pulida en aire quieto. Encuentra el coeficiente de radiación a partir de la diferencia y compáralo con \\(4e\\sigma T^3\\) para \\(e = 0.95\\) a la temperatura media de la corrida.",
"What fraction of the heat leaves by radiation from the black sphere in still air, and in the {#} m/s wind?":
  "¿Qué fracción del calor sale por radiación de la esfera negra en aire quieto, y con el viento de {#} m/s?",
"Look at the residuals for the polished sphere in still air. Are they random, or curved? What does that say about whether \\(h\\) stayed constant as the sphere cooled?":
  "Observa los residuos de la esfera pulida en aire quieto. ¿Son aleatorios o curvos? ¿Qué dice eso sobre si \\(h\\) se mantuvo constante mientras la esfera se enfriaba?",
"The thermocouple reads to {#} °C with no noise or lag. Near the end of a run \\(T - T_\\mathrm{air}\\) is small, so its logarithm is the least certain point: estimate the effect of {#} °C at the last reading of each run. The model uses correlations for \\(h\\) that fit real measurements to within about {#} to {#}%, and a real fan’s stream is turbulent, so treat your \\(h\\) values as typical, not exact.":
  "El termopar lee con precisión de {#} °C sin ruido ni retraso. Cerca del final de una corrida \\(T - T_\\mathrm{air}\\) es pequeña, así que su logaritmo es el punto menos seguro: estima el efecto de {#} °C en la última lectura de cada corrida. El modelo usa correlaciones para \\(h\\) que se ajustan a mediciones reales con una diferencia de entre {#} y {#}%, y la corriente de un ventilador real es turbulenta, así que trata tus valores de \\(h\\) como típicos, no exactos.",
"Why does blowing on hot soup cool it faster? Answer in terms of \\(h\\).":
  "¿Por qué soplarle a una sopa caliente la enfría más rápido? Responde en términos de \\(h\\).",
"The inside of a vacuum flask is silvered and the space between its walls is empty. Which way of losing heat does each feature stop?":
  "El interior de un termo está plateado y el espacio entre sus paredes está vacío. ¿Qué forma de perder calor detiene cada característica?",
"On a calm day, radiation and convection carry off similar amounts of heat from your skin. Why does a cold wind feel so much colder than calm air at the same temperature?":
  "En un día sin viento, la radiación y la convección se llevan cantidades parecidas de calor de tu piel. ¿Por qué un viento frío se siente mucho más frío que el aire en calma a la misma temperatura?",
"In orbit, with no gravity to make warm air rise, how would a hot sphere in a space station’s still air cool, compared with on Earth?":
  "En órbita, sin gravedad que haga subir el aire caliente, ¿cómo se enfriaría una esfera caliente en el aire quieto de una estación espacial, comparado con la Tierra?",
"A household “radiator” at {#} °C: does it heat a room mostly by radiation or by convection? Use your results.":
  "Un “radiador” doméstico a {#} °C: ¿calienta un cuarto principalmente por radiación o por convección? Usa tus resultados.",
"Prelab answers, the table copies with their graphs and fits, your values of \\(\\tau\\), \\(h\\) and the radiation coefficient with comparisons, the radiation fractions, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, las copias de la tabla con sus gráficas y ajustes, tus valores de \\(\\tau\\), \\(h\\) y del coeficiente de radiación con comparaciones, las fracciones de radiación, y las respuestas a las preguntas. Identifica los datos simulados.",
"Temperature of the object, absolute":
  "Temperatura absoluta del objeto",
"Mean of the object's and the air's absolute temperatures":
  "Media de las temperaturas absolutas del objeto y del aire",
"Temperature of the air, absolute":
  "Temperatura absoluta del aire",
"Surface area":
  "Área de la superficie",
"Diameter of the sphere":
  "Diámetro de la esfera",
"Rate of heat loss by convection":
  "Ritmo de pérdida de calor por convección",
"Net rate of heat loss by radiation":
  "Ritmo neto de pérdida de calor por radiación",
"Temperature of the object":
  "Temperatura del objeto",
"Temperature of the air":
  "Temperatura del aire",
"Specific heat of the metal":
  "Calor específico del metal",
"Emissivity of the surface":
  "Emisividad de la superficie",
"Convection coefficient":
  "Coeficiente de convección",
"Radiation coefficient, 4eσT³":
  "Coeficiente de radiación, 4eσT³",
"Mass of the object":
  "Masa del objeto",
"Density of the metal":
  "Densidad del metal",
"Stefan–Boltzmann constant":
  "Constante de Stefan–Boltzmann",
"{#}… × {#}⁻⁸ W/(m²·K⁴), exact":
  "{#}… × {#}⁻⁸ W/(m²·K⁴), exacta",
"Time constant of the cooling":
  "Constante de tiempo del enfriamiento",
"Temperature and Heat (Cooling)":
  "Temperatura y calor (Enfriamiento)"
});
