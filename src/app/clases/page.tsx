import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { classes, getWeekendClasses, dishPhoto, formatCRC } from "@/lib/data";
import { PhotoPlaceholder } from "@/components/ClassCard";

export const metadata = { title: "Clases presenciales · Chef Raquel" };

export default function ClasesPage() {
  const weekend = getWeekendClasses();
  return (
    <>
      <Navbar active="Clases presenciales" />

      {/* Header */}
      <section className="container-px pt-16 pb-8 text-center">
        <span className="pill bg-green-dark text-cream">
          EN VIVO · HEREDIA · CUPOS DE 10
        </span>
        <h1 className="mt-4 font-display font-black text-5xl md:text-7xl">
          Clases presenciales.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink/70">
          Cociná en vivo con Raquel cada fin de semana. Mesa para 10, recetas
          para toda la vida.
        </p>
        <span className="pill bg-terracotta text-cream mt-5 text-base">
          ₡35.000 por persona · ~$68
        </span>
      </section>

      {/* Este fin de semana */}
      <section className="container-px pb-12 md:pb-20">
        <div className="rounded-xl bg-white p-6 shadow-card md:p-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="kicker text-terracotta">ESTE FIN DE SEMANA</p>
              <h2 className="font-display font-black text-3xl">Las clases de este mes</h2>
            </div>
            <span className="pill bg-cream text-brown">‹ Julio 2026 ›</span>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {weekend.map(({ slot, cls, spotsLeft, dateLabel }) => {
              const photo = dishPhoto(cls.photo);
              const full = spotsLeft === 0;
              return (
                <article key={slot.code} className="overflow-hidden rounded-lg bg-cream">
                  <div className="relative h-28 w-full">
                    {photo && <Image src={photo} alt={cls.name} fill className="object-cover" sizes="50vw" />}
                    <span className="badge-online absolute left-3 top-3">
                      {dateLabel} · {slot.time}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <h3 className="font-display font-semibold text-xl text-brown">{cls.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className={full ? "badge-full" : "badge-available"}>
                        {full ? "Lleno" : `${spotsLeft} lugares`}
                      </span>
                      <Link
                        href={`/clases/${cls.slug}`}
                        className={full ? "btn bg-border text-ink/60" : "btn-primary btn-sm"}
                      >
                        {full ? "Lista de espera" : "Reservar"}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catálogo de 12 */}
      <section className="container-px pb-16 md:pb-24 text-center">
        <p className="font-accent text-3xl text-terracotta">el menú de aprendizaje</p>
        <h2 className="font-display font-black text-4xl md:text-5xl">Las 12 clases que rotamos.</h2>
        <p className="mx-auto mt-2 max-w-lg text-ink/60">
          Cada mes elegimos cuáles van al calendario. Todas ₡35.000 por persona.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {classes.map((cls) => {
            const photo = dishPhoto(cls.photo);
            return (
              <article key={cls.id} className="card flex flex-col">
                <Link href={`/clases/${cls.slug}`} className="relative block aspect-[5/3] bg-cream">
                  {photo ? (
                    <Image src={photo} alt={cls.name} fill className="object-cover" sizes="25vw" />
                  ) : (
                    <PhotoPlaceholder />
                  )}
                </Link>
                <div className="flex flex-1 flex-col gap-1 p-4">
                  <h3 className="font-display font-semibold text-xl text-brown">{cls.name}</h3>
                  <p className="font-ko text-sm text-terracotta">{cls.name_ko}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-display font-semibold text-lg text-terracotta">
                      {formatCRC(cls.price_presencial_crc)}
                    </span>
                    <Link href={`/clases/${cls.slug}`} className="btn-secondary btn-sm">
                      Ver fechas
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
