/**
 * GraphQL query to fetch recent submissions of a user.
 * 
 * @param $username - The username of the user whose recent submissions are to be fetched.
 * @param $limit - The maximum number of recent submissions to fetch.
 * 
 * @returns An object containing the following fields:
 * - title: The title of the submission.
 * - titleSlug: The slugified title of the submission.
 * - timestamp: The timestamp of the submission.
 * - statusDisplay: The status of the submission (e.g., Accepted, Wrong Answer).
 * - lang: The programming language used for the submission.
 */
export const recentSubmissionList = `#graphql
query getRecentSubmissions($username: String!, $limit: Int) {
    recentSubmissionList(username: $username, limit: $limit) {
        title
        titleSlug
        timestamp
        statusDisplay
        lang
    }
}`;

