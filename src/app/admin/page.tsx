"use client";

import Image from "next/image";
import { useState } from "react";
import { classes, getWeekendClasses, dishPhoto, formatCRC } from "@/lib/data";

const MENU = [
  "Clases presenciales",
  "Clases en línea",
  "Productos del mercadito",
  "Calendario",
  "Reservas y pagos",
];

/**
 * Panel interno (solo desktop). Demo de la interfaz que usa la chef para
 * administrar clases y productos. Las acciones (guardar, eliminar) se conectan
 * al backend/SQL en una fase posterior.
 */
export default function AdminPage() {
  const [active, setActive] = useState(MENU[0]);
  const [editing, setEditing] = useState<null | string>(null);
  const weekend = getWeekendClasses();

  return (
    <div className="flex min-h-screen bg-[#F5F1E0]">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col bg-green-dark p-6 md:flex">
        <p className="font-display font-black text-2xl text-cream">chef raquel.</p>
        <p className="kicker mt-1 text-green-light">PANEL INTERNO</p>
        <nav className="mt-8 space-y-2">
          {MENU.map((m) => (
            <button
              key={m}
              onClick={() => setActive(m)}
              className={`block w-full rounded-md px-3.5 py-3 text-left text-sm transition-colors ${
                active === m ? "bg-terracotta font-bold text-cream" : "font-semibold text-cream/70 hover:text-cream"
              }`}
            >
              {m}
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex-1">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white px-10 py-5">
          <p className="font-display font-semibold text-2xl text-brown">¡Hola, Raquel! 👋</p>
          <div className="flex items-center gap-4">
            <button className="btn-primary btn-sm">Guardar cambios</button>
            <span className="h-10 w-10 rounded-pill bg-green-light" />
          </div>
        </header>

        {/* Main */}
        <main className="p-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display font-black text-3xl">{active}</h1>
              <p className="mt-1 text-sm text-ink/60">
                Agregá, editá o eliminá. Cambiá precio, fecha, cupos y ubicación.
              </p>
            </div>
            <button onClick={() => setEditing("Nueva clase")} className="btn-primary">
              + Agregar clase
            </button>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <thead className="text-[11px] uppercase tracking-wide text-ink/45">
                <tr className="border-b border-border">
                  <th className="p-4"></th>
                  <th className="p-4">Clase</th>
                  <th className="p-4">Precio</th>
                  <th className="p-4">Próxima fecha</th>
                  <th className="p-4">Cupos</th>
                  <th className="p-4">Ubicación</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {weekend.map(({ cls, slot, spotsLeft, dateLabel }, i) => {
                  const photo = dishPhoto(cls.photo);
                  return (
                    <tr key={cls.id} className="border-b border-border last:border-0">
                      <td className="p-4">
                        <div className="relative h-11 w-11 overflow-hidden rounded-md bg-cream">
                          {photo && <Image src={photo} alt="" fill className="object-cover" sizes="44px" />}
                        </div>
                      </td>
                      <td className="p-4 font-bold text-brown">{cls.name}</td>
                      <td className="p-4 font-bold text-terracotta">{formatCRC(cls.price_presencial_crc)}</td>
                      <td className="p-4 text-ink">{dateLabel} · {slot.time}</td>
                      <td className="p-4 text-ink">{spotsLeft}/10</td>
                      <td className="p-4 text-ink">{i === 3 ? "Cartago" : cls.location}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <button onClick={() => setEditing(cls.name)} className="rounded-pill bg-cream px-3.5 py-2 text-xs font-bold text-brown">
                            Editar
                          </button>
                          <button aria-label="Eliminar" className="grid h-8 w-8 place-items-center rounded-pill bg-[#F4E3DA] text-error">✕</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {editing && <EditModal title={editing} onClose={() => setEditing(null)} />}
    </div>
  );
}

function EditModal({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[#1a0d05]/45 p-4">
      <div className="w-full max-w-xl rounded-xl bg-white p-9 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-2xl text-brown">
            {title === "Nueva clase" ? "Nueva clase" : "Editar clase"}
          </h2>
          <button onClick={onClose} aria-label="Cerrar" className="text-2xl text-brown">✕</button>
        </div>

        <div className="mt-5 flex items-center gap-4">
          <div className="h-28 w-28 rounded-md bg-cream" />
          <div>
            <button className="btn-secondary btn-sm">↑ Cambiar foto</button>
            <p className="mt-2 text-xs text-ink/50">JPG o PNG · máx 5MB</p>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <F label="Nombre de la clase" v={title === "Nueva clase" ? "" : title} />
          <div className="grid grid-cols-2 gap-4">
            <F label="Precio (₡)" v="35.000" />
            <F label="Cupos máximos" v="10" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <F label="Fecha" v="Sáb 4 Jul 2026" />
            <F label="Hora" v="10:00 AM" />
          </div>
          <F label="Ubicación" v="Heredia centro" />
          <label className="flex items-center justify-between">
            <span className="font-semibold text-sm text-ink">Ofrecer también como clase en línea ($25)</span>
            <span className="relative h-7 w-12 rounded-pill bg-terracotta">
              <span className="absolute right-1 top-1 h-5 w-5 rounded-pill bg-white" />
            </span>
          </label>
        </div>

        <div className="mt-7 flex justify-end gap-3">
          <button onClick={onClose} className="btn-secondary">Cancelar</button>
          <button onClick={onClose} className="btn-primary">Guardar clase</button>
        </div>
      </div>
    </div>
  );
}

function F({ label, v }: { label: string; v: string }) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <input className="field" defaultValue={v} />
    </label>
  );
}
