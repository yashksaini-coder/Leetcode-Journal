import { Button } from "@/components/ui/button"
import { Mail, Phone } from 'lucide-react'

export default function ContactSection() {
  return (
    <div className="mt-16 bg-white rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-purple-800 mb-4">Still have questions?</h2>
      <p className="text-purple-600 mb-6">Our support team is here to help you</p>
      <div className="flex justify-center space-x-4">
        <Button
        variant="outline"
        className="flex items-center space-x-2 bg-white hover:bg-purple-300 text-black hover:text-black"
        >
            <Mail size={20} />
            <span>Email Us</span>
        </Button>
        <Button
        variant="outline"
        className="flex items-center space-x-2 bg-white hover:bg-purple-300 text-black hover:text-black"
        >
            <Phone size={20} />
            <span>Call Us</span>
        </Button>
      </div>
    </div>
  )
}

