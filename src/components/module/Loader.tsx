import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <ThreeDots
      color="#D8B4A0"
      height={45}
      ariaLabel="three-dots-loading"
      visible={true}
      wrapperStyle={{ margin: "auto" }}
    />
  );
}

export default Loader;