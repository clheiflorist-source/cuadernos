/**
 * EL PRIMER CAPÍTULO · DÁNGO · Edición v2 (experimento premium bilingüe)
 *
 * Versión de evaluación: mismo recorrido y mismas preguntas que /dango,
 * con dos diferencias — un tratamiento visual más exclusivo (encuadernación
 * nocturna con oro estampado en portada y página final) y conmutador de
 * idioma español ⇄ inglés. Si no convence, se elimina esta carpeta y la
 * versión publicada queda tal cual.
 *
 * El ESPAÑOL se reusa íntegro del cuaderno publicado (una sola fuente de
 * verdad); solo cambia el slug para que borradores y respaldos no se
 * mezclen con los de la v1. El INGLÉS es traducción fiel del maestro:
 * misma estructura, mismos ids de campo (las respuestas sobreviven al
 * cambio de idioma), voz cálida y editorial, sin clichés de agencia de
 * viajes (§4.3 del maestro aplica también en inglés).
 */

import type { Capitulo, ContenidoCuaderno } from "@/lib/cuaderno-tipos";
import { CONTENIDO as CONTENIDO_DANGO } from "../dango/contenido";

export type Lang = "es" | "en";

/* ============ Español: la fuente publicada, con slug propio ============ */

export const CONTENIDO_ES: ContenidoCuaderno = {
  ...CONTENIDO_DANGO,
  libro: {
    ...CONTENIDO_DANGO.libro,
    slug: "dango-v2",
  },
};

/* ============ Inglés: traducción fiel del maestro ============ */

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
    slug: "dango-v2",
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
  totalCampos: CONTENIDO_ES.totalCampos,
};

/* ============ Textos de interfaz (mobiliario del cuaderno) ============ */

export type TextosUI = {
  abrir: string;
  siguiente: string;
  anterior: string;
  indice: string;
  cerrar: string;
  ariaCerrarIndice: string;
  guardado: string;
  capitulo: string;
  portadaIdx: string;
  cartaIdx: string;
  epilogo: string;
  entregaIdx: string;
  avance: (hechas: number, total: number) => string;
  placeholderRespuesta: string;
  ariaRespuesta: string;
  placeholderNombres: string;
  ariaNombres: string;
  avisoAlmacen: string;
  retomado: string;
  contKicker: string;
  contInvitacion: string;
  contPlaceholder: string;
  contAria: string;
  contEnviar: string;
  contPreparando: string;
  contError: string;
  contCorreo: string;
  contEnlaceListo: string;
  copiar: string;
  copiado: string;
  contActivo: string;
  listoTitulo: string;
  listoCuerpo: string;
  llevan: (r: number, t: number) => string;
  sinPrisa: string;
  antesNombres: string;
  enviar: string;
  enviando: string;
  errorEnvio: string;
  errorWhats: string;
  errorEnvioFin: string;
  finalTitulo: string;
  finalGracias: (nombres: string) => string;
  ariaIdioma: string;
};

export const TEXTOS_UI: Record<Lang, TextosUI> = {
  es: {
    abrir: "Abrir el cuaderno",
    siguiente: "Siguiente →",
    anterior: "← Anterior",
    indice: "Índice",
    cerrar: "Cerrar",
    ariaCerrarIndice: "Cerrar índice",
    guardado: "Guardado",
    capitulo: "Capítulo",
    portadaIdx: "Portada",
    cartaIdx: "Carta de bienvenida",
    epilogo: "Epílogo",
    entregaIdx: "La entrega",
    avance: (h, t) => `${h} de ${t}`,
    placeholderRespuesta: "Escriban aquí…",
    ariaRespuesta: "Su respuesta",
    placeholderNombres: "Escriban aquí sus nombres",
    ariaNombres: "Sus nombres",
    avisoAlmacen:
      "En este navegador no pudimos activar el guardado automático. Les sugerimos responder el cuaderno en una sola visita, o conservar sus respuestas aparte antes de cerrar la página.",
    retomado: "Bienvenidos de vuelta — retomamos donde lo dejaron.",
    contKicker: "Para llevarlo a donde vayan",
    contInvitacion:
      "Si quieren continuar el cuaderno desde otro dispositivo, escriban su correo y les enviamos un enlace que guarda su avance.",
    contPlaceholder: "su@correo.com",
    contAria: "Su correo",
    contEnviar: "Enviar enlace",
    contPreparando: "Preparando…",
    contError:
      "No pudimos preparar el enlace en este momento. Pueden seguir respondiendo con tranquilidad e intentarlo más tarde.",
    contCorreo:
      "Les enviamos el enlace a su correo. Ábranlo en cualquier dispositivo y el cuaderno continuará donde lo dejaron.",
    contEnlaceListo:
      "Su enlace quedó listo. Guárdenlo con cariño — es la llave de su cuaderno en cualquier dispositivo:",
    copiar: "Copiar",
    copiado: "Copiado",
    contActivo:
      "Su enlace de continuidad está activo: el avance de este cuaderno viaja con él.",
    listoTitulo: "Su cuaderno está listo",
    listoCuerpo:
      "Cuando sientan que estas páginas dicen lo que querían decir, envíenlas. Las leeremos con calma, más de una vez, antes de dar juntos el siguiente paso.",
    llevan: (r, t) =>
      `Llevan ${r} de ${t} respuestas. Si quieren volver a alguna página, el índice los lleva.`,
    sinPrisa:
      "Aún hay páginas esperándolos: pueden volver a ellas primero o enviarlo así — el cuaderno no tiene prisa.",
    antesNombres: "Antes de enviarlo, escriban sus nombres en la portada:",
    enviar: "Enviar nuestro cuaderno a Clhei",
    enviando: "Enviando su cuaderno…",
    errorEnvio:
      "Algo no permitió que el cuaderno llegara. Sus respuestas siguen guardadas: intenten de nuevo en un momento o ",
    errorWhats: "escríbannos por WhatsApp",
    errorEnvioFin: " y lo resolvemos juntos.",
    finalTitulo: "Su cuaderno ya está con nosotros",
    finalGracias: (n) =>
      `Gracias${n ? `, ${n}` : ""}. Lo leeremos completo antes de nuestra siguiente conversación.`,
    ariaIdioma: "Cambiar idioma",
  },
  en: {
    abrir: "Open the notebook",
    siguiente: "Next →",
    anterior: "← Back",
    indice: "Index",
    cerrar: "Close",
    ariaCerrarIndice: "Close index",
    guardado: "Saved",
    capitulo: "Chapter",
    portadaIdx: "Cover",
    cartaIdx: "Welcome letter",
    epilogo: "Epilogue",
    entregaIdx: "The delivery",
    avance: (h, t) => `${h} of ${t}`,
    placeholderRespuesta: "Write here…",
    ariaRespuesta: "Your answer",
    placeholderNombres: "Write your names here",
    ariaNombres: "Your names",
    avisoAlmacen:
      "We couldn't turn on automatic saving in this browser. We suggest answering the notebook in a single visit, or keeping a copy of your answers before closing the page.",
    retomado: "Welcome back — we'll pick up right where you left off.",
    contKicker: "To take it wherever you go",
    contInvitacion:
      "If you'd like to continue the notebook from another device, write your email and we'll send you a link that keeps your progress.",
    contPlaceholder: "your@email.com",
    contAria: "Your email",
    contEnviar: "Send link",
    contPreparando: "Preparing…",
    contError:
      "We couldn't prepare the link just now. Keep answering with peace of mind and try again later.",
    contCorreo:
      "We've emailed you the link. Open it on any device and the notebook will continue where you left off.",
    contEnlaceListo:
      "Your link is ready. Keep it close — it's the key to your notebook on any device:",
    copiar: "Copy",
    copiado: "Copied",
    contActivo:
      "Your continuity link is active: this notebook's progress travels with it.",
    listoTitulo: "Your notebook is ready",
    listoCuerpo:
      "When you feel these pages say what you wanted to say, send them our way. We'll read them slowly, more than once, before taking the next step together.",
    llevan: (r, t) =>
      `You've written ${r} of ${t} answers. If you'd like to return to any page, the index will take you there.`,
    sinPrisa:
      "There are still pages waiting for you — you can go back to them first, or send it as it is. The notebook is in no hurry.",
    antesNombres: "Before sending it, write your names on the cover:",
    enviar: "Send our notebook to Clhei",
    enviando: "Sending your notebook…",
    errorEnvio:
      "Something kept the notebook from arriving. Your answers are safe — try again in a moment, or ",
    errorWhats: "write to us on WhatsApp",
    errorEnvioFin: " and we'll sort it out together.",
    finalTitulo: "Your notebook is with us now",
    finalGracias: (n) =>
      `Thank you${n ? `, ${n}` : ""}. We'll read every page before our next conversation.`,
    ariaIdioma: "Change language",
  },
};
