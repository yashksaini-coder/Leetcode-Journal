type Difficulty = 'All' | 'Easy' | 'Medium' | 'Hard';

export interface DetailedProblem {
    content: string;
    companyTagStats: string[];
    difficulty: Difficulty;
    dislikes: number;
    exampleTestcases: object[];
    hints: [];
    isPaidOnly: boolean;
    likes: number;
    questionId: number;
    questionFrontendId: number;
    solution: string;
    similarQuestions: object[];
    title: string;
    titleSlug: string;
    topicTags: string[];
}
