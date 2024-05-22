import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState<number | undefined>();

  const handleIncrement = () => {
    setPrevCount(count); // Cập nhật prevCount trước khi cập nhật count
    setCount(count + 1);
  };

  return (
    <div>
      <p>Giá trị trước: {prevCount === undefined ? 'Chưa cập nhật' : prevCount}</p>
      <p>Giá trị hiện tại: {count}</p>
      <button onClick={handleIncrement}>Tăng</button>
    </div>
  );
}

export default Counter;
