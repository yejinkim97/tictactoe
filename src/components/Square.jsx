import React from 'react';

//use Event-javascript onClick #2
const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{
        fontWeight: isWinningSquare ? 'bold' : 'normal',
      }}
    >
      {value}
    </button>
  );
};
//rafce
export default Square;
