import { ThreeCircles } from "react-loader-spinner";

export function Spinner() {
  return (
    <div>
      <ThreeCircles
        height="100"
        width="100"
        color="#3cbbed"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
}
