/* notes/derivatives in es: English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md) */
VDI18N.add('es', 'notes/derivatives', {
"Functions and Their Derivatives: teaching notes":
  "Funciones y sus derivadas: notas para el docente",
"Functions and Their Derivatives":
  "Funciones y sus derivadas",
"Physics I (Vol {#} {#}, {#}, {#}) and any course that uses calculus; Calculus I (OpenStax Calculus Vol {#} {#}, {#}, {#}, {#}) for Secant to tangent and Newton's method":
  "Física I (Vol {#} {#}, {#}, {#}) y cualquier curso que use cálculo; Cálculo I (OpenStax Calculus Vol {#} {#}, {#}, {#}, {#}) para De secante a tangente y Método de Newton",
"{#} to {#} minutes for each mode":
  "{#} a {#} minutos por modo",
"The derivative is the slope of the function at each point: where f rises, f′ is positive; where f has a peak or a valley, f′ crosses zero.":
  "La derivada es la pendiente de la función en cada punto: donde f sube, f′ es positiva; donde f tiene un máximo o un mínimo, f′ cruza el cero.",
"The second derivative is the slope of the slope. Where f curves upward f″ is positive, where it curves downward f″ is negative, and an inflection point is where f″ changes sign.":
  "La segunda derivada es la pendiente de la pendiente. Donde f se curva hacia arriba f″ es positiva, donde se curva hacia abajo f″ es negativa, y un punto de inflexión es donde f″ cambia de signo.",
"For motion, the same chain reads position, velocity, acceleration, jerk: the dropped ball has a straight line velocity and a constant acceleration.":
  "Para el movimiento, la misma cadena se lee posición, velocidad, aceleración, tirón: la pelota que cae tiene una velocidad que es una recta y una aceleración constante.",
"The integral runs the other way: F(x) is the area under f from a, and the slope of F is f again.":
  "La integral va en sentido contrario: F(x) es el área bajo f desde a, y la pendiente de F vuelve a ser f.",
"The derivative is a limit: the secant slope [f(x + h) − f(x)]/h closes in on the tangent slope as h shrinks. For motion, the average velocity over a short time closes in on the instantaneous velocity.":
  "La derivada es un límite: la pendiente de la secante [f(x + h) − f(x)]/h se acerca a la pendiente de la tangente al reducir h. Para el movimiento, la velocidad media en un tiempo corto se acerca a la velocidad instantánea.",
"The tangent line is the best straight line near the point: its error shrinks like h², and the Mean Value Theorem says some tangent between two points is parallel to the secant through them.":
  "La recta tangente es la mejor recta cerca del punto: su error se reduce como h², y el teorema del valor medio dice que alguna tangente entre dos puntos es paralela a la secante que pasa por ellos.",
"Newton's method rides tangents down to a root. Near a simple root the correct digits roughly double each step; from a bad start it can cycle, stop at a flat tangent or land on a different root.":
  "El método de Newton sigue tangentes hasta una raíz. Cerca de una raíz simple los dígitos correctos casi se duplican en cada paso; desde un mal inicio puede ciclar, detenerse en una tangente horizontal o caer en otra raíz.",
"Nothing to install. Use Projector mode so the curves are thick enough to read. The box takes ordinary typing (2x, sin x, x^{#}, e^(-x^{#}/{#})), and a pasted y = or f(x) = is fine. Blind mode in the Lab fold hides the derivative formulas and values, so students can sketch f′ before they see it.":
  "No hay nada que instalar. Usa el modo Proyector para que las curvas sean lo bastante gruesas para leerse. La caja acepta escritura normal (2x, sin x, x^{#}, e^(-x^{#}/{#})), y un y = o f(x) = pegado no causa problema. El modo A ciegas en la sección Laboratorio oculta las fórmulas y los valores de las derivadas, para que los estudiantes bosquejen f′ antes de verla.",
"<strong>A cubic.</strong> Turn on Blind and leave only f showing. Ask students to sketch f′ on the same axes, then turn f′ on (Q1). Press Play: the tangent line slides along, and its slope is the value of f′ at the point.":
  "<strong>Una cúbica.</strong> Activa A ciegas y deja solo f a la vista. Pide a los estudiantes que bosquejen f′ en los mismos ejes, y luego activa f′ (Q1). Presiona Iniciar: la recta tangente se desliza, y su pendiente es el valor de f′ en el punto.",
"<strong>A dropped ball.</strong> Switch to the dropped ball. The same three curves are now height, velocity and acceleration (Q2). Turn on f‴: the jerk is zero.":
  "<strong>Una pelota que cae.</strong> Cambia a la pelota que cae. Las mismas tres curvas son ahora altura, velocidad y aceleración (Q2). Activa f‴: el tirón es cero.",
"<strong>Sine.</strong> f″ is f upside down. Type sin(2x) and compare f″ with f (Q3); connect to a = −ω²x for a mass on a spring.":
  "<strong>Seno.</strong> f″ es f de cabeza. Escribe sin(2x) y compara f″ con f (Q3); relaciónalo con a = −ω²x para una masa en un resorte.",
"<strong>A corner.</strong> Ask for a prediction of f′ for |x| before showing it (Q4).":
  "<strong>Una esquina.</strong> Pide una predicción de f′ para |x| antes de mostrarla (Q4).",
"<strong>The integral.</strong> Use the {#}/x setup: F from a = {#} is ln x. Then the bell curve with the integral on (Q5).":
  "<strong>La integral.</strong> Usa la configuración de {#}/x: F desde a = {#} es ln x. Luego la curva de campana con la integral activada (Q5).",
"<strong>Secant to tangent.</strong> Switch modes to Secant to tangent with the first setup. Press Play: h halves every half second and the secant swings into the tangent, while the table of difference quotients closes in on f′({#}) = {#} (Q6). Turn on the linear approximation and watch its error shrink like h².":
  "<strong>De secante a tangente.</strong> Cambia al modo De secante a tangente con la primera configuración. Presiona Iniciar: h se reduce a la mitad cada medio segundo y la secante gira hasta la tangente, mientras la tabla de cocientes de diferencias se acerca a f′({#}) = {#} (Q6). Activa la aproximación lineal y observa cómo su error se reduce como h².",
"<strong>Average and instantaneous velocity.</strong> The dropped ball setup reads the secant slope as an average velocity (Q7). Then the Mean Value Theorem setup, and |x| as the case where it fails (Q8).":
  "<strong>Velocidad media e instantánea.</strong> La configuración de la pelota que se deja caer lee la pendiente de la secante como una velocidad media (Q7). Luego la configuración del teorema del valor medio, y |x| como el caso en que falla (Q8).",
"<strong>Newton's method.</strong> Switch modes to Newton's method with √{#}. Press One step a few times and watch the correct digits column (Q9). Then the three failing starts: the cycle, the flat tangent and the jump to another root (Q10).":
  "<strong>Método de Newton.</strong> Cambia al modo Método de Newton con √{#}. Presiona Un paso varias veces y observa la columna de dígitos correctos (Q9). Luego los tres inicios que fallan: el ciclo, la tangente horizontal y el salto a otra raíz (Q10).",
"<strong>Q1.</strong> For f(x) = x³ − 3x, find where f′ = {#} and use the sign of f″ there to say which point is a peak and which is a valley. Where is the inflection point? Check each answer by moving the point in the demo.":
  "<strong>Q1.</strong> Para f(x) = x³ − 3x, encuentra dónde f′ = {#} y usa el signo de f″ ahí para decir qué punto es un máximo y cuál es un mínimo. ¿Dónde está el punto de inflexión? Comprueba cada respuesta moviendo el punto en la demo.",
"<strong>Q2.</strong> A ball is dropped from {#} m: h(t) = {#} − {#}t² in meters, t in seconds. When does it land, and what is its velocity just before it lands? What are the second and third derivatives, and what do they mean physically?":
  "<strong>Q2.</strong> Se suelta una pelota desde {#} m: h(t) = {#} − {#}t² en metros, t en segundos. ¿Cuándo llega al suelo, y cuál es su velocidad justo antes de llegar? ¿Cuáles son la segunda y la tercera derivada, y qué significan físicamente?",
"<strong>Q3.</strong> Type sin(2x). What is f″ divided by f at any point? What would it be for sin(kx)? A mass on a spring has x(t) = A cos(ωt). What does this say about its acceleration?":
  "<strong>Q3.</strong> Escribe sin(2x). ¿Cuánto vale f″ dividida entre f en cualquier punto? ¿Cuánto valdría para sin(kx)? Una masa en un resorte tiene x(t) = A cos(ωt). ¿Qué dice esto sobre su aceleración?",
"<strong>Q4.</strong> Predict, then check: sketch f′ and f″ for f(x) = |x|. What happens at x = {#}? The demo shows f″ = {#} everywhere; why can that not be the whole story at x = {#}? (Hint: f′({#}) − f′(−{#}) must equal the area under f″ from −{#} to {#}.)":
  "<strong>Q4.</strong> Predice y luego comprueba: bosqueja f′ y f″ para f(x) = |x|. ¿Qué pasa en x = {#}? La demo muestra f″ = {#} en todas partes; ¿por qué eso no puede ser toda la historia en x = {#}? (Pista: f′({#}) − f′(−{#}) debe ser igual al área bajo f″ desde −{#} hasta {#}.)",
"<strong>Q5.</strong> For the bell curve e^(−x²/{#}), the integral from {#} levels off at {#} as x grows. What is the area under the whole curve, from −∞ to ∞? Read F({#}) from the demo with a = {#}, and use it to find the fraction of the whole area that lies between x = −{#} and x = {#}. Where have you seen that fraction before?":
  "<strong>Q5.</strong> Para la curva de campana e^(−x²/{#}), la integral desde {#} se estabiliza en {#} conforme x crece. ¿Cuál es el área bajo toda la curva, de −∞ a ∞? Lee F({#}) en la demo con a = {#}, y úsalo para encontrar la fracción del área total que queda entre x = −{#} y x = {#}. ¿Dónde has visto esa fracción antes?",
"<strong>Q6.</strong> For f(x) = x², show that the secant slope from x = {#} to {#} + h is exactly {#} + h. What is it for h = {#}, and for h = −{#}? The tangent line at {#} is L = {#} + 2h: show that its error f({#} + h) − L is h², and compare with f″({#})/{#}.":
  "<strong>Q6.</strong> Para f(x) = x², muestra que la pendiente de la secante de x = {#} a {#} + h es exactamente {#} + h. ¿Cuánto vale para h = {#}, y para h = −{#}? La recta tangente en {#} es L = {#} + 2h: muestra que su error f({#} + h) − L es h², y compáralo con f″({#})/{#}.",
"<strong>Q7.</strong> The dropped ball has h(t) = {#} − {#}t². Find its average velocity from t = {#} s to t = {#} s and its velocity at t = {#} s. At what time between {#} s and {#} s is its velocity equal to the average, and why is that time where it is?":
  "<strong>Q7.</strong> La pelota que se deja caer tiene h(t) = {#} − {#}t². Encuentra su velocidad media de t = {#} s a t = {#} s y su velocidad en t = {#} s. ¿En qué instante entre {#} s y {#} s su velocidad es igual a la media, y por qué está ese instante donde está?",
"<strong>Q8.</strong> For f(x) = x³ − 3x on [−{#}, {#}], find the secant slope and every c between −{#} and {#} where f′(c) equals it. Then try |x| on [−{#}, {#}]: why is there no such c, and which condition of the Mean Value Theorem fails?":
  "<strong>Q8.</strong> Para f(x) = x³ − 3x en [−{#}, {#}], encuentra la pendiente de la secante y todos los c entre −{#} y {#} donde f′(c) es igual a ella. Luego prueba |x| en [−{#}, {#}]: ¿por qué no hay tal c, y qué condición del teorema del valor medio falla?",
"<strong>Q9.</strong> Use Newton's method on x² − {#} from x₀ = {#}. Write x₁, x₂ and x₃ as fractions or to ten digits, and count their correct digits. Why do the correct digits roughly double with each step?":
  "<strong>Q9.</strong> Usa el método de Newton en x² − {#} desde x₀ = {#}. Escribe x₁, x₂ y x₃ como fracciones o con diez dígitos, y cuenta sus dígitos correctos. ¿Por qué los dígitos correctos casi se duplican en cada paso?",
"<strong>Q10.</strong> Explain each failing start: x³ − 2x + {#} from x₀ = {#}, x³ − 3x from x₀ = {#}, and sin x from x₀ = {#}. For each, give a start that works.":
  "<strong>Q10.</strong> Explica cada inicio que falla: x³ − 2x + {#} desde x₀ = {#}, x³ − 3x desde x₀ = {#}, y sin x desde x₀ = {#}. Para cada uno, da un inicio que funcione.",
"<strong>\"Where f is biggest, f′ is biggest.\"</strong> At a peak f′ is zero; f′ is largest where f is steepest.":
  "<strong>«Donde f es mayor, f′ es mayor.»</strong> En un máximo f′ es cero; f′ es mayor donde f es más empinada.",
"<strong>\"f″ &lt; {#} means f is decreasing.\"</strong> f″ says how the slope changes, not its sign. On the left of the cubic f rises (f′ > {#}) while curving downward (f″ &lt; {#}).":
  "<strong>«f″ &lt; {#} significa que f decrece.»</strong> f″ dice cómo cambia la pendiente, no su signo. A la izquierda de la cúbica f sube (f′ > {#}) mientras se curva hacia abajo (f″ &lt; {#}).",
"<strong>\"A negative acceleration means slowing down.\"</strong> The dropped ball has a = −{#} m/s² the whole way and speeds up, because its velocity is negative too.":
  "<strong>«Una aceleración negativa significa frenar.»</strong> La pelota que cae tiene a = −{#} m/s² todo el tiempo y aun así acelera, porque su velocidad también es negativa.",
"<strong>\"The integral is the area, so it cannot be negative.\"</strong> F counts area below the axis, or to the left of a, as negative.":
  "<strong>«La integral es el área, así que no puede ser negativa.»</strong> F cuenta como negativa el área debajo del eje, o a la izquierda de a.",
"<strong>\"A smaller h is always better.\"</strong> In exact arithmetic it is, but a computer keeps about {#} digits: at h = {#}⁻¹² most of the digits of f(x + h) − f(x) are rounding, and the difference quotient gets worse.":
  "<strong>\"Un h más pequeño siempre es mejor.\"</strong> En aritmética exacta lo es, pero una computadora guarda unos {#} dígitos: con h = {#}⁻¹² la mayoría de los dígitos de f(x + h) − f(x) son redondeo, y el cociente de diferencias empeora.",
"<strong>\"Newton's method always finds the nearest root.\"</strong> It follows the tangent, and a nearly flat tangent can throw it far away.":
  "<strong>\"El método de Newton siempre encuentra la raíz más cercana.\"</strong> Sigue la tangente, y una tangente casi horizontal puede lanzarlo muy lejos.",
"How the demo works":
  "Cómo funciona la demo",
"The box is read by a parser written for the page; nothing typed is run as code. Implied multiplication (2x, 3sin(x), (x+{#})(x−{#})), function powers (sin^{#}(x), sin^-{#}(x)) and absolute value bars are understood.":
  "La caja la lee un analizador escrito para la página; nada de lo que se escribe se ejecuta como código. Entiende la multiplicación implícita (2x, 3sin(x), (x+{#})(x−{#})), las potencias de funciones (sin^{#}(x), sin^-{#}(x)) y las barras de valor absoluto.",
"Derivatives are symbolic and exact: the sum, product, power and chain rules, then like terms and factors are combined, so the formulas shown are the exact derivatives. Odd roots of negative numbers are real (∛x is defined for x < {#}); even roots are not.":
  "Las derivadas son simbólicas y exactas: las reglas de la suma, del producto, de la potencia y de la cadena, y luego se combinan términos y factores semejantes, así que las fórmulas mostradas son las derivadas exactas. Las raíces impares de números negativos son reales (∛x está definida para x < {#}); las pares no.",
"The integral is numerical: adaptive Simpson's rule, to about nine significant figures. Where the area diverges ({#}/x across {#}) it stops.":
  "La integral es numérica: regla de Simpson adaptativa, con unas nueve cifras significativas. Donde el área diverge ({#}/x al cruzar {#}) se detiene.",
"A derivative is drawn only where f is defined, and a jump is left as a gap. Angles are in radians.":
  "Una derivada se dibuja solo donde f está definida, y un salto se deja como un hueco. Los ángulos están en radianes.",
"Secant to tangent computes the difference quotient directly from f, so the table shows the real rounding at small h. The Mean Value points are found by stepping along f′ minus the secant slope and bisecting each change of sign; a jump in f′, as at a corner, is not counted.":
  "De secante a tangente calcula el cociente de diferencias directamente de f, así que la tabla muestra el redondeo real con h pequeño. Los puntos del valor medio se encuentran recorriendo f′ menos la pendiente de la secante y bisecando cada cambio de signo; un salto en f′, como en una esquina, no cuenta.",
"Newton's method takes x − f(x)/f′(x) with the exact f′. It stops when f′ = {#} (flat tangent), when a value repeats (cycle), or when a step no longer changes x in double precision. The correct digits are counted against the root the steps settle on.":
  "El método de Newton toma x − f(x)/f′(x) con la f′ exacta. Se detiene cuando f′ = {#} (tangente horizontal), cuando un valor se repite (ciclo) o cuando un paso ya no cambia x en doble precisión. Los dígitos correctos se cuentan respecto a la raíz en la que se asientan los pasos.",
"Site":
  "Sitio",
"Virtual Physics Demos":
  "Demos virtuales de física",
"Library":
  "Biblioteca",
"<a>Demos</a><a>OpenStax</a><a>Notes</a>":
  "<a>Demos</a><a>OpenStax</a><a>Notas</a>",
"<a><b>For a class</b> Courses</a>":
  "<a><b>Para una clase</b> Cursos</a>",
"Physics I (Vol {#} {#}, {#}, {#}) and any course that uses calculus":
  "Física I (Vol {#} {#}, {#}, {#}) y cualquier curso que use cálculo"
});
