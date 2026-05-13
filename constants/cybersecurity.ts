import { Shield, Bug, Eye, FileText, LucideIcon } from "lucide-react";

export interface CyberFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const cyberFeatures: CyberFeature[] = [
  {
    icon: Shield,
    title: "Endpoint Protection",
    desc: "Advanced endpoint detection and response (EDR) to protect every device on your network from malware, ransomware, and zero-day threats.",
  },
  {
    icon: Bug,
    title: "Ransomware Protection",
    desc: "Multi-layered defenses specifically designed to prevent, detect, and recover from ransomware attacks before they encrypt your data.",
  },
  {
    icon: Eye,
    title: "Monitoring & Threat Detection",
    desc: "Continuous security monitoring with real-time threat detection and automated incident response to neutralize threats quickly.",
  },
  {
    icon: FileText,
    title: "Security Policies",
    desc: "Custom security policies, employee training programs, and compliance frameworks tailored to your industry requirements.",
  },
];

export const securityStack: string[] = [
  "Endpoint detection & response",
  "Email security & filtering",
  "Multi-factor authentication",
  "Security awareness training",
  "Vulnerability assessments",
  "Dark web monitoring",
  "Incident response planning",
  "Compliance reporting",
];
