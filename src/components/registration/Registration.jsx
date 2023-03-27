import React, { useState } from "react";
import Personal_information from "./Personal_information";
import { NavLink } from "react-router-dom";
import Pin from "./Pin";
import Stepbar from "./Stepbar";
import EmployementType from "./EmployementType";

function Registration(props) {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  console.log(count);
  return (
    <div className="py-2">
      <div className="text-center">Registration Page</div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-3">
            <div className="border border-primary py-3">
              <Stepbar />
              {count == 1 ? (
                <Pin />
              ) : count == 2 ? (
                <Personal_information />
              ) : count == 3 ? (
                <EmployementType />
              ) : (
                <div></div>
              )}
              {/* <Pin /> */}
              <div className="text-end me-3">
                {count <= 2 ? (
                  <div className="col-auto">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleIncrement()}
                    >
                      Next
                    </button>
                  </div>
                ) : (
                  <div>
                    <button className="btn btn-primary">Submit</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
