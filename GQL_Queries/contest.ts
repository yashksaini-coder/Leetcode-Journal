/**
 * This GraphQL query retrieves the contest ranking and ranking history for a specific user.
 * 
 * The `getUserContestRanking` query takes the `username` as a parameter and returns the user's contest ranking, including:
 * - `attendedContestsCount`: The number of contests the user has attended.
 * - `rating`: The user's rating.
 * - `globalRanking`: The user's global ranking.
 * - `totalParticipants`: The total number of participants.
 * - `topPercentage`: The user's top percentage.
 * - `badge`: The badge information, including the badge name.
 * 
 * The `userContestRankingHistory` query takes the `username` as a parameter and returns the user's contest ranking history, including:
 * - `attended`: Whether the user attended the contest.
 * - `rating`: The user's rating for the contest.
 * - `ranking`: The user's ranking in the contest.
 * - `trendDirection`: The trend direction of the user's ranking.
 * - `problemsSolved`: The number of problems solved by the user.
 * - `totalProblems`: The total number of problems in the contest.
 * - `finishTimeInSeconds`: The finish time in seconds.
 * - `contest`: The contest information, including the title and start time.
 */
const query = `#graphql
query getUserContestRanking ($username: String!) {
    userContestRanking(username: $username) {
        attendedContestsCount
        rating
        globalRanking
        totalParticipants
        topPercentage
        badge {
            name
        }
    }
    userContestRankingHistory(username: $username) {
        attended
        rating
        ranking
        trendDirection
        problemsSolved
        totalProblems
        finishTimeInSeconds
        contest {
            title
            startTime
        }
    }
}`;

export default query;
