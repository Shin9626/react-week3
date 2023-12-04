import { SetStateAction } from "react";
import { InfoWrapper, Title, Desc, CloseBtn } from "./styled";
import { Mask } from "../../UtilityStyled";

const Info = (props: InfoProps) => {
  const { info, setIsShowInfo } = props;
  const { Add, Name, Description, Picture1 } = info;

  return (
    <Mask>
      <InfoWrapper>
        <img src={Picture1} alt={Name} />
        <Title>{Name}</Title>
        <Desc>{Description}</Desc>
        <span>{`地址：${Add}`}</span>
        <CloseBtn onClick={() => setIsShowInfo(false)}>關閉</CloseBtn>
      </InfoWrapper>
    </Mask>
  );
};

interface InfoProps {
  setIsShowInfo: React.Dispatch<SetStateAction<boolean>>;
  info: {
    Zipcode: string;
    Add: string;
    Name: string;
    Description: string;
    Picture1: string;
  };
}

export default Info;
