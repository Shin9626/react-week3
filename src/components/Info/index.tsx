import { SetStateAction } from "react";
import { InfoWrapper, Title, Desc, CloseBtn } from "./styled";
import { Mask } from "../../Styled";

const Info = (props: InfoProps) => {
  const { value, onClick } = props;
  const { Add, Name, Description, Picture1 } = value;

  return (
    <Mask>
      <InfoWrapper>
        <img src={Picture1} alt={Name} />
        <Title>{Name}</Title>
        <Desc>{Description}</Desc>
        <span>{`地址：${Add}`}</span>
        <CloseBtn onClick={() => onClick(false)}>關閉</CloseBtn>
      </InfoWrapper>
    </Mask>
  );
};

interface InfoProps {
  onClick: React.Dispatch<SetStateAction<boolean>>;
  value: {
    Zipcode: string;
    Add: string;
    Name: string;
    Description: string;
    Picture1: string;
  };
}

export default Info;
