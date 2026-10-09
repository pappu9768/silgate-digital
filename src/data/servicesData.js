import webDevImg from "../assets/images/web-dev-services.png";
import seoImg from "../assets/images/seo-services.png";
import socialMediaImg from "../assets/images/social-media-management-services.png";
import digitalMarketingImg from "../assets/images/digital-marketing-services.png";
import creativeDesignImg from "../assets/images/apj-client-campaign-creative-portfolio.webp";
import ugcImg from "../assets/images/ugc-services.png";

import {
  Globe,
  Search,
  Share2,
  Megaphone,
  Palette,
  Video,
} from "lucide-react";

export const services = [
  // ================= SECTION 3 — WEB DEVELOPMENT =================
  {
    id: "web-development",
    sectionNumber: "03",
    sectionLabel: "WEB DEVELOPMENT",
    icon: Globe,
    img: webDevImg,
    title: "Web Development",
    heading: "High-Performance Websites Built for Your Business",
    descriptionParagraphs: [
      "Your website is often the first digital interaction customers have with your business. We design and develop modern, responsive and scalable websites that combine functionality, usability and strong visual experiences.",
      "Our web development solutions are built around your business requirements, helping create a reliable digital foundation that can evolve as your business grows.",
    ],
    capabilitiesTitle: "Key Web Development Capabilities",
    capabilities: [
      {
        number: "01",
        title: "Custom Website Development",
        description:
          "Business-focused websites designed and developed around specific requirements rather than relying on a one-size-fits-all approach.",
      },
      {
        number: "02",
        title: "Responsive & Mobile-First Development",
        description:
          "Web experiences designed to perform smoothly across desktops, tablets and mobile devices.",
      },
      {
        number: "03",
        title: "E-commerce Solutions",
        description:
          "User-friendly online stores and e-commerce experiences designed around product discovery, navigation and customer journeys.",
      },
      {
        number: "04",
        title: "Web Application Development",
        description:
          "Functional and scalable web-based solutions developed around specific business and user requirements.",
      },
      {
        number: "05",
        title: "UI/UX Design",
        description:
          "Clear, intuitive and engaging interfaces designed to improve usability and create better digital experiences.",
      },
      {
        number: "06",
        title: "Website Maintenance & Support",
        description:
          "Ongoing website updates, maintenance and technical support to help keep digital platforms reliable and up to date.",
      },
    ],
    visualType: "web-development",
    visualLeft: true, // 42% visual / 58% content
    bgClass: "bg-white",
    link: "/services/website-development-india",
    linkText: "Explore Web Development",
  },

  // ================= SECTION 4 — SEO =================
  {
    id: "seo",
    sectionNumber: "04",
    sectionLabel: "SEO",
    icon: Search,
    img: seoImg,
    title: "SEO",
    heading: "Improve Visibility. Attract the Right Audience. Grow Organically.",
    descriptionParagraphs: [
      "Being online is only effective when the right audience can find you. Our SEO services focus on improving your website’s search visibility, strengthening its organic presence and attracting relevant traffic.",
      "From understanding search behaviour and optimizing website content to strengthening technical performance and tracking results, we take a structured approach to building sustainable organic visibility.",
    ],
    capabilitiesTitle: "Key Search Engine Optimization Capabilities",
    capabilities: [
      {
        number: "01",
        title: "Keyword Research & Strategy",
        description:
          "Identify relevant search opportunities based on your business, services, audience and search intent to build a focused SEO strategy.",
      },
      {
        number: "02",
        title: "On-Page SEO",
        description:
          "Optimize page structure, content, headings, metadata, internal linking and other on-page elements to improve search relevance.",
      },
      {
        number: "03",
        title: "Technical SEO",
        description:
          "Identify and address technical factors that can affect crawling, indexing, website structure and overall search performance.",
      },
      {
        number: "04",
        title: "Off-Page SEO",
        description:
          "Support website authority and online presence through relevant off-page optimization activities.",
      },
      {
        number: "05",
        title: "Local SEO",
        description:
          "Improve visibility for location-based searches and help businesses strengthen their presence among relevant local audiences.",
      },
      {
        number: "06",
        title: "SEO Performance Tracking",
        description:
          "Monitor important SEO metrics and search performance to understand progress and identify opportunities for continuous optimization.",
      },
    ],
    visualType: "seo",
    visualLeft: false, // 58% content / 42% visual
    bgClass: "bg-[#F0F5FA]",
    link: "/services/seo-services",
    linkText: "Explore SEO Services",
  },

  // ================= SECTION 5 — SOCIAL MEDIA MANAGEMENT =================
  {
    id: "social-media-management",
    sectionNumber: "05",
    sectionLabel: "SOCIAL MEDIA MANAGEMENT",
    icon: Share2,
    img: socialMediaImg,
    title: "Social Media Management",
    heading: "Build a Stronger, More Consistent Social Presence",
    descriptionParagraphs: [
      "Social media is more than simply posting content. It requires the right strategy, consistent communication and ongoing management to keep your brand relevant and connected with its audience.",
      "We help businesses plan, manage and strengthen their social media presence through structured strategies, publishing, audience engagement, campaign management and continuous performance monitoring.",
    ],
    capabilitiesTitle: "Key Social Media Management Capabilities",
    capabilities: [
      {
        number: "01",
        title: "Social Media Strategy",
        description:
          "Develop a focused social media approach based on your brand, audience, objectives and relevant platforms.",
      },
      {
        number: "02",
        title: "Content Planning & Calendar Management",
        description:
          "Plan content themes, publishing schedules and platform activities through structured social media calendars.",
      },
      {
        number: "03",
        title: "Publishing & Platform Management",
        description:
          "Manage scheduled publishing and maintain a consistent brand presence across relevant social platforms.",
      },
      {
        number: "04",
        title: "Community Engagement",
        description:
          "Support ongoing audience interaction by managing comments, messages and relevant community engagement activities.",
      },
      {
        number: "05",
        title: "Social Media Campaign Management",
        description:
          "Plan and manage platform-specific campaigns aligned with awareness, engagement, traffic or lead-generation objectives.",
      },
      {
        number: "06",
        title: "Performance Monitoring & Reporting",
        description:
          "Track platform performance, engagement and campaign insights to identify opportunities for ongoing improvement.",
      },
    ],
    visualType: "social-media",
    visualLeft: true, // 42% visual / 58% content
    bgClass: "bg-white",
    link: "/services/social-media-marketing",
    linkText: "Explore Social Media",
  },

  // ================= SECTION 6 — DIGITAL MARKETING =================
  {
    id: "digital-marketing",
    sectionNumber: "06",
    sectionLabel: "DIGITAL MARKETING",
    icon: Megaphone,
    img: digitalMarketingImg,
    title: "Digital Marketing",
    heading: "Turn Digital Reach Into Meaningful Business Opportunities",
    descriptionParagraphs: [
      "Effective digital marketing is about reaching the right audience, through the right channels, with the right message.",
      "We plan and execute digital marketing initiatives around your business objectives—combining audience targeting, campaign strategy, paid media, lead-generation activities and performance insights to help strengthen reach, engagement and online growth.",
    ],
    capabilitiesTitle: "Key Digital Marketing Capabilities",
    capabilities: [
      {
        number: "01",
        title: "Digital Marketing Strategy",
        description:
          "Build a focused digital marketing roadmap based on your business objectives, target audience, market and relevant digital channels.",
      },
      {
        number: "02",
        title: "Paid Advertising & Media Campaigns",
        description:
          "Plan and manage targeted paid campaigns across relevant digital platforms to improve reach, traffic, engagement and conversions.",
      },
      {
        number: "03",
        title: "Lead Generation Campaigns",
        description:
          "Create digital campaigns focused on generating relevant enquiries and potential business opportunities.",
      },
      {
        number: "04",
        title: "Audience Targeting & Remarketing",
        description:
          "Reach defined audience segments and reconnect with users who have previously interacted with your digital presence.",
      },
      {
        number: "05",
        title: "Campaign & Landing Page Optimization",
        description:
          "Review campaign journeys and landing-page performance to identify opportunities for stronger engagement and conversions.",
      },
      {
        number: "06",
        title: "Performance Tracking & Optimization",
        description:
          "Monitor campaign performance and use insights to continuously refine targeting, messaging, channel allocation and execution.",
      },
    ],
    visualType: "digital-marketing",
    visualLeft: false, // 58% content / 42% visual
    bgClass: "bg-[#F0F5FA]",
    link: "/performance-marketing-agency",
    linkText: "Explore Digital Marketing",
  },

  // ================= SECTION 7 — CREATIVE & GRAPHIC DESIGN =================
  {
    id: "creative-graphic-design",
    sectionNumber: "07",
    sectionLabel: "CREATIVE & GRAPHIC DESIGN",
    icon: Palette,
    img: creativeDesignImg,
    title: "Creative & Graphic Design",
    heading: "Creative Ideas Designed to Make Your Brand Stand Out",
    descriptionParagraphs: [
      "Strong design helps businesses communicate clearly, consistently and memorably. We create visual solutions that bring together brand identity, creative thinking and business communication.",
      "From digital campaign creatives and social media assets to marketing collateral and brand communication, our designs are developed around your brand, audience and specific business requirements.",
    ],
    capabilitiesTitle: "Key Creative & Graphic Design Capabilities",
    capabilities: [
      {
        number: "01",
        title: "Brand & Visual Communication",
        description:
          "Create consistent visual communication aligned with your brand identity, positioning and audience.",
      },
      {
        number: "02",
        title: "Digital & Campaign Creatives",
        description:
          "Design engaging visual assets for digital campaigns, advertisements, promotions and online communication.",
      },
      {
        number: "03",
        title: "Social Media Creatives",
        description:
          "Develop platform-ready static and graphic-based creative assets that maintain a consistent brand presence across social channels.",
      },
      {
        number: "04",
        title: "Marketing Collateral",
        description:
          "Design brochures, presentations, company profiles, flyers and other marketing materials for digital and business use.",
      },
      {
        number: "05",
        title: "Infographics & Visual Content",
        description:
          "Transform information, processes and ideas into clear and engaging visual formats.",
      },
      {
        number: "06",
        title: "Custom Creative Requirements",
        description:
          "Develop design solutions for specific business, campaign or communication requirements beyond standard creative formats.",
      },
    ],
    visualType: "creative-design",
    visualLeft: true, // 42% visual / 58% content
    bgClass: "bg-white",
    link: "/services/creative-communication",
    linkText: "Explore Creative Design",
  },

  // ================= SECTION 8 — UGC & CONTENT CREATION =================
  {
    id: "ugc-content-creation",
    sectionNumber: "08",
    sectionLabel: "UGC & CONTENT CREATION",
    icon: Video,
    img: ugcImg,
    title: "UGC & Content Creation",
    heading: "Create Content That Feels Real, Relevant & Engaging",
    descriptionParagraphs: [
      "Digital audiences connect with content that feels natural, relevant and made for the platforms they use. We help brands create engaging digital content designed around their message, audience and communication objectives.",
      "From UGC and short-form videos to reels and brand storytelling, our content creation solutions are designed to give businesses a consistent supply of platform-ready content that can support organic communication and digital campaigns.",
    ],
    capabilitiesTitle: "Key UGC & Content Creation Capabilities",
    capabilities: [
      {
        number: "01",
        title: "UGC Content",
        description:
          "Create authentic, relatable brand content designed to communicate products, services or experiences in a natural and audience-friendly format.",
      },
      {
        number: "02",
        title: "Reels & Short-Form Videos",
        description:
          "Develop short-form video content designed for fast-moving digital and social platforms.",
      },
      {
        number: "03",
        title: "Product & Service Content",
        description:
          "Create focused content that helps businesses showcase products, services, features and key value propositions.",
      },
      {
        number: "04",
        title: "Brand Storytelling",
        description:
          "Turn brand messages, ideas and business stories into engaging digital content that audiences can understand and connect with.",
      },
      {
        number: "05",
        title: "Campaign Content",
        description:
          "Develop content assets around specific campaigns, launches, promotions and digital marketing requirements.",
      },
      {
        number: "06",
        title: "Content Adaptation & Repurposing",
        description:
          "Adapt existing content into platform-appropriate formats to extend its usability across different digital channels.",
      },
    ],
    visualType: "ugc-content",
    visualLeft: false, // 58% content / 42% visual
    bgClass: "bg-[#F0F5FA]",
    link: "/services/ugc-video-agency",
    linkText: "Explore Content Creation",
  },
];