"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Case Study", path: "/case-study" },
  {
    label: "Services",
    path: "/services",
    dropdown: [
      { label: "Managed IT", path: "/managed-it" },
      { label: "Cybersecurity", path: "/cybersecurity" },
      { label: "Network Infrastructure", path: "/network" },
    ],
  },
  { label: "Pricing", path: "/#pricing" },
  { label: "Industries", path: "/industries" },
  { label: "About", path: "/about" },
  { label: "FAQ", path: "/faq" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e8edf2]  h-20 flex items-center">
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/Asmatec_SVG.svg"
            alt="BavLogo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2 h-full">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.path ||
              (link.dropdown &&
                link.dropdown.some((sub) => pathname === sub.path));
            return (
              <div
                key={link.label}
                className="relative group flex items-center h-full"
              >
                <Link
                  href={link.path}
                  className={`px-3.5 py-1.5 flex items-center gap-1.5 text-[15px] font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-[#eff6ff] text-[#3b82f6] font-semibold"
                      : "text-[#64748b] hover:text-[#0f2137] hover:bg-[#f8fafc]"
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown className="h-4 w-4 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>

                {link.dropdown && (
                  <div className="absolute top-full left-0 pt-0 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                    <div className="bg-white/95 border border-[#e8edf2] rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-3 min-w-[220px] overflow-hidden mt-1 backdrop-blur-xl">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          href={sub.path}
                          className={`block px-5 py-2.5 text-[14px] transition-colors ${
                            pathname === sub.path
                              ? "text-[#3b82f6] bg-[#eff6ff] font-semibold"
                              : "text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f2137]"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <Link
            href="/contact"
            className="bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 text-white text-[13px] font-semibold px-5 py-2 rounded-md transition-colors whitespace-nowrap"
          >
            Get Free Assessment
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-[#64748b]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-14 left-0 right-0 lg:hidden border-t border-[#e8edf2] bg-white shadow-lg">
          <nav className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 text-[15px] font-medium rounded-md transition-colors flex items-center justify-between ${
                    pathname === link.path
                      ? "bg-[#eff6ff] text-[#3b82f6]"
                      : "text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f2137]"
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 mt-1 mb-2 flex flex-col gap-1 border-l-2 border-[#eff6ff] ml-4">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        href={sub.path}
                        onClick={() => setMobileOpen(false)}
                        className={`px-4 py-2 text-[14px] font-medium rounded-md transition-colors ${
                          pathname === sub.path
                            ? "text-[#3b82f6]"
                            : "text-[#64748b] hover:text-[#0f2137]"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 mt-2 border-t border-[#e8edf2]">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-[#1e3a5f] text-white text-[13px] font-semibold px-5 py-3 rounded-lg"
              >
                Get Free Assessment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
