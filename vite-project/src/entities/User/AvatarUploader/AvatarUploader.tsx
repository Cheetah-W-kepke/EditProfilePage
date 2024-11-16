import React, { useState } from 'react';

interface AvatarUploaderProps {
  onUpload: (file: File | null) => void; // Функция, вызываемая при загрузке нового аватара
}

export const AvatarUploader: React.FC<AvatarUploaderProps> = ({ onUpload }) => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setAvatarPreview(reader.result); // Устанавливаем превью
          onUpload(file); // Передаем файл наружу через коллбэк
        }
      };
      reader.readAsDataURL(file);
    } else {
      setAvatarPreview(null); // Убираем превью, если файл не выбран
      onUpload(null);
    }
  };

  return (
    <div className="avatar-uploader">
      <div className="avatar-preview">
        {avatarPreview ? (
          <img src={avatarPreview} alt="Avatar Preview" />
        ) : (
          <span>Загрузить аватар</span>
        )}
      </div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

