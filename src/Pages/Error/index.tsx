import { Link } from "react-router-dom";
import { Wrapper } from "../../Styled";

const Error = () => (
  <Wrapper>
    <p>此頁面尚未建立，或是連結到錯誤路徑 QAQ</p>
    <Link to="/">點我回首頁</Link>
  </Wrapper>
);

export default Error;
