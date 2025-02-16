/**
 * This GraphQL query retrieves the count of problems solved by a user for each programming language.
 * 
 * @param $username - The username of the user whose language problem count is being queried.
 * @returns An object containing the user's language problem count, including the language name and the number of problems solved.
 * 
 * Example usage:
 * 
 * ```typescript
 * const query = `
 *     query languageStats($username: String!) {
 *         matchedUser(username: $username) {
 *             languageProblemCount {
 *                 languageName
 *                 problemsSolved
 *             }
 *         }
 *     }
 * `;
 * ```
 */
export const languageStats = `
    query languageStats($username: String!) {
        matchedUser(username: $username) {
            languageProblemCount {
                languageName
                problemsSolved
            }
        }
    }
`;