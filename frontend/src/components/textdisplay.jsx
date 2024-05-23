import React from 'react';

const TextDisplay = ({ text }) => {
  return (
    <div className='display-text'>
      <h3>Extracted Text:</h3>
      <p>{text}</p>
    </div>
  );
};

export default TextDisplay;
