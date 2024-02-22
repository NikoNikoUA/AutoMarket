import icons from "../../../sprite.svg";
import { useState } from "react";
import Modal from "react-modal";
import { CardContainer } from "./CarCard.styled";
import { CarInfoForm } from "../../../../src/components/Catalog/CarInfoForm/CarInfoForm";

export const CarCard = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  function closeModal() {
    setIsModalOpen(false);
  }

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

  return (
    <CardContainer>
      <img src={img} alt="car" height="274px" width="269px" />
      <svg width="18px" height="18px">
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
