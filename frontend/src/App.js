import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { EmailReset } from "./components/EmailReset";
import { ResetPassword } from "./components/ResetPassword";
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
          <Route
            path="/EmailReset"
            element={
              <PrivateRoute authenticated={true} component={EmailReset} />
            }
          />
          <Route
            path="/ResetPassword"
            element={
              <PrivateRoute authenticated={true} component={ResetPassword} />
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
