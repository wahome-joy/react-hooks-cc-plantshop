import React from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantList() {
  const [plants, setPlants] = useState([]);//plants is set to an empty array


  useEffect(() => {
    /*Fetches data from server and calls the setPlant function to update the state of plants */
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  /**
   * Removes a plant from the list of plants by filtering it out of the state
   * and making a DELETE request to the server to remove the plant from the
   * database. Then, re-fetches the list of plants to update the state.
   * @param {number} id - The ID of the plant to remove.
   */
  const removePlant = (id) => {
    setPlants(plants.filter((plant) => plant.id !== id));
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        // Re-fetch the updated list of plants
        fetch("http://localhost:6001/plants")
          .then((response) => response.json())
          .then((data) => setPlants(data));
      });
  };

  /*This code updates the plants state by appending a new plant object (newPlant) to the existing array of plants. 
  The [...plants, newPlant] creates a new array that includes all elements from the original plants array, plus the new newPlant object. */
  const updatePlants = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  return (
    /*This code returns a div element that contains the NewPlantForm, Search, and PlantCard components
    The PlantCard component is rendered for each plant in the plants array */
    <div>
      <NewPlantForm updatePlants={updatePlants} />
      <Search />
      <ul className="cards">
        {plants.map((plant) => (
          <PlantCard key={plant.id} image={plant.image} name={plant.name} price={plant.price} removePlant={removePlant} id={plant.id}/>
        ))}
      </ul>
    </div>
  );
}

export default PlantList;
