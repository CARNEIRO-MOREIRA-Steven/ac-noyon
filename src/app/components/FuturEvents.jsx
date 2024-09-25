"use client"
import React, { useEffect, useState } from 'react';
import './futur-evenement.css';

const FuturEvents = () => {
  const [futurEvenements, setFuturEvenements] = useState([]);

  const fetchEvenements = async () => {
    try {
      const res = await fetch('http://localhost:1337/api/futur-evenements');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Données reçues :", data);
      setFuturEvenements(data.data || []);
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
        <h2>Événements à venir</h2>
        <ul>
          {futurEvenements.length > 0 ? (
            futurEvenements.map((evenement) => (
              <li key={evenement.id}>
                <p>{evenement.Nom}</p>
              </li>
            ))
          ) : (
            <p>Aucun événement à afficher.</p>
          )}
        </ul>
      </section>

      <section className='date_evenement_a_venir'>
        <h1>Date des événements</h1>
        <ul>
          {futurEvenements.length > 0 ? (
            futurEvenements.map((evenement) => (
              <li key={evenement.id}>
                <p>{new Date(evenement.Date).toLocaleString()}</p>
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
