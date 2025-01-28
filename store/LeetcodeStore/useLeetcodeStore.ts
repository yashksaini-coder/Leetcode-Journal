import axios from "axios";
import { create } from "zustand";

interface leetcodeProfile {
    username: string;
    githubUrl: string;
    twitterUrl: string | null;
    linkedinUrl: string;
    contributions: {
      points: number;
      questionCount: number;
      testcaseCount: number;
    };
    profile: {
      realName: string;
      userAvatar: string;
      birthday: string | null;
      ranking: number;
      reputation: number;
      websites: string[];
      countryName: string;
      company: string | null;
      school: string | null;
      skillTags: string[];
      aboutMe: string;
      starRating: number;
    };
    badges: {
      id: string;
      displayName: string;
      icon: string;
      creationDate: string;
    }[];
    upcomingBadges: {
      name: string;
      icon: string;
    }[];
    activeBadge: {
      id: string;
      displayName: string;
      icon: string;
      creationDate: string;
    };
    submitStats: {
      totalSubmissionNum: {
        difficulty: "All" | "Easy" | "Medium" | "Hard";
        count: number;
        submissions: number;
      }[];
      acSubmissionNum: {
        difficulty: "All" | "Easy" | "Medium" | "Hard";
        count: number;
        submissions: number;
      }[];
    };
    submissionCalendar: string; // JSON string representing submission data
  }
  

interface LeetcodeStore {
    leetcodeUserProfile : leetcodeProfile | null;
    fetchLeetcodeUserProfile : VoidFunction
}

export const useLeetcodeStore = create<LeetcodeStore>((set) => ({
    leetcodeUserProfile: null,
    fetchLeetcodeUserProfile: async () => {
        try {
            const response = await axios.get("/api/leetcode/userDetails");
            const data = response.data;
            console.log("data", data);
            set({ leetcodeUserProfile: data });
        } catch (error) {
            console.error(error);
        }
    }
}))
