import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  classes,
  getClassBySlug,
  dishPhoto,
  formatUSD,
  formatCRC,
} from "@/lib/data";

export function generateStaticParams() {
  return classes.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cls = getClassBySlug(params.slug);
  return { title: cls ? `${cls.name} · Chef Raquel` : "Clase" };
}

const UPCOMING = [
  ["Sáb 4 Jul", "10:00 AM", "7 lugares"],
  ["Dom 5 Jul", "3:00 PM", "9 lugares"],
  ["Sáb 11 Jul", "10:00 AM", "3 lugares"],
];

export default function ClassDetailPage({ params }: { params: { slug: string } }) {
  const cls = getClassBySlug(params.slug);
  if (!cls) notFound();

  const photo = dishPhoto(cls.photo);
  const whyLearn = cls.why_learn ?? [];
  const includes = cls.includes ?? [];

  return (
    <>
      <Navbar active="Tienda" cartCount={2} />

      <div className="container-px pt-7 text-sm text-ink/60">
        <Link href="/tienda" className="hover:text-terracotta">Tienda</Link>
        {"  ›  Clases en línea  ›  "}
        <span className="text-brown">{cls.name}</span>
      </div>

      {/* Hero split */}
      <section className="container-px grid gap-12 py-6 md:grid-cols-2">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-xl bg-cream">
            {photo ? (
              <Image src={photo} alt={cls.name} fill className="object-cover" priority />
            ) : (
              <div className="grid h-full place-items-center">
                <span className="badge-highlight">FOTO PRÓXIMAMENTE</span>
              </div>
            )}
          </div>
        </div>

        <div>
          <span className="badge-highlight">CLASE EN LÍNEA · NIVEL {cls.level.toUpperCase()}</span>
          <h1 className="mt-4 font-display font-black text-5xl">{cls.name}</h1>
          <p className="font-ko text-lg text-terracotta">{cls.name_ko} · receta coreana</p>
          {cls.description && (
            <p className="mt-4 text-[17px] leading-relaxed text-ink">{cls.description}</p>
          )}

          {/* Modalidad */}
          <p className="mt-6 font-bold text-sm text-brown">Elegí tu modalidad</p>
          <div className="mt-3 space-y-3">
            <Modality
              selected
              name="En línea"
              desc="Video privado de YouTube · acceso por 3 meses"
              price={formatUSD(cls.price_online_usd)}
            />
            <Modality
              name="Presencial"
              desc={`${cls.location} · 2h · grupo de 10 · incluye almuerzo`}
              price={formatCRC(cls.price_presencial_crc)}
            />
          </div>
          <Link href="/checkout" className="btn-primary btn-lg btn-block mt-5">
            Agregar al carrito · {formatUSD(cls.price_online_usd)}
          </Link>
        </div>
      </section>

      {/* Por qué aprender + incluye */}
      <section className="container-px grid gap-10 pb-10 md:grid-cols-[1fr_400px]">
        <div>
          <h2 className="font-display font-black text-3xl md:text-4xl">
            ¿Por qué aprender esta receta?
          </h2>
          <ul className="mt-6 space-y-4">
            {whyLearn.map((w) => (
              <li key={w} className="flex items-start gap-3.5">
                <CheckIcon />
                <span className="font-semibold text-[17px] text-ink">{w}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="self-start rounded-xl bg-green-dark p-7 text-cream">
          <h3 className="font-display font-semibold text-2xl">Qué incluye</h3>
          <ul className="mt-4 space-y-3">
            {includes.map((i) => (
              <li key={i} className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-pill bg-green-light" />
                <span className="text-[15px] text-cream/90">{i}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Fechas presenciales */}
      <section className="container-px pb-16 md:pb-24">
        <h2 className="font-display font-semibold text-2xl">
          Próximas fechas presenciales · {cls.location}
        </h2>
        <div className="mt-4 flex flex-wrap gap-4">
          {UPCOMING.map(([d, t, s]) => (
            <div key={d + t} className="rounded-md border border-border bg-white px-5 py-4">
              <p className="font-bold text-brown">{d} · {t}</p>
              <p className="text-xs font-semibold text-terracotta">{s}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

function Modality({
  name,
  desc,
  price,
  selected,
}: {
  name: string;
  desc: string;
  price: string;
  selected?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-lg border px-4 py-4 ${
        selected ? "border-terracotta border-2 bg-cream" : "border-border bg-white"
      }`}
    >
      <span
        className={`grid h-5 w-5 place-items-center rounded-pill border-2 ${
          selected ? "border-terracotta" : "border-ink/30"
        }`}
      >
        {selected && <span className="h-2.5 w-2.5 rounded-pill bg-terracotta" />}
      </span>
      <div className="flex-1">
        <p className="font-bold text-brown">{name}</p>
        <p className="text-[13px] text-ink/60">{desc}</p>
      </div>
      <span className="font-display font-semibold text-xl text-terracotta">{price}</span>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <circle cx="12" cy="12" r="11" fill="#DC7739" />
      <path d="M7 12.5l3.2 3.2L17 9" stroke="#FFF0D1" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
