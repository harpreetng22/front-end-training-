import { createContext,useState } from "react";
import { useReducer } from 'react';
export const BankContext=createContext();

export const BankProvider=(props)=>{
 



 const BankReducer=(Balance, { type, payload }) => {
  switch (type) {

  case "WITHDRAW":
    return Balance-payload
  case "DEPOSIT":
    return Balance+payload
  case "FIXED":
    return Balance*1.05  
  case "CLOSE":
    return 0  
  default:
    return Balance
  }
}

 const [Balance, dispatch] = useReducer(BankReducer, 0);

const [balance, setbalance] = useState(0);
 const deposit=(amount)=>{
     if(amount>0)
     setbalance(balance+amount);
     else
     {
         console.warn("enter valid amount")
     }
 } 

 const widraw=(amount)=>{
   if(amount>0 && amount<balance)
   {
       setbalance(balance-amount);
   }
   else
     {
         console.warn("enter valid amount")
     }
 }

 const fixed=()=>{
     setbalance(balance*1.05);
 }

 const close=()=>{
     setbalance(0);
 }

 return (
     <BankContext.Provider value={{ Balance,dispatch }}>
         {props.children}
     </BankContext.Provider>
 )

}