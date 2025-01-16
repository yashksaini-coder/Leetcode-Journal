/**
 * GraphQL query to fetch recent Accepted (AC) submissions of a user.
 * 
 * @param $username - The username of the user whose submissions are to be fetched.
 * @param $limit - The maximum number of submissions to fetch.
 * 
 * @returns An object containing the following fields for each submission:
 * - title: The title of the problem.
 * - titleSlug: The URL-friendly slug of the problem title.
 * - timestamp: The timestamp when the submission was made.
 * - statusDisplay: The display status of the submission.
 * - lang: The programming language used for the submission.
 */
const query = `#graphql
query getACSubmissions ($username: String!, $limit: Int) {
    recentAcSubmissionList(username: $username, limit: $limit) {
        title
        titleSlug
        timestamp
        statusDisplay
        lang
    }
}`;

export default query;
