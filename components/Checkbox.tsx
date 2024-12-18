import React from 'react';
import "../styles/components/checkbox.css";

interface CheckboxProps {
  checked: boolean;
  onChange?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <div
      onClick={onChange}
      className={`checkbox ${checked ? 'checked' : ''}`}
    >
      {checked && (
        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4.5L5.5 9.5L13.5 1" stroke="#0099FA" strokeWidth="2.5"/>
        </svg>
      )}
    </div>
  );
};

export default Checkbox;
