// src/features/SaveProfileButton/ui/SaveButton.jsx
import React from 'react';
import '.SaveUserInfoButton.css'

interface SaveUserInfoButton {
    onClick: () => void;
  }

export const SaveUserInfoButton: React.FC<SaveUserInfoButton> = ({ onClick }) => {
    return (
  <button onClick={onClick} className="save-button">
    Сохранить
  </button>
    );
};


