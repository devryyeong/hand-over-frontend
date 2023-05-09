import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dateToString = (date) => {
    return (
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date.getDate().toString().padStart(2, "0") +
      "T" +
      date.getHours().toString().padStart(2, "0") +
      ":" +
      date.getMinutes().toString().padStart(2, "0")
    );
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectStart
        startDate={startDate}
        endDate={endDate}
        locale={ko}
        dateFormat="Pp"
        showTimeSelect
        timeFormat="p"
        timeIntervals={10}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        locale={ko}
        dateFormat="Pp"
        showTimeSelect
        timeFormat="p"
        timeIntervals={10}
      />
      <button onClick={() => console.log(dateToString(startDate))}>start</button>
    </div>
  );
};

export default DatePicker;