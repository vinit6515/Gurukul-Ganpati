// src/components/Competitions.js
import React from 'react';

const Competitions = () => {
  const competitions = [
    {
      name: 'Drawing Competition',
      description: 'Theme: Festival or Nature',
      place: 'Mandap ,8 September 2024 [2:00PM - 3:00PM]',
      organizer: 'Mr. Medhansh Rao',
      phone: '9833105558',
    },
    {
      name: 'Rangoli Making Competition',
      description: 'Showcase your creativity skills',
      place: 'To be confirmed, 8 September 2024 [3:00PM - 5:00PM]',
      organizer: 'Ms. Nehanshi',
      phone: '9152399712',
    },
    {
      name: 'Aarti Thali Decoration Competition',
      description: 'Open for all age',
      place: 'Mandap , 8 September 2024[7:00PM onwards]',
      organizer: 'Mr. Vinay Jogi',
      phone: '9833705011',
    },
    {
      name: 'Origami Competition',
      description: 'Theme - Festival or Nature',
      place: 'Mandap, 9 September 20204[2:00PM - 4:00PM]',
      organizer: 'Mr. Darshit Jain',
      phone: '8104385610',
    },
    {
      name: 'Religious Quiz Competition',
      description: 'Upto 10th std and above 60 years',
      place: 'Mandap ,8 September 2024 [6:30PM-7:30PM]',
      organizer: 'Mr. Dhruv Jain',
      phone: '9820746602',
    },
    {
      name: 'Jewellery Making Workshop & Coaster Making Workshop',
      description: 'In collaboration with Fevicryl & Pidilite',
      place: 'A-Wing Rescue Flat , 10th September 2024[ 3:30PM - 5:00PM ]',
      organizer: 'Mr. Suditya',
      phone: '9987346621',
    },
  ];

  return (
    <div className="container">
      <h2>Competitions</h2>
      {competitions.map((comp, index) => (
        <div key={index} className="competition-card">
          <h3>{comp.name}</h3>
          <p>{comp.description}</p>
          <p><strong>Place:</strong> {comp.place}</p>
          <p><strong>To register , Contact:</strong> {comp.organizer} | <strong>Phone Number:</strong> {comp.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default Competitions;
