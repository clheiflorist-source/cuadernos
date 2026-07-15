/**
 * EL PRIMER CAPÍTULO · Cuaderno de Descubrimiento · Yolotzin (bodas íntimas)
 *
 * Contenido transcrito ÍNTEGRO del documento maestro aprobado
 * `El_Primer_Capitulo_Micro_Wedding_Clhei_Maestro_v1.md`.
 *
 * Regla editorial: las preguntas, frases y cartas NO se reescriben, resumen
 * ni "mejoran" sin autorización de Tania. Única adaptación autorizada por el
 * steward (jul 2026): la etiqueta de servicio "Micro Wedding" → "Yolotzin ·
 * Bodas Íntimas" (incluye Cap. 3, P2: "boda íntima").
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
  servicio: "Yolotzin · Bodas Íntimas",
  marca: "Clhei Floral Styling & Events",
  firma: "Tania Castorena",
  slug: "yolotzin",
  etiqueta: "Yolotzin",
};

export const INSTRUCCIONES: Instrucciones = {
  titulo: "Antes de comenzar",
  parrafos: [
    "Este cuaderno está pensado para responderse juntos.",
    "No necesitan terminarlo en un solo día ni buscar respuestas perfectas. Pueden detenerse, platicar, recordar y volver a estas páginas cuando lo deseen.",
    "Lo más importante es que sus respuestas se sientan honestas y que disfruten este primer momento de la planeación.",
  ],
  notaDigital:
    "Sus respuestas se guardan solas mientras escriben — arriba aparecerá un pequeño «Guardado» cada vez que suceda. Pueden cerrar esta página y volver cuando quieran: el cuaderno los estará esperando donde lo dejaron. Solo tengan en cuenta que vive en este navegador; si lo comienzan en la computadora, continúenlo ahí.",
};

export const CARTA_BIENVENIDA: CartaBienvenida = {
  parrafos: [
    "Si este cuaderno llegó a ustedes, significa que oficialmente comenzamos a escribir esta historia juntos.",
    "Antes de hablar sobre flores, cronogramas, proveedores o decoración, hay algo que para nosotros es mucho más importante: conocer a las personas detrás de la celebración.",
    "En Clhei creemos que una boda nunca comienza el día del evento.",
    "Comienza mucho antes, cuando dos personas empiezan a imaginar cómo quieren recordar ese momento el resto de su vida.",
    "Por eso, este no es un cuestionario.",
    "Es una conversación.",
    "Algunas preguntas serán muy prácticas y otras quizá los hagan recordar momentos que no habían vuelto a contar desde hace tiempo. No existen respuestas correctas ni incorrectas. Lo más importante es que cada respuesta refleje quiénes son ustedes y lo que realmente desean construir.",
    "Tómense el tiempo que necesiten para responderlo. Háganlo juntos, platiquen, recuerden, imaginen y disfruten esta etapa.",
    "Nos sentimos muy felices de acompañarlos desde este primer capítulo.",
  ],
  despedida: "Con cariño,",
};

export const CARTA_CIERRE: CartaCierre = {
  titulo: "Lo que acabamos de construir",
  parrafos: [
    "Si llegaron hasta aquí, quiero darles las gracias.",
    "Responder estas páginas probablemente les tomó más tiempo del que imaginaban. Pero espero que, mientras lo hacían, también hayan descubierto algo muy bonito: que la boda que están construyendo no comienza con un vestido, un lugar o una decoración.",
    "Comienza con ustedes.",
    "Con su historia, las personas que aman, aquello que desean recordar y la forma en la que han decidido comenzar esta nueva etapa de su vida.",
    "A partir de ahora empezaremos una parte distinta del camino. Poco a poco iremos transformando todas estas conversaciones en decisiones, y esas decisiones terminarán convirtiéndose en la celebración que hoy están imaginando.",
    "Cada vez que durante la planeación aparezca una duda o tengamos que elegir entre distintas opciones, volveremos a estas páginas. Porque aquí está la esencia de su boda y la respuesta a aquello que realmente vale la pena cuidar.",
    "Gracias por abrirnos la puerta para conocerlos un poco más.",
    "Es un honor acompañarlos en este momento tan importante de su historia.",
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
      "Todas las parejas tienen una historia distinta, una forma diferente de entender el amor y una manera muy particular de tomar decisiones.",
      "Antes de hablar de la boda, nos gustaría conocer un poco más sobre ustedes. No se preocupen por encontrar la respuesta perfecta; lo más importante es que respondan con honestidad y que disfruten este momento juntos.",
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
            "No necesariamente fue lo que más les llamó la atención, sino aquello que los hizo pensar: “Quiero seguir conociendo a esta persona”.",
          ],
        },
      ],
      [
        {
          id: "c1p3",
          tipo: "pregunta",
          titulo: "¿Qué creen que los convierte en un buen equipo?",
          nota: [
            "Todos enfrentamos los retos de manera distinta. Nos encantaría conocer aquello que sienten que hace fuerte su relación.",
          ],
        },
        {
          id: "c1p4",
          tipo: "pregunta",
          titulo:
            "¿Qué actividad disfrutan tanto que podrían pasar horas haciéndola juntos?",
          nota: [
            "No importa si es viajar, cocinar, caminar, ver películas o simplemente quedarse en casa. Queremos conocer esos pequeños momentos que forman parte de su historia.",
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
            "Si dentro de veinte años volvieran a leer este cuaderno, ¿qué les gustaría recordar de la etapa que están viviendo hoy?",
          nota: [
            "No piensen únicamente en la boda. Piensen en ustedes, en este momento de su vida y en cómo les gustaría recordarlo con el paso del tiempo.",
          ],
        },
      ],
      [
        {
          id: "c1p7",
          tipo: "pregunta",
          titulo:
            "¿Hay algo sobre ustedes que les gustaría que nosotros conociéramos desde el principio y que creen que nos ayudará a acompañarlos mejor durante este proceso?",
          nota: [
            "Puede ser una preocupación, una ilusión, una forma de tomar decisiones o cualquier cosa que consideren importante compartir con nosotros.",
          ],
        },
      ],
    ],
  },
  {
    num: 2,
    titulo: "Su Historia",
    frases: [
      "Todas las historias de amor son diferentes. Algunas comienzan con una casualidad, otras con una amistad y otras con un momento que nadie esperaba. Lo importante no es cómo empezó, sino todo lo que los trajo hasta aquí.",
    ],
    intro: [
      "Antes de imaginar el día de su boda, queremos conocer un poco más sobre el camino que han recorrido juntos. Este capítulo no busca construir una línea del tiempo, sino recordar aquellos momentos que, de una u otra forma, los hicieron elegir caminar de la mano.",
    ],
    paginas: [
      [
        {
          id: "c2p1",
          tipo: "pregunta",
          titulo:
            "Si alguien les preguntara cómo comenzó su historia, ¿qué les gustaría contarle?",
          nota: [
            "No nos interesa una versión perfecta, sino aquella que ustedes recuerdan con una sonrisa.",
          ],
        },
        {
          id: "c2p2",
          tipo: "pregunta",
          titulo:
            "Mirando hacia atrás, ¿hubo algún momento en el que sintieron que su relación cambió para siempre?",
          nota: [
            "A veces fue un viaje, una conversación, un reto o incluso un día muy cotidiano. Nos gustaría conocer ese momento.",
          ],
        },
      ],
      [
        {
          id: "c2p3",
          tipo: "pregunta",
          titulo: "¿Qué han aprendido el uno del otro desde que están juntos?",
          nota: [
            "No hablamos solamente de grandes enseñanzas. También pueden ser pequeños hábitos, nuevas formas de ver la vida o cosas que nunca imaginaron que terminarían disfrutando.",
          ],
        },
        {
          id: "c2p4",
          tipo: "pregunta",
          titulo:
            "¿Cuál es el recuerdo que más los hace reír cuando piensan en su historia?",
          nota: [
            "Las mejores historias siempre tienen momentos inesperados. Queremos conocer uno de esos que seguramente volverán a contar dentro de muchos años.",
          ],
        },
      ],
      [
        {
          id: "c2p5",
          tipo: "pregunta",
          titulo:
            "¿Hay alguna tradición, lugar, canción o detalle que tenga un significado especial para ustedes como pareja?",
          nota: [
            "No necesariamente tiene que formar parte de la boda. Simplemente queremos conocer aquello que, cuando aparece, inmediatamente les recuerda su historia.",
          ],
        },
        {
          id: "c2p6",
          tipo: "pregunta",
          titulo:
            "¿Cómo fue el momento en que decidieron dar el siguiente paso y comprometerse?",
          nota: [
            "Nos encantaría conocer cómo vivieron ese momento y qué sintieron ese día.",
          ],
        },
      ],
      [
        {
          id: "c2p7",
          tipo: "pregunta",
          titulo:
            "Si pudieran resumir toda su historia en una sola frase, ¿cuál sería?",
          nota: [
            "No piensen demasiado la respuesta. A veces la primera idea es la que mejor refleja lo que han construido juntos.",
          ],
        },
      ],
    ],
  },
  {
    num: 3,
    titulo: "El Sí",
    frases: [
      "Cada pareja encuentra una forma distinta de celebrar su historia.",
      "Antes de imaginar los detalles de la boda, queremos conocer aquello que realmente le da sentido para ustedes.",
      "Porque, cuando entendemos qué es lo verdaderamente importante, todas las demás decisiones comienzan a encontrar su lugar.",
    ],
    intro: [],
    paginas: [
      [
        {
          id: "c3p1",
          tipo: "pregunta",
          titulo: "¿Qué significa casarse para ustedes?",
          nota: [
            "Cada pareja encuentra un significado distinto en esta decisión. Nos gustaría conocer qué representa este momento para ustedes, más allá de la celebración.",
          ],
        },
        {
          id: "c3p2",
          tipo: "pregunta",
          titulo: "¿Por qué decidieron celebrar una boda íntima?",
          nota: [
            "Nos encantaría conocer qué los llevó a elegir una celebración más íntima.",
          ],
        },
      ],
      [
        {
          id: "c3p3",
          tipo: "pregunta",
          titulo: "¿Qué esperan sentir el día de su boda?",
          nota: [
            "No piensen en cómo quieren que se vea.",
            "Piensen en cómo quieren vivirla.",
          ],
        },
        {
          id: "c3p4",
          tipo: "pregunta",
          titulo:
            "Cuando recuerden este día dentro de muchos años, ¿qué momento les gustaría revivir primero?",
          nota: [
            "No piensen cuál será el más bonito.",
            "Piensen cuál imaginan que seguirá haciéndolos sonreír con el paso del tiempo.",
          ],
        },
      ],
      [
        {
          id: "c3p5",
          tipo: "pregunta",
          titulo:
            "¿Qué personas son indispensables para que ese día se sienta completo?",
          nota: [
            "No hablamos solamente de invitados.",
            "Hablamos de aquellas personas cuya presencia tiene un significado especial para ustedes.",
          ],
        },
      ],
      [
        {
          id: "c3e1",
          tipo: "frase",
          lead: ["Completen las siguientes frases."],
          titulo: "Nuestra boda no necesita...",
        },
        {
          id: "c3e2",
          tipo: "frase",
          titulo: "Nuestra boda sí necesita...",
        },
      ],
      [
        {
          id: "c3p6",
          tipo: "pregunta",
          titulo: "¿Hay algo que definitivamente no quieren vivir ese día?",
          nota: [
            "Puede ser una tradición, una dinámica, una preocupación o simplemente algo con lo que no se identifican.",
          ],
        },
      ],
    ],
  },
  {
    num: 4,
    titulo: "Las Personas",
    frases: [
      "Las celebraciones más íntimas tienen algo muy especial: cada persona presente forma parte de la historia.",
      "Más allá de una lista de invitados, queremos conocer a quienes ocupan un lugar importante en sus vidas y entender por qué compartir este momento con ellos tiene un significado especial.",
    ],
    intro: [],
    paginas: [
      [
        {
          id: "c4p1",
          tipo: "pregunta",
          titulo:
            "¿Quiénes son esas personas con las que siempre imaginaron compartir este momento?",
          nota: [
            "Hay personas cuya presencia nunca estuvo en duda. Nos encantaría conocer quiénes son y por qué ocupan un lugar tan importante en su historia.",
          ],
        },
        {
          id: "c4p2",
          tipo: "pregunta",
          titulo:
            "¿Qué personas sienten que han acompañado su historia desde el principio?",
          nota: [
            "No importa si son familiares o amigos. Piensen en quienes, de una u otra forma, siempre han estado presentes y han sido parte de su camino.",
          ],
        },
      ],
      [
        {
          id: "c4p3",
          tipo: "pregunta",
          titulo:
            "¿Hay alguien que, aunque ya no pueda estar presente físicamente, les gustaría sentir cerca ese día?",
          nota: [
            "Puede tratarse de una persona, una mascota o alguien que haya dejado una huella importante en sus vidas y cuya presencia quieran honrar de alguna manera.",
          ],
        },
      ],
      [
        {
          id: "c4p4",
          tipo: "pregunta",
          titulo:
            "¿Qué momento les gustaría compartir únicamente con las personas más importantes para ustedes?",
          nota: [
            "Puede ser antes de la ceremonia, durante la celebración o incluso al finalizar el día. Nos ayudará a identificar esos momentos que merecen vivirse con calma.",
          ],
        },
        {
          id: "c4p5",
          tipo: "pregunta",
          titulo:
            "¿Hay alguna tradición familiar que les emocione conservar? ¿O alguna que prefieran dejar atrás?",
          nota: [
            "Las tradiciones también cuentan historias. Nos gustaría conocer cuáles hacen sentido para ustedes y cuáles sienten que no representan la celebración que desean construir.",
          ],
        },
      ],
      [
        {
          id: "c4p6",
          tipo: "pregunta",
          titulo:
            "Si pudieran agradecerle algo a todas las personas que estarán ese día con ustedes, ¿qué les dirían?",
          nota: [
            "No tienen que escribir un discurso. Solo aquello que nace cuando piensan en compartir este momento con ellas.",
          ],
        },
        {
          id: "c4p7",
          tipo: "pregunta",
          titulo:
            "¿Con quién imaginan el abrazo que más esperan recibir ese día?",
          nota: [
            "A veces un solo abrazo puede resumir todo lo que significa una celebración. Nos encantaría saber quién ocupa ese lugar en su corazón.",
          ],
        },
      ],
      [
        {
          id: "c4p8",
          tipo: "pregunta",
          titulo:
            "¿Hay alguien con quien les gustaría compartir un momento especial durante la boda y que quizá nadie más imaginaría?",
          nota: [
            "Puede ser una conversación, una fotografía, un brindis o simplemente unos minutos para agradecerle su presencia. Esos pequeños momentos suelen convertirse en algunos de los recuerdos más valiosos del día.",
          ],
        },
      ],
    ],
  },
  {
    num: 5,
    titulo: "La Experiencia",
    frases: [
      "Cuando imaginan el día de su boda, probablemente no recuerden el color de las flores o la forma de las mesas. Lo que permanecerá será la manera en la que se sintieron, las personas con las que compartieron ese momento y los recuerdos que construyeron juntos.",
      "Este capítulo está pensado para descubrir cómo quieren vivir ese día, más allá de cómo se verá.",
    ],
    intro: [],
    paginas: [
      [
        {
          id: "c5p1",
          tipo: "pregunta",
          titulo: "¿Cómo imaginan que comenzará el día de su boda?",
          nota: [
            "Piensen en el ambiente, las personas, la música, los nervios o la tranquilidad. No buscamos un itinerario, sino la sensación con la que les gustaría empezar ese día.",
          ],
        },
        {
          id: "c5p2",
          tipo: "pregunta",
          titulo:
            "¿Qué palabra les gustaría que describiera la atmósfera de su boda?",
          nota: ["Si tuvieran que elegir una sola palabra, ¿cuál sería y por qué?"],
        },
      ],
      [
        {
          id: "c5p3",
          tipo: "pregunta",
          titulo:
            "¿Hay algún momento del día que imaginan con especial ilusión?",
          nota: [
            "Puede ser la ceremonia, la cena, el primer baile o incluso un momento mucho más sencillo que tenga un significado especial para ustedes.",
          ],
        },
        {
          id: "c5p4",
          tipo: "pregunta",
          titulo:
            "¿Cómo les gustaría que se sintieran sus invitados durante la celebración?",
          nota: [
            "No pensamos únicamente en que se diviertan. Piensen en aquello que les gustaría que experimentaran al acompañarlos.",
          ],
        },
      ],
      [
        {
          id: "c5p5",
          tipo: "pregunta",
          titulo:
            "Si pudieran regalarle una sola emoción a cada una de las personas que estará con ustedes ese día, ¿cuál sería?",
          nota: [
            "No importa si es tranquilidad, alegría, sorpresa, conexión o cualquier otra emoción. Nos gustaría conocer aquello que esperan que permanezca en ellos incluso después de que la celebración termine.",
          ],
        },
      ],
      [
        {
          id: "c5p6",
          tipo: "frase",
          lead: ["Completen la siguiente frase."],
          titulo: "Nuestra boda se sentirá como...",
        },
      ],
      [
        {
          id: "c5p7",
          tipo: "pregunta",
          titulo:
            "Cuando todo haya terminado y regresen a casa, ¿qué les gustaría pensar sobre ese día?",
          nota: [
            "Imaginen ese momento en el que, por fin, estarán solos después de haber vivido una de las experiencias más importantes de su vida. ¿Qué les gustaría sentir al recordar todo lo que ocurrió?",
          ],
        },
      ],
    ],
  },
  {
    num: 6,
    titulo: "La Esencia",
    frases: [
      "Toda celebración tiene una identidad propia.",
      "Antes de elegir colores, flores o cualquier otro detalle, queremos descubrir la esencia que dará vida a la celebración. Creemos que cuando esa identidad está clara, cada decisión comienza a sentirse natural y coherente.",
    ],
    intro: [],
    paginas: [
      [
        {
          id: "c6p1",
          tipo: "pregunta",
          titulo: "Si su boda fuera una persona, ¿cómo la describirían?",
          nota: [
            "Piensen en su personalidad, su forma de recibir a las personas, su energía y aquello que la haría inolvidable.",
          ],
        },
        {
          id: "c6p2",
          tipo: "pregunta",
          titulo:
            "¿Qué lugar en el mundo refleja mejor la esencia de la boda que imaginan?",
          nota: [
            "No importa si ya lo visitaron o si solo existe en su imaginación. Lo que nos interesa es aquello que les hace sentir.",
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
            "Puede ser un jardín, un bosque, el mar, la montaña, los árboles, la lluvia, las flores o cualquier otro paisaje que los haga sentir en paz.",
          ],
        },
        {
          id: "c6p4",
          tipo: "pregunta",
          titulo:
            "¿Qué materiales sienten que representan mejor el ambiente que desean crear?",
          nota: [
            "Piensen en madera, piedra, hierro, lino, cerámica, cristal, velas o cualquier otro elemento que venga a su mente.",
          ],
        },
      ],
      [
        {
          id: "c6p5",
          tipo: "pregunta",
          titulo:
            "¿Hay algún color o combinación de colores que siempre les haga sentir bien?",
          nota: [
            "No buscamos definir una paleta, sino conocer aquellas tonalidades con las que sienten una conexión natural.",
          ],
        },
        {
          id: "c6p6",
          tipo: "pregunta",
          titulo:
            "¿Existe alguna fotografía, película, libro, ciudad o recuerdo cuya estética siempre les haya inspirado?",
          nota: [
            "No es necesario que sea una referencia de boda. A veces una ciudad, un hotel, una película, una cafetería o incluso un recuerdo pueden transmitir exactamente la sensación que desean vivir ese día.",
          ],
        },
      ],
      [
        {
          id: "c6e1",
          tipo: "frase",
          lead: [
            "Imaginen que una persona entra por primera vez al lugar de su boda.",
            "Al regresar a casa, alguien le pregunta:",
          ],
          cita: "“¿Cómo era la boda?”",
          titulo: "Era una boda...",
          nota: [
            "Completen la frase con las primeras palabras que imaginan que respondería.",
          ],
        },
      ],
    ],
  },
  {
    num: 7,
    titulo: "Lo Esencial",
    frases: [
      "Cada decisión que tomen durante la planeación será una oportunidad para acercarse a la boda que imaginan o para alejarse de ella.",
      "Por eso, antes de comenzar a tomar decisiones, queremos descubrir qué es verdaderamente importante para ustedes y qué cosas pueden dejar ir con tranquilidad.",
    ],
    intro: [],
    paginas: [
      [
        {
          id: "c7p1",
          tipo: "pregunta",
          titulo:
            "Si tuvieran que quedarse con una sola prioridad para su boda, ¿cuál sería?",
          nota: [
            "No existe una respuesta correcta. Para algunas parejas será compartir tiempo con su familia; para otras, la ceremonia, la comida, la música o simplemente disfrutar el día sin preocupaciones. Nos gustaría conocer aquello que, para ustedes, hará que este día realmente valga la pena.",
          ],
        },
      ],
      [
        {
          id: "c7p2",
          tipo: "pregunta",
          titulo:
            "Durante la planeación habrá muchas decisiones por tomar. ¿Hay algo en lo que definitivamente no les gustaría hacer concesiones?",
          nota: [
            "Todos los proyectos implican encontrar equilibrios. Queremos conocer aquello que, para ustedes, representa una prioridad absoluta.",
          ],
        },
        {
          id: "c7p3",
          tipo: "pregunta",
          titulo:
            "Así como existen prioridades, también hay aspectos donde es más fácil adaptarse. ¿En qué creen que podrían ser más flexibles si eso ayudara a construir una mejor experiencia?",
          nota: [
            "A veces, renunciar a algo permite fortalecer aquello que realmente importa.",
          ],
        },
      ],
      [
        {
          id: "c7p4",
          tipo: "pregunta",
          titulo:
            "Más allá del resultado final, ¿qué les gustaría cuidar durante todo el proceso de planeación?",
          nota: [
            "Puede ser la tranquilidad, la ilusión, el tiempo para disfrutar juntos o cualquier otro aspecto que deseen proteger mientras construimos esta celebración.",
          ],
        },
        {
          id: "c7p5",
          tipo: "pregunta",
          titulo:
            "Ahora que comenzamos este camino juntos, ¿cómo imaginan que podemos acompañarlos de la mejor manera?",
          nota: [
            "Nos gustaría conocer qué esperan de nosotros y qué tipo de acompañamiento les hará sentirse tranquilos y disfrutando este proceso.",
          ],
        },
      ],
      [
        {
          id: "c7p6",
          tipo: "pregunta",
          titulo:
            "¿Hay alguna preocupación que todavía no nos hayan compartido y que consideren importante para este proceso?",
          nota: [
            "A veces las inquietudes más pequeñas son las que más tranquilidad pueden aportar cuando se hablan desde el principio.",
          ],
        },
      ],
      [
        {
          id: "c7e1",
          tipo: "frase",
          lead: ["Completen la siguiente frase."],
          titulo:
            "Sabremos que nuestra boda fue exactamente como la imaginábamos si...",
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
