import React, { useState } from "react";
import "./AdminMain.css";
import OuterTabs from "./OuterTabs";
import { useHistory } from "react-router-dom";

const AdminMain = () => {
  const history = useHistory();
  const [tabNumber, setTabNumber] = useState(1);
  function handleClick() {
    history.push("/adminview");
  }

  return (
    <div className="adminMain">
      <OuterTabs>
        <div tabName="Venue Management">Venue Management</div>
        <div tabName="Booking Request">Booking Request</div>
        <div tabName="Recurring Booking"> Recurring Booking</div>
        <div tabName="Calendar View">Calendar View</div>
      </OuterTabs>
    </div>
  );
};

export default AdminMain;
