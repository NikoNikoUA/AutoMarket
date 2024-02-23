import icons from "../../../sprite.svg";
import { useState } from "react";
import Modal from "react-modal";
import { CardContainer } from "./CarCard.styled";
import { CarInfoForm } from "../../../../src/components/Catalog/CarInfoForm/CarInfoForm";
import { useSelector } from "react-redux";
import { selectGetCars } from "../../../redux/selectors";
import common from "../../../common.json";

Modal.setAppElement("#root");

let favorites = JSON.parse(localStorage.getItem(common.LS_CARS)) ?? [];

export const CarCard = ({ car }) => {
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
      <img src={img} alt="car" height="274px" width="269px" />
      <svg width="18px" height="18px" onClick={addingToFav}>
        <use href={`${icons}#icon-heart`}></use>
      </svg>
      <p>{make}</p>
      <p>{model}</p>
      <p>{year}</p>
      <p>{rentalPrice}</p>
      <p>{address}</p>
      <p>{rentalCompany}</p>
      <p>{functionalities}</p>
      <p>{type}</p>
      <button type="button" onClick={openModal}>
        Learn more
      </button>

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
