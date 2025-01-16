/**
 * GraphQL query to fetch user profile information from LeetCode.
 * 
 * This query retrieves various details about a user, including:
 * 
 * - `allQuestionsCount`: The count of all questions categorized by difficulty.
 * - `matchedUser`: Detailed information about the matched user, including:
 *   - `username`: The username of the user.
 *   - `githubUrl`: The GitHub profile URL of the user.
 *   - `twitterUrl`: The Twitter profile URL of the user.
 *   - `linkedinUrl`: The LinkedIn profile URL of the user.
 *   - `contributions`: The user's contributions, including points, question count, and testcase count.
 *   - `profile`: The user's profile details, such as real name, avatar, birthday, ranking, reputation, websites, country, company, school, skills, about me, and star rating.
 *   - `badges`: The badges earned by the user, including id, display name, icon, and creation date.
 *   - `upcomingBadges`: The badges that the user is about to earn, including name and icon.
 *   - `activeBadge`: The currently active badge of the user, including id, display name, icon, and creation date.
 *   - `submitStats`: The user's submission statistics, including total and accepted submissions categorized by difficulty.
 *   - `submissionCalendar`: The user's submission calendar.
 * - `recentSubmissionList`: The list of recent submissions by the user, including title, title slug, timestamp, status display, and language.
 * 
 * @param {string} $username - The username of the user whose profile is to be fetched.
 */
const query = `#graphql
query getUserProfile($username: String!) {
    allQuestionsCount {
        difficulty
        count
    }
    matchedUser(username: $username) {
        username
        githubUrl
        twitterUrl
        linkedinUrl
        contributions {
            points
            questionCount
            testcaseCount
        }
        profile {
            realName
            userAvatar
            birthday
            ranking
            reputation
            websites
            countryName
            company
            school
            skillTags
            aboutMe
            starRating
        }
        badges {
            id
            displayName
            icon
            creationDate
        }
        upcomingBadges {
            name
            icon
        }
        activeBadge {
            id
            displayName
            icon
            creationDate
        }
        submitStats {
            totalSubmissionNum {
                difficulty
                count
                submissions
            }
            acSubmissionNum {
                difficulty
                count
                submissions
            }
        }
        submissionCalendar
    }
    recentSubmissionList(username: $username, limit: 20) {
        title
        titleSlug
        timestamp
        statusDisplay
        lang
    }
}`;

export default query;
