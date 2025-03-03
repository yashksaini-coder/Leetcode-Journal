"use client";

import React, { useState, useEffect } from "react";
import { Problem } from "@/utils/problem";
import { HintCard } from "@/components/HintCard";
import { DetailedProblem } from "@/utils/detailedProblem"; // Import the new type
import Link from "next/link";
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Loader } from "@/components/ui/percept-ui/loader";
import { getTagSlug } from "@/lib/tags";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [problems, setProblems] = useState<Problem[]>([]);
  const [detailedProblems, setDetailedProblems] = useState<DetailedProblem[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Filters and Pagination State
  const [difficulty, setDifficulty] = useState<string>("ALL");
  const [tagSearch, setTagSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  function parseTags(tagSearch: string): string {
    if (!tagSearch) return '';
    return tagSearch
      .split(',')
      .map(tag => getTagSlug(tag.trim()))
      .filter(Boolean)
      .join(',');
  }
  
  async function fetchProblems() {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_LEETCODE_API_URL;
      if (!apiUrl) {
        setError("API URL is not defined in environment variables")
        throw new Error("API URL is not defined in environment variables");
      }

      const difficultyParam = difficulty !== "ALL" ? `difficulty=${difficulty}` : "";
      const parsedTags = parseTags(tagSearch); // Call parseTags function
      const tagParam = parsedTags ? `tags=${parsedTags}` : "";
      const skip = (page - 1) * limit;
      const queryParams = [difficultyParam, tagParam, `limit=${limit}`, `skip=${skip}`]
        .filter(Boolean)
        .join("&");
      
      // console.log(queryParams); // Debug statement:- Log the query params to the console
      const res = await fetch(`${apiUrl}/problems?${queryParams}`);
      const data = await res.json();
      if (data && Array.isArray(data.problemsetQuestionList)) {
        setProblems(data.problemsetQuestionList);
        fetchProblemsData(data.problemsetQuestionList);
      } else {
        setError("Failed to fetch problems");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching problems");
      setLoading(false);
    }
  }

  async function fetchProblemsData(problems: Problem[]) {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_LEETCODE_API_URL;
      if (!apiUrl) {
        throw new Error("API URL is not defined in environment variables");
      }

      const detailedProblemsData = await Promise.all(
        problems.map(async (problem) => {
          const res = await fetch(`${apiUrl}/select?titleSlug=${problem.titleSlug}`);
          return res.json();
        })
      );

      setDetailedProblems(detailedProblemsData);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Error fetching detailed problems");
      setLoading(false);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchProblems();
    }
  }, [difficulty, tagSearch, page, limit]);
  
  return (
    <div className="px-2 py-2 sm:px-3 md:px-4 shadow-lg rounded-lg bg-neutral-900 border">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-stretch">
        <div className="gap-2">
        </div>
      </div>
      {loading ? (
        <div className="flex mb-1 mt-1 justify-center">
          <Loader color="purple" size="xl"/>
        </div>
      ) : error ? (
        <div className="h-6 w-full sm:w-[200px] border-20 animate-pulse bg-red-600 duration-500">
          <span className="flex justify-center items-center h-full w-full">
            <p className="font-semibold text-white">{error}</p>
          </span>
        </div>
      ) : (
        <> 
        {/* Filter and pagination controls - stack vertically on mobile, horizontally on larger screens */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-2 space-y-2 lg:space-y-0">
          {/* Pagination controls - centered on mobile, left-aligned on larger screens */}
          <div className="flex justify-center lg:justify-start items-center gap-1.5">
            {/* Smaller, more compact buttons with consistent styling */}
            <button 
              className="px-2 py-1 text-xs sm:text-sm border border-white text-white rounded-sm
          hover:bg-white hover:text-black transition-colors duration-200 
          disabled:opacity-50 disabled:cursor-not-allowed min-w-[60px]"
              onClick={() => setPage(1)}
              disabled={page === 1}
            >
              First
            </button>
            <button
              className="px-2 py-1 text-xs sm:text-sm border border-white text-white rounded-sm
          hover:bg-white hover:text-black transition-colors duration-200
          disabled:opacity-50 disabled:cursor-not-allowed min-w-[60px]"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              Prev
            </button>
              <span className="min-w-[60px] px-2 font-light text-sm sm:text-base flex items-center justify-center whitespace-nowrap">
                Page {page}
              </span>
            <button
              className="mr-4 px-2 py-1 text-xs sm:text-sm border border-white text-white rounded-sm
              hover:bg-white hover:text-black transition-colors duration-200
              disabled:opacity-50 disabled:cursor-not-allowed min-w-[60px]"
              onClick={() => setPage((prev) => prev + 1)}
              disabled={problems.length === 0}
            >
              Next
            </button>
          </div>

            {/* Filter controls with improved alignment and sizing */}
            <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between w-full">  
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
              {/* Compact difficulty selector */}
              <select 
              value={difficulty} 
              onChange={(e) => setDifficulty(e.target.value)} 
              className="h-8 px-2 text-xs sm:text-sm bg-black text-white border border-white rounded-sm
                    hover:bg-white hover:text-black transition-colors duration-200"
              >
              {["ALL", "EASY", "MEDIUM", "HARD"].map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
              </select>

              {/* Streamlined tag search */}
              <input
              type="text"
              placeholder="Search by tags (comma-separated)"
              value={tagSearch}
              onChange={(e) => setTagSearch(e.target.value)}
              className="h-8 px-2 text-xs sm:text-sm bg-black text-white border border-white rounded-sm
                    w-full sm:w-48 md:w-64 lg:w-80 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Compact items per page selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-white whitespace-nowrap">Per page:</span>
              <select
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="h-8 px-2 text-xs sm:text-sm bg-black text-white border border-white rounded-sm
                    hover:bg-white hover:text-black transition-colors duration-200 w-16"
              >
              {[10, 20, 30].map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
              </select>
            </div>
            </div>
        </div>
        
        {/* Enhanced table container with better responsiveness */}
        <div className="overflow-x-auto -mx-2 sm:mx-0 rounded-md">
          <table className="min-w-full border border-white text-xs sm:text-sm md:text-base table-fixed">
            <thead>
              <tr className="bg-gray-800 text-white">
                {/* Optimized column widths */}
                <th className="border border-white px-1 py-1 sm:px-2 md:px-3 md:py-2 w-[40px] md:w-[60px]">ID</th>
                <th className="border border-white px-1 py-1 sm:px-2 md:px-3 md:py-2 w-[120px] sm:w-[180px] md:w-[250px]">Title</th>
                <th className="border border-white px-1 py-1 sm:px-2 md:px-3 md:py-2 w-[70px] md:w-[90px]">Difficulty</th>
                <th className="border border-white px-1 py-1 sm:px-2 md:px-3 md:py-2 w-[60px] md:w-[80px] hidden sm:table-cell">Accuracy</th>
                <th className="border border-white px-1 py-1 sm:px-2 md:px-3 md:py-2 w-[60px] md:w-[70px] hidden md:table-cell">Video</th>
                <th className="border border-white px-1 py-1 sm:px-2 md:px-3 md:py-2 w-[120px] md:w-[160px] hidden md:table-cell">Tags</th>
                <th className="border border-white px-1 py-1 sm:px-2 md:px-3 md:py-2 w-[50px]"><ThumbsUp className="text-green-600 h-4 w-4 md:h-5 md:w-5"/></th>
                <th className="border border-white px-1 py-1 sm:px-2 md:px-3 md:py-2 w-[50px]"><ThumbsDown className="text-red-600 h-4 w-4 md:h-5 md:w-5"/></th>  
                <th className="border border-white px-1 py-1 sm:px-2 md:px-3 md:py-2 w-[70px] md:w-[90px]">Hints</th>              
              </tr>
            </thead>
            <tbody className="border border-white">
              {Array.isArray(problems) && problems.length > 0 ? (
                problems.map((problem, index) => (
                  <tr key={problem.titleSlug} className="border-2 border-white hover:bg-neutral-800">
                    <td className="border border-white text-center px-1 py-1 sm:px-2 md:px-3 md:py-2">{detailedProblems[index]?.questionId}</td>
                    <td className={`border border-white text-xs sm:text-sm font-bold px-1 py-1 sm:px-2 md:px-3 md:py-2 ${detailedProblems[index]?.isPaidOnly ? 'hover:bg-amber-500' : 'hover:bg-cyan-500'} hover:text-black truncate`}>
                      <a href={`https://leetcode.com/problems/${problem.titleSlug}`}
                        target="_blank"
                        className="block truncate"
                        title={problem.title}>
                          {`${problem.title}`}
                      </a>
                    </td>
                    <td className={`border border-white text-center font-semibold px-1 py-1 sm:px-2 md:px-3 md:py-2 ${problem.difficulty === 'Easy' ? 'text-green-600' :
                      problem.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>{problem.difficulty}</td>
                    <td className="border border-white text-center px-1 py-1 sm:px-2 md:px-3 md:py-2 hidden sm:table-cell">{Math.round((problem.acRate))}%</td>
                    <td className="border border-white text-center px-1 py-1 sm:px-2 md:px-3 md:py-2 hidden md:table-cell">{problem.hasVideoSolution ? "Yes" : "No"}</td>
                    <td className="border border-white px-1 py-1 sm:px-2 md:px-3 md:py-2 text-xs hidden md:table-cell">
                      <div className="max-h-[60px] overflow-y-auto">
                        {problem.topicTags.map((tag) => tag.name).join(", ")}
                      </div>
                    </td>
                    <td className="border border-white text-center px-1 py-1 sm:px-2 md:px-3 md:py-2">{detailedProblems[index]?.likes > 1000 ? (`${Math.round(detailedProblems[index]?.likes / 1000)}K`
                    ) : (detailedProblems[index]?.likes)}</td>
                    <td className="border border-white text-center px-1 py-1 sm:px-2 md:px-3 md:py-2">{detailedProblems[index]?.dislikes > 1000 ? (`${Math.round(detailedProblems[index]?.dislikes / 1000)}K`
                    ) : (detailedProblems[index]?.dislikes)}</td>
                    <td className="border border-white text-center px-1 py-1 sm:px-2 md:px-3 md:py-2">
                      {detailedProblems[index]?.hints?.length > 0 ? (
                        <HintCard hints={detailedProblems[index].hints} />
                      ) : (
                        <span className="text-red-500">No hints</span>
                      )}
                    </td>
                  </tr>
                ))) : (
                <tr>
                  <td className="border px-1 py-1 sm:px-2 md:px-3 md:py-2 text-center" rowSpan={10} colSpan={10}>No problems found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        </>
      )}
    </div>
  );
}
