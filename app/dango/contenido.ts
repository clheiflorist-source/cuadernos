/**
 * EL PRIMER CAPÍTULO · Cuaderno de Descubrimiento · DÁNGO (Destination Wedding Planner)
 *
 * Contenido transcrito ÍNTEGRO del documento maestro aprobado
 * `El_Primer_Capitulo_DANGO_Clhei_Maestro_v1.md`.
 *
 * Regla editorial (doc maestro §0, §3 y §22): las preguntas, frases, introducciones
 * y cartas NO se reescriben, resumen, fusionan ni "mejoran" sin autorización de
 * Tania. Se respeta el orden narrativo y los espacios de respuesta. El diseño es
 * el mismo de los cuadernos Yolotzin, OLLIN y PAHTIĀ; solo cambian el servicio y
 * las preguntas.
 *
 * DÁNGO es el servicio de bodas destino: la pareja apenas comienza el camino.
 * Este Libro 1 NO pide vuelos, hospedaje, traslados, itinerarios, proveedores,
 * rooming list ni logística (todo eso vive en el futuro Libro 2 · Cuaderno de
 * Planeación de Destino). Su propósito es comprender por qué eligieron celebrar
 * lejos de casa antes de la parte técnica. La pareja sigue siendo el centro; el
 * destino funciona como parte de su historia (§3.9).
 *
 * A diferencia de OLLIN y PAHTIĀ, este maestro no incluye ejercicios de completar
 * frase (§3.7): todos los campos son preguntas.
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
  servicio: "DÁNGO · Destination Wedding Planner",
  marca: "Clhei Floral Styling & Events",
  firma: "Tania Castorena",
  slug: "dango",
  etiqueta: "DÁNGO",
};

export const INSTRUCCIONES: Instrucciones = {
  titulo: "Antes de comenzar",
  parrafos: [
    "Este cuaderno está pensado para responderse juntos.",
    "No necesitan terminarlo en un solo momento ni encontrar respuestas perfectas. Pueden detenerse, platicar, recordar los lugares que han recorrido e imaginar con calma todo aquello que desean vivir.",
    "Respóndanlo juntos. Hagan pausas, cuéntense historias y disfruten esta oportunidad de mirar su boda más allá de vuelos, hospedaje y pendientes.",
  ],
  notaDigital:
    "Sus respuestas se guardan solas mientras escriben — arriba aparecerá un pequeño «Guardado» cada vez que suceda. Pueden cerrar esta página y volver cuando quieran: el cuaderno los estará esperando donde lo dejaron. Solo tengan en cuenta que vive en este navegador; si lo comienzan en la computadora, continúenlo ahí.",
};

export const CARTA_BIENVENIDA: CartaBienvenida = {
  parrafos: [
    "Si este cuaderno llegó a ustedes, significa que estamos por comenzar un camino muy especial.",
    "Elegir una boda destino transforma la celebración en algo que va mucho más allá de un solo día. Significa encontrar un lugar capaz de guardar una parte de su historia, invitar a las personas que aman a recorrer el camino con ustedes y construir una experiencia que comienza mucho antes de la ceremonia.",
    "Antes de hablar de hospedaje, traslados, proveedores o itinerarios, queremos detenernos a conocer aquello que dio origen a esta decisión.",
    "Queremos descubrir por qué eligieron celebrar lejos de casa, qué encontraron en este destino, qué momentos desean compartir y cómo imaginan sentirse cuando finalmente lleguen al lugar donde todo sucederá.",
    "Estas páginas nos permitirán mirar el proyecto desde sus ojos y comprender no solo cómo desean que se vea su boda, sino qué quieren que represente para ustedes y para las personas que harán el viaje a su lado.",
    "Respóndanlas juntos. Hagan pausas, cuéntense historias, recuerden los lugares que han recorrido y disfruten esta oportunidad de imaginar todo aquello que está por comenzar.",
    "Volveremos a estas páginas durante la planeación siempre que necesitemos recordar qué debe permanecer en el centro de cada decisión, incluso cuando el proyecto comience a crecer entre destinos, experiencias y detalles.",
    "Gracias por confiar en nosotros para acompañarlos en este camino, recibir a las personas que aman y transformar un lugar elegido en una celebración profundamente suya.",
  ],
  despedida: "Con cariño,",
};

export const CARTA_CIERRE: CartaCierre = {
  titulo: "Todo está por comenzar",
  parrafos: [
    "Si llegaron hasta aquí, significa que estamos listos para comenzar a construir juntos esta experiencia.",
    "Estas páginas nos permitieron conocer la historia detrás del destino que eligieron, las personas que desean reunir y la manera en la que imaginan vivir cada uno de estos días.",
    "A partir de ahora, esas intenciones serán nuestra guía.",
    "Comenzaremos a transformar sus ideas en lugares, encuentros y momentos que se sientan profundamente suyos, cuidando tanto la celebración como la experiencia de quienes recorrerán este camino para acompañarlos.",
    "Habrá tiempo para hablar de hospedaje, recorridos, proveedores y todos los detalles necesarios. Nosotros estaremos a su lado para darles claridad, acompañar cada decisión y permitir que, cuando lleguen al destino, puedan dejar atrás la planeación y comenzar simplemente a vivirlo.",
    "Gracias por confiarnos una parte tan importante de su historia.",
    "Nos emociona todo lo que estamos por descubrir y construir junto a ustedes.",
    "El camino comienza aquí.",
  ],
  despedida: "Con cariño,",
};

export const FRASE_FINAL =
  "Un destino se convierte en parte de una historia cuando comienza a guardar todo aquello que se vivió en él.";

export const CAPITULOS: Capitulo[] = [
  {
    num: 1,
    titulo: "Ustedes",
    frases: [
      "Antes de comenzar a imaginar el camino, queremos conocer a las personas que lo recorrerán juntas.",
    ],
    intro: [
      "Cada boda destino comienza con una decisión compartida, pero detrás de ella existe una historia, una manera de acompañarse y una forma muy particular de vivir los momentos importantes.",
      "Antes de descubrir cómo viajan y qué encontraron en el destino, queremos conocer aquello que los representa como pareja y comprender qué desean conservar durante toda esta experiencia.",
    ],
    paginas: [
      [
        {
          id: "c1p1",
          tipo: "pregunta",
          titulo:
            "Si tuvieran que describir su relación en tres palabras, ¿cuáles serían y por qué?",
          nota: [
            "No buscamos una definición perfecta. Elijan aquellas palabras en las que ambos puedan reconocerse y que expresen la manera en la que viven su relación.",
          ],
        },
        {
          id: "c1p2",
          tipo: "pregunta",
          titulo: "¿Qué sienten que los convierte en un buen equipo?",
          nota: [
            "Piensen en la forma en la que se acompañan, toman decisiones, encuentran equilibrio y enfrentan juntos las etapas importantes.",
          ],
        },
      ],
      [
        {
          id: "c1p3",
          tipo: "pregunta",
          titulo:
            "¿Qué pequeño momento cotidiano representa mejor quiénes son como pareja?",
          nota: [
            "Puede ser una rutina, una conversación, una actividad que disfrutan o algo sencillo que siempre los haga sentirse cerca.",
          ],
        },
        {
          id: "c1p4",
          tipo: "pregunta",
          titulo:
            "¿Qué es verdaderamente importante para ustedes cuando celebran un momento especial?",
          nota: [
            "Puede ser compartir con las personas que aman, tener tiempo para estar juntos, sentirse tranquilos, crear nuevas experiencias o conservar alguna tradición significativa.",
          ],
        },
      ],
      [
        {
          id: "c1p5",
          tipo: "pregunta",
          titulo:
            "¿Hay algo sobre ustedes que consideren importante que conozcamos para acompañarlos durante este camino?",
          nota: [
            "Puede ser una forma particular de comunicarse, algo que los haga sentir seguros o cualquier aspecto que nos ayude a comprender mejor cómo desean vivir el proceso.",
          ],
        },
      ],
    ],
  },
  {
    num: 2,
    titulo: "Ustedes y el Viaje",
    frases: [
      "Antes de imaginar el destino, queremos conocer la forma en la que ustedes recorren el mundo juntos.",
    ],
    intro: [
      "Cada pareja vive los viajes de una manera distinta. Algunas disfrutan descubrir sin planear demasiado; otras encuentran tranquilidad en saber qué ocurrirá en cada momento. Hay quienes recuerdan los lugares por su comida, por las personas que conocieron o por aquello que sintieron al estar lejos de casa.",
      "Antes de conocer todos los detalles de la boda, queremos descubrir cómo viven ustedes los nuevos lugares, qué experiencias disfrutan compartir y qué necesitan para sentirse acompañados durante este camino.",
    ],
    paginas: [
      [
        {
          id: "c2p1",
          tipo: "pregunta",
          titulo:
            "Cuando viajan juntos, ¿qué sienten que aparece de ustedes como pareja que no siempre se ve en la vida cotidiana?",
          nota: [
            "Puede ser una forma distinta de comunicarse, de cuidarse, de resolver o simplemente de disfrutar el tiempo juntos.",
          ],
        },
        {
          id: "c2p2",
          tipo: "pregunta",
          titulo:
            "¿Qué es lo que más disfrutan descubrir cuando llegan a un lugar nuevo?",
          nota: [
            "Puede ser la gastronomía, la cultura, la arquitectura, la naturaleza, las tradiciones, las personas o esos pequeños detalles que hacen que un destino se sienta especial.",
          ],
        },
      ],
      [
        {
          id: "c2p3",
          tipo: "pregunta",
          titulo:
            "¿Existe algún viaje o lugar que represente especialmente su historia como pareja?",
          nota: [
            "Cuéntennos qué ocurrió, qué recuerdan de ese momento y por qué ese lugar sigue ocupando un espacio importante para ustedes.",
          ],
        },
        {
          id: "c2p4",
          tipo: "pregunta",
          titulo:
            "Cuando un plan cambia durante un viaje, ¿cómo suele reaccionar cada uno?",
          nota: [
            "Quizá uno disfruta improvisar mientras el otro necesita comprender qué ocurrirá después. Conocer su manera de adaptarse nos ayudará a acompañarlos con mayor sensibilidad durante la planeación.",
          ],
        },
      ],
      [
        {
          id: "c2p5",
          tipo: "pregunta",
          titulo:
            "¿Qué hace que una experiencia compartida se vuelva verdaderamente memorable para ustedes?",
          nota: [
            "No tiene que ser algo extraordinario. Puede ser una conversación, una comida, un paisaje, una sorpresa o la sensación de estar completamente presentes.",
          ],
        },
        {
          id: "c2p6",
          tipo: "pregunta",
          titulo:
            "Si pudieran describir el tipo de viaje que más se parece a ustedes, ¿cómo sería?",
          nota: [
            "Puede ser tranquilo, espontáneo, lleno de experiencias, cuidadosamente planeado o una combinación de distintas formas de viajar. Piensen en aquello que ambos necesitan para disfrutar realmente de un lugar.",
          ],
        },
      ],
    ],
  },
  {
    num: 3,
    titulo: "El Destino que Eligieron",
    frases: [
      "Hay lugares que se visitan y otros que, desde el primer momento, parecen estar esperando una historia.",
    ],
    intro: [
      "Elegir el lugar donde celebrarán su boda también significa elegir el paisaje, la cultura y la atmósfera que acompañarán uno de los momentos más importantes de su vida juntos.",
      "Antes de pensar en cómo se organizará la experiencia, queremos conocer qué encontraron en este destino, por qué se sintió correcto para ustedes y qué parte de su esencia desean conservar durante la celebración.",
    ],
    paginas: [
      [
        {
          id: "c3p1",
          tipo: "pregunta",
          titulo:
            "¿Qué los llevó a elegir este destino para celebrar su boda?",
          nota: [
            "Puede haber sido un recuerdo, una sensación, la cercanía con su historia, una recomendación o simplemente la certeza de que ese era el lugar donde querían estar.",
          ],
        },
        {
          id: "c3p2",
          tipo: "pregunta",
          titulo:
            "¿Qué sintieron la primera vez que estuvieron ahí o cuando comenzaron a imaginar su boda en este lugar?",
          nota: [
            "Piensen en la primera imagen, emoción o conversación que hizo que el destino comenzara a sentirse parte de su celebración.",
          ],
        },
      ],
      [
        {
          id: "c3p3",
          tipo: "pregunta",
          titulo:
            "¿Qué aspecto del destino sienten que conecta especialmente con ustedes como pareja?",
          nota: [
            "Puede ser su ritmo, su cultura, su arquitectura, su naturaleza, su gastronomía, su historia o la manera en la que se sienten cuando están ahí.",
          ],
        },
        {
          id: "c3p4",
          tipo: "pregunta",
          titulo:
            "¿Hay algo propio del lugar que deseen conocer, vivir o disfrutar juntos durante esos días?",
          nota: [
            "No tiene que formar parte del itinerario de todos. Puede ser una experiencia sencilla que quieran reservar para ustedes dentro del viaje.",
          ],
        },
      ],
      [
        {
          id: "c3p5",
          tipo: "pregunta",
          titulo:
            "¿Qué parte de la esencia del destino les gustaría que estuviera presente en la celebración?",
          nota: [
            "Puede expresarse a través de la gastronomía, los materiales, la música, las tradiciones, el paisaje o pequeños detalles que hagan que la boda pertenezca verdaderamente al lugar.",
          ],
        },
        {
          id: "c3p6",
          tipo: "pregunta",
          titulo:
            "Cuando recuerden su boda dentro de algunos años, ¿qué les gustaría que este destino representara dentro de su historia?",
          nota: [
            "Más allá del lugar donde ocurrió la celebración, piensen en el significado que desean conservar y en aquello que esperan volver a sentir cuando regresen o hablen de él.",
          ],
        },
      ],
    ],
  },
  {
    num: 4,
    titulo: "La Celebración que Imaginan",
    frases: [
      "El destino crea el escenario, pero son ustedes quienes le dan sentido a todo lo que sucederá dentro de él.",
    ],
    intro: [
      "Después de elegir el lugar, comienza a tomar forma la manera en la que desean vivir la celebración.",
      "Más allá de los elementos visibles, queremos comprender qué energía imaginan, qué momentos esperan con mayor ilusión y qué tendría que permanecer presente para que la boda se sienta profundamente suya.",
    ],
    paginas: [
      [
        {
          id: "c4p1",
          tipo: "pregunta",
          titulo:
            "Cuando imaginan su boda en este destino, ¿cuál es la primera escena que aparece en su mente?",
          nota: [
            "Puede ser el momento en que se vean por primera vez, el inicio de la ceremonia, una mesa compartida, una pista llena o un instante sencillo que hayan imaginado muchas veces.",
          ],
        },
        {
          id: "c4p2",
          tipo: "pregunta",
          titulo: "¿Qué atmósfera desean que acompañe la celebración?",
          nota: [
            "Puede sentirse íntima, relajada, vibrante, solemne, espontánea o como una combinación de distintas emociones a lo largo del día.",
          ],
        },
      ],
      [
        {
          id: "c4p3",
          tipo: "pregunta",
          titulo: "¿Qué momento esperan vivir con mayor ilusión?",
          nota: [
            "Piensen en aquello que desean experimentar como pareja, sin considerar todavía las expectativas de los demás ni la forma en la que tendrá que organizarse.",
          ],
        },
        {
          id: "c4p4",
          tipo: "pregunta",
          titulo:
            "¿Hay algún momento que deseen vivir con especial calma, sin sentir que deben continuar inmediatamente con lo que sigue?",
          nota: [
            "Puede ser durante los preparativos, después de la ceremonia, al sentarse a cenar o en algún instante que quieran conservar únicamente para ustedes.",
          ],
        },
      ],
      [
        {
          id: "c4p5",
          tipo: "pregunta",
          titulo:
            "¿Existe alguna tradición, gesto o ritual que tenga un significado especial dentro de su historia?",
          nota: [
            "Puede provenir de su familia, su cultura, el destino o de algo que hayan creado juntos y que deseen integrar a la celebración.",
          ],
        },
      ],
    ],
  },
  {
    num: 5,
    titulo: "Las Personas que Harán el Viaje",
    frases: [
      "Cuando alguien decide recorrer una distancia para acompañarlos, su presencia adquiere un significado especial.",
    ],
    intro: [
      "Una boda destino reúne a personas que quizá viven en ciudades, estados o países distintos. Algunas forman parte de su vida cotidiana; otras representan etapas, historias y vínculos que no siempre tienen la oportunidad de encontrarse en un mismo lugar.",
      "Antes de pensar en habitaciones, traslados o itinerarios, queremos conocer quiénes harán este camino con ustedes y qué significa reunirlos alrededor de su celebración.",
    ],
    paginas: [
      [
        {
          id: "c5p1",
          tipo: "pregunta",
          titulo:
            "¿Quiénes son esas personas cuya presencia hará que el viaje se sienta completo?",
          nota: [
            "Puede tratarse de familiares, amistades o personas que han acompañado su historia. Cuéntennos quiénes son y qué representa para ustedes saber que estarán ahí.",
          ],
        },
        {
          id: "c5p2",
          tipo: "pregunta",
          titulo:
            "¿Hay alguien que esté realizando un esfuerzo especialmente importante para poder acompañarlos?",
          nota: [
            "Puede ser por la distancia, el tiempo, la organización familiar o cualquier circunstancia personal. Nos gustaría comprender qué significa para ustedes que esa persona forme parte de la celebración.",
          ],
        },
      ],
      [
        {
          id: "c5p3",
          tipo: "pregunta",
          titulo:
            "¿Este viaje hará posible algún reencuentro que tenga un significado especial?",
          nota: [
            "Quizá reunirá a personas que no se ven con frecuencia, familias que viven lejos o amistades que han compartido distintas etapas de su vida.",
          ],
        },
        {
          id: "c5p4",
          tipo: "pregunta",
          titulo:
            "¿Hay alguna persona con quien esperen compartir un momento especialmente significativo durante esos días?",
          nota: [
            "Puede ser una conversación, un abrazo, una comida, una fotografía, un baile o simplemente un momento de calma que deseen recordar.",
          ],
        },
      ],
      [
        {
          id: "c5p5",
          tipo: "pregunta",
          titulo:
            "En toda familia existen historias y relaciones distintas. ¿Hay alguna dinámica que consideren importante que conozcamos para acompañarlos con mayor sensibilidad?",
          nota: [
            "No necesitan compartir más de lo que les resulte cómodo. Queremos conocer únicamente aquello que pueda ayudarnos a cuidar su tranquilidad y evitar situaciones incómodas durante la experiencia.",
          ],
        },
      ],
      [
        {
          id: "c5p6",
          tipo: "pregunta",
          titulo:
            "¿Hay alguna persona que no podrá estar presente físicamente, pero que deseen recordar o sentir cerca durante la celebración?",
          nota: [
            "Puede ser una persona, una mascota o alguien que haya dejado una huella importante en sus vidas. Cuéntennos qué lugar les gustaría darle dentro de esos días.",
          ],
        },
      ],
      [
        {
          id: "c5p7",
          tipo: "pregunta",
          titulo:
            "¿Qué significa para ustedes reunir en este destino a todas las personas que aman?",
          nota: [
            "Piensen en lo que representa ver juntas a sus familias, amistades y personas importantes, compartiendo un mismo lugar y formando parte de este momento de su historia.",
          ],
        },
      ],
    ],
  },
  {
    num: 6,
    titulo: "La Experiencia que Desean Compartir",
    frases: [
      "Invitar a alguien a una boda destino también es invitarlo a descubrir un lugar desde la historia de quienes lo eligieron.",
    ],
    intro: [
      "Las personas que los acompañen no vivirán únicamente una ceremonia. Desde su llegada comenzarán a formar parte de una experiencia construida alrededor del destino, los encuentros y el tiempo compartido.",
      "Antes de decidir qué actividades formarán parte de esos días, queremos comprender cómo desean recibirlas, qué emociones quieren provocar y qué les gustaría que cada persona pudiera llevarse de este viaje.",
    ],
    paginas: [
      [
        {
          id: "c6p1",
          tipo: "pregunta",
          titulo:
            "Cuando sus invitados lleguen al destino, ¿cómo les gustaría que se sintieran?",
          nota: [
            "Puede ser recibidos, cuidados, emocionados, curiosos, relajados o con la sensación de que están comenzando a formar parte de algo especial.",
          ],
        },
        {
          id: "c6p2",
          tipo: "pregunta",
          titulo:
            "¿Qué parte del destino les gustaría especialmente que las personas que los acompañen pudieran descubrir?",
          nota: [
            "Puede ser su gastronomía, su historia, sus paisajes, su arquitectura, sus tradiciones o alguna experiencia que permita comprender por qué eligieron celebrar ahí.",
          ],
        },
      ],
      [
        {
          id: "c6p3",
          tipo: "pregunta",
          titulo:
            "¿Cómo imaginan el ritmo de los días que compartirán con sus invitados?",
          nota: [
            "Quizá desean una experiencia llena de encuentros y actividades, una agenda más relajada con tiempo libre o un equilibrio entre momentos compartidos y espacios para que cada persona descubra el destino a su manera.",
          ],
        },
        {
          id: "c6p4",
          tipo: "pregunta",
          titulo:
            "¿Hay algún momento de bienvenida o convivencia que consideren especialmente importante?",
          nota: [
            "Puede ser una comida, un brindis, una reunión informal o simplemente la oportunidad de encontrarse con calma antes de la boda.",
          ],
        },
      ],
      [
        {
          id: "c6p5",
          tipo: "pregunta",
          titulo:
            "¿Cómo les gustaría acompañar a sus invitados sin sentir que tienen que estar pendientes de cada momento de su viaje?",
          nota: [
            "Piensen en el equilibrio que desean encontrar entre recibirlos con cercanía y permitirse también vivir su propia experiencia como pareja.",
          ],
        },
        {
          id: "c6p6",
          tipo: "pregunta",
          titulo:
            "Cuando sus invitados regresen a casa, ¿qué les gustaría que recordaran de estos días?",
          nota: [
            "Más allá de la boda, piensen en las emociones, encuentros, sabores, lugares o historias que desearían que permanecieran en su memoria.",
          ],
        },
      ],
    ],
  },
  {
    num: 7,
    titulo: "Lo Esencial Lejos de Casa",
    frases: [
      "Cuando una celebración ocurre lejos de casa, tener claridad sobre lo verdaderamente importante permite adaptarse sin perder aquello que le da sentido.",
    ],
    intro: [
      "Una boda destino reúne emociones, personas, lugares y decisiones que deben convivir dentro de una misma experiencia.",
      "Durante la planeación habrá elementos que podrán ajustarse de manera natural y otros que necesitarán permanecer en el centro para que, aun entre distancias y cambios, la celebración siga sintiéndose profundamente suya.",
      "Antes de entrar en la parte operativa, queremos reconocer qué debemos proteger y qué les permitirá sentirse cerca de casa, incluso estando lejos de ella.",
    ],
    paginas: [
      [
        {
          id: "c7p1",
          tipo: "pregunta",
          titulo:
            "Si durante estos días pudiéramos proteger una sola cosa por encima de todo, ¿cuál sería?",
          nota: [
            "Puede ser su tranquilidad, el tiempo juntos, la ceremonia, la convivencia con sus personas importantes o cualquier intención que para ustedes represente el corazón de la experiencia.",
          ],
        },
        {
          id: "c7p2",
          tipo: "pregunta",
          titulo:
            "Cuando la celebración termine, ¿qué tendría que haber sucedido para que ambos sientan que la boda realmente habló de ustedes?",
          nota: [
            "No piensen en que todo haya ocurrido exactamente como estaba planeado. Piensen en las emociones, momentos y decisiones que les permitirían reconocerse completamente en lo vivido.",
          ],
        },
      ],
      [
        {
          id: "c7p3",
          tipo: "pregunta",
          titulo:
            "¿Qué no quisieran que la distancia, los traslados o el ritmo del viaje les impidieran disfrutar?",
          nota: [
            "Puede ser compartir una comida, recorrer el destino, convivir con ciertas personas, tener tiempo a solas o detenerse para asimilar todo lo que está sucediendo.",
          ],
        },
        {
          id: "c7p4",
          tipo: "pregunta",
          titulo:
            "Si durante la planeación fuera necesario adaptar algún elemento por el clima, la disponibilidad o las características del destino, ¿en qué aspectos sentirían que pueden ser más flexibles?",
          nota: [
            "No buscamos anticipar problemas, sino comprender qué elementos podrían transformarse sin alterar la esencia de la experiencia.",
          ],
        },
      ],
      [
        {
          id: "c7p5",
          tipo: "pregunta",
          titulo:
            "¿Qué tendría que sentirse cercano o familiar para ustedes, aun estando lejos de casa?",
          nota: [
            "Puede ser una tradición, una persona, un sabor, una canción, una rutina o cualquier detalle que les haga sentir acompañados y conectados con su historia.",
          ],
        },
      ],
    ],
  },
  {
    num: 8,
    titulo: "Estar Presentes",
    frases: [
      "Después de imaginar, organizar y recorrer tanto camino, llegará el momento de dejar de sostener la experiencia y comenzar simplemente a vivirla.",
    ],
    intro: [
      "En una boda destino, la celebración comienza desde que llegan al lugar que eligieron. Habrá encuentros, emociones y momentos compartidos antes y después de la ceremonia.",
      "Después de tantos meses tomando decisiones, queremos comprender qué necesitan para dejar atrás la planeación, mantenerse conectados y permitirse vivir estos días plenamente como pareja.",
    ],
    paginas: [
      [
        {
          id: "c8p1",
          tipo: "pregunta",
          titulo:
            "¿Qué les gustaría permitirse dejar de hacer desde el momento en que lleguen al destino?",
          nota: [
            "Puede ser revisar el teléfono constantemente, confirmar pendientes, supervisar decisiones, responder todas las preguntas o sentirse responsables de que cada persona esté disfrutando.",
          ],
        },
        {
          id: "c8p2",
          tipo: "pregunta",
          titulo:
            "¿Qué pequeño momento o gesto les ayudaría a reconocer que la planeación terminó y que la experiencia finalmente comenzó?",
          nota: [
            "Puede ser llegar a su habitación, brindar juntos, recorrer el lugar, compartir una comida a solas o detenerse unos minutos antes de encontrarse con sus invitados.",
          ],
        },
      ],
      [
        {
          id: "c8p3",
          tipo: "pregunta",
          titulo:
            "Durante estos días, ¿qué necesitan el uno del otro para mantenerse conectados entre el viaje, la celebración y las personas que los acompañarán?",
          nota: [
            "Puede ser tiempo a solas, comunicación, paciencia, confianza, pausas o recordar juntos por qué eligieron vivir esta experiencia.",
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
      "Before we begin to imagine the road ahead, we want to know the two people who will walk it together.",
    ],
    intro: [
      "Every destination wedding begins with a shared decision, but behind it there is a story, a way of caring for each other, and a very particular way of living the important moments.",
      "Before discovering how you travel and what you found in the destination, we want to know what defines you as a couple and understand what you wish to hold on to throughout this experience.",
    ],
    paginas: [
      [
        {
          id: "c1p1",
          tipo: "pregunta",
          titulo:
            "If you had to describe your relationship in three words, which would they be — and why?",
          nota: [
            "We're not looking for a perfect definition. Choose words you both recognize yourselves in, words that express the way you live your relationship.",
          ],
        },
        {
          id: "c1p2",
          tipo: "pregunta",
          titulo: "What do you feel makes you a good team?",
          nota: [
            "Think about the way you accompany each other, make decisions, find balance, and face the important seasons of life together.",
          ],
        },
      ],
      [
        {
          id: "c1p3",
          tipo: "pregunta",
          titulo:
            "What small, everyday moment best captures who you are as a couple?",
          nota: [
            "It can be a routine, a conversation, an activity you enjoy, or something simple that always makes you feel close.",
          ],
        },
        {
          id: "c1p4",
          tipo: "pregunta",
          titulo:
            "What is truly important to you when you celebrate a special moment?",
          nota: [
            "It might be sharing it with the people you love, having time to be together, feeling at ease, creating new experiences, or keeping a meaningful tradition alive.",
          ],
        },
      ],
      [
        {
          id: "c1p5",
          tipo: "pregunta",
          titulo:
            "Is there anything about you we should know to accompany you well along this journey?",
          nota: [
            "It could be a particular way of communicating, something that makes you feel safe, or anything that helps us better understand how you want to live this process.",
          ],
        },
      ],
    ],
  },
  {
    num: 2,
    titulo: "The Way You Travel",
    frases: [
      "Before imagining the destination, we want to know how the two of you move through the world together.",
    ],
    intro: [
      "Every couple travels differently. Some enjoy discovering without much of a plan; others find peace in knowing what each moment will bring. Some remember places for their food, for the people they met, or for what they felt being far from home.",
      "Before getting into the details of the wedding, we want to discover how you experience new places, which experiences you enjoy sharing, and what you need in order to feel accompanied along the way.",
    ],
    paginas: [
      [
        {
          id: "c2p1",
          tipo: "pregunta",
          titulo:
            "When you travel together, what comes out in you as a couple that isn't always visible in everyday life?",
          nota: [
            "It might be a different way of communicating, of caring for each other, of solving things — or simply of enjoying your time together.",
          ],
        },
        {
          id: "c2p2",
          tipo: "pregunta",
          titulo:
            "What do you most enjoy discovering when you arrive somewhere new?",
          nota: [
            "It could be the food, the culture, the architecture, the nature, the traditions, the people, or those small details that make a place feel special.",
          ],
        },
      ],
      [
        {
          id: "c2p3",
          tipo: "pregunta",
          titulo:
            "Is there a trip or a place that especially represents your story as a couple?",
          nota: [
            "Tell us what happened, what you remember about that moment, and why that place still holds an important space for you.",
          ],
        },
        {
          id: "c2p4",
          tipo: "pregunta",
          titulo:
            "When plans change in the middle of a trip, how does each of you tend to react?",
          nota: [
            "Perhaps one of you enjoys improvising while the other needs to understand what comes next. Knowing how you adapt will help us accompany you with greater sensitivity throughout the planning.",
          ],
        },
      ],
      [
        {
          id: "c2p5",
          tipo: "pregunta",
          titulo:
            "What makes a shared experience truly memorable for you?",
          nota: [
            "It doesn't have to be extraordinary. It can be a conversation, a meal, a landscape, a surprise, or the feeling of being fully present.",
          ],
        },
        {
          id: "c2p6",
          tipo: "pregunta",
          titulo:
            "If you could describe the kind of trip that feels most like you, what would it be?",
          nota: [
            "It might be calm, spontaneous, full of experiences, carefully planned, or a blend of different ways of traveling. Think about what you both need to truly enjoy a place.",
          ],
        },
      ],
    ],
  },
  {
    num: 3,
    titulo: "The Destination You Chose",
    frases: [
      "Some places are simply visited; others seem, from the very first moment, to be waiting for a story.",
    ],
    intro: [
      "Choosing the place where you will celebrate your wedding also means choosing the landscape, the culture, and the atmosphere that will accompany one of the most important moments of your life together.",
      "Before thinking about how the experience will be organized, we want to know what you found in this destination, why it felt right for you, and which part of its essence you wish to preserve throughout the celebration.",
    ],
    paginas: [
      [
        {
          id: "c3p1",
          tipo: "pregunta",
          titulo:
            "What led you to choose this destination for your wedding?",
          nota: [
            "It may have been a memory, a feeling, a closeness to your story, a recommendation — or simply the certainty that this was where you wanted to be.",
          ],
        },
        {
          id: "c3p2",
          tipo: "pregunta",
          titulo:
            "What did you feel the first time you were there, or when you first began to imagine your wedding in this place?",
          nota: [
            "Think of the first image, emotion, or conversation that made the destination begin to feel like part of your celebration.",
          ],
        },
      ],
      [
        {
          id: "c3p3",
          tipo: "pregunta",
          titulo:
            "Which aspect of the destination feels especially connected to who you are as a couple?",
          nota: [
            "It could be its rhythm, its culture, its architecture, its nature, its cuisine, its history, or the way you feel when you're there.",
          ],
        },
        {
          id: "c3p4",
          tipo: "pregunta",
          titulo:
            "Is there something of the place itself you'd like to see, do, or enjoy together during those days?",
          nota: [
            "It doesn't have to be part of everyone's itinerary. It can be a simple experience you'd like to keep just for the two of you within the trip.",
          ],
        },
      ],
      [
        {
          id: "c3p5",
          tipo: "pregunta",
          titulo:
            "Which part of the destination's essence would you like to be present in the celebration?",
          nota: [
            "It can come through in the food, the materials, the music, the traditions, the landscape, or small details that make the wedding truly belong to the place.",
          ],
        },
        {
          id: "c3p6",
          tipo: "pregunta",
          titulo:
            "Years from now, when you look back on your wedding, what would you like this destination to represent within your story?",
          nota: [
            "Beyond being the place where the celebration happened, think of the meaning you want to keep — and what you hope to feel again whenever you return or speak of it.",
          ],
        },
      ],
    ],
  },
  {
    num: 4,
    titulo: "The Celebration You Imagine",
    frases: [
      "The destination sets the stage, but it is the two of you who give meaning to everything that will happen within it.",
    ],
    intro: [
      "Once the place is chosen, the way you want to live the celebration begins to take shape.",
      "Beyond the visible elements, we want to understand the energy you imagine, the moments you await with the most excitement, and what would need to remain present for the wedding to feel deeply yours.",
    ],
    paginas: [
      [
        {
          id: "c4p1",
          tipo: "pregunta",
          titulo:
            "When you imagine your wedding in this destination, what is the first scene that comes to mind?",
          nota: [
            "It might be the moment you see each other for the first time, the beginning of the ceremony, a shared table, a full dance floor, or a simple instant you've pictured many times.",
          ],
        },
        {
          id: "c4p2",
          tipo: "pregunta",
          titulo: "What atmosphere do you want to surround the celebration?",
          nota: [
            "It can feel intimate, relaxed, vibrant, solemn, spontaneous — or a combination of different emotions throughout the day.",
          ],
        },
      ],
      [
        {
          id: "c4p3",
          tipo: "pregunta",
          titulo: "Which moment are you most looking forward to?",
          nota: [
            "Think of what you want to experience as a couple, without yet considering anyone else's expectations or how it will need to be organized.",
          ],
        },
        {
          id: "c4p4",
          tipo: "pregunta",
          titulo:
            "Is there a moment you'd like to live with particular calm, without feeling you must move straight on to whatever comes next?",
          nota: [
            "It could be while getting ready, right after the ceremony, sitting down to dinner, or an instant you'd like to keep just for yourselves.",
          ],
        },
      ],
      [
        {
          id: "c4p5",
          tipo: "pregunta",
          titulo:
            "Is there a tradition, gesture, or ritual that holds special meaning in your story?",
          nota: [
            "It may come from your family, your culture, the destination, or something you created together that you'd like to weave into the celebration.",
          ],
        },
      ],
    ],
  },
  {
    num: 5,
    titulo: "The People Making the Trip",
    frases: [
      "When someone chooses to cross a distance to be with you, their presence takes on a special meaning.",
    ],
    intro: [
      "A destination wedding gathers people who may live in different cities, states, or countries. Some are part of your daily life; others represent chapters, stories, and bonds that don't often get the chance to meet in one place.",
      "Before thinking about rooms, transfers, or itineraries, we want to know who will make this journey with you and what it means to gather them around your celebration.",
    ],
    paginas: [
      [
        {
          id: "c5p1",
          tipo: "pregunta",
          titulo:
            "Who are the people whose presence will make the trip feel complete?",
          nota: [
            "They may be family, friends, or people who have accompanied your story. Tell us who they are and what it means to you to know they'll be there.",
          ],
        },
        {
          id: "c5p2",
          tipo: "pregunta",
          titulo:
            "Is there someone making an especially significant effort to be with you?",
          nota: [
            "It might be because of distance, time, family logistics, or personal circumstances. We'd love to understand what it means to you that this person will be part of the celebration.",
          ],
        },
      ],
      [
        {
          id: "c5p3",
          tipo: "pregunta",
          titulo:
            "Will this trip make possible a reunion that holds special meaning?",
          nota: [
            "Perhaps it will bring together people who rarely see each other, families who live far apart, or friends who have shared different chapters of your life.",
          ],
        },
        {
          id: "c5p4",
          tipo: "pregunta",
          titulo:
            "Is there someone with whom you hope to share an especially meaningful moment during those days?",
          nota: [
            "It can be a conversation, an embrace, a meal, a photograph, a dance, or simply a quiet moment you want to remember.",
          ],
        },
      ],
      [
        {
          id: "c5p5",
          tipo: "pregunta",
          titulo:
            "Every family has its own stories and relationships. Is there a dynamic we should know about, so we can accompany you with greater sensitivity?",
          nota: [
            "You don't need to share more than you're comfortable with. We only want to know what can help us protect your peace of mind and avoid uncomfortable situations during the experience.",
          ],
        },
      ],
      [
        {
          id: "c5p6",
          tipo: "pregunta",
          titulo:
            "Is there someone who won't be able to be there in person, but whom you'd like to remember or feel close during the celebration?",
          nota: [
            "It may be a person, a pet, or someone who left an important mark on your lives. Tell us what place you'd like to give them within those days.",
          ],
        },
      ],
      [
        {
          id: "c5p7",
          tipo: "pregunta",
          titulo:
            "What does it mean to you to gather everyone you love in this destination?",
          nota: [
            "Think of what it represents to see your families, friends, and important people together, sharing one place and becoming part of this moment in your story.",
          ],
        },
      ],
    ],
  },
  {
    num: 6,
    titulo: "The Experience You Want to Share",
    frases: [
      "Inviting someone to a destination wedding is also inviting them to discover a place through the story of those who chose it.",
    ],
    intro: [
      "The people who join you won't only attend a ceremony. From the moment they arrive, they'll become part of an experience built around the destination, the gatherings, and the time you share.",
      "Before deciding which activities will fill those days, we want to understand how you wish to receive them, which emotions you want to spark, and what you'd like each person to carry home from this trip.",
    ],
    paginas: [
      [
        {
          id: "c6p1",
          tipo: "pregunta",
          titulo:
            "When your guests arrive at the destination, how would you like them to feel?",
          nota: [
            "Welcomed, cared for, excited, curious, relaxed — or with the sense that they're becoming part of something special.",
          ],
        },
        {
          id: "c6p2",
          tipo: "pregunta",
          titulo:
            "Which part of the destination would you especially love the people joining you to discover?",
          nota: [
            "Its food, its history, its landscapes, its architecture, its traditions, or an experience that helps them understand why you chose to celebrate there.",
          ],
        },
      ],
      [
        {
          id: "c6p3",
          tipo: "pregunta",
          titulo:
            "How do you imagine the rhythm of the days you'll share with your guests?",
          nota: [
            "Perhaps an experience full of gatherings and activities, a more relaxed schedule with free time, or a balance between shared moments and space for each person to discover the destination in their own way.",
          ],
        },
        {
          id: "c6p4",
          tipo: "pregunta",
          titulo:
            "Is there a moment of welcome or togetherness that feels especially important to you?",
          nota: [
            "It might be a meal, a toast, an informal gathering, or simply the chance to come together calmly before the wedding.",
          ],
        },
      ],
      [
        {
          id: "c6p5",
          tipo: "pregunta",
          titulo:
            "How would you like to be present for your guests without feeling you must watch over every moment of their trip?",
          nota: [
            "Think about the balance you want to find between receiving them warmly and allowing yourselves to live your own experience as a couple.",
          ],
        },
        {
          id: "c6p6",
          tipo: "pregunta",
          titulo:
            "When your guests return home, what would you like them to remember about these days?",
          nota: [
            "Beyond the wedding itself, think of the emotions, encounters, flavors, places, or stories you'd want to stay in their memory.",
          ],
        },
      ],
    ],
  },
  {
    num: 7,
    titulo: "What Matters Most, Far From Home",
    frases: [
      "When a celebration happens far from home, being clear about what truly matters lets you adapt without losing what gives it meaning.",
    ],
    intro: [
      "A destination wedding brings together emotions, people, places, and decisions that must coexist within a single experience.",
      "Throughout the planning, some elements will adjust naturally, while others will need to remain at the center so that — even across distances and changes — the celebration keeps feeling deeply yours.",
      "Before we enter the operational side, we want to recognize what we must protect, and what will help you feel close to home even while far from it.",
    ],
    paginas: [
      [
        {
          id: "c7p1",
          tipo: "pregunta",
          titulo:
            "If we could protect one single thing above all else during those days, what would it be?",
          nota: [
            "Your peace of mind, your time together, the ceremony, being with your important people — or any intention that, for you, represents the heart of the experience.",
          ],
        },
        {
          id: "c7p2",
          tipo: "pregunta",
          titulo:
            "When the celebration is over, what would need to have happened for you both to feel the wedding truly spoke of you?",
          nota: [
            "Don't think about everything going exactly as planned. Think of the emotions, moments, and decisions that would let you fully recognize yourselves in what you lived.",
          ],
        },
      ],
      [
        {
          id: "c7p3",
          tipo: "pregunta",
          titulo:
            "What would you not want distance, transfers, or the pace of the trip to keep you from enjoying?",
          nota: [
            "Sharing a meal, exploring the destination, spending time with certain people, having time alone, or pausing to take in everything that's happening.",
          ],
        },
        {
          id: "c7p4",
          tipo: "pregunta",
          titulo:
            "If some element needed to adapt during the planning — because of weather, availability, or the nature of the destination — where would you feel most flexible?",
          nota: [
            "We're not trying to anticipate problems, but to understand which elements could change without altering the essence of the experience.",
          ],
        },
      ],
      [
        {
          id: "c7p5",
          tipo: "pregunta",
          titulo:
            "What would need to feel close or familiar to you, even far from home?",
          nota: [
            "A tradition, a person, a flavor, a song, a routine — any detail that makes you feel accompanied and connected to your story.",
          ],
        },
      ],
    ],
  },
  {
    num: 8,
    titulo: "Being Present",
    frases: [
      "After imagining, organizing, and walking such a long road, the moment will come to stop holding the experience — and simply begin to live it.",
    ],
    intro: [
      "In a destination wedding, the celebration begins the moment you arrive at the place you chose. There will be encounters, emotions, and shared moments before and after the ceremony.",
      "After so many months of making decisions, we want to understand what you need to leave the planning behind, stay connected, and allow yourselves to live these days fully as a couple.",
    ],
    paginas: [
      [
        {
          id: "c8p1",
          tipo: "pregunta",
          titulo:
            "What would you like to give yourselves permission to stop doing from the moment you arrive at the destination?",
          nota: [
            "Constantly checking your phone, confirming pending details, supervising decisions, answering every question, or feeling responsible for whether each person is enjoying themselves.",
          ],
        },
        {
          id: "c8p2",
          tipo: "pregunta",
          titulo:
            "What small moment or gesture would help you recognize that the planning is over and the experience has finally begun?",
          nota: [
            "Arriving at your room, a toast together, walking the grounds, sharing a meal alone, or pausing for a few minutes before meeting your guests.",
          ],
        },
      ],
      [
        {
          id: "c8p3",
          tipo: "pregunta",
          titulo:
            "During these days, what do you need from each other to stay connected amid the trip, the celebration, and the people around you?",
          nota: [
            "Time alone, communication, patience, trust, pauses — or simply remembering together why you chose to live this experience.",
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
    servicio: "DÁNGO · Destination Wedding Planner",
    marca: "Clhei Floral Styling & Events",
    firma: "Tania Castorena",
    slug: "dango",
    etiqueta: "DÁNGO",
  },
  instrucciones: {
    titulo: "Before you begin",
    parrafos: [
      "This notebook is meant to be answered together.",
      "You don't need to finish it in one sitting or find perfect answers. You can pause, talk, revisit the places you've traveled together, and calmly imagine everything you hope to live.",
      "Answer it together. Take breaks, tell each other stories, and enjoy this chance to look at your wedding beyond flights, lodging, and to-dos.",
    ],
    notaDigital:
      "Your answers save themselves as you write — a small “Saved” will appear above each time it happens. You can close this page and come back whenever you like: the notebook will be waiting right where you left it. Just keep in mind it lives in this browser; if you begin on the computer, continue there.",
  },
  cartaBienvenida: {
    parrafos: [
      "If this notebook has reached you, it means we are about to begin a very special journey together.",
      "Choosing a destination wedding turns the celebration into something that goes far beyond a single day. It means finding a place capable of holding a part of your story, inviting the people you love to walk this road with you, and building an experience that begins long before the ceremony.",
      "Before we talk about lodging, transportation, vendors, or itineraries, we want to pause and get to know what gave rise to this decision.",
      "We want to discover why you chose to celebrate far from home, what you found in this destination, which moments you hope to share, and how you imagine feeling when you finally arrive at the place where it will all happen.",
      "These pages will let us see the project through your eyes and understand not only how you want your wedding to look, but what you want it to mean — for you and for the people who will make the trip by your side.",
      "Answer them together. Take breaks, tell each other stories, remember the places you've traveled, and enjoy this chance to imagine everything that is about to begin.",
      "We will return to these pages throughout the planning whenever we need to remember what must remain at the heart of every decision, even as the project begins to grow among destinations, experiences, and details.",
      "Thank you for trusting us to walk this path with you, to welcome the people you love, and to turn a chosen place into a celebration that is deeply yours.",
    ],
    despedida: "With love,",
  },
  cartaCierre: {
    titulo: "Everything Is About to Begin",
    parrafos: [
      "If you've made it here, it means we're ready to begin building this experience together.",
      "These pages allowed us to know the story behind the destination you chose, the people you wish to gather, and the way you imagine living each of these days.",
      "From now on, those intentions will be our guide.",
      "We will begin turning your ideas into places, gatherings, and moments that feel deeply yours — caring for the celebration and for the experience of everyone who will travel this road to be with you.",
      "There will be time to talk about lodging, outings, vendors, and every necessary detail. We will be at your side to bring clarity, to accompany every decision, and to make sure that when you arrive at the destination, you can leave the planning behind and simply begin to live it.",
      "Thank you for entrusting us with such an important part of your story.",
      "We're excited about everything we're about to discover and build together with you.",
      "The journey begins here.",
    ],
    despedida: "With love,",
  },
  fraseFinal:
    "A destination becomes part of a story when it begins to hold everything that was lived there.",
  capitulos: CAPITULOS_EN,
  totalCampos: TOTAL_CAMPOS,
};
