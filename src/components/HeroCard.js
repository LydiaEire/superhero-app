import React from 'react';

function HeroCard({ hero }) {
return (
    <div className="hero-card">
    <img src={hero.image} alt={hero.name} />
    <h2>{hero.name}</h2>
    <p><strong>Abilities:</strong> {hero.abilities}</p>
    <p><strong>Description:</strong> {hero.description}</p>
    </div>
);
}

export default HeroCard;

