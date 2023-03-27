import "./App.css";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import { Route, Routes } from "react-router-dom";
import Pin from "./components/registration/Pin";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import Personal_information from "./components/registration/Personal_information";
import EmployementType from "./components/registration/EmployementType";
import SignUp from "./components/signup/SignUp";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home type="home" />} />
        <Route path="/login" element={<Login type="login" />} />
        <Route path="/signup" element={<SignUp type="signup" />} />
        <Route path="/registration" element={<Registration type="login" />} />
        <Route path="/pin" element={<Pin type='pin_code' />} />
        <Route path='/personal_information' element={<Personal_information type='personal_information'/>}/>
        <Route path='employment_type' element={<EmployementType type='employment_type'/> }/>
      </Routes>
    </div>
  );
}

export default App;
