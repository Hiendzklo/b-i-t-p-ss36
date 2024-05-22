import React, { useState, useEffect } from 'react';

function Season() {
  const [season, setSeason] = useState('');

  useEffect(() => {
    const month = new Date().getMonth() + 1; // Lấy tháng hiện tại, getMonth() trả về 0-11 nên cần cộng 1
    if (month >= 1 && month <= 3) {
      setSeason('mùa Xuân');
    } else if (month >= 4 && month <= 6) {
      setSeason('mùa Hạ');
    } else if (month >= 7 && month <= 9) {
      setSeason('mùa Thu');
    } else {
      setSeason('mùa Đông');
    }
  }, []);

  return (
    <div>
      Bây giờ là ngày {new Date().toLocaleDateString('vi-VN')}, thì hiển thị là {season}.
    </div>
  );
}

export default Season;
