import { Outlet } from "react-router-dom";
import { PageWrapper } from "./styled";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
