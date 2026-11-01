/* ws/doppler-light in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/doppler-light', {
"θ at emission (°)":
  "θ en la emisión (°)",
"{#} - βcosθ":
  "{#} - βcosθ",
"γ from data":
  "γ a partir de los datos",
"Doppler Effect for Light | VirtualDemos":
  "Efecto Doppler para la luz | VirtualDemos",
"Doppler Effect for Light":
  "Efecto Doppler para la luz",
"Measure the wavelength of light received from a fast moving source, test the relativistic Doppler formula against the classical one, and measure the time dilation factor \\(\\gamma\\) from the redshift seen when the source moves across the line of sight.":
  "Mide la longitud de onda de la luz recibida de una fuente que se mueve rápido, pon a prueba la fórmula Doppler relativista frente a la clásica y mide el factor de dilatación del tiempo \\(\\gamma\\) a partir del corrimiento al rojo que se ve cuando la fuente se mueve perpendicular a la línea de visión.",
"Light needs no medium and travels at \\(c\\) in every inertial frame, so its Doppler shift can depend only on the relative velocity of the source and the observer. Work in the observer’s frame, with the source moving at speed \\(v = \\beta c\\). Let \\(\\theta\\) be the angle, at the moment the light was emitted, between the source’s velocity and the line from the source to the observer: \\(\\theta = 0\\) when it heads straight at the observer, \\(90^\\circ\\) when it moves across the line of sight and \\(180^\\circ\\) when it heads straight away.":
  "La luz no necesita medio y viaja a \\(c\\) en todo marco inercial, así que su corrimiento Doppler solo puede depender de la velocidad relativa de la fuente y el observador. Trabaja en el marco del observador, con la fuente moviéndose con rapidez \\(v = \\beta c\\). Sea \\(\\theta\\) el ángulo, en el momento en que se emitió la luz, entre la velocidad de la fuente y la línea de la fuente al observador: \\(\\theta = 0\\) cuando va directo hacia el observador, \\(90^\\circ\\) cuando se mueve perpendicular a la línea de visión y \\(180^\\circ\\) cuando se aleja directo.",
"Two effects combine. Between one crest and the next, the source moves toward the observer by \\(v\\cos\\theta\\) times the period, which crowds the crests (the classical effect, as for sound). And the source’s clock runs slow by the factor":
  "Se combinan dos efectos. Entre una cresta y la siguiente, la fuente se acerca al observador \\(v\\cos\\theta\\) por el periodo, lo que apiña las crestas (el efecto clásico, como para el sonido). Y el reloj de la fuente va más lento por el factor",
"\\[\\gamma = \\frac{1}{\\sqrt{1 - \\beta^2}},\\]":
  "\\[\\gamma = \\frac{1}{\\sqrt{1 - \\beta^2}},\\]",
"so in the observer’s frame it emits its crests \\(\\gamma\\) times less often. Together, with \\(\\lambda\\) the wavelength in the source’s own frame and \\(\\lambda'\\) the wavelength received,":
  "así que en el marco del observador emite sus crestas \\(\\gamma\\) veces menos seguido. Juntos, con \\(\\lambda\\) la longitud de onda en el marco propio de la fuente y \\(\\lambda'\\) la longitud de onda recibida,",
"\\[\\frac{\\lambda'}{\\lambda} = \\gamma\\,(1 - \\beta\\cos\\theta).\\]":
  "\\[\\frac{\\lambda'}{\\lambda} = \\gamma\\,(1 - \\beta\\cos\\theta).\\]",
"Straight away from the observer (\\(\\theta = 180^\\circ\\)) this is the formula of §{#}, \\(\\lambda'/\\lambda = \\sqrt{(1 + \\beta)/(1 - \\beta)}\\), a redshift; straight toward (\\(\\theta = 0\\)) it is the inverse, a blueshift. Across the line of sight (\\(\\theta = 90^\\circ\\)) the classical factor is {#} and only time dilation is left: \\(\\lambda'/\\lambda = \\gamma\\), the <strong>transverse Doppler effect</strong>, a redshift with no classical counterpart. Astronomers report the shift as \\(z = \\lambda'/\\lambda - 1\\); for \\(\\beta \\ll 1\\), \\(z \\approx -\\beta\\cos\\theta\\), the radial velocity over \\(c\\).":
  "Alejándose directo del observador (\\(\\theta = 180^\\circ\\)) esta es la fórmula del §{#}, \\(\\lambda'/\\lambda = \\sqrt{(1 + \\beta)/(1 - \\beta)}\\), un corrimiento al rojo; acercándose directo (\\(\\theta = 0\\)) es la inversa, un corrimiento al azul. Perpendicular a la línea de visión (\\(\\theta = 90^\\circ\\)) el factor clásico es {#} y solo queda la dilatación del tiempo: \\(\\lambda'/\\lambda = \\gamma\\), el <strong>efecto Doppler transversal</strong>, un corrimiento al rojo sin equivalente clásico. Los astrónomos reportan el corrimiento como \\(z = \\lambda'/\\lambda - 1\\); para \\(\\beta \\ll 1\\), \\(z \\approx -\\beta\\cos\\theta\\), la velocidad radial entre \\(c\\).",
"Rearranged, a measured \\(\\lambda'/\\lambda\\) at a known \\(\\beta\\) and \\(\\theta\\) gives \\(\\gamma\\) from the data:":
  "Reordenada, una \\(\\lambda'/\\lambda\\) medida con \\(\\beta\\) y \\(\\theta\\) conocidos da \\(\\gamma\\) a partir de los datos:",
"\\[\\gamma = \\frac{\\lambda'/\\lambda}{1 - \\beta\\cos\\theta},\\qquad \\frac{1}{\\gamma^2} = 1 - \\beta^2.\\]":
  "\\[\\gamma = \\frac{\\lambda'/\\lambda}{1 - \\beta\\cos\\theta},\\qquad \\frac{1}{\\gamma^2} = 1 - \\beta^2.\\]",
"A source of {#} nm light moves at \\(\\beta = 0.60\\). Find \\(\\gamma\\), and the received wavelength when it heads straight toward the observer, straight away, and across the line of sight.":
  "Una fuente de luz de {#} nm se mueve con \\(\\beta = 0.60\\). Encuentra \\(\\gamma\\) y la longitud de onda recibida cuando va directo hacia el observador, cuando se aleja directo y cuando se mueve perpendicular a la línea de visión.",
"What does the classical formula \\(\\lambda'/\\lambda = 1 - \\beta\\cos\\theta\\) predict for the three cases of item {#}?":
  "¿Qué predice la fórmula clásica \\(\\lambda'/\\lambda = 1 - \\beta\\cos\\theta\\) para los tres casos del punto {#}?",
"Show that \\(\\gamma(1 - \\beta) = \\sqrt{(1 - \\beta)/(1 + \\beta)}\\).":
  "Muestra que \\(\\gamma(1 - \\beta) = \\sqrt{(1 - \\beta)/(1 + \\beta)}\\).",
"<strong>Passing source.</strong> Use light, with the source passing the observer in a straight line (the Transverse Doppler setup) and an emitted wavelength of {#} nm. Set the source’s speed to \\(\\beta = 0.30\\) and run the pass from the start. Pause three times: when the light arriving left the source at about \\(45^\\circ\\), at \\(90^\\circ\\), and at about \\(135^\\circ\\). At each pause record the angle at emission and the received wavelength, as shown. The exact angle does not matter, as long as you record the one shown with its wavelength. Repeat at \\(\\beta = 0.60\\) and \\(\\beta = 0.90\\).":
  "<strong>Fuente que pasa.</strong> Usa luz, con la fuente pasando junto al observador en línea recta (la configuración Doppler transversal) y una longitud de onda emitida de {#} nm. Fija la rapidez de la fuente en \\(\\beta = 0.30\\) y corre el paso desde el inicio. Pausa tres veces: cuando la luz que llega salió de la fuente a unos \\(45^\\circ\\), a \\(90^\\circ\\) y a unos \\(135^\\circ\\). En cada pausa registra el ángulo en la emisión y la longitud de onda recibida, tal como se muestran. El ángulo exacto no importa, siempre que registres el que se muestra junto con su longitud de onda. Repite con \\(\\beta = 0.60\\) y \\(\\beta = 0.90\\).",
"<strong>Using the virtual apparatus.</strong> Choose Light, not Sound. Readings record sound only, so type the light values into the Data table. Slow the time down if the pass is too quick to pause where you want. Compute each prediction yourself before you look at the formula the demo shows.":
  "<strong>Uso del aparato virtual.</strong> Elige Luz, no Sonido. Las lecturas registran solo el sonido, así que escribe los valores de la luz en la tabla de datos. Desacelera el tiempo si el paso es demasiado rápido para pausar donde quieres. Calcula cada predicción tú mismo antes de ver la fórmula que muestra la demo.",
"<span>B</span>\\(\\beta\\)":
  "<span>B</span>\\(\\beta\\)",
"<span>C</span>\\(\\theta\\) at emission (°)":
  "<span>C</span>\\(\\theta\\) en la emisión (°)",
"<span>D</span>\\(\\lambda\\) (nm)":
  "<span>D</span>\\(\\lambda\\) (nm)",
"<span>E</span>\\(\\lambda'\\) (nm)":
  "<span>E</span>\\(\\lambda'\\) (nm)",
"<span>F</span>\\(\\lambda'/\\lambda\\)":
  "<span>F</span>\\(\\lambda'/\\lambda\\)",
"<span>G</span>\\(1 - \\beta\\cos\\theta\\)":
  "<span>G</span>\\(1 - \\beta\\cos\\theta\\)",
"<span>H</span>\\(\\gamma\\) from data":
  "<span>H</span>\\(\\gamma\\) a partir de los datos",
"<span>I</span>\\(1/\\gamma^2\\)":
  "<span>I</span>\\(1/\\gamma^2\\)",
"<span>J</span>\\(\\beta^2\\)":
  "<span>J</span>\\(\\beta^2\\)",
"β, row {#}":
  "β, fila {#}",
"θ at emission (°), row {#}":
  "θ en la emisión (°), fila {#}",
"λ (nm), row {#}":
  "λ (nm), fila {#}",
"λ' (nm), row {#}":
  "λ' (nm), fila {#}",
"λ'/λ, row {#}":
  "λ'/λ, fila {#}",
"{#} - βcosθ, row {#}":
  "{#} - βcosθ, fila {#}",
"γ from data, row {#}":
  "γ a partir de los datos, fila {#}",
"{#}/γ^{#}, row {#}":
  "{#}/γ^{#}, fila {#}",
"β^{#}, row {#}":
  "β^{#}, fila {#}",
"For each row, compute the classical prediction \\(\\lambda(1 - \\beta\\cos\\theta)\\) and the relativistic one \\(\\lambda\\gamma(1 - \\beta\\cos\\theta)\\) with \\(\\gamma = 1/\\sqrt{1 - \\beta^2}\\), and compare both with \\(\\lambda'\\). By what factor is the classical prediction off, and does that factor depend on \\(\\theta\\)?":
  "Para cada fila, calcula la predicción clásica \\(\\lambda(1 - \\beta\\cos\\theta)\\) y la relativista \\(\\lambda\\gamma(1 - \\beta\\cos\\theta)\\) con \\(\\gamma = 1/\\sqrt{1 - \\beta^2}\\), y compara ambas con \\(\\lambda'\\). ¿Por qué factor se desvía la predicción clásica, y depende ese factor de \\(\\theta\\)?",
"Plot \\(1/\\gamma^2\\) (from your data) against \\(\\beta^2\\). What slope and intercept does relativity predict? Fit a line and compare.":
  "Grafica \\(1/\\gamma^2\\) (de tus datos) en función de \\(\\beta^2\\). ¿Qué pendiente y qué ordenada al origen predice la relatividad? Ajusta una recta y compara.",
"At \\(\\theta = 90^\\circ\\), what does the classical formula predict, and what did you see? Explain the shift in terms of the source’s clock.":
  "En \\(\\theta = 90^\\circ\\), ¿qué predice la fórmula clásica, y qué viste? Explica el corrimiento en términos del reloj de la fuente.",
"At what angle is there no shift at all for \\(\\beta = 0.60\\)? Show that it is where \\(\\cos\\theta = (1 - 1/\\gamma)/\\beta\\), and say whether your readings at \\(45^\\circ\\) and \\(90^\\circ\\) are on either side of it.":
  "¿A qué ángulo no hay ningún corrimiento para \\(\\beta = 0.60\\)? Muestra que es donde \\(\\cos\\theta = (1 - 1/\\gamma)/\\beta\\), y di si tus lecturas a \\(45^\\circ\\) y \\(90^\\circ\\) quedan a uno y otro lado de él.",
"The angle is shown to {#}° and the wavelength to {#} nm. Because each row uses the angle shown at the same moment as its wavelength, when you pause does not add any error. Estimate how much a {#}° error in \\(\\theta\\) changes \\(1 - \\beta\\cos\\theta\\) at \\(45^\\circ\\) and \\(\\beta = 0.90\\), and so \\(\\gamma\\) from data. With real light from stars, wavelengths are measured from spectral lines, and the source’s own motion must be separated from Earth’s orbital motion and the expansion of the universe.":
  "El ángulo se muestra con resolución de {#}° y la longitud de onda con resolución de {#} nm. Como cada fila usa el ángulo mostrado en el mismo momento que su longitud de onda, el momento en que pausas no añade ningún error. Estima cuánto cambia un error de {#}° en \\(\\theta\\) el valor de \\(1 - \\beta\\cos\\theta\\) a \\(45^\\circ\\) y \\(\\beta = 0.90\\), y por tanto \\(\\gamma\\) a partir de los datos. Con luz real de estrellas, las longitudes de onda se miden a partir de líneas espectrales, y el movimiento propio de la fuente debe separarse del movimiento orbital de la Tierra y de la expansión del universo.",
"Sound needs air, and its Doppler shift is different for a moving source and a moving observer. Why is there only one formula for light, depending only on the relative velocity?":
  "El sonido necesita aire, y su corrimiento Doppler es distinto para una fuente en movimiento y para un observador en movimiento. ¿Por qué hay una sola fórmula para la luz, que depende solo de la velocidad relativa?",
"Show that for \\(\\beta \\ll 1\\), \\(z \\approx -\\beta\\cos\\theta\\), so a small redshift measures the radial velocity. A star’s hydrogen line at {#} nm is received at {#} nm. How fast is it receding?":
  "Muestra que para \\(\\beta \\ll 1\\), \\(z \\approx -\\beta\\cos\\theta\\), así que un corrimiento al rojo pequeño mide la velocidad radial. La línea del hidrógeno de una estrella en {#} nm se recibe en {#} nm. ¿Qué tan rápido se aleja?",
"Why does a source moving across the line of sight give a redshift, never a blueshift?":
  "¿Por qué una fuente que se mueve perpendicular a la línea de visión da un corrimiento al rojo, nunca al azul?",
"A clock carried by the source would show less time between two crests than the observer’s clock. How large is the difference at \\(\\beta = 0.90\\), and how does your data show it?":
  "Un reloj llevado por la fuente mostraría menos tiempo entre dos crestas que el reloj del observador. ¿Qué tan grande es la diferencia con \\(\\beta = 0.90\\), y cómo lo muestran tus datos?",
"Prelab answers, the completed Data table, the comparison of the two predictions, the plot of \\(1/\\gamma^2\\) against \\(\\beta^2\\) with its fit, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, la tabla de datos completa, la comparación de las dos predicciones, la gráfica de \\(1/\\gamma^2\\) en función de \\(\\beta^2\\) con su ajuste, y respuestas a las preguntas. Identifica los datos simulados.",
"Speed of the source as a fraction of c, v/c":
  "Rapidez de la fuente como fracción de c, v/c",
"Time dilation factor":
  "Factor de dilatación del tiempo",
"Wavelength in the source's own frame":
  "Longitud de onda en el marco propio de la fuente",
"Wavelength received":
  "Longitud de onda recibida",
"Angle at emission between the source's velocity and the line to the observer":
  "Ángulo en la emisión entre la velocidad de la fuente y la línea hacia el observador",
"Speed of the source":
  "Rapidez de la fuente",
"Redshift, λ′/λ − {#}":
  "Corrimiento al rojo, λ′/λ − {#}"
});
