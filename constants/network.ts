import { Cable, Wifi, Router, ArrowUpCircle, LucideIcon } from "lucide-react";

export interface NetworkFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const networkFeatures: NetworkFeature[] = [
  {
    icon: Cable,
    title: "Structured Cabling",
    desc: "Professional cabling infrastructure design and installation for reliable, high-speed connectivity throughout your office.",
  },
  {
    icon: Wifi,
    title: "WiFi Deployment",
    desc: "Enterprise-grade wireless networks with full coverage, fast speeds, and secure access for all your devices and guests.",
  },
  {
    icon: Router,
    title: "Routers & Firewalls",
    desc: "Next-generation firewall configuration and router management to protect your network perimeter and control traffic.",
  },
  {
    icon: ArrowUpCircle,
    title: "Network Upgrades",
    desc: "Modernize your network infrastructure with the latest technology for better performance, security, and scalability.",
  },
];

export const networkSolutions: string[] = [
  "Cat6/Cat6a cabling",
  "Enterprise WiFi access points",
  "Firewall configuration",
  "VPN setup & management",
  "Network segmentation",
  "Bandwidth optimization",
  "Network monitoring",
  "Switch & router management",
];
