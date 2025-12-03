import { DateTime } from 'luxon';

function App() {
  const now = DateTime.fromISO('2025-12-03');
  const birthday = DateTime.fromISO('2004-11-02');
  const age = now.diff(birthday, ['years', 'months','days']).toObject();
  
  return (
    <>
      <h1>{"You are "+age.years+" years "+age.months+" months old"}</h1>
    </>
  )
}

export default App
