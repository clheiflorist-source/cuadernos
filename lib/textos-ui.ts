/**
 * Textos de interfaz del cuaderno, en español e inglés.
 *
 * Es el "mobiliario" del cuaderno: botones, marcadores, mensajes de estado
 * y el índice — todo lo que NO es contenido editorial de un cuaderno en
 * particular. Vive una sola vez y lo comparten los cuatro cuadernos
 * (Yolotzin, OLLIN, PAHTIĀ, DÁNGO). El contenido editorial (preguntas,
 * cartas, capítulos) va aparte, en cada app/<slug>/contenido.ts.
 *
 * El español reproduce al pie de la letra las cadenas originales del
 * cuaderno, de modo que un cuaderno sin traducción al inglés se ve idéntico
 * a como estaba. El inglés es la voz de Tania en inglés: cálida, editorial,
 * sin lenguaje de formulario.
 */

export type Lang = "es" | "en";

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
