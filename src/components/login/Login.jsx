import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Login(props) {
  const [password, showPassword] = useState('password');
  
  const handlePassword = ((e) =>{
    if(e.target.checked){
      showPassword('text');
    }
    else{
      showPassword('password')
    }
  })

  useEffect(()=>{
    showPassword();
  },[])

    return (
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
            <div className="login-form border p-2 m-2 rounded">

                {/* heading */}
                <h2 className='text-center mt-3'>
                  LogIn as <span style={{ color: "pink" }}>Lender</span>
                </h2>
              
              <form>
                {/* Email Section */}

                <div className="mb-3">
                  <label className="form-label">Pan Card Number</label>
                  <input type="text" className="form-control" placeholder='Pan Number' />
                  <div className="form-text">We'll never share your pan with anyone else.</div>
                </div>

                  {/* Password section */}
                
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type={password} className="form-control" placeholder='Password'/>
                  <div className="col-auto">
                    <span className="form-text">
                      Must be 8-20 characters long.
                    </span>
                  </div>
                </div>
          
                {/* show password section */}

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" onClick={(e)=> handlePassword(e)}/>
                  <label className="form-check-label">Show password</label>
                </div>

                {/* Submit buttonsection */}

                <div className='btn'>
                  {/* <NavLink to='/registration'> */}
                   <button type="submit" className="btn btn-primary">Login</button>
                  {/* </NavLink> */}
                </div>
                <div>
                  <NavLink to='/signup' className='text-decoration-none'>SignUp as Lender</NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Login;