import { clockModelToSeconds } from '../utils/time';

export const getTime = (hours: string, minutes: string, seconds: string): number =>
  clockModelToSeconds({
    hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds),
  });
