import icons from "../../../sprite.svg";
import { useState } from "react";
import Modal from "react-modal";
import {
  CardContainer,
  Img,
  Svg,
  Span,
  FirstLineContainer,
  InfoContainer,
  ButtonCard,
  Item,
} from "./CarCard.styled";
import { CarInfoForm } from "../../../../src/components/Catalog/CarInfoForm/CarInfoForm";
import { useSelector } from "react-redux";
import { selectGetCars } from "../../../redux/selectors";
import common from "../../../common.json";

Modal.setAppElement("#root");

let favorites = JSON.parse(localStorage.getItem(common.LS_CARS)) ?? [];

export const CarCard = ({ car, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cars = useSelector(selectGetCars);

  const {
    make,
    model,
    year,
    img,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
    address,
  } = car;

  const city = address.split(", ").slice(-2);
  const firstFunc = functionalities[0];
  const editedFirstFunc = firstFunc.split(" ");
  const finalFunc = editedFirstFunc.splice(0, 1).join(" ");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addingToFav = () => {
    const currentCar = cars.find(({ id }) => id === car.id);
    console.log(currentCar);
    const idx = favorites.findIndex(({ id }) => id === car.id);
    if (idx !== -1) {
      favorites.splice(idx, 1);
    } else {
      favorites.push(currentCar);
    }

    localStorage.setItem(common.LS_CARS, JSON.stringify(favorites));
  };

  return (
    <CardContainer>
      <Img src={img} alt="car" height="274px" width="269px" />
      <Svg width="18px" height="18px" onClick={addingToFav}>
        <use href={`${icons}#icon-heart`}></use>
      </Svg>
      <FirstLineContainer>
        <p>
          {make}
          {index < 3 && <Span> {model}</Span>}, {year}
        </p>
        <p>{rentalPrice}</p>
      </FirstLineContainer>
      <InfoContainer>
        <Item>{city[0].split(" ").splice(0, 3)}</Item>
        <Item>{city[1]}</Item>
        <Item>{rentalCompany}</Item>
        <Item>{type}</Item>
        <Item>{model}</Item>
        <Item>{year}</Item>
        <Item>{finalFunc}</Item>
      </InfoContainer>
      <ButtonCard type="button" onClick={openModal}>
        Learn more
      </ButtonCard>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal for CarInfo"
      >
        <CarInfoForm car={car} closeModalWindow={closeModal} />
      </Modal>
    </CardContainer>
  );
};
