/* ws/capacitors in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/capacitors', {
"Run: connected/isolated/network":
  "Corrida: conectado/aislado/red",
"Inserted fraction":
  "Fracción insertada",
"Capacitance, Dielectrics and Stored Energy | VirtualDemos":
  "Capacitancia, dieléctricos y energía almacenada | VirtualDemos",
"Capacitance, Dielectrics and Stored Energy":
  "Capacitancia, dieléctricos y energía almacenada",
"<strong>Setups in the demo:</strong> Pull apart, connected; Pull apart, isolated; Slide in a dielectric; Water dielectric; Series and parallel; Energy in the field.":
  "<strong>Configuraciones en la demo:</strong> Separar, conectado; Separar, aislado; Deslizar un dieléctrico; Dieléctrico de agua; Serie y paralelo; Energía en el campo.",
"Drag the grips on the picture: the top plate’s grip for the <strong>Separation d</strong>, the side grip for the <strong>Plate area A</strong>, the slab for <strong>Inserted x/s</strong>, and the battery up or down for the <strong>Battery voltage V<sub>b</sub></strong>; click the battery’s switch to connect or isolate it. Keys on the picture: ↑ ↓ d, ← → x/s, Page Up/Down A, + − V<sub>b</sub>, M connect.":
  "Arrastra los agarres de la imagen: el agarre de la placa superior para la <strong>Separación d</strong>, el agarre lateral para el <strong>Área de las placas A</strong>, la placa dieléctrica para <strong>Insertado x/s</strong>, y la batería hacia arriba o hacia abajo para el <strong>Voltaje de la batería V<sub>b</sub></strong>; haz clic en el interruptor de la batería para conectarla o aislarla. Teclas en la imagen: ↑ ↓ d, ← → x/s, Re Pág/Av Pág A, + − V<sub>b</sub>, M conectar.",
"Square plates of side \\(s\\), so \\(A = s^2\\). Changing A counts like sliding one plate sideways to change the overlap: your hand does the work.":
  "Placas cuadradas de lado \\(s\\), así que \\(A = s^2\\). Cambiar A cuenta como deslizar una placa de lado para cambiar el traslape: tu mano hace el trabajo.",
"Capture pauses the sweep and stores the settings and the values shown on screen, rounded as displayed: d, x/s, C, Q and V here, and also A, t, κ, the battery, E, U and the energies since Mark start in the CSV. Cells can be edited; rows stay through setup changes until Clear. Press C on the drawing to capture.":
  "Capturar pausa el barrido y guarda los ajustes y los valores mostrados en pantalla, redondeados como se muestran: d, x/s, C, Q y V aquí, y también A, t, κ, la batería, E, U y las energías desde Marcar inicio en el CSV. Las celdas se pueden editar; las filas se quedan al cambiar la configuración hasta que pulses Borrar. Pulsa C en el dibujo para capturar.",
"The fit is a least squares line \\(y = a + bx\\) with equal weights, through your captured rows only. The standard errors come from the scatter of the rows about the line; with ideal simulated values that scatter is only the display rounding.":
  "El ajuste es una recta de mínimos cuadrados \\(y = a + bx\\) con pesos iguales, solo a partir de tus filas capturadas. Los errores estándar vienen de la dispersión de las filas alrededor de la recta; con valores simulados ideales esa dispersión es solo el redondeo de la pantalla.",
"Blind hides the model curves in the C and U plot, the value of ε₀ and the formula in the header, κ on the material buttons and its slider, the plate and slab forces, σ and the fields inside the slab, the energy check, the energy in the field, the setup hints and the constants derived from your fit. The meters stay: C, Q, V, E, U and the energy bars.":
  "A ciegas oculta las curvas del modelo en la gráfica de C y U, el valor de ε₀ y la fórmula del encabezado, κ en los botones de material y su deslizador, las fuerzas sobre las placas y sobre la placa dieléctrica, σ y los campos dentro de la placa dieléctrica, la comprobación de energía, la energía en el campo, las pistas de las configuraciones y las constantes obtenidas de tu ajuste. Los medidores se quedan: C, Q, V, E, U y las barras de energía.",
"The energy density is \\(u = \\tfrac{1}{2}\\kappa\\varepsilon_0 E^2\\) (or \\(\\tfrac{1}{2}\\mathbf{E}\\cdot\\mathbf{D}\\)). In the ideal model the field is uniform in each region, so \\(u\\) times the volume of each region, summed, gives exactly \\(\\tfrac{1}{2}CV^2\\).":
  "La densidad de energía es \\(u = \\tfrac{1}{2}\\kappa\\varepsilon_0 E^2\\) (o \\(\\tfrac{1}{2}\\mathbf{E}\\cdot\\mathbf{D}\\)). En el modelo ideal el campo es uniforme en cada región, así que \\(u\\) por el volumen de cada región, sumado, da exactamente \\(\\tfrac{1}{2}CV^2\\).",
"Capacitor values step through the E6 series from {#} pF to {#} nF. Drag a plate on the drawing to change that capacitor, or the battery up and down to change V. The plate gap is drawn on a log scale.":
  "Los valores de los capacitores avanzan por la serie E6 de {#} pF a {#} nF. Arrastra una placa en el dibujo para cambiar ese capacitor, o la batería hacia arriba y hacia abajo para cambiar V. La separación de las placas se dibuja en escala logarítmica.",
"Model: the readouts use the ideal parallel plate model with a uniform field and no fringing. The field lines, drawn in the front face of the plates, come from a numerical solution of Laplace’s equation for this cross section (plates infinitely deep, inside an insulating box {#} cm beyond the plates, so no field line leaves it), so they show the fringing at the edges honestly; lines start in proportion to the free charge and a share \\(1 - 1/\\kappa\\) of them ends on the bound charge where they enter the slab, so line density matches E in the uniform regions (near the slab’s ends it is only approximate). The few lines that leave the outer faces fade out away from the plates. The wires, the stand, the supply and the electrometer are not part of that solution; the electrometer is ideal and draws no charge, and the water tank’s thin glass walls are ignored. All changes are slow (quasi static), the battery and wires are ideal, and the slab slides without friction.":
  "Modelo: las lecturas usan el modelo ideal de placas paralelas con un campo uniforme y sin efectos de borde. Las líneas de campo, dibujadas en la cara frontal de las placas, vienen de una solución numérica de la ecuación de Laplace para esta sección transversal (placas infinitamente profundas, dentro de una caja aislante {#} cm más allá de las placas, así que ninguna línea de campo sale de ella), así que muestran fielmente los efectos de borde; las líneas empiezan en proporción a la carga libre y una parte \\(1 - 1/\\kappa\\) de ellas termina en la carga ligada donde entran a la placa dieléctrica, así que la densidad de líneas coincide con E en las regiones uniformes (cerca de los extremos de la placa dieléctrica es solo aproximada). Las pocas líneas que salen por las caras exteriores se desvanecen lejos de las placas. Los cables, el soporte, la fuente y el electrómetro no forman parte de esa solución; el electrómetro es ideal y no toma carga, y se ignoran las paredes delgadas de vidrio del tanque de agua. Todos los cambios son lentos (cuasiestáticos), la batería y los cables son ideales, y la placa dieléctrica se desliza sin fricción.",
"Find how plate geometry and a dielectric change capacitance, then compare charge, voltage and energy with the battery connected and disconnected.":
  "Encuentra cómo cambian la capacitancia la geometría de las placas y un dieléctrico, y luego compara la carga, el voltaje y la energía con la batería conectada y desconectada.",
"Capacitance relates charge magnitude to potential difference (§{#}):":
  "La capacitancia relaciona la magnitud de la carga con la diferencia de potencial (§{#}):",
"\\[C=\\frac{Q}{V},\\qquad C_0=\\frac{\\epsilon_0A}{d}.\\]":
  "\\[C=\\frac{Q}{V},\\qquad C_0=\\frac{\\epsilon_0A}{d}.\\]",
"A dielectric filling the whole gap gives \\(C = \\kappa C_0\\) (§{#}). Stored energy can be written in three equivalent forms (§{#}):":
  "Un dieléctrico que llena todo el espacio da \\(C = \\kappa C_0\\) (§{#}). La energía almacenada puede escribirse de tres formas equivalentes (§{#}):",
"\\[U=\\frac{Q^2}{2C}=\\frac12 CV^2=\\frac12 QV.\\]":
  "\\[U=\\frac{Q^2}{2C}=\\frac12 CV^2=\\frac12 QV.\\]",
"Disconnecting the battery holds \\(Q\\) fixed. Leaving it connected holds \\(V\\) fixed. The same increase in capacitance can therefore change stored energy in opposite directions.":
  "Desconectar la batería mantiene fija \\(Q\\). Dejarla conectada mantiene fijo \\(V\\). Por eso el mismo aumento de capacitancia puede cambiar la energía almacenada en sentidos opuestos.",
"Predict \\(C\\), \\(Q\\) and \\(U\\) when \\(d\\) doubles with the battery connected.":
  "Predice \\(C\\), \\(Q\\) y \\(U\\) cuando \\(d\\) se duplica con la batería conectada.",
"Repeat the prediction when the charged capacitor is disconnected first.":
  "Repite la predicción cuando el capacitor cargado se desconecta primero.",
"For three capacitors, explain why charge is equal in series but voltage is equal in parallel (§{#}).":
  "Para tres capacitores, explica por qué la carga es igual en serie pero el voltaje es igual en paralelo (§{#}).",
"Discharge real capacitors through a suitable resistor before handling them. Observe polarity and voltage ratings. Move plates or dielectric pieces only under the instructor’s approved procedure.":
  "Descarga los capacitores reales a través de un resistor adecuado antes de manipularlos. Respeta la polaridad y los valores nominales de voltaje. Mueve las placas o las piezas dieléctricas solo según el procedimiento aprobado por el instructor.",
"<strong>Geometry.</strong> Use parallel plates with known area. With the battery connected, measure \\(C\\), \\(Q\\) and \\(V\\) at five plate separations. Begin near \\(A = 144\\ \\text{cm}^2\\), \\(d = 1.00\\ \\text{cm}\\) and \\(V = 100\\ \\text{V}\\) in the simulation; use safe assigned values on a real bench. Repeat after charging and disconnecting the battery. Calculate stored energy from your own measurements.":
  "<strong>Geometría.</strong> Usa placas paralelas de área conocida. Con la batería conectada, mide \\(C\\), \\(Q\\) y \\(V\\) en cinco separaciones de las placas. Empieza cerca de \\(A = 144\\ \\text{cm}^2\\), \\(d = 1.00\\ \\text{cm}\\) y \\(V = 100\\ \\text{V}\\) en la simulación; usa valores seguros asignados en una mesa real. Repite después de cargar y desconectar la batería. Calcula la energía almacenada a partir de tus propias mediciones.",
"<strong>Dielectric.</strong> Begin with an empty gap. Insert a dielectric in five steps while holding the gap fixed. Repeat connected and isolated. Measure the inserted area fraction, capacitance and voltage. At full insertion, compare \\(C/C_0\\) with \\(\\kappa\\).":
  "<strong>Dieléctrico.</strong> Empieza con el espacio vacío. Inserta un dieléctrico en cinco pasos manteniendo fija la separación. Repite conectado y aislado. Mide la fracción de área insertada, la capacitancia y el voltaje. Con la inserción completa, compara \\(C/C_0\\) con \\(\\kappa\\).",
"<strong>Combinations.</strong> Measure the equivalent capacitance and component voltages for {#}, {#} and {#} pF capacitors in series, parallel and the mixed arrangement. Draw each circuit and calculate its predicted equivalent capacitance before measuring.":
  "<strong>Combinaciones.</strong> Mide la capacitancia equivalente y los voltajes de los componentes para capacitores de {#}, {#} y {#} pF en serie, en paralelo y en el arreglo mixto. Dibuja cada circuito y calcula su capacitancia equivalente predicha antes de medir.",
"<strong>Inside the dielectric (§{#}).</strong> Open Inside the dielectric. For water and then benzene, with the free charge’s field at about {#} kV/m, {#} kV/m and {#} MV/m, read \\(\\kappa\\), the field inside, the free and bound charge densities and the average dipole per molecule (for water also the average alignment, for benzene the shift of the electron cloud). These readings are not part of the Data table; record them in your answer to Analysis {#}.":
  "<strong>Dentro del dieléctrico (§{#}).</strong> Abre Dentro del dieléctrico. Para agua y luego benceno, con el campo de la carga libre en unos {#} kV/m, {#} kV/m y {#} MV/m, lee \\(\\kappa\\), el campo dentro, las densidades de carga libre y ligada y el dipolo promedio por molécula (para el agua también la alineación promedio, para el benceno el desplazamiento de la nube de electrones). Estas lecturas no son parte de la tabla de datos; regístralas en tu respuesta al Análisis {#}.",
"<strong>Using the virtual apparatus.</strong> Compare connected and isolated parallel plates, beginning near an area of {#} cm², a separation of {#} cm and a battery voltage of {#} V. Begin each geometry scan from a clearly recorded starting state and measure capacitance, charge and voltage at five separations, with predictions hidden. Send each scan to the worksheet before changing the setup, so connected and isolated scans get their own copies of the Data table. For the dielectric scan, keep the gap fixed and measure five insertion fractions, again comparing connected and isolated plates. Analyze \\(C\\) against \\(1/d\\), \\(C\\) against insertion fraction and \\(V\\) against \\(d\\) for the appropriate cases. Finally, compare series, parallel and mixed networks of {#}, {#} and {#} pF capacitors. Record energy and work observations separately if they are not visible during blind measurement; reveal predictions only after completing your calculations.":
  "<strong>Uso del aparato virtual.</strong> Compara placas paralelas conectadas y aisladas, empezando cerca de un área de {#} cm², una separación de {#} cm y un voltaje de la batería de {#} V. Empieza cada barrido de geometría desde un estado inicial claramente registrado y mide la capacitancia, la carga y el voltaje en cinco separaciones, con las predicciones ocultas. Envía cada barrido a la hoja de trabajo antes de cambiar la configuración, para que los barridos conectado y aislado tengan sus propias copias de la tabla de datos. Para el barrido del dieléctrico, mantén fija la separación y mide cinco fracciones de inserción, de nuevo comparando placas conectadas y aisladas. Analiza \\(C\\) en función de \\(1/d\\), \\(C\\) en función de la fracción de inserción y \\(V\\) en función de \\(d\\) para los casos que correspondan. Finalmente, compara redes en serie, en paralelo y mixtas de capacitores de {#}, {#} y {#} pF. Registra por separado las observaciones de energía y trabajo si no son visibles durante la medición a ciegas; revela las predicciones solo después de terminar tus cálculos.",
"<span>A</span>Run: connected/isolated/network":
  "<span>A</span>Corrida: conectado/aislado/red",
"<span>D</span>Inserted fraction":
  "<span>D</span>Fracción insertada",
"Run: connected/isolated/network, row {#}":
  "Corrida: conectado/aislado/red, fila {#}",
"d (m), row {#}":
  "d (m), fila {#}",
"A (m²), row {#}":
  "A (m²), fila {#}",
"Inserted fraction, row {#}":
  "Fracción insertada, fila {#}",
"C (F), row {#}":
  "C (F), fila {#}",
"Q (C), row {#}":
  "Q (C), fila {#}",
"V (V), row {#}":
  "V (V), fila {#}",
"U (J), row {#}":
  "U (J), fila {#}",
"{#}/d ({#}/m), row {#}":
  "{#}/d ({#}/m), fila {#}",
"Use a separate copy for each scan. Fill in the last column yourself for the two separation scans. For networks, put the component label in the first column and leave geometry columns blank.":
  "Usa una copia separada para cada barrido. Llena tú mismo la última columna para los dos barridos de separación. Para las redes, pon la etiqueta del componente en la primera columna y deja en blanco las columnas de geometría.",
"Plot \\(C\\) against \\(1/d\\) and infer \\(\\epsilon_0\\) from the slope and plate area. Treat this as a consistency test of the ideal model.":
  "Grafica \\(C\\) en función de \\(1/d\\) e infiere \\(\\epsilon_0\\) a partir de la pendiente y del área de las placas. Trátalo como una prueba de consistencia del modelo ideal.",
"For the isolated scan, plot \\(V\\) against \\(d\\) and explain its slope using \\(Q = CV\\).":
  "Para el barrido aislado, grafica \\(V\\) en función de \\(d\\) y explica su pendiente usando \\(Q = CV\\).",
"Plot \\(C\\) against inserted fraction. Infer \\(\\kappa\\) from the fully filled and empty values. Do not use \\(C = \\kappa C_0\\) if an air gap remains beside the slab thickness.":
  "Grafica \\(C\\) en función de la fracción insertada. Infiere \\(\\kappa\\) a partir de los valores completamente lleno y vacío. No uses \\(C = \\kappa C_0\\) si queda un espacio de aire junto al grosor de la placa dieléctrica.",
"Compare stored energy in connected and isolated scans. Use the battery work \\(V\\Delta Q\\) to explain the energy change in the connected case.":
  "Compara la energía almacenada en los barridos conectado y aislado. Usa el trabajo de la batería \\(V\\Delta Q\\) para explicar el cambio de energía en el caso conectado.",
"Test the series/parallel formulas and sum the component energies. The mixed arrangement has \\(C_1\\) in series with the parallel pair \\(C_2\\) and \\(C_3\\).":
  "Pon a prueba las fórmulas de serie y paralelo y suma las energías de los componentes. El arreglo mixto tiene \\(C_1\\) en serie con el par en paralelo \\(C_2\\) y \\(C_3\\).",
"For the dielectric readings, check that the field inside is \\(E_0/\\kappa\\) and that the bound charge density is \\((1 - 1/\\kappa)\\) times the free charge density. How does the average dipole per molecule depend on \\(E_0\\)? Water’s molecules line up only a few parts in a million on average, yet water has \\(\\kappa = 80.1\\). Explain how, and how benzene, whose molecules have no permanent dipole, is polarized instead.":
  "Para las lecturas del dieléctrico, comprueba que el campo dentro es \\(E_0/\\kappa\\) y que la densidad de carga ligada es \\((1 - 1/\\kappa)\\) veces la densidad de carga libre. ¿Cómo depende el dipolo promedio por molécula de \\(E_0\\)? Las moléculas del agua se alinean en promedio solo unas pocas partes por millón, y aun así el agua tiene \\(\\kappa = 80.1\\). Explica cómo, y cómo se polariza en cambio el benceno, cuyas moléculas no tienen dipolo permanente.",
"Include plate area and gap resolution in the capacitance comparison. A small gap error can dominate \\(C\\). For real plates, fringing and misalignment can shift the slope. The virtual model is ideal; captured rounding and setting resolution are not random instrumental noise. State which values you measured and which you calculated.":
  "Incluye la resolución del área de las placas y de la separación en la comparación de la capacitancia. Un pequeño error en la separación puede dominar \\(C\\). En placas reales, los efectos de borde y la desalineación pueden desplazar la pendiente. El modelo virtual es ideal; el redondeo de las capturas y la resolución de los ajustes no son ruido instrumental aleatorio. Indica qué valores mediste y cuáles calculaste.",
"Why does disconnecting the battery change what remains constant?":
  "¿Por qué desconectar la batería cambia lo que permanece constante?",
"Why can inserting a dielectric increase \\(U\\) at fixed \\(V\\) but decrease \\(U\\) at fixed \\(Q\\)?":
  "¿Por qué insertar un dieléctrico puede aumentar \\(U\\) con \\(V\\) fijo pero disminuir \\(U\\) con \\(Q\\) fija?",
"Why is the smallest series capacitor at the largest voltage?":
  "¿Por qué el capacitor más pequeño en serie está al mayor voltaje?",
"Does the battery’s work all become stored electric energy when capacitance changes?":
  "¿Todo el trabajo de la batería se convierte en energía eléctrica almacenada cuando cambia la capacitancia?",
"A dielectric carries no net charge. Why does it still reduce the field between the plates?":
  "Un dieléctrico no lleva carga neta. ¿Por qué aun así reduce el campo entre las placas?",
"Prelab answers, settings and CSV, the geometry/dielectric graphs, inferred \\(\\epsilon_0\\) and \\(\\kappa\\) with uncertainty, network calculations, energy interpretation and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ajustes y CSV, las gráficas de geometría y dieléctrico, \\(\\epsilon_0\\) y \\(\\kappa\\) inferidas con incertidumbre, los cálculos de las redes, la interpretación de la energía y respuestas a las preguntas. Identifica los datos simulados.",
"Plate area":
  "Área de las placas",
"Capacitance with nothing in the gap":
  "Capacitancia sin nada en el espacio",
"Capacitance in series with the parallel pair":
  "Capacitancia en serie con el par en paralelo",
"One capacitance of the parallel pair":
  "Una capacitancia del par en paralelo",
"The other capacitance of the parallel pair":
  "La otra capacitancia del par en paralelo",
"Electric displacement":
  "Desplazamiento eléctrico",
"Field without the dielectric":
  "Campo sin el dieléctrico",
"Charge on the plates":
  "Carga en las placas",
"Stored energy":
  "Energía almacenada",
"Voltage across the capacitor":
  "Voltaje a través del capacitor",
"Intercept of the fitted line":
  "Ordenada al origen de la recta ajustada",
"Slope of the fitted line":
  "Pendiente de la recta ajustada",
"Plate separation":
  "Separación de las placas",
"Dielectric constant":
  "Constante dieléctrica",
"Side of the square plates":
  "Lado de las placas cuadradas",
"Energy density of the field":
  "Densidad de energía del campo",
"Quantity on the fit's horizontal axis":
  "Cantidad en el eje horizontal del ajuste",
"Quantity on the fit's vertical axis":
  "Cantidad en el eje vertical del ajuste",
"Capacitors and Dielectrics":
  "Capacitores y dieléctricos"
});
