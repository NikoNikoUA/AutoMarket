import { Circles } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Circles
      height="100"
      width="100"
      color="#3470ff"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
