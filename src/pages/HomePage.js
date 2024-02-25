import { useSelector } from "react-redux";
import { Loader } from "../../src/components/Loader/Loader";
import { selectError, selectIsLoading } from "../redux/selectors";
import { Background, Text, Span } from "../../src/Container.styled";
import pic from "../../src/car-gdd62e2388_1280.jpg";

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Background $url={pic && `url(${pic})`}>
      {isLoading && !error && <Loader />}

      <Text>
        Welcome to <Span>DCR</Span> - Your <Span>Dream Car Rental</Span>
        company. Here, you can find a car that will satisfy the needs of the
        most demanding customer. Make your choice now and hit the road with
        <Span>DCR</Span>!
      </Text>
    </Background>
  );
};

export default HomePage;
