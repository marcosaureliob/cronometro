type LapsProps = {
  laps: string[];
}

export default function LapList({ laps }: LapsProps) {
  return (
    <div className="timer-laps">
      <h3>Laps: {laps.length}</h3>
      <ul>
        {laps?.map((lap, index) => (
          <li key={index}>
            Lap {index + 1}: {lap}
          </li>
        ))}
      </ul>
    </div>
  );
}
