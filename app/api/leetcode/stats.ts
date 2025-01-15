import { Request, Response } from 'express';
import * as gqlQueries from '../../../GQL_Queries';
import * as formatUtils from '../../../utils/userData';
import * as controllers from './controllers';
import { TransformedUserDataRequest } from '../../../types/typeInterfaces';

export const userData = (req: TransformedUserDataRequest, res: Response) => {
  controllers.fetchUserDetails(
    req.body,
    res,
    formatUtils.formatUserData,
    gqlQueries.userProfileQuery
  );
};

export const userBadges = (req: TransformedUserDataRequest, res: Response) => {
  controllers.fetchUserDetails(
    req.body,
    res,
    formatUtils.formatBadgesData,
    gqlQueries.userProfileQuery
  );
};

export const userContest = (req: TransformedUserDataRequest, res: Response) => {
  controllers.fetchUserDetails(
    req.body,
    res,
    formatUtils.formatContestData,
    gqlQueries.contestQuery
  );
};

export const userContestHistory = (
  req: TransformedUserDataRequest,
  res: Response
) => {
  controllers.fetchUserDetails(
    req.body,
    res,
    formatUtils.formatContestHistoryData,
    gqlQueries.contestQuery
  );
};

export const solvedProblem = (
  req: TransformedUserDataRequest,
  res: Response
) => {
  controllers.fetchUserDetails(
    req.body,
    res,
    formatUtils.formatSolvedProblemsData,
    gqlQueries.userProfileQuery
  );
};

export const submission = (req: TransformedUserDataRequest, res: Response) => {
  controllers.fetchUserDetails(
    req.body,
    res,
    formatUtils.formatSubmissionData,
    gqlQueries.submissionQuery
  );
};

export const acSubmission = (
  req: TransformedUserDataRequest,
  res: Response
) => {
  controllers.fetchUserDetails(
    req.body,
    res,
    formatUtils.formatAcSubmissionData,
    gqlQueries.AcSubmissionQuery
  );
};

export const calendar = (req: TransformedUserDataRequest, res: Response) => {
  controllers.fetchUserDetails(
    req.body,
    res,
    formatUtils.formatSubmissionCalendarData,
    gqlQueries.userProfileQuery
  );
};

export const languageStats = (_req: Request, res: Response) => {
  const username = _req.query.username as string;
  if (username) {
    controllers.fetchDataRawFormat(
      { username },
      res,
      gqlQueries.languageStatsQuery
    );
  }
  else {
    res.status(400).json({
      error: 'Missing or invalid query parameter: username',
      solution: 'put query after discussion',
      example: 'localhost:3000/languageStats?username=uwi',
    });
  }
 
};