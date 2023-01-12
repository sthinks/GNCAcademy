import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Kvkk from "./pages/Kvkk";
import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/basarili" element={<Success />} />
        <Route path="/kvkk" element={<Kvkk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
