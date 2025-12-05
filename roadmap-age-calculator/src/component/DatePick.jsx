import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react";

function DatePick(){
    const [date, setDate] = useState(new Date());
    return (
        <DatePicker 
            selected={date} 
            onChange={(date)=> setDate(date)}
        />);
}

export default DatePick;