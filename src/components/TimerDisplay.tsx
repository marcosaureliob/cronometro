type TimerDisplayProps = {
  time: string;
};

export default function TimerDisplay({ time }: TimerDisplayProps) {
  return <div className="timer-display">{time}</div>;
}
