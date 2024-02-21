import React, { useState } from "react";
import { Loader } from "../../src/components/Loader/Loader";

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loader />}
      <div>home page</div>
    </>
  );
};

export default HomePage;
