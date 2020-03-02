import React from 'react';

export default function ContactDetails() {

  const today = new Date();
  const time = today.getHours()
  let hours;
  if(time > 8 && time < 17) {
    hours = 'open';
  } else {
    hours = 'closed';
  }

  return (
    <div className="ContactDetails">
      <p>We are <strong>{hours}</strong></p>
      <p>To make an appointment</p>
      <p>Call: 020 555 5555</p>
    </div>
  )
}

