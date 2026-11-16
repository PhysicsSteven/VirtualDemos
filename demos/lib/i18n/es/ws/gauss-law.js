/* ws/gauss-law in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/gauss-law', {
"Geometry/distribution":
  "Geometría/distribución",
"Charge positions or r (m)":
  "Posiciones de las cargas o r (m)",
"Q_ enc (C)":
  "Q_ enc (C)",
"Numerical flux (N·m²/C)":
  "Flujo numérico (N·m²/C)",
"Predicted flux (N·m²/C)":
  "Flujo predicho (N·m²/C)",
"E (N/C), if used":
  "E (N/C), si se usa",
"Numerical status/evaluations":
  "Estado numérico/evaluaciones",
"Electric Flux and Gauss’s Law | VirtualDemos":
  "Flujo eléctrico y ley de Gauss | VirtualDemos",
"Electric Flux and Gauss’s Law":
  "Flujo eléctrico y ley de Gauss",
"<strong>Setups in the demo:</strong> Charge inside; Charge outside; Dipole inside; Uniform sphere; Line of charge; Plane of charge.":
  "<strong>Configuraciones en la demo:</strong> Carga adentro; Carga afuera; Dipolo adentro; Esfera uniforme; Línea de carga; Plano de carga.",
"Record reading freezes the surface, the charges and the numerical flux in a row (flux in N·m²/C). The CSV holds every row in SI units, with the closest charge distance and the quadrature status.":
  "Capturar congela la superficie, las cargas y el flujo numérico en una fila (flujo en N·m²/C). El CSV contiene todas las filas en unidades SI, con la distancia de la carga más cercana y el estado de la cuadratura.",
"3D view: the whole closed surface, with its area elements drawn as tiles. Field lines leave each charge evenly in all directions, three times as many per nC as set above, so lines out minus lines in follows \\(Q_{\\text{enc}}\\). Drag empty space to turn the view.":
  "Vista 3D: toda la superficie cerrada, con sus elementos de área dibujados como mosaicos. Las líneas de campo salen de cada carga de manera uniforme en todas direcciones, tres veces más por nC que arriba, así que las líneas que salen menos las que entran siguen a \\(Q_{\\text{enc}}\\). Arrastra en el espacio vacío para girar la vista.",
"3D view: charge dots inside the Gaussian surface are bright, the rest faint. With flux patches on, the caps of the line’s cylinder and the side of the pillbox stay gray: \\(\\mathbf{E}\\) runs along them, so \\(\\mathbf{E}\\cdot d\\mathbf{A} = 0\\).":
  "Vista 3D: los puntos de carga dentro de la superficie gaussiana son brillantes y los demás tenues. Con los parches de flujo activados, las tapas del cilindro de la línea y el costado de la caja de píldoras quedan grises: \\(\\mathbf{E}\\) corre a lo largo de ellos, así que \\(\\mathbf{E}\\cdot d\\mathbf{A} = 0\\).",
"Model: point charges in empty space, all in the plane \\(z = 0\\), which is the slice you see. Their field lines in that plane stay in the plane, so the drawn lines are exact field lines. Lines are drawn in proportion to charge, but in a slice the spacing of lines does not show the field strength the way it does in 3D. The surface color fades where \\(\\mathbf{E}\\cdot\\hat{\\mathbf{n}}\\) is small. Arrows on the surface show the direction of \\(\\mathbf{E}\\); their length grows with \\(E\\) and levels off for strong fields.":
  "Modelo: cargas puntuales en el espacio vacío, todas en el plano \\(z = 0\\), que es el corte que ves. Sus líneas de campo en ese plano se quedan en el plano, así que las líneas dibujadas son líneas de campo exactas. Las líneas se dibujan en proporción a la carga, pero en un corte la separación entre líneas no muestra la intensidad del campo como en 3D. El color de la superficie se desvanece donde \\(\\mathbf{E}\\cdot\\hat{\\mathbf{n}}\\) es pequeño. Las flechas sobre la superficie muestran la dirección de \\(\\mathbf{E}\\); su longitud crece con \\(E\\) y se nivela para campos intensos.",
"Test how enclosed charge, surface shape and charge position affect electric flux. Use symmetry to connect total flux with electric field.":
  "Pon a prueba cómo afectan al flujo eléctrico la carga encerrada, la forma de la superficie y la posición de la carga. Usa la simetría para relacionar el flujo total con el campo eléctrico.",
"Electric flux uses the outward area normal (§{#}):":
  "El flujo eléctrico usa la normal al área hacia afuera (§{#}):",
"\\[\\Phi_E=\\oint\\mathbf E\\cdot d\\mathbf A.\\]":
  "\\[\\Phi_E=\\oint\\mathbf E\\cdot d\\mathbf A.\\]",
"Gauss’s law relates net outward flux to enclosed charge (§{#}):":
  "La ley de Gauss relaciona el flujo neto hacia afuera con la carga encerrada (§{#}):",
"\\[\\Phi_E=\\frac{Q_{\\rm enc}}{\\epsilon_0}.\\]":
  "\\[\\Phi_E=\\frac{Q_{\\rm enc}}{\\epsilon_0}.\\]",
"It holds for every closed surface. Extracting \\(E\\) from the integral requires sufficient symmetry (§{#}). A drawing’s field line count is a visual aid, not a measurement of the continuous integral.":
  "Vale para toda superficie cerrada. Sacar \\(E\\) de la integral requiere suficiente simetría (§{#}). El número de líneas de campo de un dibujo es una ayuda visual, no una medición de la integral continua.",
"Predict net flux when a +{#} nC charge is moved within a closed surface without crossing it.":
  "Predice el flujo neto cuando una carga de +{#} nC se mueve dentro de una superficie cerrada sin cruzarla.",
"Can an external charge change the field on the surface without changing its net flux?":
  "¿Puede una carga externa cambiar el campo sobre la superficie sin cambiar su flujo neto?",
"Why can a spherical Gaussian surface simplify a spherically symmetric problem?":
  "¿Por qué una superficie gaussiana esférica puede simplificar un problema con simetría esférica?",
"For a real electrostatics bench, follow the instructor’s high voltage and discharge procedures. Do not touch charged conductors or move leads with the supply on.":
  "En un banco de electrostática real, sigue los procedimientos de alto voltaje y de descarga del instructor. No toques conductores cargados ni muevas cables con la fuente encendida.",
"<strong>Shape and position.</strong> Press the Charge inside setup (one +{#} nC charge). Press Sphere, Box and Cylinder under Gaussian surface in turn and press Record reading for each, keeping the charge clearly inside. Then click the charge, type a new x and y (in cm) in its boxes under Charges to move it away from the center (still inside), and record the three shapes again. Predict flux before consulting a theoretical readout.":
  "<strong>Forma y posición.</strong> Pulsa la configuración Carga adentro (una carga de +{#} nC). Pulsa Esfera, Caja y Cilindro por turnos bajo Superficie gaussiana y pulsa Registrar lectura para cada una, manteniendo la carga claramente adentro. Luego haz clic en la carga, escribe una nueva x y una nueva y (en cm) en sus cuadros bajo Cargas para alejarla del centro (todavía adentro), y registra las tres formas otra vez. Predice el flujo antes de consultar una lectura teórica.",
"<strong>Superposition.</strong> Press the Dipole inside setup, click each charge and set it with the Selected charge q slider so the two are +{#} nC and −{#} nC, both inside the same surface. Record flux. Move only the negative charge outside (type its x and y) and repeat. Then set the charges to +{#} nC and −{#} nC and record with both inside and with both outside. Each reading stores every charge’s position, so the table holds what you need to reconstruct them.":
  "<strong>Superposición.</strong> Pulsa la configuración Dipolo adentro, haz clic en cada carga y fíjala con el control deslizante Carga seleccionada q de modo que las dos sean +{#} nC y −{#} nC, ambas dentro de la misma superficie. Registra el flujo. Mueve solo la carga negativa afuera (escribe su x y su y) y repite. Luego fija las cargas en +{#} nC y −{#} nC y registra con ambas adentro y con ambas afuera. Cada lectura guarda la posición de cada carga, así que la tabla contiene lo que necesitas para reconstruirlas.",
"<strong>Symmetry.</strong> Press Symmetry above the picture, then Sphere and Ball under Charge distribution. Set Total charge Q and Sphere radius R, move the Gaussian radius r slider, and write the field \\(E\\) from the Result line of Gauss’s law, step by step into the table by hand at several radii inside and outside (Record reading stores only Any surface readings). Then press Conductor, keep the same \\(Q\\) and \\(R\\), and repeat at the same radii. Use the conductor’s one sided surface limits rather than assigning one field value to the ideal charged surface (§{#}).":
  "<strong>Simetría.</strong> Pulsa Simetría arriba de la imagen, luego Esfera y Bola bajo Distribución de carga. Fija la Carga total Q y el Radio de la esfera R, mueve el control deslizante Radio gaussiano r, y escribe el campo \\(E\\) de la línea Resultado de la ley de Gauss, paso a paso en la tabla a mano a varios radios adentro y afuera (Registrar lectura guarda solo las lecturas de Cualquier superficie). Luego pulsa Conductora, conserva la misma \\(Q\\) y el mismo \\(R\\), y repite a los mismos radios. Usa los límites de un solo lado de la superficie del conductor en lugar de asignar un solo valor del campo a la superficie cargada ideal (§{#}).",
"<strong>Using the virtual apparatus.</strong> Untick Show predicted flux \\(Q_{\\rm enc}/\\varepsilon_0\\) (in Readings) while you measure. Start from one charge inside a surface, pause, and set the charge and its position; compare the sphere, the box and the cylinder. Start from the dipole for the charge combinations. Record every charge’s position with each reading; the worksheet also gets the geometry and the numerical status of each row. Keep each charge at least {#} cm from the surface: this is a numerical exclusion zone, not physics. Flag any row marked <strong>Quadrature tolerance not met</strong> rather than treating it as a reliable measurement. For the last part, switch modes to Symmetry with a sphere, first a uniformly charged ball (Ball) and then a conductor (Conductor). Press Export to worksheet, then Clear, at the end of each investigation so each gets its own table copy.":
  "<strong>Uso del aparato virtual.</strong> Desmarca Mostrar el flujo predicho \\(Q_{\\rm enc}/\\varepsilon_0\\) (en Lecturas) mientras mides. Empieza con una carga dentro de una superficie, pausa, y fija la carga y su posición; compara la esfera, la caja y el cilindro. Empieza con el dipolo para las combinaciones de cargas. Registra la posición de cada carga con cada lectura; la hoja también recibe la geometría y el estado numérico de cada fila. Mantén cada carga al menos a {#} cm de la superficie: esta es una zona de exclusión numérica, no física. Marca cualquier fila señalada con <strong>No se alcanzó la tolerancia de la cuadratura</strong> en lugar de tratarla como una medición confiable. Para la última parte, cambia al modo Simetría con una esfera, primero una bola con carga uniforme (Bola) y luego un conductor (Conductora). Pulsa Exportar a la hoja y luego Borrar al final de cada investigación para que cada una tenga su propia copia de la tabla.",
"<span>A</span>Geometry/distribution":
  "<span>A</span>Geometría/distribución",
"<span>B</span>Charge positions or \\(r\\) (m)":
  "<span>B</span>Posiciones de las cargas o \\(r\\) (m)",
"<span>C</span>\\(Q_{\\rm enc}\\) (C)":
  "<span>C</span>\\(Q_{\\rm enc}\\) (C)",
"<span>D</span>Numerical flux (N·m²/C)":
  "<span>D</span>Flujo numérico (N·m²/C)",
"<span>E</span>Predicted flux (N·m²/C)":
  "<span>E</span>Flujo predicho (N·m²/C)",
"<span>F</span>\\(E\\) (N/C), if used":
  "<span>F</span>\\(E\\) (N/C), si se usa",
"<span>G</span>Numerical status/evaluations":
  "<span>G</span>Estado numérico/evaluaciones",
"Geometry/distribution, row {#}":
  "Geometría/distribución, fila {#}",
"Charge positions or r (m), row {#}":
  "Posiciones de las cargas o r (m), fila {#}",
"Q_ enc (C), row {#}":
  "Q_ enc (C), fila {#}",
"Numerical flux (N·m²/C), row {#}":
  "Flujo numérico (N·m²/C), fila {#}",
"Predicted flux (N·m²/C), row {#}":
  "Flujo predicho (N·m²/C), fila {#}",
"E (N/C), if used, row {#}":
  "E (N/C), si se usa, fila {#}",
"Numerical status/evaluations, row {#}":
  "Estado numérico/evaluaciones, fila {#}",
"Record all shape dimensions and \\(Q\\), \\(R\\) above the relevant table. Keep separate copies for each investigation.":
  "Registra todas las dimensiones de la forma y \\(Q\\), \\(R\\) sobre la tabla correspondiente. Mantén copias separadas para cada investigación.",
"Calculate \\(Q_{\\rm enc}/\\epsilon_0\\) independently for every flux row. Compare shapes and charge positions.":
  "Calcula \\(Q_{\\rm enc}/\\epsilon_0\\) de forma independiente para cada fila de flujo. Compara formas y posiciones de las cargas.",
"Use a nonzero scale such as \\(\\lvert q \\rvert/\\epsilon_0\\) to normalize errors when predicted net flux is zero.":
  "Usa una escala distinta de cero, como \\(\\lvert q \\rvert/\\epsilon_0\\), para normalizar los errores cuando el flujo neto predicho es cero.",
"Derive \\(E(r)\\) inside/outside a uniform ball and a conductor using symmetry. Compare with the radial measurements and discuss continuity or a jump at \\(R\\).":
  "Deduce \\(E(r)\\) adentro/afuera de una bola uniforme y de un conductor usando la simetría. Compara con las mediciones radiales y comenta la continuidad o un salto en \\(R\\).",
"Include coordinate and surface size resolution when deciding whether a charge is inside. Omit positions whose classification is uncertain. Numerical quadrature error is different from measurement rounding. Near a charge, the field changes rapidly and cancellation can be difficult; an integration warning is not a physical violation of Gauss’s law. Only an exact point charge on the surface creates the mathematical singularity.":
  "Incluye la resolución de las coordenadas y del tamaño de la superficie al decidir si una carga está adentro. Omite las posiciones cuya clasificación sea incierta. El error numérico de la cuadratura es distinto del redondeo de la medición. Cerca de una carga, el campo cambia rápidamente y la cancelación puede ser difícil; una advertencia de la integración no es una violación física de la ley de Gauss. Solo una carga puntual exactamente sobre la superficie crea la singularidad matemática.",
"Does zero net flux imply zero electric field on the surface?":
  "¿Un flujo neto cero implica un campo eléctrico cero sobre la superficie?",
"Why can changing shape alter outward and inward contributions while leaving their sum unchanged?":
  "¿Por qué cambiar la forma puede alterar las contribuciones hacia afuera y hacia adentro sin cambiar su suma?",
"Prelab answers, configurations and CSV, calculated fluxes, radial field comparison, uncertainty and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, configuraciones y CSV, flujos calculados, la comparación del campo radial, la incertidumbre y las respuestas a las preguntas. Identifica los datos simulados.",
"Area (d A: a small patch of the surface)":
  "Área (d A: un pequeño parche de la superficie)",
"Electric flux through the closed surface":
  "Flujo eléctrico a través de la superficie cerrada",
"Total charge of the ball or sphere":
  "Carga total de la bola o de la esfera",
"Charge enclosed by the surface":
  "Carga encerrada por la superficie",
"Radius of the ball or sphere":
  "Radio de la bola o de la esfera",
"Unit vector normal to the surface, pointing outward":
  "Vector unitario normal a la superficie, apuntando hacia afuera",
"A point charge":
  "Una carga puntual",
"Distance from the center":
  "Distancia al centro",
"Coordinate out of the plane of the charges":
  "Coordenada fuera del plano de las cargas",
"Gauss's Law":
  "Ley de Gauss",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>",
"<strong>Shape and position.</strong> Place one +{#} nC charge inside a closed surface. Record numerical flux for a sphere, box and cylinder, keeping the charge clearly inside. Repeat with the charge displaced from the center. Predict flux before consulting a theoretical readout.":
  "<strong>Forma y posición.</strong> Coloca una carga de +{#} nC dentro de una superficie cerrada. Registra el flujo numérico para una esfera, una caja y un cilindro, manteniendo la carga claramente adentro. Repite con la carga desplazada del centro. Predice el flujo antes de consultar una lectura teórica.",
"<strong>Superposition.</strong> Put +{#} nC and −{#} nC inside the same surface. Record flux. Move only the negative charge outside and repeat. Then compare equal and opposite charges both inside with both outside. Record enough information to reconstruct the charge positions.":
  "<strong>Superposición.</strong> Pon +{#} nC y −{#} nC dentro de la misma superficie. Registra el flujo. Mueve solo la carga negativa afuera y repite. Luego compara cargas iguales y opuestas, ambas adentro, con ambas afuera. Registra suficiente información para reconstruir las posiciones de las cargas.",
"<strong>Approach to a boundary.</strong> Keep a charge fixed and change the surface size to approach it from either side. Record five or more separations where the numerical integral is available. Compare numerical error and field evaluation count as the separation shrinks.":
  "<strong>Acercamiento a una frontera.</strong> Mantén fija una carga y cambia el tamaño de la superficie para acercarte a ella desde cualquier lado. Registra cinco o más separaciones donde esté disponible la integral numérica. Compara el error numérico y el número de evaluaciones del campo a medida que la separación se reduce.",
"<strong>Symmetry.</strong> Compare a uniformly charged ball and a conducting sphere with the same \\(Q\\) and \\(R\\). Record \\(E\\) at several radii inside and outside. Use the conductor’s one sided surface limits rather than assigning one field value to the ideal charged surface (§{#}).":
  "<strong>Simetría.</strong> Compara una bola con carga uniforme y una esfera conductora con la misma \\(Q\\) y el mismo \\(R\\). Registra \\(E\\) a varios radios adentro y afuera. Usa los límites de un solo lado de la superficie del conductor en lugar de asignar un solo valor del campo a la superficie cargada ideal (§{#}).",
"<strong>Using the virtual apparatus.</strong> Hide the predicted flux \\(Q_{\\rm enc}/\\varepsilon_0\\) while you measure. Start from one charge inside a surface, pause, and set the charge and its position; compare the sphere, the box and the cylinder. Start from the dipole for the charge combinations. Record every charge’s position with each reading; the worksheet also gets the geometry and the numerical status of each row. Keep each charge at least {#} cm from the surface: this is a numerical exclusion zone, not physics. Flag any row marked <strong>Quadrature tolerance not met</strong> rather than treating it as a reliable measurement. For the last part, switch to the symmetry mode with a sphere, first a uniformly charged ball and then a conductor.":
  "<strong>Uso del aparato virtual.</strong> Oculta el flujo predicho \\(Q_{\\rm enc}/\\varepsilon_0\\) mientras mides. Empieza con una carga dentro de una superficie, pausa, y fija la carga y su posición; compara la esfera, la caja y el cilindro. Empieza con el dipolo para las combinaciones de cargas. Registra la posición de cada carga con cada lectura; la hoja también recibe la geometría y el estado numérico de cada fila. Mantén cada carga al menos a {#} cm de la superficie: esta es una zona de exclusión numérica, no física. Marca cualquier fila señalada con <strong>No se alcanzó la tolerancia de la cuadratura</strong> en lugar de tratarla como una medición confiable. Para la última parte, cambia al modo de simetría con una esfera, primero una bola con carga uniforme y luego un conductor.",
"Plot flux error and evaluation count against the closest charge to surface separation. Distinguish boundary sensitivity from a controlled quadrature tolerance study.":
  "Grafica el error del flujo y el número de evaluaciones en función de la separación entre la carga más cercana y la superficie. Distingue la sensibilidad a la frontera de un estudio controlado de la tolerancia de la cuadratura.",
"When can \\(E\\) be taken outside the flux integral?":
  "¿Cuándo se puede sacar \\(E\\) de la integral del flujo?",
"Why is the field zero inside a conductor in electrostatic equilibrium but not generally inside a uniformly charged insulating ball?":
  "¿Por qué el campo es cero dentro de un conductor en equilibrio electrostático, pero en general no dentro de una bola aislante con carga uniforme?",
"Prelab answers, configurations and CSV, calculated fluxes, the boundary error graph, radial field comparison, uncertainty and answers to the questions. Identify simulated data.":
  "Respuestas previas al laboratorio, configuraciones y CSV, flujos calculados, la gráfica del error cerca de la frontera, la comparación del campo radial, la incertidumbre y las respuestas a las preguntas. Identifica los datos simulados."
});
