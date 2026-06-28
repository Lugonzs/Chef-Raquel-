import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import { products } from "@/lib/data";
import { productPhoto, formatCRC } from "@/lib/data";

const WHATSAPP = "https://wa.me/50670108482";

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative h-[88vh] min-h-[640px] w-full overflow-hidden">
        <Image
          src="/photos/dishes/kimchi.jpg"
          alt="Kimchi artesanal"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown/55 via-brown/20 to-[#1a0d05]/95" />
        <Navbar variant="transparent" active="Inicio" />
        <div className="container-px absolute bottom-16 left-0">
          <span className="pill bg-cream text-terracotta">
            한식 · COCINA COREANA AUTÉNTICA · COSTA RICA
          </span>
          <h1 className="mt-4 max-w-3xl font-display font-black leading-[0.95] text-cream text-6xl md:text-[7rem]">
            Del corazón de Corea a tu mesa.
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/clases" className="btn-primary btn-lg">
              Ver clases
            </Link>
            <Link href="/tienda" className="btn-lg border-[1.5px] border-cream/80 bg-cream/10 text-cream rounded-pill inline-flex items-center justify-center font-bold">
              Ir a la tienda
            </Link>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ---------- SOBRE RAQUEL ---------- */}
      <section id="sobre" className="container-px section-py">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-accent text-4xl text-terracotta">Hola, soy</p>
            <h2 className="mt-2 font-display font-black text-5xl md:text-6xl leading-[0.96]">
              Raquel Chang Kim.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/90">
              Crecí entre las recetas de mi abuela en Corea y la calidez de Costa
              Rica. En cada clase abro la puerta a una cultura, un sabor y una
              forma de cuidar a quienes amás.
            </p>
            <div className="mt-8 flex gap-10">
              {[
                ["+500", "estudiantes"],
                ["10+", "años enseñando"],
                ["100%", "auténtico"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display font-semibold text-4xl text-terracotta">
                    {n}
                  </p>
                  <p className="text-sm text-ink/60">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-5 -bottom-5 hidden h-full w-full rounded-xl bg-green-dark md:block" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image src="/photos/dishes/gyoza.jpg" alt="Plato coreano" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CLASES TEASER ---------- */}
      <section className="container-px pb-12 md:pb-24">
        <h2 className="text-center font-display font-black text-4xl md:text-5xl">
          Cociná junto a Raquel.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <TeaserCard
            href="/clases"
            photo="/photos/dishes/kimchi-jjigae.jpg"
            kicker="PRESENCIALES · HEREDIA"
            title="Clases presenciales"
            desc="Cupos de 10 personas, cada fin de semana. Cociná, comé y llevate la receta."
          />
          <TeaserCard
            href="/tienda"
            photo="/photos/dishes/bibimbap.jpg"
            kicker="EN LÍNEA · $25"
            title="Clases en línea"
            desc="Comprá tu clase, recibí el acceso por correo y cociná cuando querás."
          />
        </div>
      </section>

      {/* ---------- MERCADITO TEASER ---------- */}
      <section className="bg-green-dark text-cream section-py">
        <div className="container-px">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-accent text-3xl text-[#F2A06B]">directo de su cocina</p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-cream">
                El mercadito.
              </h2>
            </div>
            <Link href="/tienda" className="btn-secondary border-cream text-cream hover:bg-cream hover:text-green-dark">
              Ver toda la tienda
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.slice(0, 4).map((p) => {
              const photo = productPhoto(p.photo);
              return (
                <article key={p.id} className="card text-ink">
                  <div className="relative aspect-square bg-cream">
                    {photo && <Image src={photo} alt={p.name} fill className="object-cover" sizes="25vw" />}
                    {p.badge && <span className="badge-presencial absolute left-3 top-3">{p.badge}</span>}
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-semibold text-lg text-brown">{p.name}</h3>
                    <p className="text-xs text-ink/60">{p.desc}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-display font-semibold text-lg text-terracotta">{formatCRC(p.price_crc)}</span>
                      <button className="btn-primary btn-sm">Pedir</button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- REDES ---------- */}
      <section className="container-px section-py text-center">
        <p className="font-accent text-3xl text-terracotta">seguinos en redes</p>
        <h2 className="font-display font-black text-4xl md:text-5xl">La cocina, en vivo.</h2>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {["bibimbap", "tteokbokki", "japchae", "kimbap"].map((d) => (
            <div key={d} className="relative aspect-square overflow-hidden rounded-md">
              <Image src={`/photos/dishes/${d}.jpg`} alt={d} fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <a href="https://www.instagram.com/chefraquelchangkim/" className="btn-primary">Seguir en Instagram</a>
          <a href="https://www.tiktok.com/@chefraquelchangkim" className="btn bg-brown text-cream">Ver TikTok</a>
        </div>
      </section>

      {/* ---------- CONTACTO ---------- */}
      <section id="contacto" className="container-px pb-12 md:pb-24">
        <div className="rounded-xl bg-terracotta p-8 md:p-14">
          <p className="font-accent text-3xl text-cream">hablemos</p>
          <h2 className="mt-1 font-display font-black text-4xl md:text-5xl text-cream">
            ¿Cocinamos juntos?
          </h2>
          <p className="mt-3 max-w-md text-cream/90">
            Reservas, pedidos y dudas las vemos directo por WhatsApp. Te
            respondemos rapidito.
          </p>
          <a href={WHATSAPP} className="btn-whatsapp btn-lg mt-6 inline-flex">
            Escribinos por WhatsApp
          </a>
          <p className="mt-4 text-sm text-cream/85">
            Todos los días · 9:00 AM – 6:00 PM (hora CR) · Heredia, Costa Rica
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

function TeaserCard({
  href,
  photo,
  kicker,
  title,
  desc,
}: {
  href: string;
  photo: string;
  kicker: string;
  title: string;
  desc: string;
}) {
  return (
    <Link href={href} className="group relative block h-72 overflow-hidden rounded-xl">
      <Image src={photo} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d05]/90 via-[#1a0d05]/30 to-transparent" />
      <div className="absolute bottom-0 p-6">
        <p className="kicker text-[#F2A06B]">{kicker}</p>
        <h3 className="mt-1 font-display font-semibold text-3xl text-cream">{title}</h3>
        <p className="mt-1 max-w-sm text-sm text-cream/85">{desc}</p>
      </div>
    </Link>
  );
}
