import { redirect } from "next/navigation";

/** La raíz redirige al primer cuaderno (ver next.config.ts como respaldo). */
export default function Home() {
  redirect("/yolotzin");
}
