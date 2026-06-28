const ITEMS = [
  "김치 KIMCHI ARTESANAL",
  "CLASES EN VIVO",
  "BIBIMBAP",
  "한식 COCINA COREANA",
  "TTEOKBOKKI",
  "HECHO EN COSTA RICA",
  "KIMBAP",
  "CLASES EN LÍNEA",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-terracotta py-3.5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <ul key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {ITEMS.map((it) => (
              <li
                key={`${dup}-${it}`}
                className="flex items-center gap-7 px-7 font-body font-bold tracking-wide text-cream"
              >
                {it}
                <span className="h-1.5 w-1.5 rounded-pill bg-brown" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
