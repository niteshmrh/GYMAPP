import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/Login";
import SingUp from "./components/singup/SingUp";
import Registration from "./components/registration/Registration";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login type="login" />} />
        <Route path="/singup" element={<SingUp type="singup" />} />
        <Route path="/registration" element={<Registration type="login" />} />
      </Routes>
    </div>
  );
}

export default App;
