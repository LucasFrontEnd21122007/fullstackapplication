// frontend/src/components/NameForm.js
import React, { useState } from 'react';

const NameForm = ({ onNameSubmit }) => {
  const [newName, setNewName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    onNameSubmit(newName);
    setNewName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Novo Nome:
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default NameForm;
