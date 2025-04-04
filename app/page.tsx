import { CommunitySection } from "@/components/DashboardV2/CommunitySection";
import { FAQSection } from "@/components/DashboardV2/FAQSection";
import { FeaturesSection } from "@/components/DashboardV2/FeaturesSection";
import { FooterSection } from "@/components/DashboardV2/FooterSection";
import { HeroSection } from "@/components/DashboardV2/HeroSection";
import { PricingSection } from "@/components/DashboardV2/PricingSection";
import { ServicesSection } from "@/components/DashboardV2/ServicesSection";
import { TeamSection } from "@/components/DashboardV2/TeamSection";
import { V2Navbar } from "@/components/DashboardV2/V2Navbar";

export const metadata = {
  title: "LeetCode Journal - Your Coding Companion",
  description: "LeetCode Journal helps you organize your problem-solving journey, track your progress, and achieve your coding interview goals.",
  link: {
    type: "website",
    url: "https://leetcode-journal.vercel.app/",
    title: "LeetCode Journal - Your Coding Companion",
    description: "LeetCode Journal helps you organize your problem-solving journey, track your progress, and achieve your coding interview goals.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Leetcode Journal",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="w-full">
      <V2Navbar/>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TeamSection />
      <CommunitySection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}