import React from 'react';

export default function ContactDetails() {

  const today = new Date();
  const time = today.getHours()

  const hours = (time > 8 && time < 17) ? 'open' : 'closed'

  return (
    <div className="ContactDetails">
      <p>We are <strong>{hours}</strong></p>
      <p>To make an appointment</p>
      <p>Call: 020 555 5555</p>
    </div>
  )
}

