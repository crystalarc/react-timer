import React, { useState } from 'react';

import './App.css';
import { Timer } from './timer/Timer';

function App() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [totalTime, setTotalTime] = useState(5 * 60 * 60);
  const [timeSpent, setTimeSpent] = useState(0);

  console.log(isTimerRunning, timeSpent);

  const handleTimerEnd = () => {
    setIsTimerRunning(false);
    setTimeSpent(0);
  };

  return (
    <>
      <Timer
        time={timeSpent}
        totalTime={totalTime}
        isRunning={isTimerRunning}
        showInputs={true}
        onStart={() => setIsTimerRunning(true)}
        onPause={() => setIsTimerRunning(false)}
        onEnd={handleTimerEnd}
        onTick={() => setTimeSpent(timeSpent + 1)}
        onTotalTimeChange={setTotalTime}
      />
    </>
  );
}

export default App;
