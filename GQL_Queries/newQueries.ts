// Query to select a specific question based on its title slug
export const selectQuestion = `
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
}`

// Query to get the daily coding challenge question
export const dailyQeustion = `
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
}
`;

// Query to get the question of the day
export const questionOfTodayQuery = `
  query questionOfToday {
  activeDailyCodingChallengeQuestion {
    date
    userStatus
    link
    question {
    acRate
    difficulty
    freqBar
    frontendQuestionId: questionFrontendId
    isFavor
    paidOnly: isPaidOnly
    status
    title
    titleSlug
    hasVideoSolution
    hasSolution
    topicTags {
      name
      id
      slug
    }
    }
  }
  }
`;

// Query to get skill stats of a user based on their username
export const skillStatsQuery = `
  query skillStats($username: String!) {
    matchedUser(username: $username) {
    tagProblemCounts {
      advanced {
      tagName
      tagSlug
      problemsSolved
      }
      intermediate {
      tagName
      tagSlug
      problemsSolved
      }
      fundamental {
      tagName
      tagSlug
      problemsSolved
      }
    }
    }
  }
`;

// Query to get the user profile based on their username
export const getUserProfileQuery = `
  query getUserProfile($username: String!) {
  allQuestionsCount {
    difficulty
    count
  }
  matchedUser(username: $username) {
    contributions {
    points
    }
    profile {
    reputation
    ranking
    }
    submissionCalendar
    submitStats {
    acSubmissionNum {
      difficulty
      count
      submissions
    }
    totalSubmissionNum {
      difficulty
      count
      submissions
    }
    }
  }
  recentSubmissionList(username: $username) {
    title
    titleSlug
    timestamp
    statusDisplay
    lang
    __typename
  }
  matchedUserStats: matchedUser(username: $username) {
    submitStats: submitStatsGlobal {
    acSubmissionNum {
      difficulty
      count
      submissions
      __typename
    }
    totalSubmissionNum {
      difficulty
      count
      submissions
      __typename
    }
    __typename
    }
  }
  }
`;

// Query to get the official solution for a question based on its title slug
export const officialSolutionQuery = `
  query OfficialSolution($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
    solution {
      id
      title
      content
      contentTypeId
      paidOnly
      hasVideoSolution
      paidOnlyVideo
      canSeeDetail
      rating {
      count
      average
      userRating {
        score
      }
      }
      topic {
      id
      commentCount
      topLevelCommentCount
      viewCount
      subscribed
      solutionTags {
        name
        slug
      }
      post {
        id
        status
        creationDate
        author {
        username
        isActive
        profile {
          userAvatar
          reputation
        }
        }
      }
      }
    }
    }
  }
`;

// Query to get the user profile calendar based on their username and year
export const userProfileCalendarQuery = `
  query UserProfileCalendar($username: String!, $year: Int!) {
    matchedUser(username: $username) {
    userCalendar(year: $year) {
      activeYears
      streak
      totalActiveDays
      dccBadges {
      timestamp
      badge {
        name
        icon
      }
      }
      submissionCalendar
    }
    }
  }
`;

// Query to get the user question progress based on their user slug
export const userProfileUserQuestionProgressV2Query = `
  query userProfileUserQuestionProgressV2($userSlug: String!) {
    userProfileUserQuestionProgressV2(userSlug: $userSlug) {
      numAcceptedQuestions {
        count
        difficulty
      }
      numFailedQuestions {
        count
        difficulty
      }
      numUntouchedQuestions {
        count
        difficulty
      }
      userSessionBeatsPercentage {
        difficulty
        percentage
      }
    }
  }
`;

// Query to get the user contest ranking information based on their username
export const userContestRankingInfoQuery = `
  query userContestRankingInfo($username: String!) {
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
      trendDirection
      problemsSolved
      totalProblems
      finishTimeInSeconds
      rating
      ranking
      contest {
        title
        startTime
      }
    }
  }
`;
