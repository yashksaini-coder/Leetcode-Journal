import { userProfileQuery } from "@/GQL_Queries/userProfile";
import { queryLeetCodeAPI } from "./queryLeetCodeAPI";

export const getLeetCodeUserDetails = async (username: string) => {
    const response = await queryLeetCodeAPI(userProfileQuery, {
        username: username,
    });

    console.log(response);
    return response.data.matchedUser;
}


