import Image from "next/image";
import Link from "next/link";
import type { CookingClass } from "@/lib/types";
import { dishPhoto, formatUSD } from "@/lib/data";

/** Tarjeta de clase para la tienda (modalidad en línea, $25) y catálogos. */
export default function ClassCard({ cls }: { cls: CookingClass }) {
  const photo = dishPhoto(cls.photo);
  return (
    <article className="card flex flex-col">
      <Link href={`/clases/${cls.slug}`} className="relative block aspect-[5/3] bg-cream">
        {photo ? (
          <Image src={photo} alt={cls.name} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
        ) : (
          <PhotoPlaceholder />
        )}
        <span className="badge-online absolute left-3 top-3">● EN LÍNEA</span>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <Link href={`/clases/${cls.slug}`} className="font-display font-semibold text-xl text-brown hover:text-terracotta">
            {cls.name}
          </Link>
          <p className="font-ko text-sm text-terracotta">{cls.name_ko}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-display font-semibold text-xl text-terracotta">
            {formatUSD(cls.price_online_usd)}
          </span>
          <Link href={`/clases/${cls.slug}`} className="btn-primary btn-sm">
            + Agregar
          </Link>
        </div>
      </div>
    </article>
  );
}

export function PhotoPlaceholder() {
  return (
    <div className="absolute inset-0 grid place-items-center bg-cream">
      <span className="badge-highlight">FOTO PRÓXIMAMENTE</span>
    </div>
  );
}
