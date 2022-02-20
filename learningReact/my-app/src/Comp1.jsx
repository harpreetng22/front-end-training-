import React from "react";
import './Comp1.css';

const Comp1=(props)=>{
   
    return (
        <><div className="flex">
        <div className="content">
            <div className="item1">{props.first}</div>
            <div className="item2">{props.second}<span style={{color:props.col==1?'##82d617':'red'}}>{props.third}</span></div>
        </div>
        <div className="logo">
        {props.logo}
        </div>
        </div>
        </>
    )
}
export default Comp1