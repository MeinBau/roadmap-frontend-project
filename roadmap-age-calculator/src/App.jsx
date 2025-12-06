import { DateTime } from 'luxon';
import AgeDisplay from './component/AgeDisplay';
import './App.css';
import { useState } from 'react';
import DatePick from './component/DatePick';
import "react-datepicker/dist/react-datepicker.css"

function App() {
  const now = DateTime.fromISO('20251203');
  let [birthday, setBirthday] = useState(DateTime.fromISO('2004-11-02'));
  let [date, setDate] = useState(new Date());
  const update = function(){console.log(`${date.getFullYear()}, ${date.getMonth()+1}`)}

  return (
    <div className='container'>
      <h1 className='head'>Age Calculator</h1>
      <p style={{textAlign: 'left', paddingLeft: '20px'}}>Enter your birth date:</p>
      <DatePick 
        date={date} 
        setDate={setDate}
      />
      <button onClick={update}>Calculate</button>
      <AgeDisplay now={now} birthday={birthday}/>
    </div>
  )
}

export default App
