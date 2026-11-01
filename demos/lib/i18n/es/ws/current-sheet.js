/* ws/current-sheet in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/current-sheet', {
"Layout":
  "Disposición",
"Potential V (V)":
  "Potencial V (V)",
"Field E (V/m)":
  "Campo E (V/m)",
"Battery V (V)":
  "Batería V (V)",
"Mapping the Field in a Current Carrying Sheet | VirtualDemos":
  "Mapeo del campo en una lámina que conduce corriente | VirtualDemos",
"Mapping the Field in a Current Carrying Sheet":
  "Mapeo del campo en una lámina que conduce corriente",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §§{#}, {#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §§{#}, {#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"The Current in a sheet view of the Resistivity of a Wire demo: a thin resistive sheet {#} cm by {#} cm, like the conducting paper of a field mapping lab, with two electrodes held at the battery’s \\(V\\) and at {#} V. Layouts: Two bars, Two dots, Bar and dot, Slot between dots, Silver ring, Narrow neck, and Strip L by W, where the length \\(L\\) between the electrodes ({#} to {#} cm) and the strip’s width \\(W\\) ({#} to {#} cm) are set in whole centimeters and the rest of the sheet is cut away.":
  "La vista Corriente en una lámina de la demo Resistividad de un alambre: una lámina resistiva delgada de {#} cm por {#} cm, como el papel conductor de un laboratorio de mapeo de campos, con dos electrodos mantenidos al \\(V\\) de la batería y a {#} V. Disposiciones: Dos barras, Dos puntos, Barra y punto, Ranura entre puntos, Anillo de plata, Cuello estrecho y Tira L por W, donde la longitud \\(L\\) entre los electrodos (de {#} a {#} cm) y el ancho \\(W\\) de la tira (de {#} a {#} cm) se fijan en centímetros enteros y el resto de la lámina se recorta.",
"Press the sheet with the probe to read the potential there; the arrow keys move it {#} mm (Shift {#} cm). Positions are measured from the sheet’s left edge (\\(x\\)) and bottom edge (\\(y\\)). The meters show the current \\(I\\) from the battery, \\(R = V/I\\), and the field \\(E\\) at the probe. Cut, Silver paint and Mend change the sheet where you drag.":
  "Presiona la lámina con la sonda para leer el potencial ahí; las flechas la mueven {#} mm (Shift {#} cm). Las posiciones se miden desde el borde izquierdo (\\(x\\)) y el borde inferior (\\(y\\)) de la lámina. Los medidores muestran la corriente \\(I\\) de la batería, \\(R = V/I\\), y el campo \\(E\\) en la sonda. Cortar, Pintura de plata y Reparar cambian la lámina donde arrastras.",
"Two bars: the electrodes’ inner edges are at \\(x = 1.25\\) cm and \\(x = 22.75\\) cm, \\(L = 21.5\\) cm apart, and span the whole width \\(W = 16\\) cm. Two dots: round electrodes about {#} cm across, centered at \\((6, 8)\\) cm and \\((18, 8)\\) cm.":
  "Dos barras: los bordes interiores de los electrodos están en \\(x = 1.25\\) cm y \\(x = 22.75\\) cm, separados \\(L = 21.5\\) cm, y abarcan todo el ancho \\(W = 16\\) cm. Dos puntos: electrodos redondos de unos {#} cm de diámetro, centrados en \\((6, 8)\\) cm y \\((18, 8)\\) cm.",
"Capture stores the layout, the battery voltage, \\(R_s\\), \\(L\\) and \\(W\\) (for Two bars and Strip L by W), the probe’s position and potential, the field there and the current. Export to worksheet sends readings to the first Data table; a series in which every reading is a Strip L by W goes to the Resistance table.":
  "Capturar guarda la disposición, el voltaje de la batería, \\(R_s\\), \\(L\\) y \\(W\\) (para Dos barras y Tira L por W), la posición y el potencial de la sonda, el campo ahí y la corriente. Exportar a la hoja envía las lecturas a la primera tabla de datos; una serie en la que todas las lecturas son de Tira L por W va a la tabla Resistencia.",
"Blind hides the current, the resistance, the field and the colored map, leaving the probe’s potential.":
  "A ciegas oculta la corriente, la resistencia, el campo y el mapa de colores, y deja el potencial de la sonda.",
"\\(J = E/R_s\\) (current per unit width of the sheet); no charge piles up, so as much current leaves every bit of sheet as enters it, and none crosses an edge or a cut. \\(R = V/I\\).":
  "\\(J = E/R_s\\) (corriente por unidad de ancho de la lámina); no se acumula carga, así que de cada pedazo de lámina sale tanta corriente como entra, y ninguna cruza un borde o un corte. \\(R = V/I\\).",
"Model: the sheet is a grid of squares {#} cm on a side; Kirchhoff’s rule is solved at every square by conjugate gradients to \\(10^{-10}\\) of \\(V\\), so the map is exact for a sheet made of those squares. For a strip between full width electrodes it gives \\(R = R_s L/W\\) exactly. Silver paint is modeled as \\(10^4\\) times as conductive as the sheet. The probe reads the potential between square centers by linear interpolation. \\(R_s\\) is a setting, not a measured paper. The readings are simulated and noise free.":
  "Modelo: la lámina es una malla de cuadros de {#} cm de lado; la regla de Kirchhoff se resuelve en cada cuadro por gradientes conjugados hasta \\(10^{-10}\\) de \\(V\\), así que el mapa es exacto para una lámina hecha de esos cuadros. Para una tira entre electrodos de ancho completo da exactamente \\(R = R_s L/W\\). La pintura de plata se modela como \\(10^4\\) veces más conductora que la lámina. La sonda lee el potencial entre los centros de los cuadros por interpolación lineal. \\(R_s\\) es un ajuste, no un papel medido. Las lecturas son simuladas y sin ruido.",
"Map the equipotentials and the current in a thin resistive sheet for several electrode shapes, measure the electric field from the potential, and test how a sheet’s resistance depends on its length and width.":
  "Mapea las equipotenciales y la corriente en una lámina resistiva delgada para varias formas de electrodo, mide el campo eléctrico a partir del potencial y pon a prueba cómo depende la resistencia de una lámina de su longitud y su ancho.",
"<strong>Field and potential (§{#}).</strong> The electric field points from high to low potential and is perpendicular to the equipotentials. Along a line in the direction of the field,":
  "<strong>Campo y potencial (§{#}).</strong> El campo eléctrico apunta del potencial alto al bajo y es perpendicular a las equipotenciales. A lo largo de una línea en la dirección del campo,",
"\\[E = -\\frac{\\Delta V}{\\Delta x},\\]":
  "\\[E = -\\frac{\\Delta V}{\\Delta x},\\]",
"so where the equipotentials crowd together the field is strong. In a conducting sheet the field drives a current, and the current follows the field lines.":
  "así que donde las equipotenciales se juntan el campo es intenso. En una lámina conductora el campo impulsa una corriente, y la corriente sigue las líneas de campo.",
"<strong>Sheet resistance (§{#}).</strong> A sheet of thickness \\(t\\) and resistivity \\(\\rho\\) carries a current per unit width \\(J = E/R_s\\), where \\(R_s = \\rho/t\\) is the sheet resistance in ohms per square. A strip of length \\(L\\) and width \\(W\\) between electrodes as wide as the strip has":
  "<strong>Resistencia de lámina (§{#}).</strong> Una lámina de espesor \\(t\\) y resistividad \\(\\rho\\) lleva una corriente por unidad de ancho \\(J = E/R_s\\), donde \\(R_s = \\rho/t\\) es la resistencia de lámina en ohms por cuadro. Una tira de longitud \\(L\\) y ancho \\(W\\) entre electrodos tan anchos como la tira tiene",
"\\[R = \\rho\\frac{L}{Wt} = R_s\\frac{L}{W}.\\]":
  "\\[R = \\rho\\frac{L}{Wt} = R_s\\frac{L}{W}.\\]",
"The strip is \\(L/W\\) squares in series, and every square, large or small, has resistance \\(R_s\\) between opposite edges. Because no current can leave the sheet through its edges, the current lines run along an edge and the equipotentials meet it at right angles. For other shapes, \\(R\\) is still \\(R_s\\) times a number fixed by the shape alone.":
  "La tira son \\(L/W\\) cuadros en serie, y cada cuadro, grande o pequeño, tiene resistencia \\(R_s\\) entre bordes opuestos. Como ninguna corriente puede salir de la lámina por sus bordes, las líneas de corriente corren a lo largo de un borde y las equipotenciales lo cortan en ángulo recto. Para otras formas, \\(R\\) sigue siendo \\(R_s\\) multiplicada por un número que fija solo la forma.",
"A strip {#} cm long and {#} cm wide has \\(R_s = 1000\\ \\Omega\\) per square. Find its resistance and the current at {#} V.":
  "Una tira de {#} cm de largo y {#} cm de ancho tiene \\(R_s = 1000\\ \\Omega\\) por cuadro. Encuentra su resistencia y la corriente a {#} V.",
"Two full width bars are {#} cm apart on a sheet {#} cm wide at {#} V, with the + bar’s edge at \\(x = 1.25\\) cm. Predict the potential at \\(x = 12.00\\) cm, the field between the bars, and the current for \\(R_s = 1000\\ \\Omega\\) per square.":
  "Dos barras de ancho completo están separadas {#} cm en una lámina de {#} cm de ancho a {#} V, con el borde de la barra + en \\(x = 1.25\\) cm. Predice el potencial en \\(x = 12.00\\) cm, el campo entre las barras y la corriente para \\(R_s = 1000\\ \\Omega\\) por cuadro.",
"Sketch what you expect the equipotentials and current lines to look like between two small round electrodes. Where should the field be strongest?":
  "Dibuja cómo esperas que se vean las equipotenciales y las líneas de corriente entre dos electrodos redondos pequeños. ¿Dónde debería ser más intenso el campo?",
"On a real field mapping board, use the low voltage supply provided (a few volts to about {#} V), keep the probe leads from shorting the electrodes, and switch off before moving an electrode. Follow the instructor’s electrical safety procedures.":
  "En un tablero real de mapeo de campos, usa la fuente de bajo voltaje que se te da (de unos pocos volts a unos {#} V), evita que los cables de la sonda pongan en corto los electrodos y apaga antes de mover un electrodo. Sigue los procedimientos de seguridad eléctrica del instructor.",
"Use a battery voltage of {#} V and \\(R_s = 1000\\ \\Omega\\) per square throughout. Send each part’s readings to the worksheet before clearing them, and clear before starting the next part.":
  "Usa un voltaje de batería de {#} V y \\(R_s = 1000\\ \\Omega\\) por cuadro en todo momento. Envía las lecturas de cada parte a la hoja antes de borrarlas, y borra antes de empezar la siguiente parte.",
"<strong>Part {#}: Two bars.</strong> Measure the potential along the middle of the sheet, \\(y = 8.00\\) cm, at \\(x = 2, 4, 6, \\ldots, 22\\) cm (eleven readings). Then measure it at \\(x = 12.00\\) cm with \\(y = 2.00\\) cm and \\(y = 14.00\\) cm.":
  "<strong>Parte {#}: Dos barras.</strong> Mide el potencial a lo largo de la mitad de la lámina, \\(y = 8.00\\) cm, en \\(x = 2, 4, 6, \\ldots, 22\\) cm (once lecturas). Luego mídelo en \\(x = 12.00\\) cm con \\(y = 2.00\\) cm y \\(y = 14.00\\) cm.",
"<strong>Part {#}: Two dots.</strong> Measure the potential along the line joining the dots, \\(y = 8.00\\) cm, at \\(x = 8, 9, 10, \\ldots, 16\\) cm. Then map two equipotentials: at each height \\(y = 4.00\\), \\(8.00\\) and \\(12.00\\) cm, find the \\(x\\) where the potential is \\(7.00 \\pm 0.01\\) V and where it is \\(3.00 \\pm 0.01\\) V, and record each point.":
  "<strong>Parte {#}: Dos puntos.</strong> Mide el potencial a lo largo de la línea que une los puntos, \\(y = 8.00\\) cm, en \\(x = 8, 9, 10, \\ldots, 16\\) cm. Luego mapea dos equipotenciales: a cada altura \\(y = 4.00\\), \\(8.00\\) y \\(12.00\\) cm, encuentra la \\(x\\) donde el potencial es \\(7.00 \\pm 0.01\\) V y donde es \\(3.00 \\pm 0.01\\) V, y registra cada punto.",
"<strong>Part {#}: Shape and resistance.</strong> Record one reading, with the probe at \\((9.00, 8.00)\\) cm, in each layout: Two bars, Narrow neck, Two dots, Slot between dots, Bar and dot and Silver ring.":
  "<strong>Parte {#}: Forma y resistencia.</strong> Registra una lectura, con la sonda en \\((9.00, 8.00)\\) cm, en cada disposición: Dos barras, Cuello estrecho, Dos puntos, Ranura entre puntos, Barra y punto y Anillo de plata.",
"<strong>Part {#}: Strips.</strong> With Strip L by W, record a reading for \\(W = 8\\) cm at \\(L = 4, 8, 12, 16\\) and \\(20\\) cm, then for \\(L = 12\\) cm at \\(W = 2, 4, 12\\) and \\(16\\) cm. This series goes to the Resistance table.":
  "<strong>Parte {#}: Tiras.</strong> Con Tira L por W, registra una lectura para \\(W = 8\\) cm en \\(L = 4, 8, 12, 16\\) y \\(20\\) cm, y luego para \\(L = 12\\) cm en \\(W = 2, 4, 12\\) y \\(16\\) cm. Esta serie va a la tabla Resistencia.",
"<span>B</span>Layout":
  "<span>B</span>Disposición",
"<span>E</span>Potential \\(V\\) (V)":
  "<span>E</span>Potencial \\(V\\) (V)",
"<span>F</span>Field \\(E\\) (V/m)":
  "<span>F</span>Campo \\(E\\) (V/m)",
"<span>G</span>Current \\(I\\) (A)":
  "<span>G</span>Corriente \\(I\\) (A)",
"Layout, row {#}":
  "Disposición, fila {#}",
"x (cm), row {#}":
  "x (cm), fila {#}",
"y (cm), row {#}":
  "y (cm), fila {#}",
"Potential V (V), row {#}":
  "Potencial V (V), fila {#}",
"Field E (V/m), row {#}":
  "Campo E (V/m), fila {#}",
"Make one copy of this table for each of Parts {#} to {#}.":
  "Haz una copia de esta tabla para cada una de las Partes {#} a {#}.",
"<strong>Resistance.</strong> Work out the last two columns.":
  "<strong>Resistencia.</strong> Calcula las últimas dos columnas.",
"<span>D</span>Battery \\(V\\) (V)":
  "<span>D</span>Batería \\(V\\) (V)",
"<span>E</span>Current \\(I\\) (A)":
  "<span>E</span>Corriente \\(I\\) (A)",
"L (cm), row {#}":
  "L (cm), fila {#}",
"W (cm), row {#}":
  "W (cm), fila {#}",
"Battery V (V), row {#}":
  "Batería V (V), fila {#}",
"R = V/I (Ω), row {#}":
  "R = V/I (Ω), fila {#}",
"L/W, row {#}":
  "L/W, fila {#}",
"Graph \\(V\\) against \\(x\\) for the eleven Part {#} readings along \\(y = 8.00\\) cm. Report the slope and intercept, find \\(E\\) from the slope and compare it with the demo’s field reading and with \\(V/L\\). Where does the line reach {#} V and {#} V? What do the readings at \\(y = 2.00\\) and \\(14.00\\) cm tell you about the shape of the equipotentials?":
  "Grafica \\(V\\) en función de \\(x\\) para las once lecturas de la Parte {#} a lo largo de \\(y = 8.00\\) cm. Reporta la pendiente y la ordenada al origen, encuentra \\(E\\) a partir de la pendiente y compáralo con la lectura de campo de la demo y con \\(V/L\\). ¿Dónde llega la recta a {#} V y a {#} V? ¿Qué te dicen las lecturas en \\(y = 2.00\\) y \\(14.00\\) cm sobre la forma de las equipotenciales?",
"From the Part {#} field, find the current per unit width \\(J = E/R_s\\) and the total current, \\(J\\) times the sheet’s width. Compare with the current reading and with your prediction.":
  "Con el campo de la Parte {#}, encuentra la corriente por unidad de ancho \\(J = E/R_s\\) y la corriente total, \\(J\\) multiplicada por el ancho de la lámina. Compárala con la lectura de corriente y con tu predicción.",
"On a sketch of the sheet, plot your Part {#} equipotential points and draw the {#} V and {#} V lines through them. Add several current lines. Compare the field at \\(x = 8\\) cm and at \\(x = 12\\) cm, found from neighboring Part {#} potentials, with the demo’s field readings there. Where is the field strongest, and why?":
  "En un dibujo de la lámina, marca tus puntos equipotenciales de la Parte {#} y traza por ellos las líneas de {#} V y {#} V. Agrega varias líneas de corriente. Compara el campo en \\(x = 8\\) cm y en \\(x = 12\\) cm, obtenido de potenciales vecinos de la Parte {#}, con las lecturas de campo de la demo ahí. ¿Dónde es más intenso el campo, y por qué?",
"Graph \\(R\\) against \\(L/W\\) for the Resistance table. Report the slope and intercept and compare the slope with \\(R_s\\). Do strips with different \\(L\\) and \\(W\\) but the same \\(L/W\\) have the same resistance?":
  "Grafica \\(R\\) en función de \\(L/W\\) para la tabla Resistencia. Reporta la pendiente y la ordenada al origen y compara la pendiente con \\(R_s\\). ¿Tienen la misma resistencia tiras con distintos \\(L\\) y \\(W\\) pero el mismo \\(L/W\\)?",
"From Part {#}, find \\(R/R_s\\), the resistance in squares, for each layout, and rank them. Explain why the narrow neck raises the resistance above the {#} squares of the two bars, and why the slot raises the two dots’ resistance.":
  "Con la Parte {#}, encuentra \\(R/R_s\\), la resistencia en cuadros, para cada disposición, y ordénalas. Explica por qué el cuello estrecho eleva la resistencia por encima de los {#} cuadros de las dos barras, y por qué la ranura eleva la resistencia de los dos puntos.",
"On an endless sheet, two round electrodes of radius \\(a\\) with centers \\(d\\) apart have \\(R/R_s = \\frac{1}{\\pi}\\cosh^{-1}\\frac{d}{2a}\\). Evaluate it for the two dots, taking \\(a = 1.1\\) cm (the dots are made of squares). Is the measured value higher or lower, and why does a sheet with edges give that? Most of the resistance between two small dots lies close to them: use your Part {#} potentials to say where.":
  "En una lámina infinita, dos electrodos redondos de radio \\(a\\) con centros separados \\(d\\) tienen \\(R/R_s = \\frac{1}{\\pi}\\cosh^{-1}\\frac{d}{2a}\\). Evalúalo para los dos puntos, tomando \\(a = 1.1\\) cm (los puntos están hechos de cuadros). ¿El valor medido es mayor o menor, y por qué una lámina con bordes da eso? La mayor parte de la resistencia entre dos puntos pequeños está cerca de ellos: usa tus potenciales de la Parte {#} para decir dónde.",
"The readings are simulated and noise free. The potential is reported to {#} mV and the field and current to four significant figures; an equipotential point found to \\(\\pm 0.01\\) V is located to about {#} mm where the field is {#} to {#} V/m. The sheet is a grid of {#} cm squares, so round electrodes and cut edges are made of squares and the map within a square or two of them is not that of a smooth shape. On a real board, include the voltmeter’s resolution, the probe’s contact area, and nonuniform paper: commercial conducting paper varies by several percent in \\(R_s\\) across a sheet.":
  "Las lecturas son simuladas y sin ruido. El potencial se reporta a {#} mV y el campo y la corriente con cuatro cifras significativas; un punto equipotencial encontrado a \\(\\pm 0.01\\) V queda ubicado a unos {#} mm donde el campo es de {#} a {#} V/m. La lámina es una malla de cuadros de {#} cm, así que los electrodos redondos y los bordes cortados están hechos de cuadros y el mapa a uno o dos cuadros de ellos no es el de una forma lisa. En un tablero real, incluye la resolución del voltímetro, el área de contacto de la sonda y el papel no uniforme: el papel conductor comercial varía varios por ciento en \\(R_s\\) a lo largo de una lámina.",
"Why do the equipotentials meet the insulating edges of the sheet, and the edges of a cut, at right angles?":
  "¿Por qué las equipotenciales cortan en ángulo recto los bordes aislantes de la lámina y los bordes de un corte?",
"A square of the sheet {#} cm on a side and one {#} cm on a side have the same resistance between opposite edges. Explain why.":
  "Un cuadro de la lámina de {#} cm de lado y uno de {#} cm de lado tienen la misma resistencia entre bordes opuestos. Explica por qué.",
"Why must the voltmeter on a real field mapping board draw almost no current?":
  "¿Por qué el voltímetro de un tablero real de mapeo de campos debe tomar casi nada de corriente?",
"A silver painted region is nearly at one potential. Why, and how does it change the current in the sheet around it?":
  "Una región pintada con plata está casi a un solo potencial. ¿Por qué, y cómo cambia la corriente en la lámina a su alrededor?",
"On a very large sheet, the equipotentials of two dots have the same shape as those of two long, oppositely charged rods in empty space. What do the two situations have in common that makes this so?":
  "En una lámina muy grande, las equipotenciales de dos puntos tienen la misma forma que las de dos varillas largas con cargas opuestas en el espacio vacío. ¿Qué tienen en común las dos situaciones que hace que esto sea así?",
"Prelab answers, the three Data tables and the Resistance table (or the saved worksheet), the \\(V\\) against \\(x\\) and \\(R\\) against \\(L/W\\) graphs with their fits, the equipotential sketch for the two dots, the comparisons asked for in the Analysis, and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, las tres tablas de datos y la tabla Resistencia (o la hoja de trabajo guardada), las gráficas de \\(V\\) en función de \\(x\\) y de \\(R\\) en función de \\(L/W\\) con sus ajustes, el dibujo de las equipotenciales para los dos puntos, las comparaciones que pide el Análisis y las respuestas a las preguntas. Identifica los datos simulados.",
"Electric field in the sheet":
  "Campo eléctrico en la lámina",
"Current from the battery":
  "Corriente de la batería",
"Current per unit width of the sheet":
  "Corriente por unidad de ancho de la lámina",
"Length between the electrodes":
  "Longitud entre los electrodos",
"Resistance between the electrodes":
  "Resistencia entre los electrodos",
"Sheet resistance":
  "Resistencia de lámina",
"Potential (Battery V: the voltage across the electrodes)":
  "Potencial (Batería V: el voltaje entre los electrodos)",
"Width of the strip":
  "Ancho de la tira",
"Radius of a round electrode":
  "Radio de un electrodo redondo",
"Distance between the centers of the two round electrodes":
  "Distancia entre los centros de los dos electrodos redondos",
"Resistivity of the sheet's material":
  "Resistividad del material de la lámina",
"Thickness of the sheet":
  "Espesor de la lámina",
"Distance from the sheet's left edge":
  "Distancia desde el borde izquierdo de la lámina",
"Distance from the sheet's bottom edge":
  "Distancia desde el borde inferior de la lámina",
"Resistivity of a Wire (Current in a sheet)":
  "Resistividad de un alambre (Corriente en una lámina)"
});
