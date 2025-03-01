export type TopicTag = {
    name: string;
    id: string;
    slug: string;
};

export type Problem = {
    acRate: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    freqBar: number | null;
    questionFrontendId: string;
    isFavor: boolean;
    isPaidOnly: boolean;
    status: string | null;
    title: string;
    titleSlug: string;
    topicTags: TopicTag[];
    hasSolution: boolean;
    hasVideoSolution: boolean;
};