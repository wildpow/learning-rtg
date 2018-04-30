import React from 'react';
import styled from 'styled-components';

const Animation = styled(ReactCSSTransitionGroup)`
  ${({ transitionName }) => `.${transitionName}-enter`} {
    opacity: 0;
  }

  ${({transitionName}) => `.${transitionName}-leave`} {
    opacity: 1;
  }
`

const animationID = 'some-hashed-text'

const AnimationComponent = props => (
  <Animation
    transitionName={animationID}
    transitionEnterTimeout={0.1}
    transitionLeaveTimeout={2000}
  >
    <div>some content</div>
  </Animation>
)