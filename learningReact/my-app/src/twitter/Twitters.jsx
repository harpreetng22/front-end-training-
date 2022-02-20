import React, { useState } from 'react'
import Twitter from './twitter'
function Twitters() {
    const [tweet, settweet] = useState([
{
    id:1,
    name:'user1',
    twitterhandle:'handle1',
    content:'content1',
    likes:0
},
{
    id:2,
    name:'user2',
    twitterhandle:'handle2',
    content:'content2',
    likes:0
},
{
    id:3,
    name:'user3',
    twitterhandle:'handle3',
    content:'content3',
    likes:0
}
])
const renderer=()=>{
    return tweet.map(item=>{      
       return <Twitter tweet={item}  handleLike={handleLikes} handleDislike={handleDisikes}/>
    })
}

const handleLikes=(id)=>{
    const prevSate=[...tweet];
    const index=tweet.findIndex(el=>el.id===id);
    prevSate[index].likes++;
    settweet(prevSate);
}
const handleDisikes=(id)=>{
    const prevSate=[...tweet];
    const index=tweet.findIndex(el=>el.id===id);
    if(prevSate[index].likes>0)
    prevSate[index].likes--;
    settweet(prevSate);
}
  return (<>
        {renderer()}</>
)
}

export default Twitters