import { render, screen } from '@testing-library/react';

import { Clock, ClockSize } from './Clock';

describe('Clock component', () => {
  it('should render Clock component correctly', () => {
    render(<Clock seconds={0} size={ClockSize.Xs} />);
    const element = screen.getByTestId('time-string');
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe('00:00:00');
  });

  it('should render 3750 seconds correctly', () => {
    render(<Clock seconds={3750} size={ClockSize.Xs} />);
    const element = screen.getByTestId('time-string');
    expect(element.textContent).toBe('01:02:30');
  });

  it('should render 2000 seconds correctly', () => {
    render(<Clock seconds={2000} size={ClockSize.Xs} />);
    const element = screen.getByTestId('time-string');
    expect(element.textContent).toBe('00:33:20');
  });

  it('should render 59 seconds correctly', () => {
    render(<Clock seconds={59} size={ClockSize.Xs} />);
    const element = screen.getByTestId('time-string');
    expect(element.textContent).toBe('00:00:59');
  });
});
