import { userProfileQuery } from "@/GQL_Queries/userProfile";
import {recentSubmissionList} from "@/GQL_Queries/recentSubmit";
import { languageStats } from "@/GQL_Queries/languageStats";
import { queryLeetCodeAPI } from "./queryLeetCodeAPI";
import { contestQuery } from "@/GQL_Queries/contest";

export const getLeetCodeUserDetails = async (username: string) => {
    const response = await queryLeetCodeAPI(userProfileQuery, {
        username: username,
    });

    console.log(response);
    return response.data.matchedUser;
}

export const getRecentSubmissions = async (username: string, limit: number ) => {
    const response = await queryLeetCodeAPI(recentSubmissionList, {
        username: username,
        limit: limit,
    });

    return response.data.recentSubmissionList;
}

export const getLanguageStats = async (username: string) => {
    const response = await queryLeetCodeAPI(languageStats, {
        username: username,
    });

    return response.data.languageStats;
}

export const getUserContestRanking = async (username: string) => {
    const response = await queryLeetCodeAPI(contestQuery, {
        username: username,
    });

    return response.data.userContestRanking;
}

