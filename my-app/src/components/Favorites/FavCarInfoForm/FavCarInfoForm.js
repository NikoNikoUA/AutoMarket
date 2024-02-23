import icons from "../../../sprite.svg";

export const FavCarInfoForm = ({ car, closeModalWindow }) => {
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
    description,
  } = car;

  return (
    <>
      <button type="button" onClick={closeModalWindow}>
        <svg width="18px" height="18px">
          <use href={`${icons}#icon-modal-cross`}></use>
        </svg>
      </button>
      <img src={img} alt="car" height="248px" width="461px" />
      <p>{make}</p>
      <p>{model}</p>
      <p>{year}</p>
      <p>{rentalPrice}</p>
      <p>{address}</p>
      <p>{rentalCompany}</p>
      <p>{functionalities}</p>
      <p>{type}</p>
      <p>{description}</p>
      <button type="button">Rental car</button>
    </>
  );
};
