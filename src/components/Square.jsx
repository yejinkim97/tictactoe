import React from 'react';

//use Event-javascript onClick #2
const Square = ({ value, onClick }) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};
//rafce
export default Square;
