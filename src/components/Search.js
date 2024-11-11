import React from "react";
/**
 * The Search component fetches a list of plants from a server and allows users to filter
 * the plants by name using a search input. It maintains the state of the full plant list
 * and the filtered plant list. The search input triggers the `wordSearch` function, which
 * updates the filtered list to include only the plants whose names match the search term.
 */
function Search() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState(''); 

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => setPlants(data));

  }, []);

  /**
   * Filters the list of plants based on the user's search input.
   * 
   * This function is triggered by the search input field's 'onChange' event.
   * It updates the `filteredPlants` state to include only the plants whose
   * names contain the search term, case-insensitively.
   */
  function wordSearch(e) {
    const searchInput = e.target.value;
    const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchInput.toLowerCase()));
    setFilteredPlants(filteredPlants);
    console.log(filteredPlants);
    
    
  }

  return (
    <div>
       <div className="searchbar">
        <label htmlFor="search">Search Plants:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          onChange={wordSearch}
        />
      </div>
    </div>
     
  
  
    
  );
}


export default Search;
