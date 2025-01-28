import axios from "axios";

const API_URL = process.env.LEETCODE_API_URL || 'https://leetcode.com/graphql';

export async function queryLeetCodeAPI(query: string, variables: any) {
    try {
        const response = await axios.post(API_URL, { query, variables });
        if (response.data.errors) {
            throw new Error(response.data.errors[0].message);
        }
        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(`Error from LeetCode API: ${error.response.data}`);
        } else if (error.request) {
            throw new Error('No response received from LeetCode API');
        } else {
            throw new Error(`Error in setting up the request: ${error.message}`);
        }
    }
}