/**
 * EL PRIMER CAPÍTULO · Cuaderno de Descubrimiento · OLLIN (Wedding Planner Integral)
 *
 * Contenido transcrito ÍNTEGRO del documento maestro aprobado
 * `El_Primer_Capitulo_OLLIN_Clhei_Maestro_v1.md`.
 *
 * Regla editorial (doc maestro §0 y §20): las preguntas, frases, introducciones
 * y cartas NO se reescriben, resumen, fusionan ni "mejoran" sin autorización de
 * Tania. Se respeta el orden narrativo y los espacios de respuesta. El diseño es
 * el mismo del cuaderno Yolotzin; solo cambian el servicio y las preguntas.
 */

import type {
  Campo,
  Capitulo,
  CartaBienvenida,
  CartaCierre,
  ContenidoCuaderno,
  Instrucciones,
  Libro,
} from "@/lib/cuaderno-tipos";

export type { Campo, Capitulo } from "@/lib/cuaderno-tipos";

export const LIBRO: Libro = {
  titulo: "El Primer Capítulo",
  subtitulo: "Cuaderno de Descubrimiento",
  servicio: "OLLIN · Wedding Planner Integral",
  marca: "Clhei Floral Styling & Events",
  firma: "Tania Castorena",
  slug: "ollin",
  etiqueta: "OLLIN",
};

export const INSTRUCCIONES: Instrucciones = {
  titulo: "Antes de comenzar",
  parrafos: [
    "Este cuaderno está pensado para responderse juntos.",
    "No necesitan terminarlo en un solo día ni encontrar respuestas perfectas. Pueden detenerse, platicar, recordar y volver a estas páginas cuando lo deseen.",
    "Respóndanlo juntos. Hagan pausas, cuéntense historias, descubran coincidencias y disfruten esta parte del camino. Incluso aquellas respuestas en las que piensen diferente pueden ayudarles a reconocerse mejor y a encontrar aquello que represente a ambos.",
  ],
  notaDigital:
    "Sus respuestas se guardan solas mientras escriben — arriba aparecerá un pequeño «Guardado» cada vez que suceda. Pueden cerrar esta página y volver cuando quieran: el cuaderno los estará esperando donde lo dejaron. Solo tengan en cuenta que vive en este navegador; si lo comienzan en la computadora, continúenlo ahí.",
};

export const CARTA_BIENVENIDA: CartaBienvenida = {
  parrafos: [
    "Si este cuaderno llegó a ustedes, significa que oficialmente comenzamos a construir juntos el camino hacia el día de su boda.",
    "A partir de este momento, todo aquello que han imaginado comenzará poco a poco a tomar forma. Durante los próximos meses conoceremos su historia, descubriremos lo que realmente desean vivir y transformaremos cada una de sus ideas en una celebración que los represente.",
    "Antes de tomar decisiones, queremos detenernos a conocerlos.",
    "Queremos saber quiénes son cuando están juntos, qué momentos los trajeron hasta aquí, qué personas ocupan un lugar importante en sus vidas y cómo desean recordar esta etapa dentro de muchos años.",
    "Estas páginas serán el primer espacio para comenzar a descubrirlo.",
    "Respóndanlas juntos. Hagan pausas, cuéntense historias, recuerden, imaginen y disfruten esta parte del camino. Algunas respuestas aparecerán de inmediato y otras necesitarán un poco más de tiempo. Incluso aquellas en las que piensen diferente nos ayudarán a conocerlos mejor y a encontrar el equilibrio que represente a ambos.",
    "Volveremos a estas páginas durante la planeación siempre que necesitemos recordar qué es verdaderamente importante para ustedes. Serán nuestra brújula para construir una boda con intención, coherente con su historia y pensada para la experiencia que desean compartir.",
    "Gracias por confiar en nosotros y permitirnos acompañarlos desde el comienzo de esta nueva etapa.",
  ],
  despedida: "Con cariño,",
};

export const CARTA_CIERRE: CartaCierre = {
  titulo: "Lo que comienza a tomar forma",
  parrafos: [
    "Si llegaron hasta aquí, seguramente ya hicieron algo más importante que responder estas páginas: se regalaron un momento para recordar su historia, reconocer aquello que los une e imaginar con mayor claridad la boda que desean vivir.",
    "Entre sus respuestas se encuentran las personas que aman, los momentos que quieren guardar, la forma en la que desean sentirse y todo aquello que hará que esta celebración sea verdaderamente suya.",
    "No es necesario que en este momento tengan todas las respuestas ni que cada detalle esté completamente definido. Una boda también se descubre mientras se construye. Lo importante es que ya existe un punto de partida: ustedes y la intención con la que han decidido celebrar este momento.",
    "A partir de ahora, muchas de estas ideas comenzarán a tomar forma. Habrá decisiones, posibilidades y nuevos descubrimientos, pero estas páginas permanecerán como un recordatorio de lo que desean cuidar durante el camino.",
    "Volveremos a ellas siempre que necesitemos recuperar la esencia de su boda y recordar por qué comenzaron a imaginarla de esta manera.",
    "Gracias por compartirnos una parte tan personal de su historia y por permitirnos acompañarlos mientras comienzan a escribir este nuevo capítulo.",
  ],
  despedida: "Con cariño,",
};

export const FRASE_FINAL =
  "Toda gran historia comienza con una página en blanco. Gracias por permitirnos escribir este primer capítulo junto a ustedes.";

export const CAPITULOS: Capitulo[] = [
  {
    num: 1,
    titulo: "Ustedes",
    frases: [
      "Antes de imaginar una celebración, queremos conocer a las personas que le darán sentido.",
    ],
    intro: [
      "Todas las parejas tienen una historia distinta, una manera particular de entender el amor y su propia forma de tomar decisiones.",
      "Antes de comenzar a construir su boda, nos gustaría conocer un poco más sobre ustedes. No se preocupen por encontrar respuestas perfectas. Lo importante es que se reconozcan en ellas y disfruten este momento juntos.",
    ],
    paginas: [
      [
        {
          id: "c1p1",
          tipo: "pregunta",
          titulo:
            "Si tuvieran que describir su relación en tres palabras, ¿cuáles serían y por qué?",
        },
        {
          id: "c1p2",
          tipo: "pregunta",
          titulo: "¿Qué fue lo primero que admiraron el uno del otro?",
          nota: [
            "No necesariamente aquello que más llamó su atención al conocerse, sino lo que los hizo pensar: «Quiero seguir conociendo a esta persona».",
          ],
        },
      ],
      [
        {
          id: "c1p3",
          tipo: "pregunta",
          titulo:
            "Después de todo lo que han vivido juntos, ¿qué sienten que los convierte en un buen equipo?",
          nota: [
            "Nos ayudará a conocer cómo se acompañan, cómo enfrentan los retos y qué fortalezas encuentran el uno en el otro.",
          ],
        },
        {
          id: "c1p4",
          tipo: "pregunta",
          titulo:
            "¿Qué actividad disfrutan tanto que podrían pasar horas haciéndola juntos?",
          nota: [
            "Puede ser viajar, cocinar, salir a caminar, recibir amigos, ver películas o simplemente quedarse en casa. Queremos conocer esos momentos cotidianos en los que más disfrutan estar juntos.",
          ],
        },
      ],
      [
        {
          id: "c1p5",
          tipo: "frase",
          lead: ["Completen la siguiente frase:"],
          titulo: "Nos sentimos más nosotros cuando...",
        },
      ],
      [
        {
          id: "c1p6",
          tipo: "pregunta",
          titulo:
            "Cuando tienen que tomar una decisión importante, ¿cómo suelen hacerlo?",
          nota: [
            "Quizá uno necesita más tiempo, el otro confía en su intuición o ambos prefieren analizar todas las posibilidades. Conocer su dinámica nos ayudará a acompañarlos mejor durante la planeación.",
          ],
        },
      ],
      [
        {
          id: "c1p7",
          tipo: "pregunta",
          titulo:
            "Si dentro de veinte años volvieran a leer estas páginas, ¿qué les gustaría recordar de la etapa que están viviendo hoy?",
          nota: [
            "No piensen únicamente en la boda. Piensen en ustedes, en el momento de su vida en el que se encuentran y en cómo desean recordarlo con el paso del tiempo.",
          ],
        },
      ],
      [
        {
          id: "c1p8",
          tipo: "pregunta",
          titulo:
            "¿Hay algo sobre ustedes que les gustaría que conociéramos desde el principio para acompañarlos mejor durante este proceso?",
          nota: [
            "Puede ser una ilusión, una preocupación, una forma de comunicarse, una dinámica personal o cualquier detalle que consideren importante compartir con nosotros.",
          ],
        },
      ],
    ],
  },
  {
    num: 2,
    titulo: "Su Historia",
    frases: ["Toda boda comienza mucho antes del día en que se celebra."],
    intro: [
      "Cada historia tiene momentos que cambian su rumbo: algunos extraordinarios y otros aparentemente cotidianos que, con el tiempo, terminan adquiriendo un significado especial.",
      "En estas páginas queremos conocer el camino que han recorrido juntos, no como una línea del tiempo, sino a través de esos recuerdos, lugares y decisiones que han ido construyendo la relación que hoy desean celebrar.",
    ],
    paginas: [
      [
        {
          id: "c2p1",
          tipo: "pregunta",
          titulo:
            "Si alguien les preguntara cómo comenzó su historia, ¿qué les gustaría contarle?",
          nota: [
            "No buscamos la versión perfecta ni todos los detalles. Cuéntennos aquella parte que siempre recuerdan con una sonrisa y que sienten que representa mejor el inicio de ustedes.",
          ],
        },
        {
          id: "c2p2",
          tipo: "pregunta",
          titulo:
            "Mirando hacia atrás, ¿hubo algún momento en el que sintieron que su relación cambió para siempre?",
          nota: [
            "Puede haber sido un viaje, una conversación, un reto compartido o incluso un día muy cotidiano. Nos gustaría conocer ese instante en el que algo comenzó a sentirse diferente.",
          ],
        },
      ],
      [
        {
          id: "c2p3",
          tipo: "pregunta",
          titulo: "¿Qué han aprendido el uno del otro desde que están juntos?",
          nota: [
            "Piensen en las grandes enseñanzas, pero también en los pequeños hábitos, gustos y maneras de ver la vida que han descubierto gracias a su relación.",
          ],
        },
        {
          id: "c2p4",
          tipo: "pregunta",
          titulo:
            "¿Qué recuerdo de su historia sigue haciéndolos reír cada vez que lo cuentan?",
          nota: [
            "Las historias compartidas también se construyen con momentos inesperados. Queremos conocer uno de esos recuerdos que seguramente seguirán contando dentro de muchos años.",
          ],
        },
      ],
      [
        {
          id: "c2p5",
          tipo: "pregunta",
          titulo:
            "¿Existe algún lugar, canción, tradición, objeto o pequeño detalle que se haya vuelto especialmente significativo para ustedes?",
          nota: [
            "No es necesario que forme parte de la boda. Lo importante es conocer aquello que, con solo aparecer, los lleva de regreso a un momento de su historia.",
          ],
        },
        {
          id: "c2p6",
          tipo: "pregunta",
          titulo:
            "¿Cómo vivieron la decisión de comprometerse y comenzar a imaginar un futuro como matrimonio?",
          nota: [
            "Nos encantaría conocer no solo cómo sucedió, sino qué significó para cada uno y qué comenzaron a imaginar después de ese momento.",
          ],
        },
      ],
      [
        {
          id: "c2p7",
          tipo: "pregunta",
          titulo:
            "Si pudieran resumir la historia que han construido hasta hoy en una sola frase, ¿cuál sería?",
          nota: [
            "No la piensen demasiado. A veces las primeras palabras que aparecen son las que mejor expresan lo que han vivido juntos.",
          ],
        },
      ],
    ],
  },
  {
    num: 3,
    titulo: "El Sí",
    frases: [
      "Antes de imaginar cómo será la boda, queremos comprender qué significa para ustedes llegar hasta ella.",
    ],
    intro: [
      "Casarse representa algo diferente para cada pareja. Puede ser una promesa, la confirmación de un camino compartido, el comienzo de una nueva etapa o la decisión de seguir construyendo una vida juntos.",
      "En estas páginas queremos conocer qué hay detrás de su «sí» y aquello que realmente desean celebrar cuando llegue ese día.",
    ],
    paginas: [
      [
        {
          id: "c3p1",
          tipo: "pregunta",
          titulo: "Más allá de la boda, ¿qué significa casarse para ustedes?",
          nota: [
            "Cada pareja le da un sentido distinto a esta decisión. Nos gustaría conocer qué representa para cada uno comenzar esta nueva etapa como matrimonio.",
          ],
        },
        {
          id: "c3p2",
          tipo: "pregunta",
          titulo:
            "¿Por qué sienten que este es el momento indicado para dar este paso?",
          nota: [
            "No buscamos una fecha ni una razón perfecta. Queremos conocer qué cambió, qué se fortaleció o qué los hizo sentir que estaban preparados para comenzar este capítulo juntos.",
          ],
        },
      ],
      [
        {
          id: "c3p3",
          tipo: "pregunta",
          titulo:
            "Cuando imaginan el momento de decir «sí, acepto», ¿qué les gustaría sentir?",
          nota: [
            "Puede ser tranquilidad, emoción, certeza, alegría o cualquier otra sensación. Piensen en cómo desean vivir ese instante, más allá de todo lo que estará ocurriendo a su alrededor.",
          ],
        },
        {
          id: "c3p4",
          tipo: "pregunta",
          titulo:
            "¿Qué parte de comenzar una vida como matrimonio les emociona más?",
          nota: [
            "Piensen en lo cotidiano, en los proyectos que desean compartir, en la familia que están construyendo o en aquello que esperan seguir descubriendo el uno del otro.",
          ],
        },
      ],
      [
        {
          id: "c3p5",
          tipo: "pregunta",
          titulo:
            "¿Existe algún valor, promesa o intención que deseen cuidar especialmente en esta nueva etapa?",
          nota: [
            "Puede ser la confianza, el compañerismo, la libertad, la paciencia, la aventura o cualquier principio que quieran mantener presente a lo largo de su matrimonio.",
          ],
        },
        {
          id: "c3p6",
          tipo: "pregunta",
          titulo:
            "¿Qué les gustaría que las personas que los acompañen comprendieran sobre la decisión que están celebrando?",
          nota: [
            "Más allá de presenciar una boda, ¿qué quisieran compartir con ellas acerca de su historia, de su compromiso y de la vida que han decidido construir?",
          ],
        },
      ],
      [
        {
          id: "c3e1",
          tipo: "frase",
          lead: ["Completen juntos la siguiente frase:"],
          titulo: "Nuestra boda celebrará...",
          nota: [
            "Piensen más allá del evento. Escriban aquello que realmente desean honrar ese día: su historia, las personas que aman, los valores que comparten o el futuro que comienzan juntos.",
          ],
        },
      ],
    ],
  },
  {
    num: 4,
    titulo: "Las Personas",
    frases: [
      "Una boda reúne muchas historias alrededor de una sola celebración.",
    ],
    intro: [
      "Cada persona que los acompañe ese día llegará con una relación, un recuerdo y un significado distinto para ustedes.",
      "Antes de pensar en lugares dentro de una mesa, momentos del protocolo o responsabilidades, queremos conocer a quienes forman parte de su vida y comprender cómo desean compartir esta etapa con ellos.",
    ],
    paginas: [
      [
        {
          id: "c4p1",
          tipo: "pregunta",
          titulo:
            "¿Quiénes son esas personas con las que siempre imaginaron compartir el día de su boda?",
          nota: [
            "Hay presencias que nunca estuvieron en duda. Cuéntennos quiénes son y qué lugar ocupan en su historia.",
          ],
        },
        {
          id: "c4p2",
          tipo: "pregunta",
          titulo:
            "¿Quiénes sienten que han influido especialmente en las personas que son hoy?",
          nota: [
            "Pueden ser familiares, amistades, maestros o personas que los hayan acompañado en momentos importantes, de manera individual o como pareja.",
          ],
        },
      ],
      [
        {
          id: "c4p3",
          tipo: "pregunta",
          titulo:
            "Cuando piensan en sus familias, ¿cómo les gustaría que participaran y vivieran esta etapa con ustedes?",
          nota: [
            "Cada familia se relaciona de una forma distinta con la planeación y con la celebración. Nos gustaría conocer qué lugar desean compartir con ellas y qué momentos prefieren conservar únicamente para ustedes.",
          ],
        },
      ],
      [
        {
          id: "c4p4",
          tipo: "pregunta",
          titulo:
            "¿Hay alguien que, aunque ya no pueda estar presente físicamente, les gustaría sentir cerca ese día?",
          nota: [
            "Puede tratarse de una persona, una mascota o alguien que haya dejado una huella importante en sus vidas. Cuéntennos si desean recordarlo o integrarlo de alguna manera especial.",
          ],
        },
      ],
      [
        {
          id: "c4p5",
          tipo: "pregunta",
          titulo:
            "¿Hay algún momento de la boda que les gustaría compartir especialmente con una persona o un grupo de personas?",
          nota: [
            "Puede ser mientras se preparan, antes de la ceremonia, durante la celebración o en algún momento más íntimo que quieran cuidar dentro del día.",
          ],
        },
        {
          id: "c4p6",
          tipo: "pregunta",
          titulo:
            "¿Existe alguna tradición familiar que les emocione conservar o adaptar a su propia historia?",
          nota: [
            "También pueden compartir aquellas costumbres que prefieren dejar atrás porque ya no representan la manera en la que desean vivir su boda.",
          ],
        },
      ],
      [
        {
          id: "c4p7",
          tipo: "pregunta",
          titulo:
            "En toda familia existen historias y relaciones distintas. ¿Hay alguna dinámica que consideren importante que conozcamos para acompañarlos con mayor sensibilidad?",
          nota: [
            "No es necesario entrar en detalles que no deseen compartir. Queremos conocer únicamente aquello que nos ayude a cuidar su tranquilidad y la experiencia de las personas involucradas.",
          ],
        },
      ],
      [
        {
          id: "c4p8",
          tipo: "pregunta",
          titulo:
            "Si pudieran agradecerles algo a todas las personas que estarán presentes ese día, ¿qué les dirían?",
          nota: [
            "No necesitan escribir un discurso. Piensen simplemente en aquello que nace cuando imaginan a todas esas personas reunidas para celebrar con ustedes.",
          ],
        },
      ],
    ],
  },
  {
    num: 5,
    titulo: "La Experiencia",
    frases: [
      "Una boda no se recuerda únicamente por lo que ocurrió, sino por la forma en la que hizo sentir a quienes la vivieron.",
    ],
    intro: [
      "Durante ese día convivirán muchos momentos: algunos íntimos, otros llenos de emoción y otros pensados simplemente para disfrutar.",
      "Antes de comenzar a darles forma, queremos conocer cómo imaginan el recorrido completo de su boda y qué emociones desean que acompañen cada parte de la celebración.",
    ],
    paginas: [
      [
        {
          id: "c5p1",
          tipo: "pregunta",
          titulo:
            "Cuando imaginen la mañana de su boda, ¿cómo les gustaría que comenzara ese día?",
          nota: [
            "Piensen en el ambiente, las personas que estarán cerca, la música, los nervios o la tranquilidad. No buscamos construir todavía un itinerario, sino comprender la sensación con la que desean despertar y comenzar a vivirlo.",
          ],
        },
        {
          id: "c5p2",
          tipo: "pregunta",
          titulo:
            "Si pudieran elegir una sola palabra para describir la atmósfera de su boda, ¿cuál sería y por qué?",
          nota: [
            "Puede ser cálida, emocionante, elegante, alegre, cercana o cualquier otra palabra que represente la manera en la que desean que se sienta la celebración.",
          ],
        },
      ],
      [
        {
          id: "c5p3",
          tipo: "pregunta",
          titulo:
            "¿Hay algún momento de la boda que imaginen con especial ilusión?",
          nota: [
            "Puede ser el momento de verse por primera vez, la ceremonia, la entrada a la recepción, la cena, el primer baile o algo mucho más sencillo que tenga un significado especial para ustedes.",
          ],
        },
        {
          id: "c5p4",
          tipo: "pregunta",
          titulo:
            "Desde que sus invitados lleguen hasta que se despidan, ¿cómo les gustaría que se sintieran?",
          nota: [
            "Piensen no solo en que se diviertan, sino también en la forma en la que desean recibirlos, cuidarlos y hacerlos sentir parte de este momento.",
          ],
        },
      ],
      [
        {
          id: "c5p5",
          tipo: "pregunta",
          titulo:
            "¿Cómo imaginan que evolucionará la energía de la celebración a lo largo del día?",
          nota: [
            "Quizá desean comenzar con momentos íntimos y emotivos para después dar paso a una noche llena de música y alegría, o prefieren una experiencia más relajada y cercana de principio a fin.",
          ],
        },
        {
          id: "c5p6",
          tipo: "pregunta",
          titulo:
            "Como anfitriones, ¿hay algún gesto o detalle que les gustaría ofrecer a las personas que los acompañarán?",
          nota: [
            "No tiene que ser algo material. Puede ser una bienvenida especial, una experiencia compartida, un momento de agradecimiento o simplemente la oportunidad de convivir con cada persona presente.",
          ],
        },
      ],
      [
        {
          id: "c5p7",
          tipo: "pregunta",
          titulo:
            "Cuando todo haya terminado y finalmente estén solos, ¿qué les gustaría sentir al recordar ese día?",
          nota: [
            "Imaginen ese momento en el que puedan detenerse y hablar de todo lo que ocurrió. ¿Qué tendría que haber sucedido para que ambos sintieran que vivieron la boda que realmente deseaban?",
          ],
        },
      ],
    ],
  },
  {
    num: 6,
    titulo: "La Esencia",
    frases: [
      "Toda celebración tiene una identidad propia. Algunas se sienten desde el primer instante; otras se descubren poco a poco, a través de los espacios, los detalles y la forma en la que las personas los viven.",
    ],
    intro: [
      "Antes de elegir flores, mobiliario o colores, queremos comprender qué personalidad tendrá su boda y qué sensaciones desean transmitir.",
      "Estas respuestas serán el punto de partida para construir un universo visual coherente con su historia, con el lugar y con la experiencia que imaginan compartir.",
    ],
    paginas: [
      [
        {
          id: "c6p1",
          tipo: "pregunta",
          titulo: "Si su boda fuera una persona, ¿cómo la describirían?",
          nota: [
            "Piensen en su personalidad, su energía, la manera en la que recibiría a los invitados y aquello que la haría sentirse auténtica y diferente.",
          ],
        },
        {
          id: "c6p2",
          tipo: "pregunta",
          titulo:
            "¿Qué lugar, real o imaginario, refleja mejor el ambiente de la boda que desean construir?",
          nota: [
            "Puede ser una ciudad, una casa familiar, un jardín, un hotel, un paisaje o cualquier escenario que les transmita una sensación cercana a lo que están imaginando.",
          ],
        },
      ],
      [
        {
          id: "c6p3",
          tipo: "pregunta",
          titulo:
            "¿Hay algún elemento de la naturaleza con el que sientan una conexión especial?",
          nota: [
            "Puede ser el mar, un bosque, las montañas, un jardín, la luz del atardecer, la lluvia o cualquier paisaje que les provoque una emoción particular.",
          ],
        },
        {
          id: "c6p4",
          tipo: "pregunta",
          titulo:
            "Cuando imaginan los espacios de su boda, ¿qué materiales y texturas aparecen naturalmente en su mente?",
          nota: [
            "Piensen en madera, piedra, lino, cerámica, cristal, metal, papel, velas o cualquier otro elemento que ayude a transmitir el ambiente que buscan.",
          ],
        },
      ],
      [
        {
          id: "c6p5",
          tipo: "pregunta",
          titulo:
            "¿Hay colores o combinaciones que los hagan sentirse especialmente identificados?",
          nota: [
            "No buscamos definir todavía una paleta. Queremos conocer aquellas tonalidades que disfrutan, las que forman parte de su vida y también aquellas que definitivamente no sienten propias.",
          ],
        },
        {
          id: "c6p6",
          tipo: "pregunta",
          titulo:
            "¿Existe alguna fotografía, película, libro, obra de arte, ciudad o recuerdo cuya estética siempre les haya inspirado?",
          nota: [
            "No es necesario que sea una referencia de boda. A veces un lugar, una escena o un recuerdo pueden expresar con mayor claridad la sensación que desean crear.",
          ],
        },
      ],
      [
        {
          id: "c6e1",
          tipo: "frase",
          lead: [
            "Imaginen que uno de sus invitados intenta describir la boda después de haberla vivido.",
            "Completen la frase con las primeras palabras que desearían escuchar:",
          ],
          titulo: "Era una boda...",
        },
      ],
    ],
  },
  {
    num: 7,
    titulo: "Lo Esencial",
    frases: [
      "Una boda se construye a través de muchas decisiones, pero no todas tienen el mismo peso.",
    ],
    intro: [
      "Durante la planeación aparecerán ideas, posibilidades y opiniones distintas. Tener claridad sobre aquello que realmente importa les permitirá elegir con mayor tranquilidad y mantener el proyecto conectado con la boda que desean vivir.",
      "Estas páginas nos ayudarán a reconocer sus prioridades y a cuidar que, aun cuando el proyecto evolucione, su esencia permanezca presente.",
    ],
    paginas: [
      [
        {
          id: "c7p1",
          tipo: "pregunta",
          titulo:
            "Si tuvieran que conservar una sola prioridad durante toda la planeación, ¿cuál sería?",
          nota: [
            "Puede ser disfrutar el proceso, cuidar la experiencia de sus invitados, vivir una ceremonia significativa, celebrar sin preocupaciones o cualquier otra intención que deseen mantener presente de principio a fin.",
          ],
        },
      ],
      [
        {
          id: "c7p2",
          tipo: "pregunta",
          titulo:
            "Entre todos los elementos que puede tener una boda, ¿cuáles sienten que serán verdaderamente importantes para ustedes?",
          nota: [
            "No es necesario ordenarlos todavía. Piensen en aquellos aspectos que, al imaginar su boda, sienten que no podrían faltar para que la celebración se sienta completa.",
          ],
        },
        {
          id: "c7p3",
          tipo: "pregunta",
          titulo:
            "Durante el proceso habrá decisiones en las que será necesario encontrar un equilibrio. ¿Hay algo en lo que definitivamente no les gustaría hacer concesiones?",
          nota: [
            "Queremos conocer aquello que representa una prioridad absoluta para ustedes y que debemos proteger al evaluar las distintas posibilidades del proyecto.",
          ],
        },
      ],
      [
        {
          id: "c7p4",
          tipo: "pregunta",
          titulo:
            "Así como existen aspectos indispensables, también habrá otros en los que puedan adaptarse. ¿Dónde sienten que tendrían mayor flexibilidad?",
          nota: [
            "Tener claridad sobre esto nos permitirá redirigir tiempo, energía e inversión hacia aquello que realmente hará una diferencia en su experiencia.",
          ],
        },
        {
          id: "c7p5",
          tipo: "pregunta",
          titulo:
            "Además del resultado final, ¿cómo desean sentirse durante los meses de planeación?",
          nota: [
            "Puede ser acompañados, tranquilos, entusiasmados, informados o con la libertad de disfrutar esta etapa sin sentir que la boda ocupa por completo su vida.",
          ],
        },
      ],
      [
        {
          id: "c7p6",
          tipo: "pregunta",
          titulo:
            "Ahora que comenzamos este camino juntos, ¿cómo imaginan que podemos acompañarlos de la mejor manera?",
          nota: [
            "Nos gustaría conocer qué esperan de Clhei, cómo prefieren recibir orientación y qué tipo de acompañamiento les ayudará a sentirse seguros al tomar decisiones.",
          ],
        },
      ],
      [
        {
          id: "c7p7",
          tipo: "pregunta",
          titulo:
            "¿Existe alguna preocupación, límite o situación que consideren importante compartir desde este momento?",
          nota: [
            "Puede estar relacionada con la boda, con la planeación, con alguna dinámica familiar o con la forma en la que desean vivir el proceso. Conocerla desde el inicio nos permitirá acompañarlos con mayor sensibilidad.",
          ],
        },
      ],
      [
        {
          id: "c7e1",
          tipo: "frase",
          lead: ["Completen juntos la siguiente frase:"],
          titulo: "Sabremos que nuestra boda fue realmente nuestra si...",
          nota: [
            "Piensen en aquello que tendría que permanecer presente, aun cuando algunos detalles cambien durante el camino.",
          ],
        },
      ],
    ],
  },
];

/** Todos los campos en orden de lectura (para correo, conteo y copia). */
export const CAMPOS_ORDENADOS: { capitulo: Capitulo; campo: Campo }[] =
  CAPITULOS.flatMap((capitulo) =>
    capitulo.paginas.flat().map((campo) => ({ capitulo, campo })),
  );

export const TOTAL_CAMPOS = CAMPOS_ORDENADOS.length;

/** Contenido empaquetado para el componente de diseño compartido. */
export const CONTENIDO: ContenidoCuaderno = {
  libro: LIBRO,
  instrucciones: INSTRUCCIONES,
  cartaBienvenida: CARTA_BIENVENIDA,
  cartaCierre: CARTA_CIERRE,
  fraseFinal: FRASE_FINAL,
  capitulos: CAPITULOS,
  totalCampos: TOTAL_CAMPOS,
};

/* ============ Inglés · traducción fiel del maestro ============ */
/* Mismos ids de campo y misma estructura de páginas que el español, para que
   las respuestas sobrevivan al cambio de idioma. La entrega a Clhei siempre
   sale en español (actions.ts usa CONTENIDO). */

const CAPITULOS_EN: Capitulo[] = [
  {
    num: 1,
    titulo: "The Two of You",
    frases: [
      "Before imagining a celebration, we want to know the people who will give it meaning.",
    ],
    intro: [
      "Every couple has a different story, a particular way of understanding love, and their own way of making decisions.",
      "Before we begin building your wedding, we'd like to know a little more about you. Don't worry about finding perfect answers. What matters is that you recognize yourselves in them and enjoy this moment together.",
    ],
    paginas: [
      [
        {
          id: "c1p1",
          tipo: "pregunta",
          titulo:
            "If you had to describe your relationship in three words, which would they be — and why?",
        },
        {
          id: "c1p2",
          tipo: "pregunta",
          titulo: "What was the first thing you admired in each other?",
          nota: [
            "Not necessarily what first caught your attention when you met, but what made you think: “I want to keep getting to know this person.”",
          ],
        },
      ],
      [
        {
          id: "c1p3",
          tipo: "pregunta",
          titulo:
            "After everything you've lived through together, what do you feel makes you a good team?",
          nota: [
            "It will help us understand how you support each other, how you face challenges, and what strengths you find in one another.",
          ],
        },
        {
          id: "c1p4",
          tipo: "pregunta",
          titulo:
            "What activity do you enjoy so much you could spend hours doing it together?",
          nota: [
            "It could be traveling, cooking, going for a walk, having friends over, watching films, or simply staying home. We want to know those everyday moments when you most enjoy being together.",
          ],
        },
      ],
      [
        {
          id: "c1p5",
          tipo: "frase",
          lead: ["Complete the following sentence:"],
          titulo: "We feel most like ourselves when…",
        },
      ],
      [
        {
          id: "c1p6",
          tipo: "pregunta",
          titulo:
            "When you have to make an important decision, how do you usually go about it?",
          nota: [
            "Perhaps one of you needs more time, the other trusts their intuition, or you both prefer to weigh every possibility. Knowing your dynamic will help us accompany you better throughout the planning.",
          ],
        },
      ],
      [
        {
          id: "c1p7",
          tipo: "pregunta",
          titulo:
            "If you were to read these pages again twenty years from now, what would you like to remember about the season of life you're living today?",
          nota: [
            "Don't think only about the wedding. Think about the two of you, the moment of life you're in, and how you'd like to remember it as time goes by.",
          ],
        },
      ],
      [
        {
          id: "c1p8",
          tipo: "pregunta",
          titulo:
            "Is there anything about you that you'd like us to know from the start, so we can accompany you better throughout this process?",
          nota: [
            "It could be a hope, a worry, a way of communicating, a personal dynamic, or any detail you feel is important to share with us.",
          ],
        },
      ],
    ],
  },
  {
    num: 2,
    titulo: "Your Story",
    frases: ["Every wedding begins long before the day it's celebrated."],
    intro: [
      "Every story has moments that change its course — some extraordinary, others seemingly ordinary that, with time, take on a special meaning.",
      "In these pages we want to know the road you've walked together — not as a timeline, but through the memories, places, and decisions that have slowly built the relationship you now wish to celebrate.",
    ],
    paginas: [
      [
        {
          id: "c2p1",
          tipo: "pregunta",
          titulo:
            "If someone asked how your story began, what would you like to tell them?",
          nota: [
            "We're not after the perfect version or every detail. Tell us the part you always remember with a smile — the one that best captures how the two of you began.",
          ],
        },
        {
          id: "c2p2",
          tipo: "pregunta",
          titulo:
            "Looking back, was there a moment when you felt your relationship changed forever?",
          nota: [
            "It may have been a trip, a conversation, a shared challenge, or even a very ordinary day. We'd love to know that instant when something began to feel different.",
          ],
        },
      ],
      [
        {
          id: "c2p3",
          tipo: "pregunta",
          titulo: "What have you learned from each other since you've been together?",
          nota: [
            "Think of the big lessons, but also the small habits, tastes, and ways of seeing life you've discovered thanks to your relationship.",
          ],
        },
        {
          id: "c2p4",
          tipo: "pregunta",
          titulo:
            "Which memory from your story still makes you laugh every time you tell it?",
          nota: [
            "Shared stories are also built from unexpected moments. We want to hear one of those memories you'll surely still be telling many years from now.",
          ],
        },
      ],
      [
        {
          id: "c2p5",
          tipo: "pregunta",
          titulo:
            "Is there a place, song, tradition, object, or small detail that has become especially meaningful to you?",
          nota: [
            "It doesn't have to be part of the wedding. What matters is knowing what, just by appearing, carries you back to a moment in your story.",
          ],
        },
        {
          id: "c2p6",
          tipo: "pregunta",
          titulo:
            "How did you experience the decision to get engaged and begin imagining a future as a married couple?",
          nota: [
            "We'd love to know not only how it happened, but what it meant to each of you and what you began to imagine after that moment.",
          ],
        },
      ],
      [
        {
          id: "c2p7",
          tipo: "pregunta",
          titulo:
            "If you could sum up the story you've built so far in a single sentence, what would it be?",
          nota: [
            "Don't overthink it. Sometimes the first words that come are the ones that best express what you've lived together.",
          ],
        },
      ],
    ],
  },
  {
    num: 3,
    titulo: "The Yes",
    frases: [
      "Before imagining what the wedding will be like, we want to understand what it means to you to arrive at it.",
    ],
    intro: [
      "Getting married means something different to every couple. It can be a promise, the confirmation of a shared path, the start of a new chapter, or the decision to keep building a life together.",
      "In these pages we want to know what lies behind your “yes,” and what you truly wish to celebrate when that day comes.",
    ],
    paginas: [
      [
        {
          id: "c3p1",
          tipo: "pregunta",
          titulo: "Beyond the wedding itself, what does getting married mean to you?",
          nota: [
            "Every couple gives this decision a different meaning. We'd like to know what beginning this new chapter as a married couple represents for each of you.",
          ],
        },
        {
          id: "c3p2",
          tipo: "pregunta",
          titulo:
            "Why do you feel this is the right moment to take this step?",
          nota: [
            "We're not looking for a date or a perfect reason. We want to know what changed, what grew stronger, or what made you feel ready to begin this chapter together.",
          ],
        },
      ],
      [
        {
          id: "c3p3",
          tipo: "pregunta",
          titulo:
            "When you imagine the moment of saying “I do,” what would you like to feel?",
          nota: [
            "It could be calm, excitement, certainty, joy, or any other feeling. Think about how you want to live that instant, beyond everything happening around you.",
          ],
        },
        {
          id: "c3p4",
          tipo: "pregunta",
          titulo:
            "What part of beginning a life as a married couple excites you most?",
          nota: [
            "Think of the everyday, the projects you want to share, the family you're building, or what you hope to keep discovering in each other.",
          ],
        },
      ],
      [
        {
          id: "c3p5",
          tipo: "pregunta",
          titulo:
            "Is there a value, promise, or intention you especially want to care for in this new chapter?",
          nota: [
            "It could be trust, companionship, freedom, patience, adventure, or any principle you want to keep present throughout your marriage.",
          ],
        },
        {
          id: "c3p6",
          tipo: "pregunta",
          titulo:
            "What would you like the people joining you to understand about the decision you're celebrating?",
          nota: [
            "Beyond witnessing a wedding, what would you want to share with them about your story, your commitment, and the life you've chosen to build?",
          ],
        },
      ],
      [
        {
          id: "c3e1",
          tipo: "frase",
          lead: ["Complete the following sentence together:"],
          titulo: "Our wedding will celebrate…",
          nota: [
            "Think beyond the event. Write what you truly wish to honor that day: your story, the people you love, the values you share, or the future you're beginning together.",
          ],
        },
      ],
    ],
  },
  {
    num: 4,
    titulo: "The People",
    frases: ["A wedding gathers many stories around a single celebration."],
    intro: [
      "Each person who joins you that day will arrive with a different relationship, memory, and meaning to you.",
      "Before thinking about seats at a table, moments of protocol, or responsibilities, we want to know the people who are part of your life and understand how you wish to share this chapter with them.",
    ],
    paginas: [
      [
        {
          id: "c4p1",
          tipo: "pregunta",
          titulo:
            "Who are the people you always imagined sharing your wedding day with?",
          nota: [
            "Some presences were never in doubt. Tell us who they are and what place they hold in your story.",
          ],
        },
        {
          id: "c4p2",
          tipo: "pregunta",
          titulo:
            "Who do you feel has especially shaped the people you are today?",
          nota: [
            "They may be family, friends, mentors, or people who accompanied you through important moments — individually or as a couple.",
          ],
        },
      ],
      [
        {
          id: "c4p3",
          tipo: "pregunta",
          titulo:
            "When you think of your families, how would you like them to take part in and live this chapter with you?",
          nota: [
            "Every family relates to the planning and the celebration differently. We'd like to know what space you wish to share with them and which moments you'd rather keep just for yourselves.",
          ],
        },
      ],
      [
        {
          id: "c4p4",
          tipo: "pregunta",
          titulo:
            "Is there someone who, though no longer able to be there in person, you'd like to feel close that day?",
          nota: [
            "It may be a person, a pet, or someone who left an important mark on your lives. Tell us if you'd like to remember them or weave them in some special way.",
          ],
        },
      ],
      [
        {
          id: "c4p5",
          tipo: "pregunta",
          titulo:
            "Is there a moment of the wedding you'd especially like to share with a particular person or group?",
          nota: [
            "It could be while getting ready, before the ceremony, during the celebration, or in some more intimate moment you'd like to protect within the day.",
          ],
        },
        {
          id: "c4p6",
          tipo: "pregunta",
          titulo:
            "Is there a family tradition you're excited to keep, or to adapt to your own story?",
          nota: [
            "You can also share the customs you'd rather leave behind because they no longer reflect the way you want to live your wedding.",
          ],
        },
      ],
      [
        {
          id: "c4p7",
          tipo: "pregunta",
          titulo:
            "Every family has its own stories and relationships. Is there a dynamic you feel is important for us to know, so we can accompany you with greater sensitivity?",
          nota: [
            "There's no need to go into details you'd rather not share. We only want to know what will help us protect your peace of mind and the experience of everyone involved.",
          ],
        },
      ],
      [
        {
          id: "c4p8",
          tipo: "pregunta",
          titulo:
            "If you could thank everyone who will be present that day for something, what would you say?",
          nota: [
            "You don't need to write a speech. Simply think of what arises when you picture all those people gathered to celebrate with you.",
          ],
        },
      ],
    ],
  },
  {
    num: 5,
    titulo: "The Experience",
    frases: [
      "A wedding isn't remembered only for what happened, but for the way it made everyone who lived it feel.",
    ],
    intro: [
      "That day will hold many moments together — some intimate, some full of emotion, and others meant simply to be enjoyed.",
      "Before we begin giving them shape, we want to know how you imagine the full arc of your wedding and which emotions you want to accompany each part of the celebration.",
    ],
    paginas: [
      [
        {
          id: "c5p1",
          tipo: "pregunta",
          titulo:
            "When you picture the morning of your wedding, how would you like the day to begin?",
          nota: [
            "Think of the atmosphere, the people nearby, the music, the nerves, or the calm. We're not building an itinerary yet, but understanding the feeling with which you want to wake and begin to live it.",
          ],
        },
        {
          id: "c5p2",
          tipo: "pregunta",
          titulo:
            "If you could choose a single word to describe the atmosphere of your wedding, what would it be — and why?",
          nota: [
            "It could be warm, moving, elegant, joyful, intimate, or any other word that captures how you want the celebration to feel.",
          ],
        },
      ],
      [
        {
          id: "c5p3",
          tipo: "pregunta",
          titulo:
            "Is there a moment of the wedding you imagine with special anticipation?",
          nota: [
            "It could be seeing each other for the first time, the ceremony, the entrance to the reception, dinner, the first dance, or something much simpler that holds special meaning for you.",
          ],
        },
        {
          id: "c5p4",
          tipo: "pregunta",
          titulo:
            "From the moment your guests arrive until they say goodbye, how would you like them to feel?",
          nota: [
            "Think not only of them having fun, but of the way you want to welcome them, care for them, and make them feel part of this moment.",
          ],
        },
      ],
      [
        {
          id: "c5p5",
          tipo: "pregunta",
          titulo:
            "How do you imagine the energy of the celebration will evolve over the course of the day?",
          nota: [
            "Perhaps you want to begin with intimate, emotional moments and then give way to a night full of music and joy, or you'd prefer a more relaxed, close-knit experience from start to finish.",
          ],
        },
        {
          id: "c5p6",
          tipo: "pregunta",
          titulo:
            "As hosts, is there a gesture or detail you'd like to offer the people who will join you?",
          nota: [
            "It doesn't have to be something material. It could be a special welcome, a shared experience, a moment of gratitude, or simply the chance to spend time with each person there.",
          ],
        },
      ],
      [
        {
          id: "c5p7",
          tipo: "pregunta",
          titulo:
            "When it's all over and you're finally alone, what would you like to feel as you remember that day?",
          nota: [
            "Imagine the moment when you can pause and talk about everything that happened. What would need to have taken place for you both to feel you lived the wedding you truly wanted?",
          ],
        },
      ],
    ],
  },
  {
    num: 6,
    titulo: "The Essence",
    frases: [
      "Every celebration has an identity of its own. Some are felt from the very first instant; others are discovered little by little, through the spaces, the details, and the way people experience them.",
    ],
    intro: [
      "Before choosing flowers, furniture, or colors, we want to understand what personality your wedding will have and what feelings you wish to convey.",
      "These answers will be the starting point for building a visual world coherent with your story, with the place, and with the experience you imagine sharing.",
    ],
    paginas: [
      [
        {
          id: "c6p1",
          tipo: "pregunta",
          titulo: "If your wedding were a person, how would you describe them?",
          nota: [
            "Think of their personality, their energy, the way they'd welcome guests, and what would make them feel authentic and one of a kind.",
          ],
        },
        {
          id: "c6p2",
          tipo: "pregunta",
          titulo:
            "What place, real or imagined, best reflects the atmosphere of the wedding you want to create?",
          nota: [
            "It could be a city, a family home, a garden, a hotel, a landscape, or any setting that conveys a feeling close to what you're imagining.",
          ],
        },
      ],
      [
        {
          id: "c6p3",
          tipo: "pregunta",
          titulo:
            "Is there an element of nature you feel a special connection to?",
          nota: [
            "It could be the sea, a forest, the mountains, a garden, the light of dusk, the rain, or any landscape that stirs a particular emotion in you.",
          ],
        },
        {
          id: "c6p4",
          tipo: "pregunta",
          titulo:
            "When you imagine the spaces of your wedding, what materials and textures naturally come to mind?",
          nota: [
            "Think of wood, stone, linen, ceramic, glass, metal, paper, candles, or any other element that helps convey the atmosphere you're after.",
          ],
        },
      ],
      [
        {
          id: "c6p5",
          tipo: "pregunta",
          titulo:
            "Are there colors or combinations you feel especially drawn to?",
          nota: [
            "We're not defining a palette yet. We want to know the tones you enjoy, the ones that are part of your life, and also those that definitely don't feel like yours.",
          ],
        },
        {
          id: "c6p6",
          tipo: "pregunta",
          titulo:
            "Is there a photograph, film, book, work of art, city, or memory whose aesthetic has always inspired you?",
          nota: [
            "It doesn't have to be a wedding reference. Sometimes a place, a scene, or a memory can express more clearly the feeling you want to create.",
          ],
        },
      ],
      [
        {
          id: "c6e1",
          tipo: "frase",
          lead: [
            "Imagine one of your guests trying to describe the wedding after having lived it.",
            "Complete the sentence with the first words you'd hope to hear:",
          ],
          titulo: "It was a wedding…",
        },
      ],
    ],
  },
  {
    num: 7,
    titulo: "What Matters Most",
    frases: [
      "A wedding is built through many decisions, but not all of them carry the same weight.",
    ],
    intro: [
      "Throughout the planning, ideas, possibilities, and differing opinions will arise. Being clear about what truly matters will let you choose with greater peace of mind and keep the project connected to the wedding you want to live.",
      "These pages will help us recognize your priorities and make sure that, even as the project evolves, its essence remains present.",
    ],
    paginas: [
      [
        {
          id: "c7p1",
          tipo: "pregunta",
          titulo:
            "If you had to keep one single priority throughout the entire planning, what would it be?",
          nota: [
            "It could be enjoying the process, caring for your guests' experience, living a meaningful ceremony, celebrating without worry, or any other intention you want to keep present from start to finish.",
          ],
        },
      ],
      [
        {
          id: "c7p2",
          tipo: "pregunta",
          titulo:
            "Among all the elements a wedding can have, which do you feel will be truly important to you?",
          nota: [
            "There's no need to rank them yet. Think of the aspects that, when you imagine your wedding, feel indispensable for the celebration to feel complete.",
          ],
        },
        {
          id: "c7p3",
          tipo: "pregunta",
          titulo:
            "During the process there will be decisions where a balance must be found. Is there anything you definitely wouldn't want to compromise on?",
          nota: [
            "We want to know what represents an absolute priority for you — what we should protect as we weigh the project's different possibilities.",
          ],
        },
      ],
      [
        {
          id: "c7p4",
          tipo: "pregunta",
          titulo:
            "Just as there are indispensable aspects, there will be others where you can adapt. Where do you feel you'd have the most flexibility?",
          nota: [
            "Being clear about this will let us redirect time, energy, and investment toward what will truly make a difference in your experience.",
          ],
        },
        {
          id: "c7p5",
          tipo: "pregunta",
          titulo:
            "Beyond the final result, how do you want to feel during the months of planning?",
          nota: [
            "It could be supported, at ease, excited, informed, or free to enjoy this stage without feeling the wedding takes over your whole life.",
          ],
        },
      ],
      [
        {
          id: "c7p6",
          tipo: "pregunta",
          titulo:
            "Now that we're beginning this road together, how do you imagine we can best accompany you?",
          nota: [
            "We'd like to know what you expect from Clhei, how you prefer to receive guidance, and what kind of support will help you feel confident when making decisions.",
          ],
        },
      ],
      [
        {
          id: "c7p7",
          tipo: "pregunta",
          titulo:
            "Is there a worry, boundary, or situation you feel is important to share from this moment on?",
          nota: [
            "It may relate to the wedding, the planning, a family dynamic, or the way you want to live the process. Knowing it from the start will let us accompany you with greater sensitivity.",
          ],
        },
      ],
      [
        {
          id: "c7e1",
          tipo: "frase",
          lead: ["Complete the following sentence together:"],
          titulo: "We'll know our wedding was truly ours if…",
          nota: [
            "Think of what would need to remain present, even if some details change along the way.",
          ],
        },
      ],
    ],
  },
];

export const CONTENIDO_EN: ContenidoCuaderno = {
  libro: {
    titulo: "The First Chapter",
    subtitulo: "Discovery Notebook",
    servicio: "OLLIN · Full Wedding Planning",
    marca: "Clhei Floral Styling & Events",
    firma: "Tania Castorena",
    slug: "ollin",
    etiqueta: "OLLIN",
  },
  instrucciones: {
    titulo: "Before you begin",
    parrafos: [
      "This notebook is meant to be answered together.",
      "You don't need to finish it in a single day or find perfect answers. You can pause, talk, remember, and return to these pages whenever you like.",
      "Answer it together. Take breaks, tell each other stories, discover unexpected agreements, and enjoy this part of the road. Even the answers where you think differently can help you know yourselves better and find what represents you both.",
    ],
    notaDigital:
      "Your answers save themselves as you write — a small “Saved” will appear above each time it happens. You can close this page and come back whenever you like: the notebook will be waiting right where you left it. Just keep in mind it lives in this browser; if you begin on the computer, continue there.",
  },
  cartaBienvenida: {
    parrafos: [
      "If this notebook has reached you, it means we've officially begun building the road to your wedding day together.",
      "From this moment on, everything you've imagined will slowly begin to take shape. Over the coming months we'll get to know your story, discover what you truly wish to live, and turn each of your ideas into a celebration that represents you.",
      "Before making decisions, we want to pause and get to know you.",
      "We want to know who you are when you're together, which moments brought you here, which people hold an important place in your lives, and how you'd like to remember this season many years from now.",
      "These pages will be the first space to begin discovering it.",
      "Answer them together. Take breaks, tell each other stories, remember, imagine, and enjoy this part of the road. Some answers will come at once, and others will need a little more time. Even the ones where you think differently will help us know you better and find the balance that represents you both.",
      "We'll return to these pages throughout the planning whenever we need to remember what is truly important to you. They will be our compass for building a wedding with intention — true to your story and made for the experience you wish to share.",
      "Thank you for trusting us and letting us accompany you from the very beginning of this new chapter.",
    ],
    despedida: "With love,",
  },
  cartaCierre: {
    titulo: "What Begins to Take Shape",
    parrafos: [
      "If you've made it here, you've surely done something more important than answering these pages: you gave yourselves a moment to remember your story, recognize what unites you, and imagine more clearly the wedding you want to live.",
      "Among your answers are the people you love, the moments you want to keep, the way you wish to feel, and everything that will make this celebration truly yours.",
      "You don't need to have every answer right now, or to have each detail fully defined. A wedding is also discovered as it's built. What matters is that there's already a starting point: the two of you, and the intention with which you've chosen to celebrate this moment.",
      "From now on, many of these ideas will begin to take shape. There will be decisions, possibilities, and new discoveries, but these pages will remain a reminder of what you want to care for along the way.",
      "We'll return to them whenever we need to recover the essence of your wedding and remember why you began to imagine it this way.",
      "Thank you for sharing such a personal part of your story, and for letting us accompany you as you begin to write this new chapter.",
    ],
    despedida: "With love,",
  },
  fraseFinal:
    "Every great story begins with a blank page. Thank you for letting us write this first chapter alongside you.",
  capitulos: CAPITULOS_EN,
  totalCampos: TOTAL_CAMPOS,
};
