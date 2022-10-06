import React, { useEffect, useState } from "react";

const ClockTextual = ({ deadline, deliveredDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div className="container">
      <div>
        Want it delivered by {deliveredDate.toDateString()} order within{" "}
        <div style={{ textAlign: "center", color: "green" }}>
          {hours} Hours {minutes} Minutes {seconds} Seconds
        </div>
      </div>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="clock-container">
          <p className="clock-hour">{leading0(hours)}</p>
          <p style={{ display: "block" }}>Hours</p>
        </div>
        <div className="clock-container">
          <p className="clock-hour">{leading0(minutes)}</p>
          <p style={{ display: "block" }}>Minutes</p>
        </div>
        <div className="clock-container">
          <p className="clock-hour">{leading0(seconds)}</p>
          <p style={{ display: "block" }}>seconds</p>
        </div>
      </div> */}
    </div>
  );
};

export default ClockTextual;
