import {
  Monitor,
  Headphones,
  Settings,
  Zap,
  Shield,
  HardDrive,
  Users,
  LucideIcon,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface CostEstimate {
  category: string;
  items: string[];
}

export interface PricingExample {
  title: string;
  users: string;
  complexity: string;
  total: string;
  breakdown: string[];
}

export const features: Feature[] = [
  {
    icon: Monitor,
    title: "Network Management",
    desc: "24/7 monitoring and maintenance of your network including routers, switches, and firewalls. Regular health reports give you insights into performance and help anticipate challenges before they arise.",
  },
  {
    icon: Headphones,
    title: "IT Support",
    desc: "Immediate remote assistance via phone, chat, or remote desktop — plus onsite support for complex issues like hardware failures. Scheduled visits provide routine maintenance and training.",
  },
  {
    icon: Settings,
    title: "Patch Management",
    desc: "Automated patch management ensures your systems are always up-to-date with the latest security fixes and performance improvements, reducing vulnerability exposure.",
  },
  {
    icon: Zap,
    title: "System Optimization",
    desc: "Regular performance assessments and optimization to keep your infrastructure running at peak efficiency, maximizing your technology investment.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    desc: "Multi-layered threat protection including defense against viruses, malware, and cyber-attacks. Firewall & content filtering blocks unauthorized access, with compliance consulting for HIPAA or SOC2.",
  },
  {
    icon: HardDrive,
    title: "Backup & Disaster Recovery",
    desc: "Automatic, secure backups of critical data with disaster recovery planning and fast recovery options to maintain business continuity and minimize downtime during emergencies.",
  },
  {
    icon: Users,
    title: "IT Consulting & Compliance",
    desc: "Strategic IT planning aligned with your business goals, compliance support to navigate regulatory requirements, and co-managed solutions that collaborate with your internal team.",
  },
];

export const includedItems: string[] = [
  "24/7 system monitoring",
  "Help desk & remote support",
  "Automated patch management",
  "Vendor management",
  "Monthly performance reports",
  "Asset inventory management",
  "User onboarding/offboarding",
  "Technology roadmap planning",
  "Firewall & content filtering",
  "Compliance consulting",
  "Backup management",
  "Scheduled onsite visits",
];

export const costEstimates: CostEstimate[] = [
  {
    category: "Network & IT Support",
    items: [
      "Unlimited Remote Support: $70/user/mo",
      "Remote + Onsite Support: $90–$130/user/mo",
      "Hourly Onsite Support: $150/hour",
    ],
  },
  {
    category: "Cybersecurity",
    items: [
      "Basic Security: $15/user/mo",
      "Advanced Security: $25–$40/user/mo",
    ],
  },
  {
    category: "Backup & Recovery",
    items: [
      "Standard Backup: $29/server/mo + $19/TB",
      "BDR Solutions: $150–$1,000/mo",
    ],
  },
  {
    category: "IT Consulting",
    items: ["Custom pricing tailored to your needs"],
  },
];

export const pricingExamples: PricingExample[] = [
  {
    title: "Consulting Firm",
    users: "25 Users",
    complexity: "Simple Network",
    total: "$2,200/mo",
    breakdown: [
      "Remote Support: 25 × $70 = $1,750",
      "Basic Security: 25 × $15 = $375",
      "Office 365 Backup: 25 × $3 = $75",
    ],
  },
  {
    title: "Engineering Firm",
    users: "70 Users",
    complexity: "High Complexity",
    total: "$9,951/mo",
    breakdown: [
      "Remote + Onsite: 70 × $110 = $7,700",
      "Advanced Security: 70 × $25 = $1,750",
      "BDR System: $501 (8 Servers + 8TB)",
    ],
  },
];
