import React from 'react';
import './PhoneField.css';

interface PhoneFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label?: string; // Добавили пропс для подписи
}

const PhoneField: React.FC<PhoneFieldProps> = ({ value, onChange, error, label }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value.replace(/[^\d]/g, ''); // Удаляем все символы, кроме цифр
    if (phoneNumber.length <= 12) {
      onChange(phoneNumber);
    }
  };

  return (
    <div className="phone-field">
      {label && <label className="phone-field-label">{label}</label>} {/* Лейбл */}
      <input
        className={`phone-field-input ${error ? 'phone-field-input-error' : ''}`}
        type="tel"
        value={`+${value}`} // Автоматически добавляем +
        onChange={handleChange}
        placeholder="Введите номер телефона"
      />
      {error && <span className="phone-field-error">{error}</span>}
    </div>
  );
};

export default PhoneField;