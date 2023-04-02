import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser"


function Join(props) {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);
    emailjs.sendForm('service_asg2j6g', 'template_4jdwgs3', form.current, 'Kld5CxAOmLcJB46rl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={(e) =>sendEmail(e.target.value)}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email Address here..."
          />
          <button type="submit" className="btn btn-j">
            Join now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
