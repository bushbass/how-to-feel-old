import React, { useState } from "react";

import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import "./styles.css";

function calculateOldness(birthday) {
  const today = Date.now();
  const myBirthday = new Date(birthday);
  const difference = today - myBirthday;
  const oldDate = new Date(myBirthday - difference).toLocaleDateString();

  // console.log({ birthday });
  // console.log({ "my birthday": Date.parse(myBirthday) });
  // console.log({ today });
  // console.log({ difference });
  // console.log({ oldDate });

  return oldDate;
}

// const handleSubmit = birthday => {
//   calculateOldness(birthday);
// };

const OldDateDiv = ({ input }) => {
  return (
    <div className="returned-age">
      Your birthday is as close to today as it is to {input}
    </div>
  );
};

const FeelingOld = () => {
  const [birthday, setBirthday] = useState("");
  const [calculatedOldDate, setCalculatedOldDate] = useState("");
  const [oldDateIsVisible, setOldDateIsVisible] = useState(false);

  return (
    <div className="App">
      <div className="flex-item">
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
            placeholder="Enter age"
            type="text"
          />
          <button>Feel old!</button>
          <p>Use mm/dd/yyyy format</p>
        </form>

        {/* <div className="returned-age">
        Your birthday is halfway between today and {calculatedOldDate}
      </div> */}
        {oldDateIsVisible ? <OldDateDiv input={calculatedOldDate} /> : null}
      </div>
      <footer>
        Made by <a href="https://bushbass.github.io/">Alex Nielsen</a>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<FeelingOld />, rootElement);
