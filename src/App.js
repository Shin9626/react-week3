import './App.css';
import {
  HashRouter,
  NavLink,
  useNavigate,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import Navbar from './conponents/Navbar';
import Home from './conponents/Home';
import List from './conponents/List';
import Layout from './conponents/Layout';
import Spot from './conponents/Spot'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tour_list">
              <Route index element={<List />} />
              <Route path=":Id" element={<Spot />} />
            </Route>
            <Route path="*" element={<h1>找不到該頁面</h1>} />
          </Route>   
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
