declare module 'leetcode-calendar' {
  import { FC } from 'react';

  interface LeetCodeCalendarProps {
    username: string;
    blockSize?: number;
    blockMargin?: number;
    fontSize?: number;
    theme?: object;
    style?: React.CSSProperties;
  }

  const LeetCodeCalendar: FC<LeetCodeCalendarProps>;
  export default LeetCodeCalendar;
}
