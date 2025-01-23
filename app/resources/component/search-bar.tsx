import { Search } from "lucide-react"

export function SearchBar() {
    return (
        <div className="relative max-w-xs mx-auto w-full">
            <input
                type="text"
                placeholder="Search resources..."
                className="w-full px-4 py-3 rounded-full  border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" size={20} />
        </div>
    )
}

