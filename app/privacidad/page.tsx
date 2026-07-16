import type { Metadata } from "next";
import { SITE } from "@/lib/site";

/**
 * Aviso de privacidad de los Cuadernos Clhei (LFPDPPP).
 * Punto de recolección: los cuadernos. Se enlaza discretamente desde la página
 * de entrega. Bilingüe por ?lang=en. Fuera de buscadores como el resto del sitio.
 *
 * Contenido legal mínimo, en la voz de Clhei (cálida, honesta, sin jerga). Si
 * cambian los datos que se recaban o los encargados (Resend/Upstash/Vercel),
 * actualizar aquí y en la skill clhei-seguridad-datos.
 */
export const metadata: Metadata = {
  title: "Aviso de privacidad",
  robots: { index: false, follow: false },
};

type Bloque = { titulo: string; parrafos: string[] };

const ES: { intro: string; bloques: Bloque[]; actualizado: string } = {
  intro:
    "En Clhei cuidamos lo que nos cuentan con el mismo cuidado con el que cuidamos una boda. Este cuaderno recoge cosas íntimas de ustedes; por eso les explicamos, con claridad, qué hacemos con sus respuestas.",
  bloques: [
    {
      titulo: "Quién es responsable de sus datos",
      parrafos: [
        `Clhei Floral Styling & Events, estudio de diseño floral y wedding planning con sede en Atlixco, Puebla, México. Pueden contactarnos en ${SITE.email} o por WhatsApp para cualquier tema de privacidad.`,
      ],
    },
    {
      titulo: "Qué datos recabamos",
      parrafos: [
        "Los nombres de la pareja y las respuestas que escriben en el cuaderno. Si nos piden un enlace para continuar desde otro dispositivo, también su correo electrónico.",
        "Algunas preguntas tocan temas sensibles —la ausencia de un ser querido, dinámicas familiares, lo que desean proteger de su día—. Ustedes eligen qué responder y qué dejar en blanco: ninguna respuesta es obligatoria.",
      ],
    },
    {
      titulo: "Para qué los usamos",
      parrafos: [
        "Únicamente para entender su historia y preparar su boda con sensibilidad: leer el cuaderno antes de nuestra siguiente conversación y guiar el diseño, la coordinación y la atención a ustedes. No usamos sus respuestas para publicidad ni las compartimos con nadie ajeno a su proyecto.",
      ],
    },
    {
      titulo: "Con quién se comparten",
      parrafos: [
        "Con nadie fuera de Clhei, salvo los servicios técnicos que hacen funcionar el cuaderno y que actúan solo por instrucción nuestra: el correo llega por Resend, el guardado del avance vive en Upstash, y el sitio se aloja en Vercel. Estos proveedores procesan los datos en servidores que pueden estar fuera de México, bajo sus propias medidas de seguridad.",
      ],
    },
    {
      titulo: "Cuánto tiempo los guardamos",
      parrafos: [
        "Las respuestas que nos envían llegan a nuestro correo y las conservamos mientras dure su proyecto con nosotros. El borrador que se guarda para continuar en otro dispositivo se elimina solo después de un tiempo prudente (alrededor de diez meses, el trayecto de la contratación a la boda). Pueden pedirnos que lo borremos antes cuando quieran.",
      ],
    },
    {
      titulo: "Sus derechos",
      parrafos: [
        `En cualquier momento pueden pedirnos acceder a sus datos, corregirlos, cancelarlos u oponerse a que los usemos (derechos ARCO). Basta escribirnos a ${SITE.email}. Les responderemos y lo resolveremos con gusto — es su historia, y les pertenece.`,
      ],
    },
    {
      titulo: "Cómo protegemos el cuaderno",
      parrafos: [
        "El cuaderno vive fuera de los buscadores; su enlace se comparte solo con ustedes. La conexión va cifrada y sus respuestas viajan directo a Clhei. No pedimos contraseñas ni datos de pago en este espacio.",
      ],
    },
  ],
  actualizado: "Última actualización: julio de 2026.",
};

const EN: { intro: string; bloques: Bloque[]; actualizado: string } = {
  intro:
    "At Clhei we care for what you tell us with the same care we give a wedding. This notebook gathers intimate things about you, so we want to explain clearly what we do with your answers.",
  bloques: [
    {
      titulo: "Who is responsible for your data",
      parrafos: [
        `Clhei Floral Styling & Events, a floral design and wedding planning studio based in Atlixco, Puebla, Mexico. You can reach us at ${SITE.email} or on WhatsApp for anything related to privacy.`,
      ],
    },
    {
      titulo: "What data we collect",
      parrafos: [
        "The couple's names and the answers you write in the notebook. If you ask for a link to continue from another device, your email address as well.",
        "Some questions touch on sensitive matters — the absence of a loved one, family dynamics, what you wish to protect about your day. You choose what to answer and what to leave blank: no answer is required.",
      ],
    },
    {
      titulo: "What we use them for",
      parrafos: [
        "Only to understand your story and prepare your wedding with sensitivity: to read the notebook before our next conversation and guide the design, coordination and care we give you. We do not use your answers for advertising, nor share them with anyone outside your project.",
      ],
    },
    {
      titulo: "Who they are shared with",
      parrafos: [
        "With no one outside Clhei, except the technical services that make the notebook work and that act only on our instruction: email is delivered through Resend, saved progress lives in Upstash, and the site is hosted on Vercel. These providers process data on servers that may be outside Mexico, under their own security measures.",
      ],
    },
    {
      titulo: "How long we keep them",
      parrafos: [
        "The answers you send reach our inbox and we keep them for as long as your project with us lasts. The draft saved to continue on another device is deleted on its own after a reasonable time (around ten months, the journey from booking to the wedding). You can ask us to delete it sooner whenever you wish.",
      ],
    },
    {
      titulo: "Your rights",
      parrafos: [
        `At any time you may ask us to access, correct, cancel or object to our use of your data. Just write to ${SITE.email}. We'll respond and sort it out gladly — it's your story, and it belongs to you.`,
      ],
    },
    {
      titulo: "How we protect the notebook",
      parrafos: [
        "The notebook lives outside search engines; its link is shared only with you. The connection is encrypted and your answers travel straight to Clhei. We never ask for passwords or payment details in this space.",
      ],
    },
  ],
  actualizado: "Last updated: July 2026.",
};

export default async function PaginaPrivacidad({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const en = lang === "en";
  const t = en ? EN : ES;

  return (
    <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
      <p className="kicker text-gold-deep/80">
        {SITE.name.toUpperCase()}
      </p>
      <h1 className="font-display mt-6 text-3xl tracking-[0.05em] text-charcoal md:text-4xl">
        {en ? "Privacy notice" : "Aviso de privacidad"}
      </h1>
      <p className="mt-8 max-w-prose text-[1.05rem] leading-[1.9] text-charcoal/90">
        {t.intro}
      </p>

      <div className="mt-14 space-y-12">
        {t.bloques.map((b) => (
          <section key={b.titulo}>
            <h2 className="font-display text-xl tracking-[0.04em] text-charcoal">
              {b.titulo}
            </h2>
            <div className="mt-4 space-y-4">
              {b.parrafos.map((p) => (
                <p
                  key={p}
                  className="max-w-prose leading-[1.9] text-ink-soft"
                >
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-16 text-[0.8rem] tracking-[0.15em] text-ink-faint">
        {t.actualizado}
      </p>
    </div>
  );
}
