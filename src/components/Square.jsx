import React from 'react';

//use Event-javascript onClick #2
const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      className={`square ${isWinningSquare ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      // style={{
      // fontWeight: isWinningSquare ? 'bold' : 'normal',
      // }}
    >
      {value}
    </button>
  );
};
//rafce
export default Square;
