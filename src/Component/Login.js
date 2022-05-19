import React from 'react'

const Login = () => {
  return (
    <div>

<div className="container">
    <div className="row g-2">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label for="" className="form-label">Username</label>
                      <input placeholder="Enter your name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Password</label>
                    <input placeholder="Enter your password" type="password" name="" id="" className="form-control"/>
                     
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-12">
                    <button className="btn btn-success">Success</button>
                </div>
            </div>
        </div>
    </div>
</div>
         </div>
  )
}

export default Login