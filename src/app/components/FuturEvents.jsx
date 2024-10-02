'use client';

import React, { useEffect, useState } from 'react';
import './futur-evenement.css';

const FuturEvents = () => {
  const [futurEvenements, setFuturEvenements] = useState([]);

  const fetchEvenements = async () => {
    try {
      const res = await fetch('https://ac-noyon-strapi-app.onrender.com/api/evenements');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Données reçues :", data);

      // Trier les événements par date
      const sortedEvenements = data.data.sort((a, b) => new Date(a.Date) - new Date(b.Date));

      // Prendre seulement les 6 derniers événements
      setFuturEvenements(sortedEvenements.slice(0, 6) || []);
    } catch (error) {
      console.error("Erreur lors de la récupération des événements :", error);
    }
  };

  useEffect(() => {
    fetchEvenements();
  }, []);

  return (
    <section className='futur_events_section'>
      <section className='futur_events_container'>
        <section className='evenement_a_venir'>
          <h2 className='evenement_a_venir_title'>Événements à venir</h2>
          <ul>
            {futurEvenements.length > 0 ? (
              futurEvenements.map((evenement) => (
                <li key={evenement.id}>
                  <p>{evenement.name}</p>
                </li>
              ))
            ) : (
              <p>Aucun événement à afficher.</p>
            )}
          </ul>
        </section>

        <section className='date_evenement_a_venir'>
          <h2 className='evenement_a_venir_title'>Date des événements</h2>
          <ul>
            {futurEvenements.length > 0 ? (
              futurEvenements.map((evenement) => (
                <li key={evenement.id}>
                  <p>{new Date(evenement.date).toLocaleString()}</p>
                </li>
              ))
            ) : (
              <p>Aucun événement à afficher.</p>
            )}
          </ul>
        </section>
      </section>
    </section>
  );
};

export default FuturEvents;
