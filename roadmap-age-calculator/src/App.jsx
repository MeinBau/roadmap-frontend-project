import { DateTime } from 'luxon';
import AgeDisplay from './component/AgeDisplay';
import './App.css';
import { useState } from 'react';
import DatePick from './component/DatePick';
import "react-datepicker/dist/react-datepicker.css"

function App() {
  const now = DateTime.now();
  let [birthday, setBirthday] = useState(DateTime.fromISO('not a date'));
  let [date, setDate] = useState(new Date('2000/01/01'));
  const update = function(){setBirthday(DateTime.fromISO(String(date.getFullYear()) + String(date.getMonth() + 1).padStart(2, '0') + String(date.getDate()).padStart(2, '0')))}   
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
