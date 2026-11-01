/* ws/faraday in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/faraday', {
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
"Magnetic Flux and Electromagnetic Induction | VirtualDemos":
  "Flujo magnético e inducción electromagnética | VirtualDemos",
"Magnetic Flux and Electromagnetic Induction":
  "Flujo magnético e inducción electromagnética",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §§{#}–{#}, {#} and {#}–{#}. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §§{#}–{#}, {#} y {#}–{#}. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo:</strong> Push the magnet in; Pass it through; Flip the magnet; Generator; Sliding bar; Two coils; Self inductance.":
  "<strong>Configuraciones en la demo:</strong> Meter el imán; Pasarlo a través; Invertir el imán; Generador; Barra deslizante; Dos bobinas; Autoinductancia.",
"Measure how changing magnetic flux produces an emf, determine a mutual inductance, and connect induced current with energy transfer.":
  "Mide cómo un flujo magnético que cambia produce una fem, determina una inductancia mutua, y relaciona la corriente inducida con la transferencia de energía.",
"For \\(N\\) turns with flux \\(\\Phi_B\\) through each turn (§{#}),":
  "Para \\(N\\) espiras con flujo \\(\\Phi_B\\) a través de cada espira (§{#}),",
"\\[\\mathcal E=-N\\frac{d\\Phi_B}{dt},\\qquad \\Phi_B=\\int\\mathbf B\\cdot d\\mathbf A.\\]":
  "\\[\\mathcal E=-N\\frac{d\\Phi_B}{dt},\\qquad \\Phi_B=\\int\\mathbf B\\cdot d\\mathbf A.\\]",
"The minus sign expresses Lenz’s law (§{#}). For a rotating coil, \\(\\Phi_B = BA\\cos(\\omega t)\\). A moving bar of length \\(\\ell\\) in a perpendicular field has emf magnitude \\(B\\ell v\\) (§{#}).":
  "El signo menos expresa la ley de Lenz (§{#}). Para una bobina que gira, \\(\\Phi_B = BA\\cos(\\omega t)\\). Una barra de longitud \\(\\ell\\) que se mueve en un campo perpendicular tiene una fem de magnitud \\(B\\ell v\\) (§{#}).",
"In two coupled coils, a changing primary current produces an emf in the secondary (§{#}):":
  "En dos bobinas acopladas, una corriente del primario que cambia produce una fem en el secundario (§{#}):",
"\\[\\mathcal E_2=-M\\frac{dI_1}{dt}.\\]":
  "\\[\\mathcal E_2=-M\\frac{dI_1}{dt}.\\]",
"With the secondary open and a sinusoidal primary current, its emf amplitude is \\(M\\omega I_{1,\\text{peak}}\\). The current amplitude must be measured; it need not be proportional to the applied source voltage.":
  "Con el secundario abierto y una corriente sinusoidal en el primario, la amplitud de su fem es \\(M\\omega I_{1,\\text{peak}}\\). La amplitud de la corriente se debe medir; no tiene por qué ser proporcional al voltaje aplicado por la fuente.",
"Derive the generator emf from \\(\\Phi_B = BA\\cos(\\omega t)\\).":
  "Deduce la fem del generador a partir de \\(\\Phi_B = BA\\cos(\\omega t)\\).",
"Predict what doubling \\(\\omega\\) does to emf amplitude and period.":
  "Predice qué le hace duplicar \\(\\omega\\) a la amplitud y al periodo de la fem.",
"Can an open secondary have a nonzero emf but zero current? Explain.":
  "¿Puede un secundario abierto tener una fem distinta de cero pero corriente cero? Explica.",
"Keep real magnets away from sensitive electronics. Switch off supplies before rewiring coils. Do not open a powered inductor circuit abruptly unless the apparatus is designed for it. Keep hands away from rotating parts.":
  "Mantén los imanes reales lejos de la electrónica sensible. Apaga las fuentes antes de volver a conectar las bobinas. No abras bruscamente un circuito con inductor energizado a menos que el aparato esté diseñado para ello. Mantén las manos lejos de las partes que giran.",
"<strong>Generator.</strong> Use \\(N = 100\\), \\(B = 0.20\\ \\text{T}\\), \\(A = 100\\ \\text{cm}^2\\) and \\(R = 100\\ \\Omega\\) in the simulation, or assigned real apparatus values. Measure flux and emf over two cycles at angular speeds near {#}, {#} and {#} rad/s. Take enough points to locate both signs and the peaks. Repeat one run with twice as many turns.":
  "<strong>Generador.</strong> Usa \\(N = 100\\), \\(B = 0.20\\ \\text{T}\\), \\(A = 100\\ \\text{cm}^2\\) y \\(R = 100\\ \\Omega\\) en la simulación, o los valores del aparato real asignado. Mide el flujo y la fem durante dos ciclos a rapideces angulares cercanas a {#}, {#} y {#} rad/s. Toma suficientes puntos para ubicar ambos signos y los picos. Repite una corrida con el doble de espiras.",
"<strong>Mutual induction.</strong> Use two coaxial coils with the secondary open. Keep their turns, radii and separation fixed. Measure primary current and secondary emf amplitudes at three frequencies. Infer \\(M\\) for each run. Then change separation and repeat. Close the secondary for one setting and compare its current and the primary current after the transient has settled.":
  "<strong>Inducción mutua.</strong> Usa dos bobinas coaxiales con el secundario abierto. Mantén fijos sus espiras, radios y separación. Mide las amplitudes de la corriente del primario y de la fem del secundario a tres frecuencias. Deduce \\(M\\) para cada corrida. Luego cambia la separación y repite. Cierra el secundario para un ajuste y compara su corriente con la corriente del primario una vez que el transitorio se haya estabilizado.",
"<strong>Motional emf.</strong> Move a conducting bar across a perpendicular magnetic field. At three speeds, measure emf and current. Infer \\(B\\) from the emf speed slope and compare electrical heating with the mechanical power needed to maintain motion.":
  "<strong>Fem de movimiento.</strong> Mueve una barra conductora a través de un campo magnético perpendicular. A tres rapideces, mide la fem y la corriente. Deduce \\(B\\) con la pendiente de la fem en función de la rapidez y compara el calentamiento eléctrico con la potencia mecánica necesaria para mantener el movimiento.",
"<strong>Magnet check.</strong> Move a magnet into the coil at two speeds with matched starting and ending positions. Compare peak emf and the time integral of emf. Reverse the motion and explain the sign change.":
  "<strong>Comprobación con el imán.</strong> Mueve un imán hacia la bobina a dos rapideces con las mismas posiciones inicial y final. Compara la fem pico y la integral en el tiempo de la fem. Invierte el movimiento y explica el cambio de signo.",
"<strong>Using the virtual apparatus.</strong> Choose <strong>Generator</strong>, <strong>Two coils</strong>, <strong>Sliding bar</strong> or <strong>Push the magnet in</strong>. Keep <strong>Blind: hide predictions and answers</strong> on while collecting. Use <strong>Pause</strong>, <strong>Step {#} ms</strong>, or enter <strong>Advance by (s)</strong> and press <strong>Advance and pause</strong>. Press <strong>Capture measurement</strong> for selected points; <strong>Export to worksheet</strong> sends these points to the Data table and <strong>Export current run CSV</strong> saves the trace. Export before changing setup. For <strong>Two coils</strong>, use <strong>Primary turns N₁</strong>, <strong>Secondary turns N₂</strong>, <strong>Secondary radius a₂</strong>, <strong>Separation d</strong>, <strong>Frequency f</strong> and <strong>Amplitude V₀</strong>. Choose <strong>Open</strong> or <strong>Closed</strong> under Secondary switch. Wait until successive cycles agree before fitting amplitudes. Record the displayed winding resistance and settings needed for your calculations after your measurements are complete.":
  "<strong>Uso del aparato virtual.</strong> Elige <strong>Generador</strong>, <strong>Dos bobinas</strong>, <strong>Barra deslizante</strong> o <strong>Meter el imán</strong>. Mantén <strong>A ciegas: ocultar predicciones y respuestas</strong> activado mientras tomas datos. Usa <strong>Pausa</strong>, <strong>Paso de {#} ms</strong>, o escribe <strong>Avanzar (s)</strong> y pulsa <strong>Avanzar y pausar</strong>. Pulsa <strong>Capturar medición</strong> para los puntos elegidos; <strong>Exportar a la hoja</strong> envía estos puntos a la tabla de datos y <strong>Exportar CSV de la corrida actual</strong> guarda la traza. Exporta antes de cambiar de configuración. Para <strong>Dos bobinas</strong>, usa <strong>Espiras del primario N₁</strong>, <strong>Espiras del secundario N₂</strong>, <strong>Radio del secundario a₂</strong>, <strong>Separación d</strong>, <strong>Frecuencia f</strong> y <strong>Amplitud V₀</strong>. Elige <strong>Abierto</strong> o <strong>Cerrado</strong> en Interruptor del secundario. Espera hasta que ciclos sucesivos coincidan antes de ajustar amplitudes. Registra la resistencia del devanado que se muestra y los ajustes necesarios para tus cálculos después de terminar tus mediciones.",
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
"Plot flux and emf against time. Compare period, relative phase and sign with Faraday’s law. Plot generator emf amplitude against \\(\\omega\\) and infer \\(NBA\\).":
  "Grafica el flujo y la fem en función del tiempo. Compara el periodo, la fase relativa y el signo con la ley de Faraday. Grafica la amplitud de la fem del generador en función de \\(\\omega\\) y deduce \\(NBA\\).",
"Estimate \\(-N\\,\\Delta\\Phi_B/\\Delta t\\) from nearby flux readings. Compare with emf averaged over that same interval, not a different endpoint value.":
  "Estima \\(-N\\,\\Delta\\Phi_B/\\Delta t\\) con lecturas de flujo cercanas. Compárala con la fem promediada en ese mismo intervalo, no con un valor de otro extremo.",
"For the open secondary, calculate \\(M = \\text{emf}_\\text{peak}/(2\\pi f I_{1,\\text{peak}})\\). Compare frequency scans and separations. Explain why the air core pair need not obey an ideal transformer’s turns ratio.":
  "Para el secundario abierto, calcula \\(M = \\text{emf}_\\text{peak}/(2\\pi f I_{1,\\text{peak}})\\). Compara los barridos de frecuencia y las separaciones. Explica por qué el par con núcleo de aire no tiene que obedecer la razón de espiras de un transformador ideal.",
"For the sliding bar, infer \\(B\\) from the emf speed slope. Compare \\(\\lvert F\\rvert v\\), \\(\\lvert \\text{emf}\\, I\\rvert\\) and \\(I^2 R\\) during steady motion.":
  "Para la barra deslizante, deduce \\(B\\) con la pendiente de la fem en función de la rapidez. Compara \\(\\lvert F\\rvert v\\), \\(\\lvert \\text{emf}\\, I\\rvert\\) e \\(I^2 R\\) durante el movimiento estable.",
"Compare the magnet runs using \\(\\int \\text{emf}\\,dt = -N\\,\\Delta\\Phi_B\\). Distinguish this integral check from an independent measurement of the magnetic field.":
  "Compara las corridas del imán usando \\(\\int \\text{emf}\\,dt = -N\\,\\Delta\\Phi_B\\). Distingue esta comprobación con la integral de una medición independiente del campo magnético.",
"Use time spacing, peak bracketing and readout rounding to estimate amplitude and period uncertainty. Avoid fitting only one sampled peak. For \\(M\\), include uncertainties in emf amplitude, primary current amplitude and frequency. The generator/rails/magnet emf and current are interval averages; the flux is an endpoint value. State your sampling interval and check whether reducing it changes the result.":
  "Usa la separación en el tiempo, el acotamiento de los picos y el redondeo de las lecturas para estimar la incertidumbre de la amplitud y del periodo. Evita ajustar solo un pico muestreado. Para \\(M\\), incluye las incertidumbres de la amplitud de la fem, de la amplitud de la corriente del primario y de la frecuencia. La fem y la corriente del generador, los rieles y el imán son promedios de intervalo; el flujo es un valor del extremo. Indica tu intervalo de muestreo y comprueba si reducirlo cambia el resultado.",
"Why is emf zero at a generator’s maximum flux?":
  "¿Por qué la fem es cero en el flujo máximo de un generador?",
"Why can faster magnet motion change peak emf without changing its integral between matched endpoints?":
  "¿Por qué un movimiento más rápido del imán puede cambiar la fem pico sin cambiar su integral entre los mismos extremos?",
"Why does closing the secondary change the primary current?":
  "¿Por qué cerrar el secundario cambia la corriente del primario?",
"Where does the resistor’s heat energy come from in each setup?":
  "¿De dónde viene la energía térmica del resistor en cada configuración?",
"Prelab answers, settings and CSV, flux/emf plots, generator scaling, mutual inductance estimates, motional emf and energy calculations, uncertainty and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, ajustes y CSV, gráficas de flujo y fem, escalamiento del generador, estimaciones de la inductancia mutua, cálculos de fem de movimiento y de energía, incertidumbre y respuestas a las preguntas. Identifica los datos simulados.",
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
"Angular frequency of the turning coil":
  "Frecuencia angular de la bobina que gira",
"Speed of the bar":
  "Rapidez de la barra",
"Faraday's Law":
  "Ley de Faraday"
});
