/**
 * This query retrieves the daily coding challenge question from the GraphQL API.
 * It fetches various details about the active daily coding challenge question, including:
 * - Date and link to the question
 * - Question details such as ID, title, content, difficulty, likes, dislikes, etc.
 * - Contributors' information
 * - Topic tags associated with the question
 * - Code snippets in different languages
 * - Solution details
 * - Status and metadata of the question
 * - Challenge question details including streak count and type
 * 
 * The query is designed to provide comprehensive information about the daily coding challenge question,
 * which can be used to display the question, its metadata, and related information in a user interface.
 */
const query = `#graphql
  query getDailyProblem {
    activeDailyCodingChallengeQuestion {
        date
        link
        question {
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
    }
}`;

export default query;
