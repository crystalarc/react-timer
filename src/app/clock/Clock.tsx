import getTimeString from './getTimeString';
import getSizeClass from './getSizeClass';

export enum ClockSize {
  Xs = 'xs',
  Sm = 'sm',
  Lg = 'lg',
}

export function Clock({ seconds, size }: { seconds: number; size: ClockSize }) {
  const timeString = getTimeString(seconds);
  const sizeClass = getSizeClass(size);

  return (
    <span className={'Clock ' + sizeClass} data-testid="time-string">
      {timeString}
    </span>
  );
}
