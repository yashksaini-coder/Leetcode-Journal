import { SearchBar } from "./component/search-bar"
import { ResourceCard } from "./component/resource-card"
import { Globe, Laptop } from "lucide-react"
import Navbar1 from "@/components/navbar"
import { Ripple } from "./component/ripple"
import SupportSection from "./component/support-section"
import Footer from "@/components/footer"

export default function ResourcesPage() {
  return (
    <div className="">
      <Navbar1 />
      <div className="min-h-screen bg-black text-white relative">
        {/* Hero Section */}
        <div className="relative pt-32 pb-16 px-4 text-center">
          <Ripple className="absolute inset-0 z-0" />

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent shadow-text">
            Discover Resources
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12">
            Explore our curated collection of learning materials to enhance your skills in programming, web development,
            and DevOps.
          </p>
        </div>

        {/* Programming Languages Section */}
        <div className="relative px-4 pb-24 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Laptop className="text-white/80" size={32} />
            <h2 className="text-3xl font-semibold">Programming Languages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ResourceCard
              title="Python"
              description="Known for its simplicity and wide range of applications, from web dev to data science."
              buttonColor="bg-emerald-500"
            />
            <ResourceCard
              title="C"
              description="A high-performance, compiled language that provides low-level memory management."
            />
            <ResourceCard
              title="C++/CPP"
              description="Widely used for system/application software, game development, and more."
            />
            <ResourceCard
              title="Java"
              description="A popular language for building large-scale enterprise applications and Android apps."
              isComingSoon
            />
          </div>
        </div>

        <div className="relative px-4 pb-24 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="text-white/80" size={32} />
            <h2 className="text-3xl font-semibold">Foundations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ResourceCard
              title="Python"
              description="Known for its simplicity and wide range of applications, from web dev to data science."
              buttonColor="bg-emerald-500"
            />
            <ResourceCard
              title="C"
              description="A high-performance, compiled language that provides low-level memory management."
            />
            <ResourceCard
              title="C++/CPP"
              description="Widely used for system/application software, game development, and more."
            />
            <ResourceCard
              title="Java"
              description="A popular language for building large-scale enterprise applications and Android apps."
              isComingSoon
            />
          </div>
        </div>
      </div>
      <SupportSection />
      <Footer />
    </div>
  )
}

