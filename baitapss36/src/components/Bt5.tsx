import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date()); // Khởi tạo state với thời gian hiện tại

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date()); // Cập nhật thời gian mỗi giây
    }, 1000);

    return () => {
      clearInterval(timerId); // Dọn dẹp khi component unmount
    };
  }, []);

  return (
    <div>
      Thời gian hiện tại: {time.toLocaleTimeString('it-IT')}
    </div>
  );
}

export default Clock;
