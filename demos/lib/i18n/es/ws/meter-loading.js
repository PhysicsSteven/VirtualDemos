/* ws/meter-loading in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/meter-loading', {
"Voltmeter Rm (Ω)":
  "Voltímetro Rm (Ω)",
"V_out reading (V)":
  "Lectura de V_out (V)",
"Ammeter Rm (Ω)":
  "Amperímetro Rm (Ω)",
"A1 reading (A)":
  "Lectura de A1 (A)",
"V_out low by (%)":
  "V_out baja en (%)",
"Meter Loading: When a Meter Changes What It Measures | VirtualDemos":
  "Carga del medidor: cuando un medidor cambia lo que mide | VirtualDemos",
"Meter Loading: When a Meter Changes What It Measures":
  "Carga del medidor: cuando un medidor cambia lo que mide",
"The <strong>Meter loading</strong> setup (DC, under Setups) is a {#} V battery driving two resistors R1 and R2 in series, an ammeter A1 in the current path and a voltmeter V_out across R2.":
  "La configuración <strong>Carga del medidor</strong> (CD, en Configuraciones) es una batería de {#} V que alimenta dos resistencias R1 y R2 en serie, un amperímetro A1 en la trayectoria de la corriente y un voltímetro V_out en R2.",
"Both meters start as real meters: <strong>Real meter (it has a resistance)</strong> is ticked in the Selected card, and <strong>Meter resistance R<sub>m</sub></strong> sets the resistance. The ammeter starts at R<sub>m</sub> = {#} Ω, in series with the branch; the voltmeter at R<sub>m</sub> = {#} MΩ, across R2. Untick it and the meter is ideal again ({#} Ω or no current at all).":
  "Ambos medidores empiezan como medidores reales: <strong>Medidor real (tiene resistencia)</strong> está marcado en la tarjeta Seleccionado, y <strong>Resistencia del medidor R<sub>m</sub></strong> fija la resistencia. El amperímetro empieza con R<sub>m</sub> = {#} Ω, en serie con la rama; el voltímetro con R<sub>m</sub> = {#} MΩ, en R2. Si desmarcas la casilla, el medidor vuelve a ser ideal ({#} Ω o ninguna corriente).",
"Click a part with the Select tool (the arrow at the left of the parts bar) to select it; its value slider and number box appear in the Selected card. You can type a value in the box.":
  "Haz clic en una pieza con la herramienta Seleccionar (la flecha a la izquierda de la barra de piezas) para seleccionarla; su control deslizante de valor y su cuadro numérico aparecen en la tarjeta Seleccionado. Puedes escribir un valor en el cuadro.",
"<strong>Record reading</strong> (Readings card) stores every meter’s reading to {#} significant figures, with the part values; <strong>Export to worksheet</strong> sends the rows to the Data table below; <strong>Clear</strong> starts a new series.":
  "<strong>Registrar lectura</strong> (tarjeta Lecturas) guarda la lectura de cada medidor con {#} cifras significativas, junto con los valores de las piezas; <strong>Exportar a la hoja</strong> envía las filas a la tabla de datos de abajo; <strong>Borrar</strong> empieza una serie nueva.",
"These are computed values, not measurements: the demo solves the circuit exactly, so the same settings always give the same readings.":
  "Estos son valores calculados, no mediciones: la demo resuelve el circuito de forma exacta, así que los mismos ajustes siempre dan las mismas lecturas.",
"Measure how much a real voltmeter and a real ammeter change the circuit they measure, find the rule that tells you when a meter can be trusted, and tell a reading error from a real feature of the circuit.":
  "Mide cuánto cambian un voltímetro real y un amperímetro real el circuito que miden, encuentra la regla que dice cuándo se puede confiar en un medidor y distingue un error de lectura de una característica real del circuito.",
"An ideal voltmeter draws no current and an ideal ammeter has no voltage across it, so neither changes the circuit (§{#}). A real meter has a resistance \\(R_m\\).":
  "Un voltímetro ideal no toma corriente y un amperímetro ideal no tiene voltaje entre sus extremos, así que ninguno cambia el circuito (§{#}). Un medidor real tiene una resistencia \\(R_m\\).",
"A voltmeter is connected across the part it reads, so its \\(R_m\\) is <strong>in parallel</strong> with that part. Across \\(R_2\\) the two together are (§{#})":
  "Un voltímetro se conecta en la pieza que lee, así que su \\(R_m\\) queda <strong>en paralelo</strong> con esa pieza. En \\(R_2\\), las dos juntas son (§{#})",
"\\[R_\\parallel = \\frac{R_2 R_m}{R_2 + R_m},\\]":
  "\\[R_\\parallel = \\frac{R_2 R_m}{R_2 + R_m},\\]",
"which is always less than \\(R_2\\). The divider then gives the voltmeter less than its share: with the ammeter’s small resistance \\(R_A\\) in the path,":
  "que siempre es menor que \\(R_2\\). Entonces el divisor le da al voltímetro menos que su parte: con la pequeña resistencia \\(R_A\\) del amperímetro en la trayectoria,",
"\\[V_{\\rm read} = \\varepsilon\\,\\frac{R_\\parallel}{R_1 + R_\\parallel + R_A}.\\]":
  "\\[V_{\\rm read} = \\varepsilon\\,\\frac{R_\\parallel}{R_1 + R_\\parallel + R_A}.\\]",
"For two equal resistors \\(R_1 = R_2 = R\\) and an ideal ammeter, the true voltage is \\(\\varepsilon/2\\), and the reading is low by the fraction":
  "Para dos resistencias iguales \\(R_1 = R_2 = R\\) y un amperímetro ideal, el voltaje verdadero es \\(\\varepsilon/2\\), y la lectura es baja en la fracción",
"\\[\\frac{V_{\\rm true} - V_{\\rm read}}{V_{\\rm true}} = \\frac{R}{R + 2R_m}.\\]":
  "\\[\\frac{V_{\\rm true} - V_{\\rm read}}{V_{\\rm true}} = \\frac{R}{R + 2R_m}.\\]",
"The error is small only when \\(R_m \\gg R\\): a voltmeter must have a large resistance compared with the circuit it reads.":
  "El error es pequeño solo cuando \\(R_m \\gg R\\): un voltímetro debe tener una resistencia grande comparada con el circuito que lee.",
"An ammeter is connected <strong>in series</strong>, so its \\(R_m = R_A\\) adds to the resistance of the path. With \\(R_1 = R_2 = R\\) the current falls from \\(\\varepsilon/(2R)\\) to \\(\\varepsilon/(2R + R_A)\\), low by the fraction":
  "Un amperímetro se conecta <strong>en serie</strong>, así que su \\(R_m = R_A\\) se suma a la resistencia de la trayectoria. Con \\(R_1 = R_2 = R\\), la corriente baja de \\(\\varepsilon/(2R)\\) a \\(\\varepsilon/(2R + R_A)\\), baja en la fracción",
"\\[\\frac{R_A}{2R + R_A}.\\]":
  "\\[\\frac{R_A}{2R + R_A}.\\]",
"An ammeter must have a small resistance compared with the circuit it is in. No meter is right for every circuit: a digital voltmeter’s {#} MΩ is huge beside {#} kΩ and small beside {#} MΩ.":
  "Un amperímetro debe tener una resistencia pequeña comparada con el circuito en el que está. Ningún medidor sirve para todos los circuitos: los {#} MΩ de un voltímetro digital son enormes junto a {#} kΩ y pequeños junto a {#} MΩ.",
"This is not an error of the model or of the computation. The loaded circuit really carries these currents: connecting the meter changed the circuit.":
  "Esto no es un error del modelo ni del cálculo. El circuito con carga de verdad lleva estas corrientes: conectar el medidor cambió el circuito.",
"Guess first: does a voltmeter with a resistance of {#} MΩ change the voltage it is connected across, or does it only read it? Write your guess. Then work it out: in the Meter loading setup, ε = {#} V and R1 = R2 = {#} MΩ. Find V_out for an ideal voltmeter and for one with R<sub>m</sub> = {#} MΩ (ignore the ammeter’s {#} Ω).":
  "Adivina primero: ¿un voltímetro con una resistencia de {#} MΩ cambia el voltaje entre los puntos donde lo conectas, o solo lo lee? Escribe tu predicción. Luego calcúlalo: en la configuración Carga del medidor, ε = {#} V y R1 = R2 = {#} MΩ. Encuentra V_out para un voltímetro ideal y para uno con R<sub>m</sub> = {#} MΩ (ignora el {#} Ω del amperímetro).",
"Start from the two expressions for \\(V_{\\rm read}\\) and \\(R_\\parallel\\) and show that the fractional error for equal resistors is \\(R/(R + 2R_m)\\). For R<sub>m</sub> = {#} MΩ, what is the largest R for an error of {#}%?":
  "Parte de las dos expresiones de \\(V_{\\rm read}\\) y \\(R_\\parallel\\) y demuestra que el error fraccionario para resistencias iguales es \\(R/(R + 2R_m)\\). Para R<sub>m</sub> = {#} MΩ, ¿cuál es la R más grande para un error de {#}%?",
"With R1 = R2 = {#} Ω, what current would an ideal ammeter read, and what does an ammeter with R<sub>m</sub> = {#} Ω read?":
  "Con R1 = R2 = {#} Ω, ¿qué corriente leería un amperímetro ideal y qué lee un amperímetro con R<sub>m</sub> = {#} Ω?",
"<strong>A. One circuit, two meters.</strong> Open the demo from the link above, or press <strong>Meter loading</strong> under Setups in DC mode. The voltmeter V_out is selected. Press <strong>Record reading</strong> in the Readings card. Now make R1 and R2 smaller together: click R1 with the Select tool, type {#} in its number box ({#} kΩ) and press Enter; do the same for R2; press <strong>Record reading</strong>. Repeat for R1 = R2 = {#} kΩ, {#} kΩ, {#} Ω and {#} Ω (type {#}, {#}, {#} and {#}). Watch the two readings on the drawing as you go.":
  "<strong>A. Un circuito, dos medidores.</strong> Abre la demo desde el enlace de arriba, o pulsa <strong>Carga del medidor</strong> en Configuraciones en modo CD. El voltímetro V_out está seleccionado. Pulsa <strong>Registrar lectura</strong> en la tarjeta Lecturas. Ahora haz más pequeñas R1 y R2 juntas: haz clic en R1 con la herramienta Seleccionar, escribe {#} en su cuadro numérico ({#} kΩ) y pulsa Enter; haz lo mismo con R2; pulsa <strong>Registrar lectura</strong>. Repite para R1 = R2 = {#} kΩ, {#} kΩ, {#} Ω y {#} Ω (escribe {#}, {#}, {#} y {#}). Observa las dos lecturas en el dibujo mientras avanzas.",
"<strong>B. A better and a worse voltmeter.</strong> Press <strong>Meter loading</strong> again (R1 = R2 = {#} MΩ). Click V_out, type {#} ({#} MΩ, like an old analog meter on a low range) in the <strong>Meter resistance R<sub>m</sub></strong> box and press <strong>Record reading</strong>. Then type {#} ({#} MΩ) and record again.":
  "<strong>B. Un voltímetro mejor y uno peor.</strong> Pulsa <strong>Carga del medidor</strong> otra vez (R1 = R2 = {#} MΩ). Haz clic en V_out, escribe {#} ({#} MΩ, como un medidor analógico viejo en una escala baja) en el cuadro <strong>Resistencia del medidor R<sub>m</sub></strong> y pulsa <strong>Registrar lectura</strong>. Luego escribe {#} ({#} MΩ) y registra de nuevo.",
"<strong>C. Ideal meters.</strong> Click R1 and R2 and set both to {#} Ω. Click A1 and untick <strong>Real meter (it has a resistance)</strong>; click V_out and untick it too. Press <strong>Record reading</strong>. Press <strong>Export to worksheet</strong> (the rows go to the Data table below), then fill in the last column yourself.":
  "<strong>C. Medidores ideales.</strong> Haz clic en R1 y R2 y fija ambas en {#} Ω. Haz clic en A1 y desmarca <strong>Medidor real (tiene resistencia)</strong>; haz clic en V_out y desmárcalo también. Pulsa <strong>Registrar lectura</strong>. Pulsa <strong>Exportar a la hoja</strong> (las filas van a la tabla de datos de abajo) y luego llena tú mismo la última columna.",
"Table {#}. Meter loading readings (ε = {#} V). Write “ideal” for the resistance of an ideal meter.":
  "Tabla {#}. Lecturas de la carga del medidor (ε = {#} V). Escribe “ideal” para la resistencia de un medidor ideal.",
"<span>D</span>Voltmeter R<sub>m</sub> (Ω)":
  "<span>D</span>Voltímetro R<sub>m</sub> (Ω)",
"<span>E</span>V_out reading (V)":
  "<span>E</span>Lectura de V_out (V)",
"<span>F</span>Ammeter R<sub>m</sub> (Ω)":
  "<span>F</span>Amperímetro R<sub>m</sub> (Ω)",
"<span>G</span>A1 reading (A)":
  "<span>G</span>Lectura de A1 (A)",
"<span>H</span>V_out low by (%)":
  "<span>H</span>V_out baja en (%)",
"R1 (Ω), row {#}":
  "R1 (Ω), fila {#}",
"R2 (Ω), row {#}":
  "R2 (Ω), fila {#}",
"Voltmeter Rm (Ω), row {#}":
  "Voltímetro Rm (Ω), fila {#}",
"V_out reading (V), row {#}":
  "Lectura de V_out (V), fila {#}",
"Ammeter Rm (Ω), row {#}":
  "Amperímetro Rm (Ω), fila {#}",
"A1 reading (A), row {#}":
  "Lectura de A1 (A), fila {#}",
"V_out low by (%), row {#}":
  "V_out baja en (%), fila {#}",
"For each row of part A, find how far V_out is below the ideal {#} V, as a percentage, and write it in the last column. Compare each with \\(R/(R + 2R_m)\\) from Background. In the last two rows V_out is low again, though the voltmeter’s effect is tiny there: which meter lowers it, and why does it lower V_out by the same fraction as the current?":
  "Para cada fila de la parte A, calcula cuánto está V_out por debajo de los {#} V ideales, como porcentaje, y escríbelo en la última columna. Compara cada uno con \\(R/(R + 2R_m)\\) de la sección Fondo. En las dos últimas filas V_out vuelve a estar bajo, aunque ahí el efecto del voltímetro es mínimo: ¿qué medidor lo baja, y por qué baja V_out en la misma fracción que la corriente?",
"For each row of part A, find the ideal current \\(\\varepsilon/(2R)\\) and how far the A1 reading is below it, as a percentage. Compare with \\(R_A/(2R + R_A)\\). In which rows does the ammeter’s error matter and in which does the voltmeter’s?":
  "Para cada fila de la parte A, encuentra la corriente ideal \\(\\varepsilon/(2R)\\) y cuánto está la lectura de A1 por debajo de ella, como porcentaje. Compara con \\(R_A/(2R + R_A)\\). ¿En qué filas importa el error del amperímetro y en cuáles el del voltímetro?",
"Graph the A1 reading (vertical) against R1 (horizontal) for the part A rows, with <strong>Log scales</strong> ticked. What slope does \\(I = \\varepsilon/(2R)\\) predict, and what slope do your middle rows give? At which end is the current above that line and at which end below it, and which meter causes each?":
  "Grafica la lectura de A1 (vertical) contra R1 (horizontal) para las filas de la parte A, con <strong>Escalas logarítmicas</strong> marcado. ¿Qué pendiente predice \\(I = \\varepsilon/(2R)\\), y qué pendiente dan tus filas de en medio? ¿En qué extremo está la corriente por encima de esa recta y en cuál por debajo, y qué medidor causa cada caso?",
"Using the two error formulas, find the range of R over which both meters in this setup are within {#}% of the ideal reading.":
  "Con las dos fórmulas de error, encuentra el intervalo de R en el que ambos medidores de esta configuración están a menos de {#}% de la lectura ideal.",
"From part B, how does the error change with the voltmeter’s R<sub>m</sub>? Check the {#} MΩ and {#} MΩ readings against the formula.":
  "A partir de la parte B, ¿cómo cambia el error con la R<sub>m</sub> del voltímetro? Verifica las lecturas de {#} MΩ y {#} MΩ con la fórmula.",
"Explain in terms of series and parallel resistance why a voltmeter should have a very large resistance and an ammeter a very small one. What would happen if you put an ammeter across a battery by mistake?":
  "Explica en términos de resistencia en serie y en paralelo por qué un voltímetro debe tener una resistencia muy grande y un amperímetro una muy pequeña. ¿Qué pasaría si pusieras un amperímetro entre los bornes de una batería por error?",
"A biologist reads the voltage across a cell membrane, which acts like a {#} mV source with a resistance of about {#} MΩ, using a {#} MΩ digital voltmeter. What fraction of the true voltage does the meter show? What kind of meter is needed?":
  "Un biólogo lee el voltaje a través de una membrana celular, que se comporta como una fuente de {#} mV con una resistencia de unos {#} MΩ, con un voltímetro digital de {#} MΩ. ¿Qué fracción del voltaje verdadero muestra el medidor? ¿Qué tipo de medidor se necesita?",
"Your readings in parts A and B differ from the ideal ones, yet the demo computes the circuit exactly. Is the difference an error of the computation, an error of the model, or a real effect? How could you test which, using the demo? Look back at your guess in Before the lab {#}: what would you tell someone who says a meter only reads a circuit?":
  "Tus lecturas de las partes A y B difieren de las ideales, aunque la demo calcula el circuito exactamente. ¿La diferencia es un error del cálculo, un error del modelo o un efecto real? ¿Cómo podrías comprobarlo con la demo? Revisa tu predicción en Antes del laboratorio {#}: ¿qué le dirías a alguien que dice que un medidor solo lee un circuito?",
"For courses that treat measurement uncertainty. This section is not counted in the {#} minutes; do it when your instructor assigns it.":
  "Para cursos que tratan la incertidumbre de medición. Esta sección no cuenta dentro de los {#} minutos; hazla cuando tu profesor la asigne.",
"The demo’s readings are exact solutions of the circuit, rounded to {#} significant figures as a meter display shows them; there is no random scatter. Near {#} V the last digit is {#} V, about {#}% of the reading, so a smaller loading error cannot be seen. Say which of your rows that limits, and how you would see the smaller errors with a meter that shows more digits. Below which R is the voltmeter’s effect too small to see with three significant figures?":
  "Las lecturas de la demo son soluciones exactas del circuito, redondeadas a {#} cifras significativas como las muestra la pantalla de un medidor; no hay dispersión aleatoria. Cerca de {#} V el último dígito es {#} V, cerca de {#}% de la lectura, así que no se puede ver un error de carga menor. Indica cuál de tus filas limita esto y cómo verías los errores menores con un medidor que muestre más dígitos. ¿Por debajo de qué R el efecto del voltímetro es demasiado pequeño para verse con tres cifras significativas?",
"Before the lab answers, the data table with your last column, the graph from Analysis {#}, and your answers to the Analysis and Questions (and to Uncertainty, if assigned). Say that the data are computed by the demo, not measured.":
  "Respuestas de Antes del laboratorio, la tabla de datos con tu última columna, la gráfica del Análisis {#} y tus respuestas al Análisis y a las Preguntas (y de Incertidumbre, si se asigna). Indica que los datos los calcula la demo, no se midieron.",
"In the Meter loading setup, ε = {#} V and R1 = R2 = {#} MΩ. Find V_out for an ideal voltmeter and for one with R<sub>m</sub> = {#} MΩ (ignore the ammeter’s {#} Ω).":
  "En la configuración Carga del medidor, ε = {#} V y R1 = R2 = {#} MΩ. Encuentra V_out para un voltímetro ideal y para uno con R<sub>m</sub> = {#} MΩ (ignora los {#} Ω del amperímetro).",
"Your readings in parts A and B differ from the ideal ones, yet the demo computes the circuit exactly. Is the difference an error of the computation, an error of the model, or a real effect? How could you test which, using the demo?":
  "Tus lecturas de las partes A y B difieren de las ideales, y sin embargo la demo calcula el circuito de forma exacta. ¿La diferencia es un error del cálculo, un error del modelo o un efecto real? ¿Cómo podrías comprobar cuál, usando la demo?",
"For each row of part A, find how far V_out is below the ideal {#} V, as a percentage, and write it in the last column. Compare each with \\(R/(R + 2R_m)\\) from Background. Below which R is the difference too small to see with three significant figures?":
  "Para cada fila de la parte A, encuentra cuánto está V_out por debajo del valor ideal de {#} V, como porcentaje, y escríbelo en la última columna. Compara cada una con \\(R/(R + 2R_m)\\) del Fondo. ¿Por debajo de qué R la diferencia es demasiado pequeña para verse con tres cifras significativas?",
"Graph the voltmeter’s percentage error (last column, vertical) against R1 (horizontal) for the part A rows, with <strong>Log scales</strong> ticked. What is the slope of the straight part of the line, and why does \\(R/(R + 2R_m)\\) predict it when \\(R \\ll R_m\\)?":
  "Grafica el error porcentual del voltímetro (última columna, vertical) en función de R1 (horizontal) para las filas de la parte A, con <strong>Escalas logarítmicas</strong> marcado. ¿Cuál es la pendiente de la parte recta de la línea, y por qué \\(R/(R + 2R_m)\\) la predice cuando \\(R \\ll R_m\\)?"
});
