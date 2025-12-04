import { DateTime } from 'luxon';
import AgeDisplay from './component/AgeDisplay';
import './App.css';
import { useState } from 'react';

function App() {
  const now = DateTime.fromISO('20251203');
  let [birthday, setBirthday] = useState(DateTime.fromISO('2004-11-02'));

  return (
    <div className='container'>
      <h1 className='head'>Age Calculator</h1>
      <p style={{textAlign: 'left', paddingLeft: '20px'}}>Enter your birth date:</p>
      <h1>tmp2</h1>
      <button>Calculate</button>
      <AgeDisplay now={now} birthday={birthday}/>
    </div>
  )
}

export default App
