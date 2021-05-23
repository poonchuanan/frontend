import React, { useState } from "react";

import LT200Form from './LT200Form';
import Btwn200To500Form from './Btwn200To500Form';
import GT500Form from './GT500Form';

const Finance = (props) => {
  const [claimType, setClaimType] = useState(null);

  let form = "";
  if (claimType === '<$200') {
      form = <LT200Form />
  } else if (claimType === '$200 ≤ claim < $500') {
      form = <Btwn200To500Form />
  } else if (claimType === '≥$500') {
      form = <GT500Form />
  } else {
      form = null;
  }
  return (
    <React.Fragment>
      <form>
        <div>
          <label htmlFor="claimType">Choose your claim type:</label>
          <br />
          <input
            type="radio"
            value="LT200"
            name="claimType"
            onClick={() => {
              setClaimType("<$200");
            }}
          />
          {"<$200"}
          <br />
          <input
            type="radio"
            value="200-500"
            name="claimType"
            onClick={() => {
              setClaimType("$200 ≤ claim < $500");
            }}
          />
          {"$200 ≤ claim < $500"}
          <br />
          <input
            type="radio"
            value="GT200"
            name="claimType"
            onClick={() => {
              setClaimType("≥$500");
            }}
          />
          {"≥$500"}
        </div>
        <br />
        <div>Selected option is : {claimType}</div>
      </form>
      {/* the respective forms will appear depending on what type the user chooses */}
      {form}
    </React.Fragment>
  );
};

export default Finance;
