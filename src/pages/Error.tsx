import { Link } from "react-router-dom";
import Wrapper from "../components/styles/Wrapper";
import Text from "../components/styles/Text";

const Error = () => (
  <Wrapper>
    <Text>此頁面尚未建立，或是連結到錯誤路徑 QAQ</Text>
    <Link to="/">
      <Text>點我回首頁</Text>
    </Link>
  </Wrapper>
);

export default Error;
