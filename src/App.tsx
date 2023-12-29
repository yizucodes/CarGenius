import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CarList from './components/CarList';

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState([
    { make: 'Toyota', model: 'Camry', year: 2020, price: 25000 },
    { make: 'Honda', model: 'Accord', year: 2019, price: 22000 },
  ]);

  const handleSearch = (query: string) => {
    const results = searchResults.filter((car) =>
      car.model.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <div>
      <h1>Car Model Search</h1>
      <SearchBar onSearch={handleSearch} />
      <CarList cars={searchResults} />
    </div>
  );
  // End of component
};

export default App;
