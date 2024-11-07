import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  return (
    <div >

      <div className="d-flex justify-content-center align-items-center vh-100">
         <div className="card p-4 shadow" style={{ width: '25rem' }}>
         <h3 className="text-center mb-4">Login</h3>

         <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
         </div>

         <div className="mb-3">
            <label htmlFor="inputPassword6" className="form-label">Password</label>
            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
            <div id="passwordHelpInline" className="form-text">
               Must be 8-20 characters long.
            </div>
         </div>

         <button type="submit" className="btn btn-primary w-100">Login</button>
         </div>
      </div>


    </div>
  )
}

export default Login