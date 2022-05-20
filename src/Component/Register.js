import React, { useState } from 'react'
import Header from './Header'

const Register = () => {
    var[name,setName]=useState("")
    var[mail,setEmail]=useState("")
    var[uname,setUname]=useState("")
    var[password,setPassword]=useState("")
    var[ConfirmPassword,setCpassword]=useState("")
    
    const subData=()=>{
        const data={"name":name,"mail":mail,"Uname":uname,"":uname,"password":password,"confirmpassword":ConfirmPassword}
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
                          <label for="" className="form-label">Name</label>
                          <input onChange={(e)=>setName(e.target.value)}   placeholder="Enter your name" type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-1 col-xl-6 col-xxl-6">
                    <label onChange={(e)=>setEmail(e.target.value)}   for="" classNameName="form-label">Email</label>

<input placeholder="Enter your mail" type="email" name="" id="" className="form-control"/>
                         
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-1 col-xl-6 col-xxl-6">
                    <label for="" classNameName="form-label">Username</label>
                    <input onChange={(e)=>setUname(e.target.value)}   placeholder="Enter your name" type="text" className="form-control"/>
                      </div>
                      <div className="col col-12 col-sm-6 col-md-6 col-lg-1 col-xl-6 col-xxl-6">
                      <label for="" classNameName="form-label">Password</label>
                      <input onChange={(e)=>setPassword(e.target.value)}   placeholder="Enter your Password" type="text" className="form-control"/>
                          </div>
                          <div className="col col-12 col-sm-6 col-md-6 col-lg-1 col-xl-6 col-xxl-6">
                          <label for="" classNameName="form-label">ConfirmPassword</label>
                          <input onChange={(e)=>setCpassword(e.target.value)}    placeholder="Enter your ConfirmPassword" type="text" className="form-control"/>
                              </div>

                              <div classNameName="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-12">
                              <button onClick={subData} className="btn btn-success">Register</button>
                    
                </div>


                <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                <a href="/" className="btn btn-danger">Back To Login</a>
                    
                  </div>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default Register