/* ws/sampling-aliasing in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/sampling-aliasing', {
"Sample rate f_s (Hz)":
  "Frecuencia de muestreo f_s (Hz)",
"Samples N":
  "Muestras N",
"Window":
  "Ventana",
"Peak frequency (Hz)":
  "Frecuencia del pico (Hz)",
"Peak level (dB)":
  "Nivel del pico (dB)",
"Bins within {#} dB":
  "Bins a menos de {#} dB",
"Noise floor (dB)":
  "Piso de ruido (dB)",
"Harmonic n":
  "Armónico n",
"Frequency (Hz)":
  "Frecuencia (Hz)",
"Appears at (Hz)":
  "Aparece en (Hz)",
"Level, no filter (dB)":
  "Nivel, sin filtro (dB)",
"Level, filter on (dB)":
  "Nivel, con filtro (dB)",
"Sampling and Aliasing | VirtualDemos":
  "Muestreo y aliasing | VirtualDemos",
"Sampling and Aliasing":
  "Muestreo y aliasing",
"Textbook: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} and {#}, with the sampling ideas below, which the book does not cover. Access for free at https://openstax.org/details/books/university-physics-volume-{#}.":
  "Libro de texto: OpenStax <em>University Physics</em>, Vol. {#}, §§{#} y {#}, con las ideas de muestreo de abajo, que el libro no cubre. Acceso gratuito en https://openstax.org/details/books/university-physics-volume-{#}.",
"<strong>Setups in the demo</strong> (the Sampling setups chips in the <strong>Sampling and aliasing</strong> section of the right panel)<strong>:</strong> Too slow for the tone (a pure {#} Hz tone, {#} samples at {#} Hz); Harmonics fold over (the sawtooth at {#} Hz, {#} samples at {#} Hz, Hann window); Antialiasing filter (the same with the filter on, cutoff {#} Hz); Leakage (a pure {#} Hz tone, {#} samples at {#} Hz); Noise floor (a pure {#} Hz tone, {#} samples at {#} Hz, Hann window, noise of RMS {#}).":
  "<strong>Configuraciones del demo</strong> (los botones de Configuraciones de muestreo en la sección <strong>Muestreo y aliasing</strong> del panel derecho)<strong>:</strong> Demasiado lento para el tono (un tono puro de {#} Hz, {#} muestras a {#} Hz); Los armónicos se pliegan (el diente de sierra a {#} Hz, {#} muestras a {#} Hz, ventana de Hann); Filtro antialiasing (lo mismo con el filtro encendido, corte en {#} Hz); Fuga espectral (un tono puro de {#} Hz, {#} muestras a {#} Hz); Piso de ruido (un tono puro de {#} Hz, {#} muestras a {#} Hz, ventana de Hann, ruido de RMS {#}).",
"Tick <strong>Sample the tone with a converter</strong>, or press a setup. The waveform panel becomes the record: the analog input in gray, the samples as dots, joined by straight lines as a digital oscilloscope draws them (or, with <strong>Join the samples: Smooth</strong>, by the one smooth curve through them that has nothing above f_s/{#}). The spectrum panel shows two strips: on top, each partial at its true frequency, with f_s/{#} marked and the region above it hatched; below, the spectrum of the samples from {#} to f_s/{#}, what the converter reports. Dashed lines join each partial to where it lands.":
  "Marca <strong>Muestrear el tono con un convertidor</strong>, o presiona una configuración. El panel de la forma de onda se vuelve el registro: la entrada analógica en gris, las muestras como puntos, unidas por líneas rectas como las dibuja un osciloscopio digital (o, con <strong>Unir las muestras: Suave</strong>, por la única curva suave que pasa por ellas sin nada arriba de f_s/{#}). El panel del espectro muestra dos franjas: arriba, cada parcial en su frecuencia real, con f_s/{#} marcada y la región de arriba sombreada; abajo, el espectro de las muestras de {#} a f_s/{#}, lo que reporta el convertidor. Líneas punteadas unen cada parcial con el lugar donde cae.",
"<strong>Sample rate f_s</strong> runs from {#} Hz to {#} Hz; click its readout to type an exact value. <strong>Samples N</strong> ({#} to {#}), <strong>Window</strong> (Rectangular or Hann), <strong>Whole cycles in the record</strong> (sets f_s so the record holds a whole number of periods of f₁), <strong>Antialiasing filter before the converter</strong> with <strong>Filter cutoff f_c</strong> (a fraction of f_s), <strong>Converter noise (RMS)</strong> in bar units and <strong>New noise</strong>.":
  "<strong>Frecuencia de muestreo f_s</strong> va de {#} Hz a {#} Hz; haz clic en su lectura para escribir un valor exacto. <strong>Muestras N</strong> ({#} a {#}), <strong>Ventana</strong> (Rectangular o Hann), <strong>Ciclos completos en el registro</strong> (fija f_s para que el registro contenga un número entero de periodos de f₁), <strong>Filtro antialiasing antes del convertidor</strong> con <strong>Corte del filtro f_c</strong> (una fracción de f_s), <strong>Ruido del convertidor (RMS)</strong> en unidades de barra y <strong>Nuevo ruido</strong>.",
"Readouts: <strong>Nyquist frequency f_s/{#}</strong>, <strong>Record length N/f_s</strong>, <strong>Resolution Δf = f_s/N</strong>, <strong>Samples per period of f₁</strong>, <strong>Strongest peak</strong> (the frequency of the strongest bin, with its bin number), <strong>Peak level</strong>, <strong>Bins within {#} dB of the peak</strong> and <strong>Noise floor</strong> (with the expected value when there is noise). The table under them lists each partial: its true frequency, where it appears after sampling (↩ marks one that folded back) and its level after the filter.":
  "Lecturas: <strong>Frecuencia de Nyquist f_s/{#}</strong>, <strong>Duración del registro N/f_s</strong>, <strong>Resolución Δf = f_s/N</strong>, <strong>Muestras por periodo de f₁</strong>, <strong>Pico más fuerte</strong> (la frecuencia del bin más fuerte, con su número de bin), <strong>Nivel del pico</strong>, <strong>Bins a menos de {#} dB del pico</strong> y <strong>Piso de ruido</strong> (con el valor esperado cuando hay ruido). La tabla debajo de ellas lista cada parcial: su frecuencia real, dónde aparece después del muestreo (↩ marca uno que se plegó) y su nivel después del filtro.",
"<strong>Record this reading</strong> adds one row: f₁, f_s, N, the window, the filter, the noise, the strongest peak, its level, the bins within {#} dB and the noise floor. <strong>Export to worksheet</strong> fills the Data table in order: Run, f_s, N, Window, Peak frequency, Peak level, Bins within {#} dB, Noise floor. The harmonic bars, the <strong>Pure tone</strong> button and the <strong>Fundamental f₁</strong> slider work as in Timbre and Harmonics.":
  "<strong>Registrar esta lectura</strong> agrega una fila: f₁, f_s, N, la ventana, el filtro, el ruido, el pico más fuerte, su nivel, los bins a menos de {#} dB y el piso de ruido. <strong>Exportar a la hoja</strong> llena la tabla de Datos en orden: Corrida, f_s, N, Ventana, Frecuencia del pico, Nivel del pico, Bins a menos de {#} dB, Piso de ruido. Las barras de armónicos, el botón <strong>Tono puro</strong> y el deslizador <strong>Fundamental f₁</strong> funcionan como en Timbre y armónicos.",
"The converter takes the signal at \\(t_k = k/f_s\\), \\(k = 0\\) to \\(N - 1\\), with no rounding to levels. The tone is a sum of pure sines (the harmonic bars); the antialiasing filter is an ideal eighth order Butterworth low pass, \\(\\lvert H\\rvert = 1/\\sqrt{1 + (f/f_c)^{16}},\\) in front of the converter. The converter noise is simulated white noise added to each sample; <strong>New noise</strong> draws another set.":
  "El convertidor toma la señal en \\(t_k = k/f_s\\), de \\(k = 0\\) a \\(N - 1\\), sin redondear a niveles. El tono es una suma de senoides puras (las barras de armónicos); el filtro antialiasing es un pasa bajas Butterworth ideal de octavo orden, \\(\\lvert H\\rvert = 1/\\sqrt{1 + (f/f_c)^{16}},\\) delante del convertidor. El ruido del convertidor es ruido blanco simulado que se suma a cada muestra; <strong>Nuevo ruido</strong> sortea otro conjunto.",
"The spectrum is the discrete Fourier transform of the samples, with bins at \\(k\\,\\Delta f\\), \\(\\Delta f = f_s/N\\), scaled so a sine of amplitude \\(a\\) that fits a whole number of cycles in the record reads exactly \\(a\\) ({#} dB for \\(a = 1\\)) with either window. The noise floor is the RMS level of the bins more than {#} bins from every partial.":
  "El espectro es la transformada discreta de Fourier de las muestras, con bins en \\(k\\,\\Delta f\\), \\(\\Delta f = f_s/N\\), escalada para que una senoide de amplitud \\(a\\) que cabe en un número entero de ciclos en el registro se lea exactamente \\(a\\) ({#} dB para \\(a = 1\\)) con cualquiera de las dos ventanas. El piso de ruido es el nivel RMS de los bins a más de {#} bins de cada parcial.",
"With Sound on you hear the ideal reconstruction: each partial at its apparent frequency, through the filter; the noise is not played.":
  "Con el Sonido encendido oyes la reconstrucción ideal: cada parcial en su frecuencia aparente, a través del filtro; el ruido no se reproduce.",
"Find what a digital instrument reports when it samples a signal: the apparent frequency of a tone sampled too slowly, where harmonics above half the sample rate land, how the record length sets the frequency resolution and the noise floor, and why a tone that does not fit the record spreads out.":
  "Descubre lo que reporta un instrumento digital cuando muestrea una señal: la frecuencia aparente de un tono muestreado demasiado despacio, dónde caen los armónicos arriba de la mitad de la frecuencia de muestreo, cómo la duración del registro fija la resolución en frecuencia y el piso de ruido, y por qué un tono que no cabe en el registro se reparte.",
"A converter (in a sound card, a digital oscilloscope or a phone) measures a signal only at the sample times \\(t_k = k/f_s\\), where \\(f_s\\) is the sample rate. Between samples it knows nothing.":
  "Un convertidor (en una tarjeta de sonido, un osciloscopio digital o un teléfono) mide una señal solo en los instantes de muestreo \\(t_k = k/f_s\\), donde \\(f_s\\) es la frecuencia de muestreo. Entre muestras no sabe nada.",
"<strong>Aliasing.</strong> A sine at \\(f\\) and a sine at \\(f - m f_s\\), for any whole number \\(m\\), take exactly the same values at every sample time, because \\(\\sin(2\\pi f k/f_s + \\phi) = \\sin(2\\pi (f - m f_s) k/f_s + 2\\pi m k + \\phi)\\) and \\(2\\pi m k\\) is a whole number of turns. The converter cannot tell them apart, so it reports the one closest to zero. The apparent (alias) frequency is":
  "<strong>Aliasing.</strong> Una senoide en \\(f\\) y una senoide en \\(f - m f_s\\), para cualquier número entero \\(m\\), toman exactamente los mismos valores en cada instante de muestreo, porque \\(\\sin(2\\pi f k/f_s + \\phi) = \\sin(2\\pi (f - m f_s) k/f_s + 2\\pi m k + \\phi)\\) y \\(2\\pi m k\\) es un número entero de vueltas. El convertidor no puede distinguirlas, así que reporta la más cercana a cero. La frecuencia aparente (alias) es",
"\\[f_a = \\lvert f - m f_s\\rvert,\\qquad m = \\text{the whole number nearest } f/f_s,\\]":
  "\\[f_a = \\lvert f - m f_s\\rvert,\\qquad m = \\text{el número entero más cercano a } f/f_s,\\]",
"which always lies between {#} and the Nyquist frequency \\(f_s/2\\). A signal is recorded correctly only if every frequency in it is below \\(f_s/2\\): at least two samples per cycle. Above \\(f_s/2\\) a frequency folds back, as if the frequency axis were folded like an accordion at every multiple of \\(f_s/2\\). Once a partial has folded, nothing done to the samples later can tell it from a real one, so the signal must be filtered <em>before</em> sampling, with an antialiasing filter.":
  "que siempre queda entre {#} y la frecuencia de Nyquist \\(f_s/2\\). Una señal se registra correctamente solo si todas sus frecuencias están por debajo de \\(f_s/2\\): al menos dos muestras por ciclo. Arriba de \\(f_s/2\\) una frecuencia se pliega, como si el eje de frecuencias se doblara como acordeón en cada múltiplo de \\(f_s/2\\). Una vez que un parcial se plegó, nada que se haga después con las muestras puede distinguirlo de uno real, así que la señal debe filtrarse <em>antes</em> de muestrear, con un filtro antialiasing.",
"<strong>The spectrum of a record.</strong> \\(N\\) samples last \\(T = N/f_s\\). Their discrete Fourier transform gives the spectrum at the bins \\(0, \\Delta f, 2\\Delta f, \\dots, f_s/2\\), with":
  "<strong>El espectro de un registro.</strong> \\(N\\) muestras duran \\(T = N/f_s\\). Su transformada discreta de Fourier da el espectro en los bins \\(0, \\Delta f, 2\\Delta f, \\dots, f_s/2\\), con",
"\\[\\Delta f = \\frac{f_s}{N} = \\frac1T .\\]":
  "\\[\\Delta f = \\frac{f_s}{N} = \\frac1T .\\]",
"A longer record gives finer resolution. A tone that fits a whole number of cycles in the record falls exactly on a bin. Any other tone spreads into the bins around it, called leakage, and its peak reads low. A window, such as the Hann window, tapers the record to zero at both ends: the peak gets wider, but the leakage far from it almost disappears.":
  "Un registro más largo da una resolución más fina. Un tono que cabe en un número entero de ciclos en el registro cae exactamente en un bin. Cualquier otro tono se reparte en los bins de alrededor, lo que se llama fuga espectral, y su pico se lee bajo. Una ventana, como la ventana de Hann, lleva el registro a cero en ambos extremos: el pico se ensancha, pero la fuga lejos de él casi desaparece.",
"<strong>Noise.</strong> White noise spreads its power evenly over all \\(N/2\\) bins, while a tone puts its power in one. So the noise level per bin falls as \\(1/\\sqrt N\\): each doubling of \\(N\\) lowers the noise floor by \\(10\\log_{10}2 = 3.01\\) dB, and a factor of {#} in \\(N\\) lowers it by {#} dB, while the tone’s peak stays put.":
  "<strong>Ruido.</strong> El ruido blanco reparte su potencia por igual en los \\(N/2\\) bins, mientras que un tono pone su potencia en uno. Así que el nivel de ruido por bin cae como \\(1/\\sqrt N\\): cada vez que \\(N\\) se duplica, el piso de ruido baja \\(10\\log_{10}2 = 3.01\\) dB, y un factor de {#} en \\(N\\) lo baja {#} dB, mientras el pico del tono se queda igual.",
"A {#} Hz tone is sampled at {#} Hz, a little more than one sample per cycle of the tone. Before you work anything out, decide what you expect the converter to report: the {#} Hz tone with a rougher shape, a steady tone at some other frequency, or no steady tone at all. Then use the formula in Background to find its apparent frequency.":
  "Un tono de {#} Hz se muestrea a {#} Hz, algo más de una muestra por ciclo del tono. Antes de calcular nada, decide qué esperas que reporte el convertidor: el tono de {#} Hz con una forma más burda, un tono constante a otra frecuencia, o ningún tono constante. Luego usa la fórmula de Fondo para encontrar su frecuencia aparente.",
"What is the highest frequency a converter sampling at {#} Hz records correctly?":
  "¿Cuál es la frecuencia más alta que registra correctamente un convertidor que muestrea a {#} Hz?",
"A record has {#} samples at {#} Hz. How long is it, and how far apart are its bins?":
  "Un registro tiene {#} muestras a {#} Hz. ¿Cuánto dura y qué tan separados están sus bins?",
"<strong>A. A tone sampled too slowly.</strong> In the right panel, find the <strong>Sampling and aliasing</strong> section and press the <strong>Too slow for the tone</strong> setup: a pure {#} Hz tone (A4) sampled at {#} Hz. Look at the record: the samples trace a slow wave that is not in the tone. Now set <strong>Samples N</strong> to {#}. For each sample rate in this list, click the <strong>Sample rate f_s</strong> readout, type the value and press Enter, then press <strong>Record this reading</strong>: {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} and {#} Hz. The <strong>Strongest peak</strong> readout goes in the Peak frequency column. Press <strong>Export to worksheet</strong>, then <strong>Clear</strong>.":
  "<strong>A. Un tono muestreado demasiado despacio.</strong> En el panel derecho, busca la sección <strong>Muestreo y aliasing</strong> y presiona la configuración <strong>Demasiado lento para el tono</strong>: un tono puro de {#} Hz (La4) muestreado a {#} Hz. Mira el registro: las muestras trazan una onda lenta que no está en el tono. Ahora fija <strong>Muestras N</strong> en {#}. Para cada frecuencia de muestreo de esta lista, haz clic en la lectura <strong>Frecuencia de muestreo f_s</strong>, escribe el valor y presiona Enter, luego presiona <strong>Registrar esta lectura</strong>: {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#}, {#} y {#} Hz. La lectura <strong>Pico más fuerte</strong> va en la columna Frecuencia del pico. Presiona <strong>Exportar a la hoja</strong> y luego <strong>Borrar</strong>.",
"<strong>B. Harmonics fold over.</strong> Press <strong>Harmonics fold over</strong>: the sawtooth at {#} Hz (every harmonic, \\(a_n = 1/n\\)) sampled at {#} Hz. In the table under the readouts, copy the frequency, where it appears and the level of harmonics {#} to {#} into the Folding table. Then tick <strong>Antialiasing filter before the converter</strong> (cutoff {#} f_s = {#} Hz) and copy the level of the same harmonics into the last column. If you can listen, turn on <strong>Sound</strong> and untick and tick the filter.":
  "<strong>B. Los armónicos se pliegan.</strong> Presiona <strong>Los armónicos se pliegan</strong>: el diente de sierra a {#} Hz (todos los armónicos, \\(a_n = 1/n\\)) muestreado a {#} Hz. En la tabla debajo de las lecturas, copia la frecuencia, dónde aparece y el nivel de los armónicos {#} a {#} en la tabla de Plegado. Luego marca <strong>Filtro antialiasing antes del convertidor</strong> (corte en {#} f_s = {#} Hz) y copia el nivel de los mismos armónicos en la última columna. Si puedes escuchar, enciende <strong>Sonido</strong> y desmarca y marca el filtro.",
"<strong>C. Leakage.</strong> Press <strong>Leakage</strong>: a pure {#} Hz tone, {#} samples at {#} Hz, rectangular window. Press <strong>Record this reading</strong>. Press <strong>Whole cycles in the record</strong> and record again. Then choose <strong>Window: Hann</strong> and record a third time. Press <strong>Leakage</strong> once more, choose <strong>Window: Hann</strong> and record a fourth time. The <strong>Peak level</strong> and <strong>Bins within {#} dB of the peak</strong> readouts are the ones to compare. Export to worksheet, then Clear.":
  "<strong>C. Fuga espectral.</strong> Presiona <strong>Fuga espectral</strong>: un tono puro de {#} Hz, {#} muestras a {#} Hz, ventana rectangular. Presiona <strong>Registrar esta lectura</strong>. Presiona <strong>Ciclos completos en el registro</strong> y registra otra vez. Luego elige <strong>Ventana: Hann</strong> y registra una tercera vez. Presiona <strong>Fuga espectral</strong> una vez más, elige <strong>Ventana: Hann</strong> y registra una cuarta vez. Las lecturas <strong>Nivel del pico</strong> y <strong>Bins a menos de {#} dB del pico</strong> son las que hay que comparar. Exporta a la hoja y luego presiona Borrar.",
"<strong>D. The noise floor.</strong> Press <strong>Noise floor</strong>: the same tone with simulated converter noise of RMS {#} and the Hann window. Record a reading with <strong>Samples N</strong> set to {#}, {#}, {#}, {#} and {#} in turn; the <strong>Noise floor</strong> readout goes in its column. Export to worksheet. To see how much the floor scatters, press <strong>New noise</strong> three times at N = {#} and note the noise floor each time in the notes under the table.":
  "<strong>D. El piso de ruido.</strong> Presiona <strong>Piso de ruido</strong>: el mismo tono con ruido simulado del convertidor de RMS {#} y la ventana de Hann. Registra una lectura con <strong>Muestras N</strong> en {#}, {#}, {#}, {#} y {#}, una tras otra; la lectura <strong>Piso de ruido</strong> va en su columna. Exporta a la hoja. Para ver cuánto se dispersa el piso, presiona <strong>Nuevo ruido</strong> tres veces con N = {#} y anota el piso de ruido cada vez en las notas debajo de la tabla.",
"<span>B</span>Sample rate \\(f_s\\) (Hz)":
  "<span>B</span>Frecuencia de muestreo \\(f_s\\) (Hz)",
"<span>C</span>Samples \\(N\\)":
  "<span>C</span>Muestras \\(N\\)",
"<span>D</span>Window":
  "<span>D</span>Ventana",
"<span>E</span>Peak frequency (Hz)":
  "<span>E</span>Frecuencia del pico (Hz)",
"<span>F</span>Peak level (dB)":
  "<span>F</span>Nivel del pico (dB)",
"<span>G</span>Bins within {#} dB":
  "<span>G</span>Bins a menos de {#} dB",
"<span>H</span>Noise floor (dB)":
  "<span>H</span>Piso de ruido (dB)",
"Sample rate f_s (Hz), row {#}":
  "Frecuencia de muestreo f_s (Hz), fila {#}",
"Samples N, row {#}":
  "Muestras N, fila {#}",
"Window, row {#}":
  "Ventana, fila {#}",
"Peak frequency (Hz), row {#}":
  "Frecuencia del pico (Hz), fila {#}",
"Peak level (dB), row {#}":
  "Nivel del pico (dB), fila {#}",
"Bins within {#} dB, row {#}":
  "Bins a menos de {#} dB, fila {#}",
"Noise floor (dB), row {#}":
  "Piso de ruido (dB), fila {#}",
"Parts A, C and D each get their own copy of this table.":
  "Las partes A, C y D tienen cada una su propia copia de esta tabla.",
"<strong>Folding (part B, \\(f_s\\) = {#} Hz).</strong>":
  "<strong>Plegado (parte B, \\(f_s\\) = {#} Hz).</strong>",
"<span>A</span>Harmonic \\(n\\)":
  "<span>A</span>Armónico \\(n\\)",
"<span>B</span>Frequency (Hz)":
  "<span>B</span>Frecuencia (Hz)",
"<span>C</span>Appears at (Hz)":
  "<span>C</span>Aparece en (Hz)",
"<span>D</span>Level, no filter (dB)":
  "<span>D</span>Nivel, sin filtro (dB)",
"<span>E</span>Level, filter on (dB)":
  "<span>E</span>Nivel, con filtro (dB)",
"Harmonic n, row {#}":
  "Armónico n, fila {#}",
"Frequency (Hz), row {#}":
  "Frecuencia (Hz), fila {#}",
"Appears at (Hz), row {#}":
  "Aparece en (Hz), fila {#}",
"Level, no filter (dB), row {#}":
  "Nivel, sin filtro (dB), fila {#}",
"Level, filter on (dB), row {#}":
  "Nivel, con filtro (dB), fila {#}",
"For each row of part A, work out the apparent frequency \\(f_a\\) from the formula in Background and the bin spacing \\(\\Delta f = f_s/N\\). Does every measured peak lie within \\(\\Delta f/2\\) of \\(f_a\\)?":
  "Para cada fila de la parte A, calcula la frecuencia aparente \\(f_a\\) con la fórmula de los Antecedentes y la separación entre bins \\(\\Delta f = f_s/N\\). ¿Cae cada pico medido a menos de \\(\\Delta f/2\\) de \\(f_a\\)?",
"Graph the peak frequency (vertical) against the sample rate (horizontal) for part A. Describe the shape. Above what sample rate is the {#} Hz tone reported correctly, and how does that compare with \\(2 \\times 440\\) Hz?":
  "Grafica la frecuencia del pico (vertical) contra la frecuencia de muestreo (horizontal) para la parte A. Describe la forma. ¿Arriba de qué frecuencia de muestreo se reporta correctamente el tono de {#} Hz, y cómo se compara eso con \\(2 \\times 440\\) Hz?",
"Use the formula to predict where harmonics {#} and {#} of {#} Hz appear at \\(f_s\\) = {#} Hz, and compare with your Folding table. Are the folded partials harmonics of {#} Hz?":
  "Usa la fórmula para predecir dónde aparecen los armónicos {#} y {#} de {#} Hz con \\(f_s\\) = {#} Hz, y compara con tu tabla de Plegado. ¿Son los parciales plegados armónicos de {#} Hz?",
"From \\(\\lvert H\\rvert = 1/\\sqrt{1 + (f/f_c)^{16}}\\) with \\(f_c\\) = {#} Hz, calculate in dB how much the filter weakens harmonic {#} and harmonic {#}, and compare with the change in their levels in your Folding table. Why does harmonic {#}, the one closest to \\(f_s/2\\), get through the most?":
  "Con \\(\\lvert H\\rvert = 1/\\sqrt{1 + (f/f_c)^{16}}\\) y \\(f_c\\) = {#} Hz, calcula en dB cuánto debilita el filtro el armónico {#} y el armónico {#}, y compara con el cambio de sus niveles en tu tabla de Plegado. ¿Por qué el armónico {#}, el más cercano a \\(f_s/2\\), es el que más pasa?",
"From part C, explain the peak level and the bins within {#} dB for each of the four readings.":
  "Con la parte C, explica el nivel del pico y los bins a menos de {#} dB de cada una de las cuatro lecturas.",
"Graph the noise floor (vertical) against \\(N\\) (horizontal) for part D and fit a logarithm, \\(y = a + b\\ln x\\). The Background predicts a fall of {#} dB per factor of {#} in \\(N\\), which is \\(b = -10/\\ln 10 = -4.34\\) dB. Compare your \\(b\\) with that.":
  "Grafica el piso de ruido (vertical) contra \\(N\\) (horizontal) para la parte D y ajusta un logaritmo, \\(y = a + b\\ln x\\). Los Antecedentes predicen una caída de {#} dB por cada factor de {#} en \\(N\\), que es \\(b = -10/\\ln 10 = -4.34\\) dB. Compara tu \\(b\\) con ese valor.",
"A peak frequency is known only to the nearest bin, \\(\\pm\\Delta f/2\\), unless the tone falls exactly on a bin. The noise floor is itself an average of random numbers, so it scatters from one record to the next: use your three New noise readings at N = {#} to estimate that scatter, and compare it with the residuals of your fit in Analysis {#}. Every value here is computed by the demo; the noise is simulated.":
  "Una frecuencia de pico se conoce solo hasta el bin más cercano, \\(\\pm\\Delta f/2\\), a menos que el tono caiga exactamente en un bin. El piso de ruido es en sí un promedio de números aleatorios, así que se dispersa de un registro a otro: usa tus tres lecturas de Nuevo ruido con N = {#} para estimar esa dispersión, y compárala con los residuos de tu ajuste del Análisis {#}. Cada valor aquí lo calcula el demo; el ruido es simulado.",
"A digital oscilloscope stores {#} samples across its screen. Set to {#} s across the screen, what is its sample rate, and what would it show for a {#} Hz signal?":
  "Un osciloscopio digital guarda {#} muestras a lo ancho de su pantalla. Ajustado a {#} s a lo ancho de la pantalla, ¿cuál es su frecuencia de muestreo y qué mostraría para una señal de {#} Hz?",
"Audio CDs use \\(f_s\\) = {#} Hz. What is the highest frequency they record, and why must the antialiasing filter in a CD recorder fall from passing everything at {#} kHz, the top of human hearing, to almost nothing by {#} kHz?":
  "Los CD de audio usan \\(f_s\\) = {#} Hz. ¿Cuál es la frecuencia más alta que registran, y por qué el filtro antialiasing de una grabadora de CD debe pasar de dejar pasar todo a {#} kHz, el límite del oído humano, a casi nada para {#} kHz?",
"Look at the {#} Hz row of part A, the case in Before the lab {#}. What did the converter report there, and why is more than one sample per cycle still not enough to record the tone? Use the identity in Background to name the slower sine that passes through exactly the same sample values.":
  "Mira la fila de {#} Hz de la parte A, el caso de Antes del laboratorio {#}. ¿Qué reportó ahí el convertidor, y por qué más de una muestra por ciclo todavía no basta para registrar el tono? Usa la identidad de Fondo para nombrar el seno más lento que pasa exactamente por los mismos valores de las muestras.",
"Prelab answers, the three copies of the Data table and the Folding table, the two graphs with the fit, the calculations in Analysis, the scatter estimate and answers to the questions.":
  "Respuestas previas al laboratorio, las tres copias de la tabla de Datos y la tabla de Plegado, las dos gráficas con el ajuste, los cálculos del Análisis, la estimación de la dispersión y las respuestas a las preguntas.",
"Timbre and Harmonics":
  "Timbre y armónicos",
"A {#} Hz tone is sampled at {#} Hz. Predict its apparent frequency.":
  "Un tono de {#} Hz se muestrea a {#} Hz. Predice su frecuencia aparente."
});
