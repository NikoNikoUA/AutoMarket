import common from "../../src/common.json";
import icons from "../../src/sprite.svg";
import { CardContainer } from "../../src/components/Catalog/CarCard/CarCard.styled";
import Modal from "react-modal";
import { useState } from "react";
import { Container, FavCarsContainer } from "../Container.styled";
import { FavCarInfoForm } from "../../src/components/Favorites/FavCarInfoForm/FavCarInfoForm";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../src/redux/selectors";
import { Loader } from "../../src/components/Loader/Loader";

Modal.setAppElement("#root");

const Favourites = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favCars, setFavCars] = useState(
    JSON.parse(localStorage.getItem(common.LS_CARS)) ?? []
  );

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const onRemovingFromFavs = (carToRemove) => {
    const updatedFavCars = favCars.filter((car) => car.id !== carToRemove.id);
    setFavCars(updatedFavCars);
    localStorage.setItem(common.LS_CARS, JSON.stringify(updatedFavCars));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      {isLoading && !error && <Loader />}
      <FavCarsContainer>
        {favCars.map((car) => (
          <li key={car.id}>
            <CardContainer>
              <img src={car.img} alt="car" height="274px" width="269px" />
              <svg
                width="18px"
                height="18px"
                onClick={() => onRemovingFromFavs(car)}
              >
                <use href={`${icons}#icon-heart`}></use>
              </svg>
              <p>{car.make}</p>
              <p>{car.model}</p>
              <p>{car.year}</p>
              <p>{car.rentalPrice}</p>
              <p>{car.address}</p>
              <p>{car.rentalCompany}</p>
              <p>{car.functionalities}</p>
              <p>{car.type}</p>
              <button type="button" onClick={openModal}>
                Learn more
              </button>

              <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Modal for FavCarsInfo"
              >
                <FavCarInfoForm car={car} closeModalWindow={closeModal} />
              </Modal>
            </CardContainer>
          </li>
        ))}
      </FavCarsContainer>
    </Container>
  );
};

export default Favourites;
