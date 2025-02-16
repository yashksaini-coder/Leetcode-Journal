import axios from "axios";
import { create } from "zustand";

interface LeetcodeData {
  userDetails: {
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
  };
  recentSubmissions: {
    timestamp: string;
    title: string;
    status: string;
  }[];
  languageStats: {
    languageName: string;
    problemsSolved: number;
  }[];
  userContestRanking: {
    attendedContestsCount: number;
    rating: number;
    globalRanking: number;
    totalParticipants: number;
    topPercentage: number;
  };
}

interface LeetcodeStore {
  data: LeetcodeData | null;
  isLoading: boolean;
  error: string | null;
  fetchLeetcodeData: () => Promise<void>;
}

export const useLeetcodeStore = create<LeetcodeStore>((set) => ({
  data: null,
  isLoading: false,
  error: null,
  fetchLeetcodeData: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await axios.get("/api/leetcode/userDetails");
      set({ data: response.data, isLoading: false });
    } catch (error) {
      set({ error: "Failed to fetch LeetCode data", isLoading: false });
      console.error(error);
    }
  }
}));
