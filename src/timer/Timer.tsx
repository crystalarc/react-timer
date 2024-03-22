import './Timer.scss';

import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { Clock, ClockSize } from '../clock/Clock';
import { TimerInputs } from '../timer-inputs/TimerInputs';
import { makeBeep } from './makeBeep';

export function Timer({
  className,
  showInputs,
  totalTime,
  time,
  isRunning,
  beep = true,
  onStart,
  onPause,
  onEnd,
  onTick,
  onTotalTimeChange,
}: {
  className?: string;
  showInputs: boolean;
  totalTime: number;
  time: number;
  isRunning: boolean;
  beep?: boolean;
  onStart: () => void;
  onPause: (time: number) => void;
  onEnd: (totalTime: number) => void;
  onTick: () => void;
  onTotalTimeChange: (time: number) => void;
}) {
  const { t } = useTranslation();

  const hasFinished = time >= totalTime;
  const remainingTime = totalTime - time;

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (isRunning) {
      interval = setInterval(() => {
        onTick();
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, onTick]);

  useEffect(() => {
    if (hasFinished) {
      if (beep) {
        makeBeep();
      }
      onEnd(time);
    }
  }, [hasFinished]);

  return (
    <div className={'Timer ' + className}>
      <div className="Timer_upper-section">
        <Clock seconds={remainingTime} size={ClockSize.Lg} />
      </div>
      <div className="Timer_buttons mb-5">
        <Button
          className="me-1"
          variant="primary"
          onClick={onStart}
          disabled={isRunning || totalTime === 0}
        >
          {t('global.start')}
        </Button>
        <Button
          className="me-1"
          variant="warning"
          onClick={() => onPause(time)}
          disabled={!isRunning}
        >
          {t('global.pause')}
        </Button>
        <Button
          variant="secondary"
          onClick={() => onEnd(time)}
          disabled={time === 0}
        >
          {t('global.end')}
        </Button>
      </div>
      {showInputs ? (
        <TimerInputs
          totalTime={totalTime}
          onTimeChange={onTotalTimeChange}
          disabled={isRunning || time > 0}
        />
      ) : null}
    </div>
  );
}
