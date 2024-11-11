import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

/**
 * The main App component.
 * 
 * This component renders the main application layout. It does not handle any
 * state or props directly.
 * 
 * @returns {JSX.Element} The rendered App component.
 */


function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
