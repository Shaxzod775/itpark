import React, { useState } from 'react';
import arrowDown from '../assets/arrowDown.jpg';
import arrowUp from '../assets/arrowUp.jpg';
import './InputWithArrow.css'; 

const InputWithArrow = ({ defaultChoice, choices, placeholder, icon, add }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputChoices, setInputChoices] = useState(choices);
  const [inputPlaceholder, setInputPlaceholder] = useState(placeholder);


  const handleChoiceClick = (choice) => {
    setInputPlaceholder(choice)
    setIsInputFocused(false)
  };

  const toggleFocus = () => {
    setIsInputFocused(!isInputFocused);
  };


  return (
    <div className={`input-container ${isInputFocused ? 'focused' : ''} ${defaultChoice !== 'Все' ? 'longText' : ''} ${add === 'extraLong' ? 'extraLongText' : ''}`}>
          {icon && <img src={icon} className='inputIcon' alt='icon' />}
          {placeholder ? <p className={`inputText ${add === 'extraLong' ? 'extraLongText' : ''}`}>{inputPlaceholder}</p> : ''}
          
          <p className={`inputChoice ${icon ? 'with-icon' : ''} ${defaultChoice !== 'Все' ? 'longText' : ''}`}>{defaultChoice}</p>
      {isInputFocused && (
        <div className="choices-container">
          {inputChoices.map((choice, index) => (
            <div key={index} className="choice" onClick={() => handleChoiceClick(choice)}>
              {choice}
            </div>
          ))}
        </div>
      )}
      {(placeholder !== "Начало даты" && placeholder !== "Конец даты") && 
        (isInputFocused ? 
          <img src={arrowUp} alt='arrowUp' className='arrowUp-icon'/> : 
          <img src={arrowDown} alt='arrowDown' className='arrowDown-icon'/>
         )
      }
    </div>
  );
}

export default InputWithArrow;
