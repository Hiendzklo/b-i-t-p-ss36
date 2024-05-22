import React, { useState, useEffect } from 'react';

function CountTime() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    let interval: number | undefined;  // Khai báo kiểu cho biến interval
    if (isRunning) {
      setStartTime(Date.now() - elapsedTime);
      interval = window.setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, startTime, elapsedTime]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setStartTime(0);
  };

  return (
    <div>
      <h2>Đếm thời gian: {(elapsedTime / 1000).toFixed(3)}</h2>
      <button onClick={handleStart} disabled={isRunning}>Bắt đầu</button>
      <button onClick={handleStop} disabled={!isRunning}>Dừng</button>
      <button onClick={handleReset}>Đặt lại</button>
    </div>
  );
}

export default CountTime;
