import { getAssetPath } from "./basePath";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WhyUsPoint {
  title: string;
  description: string;
}

export interface RelatedProject {
  id: string;
  title: string;
  category: string;
  description: string;
  gradient: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DetailedSeoContent {
  overview: string;
  keyBenefits: string[];
  deliverables: string[];
  idealFor: string[];
}

export interface ServiceData {
  slug: string;
  title: string;
  iconName:
    | "Code"
    | "Palette"
    | "TrendingUp"
    | "ImageIcon"
    | "Search"
    | "Target"
    | "Layout"
    | "Globe"
    | "ShoppingBag"
    | "ShoppingCart"
    | "Database"
    | "Smartphone"
    | "Cloud"
    | "MapPin"
    | "Heart";
  tagline: string;
  heroDescription: string;
  heroImage?: string;
  metaTitle: string;
  metaDescription: string;
  featuresList: ServiceFeature[];
  processSteps: ProcessStep[];
  whyUsPoints: WhyUsPoint[];
  relatedProjects: RelatedProject[];
  faqs: FAQItem[];
  detailedSeoContent: DetailedSeoContent;
}

const graphicDesignData: ServiceData = {
  slug: "graphic-design",
  title: "Logo & Graphic Design",
  iconName: "Palette",
  tagline: "Distinctive Branding, Logos & Visual Design Systems",
  heroDescription:
    "We create iconic logo marks, cohesive brand design systems, and stunning graphic marketing assets that position your business ahead of competitors.",
  heroImage: getAssetPath("/images/services/graphic-design.jpg"),
  metaTitle: "Logo & Graphic Design Services | Branding & Visual Identity | Larkspire",
  metaDescription:
    "Distinguish your brand with custom logo design, visual identity systems, brand guidelines, and creative marketing collateral crafted by Larkspire.",
  featuresList: [
    {
      title: "Custom Logo Design & Vector Marks",
      description:
        "Memorable, scalable logo designs delivered in vector SVG, EPS, PNG, and print formats.",
    },
    {
      title: "Comprehensive Brand Guidelines",
      description:
        "Complete brand books defining color palettes, typography scales, logo usage rules, and design tokens.",
    },
    {
      title: "Marketing & Social Collateral",
      description:
        "High-impact social media kits, ad creatives, banners, and digital promotional assets.",
    },
    {
      title: "Print & Editorial Design",
      description:
        "Business cards, brochures, flyers, catalogs, and packaging designed for high-quality physical output.",
    },
    {
      title: "Brand Strategy & Positioning",
      description:
        "Audience research and strategic visual alignment to position your business as a leader in your sector.",
    },
    {
      title: "Design System & Asset Libraries",
      description:
        "Structured Figma design systems with reusable components and assets for seamless team collaboration.",
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Discovery & Moodboards",
      description: "Understanding your brand vision, target demographic, and visual preferences.",
    },
    {
      number: "02",
      title: "Concept Exploration",
      description: "Sketching and rendering multiple distinct creative directions for review.",
    },
    {
      number: "03",
      title: "Refinement & Systems",
      description: "Polishing chosen concept into a complete visual design system.",
    },
    {
      number: "04",
      title: "Delivery & Guidelines",
      description: "Packaging vector files, color specs, fonts, and full usage documentation.",
    },
  ],
  whyUsPoints: [
    {
      title: "Strategic Design Focus",
      description: "We don't just make pretty pictures — every element is designed to drive recall and trust.",
    },
    {
      title: "100% Vector & Original",
      description: "No generic clip art or stock templates — 100% custom crafted artwork.",
    },
    {
      title: "Full Commercial Ownership",
      description: "You receive complete copyright ownership and all source files.",
    },
  ],
  relatedProjects: [
    {
      id: "brand-1",
      title: "Aura Luxury Rebrand",
      category: "Branding & Logo",
      description: "Full visual identity and packaging system for premium wellness brand.",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      id: "brand-2",
      title: "NexGen Tech Logo System",
      category: "Graphic Design",
      description: "Modern logo suite and corporate identity for AI SaaS startup.",
      gradient: "from-teal-600 to-emerald-600",
    },
  ],
  faqs: [
    {
      question: "What files do I receive with my logo and design package?",
      answer: "You receive editable vector source files (Figma, AI, EPS, SVG) as well as high-resolution PNG, JPG, and web-optimized WEBP formats.",
    },
    {
      question: "How long does a full brand identity project take?",
      answer: "Typical branding projects take 2 to 3 weeks depending on the number of concepts and collateral pieces requested.",
    },
    {
      question: "Who owns the copyright to the logo and graphics created?",
      answer: "You receive 100% full commercial copyright ownership of all final designs, trademarks, vector graphics, and brand guidelines upon project completion.",
    },
    {
      question: "What is included in a complete Brand Guidelines book?",
      answer: "Our Brand Book includes logo usage rules, color palettes with HEX/CMYK/RGB codes, typography hierarchy, imagery style rules, and design tokens.",
    },
    {
      question: "Can you design print collateral like business cards and packaging?",
      answer: "Yes! We design print marketing assets (brochures, business cards, flyers, packaging) and digital graphics (social media kits, ad banners, email templates).",
    },
    {
      question: "How many initial logo concepts will I receive?",
      answer: "We present 3 to 5 distinct creative concept directions during the initial review stage and refine your chosen concept to perfection.",
    },
    {
      question: "What if I already have a logo but need a modern visual rebrand?",
      answer: "We specialize in brand modernizations, preserving your brand recognition while elevating your typography, color tokens, and overall visual presence.",
    },
  ],
  detailedSeoContent: {
    overview:
      "Larkspire provides end-to-end logo design and graphic design services aimed at establishing strong brand authority. From corporate logos to social graphic kits, our designs build instant brand recognition.",
    keyBenefits: [
      "Stand out in competitive industries with distinct visual identity",
      "Ensure brand consistency across web, social, and print channels",
      "Attract higher value clients through premium visual presentation",
      "Own 100% vector master files with lifetime commercial licensing",
    ],
    deliverables: [
      "Primary & secondary logo variations",
      "Full Brand Guidelines (PDF & Web Kit)",
      "Typography & Color Spec Sheets",
      "Social Media Kit & Header Banners",
      "Print Ready Vector & PDF Exports",
    ],
    idealFor: [
      "New businesses establishing initial brand identity",
      "Established companies looking for a modern rebrand",
      "E-commerce brands needing custom packaging & social graphics",
    ],
  },
};

export const servicesDataMap: Record<string, ServiceData> = {
  // 1. Website Design
  "website-design": {
    slug: "website-design",
    title: "Website Design",
    iconName: "Layout",
    tagline: "Bespoke UI/UX & High-Converting Web Design",
    heroDescription:
      "We craft visually stunning, user-centered website designs that captivate visitors, elevate your brand identity, and maximize conversions across every screen size.",
    heroImage: getAssetPath("/images/services/website-design.jpg"),
    metaTitle: "Professional Website Design Services | UI/UX & Wireframing | Larkspire",
    metaDescription:
      "Elevate your online presence with bespoke website design by Larkspire. Custom Figma UI/UX design, mobile responsiveness, and conversion-optimized layouts.",
    featuresList: [
      {
        title: "Custom UI/UX Wireframing & Prototyping",
        description:
          "Interactive Figma prototypes enabling you to test and refine user flows before a single line of code is written.",
      },
      {
        title: "Conversion-Focused Architecture",
        description:
          "Strategic placement of calls-to-action, hero sections, and social proof elements designed to turn visitors into leads.",
      },
      {
        title: "Mobile-First Adaptive Layouts",
        description:
          "Tailor-crafted mobile layouts ensuring flawless user experiences on smartphones, tablets, and desktop displays.",
      },
      {
        title: "Brand-Aligned Design Systems",
        description:
          "Custom color tokens, typography hierarchies, component libraries, and icon suites aligned with your brand identity.",
      },
      {
        title: "Interactive Micro-Animations",
        description:
          "Subtle visual feedback, hover states, and smooth scroll transitions that make your site feel premium and responsive.",
      },
      {
        title: "Accessibility (WCAG) Compliance",
        description:
          "Inclusive design standards with strong color contrast, readable font scales, and keyboard-friendly navigation.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Research & UX Strategy",
        description: "Analyzing target audience requirements, competitor benchmarks, and key conversion paths.",
      },
      {
        number: "02",
        title: "Wireframing & Sitemap",
        description: "Mapping site architecture and structural wireframes for effortless navigation.",
      },
      {
        number: "03",
        title: "High-Fidelity UI Design",
        description: "Designing pixel-perfect mockups in Figma with interactive transitions and UI assets.",
      },
      {
        number: "04",
        title: "Handoff & Build Prep",
        description: "Exporting organized design tokens, assets, and specs ready for engineering.",
      },
    ],
    whyUsPoints: [
      {
        title: "Pixel-Perfect Precision",
        description: "We pay attention to font kerning, spatial grids, and micro-interactions that elevate your brand.",
      },
      {
        title: "Conversion First Approach",
        description: "Beautiful design grounded in conversion psychology to maximize sales and inquiries.",
      },
      {
        title: "Collaborative Figma Process",
        description: "Real-time visibility into design progress with easy comment and feedback integration.",
      },
    ],
    relatedProjects: [
      {
        id: "web-design-1",
        title: "Fintech Dashboard Redesign",
        category: "Website Design",
        description: "Modern UI/UX design overhaul for a fastgrowing financial SaaS platform.",
        gradient: "from-teal-600 to-emerald-600",
      },
      {
        id: "web-design-2",
        title: "Luxury Real Estate Portal",
        category: "UI/UX Design",
        description: "High-converting web design layout for luxury property listings.",
        gradient: "from-blue-600 to-indigo-600",
      },
    ],
    faqs: [
      {
        question: "Do you design websites in Figma?",
        answer: "Yes, all our website designs are created in Figma with component libraries, wireframes, and interactive prototypes.",
      },
      {
        question: "Can you redesign my existing website?",
        answer: "Absolutely! We specialize in web redesigns to modernize user interfaces, fix mobile usability issues, and boost conversion rates.",
      },
      {
        question: "What is the difference between Web Design and Web Development?",
        answer: "Web Design focuses on visual architecture, UI/UX aesthetics, layout, and prototyping in tools like Figma. Web Development converts those designs into functional, high-speed code.",
      },
      {
        question: "How many revision rounds are included in the website design process?",
        answer: "We include unlimited revisions during the initial wireframing and UI concept phase until you are 100% satisfied with the visual direction.",
      },
      {
        question: "Will my website design be fully responsive on mobile and tablets?",
        answer: "Yes, every layout is custom crafted with a mobile-first approach, ensuring seamless UX across smartphones, tablets, laptops, and ultra-wide desktops.",
      },
      {
        question: "How long does a custom website design project take?",
        answer: "A typical custom website design project takes between 1 to 3 weeks depending on the number of pages, custom graphics, and prototype complexity.",
      },
      {
        question: "Do you provide design assets and Figma master files upon project completion?",
        answer: "Yes, you receive complete ownership of all organized Figma master files, UI component libraries, vector assets, design tokens, and exportable graphics.",
      },
    ],
    detailedSeoContent: {
      overview:
        "Larkspire provides end-to-end website design services focused on blending aesthetics with conversion architecture. Our UI/UX designers create custom digital experiences that resonate with target audiences.",
      keyBenefits: [
        "Increase landing page conversion rates with strategic UI design",
        "Deliver seamless mobile and desktop experiences",
        "Establish strong brand credibility with polished visuals",
        "Receive organized Figma design files and component libraries",
      ],
      deliverables: [
        "Figma High-Fidelity UI Mockups",
        "Interactive Clickable Prototype",
        "Mobile & Desktop Responsive Layouts",
        "UI Component Library & Style Guide",
      ],
      idealFor: [
        "Businesses wanting a modern website makeover",
        "Startups looking for high-converting landing page designs",
        "E-commerce & service brands aiming for premium brand positioning",
      ],
    },
  },

  // 2. Web Development
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    iconName: "Code",
    tagline: "High-Performance Custom Web Experiences",
    heroDescription:
      "We design and engineer bespoke, lightning-fast web applications built with clean, high-performance architecture. Optimized for sub-second page loads, conversion, and seamless user experiences.",
    heroImage: getAssetPath("/images/services/web-development.jpg"),
    metaTitle: "Custom Web Development Services | Next.js & React Solutions | Larkspire",
    metaDescription:
      "Engineered for sub-second speed, high conversion, and scalability. Larkspire crafts bespoke web applications with Next.js, React, and serverless technology.",
    featuresList: [
      {
        title: "Custom Modern Web Applications",
        description:
          "Tailor-made web solutions engineered with clean serverless architecture, micro-animations, and dynamic capabilities.",
      },
      {
        title: "Sub-Second Speed & Core Web Vitals",
        description:
          "Performance-first engineering delivering 95+ Lighthouse scores, instant page loads, and smooth interaction states.",
      },
      {
        title: "Full Responsive & Mobile Design",
        description:
          "Adaptive layouts crafted to look stunning across desktop, tablet, and mobile displays without layout shifts.",
      },
      {
        title: "Custom CMS & API Integrations",
        description:
          "Seamless connections to headless CMS platforms, payment gateways, CRM tools, and analytics dashboards.",
      },
      {
        title: "Technical SEO & Accessibility",
        description:
          "Built-in semantic HTML structure, ARIA accessibility, automated sitemaps, and optimized metadata for search engines.",
      },
      {
        title: "Scalable Codebase & Security",
        description:
          "Enterprise-grade, type-safe codebase structured for easy maintenance, high security, and long-term scalability.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Architecture & Tech Stack",
        description: "Defining data models, framework selection, and API requirements.",
      },
      {
        number: "02",
        title: "Agile Development",
        description: "Writing clean, type-safe code with modular components and animations.",
      },
      {
        number: "03",
        title: "QA & Performance Testing",
        description: "Auditing cross-browser support, core web vitals, and mobile responsiveness.",
      },
      {
        number: "04",
        title: "Deployment & Support",
        description: "Deploying to high-speed CDN infrastructure with SSL and 24/7 monitoring.",
      },
    ],
    whyUsPoints: [
      {
        title: "Clean Modern Stack",
        description: "We use Next.js, React, and TypeScript — avoiding bloated plugins and slow code.",
      },
      {
        title: "Lighthouse 95+ Performance",
        description: "Fast loading pages that improve Google rankings and decrease bounce rates.",
      },
      {
        title: "Long Term Support",
        description: "Dedicated maintenance, feature additions, and security updates post-launch.",
      },
    ],
    relatedProjects: [
      {
        id: "web-1",
        title: "Vanguard Tech Portal",
        category: "Web Development",
        description: "High-speed corporate platform built with Next.js and Tailwind CSS.",
        gradient: "from-teal-600 to-emerald-600",
      },
      {
        id: "web-2",
        title: "Lumina SaaS Platform",
        category: "Web Application",
        description: "Interactive analytics dashboard with real-time data sync.",
        gradient: "from-blue-600 to-cyan-600",
      },
    ],
    faqs: [
      {
        question: "What frameworks do you use for custom web development?",
        answer: "We specialize in modern frontend and backend frameworks including Next.js, React, Node.js, TypeScript, and serverless platforms like Vercel.",
      },
      {
        question: "Will my website be mobile-friendly and fast?",
        answer: "Yes! Every site we build is optimized for 95+ performance scores and engineered for responsive performance on all screen sizes.",
      },
      {
        question: "Can you build custom API integrations and headless CMS platforms?",
        answer: "Yes, we integrate third-party APIs, payment gateways (Stripe, Razorpay, PayPal), CRM systems, and headless CMS platforms like Sanity, Strapi, or Contentful.",
      },
      {
        question: "Is technical SEO included in web development?",
        answer: "Yes, technical SEO is baked into our development process — including semantic HTML5, dynamic XML sitemaps, structured JSON-LD schemas, and meta tag optimization.",
      },
      {
        question: "What support and maintenance do you offer after launch?",
        answer: "We provide 30 days of post-launch technical warranty, continuous security monitoring, speed audits, and ongoing monthly maintenance retainers.",
      },
      {
        question: "Can you migrate my legacy site to Next.js without losing SEO rankings?",
        answer: "Yes, we handle seamless zero-downtime migrations with 301 redirect mappings, canonical link setup, and structure preservation to protect and boost your organic search rankings.",
      },
      {
        question: "Who owns the codebase once the website is built?",
        answer: "You retain 100% full intellectual property ownership of the source code, repository, hosting infrastructure, and deployment keys.",
      },
    ],
    detailedSeoContent: {
      overview:
        "Larkspire builds high-performance custom web applications for businesses that want to scale. Combining Next.js, React, and modern UI engineering, we deliver fast, conversion-driven websites.",
      keyBenefits: [
        "Sub-second page load times for improved organic search rankings",
        "Clean, maintainable TypeScript codebase ready for future expansion",
        "Seamless integration with third-party APIs and payment processors",
        "Responsive, intuitive user interfaces tailored to your brand",
      ],
      deliverables: [
        "Full Production Web Application",
        "CMS Integration & Admin Access",
        "Technical SEO Setup & XML Sitemap",
        "Core Web Vitals & Speed Optimization",
      ],
      idealFor: [
        "Growing brands needing custom web solutions beyond templates",
        "SaaS companies requiring interactive web platforms",
        "Businesses wanting top-tier web performance and security",
      ],
    },
  },

  // 3. Search Engine Optimization (SEO)
  "search-engine-optimization": {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization (SEO)",
    iconName: "Search",
    tagline: "Organic Dominance, High Intent Traffic & Higher Rankings",
    heroDescription:
      "Dominate search engine results and drive targeted organic traffic with technical SEO audits, strategic keyword positioning, and authoritative content optimization.",
    heroImage: getAssetPath("/images/services/seo-optimization.jpg"),
    metaTitle: "Search Engine Optimization (SEO) Services | Organic Growth | Larkspire",
    metaDescription:
      "Drive sustainable organic traffic and reach top Google rankings with Larkspire's technical SEO audits, on-page optimization, and keyword strategies.",
    featuresList: [
      {
        title: "Comprehensive Technical SEO Audits",
        description:
          "In-depth analysis of crawlability, indexation, site architecture, and Core Web Vitals performance.",
      },
      {
        title: "High-Intent Keyword Research",
        description:
          "Identifying high-conversion search terms and mapping content clusters to capture target buyer intent.",
      },
      {
        title: "On-Page Content & Meta Optimization",
        description:
          "Crafting optimized title tags, meta descriptions, header structures, and internal linking frameworks.",
      },
      {
        title: "Schema Markup & Rich Snippets",
        description:
          "Implementing structured JSON-LD schemas for services, FAQs, reviews, and organization profiles.",
      },
      {
        title: "Local SEO & Google Business Profile",
        description:
          "Optimizing local map rankings, geo-targeted landing pages, and local citations for maximum visibility.",
      },
      {
        title: "Continuous Tracking & Performance Reports",
        description:
          "Monthly analytics reports tracking keyword rank positions, organic visitor growth, and conversion metrics.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Audit & Keyword Strategy",
        description: "Analyzing existing search visibility, technical bottlenecks, and keyword opportunities.",
      },
      {
        number: "02",
        title: "Technical Remediation",
        description: "Fixing crawl errors, improving page speeds, and implementing schema markup.",
      },
      {
        number: "03",
        title: "On-Page Optimization",
        description: "Optimizing page content, headers, meta tags, and internal link structure.",
      },
      {
        number: "04",
        title: "Monitoring & Scaling",
        description: "Tracking rankings, adjusting keyword targets, and expanding content clusters.",
      },
    ],
    whyUsPoints: [
      {
        title: "White-Hat Organic Methods",
        description: "Sustainable SEO strategies built for long-term Google search dominance.",
      },
      {
        title: "Technical + Content Focus",
        description: "We optimize code-level speed alongside high-converting copy.",
      },
      {
        title: "Transparent Monthly Reporting",
        description: "Clear insights showing traffic growth, keyword rankings, and lead metrics.",
      },
    ],
    relatedProjects: [
      {
        id: "seo-1",
        title: "SaaS Organic Traffic 3x",
        category: "Technical SEO",
        description: "Engineered 240% increase in organic signups through content clustering.",
        gradient: "from-teal-600 to-emerald-600",
      },
      {
        id: "seo-2",
        title: "Local Service Dominance",
        category: "Local SEO",
        description: "Achieved top 3 Google Map Pack rankings for multi-location brand.",
        gradient: "from-blue-600 to-indigo-600",
      },
    ],
    faqs: [
      {
        question: "How long does it take to see SEO results?",
        answer: "SEO is a long-term compound strategy. Technical fixes usually show results within 4 to 8 weeks, while competitive keywords typically mature in 3 to 6 months.",
      },
      {
        question: "What is the difference between On-Page, Off-Page, and Technical SEO?",
        answer: "Technical SEO fixes site speed, crawling, and indexing. On-Page SEO optimizes content, keywords, and meta tags. Off-Page SEO builds domain authority, backlinks, and brand citations.",
      },
      {
        question: "Do you offer local SEO and Google Business Profile optimization?",
        answer: "Yes! We specialize in local map pack optimization, geo-targeted landing page creation, local citation indexing, and review management.",
      },
      {
        question: "How do you choose target keywords for my business?",
        answer: "We perform high-intent keyword research analyzing search volume, buyer intent, keyword difficulty, and competitor rank gaps to target terms that generate real revenue.",
      },
      {
        question: "Do you guarantee #1 rankings on Google?",
        answer: "No reputable agency can guarantee #1 positions due to search engine algorithm updates, but we use proven white-hat methods that consistently achieve top page rankings.",
      },
      {
        question: "Will I receive monthly SEO progress reports?",
        answer: "Yes, you receive transparent monthly analytics tracking keyword rank positioning, organic traffic growth, domain authority gains, and conversion lead metrics.",
      },
      {
        question: "What schema markup do you implement for SEO?",
        answer: "We implement structured JSON-LD schemas including Organization, LocalBusiness, Service, Product, Article, BreadcrumbList, and FAQPage schemas.",
      },
    ],
    detailedSeoContent: {
      overview:
        "Larkspire offers data-driven Search Engine Optimization (SEO) services designed to secure high-intent organic traffic. We combine technical code optimization with strategic content modeling.",
      keyBenefits: [
        "Capture qualified leads actively searching for your services",
        "Lower customer acquisition costs compared to paid ad dependencies",
        "Improve Google search authority and brand trustworthiness",
        "Outrank competitors with white-hat SEO techniques",
      ],
      deliverables: [
        "Technical SEO Audit Report",
        "Keyword Research & Content Plan",
        "On-Page Optimization & Schema Tags",
        "Monthly Ranking & Traffic Analytics",
      ],
      idealFor: [
        "Companies looking to build long-term organic traffic streams",
        "Local businesses aiming for Google Maps top rankings",
        "E-commerce stores wanting more product search visibility",
      ],
    },
  },

  // 4. WordPress Development
  "wordpress-development": {
    slug: "wordpress-development",
    title: "WordPress Development",
    iconName: "Globe",
    tagline: "Custom, Fast & Secure WordPress Solutions",
    heroDescription:
      "Custom WordPress website development with bespoke themes, plugin integration, Gutenberg/Elementor support, and bulletproof security for easy content management.",
    heroImage: getAssetPath("/images/services/wordpress-development.jpg"),
    metaTitle: "Custom WordPress Development Services | Bespoke Themes | Larkspire",
    metaDescription:
      "Tailor-made WordPress websites engineered for speed, custom Gutenberg blocks, WooCommerce, and robust security by Larkspire.",
    featuresList: [
      {
        title: "Custom WordPress Theme Engineering",
        description:
          "Lightweight, bespoke themes custom-coded without slow, bloated off-the-shelf theme dependencies.",
      },
      {
        title: "Custom Gutenberg & Elementor Editing",
        description:
          "Tailored content blocks making it effortless for your internal team to publish and edit pages.",
      },
      {
        title: "WooCommerce E-Commerce Integration",
        description:
          "High-converting online store builds with payment gateway, tax, shipping, and inventory automation.",
      },
      {
        title: "Speed & Core Web Vitals Tuning",
        description:
          "Caching, database optimization, CDN setup, and asset compression to achieve instant load times.",
      },
      {
        title: "Hardened WordPress Security",
        description:
          "Malware protection, firewall rules, automated backups, and 2-factor authentication protocols.",
      },
      {
        title: "Headless WordPress (GraphQL/REST)",
        description:
          "Modern decoupled setup pairing WordPress backend CMS with high-speed Next.js frontend.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Requirements & Architecture",
        description: "Planning custom post types, taxonomy, and content editor workflows.",
      },
      {
        number: "02",
        title: "Theme & Block Coding",
        description: "Developing lightweight PHP, React, and Gutenberg block code.",
      },
      {
        number: "03",
        title: "Content Migration & Testing",
        description: "Migrating media assets, tuning speed benchmarks, and security hardening.",
      },
      {
        number: "04",
        title: "Launch & Team Training",
        description: "Deploying site live and providing video walkthroughs for site administrators.",
      },
    ],
    whyUsPoints: [
      {
        title: "Zero Bloat Code",
        description: "We don't use heavy pre-built templates that slow down your server.",
      },
      {
        title: "Easy Admin Experience",
        description: "Intuitive editing dashboard tailored specifically for your team.",
      },
      {
        title: "Bulletproof Security",
        description: "Enterprise-grade security setup preventing malware and vulnerabilities.",
      },
    ],
    relatedProjects: [
      {
        id: "wp-1",
        title: "Corporate News Portal",
        category: "WordPress Development",
        description: "High-traffic custom WordPress publishing platform.",
        gradient: "from-blue-600 to-indigo-600",
      },
      {
        id: "wp-2",
        title: "Bespoke WooCommerce Store",
        category: "WooCommerce",
        description: "Fast custom WordPress e-commerce store for fashion brand.",
        gradient: "from-teal-600 to-emerald-600",
      },
    ],
    faqs: [
      {
        question: "Can you turn our existing design into a WordPress theme?",
        answer: "Yes! We convert Figma, Adobe XD, or custom HTML designs into pixel-perfect custom WordPress themes.",
      },
      {
        question: "Will I be able to update content easily on my own?",
        answer: "Absolutely. We build user-friendly Gutenberg blocks so you can update text, images, and pages without writing code.",
      },
      {
        question: "How do you ensure WordPress site security and prevent hacking?",
        answer: "We implement enterprise security protocols including firewall configuration, malware scanning, 2FA logins, custom admin URL paths, and automated off-site backups.",
      },
      {
        question: "Why is our current WordPress site slow and how will you fix it?",
        answer: "Slow WordPress sites are usually caused by heavy themes and plugin bloat. We build lightweight themes, implement object caching, database cleanup, and CDN optimization.",
      },
      {
        question: "Do you develop custom WooCommerce online stores?",
        answer: "Yes, we build scalable WooCommerce stores complete with custom product builders, payment gateways, tax calculation, and automated inventory sync.",
      },
      {
        question: "Can you repair a broken or hacked WordPress website?",
        answer: "Yes, we clean malware, fix PHP database errors, resolve plugin conflicts, and restore website functionality promptly.",
      },
      {
        question: "Do you offer monthly WordPress maintenance and update plans?",
        answer: "Yes, our monthly WordPress maintenance plans include core updates, plugin audits, database optimization, security monitoring, and daily backups.",
      },
    ],
    detailedSeoContent: {
      overview:
        "Larkspire builds custom WordPress websites engineered for performance, easy content editing, and strong search engine rankings. We eliminate plugin clutter to deliver lightning-fast WordPress experiences.",
      keyBenefits: [
        "Easily manage site content without technical knowledge",
        "Enjoy fast page loads with custom lightweight themes",
        "Ensure enterprise security with hardened WordPress setups",
        "Scale your store with custom WooCommerce features",
      ],
      deliverables: [
        "Custom Coded WordPress Theme",
        "Custom Gutenberg Component Suite",
        "Speed Optimization & Caching Setup",
        "Security Hardening & Admin Training",
      ],
      idealFor: [
        "Content-rich businesses needing flexible CMS capabilities",
        "Companies wanting a custom-designed WordPress site without theme bloat",
        "E-commerce brands using WooCommerce",
      ],
    },
  },

  // 5. Shopify Website Design
  "shopify-website-design": {
    slug: "shopify-website-design",
    title: "Shopify Website Design",
    iconName: "ShoppingBag",
    tagline: "High-Converting Shopify & Liquid Stores",
    heroDescription:
      "Build and scale your e-commerce brand with custom Shopify theme design, conversion-driven storefronts, seamless app integrations, and mobile shopping optimization.",
    heroImage: getAssetPath("/images/services/shopify-website-design.jpg"),
    metaTitle: "Custom Shopify Website Design Services | E-commerce Store Builds | Larkspire",
    metaDescription:
      "Scale your store with bespoke Shopify theme design by Larkspire. Fast checkout, custom Liquid templates, and conversion rate optimization.",
    featuresList: [
      {
        title: "Custom Shopify 2.0 Theme Design",
        description:
          "Bespoke Liquid theme builds crafted specifically around your product aesthetics and brand identity.",
      },
      {
        title: "Mobile Shopping UX Optimization",
        description:
          "Thumb-friendly navigation, sticky add-to-cart, and fast mobile checkout flows.",
      },
      {
        title: "Conversion-Rate-Focused Storefront",
        description:
          "Strategic product page layouts, cross-sell popups, reviews integration, and trust indicators.",
      },
      {
        title: "Shopify App Ecosystem Integration",
        description:
          "Configuring top-rated apps for subscriptions, email marketing, upsells, and customer support.",
      },
      {
        title: "Shopify Plus Enterprise Setup",
        description:
          "Advanced checkout customizations, B2B wholesale portals, and multi-currency international stores.",
      },
      {
        title: "Store Speed & Core Web Vitals Tuning",
        description:
          "Optimizing image formats, script loading, and Liquid code for high conversion speeds.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Store Strategy & Catalog Plan",
        description: "Mapping collections, product attributes, and checkout sales funnels.",
      },
      {
        number: "02",
        title: "UI Design & Liquid Build",
        description: "Designing storefront UI in Figma and coding custom Shopify 2.0 sections.",
      },
      {
        number: "03",
        title: "App Sync & Payment Testing",
        description: "Connecting payment gateways, tax rules, inventory apps, and email popups.",
      },
      {
        number: "04",
        title: "Launch & Growth Prep",
        description: "Testing live checkout, domain connection, and analytics setup.",
      },
    ],
    whyUsPoints: [
      {
        title: "Custom Liquid Experts",
        description: "We build bespoke Shopify 2.0 themes tailored to your exact store vision.",
      },
      {
        title: "Conversion Mindset",
        description: "Layouts designed to increase Average Order Value (AOV) and reduce cart abandonment.",
      },
      {
        title: "Seamless Migration",
        description: "Flawlessly migrate your products, orders, and customer data from WooCommerce, Magento, or custom stores.",
      },
    ],
    relatedProjects: [
      {
        id: "shopify-1",
        title: "Velour Skincare Storefront",
        category: "Shopify Design",
        description: "Bespoke Shopify 2.0 theme design generating 35% higher AOV.",
        gradient: "from-teal-600 to-emerald-600",
      },
      {
        id: "shopify-2",
        title: "Apex Apparel E-Commerce",
        category: "Shopify Plus",
        description: "International multi-currency Shopify Plus store build.",
        gradient: "from-purple-600 to-indigo-600",
      },
    ],
    faqs: [
      {
        question: "Can you help migrate my store to Shopify?",
        answer: "Yes, we handle complete store migrations including products, customer records, order history, and SEO redirects.",
      },
      {
        question: "Do you customize existing Shopify themes?",
        answer: "Yes! Whether you need a ground-up custom theme or section customizations on your current theme, we can help.",
      },
      {
        question: "How do you optimize Shopify store conversion rates (CRO)?",
        answer: "We implement mobile-optimized sticky cart drawers, quick buy buttons, customer review widgets, product video showcases, upsell cross-sells, and trust badges.",
      },
      {
        question: "Can you integrate third-party Shopify apps for subscriptions and marketing?",
        answer: "Yes, we integrate top apps like Recharge, Klaviyo, Yotpo, Gorgias, Loox, and Smile.io for seamless store automation.",
      },
      {
        question: "Is Shopify Plus development supported?",
        answer: "Yes, we specialize in Shopify Plus custom Liquid section development, checkout extensions, B2B wholesale portals, and multi-currency international stores.",
      },
      {
        question: "How long does it take to build a custom Shopify store?",
        answer: "A full custom Shopify store design and launch typically takes between 2 to 4 weeks depending on catalog size, custom sections, and app setups.",
      },
      {
        question: "Will my Shopify store load fast on mobile devices?",
        answer: "Yes, we optimize image compression, Liquid code structure, lazy loading, and script execution to achieve 90+ Lighthouse mobile performance scores.",
      },
    ],
    detailedSeoContent: {
      overview:
        "Larkspire designs and develops high-converting Shopify storefronts. We craft custom Liquid themes, optimize mobile shopping paths, and implement revenue-boosting upsells.",
      keyBenefits: [
        "Maximize store sales with conversion-optimized product pages",
        "Deliver fast, intuitive mobile shopping experiences",
        "Streamline store management with custom Shopify 2.0 sections",
        "Integrate email marketing, subscriptions, and customer reviews easily",
      ],
      deliverables: [
        "Custom Shopify 2.0 Theme",
        "Mobile Optimized Product & Cart Pages",
        "App Integration & Payment Setup",
        "Speed Optimization & Launch Checklist",
      ],
      idealFor: [
        "D2C brands launching or scaling on Shopify",
        "Businesses migrating to Shopify from legacy platforms",
        "High-volume Shopify Plus merchants needing custom Liquid features",
      ],
    },
  },

  // 6. Ecommerce Development
  "ecommerce-development": {
    slug: "ecommerce-development",
    title: "Ecommerce Development",
    iconName: "ShoppingCart",
    tagline: "Scalable E-Commerce Platforms & Digital Storefronts",
    heroDescription:
      "End-to-end e-commerce development tailored for high growth — featuring secure checkout, automated inventory sync, custom cart logic, and multi-currency support.",
    heroImage: getAssetPath("/images/services/ecommerce-development.jpg"),
    metaTitle: "Custom Ecommerce Development Services | Headless & Platform Solutions | Larkspire",
    metaDescription:
      "Build high-revenue online stores with custom e-commerce development by Larkspire. Secure payment gateways, headless architecture, and inventory automation.",
    featuresList: [
      {
        title: "Custom & Headless E-Commerce Builds",
        description:
          "High-speed store architecture using Next.js Commerce paired with Shopify, Stripe, or custom CMS backends.",
      },
      {
        title: "Secure Payment Gateway Integration",
        description:
          "Seamless payment integration with Stripe, PayPal, Razorpay, Apple Pay, and local payment processors.",
      },
      {
        title: "Automated Inventory & Order Management",
        description:
          "Real-time synchronization across warehouses, ERP platforms, and multi-channel marketplaces.",
      },
      {
        title: "Custom Product Options & Builders",
        description:
          "Interactive product configurators, engraving preview tools, and bundle builders.",
      },
      {
        title: "Multi-Currency & Internationalization",
        description:
          "Automatic currency conversion, geo-located shipping rules, and multi-language support.",
      },
      {
        title: "High-Converting One-Page Checkout",
        description:
          "Streamlined checkout flows built to minimize friction and prevent cart abandonment.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "E-Commerce Blueprint",
        description: "Mapping inventory schema, payment gateways, shipping rules, and tax compliance.",
      },
      {
        number: "02",
        title: "Custom Store Engineering",
        description: "Building responsive product catalogs, dynamic carts, and checkout interfaces.",
      },
      {
        number: "03",
        title: "Integrations & Load Testing",
        description: "Connecting ERP/CRM tools and stress-testing checkout scalability.",
      },
      {
        number: "04",
        title: "Launch & Analytics",
        description: "Going live with full conversion tracking, pixel tracking, and inventory sync.",
      },
    ],
    whyUsPoints: [
      {
        title: "Scalable Architecture",
        description: "Built to handle flash sales, high traffic spikes, and thousands of SKU listings.",
      },
      {
        title: "Security & Compliance",
        description: "PCI-DSS compliant payment flows ensuring complete customer data protection.",
      },
      {
        title: "Data-Driven Funnels",
        description: "Integrated cart abandonment recoveries, upsells, and analytics.",
      },
    ],
    relatedProjects: [
      {
        id: "ecom-1",
        title: "Nordic Goods Market",
        category: "Headless E-Commerce",
        description: "Lightning-fast Next.js store processing 10k+ monthly orders.",
        gradient: "from-teal-600 to-emerald-600",
      },
      {
        id: "ecom-2",
        title: "Craft Coffee Co-op",
        category: "Custom Store",
        description: "Subscription coffee box store with custom recurring billing.",
        gradient: "from-amber-600 to-orange-600",
      },
    ],
    faqs: [
      {
        question: "What platforms do you use for custom e-commerce development?",
        answer: "We develop on Shopify, WooCommerce, Next.js Commerce, and custom headless stacks depending on your business requirements.",
      },
      {
        question: "Can you build subscription or recurring billing options?",
        answer: "Yes, we integrate recurring subscription gateways (Stripe Billing, Recharge, etc.) for subscription boxes and digital memberships.",
      },
      {
        question: "Can you integrate multiple payment gateways and currencies?",
        answer: "Yes, we integrate Stripe, PayPal, Razorpay, Apple Pay, Klarna, and multi-currency converters with localized tax and shipping rules.",
      },
      {
        question: "What is Headless E-commerce and do I need it?",
        answer: "Headless E-commerce separates your Next.js/React frontend from the backend (Shopify or custom API). It delivers sub-second page loads, limitless design customization, and superior SEO.",
      },
      {
        question: "How do you handle inventory synchronization across multiple sales channels?",
        answer: "We connect your store to ERPs, CRMs, and warehouse management tools (like Inventory Source, ShipStation, or custom APIs) for real-time stock sync.",
      },
      {
        question: "How do you secure e-commerce payment transactions?",
        answer: "All checkout architecture follows strict PCI-DSS compliance standards, SSL encryption, tokenized payments, and fraud detection protocols.",
      },
      {
        question: "What post-launch support is included for e-commerce sites?",
        answer: "We provide store monitoring, checkout performance testing, payment gateway health checks, and ongoing conversion rate optimization (CRO).",
      },
    ],
    detailedSeoContent: {
      overview:
        "Larkspire specializes in custom e-commerce development for brands scaling their digital retail footprint. We combine modern engineering with conversion psychology to drive consistent store revenue.",
      keyBenefits: [
        "Accelerate checkout speeds to lower cart drop-off rates",
        "Automate multi-channel inventory and order processing",
        "Provide seamless payment options worldwide",
        "Scale store capacity without performance degradation",
      ],
      deliverables: [
        "Complete E-Commerce Store Build",
        "Payment & Shipping Gateway Setup",
        "Inventory & Product Catalog Architecture",
        "Conversion & Analytics Tracking Setup",
      ],
      idealFor: [
        "Retail brands building custom online storefronts",
        "Businesses with complex product configurator needs",
        "Global merchants needing multi-currency internationalization",
      ],
    },
  },

  // 7. Logo & Graphic Design (Standard key)
  "graphic-design": graphicDesignData,
  "logo-graphic-design": graphicDesignData,

  // 8. CRM Software Development
  "crm-software-development": {
    slug: "crm-software-development",
    title: "CRM Software Development",
    iconName: "Database",
    tagline: "Tailored Sales & Client Relationship Management Systems",
    heroDescription:
      "Empower your sales and operations with custom CRM software built specifically around your workflow, pipeline automation, analytics, and team collaboration.",
    heroImage: getAssetPath("/images/services/crm-software-development.jpg"),
    metaTitle: "Custom CRM Software Development Services | Larkspire",
    metaDescription:
      "Streamline sales pipelines and client management with bespoke CRM software development by Larkspire. Custom dashboards, workflow automation, and API sync.",
    featuresList: [
      {
        title: "Custom Sales Pipeline & Deal Tracker",
        description:
          "Visual kanban deal boards, lead stage tracking, and automated task assignments.",
      },
      {
        title: "Automated Lead Capture & Scoring",
        description:
          "Instant lead capture from websites, ad forms, and landing pages with intelligent lead scoring.",
      },
      {
        title: "Client Portal & Communication Hub",
        description:
          "Integrated messaging, file sharing, invoice tracking, and customer history timelines.",
      },
      {
        title: "Analytics & Performance Reporting",
        description:
          "Real-time executive dashboards tracking revenue forecasts, conversion ratios, and agent performance.",
      },
      {
        title: "Email & WhatsApp API Automation",
        description:
          "Automated follow-up sequences, appointment reminders, and omnichannel contact history.",
      },
      {
        title: "Role-Based Access & Security",
        description:
          "Strict data encryption, role permissions, and audit logs to protect customer data.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Workflow Mapping",
        description: "Mapping your sales funnel, customer touchpoints, and operational bottlenecks.",
      },
      {
        number: "02",
        title: "UI/UX & Schema Design",
        description: "Designing intuitve CRM dashboards and secure database architecture.",
      },
      {
        number: "03",
        title: "Development & API Sync",
        description: "Coding custom CRM modules, email integrations, and automated notifications.",
      },
      {
        number: "04",
        title: "Deployment & Onboarding",
        description: "Migrating legacy client data, training your staff, and continuous maintenance.",
      },
    ],
    whyUsPoints: [
      {
        title: "Tailored to Your Workflow",
        description: "Unlike generic subscription CRMs, we build around your exact business process.",
      },
      {
        title: "No Recurring Per-User Fees",
        description: "Own your custom CRM software without paying expensive monthly per-seat licenses.",
      },
      {
        title: "Complete Data Control",
        description: "Keep client records private and secure on your own cloud infrastructure.",
      },
    ],
    relatedProjects: [
      {
        id: "crm-1",
        title: "PropTech Lead Management CRM",
        category: "CRM Software",
        description: "Custom real estate deal tracking platform processing 5,000+ monthly leads.",
        gradient: "from-teal-600 to-emerald-600",
      },
      {
        id: "crm-2",
        title: "HealthCare Patient Portal CRM",
        category: "Enterprise System",
        description: "HIPAA-compliant client management and appointment scheduling portal.",
        gradient: "from-blue-600 to-cyan-600",
      },
    ],
    faqs: [
      {
        question: "Why build a custom CRM instead of buying Salesforce or HubSpot?",
        answer: "Custom CRMs fit your exact business process perfectly, remove monthly per-user licensing fees, and keep your proprietary data 100% under your control.",
      },
      {
        question: "Can you integrate our CRM with WhatsApp and Email?",
        answer: "Yes, we integrate Twilio, WhatsApp Business API, Gmail, Outlook, and custom Webhooks directly into your CRM dashboard.",
      },
      {
        question: "Will our team be able to use the custom CRM easily?",
        answer: "Yes, we design clean, intuitive UI dashboards tailored to your sales reps and managers, complete with video training and user role controls.",
      },
      {
        question: "How do you handle legacy data migration into the new CRM?",
        answer: "We sanitize, map, and import customer records, deal history, contacts, and invoices from Excel, CSV, or old CRM databases with zero data loss.",
      },
      {
        question: "Is remote access and mobile access supported?",
        answer: "Yes, our custom CRMs are progressive cloud web applications accessible securely from smartphones, tablets, and desktop browsers.",
      },
      {
        question: "What security measures protect our client database?",
        answer: "We implement database encryption at rest and in transit, role-based access control (RBAC), multi-factor authentication (MFA), and audit logs.",
      },
      {
        question: "How long does it take to develop a custom CRM system?",
        answer: "Custom CRM development typically takes 4 to 8 weeks depending on pipeline complexity, automation workflows, and API integrations.",
      },
    ],
    detailedSeoContent: {
      overview:
        "Larkspire builds custom CRM software solutions designed to automate sales pipelines and elevate client relationships. We engineer secure, intuitive software that fits your operational needs.",
      keyBenefits: [
        "Eliminate per-user monthly SaaS subscription costs",
        "Automate lead follow-ups and task assignments",
        "Gain real-time visibility into sales pipeline revenue",
        "Centralize client communication in one secure platform",
      ],
      deliverables: [
        "Full Custom CRM Application",
        "Sales Pipeline & Analytics Dashboards",
        "Email / WhatsApp API Integrations",
        "Legacy Client Data Migration",
      ],
      idealFor: [
        "Service agencies needing customized client management",
        "Real estate firms tracking high-volume lead pipelines",
        "Enterprises seeking complete data ownership without SaaS locks",
      ],
    },
  },

  // 9. Mobile App Development
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    iconName: "Smartphone",
    tagline: "Native & Cross-Platform iOS & Android Applications",
    heroDescription:
      "Engineered for top app store rankings and high user retention — we build fast, scalable, and intuitive mobile applications for iOS and Android using React Native & Flutter.",
    heroImage: getAssetPath("/images/services/mobile-app-development.jpg"),
    metaTitle: "Custom Mobile App Development Services | iOS & Android | Larkspire",
    metaDescription:
      "Turn your idea into a high-performance mobile app. Larkspire crafts iOS and Android applications with React Native, sleek UI/UX, and cloud backends.",
    featuresList: [
      {
        title: "iOS & Android Cross-Platform Apps",
        description:
          "Single efficient codebase powering native-quality iOS and Android applications using React Native.",
      },
      {
        title: "Intuitive Mobile UI/UX Design",
        description:
          "Smooth micro-interactions, gesture navigation, and clean mobile interfaces tailored to mobile guidelines.",
      },
      {
        title: "Push Notifications & Re-Engagement",
        description:
          "Automated push notification flows keeping users engaged and driving repeat app sessions.",
      },
      {
        title: "Offline Data Sync & Cloud Storage",
        description:
          "Seamless offline capabilities with automated background data sync when connection resumes.",
      },
      {
        title: "In-App Purchases & Secure Payments",
        description:
          "Integration with Apple Pay, Google Pay, Stripe, and in-app subscription management.",
      },
      {
        title: "App Store Optimization (ASO) & Deployment",
        description:
          "Complete management of Apple App Store and Google Play Store submission and compliance.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "App Wireframing & UX",
        description: "Mapping mobile user flows, screen architecture, and clickable prototypes.",
      },
      {
        number: "02",
        title: "Frontend & API Build",
        description: "Engineering mobile application code paired with secure backend APIs.",
      },
      {
        number: "03",
        title: "Device Testing & QA",
        description: "Testing performance across diverse iOS and Android screen resolutions.",
      },
      {
        number: "04",
        title: "Store Submission & Launch",
        description: "Managing App Store & Play Store approval process and launch marketing.",
      },
    ],
    whyUsPoints: [
      {
        title: "Cost-Effective Cross Platform",
        description: "One codebase for both iPhone & Android saves time and deployment budget.",
      },
      {
        title: "60 FPS Smooth Performance",
        description: "Optimized mobile UI renders quickly with zero lag or frame drops.",
      },
      {
        title: "End-to-End Store Approval",
        description: "We handle App Store & Play Store guidelines to guarantee smooth approval.",
      },
    ],
    relatedProjects: [
      {
        id: "app-1",
        title: "FitPulse Workout Tracker",
        category: "iOS & Android App",
        description: "Fitness mobile app with real-time biometric tracking & social feeds.",
        gradient: "from-teal-600 to-emerald-600",
      },
      {
        id: "app-2",
        title: "UrbanBites Food Delivery",
        category: "Mobile Application",
        description: "On-demand food ordering app with live GPS courier tracking.",
        gradient: "from-orange-600 to-red-600",
      },
    ],
    faqs: [
      {
        question: "Do you build apps for both iPhone and Android?",
        answer: "Yes! Using React Native, we build cross-platform mobile apps that run natively on both iOS and Android.",
      },
      {
        question: "Will you publish the app to the App Store and Google Play?",
        answer: "Yes, we handle the entire submission, app listing setup, ASO graphics, and approval workflow.",
      },
      {
        question: "Can the mobile app work offline without internet?",
        answer: "Yes, we implement local SQLite/AsyncStorage databases and background data synchronization so users can access key app features offline.",
      },
      {
        question: "How do push notifications work in the app?",
        answer: "We integrate Firebase Cloud Messaging (FCM) and OneSignal for automated transactional, promotional, and geo-targeted push notifications.",
      },
      {
        question: "Can you integrate in-app purchases and subscriptions?",
        answer: "Yes, we integrate Apple In-App Purchases, Google Play Billing, Stripe, and RevenueCat for seamless digital subscriptions and paywalls.",
      },
      {
        question: "How long does it take to build a custom mobile app?",
        answer: "A typical MVP mobile app takes 6 to 10 weeks from UI/UX wireframing to beta testing and app store deployment.",
      },
      {
        question: "What post-launch support do you provide for mobile apps?",
        answer: "We provide ongoing OS update compatibility checks, bug fixes, performance monitoring, and new feature additions.",
      },
    ],
    detailedSeoContent: {
      overview:
        "Larkspire delivers custom mobile app development services for startups and established brands. We design intuitive, fast, and feature-rich mobile apps for iOS and Android.",
      keyBenefits: [
        "Reach users on iOS and Android with a single unified codebase",
        "Boost customer retention with timely push notifications",
        "Monetize easily with in-app purchases and subscriptions",
        "Rely on secure cloud backends and offline data storage",
      ],
      deliverables: [
        "iOS & Android Production Apps",
        "Mobile UI/UX Design Assets",
        "Backend API & Database Infrastructure",
        "App Store & Play Store Deployment",
      ],
      idealFor: [
        "Startups launching new mobile-first digital products",
        "Brands wanting a direct mobile channel for customer loyalty",
        "Businesses seeking custom enterprise mobile tools",
      ],
    },
  },

  // 10. Web Apps & SaaS
  "web-apps-saas": {
    slug: "web-apps-saas",
    title: "Web Apps & SaaS",
    iconName: "Cloud",
    tagline: "Scalable Cloud SaaS Platforms & Custom Web Software",
    heroDescription:
      "Turn your product vision into a market-ready SaaS platform with multi-tenant architecture, subscription billing, dashboard analytics, and robust API infrastructure.",
    heroImage: getAssetPath("/images/services/web-apps-saas.jpg"),
    metaTitle: "Custom SaaS Development Services | Web Applications | Larkspire",
    metaDescription:
      "Build scalable Software-as-a-Service platforms with Larkspire. Multi-tenant architecture, Stripe billing, Next.js, and cloud backend engineering.",
    featuresList: [
      {
        title: "Multi-Tenant SaaS Architecture",
        description:
          "Secure cloud infrastructure supporting multi-tenancy, isolated customer data, and role management.",
      },
      {
        title: "Subscription & Stripe Billing Integration",
        description:
          "Automated recurring subscriptions, tiered plans, free trials, invoices, and payment dunning.",
      },
      {
        title: "Interactive Analytics & Dashboards",
        description:
          "Real-time visual charts, exportable reports, and custom data filters for platform end-users.",
      },
      {
        title: "RESTful & GraphQL API Ecosystem",
        description:
          "Robust API endpoints for mobile apps, third-party integrations, and developer webhooks.",
      },
      {
        title: "Enterprise User Auth & Security",
        description:
          "OAuth2, Single Sign-On (SSO), 2FA, session management, and encrypted database connections.",
      },
      {
        title: "Automated Cloud CI/CD Pipelines",
        description:
          "Zero-downtime automated deployments, containerization, and auto-scaling server infrastructure.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Product Discovery & Blueprint",
        description: "Defining SaaS feature specs, user personas, database schemas, and billing tiers.",
      },
      {
        number: "02",
        title: "MVP Development",
        description: "Engineering core dashboard features, auth flows, and Stripe billing pipelines.",
      },
      {
        number: "03",
        title: "Beta Testing & Security Audit",
        description: "Conducting vulnerability audits, load testing, and user feedback sessions.",
      },
      {
        number: "04",
        title: "Scale & Cloud Ops",
        description: "Launching on high-availability cloud infrastructure with 24/7 monitoring.",
      },
    ],
    whyUsPoints: [
      {
        title: "Fast Market Readiness",
        description: "Modular development blueprints allow us to deploy production MVPs rapidly.",
      },
      {
        title: "Built to Scale",
        description: "Cloud architecture engineered to handle thousands of concurrent active tenants.",
      },
      {
        title: "Full Product Ownership",
        description: "100% IP ownership — all custom code and cloud accounts belong entirely to you.",
      },
    ],
    relatedProjects: [
      {
        id: "saas-1",
        title: "MetricFlow Analytics SaaS",
        category: "Cloud SaaS",
        description: "B2B marketing analytics SaaS platform scaling 800+ subscriber accounts.",
        gradient: "from-teal-600 to-emerald-600",
      },
      {
        id: "saas-2",
        title: "DocuVault File Management",
        category: "Web Application",
        description: "Encrypted enterprise cloud document storage & electronic signing platform.",
        gradient: "from-blue-600 to-indigo-600",
      },
    ],
    faqs: [
      {
        question: "How long does it take to build a SaaS MVP?",
        answer: "A functional SaaS Minimum Viable Product (MVP) typically takes 6 to 12 weeks depending on feature complexity.",
      },
      {
        question: "Do you integrate Stripe subscription payments?",
        answer: "Yes! We set up Stripe Billing, customer portals, plan upgrades/downgrades, and automated dunning emails.",
      },
      {
        question: "What cloud infrastructure do you use for hosting SaaS platforms?",
        answer: "We deploy SaaS platforms on AWS, Vercel, Supabase, or Google Cloud Platform with auto-scaling database setups and CDN edge caching.",
      },
      {
        question: "How do you ensure multi-tenant SaaS data isolation?",
        answer: "We architect multi-tenant database isolation models using tenant ID scoping or separate schema spaces to guarantee customer data privacy.",
      },
      {
        question: "Can you build developer APIs and Webhooks for third-party integrations?",
        answer: "Yes, we design secure RESTful and GraphQL API endpoints along with webhook triggers for developer ecosystems.",
      },
      {
        question: "Who owns the source code and SaaS IP rights?",
        answer: "You retain 100% full intellectual property ownership of all custom source code, cloud databases, domain assets, and accounts.",
      },
      {
        question: "Do you provide ongoing SaaS DevOps and security monitoring?",
        answer: "Yes, we offer ongoing DevOps support, CI/CD automated deployments, security patch updates, and uptime monitoring.",
      },
    ],
    detailedSeoContent: {
      overview:
        "Larkspire provides custom SaaS and web application development services. We engineer secure, cloud-native platforms that transform innovative ideas into profitable digital software businesses.",
      keyBenefits: [
        "Generate predictable recurring revenue with automated subscription management",
        "Scale user capacity seamlessly with cloud microservices",
        "Deliver modern, intuitive dashboards end-users love",
        "Retain 100% ownership of source code and proprietary tech",
      ],
      deliverables: [
        "Full Multi-Tenant SaaS Web Platform",
        "Stripe Subscription & Billing Portal",
        "Admin & Customer Management Dashboards",
        "Cloud Hosting Setup & CI/CD Pipeline",
      ],
      idealFor: [
        "Tech founders building new B2B or B2C SaaS platforms",
        "Companies digitizing internal services into recurring software products",
        "Startups looking for rapid MVP development",
      ],
    },
  },

  // 11. Google Business Profile
  "google-business-profile": {
    slug: "google-business-profile",
    title: "Google Business Profile",
    iconName: "MapPin",
    tagline: "Local SEO & Google Maps Optimization",
    heroDescription:
      "Dominate local search results and attract nearby customers with complete Google Business Profile setup, local SEO optimization, review management, and Map Pack ranking strategies.",
    heroImage: getAssetPath("/images/services/google-business-profile.jpg"),
    metaTitle: "Google Business Profile Optimization Services | Local SEO | Larkspire",
    metaDescription:
      "Get found in your local area with Google Business Profile optimization by Larkspire. Top Google Maps rankings, local keywords, and review management.",
    featuresList: [
      {
        title: "Complete Profile Verification & Setup",
        description:
          "Correct category selection, business details, service area configuration, and official verification.",
      },
      {
        title: "Google Map Pack Ranking Strategy",
        description:
          "Optimizing geo-signals and local citations to rank your business in top 3 Google Map results.",
      },
      {
        title: "Local Keyword & Service Optimization",
        description:
          "Integrating high-converting local search phrases into business descriptions, services, and posts.",
      },
      {
        title: "Review Acquisition Strategy & Rep Management",
        description:
          "Systematic campaigns to collect authentic 5-star customer reviews and manage responses.",
      },
      {
        title: "Geo-Tagged Photos & Update Publishing",
        description:
          "Regular updates, photo uploads, and promotional posts to keep your profile active and favored by Google's algorithm.",
      },
      {
        title: "Monthly Local Call & Direction Analytics",
        description:
          "Tracking phone calls, website visits, map direction requests, and profile search impressions.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Profile Audit & Claiming",
        description: "Auditing existing listings, fixing duplicate records, and claiming your official profile.",
      },
      {
        number: "02",
        title: "Local Optimization",
        description: "Optimizing service categories, business description, operating hours, and media.",
      },
      {
        number: "03",
        title: "Citation & Review Campaign",
        description: "Building local directory citations and launching review request workflows.",
      },
      {
        number: "04",
        title: "Active Management",
        description: "Publishing weekly Google posts, uploading photos, and analyzing local lead volume.",
      },
    ],
    whyUsPoints: [
      {
        title: "More Local Phone Calls & Visits",
        description: "We optimize your profile to turn local searches into direct customer inquiries.",
      },
      {
        title: "Map Pack Expertise",
        description: "Proven tactics to boost rankings in Google's coveted local 3-pack.",
      },
      {
        title: "Continuous Reputation Care",
        description: "Proactive review management and regular media uploads to maintain listing authority.",
      },
    ],
    relatedProjects: [
      {
        id: "gbp-1",
        title: "Dental Clinic Local Leads 4x",
        category: "Google Business Profile",
        description: "Achieved #1 Map Pack placement generating 150+ monthly patient calls.",
        gradient: "from-teal-600 to-emerald-600",
      },
      {
        id: "gbp-2",
        title: "Multi-Location Auto Service",
        category: "Local SEO",
        description: "Optimized 5 location profiles with 300+ new 5-star reviews.",
        gradient: "from-blue-600 to-cyan-600",
      },
    ],
    faqs: [
      {
        question: "Why is Google Business Profile important for my business?",
        answer: "Google Business Profile drives high-intent local customers directly to your business via phone calls, website visits, and physical map directions.",
      },
      {
        question: "How long does it take to rank in Google Maps?",
        answer: "Profile optimizations often yield initial traffic improvements within 2 to 4 weeks, with top Map Pack rankings consolidating over 2 to 3 months.",
      },
      {
        question: "How do you optimize a Google Business Profile listing?",
        answer: "We optimize business categories, local service descriptions, geo-tagged photos, business hours, Q&A sections, and Google Posts updates.",
      },
      {
        question: "Can you help remove or manage fake/negative Google reviews?",
        answer: "We implement systematic review acquisition campaigns to generate authentic 5-star reviews and handle official Google dispute filings for policy-violating reviews.",
      },
      {
        question: "Do you fix NAP (Name, Address, Phone) inconsistencies across local directories?",
        answer: "Yes, we audit and synchronize your business NAP details across major citations, Apple Maps, Bing Places, and local directories.",
      },
      {
        question: "What monthly reports will I receive for Google Business Profile?",
        answer: "We provide monthly performance insights showing phone calls generated, website clicks, map direction requests, and search view impressions.",
      },
      {
        question: "Can you assist with suspended or unverified Google Business Profiles?",
        answer: "Yes, we resolve suspension issues, prepare official reinstatement documentation, and complete verification video submission requirements.",
      },
    ],
    detailedSeoContent: {
      overview:
        "Larkspire optimizes Google Business Profiles (GBP) for companies seeking local market dominance. We position your business at the top of Google Maps and local search results.",
      keyBenefits: [
        "Increase direct phone calls, map directions, and website visits",
        "Rank in the top 3 Google Maps local pack results",
        "Build brand trust through customer reviews and high rating scores",
        "Outshine local competitors with optimized Google Posts and media",
      ],
      deliverables: [
        "Profile Audit & Optimization Setup",
        "Local Citation & Directory Cleanup",
        "Google Posts & Photo Upload Schedule",
        "Monthly Local Performance Insight Reports",
      ],
      idealFor: [
        "Local service providers (plumbers, attorneys, clinics, contractors)",
        "Physical retail stores and showrooms wanting local walk-in traffic",
        "Multi-location companies scaling regional customer outreach",
      ],
    },
  },

  // 12. Poster Design
  "poster-design": {
    slug: "poster-design",
    title: "Poster Design",
    iconName: "ImageIcon",
    tagline: "Striking Promotional Graphics & Visual Editorial Assets",
    heroDescription:
      "Captivate your audience with high-impact poster designs, event banners, and visual editorial graphics crafted to demand attention both online and in print.",
    heroImage: getAssetPath("/images/services/poster-design.jpg"),
    metaTitle: "Custom Poster & Promotional Graphic Design | Larkspire",
    metaDescription:
      "Create high-impact event posters, promotional graphics, and digital artwork with Larkspire's creative poster design services.",
    featuresList: [
      {
        title: "Event & Concert Poster Artwork",
        description:
          "Eye-catching promotional posters for live events, music shows, and product drops.",
      },
      {
        title: "Corporate & Conference Banners",
        description:
          "Polished visual graphics for summits, trade shows, and corporate keynotes.",
      },
      {
        title: "Digital Social Campaign Posters",
        description:
          "High-resolution artwork tailored for digital ads, Instagram stories, and web banners.",
      },
      {
        title: "Print-Ready High-Res Formats",
        description:
          "Delivered with 300 DPI resolution, CMYK color profiles, and bleed margins ready for print shops.",
      },
      {
        title: "Custom Illustration & Typography",
        description:
          "Bespoke typography layouts and custom digital artwork crafted specifically for your topic.",
      },
      {
        title: "Multi-Size Resizing & Adaptations",
        description:
          "Flexible exports adapted for billboards, social feeds, email headers, and flyers.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Creative Brief",
        description: "Defining event details, message hierarchy, and aesthetic style.",
      },
      {
        number: "02",
        title: "Concept Design",
        description: "Drafting visual artwork compositions and typography arrangements.",
      },
      {
        number: "03",
        title: "Refinement & Details",
        description: "Polishing color grade, text clarity, and high-impact visual effects.",
      },
      {
        number: "04",
        title: "Export & Print Prep",
        description: "Delivering print-ready PDFs and digital media packages.",
      },
    ],
    whyUsPoints: [
      {
        title: "Bold Creative Visuals",
        description: "Artistic designs that stand out in crowded feeds and physical spaces.",
      },
      {
        title: "Print & Digital Perfection",
        description: "Exact color calibration for both high-end print presses and digital screens.",
      },
      {
        title: "Fast Turnaround",
        description: "Quick delivery schedules for time-sensitive event campaigns.",
      },
    ],
    relatedProjects: [
      {
        id: "poster-1",
        title: "Tech Summit 2026 Keynote Poster",
        category: "Poster Design",
        description: "Futuristic 3D poster design for international developer conference.",
        gradient: "from-purple-600 to-indigo-600",
      },
      {
        id: "poster-2",
        title: "Apex Fest Promotional Campaign",
        category: "Event Artwork",
        description: "Vibrant music festival artwork suite across print & digital channels.",
        gradient: "from-pink-600 to-rose-600",
      },
    ],
    faqs: [
      {
        question: "Can I get both digital and print versions of my poster?",
        answer: "Yes! We provide print-ready 300 DPI CMYK PDFs as well as web-optimized RGB files for social media.",
      },
      {
        question: "How quickly can a custom poster design be completed?",
        answer: "Initial poster concepts are typically delivered within 3 to 5 business days.",
      },
      {
        question: "What sizes and dimensions can you design posters for?",
        answer: "We design for all standard formats: A4, A3, A2, A1, A0, billboard scale, as well as digital ratios like 1:1, 4:5, and 9:16 vertical stories.",
      },
      {
        question: "Do you create custom illustrations and typography for posters?",
        answer: "Yes, every poster artwork is custom designed with bespoke typography, digital composite artwork, and visual effects.",
      },
      {
        question: "How many revision rounds are included in poster design?",
        answer: "We offer unlimited minor tweaks during the review stage until the composition and typography align perfectly with your vision.",
      },
      {
        question: "Can you design event poster suites for concerts and conferences?",
        answer: "Yes! We create complete promo suites including main posters, speaker banners, schedule flyers, badges, and social media tickets.",
      },
      {
        question: "What file formats will I receive upon final handover?",
        answer: "You receive high-resolution vector PDF, TIFF, PNG, JPG, and layered source files (AI/PSD/Figma).",
      },
    ],
    detailedSeoContent: {
      overview:
        "Larkspire offers creative poster design services for events, product announcements, and marketing campaigns. We create compelling visual artwork that communicates your message clearly.",
      keyBenefits: [
        "Capture viewer attention with striking artistic design",
        "Promote events effectively across digital and physical mediums",
        "Receive print-perfect 300 DPI files with proper bleeds and CMYK colors",
        "Maintain brand consistency across all promotional collateral",
      ],
      deliverables: [
        "High-Resolution Print-Ready PDF Files",
        "Web & Social Media Optimized Graphic Formats",
        "Multiple Dimension Adaptations (Story, Banner, Feed)",
      ],
      idealFor: [
        "Event organizers promoting keynotes, concerts, or festivals",
        "Brands launching new product collections",
        "Businesses preparing for trade shows and conferences",
      ],
    },
  },

  // 13. Meta Ads
  "meta-ads": {
    slug: "meta-ads",
    title: "Meta Ads & Paid Growth",
    iconName: "Target",
    tagline: "High-ROI Facebook & Instagram Ad Campaigns",
    heroDescription:
      "Drive targeted leads and sales with high-converting Meta (Facebook & Instagram) ad campaigns — featuring high-performing ad creatives, audience targeting, and funnel optimization.",
    heroImage: getAssetPath("/images/services/meta-ads.jpg"),
    metaTitle: "Meta Ads & Facebook Advertising Services | Paid Growth | Larkspire",
    metaDescription:
      "Scale revenue with targeted Facebook and Instagram ad campaigns engineered by Larkspire. Custom creative, A/B testing, and ROI tracking.",
    featuresList: [
      {
        title: "Custom Ad Creative & Copywriting",
        description:
          "High-converting static, carousel, and video ad creatives designed to stop the scroll.",
      },
      {
        title: "Custom & Lookalike Audience Targeting",
        description:
          "Laser-focused demographic, interest, and buyer behavior targeting on Meta networks.",
      },
      {
        title: "Conversion Pixel & API Setup",
        description:
          "Robust setup of Meta Pixel and Conversions API (CAPI) for accurate tracking post-iOS14.",
      },
      {
        title: "A/B Creative & Headline Testing",
        description:
          "Systematic split-testing of ad hooks, images, videos, and offers to optimize Cost Per Lead (CPL).",
      },
      {
        title: "Retargeting & Funnel Sequence Setup",
        description:
          "Dynamic retargeting ads bringing warm site visitors back to complete purchase or lead forms.",
      },
      {
        title: "ROAS & Performance Analytics",
        description:
          "Transparent weekly reporting tracking Spend, Impressions, CTR, ROAS, and Cost Per Acquisition.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Audit & Funnel Strategy",
        description: "Analyzing target buyer avatars, existing Meta ad accounts, and conversion goals.",
      },
      {
        number: "02",
        title: "Creative Production & Copy",
        description: "Designing high-converting ad graphics, video hooks, and compelling sales copy.",
      },
      {
        number: "03",
        title: "Campaign Setup & Pixel Sync",
        description: "Configuring audience segments, budget allocations, and Conversions API.",
      },
      {
        number: "04",
        title: "Scaling & Optimization",
        description: "Cutting underperforming ads, scaling winning creatives, and expanding audiences.",
      },
    ],
    whyUsPoints: [
      {
        title: "Creative + Analytics Focus",
        description: "We pair eye-catching design with rigorous data analysis to maximize ROAS.",
      },
      {
        title: "Accurate CAPI Tracking",
        description: "Server-side tracking setup ensures maximum data capture for Meta's AI algorithm.",
      },
      {
        title: "Transparent Ad Spend",
        description: "You retain 100% ownership of your Meta ad accounts — no hidden markups.",
      },
    ],
    relatedProjects: [
      {
        id: "meta-1",
        title: "D2C E-Commerce 4.5x ROAS",
        category: "Meta Ads",
        description: "Scaled monthly Meta ad spend from $5k to $30k at 4.5x return on ad spend.",
        gradient: "from-teal-600 to-emerald-600",
      },
      {
        id: "meta-2",
        title: "B2B SaaS Lead Generation",
        category: "Facebook & IG Ads",
        description: "Reduced Cost Per Qualified Demo Signup by 42% through creative A/B testing.",
        gradient: "from-blue-600 to-indigo-600",
      },
    ],
    faqs: [
      {
        question: "What ad budget do I need to start Meta Ads?",
        answer: "We recommend starting with a minimum testing ad budget of $1,000 to $2,000 per month to gather statistical data and optimize winning creatives.",
      },
      {
        question: "Do you create the ad images and videos?",
        answer: "Yes! We handle full ad creative design, copywriting, motion graphics, and variation testing.",
      },
      {
        question: "What is Meta Conversions API (CAPI) and why is it important?",
        answer: "Meta CAPI tracks web conversions server-to-server, overcoming iOS 14+ ad blocker limitations to feed accurate conversion data back to Meta's AI algorithm.",
      },
      {
        question: "How long before we see positive ROAS from Meta Ad campaigns?",
        answer: "Initial testing data is gathered in the first 7 to 14 days. Profitable scaling and ROAS optimization occur in weeks 3 through 6.",
      },
      {
        question: "Do I retain ownership of my Facebook Ad Account and Pixel?",
        answer: "Yes, all campaigns are run inside your own Meta Business Manager. You retain 100% ownership of accounts, pixels, and customer data.",
      },
      {
        question: "How do retargeting campaigns work on Facebook & Instagram?",
        answer: "We build custom audience segments to re-engage past website visitors, cart abandoners, and Instagram engagers with tailored special offers.",
      },
      {
        question: "What analytics reports do you provide for Meta Ads?",
        answer: "We provide weekly and monthly performance reports detailing Spend, Impressions, CTR, Cost Per Lead (CPL), ROAS, and customer acquisition costs.",
      },
    ],
    detailedSeoContent: {
      overview:
        "Larkspire manages high-performance Meta (Facebook & Instagram) ad campaigns for growth-minded businesses. We create high-converting ad assets and optimize campaigns for maximum ROI.",
      keyBenefits: [
        "Generate predictable streams of customer leads and sales",
        "Lower customer acquisition costs through creative split-testing",
        "Re-engage site visitors with warm retargeting sequences",
        "Gain full visibility into ROAS and campaign metrics",
      ],
      deliverables: [
        "Meta Ad Campaign Strategy & Setup",
        "High-Converting Ad Images & Motion Graphics",
        "Meta Pixel & Conversions API Setup",
        "Weekly Performance Analytics Reports",
      ],
      idealFor: [
        "E-commerce brands looking to scale store sales",
        "Service businesses wanting steady qualified lead flow",
        "Startups needing immediate targeted customer acquisition",
      ],
    },
  },

  // 14. Digital Marketing (Existing key)
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    iconName: "TrendingUp",
    tagline: "Omnichannel Growth & Strategic Customer Acquisition",
    heroDescription:
      "Scale your revenue with comprehensive digital marketing campaigns — combining PPC ad management, social media strategy, content marketing, and conversion funnels.",
    heroImage: getAssetPath("/images/services/digital-marketing.jpg"),
    metaTitle: "Digital Marketing Agency Services | Growth & PPC | Larkspire",
    metaDescription:
      "Drive sustainable business growth with Larkspire's digital marketing services. PPC campaigns, content marketing, funnel optimization, and social media growth.",
    featuresList: [
      {
        title: "Omnichannel Paid Ad Campaigns",
        description:
          "Integrated PPC campaigns across Google Search, Meta, LinkedIn, and YouTube.",
      },
      {
        title: "Conversion Funnel Optimization",
        description:
          "Designing high-converting landing pages and lead magnets to maximize visitor conversions.",
      },
      {
        title: "Content Marketing & Authority Strategy",
        description:
          "Creating strategic blog content, case studies, and lead magnets that establish brand authority.",
      },
      {
        title: "Social Media Growth & Management",
        description:
          "Curating strategic social media content calendars and audience engagement strategies.",
      },
      {
        title: "Email Marketing & Automation Funnels",
        description:
          "Automated welcome flows, abandoned cart emails, and customer nurture sequences.",
      },
      {
        title: "Data Analytics & Attribution Modeling",
        description:
          "Setting up Google Analytics 4 (GA4), custom dashboards, and ROI attribution models.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Growth Audit & Planning",
        description: "Evaluating current traffic channels, customer LTV, and competitive positioning.",
      },
      {
        number: "02",
        title: "Funnel & Campaign Build",
        description: "Launching landing pages, tracking pixels, email sequences, and ad campaigns.",
      },
      {
        number: "03",
        title: "Optimization & A/B Testing",
        description: "Iterating on ad copy, landing page conversion elements, and targeting.",
      },
      {
        number: "04",
        title: "Scale & Revenue Tracking",
        description: "Scaling profitable ad channels and expanding audience reach.",
      },
    ],
    whyUsPoints: [
      {
        title: "Full Funnel Approach",
        description: "We connect top-of-funnel traffic directly to bottom-line sales revenue.",
      },
      {
        title: "Data-Driven Decisions",
        description: "Every marketing dollar is tracked, tested, and optimized for maximum ROI.",
      },
      {
        title: "Dedicated Growth Managers",
        description: "Direct communication with experienced digital strategists.",
      },
    ],
    relatedProjects: [
      {
        id: "mktg-1",
        title: "B2B SaaS Revenue Growth 2.8x",
        category: "Digital Marketing",
        description: "Omnichannel growth campaign scaling annual recurring revenue.",
        gradient: "from-teal-600 to-emerald-600",
      },
      {
        id: "mktg-2",
        title: "E-Commerce Holiday Campaign",
        category: "Omnichannel PPC",
        description: "Multi-channel PPC & email campaign generating record Q4 store sales.",
        gradient: "from-purple-600 to-indigo-600",
      },
    ],
    faqs: [
      {
        question: "What digital marketing channels do you specialize in?",
        answer: "We specialize in Google Search Ads, Meta Ads (Facebook & Instagram), LinkedIn Ads, SEO, Content Marketing, and Email Automation.",
      },
      {
        question: "How do you measure marketing ROI?",
        answer: "We set up clear attribution tracking through GA4, custom dashboards, and conversion metrics to measure direct cost per acquisition and ROAS.",
      },
      {
        question: "What is a Conversion Funnel and why does my business need one?",
        answer: "A conversion funnel guides cold prospects into paying customers through targeted ads, high-converting landing pages, lead magnets, and automated email nurture flows.",
      },
      {
        question: "Can you build automated email marketing sequences?",
        answer: "Yes! We build automated welcome series, abandoned cart recovery sequences, customer onboarding flows, and monthly newsletter campaigns in Klaviyo or Mailchimp.",
      },
      {
        question: "How do you optimize landing page conversion rates?",
        answer: "We optimize headline messaging, CTA buttons, social proof reviews, page load speed, and user flow friction using scientific A/B testing.",
      },
      {
        question: "Do you offer custom monthly growth retainers?",
        answer: "Yes, we design custom monthly growth packages combining paid ad management, SEO, content creation, and analytics under one dedicated team.",
      },
      {
        question: "How quickly can we launch a full digital marketing campaign?",
        answer: "Campaign setup, landing page development, tracking pixel installation, and ad creative approval typically take 7 to 10 business days.",
      },
    ],
    detailedSeoContent: {
      overview:
        "Larkspire provides full-service digital marketing strategies designed to drive predictable revenue. From paid traffic to email funnels, we help ambitious brands scale efficiently.",
      keyBenefits: [
        "Acquire high-intent customers across multiple online channels",
        "Maximize revenue per customer through automated email funnels",
        "Improve campaign return on investment with scientific A/B testing",
        "Access real-time analytics dashboards for transparent reporting",
      ],
      deliverables: [
        "Omnichannel Marketing Strategy Blueprint",
        "PPC & Social Ad Campaign Management",
        "Landing Page & Email Funnel Setup",
        "Monthly GA4 & Revenue Analytics Reports",
      ],
      idealFor: [
        "Growing brands needing a unified digital marketing partner",
        "Businesses wanting to scale customer acquisition channels",
        "Companies looking to optimize marketing funnel conversion rates",
      ],
    },
  },

  // 15. Digital Wedding Invitation Card
  "digital-wedding-invitation": {
    slug: "digital-wedding-invitation",
    title: "Digital Wedding Invitation Card",
    iconName: "Heart",
    tagline: "Invite, Impress & Celebrate Digitally – Interactive Wedding Cards in Jaipur",
    heroDescription:
      "Make your special day extra memorable with custom animated and interactive digital wedding invitations designed with love in Jaipur. Featuring romantic background music, instant WhatsApp RSVP forms, multi-day event schedules, photo galleries, and direct Google Maps venue navigation.",
    heroImage: getAssetPath("/images/services/digital-wedding-invitation.jpg"),
    metaTitle: "Digital Wedding Card & Wedding Invitation Online Jaipur | Larkspire",
    metaDescription:
      "Looking for digital wedding card design or wedding invitation online in Jaipur? Larkspire creates animated, interactive digital wedding invitations with WhatsApp RSVP, music, photo gallery & Google Maps venue navigation.",
    featuresList: [
      {
        title: "Custom Royal & Modern Designs",
        description:
          "Bespoke digital wedding invitation card themes tailored for your love story — from Royal Rajasthani heritage palace motifs to modern minimalist luxury and floral pastel aesthetics.",
      },
      {
        title: "Smooth Animations & Motion Transitions",
        description:
          "Captivate your guests with elegant motion graphics, animated floral blooms, glowing typography, and interactive page scroll transitions built for smooth viewing.",
      },
      {
        title: "Instant WhatsApp RSVP & Headcount Form",
        description:
          "Streamline your wedding planning with one-click WhatsApp RSVP integration and automated guest response tracking for Haldi, Mehendi, Sangeet, Wedding & Reception.",
      },
      {
        title: "Interactive Multi-Event Schedule with Google Maps",
        description:
          "Keep guests informed with dedicated event schedules for Haldi, Mehendi, Sangeet, Wedding, and Reception — featuring direct Google Maps GPS venue navigation links.",
      },
      {
        title: "Background Music & Couple Photo Gallery",
        description:
          "Set the romantic mood with auto-playing background instrumental music, pre-wedding shoot photo galleries, and an interactive couple love story timeline.",
      },
      {
        title: "Easy WhatsApp & Social Media One-Click Sharing",
        description:
          "Share your digital wedding card effortlessly via WhatsApp messages, Instagram DMs, email, and social media with personalized message templates.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Design Theme & Concept Selection",
        description:
          "Choose from our royal Jaipur wedding invitation card designs or request a completely bespoke theme reflecting your wedding decor and color palette.",
      },
      {
        number: "02",
        title: "Content, Media & Event Details Collection",
        description:
          "Share your event dates, venue details, couple photos, love story narrative, background song choice, and custom RSVP preferences.",
      },
      {
        number: "03",
        title: "Interactive Feature & Animation Build",
        description:
          "We craft your interactive wedding web page with animations, Google Maps venue links, WhatsApp RSVP form, and smartphone responsiveness.",
      },
      {
        number: "04",
        title: "Review, Instant Delivery & Sharing Link",
        description:
          "Preview your digital wedding card, request final tweaks, and receive a fast-loading custom web link ready for instant WhatsApp sharing to your guest list.",
      },
    ],
    whyUsPoints: [
      {
        title: "Jaipur's Premier Digital Wedding Card Creator",
        description:
          "Deep understanding of Jaipur's rich royal wedding culture combined with cutting-edge web design and interactive motion graphics.",
      },
      {
        title: "Express 24 to 48-Hour Fast Delivery",
        description:
          "Get your complete, interactive digital wedding invitation online ready in just 24 to 48 hours with dedicated support for edit requests.",
      },
      {
        title: "100% Mobile & WhatsApp Optimized",
        description:
          "Flawless loading on all smartphones, tablets, and laptops with zero app downloads required for your invited guests.",
      },
    ],
    relatedProjects: [
      {
        id: "wedding-1",
        title: "Rahul & Priya - Royal Jaipur Palace Wedding E-Invite",
        category: "Digital Wedding Card",
        description:
          "Luxury Rajasthani royal palace themed digital wedding invitation website with WhatsApp RSVP, background flute music, and Google Maps venue guide.",
        gradient: "from-amber-600 to-rose-600",
      },
      {
        id: "wedding-2",
        title: "Ananya & Vikram - Modern Floral Interactive E-Card",
        category: "Wedding Invitation Online",
        description:
          "Modern animated pastel floral wedding invitation online featuring multi-day event timelines for Sangeet, Haldi & Reception.",
        gradient: "from-pink-600 to-rose-500",
      },
      {
        id: "wedding-3",
        title: "Siddharth & Meera - Heritage Destination Wedding Card",
        category: "Digital Wedding Invitation",
        description:
          "Interactive destination wedding web card with couple love story timeline, photo gallery, and instant guest headcount tracking.",
        gradient: "from-purple-600 to-pink-600",
      },
    ],
    faqs: [
      {
        question: "What is a digital wedding invitation card and why choose it over paper invitations?",
        answer:
          "A digital wedding invitation card (or wedding web page) is an interactive, animated online invitation accessed via a simple web link. Unlike traditional paper invitations, digital wedding cards feature auto-playing background music, instant WhatsApp RSVP responses, live Google Maps venue navigation, photo galleries, and zero printing delays. It allows you to invite guests instantly across Jaipur, India, or worldwide at a fraction of the cost.",
      },
      {
        question: "How does the WhatsApp RSVP feature work in the digital wedding card?",
        answer:
          "When guests open your wedding invitation online, they click the 'RSVP Now' button. A sleek form allows them to select attending events (Haldi, Mehendi, Sangeet, Wedding, Reception) and submit guest count. The confirmation is sent directly to your WhatsApp or centralized spreadsheet in real time.",
      },
      {
        question: "Can we include background music, video clips, and Google Maps venue links?",
        answer:
          "Yes! You can add your favorite romantic song or instrumental track that plays as guests browse your card. Each multi-day wedding event (Haldi, Sangeet, Shaadi, Reception) includes a direct Google Maps button so guests can navigate to your wedding venue in Jaipur with one tap.",
      },
      {
        question: "How quickly can Larkspire deliver our digital wedding card in Jaipur?",
        answer:
          "We offer express fast delivery in 24 to 48 hours! Once you share your couple photos, event dates, venue details, and song choice, our creative design team crafts and delivers your live digital wedding invitation link.",
      },
      {
        question: "Do guests need to download any app to view our wedding invitation online?",
        answer:
          "Not at all! Your digital wedding invitation opens instantly in any web browser (Safari, Chrome, WhatsApp built-in browser) on mobile phones, tablets, or computers with zero app downloads required.",
      },
      {
        question: "Can we customize the digital wedding card for Jaipur royal themes or modern styles?",
        answer:
          "Absolutely. We offer customizable design templates including Royal Rajasthani Palace & Elephant themes, Golden Luxury Vintage, Floral Pastel Romantic, Modern Minimalist, and Royal Caricature styles to match your Jaipur wedding aesthetic.",
      },
      {
        question: "How do we share the online digital wedding invitation card with our guests?",
        answer:
          "We provide a custom web link along with tailored WhatsApp text messages and PDF visual cards. You can broadcast or forward the link directly on WhatsApp groups, individual chats, or social media.",
      },
    ],
    detailedSeoContent: {
      overview:
        "Larkspire is Jaipur's top digital wedding invitation card agency, delivering high-impact online wedding invitations, interactive e-cards, and wedding website designs for couples in Jaipur and worldwide. We blend royal Rajasthani design aesthetics with modern web technologies to create digital wedding cards featuring custom background music, WhatsApp RSVP, interactive photo galleries, multi-event schedules (Haldi, Mehendi, Sangeet, Wedding, Reception), and live Google Maps location navigation. Ranking top for wedding invitation online and digital wedding card services in Jaipur, Larkspire makes sending invitations effortless, eco-friendly, and truly unforgettable.",
      keyBenefits: [
        "Ranked top choice for digital wedding card design & wedding invitation online in Jaipur",
        "Save thousands on paper printing with eco-friendly animated e-cards",
        "Collect instant guest RSVPs and headcount via WhatsApp integration",
        "Direct Google Maps GPS venue navigation buttons for hassle-free guest arrivals",
        "Auto-playing romantic background music & interactive couple photo galleries",
        "Express 24-48 hour delivery with dedicated support for last-minute date or venue edits",
      ],
      deliverables: [
        "Custom Animated Digital Wedding Invitation Web Page",
        "Instant WhatsApp RSVP Integration & Guest Tracker",
        "Google Maps Venue Location Navigation Buttons",
        "Background Music Auto-Player & Photo Gallery Setup",
        "WhatsApp Ready Sharing Message & Digital Teaser Graphic",
        "Post-Launch Event Edit Support",
      ],
      idealFor: [
        "Couples searching for wedding invitation online or digital wedding card services in Jaipur",
        "Families planning royal Rajasthani palace, resort, or heritage destination weddings",
        "NRIs and tech-savvy couples wanting modern, interactive digital invitation cards",
        "Couples needing fast, 24-48 hour express wedding invitation delivery",
      ],
    },
  },
};

export const servicesData = servicesDataMap;
