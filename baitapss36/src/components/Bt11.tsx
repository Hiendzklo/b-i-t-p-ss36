import React, { useState, useEffect } from 'react';

function ImagePreview() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  useEffect(() => {
    if (!file) {
      setPreviewUrl('');
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      // Kiểm tra và chỉ cập nhật previewUrl nếu fileReader.result là một chuỗi
      if (typeof fileReader.result === 'string') {
        setPreviewUrl(fileReader.result);
      }
    };
    fileReader.readAsDataURL(file);

    // Xóa URL đã tạo để tránh rò rỉ bộ nhớ
    return () => {
      setPreviewUrl('');
      if (fileReader.result && typeof fileReader.result === 'string') {
        URL.revokeObjectURL(fileReader.result);
      }
    };
  }, [file]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      {previewUrl && <img src={previewUrl} alt="Preview" />}
    </div>
  );
}

export default ImagePreview;
