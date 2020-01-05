import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function MyDatePicker() {
  const onDateChange = date => {
    setStartDate(date);
    console.log(startDate);
  };
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={onDateChange}
        showYearDropdown
        dateFormatCalendar="MMMM"
        yearDropdownItemNumber={100}
        scrollableYearDropdown
      />

      <button onClick={() => alert(startDate)}>Enter Birthdate</button>
    </div>
  );
}

export default MyDatePicker;
