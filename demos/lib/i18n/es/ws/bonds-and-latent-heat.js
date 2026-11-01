/* ws/bonds-and-latent-heat in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/bonds-and-latent-heat', {
"Heat added Q (kJ/mol)":
  "Calor añadido Q (kJ/mol)",
"Bond energy U (kJ/mol)":
  "Energía de enlace U (kJ/mol)",
"Solid (%)":
  "Sólido (%)",
"Liquid (%)":
  "Líquido (%)",
"Vapor (%)":
  "Vapor (%)",
"Bonds, Temperature and Latent Heat | VirtualDemos":
  "Enlaces, temperatura y calor latente | VirtualDemos",
"Bonds, Temperature and Latent Heat":
  "Enlaces, temperatura y calor latente",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §{#}, with §§{#}–{#} for temperature and heat capacity. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §{#}, con las §§{#}–{#} para temperatura y capacidad calorífica. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Heat a crystal; Higher pressure; Cool a vapor (Atoms view, this worksheet); Ice to steam; Boil ethanol (Beaker view, the first worksheet).":
  "<strong>Configuraciones en la demo:</strong> Calentar un cristal; Presión más alta; Enfriar un vapor (vista Átomos, esta hoja de trabajo); Del hielo al vapor; Hervir etanol (vista Vaso de precipitados, la primera hoja de trabajo).",
"The Atoms view is a simulation of {#} argon atoms. Each pair attracts at a distance and repels when the atoms touch (the Lennard-Jones potential, with argon’s bond strength and size). Newton’s second law moves every atom in steps of about {#} fs, so a whole run lasts a few nanoseconds.":
  "La vista Átomos es una simulación de {#} átomos de argón. Cada par se atrae a distancia y se repele cuando los átomos se tocan (el potencial de Lennard-Jones, con la intensidad y el tamaño de enlace del argón). La segunda ley de Newton mueve cada átomo en pasos de unos {#} fs, así que una corrida completa dura unos cuantos nanosegundos.",
"The atoms sit in a column under a free piston that presses down with a fixed pressure ({#} atm unless you change it, anywhere from {#} to {#} atm). The piston is idealized: it pushes with exactly the pressure set on its gauge, without weights. The heater in the floor adds energy to the atoms touching it, so heat flows up through the sample as it does in a pot on a stove. The floor attracts the atoms weakly, like a real metal surface.":
  "Los átomos están en una columna bajo un pistón libre que presiona hacia abajo con una presión fija ({#} atm a menos que la cambies, desde {#} hasta {#} atm). El pistón es idealizado: empuja exactamente con la presión fijada en su manómetro, sin pesas. El calentador del piso añade energía a los átomos que lo tocan, así que el calor fluye hacia arriba a través de la muestra como en una olla sobre la estufa. El piso atrae débilmente a los átomos, como una superficie metálica real.",
"The sample repeats sideways: an atom leaving one side comes back in at the other, as if the column were part of a wide sheet.":
  "La muestra se repite lateralmente: un átomo que sale por un lado vuelve a entrar por el otro, como si la columna fuera parte de una lámina ancha.",
"<strong>Temperature</strong> comes from the average kinetic energy of the atoms. <strong>Bond energy U</strong> is their potential energy, which is negative because bound atoms have less energy than separated ones. Both are averages over the last {#} ns. <strong>Heat added Q</strong> counts every joule the heater has delivered. All three are per mole of atoms.":
  "La <strong>temperatura</strong> viene de la energía cinética media de los átomos. La <strong>energía de enlace U</strong> es su energía potencial, que es negativa porque los átomos enlazados tienen menos energía que los separados. Ambas son promedios sobre los últimos {#} ns. El <strong>calor añadido Q</strong> cuenta cada joule que ha entregado el calentador. Las tres son por mol de átomos.",
"The panel <em>Where the heat went</em> splits the heat added since the start into the kinetic energy of the atoms, their bond energy and the work done lifting the piston, \\(P\\,\\Delta V\\).":
  "El panel <em>Adónde fue el calor</em> divide el calor añadido desde el inicio en la energía cinética de los átomos, su energía de enlace y el trabajo hecho al levantar el pistón, \\(P\\,\\Delta V\\).",
"The phase shares sort the atoms by their surroundings: an atom with three neighbors or fewer counts as vapor, an atom whose neighbors sit in the same ordered pattern as its own counts as solid, and the rest as liquid.":
  "Las fracciones de fase clasifican a los átomos según su entorno: un átomo con tres vecinos o menos cuenta como vapor, un átomo cuyos vecinos están en el mismo patrón ordenado que los suyos cuenta como sólido, y el resto como líquido.",
"Color atoms by Speed shows each atom’s speed; by Phase shows the solid, liquid and vapor atoms. Show bonds draws a line between atoms closer than {#} nm. The flat view shows a slice {#} nm thick through the middle of the sample; the 3D view shows every atom and can be turned and zoomed.":
  "Colorear los átomos por Rapidez muestra la rapidez de cada átomo; por Fase muestra los átomos sólidos, líquidos y de vapor. Mostrar enlaces dibuja una línea entre átomos a menos de {#} nm. La vista plana muestra un corte de {#} nm de grosor por el centro de la muestra; la vista 3D muestra todos los átomos y se puede girar y acercar.",
"The heater power slider sets how fast heat goes in. A slower heater gives flatter plateaus but a longer run. Cool takes heat out instead.":
  "El deslizador de potencia del calentador fija qué tan rápido entra el calor. Un calentador más lento da mesetas más planas pero una corrida más larga. Enfriar saca calor en lugar de meterlo.",
"Real argon melts at {#} K and boils at {#} K at {#} atm. The setups use {#} atm so that the vapor stays near the sample (at {#} atm it would need more than ten times the room), and a liquid boils hotter at a higher pressure, so the sample boils well above {#} K. At lower pressures the picture squeezes heights above {#} nm, marked by a dashed line, so the piston stays in view; Column height gives the true height. The sample is also only a few nanometers thick, and each atom feels only the atoms within {#} nm of it, so it is held together less firmly than a flask of argon: it melts below {#} K and its latent heats are smaller. A small sample can also overheat for a moment before the first vapor forms, then settle back; real liquids do this too (superheating).":
  "El argón real se funde a {#} K y hierve a {#} K a {#} atm. Las configuraciones usan {#} atm para que el vapor se quede cerca de la muestra (a {#} atm necesitaría más de diez veces el espacio), y un líquido hierve a mayor temperatura a mayor presión, así que la muestra hierve muy por encima de {#} K. A presiones más bajas la imagen comprime las alturas por encima de {#} nm, marcadas con una línea punteada, para que el pistón quede a la vista; Altura de la columna da la altura real. La muestra además tiene solo unos cuantos nanómetros de grosor, y cada átomo siente solo a los átomos a menos de {#} nm de él, así que está menos firmemente unida que un matraz de argón: se funde por debajo de {#} K y sus calores latentes son menores. Una muestra pequeña también puede sobrecalentarse un momento antes de que se forme el primer vapor, y luego volver a asentarse; los líquidos reales también lo hacen (sobrecalentamiento).",
"Capture reading stores the readings shown. Export to worksheet sends them to the Data table below; Clear starts a new series, which goes into a new copy of the table.":
  "Capturar lectura guarda las lecturas mostradas. Exportar a la hoja las envía a la tabla de datos de abajo; Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"Blind hides the heating curve and the energy split.":
  "A ciegas oculta la curva de calentamiento y la división de la energía.",
"Follow a crystal of argon atoms from solid to vapor, find where the heat goes while it melts and boils, and measure the melting and boiling temperatures, the latent heats and the heat capacity of the solid.":
  "Sigue un cristal de átomos de argón de sólido a vapor, descubre adónde va el calor mientras se funde y hierve, y mide las temperaturas de fusión y de ebullición, los calores latentes y la capacidad calorífica del sólido.",
"The temperature of a sample measures the average kinetic energy of its atoms (§{#}). For atoms moving in three dimensions,":
  "La temperatura de una muestra mide la energía cinética media de sus átomos (§{#}). Para átomos que se mueven en tres dimensiones,",
"\\[\\overline{KE} = \\tfrac32 kT \\;\\text{per atom} = \\tfrac32 RT \\;\\text{per mole}.\\]":
  "\\[\\overline{KE} = \\tfrac32 kT \\;\\text{per atom} = \\tfrac32 RT \\;\\text{per mole}.\\]",
"The atoms also have potential energy \\(U\\) from the bonds between them. At constant pressure the heat added goes into both, and into the work done pushing back the surroundings (the first law):":
  "Los átomos también tienen energía potencial \\(U\\) por los enlaces entre ellos. A presión constante, el calor añadido va a ambas, y al trabajo hecho al empujar los alrededores (la primera ley):",
"\\[Q = \\Delta KE + \\Delta U + P\\,\\Delta V.\\]":
  "\\[Q = \\Delta KE + \\Delta U + P\\,\\Delta V.\\]",
"The molar heat capacity is \\(C = dQ/dT\\). For a classical solid, each atom vibrating in three directions, it is close to \\(3R = 24.9\\) J/(mol·K) (§{#}). The latent heat per mole is the heat taken while the temperature holds still during a phase change (§{#}).":
  "La capacidad calorífica molar es \\(C = dQ/dT\\). Para un sólido clásico, con cada átomo vibrando en tres direcciones, es cercana a \\(3R = 24.9\\) J/(mol·K) (§{#}). El calor latente por mol es el calor que se absorbe mientras la temperatura se mantiene fija durante un cambio de fase (§{#}).",
"If the temperature stays the same while a solid melts, what happens to the average kinetic energy of its atoms? Where must the heat go?":
  "Si la temperatura se mantiene igual mientras un sólido se funde, ¿qué pasa con la energía cinética media de sus átomos? ¿Adónde debe ir el calor?",
"Predict whether the bond energy \\(U\\) rises or falls as the sample melts, and as it boils.":
  "Predice si la energía de enlace \\(U\\) sube o baja cuando la muestra se funde, y cuando hierve.",
"Which do you expect to need more heat per mole, melting or boiling? Think about how many bonds each atom has in a solid, a liquid and a vapor.":
  "¿Qué esperas que necesite más calor por mol, la fusión o la ebullición? Piensa en cuántos enlaces tiene cada átomo en un sólido, un líquido y un vapor.",
"Why does boiling at constant pressure also do work on the piston, when melting does almost none?":
  "¿Por qué hervir a presión constante también hace trabajo sobre el pistón, cuando fundir no hace casi nada?",
"<strong>Crystal to vapor.</strong> Start with the Heat a crystal setup and run it until the sample is all vapor. Capture a reading about every {#} kJ/mol of heat added, and more often while the temperature holds still. You may pause to capture. Watch the bonds and the phase shares as you go, and note what the atoms look like on each part of the curve.":
  "<strong>De cristal a vapor.</strong> Empieza con la configuración Calentar un cristal y córrela hasta que toda la muestra sea vapor. Captura una lectura más o menos cada {#} kJ/mol de calor añadido, y más seguido mientras la temperatura se mantiene fija. Puedes pausar para capturar. Observa los enlaces y las fracciones de fase conforme avanzas, y anota cómo se ven los átomos en cada parte de la curva.",
"<strong>Higher pressure.</strong> Repeat with the Higher pressure setup ({#} atm). Capture readings across the boiling plateau, and send them to the worksheet as a second copy of the table.":
  "<strong>Presión más alta.</strong> Repite con la configuración Presión más alta ({#} atm). Captura lecturas a lo largo de la meseta de ebullición, y envíalas a la hoja como una segunda copia de la tabla.",
"<strong>Cooling.</strong> Run Cool a vapor and watch the vapor condense on the cold floor. Note the temperature while it condenses, and whether the liquid freezes.":
  "<strong>Enfriamiento.</strong> Corre Enfriar un vapor y observa cómo el vapor se condensa sobre el piso frío. Anota la temperatura mientras se condensa, y si el líquido se congela.",
"<span>B</span>Heat added \\(Q\\) (kJ/mol)":
  "<span>B</span>Calor añadido \\(Q\\) (kJ/mol)",
"<span>C</span>Temperature \\(T\\) (K)":
  "<span>C</span>Temperatura \\(T\\) (K)",
"<span>D</span>Bond energy \\(U\\) (kJ/mol)":
  "<span>D</span>Energía de enlace \\(U\\) (kJ/mol)",
"<span>E</span>Solid (%)":
  "<span>E</span>Sólido (%)",
"<span>F</span>Liquid (%)":
  "<span>F</span>Líquido (%)",
"<span>G</span>Vapor (%)":
  "<span>G</span>Vapor (%)",
"Heat added Q (kJ/mol), row {#}":
  "Calor añadido Q (kJ/mol), fila {#}",
"Bond energy U (kJ/mol), row {#}":
  "Energía de enlace U (kJ/mol), fila {#}",
"Solid (%), row {#}":
  "Sólido (%), fila {#}",
"Liquid (%), row {#}":
  "Líquido (%), fila {#}",
"Vapor (%), row {#}":
  "Vapor (%), fila {#}",
"Record the piston pressure and heater power for each copy of the table.":
  "Registra la presión del pistón y la potencia del calentador para cada copia de la tabla.",
"Graph \\(T\\) against \\(Q\\) for the crystal to vapor run. Mark the two plateaus and say what the phase shares show on each.":
  "Grafica \\(T\\) en función de \\(Q\\) para la corrida de cristal a vapor. Marca las dos mesetas y di qué muestran las fracciones de fase en cada una.",
"Find the melting temperature and the boiling temperature at {#} atm as the average temperature on each plateau.":
  "Encuentra la temperatura de fusión y la temperatura de ebullición a {#} atm como la temperatura media en cada meseta.",
"Find the latent heat of fusion and the latent heat of vaporization per mole from the heat added between the start and end of each plateau. Use the phase shares to decide where each plateau starts and ends.":
  "Encuentra el calor latente de fusión y el calor latente de vaporización por mol a partir del calor añadido entre el inicio y el final de cada meseta. Usa las fracciones de fase para decidir dónde empieza y termina cada meseta.",
"Fit \\(T\\) against \\(Q\\) for the solid before it starts to melt. Find its molar heat capacity, \\(C = 1/\\text{slope}\\), and compare it with \\(3R\\).":
  "Ajusta \\(T\\) en función de \\(Q\\) para el sólido antes de que empiece a fundirse. Encuentra su capacidad calorífica molar, \\(C = 1/\\text{slope}\\), y compárala con \\(3R\\).",
"Graph \\(U\\) against \\(Q\\). Compare its slope on the plateaus with its slope where the solid and the liquid warm up. What fraction of the heat goes into the bonds on each part?":
  "Grafica \\(U\\) en función de \\(Q\\). Compara su pendiente en las mesetas con su pendiente donde el sólido y el líquido se calientan. ¿Qué fracción del calor va a los enlaces en cada parte?",
"Compare the boiling temperature at {#} atm with the one at {#} atm.":
  "Compara la temperatura de ebullición a {#} atm con la de {#} atm.",
"Real argon melts at {#} K and boils at {#} K at {#} atm, with latent heats of {#} kJ/mol and {#} kJ/mol. Compare your values with these, and give two reasons this small simulated sample differs.":
  "El argón real se funde a {#} K y hierve a {#} K a {#} atm, con calores latentes de {#} kJ/mol y {#} kJ/mol. Compara tus valores con estos, y da dos razones por las que esta pequeña muestra simulada difiere.",
"The sample has only {#} atoms, so its temperature and bond energy wander by a few percent even with the averaging; the plateaus are noisy, not perfectly flat. Estimate the spread of the temperature readings on each plateau and use it as the uncertainty of the melting and boiling temperatures. The start and end of each plateau are uncertain by about the spacing of your readings, which limits the latent heats. A slower heater gives flatter plateaus; say whether that changes your values.":
  "La muestra tiene solo {#} átomos, así que su temperatura y su energía de enlace varían unos cuantos por ciento aun con el promedio; las mesetas tienen ruido, no son perfectamente planas. Estima la dispersión de las lecturas de temperatura en cada meseta y úsala como la incertidumbre de las temperaturas de fusión y de ebullición. El inicio y el final de cada meseta tienen una incertidumbre de más o menos la separación entre tus lecturas, lo que limita los calores latentes. Un calentador más lento da mesetas más planas; di si eso cambia tus valores.",
"Explain, atom by atom, why the temperature stops rising while the crystal melts.":
  "Explica, átomo por átomo, por qué la temperatura deja de subir mientras el cristal se funde.",
"Boiling took several times more heat per mole than melting. Use the bonds per atom in the solid, the liquid and the vapor to explain why.":
  "La ebullición necesitó varias veces más calor por mol que la fusión. Usa los enlaces por átomo en el sólido, el líquido y el vapor para explicar por qué.",
"Why does a higher pressure raise the boiling temperature? Think about what the vapor has to do to lift the piston.":
  "¿Por qué una presión más alta eleva la temperatura de ebullición? Piensa en lo que tiene que hacer el vapor para levantar el pistón.",
"When the vapor condenses on the cold floor, the temperature again holds still. Where does the heat that the floor takes out come from?":
  "Cuando el vapor se condensa sobre el piso frío, la temperatura vuelve a mantenerse fija. ¿De dónde viene el calor que saca el piso?",
"At the same temperature, do the atoms in the liquid move faster, slower or at the same average speed as the atoms in the vapor? Use the speed colors to check.":
  "A la misma temperatura, ¿los átomos del líquido se mueven más rápido, más lento o con la misma rapidez media que los átomos del vapor? Usa los colores de rapidez para comprobarlo.",
"Prelab answers, both table copies with their graphs, the melting and boiling temperatures, latent heats and heat capacity with uncertainties, the comparison with real argon, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, ambas copias de la tabla con sus gráficas, las temperaturas de fusión y de ebullición, los calores latentes y la capacidad calorífica con incertidumbres, la comparación con el argón real y las respuestas a las preguntas. Identifica los datos simulados.",
"Molar heat capacity, dQ/dT":
  "Capacidad calorífica molar, dQ/dT",
"KE: kinetic energy of the atoms":
  "KE: energía cinética de los átomos",
"Heat added":
  "Calor añadido",
"Bond (potential) energy of the atoms":
  "Energía de enlace (potencial) de los átomos",
"Average kinetic energy of an atom":
  "Energía cinética media de un átomo",
"States of Matter (Atoms)":
  "Estados de la materia (Átomos)"
});
