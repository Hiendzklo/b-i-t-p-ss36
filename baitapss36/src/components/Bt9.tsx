import React, { useState, useEffect } from 'react';

function CountTimeRender() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);  // Cập nhật số giây
    }, 1000);

    return () => clearInterval(interval);  // Dọn dẹp khi component unmount
  }, []);

  return (
    <div>
      Thời gian đã trôi qua: {seconds} giây
    </div>
  );
}

export default CountTimeRender;
