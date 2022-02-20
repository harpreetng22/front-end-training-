import React,{component, useState} from 'react'
import ReactDOM  from 'react-dom';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
//import './index.css';
import Form from './form/Form';

const Greet=()=>{
  const [info, setinfo] = useState('');
  const handleClick=(event)=>{
    event.preventDefault();
  }
  const handleChange=(event)=>{
     setinfo(event.target.value);
     console.table(info);
  }
     return (
       <>
      <Form/>
       </>
     )
  }




// import Twitters from './twitter/Twitters'; 

// const Greet=()=>{
//   return <Twitters/>
// }

// const Greet=()=>{
//   return(
//     <><div className='con'>

//     <Comp1 first="Toaday's Money" second="$53,000" third='+55%'logo='$' col='1'></Comp1>
//     <Comp1 first="Toaday's User" second="2,300" third='+3%'logo='W' col='1'></Comp1>
//     <Comp1 first="New Client" second="+3,462" third='-2%'logo='T' col='0'></Comp1>
//     <Comp1 first="Sales" second="$103,420" third='+5%'logo='C' col='1'></Comp1>
//     </div>
//     </>
//   )
// }
// const Greet=()=>{
//   //console.log(undefined+1)
//   const [count,setcount]=useState({count1:0});
  
//   const Click=(val)=>{
//     console.log(count);
//     if(val)
//       setcount({...count,count1:count.count1+1});
//     else
//     setcount({...count,count1:count.count1-1});
      
//   }
  
  
//   return(
//     <>
//     <p>{count.count1}</p>
//      <button onClick={()=>Click(true)}>click++</button>
     
//      <button onClick={()=>Click(false)}>click--</button>
//     </>
//   )
// }
// const Greet=()=>{
//   //console.log(undefined+1)
//   const [count,setcount]=useState({count1:0,count2:5});
  
//   const Click=()=>{
//     console.log(count);
//       setcount({...count,count1:count.count1+1});
      
//   }
  
//   const Click1=()=>{
//     console.log(count);
//       setcount({count1:count.count1+0,count2:count.count2-1});
      
//   }

//   return(
//     <>
//     <p>{count.count1}</p>
//      <button onClick={Click}>click</button>
//      <p>{count.count2}</p>
//      <button onClick={Click1}>click1</button>
//     </>
//   )
// }

ReactDOM.render(<Greet></Greet>,document.getElementById('root'));
