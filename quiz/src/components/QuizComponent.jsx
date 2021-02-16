import React, { Component } from 'react';
import './Components.css';

class QuizComponent extends Component {
    render() {
        return(
        <div>
               <div className="quizComponent">
                   <div className="question">
                   <h1>Question</h1>
                   <p className="para">which is the mammal which can't jump ?</p>
                   <div className="option">
                       <button className='val'>Dog</button>
                       <button className='val'>Goat</button>
                   </div><br/>
                   <div className="option">
                      <button className='val'>Elephant</button>
                       <button className='val'>Lion</button>
                   </div>
                   <br/>
                   <div className="btn">
                        <button className="b1"> Previous</button>
                        <button className="b2">Next</button>
                        <button className="b3">Quit</button>
                   </div>
                   </div>
               </div> 
            </div>
        );
    }
}

export default QuizComponent;