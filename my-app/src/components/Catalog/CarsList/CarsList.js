import { CarCard } from "../../../../src/components/Catalog/CarCard/CarCard";
import { ListOfCars } from "./CarsList.styled";

export const CarsList = ({ visibleCarsMake }) => {
  return (
    <ListOfCars>
      {visibleCarsMake.map((car) => (
        <li key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </ListOfCars>
  );
};
