import axios from "axios";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchLeetCodeStats = async (username: string,id: string) => {
  try {
    const response = await axios.post(`/api/leetcode?username=${username}&id=${id}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
    return null;
  }
};