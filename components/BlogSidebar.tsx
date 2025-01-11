'use client'

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface Tag {
  name: string
  count: number
}

const tags: Tag[] = [
  { name: "NEXT-JS", count: 6 },
  { name: "GUIDE", count: 3 },
  { name: "TAILWIND", count: 3 },
  { name: "FEATURE", count: 2 },
  { name: "MARKDOWN", count: 1 },
  { name: "CODE", count: 1 },
  { name: "FEATURES", count: 1 },
  { name: "MATH", count: 1 },
  { name: "OLS", count: 1 },
  { name: "GITHUB", count: 1 },
  { name: "HOLIDAY", count: 1 },
  { name: "CANADA", count: 1 },
  { name: "IMAGES", count: 1 },
  { name: "WRITINGS", count: 1 },
  { name: "BOOK", count: 1 },
  { name: "REFLECTION", count: 1 },
  { name: "MULTI-AUTHOR", count: 1 },
]

export function BlogSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeTag = searchParams.get('tag')

  const handleTagClick = (tagName: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    
    if (current.get('tag') === tagName) {
      current.delete('tag')
    } else {
      current.set('tag', tagName)
    }
    
    const search = current.toString()
    const query = search ? `?${search}` : ""
    
    router.push(`${pathname}${query}`)
  }

  return (
    <div className="border rounded-md shadow-lg p-4 border-zinc-800 dark:border-zinc-500">
      <Collapsible defaultOpen>
        <div className="flex items-center justify-between py-2">
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2 hover:text-primary">
            ALL POSTS
            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="space-y-2">
            {tags.map((tag) => (
              <button
                key={tag.name}
                onClick={() => handleTagClick(tag.name)}
                className={cn(
                  "flex w-full items-center justify-between py-1 text-sm hover:text-primary hover:bg-primary/10 rounded-md p-2",
                  activeTag === tag.name && "font-bold text-primary"
                )}
              >
                <span>{tag.name}</span>
                <span className="text-muted-foreground">({tag.count})</span>
              </button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
