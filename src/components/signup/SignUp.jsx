import React, { useState, useEffect } from 'react';
// import Login from '../login/Login';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function SignUp(props) {
    const [password, showPassword] = useState('password');
    const [formData, setFormData] = useState({});
    const [isFormSubmit, setIsFormSubmit] = useState(false);
    
    
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handlePassword = ((e) =>{
    if(e.target.checked){
      showPassword('text');
    }
    else{
      showPassword('password')
    }
  })

  if(isFormSubmit){
    <div></div>
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      setIsFormSubmit(true);
      const response = await axios.post(
        "/user",
        {
            panId: formData.panId,
            password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status === 201) {
        setIsFormSubmit(false);
        window.location = "/";
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    showPassword();
  },[])

    return (
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
            <div className="border rounded p-3 m-2">
                {/* heading */}
                <h2 className='text-center mt-3'>
                  SignUp as <span style={{ color: "pink" }}>Lender</span>
                </h2>
              <form onSubmit={(e) => handleSubmit(e)}>
                {/* Email Section */}

                <div className="mb-3">
                  <label className="form-label">Pan Card Number</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Pan Card Number'
                    name="panId"
                    onChange={(e) => handleChange(e)}
                    />
                  <div className="form-text">We'll never share your pan with anyone else.</div>
                </div>

                  {/* Password section */}
                
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input 
                    type={password} 
                    className="form-control" 
                    placeholder='Password'
                    name='password'
                    onChange={(e) => handleChange(e)}
                    />
                  <div className="col-auto">
                    <span className="form-text">
                      Must be 8-20 characters long.
                    </span>
                  </div>
                </div>
          
                {/* show password section */}

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={(e)=> handlePassword(e)}/>
                  <label className="form-check-label" htmlFor="exampleCheck1">Show password</label>
                </div>

                {/* Submit buttonsection */}
                <div><p>if already have an account ? <NavLink to='/login' className='text-decoration-none'>Login</NavLink></p></div>
                <div className='btn'>
                  {/* <NavLink to='/registration' className='text-decoration-none'> */}
                   <button type="submit" className="btn btn-primary">Sign Up</button>
                  {/* </NavLink> */}
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
export default SignUp;