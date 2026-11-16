/* ws/faraday-mutual-induction in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/faraday-mutual-induction', {
"Setup and settings":
  "Configuración y ajustes",
"Φ_B per turn (Wb)":
  "Φ_B por espira (Wb)",
"emf (V)":
  "fem (V)",
"Current (A)":
  "Corriente (A)",
"I_1 (A), two coils":
  "I_1 (A), dos bobinas",
"Speed/frequency":
  "Rapidez/frecuencia",
"Mutual Induction and Motional emf | VirtualDemos":
  "Inducción mutua y EMF de movimiento | VirtualDemos",
"Mutual Induction and Motional emf":
  "Inducción mutua y EMF de movimiento",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §§{#}, {#} and {#}–{#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §§{#}, {#} y {#}–{#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Push the magnet in; Pass it through; Flip the magnet; Generator; Sliding bar; Two coils; Self inductance.":
  "<strong>Configuraciones en la demo:</strong> Meter el imán; Pasarlo a través; Invertir el imán; Generador; Barra deslizante; Dos bobinas; Autoinductancia.",
"Determine a mutual inductance from two coupled coils, measure motional emf, and connect induced current with energy transfer.":
  "Determina una inductancia mutua a partir de dos bobinas acopladas, mide la EMF de movimiento y relaciona la corriente inducida con la transferencia de energía.",
"For \\(N\\) turns with flux \\(\\Phi_B\\) through each turn (§{#}),":
  "Para \\(N\\) espiras con flujo \\(\\Phi_B\\) a través de cada espira (§{#}),",
"\\[\\mathcal E=-N\\frac{d\\Phi_B}{dt},\\qquad \\Phi_B=\\int\\mathbf B\\cdot d\\mathbf A.\\]":
  "\\[\\mathcal E=-N\\frac{d\\Phi_B}{dt},\\qquad \\Phi_B=\\int\\mathbf B\\cdot d\\mathbf A.\\]",
"A moving bar of length \\(\\ell\\) in a perpendicular field has emf magnitude \\(B\\ell v\\) (§{#}).":
  "Una barra de longitud \\(\\ell\\) que se mueve en un campo perpendicular tiene una EMF de magnitud \\(B\\ell v\\) (§{#}).",
"In two coupled coils, a changing primary current produces an emf in the secondary (§{#}):":
  "En dos bobinas acopladas, una corriente del primario que cambia produce una fem en el secundario (§{#}):",
"\\[\\mathcal E_2=-M\\frac{dI_1}{dt}.\\]":
  "\\[\\mathcal E_2=-M\\frac{dI_1}{dt}.\\]",
"With the secondary open and a sinusoidal primary current, its emf amplitude is \\(M\\omega I_{1,\\text{peak}}\\). The current amplitude must be measured; it need not be proportional to the applied source voltage.":
  "Con el secundario abierto y una corriente sinusoidal en el primario, la amplitud de su fem es \\(M\\omega I_{1,\\text{peak}}\\). La amplitud de la corriente se debe medir; no tiene por qué ser proporcional al voltaje aplicado por la fuente.",
"Can an open secondary have a nonzero emf but zero current? Explain.":
  "¿Puede un secundario abierto tener una fem distinta de cero pero corriente cero? Explica.",
"Keep real magnets away from sensitive electronics. Switch off supplies before rewiring coils. Do not open a powered inductor circuit abruptly unless the apparatus is designed for it. Keep hands away from rotating parts.":
  "Mantén los imanes reales lejos de la electrónica sensible. Apaga las fuentes antes de volver a conectar las bobinas. No abras bruscamente un circuito con inductor energizado a menos que el aparato esté diseñado para ello. Mantén las manos lejos de las partes que giran.",
"<strong>Mutual induction.</strong> Press the Two coils setup and press Open under Secondary switch. Keep their turns, radii and separation fixed. Measure primary current and secondary emf amplitudes at three settings of the Frequency f slider, {#}, {#} and {#} Hz. Infer \\(M\\) for each run. Then set Separation d to {#} cm and repeat at {#} Hz only. Press Closed under Secondary switch for one setting and compare its current and the primary current after the transient has settled.":
  "<strong>Inducción mutua.</strong> Pulsa la configuración Dos bobinas y pulsa Abierto en Interruptor del secundario. Mantén fijas sus espiras, radios y separación. Mide las amplitudes de la corriente del primario y de la fem del secundario con tres ajustes del control Frecuencia f, {#}, {#} y {#} Hz. Deduce \\(M\\) para cada corrida. Luego fija la Separación d en {#} cm y repite solo a {#} Hz. Pulsa Cerrado en Interruptor del secundario para un ajuste y compara su corriente y la corriente del primario después de que el transitorio se haya asentado.",
"<strong>Motional emf.</strong> Press the Sliding bar setup and press Pull at v to move the bar across the field. At three settings of the Speed of the bar v slider, measure emf and current. Infer \\(B\\) from the emf speed slope and compare electrical heating with the mechanical power needed to maintain motion.":
  "<strong>Fem de movimiento.</strong> Pulsa la configuración Barra deslizante y pulsa Jalar a v para mover la barra a través del campo. Con tres ajustes del control Rapidez de la barra v, mide la fem y la corriente. Deduce \\(B\\) a partir de la pendiente de la fem contra la rapidez y compara el calentamiento eléctrico con la potencia mecánica necesaria para mantener el movimiento.",
"<strong>Using the virtual apparatus.</strong> Choose <strong>Two coils</strong> or <strong>Sliding bar</strong>. The notebook controls are in the <strong>Lab notebook</strong> fold under Measurements. Keep <strong>Blind: hide predictions and answers</strong> on while collecting. Use <strong>Pause</strong>, <strong>Step {#} ms</strong>, or enter <strong>Advance by (s)</strong> and press <strong>Advance and pause</strong>. Press <strong>Capture measurement</strong> for selected points; <strong>Export to worksheet</strong> sends these points to the Data table and <strong>Export current run CSV</strong> saves the trace. Export, then press <strong>Clear notebook</strong>, before changing setup, so each run gets its own copy of the table. For <strong>Two coils</strong>, use <strong>Primary turns N₁</strong>, <strong>Secondary turns N₂</strong>, <strong>Secondary radius a₂</strong>, <strong>Separation d</strong>, <strong>Frequency f</strong> and <strong>Amplitude V₀</strong>. Choose <strong>Open</strong> or <strong>Closed</strong> under Secondary switch. Wait until successive cycles agree before fitting amplitudes. Record the displayed winding resistance and settings needed for your calculations after your measurements are complete.":
  "<strong>Uso del aparato virtual.</strong> Elige <strong>Dos bobinas</strong> o <strong>Barra deslizante</strong>. Los controles del cuaderno están en el pliegue <strong>Cuaderno de laboratorio</strong> en Mediciones. Mantén activado <strong>A ciegas: ocultar predicciones y respuestas</strong> mientras tomas datos. Usa <strong>Pausa</strong>, <strong>Paso de {#} ms</strong>, o escribe <strong>Avanzar (s)</strong> y pulsa <strong>Avanzar y pausar</strong>. Pulsa <strong>Capturar medición</strong> para los puntos elegidos; <strong>Exportar a la hoja</strong> envía estos puntos a la tabla de datos y <strong>Exportar CSV de la corrida actual</strong> guarda la traza. Exporta y luego pulsa <strong>Borrar el cuaderno</strong> antes de cambiar de configuración, para que cada corrida tenga su propia copia de la tabla. Para <strong>Dos bobinas</strong>, usa <strong>Espiras del primario N₁</strong>, <strong>Espiras del secundario N₂</strong>, <strong>Radio del secundario a₂</strong>, <strong>Separación d</strong>, <strong>Frecuencia f</strong> y <strong>Amplitud V₀</strong>. Elige <strong>Abierto</strong> o <strong>Cerrado</strong> en Interruptor del secundario. Espera hasta que ciclos sucesivos coincidan antes de ajustar las amplitudes. Registra la resistencia del devanado mostrada y los ajustes que necesites para tus cálculos cuando hayas terminado tus mediciones.",
"<span>A</span>Setup and settings":
  "<span>A</span>Configuración y ajustes",
"<span>C</span>\\(\\Phi_B\\) per turn (Wb)":
  "<span>C</span>\\(\\Phi_B\\) por espira (Wb)",
"<span>D</span>emf (V)":
  "<span>D</span>fem (V)",
"<span>E</span>Current (A)":
  "<span>E</span>Corriente (A)",
"<span>F</span>\\(I_1\\) (A), two coils":
  "<span>F</span>\\(I_1\\) (A), dos bobinas",
"<span>G</span>Speed/frequency":
  "<span>G</span>Rapidez/frecuencia",
"Setup and settings, row {#}":
  "Configuración y ajustes, fila {#}",
"Φ_B per turn (Wb), row {#}":
  "Φ_B por espira (Wb), fila {#}",
"emf (V), row {#}":
  "fem (V), fila {#}",
"Current (A), row {#}":
  "Corriente (A), fila {#}",
"I_1 (A), two coils, row {#}":
  "I_1 (A), dos bobinas, fila {#}",
"Speed/frequency, row {#}":
  "Rapidez/frecuencia, fila {#}",
"I₁ (A), two coils":
  "I₁ (A), dos bobinas",
"Use a separate copy for each run and state which current is recorded. Keep both endpoint time and interval midpoint time from the CSV when present.":
  "Usa una copia separada para cada corrida e indica qué corriente se registra. Conserva tanto el tiempo del extremo como el tiempo del punto medio del intervalo del CSV cuando estén presentes.",
"For the open secondary, calculate \\(M = \\text{emf}_\\text{peak}/(2\\pi f I_{1,\\text{peak}})\\). Compare frequency scans and separations. Explain why the air core pair need not obey an ideal transformer’s turns ratio.":
  "Para el secundario abierto, calcula \\(M = \\text{emf}_\\text{peak}/(2\\pi f I_{1,\\text{peak}})\\). Compara los barridos de frecuencia y las separaciones. Explica por qué el par con núcleo de aire no tiene que obedecer la razón de espiras de un transformador ideal.",
"For the sliding bar, infer \\(B\\) from the emf speed slope. Compare \\(\\lvert F\\rvert v\\), \\(\\lvert \\text{emf}\\, I\\rvert\\) and \\(I^2 R\\) during steady motion.":
  "Para la barra deslizante, deduce \\(B\\) con la pendiente de la fem en función de la rapidez. Compara \\(\\lvert F\\rvert v\\), \\(\\lvert \\text{emf}\\, I\\rvert\\) e \\(I^2 R\\) durante el movimiento estable.",
"Use time spacing, peak bracketing and readout rounding to estimate amplitude uncertainty. Avoid fitting only one sampled peak. For \\(M\\), include uncertainties in emf amplitude, primary current amplitude and frequency. The sliding bar emf and current are interval averages; the flux is an endpoint value. State your sampling interval and check whether reducing it changes the result.":
  "Usa el espaciado del tiempo, el intervalo que encierra el máximo y el redondeo de las lecturas para estimar la incertidumbre de la amplitud. Evita ajustar un solo máximo muestreado. Para \\(M\\), incluye las incertidumbres de la amplitud de la fem, de la amplitud de la corriente del primario y de la frecuencia. La fem y la corriente de la barra deslizante son promedios por intervalo; el flujo es un valor en el extremo. Indica tu intervalo de muestreo y comprueba si reducirlo cambia el resultado.",
"Why does closing the secondary change the primary current?":
  "¿Por qué cerrar el secundario cambia la corriente del primario?",
"Where does the resistor’s heat energy come from in each setup?":
  "¿De dónde viene la energía térmica del resistor en cada configuración?",
"Prelab answer, settings and CSV, mutual inductance estimates, motional emf and energy calculations, uncertainty and answers to the questions. Identify simulated data.":
  "Respuesta del prelaboratorio, ajustes y CSV, estimaciones de la inductancia mutua, cálculos de la EMF de movimiento y de la energía, incertidumbre y respuestas a las preguntas. Identifica los datos simulados.",
"Area":
  "Área",
"Force on the bar":
  "Fuerza sobre la barra",
"Current in the primary coil":
  "Corriente en la bobina primaria",
"Peak current in the primary coil":
  "Corriente pico en la bobina primaria",
"Mutual inductance":
  "Inductancia mutua",
"Number of turns":
  "Número de espiras",
"Magnetic flux through each turn":
  "Flujo magnético a través de cada espira",
"Emf":
  "Fem",
"Emf in the secondary coil":
  "Fem en la bobina secundaria",
"Length of the moving bar":
  "Longitud de la barra en movimiento",
"Angular frequency of the source":
  "Frecuencia angular de la fuente",
"Speed of the bar":
  "Rapidez de la barra",
"Faraday's Law":
  "Ley de Faraday",
"<a>Virtual Physics Demos</a>":
  "<a>Demos virtuales de física</a>"
});
