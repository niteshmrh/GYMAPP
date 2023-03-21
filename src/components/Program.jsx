import React from 'react';
import "./Program.css";
import {programsData} from "../data/programsData.js";
import rightArrow from "../assets/rightArrow.png"
function Program(props) {
    return (
        <div className="program">
            <div className='program-header'>
                <span className='stroke-text'> EXPLORE OUR</span>
                <span>PROGRAMS</span>
                <span className='stroke-text'>TO SHAPE YOU</span>
            </div>
            
            <div className="program-categories">
                {programsData.map((program) => (
                    <div className='category'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className='join-now'>
                            <span>Join Now</span>
                            <img src={rightArrow} alt=""/>  
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Program;