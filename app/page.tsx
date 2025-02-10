import { BenefitsSection } from "@/components/DashboardV2/BenefitsSection";
import { CommunitySection } from "@/components/DashboardV2/CommunitySection";
import { ContactSection } from "@/components/DashboardV2/ContactSection";
import { FAQSection } from "@/components/DashboardV2/FAQSection";
import { FeaturesSection } from "@/components/DashboardV2/FeaturesSection";
import { FooterSection } from "@/components/DashboardV2/FooterSection";
import { HeroSection } from "@/components/DashboardV2/HeroSection";
import { PricingSection } from "@/components/DashboardV2/PricingSection";
import { ServicesSection } from "@/components/DashboardV2/ServicesSection";
import { TeamSection } from "@/components/DashboardV2/TeamSection";
import { TestimonialSection } from "@/components/DashboardV2/TestimonialSection";

export const metadata = {
  title: "LeetCode Journal - Your Coding Companion",
  description: "LeetCode Journal helps you organize your problem-solving journey, track your progress, and achieve your coding interview goals.",
  openGraph: {
    type: "website",
    url: "https://leetcode-journal.vercel.app/",
    title: "LeetCode Journal - Your Coding Companion",
    description: "LeetCode Journal helps you organize your problem-solving journey, track your progress, and achieve your coding interview goals.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn - Landing template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/yashksaini-coder/Leetcode-Journal",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}