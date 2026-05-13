import {
  Server,
  Shield,
  Network,
  HardDrive,
  Camera,
  Users,
  LucideIcon,
} from "lucide-react";

export interface ServiceSection {
  icon: LucideIcon;
  title: string;
  overview: string;
  benefits: string[];
  problems: string[];
  link: string;
  cta: string;
}

export const serviceSections: ServiceSection[] = [
  {
    icon: Server,
    title: "Managed IT Services",
    overview:
      "Complete IT management including proactive network monitoring, help desk support, patch management, and system optimization. We ensure your systems are maintained, secure, and performing at their best.",
    benefits: [
      "Minimized downtime & increased productivity",
      "Predictable monthly costs",
      "Rapid issue resolution — remote & onsite",
      "Expert support on demand",
    ],
    problems: [
      "Frequent system crashes & outages",
      "No dedicated IT team",
      "Outdated technology & unpatched systems",
      "Unpredictable IT expenses",
    ],
    link: "/managed-it",
    cta: "Learn More",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    overview:
      "Multi-layered security including endpoint protection, ransomware defense, threat detection, firewall & content filtering, and compliance consulting for standards like HIPAA and SOC2.",
    benefits: [
      "Enhanced protection against cyber threats",
      "Regulatory compliance (HIPAA, SOC2)",
      "Boosted client trust & confidence",
      "Real-time threat monitoring",
    ],
    problems: [
      "Data breaches & ransomware attacks",
      "Phishing & social engineering",
      "Unpatched vulnerabilities",
      "Non-compliance penalties",
    ],
    link: "/cybersecurity",
    cta: "Learn More",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    overview:
      "End-to-end network solutions including structured cabling, WiFi deployment, firewall configuration, and network optimization for maximum performance and reliability.",
    benefits: [
      "Faster, more reliable connectivity",
      "Scalable infrastructure for growth",
      "Eliminated WiFi dead zones",
      "Enterprise-grade security",
    ],
    problems: [
      "Slow network speeds",
      "WiFi dead zones & poor coverage",
      "Outdated routers & switches",
      "Network security vulnerabilities",
    ],
    link: "/network",
    cta: "Learn More",
  },
  {
    icon: HardDrive,
    title: "Backup & Disaster Recovery",
    overview:
      "Automatic, secure backups of critical data with disaster recovery planning and fast recovery options. Maintain business continuity and minimize downtime during emergencies.",
    benefits: [
      "Business continuity during disruptions",
      "Quick recovery minimizes financial impact",
      "Data compliance & retention adherence",
      "Automated daily backups",
    ],
    problems: [
      "Data loss risk from hardware failure",
      "No backup or recovery strategy",
      "Slow recovery times after incidents",
      "Non-compliant data retention",
    ],
    link: "/services",
    cta: "Get Protected",
  },
  {
    icon: Camera,
    title: "Security Systems (CCTV & Access Control)",
    overview:
      "Professional surveillance systems, access control solutions, and physical security infrastructure for your premises with remote monitoring capabilities.",
    benefits: [
      "24/7 video surveillance",
      "Granular access management",
      "Remote monitoring from anywhere",
      "Deterrent against unauthorized access",
    ],
    problems: [
      "Unauthorized physical access",
      "No surveillance coverage",
      "Security blind spots",
      "Inability to monitor remotely",
    ],
    link: "/services",
    cta: "Secure Your Premises",
  },
  {
    icon: Users,
    title: "IT Consulting & Compliance",
    overview:
      "Expert advice on aligning IT with your business goals, navigating regulatory requirements, and co-managed solutions that work alongside your internal team for specialized support.",
    benefits: [
      "Strategic IT planning maximizes ROI",
      "Compliance assurance with regulations",
      "Scalable co-managed support",
      "Optimized technology investments",
    ],
    problems: [
      "Unclear technology roadmap",
      "Regulatory compliance gaps",
      "Overwhelmed internal IT team",
      "Wasted IT budget",
    ],
    link: "/contact",
    cta: "Get Consulting",
  },
];
