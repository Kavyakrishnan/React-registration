import React from 'react'

const View = () => {
    var book=
    [
      {
      "title":"You are unique",
      "Price":"200",
      "author":"APJ",
      
    },
    {
      "title":"Dream think act",
      "Price":"20990",
      "author":"Apj",
    },
    {
      "title":"Guiding souls",
      "Price":"288",
      "author":"Apj",
     
    },
    {
        "title":"Forge your future",
        "Price":"288",
        "author":"Apj",




    }

  
  ]
  return (
    <div><div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
     <div className="row g-3">
     <div className='col col-12 col-sm-12 col-md-12 col-lg-12'>
     <table class="table table-primary">
                        <thead>
                            <tr><th scope="col">NO</th>
                                <th scope="col">title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Author</th>
                             
                               
                            </tr>
                        </thead> 
     <tbody>   
     {book.map((value,key)=>{
                return <tr>      
       <th scope="row">1</th>
       <td>{value.title}</td>
       <td>{value.Price}</td>
       <td>{value.author}</td>
  
         
       </tr>
   
   
            } )}
              </tbody>
   </table>
            </div>    
              </div>
              </div>
              </div>
              </div>
              </div>
      
   
  )
}

export default View