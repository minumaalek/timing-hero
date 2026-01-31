import React from "react";
import { useEffect, useState } from "react";
import jalaali from "jalaali-js";

function DateAndTime({ type }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const { jy, jm, jd } = jalaali.toJalaali(
    time.getFullYear(),
    time.getMonth() + 1,
    time.getDate()
  );

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  if (type === "time") {
    return (
      <span>
        {hours}:{minutes}
      </span>
    );
  }
  else if (type === "date") {
    return (
      <span>
        {jy}/{jm}/{jd}
      </span>
    );
  }
}

export default DateAndTime;
