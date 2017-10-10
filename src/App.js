import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import EntranceAnimation from './components/entranceAnimation';
import AboutMe from './components/aboutMe';
import Portfolio from './components/portfolio';
import Transition from './components/transition';
const ContentWrapper = styled.div`

`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPortfolio:true,
      showAnimation: false
    }
  };

  handleShowPortfolio = () => {
    this.setState({
      showAnimation: true,
      showPortfolio: false,
    })
  }

  render() {
    const {showPortfolio, showAnimation} = this.state;
    return (
      <ContentWrapper>
        <Transition>
          {showPortfolio ? 
        <AboutMe 
        handleShowPortfolio = {this.handleShowPortfolio}
        /> : null
      }
        </Transition>
        <Transition>
          {showAnimation ? 
            <Portfolio/>
            : null
          }
        </Transition>
        {/* <EntranceAnimation
        showAnimation = {showAnimation}
        >
          <Portfolio/>
        </EntranceAnimation> */}
      </ContentWrapper>
    );
  }
}

export default App;
