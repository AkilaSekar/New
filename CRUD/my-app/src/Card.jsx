import React, { useState } from 'react';
import AddCardForm from './AddCardForm';

const Card = ({ card, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="card">
      {isEditing ? (
        <AddCardForm card={card} onUpdate={onEdit} />
      ) : (
        <>
          <h3>{card.title}</h3>
          <p>{card.content}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(card.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Card;
