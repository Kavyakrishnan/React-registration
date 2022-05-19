import React, { useState } from 'react'
import Header from './Header'

const Addbook = () => {
    var[bname,SetBname]=useState("")
    var[author,setAuthor]=useState("")
    var[Price,setPrice]=useState("")

   const SubData=()=>{
       const data={"bname":bname,"author":author,"price":Price}
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
                      <label for="" className="form-label">Bookname</label>
                      <input onChange={(e)=>SetBname(e.target.value)} placeholder="Enter your Bookname" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-1 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Author</label>
                    <input onChange={(e)=>setAuthor(e.target.value)} placeholder="Enter Author" type="text"  className="form-control"/>
                     
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-1 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Price</label>
                    <input onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price" type="text"  className="form-control"/>
                     
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-12">
                    <button onClick={SubData} className="btn btn-success">Submit</button>
                 
                </div>
                
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addbook