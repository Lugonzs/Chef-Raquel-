import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Finalizá tu compra · Chef Raquel" };

const WHATSAPP = "https://wa.me/50670108482";

// Carrito de ejemplo (los 3 tipos de item). En producción viene del estado del carrito.
const CART = [
  { photo: "tteokbokki.jpg", name: "Tteokbokki", badge: "PRESENCIAL", badgeClass: "badge-presencial", price: "₡35.000", qty: 1 },
  { photo: "bibimbap.jpg", name: "Bibimbap", badge: "EN LÍNEA", badgeClass: "badge-online", price: "₡12.600", qty: 1 },
  { photo: "kimchi.jpg", name: "Kimchi Tradicional", badge: "PRODUCTO", badgeClass: "badge-producto", price: "₡13.000", qty: 2 },
];

const PAYMENTS = [
  { name: "SINPE Móvil", desc: "Pago inmediato · Costa Rica", selected: true },
  { name: "Transferencia en colones", desc: "BAC San José", selected: false },
  { name: "Transferencia en dólares", desc: "Para México y El Salvador", selected: false },
  { name: "PayPal", desc: "Internacional", selected: false },
];

export default function CheckoutPage() {
  return (
    <>
      <Navbar active="Tienda" cartCount={3} />

      <section className="container-px pt-10">
        <h1 className="font-display font-black text-4xl md:text-5xl">Finalizá tu compra.</h1>
        <p className="mt-2 text-ink/65">Revisá tu pedido y elegí cómo pagar. Pago seguro.</p>
      </section>

      <div className="container-px grid gap-10 py-8 pb-24 lg:grid-cols-[1fr_412px] items-start">
        {/* Izquierda: carrito + datos */}
        <div className="space-y-8">
          <div className="card p-7">
            <h2 className="font-display font-semibold text-2xl">Tu pedido ({CART.length})</h2>
            <ul className="mt-4 divide-y divide-border">
              {CART.map((it) => (
                <li key={it.name} className="flex items-center gap-4 py-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    <Image src={`/photos/dishes/${it.photo}`} alt={it.name} fill className="object-cover" sizes="64px" />
                  </div>
                  <div className="flex-1">
                    <span className={it.badgeClass}>{it.badge}</span>
                    <p className="font-display font-semibold text-lg text-brown">{it.name}</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-pill bg-cream px-3 py-1.5 text-brown">
                    <span className="font-bold">–</span>
                    <span className="font-bold">{it.qty}</span>
                    <span className="font-bold">+</span>
                  </div>
                  <span className="w-24 text-right font-display font-semibold text-terracotta">{it.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-7">
            <h2 className="font-display font-semibold text-2xl">Tus datos</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="Nombre completo" ph="Tu nombre" />
              <Field label="WhatsApp" ph="+506 …" />
              <Field label="Correo (acceso a clases en línea)" ph="tucorreo@email.com" />
              <Field label="País" ph="Costa Rica / México / El Salvador" />
            </div>
            <div className="mt-4">
              <Field label="Dirección de envío (para productos)" ph="Provincia, cantón, señas exactas" />
            </div>
            <p className="mt-3 text-[13px] font-semibold text-green-dark">
              Las clases en línea llegan a tu correo · los productos se envían a tu dirección.
            </p>
          </div>
        </div>

        {/* Derecha: resumen + pago */}
        <aside className="space-y-5 lg:sticky lg:top-24">
          <div className="card p-7">
            <h2 className="font-display font-semibold text-2xl">Resumen</h2>
            <Row label="Clases (2)" value="₡47.600" />
            <Row label="Productos (2)" value="₡13.000" />
            <Row label="Envío" value="₡2.500" />
            <div className="my-2 border-t border-border" />
            <div className="flex items-center justify-between">
              <span className="font-bold text-brown">Total</span>
              <span className="font-display font-semibold text-2xl text-terracotta">₡63.100</span>
            </div>
          </div>

          <div className="card p-7">
            <h2 className="font-display font-semibold text-2xl">Cómo pagar</h2>
            <p className="mt-1 text-[13px] text-ink/65">
              Elegí un método, hacé el pago y enviános el comprobante por WhatsApp
              con tu nombre y lo que compraste.
            </p>
            <div className="mt-3 space-y-2.5">
              {PAYMENTS.map((p) => (
                <div
                  key={p.name}
                  className={`flex items-center gap-3 rounded-md border px-4 py-3 ${
                    p.selected ? "border-2 border-terracotta bg-cream" : "border-border bg-white"
                  }`}
                >
                  <span className={`grid h-5 w-5 place-items-center rounded-pill border-2 ${p.selected ? "border-terracotta" : "border-ink/30"}`}>
                    {p.selected && <span className="h-2.5 w-2.5 rounded-pill bg-terracotta" />}
                  </span>
                  <div>
                    <p className="font-bold text-[15px] text-brown">{p.name}</p>
                    <p className="text-xs text-ink/55">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Datos para el pago */}
            <div className="mt-4 rounded-md bg-green-dark p-4 text-cream">
              <p className="kicker text-green-light">DATOS PARA EL PAGO</p>
              <dl className="mt-2 space-y-1 text-[13px]">
                <DataRow k="SINPE Móvil" v="7010-8482" />
                <DataRow k="Titular" v="Raquel Chang Kim" />
                <DataRow k="BAC · Cuenta" v="906518527" />
                <DataRow k="IBAN" v="CR65010200009065185277" />
              </dl>
            </div>

            <a href={WHATSAPP} className="btn-whatsapp btn-block mt-4">
              Enviar comprobante por WhatsApp
            </a>
            <p className="mt-3 text-center text-xs text-ink/60">
              Confirmamos tu cupo / acceso apenas recibimos el comprobante.
            </p>
          </div>
          <Link href="/tienda" className="block text-center text-sm font-bold text-ink/70 hover:text-terracotta">
            ‹ Seguir comprando
          </Link>
        </aside>
      </div>

      <Footer />
    </>
  );
}

function Field({ label, ph }: { label: string; ph: string }) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <input className="field" placeholder={ph} />
    </label>
  );
}
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-3 flex items-center justify-between text-[15px]">
      <span className="text-ink/70">{label}</span>
      <span className="font-bold text-brown">{value}</span>
    </div>
  );
}
function DataRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-cream/70">{k}</dt>
      <dd className="font-bold">{v}</dd>
    </div>
  );
}
