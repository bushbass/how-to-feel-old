import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function MyDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = date => {
    setStartDate({ startDate: date });
  };
  return <DatePicker selected={startDate} onChange={handleChange} />;
}

export default MyDatePicker;
