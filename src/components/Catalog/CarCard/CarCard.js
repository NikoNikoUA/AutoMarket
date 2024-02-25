import icons from "../../../sprite.svg";
import { useEffect, useState } from "react";
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
  CustomModal,
} from "./CarCard.styled";
import { CarInfoForm } from "../../../../src/components/Catalog/CarInfoForm/CarInfoForm";
import { useSelector, useDispatch } from "react-redux";
import { selectFavCars } from "../../../redux/selectors";
import { addFavCar, deleteFavCar } from "../../../redux/cars/favCarsSlice";

Modal.setAppElement("#root");

export const CarCard = ({ car, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCarFavorite, setIsCarFavorite] = useState(false);
  const favCars = useSelector(selectFavCars);
  const dispatch = useDispatch();

  const {
    id,
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

  const city = address?.split(", ").slice(-2);
  const firstFunc = functionalities[0];
  const editedFirstFunc = firstFunc.split(" ");
  const finalFunc = editedFirstFunc.splice(0, 1).join(" ");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (favCars?.some((car) => car.id === id)) {
      setIsCarFavorite(true);
    } else {
      setIsCarFavorite(false);
    }
  }, [favCars, id]);

  const onHeartClick = () => {
    isCarFavorite ? dispatch(deleteFavCar(id)) : dispatch(addFavCar(car));
  };

  return (
    <CardContainer>
      <Img src={img} alt="car" height="274px" width="269px" />
      <Svg
        isCarFavorite={isCarFavorite}
        width="18px"
        height="18px"
        onClick={onHeartClick}
      >
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
        <Item>{city[0]}</Item>
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

      <CustomModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal for CarInfo"
      >
        <CarInfoForm car={car} index={index} closeModalWindow={closeModal} />
      </CustomModal>
    </CardContainer>
  );
};
