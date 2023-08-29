import React, { useState, useEffect } from 'react';

const AddCardForm = ({ card, onUpdate }) => {
  const [title, setTitle] = useState(card.title);
  const [content, setContent] = useState(card.content);

  useEffect(() => {
    setTitle(card.title);
    setContent(card.content);
  }, [card]);

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim() !== '' && content.trim() !== '') {
      onUpdate({ ...card, title, content });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default AddCardForm;
