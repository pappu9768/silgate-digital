import webDevImg from "../assets/images/web-dev-services.png";
import seoImg from "../assets/images/seo-services.png";
import socialMediaImg from "../assets/images/social-media-management-services.png";
import digitalMarketingImg from "../assets/images/social-media-services.png";
import creativeDesignImg from "../assets/images/digital-marketing-services.png";
import ugcImg from "../assets/images/ugc-services.png";

import { Globe, Search, Share2, Megaphone, Palette, Video } from "lucide-react";

export const services = [
  {
    id: "web-development",
    icon: Globe,
    img: webDevImg,
    title: "Web Development",
    stackWords: true,
    heading: "High-Performance Websites Built for Your Business",
    description:
      "We design and develop modern, responsive and scalable websites that deliver a seamless user experience and support your business goals.",
    features: [
      "Custom Website Development",
      "Website Maintenance & Support",
      "E-commerce Solutions",
      "UI/UX Design",
      "CMS Development",
      "Scalable Web Applications",
    ],
    link: "/services/website-development-india",
    linkText: "Explore Web Development",
  },
  {
    id: "seo",
    icon: Search,
    img: seoImg,
    title: "SEO",
    heading: "Increase Visibility and Attract the Right Audience",
    description:
      "Our SEO strategies help your business rank higher, attract quality traffic and achieve long-term growth.",
    features: [
      "Keyword Research & Strategy",
      "Local SEO",
      "On-Page & Off-Page SEO",
      "Content Optimization",
      "Technical SEO",
      "Performance Tracking",
    ],
    link: "/services/seo-services",
    linkText: "Explore SEO",
  },
  {
    id: "social-media-management",
    icon: Share2,
    img: socialMediaImg,
    title: "Social Media Management",
    heading: "Build a Stronger Connection With Your Audience",
    description:
      "We help you plan, create, manage and grow your social media presence with engaging content and data-driven strategies.",
    features: [
      "Social Media Strategy",
      "Paid Social Campaigns",
      "Content Planning & Publishing",
      "Performance Analysis",
      "Community Engagement",
      "Channel Growth",
    ],
    link: "/services/social-media-marketing",
    linkText: "Explore Social Media Management",
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    img: digitalMarketingImg,
    title: "Digital Marketing",
    heading: "Drive Engagement, Generate Leads and Grow Your Business",
    description:
      "Our data-driven digital marketing strategies help you reach the right audience, increase brand awareness and achieve measurable results.",
    features: [
      "Search & Display Advertising",
      "Lead Generation",
      "Social Media Campaigns",
      "Conversion Optimization",
      "Email Marketing",
      "Performance Tracking & Reporting",
    ],
    link: "/performance-marketing-agency",
    linkText: "Explore Digital Marketing",
  },
  {
    id: "creative-graphic-design",
    icon: Palette,
    img: creativeDesignImg,
    title: "Creative & Graphic Design",
    heading: "Creative Designs That Bring Your Brand to Life",
    description:
      "We create compelling designs that communicate your brand message and make a lasting impression.",
    features: [
      "Brand Identity Design",
      "Campaign Design",
      "Marketing Collateral",
      "Presentation & Infographic Design",
      "Social Media Creatives",
      "Custom Design Solutions",
    ],
    link: "/services/creative-communication",
    linkText: "Explore Creative & Graphic Design",
  },
  {
    id: "ugc-content-creation",
    icon: Video,
    img: ugcImg,
    title: "UGC & Content Creation",
    heading: "Authentic Content That Connects and Builds Trust",
    description:
      "We create engaging UGC, reels and short-form videos that help your brand connect with your audience in a real and relatable way.",
    features: [
      "UGC Video Creation",
      "Content Strategy",
      "Reels & Short-Form Content",
      "Editing & Post-Production",
      "Product & Brand Content",
      "Platform Optimization",
    ],
    link: "/services/ugc-video-agency",
    linkText: "Explore UGC & Content Creation",
  },
];