import React from 'react';
import './BackButton.css'

interface BackButtonProps {
    onClick: () => void;
  }

  export const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
    return (
      <button onClick={onClick} className="back-button">
        &lsaquo;  
        {/* Стрелочка назад */}
      </button>
    );
  };

