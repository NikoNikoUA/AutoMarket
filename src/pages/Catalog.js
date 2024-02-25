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
    if (page === totalNumberOfPages - 1) {
      setLoadMore(true);
    }
    setPage(page + 1);
  };

  const visibleCarsMake =
    filter?.make && filter?.make !== "all"
      ? cars.filter(
          (car) => car.make.toLowerCase() === filter.make.toLowerCase()
        )
      : cars;
  console.log(visibleCarsMake);

  return (
    <Container>
      {isLoading && !error && <Loader />}
      <ComponentsContainer>
        <Filter />
        <CarsList visibleCarsMake={visibleCarsMake} />
        {loadMore && page < totalNumberOfPages && (
          <LoadMore clickLoadMore={clickLoadMore} />
        )}
      </ComponentsContainer>
    </Container>
  );
};

export default Catalog;
