import React, { useState, useEffect } from 'react';

// Định nghĩa interface cho state để rõ ràng các kiểu dữ liệu
interface KeyInfo {
  key: string;
  keyCode: number | string;  // Cho phép keyCode là number hoặc string
}

function KeyPress() {
  const [keyInfo, setKeyInfo] = useState<KeyInfo>({ key: '', keyCode: '' });

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Cập nhật state với cả key là string và keyCode là number
      setKeyInfo({ key: event.key, keyCode: event.keyCode });
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <p>Bạn đã nhấn phím: {keyInfo.key}</p>
      <p>Mã phím: {keyInfo.keyCode}</p> 
    </div>
  );
}

export default KeyPress;
