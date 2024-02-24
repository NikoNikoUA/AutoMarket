import Modal from "react-modal";
import { Container, FavCarsContainer } from "../Container.styled";
import { useSelector } from "react-redux";
import {
  selectError,
  selectFavCars,
  selectIsLoading,
} from "../../src/redux/selectors";
import { Loader } from "../../src/components/Loader/Loader";

import { CarCard } from "../components/Catalog/CarCard/CarCard";

Modal.setAppElement("#root");

const Favourites = () => {
  const favCars = useSelector(selectFavCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      {isLoading && !error && <Loader />}
      <FavCarsContainer>
        {favCars.map((car, index) => (
          <li key={car.id}>
            <CarCard car={car} index={index} />
          </li>
        ))}
      </FavCarsContainer>
    </Container>
  );
};

export default Favourites;
