type TimerControlsProps = {
  timerOn: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onLap: () => void;
};

export default function TimerControls({ timerOn, onStart, onStop, onReset, onLap }: TimerControlsProps) {
  return (
    <div className="timer-controls">
      {!timerOn && <button onClick={onStart}>Start</button>}
      {timerOn && <button onClick={onStop}>Stop</button>}
      {timerOn && <button onClick={onLap}>Lap</button>}
      <button onClick={onReset}>Reset</button>
    </div>
  )
}
