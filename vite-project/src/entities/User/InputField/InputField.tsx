import React from 'react';

interface InputFieldProps {
  label: string; // Метка для поля ввода
  value: string; // Текущее значение поля
  onChange: (value: string) => void; // Функция для обработки изменения значения
  placeholder?: string; // Текст-заглушка
  icon?: React.ReactNode; // Иконка для поля ввода
  maxLength?: number; // Максимальная длина строки
  minLength?: number; // Минимальная длина строки (добавил для будущего использования)
  error?: string; // Сообщение об ошибке
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  icon,
  maxLength,
  minLength,
  error,
}) => (
  <div className="input-field">
    {icon && <span className="input-icon">{icon}</span>}
    <label>{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
    />
    {error && <p className="error-message">{error}</p>}
  </div>
);
