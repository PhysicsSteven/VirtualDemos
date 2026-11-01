/* ws/compton in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'ws/compton', {
"Angle θ (°)":
  "Ángulo θ (°)",
"{#} - cosθ":
  "{#} - cosθ",
"Scattered wavelength λ' (pm)":
  "Longitud de onda dispersada λ' (pm)",
"Shift Δλ (pm)":
  "Corrimiento Δλ (pm)",
"Electron energy T (keV)":
  "Energía del electrón T (keV)",
"Electron angle φ (°)":
  "Ángulo del electrón φ (°)",
"Compton Scattering | VirtualDemos":
  "Dispersión de Compton | VirtualDemos",
"Compton Scattering":
  "Dispersión de Compton",
"<strong>Setups in the demo:</strong> Compton’s {#} experiment; Backscatter: biggest shift; Visible light: no visible shift; Gamma ray from cesium {#}; Klein–Nishina: forward peaking; Compton edge.":
  "<strong>Configuraciones en la demo:</strong> El experimento de Compton de {#}; Retrodispersión: el mayor corrimiento; Luz visible: ningún corrimiento visible; Rayo gamma del cesio {#}; Klein–Nishina: pico hacia adelante; Borde Compton.",
"A photon of energy \\(E\\) scatters off a free electron at rest. You set the photon’s energy (or pick a source: green laser, molybdenum Kα X-rays at {#} pm, {#} keV, or the {#} keV gamma ray of cesium {#}) and its scattering angle \\(\\theta\\), in {#}° steps. You can also drag the scattered photon in the picture.":
  "Un fotón de energía \\(E\\) se dispersa en un electrón libre en reposo. Fijas la energía del fotón (o eliges una fuente: láser verde, rayos X Kα de molibdeno a {#} pm, {#} keV, o el rayo gamma de {#} keV del cesio {#}) y su ángulo de dispersión \\(\\theta\\), en pasos de {#}°. También puedes arrastrar el fotón dispersado en la imagen.",
"The readouts act as two detectors: a spectrometer that reads the incoming and scattered wavelengths \\(\\lambda\\) and \\(\\lambda'\\) ({#} significant figures), and an electron detector that reads the recoil electron’s kinetic energy \\(T\\) ({#} significant figures) and its angle \\(\\phi\\) from the beam ({#}°).":
  "Las lecturas funcionan como dos detectores: un espectrómetro que lee las longitudes de onda incidente y dispersada \\(\\lambda\\) y \\(\\lambda'\\) ({#} cifras significativas), y un detector de electrones que lee la energía cinética \\(T\\) del electrón de retroceso ({#} cifras significativas) y su ángulo \\(\\phi\\) respecto al haz ({#}°).",
"The kinematics are exact and relativistic. Real target electrons are bound and moving, which widens the shifted line; the demo leaves that out.":
  "La cinemática es exacta y relativista. Los electrones de un blanco real están ligados y en movimiento, lo que ensancha la línea corrida; la demo omite eso.",
"Record reading stores the source, the photon energy and wavelength, the angle, \\(\\lambda'\\), \\(T\\) and \\(\\phi\\). Export to worksheet sends the readings to the Data table below; Clear (under Readings) starts a new series, which goes into a new copy of the table.":
  "Registrar lectura guarda la fuente, la energía y la longitud de onda del fotón, el ángulo, \\(\\lambda'\\), \\(T\\) y \\(\\phi\\). Exportar a la hoja envía las lecturas a la tabla de datos de abajo; Borrar (bajo Lecturas) empieza una serie nueva, que va a una nueva copia de la tabla.",
"Blind (in the Model fold) hides the shift \\(\\Delta\\lambda\\), the scattered energy, the electron’s momentum and speed and the conservation check, so you work them out yourself.":
  "A ciegas (en el pliegue Modelo) oculta el corrimiento \\(\\Delta\\lambda\\), la energía dispersada, la cantidad de movimiento y la rapidez del electrón y la comprobación de conservación, para que los calcules tú mismo.",
"Measure how the wavelength of scattered X-rays and gamma rays grows with the scattering angle, find the Compton wavelength and Planck’s constant from it, and check that energy and momentum are conserved when the electron’s relativistic momentum is used.":
  "Mide cómo crece la longitud de onda de los rayos X y gamma dispersados con el ángulo de dispersión, encuentra a partir de ello la longitud de onda de Compton y la constante de Planck, y comprueba que la energía y la cantidad de movimiento se conservan cuando se usa la cantidad de movimiento relativista del electrón.",
"Compton (§{#}) treated an X-ray as a photon of energy \\(E = hc/\\lambda\\) and momentum \\(p = h/\\lambda\\) colliding with a free electron at rest. Conservation of energy and of relativistic momentum (§§{#}, {#}) give the shift of the scattered wavelength":
  "Compton (§{#}) trató un rayo X como un fotón de energía \\(E = hc/\\lambda\\) y cantidad de movimiento \\(p = h/\\lambda\\) que choca con un electrón libre en reposo. La conservación de la energía y de la cantidad de movimiento relativista (§§{#}, {#}) da el corrimiento de la longitud de onda dispersada",
"\\[\\Delta\\lambda = \\lambda' - \\lambda = \\frac{h}{m_e c}\\,(1 - \\cos\\theta),\\]":
  "\\[\\Delta\\lambda = \\lambda' - \\lambda = \\frac{h}{m_e c}\\,(1 - \\cos\\theta),\\]",
"where \\(h/m_e c = \\lambda_C\\) is the Compton wavelength of the electron. The shift does not depend on \\(\\lambda\\). A graph of \\(\\Delta\\lambda\\) against \\(1 - \\cos\\theta\\) is a straight line through the origin with slope \\(\\lambda_C\\).":
  "donde \\(h/m_e c = \\lambda_C\\) es la longitud de onda de Compton del electrón. El corrimiento no depende de \\(\\lambda\\). Una gráfica de \\(\\Delta\\lambda\\) en función de \\(1 - \\cos\\theta\\) es una recta que pasa por el origen con pendiente \\(\\lambda_C\\).",
"The electron takes the energy the photon lost, \\(T = E - E'\\) with \\(E' = hc/\\lambda'\\). Its momentum is \\(p_e = \\gamma m_e v\\), which in energy units is":
  "El electrón toma la energía que perdió el fotón, \\(T = E - E'\\) con \\(E' = hc/\\lambda'\\). Su cantidad de movimiento es \\(p_e = \\gamma m_e v\\), que en unidades de energía es",
"\\[p_e c = \\sqrt{T^2 + 2Tm_ec^2}.\\]":
  "\\[p_e c = \\sqrt{T^2 + 2Tm_ec^2}.\\]",
"Along the beam and across it, the photon’s momentum before must equal the sum of the scattered photon’s and the electron’s momenta. A handy constant: \\(hc = 1239.84\\) keV·pm.":
  "A lo largo del haz y perpendicular a él, la cantidad de movimiento del fotón antes debe ser igual a la suma de las cantidades de movimiento del fotón dispersado y del electrón. Una constante útil: \\(hc = 1239.84\\) keV·pm.",
"Find the photon energy of molybdenum Kα X-rays ({#} pm) and of the cesium gamma ray ({#} keV) in the other unit (energy or wavelength).":
  "Encuentra la energía del fotón de los rayos X Kα de molibdeno ({#} pm) y del rayo gamma del cesio ({#} keV) en la otra unidad (energía o longitud de onda).",
"Using \\(\\lambda_C = 2.426\\) pm, predict the scattered wavelength of the molybdenum X-rays at {#}° and at {#}°.":
  "Usando \\(\\lambda_C = 2.426\\) pm, predice la longitud de onda dispersada de los rayos X de molibdeno a {#}° y a {#}°.",
"Why is the shift easy to see for X-rays and impossible to see for visible light ({#} nm)?":
  "¿Por qué el corrimiento es fácil de ver para los rayos X e imposible de ver para la luz visible ({#} nm)?",
"A {#} keV photon scatters straight back. Find \\(\\lambda'\\), \\(E'\\) and the electron’s kinetic energy.":
  "Un fotón de {#} keV se dispersa directamente hacia atrás. Encuentra \\(\\lambda'\\), \\(E'\\) y la energía cinética del electrón.",
"None for the virtual apparatus. Real X-ray tubes and cesium {#} sources need shielding and a radiation safety course.":
  "Ninguna para el aparato virtual. Los tubos de rayos X reales y las fuentes de cesio {#} requieren blindaje y un curso de seguridad radiológica.",
"Turn Blind on.":
  "Activa A ciegas.",
"<strong>Molybdenum X-rays.</strong> Start with Compton’s {#} experiment. Record a reading at angles from {#}° to {#}° in {#}° steps, and send the run to the worksheet before you clear the readings.":
  "<strong>Rayos X de molibdeno.</strong> Empieza con El experimento de Compton de {#}. Registra una lectura a ángulos de {#}° a {#}° en pasos de {#}°, y envía la corrida a la hoja de trabajo antes de borrar las lecturas.",
"<strong>Cesium gamma rays.</strong> Clear the readings and pick the cesium {#} source. Record a reading at the same seven angles. Send this run to a new copy of the table.":
  "<strong>Rayos gamma del cesio.</strong> Borra las lecturas y elige la fuente de cesio {#}. Registra una lectura en los mismos siete ángulos. Envía esta corrida a una nueva copia de la tabla.",
"<span>B</span>Angle \\(\\theta\\) (°)":
  "<span>B</span>Ángulo \\(\\theta\\) (°)",
"<span>C</span>\\(1 - \\cos\\theta\\)":
  "<span>C</span>\\(1 - \\cos\\theta\\)",
"<span>D</span>Scattered wavelength \\(\\lambda'\\) (pm)":
  "<span>D</span>Longitud de onda dispersada \\(\\lambda'\\) (pm)",
"<span>E</span>Shift \\(\\Delta\\lambda\\) (pm)":
  "<span>E</span>Corrimiento \\(\\Delta\\lambda\\) (pm)",
"<span>F</span>Electron energy \\(T\\) (keV)":
  "<span>F</span>Energía del electrón \\(T\\) (keV)",
"<span>G</span>Electron angle \\(\\phi\\) (°)":
  "<span>G</span>Ángulo del electrón \\(\\phi\\) (°)",
"Angle θ (°), row {#}":
  "Ángulo θ (°), fila {#}",
"{#} - cosθ, row {#}":
  "{#} - cosθ, fila {#}",
"Scattered wavelength λ' (pm), row {#}":
  "Longitud de onda dispersada λ' (pm), fila {#}",
"Shift Δλ (pm), row {#}":
  "Corrimiento Δλ (pm), fila {#}",
"Electron energy T (keV), row {#}":
  "Energía del electrón T (keV), fila {#}",
"Electron angle φ (°), row {#}":
  "Ángulo del electrón φ (°), fila {#}",
"Graph \\(\\Delta\\lambda\\) against \\(1 - \\cos\\theta\\) for each source. Is the intercept zero? Compare the two slopes with each other and with the accepted \\(\\lambda_C = 2.4263\\) pm.":
  "Grafica \\(\\Delta\\lambda\\) en función de \\(1 - \\cos\\theta\\) para cada fuente. ¿Es cero la ordenada al origen? Compara las dos pendientes entre sí y con el valor aceptado \\(\\lambda_C = 2.4263\\) pm.",
"From your slope find Planck’s constant, \\(h = \\lambda_C m_e c\\), with \\(m_e = 9.109 \\times 10^{-31}\\) kg.":
  "A partir de tu pendiente, encuentra la constante de Planck, \\(h = \\lambda_C m_e c\\), con \\(m_e = 9.109 \\times 10^{-31}\\) kg.",
"For the cesium gamma ray at {#}°, find \\(E' = hc/\\lambda'\\) and check that \\(E - E' = T\\).":
  "Para el rayo gamma del cesio a {#}°, encuentra \\(E' = hc/\\lambda'\\) y comprueba que \\(E - E' = T\\).",
"For the same reading, find the electron’s momentum \\(p_e c\\) from \\(T\\) and check momentum along the beam (\\(E = E'\\cos\\theta + p_e c\\cos\\phi\\)) and across it (\\(E'\\sin\\theta = p_e c\\sin\\phi\\)). Repeat the check with Newton’s momentum, \\(p_e c = \\sqrt{2Tm_ec^2}\\). Which one balances?":
  "Para la misma lectura, encuentra la cantidad de movimiento del electrón \\(p_e c\\) a partir de \\(T\\) y comprueba la cantidad de movimiento a lo largo del haz (\\(E = E'\\cos\\theta + p_e c\\cos\\phi\\)) y perpendicular a él (\\(E'\\sin\\theta = p_e c\\sin\\phi\\)). Repite la comprobación con la cantidad de movimiento de Newton, \\(p_e c = \\sqrt{2Tm_ec^2}\\). ¿Cuál cuadra?",
"What fraction of its energy does the photon lose at {#}° for each source? Why does the gamma ray lose so much more?":
  "¿Qué fracción de su energía pierde el fotón a {#}° para cada fuente? ¿Por qué el rayo gamma pierde mucho más?",
"The spectrometer gives \\(\\lambda'\\) to {#} significant figures ({#} pm for the X-rays, {#} pm for gamma rays below {#} pm). How large an uncertainty does that put on each \\(\\Delta\\lambda\\), and on your slope? Compare with the scatter of your residuals.":
  "El espectrómetro da \\(\\lambda'\\) a {#} cifras significativas ({#} pm para los rayos X, {#} pm para rayos gamma por debajo de {#} pm). ¿Qué incertidumbre pone eso en cada \\(\\Delta\\lambda\\), y en tu pendiente? Compara con la dispersión de tus residuos.",
"Why does the shift not depend on the wavelength of the incoming photon, while the fraction of energy lost does?":
  "¿Por qué el corrimiento no depende de la longitud de onda del fotón incidente, mientras que la fracción de energía perdida sí?",
"Compton also saw an unshifted line at every angle. What scatters those photons, and why is their shift too small to see?":
  "Compton también vio una línea no corrida en cada ángulo. ¿Qué dispersa esos fotones, y por qué su corrimiento es demasiado pequeño para verse?",
"In what direction does the electron recoil when the photon scatters at a small angle? At {#}°?":
  "¿En qué dirección retrocede el electrón cuando el fotón se dispersa a un ángulo pequeño? ¿Y a {#}°?",
"Why must the electron’s momentum be \\(\\gamma m_e v\\) and not \\(m_e v\\) in this calculation? At which source and angle does it matter most?":
  "¿Por qué en este cálculo la cantidad de movimiento del electrón debe ser \\(\\gamma m_e v\\) y no \\(m_e v\\)? ¿Con qué fuente y a qué ángulo importa más?",
"Prelab answers, the table copies with their graphs and fits, \\(\\lambda_C\\) and \\(h\\) with uncertainties, the conservation checks, and answers to the questions. Identify simulated data.":
  "Respuestas del prelaboratorio, las copias de la tabla con sus gráficas y ajustes, \\(\\lambda_C\\) y \\(h\\) con incertidumbres, las comprobaciones de conservación y las respuestas a las preguntas. Identifica los datos simulados.",
"Compton shift, λ′ − λ":
  "Corrimiento de Compton, λ′ − λ",
"Energy of the incoming photon":
  "Energía del fotón incidente",
"Energy of the scattered photon":
  "Energía del fotón dispersado",
"Kinetic energy of the recoil electron":
  "Energía cinética del electrón de retroceso",
"Lorentz factor of the electron":
  "Factor de Lorentz del electrón",
"Wavelength of the incoming photon":
  "Longitud de onda del fotón incidente",
"Wavelength of the scattered photon":
  "Longitud de onda del fotón dispersado",
"Compton wavelength of the electron, h/mₑc":
  "Longitud de onda de Compton del electrón, h/mₑc",
"Momentum of the photon, h/λ":
  "Cantidad de movimiento del fotón, h/λ",
"Momentum of the recoil electron":
  "Cantidad de movimiento del electrón de retroceso",
"Angle of the recoil electron from the beam":
  "Ángulo del electrón de retroceso respecto al haz",
"Scattering angle of the photon":
  "Ángulo de dispersión del fotón",
"Speed of the recoil electron":
  "Rapidez del electrón de retroceso"
});
