import React, { useState } from "react";

function Finder({ onUserSearch }) {
  const [queryText, setQueryText] = useState("");

  return (
    <form>
      <input type="search" onChange={e => setQueryText(e.target.value)} />
      <button type="button" onClick={() => onUserSearch(queryText)}>
        Find
      </button>
    </form>
  );
}

export default Finder;
