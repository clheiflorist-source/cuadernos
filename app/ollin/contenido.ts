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
