import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import EntranceAnimation from './components/entranceAnimation';
import AboutMe from './components/aboutMe';

const Wrapper = styled.div`
display:flex
`
class App extends Component {
  render() {
    return (
      <Wrapper>
        <EntranceAnimation>
          <AboutMe/>
        </EntranceAnimation>
      </Wrapper>
    );
  }
}

export default App;
