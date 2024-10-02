'use client';

import React, { useEffect, useState } from 'react';
import './evenement_details.css';

const EvenementDetails = () => {
    const [evenementDetails, setEvenementDetails] = useState([]);
    const [imageIndexes, setImageIndexes] = useState({}); // Stocker l'index de l'image pour chaque projet

    const fetchevenementDetails = async () => {
        try {
            const res = await fetch('https://ac-noyon-strapi-app.onrender.com/api/derniers-evenements?populate=*');
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            console.log("Données reçues :", data);

            // Trier les événements par date décroissante
            const sortedEvenements = data.data.sort((a, b) => new Date(b.date) - new Date(a.date));

            setEvenementDetails(sortedEvenements || []);
        } catch (error) {
            console.error("Erreur lors de la récupération des événements :", error);
        }
    };

    useEffect(() => {
        fetchevenementDetails();
    }, []);

    const NextImage = (eventId, imagesLength) => {
        setImageIndexes((prevIndexes) => {
            const currentIndex = prevIndexes[eventId] || 0;
            const nextIndex = (currentIndex + 1) % imagesLength;
            return {
                ...prevIndexes,
                [eventId]: nextIndex,
            };
        });
    };

    const PreviousImage = (eventId, imagesLength) => {
        setImageIndexes((prevIndexes) => {
            const currentIndex = prevIndexes[eventId] || 0;
            const prevIndex = (currentIndex - 1 + imagesLength) % imagesLength;
            return {
                ...prevIndexes,
                [eventId]: prevIndex,
            };
        });
    };

    return (
        <section className='evenement_container'>
            <img src='./competitons.jpg' className='image_banner' alt="Bannière" />
            <section className='banner_content'>
                <h1>Revivez nos Moments Forts !</h1>
                <h2>Retour sur les événements marquants qui ont rythmé la vie de notre club.</h2>
            </section>

            <section className='evenement_content'>
                {evenementDetails.length > 0 ? (
                    evenementDetails.map((evenement, index) => {
                        const { id, title, description, date, image } = evenement;
                        const currentIndex = imageIndexes[id] || 0; // Index par projet, par défaut 0

                        // Vérifier si l'index est pair ou impair
                        const isEven = index % 2 === 0;

                        return (
                            <section key={id} className='list_evenement'>
                                <section className='detail_evenement'>
                                    <h2>{title || 'Titre non disponible'}</h2>
                                    {image && image.length > 0 ? (
                                        <aside className={`image-gallery ${isEven ? 'left' : 'right'}`}>
                                            {image[currentIndex] && (
                                                <img
                                                    className='image_evenement'
                                                    src={`https://ac-noyon-strapi-app.onrender.com${image[currentIndex].url}`}
                                                    alt={image[currentIndex].alternativeText || 'Image de l\'événement'}
                                                />
                                            )}
                                            {image.length > 1 && (
                                                <div className="carousel-controls">
                                                    <button onClick={() => PreviousImage(id, image.length)}>
                                                        <img className='button_left' src='chevron-left-solid.svg' alt="Précédent" />
                                                    </button>
                                                    <button onClick={() => NextImage(id, image.length)}>
                                                        <img className='button_right' src='chevron-right-solid.svg' alt="Suivant" />
                                                    </button>
                                                </div>
                                            )}
                                            <p>{description || 'Description non disponible'}</p>
                                        </aside>
                                    ) : (
                                        <p>Aucune image disponible pour cet événement</p>
                                    )}
                                </section>
                            </section>
                        );
                    })
                ) : (
                    <p>Aucun événement trouvé.</p>
                )}
            </section>
        </section>
    );
};

export default EvenementDetails;
