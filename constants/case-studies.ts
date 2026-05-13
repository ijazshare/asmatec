import {
  Truck,
  ClipboardCheck,
  Utensils,
  Home,
  Stethoscope,
  Palette,
  Shield,
  Network,
  Cloud,
  Settings,
  Target,
  Zap,
  Layout,
  Clock,
  TrendingUp,
  DollarSign,
} from "lucide-react";

export interface Pillar {
  title: string;
  description: string;
  points: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  icon: any;
  overview: string;
  challenge: string;
  pillar1: Pillar;
  pillar2: Pillar;
  results: string[];
  stats: {
    label: string;
    value: string;
  }[];
  images: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "vehicle-repair-restoration",
    title: "Modern Solution for a Commercial Vehicle Repair Specialist",
    client: "Vehicle Repair Specialist",
    category: "Strategic Operations",
    icon: Truck,
    overview:
      "We modernized a solo mechanic's business from a stagnant, expensive legacy system to a streamlined cloud-based workflow, saving 50% in costs.",
    challenge:
      "Operationally stalled with unresponsive IT, expensive legacy software, and inefficient desktop-based workflows that hampered collaboration with bookkeepers.",
    pillar1: {
      title: "Strategic Solution Management",
      description:
        "Acting as a strategic partner to identify operational fits and cost advantages.",
      points: [
        "In-depth analysis of actual invoicing vs overhead needs",
        "Market research to identify high-value cloud-based alternatives",
        "Stakeholder coordination between client and bookkeeping contractor",
      ],
    },
    pillar2: {
      title: "Expert Implementation",
      description:
        "Executing technical transitions with zero business downtime.",
      points: [
        "Deployed temporary invoicing solutions for continuity",
        "Full migration of all historical client and financial data",
        "Comprehensive training and empowerment of the bookkeeping team",
      ],
    },
    results: [
      "Reduced software costs by approximately 50%",
      "Eliminated remote desktop hassles and bottlenecked workflows",
      "Laid foundation for full digital transformation of job tracking",
    ],
    stats: [
      { label: "Cost Saving", value: "50%" },
      { label: "Uptime", value: "100%" },
      { label: "Data Migrated", value: "12yr+" },
    ],
    images: [
      "/case-study/img-1.jpeg",
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1471&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1548&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470&auto=format&fit=crop",
    ],
  },
  {
    slug: "nonprofit-digital-transformation",
    title: "Digital Transformation for a Nonprofit Inspector Program",
    client: "Halal Food Compliance Program",
    category: "Custom Web Application",
    icon: ClipboardCheck,
    overview:
      "Successfully migrated a manual, paper-based inspection process into a sophisticated, one-click web application for maximum field efficiency.",
    challenge:
      "Cumbersome paper forms and basic digital inputs caused repetitive data entry, field errors, and massive administrative bottlenecks as the program scaled.",
    pillar1: {
      title: "Strategic Project Management",
      description:
        "Bridging the gap between community mission and technical execution.",
      points: [
        "Identified precise friction points in existing digital processes",
        "Technical vetting and management of development partners",
        "Translated abstract business needs into actionable tech requirements",
      ],
    },
    pillar2: {
      title: "Custom Development & Implementation",
      description: "Building targeted, lightweight web-apps for field speed.",
      points: [
        "Implemented 'Edit-not-Recreate' fields for repetitive data",
        "One-click submission workflow for reporting",
        "Optimized for mobile field use by inspectors",
      ],
    },
    results: [
      "Massive reduction in administrative data entry time",
      "Minimized manual input errors and data entry lag",
      "Established roadmap for automated hour-tracking and mobile app",
    ],
    stats: [
      { label: "Efficiency", value: "+300%" },
      { label: "Field Error", value: "0" },
      { label: "Time Saved", value: "20h/wk" },
    ],
    images: [
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1476&auto=format&fit=crop",
    ],
  },
  {
    slug: "restaurant-reliability",
    title: "Serving Up Reliability for a Local Restaurant",
    client: "Busy Local Restaurant",
    category: "Managed IT Services",
    icon: Utensils,
    overview:
      "Rescued a restaurant from a holiday weekend POS failure and stabilized their chaotic infrastructure into a reliable business asset.",
    challenge:
      "A critical holiday weekend network failure left POS systems offline and the previous IT provider unreachable, threatening massive revenue loss.",
    pillar1: {
      title: "Strategic Solution Management",
      description:
        "Beyond emergency fixes toward systematic root-cause resolution.",
      points: [
        "Audited poorly installed and undocumented legacy networks",
        "Diagnosed daily printer failures caused by consumer-grade power",
        "Root cause analysis for overdriven audio wiring failures",
      ],
    },
    pillar2: {
      title: "Expert Implementation",
      description: "Upgrading infrastructure to commercial-grade standards.",
      points: [
        "Complete reorganization and tagging of network closets",
        "Deployed commercial PoE adapters for stable hardware power",
        "Modernized ambiance control via IP-based streaming devices",
      ],
    },
    results: [
      "Saved critical holiday revenue through emergency response",
      "Permanently solved chronic daily hardware and printer failures",
      "Simplified staff operations via integrated iPad controls",
    ],
    stats: [
      { label: "Crisis Saved", value: "$15k+" },
      { label: "Network Uptime", value: "99.9%" },
      { label: "Tech Frustr.", value: "-90%" },
    ],
    images: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550966841-3962f33ebe44?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1548&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1470&auto=format&fit=crop",
    ],
  },
  {
    slug: "mosque-community-hub",
    title: "Building a Foundation of Technology for a Community Hub",
    client: "Philadelphia Mosque & Center",
    category: "Infrastructure & Custom Kiosks",
    icon: Home,
    overview:
      "Transformed an underperforming community hub by replacing cheap tech with professional infrastructure and custom donation systems.",
    challenge:
      "Unreliable security, expensive consumer Wi-Fi with recurring fees, and third-party donation platforms taking large cuts and complicating donor workflows.",
    pillar1: {
      title: "Strategic Solution Management",
      description: "Developing a strategic, multi-phase technology roadmap.",
      points: [
        "Identified opportunities for integrated high-quality AV",
        "Conceptualized and designed custom, DIY donation kiosks",
        "Shifted organization mindset from 'low-cost fix' to 'long-term value'",
      ],
    },
    pillar2: {
      title: "Expert Implementation",
      description: "Deploying professional-grade tech for worship and service.",
      points: [
        "Deployed commercial-grade IP camera and network backbone",
        "Implemented multi-zone sound for clear audio throughout",
        "Built and deployed streamlined fee-free donation kiosks",
      ],
    },
    results: [
      "Eliminated recurring monthly fees for basic network gear",
      "Increased donation frequency via simplified, faster user experience",
      "Established trusted advisor status for future mobile initiatives",
    ],
    stats: [
      { label: "Donation Inc", value: "45%" },
      { label: "Fees Saved", value: "100%" },
      { label: "Zones", value: "Multi" },
    ],
    images: [
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1310&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1470&auto=format&fit=crop",
    ],
  },
  {
    slug: "dental-practice-modernization",
    title: "Precision IT for a Modern Dental Practice",
    client: "Queens Dental Practice",
    category: "Managed Medical IT",
    icon: Stethoscope,
    overview:
      "Partnered for 4 years to free a high-growth dental practice from IT burdens while enabling advanced in-house manufacturing.",
    challenge:
      "Dentist jumbling patient care with manual troubleshooting of hardware, software, and integration of complex dental machinery.",
    pillar1: {
      title: "Strategic IT Management (Virtual CIO)",
      description:
        "Managing the entire tech landscape as an internal department.",
      points: [
        "Coordinated directly with specialized dental machinery vendors",
        "Enabled in-house tooth fabrication via CNC mill integration",
        "Budget-conscious planning to maximize life of safe legacy gear",
      ],
    },
    pillar2: {
      title: "Expert Technical Implementation",
      description: "Keeping medical offices modern, efficient, and secure.",
      points: [
        "Replaced bulky PCs with wall-mounted 'All-in-One' units",
        "Full network rewiring for stability and HIPAA-ready data",
        "Implemented secure remote access for travel and home support",
      ],
    },
    results: [
      "Restored 100% focus of the dentist back to patient care",
      "Achieved virtually zero downtime over a 4-year period",
      "Successfully launched new in-house manufacturing capabilities",
    ],
    stats: [
      { label: "Partnership", value: "4 Yrs" },
      { label: "Downtime", value: "0h" },
      { label: "Office Space", value: "+20%" },
    ],
    images: [
      "/case-study/img-2.jpeg",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1470&auto=format&fit=crop",
    ],
  },
  {
    slug: "art-gallery-security",
    title: "Preserving the Aesthetic for a Manhattan Art Gallery",
    client: "Manhattan Art Gallery",
    category: "Security Innovation",
    icon: Palette,
    overview:
      "Upgraded an obsolete security system in a high-traffic gallery using non-invasive technology to protect priceless art without construction.",
    challenge:
      "Obsolete 14-year-old analog system required upgrade, but structural ethernet rewiring was unfeasible due to cost and risk to delicate art.",
    pillar1: {
      title: "Strategic Solution Management",
      description: "Leveraging existing assets via constraint-based planning.",
      points: [
        "Identified HD-over-Coax technology to bypass rewiring",
        "Specified network-capable recorders for modern remote access",
        "Provided transparent cost-benefit analysis for low disruption",
      ],
    },
    pillar2: {
      title: "Expert Non-Invasive Implementation",
      description: "Delivering modern security with zero architectural impact.",
      points: [
        "Decommissioned old analog systems without invasive drilling",
        "Installed multi-megapixel HD cameras on legacy wiring",
        "Completed project with zero impact on gallery foot traffic",
      ],
    },
    results: [
      "Avoided massive expense and risk of Manhattan rewiring",
      "Achieved crystal-clear high-definition video standards",
      "Extended life of core gallery infrastructure by 10+ years",
    ],
    stats: [
      { label: "Cost Saved", value: "70%" },
      { label: "Image Qual", value: "4K" },
      { label: "Construction", value: "0%" },
    ],
    images: [
      "/case-study/img-3.jpeg",
      "https://images.unsplash.com/photo-1493335129889-3b0577eaa73d?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574359411659-15573a27f0c1?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518998053502-53dd83b28ee7?q=80&w=1374&auto=format&fit=crop",
    ],
  },
];
