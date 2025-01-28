"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { useLeetcodeStore } from "@/store/LeetcodeStore/useLeetcodeStore"
import React from "react"

export default function Dashboard() {
  const { fetchLeetcodeUserProfile, leetcodeUserProfile } = useLeetcodeStore()

  React.useEffect(() => {
    fetchLeetcodeUserProfile()
  }, [fetchLeetcodeUserProfile])

  if (!leetcodeUserProfile) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col h-full p-4">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="flex flex-row items-center gap-4">
          {leetcodeUserProfile.profile.userAvatar && (
            <div className="">
              <Image
                src={leetcodeUserProfile.profile.userAvatar || "/placeholder.svg"}
                alt="Profile Image"
                height={500}
                width={500}
                className="rounded-full object-cover"
                priority
              />
            </div>
          )}
          <div className="flex flex-col">
            <CardTitle>{leetcodeUserProfile.profile.realName}</CardTitle>
            <CardDescription>@{leetcodeUserProfile.username}</CardDescription>
            <div className="flex flex-wrap gap-2 mt-2">
              {leetcodeUserProfile.badges.map((badge) => (
                <div key={badge.id} className="flex items-center gap-1">
                  <Badge variant="secondary">{badge.displayName}</Badge>
                  <div className="relative w-5 h-5">
                    <Image
                      src={badge.icon || "/placeholder.svg"}
                      alt={badge.displayName}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">
                  {leetcodeUserProfile.submitStats.acSubmissionNum[0].count || 0}
                </span>
                <span className="text-sm text-muted-foreground">Problems Solved</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">{leetcodeUserProfile.contributions.points}</span>
                <span className="text-sm text-muted-foreground">Contribution Points</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">{leetcodeUserProfile.profile.starRating}</span>
                <span className="text-sm text-muted-foreground">Star Rating</span>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              {leetcodeUserProfile.githubUrl && (
                <a
                  href={leetcodeUserProfile.githubUrl}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                </a>
              )}
              {leetcodeUserProfile.linkedinUrl && (
                <a
                  href={leetcodeUserProfile.linkedinUrl}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
              {leetcodeUserProfile.twitterUrl && (
                <a
                  href={leetcodeUserProfile.twitterUrl}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

