import React from 'react';
import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import { TiTick } from "react-icons/ti";
import "./Stepbar.css"
function Stepbar() {

    // const steps = ["Pin code", "Personal Information", "Employment Type"];
    // const [currentStep, setCurrentStep] = useState(1);
    // const [complete, setComplete] = useState(false);

    return (
        <div className='py-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex  flex-row justify-content-between fs-4 fw-bold">
                            <NavLink to="/pin">Pin code</NavLink>
                            <NavLink to="/personal_information"> Personal Information</NavLink>
                            <NavLink to='/employment_type'>Employment Type</NavLink>
                        </div>
                        
                        

                        {/* <div className="d-flex flex-row justify-content-between fs-4 fw-bold">
                            {steps?.map((step, i) => (
                                <div key={i} className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"} `}>
                                    <div className="step">
                                        {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
                                    </div>
                                    <p className="text-dark-500">{step}</p>
                                </div>
                            ))}
                        </div>
                        {!complete && (
                            <button className="btn" onClick={() => {currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);}}>
                                {currentStep === steps.length ? "Finish" : "Next"}
                            </button>
                        )} */}
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stepbar;