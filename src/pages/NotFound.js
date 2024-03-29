import { Link } from "react-router-dom";
import { NotFoundMessage } from "../Container.styled";

const NotFound = () => {
  return (
    <NotFoundMessage>
      Page is not found. Please go back to <Link to="/">Home page</Link>
    </NotFoundMessage>
  );
};

export default NotFound;
