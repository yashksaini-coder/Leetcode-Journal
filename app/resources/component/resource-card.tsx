interface ResourceCardProps {
    title: string
    description: string
    isComingSoon?: boolean
    buttonColor?: string
}

export function ResourceCard({ title, description, isComingSoon, buttonColor = "bg-blue-500" }: ResourceCardProps) {
    return (
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-white/70 mb-6">{description}</p>
            <button
                className={`px-6 py-2 rounded-full ${isComingSoon ? "bg-gray-500 cursor-not-allowed" : buttonColor
                    } text-white font-medium transition-transform hover:scale-105 active:scale-95`}
                disabled={isComingSoon}
            >
                {isComingSoon ? "Coming Soon" : "Explore resources"}
            </button>
        </div>
    )
}

