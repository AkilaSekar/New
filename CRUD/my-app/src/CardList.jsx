import React from 'react';
import Card from './Card';

const CardList = ({ cards, onDelete, onEdit }) => {
  return (
    <div className="card-list">
      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default CardList;
