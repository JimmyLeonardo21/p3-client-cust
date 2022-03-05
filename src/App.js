import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/:slug" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
