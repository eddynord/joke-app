import React from 'react';
import './index.css';
import thumbsup from '../src/thumbsup-icon.png'
import thumbsdown from '../src/thumbsdown-icon.png'


export default App 
function App(props) {
  return (
    <div className='wrapper'>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      <p>Punchline: {props.punchline}</p>
      
        <div className='upvote'>
          <img src={thumbsup} alt="Upvote"/> 
          <p>{props.upvote}</p>
        </div>

        <div className='downvote'>
          <img src={thumbsdown} alt= "Downvote"/> 
          <p>{props.downvote}</p>
        </div>

        <p>Author: {props.comments}</p>
        <p>{props.isPun}</p>


      
     

      <hr/>
    </div>
      
      
      
  )
}



