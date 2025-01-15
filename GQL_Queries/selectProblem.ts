/**
 * GraphQL query to select a problem by its title slug.
 * 
 * @param $titleSlug - The slug of the problem title.
 * 
 * @returns The details of the problem including:
 * 
 * - questionId: The unique identifier of the question.
 * - questionFrontendId: The frontend identifier of the question.
 * - boundTopicId: The bound topic identifier.
 * - title: The title of the question.
 * - titleSlug: The slug of the question title.
 * - content: The content of the question.
 * - translatedTitle: The translated title of the question.
 * - translatedContent: The translated content of the question.
 * - isPaidOnly: Indicates if the question is paid only.
 * - difficulty: The difficulty level of the question.
 * - likes: The number of likes the question has received.
 * - dislikes: The number of dislikes the question has received.
 * - isLiked: Indicates if the question is liked by the user.
 * - similarQuestions: A list of similar questions.
 * - exampleTestcases: Example test cases for the question.
 * - contributors: A list of contributors to the question.
 *   - username: The username of the contributor.
 *   - profileUrl: The profile URL of the contributor.
 *   - avatarUrl: The avatar URL of the contributor.
 * - topicTags: A list of topic tags associated with the question.
 *   - name: The name of the topic tag.
 *   - slug: The slug of the topic tag.
 *   - translatedName: The translated name of the topic tag.
 * - companyTagStats: Statistics of company tags.
 * - codeSnippets: A list of code snippets for the question.
 *   - lang: The language of the code snippet.
 *   - langSlug: The slug of the language.
 *   - code: The code snippet.
 * - stats: Statistics of the question.
 * - hints: Hints for solving the question.
 * - solution: The solution details of the question.
 *   - id: The identifier of the solution.
 *   - canSeeDetail: Indicates if the solution details can be seen.
 *   - paidOnly: Indicates if the solution is paid only.
 *   - hasVideoSolution: Indicates if there is a video solution.
 *   - paidOnlyVideo: Indicates if the video solution is paid only.
 * - status: The status of the question.
 * - sampleTestCase: A sample test case for the question.
 * - metaData: Metadata of the question.
 * - judgerAvailable: Indicates if the judger is available.
 * - judgeType: The type of the judge.
 * - mysqlSchemas: MySQL schemas related to the question.
 * - enableRunCode: Indicates if running code is enabled.
 * - enableTestMode: Indicates if test mode is enabled.
 * - enableDebugger: Indicates if the debugger is enabled.
 * - envInfo: Environment information for the question.
 * - libraryUrl: The library URL for the question.
 * - adminUrl: The admin URL for the question.
 * - challengeQuestion: Details of the challenge question.
 *   - id: The identifier of the challenge question.
 *   - date: The date of the challenge question.
 *   - incompleteChallengeCount: The count of incomplete challenges.
 *   - streakCount: The streak count of the challenge.
 *   - type: The type of the challenge question.
 * - note: Additional notes for the question.
 */
const query = `#graphql
query selectProblem($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
        questionId
        questionFrontendId
        boundTopicId
        title
        titleSlug
        content
        translatedTitle
        translatedContent
        isPaidOnly
        difficulty
        likes
        dislikes
        isLiked
        similarQuestions
        exampleTestcases
        contributors {
            username
            profileUrl
            avatarUrl
        }
        topicTags {
            name
            slug
            translatedName
        }
        companyTagStats
        codeSnippets {
            lang
            langSlug
            code
        }
        stats
        hints
        solution {
            id
            canSeeDetail
            paidOnly
            hasVideoSolution
            paidOnlyVideo
        }
        status
        sampleTestCase
        metaData
        judgerAvailable
        judgeType
        mysqlSchemas
        enableRunCode
        enableTestMode
        enableDebugger
        envInfo
        libraryUrl
        adminUrl
        challengeQuestion {
            id
            date
            incompleteChallengeCount
            streakCount
            type
        }
        note
    }
}`;

export default query;
