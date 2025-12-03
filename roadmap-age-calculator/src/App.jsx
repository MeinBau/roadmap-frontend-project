import { DateTime } from 'luxon';
import AgeDisplay from './component/AgeDisplay';

function App() {
  const now = DateTime.fromISO('20251203');
  const birthday = DateTime.fromISO('2004-11-02');

  return (
    <>
      <AgeDisplay now={now} birthday={birthday}/>
    </>
  )
}

export default App
