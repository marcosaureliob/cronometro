import LapList from "./LapList";
import TimerControl from "./TimerControl";
import TimerDisplay from "./TimerDisplay";

export default function Timer() {
  return (
    <div className="timer-container">
      <TimerDisplay />
      <TimerControl />
      <LapList />
    </div>
  )
}
