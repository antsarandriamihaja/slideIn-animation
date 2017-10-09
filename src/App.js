import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import EntranceAnimation from './components/entranceAnimation';
import AboutMe from './components/aboutMe';

const ContentWrapper = styled.div`

`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPortfolio: false,
    }
  };

  handleShowPortfolio = () => {
    this.setState({
      showPortfolio: true,
    });
  }

  render() {
    const {showPortfolio} = this.state;
    return (
      <ContentWrapper>
        <AboutMe 
        handleShowPortfolio = {this.handleShowPortfolio}
        showPortfolio = {showPortfolio}
        />
      </ContentWrapper>
    );
  }
}

export default App;
