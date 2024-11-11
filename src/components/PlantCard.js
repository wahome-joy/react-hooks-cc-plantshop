import React, {useState} from "react";

function PlantCard({image, name, price, removePlant, id}) {//plant card component that takes in image, name, price, a functionto delete plant and id as props

  const [stock, setStock ] = useState(true) //gives stock the initial value of true

  function inStock() {
    setStock(!stock)//changes the value of stock.ieif the value was trueit becomes false and vice versa
  }

  /**
   * Removes a plant from the list of plants when the Remove button is clicked
   */
  function rem() {
    removePlant(id)
  }

  return (
    /*returns a li element that contains an image, name, price, and a button 
    with the text "In Stock" or "Out of Stock" depending on the value of stock
    and assigns button a class of "primary" if stock is true*/
    <li className="card" data-testid="plant-item" style={{position: "relative"}}>
      <img src={image} alt={name } />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={inStock} className={stock ? "primary" : ""}>{stock ? "In Stock" : "Out of Stock"}</button>
      {!stock && <button onClick={rem} style={{color: "red", border: "1px solid black"}}>Remove</button>}
      {!stock && <p style={{color: "red",position: "absolute", top: "30%", left: "15%", transform: "rotatez(-45deg)", fontSize: "2.5rem", fontWeight: "bolder"}}>Sold Out</p>}
    </li>
  );
}

export default PlantCard;
