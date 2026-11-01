/* ws/string-density in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/string-density', {
"Total mass m (kg)":
  "Masa total m (kg)",
"Harmonic n":
  "Armónico n",
"Frequency f (Hz)":
  "Frecuencia f (Hz)",
"Linear Density of a String | VirtualDemos":
  "Densidad lineal de una cuerda | VirtualDemos",
"Linear Density of a String":
  "Densidad lineal de una cuerda",
"<strong>Setups in the demo:</strong> Sweep the frequency, {#} g; Add masses at {#} Hz; Third harmonic; Unknown string, sweep; Unknown string, add masses.":
  "<strong>Configuraciones en la demo:</strong> Barre la frecuencia, {#} g; Agrega masas a {#} Hz; Tercer armónico; Cuerda desconocida, barrido; Cuerda desconocida, agrega masas.",
"Drag the vibrator along the table to set the length L (or focus it and use the arrow keys), or use the slider and step buttons for an exact value.":
  "Arrastra el vibrador a lo largo de la mesa para fijar la longitud L (o enfócalo y usa las flechas), o usa el deslizador y los botones de paso para un valor exacto.",
"Record stores \\(L\\), \\(m\\), \\(T\\), \\(f\\) and the number of loops \\(n\\) (you can correct \\(n\\) in the table). \\(f\\) against \\(n\\) at one mass: slope \\(v/2L\\), so \\(\\mu = T/(4L^2\\,\\text{slope}^2)\\). \\(T\\) against \\(1/n^2\\) at one frequency: slope \\(4L^2f^2\\mu\\), so \\(\\mu = \\text{slope}/(4L^2f^2)\\). Both lines should pass close to the origin.":
  "Registrar guarda \\(L\\), \\(m\\), \\(T\\), \\(f\\) y el número de vientres \\(n\\) (puedes corregir \\(n\\) en la tabla). \\(f\\) en función de \\(n\\) con una masa: pendiente \\(v/2L\\), así que \\(\\mu = T/(4L^2\\,\\text{slope}^2)\\). \\(T\\) en función de \\(1/n^2\\) con una frecuencia: pendiente \\(4L^2f^2\\mu\\), así que \\(\\mu = \\text{slope}/(4L^2f^2)\\). Ambas rectas deben pasar cerca del origen.",
"Determine the linear mass density of a vibrating string from its resonance frequencies and the tension supplied by hanging masses.":
  "Determina la densidad lineal de masa de una cuerda que vibra a partir de sus frecuencias de resonancia y de la tensión que dan las masas colgantes.",
"For a uniform string fixed at both ends,":
  "Para una cuerda uniforme fija en ambos extremos,",
"\\[f_n=\\frac{n}{2L}\\sqrt{\\frac{T}{\\mu}},\\qquad T=mg.\\]":
  "\\[f_n=\\frac{n}{2L}\\sqrt{\\frac{T}{\\mu}},\\qquad T=mg.\\]",
"Here \\(n\\) is the number of loops, \\(L\\) is the vibrating length, \\(\\mu\\) is mass per unit length and \\(m\\) is the <strong>total suspended mass</strong>, including the hanger. The simulated apparatus uses \\(g=9.81\\ \\mathrm{m/s^2}\\) and a {#} g hanger. At fixed tension, the slope \\(s\\) of \\(f_n\\) against \\(n\\) gives \\(\\mu=T/(2Ls)^2\\). At fixed frequency, \\(T=\\mu(2Lf/n)^2\\).":
  "Aquí \\(n\\) es el número de vientres, \\(L\\) es la longitud que vibra, \\(\\mu\\) es la masa por unidad de longitud y \\(m\\) es la <strong>masa total suspendida</strong>, incluido el portapesas. El aparato simulado usa \\(g=9.81\\ \\mathrm{m/s^2}\\) y un portapesas de {#} g. Con tensión fija, la pendiente \\(s\\) de \\(f_n\\) en función de \\(n\\) da \\(\\mu=T/(2Ls)^2\\). Con frecuencia fija, \\(T=\\mu(2Lf/n)^2\\).",
"How does the fundamental frequency change when tension is quadrupled?":
  "¿Cómo cambia la frecuencia fundamental cuando la tensión se cuadruplica?",
"Why must the hanger mass be included when calculating tension?":
  "¿Por qué se debe incluir la masa del portapesas al calcular la tensión?",
"At fixed drive frequency, what happens to the number of loops as tension increases?":
  "Con una frecuencia de forzamiento fija, ¿qué pasa con el número de vientres al aumentar la tensión?",
"On a real vibrator and pulley bench, secure the pulley, check the string’s load rating and keep feet clear of hanging masses. Turn off the driver before changing the string.":
  "En una mesa real con vibrador y polea, asegura la polea, revisa la carga máxima de la cuerda y mantén los pies lejos de las masas colgantes. Apaga el excitador antes de cambiar la cuerda.",
"<strong>Frequency scan.</strong> Investigate one string at a fixed vibrating length and suspended mass. Identify the first five resonances by their number of loops. Record each frequency and the total hanging mass.":
  "<strong>Barrido de frecuencia.</strong> Estudia una cuerda con una longitud que vibra y una masa suspendida fijas. Identifica las primeras cinco resonancias por su número de vientres. Registra cada frecuencia y la masa colgante total.",
"<strong>Tension scan.</strong> At a fixed drive frequency, change the suspended mass to find several standing wave patterns with different loop counts. Record total mass and \\(n\\) for each. Keep the same string and length.":
  "<strong>Barrido de tensión.</strong> Con una frecuencia de forzamiento fija, cambia la masa suspendida para encontrar varios patrones de onda estacionaria con distintos números de vientres. Registra la masa total y \\(n\\) para cada uno. Mantén la misma cuerda y la misma longitud.",
"<strong>Unknown string.</strong> Repeat one scan with an unknown string and infer its linear density before revealing its value: once your scan is sent, choosing a named string makes the demo state the unknown string’s density. Do not choose a new unknown string during a scan, because that changes the specimen.":
  "<strong>Cuerda desconocida.</strong> Repite un barrido con una cuerda desconocida e infiere su densidad lineal antes de revelar su valor: una vez enviado tu barrido, elegir una cuerda con nombre hace que la demo indique la densidad de la cuerda desconocida. No elijas una nueva cuerda desconocida durante un barrido, porque eso cambia la muestra.",
"<strong>Using the virtual apparatus.</strong> Record the vibrating length, string identity, total suspended mass and loop count for each resonance. A {#} g hanger contributes to the total mass even when no extra weights are added. Collect readings for one consistent scan and send them to the worksheet before clearing, so each scan has its own Data table. Use frequency against harmonic number for the frequency scan and tension against \\(1/n^2\\) for the scan at fixed frequency.":
  "<strong>Uso del aparato virtual.</strong> Registra la longitud que vibra, la identidad de la cuerda, la masa total suspendida y el número de vientres para cada resonancia. Un portapesas de {#} g contribuye a la masa total aunque no se agreguen pesas adicionales. Reúne lecturas de un barrido coherente y envíalas a la hoja de trabajo antes de borrar, para que cada barrido tenga su propia tabla de datos. Usa la frecuencia en función del número de armónico para el barrido de frecuencia y la tensión en función de \\(1/n^2\\) para el barrido con frecuencia fija.",
"<span>B</span>String":
  "<span>B</span>Cuerda",
"<span>D</span>Total mass \\(m\\) (kg)":
  "<span>D</span>Masa total \\(m\\) (kg)",
"<span>F</span>Harmonic \\(n\\)":
  "<span>F</span>Armónico \\(n\\)",
"<span>H</span>Frequency \\(f\\) (Hz)":
  "<span>H</span>Frecuencia \\(f\\) (Hz)",
"String, row {#}":
  "Cuerda, fila {#}",
"Total mass m (kg), row {#}":
  "Masa total m (kg), fila {#}",
"T (N), row {#}":
  "T (N), fila {#}",
"Harmonic n, row {#}":
  "Armónico n, fila {#}",
"{#}/n^{#}, row {#}":
  "{#}/n^{#}, fila {#}",
"Frequency f (Hz), row {#}":
  "Frecuencia f (Hz), fila {#}",
"Keep the two scan types separate and state whether the string density was known or hidden.":
  "Mantén separados los dos tipos de barrido e indica si la densidad de la cuerda era conocida u oculta.",
"Fit \\(f\\) against \\(n\\) at fixed tension. Infer \\(\\mu\\) from the slope.":
  "Ajusta \\(f\\) en función de \\(n\\) con tensión fija. Infiere \\(\\mu\\) a partir de la pendiente.",
"At fixed frequency, plot \\(T\\) against \\(1/n^2\\) and infer \\(\\mu\\) independently.":
  "Con frecuencia fija, grafica \\(T\\) en función de \\(1/n^2\\) e infiere \\(\\mu\\) de manera independiente.",
"Compare the estimates, including units in kg/m and g/m.":
  "Compara las estimaciones, incluidas las unidades en kg/m y g/m.",
"Check whether the inferred density changes when the tension or mode number changes.":
  "Revisa si la densidad inferida cambia cuando cambian la tensión o el número de modo.",
"Record the frequency adjustment and mass increments. The simulation’s set values are prescribed, not independent noisy measurements. For real equipment include the vibrating length measurement, mass calibration, pulley friction and uncertainty in locating resonance peaks. Do not turn adjustment increments into random error bars without justification.":
  "Registra el ajuste de frecuencia y los incrementos de masa. Los valores fijados en la simulación son prescritos, no mediciones independientes con ruido. Para equipo real incluye la medición de la longitud que vibra, la calibración de las masas, la fricción de la polea y la incertidumbre al localizar los picos de resonancia. No conviertas los incrementos de ajuste en barras de error aleatorio sin justificación.",
"Why is a vibrating string’s fundamental frequency inversely proportional to length?":
  "¿Por qué la frecuencia fundamental de una cuerda que vibra es inversamente proporcional a la longitud?",
"Why is the hanging mass not identical to the string tension in newtons?":
  "¿Por qué la masa colgante no es idéntica a la tensión de la cuerda en newtons?",
"What causes a resonance peak to have finite width?":
  "¿Qué hace que un pico de resonancia tenga un ancho finito?",
"What physical changes could make the inferred density depend on mode number?":
  "¿Qué cambios físicos podrían hacer que la densidad inferida dependa del número de modo?",
"Prelab answers, separate data tables for both scans, plots with fits, two density estimates and uncertainty discussion, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, tablas de datos separadas para ambos barridos, gráficas con ajustes, dos estimaciones de la densidad con discusión de la incertidumbre, y respuestas a las preguntas. Identifica los datos simulados.",
"Length of the vibrating string":
  "Longitud de la cuerda que vibra",
"Tension":
  "Tensión",
"Frequency of harmonic n":
  "Frecuencia del armónico n",
"Total suspended mass, hanger included":
  "Masa total suspendida, incluido el portapesas",
"Linear mass density":
  "Densidad lineal de masa",
"Harmonic number (number of loops)":
  "Número de armónico (número de vientres)",
"Slope of f against n":
  "Pendiente de f en función de n",
"Wave speed on the string":
  "Rapidez de la onda en la cuerda"
});
