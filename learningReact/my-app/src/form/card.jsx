import React from 'react'

function Card(props) {
  return (
   <><div className="container">
   <h3>{props.contact.name}</h3>
   <h3>{props.contact.email}</h3>
   
   <button type="button" className="btn btn-danger ms-3" onClick={()=>props.deletehandle(props.contact.email)}>Delete</button>
    <button type="button" className="btn btn-warning ms-3" onClick={()=>props.updatehandle(props.contact.email)}>Update</button>
    </div>
    </>
  )
}

export default Card