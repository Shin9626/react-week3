import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className='Layout'>
      <Navbar/>
      <div className='main'>
        <Outlet/>
      </div>  
      <Footer/>
    </div>
  );
}

export default Layout;