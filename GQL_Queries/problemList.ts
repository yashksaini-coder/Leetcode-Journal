/**
 * This GraphQL query retrieves a list of problems from a problem set.
 * The query accepts parameters for category slug, limit, skip, and filters.
 * It returns the total number of problems and detailed information about each problem,
 * including acceptance rate, difficulty, frequency bar, frontend ID, favor status,
 * paid-only status, current status, title, title slug, topic tags, and solution availability.
 */
const query = `#graphql
    query getProblems($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
        problemsetQuestionList: questionList(
            categorySlug: $categorySlug
            limit: $limit
            skip: $skip
            filters: $filters
        ) {
            total: totalNum
            questions: data {
                acRate
                difficulty
                freqBar
                questionFrontendId
                isFavor
                isPaidOnly
                status
                title
                titleSlug
                topicTags {
                    name
                    id
                    slug
                }
                hasSolution
                hasVideoSolution
            }
        }
}`;

export default query;
