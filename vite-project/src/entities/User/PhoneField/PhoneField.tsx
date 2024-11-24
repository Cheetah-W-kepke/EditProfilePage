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
        <span className="phone-field-icon"><svg width="19" height="19" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5317 11.4724C14.5208 15.4604 15.4258 10.8467 17.9656 13.3848C20.4143 15.8328 21.8216 16.3232 18.7192 19.4247C18.3306 19.737 15.8616 23.4943 7.1846 14.8197C-1.49348 6.144 2.26158 3.67244 2.57397 3.28395C5.68387 0.173846 6.16586 1.58938 8.61449 4.03733C11.1544 6.5765 6.54266 7.48441 10.5317 11.4724Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>

        <input
          className={`phone-field-input ${error ? 'phone-field-input-error' : ''}`}
          type="tel"
          value={value}
          onChange={handleChange}
          placeholder="Введите номер телефона"
        />
      </div>

      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default PhoneField;
