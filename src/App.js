import './App.css';
import {
  HashRouter,
  Route,
  Routes,
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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tour_list">
              <Route index element={<List />} />
              <Route path=":Id" element={<Spot />} />
            </Route>
            <Route path="*" element={<h2>找不到該頁面因為，我沒設定這頁的路由</h2>} />
          </Route>   
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
