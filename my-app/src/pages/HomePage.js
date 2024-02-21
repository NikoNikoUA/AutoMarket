import React, { useState } from "react";
import { Loader } from "../../src/components/Loader/Loader";
import { useSelector } from "react-redux";
import { getCars } from "../../src/redux/selectors";

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  const cars = useSelector(getCars);
  console.log(cars);

  return (
    <>
      {loading && <Loader />}
      <div>home page</div>
    </>
  );
};

export default HomePage;
