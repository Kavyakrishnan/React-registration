import React from 'react'
import Header from './Header'

const Addbook = () => {
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row g-2">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label for="" className="form-label">Bookname</label>
                      <input placeholder="Enter your Bookname" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-1 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Author</label>
                    <input placeholder="Enter Author" type="text"  className="form-control"/>
                     
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-1 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Price</label>
                    <input placeholder="Enter Price" type="text"  className="form-control"/>
                     
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-12">
                    <button className="btn btn-success">Submit</button>
                 
                </div>
                
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addbook