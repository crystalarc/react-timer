import { secondsToClockModel } from '../utils/time';

export default function getTimeString(seconds: number): string {
  const { hours, minutes, seconds: sec } = secondsToClockModel(seconds);

  return (
    hours.toString().padStart(2, '0') +
    ':' +
    minutes.toString().padStart(2, '0') +
    ':' +
    sec.toString().padStart(2, '0')
  );
}
