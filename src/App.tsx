import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Spots from "./Pages/Spots";
import Error from "./Pages/Error";

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
