import { render, screen } from '@testing-library/react';

import { TimerInputs } from './TimerInputs';

describe('TimerInputs component', () => {
  it('should render TimerInputs component correctly', () => {
    render(<TimerInputs totalTime={245} onTimeChange={() => {}} />);
    const elements = screen.getAllByRole('spinbutton');
    expect(elements).toHaveLength(3);

    const hoursEl = screen.getByTestId('hours') as HTMLInputElement;
    expect(hoursEl.value).toEqual('0');
    const minutesEl = screen.getByTestId('minutes') as HTMLInputElement;
    expect(minutesEl.value).toEqual('4');
    const secondsEl = screen.getByTestId('seconds') as HTMLInputElement;
    expect(secondsEl.value).toEqual('5');
  });
});
