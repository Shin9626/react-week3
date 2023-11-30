import { Mask } from "../../UtilityStyled";
import { LoadingAnimation } from "./styled";

const Loading = () => {
  return (
    <Mask>
      <LoadingAnimation />
    </Mask>
  );
};

export default Loading;
