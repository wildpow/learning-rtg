import React from 'react'
import { CSSTransition } from 'react-transition-group';
import './message.css';
class MakingMyOwn extends React.Component {
  state = {
    text: '',
    arr: [],
    count: 0,
  }
  arrPush() {
    let char = this.state.text.slice(-1)
    console.log(char)
    let newArr = [...this.state.arr]
    console.log(newArr)
    console.log(this.state.count)
    newArr.push(char)
    this.setState({arr: newArr})
  }
  render() {
    return (
      <div>
        <form>
          Type Something
          <input 
            type="text" 
            value={this.state.text}
            onChange={event => {
              
              this.setState({
                text: event.target.value,
                count: this.state.count + 1,
              },()=> this.arrPush())
            }}/>
        </form>
        
        {this.state.arr.map((item, index) => (
           <CSSTransition
          //  in={this.state.arr}
           timeout={300}
           classNames="message"
           key={index + 1}
           >
           <div className='message'>
           <span className='message' key={index}>{item}</span>
           </div>
           </CSSTransition>
        ))}
        
        {/* <CSSTransition
          in={this.state.text}
          timeout={300}
          classNames="message"
          > */}
          {/* <h1>
            {this.state.text}
          </h1> */}
        
        {/* </CSSTransition> */}
      </div>
    )
  }
}

export default MakingMyOwn;