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
import { fetchCars, LIMIT } from "../../src/redux/cars/operations";
import { LoadMore } from "../../src/components/LoadMore/LoadMore";
// import { useSearchParams } from "react-router-dom";

const Catalog = () => {
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const cars = useSelector(selectGetCars);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Fetching page:", page);
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const totalNumberOfPages = Math.ceil(cars.length / LIMIT);
  console.log("Total number of pages:", totalNumberOfPages);

  const clickLoadMore = () => {
    console.log("Click Load More. Current page:", page);
    if (page < totalNumberOfPages) {
      setLoadMore(true);
      setPage(page + 1);
    }
  };

  const onSubmit = (value) => {
    dispatch(filterValue(value));
    setPage(1);
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
        {page < totalNumberOfPages && (
          <LoadMore clickLoadMore={clickLoadMore} />
        )}
      </ComponentsContainer>
    </Container>
  );
};

export default Catalog;
