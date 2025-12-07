import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"


function DatePick({date, setDate}){
    
    return (
        <DatePicker 
            // showYearDropdown
            // scrollableYearDropdown
            // yearDropdownItemNumber={100}
            // showMonthDropdown
            selected={date} 
            onChange={(date)=> setDate(date)}
        />);
}

export default DatePick;