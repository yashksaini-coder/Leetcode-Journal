import axios from "axios";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchLeetCodeStats = async (username: string,userId: string) => {
  try {
    const response = await axios.post(`/api/leetcode?username=${username}&userId=${userId}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
    return null;
  }
};