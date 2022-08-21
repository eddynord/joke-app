import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Container() {
  return (
    <div className='joke-content'>
      <h1>JOKES</h1>
      <hr/>

      <App
        setup = "I got my daughter a fridge for her birthday."
        punchline = "I can't wait to see her face light up when she opens it."
        upvote = {42}
        downvote = {12}
        comments = {
                    [{author: "James", body: "This is a great joke", title: "about this joke"},
                    {author: "Eric", body: "This joke sucks", title: "Keep your day job"}]
                  }
        isPun = {true}
        
      />
    
      <App
        setup = "How did the hacker escape the police?"
        punchline = "He just ransomware!"
        upvote = {12}
        downvote = {45}
      />
    
      <App
        setup = "Why don't pirates travel on mountain roads?"
        punchline = "Scurvy."
        upvote = {62}
        downvote = {75}
      />
    
      <App
        setup = "Why do bees stay in the hive in the winter?"
        punchline = "Swarm."
        upvote = {78}
        downvote = {86}
      />
    
      <App
        setup = "What's the best thing about Switzerland?"
        punchline = "I don't know, but the flag is a big plus!"
        upvote = {75}
        downvote = {34}

      />

    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Container/>)
 


