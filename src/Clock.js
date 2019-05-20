import React, { useState, useEffect } from "react";

const Clock = props => {

    const leading0 = num => num < 10 && num > 0 ? '0' + num : num;

    const getTimeUntil = (deadline) => {
      const time = Date.parse(deadline) - Date.parse(new Date());
      const seconds = Math.floor((time/1000)%60);
      const minutes = Math.floor((time/1000/60)%60);
      const hours = Math.floor(time/(1000*60*60) % 24);
      const days = Math.floor(time/(1000*60*60*24));

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }

    useEffect(() => {
      getTimeUntil(props.deadline);
      setInterval(() => getTimeUntil(props.deadline), 1000);
    });

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    return <div className="clock">
      <div className='Clock-days'>{ leading0(days) } days</div>
      <div className='Clock-hours'>{ leading0(hours) } hours</div>
      <div className='Clock-minutes'>{ leading0(minutes) } minutes</div>
      <div className='Clock-seconds'>{ leading0(seconds) } seconds</div>
    </div>

}

export default Clock;