import { selectIsLoading, selectError } from "../../src/redux/selectors";
import { useSelector } from "react-redux";
import { CarsList } from "../components/Catalog/CarsList/CarsList";
import { Loader } from "../../src/components/Loader/Loader";
import { Container, ComponentsContainer } from "../../src/Container.styled";
import Filter from "../../src/components/Catalog/Filter/Filter";

const Catalog = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      {isLoading && !error && <Loader />}
      <ComponentsContainer>
        <Filter />
        <CarsList />
      </ComponentsContainer>
    </Container>
  );
};

export default Catalog;
