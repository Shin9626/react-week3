import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Spots from "./pages/Spots";
import Error from "./pages/Error";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/spots" element={<Spots />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
