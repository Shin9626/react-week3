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
import Spot from './conponents/Spot';
import ErrorPage from './conponents/ErrorPage';

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
            <Route path="*" element={<ErrorPage />} />
          </Route>   
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
