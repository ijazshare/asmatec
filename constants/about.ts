import { Target, Compass, MapPin, Award, LucideIcon } from "lucide-react";

export interface AboutSection {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const aboutSections: AboutSection[] = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "AsmaTec provides secure and reliable IT infrastructure solutions that help businesses operate efficiently and safely. We believe every business deserves enterprise-level IT, regardless of size.",
  },
  {
    icon: Compass,
    title: "Our Approach",
    desc: "We take a proactive, partnership-driven approach to IT management. Rather than waiting for problems, we prevent them through continuous monitoring, regular maintenance, and strategic planning.",
  },
  {
    icon: MapPin,
    title: "Service Areas",
    desc: "We proudly serve businesses across New York, New Jersey, and Pennsylvania. Our team of certified engineers is strategically located to provide rapid on-site support when you need it.",
  },
  {
    icon: Award,
    title: "Why Businesses Trust Us",
    desc: "With deep expertise in managed IT services, cybersecurity, and network infrastructure, we have built a strong reputation for delivering dependable and forward-thinking technology solutions.Over the years, businesses across a wide range of industries have placed their trust in us to keep their systems secure, efficient, and resilient in an ever-evolving digital landscape.",
  },
];
