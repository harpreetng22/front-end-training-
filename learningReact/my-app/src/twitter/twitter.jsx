import React from 'react'
import './twitter.css';
export const twitter = (props) => {
  return (
    <div className='container'>
        <div className="section-one">
            <div className="mainName"><h4>{props.tweet.name}</h4></div>
            <div className="twitterHandle"><h6>{props.tweet.twitterhandle}</h6></div>
        </div>
        <div className="content">{props.tweet.content}</div>
        <div className="action">
            <button onClick={()=>props.handleLike(props.tweet.id)}><i className="fa-solid fa-thumbs-up"></i></button>
            <button onClick={()=>props.handleDislike(props.tweet.id)}><i className="fa-solid fa-thumbs-down"></i></button>
            <h5><span className="badge bg-secondary">{props.tweet.likes}</span></h5>
        </div>
    </div>

  )
}
export default twitter