import {
  selectIsLoading,
  selectError,
  selectFilter,
  selectGetCars,
} from "../../src/redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { CarsList } from "../components/Catalog/CarsList/CarsList";
import { Loader } from "../../src/components/Loader/Loader";
import { Container, ComponentsContainer } from "../../src/Container.styled";
import Filter from "../../src/components/Catalog/Filter/Filter";
import { filterValue } from "../../src/redux/filter/filterSlice";
import { useEffect } from "react";
import { fetchCars } from "../../src/redux/cars/operations";

const Catalog = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const cars = useSelector(selectGetCars);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filter.make === "all" || filter.make === null) {
      dispatch(fetchCars());
    }
  }, [dispatch, filter.make]);

  const onSubmit = (value) => {
    dispatch(filterValue(value));
  };

  const visibleCarsMake = cars.filter((car) => {
    if (filter.make === "all") {
      return true;
    }
    return car.make.toLowerCase() === filter.make;
  });

  return (
    <Container>
      {isLoading && !error && <Loader />}
      <ComponentsContainer>
        <Filter onSubmit={onSubmit} />
        <CarsList visibleCarsMake={visibleCarsMake} />
      </ComponentsContainer>
    </Container>
  );
};

export default Catalog;
