"use client";

import { useState } from "react";
import type { CookingClass, Product } from "@/lib/types";
import ClassCard from "./ClassCard";
import ProductCard from "./ProductCard";

type Filter = "todo" | "online" | "kimchi" | "kits" | "merch";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "todo", label: "Todo" },
  { id: "online", label: "Clases en línea" },
  { id: "kimchi", label: "Kimchi" },
  { id: "kits", label: "Kits de cocina" },
  { id: "merch", label: "Merch" },
];

export default function TiendaClient({
  classes,
  products,
}: {
  classes: CookingClass[];
  products: Product[];
}) {
  const [filter, setFilter] = useState<Filter>("todo");
  const show = (f: Filter) => filter === "todo" || filter === f;
  const byCat = (c: string) => products.filter((p) => p.category === c);

  return (
    <>
      {/* Filtros */}
      <div className="container-px sticky top-[72px] z-20 bg-cream/95 py-4 backdrop-blur">
        <div className="flex gap-3 overflow-x-auto pb-1">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`whitespace-nowrap rounded-pill px-5 py-2.5 font-bold text-sm transition-colors ${
                filter === f.id
                  ? "bg-terracotta text-cream"
                  : "bg-white text-brown border border-border hover:border-terracotta"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container-px pb-16 md:pb-24">
        {show("online") && (
          <Category title="Clases en línea" note="Acceso inmediato tras la compra · $25 c/u">
            {classes.map((c) => (
              <ClassCard key={c.id} cls={c} />
            ))}
          </Category>
        )}
        {show("kimchi") && (
          <Category title="Kimchi" note="fermentado natural · envíos a todo el país">
            {byCat("kimchi").map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </Category>
        )}
        {show("kits") && (
          <Category title="Kits de cocina" note="todo listo para cocinar en casa">
            {byCat("kits").map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </Category>
        )}
        {show("merch") && (
          <Category title="Merch" note="llevá la marca con vos">
            {byCat("merch").map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </Category>
        )}
      </div>
    </>
  );
}

function Category({
  title,
  note,
  children,
}: {
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-10">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <h2 className="font-display font-black text-3xl md:text-4xl">{title}</h2>
        <p className="font-semibold text-sm text-terracotta">{note}</p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {children}
      </div>
    </section>
  );
}
