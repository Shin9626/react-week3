import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;

  background-color: #001b2e;

  color: white;
`;

const Footer = () => (
  <FooterWrapper>React-Week-3 高雄旅遊網 by Shin</FooterWrapper>
);

export default Footer;
