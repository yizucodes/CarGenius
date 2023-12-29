import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CarList from './components/CarList';

const ALL_CARS = [
  { make: 'Toyota', model: 'Camry', year: 2020, price: 25000 },
  { make: 'Honda', model: 'Accord', year: 2019, price: 22000 },
];

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState(ALL_CARS);

  const handleSearch = (query: string) => {
    const results = ALL_CARS.filter((car) =>
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
