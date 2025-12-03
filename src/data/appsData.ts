export interface Website {
  id: string;
  title: string;
  description: string;
  href: string;
  faviconUrl: string;
  category?: string;
  video: {
    webm: string;
    mp4: string;
  };
}

export interface AppDetail {
  id: string;
  title: string;
  description: string;
  category: string;
  platforms: string[];
  pricing: string;
  developer: string;
  lastUpdated: string;
  websiteUrl: string;
  faviconUrl: string;
  previewImage: string;
  about: string;
  features: string[];
  relatedApps?: RelatedApp[];
}

export interface RelatedApp {
  id: string;
  title: string;
  description: string;
  previewImage: string;
  href: string;
}

export const websitesData: Website[] = [
  {
    id: "tame",
    title: "Tame OS",
    description: "A space to grow ideas.",
    category: "Productivity",
    href: "/apps/tame",
    faviconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_1.png",
    video: {
      webm: "https://res.cloudinary.com/seesawsite/video/upload/w_640,du_5/q_50/tame_sml_ewunci.webm",
      mp4: "https://res.cloudinary.com/seesawsite/video/upload/w_640,du_5/q_50/tame_sml_ewunci.mp4"
    }
  },
  {
    id: "antigravity",
    title: "Google Antigravity",
    description: "Next-generation IDE.",
    category: "Development",
    href: "/apps/antigravity",
    faviconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_2.png",
    video: {
      webm: "https://res.cloudinary.com/seesawsite/video/upload/w_640,du_5/q_50/antigravity_sml_y5qhb4.webm",
      mp4: "https://res.cloudinary.com/seesawsite/video/upload/w_640,du_5/q_50/antigravity_sml_y5qhb4.mp4"
    }
  },
  {
    id: "hill",
    title: "Hill",
    description: "Buy & sell shares in pre-IPO companies.",
    category: "Fintech",
    href: "/apps/hill",
    faviconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_3.png",
    video: {
      webm: "https://res.cloudinary.com/seesawsite/video/upload/w_640,du_5/q_50/hill_sml_jgchbq.webm",
      mp4: "https://res.cloudinary.com/seesawsite/video/upload/w_640,du_5/q_50/hill_sml_jgchbq.mp4"
    }
  },
  {
    id: "aave-app",
    title: "Aave App",
    description: "Earn interest every second with industry-leading rates and balance protection up to $1M.",
    category: "Crypto",
    href: "/apps/aave-app",
    faviconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_4.png",
    video: {
      webm: "https://res.cloudinary.com/seesawsite/video/upload/w_640,du_5/q_50/aaveapp_sml_y4x5vd.webm",
      mp4: "https://res.cloudinary.com/seesawsite/video/upload/w_640,du_5/q_50/aaveapp_sml_y4x5vd.mp4"
    }
  },
  {
    id: "collins",
    title: "COLLINS",
    description: "Rewrite your worth.",
    category: "Design",
    href: "/apps/collins",
    faviconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_5.png",
    video: {
      webm: "https://res.cloudinary.com/seesawsite/video/upload/w_640,du_5/q_50/collins_sml_idacug.webm",
      mp4: "https://res.cloudinary.com/seesawsite/video/upload/w_640,du_5/q_50/collins_sml_idacug.mp4"
    }
  },
  {
    id: "bonside",
    title: "Bonside",
    description: "Defining the brick and mortar economy.",
    category: "E-Commerce",
    href: "/apps/bonside",
    faviconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_6.png",
    video: {
      webm: "https://res.cloudinary.com/seesawsite/video/upload/w_640,du_5/q_50/bonside_sml_fu2dho.webm",
      mp4: "https://res.cloudinary.com/seesawsite/video/upload/w_640,du_5/q_50/bonside_sml_fu2dho.mp4"
    }
  }
];

export const appDetailsData: Record<string, AppDetail> = {
  "tame": {
    id: "tame",
    title: "Tame OS",
    description: "A space to grow ideas.",
    category: "Productivity",
    platforms: ["Web"],
    pricing: "Free",
    developer: "Tame Labs",
    lastUpdated: "Today",
    websiteUrl: "https://tameos.com",
    faviconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_1.png",
    previewImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_1.png",
    about: "A space to grow ideas.",
    features: [
      "Innovative design and user experience.",
      "Minimalist, distraction-free interface",
      "Built-in note-taking and idea management",
      "Seamless cloud synchronization",
      "Cross-platform availability"
    ],
    relatedApps: [
      {
        id: "antigravity",
        title: "Google Antigravity",
        description: "Next-generation IDE.",
        previewImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_2.png",
        href: "/apps/antigravity"
      }
    ]
  },
  "antigravity": {
    id: "antigravity",
    title: "Google Antigravity",
    description: "Next-generation IDE.",
    category: "Development",
    platforms: ["macOS", "Windows", "Linux"],
    pricing: "Free",
    developer: "Google Labs",
    lastUpdated: "December 1, 2024",
    websiteUrl: "https://antigravity.dev",
    faviconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_2.png",
    previewImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_2.png",
    about: "Experience liftoff with the next-generation IDE. Google Antigravity revolutionizes the way developers write code with AI-powered suggestions and collaborative features.",
    features: [
      "AI-powered code completion",
      "Real-time collaboration",
      "Integrated debugging tools",
      "Multi-language support",
      "Cloud-based development environment"
    ],
    relatedApps: [
      {
        id: "tame",
        title: "Tame OS",
        description: "A space to grow ideas.",
        previewImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_1.png",
        href: "/apps/tame"
      }
    ]
  },
  "hill": {
    id: "hill",
    title: "Hill",
    description: "Buy & sell shares in pre-IPO companies.",
    category: "Fintech",
    platforms: ["iOS", "Android", "Web"],
    pricing: "Free",
    developer: "Hill Markets",
    lastUpdated: "November 28, 2024",
    websiteUrl: "https://hill.com",
    faviconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_3.png",
    previewImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_3.png",
    about: "Hill provides access to pre-IPO investment opportunities for everyday investors. Trade shares in tomorrow's biggest companies before they go public.",
    features: [
      "Access to pre-IPO companies",
      "Real-time market data",
      "Secure trading platform",
      "Educational resources",
      "Mobile-first experience"
    ],
    relatedApps: [
      {
        id: "aave-app",
        title: "Aave App",
        description: "Earn interest every second.",
        previewImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_4.png",
        href: "/apps/aave-app"
      }
    ]
  },
  "aave-app": {
    id: "aave-app",
    title: "Aave App",
    description: "Earn interest every second with industry-leading rates and balance protection up to $1M.",
    category: "Crypto",
    platforms: ["iOS", "Android", "Web"],
    pricing: "Free",
    developer: "Aave",
    lastUpdated: "December 2, 2024",
    websiteUrl: "https://aave.com",
    faviconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_4.png",
    previewImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_4.png",
    about: "Aave is a decentralized finance protocol that allows people to lend and borrow crypto. Earn interest every second with industry-leading rates.",
    features: [
      "Decentralized lending and borrowing",
      "Competitive interest rates",
      "Multi-chain support",
      "Flash loans",
      "Balance protection up to $1M"
    ],
    relatedApps: [
      {
        id: "hill",
        title: "Hill",
        description: "Buy & sell shares in pre-IPO companies.",
        previewImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_3.png",
        href: "/apps/hill"
      }
    ]
  },
  "collins": {
    id: "collins",
    title: "COLLINS",
    description: "Rewrite your worth.",
    category: "Design",
    platforms: ["macOS", "Windows"],
    pricing: "Premium ($29.99/monthly)",
    developer: "Collins Design",
    lastUpdated: "November 20, 2024",
    websiteUrl: "https://collins.design",
    faviconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_5.png",
    previewImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_5.png",
    about: "COLLINS is a revolutionary design platform that helps you rewrite your creative worth. Build stunning portfolios and showcase your work.",
    features: [
      "Professional portfolio templates",
      "Custom domain support",
      "Advanced typography controls",
      "Client management tools",
      "Analytics dashboard"
    ],
    relatedApps: [
      {
        id: "bonside",
        title: "Bonside",
        description: "Defining the brick and mortar economy.",
        previewImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_6.png",
        href: "/apps/bonside"
      }
    ]
  },
  "bonside": {
    id: "bonside",
    title: "Bonside",
    description: "Defining the brick and mortar economy.",
    category: "E-Commerce",
    platforms: ["Web", "iOS", "Android"],
    pricing: "Free",
    developer: "Bonside Inc",
    lastUpdated: "November 15, 2024",
    websiteUrl: "https://bonside.com",
    faviconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_6.png",
    previewImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_6.png",
    about: "Bonside is redefining the brick and mortar economy by connecting local businesses with digital consumers. Discover and support local shops.",
    features: [
      "Local business discovery",
      "In-store pickup options",
      "Community marketplace",
      "Support local economy",
      "Exclusive local deals"
    ],
    relatedApps: [
      {
        id: "collins",
        title: "COLLINS",
        description: "Rewrite your worth.",
        previewImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1afdc242-c723-4eb2-85bd-3bd7b1f2b1be-seesaw-website/assets/images/images_5.png",
        href: "/apps/collins"
      }
    ]
  }
};