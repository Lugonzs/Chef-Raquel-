import Link from "next/link";

const WHATSAPP = "https://wa.me/50670108482";
const INSTAGRAM = "https://www.instagram.com/chefraquelchangkim/";
const TIKTOK = "https://www.tiktok.com/@chefraquelchangkim";

const KO_PHRASES = [
  { text: "한국음식", tone: "light" }, // comida coreana
  { text: "맛있다", tone: "terra" }, // delicioso
  { text: "사랑해요", tone: "light" }, // te amo
  { text: "감사합니다", tone: "terra" }, // gracias
];

export default function Footer() {
  return (
    <footer className="bg-green-dark text-cream">
      <div className="container-px pt-16 pb-10">
        {/* Columnas */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <FooterCol
            title="EXPLORAR"
            links={[
              ["Inicio", "/"],
              ["Sobre Raquel", "/#sobre"],
              ["Clases presenciales", "/clases"],
              ["Clases en línea", "/tienda"],
            ]}
          />
          <FooterCol
            title="TIENDA"
            links={[
              ["Kimchi artesanal", "/tienda"],
              ["Kits de cocina", "/tienda"],
              ["Merch", "/tienda"],
              ["Ver carrito", "/checkout"],
            ]}
          />
          <FooterCol
            title="SEGUINOS"
            links={[
              ["Instagram", INSTAGRAM],
              ["TikTok", TIKTOK],
              ["WhatsApp", WHATSAPP],
            ]}
            external
          />
          <div className="max-w-xs">
            <p className="kicker text-[#F2A06B]">LISTA DE DIFUSIÓN</p>
            <p className="mt-3 text-sm text-cream/80 leading-relaxed">
              Unite al WhatsApp y recibí cada mes las clases nuevas y cupos
              disponibles. Sin spam.
            </p>
            <a href={WHATSAPP} className="btn-whatsapp btn-sm mt-4 inline-flex">
              Unirme al WhatsApp
            </a>
          </div>
        </div>

        {/* Wordmark gigante + frases coreanas */}
        <div className="relative mt-16 mb-6 select-none">
          <h2 className="font-display font-black leading-none text-cream text-[18vw] md:text-[160px]">
            chef raquel.
          </h2>
          <div className="pointer-events-none absolute inset-0">
            {KO_PHRASES.map((p, i) => (
              <span
                key={p.text}
                className={`font-ko absolute rounded-pill px-4 py-2 text-xl md:text-2xl shadow-card ${
                  p.tone === "light"
                    ? "bg-green-light text-green-dark"
                    : "bg-terracotta text-cream"
                }`}
                style={KO_POS[i]}
              >
                {p.text}
              </span>
            ))}
          </div>
        </div>

        {/* Barra inferior */}
        <div className="flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/50 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Chef Raquel Chang Kim · Todos los derechos reservados</span>
          <span>Diseño y desarrollo por Blank Studio</span>
        </div>
      </div>
    </footer>
  );
}

const KO_POS: React.CSSProperties[] = [
  { left: "6%", top: "38%", transform: "rotate(-8deg)" },
  { left: "34%", top: "8%", transform: "rotate(6deg)" },
  { left: "44%", top: "74%", transform: "rotate(-5deg)" },
  { left: "66%", top: "46%", transform: "rotate(4deg)" },
];

function FooterCol({
  title,
  links,
  external,
}: {
  title: string;
  links: [string, string][];
  external?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3.5">
      <p className="kicker text-[#F2A06B]">{title}</p>
      {links.map(([label, href]) =>
        external ? (
          <a
            key={label}
            href={href}
            className="font-semibold text-cream/85 hover:text-cream"
          >
            {label}
          </a>
        ) : (
          <Link
            key={label}
            href={href}
            className="font-semibold text-cream/85 hover:text-cream"
          >
            {label}
          </Link>
        )
      )}
    </div>
  );
}
