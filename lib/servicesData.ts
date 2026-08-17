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

export interface ServiceData {
  slug: string;
  title: string;
  iconName: "Code" | "Palette" | "TrendingUp" | "ImageIcon" | "Search" | "Target";
  tagline: string;
  heroDescription: string;
  heroImage?: string;
  metaTitle: string;
  metaDescription: string;
  featuresList: ServiceFeature[];
  processSteps: ProcessStep[];
  whyUsPoints: WhyUsPoint[];
  relatedProjects: RelatedProject[];
}

export const servicesDataMap: Record<string, ServiceData> = {
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    iconName: "Code",
    tagline: "High-Performance Custom Web Experiences",
    heroDescription:
      "We design and engineer bespoke, lightning-fast web applications built with clean, high-performance architecture. Optimized for sub-second page loads, conversion, and seamless user experiences.",
    heroImage: getAssetPath("/images/services/web-development.jpg"),
    metaTitle: "Custom Web Development | Larkspire",
    metaDescription:
      "Custom web development services engineered for high speed, conversion, and scalability by Larkspire.",
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
        title: "Architecture & Wireframing",
        description:
          "We analyze your goals, map user journeys, and establish technical architecture and component systems.",
      },
      {
        number: "02",
        title: "UI/UX & Interactive Design",
        description:
          "Crafting pixel-perfect layouts, typography systems, and interactive motion prototypes for your review.",
      },
      {
        number: "03",
        title: "Clean Code Engineering",
        description:
          "Developing semantic web components, fluid animations, and API integrations.",
      },
      {
        number: "04",
        title: "Optimization & Launch",
        description:
          "Rigorous cross-browser testing, performance auditing, SEO setup, and smooth production deployment.",
      },
    ],
    whyUsPoints: [
      {
        title: "Zero Bloat & Peak Speed",
        description:
          "Zero heavy page builders or slow plugins. Pure custom engineering for maximum speed, security, and performance.",
      },
      {
        title: "Conversion-Focused UX",
        description:
          "We don't just write code; we design user experiences calculated to turn site visitors into paying clients.",
      },
      {
        title: "Dedicated Direct Partnership",
        description:
          "Direct line to your lead engineer throughout the project. Transparent updates, clean handoffs, and ongoing support.",
      },
    ],
    relatedProjects: [
      {
        id: "p1",
        title: "Apex FinTech Web Platform",
        category: "Web Development",
        description:
          "Custom web app with real-time financial analytics dashboard.",
        gradient: "from-teal-800 via-slate-900 to-teal-900",
      },
      {
        id: "p7",
        title: "Horizon Enterprise Web Portal",
        category: "Web Development",
        description:
          "High-speed SaaS web platform with interactive component library.",
        gradient: "from-slate-900 via-teal-800 to-teal-600",
      },
    ],
  },

  "graphic-design": {
    slug: "graphic-design",
    title: "Graphic & Brand Design",
    iconName: "Palette",
    tagline: "Unforgettable Visual Identities & Systems",
    heroDescription:
      "Transform your brand with bespoke visual identity systems, modern typography, logo design, design tokens, and brand guidelines crafted to capture immediate market attention.",
    heroImage: getAssetPath("/images/services/graphic-design.jpg"),
    metaTitle: "Graphic & Brand Design Services | Larkspire",
    metaDescription:
      "Bespoke graphic design, visual branding, typography systems, and corporate design tokens crafted by Larkspire.",
    featuresList: [
      {
        title: "Logo & Brand Symbol Design",
        description:
          "Distinctive, memorable brand marks designed for versatility across digital, print, and merchandise applications.",
      },
      {
        title: "Design Systems & Token Libraries",
        description:
          "Comprehensive color palettes, typography scales, spacing rules, and UI token documentation.",
      },
      {
        title: "Brand Style Guidelines",
        description:
          "In-depth brand books outlining clear rules for logo usage, brand voice, visual hierarchy, and asset application.",
      },
      {
        title: "Vector Graphic Artwork",
        description:
          "Custom vector illustrations, iconography sets, and digital art tailored specifically to your visual language.",
      },
      {
        title: "Corporate Stationery & Collateral",
        description:
          "Business cards, letterheads, presentation templates, and digital media kits built to elevate brand prestige.",
      },
      {
        title: "Packaging & Print Production",
        description:
          "Print-ready product packaging, labels, and promotional materials prepped to perfection for high-end print runs.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Brand Discovery & Moodboards",
        description:
          "We explore your market position, target demographic, and visual aspirations to define the brand direction.",
      },
      {
        number: "02",
        title: "Concept Exploration",
        description:
          "Developing multiple distinct visual directions, vector logo marks, and typographic pairings.",
      },
      {
        number: "03",
        title: "Refinement & Tokenizing",
        description:
          "Polishing the selected concept, generating full brand asset suites, color scales, and design tokens.",
      },
      {
        number: "04",
        title: "Guidelines & Handoff",
        description:
          "Delivering master vector files, digital design tokens, and comprehensive brand usage documentation.",
      },
    ],
    whyUsPoints: [
      {
        title: "Iconic Visual Polish",
        description:
          "Every curve, font pairing, and color tint is meticulously chosen to evoke luxury, confidence, and authority.",
      },
      {
        title: "Digital-First Versatility",
        description:
          "Designed from the ground up to scale effortlessly from a 16px favicon to giant billboards.",
      },
      {
        title: "Cohesive Ecosystem",
        description:
          "We align your brand design directly with your web presence and marketing collaterals for total brand consistency.",
      },
    ],
    relatedProjects: [
      {
        id: "p2",
        title: "Lumina Brand Identity System",
        category: "Graphic Design",
        description:
          "Comprehensive visual design system, typography guidelines, and logo.",
        gradient: "from-teal-700 via-teal-800 to-slate-800",
      },
      {
        id: "p8",
        title: "Krypton Brand Book & Tokens",
        category: "Graphic Design",
        description:
          "Minimalist logo design, visual guidelines, and corporate stationery.",
        gradient: "from-teal-700 via-slate-900 to-teal-800",
      },
    ],
  },

  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    iconName: "TrendingUp",
    tagline: "Omnichannel Growth & Funnel Optimization",
    heroDescription:
      "Accelerate revenue with data-backed digital marketing strategies, conversion funnel optimization, content campaigns, and performance analytics built for maximum ROI.",
    heroImage: getAssetPath("/images/services/digital-marketing.jpg"),
    metaTitle: "Digital Marketing & Growth Agency | Larkspire",
    metaDescription:
      "Omnichannel digital marketing, conversion funnel optimization, and data-driven growth strategies by Larkspire.",
    featuresList: [
      {
        title: "Full-Funnel Growth Strategy",
        description:
          "Mapping out end-to-end customer acquisition funnels from initial awareness to high-converting purchase actions.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description:
          "A/B testing, heatmap analysis, user friction reduction, and landing page engineering to maximize conversion rates.",
      },
      {
        title: "Content Marketing Campaigns",
        description:
          "Strategic visual content, editorial articles, and social media campaigns engineered to engage target audiences.",
      },
      {
        title: "Email & Automation Funnels",
        description:
          "Nurture sequences, lead magnet automation, cart recovery workflows, and customer retention campaigns.",
      },
      {
        title: "Performance Analytics & Tracking",
        description:
          "Server-side event tracking, custom GA4 dashboards, and transparent ROI reporting for complete channel clarity.",
      },
      {
        title: "Competitor Market Intelligence",
        description:
          "In-depth analysis of market competitors, positioning gaps, keyword opportunities, and ad strategies.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Audit & Baseline Analysis",
        description:
          "Reviewing current digital assets, analytics data, target demographics, and conversion bottlenecks.",
      },
      {
        number: "02",
        title: "Strategy & Channel Blueprint",
        description:
          "Designing custom multi-channel campaign blueprints aligned directly with revenue goals.",
      },
      {
        number: "03",
        title: "Campaign Execution",
        description:
          "Deploying landing pages, ad creatives, email automation, and conversion tracking systems.",
      },
      {
        number: "04",
        title: "Continuous Optimization",
        description:
          "Daily monitoring, multivariate testing, budget scaling, and weekly transparent metric reports.",
      },
    ],
    whyUsPoints: [
      {
        title: "Focus on Real Profitability",
        description:
          "We prioritize bottom-line revenue, customer acquisition cost (CAC), and customer lifetime value (LTV) over vanity metrics.",
      },
      {
        title: "Seamless Design Integration",
        description:
          "Our marketing campaigns leverage world-class graphic design and fast web engineering for superior conversion.",
      },
      {
        title: "Full Transparency",
        description:
          "Custom real-time reporting dashboards with zero hidden formulas or inflated reporting data.",
      },
    ],
    relatedProjects: [
      {
        id: "p3",
        title: "Pulse Digital Campaign Growth",
        category: "Digital Marketing",
        description:
          "Omnichannel digital strategy resulting in 4.5x ROAS and lead scaling.",
        gradient: "from-slate-900 via-teal-700 to-teal-800",
      },
    ],
  },

  "poster-design": {
    slug: "poster-design",
    title: "Poster & Editorial Design",
    iconName: "ImageIcon",
    tagline: "High-Impact Visual Artwork & Print Media",
    heroDescription:
      "Capture immediate visual focus with bespoke promotional posters, event artwork, digital billboards, and editorial graphics crafted with master-level typography and composition.",
    heroImage: getAssetPath("/images/services/poster-design.jpg"),
    metaTitle: "Bespoke Poster & Print Design | Larkspire",
    metaDescription:
      "High-impact poster design, promotional artwork, event graphics, and editorial print media by Larkspire.",
    featuresList: [
      {
        title: "Promotional & Event Posters",
        description:
          "Eye-catching poster designs for music festivals, product launches, corporate conferences, and creative summits.",
      },
      {
        title: "Digital Display & Billboard Ads",
        description:
          "Ultra-high-resolution artwork formatted for large-scale digital displays, LED billboards, and web banners.",
      },
      {
        title: "Editorial & Typography Layouts",
        description:
          "Expressive typographic arrangements, magazine covers, lookbooks, and promotional editorial layouts.",
      },
      {
        title: "3D & Vector Art Integration",
        description:
          "Custom visual elements, 3D render textures, and geometric vector graphics blended seamlessly into artwork.",
      },
      {
        title: "Social Media Motion Posters",
        description:
          "Animated micro-motion poster variants optimized for Instagram Reels, TikTok, and digital billboard loops.",
      },
      {
        title: "Print Production Pre-Flight",
        description:
          "Professional CMYK color profile setup, bleed calibration, and vector export for flawless printing.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Creative Brief & Concept",
        description:
          "Defining event themes, target audience emotion, visual hierarchy, and medium specifications.",
      },
      {
        number: "02",
        title: "Typography & Sketching",
        description:
          "Drafting custom letterforms, composition grids, color schemes, and visual focus points.",
      },
      {
        number: "03",
        title: "Digital Rendering & Polish",
        description:
          "Executing vector graphics, texture overlays, contrast grading, and resolution scaling.",
      },
      {
        number: "04",
        title: "Final Export & Pre-Press",
        description:
          "Delivering print-ready PDF/X files and digital display assets optimized for all screen sizes.",
      },
    ],
    whyUsPoints: [
      {
        title: "Masterful Composition",
        description:
          "Poster designs backed by classical design principles, bold focal points, and striking modern aesthetics.",
      },
      {
        title: "Multi-Format Versatility",
        description:
          "One design adapted seamlessly into print posters, social media banners, and animated display screens.",
      },
      {
        title: "Rapid Turnaround",
        description:
          "Fast conceptualization and delivery to meet tight campaign timelines without compromising quality.",
      },
    ],
    relatedProjects: [
      {
        id: "p4",
        title: "Vanguard Summit Poster Series",
        category: "Poster Design",
        description:
          "High-impact digital & print artwork for international creative summit.",
        gradient: "from-teal-800 via-slate-800 to-teal-600",
      },
      {
        id: "p9",
        title: "Starlight Festival Digital Posters",
        category: "Poster Design",
        description:
          "Vibrant promotional poster artwork formatted for digital billboards.",
        gradient: "from-teal-800 via-teal-600 to-slate-900",
      },
    ],
  },

  "search-engine-optimization": {
    slug: "search-engine-optimization",
    title: "SEO Optimization",
    iconName: "Search",
    tagline: "Dominant Search Rankings & Organic Growth",
    heroDescription:
      "Rank at the top of search results with technical SEO audits, keyword strategy, high-authority content optimization, and structured schema implementation designed for high-intent traffic.",
    heroImage: getAssetPath("/images/services/search-engine-optimization.jpg"),
    metaTitle: "Technical & Content SEO Optimization | Larkspire",
    metaDescription:
      "Enterprise technical SEO, keyword strategy, content optimization, and search rankings growth services by Larkspire.",
    featuresList: [
      {
        title: "Comprehensive Technical SEO Audit",
        description:
          "In-depth analysis of crawlability, indexation, site speed, internal linking structure, and canonical tags.",
      },
      {
        title: "High-Intent Keyword Research",
        description:
          "Identifying lucrative search terms, buyer intent queries, and competitor ranking opportunities.",
      },
      {
        title: "On-Page & Content Optimization",
        description:
          "Optimizing title tags, meta descriptions, H1-H4 headings, content structure, and internal link silos.",
      },
      {
        title: "Structured Data & Schema Markup",
        description:
          "Implementing JSON-LD schema markup to earn rich snippets, star ratings, FAQ blocks, and sitelinks.",
      },
      {
        title: "Core Web Vitals & Speed Tuning",
        description:
          "Resolving render-blocking resources, image compression, and script execution for fast mobile scoring.",
      },
      {
        title: "Authority & Backlink Strategy",
        description:
          "Ethical link building, brand mention outreach, and digital PR strategies to boost domain authority.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Diagnostic Site Audit",
        description:
          "Uncovering technical errors, indexation issues, and speed bottlenecks using industry tools.",
      },
      {
        number: "02",
        title: "Keyword & Competitor Strategy",
        description:
          "Mapping high-converting search keywords directly to key web landing pages.",
      },
      {
        number: "03",
        title: "Technical & On-Page Execution",
        description:
          "Fixing code-level issues, implementing schema markup, and optimizing page copy.",
      },
      {
        number: "04",
        title: "Tracking & Ranking Growth",
        description:
          "Monitoring keyword positions, organic traffic gains, and search console health monthly.",
      },
    ],
    whyUsPoints: [
      {
        title: "Technical Web & Code SEO",
        description:
          "Specialized knowledge in optimizing dynamic modern websites for instant crawling and search indexation.",
      },
      {
        title: "Sustainable Organic Revenue",
        description:
          "We target high-intent commercial keywords that drive actual customer inquiries, not just empty clicks.",
      },
      {
        title: "Transparent Search Analytics",
        description:
          "Clear, jargon-free monthly reports showing direct keyword rank movements and organic traffic growth.",
      },
    ],
    relatedProjects: [
      {
        id: "p5",
        title: "EcoStore Global SEO Scaling",
        category: "SEO",
        description:
          "Search-optimized web portal with structured metadata.",
        gradient: "from-slate-800 via-teal-900 to-teal-700",
      },
    ],
  },

  "meta-ads": {
    slug: "meta-ads",
    title: "Meta Ads Campaigns",
    iconName: "Target",
    tagline: "High-Converting Facebook & Instagram Paid Ads",
    heroDescription:
      "Scale user acquisition with high-converting Facebook and Instagram ad campaigns featuring scroll-stopping video/image creatives, conversion tracking, and precise audience targeting.",
    heroImage: getAssetPath("/images/services/meta-ads.jpg"),
    metaTitle: "Meta Ads & Paid Social Agency | Larkspire",
    metaDescription:
      "Targeted Facebook & Instagram ad management, creative production, and server-side tracking by Larkspire.",
    featuresList: [
      {
        title: "High-Converting Ad Creatives",
        description:
          "Designing scroll-stopping graphic banners, video ad edits, UGC visual hooks, and persuasive ad copy.",
      },
      {
        title: "Server-Side Conversions API (CAPI)",
        description:
          "Setting up Meta Conversions API and Pixel tracking to ensure 100% accurate attribution despite ad blockers.",
      },
      {
        title: "Custom Audience & Retargeting",
        description:
          "Building lookalike audiences, high-intent interest stacks, and retargeting funnels for warm visitors.",
      },
      {
        title: "A/B Multivariate Testing",
        description:
          "Systematic testing of visual hooks, headlines, CTAs, and audience segments to identify winning ads.",
      },
      {
        title: "Ad Spend & Budget Scaling",
        description:
          "Daily bid management and strategic budget scaling to grow ROAS without burning ad budget.",
      },
      {
        title: "Landing Page Alignment",
        description:
          "Ensuring ad messaging seamlessly matches destination web pages to maximize conversion rates.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Account & Audience Research",
        description:
          "Analyzing ad account history, target customer avatars, and competitor ad creatives.",
      },
      {
        number: "02",
        title: "Creative Production & Setup",
        description:
          "Crafting visual ad graphics, writing compelling copy, and configuring CAPI event tracking.",
      },
      {
        number: "03",
        title: "Campaign Launch & A/B Testing",
        description:
          "Launching initial campaign structures to test creatives, audiences, and placement combinations.",
      },
      {
        number: "04",
        title: "Scaling & ROAS Optimization",
        description:
          "Scaling budget on top-performing ad sets while continuously introducing fresh creative hooks.",
      },
    ],
    whyUsPoints: [
      {
        title: "Creative-First Advantage",
        description:
          "In modern paid social, winning creative is the #1 lever. Our agency-grade graphic designs outperform generic ads.",
      },
      {
        title: "Precise CAPI Attribution",
        description:
          "Full technical server-side tracking setup guarantees accurate conversion data and optimal ad algorithm learning.",
      },
      {
        title: "Strict ROAS Focus",
        description:
          "We manage your ad budget as if it were our own, scaling profitability while minimizing acquisition costs.",
      },
    ],
    relatedProjects: [
      {
        id: "p6",
        title: "Aura Skincare Meta Ads Campaign",
        category: "Meta Ads",
        description:
          "Facebook & Instagram video ad campaign with server-side CAPI integration.",
        gradient: "from-teal-600 via-teal-800 to-slate-900",
      },
    ],
  },
};

// Fallback alias for legacy route
servicesDataMap["seo"] = servicesDataMap["search-engine-optimization"];

export const servicesData = servicesDataMap;
