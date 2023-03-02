import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
