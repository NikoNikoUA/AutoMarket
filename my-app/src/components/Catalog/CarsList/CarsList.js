import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../../../redux/cars/operations";
import { selectGetCars } from "../../../redux/selectors";
import { CarCard } from "../../../../src/components/Catalog/CarCard/CarCard";
import { ListOfCars } from "./CarsList.styled";

export const CarsList = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectGetCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <ListOfCars>
      {cars.map((car) => (
        <li key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </ListOfCars>
  );
};
