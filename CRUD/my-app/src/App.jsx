import React, { useState } from 'react';
// import CardList from './CardList';
// import AddCardForm from './AddCardForm';
// import './App.css';
import TicTacToe from './TicTacToe'

function App() {
  const [cards, setCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);

  const addCard = newCard => {
    setCards([...cards, newCard]);
  };

  const deleteCard = id => {
    const updatedCards = cards.filter(card => card.id !== id);
    setCards(updatedCards);
  };

  const editCard = card => {
    setEditingCard(card);
  };

  const updateCard = updatedCard => {
    const updatedCards = cards.map(card =>
      card.id === updatedCard.id ? updatedCard : card
    );
    setCards(updatedCards);
    setEditingCard(null);
  };

  return (
    <div className="app">
      <h1>Card CRUD App</h1>
      {/* <AddCardForm onAdd={addCard} />
      <CardList
        cards={cards}
        onDelete={deleteCard}
        onEdit={editCard} */}
      {/* /> */}
      <TicTacToe/>
    </div>
  );
}

export default App;
