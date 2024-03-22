import { ClockSize } from './Clock';

export default function getSizeClass(size: ClockSize): string {
  switch (size) {
    case ClockSize.Xs:
      return 'text-1';
    case ClockSize.Sm:
      return 'text-2';
    case ClockSize.Lg:
      return 'text-6';
    default:
      return 'text-2';
  }
}
