import LapList from "./LapList";
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";

import "./Timer.css";
import { useEffect, useState } from "react";

export default function Timer() {
  const [millisecond, setMilliSecond] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [laps, setLaps] = useState<string[]>([]);

  const formatTime = () => {
    const minutes = ("0" + Math.floor(millisecond / 60000) % 60).slice(-2);
    const seconds = ("0" + Math.floor(millisecond / 1000) % 60).slice(-2);
    const centiseconds = ("0" + Math.floor(millisecond / 10) % 100).slice(-2);

    return `${minutes}:${seconds}:${centiseconds}`;
  };

  const startTimer = () => {
    return setInterval(() => {
      setMilliSecond((prevMilliseconds) => prevMilliseconds + 10);
    }, 10);
  };

  const stopTimer = (interval: number | null) => {
    if (interval) {
      clearInterval(interval);
    }
  };

  const resetTimer = () => {
    setMilliSecond(0);
    setTimerOn(false);
    setLaps([]);
  };

  const addLap = () => {
    setLaps((prevLaps) => [...prevLaps, formatTime()]);
  };

  useEffect(() => {
    let interval: number | null = null;

    if (timerOn) {
      interval = startTimer();
    } else {
      stopTimer(interval);
    }

    return () => stopTimer(interval);
  }, [timerOn]);

  return (
    <div className="timer-container">
      <TimerDisplay time={formatTime()} />
      <TimerControls
        timerOn={timerOn}
        onStart={() => setTimerOn(true)}
        onStop={() => setTimerOn(false)}
        onLap={addLap}
        onReset={resetTimer}
      />
      <LapList laps={laps} />
    </div>
  );
}
