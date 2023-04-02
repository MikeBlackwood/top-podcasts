// import { Defer, Img } from "react-progressive-loader";
import ClipLoader from "react-spinners/ClipLoader";
const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ClipLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
