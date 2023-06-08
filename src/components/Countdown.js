import React from 'react';
import moment from 'moment';


const Countdown = ({ countdownTimer, unixEndDate, eventName }) => {

  return (
    <div className="countdown">
      <div className="card">
        <div className="countdown-value">{countdownTimer.mins}</div>
        <div className="countdown-unit">Mins</div>
      </div>
      <div className="card">
        <div className="countdown-value">{countdownTimer.secs}</div>
        <div className="countdown-unit">Secs</div>
      </div>
      <p>Counting down to production delivery of {eventName} on {moment.unix(unixEndDate).format('dddd, MMMM Do, YYYY | h:mm A')}</p>
      <img src="/images/Vortex-logo.png" alt="Logo" className='logo'/>
    </div>
  );
}

export default Countdown;
