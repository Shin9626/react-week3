import './App.css';
import {
  HashRouter,
  NavLink,
  useNavigate,
  Outlet,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import Navbar from './conponents/Navbar';
import Header from './conponents/Header';
import Footer from './conponents/Footer';
import Home from './conponents/Home';
import List from './conponents/List';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="list" element={<List />}/>
          <Route path="*" element={<h1>找不到該頁面</h1>}/>
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
