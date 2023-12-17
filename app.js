// frontend/src/App.js
import React from 'react';
import NamesList from './components/NamesList';
import NameForm from './components/NameForm';

const App = () => {
  const handleNameSubmit = async (newName) => {
    const response = await fetch('/api/names', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newName }),
    });

    const updatedNamesList = await response.json();
    setNames(updatedNamesList);
  };

  return (
    <div>
      <h2>Lista de Nomes</h2>
      <NamesList />
      <NameForm onNameSubmit={handleNameSubmit} />
    </div>
  );
};

export default App;
