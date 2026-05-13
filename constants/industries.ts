import {
  Heart,
  Church,
  Building2,
  Briefcase,
  MapPin,
  Server,
  Shield,
  Network,
  Phone,
  Camera,
  Search,
  Monitor,
  CreditCard,
  HardDrive,
} from "lucide-react";

export const industries = [
  {
    id: "smb",
    icon: Building2,
    name: "Small & Medium Size Businesses",
    description:
      "Growing businesses need IT systems that keep pace with their ambitions — without the overhead of an enterprise IT department. AsmaTec delivers managed IT support, cybersecurity, and infrastructure planning tailored for teams of 10 to 200 employees, helping you stay productive, secure, and ready to scale.",
    services: [
      "Managed IT support & help desk",
      "Cybersecurity & threat protection",
      "Network infrastructure design",
      "Workstation and device management",
      "Vendor and platform selection",
      "Scalable systems for growing teams",
      "Business continuity & backup planning",
    ],
    outcomes: [
      "Reduced downtime and faster issue resolution",
      "Scalable infrastructure that grows with your team",
      "Fewer costly technology mistakes",
    ],
  },
  {
    id: "professional",
    icon: Briefcase,
    name: "Professional Offices",
    description:
      "Law firms, accounting practices, consulting firms, and other professional service organizations depend on secure, always-on technology for client work, compliance, and daily operations. AsmaTec provides the reliability and security these environments demand, with hands-on support and strategic planning.",
    services: [
      "Reliable managed IT support",
      "Secure networking & VPN access",
      "Cybersecurity & compliance support",
      "Communications & phone systems",
      "Hardware and software planning",
      "Uptime optimization & monitoring",
    ],
    outcomes: [
      "Uninterrupted client service with minimal downtime",
      "Compliance-ready security and data handling",
      "Optimized systems for professional workflows",
    ],
  },
  {
    id: "multi-site",
    icon: MapPin,
    name: "Multi-Site & Growing Organizations",
    description:
      "Expanding across locations introduces complexity — from standardizing infrastructure and networking to coordinating vendor relationships and maintaining consistent security. AsmaTec helps multi-site organizations design unified, scalable technology environments that work reliably across every facility.",
    services: [
      "Standardized infrastructure across locations",
      "Multi-location networking & connectivity",
      "Centralized IT support & monitoring",
      "Communications system coordination",
      "Access control across facilities",
      "Scalable systems planning",
      "Vendor coordination & management",
    ],
    outcomes: [
      "Consistent technology experience across all sites",
      "Centralized visibility and faster support response",
      "Simplified vendor management and procurement",
    ],
  },
  {
    id: "community-religious",
    icon: Church,
    name: "Community & Religious Organizations",
    description:
      "Community centers, houses of worship, and faith-based organizations face unique challenges — from managing AV systems and streaming infrastructure to coordinating volunteer access and securing facilities. AsmaTec provides practical, easy-to-use technology solutions that respect operational simplicity while meeting modern security and connectivity expectations.",
    services: [
      "AV and network coordination",
      "Donation and payment systems",
      "Access control & facility security",
      "Communications & intercom systems",
      "Wi-Fi and network infrastructure",
      "Volunteer and staff operational support",
      "Practical, user-friendly system design",
    ],
    outcomes: [
      "Seamless AV and streaming for services and events",
      "Simplified access management for staff and volunteers",
      "Dependable Wi-Fi across facilities and gathering spaces",
    ],
  },
  {
    id: "nonprofits",
    icon: Heart,
    name: "Nonprofits",
    description:
      "Nonprofit organizations need technology that is reliable, budget-conscious, and aligned with mission-critical operations like fundraising, donor management, and community engagement. AsmaTec understands the operational realities of nonprofit work — from grant reporting to donation processing — and helps organizations deploy systems that are practical, maintainable, and built to serve their mission.",
    services: [
      "Donation management system planning",
      "Donation kiosks & payment workflow design",
      "Vendor and software evaluation",
      "Network and device setup",
      "Communications systems",
      "Cybersecurity & data protection",
      "Operational workflow optimization",
    ],
    outcomes: [
      "Reliable donation processing with fewer disruptions",
      "Better-fit software chosen with budget in mind",
      "Secure donor data and compliance-ready systems",
    ],
  },
];

export const coreServices = [
  { icon: Server, label: "Managed IT Services" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Network, label: "Network Infrastructure" },
  { icon: Phone, label: "Communications Systems" },
  { icon: Camera, label: "Access Control" },
  { icon: Search, label: "Technology Consulting" },
  { icon: Monitor, label: "Vendor & Software Selection" },
  { icon: CreditCard, label: "Donation System Planning" },
  { icon: HardDrive, label: "Hardware & Platform Advisory" },
];

export const trustPoints = [
  "Practical recommendations — not generic upsells",
  "Hands-on implementation awareness",
  "Support for both strategy and deployment",
  "Experience with nonprofits and operationally complex environments",
  "Focus on reliability, usability, and long-term fit",
];
