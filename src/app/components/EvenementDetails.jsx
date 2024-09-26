"use client";
import React, { useEffect, useState } from 'react';
import './evenement_details.css';

const EvenementDetails = () => {
    const [evenementDetails, setEvenementDetails] = useState([]);

    const fetchevenementDetails = async () => {
        try {
            const res = await fetch('http://localhost:1337/api/dernierseevenements?populate=*');
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            console.log("Données reçues :", data);
            
            setEvenementDetails(data.data || []);
        } catch (error) {
            console.error("Erreur lors de la récupération des événements :", error);
        }
    };

    useEffect(() => {
        fetchevenementDetails();
    }, []);

    return (
        <section className='evenement_container'>
            <img src='./competitons.jpg' className='image_banner'></img>
            <section className='banner_content'>            
                <h3>Consultez les événements passées</h3>
            </section>
            <section className='evenement_content'>
                    {evenementDetails.length > 0 ? (
                        evenementDetails.map((evenement) => {
                            const { id, title, description, image } = evenement;
                            return (
                                <section key={id} className='list_evenement'>
                                    <h3>{title || 'Titre non disponible'}</h3>
                                    <p>{description || 'Description non disponible'}</p>
                                    {image && image.length > 0 ? (
                                        <div className="image-gallery">
                                            {image.map((img, index) => (
                                                <img className='image_evenement'
                                                    key={index} 
                                                    src={`http://localhost:1337${img.url}`} 
                                                    alt={img.alternativeText || 'Image de l\'événement'} 
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p>Aucune image disponible pour cet événement</p>
                                    )}
                                </section>
                            );
                        })
                    ) : (
                        <p>Aucun événement trouvé.</p>
                    )}
            </section>
        </section>
    );
}

export default EvenementDetails;
