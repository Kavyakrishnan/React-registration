import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    var[name,SetName]=useState("")
    var[password,setPassword]=useState("")
   const SubData=()=>{
       const data={"name":name,"password":password}
       console.log(data)
    
   }

  return (
    <div>
<Header/>
<div className="container">
    <div className="row g-2">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label for="" className="form-label">Username</label>
                      <input onChange={(e)=>SetName(e.target.value)}  placeholder="Enter your name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-1 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter your password" type="password" name="" id="" className="form-control"/>
                     
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-12">
                    <button onClick={SubData} className="btn btn-success">Success</button>
                    <a href="/register">New users click here</a>
                </div>
                
            </div>
        </div>
    </div>
</div>
         </div>
  )
}

export default Login