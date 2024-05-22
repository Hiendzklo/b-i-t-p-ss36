import React, { useState, useEffect } from 'react';

function CountClick() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Click ${count} lần`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Click {count} lần
    </button>
  );
}

export default CountClick;
