
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  FileUser,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

import { site } from "@/data/site";
import { useTheme } from "@/components/ThemeProvider";

// Navigation dans l'ordre des sections du portfolio
const navigation = [
  { label: "À propos", href: "/#apropos" },
  { label: "Expertises", href: "/#expertises" },
  { label: "Expériences", href: "/#experiences" },
  { label: "Projets", href: "/#projets" },
  { label: "Formation", href: "/#formation" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="site-container nav-shell">

        {/* Logo et nom */}
        <Link
          href="/"
          className="brand"
          onClick={closeMenu}
          aria-label="Accueil du portfolio"
        >
          <span className="brand-symbol">
            {site.initials}
            <span>.</span>
          </span>

          <span className="brand-name">
            {site.name}
            <small>Data Engineering & Software Engineering</small>
          </span>
        </Link>

        {/* Navigation ordinateur */}
        <nav
          className="nav-desktop"
          aria-label="Navigation principale"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions à droite */}
        <div className="nav-right">

          {/* Changer le thème */}
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-button theme-button"
            aria-label={
              theme === "dark"
                ? "Activer le thème clair"
                : "Activer le thème sombre"
            }
            title="Changer le thème"
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* CV français et anglais */}
          <Link
            href="/cv"
            className="nav-resume"
            onClick={closeMenu}
          >
            <FileUser size={16} />
            Mon CV
          </Link>

          {/* Contact */}
          <Link
            href="/#contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Contact
            <ArrowUpRight size={16} />
          </Link>

          {/* Bouton menu mobile */}
          <button
            type="button"
            className="icon-button menu-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={
              isOpen ? "Fermer le menu" : "Ouvrir le menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Navigation mobile */}
      {isOpen && (
        <nav
          id="mobile-nav"
          className="nav-mobile"
          aria-label="Navigation mobile"
        >
          {[
            ...navigation,
            {
              label: "CV français & anglais",
              href: "/cv",
            },
            {
              label: "Contact",
              href: "/#contact",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
              <ArrowUpRight size={17} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
