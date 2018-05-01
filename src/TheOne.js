import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  
`;
const H3 = styled.h3`
  display:inline-block;
  font-size: 5rem;
  font-family: Verdana;
  margin-top: 20px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`
const Title = styled.h1`
  font-variant: small-caps;
  letter-spacing: .16rem;
  font-family: 'Arial';
  border-bottom: 5px solid whitesmoke;
  line-height: 2rem;
  
  font-size: 3rem;
  
`;
const Input = styled.input`
  padding: 15px;
  font-size: 1.7rem;
  color: darkblue;
  background-color: lightgray;
  border: 4px solid black;
  outline: none;
  border-radius: 0.2rem;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .6);

`;
class TheOne extends React.Component {
  state = { text: '' };

  render() {
    const textArray = [...this.state.text]
    
    return (
      <Wrapper>
        <Title>please type something in</Title>
        <form>
          <Input
            type="text"
            value={this.state.text}
            onChange={(event) => {
              this.setState({
                text: event.target.value.replace(' ', '\u00a0') 
              })
            }}
          />
        </form>
        <TransitionGroup>
          {textArray.map((text, index) => (
            <CSSTransition
              key={index}
              timeout={500}
              classNames="fade"
            >
              <H3>{text}</H3>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Wrapper>
    )
  }
}

export default TheOne