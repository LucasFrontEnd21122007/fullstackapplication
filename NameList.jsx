// frontend/src/components/NamesList.js
import React, { useEffect, useState } from 'react';

const NamesList = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/names');
      const data = await response.json();
      setNames(data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {names.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};

export default NamesList;
