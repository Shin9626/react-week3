import styled from "styled-components";
import Text from "./styles/Text";

const Img = styled.img`
  margin-bottom: 20px;
  height: 300px;

  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  object-fit: cover;
`;

const CardSpot = (props: CardSpotProps) => {
  const { children, imgUrl } = props;

  return (
    <>
      <Img src={imgUrl} alt={children} />
      <Text>{children}</Text>
    </>
  );
};

interface CardSpotProps {
  children: string;
  imgUrl: string;
}

export default CardSpot;
