import React from "react";
import { NavLink } from "react-router-dom";

function SingUp(props) {
  return (
    <div>
      <div>Sing up page</div>
      <NavLink to="/registration">
        <button>Registration</button>
      </NavLink>
    </div>
  );
}

export default SingUp;
