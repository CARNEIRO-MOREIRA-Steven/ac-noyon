'use client';

import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './futur-evenement.css';

const FuturEvents = () => {
  const [futurEvenements, setFuturEvenements] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [value, setValue] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const fetchEvenements = async () => {
    try {
      const res = await fetch('https://ac-noyon-strapi-app.onrender.com/api/evenements');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Données reçues :", data);

      const sortedEvenements = data.data.map(evenement => {
        const originalDate = new Date(evenement.date);
        
        const calendarDate = new Date(originalDate);
        calendarDate.setDate(calendarDate.getDate() - 1);
        
        return {
          ...evenement,
          date: originalDate.toISOString().split('T')[0],
          calendarDate: calendarDate.toISOString().split('T')[0], 
          time: originalDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }) 
        };
      }).sort((a, b) => new Date(a.calendarDate) - new Date(b.calendarDate)); 

      setFuturEvenements(sortedEvenements.slice(0, 6) || []);
    } catch (error) {
      console.error("Erreur lors de la récupération des événements :", error);
    }
  };

  useEffect(() => {
    fetchEvenements();
    setShowCalendar(true);
  }, []);

  const handleDateSelect = (date) => {
    const selectedDate = date.toISOString().split('T')[0];
    const event = futurEvenements.find((evenement) => {
      return evenement.calendarDate === selectedDate;
    });
    
    if (event) {
      setSelectedEvent(event); 
    } else {
      setSelectedEvent(null); 
    }
  };

  return (
    <section className='futur_events_section'>
      <section className='futur_events_container'>
        <section className='evenement_a_venir'>
          {showCalendar && (
            <Calendar
              onChange={handleDateSelect}
              value={value}
              tileClassName={({ date }) => {
                const formattedDate = date.toISOString().split('T')[0];
                const isEventDate = futurEvenements.some(evenement => {
                  return evenement.calendarDate === formattedDate;
                });
                return isEventDate ? 'marked-date' : null; 
              }}
            />
          )}
        </section>
        <section className='date_evenement_a_venir'>
          {selectedEvent ? (
            <div className="event-details">
              <h2>Détails de l'événement</h2>
              <h3>Nom : {selectedEvent.name}</h3>
              <h3>Date : {new Date(selectedEvent.date).toLocaleDateString()}</h3>
              <h3>Heure : {selectedEvent.time}</h3>
            </div>
          ) : (
            <h3>Aucun événement prévu à cette date.</h3>
          )}
        </section>
      </section>
    </section>
  );
};

export default FuturEvents;
