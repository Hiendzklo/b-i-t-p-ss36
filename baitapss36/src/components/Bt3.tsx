import React, { useState } from 'react';

function Navbar() {
  const [activeTab, setActiveTab] = useState<string>('Trang chủ');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {['Trang chủ', 'Sản phẩm', 'Giới thiệu', 'Liên hệ'].map((tab: string) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          style={{
            margin: '5px',
            padding: '10px',
            fontWeight: activeTab === tab ? 'bold' : 'normal',
            backgroundColor: activeTab === tab ? '#808080' : '#f0f0f0',
            color: activeTab === tab ? 'white' : 'black',
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Navbar;
