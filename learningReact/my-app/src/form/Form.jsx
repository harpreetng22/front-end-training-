import React,{useState} from 'react';
import Card from './card';
import './form.css';
function Form() {
    const [contacts, setcontacts] = useState([{
        name:'ram',
        email:'ram@gmail.com'
    },
    {
        name:'sham',
        email:'sham@gmail.com'
    }]
    );
    const [newname, setnewname] = useState('');
    const [newemail, setnewemail] = useState('');
    const handlername=(event)=>{
     setnewname(event.target.value);
    }
    const handleremail=(event)=>{
        setnewemail(event.target.value);
       }
    const addhandler=()=>{
        setcontacts([...contacts,{name:newname,email:newemail}]);
        setnewname('');
        setnewemail('');

    }
 console.log(contacts)
   const updatehandler=(eventid)=>{
       console.log(eventid);
       const newContact=[...contacts];
       const index=contacts.findIndex(item=>item.email===eventid)
       newContact[index].name=newname;
       newContact[index].email=newemail;
       setcontacts(newContact);
       setnewname('');
       setnewemail('');
  }
   const deletehandler=(eventid)=>{
     const newContacts=contacts.filter(item=>item.email!==eventid);

     setcontacts(newContacts);

 }
    const renderer=()=>{
         return contacts.map(item=>{      
            return <Card contact={item} updatehandle={updatehandler} 
            deletehandle={deletehandler}
            />
         })
     }

  return (<>
    <div className='container'>
        <div className="row">
         <div className="col">
           <input type="text" className="form-control" placeholder="First name" aria-label="First name" value={newname} onChange={handlername}/>
         </div>
         <div className="col">
           <input type="email" className="form-control" placeholder="Email" aria-label="Emaill" value={newemail} onChange={handleremail}/>
         </div>
        </div>
        <br></br>
         <button type="button" className="btn btn-primary " onClick={addhandler}>Add Contact</button> 
         
    </div>

     {renderer()} 
   

    
    </>
  )
}

export default Form