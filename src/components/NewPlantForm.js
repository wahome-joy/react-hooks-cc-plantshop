import React, { useState } from "react";

function NewPlantForm({ updatePlants }) {
  /*set the name, image and price to an empty tring so that we can keep
  track of them and update them later */
  const [name, setName] =useState (""); 
  const [image, setImage]=useState ("") ;
  const [price, setPrice] =useState ("");

  const handleSubmit = (e) => {
    /*this get triggered when the form is submitted.
    prevent the default behavior
    creates a new object(newplant), 
    it then posts the newplant to the server */
    e.preventDefault();
    const newPlant = {
      name,
      image,
      price: parseFloat(price)
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then((response) => response.json())
      .then((data) => updatePlants(data));

      /* this returns the nput fields in form to an empty string*/
      setImage('')
      setName('')
      setPrice('')
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name} //sets the value to name which right now is an empty string
          onChange={(e) => setName(e.target.value)} // creates an event that when things are changed inside the form,it calls the setImage function and the name is updated
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}  //sets the value to image which right now is an empty string
          onChange={(e) => setImage(e.target.value)} // creates an event that when things are changed inside the form , it calls the setImage function and the image is updated
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}//sets the value to price which right now is an empty string
          onChange={(e) => setPrice(e.target.value)} //// creates an event that when things are changed inside the form , it calls the setPrice function and the price is updated
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
