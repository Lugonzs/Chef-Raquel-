import Image from "next/image";
import type { Product } from "@/lib/types";
import { productPhoto, formatCRC } from "@/lib/data";
import { PhotoPlaceholder } from "./ClassCard";

export default function ProductCard({ product }: { product: Product }) {
  const photo = productPhoto(product.photo);
  return (
    <article className="card flex flex-col">
      <div className="relative aspect-[5/3] bg-cream">
        {photo ? (
          <Image
            src={photo}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width:768px) 50vw, 25vw"
          />
        ) : (
          <PhotoPlaceholder />
        )}
        {product.badge && (
          <span className="badge-presencial absolute left-3 top-3">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <h3 className="font-display font-semibold text-lg text-brown">
          {product.name}
        </h3>
        <p className="text-[13px] text-ink/60">{product.desc}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-display font-semibold text-xl text-terracotta">
            {formatCRC(product.price_crc)}
          </span>
          <button className="btn-primary btn-sm">+ Agregar</button>
        </div>
      </div>
    </article>
  );
}
