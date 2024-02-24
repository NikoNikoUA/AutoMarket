import icons from "../../../sprite.svg";
import {
  Svg,
  Forma,
  Img,
  FirstLineContainer,
  Span,
  InfoContainer,
  Item,
  Descr,
  Accessories,
  ListOfItems,
  List,
  ContainerForItems,
  RentalHeading,
  ListOfRentalInfo,
  SpanColor,
  RentalLi,
  ButtonRental,
} from "./CarInfoForm.styled";

export const CarInfoForm = ({ car, closeModalWindow, index }) => {
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
    accessories,
    rentalConditions,
    mileage,
  } = car;

  const city = address?.split(", ").slice(-2);

  const firstFunc = functionalities[0];
  const editedFirstFunc = firstFunc.split(" ");
  const finalFunc = editedFirstFunc.splice(0, 1).join(" ");

  const rental = rentalConditions.split(" ").slice(0, 3);
  const finalAge = rental[2].split("").slice(0, 2).join("");

  const insurance = rentalConditions.split(" ");
  const insuranceInfo = insurance.slice(5);

  const insuranceFirstWord = rentalConditions.split(" ");
  const firstWord = insuranceFirstWord.slice(4);
  const words = firstWord.slice(0, 1).toString();
  const finalWord = words.split("").splice(8);
  const finalFirstWord = [finalWord.join("")];
  const combinedPharse = [...finalFirstWord, ...insuranceInfo].join(" ");

  const onAddingComa = (mileage) => {
    const lengthMileage = mileage.toString().length;
    if (lengthMileage <= 3) {
      return mileage;
    }
    const mileageArr = mileage.toString().split("");
    mileageArr.splice(lengthMileage - 3, 0, ",");
    return mileageArr.join("");
  };

  return (
    <Forma>
      <Svg onClick={closeModalWindow} width="24px" height="24px">
        <use href={`${icons}#icon-modal-cross`}></use>
      </Svg>

      <Img src={img} alt="car" height="248px" width="461px" />
      <FirstLineContainer>
        <p>
          {make}
          {index < 3 && <Span> {model}</Span>}, {year}
        </p>
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
      <Descr>{description}</Descr>
      <Accessories>Accessories and functionalities:</Accessories>
      <ContainerForItems>
        <>
          <List>
            {accessories.map((item) => (
              <ListOfItems>{item}</ListOfItems>
            ))}
          </List>
        </>
        <>
          <List>
            {functionalities.map((item) => (
              <ListOfItems>{item}</ListOfItems>
            ))}
          </List>
        </>
      </ContainerForItems>
      <RentalHeading>Rental conditions:</RentalHeading>
      <ListOfRentalInfo>
        <RentalLi className="age">
          Minimal age: <SpanColor>{finalAge}</SpanColor>
        </RentalLi>
        <RentalLi className="license">Valid driver’s license</RentalLi>
        <RentalLi className="proof">{combinedPharse}</RentalLi>
        <RentalLi className="mileage">
          Mileage: <SpanColor>{onAddingComa(mileage)}</SpanColor>
        </RentalLi>
        <RentalLi className="price">
          Price: <SpanColor>{rentalPrice}</SpanColor>
        </RentalLi>
      </ListOfRentalInfo>

      <ButtonRental
        type="button"
        onClick={() => (window.location.href = "tel:+380730000000")}
      >
        Rental car
      </ButtonRental>
    </Forma>
  );
};
