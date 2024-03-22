import { useEffect, useRef, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDebounce } from '../utils/useDebounce';
import { clockModelToSeconds, secondsToClockModel } from '../utils/time';

const DEBOUNCE = 140;

const getTime = (hours: string, minutes: string, seconds: string): number =>
  (parseInt(hours) || 0) * 3600 + (parseInt(minutes) || 0) * 60 + (parseInt(seconds) || 0);

export function TimerInputs({
  disabled = false,
  totalTime,
  onTimeChange,
}: {
  disabled?: boolean;
  totalTime: number;
  onTimeChange: (s: number) => void;
}) {
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [seconds, setSeconds] = useState('0');

  const { t } = useTranslation();

  const debouncedHours = useDebounce(hours, DEBOUNCE);
  const debouncedMinutes = useDebounce(minutes, DEBOUNCE);
  const debouncedSeconds = useDebounce(seconds, DEBOUNCE);
  const lastDebouncedTime = useRef(0);

  useEffect(() => {
    const debouncedTime = getTime(debouncedHours, debouncedMinutes, debouncedSeconds);

    if (debouncedTime !== null && lastDebouncedTime.current !== debouncedTime) {
      lastDebouncedTime.current = debouncedTime;
      onTimeChange(debouncedTime);
    }
  }, [debouncedHours, debouncedMinutes, debouncedSeconds, onTimeChange]);

  useEffect(() => {
    const lastTime = clockModelToSeconds({
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: parseInt(seconds),
    });
    if (totalTime !== lastTime) {
      const { hours, minutes, seconds } = secondsToClockModel(totalTime);
      setHours(hours.toString());
      setMinutes(minutes.toString());
      setSeconds(seconds.toString());
    }
  }, [totalTime]);

  return (
    <div className="TimerInputs">
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="hours">
            <Form.Label>{t('global.hours')}</Form.Label>
            <Form.Control
              type="number"
              min={0}
              value={hours}
              onChange={(event) => setHours(event.target.value)}
              disabled={disabled}
              data-testid="hours"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="minutes">
            <Form.Label>{t('global.minutes')}</Form.Label>
            <Form.Control
              type="number"
              min={0}
              max={59}
              value={minutes}
              onChange={(event) => setMinutes(event.target.value)}
              disabled={disabled}
              data-testid="minutes"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="hours">
            <Form.Label>{t('global.seconds')}</Form.Label>
            <Form.Control
              type="number"
              min={0}
              max={59}
              value={seconds}
              onChange={(event) => setSeconds(event.target.value)}
              disabled={disabled}
              data-testid="seconds"
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
}
