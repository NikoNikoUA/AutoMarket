import common from "../../src/common.json";
import icons from "../../src/sprite.svg";
// import { CardContainer } from "../../src/components/Catalog/CarCard/CarCard.styled";
import Modal from "react-modal";
import { useState } from "react";
import { Container, FavCarsContainer } from "../Container.styled";
import { FavCarInfoForm } from "../../src/components/Favorites/FavCarInfoForm/FavCarInfoForm";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../src/redux/selectors";
import { Loader } from "../../src/components/Loader/Loader";
import {
  CardContainer,
  Img,
  Svg,
  Span,
  FirstLineContainer,
  InfoContainer,
  ButtonCard,
  Item,
} from "../../src/components/Catalog/CarCard/CarCard.styled";

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

  const city = favCars?.address?.split(", ")?.slice(-2);
  const firstFunc = favCars?.functionalities?.[0];
  const editedFirstFunc = firstFunc?.split(" ");
  const finalFunc = editedFirstFunc?.splice(0, 1)?.join(" ");

  return (
    <Container>
      {isLoading && !error && <Loader />}
      <FavCarsContainer>
        {favCars.map((car, index) => (
          <li key={car.id}>
            <CardContainer>
              <Img src={car.img} alt="car" height="274px" width="269px" />
              <Svg
                width="18px"
                height="18px"
                onClick={() => onRemovingFromFavs(car)}
              >
                <use href={`${icons}#icon-heart`}></use>
              </Svg>
              <FirstLineContainer>
                <p>
                  {car.make}
                  {index < 3 && <Span> {car.model}</Span>}, {car.year}
                </p>
                <p>{car.rentalPrice}</p>
              </FirstLineContainer>
              <InfoContainer>
                <Item>{city?.[0]}</Item>
                <Item>{city?.[1]}</Item>
                <Item>{car.rentalCompany}</Item>
                <Item>{car.type}</Item>
                <Item>{car.model}</Item>
                <Item>{car.year}</Item>
                <Item>{finalFunc}</Item>
              </InfoContainer>
              <ButtonCard type="button" onClick={openModal}>
                Learn more
              </ButtonCard>

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
