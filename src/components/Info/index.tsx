import { SetStateAction } from "react";
import { Mask } from "../../UtilityStyled";

const Info = (props: InfoProps) => {
  const { setIsShowInfo } = props;
  return (
    <Mask>
      <button onClick={() => setIsShowInfo(false)}>123</button>
    </Mask>
  );
};

interface InfoProps {
  setIsShowInfo: React.Dispatch<SetStateAction<boolean>>;
}

export default Info;
