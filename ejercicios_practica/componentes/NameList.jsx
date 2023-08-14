import React, { useState } from 'react';

function NameList() {
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddName = () => {
    if (inputValue.trim() !== '') {
      setNames([...names, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h2>Lista de Nombres</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddName}>Agregar Nombre</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;





