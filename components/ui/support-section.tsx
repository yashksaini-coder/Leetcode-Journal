import { Card } from "@/components/ui/card";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Github } from "lucide-react";

export default function SupportSection() {
  return (
    <Card className="relative overflow-hidden bg-secondary p-8 md:p-12">
      {/* Rainbow gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-emerald-500/10 to-violet-500/10 opacity-20" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Support Our Learning Community
        </h2>

        <p className="text-lg md:text-xl dark:text-neutral-200 text-neutral-700">
          Help us grow by sharing this website with your friends and colleagues!
        </p>
          <RainbowButton className="hidden md:inline-flex items-center space-x-2">
              <a
                  href="https://github.com/yashksaini-coder/leetcode-journal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
              >
                  <Github className="mr-2 h-4 w-4" />
                  <span>Star on GitHub</span>
              </a>
          </RainbowButton>
      </div>
    </Card>
  );
}
