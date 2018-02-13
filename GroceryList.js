import React from 'react';
import Grocery from './Grocery'

const GroceryList = props => {
  let groceryData = props.groceries
  let groceries = groceryData.map(item => {
    return(
      <Grocery
        key={item.id}
        name={item.name}
        handleButtonClick={props.handleButtonClick}
      />
    )
  })
  return(
    <div>
      <ul>
        {groceries}
      </ul>
    </div>
  )
}


export default GroceryList
