import React, { useState } from 'react';
import './Finder.css';

function Finder({ onUserSearch }) {
  const [queryText, setQueryText] = useState('');

  return (
    <div className="Finder">
      <input type="search" onChange={e => setQueryText(e.target.value)} />
      <button type="button" onClick={() => onUserSearch(queryText)}>
        Find
      </button>
    </div>
  );
}

export default Finder;
