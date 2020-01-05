import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import './styles.css';

function calculateOldness(birthday) {
  const today = Date.now();
  const myBirthday = new Date(birthday);
  const difference = today - myBirthday;
  const oldDate = new Date(myBirthday - difference).toLocaleDateString();

  return oldDate;
}

const FeelingOld = () => {
  const [birthday, setBirthday] = useState('');
  const [calculatedOldDate, setCalculatedOldDate] = useState('');
  const [oldDateIsVisible, setOldDateIsVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  
  const onDateChange = date => {
    setStartDate(date);
  };
  
  const OldDateDiv = ({ input }) => {
  return (
    <div className='returned-age'>
      <h3>Your birthday is as close to today as it is to {input}</h3>

      <h3>
        <a href={`https://www.infoplease.com/year/${input.slice(-4)}`}>
          Top news stories from {input.slice(-4)}
        </a>
      </h3>
    </div>
  );
};
  
  return (

    <div className='App'>
      <div className='flex-item'>
        <h1>How to feel old</h1>
        <h2>Just enter your birthday in the form</h2>
      </div>
    <div>
      <DatePicker
        selected={startDate}
        onChange={onDateChange}
       peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      />

      <button onClick={() => {
         setCalculatedOldDate(calculateOldness(startDate));
            setOldDateIsVisible(true);
      }}
      >Enter Birthdate</button>
    </div>
     {oldDateIsVisible ? <OldDateDiv input={calculatedOldDate} /> : null}
      <footer>
        Made by <a href='https://bushbass.github.io/'>Alex Nielsen</a>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<FeelingOld />, rootElement);
