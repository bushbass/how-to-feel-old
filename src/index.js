import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import './styles.css';

function calculateOldness(birthday) {
  const today = Date.now();
  const myBirthday = new Date(birthday);
  const difference = today - myBirthday;
  const oldDate = new Date(myBirthday - difference).toLocaleDateString();

  return oldDate;
}

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

const FeelingOld = () => {
  const [birthday, setBirthday] = useState('');
  const [calculatedOldDate, setCalculatedOldDate] = useState('');
  const [oldDateIsVisible, setOldDateIsVisible] = useState(false);

  return (
    <div className='App'>
      <div className='flex-item'>
        <h1>How to feel old</h1>
        <h2>Just enter your birthday in the form</h2>
        <form
          onSubmit={event => {
            event.preventDefault();
            setCalculatedOldDate(calculateOldness(birthday));
            setOldDateIsVisible(true);
          }}
        >
          <input
            onChange={event => setBirthday(event.target.value)}
            value={birthday}
            placeholder='Enter age'
            type='text'
          />
          <button>Feel old!!!</button>
          <p>Use mm/dd/yyyy format</p>
        </form>

        {oldDateIsVisible ? <OldDateDiv input={calculatedOldDate} /> : null}
      </div>

      <footer>
        Made by <a href='https://bushbass.github.io/'>Alex Nielsen</a>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<FeelingOld />, rootElement);
