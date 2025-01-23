import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SupportSection() {
    return (
        <Card className="relative overflow-hidden bg-black text-white p-8 md:p-12">
            {/* Rainbow gradient background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-emerald-500/10 to-violet-500/10 opacity-20" />

            <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Support Our Learning Community</h2>

                <p className="text-lg md:text-xl text-gray-200">
                    Help us grow by sharing this website with your friends and colleagues!
                </p>

                <Button
                    className="w-full sm:w-auto px-8 py-6 text-lg font-medium relative overflow-hidden group bg-white/10 hover:bg-white/20 transition-colors"
                    variant="ghost"
                >
                    {/* Rainbow gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-emerald-500 to-violet-500 opacity-20 group-hover:opacity-30 transition-opacity" />

                    <span className="relative z-10">Support Us</span>
                </Button>
            </div>
        </Card>
    )
}

