import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login type="login" />} />
        <Route path="/registration" element={<Registration type="login" />} />
      </Routes>
    </div>
  );
}

export default App;
