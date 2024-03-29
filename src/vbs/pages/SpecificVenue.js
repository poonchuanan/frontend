import React, { useEffect, useState } from "react";
import ModifiedCalendar from "../components/Calendar";
import ScheduleSelect from "../components/ScheduleSelect";
import SelectedDisplay from "../components/SelectedDisplay";
import { Link, useHistory, useParams } from "react-router-dom";
import ProgressBar2 from "../components/ProgressBars/ProgressBar2";
import "./SpecificVenue.css";

import "./SpecificVenue.css";
//data meant to be HTTP Requested from backend
const DATA = [
  { id: 0, timeStart: "0900 ", timeEnd: "0930", booked: false },
  { id: 1, timeStart: "0930 ", timeEnd: "1000", booked: false },
  { id: 2, timeStart: "1000 ", timeEnd: "1030", booked: true },
  { id: 3, timeStart: "1030 ", timeEnd: "1100", booked: true },
  { id: 4, timeStart: "1100 ", timeEnd: "1130", booked: true },
  { id: 5, timeStart: "1130 ", timeEnd: "1200", booked: true },
  { id: 6, timeStart: "1200 ", timeEnd: "1230", booked: false },
  { id: 7, timeStart: "1230 ", timeEnd: "1300", booked: false },
  { id: 8, timeStart: "1300 ", timeEnd: "1330", booked: false },
  { id: 9, timeStart: "1330 ", timeEnd: "1400", booked: false },
  { id: 10, timeStart: "1400", timeEnd: "1430", booked: true },
  { id: 11, timeStart: "1430", timeEnd: "1500", booked: false },
  { id: 12, timeStart: "1500", timeEnd: "1530", booked: false },
  { id: 13, timeStart: "1530", timeEnd: "1600", booked: false },
  { id: 14, timeStart: "1600", timeEnd: "1630", booked: true },
  { id: 15, timeStart: "1630", timeEnd: "1700", booked: false },
  { id: 16, timeStart: "1700", timeEnd: "1730", booked: true },
  { id: 17, timeStart: "1730", timeEnd: "1800", booked: false },
  { id: 18, timeStart: "1800", timeEnd: "1830", booked: false },
  { id: 19, timeStart: "1830", timeEnd: "1900", booked: true },
  { id: 20, timeStart: "1900", timeEnd: "1930", booked: false },
  { id: 21, timeStart: "1930", timeEnd: "2000", booked: false },
  { id: 22, timeStart: "2000", timeEnd: "2030", booked: false },
  { id: 23, timeStart: "2030", timeEnd: "2100", booked: false },
  { id: 24, timeStart: "2100", timeEnd: "2130", booked: false },
  { id: 25, timeStart: "2130", timeEnd: "2200", booked: false },
  { id: 26, timeStart: "2200", timeEnd: "2230", booked: false },
  { id: 27, timeStart: "2230", timeEnd: "2300", booked: false },
  { id: 28, timeStart: "2300", timeEnd: "2330", booked: false },
  { id: 29, timeStart: "2330", timeEnd: "0000", booked: false },
];

function SpecificVenue() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeslots, setTimeslots] = useState(DATA);
  const [selectedTimeslot, setSelectedTimeslot] = useState([]);

  const venueName = useParams().venueName;

  function handleButtonClick() {
    window.history.push(`./${venueName}/bookingpage`, { selectedDate: selectedDate });
  }
  function callDay(clikedDay) { console.log(clikedDay)};
  return (
    <div class="mainContainer">
      <div class="statusBar">
        <h1
          style={{
            fontFamily: '"Raleway", sans-serif',
            fontSize: "2rem",
            margin: "0 0",
          }}
        >
          Venue Booking System
        </h1>
        <ProgressBar2 />
      </div>
      <h1 class="banner">{venueName}</h1>
      <div class="scheduleAndCalendar">
        <ScheduleSelect
          selectedDate={selectedDate}
          timeslots={timeslots}
          setTimeslots={setTimeslots}
          selectedTimeslot={selectedTimeslot}
          setSelectedTimeslot={setSelectedTimeslot}
        />
        <div
          style={{
            flexDirection: "column",
            width: "70%",
            height: "70vh",
          }}
        >
          <ModifiedCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            
          />
          
          <SelectedDisplay selectedTimeslot={selectedTimeslot} />
        </div>
      </div>
      <div className="bottomNavigation">
        <Link class="backButton" to="/vbs">
          Back
        </Link>
        {selectedDate && selectedTimeslot.length ? (
          <p></p>
        ) : (
          <p
            style={{
              fontFamily: '"Roboto Condensed", sans-serif',
              margin: "1% 0",
            }}
          >
            Select Date and Time to Submit
          </p>
        )}
        {selectedDate && selectedTimeslot.length > 0 ? (
          <Link
            to={{
              pathname: `/vbs/${venueName}/bookingpage`,
              state: { selectedDate, selectedTimeslot },
            }}
            class="submitButton enabled"
          >
            Submit
          </Link>
        ) : (
          <div class="submitButton disabled">Submit</div>
        )}
      </div>
    </div>
  );
}

export default SpecificVenue;
