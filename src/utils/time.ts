export function secondsToClockModel(time: number): ClockModel {
  const hours = time >= 3600 ? Math.floor(time / 3600) : 0;
  time -= hours * 3600;

  const minutes = time >= 60 ? Math.floor(time / 60) : 0;
  time -= minutes * 60;

  const seconds = time;

  return {
    hours,
    minutes,
    seconds,
  };
}

export function clockModelToSeconds({
  hours,
  minutes,
  seconds,
}: ClockModel): number {
  return hours * 3600 + minutes * 60 + seconds;
}

export type ClockModel = {
  seconds: number;
  minutes: number;
  hours: number;
};
