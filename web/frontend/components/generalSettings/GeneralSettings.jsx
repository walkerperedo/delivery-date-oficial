import React from "react";
import { ClockDigital, ClockTextual } from "..";
import "./styles.css";

const GeneralSettings = () => {
  const orderTime = new Date();
  orderTime.setHours(orderTime.getHours() + 10);

  const deliveredDate = new Date();
  deliveredDate.setDate(deliveredDate.getDate() + 5);

  if (deliveredDate.getDay() == 6 || deliveredDate.getDay() == 0) {
    deliveredDate.getDay() == 6
      ? deliveredDate.setDate(deliveredDate.getDate() + 2)
      : deliveredDate.setDate(deliveredDate.getDate() + 1);
  }

  // if (toDate.getDay() == 6 || toDate.getDate() == 7) {
  //   toDate.getDay() == 6
  //     ? toDate.setDate(toDate.getDate() + 2)
  //     : toDate.setDate(toDate.getDate() + 1);
  // }

  return (
    <div className="card">
      <div className="title-container">
        <h1>General Settings</h1>
        <p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1670/1670915.png"
            style={{
              height: "10rem",
              marginRight: "10px",
              paddingBottom: "4px",
            }}
          />
        </p>
      </div>
      <div style={{ display: "flex", rowGap: "1rem" }}>
        <ClockDigital deadline={orderTime} deliveredDate={deliveredDate} />
        <ClockTextual deadline={orderTime} deliveredDate={deliveredDate} />
      </div>
    </div>
  );
};

export default GeneralSettings;
