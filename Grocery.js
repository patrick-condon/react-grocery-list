import React from 'react';

const Grocery = props => {
  let item = props.name

let handleClick = () => {
  props.handleButtonClick(event, props.name)
}

  return (
    <li>
      {item}
      <button type="button" onClick={handleClick}>Delete</button>
    </li>
  )
}

export default Grocery
