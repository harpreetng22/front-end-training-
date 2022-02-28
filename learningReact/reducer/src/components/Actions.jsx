import React from 'react';
import { useContext,useState } from 'react';
import { useReducer } from 'react';
import { BankContext } from '../BankContext';

const Actions=()=>{
    const {Balance,dispatch} = useContext(BankContext);
    console.log(Balance)
    const [value, setvalue] = useState('');

    const handler=(event)=>
    {
        setvalue(Number(event.target.value));
    }

  return (
    <div>
        <h1 className='text-center'>Your Balance is</h1>
            <h1 className='text-center'> ${Balance}</h1>
            
        <div className="input-group">
          <input type="text" className="form-control" placeholder="amount" value={value} onChange={handler} aria-describedby="basic-addon2"/>
          <div className="input-group-append " >
            <button className="btn btn-outline-secondary btn-success" style={{color:"white"}}type="button" onClick={() =>{dispatch({type: 'DEPOSIT',payload:value},setvalue('')) }}>Deposit</button>
            <button className="btn btn-outline-secondary btn-warning" style={{color:"white"}}type="button" onClick={() =>{dispatch({type: 'WITHDRAW',payload:value},setvalue('')) }}>WiTHdraw</button>
            <button className="btn btn-outline-secondary btn-success" style={{color:"white"}}type="button" onClick={() =>{dispatch({type: 'FIXED'}) }}>Fixed Deposit</button>
            <button className="btn btn-outline-secondary btn btn-danger" style={{color:"white"}}type="button" onClick={() =>{dispatch({type: 'CLOSE'}) }} >Close account</button>
          </div>
        </div>
    </div>
  )
}

export default Actions


