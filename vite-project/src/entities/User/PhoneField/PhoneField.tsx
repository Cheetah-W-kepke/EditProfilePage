import React, { useState } from 'react';
import '../InputField/InputField.css';

interface PhoneFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label?: string; // Подпись к полю
}

const PhoneField: React.FC<PhoneFieldProps> = ({ value, onChange, error, label }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/[^\d]/g, ''); // Удаляем все, кроме цифр
    if (input.length > 0) {
      input = `+${input}`; // Добавляем "+" в начало
    }

    // Форматируем номер
    if (input.length >= 5) {
      if (input.length <= 12) {
        // Формат: (+X) XXX XXX XX XX
        input = `(+${input.slice(1, 2)}) ${input.slice(2, 5)} ${input.slice(5, 8)} ${input.slice(8, 10)} ${input.slice(10, 12)}`.trim();
      } else {
        // Формат: (+XXX) XXX XXX XXX
        input = `(+${input.slice(1, 4)}) ${input.slice(4, 7)} ${input.slice(7, 10)} ${input.slice(10, 13)}`.trim();
      }
    }

    onChange(input);
  };

  return (
    <div className="phone-field">
      {label && <label className="phone-field-label">{label}</label>}

      <div className="phone-field-container">
        {/* Иконка трубки */}
        <span className="phone-field-icon">📞</span>

        <input
          className={`phone-field-input ${error ? 'phone-field-input-error' : ''}`}
          type="tel"
          value={value}
          onChange={handleChange}
          placeholder="Введите номер телефона"
        />
      </div>

      {error && <span className="phone-field-error">{error}</span>}
    </div>
  );
};

export default PhoneField;
