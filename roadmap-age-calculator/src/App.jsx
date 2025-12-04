import { DateTime } from 'luxon';
import AgeDisplay from './component/AgeDisplay';
import './App.css';

function App() {
  const now = DateTime.fromISO('20251203');
  const birthday = DateTime.fromISO('2004-11-02');

  return (
    <>
      <h1 className='head'>Age Calculator</h1>
      <h1>tmp1</h1>
      <h1>tmp2</h1>
      <AgeDisplay now={now} birthday={birthday}/>
    </>
  )
}

export default App
