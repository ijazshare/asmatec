import { Server, Shield, Network, HardDrive, Camera } from "lucide-react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Managed IT Services",
    description:
      "Proactive monitoring, help desk support, and complete IT management for your business.",
    link: "/managed-it",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description:
      "Endpoint protection, threat detection, and comprehensive security for your organization.",
    link: "/cybersecurity",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Structured cabling, WiFi deployment, firewalls, and network optimization.",
    link: "/network",
  },
  {
    icon: HardDrive,
    title: "Backup & Disaster Recovery",
    description:
      "Automated backups, disaster recovery planning, and business continuity solutions.",
    link: "/services",
  },
  {
    icon: Camera,
    title: "CCTV & Access Control",
    description:
      "Surveillance systems, access control, and physical security solutions.",
    link: "/services",
  },
];

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const Card = ({ icon: Icon, title, description, link }: CardProps) => (
  <Link
    href={link}
    className="group flex flex-col bg-white rounded-lg border border-[#e2e8f0] p-7 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
  >
    <div className="w-10 h-10 rounded-md bg-[#dbeafe] group-hover:bg-[#3b82f6] flex items-center justify-center mb-5 transition-colors duration-300">
      <Icon
        className="h-5 w-5 text-[#3b82f6] group-hover:text-white transition-colors duration-300"
        strokeWidth={1.5}
      />
    </div>
    <h3 className="font-heading font-semibold text-[15px] text-[#1a2e4a] mb-2">
      {title}
    </h3>
    <p className="text-[13px] text-[#64748b] leading-relaxed">{description}</p>
  </Link>
);

const ServicesSection = () => {
  const top = services.slice(0, 3);
  const bottom = services.slice(3);

  return (
    <section className="py-16 md:py-24 bg-[#eef1f6]">
      <div className="container mx-auto px-6 max-w-7xl ">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[2rem] font-heading font-bold text-[#1a2e4a] mb-3">
            Our Services
          </h2>
          <p className="text-[#64748b] text-sm  mx-auto">
            Comprehensive IT solutions tailored for small and mid-sized
            businesses.
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {top.map((s) => (
            <Card key={s.title} {...s} />
          ))}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:w-2/3 lg:mx-auto">
          {bottom.map((s) => (
            <Card key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
