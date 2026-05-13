import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="bg-[#0A1A2F] text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {/* Column 1: App Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tighter">AsmaTec</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Secure, reliable IT infrastructure solutions for growing
                businesses across New York, New Jersey, and Pennsylvania.
              </p>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">
                Services
              </h4>
              <ul className="space-y-4">
                {[
                  { label: "Managed IT Services", path: "/managed-it" },
                  { label: "Cybersecurity", path: "/cybersecurity" },
                  { label: "Network Infrastructure", path: "/network" },
                  { label: "Backup & Recovery", path: "/services" },
                  { label: "CCTV & Access Control", path: "/services" },
                ].map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">
                Company
              </h4>
              <ul className="space-y-4">
                {[
                  { label: "About Us", path: "/about" },
                  { label: "Case Studies", path: "/case-study" },
                  { label: "Contact", path: "/contact" },
                  { label: "Terms & Conditions", path: "/terms" },
                  { label: "Privacy Policy", path: "/privacy" },
                ].map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">
                Contact
              </h4>
              <ul className="space-y-5">
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone className="h-4 w-4 shrink-0 text-[#1E81EF]" />
                  <a
                    href="tel:+15169534567"
                    className="hover:text-white transition-colors"
                  >
                    +1 516-953-4567
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail className="h-4 w-4 shrink-0 text-[#1E81EF]" />
                  <a
                    href="mailto:info@asmatec.com"
                    className="hover:text-white transition-colors"
                  >
                    info@asmatec.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400 leading-tight">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[#1E81EF]" />
                  <span>New York, NJ & PA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 mt-20 pt-10 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} AsmaTec. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
