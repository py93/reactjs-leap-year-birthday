import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";

export default function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [leapMessage, setLeapMessage] = useState("");
  function checkLeap(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  function datePickerHandler(date) {
    setStartDate(date);
    const birthYear = date.getFullYear();

    if (checkLeap(birthYear) === true) {
      setLeapMessage("Congratulations! You are born in a leap year");
    } else {
      setLeapMessage("You are not born in a leap year!");
    }
  }
  return (
    <div className="App">
      <h1>Birthday Leap Year Checker</h1>
      <h4>Please select your birthdate in below datepicker</h4>
      <DatePicker
        placeholder="Date of Birth"
        maxDate={new Date()}
        selected={startDate}
        onChange={(date) => datePickerHandler(date)}
      />
      <div id="outputMsg">{leapMessage}</div>
    </div>
  );
}
