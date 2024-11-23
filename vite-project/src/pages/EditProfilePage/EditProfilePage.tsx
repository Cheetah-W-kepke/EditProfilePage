import React, { useState } from 'react';
import { BackButton } from '../../features/BackButton/BackButton';
import { AvatarUploader } from '../../entities/User/AvatarUploader/AvatarUploader';
import { InputField } from '../../entities/User/InputField/InputField';
import PhoneField from '../../entities/User/PhoneField/PhoneField';
import './EditProfilePage.css';

interface ProfileState {
  firstName: string;
  lastName: string;
  phone: string;
}

export const EditProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<ProfileState>({
    firstName: '',
    lastName: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Partial<ProfileState>>({});

  const validateForm = () => {
    const newErrors: Partial<ProfileState> = {};

    if (profile.firstName.length < 2 || profile.firstName.length > 20) {
      newErrors.firstName = 'Имя должно содержать от 2 до 20 символов.';
    }

    if (profile.lastName.length < 2 || profile.lastName.length > 32) {
      newErrors.lastName = 'Фамилия должна содержать от 2 до 32 символов.';
    }

    if (!/^\d{12}$/.test(profile.phone)) {
      newErrors.phone = 'Номер телефона должен содержать 12 цифр.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log('Данные сохранены:', profile);
      alert('Профиль успешно сохранён!');
    }
  };

  return (
    <div className="edit-profile-page">
      <BackButton onClick={() => console.log('Назад')} />

      <h1>Редактировать</h1>
      

    <div className="form-group">
      <AvatarUploader onUpload={(file) => console.log('Загружен аватар:', file)} />
      </div>

      <div className="form-group">
        <InputField
          label="Имя"
          value={profile.firstName}
          onChange={(value) => setProfile({ ...profile, firstName: value })}
          placeholder="Введите имя"
          maxLength={20}
          minLength={2}
          error={errors.firstName}
        />
      </div>

      <div className="form-group">
        <InputField
          label="Фамилия"
          value={profile.lastName}
          onChange={(value) => setProfile({ ...profile, lastName: value })}
          placeholder="Введите фамилию"
          maxLength={32}
          minLength={2}
          error={errors.lastName}
        />
      </div>

      <div className="form-group">
        <PhoneField
          label="Телефон"
          value={profile.phone}
          onChange={(value) => setProfile({ ...profile, phone: value })}
          error={errors.phone}
        />
      </div>

      <button className="save-button" onClick={handleSave}>
        Сохранить
      </button>
    </div>
    
  );
};
