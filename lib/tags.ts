export const tags: Record<string, string> = {
    "Array" : "array",
    "String" : "string",
    "Hash Table" : "hash-table",
    "Dynamic Programming" : "dynamic-programming",
    "Math" : "math",
    "Sorting" : "sorting",
    "Greedy" : "greedy",
    "Depth First Search" : "depth-first-search",
    "Binary Search" : "binary-search",
    "Database" : "database",
    "Matrix" : "matrix",
    "Tree" : "tree",
    "Breadth First Search" : "breadth-first-search",
    "Bit Manipulation" : "bit-manipulation",
    "Two Pointers" : "two-pointers",
    "Prefix Sum" : "prefix-sum",
    "Heap (Priority Queue)" : "heap-priority-queue",
    "Binary Tree" : "binary-tree",
    "Simulation" : "simulation",
    "Stack" : "stack",
    "Graph" : "graph",
    "Counting" : "counting",
    "Sliding Window" : "sliding-window",
    "Design" : "design",
    "Enumeration" : "enumeration",
    "Backtracking" : "backtracking",
    "Union Find" : "union-find",
    "Linked List" : "linked-list",
    "Number Theory" : "number-theory",
    "Ordered Set" : "ordered-set",
    "Monotonic Stack" : "monotonic-stack",
    "Segment Tree" : "segment-tree",
    "Trie" : "trie",
    "Combinatorics" : "combinatorics",
    "Bitmask" : "bitmask",
    "Queue" : "queue",
    "Divide and Conquer" : "divide-and-conquer",
    "Recursion" : "recursion",
    "Memoization" : "memoization",
    "Binary Indexed Tree" : "binary-indexed-tree",
    "Geometry" : "geometry",
    "Binary Search Tree" : "binary-search-tree",
    "Hash Function" : "hash-function",
    "String Matching" : "string-matching",
    "Topological Sort" : "topological-sort",
    "Shortest Path" : "shortest-path",
    "Rolling Hash" : "rolling-hash",
    "Game Theory" : "game-theory",
    "Interactive" : "interactive",
    "Data Stream" : "data-stream",
    "Monotonic Queue" : "monotonic-queue",
    "Brainteaser" : "brainteaser",
    "Randomized" : "randomized",
    "Merge Sort" : "merge-sort",
    "Doubly-Linked List" : "doubly-linked-list",
    "Counting Sort" : "counting-sort",
    "Iterator" : "iterator",
    "Concurrency" : "concurrency",
    "Probability and Statistics" : "probability-and-statistics",
    "Quickselect" : "quickselect",
    "Suffix Array" : "suffix-array",
    "Bucket Sort" : "bucket-sort",
    "Line Sweep" : "line-sweep",
    "Minimum Spanning Tree" : "minimum-spanning-tree",
    "Shell" : "shell",
    "Reservoir Sampling" : "reservoir-sampling",
    "Strongly Connected Component" : "strongly-connected-component",
    "Eulerian Circuit" : "eulerian-circuit",
    "Radix Sort" : "radix-sort",
    "Rejection Sampling" : "rejection-sampling",
    "Biconnected Component" : "biconnected-component",
};

export function getTagSlug(tag: string): string {
    return tags[tag] || tag;
}
