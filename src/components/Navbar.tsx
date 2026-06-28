"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/clases", label: "Clases presenciales" },
  { href: "/tienda", label: "Tienda" },
  { href: "/#contacto", label: "Contacto" },
];

interface NavbarProps {
  /** "transparent" para superponer sobre el hero con foto; "solid" para páginas internas. */
  variant?: "transparent" | "solid";
  active?: string;
  cartCount?: number;
}

export default function Navbar({
  variant = "solid",
  active,
  cartCount = 0,
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const onDark = variant === "transparent";
  const textColor = onDark ? "text-cream" : "text-ink";
  const logoColor = onDark ? "text-cream" : "text-terracotta";

  return (
    <header
      className={`${
        onDark ? "absolute top-0 inset-x-0 z-30 bg-transparent" : "sticky top-0 z-30 bg-cream/95 backdrop-blur"
      }`}
    >
      <nav className="container-px flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className={`font-display font-black text-2xl ${logoColor}`}
        >
          chef raquel.
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-body text-[15px] ${
                active === l.label
                  ? "text-terracotta font-bold"
                  : `${textColor} font-semibold hover:text-terracotta`
              }`}
            >
              {l.label}
            </Link>
          ))}
          <CartButton count={cartCount} onDark={onDark} />
          <Link href="/clases" className="btn-primary btn-sm">
            Reservar
          </Link>
        </div>

        {/* Mobile toggles */}
        <div className="flex md:hidden items-center gap-4">
          <CartButton count={cartCount} onDark={onDark} />
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className={textColor}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-border container-px py-4 flex flex-col gap-3">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body font-semibold text-ink py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/clases" className="btn-primary btn-block mt-2">
            Reservar
          </Link>
        </div>
      )}
    </header>
  );
}

function CartButton({ count, onDark }: { count: number; onDark: boolean }) {
  return (
    <Link href="/checkout" aria-label="Carrito" className="relative">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={onDark ? "text-cream" : "text-brown"}
      >
        <path
          d="M3 4h2l2.4 12.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L21 8H6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="20" r="1.4" fill="currentColor" />
        <circle cx="18" cy="20" r="1.4" fill="currentColor" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-1.5 -right-2 grid h-[18px] min-w-[18px] place-items-center rounded-pill bg-terracotta px-1 text-[11px] font-bold text-cream">
          {count}
        </span>
      )}
    </Link>
  );
}
