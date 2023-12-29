import React from 'react';

interface Car {
  make: string;
  model: string;
  year: number;
  price: number;
}

interface CarListProps {
  cars: Car[];
}

const CarList: React.FC<CarListProps> = ({ cars }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {cars.map((car, index) => {
          const { make, model, year, price } = car;
          return (
            <li key={index}>
              <p>{make}</p>
              <p>{model}</p>
              <p>{year}</p>
              <p>$ {price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CarList;
