import React, { useState } from 'react';
import styled from "styled-components";
import COLORS from "../pages/styles/colors";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = () => {
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
    <DatePickerWrapper>
      <StyledDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectStart
        startDate={startDate}
        endDate={endDate}
        locale={ko}
        dateFormat="Pp"
        showTimeSelect
        timeFormat="p"
        timeIntervals={1}
      />
      <Text>~</Text>
      <StyledDatePicker
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
        timeIntervals={1}
      />
    </DatePickerWrapper>
  );
};

  const StyledDatePicker = styled(DatePicker)`
    width: 200px;
    padding: 10px;
    background-color: ${COLORS.WHITE};
    border-radius: 10px;
    border: 1px solid ${COLORS.Navy_100};
    outline: none;
    cursor: pointer;
  `;

  const DatePickerWrapper = styled.div`
    display: flex;
    align-items: center;
  `;

  const Text = styled.div`
    color: ${COLORS.Navy_100};
    margin: 0px 10px;
  `;

export default DatePick;