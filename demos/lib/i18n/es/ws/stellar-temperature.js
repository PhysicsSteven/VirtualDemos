/* ws/stellar-temperature in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/stellar-temperature', {
"Class":
  "Clase",
"Peak wavelength (nm)":
  "Longitud de onda del pico (nm)",
"Ca II (%)":
  "Ca II (%)",
"Ca III (%)":
  "Ca III (%)",
"Hydrogen on level {#} (per billion)":
  "Hidrógeno en el nivel {#} (por cada mil millones)",
"Readout":
  "Lectura",
"Value":
  "Valor",
"Star Colors, Lines and Temperature | VirtualDemos":
  "Colores, líneas y temperatura de las estrellas | VirtualDemos",
"Star Colors, Lines and Temperature":
  "Colores, líneas y temperatura de las estrellas",
"Textbook: OpenStax <em>Astronomy 2e</em>, §{#} to §{#} (the colors of stars, the spectra of stars, using spectra to learn about stars). Access for free at https://openstax.org/details/books/astronomy-2e.":
  "Libro de texto: OpenStax <em>Astronomy 2e</em>, §{#} a §{#} (los colores de las estrellas, los espectros de las estrellas, usar los espectros para conocer las estrellas). Acceso gratuito en https://openstax.org/details/books/astronomy-2e.",
"<strong>Setups in the demo:</strong> Betelgeuse, {#} K; The Sun, {#} K; An A star, {#} K; Rigel, {#} K; A B star, {#} K; An O star, {#} K; A giant: thinner gas. The same setups work in all four modes, chosen above the picture: <strong>Color</strong>, <strong>Spectral lines</strong>, <strong>Payne</strong> and <strong>Hydrogen at A</strong>. This worksheet uses all four.":
  "<strong>Configuraciones del demo:</strong> Betelgeuse, {#} K; El Sol, {#} K; Una estrella A, {#} K; Rigel, {#} K; Una estrella B, {#} K; Una estrella O, {#} K; Una gigante: gas más tenue. Las mismas configuraciones funcionan en los cuatro modos, que se eligen arriba de la imagen: <strong>Color</strong>, <strong>Líneas espectrales</strong>, <strong>Payne</strong> e <strong>Hidrógeno en A</strong>. Esta hoja usa los cuatro.",
"The picture shows the star in its own color, its visible spectrum with dark absorption lines, and the spectral class bar from O to M. Change the temperature with the <strong>Surface temperature</strong> slider, by dragging along the class bar, or by clicking the temperature readout and typing a value.":
  "La imagen muestra la estrella en su propio color, su espectro visible con líneas oscuras de absorción y la barra de clases espectrales de O a M. Cambia la temperatura con el control deslizante <strong>Temperatura superficial</strong>, arrastrando sobre la barra de clases, o haciendo clic en la lectura de temperatura y escribiendo un valor.",
"Color graphs the light the star gives off at each wavelength, with its peak marked. Spectral lines graphs how many atoms can make each line, against temperature. Payne shows, for each element, the share of its atoms that have lost no electrons, one or two (H I, H II and so on; Ca II is calcium that has lost one electron). Hydrogen at A counts the hydrogen atoms on each energy level.":
  "Color grafica la luz que emite la estrella en cada longitud de onda, con su pico marcado. Líneas espectrales grafica cuántos átomos pueden producir cada línea, contra la temperatura. Payne muestra, para cada elemento, la fracción de sus átomos que no han perdido electrones, que han perdido uno o dos (H I, H II, etc.; Ca II es calcio que ha perdido un electrón). Hidrógeno en A cuenta los átomos de hidrógeno en cada nivel de energía.",
"Record reading stores the temperature, the class, the peak wavelength, the calcium shares and the hydrogen on level {#}, in any mode. Export to worksheet sends the readings to the first data table. Clear starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la temperatura, la clase, la longitud de onda del pico, las fracciones de calcio y el hidrógeno en el nivel {#}, en cualquier modo. Exportar a la hoja envía las lecturas a la primera tabla de datos. Borrar empieza una serie nueva, que va a una copia nueva de la tabla.",
"The model: blackbody light (Planck), and the Boltzmann and Saha equations for how many atoms are on each level and in each stage of ionization, with the gas’s electron pressure held fixed. Line strength is taken to follow the number of atoms able to make the line, as Cecilia Payne did.":
  "El modelo: luz de cuerpo negro (Planck), y las ecuaciones de Boltzmann y de Saha para cuántos átomos hay en cada nivel y en cada etapa de ionización, con la presión electrónica del gas fija. Se toma la intensidad de una línea como proporcional al número de átomos capaces de producirla, como lo hizo Cecilia Payne.",
"Read a star’s temperature from its color, sort stars into spectral classes, and find out why the dark lines in a star’s spectrum depend on its temperature, not on what it is made of.":
  "Lee la temperatura de una estrella a partir de su color, clasifica estrellas en clases espectrales y descubre por qué las líneas oscuras del espectro de una estrella dependen de su temperatura, no de qué está hecha.",
"<strong>Color.</strong> A hot, dense object glows with light of every color, and the hotter it is, the shorter the wavelength where its light is brightest. That peak wavelength follows <strong>Wien’s law</strong>,":
  "<strong>Color.</strong> Un objeto caliente y denso brilla con luz de todos los colores, y entre más caliente está, más corta es la longitud de onda donde su luz es más brillante. Esa longitud de onda del pico sigue la <strong>ley de Wien</strong>,",
"\\[\\lambda_\\text{peak} = \\frac{b}{T},\\qquad b = 2.90\\times10^6\\ \\text{nm K},\\]":
  "\\[\\lambda_\\text{pico} = \\frac{b}{T},\\qquad b = 2.90\\times10^6\\ \\text{nm K},\\]",
"with \\(T\\) in kelvin and \\(\\lambda_\\text{peak}\\) in nanometers. Visible light runs from about {#} nm (violet) to {#} nm (red). A cool star’s peak is in the infrared and its visible light leans red; a hot star’s peak is in the ultraviolet and its visible light leans blue. Moving a star farther away makes it fainter at every wavelength by the same factor, so its color, and its peak, do not change: color measures temperature at any distance.":
  "con \\(T\\) en kelvin y \\(\\lambda_\\text{pico}\\) en nanómetros. La luz visible va de unos {#} nm (violeta) a {#} nm (rojo). El pico de una estrella fría está en el infrarrojo y su luz visible tira a rojo; el pico de una estrella caliente está en el ultravioleta y su luz visible tira a azul. Alejar una estrella la hace más débil en todas las longitudes de onda por el mismo factor, así que su color, y su pico, no cambian: el color mide la temperatura a cualquier distancia.",
"<strong>Spectral classes.</strong> A star’s spectrum is a rainbow crossed by dark lines, where atoms in its outer layers absorb particular wavelengths. Stars are sorted by these lines into classes, hottest to coolest O B A F G K M (OpenStax <em>Astronomy 2e</em>, Table {#}):":
  "<strong>Clases espectrales.</strong> El espectro de una estrella es un arcoíris cruzado por líneas oscuras, donde los átomos de sus capas externas absorben longitudes de onda determinadas. Las estrellas se ordenan por estas líneas en clases, de la más caliente a la más fría O B A F G K M (OpenStax <em>Astronomy 2e</em>, Tabla {#}):",
"O: above {#} K":
  "O: más de {#} K",
"B: {#} to {#} K":
  "B: {#} a {#} K",
"A: {#} to {#} K":
  "A: {#} a {#} K",
"F: {#} to {#} K":
  "F: {#} a {#} K",
"G: {#} to {#} K":
  "G: {#} a {#} K",
"K: {#} to {#} K":
  "K: {#} a {#} K",
"M: {#} to {#} K":
  "M: {#} a {#} K",
"<strong>Why the lines change.</strong> An atom can absorb a line only if it is in the right state. Heat knocks electrons off atoms (ionization): calcium that has lost one electron, written Ca II, makes the strong H and K lines; calcium that has lost two, Ca III, has no lines in the visible at all. Heat also lifts electrons to higher energy levels: hydrogen’s visible lines are absorbed only by atoms whose electron starts on level {#}. In {#} Cecilia Payne showed that once you account for these states, nearly every star has the same make up, mostly hydrogen and helium. Different stars show different lines because they have different temperatures.":
  "<strong>Por qué cambian las líneas.</strong> Un átomo solo puede absorber una línea si está en el estado correcto. El calor arranca electrones de los átomos (ionización): el calcio que ha perdido un electrón, escrito Ca II, produce las intensas líneas H y K; el calcio que ha perdido dos, Ca III, no tiene ninguna línea en el visible. El calor también sube electrones a niveles de energía más altos: las líneas visibles del hidrógeno solo las absorben los átomos cuyo electrón empieza en el nivel {#}. En {#} Cecilia Payne mostró que, una vez que se toman en cuenta estos estados, casi todas las estrellas tienen la misma composición, sobre todo hidrógeno y helio. Estrellas distintas muestran líneas distintas porque tienen temperaturas distintas.",
"Betelgeuse’s surface is about {#} K. Where does its light peak? Is that in the visible?":
  "La superficie de Betelgeuse está a unos {#} K. ¿Dónde tiene su pico su luz? ¿Está en el visible?",
"A star’s light peaks at {#} nm. What is its temperature, and what class is it?":
  "La luz de una estrella tiene su pico en {#} nm. ¿Cuál es su temperatura, y de qué clase es?",
"Use the list of classes in the Background to give the class of the Sun ({#} K), of a {#} K star and of Rigel ({#} K).":
  "Usa la lista de clases del Fundamento para dar la clase del Sol ({#} K), de una estrella de {#} K y de Rigel ({#} K).",
"The Sun’s spectrum has very strong calcium lines (Ca II H and K). Rigel, at about {#} K, shows much weaker ones. Does Rigel have less calcium than the Sun? Write your answer and your reason before you open the demo.":
  "El espectro del Sol tiene líneas de calcio muy intensas (Ca II H y K). Rigel, a unos {#} K, las muestra mucho más débiles. ¿Tiene Rigel menos calcio que el Sol? Escribe tu respuesta y tu razón antes de abrir el demo.",
"<strong>Part {#}. Color.</strong> Open the demo and choose <strong>Color</strong> above the picture.":
  "<strong>Parte {#}. Color.</strong> Abre el demo y elige <strong>Color</strong> arriba de la imagen.",
"Under Setups, press <strong>Betelgeuse, {#} K</strong> and press <strong>Record reading</strong> in the Readings section of the sidebar. Do the same for <strong>The Sun</strong>, <strong>An A star</strong>, <strong>Rigel</strong>, <strong>A B star</strong> and <strong>An O star</strong>.":
  "En Configuraciones, presiona <strong>Betelgeuse, {#} K</strong> y presiona <strong>Registrar lectura</strong> en la sección Lecturas de la barra lateral. Haz lo mismo con <strong>El Sol</strong>, <strong>Una estrella A</strong>, <strong>Rigel</strong>, <strong>Una estrella B</strong> y <strong>Una estrella O</strong>.",
"Set two more temperatures by clicking the <strong>Surface temperature</strong> readout and typing them: {#} K and {#} K. Record a reading at each.":
  "Pon dos temperaturas más haciendo clic en la lectura <strong>Temperatura superficial</strong> y escribiéndolas: {#} K y {#} K. Registra una lectura en cada una.",
"Press <strong>Export to worksheet</strong>. The eight readings fill Table {#} below. Fill in the last column, \\(1/T\\), for each row (in {#}/K; for {#} K it is {#}).":
  "Presiona <strong>Exportar a la hoja</strong>. Las ocho lecturas llenan la Tabla {#} de abajo. Llena la última columna, \\(1/T\\), para cada renglón (en {#}/K; para {#} K es {#}).",
"<strong>Part {#}. Payne.</strong> Choose <strong>Payne</strong> above the picture and press <strong>The Sun</strong>. Each bar splits one element’s atoms by how many electrons they have lost; the outlined parts are the ones that make lines in the visible. Then press <strong>Rigel</strong>. Your Table {#} already has calcium’s shares for both stars.":
  "<strong>Parte {#}. Payne.</strong> Elige <strong>Payne</strong> arriba de la imagen y presiona <strong>El Sol</strong>. Cada barra reparte los átomos de un elemento según cuántos electrones han perdido; las partes con contorno son las que producen líneas en el visible. Luego presiona <strong>Rigel</strong>. Tu Tabla {#} ya tiene las fracciones del calcio para las dos estrellas.",
"Compare the calcium bar for the two stars, and the Ca II column of Table {#} for the Sun and Rigel: note which stage of calcium most of Rigel’s calcium is in, and whether that stage is outlined.":
  "Compara la barra del calcio de las dos estrellas, y la columna Ca II de la Tabla {#} para el Sol y Rigel: fíjate en qué etapa está la mayor parte del calcio de Rigel, y si esa etapa tiene contorno.",
"<strong>Part {#}. Hydrogen.</strong> Choose <strong>Hydrogen at A</strong> and press <strong>An A star</strong>. In Table {#} record the <strong>Balmer lines strongest at</strong> readout, then the <strong>Hydrogen ionized</strong> readout for the Sun, the A star and the B star.":
  "<strong>Parte {#}. Hidrógeno.</strong> Elige <strong>Hidrógeno en A</strong> y presiona <strong>Una estrella A</strong>. En la Tabla {#} anota la lectura <strong>Líneas de Balmer más intensas a</strong>, y luego la lectura <strong>Hidrógeno ionizado</strong> para el Sol, la estrella A y la estrella B.",
"<strong>Table {#}. Stars by temperature.</strong>":
  "<strong>Tabla {#}. Estrellas por temperatura.</strong>",
"<span>B</span>Temperature T (K)":
  "<span>B</span>Temperatura T (K)",
"<span>C</span>Class":
  "<span>C</span>Clase",
"<span>D</span>Peak wavelength (nm)":
  "<span>D</span>Longitud de onda del pico (nm)",
"<span>E</span>Ca II (%)":
  "<span>E</span>Ca II (%)",
"<span>F</span>Ca III (%)":
  "<span>F</span>Ca III (%)",
"<span>G</span>Hydrogen on level {#} (per billion)":
  "<span>G</span>Hidrógeno en el nivel {#} (por cada mil millones)",
"Class, row {#}":
  "Clase, renglón {#}",
"Peak wavelength (nm), row {#}":
  "Longitud de onda del pico (nm), renglón {#}",
"Ca II (%), row {#}":
  "Ca II (%), renglón {#}",
"Ca III (%), row {#}":
  "Ca III (%), renglón {#}",
"Hydrogen on level {#} (per billion), row {#}":
  "Hidrógeno en el nivel {#} (por cada mil millones), renglón {#}",
"{#}/T ({#}/K), row {#}":
  "{#}/T ({#}/K), renglón {#}",
"<strong>Table {#}. Hydrogen.</strong>":
  "<strong>Tabla {#}. Hidrógeno.</strong>",
"<span>A</span>Readout":
  "<span>A</span>Lectura",
"<span>B</span>Value":
  "<span>B</span>Valor",
"Balmer lines strongest at (K)":
  "Líneas de Balmer más intensas a (K)",
"Value, row {#}":
  "Valor, renglón {#}",
"Hydrogen ionized, the Sun (%)":
  "Hidrógeno ionizado, el Sol (%)",
"Hydrogen ionized, An A star (%)":
  "Hidrógeno ionizado, Una estrella A (%)",
"Hydrogen ionized, A B star (%)":
  "Hidrógeno ionizado, Una estrella B (%)",
"Graph the peak wavelength (vertical) against \\(1/T\\) (horizontal) for Table {#} and fit a straight line. If you graph by hand, label the horizontal axis in units of \\(10^{-4}\\) {#}/K (so {#} is {#}) and multiply the slope you read by \\(10^4\\). The slope is Wien’s constant \\(b\\): what is it, in nm K? Compare it with \\(2.90\\times10^6\\) nm K.":
  "Grafica la longitud de onda del pico (vertical) contra \\(1/T\\) (horizontal) para la Tabla {#} y ajusta una línea recta. Si graficas a mano, rotula el eje horizontal en unidades de \\(10^{-4}\\) {#}/K (así {#} es {#}) y multiplica la pendiente que leas por \\(10^4\\). La pendiente es la constante de Wien \\(b\\): ¿cuánto vale, en nm K? Compárala con \\(2.90\\times10^6\\) nm K.",
"Which rows of Table {#} have their peak in the visible ({#} to {#} nm)? Which are in the infrared, and which in the ultraviolet?":
  "¿Qué renglones de la Tabla {#} tienen su pico en el visible ({#} a {#} nm)? ¿Cuáles están en el infrarrojo, y cuáles en el ultravioleta?",
"From Table {#}, how many times larger is the share of calcium in the Ca II stage in the Sun than in Rigel?":
  "Según la Tabla {#}, ¿cuántas veces mayor es la fracción del calcio en la etapa Ca II en el Sol que en Rigel?",
"In Table {#}, at which of your temperatures is the most hydrogen on level {#}, and what class is it? Use Table {#} to explain why there is less on level {#} at {#} K than at {#} K.":
  "En la Tabla {#}, ¿en cuál de tus temperaturas hay más hidrógeno en el nivel {#}, y de qué clase es? Usa la Tabla {#} para explicar por qué hay menos en el nivel {#} a {#} K que a {#} K.",
"The temperatures in the setups are round values, good to perhaps {#} %. If Betelgeuse were {#} % hotter than {#} K, by what percentage would its peak wavelength change? Would it still be class M?":
  "Las temperaturas de las configuraciones son valores redondos, buenos quizá a un {#} %. Si Betelgeuse estuviera un {#} % más caliente que {#} K, ¿en qué porcentaje cambiaría la longitud de onda de su pico? ¿Seguiría siendo de clase M?",
"Choose <strong>Payne</strong> and press <strong>Betelgeuse</strong>. What share of the titanium is in titanium oxide (TiO) molecules (the <strong>Titanium in TiO</strong> readout)? Press <strong>The Sun</strong> and read it again. Why do molecule bands show up only in the coolest stars?":
  "Elige <strong>Payne</strong> y presiona <strong>Betelgeuse</strong>. ¿Qué fracción del titanio está en moléculas de óxido de titanio (TiO) (la lectura <strong>Titanio en TiO</strong>)? Presiona <strong>El Sol</strong> y léela otra vez. ¿Por qué las bandas de moléculas aparecen solo en las estrellas más frías?",
"A cool M star and a hot O star both show weak hydrogen lines. Use Table {#} and Table {#} to say whether it is for the same reason.":
  "Una estrella M fría y una estrella O caliente muestran líneas de hidrógeno débiles. Usa la Tabla {#} y la Tabla {#} para decir si es por la misma razón.",
"Look back at your answer to Before the lab {#} and at the calcium in your table and in the Payne bars. Where has Rigel’s calcium gone, and why does that make its lines weak? Did you get it right, and what does this tell you about reading a star’s make up from how strong its lines are?":
  "Revisa tu respuesta a Antes del laboratorio {#} y el calcio en tu tabla y en las barras de Payne. ¿A dónde se fue el calcio de Rigel, y por qué eso hace débiles sus líneas? ¿Acertaste, y qué te dice esto sobre leer la composición de una estrella a partir de la intensidad de sus líneas?",
"Prelab answers, both tables with the {#}/T column filled, the graph with its fit, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data: every reading in this lab comes from the demo’s model.":
  "Las respuestas previas al laboratorio, las dos tablas con la columna {#}/T llena, la gráfica con su ajuste, las respuestas de las secciones de análisis e incertidumbre, y las respuestas a las preguntas. Identifica los datos simulados: todas las lecturas de este laboratorio vienen del modelo del demo.",
"Surface temperature of the star":
  "Temperatura superficial de la estrella",
"Wien's constant":
  "Constante de Wien",
"{#} × {#}⁶ nm K (CODATA {#})":
  "{#} × {#}⁶ nm K (CODATA {#})",
"Wavelength where the star's light is brightest":
  "Longitud de onda donde la luz de la estrella es más brillante",
"Spectral Classes":
  "Clases espectrales",
"Graph the peak wavelength (vertical) against \\(1/T\\) (horizontal) for Table {#} and fit a straight line. Its slope is Wien’s constant \\(b\\): what is it, in nm K? Compare it with \\(2.90\\times10^6\\) nm K.":
  "Grafica la longitud de onda del pico (vertical) contra \\(1/T\\) (horizontal) para la Tabla {#} y ajusta una línea recta. Su pendiente es la constante de Wien \\(b\\): ¿cuánto vale, en nm K? Compárala con \\(2.90\\times10^6\\) nm K."
});
