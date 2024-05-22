import React, { useEffect, useState } from 'react';

function Scroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.title = `Vị trí cuộn: ${scrollPosition}`;
  }, [scrollPosition]);

  return (
    <div>
      <p>
        {`Tấm là một cô gái hiền lành, xinh đẹp nhưng mồ côi mẹ từ sớm. Sau khi bố mất, Tấm phải sống cùng mụ dì ghẻ ác độc và em gái tên là Cám. Nàng bị hành hạ, đánh đập và ngược đãi mỗi ngày.

Tất cả công việc trong nhà từ trong ra ngoài đều do một tay Tấm lo hiệu. Cám thì được cưng chiều, yêu thương. Trong khi đó, Tấm làm lụng vất vả nhưng luôn bị mẹ con ả ta đánh đập, ức hiếp.

30 bộ truyện cổ tích Việt Nam hay nhất, cho bé thích mê - Ảnh 4
Truyện cổ tích Việt Nam Tấm Cám

Vào mỗi lần Tấm khóc Bụt sẽ hiện lên an ủi và giúp đỡ nàng. Vào một ngày nọ, trong làng có tổ chức lễ hội tuyển vợ cho vua. Nhờ vào sự giúp đỡ của Bụt Tấm đã trở thành hoàng hậu.

Nhưng mẹ con nhà Cám vẫn không buông tha, tìm cách giết nàng để Cám làm hoàng hậu. Sau khi chết, Tấm lần lượt hóa thân thành chim vàng anh, cây xoan đào, khung cửi, quả thị nhưng đều bị mẹ con Cám hãm hại. 

Cuối cùng nàng Tấm đã trở về đoàn tụ với nhà vua. Còn mẹ con Cám thì bị trừng phạt thích đáng vì tội ác mình gây ra.

Ý nghĩa rút ra:

Câu chuyện cổ tích của mẹ kế và người em độc ác muốn nhắn nhủ đến các em rằng. Trong cuộc sống, những người ăn ở hiền lành, tốt bụng sẽ được ông trời, thần Phật giúp đỡ và chở che.

Còn những ai sống ác, tìm cách hãm hại người khác sớm muộn cũng sẽ nhận phải báo ứng mà mình đã gây ra. Người “Ở hiền ắt sẽ gặp lành” đó là quy luật của cuộc sống.Ngày xửa ngày xưa trong một gia đình nọ, sau khi cha mẹ mất sớm và đã để lại cho hai anh em khối gia tài. Vợ chồng người anh tham lam giành hết chỉ chia cho người em một mảnh vườn nhỏ có cây khế.

Vợ chồng người em không hề oán trách người anh, chăm chỉ làm việc và chăm sóc cây khế chu đáo. Mùa khế đến, cây cho rất nhiều quả to và mọng nước, ngọt. Nhưng bỗng có một con đại bàng đến ăn khế.

Truyện cổ tích Cây khế - Ảnh 6
Truyện cổ tích cho bé Cây khế

Thấy vậy người em than khóc, kể khổ và đại bàng liền bảo “Ăn một quả, trả một cục vàng, may túi ba gang, mang theo mà đựng”. Sau khi ra đảo lấy vàng về người em trở nên giàu có nhất vùng.

Hay tin người anh tiền lân la đến dò hỏi và đổi cả gia tài của mình để đổi lấy mảnh vườn có cây khế. Mùa khế chín lại đến, chim đại bàng lại đến ăn và cũng câu nói như lần trước.

Bản tính tham lam nên người anh đã lấy rất nhiều vàng. Và kết quả trên đường về vì quá nặng nên chim đã thả người anh rơi xuống biển và chết.

Ý nghĩa rút ra:

Ở đời không nên sống tham lam, ích kỷ nếu không sẽ phải trả cái giá thật đắt như cái kết của người anh trong truyện. Đồng thời, khuyên con người chúng ta hãy luôn làm việc siêng năng, chăm chỉ sẽ gặt hái được quả ngọt. “Trời không phụ lòng người”.

3. Sọ dừa
YouTube video
Phim truyện cổ tích Sọ Dừa bé thích mê

Tóm tắt nội dung:

Có hai vợ chồng nghèo hiền lành, chăm chỉ và tốt bụng sống với nhau đã lâu nhưng mãi lại chưa thể có con. Một ngày nọ, người vợ đang trên đường đi ra đồng thì nhìn thấy một cái sọ dừa chứa đầy nước. 

Bã đã bưng lên để uống hết nước bên trong. Sau khi về nhà được vài ngày thì bà mang thai, sinh ra một đứa bé không tay không chân và tròn như quả dừa. Thời gian thấm thoát thoi đưa, Sọ Dừa lớn lên và đi chăn bò cho nhà phú ông.

Trong khi hai người chị hắt hủi thì cô em gái út luôn đối xử tốt và đã đem lòng yêu thương Sọ Dừa. Về nhà, cậu đã xin mẹ đến hỏi cưới cô út cho mình. Đến ngày cưới, Sọ Dừa biến thành một chàng thanh niên khôi ngô tuấn tú.

Anh chàng sau đó chăm chỉ học hành và đã đỗ trạng nguyên. Tuy nhiên, người vợ thì bị hai chị hãm hại. Cuối cùng hai vợ chồng Sọ Dừa được đoàn tụ và sống hạnh phúc với nhau về sau.

Ý nghĩa rút ra:

Qua câu chuyện cổ tích Sọ Dừa chúng ta không nên “trông mặt mà bắt hình dong” để đối xử với mọi người xung quanh. Vẻ đẹp tâm hồn vẫn là quan trọng nhất, “tốt gỗ hơn tốt nước sơn”. Đừng bao giờ đánh giá người khác qua vẻ bề ngoài.Ngày xửa ngày xưa trong một gia đình nọ, sau khi cha mẹ mất sớm và đã để lại cho hai anh em khối gia tài. Vợ chồng người anh tham lam giành hết chỉ chia cho người em một mảnh vườn nhỏ có cây khế.

Vợ chồng người em không hề oán trách người anh, chăm chỉ làm việc và chăm sóc cây khế chu đáo. Mùa khế đến, cây cho rất nhiều quả to và mọng nước, ngọt. Nhưng bỗng có một con đại bàng đến ăn khế.

Truyện cổ tích Cây khế - Ảnh 6
Truyện cổ tích cho bé Cây khế

Thấy vậy người em than khóc, kể khổ và đại bàng liền bảo “Ăn một quả, trả một cục vàng, may túi ba gang, mang theo mà đựng”. Sau khi ra đảo lấy vàng về người em trở nên giàu có nhất vùng.

Hay tin người anh tiền lân la đến dò hỏi và đổi cả gia tài của mình để đổi lấy mảnh vườn có cây khế. Mùa khế chín lại đến, chim đại bàng lại đến ăn và cũng câu nói như lần trước.

Bản tính tham lam nên người anh đã lấy rất nhiều vàng. Và kết quả trên đường về vì quá nặng nên chim đã thả người anh rơi xuống biển và chết.

Ý nghĩa rút ra:

Ở đời không nên sống tham lam, ích kỷ nếu không sẽ phải trả cái giá thật đắt như cái kết của người anh trong truyện. Đồng thời, khuyên con người chúng ta hãy luôn làm việc siêng năng, chăm chỉ sẽ gặt hái được quả ngọt. “Trời không phụ lòng người”.

3. Sọ dừa
YouTube video
Phim truyện cổ tích Sọ Dừa bé thích mê

Tóm tắt nội dung:

Có hai vợ chồng nghèo hiền lành, chăm chỉ và tốt bụng sống với nhau đã lâu nhưng mãi lại chưa thể có con. Một ngày nọ, người vợ đang trên đường đi ra đồng thì nhìn thấy một cái sọ dừa chứa đầy nước. 

Bã đã bưng lên để uống hết nước bên trong. Sau khi về nhà được vài ngày thì bà mang thai, sinh ra một đứa bé không tay không chân và tròn như quả dừa. Thời gian thấm thoát thoi đưa, Sọ Dừa lớn lên và đi chăn bò cho nhà phú ông.

Trong khi hai người chị hắt hủi thì cô em gái út luôn đối xử tốt và đã đem lòng yêu thương Sọ Dừa. Về nhà, cậu đã xin mẹ đến hỏi cưới cô út cho mình. Đến ngày cưới, Sọ Dừa biến thành một chàng thanh niên khôi ngô tuấn tú.

Anh chàng sau đó chăm chỉ học hành và đã đỗ trạng nguyên. Tuy nhiên, người vợ thì bị hai chị hãm hại. Cuối cùng hai vợ chồng Sọ Dừa được đoàn tụ và sống hạnh phúc với nhau về sau.

Ý nghĩa rút ra:

Qua câu chuyện cổ tích Sọ Dừa chúng ta không nên “trông mặt mà bắt hình dong” để đối xử với mọi người xung quanh. Vẻ đẹp tâm hồn vẫn là quan trọng nhất, “tốt gỗ hơn tốt nước sơn”. Đừng bao giờ đánh giá người khác qua vẻ bề ngoài. `}
      </p>
    </div>
  );
}

export default Scroll;
