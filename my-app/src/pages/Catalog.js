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
import { useEffect, useState } from "react";
import { fetchCars } from "../../src/redux/cars/operations";
import { LoadMore } from "../../src/components/LoadMore/LoadMore";

const Catalog = () => {
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const cars = useSelector(selectGetCars);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars(page));
    setLoadMore(page < 1);
  }, [dispatch, page]);

  const clickLoadMore = () => {
    setPage((prevState) => prevState + 1);
    setLoadMore(true);
  };

  const onSubmit = (value) => {
    dispatch(filterValue(value));
  };

  const visibleCarsMake =
    filter.make && filter.make !== "all"
      ? cars.filter((car) => car.make.toLowerCase() === filter.make)
      : cars;

  return (
    <Container>
      {isLoading && !error && <Loader />}
      <ComponentsContainer>
        <Filter onSubmit={onSubmit} />
        <CarsList visibleCarsMake={visibleCarsMake} />
        {loadMore && <LoadMore clickLoadMore={clickLoadMore} />}
      </ComponentsContainer>
    </Container>
  );
};

export default Catalog;
