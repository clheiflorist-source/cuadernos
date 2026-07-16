/**
 * EL PRIMER CAPÍTULO · Cuaderno de Descubrimiento · PAHTIĀ (Coordinación del Día)
 *
 * Contenido transcrito ÍNTEGRO del documento maestro aprobado
 * `El_Primer_Capitulo_PAHTIA_Clhei_Maestro_v1.md`.
 *
 * Regla editorial (doc maestro §0 y §20): las preguntas, frases, introducciones
 * y cartas NO se reescriben, resumen, fusionan ni "mejoran" sin autorización de
 * Tania. Se respeta el orden narrativo y los espacios de respuesta. El diseño es
 * el mismo de los cuadernos Yolotzin y OLLIN; solo cambian el servicio y las
 * preguntas.
 *
 * PAHTIĀ es el servicio de coordinación del día: la pareja ya recorrió la mayor
 * parte de la planeación. Este libro NO pide directorio, contratos, horarios,
 * cronograma ni logística (eso vive en el futuro Libro 2 · Cuaderno de
 * Coordinación). Su propósito es recibir el proyecto con sensibilidad antes de
 * la parte técnica.
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
  servicio: "PAHTIĀ · Coordinación del Día",
  marca: "Clhei Floral Styling & Events",
  firma: "Tania Castorena",
  slug: "pahtia",
  etiqueta: "PAHTIĀ",
};

export const INSTRUCCIONES: Instrucciones = {
  titulo: "Antes de comenzar",
  parrafos: [
    "Este cuaderno está pensado para responderse juntos.",
    "No necesitan terminarlo en un solo momento ni encontrar respuestas perfectas. Pueden detenerse, platicar, recordar todo lo que han construido y volver a estas páginas cuando lo deseen.",
    "Respóndanlo juntos. Hagan pausas, cuéntense historias y disfruten esta oportunidad de mirar su boda más allá de pendientes y decisiones.",
  ],
  notaDigital:
    "Sus respuestas se guardan solas mientras escriben — arriba aparecerá un pequeño «Guardado» cada vez que suceda. Pueden cerrar esta página y volver cuando quieran: el cuaderno los estará esperando donde lo dejaron. Solo tengan en cuenta que vive en este navegador; si lo comienzan en la computadora, continúenlo ahí.",
};

export const CARTA_BIENVENIDA: CartaBienvenida = {
  parrafos: [
    "Si este cuaderno llegó a ustedes, significa que comenzamos una nueva etapa en el camino hacia su boda.",
    "Durante los últimos meses han tomado decisiones, elegido personas, imaginado momentos y construido poco a poco una celebración que ya tiene una historia propia. Ahora nos corresponde conocerla, comprenderla y acompañarlos para que todo aquello que han preparado pueda vivirse con la tranquilidad que merece.",
    "Antes de hablar de horarios, proveedores o pendientes, queremos detenernos a conocerlos.",
    "Queremos descubrir qué es verdaderamente importante para ustedes, qué momentos desean cuidar especialmente, quiénes forman parte esencial de este día y cómo esperan sentirse cuando finalmente llegue.",
    "Estas páginas nos permitirán mirar su boda desde sus ojos y comprender no solo cómo está organizada, sino por qué cada decisión ocupa un lugar dentro de ella.",
    "Respóndanlas juntos. Hagan pausas, cuéntense historias, recuerden cómo comenzó todo y disfruten esta oportunidad de volver a mirar la celebración que han construido.",
    "Volveremos a estas páginas durante la coordinación siempre que necesitemos recordar qué debe permanecer en el centro de cada decisión.",
    "Gracias por confiar en nosotros para recibir su proyecto, cuidar todo lo que han construido y acompañarlos durante la última parte de este camino.",
  ],
  despedida: "Con cariño,",
};

export const CARTA_CIERRE: CartaCierre = {
  titulo: "Ahora solo queda vivirlo",
  parrafos: [
    "Si llegaron hasta aquí, también llegaron a un momento muy especial del camino.",
    "Durante los últimos meses imaginaron, eligieron, resolvieron y construyeron una celebración llena de decisiones que hablan de ustedes. En estas páginas nos permitieron conocer todo aquello que existe detrás de ese día: las personas que aman, los momentos que esperan, los detalles que desean cuidar y la forma en la que quieren sentirse cuando finalmente llegue.",
    "A partir de ahora comienza una etapa distinta.",
    "Poco a poco iremos recibiendo todo lo que han construido, comprendiendo cada decisión y preparando el camino para que, cuando llegue la boda, ustedes ya no tengan que sostenerla.",
    "No será momento de revisar pendientes, anticipar lo que sigue ni estar atentos a cada movimiento.",
    "Será momento de confiar.",
    "De mirar alrededor, abrazar a las personas que aman, dejarse sorprender por todo lo que imaginaron y permitirse vivir el día sin sentir que tienen que dirigirlo.",
    "Volveremos a estas páginas siempre que necesitemos recordar qué es verdaderamente importante para ustedes y qué debemos proteger mientras todo sucede.",
    "Gracias por confiarnos una celebración que ya guarda una parte tan importante de su historia.",
    "Ahora solo queda acompañarlos para que puedan vivirla plenamente.",
  ],
  despedida: "Con cariño,",
};

export const FRASE_FINAL =
  "Todo lo que construyeron está a punto de convertirse en un día que, por fin, podrán simplemente vivir.";

export const CAPITULOS: Capitulo[] = [
  {
    num: 1,
    titulo: "Ustedes",
    frases: [
      "Antes de recibir su boda, queremos conocer a las personas que le han dado forma.",
    ],
    intro: [
      "Durante los últimos meses han tomado muchas decisiones y recorrido juntos una parte importante del camino.",
      "Antes de conocer cada detalle del proyecto, queremos detenernos a descubrir quiénes son como pareja, cómo viven los momentos importantes y qué necesitan para sentirse acompañados cuando llegue el día de su boda.",
    ],
    paginas: [
      [
        {
          id: "c1p1",
          tipo: "pregunta",
          titulo:
            "Si tuvieran que describir su relación en tres palabras, ¿cuáles serían y por qué?",
          nota: [
            "No buscamos una definición perfecta. Elijan aquellas palabras en las que ambos puedan reconocerse y que expresen la forma en la que viven su relación.",
          ],
        },
        {
          id: "c1p2",
          tipo: "pregunta",
          titulo:
            "Después de todo lo que han construido juntos, ¿qué sienten que los convierte en un buen equipo?",
          nota: [
            "Piensen en la manera en la que se acompañan, enfrentan los retos y encuentran equilibrio cuando cada uno ve las cosas de forma distinta.",
          ],
        },
      ],
      [
        {
          id: "c1p3",
          tipo: "pregunta",
          titulo:
            "Cuando aparece una situación inesperada, ¿cómo suele reaccionar cada uno?",
          nota: [
            "Quizá uno necesita resolver de inmediato, mientras el otro prefiere detenerse y analizar. Conocer su manera de responder nos ayudará a acompañarlos con mayor sensibilidad y tranquilidad.",
          ],
        },
        {
          id: "c1p4",
          tipo: "pregunta",
          titulo:
            "¿Qué pequeño momento cotidiano sienten que representa mejor quiénes son como pareja?",
          nota: [
            "Puede ser una rutina, una actividad que disfrutan, una conversación recurrente o algo sencillo que siempre los haga sentir cerca.",
          ],
        },
      ],
      [
        {
          id: "c1p5",
          tipo: "pregunta",
          titulo:
            "En esta última etapa antes de la boda, ¿qué necesitan el uno del otro para seguir disfrutando el proceso?",
          nota: [
            "Puede ser paciencia, tiempo, comunicación, confianza, espacio o simplemente recordar juntos por qué comenzaron a construir esta celebración.",
          ],
        },
        {
          id: "c1p6",
          tipo: "pregunta",
          titulo:
            "Cuando llegue el día de su boda, ¿cómo les gustaría sentirse al saber que todo está en nuestras manos?",
          nota: [
            "Piensen en la sensación que desean conservar: tranquilidad, libertad, emoción, confianza o la posibilidad de estar completamente presentes.",
          ],
        },
      ],
      [
        {
          id: "c1p7",
          tipo: "pregunta",
          titulo:
            "¿Hay algo sobre ustedes que consideren importante que conozcamos para acompañarlos mejor?",
          nota: [
            "Puede ser una preocupación, una manera particular de comunicarse, algo que los haga sentir seguros o cualquier aspecto personal que nos ayude a cuidar mejor su experiencia.",
          ],
        },
      ],
    ],
  },
  {
    num: 2,
    titulo: "La Historia que Construyeron",
    frases: [
      "Antes de llegar hasta este momento, hubo conversaciones, decisiones y pequeños avances que también forman parte de la historia de su boda.",
    ],
    intro: [
      "La celebración que hoy está tomando forma comenzó mucho antes de elegir un lugar o contratar a un proveedor. Comenzó con una idea, con aquello que ambos imaginaron al decidir casarse y con cada elección que hicieron durante el camino.",
      "En estas páginas queremos conocer cómo nació el proyecto que ahora recibimos y qué ha significado para ustedes construirlo juntos.",
    ],
    paginas: [
      [
        {
          id: "c2p1",
          tipo: "pregunta",
          titulo:
            "Cuando comenzaron a imaginar su boda, ¿cuál fue la primera idea en la que ambos coincidieron?",
          nota: [
            "Puede haber sido una sensación, un lugar, una forma de celebrar o algo que desde el principio supieron que debía formar parte de ese día.",
          ],
        },
        {
          id: "c2p2",
          tipo: "pregunta",
          titulo:
            "Mirando todo lo que han construido hasta ahora, ¿qué decisión sienten que representa mejor a los dos?",
          nota: [
            "No tiene que ser la más importante ni la más visible. Piensen en aquella elección que, al verla, les hace sentir que esta boda realmente habla de ustedes.",
          ],
        },
      ],
      [
        {
          id: "c2p3",
          tipo: "pregunta",
          titulo:
            "¿Qué parte de la planeación han disfrutado especialmente juntos?",
          nota: [
            "Puede ser visitar lugares, imaginar el diseño, elegir la música, probar el menú o simplemente darse tiempo para hablar sobre lo que cada uno espera de la boda.",
          ],
        },
        {
          id: "c2p4",
          tipo: "pregunta",
          titulo:
            "¿Qué decisión les costó más trabajo tomar y qué les ayudó finalmente a resolverla?",
          nota: [
            "No buscamos evaluar si fue correcta o incorrecta. Queremos comprender qué fue importante para ustedes al encontrar una solución.",
          ],
        },
      ],
      [
        {
          id: "c2p5",
          tipo: "pregunta",
          titulo:
            "Después de todo el camino recorrido, ¿de qué se sienten especialmente orgullosos al mirar la boda que han construido?",
          nota: [
            "Puede ser una decisión, la manera en la que trabajaron juntos, algo que resolvieron o la intención que lograron conservar durante el proceso.",
          ],
        },
        {
          id: "c2p6",
          tipo: "pregunta",
          titulo:
            "Si pudieran volver al momento en que comenzaron a planear, ¿qué les gustaría decirles a esas dos personas que apenas estaban imaginando su boda?",
          nota: [
            "Piensen en aquello que aprendieron, en lo que ahora saben y en la forma en la que les gustaría recordar esta etapa cuando todo haya terminado.",
          ],
        },
      ],
    ],
  },
  {
    num: 3,
    titulo: "Lo que Han Imaginado",
    frases: [
      "Después de tantos meses tomando decisiones, llega el momento de recordar cómo desean vivir todo aquello que han construido.",
    ],
    intro: [
      "Detrás de cada elección existe una intención: una emoción que desean sentir, un momento que esperan con ilusión o una forma particular de vivir la celebración.",
      "Antes de revisar cómo está organizada la boda, queremos comprender cómo la imaginan ustedes y qué tendría que permanecer presente para que el día se sienta verdaderamente suyo.",
    ],
    paginas: [
      [
        {
          id: "c3p1",
          tipo: "pregunta",
          titulo:
            "Cuando piensan en el día de su boda, ¿cuál es la primera imagen que aparece en su mente?",
          nota: [
            "Puede ser un momento, una persona, una emoción, un espacio o una escena sencilla que han imaginado muchas veces durante la planeación.",
          ],
        },
        {
          id: "c3p2",
          tipo: "pregunta",
          titulo: "¿Qué momento esperan vivir con mayor ilusión?",
          nota: [
            "Puede ser mientras se preparan, cuando se vean por primera vez, durante la ceremonia, al entrar a la celebración o en algún instante que tenga un significado especial únicamente para ustedes.",
          ],
        },
      ],
      [
        {
          id: "c3p3",
          tipo: "pregunta",
          titulo: "¿Cómo les gustaría sentirse durante el día de su boda?",
          nota: [
            "Piensen más allá de la emoción natural del momento. Nos gustaría conocer qué sensación desean conservar mientras todo sucede a su alrededor.",
          ],
        },
        {
          id: "c3p4",
          tipo: "pregunta",
          titulo:
            "¿Hay algún detalle, decisión o momento que quizá parezca pequeño, pero que para ustedes tenga un significado especial?",
          nota: [
            "Puede ser una canción, una tradición, una fotografía, unas palabras, un objeto o cualquier elemento que debamos reconocer y cuidar durante el día.",
          ],
        },
      ],
      [
        {
          id: "c3p5",
          tipo: "pregunta",
          titulo:
            "¿Existe algún momento que deseen vivir con mayor intimidad, sin sentir que deben continuar inmediatamente con lo que sigue?",
          nota: [
            "Queremos identificar aquellos instantes que necesitan espacio para disfrutarse con calma y evitar que el ritmo de la boda los haga pasar demasiado rápido.",
          ],
        },
      ],
    ],
  },
  {
    num: 4,
    titulo: "Las Personas",
    frases: [
      "Una boda reúne a muchas personas, pero algunas presencias tienen un significado que va mucho más allá de estar invitadas.",
    ],
    intro: [
      "Durante la celebración habrá abrazos, encuentros y momentos que quizá duren solo unos minutos, pero que ustedes recordarán durante muchos años.",
      "Antes de revisar lugares, responsabilidades o participaciones, queremos conocer a las personas que ocupan un lugar especialmente importante en su historia y comprender qué momentos desean compartir con ellas.",
    ],
    paginas: [
      [
        {
          id: "c4p1",
          tipo: "pregunta",
          titulo:
            "¿Quiénes son esas personas cuya presencia hará que el día de su boda se sienta completo?",
          nota: [
            "Puede tratarse de familiares, amistades o personas que los hayan acompañado en momentos importantes. Cuéntennos quiénes son y qué representan para ustedes.",
          ],
        },
        {
          id: "c4p2",
          tipo: "pregunta",
          titulo:
            "¿Con quiénes desean compartir los momentos previos a la ceremonia?",
          nota: [
            "Piensen en las personas que les gustaría tener cerca mientras se preparan y en el ambiente que desean vivir durante esas horas.",
          ],
        },
      ],
      [
        {
          id: "c4p3",
          tipo: "pregunta",
          titulo:
            "¿Hay alguien con quien esperen compartir un momento especialmente significativo durante la boda?",
          nota: [
            "Puede ser un abrazo, unas palabras, una fotografía, un baile o simplemente unos minutos juntos que deseen cuidar dentro del ritmo de la celebración.",
          ],
        },
      ],
      [
        {
          id: "c4p4",
          tipo: "pregunta",
          titulo:
            "¿Hay alguna persona que, aunque ya no pueda estar presente físicamente, deseen recordar o sentir cerca ese día?",
          nota: [
            "Puede ser una persona, una mascota o alguien que haya dejado una huella importante en sus vidas. Nos gustaría comprender qué lugar desean darle dentro de la celebración.",
          ],
        },
      ],
      [
        {
          id: "c4p5",
          tipo: "pregunta",
          titulo:
            "En toda familia existen historias y relaciones distintas. ¿Hay alguna dinámica que consideren importante que conozcamos para acompañarlos con mayor sensibilidad?",
          nota: [
            "No necesitan compartir más de lo que les resulte cómodo. Queremos conocer únicamente aquello que pueda ayudarnos a cuidar su tranquilidad y evitar situaciones incómodas durante el día.",
          ],
        },
      ],
      [
        {
          id: "c4p6",
          tipo: "pregunta",
          titulo:
            "Cuando imaginen a todas esas personas reunidas, ¿qué les gustaría agradecerles?",
          nota: [
            "No necesitan escribir un discurso. Piensen simplemente en aquello que sienten al saber que estarán presentes acompañándolos en este momento.",
          ],
        },
      ],
    ],
  },
  {
    num: 5,
    titulo: "Lo Esencial",
    frases: [
      "Cuando un día está lleno de momentos, tener claridad sobre lo verdaderamente importante permite cuidar aquello que no debería perderse.",
    ],
    intro: [
      "Durante la boda habrá muchas cosas sucediendo al mismo tiempo. Algunas seguirán exactamente el camino que imaginaron y otras quizá necesiten ajustarse de manera natural.",
      "Antes de entrar en la parte operativa, queremos reconocer qué debe permanecer en el centro para que, aun entre horarios y decisiones, la celebración siga sintiéndose profundamente suya.",
    ],
    paginas: [
      [
        {
          id: "c5p1",
          tipo: "pregunta",
          titulo:
            "Si durante su boda pudiéramos proteger una sola cosa por encima de todo, ¿cuál sería?",
          nota: [
            "Puede ser su tranquilidad, la ceremonia, el tiempo con las personas que aman, disfrutar cada momento o cualquier intención que para ustedes represente el corazón del día.",
          ],
        },
        {
          id: "c5p2",
          tipo: "pregunta",
          titulo:
            "¿Qué tendría que estar presente para que, al mirar su boda, sientan que realmente los representa?",
          nota: [
            "No piensen únicamente en elementos visibles. Puede ser una emoción, una manera de convivir, una tradición o la forma en la que desean sentirse juntos.",
          ],
        },
      ],
      [
        {
          id: "c5p3",
          tipo: "pregunta",
          titulo:
            "¿Hay algo que no quisieran que el ritmo de la boda les impidiera disfrutar?",
          nota: [
            "Puede ser sentarse a cenar, hablar con ciertas personas, observar el espacio terminado, bailar juntos o simplemente detenerse unos minutos para asimilar lo que están viviendo.",
          ],
        },
        {
          id: "c5p4",
          tipo: "pregunta",
          titulo:
            "Si durante el día fuera necesario realizar algún pequeño ajuste, ¿en qué aspectos sentirían que pueden ser más flexibles?",
          nota: [
            "No buscamos anticipar problemas, sino comprender qué elementos podrían adaptarse sin alterar la esencia de la celebración.",
          ],
        },
      ],
      [
        {
          id: "c5e1",
          tipo: "frase",
          lead: ["Completen juntos la siguiente frase:"],
          titulo: "Pase lo que pase ese día, queremos recordar que...",
          nota: [
            "Piensen en aquello que les gustaría tener presente cuando la emoción, los tiempos y todos los momentos de la boda comiencen a suceder.",
          ],
        },
      ],
    ],
  },
  {
    num: 6,
    titulo: "Estar Presentes",
    frases: [
      "Después de tantos meses construyendo este día, llegará el momento de dejar de organizarlo y comenzar simplemente a vivirlo.",
    ],
    intro: [
      "Durante la planeación han estado pendientes de decisiones, conversaciones y detalles que poco a poco dieron forma a su boda.",
      "Cuando finalmente llegue el día, queremos comprender qué necesitan para poder soltar esa responsabilidad, confiar en todo lo que han construido y permitirse estar completamente presentes.",
    ],
    paginas: [
      [
        {
          id: "c6p1",
          tipo: "pregunta",
          titulo:
            "Cuando dicen que quieren disfrutar su boda, ¿cómo imaginan que se verá realmente ese momento?",
          nota: [
            "Tal vez signifique conversar con calma, bailar sin mirar el reloj, sentarse a cenar, abrazar a sus personas importantes o simplemente detenerse para observar todo lo que está sucediendo.",
          ],
        },
        {
          id: "c6p2",
          tipo: "pregunta",
          titulo:
            "Después de haber estado tan involucrados en la planeación, ¿hay alguna responsabilidad que sientan que podría costarles trabajo dejar en otras manos?",
          nota: [
            "No buscamos que se desentiendan de algo que consideran importante. Queremos reconocer aquello que necesitarán soltar con mayor confianza cuando llegue el día.",
          ],
        },
      ],
      [
        {
          id: "c6p3",
          tipo: "pregunta",
          titulo:
            "¿Qué les ayudaría a sentirse tranquilos durante las horas previas a la boda?",
          nota: [
            "Puede ser comenzar el día sin prisas, estar acompañados por ciertas personas, tener momentos de silencio o saber que ya no existe ninguna decisión pendiente por tomar.",
          ],
        },
        {
          id: "c6p4",
          tipo: "pregunta",
          titulo:
            "Si durante la celebración necesitan nuestra atención, ¿cómo les gustaría que nos acerquemos a ustedes?",
          nota: [
            "Quizá prefieran conocer únicamente aquello que realmente requiera su decisión o sentirse acompañados de una manera cercana y discreta. Nos ayudará saber qué los hará sentirse más cómodos.",
          ],
        },
      ],
      [
        {
          id: "c6p5",
          tipo: "pregunta",
          titulo:
            "¿Hay algo que deseen dejar de cargar desde el momento en que comience su boda?",
          nota: [
            "Puede ser una preocupación, una expectativa, la necesidad de supervisar o cualquier responsabilidad que quieran dejar atrás para vivir plenamente el día.",
          ],
        },
      ],
      [
        {
          id: "c6e1",
          tipo: "frase",
          lead: ["Completen juntos la siguiente frase:"],
          titulo: "El día de nuestra boda nos damos permiso de...",
          nota: [
            "Piensen en aquello que desean permitirse vivir después de todo el camino recorrido: disfrutar, confiar, emocionarse, detenerse, celebrar o simplemente estar juntos.",
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
      "Before we receive your wedding, we want to know the people who have given it shape.",
    ],
    intro: [
      "Over the past months you've made many decisions and walked an important part of the road together.",
      "Before learning every detail of the project, we want to pause and discover who you are as a couple, how you live the important moments, and what you need to feel accompanied when your wedding day arrives.",
    ],
    paginas: [
      [
        {
          id: "c1p1",
          tipo: "pregunta",
          titulo:
            "If you had to describe your relationship in three words, which would they be — and why?",
          nota: [
            "We're not looking for a perfect definition. Choose words you both recognize yourselves in, ones that express the way you live your relationship.",
          ],
        },
        {
          id: "c1p2",
          tipo: "pregunta",
          titulo:
            "After everything you've built together, what do you feel makes you a good team?",
          nota: [
            "Think of the way you support each other, face challenges, and find balance when you each see things differently.",
          ],
        },
      ],
      [
        {
          id: "c1p3",
          tipo: "pregunta",
          titulo:
            "When an unexpected situation arises, how does each of you tend to react?",
          nota: [
            "Perhaps one of you needs to solve it right away, while the other prefers to pause and think. Knowing how you respond will help us accompany you with greater sensitivity and calm.",
          ],
        },
        {
          id: "c1p4",
          tipo: "pregunta",
          titulo:
            "What small, everyday moment do you feel best captures who you are as a couple?",
          nota: [
            "It could be a routine, an activity you enjoy, a recurring conversation, or something simple that always makes you feel close.",
          ],
        },
      ],
      [
        {
          id: "c1p5",
          tipo: "pregunta",
          titulo:
            "In this final stretch before the wedding, what do you need from each other to keep enjoying the process?",
          nota: [
            "It could be patience, time, communication, trust, space, or simply remembering together why you began building this celebration.",
          ],
        },
        {
          id: "c1p6",
          tipo: "pregunta",
          titulo:
            "When your wedding day arrives, how would you like to feel knowing everything is in our hands?",
          nota: [
            "Think of the feeling you want to hold onto: calm, freedom, excitement, trust, or the chance to be fully present.",
          ],
        },
      ],
      [
        {
          id: "c1p7",
          tipo: "pregunta",
          titulo:
            "Is there anything about you that you feel is important for us to know, so we can accompany you better?",
          nota: [
            "It could be a worry, a particular way of communicating, something that makes you feel safe, or any personal detail that helps us better care for your experience.",
          ],
        },
      ],
    ],
  },
  {
    num: 2,
    titulo: "The Story You've Built",
    frases: [
      "Before reaching this moment, there were conversations, decisions, and small steps that are also part of your wedding's story.",
    ],
    intro: [
      "The celebration now taking shape began long before choosing a venue or hiring a vendor. It began with an idea, with what you both imagined when you decided to marry, and with every choice you made along the way.",
      "In these pages we want to know how the project we're now receiving was born, and what it has meant to you to build it together.",
    ],
    paginas: [
      [
        {
          id: "c2p1",
          tipo: "pregunta",
          titulo:
            "When you first began imagining your wedding, what was the first idea you both agreed on?",
          nota: [
            "It may have been a feeling, a place, a way of celebrating, or something you knew from the start had to be part of that day.",
          ],
        },
        {
          id: "c2p2",
          tipo: "pregunta",
          titulo:
            "Looking at everything you've built so far, which decision do you feel best represents the two of you?",
          nota: [
            "It doesn't have to be the most important or the most visible. Think of the choice that, when you see it, makes you feel this wedding truly speaks of you.",
          ],
        },
      ],
      [
        {
          id: "c2p3",
          tipo: "pregunta",
          titulo:
            "Which part of the planning have you especially enjoyed together?",
          nota: [
            "It could be visiting venues, imagining the design, choosing the music, tasting the menu, or simply making time to talk about what each of you hopes for the wedding.",
          ],
        },
        {
          id: "c2p4",
          tipo: "pregunta",
          titulo:
            "Which decision was the hardest to make, and what finally helped you resolve it?",
          nota: [
            "We're not judging whether it was right or wrong. We want to understand what mattered to you as you found a solution.",
          ],
        },
      ],
      [
        {
          id: "c2p5",
          tipo: "pregunta",
          titulo:
            "After all the road you've traveled, what are you especially proud of when you look at the wedding you've built?",
          nota: [
            "It could be a decision, the way you worked together, something you resolved, or the intention you managed to hold onto throughout the process.",
          ],
        },
        {
          id: "c2p6",
          tipo: "pregunta",
          titulo:
            "If you could go back to the moment you started planning, what would you like to say to those two people who were just beginning to imagine their wedding?",
          nota: [
            "Think of what you learned, what you now know, and how you'd like to remember this stage once it's all over.",
          ],
        },
      ],
    ],
  },
  {
    num: 3,
    titulo: "What You've Imagined",
    frases: [
      "After so many months of making decisions, the moment comes to remember how you wish to live everything you've built.",
    ],
    intro: [
      "Behind every choice there's an intention: an emotion you want to feel, a moment you look forward to, or a particular way of living the celebration.",
      "Before reviewing how the wedding is organized, we want to understand how you imagine it, and what would need to remain present for the day to feel truly yours.",
    ],
    paginas: [
      [
        {
          id: "c3p1",
          tipo: "pregunta",
          titulo:
            "When you think of your wedding day, what is the first image that comes to mind?",
          nota: [
            "It could be a moment, a person, an emotion, a space, or a simple scene you've imagined many times during the planning.",
          ],
        },
        {
          id: "c3p2",
          tipo: "pregunta",
          titulo: "Which moment are you most looking forward to?",
          nota: [
            "It could be while getting ready, when you see each other for the first time, during the ceremony, entering the celebration, or an instant that holds special meaning for you alone.",
          ],
        },
      ],
      [
        {
          id: "c3p3",
          tipo: "pregunta",
          titulo: "How would you like to feel during your wedding day?",
          nota: [
            "Think beyond the natural emotion of the moment. We'd like to know what feeling you want to hold onto while everything happens around you.",
          ],
        },
        {
          id: "c3p4",
          tipo: "pregunta",
          titulo:
            "Is there a detail, decision, or moment that might seem small, but holds special meaning for you?",
          nota: [
            "It could be a song, a tradition, a photograph, a few words, an object, or anything we should recognize and care for during the day.",
          ],
        },
      ],
      [
        {
          id: "c3p5",
          tipo: "pregunta",
          titulo:
            "Is there a moment you'd like to live more intimately, without feeling you must move straight on to what comes next?",
          nota: [
            "We want to identify the instants that need room to be enjoyed calmly, so the pace of the wedding doesn't rush them by.",
          ],
        },
      ],
    ],
  },
  {
    num: 4,
    titulo: "The People",
    frases: [
      "A wedding gathers many people, but some presences carry a meaning that goes far beyond being invited.",
    ],
    intro: [
      "During the celebration there will be embraces, encounters, and moments that may last only minutes, but that you'll remember for many years.",
      "Before reviewing seating, responsibilities, or roles, we want to know the people who hold an especially important place in your story, and understand which moments you wish to share with them.",
    ],
    paginas: [
      [
        {
          id: "c4p1",
          tipo: "pregunta",
          titulo:
            "Who are the people whose presence will make your wedding day feel complete?",
          nota: [
            "They may be family, friends, or people who have accompanied you through important moments. Tell us who they are and what they mean to you.",
          ],
        },
        {
          id: "c4p2",
          tipo: "pregunta",
          titulo:
            "Who do you want to share the moments before the ceremony with?",
          nota: [
            "Think of the people you'd like nearby while getting ready, and the atmosphere you want to live during those hours.",
          ],
        },
      ],
      [
        {
          id: "c4p3",
          tipo: "pregunta",
          titulo:
            "Is there someone with whom you hope to share an especially meaningful moment during the wedding?",
          nota: [
            "It could be an embrace, a few words, a photograph, a dance, or simply a few minutes together you'd like to protect within the pace of the celebration.",
          ],
        },
      ],
      [
        {
          id: "c4p4",
          tipo: "pregunta",
          titulo:
            "Is there someone who, though no longer able to be there in person, you'd like to remember or feel close that day?",
          nota: [
            "It may be a person, a pet, or someone who left an important mark on your lives. We'd like to understand what place you'd like to give them within the celebration.",
          ],
        },
      ],
      [
        {
          id: "c4p5",
          tipo: "pregunta",
          titulo:
            "Every family has its own stories and relationships. Is there a dynamic you feel is important for us to know, so we can accompany you with greater sensitivity?",
          nota: [
            "You don't need to share more than you're comfortable with. We only want to know what can help us protect your peace of mind and avoid uncomfortable situations during the day.",
          ],
        },
      ],
      [
        {
          id: "c4p6",
          tipo: "pregunta",
          titulo:
            "When you picture all those people gathered together, what would you like to thank them for?",
          nota: [
            "You don't need to write a speech. Simply think of what you feel knowing they'll be there, accompanying you in this moment.",
          ],
        },
      ],
    ],
  },
  {
    num: 5,
    titulo: "What Matters Most",
    frases: [
      "When a day is full of moments, being clear about what truly matters lets you protect what shouldn't be lost.",
    ],
    intro: [
      "During the wedding, many things will be happening at once. Some will follow exactly the path you imagined, and others may need to adjust naturally.",
      "Before we enter the operational side, we want to recognize what must stay at the center so that, even amid schedules and decisions, the celebration keeps feeling deeply yours.",
    ],
    paginas: [
      [
        {
          id: "c5p1",
          tipo: "pregunta",
          titulo:
            "If we could protect one single thing above all else during your wedding, what would it be?",
          nota: [
            "It could be your peace of mind, the ceremony, time with the people you love, enjoying every moment, or any intention that, for you, represents the heart of the day.",
          ],
        },
        {
          id: "c5p2",
          tipo: "pregunta",
          titulo:
            "What would need to be present for you to look at your wedding and feel it truly represents you?",
          nota: [
            "Don't think only of visible elements. It could be an emotion, a way of being together, a tradition, or the way you want to feel side by side.",
          ],
        },
      ],
      [
        {
          id: "c5p3",
          tipo: "pregunta",
          titulo:
            "Is there something you wouldn't want the pace of the wedding to keep you from enjoying?",
          nota: [
            "It could be sitting down to dinner, talking with certain people, taking in the finished space, dancing together, or simply pausing for a few minutes to take in what you're living.",
          ],
        },
        {
          id: "c5p4",
          tipo: "pregunta",
          titulo:
            "If a small adjustment became necessary during the day, where would you feel you could be most flexible?",
          nota: [
            "We're not trying to anticipate problems, but to understand which elements could adapt without altering the essence of the celebration.",
          ],
        },
      ],
      [
        {
          id: "c5e1",
          tipo: "frase",
          lead: ["Complete the following sentence together:"],
          titulo: "No matter what happens that day, we want to remember that…",
          nota: [
            "Think of what you'd like to keep in mind when the emotion, the timing, and all the moments of the wedding begin to unfold.",
          ],
        },
      ],
    ],
  },
  {
    num: 6,
    titulo: "Being Present",
    frases: [
      "After so many months building this day, the moment will come to stop organizing it and simply begin to live it.",
    ],
    intro: [
      "Throughout the planning you've kept watch over decisions, conversations, and details that slowly gave shape to your wedding.",
      "When the day finally arrives, we want to understand what you need in order to let go of that responsibility, trust everything you've built, and allow yourselves to be fully present.",
    ],
    paginas: [
      [
        {
          id: "c6p1",
          tipo: "pregunta",
          titulo:
            "When you say you want to enjoy your wedding, how do you imagine that will actually look?",
          nota: [
            "Perhaps it means talking without rushing, dancing without watching the clock, sitting down to dinner, embracing your important people, or simply pausing to take in everything that's happening.",
          ],
        },
        {
          id: "c6p2",
          tipo: "pregunta",
          titulo:
            "After being so involved in the planning, is there a responsibility you feel might be hard to leave in other hands?",
          nota: [
            "We don't want you to step away from something you consider important. We want to recognize what you'll need to release with greater trust when the day comes.",
          ],
        },
      ],
      [
        {
          id: "c6p3",
          tipo: "pregunta",
          titulo:
            "What would help you feel at ease during the hours before the wedding?",
          nota: [
            "It could be starting the day unhurried, being with certain people, having moments of quiet, or knowing there's no decision left to make.",
          ],
        },
        {
          id: "c6p4",
          tipo: "pregunta",
          titulo:
            "If you need our attention during the celebration, how would you like us to approach you?",
          nota: [
            "Perhaps you'd rather only hear about what truly needs your decision, or feel accompanied in a close, discreet way. It will help us to know what makes you most comfortable.",
          ],
        },
      ],
      [
        {
          id: "c6p5",
          tipo: "pregunta",
          titulo:
            "Is there something you'd like to stop carrying from the moment your wedding begins?",
          nota: [
            "It could be a worry, an expectation, the need to supervise, or any responsibility you want to leave behind so you can live the day fully.",
          ],
        },
      ],
      [
        {
          id: "c6e1",
          tipo: "frase",
          lead: ["Complete the following sentence together:"],
          titulo: "On our wedding day, we give ourselves permission to…",
          nota: [
            "Think of what you want to allow yourselves to live after all the road you've traveled: to enjoy, to trust, to be moved, to pause, to celebrate, or simply to be together.",
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
    servicio: "PAHTIĀ · Day-of Coordination",
    marca: "Clhei Floral Styling & Events",
    firma: "Tania Castorena",
    slug: "pahtia",
    etiqueta: "PAHTIĀ",
  },
  instrucciones: {
    titulo: "Before you begin",
    parrafos: [
      "This notebook is meant to be answered together.",
      "You don't need to finish it in one sitting or find perfect answers. You can pause, talk, remember everything you've built, and return to these pages whenever you like.",
      "Answer it together. Take breaks, tell each other stories, and enjoy this chance to look at your wedding beyond to-dos and decisions.",
    ],
    notaDigital:
      "Your answers save themselves as you write — a small “Saved” will appear above each time it happens. You can close this page and come back whenever you like: the notebook will be waiting right where you left it. Just keep in mind it lives in this browser; if you begin on the computer, continue there.",
  },
  cartaBienvenida: {
    parrafos: [
      "If this notebook has reached you, it means we're beginning a new stage on the road to your wedding.",
      "Over the past months you've made decisions, chosen people, imagined moments, and slowly built a celebration that already has a story of its own. Now it's our turn to know it, understand it, and accompany you so that everything you've prepared can be lived with the calm it deserves.",
      "Before we talk about schedules, vendors, or to-dos, we want to pause and get to know you.",
      "We want to discover what is truly important to you, which moments you most want to protect, who is an essential part of this day, and how you hope to feel when it finally arrives.",
      "These pages will let us see your wedding through your eyes and understand not only how it's organized, but why each decision holds its place within it.",
      "Answer them together. Take breaks, tell each other stories, remember how it all began, and enjoy this chance to look again at the celebration you've built.",
      "We'll return to these pages throughout the coordination whenever we need to remember what must remain at the heart of every decision.",
      "Thank you for trusting us to receive your project, care for everything you've built, and accompany you through the final part of this road.",
    ],
    despedida: "With love,",
  },
  cartaCierre: {
    titulo: "Now You Only Have to Live It",
    parrafos: [
      "If you've made it here, you've also reached a very special moment on the road.",
      "Over the past months you imagined, chose, resolved, and built a celebration full of decisions that speak of you. In these pages you let us know everything behind that day: the people you love, the moments you await, the details you wish to care for, and the way you want to feel when it finally arrives.",
      "From now on, a different stage begins.",
      "Little by little we'll receive everything you've built, understand each decision, and prepare the way so that, when the wedding arrives, you no longer have to hold it up.",
      "It won't be a time to check to-dos, anticipate what's next, or watch over every move.",
      "It will be a time to trust.",
      "To look around, embrace the people you love, let yourselves be surprised by everything you imagined, and allow yourselves to live the day without feeling you have to direct it.",
      "We'll return to these pages whenever we need to remember what is truly important to you and what we must protect while it all unfolds.",
      "Thank you for entrusting us with a celebration that already holds such an important part of your story.",
      "Now all that remains is to accompany you so you can live it fully.",
    ],
    despedida: "With love,",
  },
  fraseFinal:
    "Everything you built is about to become a day that, at last, you can simply live.",
  capitulos: CAPITULOS_EN,
  totalCampos: TOTAL_CAMPOS,
};
