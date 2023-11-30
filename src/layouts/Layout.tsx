import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

const Layout = () => {
  return (
    <PageWrapper>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </PageWrapper>
  );
};

export default Layout;
