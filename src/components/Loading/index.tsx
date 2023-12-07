import { Mask } from "../../Styled";
import { LoadingAnimation } from "./styled";

const Loading = () => {
  return (
    <Mask>
      <LoadingAnimation />
    </Mask>
  );
};

export default Loading;
