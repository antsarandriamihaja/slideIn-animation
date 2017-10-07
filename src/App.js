import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import EntranceAnimation from './components/entranceAnimation';
import AboutMe from './components/aboutMe';

const ContentWrapper = styled.div`
display:flex;
flex-direction: row;
align-items: flex-start;
max-width: 1200px;
height: 100vh;
margin: 0 auto;
justify-content: center;
`;

class App extends Component {
  render() {
    return (

      <EntranceAnimation>
        <ContentWrapper>
         <AboutMe/>
        </ContentWrapper>
      </EntranceAnimation>

    );
  }
}

export default App;
