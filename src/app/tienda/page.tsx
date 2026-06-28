import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiendaClient from "@/components/TiendaClient";
import { classes, products } from "@/lib/data";

export const metadata = { title: "Tienda · Chef Raquel" };

export default function TiendaPage() {
  const onlineClasses = classes.filter((c) => c.available_online);
  return (
    <>
      <Navbar active="Tienda" cartCount={2} />
      <section className="container-px pt-14 pb-2 text-center">
        <p className="font-accent text-3xl text-terracotta">llevate Corea a tu casa</p>
        <h1 className="font-display font-black text-5xl md:text-7xl">La tienda.</h1>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">
          Clases en línea, kimchi artesanal, kits y merch. Pedidos por WhatsApp,
          envíos a todo el país.
        </p>
      </section>
      <TiendaClient classes={onlineClasses} products={products} />
      <Footer />
    </>
  );
}
