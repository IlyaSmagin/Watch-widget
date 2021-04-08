import React, { useEffect, useState } from "react";
function Time() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  let formatedTime = (time) => (time > 9 ? time : "0" + time);
  let minutes = formatedTime(time.getMinutes());
  let hours = formatedTime(time.getHours());
  return (
    <div>
      {hours}:{minutes}
    </div>
  );
}

export default Time; // Don’t forget to use export default!
