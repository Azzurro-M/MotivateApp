import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./components/Footer";
// import { AuthProvider } from "./components/auth/AuthProvider";

function App() {
  const PrivateRoute = ({ component: Compontent, authenticated }) => {
    return authenticated ? <Compontent /> : <Navigate to="/" />;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route
            path="/Login"
            element={<PrivateRoute authenticated={true} component={Login} />}
          />
          <Route
            path="/home"
            element={<PrivateRoute authenticated={true} component={Home} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
