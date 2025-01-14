import { Metadata } from "next";
import FAQComponent from "./component/faq-component";
import ContactSection from "./component/contact-section";
import Navbar1 from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "FAQ - Your Company Name",
  description: "Frequently Asked Questions about our products and services",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen space-y-12">
      <Navbar1 />
      <div className="text-center mb-12 px-4">
        {/* Added x-padding */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-purple-500">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-purple-600">
            Find answers to common questions about our products and services
          </p>
        </div>
        <FAQComponent />
        <div className="rounded-lg text-center w-[100%] md:w-[60%] px-4 md:px-0 mx-auto">
          {/* Changed width for small screens */}
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
